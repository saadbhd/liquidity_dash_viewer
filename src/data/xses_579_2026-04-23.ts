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
      "ticker": "579",
      "name": "Oceanus",
      "marketCap": 77288239.09200001,
      "sector": "Food Distribution",
      "industry": "Consumer Defensive"
    },
    {
      "ticker": "5EV",
      "name": "Hosen",
      "marketCap": 22743059.220000003,
      "sector": "Food Distribution",
      "industry": "Consumer Defensive"
    },
    {
      "ticker": "AAJ",
      "name": "SunMoonFood",
      "marketCap": 22581814.325000003,
      "sector": "Food Distribution",
      "industry": "Consumer Defensive"
    },
    {
      "ticker": "K03",
      "name": "Khong Guan",
      "marketCap": 23231268.0,
      "sector": "Food Distribution",
      "industry": "Consumer Defensive"
    },
    {
      "ticker": "BAC",
      "name": "Camsing Hc",
      "marketCap": 3420000.0,
      "sector": "Food Distribution",
      "industry": "Consumer Defensive"
    },
    {
      "ticker": "MV4",
      "name": "Mewah Intl",
      "marketCap": 450200232.0,
      "sector": "Packaged Foods",
      "industry": "Consumer Defensive"
    },
    {
      "ticker": "BNE",
      "name": "Kencana Agri",
      "marketCap": 156421091.465,
      "sector": "Farm Products",
      "industry": "Consumer Defensive"
    },
    {
      "ticker": "5JS",
      "name": "Indofood Agri",
      "marketCap": 593259425.25,
      "sector": "Packaged Foods",
      "industry": "Consumer Defensive"
    },
    {
      "ticker": "BEW",
      "name": "JB Foods",
      "marketCap": 220036546.21,
      "sector": "Confectioners",
      "industry": "Consumer Defensive"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XSES",
    "currency": "SGD",
    "ticker": "579",
    "company": "Oceanus",
    "asof_date": "2026-04-23",
    "industry": "Consumer Defensive",
    "sector": "Food Distribution",
    "market_cap_display": "77.3M",
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
          "score_pca": 63.620071684587806,
          "score_pca_percentile": 63.620071684587806,
          "rank_pca": 204,
          "total": 558,
          "adv_notional_sgd": 47916.0,
          "adv_volume_shares": 15972000.0,
          "free_float_shares": 25139287902.0,
          "turnover_ratio": 0.0006353401919045336,
          "votes": 39.0,
          "trades": 39.0,
          "spread_pct": 0.30258302583025826,
          "spread_ticks": 1.0,
          "amihud": 0.0,
          "volatility": 2.7426497078697025
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5109076623997986,
          "loadings": {
            "log_adv": 0.5575994937617748,
            "log_trades": 0.5107044624337473,
            "log_turnover": 0.5147554098844859,
            "neg_spread": 0.3681520629045082,
            "neg_amihud": 0.049046400472583296,
            "neg_vol": -0.15921411300937574
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
          "peer_median_adv": 2888.75,
          "peer_median_score_pca": 38.35125448028674,
          "peer_median_trades": 3.5,
          "peer_median_volatility": 0.05575276166213932,
          "peer_median_spread_pct": 0.05082876306240727,
          "peer_median_spread_ticks": 2.8363636363636364,
          "peer_median_amihud": 3.7215915460089113e-06,
          "peer_median_turnover_ratio": 4.337893011572195e-05,
          "target_vs_peer": {
            "score_pca_delta": 25.27,
            "adv_delta_pct": 1558.7,
            "trades_delta_pct": 1014.29,
            "volatility_delta_pct": -4819.31,
            "spread_pct_delta_pct": -495.3,
            "spread_ticks_delta_pct": -64.74,
            "amihud_delta_pct": 100.0,
            "turnover_ratio_delta_pct": 1364.63
          }
        },
        "peer_liquidity": [
          {
            "ticker": "579",
            "score_pca": 63.620071684587806,
            "rank_pca": 204,
            "adv": 47916.0,
            "trades": 39.0,
            "volatility": 2.7426497078697025,
            "spread_pct": 0.30258302583025826,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0006353401919045336,
            "is_target": true
          },
          {
            "ticker": "5EV",
            "score_pca": 29.56989247311828,
            "rank_pca": 394,
            "adv": 350.00000000000006,
            "trades": 1.0,
            "volatility": 0.0,
            "spread_pct": 0.04236669101533969,
            "spread_ticks": 2.9,
            "amihud": 4.1407867494824197e-05,
            "turnover_ratio": 3.5922760375028443e-05,
            "is_target": false
          },
          {
            "ticker": "AAJ",
            "score_pca": 16.93548387096774,
            "rank_pca": 464,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.08695652173913052,
            "spread_ticks": 2.0,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "K03",
            "score_pca": 41.03942652329749,
            "rank_pca": 330,
            "adv": 3780.0,
            "trades": 3.0,
            "volatility": 0.0,
            "spread_pct": 0.05929083510947486,
            "spread_ticks": 10.928571428571429,
            "amihud": 4.483902788987523e-06,
            "turnover_ratio": 0.0008780989575710947,
            "is_target": false
          },
          {
            "ticker": "BAC",
            "score_pca": 1.2544802867383513,
            "rank_pca": 552,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 1.002375296912114,
            "spread_ticks": 42.2,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "MV4",
            "score_pca": 46.59498207885305,
            "rank_pca": 299,
            "adv": 11340.0,
            "trades": 8.0,
            "volatility": 0.47283807074884654,
            "spread_pct": 0.03927492447129913,
            "spread_ticks": 2.3636363636363638,
            "amihud": 0.0,
            "turnover_ratio": 5.083509985641545e-05,
            "is_target": false
          },
          {
            "ticker": "BNE",
            "score_pca": 64.69534050179212,
            "rank_pca": 198,
            "adv": 153560.0,
            "trades": 15.0,
            "volatility": 0.44350385202581016,
            "spread_pct": 0.025700442384664023,
            "spread_ticks": 2.772727272727273,
            "amihud": 1.8258259427956635e-07,
            "turnover_ratio": 0.004375998245212165,
            "is_target": false
          },
          {
            "ticker": "5JS",
            "score_pca": 35.66308243727598,
            "rank_pca": 360,
            "adv": 1997.5,
            "trades": 6.0,
            "volatility": 0.11150552332427864,
            "spread_pct": 0.017361111111111126,
            "spread_ticks": 1.5,
            "amihud": 1.1508638671903082e-05,
            "turnover_ratio": 1.1851434143432567e-05,
            "is_target": false
          },
          {
            "ticker": "BEW",
            "score_pca": 42.831541218637994,
            "rank_pca": 320,
            "adv": 10240.0,
            "trades": 4.0,
            "volatility": 0.14781092304856708,
            "spread_pct": 0.06506215286961126,
            "spread_ticks": 8.2,
            "amihud": 2.9592803030303005e-06,
            "turnover_ratio": 0.00021016908365491393,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Food Distribution",
          "sector_count": 6,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.29402090701850314,
              "median": 0.12799295118592058,
              "min": 0.0,
              "max": 6.608197362010048,
              "p5": 0.0,
              "p95": 1.0322674825326292,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 4040503.0774088367,
              "median": 18930.5,
              "min": 0.0,
              "max": 295171716.0,
              "p5": 0.0,
              "p95": 14505938.399999982,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10962241037493935,
              "median": 0.02650228383196805,
              "min": 0.00035714437390094487,
              "max": 1.2400835073068897,
              "p5": 0.003383064075278625,
              "p95": 0.5412542973226377,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.008497145842047926,
              "median": 0.0003960011244902274,
              "min": 0.0,
              "max": 2.0598510315733964,
              "p5": 0.0,
              "p95": 0.018071973134697862,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0009883847991368087,
              "median": 1.4696261200608526e-08,
              "min": 0.0,
              "max": 0.4166666666666667,
              "p5": 0.0,
              "p95": 3.1424421620499895e-05,
              "count": 429
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 570.5806451612904,
              "median": 9.5,
              "min": 0.0,
              "max": 18452.0,
              "p5": 0.0,
              "p95": 2930.149999999998,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5596558380579695,
              "median": 0.0,
              "min": 0.0,
              "max": 2.7426497078697025,
              "p5": 0.0,
              "p95": 2.2108086110218057,
              "count": 6
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 6930810.333333333,
              "median": 2065.0,
              "min": 0.0,
              "max": 41532816.0,
              "p5": 0.0,
              "p95": 31161591.0,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.25038666806083776,
              "median": 0.07312367842430269,
              "min": 0.008747637758709261,
              "max": 1.002375296912114,
              "p5": 0.01715240107286687,
              "p95": 0.82742722914165,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002156052503719678,
              "median": 0.000335631476139781,
              "min": 0.0,
              "max": 0.01138695311246741,
              "p5": 0.0,
              "p95": 0.008759739573743331,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.147334386006048e-05,
              "median": 2.2427539727088605e-06,
              "min": 0.0,
              "max": 4.1407867494824197e-05,
              "p5": 2.40773464529831e-10,
              "p95": 3.586927278894868e-05,
              "count": 4
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 631.5,
              "median": 2.0,
              "min": 0.0,
              "max": 3746.0,
              "p5": 0.0,
              "p95": 2819.25,
              "count": 6
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 22658.4375,
              "median": 2888.75,
              "min": 0.0,
              "max": 153560.0,
              "p5": 0.0,
              "p95": 103782.99999999993,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 4.625,
              "median": 3.5,
              "min": 0.0,
              "max": 15.0,
              "p5": 0.0,
              "p95": 12.549999999999997,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.1469572961434378,
              "median": 0.05575276166213932,
              "min": 0.0,
              "max": 0.47283807074884654,
              "p5": 0.0,
              "p95": 0.4625710941957838,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.16729849695159307,
              "median": 0.05082876306240727,
              "min": 0.017361111111111126,
              "max": 1.002375296912114,
              "p5": 0.02027987705685464,
              "p95": 0.6819787256015692,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 9.108116883116883,
              "median": 2.8363636363636364,
              "min": 1.5,
              "max": 42.2,
              "p5": 1.675,
              "p95": 31.25499999999999,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.0090378642170779e-05,
              "median": 3.7215915460089113e-06,
              "min": 0.0,
              "max": 4.1407867494824197e-05,
              "p5": 4.5645648569891586e-08,
              "p95": 3.3933060289093916e-05,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0006953594476016312,
              "median": 4.337893011572195e-05,
              "min": 0.0,
              "max": 0.004375998245212165,
              "p5": 0.0,
              "p95": 0.0031517334945377886,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.0,
            "market": -0.011715696470211423,
            "sector": 0.007246376811594235,
            "peers": 0.0,
            "vs_market": 0.011715696470211423,
            "vs_sector": -0.007246376811594235,
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
          "score_pca": 32.97491039426524,
          "score_pca_percentile": 32.97491039426524,
          "rank_pca": 375,
          "total": 558,
          "adv_notional_sgd": 20722.5,
          "adv_volume_shares": 6907500.0,
          "free_float_shares": 25139287902.0,
          "turnover_ratio": 0.00027476911943279277,
          "votes": 17.0,
          "trades": 17.0,
          "spread_pct": 0.2857142857142857,
          "spread_ticks": 1.0,
          "amihud": 0.0,
          "volatility": 3.4532593299664014
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5360361818397192,
          "loadings": {
            "log_adv": 0.5373534125243321,
            "log_trades": 0.49066103140209394,
            "log_turnover": 0.48974838567041096,
            "neg_spread": 0.4103719262186198,
            "neg_amihud": 0.14732156444191852,
            "neg_vol": 0.20134751020839428
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
          "peer_median_adv": 4349.25,
          "peer_median_score_pca": 44.623655913978496,
          "peer_median_trades": 3.5,
          "peer_median_volatility": 0.39072314311727363,
          "peer_median_spread_pct": 0.04541000431901244,
          "peer_median_spread_ticks": 2.9361702127659575,
          "peer_median_amihud": 1.9190573947769654e-07,
          "peer_median_turnover_ratio": 0.00011365097372690881,
          "target_vs_peer": {
            "score_pca_delta": -11.65,
            "adv_delta_pct": 376.5,
            "trades_delta_pct": 385.71,
            "volatility_delta_pct": -783.81,
            "spread_pct_delta_pct": -529.19,
            "spread_ticks_delta_pct": -65.94,
            "amihud_delta_pct": 100.0,
            "turnover_ratio_delta_pct": 141.77
          }
        },
        "peer_liquidity": [
          {
            "ticker": "579",
            "score_pca": 32.97491039426524,
            "rank_pca": 375,
            "adv": 20722.5,
            "trades": 17.0,
            "volatility": 3.4532593299664014,
            "spread_pct": 0.2857142857142857,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.00027476911943279277,
            "is_target": true
          },
          {
            "ticker": "5EV",
            "score_pca": 40.86021505376344,
            "rank_pca": 331,
            "adv": 990.0,
            "trades": 2.0,
            "volatility": 0.21364231984589913,
            "spread_pct": 0.04511278195488726,
            "spread_ticks": 3.0,
            "amihud": 1.3711778417660721e-06,
            "turnover_ratio": 0.00010776828112508533,
            "is_target": false
          },
          {
            "ticker": "AAJ",
            "score_pca": 45.51971326164875,
            "rank_pca": 305,
            "adv": 2692.5,
            "trades": 5.0,
            "volatility": 0.5048875444164648,
            "spread_pct": 0.0721649484536083,
            "spread_ticks": 1.6470588235294117,
            "amihud": 0.0,
            "turnover_ratio": 0.00041214349229156777,
            "is_target": false
          },
          {
            "ticker": "K03",
            "score_pca": 21.50537634408602,
            "rank_pca": 439,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.5502058346197309,
            "spread_pct": 0.06451612903225803,
            "spread_ticks": 11.8,
            "amihud": 2.322019663060132e-05,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "BAC",
            "score_pca": 2.1505376344086025,
            "rank_pca": 547,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.977578475336323,
            "spread_ticks": 41.0,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "MV4",
            "score_pca": 44.086021505376344,
            "rank_pca": 313,
            "adv": 6468.0,
            "trades": 4.0,
            "volatility": 0.3781757712160045,
            "spread_pct": 0.041899441340782155,
            "spread_ticks": 2.6206896551724137,
            "amihud": 5.234177082679043e-08,
            "turnover_ratio": 2.824172214245303e-05,
            "is_target": false
          },
          {
            "ticker": "BNE",
            "score_pca": 63.620071684587806,
            "rank_pca": 204,
            "adv": 60579.0,
            "trades": 16.0,
            "volatility": 0.5008308862438721,
            "spread_pct": 0.02833734939759037,
            "spread_ticks": 2.872340425531915,
            "amihud": 1.9190573947769654e-07,
            "turnover_ratio": 0.0017914634649991061,
            "is_target": false
          },
          {
            "ticker": "5JS",
            "score_pca": 62.00716845878136,
            "rank_pca": 213,
            "adv": 39440.0,
            "trades": 21.0,
            "volatility": 0.2271711755401496,
            "spread_pct": 0.017316017316017333,
            "spread_ticks": 1.434782608695652,
            "amihud": 9.901772405469945e-08,
            "turnover_ratio": 0.00023400278478947706,
            "is_target": false
          },
          {
            "ticker": "BEW",
            "score_pca": 45.16129032258064,
            "rank_pca": 307,
            "adv": 6006.0,
            "trades": 3.0,
            "volatility": 0.4032705150185427,
            "spread_pct": 0.04570722668313762,
            "spread_ticks": 6.166666666666667,
            "amihud": 7.981212126043261e-07,
            "turnover_ratio": 0.0001195336663287323,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Food Distribution",
          "sector_count": 6,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6508818825268847,
              "median": 0.37636549800762253,
              "min": 0.0,
              "max": 9.165151389911681,
              "p5": 0.03406439854584801,
              "p95": 2.18214876993533,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3102945.3169128834,
              "median": 11809.25,
              "min": 0.0,
              "max": 255589391.20000002,
              "p5": 0.0,
              "p95": 12635258.149999961,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10690813564218452,
              "median": 0.03195239175916152,
              "min": 0.00024245657871967925,
              "max": 1.2394366197183098,
              "p5": 0.003329744753170141,
              "p95": 0.49255127041658764,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003898044759690269,
              "median": 0.00021506029331885872,
              "min": 0.0,
              "max": 0.659152330103487,
              "p5": 0.0,
              "p95": 0.011486748035937303,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.2052199673926166e-05,
              "median": 1.2628553387181644e-07,
              "min": 0.0,
              "max": 0.004342162396873648,
              "p5": 0.0,
              "p95": 0.00010566629384610838,
              "count": 544
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 467.90860215053766,
              "median": 6.0,
              "min": 0.0,
              "max": 11222.0,
              "p5": 0.0,
              "p95": 2744.599999999995,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.8511377277779829,
              "median": 0.4448594411179333,
              "min": 0.0,
              "max": 3.4532593299664014,
              "p5": 0.05341057996147478,
              "p95": 2.727495956129734,
              "count": 6
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 543194.1666666666,
              "median": 1841.25,
              "min": 0.0,
              "max": 3234760.0,
              "p5": 0.0,
              "p95": 2431250.625,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.24184241159815198,
              "median": 0.06834053874293317,
              "min": 0.00596784909754957,
              "max": 0.977578475336323,
              "p5": 0.015754082311883993,
              "p95": 0.8046124279308137,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0003132980100074359,
              "median": 0.00019126870027893906,
              "min": 0.0,
              "max": 0.0010851071671951697,
              "p5": 0.0,
              "p95": 0.0009168662484692692,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.918603626349504e-06,
              "median": 1.6436593801274125e-09,
              "min": 0.0,
              "max": 2.322019663060132e-05,
              "p5": 0.0,
              "p95": 1.8850392872834265e-05,
              "count": 5
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 221.16666666666666,
              "median": 3.5,
              "min": 0.0,
              "max": 1303.0,
              "p5": 0.0,
              "p95": 981.5,
              "count": 6
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 14521.9375,
              "median": 4349.25,
              "min": 0.0,
              "max": 60579.0,
              "p5": 0.0,
              "p95": 53180.34999999999,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 6.375,
              "median": 3.5,
              "min": 0.0,
              "max": 21.0,
              "p5": 0.0,
              "p95": 19.249999999999996,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3472730058625829,
              "median": 0.39072314311727363,
              "min": 0.0,
              "max": 0.5502058346197309,
              "p5": 0.0747748119460647,
              "p95": 0.5343444330485878,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1615790461893255,
              "median": 0.04541000431901244,
              "min": 0.017316017316017333,
              "max": 0.977578475336323,
              "p5": 0.021173483544567898,
              "p95": 0.6606837409273725,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 8.817692272449507,
              "median": 2.9361702127659575,
              "min": 1.434782608695652,
              "max": 41.0,
              "p5": 1.509079283887468,
              "p95": 30.779999999999987,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.676108702761558e-06,
              "median": 1.9190573947769654e-07,
              "min": 0.0,
              "max": 2.322019663060132e-05,
              "p5": 1.5702531248037132e-08,
              "p95": 1.6665490993950728e-05,
              "count": 7
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0003366441764595527,
              "median": 0.00011365097372690881,
              "min": 0.0,
              "max": 0.0017914634649991061,
              "p5": 0.0,
              "p95": 0.001308701474551467,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.0,
            "market": 0.016798120393960447,
            "sector": 0.0003016628288661227,
            "peers": 0.0005395985411023041,
            "vs_market": -0.016798120393960447,
            "vs_sector": -0.0003016628288661227,
            "vs_peers": -0.0005395985411023041
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 27.77777777777778,
          "score_pca_percentile": 27.77777777777778,
          "rank_pca": 404,
          "total": 558,
          "adv_notional_sgd": 15482.800000000001,
          "adv_volume_shares": 4048000.0,
          "free_float_shares": 25139287902.0,
          "turnover_ratio": 0.00016102285855431705,
          "votes": 18.0,
          "trades": 18.0,
          "spread_pct": 0.2857142857142857,
          "spread_ticks": 1.0,
          "amihud": 0.0,
          "volatility": 3.120920276004439
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.567749759800654,
          "loadings": {
            "log_adv": 0.5120153489037889,
            "log_trades": 0.46005733203910826,
            "log_turnover": 0.4680418716577407,
            "neg_spread": 0.42842121132764416,
            "neg_amihud": 0.25514516706223234,
            "neg_vol": 0.24182752016353978
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
          "peer_median_adv": 6441.0,
          "peer_median_score_pca": 42.74193548387097,
          "peer_median_trades": 3.0,
          "peer_median_volatility": 0.3851725106394073,
          "peer_median_spread_pct": 0.04245511988212189,
          "peer_median_spread_ticks": 2.89010989010989,
          "peer_median_amihud": 5.573241221861141e-07,
          "peer_median_turnover_ratio": 0.0001492102067321911,
          "target_vs_peer": {
            "score_pca_delta": -14.96,
            "adv_delta_pct": 140.4,
            "trades_delta_pct": 500.0,
            "volatility_delta_pct": -710.27,
            "spread_pct_delta_pct": -572.98,
            "spread_ticks_delta_pct": -65.4,
            "amihud_delta_pct": 100.0,
            "turnover_ratio_delta_pct": 7.92
          }
        },
        "peer_liquidity": [
          {
            "ticker": "579",
            "score_pca": 27.77777777777778,
            "rank_pca": 404,
            "adv": 15482.800000000001,
            "trades": 18.0,
            "volatility": 3.120920276004439,
            "spread_pct": 0.2857142857142857,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.00016102285855431705,
            "is_target": true
          },
          {
            "ticker": "5EV",
            "score_pca": 42.29390681003584,
            "rank_pca": 323,
            "adv": 3250.0,
            "trades": 2.0,
            "volatility": 0.4095750732573183,
            "spread_pct": 0.04376243250923562,
            "spread_ticks": 2.923076923076923,
            "amihud": 1.5519323109203255e-06,
            "turnover_ratio": 0.00035922760375028446,
            "is_target": false
          },
          {
            "ticker": "AAJ",
            "score_pca": 34.76702508960574,
            "rank_pca": 365,
            "adv": 322.0,
            "trades": 2.0,
            "volatility": 0.4817947226561548,
            "spread_pct": 0.0721649484536083,
            "spread_ticks": 1.6470588235294117,
            "amihud": 0.0,
            "turnover_ratio": 5.357482722453063e-05,
            "is_target": false
          },
          {
            "ticker": "K03",
            "score_pca": 21.14695340501792,
            "rank_pca": 441,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.3577961293687634,
            "spread_pct": 0.07447774750227061,
            "spread_ticks": 13.666666666666666,
            "amihud": 4.483902788987523e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "BAC",
            "score_pca": 2.5089605734767026,
            "rank_pca": 545,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.23255813953488363,
            "spread_pct": 0.9538461538461537,
            "spread_ticks": 38.75,
            "amihud": 1.1652610511027564e-05,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "MV4",
            "score_pca": 43.18996415770609,
            "rank_pca": 318,
            "adv": 9632.0,
            "trades": 4.0,
            "volatility": 0.4758686552636462,
            "spread_pct": 0.04114780725500816,
            "spread_ticks": 2.48,
            "amihud": 6.854235357943431e-07,
            "turnover_ratio": 4.0479801737516006e-05,
            "is_target": false
          },
          {
            "ticker": "BNE",
            "score_pca": 55.91397849462365,
            "rank_pca": 247,
            "adv": 36622.5,
            "trades": 12.0,
            "volatility": 0.7690970863326121,
            "spread_pct": 0.03870967741935487,
            "spread_ticks": 2.857142857142857,
            "amihud": 4.2922470857788506e-07,
            "turnover_ratio": 0.0015704692842774318,
            "is_target": false
          },
          {
            "ticker": "5JS",
            "score_pca": 61.111111111111114,
            "rank_pca": 218,
            "adv": 39440.0,
            "trades": 21.0,
            "volatility": 0.35176528766983317,
            "spread_pct": 0.01766692647440889,
            "spread_ticks": 1.4285714285714286,
            "amihud": 1.2690064118932018e-07,
            "turnover_ratio": 0.0002448455862398515,
            "is_target": false
          },
          {
            "ticker": "BEW",
            "score_pca": 52.32974910394266,
            "rank_pca": 267,
            "adv": 18143.5,
            "trades": 5.0,
            "volatility": 0.3607699480214963,
            "spread_pct": 0.024210379852511496,
            "spread_ticks": 3.24,
            "amihud": 4.1818139809959624e-07,
            "turnover_ratio": 0.00036385522607756976,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Food Distribution",
          "sector_count": 6,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6901665209178499,
              "median": 0.4572607987302596,
              "min": 0.0,
              "max": 7.957548658045471,
              "p5": 0.1555406459927586,
              "p95": 2.2155172716379976,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3239680.530581935,
              "median": 11930.4,
              "min": 0.0,
              "max": 285980477.7,
              "p5": 0.0,
              "p95": 13584595.799999997,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09908096010890495,
              "median": 0.0295413398861675,
              "min": 0.0002652156920799096,
              "max": 1.3542204201990415,
              "p5": 0.003566278539362127,
              "p95": 0.48340715372179116,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00582116312399345,
              "median": 0.0003017604147856788,
              "min": 0.0,
              "max": 1.9774569903104608,
              "p5": 0.0,
              "p95": 0.010301631636607375,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.1812678862742594e-05,
              "median": 1.4133756633122515e-07,
              "min": 0.0,
              "max": 0.0007493839420353828,
              "p5": 0.0,
              "p95": 4.525046554154886e-05,
              "count": 554
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 460.921146953405,
              "median": 6.5,
              "min": 0.0,
              "max": 11380.0,
              "p5": 0.0,
              "p95": 2625.0499999999943,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.8262774175403802,
              "median": 0.38368560131304086,
              "min": 0.23255813953488363,
              "max": 3.120920276004439,
              "p5": 0.2631736457563433,
              "p95": 2.461138887667368,
              "count": 6
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 576055.7999999999,
              "median": 1786.0,
              "min": 0.0,
              "max": 3437280.0,
              "p5": 0.0,
              "p95": 2581830.7,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.2393297632677973,
              "median": 0.07332134797793946,
              "min": 0.006013011581230107,
              "max": 0.9538461538461537,
              "p5": 0.015450366813231486,
              "p95": 0.7868131868131867,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00027188857576227626,
              "median": 0.00010729884288942384,
              "min": 0.0,
              "max": 0.0010575061650445253,
              "p5": 0.0,
              "p95": 0.0008829365247209651,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.948453841695498e-06,
              "median": 7.771048750789497e-07,
              "min": 0.0,
              "max": 1.1652610511027564e-05,
              "p5": 0.0,
              "p95": 9.860433580517554e-06,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 204.16666666666666,
              "median": 2.0,
              "min": 0.0,
              "max": 1203.0,
              "p5": 0.0,
              "p95": 906.75,
              "count": 6
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 13426.25,
              "median": 6441.0,
              "min": 0.0,
              "max": 39440.0,
              "p5": 0.0,
              "p95": 38453.875,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 5.75,
              "median": 3.0,
              "min": 0.0,
              "max": 21.0,
              "p5": 0.0,
              "p95": 17.849999999999994,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.42990313026308846,
              "median": 0.3851725106394073,
              "min": 0.23255813953488363,
              "max": 0.7690970863326121,
              "p5": 0.274280641382116,
              "p95": 0.6685412590458519,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15824825916406893,
              "median": 0.04245511988212189,
              "min": 0.01766692647440889,
              "max": 0.9538461538461537,
              "p5": 0.019957135156744802,
              "p95": 0.6460672116257942,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 8.374064587373411,
              "median": 2.89010989010989,
              "min": 1.4285714285714286,
              "max": 38.75,
              "p5": 1.5050420168067227,
              "p95": 29.970833333333317,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.4185219868245694e-06,
              "median": 5.573241221861141e-07,
              "min": 0.0,
              "max": 1.1652610511027564e-05,
              "p5": 4.441522441626206e-08,
              "p95": 9.143562808313546e-06,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00032905654116339804,
              "median": 0.0001492102067321911,
              "min": 0.0,
              "max": 0.0015704692842774318,
              "p5": 0.0,
              "p95": 0.0011481543639074794,
              "count": 8
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": -0.25,
            "market": 0.02790713775377296,
            "sector": -0.021208618095032272,
            "peers": -0.019454165967596526,
            "vs_market": -0.27790713775377296,
            "vs_sector": -0.22879138190496773,
            "vs_peers": -0.23054583403240347
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 27.419354838709676,
          "score_pca_percentile": 27.419354838709676,
          "rank_pca": 406,
          "total": 558,
          "adv_notional_sgd": 14817.800000000001,
          "adv_volume_shares": 3912950.0,
          "free_float_shares": 25139287902.0,
          "turnover_ratio": 0.00015565078912552246,
          "votes": 20.0,
          "trades": 20.0,
          "spread_pct": 0.2857142857142857,
          "spread_ticks": 1.0,
          "amihud": 0.0,
          "volatility": 2.7987656009192503
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.5788009429857448,
          "loadings": {
            "log_adv": 0.500847177713575,
            "log_trades": 0.44611519479780626,
            "log_turnover": 0.4544114066104936,
            "neg_spread": 0.43393735987004023,
            "neg_amihud": 0.2653009531737179,
            "neg_vol": 0.2914744981010696
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
          "peer_median_adv": 4134.3,
          "peer_median_score_pca": 42.473118279569896,
          "peer_median_trades": 3.75,
          "peer_median_volatility": 0.4314172426852355,
          "peer_median_spread_pct": 0.043049268292213824,
          "peer_median_spread_ticks": 2.828231081409724,
          "peer_median_amihud": 5.97390629482763e-07,
          "peer_median_turnover_ratio": 0.0001767364753074821,
          "target_vs_peer": {
            "score_pca_delta": -15.05,
            "adv_delta_pct": 258.4,
            "trades_delta_pct": 433.33,
            "volatility_delta_pct": -548.74,
            "spread_pct_delta_pct": -563.69,
            "spread_ticks_delta_pct": -64.64,
            "amihud_delta_pct": 100.0,
            "turnover_ratio_delta_pct": -11.93
          }
        },
        "peer_liquidity": [
          {
            "ticker": "579",
            "score_pca": 27.419354838709676,
            "rank_pca": 406,
            "adv": 14817.800000000001,
            "trades": 20.0,
            "volatility": 2.7987656009192503,
            "spread_pct": 0.2857142857142857,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.00015565078912552246,
            "is_target": true
          },
          {
            "ticker": "5EV",
            "score_pca": 38.35125448028674,
            "rank_pca": 345,
            "adv": 1796.5,
            "trades": 2.0,
            "volatility": 0.47528205800493795,
            "spread_pct": 0.04480366203690172,
            "spread_ticks": 3.0,
            "amihud": 8.876855423676506e-07,
            "turnover_ratio": 0.0001939829060251536,
            "is_target": false
          },
          {
            "ticker": "AAJ",
            "score_pca": 47.67025089605735,
            "rank_pca": 293,
            "adv": 4963.6,
            "trades": 5.0,
            "volatility": 0.5589526956369737,
            "spread_pct": 0.04576788118485425,
            "spread_ticks": 1.118139534883721,
            "amihud": 2.614830271367073e-07,
            "turnover_ratio": 0.0007754956240750809,
            "is_target": false
          },
          {
            "ticker": "K03",
            "score_pca": 22.043010752688172,
            "rank_pca": 436,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.2671275842055639,
            "spread_pct": 0.08405548195529945,
            "spread_ticks": 15.45,
            "amihud": 4.118751853438371e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "BAC",
            "score_pca": 3.046594982078853,
            "rank_pca": 542,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.16444343748524362,
            "spread_pct": 0.8964394637917583,
            "spread_ticks": 45.25,
            "amihud": 5.826305255513782e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "MV4",
            "score_pca": 37.634408602150536,
            "rank_pca": 349,
            "adv": 3305.0,
            "trades": 2.5,
            "volatility": 0.387552427365533,
            "spread_pct": 0.0338983050847458,
            "spread_ticks": 2.111111111111111,
            "amihud": 4.7600913937547603e-07,
            "turnover_ratio": 1.4322587657958322e-05,
            "is_target": false
          },
          {
            "ticker": "BNE",
            "score_pca": 46.59498207885305,
            "rank_pca": 299,
            "adv": 10787.5,
            "trades": 5.0,
            "volatility": 0.7595425110413606,
            "spread_pct": 0.04129487454752593,
            "spread_ticks": 2.784751636503658,
            "amihud": 7.187721195900501e-07,
            "turnover_ratio": 0.0005242734287333342,
            "is_target": false
          },
          {
            "ticker": "5JS",
            "score_pca": 59.49820788530465,
            "rank_pca": 227,
            "adv": 23930.75,
            "trades": 14.0,
            "volatility": 0.3232273457019771,
            "spread_pct": 0.017634558484613018,
            "spread_ticks": 1.3872229465449806,
            "amihud": 2.050928748966355e-07,
            "turnover_ratio": 0.0001594900445898106,
            "is_target": false
          },
          {
            "ticker": "BEW",
            "score_pca": 54.3010752688172,
            "rank_pca": 256,
            "adv": 23888.25,
            "trades": 7.0,
            "volatility": 0.5640802608446208,
            "spread_pct": 0.023522536334945148,
            "spread_ticks": 2.8717105263157894,
            "amihud": 4.0982991571725074e-07,
            "turnover_ratio": 0.0004794482220877724,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Food Distribution",
          "sector_count": 6,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6942568396270915,
              "median": 0.44098857700559946,
              "min": 0.0,
              "max": 6.936569757452167,
              "p5": 0.15200414164246542,
              "p95": 2.1348110223568884,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2585991.139840956,
              "median": 11889.75,
              "min": 0.0,
              "max": 246202433.5,
              "p5": 0.0,
              "p95": 10511060.3125,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09513490142064546,
              "median": 0.028697502776803503,
              "min": 0.00027281479518183793,
              "max": 1.267605633802817,
              "p5": 0.003578612812111497,
              "p95": 0.48213174723043983,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003254557846793642,
              "median": 0.0002686096118065866,
              "min": 0.0,
              "max": 0.856898029134533,
              "p5": 0.0,
              "p95": 0.007039283413825809,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.853095912889193e-06,
              "median": 1.7425132770987974e-07,
              "min": 0.0,
              "max": 0.0006620397444526588,
              "p5": 0.0,
              "p95": 4.1873119589947175e-05,
              "count": 556
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 376.6173835125448,
              "median": 6.75,
              "min": 0.0,
              "max": 10053.0,
              "p5": 0.0,
              "p95": 2025.224999999998,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.75676661188325,
              "median": 0.37565517652623426,
              "min": 0.16444343748524362,
              "max": 2.7987656009192503,
              "p5": 0.19011447416532368,
              "p95": 2.238812374598681,
              "count": 6
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 393746.44166666665,
              "median": 3380.05,
              "min": 0.0,
              "max": 2340900.75,
              "p5": 0.0,
              "p95": 1759380.0125,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.22707380511113037,
              "median": 0.06491168157007685,
              "min": 0.0056620559836826154,
              "max": 0.8964394637917583,
              "p5": 0.015447457496987392,
              "p95": 0.7437581692723901,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00030642969289305824,
              "median": 0.00017481684757533804,
              "min": 0.0,
              "max": 0.0007754956240750809,
              "p5": 0.0,
              "p95": 0.0007599839275894587,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.8495045867737268e-06,
              "median": 5.745842847521789e-07,
              "min": 0.0,
              "max": 5.826305255513782e-06,
              "p5": 7.00460546462667e-10,
              "p95": 5.399416904994929e-06,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 162.5,
              "median": 3.5,
              "min": 0.0,
              "max": 948.0,
              "p5": 0.0,
              "p95": 716.0,
              "count": 6
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 8583.95,
              "median": 4134.3,
              "min": 0.0,
              "max": 23930.75,
              "p5": 0.0,
              "p95": 23915.875,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 4.4375,
              "median": 3.75,
              "min": 0.0,
              "max": 14.0,
              "p5": 0.0,
              "p95": 11.549999999999997,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.43752604003577633,
              "median": 0.4314172426852355,
              "min": 0.16444343748524362,
              "max": 0.7595425110413606,
              "p5": 0.20038288883735572,
              "p95": 0.6911307234725016,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.14842709542758045,
              "median": 0.043049268292213824,
              "min": 0.017634558484613018,
              "max": 0.8964394637917583,
              "p5": 0.019695350732229264,
              "p95": 0.6121050701489973,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 9.246616969419907,
              "median": 2.828231081409724,
              "min": 1.118139534883721,
              "max": 45.25,
              "p5": 1.212318728965162,
              "p95": 34.819999999999986,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.6129912160044905e-06,
              "median": 5.97390629482763e-07,
              "min": 2.050928748966355e-07,
              "max": 5.826305255513782e-06,
              "p5": 2.2482942818066064e-07,
              "p95": 5.228661564787387e-06,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00026837660164613875,
              "median": 0.0001767364753074821,
              "min": 0.0,
              "max": 0.0007754956240750809,
              "p5": 0.0,
              "p95": 0.0006875678557054694,
              "count": 8
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": -0.3999999999999999,
            "market": 0.12521619674203666,
            "sector": -0.021256389208513915,
            "peers": -0.02315895893469011,
            "vs_market": -0.5252161967420366,
            "vs_sector": -0.378743610791486,
            "vs_peers": -0.3768410410653098
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Near-term tradability looks firmer, with a 1D score of 63.6 compared with a peer median of 38.4. That matters because today’s screen looks better than the longer-term profile.",
        "market_comparison": "Price was flat compared with peers on the day. That points to a quiet tape rather than a price move driving access."
      },
      "30d": {
        "liquidity": "Monthly tradability remains weak, with a 1M score of 33.0 compared with a peer median of 44.6. That keeps access below the peer group on the most relevant recent horizon.",
        "market_comparison": "The stock was flat over 1M, compared with peers up 0.1% and the market up 1.7%. That leaves liquidity without much help from recent price momentum."
      },
      "3m": {
        "liquidity": "Tradability stayed weak over 3M, with a score of 27.8 compared with a peer median of 42.7. That suggests the accessibility gap is not just a short-term issue.",
        "market_comparison": "The stock fell 25.0% over 3M compared with peers down 1.9%. That matters because weaker relative performance can make trading conditions feel thinner."
      },
      "6m": {
        "liquidity": "Six-month tradability is weak and broadly stable at a low level, with a score of 27.4 compared with a peer median of 42.5. That indicates below-peer access has persisted over time.",
        "market_comparison": "The stock fell 40.0% over 6M compared with peers down 2.3%. That wider drawdown reinforces the weaker trading backdrop around the name."
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
          "median": 0.19671155730271822,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "19.7%",
          "display_range": null,
          "display_text": "19.7%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 19.7,
          "plain_english": "Market explains about 19.7% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.6775063150291983,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "67.8%",
          "display_range": null,
          "display_text": "67.8%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 67.8,
          "plain_english": "Sector explains about 67.8% of price moves in the current state."
        },
        "company_share": {
          "median": 0.12578212766808342,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "12.6%",
          "display_range": null,
          "display_text": "12.6%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 12.6,
          "plain_english": "Company-specific explains about 12.6% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 0.9878371145382926,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.99",
          "display_range": null,
          "display_text": "0.99",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Moderate",
          "plain_english": "Moderate market link: a 1% market move has lined up with about a 0.99% stock move in the same direction in this state.",
          "value_num": 0.99
        },
        "beta_stock_lag": {
          "median": 0.9218360282423448,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.92",
          "display_range": null,
          "display_text": "0.92",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 0.92
        },
        "beta_sector": {
          "median": 15.236300065976343,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "15.24",
          "display_range": null,
          "display_text": "15.24",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Very high",
          "plain_english": "Very high sector link: a 1% sector move has lined up with about a 15.24% stock move in the same direction in this state. The multiplier is unusually large and comes from only 251 trading days of history.",
          "value_num": 15.24
        },
        "beta_market_lag": {
          "median": -32.533859625287285,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-32.53",
          "display_range": null,
          "display_text": "-32.53",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -32.53
        },
        "beta_sector_lag": {
          "median": -23.294779861337833,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-23.29",
          "display_range": null,
          "display_text": "-23.29",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -23.29
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
          "period_label": "2025-04-28 to 2025-04-30",
          "n_obs": 3,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.6808400393811039,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "68.1%",
            "display_range": null,
            "display_text": "68.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
            "kind": "share_pct",
            "value_pct": 68.1,
            "plain_english": "Company-specific explains about 68.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.10747784530518784,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "10.7%",
              "display_range": null,
              "display_text": "10.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
              "kind": "share_pct",
              "value_pct": 10.7,
              "plain_english": "Market explains about 10.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.21168211531370837,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "21.2%",
              "display_range": null,
              "display_text": "21.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
              "kind": "share_pct",
              "value_pct": 21.2,
              "plain_english": "Sector explains about 21.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6808400393811039,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "68.1%",
              "display_range": null,
              "display_text": "68.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
              "kind": "share_pct",
              "value_pct": 68.1,
              "plain_english": "Company-specific explains about 68.1% of price moves in the current state."
            }
          },
          "summary": "Apr: Still clearly company-driven, though based on only 3 trading days."
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
            "median": 0.6135593099793761,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "61.4%",
            "display_range": null,
            "display_text": "61.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 61.4,
            "plain_english": "Company-specific explains about 61.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2604304767114263,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.0%",
              "display_range": null,
              "display_text": "26.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 26.0,
              "plain_english": "Market explains about 26.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.12601021330919765,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "12.6%",
              "display_range": null,
              "display_text": "12.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 12.6,
              "plain_english": "Sector explains about 12.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6135593099793761,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.4%",
              "display_range": null,
              "display_text": "61.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 61.4,
              "plain_english": "Company-specific explains about 61.4% of price moves in the current state."
            }
          },
          "summary": "May: Still clearly company-driven."
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
            "median": 0.6715995423629046,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "67.2%",
            "display_range": null,
            "display_text": "67.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 67.2,
            "plain_english": "Company-specific explains about 67.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2094725799282419,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.9%",
              "display_range": null,
              "display_text": "20.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 20.9,
              "plain_english": "Market explains about 20.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.11892787770885348,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "11.9%",
              "display_range": null,
              "display_text": "11.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 11.9,
              "plain_english": "Sector explains about 11.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6715995423629046,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "67.2%",
              "display_range": null,
              "display_text": "67.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 67.2,
              "plain_english": "Company-specific explains about 67.2% of price moves in the current state."
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
            "median": 0.6235136841327797,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "62.4%",
            "display_range": null,
            "display_text": "62.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
            "kind": "share_pct",
            "value_pct": 62.4,
            "plain_english": "Company-specific explains about 62.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.24691591286075637,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "24.7%",
              "display_range": null,
              "display_text": "24.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
              "kind": "share_pct",
              "value_pct": 24.7,
              "plain_english": "Market explains about 24.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.12957040300646389,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "13.0%",
              "display_range": null,
              "display_text": "13.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
              "kind": "share_pct",
              "value_pct": 13.0,
              "plain_english": "Sector explains about 13.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6235136841327797,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "62.4%",
              "display_range": null,
              "display_text": "62.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
              "kind": "share_pct",
              "value_pct": 62.4,
              "plain_english": "Company-specific explains about 62.4% of price moves in the current state."
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
            "median": 0.5744940719747174,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "57.4%",
            "display_range": null,
            "display_text": "57.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 57.4,
            "plain_english": "Company-specific explains about 57.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.36537368502395107,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.5%",
              "display_range": null,
              "display_text": "36.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 36.5,
              "plain_english": "Market explains about 36.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.060132243001331506,
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
              "median": 0.5744940719747174,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "57.4%",
              "display_range": null,
              "display_text": "57.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 57.4,
              "plain_english": "Company-specific explains about 57.4% of price moves in the current state."
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
            "median": 0.569719406641122,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "57.0%",
            "display_range": null,
            "display_text": "57.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 57.0,
            "plain_english": "Company-specific explains about 57.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2397324461796855,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "24.0%",
              "display_range": null,
              "display_text": "24.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 24.0,
              "plain_english": "Market explains about 24.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.19054814717919258,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "19.1%",
              "display_range": null,
              "display_text": "19.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 19.1,
              "plain_english": "Sector explains about 19.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.569719406641122,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "57.0%",
              "display_range": null,
              "display_text": "57.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 57.0,
              "plain_english": "Company-specific explains about 57.0% of price moves in the current state."
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
            "median": 0.5661041246896418,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "56.6%",
            "display_range": null,
            "display_text": "56.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 56.6,
            "plain_english": "Company-specific explains about 56.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3254941131966797,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "32.5%",
              "display_range": null,
              "display_text": "32.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 32.5,
              "plain_english": "Market explains about 32.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.10840176211367857,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "10.8%",
              "display_range": null,
              "display_text": "10.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 10.8,
              "plain_english": "Sector explains about 10.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5661041246896418,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.6%",
              "display_range": null,
              "display_text": "56.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 56.6,
              "plain_english": "Company-specific explains about 56.6% of price moves in the current state."
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
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.45974450789075616,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "46.0%",
            "display_range": null,
            "display_text": "46.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 46.0,
            "plain_english": "Company-specific explains about 46.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.4466716044739061,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.7%",
              "display_range": null,
              "display_text": "44.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 44.7,
              "plain_english": "Market explains about 44.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.09358388763533772,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "9.4%",
              "display_range": null,
              "display_text": "9.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 9.4,
              "plain_english": "Sector explains about 9.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.45974450789075616,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.0%",
              "display_range": null,
              "display_text": "46.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 46.0,
              "plain_english": "Company-specific explains about 46.0% of price moves in the current state."
            }
          },
          "summary": "Nov: Mostly company-driven."
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
            "median": 0.6872568292805256,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "68.7%",
            "display_range": null,
            "display_text": "68.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 68.7,
            "plain_english": "Company-specific explains about 68.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.20241674427181505,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.2%",
              "display_range": null,
              "display_text": "20.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 20.2,
              "plain_english": "Market explains about 20.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.11032642644765941,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "11.0%",
              "display_range": null,
              "display_text": "11.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 11.0,
              "plain_english": "Sector explains about 11.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6872568292805256,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "68.7%",
              "display_range": null,
              "display_text": "68.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 68.7,
              "plain_english": "Company-specific explains about 68.7% of price moves in the current state."
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
            "median": 0.735420780866817,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "73.5%",
            "display_range": null,
            "display_text": "73.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 73.5,
            "plain_english": "Company-specific explains about 73.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.15854925435054204,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "15.9%",
              "display_range": null,
              "display_text": "15.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 15.9,
              "plain_english": "Market explains about 15.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.10602996478264107,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "10.6%",
              "display_range": null,
              "display_text": "10.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 10.6,
              "plain_english": "Sector explains about 10.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.735420780866817,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "73.5%",
              "display_range": null,
              "display_text": "73.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 73.5,
              "plain_english": "Company-specific explains about 73.5% of price moves in the current state."
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
            "median": 0.48803397487736605,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "48.8%",
            "display_range": null,
            "display_text": "48.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
            "kind": "share_pct",
            "value_pct": 48.8,
            "plain_english": "Company-specific explains about 48.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3003018761511369,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "30.0%",
              "display_range": null,
              "display_text": "30.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 30.0,
              "plain_english": "Market explains about 30.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.21166414897149713,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "21.2%",
              "display_range": null,
              "display_text": "21.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 21.2,
              "plain_english": "Sector explains about 21.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.48803397487736605,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.8%",
              "display_range": null,
              "display_text": "48.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 48.8,
              "plain_english": "Company-specific explains about 48.8% of price moves in the current state."
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
            "median": 0.6970510110907701,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "69.7%",
            "display_range": null,
            "display_text": "69.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 69.7,
            "plain_english": "Company-specific explains about 69.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.19590182105558127,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "19.6%",
              "display_range": null,
              "display_text": "19.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 19.6,
              "plain_english": "Market explains about 19.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.10704716785364865,
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
              "median": 0.6970510110907701,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "69.7%",
              "display_range": null,
              "display_text": "69.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 69.7,
              "plain_english": "Company-specific explains about 69.7% of price moves in the current state."
            }
          },
          "summary": "Mar: Still clearly company-driven."
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-23",
          "n_obs": 16,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.44534389500887483,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "44.5%",
            "display_range": null,
            "display_text": "44.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
            "kind": "share_pct",
            "value_pct": 44.5,
            "plain_english": "Market explains about 44.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.44534389500887483,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.5%",
              "display_range": null,
              "display_text": "44.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 44.5,
              "plain_english": "Market explains about 44.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1597894022866437,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "16.0%",
              "display_range": null,
              "display_text": "16.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 16.0,
              "plain_english": "Sector explains about 16.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.39486670270448154,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "39.5%",
              "display_range": null,
              "display_text": "39.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 39.5,
              "plain_english": "Company-specific explains about 39.5% of price moves in the current state."
            }
          },
          "summary": "Apr: More mixed, though market-driven still has the largest share."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5220883534136547,
          "expected_duration_days": 16.25,
          "current_probability": 1.0,
          "n_days_effective": 130.0,
          "volatility": {
            "median": 0.10979379719259863,
            "low": 0.10979379719259863,
            "high": 0.10979379719259863
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": null
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4779116465863454,
          "expected_duration_days": 14.875,
          "current_probability": 0.0,
          "n_days_effective": 119.0,
          "volatility": {
            "median": 0.1909448702461609,
            "low": 0.1909448702461609,
            "high": 0.1909448702461609
          },
          "volatility_label": "High Volatility",
          "current_probability_display": 0.0
        }
      ],
      "transitions": {
        "mean": [
          [
            0.9457364341085271,
            0.05426356589147287
          ],
          [
            0.06722689075630252,
            0.9327731092436975
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            122.0,
            7.0
          ],
          [
            8.0,
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
        "market_link_display": "0.99",
        "sector_link_display": "15.24",
        "market_link_explainer": "Moderate market link. A 1% market move has lined up with about a 0.99% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 15.24% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "0.92",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "Low Volatility",
        "dominant_driver": "sector",
        "dominant_driver_label": "Sector",
        "driver_share_pct": 67.8,
        "driver_share_display": "67.8%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 251 trading days relative to the 252-day target.",
        "history_days": 251,
        "history_limited": true,
        "volatility_label": "Low Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.9457364341085271,
        "effective_days": 130.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 16.2 days.",
        "expected_duration_days": 16.2
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
          "pct_time": 0.5220883534136547,
          "expected_duration_days": 16.25,
          "current_probability": 1.0,
          "n_days_effective": 130.0,
          "volatility": {
            "median": 0.10979379719259863,
            "low": 0.10979379719259863,
            "high": 0.10979379719259863
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4779116465863454,
          "expected_duration_days": 14.875,
          "current_probability": 0.0,
          "n_days_effective": 119.0,
          "volatility": {
            "median": 0.1909448702461609,
            "low": 0.1909448702461609,
            "high": 0.1909448702461609
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.9457364341085271,
          0.05426356589147287
        ],
        [
          0.06722689075630252,
          0.9327731092436975
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.9457364341085271,
            0.05426356589147287
          ],
          [
            0.06722689075630252,
            0.9327731092436975
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            122.0,
            7.0
          ],
          [
            8.0,
            111.0
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
        "text": "Liquidity score: 27.4 — Weak",
        "bg": "bg-red-500/20",
        "textColor": "text-red-400"
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
        "text": "Liquidity Health: WEAK",
        "bg": "bg-red-500/20",
        "textColor": "text-red-400",
        "dot": "bg-red-500"
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
    "liq_subtitle": "Structural liquidity is weak for size, and the displayed book is notably thinner on the bid side.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "One-month returns are flat at 0.0%, compared with peers at 0.1% and ahead of the market at 1.7%.",
    "perf_insight": "The return backdrop is firmer than the liquidity profile, because the six-month liquidity score is 27.4 against a 42.5 peer median. With sector factors driving 67.8% of the tape, recent price action looks more tied to the group than to company-specific news.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Sector moves are setting the tone, with 67.8% of current trading explained by the sector.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly sector-driven, accounting for about 67.8% of price changes. Other influences are market 19.7%, and company-specific 12.6%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 19.7%, sector 67.8%, and company-specific 12.6%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has shifted from company-driven to market-driven over Feb to Apr."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 19.7%, sector 67.8%, and company-specific 12.6%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "That matters because external moves are driving the tape while displayed bid depth is only 0.18x of ask depth, so selling pressure can feel sharper even with a 1-tick spread.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: sector factors are leading, accounting for 67.8% of recent price moves.",
      "Monthly change: the pattern has moved from clearly company-driven in February and March to a more mixed setup in April."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Current market state is Low Volatility. The market has been in this state about 52.2% of the time. Based on 251 trading days relative to the 252-day target. This state looks more persistent, with a typical run length of about 16.2 days.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on Apr 23, 2025 to Apr 23, 2026 (254 trading days • 9,281 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on the displayed order book.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is thin enough that downside execution may feel worse than the monthly liquidity score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The live book looks weaker than the spread suggests, because bid depth is only 0.18x of ask depth despite a 1-tick spread.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 12.8% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "The displayed book is the key execution watchpoint, with very limited buy-side depth despite a tight quoted spread.",
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
    "intraday_insight": "Execution risk is concentrated in the live book rather than the quoted spread, because the spread is 1 tick while displayed bid depth is only 0.18x of ask depth. That matters because downside trading can feel materially worse than the headline spread implies.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "The main market-state signal is thin buy-side depth rather than spread stress.",
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
    "exec_subtitle": "Liquidity screens below peers for its size, and the live book shows very thin buy-side support.",
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
        "value": "27.4/100",
        "sub": "Peer median 42.5 (-15.1 pts)",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "S$14.8K",
        "sub": "Peer median S$4.1K",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "28.57%",
        "sub": "1.00 ticks; peers 4.30%",
        "interp": {
          "text": "Wider",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity looks weak for size, with a 6M score of 27.4 compared with a peer median of 42.5. The live book adds to that concern because displayed bid depth is only 0.18x of ask depth, even though the spread is 1 tick. That means execution can feel worse on the downside than the quoted spread alone would suggest.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "0.003",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "40.00%",
        "note": "1.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.18x",
        "note": "Bid depth / ask depth on the displayed order book",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-20.00% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-33.11% with 39.1% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-33.11% with 15.7% fill.",
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
        "value": "27",
        "suffix": "/100",
        "bar_pct": 27,
        "color_value": "text-red-400",
        "color_bar": "bg-red-500",
        "subtext": "Rank 406/558",
        "interpretation": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Trading Cost (Spread)",
        "tooltip": {
          "title": "Trading Cost (Spread)",
          "body": "The gap between best buy and sell prices in the selected window."
        },
        "value": "28.57",
        "suffix": "%",
        "bar_pct": 100,
        "color_value": "text-red-400",
        "color_bar": "bg-red-500",
        "subtext": "28.57% • 1.00 ticks vs peers 4.30%",
        "interpretation": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Average Traded Volume",
        "tooltip": {
          "title": "Average Traded Volume",
          "body": "Average daily trading value in local currency for the selected window."
        },
        "value": "14.8K",
        "value_prefix": "S$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Peer median S$4.1K",
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
        "value": "67.8",
        "suffix": "sector",
        "bar_pct": 68,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 19.7% • Company 12.6%",
        "interpretation": {
          "text": "Sector",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is weak for the company’s size, with a 6M liquidity score of 27.4 compared with a peer median of 42.5. That leaves access screening below comparable names on a sustained basis.",
      "Recent price performance is steadier than the liquidity profile, with a 1M return of +0.0% compared with +0.1% for peers and +1.7% for the market. That gives the tape a firmer return backdrop even as trading access remains weak.",
      "The immediate execution watchpoint is the buy side of the book, because displayed bid depth is only 0.18x of ask depth even with a 1-tick spread. With sector factors driving 67.8% of the tape, broader moves can translate into sharper downside trading conditions."
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
      "overall": "6M liquidity is weak: score 27.4 vs peer median 42.5 (-15.1 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "strengths": [
        "6M score 27.4 vs peer median 42.5 (-15.1 pts)."
      ],
      "concerns": [],
      "peer_context": "Primary-period score gap vs peers: -15.1 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is -40.0%, worse than market, sector, and peers, which suggests weaker price performance than comparable names.",
        "vs_market": "Worse than market: -40.0% vs market 12.5%.",
        "vs_sector": "Worse than sector: -40.0% vs sector -2.1%.",
        "vs_peers": "Worse than peers: -40.0% vs peers -2.3%."
      },
      "adv": {
        "insight": "ADV is S$14.8K, better than market, sector, and peers, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: S$14.8K vs market S$11.9K.",
        "vs_sector": "Better than sector: S$14.8K vs sector S$3.4K.",
        "vs_peers": "Better than peers: S$14.8K vs peers S$4.1K."
      },
      "spread": {
        "insight": "Spread is 28.57%, worse than market, sector, and peers, which suggests trading costs are heavier than comparable names.",
        "vs_market": "Worse than market: 28.57% vs market 2.87%.",
        "vs_sector": "Worse than sector: 28.57% vs sector 6.49%.",
        "vs_peers": "Worse than peers: 28.57% vs peers 4.30%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.02%, worse than market, sector, and peers, which shows a lighter free-float turnover profile than comparable names.",
        "vs_market": "Worse than market: 0.02% vs market 0.03%.",
        "vs_sector": "Worse than sector: 0.02% vs sector 0.02%.",
        "vs_peers": "Worse than peers: 0.02% vs peers 0.02%."
      },
      "volatility": {
        "insight": "Volatility is 279.88%, worse than market, sector, and peers, which suggests day-to-day price swings are heavier than comparable names.",
        "vs_market": "Worse than market: 279.88% vs market 44.10%.",
        "vs_sector": "Worse than sector: 279.88% vs sector 37.57%.",
        "vs_peers": "Worse than peers: 279.88% vs peers 43.14%."
      },
      "trades": {
        "insight": "Trades is 20, better than market, sector, and peers, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 20 vs market 7.",
        "vs_sector": "Better than sector: 20 vs sector 4.",
        "vs_peers": "Better than peers: 20 vs peers 4."
      },
      "amihud": {
        "insight": "Price impact is 0.00e+00, better than market, sector, and peers, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 0.00e+00 vs market 1.74e-07.",
        "vs_sector": "Better than sector: 0.00e+00 vs sector 5.75e-07.",
        "vs_peers": "Better than peers: 0.00e+00 vs peers 5.97e-07."
      }
    },
    "performance": {
      "overall": "Performance is weak relative to comparison groups. Recent price performance is stronger than the main comparison groups, so the tape has a firmer return backdrop than peers. Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "conclusion": "The recent move looks mainly sector-linked, with weak underlying liquidity and thin buy-side depth limiting confirmation from trading conditions."
    },
    "drivers": {
      "overall": "Sector factors are the main force behind the stock now, accounting for 67.8% of recent price moves. That matters because the stock is reacting more to the wider group than to company-specific news, while the displayed book remains vulnerable on the bid side.",
      "beta": "The current trading picture looks mixed rather than fully settled. The spread is only 1 tick, but bid depth is just 0.18x of ask depth, which means price moves can feel less stable when sellers press into a thin buy side.",
      "rolling_change": "Feb: mostly sector. | Mar: Still clearly company-driven. | Apr: More mixed, though market-driven still has the largest share."
    },
    "regime": {
      "overall": "Short expected duration points to a short-lived state rather than a durable market backdrop.",
      "current": "The stock is currently in a Low Volatility state, which signals a calmer tape than a stressed trading backdrop. That gives the market a more orderly starting point today.",
      "transitions": "This state looks fairly settled rather than fleeting, with a typical run length of about 16.2 days. Even so, the read is mixed enough that the backdrop may be viewed as stable, not immovable.",
      "trading_implications": "This state looks more persistent, with a typical run length of about 16.2 days."
    },
    "execution": {
      "overall": "The displayed book reads as thin buy-side because bid depth is only 0.18x of ask depth while the spread remains 1 tick. That matters because the quoted spread looks orderly, but the available buy-side support is still light.",
      "concern": "The clearest stress point is the imbalance in displayed depth, with far less size on the bid than on the ask. The trade-size history spans 254 trading days and 9,281 trades, so the current book may be read as a live imbalance rather than a full picture of typical size available.",
      "peer_context": "The current book reinforces the weaker monthly liquidity standing because the 6M liquidity score of 27.4 sits 15.1 points below the peer median of 42.5, and today’s bid-light depth makes that weaker baseline feel more exposed in the market."
    },
    "trader_composition": {
      "overall": "By trade count and value, flow looks mainly retail-like.",
      "retail_heavy": "Retail-like trades account for 98.5% of trade count and 63.9% of trade value, compared with institution-like trades at 0.1% of count and 5.5% of value. That split shows broad participation, but most of the tape is still being carried by smaller tickets rather than larger investors.",
      "institutional_gap": "Institution-like participation is minimal at 0.1% of trade count and 5.5% of trade value, leaving limited evidence of a strong larger-investor presence in the flow.",
      "peer_comparison": "Peer trader comparison is available in this report."
    },
    "price_moving": {
      "overall": "Price-moving trades account for 12.8% of total trades. Trade count and trade value both point in the same direction, with retail-like activity at 98.5% of count and 63.9% of value. That gives the flow signal a clear retail-like bias rather than a split read. The flow mix is one-sided toward retail-like activity, while institution-like trades contribute only 5.5% of value. That leaves price moves more exposed to shifts in smaller-ticket participation.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity appears low and does not look material to the current trading picture. With short interest stable and down 100% year on year, the main liquidity constraints look more tied to the stock’s underlying trading conditions than to short pressure.",
      "level": "Low short interest",
      "correlation": "No clear relationship (correlation undefined)",
      "trend": "The short trend looks stable rather than building. That matters because there is no sign that rising short activity is adding a separate source of pressure to trading.",
      "peaks": "2 notable peak days identified."
    },
    "intraday": {
      "overall": "Session split is open 6.7%, continuous 89.6%, and close 0.9%. Current trading concentration score is 0.487.",
      "hhi_interpretation": "The concentration score of 0.487 suggests trading is reasonably spread through the day rather than confined to a narrow window. That supports a more usable intraday market, even if the underlying flow base is still retail-like.",
      "best_times": "The continuous session is the clearest source of liquidity because it accounts for nearly nine-tenths of activity. The open and close contribute little, so access looks thinner around the auction windows.",
      "peer_ranking": "Relative to peers, the session profile points to liquidity that is available through the day rather than concentrated at the edges, which supports a steadier intraday trading pattern."
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
        "579",
        "5EV",
        "AAJ",
        "K03",
        "BAC",
        "MV4",
        "BNE",
        "5JS",
        "BEW"
      ],
      "scores": [
        27.419354838709676,
        38.35125448028674,
        47.67025089605735,
        22.043010752688172,
        3.046594982078853,
        37.634408602150536,
        46.59498207885305,
        59.49820788530465,
        54.3010752688172
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
        14817.800000000001,
        1796.5,
        4963.6,
        0.0,
        0.0,
        3305.0,
        10787.5,
        23930.75,
        23888.25
      ],
      "total": 558
    },
    "market_comparison": {
      "sector_name": "Food Distribution",
      "sector_count": 6,
      "market_count": 558,
      "company": {
        "volatility": 2.7987656009192503,
        "adv": 14817.800000000001,
        "spread_pct": 0.2857142857142857,
        "turnover_ratio": 0.00015565078912552246,
        "amihud": 0.0,
        "trades": 20.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6942568396270915,
          "median": 0.44098857700559946,
          "min": 0.0,
          "max": 6.936569757452167,
          "p5": 0.15200414164246542,
          "p95": 2.1348110223568884,
          "count": 558
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 2585991.139840956,
          "median": 11889.75,
          "min": 0.0,
          "max": 246202433.5,
          "p5": 0.0,
          "p95": 10511060.3125,
          "count": 558
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.09513490142064546,
          "median": 0.028697502776803503,
          "min": 0.00027281479518183793,
          "max": 1.267605633802817,
          "p5": 0.003578612812111497,
          "p95": 0.48213174723043983,
          "count": 556
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.003254557846793642,
          "median": 0.0002686096118065866,
          "min": 0.0,
          "max": 0.856898029134533,
          "p5": 0.0,
          "p95": 0.007039283413825809,
          "count": 551
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 9.853095912889193e-06,
          "median": 1.7425132770987974e-07,
          "min": 0.0,
          "max": 0.0006620397444526588,
          "p5": 0.0,
          "p95": 4.1873119589947175e-05,
          "count": 556
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 376.6173835125448,
          "median": 6.75,
          "min": 0.0,
          "max": 10053.0,
          "p5": 0.0,
          "p95": 2025.224999999998,
          "count": 558
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.75676661188325,
          "median": 0.37565517652623426,
          "min": 0.16444343748524362,
          "max": 2.7987656009192503,
          "p5": 0.19011447416532368,
          "p95": 2.238812374598681,
          "count": 6
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 393746.44166666665,
          "median": 3380.05,
          "min": 0.0,
          "max": 2340900.75,
          "p5": 0.0,
          "p95": 1759380.0125,
          "count": 6
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.22707380511113037,
          "median": 0.06491168157007685,
          "min": 0.0056620559836826154,
          "max": 0.8964394637917583,
          "p5": 0.015447457496987392,
          "p95": 0.7437581692723901,
          "count": 6
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.00030642969289305824,
          "median": 0.00017481684757533804,
          "min": 0.0,
          "max": 0.0007754956240750809,
          "p5": 0.0,
          "p95": 0.0007599839275894587,
          "count": 6
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.8495045867737268e-06,
          "median": 5.745842847521789e-07,
          "min": 0.0,
          "max": 5.826305255513782e-06,
          "p5": 7.00460546462667e-10,
          "p95": 5.399416904994929e-06,
          "count": 6
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 162.5,
          "median": 3.5,
          "min": 0.0,
          "max": 948.0,
          "p5": 0.0,
          "p95": 716.0,
          "count": 6
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 8583.95,
          "median": 4134.3,
          "min": 0.0,
          "max": 23930.75,
          "p5": 0.0,
          "p95": 23915.875,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 4.4375,
          "median": 3.75,
          "min": 0.0,
          "max": 14.0,
          "p5": 0.0,
          "p95": 11.549999999999997,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.43752604003577633,
          "median": 0.4314172426852355,
          "min": 0.16444343748524362,
          "max": 0.7595425110413606,
          "p5": 0.20038288883735572,
          "p95": 0.6911307234725016,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.14842709542758045,
          "median": 0.043049268292213824,
          "min": 0.017634558484613018,
          "max": 0.8964394637917583,
          "p5": 0.019695350732229264,
          "p95": 0.6121050701489973,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 9.246616969419907,
          "median": 2.828231081409724,
          "min": 1.118139534883721,
          "max": 45.25,
          "p5": 1.212318728965162,
          "p95": 34.819999999999986,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.6129912160044905e-06,
          "median": 5.97390629482763e-07,
          "min": 2.050928748966355e-07,
          "max": 5.826305255513782e-06,
          "p5": 2.2482942818066064e-07,
          "p95": 5.228661564787387e-06,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.00026837660164613875,
          "median": 0.0001767364753074821,
          "min": 0.0,
          "max": 0.0007754956240750809,
          "p5": 0.0,
          "p95": 0.0006875678557054694,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": 0.0,
        "market": 0.016798120393960447,
        "sector": 0.0003016628288661227,
        "peers": 0.0005395985411023041
      },
      {
        "horizon": "3M",
        "stock": -0.25,
        "market": 0.02790713775377296,
        "sector": -0.021208618095032272,
        "peers": -0.019454165967596526
      },
      {
        "horizon": "6M",
        "stock": -0.3999999999999999,
        "market": 0.12521619674203666,
        "sector": -0.021256389208513915,
        "peers": -0.02315895893469011
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
      "share_market": 0.19671155730271822,
      "share_sector": 0.6775063150291983,
      "share_idio": 0.12578212766808342,
      "beta_market": 0.9878371145382926,
      "beta_sector": 15.236300065976343,
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
            "median": 0.19671155730271822,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "19.7%",
            "display_range": null,
            "display_text": "19.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 19.7,
            "plain_english": "Market explains about 19.7% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.6775063150291983,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "67.8%",
            "display_range": null,
            "display_text": "67.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 67.8,
            "plain_english": "Sector explains about 67.8% of price moves in the current state."
          },
          "company_share": {
            "median": 0.12578212766808342,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "12.6%",
            "display_range": null,
            "display_text": "12.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 12.6,
            "plain_english": "Company-specific explains about 12.6% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 0.9878371145382926,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.99",
            "display_range": null,
            "display_text": "0.99",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Moderate",
            "plain_english": "Moderate market link: a 1% market move has lined up with about a 0.99% stock move in the same direction in this state.",
            "value_num": 0.99
          },
          "beta_stock_lag": {
            "median": 0.9218360282423448,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.92",
            "display_range": null,
            "display_text": "0.92",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 0.92
          },
          "beta_sector": {
            "median": 15.236300065976343,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "15.24",
            "display_range": null,
            "display_text": "15.24",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Very high",
            "plain_english": "Very high sector link: a 1% sector move has lined up with about a 15.24% stock move in the same direction in this state. The multiplier is unusually large and comes from only 251 trading days of history.",
            "value_num": 15.24
          },
          "beta_market_lag": {
            "median": -32.533859625287285,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-32.53",
            "display_range": null,
            "display_text": "-32.53",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -32.53
          },
          "beta_sector_lag": {
            "median": -23.294779861337833,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-23.29",
            "display_range": null,
            "display_text": "-23.29",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -23.29
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
            "period_label": "2025-04-28 to 2025-04-30",
            "n_obs": 3,
            "partial_month": true,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.6808400393811039,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "68.1%",
              "display_range": null,
              "display_text": "68.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
              "kind": "share_pct",
              "value_pct": 68.1,
              "plain_english": "Company-specific explains about 68.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.10747784530518784,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "10.7%",
                "display_range": null,
                "display_text": "10.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
                "kind": "share_pct",
                "value_pct": 10.7,
                "plain_english": "Market explains about 10.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.21168211531370837,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "21.2%",
                "display_range": null,
                "display_text": "21.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
                "kind": "share_pct",
                "value_pct": 21.2,
                "plain_english": "Sector explains about 21.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6808400393811039,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "68.1%",
                "display_range": null,
                "display_text": "68.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
                "kind": "share_pct",
                "value_pct": 68.1,
                "plain_english": "Company-specific explains about 68.1% of price moves in the current state."
              }
            },
            "summary": "Apr: Still clearly company-driven, though based on only 3 trading days."
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
              "median": 0.6135593099793761,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.4%",
              "display_range": null,
              "display_text": "61.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 61.4,
              "plain_english": "Company-specific explains about 61.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2604304767114263,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.0%",
                "display_range": null,
                "display_text": "26.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 26.0,
                "plain_english": "Market explains about 26.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.12601021330919765,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "12.6%",
                "display_range": null,
                "display_text": "12.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 12.6,
                "plain_english": "Sector explains about 12.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6135593099793761,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "61.4%",
                "display_range": null,
                "display_text": "61.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 61.4,
                "plain_english": "Company-specific explains about 61.4% of price moves in the current state."
              }
            },
            "summary": "May: Still clearly company-driven."
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
              "median": 0.6715995423629046,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "67.2%",
              "display_range": null,
              "display_text": "67.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 67.2,
              "plain_english": "Company-specific explains about 67.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2094725799282419,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.9%",
                "display_range": null,
                "display_text": "20.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 20.9,
                "plain_english": "Market explains about 20.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.11892787770885348,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "11.9%",
                "display_range": null,
                "display_text": "11.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 11.9,
                "plain_english": "Sector explains about 11.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6715995423629046,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "67.2%",
                "display_range": null,
                "display_text": "67.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 67.2,
                "plain_english": "Company-specific explains about 67.2% of price moves in the current state."
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
              "median": 0.6235136841327797,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "62.4%",
              "display_range": null,
              "display_text": "62.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
              "kind": "share_pct",
              "value_pct": 62.4,
              "plain_english": "Company-specific explains about 62.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.24691591286075637,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "24.7%",
                "display_range": null,
                "display_text": "24.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
                "kind": "share_pct",
                "value_pct": 24.7,
                "plain_english": "Market explains about 24.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.12957040300646389,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "13.0%",
                "display_range": null,
                "display_text": "13.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
                "kind": "share_pct",
                "value_pct": 13.0,
                "plain_english": "Sector explains about 13.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6235136841327797,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "62.4%",
                "display_range": null,
                "display_text": "62.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
                "kind": "share_pct",
                "value_pct": 62.4,
                "plain_english": "Company-specific explains about 62.4% of price moves in the current state."
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
              "median": 0.5744940719747174,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "57.4%",
              "display_range": null,
              "display_text": "57.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 57.4,
              "plain_english": "Company-specific explains about 57.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.36537368502395107,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "36.5%",
                "display_range": null,
                "display_text": "36.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 36.5,
                "plain_english": "Market explains about 36.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.060132243001331506,
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
                "median": 0.5744940719747174,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "57.4%",
                "display_range": null,
                "display_text": "57.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 57.4,
                "plain_english": "Company-specific explains about 57.4% of price moves in the current state."
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
              "median": 0.569719406641122,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "57.0%",
              "display_range": null,
              "display_text": "57.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 57.0,
              "plain_english": "Company-specific explains about 57.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2397324461796855,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "24.0%",
                "display_range": null,
                "display_text": "24.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 24.0,
                "plain_english": "Market explains about 24.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.19054814717919258,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "19.1%",
                "display_range": null,
                "display_text": "19.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 19.1,
                "plain_english": "Sector explains about 19.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.569719406641122,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "57.0%",
                "display_range": null,
                "display_text": "57.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 57.0,
                "plain_english": "Company-specific explains about 57.0% of price moves in the current state."
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
              "median": 0.5661041246896418,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.6%",
              "display_range": null,
              "display_text": "56.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 56.6,
              "plain_english": "Company-specific explains about 56.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3254941131966797,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "32.5%",
                "display_range": null,
                "display_text": "32.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 32.5,
                "plain_english": "Market explains about 32.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.10840176211367857,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "10.8%",
                "display_range": null,
                "display_text": "10.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 10.8,
                "plain_english": "Sector explains about 10.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5661041246896418,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "56.6%",
                "display_range": null,
                "display_text": "56.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 56.6,
                "plain_english": "Company-specific explains about 56.6% of price moves in the current state."
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
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.45974450789075616,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.0%",
              "display_range": null,
              "display_text": "46.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 46.0,
              "plain_english": "Company-specific explains about 46.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.4466716044739061,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "44.7%",
                "display_range": null,
                "display_text": "44.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 44.7,
                "plain_english": "Market explains about 44.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.09358388763533772,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "9.4%",
                "display_range": null,
                "display_text": "9.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 9.4,
                "plain_english": "Sector explains about 9.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.45974450789075616,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "46.0%",
                "display_range": null,
                "display_text": "46.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 46.0,
                "plain_english": "Company-specific explains about 46.0% of price moves in the current state."
              }
            },
            "summary": "Nov: Mostly company-driven."
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
              "median": 0.6872568292805256,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "68.7%",
              "display_range": null,
              "display_text": "68.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 68.7,
              "plain_english": "Company-specific explains about 68.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.20241674427181505,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.2%",
                "display_range": null,
                "display_text": "20.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 20.2,
                "plain_english": "Market explains about 20.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.11032642644765941,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "11.0%",
                "display_range": null,
                "display_text": "11.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 11.0,
                "plain_english": "Sector explains about 11.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6872568292805256,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "68.7%",
                "display_range": null,
                "display_text": "68.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 68.7,
                "plain_english": "Company-specific explains about 68.7% of price moves in the current state."
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
              "median": 0.735420780866817,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "73.5%",
              "display_range": null,
              "display_text": "73.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 73.5,
              "plain_english": "Company-specific explains about 73.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.15854925435054204,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "15.9%",
                "display_range": null,
                "display_text": "15.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 15.9,
                "plain_english": "Market explains about 15.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.10602996478264107,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "10.6%",
                "display_range": null,
                "display_text": "10.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 10.6,
                "plain_english": "Sector explains about 10.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.735420780866817,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "73.5%",
                "display_range": null,
                "display_text": "73.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 73.5,
                "plain_english": "Company-specific explains about 73.5% of price moves in the current state."
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
              "median": 0.48803397487736605,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.8%",
              "display_range": null,
              "display_text": "48.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 48.8,
              "plain_english": "Company-specific explains about 48.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3003018761511369,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "30.0%",
                "display_range": null,
                "display_text": "30.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 30.0,
                "plain_english": "Market explains about 30.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.21166414897149713,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "21.2%",
                "display_range": null,
                "display_text": "21.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 21.2,
                "plain_english": "Sector explains about 21.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.48803397487736605,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "48.8%",
                "display_range": null,
                "display_text": "48.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 48.8,
                "plain_english": "Company-specific explains about 48.8% of price moves in the current state."
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
              "median": 0.6970510110907701,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "69.7%",
              "display_range": null,
              "display_text": "69.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 69.7,
              "plain_english": "Company-specific explains about 69.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.19590182105558127,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "19.6%",
                "display_range": null,
                "display_text": "19.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 19.6,
                "plain_english": "Market explains about 19.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.10704716785364865,
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
                "median": 0.6970510110907701,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "69.7%",
                "display_range": null,
                "display_text": "69.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 69.7,
                "plain_english": "Company-specific explains about 69.7% of price moves in the current state."
              }
            },
            "summary": "Mar: Still clearly company-driven."
          },
          {
            "month_key": "2026-04",
            "month_label": "April 2026",
            "month_short_label": "Apr",
            "period_label": "2026-04-01 to 2026-04-23",
            "n_obs": 16,
            "partial_month": false,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.44534389500887483,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.5%",
              "display_range": null,
              "display_text": "44.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 44.5,
              "plain_english": "Market explains about 44.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.44534389500887483,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "44.5%",
                "display_range": null,
                "display_text": "44.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
                "kind": "share_pct",
                "value_pct": 44.5,
                "plain_english": "Market explains about 44.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1597894022866437,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "16.0%",
                "display_range": null,
                "display_text": "16.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
                "kind": "share_pct",
                "value_pct": 16.0,
                "plain_english": "Sector explains about 16.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.39486670270448154,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "39.5%",
                "display_range": null,
                "display_text": "39.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
                "kind": "share_pct",
                "value_pct": 39.5,
                "plain_english": "Company-specific explains about 39.5% of price moves in the current state."
              }
            },
            "summary": "Apr: More mixed, though market-driven still has the largest share."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5220883534136547,
            "expected_duration_days": 16.25,
            "current_probability": 1.0,
            "n_days_effective": 130.0,
            "volatility": {
              "median": 0.10979379719259863,
              "low": 0.10979379719259863,
              "high": 0.10979379719259863
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": null
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4779116465863454,
            "expected_duration_days": 14.875,
            "current_probability": 0.0,
            "n_days_effective": 119.0,
            "volatility": {
              "median": 0.1909448702461609,
              "low": 0.1909448702461609,
              "high": 0.1909448702461609
            },
            "volatility_label": "High Volatility",
            "current_probability_display": 0.0
          }
        ],
        "transitions": {
          "mean": [
            [
              0.9457364341085271,
              0.05426356589147287
            ],
            [
              0.06722689075630252,
              0.9327731092436975
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              122.0,
              7.0
            ],
            [
              8.0,
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
          "market_link_display": "0.99",
          "sector_link_display": "15.24",
          "market_link_explainer": "Moderate market link. A 1% market move has lined up with about a 0.99% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 15.24% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "0.92",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "Low Volatility",
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "driver_share_pct": 67.8,
          "driver_share_display": "67.8%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 251 trading days relative to the 252-day target.",
          "history_days": 251,
          "history_limited": true,
          "volatility_label": "Low Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.9457364341085271,
          "effective_days": 130.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 16.2 days.",
          "expected_duration_days": 16.2
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
          "period_label": "2025-04-28 to 2025-04-30",
          "n_obs": 3,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Apr: Still clearly company-driven, though based on only 3 trading days.",
          "share_market": 0.10747784530518784,
          "share_sector": 0.21168211531370837,
          "share_company": 0.6808400393811039,
          "share_market_display": "10.7%",
          "share_sector_display": "21.2%",
          "share_company_display": "68.1%",
          "dominant_share_display": "68.1%"
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
          "summary": "May: Still clearly company-driven.",
          "share_market": 0.2604304767114263,
          "share_sector": 0.12601021330919765,
          "share_company": 0.6135593099793761,
          "share_market_display": "26.0%",
          "share_sector_display": "12.6%",
          "share_company_display": "61.4%",
          "dominant_share_display": "61.4%"
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
          "share_market": 0.2094725799282419,
          "share_sector": 0.11892787770885348,
          "share_company": 0.6715995423629046,
          "share_market_display": "20.9%",
          "share_sector_display": "11.9%",
          "share_company_display": "67.2%",
          "dominant_share_display": "67.2%"
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
          "share_market": 0.24691591286075637,
          "share_sector": 0.12957040300646389,
          "share_company": 0.6235136841327797,
          "share_market_display": "24.7%",
          "share_sector_display": "13.0%",
          "share_company_display": "62.4%",
          "dominant_share_display": "62.4%"
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
          "share_market": 0.36537368502395107,
          "share_sector": 0.060132243001331506,
          "share_company": 0.5744940719747174,
          "share_market_display": "36.5%",
          "share_sector_display": "6.0%",
          "share_company_display": "57.4%",
          "dominant_share_display": "57.4%"
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
          "share_market": 0.2397324461796855,
          "share_sector": 0.19054814717919258,
          "share_company": 0.569719406641122,
          "share_market_display": "24.0%",
          "share_sector_display": "19.1%",
          "share_company_display": "57.0%",
          "dominant_share_display": "57.0%"
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
          "share_market": 0.3254941131966797,
          "share_sector": 0.10840176211367857,
          "share_company": 0.5661041246896418,
          "share_market_display": "32.5%",
          "share_sector_display": "10.8%",
          "share_company_display": "56.6%",
          "dominant_share_display": "56.6%"
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
          "summary": "Nov: Mostly company-driven.",
          "share_market": 0.4466716044739061,
          "share_sector": 0.09358388763533772,
          "share_company": 0.45974450789075616,
          "share_market_display": "44.7%",
          "share_sector_display": "9.4%",
          "share_company_display": "46.0%",
          "dominant_share_display": "46.0%"
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
          "share_market": 0.20241674427181505,
          "share_sector": 0.11032642644765941,
          "share_company": 0.6872568292805256,
          "share_market_display": "20.2%",
          "share_sector_display": "11.0%",
          "share_company_display": "68.7%",
          "dominant_share_display": "68.7%"
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
          "share_market": 0.15854925435054204,
          "share_sector": 0.10602996478264107,
          "share_company": 0.735420780866817,
          "share_market_display": "15.9%",
          "share_sector_display": "10.6%",
          "share_company_display": "73.5%",
          "dominant_share_display": "73.5%"
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
          "share_market": 0.3003018761511369,
          "share_sector": 0.21166414897149713,
          "share_company": 0.48803397487736605,
          "share_market_display": "30.0%",
          "share_sector_display": "21.2%",
          "share_company_display": "48.8%",
          "dominant_share_display": "48.8%"
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
          "share_market": 0.19590182105558127,
          "share_sector": 0.10704716785364865,
          "share_company": 0.6970510110907701,
          "share_market_display": "19.6%",
          "share_sector_display": "10.7%",
          "share_company_display": "69.7%",
          "dominant_share_display": "69.7%"
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-23",
          "n_obs": 16,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Apr: More mixed, though market-driven still has the largest share.",
          "share_market": 0.44534389500887483,
          "share_sector": 0.1597894022866437,
          "share_company": 0.39486670270448154,
          "share_market_display": "44.5%",
          "share_sector_display": "16.0%",
          "share_company_display": "39.5%",
          "dominant_share_display": "44.5%"
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
          0.5220883534136547,
          0.4779116465863454
        ],
        "current_regime": 0,
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5220883534136547,
            "expected_duration_days": 16.25,
            "current_probability": 1.0,
            "n_days_effective": 130.0,
            "volatility": {
              "median": 0.10979379719259863,
              "low": 0.10979379719259863,
              "high": 0.10979379719259863
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4779116465863454,
            "expected_duration_days": 14.875,
            "current_probability": 0.0,
            "n_days_effective": 119.0,
            "volatility": {
              "median": 0.1909448702461609,
              "low": 0.1909448702461609,
              "high": 0.1909448702461609
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.9457364341085271,
            0.05426356589147287
          ],
          [
            0.06722689075630252,
            0.9327731092436975
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 0.002,
          "quantity": 157280000.0,
          "value": 314560.0
        },
        {
          "level": 2,
          "price": 0.001,
          "quantity": 76712200.0,
          "value": 76712.2
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.003,
          "quantity": 5203800.0,
          "value": 15611.4
        },
        {
          "level": 2,
          "price": 0.004,
          "quantity": 192616200.0,
          "value": 770464.8
        },
        {
          "level": 3,
          "price": 0.005,
          "quantity": 68531300.0,
          "value": 342656.5
        },
        {
          "level": 4,
          "price": 0.006,
          "quantity": 35985000.0,
          "value": 215910.0
        },
        {
          "level": 5,
          "price": 0.007,
          "quantity": 4940000.0,
          "value": 34580.0
        },
        {
          "level": 6,
          "price": 0.008,
          "quantity": 55995400.0,
          "value": 447963.2
        },
        {
          "level": 7,
          "price": 0.009,
          "quantity": 400000.0,
          "value": 3599.9999999999995
        },
        {
          "level": 8,
          "price": 0.01,
          "quantity": 11420000.0,
          "value": 114200.0
        },
        {
          "level": 9,
          "price": 0.011,
          "quantity": 484500.0,
          "value": 5329.5
        },
        {
          "level": 10,
          "price": 0.012,
          "quantity": 1250500.0,
          "value": 15006.0
        },
        {
          "level": 11,
          "price": 0.013,
          "quantity": 1700000.0,
          "value": 22100.0
        },
        {
          "level": 12,
          "price": 0.014,
          "quantity": 12000000.0,
          "value": 168000.0
        },
        {
          "level": 13,
          "price": 0.015,
          "quantity": 928000.0,
          "value": 13920.0
        },
        {
          "level": 14,
          "price": 0.019,
          "quantity": 500000.0,
          "value": 9500.0
        },
        {
          "level": 15,
          "price": 0.02,
          "quantity": 500000.0,
          "value": 10000.0
        },
        {
          "level": 16,
          "price": 0.022,
          "quantity": 300000.0,
          "value": 6600.0
        },
        {
          "level": 17,
          "price": 0.025,
          "quantity": 112000.0,
          "value": 2800.0
        },
        {
          "level": 18,
          "price": 0.033,
          "quantity": 200000.0,
          "value": 6600.0
        },
        {
          "level": 19,
          "price": 0.034,
          "quantity": 850000.0,
          "value": 28900.000000000004
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-04-23 08:57:26.584800000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 0.0025,
        "spread_pct": 0.4,
        "spread_ticks": 1.0,
        "tick_size": 0.001,
        "displayed_levels_per_side": 100,
        "bid_depth_notional_displayed": 391272.2,
        "ask_depth_notional_displayed": 2233741.4,
        "bid_depth_notional_top10": 391272.2,
        "ask_depth_notional_top10": 2233741.4,
        "bid_ask_depth_ratio": 0.1752
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 366,
        "history_limited": false,
        "trade_days_used": 254,
        "n_trades_used": 9281,
        "first_trade_date": "2025-04-23",
        "last_trade_date": "2026-04-23",
        "window_label": "Apr 23, 2025 to Apr 23, 2026",
        "window_short_label": "Apr 23, 2025 to Apr 23, 2026",
        "trade_days_label": "254 trading days",
        "trade_count_label": "9,281 trades",
        "window_detail_label": "254 trading days • 9,281 trades",
        "history_note": "Trade-size percentiles use Apr 23, 2025 to Apr 23, 2026 history (254 trading days • 9,281 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 3003.0,
            "impact_pct": -0.2,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.77,
            "pct_of_adv": 16.53
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 5751.9,
            "impact_pct": -0.2,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 1.47,
            "pct_of_adv": 31.66
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 42522.54,
            "impact_pct": -0.2,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 10.87,
            "pct_of_adv": 234.07
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
            "order_id": "8135244202717102080",
            "timestamp": "2026-04-22 22:59:06.118200000",
            "local_timestamp": "2026-04-23 06:59:06",
            "posted_price": 0.008,
            "size_shares": 23000000.0,
            "notional": 184000.0,
            "impact_pct": -0.2,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 47.03,
            "price_vs_mid_pct": 220.0,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "8136218919775183872",
            "timestamp": "2026-04-22 22:59:06.118200000",
            "local_timestamp": "2026-04-23 06:59:06",
            "posted_price": 0.008,
            "size_shares": 18000000.0,
            "notional": 144000.0,
            "impact_pct": -0.2,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 36.8,
            "price_vs_mid_pct": 220.0,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "8134056730159067136",
            "timestamp": "2026-04-22 22:59:06.118200000",
            "local_timestamp": "2026-04-23 06:59:06",
            "posted_price": 0.014,
            "size_shares": 10000000.0,
            "notional": 140000.0,
            "impact_pct": -0.2,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 35.78,
            "price_vs_mid_pct": 460.0,
            "executed_event_count": 0,
            "event_count": 5
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-04-23",
        "bucket_minutes": 30,
        "displayed_levels_per_side": 100,
        "tick_size": 0.001,
        "timezone": "SGT (UTC+8)",
        "session_label": "SGX continuous trading session",
        "bucket_label_basis": "bucket start time",
        "display_window_label": "SGX continuous trading session",
        "bucket_note": "Buckets cover the SGX continuous trading session (auctions excluded).",
        "reason": null,
        "rows": [
          {
            "bucket": "09:00",
            "spread_pct": 0.2857142857142857,
            "spread_ticks": 1.0,
            "bid_depth_notional": 424127.60000000003,
            "ask_depth_notional": 2192684.8,
            "mid_price": 0.0035
          },
          {
            "bucket": "09:30",
            "spread_pct": 0.2857142857142857,
            "spread_ticks": 1.0,
            "bid_depth_notional": 411122.60000000003,
            "ask_depth_notional": 2209115.8,
            "mid_price": 0.0035
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.2857142857142857,
            "spread_ticks": 1.0,
            "bid_depth_notional": 416022.60000000003,
            "ask_depth_notional": 2211515.8,
            "mid_price": 0.0035
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.2857142857142857,
            "spread_ticks": 1.0,
            "bid_depth_notional": 419022.60000000003,
            "ask_depth_notional": 2218515.8,
            "mid_price": 0.0035
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.2857142857142857,
            "spread_ticks": 1.0,
            "bid_depth_notional": 416722.60000000003,
            "ask_depth_notional": 2218515.8,
            "mid_price": 0.0035
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.2857142857142857,
            "spread_ticks": 1.0,
            "bid_depth_notional": 417722.60000000003,
            "ask_depth_notional": 2218515.8,
            "mid_price": 0.0035
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.2857142857142857,
            "spread_ticks": 1.0,
            "bid_depth_notional": 414822.3,
            "ask_depth_notional": 2214130.4000000004,
            "mid_price": 0.0035
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.2857142857142857,
            "spread_ticks": 1.0,
            "bid_depth_notional": 417822.0,
            "ask_depth_notional": 2214130.4000000004,
            "mid_price": 0.0035
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.2857142857142857,
            "spread_ticks": 1.0,
            "bid_depth_notional": 417822.0,
            "ask_depth_notional": 2218130.4000000004,
            "mid_price": 0.0035
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.2857142857142857,
            "spread_ticks": 1.0,
            "bid_depth_notional": 418522.0,
            "ask_depth_notional": 2218130.4000000004,
            "mid_price": 0.0035
          },
          {
            "bucket": "16:00",
            "spread_pct": 0.2857142857142857,
            "spread_ticks": 1.0,
            "bid_depth_notional": 421522.3,
            "ask_depth_notional": 2218130.4000000004,
            "mid_price": 0.0035
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.4,
            "spread_ticks": 1.0,
            "bid_depth_notional": 391272.2,
            "ask_depth_notional": 2233741.4000000004,
            "mid_price": 0.0025
          }
        ],
        "summary": {
          "median_spread_pct": 0.2857142857142857,
          "median_spread_ticks": 1.0,
          "median_bid_depth_notional": 417772.30000000005,
          "median_ask_depth_notional": 2218130.4000000004,
          "tightest_bucket": "09:00",
          "widest_bucket": "16:30",
          "deepest_bid_bucket": "09:00",
          "thinnest_bid_bucket": "16:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 275.2,
      "peers": [
        {
          "ticker": "BNE",
          "pct": 1221.2
        },
        {
          "ticker": "5JS",
          "pct": 2492.4
        },
        {
          "ticker": "BEW",
          "pct": 12310.7
        },
        {
          "ticker": "MV4",
          "pct": 14191.4
        },
        {
          "ticker": "AAJ",
          "pct": 39218.0
        },
        {
          "ticker": "5EV",
          "pct": 86580.1
        },
        {
          "ticker": "K03",
          "pct": null
        },
        {
          "ticker": "BAC",
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
          "n_trades": 16,
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
            "retail_max": 13500.0,
            "instit_min": 67500.0
          },
          "composition": {
            "retail_pct": 0.9375,
            "mixed_pct": 0.0625,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6388634969133097,
            "mixed_qty_pct": 0.3611365030866903,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6388642506078409,
            "mixed_notional_pct": 0.3611357493921591,
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
              "retail": 15,
              "mixed": 1,
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
            "avg": 2994.71875,
            "median": 1527.3000000000002
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "579",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.9375,
              "mixed_pct": 0.0625,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.6388634969133097,
              "mixed_qty_pct": 0.3611365030866903,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.6388642506078409,
              "mixed_notional_pct": 0.3611357493921591,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2994.71875,
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
              "ticker": "5JS",
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
              "avg_trade_size": 494.375,
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
              "ticker": "BEW",
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
              "avg_trade_size": 3416.6666666666665,
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
              "ticker": "MV4",
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
              "avg_trade_size": 2322.75,
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
              "ticker": "5EV",
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
              "avg_trade_size": 350.00000000000006,
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
              "ticker": "K03",
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
              "avg_trade_size": 1260.0,
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
              "ticker": "BNE",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.7777777777777778,
              "mixed_pct": 0.1111111111111111,
              "instit_pct": 0.1111111111111111,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.23209169054441262,
              "mixed_qty_pct": 0.2141833810888252,
              "instit_qty_pct": 0.5537249283667621,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.22841319812618385,
              "mixed_notional_pct": 0.2159418814978711,
              "instit_notional_pct": 0.555644920375945,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 16923.277777777777,
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
          "n_trades": 380,
          "n_runs": 0,
          "n_trade_days": 21,
          "first_trade_date": "2026-03-25",
          "last_trade_date": "2026-04-23",
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
            "retail_pct": 0.9631578947368421,
            "mixed_pct": 0.03684210526315789,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5949443020484947,
            "mixed_qty_pct": 0.4050556979515053,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.59836176977333,
            "mixed_notional_pct": 0.40163823022666995,
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
              "retail": 366,
              "mixed": 14,
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
            "avg": 1785.2063157894738,
            "median": 75.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "579",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.9631578947368421,
              "mixed_pct": 0.03684210526315789,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5949443020484947,
              "mixed_qty_pct": 0.4050556979515053,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.59836176977333,
              "mixed_notional_pct": 0.40163823022666995,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1785.2063157894738,
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
              "ticker": "AAJ",
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
              "avg_trade_size": 1018.0918604651164,
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
              "ticker": "5EV",
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
              "avg_trade_size": 2308.290566037736,
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
              "ticker": "K03",
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
              "avg_trade_size": 1062.625,
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
              "ticker": "BEW",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9647058823529412,
              "mixed_pct": 0.03529411764705882,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.7435755222776853,
              "mixed_qty_pct": 0.25642447772231464,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.7430558514339926,
              "mixed_notional_pct": 0.2569441485660074,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4141.870588235294,
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
              "ticker": "5JS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9330254041570438,
              "mixed_pct": 0.06697459584295612,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5779163182037051,
              "mixed_qty_pct": 0.4220836817962949,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5792847836789314,
              "mixed_notional_pct": 0.42071521632106856,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3820.9018475750577,
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
              "ticker": "MV4",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.927710843373494,
              "mixed_pct": 0.04819277108433735,
              "instit_pct": 0.024096385542168676,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.34686945500633715,
              "mixed_qty_pct": 0.19158428390367555,
              "instit_qty_pct": 0.4615462610899873,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.35416341769945603,
              "mixed_notional_pct": 0.19029454615507144,
              "instit_notional_pct": 0.45554203614547256,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 7223.487951807229,
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
              "ticker": "BNE",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8681318681318682,
              "mixed_pct": 0.1282051282051282,
              "instit_pct": 0.003663003663003663,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.535467100936394,
              "mixed_qty_pct": 0.4161160001252701,
              "instit_qty_pct": 0.048416898938335784,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5320639541165646,
              "mixed_notional_pct": 0.41641944725727226,
              "instit_notional_pct": 0.05151659862616317,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 6017.478021978022,
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
          "n_trades": 1755,
          "n_runs": 0,
          "n_trade_days": 63,
          "first_trade_date": "2026-01-22",
          "last_trade_date": "2026-04-23",
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
            "retail_pct": 0.9840455840455841,
            "mixed_pct": 0.015954415954415956,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6636326210509126,
            "mixed_qty_pct": 0.3363673789490874,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6640237520116362,
            "mixed_notional_pct": 0.33597624798836373,
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
              "retail": 1727,
              "mixed": 28,
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
            "avg": 1012.3790883190884,
            "median": 0.9
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "579",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.9840455840455841,
              "mixed_pct": 0.015954415954415956,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.6636326210509126,
              "mixed_qty_pct": 0.3363673789490874,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.6640237520116362,
              "mixed_notional_pct": 0.33597624798836373,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1012.3790883190884,
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
              "ticker": "AAJ",
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
              "avg_trade_size": 1086.169375,
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
              "ticker": "K03",
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
              "avg_trade_size": 1209.2,
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
              "ticker": "BAC",
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
              "avg_trade_size": 1620.05,
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
              "ticker": "5EV",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9852941176470589,
              "mixed_pct": 0.014705882352941176,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.9082789221997425,
              "mixed_qty_pct": 0.0917210778002575,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.9064772933178532,
              "mixed_notional_pct": 0.09352270668214673,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2921.7450980392155,
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
              "ticker": "5JS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9227188081936686,
              "mixed_pct": 0.07728119180633147,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5667988198414162,
              "mixed_qty_pct": 0.43320118015858383,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5676661339397834,
              "mixed_notional_pct": 0.4323338660602166,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4037.7034450651768,
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
              "ticker": "MV4",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9213483146067416,
              "mixed_pct": 0.07116104868913857,
              "instit_pct": 0.00749063670411985,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.47670349276058466,
              "mixed_qty_pct": 0.3150575264759029,
              "instit_qty_pct": 0.20823898076351244,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.48245192013893134,
              "mixed_notional_pct": 0.3152398909793525,
              "instit_notional_pct": 0.20230818888171614,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5056.252808988764,
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
              "ticker": "BNE",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8964028776978418,
              "mixed_pct": 0.10071942446043165,
              "instit_pct": 0.0028776978417266188,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5048385453804625,
              "mixed_qty_pct": 0.44840582662727924,
              "instit_qty_pct": 0.046755627992258325,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5159480057039524,
              "mixed_notional_pct": 0.43363857866441946,
              "instit_notional_pct": 0.050413415631628086,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4997.670503597123,
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
              "ticker": "BEW",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8900255754475703,
              "mixed_pct": 0.10997442455242967,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5613124171453823,
              "mixed_qty_pct": 0.4386875828546178,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5564744625992735,
              "mixed_notional_pct": 0.4435255374007266,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 6318.124040920716,
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
          "n_trades": 3855,
          "n_runs": 0,
          "n_trade_days": 126,
          "first_trade_date": "2025-10-23",
          "last_trade_date": "2026-04-23",
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
            "retail_pct": 0.9854734111543451,
            "mixed_pct": 0.014007782101167316,
            "instit_pct": 0.0005188067444876783,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6416509421951881,
            "mixed_qty_pct": 0.30952638276584493,
            "instit_qty_pct": 0.04882267503896695,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6391856173093445,
            "mixed_notional_pct": 0.306053446403431,
            "instit_notional_pct": 0.05476093628722439,
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
              "retail": 3799,
              "mixed": 54,
              "institutional": 2,
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
            "avg": 1010.0395849546043,
            "median": 0.6
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "579",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.9854734111543451,
              "mixed_pct": 0.014007782101167316,
              "instit_pct": 0.0005188067444876783,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.6416509421951881,
              "mixed_qty_pct": 0.30952638276584493,
              "instit_qty_pct": 0.04882267503896695,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.6391856173093445,
              "mixed_notional_pct": 0.306053446403431,
              "instit_notional_pct": 0.05476093628722439,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1010.0395849546043,
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
              "ticker": "K03",
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
              "avg_trade_size": 1365.525,
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
              "ticker": "BAC",
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
              "avg_trade_size": 3552.03,
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
              "ticker": "AAJ",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9739463601532568,
              "mixed_pct": 0.026053639846743294,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.7066564316262748,
              "mixed_qty_pct": 0.2933435683737252,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.7010977896388917,
              "mixed_notional_pct": 0.29890221036110826,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2006.1908045977011,
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
              "ticker": "5EV",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9703389830508474,
              "mixed_pct": 0.029661016949152543,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.8049939391891606,
              "mixed_qty_pct": 0.19500606081083935,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.8068503551407634,
              "mixed_notional_pct": 0.1931496448592365,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3145.6552966101694,
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
              "ticker": "MV4",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9404466501240695,
              "mixed_pct": 0.05459057071960298,
              "instit_pct": 0.004962779156327543,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5523966762219239,
              "mixed_qty_pct": 0.28243042200370116,
              "instit_qty_pct": 0.16517290177437496,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5553587960677315,
              "mixed_notional_pct": 0.28363901956790794,
              "instit_notional_pct": 0.1610021843643606,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4209.366004962779,
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
              "ticker": "5JS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.931282722513089,
              "mixed_pct": 0.06871727748691099,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.593671911232323,
              "mixed_qty_pct": 0.40632808876767706,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5925395566696627,
              "mixed_notional_pct": 0.40746044333033726,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3710.1528141361255,
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
              "ticker": "BNE",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.905511811023622,
              "mixed_pct": 0.0922384701912261,
              "instit_pct": 0.0022497187851518562,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5292246801894127,
              "mixed_qty_pct": 0.43427980776026576,
              "instit_qty_pct": 0.036495512050321574,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5314983354875592,
              "mixed_notional_pct": 0.4263703475217099,
              "instit_notional_pct": 0.042131316990730895,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4675.10911136108,
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
              "ticker": "BEW",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8918590522478737,
              "mixed_pct": 0.10692588092345079,
              "instit_pct": 0.001215066828675577,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5537881817134415,
              "mixed_qty_pct": 0.43019023930708705,
              "instit_qty_pct": 0.016021578979471505,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5562727653901809,
              "mixed_notional_pct": 0.4268883950142667,
              "instit_notional_pct": 0.0168388395955524,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5970.40127582017,
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
      "n_trades": 3855,
      "n_runs": 0,
      "n_trade_days": 126,
      "first_trade_date": "2025-10-23",
      "last_trade_date": "2026-04-23",
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
        "retail_pct": 0.9854734111543451,
        "mixed_pct": 0.014007782101167316,
        "instit_pct": 0.0005188067444876783,
        "ambiguous_pct": null,
        "unobservable_pct": null,
        "unclear_pct": null,
        "retail_qty_pct": null,
        "mixed_qty_pct": null,
        "instit_qty_pct": null,
        "ambiguous_qty_pct": null,
        "unobservable_qty_pct": null,
        "unclear_qty_pct": null,
        "retail_notional_pct": 0.6391856173093445,
        "mixed_notional_pct": 0.306053446403431,
        "instit_notional_pct": 0.05476093628722439,
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
        "avg": 1010.0395849546043,
        "median": 0.6
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
            "n_trades": 190,
            "n_runs": 0,
            "retail_pct": 0.9368421052631579,
            "mixed_pct": 0.06315789473684211,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 2747.1394736842103,
            "avg_run_notional": null,
            "retail_qty_pct": 0.5596757067210436,
            "mixed_qty_pct": 0.4403242932789564,
            "instit_qty_pct": 0.0,
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
            "total_quantity": 172720200.0
          },
          {
            "month": "2026-03",
            "n_trades": 459,
            "n_runs": 0,
            "retail_pct": 0.9738562091503268,
            "mixed_pct": 0.026143790849673203,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 2010.1882352941177,
            "avg_run_notional": null,
            "retail_qty_pct": 0.677324498663556,
            "mixed_qty_pct": 0.3226755013364439,
            "instit_qty_pct": 0.0,
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
            "total_quantity": 301509100.0
          },
          {
            "month": "2026-02",
            "n_trades": 978,
            "n_runs": 0,
            "retail_pct": 0.9979550102249489,
            "mixed_pct": 0.002044989775051125,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 256.08333333333337,
            "avg_run_notional": null,
            "retail_qty_pct": 0.8725423690408247,
            "mixed_qty_pct": 0.1274576309591753,
            "instit_qty_pct": 0.0,
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
            "total_quantity": 70611700.0
          },
          {
            "month": "2026-01",
            "n_trades": 428,
            "n_runs": 0,
            "retail_pct": 0.9883177570093458,
            "mixed_pct": 0.011682242990654205,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 996.8665887850468,
            "avg_run_notional": null,
            "retail_qty_pct": 0.8156438673940559,
            "mixed_qty_pct": 0.18435613260594408,
            "instit_qty_pct": 0.0,
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
            "total_quantity": 113373500.0
          },
          {
            "month": "2025-12",
            "n_trades": 906,
            "n_runs": 0,
            "retail_pct": 0.9911699779249448,
            "mixed_pct": 0.00772626931567329,
            "instit_pct": 0.0011037527593818985,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 789.3853200883002,
            "avg_run_notional": null,
            "retail_qty_pct": 0.6784188981749958,
            "mixed_qty_pct": 0.20487179487179488,
            "instit_qty_pct": 0.1167093069532094,
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
            "total_quantity": 175890000.0
          },
          {
            "month": "2025-11",
            "n_trades": 818,
            "n_runs": 0,
            "retail_pct": 0.980440097799511,
            "mixed_pct": 0.018337408312958436,
            "instit_pct": 0.0012224938875305623,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 1118.2067237163815,
            "avg_run_notional": null,
            "retail_qty_pct": 0.43579622077728514,
            "mixed_qty_pct": 0.41705678171693716,
            "instit_qty_pct": 0.14714699750577764,
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
            "total_quantity": 222754800.0
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "579",
          "currency": "SGD",
          "is_target": true,
          "retail_pct": 0.9854734111543451,
          "mixed_pct": 0.014007782101167316,
          "instit_pct": 0.0005188067444876783,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.6416509421951881,
          "mixed_qty_pct": 0.30952638276584493,
          "instit_qty_pct": 0.04882267503896695,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.6391856173093445,
          "mixed_notional_pct": 0.306053446403431,
          "instit_notional_pct": 0.05476093628722439,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 1010.0395849546043,
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
          "ticker": "K03",
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
          "avg_trade_size": 1365.525,
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
          "ticker": "BAC",
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
          "avg_trade_size": 3552.03,
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
          "ticker": "AAJ",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9739463601532568,
          "mixed_pct": 0.026053639846743294,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.7066564316262748,
          "mixed_qty_pct": 0.2933435683737252,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.7010977896388917,
          "mixed_notional_pct": 0.29890221036110826,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 2006.1908045977011,
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
          "ticker": "5EV",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9703389830508474,
          "mixed_pct": 0.029661016949152543,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.8049939391891606,
          "mixed_qty_pct": 0.19500606081083935,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.8068503551407634,
          "mixed_notional_pct": 0.1931496448592365,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 3145.6552966101694,
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
          "ticker": "MV4",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9404466501240695,
          "mixed_pct": 0.05459057071960298,
          "instit_pct": 0.004962779156327543,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.5523966762219239,
          "mixed_qty_pct": 0.28243042200370116,
          "instit_qty_pct": 0.16517290177437496,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.5553587960677315,
          "mixed_notional_pct": 0.28363901956790794,
          "instit_notional_pct": 0.1610021843643606,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 4209.366004962779,
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
          "ticker": "5JS",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.931282722513089,
          "mixed_pct": 0.06871727748691099,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.593671911232323,
          "mixed_qty_pct": 0.40632808876767706,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.5925395566696627,
          "mixed_notional_pct": 0.40746044333033726,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 3710.1528141361255,
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
          "ticker": "BNE",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.905511811023622,
          "mixed_pct": 0.0922384701912261,
          "instit_pct": 0.0022497187851518562,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.5292246801894127,
          "mixed_qty_pct": 0.43427980776026576,
          "instit_qty_pct": 0.036495512050321574,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.5314983354875592,
          "mixed_notional_pct": 0.4263703475217099,
          "instit_notional_pct": 0.042131316990730895,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 4675.10911136108,
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
          "ticker": "BEW",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.8918590522478737,
          "mixed_pct": 0.10692588092345079,
          "instit_pct": 0.001215066828675577,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.5537881817134415,
          "mixed_qty_pct": 0.43019023930708705,
          "instit_qty_pct": 0.016021578979471505,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.5562727653901809,
          "mixed_notional_pct": 0.4268883950142667,
          "instit_notional_pct": 0.0168388395955524,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 5970.40127582017,
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
            "ticker": "579",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.9375,
            "mixed_pct": 0.0625,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6388634969133097,
            "mixed_qty_pct": 0.3611365030866903,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6388642506078409,
            "mixed_notional_pct": 0.3611357493921591,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2994.71875,
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
            "ticker": "5JS",
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
            "avg_trade_size": 494.375,
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
            "ticker": "BEW",
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
            "avg_trade_size": 3416.6666666666665,
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
            "ticker": "MV4",
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
            "avg_trade_size": 2322.75,
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
            "ticker": "5EV",
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
            "avg_trade_size": 350.00000000000006,
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
            "ticker": "K03",
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
            "avg_trade_size": 1260.0,
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
            "ticker": "BNE",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.7777777777777778,
            "mixed_pct": 0.1111111111111111,
            "instit_pct": 0.1111111111111111,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.23209169054441262,
            "mixed_qty_pct": 0.2141833810888252,
            "instit_qty_pct": 0.5537249283667621,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.22841319812618385,
            "mixed_notional_pct": 0.2159418814978711,
            "instit_notional_pct": 0.555644920375945,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 16923.277777777777,
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
            "ticker": "579",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.9631578947368421,
            "mixed_pct": 0.03684210526315789,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5949443020484947,
            "mixed_qty_pct": 0.4050556979515053,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.59836176977333,
            "mixed_notional_pct": 0.40163823022666995,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1785.2063157894738,
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
            "ticker": "AAJ",
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
            "avg_trade_size": 1018.0918604651164,
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
            "ticker": "5EV",
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
            "avg_trade_size": 2308.290566037736,
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
            "ticker": "K03",
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
            "avg_trade_size": 1062.625,
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
            "ticker": "BEW",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9647058823529412,
            "mixed_pct": 0.03529411764705882,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.7435755222776853,
            "mixed_qty_pct": 0.25642447772231464,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.7430558514339926,
            "mixed_notional_pct": 0.2569441485660074,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4141.870588235294,
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
            "ticker": "5JS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9330254041570438,
            "mixed_pct": 0.06697459584295612,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5779163182037051,
            "mixed_qty_pct": 0.4220836817962949,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5792847836789314,
            "mixed_notional_pct": 0.42071521632106856,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3820.9018475750577,
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
            "ticker": "MV4",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.927710843373494,
            "mixed_pct": 0.04819277108433735,
            "instit_pct": 0.024096385542168676,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.34686945500633715,
            "mixed_qty_pct": 0.19158428390367555,
            "instit_qty_pct": 0.4615462610899873,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.35416341769945603,
            "mixed_notional_pct": 0.19029454615507144,
            "instit_notional_pct": 0.45554203614547256,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 7223.487951807229,
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
            "ticker": "BNE",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8681318681318682,
            "mixed_pct": 0.1282051282051282,
            "instit_pct": 0.003663003663003663,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.535467100936394,
            "mixed_qty_pct": 0.4161160001252701,
            "instit_qty_pct": 0.048416898938335784,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5320639541165646,
            "mixed_notional_pct": 0.41641944725727226,
            "instit_notional_pct": 0.05151659862616317,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 6017.478021978022,
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
            "ticker": "579",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.9840455840455841,
            "mixed_pct": 0.015954415954415956,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6636326210509126,
            "mixed_qty_pct": 0.3363673789490874,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6640237520116362,
            "mixed_notional_pct": 0.33597624798836373,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1012.3790883190884,
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
            "ticker": "AAJ",
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
            "avg_trade_size": 1086.169375,
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
            "ticker": "K03",
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
            "avg_trade_size": 1209.2,
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
            "ticker": "BAC",
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
            "avg_trade_size": 1620.05,
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
            "ticker": "5EV",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9852941176470589,
            "mixed_pct": 0.014705882352941176,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.9082789221997425,
            "mixed_qty_pct": 0.0917210778002575,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.9064772933178532,
            "mixed_notional_pct": 0.09352270668214673,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2921.7450980392155,
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
            "ticker": "5JS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9227188081936686,
            "mixed_pct": 0.07728119180633147,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5667988198414162,
            "mixed_qty_pct": 0.43320118015858383,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5676661339397834,
            "mixed_notional_pct": 0.4323338660602166,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4037.7034450651768,
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
            "ticker": "MV4",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9213483146067416,
            "mixed_pct": 0.07116104868913857,
            "instit_pct": 0.00749063670411985,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.47670349276058466,
            "mixed_qty_pct": 0.3150575264759029,
            "instit_qty_pct": 0.20823898076351244,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.48245192013893134,
            "mixed_notional_pct": 0.3152398909793525,
            "instit_notional_pct": 0.20230818888171614,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5056.252808988764,
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
            "ticker": "BNE",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8964028776978418,
            "mixed_pct": 0.10071942446043165,
            "instit_pct": 0.0028776978417266188,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5048385453804625,
            "mixed_qty_pct": 0.44840582662727924,
            "instit_qty_pct": 0.046755627992258325,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5159480057039524,
            "mixed_notional_pct": 0.43363857866441946,
            "instit_notional_pct": 0.050413415631628086,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4997.670503597123,
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
            "ticker": "BEW",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8900255754475703,
            "mixed_pct": 0.10997442455242967,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5613124171453823,
            "mixed_qty_pct": 0.4386875828546178,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5564744625992735,
            "mixed_notional_pct": 0.4435255374007266,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 6318.124040920716,
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
            "ticker": "579",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.9854734111543451,
            "mixed_pct": 0.014007782101167316,
            "instit_pct": 0.0005188067444876783,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6416509421951881,
            "mixed_qty_pct": 0.30952638276584493,
            "instit_qty_pct": 0.04882267503896695,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6391856173093445,
            "mixed_notional_pct": 0.306053446403431,
            "instit_notional_pct": 0.05476093628722439,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1010.0395849546043,
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
            "ticker": "K03",
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
            "avg_trade_size": 1365.525,
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
            "ticker": "BAC",
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
            "avg_trade_size": 3552.03,
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
            "ticker": "AAJ",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9739463601532568,
            "mixed_pct": 0.026053639846743294,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.7066564316262748,
            "mixed_qty_pct": 0.2933435683737252,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.7010977896388917,
            "mixed_notional_pct": 0.29890221036110826,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2006.1908045977011,
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
            "ticker": "5EV",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9703389830508474,
            "mixed_pct": 0.029661016949152543,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.8049939391891606,
            "mixed_qty_pct": 0.19500606081083935,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.8068503551407634,
            "mixed_notional_pct": 0.1931496448592365,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3145.6552966101694,
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
            "ticker": "MV4",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9404466501240695,
            "mixed_pct": 0.05459057071960298,
            "instit_pct": 0.004962779156327543,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5523966762219239,
            "mixed_qty_pct": 0.28243042200370116,
            "instit_qty_pct": 0.16517290177437496,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5553587960677315,
            "mixed_notional_pct": 0.28363901956790794,
            "instit_notional_pct": 0.1610021843643606,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4209.366004962779,
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
            "ticker": "5JS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.931282722513089,
            "mixed_pct": 0.06871727748691099,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.593671911232323,
            "mixed_qty_pct": 0.40632808876767706,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5925395566696627,
            "mixed_notional_pct": 0.40746044333033726,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3710.1528141361255,
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
            "ticker": "BNE",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.905511811023622,
            "mixed_pct": 0.0922384701912261,
            "instit_pct": 0.0022497187851518562,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5292246801894127,
            "mixed_qty_pct": 0.43427980776026576,
            "instit_qty_pct": 0.036495512050321574,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5314983354875592,
            "mixed_notional_pct": 0.4263703475217099,
            "instit_notional_pct": 0.042131316990730895,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4675.10911136108,
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
            "ticker": "BEW",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8918590522478737,
            "mixed_pct": 0.10692588092345079,
            "instit_pct": 0.001215066828675577,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5537881817134415,
            "mixed_qty_pct": 0.43019023930708705,
            "instit_qty_pct": 0.016021578979471505,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5562727653901809,
            "mixed_notional_pct": 0.4268883950142667,
            "instit_notional_pct": 0.0168388395955524,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5970.40127582017,
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
      "total_trades": 3806,
      "price_moving_trades": 488,
      "pct_price_moving": 12.821860220704151,
      "all_movers": {
        "count": 488,
        "avg_size": 1802.26618852459,
        "median_size": 60.0,
        "retail_count": 474,
        "mixed_count": 13,
        "institutional_count": 1,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 97.1311475409836,
        "mixed_pct": 2.663934426229508,
        "instit_pct": 0.20491803278688525,
        "unclear_pct": null
      },
      "positive_movers": {
        "count": 242,
        "avg_size": 1460.4826446280995,
        "median_size": 160.0,
        "retail_count": 238,
        "mixed_count": 4,
        "institutional_count": 0,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 98.34710743801654,
        "mixed_pct": 1.6528925619834711,
        "instit_pct": 0.0,
        "unclear_pct": null
      },
      "negative_movers": {
        "count": 246,
        "avg_size": 2138.4922764227636,
        "median_size": 30.0,
        "retail_count": 236,
        "mixed_count": 9,
        "institutional_count": 1,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 95.9349593495935,
        "mixed_pct": 3.6585365853658534,
        "instit_pct": 0.40650406504065045,
        "unclear_pct": null
      }
    },
    "short_selling": {
      "data_available": true,
      "security_name": "Oceanus",
      "mapping": {
        "ticker_to_security": "Oceanus",
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
            "avg_short_ratio": 0.004714934963920191,
            "max_short_ratio": 0.25283171521035597,
            "interpretation": "Low short interest"
          }
        }
      },
      "correlation": {
        "valid": false,
        "correlation": null,
        "interpretation": "No clear relationship (correlation undefined)"
      },
      "peaks": [
        {
          "date": "2025-12-11",
          "short_ratio": 0.25283171521035597,
          "return_pct": 0.0
        },
        {
          "date": "2025-11-20",
          "short_ratio": 0.2390628735357399,
          "return_pct": 0.0
        }
      ],
      "short_interest_change": {
        "valid": true,
        "monthly_data": [
          {
            "month": "2026-04",
            "avg_short_ratio": 0.0
          },
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
            "avg_short_ratio": 0.011492350691379816
          },
          {
            "month": "2025-11",
            "avg_short_ratio": 0.013727439104072819
          },
          {
            "month": "2025-10",
            "avg_short_ratio": 0.006736684919690095
          },
          {
            "month": "2025-09",
            "avg_short_ratio": 0.022697766026567655
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
            "avg_short_ratio": 5.124163098633571e-05
          },
          {
            "month": "2025-05",
            "avg_short_ratio": 0.0029988457396429354
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
            "avg_short_ratio": 0.011492350691379816,
            "change_pct": null
          },
          {
            "month": "2025-11",
            "avg_short_ratio": 0.013727439104072819,
            "change_pct": 19.448487717743404
          },
          {
            "month": "2025-10",
            "avg_short_ratio": 0.006736684919690095,
            "change_pct": -50.925406635449036
          },
          {
            "month": "2025-09",
            "avg_short_ratio": 0.022697766026567655,
            "change_pct": 236.92782573556687
          },
          {
            "month": "2025-08",
            "avg_short_ratio": 0.0,
            "change_pct": -100.0
          },
          {
            "month": "2025-07",
            "avg_short_ratio": 0.0,
            "change_pct": null
          },
          {
            "month": "2025-06",
            "avg_short_ratio": 5.124163098633571e-05,
            "change_pct": null
          },
          {
            "month": "2025-05",
            "avg_short_ratio": 0.0029988457396429354,
            "change_pct": 5752.361999255291
          }
        ],
        "interpretation": "Short interest stable | YoY: -100% ⬇️"
      },
      "short_series": {
        "valid": true,
        "rows": [
          {
            "date": "2026-04-23",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 15972000,
            "close": 0.003,
            "return": 0.0
          },
          {
            "date": "2026-04-22",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1253500,
            "close": 0.003,
            "return": 0.0
          },
          {
            "date": "2026-04-21",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 49357100,
            "close": 0.003,
            "return": 0.0
          },
          {
            "date": "2026-04-20",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 5203500,
            "close": 0.003,
            "return": -0.25
          },
          {
            "date": "2026-04-17",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 300100,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2026-04-16",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 55110100,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2026-04-15",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 360100,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2026-04-14",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2152500,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2026-04-13",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 13813100,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2026-04-10",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1900600,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2026-04-09",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 3130300,
            "close": 0.004,
            "return": 0.33333333333333326
          },
          {
            "date": "2026-04-08",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 15024800,
            "close": 0.003,
            "return": 0.0
          },
          {
            "date": "2026-04-07",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2983300,
            "close": 0.003,
            "return": 0.0
          },
          {
            "date": "2026-04-06",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 6907500,
            "close": 0.003,
            "return": -0.25
          },
          {
            "date": "2026-04-02",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 10800000,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2026-04-01",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 21066500,
            "close": 0.004,
            "return": 0.33333333333333326
          },
          {
            "date": "2026-03-31",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 14575800,
            "close": 0.003,
            "return": 0.5
          },
          {
            "date": "2026-03-30",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 13610400,
            "close": 0.002,
            "return": -0.5
          },
          {
            "date": "2026-03-27",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 909700,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2026-03-26",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 3276300,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2026-03-25",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 13651000,
            "close": 0.004,
            "return": 0.33333333333333326
          },
          {
            "date": "2026-03-24",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 11507900,
            "close": 0.003,
            "return": 0.0
          },
          {
            "date": "2026-03-23",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 11383400,
            "close": 0.003,
            "return": 0.0
          },
          {
            "date": "2026-03-20",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 3699000,
            "close": 0.003,
            "return": -0.25
          },
          {
            "date": "2026-03-19",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 4050100,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2026-03-18",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1539300,
            "close": 0.004,
            "return": 0.33333333333333326
          },
          {
            "date": "2026-03-17",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2330000,
            "close": 0.003,
            "return": 0.0
          },
          {
            "date": "2026-03-16",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 500000,
            "close": 0.003,
            "return": -0.25
          },
          {
            "date": "2026-03-13",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2381000,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2026-03-12",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 7849600,
            "close": 0.004,
            "return": 0.33333333333333326
          },
          {
            "date": "2026-03-11",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 6226000,
            "close": 0.003,
            "return": 0.0
          },
          {
            "date": "2026-03-10",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 4642100,
            "close": 0.003,
            "return": -0.25
          },
          {
            "date": "2026-03-09",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 186592900,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2026-03-06",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 5913900,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2026-03-05",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2175300,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2026-03-04",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 5343600,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2026-03-03",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2526400,
            "close": 0.004,
            "return": 0.33333333333333326
          },
          {
            "date": "2026-03-02",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 32664800,
            "close": 0.003,
            "return": -0.25
          },
          {
            "date": "2026-02-27",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 4223600,
            "close": 0.004,
            "return": 0.33333333333333326
          },
          {
            "date": "2026-02-26",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 8545000,
            "close": 0.003,
            "return": -0.25
          },
          {
            "date": "2026-02-25",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 9881000,
            "close": 0.004,
            "return": 0.33333333333333326
          },
          {
            "date": "2026-02-24",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 501300,
            "close": 0.003,
            "return": -0.25
          },
          {
            "date": "2026-02-23",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 410800,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2026-02-20",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 3870700,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2026-02-19",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2142700,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2026-02-16",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1590500,
            "close": 0.004,
            "return": 0.33333333333333326
          },
          {
            "date": "2026-02-13",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 5168400,
            "close": 0.003,
            "return": -0.25
          },
          {
            "date": "2026-02-12",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 17872100,
            "close": 0.004,
            "return": 0.33333333333333326
          },
          {
            "date": "2026-02-11",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2876800,
            "close": 0.003,
            "return": 0.0
          },
          {
            "date": "2026-02-10",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 8343700,
            "close": 0.003,
            "return": 0.0
          },
          {
            "date": "2026-02-09",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 151900,
            "close": 0.003,
            "return": 0.0
          },
          {
            "date": "2026-02-06",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 605100,
            "close": 0.003,
            "return": 0.0
          },
          {
            "date": "2026-02-05",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1736400,
            "close": 0.003,
            "return": 0.0
          },
          {
            "date": "2026-02-04",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 8290300,
            "close": 0.003,
            "return": -0.25
          },
          {
            "date": "2026-02-03",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 4048000,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2026-02-02",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 3151700,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2026-01-30",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 6320400,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2026-01-29",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 5500000,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2026-01-28",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 261100,
            "close": 0.004,
            "return": 0.33333333333333326
          },
          {
            "date": "2026-01-27",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1010300,
            "close": 0.003,
            "return": 0.0
          },
          {
            "date": "2026-01-26",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1747600,
            "close": 0.003,
            "return": 0.0
          },
          {
            "date": "2026-01-23",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1000300,
            "close": 0.003,
            "return": 0.0
          },
          {
            "date": "2026-01-22",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1155200,
            "close": 0.003,
            "return": -0.25
          },
          {
            "date": "2026-01-21",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1401900,
            "close": 0.004,
            "return": 0.33333333333333326
          },
          {
            "date": "2026-01-20",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 446600,
            "close": 0.003,
            "return": -0.25
          },
          {
            "date": "2026-01-19",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 4534600,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2026-01-16",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2700800,
            "close": 0.004,
            "return": 0.33333333333333326
          },
          {
            "date": "2026-01-15",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 670700,
            "close": 0.003,
            "return": 0.0
          },
          {
            "date": "2026-01-14",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 5551100,
            "close": 0.003,
            "return": 0.0
          },
          {
            "date": "2026-01-13",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 5245100,
            "close": 0.003,
            "return": -0.25
          },
          {
            "date": "2026-01-12",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 11560300,
            "close": 0.004,
            "return": 0.33333333333333326
          },
          {
            "date": "2026-01-09",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2741600,
            "close": 0.003,
            "return": -0.25
          },
          {
            "date": "2026-01-08",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 4535000,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2026-01-07",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 6147600,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2026-01-06",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 13979400,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2026-01-05",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 6712600,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2026-01-02",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 56196900,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2025-12-31",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2644700,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2025-12-30",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2725000,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2025-12-29",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 9141000,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2025-12-26",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 14712000,
            "close": 0.004,
            "return": 0.33333333333333326
          },
          {
            "date": "2025-12-24",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 6902400,
            "close": 0.003,
            "return": -0.25
          },
          {
            "date": "2025-12-23",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 4539200,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2025-12-22",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 62786200,
            "close": 0.004,
            "return": -0.19999999999999996
          },
          {
            "date": "2025-12-19",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 330000,
            "close": 0.005,
            "return": 0.0
          },
          {
            "date": "2025-12-18",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1290100,
            "close": 0.005,
            "return": 0.0
          },
          {
            "date": "2025-12-17",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 11907900,
            "close": 0.005,
            "return": 0.25
          },
          {
            "date": "2025-12-16",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 3538200,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2025-12-15",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1736500,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2025-12-12",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 5055100,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2025-12-11",
            "short_ratio": 0.25283171521035597,
            "short_vol": 1000000,
            "total_vol": 3955200,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2025-12-10",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 6582400,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2025-12-09",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 6366900,
            "close": 0.004,
            "return": -0.19999999999999996
          },
          {
            "date": "2025-12-08",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 19271200,
            "close": 0.005,
            "return": 0.25
          },
          {
            "date": "2025-12-05",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 325300,
            "close": 0.004,
            "return": 0.33333333333333326
          },
          {
            "date": "2025-12-04",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1012900,
            "close": 0.003,
            "return": -0.25
          },
          {
            "date": "2025-12-03",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 3500200,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2025-12-02",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 14190600,
            "close": 0.004,
            "return": 0.33333333333333326
          },
          {
            "date": "2025-12-01",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 21689500,
            "close": 0.003,
            "return": -0.25
          },
          {
            "date": "2025-11-28",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 160186100,
            "close": 0.004,
            "return": 0.0
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "579",
          "avg_short_ratio": 0.0,
          "max_short_ratio": 0.0,
          "is_target": true
        },
        {
          "ticker": "K03",
          "avg_short_ratio": 9.775171065493646e-05,
          "max_short_ratio": 0.03636363636363636,
          "is_target": false
        },
        {
          "ticker": "AAJ",
          "avg_short_ratio": 0.00014715309291716197,
          "max_short_ratio": 0.02969848611967005,
          "is_target": false
        },
        {
          "ticker": "BNE",
          "avg_short_ratio": 0.005419716781704164,
          "max_short_ratio": 1.0,
          "is_target": false
        },
        {
          "ticker": "5JS",
          "avg_short_ratio": 0.006607884721285903,
          "max_short_ratio": 0.3663003663003663,
          "is_target": false
        },
        {
          "ticker": "BEW",
          "avg_short_ratio": 0.0073361694990562035,
          "max_short_ratio": 0.9375,
          "is_target": false
        },
        {
          "ticker": "MV4",
          "avg_short_ratio": 0.007592089449029452,
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
          "opening": 0.002172650127772043,
          "continuous": 0.8900399853688876,
          "closing": 1.5011401159180396e-06,
          "auctions": 0.10996001463111232,
          "other": 0.0
        },
        "1M": {
          "opening": 0.06171494969563696,
          "continuous": 0.8897537305362674,
          "closing": 0.005880691416139934,
          "auctions": 0.11024626946373264,
          "other": 0.0
        },
        "3M": {
          "opening": 0.07453123019622832,
          "continuous": 0.878739282412856,
          "closing": 0.015552288808296798,
          "auctions": 0.12126071758714395,
          "other": 0.0
        },
        "6M": {
          "opening": 0.06713804193962615,
          "continuous": 0.8964406423263265,
          "closing": 0.008888239303170441,
          "auctions": 0.10355935767367336,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.4180789179425566,
        "1M": 0.5060530295588651,
        "3M": 0.4960539211327206,
        "6M": 0.4873382048976868
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.148
        },
        {
          "time": "09:00",
          "avg_share": 0.2112
        },
        {
          "time": "09:30",
          "avg_share": 0.1844
        },
        {
          "time": "10:00",
          "avg_share": 0.1102
        },
        {
          "time": "10:30",
          "avg_share": 0.0438
        },
        {
          "time": "11:00",
          "avg_share": 0.0827
        },
        {
          "time": "11:30",
          "avg_share": 0.0496
        },
        {
          "time": "12:00",
          "avg_share": 0.0152
        },
        {
          "time": "12:30",
          "avg_share": 0.0174
        },
        {
          "time": "13:00",
          "avg_share": 0.0504
        },
        {
          "time": "13:30",
          "avg_share": 0.0162
        },
        {
          "time": "14:00",
          "avg_share": 0.0275
        },
        {
          "time": "14:30",
          "avg_share": 0.0031
        },
        {
          "time": "15:00",
          "avg_share": 0.0058
        },
        {
          "time": "15:30",
          "avg_share": 0.0045
        },
        {
          "time": "16:00",
          "avg_share": 0.0118
        },
        {
          "time": "16:30",
          "avg_share": 0.0162
        },
        {
          "time": "17:00",
          "avg_share": 0.002
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "579",
          "auctions_pct": 15.069071424646133,
          "hhi": 0.4817370113868025,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400",
            "you": true
          }
        },
        {
          "ticker": "5EV",
          "auctions_pct": 1.3545247157230225,
          "hhi": 0.6781448526940772,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "AAJ",
          "auctions_pct": 4.454579280026273,
          "hhi": 0.560019292146166,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "K03",
          "auctions_pct": 3.144479755558277,
          "hhi": 0.8552249131481876,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "BAC",
          "auctions_pct": 0.0,
          "hhi": 0.8694796102781565,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "MV4",
          "auctions_pct": 2.9785174988528764,
          "hhi": 0.6416835776167394,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "BNE",
          "auctions_pct": 3.4467675642154685,
          "hhi": 0.5516177630428749,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "5JS",
          "auctions_pct": 5.777545302268377,
          "hhi": 0.46005312073305,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "BEW",
          "auctions_pct": 4.148656323199711,
          "hhi": 0.4902704954886383,
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
