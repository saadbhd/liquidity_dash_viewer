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
      "marketCap": 142560313.75,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "ITS",
      "name": "Info-Tech",
      "marketCap": 268320000.0,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "LVR",
      "name": "17LIVE GROUP",
      "marketCap": 143048079.95999998,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "NXR",
      "name": "iWOW Tech",
      "marketCap": 105690220.8,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "U77",
      "name": "Sarine Tech",
      "marketCap": 69825469.63499999,
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
      "marketCap": 186839160.20000002,
      "sector": "Computer Hardware",
      "industry": "Technology"
    },
    {
      "ticker": "QS9",
      "name": "G Invacom",
      "marketCap": 15213084.712000001,
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
    "asof_date": "2026-03-11",
    "industry": "Technology",
    "sector": "Software - Application",
    "market_cap_display": "142.6M",
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
          "score_pca": 76.52329749103941,
          "score_pca_percentile": 76.52329749103941,
          "rank_pca": 132,
          "total": 558,
          "adv_notional_sgd": 186825.0,
          "adv_volume_shares": 795000.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0013941467633729868,
          "votes": 62.0,
          "trades": 62.0,
          "spread_pct": 0.028727208770592698,
          "spread_ticks": 1.3172043010752688,
          "amihud": 3.6495018429984276e-07,
          "volatility": 0.8295328438373504
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5370653546446801,
          "loadings": {
            "log_adv": 0.5414788702103801,
            "log_trades": 0.5006697874943702,
            "log_turnover": 0.5127218073159411,
            "neg_spread": 0.3688616715749602,
            "neg_amihud": 0.010054359322570964,
            "neg_vol": -0.23892827879982068
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
          "peer_median_adv": 10113.75,
          "peer_median_score_pca": 48.83512544802868,
          "peer_median_trades": 5.5,
          "peer_median_volatility": 0.17548509674245383,
          "peer_median_spread_pct": 0.023773718460919746,
          "peer_median_spread_ticks": 1.7099039172209904,
          "peer_median_amihud": 3.436005711452892e-08,
          "peer_median_turnover_ratio": 0.00012199124915978198,
          "target_vs_peer": {
            "score_pca_delta": 27.69,
            "adv_delta_pct": 1747.2,
            "trades_delta_pct": 1027.27,
            "volatility_delta_pct": -372.71,
            "spread_pct_delta_pct": -20.84,
            "spread_ticks_delta_pct": -22.97,
            "amihud_delta_pct": -962.13,
            "turnover_ratio_delta_pct": 1042.83
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 76.52329749103941,
            "rank_pca": 132,
            "adv": 186825.0,
            "trades": 62.0,
            "volatility": 0.8295328438373504,
            "spread_pct": 0.028727208770592698,
            "spread_ticks": 1.3172043010752688,
            "amihud": 3.6495018429984276e-07,
            "turnover_ratio": 0.0013941467633729868,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 80.28673835125448,
            "rank_pca": 111,
            "adv": 277826.0,
            "trades": 474.0,
            "volatility": 0.3632292108029483,
            "spread_pct": 0.015037752008448896,
            "spread_ticks": 1.5864745011086474,
            "amihud": 3.427976331880202e-08,
            "turnover_ratio": 0.003881893285702014,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 46.95340501792115,
            "rank_pca": 297,
            "adv": 9157.5,
            "trades": 5.0,
            "volatility": 0.11556036717787163,
            "spread_pct": 0.011169402606193953,
            "spread_ticks": 1.8333333333333333,
            "amihud": 6.57831983133184e-07,
            "turnover_ratio": 7.673509084021033e-05,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 25.806451612903224,
            "rank_pca": 415,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.046082949308755804,
            "spread_ticks": 3.3333333333333335,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 50.7168458781362,
            "rank_pca": 276,
            "adv": 11070.0,
            "trades": 6.0,
            "volatility": 0.23540982630703605,
            "spread_pct": 0.026567809700339704,
            "spread_ticks": 1.375,
            "amihud": 0.0,
            "turnover_ratio": 0.00016724740747935362,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 30.46594982078853,
            "rank_pca": 389,
            "adv": 480.0,
            "trades": 2.0,
            "volatility": 0.0,
            "spread_pct": 0.6666666666666666,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 5.2034808745584015e-05,
            "is_target": false
          },
          {
            "ticker": "KUX",
            "score_pca": 5.913978494623656,
            "rank_pca": 526,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.4309392265193369,
            "spread_ticks": 16.714285714285715,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "9MT",
            "score_pca": 78.13620071684588,
            "rank_pca": 123,
            "adv": 274525.0,
            "trades": 142.0,
            "volatility": 0.47089144214312495,
            "spread_pct": 0.01392026486916593,
            "spread_ticks": 2.2448377581120944,
            "amihud": 1.963107752257978e-07,
            "turnover_ratio": 0.004212491605019428,
            "is_target": false
          },
          {
            "ticker": "QS9",
            "score_pca": 81.72043010752688,
            "rank_pca": 103,
            "adv": 509398.4,
            "trades": 180.0,
            "volatility": 0.4975188042425369,
            "spread_pct": 0.02097962722149979,
            "spread_ticks": 1.198019801980198,
            "amihud": 3.4440350910255826e-08,
            "turnover_ratio": 0.03997162245063361,
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
              "mean": 0.24100034951720517,
              "median": 0.1019764187233252,
              "min": 0.0,
              "max": 6.608197362010048,
              "p5": 0.0,
              "p95": 0.9551884222944892,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3322227.141065367,
              "median": 11145.9,
              "min": 0.0,
              "max": 234174444.0,
              "p5": 0.0,
              "p95": 13990161.399999997,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.11179110232589153,
              "median": 0.03611217825585866,
              "min": 0.000283572102427917,
              "max": 1.4382566585956416,
              "p5": 0.0038561092383641487,
              "p95": 0.5059390098760166,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005019760850055037,
              "median": 0.00021659492668896617,
              "min": 0.0,
              "max": 0.8272361742798761,
              "p5": 0.0,
              "p95": 0.012626812983325623,
              "count": 552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0011884633311769674,
              "median": 2.9376806306378104e-08,
              "min": 0.0,
              "max": 0.4166666666666667,
              "p5": 0.0,
              "p95": 5.740646825704086e-05,
              "count": 389
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 518.4569892473119,
              "median": 6.0,
              "min": 0.0,
              "max": 10904.0,
              "p5": 0.0,
              "p95": 3157.699999999997,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.21177619291558375,
              "median": 0.13301883118866764,
              "min": 0.0,
              "max": 0.8295328438373504,
              "p5": 0.0,
              "p95": 0.6663265722753093,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1806665.8125,
              "median": 10113.75,
              "min": 0.0,
              "max": 13967968.0,
              "p5": 0.0,
              "p95": 9176418.299999993,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1533335782205513,
              "median": 0.027647509235466203,
              "min": 0.0014776101840758519,
              "max": 0.6666666666666666,
              "p5": 0.004869737531817187,
              "p95": 0.5841620626151011,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0018478758379175618,
              "median": 0.00012199124915978198,
              "min": 0.0,
              "max": 0.009210949347200346,
              "p5": 0.0,
              "p95": 0.0073457797256759275,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.762853386285694e-07,
              "median": 1.7464932169194758e-08,
              "min": 0.0,
              "max": 6.57831983133184e-07,
              "p5": 0.0,
              "p95": 5.846115334248487e-07,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 644.875,
              "median": 5.5,
              "min": 0.0,
              "max": 4610.0,
              "p5": 0.0,
              "p95": 3162.399999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 135307.1125,
              "median": 10113.75,
              "min": 0.0,
              "max": 509398.4,
              "p5": 0.0,
              "p95": 428348.0599999999,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 101.125,
              "median": 5.5,
              "min": 0.0,
              "max": 474.0,
              "p5": 0.0,
              "p95": 371.09999999999985,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.21032620633418972,
              "median": 0.17548509674245383,
              "min": 0.0,
              "max": 0.4975188042425369,
              "p5": 0.0,
              "p95": 0.4881992275077427,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15392046236255097,
              "median": 0.023773718460919746,
              "min": 0.011169402606193953,
              "max": 0.6666666666666666,
              "p5": 0.012132204398234144,
              "p95": 0.5841620626151011,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.6606605552691653,
              "median": 1.7099039172209904,
              "min": 1.0,
              "max": 16.714285714285715,
              "p5": 1.0693069306930694,
              "p95": 12.030952380952375,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.5381047876467327e-07,
              "median": 3.436005711452892e-08,
              "min": 0.0,
              "max": 6.57831983133184e-07,
              "p5": 0.0,
              "p95": 5.424516811563375e-07,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006045253081052525,
              "median": 0.00012199124915978198,
              "min": 0.0,
              "max": 0.03997162245063361,
              "p5": 0.0,
              "p95": 0.02745592665466863,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.06818181818181812,
            "market": 0.0006521613996999243,
            "sector": 0.0,
            "peers": 0.0,
            "vs_market": 0.0675296567821182,
            "vs_sector": 0.06818181818181812,
            "vs_peers": 0.06818181818181812
          }
        }
      },
      "1w": {
        "label": "1W",
        "window_days": 5,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 5,
          "score_pca": 71.86379928315412,
          "score_pca_percentile": 71.86379928315412,
          "rank_pca": 158,
          "total": 558,
          "adv_notional_sgd": 174064.0,
          "adv_volume_shares": 791200.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0013874829172084366,
          "votes": 85.0,
          "trades": 85.0,
          "spread_pct": 0.026210630344175673,
          "spread_ticks": 1.1776061776061777,
          "amihud": 7.93307656608847e-08,
          "volatility": 0.5477222514861033
        },
        "pca": {
          "valid": true,
          "window_days": 5,
          "variance_explained": 0.522890244678475,
          "loadings": {
            "log_adv": 0.5510323785836164,
            "log_trades": 0.5054660436907271,
            "log_turnover": 0.5121429907100468,
            "neg_spread": 0.40743387126425146,
            "neg_amihud": 0.10876320298035268,
            "neg_vol": 0.027297613792702607
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
          "peer_median_adv": 14953.5,
          "peer_median_score_pca": 53.04659498207886,
          "peer_median_trades": 10.0,
          "peer_median_volatility": 0.4035028850061265,
          "peer_median_spread_pct": 0.024753596582564673,
          "peer_median_spread_ticks": 1.8464935165323593,
          "peer_median_amihud": 1.0233110251529874e-07,
          "peer_median_turnover_ratio": 0.00016337038866178833,
          "target_vs_peer": {
            "score_pca_delta": 18.82,
            "adv_delta_pct": 1064.0,
            "trades_delta_pct": 750.0,
            "volatility_delta_pct": -35.74,
            "spread_pct_delta_pct": -5.89,
            "spread_ticks_delta_pct": -36.22,
            "amihud_delta_pct": 22.48,
            "turnover_ratio_delta_pct": 749.29
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 71.86379928315412,
            "rank_pca": 158,
            "adv": 174064.0,
            "trades": 85.0,
            "volatility": 0.5477222514861033,
            "spread_pct": 0.026210630344175673,
            "spread_ticks": 1.1776061776061777,
            "amihud": 7.93307656608847e-08,
            "turnover_ratio": 0.0013874829172084366,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 81.72043010752688,
            "rank_pca": 103,
            "adv": 510615.0,
            "trades": 326.0,
            "volatility": 0.5304098321011022,
            "spread_pct": 0.014894709809964062,
            "spread_ticks": 1.5440508628519527,
            "amihud": 5.760066724612961e-08,
            "turnover_ratio": 0.007202459766642081,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 52.68817204301075,
            "rank_pca": 265,
            "adv": 17935.0,
            "trades": 8.0,
            "volatility": 0.2709724467899506,
            "spread_pct": 0.012931310415466373,
            "spread_ticks": 2.148936170212766,
            "amihud": 6.57831983133184e-07,
            "turnover_ratio": 0.00014586580330886828,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 31.182795698924732,
            "rank_pca": 385,
            "adv": 74.0,
            "trades": 1.0,
            "volatility": 0.27659593791115095,
            "spread_pct": 0.04844290657439451,
            "spread_ticks": 3.5,
            "amihud": 0.0,
            "turnover_ratio": 3.5598149294935937e-06,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 53.40501792114696,
            "rank_pca": 261,
            "adv": 11972.0,
            "trades": 12.0,
            "volatility": 0.5503031256555411,
            "spread_pct": 0.026567809700339704,
            "spread_ticks": 1.4,
            "amihud": 1.4078062858550678e-06,
            "turnover_ratio": 0.00018087497401470836,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 3.225806451612903,
            "rank_pca": 538,
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
            "score_pca": 6.272401433691756,
            "rank_pca": 524,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.4331210191082802,
            "spread_ticks": 16.833333333333332,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "9MT",
            "score_pca": 76.34408602150538,
            "rank_pca": 133,
            "adv": 238058.5,
            "trades": 142.0,
            "volatility": 0.5335859092273891,
            "spread_pct": 0.016695290969365333,
            "spread_ticks": 2.759075907590759,
            "amihud": 1.0233110251529874e-07,
            "turnover_ratio": 0.0034560614578159395,
            "is_target": false
          },
          {
            "ticker": "QS9",
            "score_pca": 78.13620071684588,
            "rank_pca": 123,
            "adv": 259646.4,
            "trades": 125.0,
            "volatility": 1.2768762834584837,
            "spread_pct": 0.022939383464789638,
            "spread_ticks": 1.25,
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
              "mean": 0.5775670309303368,
              "median": 0.3515046582953099,
              "min": 0.0,
              "max": 9.513056291224183,
              "p5": 0.0,
              "p95": 1.7824303232224412,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 4050238.5700327028,
              "median": 13267.849999999999,
              "min": 0.0,
              "max": 370063498.47999996,
              "p5": 0.0,
              "p95": 17351611.599999998,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.11228659608521667,
              "median": 0.03656597774244836,
              "min": 0.00028468976419645744,
              "max": 1.3716475095785436,
              "p5": 0.003925034115289352,
              "p95": 0.5032040472175369,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.011195364589471684,
              "median": 0.00028477907699092425,
              "min": 0.0,
              "max": 4.62395359567596,
              "p5": 0.0,
              "p95": 0.01102069227704379,
              "count": 552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00022731456880394446,
              "median": 7.93307656608847e-08,
              "min": 0.0,
              "max": 0.04130605822187254,
              "p5": 0.0,
              "p95": 0.0001244354392639342,
              "count": 493
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 580.252688172043,
              "median": 7.0,
              "min": 0.0,
              "max": 15205.0,
              "p5": 0.0,
              "p95": 3688.049999999999,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.31158448725100846,
              "median": 0.29663412098768527,
              "min": 0.0,
              "max": 0.5503031256555411,
              "p5": 0.0,
              "p95": 0.5493998196962379,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2137539.625,
              "median": 14953.5,
              "min": 0.0,
              "max": 16385657.0,
              "p5": 0.0,
              "p95": 10829392.299999991,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1537890828504204,
              "median": 0.026389220022257687,
              "min": 0.0014776101840758519,
              "max": 0.6666666666666666,
              "p5": 0.005486405265062534,
              "p95": 0.5849256900212313,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00245963731483833,
              "median": 0.00016337038866178833,
              "min": 0.0,
              "max": 0.010756855242603051,
              "p5": 0.0,
              "p95": 0.00951281682601671,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.148067023105902e-07,
              "median": 5.760066724612961e-08,
              "min": 0.0,
              "max": 1.4078062858550678e-06,
              "p5": 0.0,
              "p95": 1.182813995038502e-06,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 520.0,
              "median": 10.0,
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
              "mean": 129787.6125,
              "median": 14953.5,
              "min": 0.0,
              "max": 510615.0,
              "p5": 0.0,
              "p95": 422775.9899999999,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 76.75,
              "median": 10.0,
              "min": 0.0,
              "max": 326.0,
              "p5": 0.0,
              "p95": 261.5999999999999,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4298429418929522,
              "median": 0.4035028850061265,
              "min": 0.0,
              "max": 1.2768762834584837,
              "p5": 0.0,
              "p95": 1.0225756782274533,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1552823870886583,
              "median": 0.024753596582564673,
              "min": 0.012931310415466373,
              "max": 0.6666666666666666,
              "p5": 0.013618500203540563,
              "p95": 0.5849256900212313,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.8044245342486014,
              "median": 1.8464935165323593,
              "min": 1.0,
              "max": 16.833333333333332,
              "p5": 1.0875,
              "p95": 12.166666666666659,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.454284340426698e-07,
              "median": 1.0233110251529874e-07,
              "min": 0.0,
              "max": 1.4078062858550678e-06,
              "p5": 0.0,
              "p95": 1.182813995038502e-06,
              "count": 7
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004116257860170431,
              "median": 0.00016337038866178833,
              "min": 0.0,
              "max": 0.021941241064652364,
              "p5": 0.0,
              "p95": 0.01678266761034876,
              "count": 8
            }
          },
          "returns": {
            "window_days": 5,
            "n_obs": 5,
            "stock": 0.06818181818181812,
            "market": 0.01060933117110796,
            "sector": -0.023390186396307078,
            "peers": -0.03712757830404889,
            "vs_market": 0.05757248701071016,
            "vs_sector": 0.0915720045781252,
            "vs_peers": 0.10530939648586701
          }
        }
      },
      "2w": {
        "label": "2W",
        "window_days": 10,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 10,
          "score_pca": 71.68458781362007,
          "score_pca_percentile": 71.68458781362007,
          "rank_pca": 159,
          "total": 558,
          "adv_notional_sgd": 272595.75,
          "adv_volume_shares": 1228650.0,
          "free_float_shares": null,
          "turnover_ratio": 0.002154614365809082,
          "votes": 87.0,
          "trades": 87.0,
          "spread_pct": 0.025959814424621055,
          "spread_ticks": 1.1832086832086832,
          "amihud": 9.255263798536545e-08,
          "volatility": 0.6810443112477709
        },
        "pca": {
          "valid": true,
          "window_days": 10,
          "variance_explained": 0.5271850516832257,
          "loadings": {
            "log_adv": 0.5456979289379754,
            "log_trades": 0.4964607539704323,
            "log_turnover": 0.5034949073241418,
            "neg_spread": 0.41534160132047776,
            "neg_amihud": 0.15745274303215398,
            "neg_vol": 0.07023785548235388
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
          "peer_median_score_pca": 49.551971326164875,
          "peer_median_trades": 8.25,
          "peer_median_volatility": 0.3822545059762985,
          "peer_median_spread_pct": 0.027057883477087135,
          "peer_median_spread_ticks": 1.9604660673814542,
          "peer_median_amihud": 1.0579538306005458e-07,
          "peer_median_turnover_ratio": 0.00014759054421465122,
          "target_vs_peer": {
            "score_pca_delta": 22.13,
            "adv_delta_pct": 1977.8,
            "trades_delta_pct": 954.55,
            "volatility_delta_pct": -78.17,
            "spread_pct_delta_pct": 4.06,
            "spread_ticks_delta_pct": -39.65,
            "amihud_delta_pct": 12.52,
            "turnover_ratio_delta_pct": 1359.86
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 71.68458781362007,
            "rank_pca": 159,
            "adv": 272595.75,
            "trades": 87.0,
            "volatility": 0.6810443112477709,
            "spread_pct": 0.025959814424621055,
            "spread_ticks": 1.1832086832086832,
            "amihud": 9.255263798536545e-08,
            "turnover_ratio": 0.002154614365809082,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 83.87096774193549,
            "rank_pca": 91,
            "adv": 961123.0,
            "trades": 517.5,
            "volatility": 0.9736583407917423,
            "spread_pct": 0.012957629570870962,
            "spread_ticks": 1.3795384925911853,
            "amihud": 3.6976164092516207e-08,
            "turnover_ratio": 0.013624393870725993,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 49.283154121863795,
            "rank_pca": 284,
            "adv": 14362.5,
            "trades": 6.5,
            "volatility": 0.1966356152242587,
            "spread_pct": 0.014521952436574264,
            "spread_ticks": 2.5620133481646272,
            "amihud": 4.91947862667075e-07,
            "turnover_ratio": 0.0001178678647590618,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 34.946236559139784,
            "rank_pca": 364,
            "adv": 1962.0,
            "trades": 1.0,
            "volatility": 0.34444610123844804,
            "spread_pct": 0.04861169718963624,
            "spread_ticks": 3.7,
            "amihud": 0.0,
            "turnover_ratio": 9.077528070208664e-05,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 49.82078853046595,
            "rank_pca": 281,
            "adv": 11876.5,
            "trades": 10.0,
            "volatility": 0.42006291071414903,
            "spread_pct": 0.03241151133029527,
            "spread_ticks": 1.4592592592592593,
            "amihud": 1.0342414093123116e-06,
            "turnover_ratio": 0.00017731322367024063,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 2.6881720430107525,
            "rank_pca": 542,
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
            "score_pca": 75.44802867383513,
            "rank_pca": 138,
            "adv": 275692.5,
            "trades": 163.5,
            "volatility": 0.5231908071329695,
            "spread_pct": 0.014533683264760656,
            "spread_ticks": 2.461672875503649,
            "amihud": 1.0579538306005458e-07,
            "turnover_ratio": 0.0038342765314176835,
            "is_target": false
          },
          {
            "ticker": "QS9",
            "score_pca": 79.74910394265234,
            "rank_pca": 114,
            "adv": 488360.9,
            "trades": 179.5,
            "volatility": 1.0033479374276526,
            "spread_pct": 0.021704255623879003,
            "spread_ticks": 1.2303678929765887,
            "amihud": 1.0982775574845762e-07,
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
              "mean": 0.6361542482711949,
              "median": 0.45299178608805435,
              "min": 0.0,
              "max": 8.197560612767678,
              "p5": 0.0,
              "p95": 1.6797140665206614,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 4540437.364555127,
              "median": 19156.9,
              "min": 0.0,
              "max": 382575336.74,
              "p5": 0.0,
              "p95": 17894196.062499944,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10250606475931058,
              "median": 0.03268707955541247,
              "min": 0.0002841309333121872,
              "max": 1.3834262356001488,
              "p5": 0.0038633390202693022,
              "p95": 0.4830443750918471,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0124854127782731,
              "median": 0.0003815349534135082,
              "min": 0.0,
              "max": 5.1133742007778,
              "p5": 0.0,
              "p95": 0.012264908684894039,
              "count": 552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.380115381041732e-05,
              "median": 1.1276880757276724e-07,
              "min": 0.0,
              "max": 0.012127022859756413,
              "p5": 0.0,
              "p95": 7.11099683573899e-05,
              "count": 531
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 603.8198924731183,
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
              "mean": 0.3593824411724104,
              "median": 0.30182917570068124,
              "min": 0.0,
              "max": 0.9736583407917423,
              "p5": 0.0,
              "p95": 0.8712434304513521,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2348518.78125,
              "median": 13119.5,
              "min": 0.0,
              "max": 17526230.5,
              "p5": 0.0,
              "p95": 11728442.874999993,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.16062250625902674,
              "median": 0.029185662877458163,
              "min": 0.001444486543472916,
              "max": 0.6666666666666666,
              "p5": 0.0054740866030622325,
              "p95": 0.6021755355018601,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003475036922835972,
              "median": 0.00014759054421465122,
              "min": 0.0,
              "max": 0.013624393870725993,
              "p5": 0.0,
              "p95": 0.012928221787929354,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.366319413105973e-07,
              "median": 3.6976164092516207e-08,
              "min": 0.0,
              "max": 1.0342414093123116e-06,
              "p5": 0.0,
              "p95": 8.715533453187402e-07,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 602.0,
              "median": 8.25,
              "min": 0.0,
              "max": 4194.0,
              "p5": 0.0,
              "p95": 2907.224999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 219172.175,
              "median": 13119.5,
              "min": 0.0,
              "max": 961123.0,
              "p5": 0.0,
              "p95": 795656.2649999998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 109.75,
              "median": 8.25,
              "min": 0.0,
              "max": 517.5,
              "p5": 0.0,
              "p95": 399.1999999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4326677140661525,
              "median": 0.3822545059762985,
              "min": 0.0,
              "max": 1.0033479374276526,
              "p5": 0.0,
              "p95": 0.992956578605084,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.16172671099909494,
              "median": 0.027057883477087135,
              "min": 0.012957629570870962,
              "max": 0.6666666666666666,
              "p5": 0.013505142573867118,
              "p95": 0.6021755355018601,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 4.196328705784136,
              "median": 1.9604660673814542,
              "min": 1.0,
              "max": 19.77777777777778,
              "p5": 1.080628762541806,
              "p95": 14.150555555555547,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.54112653554345e-07,
              "median": 1.0579538306005458e-07,
              "min": 0.0,
              "max": 1.0342414093123116e-06,
              "p5": 0.0,
              "p95": 8.715533453187402e-07,
              "count": 7
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.007020227968887507,
              "median": 0.00014759054421465122,
              "min": 0.0,
              "max": 0.03831719697982499,
              "p5": 0.0,
              "p95": 0.02967471589164033,
              "count": 8
            }
          },
          "returns": {
            "window_days": 10,
            "n_obs": 10,
            "stock": -0.06000000000000005,
            "market": -0.028739553138112273,
            "sector": -0.06295550297099661,
            "peers": -0.08142233952984945,
            "vs_market": -0.03126044686188778,
            "vs_sector": 0.0029555029709965597,
            "vs_peers": 0.0214223395298494
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 73.83512544802868,
          "score_pca_percentile": 73.83512544802868,
          "rank_pca": 147,
          "total": 558,
          "adv_notional_sgd": 405925.0,
          "adv_volume_shares": 1623700.0,
          "free_float_shares": null,
          "turnover_ratio": 0.002847391320363168,
          "votes": 104.0,
          "trades": 104.0,
          "spread_pct": 0.0258093728775187,
          "spread_ticks": 1.1888111888111887,
          "amihud": 7.047937533847717e-08,
          "volatility": 0.6682348397357307
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5351769948803745,
          "loadings": {
            "log_adv": 0.5377164909878962,
            "log_trades": 0.4876309804008515,
            "log_turnover": 0.49515404751486575,
            "neg_spread": 0.4154415420804431,
            "neg_amihud": 0.16623630884560409,
            "neg_vol": 0.16635289669202621
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
          "peer_median_adv": 7935.0,
          "peer_median_score_pca": 46.68458781362007,
          "peer_median_trades": 6.0,
          "peer_median_volatility": 0.34694604092614867,
          "peer_median_spread_pct": 0.026875649511131937,
          "peer_median_spread_ticks": 1.4158730158730157,
          "peer_median_amihud": 1.1224314364923152e-07,
          "peer_median_turnover_ratio": 7.59067052304339e-05,
          "target_vs_peer": {
            "score_pca_delta": 27.15,
            "adv_delta_pct": 5015.6,
            "trades_delta_pct": 1633.33,
            "volatility_delta_pct": -92.6,
            "spread_pct_delta_pct": 3.97,
            "spread_ticks_delta_pct": -16.04,
            "amihud_delta_pct": 37.21,
            "turnover_ratio_delta_pct": 3651.17
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 73.83512544802868,
            "rank_pca": 147,
            "adv": 405925.0,
            "trades": 104.0,
            "volatility": 0.6682348397357307,
            "spread_pct": 0.0258093728775187,
            "spread_ticks": 1.1888111888111887,
            "amihud": 7.047937533847717e-08,
            "turnover_ratio": 0.002847391320363168,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 83.51254480286738,
            "rank_pca": 93,
            "adv": 1001222.0,
            "trades": 412.0,
            "volatility": 0.7861471796886961,
            "spread_pct": 0.01078778936930857,
            "spread_ticks": 1.3005940594059406,
            "amihud": 2.4264402938606222e-08,
            "turnover_ratio": 0.015527573142808056,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 50.89605734767025,
            "rank_pca": 275,
            "adv": 11470.0,
            "trades": 8.0,
            "volatility": 0.19051515633683241,
            "spread_pct": 0.012931310415466373,
            "spread_ticks": 2.3333333333333335,
            "amihud": 3.4530307250674056e-07,
            "turnover_ratio": 8.986992620925533e-05,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 32.61648745519714,
            "rank_pca": 377,
            "adv": 702.0,
            "trades": 1.0,
            "volatility": 0.31994546598532314,
            "spread_pct": 0.05018820577164361,
            "spread_ticks": 4.0,
            "amihud": 3.007620106301339e-08,
            "turnover_ratio": 3.2038334365442344e-05,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 42.473118279569896,
            "rank_pca": 322,
            "adv": 4400.0,
            "trades": 4.0,
            "volatility": 0.3739466158669742,
            "spread_pct": 0.031890660592255156,
            "spread_ticks": 1.4,
            "amihud": 1.875552777549505e-06,
            "turnover_ratio": 6.194348425161246e-05,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 3.942652329749104,
            "rank_pca": 535,
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
            "score_pca": 75.80645161290323,
            "rank_pca": 136,
            "adv": 280240.0,
            "trades": 151.0,
            "volatility": 0.5720805294512693,
            "spread_pct": 0.01241723480755252,
            "spread_ticks": 1.4317460317460318,
            "amihud": 8.798246150573749e-08,
            "turnover_ratio": 0.003492428291816107,
            "is_target": false
          },
          {
            "ticker": "QS9",
            "score_pca": 74.91039426523297,
            "rank_pca": 141,
            "adv": 259646.4,
            "trades": 125.0,
            "volatility": 1.1131957900382246,
            "spread_pct": 0.021860638430008714,
            "spread_ticks": 1.2207357859531773,
            "amihud": 1.3650382579272555e-07,
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
              "mean": 0.630604128897203,
              "median": 0.43883496951373335,
              "min": 0.0,
              "max": 7.056911505750941,
              "p5": 0.07859548974967459,
              "p95": 1.720522764366428,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3768970.391353043,
              "median": 14839.650000000001,
              "min": 0.0,
              "max": 370063498.47999996,
              "p5": 0.0,
              "p95": 14901902.39999998,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09781562227187468,
              "median": 0.02648114901256734,
              "min": 0.0002709146678517975,
              "max": 1.3868092691622103,
              "p5": 0.0036660020017562035,
              "p95": 0.48396516199168005,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.009183571732556791,
              "median": 0.0003484747137607535,
              "min": 0.0,
              "max": 3.7143233801331488,
              "p5": 0.0,
              "p95": 0.010554195017399357,
              "count": 552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.3397300173268224e-05,
              "median": 9.692497855223314e-08,
              "min": 0.0,
              "max": 0.0059715821812596145,
              "p5": 0.0,
              "p95": 4.85456221109381e-05,
              "count": 548
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 502.3817204301075,
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
              "mean": 0.34928278599428825,
              "median": 0.28378619970890395,
              "min": 0.0,
              "max": 0.7861471796886961,
              "p5": 0.06668030471789135,
              "p95": 0.7448778607051582,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2807440.125,
              "median": 7935.0,
              "min": 0.0,
              "max": 21035802.0,
              "p5": 0.0,
              "p95": 14023698.999999989,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1540901687404685,
              "median": 0.028850016734886928,
              "min": 0.0013263251226086567,
              "max": 0.6666666666666666,
              "p5": 0.004637837608953627,
              "p95": 0.5849256900212313,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0038960223855093994,
              "median": 7.59067052304339e-05,
              "min": 0.0,
              "max": 0.015527573142808056,
              "p5": 0.0,
              "p95": 0.014506199549452417,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00023614231507416105,
              "median": 5.027778820074528e-08,
              "min": 0.0,
              "max": 0.0018867924528301833,
              "p5": 1.371767980752788e-10,
              "p95": 0.0012270715378117606,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 642.375,
              "median": 6.0,
              "min": 0.0,
              "max": 4610.0,
              "p5": 0.0,
              "p95": 3140.699999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 194710.05,
              "median": 7935.0,
              "min": 0.0,
              "max": 1001222.0,
              "p5": 0.0,
              "p95": 748878.2999999996,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 87.625,
              "median": 6.0,
              "min": 0.0,
              "max": 412.0,
              "p5": 0.0,
              "p95": 320.64999999999986,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4454596042844481,
              "median": 0.34694604092614867,
              "min": 0.0,
              "max": 1.1131957900382246,
              "p5": 0.06668030471789135,
              "p95": 0.9987287764158894,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15498294064514773,
              "median": 0.026875649511131937,
              "min": 0.01078778936930857,
              "max": 0.6666666666666666,
              "p5": 0.011358095272693953,
              "p95": 0.5849256900212313,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.8358011513048105,
              "median": 1.4158730158730157,
              "min": 1.0,
              "max": 18.0,
              "p5": 1.077257525083612,
              "p95": 13.099999999999993,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00023616151694644244,
              "median": 1.1224314364923152e-07,
              "min": 0.0,
              "max": 0.0018867924528301833,
              "p5": 8.492541028512179e-09,
              "p95": 0.0012270715378117606,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005143136780512855,
              "median": 7.59067052304339e-05,
              "min": 0.0,
              "max": 0.021941241064652364,
              "p5": 0.0,
              "p95": 0.019696457292006853,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": -2.220446049250313e-16,
            "market": -0.014307707592330687,
            "sector": -0.061938397130716805,
            "peers": -0.057886749742838695,
            "vs_market": 0.014307707592330465,
            "vs_sector": 0.06193839713071658,
            "vs_peers": 0.05788674974283847
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Liquidity looks strong on the day, but 1D is only a snapshot. The reading points to good immediate access, though stability is better judged over longer windows.",
        "market_comparison": "Return 6.8% vs peers 0.0%."
      },
      "1w": {
        "liquidity": "1W score 71.9 vs peer median 53.0 (+18.8 pts).",
        "market_comparison": "The stock outperformed peers over the week, which can help keep attention in the name even as trading activity has dropped."
      },
      "2w": {
        "liquidity": "Liquidity appears solid over two weeks, though the recent slowdown means the trend is not fully stable. The broader read still points to accessible trading for the company’s size.",
        "market_comparison": "The stock held up better than peers over two weeks, which matters because relative resilience can help sustain participation."
      },
      "30d": {
        "liquidity": "Liquidity is strong over the month. The 1M score of 73.8 is 27.2 points above the peer median, which indicates the stock is more accessible than most peers of similar size.",
        "market_comparison": "Return -0.0% vs peers -5.8%."
      }
    }
  },
  "q02": {
    "driver_model": {
      "valid": true,
      "model_method": "ols_with_volatility_regimes",
      "estimation_window_days": 31,
      "reporting_window_days": 31,
      "available_history_days": 31,
      "n_regimes": 2,
      "current_regime": 1,
      "current_regime_label": "High Volatility",
      "current_regime_probability": 1.0,
      "current_driver_mix": {
        "market_share": {
          "median": 0.24618468175337416,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "24.6%",
          "display_range": null,
          "display_text": "24.6%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 31 trading days.",
          "kind": "share_pct",
          "value_pct": 24.6,
          "plain_english": "Market explains about 24.6% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.520786770700708,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "52.1%",
          "display_range": null,
          "display_text": "52.1%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 31 trading days.",
          "kind": "share_pct",
          "value_pct": 52.1,
          "plain_english": "Sector explains about 52.1% of price moves in the current state."
        },
        "company_share": {
          "median": 0.23302854754591792,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "23.3%",
          "display_range": null,
          "display_text": "23.3%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 31 trading days.",
          "kind": "share_pct",
          "value_pct": 23.3,
          "plain_english": "Company-specific explains about 23.3% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": -0.5299754824876348,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.53",
          "display_range": null,
          "display_text": "-0.53",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 31 trading days.",
          "kind": "beta",
          "strength_label": "Modest",
          "plain_english": "Modest market link: a 1% market move has lined up with about a 0.53% stock move in the opposite direction in this state.",
          "value_num": -0.53
        },
        "beta_stock_lag": {
          "median": 1.1957549498671622,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.20",
          "display_range": null,
          "display_text": "1.20",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 31 trading days.",
          "kind": "lag_beta",
          "value_num": 1.2
        },
        "beta_sector": {
          "median": 1.9066674051502015,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.91",
          "display_range": null,
          "display_text": "1.91",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 31 trading days.",
          "kind": "beta",
          "strength_label": "High",
          "plain_english": "High sector link: a 1% sector move has lined up with about a 1.91% stock move in the same direction in this state.",
          "value_num": 1.91
        },
        "beta_market_lag": {
          "median": 1.2579874321317774,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.26",
          "display_range": null,
          "display_text": "1.26",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 31 trading days.",
          "kind": "lag_beta",
          "value_num": 1.26
        },
        "beta_sector_lag": {
          "median": -1.039032831531463,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-1.04",
          "display_range": null,
          "display_text": "-1.04",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 31 trading days.",
          "kind": "lag_beta",
          "value_num": -1.04
        },
        "posterior_source": null,
        "intervals_collapsed": false,
        "confidence_label": "High, limited history",
        "confidence_note": "Based on 31 trading days relative to the 252-day target."
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
            "median": 0.47931948471963925,
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
              "median": 0.47931948471963925,
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
              "median": 0.2984396411024003,
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
              "median": 0.22224087417796046,
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
            "median": 0.5656898926629687,
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
              "median": 0.2647931795787311,
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
              "median": 0.1695169277583002,
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
              "median": 0.5656898926629687,
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
          "period_label": "2026-03-02 to 2026-03-11",
          "n_obs": 8,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.6472656571201779,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "64.7%",
            "display_range": null,
            "display_text": "64.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
            "kind": "share_pct",
            "value_pct": 64.7,
            "plain_english": "Market explains about 64.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.6472656571201779,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "64.7%",
              "display_range": null,
              "display_text": "64.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
              "kind": "share_pct",
              "value_pct": 64.7,
              "plain_english": "Market explains about 64.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1623640210980272,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "16.2%",
              "display_range": null,
              "display_text": "16.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
              "kind": "share_pct",
              "value_pct": 16.2,
              "plain_english": "Sector explains about 16.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.1903703217817949,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "19.0%",
              "display_range": null,
              "display_text": "19.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
              "kind": "share_pct",
              "value_pct": 19.0,
              "plain_english": "Company-specific explains about 19.0% of price moves in the current state."
            }
          },
          "summary": "Mar: Still clearly market-driven."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5172413793103449,
          "expected_duration_days": 3.0,
          "current_probability": 0.0,
          "n_days_effective": 15.0,
          "volatility": {
            "median": 0.03379138753496864,
            "low": 0.03379138753496864,
            "high": 0.03379138753496864
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": 0.0
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4827586206896552,
          "expected_duration_days": 2.8,
          "current_probability": 1.0,
          "n_days_effective": 14.0,
          "volatility": {
            "median": 0.04437036498551622,
            "low": 0.04437036498551622,
            "high": 0.04437036498551622
          },
          "volatility_label": "High Volatility",
          "current_probability_display": null
        }
      ],
      "transitions": {
        "mean": [
          [
            0.6666666666666666,
            0.3333333333333333
          ],
          [
            0.3076923076923077,
            0.6923076923076923
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            10.0,
            5.0
          ],
          [
            4.0,
            9.0
          ]
        ]
      },
      "methodology": {
        "estimation_window_days": 31,
        "reporting_window_days": 31,
        "current_mix_method": "ols_last_5d",
        "monthly_history_method": "ols_per_month",
        "regime_inference": "volatility_kmeans",
        "distribution": "gaussian",
        "history_limited": true,
        "current_driver_mix_basis": "ols_recent_window",
        "sector_proxy_equals_market": false
      },
      "client_read": {
        "market_link_display": "-0.53",
        "sector_link_display": "1.91",
        "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.53% stock move in the opposite direction in this state. This is a point estimate from 31 trading days.",
        "sector_link_explainer": "High sector link. A 1% sector move has lined up with about a 1.91% stock move in the same direction in this state. This is a point estimate from 31 trading days.",
        "stock_persistence_display": "1.20",
        "point_estimate_note": "Point estimate only because the current state has 31 trading days.",
        "history_limited_note": "Read is based on 31 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "High Volatility",
        "dominant_driver": "sector",
        "dominant_driver_label": "Sector",
        "driver_share_pct": 52.1,
        "driver_share_display": "52.1%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 31 trading days relative to the 252-day target.",
        "history_days": 31,
        "history_limited": true,
        "volatility_label": "High Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.6923076923076923,
        "effective_days": 14.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 2.8 days.",
        "expected_duration_days": 2.8
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
          "pct_time": 0.5172413793103449,
          "expected_duration_days": 3.0,
          "current_probability": 0.0,
          "n_days_effective": 15.0,
          "volatility": {
            "median": 0.03379138753496864,
            "low": 0.03379138753496864,
            "high": 0.03379138753496864
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4827586206896552,
          "expected_duration_days": 2.8,
          "current_probability": 1.0,
          "n_days_effective": 14.0,
          "volatility": {
            "median": 0.04437036498551622,
            "low": 0.04437036498551622,
            "high": 0.04437036498551622
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.6666666666666666,
          0.3333333333333333
        ],
        [
          0.3076923076923077,
          0.6923076923076923
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.6666666666666666,
            0.3333333333333333
          ],
          [
            0.3076923076923077,
            0.6923076923076923
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            10.0,
            5.0
          ],
          [
            4.0,
            9.0
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
        "text": "Liquidity score: 73.8 — Strong",
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
    "liq_subtitle": "Monthly liquidity still stands well ahead of peers, but the latest trading activity has pulled back from that stronger baseline.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent performance is mixed, with the stock flat over one month while peers and the market are down more.",
    "perf_insight": "The stock has held up better than peers and the market over one month, but trading activity has dropped. The one-month return is -0.0% compared with peers at -5.8% and the market at -1.4%, while one-week average volume is down 57.1% from the one-month average. That matters because relative price resilience is not being matched by stronger recent flow.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Sector moves are the main influence on the tape, which means broader market conditions still explain much of the trading.",
    "drivers_strip": [
      {
        "title": "Current Driver",
        "text": "Recent moves are mainly sector-driven, accounting for about 52.1% of current price changes. Other influences are market 24.6%, and company-specific 23.3%."
      },
      {
        "title": "Driver Mix",
        "text": "Current mix is market 24.6%, sector 52.1%, and company-specific 23.3%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has been mostly market-driven across Jan to Mar, with some variation in the middle months."
      }
    ],
    "drivers_pie_title": "Current Driver Mix",
    "drivers_pie_note": "Current split is market 24.6%, sector 52.1%, and company-specific 23.3%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "Sector factors are the clearest driver, with sector explaining 52.1% of the tape. That matters because the stock is still moving meaningfully with its group rather than on company-specific trading alone.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Sector factors are the main driver now, accounting for 52.1% of current price moves.",
      "The pattern has shifted over recent months, moving from mostly sector in February to clearly market-driven again in March."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "The market state looks broadly orderly, with balanced displayed depth and a one-tick spread, though recent activity is lighter.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on available history from Jan 22, 2026 to Mar 11, 2026 (33 trading days • 9,097 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on top 10 bid and top 10 ask levels.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate displayed depth broadly matches the stronger monthly liquidity read.",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "Displayed liquidity looks balanced, with top-10 bid depth at 1.09x ask depth and spread at 1 tick. That supports the stronger monthly liquidity read, although recent average volume has dropped.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 15.9% of total trades.",
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
    "intraday_insight": "History is limited.",
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
    "exec_subtitle": "Liquidity remains strong for the company’s size, but recent trading activity has dropped and near-term access looks less robust.",
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
        "value": "73.8/100",
        "sub": "Peer median 46.7 (+27.2 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "S$405.9K",
        "sub": "Peer median S$7.9K",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "2.58%",
        "sub": "1.19 ticks; peers 2.69%",
        "interp": {
          "text": "Tighter",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity remains strong for the stock’s size, but recent activity has dropped. The one-month liquidity score is 73.8 compared with a peer median of 46.7, which keeps the name screening well relative to peers. One-week average volume is down 57.1% from the one-month average, so immediate access may feel weaker than the monthly picture suggests.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "0.237",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "2.11%",
        "note": "1.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "1.09x",
        "note": "Bid depth / ask depth on displayed top-10 levels",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-2.67% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-7.67% with 59.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-7.67% with 23.6% fill.",
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
        "value": "74",
        "suffix": "/100",
        "bar_pct": 74,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Rank 147/558",
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
        "value": "2.58",
        "suffix": "%",
        "bar_pct": 26,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "2.58% • 1.19 ticks vs peers 2.69%",
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
        "value": "S$405.9K",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Peer median S$7.9K",
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
        "value": "52.1",
        "suffix": "sector",
        "bar_pct": 52,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 24.6% • Sector 52.1%",
        "interpretation": {
          "text": "Sector",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity remains strong for the company’s size, with a one-month score of 73.8 compared with a peer median of 46.7. That keeps the stock looking accessible relative to peers.",
      "Recent trading activity has dropped, with one-week average volume down 57.1% from the one-month",
      "The tape remains orderly, with top-10 bid depth at 1.09x ask depth and spread at 1 tick, while sector explains 52.1% of current trading. That means displayed liquidity is balanced, but broader market moves are still a meaningful influence."
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
      "overall": "1M liquidity is strong: score 73.8 vs peer median 46.7 (+27.2",
      "strengths": [
        "1M score 73.8 vs peer median 46.7 (+27.2 pts)."
      ],
      "concerns": [
        "1W average volume down -57.1% from 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: +27.2 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "1M return is -0.0%, better than market, sector, and peers, which suggests stronger price performance than comparable names.",
        "vs_market": "Better than market: -0.0% vs market -1.4%.",
        "vs_sector": "Better than sector: -0.0% vs sector -6.2%.",
        "vs_peers": "Better than peers: -0.0% vs peers -5.8%."
      },
      "adv": {
        "insight": "ADV is S$405.9K, better than market, sector, and peers, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: S$405.9K vs market S$14.8K.",
        "vs_sector": "Better than sector: S$405.9K vs sector S$7.9K.",
        "vs_peers": "Better than peers: S$405.9K vs peers S$7.9K."
      },
      "spread": {
        "insight": "Spread is 2.58%, better than sector, which keeps trading costs more competitive than comparable names.",
        "vs_market": "In line with market: 2.58% vs market 2.65%.",
        "vs_sector": "Better than sector: 2.58% vs secto%.",
        "vs_peers": "In line with peers: 2.58% vs peers 2.69%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.28%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.28% vs market 0.03%.",
        "vs_sector": "Better than sector: 0.28% vs sector 0.01%.",
        "vs_peers": "Better than peers: 0.28% vs peers 0.01%."
      },
      "volatility": {
        "insight": "Volatility is 66.82%, worse than market, sector, and peers, which suggests day-to-day price swings are heavier than comparable names.",
        "vs_market": "Worse than market: 66.82% vs market 43.88%.",
        "vs_sector": "Worse than sector: 66.82% vs secto%.",
        "vs_peers": "Worse than peers: 66.82% vs peers 34.69%."
      },
      "trades": {
        "insight": "Trades is 104, better than market, sector, and peers, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 104 vs market 7.",
        "vs_sector": "Better than sector: 104 vs sector 6.",
        "vs_peers": "Better than peers: 104 vs peers 6."
      },
      "amihud": {
        "insight": "Price impact is 7.05e-08, better than market and peers, but worse than sector, which shows price impact is mixed across comparison groups.",
        "vs_market": "Better than market: 7.05e-08 vs market 9.69e-08.",
        "vs_sector": "Worse than sector: 7.05e-08 vs sector 5.03e-08.",
        "vs_peers": "Better than peers: 7.05e-08 vs peers 1.12e-07."
      }
    },
    "performance": {
      "overall": "Returns are mixed, but the 1M picture shows relative resilience with the stock flat compared with peers down 5.8% and the market down",
      "conclusion": "The move looks mixed but more sector-linked than company-specific, with strong monthly liquidity offset by a sharp recent drop in average volume."
    },
    "drivers": {
      "overall": "Sector moves are the clearest driver now, with 52.1% of current price action explained by the sector. That matters because the stock is trading more with its group than on company-specific news, and the signal may be read with some caution because recent activity is thinner.",
      "beta": "The current pattern looks more tied to the broader group than to stock-specific factors, and recent price performance has not been providing much offset. The stock was flat over 1M while peers fell 5.8% and the market fell 1.4%, so the tape is being held more by external drivers than by strong standalone momentum.",
      "rolling_change": "The recent pattern is not fully settled, with January mostly market-driven on limited history, February mostly sector, and March clearly market-driven again. That matters because the stock's driver mix has changed month to month rather than holding a single stable pattern."
    },
    "regime": {
      "overall": "High volatility is the active backdrop, and that matters because price moves can be less predictable even when the stock still screens well for size on monthly liquidity. Evidence is mixed, with the state tending to persist for about 2.8 days while recent average volume is down 57.1% from the 1M average.",
      "current": "The stock is currently in a high-volatility state, with sector moves still explaining 52.1% of the tape, so trading conditions are being shaped more by broader market pressure than by a calm stock-specific backdrop.",
      "transitions": "This state looks moderately persistent rather than short-lived, with a typical run length of about 2.8 days, but the recent pullback in average volume means conditions can still change quickly.",
      "trading_implications": "Trading conditions look workable but less steady, because displayed depth is broadly balanced with top-10 bid depth at 1.09x ask depth and spread at 1 tick, while lower recent volume can make access feel thinner during volatile periods."
    },
    "execution": {
      "overall": "Displayed liquidity looks balanced right now because top-10 bid depth is 1.09x ask depth and the spread is 1 tick. That supports a view of orderly immediate access, even with mixed evidence from recent activity.",
      "concern": "The main watchpoint is that recent average volume has dropped 57.1% from the 1M average, so the book may be steadier than underlying trading activity. Trade-size context is also based on 33 trading days and 9,097 trades, which limits how far that history can anchor the read.",
      "peer_context": "The current book does not contradict the broader liquidity standing because the stock’s 1M score of 73.8 remains well above the peer median of 46.7. In that context, balanced displayed depth supports the stronger relative profile, but the recent pullback in volume means the picture is mixed rather than unequivocal."
    },
    "trader_composition": {
      "overall": "By trade count and value, flow looks mainly institution-like.",
      "retail_heavy": "Retail-like activity is present in trade count but much lighter in trade value. Retail-like trades make up 29.7% of count but only 7.8% of value, while institution-like trades lead on both measures, so the overall flow does not read as retail-heavy.",
      "institutional_gap": "The institution-like lead is clearer in trade value than in trade count. That gap matters because higher-value participation usually gives a steadier base for liquidity, although 18.7% unclear flow keeps the picture mixed.",
      "peer_comparison": "The mix appears more institution-like than retail-heavy, but the peer comparison is mixed. Peer trader mix comparison is available in the report tables."
    },
    "price_moving": {
      "overall": "Price-moving trades are a meaningful minority of activity at 15.9% of total trades. That points to some trades carrying information, but not enough to define the whole tape. The signal is mixed because 18.7% of trade count is unclear flow. That matters because the read on who is moving price is directionally useful but not fully clean. Price-moving direction looks mixed.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity looks low, and the clearest signal is significant covering month on month. That matters because the recent drop in average volume is more likely to reflect thinner trading activity than pressure from active short selling.",
      "level": "Low short interest",
      "correlation": "No clear relationship (correlation undefined)",
      "trend": "The short trend points lower, with shorts covering significantly at -100% month on month, although evidence is mixed. That suggests short positioning is becoming less relevant to the tape, while the broader picture is still shaped more by weaker recent volume and relative price underperformance.",
      "peaks": "0 notable peak days identified."
    },
    "intraday": {
      "overall": "Session split is open 1.4%, continuous 96.3%, and close 1.8%. Current trading concentration score is 0.218.",
      "hhi_interpretation": "Ambiguous or unclear flow is 18.7% of trade count, so the read is not fully clean.",
      "best_times": "The continuous session is the clearest source of liquidity. With 96.3% of trading taking place there, the best access appears during regular market hours rather than at the open or close.",
      "peer_ranking": "Intraday concentration looks orderly, but the peer ranking is mixed. Peer concentration score comparison is available in the report."
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
        73.83512544802868,
        83.51254480286738,
        50.89605734767025,
        32.61648745519714,
        42.473118279569896,
        3.942652329749104,
        2.867383512544803,
        75.80645161290323,
        74.91039426523297
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
        405925.0,
        1001222.0,
        11470.0,
        702.0,
        4400.0,
        0.0,
        0.0,
        280240.0,
        259646.4
      ],
      "total": 558
    },
    "market_comparison": {
      "sector_name": "Software - Application",
      "sector_count": 8,
      "market_count": 558,
      "company": {
        "volatility": 0.6682348397357307,
        "adv": 405925.0,
        "spread_pct": 0.0258093728775187,
        "turnover_ratio": 0.002847391320363168,
        "amihud": 7.047937533847717e-08,
        "trades": 104.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.630604128897203,
          "median": 0.43883496951373335,
          "min": 0.0,
          "max": 7.056911505750941,
          "p5": 0.07859548974967459,
          "p95": 1.720522764366428,
          "count": 558
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 3768970.391353043,
          "median": 14839.650000000001,
          "min": 0.0,
          "max": 370063498.47999996,
          "p5": 0.0,
          "p95": 14901902.39999998,
          "count": 558
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.09781562227187468,
          "median": 0.02648114901256734,
          "min": 0.0002709146678517975,
          "max": 1.3868092691622103,
          "p5": 0.0036660020017562035,
          "p95": 0.48396516199168005,
          "count": 557
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.009183571732556791,
          "median": 0.0003484747137607535,
          "min": 0.0,
          "max": 3.7143233801331488,
          "p5": 0.0,
          "p95": 0.010554195017399357,
          "count": 552
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 5.3397300173268224e-05,
          "median": 9.692497855223314e-08,
          "min": 0.0,
          "max": 0.0059715821812596145,
          "p5": 0.0,
          "p95": 4.85456221109381e-05,
          "count": 548
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 502.3817204301075,
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
          "mean": 0.34928278599428825,
          "median": 0.28378619970890395,
          "min": 0.0,
          "max": 0.7861471796886961,
          "p5": 0.06668030471789135,
          "p95": 0.7448778607051582,
          "count": 8
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 2807440.125,
          "median": 7935.0,
          "min": 0.0,
          "max": 21035802.0,
          "p5": 0.0,
          "p95": 14023698.999999989,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.1540901687404685,
          "median": 0.028850016734886928,
          "min": 0.0013263251226086567,
          "max": 0.6666666666666666,
          "p5": 0.004637837608953627,
          "p95": 0.5849256900212313,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0038960223855093994,
          "median": 7.59067052304339e-05,
          "min": 0.0,
          "max": 0.015527573142808056,
          "p5": 0.0,
          "p95": 0.014506199549452417,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 0.00023614231507416105,
          "median": 5.027778820074528e-08,
          "min": 0.0,
          "max": 0.0018867924528301833,
          "p5": 1.371767980752788e-10,
          "p95": 0.0012270715378117606,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 642.375,
          "median": 6.0,
          "min": 0.0,
          "max": 4610.0,
          "p5": 0.0,
          "p95": 3140.699999999998,
          "count": 8
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 194710.05,
          "median": 7935.0,
          "min": 0.0,
          "max": 1001222.0,
          "p5": 0.0,
          "p95": 748878.2999999996,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 87.625,
          "median": 6.0,
          "min": 0.0,
          "max": 412.0,
          "p5": 0.0,
          "p95": 320.64999999999986,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.4454596042844481,
          "median": 0.34694604092614867,
          "min": 0.0,
          "max": 1.1131957900382246,
          "p5": 0.06668030471789135,
          "p95": 0.9987287764158894,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.15498294064514773,
          "median": 0.026875649511131937,
          "min": 0.01078778936930857,
          "max": 0.6666666666666666,
          "p5": 0.011358095272693953,
          "p95": 0.5849256900212313,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 3.8358011513048105,
          "median": 1.4158730158730157,
          "min": 1.0,
          "max": 18.0,
          "p5": 1.077257525083612,
          "p95": 13.099999999999993,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 0.00023616151694644244,
          "median": 1.1224314364923152e-07,
          "min": 0.0,
          "max": 0.0018867924528301833,
          "p5": 8.492541028512179e-09,
          "p95": 0.0012270715378117606,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.005143136780512855,
          "median": 7.59067052304339e-05,
          "min": 0.0,
          "max": 0.021941241064652364,
          "p5": 0.0,
          "p95": 0.019696457292006853,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1W",
        "stock": 0.06818181818181812,
        "market": 0.01060933117110796,
        "sector": -0.023390186396307078,
        "peers": -0.03712757830404889
      },
      {
        "horizon": "2W",
        "stock": -0.06000000000000005,
        "market": -0.028739553138112273,
        "sector": -0.06295550297099661,
        "peers": -0.08142233952984945
      },
      {
        "horizon": "1M",
        "stock": -2.220446049250313e-16,
        "market": -0.014307707592330687,
        "sector": -0.061938397130716805,
        "peers": -0.057886749742838695
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
      "share_market": 0.24618468175337416,
      "share_sector": 0.520786770700708,
      "share_idio": 0.23302854754591792,
      "beta_market": -0.5299754824876348,
      "beta_sector": 1.9066674051502015,
      "driver_model": {
        "valid": true,
        "model_method": "ols_with_volatility_regimes",
        "estimation_window_days": 31,
        "reporting_window_days": 31,
        "available_history_days": 31,
        "n_regimes": 2,
        "current_regime": 1,
        "current_regime_label": "High Volatility",
        "current_regime_probability": 1.0,
        "current_driver_mix": {
          "market_share": {
            "median": 0.24618468175337416,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "24.6%",
            "display_range": null,
            "display_text": "24.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 31 trading days.",
            "kind": "share_pct",
            "value_pct": 24.6,
            "plain_english": "Market explains about 24.6% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.520786770700708,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "52.1%",
            "display_range": null,
            "display_text": "52.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 31 trading days.",
            "kind": "share_pct",
            "value_pct": 52.1,
            "plain_english": "Sector explains about 52.1% of price moves in the current state."
          },
          "company_share": {
            "median": 0.23302854754591792,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "23.3%",
            "display_range": null,
            "display_text": "23.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 31 trading days.",
            "kind": "share_pct",
            "value_pct": 23.3,
            "plain_english": "Company-specific explains about 23.3% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": -0.5299754824876348,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.53",
            "display_range": null,
            "display_text": "-0.53",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 31 trading days.",
            "kind": "beta",
            "strength_label": "Modest",
            "plain_english": "Modest market link: a 1% market move has lined up with about a 0.53% stock move in the opposite direction in this state.",
            "value_num": -0.53
          },
          "beta_stock_lag": {
            "median": 1.1957549498671622,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.20",
            "display_range": null,
            "display_text": "1.20",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 31 trading days.",
            "kind": "lag_beta",
            "value_num": 1.2
          },
          "beta_sector": {
            "median": 1.9066674051502015,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.91",
            "display_range": null,
            "display_text": "1.91",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 31 trading days.",
            "kind": "beta",
            "strength_label": "High",
            "plain_english": "High sector link: a 1% sector move has lined up with about a 1.91% stock move in the same direction in this state.",
            "value_num": 1.91
          },
          "beta_market_lag": {
            "median": 1.2579874321317774,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.26",
            "display_range": null,
            "display_text": "1.26",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 31 trading days.",
            "kind": "lag_beta",
            "value_num": 1.26
          },
          "beta_sector_lag": {
            "median": -1.039032831531463,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-1.04",
            "display_range": null,
            "display_text": "-1.04",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 31 trading days.",
            "kind": "lag_beta",
            "value_num": -1.04
          },
          "posterior_source": null,
          "intervals_collapsed": false,
          "confidence_label": "High, limited history",
          "confidence_note": "Based on 31 trading days relative to the 252-day target."
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
              "median": 0.47931948471963925,
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
                "median": 0.47931948471963925,
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
                "median": 0.2984396411024003,
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
                "median": 0.22224087417796046,
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
              "median": 0.5656898926629687,
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
                "median": 0.2647931795787311,
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
                "median": 0.1695169277583002,
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
                "median": 0.5656898926629687,
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
            "period_label": "2026-03-02 to 2026-03-11",
            "n_obs": 8,
            "partial_month": false,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.6472656571201779,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "64.7%",
              "display_range": null,
              "display_text": "64.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
              "kind": "share_pct",
              "value_pct": 64.7,
              "plain_english": "Market explains about 64.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.6472656571201779,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "64.7%",
                "display_range": null,
                "display_text": "64.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
                "kind": "share_pct",
                "value_pct": 64.7,
                "plain_english": "Market explains about 64.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1623640210980272,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "16.2%",
                "display_range": null,
                "display_text": "16.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
                "kind": "share_pct",
                "value_pct": 16.2,
                "plain_english": "Sector explains about 16.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.1903703217817949,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "19.0%",
                "display_range": null,
                "display_text": "19.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
                "kind": "share_pct",
                "value_pct": 19.0,
                "plain_english": "Company-specific explains about 19.0% of price moves in the current state."
              }
            },
            "summary": "Mar: Still clearly market-driven."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5172413793103449,
            "expected_duration_days": 3.0,
            "current_probability": 0.0,
            "n_days_effective": 15.0,
            "volatility": {
              "median": 0.03379138753496864,
              "low": 0.03379138753496864,
              "high": 0.03379138753496864
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": 0.0
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4827586206896552,
            "expected_duration_days": 2.8,
            "current_probability": 1.0,
            "n_days_effective": 14.0,
            "volatility": {
              "median": 0.04437036498551622,
              "low": 0.04437036498551622,
              "high": 0.04437036498551622
            },
            "volatility_label": "High Volatility",
            "current_probability_display": null
          }
        ],
        "transitions": {
          "mean": [
            [
              0.6666666666666666,
              0.3333333333333333
            ],
            [
              0.3076923076923077,
              0.6923076923076923
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              10.0,
              5.0
            ],
            [
              4.0,
              9.0
            ]
          ]
        },
        "methodology": {
          "estimation_window_days": 31,
          "reporting_window_days": 31,
          "current_mix_method": "ols_last_5d",
          "monthly_history_method": "ols_per_month",
          "regime_inference": "volatility_kmeans",
          "distribution": "gaussian",
          "history_limited": true,
          "current_driver_mix_basis": "ols_recent_window",
          "sector_proxy_equals_market": false
        },
        "client_read": {
          "market_link_display": "-0.53",
          "sector_link_display": "1.91",
          "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.53% stock move in the opposite direction in this state. This is a point estimate from 31 trading days.",
          "sector_link_explainer": "High sector link. A 1% sector move has lined up with about a 1.91% stock move in the same direction in this state. This is a point estimate from 31 trading days.",
          "stock_persistence_display": "1.20",
          "point_estimate_note": "Point estimate only because the current state has 31 trading days.",
          "history_limited_note": "Read is based on 31 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "High Volatility",
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "driver_share_pct": 52.1,
          "driver_share_display": "52.1%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 31 trading days relative to the 252-day target.",
          "history_days": 31,
          "history_limited": true,
          "volatility_label": "High Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.6923076923076923,
          "effective_days": 14.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 2.8 days.",
          "expected_duration_days": 2.8
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
          "share_market": 0.47931948471963925,
          "share_sector": 0.2984396411024003,
          "share_company": 0.22224087417796046,
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
          "share_market": 0.2647931795787311,
          "share_sector": 0.1695169277583002,
          "share_company": 0.5656898926629687,
          "share_market_display": "26.5%",
          "share_sector_display": "17.0%",
          "share_company_display": "56.6%",
          "dominant_share_display": "56.6%"
        },
        {
          "month_key": "2026-03",
          "month_label": "March 2026",
          "month_short_label": "Mar",
          "period_label": "2026-03-02 to 2026-03-11",
          "n_obs": 8,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Mar: Still clearly market-driven.",
          "share_market": 0.6472656571201779,
          "share_sector": 0.1623640210980272,
          "share_company": 0.1903703217817949,
          "share_market_display": "64.7%",
          "share_sector_display": "16.2%",
          "share_company_display": "19.0%",
          "dominant_share_display": "64.7%"
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
          0.5172413793103449,
          0.4827586206896552
        ],
        "current_regime": 1,
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5172413793103449,
            "expected_duration_days": 3.0,
            "current_probability": 0.0,
            "n_days_effective": 15.0,
            "volatility": {
              "median": 0.03379138753496864,
              "low": 0.03379138753496864,
              "high": 0.03379138753496864
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4827586206896552,
            "expected_duration_days": 2.8,
            "current_probability": 1.0,
            "n_days_effective": 14.0,
            "volatility": {
              "median": 0.04437036498551622,
              "low": 0.04437036498551622,
              "high": 0.04437036498551622
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.6666666666666666,
            0.3333333333333333
          ],
          [
            0.3076923076923077,
            0.6923076923076923
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 0.235,
          "quantity": 100100.0,
          "value": 23523.5
        },
        {
          "level": 2,
          "price": 0.23,
          "quantity": 419100.0,
          "value": 96393.0
        },
        {
          "level": 3,
          "price": 0.225,
          "quantity": 723500.0,
          "value": 162787.5
        },
        {
          "level": 4,
          "price": 0.22,
          "quantity": 349000.0,
          "value": 76780.0
        },
        {
          "level": 5,
          "price": 0.215,
          "quantity": 595000.0,
          "value": 127925.0
        },
        {
          "level": 6,
          "price": 0.21,
          "quantity": 246800.0,
          "value": 51828.0
        },
        {
          "level": 7,
          "price": 0.205,
          "quantity": 60000.0,
          "value": 12300.0
        },
        {
          "level": 8,
          "price": 0.2,
          "quantity": 135100.0,
          "value": 27020.0
        },
        {
          "level": 9,
          "price": 0.199,
          "quantity": 10000.0,
          "value": 1990.0
        },
        {
          "level": 10,
          "price": 0.18,
          "quantity": 50000.0,
          "value": 9000.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.24,
          "quantity": 284200.0,
          "value": 68208.0
        },
        {
          "level": 2,
          "price": 0.245,
          "quantity": 52000.0,
          "value": 12740.0
        },
        {
          "level": 3,
          "price": 0.25,
          "quantity": 90000.0,
          "value": 22500.0
        },
        {
          "level": 4,
          "price": 0.255,
          "quantity": 105000.0,
          "value": 26775.0
        },
        {
          "level": 5,
          "price": 0.26,
          "quantity": 188800.0,
          "value": 49088.0
        },
        {
          "level": 6,
          "price": 0.265,
          "quantity": 497500.0,
          "value": 131837.5
        },
        {
          "level": 7,
          "price": 0.27,
          "quantity": 165000.0,
          "value": 44550.0
        },
        {
          "level": 8,
          "price": 0.275,
          "quantity": 214000.0,
          "value": 58850.00000000001
        },
        {
          "level": 9,
          "price": 0.28,
          "quantity": 306000.0,
          "value": 85680.00000000001
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
        "snapshot_time": "2026-03-11 08:59:57.338500",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 0.2375,
        "spread_pct": 0.02105263157894739,
        "spread_ticks": 1.0,
        "tick_size": 0.005,
        "bid_depth_notional_top10": 589547.0,
        "ask_depth_notional_top10": 541268.5,
        "bid_ask_depth_ratio": 1.0892
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 49,
        "history_limited": true,
        "trade_days_used": 33,
        "n_trades_used": 9097,
        "first_trade_date": "2026-01-22",
        "last_trade_date": "2026-03-11",
        "window_label": "Jan 22, 2026 to Mar 11, 2026",
        "window_short_label": "Jan 22-Mar 11",
        "trade_days_label": "33 trading days",
        "trade_count_label": "9,097 trades",
        "window_detail_label": "33 trading days • 9,097 trades",
        "history_note": "Trade-size percentiles use available history from Jan 22, 2026 to Mar 11, 2026 (33 trading days • 9,097 trades), not a full year.",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 9847.8,
            "impact_pct": -0.010526,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 1.67,
            "pct_of_adv": 2.54
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 13750.0,
            "impact_pct": -0.010526,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 2.33,
            "pct_of_adv": 3.54
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 109998.59,
            "impact_pct": -0.027152,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 18.66,
            "pct_of_adv": 28.36
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-03-11",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "8117432114348421120",
            "timestamp": "2026-03-10 22:59:02.379500000",
            "local_timestamp": "2026-03-11 06:59:02",
            "posted_price": 0.3,
            "size_shares": 200000.0,
            "notional": 60000.0,
            "impact_pct": -0.023433000000000002,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 10.18,
            "price_vs_mid_pct": 26.316,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "8119594029086503936",
            "timestamp": "2026-03-10 22:59:02.379500000",
            "local_timestamp": "2026-03-11 06:59:02",
            "posted_price": 0.28,
            "size_shares": 200000.0,
            "notional": 56000.0,
            "impact_pct": -0.022846,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 9.5,
            "price_vs_mid_pct": 17.895,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "8116823259784643584",
            "timestamp": "2026-03-10 22:59:02.322300000",
            "local_timestamp": "2026-03-11 06:59:02",
            "posted_price": 0.265,
            "size_shares": 200000.0,
            "notional": 53000.0,
            "impact_pct": -0.022347000000000002,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 8.99,
            "price_vs_mid_pct": 11.579,
            "executed_event_count": 0,
            "event_count": 1
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-03-11",
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
            "spread_pct": 0.02247191011235957,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 227065.0,
            "ask_depth_notional": 527334.0,
            "mid_price": 0.2225
          },
          {
            "bucket": "09:30",
            "spread_pct": 0.02247191011235957,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 258661.5,
            "ask_depth_notional": 495811.5,
            "mid_price": 0.2225
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.02247191011235957,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 277572.0,
            "ask_depth_notional": 501344.5,
            "mid_price": 0.2225
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.02247191011235957,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 337150.5,
            "ask_depth_notional": 494594.5,
            "mid_price": 0.2225
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 340127.0,
            "ask_depth_notional": 498213.0,
            "mid_price": 0.2275
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 351377.0,
            "ask_depth_notional": 488438.0,
            "mid_price": 0.2275
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 377989.5,
            "ask_depth_notional": 510469.0,
            "mid_price": 0.2275
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.021505376344085923,
            "spread_ticks": 0.9999999999999953,
            "bid_depth_notional": 588253.5,
            "ask_depth_notional": 455969.5,
            "mid_price": 0.23249999999999998
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.021505376344085923,
            "spread_ticks": 0.9999999999999953,
            "bid_depth_notional": 581203.5,
            "ask_depth_notional": 448384.5,
            "mid_price": 0.23249999999999998
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.021505376344085923,
            "spread_ticks": 0.9999999999999953,
            "bid_depth_notional": 595407.5,
            "ask_depth_notional": 471030.5,
            "mid_price": 0.23249999999999998
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.042553191489361625,
            "spread_ticks": 1.9999999999999962,
            "bid_depth_notional": 580351.0,
            "ask_depth_notional": 512856.5,
            "mid_price": 0.235
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.021505376344085923,
            "spread_ticks": 0.9999999999999953,
            "bid_depth_notional": 592949.5,
            "ask_depth_notional": 489030.5,
            "mid_price": 0.23249999999999998
          },
          {
            "bucket": "16:00",
            "spread_pct": 0.042553191489361625,
            "spread_ticks": 1.9999999999999962,
            "bid_depth_notional": 645229.0,
            "ask_depth_notional": 563412.5,
            "mid_price": 0.235
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 589547.0,
            "ask_depth_notional": 541268.5,
            "mid_price": 0.2375
          }
        ],
        "summary": {
          "median_spread_pct": 0.021978021978021997,
          "median_spread_ticks": 1.0000000000000009,
          "median_bid_depth_notional": 479170.25,
          "median_ask_depth_notional": 497012.25,
          "tightest_bucket": "16:30",
          "widest_bucket": "15:00",
          "deepest_bid_bucket": "16:00",
          "thinnest_bid_bucket": "09:00"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 12.9,
      "peers": [
        {
          "ticker": "ITS",
          "pct": 98.3
        },
        {
          "ticker": "QS9",
          "pct": 314.7
        },
        {
          "ticker": "9MT",
          "pct": 359.0
        },
        {
          "ticker": "LVR",
          "pct": 6801.6
        },
        {
          "ticker": "U77",
          "pct": 16924.1
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
          "n_trades": 59,
          "n_runs": 25,
          "n_trade_days": 1,
          "first_trade_date": "2026-03-11",
          "last_trade_date": "2026-03-11",
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
            "retail_pct": 0.2033898305084746,
            "mixed_pct": 0.0847457627118644,
            "instit_pct": 0.2542372881355932,
            "ambiguous_pct": 0.4576271186440678,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.4576271186440678,
            "retail_qty_pct": 0.015881349258432865,
            "mixed_qty_pct": 0.09830686441790261,
            "instit_qty_pct": 0.22338889618060112,
            "ambiguous_qty_pct": 0.6624228901430634,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.6624228901430634,
            "retail_notional_pct": 0.015966408261317552,
            "mixed_notional_pct": 0.09673123451935745,
            "instit_notional_pct": 0.228495001707714,
            "ambiguous_notional_pct": 0.6588073555116111,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.6588073555116111
          },
          "run_composition": {
            "retail_pct": 0.44,
            "mixed_pct": 0.16,
            "instit_pct": 0.08,
            "ambiguous_pct": 0.32,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.32,
            "retail_notional_pct": 0.015966408261317552,
            "mixed_notional_pct": 0.09673123451935745,
            "instit_notional_pct": 0.228495001707714,
            "unclear_notional_pct": 0.6588073555116111
          },
          "counts": {
            "trades": {
              "retail": 12,
              "mixed": 5,
              "institutional": 15,
              "ambiguous": 27,
              "unobservable": 0,
              "unclear": 27
            },
            "runs": {
              "retail": 11,
              "mixed": 4,
              "institutional": 2,
              "ambiguous": 8,
              "unobservable": 0,
              "unclear": 8
            }
          },
          "confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.52,
            "na": 0.48
          },
          "confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 13,
            "na": 12
          },
          "trade_confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.4576271186440678,
            "na": 0.5423728813559322
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 27,
            "na": 32
          },
          "observability": {
            "avg_feature_coverage": 0.8320000000000002,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.32,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.44,
          "dominance_gap": 0.12,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 40,
              "SINGLE_FILL": 19
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 47,
              "MOMENTUM_REACTIVE": 6,
              "PERSISTENT_POSITIVE_IMPACT": 6
            },
            "d3_urgency": {
              "IMMEDIATE": 25
            },
            "participant_confidence": {
              "LOW": 13,
              "NA": 12
            }
          },
          "trade_size": {
            "avg": 2952.7033898305085,
            "median": 1125.0
          },
          "run_size": {
            "avg": 6968.38,
            "median": 1480.5,
            "avg_length": 1.16
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-60",
              "timestamp": "2026-03-11T08:56:06.731600",
              "price": 0.235,
              "size": 1000.0,
              "notional": 235.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3618,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-59",
              "timestamp": "2026-03-11T08:53:29.285300",
              "price": 0.235,
              "size": 19900.0,
              "notional": 4676.5,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3617,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-58",
              "timestamp": "2026-03-11T08:01:33.932700",
              "price": 0.24,
              "size": 100.0,
              "notional": 24.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3616,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-57",
              "timestamp": "2026-03-11T08:00:00.037600",
              "price": 0.235,
              "size": 2100.0,
              "notional": 493.5,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3615,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-56",
              "timestamp": "2026-03-11T07:49:46.829000",
              "price": 0.235,
              "size": 900.0,
              "notional": 211.5,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3614,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-55",
              "timestamp": "2026-03-11T07:08:39.980200",
              "price": 0.235,
              "size": 3900.0,
              "notional": 916.5,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3613,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-54",
              "timestamp": "2026-03-11T07:08:39.980200",
              "price": 0.235,
              "size": 2400.0,
              "notional": 564.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3613,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-53",
              "timestamp": "2026-03-11T07:08:13.496900",
              "price": 0.235,
              "size": 500.0,
              "notional": 117.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3612,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-52",
              "timestamp": "2026-03-11T07:08:13.496800",
              "price": 0.235,
              "size": 600.0,
              "notional": 141.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3612,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-51",
              "timestamp": "2026-03-11T07:08:13.496800",
              "price": 0.235,
              "size": 8900.0,
              "notional": 2091.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3612,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-50",
              "timestamp": "2026-03-11T07:08:13.496800",
              "price": 0.235,
              "size": 50000.0,
              "notional": 11750.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3612,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-49",
              "timestamp": "2026-03-11T07:08:13.496800",
              "price": 0.235,
              "size": 10000.0,
              "notional": 2350.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3612,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-48",
              "timestamp": "2026-03-11T07:08:13.496700",
              "price": 0.235,
              "size": 5000.0,
              "notional": 1175.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3612,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-47",
              "timestamp": "2026-03-11T07:08:13.496700",
              "price": 0.235,
              "size": 2500.0,
              "notional": 587.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3612,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-46",
              "timestamp": "2026-03-11T07:08:13.496700",
              "price": 0.235,
              "size": 30000.0,
              "notional": 7050.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3612,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-45",
              "timestamp": "2026-03-11T07:08:13.496700",
              "price": 0.235,
              "size": 30000.0,
              "notional": 7050.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3612,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-44",
              "timestamp": "2026-03-11T07:08:13.496700",
              "price": 0.235,
              "size": 13600.0,
              "notional": 3196.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3612,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-43",
              "timestamp": "2026-03-11T05:34:43.748600",
              "price": 0.23,
              "size": 1900.0,
              "notional": 437.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3611,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-42",
              "timestamp": "2026-03-11T05:34:34.682900",
              "price": 0.23,
              "size": 28100.0,
              "notional": 6463.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3610,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-41",
              "timestamp": "2026-03-11T05:34:19.703700",
              "price": 0.23,
              "size": 600.0,
              "notional": 138.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3609,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-40",
              "timestamp": "2026-03-11T05:34:19.703600",
              "price": 0.23,
              "size": 9000.0,
              "notional": 2070.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3609,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-39",
              "timestamp": "2026-03-11T05:33:11.090100",
              "price": 0.23,
              "size": 27000.0,
              "notional": 6210.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3608,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-38",
              "timestamp": "2026-03-11T05:33:11.090100",
              "price": 0.23,
              "size": 10000.0,
              "notional": 2300.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3608,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-37",
              "timestamp": "2026-03-11T05:33:11.090100",
              "price": 0.23,
              "size": 40000.0,
              "notional": 9200.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3608,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-36",
              "timestamp": "2026-03-11T05:33:11.090100",
              "price": 0.23,
              "size": 20000.0,
              "notional": 4600.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3608,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-35",
              "timestamp": "2026-03-11T05:33:11.090100",
              "price": 0.23,
              "size": 14600.0,
              "notional": 3358.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3608,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-34",
              "timestamp": "2026-03-11T05:33:11.090100",
              "price": 0.23,
              "size": 20000.0,
              "notional": 4600.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3608,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-33",
              "timestamp": "2026-03-11T05:33:11.090000",
              "price": 0.23,
              "size": 26700.0,
              "notional": 6141.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3608,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-32",
              "timestamp": "2026-03-11T05:33:11.090000",
              "price": 0.23,
              "size": 32100.0,
              "notional": 7383.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3608,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-31",
              "timestamp": "2026-03-11T05:01:45.759500",
              "price": 0.23,
              "size": 2300.0,
              "notional": 529.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3607,
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
              "retail_pct": 0.2033898305084746,
              "mixed_pct": 0.0847457627118644,
              "instit_pct": 0.2542372881355932,
              "ambiguous_pct": 0.4576271186440678,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.4576271186440678,
              "retail_qty_pct": 0.015881349258432865,
              "mixed_qty_pct": 0.09830686441790261,
              "instit_qty_pct": 0.22338889618060112,
              "ambiguous_qty_pct": 0.6624228901430634,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.6624228901430634,
              "retail_notional_pct": 0.015966408261317552,
              "mixed_notional_pct": 0.09673123451935745,
              "instit_notional_pct": 0.228495001707714,
              "ambiguous_notional_pct": 0.6588073555116111,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.6588073555116111,
              "run_retail_pct": 0.44,
              "run_mixed_pct": 0.16,
              "run_instit_pct": 0.08,
              "run_unclear_pct": 0.32,
              "avg_trade_size": 2952.7033898305085,
              "avg_run_notional": 6968.38,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.52,
              "na_confidence_pct": 0.48,
              "avg_feature_coverage": 0.8320000000000002,
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
              "retail_pct": 0.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.8333333333333334,
              "ambiguous_pct": 0.16666666666666666,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.16666666666666666,
              "retail_qty_pct": 0.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.9259259259259259,
              "ambiguous_qty_pct": 0.07407407407407407,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.07407407407407407,
              "retail_notional_pct": 0.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.9262672811059908,
              "ambiguous_notional_pct": 0.07373271889400922,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.07373271889400922,
              "run_retail_pct": 0.0,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.6666666666666666,
              "run_unclear_pct": 0.3333333333333333,
              "avg_trade_size": 1808.3333333333333,
              "avg_run_notional": 3616.6666666666665,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Institution-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.6666666666666666,
              "na_confidence_pct": 0.3333333333333333,
              "avg_feature_coverage": 0.8000000000000002,
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
              "retail_pct": 0.2,
              "mixed_pct": 0.0,
              "instit_pct": 0.6,
              "ambiguous_pct": 0.2,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.2,
              "retail_qty_pct": 0.009009009009009009,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.8108108108108109,
              "ambiguous_qty_pct": 0.18018018018018017,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.18018018018018017,
              "retail_notional_pct": 0.009117372439171748,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.8107321359916516,
              "ambiguous_notional_pct": 0.1801504915691767,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.1801504915691767,
              "run_retail_pct": 0.25,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.5,
              "run_unclear_pct": 0.25,
              "avg_trade_size": 1820.7,
              "avg_run_notional": 2275.875,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Institution-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.75,
              "na_confidence_pct": 0.25,
              "avg_feature_coverage": 0.8500000000000001,
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
              "retail_pct": 0.28368794326241137,
              "mixed_pct": 0.02127659574468085,
              "instit_pct": 0.3829787234042553,
              "ambiguous_pct": 0.3120567375886525,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.3120567375886525,
              "retail_qty_pct": 0.05475504322766571,
              "mixed_qty_pct": 0.01585014409221902,
              "instit_qty_pct": 0.5561959654178674,
              "ambiguous_qty_pct": 0.37319884726224783,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.37319884726224783,
              "retail_notional_pct": 0.05506073454933853,
              "mixed_notional_pct": 0.015878079290038385,
              "instit_notional_pct": 0.5561395837290906,
              "ambiguous_notional_pct": 0.3729216024315325,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.3729216024315325,
              "run_retail_pct": 0.48717948717948717,
              "run_mixed_pct": 0.038461538461538464,
              "run_instit_pct": 0.20512820512820512,
              "run_unclear_pct": 0.2692307692307692,
              "avg_trade_size": 1978.7304964539007,
              "avg_run_notional": 3576.9358974358975,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.32051282051282054,
              "low_confidence_pct": 0.3717948717948718,
              "na_confidence_pct": 0.3076923076923077,
              "avg_feature_coverage": 0.8403846153846154,
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
              "retail_pct": 0.21714285714285714,
              "mixed_pct": 0.08571428571428572,
              "instit_pct": 0.38857142857142857,
              "ambiguous_pct": 0.30857142857142855,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.30857142857142855,
              "retail_qty_pct": 0.08858479974210473,
              "mixed_qty_pct": 0.08892940117164486,
              "instit_qty_pct": 0.4980824597872364,
              "ambiguous_qty_pct": 0.324403339299014,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.324403339299014,
              "retail_notional_pct": 0.08859035409580666,
              "mixed_notional_pct": 0.08950736775723271,
              "instit_notional_pct": 0.4980809309698211,
              "ambiguous_notional_pct": 0.3238213471771395,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.3238213471771395,
              "run_retail_pct": 0.375,
              "run_mixed_pct": 0.1,
              "run_instit_pct": 0.2125,
              "run_unclear_pct": 0.3125,
              "avg_trade_size": 2943.093714285714,
              "avg_run_notional": 6438.0175,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.3125,
              "low_confidence_pct": 0.275,
              "na_confidence_pct": 0.4125,
              "avg_feature_coverage": 0.840625,
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
              "retail_pct": 0.2876712328767123,
              "mixed_pct": 0.4178082191780822,
              "instit_pct": 0.1872146118721461,
              "ambiguous_pct": 0.10730593607305935,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.10730593607305935,
              "retail_qty_pct": 0.08386327503974562,
              "mixed_qty_pct": 0.356120826709062,
              "instit_qty_pct": 0.29411764705882354,
              "ambiguous_qty_pct": 0.2658982511923688,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.2658982511923688,
              "retail_notional_pct": 0.08404872956144897,
              "mixed_notional_pct": 0.35633867345635895,
              "instit_notional_pct": 0.29388326836559187,
              "ambiguous_notional_pct": 0.2657293286166002,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.2657293286166002,
              "run_retail_pct": 0.56,
              "run_mixed_pct": 0.3244444444444444,
              "run_instit_pct": 0.05333333333333334,
              "run_unclear_pct": 0.06222222222222222,
              "avg_trade_size": 607.9589041095891,
              "avg_run_notional": 1183.4933333333333,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.49333333333333335,
              "low_confidence_pct": 0.12,
              "na_confidence_pct": 0.38666666666666666,
              "avg_feature_coverage": 0.9026666666666665,
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
              "run_unclear_pct": 0.0,
              "avg_trade_size": 240.00000000000003,
              "avg_run_notional": null,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.0,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": null,
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
          "n_trades": 381,
          "n_runs": 220,
          "n_trade_days": 5,
          "first_trade_date": "2026-03-05",
          "last_trade_date": "2026-03-11",
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
            "retail_pct": 0.3464566929133858,
            "mixed_pct": 0.14698162729658792,
            "instit_pct": 0.2887139107611549,
            "ambiguous_pct": 0.2178477690288714,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.2178477690288714,
            "retail_qty_pct": 0.06751577193191287,
            "mixed_qty_pct": 0.15752886561123675,
            "instit_qty_pct": 0.4139745268420426,
            "ambiguous_qty_pct": 0.36098083561480776,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.36098083561480776,
            "retail_notional_pct": 0.06725656128240445,
            "mixed_notional_pct": 0.15620005680995996,
            "instit_notional_pct": 0.41831853237363803,
            "ambiguous_notional_pct": 0.3582248495339975,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.3582248495339975
          },
          "run_composition": {
            "retail_pct": 0.5727272727272728,
            "mixed_pct": 0.15,
            "instit_pct": 0.15,
            "ambiguous_pct": 0.12727272727272726,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.12727272727272726,
            "retail_notional_pct": 0.06725656128240445,
            "mixed_notional_pct": 0.15620005680995996,
            "instit_notional_pct": 0.41831853237363803,
            "unclear_notional_pct": 0.3582248495339975
          },
          "counts": {
            "trades": {
              "retail": 132,
              "mixed": 56,
              "institutional": 110,
              "ambiguous": 83,
              "unobservable": 0,
              "unclear": 83
            },
            "runs": {
              "retail": 126,
              "mixed": 33,
              "institutional": 33,
              "ambiguous": 28,
              "unobservable": 0,
              "unclear": 28
            }
          },
          "confidence": {
            "high": 0.12272727272727273,
            "medium": 0.30454545454545456,
            "low": 0.29545454545454547,
            "na": 0.2772727272727273
          },
          "confidence_counts": {
            "high": 27,
            "medium": 67,
            "low": 65,
            "na": 61
          },
          "trade_confidence": {
            "high": 0.07086614173228346,
            "medium": 0.2335958005249344,
            "low": 0.33070866141732286,
            "na": 0.3648293963254593
          },
          "trade_confidence_counts": {
            "high": 27,
            "medium": 89,
            "low": 126,
            "na": 139
          },
          "observability": {
            "avg_feature_coverage": 0.8513636363636362,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.12727272727272726,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5727272727272728,
          "dominance_gap": 0.42272727272727273,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 194,
              "SINGLE_FILL": 185,
              "WALK_BOOK": 2
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 298,
              "PERSISTENT_POSITIVE_IMPACT": 50,
              "MOMENTUM_REACTIVE": 33
            },
            "d3_urgency": {
              "IMMEDIATE": 220
            },
            "participant_confidence": {
              "MEDIUM": 67,
              "LOW": 65,
              "NA": 61,
              "HIGH": 27
            }
          },
          "trade_size": {
            "avg": 2448.6482939632547,
            "median": 990.0
          },
          "run_size": {
            "avg": 4240.613636363636,
            "median": 1087.5,
            "avg_length": 1.1272727272727272
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-60",
              "timestamp": "2026-03-11T08:56:06.731600",
              "price": 0.235,
              "size": 1000.0,
              "notional": 235.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3618,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-59",
              "timestamp": "2026-03-11T08:53:29.285300",
              "price": 0.235,
              "size": 19900.0,
              "notional": 4676.5,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3617,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-58",
              "timestamp": "2026-03-11T08:01:33.932700",
              "price": 0.24,
              "size": 100.0,
              "notional": 24.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3616,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-57",
              "timestamp": "2026-03-11T08:00:00.037600",
              "price": 0.235,
              "size": 2100.0,
              "notional": 493.5,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3615,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-56",
              "timestamp": "2026-03-11T07:49:46.829000",
              "price": 0.235,
              "size": 900.0,
              "notional": 211.5,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3614,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-55",
              "timestamp": "2026-03-11T07:08:39.980200",
              "price": 0.235,
              "size": 3900.0,
              "notional": 916.5,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3613,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-54",
              "timestamp": "2026-03-11T07:08:39.980200",
              "price": 0.235,
              "size": 2400.0,
              "notional": 564.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3613,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-53",
              "timestamp": "2026-03-11T07:08:13.496900",
              "price": 0.235,
              "size": 500.0,
              "notional": 117.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3612,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-52",
              "timestamp": "2026-03-11T07:08:13.496800",
              "price": 0.235,
              "size": 600.0,
              "notional": 141.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3612,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-51",
              "timestamp": "2026-03-11T07:08:13.496800",
              "price": 0.235,
              "size": 8900.0,
              "notional": 2091.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3612,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-50",
              "timestamp": "2026-03-11T07:08:13.496800",
              "price": 0.235,
              "size": 50000.0,
              "notional": 11750.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3612,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-49",
              "timestamp": "2026-03-11T07:08:13.496800",
              "price": 0.235,
              "size": 10000.0,
              "notional": 2350.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3612,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-48",
              "timestamp": "2026-03-11T07:08:13.496700",
              "price": 0.235,
              "size": 5000.0,
              "notional": 1175.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3612,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-47",
              "timestamp": "2026-03-11T07:08:13.496700",
              "price": 0.235,
              "size": 2500.0,
              "notional": 587.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3612,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-46",
              "timestamp": "2026-03-11T07:08:13.496700",
              "price": 0.235,
              "size": 30000.0,
              "notional": 7050.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3612,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-45",
              "timestamp": "2026-03-11T07:08:13.496700",
              "price": 0.235,
              "size": 30000.0,
              "notional": 7050.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3612,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-44",
              "timestamp": "2026-03-11T07:08:13.496700",
              "price": 0.235,
              "size": 13600.0,
              "notional": 3196.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3612,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-43",
              "timestamp": "2026-03-11T05:34:43.748600",
              "price": 0.23,
              "size": 1900.0,
              "notional": 437.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3611,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-42",
              "timestamp": "2026-03-11T05:34:34.682900",
              "price": 0.23,
              "size": 28100.0,
              "notional": 6463.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3610,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-41",
              "timestamp": "2026-03-11T05:34:19.703700",
              "price": 0.23,
              "size": 600.0,
              "notional": 138.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3609,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-40",
              "timestamp": "2026-03-11T05:34:19.703600",
              "price": 0.23,
              "size": 9000.0,
              "notional": 2070.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3609,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-39",
              "timestamp": "2026-03-11T05:33:11.090100",
              "price": 0.23,
              "size": 27000.0,
              "notional": 6210.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3608,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-38",
              "timestamp": "2026-03-11T05:33:11.090100",
              "price": 0.23,
              "size": 10000.0,
              "notional": 2300.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3608,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-37",
              "timestamp": "2026-03-11T05:33:11.090100",
              "price": 0.23,
              "size": 40000.0,
              "notional": 9200.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3608,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-36",
              "timestamp": "2026-03-11T05:33:11.090100",
              "price": 0.23,
              "size": 20000.0,
              "notional": 4600.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3608,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-35",
              "timestamp": "2026-03-11T05:33:11.090100",
              "price": 0.23,
              "size": 14600.0,
              "notional": 3358.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3608,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-34",
              "timestamp": "2026-03-11T05:33:11.090100",
              "price": 0.23,
              "size": 20000.0,
              "notional": 4600.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3608,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-33",
              "timestamp": "2026-03-11T05:33:11.090000",
              "price": 0.23,
              "size": 26700.0,
              "notional": 6141.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3608,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-32",
              "timestamp": "2026-03-11T05:33:11.090000",
              "price": 0.23,
              "size": 32100.0,
              "notional": 7383.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3608,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-31",
              "timestamp": "2026-03-11T05:01:45.759500",
              "price": 0.23,
              "size": 2300.0,
              "notional": 529.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3607,
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
              "retail_pct": 0.3464566929133858,
              "mixed_pct": 0.14698162729658792,
              "instit_pct": 0.2887139107611549,
              "ambiguous_pct": 0.2178477690288714,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.2178477690288714,
              "retail_qty_pct": 0.06751577193191287,
              "mixed_qty_pct": 0.15752886561123675,
              "instit_qty_pct": 0.4139745268420426,
              "ambiguous_qty_pct": 0.36098083561480776,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.36098083561480776,
              "retail_notional_pct": 0.06725656128240445,
              "mixed_notional_pct": 0.15620005680995996,
              "instit_notional_pct": 0.41831853237363803,
              "ambiguous_notional_pct": 0.3582248495339975,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.3582248495339975,
              "run_retail_pct": 0.5727272727272728,
              "run_mixed_pct": 0.15,
              "run_instit_pct": 0.15,
              "run_unclear_pct": 0.12727272727272726,
              "avg_trade_size": 2448.6482939632547,
              "avg_run_notional": 4240.613636363636,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.12272727272727273,
              "medium_confidence_pct": 0.30454545454545456,
              "low_confidence_pct": 0.29545454545454547,
              "na_confidence_pct": 0.2772727272727273,
              "avg_feature_coverage": 0.8513636363636362,
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
              "retail_pct": 0.36688902365069737,
              "mixed_pct": 0.23347483323226198,
              "instit_pct": 0.265009096422074,
              "ambiguous_pct": 0.12856276531231048,
              "unobservable_pct": 0.006064281382656155,
              "unclear_pct": 0.13462704669496664,
              "retail_qty_pct": 0.07315396250630242,
              "mixed_qty_pct": 0.19956914332859696,
              "instit_qty_pct": 0.5375624512994454,
              "ambiguous_qty_pct": 0.17330522069945456,
              "unobservable_qty_pct": 0.01640922216620067,
              "unclear_qty_pct": 0.18971444286565523,
              "retail_notional_pct": 0.07323815709468194,
              "mixed_notional_pct": 0.20045828936284776,
              "instit_notional_pct": 0.5364841399722095,
              "ambiguous_notional_pct": 0.17377295892042158,
              "unobservable_notional_pct": 0.016046454649839306,
              "unclear_notional_pct": 0.1898194135702609,
              "run_retail_pct": 0.6790540540540541,
              "run_mixed_pct": 0.17342342342342343,
              "run_instit_pct": 0.08445945945945946,
              "run_unclear_pct": 0.06306306306306306,
              "avg_trade_size": 1389.8020012128563,
              "avg_run_notional": 2580.837274774775,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.3536036036036036,
              "medium_confidence_pct": 0.32319819819819817,
              "low_confidence_pct": 0.08671171171171171,
              "na_confidence_pct": 0.23648648648648649,
              "avg_feature_coverage": 0.8745495495495493,
              "observable_run_pct": 0.9988738738738738,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "NXR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.05555555555555555,
              "mixed_pct": 0.1111111111111111,
              "instit_pct": 0.4444444444444444,
              "ambiguous_pct": 0.3888888888888889,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.3888888888888889,
              "retail_qty_pct": 0.02512562814070352,
              "mixed_qty_pct": 0.07178750897343862,
              "instit_qty_pct": 0.5168700646087581,
              "ambiguous_qty_pct": 0.38621679827709976,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.38621679827709976,
              "retail_notional_pct": 0.025537519780917454,
              "mixed_notional_pct": 0.07277482445916365,
              "instit_notional_pct": 0.5136973969734012,
              "ambiguous_notional_pct": 0.3879902587865177,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.3879902587865177,
              "run_retail_pct": 0.08333333333333333,
              "run_mixed_pct": 0.08333333333333333,
              "run_instit_pct": 0.3333333333333333,
              "run_unclear_pct": 0.5,
              "avg_trade_size": 2931.4166666666665,
              "avg_run_notional": 4397.125,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.4166666666666667,
              "na_confidence_pct": 0.5833333333333334,
              "avg_feature_coverage": 0.8249999999999998,
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
              "retail_pct": 0.24067796610169492,
              "mixed_pct": 0.07966101694915254,
              "instit_pct": 0.36610169491525424,
              "ambiguous_pct": 0.3135593220338983,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.3135593220338983,
              "retail_qty_pct": 0.08429373288766576,
              "mixed_qty_pct": 0.0735175753997125,
              "instit_qty_pct": 0.5089326824056207,
              "ambiguous_qty_pct": 0.333256009307001,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.333256009307001,
              "retail_notional_pct": 0.08425634946804134,
              "mixed_notional_pct": 0.07345830583186735,
              "instit_notional_pct": 0.5089574254782971,
              "ambiguous_notional_pct": 0.3333279192217942,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.3333279192217942,
              "run_retail_pct": 0.4379310344827586,
              "run_mixed_pct": 0.07931034482758621,
              "run_instit_pct": 0.17586206896551723,
              "run_unclear_pct": 0.30689655172413793,
              "avg_trade_size": 2671.403559322034,
              "avg_run_notional": 5434.924482758621,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.03103448275862069,
              "medium_confidence_pct": 0.3275862068965517,
              "low_confidence_pct": 0.25517241379310346,
              "na_confidence_pct": 0.38620689655172413,
              "avg_feature_coverage": 0.830344827586207,
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
              "retail_pct": 0.319047619047619,
              "mixed_pct": 0.07936507936507936,
              "instit_pct": 0.2984126984126984,
              "ambiguous_pct": 0.28095238095238095,
              "unobservable_pct": 0.022222222222222223,
              "unclear_pct": 0.30317460317460315,
              "retail_qty_pct": 0.05604124635731899,
              "mixed_qty_pct": 0.06964058880669506,
              "instit_qty_pct": 0.49308824628259734,
              "ambiguous_qty_pct": 0.3292983635956064,
              "unobservable_qty_pct": 0.05193155495778226,
              "unclear_qty_pct": 0.3812299185533886,
              "retail_notional_pct": 0.05600205582288268,
              "mixed_notional_pct": 0.06935645719117864,
              "instit_notional_pct": 0.4925180762584023,
              "ambiguous_notional_pct": 0.3302819064911807,
              "unobservable_notional_pct": 0.05184150423635561,
              "unclear_notional_pct": 0.3821234107275363,
              "run_retail_pct": 0.509090909090909,
              "run_mixed_pct": 0.06753246753246753,
              "run_instit_pct": 0.14805194805194805,
              "run_unclear_pct": 0.2753246753246753,
              "avg_trade_size": 1785.0960317460317,
              "avg_run_notional": 2921.066233766234,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0025974025974025974,
              "medium_confidence_pct": 0.38701298701298703,
              "low_confidence_pct": 0.2675324675324675,
              "na_confidence_pct": 0.34285714285714286,
              "avg_feature_coverage": 0.8367532467532467,
              "observable_run_pct": 0.9922077922077922,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.19230769230769232,
              "mixed_pct": 0.038461538461538464,
              "instit_pct": 0.28846153846153844,
              "ambiguous_pct": 0.4423076923076923,
              "unobservable_pct": 0.038461538461538464,
              "unclear_pct": 0.4807692307692307,
              "retail_qty_pct": 0.061269146608315096,
              "mixed_qty_pct": 0.0437636761487965,
              "instit_qty_pct": 0.45951859956236324,
              "ambiguous_qty_pct": 0.3982494529540481,
              "unobservable_qty_pct": 0.037199124726477024,
              "unclear_qty_pct": 0.43544857768052514,
              "retail_notional_pct": 0.06149118072121328,
              "mixed_notional_pct": 0.043356375476658944,
              "instit_notional_pct": 0.4593816928139855,
              "ambiguous_notional_pct": 0.3982474621719977,
              "unobservable_notional_pct": 0.03752328881614459,
              "unclear_notional_pct": 0.4357707509881423,
              "run_retail_pct": 0.2857142857142857,
              "run_mixed_pct": 0.05714285714285714,
              "run_instit_pct": 0.2,
              "run_unclear_pct": 0.45714285714285713,
              "avg_trade_size": 2208.8846153846152,
              "avg_run_notional": 3281.7714285714287,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.4857142857142857,
              "na_confidence_pct": 0.5142857142857142,
              "avg_feature_coverage": 0.8214285714285716,
              "observable_run_pct": 0.9714285714285714,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.7297297297297297,
              "mixed_pct": 0.15015015015015015,
              "instit_pct": 0.07807807807807808,
              "ambiguous_pct": 0.042042042042042045,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.042042042042042045,
              "retail_qty_pct": 0.20557377049180328,
              "mixed_qty_pct": 0.1039344262295082,
              "instit_qty_pct": 0.4554098360655738,
              "ambiguous_qty_pct": 0.23508196721311475,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.23508196721311475,
              "retail_notional_pct": 0.20856624261115395,
              "mixed_notional_pct": 0.10558821639681316,
              "instit_notional_pct": 0.45153880750449754,
              "ambiguous_notional_pct": 0.23430673348753533,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.23430673348753533,
              "run_retail_pct": 0.7901639344262295,
              "run_mixed_pct": 0.14426229508196722,
              "run_instit_pct": 0.02622950819672131,
              "run_unclear_pct": 0.03934426229508197,
              "avg_trade_size": 186.95495495495496,
              "avg_run_notional": 204.11803278688524,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6459016393442623,
              "medium_confidence_pct": 0.1540983606557377,
              "low_confidence_pct": 0.01639344262295082,
              "na_confidence_pct": 0.18360655737704917,
              "avg_feature_coverage": 0.8509836065573769,
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
              "run_unclear_pct": 0.0,
              "avg_trade_size": 240.00000000000003,
              "avg_run_notional": null,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.0,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": null,
              "observable_run_pct": 1.0,
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
          "n_trades": 927,
          "n_runs": 490,
          "n_trade_days": 10,
          "first_trade_date": "2026-02-26",
          "last_trade_date": "2026-03-11",
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
            "retail_pct": 0.30312837108953616,
            "mixed_pct": 0.1499460625674218,
            "instit_pct": 0.3775620280474649,
            "ambiguous_pct": 0.16936353829557713,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.16936353829557713,
            "retail_qty_pct": 0.06792443889880435,
            "mixed_qty_pct": 0.17254750209277717,
            "instit_qty_pct": 0.5477390109456194,
            "ambiguous_qty_pct": 0.2117890480627991,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2117890480627991,
            "retail_notional_pct": 0.0675283898858532,
            "mixed_notional_pct": 0.17249055751738393,
            "instit_notional_pct": 0.5529054091224963,
            "ambiguous_notional_pct": 0.2070756434742666,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2070756434742666
          },
          "run_composition": {
            "retail_pct": 0.5469387755102041,
            "mixed_pct": 0.15306122448979592,
            "instit_pct": 0.16938775510204082,
            "ambiguous_pct": 0.1306122448979592,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1306122448979592,
            "retail_notional_pct": 0.0675283898858532,
            "mixed_notional_pct": 0.17249055751738393,
            "instit_notional_pct": 0.5529054091224963,
            "unclear_notional_pct": 0.2070756434742666
          },
          "counts": {
            "trades": {
              "retail": 281,
              "mixed": 139,
              "institutional": 350,
              "ambiguous": 157,
              "unobservable": 0,
              "unclear": 157
            },
            "runs": {
              "retail": 268,
              "mixed": 75,
              "institutional": 83,
              "ambiguous": 64,
              "unobservable": 0,
              "unclear": 64
            }
          },
          "confidence": {
            "high": 0.09183673469387756,
            "medium": 0.3510204081632653,
            "low": 0.27346938775510204,
            "na": 0.2836734693877551
          },
          "confidence_counts": {
            "high": 45,
            "medium": 172,
            "low": 134,
            "na": 139
          },
          "trade_confidence": {
            "high": 0.05501618122977346,
            "medium": 0.343042071197411,
            "low": 0.2826321467098166,
            "na": 0.3193096008629989
          },
          "trade_confidence_counts": {
            "high": 51,
            "medium": 318,
            "low": 262,
            "na": 296
          },
          "observability": {
            "avg_feature_coverage": 0.8539795918367346,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.1306122448979592,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5469387755102041,
          "dominance_gap": 0.37755102040816324,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 508,
              "SINGLE_FILL": 409,
              "WALK_BOOK": 10
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 704,
              "PERSISTENT_POSITIVE_IMPACT": 163,
              "MOMENTUM_REACTIVE": 59,
              "UNOBSERVABLE": 1
            },
            "d3_urgency": {
              "IMMEDIATE": 489,
              "ADAPTIVE": 1
            },
            "participant_confidence": {
              "MEDIUM": 172,
              "NA": 139,
              "LOW": 134,
              "HIGH": 45
            }
          },
          "trade_size": {
            "avg": 3196.2664509169363,
            "median": 1300.5
          },
          "run_size": {
            "avg": 6046.814285714286,
            "median": 1701.75,
            "avg_length": 1.1673469387755102
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-60",
              "timestamp": "2026-03-11T08:56:06.731600",
              "price": 0.235,
              "size": 1000.0,
              "notional": 235.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3618,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-59",
              "timestamp": "2026-03-11T08:53:29.285300",
              "price": 0.235,
              "size": 19900.0,
              "notional": 4676.5,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3617,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-58",
              "timestamp": "2026-03-11T08:01:33.932700",
              "price": 0.24,
              "size": 100.0,
              "notional": 24.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3616,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-57",
              "timestamp": "2026-03-11T08:00:00.037600",
              "price": 0.235,
              "size": 2100.0,
              "notional": 493.5,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3615,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-56",
              "timestamp": "2026-03-11T07:49:46.829000",
              "price": 0.235,
              "size": 900.0,
              "notional": 211.5,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3614,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-55",
              "timestamp": "2026-03-11T07:08:39.980200",
              "price": 0.235,
              "size": 3900.0,
              "notional": 916.5,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3613,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-54",
              "timestamp": "2026-03-11T07:08:39.980200",
              "price": 0.235,
              "size": 2400.0,
              "notional": 564.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3613,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-53",
              "timestamp": "2026-03-11T07:08:13.496900",
              "price": 0.235,
              "size": 500.0,
              "notional": 117.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3612,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-52",
              "timestamp": "2026-03-11T07:08:13.496800",
              "price": 0.235,
              "size": 600.0,
              "notional": 141.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3612,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-51",
              "timestamp": "2026-03-11T07:08:13.496800",
              "price": 0.235,
              "size": 8900.0,
              "notional": 2091.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3612,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-50",
              "timestamp": "2026-03-11T07:08:13.496800",
              "price": 0.235,
              "size": 50000.0,
              "notional": 11750.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3612,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-49",
              "timestamp": "2026-03-11T07:08:13.496800",
              "price": 0.235,
              "size": 10000.0,
              "notional": 2350.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3612,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-48",
              "timestamp": "2026-03-11T07:08:13.496700",
              "price": 0.235,
              "size": 5000.0,
              "notional": 1175.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3612,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-47",
              "timestamp": "2026-03-11T07:08:13.496700",
              "price": 0.235,
              "size": 2500.0,
              "notional": 587.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3612,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-46",
              "timestamp": "2026-03-11T07:08:13.496700",
              "price": 0.235,
              "size": 30000.0,
              "notional": 7050.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3612,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-45",
              "timestamp": "2026-03-11T07:08:13.496700",
              "price": 0.235,
              "size": 30000.0,
              "notional": 7050.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3612,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-44",
              "timestamp": "2026-03-11T07:08:13.496700",
              "price": 0.235,
              "size": 13600.0,
              "notional": 3196.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3612,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-43",
              "timestamp": "2026-03-11T05:34:43.748600",
              "price": 0.23,
              "size": 1900.0,
              "notional": 437.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3611,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-42",
              "timestamp": "2026-03-11T05:34:34.682900",
              "price": 0.23,
              "size": 28100.0,
              "notional": 6463.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3610,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-41",
              "timestamp": "2026-03-11T05:34:19.703700",
              "price": 0.23,
              "size": 600.0,
              "notional": 138.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3609,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-40",
              "timestamp": "2026-03-11T05:34:19.703600",
              "price": 0.23,
              "size": 9000.0,
              "notional": 2070.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3609,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-39",
              "timestamp": "2026-03-11T05:33:11.090100",
              "price": 0.23,
              "size": 27000.0,
              "notional": 6210.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3608,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-38",
              "timestamp": "2026-03-11T05:33:11.090100",
              "price": 0.23,
              "size": 10000.0,
              "notional": 2300.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3608,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-37",
              "timestamp": "2026-03-11T05:33:11.090100",
              "price": 0.23,
              "size": 40000.0,
              "notional": 9200.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3608,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-36",
              "timestamp": "2026-03-11T05:33:11.090100",
              "price": 0.23,
              "size": 20000.0,
              "notional": 4600.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3608,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-35",
              "timestamp": "2026-03-11T05:33:11.090100",
              "price": 0.23,
              "size": 14600.0,
              "notional": 3358.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3608,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-34",
              "timestamp": "2026-03-11T05:33:11.090100",
              "price": 0.23,
              "size": 20000.0,
              "notional": 4600.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3608,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-33",
              "timestamp": "2026-03-11T05:33:11.090000",
              "price": 0.23,
              "size": 26700.0,
              "notional": 6141.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3608,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-32",
              "timestamp": "2026-03-11T05:33:11.090000",
              "price": 0.23,
              "size": 32100.0,
              "notional": 7383.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3608,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-31",
              "timestamp": "2026-03-11T05:01:45.759500",
              "price": 0.23,
              "size": 2300.0,
              "notional": 529.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3607,
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
              "retail_pct": 0.30312837108953616,
              "mixed_pct": 0.1499460625674218,
              "instit_pct": 0.3775620280474649,
              "ambiguous_pct": 0.16936353829557713,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.16936353829557713,
              "retail_qty_pct": 0.06792443889880435,
              "mixed_qty_pct": 0.17254750209277717,
              "instit_qty_pct": 0.5477390109456194,
              "ambiguous_qty_pct": 0.2117890480627991,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.2117890480627991,
              "retail_notional_pct": 0.0675283898858532,
              "mixed_notional_pct": 0.17249055751738393,
              "instit_notional_pct": 0.5529054091224963,
              "ambiguous_notional_pct": 0.2070756434742666,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.2070756434742666,
              "run_retail_pct": 0.5469387755102041,
              "run_mixed_pct": 0.15306122448979592,
              "run_instit_pct": 0.16938775510204082,
              "run_unclear_pct": 0.1306122448979592,
              "avg_trade_size": 3196.2664509169363,
              "avg_run_notional": 6046.814285714286,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.09183673469387756,
              "medium_confidence_pct": 0.3510204081632653,
              "low_confidence_pct": 0.27346938775510204,
              "na_confidence_pct": 0.2836734693877551,
              "avg_feature_coverage": 0.8539795918367346,
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
              "retail_pct": 0.1941747572815534,
              "mixed_pct": 0.019417475728155338,
              "instit_pct": 0.3592233009708738,
              "ambiguous_pct": 0.3786407766990291,
              "unobservable_pct": 0.04854368932038835,
              "unclear_pct": 0.42718446601941745,
              "retail_qty_pct": 0.0749185667752443,
              "mixed_qty_pct": 0.016286644951140065,
              "instit_qty_pct": 0.5950054288816504,
              "ambiguous_qty_pct": 0.2888165038002172,
              "unobservable_qty_pct": 0.0249728555917481,
              "unclear_qty_pct": 0.3137893593919653,
              "retail_notional_pct": 0.07654707281708795,
              "mixed_notional_pct": 0.015629217221012195,
              "instit_notional_pct": 0.5956975715083764,
              "ambiguous_notional_pct": 0.28730769472184386,
              "unobservable_notional_pct": 0.02481844373167961,
              "unclear_notional_pct": 0.3121261384535235,
              "run_retail_pct": 0.30303030303030304,
              "run_mixed_pct": 0.030303030303030304,
              "run_instit_pct": 0.22727272727272727,
              "run_unclear_pct": 0.43939393939393945,
              "avg_trade_size": 3093.5339805825242,
              "avg_run_notional": 4827.787878787879,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5303030303030303,
              "na_confidence_pct": 0.4696969696969697,
              "avg_feature_coverage": 0.8151515151515151,
              "observable_run_pct": 0.9696969696969697,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "NXR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.037037037037037035,
              "mixed_pct": 0.1111111111111111,
              "instit_pct": 0.48148148148148145,
              "ambiguous_pct": 0.2962962962962963,
              "unobservable_pct": 0.07407407407407407,
              "unclear_pct": 0.37037037037037035,
              "retail_qty_pct": 0.018469656992084433,
              "mixed_qty_pct": 0.05329815303430079,
              "instit_qty_pct": 0.5910290237467019,
              "ambiguous_qty_pct": 0.28443271767810024,
              "unobservable_qty_pct": 0.052770448548812667,
              "unclear_qty_pct": 0.33720316622691293,
              "retail_notional_pct": 0.018563546567293716,
              "mixed_notional_pct": 0.05346576937118139,
              "instit_notional_pct": 0.5902656756924306,
              "ambiguous_notional_pct": 0.28258608457262513,
              "unobservable_notional_pct": 0.05511892379646914,
              "unclear_notional_pct": 0.3377050083690943,
              "run_retail_pct": 0.05555555555555555,
              "run_mixed_pct": 0.1111111111111111,
              "run_instit_pct": 0.3888888888888889,
              "run_unclear_pct": 0.4444444444444444,
              "avg_trade_size": 2688.462962962963,
              "avg_run_notional": 4032.6944444444443,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed, leaning institution-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.4444444444444444,
              "na_confidence_pct": 0.5555555555555556,
              "avg_feature_coverage": 0.8111111111111111,
              "observable_run_pct": 0.9444444444444444,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "9MT",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2990599294947121,
              "mixed_pct": 0.09518213866039953,
              "instit_pct": 0.31609870740305523,
              "ambiguous_pct": 0.27438307873090484,
              "unobservable_pct": 0.01527614571092832,
              "unclear_pct": 0.2896592244418332,
              "retail_qty_pct": 0.05187459139876638,
              "mixed_qty_pct": 0.06404024899803872,
              "instit_qty_pct": 0.54174128080498,
              "ambiguous_qty_pct": 0.3168755862539439,
              "unobservable_qty_pct": 0.025468292544271055,
              "unclear_qty_pct": 0.342343878798215,
              "retail_notional_pct": 0.051374244230211974,
              "mixed_notional_pct": 0.06499593445079035,
              "instit_notional_pct": 0.5464530431739483,
              "ambiguous_notional_pct": 0.31356283408266833,
              "unobservable_notional_pct": 0.02361394406238109,
              "unclear_notional_pct": 0.3371767781450494,
              "run_retail_pct": 0.5189873417721519,
              "run_mixed_pct": 0.0759493670886076,
              "run_instit_pct": 0.1540084388185654,
              "run_unclear_pct": 0.2510548523206751,
              "avg_trade_size": 1923.1700940070505,
              "avg_run_notional": 3452.7800632911394,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.016877637130801686,
              "medium_confidence_pct": 0.3850210970464135,
              "low_confidence_pct": 0.27109704641350213,
              "na_confidence_pct": 0.3270042194092827,
              "avg_feature_coverage": 0.8402426160337549,
              "observable_run_pct": 0.9936708860759493,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2975425330812854,
              "mixed_pct": 0.18676748582230623,
              "instit_pct": 0.32589792060491496,
              "ambiguous_pct": 0.18790170132325143,
              "unobservable_pct": 0.001890359168241966,
              "unclear_pct": 0.1897920604914934,
              "retail_qty_pct": 0.10687552736873622,
              "mixed_qty_pct": 0.1308418846457443,
              "instit_qty_pct": 0.5408217425623997,
              "ambiguous_qty_pct": 0.2190247420996761,
              "unobservable_qty_pct": 0.002436103323443752,
              "unclear_qty_pct": 0.22146084542311983,
              "retail_notional_pct": 0.10661951605428344,
              "mixed_notional_pct": 0.13105810214972646,
              "instit_notional_pct": 0.5414797383866661,
              "ambiguous_notional_pct": 0.21850589098304904,
              "unobservable_notional_pct": 0.0023367524262749846,
              "unclear_notional_pct": 0.22084264340932402,
              "run_retail_pct": 0.6098807495741057,
              "run_mixed_pct": 0.16013628620102216,
              "run_instit_pct": 0.11712095400340715,
              "run_unclear_pct": 0.11286201022146508,
              "avg_trade_size": 2974.9817580340264,
              "avg_run_notional": 6702.578151618399,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.18185689948892675,
              "medium_confidence_pct": 0.3739352640545145,
              "low_confidence_pct": 0.17120954003407154,
              "na_confidence_pct": 0.27299829642248724,
              "avg_feature_coverage": 0.8672700170357751,
              "observable_run_pct": 0.9995741056218058,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "QS9",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2140266021765417,
              "mixed_pct": 0.08464328899637243,
              "instit_pct": 0.3476420798065296,
              "ambiguous_pct": 0.35368802902055624,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.35368802902055624,
              "retail_qty_pct": 0.07133461061877101,
              "mixed_qty_pct": 0.06984486834036858,
              "instit_qty_pct": 0.4587681065388364,
              "ambiguous_qty_pct": 0.40005241450202406,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.40005241450202406,
              "retail_notional_pct": 0.07052673287099603,
              "mixed_notional_pct": 0.07024140807423865,
              "instit_notional_pct": 0.45839642804985975,
              "ambiguous_notional_pct": 0.4008354310049056,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.4008354310049056,
              "run_retail_pct": 0.39841688654353563,
              "run_mixed_pct": 0.08179419525065963,
              "run_instit_pct": 0.16886543535620052,
              "run_unclear_pct": 0.35092348284960423,
              "avg_trade_size": 2828.8260580411124,
              "avg_run_notional": 6172.662664907652,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0158311345646438,
              "medium_confidence_pct": 0.32189973614775724,
              "low_confidence_pct": 0.22955145118733508,
              "na_confidence_pct": 0.43271767810026385,
              "avg_feature_coverage": 0.8351583113456463,
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
              "retail_pct": 0.6578947368421053,
              "mixed_pct": 0.14473684210526316,
              "instit_pct": 0.09210526315789473,
              "ambiguous_pct": 0.10526315789473684,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.10526315789473684,
              "retail_qty_pct": 0.08607046070460704,
              "mixed_qty_pct": 0.06796747967479674,
              "instit_qty_pct": 0.4540921409214092,
              "ambiguous_qty_pct": 0.39186991869918697,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.39186991869918697,
              "retail_notional_pct": 0.08573301505884073,
              "mixed_notional_pct": 0.06836546547644543,
              "instit_notional_pct": 0.4540948242090583,
              "ambiguous_notional_pct": 0.39180669525565553,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.39180669525565553,
              "run_retail_pct": 0.7351190476190477,
              "run_mixed_pct": 0.13988095238095238,
              "run_instit_pct": 0.03869047619047619,
              "run_unclear_pct": 0.08630952380952381,
              "avg_trade_size": 503.81315789473683,
              "avg_run_notional": 569.7886904761905,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.5863095238095238,
              "medium_confidence_pct": 0.13988095238095238,
              "low_confidence_pct": 0.047619047619047616,
              "na_confidence_pct": 0.2261904761904762,
              "avg_feature_coverage": 0.8486607142857142,
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
          "n_trades": 2290,
          "n_runs": 1151,
          "n_trade_days": 21,
          "first_trade_date": "2026-02-09",
          "last_trade_date": "2026-03-11",
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
            "retail_pct": 0.2965065502183406,
            "mixed_pct": 0.15676855895196506,
            "instit_pct": 0.359825327510917,
            "ambiguous_pct": 0.1868995633187773,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1868995633187773,
            "retail_qty_pct": 0.07831085487773545,
            "mixed_qty_pct": 0.17753415530038877,
            "instit_qty_pct": 0.4742638858694885,
            "ambiguous_qty_pct": 0.26989110395238725,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.26989110395238725,
            "retail_notional_pct": 0.07804109591912953,
            "mixed_notional_pct": 0.17865628581756823,
            "instit_notional_pct": 0.4762156222474662,
            "ambiguous_notional_pct": 0.267086996015836,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.267086996015836
          },
          "run_composition": {
            "retail_pct": 0.5638575152041703,
            "mixed_pct": 0.1416159860990443,
            "instit_pct": 0.15117289313640314,
            "ambiguous_pct": 0.14335360556038226,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.14335360556038226,
            "retail_notional_pct": 0.07804109591912953,
            "mixed_notional_pct": 0.17865628581756823,
            "instit_notional_pct": 0.4762156222474662,
            "unclear_notional_pct": 0.267086996015836
          },
          "counts": {
            "trades": {
              "retail": 679,
              "mixed": 359,
              "institutional": 824,
              "ambiguous": 428,
              "unobservable": 0,
              "unclear": 428
            },
            "runs": {
              "retail": 649,
              "mixed": 163,
              "institutional": 174,
              "ambiguous": 165,
              "unobservable": 0,
              "unclear": 165
            }
          },
          "confidence": {
            "high": 0.06516072980017376,
            "medium": 0.38922675933970463,
            "low": 0.26064291920069504,
            "na": 0.2849695916594266
          },
          "confidence_counts": {
            "high": 75,
            "medium": 448,
            "low": 300,
            "na": 328
          },
          "trade_confidence": {
            "high": 0.036244541484716154,
            "medium": 0.3860262008733624,
            "low": 0.23406113537117904,
            "na": 0.34366812227074234
          },
          "trade_confidence_counts": {
            "high": 83,
            "medium": 884,
            "low": 536,
            "na": 787
          },
          "observability": {
            "avg_feature_coverage": 0.8481754995655951,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.14335360556038226,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5638575152041703,
          "dominance_gap": 0.4126846220677671,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 1295,
              "SINGLE_FILL": 985,
              "WALK_BOOK": 10
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 1757,
              "PERSISTENT_POSITIVE_IMPACT": 343,
              "MOMENTUM_REACTIVE": 182,
              "SHORT_HORIZON_POSITIVE_IMPACT": 5,
              "UNOBSERVABLE": 3
            },
            "d3_urgency": {
              "IMMEDIATE": 1146,
              "ADAPTIVE": 5
            },
            "participant_confidence": {
              "MEDIUM": 448,
              "NA": 328,
              "LOW": 300,
              "HIGH": 75
            }
          },
          "trade_size": {
            "avg": 3645.1626637554587,
            "median": 1426.0
          },
          "run_size": {
            "avg": 7252.321894005213,
            "median": 2040.0,
            "avg_length": 1.1650738488271069
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-60",
              "timestamp": "2026-03-11T08:56:06.731600",
              "price": 0.235,
              "size": 1000.0,
              "notional": 235.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3618,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-59",
              "timestamp": "2026-03-11T08:53:29.285300",
              "price": 0.235,
              "size": 19900.0,
              "notional": 4676.5,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3617,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-58",
              "timestamp": "2026-03-11T08:01:33.932700",
              "price": 0.24,
              "size": 100.0,
              "notional": 24.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3616,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-57",
              "timestamp": "2026-03-11T08:00:00.037600",
              "price": 0.235,
              "size": 2100.0,
              "notional": 493.5,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3615,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-56",
              "timestamp": "2026-03-11T07:49:46.829000",
              "price": 0.235,
              "size": 900.0,
              "notional": 211.5,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3614,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-55",
              "timestamp": "2026-03-11T07:08:39.980200",
              "price": 0.235,
              "size": 3900.0,
              "notional": 916.5,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3613,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-54",
              "timestamp": "2026-03-11T07:08:39.980200",
              "price": 0.235,
              "size": 2400.0,
              "notional": 564.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3613,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-53",
              "timestamp": "2026-03-11T07:08:13.496900",
              "price": 0.235,
              "size": 500.0,
              "notional": 117.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3612,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-52",
              "timestamp": "2026-03-11T07:08:13.496800",
              "price": 0.235,
              "size": 600.0,
              "notional": 141.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3612,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-51",
              "timestamp": "2026-03-11T07:08:13.496800",
              "price": 0.235,
              "size": 8900.0,
              "notional": 2091.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3612,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-50",
              "timestamp": "2026-03-11T07:08:13.496800",
              "price": 0.235,
              "size": 50000.0,
              "notional": 11750.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3612,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-49",
              "timestamp": "2026-03-11T07:08:13.496800",
              "price": 0.235,
              "size": 10000.0,
              "notional": 2350.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3612,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-48",
              "timestamp": "2026-03-11T07:08:13.496700",
              "price": 0.235,
              "size": 5000.0,
              "notional": 1175.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3612,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-47",
              "timestamp": "2026-03-11T07:08:13.496700",
              "price": 0.235,
              "size": 2500.0,
              "notional": 587.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3612,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-46",
              "timestamp": "2026-03-11T07:08:13.496700",
              "price": 0.235,
              "size": 30000.0,
              "notional": 7050.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3612,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-45",
              "timestamp": "2026-03-11T07:08:13.496700",
              "price": 0.235,
              "size": 30000.0,
              "notional": 7050.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3612,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-44",
              "timestamp": "2026-03-11T07:08:13.496700",
              "price": 0.235,
              "size": 13600.0,
              "notional": 3196.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3612,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-43",
              "timestamp": "2026-03-11T05:34:43.748600",
              "price": 0.23,
              "size": 1900.0,
              "notional": 437.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3611,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-42",
              "timestamp": "2026-03-11T05:34:34.682900",
              "price": 0.23,
              "size": 28100.0,
              "notional": 6463.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3610,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-41",
              "timestamp": "2026-03-11T05:34:19.703700",
              "price": 0.23,
              "size": 600.0,
              "notional": 138.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3609,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-40",
              "timestamp": "2026-03-11T05:34:19.703600",
              "price": 0.23,
              "size": 9000.0,
              "notional": 2070.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3609,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-39",
              "timestamp": "2026-03-11T05:33:11.090100",
              "price": 0.23,
              "size": 27000.0,
              "notional": 6210.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3608,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-38",
              "timestamp": "2026-03-11T05:33:11.090100",
              "price": 0.23,
              "size": 10000.0,
              "notional": 2300.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3608,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-37",
              "timestamp": "2026-03-11T05:33:11.090100",
              "price": 0.23,
              "size": 40000.0,
              "notional": 9200.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3608,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-36",
              "timestamp": "2026-03-11T05:33:11.090100",
              "price": 0.23,
              "size": 20000.0,
              "notional": 4600.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3608,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-35",
              "timestamp": "2026-03-11T05:33:11.090100",
              "price": 0.23,
              "size": 14600.0,
              "notional": 3358.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3608,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-34",
              "timestamp": "2026-03-11T05:33:11.090100",
              "price": 0.23,
              "size": 20000.0,
              "notional": 4600.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3608,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-33",
              "timestamp": "2026-03-11T05:33:11.090000",
              "price": 0.23,
              "size": 26700.0,
              "notional": 6141.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3608,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-32",
              "timestamp": "2026-03-11T05:33:11.090000",
              "price": 0.23,
              "size": 32100.0,
              "notional": 7383.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3608,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-31",
              "timestamp": "2026-03-11T05:01:45.759500",
              "price": 0.23,
              "size": 2300.0,
              "notional": 529.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3607,
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
              "retail_pct": 0.2965065502183406,
              "mixed_pct": 0.15676855895196506,
              "instit_pct": 0.359825327510917,
              "ambiguous_pct": 0.1868995633187773,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.1868995633187773,
              "retail_qty_pct": 0.07831085487773545,
              "mixed_qty_pct": 0.17753415530038877,
              "instit_qty_pct": 0.4742638858694885,
              "ambiguous_qty_pct": 0.26989110395238725,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.26989110395238725,
              "retail_notional_pct": 0.07804109591912953,
              "mixed_notional_pct": 0.17865628581756823,
              "instit_notional_pct": 0.4762156222474662,
              "ambiguous_notional_pct": 0.267086996015836,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.267086996015836,
              "run_retail_pct": 0.5638575152041703,
              "run_mixed_pct": 0.1416159860990443,
              "run_instit_pct": 0.15117289313640314,
              "run_unclear_pct": 0.14335360556038226,
              "avg_trade_size": 3645.1626637554587,
              "avg_run_notional": 7252.321894005213,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.06516072980017376,
              "medium_confidence_pct": 0.38922675933970463,
              "low_confidence_pct": 0.26064291920069504,
              "na_confidence_pct": 0.2849695916594266,
              "avg_feature_coverage": 0.8481754995655951,
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
              "retail_pct": 0.2125,
              "mixed_pct": 0.0375,
              "instit_pct": 0.3333333333333333,
              "ambiguous_pct": 0.3875,
              "unobservable_pct": 0.029166666666666667,
              "unclear_pct": 0.4166666666666667,
              "retail_qty_pct": 0.06190536597741977,
              "mixed_qty_pct": 0.014080933654699987,
              "instit_qty_pct": 0.5320309526829887,
              "ambiguous_qty_pct": 0.37891665609539515,
              "unobservable_qty_pct": 0.013066091589496384,
              "unclear_qty_pct": 0.39198274768489155,
              "retail_notional_pct": 0.06254108072424693,
              "mixed_notional_pct": 0.013846610100618367,
              "instit_notional_pct": 0.5307544024991339,
              "ambiguous_notional_pct": 0.3801391005798709,
              "unobservable_notional_pct": 0.012718806096129964,
              "unclear_notional_pct": 0.39285790667600085,
              "run_retail_pct": 0.31645569620253167,
              "run_mixed_pct": 0.04430379746835443,
              "run_instit_pct": 0.2088607594936709,
              "run_unclear_pct": 0.43037974683544306,
              "avg_trade_size": 2922.3458333333333,
              "avg_run_notional": 4439.006329113924,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Mixed, mostly unclassified",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5253164556962026,
              "na_confidence_pct": 0.47468354430379744,
              "avg_feature_coverage": 0.8177215189873415,
              "observable_run_pct": 0.9810126582278481,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "QS9",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.21305386044043512,
              "mixed_pct": 0.09312815070310428,
              "instit_pct": 0.3926771026797559,
              "ambiguous_pct": 0.3006102414433537,
              "unobservable_pct": 0.0005306447333510214,
              "unclear_pct": 0.3011408861767047,
              "retail_qty_pct": 0.06130298660158513,
              "mixed_qty_pct": 0.09277015617103625,
              "instit_qty_pct": 0.5077666432471742,
              "ambiguous_qty_pct": 0.3381589813753405,
              "unobservable_qty_pct": 1.2326048638587928e-06,
              "unclear_qty_pct": 0.33816021398020435,
              "retail_notional_pct": 0.06035665811126659,
              "mixed_notional_pct": 0.09216384350176283,
              "instit_notional_pct": 0.508687880029618,
              "ambiguous_notional_pct": 0.33879031893976086,
              "unobservable_notional_pct": 1.2994175916796025e-06,
              "unclear_notional_pct": 0.33879161835735255,
              "run_retail_pct": 0.4311526479750779,
              "run_mixed_pct": 0.10093457943925234,
              "run_instit_pct": 0.17881619937694704,
              "run_unclear_pct": 0.28909657320872273,
              "avg_trade_size": 2552.320058370921,
              "avg_run_notional": 5993.579003115266,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.029906542056074768,
              "medium_confidence_pct": 0.30778816199376946,
              "low_confidence_pct": 0.2722741433021807,
              "na_confidence_pct": 0.39003115264797505,
              "avg_feature_coverage": 0.8435514018691588,
              "observable_run_pct": 0.9993769470404984,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "9MT",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2644426362896664,
              "mixed_pct": 0.1027935991320857,
              "instit_pct": 0.305939788445891,
              "ambiguous_pct": 0.3186872796311364,
              "unobservable_pct": 0.008136696501220505,
              "unclear_pct": 0.3268239761323569,
              "retail_qty_pct": 0.055215547323777314,
              "mixed_qty_pct": 0.08132012669780427,
              "instit_qty_pct": 0.49343694636817526,
              "ambiguous_qty_pct": 0.3574381274494014,
              "unobservable_qty_pct": 0.012589252160841788,
              "unclear_qty_pct": 0.3700273796102432,
              "retail_notional_pct": 0.05542307798400314,
              "mixed_notional_pct": 0.08389974232663167,
              "instit_notional_pct": 0.49007331341572413,
              "ambiguous_notional_pct": 0.360205238248785,
              "unobservable_notional_pct": 0.01039862802485611,
              "unclear_notional_pct": 0.37060386627364106,
              "run_retail_pct": 0.4935897435897436,
              "run_mixed_pct": 0.09134615384615384,
              "run_instit_pct": 0.14155982905982906,
              "run_unclear_pct": 0.2735042735042735,
              "avg_trade_size": 2138.5903173311635,
              "avg_run_notional": 4212.063301282052,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.01014957264957265,
              "medium_confidence_pct": 0.38621794871794873,
              "low_confidence_pct": 0.2387820512820513,
              "na_confidence_pct": 0.36485042735042733,
              "avg_feature_coverage": 0.8456463675213673,
              "observable_run_pct": 0.9962606837606838,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2697786333012512,
              "mixed_pct": 0.15563041385948026,
              "instit_pct": 0.31405197305101057,
              "ambiguous_pct": 0.2595765158806545,
              "unobservable_pct": 0.0009624639076034649,
              "unclear_pct": 0.26053897978825796,
              "retail_qty_pct": 0.08175813926680447,
              "mixed_qty_pct": 0.12336946127707958,
              "instit_qty_pct": 0.4634332288007042,
              "ambiguous_qty_pct": 0.3305012588453205,
              "unobservable_qty_pct": 0.0009379118100911975,
              "unclear_qty_pct": 0.3314391706554117,
              "retail_notional_pct": 0.08256393922543974,
              "mixed_notional_pct": 0.12422389521243014,
              "instit_notional_pct": 0.4674934850502937,
              "ambiguous_notional_pct": 0.32475873790531046,
              "unobservable_notional_pct": 0.00095994260652596,
              "unclear_notional_pct": 0.32571868051183644,
              "run_retail_pct": 0.5737097894006017,
              "run_mixed_pct": 0.1469567229807915,
              "run_instit_pct": 0.1221939365887526,
              "run_unclear_pct": 0.1571395510298542,
              "avg_trade_size": 3687.158999037536,
              "avg_run_notional": 8865.906503124277,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.14741957880120343,
              "medium_confidence_pct": 0.37259893543161304,
              "low_confidence_pct": 0.17588521175653785,
              "na_confidence_pct": 0.3040962740106457,
              "avg_feature_coverage": 0.8671140939597315,
              "observable_run_pct": 0.9997685720897941,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.6189320388349514,
              "mixed_pct": 0.1407766990291262,
              "instit_pct": 0.10436893203883495,
              "ambiguous_pct": 0.13592233009708737,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.13592233009708737,
              "retail_qty_pct": 0.07915108289118901,
              "mixed_qty_pct": 0.06236409498129947,
              "instit_qty_pct": 0.41619552926850484,
              "ambiguous_qty_pct": 0.4422892928590067,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.4422892928590067,
              "retail_notional_pct": 0.07850910332977963,
              "mixed_notional_pct": 0.06232494591825117,
              "instit_notional_pct": 0.41399190585117945,
              "ambiguous_notional_pct": 0.44517404490078977,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.44517404490078977,
              "run_retail_pct": 0.7019498607242339,
              "run_mixed_pct": 0.13649025069637882,
              "run_instit_pct": 0.04456824512534819,
              "run_unclear_pct": 0.116991643454039,
              "avg_trade_size": 586.2439320388349,
              "avg_run_notional": 672.7924791086351,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.5487465181058496,
              "medium_confidence_pct": 0.1309192200557103,
              "low_confidence_pct": 0.06685236768802229,
              "na_confidence_pct": 0.25348189415041783,
              "avg_feature_coverage": 0.8449860724233981,
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
              "retail_pct": 0.09523809523809523,
              "mixed_pct": 0.11904761904761904,
              "instit_pct": 0.40476190476190477,
              "ambiguous_pct": 0.30952380952380953,
              "unobservable_pct": 0.07142857142857142,
              "unclear_pct": 0.38095238095238093,
              "retail_qty_pct": 0.01685682738314317,
              "mixed_qty_pct": 0.015384615384615385,
              "instit_qty_pct": 0.13860875966139125,
              "ambiguous_qty_pct": 0.08568273831431726,
              "unobservable_qty_pct": 0.7434670592565329,
              "unclear_qty_pct": 0.8291497975708502,
              "retail_notional_pct": 0.01682442949063203,
              "mixed_notional_pct": 0.015171558380279013,
              "instit_notional_pct": 0.13535095468834155,
              "ambiguous_notional_pct": 0.08362155833392818,
              "unobservable_notional_pct": 0.7490314991068192,
              "unclear_notional_pct": 0.8326530574407474,
              "run_retail_pct": 0.13333333333333333,
              "run_mixed_pct": 0.13333333333333333,
              "run_instit_pct": 0.3333333333333333,
              "run_unclear_pct": 0.39999999999999997,
              "avg_trade_size": 12842.011904761905,
              "avg_run_notional": 17978.816666666666,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed, leaning institution-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.4666666666666667,
              "na_confidence_pct": 0.5333333333333333,
              "avg_feature_coverage": 0.796666666666667,
              "observable_run_pct": 0.9333333333333333,
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
      "n_trades": 2290,
      "n_runs": 1151,
      "n_trade_days": 21,
      "first_trade_date": "2026-02-09",
      "last_trade_date": "2026-03-11",
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
        "retail_pct": 0.2965065502183406,
        "mixed_pct": 0.15676855895196506,
        "instit_pct": 0.359825327510917,
        "ambiguous_pct": 0.1868995633187773,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.1868995633187773,
        "retail_qty_pct": 0.07831085487773545,
        "mixed_qty_pct": 0.17753415530038877,
        "instit_qty_pct": 0.4742638858694885,
        "ambiguous_qty_pct": 0.26989110395238725,
        "unobservable_qty_pct": 0.0,
        "unclear_qty_pct": 0.26989110395238725,
        "retail_notional_pct": 0.07804109591912953,
        "mixed_notional_pct": 0.17865628581756823,
        "instit_notional_pct": 0.4762156222474662,
        "ambiguous_notional_pct": 0.267086996015836,
        "unobservable_notional_pct": 0.0,
        "unclear_notional_pct": 0.267086996015836
      },
      "run_composition": {
        "retail_pct": 0.5638575152041703,
        "mixed_pct": 0.1416159860990443,
        "instit_pct": 0.15117289313640314,
        "ambiguous_pct": 0.14335360556038226,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.14335360556038226
      },
      "trade_size": {
        "avg": 3645.1626637554587,
        "median": 1426.0
      },
      "run_size": {
        "avg": 7252.321894005213,
        "median": 2040.0,
        "avg_length": 1.1650738488271069
      },
      "confidence": {
        "high": 0.06516072980017376,
        "medium": 0.38922675933970463,
        "low": 0.26064291920069504,
        "na": 0.2849695916594266
      },
      "confidence_counts": {
        "high": 75,
        "medium": 448,
        "low": 300,
        "na": 328
      },
      "trade_confidence": {
        "high": 0.036244541484716154,
        "medium": 0.3860262008733624,
        "low": 0.23406113537117904,
        "na": 0.34366812227074234
      },
      "trade_confidence_counts": {
        "high": 83,
        "medium": 884,
        "low": 536,
        "na": 787
      },
      "counts": {
        "trades": {
          "retail": 679,
          "mixed": 359,
          "institutional": 824,
          "ambiguous": 428,
          "unobservable": 0,
          "unclear": 428
        },
        "runs": {
          "retail": 649,
          "mixed": 163,
          "institutional": 174,
          "ambiguous": 165,
          "unobservable": 0,
          "unclear": 165
        }
      },
      "observability": {
        "avg_feature_coverage": 0.8481754995655951,
        "observable_run_pct": 1.0,
        "ambiguous_run_pct": 0.14335360556038226,
        "unobservable_run_pct": 0.0
      },
      "dominant_bucket": "RETAIL",
      "dominant_label": "Retail-led",
      "dominant_share": 0.5638575152041703,
      "dominance_gap": 0.4126846220677671,
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
            "n_trades": 739,
            "n_runs": 387,
            "retail_pct": 0.2936400541271989,
            "mixed_pct": 0.15290933694181327,
            "instit_pct": 0.37483085250338294,
            "ambiguous_pct": 0.17861975642760486,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.17861975642760486,
            "avg_trade_size": 2821.2767253044653,
            "avg_run_notional": 5387.399224806201,
            "retail_qty_pct": 0.06769611675788377,
            "mixed_qty_pct": 0.1641581965076883,
            "instit_qty_pct": 0.5334462687863782,
            "ambiguous_qty_pct": 0.2346994179480497,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2346994179480497,
            "retail_notional_pct": 0.06708207759181573,
            "mixed_notional_pct": 0.16347985909315138,
            "instit_notional_pct": 0.5385312698523471,
            "ambiguous_notional_pct": 0.2309067934626858,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2309067934626858,
            "run_retail_pct": 0.5322997416020672,
            "run_mixed_pct": 0.1524547803617571,
            "run_instit_pct": 0.17829457364341086,
            "run_ambiguous_pct": 0.13695090439276486,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.13695090439276486,
            "avg_feature_coverage": 0.8550387596899224,
            "high_confidence_pct": 0.06976744186046512,
            "medium_confidence_pct": 0.3333333333333333,
            "low_confidence_pct": 0.30749354005167956,
            "na_confidence_pct": 0.28940568475452194,
            "total_quantity": null
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "TKU",
          "currency": "SGD",
          "is_target": true,
          "retail_pct": 0.2965065502183406,
          "mixed_pct": 0.15676855895196506,
          "instit_pct": 0.359825327510917,
          "ambiguous_pct": 0.1868995633187773,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.1868995633187773,
          "retail_qty_pct": 0.07831085487773545,
          "mixed_qty_pct": 0.17753415530038877,
          "instit_qty_pct": 0.4742638858694885,
          "ambiguous_qty_pct": 0.26989110395238725,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.26989110395238725,
          "retail_notional_pct": 0.07804109591912953,
          "mixed_notional_pct": 0.17865628581756823,
          "instit_notional_pct": 0.4762156222474662,
          "ambiguous_notional_pct": 0.267086996015836,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.267086996015836,
          "run_retail_pct": 0.5638575152041703,
          "run_mixed_pct": 0.1416159860990443,
          "run_instit_pct": 0.15117289313640314,
          "run_unclear_pct": 0.14335360556038226,
          "avg_trade_size": 3645.1626637554587,
          "avg_run_notional": 7252.321894005213,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.06516072980017376,
          "medium_confidence_pct": 0.38922675933970463,
          "low_confidence_pct": 0.26064291920069504,
          "na_confidence_pct": 0.2849695916594266,
          "avg_feature_coverage": 0.8481754995655951,
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
          "retail_pct": 0.2125,
          "mixed_pct": 0.0375,
          "instit_pct": 0.3333333333333333,
          "ambiguous_pct": 0.3875,
          "unobservable_pct": 0.029166666666666667,
          "unclear_pct": 0.4166666666666667,
          "retail_qty_pct": 0.06190536597741977,
          "mixed_qty_pct": 0.014080933654699987,
          "instit_qty_pct": 0.5320309526829887,
          "ambiguous_qty_pct": 0.37891665609539515,
          "unobservable_qty_pct": 0.013066091589496384,
          "unclear_qty_pct": 0.39198274768489155,
          "retail_notional_pct": 0.06254108072424693,
          "mixed_notional_pct": 0.013846610100618367,
          "instit_notional_pct": 0.5307544024991339,
          "ambiguous_notional_pct": 0.3801391005798709,
          "unobservable_notional_pct": 0.012718806096129964,
          "unclear_notional_pct": 0.39285790667600085,
          "run_retail_pct": 0.31645569620253167,
          "run_mixed_pct": 0.04430379746835443,
          "run_instit_pct": 0.2088607594936709,
          "run_unclear_pct": 0.43037974683544306,
          "avg_trade_size": 2922.3458333333333,
          "avg_run_notional": 4439.006329113924,
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Mixed, mostly unclassified",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.5253164556962026,
          "na_confidence_pct": 0.47468354430379744,
          "avg_feature_coverage": 0.8177215189873415,
          "observable_run_pct": 0.9810126582278481,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "QS9",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.21305386044043512,
          "mixed_pct": 0.09312815070310428,
          "instit_pct": 0.3926771026797559,
          "ambiguous_pct": 0.3006102414433537,
          "unobservable_pct": 0.0005306447333510214,
          "unclear_pct": 0.3011408861767047,
          "retail_qty_pct": 0.06130298660158513,
          "mixed_qty_pct": 0.09277015617103625,
          "instit_qty_pct": 0.5077666432471742,
          "ambiguous_qty_pct": 0.3381589813753405,
          "unobservable_qty_pct": 1.2326048638587928e-06,
          "unclear_qty_pct": 0.33816021398020435,
          "retail_notional_pct": 0.06035665811126659,
          "mixed_notional_pct": 0.09216384350176283,
          "instit_notional_pct": 0.508687880029618,
          "ambiguous_notional_pct": 0.33879031893976086,
          "unobservable_notional_pct": 1.2994175916796025e-06,
          "unclear_notional_pct": 0.33879161835735255,
          "run_retail_pct": 0.4311526479750779,
          "run_mixed_pct": 0.10093457943925234,
          "run_instit_pct": 0.17881619937694704,
          "run_unclear_pct": 0.28909657320872273,
          "avg_trade_size": 2552.320058370921,
          "avg_run_notional": 5993.579003115266,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.029906542056074768,
          "medium_confidence_pct": 0.30778816199376946,
          "low_confidence_pct": 0.2722741433021807,
          "na_confidence_pct": 0.39003115264797505,
          "avg_feature_coverage": 0.8435514018691588,
          "observable_run_pct": 0.9993769470404984,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "9MT",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.2644426362896664,
          "mixed_pct": 0.1027935991320857,
          "instit_pct": 0.305939788445891,
          "ambiguous_pct": 0.3186872796311364,
          "unobservable_pct": 0.008136696501220505,
          "unclear_pct": 0.3268239761323569,
          "retail_qty_pct": 0.055215547323777314,
          "mixed_qty_pct": 0.08132012669780427,
          "instit_qty_pct": 0.49343694636817526,
          "ambiguous_qty_pct": 0.3574381274494014,
          "unobservable_qty_pct": 0.012589252160841788,
          "unclear_qty_pct": 0.3700273796102432,
          "retail_notional_pct": 0.05542307798400314,
          "mixed_notional_pct": 0.08389974232663167,
          "instit_notional_pct": 0.49007331341572413,
          "ambiguous_notional_pct": 0.360205238248785,
          "unobservable_notional_pct": 0.01039862802485611,
          "unclear_notional_pct": 0.37060386627364106,
          "run_retail_pct": 0.4935897435897436,
          "run_mixed_pct": 0.09134615384615384,
          "run_instit_pct": 0.14155982905982906,
          "run_unclear_pct": 0.2735042735042735,
          "avg_trade_size": 2138.5903173311635,
          "avg_run_notional": 4212.063301282052,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.01014957264957265,
          "medium_confidence_pct": 0.38621794871794873,
          "low_confidence_pct": 0.2387820512820513,
          "na_confidence_pct": 0.36485042735042733,
          "avg_feature_coverage": 0.8456463675213673,
          "observable_run_pct": 0.9962606837606838,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "ITS",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.2697786333012512,
          "mixed_pct": 0.15563041385948026,
          "instit_pct": 0.31405197305101057,
          "ambiguous_pct": 0.2595765158806545,
          "unobservable_pct": 0.0009624639076034649,
          "unclear_pct": 0.26053897978825796,
          "retail_qty_pct": 0.08175813926680447,
          "mixed_qty_pct": 0.12336946127707958,
          "instit_qty_pct": 0.4634332288007042,
          "ambiguous_qty_pct": 0.3305012588453205,
          "unobservable_qty_pct": 0.0009379118100911975,
          "unclear_qty_pct": 0.3314391706554117,
          "retail_notional_pct": 0.08256393922543974,
          "mixed_notional_pct": 0.12422389521243014,
          "instit_notional_pct": 0.4674934850502937,
          "ambiguous_notional_pct": 0.32475873790531046,
          "unobservable_notional_pct": 0.00095994260652596,
          "unclear_notional_pct": 0.32571868051183644,
          "run_retail_pct": 0.5737097894006017,
          "run_mixed_pct": 0.1469567229807915,
          "run_instit_pct": 0.1221939365887526,
          "run_unclear_pct": 0.1571395510298542,
          "avg_trade_size": 3687.158999037536,
          "avg_run_notional": 8865.906503124277,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.14741957880120343,
          "medium_confidence_pct": 0.37259893543161304,
          "low_confidence_pct": 0.17588521175653785,
          "na_confidence_pct": 0.3040962740106457,
          "avg_feature_coverage": 0.8671140939597315,
          "observable_run_pct": 0.9997685720897941,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "U77",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.6189320388349514,
          "mixed_pct": 0.1407766990291262,
          "instit_pct": 0.10436893203883495,
          "ambiguous_pct": 0.13592233009708737,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.13592233009708737,
          "retail_qty_pct": 0.07915108289118901,
          "mixed_qty_pct": 0.06236409498129947,
          "instit_qty_pct": 0.41619552926850484,
          "ambiguous_qty_pct": 0.4422892928590067,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.4422892928590067,
          "retail_notional_pct": 0.07850910332977963,
          "mixed_notional_pct": 0.06232494591825117,
          "instit_notional_pct": 0.41399190585117945,
          "ambiguous_notional_pct": 0.44517404490078977,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.44517404490078977,
          "run_retail_pct": 0.7019498607242339,
          "run_mixed_pct": 0.13649025069637882,
          "run_instit_pct": 0.04456824512534819,
          "run_unclear_pct": 0.116991643454039,
          "avg_trade_size": 586.2439320388349,
          "avg_run_notional": 672.7924791086351,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.5487465181058496,
          "medium_confidence_pct": 0.1309192200557103,
          "low_confidence_pct": 0.06685236768802229,
          "na_confidence_pct": 0.25348189415041783,
          "avg_feature_coverage": 0.8449860724233981,
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
          "retail_pct": 0.09523809523809523,
          "mixed_pct": 0.11904761904761904,
          "instit_pct": 0.40476190476190477,
          "ambiguous_pct": 0.30952380952380953,
          "unobservable_pct": 0.07142857142857142,
          "unclear_pct": 0.38095238095238093,
          "retail_qty_pct": 0.01685682738314317,
          "mixed_qty_pct": 0.015384615384615385,
          "instit_qty_pct": 0.13860875966139125,
          "ambiguous_qty_pct": 0.08568273831431726,
          "unobservable_qty_pct": 0.7434670592565329,
          "unclear_qty_pct": 0.8291497975708502,
          "retail_notional_pct": 0.01682442949063203,
          "mixed_notional_pct": 0.015171558380279013,
          "instit_notional_pct": 0.13535095468834155,
          "ambiguous_notional_pct": 0.08362155833392818,
          "unobservable_notional_pct": 0.7490314991068192,
          "unclear_notional_pct": 0.8326530574407474,
          "run_retail_pct": 0.13333333333333333,
          "run_mixed_pct": 0.13333333333333333,
          "run_instit_pct": 0.3333333333333333,
          "run_unclear_pct": 0.39999999999999997,
          "avg_trade_size": 12842.011904761905,
          "avg_run_notional": 17978.816666666666,
          "dominant_bucket": "INSTITUTIONAL",
          "dominant_label": "Mixed, leaning institution-like",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.4666666666666667,
          "na_confidence_pct": 0.5333333333333333,
          "avg_feature_coverage": 0.796666666666667,
          "observable_run_pct": 0.9333333333333333,
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
            "retail_pct": 0.2033898305084746,
            "mixed_pct": 0.0847457627118644,
            "instit_pct": 0.2542372881355932,
            "ambiguous_pct": 0.4576271186440678,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.4576271186440678,
            "retail_qty_pct": 0.015881349258432865,
            "mixed_qty_pct": 0.09830686441790261,
            "instit_qty_pct": 0.22338889618060112,
            "ambiguous_qty_pct": 0.6624228901430634,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.6624228901430634,
            "retail_notional_pct": 0.015966408261317552,
            "mixed_notional_pct": 0.09673123451935745,
            "instit_notional_pct": 0.228495001707714,
            "ambiguous_notional_pct": 0.6588073555116111,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.6588073555116111,
            "run_retail_pct": 0.44,
            "run_mixed_pct": 0.16,
            "run_instit_pct": 0.08,
            "run_unclear_pct": 0.32,
            "avg_trade_size": 2952.7033898305085,
            "avg_run_notional": 6968.38,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.52,
            "na_confidence_pct": 0.48,
            "avg_feature_coverage": 0.8320000000000002,
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
            "retail_pct": 0.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.8333333333333334,
            "ambiguous_pct": 0.16666666666666666,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.16666666666666666,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.9259259259259259,
            "ambiguous_qty_pct": 0.07407407407407407,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.07407407407407407,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.9262672811059908,
            "ambiguous_notional_pct": 0.07373271889400922,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.07373271889400922,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.6666666666666666,
            "run_unclear_pct": 0.3333333333333333,
            "avg_trade_size": 1808.3333333333333,
            "avg_run_notional": 3616.6666666666665,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Institution-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.6666666666666666,
            "na_confidence_pct": 0.3333333333333333,
            "avg_feature_coverage": 0.8000000000000002,
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
            "retail_pct": 0.2,
            "mixed_pct": 0.0,
            "instit_pct": 0.6,
            "ambiguous_pct": 0.2,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.2,
            "retail_qty_pct": 0.009009009009009009,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.8108108108108109,
            "ambiguous_qty_pct": 0.18018018018018017,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.18018018018018017,
            "retail_notional_pct": 0.009117372439171748,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.8107321359916516,
            "ambiguous_notional_pct": 0.1801504915691767,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.1801504915691767,
            "run_retail_pct": 0.25,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.5,
            "run_unclear_pct": 0.25,
            "avg_trade_size": 1820.7,
            "avg_run_notional": 2275.875,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Institution-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.75,
            "na_confidence_pct": 0.25,
            "avg_feature_coverage": 0.8500000000000001,
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
            "retail_pct": 0.28368794326241137,
            "mixed_pct": 0.02127659574468085,
            "instit_pct": 0.3829787234042553,
            "ambiguous_pct": 0.3120567375886525,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.3120567375886525,
            "retail_qty_pct": 0.05475504322766571,
            "mixed_qty_pct": 0.01585014409221902,
            "instit_qty_pct": 0.5561959654178674,
            "ambiguous_qty_pct": 0.37319884726224783,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.37319884726224783,
            "retail_notional_pct": 0.05506073454933853,
            "mixed_notional_pct": 0.015878079290038385,
            "instit_notional_pct": 0.5561395837290906,
            "ambiguous_notional_pct": 0.3729216024315325,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.3729216024315325,
            "run_retail_pct": 0.48717948717948717,
            "run_mixed_pct": 0.038461538461538464,
            "run_instit_pct": 0.20512820512820512,
            "run_unclear_pct": 0.2692307692307692,
            "avg_trade_size": 1978.7304964539007,
            "avg_run_notional": 3576.9358974358975,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.32051282051282054,
            "low_confidence_pct": 0.3717948717948718,
            "na_confidence_pct": 0.3076923076923077,
            "avg_feature_coverage": 0.8403846153846154,
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
            "retail_pct": 0.21714285714285714,
            "mixed_pct": 0.08571428571428572,
            "instit_pct": 0.38857142857142857,
            "ambiguous_pct": 0.30857142857142855,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.30857142857142855,
            "retail_qty_pct": 0.08858479974210473,
            "mixed_qty_pct": 0.08892940117164486,
            "instit_qty_pct": 0.4980824597872364,
            "ambiguous_qty_pct": 0.324403339299014,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.324403339299014,
            "retail_notional_pct": 0.08859035409580666,
            "mixed_notional_pct": 0.08950736775723271,
            "instit_notional_pct": 0.4980809309698211,
            "ambiguous_notional_pct": 0.3238213471771395,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.3238213471771395,
            "run_retail_pct": 0.375,
            "run_mixed_pct": 0.1,
            "run_instit_pct": 0.2125,
            "run_unclear_pct": 0.3125,
            "avg_trade_size": 2943.093714285714,
            "avg_run_notional": 6438.0175,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.3125,
            "low_confidence_pct": 0.275,
            "na_confidence_pct": 0.4125,
            "avg_feature_coverage": 0.840625,
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
            "retail_pct": 0.2876712328767123,
            "mixed_pct": 0.4178082191780822,
            "instit_pct": 0.1872146118721461,
            "ambiguous_pct": 0.10730593607305935,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.10730593607305935,
            "retail_qty_pct": 0.08386327503974562,
            "mixed_qty_pct": 0.356120826709062,
            "instit_qty_pct": 0.29411764705882354,
            "ambiguous_qty_pct": 0.2658982511923688,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2658982511923688,
            "retail_notional_pct": 0.08404872956144897,
            "mixed_notional_pct": 0.35633867345635895,
            "instit_notional_pct": 0.29388326836559187,
            "ambiguous_notional_pct": 0.2657293286166002,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2657293286166002,
            "run_retail_pct": 0.56,
            "run_mixed_pct": 0.3244444444444444,
            "run_instit_pct": 0.05333333333333334,
            "run_unclear_pct": 0.06222222222222222,
            "avg_trade_size": 607.9589041095891,
            "avg_run_notional": 1183.4933333333333,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.49333333333333335,
            "low_confidence_pct": 0.12,
            "na_confidence_pct": 0.38666666666666666,
            "avg_feature_coverage": 0.9026666666666665,
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
            "run_unclear_pct": 0.0,
            "avg_trade_size": 240.00000000000003,
            "avg_run_notional": null,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.0,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": null,
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
            "retail_pct": 0.3464566929133858,
            "mixed_pct": 0.14698162729658792,
            "instit_pct": 0.2887139107611549,
            "ambiguous_pct": 0.2178477690288714,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.2178477690288714,
            "retail_qty_pct": 0.06751577193191287,
            "mixed_qty_pct": 0.15752886561123675,
            "instit_qty_pct": 0.4139745268420426,
            "ambiguous_qty_pct": 0.36098083561480776,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.36098083561480776,
            "retail_notional_pct": 0.06725656128240445,
            "mixed_notional_pct": 0.15620005680995996,
            "instit_notional_pct": 0.41831853237363803,
            "ambiguous_notional_pct": 0.3582248495339975,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.3582248495339975,
            "run_retail_pct": 0.5727272727272728,
            "run_mixed_pct": 0.15,
            "run_instit_pct": 0.15,
            "run_unclear_pct": 0.12727272727272726,
            "avg_trade_size": 2448.6482939632547,
            "avg_run_notional": 4240.613636363636,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.12272727272727273,
            "medium_confidence_pct": 0.30454545454545456,
            "low_confidence_pct": 0.29545454545454547,
            "na_confidence_pct": 0.2772727272727273,
            "avg_feature_coverage": 0.8513636363636362,
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
            "retail_pct": 0.36688902365069737,
            "mixed_pct": 0.23347483323226198,
            "instit_pct": 0.265009096422074,
            "ambiguous_pct": 0.12856276531231048,
            "unobservable_pct": 0.006064281382656155,
            "unclear_pct": 0.13462704669496664,
            "retail_qty_pct": 0.07315396250630242,
            "mixed_qty_pct": 0.19956914332859696,
            "instit_qty_pct": 0.5375624512994454,
            "ambiguous_qty_pct": 0.17330522069945456,
            "unobservable_qty_pct": 0.01640922216620067,
            "unclear_qty_pct": 0.18971444286565523,
            "retail_notional_pct": 0.07323815709468194,
            "mixed_notional_pct": 0.20045828936284776,
            "instit_notional_pct": 0.5364841399722095,
            "ambiguous_notional_pct": 0.17377295892042158,
            "unobservable_notional_pct": 0.016046454649839306,
            "unclear_notional_pct": 0.1898194135702609,
            "run_retail_pct": 0.6790540540540541,
            "run_mixed_pct": 0.17342342342342343,
            "run_instit_pct": 0.08445945945945946,
            "run_unclear_pct": 0.06306306306306306,
            "avg_trade_size": 1389.8020012128563,
            "avg_run_notional": 2580.837274774775,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.3536036036036036,
            "medium_confidence_pct": 0.32319819819819817,
            "low_confidence_pct": 0.08671171171171171,
            "na_confidence_pct": 0.23648648648648649,
            "avg_feature_coverage": 0.8745495495495493,
            "observable_run_pct": 0.9988738738738738,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "NXR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.05555555555555555,
            "mixed_pct": 0.1111111111111111,
            "instit_pct": 0.4444444444444444,
            "ambiguous_pct": 0.3888888888888889,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.3888888888888889,
            "retail_qty_pct": 0.02512562814070352,
            "mixed_qty_pct": 0.07178750897343862,
            "instit_qty_pct": 0.5168700646087581,
            "ambiguous_qty_pct": 0.38621679827709976,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.38621679827709976,
            "retail_notional_pct": 0.025537519780917454,
            "mixed_notional_pct": 0.07277482445916365,
            "instit_notional_pct": 0.5136973969734012,
            "ambiguous_notional_pct": 0.3879902587865177,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.3879902587865177,
            "run_retail_pct": 0.08333333333333333,
            "run_mixed_pct": 0.08333333333333333,
            "run_instit_pct": 0.3333333333333333,
            "run_unclear_pct": 0.5,
            "avg_trade_size": 2931.4166666666665,
            "avg_run_notional": 4397.125,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.4166666666666667,
            "na_confidence_pct": 0.5833333333333334,
            "avg_feature_coverage": 0.8249999999999998,
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
            "retail_pct": 0.24067796610169492,
            "mixed_pct": 0.07966101694915254,
            "instit_pct": 0.36610169491525424,
            "ambiguous_pct": 0.3135593220338983,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.3135593220338983,
            "retail_qty_pct": 0.08429373288766576,
            "mixed_qty_pct": 0.0735175753997125,
            "instit_qty_pct": 0.5089326824056207,
            "ambiguous_qty_pct": 0.333256009307001,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.333256009307001,
            "retail_notional_pct": 0.08425634946804134,
            "mixed_notional_pct": 0.07345830583186735,
            "instit_notional_pct": 0.5089574254782971,
            "ambiguous_notional_pct": 0.3333279192217942,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.3333279192217942,
            "run_retail_pct": 0.4379310344827586,
            "run_mixed_pct": 0.07931034482758621,
            "run_instit_pct": 0.17586206896551723,
            "run_unclear_pct": 0.30689655172413793,
            "avg_trade_size": 2671.403559322034,
            "avg_run_notional": 5434.924482758621,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.03103448275862069,
            "medium_confidence_pct": 0.3275862068965517,
            "low_confidence_pct": 0.25517241379310346,
            "na_confidence_pct": 0.38620689655172413,
            "avg_feature_coverage": 0.830344827586207,
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
            "retail_pct": 0.319047619047619,
            "mixed_pct": 0.07936507936507936,
            "instit_pct": 0.2984126984126984,
            "ambiguous_pct": 0.28095238095238095,
            "unobservable_pct": 0.022222222222222223,
            "unclear_pct": 0.30317460317460315,
            "retail_qty_pct": 0.05604124635731899,
            "mixed_qty_pct": 0.06964058880669506,
            "instit_qty_pct": 0.49308824628259734,
            "ambiguous_qty_pct": 0.3292983635956064,
            "unobservable_qty_pct": 0.05193155495778226,
            "unclear_qty_pct": 0.3812299185533886,
            "retail_notional_pct": 0.05600205582288268,
            "mixed_notional_pct": 0.06935645719117864,
            "instit_notional_pct": 0.4925180762584023,
            "ambiguous_notional_pct": 0.3302819064911807,
            "unobservable_notional_pct": 0.05184150423635561,
            "unclear_notional_pct": 0.3821234107275363,
            "run_retail_pct": 0.509090909090909,
            "run_mixed_pct": 0.06753246753246753,
            "run_instit_pct": 0.14805194805194805,
            "run_unclear_pct": 0.2753246753246753,
            "avg_trade_size": 1785.0960317460317,
            "avg_run_notional": 2921.066233766234,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0025974025974025974,
            "medium_confidence_pct": 0.38701298701298703,
            "low_confidence_pct": 0.2675324675324675,
            "na_confidence_pct": 0.34285714285714286,
            "avg_feature_coverage": 0.8367532467532467,
            "observable_run_pct": 0.9922077922077922,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.19230769230769232,
            "mixed_pct": 0.038461538461538464,
            "instit_pct": 0.28846153846153844,
            "ambiguous_pct": 0.4423076923076923,
            "unobservable_pct": 0.038461538461538464,
            "unclear_pct": 0.4807692307692307,
            "retail_qty_pct": 0.061269146608315096,
            "mixed_qty_pct": 0.0437636761487965,
            "instit_qty_pct": 0.45951859956236324,
            "ambiguous_qty_pct": 0.3982494529540481,
            "unobservable_qty_pct": 0.037199124726477024,
            "unclear_qty_pct": 0.43544857768052514,
            "retail_notional_pct": 0.06149118072121328,
            "mixed_notional_pct": 0.043356375476658944,
            "instit_notional_pct": 0.4593816928139855,
            "ambiguous_notional_pct": 0.3982474621719977,
            "unobservable_notional_pct": 0.03752328881614459,
            "unclear_notional_pct": 0.4357707509881423,
            "run_retail_pct": 0.2857142857142857,
            "run_mixed_pct": 0.05714285714285714,
            "run_instit_pct": 0.2,
            "run_unclear_pct": 0.45714285714285713,
            "avg_trade_size": 2208.8846153846152,
            "avg_run_notional": 3281.7714285714287,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.4857142857142857,
            "na_confidence_pct": 0.5142857142857142,
            "avg_feature_coverage": 0.8214285714285716,
            "observable_run_pct": 0.9714285714285714,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.7297297297297297,
            "mixed_pct": 0.15015015015015015,
            "instit_pct": 0.07807807807807808,
            "ambiguous_pct": 0.042042042042042045,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.042042042042042045,
            "retail_qty_pct": 0.20557377049180328,
            "mixed_qty_pct": 0.1039344262295082,
            "instit_qty_pct": 0.4554098360655738,
            "ambiguous_qty_pct": 0.23508196721311475,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.23508196721311475,
            "retail_notional_pct": 0.20856624261115395,
            "mixed_notional_pct": 0.10558821639681316,
            "instit_notional_pct": 0.45153880750449754,
            "ambiguous_notional_pct": 0.23430673348753533,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.23430673348753533,
            "run_retail_pct": 0.7901639344262295,
            "run_mixed_pct": 0.14426229508196722,
            "run_instit_pct": 0.02622950819672131,
            "run_unclear_pct": 0.03934426229508197,
            "avg_trade_size": 186.95495495495496,
            "avg_run_notional": 204.11803278688524,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6459016393442623,
            "medium_confidence_pct": 0.1540983606557377,
            "low_confidence_pct": 0.01639344262295082,
            "na_confidence_pct": 0.18360655737704917,
            "avg_feature_coverage": 0.8509836065573769,
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
            "run_unclear_pct": 0.0,
            "avg_trade_size": 240.00000000000003,
            "avg_run_notional": null,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.0,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": null,
            "observable_run_pct": 1.0,
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
            "retail_pct": 0.30312837108953616,
            "mixed_pct": 0.1499460625674218,
            "instit_pct": 0.3775620280474649,
            "ambiguous_pct": 0.16936353829557713,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.16936353829557713,
            "retail_qty_pct": 0.06792443889880435,
            "mixed_qty_pct": 0.17254750209277717,
            "instit_qty_pct": 0.5477390109456194,
            "ambiguous_qty_pct": 0.2117890480627991,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2117890480627991,
            "retail_notional_pct": 0.0675283898858532,
            "mixed_notional_pct": 0.17249055751738393,
            "instit_notional_pct": 0.5529054091224963,
            "ambiguous_notional_pct": 0.2070756434742666,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2070756434742666,
            "run_retail_pct": 0.5469387755102041,
            "run_mixed_pct": 0.15306122448979592,
            "run_instit_pct": 0.16938775510204082,
            "run_unclear_pct": 0.1306122448979592,
            "avg_trade_size": 3196.2664509169363,
            "avg_run_notional": 6046.814285714286,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.09183673469387756,
            "medium_confidence_pct": 0.3510204081632653,
            "low_confidence_pct": 0.27346938775510204,
            "na_confidence_pct": 0.2836734693877551,
            "avg_feature_coverage": 0.8539795918367346,
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
            "retail_pct": 0.1941747572815534,
            "mixed_pct": 0.019417475728155338,
            "instit_pct": 0.3592233009708738,
            "ambiguous_pct": 0.3786407766990291,
            "unobservable_pct": 0.04854368932038835,
            "unclear_pct": 0.42718446601941745,
            "retail_qty_pct": 0.0749185667752443,
            "mixed_qty_pct": 0.016286644951140065,
            "instit_qty_pct": 0.5950054288816504,
            "ambiguous_qty_pct": 0.2888165038002172,
            "unobservable_qty_pct": 0.0249728555917481,
            "unclear_qty_pct": 0.3137893593919653,
            "retail_notional_pct": 0.07654707281708795,
            "mixed_notional_pct": 0.015629217221012195,
            "instit_notional_pct": 0.5956975715083764,
            "ambiguous_notional_pct": 0.28730769472184386,
            "unobservable_notional_pct": 0.02481844373167961,
            "unclear_notional_pct": 0.3121261384535235,
            "run_retail_pct": 0.30303030303030304,
            "run_mixed_pct": 0.030303030303030304,
            "run_instit_pct": 0.22727272727272727,
            "run_unclear_pct": 0.43939393939393945,
            "avg_trade_size": 3093.5339805825242,
            "avg_run_notional": 4827.787878787879,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5303030303030303,
            "na_confidence_pct": 0.4696969696969697,
            "avg_feature_coverage": 0.8151515151515151,
            "observable_run_pct": 0.9696969696969697,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "NXR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.037037037037037035,
            "mixed_pct": 0.1111111111111111,
            "instit_pct": 0.48148148148148145,
            "ambiguous_pct": 0.2962962962962963,
            "unobservable_pct": 0.07407407407407407,
            "unclear_pct": 0.37037037037037035,
            "retail_qty_pct": 0.018469656992084433,
            "mixed_qty_pct": 0.05329815303430079,
            "instit_qty_pct": 0.5910290237467019,
            "ambiguous_qty_pct": 0.28443271767810024,
            "unobservable_qty_pct": 0.052770448548812667,
            "unclear_qty_pct": 0.33720316622691293,
            "retail_notional_pct": 0.018563546567293716,
            "mixed_notional_pct": 0.05346576937118139,
            "instit_notional_pct": 0.5902656756924306,
            "ambiguous_notional_pct": 0.28258608457262513,
            "unobservable_notional_pct": 0.05511892379646914,
            "unclear_notional_pct": 0.3377050083690943,
            "run_retail_pct": 0.05555555555555555,
            "run_mixed_pct": 0.1111111111111111,
            "run_instit_pct": 0.3888888888888889,
            "run_unclear_pct": 0.4444444444444444,
            "avg_trade_size": 2688.462962962963,
            "avg_run_notional": 4032.6944444444443,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed, leaning institution-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.4444444444444444,
            "na_confidence_pct": 0.5555555555555556,
            "avg_feature_coverage": 0.8111111111111111,
            "observable_run_pct": 0.9444444444444444,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "9MT",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2990599294947121,
            "mixed_pct": 0.09518213866039953,
            "instit_pct": 0.31609870740305523,
            "ambiguous_pct": 0.27438307873090484,
            "unobservable_pct": 0.01527614571092832,
            "unclear_pct": 0.2896592244418332,
            "retail_qty_pct": 0.05187459139876638,
            "mixed_qty_pct": 0.06404024899803872,
            "instit_qty_pct": 0.54174128080498,
            "ambiguous_qty_pct": 0.3168755862539439,
            "unobservable_qty_pct": 0.025468292544271055,
            "unclear_qty_pct": 0.342343878798215,
            "retail_notional_pct": 0.051374244230211974,
            "mixed_notional_pct": 0.06499593445079035,
            "instit_notional_pct": 0.5464530431739483,
            "ambiguous_notional_pct": 0.31356283408266833,
            "unobservable_notional_pct": 0.02361394406238109,
            "unclear_notional_pct": 0.3371767781450494,
            "run_retail_pct": 0.5189873417721519,
            "run_mixed_pct": 0.0759493670886076,
            "run_instit_pct": 0.1540084388185654,
            "run_unclear_pct": 0.2510548523206751,
            "avg_trade_size": 1923.1700940070505,
            "avg_run_notional": 3452.7800632911394,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.016877637130801686,
            "medium_confidence_pct": 0.3850210970464135,
            "low_confidence_pct": 0.27109704641350213,
            "na_confidence_pct": 0.3270042194092827,
            "avg_feature_coverage": 0.8402426160337549,
            "observable_run_pct": 0.9936708860759493,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2975425330812854,
            "mixed_pct": 0.18676748582230623,
            "instit_pct": 0.32589792060491496,
            "ambiguous_pct": 0.18790170132325143,
            "unobservable_pct": 0.001890359168241966,
            "unclear_pct": 0.1897920604914934,
            "retail_qty_pct": 0.10687552736873622,
            "mixed_qty_pct": 0.1308418846457443,
            "instit_qty_pct": 0.5408217425623997,
            "ambiguous_qty_pct": 0.2190247420996761,
            "unobservable_qty_pct": 0.002436103323443752,
            "unclear_qty_pct": 0.22146084542311983,
            "retail_notional_pct": 0.10661951605428344,
            "mixed_notional_pct": 0.13105810214972646,
            "instit_notional_pct": 0.5414797383866661,
            "ambiguous_notional_pct": 0.21850589098304904,
            "unobservable_notional_pct": 0.0023367524262749846,
            "unclear_notional_pct": 0.22084264340932402,
            "run_retail_pct": 0.6098807495741057,
            "run_mixed_pct": 0.16013628620102216,
            "run_instit_pct": 0.11712095400340715,
            "run_unclear_pct": 0.11286201022146508,
            "avg_trade_size": 2974.9817580340264,
            "avg_run_notional": 6702.578151618399,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.18185689948892675,
            "medium_confidence_pct": 0.3739352640545145,
            "low_confidence_pct": 0.17120954003407154,
            "na_confidence_pct": 0.27299829642248724,
            "avg_feature_coverage": 0.8672700170357751,
            "observable_run_pct": 0.9995741056218058,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "QS9",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2140266021765417,
            "mixed_pct": 0.08464328899637243,
            "instit_pct": 0.3476420798065296,
            "ambiguous_pct": 0.35368802902055624,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.35368802902055624,
            "retail_qty_pct": 0.07133461061877101,
            "mixed_qty_pct": 0.06984486834036858,
            "instit_qty_pct": 0.4587681065388364,
            "ambiguous_qty_pct": 0.40005241450202406,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.40005241450202406,
            "retail_notional_pct": 0.07052673287099603,
            "mixed_notional_pct": 0.07024140807423865,
            "instit_notional_pct": 0.45839642804985975,
            "ambiguous_notional_pct": 0.4008354310049056,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.4008354310049056,
            "run_retail_pct": 0.39841688654353563,
            "run_mixed_pct": 0.08179419525065963,
            "run_instit_pct": 0.16886543535620052,
            "run_unclear_pct": 0.35092348284960423,
            "avg_trade_size": 2828.8260580411124,
            "avg_run_notional": 6172.662664907652,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0158311345646438,
            "medium_confidence_pct": 0.32189973614775724,
            "low_confidence_pct": 0.22955145118733508,
            "na_confidence_pct": 0.43271767810026385,
            "avg_feature_coverage": 0.8351583113456463,
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
            "retail_pct": 0.6578947368421053,
            "mixed_pct": 0.14473684210526316,
            "instit_pct": 0.09210526315789473,
            "ambiguous_pct": 0.10526315789473684,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.10526315789473684,
            "retail_qty_pct": 0.08607046070460704,
            "mixed_qty_pct": 0.06796747967479674,
            "instit_qty_pct": 0.4540921409214092,
            "ambiguous_qty_pct": 0.39186991869918697,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.39186991869918697,
            "retail_notional_pct": 0.08573301505884073,
            "mixed_notional_pct": 0.06836546547644543,
            "instit_notional_pct": 0.4540948242090583,
            "ambiguous_notional_pct": 0.39180669525565553,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.39180669525565553,
            "run_retail_pct": 0.7351190476190477,
            "run_mixed_pct": 0.13988095238095238,
            "run_instit_pct": 0.03869047619047619,
            "run_unclear_pct": 0.08630952380952381,
            "avg_trade_size": 503.81315789473683,
            "avg_run_notional": 569.7886904761905,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.5863095238095238,
            "medium_confidence_pct": 0.13988095238095238,
            "low_confidence_pct": 0.047619047619047616,
            "na_confidence_pct": 0.2261904761904762,
            "avg_feature_coverage": 0.8486607142857142,
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
            "retail_pct": 0.2965065502183406,
            "mixed_pct": 0.15676855895196506,
            "instit_pct": 0.359825327510917,
            "ambiguous_pct": 0.1868995633187773,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1868995633187773,
            "retail_qty_pct": 0.07831085487773545,
            "mixed_qty_pct": 0.17753415530038877,
            "instit_qty_pct": 0.4742638858694885,
            "ambiguous_qty_pct": 0.26989110395238725,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.26989110395238725,
            "retail_notional_pct": 0.07804109591912953,
            "mixed_notional_pct": 0.17865628581756823,
            "instit_notional_pct": 0.4762156222474662,
            "ambiguous_notional_pct": 0.267086996015836,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.267086996015836,
            "run_retail_pct": 0.5638575152041703,
            "run_mixed_pct": 0.1416159860990443,
            "run_instit_pct": 0.15117289313640314,
            "run_unclear_pct": 0.14335360556038226,
            "avg_trade_size": 3645.1626637554587,
            "avg_run_notional": 7252.321894005213,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.06516072980017376,
            "medium_confidence_pct": 0.38922675933970463,
            "low_confidence_pct": 0.26064291920069504,
            "na_confidence_pct": 0.2849695916594266,
            "avg_feature_coverage": 0.8481754995655951,
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
            "retail_pct": 0.2125,
            "mixed_pct": 0.0375,
            "instit_pct": 0.3333333333333333,
            "ambiguous_pct": 0.3875,
            "unobservable_pct": 0.029166666666666667,
            "unclear_pct": 0.4166666666666667,
            "retail_qty_pct": 0.06190536597741977,
            "mixed_qty_pct": 0.014080933654699987,
            "instit_qty_pct": 0.5320309526829887,
            "ambiguous_qty_pct": 0.37891665609539515,
            "unobservable_qty_pct": 0.013066091589496384,
            "unclear_qty_pct": 0.39198274768489155,
            "retail_notional_pct": 0.06254108072424693,
            "mixed_notional_pct": 0.013846610100618367,
            "instit_notional_pct": 0.5307544024991339,
            "ambiguous_notional_pct": 0.3801391005798709,
            "unobservable_notional_pct": 0.012718806096129964,
            "unclear_notional_pct": 0.39285790667600085,
            "run_retail_pct": 0.31645569620253167,
            "run_mixed_pct": 0.04430379746835443,
            "run_instit_pct": 0.2088607594936709,
            "run_unclear_pct": 0.43037974683544306,
            "avg_trade_size": 2922.3458333333333,
            "avg_run_notional": 4439.006329113924,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Mixed, mostly unclassified",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5253164556962026,
            "na_confidence_pct": 0.47468354430379744,
            "avg_feature_coverage": 0.8177215189873415,
            "observable_run_pct": 0.9810126582278481,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "QS9",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.21305386044043512,
            "mixed_pct": 0.09312815070310428,
            "instit_pct": 0.3926771026797559,
            "ambiguous_pct": 0.3006102414433537,
            "unobservable_pct": 0.0005306447333510214,
            "unclear_pct": 0.3011408861767047,
            "retail_qty_pct": 0.06130298660158513,
            "mixed_qty_pct": 0.09277015617103625,
            "instit_qty_pct": 0.5077666432471742,
            "ambiguous_qty_pct": 0.3381589813753405,
            "unobservable_qty_pct": 1.2326048638587928e-06,
            "unclear_qty_pct": 0.33816021398020435,
            "retail_notional_pct": 0.06035665811126659,
            "mixed_notional_pct": 0.09216384350176283,
            "instit_notional_pct": 0.508687880029618,
            "ambiguous_notional_pct": 0.33879031893976086,
            "unobservable_notional_pct": 1.2994175916796025e-06,
            "unclear_notional_pct": 0.33879161835735255,
            "run_retail_pct": 0.4311526479750779,
            "run_mixed_pct": 0.10093457943925234,
            "run_instit_pct": 0.17881619937694704,
            "run_unclear_pct": 0.28909657320872273,
            "avg_trade_size": 2552.320058370921,
            "avg_run_notional": 5993.579003115266,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.029906542056074768,
            "medium_confidence_pct": 0.30778816199376946,
            "low_confidence_pct": 0.2722741433021807,
            "na_confidence_pct": 0.39003115264797505,
            "avg_feature_coverage": 0.8435514018691588,
            "observable_run_pct": 0.9993769470404984,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "9MT",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2644426362896664,
            "mixed_pct": 0.1027935991320857,
            "instit_pct": 0.305939788445891,
            "ambiguous_pct": 0.3186872796311364,
            "unobservable_pct": 0.008136696501220505,
            "unclear_pct": 0.3268239761323569,
            "retail_qty_pct": 0.055215547323777314,
            "mixed_qty_pct": 0.08132012669780427,
            "instit_qty_pct": 0.49343694636817526,
            "ambiguous_qty_pct": 0.3574381274494014,
            "unobservable_qty_pct": 0.012589252160841788,
            "unclear_qty_pct": 0.3700273796102432,
            "retail_notional_pct": 0.05542307798400314,
            "mixed_notional_pct": 0.08389974232663167,
            "instit_notional_pct": 0.49007331341572413,
            "ambiguous_notional_pct": 0.360205238248785,
            "unobservable_notional_pct": 0.01039862802485611,
            "unclear_notional_pct": 0.37060386627364106,
            "run_retail_pct": 0.4935897435897436,
            "run_mixed_pct": 0.09134615384615384,
            "run_instit_pct": 0.14155982905982906,
            "run_unclear_pct": 0.2735042735042735,
            "avg_trade_size": 2138.5903173311635,
            "avg_run_notional": 4212.063301282052,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.01014957264957265,
            "medium_confidence_pct": 0.38621794871794873,
            "low_confidence_pct": 0.2387820512820513,
            "na_confidence_pct": 0.36485042735042733,
            "avg_feature_coverage": 0.8456463675213673,
            "observable_run_pct": 0.9962606837606838,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2697786333012512,
            "mixed_pct": 0.15563041385948026,
            "instit_pct": 0.31405197305101057,
            "ambiguous_pct": 0.2595765158806545,
            "unobservable_pct": 0.0009624639076034649,
            "unclear_pct": 0.26053897978825796,
            "retail_qty_pct": 0.08175813926680447,
            "mixed_qty_pct": 0.12336946127707958,
            "instit_qty_pct": 0.4634332288007042,
            "ambiguous_qty_pct": 0.3305012588453205,
            "unobservable_qty_pct": 0.0009379118100911975,
            "unclear_qty_pct": 0.3314391706554117,
            "retail_notional_pct": 0.08256393922543974,
            "mixed_notional_pct": 0.12422389521243014,
            "instit_notional_pct": 0.4674934850502937,
            "ambiguous_notional_pct": 0.32475873790531046,
            "unobservable_notional_pct": 0.00095994260652596,
            "unclear_notional_pct": 0.32571868051183644,
            "run_retail_pct": 0.5737097894006017,
            "run_mixed_pct": 0.1469567229807915,
            "run_instit_pct": 0.1221939365887526,
            "run_unclear_pct": 0.1571395510298542,
            "avg_trade_size": 3687.158999037536,
            "avg_run_notional": 8865.906503124277,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.14741957880120343,
            "medium_confidence_pct": 0.37259893543161304,
            "low_confidence_pct": 0.17588521175653785,
            "na_confidence_pct": 0.3040962740106457,
            "avg_feature_coverage": 0.8671140939597315,
            "observable_run_pct": 0.9997685720897941,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.6189320388349514,
            "mixed_pct": 0.1407766990291262,
            "instit_pct": 0.10436893203883495,
            "ambiguous_pct": 0.13592233009708737,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.13592233009708737,
            "retail_qty_pct": 0.07915108289118901,
            "mixed_qty_pct": 0.06236409498129947,
            "instit_qty_pct": 0.41619552926850484,
            "ambiguous_qty_pct": 0.4422892928590067,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.4422892928590067,
            "retail_notional_pct": 0.07850910332977963,
            "mixed_notional_pct": 0.06232494591825117,
            "instit_notional_pct": 0.41399190585117945,
            "ambiguous_notional_pct": 0.44517404490078977,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.44517404490078977,
            "run_retail_pct": 0.7019498607242339,
            "run_mixed_pct": 0.13649025069637882,
            "run_instit_pct": 0.04456824512534819,
            "run_unclear_pct": 0.116991643454039,
            "avg_trade_size": 586.2439320388349,
            "avg_run_notional": 672.7924791086351,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.5487465181058496,
            "medium_confidence_pct": 0.1309192200557103,
            "low_confidence_pct": 0.06685236768802229,
            "na_confidence_pct": 0.25348189415041783,
            "avg_feature_coverage": 0.8449860724233981,
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
            "retail_pct": 0.09523809523809523,
            "mixed_pct": 0.11904761904761904,
            "instit_pct": 0.40476190476190477,
            "ambiguous_pct": 0.30952380952380953,
            "unobservable_pct": 0.07142857142857142,
            "unclear_pct": 0.38095238095238093,
            "retail_qty_pct": 0.01685682738314317,
            "mixed_qty_pct": 0.015384615384615385,
            "instit_qty_pct": 0.13860875966139125,
            "ambiguous_qty_pct": 0.08568273831431726,
            "unobservable_qty_pct": 0.7434670592565329,
            "unclear_qty_pct": 0.8291497975708502,
            "retail_notional_pct": 0.01682442949063203,
            "mixed_notional_pct": 0.015171558380279013,
            "instit_notional_pct": 0.13535095468834155,
            "ambiguous_notional_pct": 0.08362155833392818,
            "unobservable_notional_pct": 0.7490314991068192,
            "unclear_notional_pct": 0.8326530574407474,
            "run_retail_pct": 0.13333333333333333,
            "run_mixed_pct": 0.13333333333333333,
            "run_instit_pct": 0.3333333333333333,
            "run_unclear_pct": 0.39999999999999997,
            "avg_trade_size": 12842.011904761905,
            "avg_run_notional": 17978.816666666666,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed, leaning institution-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.4666666666666667,
            "na_confidence_pct": 0.5333333333333333,
            "avg_feature_coverage": 0.796666666666667,
            "observable_run_pct": 0.9333333333333333,
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
          "trade_id": "BMLL-60",
          "timestamp": "2026-03-11T08:56:06.731600",
          "price": 0.235,
          "size": 1000.0,
          "notional": 235.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 3618,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-59",
          "timestamp": "2026-03-11T08:53:29.285300",
          "price": 0.235,
          "size": 19900.0,
          "notional": 4676.5,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 3617,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-58",
          "timestamp": "2026-03-11T08:01:33.932700",
          "price": 0.24,
          "size": 100.0,
          "notional": 24.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 3616,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-57",
          "timestamp": "2026-03-11T08:00:00.037600",
          "price": 0.235,
          "size": 2100.0,
          "notional": 493.5,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 3615,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-56",
          "timestamp": "2026-03-11T07:49:46.829000",
          "price": 0.235,
          "size": 900.0,
          "notional": 211.5,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 3614,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-55",
          "timestamp": "2026-03-11T07:08:39.980200",
          "price": 0.235,
          "size": 3900.0,
          "notional": 916.5,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 3613,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-54",
          "timestamp": "2026-03-11T07:08:39.980200",
          "price": 0.235,
          "size": 2400.0,
          "notional": 564.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 3613,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-53",
          "timestamp": "2026-03-11T07:08:13.496900",
          "price": 0.235,
          "size": 500.0,
          "notional": 117.5,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 3612,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-52",
          "timestamp": "2026-03-11T07:08:13.496800",
          "price": 0.235,
          "size": 600.0,
          "notional": 141.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 3612,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-51",
          "timestamp": "2026-03-11T07:08:13.496800",
          "price": 0.235,
          "size": 8900.0,
          "notional": 2091.5,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 3612,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-50",
          "timestamp": "2026-03-11T07:08:13.496800",
          "price": 0.235,
          "size": 50000.0,
          "notional": 11750.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 3612,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-49",
          "timestamp": "2026-03-11T07:08:13.496800",
          "price": 0.235,
          "size": 10000.0,
          "notional": 2350.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 3612,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-48",
          "timestamp": "2026-03-11T07:08:13.496700",
          "price": 0.235,
          "size": 5000.0,
          "notional": 1175.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 3612,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-47",
          "timestamp": "2026-03-11T07:08:13.496700",
          "price": 0.235,
          "size": 2500.0,
          "notional": 587.5,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 3612,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-46",
          "timestamp": "2026-03-11T07:08:13.496700",
          "price": 0.235,
          "size": 30000.0,
          "notional": 7050.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 3612,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-45",
          "timestamp": "2026-03-11T07:08:13.496700",
          "price": 0.235,
          "size": 30000.0,
          "notional": 7050.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 3612,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-44",
          "timestamp": "2026-03-11T07:08:13.496700",
          "price": 0.235,
          "size": 13600.0,
          "notional": 3196.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 3612,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-43",
          "timestamp": "2026-03-11T05:34:43.748600",
          "price": 0.23,
          "size": 1900.0,
          "notional": 437.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 3611,
          "d1": "SINGLE_FILL",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-42",
          "timestamp": "2026-03-11T05:34:34.682900",
          "price": 0.23,
          "size": 28100.0,
          "notional": 6463.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 3610,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-41",
          "timestamp": "2026-03-11T05:34:19.703700",
          "price": 0.23,
          "size": 600.0,
          "notional": 138.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 3609,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-40",
          "timestamp": "2026-03-11T05:34:19.703600",
          "price": 0.23,
          "size": 9000.0,
          "notional": 2070.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 3609,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-39",
          "timestamp": "2026-03-11T05:33:11.090100",
          "price": 0.23,
          "size": 27000.0,
          "notional": 6210.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 3608,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-38",
          "timestamp": "2026-03-11T05:33:11.090100",
          "price": 0.23,
          "size": 10000.0,
          "notional": 2300.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 3608,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-37",
          "timestamp": "2026-03-11T05:33:11.090100",
          "price": 0.23,
          "size": 40000.0,
          "notional": 9200.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 3608,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-36",
          "timestamp": "2026-03-11T05:33:11.090100",
          "price": 0.23,
          "size": 20000.0,
          "notional": 4600.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 3608,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-35",
          "timestamp": "2026-03-11T05:33:11.090100",
          "price": 0.23,
          "size": 14600.0,
          "notional": 3358.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 3608,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-34",
          "timestamp": "2026-03-11T05:33:11.090100",
          "price": 0.23,
          "size": 20000.0,
          "notional": 4600.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 3608,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-33",
          "timestamp": "2026-03-11T05:33:11.090000",
          "price": 0.23,
          "size": 26700.0,
          "notional": 6141.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 3608,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-32",
          "timestamp": "2026-03-11T05:33:11.090000",
          "price": 0.23,
          "size": 32100.0,
          "notional": 7383.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 3608,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-31",
          "timestamp": "2026-03-11T05:01:45.759500",
          "price": 0.23,
          "size": 2300.0,
          "notional": 529.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 3607,
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
      "total_trades": 2289,
      "price_moving_trades": 365,
      "pct_price_moving": 15.945827872433377,
      "all_movers": {
        "count": 365,
        "avg_size": 3122.890410958904,
        "median_size": 220.0,
        "retail_count": 225,
        "mixed_count": 46,
        "institutional_count": 51,
        "ambiguous_count": 43,
        "unobservable_count": 0,
        "retail_pct": 61.64383561643836,
        "mixed_pct": 12.602739726027398,
        "instit_pct": 13.972602739726028,
        "unclear_pct": 11.78082191780822
      },
      "positive_movers": {
        "count": 185,
        "avg_size": 1050.3297297297297,
        "median_size": 25.0,
        "retail_count": 151,
        "mixed_count": 16,
        "institutional_count": 14,
        "ambiguous_count": 4,
        "unobservable_count": 0,
        "retail_pct": 81.62162162162161,
        "mixed_pct": 8.64864864864865,
        "instit_pct": 7.567567567567568,
        "unclear_pct": 2.1621621621621623
      },
      "negative_movers": {
        "count": 180,
        "avg_size": 5253.022222222222,
        "median_size": 2325.0,
        "retail_count": 74,
        "mixed_count": 30,
        "institutional_count": 37,
        "ambiguous_count": 39,
        "unobservable_count": 0,
        "retail_pct": 41.11111111111111,
        "mixed_pct": 16.666666666666664,
        "instit_pct": 20.555555555555554,
        "unclear_pct": 21.666666666666668
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
            "date": "2026-03-11",
            "short_ratio": 0.0,
            "short_vol": 0,
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
          "avg_short_ratio": 0.0028798631596417155,
          "max_short_ratio": 0.1385606874328679,
          "is_target": false
        },
        {
          "ticker": "9MT",
          "avg_short_ratio": 0.01260078463276577,
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
          "opening": 0.018678309986765833,
          "continuous": 0.9623717271972001,
          "closing": 0.011762646706387643,
          "auctions": 0.037628272802799845,
          "other": 0.0
        },
        "1W": {
          "opening": 0.009998576704351402,
          "continuous": 0.97788956850671,
          "closing": 0.009381113137560472,
          "auctions": 0.022110431493289895,
          "other": 0.0
        },
        "2W": {
          "opening": 0.023098679828173107,
          "continuous": 0.9652635360883681,
          "closing": 0.006514054034208028,
          "auctions": 0.03473646391163188,
          "other": 0.0
        },
        "1M": {
          "opening": 0.013661762210685869,
          "continuous": 0.9628383619588403,
          "closing": 0.018020672005706378,
          "auctions": 0.03716163804115969,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.19857938469342126,
        "1W": 0.1872984412777862,
        "2W": 0.2098406083723526,
        "1M": 0.21763203981264995
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.0188
        },
        {
          "time": "09:00",
          "avg_share": 0.1038
        },
        {
          "time": "09:30",
          "avg_share": 0.1017
        },
        {
          "time": "10:00",
          "avg_share": 0.0723
        },
        {
          "time": "10:30",
          "avg_share": 0.063
        },
        {
          "time": "11:00",
          "avg_share": 0.0326
        },
        {
          "time": "11:30",
          "avg_share": 0.0504
        },
        {
          "time": "12:00",
          "avg_share": 0.0025
        },
        {
          "time": "12:30",
          "avg_share": 0.0359
        },
        {
          "time": "13:00",
          "avg_share": 0.0641
        },
        {
          "time": "13:30",
          "avg_share": 0.0603
        },
        {
          "time": "14:00",
          "avg_share": 0.0614
        },
        {
          "time": "14:30",
          "avg_share": 0.0609
        },
        {
          "time": "15:00",
          "avg_share": 0.0599
        },
        {
          "time": "15:30",
          "avg_share": 0.0681
        },
        {
          "time": "16:00",
          "avg_share": 0.0581
        },
        {
          "time": "16:30",
          "avg_share": 0.0622
        },
        {
          "time": "17:00",
          "avg_share": 0.024
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "TKU",
          "auctions_pct": 7.141904115778659,
          "hhi": 0.19303692218272728,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400",
            "you": true
          }
        },
        {
          "ticker": "ITS",
          "auctions_pct": 5.760612304160037,
          "hhi": 0.24729743236199378,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "LVR",
          "auctions_pct": 2.6366008754874137,
          "hhi": 0.3477983998674969,
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
          "auctions_pct": 8.350128821390538,
          "hhi": 0.50655960308956,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "532",
          "auctions_pct": 7.931463041446259,
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
          "auctions_pct": 4.784000338966278,
          "hhi": 0.1727664342139736,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "QS9",
          "auctions_pct": 5.985591565075176,
          "hhi": 0.45478523991737246,
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
