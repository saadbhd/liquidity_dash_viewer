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
      "ticker": "CRPU",
      "name": "Sasseur Reit",
      "marketCap": 825508995.96,
      "sector": "REIT - Retail",
      "industry": "Real Estate"
    },
    {
      "ticker": "ODBU",
      "name": "UtdHampshReitUSD",
      "marketCap": 309587528.77500004,
      "sector": "REIT - Retail",
      "industry": "Real Estate"
    },
    {
      "ticker": "D5IU",
      "name": "LANDMARK REIT",
      "marketCap": 53877669.853,
      "sector": "REIT - Retail",
      "industry": "Real Estate"
    },
    {
      "ticker": "BMGU",
      "name": "BHG Retail Reit",
      "marketCap": 231223157.445,
      "sector": "REIT - Retail",
      "industry": "Real Estate"
    },
    {
      "ticker": "AU8U",
      "name": "CapLand China T",
      "marketCap": 1178451621.0500002,
      "sector": "REIT - Retail",
      "industry": "Real Estate"
    },
    {
      "ticker": "JYEU",
      "name": "Lendlease Reit",
      "marketCap": 1368852791.195,
      "sector": "REIT - Diversified",
      "industry": "Real Estate"
    },
    {
      "ticker": "AJBU",
      "name": "Keppel DC Reit",
      "marketCap": 4883769648.63,
      "sector": "REIT - Office",
      "industry": "Real Estate"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XSES",
    "currency": "SGD",
    "ticker": "CRPU",
    "company": "Sasseur Reit",
    "asof_date": "2026-04-28",
    "industry": "Real Estate",
    "sector": "REIT - Retail",
    "market_cap_display": "825.5M",
    "market_cap_category": "small",
    "universe_total": 558,
    "peers_count": 6,
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
          "score_pca": 78.31541218637993,
          "score_pca_percentile": 78.31541218637993,
          "rank_pca": 122,
          "total": 558,
          "adv_notional_sgd": 877074.0,
          "adv_volume_shares": 1328900.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.002907490638209423,
          "votes": 257.0,
          "trades": 257.0,
          "spread_pct": 0.0081021221761366,
          "spread_ticks": 1.077087794432548,
          "amihud": 0.0,
          "volatility": 0.1433653116071401
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5141807822798952,
          "loadings": {
            "log_adv": 0.554223332862344,
            "log_trades": 0.5069484754962947,
            "log_turnover": 0.5144175730037643,
            "neg_spread": 0.36822502690356257,
            "neg_amihud": 0.05202908490473233,
            "neg_vol": -0.18143209466272153
          }
        },
        "data_quality": {
          "turnover_ratio": {
            "valid": true,
            "reason": null
          }
        },
        "peer_summary": {
          "n_peers": 6,
          "peer_median_adv": 359274.4089932221,
          "peer_median_score_pca": 65.77060931899642,
          "peer_median_trades": 356.5,
          "peer_median_volatility": 0.10565104542613221,
          "peer_median_spread_pct": 0.009126603302871503,
          "peer_median_spread_ticks": 1.0000758610226066,
          "peer_median_amihud": 0.0,
          "peer_median_turnover_ratio": 0.0006546685088843338,
          "target_vs_peer": {
            "score_pca_delta": 12.54,
            "adv_delta_pct": 144.1,
            "trades_delta_pct": -27.91,
            "volatility_delta_pct": -35.7,
            "spread_pct_delta_pct": 11.23,
            "spread_ticks_delta_pct": 7.7,
            "amihud_delta_pct": null,
            "turnover_ratio_delta_pct": 344.12
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 78.31541218637993,
            "rank_pca": 122,
            "adv": 877074.0,
            "trades": 257.0,
            "volatility": 0.1433653116071401,
            "spread_pct": 0.0081021221761366,
            "spread_ticks": 1.077087794432548,
            "amihud": 0.0,
            "turnover_ratio": 0.002907490638209423,
            "is_target": true
          },
          {
            "ticker": "ODBU",
            "score_pca": 49.6415770609319,
            "rank_pca": 282,
            "adv": 20876.31798644421,
            "trades": 19.0,
            "volatility": 0.09036668192891477,
            "spread_pct": 0.009478672985781998,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 5.290910801482753e-05,
            "is_target": false
          },
          {
            "ticker": "D5IU",
            "score_pca": 52.508960573476706,
            "rank_pca": 266,
            "adv": 10346.7,
            "trades": 11.0,
            "volatility": 1.469613012006543,
            "spread_pct": 0.15384615384615383,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0004663620000695236,
            "is_target": false
          },
          {
            "ticker": "BMGU",
            "score_pca": 13.440860215053762,
            "rank_pca": 484,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.1424083769633507,
            "spread_ticks": 12.363636363636363,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "AU8U",
            "score_pca": 79.03225806451613,
            "rank_pca": 118,
            "adv": 697672.5,
            "trades": 694.0,
            "volatility": 0.0698436351877061,
            "spread_pct": 0.007326007326007331,
            "spread_ticks": 1.0,
            "amihud": 1.0539244669197312e-08,
            "turnover_ratio": 0.0008429750176991441,
            "is_target": false
          },
          {
            "ticker": "JYEU",
            "score_pca": 93.1899641577061,
            "rank_pca": 39,
            "adv": 4339482.5,
            "trades": 3719.0,
            "volatility": 0.24980329284859662,
            "spread_pct": 0.008774533619961007,
            "spread_ticks": 1.0001517220452132,
            "amihud": 2.0214230209619304e-09,
            "turnover_ratio": 0.009118632256403017,
            "is_target": false
          },
          {
            "ticker": "AJBU",
            "score_pca": 94.08602150537635,
            "rank_pca": 34,
            "adv": 20146185.0,
            "trades": 3171.0,
            "volatility": 0.12093540892334965,
            "spread_pct": 0.0042541203455972575,
            "spread_ticks": 1.004922228785194,
            "amihud": 0.0,
            "turnover_ratio": 0.005223571261929555,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "REIT - Retail",
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
              "mean": 3387306.3586017536,
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
              "mean": 0.015967470203975476,
              "median": 0.00040402403902629804,
              "min": 0.0,
              "max": 4.160817819204824,
              "p5": 0.0,
              "p95": 0.02031153639385566,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00023867644624985028,
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
              "mean": 0.26256409483194043,
              "median": 0.08832215829401448,
              "min": 0.0,
              "max": 1.469613012006543,
              "p5": 0.02444527231569714,
              "p95": 1.0110951965171295,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 12346847.627248306,
              "median": 695350.5,
              "min": 0.0,
              "max": 81607820.0,
              "p5": 3621.3450000000007,
              "p95": 58248870.04999997,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04233977398970934,
              "median": 0.00857594796589636,
              "min": 0.004224177839755735,
              "max": 0.15384615384615383,
              "p5": 0.004244733054532567,
              "p95": 0.14984293193717274,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0029281940616125916,
              "median": 0.0008791771345473821,
              "min": 0.0,
              "max": 0.009667044427194038,
              "p5": 1.8518187805189638e-05,
              "p95": 0.009284266095287479,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.5273972425679949e-09,
              "median": 0.0,
              "min": 0.0,
              "max": 1.0539244669197312e-08,
              "p5": 0.0,
              "p95": 7.4232320770717066e-09,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1586.25,
              "median": 250.0,
              "min": 0.0,
              "max": 8052.0,
              "p5": 3.8500000000000005,
              "p95": 6428.699999999997,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 4202427.169664407,
              "median": 359274.4089932221,
              "min": 0.0,
              "max": 20146185.0,
              "p5": 2586.675,
              "p95": 16194509.375,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1269.0,
              "median": 356.5,
              "min": 0.0,
              "max": 3719.0,
              "p5": 2.75,
              "p95": 3582.0,
              "count": 6
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.33342700514918505,
              "median": 0.10565104542613221,
              "min": 0.0,
              "max": 1.469613012006543,
              "p5": 0.017460908796926525,
              "p95": 1.1646605822170564,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.054347977514475364,
              "median": 0.009126603302871503,
              "min": 0.0042541203455972575,
              "max": 0.15384615384615383,
              "p5": 0.005022092090699776,
              "p95": 0.15098670962545305,
              "count": 6
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.8947850524111285,
              "median": 1.0000758610226066,
              "min": 1.0,
              "max": 12.363636363636363,
              "p5": 1.0,
              "p95": 9.523957829923571,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.5121335380318488e-09,
              "median": 0.0,
              "min": 0.0,
              "max": 1.0539244669197312e-08,
              "p5": 0.0,
              "p95": 8.835680339550234e-09,
              "count": 5
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002617408274019345,
              "median": 0.0006546685088843338,
              "min": 0.0,
              "max": 0.009118632256403017,
              "p5": 1.3227277003706882e-05,
              "p95": 0.008144867007784651,
              "count": 6
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.0,
            "market": -0.0010301077481527088,
            "sector": 0.0,
            "peers": 0.0,
            "vs_market": 0.0010301077481527088,
            "vs_sector": 0.0,
            "vs_peers": 0.0
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 83.15412186379928,
          "score_pca_percentile": 83.15412186379928,
          "rank_pca": 95,
          "total": 558,
          "adv_notional_sgd": 758584.5,
          "adv_volume_shares": 1176100.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.002573180630294305,
          "votes": 391.0,
          "trades": 391.0,
          "spread_pct": 0.007731277375652912,
          "spread_ticks": 1.0,
          "amihud": 5.0607336622513225e-09,
          "volatility": 0.12727894789801095
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5314760641420067,
          "loadings": {
            "log_adv": 0.5379972254123243,
            "log_trades": 0.49120306867487085,
            "log_turnover": 0.48680331743952976,
            "neg_spread": 0.4203237129209976,
            "neg_amihud": 0.12520220568937676,
            "neg_vol": 0.19988357848938185
          }
        },
        "data_quality": {
          "turnover_ratio": {
            "valid": true,
            "reason": null
          }
        },
        "peer_summary": {
          "n_peers": 6,
          "peer_median_adv": 494050.4925073646,
          "peer_median_score_pca": 76.70250896057348,
          "peer_median_trades": 403.0,
          "peer_median_volatility": 0.17937573451085348,
          "peer_median_spread_pct": 0.009450890845844053,
          "peer_median_spread_ticks": 1.0048044497465578,
          "peer_median_amihud": 8.580924176620481e-10,
          "peer_median_turnover_ratio": 0.0007006775989306753,
          "target_vs_peer": {
            "score_pca_delta": 6.45,
            "adv_delta_pct": 53.5,
            "trades_delta_pct": -2.98,
            "volatility_delta_pct": 29.04,
            "spread_pct_delta_pct": 18.2,
            "spread_ticks_delta_pct": -0.48,
            "amihud_delta_pct": -489.77,
            "turnover_ratio_delta_pct": 267.24
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 83.15412186379928,
            "rank_pca": 95,
            "adv": 758584.5,
            "trades": 391.0,
            "volatility": 0.12727894789801095,
            "spread_pct": 0.007731277375652912,
            "spread_ticks": 1.0,
            "amihud": 5.0607336622513225e-09,
            "turnover_ratio": 0.002573180630294305,
            "is_target": true
          },
          {
            "ticker": "ODBU",
            "score_pca": 68.81720430107528,
            "rank_pca": 175,
            "adv": 128122.98501472916,
            "trades": 39.0,
            "volatility": 0.10501016212320548,
            "spread_pct": 0.010091209004463428,
            "spread_ticks": 1.0612244897959184,
            "amihud": 0.0,
            "turnover_ratio": 0.00033102108604148505,
            "is_target": false
          },
          {
            "ticker": "D5IU",
            "score_pca": 38.88888888888889,
            "rank_pca": 342,
            "adv": 6977.6,
            "trades": 10.0,
            "volatility": 1.6545135133888742,
            "spread_pct": 0.15384615384615383,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0003145048654822415,
            "is_target": false
          },
          {
            "ticker": "BMGU",
            "score_pca": 19.892473118279568,
            "rank_pca": 448,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.2080508147957547,
            "spread_pct": 0.10912119950020824,
            "spread_ticks": 9.357142857142858,
            "amihud": 5.949406249256326e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "AU8U",
            "score_pca": 84.58781362007169,
            "rank_pca": 87,
            "adv": 859978.0,
            "trades": 767.0,
            "volatility": 0.17531969980635054,
            "spread_pct": 0.007534888173234059,
            "spread_ticks": 1.0081615120274914,
            "amihud": 8.677764509283029e-09,
            "turnover_ratio": 0.0010703341118198655,
            "is_target": false
          },
          {
            "ticker": "JYEU",
            "score_pca": 95.3405017921147,
            "rank_pca": 27,
            "adv": 6986565.0,
            "trades": 2255.0,
            "volatility": 0.1834317692153564,
            "spread_pct": 0.008810572687224677,
            "spread_ticks": 1.0,
            "amihud": 1.5265605429255425e-09,
            "turnover_ratio": 0.014521901218334632,
            "is_target": false
          },
          {
            "ticker": "AJBU",
            "score_pca": 97.31182795698925,
            "rank_pca": 16,
            "adv": 22977150.0,
            "trades": 3412.0,
            "volatility": 0.14395720392133707,
            "spread_pct": 0.004325844473198698,
            "spread_ticks": 1.0014473874656245,
            "amihud": 1.8962429239855375e-10,
            "turnover_ratio": 0.005957593480901951,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "REIT - Retail",
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
              "mean": 3130677.3134379652,
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
              "mean": 0.004295220414212243,
              "median": 0.0002660528960788684,
              "min": 0.0,
              "max": 0.8766725990376376,
              "p5": 0.0,
              "p95": 0.012403147857927217,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.883682194669132e-05,
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
              "mean": 0.3436777997505724,
              "median": 0.16242826307041602,
              "min": 0.10501016212320548,
              "max": 1.6545135133888742,
              "p5": 0.1118988587552568,
              "p95": 1.1482515688812818,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 8882580.385626841,
              "median": 735142.25,
              "min": 0.0,
              "max": 58176677.0,
              "p5": 2442.1600000000003,
              "p95": 41461351.09999998,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.038267087182822276,
              "median": 0.008390525565654514,
              "min": 0.004250621484741657,
              "max": 0.15384615384615383,
              "p5": 0.004341954977945875,
              "p95": 0.13819241982507285,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002276817080630551,
              "median": 0.0010094606217407698,
              "min": 0.0,
              "max": 0.006805668067285017,
              "p5": 0.00011007670291878453,
              "p95": 0.006583618507096198,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.461536386317394e-07,
              "median": 2.8637362181359605e-09,
              "min": 0.0,
              "max": 5.949406249256326e-06,
              "p5": 0.0,
              "p95": 3.8701512795948575e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1211.75,
              "median": 438.5,
              "min": 0.0,
              "max": 6041.0,
              "p5": 3.5000000000000004,
              "p95": 4612.649999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 5159798.930835788,
              "median": 494050.4925073646,
              "min": 0.0,
              "max": 22977150.0,
              "p5": 1744.4,
              "p95": 18979503.75,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1080.5,
              "median": 403.0,
              "min": 0.0,
              "max": 3412.0,
              "p5": 2.5,
              "p95": 3122.75,
              "count": 6
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4117138605418131,
              "median": 0.17937573451085348,
              "min": 0.10501016212320548,
              "max": 1.6545135133888742,
              "p5": 0.11474692257273837,
              "p95": 1.2928978387405943,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.048954977947413825,
              "median": 0.009450890845844053,
              "min": 0.004325844473198698,
              "max": 0.15384615384615383,
              "p5": 0.005128105398207538,
              "p95": 0.14266491525966743,
              "count": 6
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.4046627077386487,
              "median": 1.0048044497465578,
              "min": 1.0,
              "max": 9.357142857142858,
              "p5": 1.0,
              "p95": 7.283163265306123,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.933000331001554e-07,
              "median": 8.580924176620481e-10,
              "min": 0.0,
              "max": 5.949406249256326e-06,
              "p5": 0.0,
              "p95": 4.464224128069565e-06,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0036992257937633628,
              "median": 0.0007006775989306753,
              "min": 0.0,
              "max": 0.014521901218334632,
              "p5": 7.862621637056037e-05,
              "p95": 0.012380824283976462,
              "count": 6
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.03937007874015741,
            "market": -0.00214165955488288,
            "sector": 0.036260806081584995,
            "peers": 0.02812666117525553,
            "vs_market": 0.04151173829504029,
            "vs_sector": 0.003109272658572415,
            "vs_peers": 0.01124341756490188
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 84.40860215053763,
          "score_pca_percentile": 84.40860215053763,
          "rank_pca": 88,
          "total": 558,
          "adv_notional_sgd": 720015.0,
          "adv_volume_shares": 1043500.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.0022830660553627307,
          "votes": 391.0,
          "trades": 391.0,
          "spread_pct": 0.007547169811320763,
          "spread_ticks": 1.0,
          "amihud": 5.0607336622513225e-09,
          "volatility": 0.17943068580613325
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.5659425702541747,
          "loadings": {
            "log_adv": 0.5140588922046954,
            "log_trades": 0.46262137630405664,
            "log_turnover": 0.46957612405211246,
            "neg_spread": 0.42529776667013736,
            "neg_amihud": 0.24186521824386253,
            "neg_vol": 0.24868897667821888
          }
        },
        "data_quality": {
          "turnover_ratio": {
            "valid": true,
            "reason": null
          }
        },
        "peer_summary": {
          "n_peers": 6,
          "peer_median_adv": 712777.6156789662,
          "peer_median_score_pca": 76.4336917562724,
          "peer_median_trades": 454.0,
          "peer_median_volatility": 0.2067755857936377,
          "peer_median_spread_pct": 0.00949890934306353,
          "peer_median_spread_ticks": 1.0023753999525646,
          "peer_median_amihud": 3.3375906003789836e-09,
          "peer_median_turnover_ratio": 0.001301495972204993,
          "target_vs_peer": {
            "score_pca_delta": 7.97,
            "adv_delta_pct": 1.0,
            "trades_delta_pct": -13.88,
            "volatility_delta_pct": 13.22,
            "spread_pct_delta_pct": 20.55,
            "spread_ticks_delta_pct": -0.24,
            "amihud_delta_pct": -51.63,
            "turnover_ratio_delta_pct": 75.42
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 84.40860215053763,
            "rank_pca": 88,
            "adv": 720015.0,
            "trades": 391.0,
            "volatility": 0.17943068580613325,
            "spread_pct": 0.007547169811320763,
            "spread_ticks": 1.0,
            "amihud": 5.0607336622513225e-09,
            "turnover_ratio": 0.0022830660553627307,
            "is_target": true
          },
          {
            "ticker": "ODBU",
            "score_pca": 66.30824372759857,
            "rank_pca": 189,
            "adv": 118564.23135793237,
            "trades": 28.0,
            "volatility": 0.1929561031341648,
            "spread_pct": 0.010245901639344272,
            "spread_ticks": 1.0869565217391304,
            "amihud": 3.172772762151391e-08,
            "turnover_ratio": 0.0003033794687132258,
            "is_target": false
          },
          {
            "ticker": "D5IU",
            "score_pca": 42.11469534050179,
            "rank_pca": 324,
            "adv": 21633.0,
            "trades": 18.0,
            "volatility": 1.4210841297648444,
            "spread_pct": 0.15384615384615383,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.001008415931548748,
            "is_target": false
          },
          {
            "ticker": "BMGU",
            "score_pca": 20.60931899641577,
            "rank_pca": 444,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.3178387900911119,
            "spread_pct": 0.1047503045066991,
            "spread_ticks": 8.75,
            "amihud": 7.609262899160584e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "AU8U",
            "score_pca": 86.55913978494624,
            "rank_pca": 76,
            "adv": 1306991.0,
            "trades": 880.0,
            "volatility": 0.20007233876446834,
            "spread_pct": 0.007493574058804418,
            "spread_ticks": 1.0036416605972323,
            "amihud": 5.643011655570017e-09,
            "turnover_ratio": 0.001594576012861238,
            "is_target": false
          },
          {
            "ticker": "JYEU",
            "score_pca": 95.6989247311828,
            "rank_pca": 25,
            "adv": 8533513.5,
            "trades": 2568.0,
            "volatility": 0.21347883282280705,
            "spread_pct": 0.008751917046782789,
            "spread_ticks": 1.0,
            "amihud": 1.0321695451879508e-09,
            "turnover_ratio": 0.017124222687354848,
            "is_target": false
          },
          {
            "ticker": "AJBU",
            "score_pca": 97.84946236559139,
            "rank_pca": 13,
            "adv": 26369527.0,
            "trades": 3708.0,
            "volatility": 0.14927997719655578,
            "spread_pct": 0.004410233900053204,
            "spread_ticks": 1.001109139307897,
            "amihud": 1.8962429239855375e-10,
            "turnover_ratio": 0.007301570036041782,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "REIT - Retail",
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
              "mean": 3260259.510976875,
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
              "mean": 0.0059049982672522115,
              "median": 0.00028496195126963373,
              "min": 0.0,
              "max": 2.0301891767187397,
              "p5": 0.0,
              "p95": 0.010524739184962113,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.4044396133081972e-05,
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
              "mean": 0.3540418472665462,
              "median": 0.19772579481603975,
              "min": 0.11661519782161023,
              "max": 1.4210841297648444,
              "p5": 0.1386006186161933,
              "p95": 1.0349482608790375,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 10453108.966419742,
              "median": 755868.25,
              "min": 0.0,
              "max": 69800718.0,
              "p5": 7571.550000000001,
              "p95": 49173296.849999964,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03771207023767959,
              "median": 0.008298471783488439,
              "min": 0.004247569272483084,
              "max": 0.15384615384615383,
              "p5": 0.004341560280955303,
              "p95": 0.13666260657734464,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0026146361086177025,
              "median": 0.0013297503426612659,
              "min": 0.0,
              "max": 0.008113139420650676,
              "p5": 0.00010618281404962904,
              "p95": 0.007565896180993237,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.573246474961566e-07,
              "median": 5.35187265891067e-09,
              "min": 0.0,
              "max": 7.609262899160584e-06,
              "p5": 3.611170376786596e-11,
              "p95": 4.957125589121906e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1222.625,
              "median": 486.5,
              "min": 0.0,
              "max": 5922.0,
              "p5": 6.300000000000001,
              "p95": 4535.299999999997,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 6058371.455226322,
              "median": 712777.6156789662,
              "min": 0.0,
              "max": 26369527.0,
              "p5": 5408.25,
              "p95": 21910523.625,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1200.3333333333333,
              "median": 454.0,
              "min": 0.0,
              "max": 3708.0,
              "p5": 4.5,
              "p95": 3423.0,
              "count": 6
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4157850286289921,
              "median": 0.2067755857936377,
              "min": 0.14927997719655578,
              "max": 1.4210841297648444,
              "p5": 0.16019900868095804,
              "p95": 1.1452727948464112,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04824968083297293,
              "median": 0.00949890934306353,
              "min": 0.004410233900053204,
              "max": 0.15384615384615383,
              "p5": 0.005181068939741008,
              "p95": 0.14157219151129014,
              "count": 6
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.306951220274043,
              "median": 1.0023753999525646,
              "min": 1.0,
              "max": 8.75,
              "p5": 1.0,
              "p95": 6.834239130434783,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.2746425720458756e-06,
              "median": 3.3375906003789836e-09,
              "min": 0.0,
              "max": 7.609262899160584e-06,
              "p5": 4.740607309963844e-11,
              "p95": 5.714879106275817e-06,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004555360689419973,
              "median": 0.001301495972204993,
              "min": 0.0,
              "max": 0.017124222687354848,
              "p5": 7.584486717830645e-05,
              "p95": 0.014668559524526581,
              "count": 6
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": -0.03649635036496379,
            "market": 0.0055050709755777305,
            "sector": -0.01600295090028636,
            "peers": -0.028432716795671498,
            "vs_market": -0.04200142134054152,
            "vs_sector": -0.02049339946467743,
            "vs_peers": -0.008063633569292294
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 85.12544802867383,
          "score_pca_percentile": 85.12544802867383,
          "rank_pca": 84,
          "total": 558,
          "adv_notional_sgd": 576380.25,
          "adv_volume_shares": 856200.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.0018732737485400767,
          "votes": 371.5,
          "trades": 371.5,
          "spread_pct": 0.0074349442379182205,
          "spread_ticks": 1.0,
          "amihud": 3.79665699464124e-09,
          "volatility": 0.142074476430845
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.5771776942678987,
          "loadings": {
            "log_adv": 0.5021274299979094,
            "log_trades": 0.4471123516169736,
            "log_turnover": 0.4554749108241854,
            "neg_spread": 0.4343534317552614,
            "neg_amihud": 0.2642704623294395,
            "neg_vol": 0.2863553976225126
          }
        },
        "data_quality": {
          "turnover_ratio": {
            "valid": true,
            "reason": null
          }
        },
        "peer_summary": {
          "n_peers": 6,
          "peer_median_adv": 608188.6943574499,
          "peer_median_score_pca": 76.70250896057348,
          "peer_median_trades": 390.5,
          "peer_median_volatility": 0.19154171464445596,
          "peer_median_spread_pct": 0.00905043177739719,
          "peer_median_spread_ticks": 1.0035791945776396,
          "peer_median_amihud": 3.3092831683045513e-09,
          "peer_median_turnover_ratio": 0.001170159584781028,
          "target_vs_peer": {
            "score_pca_delta": 8.42,
            "adv_delta_pct": -5.2,
            "trades_delta_pct": -4.87,
            "volatility_delta_pct": 25.83,
            "spread_pct_delta_pct": 17.85,
            "spread_ticks_delta_pct": -0.36,
            "amihud_delta_pct": -14.73,
            "turnover_ratio_delta_pct": 60.09
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 85.12544802867383,
            "rank_pca": 84,
            "adv": 576380.25,
            "trades": 371.5,
            "volatility": 0.142074476430845,
            "spread_pct": 0.0074349442379182205,
            "spread_ticks": 1.0,
            "amihud": 3.79665699464124e-09,
            "turnover_ratio": 0.0018732737485400767,
            "is_target": true
          },
          {
            "ticker": "ODBU",
            "score_pca": 66.30824372759857,
            "rank_pca": 189,
            "adv": 93684.38871489976,
            "trades": 21.5,
            "volatility": 0.1713750007809978,
            "spread_pct": 0.009950248756218916,
            "spread_ticks": 1.015401332262484,
            "amihud": 3.251084356199854e-08,
            "turnover_ratio": 0.00023766703488070762,
            "is_target": false
          },
          {
            "ticker": "D5IU",
            "score_pca": 46.59498207885305,
            "rank_pca": 299,
            "adv": 34002.149999999994,
            "trades": 31.5,
            "volatility": 1.332884113512695,
            "spread_pct": 0.13333333333333333,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.001060586256094784,
            "is_target": false
          },
          {
            "ticker": "BMGU",
            "score_pca": 18.996415770609318,
            "rank_pca": 453,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.5577319847876564,
            "spread_pct": 0.111071001116265,
            "spread_ticks": 9.215384615384615,
            "amihud": 6.981022091444426e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "AU8U",
            "score_pca": 87.09677419354838,
            "rank_pca": 73,
            "adv": 1122693.0,
            "trades": 749.5,
            "volatility": 0.17833616682300527,
            "spread_pct": 0.006643993818557175,
            "spread_ticks": 1.0063465439173724,
            "amihud": 5.601395168776245e-09,
            "turnover_ratio": 0.0012797329134672719,
            "is_target": false
          },
          {
            "ticker": "JYEU",
            "score_pca": 96.05734767025089,
            "rank_pca": 23,
            "adv": 7933299.75,
            "trades": 1899.0,
            "volatility": 0.20474726246590666,
            "spread_pct": 0.008150614798575461,
            "spread_ticks": 1.0001706048548236,
            "amihud": 1.0171711678328577e-09,
            "turnover_ratio": 0.01579213423065487,
            "is_target": false
          },
          {
            "ticker": "AJBU",
            "score_pca": 97.67025089605734,
            "rank_pca": 14,
            "adv": 20023362.5,
            "trades": 3403.0,
            "volatility": 0.13536544784900387,
            "spread_pct": 0.004428487683346552,
            "spread_ticks": 1.000811845237907,
            "amihud": 2.5631204793724487e-10,
            "turnover_ratio": 0.005502167874248948,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "REIT - Retail",
          "sector_count": 8,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6901697202721939,
              "median": 0.4438621319261431,
              "min": 0.0,
              "max": 6.912950809089335,
              "p5": 0.15437686515591778,
              "p95": 2.078206731695266,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2610196.6423260476,
              "median": 12106.125,
              "min": 0.0,
              "max": 247418694.5,
              "p5": 0.0,
              "p95": 10735201.1375,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0954879252842102,
              "median": 0.028818692028640278,
              "min": 0.0002712702706268827,
              "max": 1.267605633802817,
              "p5": 0.0035857946828778023,
              "p95": 0.47796430520211114,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0033159721669223847,
              "median": 0.00028089396269728175,
              "min": 0.0,
              "max": 0.8832641223386725,
              "p5": 0.0,
              "p95": 0.007167895240483783,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.588694365626832e-06,
              "median": 1.6944565742921705e-07,
              "min": 0.0,
              "max": 0.0006620397444526588,
              "p5": 0.0,
              "p95": 3.9282807791618624e-05,
              "count": 556
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 380.01433691756273,
              "median": 7.0,
              "min": 0.0,
              "max": 10145.5,
              "p5": 0.0,
              "p95": 2078.4499999999975,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.35284084472942434,
              "median": 0.16946786125663676,
              "min": 0.1173856435747441,
              "max": 1.332884113512695,
              "p5": 0.12602673507437942,
              "p95": 1.0615808684589312,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 8707213.723589363,
              "median": 643008.875,
              "min": 0.0,
              "max": 56595510.0,
              "p5": 11900.752499999999,
              "p95": 40471112.37499998,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03573802407904823,
              "median": 0.00808428434603335,
              "min": 0.004267253241731738,
              "max": 0.13333333333333333,
              "p5": 0.0043381423931001875,
              "p95": 0.12554151705735941,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002311252797238563,
              "median": 0.001170159584781028,
              "min": 0.0,
              "max": 0.0067720199074557536,
              "p5": 8.318346220824767e-05,
              "p95": 0.006624854226228825,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 8.78743485523768e-07,
              "median": 4.6990260817087425e-09,
              "min": 0.0,
              "max": 6.981022091444426e-06,
              "p5": 3.1177409481615966e-11,
              "p95": 4.549043154685573e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1106.5625,
              "median": 397.0,
              "min": 0.0,
              "max": 5454.5,
              "p5": 7.525,
              "p95": 4175.949999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 4867840.29811915,
              "median": 608188.6943574499,
              "min": 0.0,
              "max": 20023362.5,
              "p5": 8500.537499999999,
              "p95": 17000846.8125,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1017.4166666666666,
              "median": 390.5,
              "min": 0.0,
              "max": 3403.0,
              "p5": 5.375,
              "p95": 3027.0,
              "count": 6
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4300733293698775,
              "median": 0.19154171464445596,
              "min": 0.13536544784900387,
              "max": 1.332884113512695,
              "p5": 0.14436783608200235,
              "p95": 1.1390960813314353,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04559627991771608,
              "median": 0.00905043177739719,
              "min": 0.004428487683346552,
              "max": 0.13333333333333333,
              "p5": 0.004982364217149208,
              "p95": 0.12776775027906626,
              "count": 6
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.373019156942867,
              "median": 1.0035791945776396,
              "min": 1.0,
              "max": 9.215384615384615,
              "p5": 1.000042651213706,
              "p95": 7.165388794604082,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.1700679688984952e-06,
              "median": 3.3092831683045513e-09,
              "min": 0.0,
              "max": 6.981022091444426e-06,
              "p5": 6.407801198431122e-11,
              "p95": 5.243894279473819e-06,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00397871471822443,
              "median": 0.001170159584781028,
              "min": 0.0,
              "max": 0.01579213423065487,
              "p5": 5.9416758720176904e-05,
              "p95": 0.013219642641553389,
              "count": 6
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": -0.04347826086956563,
            "market": 0.10075674085034825,
            "sector": -0.02415782635270003,
            "peers": -0.04830369782974964,
            "vs_market": -0.14423500171991388,
            "vs_sector": -0.019320434516865603,
            "vs_peers": 0.004825436960184004
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "1D score 78.3 vs peer median 65.8 (+12.5 pts).",
        "market_comparison": "Return 0.0% vs peers 0.0%."
      },
      "30d": {
        "liquidity": "Monthly tradability looks average for the company’s size, with primary average daily volume of S$576.4K slightly below the peer median of S$608.2K. That matters because access appears reasonable, but not notably deeper than peers.",
        "market_comparison": "Return 3.9% vs peers 2.8%."
      },
      "3m": {
        "liquidity": "Structural tradability remains solid, with the 6M liquidity score at 85.1 compared with a peer median of 76.7. That matters because peer-relative access is better than average even if recent flow is lighter.",
        "market_comparison": "Return -3.6% vs peers -2.8%."
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
          "median": 0.38639803874054673,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "38.6%",
          "display_range": null,
          "display_text": "38.6%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 38.6,
          "plain_english": "Market explains about 38.6% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.5041592242419166,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "50.4%",
          "display_range": null,
          "display_text": "50.4%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 50.4,
          "plain_english": "Sector explains about 50.4% of price moves in the current state."
        },
        "company_share": {
          "median": 0.1094427370175367,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "10.9%",
          "display_range": null,
          "display_text": "10.9%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 10.9,
          "plain_english": "Company-specific explains about 10.9% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 0.43793017032500126,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.44",
          "display_range": null,
          "display_text": "0.44",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Modest",
          "plain_english": "Modest market link: a 1% market move has lined up with about a 0.44% stock move in the same direction in this state.",
          "value_num": 0.44
        },
        "beta_stock_lag": {
          "median": -0.5544619093755219,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.55",
          "display_range": null,
          "display_text": "-0.55",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -0.55
        },
        "beta_sector": {
          "median": 5.607484045327458,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "5.61",
          "display_range": null,
          "display_text": "5.61",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Very high",
          "plain_english": "Very high sector link: a 1% sector move has lined up with about a 5.61% stock move in the same direction in this state. The multiplier is unusually large and comes from only 251 trading days of history.",
          "value_num": 5.61
        },
        "beta_market_lag": {
          "median": 1.2232463473466153,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.22",
          "display_range": null,
          "display_text": "1.22",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 1.22
        },
        "beta_sector_lag": {
          "median": 2.4329842407867828,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "2.43",
          "display_range": null,
          "display_text": "2.43",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 2.43
        },
        "posterior_source": null,
        "intervals_collapsed": false,
        "confidence_label": "High, limited history",
        "confidence_note": "Based on 251 trading days relative to the 252-day target."
      },
      "rolling_windows": {},
      "monthly_history": [
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
            "median": 0.5595856147097945,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "56.0%",
            "display_range": null,
            "display_text": "56.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 56.0,
            "plain_english": "Company-specific explains about 56.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.32623166932132414,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "32.6%",
              "display_range": null,
              "display_text": "32.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 32.6,
              "plain_english": "Market explains about 32.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.11418271596888128,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "11.4%",
              "display_range": null,
              "display_text": "11.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 11.4,
              "plain_english": "Sector explains about 11.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5595856147097945,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.0%",
              "display_range": null,
              "display_text": "56.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 56.0,
              "plain_english": "Company-specific explains about 56.0% of price moves in the current state."
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
            "median": 0.623404724325774,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "62.3%",
            "display_range": null,
            "display_text": "62.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 62.3,
            "plain_english": "Company-specific explains about 62.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.1986365726091789,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "19.9%",
              "display_range": null,
              "display_text": "19.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 19.9,
              "plain_english": "Market explains about 19.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.17795870306504716,
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
              "plain_english": "Sector explains about 17.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.623404724325774,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "62.3%",
              "display_range": null,
              "display_text": "62.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 62.3,
              "plain_english": "Company-specific explains about 62.3% of price moves in the current state."
            }
          },
          "summary": "Jun: Still clearly company-driven."
        },
        {
          "month_key": "2025-07",
          "month_label": "July 2025",
          "month_short_label": "Jul",
          "period_label": "2025-07-01 to 2025-07-31",
          "n_obs": 23,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.6156446349712698,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "61.6%",
            "display_range": null,
            "display_text": "61.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
            "kind": "share_pct",
            "value_pct": 61.6,
            "plain_english": "Company-specific explains about 61.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.15572514972889717,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "15.6%",
              "display_range": null,
              "display_text": "15.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
              "kind": "share_pct",
              "value_pct": 15.6,
              "plain_english": "Market explains about 15.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.22863021529983313,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "22.9%",
              "display_range": null,
              "display_text": "22.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
              "kind": "share_pct",
              "value_pct": 22.9,
              "plain_english": "Sector explains about 22.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6156446349712698,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.6%",
              "display_range": null,
              "display_text": "61.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
              "kind": "share_pct",
              "value_pct": 61.6,
              "plain_english": "Company-specific explains about 61.6% of price moves in the current state."
            }
          },
          "summary": "Jul: Still clearly company-driven."
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
            "median": 0.4539874874240681,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "45.4%",
            "display_range": null,
            "display_text": "45.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 45.4,
            "plain_english": "Company-specific explains about 45.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3380759283078133,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "33.8%",
              "display_range": null,
              "display_text": "33.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 33.8,
              "plain_english": "Market explains about 33.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.20793658426811862,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.8%",
              "display_range": null,
              "display_text": "20.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 20.8,
              "plain_english": "Sector explains about 20.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4539874874240681,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.4%",
              "display_range": null,
              "display_text": "45.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 45.4,
              "plain_english": "Company-specific explains about 45.4% of price moves in the current state."
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
            "median": 0.47594380520699603,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.6%",
            "display_range": null,
            "display_text": "47.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 47.6,
            "plain_english": "Company-specific explains about 47.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3064722257863164,
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
              "median": 0.2175839690066876,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "21.8%",
              "display_range": null,
              "display_text": "21.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 21.8,
              "plain_english": "Sector explains about 21.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.47594380520699603,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.6%",
              "display_range": null,
              "display_text": "47.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 47.6,
              "plain_english": "Company-specific explains about 47.6% of price moves in the current state."
            }
          },
          "summary": "Sep: Mostly company-driven."
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
            "median": 0.48281505654789303,
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
            "plain_english": "Company-specific explains about 48.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.31423525143745396,
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
              "plain_english": "Market explains about 31.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.20294969201465304,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.3%",
              "display_range": null,
              "display_text": "20.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 20.3,
              "plain_english": "Sector explains about 20.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.48281505654789303,
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
              "plain_english": "Company-specific explains about 48.3% of price moves in the current state."
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
            "median": 0.4219146512462775,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "42.2%",
            "display_range": null,
            "display_text": "42.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 42.2,
            "plain_english": "Market explains about 42.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.4219146512462775,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.2%",
              "display_range": null,
              "display_text": "42.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 42.2,
              "plain_english": "Market explains about 42.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.27759022888224905,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.8%",
              "display_range": null,
              "display_text": "27.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 27.8,
              "plain_english": "Sector explains about 27.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.30049511987147337,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "30.0%",
              "display_range": null,
              "display_text": "30.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 30.0,
              "plain_english": "Company-specific explains about 30.0% of price moves in the current state."
            }
          },
          "summary": "Nov: More mixed, though market-driven still has the largest share."
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
            "median": 0.7687417314818246,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "76.9%",
            "display_range": null,
            "display_text": "76.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 76.9,
            "plain_english": "Company-specific explains about 76.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.12378967681730312,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "12.4%",
              "display_range": null,
              "display_text": "12.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 12.4,
              "plain_english": "Market explains about 12.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.10746859170087232,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "10.7%",
              "display_range": null,
              "display_text": "10.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 10.7,
              "plain_english": "Sector explains about 10.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.7687417314818246,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "76.9%",
              "display_range": null,
              "display_text": "76.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 76.9,
              "plain_english": "Company-specific explains about 76.9% of price moves in the current state."
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
            "median": 0.6344784334204319,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "63.4%",
            "display_range": null,
            "display_text": "63.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 63.4,
            "plain_english": "Company-specific explains about 63.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.20419511848433786,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.4%",
              "display_range": null,
              "display_text": "20.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 20.4,
              "plain_english": "Market explains about 20.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.16132644809523028,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "16.1%",
              "display_range": null,
              "display_text": "16.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 16.1,
              "plain_english": "Sector explains about 16.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6344784334204319,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "63.4%",
              "display_range": null,
              "display_text": "63.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 63.4,
              "plain_english": "Company-specific explains about 63.4% of price moves in the current state."
            }
          },
          "summary": "Jan: Still clearly company-driven."
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
            "median": 0.8241639016384482,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "82.4%",
            "display_range": null,
            "display_text": "82.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
            "kind": "share_pct",
            "value_pct": 82.4,
            "plain_english": "Company-specific explains about 82.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.12970195459975553,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "13.0%",
              "display_range": null,
              "display_text": "13.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 13.0,
              "plain_english": "Market explains about 13.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.04613414376179617,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "4.6%",
              "display_range": null,
              "display_text": "4.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 4.6,
              "plain_english": "Sector explains about 4.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.8241639016384482,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "82.4%",
              "display_range": null,
              "display_text": "82.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 82.4,
              "plain_english": "Company-specific explains about 82.4% of price moves in the current state."
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
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.45949639356129446,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "45.9%",
            "display_range": null,
            "display_text": "45.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 45.9,
            "plain_english": "Company-specific explains about 45.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.23035600504921908,
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
              "median": 0.31014760138948644,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "31.0%",
              "display_range": null,
              "display_text": "31.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 31.0,
              "plain_english": "Sector explains about 31.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.45949639356129446,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.9%",
              "display_range": null,
              "display_text": "45.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 45.9,
              "plain_english": "Company-specific explains about 45.9% of price moves in the current state."
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
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.42190687737725624,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "42.2%",
            "display_range": null,
            "display_text": "42.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
            "kind": "share_pct",
            "value_pct": 42.2,
            "plain_english": "Sector explains about 42.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.16762051226692445,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "16.8%",
              "display_range": null,
              "display_text": "16.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 16.8,
              "plain_english": "Market explains about 16.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.42190687737725624,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.2%",
              "display_range": null,
              "display_text": "42.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 42.2,
              "plain_english": "Sector explains about 42.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4104726103558193,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "41.0%",
              "display_range": null,
              "display_text": "41.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 41.0,
              "plain_english": "Company-specific explains about 41.0% of price moves in the current state."
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
          "current_probability": 0.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.0055349937955009275,
            "low": 0.0055349937955009275,
            "high": 0.0055349937955009275
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": 0.0
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 11.272727272727273,
          "current_probability": 1.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.010854136582546095,
            "low": 0.010854136582546095,
            "high": 0.010854136582546095
          },
          "volatility_label": "High Volatility",
          "current_probability_display": null
        }
      ],
      "transitions": {
        "mean": [
          [
            0.912,
            0.088
          ],
          [
            0.08130081300813008,
            0.9186991869918699
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            114.0,
            11.0
          ],
          [
            10.0,
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
        "market_link_display": "0.44",
        "sector_link_display": "5.61",
        "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.44% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 5.61% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "-0.55",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "High Volatility",
        "dominant_driver": "sector",
        "dominant_driver_label": "Sector",
        "driver_share_pct": 50.4,
        "driver_share_display": "50.4%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 251 trading days relative to the 252-day target.",
        "history_days": 251,
        "history_limited": true,
        "volatility_label": "High Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.9186991869918699,
        "effective_days": 124.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 11.3 days.",
        "expected_duration_days": 11.3
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
          "current_probability": 0.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.0055349937955009275,
            "low": 0.0055349937955009275,
            "high": 0.0055349937955009275
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 11.272727272727273,
          "current_probability": 1.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.010854136582546095,
            "low": 0.010854136582546095,
            "high": 0.010854136582546095
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.912,
          0.088
        ],
        [
          0.08130081300813008,
          0.9186991869918699
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.912,
            0.088
          ],
          [
            0.08130081300813008,
            0.9186991869918699
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            114.0,
            11.0
          ],
          [
            10.0,
            113.0
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
        "text": "Liquidity score: 85.1 — Strong",
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
        "bg": "bg-emerald-500/20",
        "textColor": "text-emerald-400"
      },
      "intraday": {
        "text": "Trading Activity",
        "bg": "bg-amber-500/20",
        "textColor": "text-amber-400"
      },
      "short": {
        "text": "Low short interest",
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
    "liq_subtitle": "Liquidity looks reasonable overall, supported by stronger peer-relative standing even as today’s trading is lighter than the monthly average.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent performance is firm, with the stock up 3.9% over one month compared with peers at 2.8% and the market at -0.2%.",
    "perf_insight": "Performance is mixed relative to comparison groups. Recent price performance is stronger than the main comparison groups, so the tape has a firmer return backdrop than peers. Recent flow does not show a clear deterioration from the monthly baseline.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Sector moves are the main influence on the stock now, accounting for 50.4% of current trading.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly sector-driven, accounting for about 50.4% of price changes. Other influences are market 38.6%, and company-specific 10.9%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 38.6%, sector 50.4%, and company-specific 10.9%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has shifted from company-driven to sector-driven over Feb to Apr."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 38.6%, sector 50.4%, and company-specific 10.9%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "The tape is being shaped more by the group than by company-specific news, with sector influence at 50.4%. That matters because current trading conditions are being supported by broader market context rather than a stock-specific catalyst.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: sector moves are leading, accounting for 50.4% of recent price action.",
      "Monthly change: the pattern has shifted from clearly company-driven in February to a more mixed picture in April, with sector moves now the largest influence."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Current conditions look balanced, with a steady screen and no sign of a one-sided book.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on Apr 28, 2025 to Apr 28, 2026 (254 trading days • 99,711 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on the displayed order book.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate displayed depth broadly matches the stronger monthly liquidity read.",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The displayed book looks balanced, with a 2-tick spread and bid depth at 0.84x of ask depth. That matters because current screen liquidity broadly matches the stronger six-month peer-relative standing.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 27.9% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Trading conditions look steady through the day, with the overall liquidity picture still mixed.",
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
    "intraday_insight": "The displayed book is balanced, with a 2-tick spread and bid depth at 0.84x of ask depth. That matters because immediate execution conditions remain orderly even with one-day trades running 34.3% below the monthly average.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Recent price performance is stronger than peers and the market, giving the tape a firmer backdrop.",
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
    "exec_subtitle": "Liquidity is mixed for the stock’s size, with stronger peer-relative standing offset by a quieter day and a balanced displayed book.",
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
        "value": "85.1/100",
        "sub": "Peer median 76.7 (+8.4 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "S$576.4K",
        "sub": "Peer median S$608.2K",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "0.74%",
        "sub": "1.00 ticks; peers 0.91%",
        "interp": {
          "text": "Tighter",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "6M liquidity is strong: score 85.1 vs peer median 76.7 (+8.4 pts). 1D trades down -34.3% vs 1M. Recent flow does not show a clear deterioration from the monthly baseline.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "0.665",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "1.50%",
        "note": "2.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.84x",
        "note": "Bid depth / ask depth on the displayed order book",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-0.75% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-0.79% with 100.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-1.74% with 100.0% fill.",
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
        "value": "85",
        "suffix": "/100",
        "bar_pct": 85,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Rank 84/558",
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
        "value": "0.74",
        "suffix": "%",
        "bar_pct": 7,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "0.74% • 1.00 ticks vs peers 0.91%",
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
        "value": "576.4K",
        "value_prefix": "S$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-red-400",
        "color_bar": "bg-red-500",
        "subtext": "Peer median S$608.2K",
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
        "value": "50.4",
        "suffix": "sector",
        "bar_pct": 50,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 38.6% • Company 10.9%",
        "interpretation": {
          "text": "Sector",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Liquidity is mixed for the stock’s size, but peer-relative standing is solid, with a six-month liquidity score of 85.1 compared with the peer median of 76.7. That matters because access looks better than the peer group even if the overall read is not outright strong.",
      "Recent activity is quieter, with one-day trades down 34.3% compared with the monthly average. That matters because near-term flow is lighter than recent norms, even though it does not point to a clear break in tradability.",
      "The current screen remains balanced, with a 2-tick spread and bid depth at 0.84x of ask depth, while sector moves account for 50.4% of trading and one-month returns are ahead of peers and the market. That matters because execution conditions are being supported by a firmer market backdrop rather than by company-specific demand alone."
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
      "overall": "6M liquidity is strong: score 85.1 vs peer median 76.7 (+8.4 pts). 1D trades down -34.3% vs 1M. Recent flow does not show a clear deterioration from the monthly baseline.",
      "strengths": [
        "6M score 85.1 vs peer median 76.7 (+8.4 pts)."
      ],
      "concerns": [
        "1D trades down -34.3% vs 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: +8.4 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is -4.3%, worse than market and sector, which suggests weaker price performance than comparable names.",
        "vs_market": "Worse than market: -4.3% vs market 10.1%.",
        "vs_sector": "Worse than sector: -4.3% vs sector -2.4%.",
        "vs_peers": "In line with peers: -4.3% vs peers -4.8%."
      },
      "adv": {
        "insight": "ADV is S$576.4K, better than market, but worse than sector, which shows trading size is uneven across comparison groups.",
        "vs_market": "Better than market: S$576.4K vs market S$12.1K.",
        "vs_sector": "Worse than sector: S$576.4K vs sector S$643.0K.",
        "vs_peers": "In line with peers: S$576.4K vs peers S$608.2K."
      },
      "spread": {
        "insight": "Spread is 0.74%, better than market and peers, which keeps trading costs more competitive than comparable names.",
        "vs_market": "Better than market: 0.74% vs market 2.88%.",
        "vs_sector": "In line with sector: 0.74% vs sector 0.81%.",
        "vs_peers": "Better than peers: 0.74% vs peers 0.91%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.19%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.19% vs market 0.03%.",
        "vs_sector": "Better than sector: 0.19% vs sector 0.12%.",
        "vs_peers": "Better than peers: 0.19% vs peers 0.12%."
      },
      "volatility": {
        "insight": "Volatility is 14.21%, better than market, sector, and peers, which suggests day-to-day price swings are more contained than comparable names.",
        "vs_market": "Better than market: 14.21% vs market 44.39%.",
        "vs_sector": "Better than sector: 14.21% vs sector 16.95%.",
        "vs_peers": "Better than peers: 14.21% vs peers 19.15%."
      },
      "trades": {
        "insight": "Trades is 372, better than market, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 372 vs market 7.",
        "vs_sector": "In line with sector: 372 vs sector 397.",
        "vs_peers": "In line with peers: 372 vs peers 390."
      },
      "amihud": {
        "insight": "Price impact is 3.80e-09, better than market and sector, but worse than peers, which shows price impact is mixed across comparison groups.",
        "vs_market": "Better than market: 3.80e-09 vs market 1.69e-07.",
        "vs_sector": "Better than sector: 3.80e-09 vs sector 4.70e-09.",
        "vs_peers": "Worse than peers: 3.80e-09 vs peers 3.31e-09."
      }
    },
    "performance": {
      "overall": "Recent performance is stronger than peers and the market, with the stock up 3.9% over one month compared with peers at 2.8% and the market at -0.2%. Liquidity broadly supports that move because the six-month liquidity score is 85.1, which is 8.4 points above the peer median, although one-day trades are 34.3% below the monthly average so the latest session is less supportive than the broader backdrop.",
      "conclusion": "The recent move looks more sector-linked than company-specific, and the liquidity backdrop is supportive overall even if the latest trading activity has pulled back."
    },
    "drivers": {
      "overall": "Sector moves are driving the stock now, with the sector accounting for 50.4% of recent price action. That matters because the tape is being set more by the wider group than by company-specific news, which makes the current move easier to read in an industry context.",
      "beta": "The current pattern looks balanced rather than one-off because recent trading activity is down 34.3% compared with the monthly average, yet the stock has still returned 3.9% over one month, ahead of peers at 2.8% and the market at -0.2%. That combination points to a firmer price backdrop even as day-to-day participation is lighter.",
      "rolling_change": "The monthly picture has become more mixed. February was still clearly company-driven, March was mostly sector, and April shifted toward sector-led trading, showing that broader industry moves now have a larger role in setting direction."
    },
    "regime": {
      "overall": "High volatility is the main feature of the tape, and its typical run length of about 11.3 days suggests this is a meaningful backdrop for current trading conditions. That matters because price moves can stay larger for longer even when underlying liquidity remains broadly serviceable for the stock's size.",
      "current": "The stock is currently in a high-volatility state, while recent price performance has remained firm with a 1M return of +3.9% compared with +2.8% for peers and -0.2% for the market.",
      "transitions": "This state looks more persistent, with a typical run length of about 11.3 days.",
      "trading_implications": "Trading conditions look workable but less steady, with a 2-tick spread and displayed bid depth at 0.84x ask depth indicating a market that is still functioning but can feel thinner when volatility stays elevated."
    },
    "execution": {
      "overall": "displayed bid depth is 0.84x ask depth; spread is 2 ticks. Immediate displayed depth broadly matches the stronger monthly liquidity read.",
      "concern": "Trade-size percentiles use Ap, 2025 to Ap, 2026 history (254 trading days • 99,711 trades).",
      "peer_context": "The current book broadly supports the stock’s stronger 6M liquidity score of 85.1 compared with the peer median of 76.7, but the 1D trade count being 34.3% below the 1M average keeps the picture mixed. That matters because the peer standing is solid while today’s activity is lighter than the recent average."
    },
    "trader_composition": {
      "overall": "Flow looks mixed on individual trade count and trade value, so the trading base is broad but not clearly dominated by one type of participant.",
      "retail_heavy": "Retail-like trades account for 96.7% of individual trade count but only 27.1% of trade value, while institution-like trades are 0.6% of count and 37.4% of value. That split shows frequent smaller tickets alongside a meaningful share of value from larger participants, which keeps the flow mix balanced rather than one-sided.",
      "institutional_gap": "Institution-like activity is scarce by count at 0.6% of trades, but it carries 37.4% of trade value. That means larger participants are present in the tape even though they are not driving day-to-day trade frequency.",
      "peer_comparison": "Peer trader comparison is available in this report."
    },
    "price_moving": {
      "overall": "Price-moving activity looks balanced rather than dominated by one side, which fits the mixed split between trade count and trade value. Retail-like trades dominate count at 96.7%, but institution-like trades contribute 37.4% of value despite only 0.6% of trades. That combination suggests price formation is shared across frequent smaller trades and fewer larger value trades, so the signal is mixed. Recent returns are firmer, with the stock up 3.9% over one month compared with peers at 2.8% and the market at -0.2%.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity does not look material to the current trading picture. The average short ratio is 4.96%, and the stock still outperformed peers over one month, which points away from short pressure as a key driver.",
      "level": "Low short interest",
      "correlation": "Moderate negative - shorts somewhat predict drops",
      "trend": "Short positioning has fallen quickly, with shorts covering 76% month on month. That reduces the chance that short activity is shaping current liquidity or price action in a meaningful way.",
      "peaks": "5 notable peak days identified."
    },
    "intraday": {
      "overall": "Session split is open 3.7%, continuous 87.1%, and close 8.1%. Current trading concentration score is 0.229.",
      "hhi_interpretation": "A concentration score of 0.229 indicates activity is spread across the session rather than packed into a few short periods. That matters because steadier participation usually supports more consistent access to liquidity.",
      "best_times": "The continuous session is the clearest source of liquidity, with 87.1% of activity compared with 3.7% at the open and 8.1% at the close. That points to the middle of the day as the most reliable part of the session.",
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
        "CRPU",
        "ODBU",
        "D5IU",
        "BMGU",
        "AU8U",
        "JYEU",
        "AJBU"
      ],
      "scores": [
        85.12544802867383,
        66.30824372759857,
        46.59498207885305,
        18.996415770609318,
        87.09677419354838,
        96.05734767025089,
        97.67025089605734
      ],
      "is_target": [
        true,
        false,
        false,
        false,
        false,
        false,
        false
      ],
      "adv": [
        576380.25,
        93684.38871489976,
        34002.149999999994,
        0.0,
        1122693.0,
        7933299.75,
        20023362.5
      ],
      "total": 558
    },
    "market_comparison": {
      "sector_name": "REIT - Retail",
      "sector_count": 8,
      "market_count": 558,
      "company": {
        "volatility": 0.142074476430845,
        "adv": 576380.25,
        "spread_pct": 0.0074349442379182205,
        "turnover_ratio": 0.0018732737485400767,
        "amihud": 3.79665699464124e-09,
        "trades": 371.5
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6901697202721939,
          "median": 0.4438621319261431,
          "min": 0.0,
          "max": 6.912950809089335,
          "p5": 0.15437686515591778,
          "p95": 2.078206731695266,
          "count": 558
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 2610196.6423260476,
          "median": 12106.125,
          "min": 0.0,
          "max": 247418694.5,
          "p5": 0.0,
          "p95": 10735201.1375,
          "count": 558
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.0954879252842102,
          "median": 0.028818692028640278,
          "min": 0.0002712702706268827,
          "max": 1.267605633802817,
          "p5": 0.0035857946828778023,
          "p95": 0.47796430520211114,
          "count": 556
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0033159721669223847,
          "median": 0.00028089396269728175,
          "min": 0.0,
          "max": 0.8832641223386725,
          "p5": 0.0,
          "p95": 0.007167895240483783,
          "count": 551
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 9.588694365626832e-06,
          "median": 1.6944565742921705e-07,
          "min": 0.0,
          "max": 0.0006620397444526588,
          "p5": 0.0,
          "p95": 3.9282807791618624e-05,
          "count": 556
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 380.01433691756273,
          "median": 7.0,
          "min": 0.0,
          "max": 10145.5,
          "p5": 0.0,
          "p95": 2078.4499999999975,
          "count": 558
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.35284084472942434,
          "median": 0.16946786125663676,
          "min": 0.1173856435747441,
          "max": 1.332884113512695,
          "p5": 0.12602673507437942,
          "p95": 1.0615808684589312,
          "count": 8
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 8707213.723589363,
          "median": 643008.875,
          "min": 0.0,
          "max": 56595510.0,
          "p5": 11900.752499999999,
          "p95": 40471112.37499998,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.03573802407904823,
          "median": 0.00808428434603335,
          "min": 0.004267253241731738,
          "max": 0.13333333333333333,
          "p5": 0.0043381423931001875,
          "p95": 0.12554151705735941,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.002311252797238563,
          "median": 0.001170159584781028,
          "min": 0.0,
          "max": 0.0067720199074557536,
          "p5": 8.318346220824767e-05,
          "p95": 0.006624854226228825,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 8.78743485523768e-07,
          "median": 4.6990260817087425e-09,
          "min": 0.0,
          "max": 6.981022091444426e-06,
          "p5": 3.1177409481615966e-11,
          "p95": 4.549043154685573e-06,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1106.5625,
          "median": 397.0,
          "min": 0.0,
          "max": 5454.5,
          "p5": 7.525,
          "p95": 4175.949999999998,
          "count": 8
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 4867840.29811915,
          "median": 608188.6943574499,
          "min": 0.0,
          "max": 20023362.5,
          "p5": 8500.537499999999,
          "p95": 17000846.8125,
          "count": 6
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1017.4166666666666,
          "median": 390.5,
          "min": 0.0,
          "max": 3403.0,
          "p5": 5.375,
          "p95": 3027.0,
          "count": 6
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.4300733293698775,
          "median": 0.19154171464445596,
          "min": 0.13536544784900387,
          "max": 1.332884113512695,
          "p5": 0.14436783608200235,
          "p95": 1.1390960813314353,
          "count": 6
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.04559627991771608,
          "median": 0.00905043177739719,
          "min": 0.004428487683346552,
          "max": 0.13333333333333333,
          "p5": 0.004982364217149208,
          "p95": 0.12776775027906626,
          "count": 6
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 2.373019156942867,
          "median": 1.0035791945776396,
          "min": 1.0,
          "max": 9.215384615384615,
          "p5": 1.000042651213706,
          "p95": 7.165388794604082,
          "count": 6
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.1700679688984952e-06,
          "median": 3.3092831683045513e-09,
          "min": 0.0,
          "max": 6.981022091444426e-06,
          "p5": 6.407801198431122e-11,
          "p95": 5.243894279473819e-06,
          "count": 6
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.00397871471822443,
          "median": 0.001170159584781028,
          "min": 0.0,
          "max": 0.01579213423065487,
          "p5": 5.9416758720176904e-05,
          "p95": 0.013219642641553389,
          "count": 6
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": 0.03937007874015741,
        "market": -0.00214165955488288,
        "sector": 0.036260806081584995,
        "peers": 0.02812666117525553
      },
      {
        "horizon": "3M",
        "stock": -0.03649635036496379,
        "market": 0.0055050709755777305,
        "sector": -0.01600295090028636,
        "peers": -0.028432716795671498
      },
      {
        "horizon": "6M",
        "stock": -0.04347826086956563,
        "market": 0.10075674085034825,
        "sector": -0.02415782635270003,
        "peers": -0.04830369782974964
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
      "share_market": 0.38639803874054673,
      "share_sector": 0.5041592242419166,
      "share_idio": 0.1094427370175367,
      "beta_market": 0.43793017032500126,
      "beta_sector": 5.607484045327458,
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
            "median": 0.38639803874054673,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "38.6%",
            "display_range": null,
            "display_text": "38.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 38.6,
            "plain_english": "Market explains about 38.6% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.5041592242419166,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "50.4%",
            "display_range": null,
            "display_text": "50.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 50.4,
            "plain_english": "Sector explains about 50.4% of price moves in the current state."
          },
          "company_share": {
            "median": 0.1094427370175367,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "10.9%",
            "display_range": null,
            "display_text": "10.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 10.9,
            "plain_english": "Company-specific explains about 10.9% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 0.43793017032500126,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.44",
            "display_range": null,
            "display_text": "0.44",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Modest",
            "plain_english": "Modest market link: a 1% market move has lined up with about a 0.44% stock move in the same direction in this state.",
            "value_num": 0.44
          },
          "beta_stock_lag": {
            "median": -0.5544619093755219,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.55",
            "display_range": null,
            "display_text": "-0.55",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -0.55
          },
          "beta_sector": {
            "median": 5.607484045327458,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "5.61",
            "display_range": null,
            "display_text": "5.61",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Very high",
            "plain_english": "Very high sector link: a 1% sector move has lined up with about a 5.61% stock move in the same direction in this state. The multiplier is unusually large and comes from only 251 trading days of history.",
            "value_num": 5.61
          },
          "beta_market_lag": {
            "median": 1.2232463473466153,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.22",
            "display_range": null,
            "display_text": "1.22",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 1.22
          },
          "beta_sector_lag": {
            "median": 2.4329842407867828,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "2.43",
            "display_range": null,
            "display_text": "2.43",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 2.43
          },
          "posterior_source": null,
          "intervals_collapsed": false,
          "confidence_label": "High, limited history",
          "confidence_note": "Based on 251 trading days relative to the 252-day target."
        },
        "rolling_windows": {},
        "monthly_history": [
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
              "median": 0.5595856147097945,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.0%",
              "display_range": null,
              "display_text": "56.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 56.0,
              "plain_english": "Company-specific explains about 56.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.32623166932132414,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "32.6%",
                "display_range": null,
                "display_text": "32.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 32.6,
                "plain_english": "Market explains about 32.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.11418271596888128,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "11.4%",
                "display_range": null,
                "display_text": "11.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 11.4,
                "plain_english": "Sector explains about 11.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5595856147097945,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "56.0%",
                "display_range": null,
                "display_text": "56.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 56.0,
                "plain_english": "Company-specific explains about 56.0% of price moves in the current state."
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
              "median": 0.623404724325774,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "62.3%",
              "display_range": null,
              "display_text": "62.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 62.3,
              "plain_english": "Company-specific explains about 62.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.1986365726091789,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "19.9%",
                "display_range": null,
                "display_text": "19.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 19.9,
                "plain_english": "Market explains about 19.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.17795870306504716,
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
                "plain_english": "Sector explains about 17.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.623404724325774,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "62.3%",
                "display_range": null,
                "display_text": "62.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 62.3,
                "plain_english": "Company-specific explains about 62.3% of price moves in the current state."
              }
            },
            "summary": "Jun: Still clearly company-driven."
          },
          {
            "month_key": "2025-07",
            "month_label": "July 2025",
            "month_short_label": "Jul",
            "period_label": "2025-07-01 to 2025-07-31",
            "n_obs": 23,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.6156446349712698,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.6%",
              "display_range": null,
              "display_text": "61.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
              "kind": "share_pct",
              "value_pct": 61.6,
              "plain_english": "Company-specific explains about 61.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.15572514972889717,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "15.6%",
                "display_range": null,
                "display_text": "15.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
                "kind": "share_pct",
                "value_pct": 15.6,
                "plain_english": "Market explains about 15.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.22863021529983313,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "22.9%",
                "display_range": null,
                "display_text": "22.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
                "kind": "share_pct",
                "value_pct": 22.9,
                "plain_english": "Sector explains about 22.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6156446349712698,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "61.6%",
                "display_range": null,
                "display_text": "61.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
                "kind": "share_pct",
                "value_pct": 61.6,
                "plain_english": "Company-specific explains about 61.6% of price moves in the current state."
              }
            },
            "summary": "Jul: Still clearly company-driven."
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
              "median": 0.4539874874240681,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.4%",
              "display_range": null,
              "display_text": "45.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 45.4,
              "plain_english": "Company-specific explains about 45.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3380759283078133,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "33.8%",
                "display_range": null,
                "display_text": "33.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 33.8,
                "plain_english": "Market explains about 33.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.20793658426811862,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.8%",
                "display_range": null,
                "display_text": "20.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 20.8,
                "plain_english": "Sector explains about 20.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4539874874240681,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "45.4%",
                "display_range": null,
                "display_text": "45.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 45.4,
                "plain_english": "Company-specific explains about 45.4% of price moves in the current state."
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
              "median": 0.47594380520699603,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.6%",
              "display_range": null,
              "display_text": "47.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 47.6,
              "plain_english": "Company-specific explains about 47.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3064722257863164,
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
                "median": 0.2175839690066876,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "21.8%",
                "display_range": null,
                "display_text": "21.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 21.8,
                "plain_english": "Sector explains about 21.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.47594380520699603,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "47.6%",
                "display_range": null,
                "display_text": "47.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 47.6,
                "plain_english": "Company-specific explains about 47.6% of price moves in the current state."
              }
            },
            "summary": "Sep: Mostly company-driven."
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
              "median": 0.48281505654789303,
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
              "plain_english": "Company-specific explains about 48.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.31423525143745396,
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
                "plain_english": "Market explains about 31.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.20294969201465304,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.3%",
                "display_range": null,
                "display_text": "20.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 20.3,
                "plain_english": "Sector explains about 20.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.48281505654789303,
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
                "plain_english": "Company-specific explains about 48.3% of price moves in the current state."
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
              "median": 0.4219146512462775,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.2%",
              "display_range": null,
              "display_text": "42.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 42.2,
              "plain_english": "Market explains about 42.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.4219146512462775,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "42.2%",
                "display_range": null,
                "display_text": "42.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 42.2,
                "plain_english": "Market explains about 42.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.27759022888224905,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.8%",
                "display_range": null,
                "display_text": "27.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 27.8,
                "plain_english": "Sector explains about 27.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.30049511987147337,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "30.0%",
                "display_range": null,
                "display_text": "30.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 30.0,
                "plain_english": "Company-specific explains about 30.0% of price moves in the current state."
              }
            },
            "summary": "Nov: More mixed, though market-driven still has the largest share."
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
              "median": 0.7687417314818246,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "76.9%",
              "display_range": null,
              "display_text": "76.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 76.9,
              "plain_english": "Company-specific explains about 76.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.12378967681730312,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "12.4%",
                "display_range": null,
                "display_text": "12.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 12.4,
                "plain_english": "Market explains about 12.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.10746859170087232,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "10.7%",
                "display_range": null,
                "display_text": "10.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 10.7,
                "plain_english": "Sector explains about 10.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.7687417314818246,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "76.9%",
                "display_range": null,
                "display_text": "76.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 76.9,
                "plain_english": "Company-specific explains about 76.9% of price moves in the current state."
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
              "median": 0.6344784334204319,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "63.4%",
              "display_range": null,
              "display_text": "63.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 63.4,
              "plain_english": "Company-specific explains about 63.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.20419511848433786,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.4%",
                "display_range": null,
                "display_text": "20.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 20.4,
                "plain_english": "Market explains about 20.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.16132644809523028,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "16.1%",
                "display_range": null,
                "display_text": "16.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 16.1,
                "plain_english": "Sector explains about 16.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6344784334204319,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "63.4%",
                "display_range": null,
                "display_text": "63.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 63.4,
                "plain_english": "Company-specific explains about 63.4% of price moves in the current state."
              }
            },
            "summary": "Jan: Still clearly company-driven."
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
              "median": 0.8241639016384482,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "82.4%",
              "display_range": null,
              "display_text": "82.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 82.4,
              "plain_english": "Company-specific explains about 82.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.12970195459975553,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "13.0%",
                "display_range": null,
                "display_text": "13.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 13.0,
                "plain_english": "Market explains about 13.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.04613414376179617,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "4.6%",
                "display_range": null,
                "display_text": "4.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 4.6,
                "plain_english": "Sector explains about 4.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.8241639016384482,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "82.4%",
                "display_range": null,
                "display_text": "82.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 82.4,
                "plain_english": "Company-specific explains about 82.4% of price moves in the current state."
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
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.45949639356129446,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.9%",
              "display_range": null,
              "display_text": "45.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 45.9,
              "plain_english": "Company-specific explains about 45.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.23035600504921908,
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
                "median": 0.31014760138948644,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "31.0%",
                "display_range": null,
                "display_text": "31.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 31.0,
                "plain_english": "Sector explains about 31.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.45949639356129446,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "45.9%",
                "display_range": null,
                "display_text": "45.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 45.9,
                "plain_english": "Company-specific explains about 45.9% of price moves in the current state."
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
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.42190687737725624,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.2%",
              "display_range": null,
              "display_text": "42.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 42.2,
              "plain_english": "Sector explains about 42.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.16762051226692445,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "16.8%",
                "display_range": null,
                "display_text": "16.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 16.8,
                "plain_english": "Market explains about 16.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.42190687737725624,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "42.2%",
                "display_range": null,
                "display_text": "42.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 42.2,
                "plain_english": "Sector explains about 42.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4104726103558193,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "41.0%",
                "display_range": null,
                "display_text": "41.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 41.0,
                "plain_english": "Company-specific explains about 41.0% of price moves in the current state."
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
            "current_probability": 0.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.0055349937955009275,
              "low": 0.0055349937955009275,
              "high": 0.0055349937955009275
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": 0.0
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 11.272727272727273,
            "current_probability": 1.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.010854136582546095,
              "low": 0.010854136582546095,
              "high": 0.010854136582546095
            },
            "volatility_label": "High Volatility",
            "current_probability_display": null
          }
        ],
        "transitions": {
          "mean": [
            [
              0.912,
              0.088
            ],
            [
              0.08130081300813008,
              0.9186991869918699
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              114.0,
              11.0
            ],
            [
              10.0,
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
          "market_link_display": "0.44",
          "sector_link_display": "5.61",
          "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.44% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 5.61% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "-0.55",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "High Volatility",
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "driver_share_pct": 50.4,
          "driver_share_display": "50.4%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 251 trading days relative to the 252-day target.",
          "history_days": 251,
          "history_limited": true,
          "volatility_label": "High Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.9186991869918699,
          "effective_days": 124.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 11.3 days.",
          "expected_duration_days": 11.3
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
          "share_market": 0.32623166932132414,
          "share_sector": 0.11418271596888128,
          "share_company": 0.5595856147097945,
          "share_market_display": "32.6%",
          "share_sector_display": "11.4%",
          "share_company_display": "56.0%",
          "dominant_share_display": "56.0%"
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
          "share_market": 0.1986365726091789,
          "share_sector": 0.17795870306504716,
          "share_company": 0.623404724325774,
          "share_market_display": "19.9%",
          "share_sector_display": "17.8%",
          "share_company_display": "62.3%",
          "dominant_share_display": "62.3%"
        },
        {
          "month_key": "2025-07",
          "month_label": "July 2025",
          "month_short_label": "Jul",
          "period_label": "2025-07-01 to 2025-07-31",
          "n_obs": 23,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Jul: Still clearly company-driven.",
          "share_market": 0.15572514972889717,
          "share_sector": 0.22863021529983313,
          "share_company": 0.6156446349712698,
          "share_market_display": "15.6%",
          "share_sector_display": "22.9%",
          "share_company_display": "61.6%",
          "dominant_share_display": "61.6%"
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
          "share_market": 0.3380759283078133,
          "share_sector": 0.20793658426811862,
          "share_company": 0.4539874874240681,
          "share_market_display": "33.8%",
          "share_sector_display": "20.8%",
          "share_company_display": "45.4%",
          "dominant_share_display": "45.4%"
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
          "share_market": 0.3064722257863164,
          "share_sector": 0.2175839690066876,
          "share_company": 0.47594380520699603,
          "share_market_display": "30.6%",
          "share_sector_display": "21.8%",
          "share_company_display": "47.6%",
          "dominant_share_display": "47.6%"
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
          "summary": "Oct: Mostly company-driven.",
          "share_market": 0.31423525143745396,
          "share_sector": 0.20294969201465304,
          "share_company": 0.48281505654789303,
          "share_market_display": "31.4%",
          "share_sector_display": "20.3%",
          "share_company_display": "48.3%",
          "dominant_share_display": "48.3%"
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
          "summary": "Nov: More mixed, though market-driven still has the largest share.",
          "share_market": 0.4219146512462775,
          "share_sector": 0.27759022888224905,
          "share_company": 0.30049511987147337,
          "share_market_display": "42.2%",
          "share_sector_display": "27.8%",
          "share_company_display": "30.0%",
          "dominant_share_display": "42.2%"
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
          "share_market": 0.12378967681730312,
          "share_sector": 0.10746859170087232,
          "share_company": 0.7687417314818246,
          "share_market_display": "12.4%",
          "share_sector_display": "10.7%",
          "share_company_display": "76.9%",
          "dominant_share_display": "76.9%"
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
          "summary": "Jan: Still clearly company-driven.",
          "share_market": 0.20419511848433786,
          "share_sector": 0.16132644809523028,
          "share_company": 0.6344784334204319,
          "share_market_display": "20.4%",
          "share_sector_display": "16.1%",
          "share_company_display": "63.4%",
          "dominant_share_display": "63.4%"
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
          "summary": "Feb: Still clearly company-driven.",
          "share_market": 0.12970195459975553,
          "share_sector": 0.04613414376179617,
          "share_company": 0.8241639016384482,
          "share_market_display": "13.0%",
          "share_sector_display": "4.6%",
          "share_company_display": "82.4%",
          "dominant_share_display": "82.4%"
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
          "share_market": 0.23035600504921908,
          "share_sector": 0.31014760138948644,
          "share_company": 0.45949639356129446,
          "share_market_display": "23.0%",
          "share_sector_display": "31.0%",
          "share_company_display": "45.9%",
          "dominant_share_display": "45.9%"
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-28",
          "n_obs": 19,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "Apr: More mixed, though sector-driven still has the largest share.",
          "share_market": 0.16762051226692445,
          "share_sector": 0.42190687737725624,
          "share_company": 0.4104726103558193,
          "share_market_display": "16.8%",
          "share_sector_display": "42.2%",
          "share_company_display": "41.0%",
          "dominant_share_display": "42.2%"
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
            "expected_duration_days": 11.363636363636363,
            "current_probability": 0.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.0055349937955009275,
              "low": 0.0055349937955009275,
              "high": 0.0055349937955009275
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 11.272727272727273,
            "current_probability": 1.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.010854136582546095,
              "low": 0.010854136582546095,
              "high": 0.010854136582546095
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.912,
            0.088
          ],
          [
            0.08130081300813008,
            0.9186991869918699
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 0.66,
          "quantity": 1430900.0,
          "value": 944394.0
        },
        {
          "level": 2,
          "price": 0.655,
          "quantity": 687400.0,
          "value": 450247.0
        },
        {
          "level": 3,
          "price": 0.65,
          "quantity": 997800.0,
          "value": 648570.0
        },
        {
          "level": 4,
          "price": 0.645,
          "quantity": 515400.0,
          "value": 332433.0
        },
        {
          "level": 5,
          "price": 0.64,
          "quantity": 224300.0,
          "value": 143552.0
        },
        {
          "level": 6,
          "price": 0.635,
          "quantity": 124300.0,
          "value": 78930.5
        },
        {
          "level": 7,
          "price": 0.63,
          "quantity": 687500.0,
          "value": 433125.0
        },
        {
          "level": 8,
          "price": 0.625,
          "quantity": 171000.0,
          "value": 106875.0
        },
        {
          "level": 9,
          "price": 0.62,
          "quantity": 161700.0,
          "value": 100254.0
        },
        {
          "level": 10,
          "price": 0.615,
          "quantity": 11600.0,
          "value": 7134.0
        },
        {
          "level": 11,
          "price": 0.61,
          "quantity": 63800.0,
          "value": 38918.0
        },
        {
          "level": 12,
          "price": 0.605,
          "quantity": 5000.0,
          "value": 3025.0
        },
        {
          "level": 13,
          "price": 0.6,
          "quantity": 51100.0,
          "value": 30660.0
        },
        {
          "level": 14,
          "price": 0.58,
          "quantity": 400.0,
          "value": 231.99999999999997
        },
        {
          "level": 15,
          "price": 0.57,
          "quantity": 34000.0,
          "value": 19380.0
        },
        {
          "level": 16,
          "price": 0.565,
          "quantity": 500.0,
          "value": 282.5
        },
        {
          "level": 17,
          "price": 0.55,
          "quantity": 3000.0,
          "value": 1650.0000000000002
        },
        {
          "level": 18,
          "price": 0.535,
          "quantity": 1000.0,
          "value": 535.0
        },
        {
          "level": 19,
          "price": 0.52,
          "quantity": 1000.0,
          "value": 520.0
        },
        {
          "level": 20,
          "price": 0.51,
          "quantity": 8000.0,
          "value": 4080.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.67,
          "quantity": 1991000.0,
          "value": 1333970.0
        },
        {
          "level": 2,
          "price": 0.675,
          "quantity": 261600.0,
          "value": 176580.0
        },
        {
          "level": 3,
          "price": 0.68,
          "quantity": 373800.0,
          "value": 254184.00000000003
        },
        {
          "level": 4,
          "price": 0.685,
          "quantity": 589500.0,
          "value": 403807.50000000006
        },
        {
          "level": 5,
          "price": 0.69,
          "quantity": 1237200.0,
          "value": 853667.9999999999
        },
        {
          "level": 6,
          "price": 0.695,
          "quantity": 72700.0,
          "value": 50526.5
        },
        {
          "level": 7,
          "price": 0.7,
          "quantity": 151200.0,
          "value": 105840.0
        },
        {
          "level": 8,
          "price": 0.705,
          "quantity": 101000.0,
          "value": 71205.0
        },
        {
          "level": 9,
          "price": 0.71,
          "quantity": 66300.0,
          "value": 47073.0
        },
        {
          "level": 10,
          "price": 0.715,
          "quantity": 22100.0,
          "value": 15801.5
        },
        {
          "level": 11,
          "price": 0.72,
          "quantity": 15200.0,
          "value": 10944.0
        },
        {
          "level": 12,
          "price": 0.73,
          "quantity": 200.0,
          "value": 146.0
        },
        {
          "level": 13,
          "price": 0.75,
          "quantity": 25000.0,
          "value": 18750.0
        },
        {
          "level": 14,
          "price": 0.765,
          "quantity": 500.0,
          "value": 382.5
        },
        {
          "level": 15,
          "price": 0.775,
          "quantity": 12400.0,
          "value": 9610.0
        },
        {
          "level": 16,
          "price": 0.78,
          "quantity": 600000.0,
          "value": 468000.0
        },
        {
          "level": 17,
          "price": 0.8,
          "quantity": 5000.0,
          "value": 4000.0
        },
        {
          "level": 18,
          "price": 0.815,
          "quantity": 20000.0,
          "value": 16299.999999999998
        },
        {
          "level": 19,
          "price": 0.82,
          "quantity": 3400.0,
          "value": 2788.0
        },
        {
          "level": 20,
          "price": 0.85,
          "quantity": 150000.0,
          "value": 127500.0
        },
        {
          "level": 21,
          "price": 0.88,
          "quantity": 12000.0,
          "value": 10560.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-04-28 08:59:52.982500000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 0.665,
        "spread_pct": 0.015037593984962419,
        "spread_ticks": 2.0,
        "tick_size": 0.005,
        "displayed_levels_per_side": 100,
        "bid_depth_notional_displayed": 3344797.0,
        "ask_depth_notional_displayed": 3981636.0,
        "bid_depth_notional_top10": 3344797.0,
        "ask_depth_notional_top10": 3981636.0,
        "bid_ask_depth_ratio": 0.8401
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 366,
        "history_limited": false,
        "trade_days_used": 254,
        "n_trades_used": 99711,
        "first_trade_date": "2025-04-28",
        "last_trade_date": "2026-04-28",
        "window_label": "Apr 28, 2025 to Apr 28, 2026",
        "window_short_label": "Apr 28, 2025 to Apr 28, 2026",
        "trade_days_label": "254 trading days",
        "trade_count_label": "99,711 trades",
        "window_detail_label": "254 trading days • 99,711 trades",
        "history_note": "Trade-size percentiles use Apr 28, 2025 to Apr 28, 2026 history (254 trading days • 99,711 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 3400.0,
            "impact_pct": -0.0075190000000000005,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.1,
            "pct_of_adv": 0.44
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 7888.0,
            "impact_pct": -0.0075190000000000005,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.24,
            "pct_of_adv": 1.01
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 340000.0,
            "impact_pct": -0.0075190000000000005,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 10.17,
            "pct_of_adv": 43.64
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
            "order_id": "8137223323647089664",
            "timestamp": "2026-04-27 22:59:01.194600000",
            "local_timestamp": "2026-04-28 06:59:01",
            "posted_price": 0.69,
            "size_shares": 1000000.0,
            "notional": 690000.0,
            "impact_pct": -0.0075190000000000005,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 20.63,
            "price_vs_mid_pct": 3.759,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "8142369038066870272",
            "timestamp": "2026-04-28 05:50:18.411700000",
            "local_timestamp": "2026-04-28 13:50:18",
            "posted_price": 0.67,
            "size_shares": 700000.0,
            "notional": 469000.0,
            "impact_pct": -0.0075190000000000005,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 14.02,
            "price_vs_mid_pct": 0.752,
            "executed_event_count": 0,
            "event_count": 2
          },
          {
            "rank": 3,
            "order_id": "8137619147835821056",
            "timestamp": "2026-04-27 22:59:01.194600000",
            "local_timestamp": "2026-04-28 06:59:01",
            "posted_price": 0.78,
            "size_shares": 600000.0,
            "notional": 468000.0,
            "impact_pct": -0.0075190000000000005,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 13.99,
            "price_vs_mid_pct": 17.293,
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
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3422122.0,
            "ask_depth_notional": 3609437.0,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "09:30",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3471388.0,
            "ask_depth_notional": 3655987.5,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3465779.5,
            "ask_depth_notional": 3745835.5,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3467363.0,
            "ask_depth_notional": 3742868.0,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3444263.0,
            "ask_depth_notional": 3752182.0,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3369691.5,
            "ask_depth_notional": 3728042.5,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3448034.0,
            "ask_depth_notional": 3693715.0,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3463537.5,
            "ask_depth_notional": 3946214.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3465939.5,
            "ask_depth_notional": 3943400.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3429263.5,
            "ask_depth_notional": 3926189.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3396820.0,
            "ask_depth_notional": 3952303.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3377342.5,
            "ask_depth_notional": 3967578.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "16:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3368500.0,
            "ask_depth_notional": 3969722.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.015037593984962419,
            "spread_ticks": 2.0000000000000018,
            "bid_depth_notional": 3344797.0,
            "ask_depth_notional": 3981636.0,
            "mid_price": 0.665
          }
        ],
        "summary": {
          "median_spread_pct": 0.00754716981132076,
          "median_spread_ticks": 1.0000000000000009,
          "median_bid_depth_notional": 3436763.25,
          "median_ask_depth_notional": 3839185.5,
          "tightest_bucket": "13:30",
          "widest_bucket": "16:30",
          "deepest_bid_bucket": "09:30",
          "thinnest_bid_bucket": "16:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 6.4,
      "peers": [
        {
          "ticker": "AJBU",
          "pct": 4.4
        },
        {
          "ticker": "JYEU",
          "pct": 14.3
        },
        {
          "ticker": "AU8U",
          "pct": 108.0
        },
        {
          "ticker": "ODBU",
          "pct": 834.3
        },
        {
          "ticker": "D5IU",
          "pct": 13478.4
        },
        {
          "ticker": "BMGU",
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
          "n_trades": 155,
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
            "retail_pct": 0.9096774193548387,
            "mixed_pct": 0.08387096774193549,
            "instit_pct": 0.0064516129032258064,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.224863451034695,
            "mixed_qty_pct": 0.40156935148857603,
            "instit_qty_pct": 0.37356719747672895,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.2249450420433429,
            "mixed_notional_pct": 0.40152708222843886,
            "instit_notional_pct": 0.3735278757282182,
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
              "retail": 141,
              "mixed": 13,
              "institutional": 1,
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
            "avg": 5577.577419354839,
            "median": 133.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "CRPU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.9096774193548387,
              "mixed_pct": 0.08387096774193549,
              "instit_pct": 0.0064516129032258064,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.224863451034695,
              "mixed_qty_pct": 0.40156935148857603,
              "instit_qty_pct": 0.37356719747672895,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.2249450420433429,
              "mixed_notional_pct": 0.40152708222843886,
              "instit_notional_pct": 0.3735278757282182,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5577.577419354839,
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
              "ticker": "D5IU",
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
              "avg_trade_size": 1274.3375,
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
              "ticker": "AU8U",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9896193771626297,
              "mixed_pct": 0.010380622837370242,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.6412740544127405,
              "mixed_qty_pct": 0.35872594558725945,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.6412384367483948,
              "mixed_notional_pct": 0.3587615632516053,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 890.8987889273357,
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
              "ticker": "JYEU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9864539434075857,
              "mixed_pct": 0.009331727874774232,
              "instit_pct": 0.004214328717639976,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.32128671751113796,
              "mixed_qty_pct": 0.2530997508117496,
              "instit_qty_pct": 0.4256135316771124,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3209843785356766,
              "mixed_notional_pct": 0.2532986233662906,
              "instit_notional_pct": 0.42571699809803276,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1140.7277242624925,
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
              "ticker": "ODBU",
              "currency": "USD",
              "is_target": false,
              "retail_pct": 0.9375,
              "mixed_pct": 0.0625,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.358974358974359,
              "mixed_qty_pct": 0.6410256410256411,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3567961165048544,
              "mixed_notional_pct": 0.6432038834951457,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1030.0,
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
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AJBU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9178997613365155,
              "mixed_pct": 0.06205250596658711,
              "instit_pct": 0.020047732696897375,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.26041226305020543,
              "mixed_qty_pct": 0.29101915890221014,
              "instit_qty_pct": 0.44856857804758443,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.2603239981570038,
              "mixed_notional_pct": 0.290991998420289,
              "instit_notional_pct": 0.4486840034227072,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 6671.713603818615,
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
          "n_trades": 7404,
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
            "retail_pct": 0.9716369529983793,
            "mixed_pct": 0.024176121015667205,
            "instit_pct": 0.004186925985953539,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.27147870195009755,
            "mixed_qty_pct": 0.3737915204526456,
            "instit_qty_pct": 0.35472977759725693,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.27222390222442716,
            "mixed_notional_pct": 0.3743565115551043,
            "instit_notional_pct": 0.35341958622046854,
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
              "retail": 7194,
              "mixed": 179,
              "institutional": 31,
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
            "avg": 1864.0246488384657,
            "median": 127.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "CRPU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.9716369529983793,
              "mixed_pct": 0.024176121015667205,
              "instit_pct": 0.004186925985953539,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.27147870195009755,
              "mixed_qty_pct": 0.3737915204526456,
              "instit_qty_pct": 0.35472977759725693,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.27222390222442716,
              "mixed_notional_pct": 0.3743565115551043,
              "instit_notional_pct": 0.35341958622046854,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1864.0246488384657,
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
              "ticker": "BMGU",
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
              "avg_trade_size": 573.5666666666667,
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
              "ticker": "AU8U",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9736842105263158,
              "mixed_pct": 0.024223402543054884,
              "instit_pct": 0.0020923869306293257,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.38208363990397837,
              "mixed_qty_pct": 0.4615727631490937,
              "instit_qty_pct": 0.15634359694692798,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.38223668699362645,
              "mixed_notional_pct": 0.4624792344685431,
              "instit_notional_pct": 0.1552840785378305,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1445.7239256397875,
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
              "ticker": "JYEU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9684461152882206,
              "mixed_pct": 0.01912280701754386,
              "instit_pct": 0.01243107769423559,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.2118472887353585,
              "mixed_qty_pct": 0.18651164162088318,
              "instit_qty_pct": 0.6016410696437583,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.21113578548411183,
              "mixed_notional_pct": 0.18642553786215665,
              "instit_notional_pct": 0.6024386766537315,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3289.636979949875,
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
              "ticker": "D5IU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9636363636363636,
              "mixed_pct": 0.03636363636363636,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.38576806270344977,
              "mixed_qty_pct": 0.6142319372965502,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3908755528235375,
              "mixed_notional_pct": 0.6091244471764625,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1884.1290909090906,
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
              "ticker": "ODBU",
              "currency": "USD",
              "is_target": false,
              "retail_pct": 0.9440820130475303,
              "mixed_pct": 0.05032618825722274,
              "instit_pct": 0.005591798695246971,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.3449153285952444,
              "mixed_qty_pct": 0.45038167938931295,
              "instit_qty_pct": 0.20470299201544265,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.34586613807692396,
              "mixed_notional_pct": 0.45157156483722793,
              "instit_notional_pct": 0.20256229708584808,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2183.2110904007454,
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
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AJBU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9195319961795606,
              "mixed_pct": 0.05527698185291308,
              "instit_pct": 0.025191021967526265,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.2080735156775723,
              "mixed_qty_pct": 0.20398092659439623,
              "instit_qty_pct": 0.5879455577280315,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.20703040652639607,
              "mixed_notional_pct": 0.2035600879334123,
              "instit_notional_pct": 0.5894095055401917,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 8153.34682425979,
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
          "n_trades": 19163,
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
            "retail_pct": 0.9586703543286542,
            "mixed_pct": 0.03350206126389396,
            "instit_pct": 0.00782758440745186,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.24184523342200126,
            "mixed_qty_pct": 0.3633500245511269,
            "instit_qty_pct": 0.3948047420268718,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.24079597833993244,
            "mixed_notional_pct": 0.3627044604025892,
            "instit_notional_pct": 0.3964995612574784,
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
              "retail": 18371,
              "mixed": 642,
              "institutional": 150,
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
            "avg": 2614.294212805928,
            "median": 130.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "CRPU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.9586703543286542,
              "mixed_pct": 0.03350206126389396,
              "instit_pct": 0.00782758440745186,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.24184523342200126,
              "mixed_qty_pct": 0.3633500245511269,
              "instit_qty_pct": 0.3948047420268718,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.24079597833993244,
              "mixed_notional_pct": 0.3627044604025892,
              "instit_notional_pct": 0.3964995612574784,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2614.294212805928,
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
              "ticker": "BMGU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9981412639405205,
              "mixed_pct": 0.0018587360594795538,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.8560115190784737,
              "mixed_qty_pct": 0.14398848092152627,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.8682875816993464,
              "mixed_notional_pct": 0.13171241830065358,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 213.28996282527882,
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
              "ticker": "AU8U",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9632963046928135,
              "mixed_pct": 0.033325776467921106,
              "instit_pct": 0.003377918839265473,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.3554909515948129,
              "mixed_qty_pct": 0.45174288918854205,
              "instit_qty_pct": 0.19276615921664503,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.35501886581847286,
              "mixed_notional_pct": 0.4509692216672894,
              "instit_notional_pct": 0.19401191251423777,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1996.1005554296078,
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
              "ticker": "JYEU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9550859934958823,
              "mixed_pct": 0.028629443266943874,
              "instit_pct": 0.016284563237173783,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.19482354821202008,
              "mixed_qty_pct": 0.1949299813370989,
              "instit_qty_pct": 0.610246470450881,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.19357287218037358,
              "mixed_notional_pct": 0.19458237027386985,
              "instit_notional_pct": 0.6118447575457566,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4618.557477308395,
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
              "ticker": "D5IU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9489153254023793,
              "mixed_pct": 0.04618614415675298,
              "instit_pct": 0.00489853044086774,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.3248565641631271,
              "mixed_qty_pct": 0.5165348614072304,
              "instit_qty_pct": 0.15860857442964252,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3205821449030541,
              "mixed_notional_pct": 0.5097833439757403,
              "instit_notional_pct": 0.16963451112120553,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2761.2660601819452,
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
              "ticker": "AJBU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9181808723538376,
              "mixed_pct": 0.05619442217421373,
              "instit_pct": 0.02562470547194869,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.20011314085403697,
              "mixed_qty_pct": 0.1996078693825799,
              "instit_qty_pct": 0.6002789897633831,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.199728615741985,
              "mixed_notional_pct": 0.1994788460443525,
              "instit_notional_pct": 0.6007925382136625,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 8380.481000263162,
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
              "ticker": "ODBU",
              "currency": "USD",
              "is_target": false,
              "retail_pct": 0.8973988439306358,
              "mixed_pct": 0.09007707129094412,
              "instit_pct": 0.012524084778420038,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.2651157658330142,
              "mixed_qty_pct": 0.4482964540019862,
              "instit_qty_pct": 0.2865877801649996,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.2650399423745422,
              "mixed_notional_pct": 0.4476081552550035,
              "instit_notional_pct": 0.2873519023704542,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3914.3880057803467,
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
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            }
          ]
        },
        "6m": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 40105,
          "n_runs": 0,
          "n_trade_days": 126,
          "first_trade_date": "2025-10-28",
          "last_trade_date": "2026-04-28",
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
            "retail_pct": 0.9665129036279766,
            "mixed_pct": 0.02742800149607281,
            "instit_pct": 0.00605909487595063,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2716174432659865,
            "mixed_qty_pct": 0.35593920065928886,
            "instit_qty_pct": 0.3724433560747246,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.2711513096250867,
            "mixed_notional_pct": 0.3552414642432113,
            "instit_notional_pct": 0.373607226131702,
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
              "retail": 38762,
              "mixed": 1100,
              "institutional": 243,
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
            "avg": 2143.150455055479,
            "median": 136.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "CRPU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.9665129036279766,
              "mixed_pct": 0.02742800149607281,
              "instit_pct": 0.00605909487595063,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.2716174432659865,
              "mixed_qty_pct": 0.35593920065928886,
              "instit_qty_pct": 0.3724433560747246,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.2711513096250867,
              "mixed_notional_pct": 0.3552414642432113,
              "instit_notional_pct": 0.373607226131702,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2143.150455055479,
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
              "ticker": "BMGU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9968429360694554,
              "mixed_pct": 0.0031570639305445935,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.7196358014086927,
              "mixed_qty_pct": 0.28036419859130735,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.7229924507867745,
              "mixed_notional_pct": 0.27700754921322546,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 198.22573007103395,
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
              "ticker": "AU8U",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9635145099278454,
              "mixed_pct": 0.03302259440669932,
              "instit_pct": 0.0034628956654553116,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.36755039031075887,
              "mixed_qty_pct": 0.4419319637696273,
              "instit_qty_pct": 0.19051764591961387,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.36792548291251176,
              "mixed_notional_pct": 0.44078913588999963,
              "instit_notional_pct": 0.19128538119748864,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2074.994292147259,
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
              "ticker": "D5IU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9609409675987572,
              "mixed_pct": 0.03595206391478029,
              "instit_pct": 0.0031069684864624943,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.42515609847692093,
              "mixed_qty_pct": 0.4410675007343693,
              "instit_qty_pct": 0.1337764007887098,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.46337019516291855,
              "mixed_notional_pct": 0.4182922322821133,
              "instit_notional_pct": 0.11833757255496816,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2344.309032401243,
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
              "ticker": "JYEU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9549849995871446,
              "mixed_pct": 0.02894116351826197,
              "instit_pct": 0.016073836894593428,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.1964207562073536,
              "mixed_qty_pct": 0.19998898631117906,
              "instit_qty_pct": 0.6035902574814673,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.19588812027563854,
              "mixed_notional_pct": 0.20008746077835968,
              "instit_notional_pct": 0.6040244189460018,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4539.496529721002,
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
              "ticker": "AJBU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9261919623565564,
              "mixed_pct": 0.05135321137625838,
              "instit_pct": 0.022454826267185226,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.20860591811450369,
              "mixed_qty_pct": 0.20852998582896282,
              "instit_qty_pct": 0.5828640960565334,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.20846922505322693,
              "mixed_notional_pct": 0.20882887514432683,
              "instit_notional_pct": 0.5827018998024462,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 7315.162871913061,
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
              "ticker": "ODBU",
              "currency": "USD",
              "is_target": false,
              "retail_pct": 0.905099894847529,
              "mixed_pct": 0.08201892744479496,
              "instit_pct": 0.01288117770767613,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.2598388883218605,
              "mixed_qty_pct": 0.45346019649425223,
              "instit_qty_pct": 0.2867009151838873,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.25983992124829264,
              "mixed_notional_pct": 0.45289081576275203,
              "instit_notional_pct": 0.28726926298895533,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3609.4221871713985,
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
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            }
          ]
        }
      },
      "valid": true,
      "currency": "SGD",
      "n_trades": 40105,
      "n_runs": 0,
      "n_trade_days": 126,
      "first_trade_date": "2025-10-28",
      "last_trade_date": "2026-04-28",
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
        "retail_pct": 0.9665129036279766,
        "mixed_pct": 0.02742800149607281,
        "instit_pct": 0.00605909487595063,
        "ambiguous_pct": null,
        "unobservable_pct": null,
        "unclear_pct": null,
        "retail_qty_pct": null,
        "mixed_qty_pct": null,
        "instit_qty_pct": null,
        "ambiguous_qty_pct": null,
        "unobservable_qty_pct": null,
        "unclear_qty_pct": null,
        "retail_notional_pct": 0.2711513096250867,
        "mixed_notional_pct": 0.3552414642432113,
        "instit_notional_pct": 0.373607226131702,
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
        "avg": 2143.150455055479,
        "median": 136.0
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
            "n_trades": 6624,
            "n_runs": 0,
            "retail_pct": 0.9737318840579711,
            "mixed_pct": 0.022041062801932368,
            "instit_pct": 0.004227053140096618,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 1767.949577294686,
            "avg_run_notional": null,
            "retail_qty_pct": 0.27574423012598953,
            "mixed_qty_pct": 0.35498383320325566,
            "instit_qty_pct": 0.3692719366707548,
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
            "total_quantity": 17938000.0
          },
          {
            "month": "2026-03",
            "n_trades": 7834,
            "n_runs": 0,
            "retail_pct": 0.9527699770232321,
            "mixed_pct": 0.04008169517487874,
            "instit_pct": 0.007148327801889201,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 2774.2507658922646,
            "avg_run_notional": null,
            "retail_qty_pct": 0.2656893457830226,
            "mixed_qty_pct": 0.40913044800632625,
            "instit_qty_pct": 0.3251802062106512,
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
            "total_quantity": 32879000.0
          },
          {
            "month": "2026-02",
            "n_trades": 3981,
            "n_runs": 0,
            "retail_pct": 0.9500125596583773,
            "mixed_pct": 0.037176588796784725,
            "instit_pct": 0.01281085154483798,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 3258.591183119819,
            "avg_run_notional": null,
            "retail_qty_pct": 0.1956225434258907,
            "mixed_qty_pct": 0.324019483538312,
            "instit_qty_pct": 0.4803579730357973,
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
            "total_quantity": 18928800.0
          },
          {
            "month": "2026-01",
            "n_trades": 4399,
            "n_runs": 0,
            "retail_pct": 0.9581723118890657,
            "mixed_pct": 0.031370766083200725,
            "instit_pct": 0.010456922027733576,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 2736.767219822687,
            "avg_run_notional": null,
            "retail_qty_pct": 0.21909625644065478,
            "mixed_qty_pct": 0.30213510555834205,
            "instit_qty_pct": 0.47876863800100317,
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
            "total_quantity": 17544800.0
          },
          {
            "month": "2025-12",
            "n_trades": 6567,
            "n_runs": 0,
            "retail_pct": 0.979442667884879,
            "mixed_pct": 0.019186843307446324,
            "instit_pct": 0.0013704888076747374,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 1122.695523069895,
            "avg_run_notional": null,
            "retail_qty_pct": 0.4231022558867117,
            "mixed_qty_pct": 0.46414000036591835,
            "instit_qty_pct": 0.11275774374736997,
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
            "total_quantity": 10931400.0
          },
          {
            "month": "2025-11",
            "n_trades": 8665,
            "n_runs": 0,
            "retail_pct": 0.9749567224466243,
            "mixed_pct": 0.020657818811309868,
            "instit_pct": 0.004385458742065782,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 1786.9442008078477,
            "avg_run_notional": null,
            "retail_qty_pct": 0.32405704279091513,
            "mixed_qty_pct": 0.31817279572311397,
            "instit_qty_pct": 0.3577701614859709,
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
            "total_quantity": 22670700.0
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "CRPU",
          "currency": "SGD",
          "is_target": true,
          "retail_pct": 0.9665129036279766,
          "mixed_pct": 0.02742800149607281,
          "instit_pct": 0.00605909487595063,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.2716174432659865,
          "mixed_qty_pct": 0.35593920065928886,
          "instit_qty_pct": 0.3724433560747246,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.2711513096250867,
          "mixed_notional_pct": 0.3552414642432113,
          "instit_notional_pct": 0.373607226131702,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 2143.150455055479,
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
          "ticker": "BMGU",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9968429360694554,
          "mixed_pct": 0.0031570639305445935,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.7196358014086927,
          "mixed_qty_pct": 0.28036419859130735,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.7229924507867745,
          "mixed_notional_pct": 0.27700754921322546,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 198.22573007103395,
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
          "ticker": "AU8U",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9635145099278454,
          "mixed_pct": 0.03302259440669932,
          "instit_pct": 0.0034628956654553116,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.36755039031075887,
          "mixed_qty_pct": 0.4419319637696273,
          "instit_qty_pct": 0.19051764591961387,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.36792548291251176,
          "mixed_notional_pct": 0.44078913588999963,
          "instit_notional_pct": 0.19128538119748864,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 2074.994292147259,
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
          "ticker": "D5IU",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9609409675987572,
          "mixed_pct": 0.03595206391478029,
          "instit_pct": 0.0031069684864624943,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.42515609847692093,
          "mixed_qty_pct": 0.4410675007343693,
          "instit_qty_pct": 0.1337764007887098,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.46337019516291855,
          "mixed_notional_pct": 0.4182922322821133,
          "instit_notional_pct": 0.11833757255496816,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 2344.309032401243,
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
          "ticker": "JYEU",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9549849995871446,
          "mixed_pct": 0.02894116351826197,
          "instit_pct": 0.016073836894593428,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.1964207562073536,
          "mixed_qty_pct": 0.19998898631117906,
          "instit_qty_pct": 0.6035902574814673,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.19588812027563854,
          "mixed_notional_pct": 0.20008746077835968,
          "instit_notional_pct": 0.6040244189460018,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 4539.496529721002,
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
          "ticker": "AJBU",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9261919623565564,
          "mixed_pct": 0.05135321137625838,
          "instit_pct": 0.022454826267185226,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.20860591811450369,
          "mixed_qty_pct": 0.20852998582896282,
          "instit_qty_pct": 0.5828640960565334,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.20846922505322693,
          "mixed_notional_pct": 0.20882887514432683,
          "instit_notional_pct": 0.5827018998024462,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 7315.162871913061,
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
          "ticker": "ODBU",
          "currency": "USD",
          "is_target": false,
          "retail_pct": 0.905099894847529,
          "mixed_pct": 0.08201892744479496,
          "instit_pct": 0.01288117770767613,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.2598388883218605,
          "mixed_qty_pct": 0.45346019649425223,
          "instit_qty_pct": 0.2867009151838873,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.25983992124829264,
          "mixed_notional_pct": 0.45289081576275203,
          "instit_notional_pct": 0.28726926298895533,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 3609.4221871713985,
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
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        }
      ],
      "peer_comparison_periods": {
        "1d": [
          {
            "ticker": "CRPU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.9096774193548387,
            "mixed_pct": 0.08387096774193549,
            "instit_pct": 0.0064516129032258064,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.224863451034695,
            "mixed_qty_pct": 0.40156935148857603,
            "instit_qty_pct": 0.37356719747672895,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.2249450420433429,
            "mixed_notional_pct": 0.40152708222843886,
            "instit_notional_pct": 0.3735278757282182,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5577.577419354839,
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
            "ticker": "D5IU",
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
            "avg_trade_size": 1274.3375,
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
            "ticker": "AU8U",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9896193771626297,
            "mixed_pct": 0.010380622837370242,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6412740544127405,
            "mixed_qty_pct": 0.35872594558725945,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6412384367483948,
            "mixed_notional_pct": 0.3587615632516053,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 890.8987889273357,
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
            "ticker": "JYEU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9864539434075857,
            "mixed_pct": 0.009331727874774232,
            "instit_pct": 0.004214328717639976,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.32128671751113796,
            "mixed_qty_pct": 0.2530997508117496,
            "instit_qty_pct": 0.4256135316771124,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3209843785356766,
            "mixed_notional_pct": 0.2532986233662906,
            "instit_notional_pct": 0.42571699809803276,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1140.7277242624925,
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
            "ticker": "ODBU",
            "currency": "USD",
            "is_target": false,
            "retail_pct": 0.9375,
            "mixed_pct": 0.0625,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.358974358974359,
            "mixed_qty_pct": 0.6410256410256411,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3567961165048544,
            "mixed_notional_pct": 0.6432038834951457,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1030.0,
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
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AJBU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9178997613365155,
            "mixed_pct": 0.06205250596658711,
            "instit_pct": 0.020047732696897375,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.26041226305020543,
            "mixed_qty_pct": 0.29101915890221014,
            "instit_qty_pct": 0.44856857804758443,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.2603239981570038,
            "mixed_notional_pct": 0.290991998420289,
            "instit_notional_pct": 0.4486840034227072,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 6671.713603818615,
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
            "ticker": "CRPU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.9716369529983793,
            "mixed_pct": 0.024176121015667205,
            "instit_pct": 0.004186925985953539,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.27147870195009755,
            "mixed_qty_pct": 0.3737915204526456,
            "instit_qty_pct": 0.35472977759725693,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.27222390222442716,
            "mixed_notional_pct": 0.3743565115551043,
            "instit_notional_pct": 0.35341958622046854,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1864.0246488384657,
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
            "ticker": "BMGU",
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
            "avg_trade_size": 573.5666666666667,
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
            "ticker": "AU8U",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9736842105263158,
            "mixed_pct": 0.024223402543054884,
            "instit_pct": 0.0020923869306293257,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.38208363990397837,
            "mixed_qty_pct": 0.4615727631490937,
            "instit_qty_pct": 0.15634359694692798,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.38223668699362645,
            "mixed_notional_pct": 0.4624792344685431,
            "instit_notional_pct": 0.1552840785378305,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1445.7239256397875,
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
            "ticker": "JYEU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9684461152882206,
            "mixed_pct": 0.01912280701754386,
            "instit_pct": 0.01243107769423559,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2118472887353585,
            "mixed_qty_pct": 0.18651164162088318,
            "instit_qty_pct": 0.6016410696437583,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.21113578548411183,
            "mixed_notional_pct": 0.18642553786215665,
            "instit_notional_pct": 0.6024386766537315,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3289.636979949875,
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
            "ticker": "D5IU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9636363636363636,
            "mixed_pct": 0.03636363636363636,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.38576806270344977,
            "mixed_qty_pct": 0.6142319372965502,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3908755528235375,
            "mixed_notional_pct": 0.6091244471764625,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1884.1290909090906,
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
            "ticker": "ODBU",
            "currency": "USD",
            "is_target": false,
            "retail_pct": 0.9440820130475303,
            "mixed_pct": 0.05032618825722274,
            "instit_pct": 0.005591798695246971,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3449153285952444,
            "mixed_qty_pct": 0.45038167938931295,
            "instit_qty_pct": 0.20470299201544265,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.34586613807692396,
            "mixed_notional_pct": 0.45157156483722793,
            "instit_notional_pct": 0.20256229708584808,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2183.2110904007454,
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
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AJBU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9195319961795606,
            "mixed_pct": 0.05527698185291308,
            "instit_pct": 0.025191021967526265,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2080735156775723,
            "mixed_qty_pct": 0.20398092659439623,
            "instit_qty_pct": 0.5879455577280315,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.20703040652639607,
            "mixed_notional_pct": 0.2035600879334123,
            "instit_notional_pct": 0.5894095055401917,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 8153.34682425979,
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
            "ticker": "CRPU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.9586703543286542,
            "mixed_pct": 0.03350206126389396,
            "instit_pct": 0.00782758440745186,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.24184523342200126,
            "mixed_qty_pct": 0.3633500245511269,
            "instit_qty_pct": 0.3948047420268718,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.24079597833993244,
            "mixed_notional_pct": 0.3627044604025892,
            "instit_notional_pct": 0.3964995612574784,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2614.294212805928,
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
            "ticker": "BMGU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9981412639405205,
            "mixed_pct": 0.0018587360594795538,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.8560115190784737,
            "mixed_qty_pct": 0.14398848092152627,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.8682875816993464,
            "mixed_notional_pct": 0.13171241830065358,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 213.28996282527882,
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
            "ticker": "AU8U",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9632963046928135,
            "mixed_pct": 0.033325776467921106,
            "instit_pct": 0.003377918839265473,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3554909515948129,
            "mixed_qty_pct": 0.45174288918854205,
            "instit_qty_pct": 0.19276615921664503,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.35501886581847286,
            "mixed_notional_pct": 0.4509692216672894,
            "instit_notional_pct": 0.19401191251423777,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1996.1005554296078,
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
            "ticker": "JYEU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9550859934958823,
            "mixed_pct": 0.028629443266943874,
            "instit_pct": 0.016284563237173783,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.19482354821202008,
            "mixed_qty_pct": 0.1949299813370989,
            "instit_qty_pct": 0.610246470450881,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.19357287218037358,
            "mixed_notional_pct": 0.19458237027386985,
            "instit_notional_pct": 0.6118447575457566,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4618.557477308395,
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
            "ticker": "D5IU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9489153254023793,
            "mixed_pct": 0.04618614415675298,
            "instit_pct": 0.00489853044086774,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3248565641631271,
            "mixed_qty_pct": 0.5165348614072304,
            "instit_qty_pct": 0.15860857442964252,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3205821449030541,
            "mixed_notional_pct": 0.5097833439757403,
            "instit_notional_pct": 0.16963451112120553,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2761.2660601819452,
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
            "ticker": "AJBU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9181808723538376,
            "mixed_pct": 0.05619442217421373,
            "instit_pct": 0.02562470547194869,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.20011314085403697,
            "mixed_qty_pct": 0.1996078693825799,
            "instit_qty_pct": 0.6002789897633831,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.199728615741985,
            "mixed_notional_pct": 0.1994788460443525,
            "instit_notional_pct": 0.6007925382136625,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 8380.481000263162,
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
            "ticker": "ODBU",
            "currency": "USD",
            "is_target": false,
            "retail_pct": 0.8973988439306358,
            "mixed_pct": 0.09007707129094412,
            "instit_pct": 0.012524084778420038,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2651157658330142,
            "mixed_qty_pct": 0.4482964540019862,
            "instit_qty_pct": 0.2865877801649996,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.2650399423745422,
            "mixed_notional_pct": 0.4476081552550035,
            "instit_notional_pct": 0.2873519023704542,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3914.3880057803467,
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
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ],
        "6m": [
          {
            "ticker": "CRPU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.9665129036279766,
            "mixed_pct": 0.02742800149607281,
            "instit_pct": 0.00605909487595063,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2716174432659865,
            "mixed_qty_pct": 0.35593920065928886,
            "instit_qty_pct": 0.3724433560747246,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.2711513096250867,
            "mixed_notional_pct": 0.3552414642432113,
            "instit_notional_pct": 0.373607226131702,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2143.150455055479,
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
            "ticker": "BMGU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9968429360694554,
            "mixed_pct": 0.0031570639305445935,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.7196358014086927,
            "mixed_qty_pct": 0.28036419859130735,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.7229924507867745,
            "mixed_notional_pct": 0.27700754921322546,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 198.22573007103395,
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
            "ticker": "AU8U",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9635145099278454,
            "mixed_pct": 0.03302259440669932,
            "instit_pct": 0.0034628956654553116,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.36755039031075887,
            "mixed_qty_pct": 0.4419319637696273,
            "instit_qty_pct": 0.19051764591961387,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.36792548291251176,
            "mixed_notional_pct": 0.44078913588999963,
            "instit_notional_pct": 0.19128538119748864,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2074.994292147259,
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
            "ticker": "D5IU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9609409675987572,
            "mixed_pct": 0.03595206391478029,
            "instit_pct": 0.0031069684864624943,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.42515609847692093,
            "mixed_qty_pct": 0.4410675007343693,
            "instit_qty_pct": 0.1337764007887098,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.46337019516291855,
            "mixed_notional_pct": 0.4182922322821133,
            "instit_notional_pct": 0.11833757255496816,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2344.309032401243,
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
            "ticker": "JYEU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9549849995871446,
            "mixed_pct": 0.02894116351826197,
            "instit_pct": 0.016073836894593428,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.1964207562073536,
            "mixed_qty_pct": 0.19998898631117906,
            "instit_qty_pct": 0.6035902574814673,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.19588812027563854,
            "mixed_notional_pct": 0.20008746077835968,
            "instit_notional_pct": 0.6040244189460018,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4539.496529721002,
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
            "ticker": "AJBU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9261919623565564,
            "mixed_pct": 0.05135321137625838,
            "instit_pct": 0.022454826267185226,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.20860591811450369,
            "mixed_qty_pct": 0.20852998582896282,
            "instit_qty_pct": 0.5828640960565334,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.20846922505322693,
            "mixed_notional_pct": 0.20882887514432683,
            "instit_notional_pct": 0.5827018998024462,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 7315.162871913061,
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
            "ticker": "ODBU",
            "currency": "USD",
            "is_target": false,
            "retail_pct": 0.905099894847529,
            "mixed_pct": 0.08201892744479496,
            "instit_pct": 0.01288117770767613,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2598388883218605,
            "mixed_qty_pct": 0.45346019649425223,
            "instit_qty_pct": 0.2867009151838873,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.25983992124829264,
            "mixed_notional_pct": 0.45289081576275203,
            "instit_notional_pct": 0.28726926298895533,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3609.4221871713985,
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
              "retail_max": 10000.0,
              "instit_min": 50000.0
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
        },
        "USD": {
          "retail_max": 10000.0,
          "instit_min": 50000.0
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
      "total_trades": 38655,
      "price_moving_trades": 10790,
      "pct_price_moving": 27.913594619066096,
      "all_movers": {
        "count": 10790,
        "avg_size": 2084.0670991658944,
        "median_size": 201.0,
        "retail_count": 10447,
        "mixed_count": 281,
        "institutional_count": 62,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 96.82113067655236,
        "mixed_pct": 2.604263206672845,
        "instit_pct": 0.5746061167747915,
        "unclear_pct": null
      },
      "positive_movers": {
        "count": 5388,
        "avg_size": 2269.944784706756,
        "median_size": 195.0,
        "retail_count": 5195,
        "mixed_count": 160,
        "institutional_count": 33,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 96.41796585003712,
        "mixed_pct": 2.969561989606533,
        "instit_pct": 0.6124721603563474,
        "unclear_pct": null
      },
      "negative_movers": {
        "count": 5402,
        "avg_size": 1898.6711403184006,
        "median_size": 202.5,
        "retail_count": 5252,
        "mixed_count": 121,
        "institutional_count": 29,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 97.22325064790817,
        "mixed_pct": 2.2399111440207333,
        "instit_pct": 0.5368382080710848,
        "unclear_pct": null
      }
    },
    "short_selling": {
      "data_available": true,
      "security_name": "Sasseur Reit",
      "mapping": {
        "ticker_to_security": "Sasseur Reit",
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
            "avg_short_ratio": 0.04956798629980752,
            "max_short_ratio": 0.26441708229426436,
            "interpretation": "Low short interest"
          }
        },
        "3M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.06749995992622866,
            "max_short_ratio": 0.36836158192090396,
            "interpretation": "Moderate short interest"
          }
        },
        "6M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.06142682200139715,
            "max_short_ratio": 0.36836158192090396,
            "interpretation": "Moderate short interest"
          }
        }
      },
      "correlation": {
        "valid": true,
        "correlation": -0.12760571712148833,
        "interpretation": "Moderate negative - shorts somewhat predict drops"
      },
      "peaks": [
        {
          "date": "2026-03-25",
          "short_ratio": 0.36836158192090396,
          "return_pct": 0.0
        },
        {
          "date": "2026-03-27",
          "short_ratio": 0.26441708229426436,
          "return_pct": 0.0
        },
        {
          "date": "2026-03-24",
          "short_ratio": 0.2476085356880059,
          "return_pct": 0.7936507936507908
        },
        {
          "date": "2025-12-02",
          "short_ratio": 0.23535638673253353,
          "return_pct": 0.0
        },
        {
          "date": "2026-03-09",
          "short_ratio": 0.20926869577193224,
          "return_pct": -0.7407407407407418
        }
      ],
      "short_interest_change": {
        "valid": true,
        "monthly_data": [
          {
            "month": "2026-04",
            "avg_short_ratio": 0.03462201728713404
          },
          {
            "month": "2026-03",
            "avg_short_ratio": 0.1453584600680963
          },
          {
            "month": "2026-02",
            "avg_short_ratio": 0.01955998308759306
          },
          {
            "month": "2026-01",
            "avg_short_ratio": 0.016982764014565978
          },
          {
            "month": "2025-12",
            "avg_short_ratio": 0.07871316646993508
          },
          {
            "month": "2025-11",
            "avg_short_ratio": 0.0668994704724344
          },
          {
            "month": "2025-10",
            "avg_short_ratio": 0.06470348255473901
          },
          {
            "month": "2025-09",
            "avg_short_ratio": 0.06966288440475607
          },
          {
            "month": "2025-08",
            "avg_short_ratio": 0.05367218265667169
          },
          {
            "month": "2025-07",
            "avg_short_ratio": 0.023438723514618575
          },
          {
            "month": "2025-06",
            "avg_short_ratio": 0.02462641566210631
          },
          {
            "month": "2025-05",
            "avg_short_ratio": 0.03425148828958405
          }
        ],
        "mom_change": [
          {
            "month": "2026-04",
            "avg_short_ratio": 0.03462201728713404,
            "change_pct": null
          },
          {
            "month": "2026-03",
            "avg_short_ratio": 0.1453584600680963,
            "change_pct": 319.84399367194953
          },
          {
            "month": "2026-02",
            "avg_short_ratio": 0.01955998308759306,
            "change_pct": -86.54362251882017
          },
          {
            "month": "2026-01",
            "avg_short_ratio": 0.016982764014565978,
            "change_pct": -13.175978023528142
          },
          {
            "month": "2025-12",
            "avg_short_ratio": 0.07871316646993508,
            "change_pct": 363.4885487569835
          },
          {
            "month": "2025-11",
            "avg_short_ratio": 0.0668994704724344,
            "change_pct": -15.008538631225035
          },
          {
            "month": "2025-10",
            "avg_short_ratio": 0.06470348255473901,
            "change_pct": -3.2825191323453518
          },
          {
            "month": "2025-09",
            "avg_short_ratio": 0.06966288440475607,
            "change_pct": 7.664814402874552
          },
          {
            "month": "2025-08",
            "avg_short_ratio": 0.05367218265667169,
            "change_pct": -22.95440661798473
          },
          {
            "month": "2025-07",
            "avg_short_ratio": 0.023438723514618575,
            "change_pct": -56.329848434615435
          },
          {
            "month": "2025-06",
            "avg_short_ratio": 0.02462641566210631,
            "change_pct": 5.067221970287669
          },
          {
            "month": "2025-05",
            "avg_short_ratio": 0.03425148828958405,
            "change_pct": 39.08434243757299
          }
        ],
        "interpretation": "Shorts covering significantly (-76% MoM)"
      },
      "short_series": {
        "valid": true,
        "rows": [
          {
            "date": "2026-04-28",
            "short_ratio": 0.1365038753856573,
            "short_vol": 181400,
            "total_vol": 1328900,
            "close": 0.66,
            "return": 0.0
          },
          {
            "date": "2026-04-27",
            "short_ratio": 0.03616133518776078,
            "short_vol": 13000,
            "total_vol": 359500,
            "close": 0.66,
            "return": 0.0
          },
          {
            "date": "2026-04-24",
            "short_ratio": 0.028525382755842064,
            "short_vol": 17700,
            "total_vol": 620500,
            "close": 0.66,
            "return": 0.0
          },
          {
            "date": "2026-04-23",
            "short_ratio": 0.001321003963011889,
            "short_vol": 800,
            "total_vol": 605600,
            "close": 0.66,
            "return": -0.014925373134328401
          },
          {
            "date": "2026-04-22",
            "short_ratio": 0.0046252848907360235,
            "short_vol": 6900,
            "total_vol": 1491800,
            "close": 0.67,
            "return": 0.007518796992481258
          },
          {
            "date": "2026-04-21",
            "short_ratio": 0.023340669523919843,
            "short_vol": 40300,
            "total_vol": 1726600,
            "close": 0.665,
            "return": 0.0
          },
          {
            "date": "2026-04-20",
            "short_ratio": 0.007475209763539283,
            "short_vol": 4900,
            "total_vol": 655500,
            "close": 0.665,
            "return": 0.0
          },
          {
            "date": "2026-04-17",
            "short_ratio": 0.0030158914279085954,
            "short_vol": 2600,
            "total_vol": 862100,
            "close": 0.665,
            "return": -0.007462686567164201
          },
          {
            "date": "2026-04-16",
            "short_ratio": 0.006643180674383493,
            "short_vol": 6600,
            "total_vol": 993500,
            "close": 0.67,
            "return": 0.015151515151515138
          },
          {
            "date": "2026-04-15",
            "short_ratio": 0.008671713695801789,
            "short_vol": 18900,
            "total_vol": 2179500,
            "close": 0.66,
            "return": 0.007633587786259444
          },
          {
            "date": "2026-04-14",
            "short_ratio": 0.04148936170212766,
            "short_vol": 35100,
            "total_vol": 846000,
            "close": 0.655,
            "return": 0.0
          },
          {
            "date": "2026-04-13",
            "short_ratio": 0.05741664069803677,
            "short_vol": 73700,
            "total_vol": 1283600,
            "close": 0.655,
            "return": 0.015503875968992276
          },
          {
            "date": "2026-04-10",
            "short_ratio": 0.016528313074414467,
            "short_vol": 22300,
            "total_vol": 1349200,
            "close": 0.645,
            "return": 0.0
          },
          {
            "date": "2026-04-09",
            "short_ratio": 0.00303905181583346,
            "short_vol": 4000,
            "total_vol": 1316200,
            "close": 0.645,
            "return": 0.0
          },
          {
            "date": "2026-04-08",
            "short_ratio": 0.010373267579287476,
            "short_vol": 12200,
            "total_vol": 1176100,
            "close": 0.645,
            "return": 0.015748031496062964
          },
          {
            "date": "2026-04-07",
            "short_ratio": 0.043985045084671215,
            "short_vol": 20000,
            "total_vol": 454700,
            "close": 0.635,
            "return": 0.0
          },
          {
            "date": "2026-04-06",
            "short_ratio": 0.1613056945437217,
            "short_vol": 203100,
            "total_vol": 1259100,
            "close": 0.635,
            "return": 0.0
          },
          {
            "date": "2026-04-02",
            "short_ratio": 0.05267156242086604,
            "short_vol": 41600,
            "total_vol": 789800,
            "close": 0.635,
            "return": -0.0078125
          },
          {
            "date": "2026-04-01",
            "short_ratio": 0.01472584426802682,
            "short_vol": 35800,
            "total_vol": 2431100,
            "close": 0.64,
            "return": 0.007874015748031482
          },
          {
            "date": "2026-03-31",
            "short_ratio": 0.10057279872119355,
            "short_vol": 151000,
            "total_vol": 1501400,
            "close": 0.635,
            "return": 0.007936507936507908
          },
          {
            "date": "2026-03-30",
            "short_ratio": 0.06768748912476075,
            "short_vol": 38900,
            "total_vol": 574700,
            "close": 0.63,
            "return": -0.007874015748031482
          },
          {
            "date": "2026-03-27",
            "short_ratio": 0.26441708229426436,
            "short_vol": 339300,
            "total_vol": 1283200,
            "close": 0.635,
            "return": 0.0
          },
          {
            "date": "2026-03-26",
            "short_ratio": 0.1595657756507529,
            "short_vol": 136700,
            "total_vol": 856700,
            "close": 0.635,
            "return": 0.0
          },
          {
            "date": "2026-03-25",
            "short_ratio": 0.36836158192090396,
            "short_vol": 97800,
            "total_vol": 265500,
            "close": 0.635,
            "return": 0.0
          },
          {
            "date": "2026-03-24",
            "short_ratio": 0.2476085356880059,
            "short_vol": 134600,
            "total_vol": 543600,
            "close": 0.635,
            "return": 0.007936507936507908
          },
          {
            "date": "2026-03-23",
            "short_ratio": 0.18642151319994102,
            "short_vol": 379200,
            "total_vol": 2034100,
            "close": 0.63,
            "return": -0.015625
          },
          {
            "date": "2026-03-20",
            "short_ratio": 0.1987347631538343,
            "short_vol": 386400,
            "total_vol": 1944300,
            "close": 0.64,
            "return": 0.0
          },
          {
            "date": "2026-03-19",
            "short_ratio": 0.17494422918868147,
            "short_vol": 149000,
            "total_vol": 851700,
            "close": 0.64,
            "return": -0.015384615384615441
          },
          {
            "date": "2026-03-18",
            "short_ratio": 0.11682385153635534,
            "short_vol": 192000,
            "total_vol": 1643500,
            "close": 0.65,
            "return": 0.007751937984496138
          },
          {
            "date": "2026-03-17",
            "short_ratio": 0.13784764207980654,
            "short_vol": 114000,
            "total_vol": 827000,
            "close": 0.645,
            "return": 0.015748031496062964
          },
          {
            "date": "2026-03-16",
            "short_ratio": 0.18052071005917159,
            "short_vol": 762700,
            "total_vol": 4225000,
            "close": 0.635,
            "return": -0.06617647058823539
          },
          {
            "date": "2026-03-13",
            "short_ratio": 0.17986120035985093,
            "short_vol": 559800,
            "total_vol": 3112400,
            "close": 0.68,
            "return": 0.007407407407407307
          },
          {
            "date": "2026-03-12",
            "short_ratio": 0.16983923463852452,
            "short_vol": 172200,
            "total_vol": 1013900,
            "close": 0.675,
            "return": -0.007352941176470562
          },
          {
            "date": "2026-03-11",
            "short_ratio": 0.11613756613756614,
            "short_vol": 131700,
            "total_vol": 1134000,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2026-03-10",
            "short_ratio": 0.1979909267660402,
            "short_vol": 183300,
            "total_vol": 925800,
            "close": 0.68,
            "return": 0.014925373134328401
          },
          {
            "date": "2026-03-09",
            "short_ratio": 0.20926869577193224,
            "short_vol": 607800,
            "total_vol": 2904400,
            "close": 0.67,
            "return": -0.007407407407407418
          },
          {
            "date": "2026-03-06",
            "short_ratio": 0.02449013707790037,
            "short_vol": 29300,
            "total_vol": 1196400,
            "close": 0.675,
            "return": -0.007352941176470562
          },
          {
            "date": "2026-03-05",
            "short_ratio": 0.0008945998698763826,
            "short_vol": 1100,
            "total_vol": 1229600,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2026-03-04",
            "short_ratio": 0.0033744990977901718,
            "short_vol": 14400,
            "total_vol": 4267300,
            "close": 0.68,
            "return": -0.007299270072992692
          },
          {
            "date": "2026-03-03",
            "short_ratio": 0.03416203059805285,
            "short_vol": 39300,
            "total_vol": 1150400,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-03-02",
            "short_ratio": 0.05836125856291332,
            "short_vol": 196800,
            "total_vol": 3372100,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-02-27",
            "short_ratio": 0.0067413905133203375,
            "short_vol": 16600,
            "total_vol": 2462400,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-02-26",
            "short_ratio": 0.0060887923385246154,
            "short_vol": 39800,
            "total_vol": 6536600,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-02-25",
            "short_ratio": 0.0008496176720475786,
            "short_vol": 800,
            "total_vol": 941600,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-02-24",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 382700,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-02-23",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1809900,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-02-20",
            "short_ratio": 0.09221772379667116,
            "short_vol": 20500,
            "total_vol": 222300,
            "close": 0.685,
            "return": -0.007246376811594013
          },
          {
            "date": "2026-02-19",
            "short_ratio": 0.04595755760968624,
            "short_vol": 105900,
            "total_vol": 2304300,
            "close": 0.69,
            "return": 0.014705882352941124
          },
          {
            "date": "2026-02-16",
            "short_ratio": 0.06251680559290132,
            "short_vol": 46500,
            "total_vol": 743800,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2026-02-13",
            "short_ratio": 0.009060706735125339,
            "short_vol": 18000,
            "total_vol": 1986600,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2026-02-12",
            "short_ratio": 0.022450728363324766,
            "short_vol": 13100,
            "total_vol": 583500,
            "close": 0.68,
            "return": -0.007299270072992692
          },
          {
            "date": "2026-02-11",
            "short_ratio": 0.006556033599672198,
            "short_vol": 3200,
            "total_vol": 488100,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-02-10",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 726400,
            "close": 0.685,
            "return": 0.007352941176470562
          },
          {
            "date": "2026-02-09",
            "short_ratio": 0.002091020910209102,
            "short_vol": 1700,
            "total_vol": 813000,
            "close": 0.68,
            "return": -0.007299270072992692
          },
          {
            "date": "2026-02-06",
            "short_ratio": 0.030951223464592448,
            "short_vol": 19100,
            "total_vol": 617100,
            "close": 0.685,
            "return": 0.007352941176470562
          },
          {
            "date": "2026-02-05",
            "short_ratio": 0.01563966218329684,
            "short_vol": 10000,
            "total_vol": 639400,
            "close": 0.68,
            "return": -0.007299270072992692
          },
          {
            "date": "2026-02-04",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 775000,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-02-03",
            "short_ratio": 0.025183823529411765,
            "short_vol": 13700,
            "total_vol": 544000,
            "close": 0.685,
            "return": -0.007246376811594013
          },
          {
            "date": "2026-02-02",
            "short_ratio": 0.025774609267891418,
            "short_vol": 9400,
            "total_vol": 364700,
            "close": 0.69,
            "return": 0.007299270072992581
          },
          {
            "date": "2026-01-30",
            "short_ratio": 0.004020369874028411,
            "short_vol": 4500,
            "total_vol": 1119300,
            "close": 0.685,
            "return": -0.007246376811594013
          },
          {
            "date": "2026-01-29",
            "short_ratio": 0.03738632536207477,
            "short_vol": 11100,
            "total_vol": 296900,
            "close": 0.69,
            "return": 0.007299270072992581
          },
          {
            "date": "2026-01-28",
            "short_ratio": 0.0007983273141988215,
            "short_vol": 2100,
            "total_vol": 2630500,
            "close": 0.685,
            "return": -0.007246376811594013
          },
          {
            "date": "2026-01-27",
            "short_ratio": 0.025203641590800192,
            "short_vol": 26300,
            "total_vol": 1043500,
            "close": 0.69,
            "return": 0.007299270072992581
          },
          {
            "date": "2026-01-26",
            "short_ratio": 0.016331658291457288,
            "short_vol": 3900,
            "total_vol": 238800,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-01-23",
            "short_ratio": 0.09597292724196277,
            "short_vol": 141800,
            "total_vol": 1477500,
            "close": 0.685,
            "return": -0.007246376811594013
          },
          {
            "date": "2026-01-22",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 285400,
            "close": 0.69,
            "return": 0.0
          },
          {
            "date": "2026-01-21",
            "short_ratio": 0.018341650418057437,
            "short_vol": 55500,
            "total_vol": 3025900,
            "close": 0.69,
            "return": 0.0
          },
          {
            "date": "2026-01-20",
            "short_ratio": 0.043049733771383256,
            "short_vol": 38000,
            "total_vol": 882700,
            "close": 0.69,
            "return": 0.0
          },
          {
            "date": "2026-01-19",
            "short_ratio": 0.012526652452025586,
            "short_vol": 14100,
            "total_vol": 1125600,
            "close": 0.69,
            "return": 0.007299270072992581
          },
          {
            "date": "2026-01-16",
            "short_ratio": 0.05860180641490648,
            "short_vol": 82400,
            "total_vol": 1406100,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-01-15",
            "short_ratio": 0.008310957678046285,
            "short_vol": 6500,
            "total_vol": 782100,
            "close": 0.685,
            "return": 0.007352941176470562
          },
          {
            "date": "2026-01-14",
            "short_ratio": 0.0022742213456994117,
            "short_vol": 12800,
            "total_vol": 5628300,
            "close": 0.68,
            "return": -0.014492753623188248
          },
          {
            "date": "2026-01-13",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 540300,
            "close": 0.69,
            "return": 0.007299270072992581
          },
          {
            "date": "2026-01-12",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 319100,
            "close": 0.685,
            "return": 0.007352941176470562
          },
          {
            "date": "2026-01-09",
            "short_ratio": 0.0015347885402455662,
            "short_vol": 900,
            "total_vol": 586400,
            "close": 0.68,
            "return": -0.007299270072992692
          },
          {
            "date": "2026-01-08",
            "short_ratio": 0.007297551789077213,
            "short_vol": 6200,
            "total_vol": 849600,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-01-07",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 772400,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-01-06",
            "short_ratio": 0.0003454231433506045,
            "short_vol": 200,
            "total_vol": 579000,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-01-05",
            "short_ratio": 0.0045684058667949026,
            "short_vol": 3800,
            "total_vol": 831800,
            "close": 0.685,
            "return": 0.007352941176470562
          },
          {
            "date": "2026-01-02",
            "short_ratio": 0.020073603211776515,
            "short_vol": 6000,
            "total_vol": 298900,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-12-31",
            "short_ratio": 0.00038550501156515033,
            "short_vol": 200,
            "total_vol": 518800,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-12-30",
            "short_ratio": 0.0137524557956778,
            "short_vol": 7700,
            "total_vol": 559900,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-12-29",
            "short_ratio": 0.023554603854389723,
            "short_vol": 4400,
            "total_vol": 186800,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-12-26",
            "short_ratio": 0.0009287925696594427,
            "short_vol": 300,
            "total_vol": 323000,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-12-24",
            "short_ratio": 0.0002644802962179318,
            "short_vol": 100,
            "total_vol": 378100,
            "close": 0.68,
            "return": 0.007407407407407307
          },
          {
            "date": "2025-12-23",
            "short_ratio": 0.002872737719046251,
            "short_vol": 2000,
            "total_vol": 696200,
            "close": 0.675,
            "return": 0.0
          },
          {
            "date": "2025-12-22",
            "short_ratio": 0.013897662665824383,
            "short_vol": 4400,
            "total_vol": 316600,
            "close": 0.675,
            "return": 0.0
          },
          {
            "date": "2025-12-19",
            "short_ratio": 0.04928861788617886,
            "short_vol": 58200,
            "total_vol": 1180800,
            "close": 0.675,
            "return": 0.0
          },
          {
            "date": "2025-12-18",
            "short_ratio": 0.10728476821192053,
            "short_vol": 24300,
            "total_vol": 226500,
            "close": 0.675,
            "return": 0.0
          },
          {
            "date": "2025-12-17",
            "short_ratio": 0.13839969372128638,
            "short_vol": 72300,
            "total_vol": 522400,
            "close": 0.675,
            "return": 0.00746268656716409
          },
          {
            "date": "2025-12-16",
            "short_ratio": 0.04323945307935024,
            "short_vol": 37000,
            "total_vol": 855700,
            "close": 0.67,
            "return": -0.007407407407407418
          },
          {
            "date": "2025-12-15",
            "short_ratio": 0.01097147416716537,
            "short_vol": 5500,
            "total_vol": 501300,
            "close": 0.675,
            "return": 0.00746268656716409
          },
          {
            "date": "2025-12-12",
            "short_ratio": 0.03396362760448031,
            "short_vol": 28200,
            "total_vol": 830300,
            "close": 0.67,
            "return": 0.0
          },
          {
            "date": "2025-12-11",
            "short_ratio": 0.04602865135203865,
            "short_vol": 54300,
            "total_vol": 1179700,
            "close": 0.67,
            "return": 0.0
          },
          {
            "date": "2025-12-10",
            "short_ratio": 0.16329378925331473,
            "short_vol": 23400,
            "total_vol": 143300,
            "close": 0.67,
            "return": -0.007407407407407418
          },
          {
            "date": "2025-12-09",
            "short_ratio": 0.08530183727034121,
            "short_vol": 84500,
            "total_vol": 990600,
            "close": 0.675,
            "return": 0.0
          },
          {
            "date": "2025-12-08",
            "short_ratio": 0.1941747572815534,
            "short_vol": 98000,
            "total_vol": 504700,
            "close": 0.675,
            "return": -0.007352941176470562
          },
          {
            "date": "2025-12-05",
            "short_ratio": 0.09750975097509751,
            "short_vol": 130000,
            "total_vol": 1333200,
            "close": 0.68,
            "return": 0.007407407407407307
          },
          {
            "date": "2025-12-04",
            "short_ratio": 0.20565704183853858,
            "short_vol": 69800,
            "total_vol": 339400,
            "close": 0.675,
            "return": 0.0
          },
          {
            "date": "2025-12-03",
            "short_ratio": 0.1316745876432765,
            "short_vol": 47100,
            "total_vol": 357700,
            "close": 0.675,
            "return": -0.007352941176470562
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "CRPU",
          "avg_short_ratio": 0.06749995992622866,
          "max_short_ratio": 0.36836158192090396,
          "is_target": true
        },
        {
          "ticker": "BMGU",
          "avg_short_ratio": 1.9712979025390316e-05,
          "max_short_ratio": 0.007352941176470588,
          "is_target": false
        },
        {
          "ticker": "ODBU",
          "avg_short_ratio": 0.0008324388189329095,
          "max_short_ratio": 0.1091703056768559,
          "is_target": false
        },
        {
          "ticker": "D5IU",
          "avg_short_ratio": 0.0014598388060503347,
          "max_short_ratio": 0.2702329197017246,
          "is_target": false
        },
        {
          "ticker": "AU8U",
          "avg_short_ratio": 0.06180073159324828,
          "max_short_ratio": 0.583009889700239,
          "is_target": false
        },
        {
          "ticker": "AJBU",
          "avg_short_ratio": 0.08055807932719149,
          "max_short_ratio": 0.4312404120096428,
          "is_target": false
        },
        {
          "ticker": "JYEU",
          "avg_short_ratio": 0.10521100035608023,
          "max_short_ratio": 0.6966426355939308,
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
          "opening": 0.0071755177203139875,
          "continuous": 0.8996368322138075,
          "closing": 0.07633612973271832,
          "auctions": 0.10036316778619249,
          "other": 0.0
        },
        "1M": {
          "opening": 0.04219376706755482,
          "continuous": 0.8856872790615842,
          "closing": 0.06295547804772132,
          "auctions": 0.11431272093841578,
          "other": 0.0
        },
        "3M": {
          "opening": 0.04956978968054746,
          "continuous": 0.8686354188291233,
          "closing": 0.0684522046005777,
          "auctions": 0.1313645811708767,
          "other": 0.0
        },
        "6M": {
          "opening": 0.036590373862292296,
          "continuous": 0.8714871825260063,
          "closing": 0.08075907337746285,
          "auctions": 0.12851281747399376,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.3280424178222481,
        "1M": 0.22377028947373254,
        "3M": 0.2357454023990921,
        "6M": 0.22933827444598273
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.0179
        },
        {
          "time": "09:00",
          "avg_share": 0.0971
        },
        {
          "time": "09:30",
          "avg_share": 0.0383
        },
        {
          "time": "10:00",
          "avg_share": 0.0442
        },
        {
          "time": "10:30",
          "avg_share": 0.0346
        },
        {
          "time": "11:00",
          "avg_share": 0.0312
        },
        {
          "time": "11:30",
          "avg_share": 0.0403
        },
        {
          "time": "12:00",
          "avg_share": 0.235
        },
        {
          "time": "12:30",
          "avg_share": 0.0092
        },
        {
          "time": "13:00",
          "avg_share": 0.0188
        },
        {
          "time": "13:30",
          "avg_share": 0.0195
        },
        {
          "time": "14:00",
          "avg_share": 0.037
        },
        {
          "time": "14:30",
          "avg_share": 0.0339
        },
        {
          "time": "15:00",
          "avg_share": 0.0287
        },
        {
          "time": "15:30",
          "avg_share": 0.0506
        },
        {
          "time": "16:00",
          "avg_share": 0.0436
        },
        {
          "time": "16:30",
          "avg_share": 0.1039
        },
        {
          "time": "17:00",
          "avg_share": 0.1163
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "CRPU",
          "auctions_pct": 11.697524343288665,
          "hhi": 0.22764179756606318,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400",
            "you": true
          }
        },
        {
          "ticker": "ODBU",
          "auctions_pct": 7.153659289352069,
          "hhi": 0.39063073039801394,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "D5IU",
          "auctions_pct": 13.134944347178424,
          "hhi": 0.4293283872894485,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "BMGU",
          "auctions_pct": 0.7572075713774554,
          "hhi": 0.7515912936398745,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "AU8U",
          "auctions_pct": 13.870753695438143,
          "hhi": 0.17239891053780845,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "JYEU",
          "auctions_pct": 13.323776026086554,
          "hhi": 0.21226033897898672,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "AJBU",
          "auctions_pct": 20.528650955354436,
          "hhi": 0.14671626611804536,
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
