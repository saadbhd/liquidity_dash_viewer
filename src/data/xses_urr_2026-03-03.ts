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
      "ticker": "URR",
      "name": "Sim Leisure",
      "marketCap": 89297208.0,
      "sector": "Leisure",
      "industry": "Consumer Cyclical"
    },
    {
      "ticker": "S85",
      "name": "Straco",
      "marketCap": 320705467.5,
      "sector": "Leisure",
      "industry": "Consumer Cyclical"
    },
    {
      "ticker": "N0Z",
      "name": "Combine Will",
      "marketCap": 41379072.0,
      "sector": "Leisure",
      "industry": "Consumer Cyclical"
    },
    {
      "ticker": "BCV",
      "name": "Qian Hu",
      "marketCap": 16234284.781,
      "sector": "Leisure",
      "industry": "Consumer Cyclical"
    },
    {
      "ticker": "BHU",
      "name": "SUTL Enterprise",
      "marketCap": 77694664.25,
      "sector": "Leisure",
      "industry": "Consumer Cyclical"
    },
    {
      "ticker": "G50",
      "name": "Grand Banks",
      "marketCap": 130609254.3,
      "sector": "Leisure",
      "industry": "Consumer Cyclical"
    },
    {
      "ticker": "596",
      "name": "Pavillon",
      "marketCap": 40179083.28,
      "sector": "Restaurants",
      "industry": "Consumer Cyclical"
    },
    {
      "ticker": "O08",
      "name": "Ossia Intl",
      "marketCap": 45725936.423,
      "sector": "Apparel Retail",
      "industry": "Consumer Cyclical"
    },
    {
      "ticker": "5SO",
      "name": "Duty Free Intl",
      "marketCap": 87468621.389,
      "sector": "Specialty Retail",
      "industry": "Consumer Cyclical"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XSES",
    "ticker": "URR",
    "company": "Sim Leisure",
    "asof_date": "2026-03-03",
    "industry": "Consumer Cyclical",
    "sector": "Leisure",
    "market_cap_display": "89.3M",
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
          "score_pca": 45.16129032258064,
          "score_pca_percentile": 45.16129032258064,
          "rank_pca": 307,
          "total": 558,
          "adv_notional_sgd": 13980.0,
          "adv_volume_shares": 23300.0,
          "free_float_shares": 159924685.0,
          "turnover_ratio": 0.0001456935807001902,
          "votes": 16.0,
          "trades": 16.0,
          "spread_pct": 0.08630227926532412,
          "spread_ticks": 9.75,
          "amihud": 2.307443813743141e-06,
          "volatility": null
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.6127400164441441,
          "loadings": {
            "log_adv": 0.5587851223067076,
            "log_trades": 0.5167762546393,
            "log_turnover": 0.5154944761810979,
            "neg_spread": 0.390723968686576,
            "neg_amihud": 0.04797619253591005,
            "neg_vol": 0.0
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
          "peer_median_adv": 19.0,
          "peer_median_score_pca": 21.95340501792115,
          "peer_median_trades": 0.5,
          "peer_median_volatility": null,
          "peer_median_spread_pct": 0.06827427254393553,
          "peer_median_spread_ticks": 4.360294117647059,
          "peer_median_amihud": 9.385297145820889e-07,
          "peer_median_turnover_ratio": 2.695475302917784e-07,
          "target_vs_peer": {
            "score_pca_delta": 23.21,
            "adv_delta_pct": 73478.9,
            "trades_delta_pct": 3100.0,
            "volatility_delta_pct": null,
            "spread_pct_delta_pct": -26.41,
            "spread_ticks_delta_pct": 123.61,
            "amihud_delta_pct": -145.86,
            "turnover_ratio_delta_pct": 53951.17
          }
        },
        "peer_liquidity": [
          {
            "ticker": "URR",
            "score_pca": 45.16129032258064,
            "rank_pca": 307,
            "adv": 13980.0,
            "trades": 16.0,
            "volatility": null,
            "spread_pct": 0.08630227926532412,
            "spread_ticks": 9.75,
            "amihud": 2.307443813743141e-06,
            "turnover_ratio": 0.0001456935807001902,
            "is_target": true
          },
          {
            "ticker": "S85",
            "score_pca": 27.060931899641577,
            "rank_pca": 408,
            "adv": 38.0,
            "trades": 1.0,
            "volatility": null,
            "spread_pct": 0.040268456375838965,
            "spread_ticks": 3.0,
            "amihud": 0.0,
            "turnover_ratio": 5.390950605835568e-07,
            "is_target": false
          },
          {
            "ticker": "N0Z",
            "score_pca": 7.168458781362006,
            "rank_pca": 519,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": null,
            "spread_pct": 0.32348956922243294,
            "spread_ticks": 41.75,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "BCV",
            "score_pca": 16.845878136200717,
            "rank_pca": 465,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": null,
            "spread_pct": 0.09333333333333342,
            "spread_ticks": 14.0,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "BHU",
            "score_pca": 40.86021505376344,
            "rank_pca": 331,
            "adv": 8900.0,
            "trades": 2.0,
            "volatility": null,
            "spread_pct": 0.028098761326793602,
            "spread_ticks": 4.970588235294118,
            "amihud": 1.9261637239165312e-06,
            "turnover_ratio": 0.0002756761453682217,
            "is_target": false
          },
          {
            "ticker": "G50",
            "score_pca": 56.98924731182796,
            "rank_pca": 241,
            "adv": 69230.0,
            "trades": 16.0,
            "volatility": null,
            "spread_pct": 0.01422632794457268,
            "spread_ticks": 1.9743589743589745,
            "amihud": 2.0934210058050658e-07,
            "turnover_ratio": 0.001058415186248111,
            "is_target": false
          },
          {
            "ticker": "596",
            "score_pca": 15.053763440860216,
            "rank_pca": 475,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": null,
            "spread_pct": 0.11152416356877322,
            "spread_ticks": 3.75,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "O08",
            "score_pca": 6.630824372759856,
            "rank_pca": 522,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": null,
            "spread_pct": 0.3440721649484536,
            "spread_ticks": 53.4,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "5SO",
            "score_pca": 44.086021505376344,
            "rank_pca": 313,
            "adv": 8102.999999999999,
            "trades": 7.0,
            "volatility": null,
            "spread_pct": 0.04321521175453764,
            "spread_ticks": 3.260869565217391,
            "amihud": 1.6677173285836712e-06,
            "turnover_ratio": 0.00039742143236069105,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Leisure",
          "sector_count": 6,
          "market_count": 558,
          "market": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 5269594.196983941,
              "median": 28828.6,
              "min": 0.0,
              "max": 556895160.0,
              "p5": 0.0,
              "p95": 24509192.399999984,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10116297367620346,
              "median": 0.02946460653970532,
              "min": 0.0002965388309958632,
              "max": 1.3747779751332152,
              "p5": 0.003636184109404978,
              "p95": 0.47367300183924266,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.009818438322833844,
              "median": 0.0005671848593110349,
              "min": 0.0,
              "max": 2.570694087403599,
              "p5": 0.0,
              "p95": 0.01947519589440732,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00017582932997297027,
              "median": 1.3881996477637723e-08,
              "min": 0.0,
              "max": 0.04140786749482397,
              "p5": 0.0,
              "p95": 3.095852480042193e-05,
              "count": 423
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 638.905017921147,
              "median": 12.0,
              "min": 0.0,
              "max": 21604.0,
              "p5": 0.0,
              "p95": 3761.349999999992,
              "count": 558
            }
          },
          "sector": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 15358.0,
              "median": 4469.0,
              "min": 0.0,
              "max": 69230.0,
              "p5": 0.0,
              "p95": 55417.5,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09761978791138261,
              "median": 0.06328536782058154,
              "min": 0.01422632794457268,
              "max": 0.32348956922243294,
              "p5": 0.01769443629012791,
              "p95": 0.26595051025015803,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00024672066789618435,
              "median": 7.311633788038689e-05,
              "min": 0.0,
              "max": 0.001058415186248111,
              "p5": 0.0,
              "p95": 0.0008627304260281387,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.1107374095600447e-06,
              "median": 1.0677529122485189e-06,
              "min": 0.0,
              "max": 2.307443813743141e-06,
              "p5": 3.1401315087075995e-08,
              "p95": 2.2502518002691493e-06,
              "count": 4
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 5.833333333333333,
              "median": 1.5,
              "min": 0.0,
              "max": 16.0,
              "p5": 0.0,
              "p95": 16.0,
              "count": 6
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 10783.875,
              "median": 19.0,
              "min": 0.0,
              "max": 69230.0,
              "p5": 0.0,
              "p95": 48114.49999999997,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 3.25,
              "median": 0.5,
              "min": 0.0,
              "max": 16.0,
              "p5": 0.0,
              "p95": 12.849999999999994,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.124778498559342,
              "median": 0.06827427254393553,
              "min": 0.01422632794457268,
              "max": 0.3440721649484536,
              "p5": 0.01908167962835,
              "p95": 0.33686825644434637,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 15.76322709685881,
              "median": 4.360294117647059,
              "min": 1.9743589743589745,
              "max": 53.4,
              "p5": 2.3333333333333335,
              "p95": 49.32249999999999,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.508057882701772e-07,
              "median": 9.385297145820889e-07,
              "min": 0.0,
              "max": 1.9261637239165312e-06,
              "p5": 3.1401315087075995e-08,
              "p95": 1.8873967646166021e-06,
              "count": 4
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00021650648237970093,
              "median": 2.695475302917784e-07,
              "min": 0.0,
              "max": 0.001058415186248111,
              "p5": 0.0,
              "p95": 0.0008270673723875136,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": -0.032258064516129115,
            "market": 0.005273109388416852,
            "sector": 0.0,
            "peers": 0.0,
            "vs_market": -0.03753117390454597,
            "vs_sector": -0.032258064516129115,
            "vs_peers": -0.032258064516129115
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 12.903225806451612,
          "score_pca_percentile": 12.903225806451612,
          "rank_pca": 487,
          "total": 558,
          "adv_notional_sgd": 0.0,
          "adv_volume_shares": 0.0,
          "free_float_shares": 159924685.0,
          "turnover_ratio": 0.0,
          "votes": 0.0,
          "trades": 0.0,
          "spread_pct": 0.16413373860182365,
          "spread_ticks": 17.0,
          "amihud": 2.752872438109364e-06,
          "volatility": 0.6563802173396578
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5323172954505445,
          "loadings": {
            "log_adv": 0.538513220230845,
            "log_trades": 0.48895926187623673,
            "log_turnover": 0.49375990620400667,
            "neg_spread": 0.41948443236509786,
            "neg_amihud": 0.09956550782987149,
            "neg_vol": 0.2030837943839267
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
          "peer_median_adv": 2439.45,
          "peer_median_score_pca": 36.02150537634409,
          "peer_median_trades": 1.5,
          "peer_median_volatility": 0.3715816843515085,
          "peer_median_spread_pct": 0.036531094615490756,
          "peer_median_spread_ticks": 2.689655172413793,
          "peer_median_amihud": 4.746856419276544e-07,
          "peer_median_turnover_ratio": 4.7479699396874356e-05,
          "target_vs_peer": {
            "score_pca_delta": -23.12,
            "adv_delta_pct": -100.0,
            "trades_delta_pct": -100.0,
            "volatility_delta_pct": -76.64,
            "spread_pct_delta_pct": -349.3,
            "spread_ticks_delta_pct": 532.05,
            "amihud_delta_pct": -479.94,
            "turnover_ratio_delta_pct": -100.0
          }
        },
        "peer_liquidity": [
          {
            "ticker": "URR",
            "score_pca": 12.903225806451612,
            "rank_pca": 487,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.6563802173396578,
            "spread_pct": 0.16413373860182365,
            "spread_ticks": 17.0,
            "amihud": 2.752872438109364e-06,
            "turnover_ratio": 0.0,
            "is_target": true
          },
          {
            "ticker": "S85",
            "score_pca": 41.03942652329749,
            "rank_pca": 330,
            "adv": 4446.0,
            "trades": 2.0,
            "volatility": 0.23964876094594278,
            "spread_pct": 0.025974025974025993,
            "spread_ticks": 2.0,
            "amihud": 0.0,
            "turnover_ratio": 6.307412208827615e-05,
            "is_target": false
          },
          {
            "ticker": "N0Z",
            "score_pca": 20.25089605734767,
            "rank_pca": 446,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.4400690860254057,
            "spread_pct": 0.06934879787362579,
            "spread_ticks": 8.96875,
            "amihud": 0.0,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "BCV",
            "score_pca": 27.77777777777778,
            "rank_pca": 404,
            "adv": 71.0,
            "trades": 1.0,
            "volatility": 0.8071168288378457,
            "spread_pct": 0.11265087170317392,
            "spread_ticks": 16.8,
            "amihud": 7.942988406414105e-06,
            "turnover_ratio": 1.3374610591525323e-05,
            "is_target": false
          },
          {
            "ticker": "BHU",
            "score_pca": 56.98924731182796,
            "rank_pca": 241,
            "adv": 31951.5,
            "trades": 7.0,
            "volatility": 0.3030942826776114,
            "spread_pct": 0.017110973341599518,
            "spread_ticks": 3.0,
            "amihud": 2.744175350609566e-07,
            "turnover_ratio": 0.0009841638389645516,
            "is_target": false
          },
          {
            "ticker": "G50",
            "score_pca": 59.49820788530465,
            "rank_pca": 227,
            "adv": 44469.0,
            "trades": 16.0,
            "volatility": 0.5494559652240021,
            "spread_pct": 0.013640407235346395,
            "spread_ticks": 2.05,
            "amihud": 2.5034986393485004e-07,
            "turnover_ratio": 0.0005875327980285267,
            "is_target": false
          },
          {
            "ticker": "596",
            "score_pca": 31.00358422939068,
            "rank_pca": 386,
            "adv": 432.9,
            "trades": 1.0,
            "volatility": 0.6104174098907297,
            "spread_pct": 0.06728425158459275,
            "spread_ticks": 2.3793103448275863,
            "amihud": 3.37381916329285e-06,
            "turnover_ratio": 3.188527670547257e-05,
            "is_target": false
          },
          {
            "ticker": "O08",
            "score_pca": 28.85304659498208,
            "rank_pca": 398,
            "adv": 82.5,
            "trades": 1.0,
            "volatility": 0.2218124416767781,
            "spread_pct": 0.044345190620513675,
            "spread_ticks": 7.315789473684211,
            "amihud": 6.749537487943522e-07,
            "turnover_ratio": 2.3845579347450554e-06,
            "is_target": false
          },
          {
            "ticker": "5SO",
            "score_pca": 45.51971326164875,
            "rank_pca": 305,
            "adv": 4620.0,
            "trades": 4.0,
            "volatility": 0.2851475470452506,
            "spread_pct": 0.02871699861046784,
            "spread_ticks": 2.2142857142857144,
            "amihud": 1.6650016650016798e-06,
            "turnover_ratio": 0.00022234117972611635,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Leisure",
          "sector_count": 6,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5965613702704161,
              "median": 0.38270122929098843,
              "min": 0.0,
              "max": 7.784600182411426,
              "p5": 0.07826050969072744,
              "p95": 1.6713736228018605,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3387314.1335102837,
              "median": 15458.900000000001,
              "min": 0.0,
              "max": 331579444.0,
              "p5": 0.0,
              "p95": 12232352.6,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09680028078262673,
              "median": 0.025178346621905188,
              "min": 0.00025777693161299257,
              "max": 1.3747779751332152,
              "p5": 0.0035371409391183367,
              "p95": 0.5020920502092043,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0070504328731464455,
              "median": 0.00031355747542606896,
              "min": 0.0,
              "max": 2.570694087403599,
              "p5": 0.0,
              "p95": 0.010434033199013185,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0001315011696112612,
              "median": 9.433973656119139e-08,
              "min": 0.0,
              "max": 0.03921568627450985,
              "p5": 0.0,
              "p95": 4.750825090799997e-05,
              "count": 545
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 444.24014336917566,
              "median": 7.0,
              "min": 0.0,
              "max": 12305.0,
              "p5": 0.0,
              "p95": 2264.4499999999975,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.49929419017507753,
              "median": 0.4947625256247039,
              "min": 0.23964876094594278,
              "max": 0.8071168288378457,
              "p5": 0.25551014137885997,
              "p95": 0.7694326759632988,
              "count": 6
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 13489.583333333334,
              "median": 2258.5,
              "min": 0.0,
              "max": 44469.0,
              "p5": 0.0,
              "p95": 41339.625,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.06714313578826588,
              "median": 0.04766141192382589,
              "min": 0.013640407235346395,
              "max": 0.16413373860182365,
              "p5": 0.014508048761909677,
              "p95": 0.15126302187716123,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00027469089494547993,
              "median": 3.8224366339900735e-05,
              "min": 0.0,
              "max": 0.0009841638389645516,
              "p5": 0.0,
              "p95": 0.0008850060787305453,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.8701047072532126e-06,
              "median": 2.623836994979033e-07,
              "min": 0.0,
              "max": 7.942988406414105e-06,
              "p5": 0.0,
              "p95": 6.64545941433792e-06,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 4.333333333333333,
              "median": 1.5,
              "min": 0.0,
              "max": 16.0,
              "p5": 0.0,
              "p95": 13.75,
              "count": 6
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 10759.1125,
              "median": 2439.45,
              "min": 0.0,
              "max": 44469.0,
              "p5": 24.85,
              "p95": 40087.87499999999,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 4.0,
              "median": 1.5,
              "min": 0.0,
              "max": 16.0,
              "p5": 0.35000000000000003,
              "p95": 12.849999999999994,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4320952902904458,
              "median": 0.3715816843515085,
              "min": 0.2218124416767781,
              "max": 0.8071168288378457,
              "p5": 0.22805515342098576,
              "p95": 0.738272032206355,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04738393961791824,
              "median": 0.036531094615490756,
              "min": 0.013640407235346395,
              "max": 0.11265087170317392,
              "p5": 0.014855105372534988,
              "p95": 0.09749514586283205,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 5.591016941599689,
              "median": 2.689655172413793,
              "min": 2.0,
              "max": 16.8,
              "p5": 2.0175,
              "p95": 14.059062499999996,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.7726912978123491e-06,
              "median": 4.746856419276544e-07,
              "min": 0.0,
              "max": 7.942988406414105e-06,
              "p5": 0.0,
              "p95": 6.343779171321663e-06,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0002380945480049017,
              "median": 4.7479699396874356e-05,
              "min": 0.0,
              "max": 0.0009841638389645516,
              "p5": 8.345952771607694e-07,
              "p95": 0.0008453429746369427,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.14285714285714257,
            "market": -0.0027139557762475564,
            "sector": -0.04428416972676086,
            "peers": -0.051683307614271756,
            "vs_market": 0.14557109863339013,
            "vs_sector": 0.18714131258390343,
            "vs_peers": 0.19454045047141433
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 14.695340501792115,
          "score_pca_percentile": 14.695340501792115,
          "rank_pca": 477,
          "total": 558,
          "adv_notional_sgd": 0.0,
          "adv_volume_shares": 0.0,
          "free_float_shares": 159924685.0,
          "turnover_ratio": 0.0,
          "votes": 0.0,
          "trades": 0.0,
          "spread_pct": 0.18262806236080173,
          "spread_ticks": 18.833333333333332,
          "amihud": 8.500931850739693e-07,
          "volatility": 0.45902483076848916
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.5509440614651209,
          "loadings": {
            "log_adv": 0.5216080602261383,
            "log_trades": 0.4675154546378001,
            "log_turnover": 0.47153874719912325,
            "neg_spread": 0.426790187679242,
            "neg_amihud": 0.17358533702145082,
            "neg_vol": 0.27335655752823207
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
          "peer_median_adv": 4068.5,
          "peer_median_score_pca": 41.75627240143369,
          "peer_median_trades": 3.0,
          "peer_median_volatility": 0.29898700218833724,
          "peer_median_spread_pct": 0.03885609810154861,
          "peer_median_spread_ticks": 2.8651761517615175,
          "peer_median_amihud": 5.433474793523472e-07,
          "peer_median_turnover_ratio": 0.00011450507470099993,
          "target_vs_peer": {
            "score_pca_delta": -27.06,
            "adv_delta_pct": -100.0,
            "trades_delta_pct": -100.0,
            "volatility_delta_pct": -53.53,
            "spread_pct_delta_pct": -370.01,
            "spread_ticks_delta_pct": 557.32,
            "amihud_delta_pct": -56.45,
            "turnover_ratio_delta_pct": -100.0
          }
        },
        "peer_liquidity": [
          {
            "ticker": "URR",
            "score_pca": 14.695340501792115,
            "rank_pca": 477,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.45902483076848916,
            "spread_pct": 0.18262806236080173,
            "spread_ticks": 18.833333333333332,
            "amihud": 8.500931850739693e-07,
            "turnover_ratio": 0.0,
            "is_target": true
          },
          {
            "ticker": "S85",
            "score_pca": 41.03942652329749,
            "rank_pca": 330,
            "adv": 4345.0,
            "trades": 2.0,
            "volatility": 0.23291921825884376,
            "spread_pct": 0.024271844660194195,
            "spread_ticks": 1.8888888888888888,
            "amihud": 2.5462786138059305e-07,
            "turnover_ratio": 5.930045666419125e-05,
            "is_target": false
          },
          {
            "ticker": "N0Z",
            "score_pca": 20.25089605734767,
            "rank_pca": 446,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.2911147636741419,
            "spread_pct": 0.09150326797385613,
            "spread_ticks": 12.2,
            "amihud": 2.1948475952700996e-07,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "BCV",
            "score_pca": 17.025089605734767,
            "rank_pca": 464,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.5608714581391144,
            "spread_pct": 0.11920529801324514,
            "spread_ticks": 18.0,
            "amihud": 1.219243524005111e-05,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "BHU",
            "score_pca": 58.96057347670251,
            "rank_pca": 230,
            "adv": 28050.0,
            "trades": 7.0,
            "volatility": 0.2524870253597266,
            "spread_pct": 0.018847520469643143,
            "spread_ticks": 3.388888888888889,
            "amihud": 6.546216286986142e-08,
            "turnover_ratio": 0.0009097312797151317,
            "is_target": false
          },
          {
            "ticker": "G50",
            "score_pca": 56.09318996415771,
            "rank_pca": 246,
            "adv": 27360.0,
            "trades": 7.0,
            "volatility": 0.3559505954878989,
            "spread_pct": 0.012958963282937308,
            "spread_ticks": 2.0256410256410255,
            "amihud": 3.4506556245687173e-07,
            "turnover_ratio": 0.0003660040381161314,
            "is_target": false
          },
          {
            "ticker": "596",
            "score_pca": 42.473118279569896,
            "rank_pca": 322,
            "adv": 6966.6,
            "trades": 4.0,
            "volatility": 0.8060517937233423,
            "spread_pct": 0.04856182293612244,
            "spread_ticks": 1.75,
            "amihud": 1.8681078062711904e-06,
            "turnover_ratio": 0.0005745094901886949,
            "is_target": false
          },
          {
            "ticker": "O08",
            "score_pca": 22.759856630824373,
            "rank_pca": 432,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.2621460696067244,
            "spread_pct": 0.0562524759012281,
            "spread_ticks": 9.26086956521739,
            "amihud": 7.416293962478227e-07,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "5SO",
            "score_pca": 45.340501792114694,
            "rank_pca": 306,
            "adv": 3792.0,
            "trades": 4.0,
            "volatility": 0.30685924070253257,
            "spread_pct": 0.029150373266974783,
            "spread_ticks": 2.341463414634146,
            "amihud": 7.870580510346025e-07,
            "turnover_ratio": 0.00016970969273780862,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Leisure",
          "sector_count": 6,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6350722932801216,
              "median": 0.393681131878861,
              "min": 0.0,
              "max": 7.435746269248647,
              "p5": 0.12786221958132876,
              "p95": 1.8026589008569491,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2372902.441206209,
              "median": 12694.8,
              "min": 0.0,
              "max": 235846080.0,
              "p5": 0.0,
              "p95": 9270528.04999999,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09184024081242512,
              "median": 0.026345502446368105,
              "min": 0.000267315276395102,
              "max": 1.267605633802817,
              "p5": 0.0035361380386877404,
              "p95": 0.46408814576333374,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002975442812684059,
              "median": 0.0002654304310168802,
              "min": 0.0,
              "max": 0.659152330103487,
              "p5": 0.0,
              "p95": 0.0077385339184480335,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.8009589072753968e-05,
              "median": 1.1265655365503958e-07,
              "min": 0.0,
              "max": 0.0028758169934640513,
              "p5": 0.0,
              "p95": 4.322939931421353e-05,
              "count": 554
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 350.03136200716847,
              "median": 7.0,
              "min": 0.0,
              "max": 9343.0,
              "p5": 0.0,
              "p95": 1894.6499999999987,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3587279819480358,
              "median": 0.3235326795810204,
              "min": 0.23291921825884376,
              "max": 0.5608714581391144,
              "p5": 0.2378111700340645,
              "p95": 0.5354098012964581,
              "count": 6
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 9959.166666666666,
              "median": 2172.5,
              "min": 0.0,
              "max": 28050.0,
              "p5": 0.0,
              "p95": 27877.5,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.07490249279344628,
              "median": 0.05788755631702516,
              "min": 0.012958963282937308,
              "max": 0.18262806236080173,
              "p5": 0.014431102579613766,
              "p95": 0.1667723712739126,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00022250596241590905,
              "median": 2.9650228332095624e-05,
              "min": 0.0,
              "max": 0.0009097312797151317,
              "p5": 0.0,
              "p95": 0.0007737994693153816,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.3211947952265692e-06,
              "median": 2.998467119187324e-07,
              "min": 6.546216286986142e-08,
              "max": 1.219243524005111e-05,
              "p5": 1.0396781203414856e-07,
              "p95": 9.356849726306824e-06,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2.6666666666666665,
              "median": 1.0,
              "min": 0.0,
              "max": 7.0,
              "p5": 0.0,
              "p95": 7.0,
              "count": 6
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 8814.2,
              "median": 4068.5,
              "min": 0.0,
              "max": 28050.0,
              "p5": 0.0,
              "p95": 27808.5,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 3.0,
              "median": 3.0,
              "min": 0.0,
              "max": 7.0,
              "p5": 0.0,
              "p95": 7.0,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.38355002061904064,
              "median": 0.29898700218833724,
              "min": 0.23291921825884376,
              "max": 0.8060517937233423,
              "p5": 0.23976795074415277,
              "p95": 0.7202386762688624,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.05009394581302515,
              "median": 0.03885609810154861,
              "min": 0.012958963282937308,
              "max": 0.11920529801324514,
              "p5": 0.01501995829828435,
              "p95": 0.10950958749945898,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 6.356968972908792,
              "median": 2.8651761517615175,
              "min": 1.75,
              "max": 18.0,
              "p5": 1.7986111111111112,
              "p95": 15.969999999999997,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.0592338549798828e-06,
              "median": 5.433474793523472e-07,
              "min": 6.546216286986142e-08,
              "max": 1.219243524005111e-05,
              "p5": 1.1937007169986342e-07,
              "p95": 8.578920638228133e-06,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0002599068696777447,
              "median": 0.00011450507470099993,
              "min": 0.0,
              "max": 0.0009097312797151317,
              "p5": 0.0,
              "p95": 0.0007924036533808786,
              "count": 8
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": 0.09090909090909038,
            "market": 0.08680225837473454,
            "sector": -0.03540265942780585,
            "peers": -0.05098201113062195,
            "vs_market": 0.004106832534355842,
            "vs_sector": 0.12631175033689623,
            "vs_peers": 0.14189110203971234
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 12.903225806451612,
          "score_pca_percentile": 12.903225806451612,
          "rank_pca": 487,
          "total": 558,
          "adv_notional_sgd": 0.0,
          "adv_volume_shares": 0.0,
          "free_float_shares": 159924685.0,
          "turnover_ratio": 0.0,
          "votes": 0.0,
          "trades": 0.0,
          "spread_pct": 0.1900805228147975,
          "spread_ticks": 19.266666666666666,
          "amihud": 2.2361359570661947e-06,
          "volatility": 0.37988578585366495
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.5444841390061653,
          "loadings": {
            "log_adv": 0.5260709092689764,
            "log_trades": 0.46962750153212496,
            "log_turnover": 0.48083415636841786,
            "neg_spread": 0.4264744123651111,
            "neg_amihud": 0.20494003565924546,
            "neg_vol": 0.2182133810674741
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
          "peer_median_adv": 3741.6000000000004,
          "peer_median_score_pca": 37.27598566308244,
          "peer_median_trades": 2.5,
          "peer_median_volatility": 0.3824737507519119,
          "peer_median_spread_pct": 0.04454978907202202,
          "peer_median_spread_ticks": 2.7830585059882855,
          "peer_median_amihud": 1.0454933379274728e-06,
          "peer_median_turnover_ratio": 0.00011974391943898055,
          "target_vs_peer": {
            "score_pca_delta": -24.37,
            "adv_delta_pct": -100.0,
            "trades_delta_pct": -100.0,
            "volatility_delta_pct": 0.68,
            "spread_pct_delta_pct": -326.67,
            "spread_ticks_delta_pct": 592.28,
            "amihud_delta_pct": -113.88,
            "turnover_ratio_delta_pct": -100.0
          }
        },
        "peer_liquidity": [
          {
            "ticker": "URR",
            "score_pca": 12.903225806451612,
            "rank_pca": 487,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.37988578585366495,
            "spread_pct": 0.1900805228147975,
            "spread_ticks": 19.266666666666666,
            "amihud": 2.2361359570661947e-06,
            "turnover_ratio": 0.0,
            "is_target": true
          },
          {
            "ticker": "S85",
            "score_pca": 38.35125448028674,
            "rank_pca": 345,
            "adv": 4357.5,
            "trades": 2.0,
            "volatility": 0.24327979507908182,
            "spread_pct": 0.025123044896754283,
            "spread_ticks": 1.9232954545454546,
            "amihud": 3.8592753824541936e-07,
            "turnover_ratio": 6.0648194315650145e-05,
            "is_target": false
          },
          {
            "ticker": "N0Z",
            "score_pca": 21.14695340501792,
            "rank_pca": 441,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.2990015305372482,
            "spread_pct": 0.06710337285846008,
            "spread_ticks": 8.414285714285715,
            "amihud": 8.049784454022752e-07,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "BCV",
            "score_pca": 19.35483870967742,
            "rank_pca": 451,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.44005129578814367,
            "spread_pct": 0.08641975308641983,
            "spread_ticks": 13.9,
            "amihud": 5.238925372565311e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "BHU",
            "score_pca": 56.272401433691755,
            "rank_pca": 245,
            "adv": 23156.0,
            "trades": 6.5,
            "volatility": 0.2832673594487721,
            "spread_pct": 0.01868520372640644,
            "spread_ticks": 3.207885304659498,
            "amihud": 3.081051686182586e-07,
            "turnover_ratio": 0.0007112444550500121,
            "is_target": false
          },
          {
            "ticker": "G50",
            "score_pca": 55.55555555555556,
            "rank_pca": 249,
            "adv": 24293.0,
            "trades": 7.0,
            "volatility": 0.37869748017048277,
            "spread_pct": 0.013988632672302426,
            "spread_ticks": 2.124521072796935,
            "amihud": 3.568957946996993e-07,
            "turnover_ratio": 0.0003515565102957578,
            "is_target": false
          },
          {
            "ticker": "596",
            "score_pca": 36.200716845878134,
            "rank_pca": 357,
            "adv": 3372.7000000000003,
            "trades": 3.0,
            "volatility": 1.060393519111063,
            "spread_pct": 0.06016589220532274,
            "spread_ticks": 2.0,
            "amihud": 2.1177813768640906e-06,
            "turnover_ratio": 0.0003090861057215179,
            "is_target": false
          },
          {
            "ticker": "O08",
            "score_pca": 20.25089605734767,
            "rank_pca": 446,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.5012571311393211,
            "spread_pct": 0.07491071824778424,
            "spread_ticks": 12.520833333333332,
            "amihud": 4.122020037139389e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "5SO",
            "score_pca": 42.473118279569896,
            "rank_pca": 322,
            "adv": 4110.5,
            "trades": 4.0,
            "volatility": 0.3862500213333411,
            "spread_pct": 0.02893368593872131,
            "spread_ticks": 2.3582317073170733,
            "amihud": 1.2860082304526703e-06,
            "turnover_ratio": 0.00017883964456231097,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Leisure",
          "sector_count": 6,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7556875240647388,
              "median": 0.42807726341024777,
              "min": 0.0,
              "max": 34.011535152326665,
              "p5": 0.1366214161043035,
              "p95": 2.1997303104364434,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2319447.280003275,
              "median": 12543.925,
              "min": 0.0,
              "max": 211181365.5,
              "p5": 0.0,
              "p95": 9565671.862499995,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09005327497536295,
              "median": 0.027226205579233987,
              "min": 0.00027908654750097934,
              "max": 1.267605633802817,
              "p5": 0.003558922238086151,
              "p95": 0.4528571598181097,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002712785355470435,
              "median": 0.00031073187724399605,
              "min": 0.0,
              "max": 0.6608002109287456,
              "p5": 0.0,
              "p95": 0.0070285542899304896,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.5108716917015862e-05,
              "median": 1.7159671219609883e-07,
              "min": 0.0,
              "max": 0.002016644478507272,
              "p5": 0.0,
              "p95": 4.731860400074079e-05,
              "count": 556
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 338.3351254480287,
              "median": 7.0,
              "min": 0.0,
              "max": 8880.0,
              "p5": 0.0,
              "p95": 1906.8,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.33736387447956556,
              "median": 0.3388495053538655,
              "min": 0.24327979507908182,
              "max": 0.44005129578814367,
              "p5": 0.2532766861715044,
              "p95": 0.425009918304524,
              "count": 6
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 8634.416666666666,
              "median": 2178.75,
              "min": 0.0,
              "max": 24293.0,
              "p5": 0.0,
              "p95": 24008.75,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.06690008834252344,
              "median": 0.04611320887760718,
              "min": 0.013988632672302426,
              "max": 0.1900805228147975,
              "p5": 0.015162775435828429,
              "p95": 0.1641653303827031,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00018724152661023666,
              "median": 3.0324097157825072e-05,
              "min": 0.0,
              "max": 0.0007112444550500121,
              "p5": 0.0,
              "p95": 0.0006213224688614485,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.5551613794328596e-06,
              "median": 5.954529918238472e-07,
              "min": 3.081051686182586e-07,
              "max": 5.238925372565311e-06,
              "p5": 3.2030282513861875e-07,
              "p95": 4.488228018690532e-06,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2.5833333333333335,
              "median": 1.0,
              "min": 0.0,
              "max": 7.0,
              "p5": 0.0,
              "p95": 6.875,
              "count": 6
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 7411.2125,
              "median": 3741.6000000000004,
              "min": 0.0,
              "max": 24293.0,
              "p5": 0.0,
              "p95": 23895.05,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2.8125,
              "median": 2.5,
              "min": 0.0,
              "max": 7.0,
              "p5": 0.0,
              "p95": 6.824999999999999,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4490247665759317,
              "median": 0.3824737507519119,
              "min": 0.24327979507908182,
              "max": 1.060393519111063,
              "p5": 0.2572754426084734,
              "p95": 0.864695783320953,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04691628795402142,
              "median": 0.04454978907202202,
              "min": 0.013988632672302426,
              "max": 0.08641975308641983,
              "p5": 0.01563243254123883,
              "p95": 0.08239159089289737,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 5.806131573367251,
              "median": 2.7830585059882855,
              "min": 1.9232954545454546,
              "max": 13.9,
              "p5": 1.9501420454545455,
              "p95": 13.417291666666666,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.827580245498389e-06,
              "median": 1.0454933379274728e-06,
              "min": 3.081051686182586e-07,
              "max": 5.238925372565311e-06,
              "p5": 3.2518188774676285e-07,
              "p95": 4.848008505166238e-06,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00020142186374315612,
              "median": 0.00011974391943898055,
              "min": 0.0,
              "max": 0.0007112444550500121,
              "p5": 0.0,
              "p95": 0.0005853536743860229,
              "count": 8
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": -0.05511811023622071,
            "market": 0.14980580403455823,
            "sector": -0.010113704989304417,
            "peers": -0.0058478969821371685,
            "vs_market": -0.20492391427077894,
            "vs_sector": -0.04500440524691629,
            "vs_peers": -0.04927021325408354
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Data note: volatility is unavailable for this period. Latest snapshot shows S$13,980 notional ADV and 16 trades, but trading cost is high with an 8.63% spread (9.75 ticks).",
        "market_comparison": "Versus peers, notional ADV is far higher (S$13,980 vs S$19 median; +73,478.95%), but spreads are worse (8.63% and 9.75 ticks vs 6.83% and 4.36 ticks). Versus the market median, ADV is below (S$13,980 vs S$28,828.6) and spread is much higher (8.63% vs 2.95%)."
      },
      "30d": {
        "liquidity": "Over 30d, liquidity is weak with S$0 notional ADV, 0 trades, and 0.0000% turnover, meaning there was effectively no consistent trading. Trading cost is very high: 16.41% spread (17.0 ticks), which materially increases transaction friction when liquidity.",
        "market_comparison": "Against peers, this is a clear laggard on activity (S$0 vs S$2,439.45 median ADV; 0 vs 1.5 trades) and much worse on cost (16.41% and 17.0 ticks vs 3.65% and 2.69 ticks). Versus the broader market, spreads are also far wider (16.41% vs 2.52%) and volatility."
      },
      "3m": {
        "liquidity": "Over 3m, liquidity remains weak with S$0 notional ADV and 0 trades, indicating persistent inactivity rather than a short-term dip. Trading cost is even worse than 30d: 18.26% spread (18.83 ticks), increasing the hurdle for investors to trade efficiently.",
        "market_comparison": "Versus peers, activity is absent (S$0 vs S$4,068.5 median ADV; 0 vs 3.0 trades) and spreads are far wider (18.26% and 18.83 ticks vs 3.89% and 2.87 ticks). Versus the market, spread is also materially worse (18.26% vs 2.63%) and volatility is higher (45.90%."
      },
      "6m": {
        "liquidity": "Over 6m (primary), liquidity screens very weak: S$0 notional ADV, 0 trades, and 0.0000% turnover, pointing to limited sustained secondary-market activity. Trading cost is extremely high with a 19.01% spread (19.27 ticks), which can deter participation and.",
        "market_comparison": "Against peers, the stock is a liquidity laggard on activity (S$0 vs S$3,741.6 median ADV; 0 vs 2.5 trades) and far worse on spread (19.01% and 19.27 ticks vs 4.45% and 2.78 ticks). Versus the market and sector, spreads are also much higher (19.01% vs 2.72%."
      }
    }
  },
  "q02": {
    "driver_model": {
      "valid": true,
      "model_method": "hybrid_markov_regression_pymc",
      "estimation_window_days": 251,
      "reporting_window_days": 63,
      "available_history_days": 251,
      "n_regimes": 3,
      "current_regime": 2,
      "current_regime_label": "Company-Led (3)",
      "current_regime_probability": 0.39780000981064184,
      "current_driver_mix": {
        "market_share": {
          "median": 0.09101396716666571,
          "low": 0.09101396716666571,
          "high": 0.09101396716666571
        },
        "sector_share": {
          "median": 0.18929520443327683,
          "low": 0.18929520443327683,
          "high": 0.18929520443327683
        },
        "company_share": {
          "median": 0.7196908284000575,
          "low": 0.7196908284000575,
          "high": 0.7196908284000575
        }
      },
      "current_sensitivities": {
        "beta_market": {
          "median": -0.24246653453309713,
          "low": -0.24246653453309713,
          "high": -0.24246653453309713
        },
        "beta_sector": {
          "median": 1.1693813010392071,
          "low": 1.1693813010392071,
          "high": 1.1693813010392071
        },
        "beta_market_lag": {
          "median": 0.0,
          "low": 0.0,
          "high": 0.0
        },
        "beta_sector_lag": {
          "median": 0.0,
          "low": 0.0,
          "high": 0.0
        }
      },
      "rolling_windows": {
        "p1": {
          "valid": false,
          "n_obs": 0
        },
        "p2": {
          "valid": false,
          "n_obs": 0
        },
        "p3": {
          "valid": true,
          "n_obs": 62,
          "period_label": "2025-03-05 to 2025-06-04",
          "shares": {
            "share_market": 0.07152083182909534,
            "share_sector": 0.13410246682877922,
            "share_idio": 0.7943767013421255
          },
          "regression": {
            "r_squared": null
          }
        },
        "p4": {
          "valid": true,
          "n_obs": 63,
          "period_label": "2025-06-05 to 2025-09-01",
          "shares": {
            "share_market": 0.09229756565663079,
            "share_sector": 0.1505722899081358,
            "share_idio": 0.7571301444352333
          },
          "regression": {
            "r_squared": null
          }
        },
        "p5": {
          "valid": true,
          "n_obs": 63,
          "period_label": "2025-09-02 to 2025-11-28",
          "shares": {
            "share_market": 0.10801178926242991,
            "share_sector": 0.16656347248917253,
            "share_idio": 0.7254247382483976
          },
          "regression": {
            "r_squared": null
          }
        },
        "p6": {
          "valid": true,
          "n_obs": 63,
          "period_label": "2025-12-01 to 2026-03-03",
          "shares": {
            "share_market": 0.09101396716666571,
            "share_sector": 0.18929520443327683,
            "share_idio": 0.7196908284000575
          },
          "regression": {
            "r_squared": null
          }
        }
      },
      "regimes": [
        {
          "id": 0,
          "label": "Company-Led (1)",
          "pct_time": 0.2888517526031964,
          "dominant_driver": "company",
          "dominant_driver_probability": 1.0,
          "expected_duration_days": 1.4835015312805389,
          "current_probability": 0.2458645784493124,
          "n_days_effective": 72.5017899034023,
          "shares": {
            "market": {
              "median": 0.09358063134016932,
              "low": 0.09358063134016932,
              "high": 0.09358063134016932
            },
            "sector": {
              "median": 0.2383463075422031,
              "low": 0.2383463075422031,
              "high": 0.2383463075422031
            },
            "company": {
              "median": 0.6680730611176275,
              "low": 0.6680730611176275,
              "high": 0.6680730611176275
            }
          },
          "sensitivities": {
            "beta_market": {
              "median": -0.24246653453309713,
              "low": -0.24246653453309713,
              "high": -0.24246653453309713
            },
            "beta_sector": {
              "median": 1.1693813010392071,
              "low": 1.1693813010392071,
              "high": 1.1693813010392071
            },
            "beta_market_lag": {
              "median": 0.0,
              "low": 0.0,
              "high": 0.0
            },
            "beta_sector_lag": {
              "median": 0.0,
              "low": 0.0,
              "high": 0.0
            }
          },
          "volatility": {
            "median": 0.02670228577441492,
            "low": 0.02670228577441492,
            "high": 0.02670228577441492
          },
          "lead_signal": {
            "lead_factor": "none",
            "lead_confidence": null,
            "lead_horizon_days": null
          }
        },
        {
          "id": 1,
          "label": "Company-Led (2)",
          "pct_time": 0.38078890883680655,
          "dominant_driver": "company",
          "dominant_driver_probability": 1.0,
          "expected_duration_days": 2.7767187471780854,
          "current_probability": 0.3563354117400458,
          "n_days_effective": 95.57801611803845,
          "shares": {
            "market": {
              "median": 0.10837694173776856,
              "low": 0.10837694173776856,
              "high": 0.10837694173776856
            },
            "sector": {
              "median": 0.1383211167790961,
              "low": 0.1383211167790961,
              "high": 0.1383211167790961
            },
            "company": {
              "median": 0.7533019414831352,
              "low": 0.7533019414831352,
              "high": 0.7533019414831352
            }
          },
          "sensitivities": {
            "beta_market": {
              "median": -0.24246653453309713,
              "low": -0.24246653453309713,
              "high": -0.24246653453309713
            },
            "beta_sector": {
              "median": 1.1693813010392071,
              "low": 1.1693813010392071,
              "high": 1.1693813010392071
            },
            "beta_market_lag": {
              "median": 0.0,
              "low": 0.0,
              "high": 0.0
            },
            "beta_sector_lag": {
              "median": 0.0,
              "low": 0.0,
              "high": 0.0
            }
          },
          "volatility": {
            "median": 0.02670228577441492,
            "low": 0.02670228577441492,
            "high": 0.02670228577441492
          },
          "lead_signal": {
            "lead_factor": "none",
            "lead_confidence": null,
            "lead_horizon_days": null
          }
        },
        {
          "id": 2,
          "label": "Company-Led (3)",
          "pct_time": 0.33035933855999705,
          "dominant_driver": "company",
          "dominant_driver_probability": 1.0,
          "expected_duration_days": 1.9346974922358182,
          "current_probability": 0.39780000981064184,
          "n_days_effective": 82.92019397855925,
          "shares": {
            "market": {
              "median": 0.05382968040715222,
              "low": 0.05382968040715222,
              "high": 0.05382968040715222
            },
            "sector": {
              "median": 0.08556682072415751,
              "low": 0.08556682072415751,
              "high": 0.08556682072415751
            },
            "company": {
              "median": 0.8606034988686903,
              "low": 0.8606034988686903,
              "high": 0.8606034988686903
            }
          },
          "sensitivities": {
            "beta_market": {
              "median": -0.24246653453309713,
              "low": -0.24246653453309713,
              "high": -0.24246653453309713
            },
            "beta_sector": {
              "median": 1.1693813010392071,
              "low": 1.1693813010392071,
              "high": 1.1693813010392071
            },
            "beta_market_lag": {
              "median": 0.0,
              "low": 0.0,
              "high": 0.0
            },
            "beta_sector_lag": {
              "median": 0.0,
              "low": 0.0,
              "high": 0.0
            }
          },
          "volatility": {
            "median": 0.02670228577441492,
            "low": 0.02670228577441492,
            "high": 0.02670228577441492
          },
          "lead_signal": {
            "lead_factor": "none",
            "lead_confidence": null,
            "lead_horizon_days": null
          }
        }
      ],
      "transitions": {
        "mean": [
          [
            0.3259191319224233,
            0.5033817314013715,
            0.17069913667620512
          ],
          [
            0.13013558047918997,
            0.6398626972874812,
            0.23000172223332851
          ],
          [
            0.17560246347259223,
            0.34127420795181607,
            0.48312332857559154
          ]
        ],
        "low": [
          [
            0.24264075713709246,
            0.40674994177228796,
            0.10208030420956361
          ],
          [
            0.10318514529030529,
            0.5934812799483283,
            0.17816820462372998
          ],
          [
            0.12413400783646988,
            0.2737771157330006,
            0.42309164007176947
          ]
        ],
        "high": [
          [
            0.40571799577155876,
            0.5963107392540665,
            0.23210071727754378
          ],
          [
            0.17148686090353352,
            0.6836719025744831,
            0.2648033467135969
          ],
          [
            0.25020801392255293,
            0.4065403069431767,
            0.5552370663818768
          ]
        ],
        "counts": [
          [
            14.0,
            22.0,
            7.0
          ],
          [
            17.0,
            88.0,
            30.0
          ],
          [
            12.0,
            25.0,
            35.0
          ]
        ]
      },
      "methodology": {
        "estimation_window_days": 251,
        "reporting_window_days": 63,
        "regime_inference": "driver_profile_clustering_fallback",
        "uncertainty_engine": "pymc_weighted_regime_regressions",
        "lead_horizon_days": 1,
        "distribution": "student_t",
        "history_limited": true
      }
    },
    "regime_switching": {
      "valid": true,
      "regime_method": "hybrid_markov_regression_pymc",
      "n_regimes": 3,
      "regimes": [
        {
          "id": 0,
          "label": "Company-Led (1)",
          "pct_time": 0.2888517526031964,
          "dominant_driver": "company",
          "dominant_driver_probability": 1.0,
          "expected_duration_days": 1.4835015312805389,
          "current_probability": 0.2458645784493124,
          "n_days_effective": 72.5017899034023,
          "shares": {
            "market": {
              "median": 0.09358063134016932,
              "low": 0.09358063134016932,
              "high": 0.09358063134016932
            },
            "sector": {
              "median": 0.2383463075422031,
              "low": 0.2383463075422031,
              "high": 0.2383463075422031
            },
            "company": {
              "median": 0.6680730611176275,
              "low": 0.6680730611176275,
              "high": 0.6680730611176275
            }
          },
          "sensitivities": {
            "beta_market": {
              "median": -0.24246653453309713,
              "low": -0.24246653453309713,
              "high": -0.24246653453309713
            },
            "beta_sector": {
              "median": 1.1693813010392071,
              "low": 1.1693813010392071,
              "high": 1.1693813010392071
            },
            "beta_market_lag": {
              "median": 0.0,
              "low": 0.0,
              "high": 0.0
            },
            "beta_sector_lag": {
              "median": 0.0,
              "low": 0.0,
              "high": 0.0
            }
          },
          "volatility": {
            "median": 0.02670228577441492,
            "low": 0.02670228577441492,
            "high": 0.02670228577441492
          },
          "lead_signal": {
            "lead_factor": "none",
            "lead_confidence": null,
            "lead_horizon_days": null
          }
        },
        {
          "id": 1,
          "label": "Company-Led (2)",
          "pct_time": 0.38078890883680655,
          "dominant_driver": "company",
          "dominant_driver_probability": 1.0,
          "expected_duration_days": 2.7767187471780854,
          "current_probability": 0.3563354117400458,
          "n_days_effective": 95.57801611803845,
          "shares": {
            "market": {
              "median": 0.10837694173776856,
              "low": 0.10837694173776856,
              "high": 0.10837694173776856
            },
            "sector": {
              "median": 0.1383211167790961,
              "low": 0.1383211167790961,
              "high": 0.1383211167790961
            },
            "company": {
              "median": 0.7533019414831352,
              "low": 0.7533019414831352,
              "high": 0.7533019414831352
            }
          },
          "sensitivities": {
            "beta_market": {
              "median": -0.24246653453309713,
              "low": -0.24246653453309713,
              "high": -0.24246653453309713
            },
            "beta_sector": {
              "median": 1.1693813010392071,
              "low": 1.1693813010392071,
              "high": 1.1693813010392071
            },
            "beta_market_lag": {
              "median": 0.0,
              "low": 0.0,
              "high": 0.0
            },
            "beta_sector_lag": {
              "median": 0.0,
              "low": 0.0,
              "high": 0.0
            }
          },
          "volatility": {
            "median": 0.02670228577441492,
            "low": 0.02670228577441492,
            "high": 0.02670228577441492
          },
          "lead_signal": {
            "lead_factor": "none",
            "lead_confidence": null,
            "lead_horizon_days": null
          }
        },
        {
          "id": 2,
          "label": "Company-Led (3)",
          "pct_time": 0.33035933855999705,
          "dominant_driver": "company",
          "dominant_driver_probability": 1.0,
          "expected_duration_days": 1.9346974922358182,
          "current_probability": 0.39780000981064184,
          "n_days_effective": 82.92019397855925,
          "shares": {
            "market": {
              "median": 0.05382968040715222,
              "low": 0.05382968040715222,
              "high": 0.05382968040715222
            },
            "sector": {
              "median": 0.08556682072415751,
              "low": 0.08556682072415751,
              "high": 0.08556682072415751
            },
            "company": {
              "median": 0.8606034988686903,
              "low": 0.8606034988686903,
              "high": 0.8606034988686903
            }
          },
          "sensitivities": {
            "beta_market": {
              "median": -0.24246653453309713,
              "low": -0.24246653453309713,
              "high": -0.24246653453309713
            },
            "beta_sector": {
              "median": 1.1693813010392071,
              "low": 1.1693813010392071,
              "high": 1.1693813010392071
            },
            "beta_market_lag": {
              "median": 0.0,
              "low": 0.0,
              "high": 0.0
            },
            "beta_sector_lag": {
              "median": 0.0,
              "low": 0.0,
              "high": 0.0
            }
          },
          "volatility": {
            "median": 0.02670228577441492,
            "low": 0.02670228577441492,
            "high": 0.02670228577441492
          },
          "lead_signal": {
            "lead_factor": "none",
            "lead_confidence": null,
            "lead_horizon_days": null
          }
        }
      ],
      "transitions": [
        [
          0.3259191319224233,
          0.5033817314013715,
          0.17069913667620512
        ],
        [
          0.13013558047918997,
          0.6398626972874812,
          0.23000172223332851
        ],
        [
          0.17560246347259223,
          0.34127420795181607,
          0.48312332857559154
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.3259191319224233,
            0.5033817314013715,
            0.17069913667620512
          ],
          [
            0.13013558047918997,
            0.6398626972874812,
            0.23000172223332851
          ],
          [
            0.17560246347259223,
            0.34127420795181607,
            0.48312332857559154
          ]
        ],
        "low": [
          [
            0.24264075713709246,
            0.40674994177228796,
            0.10208030420956361
          ],
          [
            0.10318514529030529,
            0.5934812799483283,
            0.17816820462372998
          ],
          [
            0.12413400783646988,
            0.2737771157330006,
            0.42309164007176947
          ]
        ],
        "high": [
          [
            0.40571799577155876,
            0.5963107392540665,
            0.23210071727754378
          ],
          [
            0.17148686090353352,
            0.6836719025744831,
            0.2648033467135969
          ],
          [
            0.25020801392255293,
            0.4065403069431767,
            0.5552370663818768
          ]
        ],
        "counts": [
          [
            14.0,
            22.0,
            7.0
          ],
          [
            17.0,
            88.0,
            30.0
          ],
          [
            12.0,
            25.0,
            35.0
          ]
        ]
      },
      "current_regime": 2,
      "current_regime_label": "Company-Led (3)",
      "current_regime_probability": 0.39780000981064184
    }
  },
  "theme": {
    "badges": {
      "header_health": {
        "text": "Liquidity Health: Poor",
        "bg": "bg-red-500/20",
        "textColor": "text-red-400",
        "dot": "bg-red-500"
      },
      "liq_section": {
        "text": "Liquidity score: 12.90% — POOR",
        "bg": "bg-red-500/20",
        "textColor": "text-red-400"
      },
      "drivers": {
        "text": "Company-Led",
        "bg": "bg-amber-500/20",
        "textColor": "text-amber-400"
      },
      "exec_check": {
        "text": "Weak",
        "bg": "bg-red-500/20",
        "textColor": "text-red-500"
      },
      "intraday": {
        "text": "Poor",
        "bg": "bg-red-500/20",
        "textColor": "text-red-500"
      },
      "short": {
        "text": "Low",
        "bg": "bg-emerald-500/20",
        "textColor": "text-emerald-400"
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
      },
      "perf": {
        "text": "Context",
        "bg": "bg-slate-700/40",
        "textColor": "text-slate-300"
      }
    },
    "borders": {
      "action_plan": "border-red-500/30",
      "index": "border-slate-700"
    },
    "colors": {
      "interpretation_good": "interpretation-good",
      "interpretation_neutral": "interpretation-neutral",
      "interpretation_bad": "interpretation-bad"
    }
  },
  "labels": {
    "header_title": "Liquidity Analysis Report",
    "header_meta_line1_tokens": [
      "Sim Leisure",
      "•",
      "URR",
      "•",
      "Sector: Leisure",
      "•",
      "Market Cap: 89.3M (small cap)"
    ],
    "header_meta_line2_tokens": [
      "As of: 2026-03-03",
      "•",
      "Universe: 558",
      "•",
      "Peers: 8"
    ],
    "exec_title": "Executive Summary: What Matters for Trading",
    "exec_subtitle": "6m liquidity profile indicates very limited trading depth and high trading costs versus peers; near-term (1d) comparison is unavailable.",
    "exec_takeaways_title": "Key Takeaways:",
    "metric_liquidity_score": "Liquidity Score",
    "metric_spread": "Trading Cost (Spread)",
    "metric_adv": "Average Traded Volume",
    "metric_drivers": "What Drives Price Changes",
    "footer": "Liquidity Analysis Report • Generated by Deltablock",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Now in Company-Led (3), company-specific moves dominate (71.97% share) with regime probability 0.398.",
    "drivers_strip": [
      {
        "title": "Key Insight",
        "text": "Dominant driver is company (share 71.97%); current regime Company-Led (3) has probability 0.398, so the label is present but not strongly locked-in."
      },
      {
        "title": "Market Link",
        "text": "Market explains 9.10% of moves; market sensitivity is negative (beta -0.242), meaning the stock has recently tended to move opposite the broad market when market effects show up."
      },
      {
        "title": "Sector Link",
        "text": "Sector explains 18.93% of moves; sector sensitivity is positive and >1 (beta 1.169), meaning when Leisure drives returns, the stock tends to move more than the sector."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Market / Sector / Company)",
    "drivers_pie_note": "Mix is based on 251 available history days (slightly below the 252-day target), so confidence is moderate; ranges shown are low=median=high in this run.",
    "lead_lag_title": "Who Tends to Lead (if any)?",
    "lead_lag_note": "No stable external lead signal in the current regime; best-fit lags are market -1 day and sector -5 days, but the model does not flag a reliable lead relationship.",
    "rolling_title": "How the Mix Has Evolved (Rolling Windows)",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Rolling windows show whether market/sector influence is rising or fading versus company-specific moves; higher company share means price is more event/idiosyncratic driven.",
    "drivers_bottom_line": "The stock is mainly driven by company-specific forces (71.97%) with a meaningful but secondary sector component (18.93%); regime probability 0.398 and stay probability 0.483 indicate a changeable backdrop over the next ~2 days.",
    "drivers_wtd_title": "Key Takeaways",
    "drivers_wtd_list": [
      "Current mix is company 71.97%, sector 18.93%, market 9.10% (Company-Led (3), prob 0.398), so stock moves are mostly not explained by broad tape or sector rotation.",
      "Sector linkage has increased over time: sector share rose from 13.4% (2025-03-05 to 2025-06-04) to 18.9% (2025-12-01 to 2026-03-03), meaning sector rotation is becoming a more relevant secondary driver.",
      "Regime stickiness is limited: stay probability is 0.483 with expected duration 1.93 days, so the dominant-driver label can shift quickly even though all regimes remain company-led."
    ],
    "regime_title": "Regime Read (What Type of Tape Are We In?)",
    "regime_subtitle": "All three regimes are company-led; they mainly differ by how much market/sector seep in and how concentrated the company component is.",
    "regime_badge_text": "Company-Led (3)",
    "regime_pie_title": "Time Spent in Each Regime (Last 251 Days)",
    "transition_title": "Regime Transitions (How Sticky Is Each State?)",
    "transition_cols": [
      "From \\ To",
      "Company-Led (1)",
      "Company-Led (2)"
    ],
    "transition_note_template": "Stay probabilities on the diagonal indicate stickiness; for the current regime (3) the stay probability is 0.483 and expected duration is 1.93 days, implying frequent switching rather than long runs.",
    "liq_title": "Liquidity Health & Peer Comparison",
    "liq_subtitle": "6m primary view: liquidity is constrained by near-zero sustained trading activity and very wide spreads, despite a higher-activity 1d snapshot.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Benchmarked vs overall market, Leisure sector, and an 8-stock peer set using notional ADV, spreads (including ticks), trades, and volatility.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "30d +14.3% vs Market -0.3%, Sector -4.4%, Peers -5.2%; 3m +9.1% vs Market +8.7%; 6m -5.5% vs Market +15.0%",
    "perf_insight": "Recent rebound is strong versus sector and peers (+14.3% in 30d), but the 6m result (-5.5%) still lags the market (+15.0%), suggesting confidence has improved recently but is not yet sustained over a longer window.",
    "exec_check_title": "Trading Costs & Market Depth",
    "exec_check_subtitle": "As of 2026-03-03, URR shows a 7.14% displayed spread and highly unbalanced top-10 depth (bid 9,285 vs ask 109,182), implying higher sell-side slippage risk in normal-size trades.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Based on displayed top 10 levels per side only (L2). Current bid depth is 9,285 vs ask depth 109,182 (bid/ask ratio 0.085), meaning sell orders can exhaust visible bids quickly compared with available asks.",
    "peer_capacity_title": "Historical Size Context (Last 365 Calendar Days)",
    "peer_capacity_note": "Stress test uses 115 trading days and 403 trades; it reflects limited trading history rather than a full multi-year sample.",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "Wide spread and thin bid depth raise sell-side cost risk; even historically common trade sizes map to ~6% price impact in this name.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "6m view (107 trades, SGD): retail dominates by trade count, but a meaningful share of value comes from mixed-size tickets.",
    "trader_retail_threshold": "Retail: < S$13,500 per trade",
    "trader_mixed_threshold": "Mixed: S$13,500–S$67,500 per trade",
    "trader_instit_threshold": "Institutional: > S$67,500 per trade",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "Peers are also retail-led; URR stands out for higher mixed-share by notional despite similar retail trade counts.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Half of trades move price; moves are retail-driven with no institutional prints detected in the sample.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Most activity is in continuous trading, but liquidity is time-clustered; peak time accounts for a large share of notional.",
    "session_dist_title": "Trading by Session",
    "session_period_label": "Period:",
    "session_dist_note": "Auctions = opening+closing auctions. Continuous = regular session prints.",
    "hhi_title": "Trading Concentration (HHI)",
    "hhi_note_template": "HHI ranges 0–1. Higher means trading is concentrated into fewer time buckets (less stable liquidity through the day).",
    "intraday_intensity_title": "Trading Activity by Time of Day",
    "intraday_intensity_note": "Peak time shows the single largest notional concentration point during the day; higher peaks can raise gap risk between prints.",
    "peers_hhi_title": "Peer Comparison: Trading Concentration",
    "peers_hhi_cols": [
      "Ticker",
      "% Auctions",
      "HHI",
      "Interpretation"
    ],
    "peers_hhi_note": "Higher % auctions and higher HHI both indicate more time-concentrated liquidity, which can increase trading cost uncertainty.",
    "intraday_insight": "Trading is split between auctions (9.2%) and continuous (90.8%), but activity is still time-clustered. Peak notional concentration is at 09:30 (14.6%), which can amplify short-window price jumps. HHI (0.795) signals uneven liquidity versus several peers.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Short selling is near zero across 1M/3M/6M; days-to-cover is near zero (avg 0.002, max 0.548), with no unusual spikes (0 days) and no return linkage (Granger p=0.066).",
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
    "exec_metrics": [
      {
        "title": "Liquidity Score",
        "tooltip": {
          "title": "Liquidity Score (6m)",
          "body": "Composite liquidity score (0–100) based on trading activity and trading cost; higher is better."
        },
        "value": "12.9",
        "suffix": "/100",
        "bar_pct": 13,
        "color_value": "text-red-400",
        "color_bar": "bg-red-500/20",
        "subtext": "Rank 487/558 • Bottom decile liquidity",
        "interpretation": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Trading Cost (Spread)",
        "tooltip": {
          "title": "Bid-ask spread (6m)",
          "body": "Estimated round-trip trading cost proxy; higher spread typically means higher trading cost and harder entry/exit."
        },
        "value": "19.01",
        "suffix": "%",
        "bar_pct": 95,
        "color_value": "text-red-400",
        "color_bar": "bg-red-500/20",
        "subtext": "Avg 19.27 ticks (1 tick = minimum price step) vs peers 2.78 ticks; spread is +326.67% wider than peer median (19.01% vs 4.45%).",
        "interpretation": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Average Traded Volume",
        "tooltip": {
          "title": "Notional ADV (6m)",
          "body": "Average daily traded value in local currency; higher ADV generally supports larger trades with less price disruption."
        },
        "value": "S$0",
        "suffix": "",
        "bar_pct": 0,
        "color_value": "text-red-400",
        "color_bar": "bg-red-500/20",
        "subtext": "ADV is S$0 over 6m vs peer median S$3.7K (−100%); trades/day also 0.0, indicating minimal consistent trading activity.",
        "interpretation": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "What Drives Price Changes",
        "tooltip": {
          "title": "Return drivers (factor exposure)",
          "body": "Share of price moves explained by broad market, sector, or company-specific factors; higher company-specific share means moves are less tied to the market/sector."
        },
        "value": "72.0",
        "suffix": "company-specific",
        "bar_pct": 72,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500/20",
        "subtext": "Company-specific drivers are 72.0% vs market 9.1% and sector 18.9%, so price moves are more likely tied to stock-specific news than broader tape.",
        "interpretation": {
          "text": "Moderate",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Liquidity is bottom-tier: Liquidity Score 12.9/100 (Rank 487/558) with 0.0000% turnover, signaling limited ability to transact size without disruption.",
      "Trading cost is very high versus peers: spread averages 19.01% (19.27 ticks) vs peer median 4.45% (2.78 ticks), implying materially higher friction for any buy/sell flow.",
      "Recent vs 30d data is incomplete: 1d vs 30d comparison is unavailable; the only reported signal is a 30d spread change of −47.42% (−7.25 ticks), but it does not replace missing 1d context."
    ],
    "footer": "Liquidity Analysis Report • Generated by Deltablock",
    "perf_badge": "Context",
    "liq_tiles": [
      {
        "title": "Liquidity Score (6m)",
        "value": "12.90% (Rank 487/558)",
        "sub": "Low relative standing in the 558-stock universe",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Notional ADV (6m)",
        "value": "S$0",
        "sub": "Peers median S$3,741.6; Market median S$12,543.925",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Spread (6m)",
        "value": "19.01% (19.27 ticks)",
        "sub": "Peers median 4.45% (2.78 ticks); Market median 2.72%",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Across 30d/3m/6m, sustained liquidity is very weak (S$0 notional ADV and 0 trades), and spreads are extremely wide (16.41% to 19.01%, 17.0 to 19.27 ticks), implying high trading friction when liquidity appears. The 1d snapshot shows activity (S$13,980 ADV; 16.",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "S$0.56",
        "note": "Small-cap (S$89.3M) with limited displayed liquidity.",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "7.14%",
        "note": "8 ticks (tick size S$0.005); this is a high upfront cost indicator for crossing the market.",
        "color": "text-red-500"
      },
      {
        "title": "Depth",
        "value": "Bid 9,285 vs Ask 109,182",
        "note": "Top-10 levels per side; bids are only 8.5% of asks, signaling weak visible support if selling into the book.",
        "color": "text-red-500"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-17.10% with 9.3% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-17.10% with 0.9% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-17.10% with 0.4% fill.",
        "cls": "warn"
      }
    ],
    "peers_hhi_header": [
      "Ticker",
      "% Auctions",
      "HHI",
      "Interpretation"
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
    "drivers": {
      "overall": "Company is the dominant driver now (71.97% share), with sector a meaningful secondary contributor (18.93%) and market small (9.10%). This points to stock-specific news/flow mattering more than broad risk-on/risk-off.",
      "beta": "When market effects appear, the stock has recently tended to move opposite the market (market beta -0.242). When sector effects appear, it tends to move more than the Leisure sector (sector beta 1.169), so sector-driven days can amplify moves.",
      "rolling_change": "Company share eased from 79.4% (2025-03-05 to 2025-06-04) to 72.0% (2025-12-01 to 2026-03-03) while sector rose from 13.4% to 18.9%; market stayed near ~7–11%. Sector rotation has become more visible, but company effects still dominate.",
      "interpretation": "Moderate"
    },
    "regime": {
      "overall": "Regime set contains only company-led states: (1) company 66.81% with higher sector (23.83%); (2) company 75.33% with moderate market (10.84%); (3) company 86.06% with minimal external influence (market 5.38%, sector 8.56%). Differences matter for how much.",
      "current": "Current regime is Company-Led (3) with probability 0.398; stay probability is 0.483 and expected duration is 1.93 days, so the regime label is present but not sticky over short horizons.",
      "transitions": "The current regime (3) stays in place 0.483 of the time and switches most often into (2) with probability 0.341 (vs 0.176 into (1)). Regime (2) is the stickiest (stay 0.640), indicating runs are more likely to persist when the stock is in the mid-level.",
      "trading_implications": "Across regimes, external influence ranges from low (regime 3: market+sector 13.94%) to higher (regime 1: market+sector 33.19%); monitoring which state dominates clarifies whether moves are explainable by sector/market narratives versus mostly company-specific."
    },
    "liquidity": {
      "overall": "Liquidity has been structurally weak over 30d/3m/6m with effectively no consistent trading (S$0 notional ADV; 0 trades), while transaction costs remain very high (6m spread 19.01% or 19.27 ticks). The latest day shows a temporary pickup (S$13,980 ADV; 16.",
      "strengths": [
        "Latest 1d activity is meaningfully higher than the peer median (S$13,980 vs S$19 ADV; 16 vs 0.5 trades), suggesting liquidity can appear episodically.",
        "6m volatility is lower than the market median (37.99% vs 42.81%), indicating price swings are not the primary issue in the longer view."
      ],
      "concerns": [
        "Sustained activity is absent across 30d/3m/6m (S$0 ADV and 0 trades; 0.0000% turnover), which limits reliable access to liquidity.",
        "Spreads are extremely wide and worsening with longer windows (30d 16.41%/17.0 ticks; 3m 18.26%/18.83 ticks; 6m 19.01%/19.27 ticks), increasing the cost to enter/exit positions.",
        "30d volatility is elevated (65.64% vs 38.27% market and 37.16% peers), which can amplify price movement when trading occurs."
      ],
      "peer_context": "On the 6m primary view, the stock is a peer laggard on liquidity: S$0 ADV vs S$3,741.6 peer median and 19.01% spread (19.27 ticks) vs 4.45% (2.78 ticks). The 1d snapshot flips on activity (far above peers) but not on cost (spread still wider than peers)."
    },
    "market_comparison": {
      "adv": "Activity is inconsistent: 6m/3m/30d show S$0 notional ADV, while 1d shows S$13,980, indicating episodic trading rather than steady liquidity.",
      "spread": "Trading cost is persistently high: spreads run 16.41% to 19.01% over 30d to 6m (17.0 to 19.27 ticks). 1d is better than 30d (8.63%) but still wide in tick terms (9.75 ticks).",
      "volatility": "Volatility is unavailable for 1d. Over 30d it is very high (65.64%), then moderates over 3m (45.90%) and 6m (37.99%), reducing price-risk noise but not solving the core liquidity constraint.",
      "trades": "Trading frequency is unreliable: 30d/3m/6m show 0 trades, while the latest day shows 16 trades, implying activity comes in bursts rather than steady flow."
    },
    "performance": {
      "overall": "Mixed",
      "conclusion": "Outperformance vs sector and peers is clear in the last 30d (+14.3% vs Sector -4.4%, Peers -5.2%) and persists over 3m (+9.1% vs Sector -3.5%, Peers -5.1%), indicating stock-specific support despite a weak Leisure tape. Over 6m, the stock is down -5.5% while."
    },
    "execution": {
      "overall": "Displayed spread is 7.14% (8 ticks) and top-10 bid depth is only 9,285 versus 109,182 on the ask, so selling pressure is likely to move the price quickly. Historical large trades (4,068.8–6,395.0) already imply ~-6.22% to -6.74% estimated impact despite full.",
      "concern": "The visible bid side is shallow: the largest sell-side orders observed today (S$18,476–S$18,900) imply ~-17.10% impact with only ~49–50% filled from the displayed top-10 bids, meaning execution outcomes depend heavily on hidden/off-book liquidity beyond what.",
      "peer_context": "Peer comparison metrics are unavailable in the provided summary. Within the available sample (115 trading days, 403 trades), liquidity signals are weak for a small-cap and the historical stress-test window is limited, which increases uncertainty around impact."
    },
    "trader_composition": {
      "overall": "Over 6m, retail is 97.2% of trades but only 67.9% of notional; mixed tickets are just 2.8% of trades yet 32.1% of notional. This points to many small retail prints alongside fewer, larger mixed-size trades that carry disproportionate value.",
      "retail_heavy": "The stock is retail-dominated by trade count (6m: 97.2% retail trades; 1d: 100% retail trades, 9 trades). Price formation is therefore sensitive to small order flow, and prints can look “noisy” versus institution-led names.",
      "institutional_gap": "Institutional share is 0.0% by trades, volume, and notional across 1d/30d/3m/6m. This implies limited participation from large-ticket investors in the observed flow, reducing the anchoring effect that larger participants can bring to intraday price quality.",
      "peer_comparison": "Versus peers, URR’s retail trade share (97.2%) is similar, but its retail notional share (67.9%) is lower than most (e.g., 5SO ~89.9%, 596 ~92.2%), meaning URR has comparatively more mixed-size value flow. Unlike G50 (instit notional 13.4%), URR shows no."
    },
    "price_moving": {
      "overall": "50.5% of trades are price-moving (49 of 97), indicating frequent print-to-print price changes rather than stable midpoint trading. With no institutional prints in the dataset, the observed volatility is primarily retail-driven.",
      "interpretation": "Weak",
      "asymmetry": "Positive movers (29) exceed negative movers (20), suggesting upward moves occurred more often than down moves in the sample. Institutional participation is 0.0% for movers; the move pattern is therefore not explained by large-ticket flow in this cut."
    },
    "intraday": {
      "overall": "In 6m, 90.8% of activity is in continuous trading and 9.2% in auctions (open 6.1%, close 0.5%). Despite this, the peak time (09:30) concentrates 14.6% of notional, which can make short windows more price-sensitive.",
      "hhi_interpretation": "6m HHI is 0.795, labeled “Highly concentrated,” meaning liquidity is uneven across the day and prints cluster into fewer time buckets. By period, 1m HHI is 0.732 and 3m is 0.809, indicating concentration has been persistently high rather than a one-off.",
      "best_times": "The day’s largest activity cluster is at 09:30 with 14.6% of notional, indicating that early-session flow carries outsized influence on intraday pricing. 1d HHI is 0.199 (unusually low vs other windows), but it is based on only 9 trades and can be unstable.",
      "peer_ranking": "URR’s peer HHI is 0.7869, higher (more concentrated) than BHU (0.5528), G50 (0.5928), and 596 (0.6354), and similar to the most concentrated names like N0Z (0.8423) and BCV (0.8329). Auction share is also elevated in the peer table (URR 1036.9% as reported)."
    },
    "short_selling": {
      "overall": "Short ratio is near zero vs trading volume across 1M/3M/6M, signalling limited bearish positioning and minimal short-driven pressure on the share price.",
      "level": "Low: 6M days-to-cover is near zero currently (avg 0.002; max 0.548), so any short position is easily unwound rather than building into a squeeze risk.",
      "correlation": "No Granger-causal relationship detected between shorting and returns (p=0.06565098855281007), meaning short activity has not been a reliable driver of price moves in this sample.",
      "trend": "Short interest is stable month-over-month (2025-04 to 2025-06 all near zero; % changes N/A), with 0 unusual-activity days, implying no event-driven increase in short attention."
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
        "URR",
        "S85",
        "N0Z",
        "BCV",
        "BHU",
        "G50",
        "596",
        "O08",
        "5SO"
      ],
      "scores": [
        12.903225806451612,
        38.35125448028674,
        21.14695340501792,
        19.35483870967742,
        56.272401433691755,
        55.55555555555556,
        36.200716845878134,
        20.25089605734767,
        42.473118279569896
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
        0.0,
        4357.5,
        0.0,
        0.0,
        23156.0,
        24293.0,
        3372.7000000000003,
        0.0,
        4110.5
      ],
      "total": 558
    },
    "market_comparison": {
      "sector_name": "Leisure",
      "sector_count": 6,
      "market_count": 558,
      "company": {
        "volatility": 0.37988578585366495,
        "adv": 0.0,
        "spread_pct": 0.1900805228147975,
        "turnover_ratio": 0.0,
        "amihud": 2.2361359570661947e-06,
        "trades": 0.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.7556875240647388,
          "median": 0.42807726341024777,
          "min": 0.0,
          "max": 34.011535152326665,
          "p5": 0.1366214161043035,
          "p95": 2.1997303104364434,
          "count": 558
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 2319447.280003275,
          "median": 12543.925,
          "min": 0.0,
          "max": 211181365.5,
          "p5": 0.0,
          "p95": 9565671.862499995,
          "count": 558
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.09005327497536295,
          "median": 0.027226205579233987,
          "min": 0.00027908654750097934,
          "max": 1.267605633802817,
          "p5": 0.003558922238086151,
          "p95": 0.4528571598181097,
          "count": 557
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.002712785355470435,
          "median": 0.00031073187724399605,
          "min": 0.0,
          "max": 0.6608002109287456,
          "p5": 0.0,
          "p95": 0.0070285542899304896,
          "count": 551
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.5108716917015862e-05,
          "median": 1.7159671219609883e-07,
          "min": 0.0,
          "max": 0.002016644478507272,
          "p5": 0.0,
          "p95": 4.731860400074079e-05,
          "count": 556
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 338.3351254480287,
          "median": 7.0,
          "min": 0.0,
          "max": 8880.0,
          "p5": 0.0,
          "p95": 1906.8,
          "count": 558
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.33736387447956556,
          "median": 0.3388495053538655,
          "min": 0.24327979507908182,
          "max": 0.44005129578814367,
          "p5": 0.2532766861715044,
          "p95": 0.425009918304524,
          "count": 6
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 8634.416666666666,
          "median": 2178.75,
          "min": 0.0,
          "max": 24293.0,
          "p5": 0.0,
          "p95": 24008.75,
          "count": 6
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.06690008834252344,
          "median": 0.04611320887760718,
          "min": 0.013988632672302426,
          "max": 0.1900805228147975,
          "p5": 0.015162775435828429,
          "p95": 0.1641653303827031,
          "count": 6
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.00018724152661023666,
          "median": 3.0324097157825072e-05,
          "min": 0.0,
          "max": 0.0007112444550500121,
          "p5": 0.0,
          "p95": 0.0006213224688614485,
          "count": 6
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.5551613794328596e-06,
          "median": 5.954529918238472e-07,
          "min": 3.081051686182586e-07,
          "max": 5.238925372565311e-06,
          "p5": 3.2030282513861875e-07,
          "p95": 4.488228018690532e-06,
          "count": 6
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 2.5833333333333335,
          "median": 1.0,
          "min": 0.0,
          "max": 7.0,
          "p5": 0.0,
          "p95": 6.875,
          "count": 6
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 7411.2125,
          "median": 3741.6000000000004,
          "min": 0.0,
          "max": 24293.0,
          "p5": 0.0,
          "p95": 23895.05,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 2.8125,
          "median": 2.5,
          "min": 0.0,
          "max": 7.0,
          "p5": 0.0,
          "p95": 6.824999999999999,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.4490247665759317,
          "median": 0.3824737507519119,
          "min": 0.24327979507908182,
          "max": 1.060393519111063,
          "p5": 0.2572754426084734,
          "p95": 0.864695783320953,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.04691628795402142,
          "median": 0.04454978907202202,
          "min": 0.013988632672302426,
          "max": 0.08641975308641983,
          "p5": 0.01563243254123883,
          "p95": 0.08239159089289737,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 5.806131573367251,
          "median": 2.7830585059882855,
          "min": 1.9232954545454546,
          "max": 13.9,
          "p5": 1.9501420454545455,
          "p95": 13.417291666666666,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.827580245498389e-06,
          "median": 1.0454933379274728e-06,
          "min": 3.081051686182586e-07,
          "max": 5.238925372565311e-06,
          "p5": 3.2518188774676285e-07,
          "p95": 4.848008505166238e-06,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.00020142186374315612,
          "median": 0.00011974391943898055,
          "min": 0.0,
          "max": 0.0007112444550500121,
          "p5": 0.0,
          "p95": 0.0005853536743860229,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": 0.14285714285714257,
        "market": -0.0027139557762475564,
        "sector": -0.04428416972676086,
        "peers": -0.051683307614271756
      },
      {
        "horizon": "3M",
        "stock": 0.09090909090909038,
        "market": 0.08680225837473454,
        "sector": -0.03540265942780585,
        "peers": -0.05098201113062195
      },
      {
        "horizon": "6M",
        "stock": -0.05511811023622071,
        "market": 0.14980580403455823,
        "sector": -0.010113704989304417,
        "peers": -0.0058478969821371685
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
      "share_market": 0.09101396716666571,
      "share_sector": 0.18929520443327683,
      "share_idio": 0.7196908284000575,
      "beta_market": -0.24246653453309713,
      "beta_sector": 1.1693813010392071,
      "r_squared": 0.07465105421715801,
      "driver_model": {
        "valid": true,
        "model_method": "hybrid_markov_regression_pymc",
        "estimation_window_days": 251,
        "reporting_window_days": 63,
        "available_history_days": 251,
        "n_regimes": 3,
        "current_regime": 2,
        "current_regime_label": "Company-Led (3)",
        "current_regime_probability": 0.39780000981064184,
        "current_driver_mix": {
          "market_share": {
            "median": 0.09101396716666571,
            "low": 0.09101396716666571,
            "high": 0.09101396716666571
          },
          "sector_share": {
            "median": 0.18929520443327683,
            "low": 0.18929520443327683,
            "high": 0.18929520443327683
          },
          "company_share": {
            "median": 0.7196908284000575,
            "low": 0.7196908284000575,
            "high": 0.7196908284000575
          }
        },
        "current_sensitivities": {
          "beta_market": {
            "median": -0.24246653453309713,
            "low": -0.24246653453309713,
            "high": -0.24246653453309713
          },
          "beta_sector": {
            "median": 1.1693813010392071,
            "low": 1.1693813010392071,
            "high": 1.1693813010392071
          },
          "beta_market_lag": {
            "median": 0.0,
            "low": 0.0,
            "high": 0.0
          },
          "beta_sector_lag": {
            "median": 0.0,
            "low": 0.0,
            "high": 0.0
          }
        },
        "rolling_windows": {
          "p1": {
            "valid": false,
            "n_obs": 0
          },
          "p2": {
            "valid": false,
            "n_obs": 0
          },
          "p3": {
            "valid": true,
            "n_obs": 62,
            "period_label": "2025-03-05 to 2025-06-04",
            "shares": {
              "share_market": 0.07152083182909534,
              "share_sector": 0.13410246682877922,
              "share_idio": 0.7943767013421255
            },
            "regression": {
              "r_squared": null
            }
          },
          "p4": {
            "valid": true,
            "n_obs": 63,
            "period_label": "2025-06-05 to 2025-09-01",
            "shares": {
              "share_market": 0.09229756565663079,
              "share_sector": 0.1505722899081358,
              "share_idio": 0.7571301444352333
            },
            "regression": {
              "r_squared": null
            }
          },
          "p5": {
            "valid": true,
            "n_obs": 63,
            "period_label": "2025-09-02 to 2025-11-28",
            "shares": {
              "share_market": 0.10801178926242991,
              "share_sector": 0.16656347248917253,
              "share_idio": 0.7254247382483976
            },
            "regression": {
              "r_squared": null
            }
          },
          "p6": {
            "valid": true,
            "n_obs": 63,
            "period_label": "2025-12-01 to 2026-03-03",
            "shares": {
              "share_market": 0.09101396716666571,
              "share_sector": 0.18929520443327683,
              "share_idio": 0.7196908284000575
            },
            "regression": {
              "r_squared": null
            }
          }
        },
        "regimes": [
          {
            "id": 0,
            "label": "Company-Led (1)",
            "pct_time": 0.2888517526031964,
            "dominant_driver": "company",
            "dominant_driver_probability": 1.0,
            "expected_duration_days": 1.4835015312805389,
            "current_probability": 0.2458645784493124,
            "n_days_effective": 72.5017899034023,
            "shares": {
              "market": {
                "median": 0.09358063134016932,
                "low": 0.09358063134016932,
                "high": 0.09358063134016932
              },
              "sector": {
                "median": 0.2383463075422031,
                "low": 0.2383463075422031,
                "high": 0.2383463075422031
              },
              "company": {
                "median": 0.6680730611176275,
                "low": 0.6680730611176275,
                "high": 0.6680730611176275
              }
            },
            "sensitivities": {
              "beta_market": {
                "median": -0.24246653453309713,
                "low": -0.24246653453309713,
                "high": -0.24246653453309713
              },
              "beta_sector": {
                "median": 1.1693813010392071,
                "low": 1.1693813010392071,
                "high": 1.1693813010392071
              },
              "beta_market_lag": {
                "median": 0.0,
                "low": 0.0,
                "high": 0.0
              },
              "beta_sector_lag": {
                "median": 0.0,
                "low": 0.0,
                "high": 0.0
              }
            },
            "volatility": {
              "median": 0.02670228577441492,
              "low": 0.02670228577441492,
              "high": 0.02670228577441492
            },
            "lead_signal": {
              "lead_factor": "none",
              "lead_confidence": null,
              "lead_horizon_days": null
            }
          },
          {
            "id": 1,
            "label": "Company-Led (2)",
            "pct_time": 0.38078890883680655,
            "dominant_driver": "company",
            "dominant_driver_probability": 1.0,
            "expected_duration_days": 2.7767187471780854,
            "current_probability": 0.3563354117400458,
            "n_days_effective": 95.57801611803845,
            "shares": {
              "market": {
                "median": 0.10837694173776856,
                "low": 0.10837694173776856,
                "high": 0.10837694173776856
              },
              "sector": {
                "median": 0.1383211167790961,
                "low": 0.1383211167790961,
                "high": 0.1383211167790961
              },
              "company": {
                "median": 0.7533019414831352,
                "low": 0.7533019414831352,
                "high": 0.7533019414831352
              }
            },
            "sensitivities": {
              "beta_market": {
                "median": -0.24246653453309713,
                "low": -0.24246653453309713,
                "high": -0.24246653453309713
              },
              "beta_sector": {
                "median": 1.1693813010392071,
                "low": 1.1693813010392071,
                "high": 1.1693813010392071
              },
              "beta_market_lag": {
                "median": 0.0,
                "low": 0.0,
                "high": 0.0
              },
              "beta_sector_lag": {
                "median": 0.0,
                "low": 0.0,
                "high": 0.0
              }
            },
            "volatility": {
              "median": 0.02670228577441492,
              "low": 0.02670228577441492,
              "high": 0.02670228577441492
            },
            "lead_signal": {
              "lead_factor": "none",
              "lead_confidence": null,
              "lead_horizon_days": null
            }
          },
          {
            "id": 2,
            "label": "Company-Led (3)",
            "pct_time": 0.33035933855999705,
            "dominant_driver": "company",
            "dominant_driver_probability": 1.0,
            "expected_duration_days": 1.9346974922358182,
            "current_probability": 0.39780000981064184,
            "n_days_effective": 82.92019397855925,
            "shares": {
              "market": {
                "median": 0.05382968040715222,
                "low": 0.05382968040715222,
                "high": 0.05382968040715222
              },
              "sector": {
                "median": 0.08556682072415751,
                "low": 0.08556682072415751,
                "high": 0.08556682072415751
              },
              "company": {
                "median": 0.8606034988686903,
                "low": 0.8606034988686903,
                "high": 0.8606034988686903
              }
            },
            "sensitivities": {
              "beta_market": {
                "median": -0.24246653453309713,
                "low": -0.24246653453309713,
                "high": -0.24246653453309713
              },
              "beta_sector": {
                "median": 1.1693813010392071,
                "low": 1.1693813010392071,
                "high": 1.1693813010392071
              },
              "beta_market_lag": {
                "median": 0.0,
                "low": 0.0,
                "high": 0.0
              },
              "beta_sector_lag": {
                "median": 0.0,
                "low": 0.0,
                "high": 0.0
              }
            },
            "volatility": {
              "median": 0.02670228577441492,
              "low": 0.02670228577441492,
              "high": 0.02670228577441492
            },
            "lead_signal": {
              "lead_factor": "none",
              "lead_confidence": null,
              "lead_horizon_days": null
            }
          }
        ],
        "transitions": {
          "mean": [
            [
              0.3259191319224233,
              0.5033817314013715,
              0.17069913667620512
            ],
            [
              0.13013558047918997,
              0.6398626972874812,
              0.23000172223332851
            ],
            [
              0.17560246347259223,
              0.34127420795181607,
              0.48312332857559154
            ]
          ],
          "low": [
            [
              0.24264075713709246,
              0.40674994177228796,
              0.10208030420956361
            ],
            [
              0.10318514529030529,
              0.5934812799483283,
              0.17816820462372998
            ],
            [
              0.12413400783646988,
              0.2737771157330006,
              0.42309164007176947
            ]
          ],
          "high": [
            [
              0.40571799577155876,
              0.5963107392540665,
              0.23210071727754378
            ],
            [
              0.17148686090353352,
              0.6836719025744831,
              0.2648033467135969
            ],
            [
              0.25020801392255293,
              0.4065403069431767,
              0.5552370663818768
            ]
          ],
          "counts": [
            [
              14.0,
              22.0,
              7.0
            ],
            [
              17.0,
              88.0,
              30.0
            ],
            [
              12.0,
              25.0,
              35.0
            ]
          ]
        },
        "methodology": {
          "estimation_window_days": 251,
          "reporting_window_days": 63,
          "regime_inference": "driver_profile_clustering_fallback",
          "uncertainty_engine": "pymc_weighted_regime_regressions",
          "lead_horizon_days": 1,
          "distribution": "student_t",
          "history_limited": true
        }
      },
      "lead_lag": {
        "lags": [
          -5,
          -4,
          -3,
          -2,
          -1,
          0,
          1,
          2,
          3,
          4,
          5
        ],
        "corr_market": [
          0.07243896882532384,
          0.013119764088075712,
          -0.00039094969522592324,
          -0.000135344926119543,
          -0.28988060923742526,
          0.06660257641676555,
          0.15046691840325307,
          0.0571350509343766,
          0.18933882310780464,
          -0.22231921062565121,
          0.03333466092428881
        ],
        "corr_sector": [
          -0.39498280665816526,
          -0.11896212027706736,
          0.012907606965897371,
          0.02896982264562868,
          0.010639612889981054,
          0.273040831876808,
          0.041303419176496346,
          -0.06461117094204086,
          -0.004976214568783409,
          0.016565810373010137,
          -0.013843467106173443
        ],
        "best": {
          "market": -1,
          "sector": -5
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
          "valid": true,
          "period_label": "2025-03-05 to 2025-06-04",
          "shares": {
            "share_market": 0.07152083182909534,
            "share_sector": 0.13410246682877922,
            "share_company": 0.7943767013421255
          },
          "regression": {
            "r_squared": null
          }
        },
        "p4": {
          "valid": true,
          "period_label": "2025-06-05 to 2025-09-01",
          "shares": {
            "share_market": 0.09229756565663079,
            "share_sector": 0.1505722899081358,
            "share_company": 0.7571301444352333
          },
          "regression": {
            "r_squared": null
          }
        },
        "p5": {
          "valid": true,
          "period_label": "2025-09-02 to 2025-11-28",
          "shares": {
            "share_market": 0.10801178926242991,
            "share_sector": 0.16656347248917253,
            "share_company": 0.7254247382483976
          },
          "regression": {
            "r_squared": null
          }
        },
        "p6": {
          "valid": true,
          "period_label": "2025-12-01 to 2026-03-03",
          "shares": {
            "share_market": 0.09101396716666571,
            "share_sector": 0.18929520443327683,
            "share_company": 0.7196908284000575
          },
          "regression": {
            "r_squared": null
          }
        }
      },
      "rolling": {
        "ordered": [
          "2025-03-05 to 2025-06-04",
          "2025-06-05 to 2025-09-01",
          "2025-09-02 to 2025-11-28",
          "2025-12-01 to 2026-03-03"
        ],
        "market": [
          7.2,
          9.2,
          10.8,
          9.1
        ],
        "sector": [
          13.4,
          15.1,
          16.7,
          18.9
        ],
        "idio": [
          79.4,
          75.7,
          72.5,
          72.0
        ]
      },
      "regime": {
        "valid": true,
        "regime_method": "hybrid_markov_regression_pymc",
        "n_regimes": 3,
        "current_regime_label": "Company-Led (3)",
        "current_regime_probability": 0.39780000981064184,
        "labels": [
          "Company-Led (1)",
          "Company-Led (2)",
          "Company-Led (3)"
        ],
        "pct_time": [
          0.2888517526031964,
          0.38078890883680655,
          0.33035933855999705
        ],
        "current_regime": 2,
        "regimes": [
          {
            "id": 0,
            "label": "Company-Led (1)",
            "pct_time": 0.2888517526031964,
            "dominant_driver": "company",
            "dominant_driver_probability": 1.0,
            "expected_duration_days": 1.4835015312805389,
            "current_probability": 0.2458645784493124,
            "n_days_effective": 72.5017899034023,
            "shares": {
              "market": {
                "median": 0.09358063134016932,
                "low": 0.09358063134016932,
                "high": 0.09358063134016932
              },
              "sector": {
                "median": 0.2383463075422031,
                "low": 0.2383463075422031,
                "high": 0.2383463075422031
              },
              "company": {
                "median": 0.6680730611176275,
                "low": 0.6680730611176275,
                "high": 0.6680730611176275
              }
            },
            "sensitivities": {
              "beta_market": {
                "median": -0.24246653453309713,
                "low": -0.24246653453309713,
                "high": -0.24246653453309713
              },
              "beta_sector": {
                "median": 1.1693813010392071,
                "low": 1.1693813010392071,
                "high": 1.1693813010392071
              },
              "beta_market_lag": {
                "median": 0.0,
                "low": 0.0,
                "high": 0.0
              },
              "beta_sector_lag": {
                "median": 0.0,
                "low": 0.0,
                "high": 0.0
              }
            },
            "volatility": {
              "median": 0.02670228577441492,
              "low": 0.02670228577441492,
              "high": 0.02670228577441492
            },
            "lead_signal": {
              "lead_factor": "none",
              "lead_confidence": null,
              "lead_horizon_days": null
            }
          },
          {
            "id": 1,
            "label": "Company-Led (2)",
            "pct_time": 0.38078890883680655,
            "dominant_driver": "company",
            "dominant_driver_probability": 1.0,
            "expected_duration_days": 2.7767187471780854,
            "current_probability": 0.3563354117400458,
            "n_days_effective": 95.57801611803845,
            "shares": {
              "market": {
                "median": 0.10837694173776856,
                "low": 0.10837694173776856,
                "high": 0.10837694173776856
              },
              "sector": {
                "median": 0.1383211167790961,
                "low": 0.1383211167790961,
                "high": 0.1383211167790961
              },
              "company": {
                "median": 0.7533019414831352,
                "low": 0.7533019414831352,
                "high": 0.7533019414831352
              }
            },
            "sensitivities": {
              "beta_market": {
                "median": -0.24246653453309713,
                "low": -0.24246653453309713,
                "high": -0.24246653453309713
              },
              "beta_sector": {
                "median": 1.1693813010392071,
                "low": 1.1693813010392071,
                "high": 1.1693813010392071
              },
              "beta_market_lag": {
                "median": 0.0,
                "low": 0.0,
                "high": 0.0
              },
              "beta_sector_lag": {
                "median": 0.0,
                "low": 0.0,
                "high": 0.0
              }
            },
            "volatility": {
              "median": 0.02670228577441492,
              "low": 0.02670228577441492,
              "high": 0.02670228577441492
            },
            "lead_signal": {
              "lead_factor": "none",
              "lead_confidence": null,
              "lead_horizon_days": null
            }
          },
          {
            "id": 2,
            "label": "Company-Led (3)",
            "pct_time": 0.33035933855999705,
            "dominant_driver": "company",
            "dominant_driver_probability": 1.0,
            "expected_duration_days": 1.9346974922358182,
            "current_probability": 0.39780000981064184,
            "n_days_effective": 82.92019397855925,
            "shares": {
              "market": {
                "median": 0.05382968040715222,
                "low": 0.05382968040715222,
                "high": 0.05382968040715222
              },
              "sector": {
                "median": 0.08556682072415751,
                "low": 0.08556682072415751,
                "high": 0.08556682072415751
              },
              "company": {
                "median": 0.8606034988686903,
                "low": 0.8606034988686903,
                "high": 0.8606034988686903
              }
            },
            "sensitivities": {
              "beta_market": {
                "median": -0.24246653453309713,
                "low": -0.24246653453309713,
                "high": -0.24246653453309713
              },
              "beta_sector": {
                "median": 1.1693813010392071,
                "low": 1.1693813010392071,
                "high": 1.1693813010392071
              },
              "beta_market_lag": {
                "median": 0.0,
                "low": 0.0,
                "high": 0.0
              },
              "beta_sector_lag": {
                "median": 0.0,
                "low": 0.0,
                "high": 0.0
              }
            },
            "volatility": {
              "median": 0.02670228577441492,
              "low": 0.02670228577441492,
              "high": 0.02670228577441492
            },
            "lead_signal": {
              "lead_factor": "none",
              "lead_confidence": null,
              "lead_horizon_days": null
            }
          }
        ],
        "transitions": [
          [
            0.3259191319224233,
            0.5033817314013715,
            0.17069913667620512
          ],
          [
            0.13013558047918997,
            0.6398626972874812,
            0.23000172223332851
          ],
          [
            0.17560246347259223,
            0.34127420795181607,
            0.48312332857559154
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 0.54,
          "quantity": 2000.0,
          "value": 1080.0
        },
        {
          "level": 2,
          "price": 0.52,
          "quantity": 9000.0,
          "value": 4680.0
        },
        {
          "level": 3,
          "price": 0.51,
          "quantity": 3000.0,
          "value": 1530.0
        },
        {
          "level": 4,
          "price": 0.45,
          "quantity": 3000.0,
          "value": 1350.0
        },
        {
          "level": 5,
          "price": 0.215,
          "quantity": 3000.0,
          "value": 645.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.58,
          "quantity": 20000.0,
          "value": 11600.0
        },
        {
          "level": 2,
          "price": 0.6,
          "quantity": 65300.0,
          "value": 39180.0
        },
        {
          "level": 3,
          "price": 0.62,
          "quantity": 29900.0,
          "value": 18538.0
        },
        {
          "level": 4,
          "price": 0.625,
          "quantity": 30000.0,
          "value": 18750.0
        },
        {
          "level": 5,
          "price": 0.63,
          "quantity": 30000.0,
          "value": 18900.0
        },
        {
          "level": 6,
          "price": 0.65,
          "quantity": 3000.0,
          "value": 1950.0
        },
        {
          "level": 7,
          "price": 0.66,
          "quantity": 400.0,
          "value": 264.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-03-03 08:01:44.301300",
        "mid_price": 0.56,
        "spread_pct": 0.07142857142857129,
        "spread_ticks": 8.0,
        "tick_size": 0.005,
        "bid_depth_notional_top10": 9285.0,
        "ask_depth_notional_top10": 109182.0,
        "bid_ask_depth_ratio": 0.085
      },
      "historical_trade_scenarios": {
        "valid": true,
        "lookback_calendar_days": 365,
        "trade_days_used": 115,
        "n_trades_used": 403,
        "first_trade_date": "2025-03-03",
        "last_trade_date": "2026-02-24",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 4068.8,
            "impact_pct": -0.062209,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 43.82,
            "pct_of_adv": 1595.61
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 6395.0,
            "impact_pct": -0.067411,
            "filled_pct": 100.0,
            "levels_consumed": 3,
            "pct_of_bid_depth": 68.87,
            "pct_of_adv": 2507.84
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 22470.46,
            "impact_pct": -0.170982,
            "filled_pct": 41.3,
            "levels_consumed": 5,
            "pct_of_bid_depth": 242.01,
            "pct_of_adv": 8811.94
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-03-03",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "8117827938533214208",
            "timestamp": "2026-03-02 22:59:02.768100000",
            "posted_price": 0.63,
            "size_shares": 30000.0,
            "notional": 18900.0,
            "impact_pct": -0.170982,
            "filled_pct": 49.1,
            "levels_consumed": 5,
            "pct_of_bid_depth": 203.55,
            "price_vs_mid_pct": 12.5,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "8117827938533213184",
            "timestamp": "2026-03-02 22:59:02.768100000",
            "posted_price": 0.625,
            "size_shares": 30000.0,
            "notional": 18750.0,
            "impact_pct": -0.170982,
            "filled_pct": 49.5,
            "levels_consumed": 5,
            "pct_of_bid_depth": 201.94,
            "price_vs_mid_pct": 11.607,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "8115848817603505152",
            "timestamp": "2026-03-02 22:59:02.768100000",
            "posted_price": 0.62,
            "size_shares": 29800.0,
            "notional": 18476.0,
            "impact_pct": -0.170982,
            "filled_pct": 50.3,
            "levels_consumed": 5,
            "pct_of_bid_depth": 198.99,
            "price_vs_mid_pct": 10.714,
            "executed_event_count": 0,
            "event_count": 1
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-03-03",
        "bucket_minutes": 30,
        "tick_size": 0.005,
        "rows": [
          {
            "bucket": "09:00",
            "spread_pct": 0.18502202643171803,
            "spread_ticks": 20.999999999999996,
            "bid_depth_notional": 3205.0,
            "ask_depth_notional": 58402.0,
            "mid_price": 0.5675
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.0837209302325582,
            "spread_ticks": 9.000000000000007,
            "bid_depth_notional": 3205.0,
            "ask_depth_notional": 72082.0,
            "mid_price": 0.5375000000000001
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.07407407407407414,
            "spread_ticks": 8.000000000000007,
            "bid_depth_notional": 4765.0,
            "ask_depth_notional": 72085.5,
            "mid_price": 0.54
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.008968609865470859,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 12415.0,
            "ask_depth_notional": 72085.5,
            "mid_price": 0.5575000000000001
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.0779220779220778,
            "spread_ticks": 8.999999999999986,
            "bid_depth_notional": 10092.0,
            "ask_depth_notional": 70222.0,
            "mid_price": 0.5775
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.053097345132743216,
            "spread_ticks": 5.999999999999983,
            "bid_depth_notional": 8730.0,
            "ask_depth_notional": 70753.0,
            "mid_price": 0.565
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.09954751131221708,
            "spread_ticks": 10.999999999999988,
            "bid_depth_notional": 6970.0,
            "ask_depth_notional": 80903.0,
            "mid_price": 0.5525
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.09090909090909079,
            "spread_ticks": 9.999999999999986,
            "bid_depth_notional": 10090.0,
            "ask_depth_notional": 73641.0,
            "mid_price": 0.55
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.07142857142857129,
            "spread_ticks": 7.999999999999985,
            "bid_depth_notional": 10315.0,
            "ask_depth_notional": 109103.5,
            "mid_price": 0.56
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.07142857142857129,
            "spread_ticks": 7.999999999999985,
            "bid_depth_notional": 10315.0,
            "ask_depth_notional": 109182.0,
            "mid_price": 0.56
          },
          {
            "bucket": "16:00",
            "spread_pct": 0.07142857142857129,
            "spread_ticks": 7.999999999999985,
            "bid_depth_notional": 9285.0,
            "ask_depth_notional": 109182.0,
            "mid_price": 0.56
          }
        ],
        "summary": {
          "median_spread_pct": 0.07407407407407414,
          "median_spread_ticks": 8.000000000000007,
          "median_bid_depth_notional": 9285.0,
          "median_ask_depth_notional": 72085.5,
          "tightest_bucket": "11:30",
          "widest_bucket": "09:00",
          "deepest_bid_bucket": "11:30",
          "thinnest_bid_bucket": "09:00"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 19607.8,
      "peers": [
        {
          "ticker": "G50",
          "pct": 2389.9
        },
        {
          "ticker": "BHU",
          "pct": 3134.4
        },
        {
          "ticker": "5SO",
          "pct": 20300.9
        },
        {
          "ticker": "S85",
          "pct": 22686.0
        },
        {
          "ticker": "596",
          "pct": 80876.7
        },
        {
          "ticker": "BCV",
          "pct": 451671.2
        },
        {
          "ticker": "O08",
          "pct": 1212121.2
        },
        {
          "ticker": "N0Z",
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
          "n_trades": 9,
          "first_trade_date": "2026-03-03",
          "last_trade_date": "2026-03-03",
          "period_days": 0,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          },
          "composition": {
            "retail_pct": 1.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 1.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0
          },
          "trade_size": {
            "avg": 1269.7777777777778,
            "median": 994.5
          },
          "peer_comparison": [
            {
              "ticker": "URR",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 1.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.0,
              "retail_qty_pct": 1.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "retail_notional_pct": 1.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "avg_trade_size": 1269.7777777777778,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "G50",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 1.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.0,
              "retail_qty_pct": 1.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "retail_notional_pct": 1.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "avg_trade_size": 5704.916666666667,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "BHU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 1.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.0,
              "retail_qty_pct": 1.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "retail_notional_pct": 1.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "avg_trade_size": 4450.0,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "5SO",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 1.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.0,
              "retail_qty_pct": 1.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "retail_notional_pct": 1.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "avg_trade_size": 1634.0800000000002,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "S85",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 1.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.0,
              "retail_qty_pct": 1.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "retail_notional_pct": 1.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "avg_trade_size": 38.0,
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
          "n_trades": 43,
          "first_trade_date": "2026-02-04",
          "last_trade_date": "2026-03-03",
          "period_days": 27,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          },
          "composition": {
            "retail_pct": 0.9302325581395349,
            "mixed_pct": 0.06976744186046512,
            "instit_pct": 0.0,
            "retail_qty_pct": 0.4915254237288136,
            "mixed_qty_pct": 0.5084745762711864,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 0.48750965748132885,
            "mixed_notional_pct": 0.5124903425186711,
            "instit_notional_pct": 0.0
          },
          "trade_size": {
            "avg": 3250.8837209302324,
            "median": 600.0
          },
          "peer_comparison": [
            {
              "ticker": "URR",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.9302325581395349,
              "mixed_pct": 0.06976744186046512,
              "instit_pct": 0.0,
              "retail_qty_pct": 0.4915254237288136,
              "mixed_qty_pct": 0.5084745762711864,
              "instit_qty_pct": 0.0,
              "retail_notional_pct": 0.48750965748132885,
              "mixed_notional_pct": 0.5124903425186711,
              "instit_notional_pct": 0.0,
              "avg_trade_size": 3250.8837209302324,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "596",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 1.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.0,
              "retail_qty_pct": 1.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "retail_notional_pct": 1.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "avg_trade_size": 2425.083076923077,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "BCV",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 1.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.0,
              "retail_qty_pct": 1.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "retail_notional_pct": 1.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "avg_trade_size": 867.1967741935483,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "N0Z",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 1.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.0,
              "retail_qty_pct": 1.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "retail_notional_pct": 1.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "avg_trade_size": 4993.375,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "5SO",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9821428571428571,
              "mixed_pct": 0.017857142857142856,
              "instit_pct": 0.0,
              "retail_qty_pct": 0.8897971854304636,
              "mixed_qty_pct": 0.11020281456953643,
              "instit_qty_pct": 0.0,
              "retail_notional_pct": 0.8886498325436327,
              "mixed_notional_pct": 0.11135016745636733,
              "instit_notional_pct": 0.0,
              "avg_trade_size": 2630.2160714285715,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "O08",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.96,
              "mixed_pct": 0.04,
              "instit_pct": 0.0,
              "retail_qty_pct": 0.714900546702338,
              "mixed_qty_pct": 0.28509945329766195,
              "instit_qty_pct": 0.0,
              "retail_notional_pct": 0.7230055488077984,
              "mixed_notional_pct": 0.27699445119220156,
              "instit_notional_pct": 0.0,
              "avg_trade_size": 3067.6859999999997,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "S85",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9574468085106383,
              "mixed_pct": 0.0425531914893617,
              "instit_pct": 0.0,
              "retail_qty_pct": 0.7963698241633579,
              "mixed_qty_pct": 0.20363017583664209,
              "instit_qty_pct": 0.0,
              "retail_notional_pct": 0.7972987028424541,
              "mixed_notional_pct": 0.20270129715754595,
              "instit_notional_pct": 0.0,
              "avg_trade_size": 4295.808510638298,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "G50",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9428571428571428,
              "mixed_pct": 0.05714285714285714,
              "instit_pct": 0.0,
              "retail_qty_pct": 0.6813499516248364,
              "mixed_qty_pct": 0.31865004837516364,
              "instit_qty_pct": 0.0,
              "retail_notional_pct": 0.688163694494886,
              "mixed_notional_pct": 0.311836305505114,
              "instit_notional_pct": 0.0,
              "avg_trade_size": 4090.8571428571427,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "BHU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8017241379310345,
              "mixed_pct": 0.1810344827586207,
              "instit_pct": 0.017241379310344827,
              "retail_qty_pct": 0.3383434854837434,
              "mixed_qty_pct": 0.37789731825013845,
              "instit_qty_pct": 0.2837591962661182,
              "retail_notional_pct": 0.338154912855751,
              "mixed_notional_pct": 0.3770668031965018,
              "instit_notional_pct": 0.2847782839477472,
              "avg_trade_size": 9715.362068965518,
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
          "n_trades": 67,
          "first_trade_date": "2025-12-03",
          "last_trade_date": "2026-03-03",
          "period_days": 90,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          },
          "composition": {
            "retail_pct": 0.9552238805970149,
            "mixed_pct": 0.04477611940298507,
            "instit_pct": 0.0,
            "retail_qty_pct": 0.563894523326572,
            "mixed_qty_pct": 0.43610547667342797,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 0.5583189733567203,
            "mixed_notional_pct": 0.4416810266432797,
            "instit_notional_pct": 0.0
          },
          "trade_size": {
            "avg": 2420.873134328358,
            "median": 560.0
          },
          "peer_comparison": [
            {
              "ticker": "URR",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.9552238805970149,
              "mixed_pct": 0.04477611940298507,
              "instit_pct": 0.0,
              "retail_qty_pct": 0.563894523326572,
              "mixed_qty_pct": 0.43610547667342797,
              "instit_qty_pct": 0.0,
              "retail_notional_pct": 0.5583189733567203,
              "mixed_notional_pct": 0.4416810266432797,
              "instit_notional_pct": 0.0,
              "avg_trade_size": 2420.873134328358,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "5SO",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.99609375,
              "mixed_pct": 0.00390625,
              "instit_pct": 0.0,
              "retail_qty_pct": 0.9144205640285524,
              "mixed_qty_pct": 0.08557943597144752,
              "instit_qty_pct": 0.0,
              "retail_notional_pct": 0.9156332463514102,
              "mixed_notional_pct": 0.08436675364858977,
              "instit_notional_pct": 0.0,
              "avg_trade_size": 797.87890625,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "596",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9912126537785588,
              "mixed_pct": 0.008787346221441126,
              "instit_pct": 0.0,
              "retail_qty_pct": 0.9320783109246729,
              "mixed_qty_pct": 0.06792168907532711,
              "instit_qty_pct": 0.0,
              "retail_notional_pct": 0.9343071406292947,
              "mixed_notional_pct": 0.06569285937070535,
              "instit_notional_pct": 0.0,
              "avg_trade_size": 2562.1175746924428,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "O08",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.978021978021978,
              "mixed_pct": 0.02197802197802198,
              "instit_pct": 0.0,
              "retail_qty_pct": 0.8232366940718304,
              "mixed_qty_pct": 0.17676330592816963,
              "instit_qty_pct": 0.0,
              "retail_notional_pct": 0.8234141852690957,
              "mixed_notional_pct": 0.17658581473090432,
              "instit_notional_pct": 0.0,
              "avg_trade_size": 2643.9593406593403,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "BCV",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9772727272727273,
              "mixed_pct": 0.022727272727272728,
              "instit_pct": 0.0,
              "retail_qty_pct": 0.7264276228419655,
              "mixed_qty_pct": 0.2735723771580345,
              "instit_qty_pct": 0.0,
              "retail_notional_pct": 0.7062128336329692,
              "mixed_notional_pct": 0.29378716636703084,
              "instit_notional_pct": 0.0,
              "avg_trade_size": 1314.7272727272727,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "G50",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9287169042769857,
              "mixed_pct": 0.06109979633401222,
              "instit_pct": 0.010183299389002037,
              "retail_qty_pct": 0.5692249811888638,
              "mixed_qty_pct": 0.2542011537496865,
              "instit_qty_pct": 0.1765738650614497,
              "retail_notional_pct": 0.5673149196919732,
              "mixed_notional_pct": 0.24679550137163006,
              "instit_notional_pct": 0.1858895789363967,
              "avg_trade_size": 4992.424643584522,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "S85",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9225352112676056,
              "mixed_pct": 0.07746478873239436,
              "instit_pct": 0.0,
              "retail_qty_pct": 0.6216765453005927,
              "mixed_qty_pct": 0.37832345469940726,
              "instit_qty_pct": 0.0,
              "retail_notional_pct": 0.6236633064621364,
              "mixed_notional_pct": 0.37633669353786364,
              "instit_notional_pct": 0.0,
              "avg_trade_size": 4722.144366197183,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "N0Z",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8888888888888888,
              "mixed_pct": 0.1111111111111111,
              "instit_pct": 0.0,
              "retail_qty_pct": 0.6646216768916156,
              "mixed_qty_pct": 0.33537832310838445,
              "instit_qty_pct": 0.0,
              "retail_notional_pct": 0.6619259098786828,
              "mixed_notional_pct": 0.3380740901213172,
              "instit_notional_pct": 0.0,
              "avg_trade_size": 6838.518518518518,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "BHU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8274932614555256,
              "mixed_pct": 0.16442048517520216,
              "instit_pct": 0.008086253369272238,
              "retail_qty_pct": 0.4151480795288002,
              "mixed_qty_pct": 0.43063352044907777,
              "instit_qty_pct": 0.15421840002212206,
              "retail_notional_pct": 0.4133420342118667,
              "mixed_notional_pct": 0.4335709614639997,
              "instit_notional_pct": 0.15308700432413358,
              "avg_trade_size": 8760.772237196765,
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
          "n_trades": 107,
          "first_trade_date": "2025-09-10",
          "last_trade_date": "2026-03-03",
          "period_days": 174,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          },
          "composition": {
            "retail_pct": 0.9719626168224299,
            "mixed_pct": 0.028037383177570093,
            "instit_pct": 0.0,
            "retail_qty_pct": 0.6853658536585366,
            "mixed_qty_pct": 0.3146341463414634,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 0.6788005685104399,
            "mixed_notional_pct": 0.3211994314895601,
            "instit_notional_pct": 0.0
          },
          "trade_size": {
            "avg": 2084.4766355140187,
            "median": 600.0
          },
          "peer_comparison": [
            {
              "ticker": "URR",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.9719626168224299,
              "mixed_pct": 0.028037383177570093,
              "instit_pct": 0.0,
              "retail_qty_pct": 0.6853658536585366,
              "mixed_qty_pct": 0.3146341463414634,
              "instit_qty_pct": 0.0,
              "retail_notional_pct": 0.6788005685104399,
              "mixed_notional_pct": 0.3211994314895601,
              "instit_notional_pct": 0.0,
              "avg_trade_size": 2084.4766355140187,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "5SO",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9922178988326849,
              "mixed_pct": 0.007782101167315175,
              "instit_pct": 0.0,
              "retail_qty_pct": 0.8972221036910604,
              "mixed_qty_pct": 0.10277789630893962,
              "instit_qty_pct": 0.0,
              "retail_notional_pct": 0.8985667870574251,
              "mixed_notional_pct": 0.10143321294257489,
              "instit_notional_pct": 0.0,
              "avg_trade_size": 1270.3265888456551,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "BCV",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9906542056074766,
              "mixed_pct": 0.009345794392523364,
              "instit_pct": 0.0,
              "retail_qty_pct": 0.8948443083205717,
              "mixed_qty_pct": 0.10515569167942827,
              "instit_qty_pct": 0.0,
              "retail_notional_pct": 0.8939638310284479,
              "mixed_notional_pct": 0.1060361689715521,
              "instit_notional_pct": 0.0,
              "avg_trade_size": 1497.9018691588785,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "596",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9896024464831804,
              "mixed_pct": 0.010397553516819572,
              "instit_pct": 0.0,
              "retail_qty_pct": 0.9244895735612401,
              "mixed_qty_pct": 0.07551042643875991,
              "instit_qty_pct": 0.0,
              "retail_notional_pct": 0.9217218896246019,
              "mixed_notional_pct": 0.07827811037539815,
              "instit_notional_pct": 0.0,
              "avg_trade_size": 2474.7792048929664,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "O08",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9871794871794872,
              "mixed_pct": 0.01282051282051282,
              "instit_pct": 0.0,
              "retail_qty_pct": 0.8673126894759636,
              "mixed_qty_pct": 0.13268731052403637,
              "instit_qty_pct": 0.0,
              "retail_notional_pct": 0.8665597132610184,
              "mixed_notional_pct": 0.13344028673898167,
              "instit_notional_pct": 0.0,
              "avg_trade_size": 2040.9878205128205,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "N0Z",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9142857142857143,
              "mixed_pct": 0.08571428571428572,
              "instit_pct": 0.0,
              "retail_qty_pct": 0.6815602836879433,
              "mixed_qty_pct": 0.31843971631205675,
              "instit_qty_pct": 0.0,
              "retail_notional_pct": 0.6803123481408248,
              "mixed_notional_pct": 0.31968765185917525,
              "instit_notional_pct": 0.0,
              "avg_trade_size": 5115.171428571429,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "S85",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9115646258503401,
              "mixed_pct": 0.08843537414965986,
              "instit_pct": 0.0,
              "retail_qty_pct": 0.5903955578767971,
              "mixed_qty_pct": 0.40960444212320296,
              "instit_qty_pct": 0.0,
              "retail_notional_pct": 0.5906392841826469,
              "mixed_notional_pct": 0.40936071581735306,
              "instit_notional_pct": 0.0,
              "avg_trade_size": 4782.506802721088,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "G50",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9015606242496998,
              "mixed_pct": 0.09003601440576231,
              "instit_pct": 0.008403361344537815,
              "retail_qty_pct": 0.5048867994556476,
              "mixed_qty_pct": 0.3693245082271434,
              "instit_qty_pct": 0.12578869231720896,
              "retail_notional_pct": 0.5073165662112072,
              "mixed_notional_pct": 0.359031377861696,
              "instit_notional_pct": 0.13365205592709672,
              "avg_trade_size": 5700.527010804321,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "BHU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8626198083067093,
              "mixed_pct": 0.13258785942492013,
              "instit_pct": 0.004792332268370607,
              "retail_qty_pct": 0.47808427154602995,
              "mixed_qty_pct": 0.41195259972001497,
              "instit_qty_pct": 0.10996312873395508,
              "retail_notional_pct": 0.473656283198677,
              "mixed_notional_pct": 0.41496617064606833,
              "instit_notional_pct": 0.11137754615525464,
              "avg_trade_size": 7136.456869009585,
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
      "n_trades": 107,
      "first_trade_date": "2025-09-10",
      "last_trade_date": "2026-03-03",
      "period_days": 174,
      "thresholds": {
        "retail_max": 13500.0,
        "instit_min": 67500.0
      },
      "composition": {
        "retail_pct": 0.9719626168224299,
        "mixed_pct": 0.028037383177570093,
        "instit_pct": 0.0,
        "retail_qty_pct": 0.6853658536585366,
        "mixed_qty_pct": 0.3146341463414634,
        "instit_qty_pct": 0.0,
        "retail_notional_pct": 0.6788005685104399,
        "mixed_notional_pct": 0.3211994314895601,
        "instit_notional_pct": 0.0
      },
      "trade_size": {
        "avg": 2084.4766355140187,
        "median": 600.0
      },
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2026-02",
            "n_trades": 34,
            "retail_pct": 0.9117647058823529,
            "mixed_pct": 0.08823529411764706,
            "instit_pct": 0.0,
            "avg_trade_size": 3775.294117647059,
            "retail_qty_pct": 0.4470638662666095,
            "mixed_qty_pct": 0.5529361337333905,
            "instit_qty_pct": 0.0,
            "total_quantity": 233300.0
          },
          {
            "month": "2026-01",
            "n_trades": 8,
            "retail_pct": 1.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "avg_trade_size": 513.875,
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "total_quantity": 8000.0
          },
          {
            "month": "2025-12",
            "n_trades": 16,
            "retail_pct": 1.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "avg_trade_size": 1143.71875,
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "total_quantity": 34100.0
          },
          {
            "month": "2025-11",
            "n_trades": 4,
            "retail_pct": 1.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "avg_trade_size": 1100.5,
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "total_quantity": 10000.0
          },
          {
            "month": "2025-10",
            "n_trades": 28,
            "retail_pct": 1.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "avg_trade_size": 1536.017857142857,
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "total_quantity": 81400.0
          },
          {
            "month": "2025-09",
            "n_trades": 8,
            "retail_pct": 1.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "avg_trade_size": 1678.75,
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "total_quantity": 22800.0
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "URR",
          "currency": "SGD",
          "is_target": true,
          "retail_pct": 0.9719626168224299,
          "mixed_pct": 0.028037383177570093,
          "instit_pct": 0.0,
          "retail_qty_pct": 0.6853658536585366,
          "mixed_qty_pct": 0.3146341463414634,
          "instit_qty_pct": 0.0,
          "retail_notional_pct": 0.6788005685104399,
          "mixed_notional_pct": 0.3211994314895601,
          "instit_notional_pct": 0.0,
          "avg_trade_size": 2084.4766355140187,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "5SO",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9922178988326849,
          "mixed_pct": 0.007782101167315175,
          "instit_pct": 0.0,
          "retail_qty_pct": 0.8972221036910604,
          "mixed_qty_pct": 0.10277789630893962,
          "instit_qty_pct": 0.0,
          "retail_notional_pct": 0.8985667870574251,
          "mixed_notional_pct": 0.10143321294257489,
          "instit_notional_pct": 0.0,
          "avg_trade_size": 1270.3265888456551,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "BCV",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9906542056074766,
          "mixed_pct": 0.009345794392523364,
          "instit_pct": 0.0,
          "retail_qty_pct": 0.8948443083205717,
          "mixed_qty_pct": 0.10515569167942827,
          "instit_qty_pct": 0.0,
          "retail_notional_pct": 0.8939638310284479,
          "mixed_notional_pct": 0.1060361689715521,
          "instit_notional_pct": 0.0,
          "avg_trade_size": 1497.9018691588785,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "596",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9896024464831804,
          "mixed_pct": 0.010397553516819572,
          "instit_pct": 0.0,
          "retail_qty_pct": 0.9244895735612401,
          "mixed_qty_pct": 0.07551042643875991,
          "instit_qty_pct": 0.0,
          "retail_notional_pct": 0.9217218896246019,
          "mixed_notional_pct": 0.07827811037539815,
          "instit_notional_pct": 0.0,
          "avg_trade_size": 2474.7792048929664,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "O08",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9871794871794872,
          "mixed_pct": 0.01282051282051282,
          "instit_pct": 0.0,
          "retail_qty_pct": 0.8673126894759636,
          "mixed_qty_pct": 0.13268731052403637,
          "instit_qty_pct": 0.0,
          "retail_notional_pct": 0.8665597132610184,
          "mixed_notional_pct": 0.13344028673898167,
          "instit_notional_pct": 0.0,
          "avg_trade_size": 2040.9878205128205,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "N0Z",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9142857142857143,
          "mixed_pct": 0.08571428571428572,
          "instit_pct": 0.0,
          "retail_qty_pct": 0.6815602836879433,
          "mixed_qty_pct": 0.31843971631205675,
          "instit_qty_pct": 0.0,
          "retail_notional_pct": 0.6803123481408248,
          "mixed_notional_pct": 0.31968765185917525,
          "instit_notional_pct": 0.0,
          "avg_trade_size": 5115.171428571429,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "S85",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9115646258503401,
          "mixed_pct": 0.08843537414965986,
          "instit_pct": 0.0,
          "retail_qty_pct": 0.5903955578767971,
          "mixed_qty_pct": 0.40960444212320296,
          "instit_qty_pct": 0.0,
          "retail_notional_pct": 0.5906392841826469,
          "mixed_notional_pct": 0.40936071581735306,
          "instit_notional_pct": 0.0,
          "avg_trade_size": 4782.506802721088,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "G50",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9015606242496998,
          "mixed_pct": 0.09003601440576231,
          "instit_pct": 0.008403361344537815,
          "retail_qty_pct": 0.5048867994556476,
          "mixed_qty_pct": 0.3693245082271434,
          "instit_qty_pct": 0.12578869231720896,
          "retail_notional_pct": 0.5073165662112072,
          "mixed_notional_pct": 0.359031377861696,
          "instit_notional_pct": 0.13365205592709672,
          "avg_trade_size": 5700.527010804321,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "BHU",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.8626198083067093,
          "mixed_pct": 0.13258785942492013,
          "instit_pct": 0.004792332268370607,
          "retail_qty_pct": 0.47808427154602995,
          "mixed_qty_pct": 0.41195259972001497,
          "instit_qty_pct": 0.10996312873395508,
          "retail_notional_pct": 0.473656283198677,
          "mixed_notional_pct": 0.41496617064606833,
          "instit_notional_pct": 0.11137754615525464,
          "avg_trade_size": 7136.456869009585,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        }
      ],
      "peer_comparison_periods": {
        "1d": [
          {
            "ticker": "URR",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 1.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 1.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "avg_trade_size": 1269.7777777777778,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "G50",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 1.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 1.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "avg_trade_size": 5704.916666666667,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "BHU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 1.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 1.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "avg_trade_size": 4450.0,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "5SO",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 1.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 1.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "avg_trade_size": 1634.0800000000002,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "S85",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 1.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 1.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "avg_trade_size": 38.0,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          }
        ],
        "30d": [
          {
            "ticker": "URR",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.9302325581395349,
            "mixed_pct": 0.06976744186046512,
            "instit_pct": 0.0,
            "retail_qty_pct": 0.4915254237288136,
            "mixed_qty_pct": 0.5084745762711864,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 0.48750965748132885,
            "mixed_notional_pct": 0.5124903425186711,
            "instit_notional_pct": 0.0,
            "avg_trade_size": 3250.8837209302324,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "596",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 1.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 1.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "avg_trade_size": 2425.083076923077,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "BCV",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 1.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 1.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "avg_trade_size": 867.1967741935483,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "N0Z",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 1.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 1.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "avg_trade_size": 4993.375,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "5SO",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9821428571428571,
            "mixed_pct": 0.017857142857142856,
            "instit_pct": 0.0,
            "retail_qty_pct": 0.8897971854304636,
            "mixed_qty_pct": 0.11020281456953643,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 0.8886498325436327,
            "mixed_notional_pct": 0.11135016745636733,
            "instit_notional_pct": 0.0,
            "avg_trade_size": 2630.2160714285715,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "O08",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.96,
            "mixed_pct": 0.04,
            "instit_pct": 0.0,
            "retail_qty_pct": 0.714900546702338,
            "mixed_qty_pct": 0.28509945329766195,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 0.7230055488077984,
            "mixed_notional_pct": 0.27699445119220156,
            "instit_notional_pct": 0.0,
            "avg_trade_size": 3067.6859999999997,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "S85",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9574468085106383,
            "mixed_pct": 0.0425531914893617,
            "instit_pct": 0.0,
            "retail_qty_pct": 0.7963698241633579,
            "mixed_qty_pct": 0.20363017583664209,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 0.7972987028424541,
            "mixed_notional_pct": 0.20270129715754595,
            "instit_notional_pct": 0.0,
            "avg_trade_size": 4295.808510638298,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "G50",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9428571428571428,
            "mixed_pct": 0.05714285714285714,
            "instit_pct": 0.0,
            "retail_qty_pct": 0.6813499516248364,
            "mixed_qty_pct": 0.31865004837516364,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 0.688163694494886,
            "mixed_notional_pct": 0.311836305505114,
            "instit_notional_pct": 0.0,
            "avg_trade_size": 4090.8571428571427,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "BHU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8017241379310345,
            "mixed_pct": 0.1810344827586207,
            "instit_pct": 0.017241379310344827,
            "retail_qty_pct": 0.3383434854837434,
            "mixed_qty_pct": 0.37789731825013845,
            "instit_qty_pct": 0.2837591962661182,
            "retail_notional_pct": 0.338154912855751,
            "mixed_notional_pct": 0.3770668031965018,
            "instit_notional_pct": 0.2847782839477472,
            "avg_trade_size": 9715.362068965518,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          }
        ],
        "3m": [
          {
            "ticker": "URR",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.9552238805970149,
            "mixed_pct": 0.04477611940298507,
            "instit_pct": 0.0,
            "retail_qty_pct": 0.563894523326572,
            "mixed_qty_pct": 0.43610547667342797,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 0.5583189733567203,
            "mixed_notional_pct": 0.4416810266432797,
            "instit_notional_pct": 0.0,
            "avg_trade_size": 2420.873134328358,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "5SO",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.99609375,
            "mixed_pct": 0.00390625,
            "instit_pct": 0.0,
            "retail_qty_pct": 0.9144205640285524,
            "mixed_qty_pct": 0.08557943597144752,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 0.9156332463514102,
            "mixed_notional_pct": 0.08436675364858977,
            "instit_notional_pct": 0.0,
            "avg_trade_size": 797.87890625,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "596",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9912126537785588,
            "mixed_pct": 0.008787346221441126,
            "instit_pct": 0.0,
            "retail_qty_pct": 0.9320783109246729,
            "mixed_qty_pct": 0.06792168907532711,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 0.9343071406292947,
            "mixed_notional_pct": 0.06569285937070535,
            "instit_notional_pct": 0.0,
            "avg_trade_size": 2562.1175746924428,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "O08",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.978021978021978,
            "mixed_pct": 0.02197802197802198,
            "instit_pct": 0.0,
            "retail_qty_pct": 0.8232366940718304,
            "mixed_qty_pct": 0.17676330592816963,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 0.8234141852690957,
            "mixed_notional_pct": 0.17658581473090432,
            "instit_notional_pct": 0.0,
            "avg_trade_size": 2643.9593406593403,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "BCV",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9772727272727273,
            "mixed_pct": 0.022727272727272728,
            "instit_pct": 0.0,
            "retail_qty_pct": 0.7264276228419655,
            "mixed_qty_pct": 0.2735723771580345,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 0.7062128336329692,
            "mixed_notional_pct": 0.29378716636703084,
            "instit_notional_pct": 0.0,
            "avg_trade_size": 1314.7272727272727,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "G50",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9287169042769857,
            "mixed_pct": 0.06109979633401222,
            "instit_pct": 0.010183299389002037,
            "retail_qty_pct": 0.5692249811888638,
            "mixed_qty_pct": 0.2542011537496865,
            "instit_qty_pct": 0.1765738650614497,
            "retail_notional_pct": 0.5673149196919732,
            "mixed_notional_pct": 0.24679550137163006,
            "instit_notional_pct": 0.1858895789363967,
            "avg_trade_size": 4992.424643584522,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "S85",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9225352112676056,
            "mixed_pct": 0.07746478873239436,
            "instit_pct": 0.0,
            "retail_qty_pct": 0.6216765453005927,
            "mixed_qty_pct": 0.37832345469940726,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 0.6236633064621364,
            "mixed_notional_pct": 0.37633669353786364,
            "instit_notional_pct": 0.0,
            "avg_trade_size": 4722.144366197183,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "N0Z",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8888888888888888,
            "mixed_pct": 0.1111111111111111,
            "instit_pct": 0.0,
            "retail_qty_pct": 0.6646216768916156,
            "mixed_qty_pct": 0.33537832310838445,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 0.6619259098786828,
            "mixed_notional_pct": 0.3380740901213172,
            "instit_notional_pct": 0.0,
            "avg_trade_size": 6838.518518518518,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "BHU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8274932614555256,
            "mixed_pct": 0.16442048517520216,
            "instit_pct": 0.008086253369272238,
            "retail_qty_pct": 0.4151480795288002,
            "mixed_qty_pct": 0.43063352044907777,
            "instit_qty_pct": 0.15421840002212206,
            "retail_notional_pct": 0.4133420342118667,
            "mixed_notional_pct": 0.4335709614639997,
            "instit_notional_pct": 0.15308700432413358,
            "avg_trade_size": 8760.772237196765,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          }
        ],
        "6m": [
          {
            "ticker": "URR",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.9719626168224299,
            "mixed_pct": 0.028037383177570093,
            "instit_pct": 0.0,
            "retail_qty_pct": 0.6853658536585366,
            "mixed_qty_pct": 0.3146341463414634,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 0.6788005685104399,
            "mixed_notional_pct": 0.3211994314895601,
            "instit_notional_pct": 0.0,
            "avg_trade_size": 2084.4766355140187,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "5SO",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9922178988326849,
            "mixed_pct": 0.007782101167315175,
            "instit_pct": 0.0,
            "retail_qty_pct": 0.8972221036910604,
            "mixed_qty_pct": 0.10277789630893962,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 0.8985667870574251,
            "mixed_notional_pct": 0.10143321294257489,
            "instit_notional_pct": 0.0,
            "avg_trade_size": 1270.3265888456551,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "BCV",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9906542056074766,
            "mixed_pct": 0.009345794392523364,
            "instit_pct": 0.0,
            "retail_qty_pct": 0.8948443083205717,
            "mixed_qty_pct": 0.10515569167942827,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 0.8939638310284479,
            "mixed_notional_pct": 0.1060361689715521,
            "instit_notional_pct": 0.0,
            "avg_trade_size": 1497.9018691588785,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "596",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9896024464831804,
            "mixed_pct": 0.010397553516819572,
            "instit_pct": 0.0,
            "retail_qty_pct": 0.9244895735612401,
            "mixed_qty_pct": 0.07551042643875991,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 0.9217218896246019,
            "mixed_notional_pct": 0.07827811037539815,
            "instit_notional_pct": 0.0,
            "avg_trade_size": 2474.7792048929664,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "O08",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9871794871794872,
            "mixed_pct": 0.01282051282051282,
            "instit_pct": 0.0,
            "retail_qty_pct": 0.8673126894759636,
            "mixed_qty_pct": 0.13268731052403637,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 0.8665597132610184,
            "mixed_notional_pct": 0.13344028673898167,
            "instit_notional_pct": 0.0,
            "avg_trade_size": 2040.9878205128205,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "N0Z",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9142857142857143,
            "mixed_pct": 0.08571428571428572,
            "instit_pct": 0.0,
            "retail_qty_pct": 0.6815602836879433,
            "mixed_qty_pct": 0.31843971631205675,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 0.6803123481408248,
            "mixed_notional_pct": 0.31968765185917525,
            "instit_notional_pct": 0.0,
            "avg_trade_size": 5115.171428571429,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "S85",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9115646258503401,
            "mixed_pct": 0.08843537414965986,
            "instit_pct": 0.0,
            "retail_qty_pct": 0.5903955578767971,
            "mixed_qty_pct": 0.40960444212320296,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 0.5906392841826469,
            "mixed_notional_pct": 0.40936071581735306,
            "instit_notional_pct": 0.0,
            "avg_trade_size": 4782.506802721088,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "G50",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9015606242496998,
            "mixed_pct": 0.09003601440576231,
            "instit_pct": 0.008403361344537815,
            "retail_qty_pct": 0.5048867994556476,
            "mixed_qty_pct": 0.3693245082271434,
            "instit_qty_pct": 0.12578869231720896,
            "retail_notional_pct": 0.5073165662112072,
            "mixed_notional_pct": 0.359031377861696,
            "instit_notional_pct": 0.13365205592709672,
            "avg_trade_size": 5700.527010804321,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "BHU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8626198083067093,
            "mixed_pct": 0.13258785942492013,
            "instit_pct": 0.004792332268370607,
            "retail_qty_pct": 0.47808427154602995,
            "mixed_qty_pct": 0.41195259972001497,
            "instit_qty_pct": 0.10996312873395508,
            "retail_notional_pct": 0.473656283198677,
            "mixed_notional_pct": 0.41496617064606833,
            "instit_notional_pct": 0.11137754615525464,
            "avg_trade_size": 7136.456869009585,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          }
        ]
      },
      "currency_thresholds": {
        "SGD": {
          "retail_max": 13500.0,
          "instit_min": 67500.0
        }
      },
      "classification_legend": {
        "retail_heavy": ">70% retail",
        "institutional": ">20% institutional",
        "mixed": "otherwise"
      }
    },
    "price_moving_trades": {
      "total_trades": 97,
      "price_moving_trades": 49,
      "pct_price_moving": 50.51546391752577,
      "all_movers": {
        "count": 49,
        "avg_size": 1829.6734693877552,
        "median_size": 550.0,
        "retail_count": 47,
        "mixed_count": 2,
        "institutional_count": 0,
        "retail_pct": 95.91836734693877,
        "mixed_pct": 4.081632653061225,
        "instit_pct": 0.0
      },
      "positive_movers": {
        "count": 29,
        "avg_size": 1219.155172413793,
        "median_size": 424.0,
        "retail_count": 28,
        "mixed_count": 1,
        "institutional_count": 0,
        "retail_pct": 96.55172413793103,
        "mixed_pct": 3.4482758620689653,
        "instit_pct": 0.0
      },
      "negative_movers": {
        "count": 20,
        "avg_size": 2714.925,
        "median_size": 1551.0,
        "retail_count": 19,
        "mixed_count": 1,
        "institutional_count": 0,
        "retail_pct": 95.0,
        "mixed_pct": 5.0,
        "instit_pct": 0.0
      }
    },
    "short_selling": {
      "data_available": true,
      "security_name": "$ Sim Leisure",
      "mapping": {
        "ticker_to_security": "$ Sim Leisure",
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
            "avg_short_ratio": 0.0,
            "max_short_ratio": 0.0,
            "interpretation": "Low short interest"
          }
        },
        "3M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.0,
            "max_short_ratio": 0.0,
            "interpretation": "Low short interest"
          }
        },
        "6M": {
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
            "avg_short_ratio": 0.0
          },
          {
            "month": "2026-01",
            "avg_short_ratio": 0.0
          },
          {
            "month": "2025-12",
            "avg_short_ratio": 0.0
          },
          {
            "month": "2025-11",
            "avg_short_ratio": 0.0
          },
          {
            "month": "2025-10",
            "avg_short_ratio": 0.0
          },
          {
            "month": "2025-09",
            "avg_short_ratio": 0.0
          },
          {
            "month": "2025-08",
            "avg_short_ratio": 0.0
          },
          {
            "month": "2025-07",
            "avg_short_ratio": 0.0
          },
          {
            "month": "2025-06",
            "avg_short_ratio": 0.0
          },
          {
            "month": "2025-05",
            "avg_short_ratio": 0.0
          },
          {
            "month": "2025-04",
            "avg_short_ratio": 0.0
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
            "avg_short_ratio": 0.0,
            "change_pct": null
          },
          {
            "month": "2026-01",
            "avg_short_ratio": 0.0,
            "change_pct": null
          },
          {
            "month": "2025-12",
            "avg_short_ratio": 0.0,
            "change_pct": null
          },
          {
            "month": "2025-11",
            "avg_short_ratio": 0.0,
            "change_pct": null
          },
          {
            "month": "2025-10",
            "avg_short_ratio": 0.0,
            "change_pct": null
          },
          {
            "month": "2025-09",
            "avg_short_ratio": 0.0,
            "change_pct": null
          },
          {
            "month": "2025-08",
            "avg_short_ratio": 0.0,
            "change_pct": null
          },
          {
            "month": "2025-07",
            "avg_short_ratio": 0.0,
            "change_pct": null
          },
          {
            "month": "2025-06",
            "avg_short_ratio": 0.0,
            "change_pct": null
          },
          {
            "month": "2025-05",
            "avg_short_ratio": 0.0,
            "change_pct": null
          },
          {
            "month": "2025-04",
            "avg_short_ratio": 0.0,
            "change_pct": null
          }
        ],
        "interpretation": "Short interest stable"
      },
      "short_series": {
        "valid": true,
        "rows": [
          {
            "date": "2026-03-03",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 23300,
            "close": 0.6,
            "return": -0.032258064516129115
          },
          {
            "date": "2026-03-02",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.62,
            "return": 0.0
          },
          {
            "date": "2026-02-27",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.62,
            "return": 0.0
          },
          {
            "date": "2026-02-26",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.62,
            "return": 0.0
          },
          {
            "date": "2026-02-25",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.62,
            "return": 0.0
          },
          {
            "date": "2026-02-24",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 4100,
            "close": 0.62,
            "return": 0.008130081300812941
          },
          {
            "date": "2026-02-23",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2100,
            "close": 0.615,
            "return": 0.016528925619834656
          },
          {
            "date": "2026-02-20",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 93300,
            "close": 0.605,
            "return": 0.008333333333333304
          },
          {
            "date": "2026-02-19",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 22200,
            "close": 0.6,
            "return": 0.0
          },
          {
            "date": "2026-02-16",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.6,
            "return": 0.0
          },
          {
            "date": "2026-02-13",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.6,
            "return": 0.0
          },
          {
            "date": "2026-02-12",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 68500,
            "close": 0.6,
            "return": 0.17647058823529416
          },
          {
            "date": "2026-02-11",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.51,
            "return": 0.0
          },
          {
            "date": "2026-02-10",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.51,
            "return": 0.0
          },
          {
            "date": "2026-02-09",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 60100,
            "close": 0.51,
            "return": 0.0
          },
          {
            "date": "2026-02-06",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 10000,
            "close": 0.51,
            "return": 0.0
          },
          {
            "date": "2026-02-05",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1000,
            "close": 0.51,
            "return": 0.020000000000000018
          },
          {
            "date": "2026-02-04",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 10000,
            "close": 0.5,
            "return": -0.04761904761904767
          },
          {
            "date": "2026-02-03",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.525,
            "return": 0.0
          },
          {
            "date": "2026-02-02",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.525,
            "return": 0.0
          },
          {
            "date": "2026-01-30",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.525,
            "return": 0.0
          },
          {
            "date": "2026-01-29",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.525,
            "return": 0.0
          },
          {
            "date": "2026-01-28",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.525,
            "return": 0.0
          },
          {
            "date": "2026-01-27",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.525,
            "return": 0.0
          },
          {
            "date": "2026-01-26",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.525,
            "return": 0.0
          },
          {
            "date": "2026-01-23",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.525,
            "return": 0.0
          },
          {
            "date": "2026-01-22",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 700,
            "close": 0.525,
            "return": 0.009615384615384581
          },
          {
            "date": "2026-01-21",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1000,
            "close": 0.52,
            "return": 0.0
          },
          {
            "date": "2026-01-20",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.52,
            "return": 0.0
          },
          {
            "date": "2026-01-19",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 100,
            "close": 0.52,
            "return": 0.0
          },
          {
            "date": "2026-01-16",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 100,
            "close": 0.52,
            "return": 0.0
          },
          {
            "date": "2026-01-15",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 6000,
            "close": 0.52,
            "return": 0.019607843137254832
          },
          {
            "date": "2026-01-14",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.51,
            "return": 0.0
          },
          {
            "date": "2026-01-13",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.51,
            "return": 0.0
          },
          {
            "date": "2026-01-12",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.51,
            "return": 0.0
          },
          {
            "date": "2026-01-09",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.51,
            "return": 0.0
          },
          {
            "date": "2026-01-08",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 500,
            "close": 0.51,
            "return": 0.0
          },
          {
            "date": "2026-01-07",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.51,
            "return": 0.0
          },
          {
            "date": "2026-01-06",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.51,
            "return": 0.0
          },
          {
            "date": "2026-01-05",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.51,
            "return": 0.0
          },
          {
            "date": "2026-01-02",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 500,
            "close": 0.51,
            "return": 0.0
          },
          {
            "date": "2025-12-31",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.51,
            "return": 0.0
          },
          {
            "date": "2025-12-30",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2600,
            "close": 0.51,
            "return": 0.0
          },
          {
            "date": "2025-12-29",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.51,
            "return": 0.0
          },
          {
            "date": "2025-12-26",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.51,
            "return": 0.0
          },
          {
            "date": "2025-12-24",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.51,
            "return": 0.0
          },
          {
            "date": "2025-12-23",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.51,
            "return": 0.0
          },
          {
            "date": "2025-12-22",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.51,
            "return": 0.0
          },
          {
            "date": "2025-12-19",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.51,
            "return": 0.0
          },
          {
            "date": "2025-12-18",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 500,
            "close": 0.51,
            "return": 0.020000000000000018
          },
          {
            "date": "2025-12-17",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.5,
            "return": 0.0
          },
          {
            "date": "2025-12-16",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.5,
            "return": 0.0
          },
          {
            "date": "2025-12-15",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.5,
            "return": 0.0
          },
          {
            "date": "2025-12-12",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.5,
            "return": 0.0
          },
          {
            "date": "2025-12-11",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.5,
            "return": 0.0
          },
          {
            "date": "2025-12-10",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.5,
            "return": 0.0
          },
          {
            "date": "2025-12-09",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 10000,
            "close": 0.5,
            "return": -0.12280701754385959
          },
          {
            "date": "2025-12-08",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.57,
            "return": 0.0
          },
          {
            "date": "2025-12-05",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 10000,
            "close": 0.57,
            "return": 0.008849557522123908
          },
          {
            "date": "2025-12-04",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 100,
            "close": 0.565,
            "return": 0.0
          },
          {
            "date": "2025-12-03",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 10900,
            "close": 0.565,
            "return": 0.027272727272727115
          },
          {
            "date": "2025-12-02",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.55,
            "return": 0.0
          },
          {
            "date": "2025-12-01",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 100,
            "close": 0.55,
            "return": 0.0
          },
          {
            "date": "2025-11-28",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.55,
            "return": 0.0
          },
          {
            "date": "2025-11-27",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.55,
            "return": 0.0
          },
          {
            "date": "2025-11-26",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.55,
            "return": 0.0
          },
          {
            "date": "2025-11-25",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.55,
            "return": 0.0
          },
          {
            "date": "2025-11-24",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.55,
            "return": 0.0
          },
          {
            "date": "2025-11-21",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.55,
            "return": 0.0
          },
          {
            "date": "2025-11-20",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.55,
            "return": 0.0
          },
          {
            "date": "2025-11-19",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.55,
            "return": 0.0
          },
          {
            "date": "2025-11-18",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.55,
            "return": 0.0
          },
          {
            "date": "2025-11-17",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.55,
            "return": 0.0
          },
          {
            "date": "2025-11-14",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.55,
            "return": 0.0
          },
          {
            "date": "2025-11-13",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.55,
            "return": 0.0
          },
          {
            "date": "2025-11-12",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.55,
            "return": 0.0
          },
          {
            "date": "2025-11-11",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.55,
            "return": 0.0
          },
          {
            "date": "2025-11-10",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.55,
            "return": 0.0
          },
          {
            "date": "2025-11-07",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.55,
            "return": 0.0
          },
          {
            "date": "2025-11-06",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.55,
            "return": 0.0
          },
          {
            "date": "2025-11-05",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 10000,
            "close": 0.55,
            "return": 0.07843137254901977
          },
          {
            "date": "2025-11-04",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.51,
            "return": 0.0
          },
          {
            "date": "2025-11-03",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.51,
            "return": 0.0
          },
          {
            "date": "2025-10-31",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 500,
            "close": 0.51,
            "return": 0.0
          },
          {
            "date": "2025-10-30",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1400,
            "close": 0.51,
            "return": 0.0
          },
          {
            "date": "2025-10-29",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 300,
            "close": 0.51,
            "return": 0.020000000000000018
          },
          {
            "date": "2025-10-28",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 34400,
            "close": 0.5,
            "return": -0.03846153846153855
          },
          {
            "date": "2025-10-27",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.52,
            "return": 0.0
          },
          {
            "date": "2025-10-24",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.52,
            "return": 0.0
          },
          {
            "date": "2025-10-23",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.52,
            "return": 0.0
          },
          {
            "date": "2025-10-22",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.52,
            "return": 0.0
          },
          {
            "date": "2025-10-21",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.52,
            "return": 0.0
          },
          {
            "date": "2025-10-17",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.52,
            "return": 0.0
          },
          {
            "date": "2025-10-16",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.52,
            "return": 0.0
          },
          {
            "date": "2025-10-15",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 20000,
            "close": 0.52,
            "return": -0.018867924528301883
          },
          {
            "date": "2025-10-14",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.53,
            "return": 0.0
          },
          {
            "date": "2025-10-13",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.53,
            "return": 0.0
          },
          {
            "date": "2025-10-10",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 15000,
            "close": 0.53,
            "return": -0.01851851851851849
          },
          {
            "date": "2025-10-09",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.54,
            "return": 0.0
          },
          {
            "date": "2025-10-08",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 600,
            "close": 0.54,
            "return": 0.0
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "URR",
          "avg_short_ratio": 0.0,
          "max_short_ratio": 0.0,
          "is_target": true
        },
        {
          "ticker": "596",
          "avg_short_ratio": 2.32016564915425e-05,
          "max_short_ratio": 0.004516446640441167,
          "is_target": false
        },
        {
          "ticker": "BHU",
          "avg_short_ratio": 0.00015112439806564562,
          "max_short_ratio": 0.04918032786885246,
          "is_target": false
        },
        {
          "ticker": "5SO",
          "avg_short_ratio": 0.0005366369530154671,
          "max_short_ratio": 0.17663617171006332,
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
          "opening": 0.0,
          "continuous": 0.8755746245786087,
          "closing": 0.0,
          "auctions": 0.12442537542139137,
          "other": 0.0
        },
        "1M": {
          "opening": 0.0878063607659717,
          "continuous": 0.8671335611977148,
          "closing": 0.008374326176902988,
          "auctions": 0.13286643880228527,
          "other": 0.0
        },
        "3M": {
          "opening": 0.07717059262779173,
          "continuous": 0.8808553390808499,
          "closing": 0.0073314778358563575,
          "auctions": 0.1191446609191501,
          "other": 0.0
        },
        "6M": {
          "opening": 0.06067351261386457,
          "continuous": 0.9078747382920671,
          "closing": 0.0054935776008529285,
          "auctions": 0.09212526170793292,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.19917853574504174,
        "1M": 0.7320149941017513,
        "3M": 0.809267524272475,
        "6M": 0.7953396507449589
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.025
        },
        {
          "time": "09:00",
          "avg_share": 0.115
        },
        {
          "time": "09:30",
          "avg_share": 0.1462
        },
        {
          "time": "10:00",
          "avg_share": 0.0727
        },
        {
          "time": "10:30",
          "avg_share": 0.0138
        },
        {
          "time": "11:00",
          "avg_share": 0.0487
        },
        {
          "time": "11:30",
          "avg_share": 0.0699
        },
        {
          "time": "12:30",
          "avg_share": 0.0356
        },
        {
          "time": "13:00",
          "avg_share": 0.0274
        },
        {
          "time": "13:30",
          "avg_share": 0.0111
        },
        {
          "time": "14:00",
          "avg_share": 0.0642
        },
        {
          "time": "14:30",
          "avg_share": 0.082
        },
        {
          "time": "15:00",
          "avg_share": 0.0435
        },
        {
          "time": "15:30",
          "avg_share": 0.0365
        },
        {
          "time": "16:00",
          "avg_share": 0.1312
        },
        {
          "time": "16:30",
          "avg_share": 0.0072
        },
        {
          "time": "17:00",
          "avg_share": 0.0699
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "URR",
          "auctions_pct": 10.369043549342518,
          "hhi": 0.7868794012075977,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400",
            "you": true
          }
        },
        {
          "ticker": "S85",
          "auctions_pct": 4.801996371340124,
          "hhi": 0.7359365117121588,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "N0Z",
          "auctions_pct": 7.899182413328901,
          "hhi": 0.8423166166487412,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "BCV",
          "auctions_pct": 6.840450077617392,
          "hhi": 0.8328764280218122,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "BHU",
          "auctions_pct": 8.178675173142025,
          "hhi": 0.5528057342008222,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "G50",
          "auctions_pct": 5.6546228206310625,
          "hhi": 0.5927732947663216,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "596",
          "auctions_pct": 4.093668859854051,
          "hhi": 0.6354062396581586,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "O08",
          "auctions_pct": 14.869139744755207,
          "hhi": 0.8245650529670947,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "5SO",
          "auctions_pct": 4.323976423631127,
          "hhi": 0.6806855485303426,
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
