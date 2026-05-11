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
      "marketCap": 136857901.2,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "KUX",
      "name": "OIO",
      "marketCap": 9857201.58,
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
      "ticker": "U77",
      "name": "Sarine Tech",
      "marketCap": 67759310.353,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "J03",
      "name": "Jadason",
      "marketCap": 26309875.0,
      "sector": "Electronic Components",
      "industry": "Technology"
    },
    {
      "ticker": "NXR",
      "name": "iWOW Tech",
      "marketCap": 98736916.8,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "42F",
      "name": "Totm Tech",
      "marketCap": 46499709.096,
      "sector": "Software - Infrastructure",
      "industry": "Technology"
    },
    {
      "ticker": "LVR",
      "name": "17LIVE GROUP",
      "marketCap": 154942584.795,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "ITS",
      "name": "Info-Tech",
      "marketCap": 254130000.0,
      "sector": "Software - Application",
      "industry": "Technology"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XSES",
    "currency": "SGD",
    "ticker": "TKU",
    "company": "Toku Ltd",
    "asof_date": "2026-04-28",
    "industry": "Technology",
    "sector": "Software - Application",
    "market_cap_display": "136.9M",
    "market_cap_category": "small",
    "universe_total": 558,
    "peers_count": 8,
    "page_title_template": "Liquidity Analysis Report — {market}/{ticker} — {asof}"
  },
  "q01": {
    "primary_liquidity_period": "3m",
    "periods": {
      "1d": {
        "label": "1D",
        "window_days": 1,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 1,
          "score_pca": 60.57347670250897,
          "score_pca_percentile": 60.57347670250897,
          "rank_pca": 221,
          "total": 558,
          "adv_notional_sgd": 100200.0,
          "adv_volume_shares": 417500.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0007321462562367572,
          "votes": 27.0,
          "trades": 27.0,
          "spread_pct": 0.0235206272167258,
          "spread_ticks": 1.125,
          "amihud": 2.0367428408489168e-07,
          "volatility": 0.19657631614338103
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5141804305552533,
          "loadings": {
            "log_adv": 0.5542231385348587,
            "log_trades": 0.5069491229079468,
            "log_turnover": 0.5144170406347646,
            "neg_spread": 0.36822541705449835,
            "neg_amihud": 0.05202914150579509,
            "neg_vol": -0.18143158068323129
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
          "peer_median_adv": 9428.0,
          "peer_median_score_pca": 59.40860215053763,
          "peer_median_trades": 38.0,
          "peer_median_volatility": 0.3605255723424869,
          "peer_median_spread_pct": 0.03195285805436006,
          "peer_median_spread_ticks": 1.7259101941747574,
          "peer_median_amihud": 1.9253151018828551e-07,
          "peer_median_turnover_ratio": 0.00019629014296467044,
          "target_vs_peer": {
            "score_pca_delta": 1.16,
            "adv_delta_pct": 962.8,
            "trades_delta_pct": -28.95,
            "volatility_delta_pct": 45.48,
            "spread_pct_delta_pct": 26.39,
            "spread_ticks_delta_pct": -34.82,
            "amihud_delta_pct": -5.79,
            "turnover_ratio_delta_pct": 272.99
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 60.57347670250897,
            "rank_pca": 221,
            "adv": 100200.0,
            "trades": 27.0,
            "volatility": 0.19657631614338103,
            "spread_pct": 0.0235206272167258,
            "spread_ticks": 1.125,
            "amihud": 2.0367428408489168e-07,
            "turnover_ratio": 0.0007321462562367572,
            "is_target": true
          },
          {
            "ticker": "KUX",
            "score_pca": 5.913978494623656,
            "rank_pca": 526,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.412532637075718,
            "spread_ticks": 19.75,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 76.52329749103941,
            "rank_pca": 132,
            "adv": 2178.6,
            "trades": 142.0,
            "volatility": 6.608197362010048,
            "spread_pct": 0.6666666666666666,
            "spread_ticks": 1.0,
            "amihud": 0.00022950518681722208,
            "turnover_ratio": 0.00023617298819401944,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 43.18996415770609,
            "rank_pca": 318,
            "adv": 10049.5,
            "trades": 5.0,
            "volatility": 0.19260480449945006,
            "spread_pct": 0.0179674340258282,
            "spread_ticks": 3.5555555555555554,
            "amihud": 4.975371909050206e-07,
            "turnover_ratio": 0.00015640729773532143,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 75.62724014336918,
            "rank_pca": 137,
            "adv": 199767.5,
            "trades": 67.0,
            "volatility": 0.763096243526681,
            "spread_pct": 0.04272497897392762,
            "spread_ticks": 1.0672268907563025,
            "amihud": 1.9253151018828551e-07,
            "turnover_ratio": 0.013662796352066374,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 35.12544802867383,
            "rank_pca": 363,
            "adv": 852.0,
            "trades": 4.0,
            "volatility": 0.13333942619119857,
            "spread_pct": 0.030513176144244137,
            "spread_ticks": 2.2,
            "amihud": 3.215640877226831e-05,
            "turnover_ratio": 4.271777915392312e-05,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 77.41935483870968,
            "rank_pca": 127,
            "adv": 375021.0,
            "trades": 90.0,
            "volatility": 0.6358097924814912,
            "spread_pct": 0.033392539964475984,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.015243921957587515,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 42.65232974910394,
            "rank_pca": 321,
            "adv": 8806.5,
            "trades": 9.0,
            "volatility": 0.05558974096200875,
            "spread_pct": 0.01938386985115959,
            "spread_ticks": 3.2941176470588234,
            "amihud": 0.0,
            "turnover_ratio": 7.120463384271768e-05,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 97.67025089605734,
            "rank_pca": 14,
            "adv": 29246778.0,
            "trades": 918.0,
            "volatility": 0.5284463401855237,
            "spread_pct": 0.007183110749386515,
            "spread_ticks": 1.2518203883495145,
            "amihud": 1.3278369144221856e-09,
            "turnover_ratio": 0.4375416551883481,
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
              "mean": 0.26570591412614103,
              "median": 0.11748326289974959,
              "min": 0.0,
              "max": 6.608197362010048,
              "p5": 0.0,
              "p95": 0.9782836347279122,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3387572.5133285974,
              "median": 20125.0,
              "min": 0.0,
              "max": 177269975.0,
              "p5": 0.0,
              "p95": 18622077.399999976,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10655629017817628,
              "median": 0.027459216144492204,
              "min": 0.000296892218703868,
              "max": 1.4976744186046513,
              "p5": 0.0034732515558339658,
              "p95": 0.5309047464193306,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.015967469002548234,
              "median": 0.00040402403902629804,
              "min": 0.0,
              "max": 4.160817819204824,
              "p5": 0.0,
              "p95": 0.02031153639385566,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00023867643025840082,
              "median": 1.952364569253113e-08,
              "min": 0.0,
              "max": 0.06203473945409432,
              "p5": 0.0,
              "p95": 4.627129682149516e-05,
              "count": 429
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 543.6272401433691,
              "median": 9.0,
              "min": 0.0,
              "max": 21021.0,
              "p5": 0.0,
              "p95": 3184.499999999998,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.9922916329649158,
              "median": 0.19459056032141553,
              "min": 0.0,
              "max": 6.608197362010048,
              "p5": 0.019456409336703066,
              "p95": 4.480284504371461,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 5155474.325,
              "median": 9428.0,
              "min": 0.0,
              "max": 29246778.0,
              "p5": 298.20000000000005,
              "p95": 23166631.19999999,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.147378237221165,
              "median": 0.021452248533942696,
              "min": 0.001258376039591141,
              "max": 0.6666666666666666,
              "p5": 0.003332033188019522,
              "p95": 0.5777197563098345,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.05583080334333293,
              "median": 0.00019629014296467044,
              "min": 0.0,
              "max": 0.4375416551883481,
              "p5": 1.4951222703873094e-05,
              "p95": 0.28715521878352945,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.748063134258473e-05,
              "median": 2.0367428408489168e-07,
              "min": 0.0,
              "max": 0.00022950518681722208,
              "p5": 8.534900951109213e-11,
              "p95": 0.0001703005534037358,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 401.625,
              "median": 18.0,
              "min": 0.0,
              "max": 2108.0,
              "p5": 1.4000000000000001,
              "p95": 1691.4999999999993,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 3730431.6375,
              "median": 9428.0,
              "min": 0.0,
              "max": 29246778.0,
              "p5": 298.20000000000005,
              "p95": 19141663.049999982,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 154.375,
              "median": 38.0,
              "min": 0.0,
              "max": 918.0,
              "p5": 1.4000000000000001,
              "p95": 646.3999999999996,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.1146354637320501,
              "median": 0.3605255723424869,
              "min": 0.0,
              "max": 6.608197362010048,
              "p5": 0.019456409336703066,
              "p95": 4.562411970540866,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15379555168142583,
              "median": 0.03195285805436006,
              "min": 0.007183110749386515,
              "max": 0.6666666666666666,
              "p5": 0.010957623896141105,
              "p95": 0.5777197563098345,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 4.1398400602150245,
              "median": 1.7259101941747574,
              "min": 1.0,
              "max": 19.75,
              "p5": 1.0,
              "p95": 14.081944444444435,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.05836935952461599,
              "median": 0.00019629014296467044,
              "min": 0.0,
              "max": 0.4375416551883481,
              "p5": 1.4951222703873094e-05,
              "p95": 0.28973744855758166,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.7478998875356875e-05,
              "median": 1.9253151018828551e-07,
              "min": 0.0,
              "max": 0.00022950518681722208,
              "p5": 0.0,
              "p95": 0.0001703005534037358,
              "count": 7
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": -0.020408163265306145,
            "market": -0.0010301077481527088,
            "sector": -0.01270408163265313,
            "peers": -0.016198630136986303,
            "vs_market": -0.019378055517153436,
            "vs_sector": -0.007704081632653015,
            "vs_peers": -0.004209533128319842
          }
        }
      },
      "1w": {
        "label": "1W",
        "window_days": 5,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 5,
          "score_pca": 74.55197132616487,
          "score_pca_percentile": 74.55197132616487,
          "rank_pca": 143,
          "total": 558,
          "adv_notional_sgd": 462609.0,
          "adv_volume_shares": 1814600.0,
          "free_float_shares": null,
          "turnover_ratio": 0.003182161907945436,
          "votes": 74.0,
          "trades": 74.0,
          "spread_pct": 0.0235206272167258,
          "spread_ticks": 1.1611111111111112,
          "amihud": 4.3233054263968095e-08,
          "volatility": 0.279937638778738
        },
        "pca": {
          "valid": true,
          "window_days": 5,
          "variance_explained": 0.5083805001204567,
          "loadings": {
            "log_adv": 0.5576583059725807,
            "log_trades": 0.510318453270362,
            "log_turnover": 0.5083161887567086,
            "neg_spread": 0.398031487710963,
            "neg_amihud": 0.09602329156975443,
            "neg_vol": 0.050570787477543504
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
          "peer_median_adv": 13085.0,
          "peer_median_score_pca": 46.32616487455197,
          "peer_median_trades": 17.0,
          "peer_median_volatility": 0.5372795642069266,
          "peer_median_spread_pct": 0.03320414867308902,
          "peer_median_spread_ticks": 1.6218487394957983,
          "peer_median_amihud": 2.7179271488562305e-06,
          "peer_median_turnover_ratio": 0.00026907725045313295,
          "target_vs_peer": {
            "score_pca_delta": 28.23,
            "adv_delta_pct": 3435.4,
            "trades_delta_pct": 335.29,
            "volatility_delta_pct": 47.9,
            "spread_pct_delta_pct": 29.16,
            "spread_ticks_delta_pct": -28.41,
            "amihud_delta_pct": 98.41,
            "turnover_ratio_delta_pct": 1082.62
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 74.55197132616487,
            "rank_pca": 143,
            "adv": 462609.0,
            "trades": 74.0,
            "volatility": 0.279937638778738,
            "spread_pct": 0.0235206272167258,
            "spread_ticks": 1.1611111111111112,
            "amihud": 4.3233054263968095e-08,
            "turnover_ratio": 0.003182161907945436,
            "is_target": true
          },
          {
            "ticker": "KUX",
            "score_pca": 3.405017921146954,
            "rank_pca": 540,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 7.93469924938178,
            "spread_pct": 0.412532637075718,
            "spread_ticks": 19.75,
            "amihud": 0.00020127517325246142,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 23.297491039426525,
            "rank_pca": 429,
            "adv": 3370.0,
            "trades": 25.0,
            "volatility": 8.694826047713663,
            "spread_pct": 0.6666666666666666,
            "spread_ticks": 1.0,
            "amihud": 4.53043820210466e-06,
            "turnover_ratio": 0.00036532771973462106,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 41.21863799283154,
            "rank_pca": 329,
            "adv": 3920.0,
            "trades": 4.0,
            "volatility": 0.36009298956152214,
            "spread_pct": 0.017821518818991904,
            "spread_ticks": 3.1666666666666665,
            "amihud": 5.102040816326535e-06,
            "turnover_ratio": 6.194348425161246e-05,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 76.16487455197132,
            "rank_pca": 134,
            "adv": 370152.8,
            "trades": 112.0,
            "volatility": 1.445677762300699,
            "spread_pct": 0.04450877510403476,
            "spread_ticks": 1.0672268907563025,
            "amihud": 1.9253151018828551e-07,
            "turnover_ratio": 0.027517436441314953,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 31.899641577060933,
            "rank_pca": 381,
            "adv": 639.0,
            "trades": 2.0,
            "volatility": 0.42531591139107383,
            "spread_pct": 0.030044660982541643,
            "spread_ticks": 2.176470588235294,
            "amihud": 3.215640877226831e-05,
            "turnover_ratio": 3.2038334365442344e-05,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 74.73118279569893,
            "rank_pca": 142,
            "adv": 348468.0,
            "trades": 69.0,
            "volatility": 0.6492432170227793,
            "spread_pct": 0.03636363636363639,
            "spread_ticks": 1.0,
            "amihud": 9.118963998147742e-08,
            "turnover_ratio": 0.014164590774160931,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 51.4336917562724,
            "rank_pca": 272,
            "adv": 22250.0,
            "trades": 9.0,
            "volatility": 0.4003721077215054,
            "spread_pct": 0.01976794155565107,
            "spread_ticks": 3.533333333333333,
            "amihud": 9.054160956078003e-07,
            "turnover_ratio": 0.00017282678117164487,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 84.40860215053763,
            "rank_pca": 88,
            "adv": 1023880.0,
            "trades": 500.0,
            "volatility": 0.2017133754753498,
            "spread_pct": 0.01013835115561731,
            "spread_ticks": 1.0607267297162768,
            "amihud": 1.0350731643536332e-08,
            "turnover_ratio": 0.013968002891055206,
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
              "mean": 0.5289295031237139,
              "median": 0.27967541694850223,
              "min": 0.0,
              "max": 8.694826047713663,
              "p5": 0.0,
              "p95": 1.876229188465062,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3347766.12774887,
              "median": 19319.0,
              "min": 0.0,
              "max": 255589391.20000002,
              "p5": 0.0,
              "p95": 16148004.199999996,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10591884086380181,
              "median": 0.027774991081669802,
              "min": 0.0002705286818559187,
              "max": 1.2394366197183098,
              "p5": 0.0033068378326840046,
              "p95": 0.534688995215311,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.015596659708969226,
              "median": 0.00043248184705500526,
              "min": 0.0,
              "max": 4.160817819204824,
              "p5": 0.0,
              "p95": 0.017759229988536032,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0002213220283937297,
              "median": 7.431988963482442e-08,
              "min": 0.0,
              "max": 0.06203473945409432,
              "p5": 0.0,
              "p95": 0.00015534471853257382,
              "count": 514
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 499.14695340501794,
              "median": 9.0,
              "min": 0.0,
              "max": 13883.0,
              "p5": 0.0,
              "p95": 2639.749999999995,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 2.3299129716316576,
              "median": 0.3802325486415138,
              "min": 0.2017133754753498,
              "max": 8.694826047713663,
              "p5": 0.22909186763153566,
              "p95": 8.428781668297503,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1717543.5,
              "median": 13085.0,
              "min": 0.0,
              "max": 12223680.0,
              "p5": 223.65000000000003,
              "p95": 8303749.999999994,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.14771884743893796,
              "median": 0.021644284386188435,
              "min": 0.001258376039591141,
              "max": 0.6666666666666666,
              "p5": 0.004366367330200301,
              "p95": 0.5777197563098345,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003206052965209575,
              "median": 0.00026907725045313295,
              "min": 0.0,
              "max": 0.013968002891055206,
              "p5": 1.1213417027904821e-05,
              "p95": 0.011832344790289304,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.050298902656519e-05,
              "median": 2.7179271488562305e-06,
              "min": 8.512878452780848e-10,
              "max": 0.00020127517325246142,
              "p5": 4.176093174668472e-09,
              "p95": 0.00014208360568439374,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 398.875,
              "median": 17.0,
              "min": 0.0,
              "max": 2577.0,
              "p5": 0.7000000000000001,
              "p95": 1850.0499999999988,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 221584.975,
              "median": 13085.0,
              "min": 0.0,
              "max": 1023880.0,
              "p5": 223.65000000000003,
              "p95": 795075.4799999996,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 90.125,
              "median": 17.0,
              "min": 0.0,
              "max": 500.0,
              "p5": 0.7000000000000001,
              "p95": 364.1999999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 2.513992582571047,
              "median": 0.5372795642069266,
              "min": 0.2017133754753498,
              "max": 8.694826047713663,
              "p5": 0.2571462404055101,
              "p95": 8.428781668297503,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1547305234653572,
              "median": 0.03320414867308902,
              "min": 0.01013835115561731,
              "max": 0.6666666666666666,
              "p5": 0.012827459837798417,
              "p95": 0.5777197563098345,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 4.094303026088484,
              "median": 1.6218487394957983,
              "min": 1.0,
              "max": 19.75,
              "p5": 1.0,
              "p95": 14.074166666666656,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.053294362757275e-05,
              "median": 2.7179271488562305e-06,
              "min": 1.0350731643536332e-08,
              "max": 0.00020127517325246142,
              "p5": 3.864434956181572e-08,
              "p95": 0.00014208360568439374,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.007035270803256801,
              "median": 0.00026907725045313295,
              "min": 0.0,
              "max": 0.027517436441314953,
              "p5": 1.1213417027904821e-05,
              "p95": 0.02284394045781104,
              "count": 8
            }
          },
          "returns": {
            "window_days": 5,
            "n_obs": 5,
            "stock": -0.05882352941176494,
            "market": -0.025378072910368532,
            "sector": -0.040367391021052246,
            "peers": -0.04516625043731681,
            "vs_market": -0.03344545650139641,
            "vs_sector": -0.018456138390712695,
            "vs_peers": -0.013657278974448128
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 71.32616487455196,
          "score_pca_percentile": 71.32616487455196,
          "rank_pca": 161,
          "total": 558,
          "adv_notional_sgd": 188278.0,
          "adv_volume_shares": 818600.0,
          "free_float_shares": null,
          "turnover_ratio": 0.001435532755342298,
          "votes": 50.0,
          "trades": 50.0,
          "spread_pct": 0.0235206272167258,
          "spread_ticks": 1.1071428571428572,
          "amihud": 6.348843558145879e-08,
          "volatility": 0.5651810863532869
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.531475747145897,
          "loadings": {
            "log_adv": 0.5379970920696109,
            "log_trades": 0.4912035099048738,
            "log_turnover": 0.4868026874805434,
            "neg_spread": 0.42032401331432223,
            "neg_amihud": 0.1252014170994708,
            "neg_vol": 0.19988424958240436
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
          "peer_median_adv": 12043.15,
          "peer_median_score_pca": 49.82078853046595,
          "peer_median_trades": 6.5,
          "peer_median_volatility": 0.4271708446234246,
          "peer_median_spread_pct": 0.03655203757006517,
          "peer_median_spread_ticks": 1.8291666666666666,
          "peer_median_amihud": 5.732115693627178e-07,
          "peer_median_turnover_ratio": 0.00012552077209279687,
          "target_vs_peer": {
            "score_pca_delta": 21.51,
            "adv_delta_pct": 1463.4,
            "trades_delta_pct": 669.23,
            "volatility_delta_pct": -32.31,
            "spread_pct_delta_pct": 35.65,
            "spread_ticks_delta_pct": -39.47,
            "amihud_delta_pct": 88.92,
            "turnover_ratio_delta_pct": 1043.66
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 71.32616487455196,
            "rank_pca": 161,
            "adv": 188278.0,
            "trades": 50.0,
            "volatility": 0.5651810863532869,
            "spread_pct": 0.0235206272167258,
            "spread_ticks": 1.1071428571428572,
            "amihud": 6.348843558145879e-08,
            "turnover_ratio": 0.001435532755342298,
            "is_target": true
          },
          {
            "ticker": "KUX",
            "score_pca": 2.1505376344086025,
            "rank_pca": 547,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 4.014372790730359,
            "spread_pct": 0.5158069883527454,
            "spread_ticks": 22.545454545454547,
            "amihud": 0.00031763779127385455,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 3.225806451612903,
            "rank_pca": 541,
            "adv": 3.0,
            "trades": 1.0,
            "volatility": 3.9496835316263,
            "spread_pct": 0.6666666666666666,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 3.252175546599001e-07,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 46.236559139784944,
            "rank_pca": 301,
            "adv": 5114.3,
            "trades": 4.0,
            "volatility": 0.3599914335150454,
            "spread_pct": 0.01765447667087013,
            "spread_ticks": 2.8181818181818183,
            "amihud": 4.0551740468860945e-06,
            "turnover_ratio": 7.9597377263322e-05,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 66.30824372759857,
            "rank_pca": 189,
            "adv": 122216.0,
            "trades": 67.0,
            "volatility": 1.5448370184692781,
            "spread_pct": 0.05925925925925924,
            "spread_ticks": 1.0449826989619377,
            "amihud": 2.3691136486490102e-07,
            "turnover_ratio": 0.013060591679735067,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 23.835125448028673,
            "rank_pca": 426,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.2544453813414664,
            "spread_pct": 0.034843205574912925,
            "spread_ticks": 2.5,
            "amihud": 4.024144869215278e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 74.01433691756273,
            "rank_pca": 146,
            "adv": 223662.6,
            "trades": 41.0,
            "volatility": 0.43784880762840406,
            "spread_pct": 0.038260869565217424,
            "spread_ticks": 1.0480769230769231,
            "amihud": 0.0,
            "turnover_ratio": 0.010101642365008637,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 53.40501792114696,
            "rank_pca": 261,
            "adv": 18972.0,
            "trades": 9.0,
            "volatility": 0.41649288161844505,
            "spread_pct": 0.01938386985115959,
            "spread_ticks": 3.0,
            "amihud": 9.095117738605346e-07,
            "turnover_ratio": 0.00017144416692227172,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 84.22939068100358,
            "rank_pca": 89,
            "adv": 844272.0,
            "trades": 358.0,
            "volatility": 0.373970430699913,
            "spread_pct": 0.01013835115561731,
            "spread_ticks": 1.1583333333333334,
            "amihud": 1.8590900468111437e-08,
            "turnover_ratio": 0.012023353564795478,
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
              "mean": 0.6547258584984103,
              "median": 0.38393267044740464,
              "min": 0.0,
              "max": 8.660254037844386,
              "p5": 0.04175623691831903,
              "p95": 2.034331191682652,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3130915.7398626376,
              "median": 13244.25,
              "min": 0.0,
              "max": 255589391.20000002,
              "p5": 0.0,
              "p95": 12669209.999999965,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10597653433862018,
              "median": 0.030626615509290064,
              "min": 0.00024245657871967925,
              "max": 1.2394366197183098,
              "p5": 0.0032976466502244593,
              "p95": 0.5117969353727052,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00429521959319098,
              "median": 0.0002660528960788684,
              "min": 0.0,
              "max": 0.8766725990376376,
              "p5": 0.0,
              "p95": 0.012403147857927217,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.8836320315655496e-05,
              "median": 1.1491061636598494e-07,
              "min": 0.0,
              "max": 0.010416666666666664,
              "p5": 0.0,
              "p95": 7.031581193629811e-05,
              "count": 542
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 465.27060931899643,
              "median": 7.0,
              "min": 0.0,
              "max": 11222.0,
              "p5": 0.0,
              "p95": 2613.3499999999995,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.281995404256212,
              "median": 0.395231656159179,
              "min": 0.2544453813414664,
              "max": 4.014372790730359,
              "p5": 0.27802849222966114,
              "p95": 3.9917315500439385,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1896224.1625000003,
              "median": 12043.15,
              "min": 0.0,
              "max": 14113154.000000002,
              "p5": 0.0,
              "p95": 9469045.299999993,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.16116617147702408,
              "median": 0.021452248533942696,
              "min": 0.0013151863274949596,
              "max": 0.6666666666666666,
              "p5": 0.0044032940173377826,
              "p95": 0.6138657792567941,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00284653729181112,
              "median": 0.00012552077209279687,
              "min": 0.0,
              "max": 0.012023353564795478,
              "p5": 0.0,
              "p95": 0.010986895655530885,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.083869407346391e-05,
              "median": 4.865001047209967e-07,
              "min": 0.0,
              "max": 0.00031763779127385455,
              "p5": 2.979507458473297e-10,
              "p95": 0.00020788387524441542,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 505.75,
              "median": 6.5,
              "min": 0.0,
              "max": 3624.0,
              "p5": 0.0,
              "p95": 2480.8999999999983,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 151779.98750000002,
              "median": 12043.15,
              "min": 0.0,
              "max": 844272.0,
              "p5": 0.0,
              "p95": 627058.7099999997,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 60.0,
              "median": 6.5,
              "min": 0.0,
              "max": 358.0,
              "p5": 0.0,
              "p95": 256.14999999999986,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.4189552844536515,
              "median": 0.4271708446234246,
              "min": 0.2544453813414664,
              "max": 4.014372790730359,
              "p5": 0.2913864996022191,
              "p95": 3.9917315500439385,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.17025171088705607,
              "median": 0.03655203757006517,
              "min": 0.01013835115561731,
              "max": 0.6666666666666666,
              "p5": 0.012768995085955796,
              "p95": 0.6138657792567941,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 4.3893786648760695,
              "median": 1.8291666666666666,
              "min": 1.0,
              "max": 22.545454545454547,
              "p5": 1.0157439446366783,
              "p95": 15.704545454545446,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.086026552864369e-05,
              "median": 5.732115693627178e-07,
              "min": 0.0,
              "max": 0.00031763779127385455,
              "p5": 0.0,
              "p95": 0.00020788387524441542,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004429619296409929,
              "median": 0.00012552077209279687,
              "min": 0.0,
              "max": 0.013060591679735067,
              "p5": 0.0,
              "p95": 0.01269755833950621,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.04347826086956408,
            "market": -0.00214165955488288,
            "sector": -0.007366374259880959,
            "peers": 0.0021941088543384613,
            "vs_market": 0.04561992042444696,
            "vs_sector": 0.05084463512944504,
            "vs_peers": 0.04128415201522562
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 73.47670250896059,
          "score_pca_percentile": 73.47670250896059,
          "rank_pca": 149,
          "total": 558,
          "adv_notional_sgd": 268620.0,
          "adv_volume_shares": 1221000.0,
          "free_float_shares": null,
          "turnover_ratio": 0.002141198991293606,
          "votes": 85.0,
          "trades": 85.0,
          "spread_pct": 0.024496094126723836,
          "spread_ticks": 1.150753768844221,
          "amihud": 6.406252502442398e-08,
          "volatility": 0.5800789666812386
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.5659419504285057,
          "loadings": {
            "log_adv": 0.5140587644146618,
            "log_trades": 0.46262185207395046,
            "log_turnover": 0.46957544955248925,
            "neg_spread": 0.42529853233789966,
            "neg_amihud": 0.2418635488714699,
            "neg_vol": 0.24868994352052973
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
          "peer_median_adv": 5762.700000000001,
          "peer_median_score_pca": 43.27956989247312,
          "peer_median_trades": 4.0,
          "peer_median_volatility": 0.5695400417914562,
          "peer_median_spread_pct": 0.046297288607866215,
          "peer_median_spread_ticks": 1.5182532347504623,
          "peer_median_amihud": 4.732526471660415e-07,
          "peer_median_turnover_ratio": 0.00012458902612680182,
          "target_vs_peer": {
            "score_pca_delta": 30.2,
            "adv_delta_pct": 4561.4,
            "trades_delta_pct": 2025.0,
            "volatility_delta_pct": -1.85,
            "spread_pct_delta_pct": 47.09,
            "spread_ticks_delta_pct": -24.21,
            "amihud_delta_pct": 86.46,
            "turnover_ratio_delta_pct": 1618.61
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 73.47670250896059,
            "rank_pca": 149,
            "adv": 268620.0,
            "trades": 85.0,
            "volatility": 0.5800789666812386,
            "spread_pct": 0.024496094126723836,
            "spread_ticks": 1.150753768844221,
            "amihud": 6.406252502442398e-08,
            "turnover_ratio": 0.002141198991293606,
            "is_target": true
          },
          {
            "ticker": "KUX",
            "score_pca": 1.4336917562724014,
            "rank_pca": 551,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 2.28509876728461,
            "spread_pct": 0.4235727440147329,
            "spread_ticks": 18.0,
            "amihud": 0.00036013640690511566,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 3.942652329749104,
            "rank_pca": 536,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 2.250447984076117,
            "spread_pct": 0.6666666666666666,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 46.236559139784944,
            "rank_pca": 301,
            "adv": 5658.0,
            "trades": 4.0,
            "volatility": 0.3559259469564913,
            "spread_pct": 0.024420456556361606,
            "spread_ticks": 1.75,
            "amihud": 1.4078062858550678e-06,
            "turnover_ratio": 8.672087795225743e-05,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 40.32258064516129,
            "rank_pca": 334,
            "adv": 5867.400000000001,
            "trades": 4.0,
            "volatility": 1.1149040789207172,
            "spread_pct": 0.07213114754098364,
            "spread_ticks": 1.125,
            "amihud": 3.5147656587309107e-07,
            "turnover_ratio": 0.0007165927830041195,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 34.587813620071685,
            "rank_pca": 366,
            "adv": 400.0,
            "trades": 1.0,
            "volatility": 0.3570352314339646,
            "spread_pct": 0.046082949308755804,
            "spread_ticks": 3.4615384615384617,
            "amihud": 1.6983887951629893e-06,
            "turnover_ratio": 1.779907464746797e-05,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 61.111111111111114,
            "rank_pca": 218,
            "adv": 41515.0,
            "trades": 20.0,
            "volatility": 0.6079806112619562,
            "spread_pct": 0.046511627906976626,
            "spread_ticks": 1.0666666666666667,
            "amihud": 0.0,
            "turnover_ratio": 0.002052448666619913,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 54.659498207885306,
            "rank_pca": 254,
            "adv": 18917.5,
            "trades": 10.0,
            "volatility": 0.34292927644753,
            "spread_pct": 0.015033072760072139,
            "spread_ticks": 2.4545454545454546,
            "amihud": 5.95028728458992e-07,
            "turnover_ratio": 0.0001624571743013462,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 82.61648745519713,
            "rank_pca": 98,
            "adv": 734103.0,
            "trades": 298.0,
            "volatility": 0.5310994723209562,
            "spread_pct": 0.010269651223321194,
            "spread_ticks": 1.2865064695009243,
            "amihud": 2.036493971977856e-08,
            "turnover_ratio": 0.01094068893608576,
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
              "mean": 0.6900087286398384,
              "median": 0.46076540596879767,
              "min": 0.0,
              "max": 7.865810049952611,
              "p5": 0.15425786573985228,
              "p95": 2.2153979309205787,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3260532.902354378,
              "median": 12759.75,
              "min": 0.0,
              "max": 285980477.7,
              "p5": 0.0,
              "p95": 13438370.749999985,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09962374393527686,
              "median": 0.03015520298012046,
              "min": 0.0002652156920799096,
              "max": 1.3542204201990415,
              "p5": 0.0035379318952462116,
              "p95": 0.47747506884474505,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005904997614159738,
              "median": 0.00028496195126963373,
              "min": 0.0,
              "max": 2.0301891767187397,
              "p5": 0.0,
              "p95": 0.010524739184962113,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.404409166025834e-05,
              "median": 1.4428119377358593e-07,
              "min": 0.0,
              "max": 0.0010220273004999999,
              "p5": 0.0,
              "p95": 4.961450182038425e-05,
              "count": 554
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 464.3763440860215,
              "median": 6.5,
              "min": 0.0,
              "max": 11380.0,
              "p5": 0.0,
              "p95": 2632.849999999993,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.8769562290201935,
              "median": 0.4440673518774604,
              "min": 0.3130341869606408,
              "max": 2.28509876728461,
              "p5": 0.323497468281052,
              "p95": 2.2729709931616373,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2201013.8125,
              "median": 12287.75,
              "min": 0.0,
              "max": 16580412.000000002,
              "p5": 0.0,
              "p95": 11034203.849999994,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15148216189310232,
              "median": 0.02445827534154272,
              "min": 0.0013156604881843018,
              "max": 0.6666666666666666,
              "p5": 0.004449557245482214,
              "p95": 0.5815837937384897,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003013215037110436,
              "median": 0.00012458902612680182,
              "min": 0.0,
              "max": 0.01094068893608576,
              "p5": 0.0,
              "p95": 0.010876347143366811,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.5490363683397776e-05,
              "median": 3.2954562674170795e-07,
              "min": 0.0,
              "max": 0.00036013640690511566,
              "p5": 2.979507458473297e-10,
              "p95": 0.00023468310056663205,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 544.25,
              "median": 7.0,
              "min": 0.0,
              "max": 3956.0,
              "p5": 0.0,
              "p95": 2675.699999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 100807.6125,
              "median": 5762.700000000001,
              "min": 0.0,
              "max": 734103.0,
              "p5": 0.0,
              "p95": 491697.1999999996,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 42.125,
              "median": 4.0,
              "min": 0.0,
              "max": 298.0,
              "p5": 0.0,
              "p95": 200.69999999999985,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.9806776710877927,
              "median": 0.5695400417914562,
              "min": 0.34292927644753,
              "max": 2.28509876728461,
              "p5": 0.34747811112566646,
              "p95": 2.2729709931616373,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.16308603949723383,
              "median": 0.046297288607866215,
              "min": 0.010269651223321194,
              "max": 0.6666666666666666,
              "p5": 0.011936848761184025,
              "p95": 0.5815837937384897,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.7680321315314385,
              "median": 1.5182532347504623,
              "min": 1.0,
              "max": 18.0,
              "p5": 1.0233333333333334,
              "p95": 12.911538461538454,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.55261840275232e-05,
              "median": 4.732526471660415e-07,
              "min": 0.0,
              "max": 0.00036013640690511566,
              "p5": 0.0,
              "p95": 0.00023468310056663205,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.001747088439076358,
              "median": 0.00012458902612680182,
              "min": 0.0,
              "max": 0.01094068893608576,
              "p5": 0.0,
              "p95": 0.007829804841772708,
              "count": 8
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": -0.07692307692307843,
            "market": 0.0055050709755777305,
            "sector": -0.10424359183880039,
            "peers": -0.033844934819327266,
            "vs_market": -0.08242814789865616,
            "vs_sector": 0.02732051491572196,
            "vs_peers": -0.04307814210375116
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Near-term tradability looks broadly in line with peers, but the displayed book is less balanced because bid depth is much lighter than ask depth.",
        "market_comparison": "The stock fell 2.0% compared with peers down 1.6%, which matters because weaker same-day price action can make the thin buy side more noticeable."
      },
      "1w": {
        "liquidity": "Weekly liquidity still reads strong for size, with the score at 74.6 compared with a peer median of 46.3, which supports access over a normal trading week.",
        "market_comparison": "The stock fell 5.9% compared with peers down 4.5%, which matters because relative weakness can test the thinner bid side."
      },
      "30d": {
        "liquidity": "Monthly tradability is strong and appears stable, with a 1M score of 71.3 compared with a peer median of 49.8, keeping the name accessible relative to peers.",
        "market_comparison": "The stock rose 4.3% compared with peers up 0.2% and the market down 0.2%, which matters because stronger price performance supports a firmer trading backdrop."
      },
      "3m": {
        "liquidity": "Structural liquidity is strong over three months, with a score of 73.5 compared with a peer median of 43.3, indicating better access than most peers of similar size.",
        "market_comparison": "The stock was down 7.7% compared with peers down 3.4%, which matters because the strong liquidity profile has held up despite weaker relative performance."
      }
    }
  },
  "q02": {
    "driver_model": {
      "valid": true,
      "model_method": "ols_with_volatility_regimes",
      "estimation_window_days": 64,
      "reporting_window_days": 63,
      "available_history_days": 64,
      "n_regimes": 2,
      "current_regime": 1,
      "current_regime_label": "High Volatility",
      "current_regime_probability": 1.0,
      "current_driver_mix": {
        "market_share": {
          "median": 0.23738034348294867,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "23.7%",
          "display_range": null,
          "display_text": "23.7%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 64 trading days.",
          "kind": "share_pct",
          "value_pct": 23.7,
          "plain_english": "Market explains about 23.7% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.32571169312048565,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "32.6%",
          "display_range": null,
          "display_text": "32.6%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 64 trading days.",
          "kind": "share_pct",
          "value_pct": 32.6,
          "plain_english": "Sector explains about 32.6% of price moves in the current state."
        },
        "company_share": {
          "median": 0.43690796339656573,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "43.7%",
          "display_range": null,
          "display_text": "43.7%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 64 trading days.",
          "kind": "share_pct",
          "value_pct": 43.7,
          "plain_english": "Company-specific explains about 43.7% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 0.7050029846887405,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.71",
          "display_range": null,
          "display_text": "0.71",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 64 trading days.",
          "kind": "beta",
          "strength_label": "Modest",
          "plain_english": "Modest market link: a 1% market move has lined up with about a 0.71% stock move in the same direction in this state.",
          "value_num": 0.71
        },
        "beta_stock_lag": {
          "median": 0.2755961034630261,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.28",
          "display_range": null,
          "display_text": "0.28",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 64 trading days.",
          "kind": "lag_beta",
          "value_num": 0.28
        },
        "beta_sector": {
          "median": 0.427643753157652,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.43",
          "display_range": null,
          "display_text": "0.43",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 64 trading days.",
          "kind": "beta",
          "strength_label": "Modest",
          "plain_english": "Modest sector link: a 1% sector move has lined up with about a 0.43% stock move in the same direction in this state.",
          "value_num": 0.43
        },
        "beta_market_lag": {
          "median": 0.24067513636336998,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.24",
          "display_range": null,
          "display_text": "0.24",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 64 trading days.",
          "kind": "lag_beta",
          "value_num": 0.24
        },
        "beta_sector_lag": {
          "median": 0.1668627387450411,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.17",
          "display_range": null,
          "display_text": "0.17",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 64 trading days.",
          "kind": "lag_beta",
          "value_num": 0.17
        },
        "posterior_source": null,
        "intervals_collapsed": false,
        "confidence_label": "High, limited history",
        "confidence_note": "Based on 64 trading days relative to the 252-day target."
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
          "period_label": "2026-03-02 to 2026-03-31",
          "n_obs": 22,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5379214653603349,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "53.8%",
            "display_range": null,
            "display_text": "53.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 53.8,
            "plain_english": "Company-specific explains about 53.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.22982068067655406,
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
              "median": 0.23225785396311108,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "23.2%",
              "display_range": null,
              "display_text": "23.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 23.2,
              "plain_english": "Sector explains about 23.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5379214653603349,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "53.8%",
              "display_range": null,
              "display_text": "53.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 53.8,
              "plain_english": "Company-specific explains about 53.8% of price moves in the current state."
            }
          },
          "summary": "Mar: Mostly company-driven."
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-28",
          "n_obs": 19,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5307263861147151,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "53.1%",
            "display_range": null,
            "display_text": "53.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
            "kind": "share_pct",
            "value_pct": 53.1,
            "plain_english": "Company-specific explains about 53.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3546699578819466,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "35.5%",
              "display_range": null,
              "display_text": "35.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 35.5,
              "plain_english": "Market explains about 35.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.11460365600333824,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "11.5%",
              "display_range": null,
              "display_text": "11.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 11.5,
              "plain_english": "Sector explains about 11.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5307263861147151,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "53.1%",
              "display_range": null,
              "display_text": "53.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 53.1,
              "plain_english": "Company-specific explains about 53.1% of price moves in the current state."
            }
          },
          "summary": "Apr: Mostly company-driven."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5,
          "expected_duration_days": 7.75,
          "current_probability": 0.0,
          "n_days_effective": 31.0,
          "volatility": {
            "median": 0.028212016206729692,
            "low": 0.028212016206729692,
            "high": 0.028212016206729692
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": 0.0
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.5,
          "expected_duration_days": 7.75,
          "current_probability": 1.0,
          "n_days_effective": 31.0,
          "volatility": {
            "median": 0.043011231271527034,
            "low": 0.043011231271527034,
            "high": 0.043011231271527034
          },
          "volatility_label": "High Volatility",
          "current_probability_display": null
        }
      ],
      "transitions": {
        "mean": [
          [
            0.8709677419354839,
            0.12903225806451613
          ],
          [
            0.1,
            0.9
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            27.0,
            4.0
          ],
          [
            3.0,
            27.0
          ]
        ]
      },
      "methodology": {
        "estimation_window_days": 64,
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
        "market_link_display": "0.71",
        "sector_link_display": "0.43",
        "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.71% stock move in the same direction in this state. This is a point estimate from 64 trading days.",
        "sector_link_explainer": "Modest sector link. A 1% sector move has lined up with about a 0.43% stock move in the same direction in this state. This is a point estimate from 64 trading days.",
        "stock_persistence_display": "0.28",
        "point_estimate_note": "Point estimate only because the current state has 64 trading days.",
        "history_limited_note": "Read is based on 64 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "High Volatility",
        "dominant_driver": "company",
        "dominant_driver_label": "Company-specific",
        "driver_share_pct": 43.7,
        "driver_share_display": "43.7%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 64 trading days relative to the 252-day target.",
        "history_days": 64,
        "history_limited": true,
        "volatility_label": "High Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.9,
        "effective_days": 31.0,
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
          "pct_time": 0.5,
          "expected_duration_days": 7.75,
          "current_probability": 0.0,
          "n_days_effective": 31.0,
          "volatility": {
            "median": 0.028212016206729692,
            "low": 0.028212016206729692,
            "high": 0.028212016206729692
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.5,
          "expected_duration_days": 7.75,
          "current_probability": 1.0,
          "n_days_effective": 31.0,
          "volatility": {
            "median": 0.043011231271527034,
            "low": 0.043011231271527034,
            "high": 0.043011231271527034
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.8709677419354839,
          0.12903225806451613
        ],
        [
          0.1,
          0.9
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.8709677419354839,
            0.12903225806451613
          ],
          [
            0.1,
            0.9
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            27.0,
            4.0
          ],
          [
            3.0,
            27.0
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
        "text": "Liquidity score: 73.5 — Strong",
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
        "text": "Execution: thin buy-side",
        "bg": "bg-red-500/20",
        "textColor": "text-red-400"
      },
      "intraday": {
        "text": "Trading Activity",
        "bg": "bg-red-500/20",
        "textColor": "text-red-400"
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
    "liq_subtitle": "Monthly liquidity screens well for the stock’s size, although displayed buy-side support is thin.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent returns are ahead of peers and the market, with the stock up 4.3% over one month.",
    "perf_insight": "The stock has outperformed over one month, rising 4.3% compared with 0.2% for peers and -0.2% for the market. That matters because the return backdrop is firmer than the main comparison groups.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Price moves are being driven mainly by company-specific factors.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly company-driven, accounting for about 43.7% of price changes. Other influences are market 23.7%, and sector 32.6%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 23.7%, sector 32.6%, and company-specific 43.7%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has been consistently company-driven across Feb to Apr."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 23.7%, sector 32.6%, and company-specific 43.7%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "Company-specific factors account for 43.7% of the current driver mix, so stock news is carrying more weight than broader market moves.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: company-specific factors are the biggest influence on price moves.",
      "Monthly change: the stock has remained company-driven from Feb through Apr."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "The market backdrop is supportive in price terms, while the displayed book remains uneven.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on available history from Jan 22, 2026 to Apr 28, 2026 (66 trading days • 11,427 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on the displayed order book.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is thin enough that downside execution may feel worse than the monthly liquidity score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The displayed book is thin on the bid side because bid depth is only 0.34x ask depth, even with a 1 tick spread.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 20.0% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "The displayed book points to uneven near-term trading conditions.",
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
    "intraday_insight": "Near-term trading conditions look less balanced than the monthly liquidity score implies because displayed bid depth is only 0.34x ask depth. The 1 tick spread keeps headline trading costs contained, but the thinner bid side leaves buy-side support looking light.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "The current trading picture is defined more by liquidity and book balance than by short activity.",
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
    "exec_subtitle": "Trading access looks strong relative to peers, but the current book is thinner on the bid side.",
    "exec_takeaways_title": "Key Takeaways:",
    "metric_liquidity_score": "Liquidity Score",
    "metric_spread": "Trading Cost (Spread)",
    "metric_adv": "Average Traded Volume",
    "metric_drivers": "What Drives Price Changes",
    "metric_period_note": "The metrics shown here are based on the last 3 months of trading data, except for price driver mix which uses the last 5 trading days.",
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
        "value": "73.5/100",
        "sub": "Peer median 43.3 (+30.2 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "S$268.6K",
        "sub": "Peer median S$5.8K",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "2.45%",
        "sub": "1.15 ticks; peers 4.63%",
        "interp": {
          "text": "Tighter",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity looks strong for the stock’s size, with a 3M score of 73.5 compared with a peer median of 43.3. That means the name screens as more accessible than peers on a monthly average basis. The near-term book is less supportive because displayed bid depth is only 0.34x ask depth while spread is 1 tick, so buy-side support looks thin in the current market.",
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
        "value": "0.34x",
        "note": "Bid depth / ask depth on the displayed order book",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-1.05% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-4.26% with 46.5% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-4.26% with 18.6% fill.",
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
        "value": "73",
        "suffix": "/100",
        "bar_pct": 73,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Rank 149/558",
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
        "value": "2.45",
        "suffix": "%",
        "bar_pct": 24,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "2.45% • 1.15 ticks vs peers 4.63%",
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
        "value": "268.6K",
        "value_prefix": "S$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Peer median S$5.8K",
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
        "value": "43.7",
        "suffix": "company-specific",
        "bar_pct": 44,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 23.7% • Sector 32.6%",
        "interpretation": {
          "text": "Company",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is strong for the stock’s size, with a 3M liquidity score of 73.5 compared with a peer median of 43.3. That points to better access than peers on a monthly average basis.",
      "Price performance is firm, with a 1M return of 4.3% compared with 0.2% for peers and -0.2% for the market. That matters because the stock is trading against a stronger return backdrop than the main comparison groups.",
      "The main watchpoint is the displayed book, where bid depth is only 0.34x ask depth despite a 1 tick spread. That matters because immediate buy-side support looks thin even as company-specific factors account for 43.7% of the current driver mix."
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
      "overall": "3M liquidity is strong: score 73.5 vs peer median 43.3 (+30.2 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "strengths": [
        "3M score 73.5 vs peer median 43.3 (+30.2 pts)."
      ],
      "concerns": [],
      "peer_context": "Primary-period score gap vs peers: +30.2 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "3M return is -7.7%, better than sector, but worse than market and peers, which shows price performance is mixed across comparison groups.",
        "vs_market": "Worse than market: -7.7% vs market 0.6%.",
        "vs_sector": "Better than sector: -7.7% vs sector -10.4%.",
        "vs_peers": "Worse than peers: -7.7% vs peers -3.4%."
      },
      "adv": {
        "insight": "ADV is S$268.6K, better than market, sector, and peers, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: S$268.6K vs market S$12.8K.",
        "vs_sector": "Better than sector: S$268.6K vs sector S$12.3K.",
        "vs_peers": "Better than peers: S$268.6K vs peers S$5.8K."
      },
      "spread": {
        "insight": "Spread is 2.45%, better than market and peers, which keeps trading costs more competitive than comparable names.",
        "vs_market": "Better than market: 2.45% vs market 3.02%.",
        "vs_sector": "In line with sector: 2.45% vs secto%.",
        "vs_peers": "Better than peers: 2.45% vs peers 4.63%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.21%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.21% vs market 0.03%.",
        "vs_sector": "Better than sector: 0.21% vs sector 0.01%.",
        "vs_peers": "Better than peers: 0.21% vs peers 0.01%."
      },
      "volatility": {
        "insight": "Volatility is 58.01%, worse than market and sector, which suggests day-to-day price swings are heavier than comparable names.",
        "vs_market": "Worse than market: 58.01% vs market 46.08%.",
        "vs_sector": "Worse than sector: 58.01% vs sector 44.41%.",
        "vs_peers": "In line with peers: 58.01% vs peers 56.95%."
      },
      "trades": {
        "insight": "Trades is 85, better than market, sector, and peers, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 85 vs market 6.",
        "vs_sector": "Better than sector: 85 vs sector 7.",
        "vs_peers": "Better than peers: 85 vs peers 4."
      },
      "amihud": {
        "insight": "Price impact is 6.41e-08, better than market, sector, and peers, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 6.41e-08 vs market 1.44e-07.",
        "vs_sector": "Better than sector: 6.41e-08 vs sector 3.30e-07.",
        "vs_peers": "Better than peers: 6.41e-08 vs peers 4.73e-07."
      }
    },
    "performance": {
      "overall": "Recent performance is stronger than peers and the market, with the stock up 4.3% over one month compared with peers at 0.2% and the market at -0.2%. Liquidity partly confirms that move because the 3M liquidity score of 73.5 sits well above the peer median of 43.3, which supports access relative to similar names, but the displayed bid depth at 0.34x of ask depth points to thinner immediate buy-side support.",
      "conclusion": "The recent move looks mainly company-specific, with solid structural liquidity supporting it but thin buy-side depth tempering the near-term confirmation."
    },
    "drivers": {
      "overall": "The stock is being driven mainly by company-specific factors, with 43.7% of current moves coming from stock-specific drivers. That matters because trading conditions can react more directly to company news than to broader market direction.",
      "beta": "The current pattern looks reasonably stable because the stock was mostly company-driven in Feb, Mar, and Apr. The read is still best taken as directional, but the consistency across three months points to a persistent stock-specific backdrop.",
      "rolling_change": "The monthly picture has stayed broadly the same, with the stock mostly company-driven throughout Feb to Apr. Alongside a 1M return of +4.3% compared with +0.2% for peers and -0.2% for the market, that points to a firmer stock-led backdrop rather than a broad market move."
    },
    "regime": {
      "overall": "High volatility is the key feature of the tape, and that matters because trading conditions can feel less steady even when the stock remains liquid for its size. The thin displayed bid, at 0.34x of ask depth, reinforces that fragility on the buy side.",
      "current": "The stock is currently in a high-volatility state, while the spread remains at 1 tick and the displayed book is notably lighter on the bid than the ask.",
      "transitions": "This looks more settled than short-lived, with a typical run length of about 7.8 days, although the read is only moderately firm.",
      "trading_implications": "That combination points to tradable but less forgiving conditions, where access can still look good on a monthly basis but near-term price moves may feel sharper when buy-side depth is thin."
    },
    "execution": {
      "overall": "The current book looks thin buy-side because the spread is only 1 tick but bid depth is just 0.34x of ask depth. That means quoted tightness is not matched by balanced visible support on the buy side.",
      "concern": "The clearest stress point is the imbalance in displayed depth, with materially less size on the bid than on the ask. That leaves sell-side pressure more likely to meet a thinner book even though the top-line spread looks orderly.",
      "peer_context": "This sits in some tension with the broader liquidity picture because the 3M liquidity score of 73.5 is 30.2 points above the peer median of 43.3. The stock still screens well for size, but the current book suggests immediate execution conditions are less robust than that monthly standing implies."
    },
    "trader_composition": {
      "overall": "Flow looks mainly retail-like on both trade count and trade value, which gives the mix a clear headline even with some institutional participation still present.",
      "retail_heavy": "Retail-like trades account for 89.7% of trade count and 37.1% of trade value, compared with institution-like trades at 0.8% of count and 14.7% of value. That points to a market driven primarily by many smaller tickets rather than a broad base of institutional value.",
      "institutional_gap": "Institution-like activity is present in value terms at 14.7%, but its 0.8% share of trade count shows it is not setting the overall tone of daily flow.",
      "peer_comparison": "The current mix looks more retail-leaning than a market led by institutional tickets, which matters because day-to-day liquidity can feel less anchored when most activity comes from a high share of individual trades."
    },
    "price_moving": {
      "overall": "The cleanest read is that price formation is being shaped mainly by stock-specific trading rather than broad market flow. Company-specific factors account for 43.7% of the current driver mix, while the observed trade mix also leans retail-like on both count and value. That combination suggests price moves are being set by name-specific interest rather than a broad institutional flow signal.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity appears low and does not look like a meaningful driver of trading conditions. The stronger 1M share price performance, up 4.3% compared with peers at 0.2% and the market at -0.2%, points to a firmer backdrop than a market dominated by short pressure.",
      "level": "Low short interest",
      "correlation": "No clear relationship (correlation undefined)",
      "trend": "Short positioning has dropped sharply, with shorts covering significantly month on month. That reduces the case for short selling as a separate source of pressure, although the signal is mixed enough that it does not change the broader picture.",
      "peaks": "0 notable peak days identified."
    },
    "intraday": {
      "overall": "Session split is open 1.5%, continuous 95.3%, and close 2.4%. Current trading concentration score is 0.263.",
      "hhi_interpretation": "The concentration score of 0.263 indicates trading is reasonably spread through the day rather than packed into a few short windows, which supports a steadier intraday flow picture.",
      "best_times": "The continuous session is the clearest source of usable liquidity because almost all activity takes place there, while the auction periods contribute only a small share.",
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
        "TKU",
        "KUX",
        "532",
        "U77",
        "J03",
        "NXR",
        "42F",
        "LVR",
        "ITS"
      ],
      "scores": [
        73.47670250896059,
        1.4336917562724014,
        3.942652329749104,
        46.236559139784944,
        40.32258064516129,
        34.587813620071685,
        61.111111111111114,
        54.659498207885306,
        82.61648745519713
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
        268620.0,
        0.0,
        0.0,
        5658.0,
        5867.400000000001,
        400.0,
        41515.0,
        18917.5,
        734103.0
      ],
      "total": 558
    },
    "market_comparison": {
      "sector_name": "Software - Application",
      "sector_count": 8,
      "market_count": 558,
      "company": {
        "volatility": 0.5800789666812386,
        "adv": 268620.0,
        "spread_pct": 0.024496094126723836,
        "turnover_ratio": 0.002141198991293606,
        "amihud": 6.406252502442398e-08,
        "trades": 85.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6900087286398384,
          "median": 0.46076540596879767,
          "min": 0.0,
          "max": 7.865810049952611,
          "p5": 0.15425786573985228,
          "p95": 2.2153979309205787,
          "count": 558
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 3260532.902354378,
          "median": 12759.75,
          "min": 0.0,
          "max": 285980477.7,
          "p5": 0.0,
          "p95": 13438370.749999985,
          "count": 558
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.09962374393527686,
          "median": 0.03015520298012046,
          "min": 0.0002652156920799096,
          "max": 1.3542204201990415,
          "p5": 0.0035379318952462116,
          "p95": 0.47747506884474505,
          "count": 556
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.005904997614159738,
          "median": 0.00028496195126963373,
          "min": 0.0,
          "max": 2.0301891767187397,
          "p5": 0.0,
          "p95": 0.010524739184962113,
          "count": 551
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.404409166025834e-05,
          "median": 1.4428119377358593e-07,
          "min": 0.0,
          "max": 0.0010220273004999999,
          "p5": 0.0,
          "p95": 4.961450182038425e-05,
          "count": 554
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 464.3763440860215,
          "median": 6.5,
          "min": 0.0,
          "max": 11380.0,
          "p5": 0.0,
          "p95": 2632.849999999993,
          "count": 558
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.8769562290201935,
          "median": 0.4440673518774604,
          "min": 0.3130341869606408,
          "max": 2.28509876728461,
          "p5": 0.323497468281052,
          "p95": 2.2729709931616373,
          "count": 8
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 2201013.8125,
          "median": 12287.75,
          "min": 0.0,
          "max": 16580412.000000002,
          "p5": 0.0,
          "p95": 11034203.849999994,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.15148216189310232,
          "median": 0.02445827534154272,
          "min": 0.0013156604881843018,
          "max": 0.6666666666666666,
          "p5": 0.004449557245482214,
          "p95": 0.5815837937384897,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.003013215037110436,
          "median": 0.00012458902612680182,
          "min": 0.0,
          "max": 0.01094068893608576,
          "p5": 0.0,
          "p95": 0.010876347143366811,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 4.5490363683397776e-05,
          "median": 3.2954562674170795e-07,
          "min": 0.0,
          "max": 0.00036013640690511566,
          "p5": 2.979507458473297e-10,
          "p95": 0.00023468310056663205,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 544.25,
          "median": 7.0,
          "min": 0.0,
          "max": 3956.0,
          "p5": 0.0,
          "p95": 2675.699999999998,
          "count": 8
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 100807.6125,
          "median": 5762.700000000001,
          "min": 0.0,
          "max": 734103.0,
          "p5": 0.0,
          "p95": 491697.1999999996,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 42.125,
          "median": 4.0,
          "min": 0.0,
          "max": 298.0,
          "p5": 0.0,
          "p95": 200.69999999999985,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.9806776710877927,
          "median": 0.5695400417914562,
          "min": 0.34292927644753,
          "max": 2.28509876728461,
          "p5": 0.34747811112566646,
          "p95": 2.2729709931616373,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.16308603949723383,
          "median": 0.046297288607866215,
          "min": 0.010269651223321194,
          "max": 0.6666666666666666,
          "p5": 0.011936848761184025,
          "p95": 0.5815837937384897,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 3.7680321315314385,
          "median": 1.5182532347504623,
          "min": 1.0,
          "max": 18.0,
          "p5": 1.0233333333333334,
          "p95": 12.911538461538454,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 4.55261840275232e-05,
          "median": 4.732526471660415e-07,
          "min": 0.0,
          "max": 0.00036013640690511566,
          "p5": 0.0,
          "p95": 0.00023468310056663205,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.001747088439076358,
          "median": 0.00012458902612680182,
          "min": 0.0,
          "max": 0.01094068893608576,
          "p5": 0.0,
          "p95": 0.007829804841772708,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1W",
        "stock": -0.05882352941176494,
        "market": -0.025378072910368532,
        "sector": -0.040367391021052246,
        "peers": -0.04516625043731681
      },
      {
        "horizon": "1M",
        "stock": 0.04347826086956408,
        "market": -0.00214165955488288,
        "sector": -0.007366374259880959,
        "peers": 0.0021941088543384613
      },
      {
        "horizon": "3M",
        "stock": -0.07692307692307843,
        "market": 0.0055050709755777305,
        "sector": -0.10424359183880039,
        "peers": -0.033844934819327266
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
      "share_market": 0.23738034348294867,
      "share_sector": 0.32571169312048565,
      "share_idio": 0.43690796339656573,
      "beta_market": 0.7050029846887405,
      "beta_sector": 0.427643753157652,
      "driver_model": {
        "valid": true,
        "model_method": "ols_with_volatility_regimes",
        "estimation_window_days": 64,
        "reporting_window_days": 63,
        "available_history_days": 64,
        "n_regimes": 2,
        "current_regime": 1,
        "current_regime_label": "High Volatility",
        "current_regime_probability": 1.0,
        "current_driver_mix": {
          "market_share": {
            "median": 0.23738034348294867,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "23.7%",
            "display_range": null,
            "display_text": "23.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 64 trading days.",
            "kind": "share_pct",
            "value_pct": 23.7,
            "plain_english": "Market explains about 23.7% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.32571169312048565,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "32.6%",
            "display_range": null,
            "display_text": "32.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 64 trading days.",
            "kind": "share_pct",
            "value_pct": 32.6,
            "plain_english": "Sector explains about 32.6% of price moves in the current state."
          },
          "company_share": {
            "median": 0.43690796339656573,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "43.7%",
            "display_range": null,
            "display_text": "43.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 64 trading days.",
            "kind": "share_pct",
            "value_pct": 43.7,
            "plain_english": "Company-specific explains about 43.7% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 0.7050029846887405,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.71",
            "display_range": null,
            "display_text": "0.71",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 64 trading days.",
            "kind": "beta",
            "strength_label": "Modest",
            "plain_english": "Modest market link: a 1% market move has lined up with about a 0.71% stock move in the same direction in this state.",
            "value_num": 0.71
          },
          "beta_stock_lag": {
            "median": 0.2755961034630261,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.28",
            "display_range": null,
            "display_text": "0.28",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 64 trading days.",
            "kind": "lag_beta",
            "value_num": 0.28
          },
          "beta_sector": {
            "median": 0.427643753157652,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.43",
            "display_range": null,
            "display_text": "0.43",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 64 trading days.",
            "kind": "beta",
            "strength_label": "Modest",
            "plain_english": "Modest sector link: a 1% sector move has lined up with about a 0.43% stock move in the same direction in this state.",
            "value_num": 0.43
          },
          "beta_market_lag": {
            "median": 0.24067513636336998,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.24",
            "display_range": null,
            "display_text": "0.24",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 64 trading days.",
            "kind": "lag_beta",
            "value_num": 0.24
          },
          "beta_sector_lag": {
            "median": 0.1668627387450411,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.17",
            "display_range": null,
            "display_text": "0.17",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 64 trading days.",
            "kind": "lag_beta",
            "value_num": 0.17
          },
          "posterior_source": null,
          "intervals_collapsed": false,
          "confidence_label": "High, limited history",
          "confidence_note": "Based on 64 trading days relative to the 252-day target."
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
            "period_label": "2026-03-02 to 2026-03-31",
            "n_obs": 22,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5379214653603349,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "53.8%",
              "display_range": null,
              "display_text": "53.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 53.8,
              "plain_english": "Company-specific explains about 53.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.22982068067655406,
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
                "median": 0.23225785396311108,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "23.2%",
                "display_range": null,
                "display_text": "23.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 23.2,
                "plain_english": "Sector explains about 23.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5379214653603349,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "53.8%",
                "display_range": null,
                "display_text": "53.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 53.8,
                "plain_english": "Company-specific explains about 53.8% of price moves in the current state."
              }
            },
            "summary": "Mar: Mostly company-driven."
          },
          {
            "month_key": "2026-04",
            "month_label": "April 2026",
            "month_short_label": "Apr",
            "period_label": "2026-04-01 to 2026-04-28",
            "n_obs": 19,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5307263861147151,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "53.1%",
              "display_range": null,
              "display_text": "53.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 53.1,
              "plain_english": "Company-specific explains about 53.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3546699578819466,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "35.5%",
                "display_range": null,
                "display_text": "35.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 35.5,
                "plain_english": "Market explains about 35.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.11460365600333824,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "11.5%",
                "display_range": null,
                "display_text": "11.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 11.5,
                "plain_english": "Sector explains about 11.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5307263861147151,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "53.1%",
                "display_range": null,
                "display_text": "53.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 53.1,
                "plain_english": "Company-specific explains about 53.1% of price moves in the current state."
              }
            },
            "summary": "Apr: Mostly company-driven."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5,
            "expected_duration_days": 7.75,
            "current_probability": 0.0,
            "n_days_effective": 31.0,
            "volatility": {
              "median": 0.028212016206729692,
              "low": 0.028212016206729692,
              "high": 0.028212016206729692
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": 0.0
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.5,
            "expected_duration_days": 7.75,
            "current_probability": 1.0,
            "n_days_effective": 31.0,
            "volatility": {
              "median": 0.043011231271527034,
              "low": 0.043011231271527034,
              "high": 0.043011231271527034
            },
            "volatility_label": "High Volatility",
            "current_probability_display": null
          }
        ],
        "transitions": {
          "mean": [
            [
              0.8709677419354839,
              0.12903225806451613
            ],
            [
              0.1,
              0.9
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              27.0,
              4.0
            ],
            [
              3.0,
              27.0
            ]
          ]
        },
        "methodology": {
          "estimation_window_days": 64,
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
          "market_link_display": "0.71",
          "sector_link_display": "0.43",
          "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.71% stock move in the same direction in this state. This is a point estimate from 64 trading days.",
          "sector_link_explainer": "Modest sector link. A 1% sector move has lined up with about a 0.43% stock move in the same direction in this state. This is a point estimate from 64 trading days.",
          "stock_persistence_display": "0.28",
          "point_estimate_note": "Point estimate only because the current state has 64 trading days.",
          "history_limited_note": "Read is based on 64 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "High Volatility",
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "driver_share_pct": 43.7,
          "driver_share_display": "43.7%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 64 trading days relative to the 252-day target.",
          "history_days": 64,
          "history_limited": true,
          "volatility_label": "High Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.9,
          "effective_days": 31.0,
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
          "period_label": "2026-03-02 to 2026-03-31",
          "n_obs": 22,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Mar: Mostly company-driven.",
          "share_market": 0.22982068067655406,
          "share_sector": 0.23225785396311108,
          "share_company": 0.5379214653603349,
          "share_market_display": "23.0%",
          "share_sector_display": "23.2%",
          "share_company_display": "53.8%",
          "dominant_share_display": "53.8%"
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-28",
          "n_obs": 19,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Apr: Mostly company-driven.",
          "share_market": 0.3546699578819466,
          "share_sector": 0.11460365600333824,
          "share_company": 0.5307263861147151,
          "share_market_display": "35.5%",
          "share_sector_display": "11.5%",
          "share_company_display": "53.1%",
          "dominant_share_display": "53.1%"
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
            "expected_duration_days": 7.75,
            "current_probability": 0.0,
            "n_days_effective": 31.0,
            "volatility": {
              "median": 0.028212016206729692,
              "low": 0.028212016206729692,
              "high": 0.028212016206729692
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.5,
            "expected_duration_days": 7.75,
            "current_probability": 1.0,
            "n_days_effective": 31.0,
            "volatility": {
              "median": 0.043011231271527034,
              "low": 0.043011231271527034,
              "high": 0.043011231271527034
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.8709677419354839,
            0.12903225806451613
          ],
          [
            0.1,
            0.9
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 0.235,
          "quantity": 1147800.0,
          "value": 269733.0
        },
        {
          "level": 2,
          "price": 0.23,
          "quantity": 110100.0,
          "value": 25323.0
        },
        {
          "level": 3,
          "price": 0.225,
          "quantity": 91000.0,
          "value": 20475.0
        },
        {
          "level": 4,
          "price": 0.22,
          "quantity": 96400.0,
          "value": 21208.0
        },
        {
          "level": 5,
          "price": 0.215,
          "quantity": 525800.0,
          "value": 113047.0
        },
        {
          "level": 6,
          "price": 0.21,
          "quantity": 45000.0,
          "value": 9450.0
        },
        {
          "level": 7,
          "price": 0.2,
          "quantity": 30000.0,
          "value": 6000.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.24,
          "quantity": 67500.0,
          "value": 16200.0
        },
        {
          "level": 2,
          "price": 0.245,
          "quantity": 319700.0,
          "value": 78326.5
        },
        {
          "level": 3,
          "price": 0.25,
          "quantity": 642000.0,
          "value": 160500.0
        },
        {
          "level": 4,
          "price": 0.255,
          "quantity": 260000.0,
          "value": 66300.0
        },
        {
          "level": 5,
          "price": 0.26,
          "quantity": 333000.0,
          "value": 86580.0
        },
        {
          "level": 6,
          "price": 0.265,
          "quantity": 580000.0,
          "value": 153700.0
        },
        {
          "level": 7,
          "price": 0.27,
          "quantity": 671000.0,
          "value": 181170.0
        },
        {
          "level": 8,
          "price": 0.275,
          "quantity": 190000.0,
          "value": 52250.00000000001
        },
        {
          "level": 9,
          "price": 0.28,
          "quantity": 180000.0,
          "value": 50400.00000000001
        },
        {
          "level": 10,
          "price": 0.285,
          "quantity": 394000.0,
          "value": 112289.99999999999
        },
        {
          "level": 11,
          "price": 0.29,
          "quantity": 355000.0,
          "value": 102950.0
        },
        {
          "level": 12,
          "price": 0.295,
          "quantity": 167200.0,
          "value": 49324.0
        },
        {
          "level": 13,
          "price": 0.3,
          "quantity": 680000.0,
          "value": 204000.0
        },
        {
          "level": 14,
          "price": 0.305,
          "quantity": 37000.0,
          "value": 11285.0
        },
        {
          "level": 15,
          "price": 0.31,
          "quantity": 10000.0,
          "value": 3100.0
        },
        {
          "level": 16,
          "price": 0.35,
          "quantity": 86000.0,
          "value": 30099.999999999996
        },
        {
          "level": 17,
          "price": 0.395,
          "quantity": 20000.0,
          "value": 7900.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-04-28 08:59:58.338600000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 0.2375,
        "spread_pct": 0.02105263157894739,
        "spread_ticks": 1.0,
        "tick_size": 0.005,
        "displayed_levels_per_side": 100,
        "bid_depth_notional_displayed": 465236.0,
        "ask_depth_notional_displayed": 1366375.5,
        "bid_depth_notional_top10": 465236.0,
        "ask_depth_notional_top10": 1366375.5,
        "bid_ask_depth_ratio": 0.3405
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 97,
        "history_limited": true,
        "trade_days_used": 66,
        "n_trades_used": 11427,
        "first_trade_date": "2026-01-22",
        "last_trade_date": "2026-04-28",
        "window_label": "Jan 22, 2026 to Apr 28, 2026",
        "window_short_label": "Jan 22-Apr 28",
        "trade_days_label": "66 trading days",
        "trade_count_label": "11,427 trades",
        "window_detail_label": "66 trading days • 11,427 trades",
        "history_note": "Trade-size percentiles use available history from Jan 22, 2026 to Apr 28, 2026 (66 trading days • 11,427 trades), not a full year.",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 10114.8,
            "impact_pct": -0.010526,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 2.17,
            "pct_of_adv": 5.3
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 13965.0,
            "impact_pct": -0.010526,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 3.0,
            "pct_of_adv": 7.31
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 167988.29,
            "impact_pct": -0.010526,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 36.11,
            "pct_of_adv": 87.96
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-04-28",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "8138989689077102592",
            "timestamp": "2026-04-27 22:59:01.335800000",
            "local_timestamp": "2026-04-28 06:59:01",
            "posted_price": 0.3,
            "size_shares": 500000.0,
            "notional": 150000.0,
            "impact_pct": -0.010526,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 32.24,
            "price_vs_mid_pct": 26.316,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "8141760458381766656",
            "timestamp": "2026-04-27 22:59:01.335800000",
            "local_timestamp": "2026-04-28 06:59:01",
            "posted_price": 0.25,
            "size_shares": 532800.0,
            "notional": 133200.0,
            "impact_pct": -0.010526,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 28.63,
            "price_vs_mid_pct": 5.263,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "8139994092951315456",
            "timestamp": "2026-04-27 22:59:01.335800000",
            "local_timestamp": "2026-04-28 06:59:01",
            "posted_price": 0.29,
            "size_shares": 200000.0,
            "notional": 58000.0,
            "impact_pct": -0.010526,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 12.47,
            "price_vs_mid_pct": 22.105,
            "executed_event_count": 0,
            "event_count": 1
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-04-28",
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
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 552111.0,
            "ask_depth_notional": 1244497.5,
            "mid_price": 0.2425
          },
          {
            "bucket": "09:30",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 542511.0,
            "ask_depth_notional": 1291147.0,
            "mid_price": 0.2425
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 547111.0,
            "ask_depth_notional": 1291245.0,
            "mid_price": 0.2425
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 536547.0,
            "ask_depth_notional": 1278719.5,
            "mid_price": 0.2425
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 512797.0,
            "ask_depth_notional": 1291719.5,
            "mid_price": 0.2425
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 486998.5,
            "ask_depth_notional": 1315700.5,
            "mid_price": 0.2375
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 475248.5,
            "ask_depth_notional": 1342105.5,
            "mid_price": 0.2375
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 475248.5,
            "ask_depth_notional": 1371605.5,
            "mid_price": 0.2375
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 475248.5,
            "ask_depth_notional": 1368965.5,
            "mid_price": 0.2375
          },
          {
            "bucket": "16:00",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 475248.5,
            "ask_depth_notional": 1368485.5,
            "mid_price": 0.2375
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 465236.0,
            "ask_depth_notional": 1366375.5,
            "mid_price": 0.2375
          }
        ],
        "summary": {
          "median_spread_pct": 0.02105263157894739,
          "median_spread_ticks": 1.0000000000000009,
          "median_bid_depth_notional": 486998.5,
          "median_ask_depth_notional": 1315700.5,
          "tightest_bucket": "09:00",
          "widest_bucket": "11:30",
          "deepest_bid_bucket": "09:00",
          "thinnest_bid_bucket": "16:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 26.2,
      "peers": [
        {
          "ticker": "ITS",
          "pct": 112.8
        },
        {
          "ticker": "42F",
          "pct": 445.4
        },
        {
          "ticker": "J03",
          "pct": 770.3
        },
        {
          "ticker": "LVR",
          "pct": 4851.8
        },
        {
          "ticker": "U77",
          "pct": 18566.1
        },
        {
          "ticker": "532",
          "pct": 397614.3
        },
        {
          "ticker": "KUX",
          "pct": null
        },
        {
          "ticker": "NXR",
          "pct": null
        }
      ]
    },
    "trader_composition": {
      "primary_period": "3m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 18,
          "n_runs": 0,
          "n_trade_days": 1,
          "first_trade_date": "2026-04-28",
          "last_trade_date": "2026-04-28",
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
            "retail_pct": 0.8888888888888888,
            "mixed_pct": 0.1111111111111111,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5281632653061225,
            "mixed_qty_pct": 0.47183673469387755,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5294968908988129,
            "mixed_notional_pct": 0.4705031091011871,
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
              "retail": 16,
              "mixed": 2,
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
            "avg": 4913.888888888889,
            "median": 3506.25
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.8888888888888888,
              "mixed_pct": 0.1111111111111111,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5281632653061225,
              "mixed_qty_pct": 0.47183673469387755,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5294968908988129,
              "mixed_notional_pct": 0.4705031091011871,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4913.888888888889,
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
              "ticker": "LVR",
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
              "avg_trade_size": 2891.6666666666665,
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
              "ticker": "U77",
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
              "avg_trade_size": 2011.6,
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
              "ticker": "532",
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
              "avg_trade_size": 15.458273381294966,
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
              "ticker": "NXR",
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
              "avg_trade_size": 214.25,
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
              "ticker": "J03",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9142857142857143,
              "mixed_pct": 0.08571428571428572,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.6747939472811249,
              "mixed_qty_pct": 0.3252060527188752,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.6759109989441425,
              "mixed_notional_pct": 0.3240890010558574,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5547.285714285715,
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
              "ticker": "42F",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8541666666666666,
              "mixed_pct": 0.125,
              "instit_pct": 0.020833333333333332,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.3958563107858061,
              "mixed_qty_pct": 0.3942702968762818,
              "instit_qty_pct": 0.2098733923379121,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.397844031514863,
              "mixed_notional_pct": 0.3934977788437663,
              "instit_notional_pct": 0.20865818964137073,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 6896.745833333333,
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
              "retail_pct": 0.8016528925619835,
              "mixed_pct": 0.17768595041322313,
              "instit_pct": 0.02066115702479339,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.19657995947231297,
              "mixed_qty_pct": 0.5455316157313593,
              "instit_qty_pct": 0.2578884247963277,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.19625125226391416,
              "mixed_notional_pct": 0.5460905867121387,
              "instit_notional_pct": 0.25765816102394706,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 9869.521694214876,
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
        "1w": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 261,
          "n_runs": 0,
          "n_trade_days": 5,
          "first_trade_date": "2026-04-22",
          "last_trade_date": "2026-04-28",
          "period_days": 6,
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
            "retail_pct": 0.8467432950191571,
            "mixed_pct": 0.13409961685823754,
            "instit_pct": 0.019157088122605363,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2959575162295654,
            "mixed_qty_pct": 0.4433005929276223,
            "instit_qty_pct": 0.2607418908428123,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.2936613543966282,
            "mixed_notional_pct": 0.44206482276987785,
            "instit_notional_pct": 0.26427382283349393,
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
              "retail": 221,
              "mixed": 35,
              "institutional": 5,
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
            "avg": 8702.833333333334,
            "median": 2500.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.8467432950191571,
              "mixed_pct": 0.13409961685823754,
              "instit_pct": 0.019157088122605363,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.2959575162295654,
              "mixed_qty_pct": 0.4433005929276223,
              "instit_qty_pct": 0.2607418908428123,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.2936613543966282,
              "mixed_notional_pct": 0.44206482276987785,
              "instit_notional_pct": 0.26427382283349393,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 8702.833333333334,
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
              "ticker": "U77",
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
              "avg_trade_size": 1542.1266666666666,
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
              "ticker": "532",
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
              "avg_trade_size": 330.74608294930874,
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
              "ticker": "KUX",
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
              "avg_trade_size": 523.7384615384615,
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
              "ticker": "NXR",
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
              "avg_trade_size": 571.7777777777778,
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
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.967741935483871,
              "mixed_pct": 0.03225806451612903,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.82174688057041,
              "mixed_qty_pct": 0.17825311942959002,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.8178907037296598,
              "mixed_notional_pct": 0.18210929627034023,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3153.016129032258,
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
              "ticker": "J03",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9281914893617021,
              "mixed_pct": 0.07180851063829788,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.671699215896362,
              "mixed_qty_pct": 0.32830078410363805,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.6738042097747874,
              "mixed_notional_pct": 0.32619579022521267,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5021.494680851064,
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
              "retail_pct": 0.9277227722772278,
              "mixed_pct": 0.06584158415841584,
              "instit_pct": 0.006435643564356435,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.36398632847634466,
              "mixed_qty_pct": 0.46136595310907236,
              "instit_qty_pct": 0.17464771841458296,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.37012436917874614,
              "mixed_notional_pct": 0.4584628716464757,
              "instit_notional_pct": 0.17141275917477813,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4192.5839108910895,
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
              "ticker": "42F",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8125,
              "mixed_pct": 0.1736111111111111,
              "instit_pct": 0.013888888888888888,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.35198004776922975,
              "mixed_qty_pct": 0.5048495005344348,
              "instit_qty_pct": 0.1431704516963355,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.35584872081799407,
              "mixed_notional_pct": 0.5009109752148476,
              "instit_notional_pct": 0.1432403039671584,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 7587.259722222221,
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
          "n_trades": 940,
          "n_runs": 0,
          "n_trade_days": 21,
          "first_trade_date": "2026-03-30",
          "last_trade_date": "2026-04-28",
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
            "retail_pct": 0.8563829787234043,
            "mixed_pct": 0.125531914893617,
            "instit_pct": 0.018085106382978722,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2918746370764305,
            "mixed_qty_pct": 0.4672107479319306,
            "instit_qty_pct": 0.24091461499163888,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.2895506933040536,
            "mixed_notional_pct": 0.46576334275481374,
            "instit_notional_pct": 0.24468596394113268,
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
              "retail": 805,
              "mixed": 118,
              "institutional": 17,
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
            "avg": 8050.488297872341,
            "median": 1832.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.8563829787234043,
              "mixed_pct": 0.125531914893617,
              "instit_pct": 0.018085106382978722,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.2918746370764305,
              "mixed_qty_pct": 0.4672107479319306,
              "instit_qty_pct": 0.24091461499163888,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.2895506933040536,
              "mixed_notional_pct": 0.46576334275481374,
              "instit_notional_pct": 0.24468596394113268,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 8050.488297872341,
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
              "ticker": "532",
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
              "avg_trade_size": 402.6413385826772,
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
              "ticker": "KUX",
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
              "avg_trade_size": 510.14,
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
              "ticker": "NXR",
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
              "avg_trade_size": 2394.235294117647,
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
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9891304347826086,
              "mixed_pct": 0.010869565217391304,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.9005667694143382,
              "mixed_qty_pct": 0.09943323058566172,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.9006316630464635,
              "mixed_notional_pct": 0.09936833695353657,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2176.7934782608695,
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
              "ticker": "J03",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9329556185080264,
              "mixed_pct": 0.06704438149197356,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.6845293639143158,
              "mixed_qty_pct": 0.3154706360856841,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.6799260506583575,
              "mixed_notional_pct": 0.3200739493416424,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4618.734938621341,
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
              "retail_pct": 0.9262867647058823,
              "mixed_pct": 0.06636029411764706,
              "instit_pct": 0.007352941176470588,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.35964553894704215,
              "mixed_qty_pct": 0.45960186528789393,
              "instit_qty_pct": 0.1807525957650639,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.36118552643053575,
              "mixed_notional_pct": 0.458045485855137,
              "instit_notional_pct": 0.18076898771432723,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4011.3229779411763,
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
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8770491803278688,
              "mixed_pct": 0.12295081967213115,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.4844064386317907,
              "mixed_qty_pct": 0.5155935613682092,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.4980749967095645,
              "mixed_notional_pct": 0.5019250032904355,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5200.118852459016,
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
              "ticker": "42F",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8327586206896552,
              "mixed_pct": 0.15172413793103448,
              "instit_pct": 0.015517241379310345,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.31221734963552406,
              "mixed_qty_pct": 0.4579147910434757,
              "instit_qty_pct": 0.2298678593210002,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.31461776825384036,
              "mixed_notional_pct": 0.45963893086922875,
              "instit_notional_pct": 0.22574330087693098,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 8117.3967241379305,
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
          "n_trades": 5059,
          "n_runs": 0,
          "n_trade_days": 63,
          "first_trade_date": "2026-01-27",
          "last_trade_date": "2026-04-28",
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
            "retail_pct": 0.8966198853528365,
            "mixed_pct": 0.09488041114844831,
            "instit_pct": 0.00849970349871516,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.37394947271815704,
            "mixed_qty_pct": 0.48133566736631006,
            "instit_qty_pct": 0.14471485991553293,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3705155264736989,
            "mixed_notional_pct": 0.4829081040293454,
            "instit_notional_pct": 0.1465763694969557,
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
              "retail": 4536,
              "mixed": 480,
              "institutional": 43,
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
            "avg": 5719.636884759834,
            "median": 1125.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.8966198853528365,
              "mixed_pct": 0.09488041114844831,
              "instit_pct": 0.00849970349871516,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.37394947271815704,
              "mixed_qty_pct": 0.48133566736631006,
              "instit_qty_pct": 0.14471485991553293,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3705155264736989,
              "mixed_notional_pct": 0.4829081040293454,
              "instit_notional_pct": 0.1465763694969557,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5719.636884759834,
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
              "ticker": "532",
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
              "avg_trade_size": 401.9447272727273,
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
              "ticker": "KUX",
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
              "avg_trade_size": 452.0941176470588,
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
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9898648648648649,
              "mixed_pct": 0.010135135135135136,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.8488941862005033,
              "mixed_qty_pct": 0.15110581379949675,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.8429650887262388,
              "mixed_notional_pct": 0.15703491127376126,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1347.3344594594594,
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
              "ticker": "J03",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9402618657937807,
              "mixed_pct": 0.05973813420621931,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.7071019530138618,
              "mixed_qty_pct": 0.2928980469861382,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.6955073874414401,
              "mixed_notional_pct": 0.3044926125585597,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4284.325613747955,
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
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9352380952380952,
              "mixed_pct": 0.06476190476190476,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.6136829003894487,
              "mixed_qty_pct": 0.3863170996105513,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.6188828819124595,
              "mixed_notional_pct": 0.3811171180875405,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4102.460952380952,
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
              "ticker": "NXR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.926829268292683,
              "mixed_pct": 0.06097560975609756,
              "instit_pct": 0.012195121951219513,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.25494660804020103,
              "mixed_qty_pct": 0.11691268844221106,
              "instit_qty_pct": 0.628140703517588,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.2569291033550734,
              "mixed_notional_pct": 0.12574864660960258,
              "instit_notional_pct": 0.6173222500353239,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 11694.884146341463,
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
              "retail_pct": 0.9094134975897161,
              "mixed_pct": 0.0819496518478843,
              "instit_pct": 0.008636850562399571,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.3510300852437756,
              "mixed_qty_pct": 0.46276157410534563,
              "instit_qty_pct": 0.18620834065087877,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.35315997807397354,
              "mixed_notional_pct": 0.46069901189204543,
              "instit_notional_pct": 0.18614101003398104,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4927.888290037493,
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
              "ticker": "42F",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9028527370855821,
              "mixed_pct": 0.09020817270624518,
              "instit_pct": 0.006939090208172706,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.4551978355876761,
              "mixed_qty_pct": 0.39437885273679724,
              "instit_qty_pct": 0.15042331167552667,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.442093435123523,
              "mixed_notional_pct": 0.404018082573359,
              "instit_notional_pct": 0.15388848230311802,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5324.925597532768,
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
      "n_trades": 5059,
      "n_runs": 0,
      "n_trade_days": 63,
      "first_trade_date": "2026-01-27",
      "last_trade_date": "2026-04-28",
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
        "retail_pct": 0.8966198853528365,
        "mixed_pct": 0.09488041114844831,
        "instit_pct": 0.00849970349871516,
        "ambiguous_pct": null,
        "unobservable_pct": null,
        "unclear_pct": null,
        "retail_qty_pct": null,
        "mixed_qty_pct": null,
        "instit_qty_pct": null,
        "ambiguous_qty_pct": null,
        "unobservable_qty_pct": null,
        "unclear_qty_pct": null,
        "retail_notional_pct": 0.3705155264736989,
        "mixed_notional_pct": 0.4829081040293454,
        "instit_notional_pct": 0.1465763694969557,
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
        "avg": 5719.636884759834,
        "median": 1125.0
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
            "n_trades": 866,
            "n_runs": 0,
            "retail_pct": 0.8498845265588915,
            "mixed_pct": 0.13048498845265588,
            "instit_pct": 0.019630484988452657,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 8365.288106235566,
            "avg_run_notional": null,
            "retail_qty_pct": 0.27227282088074883,
            "mixed_qty_pct": 0.47553992200941997,
            "instit_qty_pct": 0.2521872571098312,
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
            "total_quantity": 30106200.0
          },
          {
            "month": "2026-03",
            "n_trades": 1026,
            "n_runs": 0,
            "retail_pct": 0.928849902534113,
            "mixed_pct": 0.06920077972709551,
            "instit_pct": 0.001949317738791423,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 4442.360623781677,
            "avg_run_notional": null,
            "retail_qty_pct": 0.5525152116368385,
            "mixed_qty_pct": 0.4064222944197647,
            "instit_qty_pct": 0.0410624939433969,
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
            "total_quantity": 19606700.0
          },
          {
            "month": "2026-02",
            "n_trades": 2084,
            "n_runs": 0,
            "retail_pct": 0.9021113243761996,
            "mixed_pct": 0.09213051823416507,
            "instit_pct": 0.005758157389635317,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 5392.230326295586,
            "avg_run_notional": null,
            "retail_qty_pct": 0.4015510527645414,
            "mixed_qty_pct": 0.4952392567491049,
            "instit_qty_pct": 0.1032096904863537,
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
            "total_quantity": 45917200.0
          },
          {
            "month": "2026-01",
            "n_trades": 2477,
            "n_runs": 0,
            "retail_pct": 0.8389180460234155,
            "mixed_pct": 0.14937424303593055,
            "instit_pct": 0.011707710940654016,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 7226.47779572063,
            "avg_run_notional": null,
            "retail_qty_pct": 0.27654494081056014,
            "mixed_qty_pct": 0.5780789376207284,
            "instit_qty_pct": 0.1453761215687115,
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
            "total_quantity": 65332600.0
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "TKU",
          "currency": "SGD",
          "is_target": true,
          "retail_pct": 0.8966198853528365,
          "mixed_pct": 0.09488041114844831,
          "instit_pct": 0.00849970349871516,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.37394947271815704,
          "mixed_qty_pct": 0.48133566736631006,
          "instit_qty_pct": 0.14471485991553293,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.3705155264736989,
          "mixed_notional_pct": 0.4829081040293454,
          "instit_notional_pct": 0.1465763694969557,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 5719.636884759834,
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
          "ticker": "532",
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
          "avg_trade_size": 401.9447272727273,
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
          "ticker": "KUX",
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
          "avg_trade_size": 452.0941176470588,
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
          "ticker": "U77",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9898648648648649,
          "mixed_pct": 0.010135135135135136,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.8488941862005033,
          "mixed_qty_pct": 0.15110581379949675,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.8429650887262388,
          "mixed_notional_pct": 0.15703491127376126,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 1347.3344594594594,
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
          "ticker": "J03",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9402618657937807,
          "mixed_pct": 0.05973813420621931,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.7071019530138618,
          "mixed_qty_pct": 0.2928980469861382,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.6955073874414401,
          "mixed_notional_pct": 0.3044926125585597,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 4284.325613747955,
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
          "ticker": "LVR",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9352380952380952,
          "mixed_pct": 0.06476190476190476,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.6136829003894487,
          "mixed_qty_pct": 0.3863170996105513,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.6188828819124595,
          "mixed_notional_pct": 0.3811171180875405,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 4102.460952380952,
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
          "ticker": "NXR",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.926829268292683,
          "mixed_pct": 0.06097560975609756,
          "instit_pct": 0.012195121951219513,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.25494660804020103,
          "mixed_qty_pct": 0.11691268844221106,
          "instit_qty_pct": 0.628140703517588,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.2569291033550734,
          "mixed_notional_pct": 0.12574864660960258,
          "instit_notional_pct": 0.6173222500353239,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 11694.884146341463,
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
          "retail_pct": 0.9094134975897161,
          "mixed_pct": 0.0819496518478843,
          "instit_pct": 0.008636850562399571,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.3510300852437756,
          "mixed_qty_pct": 0.46276157410534563,
          "instit_qty_pct": 0.18620834065087877,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.35315997807397354,
          "mixed_notional_pct": 0.46069901189204543,
          "instit_notional_pct": 0.18614101003398104,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 4927.888290037493,
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
          "ticker": "42F",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9028527370855821,
          "mixed_pct": 0.09020817270624518,
          "instit_pct": 0.006939090208172706,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.4551978355876761,
          "mixed_qty_pct": 0.39437885273679724,
          "instit_qty_pct": 0.15042331167552667,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.442093435123523,
          "mixed_notional_pct": 0.404018082573359,
          "instit_notional_pct": 0.15388848230311802,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 5324.925597532768,
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
            "ticker": "TKU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.8888888888888888,
            "mixed_pct": 0.1111111111111111,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5281632653061225,
            "mixed_qty_pct": 0.47183673469387755,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5294968908988129,
            "mixed_notional_pct": 0.4705031091011871,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4913.888888888889,
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
            "ticker": "LVR",
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
            "avg_trade_size": 2891.6666666666665,
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
            "ticker": "U77",
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
            "avg_trade_size": 2011.6,
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
            "ticker": "532",
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
            "avg_trade_size": 15.458273381294966,
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
            "ticker": "NXR",
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
            "avg_trade_size": 214.25,
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
            "ticker": "J03",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9142857142857143,
            "mixed_pct": 0.08571428571428572,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6747939472811249,
            "mixed_qty_pct": 0.3252060527188752,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6759109989441425,
            "mixed_notional_pct": 0.3240890010558574,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5547.285714285715,
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
            "ticker": "42F",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8541666666666666,
            "mixed_pct": 0.125,
            "instit_pct": 0.020833333333333332,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3958563107858061,
            "mixed_qty_pct": 0.3942702968762818,
            "instit_qty_pct": 0.2098733923379121,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.397844031514863,
            "mixed_notional_pct": 0.3934977788437663,
            "instit_notional_pct": 0.20865818964137073,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 6896.745833333333,
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
            "retail_pct": 0.8016528925619835,
            "mixed_pct": 0.17768595041322313,
            "instit_pct": 0.02066115702479339,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.19657995947231297,
            "mixed_qty_pct": 0.5455316157313593,
            "instit_qty_pct": 0.2578884247963277,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.19625125226391416,
            "mixed_notional_pct": 0.5460905867121387,
            "instit_notional_pct": 0.25765816102394706,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 9869.521694214876,
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
        "1w": [
          {
            "ticker": "TKU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.8467432950191571,
            "mixed_pct": 0.13409961685823754,
            "instit_pct": 0.019157088122605363,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2959575162295654,
            "mixed_qty_pct": 0.4433005929276223,
            "instit_qty_pct": 0.2607418908428123,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.2936613543966282,
            "mixed_notional_pct": 0.44206482276987785,
            "instit_notional_pct": 0.26427382283349393,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 8702.833333333334,
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
            "ticker": "U77",
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
            "avg_trade_size": 1542.1266666666666,
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
            "ticker": "532",
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
            "avg_trade_size": 330.74608294930874,
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
            "ticker": "KUX",
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
            "avg_trade_size": 523.7384615384615,
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
            "ticker": "NXR",
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
            "avg_trade_size": 571.7777777777778,
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
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.967741935483871,
            "mixed_pct": 0.03225806451612903,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.82174688057041,
            "mixed_qty_pct": 0.17825311942959002,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.8178907037296598,
            "mixed_notional_pct": 0.18210929627034023,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3153.016129032258,
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
            "ticker": "J03",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9281914893617021,
            "mixed_pct": 0.07180851063829788,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.671699215896362,
            "mixed_qty_pct": 0.32830078410363805,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6738042097747874,
            "mixed_notional_pct": 0.32619579022521267,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5021.494680851064,
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
            "retail_pct": 0.9277227722772278,
            "mixed_pct": 0.06584158415841584,
            "instit_pct": 0.006435643564356435,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.36398632847634466,
            "mixed_qty_pct": 0.46136595310907236,
            "instit_qty_pct": 0.17464771841458296,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.37012436917874614,
            "mixed_notional_pct": 0.4584628716464757,
            "instit_notional_pct": 0.17141275917477813,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4192.5839108910895,
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
            "ticker": "42F",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8125,
            "mixed_pct": 0.1736111111111111,
            "instit_pct": 0.013888888888888888,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.35198004776922975,
            "mixed_qty_pct": 0.5048495005344348,
            "instit_qty_pct": 0.1431704516963355,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.35584872081799407,
            "mixed_notional_pct": 0.5009109752148476,
            "instit_notional_pct": 0.1432403039671584,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 7587.259722222221,
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
            "ticker": "TKU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.8563829787234043,
            "mixed_pct": 0.125531914893617,
            "instit_pct": 0.018085106382978722,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2918746370764305,
            "mixed_qty_pct": 0.4672107479319306,
            "instit_qty_pct": 0.24091461499163888,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.2895506933040536,
            "mixed_notional_pct": 0.46576334275481374,
            "instit_notional_pct": 0.24468596394113268,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 8050.488297872341,
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
            "ticker": "532",
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
            "avg_trade_size": 402.6413385826772,
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
            "ticker": "KUX",
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
            "avg_trade_size": 510.14,
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
            "ticker": "NXR",
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
            "avg_trade_size": 2394.235294117647,
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
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9891304347826086,
            "mixed_pct": 0.010869565217391304,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.9005667694143382,
            "mixed_qty_pct": 0.09943323058566172,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.9006316630464635,
            "mixed_notional_pct": 0.09936833695353657,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2176.7934782608695,
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
            "ticker": "J03",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9329556185080264,
            "mixed_pct": 0.06704438149197356,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6845293639143158,
            "mixed_qty_pct": 0.3154706360856841,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6799260506583575,
            "mixed_notional_pct": 0.3200739493416424,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4618.734938621341,
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
            "retail_pct": 0.9262867647058823,
            "mixed_pct": 0.06636029411764706,
            "instit_pct": 0.007352941176470588,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.35964553894704215,
            "mixed_qty_pct": 0.45960186528789393,
            "instit_qty_pct": 0.1807525957650639,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.36118552643053575,
            "mixed_notional_pct": 0.458045485855137,
            "instit_notional_pct": 0.18076898771432723,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4011.3229779411763,
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
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8770491803278688,
            "mixed_pct": 0.12295081967213115,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.4844064386317907,
            "mixed_qty_pct": 0.5155935613682092,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.4980749967095645,
            "mixed_notional_pct": 0.5019250032904355,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5200.118852459016,
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
            "ticker": "42F",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8327586206896552,
            "mixed_pct": 0.15172413793103448,
            "instit_pct": 0.015517241379310345,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.31221734963552406,
            "mixed_qty_pct": 0.4579147910434757,
            "instit_qty_pct": 0.2298678593210002,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.31461776825384036,
            "mixed_notional_pct": 0.45963893086922875,
            "instit_notional_pct": 0.22574330087693098,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 8117.3967241379305,
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
            "ticker": "TKU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.8966198853528365,
            "mixed_pct": 0.09488041114844831,
            "instit_pct": 0.00849970349871516,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.37394947271815704,
            "mixed_qty_pct": 0.48133566736631006,
            "instit_qty_pct": 0.14471485991553293,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3705155264736989,
            "mixed_notional_pct": 0.4829081040293454,
            "instit_notional_pct": 0.1465763694969557,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5719.636884759834,
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
            "ticker": "532",
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
            "avg_trade_size": 401.9447272727273,
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
            "ticker": "KUX",
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
            "avg_trade_size": 452.0941176470588,
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
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9898648648648649,
            "mixed_pct": 0.010135135135135136,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.8488941862005033,
            "mixed_qty_pct": 0.15110581379949675,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.8429650887262388,
            "mixed_notional_pct": 0.15703491127376126,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1347.3344594594594,
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
            "ticker": "J03",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9402618657937807,
            "mixed_pct": 0.05973813420621931,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.7071019530138618,
            "mixed_qty_pct": 0.2928980469861382,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6955073874414401,
            "mixed_notional_pct": 0.3044926125585597,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4284.325613747955,
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
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9352380952380952,
            "mixed_pct": 0.06476190476190476,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6136829003894487,
            "mixed_qty_pct": 0.3863170996105513,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6188828819124595,
            "mixed_notional_pct": 0.3811171180875405,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4102.460952380952,
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
            "ticker": "NXR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.926829268292683,
            "mixed_pct": 0.06097560975609756,
            "instit_pct": 0.012195121951219513,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.25494660804020103,
            "mixed_qty_pct": 0.11691268844221106,
            "instit_qty_pct": 0.628140703517588,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.2569291033550734,
            "mixed_notional_pct": 0.12574864660960258,
            "instit_notional_pct": 0.6173222500353239,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 11694.884146341463,
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
            "retail_pct": 0.9094134975897161,
            "mixed_pct": 0.0819496518478843,
            "instit_pct": 0.008636850562399571,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3510300852437756,
            "mixed_qty_pct": 0.46276157410534563,
            "instit_qty_pct": 0.18620834065087877,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.35315997807397354,
            "mixed_notional_pct": 0.46069901189204543,
            "instit_notional_pct": 0.18614101003398104,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4927.888290037493,
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
            "ticker": "42F",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9028527370855821,
            "mixed_pct": 0.09020817270624518,
            "instit_pct": 0.006939090208172706,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.4551978355876761,
            "mixed_qty_pct": 0.39437885273679724,
            "instit_qty_pct": 0.15042331167552667,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.442093435123523,
            "mixed_notional_pct": 0.404018082573359,
            "instit_notional_pct": 0.15388848230311802,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5324.925597532768,
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
      "total_trades": 6452,
      "price_moving_trades": 1293,
      "pct_price_moving": 20.040297582145072,
      "all_movers": {
        "count": 1293,
        "avg_size": 6897.817865429234,
        "median_size": 927.5,
        "retail_count": 1100,
        "mixed_count": 177,
        "institutional_count": 16,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 85.07347254447022,
        "mixed_pct": 13.68909512761021,
        "instit_pct": 1.237432327919567,
        "unclear_pct": null
      },
      "positive_movers": {
        "count": 648,
        "avg_size": 5048.077932098766,
        "median_size": 69.0,
        "retail_count": 575,
        "mixed_count": 68,
        "institutional_count": 5,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 88.73456790123457,
        "mixed_pct": 10.493827160493826,
        "instit_pct": 0.7716049382716049,
        "unclear_pct": null
      },
      "negative_movers": {
        "count": 645,
        "avg_size": 8756.161240310077,
        "median_size": 2400.0,
        "retail_count": 525,
        "mixed_count": 109,
        "institutional_count": 11,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 81.3953488372093,
        "mixed_pct": 16.899224806201552,
        "instit_pct": 1.7054263565891472,
        "unclear_pct": null
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
        "n_days_short_data": 65,
        "window_days": 63
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
            "avg_short_ratio": 0.007430047525337164,
            "max_short_ratio": 0.0924792304328815,
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
            "month": "2026-04",
            "avg_short_ratio": 0.0
          },
          {
            "month": "2026-03",
            "avg_short_ratio": 0.006996731109067539
          },
          {
            "month": "2026-02",
            "avg_short_ratio": 0.014753167520636205
          },
          {
            "month": "2026-01",
            "avg_short_ratio": 0.009069182023479604
          }
        ],
        "mom_change": [
          {
            "month": "2026-04",
            "avg_short_ratio": 0.0,
            "change_pct": null
          },
          {
            "month": "2026-03",
            "avg_short_ratio": 0.006996731109067539,
            "change_pct": null
          },
          {
            "month": "2026-02",
            "avg_short_ratio": 0.014753167520636205,
            "change_pct": 110.85800341128693
          },
          {
            "month": "2026-01",
            "avg_short_ratio": 0.009069182023479604,
            "change_pct": -38.527221284554955
          }
        ],
        "interpretation": "Shorts covering significantly (-100% MoM)"
      },
      "short_series": {
        "valid": true,
        "rows": [
          {
            "date": "2026-04-28",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 417500,
            "close": 0.24,
            "return": -0.020408163265306145
          },
          {
            "date": "2026-04-27",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1888200,
            "close": 0.245,
            "return": -0.020000000000000018
          },
          {
            "date": "2026-04-24",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 444200,
            "close": 0.25,
            "return": -0.019607843137254943
          },
          {
            "date": "2026-04-23",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1814600,
            "close": 0.255,
            "return": -0.019230769230769273
          },
          {
            "date": "2026-04-22",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 5476800,
            "close": 0.26,
            "return": 0.019607843137254832
          },
          {
            "date": "2026-04-21",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 7842700,
            "close": 0.255,
            "return": 0.08510638297872353
          },
          {
            "date": "2026-04-20",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 824200,
            "close": 0.235,
            "return": 0.021739130434782483
          },
          {
            "date": "2026-04-17",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 818600,
            "close": 0.23,
            "return": -0.061224489795918324
          },
          {
            "date": "2026-04-16",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 9893900,
            "close": 0.245,
            "return": 0.06521739130434767
          },
          {
            "date": "2026-04-15",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 550400,
            "close": 0.23,
            "return": 0.0
          },
          {
            "date": "2026-04-14",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 512100,
            "close": 0.23,
            "return": 0.045454545454545414
          },
          {
            "date": "2026-04-13",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1064200,
            "close": 0.22,
            "return": -0.0434782608695653
          },
          {
            "date": "2026-04-10",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 777400,
            "close": 0.23,
            "return": 0.0
          },
          {
            "date": "2026-04-09",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1029700,
            "close": 0.23,
            "return": 0.022222222222222143
          },
          {
            "date": "2026-04-08",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1591000,
            "close": 0.225,
            "return": 0.022727272727272707
          },
          {
            "date": "2026-04-07",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 730200,
            "close": 0.22,
            "return": 0.0
          },
          {
            "date": "2026-04-06",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1221000,
            "close": 0.22,
            "return": -0.0434782608695653
          },
          {
            "date": "2026-04-02",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 466000,
            "close": 0.23,
            "return": 0.0
          },
          {
            "date": "2026-04-01",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 632200,
            "close": 0.23,
            "return": 0.022222222222222143
          },
          {
            "date": "2026-03-31",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 578100,
            "close": 0.225,
            "return": 0.0
          },
          {
            "date": "2026-03-30",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 463200,
            "close": 0.225,
            "return": -0.021739130434782594
          },
          {
            "date": "2026-03-27",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 476800,
            "close": 0.23,
            "return": 0.0
          },
          {
            "date": "2026-03-26",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 458600,
            "close": 0.23,
            "return": 0.0
          },
          {
            "date": "2026-03-25",
            "short_ratio": 0.03807390817469205,
            "short_vol": 17000,
            "total_vol": 446500,
            "close": 0.23,
            "return": -0.02127659574468077
          },
          {
            "date": "2026-03-24",
            "short_ratio": 0.02231404958677686,
            "short_vol": 13500,
            "total_vol": 605000,
            "close": 0.235,
            "return": 0.04444444444444429
          },
          {
            "date": "2026-03-23",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 788800,
            "close": 0.225,
            "return": -0.021739130434782594
          },
          {
            "date": "2026-03-20",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 586700,
            "close": 0.23,
            "return": -0.02127659574468077
          },
          {
            "date": "2026-03-19",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 581900,
            "close": 0.235,
            "return": -0.02083333333333337
          },
          {
            "date": "2026-03-18",
            "short_ratio": 0.0020242914979757085,
            "short_vol": 1700,
            "total_vol": 839800,
            "close": 0.24,
            "return": -0.020408163265306145
          },
          {
            "date": "2026-03-17",
            "short_ratio": 0.07371154614462645,
            "short_vol": 36900,
            "total_vol": 500600,
            "close": 0.245,
            "return": -0.020000000000000018
          },
          {
            "date": "2026-03-16",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 921800,
            "close": 0.25,
            "return": 0.0
          },
          {
            "date": "2026-03-13",
            "short_ratio": 0.007331217857533647,
            "short_vol": 6700,
            "total_vol": 913900,
            "close": 0.25,
            "return": 0.0
          },
          {
            "date": "2026-03-12",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2461200,
            "close": 0.25,
            "return": 0.06382978723404253
          },
          {
            "date": "2026-03-11",
            "short_ratio": 0.002012578616352201,
            "short_vol": 1600,
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
            "short_ratio": 0.008460492521528931,
            "short_vol": 16800,
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
            "short_ratio": 0.0629643621710112,
            "short_vol": 100000,
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
            "short_ratio": 0.0924792304328815,
            "short_vol": 380700,
            "total_vol": 4116600,
            "close": 0.22,
            "return": -0.06382978723404253
          },
          {
            "date": "2026-02-06",
            "short_ratio": 0.07566872528200433,
            "short_vol": 388400,
            "total_vol": 5132900,
            "close": 0.235,
            "return": -0.06000000000000005
          },
          {
            "date": "2026-02-05",
            "short_ratio": 0.009976720984369804,
            "short_vol": 30000,
            "total_vol": 3007000,
            "close": 0.25,
            "return": 0.0
          },
          {
            "date": "2026-02-04",
            "short_ratio": 0.014653168944735494,
            "short_vol": 37200,
            "total_vol": 2538700,
            "close": 0.25,
            "return": -0.05660377358490576
          },
          {
            "date": "2026-02-03",
            "short_ratio": 0.0029329962073324904,
            "short_vol": 5800,
            "total_vol": 1977500,
            "close": 0.265,
            "return": 0.03921568627450989
          },
          {
            "date": "2026-02-02",
            "short_ratio": 0.006881811349116873,
            "short_vol": 58600,
            "total_vol": 8515200,
            "close": 0.255,
            "return": -0.037735849056603765
          },
          {
            "date": "2026-01-30",
            "short_ratio": 0.0030064912880081993,
            "short_vol": 44000,
            "total_vol": 14635000,
            "close": 0.265,
            "return": 0.03921568627450989
          },
          {
            "date": "2026-01-29",
            "short_ratio": 0.012090950356951265,
            "short_vol": 29300,
            "total_vol": 2423300,
            "close": 0.255,
            "return": 0.020000000000000018
          },
          {
            "date": "2026-01-28",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2401500,
            "close": 0.25,
            "return": -0.03846153846153855
          },
          {
            "date": "2026-01-27",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 3285000,
            "close": 0.26,
            "return": 0.0
          },
          {
            "date": "2026-01-26",
            "short_ratio": 0.021019119182513736,
            "short_vol": 122800,
            "total_vol": 5842300,
            "close": 0.26,
            "return": -0.018867924528301883
          },
          {
            "date": "2026-01-23",
            "short_ratio": 0.027351428548504857,
            "short_vol": 340900,
            "total_vol": 12463700,
            "close": 0.265,
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
          "ticker": "42F",
          "avg_short_ratio": 2.483362801042565e-05,
          "max_short_ratio": 0.0071947622131088565,
          "is_target": false
        },
        {
          "ticker": "NXR",
          "avg_short_ratio": 8.65901786755033e-05,
          "max_short_ratio": 0.03229813664596273,
          "is_target": false
        },
        {
          "ticker": "J03",
          "avg_short_ratio": 0.00028511260075606427,
          "max_short_ratio": 0.039047524386953865,
          "is_target": false
        },
        {
          "ticker": "ITS",
          "avg_short_ratio": 0.0030805575114424564,
          "max_short_ratio": 0.1385606874328679,
          "is_target": false
        },
        {
          "ticker": "U77",
          "avg_short_ratio": 0.0036008850613087648,
          "max_short_ratio": 1.0,
          "is_target": false
        }
      ]
    },
    "intraday": {
      "session_periods": [
        "1D",
        "1W",
        "1M",
        "3M"
      ],
      "session": {
        "1D": {
          "opening": 0.021400818996240443,
          "continuous": 0.7445004262693743,
          "closing": 0.04922188369135302,
          "auctions": 0.2554995737306257,
          "other": 0.0
        },
        "1W": {
          "opening": 0.013959920534392874,
          "continuous": 0.9312683297556033,
          "closing": 0.0320851188650818,
          "auctions": 0.06873167024439675,
          "other": 0.0
        },
        "1M": {
          "opening": 0.011122183304506324,
          "continuous": 0.960053449546926,
          "closing": 0.017625187020403475,
          "auctions": 0.03994655045307408,
          "other": 0.0
        },
        "3M": {
          "opening": 0.015422850207636677,
          "continuous": 0.9525757765657061,
          "closing": 0.024102682519211802,
          "auctions": 0.047424223434293845,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.26907349803749336,
        "1W": 0.3259422982950399,
        "1M": 0.34196390848357966,
        "3M": 0.26290812833553023
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.0106
        },
        {
          "time": "09:00",
          "avg_share": 0.1196
        },
        {
          "time": "09:30",
          "avg_share": 0.1038
        },
        {
          "time": "10:00",
          "avg_share": 0.0561
        },
        {
          "time": "10:30",
          "avg_share": 0.064
        },
        {
          "time": "11:00",
          "avg_share": 0.048
        },
        {
          "time": "11:30",
          "avg_share": 0.0626
        },
        {
          "time": "12:00",
          "avg_share": 0.0025
        },
        {
          "time": "12:30",
          "avg_share": 0.011
        },
        {
          "time": "13:00",
          "avg_share": 0.0717
        },
        {
          "time": "13:30",
          "avg_share": 0.0608
        },
        {
          "time": "14:00",
          "avg_share": 0.0766
        },
        {
          "time": "14:30",
          "avg_share": 0.0598
        },
        {
          "time": "15:00",
          "avg_share": 0.0454
        },
        {
          "time": "15:30",
          "avg_share": 0.0476
        },
        {
          "time": "16:00",
          "avg_share": 0.0505
        },
        {
          "time": "16:30",
          "avg_share": 0.0708
        },
        {
          "time": "17:00",
          "avg_share": 0.0387
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "TKU",
          "auctions_pct": 6.255530006304043,
          "hhi": 0.2605994834618954,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400",
            "you": true
          }
        },
        {
          "ticker": "KUX",
          "auctions_pct": 2.5745339729188172,
          "hhi": 0.7077179421101513,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "532",
          "auctions_pct": 6.658744042887524,
          "hhi": 0.806386953717323,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "U77",
          "auctions_pct": 4.5730608072866525,
          "hhi": 0.5335023280883302,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "J03",
          "auctions_pct": 4.796199186849233,
          "hhi": 0.6008564177289013,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "NXR",
          "auctions_pct": 3.488816522616065,
          "hhi": 0.7367153267777329,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "42F",
          "auctions_pct": 7.02342727728172,
          "hhi": 0.481201089764294,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "LVR",
          "auctions_pct": 2.865350555099572,
          "hhi": 0.4677888889296619,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "ITS",
          "auctions_pct": 3.2772055478352926,
          "hhi": 0.21306371194022067,
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
