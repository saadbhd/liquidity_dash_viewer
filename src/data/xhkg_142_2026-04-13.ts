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
      "ticker": "142",
      "name": "FIRST PACIFIC",
      "marketCap": 23569523760.370003,
      "sector": "Packaged Foods",
      "industry": "Consumer Staples - Food & Beverages"
    },
    {
      "ticker": "151",
      "name": "WANT WANT CHINA",
      "marketCap": 52641697262.1,
      "sector": "Packaged Foods",
      "industry": "Consumer Staples - Food & Beverages"
    },
    {
      "ticker": "9985",
      "name": "WL DELICIOUS",
      "marketCap": 22706899698.52,
      "sector": "Packaged Foods",
      "industry": "Consumer Staples - Food & Beverages"
    },
    {
      "ticker": "1768",
      "name": "BUSYMING",
      "marketCap": 84855518943.0,
      "sector": "Packaged Foods",
      "industry": "Consumer Staples - Food & Beverages"
    },
    {
      "ticker": "2517",
      "name": "GUOQUAN",
      "marketCap": 11752566912.0,
      "sector": "Packaged Foods",
      "industry": "Consumer Staples - Food & Beverages"
    },
    {
      "ticker": "288",
      "name": "WH GROUP",
      "marketCap": 136898442598.5,
      "sector": "Packaged Foods",
      "industry": "Consumer Staples - Food & Beverages"
    },
    {
      "ticker": "1475",
      "name": "NISSIN FOODS",
      "marketCap": 7671132378.0,
      "sector": "Packaged Foods",
      "industry": "Consumer Staples - Food & Beverages"
    },
    {
      "ticker": "1117",
      "name": "CH MODERN D",
      "marketCap": 11398553349.119999,
      "sector": "Dairy Products",
      "industry": "Consumer Staples - Food & Beverages"
    },
    {
      "ticker": "2460",
      "name": "CR BEVERAGE",
      "marketCap": 21895534958.0,
      "sector": "Non-alcoholic Beverages",
      "industry": "Consumer Staples - Food & Beverages"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XHKG",
    "currency": "HKD",
    "ticker": "142",
    "company": "FIRST PACIFIC",
    "asof_date": "2026-04-13",
    "industry": "Consumer Staples - Food & Beverages",
    "sector": "Packaged Foods",
    "market_cap_display": "23.6B",
    "market_cap_category": "large",
    "universe_total": 2576,
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
          "score_pca": 76.04813664596274,
          "score_pca_percentile": 76.04813664596274,
          "rank_pca": 618,
          "total": 2576,
          "adv_notional_sgd": 20029660.0,
          "adv_volume_shares": 3622000.0,
          "free_float_shares": 1995028545.0,
          "turnover_ratio": 0.0018155128702682297,
          "votes": 938.0,
          "trades": 938.0,
          "spread_pct": 0.002533020673183777,
          "spread_ticks": 1.3943050193050193,
          "amihud": 3.5853472029884773e-10,
          "volatility": 0.19015997474803847
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.536533084736281,
          "loadings": {
            "log_adv": 0.5421944887076002,
            "log_trades": 0.5059716646648841,
            "log_turnover": 0.5023725409014107,
            "neg_spread": 0.4025583101653533,
            "neg_amihud": 0.02972330686669568,
            "neg_vol": -0.18628734005652095
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
          "peer_median_adv": 31235188.64,
          "peer_median_score_pca": 80.93944099378882,
          "peer_median_trades": 1630.5,
          "peer_median_volatility": 0.3957938665947818,
          "peer_median_spread_pct": 0.003630869887168071,
          "peer_median_spread_ticks": 2.087300356644441,
          "peer_median_amihud": 4.939576112123479e-10,
          "peer_median_turnover_ratio": 0.004067599274446681,
          "target_vs_peer": {
            "score_pca_delta": -4.89,
            "adv_delta_pct": -35.9,
            "trades_delta_pct": -42.47,
            "volatility_delta_pct": 51.95,
            "spread_pct_delta_pct": 30.24,
            "spread_ticks_delta_pct": -33.2,
            "amihud_delta_pct": 27.42,
            "turnover_ratio_delta_pct": -55.37
          }
        },
        "peer_liquidity": [
          {
            "ticker": "142",
            "score_pca": 76.04813664596274,
            "rank_pca": 618,
            "adv": 20029660.0,
            "trades": 938.0,
            "volatility": 0.19015997474803847,
            "spread_pct": 0.002533020673183777,
            "spread_ticks": 1.3943050193050193,
            "amihud": 3.5853472029884773e-10,
            "turnover_ratio": 0.0018155128702682297,
            "is_target": true
          },
          {
            "ticker": "151",
            "score_pca": 81.3276397515528,
            "rank_pca": 482,
            "adv": 30271661.28,
            "trades": 2015.0,
            "volatility": 0.44154723558725606,
            "spread_pct": 0.0035103196224985657,
            "spread_ticks": 1.581949841045567,
            "amihud": 1.4177766637464967e-09,
            "turnover_ratio": 0.001392625256569777,
            "is_target": false
          },
          {
            "ticker": "9985",
            "score_pca": 87.22826086956522,
            "rank_pca": 330,
            "adv": 32198716.0,
            "trades": 3765.0,
            "volatility": 0.3639997672699633,
            "spread_pct": 0.0022338214102845754,
            "spread_ticks": 2.087300356644441,
            "amihud": 6.829318534258204e-10,
            "turnover_ratio": 0.006542767754927362,
            "is_target": false
          },
          {
            "ticker": "1768",
            "score_pca": 78.72670807453416,
            "rank_pca": 549,
            "adv": 41225700.0,
            "trades": 822.0,
            "volatility": 0.6287138071335513,
            "spread_pct": 0.004209003194740251,
            "spread_ticks": 8.45784346657709,
            "amihud": 6.604550746810182e-10,
            "turnover_ratio": 0.0013101964219247645,
            "is_target": false
          },
          {
            "ticker": "2517",
            "score_pca": 90.99378881987577,
            "rank_pca": 233,
            "adv": 60272501.07,
            "trades": 4382.0,
            "volatility": 0.4275879659196003,
            "spread_pct": 0.0028772303002770065,
            "spread_ticks": 1.278715840924239,
            "amihud": 3.2746014774367754e-10,
            "turnover_ratio": 0.011898769487969887,
            "is_target": false
          },
          {
            "ticker": "288",
            "score_pca": 93.59472049689441,
            "rank_pca": 166,
            "adv": 266152522.68,
            "trades": 8662.0,
            "volatility": 0.2597387454831607,
            "spread_pct": 0.0010565161467178416,
            "spread_ticks": null,
            "amihud": 5.550868501213675e-11,
            "turnover_ratio": 0.003507333820766604,
            "is_target": false
          },
          {
            "ticker": "1475",
            "score_pca": 47.98136645962733,
            "rank_pca": 1341,
            "adv": 264600.0,
            "trades": 26.0,
            "volatility": 0.14375837737080202,
            "spread_pct": 0.016300975024479063,
            "spread_ticks": 11.93939393939394,
            "amihud": 2.5885544476542623e-08,
            "turnover_ratio": 0.00019145933924829235,
            "is_target": false
          },
          {
            "ticker": "1117",
            "score_pca": 80.55124223602485,
            "rank_pca": 502,
            "adv": 22720320.0,
            "trades": 897.0,
            "volatility": 0.4587503186742594,
            "spread_pct": 0.008070900230067048,
            "spread_ticks": 1.1704035874439462,
            "amihud": 0.0,
            "turnover_ratio": 0.010824820028825443,
            "is_target": false
          },
          {
            "ticker": "2460",
            "score_pca": 78.1055900621118,
            "rank_pca": 565,
            "adv": 16824764.0,
            "trades": 1246.0,
            "volatility": 0.15706473141793545,
            "spread_pct": 0.0037514201518375756,
            "spread_ticks": 3.411964980544747,
            "amihud": 1.2991518631267053e-10,
            "turnover_ratio": 0.004627864728126759,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Packaged Foods",
          "sector_count": 35,
          "market_count": 2576,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.45538068815349253,
              "median": 0.2995098745205822,
              "min": 0.0,
              "max": 21.951956473421735,
              "p5": 0.0,
              "p95": 1.4093731639647114,
              "count": 2576
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 59122167.303579345,
              "median": 252316.0,
              "min": 0.0,
              "max": 10355121000.0,
              "p5": 0.0,
              "p95": 254971566.54,
              "count": 2576
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04854834441141965,
              "median": 0.027987082884822406,
              "min": 0.0004461756629917344,
              "max": 0.7648559970834851,
              "p5": 0.0014324597898074246,
              "p95": 0.1599403098239771,
              "count": 2575
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006523054850603215,
              "median": 0.0010286626312121148,
              "min": 0.0,
              "max": 2.271727824179446,
              "p5": 0.0,
              "p95": 0.021300561369894604,
              "count": 2553
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.3905492798207699e-05,
              "median": 6.909472437596244e-09,
              "min": 0.0,
              "max": 0.019525148391127775,
              "p5": 0.0,
              "p95": 8.165515057712393e-06,
              "count": 2183
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1126.8377329192547,
              "median": 22.0,
              "min": 0.0,
              "max": 69247.0,
              "p5": 0.0,
              "p95": 6156.5,
              "count": 2576
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.38924395778357623,
              "median": 0.3126054996063373,
              "min": 0.0,
              "max": 1.5395591332710286,
              "p5": 0.0,
              "p95": 1.014554997483302,
              "count": 35
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 14560411.290857146,
              "median": 131610.0,
              "min": 0.0,
              "max": 266152522.68,
              "p5": 1403.6050000000002,
              "p95": 48463570.32099995,
              "count": 35
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.042725217484666574,
              "median": 0.03250591016548467,
              "min": 0.0010565161467178416,
              "max": 0.12994350282485867,
              "p5": 0.0022347852178701026,
              "p95": 0.12097187084103211,
              "count": 35
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0022455667766807055,
              "median": 0.001023649165773764,
              "min": 0.0,
              "max": 0.016285177346589123,
              "p5": 4.178927999848249e-06,
              "p95": 0.008149568274840103,
              "count": 35
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.2500127269433383e-06,
              "median": 1.5029177645480943e-08,
              "min": 0.0,
              "max": 3.5943481570990704e-05,
              "p5": 0.0,
              "p95": 1.1829376201845824e-05,
              "count": 33
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 720.2285714285714,
              "median": 8.0,
              "min": 0.0,
              "max": 8662.0,
              "p5": 0.7000000000000002,
              "p95": 3950.099999999998,
              "count": 35
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 58741348.12875,
              "median": 31235188.64,
              "min": 264600.0,
              "max": 266152522.68,
              "p5": 6060657.4,
              "p95": 194094515.1164999,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2726.875,
              "median": 1630.5,
              "min": 26.0,
              "max": 8662.0,
              "p5": 304.6,
              "p95": 7163.999999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3601451186070661,
              "median": 0.3957938665947818,
              "min": 0.14375837737080202,
              "max": 0.6287138071335513,
              "p5": 0.14841560128729872,
              "p95": 0.5692265861727991,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.005251273260112741,
              "median": 0.003630869887168071,
              "min": 0.0010565161467178416,
              "max": 0.016300975024479063,
              "p5": 0.0014685729889661985,
              "p95": 0.013420448846434854,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 4.27536743036771,
              "median": 2.087300356644441,
              "min": 1.1704035874439462,
              "max": 11.93939393939394,
              "p5": 1.2028972634880342,
              "p95": 10.894928797548882,
              "count": 7
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.6449490109330554e-09,
              "median": 4.939576112123479e-10,
              "min": 0.0,
              "max": 2.5885544476542623e-08,
              "p5": 1.9428039754247865e-11,
              "p95": 1.7321825742063967e-08,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005036979604794861,
              "median": 0.004067599274446681,
              "min": 0.00019145933924829235,
              "max": 0.011898769487969887,
              "p5": 0.0005830173181850576,
              "p95": 0.01152288717726933,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": -0.007181328545781018,
            "market": -0.003911099438221655,
            "sector": -0.007181328545781018,
            "peers": -0.017255309325946433,
            "vs_market": -0.0032702291075593637,
            "vs_sector": 0.0,
            "vs_peers": 0.010073980780165415
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 79.30900621118012,
          "score_pca_percentile": 79.30900621118012,
          "rank_pca": 534,
          "total": 2576,
          "adv_notional_sgd": 24889501.0,
          "adv_volume_shares": 4336150.0,
          "free_float_shares": 1995028545.0,
          "turnover_ratio": 0.002173477673222966,
          "votes": 970.0,
          "trades": 970.0,
          "spread_pct": 0.0025967880275649916,
          "spread_ticks": 1.4746388982196843,
          "amihud": 3.469566779890472e-10,
          "volatility": 0.24130257183498813
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5652946346212361,
          "loadings": {
            "log_adv": 0.5257656813334872,
            "log_trades": 0.4817420523432071,
            "log_turnover": 0.4845897455438433,
            "neg_spread": 0.4612397830989785,
            "neg_amihud": 0.19459060401943834,
            "neg_vol": 0.07784716542045489
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
          "peer_median_adv": 33103904.0,
          "peer_median_score_pca": 83.57919254658384,
          "peer_median_trades": 1887.0,
          "peer_median_volatility": 0.4694005490494395,
          "peer_median_spread_pct": 0.003250603082409942,
          "peer_median_spread_ticks": 1.479671010153207,
          "peer_median_amihud": 5.214055198130926e-10,
          "peer_median_turnover_ratio": 0.005363300305286109,
          "target_vs_peer": {
            "score_pca_delta": -4.27,
            "adv_delta_pct": -24.8,
            "trades_delta_pct": -48.6,
            "volatility_delta_pct": 48.59,
            "spread_pct_delta_pct": 20.11,
            "spread_ticks_delta_pct": -0.34,
            "amihud_delta_pct": 33.46,
            "turnover_ratio_delta_pct": -59.47
          }
        },
        "peer_liquidity": [
          {
            "ticker": "142",
            "score_pca": 79.30900621118012,
            "rank_pca": 534,
            "adv": 24889501.0,
            "trades": 970.0,
            "volatility": 0.24130257183498813,
            "spread_pct": 0.0025967880275649916,
            "spread_ticks": 1.4746388982196843,
            "amihud": 3.469566779890472e-10,
            "turnover_ratio": 0.002173477673222966,
            "is_target": true
          },
          {
            "ticker": "151",
            "score_pca": 79.8524844720497,
            "rank_pca": 520,
            "adv": 26410690.0,
            "trades": 1602.0,
            "volatility": 0.31671496880987493,
            "spread_pct": 0.0031433768592230116,
            "spread_ticks": 1.4899116224779057,
            "amihud": 5.288036706109395e-10,
            "turnover_ratio": 0.0011567215427531583,
            "is_target": false
          },
          {
            "ticker": "9985",
            "score_pca": 87.84937888198758,
            "rank_pca": 314,
            "adv": 39797118.0,
            "trades": 3649.0,
            "volatility": 0.5393544420943941,
            "spread_pct": 0.0024279734890818305,
            "spread_ticks": 2.147110347917458,
            "amihud": 5.498796612992364e-10,
            "turnover_ratio": 0.0073830732919708975,
            "is_target": false
          },
          {
            "ticker": "1768",
            "score_pca": 79.8913043478261,
            "rank_pca": 519,
            "adv": 62274440.0,
            "trades": 1051.0,
            "volatility": 0.6751740329660079,
            "spread_pct": 0.0036161418303149047,
            "spread_ticks": 6.771760703147151,
            "amihud": 5.140073690152458e-10,
            "turnover_ratio": 0.0019621721437977167,
            "is_target": false
          },
          {
            "ticker": "2517",
            "score_pca": 90.6444099378882,
            "rank_pca": 242,
            "adv": 60579076.86,
            "trades": 4555.0,
            "volatility": 0.648639702630623,
            "spread_pct": 0.003357829305596873,
            "spread_ticks": 1.4232811255641094,
            "amihud": 4.767657350460556e-10,
            "turnover_ratio": 0.012307237299915365,
            "is_target": false
          },
          {
            "ticker": "288",
            "score_pca": 95.3027950310559,
            "rank_pca": 122,
            "adv": 289999807.62,
            "trades": 8553.0,
            "volatility": 0.39944665600448487,
            "spread_pct": 0.0011438435494522422,
            "spread_ticks": 1.1543242860248122,
            "amihud": 6.106035269331747e-11,
            "turnover_ratio": 0.0038983152861872283,
            "is_target": false
          },
          {
            "ticker": "1475",
            "score_pca": 61.296583850931675,
            "rank_pca": 998,
            "adv": 596000.0,
            "trades": 45.0,
            "volatility": 0.16600470147825327,
            "spread_pct": 0.008111976074804766,
            "spread_ticks": 5.962264150943396,
            "amihud": 9.518763219479915e-09,
            "turnover_ratio": 0.00042546519832953854,
            "is_target": false
          },
          {
            "ticker": "1117",
            "score_pca": 82.6863354037267,
            "rank_pca": 447,
            "adv": 19432580.0,
            "trades": 2045.0,
            "volatility": 0.6614015529697513,
            "spread_pct": 0.007777687856839923,
            "spread_ticks": 1.1461162411732755,
            "amihud": 1.331188309738559e-09,
            "turnover_ratio": 0.00920500762623596,
            "is_target": false
          },
          {
            "ticker": "2460",
            "score_pca": 84.472049689441,
            "rank_pca": 401,
            "adv": 26275140.0,
            "trades": 1729.0,
            "volatility": 0.2511623187070958,
            "spread_pct": 0.001604073402324876,
            "spread_ticks": 1.469430397828508,
            "amihud": 3.9471090443124506e-10,
            "turnover_ratio": 0.00682828532438499,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Packaged Foods",
          "sector_count": 35,
          "market_count": 2576,
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
              "mean": 64309155.04327383,
              "median": 221797.5,
              "min": 0.0,
              "max": 12484489600.0,
              "p5": 0.0,
              "p95": 245012729.9,
              "count": 2576
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04641870402197923,
              "median": 0.029013203613620597,
              "min": 0.0005957156584162828,
              "max": 0.7873945213823746,
              "p5": 0.0014889976315259788,
              "p95": 0.1485737622237792,
              "count": 2575
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004495959975356525,
              "median": 0.0008751640932674877,
              "min": 0.0,
              "max": 0.6759592138881427,
              "p5": 0.0,
              "p95": 0.016590545900840005,
              "count": 2553
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.3048494165648461e-06,
              "median": 4.6395854066480917e-08,
              "min": 0.0,
              "max": 0.0004281949934123848,
              "p5": 3.630791306986329e-11,
              "p95": 4.973974037584155e-06,
              "count": 2567
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1153.1350931677018,
              "median": 20.0,
              "min": 0.0,
              "max": 79388.0,
              "p5": 0.0,
              "p95": 6002.25,
              "count": 2576
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5601991088856223,
              "median": 0.5393544420943941,
              "min": 0.16600470147825327,
              "max": 1.2063618330721417,
              "p5": 0.23823315216823407,
              "p95": 0.9757132726197716,
              "count": 35
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 16001312.81914286,
              "median": 103680.0,
              "min": 0.0,
              "max": 289999807.62,
              "p5": 0.0,
              "p95": 61087685.80199999,
              "count": 35
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04880954624719761,
              "median": 0.032076984763432154,
              "min": 0.0011438435494522422,
              "max": 0.4937833037300176,
              "p5": 0.002546143666020043,
              "p95": 0.08769860362916466,
              "count": 35
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002144744837807799,
              "median": 0.0007749119853053728,
              "min": 0.0,
              "max": 0.016412636870779755,
              "p5": 0.0,
              "p95": 0.008860322494354225,
              "count": 35
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.0601375897311e-07,
              "median": 6.436329615718624e-08,
              "min": 0.0,
              "max": 9.071117561683567e-06,
              "p5": 4.274224688532224e-11,
              "p95": 6.4166257295281e-06,
              "count": 35
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 684.7714285714286,
              "median": 10.0,
              "min": 0.0,
              "max": 8553.0,
              "p5": 0.0,
              "p95": 3920.7999999999975,
              "count": 35
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 65670606.56,
              "median": 33103904.0,
              "min": 596000.0,
              "max": 289999807.62,
              "p5": 7188803.000000001,
              "p95": 210295928.9529999,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2903.625,
              "median": 1887.0,
              "min": 45.0,
              "max": 8553.0,
              "p5": 397.1,
              "p95": 7153.699999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4572372969575606,
              "median": 0.4694005490494395,
              "min": 0.16600470147825327,
              "max": 0.6751740329660079,
              "p5": 0.19580986750834817,
              "p95": 0.6703536649673181,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0038978627959548036,
              "median": 0.003250603082409942,
              "min": 0.0011438435494522422,
              "max": 0.008111976074804766,
              "p5": 0.0013049239979576641,
              "p95": 0.00799497519851707,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.6955248593845766,
              "median": 1.479671010153207,
              "min": 1.1461162411732755,
              "max": 6.771760703147151,
              "p5": 1.1489890568713133,
              "p95": 6.488436909875836,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.6718974027893142e-09,
              "median": 5.214055198130926e-10,
              "min": 6.106035269331747e-11,
              "max": 9.518763219479915e-09,
              "p5": 1.7783804580159215e-10,
              "p95": 6.653112001070436e-09,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005395784714196857,
              "median": 0.005363300305286109,
              "min": 0.00042546519832953854,
              "max": 0.012307237299915365,
              "p5": 0.0006814049188778055,
              "p95": 0.011221456914127572,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": -0.07833333333333325,
            "market": -0.007811259659372016,
            "sector": -0.046598043170943626,
            "peers": -0.03100421677679077,
            "vs_market": -0.07052207367396124,
            "vs_sector": -0.03173529016238963,
            "vs_peers": -0.04732911655654248
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 80.08540372670807,
          "score_pca_percentile": 80.08540372670807,
          "rank_pca": 514,
          "total": 2576,
          "adv_notional_sgd": 24485097.0,
          "adv_volume_shares": 4114290.0,
          "free_float_shares": 1995028545.0,
          "turnover_ratio": 0.0020622712443445265,
          "votes": 932.0,
          "trades": 932.0,
          "spread_pct": 0.0025740851778973195,
          "spread_ticks": 1.5134041476985332,
          "amihud": 3.5853472029884773e-10,
          "volatility": 0.21595266464718893
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.6168947836558263,
          "loadings": {
            "log_adv": 0.4990689619875347,
            "log_trades": 0.45259686509900365,
            "log_turnover": 0.45222944185994657,
            "neg_spread": 0.4614396993239792,
            "neg_amihud": 0.33085572914946165,
            "neg_vol": 0.13850152047921369
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
          "peer_median_adv": 33700695.0,
          "peer_median_score_pca": 84.3361801242236,
          "peer_median_trades": 1647.5,
          "peer_median_volatility": 0.3569801439171424,
          "peer_median_spread_pct": 0.0031179263328184664,
          "peer_median_spread_ticks": 1.4232619304107423,
          "peer_median_amihud": 3.5830127087671877e-10,
          "peer_median_turnover_ratio": 0.005541225581469747,
          "target_vs_peer": {
            "score_pca_delta": -4.25,
            "adv_delta_pct": -27.3,
            "trades_delta_pct": -43.43,
            "volatility_delta_pct": 39.51,
            "spread_pct_delta_pct": 17.44,
            "spread_ticks_delta_pct": 6.33,
            "amihud_delta_pct": -0.07,
            "turnover_ratio_delta_pct": -62.78
          }
        },
        "peer_liquidity": [
          {
            "ticker": "142",
            "score_pca": 80.08540372670807,
            "rank_pca": 514,
            "adv": 24485097.0,
            "trades": 932.0,
            "volatility": 0.21595266464718893,
            "spread_pct": 0.0025740851778973195,
            "spread_ticks": 1.5134041476985332,
            "amihud": 3.5853472029884773e-10,
            "turnover_ratio": 0.0020622712443445265,
            "is_target": true
          },
          {
            "ticker": "151",
            "score_pca": 81.05590062111801,
            "rank_pca": 489,
            "adv": 26410690.0,
            "trades": 1635.0,
            "volatility": 0.2436368156296131,
            "spread_pct": 0.002813610243448825,
            "spread_ticks": 1.325278810408922,
            "amihud": 3.026049988610053e-10,
            "turnover_ratio": 0.0011567215427531583,
            "is_target": false
          },
          {
            "ticker": "9985",
            "score_pca": 88.35403726708074,
            "rank_pca": 301,
            "adv": 40972710.0,
            "trades": 3500.0,
            "volatility": 0.4083130507726164,
            "spread_pct": 0.002908833413393882,
            "spread_ticks": 2.147110347917458,
            "amihud": 3.98412789741563e-10,
            "turnover_ratio": 0.006965996045624351,
            "is_target": false
          },
          {
            "ticker": "1768",
            "score_pca": 83.07453416149069,
            "rank_pca": 437,
            "adv": 88448240.0,
            "trades": 1537.0,
            "volatility": 0.5952668937784998,
            "spread_pct": 0.0035940312644240735,
            "spread_ticks": 7.178227708091691,
            "amihud": 2.8042683853653145e-10,
            "turnover_ratio": 0.002697206075449503,
            "is_target": false
          },
          {
            "ticker": "2517",
            "score_pca": 89.59627329192547,
            "rank_pca": 269,
            "adv": 53911869.36,
            "trades": 3748.0,
            "volatility": 0.5202112066364926,
            "spread_pct": 0.003327019252243051,
            "spread_ticks": 1.3770934629929767,
            "amihud": 4.1622719760971087e-10,
            "turnover_ratio": 0.011774898144274428,
            "is_target": false
          },
          {
            "ticker": "288",
            "score_pca": 96.00155279503106,
            "rank_pca": 104,
            "adv": 276159879.5,
            "trades": 8023.0,
            "volatility": 0.30564723706166835,
            "spread_pct": 0.0011760353001643669,
            "spread_ticks": 1.097767840848119,
            "amihud": 4.927936745680744e-11,
            "turnover_ratio": 0.004172296731686188,
            "is_target": false
          },
          {
            "ticker": "1475",
            "score_pca": 66.69254658385093,
            "rank_pca": 859,
            "adv": 1281400.0,
            "trades": 65.0,
            "volatility": 0.14552198911743905,
            "spread_pct": 0.006080625194346489,
            "spread_ticks": 4.52972027972028,
            "amihud": 4.690871563936598e-09,
            "turnover_ratio": 0.0009147501764085079,
            "is_target": false
          },
          {
            "ticker": "1117",
            "score_pca": 82.8027950310559,
            "rank_pca": 444,
            "adv": 22767360.0,
            "trades": 1658.0,
            "volatility": 0.4977164080541246,
            "spread_pct": 0.007714555319168521,
            "spread_ticks": 1.156177924217463,
            "amihud": 8.260803478789532e-10,
            "turnover_ratio": 0.010824820028825443,
            "is_target": false
          },
          {
            "ticker": "2460",
            "score_pca": 85.59782608695652,
            "rank_pca": 372,
            "adv": 26428680.0,
            "trades": 1637.0,
            "volatility": 0.2159343096036001,
            "spread_pct": 0.001604073402324876,
            "spread_ticks": 1.469430397828508,
            "amihud": 3.1818975201187457e-10,
            "turnover_ratio": 0.006910154431253306,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Packaged Foods",
          "sector_count": 35,
          "market_count": 2576,
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
              "mean": 61519254.895679474,
              "median": 230944.0,
              "min": 0.0,
              "max": 13968603216.0,
              "p5": 0.0,
              "p95": 239325014.14999998,
              "count": 2576
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04284195883727662,
              "median": 0.027128862094951047,
              "min": 0.0005607359268088029,
              "max": 0.5173652694610777,
              "p5": 0.0014388773987694728,
              "p95": 0.1353564638187657,
              "count": 2575
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0040823513454496165,
              "median": 0.0008904739471300301,
              "min": 0.0,
              "max": 0.4102056640783613,
              "p5": 0.0,
              "p95": 0.01626861087639243,
              "count": 2553
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.24868725009713e-07,
              "median": 4.322802925070572e-08,
              "min": 0.0,
              "max": 4.7054394880481924e-05,
              "p5": 4.6644375118181316e-11,
              "p95": 3.663689956299134e-06,
              "count": 2574
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1089.9708850931677,
              "median": 20.0,
              "min": 0.0,
              "max": 80215.0,
              "p5": 0.0,
              "p95": 5980.0,
              "count": 2576
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5496857683155648,
              "median": 0.5214233337654297,
              "min": 0.13424044983777875,
              "max": 1.1793320469391826,
              "p5": 0.19482346198826397,
              "p95": 1.0378863645413303,
              "count": 35
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 16055250.367428571,
              "median": 109190.0,
              "min": 0.0,
              "max": 276159879.5,
              "p5": 0.0,
              "p95": 64272780.551999904,
              "count": 35
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03521106218306628,
              "median": 0.03485412179361663,
              "min": 0.0011760353001643669,
              "max": 0.08107103012272227,
              "p5": 0.0027417527237833736,
              "p95": 0.07799146936377803,
              "count": 35
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0021867759106987917,
              "median": 0.0009231181058605292,
              "min": 0.0,
              "max": 0.016285177346589123,
              "p5": 0.0,
              "p95": 0.01098930799673554,
              "count": 35
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.960122430867623e-07,
              "median": 6.224351146475696e-08,
              "min": 4.927936745680744e-11,
              "max": 7.095217823187182e-06,
              "p5": 2.9595155076366314e-10,
              "p95": 2.8971485898089945e-06,
              "count": 35
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 640.1714285714286,
              "median": 10.0,
              "min": 0.0,
              "max": 8023.0,
              "p5": 0.0,
              "p95": 3574.399999999999,
              "count": 35
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 67047603.6075,
              "median": 33700695.0,
              "min": 1281400.0,
              "max": 276159879.5,
              "p5": 8801486.0,
              "p95": 210460805.6749999,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2725.375,
              "median": 1647.5,
              "min": 65.0,
              "max": 8023.0,
              "p5": 580.2,
              "p95": 6526.749999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3665309888317567,
              "median": 0.3569801439171424,
              "min": 0.14552198911743905,
              "max": 0.5952668937784998,
              "p5": 0.1701663012875954,
              "p95": 0.5689974032787972,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0036523479236892607,
              "median": 0.0031179263328184664,
              "min": 0.0011760353001643669,
              "max": 0.007714555319168521,
              "p5": 0.001325848635920545,
              "p95": 0.007142679775480809,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.5351008465031772,
              "median": 1.4232619304107423,
              "min": 1.097767840848119,
              "max": 7.178227708091691,
              "p5": 1.1182113700273895,
              "p95": 6.251250108161695,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.102616070041303e-10,
              "median": 3.5830127087671877e-10,
              "min": 4.927936745680744e-11,
              "max": 4.690871563936598e-09,
              "p5": 1.3018098233471085e-10,
              "p95": 3.3381946383164203e-09,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00567710539703436,
              "median": 0.005541225581469747,
              "min": 0.0009147501764085079,
              "max": 0.011774898144274428,
              "p5": 0.0009994401546291355,
              "p95": 0.011442370803867282,
              "count": 8
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": -0.07058823529411751,
            "market": 0.058957371688082016,
            "sector": -0.05652478921523785,
            "peers": -0.057516953098752266,
            "vs_market": -0.12954560698219952,
            "vs_sector": -0.01406344607887966,
            "vs_peers": -0.013071282195365241
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 79.03726708074534,
          "score_pca_percentile": 79.03726708074534,
          "rank_pca": 541,
          "total": 2576,
          "adv_notional_sgd": 24018253.79,
          "adv_volume_shares": 3982500.0,
          "free_float_shares": 1995028545.0,
          "turnover_ratio": 0.001996212039161575,
          "votes": 938.0,
          "trades": 938.0,
          "spread_pct": 0.002547162920593226,
          "spread_ticks": 1.5333760581564557,
          "amihud": 3.527456991439475e-10,
          "volatility": 0.22732416813884587
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.6216680218078848,
          "loadings": {
            "log_adv": 0.4991146782353065,
            "log_trades": 0.454114929142171,
            "log_turnover": 0.45215332870398567,
            "neg_spread": 0.4647285290591225,
            "neg_amihud": 0.33336812583947034,
            "neg_vol": 0.11451909620232088
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
          "peer_median_adv": 34316881.5,
          "peer_median_score_pca": 84.80201863354037,
          "peer_median_trades": 1696.75,
          "peer_median_volatility": 0.3548649057669273,
          "peer_median_spread_pct": 0.003069100486990723,
          "peer_median_spread_ticks": 1.396531347262691,
          "peer_median_amihud": 3.3360838892210235e-10,
          "peer_median_turnover_ratio": 0.005294959342502192,
          "target_vs_peer": {
            "score_pca_delta": -5.76,
            "adv_delta_pct": -30.0,
            "trades_delta_pct": -44.72,
            "volatility_delta_pct": 35.94,
            "spread_pct_delta_pct": 17.01,
            "spread_ticks_delta_pct": 9.8,
            "amihud_delta_pct": -5.74,
            "turnover_ratio_delta_pct": -62.3
          }
        },
        "peer_liquidity": [
          {
            "ticker": "142",
            "score_pca": 79.03726708074534,
            "rank_pca": 541,
            "adv": 24018253.79,
            "trades": 938.0,
            "volatility": 0.22732416813884587,
            "spread_pct": 0.002547162920593226,
            "spread_ticks": 1.5333760581564557,
            "amihud": 3.527456991439475e-10,
            "turnover_ratio": 0.001996212039161575,
            "is_target": true
          },
          {
            "ticker": "151",
            "score_pca": 80.78416149068323,
            "rank_pca": 496,
            "adv": 27891234.270000003,
            "trades": 1678.0,
            "volatility": 0.25129634796411404,
            "spread_pct": 0.002700967744295057,
            "spread_ticks": 1.3236322966968743,
            "amihud": 2.925561887881262e-10,
            "turnover_ratio": 0.0011574186383444384,
            "is_target": false
          },
          {
            "ticker": "9985",
            "score_pca": 88.31521739130434,
            "rank_pca": 302,
            "adv": 39664959.0,
            "trades": 3412.5,
            "volatility": 0.4151934523543596,
            "spread_pct": 0.0022708784021880633,
            "spread_ticks": 2.147110347917458,
            "amihud": 4.0302412163092164e-10,
            "turnover_ratio": 0.006529672350417006,
            "is_target": false
          },
          {
            "ticker": "1768",
            "score_pca": 83.69565217391305,
            "rank_pca": 421,
            "adv": 88448240.0,
            "trades": 1537.0,
            "volatility": 0.5952668937784998,
            "spread_pct": 0.0035940312644240735,
            "spread_ticks": 7.178227708091691,
            "amihud": 2.8042683853653145e-10,
            "turnover_ratio": 0.002697206075449503,
            "is_target": false
          },
          {
            "ticker": "2517",
            "score_pca": 90.722049689441,
            "rank_pca": 240,
            "adv": 54755257.8,
            "trades": 3564.0,
            "volatility": 0.525627176350863,
            "spread_pct": 0.003437233229686389,
            "spread_ticks": 1.3219508071429829,
            "amihud": 3.7466058905607853e-10,
            "turnover_ratio": 0.012132664320653736,
            "is_target": false
          },
          {
            "ticker": "288",
            "score_pca": 95.2251552795031,
            "rank_pca": 124,
            "adv": 247218235.22000003,
            "trades": 7154.5,
            "volatility": 0.2890661883586503,
            "spread_pct": 0.0012425729740005486,
            "spread_ticks": 1.087010411502231,
            "amihud": 4.604197439348627e-11,
            "turnover_ratio": 0.004060246334587376,
            "is_target": false
          },
          {
            "ticker": "1475",
            "score_pca": 66.96428571428571,
            "rank_pca": 852,
            "adv": 1624200.0,
            "trades": 95.5,
            "volatility": 0.29453635917949494,
            "spread_pct": 0.00571250099008369,
            "spread_ticks": 3.9103442861706217,
            "amihud": 3.7226473087712898e-09,
            "turnover_ratio": 0.001225871602686983,
            "is_target": false
          },
          {
            "ticker": "1117",
            "score_pca": 81.90993788819875,
            "rank_pca": 467,
            "adv": 20088816.25,
            "trades": 1425.0,
            "volatility": 0.4527656148781174,
            "spread_pct": 0.008247090209987994,
            "spread_ticks": 1.118812338442903,
            "amihud": 8.258916506207402e-10,
            "turnover_ratio": 0.010500514513067693,
            "is_target": false
          },
          {
            "ticker": "2460",
            "score_pca": 85.90838509316771,
            "rank_pca": 364,
            "adv": 28968804.0,
            "trades": 1715.5,
            "volatility": 0.187752536281693,
            "spread_pct": 0.0014857734861438996,
            "spread_ticks": 1.469430397828508,
            "amihud": 2.2883405994677188e-10,
            "turnover_ratio": 0.007123616826462105,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Packaged Foods",
          "sector_count": 35,
          "market_count": 2576,
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
              "mean": 56542891.208101414,
              "median": 219410.125,
              "min": 0.0,
              "max": 11530530000.0,
              "p5": 0.0,
              "p95": 214127775.0,
              "count": 2576
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.042004487177423104,
              "median": 0.026651223195499653,
              "min": 0.000558678699550006,
              "max": 0.49098715795419084,
              "p5": 0.001390744598616606,
              "p95": 0.13470487233538153,
              "count": 2575
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0036564998528354473,
              "median": 0.0008649390509314946,
              "min": 0.0,
              "max": 0.17601894736842105,
              "p5": 0.0,
              "p95": 0.014489803074043354,
              "count": 2553
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.470128402567895e-07,
              "median": 4.630396367913572e-08,
              "min": 0.0,
              "max": 4.7054394880481924e-05,
              "p5": 5.0443531668434034e-11,
              "p95": 3.6564790403449536e-06,
              "count": 2574
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1037.5366847826087,
              "median": 21.0,
              "min": 0.0,
              "max": 93269.5,
              "p5": 0.0,
              "p95": 5730.375,
              "count": 2576
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6314505317714363,
              "median": 0.5159774903416885,
              "min": 0.15774100413411424,
              "max": 2.5013482123045336,
              "p5": 0.2441046940165336,
              "p95": 1.1574721270292505,
              "count": 35
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 15110988.116214287,
              "median": 85390.0,
              "min": 0.0,
              "max": 247218235.22000003,
              "p5": 0.0,
              "p95": 64863152.459999904,
              "count": 35
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0360898044688079,
              "median": 0.03758807862250396,
              "min": 0.0012425729740005486,
              "max": 0.08107103012272227,
              "p5": 0.0024642775650716773,
              "p95": 0.07986324836172148,
              "count": 35
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0022805900328323036,
              "median": 0.000875520058274615,
              "min": 0.0,
              "max": 0.01692890721248906,
              "p5": 0.0,
              "p95": 0.013025384988176104,
              "count": 35
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.783709151933454e-07,
              "median": 7.656780232031103e-08,
              "min": 4.604197439348627e-11,
              "max": 4.3675751222920964e-06,
              "p5": 2.8891738371264775e-10,
              "p95": 2.797577582060342e-06,
              "count": 35
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 604.9,
              "median": 11.0,
              "min": 0.0,
              "max": 7154.5,
              "p5": 0.0,
              "p95": 3457.9499999999994,
              "count": 35
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 63582468.31750001,
              "median": 34316881.5,
              "min": 1624200.0,
              "max": 247218235.22000003,
              "p5": 8086815.687500001,
              "p95": 191648736.89299995,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2572.75,
              "median": 1696.75,
              "min": 95.5,
              "max": 7154.5,
              "p5": 560.825,
              "p95": 5897.824999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.37643807114322403,
              "median": 0.3548649057669273,
              "min": 0.187752536281693,
              "max": 0.5952668937784998,
              "p5": 0.20999287037054037,
              "p95": 0.5708929926788269,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0035863810376012143,
              "median": 0.003069100486990723,
              "min": 0.0012425729740005486,
              "max": 0.008247090209987994,
              "p5": 0.0013276931532507214,
              "p95": 0.007359983983021487,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.444564824224159,
              "median": 1.396531347262691,
              "min": 1.087010411502231,
              "max": 7.178227708091691,
              "p5": 1.0981410859314662,
              "p95": 6.034468510419314,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.717603414679932e-10,
              "median": 3.3360838892210235e-10,
              "min": 4.604197439348627e-11,
              "max": 3.7226473087712898e-09,
              "p5": 1.1001920433713624e-10,
              "p95": 2.7087828284185955e-09,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005678401332708605,
              "median": 0.005294959342502192,
              "min": 0.0011574186383444384,
              "max": 0.012132664320653736,
              "p5": 0.001181377175864329,
              "p95": 0.01156141188799862,
              "count": 8
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": -0.13996889580093153,
            "market": 0.10999472576257396,
            "sector": -0.07218950550988923,
            "peers": -0.06638520057494979,
            "vs_market": -0.2499636215635055,
            "vs_sector": -0.0677793902910423,
            "vs_peers": -0.07358369522598174
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Current tradability looks orderly, with displayed depth slightly stronger on the bid and a 2-tick spread. That supports near-term access on screen.",
        "market_comparison": "The stock fell 0.7% while peers fell 1.7%. That matters because relative resilience did not come with signs of stressed trading conditions."
      },
      "30d": {
        "liquidity": "Monthly tradability is average, with a 1M liquidity score of 79.3. That suggests access is serviceable rather than especially deep.",
        "market_comparison": "The stock is down 7.8% compared with peers down 3.1% and the market down 0.8%. That matters because weaker price performance can make liquidity feel less supportive even when trading remains open."
      },
      "3m": {
        "liquidity": "Quarterly tradability looks steady but only average, with a 3M score of 80.1. That points to a consistent but not standout liquidity profile.",
        "market_comparison": "The stock fell 7.1% compared with peers down 5.8%. That matters because relative underperformance has not been offset by stronger trading access."
      },
      "6m": {
        "liquidity": "Six-month tradability is average for its size, with a score of 79.0 that sits 5.8 points below the peer median. That means liquidity is available but less accessible than the typical peer.",
        "market_comparison": "The stock fell 14.0% compared with peers down 6.6%. That matters because sustained underperformance can leave the shares feeling less supported than names with stronger relative demand."
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
          "median": 0.34400579443533685,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "34.4%",
          "display_range": null,
          "display_text": "34.4%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 34.4,
          "plain_english": "Market explains about 34.4% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.4067184350227574,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "40.7%",
          "display_range": null,
          "display_text": "40.7%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 40.7,
          "plain_english": "Sector explains about 40.7% of price moves in the current state."
        },
        "company_share": {
          "median": 0.2492757705419056,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "24.9%",
          "display_range": null,
          "display_text": "24.9%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 24.9,
          "plain_english": "Company-specific explains about 24.9% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 0.9052872414569425,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.91",
          "display_range": null,
          "display_text": "0.91",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Moderate",
          "plain_english": "Moderate market link: a 1% market move has lined up with about a 0.91% stock move in the same direction in this state.",
          "value_num": 0.91
        },
        "beta_stock_lag": {
          "median": 1.0475853893249327,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.05",
          "display_range": null,
          "display_text": "1.05",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 1.05
        },
        "beta_sector": {
          "median": -0.026187725565407157,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.03",
          "display_range": null,
          "display_text": "-0.03",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Weak",
          "plain_english": "Weak sector link: a 1% sector move has lined up with about a 0.03% stock move in the opposite direction in this state.",
          "value_num": -0.03
        },
        "beta_market_lag": {
          "median": 0.6743731478198083,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.67",
          "display_range": null,
          "display_text": "0.67",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 0.67
        },
        "beta_sector_lag": {
          "median": -4.331056188441756,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-4.33",
          "display_range": null,
          "display_text": "-4.33",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -4.33
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
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.575727426315864,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "57.6%",
            "display_range": null,
            "display_text": "57.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
            "kind": "share_pct",
            "value_pct": 57.6,
            "plain_english": "Company-specific explains about 57.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.25824837118346705,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "25.8%",
              "display_range": null,
              "display_text": "25.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 25.8,
              "plain_english": "Market explains about 25.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.16602420250066885,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "16.6%",
              "display_range": null,
              "display_text": "16.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 16.6,
              "plain_english": "Sector explains about 16.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.575727426315864,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "57.6%",
              "display_range": null,
              "display_text": "57.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 57.6,
              "plain_english": "Company-specific explains about 57.6% of price moves in the current state."
            }
          },
          "summary": "Mar: Mostly company-driven, though based on only 5 trading days."
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
            "median": 0.465997126695361,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "46.6%",
            "display_range": null,
            "display_text": "46.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
            "kind": "share_pct",
            "value_pct": 46.6,
            "plain_english": "Market explains about 46.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.465997126695361,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.6%",
              "display_range": null,
              "display_text": "46.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 46.6,
              "plain_english": "Market explains about 46.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.18242570636123415,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "18.2%",
              "display_range": null,
              "display_text": "18.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 18.2,
              "plain_english": "Sector explains about 18.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3515771669434049,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "35.2%",
              "display_range": null,
              "display_text": "35.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 35.2,
              "plain_english": "Company-specific explains about 35.2% of price moves in the current state."
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
            "median": 0.4984450908596095,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "49.8%",
            "display_range": null,
            "display_text": "49.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 49.8,
            "plain_english": "Company-specific explains about 49.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.34420931725124687,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.4%",
              "display_range": null,
              "display_text": "34.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 34.4,
              "plain_english": "Market explains about 34.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.15734559188914365,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "15.7%",
              "display_range": null,
              "display_text": "15.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 15.7,
              "plain_english": "Sector explains about 15.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4984450908596095,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "49.8%",
              "display_range": null,
              "display_text": "49.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 49.8,
              "plain_english": "Company-specific explains about 49.8% of price moves in the current state."
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
            "median": 0.6399961275994693,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "64.0%",
            "display_range": null,
            "display_text": "64.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 64.0,
            "plain_english": "Company-specific explains about 64.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.22357086775873405,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "22.4%",
              "display_range": null,
              "display_text": "22.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 22.4,
              "plain_english": "Market explains about 22.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1364330046417966,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "13.6%",
              "display_range": null,
              "display_text": "13.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 13.6,
              "plain_english": "Sector explains about 13.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6399961275994693,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "64.0%",
              "display_range": null,
              "display_text": "64.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 64.0,
              "plain_english": "Company-specific explains about 64.0% of price moves in the current state."
            }
          },
          "summary": "Jun: Still clearly company-driven."
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
            "median": 0.3662234834477023,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "36.6%",
            "display_range": null,
            "display_text": "36.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 36.6,
            "plain_english": "Market explains about 36.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3662234834477023,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.6%",
              "display_range": null,
              "display_text": "36.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 36.6,
              "plain_english": "Market explains about 36.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.28157309756746757,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "28.2%",
              "display_range": null,
              "display_text": "28.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 28.2,
              "plain_english": "Sector explains about 28.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.35220341898483026,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "35.2%",
              "display_range": null,
              "display_text": "35.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 35.2,
              "plain_english": "Company-specific explains about 35.2% of price moves in the current state."
            }
          },
          "summary": "Jul: Much more balanced across company, sector, and market factors."
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
            "median": 0.6641302197744485,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "66.4%",
            "display_range": null,
            "display_text": "66.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 66.4,
            "plain_english": "Company-specific explains about 66.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.253185794084458,
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
              "median": 0.08268398614109343,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "8.3%",
              "display_range": null,
              "display_text": "8.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 8.3,
              "plain_english": "Sector explains about 8.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6641302197744485,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "66.4%",
              "display_range": null,
              "display_text": "66.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 66.4,
              "plain_english": "Company-specific explains about 66.4% of price moves in the current state."
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
            "median": 0.6261856163423049,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "62.6%",
            "display_range": null,
            "display_text": "62.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 62.6,
            "plain_english": "Company-specific explains about 62.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2079133389421778,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.8%",
              "display_range": null,
              "display_text": "20.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 20.8,
              "plain_english": "Market explains about 20.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1659010447155174,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "16.6%",
              "display_range": null,
              "display_text": "16.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 16.6,
              "plain_english": "Sector explains about 16.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6261856163423049,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "62.6%",
              "display_range": null,
              "display_text": "62.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 62.6,
              "plain_english": "Company-specific explains about 62.6% of price moves in the current state."
            }
          },
          "summary": "Sep: Still clearly company-driven."
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
            "median": 0.5208533567972446,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "52.1%",
            "display_range": null,
            "display_text": "52.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 52.1,
            "plain_english": "Company-specific explains about 52.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3379776652210694,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "33.8%",
              "display_range": null,
              "display_text": "33.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 33.8,
              "plain_english": "Market explains about 33.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.14116897798168604,
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
              "median": 0.5208533567972446,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.1%",
              "display_range": null,
              "display_text": "52.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 52.1,
              "plain_english": "Company-specific explains about 52.1% of price moves in the current state."
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
            "median": 0.5271471918257065,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "52.7%",
            "display_range": null,
            "display_text": "52.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 52.7,
            "plain_english": "Market explains about 52.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.5271471918257065,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.7%",
              "display_range": null,
              "display_text": "52.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 52.7,
              "plain_english": "Market explains about 52.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.15715919808970039,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "15.7%",
              "display_range": null,
              "display_text": "15.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 15.7,
              "plain_english": "Sector explains about 15.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3156936100845931,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "31.6%",
              "display_range": null,
              "display_text": "31.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 31.6,
              "plain_english": "Company-specific explains about 31.6% of price moves in the current state."
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
            "median": 0.4520266173093483,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "45.2%",
            "display_range": null,
            "display_text": "45.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
            "kind": "share_pct",
            "value_pct": 45.2,
            "plain_english": "Company-specific explains about 45.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.42700753038870704,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.7%",
              "display_range": null,
              "display_text": "42.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 42.7,
              "plain_english": "Market explains about 42.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.12096585230194466,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "12.1%",
              "display_range": null,
              "display_text": "12.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 12.1,
              "plain_english": "Sector explains about 12.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4520266173093483,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.2%",
              "display_range": null,
              "display_text": "45.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 45.2,
              "plain_english": "Company-specific explains about 45.2% of price moves in the current state."
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
            "median": 0.5227455199420163,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "52.3%",
            "display_range": null,
            "display_text": "52.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 52.3,
            "plain_english": "Company-specific explains about 52.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.31110084094550783,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "31.1%",
              "display_range": null,
              "display_text": "31.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 31.1,
              "plain_english": "Market explains about 31.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.16615363911247594,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "16.6%",
              "display_range": null,
              "display_text": "16.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 16.6,
              "plain_english": "Sector explains about 16.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5227455199420163,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.3%",
              "display_range": null,
              "display_text": "52.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 52.3,
              "plain_english": "Company-specific explains about 52.3% of price moves in the current state."
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
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.6109475229312026,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "61.1%",
            "display_range": null,
            "display_text": "61.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
            "kind": "share_pct",
            "value_pct": 61.1,
            "plain_english": "Company-specific explains about 61.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.16185452299534783,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "16.2%",
              "display_range": null,
              "display_text": "16.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 16.2,
              "plain_english": "Market explains about 16.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.22719795407344962,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "22.7%",
              "display_range": null,
              "display_text": "22.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 22.7,
              "plain_english": "Sector explains about 22.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6109475229312026,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.1%",
              "display_range": null,
              "display_text": "61.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 61.1,
              "plain_english": "Company-specific explains about 61.1% of price moves in the current state."
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
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5708687824100946,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "57.1%",
            "display_range": null,
            "display_text": "57.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 57.1,
            "plain_english": "Market explains about 57.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.5708687824100946,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "57.1%",
              "display_range": null,
              "display_text": "57.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 57.1,
              "plain_english": "Market explains about 57.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.20623757187256317,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.6%",
              "display_range": null,
              "display_text": "20.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 20.6,
              "plain_english": "Sector explains about 20.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.22289364571734213,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "22.3%",
              "display_range": null,
              "display_text": "22.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 22.3,
              "plain_english": "Company-specific explains about 22.3% of price moves in the current state."
            }
          },
          "summary": "Mar: Mostly market-driven."
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-13",
          "n_obs": 6,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.47060317448485767,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.1%",
            "display_range": null,
            "display_text": "47.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
            "kind": "share_pct",
            "value_pct": 47.1,
            "plain_english": "Market explains about 47.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.47060317448485767,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.1%",
              "display_range": null,
              "display_text": "47.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 47.1,
              "plain_english": "Market explains about 47.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.29658444608642576,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "29.7%",
              "display_range": null,
              "display_text": "29.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 29.7,
              "plain_english": "Sector explains about 29.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.23281237942871652,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "23.3%",
              "display_range": null,
              "display_text": "23.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 23.3,
              "plain_english": "Company-specific explains about 23.3% of price moves in the current state."
            }
          },
          "summary": "Apr: Mostly market-driven, though based on only 6 trading days."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5020080321285141,
          "expected_duration_days": 6.944444444444445,
          "current_probability": 1.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.011777465512025978,
            "low": 0.011777465512025978,
            "high": 0.011777465512025978
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": null
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 6.888888888888889,
          "current_probability": 0.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.02125661726133445,
            "low": 0.02125661726133445,
            "high": 0.02125661726133445
          },
          "volatility_label": "High Volatility",
          "current_probability_display": 0.0
        }
      ],
      "transitions": {
        "mean": [
          [
            0.8629032258064516,
            0.13709677419354838
          ],
          [
            0.14516129032258066,
            0.8548387096774194
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            107.0,
            17.0
          ],
          [
            18.0,
            106.0
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
        "market_link_display": "0.91",
        "sector_link_display": "-0.03",
        "market_link_explainer": "Moderate market link. A 1% market move has lined up with about a 0.91% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "Weak sector link. A 1% sector move has lined up with about a 0.03% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "1.05",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "Low Volatility",
        "dominant_driver": "sector",
        "dominant_driver_label": "Sector",
        "driver_share_pct": 40.7,
        "driver_share_display": "40.7%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 251 trading days relative to the 252-day target.",
        "history_days": 251,
        "history_limited": true,
        "volatility_label": "Low Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.8629032258064516,
        "effective_days": 125.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 6.9 days.",
        "expected_duration_days": 6.9
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
          "current_probability": 1.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.011777465512025978,
            "low": 0.011777465512025978,
            "high": 0.011777465512025978
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 6.888888888888889,
          "current_probability": 0.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.02125661726133445,
            "low": 0.02125661726133445,
            "high": 0.02125661726133445
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.8629032258064516,
          0.13709677419354838
        ],
        [
          0.14516129032258066,
          0.8548387096774194
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.8629032258064516,
            0.13709677419354838
          ],
          [
            0.14516129032258066,
            0.8548387096774194
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            107.0,
            17.0
          ],
          [
            18.0,
            106.0
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
        "text": "Liquidity score: 79.0 — Strong",
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
    "liq_subtitle": "Liquidity is serviceable for the stock’s size, with peer standing a little below the group and current screen depth still orderly.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent performance has lagged, with the stock down 7.8% over one month compared with peers down 3.1% and the market down 0.8%.",
    "perf_insight": "The stock has underperformed both peers and the market, with a 1M return of -7.8% compared with -3.1% for peers and -0.8% for the market. Sector factors still explain 40.7% of trading, which matters because the recent move is being shaped meaningfully by broader industry pressure.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Sector moves are the main influence on the stock now, with sector factors explaining 40.7% of trading. That matters because the tape is still being driven materially by broader industry moves rather than company-specific factors alone.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly sector-driven, accounting for about 40.7% of price changes. Other influences are market 34.4%, and company-specific 24.9%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 34.4%, sector 40.7%, and company-specific 24.9%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has shifted from company-driven to market-driven over Feb to Apr."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 34.4%, sector 40.7%, and company-specific 24.9%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "Near-term execution looks balanced, with top-10 bid depth at 1.14x ask depth and a 2-tick spread. That matters because the displayed book is holding up even as the shares underperform.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Sector is the main driver now, accounting for 40.7% of recent price moves.",
      "The pattern has become more market-led since February, shifting from clearly company-driven to mostly market-driven in March and April."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Trading conditions look orderly, with a balanced displayed book and a 2-tick spread.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on Apr 14, 2025 to Apr 13, 2026 (238 trading days • 222,741 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on top 10 bid and top 10 ask levels.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate displayed depth broadly matches the stronger monthly liquidity read.",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The displayed book looks balanced, with top-10 bid depth at 1.14x ask depth and a 2-tick spread, supporting a functional trading backdrop.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 22.7% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Displayed liquidity looks balanced in the current market.",
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
    "intraday_insight": "Immediate execution conditions look orderly, with top-10 bid depth running at 1.14x ask depth and the spread at 2 ticks. That matters because the screen is showing balanced liquidity despite weaker recent share performance.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "The current trading picture is better explained by peer standing, price weakness, and balanced displayed depth.",
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
    "exec_subtitle": "Trading access is workable, but below-median peer standing and weaker recent share performance keep the overall picture balanced.",
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
        "value": "79.0/100",
        "sub": "Peer median 84.8 (-5.8 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "HK$24.0M",
        "sub": "Peer median HK$34.3M",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "0.25%",
        "sub": "1.53 ticks; peers 0.31%",
        "interp": {
          "text": "Tighter",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity looks serviceable rather than strong, with a 6M score of 79.0 compared with a peer median of 84.8. That points to access that is broadly workable but below the group’s median standard. Current execution conditions are still balanced, with top-10 bid depth at 1.14x ask depth and a 2-tick spread, which matters because immediate screen liquidity is holding up despite the weaker peer standing.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "5.510",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "0.36%",
        "note": "2.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "1.14x",
        "note": "Bid depth / ask depth on displayed top-10 levels",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-0.18% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-0.32% with 100.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-0.51% with 100.0% fill.",
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
        "value": "79",
        "suffix": "/100",
        "bar_pct": 79,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Rank 541/2576",
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
        "value": "0.25",
        "suffix": "%",
        "bar_pct": 3,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "0.25% • 1.53 ticks vs peers 0.31%",
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
        "value": "24.0M",
        "value_prefix": "HK$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-red-400",
        "color_bar": "bg-red-500",
        "subtext": "Peer median HK$34.3M",
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
        "value": "40.7",
        "suffix": "sector",
        "bar_pct": 41,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 34.4% • Company 24.9%",
        "interpretation": {
          "text": "Sector",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is mixed for the stock’s size, with a 6M liquidity score of 79.0 compared with a peer median of 84.8. That leaves access workable, but not as strong as the better-trading names in the group.",
      "The clearest recent signal is weaker price performance, with the stock down 7.8% over 1M compared with peers down 3.1% and the market down 0.8%. That matters because weaker momentum can make trading conditions feel less supportive even when access remains functional.",
      "Near-term execution still looks orderly, with top-10 bid depth at 1.14x ask depth and a 2-tick spread, while sector factors account for 40.7% of trading. That matters because the displayed book is balanced, but the tape remains meaningfully exposed to broader industry moves."
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
      "overall": "6M liquidity is strong: score 79.0 vs peer median 84.8 (-5.8 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "strengths": [
        "6M score 79.0 vs peer median 84.8 (-5.8 pts)."
      ],
      "concerns": [],
      "peer_context": "Primary-period score gap vs peers: -5.8 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is -14.0%, worse than market, sector, and peers, which suggests weaker price performance than comparable names.",
        "vs_market": "Worse than market: -14.0% vs market 11.0%.",
        "vs_sector": "Worse than sector: -14.0% vs sector -7.2%.",
        "vs_peers": "Worse than peers: -14.0% vs peers -6.6%."
      },
      "adv": {
        "insight": "ADV is HK$24.0M, better than market and sector, but worse than peers, which shows trading size is uneven across comparison groups.",
        "vs_market": "Better than market: HK$24.0M vs market HK$219.4K.",
        "vs_sector": "Better than sector: HK$24.0M vs sector HK$85.4K.",
        "vs_peers": "Worse than peers: HK$24.0M vs peers HK$34.3M."
      },
      "spread": {
        "insight": "Spread is 0.25%, better than market, sector, and peers, which keeps trading costs more competitive than comparable names.",
        "vs_market": "Better than market: 0.25% vs market 2.67%.",
        "vs_sector": "Better than sector: 0.25% vs sector 3.76%.",
        "vs_peers": "Better than peers: 0.25% vs peers 0.31%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.20%, better than market and sector, but worse than peers, which shows turnover is mixed across comparison groups.",
        "vs_market": "Better than market: 0.20% vs market 0.09%.",
        "vs_sector": "Better than sector: 0.20% vs sector 0.09%.",
        "vs_peers": "Worse than peers: 0.20% vs peers 0.53%."
      },
      "volatility": {
        "insight": "Volatility is 22.73%, better than market, sector, and peers, which suggests day-to-day price swings are more contained than comparable names.",
        "vs_market": "Better than market: 22.73% vs market 59.79%.",
        "vs_sector": "Better than sector: 22.73% vs sector 51.60%.",
        "vs_peers": "Better than peers: 22.73% vs peers 35.49%."
      },
      "trades": {
        "insight": "Trades is 938, better than market and sector, but worse than peers, which shows trading frequency is mixed across comparison groups.",
        "vs_market": "Better than market: 938 vs market 21.",
        "vs_sector": "Better than sector: 938 vs sector 11.",
        "vs_peers": "Worse than peers: 938 vs peers 1697."
      },
      "amihud": {
        "insight": "Price impact is 3.53e-10, better than market and sector, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 3.53e-10 vs market 4.63e-08.",
        "vs_sector": "Better than sector: 3.53e-10 vs sector 7.66e-08.",
        "vs_peers": "In line with peers: 3.53e-10 vs peers 3.34e-10."
      }
    },
    "performance": {
      "overall": "Recent performance is weak relative to peers and the market, with the stock down 7.8% over one month compared with peers down 3.1% and the market down 0.8%. That move is broadly confirmed rather than contradicted by liquidity, as the six-month liquidity score of 79.0 sits 5.8 points below the peer median of 84.8, which means the tape has not had stronger trading conditions to offset the decline.",
      "conclusion": "The recent decline looks mainly sector-linked, with below-median liquidity reinforcing rather than offsetting the weaker price action."
    },
    "drivers": {
      "overall": "Sector moves are driving the stock now, with sector factors accounting for 40.7% of recent price action. That matters because the shares are trading more with the industry backdrop than on company-specific developments.",
      "beta": "Current trading conditions look fairly orderly, with top-10 bid depth 1.14x the ask side and a 2-tick spread. That matters because the displayed book is reasonably balanced even as the stock’s 1M return of -7.8% trails peers at -3.1% and the market at -0.8%.",
      "rolling_change": "Feb: Still clearly company-driven. | Mar: Mostly market-driven. | Apr: Mostly market-driven, though based on only 6 trading days."
    },
    "regime": {
      "overall": "Short expected duration points to a short-lived state rather than a durable market backdrop.",
      "current": "Low volatility is in place now, pointing to a more stable trading backdrop than a high-volatility phase.",
      "transitions": "This state looks fairly settled rather than fleeting, with a typical run length of about 6.9 days, although the overall picture remains mixed.",
      "trading_implications": "That backdrop supports relatively steady near-term trading conditions, reinforced by a 2-tick spread and bid depth running at 1.14 times ask depth."
    },
    "execution": {
      "overall": "Displayed liquidity looks balanced right now because top-10 bid depth is slightly stronger than ask depth at 1.14x and the spread is 2 ticks. That points to orderly near-term access rather than a stressed book.",
      "concern": "Trade-size percentiles use Apr 14, 2025 to Apr 13, 2026 history (238 trading days • 222,741 trades).",
      "peer_context": "The current book is firmer than the six-month peer standing alone would suggest, with balanced depth even though the 6M liquidity score of 79.0 sits 5.8 points below the peer median of 84.8. That matters because the screen does not show an immediate depth shortfall despite the weaker peer-relative baseline."
    },
    "trader_composition": {
      "overall": "Flow looks mainly institution-like on both trade count and trade value, which gives the mix a firmer base than a count-only signal.",
      "retail_heavy": "Institution-like trades account for 52.5% of trade count and 65.0% of trade value, compared with retail-like trades at 6.6% of count and 3.3% of value. That points to larger participants setting the tone of activity.",
      "institutional_gap": "The read is directionally clear, although 19.1% of trade count sits in an unclear bucket, so the signal is not fully clean.",
      "peer_comparison": "Relative to peers, the mix appears more institution-like than retail-led, which supports a steadier flow profile."
    },
    "price_moving": {
      "overall": "Price-moving activity is present, but the cleaner signal is that the broader flow mix is led by institution-like trades on both count and value. That matters because institution-like trades make up 52.5% of count and 65.0% of value, while unclear flow is still 19.1% of count. The direction is clear, but the read is not pure. The balance of positive and negative price-moving trades is secondary to the stronger message that institution-like flow dominates observed trading.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity does not appear to be the main issue in the tape. The clearer signal is weaker price performance, with the stock down 7.8% over one month compared with a 3.1% drop for peers and 0.8% for the market, while displayed liquidity remains broadly balanced with top-10 bid depth at 1.14x ask depth and a 2-tick spread.",
      "level": "N/A",
      "correlation": "N/A",
      "trend": "There is no clear sign that short activity is becoming a separate pressure point. The broader picture is still better explained by sector influence at 40.7% and recent underperformance, which means short selling is not the factor redefining current liquidity conditions.",
      "peaks": "N/A"
    },
    "intraday": {
      "overall": "Liquidity appears through most of the day rather than only at the edges, with 83.9% of activity in the continuous session and a low concentration score of 0.134.",
      "hhi_interpretation": "Ambiguous or unclear flow is 19.1% of trade count, so the read is not fully clean.",
      "best_times": "The continuous session is the clearest source of liquidity, while the open at 0.7% and the close at 10.7% play a much smaller role.",
      "peer_ranking": "Compared with peers, the intraday profile looks broadly usable because activity is concentrated in the main session rather than relying on the auction windows."
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
        "142",
        "151",
        "9985",
        "1768",
        "2517",
        "288",
        "1475",
        "1117",
        "2460"
      ],
      "scores": [
        79.03726708074534,
        80.78416149068323,
        88.31521739130434,
        83.69565217391305,
        90.722049689441,
        95.2251552795031,
        66.96428571428571,
        81.90993788819875,
        85.90838509316771
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
        24018253.79,
        27891234.270000003,
        39664959.0,
        88448240.0,
        54755257.8,
        247218235.22000003,
        1624200.0,
        20088816.25,
        28968804.0
      ],
      "total": 2576
    },
    "market_comparison": {
      "sector_name": "Packaged Foods",
      "sector_count": 35,
      "market_count": 2576,
      "company": {
        "volatility": 0.22732416813884587,
        "adv": 24018253.79,
        "spread_pct": 0.002547162920593226,
        "turnover_ratio": 0.001996212039161575,
        "amihud": 3.527456991439475e-10,
        "trades": 938.0
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
          "mean": 56542891.208101414,
          "median": 219410.125,
          "min": 0.0,
          "max": 11530530000.0,
          "p5": 0.0,
          "p95": 214127775.0,
          "count": 2576
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.042004487177423104,
          "median": 0.026651223195499653,
          "min": 0.000558678699550006,
          "max": 0.49098715795419084,
          "p5": 0.001390744598616606,
          "p95": 0.13470487233538153,
          "count": 2575
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0036564998528354473,
          "median": 0.0008649390509314946,
          "min": 0.0,
          "max": 0.17601894736842105,
          "p5": 0.0,
          "p95": 0.014489803074043354,
          "count": 2553
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 6.470128402567895e-07,
          "median": 4.630396367913572e-08,
          "min": 0.0,
          "max": 4.7054394880481924e-05,
          "p5": 5.0443531668434034e-11,
          "p95": 3.6564790403449536e-06,
          "count": 2574
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1037.5366847826087,
          "median": 21.0,
          "min": 0.0,
          "max": 93269.5,
          "p5": 0.0,
          "p95": 5730.375,
          "count": 2576
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6314505317714363,
          "median": 0.5159774903416885,
          "min": 0.15774100413411424,
          "max": 2.5013482123045336,
          "p5": 0.2441046940165336,
          "p95": 1.1574721270292505,
          "count": 35
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 15110988.116214287,
          "median": 85390.0,
          "min": 0.0,
          "max": 247218235.22000003,
          "p5": 0.0,
          "p95": 64863152.459999904,
          "count": 35
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.0360898044688079,
          "median": 0.03758807862250396,
          "min": 0.0012425729740005486,
          "max": 0.08107103012272227,
          "p5": 0.0024642775650716773,
          "p95": 0.07986324836172148,
          "count": 35
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0022805900328323036,
          "median": 0.000875520058274615,
          "min": 0.0,
          "max": 0.01692890721248906,
          "p5": 0.0,
          "p95": 0.013025384988176104,
          "count": 35
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 4.783709151933454e-07,
          "median": 7.656780232031103e-08,
          "min": 4.604197439348627e-11,
          "max": 4.3675751222920964e-06,
          "p5": 2.8891738371264775e-10,
          "p95": 2.797577582060342e-06,
          "count": 35
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 604.9,
          "median": 11.0,
          "min": 0.0,
          "max": 7154.5,
          "p5": 0.0,
          "p95": 3457.9499999999994,
          "count": 35
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 63582468.31750001,
          "median": 34316881.5,
          "min": 1624200.0,
          "max": 247218235.22000003,
          "p5": 8086815.687500001,
          "p95": 191648736.89299995,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 2572.75,
          "median": 1696.75,
          "min": 95.5,
          "max": 7154.5,
          "p5": 560.825,
          "p95": 5897.824999999998,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.37643807114322403,
          "median": 0.3548649057669273,
          "min": 0.187752536281693,
          "max": 0.5952668937784998,
          "p5": 0.20999287037054037,
          "p95": 0.5708929926788269,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.0035863810376012143,
          "median": 0.003069100486990723,
          "min": 0.0012425729740005486,
          "max": 0.008247090209987994,
          "p5": 0.0013276931532507214,
          "p95": 0.007359983983021487,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 2.444564824224159,
          "median": 1.396531347262691,
          "min": 1.087010411502231,
          "max": 7.178227708091691,
          "p5": 1.0981410859314662,
          "p95": 6.034468510419314,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 7.717603414679932e-10,
          "median": 3.3360838892210235e-10,
          "min": 4.604197439348627e-11,
          "max": 3.7226473087712898e-09,
          "p5": 1.1001920433713624e-10,
          "p95": 2.7087828284185955e-09,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.005678401332708605,
          "median": 0.005294959342502192,
          "min": 0.0011574186383444384,
          "max": 0.012132664320653736,
          "p5": 0.001181377175864329,
          "p95": 0.01156141188799862,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": -0.07833333333333325,
        "market": -0.007811259659372016,
        "sector": -0.046598043170943626,
        "peers": -0.03100421677679077
      },
      {
        "horizon": "3M",
        "stock": -0.07058823529411751,
        "market": 0.058957371688082016,
        "sector": -0.05652478921523785,
        "peers": -0.057516953098752266
      },
      {
        "horizon": "6M",
        "stock": -0.13996889580093153,
        "market": 0.10999472576257396,
        "sector": -0.07218950550988923,
        "peers": -0.06638520057494979
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
      "share_market": 0.34400579443533685,
      "share_sector": 0.4067184350227574,
      "share_idio": 0.2492757705419056,
      "beta_market": 0.9052872414569425,
      "beta_sector": -0.026187725565407157,
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
            "median": 0.34400579443533685,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "34.4%",
            "display_range": null,
            "display_text": "34.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 34.4,
            "plain_english": "Market explains about 34.4% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.4067184350227574,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "40.7%",
            "display_range": null,
            "display_text": "40.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 40.7,
            "plain_english": "Sector explains about 40.7% of price moves in the current state."
          },
          "company_share": {
            "median": 0.2492757705419056,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "24.9%",
            "display_range": null,
            "display_text": "24.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 24.9,
            "plain_english": "Company-specific explains about 24.9% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 0.9052872414569425,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.91",
            "display_range": null,
            "display_text": "0.91",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Moderate",
            "plain_english": "Moderate market link: a 1% market move has lined up with about a 0.91% stock move in the same direction in this state.",
            "value_num": 0.91
          },
          "beta_stock_lag": {
            "median": 1.0475853893249327,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.05",
            "display_range": null,
            "display_text": "1.05",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 1.05
          },
          "beta_sector": {
            "median": -0.026187725565407157,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.03",
            "display_range": null,
            "display_text": "-0.03",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Weak",
            "plain_english": "Weak sector link: a 1% sector move has lined up with about a 0.03% stock move in the opposite direction in this state.",
            "value_num": -0.03
          },
          "beta_market_lag": {
            "median": 0.6743731478198083,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.67",
            "display_range": null,
            "display_text": "0.67",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 0.67
          },
          "beta_sector_lag": {
            "median": -4.331056188441756,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-4.33",
            "display_range": null,
            "display_text": "-4.33",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -4.33
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
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.575727426315864,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "57.6%",
              "display_range": null,
              "display_text": "57.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 57.6,
              "plain_english": "Company-specific explains about 57.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.25824837118346705,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "25.8%",
                "display_range": null,
                "display_text": "25.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 25.8,
                "plain_english": "Market explains about 25.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.16602420250066885,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "16.6%",
                "display_range": null,
                "display_text": "16.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 16.6,
                "plain_english": "Sector explains about 16.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.575727426315864,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "57.6%",
                "display_range": null,
                "display_text": "57.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 57.6,
                "plain_english": "Company-specific explains about 57.6% of price moves in the current state."
              }
            },
            "summary": "Mar: Mostly company-driven, though based on only 5 trading days."
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
              "median": 0.465997126695361,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.6%",
              "display_range": null,
              "display_text": "46.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 46.6,
              "plain_english": "Market explains about 46.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.465997126695361,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "46.6%",
                "display_range": null,
                "display_text": "46.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 46.6,
                "plain_english": "Market explains about 46.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.18242570636123415,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "18.2%",
                "display_range": null,
                "display_text": "18.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 18.2,
                "plain_english": "Sector explains about 18.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3515771669434049,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "35.2%",
                "display_range": null,
                "display_text": "35.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 35.2,
                "plain_english": "Company-specific explains about 35.2% of price moves in the current state."
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
              "median": 0.4984450908596095,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "49.8%",
              "display_range": null,
              "display_text": "49.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 49.8,
              "plain_english": "Company-specific explains about 49.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.34420931725124687,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "34.4%",
                "display_range": null,
                "display_text": "34.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 34.4,
                "plain_english": "Market explains about 34.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.15734559188914365,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "15.7%",
                "display_range": null,
                "display_text": "15.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 15.7,
                "plain_english": "Sector explains about 15.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4984450908596095,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "49.8%",
                "display_range": null,
                "display_text": "49.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 49.8,
                "plain_english": "Company-specific explains about 49.8% of price moves in the current state."
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
              "median": 0.6399961275994693,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "64.0%",
              "display_range": null,
              "display_text": "64.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 64.0,
              "plain_english": "Company-specific explains about 64.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.22357086775873405,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "22.4%",
                "display_range": null,
                "display_text": "22.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 22.4,
                "plain_english": "Market explains about 22.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1364330046417966,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "13.6%",
                "display_range": null,
                "display_text": "13.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 13.6,
                "plain_english": "Sector explains about 13.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6399961275994693,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "64.0%",
                "display_range": null,
                "display_text": "64.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 64.0,
                "plain_english": "Company-specific explains about 64.0% of price moves in the current state."
              }
            },
            "summary": "Jun: Still clearly company-driven."
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
              "median": 0.3662234834477023,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.6%",
              "display_range": null,
              "display_text": "36.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 36.6,
              "plain_english": "Market explains about 36.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3662234834477023,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "36.6%",
                "display_range": null,
                "display_text": "36.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 36.6,
                "plain_english": "Market explains about 36.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.28157309756746757,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "28.2%",
                "display_range": null,
                "display_text": "28.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 28.2,
                "plain_english": "Sector explains about 28.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.35220341898483026,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "35.2%",
                "display_range": null,
                "display_text": "35.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 35.2,
                "plain_english": "Company-specific explains about 35.2% of price moves in the current state."
              }
            },
            "summary": "Jul: Much more balanced across company, sector, and market factors."
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
              "median": 0.6641302197744485,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "66.4%",
              "display_range": null,
              "display_text": "66.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 66.4,
              "plain_english": "Company-specific explains about 66.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.253185794084458,
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
                "median": 0.08268398614109343,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "8.3%",
                "display_range": null,
                "display_text": "8.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 8.3,
                "plain_english": "Sector explains about 8.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6641302197744485,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "66.4%",
                "display_range": null,
                "display_text": "66.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 66.4,
                "plain_english": "Company-specific explains about 66.4% of price moves in the current state."
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
              "median": 0.6261856163423049,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "62.6%",
              "display_range": null,
              "display_text": "62.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 62.6,
              "plain_english": "Company-specific explains about 62.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2079133389421778,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.8%",
                "display_range": null,
                "display_text": "20.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 20.8,
                "plain_english": "Market explains about 20.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1659010447155174,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "16.6%",
                "display_range": null,
                "display_text": "16.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 16.6,
                "plain_english": "Sector explains about 16.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6261856163423049,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "62.6%",
                "display_range": null,
                "display_text": "62.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 62.6,
                "plain_english": "Company-specific explains about 62.6% of price moves in the current state."
              }
            },
            "summary": "Sep: Still clearly company-driven."
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
              "median": 0.5208533567972446,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.1%",
              "display_range": null,
              "display_text": "52.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 52.1,
              "plain_english": "Company-specific explains about 52.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3379776652210694,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "33.8%",
                "display_range": null,
                "display_text": "33.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 33.8,
                "plain_english": "Market explains about 33.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.14116897798168604,
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
                "median": 0.5208533567972446,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "52.1%",
                "display_range": null,
                "display_text": "52.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 52.1,
                "plain_english": "Company-specific explains about 52.1% of price moves in the current state."
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
              "median": 0.5271471918257065,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.7%",
              "display_range": null,
              "display_text": "52.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 52.7,
              "plain_english": "Market explains about 52.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.5271471918257065,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "52.7%",
                "display_range": null,
                "display_text": "52.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 52.7,
                "plain_english": "Market explains about 52.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.15715919808970039,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "15.7%",
                "display_range": null,
                "display_text": "15.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 15.7,
                "plain_english": "Sector explains about 15.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3156936100845931,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "31.6%",
                "display_range": null,
                "display_text": "31.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 31.6,
                "plain_english": "Company-specific explains about 31.6% of price moves in the current state."
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
              "median": 0.4520266173093483,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.2%",
              "display_range": null,
              "display_text": "45.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 45.2,
              "plain_english": "Company-specific explains about 45.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.42700753038870704,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "42.7%",
                "display_range": null,
                "display_text": "42.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 42.7,
                "plain_english": "Market explains about 42.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.12096585230194466,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "12.1%",
                "display_range": null,
                "display_text": "12.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 12.1,
                "plain_english": "Sector explains about 12.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4520266173093483,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "45.2%",
                "display_range": null,
                "display_text": "45.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 45.2,
                "plain_english": "Company-specific explains about 45.2% of price moves in the current state."
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
              "median": 0.5227455199420163,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.3%",
              "display_range": null,
              "display_text": "52.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 52.3,
              "plain_english": "Company-specific explains about 52.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.31110084094550783,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "31.1%",
                "display_range": null,
                "display_text": "31.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 31.1,
                "plain_english": "Market explains about 31.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.16615363911247594,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "16.6%",
                "display_range": null,
                "display_text": "16.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 16.6,
                "plain_english": "Sector explains about 16.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5227455199420163,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "52.3%",
                "display_range": null,
                "display_text": "52.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 52.3,
                "plain_english": "Company-specific explains about 52.3% of price moves in the current state."
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
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.6109475229312026,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.1%",
              "display_range": null,
              "display_text": "61.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 61.1,
              "plain_english": "Company-specific explains about 61.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.16185452299534783,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "16.2%",
                "display_range": null,
                "display_text": "16.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 16.2,
                "plain_english": "Market explains about 16.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.22719795407344962,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "22.7%",
                "display_range": null,
                "display_text": "22.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 22.7,
                "plain_english": "Sector explains about 22.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6109475229312026,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "61.1%",
                "display_range": null,
                "display_text": "61.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 61.1,
                "plain_english": "Company-specific explains about 61.1% of price moves in the current state."
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
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5708687824100946,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "57.1%",
              "display_range": null,
              "display_text": "57.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 57.1,
              "plain_english": "Market explains about 57.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.5708687824100946,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "57.1%",
                "display_range": null,
                "display_text": "57.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 57.1,
                "plain_english": "Market explains about 57.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.20623757187256317,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.6%",
                "display_range": null,
                "display_text": "20.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 20.6,
                "plain_english": "Sector explains about 20.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.22289364571734213,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "22.3%",
                "display_range": null,
                "display_text": "22.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 22.3,
                "plain_english": "Company-specific explains about 22.3% of price moves in the current state."
              }
            },
            "summary": "Mar: Mostly market-driven."
          },
          {
            "month_key": "2026-04",
            "month_label": "April 2026",
            "month_short_label": "Apr",
            "period_label": "2026-04-01 to 2026-04-13",
            "n_obs": 6,
            "partial_month": false,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.47060317448485767,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.1%",
              "display_range": null,
              "display_text": "47.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 47.1,
              "plain_english": "Market explains about 47.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.47060317448485767,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "47.1%",
                "display_range": null,
                "display_text": "47.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 47.1,
                "plain_english": "Market explains about 47.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.29658444608642576,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "29.7%",
                "display_range": null,
                "display_text": "29.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 29.7,
                "plain_english": "Sector explains about 29.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.23281237942871652,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "23.3%",
                "display_range": null,
                "display_text": "23.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 23.3,
                "plain_english": "Company-specific explains about 23.3% of price moves in the current state."
              }
            },
            "summary": "Apr: Mostly market-driven, though based on only 6 trading days."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5020080321285141,
            "expected_duration_days": 6.944444444444445,
            "current_probability": 1.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.011777465512025978,
              "low": 0.011777465512025978,
              "high": 0.011777465512025978
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": null
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 6.888888888888889,
            "current_probability": 0.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.02125661726133445,
              "low": 0.02125661726133445,
              "high": 0.02125661726133445
            },
            "volatility_label": "High Volatility",
            "current_probability_display": 0.0
          }
        ],
        "transitions": {
          "mean": [
            [
              0.8629032258064516,
              0.13709677419354838
            ],
            [
              0.14516129032258066,
              0.8548387096774194
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              107.0,
              17.0
            ],
            [
              18.0,
              106.0
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
          "market_link_display": "0.91",
          "sector_link_display": "-0.03",
          "market_link_explainer": "Moderate market link. A 1% market move has lined up with about a 0.91% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "Weak sector link. A 1% sector move has lined up with about a 0.03% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "1.05",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "Low Volatility",
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "driver_share_pct": 40.7,
          "driver_share_display": "40.7%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 251 trading days relative to the 252-day target.",
          "history_days": 251,
          "history_limited": true,
          "volatility_label": "Low Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.8629032258064516,
          "effective_days": 125.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 6.9 days.",
          "expected_duration_days": 6.9
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
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Mar: Mostly company-driven, though based on only 5 trading days.",
          "share_market": 0.25824837118346705,
          "share_sector": 0.16602420250066885,
          "share_company": 0.575727426315864,
          "share_market_display": "25.8%",
          "share_sector_display": "16.6%",
          "share_company_display": "57.6%",
          "dominant_share_display": "57.6%"
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
          "share_market": 0.465997126695361,
          "share_sector": 0.18242570636123415,
          "share_company": 0.3515771669434049,
          "share_market_display": "46.6%",
          "share_sector_display": "18.2%",
          "share_company_display": "35.2%",
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
          "share_market": 0.34420931725124687,
          "share_sector": 0.15734559188914365,
          "share_company": 0.4984450908596095,
          "share_market_display": "34.4%",
          "share_sector_display": "15.7%",
          "share_company_display": "49.8%",
          "dominant_share_display": "49.8%"
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
          "share_market": 0.22357086775873405,
          "share_sector": 0.1364330046417966,
          "share_company": 0.6399961275994693,
          "share_market_display": "22.4%",
          "share_sector_display": "13.6%",
          "share_company_display": "64.0%",
          "dominant_share_display": "64.0%"
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
          "summary": "Jul: Much more balanced across company, sector, and market factors.",
          "share_market": 0.3662234834477023,
          "share_sector": 0.28157309756746757,
          "share_company": 0.35220341898483026,
          "share_market_display": "36.6%",
          "share_sector_display": "28.2%",
          "share_company_display": "35.2%",
          "dominant_share_display": "36.6%"
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
          "share_market": 0.253185794084458,
          "share_sector": 0.08268398614109343,
          "share_company": 0.6641302197744485,
          "share_market_display": "25.3%",
          "share_sector_display": "8.3%",
          "share_company_display": "66.4%",
          "dominant_share_display": "66.4%"
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
          "summary": "Sep: Still clearly company-driven.",
          "share_market": 0.2079133389421778,
          "share_sector": 0.1659010447155174,
          "share_company": 0.6261856163423049,
          "share_market_display": "20.8%",
          "share_sector_display": "16.6%",
          "share_company_display": "62.6%",
          "dominant_share_display": "62.6%"
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
          "summary": "Oct: Mostly company-driven.",
          "share_market": 0.3379776652210694,
          "share_sector": 0.14116897798168604,
          "share_company": 0.5208533567972446,
          "share_market_display": "33.8%",
          "share_sector_display": "14.1%",
          "share_company_display": "52.1%",
          "dominant_share_display": "52.1%"
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
          "share_market": 0.5271471918257065,
          "share_sector": 0.15715919808970039,
          "share_company": 0.3156936100845931,
          "share_market_display": "52.7%",
          "share_sector_display": "15.7%",
          "share_company_display": "31.6%",
          "dominant_share_display": "52.7%"
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
          "share_market": 0.42700753038870704,
          "share_sector": 0.12096585230194466,
          "share_company": 0.4520266173093483,
          "share_market_display": "42.7%",
          "share_sector_display": "12.1%",
          "share_company_display": "45.2%",
          "dominant_share_display": "45.2%"
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
          "share_market": 0.31110084094550783,
          "share_sector": 0.16615363911247594,
          "share_company": 0.5227455199420163,
          "share_market_display": "31.1%",
          "share_sector_display": "16.6%",
          "share_company_display": "52.3%",
          "dominant_share_display": "52.3%"
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
          "summary": "Feb: Still clearly company-driven.",
          "share_market": 0.16185452299534783,
          "share_sector": 0.22719795407344962,
          "share_company": 0.6109475229312026,
          "share_market_display": "16.2%",
          "share_sector_display": "22.7%",
          "share_company_display": "61.1%",
          "dominant_share_display": "61.1%"
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
          "share_market": 0.5708687824100946,
          "share_sector": 0.20623757187256317,
          "share_company": 0.22289364571734213,
          "share_market_display": "57.1%",
          "share_sector_display": "20.6%",
          "share_company_display": "22.3%",
          "dominant_share_display": "57.1%"
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-13",
          "n_obs": 6,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Apr: Mostly market-driven, though based on only 6 trading days.",
          "share_market": 0.47060317448485767,
          "share_sector": 0.29658444608642576,
          "share_company": 0.23281237942871652,
          "share_market_display": "47.1%",
          "share_sector_display": "29.7%",
          "share_company_display": "23.3%",
          "dominant_share_display": "47.1%"
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
            "expected_duration_days": 6.944444444444445,
            "current_probability": 1.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.011777465512025978,
              "low": 0.011777465512025978,
              "high": 0.011777465512025978
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 6.888888888888889,
            "current_probability": 0.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.02125661726133445,
              "low": 0.02125661726133445,
              "high": 0.02125661726133445
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.8629032258064516,
            0.13709677419354838
          ],
          [
            0.14516129032258066,
            0.8548387096774194
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 5.5,
          "quantity": 48000.0,
          "value": 264000.0
        },
        {
          "level": 2,
          "price": 5.49,
          "quantity": 182000.0,
          "value": 999180.0
        },
        {
          "level": 3,
          "price": 5.48,
          "quantity": 84000.0,
          "value": 460320.00000000006
        },
        {
          "level": 4,
          "price": 5.47,
          "quantity": 114000.0,
          "value": 623580.0
        },
        {
          "level": 5,
          "price": 5.46,
          "quantity": 14000.0,
          "value": 76440.0
        },
        {
          "level": 6,
          "price": 5.45,
          "quantity": 70000.0,
          "value": 381500.0
        },
        {
          "level": 7,
          "price": 5.44,
          "quantity": 118000.0,
          "value": 641920.0
        },
        {
          "level": 8,
          "price": 5.43,
          "quantity": 4000.0,
          "value": 21720.0
        },
        {
          "level": 9,
          "price": 5.42,
          "quantity": 10000.0,
          "value": 54200.0
        },
        {
          "level": 10,
          "price": 5.41,
          "quantity": 28000.0,
          "value": 151480.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 5.52,
          "quantity": 16000.0,
          "value": 88320.0
        },
        {
          "level": 2,
          "price": 5.53,
          "quantity": 84000.0,
          "value": 464520.0
        },
        {
          "level": 3,
          "price": 5.54,
          "quantity": 96000.0,
          "value": 531840.0
        },
        {
          "level": 4,
          "price": 5.55,
          "quantity": 106000.0,
          "value": 588300.0
        },
        {
          "level": 5,
          "price": 5.56,
          "quantity": 92000.0,
          "value": 511519.99999999994
        },
        {
          "level": 6,
          "price": 5.57,
          "quantity": 144000.0,
          "value": 802080.0
        },
        {
          "level": 7,
          "price": 5.58,
          "quantity": 14000.0,
          "value": 78120.0
        },
        {
          "level": 8,
          "price": 5.59,
          "quantity": 2000.0,
          "value": 11180.0
        },
        {
          "level": 9,
          "price": 5.6,
          "quantity": 24000.0,
          "value": 134400.0
        },
        {
          "level": 10,
          "price": 5.61,
          "quantity": 4000.0,
          "value": 22440.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-04-13 07:59:50.081000000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XHKG",
        "mid_price": 5.51,
        "spread_pct": 0.003629764065335676,
        "spread_ticks": 2.0,
        "tick_size": 0.01,
        "bid_depth_notional_top10": 3674340.0,
        "ask_depth_notional_top10": 3232720.0,
        "bid_ask_depth_ratio": 1.1366
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 365,
        "history_limited": false,
        "trade_days_used": 238,
        "n_trades_used": 222741,
        "first_trade_date": "2025-04-14",
        "last_trade_date": "2026-04-13",
        "window_label": "Apr 14, 2025 to Apr 13, 2026",
        "window_short_label": "Apr 14, 2025 to Apr 13, 2026",
        "trade_days_label": "238 trading days",
        "trade_count_label": "222,741 trades",
        "window_detail_label": "238 trading days • 222,741 trades",
        "history_note": "Trade-size percentiles use Apr 14, 2025 to Apr 13, 2026 history (238 trading days • 222,741 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 50560.0,
            "impact_pct": -0.001815,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 1.38,
            "pct_of_adv": 0.21
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 77840.0,
            "impact_pct": -0.001815,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 2.12,
            "pct_of_adv": 0.32
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 3753563.9,
            "impact_pct": -0.007665,
            "filled_pct": 97.9,
            "levels_consumed": 10,
            "pct_of_bid_depth": 102.16,
            "pct_of_adv": 15.34
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
            "order_id": "20515841.0",
            "timestamp": "2026-04-13 01:30:00.073000000",
            "local_timestamp": "2026-04-13 09:30:00",
            "posted_price": 5.52,
            "size_shares": 166000.0,
            "notional": 916320.0,
            "impact_pct": -0.003108,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 24.94,
            "price_vs_mid_pct": 0.181,
            "executed_event_count": 0,
            "event_count": 2
          },
          {
            "rank": 2,
            "order_id": "4087051521.0",
            "timestamp": "2026-04-13 07:48:13.331000000",
            "local_timestamp": "2026-04-13 15:48:13",
            "posted_price": 5.52,
            "size_shares": 148000.0,
            "notional": 816960.0,
            "impact_pct": -0.003044,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 22.23,
            "price_vs_mid_pct": 0.181,
            "executed_event_count": 0,
            "event_count": 15
          },
          {
            "rank": 3,
            "order_id": "277998081.0",
            "timestamp": "2026-04-13 01:35:27.739000000",
            "local_timestamp": "2026-04-13 09:35:27",
            "posted_price": 5.52,
            "size_shares": 146000.0,
            "notional": 805920.0,
            "impact_pct": -0.0030359999999999996,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 21.93,
            "price_vs_mid_pct": 0.181,
            "executed_event_count": 0,
            "event_count": 2
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-04-13",
        "bucket_minutes": 30,
        "tick_size": 0.01,
        "timezone": "HKT (UTC+8)",
        "session_label": "HKEX continuous trading session",
        "bucket_label_basis": "bucket start time",
        "display_window_label": "HKEX continuous trading session",
        "bucket_note": "Buckets are shown in local market time and labeled by bucket start.",
        "rows": [
          {
            "bucket": "09:30",
            "spread_pct": 0.0018198362147406346,
            "spread_ticks": 0.9999999999999787,
            "bid_depth_notional": 3706940.0,
            "ask_depth_notional": 3526000.0,
            "mid_price": 5.495
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.0036363636363635587,
            "spread_ticks": 1.9999999999999574,
            "bid_depth_notional": 4620900.0,
            "ask_depth_notional": 4041100.0,
            "mid_price": 5.5
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.0018132366273798345,
            "spread_ticks": 0.9999999999999787,
            "bid_depth_notional": 4058620.0,
            "ask_depth_notional": 3936480.0,
            "mid_price": 5.515
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.0018165304268846117,
            "spread_ticks": 0.9999999999999787,
            "bid_depth_notional": 4902740.0,
            "ask_depth_notional": 4472780.0,
            "mid_price": 5.505
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.0018165304268846117,
            "spread_ticks": 0.9999999999999787,
            "bid_depth_notional": 3866180.0,
            "ask_depth_notional": 3416880.0,
            "mid_price": 5.505
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.0018198362147406346,
            "spread_ticks": 0.9999999999999787,
            "bid_depth_notional": 4452100.0,
            "ask_depth_notional": 4853940.0,
            "mid_price": 5.495
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.0018264840182649635,
            "spread_ticks": 1.0000000000000675,
            "bid_depth_notional": 5103800.0,
            "ask_depth_notional": 5086700.0,
            "mid_price": 5.475
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.0018231540565177367,
            "spread_ticks": 0.9999999999999787,
            "bid_depth_notional": 6028840.0,
            "ask_depth_notional": 5089880.0,
            "mid_price": 5.485
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.0018198362147406346,
            "spread_ticks": 0.9999999999999787,
            "bid_depth_notional": 6078440.0,
            "ask_depth_notional": 5362520.0,
            "mid_price": 5.495
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.0018099547511313439,
            "spread_ticks": 1.0000000000000675,
            "bid_depth_notional": 4834680.0,
            "ask_depth_notional": 5500700.0,
            "mid_price": 5.525
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.003629764065335676,
            "spread_ticks": 1.9999999999999574,
            "bid_depth_notional": 3674340.0,
            "ask_depth_notional": 3232720.0,
            "mid_price": 5.51
          }
        ],
        "summary": {
          "median_spread_pct": 0.0018198362147406346,
          "median_spread_ticks": 0.9999999999999787,
          "median_bid_depth_notional": 4620900.0,
          "median_ask_depth_notional": 4472780.0,
          "tightest_bucket": "15:00",
          "widest_bucket": "10:00",
          "deepest_bid_bucket": "14:30",
          "thinnest_bid_bucket": "15:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 0.2,
      "peers": [
        {
          "ticker": "288",
          "pct": 0.3
        },
        {
          "ticker": "2517",
          "pct": 1.6
        },
        {
          "ticker": "1768",
          "pct": 1.6
        },
        {
          "ticker": "9985",
          "pct": 2.6
        },
        {
          "ticker": "151",
          "pct": 3.8
        },
        {
          "ticker": "2460",
          "pct": 3.8
        },
        {
          "ticker": "1117",
          "pct": 5.2
        },
        {
          "ticker": "1475",
          "pct": 178.5
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 760,
          "n_runs": 253,
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
            "retail_pct": 0.11315789473684211,
            "mixed_pct": 0.0,
            "instit_pct": 0.5276315789473685,
            "ambiguous_pct": 0.1736842105263158,
            "unobservable_pct": 0.18552631578947368,
            "unclear_pct": 0.3592105263157895,
            "retail_qty_pct": 0.06599997800000733,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6613331128889623,
            "ambiguous_qty_pct": 0.13866662044445985,
            "unobservable_qty_pct": 0.13400028866657043,
            "unclear_qty_pct": 0.2726669091110303,
            "retail_notional_pct": 0.06587300638889738,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6615145391719053,
            "ambiguous_notional_pct": 0.1385830562628526,
            "unobservable_notional_pct": 0.13402939817634466,
            "unclear_notional_pct": 0.27261245443919724
          },
          "run_composition": {
            "retail_pct": 0.33992094861660077,
            "mixed_pct": 0.0,
            "instit_pct": 0.16205533596837945,
            "ambiguous_pct": 0.1976284584980237,
            "unobservable_pct": 0.30039525691699603,
            "unclear_pct": 0.4980237154150198,
            "retail_notional_pct": 0.06587300638889738,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6615145391719053,
            "unclear_notional_pct": 0.27261245443919724
          },
          "counts": {
            "trades": {
              "retail": 86,
              "mixed": 0,
              "institutional": 401,
              "ambiguous": 132,
              "unobservable": 141,
              "unclear": 273
            },
            "runs": {
              "retail": 86,
              "mixed": 0,
              "institutional": 41,
              "ambiguous": 50,
              "unobservable": 76,
              "unclear": 126
            }
          },
          "confidence": {
            "high": 0.0,
            "medium": 0.16205533596837945,
            "low": 0.33992094861660077,
            "na": 0.4980237154150198
          },
          "confidence_counts": {
            "high": 0,
            "medium": 41,
            "low": 86,
            "na": 126
          },
          "trade_confidence": {
            "high": 0.0,
            "medium": 0.0881578947368421,
            "low": 0.5526315789473685,
            "na": 0.3592105263157895
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 67,
            "low": 420,
            "na": 273
          },
          "observability": {
            "avg_feature_coverage": 0.6845849802371541,
            "observable_run_pct": 0.6996047430830039,
            "ambiguous_run_pct": 0.1976284584980237,
            "unobservable_run_pct": 0.30039525691699603
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Mixed, leaning retail-like",
          "dominant_share": 0.33992094861660077,
          "dominance_gap": 0.03952569169960474,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 760
            },
            "d2_information": {
              "UNOBSERVABLE": 760
            },
            "d3_urgency": {
              "IMMEDIATE": 245,
              "ADAPTIVE": 8
            },
            "participant_confidence": {
              "NA": 126,
              "LOW": 86,
              "MEDIUM": 41
            }
          },
          "trade_size": {
            "avg": 21727.612513157896,
            "median": 11040.0
          },
          "run_size": {
            "avg": 65268.71743083004,
            "median": 21920.0,
            "avg_length": 3.0039525691699605
          },
          "recent_trades": [
            {
              "trade_id": "895",
              "timestamp": "2026-04-13T07:59:35.049261",
              "price": 5.5,
              "size": 4000.0,
              "notional": 22000.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 59023,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "894",
              "timestamp": "2026-04-13T07:59:28.615128",
              "price": 5.53,
              "size": 2000.0,
              "notional": 11060.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 59022,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "893",
              "timestamp": "2026-04-13T07:59:23.342028",
              "price": 5.5,
              "size": 2000.0,
              "notional": 11000.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59021,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "892",
              "timestamp": "2026-04-13T07:59:19.454899",
              "price": 5.51,
              "size": 2000.0,
              "notional": 11020.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59021,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "891",
              "timestamp": "2026-04-13T07:59:19.454899",
              "price": 5.51,
              "size": 2000.0,
              "notional": 11020.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59021,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "890",
              "timestamp": "2026-04-13T07:59:19.454899",
              "price": 5.51,
              "size": 14000.0,
              "notional": 77140.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59021,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "889",
              "timestamp": "2026-04-13T07:59:19.454569",
              "price": 5.51,
              "size": 2000.0,
              "notional": 11020.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59021,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "888",
              "timestamp": "2026-04-13T07:59:11.097473",
              "price": 5.5,
              "size": 2000.0,
              "notional": 11000.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 59020,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "886",
              "timestamp": "2026-04-13T07:57:42.522780",
              "price": 5.51,
              "size": 6000.0,
              "notional": 33060.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 59019,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "885",
              "timestamp": "2026-04-13T07:57:28.756246",
              "price": 5.5,
              "size": 2000.0,
              "notional": 11000.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 59018,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "884",
              "timestamp": "2026-04-13T07:56:50.264366",
              "price": 5.5,
              "size": 2000.0,
              "notional": 11000.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 59017,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "883",
              "timestamp": "2026-04-13T07:56:42.130717",
              "price": 5.51,
              "size": 2000.0,
              "notional": 11020.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 59016,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "882",
              "timestamp": "2026-04-13T07:56:17.878904",
              "price": 5.5,
              "size": 6000.0,
              "notional": 33000.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59015,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "881",
              "timestamp": "2026-04-13T07:56:17.878904",
              "price": 5.5,
              "size": 6000.0,
              "notional": 33000.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59015,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "880",
              "timestamp": "2026-04-13T07:56:17.878904",
              "price": 5.5,
              "size": 8000.0,
              "notional": 44000.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59015,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "879",
              "timestamp": "2026-04-13T07:56:17.878904",
              "price": 5.5,
              "size": 4000.0,
              "notional": 22000.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59015,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "878",
              "timestamp": "2026-04-13T07:56:10.666501",
              "price": 5.5,
              "size": 2000.0,
              "notional": 11000.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 59014,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "877",
              "timestamp": "2026-04-13T07:55:33.050477",
              "price": 5.5,
              "size": 2000.0,
              "notional": 11000.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 59013,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "876",
              "timestamp": "2026-04-13T07:55:18.434354",
              "price": 5.51,
              "size": 12000.0,
              "notional": 66120.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59012,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "875",
              "timestamp": "2026-04-13T07:55:18.430177",
              "price": 5.51,
              "size": 2000.0,
              "notional": 11020.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59012,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "874",
              "timestamp": "2026-04-13T07:55:18.430177",
              "price": 5.51,
              "size": 2000.0,
              "notional": 11020.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59012,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "873",
              "timestamp": "2026-04-13T07:55:18.430177",
              "price": 5.51,
              "size": 6000.0,
              "notional": 33060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59012,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "872",
              "timestamp": "2026-04-13T07:55:18.430177",
              "price": 5.51,
              "size": 20000.0,
              "notional": 110200.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59012,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "871",
              "timestamp": "2026-04-13T07:55:18.430177",
              "price": 5.51,
              "size": 2000.0,
              "notional": 11020.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59012,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "870",
              "timestamp": "2026-04-13T07:55:18.430177",
              "price": 5.51,
              "size": 6000.0,
              "notional": 33060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59012,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "869",
              "timestamp": "2026-04-13T07:55:18.430177",
              "price": 5.51,
              "size": 2000.0,
              "notional": 11020.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59012,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "868",
              "timestamp": "2026-04-13T07:55:18.430177",
              "price": 5.51,
              "size": 2000.0,
              "notional": 11020.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59012,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "867",
              "timestamp": "2026-04-13T07:55:18.430177",
              "price": 5.51,
              "size": 2000.0,
              "notional": 11020.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59012,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "866",
              "timestamp": "2026-04-13T07:55:03.021798",
              "price": 5.51,
              "size": 2000.0,
              "notional": 11020.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59011,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "865",
              "timestamp": "2026-04-13T07:55:00.996083",
              "price": 5.51,
              "size": 2000.0,
              "notional": 11020.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59011,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": []
        },
        "30d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 19627,
          "n_runs": 6001,
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
            "retail_pct": 0.05013501808732868,
            "mixed_pct": 0.0,
            "instit_pct": 0.5513832985173486,
            "ambiguous_pct": 0.19182758444999234,
            "unobservable_pct": 0.2066540989453304,
            "unclear_pct": 0.39848168339532275,
            "retail_qty_pct": 0.024671550372394074,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6757074755813199,
            "ambiguous_qty_pct": 0.14790508226985444,
            "unobservable_qty_pct": 0.1517158917764316,
            "unclear_qty_pct": 0.29962097404628607,
            "retail_notional_pct": 0.02468953982558188,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6748935849956339,
            "ambiguous_notional_pct": 0.14781318268865157,
            "unobservable_notional_pct": 0.15260369249013267,
            "unclear_notional_pct": 0.30041687517878424
          },
          "run_composition": {
            "retail_pct": 0.1618063656057324,
            "mixed_pct": 0.0,
            "instit_pct": 0.1979670054990835,
            "ambiguous_pct": 0.20779870021663055,
            "unobservable_pct": 0.43242792867855356,
            "unclear_pct": 0.6402266288951841,
            "retail_notional_pct": 0.02468953982558188,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6748935849956339,
            "unclear_notional_pct": 0.30041687517878424
          },
          "counts": {
            "trades": {
              "retail": 984,
              "mixed": 0,
              "institutional": 10822,
              "ambiguous": 3765,
              "unobservable": 4056,
              "unclear": 7821
            },
            "runs": {
              "retail": 971,
              "mixed": 0,
              "institutional": 1188,
              "ambiguous": 1247,
              "unobservable": 2595,
              "unclear": 3842
            }
          },
          "confidence": {
            "high": 0.04832527912014664,
            "medium": 0.18630228295284118,
            "low": 0.12514580903182804,
            "na": 0.6402266288951841
          },
          "confidence_counts": {
            "high": 290,
            "medium": 1118,
            "low": 751,
            "na": 3842
          },
          "trade_confidence": {
            "high": 0.09909818107708769,
            "medium": 0.2933713761654863,
            "low": 0.20904875936210324,
            "na": 0.39848168339532275
          },
          "trade_confidence_counts": {
            "high": 1945,
            "medium": 5758,
            "low": 4103,
            "na": 7821
          },
          "observability": {
            "avg_feature_coverage": 0.6652057990334944,
            "observable_run_pct": 0.5675720713214465,
            "ambiguous_run_pct": 0.20779870021663055,
            "unobservable_run_pct": 0.43242792867855356
          },
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "dominant_share": 0.43242792867855356,
          "dominance_gap": 0.22462922846192301,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 19627
            },
            "d2_information": {
              "UNOBSERVABLE": 19627
            },
            "d3_urgency": {
              "IMMEDIATE": 5847,
              "ADAPTIVE": 154
            },
            "participant_confidence": {
              "NA": 3842,
              "MEDIUM": 1118,
              "LOW": 751,
              "HIGH": 290
            }
          },
          "trade_size": {
            "avg": 25272.237981352217,
            "median": 11480.0
          },
          "run_size": {
            "avg": 82655.9264889185,
            "median": 22440.0,
            "avg_length": 3.270621563072821
          },
          "recent_trades": [
            {
              "trade_id": "895",
              "timestamp": "2026-04-13T07:59:35.049261",
              "price": 5.5,
              "size": 4000.0,
              "notional": 22000.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 59023,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "894",
              "timestamp": "2026-04-13T07:59:28.615128",
              "price": 5.53,
              "size": 2000.0,
              "notional": 11060.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 59022,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "893",
              "timestamp": "2026-04-13T07:59:23.342028",
              "price": 5.5,
              "size": 2000.0,
              "notional": 11000.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59021,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "892",
              "timestamp": "2026-04-13T07:59:19.454899",
              "price": 5.51,
              "size": 2000.0,
              "notional": 11020.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59021,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "891",
              "timestamp": "2026-04-13T07:59:19.454899",
              "price": 5.51,
              "size": 2000.0,
              "notional": 11020.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59021,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "890",
              "timestamp": "2026-04-13T07:59:19.454899",
              "price": 5.51,
              "size": 14000.0,
              "notional": 77140.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59021,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "889",
              "timestamp": "2026-04-13T07:59:19.454569",
              "price": 5.51,
              "size": 2000.0,
              "notional": 11020.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59021,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "888",
              "timestamp": "2026-04-13T07:59:11.097473",
              "price": 5.5,
              "size": 2000.0,
              "notional": 11000.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 59020,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "886",
              "timestamp": "2026-04-13T07:57:42.522780",
              "price": 5.51,
              "size": 6000.0,
              "notional": 33060.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 59019,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "885",
              "timestamp": "2026-04-13T07:57:28.756246",
              "price": 5.5,
              "size": 2000.0,
              "notional": 11000.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 59018,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "884",
              "timestamp": "2026-04-13T07:56:50.264366",
              "price": 5.5,
              "size": 2000.0,
              "notional": 11000.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 59017,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "883",
              "timestamp": "2026-04-13T07:56:42.130717",
              "price": 5.51,
              "size": 2000.0,
              "notional": 11020.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 59016,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "882",
              "timestamp": "2026-04-13T07:56:17.878904",
              "price": 5.5,
              "size": 6000.0,
              "notional": 33000.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59015,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "881",
              "timestamp": "2026-04-13T07:56:17.878904",
              "price": 5.5,
              "size": 6000.0,
              "notional": 33000.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59015,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "880",
              "timestamp": "2026-04-13T07:56:17.878904",
              "price": 5.5,
              "size": 8000.0,
              "notional": 44000.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59015,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "879",
              "timestamp": "2026-04-13T07:56:17.878904",
              "price": 5.5,
              "size": 4000.0,
              "notional": 22000.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59015,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "878",
              "timestamp": "2026-04-13T07:56:10.666501",
              "price": 5.5,
              "size": 2000.0,
              "notional": 11000.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 59014,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "877",
              "timestamp": "2026-04-13T07:55:33.050477",
              "price": 5.5,
              "size": 2000.0,
              "notional": 11000.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 59013,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "876",
              "timestamp": "2026-04-13T07:55:18.434354",
              "price": 5.51,
              "size": 12000.0,
              "notional": 66120.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59012,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "875",
              "timestamp": "2026-04-13T07:55:18.430177",
              "price": 5.51,
              "size": 2000.0,
              "notional": 11020.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59012,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "874",
              "timestamp": "2026-04-13T07:55:18.430177",
              "price": 5.51,
              "size": 2000.0,
              "notional": 11020.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59012,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "873",
              "timestamp": "2026-04-13T07:55:18.430177",
              "price": 5.51,
              "size": 6000.0,
              "notional": 33060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59012,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "872",
              "timestamp": "2026-04-13T07:55:18.430177",
              "price": 5.51,
              "size": 20000.0,
              "notional": 110200.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59012,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "871",
              "timestamp": "2026-04-13T07:55:18.430177",
              "price": 5.51,
              "size": 2000.0,
              "notional": 11020.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59012,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "870",
              "timestamp": "2026-04-13T07:55:18.430177",
              "price": 5.51,
              "size": 6000.0,
              "notional": 33060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59012,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "869",
              "timestamp": "2026-04-13T07:55:18.430177",
              "price": 5.51,
              "size": 2000.0,
              "notional": 11020.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59012,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "868",
              "timestamp": "2026-04-13T07:55:18.430177",
              "price": 5.51,
              "size": 2000.0,
              "notional": 11020.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59012,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "867",
              "timestamp": "2026-04-13T07:55:18.430177",
              "price": 5.51,
              "size": 2000.0,
              "notional": 11020.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59012,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "866",
              "timestamp": "2026-04-13T07:55:03.021798",
              "price": 5.51,
              "size": 2000.0,
              "notional": 11020.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59011,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "865",
              "timestamp": "2026-04-13T07:55:00.996083",
              "price": 5.51,
              "size": 2000.0,
              "notional": 11020.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59011,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": []
        },
        "3m": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 54514,
          "n_runs": 18240,
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
            "retail_pct": 0.05538026928862311,
            "mixed_pct": 0.0,
            "instit_pct": 0.5250027515867484,
            "ambiguous_pct": 0.19129031074586345,
            "unobservable_pct": 0.22832666837876509,
            "unclear_pct": 0.41961697912462853,
            "retail_qty_pct": 0.028467404864337267,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6430524694000883,
            "ambiguous_qty_pct": 0.15343942543104244,
            "unobservable_qty_pct": 0.17504070030453195,
            "unclear_qty_pct": 0.3284801257355744,
            "retail_notional_pct": 0.028568886424385587,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6411390090772928,
            "ambiguous_notional_pct": 0.15381705420404146,
            "unobservable_notional_pct": 0.17647505029428015,
            "unclear_notional_pct": 0.3302921044983216
          },
          "run_composition": {
            "retail_pct": 0.1619517543859649,
            "mixed_pct": 0.0,
            "instit_pct": 0.19725877192982455,
            "ambiguous_pct": 0.18854166666666666,
            "unobservable_pct": 0.45224780701754386,
            "unclear_pct": 0.6407894736842106,
            "retail_notional_pct": 0.028568886424385587,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6411390090772928,
            "unclear_notional_pct": 0.3302921044983216
          },
          "counts": {
            "trades": {
              "retail": 3019,
              "mixed": 0,
              "institutional": 28620,
              "ambiguous": 10428,
              "unobservable": 12447,
              "unclear": 22875
            },
            "runs": {
              "retail": 2954,
              "mixed": 0,
              "institutional": 3598,
              "ambiguous": 3439,
              "unobservable": 8249,
              "unclear": 11688
            }
          },
          "confidence": {
            "high": 0.052192982456140354,
            "medium": 0.18782894736842104,
            "low": 0.11918859649122807,
            "na": 0.6407894736842106
          },
          "confidence_counts": {
            "high": 952,
            "medium": 3426,
            "low": 2174,
            "na": 11688
          },
          "trade_confidence": {
            "high": 0.0798143596140441,
            "medium": 0.30742561543823604,
            "low": 0.1931430458230913,
            "na": 0.41961697912462853
          },
          "trade_confidence_counts": {
            "high": 4351,
            "medium": 16759,
            "low": 10529,
            "na": 22875
          },
          "observability": {
            "avg_feature_coverage": 0.6590131578947369,
            "observable_run_pct": 0.5477521929824561,
            "ambiguous_run_pct": 0.18854166666666666,
            "unobservable_run_pct": 0.45224780701754386
          },
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "dominant_share": 0.45224780701754386,
          "dominance_gap": 0.2549890350877193,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 54514
            },
            "d2_information": {
              "UNOBSERVABLE": 54514
            },
            "d3_urgency": {
              "IMMEDIATE": 17837,
              "ADAPTIVE": 403
            },
            "participant_confidence": {
              "NA": 11688,
              "MEDIUM": 3426,
              "LOW": 2174,
              "HIGH": 952
            }
          },
          "trade_size": {
            "avg": 25429.388378765085,
            "median": 12520.0
          },
          "run_size": {
            "avg": 76000.96919298245,
            "median": 22760.0,
            "avg_length": 2.9887061403508772
          },
          "recent_trades": [
            {
              "trade_id": "895",
              "timestamp": "2026-04-13T07:59:35.049261",
              "price": 5.5,
              "size": 4000.0,
              "notional": 22000.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 59023,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "894",
              "timestamp": "2026-04-13T07:59:28.615128",
              "price": 5.53,
              "size": 2000.0,
              "notional": 11060.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 59022,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "893",
              "timestamp": "2026-04-13T07:59:23.342028",
              "price": 5.5,
              "size": 2000.0,
              "notional": 11000.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59021,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "892",
              "timestamp": "2026-04-13T07:59:19.454899",
              "price": 5.51,
              "size": 2000.0,
              "notional": 11020.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59021,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "891",
              "timestamp": "2026-04-13T07:59:19.454899",
              "price": 5.51,
              "size": 2000.0,
              "notional": 11020.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59021,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "890",
              "timestamp": "2026-04-13T07:59:19.454899",
              "price": 5.51,
              "size": 14000.0,
              "notional": 77140.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59021,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "889",
              "timestamp": "2026-04-13T07:59:19.454569",
              "price": 5.51,
              "size": 2000.0,
              "notional": 11020.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59021,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "888",
              "timestamp": "2026-04-13T07:59:11.097473",
              "price": 5.5,
              "size": 2000.0,
              "notional": 11000.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 59020,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "886",
              "timestamp": "2026-04-13T07:57:42.522780",
              "price": 5.51,
              "size": 6000.0,
              "notional": 33060.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 59019,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "885",
              "timestamp": "2026-04-13T07:57:28.756246",
              "price": 5.5,
              "size": 2000.0,
              "notional": 11000.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 59018,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "884",
              "timestamp": "2026-04-13T07:56:50.264366",
              "price": 5.5,
              "size": 2000.0,
              "notional": 11000.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 59017,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "883",
              "timestamp": "2026-04-13T07:56:42.130717",
              "price": 5.51,
              "size": 2000.0,
              "notional": 11020.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 59016,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "882",
              "timestamp": "2026-04-13T07:56:17.878904",
              "price": 5.5,
              "size": 6000.0,
              "notional": 33000.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59015,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "881",
              "timestamp": "2026-04-13T07:56:17.878904",
              "price": 5.5,
              "size": 6000.0,
              "notional": 33000.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59015,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "880",
              "timestamp": "2026-04-13T07:56:17.878904",
              "price": 5.5,
              "size": 8000.0,
              "notional": 44000.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59015,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "879",
              "timestamp": "2026-04-13T07:56:17.878904",
              "price": 5.5,
              "size": 4000.0,
              "notional": 22000.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59015,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "878",
              "timestamp": "2026-04-13T07:56:10.666501",
              "price": 5.5,
              "size": 2000.0,
              "notional": 11000.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 59014,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "877",
              "timestamp": "2026-04-13T07:55:33.050477",
              "price": 5.5,
              "size": 2000.0,
              "notional": 11000.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 59013,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "876",
              "timestamp": "2026-04-13T07:55:18.434354",
              "price": 5.51,
              "size": 12000.0,
              "notional": 66120.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59012,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "875",
              "timestamp": "2026-04-13T07:55:18.430177",
              "price": 5.51,
              "size": 2000.0,
              "notional": 11020.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59012,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "874",
              "timestamp": "2026-04-13T07:55:18.430177",
              "price": 5.51,
              "size": 2000.0,
              "notional": 11020.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59012,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "873",
              "timestamp": "2026-04-13T07:55:18.430177",
              "price": 5.51,
              "size": 6000.0,
              "notional": 33060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59012,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "872",
              "timestamp": "2026-04-13T07:55:18.430177",
              "price": 5.51,
              "size": 20000.0,
              "notional": 110200.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59012,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "871",
              "timestamp": "2026-04-13T07:55:18.430177",
              "price": 5.51,
              "size": 2000.0,
              "notional": 11020.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59012,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "870",
              "timestamp": "2026-04-13T07:55:18.430177",
              "price": 5.51,
              "size": 6000.0,
              "notional": 33060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59012,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "869",
              "timestamp": "2026-04-13T07:55:18.430177",
              "price": 5.51,
              "size": 2000.0,
              "notional": 11020.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59012,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "868",
              "timestamp": "2026-04-13T07:55:18.430177",
              "price": 5.51,
              "size": 2000.0,
              "notional": 11020.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59012,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "867",
              "timestamp": "2026-04-13T07:55:18.430177",
              "price": 5.51,
              "size": 2000.0,
              "notional": 11020.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59012,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "866",
              "timestamp": "2026-04-13T07:55:03.021798",
              "price": 5.51,
              "size": 2000.0,
              "notional": 11020.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59011,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "865",
              "timestamp": "2026-04-13T07:55:00.996083",
              "price": 5.51,
              "size": 2000.0,
              "notional": 11020.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59011,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": []
        },
        "6m": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 109128,
          "n_runs": 36901,
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
            "retail_pct": 0.06589509566747306,
            "mixed_pct": 0.0,
            "instit_pct": 0.5252455831683894,
            "ambiguous_pct": 0.19115167509713363,
            "unobservable_pct": 0.21770764606700388,
            "unclear_pct": 0.4088593211641375,
            "retail_qty_pct": 0.03270943317522015,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6506794467813748,
            "ambiguous_qty_pct": 0.149317261984535,
            "unobservable_qty_pct": 0.16729385805887004,
            "unclear_qty_pct": 0.316611120043405,
            "retail_notional_pct": 0.032688728679105584,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6499231109353569,
            "ambiguous_notional_pct": 0.1495542813574157,
            "unobservable_notional_pct": 0.16783387902812172,
            "unclear_notional_pct": 0.3173881603855374
          },
          "run_composition": {
            "retail_pct": 0.19072653857619035,
            "mixed_pct": 0.0,
            "instit_pct": 0.20202704533752472,
            "ambiguous_pct": 0.18934446220969622,
            "unobservable_pct": 0.4179019538765887,
            "unclear_pct": 0.6072464160862849,
            "retail_notional_pct": 0.032688728679105584,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6499231109353569,
            "unclear_notional_pct": 0.3173881603855374
          },
          "counts": {
            "trades": {
              "retail": 7191,
              "mixed": 0,
              "institutional": 57319,
              "ambiguous": 20860,
              "unobservable": 23758,
              "unclear": 44618
            },
            "runs": {
              "retail": 7038,
              "mixed": 0,
              "institutional": 7455,
              "ambiguous": 6987,
              "unobservable": 15421,
              "unclear": 22408
            }
          },
          "confidence": {
            "high": 0.04872496680306767,
            "medium": 0.19969648519010325,
            "low": 0.14433213192054417,
            "na": 0.6072464160862849
          },
          "confidence_counts": {
            "high": 1798,
            "medium": 7369,
            "low": 5326,
            "na": 22408
          },
          "trade_confidence": {
            "high": 0.06325599296239279,
            "medium": 0.3132834836155707,
            "low": 0.21460120225789897,
            "na": 0.40885932116413753
          },
          "trade_confidence_counts": {
            "high": 6903,
            "medium": 34188,
            "low": 23419,
            "na": 44618
          },
          "observability": {
            "avg_feature_coverage": 0.6657895449987806,
            "observable_run_pct": 0.5820980461234113,
            "ambiguous_run_pct": 0.18934446220969622,
            "unobservable_run_pct": 0.4179019538765887
          },
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "dominant_share": 0.4179019538765887,
          "dominance_gap": 0.21587490853906396,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 109128
            },
            "d2_information": {
              "UNOBSERVABLE": 109128
            },
            "d3_urgency": {
              "IMMEDIATE": 36010,
              "ADAPTIVE": 891
            },
            "participant_confidence": {
              "NA": 22408,
              "MEDIUM": 7369,
              "LOW": 5326,
              "HIGH": 1798
            }
          },
          "trade_size": {
            "avg": 26350.99812871124,
            "median": 12700.0
          },
          "run_size": {
            "avg": 77928.28714099889,
            "median": 23440.0,
            "avg_length": 2.9573182298582696
          },
          "recent_trades": [
            {
              "trade_id": "895",
              "timestamp": "2026-04-13T07:59:35.049261",
              "price": 5.5,
              "size": 4000.0,
              "notional": 22000.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 59023,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "894",
              "timestamp": "2026-04-13T07:59:28.615128",
              "price": 5.53,
              "size": 2000.0,
              "notional": 11060.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 59022,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "893",
              "timestamp": "2026-04-13T07:59:23.342028",
              "price": 5.5,
              "size": 2000.0,
              "notional": 11000.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59021,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "892",
              "timestamp": "2026-04-13T07:59:19.454899",
              "price": 5.51,
              "size": 2000.0,
              "notional": 11020.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59021,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "891",
              "timestamp": "2026-04-13T07:59:19.454899",
              "price": 5.51,
              "size": 2000.0,
              "notional": 11020.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59021,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "890",
              "timestamp": "2026-04-13T07:59:19.454899",
              "price": 5.51,
              "size": 14000.0,
              "notional": 77140.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59021,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "889",
              "timestamp": "2026-04-13T07:59:19.454569",
              "price": 5.51,
              "size": 2000.0,
              "notional": 11020.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59021,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "888",
              "timestamp": "2026-04-13T07:59:11.097473",
              "price": 5.5,
              "size": 2000.0,
              "notional": 11000.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 59020,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "886",
              "timestamp": "2026-04-13T07:57:42.522780",
              "price": 5.51,
              "size": 6000.0,
              "notional": 33060.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 59019,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "885",
              "timestamp": "2026-04-13T07:57:28.756246",
              "price": 5.5,
              "size": 2000.0,
              "notional": 11000.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 59018,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "884",
              "timestamp": "2026-04-13T07:56:50.264366",
              "price": 5.5,
              "size": 2000.0,
              "notional": 11000.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 59017,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "883",
              "timestamp": "2026-04-13T07:56:42.130717",
              "price": 5.51,
              "size": 2000.0,
              "notional": 11020.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 59016,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "882",
              "timestamp": "2026-04-13T07:56:17.878904",
              "price": 5.5,
              "size": 6000.0,
              "notional": 33000.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59015,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "881",
              "timestamp": "2026-04-13T07:56:17.878904",
              "price": 5.5,
              "size": 6000.0,
              "notional": 33000.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59015,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "880",
              "timestamp": "2026-04-13T07:56:17.878904",
              "price": 5.5,
              "size": 8000.0,
              "notional": 44000.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59015,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "879",
              "timestamp": "2026-04-13T07:56:17.878904",
              "price": 5.5,
              "size": 4000.0,
              "notional": 22000.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59015,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "878",
              "timestamp": "2026-04-13T07:56:10.666501",
              "price": 5.5,
              "size": 2000.0,
              "notional": 11000.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 59014,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "877",
              "timestamp": "2026-04-13T07:55:33.050477",
              "price": 5.5,
              "size": 2000.0,
              "notional": 11000.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 59013,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "876",
              "timestamp": "2026-04-13T07:55:18.434354",
              "price": 5.51,
              "size": 12000.0,
              "notional": 66120.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59012,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "875",
              "timestamp": "2026-04-13T07:55:18.430177",
              "price": 5.51,
              "size": 2000.0,
              "notional": 11020.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59012,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "874",
              "timestamp": "2026-04-13T07:55:18.430177",
              "price": 5.51,
              "size": 2000.0,
              "notional": 11020.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59012,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "873",
              "timestamp": "2026-04-13T07:55:18.430177",
              "price": 5.51,
              "size": 6000.0,
              "notional": 33060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59012,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "872",
              "timestamp": "2026-04-13T07:55:18.430177",
              "price": 5.51,
              "size": 20000.0,
              "notional": 110200.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59012,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "871",
              "timestamp": "2026-04-13T07:55:18.430177",
              "price": 5.51,
              "size": 2000.0,
              "notional": 11020.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59012,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "870",
              "timestamp": "2026-04-13T07:55:18.430177",
              "price": 5.51,
              "size": 6000.0,
              "notional": 33060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59012,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "869",
              "timestamp": "2026-04-13T07:55:18.430177",
              "price": 5.51,
              "size": 2000.0,
              "notional": 11020.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59012,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "868",
              "timestamp": "2026-04-13T07:55:18.430177",
              "price": 5.51,
              "size": 2000.0,
              "notional": 11020.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59012,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "867",
              "timestamp": "2026-04-13T07:55:18.430177",
              "price": 5.51,
              "size": 2000.0,
              "notional": 11020.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59012,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "866",
              "timestamp": "2026-04-13T07:55:03.021798",
              "price": 5.51,
              "size": 2000.0,
              "notional": 11020.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59011,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "865",
              "timestamp": "2026-04-13T07:55:00.996083",
              "price": 5.51,
              "size": 2000.0,
              "notional": 11020.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59011,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": []
        }
      },
      "valid": true,
      "currency": "HKD",
      "n_trades": 109128,
      "n_runs": 36901,
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
        "retail_pct": 0.06589509566747306,
        "mixed_pct": 0.0,
        "instit_pct": 0.5252455831683894,
        "ambiguous_pct": 0.19115167509713363,
        "unobservable_pct": 0.21770764606700388,
        "unclear_pct": 0.4088593211641375,
        "retail_qty_pct": 0.03270943317522015,
        "mixed_qty_pct": 0.0,
        "instit_qty_pct": 0.6506794467813748,
        "ambiguous_qty_pct": 0.149317261984535,
        "unobservable_qty_pct": 0.16729385805887004,
        "unclear_qty_pct": 0.316611120043405,
        "retail_notional_pct": 0.032688728679105584,
        "mixed_notional_pct": 0.0,
        "instit_notional_pct": 0.6499231109353569,
        "ambiguous_notional_pct": 0.1495542813574157,
        "unobservable_notional_pct": 0.16783387902812172,
        "unclear_notional_pct": 0.3173881603855374
      },
      "run_composition": {
        "retail_pct": 0.19072653857619035,
        "mixed_pct": 0.0,
        "instit_pct": 0.20202704533752472,
        "ambiguous_pct": 0.18934446220969622,
        "unobservable_pct": 0.4179019538765887,
        "unclear_pct": 0.6072464160862849
      },
      "trade_size": {
        "avg": 26350.99812871124,
        "median": 12700.0
      },
      "run_size": {
        "avg": 77928.28714099889,
        "median": 23440.0,
        "avg_length": 2.9573182298582696
      },
      "confidence": {
        "high": 0.04872496680306767,
        "medium": 0.19969648519010325,
        "low": 0.14433213192054417,
        "na": 0.6072464160862849
      },
      "confidence_counts": {
        "high": 1798,
        "medium": 7369,
        "low": 5326,
        "na": 22408
      },
      "trade_confidence": {
        "high": 0.06325599296239279,
        "medium": 0.3132834836155707,
        "low": 0.21460120225789897,
        "na": 0.40885932116413753
      },
      "trade_confidence_counts": {
        "high": 6903,
        "medium": 34188,
        "low": 23419,
        "na": 44618
      },
      "counts": {
        "trades": {
          "retail": 7191,
          "mixed": 0,
          "institutional": 57319,
          "ambiguous": 20860,
          "unobservable": 23758,
          "unclear": 44618
        },
        "runs": {
          "retail": 7038,
          "mixed": 0,
          "institutional": 7455,
          "ambiguous": 6987,
          "unobservable": 15421,
          "unclear": 22408
        }
      },
      "observability": {
        "avg_feature_coverage": 0.6657895449987806,
        "observable_run_pct": 0.5820980461234113,
        "ambiguous_run_pct": 0.18934446220969622,
        "unobservable_run_pct": 0.4179019538765887
      },
      "dominant_bucket": "UNOBSERVABLE",
      "dominant_label": "Not Observable",
      "dominant_share": 0.4179019538765887,
      "dominance_gap": 0.21587490853906396,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2025-11",
            "n_trades": 15682,
            "n_runs": 5509,
            "retail_pct": 0.07161076393317178,
            "mixed_pct": 0.0,
            "instit_pct": 0.5311184797857416,
            "ambiguous_pct": 0.17676316796327,
            "unobservable_pct": 0.2205075883178166,
            "unclear_pct": 0.3972707562810866,
            "avg_trade_size": 29687.758494452242,
            "avg_run_notional": 84509.60768015974,
            "retail_qty_pct": 0.030776682926869418,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6875090968927278,
            "ambiguous_qty_pct": 0.12159269323857887,
            "unobservable_qty_pct": 0.1601215269418239,
            "unclear_qty_pct": 0.28171422018040276,
            "retail_notional_pct": 0.030499813718927106,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6873913797669523,
            "ambiguous_notional_pct": 0.12213012722573134,
            "unobservable_notional_pct": 0.15997867928838935,
            "unclear_notional_pct": 0.2821088065141207,
            "run_retail_pct": 0.19931021964058812,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.21092757306226176,
            "run_ambiguous_pct": 0.1833363586857869,
            "run_unobservable_pct": 0.4064258486113632,
            "run_unclear_pct": 0.5897622072971501,
            "avg_feature_coverage": 0.6672989653294609,
            "high_confidence_pct": 0.050462878925394805,
            "medium_confidence_pct": 0.23797422399709567,
            "low_confidence_pct": 0.1218006897803594,
            "na_confidence_pct": 0.5897622072971501,
            "total_quantity": null
          },
          {
            "month": "2025-12",
            "n_trades": 14575,
            "n_runs": 5261,
            "retail_pct": 0.07958833619210978,
            "mixed_pct": 0.0,
            "instit_pct": 0.5441509433962264,
            "ambiguous_pct": 0.1674785591766724,
            "unobservable_pct": 0.20878216123499144,
            "unclear_pct": 0.3762607204116638,
            "avg_trade_size": 23681.456909090914,
            "avg_run_notional": 65606.77332256225,
            "retail_qty_pct": 0.04262122399630213,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6666948497589698,
            "ambiguous_qty_pct": 0.13967092139292264,
            "unobservable_qty_pct": 0.15101300485180544,
            "unclear_qty_pct": 0.29068392624472805,
            "retail_notional_pct": 0.04250923517040018,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6667037039704152,
            "ambiguous_notional_pct": 0.13971748897815983,
            "unobservable_notional_pct": 0.1510695718810248,
            "unclear_notional_pct": 0.2907870608591846,
            "run_retail_pct": 0.21820946588101123,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.20281315339289108,
            "run_ambiguous_pct": 0.157194449724387,
            "run_unobservable_pct": 0.4217829310017107,
            "run_unclear_pct": 0.5789773807260977,
            "avg_feature_coverage": 0.6653582969017298,
            "high_confidence_pct": 0.08325413419501995,
            "medium_confidence_pct": 0.19901159475384908,
            "low_confidence_pct": 0.13875689032503327,
            "na_confidence_pct": 0.5789773807260977,
            "total_quantity": null
          },
          {
            "month": "2026-01",
            "n_trades": 15988,
            "n_runs": 5452,
            "retail_pct": 0.06398548911683763,
            "mixed_pct": 0.0,
            "instit_pct": 0.4934325744308231,
            "ambiguous_pct": 0.20853139854891167,
            "unobservable_pct": 0.23405053790342756,
            "unclear_pct": 0.44258193645233923,
            "avg_trade_size": 24935.02959657243,
            "avg_run_notional": 73122.02002751284,
            "retail_qty_pct": 0.03368731729033399,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6053245190594322,
            "ambiguous_qty_pct": 0.16973955491863627,
            "unobservable_qty_pct": 0.19124860873159755,
            "unclear_qty_pct": 0.3609881636502338,
            "retail_notional_pct": 0.03354353545270859,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6047970289831216,
            "ambiguous_notional_pct": 0.17003703170945728,
            "unobservable_notional_pct": 0.19162240385471258,
            "unclear_notional_pct": 0.36165943556416985,
            "run_retail_pct": 0.1814013206162876,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.19479090242112987,
            "run_ambiguous_pct": 0.20432868672046955,
            "run_unobservable_pct": 0.419479090242113,
            "run_unclear_pct": 0.6238077769625825,
            "avg_feature_coverage": 0.6627476155539253,
            "high_confidence_pct": 0.03411592076302274,
            "medium_confidence_pct": 0.2087307410124725,
            "low_confidence_pct": 0.13334556126192224,
            "na_confidence_pct": 0.6238077769625825,
            "total_quantity": null
          },
          {
            "month": "2026-02",
            "n_trades": 15114,
            "n_runs": 5265,
            "retail_pct": 0.057562524811433105,
            "mixed_pct": 0.0,
            "instit_pct": 0.5175995765515417,
            "ambiguous_pct": 0.18281063914251688,
            "unobservable_pct": 0.2420272594945084,
            "unclear_pct": 0.42483789863702526,
            "avg_trade_size": 25710.578672753738,
            "avg_run_notional": 73806.20817853752,
            "retail_qty_pct": 0.03131907640160732,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6176772101601751,
            "ambiguous_qty_pct": 0.15714994960533396,
            "unobservable_qty_pct": 0.1938537638328837,
            "unclear_qty_pct": 0.3510037134382177,
            "retail_notional_pct": 0.03130887680874131,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6167044935747413,
            "ambiguous_notional_pct": 0.1575315486385506,
            "unobservable_notional_pct": 0.19445508097796682,
            "unclear_notional_pct": 0.3519866296165174,
            "run_retail_pct": 0.16296296296296298,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.19544159544159545,
            "run_ambiguous_pct": 0.16676163342830008,
            "run_unobservable_pct": 0.4748338081671415,
            "run_unclear_pct": 0.6415954415954416,
            "avg_feature_coverage": 0.6543304843304844,
            "high_confidence_pct": 0.06419753086419754,
            "medium_confidence_pct": 0.1754985754985755,
            "low_confidence_pct": 0.11870845204178537,
            "na_confidence_pct": 0.6415954415954416,
            "total_quantity": null
          },
          {
            "month": "2026-03",
            "n_trades": 18999,
            "n_runs": 6324,
            "retail_pct": 0.04537080898994684,
            "mixed_pct": 0.0,
            "instit_pct": 0.5423969682614874,
            "ambiguous_pct": 0.18174640770566872,
            "unobservable_pct": 0.230485815042897,
            "unclear_pct": 0.41223222274856575,
            "avg_trade_size": 25477.853256487182,
            "avg_run_notional": 76542.3361827957,
            "retail_qty_pct": 0.022157595480082393,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6735762085846989,
            "ambiguous_qty_pct": 0.13831557316710172,
            "unobservable_qty_pct": 0.165950622768117,
            "unclear_qty_pct": 0.30426619593521875,
            "retail_notional_pct": 0.022337360669039387,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6729493940574396,
            "ambiguous_notional_pct": 0.1380320115395275,
            "unobservable_notional_pct": 0.16668123373399363,
            "unclear_notional_pct": 0.3047132452735211,
            "run_retail_pct": 0.13377609108159394,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.20066413662239088,
            "run_ambiguous_pct": 0.18896268184693232,
            "run_unobservable_pct": 0.4765970904490829,
            "run_unclear_pct": 0.6655597722960152,
            "avg_feature_coverage": 0.6559772296015179,
            "high_confidence_pct": 0.06246046805819102,
            "medium_confidence_pct": 0.17710309930423782,
            "low_confidence_pct": 0.09487666034155598,
            "na_confidence_pct": 0.6655597722960152,
            "total_quantity": null
          },
          {
            "month": "2026-04",
            "n_trades": 5722,
            "n_runs": 1714,
            "retail_pct": 0.07444949318420133,
            "mixed_pct": 0.0,
            "instit_pct": 0.5447396015379238,
            "ambiguous_pct": 0.194162880111849,
            "unobservable_pct": 0.18664802516602585,
            "unclear_pct": 0.38081090527787487,
            "avg_trade_size": 25885.050473610627,
            "avg_run_notional": 86414.38670361727,
            "retail_qty_pct": 0.035695246371327954,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6812163547677247,
            "ambiguous_qty_pct": 0.15258135021556551,
            "unobservable_qty_pct": 0.13050704864538187,
            "unclear_qty_pct": 0.2830883988609474,
            "retail_notional_pct": 0.03576212494703027,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6809984454595266,
            "ambiguous_notional_pct": 0.1525190809547825,
            "unobservable_notional_pct": 0.13072034863866056,
            "unclear_notional_pct": 0.28323942959344306,
            "run_retail_pct": 0.2467911318553092,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.18436406067677946,
            "run_ambiguous_pct": 0.20653442240373396,
            "run_unobservable_pct": 0.36231038506417734,
            "run_unclear_pct": 0.5688448074679113,
            "avg_feature_coverage": 0.6765460910151692,
            "high_confidence_pct": 0.019253208868144692,
            "medium_confidence_pct": 0.19953325554259044,
            "low_confidence_pct": 0.21236872812135357,
            "na_confidence_pct": 0.5688448074679113,
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
          "trade_id": "895",
          "timestamp": "2026-04-13T07:59:35.049261",
          "price": 5.5,
          "size": 4000.0,
          "notional": 22000.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 59023,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "894",
          "timestamp": "2026-04-13T07:59:28.615128",
          "price": 5.53,
          "size": 2000.0,
          "notional": 11060.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 59022,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "893",
          "timestamp": "2026-04-13T07:59:23.342028",
          "price": 5.5,
          "size": 2000.0,
          "notional": 11000.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 59021,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "892",
          "timestamp": "2026-04-13T07:59:19.454899",
          "price": 5.51,
          "size": 2000.0,
          "notional": 11020.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 59021,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "891",
          "timestamp": "2026-04-13T07:59:19.454899",
          "price": 5.51,
          "size": 2000.0,
          "notional": 11020.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 59021,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "890",
          "timestamp": "2026-04-13T07:59:19.454899",
          "price": 5.51,
          "size": 14000.0,
          "notional": 77140.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 59021,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "889",
          "timestamp": "2026-04-13T07:59:19.454569",
          "price": 5.51,
          "size": 2000.0,
          "notional": 11020.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 59021,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "888",
          "timestamp": "2026-04-13T07:59:11.097473",
          "price": 5.5,
          "size": 2000.0,
          "notional": 11000.0,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 59020,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "886",
          "timestamp": "2026-04-13T07:57:42.522780",
          "price": 5.51,
          "size": 6000.0,
          "notional": 33060.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 59019,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "885",
          "timestamp": "2026-04-13T07:57:28.756246",
          "price": 5.5,
          "size": 2000.0,
          "notional": 11000.0,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 59018,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "884",
          "timestamp": "2026-04-13T07:56:50.264366",
          "price": 5.5,
          "size": 2000.0,
          "notional": 11000.0,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 59017,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "883",
          "timestamp": "2026-04-13T07:56:42.130717",
          "price": 5.51,
          "size": 2000.0,
          "notional": 11020.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 59016,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "882",
          "timestamp": "2026-04-13T07:56:17.878904",
          "price": 5.5,
          "size": 6000.0,
          "notional": 33000.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 59015,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "881",
          "timestamp": "2026-04-13T07:56:17.878904",
          "price": 5.5,
          "size": 6000.0,
          "notional": 33000.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 59015,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "880",
          "timestamp": "2026-04-13T07:56:17.878904",
          "price": 5.5,
          "size": 8000.0,
          "notional": 44000.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 59015,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "879",
          "timestamp": "2026-04-13T07:56:17.878904",
          "price": 5.5,
          "size": 4000.0,
          "notional": 22000.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 59015,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "878",
          "timestamp": "2026-04-13T07:56:10.666501",
          "price": 5.5,
          "size": 2000.0,
          "notional": 11000.0,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 59014,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "877",
          "timestamp": "2026-04-13T07:55:33.050477",
          "price": 5.5,
          "size": 2000.0,
          "notional": 11000.0,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 59013,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "876",
          "timestamp": "2026-04-13T07:55:18.434354",
          "price": 5.51,
          "size": 12000.0,
          "notional": 66120.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 59012,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "875",
          "timestamp": "2026-04-13T07:55:18.430177",
          "price": 5.51,
          "size": 2000.0,
          "notional": 11020.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 59012,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "874",
          "timestamp": "2026-04-13T07:55:18.430177",
          "price": 5.51,
          "size": 2000.0,
          "notional": 11020.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 59012,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "873",
          "timestamp": "2026-04-13T07:55:18.430177",
          "price": 5.51,
          "size": 6000.0,
          "notional": 33060.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 59012,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "872",
          "timestamp": "2026-04-13T07:55:18.430177",
          "price": 5.51,
          "size": 20000.0,
          "notional": 110200.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 59012,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "871",
          "timestamp": "2026-04-13T07:55:18.430177",
          "price": 5.51,
          "size": 2000.0,
          "notional": 11020.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 59012,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "870",
          "timestamp": "2026-04-13T07:55:18.430177",
          "price": 5.51,
          "size": 6000.0,
          "notional": 33060.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 59012,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "869",
          "timestamp": "2026-04-13T07:55:18.430177",
          "price": 5.51,
          "size": 2000.0,
          "notional": 11020.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 59012,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "868",
          "timestamp": "2026-04-13T07:55:18.430177",
          "price": 5.51,
          "size": 2000.0,
          "notional": 11020.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 59012,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "867",
          "timestamp": "2026-04-13T07:55:18.430177",
          "price": 5.51,
          "size": 2000.0,
          "notional": 11020.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 59012,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "866",
          "timestamp": "2026-04-13T07:55:03.021798",
          "price": 5.51,
          "size": 2000.0,
          "notional": 11020.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 59011,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "865",
          "timestamp": "2026-04-13T07:55:00.996083",
          "price": 5.51,
          "size": 2000.0,
          "notional": 11020.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 59011,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
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
      "total_trades": 109127,
      "price_moving_trades": 24780,
      "pct_price_moving": 22.707487606183623,
      "all_movers": {
        "count": 24780,
        "avg_size": 25928.827331315577,
        "median_size": 12620.0,
        "retail_count": 3163,
        "mixed_count": 0,
        "institutional_count": 9926,
        "ambiguous_count": 5725,
        "unobservable_count": 5966,
        "retail_pct": 12.764326069410814,
        "mixed_pct": 0.0,
        "instit_pct": 40.056497175141246,
        "unclear_pct": 47.17917675544794
      },
      "positive_movers": {
        "count": 12215,
        "avg_size": 25035.44375603766,
        "median_size": 12620.0,
        "retail_count": 188,
        "mixed_count": 0,
        "institutional_count": 4739,
        "ambiguous_count": 2255,
        "unobservable_count": 5033,
        "retail_pct": 1.539091281211625,
        "mixed_pct": 0.0,
        "instit_pct": 38.796561604584525,
        "unclear_pct": 59.66434711420384
      },
      "negative_movers": {
        "count": 12565,
        "avg_size": 26797.32557023478,
        "median_size": 12640.0,
        "retail_count": 2975,
        "mixed_count": 0,
        "institutional_count": 5187,
        "ambiguous_count": 3470,
        "unobservable_count": 933,
        "retail_pct": 23.676880222841227,
        "mixed_pct": 0.0,
        "instit_pct": 41.28133704735376,
        "unclear_pct": 35.041782729805014
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
          "opening": 0.025925890903035695,
          "continuous": 0.828073231751778,
          "closing": 0.06600019739481895,
          "auctions": 0.09192608829785465,
          "other": 0.08000067995036739
        },
        "1M": {
          "opening": 0.010083771063077963,
          "continuous": 0.8440485476693335,
          "closing": 0.08725044226393242,
          "auctions": 0.09733421332701038,
          "other": 0.058617239003656146
        },
        "3M": {
          "opening": 0.009352704328520051,
          "continuous": 0.8331939286728295,
          "closing": 0.11828757011692617,
          "auctions": 0.12764027444544623,
          "other": 0.03916579688172416
        },
        "6M": {
          "opening": 0.0072072209279208125,
          "continuous": 0.8391867476697121,
          "closing": 0.10702375249268145,
          "auctions": 0.11423097342060226,
          "other": 0.04658227890968569
        }
      },
      "hhi": {
        "1D": 0.10799978800179175,
        "1M": 0.13707511081319648,
        "3M": 0.1290486400818704,
        "6M": 0.13419438823030566
      },
      "profile_buckets": [
        {
          "time": "09:00",
          "avg_share": 0.0065
        },
        {
          "time": "09:30",
          "avg_share": 0.1583
        },
        {
          "time": "10:00",
          "avg_share": 0.0885
        },
        {
          "time": "10:30",
          "avg_share": 0.0652
        },
        {
          "time": "11:00",
          "avg_share": 0.0532
        },
        {
          "time": "11:30",
          "avg_share": 0.0431
        },
        {
          "time": "12:00",
          "avg_share": 0.0532
        },
        {
          "time": "13:00",
          "avg_share": 0.072
        },
        {
          "time": "13:30",
          "avg_share": 0.0572
        },
        {
          "time": "14:00",
          "avg_share": 0.0531
        },
        {
          "time": "14:30",
          "avg_share": 0.0634
        },
        {
          "time": "15:00",
          "avg_share": 0.0725
        },
        {
          "time": "15:30",
          "avg_share": 0.1301
        },
        {
          "time": "16:00",
          "avg_share": 0.0836
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "142",
          "auctions_pct": 9.916703971571927,
          "hhi": 0.13642658237094116,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400",
            "you": true
          }
        },
        {
          "ticker": "151",
          "auctions_pct": 18.83248069011944,
          "hhi": 0.157625879940525,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "9985",
          "auctions_pct": 3.060537010914339,
          "hhi": 0.13533484305115645,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "1768",
          "auctions_pct": 2.6870449928198696,
          "hhi": 0.13402116004339576,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "2517",
          "auctions_pct": 1.8143015947391676,
          "hhi": 0.1388480549861551,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "288",
          "auctions_pct": 25.482586568052607,
          "hhi": 0.13956401426440632,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "1475",
          "auctions_pct": 12.932712938545185,
          "hhi": 0.3150108085324112,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "1117",
          "auctions_pct": 2.0917410108004497,
          "hhi": 0.15568755078988325,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "2460",
          "auctions_pct": 3.0744223680649228,
          "hhi": 0.13695326914475967,
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
