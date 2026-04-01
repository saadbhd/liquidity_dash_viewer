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
      "ticker": "LGH",
      "name": "Leong Guan Hldgs",
      "marketCap": 21762300.0,
      "sector": "Packaged Foods",
      "industry": "Consumer Defensive"
    },
    {
      "ticker": "Y03",
      "name": "Yeo Hiap Seng",
      "marketCap": 376309610.4,
      "sector": "Packaged Foods",
      "industry": "Consumer Defensive"
    },
    {
      "ticker": "BQD",
      "name": "Envictus",
      "marketCap": 109505287.08,
      "sector": "Packaged Foods",
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
      "ticker": "D03",
      "name": "Del Monte Pac",
      "marketCap": 174956402.16,
      "sector": "Packaged Foods",
      "industry": "Consumer Defensive"
    },
    {
      "ticker": "5JS",
      "name": "Indofood Agri",
      "marketCap": 530443721.40000004,
      "sector": "Packaged Foods",
      "industry": "Consumer Defensive"
    },
    {
      "ticker": "OTS",
      "name": "OTS Holdings",
      "marketCap": 24182000.0,
      "sector": "Packaged Foods",
      "industry": "Consumer Defensive"
    },
    {
      "ticker": "Q01",
      "name": "QAF",
      "marketCap": 572392097.8,
      "sector": "Packaged Foods",
      "industry": "Consumer Defensive"
    },
    {
      "ticker": "42W",
      "name": "Zixin",
      "marketCap": 62324463.825,
      "sector": "Packaged Foods",
      "industry": "Consumer Defensive"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XSES",
    "ticker": "LGH",
    "company": "Leong Guan Hldgs",
    "asof_date": "2026-03-13",
    "industry": "Consumer Defensive",
    "sector": "Packaged Foods",
    "market_cap_display": "21.8M",
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
          "score_pca": 38.17204301075269,
          "score_pca_percentile": 38.17204301075269,
          "rank_pca": 346,
          "total": 558,
          "adv_notional_sgd": 322.5,
          "adv_volume_shares": 1500.0,
          "free_float_shares": null,
          "turnover_ratio": 1.4819205690574985e-05,
          "votes": 2.0,
          "trades": 2.0,
          "spread_pct": 0.057026476578411464,
          "spread_ticks": 2.5454545454545454,
          "amihud": 0.00013781223083548683,
          "volatility": 0.6429591093245105
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5268983297938116,
          "loadings": {
            "log_adv": 0.5482301779370882,
            "log_trades": 0.5059532586104436,
            "log_turnover": 0.5170789344538662,
            "neg_spread": 0.36965424636469946,
            "neg_amihud": 0.034285909283390835,
            "neg_vol": -0.1956132976404033
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
          "peer_median_adv": 18285.0,
          "peer_median_score_pca": 48.655913978494624,
          "peer_median_trades": 7.0,
          "peer_median_volatility": 0.11046205991711627,
          "peer_median_spread_pct": 0.03057252195682831,
          "peer_median_spread_ticks": 1.9425925925925926,
          "peer_median_amihud": 4.813081988230584e-07,
          "peer_median_turnover_ratio": 0.0001639817635038614,
          "target_vs_peer": {
            "score_pca_delta": -10.48,
            "adv_delta_pct": -98.2,
            "trades_delta_pct": -71.43,
            "volatility_delta_pct": -482.06,
            "spread_pct_delta_pct": -86.53,
            "spread_ticks_delta_pct": 31.03,
            "amihud_delta_pct": -28532.85,
            "turnover_ratio_delta_pct": -90.96
          }
        },
        "peer_liquidity": [
          {
            "ticker": "LGH",
            "score_pca": 38.17204301075269,
            "rank_pca": 346,
            "adv": 322.5,
            "trades": 2.0,
            "volatility": 0.6429591093245105,
            "spread_pct": 0.057026476578411464,
            "spread_ticks": 2.5454545454545454,
            "amihud": 0.00013781223083548683,
            "turnover_ratio": 1.4819205690574985e-05,
            "is_target": true
          },
          {
            "ticker": "Y03",
            "score_pca": 40.50179211469534,
            "rank_pca": 333,
            "adv": 6000.0,
            "trades": 1.0,
            "volatility": 0.0,
            "spread_pct": 0.008298755186721999,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 6.377727099366155e-05,
            "is_target": false
          },
          {
            "ticker": "BQD",
            "score_pca": 43.54838709677419,
            "rank_pca": 316,
            "adv": 11844.0,
            "trades": 3.0,
            "volatility": 0.0,
            "spread_pct": 0.05128205128205133,
            "spread_ticks": 3.75,
            "amihud": 0.0,
            "turnover_ratio": 0.00019885854229628717,
            "is_target": false
          },
          {
            "ticker": "MV4",
            "score_pca": 44.80286738351255,
            "rank_pca": 309,
            "adv": 4980.0,
            "trades": 6.0,
            "volatility": 0.3232042928751561,
            "spread_pct": 0.02923473774720553,
            "spread_ticks": 1.7,
            "amihud": 6.9242487190140005e-06,
            "turnover_ratio": 2.2324408931653346e-05,
            "is_target": false
          },
          {
            "ticker": "D03",
            "score_pca": 68.10035842293907,
            "rank_pca": 179,
            "adv": 45009.0,
            "trades": 25.0,
            "volatility": 0.7377745458692703,
            "spread_pct": 0.03349753694581284,
            "spread_ticks": 3.06,
            "amihud": 9.454373900633598e-07,
            "turnover_ratio": 0.0008036812761470013,
            "is_target": false
          },
          {
            "ticker": "5JS",
            "score_pca": 51.075268817204304,
            "rank_pca": 274,
            "adv": 19456.0,
            "trades": 8.0,
            "volatility": 0.12462417413222047,
            "spread_pct": 0.01664684898929847,
            "spread_ticks": 1.2727272727272727,
            "amihud": 6.675068352699934e-07,
            "turnover_ratio": 0.00012910498471143563,
            "is_target": false
          },
          {
            "ticker": "OTS",
            "score_pca": 46.236559139784944,
            "rank_pca": 301,
            "adv": 22600.0,
            "trades": 2.0,
            "volatility": 0.0,
            "spread_pct": 0.12594458438287154,
            "spread_ticks": 15.0,
            "amihud": 1.5127448755767335e-06,
            "turnover_ratio": 0.006917686448944015,
            "is_target": false
          },
          {
            "ticker": "Q01",
            "score_pca": 53.04659498207885,
            "rank_pca": 263,
            "adv": 17114.0,
            "trades": 13.0,
            "volatility": 0.09629994570201207,
            "spread_pct": 0.011006435966794154,
            "spread_ticks": 2.185185185185185,
            "amihud": 2.951095623761232e-07,
            "turnover_ratio": 0.00010936022355416899,
            "is_target": false
          },
          {
            "ticker": "42W",
            "score_pca": 66.66666666666666,
            "rank_pca": 187,
            "adv": 49218.7,
            "trades": 21.0,
            "volatility": 0.6152853204781146,
            "spread_pct": 0.03191030616645109,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0012265111403469212,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Packaged Foods",
          "sector_count": 14,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.22320202311753023,
              "median": 0.10760414128112343,
              "min": 0.0,
              "max": 6.608197362010048,
              "p5": 0.0,
              "p95": 0.8081163795519644,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2969328.1812179713,
              "median": 10424.0,
              "min": 0.0,
              "max": 253247897.0,
              "p5": 0.0,
              "p95": 12566088.899999954,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.11318567677149338,
              "median": 0.03139717425431714,
              "min": 0.0002433041298153404,
              "max": 1.4382566585956416,
              "p5": 0.0038628620026989933,
              "p95": 0.5174663552976861,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.009562553309578201,
              "median": 0.00021348010317063257,
              "min": 0.0,
              "max": 3.7275064267352187,
              "p5": 0.0,
              "p95": 0.011787366308130483,
              "count": 552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0007686537362377945,
              "median": 8.350140496123931e-09,
              "min": 0.0,
              "max": 0.25,
              "p5": 0.0,
              "p95": 5.8914480189715755e-05,
              "count": 395
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 474.8297491039427,
              "median": 7.0,
              "min": 0.0,
              "max": 12505.0,
              "p5": 0.0,
              "p95": 2897.199999999998,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.22506687808813425,
              "median": 0.11046205991711627,
              "min": 0.0,
              "max": 0.7377745458692703,
              "p5": 0.0,
              "p95": 0.6761445121151763,
              "count": 14
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 4326040.085714286,
              "median": 18285.0,
              "min": 0.0,
              "max": 52702200.0,
              "p5": 0.0,
              "p95": 23319014.999999985,
              "count": 14
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.20079132168268804,
              "median": 0.03057252195682831,
              "min": 0.002712841041164822,
              "max": 1.3716475095785439,
              "p5": 0.003546413510175712,
              "p95": 1.1664120320791984,
              "count": 14
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0009719053904598794,
              "median": 0.00011923260413280231,
              "min": 0.0,
              "max": 0.006917686448944015,
              "p5": 0.0,
              "p95": 0.003865245287408916,
              "count": 14
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.2346664507794392e-05,
              "median": 1.4877622212780112e-07,
              "min": 0.0,
              "max": 0.00013781223083548683,
              "p5": 0.0,
              "p95": 6.582384067142667e-05,
              "count": 12
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 754.9285714285714,
              "median": 7.0,
              "min": 0.0,
              "max": 7191.0,
              "p5": 0.0,
              "p95": 4611.149999999999,
              "count": 14
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 22027.7125,
              "median": 18285.0,
              "min": 4980.0,
              "max": 49218.7,
              "p5": 5337.0,
              "p95": 47745.30499999999,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 9.875,
              "median": 7.0,
              "min": 1.0,
              "max": 25.0,
              "p5": 1.35,
              "p95": 23.599999999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.2371485348820967,
              "median": 0.11046205991711627,
              "min": 0.0,
              "max": 0.7377745458692703,
              "p5": 0.0,
              "p95": 0.6949033169823657,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03847765708340087,
              "median": 0.03057252195682831,
              "min": 0.008298755186721999,
              "max": 0.12594458438287154,
              "p5": 0.009246443459747252,
              "p95": 0.09981269779758442,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.620989057239057,
              "median": 1.9425925925925926,
              "min": 1.0,
              "max": 15.0,
              "p5": 1.0,
              "p95": 11.062499999999993,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.2931309227875264e-06,
              "median": 4.813081988230584e-07,
              "min": 0.0,
              "max": 6.9242487190140005e-06,
              "p5": 0.0,
              "p95": 5.030222373810954e-06,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.001183913036990643,
              "median": 0.0001639817635038614,
              "min": 2.2324408931653346e-05,
              "max": 0.006917686448944015,
              "p5": 3.683291065335622e-05,
              "p95": 0.004925775090935029,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": -0.04444444444444451,
            "market": -0.0026898394926001545,
            "sector": 0.0,
            "peers": 0.0,
            "vs_market": -0.041754604951844354,
            "vs_sector": -0.04444444444444451,
            "vs_peers": -0.04444444444444451
          }
        }
      },
      "1w": {
        "label": "1W",
        "window_days": 5,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 5,
          "score_pca": 39.784946236559136,
          "score_pca_percentile": 39.784946236559136,
          "rank_pca": 337,
          "total": 558,
          "adv_notional_sgd": 2171.5,
          "adv_volume_shares": 10100.0,
          "free_float_shares": null,
          "turnover_ratio": 9.978265164987157e-05,
          "votes": 3.0,
          "trades": 3.0,
          "spread_pct": 0.050724637681159465,
          "spread_ticks": 2.210526315789474,
          "amihud": 2.246395938516145e-05,
          "volatility": 0.7936123447147837
        },
        "pca": {
          "valid": true,
          "window_days": 5,
          "variance_explained": 0.5215759426396959,
          "loadings": {
            "log_adv": 0.5522055768299957,
            "log_trades": 0.5050944699843686,
            "log_turnover": 0.5154110873554804,
            "neg_spread": 0.41087769170075084,
            "neg_amihud": 0.07304544908418599,
            "neg_vol": 0.0119947142881948
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
          "peer_median_adv": 21804.5,
          "peer_median_score_pca": 53.584229390681,
          "peer_median_trades": 9.5,
          "peer_median_volatility": 0.2838425201853404,
          "peer_median_spread_pct": 0.02795339635390183,
          "peer_median_spread_ticks": 1.7169724770642203,
          "peer_median_amihud": 2.241777068861687e-07,
          "peer_median_turnover_ratio": 0.00023274420235896358,
          "target_vs_peer": {
            "score_pca_delta": -13.8,
            "adv_delta_pct": -90.0,
            "trades_delta_pct": -68.42,
            "volatility_delta_pct": -179.6,
            "spread_pct_delta_pct": -81.46,
            "spread_ticks_delta_pct": 28.75,
            "amihud_delta_pct": -9920.6,
            "turnover_ratio_delta_pct": -57.13
          }
        },
        "peer_liquidity": [
          {
            "ticker": "LGH",
            "score_pca": 39.784946236559136,
            "rank_pca": 337,
            "adv": 2171.5,
            "trades": 3.0,
            "volatility": 0.7936123447147837,
            "spread_pct": 0.050724637681159465,
            "spread_ticks": 2.210526315789474,
            "amihud": 2.246395938516145e-05,
            "turnover_ratio": 9.978265164987157e-05,
            "is_target": true
          },
          {
            "ticker": "Y03",
            "score_pca": 41.21863799283154,
            "rank_pca": 329,
            "adv": 6000.0,
            "trades": 1.0,
            "volatility": 0.173153554627306,
            "spread_pct": 0.008298755186721999,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 6.377727099366155e-05,
            "is_target": false
          },
          {
            "ticker": "BQD",
            "score_pca": 38.17204301075269,
            "rank_pca": 346,
            "adv": 1952.5,
            "trades": 3.0,
            "volatility": 0.09999008084112013,
            "spread_pct": 0.03582458307597285,
            "spread_ticks": 2.6363636363636362,
            "amihud": 0.0,
            "turnover_ratio": 3.324382925925773e-05,
            "is_target": false
          },
          {
            "ticker": "MV4",
            "score_pca": 48.2078853046595,
            "rank_pca": 290,
            "adv": 12789.0,
            "trades": 6.0,
            "volatility": 0.30525380896651866,
            "spread_pct": 0.02923473774720553,
            "spread_ticks": 1.7,
            "amihud": 1.3962892217642345e-06,
            "turnover_ratio": 5.9307616499151364e-05,
            "is_target": false
          },
          {
            "ticker": "D03",
            "score_pca": 60.39426523297491,
            "rank_pca": 222,
            "adv": 30820.0,
            "trades": 17.0,
            "volatility": 0.4681040936535812,
            "spread_pct": 0.026672054960598133,
            "spread_ticks": 2.5714285714285716,
            "amihud": 7.210325185665848e-07,
            "turnover_ratio": 0.0005383587832618385,
            "is_target": false
          },
          {
            "ticker": "5JS",
            "score_pca": 58.96057347670251,
            "rank_pca": 230,
            "adv": 39385.5,
            "trades": 13.0,
            "volatility": 0.23036463063162438,
            "spread_pct": 0.01664684898929847,
            "spread_ticks": 1.2727272727272727,
            "amihud": 0.0,
            "turnover_ratio": 0.00025795781124960673,
            "is_target": false
          },
          {
            "ticker": "OTS",
            "score_pca": 34.76702508960574,
            "rank_pca": 365,
            "adv": 702.0,
            "trades": 1.0,
            "volatility": 0.26243123140416214,
            "spread_pct": 0.1322314049586777,
            "spread_ticks": 16.0,
            "amihud": 1.5127448755767335e-06,
            "turnover_ratio": 0.00020753059346832045,
            "is_target": false
          },
          {
            "ticker": "Q01",
            "score_pca": 70.60931899641577,
            "rank_pca": 165,
            "adv": 144105.5,
            "trades": 52.0,
            "volatility": 0.32476026238851335,
            "spread_pct": 0.011006435966794154,
            "spread_ticks": 1.7339449541284404,
            "amihud": 1.6876706846842815e-07,
            "turnover_ratio": 0.0009301977154636583,
            "is_target": false
          },
          {
            "ticker": "42W",
            "score_pca": 68.27956989247312,
            "rank_pca": 178,
            "adv": 100780.8,
            "trades": 32.0,
            "volatility": 0.6379658741418622,
            "spread_pct": 0.03490909090909094,
            "spread_ticks": 1.0555555555555556,
            "amihud": 2.7958834530390924e-07,
            "turnover_ratio": 0.0026346389394427,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Packaged Foods",
          "sector_count": 14,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5554882108373662,
              "median": 0.3275017823073737,
              "min": 0.0,
              "max": 9.513056291224183,
              "p5": 0.0,
              "p95": 1.641455035933441,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3577542.7108184006,
              "median": 11284.75,
              "min": 0.0,
              "max": 253247897.0,
              "p5": 0.0,
              "p95": 15495136.14999997,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.11389405703833685,
              "median": 0.03713166411173568,
              "min": 0.00028468976419645744,
              "max": 1.4382566585956416,
              "p5": 0.0038941225965018274,
              "p95": 0.5255815906125594,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.010850757227881393,
              "median": 0.0002357334038219389,
              "min": 0.0,
              "max": 4.482235844703711,
              "p5": 0.0,
              "p95": 0.01034212097404971,
              "count": 552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00023511364493226076,
              "median": 8.338899157134085e-08,
              "min": 0.0,
              "max": 0.08334421733167896,
              "p5": 0.0,
              "p95": 7.309719266240982e-05,
              "count": 494
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 544.4731182795699,
              "median": 7.0,
              "min": 0.0,
              "max": 11866.0,
              "p5": 0.0,
              "p95": 3263.5999999999945,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.30318307949034057,
              "median": 0.2838425201853404,
              "min": 0.0,
              "max": 0.7936123447147837,
              "p5": 0.0,
              "p95": 0.6924421388423847,
              "count": 14
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 4273266.342857143,
              "median": 21804.5,
              "min": 0.0,
              "max": 51926272.0,
              "p5": 0.0,
              "p95": 23047440.199999984,
              "count": 14
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.17828966728812137,
              "median": 0.02795339635390183,
              "min": 0.0028394538443825557,
              "max": 1.3716475095785436,
              "p5": 0.003779381429743517,
              "p95": 0.9716732670079523,
              "count": 14
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0006345809044235631,
              "median": 0.00015365662255909603,
              "min": 0.0,
              "max": 0.0026346389394427,
              "p5": 0.0,
              "p95": 0.0023661786590834575,
              "count": 14
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.2213388594810493e-06,
              "median": 1.3987804582701746e-07,
              "min": 0.0,
              "max": 2.246395938516145e-05,
              "p5": 0.0,
              "p95": 1.094079140488984e-05,
              "count": 12
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 696.2857142857143,
              "median": 9.5,
              "min": 0.0,
              "max": 6378.0,
              "p5": 0.0,
              "p95": 4326.5999999999985,
              "count": 14
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 42066.9125,
              "median": 21804.5,
              "min": 702.0,
              "max": 144105.5,
              "p5": 1139.6750000000002,
              "p95": 128941.85499999998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 15.625,
              "median": 9.5,
              "min": 1.0,
              "max": 52.0,
              "p5": 1.0,
              "p95": 44.999999999999986,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.312752942081836,
              "median": 0.2838425201853404,
              "min": 0.09999008084112013,
              "max": 0.6379658741418622,
              "p5": 0.1255972966662852,
              "p95": 0.5785142509709638,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03685298897429497,
              "median": 0.02795339635390183,
              "min": 0.008298755186721999,
              "max": 0.1322314049586777,
              "p5": 0.009246443459747252,
              "p95": 0.09848901729973095,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.4962524987754344,
              "median": 1.7169724770642203,
              "min": 1.0,
              "max": 16.0,
              "p5": 1.0194444444444444,
              "p95": 11.322727272727267,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.098027537099863e-07,
              "median": 2.241777068861687e-07,
              "min": 0.0,
              "max": 1.5127448755767335e-06,
              "p5": 0.0,
              "p95": 1.4719853967423587e-06,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0005906265699547744,
              "median": 0.00023274420235896358,
              "min": 3.324382925925773e-05,
              "max": 0.0026346389394427,
              "p5": 4.2366154793220506e-05,
              "p95": 0.0020380845110500347,
              "count": 8
            }
          },
          "returns": {
            "window_days": 5,
            "n_obs": 5,
            "stock": -0.022727272727272818,
            "market": -0.0012334307159801439,
            "sector": -0.0017138877631148741,
            "peers": -0.0006647025007185947,
            "vs_market": -0.021493842011292674,
            "vs_sector": -0.021013384964157944,
            "vs_peers": -0.022062570226554223
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 37.096774193548384,
          "score_pca_percentile": 37.096774193548384,
          "rank_pca": 352,
          "total": 558,
          "adv_notional_sgd": 2091.5,
          "adv_volume_shares": 8900.0,
          "free_float_shares": null,
          "turnover_ratio": 8.792728709741157e-05,
          "votes": 3.0,
          "trades": 3.0,
          "spread_pct": 0.04320987654320982,
          "spread_ticks": 2.0,
          "amihud": 1.0143028071467457e-05,
          "volatility": 0.6145172958704733
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5339279797874574,
          "loadings": {
            "log_adv": 0.5388200827263961,
            "log_trades": 0.489215410579364,
            "log_turnover": 0.49527568529035126,
            "neg_spread": 0.413080398643354,
            "neg_amihud": 0.1618339159614105,
            "neg_vol": 0.16798084403823912
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
          "peer_median_adv": 20700.75,
          "peer_median_score_pca": 52.956989247311824,
          "peer_median_trades": 12.0,
          "peer_median_volatility": 0.30164687111681265,
          "peer_median_spread_pct": 0.02729257833277942,
          "peer_median_spread_ticks": 1.9744444444444444,
          "peer_median_amihud": 3.4842498524099196e-07,
          "peer_median_turnover_ratio": 0.0002753183795689966,
          "target_vs_peer": {
            "score_pca_delta": -15.86,
            "adv_delta_pct": -89.9,
            "trades_delta_pct": -75.0,
            "volatility_delta_pct": -103.72,
            "spread_pct_delta_pct": -58.32,
            "spread_ticks_delta_pct": 1.29,
            "amihud_delta_pct": -2811.11,
            "turnover_ratio_delta_pct": -68.06
          }
        },
        "peer_liquidity": [
          {
            "ticker": "LGH",
            "score_pca": 37.096774193548384,
            "rank_pca": 352,
            "adv": 2091.5,
            "trades": 3.0,
            "volatility": 0.6145172958704733,
            "spread_pct": 0.04320987654320982,
            "spread_ticks": 2.0,
            "amihud": 1.0143028071467457e-05,
            "turnover_ratio": 8.792728709741157e-05,
            "is_target": true
          },
          {
            "ticker": "Y03",
            "score_pca": 44.623655913978496,
            "rank_pca": 310,
            "adv": 6000.0,
            "trades": 3.0,
            "volatility": 0.18548393314260825,
            "spread_pct": 0.015239802779022876,
            "spread_ticks": 1.8888888888888888,
            "amihud": 5.711939739035772e-07,
            "turnover_ratio": 6.377727099366155e-05,
            "is_target": false
          },
          {
            "ticker": "BQD",
            "score_pca": 36.91756272401434,
            "rank_pca": 353,
            "adv": 1952.5,
            "trades": 2.0,
            "volatility": 0.2026982369053645,
            "spread_pct": 0.0332622601279318,
            "spread_ticks": 2.4375,
            "amihud": 0.0,
            "turnover_ratio": 3.324382925925773e-05,
            "is_target": false
          },
          {
            "ticker": "MV4",
            "score_pca": 46.774193548387096,
            "rank_pca": 298,
            "adv": 15456.999999999998,
            "trades": 6.0,
            "volatility": 0.5542691161516227,
            "spread_pct": 0.03889137237371473,
            "spread_ticks": 2.45,
            "amihud": 1.1313624998585796e-06,
            "turnover_ratio": 7.168018048536888e-05,
            "is_target": false
          },
          {
            "ticker": "D03",
            "score_pca": 59.13978494623656,
            "rank_pca": 229,
            "adv": 25944.5,
            "trades": 18.0,
            "volatility": 0.39641350449494295,
            "spread_pct": 0.022525970475669788,
            "spread_ticks": 2.06,
            "amihud": 5.579292455936406e-07,
            "turnover_ratio": 0.0004388829364442033,
            "is_target": false
          },
          {
            "ticker": "5JS",
            "score_pca": 59.318996415770606,
            "rank_pca": 228,
            "adv": 31262.0,
            "trades": 19.0,
            "volatility": 0.2611831459858615,
            "spread_pct": 0.01871415635375794,
            "spread_ticks": 1.3898305084745763,
            "amihud": 1.3892072488834333e-07,
            "turnover_ratio": 0.00020475243669079243,
            "is_target": false
          },
          {
            "ticker": "OTS",
            "score_pca": 35.12544802867383,
            "rank_pca": 363,
            "adv": 1210.0,
            "trades": 1.0,
            "volatility": 0.34211059624776385,
            "spread_pct": 0.09368635437881871,
            "spread_ticks": 11.5,
            "amihud": 8.922496960774443e-07,
            "turnover_ratio": 0.00034588432244720075,
            "is_target": false
          },
          {
            "ticker": "Q01",
            "score_pca": 68.99641577060932,
            "rank_pca": 174,
            "adv": 124032.0,
            "trades": 42.0,
            "volatility": 0.23511349471387158,
            "spread_pct": 0.011055540931824172,
            "spread_ticks": 1.2972972972972974,
            "amihud": 9.059954520840292e-08,
            "turnover_ratio": 0.000780145315703287,
            "is_target": false
          },
          {
            "ticker": "42W",
            "score_pca": 65.23297491039428,
            "rank_pca": 195,
            "adv": 93739.8,
            "trades": 27.0,
            "volatility": 0.4883826569054912,
            "spread_pct": 0.03205918618988905,
            "spread_ticks": 1.0133333333333334,
            "amihud": 0.0,
            "turnover_ratio": 0.00229604863093728,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Packaged Foods",
          "sector_count": 14,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6264388506293332,
              "median": 0.4344028396196831,
              "min": 0.0,
              "max": 7.784600182411427,
              "p5": 0.027576072067872867,
              "p95": 1.7933611590139857,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3733066.234676325,
              "median": 14096.25,
              "min": 0.0,
              "max": 331579444.0,
              "p5": 0.0,
              "p95": 15599784.749999937,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09804088968891381,
              "median": 0.02764749444581584,
              "min": 0.0002742695631217783,
              "max": 1.3777777777777778,
              "p5": 0.0037907610251629626,
              "p95": 0.4865165337777122,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.010670267886644635,
              "median": 0.00031977321801776457,
              "min": 0.0,
              "max": 4.482235844703711,
              "p5": 0.0,
              "p95": 0.011489440966607313,
              "count": 552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.086591074468789e-05,
              "median": 1.1289074346820647e-07,
              "min": 0.0,
              "max": 0.0059715821812596145,
              "p5": 0.0,
              "p95": 4.614579663070132e-05,
              "count": 544
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 509.84767025089604,
              "median": 7.0,
              "min": 0.0,
              "max": 12958.0,
              "p5": 0.0,
              "p95": 2911.75,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3125479039296796,
              "median": 0.27250467575567494,
              "min": 0.0,
              "max": 0.6236327511555346,
              "p5": 0.0,
              "p95": 0.6177077052202448,
              "count": 14
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3044839.0928571424,
              "median": 20700.75,
              "min": 0.0,
              "max": 34766694.0,
              "p5": 0.0,
              "p95": 17041587.89999999,
              "count": 14
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.13738387816884554,
              "median": 0.02729257833277942,
              "min": 0.003023226492139868,
              "max": 1.3777777777777778,
              "p5": 0.004121344383728844,
              "p95": 0.6244487097462141,
              "count": 14
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0005612623797202613,
              "median": 0.000146339861894102,
              "min": 0.0,
              "max": 0.00229604863093728,
              "p5": 0.0,
              "p95": 0.002023784757447059,
              "count": 14
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.1344077841355144e-06,
              "median": 1.1476013504837313e-07,
              "min": 0.0,
              "max": 1.0143028071467457e-05,
              "p5": 0.0,
              "p95": 5.1866120070825676e-06,
              "count": 12
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 595.8571428571429,
              "median": 12.0,
              "min": 0.0,
              "max": 5060.0,
              "p5": 0.0,
              "p95": 3812.649999999999,
              "count": 14
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 37449.725,
              "median": 20700.75,
              "min": 1210.0,
              "max": 124032.0,
              "p5": 1469.875,
              "p95": 113429.72999999998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 14.75,
              "median": 12.0,
              "min": 1.0,
              "max": 42.0,
              "p5": 1.35,
              "p95": 36.74999999999999,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3332068355684408,
              "median": 0.30164687111681265,
              "min": 0.18548393314260825,
              "max": 0.5542691161516227,
              "p5": 0.19150893945957295,
              "p95": 0.5312088554154766,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.033179330451328634,
              "median": 0.02729257833277942,
              "min": 0.011055540931824172,
              "max": 0.09368635437881871,
              "p5": 0.012520032578343719,
              "p95": 0.0745081106770323,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.0046062534992624,
              "median": 1.9744444444444444,
              "min": 1.0133333333333334,
              "max": 11.5,
              "p5": 1.1127207207207208,
              "p95": 8.332499999999996,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.2278196069124844e-07,
              "median": 3.4842498524099196e-07,
              "min": 0.0,
              "max": 1.1313624998585796e-06,
              "p5": 0.0,
              "p95": 1.0476730185351822e-06,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0005293018653701314,
              "median": 0.0002753183795689966,
              "min": 3.324382925925773e-05,
              "max": 0.00229604863093728,
              "p5": 4.393053386629907e-05,
              "p95": 0.0017654824706053816,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": -0.06521739130434856,
            "market": -0.024571683631716912,
            "sector": -0.008766341306679748,
            "peers": -0.03427858617971735,
            "vs_market": -0.04064570767263165,
            "vs_sector": -0.05645104999766881,
            "vs_peers": -0.030938805124631208
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 44.982078853046595,
          "score_pca_percentile": 44.982078853046595,
          "rank_pca": 308,
          "total": 558,
          "adv_notional_sgd": 6182.0,
          "adv_volume_shares": 28100.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0002776131199367714,
          "votes": 5.0,
          "trades": 5.0,
          "spread_pct": 0.03030303030303026,
          "spread_ticks": 1.375,
          "amihud": 1.8115942028985492e-06,
          "volatility": 0.6068307706446365
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.5501350441130107,
          "loadings": {
            "log_adv": 0.524223412967728,
            "log_trades": 0.47082611270338903,
            "log_turnover": 0.477730501937241,
            "neg_spread": 0.42637591942522457,
            "neg_amihud": 0.13087149141781648,
            "neg_vol": 0.2763374395195923
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
          "peer_median_adv": 14659.25,
          "peer_median_score_pca": 53.853046594982075,
          "peer_median_trades": 10.0,
          "peer_median_volatility": 0.30587532087072505,
          "peer_median_spread_pct": 0.02468708898047267,
          "peer_median_spread_ticks": 1.5624375624375624,
          "peer_median_amihud": 6.908504962284787e-08,
          "peer_median_turnover_ratio": 0.00011557430915064706,
          "target_vs_peer": {
            "score_pca_delta": -8.87,
            "adv_delta_pct": -57.8,
            "trades_delta_pct": -50.0,
            "volatility_delta_pct": -98.39,
            "spread_pct_delta_pct": -22.75,
            "spread_ticks_delta_pct": -12.0,
            "amihud_delta_pct": -2522.27,
            "turnover_ratio_delta_pct": 140.2
          }
        },
        "peer_liquidity": [
          {
            "ticker": "LGH",
            "score_pca": 44.982078853046595,
            "rank_pca": 308,
            "adv": 6182.0,
            "trades": 5.0,
            "volatility": 0.6068307706446365,
            "spread_pct": 0.03030303030303026,
            "spread_ticks": 1.375,
            "amihud": 1.8115942028985492e-06,
            "turnover_ratio": 0.0002776131199367714,
            "is_target": true
          },
          {
            "ticker": "Y03",
            "score_pca": 50.358422939068106,
            "rank_pca": 278,
            "adv": 9740.5,
            "trades": 5.0,
            "volatility": 0.1415632343311484,
            "spread_pct": 0.011435832274459986,
            "spread_ticks": 1.3846153846153846,
            "amihud": 5.127951058476975e-07,
            "turnover_ratio": 0.00010204363358985849,
            "is_target": false
          },
          {
            "ticker": "BQD",
            "score_pca": 37.27598566308244,
            "rank_pca": 351,
            "adv": 2062.5,
            "trades": 2.0,
            "volatility": 0.16340310143332812,
            "spread_pct": 0.03174603174603177,
            "spread_ticks": 2.4,
            "amihud": 0.0,
            "turnover_ratio": 3.324382925925773e-05,
            "is_target": false
          },
          {
            "ticker": "MV4",
            "score_pca": 36.73835125448029,
            "rank_pca": 354,
            "adv": 4030.0,
            "trades": 3.0,
            "volatility": 0.4055246709052404,
            "spread_pct": 0.03414381789963789,
            "spread_ticks": 2.1666666666666665,
            "amihud": 4.7600913937547603e-07,
            "turnover_ratio": 1.748297085008997e-05,
            "is_target": false
          },
          {
            "ticker": "D03",
            "score_pca": 59.85663082437276,
            "rank_pca": 225,
            "adv": 24543.0,
            "trades": 18.0,
            "volatility": 0.34994761907201594,
            "spread_pct": 0.018777543590726208,
            "spread_ticks": 1.7402597402597402,
            "amihud": 3.956739229043613e-07,
            "turnover_ratio": 0.0004388829364442033,
            "is_target": false
          },
          {
            "ticker": "5JS",
            "score_pca": 57.34767025089605,
            "rank_pca": 239,
            "adv": 19578.0,
            "trades": 15.0,
            "volatility": 0.26180302266943417,
            "spread_pct": 0.016857720836142967,
            "spread_ticks": 1.2727272727272727,
            "amihud": 5.834400518118084e-08,
            "turnover_ratio": 0.00012910498471143563,
            "is_target": false
          },
          {
            "ticker": "OTS",
            "score_pca": 25.985663082437277,
            "rank_pca": 414,
            "adv": 12.0,
            "trades": 1.0,
            "volatility": 0.5436617138378714,
            "spread_pct": 0.12594458438287154,
            "spread_ticks": 14.625,
            "amihud": 0.0,
            "turnover_ratio": 3.4588432244720077e-06,
            "is_target": false
          },
          {
            "ticker": "Q01",
            "score_pca": 70.07168458781362,
            "rank_pca": 168,
            "adv": 108946.0,
            "trades": 32.0,
            "volatility": 0.17558089989664866,
            "spread_pct": 0.007388798581350679,
            "spread_ticks": 1.2243589743589745,
            "amihud": 7.982609406451489e-08,
            "turnover_ratio": 0.0007267368344326462,
            "is_target": false
          },
          {
            "ticker": "42W",
            "score_pca": 68.27956989247312,
            "rank_pca": 178,
            "adv": 102315.0,
            "trades": 30.0,
            "volatility": 0.3726693899975558,
            "spread_pct": 0.030596634370219134,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.002555225104821762,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Packaged Foods",
          "sector_count": 14,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6543268126225732,
              "median": 0.42442061144824095,
              "min": 0.0,
              "max": 8.04623734946161,
              "p5": 0.14394989677788117,
              "p95": 1.8768928544174406,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2621890.3815770634,
              "median": 14534.599999999999,
              "min": 0.0,
              "max": 253681920.0,
              "p5": 0.0,
              "p95": 10088185.14999998,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09369265357230896,
              "median": 0.026431718061673836,
              "min": 0.0002689112087055741,
              "max": 1.3033707865168538,
              "p5": 0.0035597771801051032,
              "p95": 0.504291497975707,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003682569702569623,
              "median": 0.00028281606379044496,
              "min": 0.0,
              "max": 0.9821369718541955,
              "p5": 0.0,
              "p95": 0.009750840111708533,
              "count": 552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.335869152014564e-05,
              "median": 1.1772739045466328e-07,
              "min": 0.0,
              "max": 0.0071259534969212385,
              "p5": 0.0,
              "p95": 3.923991701912421e-05,
              "count": 555
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 379.8351254480287,
              "median": 7.5,
              "min": 0.0,
              "max": 10826.0,
              "p5": 0.0,
              "p95": 2028.349999999998,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.344839470126806,
              "median": 0.30587532087072505,
              "min": 0.1415632343311484,
              "max": 0.7922078416962737,
              "p5": 0.1557591479475652,
              "p95": 0.6717127455127094,
              "count": 14
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1616864.0,
              "median": 14659.25,
              "min": 0.0,
              "max": 19773837.0,
              "p5": 0.0,
              "p95": 8559752.949999994,
              "count": 14
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1389967050097277,
              "median": 0.024540286946878234,
              "min": 0.0031963895717532194,
              "max": 1.3033707865168538,
              "p5": 0.004381289852566905,
              "p95": 0.6634261520924927,
              "count": 14
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0004357641660519709,
              "median": 0.00011557430915064706,
              "min": 0.0,
              "max": 0.002555225104821762,
              "p5": 0.0,
              "p95": 0.0015430446609862134,
              "count": 14
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.8180525457476095e-05,
              "median": 7.223440301915498e-08,
              "min": 0.0,
              "max": 0.0003637301526001612,
              "p5": 0.0,
              "p95": 0.00014511182121632412,
              "count": 14
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 352.0,
              "median": 10.0,
              "min": 0.0,
              "max": 3422.0,
              "p5": 0.0,
              "p95": 2088.1999999999994,
              "count": 14
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 33903.375,
              "median": 14659.25,
              "min": 12.0,
              "max": 108946.0,
              "p5": 729.6750000000001,
              "p95": 106625.15,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 13.25,
              "median": 10.0,
              "min": 1.0,
              "max": 32.0,
              "p5": 1.35,
              "p95": 31.299999999999997,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3017692065179054,
              "median": 0.30587532087072505,
              "min": 0.1415632343311484,
              "max": 0.5436617138378714,
              "p5": 0.1492071878169113,
              "p95": 0.4953137488114505,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03461137046018002,
              "median": 0.02468708898047267,
              "min": 0.007388798581350679,
              "max": 0.12594458438287154,
              "p5": 0.008805260373938936,
              "p95": 0.09381431611373972,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.226703504828505,
              "median": 1.5624375624375624,
              "min": 1.0,
              "max": 14.625,
              "p5": 1.078525641025641,
              "p95": 10.346249999999994,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.9033103342165382e-07,
              "median": 6.908504962284787e-08,
              "min": 0.0,
              "max": 5.127951058476975e-07,
              "p5": 0.0,
              "p95": 4.999200175824199e-07,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0005007723921667157,
              "median": 0.00011557430915064706,
              "min": 3.4588432244720077e-06,
              "max": 0.002555225104821762,
              "p5": 8.367287893438296e-06,
              "p95": 0.0019152542101855705,
              "count": 8
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 62,
            "stock": -0.10416666666666785,
            "market": 0.07110197371973892,
            "sector": -0.0030021569861736763,
            "peers": -0.024016271569982206,
            "vs_market": -0.17526864038640677,
            "vs_sector": -0.10116450968049417,
            "vs_peers": -0.08015039509668564
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Near-term tradability looks weak on this snapshot, with the 1D score 10.5 points below the peer median. That matters because immediate access can feel thinner than the broader trend implies.",
        "market_comparison": "Return -4.4% vs peers 0.0%."
      },
      "1w": {
        "liquidity": "1W score 39.8 vs peer median 53.6 (-13.8 pts).",
        "market_comparison": "The stock fell 2.3% over the week compared with a 0.1% drop for peers. That underperformance matters because the tape is not being supported by relative strength."
      },
      "30d": {
        "liquidity": "Monthly tradability looks weak relative to peers, with the 1M score 15.9 points below the peer median. That matters because peer-relative access is thinner than the company’s size alone would suggest.",
        "market_comparison": "The stock fell 6.5% over the month compared with a 3.4% drop for peers and a 2.5% drop for the market. That matters because weaker performance can add pressure to trading conditions."
      },
      "3m": {
        "liquidity": "Three-month tradability looks mixed overall, with the score 8.9 points below the peer median rather than deeply lagging. That matters because access is present but not consistently strong for the company’s size.",
        "market_comparison": "The stock fell 10.4% over three months compared with a 2.4% drop for peers. That matters because sustained underperformance can leave liquidity less resilient."
      }
    }
  },
  "q02": {
    "driver_model": {
      "valid": true,
      "model_method": "ols_with_volatility_regimes",
      "estimation_window_days": 61,
      "reporting_window_days": 61,
      "available_history_days": 61,
      "n_regimes": 2,
      "current_regime": 1,
      "current_regime_label": "High Volatility",
      "current_regime_probability": 1.0,
      "current_driver_mix": {
        "market_share": {
          "median": 0.25990770935867114,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "26.0%",
          "display_range": null,
          "display_text": "26.0%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 61 trading days.",
          "kind": "share_pct",
          "value_pct": 26.0,
          "plain_english": "Market explains about 26.0% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.4179994532187345,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "41.8%",
          "display_range": null,
          "display_text": "41.8%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 61 trading days.",
          "kind": "share_pct",
          "value_pct": 41.8,
          "plain_english": "Sector explains about 41.8% of price moves in the current state."
        },
        "company_share": {
          "median": 0.32209283742259437,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "32.2%",
          "display_range": null,
          "display_text": "32.2%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 61 trading days.",
          "kind": "share_pct",
          "value_pct": 32.2,
          "plain_english": "Company-specific explains about 32.2% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 2.504720769847126,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "2.50",
          "display_range": null,
          "display_text": "2.50",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 61 trading days.",
          "kind": "beta",
          "strength_label": "High",
          "plain_english": "High market link: a 1% market move has lined up with about a 2.50% stock move in the same direction in this state.",
          "value_num": 2.5
        },
        "beta_stock_lag": {
          "median": -0.9989208532307714,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-1.00",
          "display_range": null,
          "display_text": "-1.00",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 61 trading days.",
          "kind": "lag_beta",
          "value_num": -1.0
        },
        "beta_sector": {
          "median": 1.939475703880911,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.94",
          "display_range": null,
          "display_text": "1.94",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 61 trading days.",
          "kind": "beta",
          "strength_label": "High",
          "plain_english": "High sector link: a 1% sector move has lined up with about a 1.94% stock move in the same direction in this state.",
          "value_num": 1.94
        },
        "beta_market_lag": {
          "median": 0.7904022945440988,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.79",
          "display_range": null,
          "display_text": "0.79",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 61 trading days.",
          "kind": "lag_beta",
          "value_num": 0.79
        },
        "beta_sector_lag": {
          "median": 4.108610546444988,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "4.11",
          "display_range": null,
          "display_text": "4.11",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 61 trading days.",
          "kind": "lag_beta",
          "value_num": 4.11
        },
        "posterior_source": null,
        "intervals_collapsed": false,
        "confidence_label": "High, limited history",
        "confidence_note": "Based on 61 trading days relative to the 252-day target."
      },
      "rolling_windows": {},
      "monthly_history": [
        {
          "month_key": "2025-12",
          "month_label": "December 2025",
          "month_short_label": "Dec",
          "period_label": "2025-12-15 to 2025-12-31",
          "n_obs": 12,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5639107275401654,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "56.4%",
            "display_range": null,
            "display_text": "56.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 12 trading days.",
            "kind": "share_pct",
            "value_pct": 56.4,
            "plain_english": "Company-specific explains about 56.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.18245070546760514,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "18.2%",
              "display_range": null,
              "display_text": "18.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 12 trading days.",
              "kind": "share_pct",
              "value_pct": 18.2,
              "plain_english": "Market explains about 18.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2536385669922295,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "25.4%",
              "display_range": null,
              "display_text": "25.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 12 trading days.",
              "kind": "share_pct",
              "value_pct": 25.4,
              "plain_english": "Sector explains about 25.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5639107275401654,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.4%",
              "display_range": null,
              "display_text": "56.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 12 trading days.",
              "kind": "share_pct",
              "value_pct": 56.4,
              "plain_english": "Company-specific explains about 56.4% of price moves in the current state."
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
            "median": 0.5932333656330495,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "59.3%",
            "display_range": null,
            "display_text": "59.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 59.3,
            "plain_english": "Company-specific explains about 59.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.1853112670224285,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "18.5%",
              "display_range": null,
              "display_text": "18.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 18.5,
              "plain_english": "Market explains about 18.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.22145536734452193,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "22.1%",
              "display_range": null,
              "display_text": "22.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 22.1,
              "plain_english": "Sector explains about 22.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5932333656330495,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "59.3%",
              "display_range": null,
              "display_text": "59.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 59.3,
              "plain_english": "Company-specific explains about 59.3% of price moves in the current state."
            }
          },
          "summary": "Jan: Mostly company-driven."
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
            "median": 0.3761964400033791,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "37.6%",
            "display_range": null,
            "display_text": "37.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
            "kind": "share_pct",
            "value_pct": 37.6,
            "plain_english": "Company-specific explains about 37.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3634321979530605,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.3%",
              "display_range": null,
              "display_text": "36.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 36.3,
              "plain_english": "Market explains about 36.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2603713620435603,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.0%",
              "display_range": null,
              "display_text": "26.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 26.0,
              "plain_english": "Sector explains about 26.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3761964400033791,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.6%",
              "display_range": null,
              "display_text": "37.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 37.6,
              "plain_english": "Company-specific explains about 37.6% of price moves in the current state."
            }
          },
          "summary": "Feb: More mixed, though company-driven still has the largest share."
        },
        {
          "month_key": "2026-03",
          "month_label": "March 2026",
          "month_short_label": "Mar",
          "period_label": "2026-03-02 to 2026-03-13",
          "n_obs": 10,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4510075903092634,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "45.1%",
            "display_range": null,
            "display_text": "45.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
            "kind": "share_pct",
            "value_pct": 45.1,
            "plain_english": "Company-specific explains about 45.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3467275588587097,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.7%",
              "display_range": null,
              "display_text": "34.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
              "kind": "share_pct",
              "value_pct": 34.7,
              "plain_english": "Market explains about 34.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.20226485083202672,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.2%",
              "display_range": null,
              "display_text": "20.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
              "kind": "share_pct",
              "value_pct": 20.2,
              "plain_english": "Sector explains about 20.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4510075903092634,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.1%",
              "display_range": null,
              "display_text": "45.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
              "kind": "share_pct",
              "value_pct": 45.1,
              "plain_english": "Company-specific explains about 45.1% of price moves in the current state."
            }
          },
          "summary": "Mar: Mostly company-driven."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5084745762711864,
          "expected_duration_days": 6.0,
          "current_probability": 0.0,
          "n_days_effective": 30.0,
          "volatility": {
            "median": 0.029314601504705787,
            "low": 0.029314601504705787,
            "high": 0.029314601504705787
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": 0.0
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4915254237288136,
          "expected_duration_days": 5.8,
          "current_probability": 1.0,
          "n_days_effective": 29.0,
          "volatility": {
            "median": 0.04602951965056627,
            "low": 0.04602951965056627,
            "high": 0.04602951965056627
          },
          "volatility_label": "High Volatility",
          "current_probability_display": null
        }
      ],
      "transitions": {
        "mean": [
          [
            0.8333333333333334,
            0.16666666666666666
          ],
          [
            0.14285714285714285,
            0.8571428571428571
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            25.0,
            5.0
          ],
          [
            4.0,
            24.0
          ]
        ]
      },
      "methodology": {
        "estimation_window_days": 61,
        "reporting_window_days": 61,
        "current_mix_method": "ols_last_5d",
        "monthly_history_method": "ols_per_month",
        "regime_inference": "volatility_kmeans",
        "distribution": "gaussian",
        "history_limited": true,
        "current_driver_mix_basis": "ols_recent_window",
        "sector_proxy_equals_market": false
      },
      "client_read": {
        "market_link_display": "2.50",
        "sector_link_display": "1.94",
        "market_link_explainer": "High market link. A 1% market move has lined up with about a 2.50% stock move in the same direction in this state. This is a point estimate from 61 trading days.",
        "sector_link_explainer": "High sector link. A 1% sector move has lined up with about a 1.94% stock move in the same direction in this state. This is a point estimate from 61 trading days.",
        "stock_persistence_display": "-1.00",
        "point_estimate_note": "Point estimate only because the current state has 61 trading days.",
        "history_limited_note": "Read is based on 61 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "High Volatility",
        "dominant_driver": "sector",
        "dominant_driver_label": "Sector",
        "driver_share_pct": 41.8,
        "driver_share_display": "41.8%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 61 trading days relative to the 252-day target.",
        "history_days": 61,
        "history_limited": true,
        "volatility_label": "High Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.8571428571428571,
        "effective_days": 29.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 5.8 days.",
        "expected_duration_days": 5.8
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
          "pct_time": 0.5084745762711864,
          "expected_duration_days": 6.0,
          "current_probability": 0.0,
          "n_days_effective": 30.0,
          "volatility": {
            "median": 0.029314601504705787,
            "low": 0.029314601504705787,
            "high": 0.029314601504705787
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4915254237288136,
          "expected_duration_days": 5.8,
          "current_probability": 1.0,
          "n_days_effective": 29.0,
          "volatility": {
            "median": 0.04602951965056627,
            "low": 0.04602951965056627,
            "high": 0.04602951965056627
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.8333333333333334,
          0.16666666666666666
        ],
        [
          0.14285714285714285,
          0.8571428571428571
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.8333333333333334,
            0.16666666666666666
          ],
          [
            0.14285714285714285,
            0.8571428571428571
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            25.0,
            5.0
          ],
          [
            4.0,
            24.0
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
        "text": "Liquidity score: 45.0 — Moderate",
        "bg": "bg-amber-500/20",
        "textColor": "text-amber-400"
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
        "bg": "bg-amber-500/20",
        "textColor": "text-amber-400"
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
    "liq_subtitle": "Liquidity looks mixed for the stock’s size, with the 3M score at 45.0 compared with a peer median of 53.9. Near-term trading quality is weaker, with the 1W spread 17.4% above the 1M level.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent performance is weaker than peers and the market, with the stock down 6.5% over one month compared with peers down 3.4% and the market down 2.5%.",
    "perf_insight": "The stock has underperformed over the past month, falling 6.5% compared with smaller declines for peers and the market. That matters because weaker price momentum is not offsetting the recent rise in spread.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Sector moves are the main influence on the stock right now, accounting for 41.8% of the tape. That points to broader market factors still playing a meaningful role in trading.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly sector-driven, accounting for about 41.8% of price changes. Other influences are market 26.0%, and company-specific 32.2%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 26.0%, sector 41.8%, and company-specific 32.2%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has been consistently company-driven across Jan to Mar."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 26.0%, sector 41.8%, and company-specific 32.2%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "Sector influence remains meaningful at 41.8%, while the 1W spread is 17.4% above the 1M level. That leaves near-term access more exposed to broader market conditions.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: sector moves are leading, accounting for 41.8% of recent price action.",
      "Monthly change: the pattern has not been steady, shifting from mostly sector in January to more mixed in February before returning to mostly sector in March."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Snapshot unavailable.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on available history from Dec 11, 2025 to Mar 13, 2026 (62 trading days • 1,036 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on top 10 bid and top 10 ask levels.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate displayed depth broadly matches the stronger monthly liquidity read.",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "Displayed depth looks balanced, with top-10 bid depth at 1.09x ask depth and a 2-tick spread. That points to orderly trading in the current snapshot, even as the broader liquidity picture remains mixed.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 21.4% of total trades.",
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
    "intraday_insight": "Trade-size history is limited to 62 trading days and 1,036 trades from Dec 11, 2025 to Mar 13, 2026. That gives only a short window for intraday context.",
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
    "exec_subtitle": "Liquidity is mixed for the stock’s size, and recent trading conditions are less supportive. Sector moves still explain a meaningful share of the tape, while recent returns have lagged peers and the market.",
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
        "value": "45.0/100",
        "sub": "Peer median 53.9 (-8.9 pts)",
        "interp": {
          "text": "Moderate",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "S$6.2K",
        "sub": "Peer median S$14.7K",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "3.03%",
        "sub": "1.38 ticks; peers 2.47%",
        "interp": {
          "text": "Wider",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity looks mixed for the stock’s size, with a 3M score of 45.0 compared with a peer median of 53.9. The near-term picture is weaker because the 1W spread is 17.4% above the 1M level, which suggests thinner day-to-day access.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "0.220",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "4.55%",
        "note": "2.00 ticks",
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
        "text": "Estimated impact ~-12.21% with 94.8% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-12.21% with 9.5% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-12.21% with 3.8% fill.",
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
        "value": "45",
        "suffix": "/100",
        "bar_pct": 45,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Rank 308/558",
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
        "value": "3.03",
        "suffix": "%",
        "bar_pct": 30,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "3.03% • 1.38 ticks vs peers 2.47%",
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
        "value": "S$6.2K",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-red-400",
        "color_bar": "bg-red-500",
        "subtext": "Peer median S$14.7K",
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
        "value": "41.8",
        "suffix": "sector",
        "bar_pct": 42,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 26.0% • Company 32.2%",
        "interpretation": {
          "text": "Sector",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity looks mixed rather than clearly strong or weak. The 3M liquidity score is 45.0 compared with a peer median of 53.9, which leaves peer-relative access somewhat behind the group.",
      "Recent trading conditions have pulled",
      "Displayed depth looks balanced in the current snapshot, with top-10 bid depth at 1.09x ask depth and a 2-tick spread. Sector moves still explain 41.8% of the tape, so broader market conditions remain a meaningful influence on trading."
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
      "overall": "3M liquidity is mixed: score 45.0 vs peer median 53.9 (-8.9",
      "strengths": [
        "3M score 45.0 vs peer median 53.9 (-8.9 pts)."
      ],
      "concerns": [
        "1W spread up 17.4% from 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: -8.9 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "3M return is -10.4%, worse than market, sector, and peers, which suggests weaker price performance than comparable names.",
        "vs_market": "Worse than market: -10.4% vs market 7.1%.",
        "vs_sector": "Worse than sector: -10.4% vs sector -0.3%.",
        "vs_peers": "Worse than peers: -10.4% vs peers -2.4%."
      },
      "adv": {
        "insight": "average daily volume is S$6.2K, worse than market, sector, and peers, which suggests smaller day-to-day trading size than comparable names.",
        "vs_market": "Worse than market: S$6.2K vs market S$14.5K.",
        "vs_sector": "Worse than sector: S$6.2K vs sector S$14.7K.",
        "vs_peers": "Worse than peers: S$6.2K vs peers S$14.7K."
      },
      "spread": {
        "insight": "Spread is 3.03%, worse than market, sector, and peers, which suggests trading costs are heavier than comparable names.",
        "vs_market": "Worse than market: 3.03% vs market 2.64%.",
        "vs_sector": "Worse than sector: 3.03% vs secto%.",
        "vs_peers": "Worse than peers: 3.03% vs peers 2.47%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.03%, better than sector and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "In line with market: 0.03% vs market 0.03%.",
        "vs_sector": "Better than sector: 0.03% vs sector 0.01%.",
        "vs_peers": "Better than peers: 0.03% vs peers 0.01%."
      },
      "volatility": {
        "insight": "Volatility is 60.68%, worse than market, sector, and peers, which suggests day-to-day price swings are heavier than comparable names.",
        "vs_market": "Worse than market: 60.68% vs market 42.44%.",
        "vs_sector": "Worse than sector: 60.68% vs sector 30.59%.",
        "vs_peers": "Worse than peers: 60.68% vs peers 30.59%."
      },
      "trades": {
        "insight": "Trades is 5, worse than market, sector, and peers, which suggests activity is thinner than comparable names.",
        "vs_market": "Worse than market: 5 vs market 8.",
        "vs_sector": "Worse than sector: 5 vs sector 10.",
        "vs_peers": "Worse than peers: 5 vs peers 10."
      },
      "amihud": {
        "insight": "Price impact is 1.81e-06, worse than market, sector, and peers, which suggests trades move price more than comparable names.",
        "vs_market": "Worse than market: 1.81e-06 vs market 1.18e-07.",
        "vs_sector": "Worse than sector: 1.81e-06 vs sector 7.22e-08.",
        "vs_peers": "Worse than peers: 1.81e-06 vs peers 6.91e-08."
      }
    },
    "performance": {
      "overall": "Recent performance is weak relative to peers and the market, with the stock down 6.5% over one month compared with peers down 3.4% and the market down 2.5%. Liquidity broadly confirms that move rather than contradicting it, because the one-week spread is 17.4% above the one-month average and the three-month liquidity score of 45.0 sits 8.9 points below the peer median. The driver picture is mixed, but it leans sector-linked rather than purely company-specific, as sector factors account for 41.8% of the tape.",
      "conclusion": "The move looks mainly sector-linked, but weaker liquidity and deeper underperformance than peers suggest some stock-specific pressure as well."
    },
    "drivers": {
      "overall": "Sector moves are the clearest driver now, with 41.8% of recent price action linked to the group. That means the stock is not trading on company factors alone, which matters because recent price moves may track sector sentiment more closely than stock-specific developments.",
      "beta": "The current read is mixed rather than fully established. Sector influence is leading now, but the stock has also underperformed over 1M at -6.5%, compared with -3.4% for peers and -2.5% for the market, while the 1W spread is 17.4% above the 1M average, so weaker trading quality is adding friction around those moves.",
      "rolling_change": "The monthly pattern has been uneven rather than stable. January and March were mostly sector, while February was more mixed, so the current sector-led read looks more like a recent shift than a settled longer-running pattern."
    },
    "regime": {
      "overall": "The stock is trading in a higher-volatility backdrop, which matters because trading conditions are less steady when price moves are larger. Evidence is mixed, but the state has shown enough persistence to be more than a brief one-day swing.",
      "current": "High Volatility is in place now, while sector moves still explain 41.8% of the tape. That points to a market backdrop that is being shaped meaningfully by broader trading conditions.",
      "transitions": "The current state looks relatively persistent rather than short-lived, with a typical run length of about 5.8 days. Even so, evidence is mixed, so the backdrop can still change over a short period.",
      "trading_implications": "This state looks more persistent, with a typical run length of about 5.8 days."
    },
    "execution": {
      "overall": "Current displayed liquidity looks balanced, as top-10 bid depth is slightly stronger than ask depth at 1.09x and the spread is 2 ticks. That matters because the book does not point to immediate one-sided pressure even though the broader picture is mixed.",
      "concern": "The clearest stress point is that spread has risen 17.4% over the past week compared with the 1M level. That matters because near-term trading quality has weakened even if the book looks orderly in this snapshot.",
      "peer_context": "The book is more supportive than the broader peer read, with balanced near-touch depth despite a 3M liquidity score of 45.0 compared with a peer median of 53.9. Trade-size history is limited to 62 trading days and 1,036 trades, so historical size context is useful but not fully settled."
    },
    "trader_composition": {
      "overall": "By trade count and value, flow looks mainly institution-like.",
      "retail_heavy": "The mix is not retail-heavy because retail-like trades are close to institution-like on count at 23.5% compared with 24.7%, but far lower on value at 7.6% compared with 36.4%. That matters because participation is broad, while larger trade value still sits more with institution-like flow.",
      "institutional_gap": "The institutional read is directionally clear, but it is not fully clean because ambiguous or unclear flow represents 40.3% of trade count. That leaves the overall mix fully reflective of day-to-day access in part, but still mixed.",
      "peer_comparison": "The institution-like skew is the key read, while peer comparison is available in the report tables. That matters because the mix can be judged in a broader market context, but the current signal is only moderately strong."
    },
    "price_moving": {
      "overall": "Price-moving trades account fo% of total trades, so a meaningful share of activity is moving the tape. That matters because execution quality can shift quickly when a fifth of trades are moving price. Ambiguous or unclear flow is 40.3% of trade count, so the read is not fully clean. Positive and negative price-moving trade asymmetry is available in the report data. The current read is mixed, so directionality looks less decisive than the headline share of price-moving trades.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity looks low and is not the main factor in current trading conditions. The clearer pressure points are weaker 1M price performance, at -6.5% compared with -3.4% for peers and -2.5% for the market, and a 1W spread that is 17.4% above the 1M level, which matters because recent trading quality looks weaker for reasons other than short selling.",
      "level": "Low short interest",
      "correlation": "No clear relationship (correlation undefined)",
      "trend": "Short interest appears stable rather than rising, so there is no clear sign of a new short-driven change in the tape. Evidence is mixed and history is limited, which matters because the broader picture still points more to weaker recent trading conditions than to short activity.",
      "peaks": "0 notable peak days identified."
    },
    "intraday": {
      "overall": "Session split is open 13.9%, continuous 83.6%, and close 1.5%. Current trading concentration score is 0.564.",
      "hhi_interpretation": "Ambiguous or unclear flow is 40.3% of trade count, so the read is not fully clean.",
      "best_times": "The continuous session is the clearest window for liquidity because it accounts for 83.6% of activity, far ahead of the open and close. That matters because most trading interest is available during the core part of the day.",
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
        "LGH",
        "Y03",
        "BQD",
        "MV4",
        "D03",
        "5JS",
        "OTS",
        "Q01",
        "42W"
      ],
      "scores": [
        44.982078853046595,
        50.358422939068106,
        37.27598566308244,
        36.73835125448029,
        59.85663082437276,
        57.34767025089605,
        25.985663082437277,
        70.07168458781362,
        68.27956989247312
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
        6182.0,
        9740.5,
        2062.5,
        4030.0,
        24543.0,
        19578.0,
        12.0,
        108946.0,
        102315.0
      ],
      "total": 558
    },
    "market_comparison": {
      "sector_name": "Packaged Foods",
      "sector_count": 14,
      "market_count": 558,
      "company": {
        "volatility": 0.6068307706446365,
        "adv": 6182.0,
        "spread_pct": 0.03030303030303026,
        "turnover_ratio": 0.0002776131199367714,
        "amihud": 1.8115942028985492e-06,
        "trades": 5.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6543268126225732,
          "median": 0.42442061144824095,
          "min": 0.0,
          "max": 8.04623734946161,
          "p5": 0.14394989677788117,
          "p95": 1.8768928544174406,
          "count": 558
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 2621890.3815770634,
          "median": 14534.599999999999,
          "min": 0.0,
          "max": 253681920.0,
          "p5": 0.0,
          "p95": 10088185.14999998,
          "count": 558
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.09369265357230896,
          "median": 0.026431718061673836,
          "min": 0.0002689112087055741,
          "max": 1.3033707865168538,
          "p5": 0.0035597771801051032,
          "p95": 0.504291497975707,
          "count": 557
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.003682569702569623,
          "median": 0.00028281606379044496,
          "min": 0.0,
          "max": 0.9821369718541955,
          "p5": 0.0,
          "p95": 0.009750840111708533,
          "count": 552
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 3.335869152014564e-05,
          "median": 1.1772739045466328e-07,
          "min": 0.0,
          "max": 0.0071259534969212385,
          "p5": 0.0,
          "p95": 3.923991701912421e-05,
          "count": 555
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 379.8351254480287,
          "median": 7.5,
          "min": 0.0,
          "max": 10826.0,
          "p5": 0.0,
          "p95": 2028.349999999998,
          "count": 558
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.344839470126806,
          "median": 0.30587532087072505,
          "min": 0.1415632343311484,
          "max": 0.7922078416962737,
          "p5": 0.1557591479475652,
          "p95": 0.6717127455127094,
          "count": 14
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 1616864.0,
          "median": 14659.25,
          "min": 0.0,
          "max": 19773837.0,
          "p5": 0.0,
          "p95": 8559752.949999994,
          "count": 14
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.1389967050097277,
          "median": 0.024540286946878234,
          "min": 0.0031963895717532194,
          "max": 1.3033707865168538,
          "p5": 0.004381289852566905,
          "p95": 0.6634261520924927,
          "count": 14
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0004357641660519709,
          "median": 0.00011557430915064706,
          "min": 0.0,
          "max": 0.002555225104821762,
          "p5": 0.0,
          "p95": 0.0015430446609862134,
          "count": 14
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 2.8180525457476095e-05,
          "median": 7.223440301915498e-08,
          "min": 0.0,
          "max": 0.0003637301526001612,
          "p5": 0.0,
          "p95": 0.00014511182121632412,
          "count": 14
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 352.0,
          "median": 10.0,
          "min": 0.0,
          "max": 3422.0,
          "p5": 0.0,
          "p95": 2088.1999999999994,
          "count": 14
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 33903.375,
          "median": 14659.25,
          "min": 12.0,
          "max": 108946.0,
          "p5": 729.6750000000001,
          "p95": 106625.15,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 13.25,
          "median": 10.0,
          "min": 1.0,
          "max": 32.0,
          "p5": 1.35,
          "p95": 31.299999999999997,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.3017692065179054,
          "median": 0.30587532087072505,
          "min": 0.1415632343311484,
          "max": 0.5436617138378714,
          "p5": 0.1492071878169113,
          "p95": 0.4953137488114505,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.03461137046018002,
          "median": 0.02468708898047267,
          "min": 0.007388798581350679,
          "max": 0.12594458438287154,
          "p5": 0.008805260373938936,
          "p95": 0.09381431611373972,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 3.226703504828505,
          "median": 1.5624375624375624,
          "min": 1.0,
          "max": 14.625,
          "p5": 1.078525641025641,
          "p95": 10.346249999999994,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.9033103342165382e-07,
          "median": 6.908504962284787e-08,
          "min": 0.0,
          "max": 5.127951058476975e-07,
          "p5": 0.0,
          "p95": 4.999200175824199e-07,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0005007723921667157,
          "median": 0.00011557430915064706,
          "min": 3.4588432244720077e-06,
          "max": 0.002555225104821762,
          "p5": 8.367287893438296e-06,
          "p95": 0.0019152542101855705,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1W",
        "stock": -0.022727272727272818,
        "market": -0.0012334307159801439,
        "sector": -0.0017138877631148741,
        "peers": -0.0006647025007185947
      },
      {
        "horizon": "1M",
        "stock": -0.06521739130434856,
        "market": -0.024571683631716912,
        "sector": -0.008766341306679748,
        "peers": -0.03427858617971735
      },
      {
        "horizon": "3M",
        "stock": -0.10416666666666785,
        "market": 0.07110197371973892,
        "sector": -0.0030021569861736763,
        "peers": -0.024016271569982206
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
      "share_market": 0.25990770935867114,
      "share_sector": 0.4179994532187345,
      "share_idio": 0.32209283742259437,
      "beta_market": 2.504720769847126,
      "beta_sector": 1.939475703880911,
      "driver_model": {
        "valid": true,
        "model_method": "ols_with_volatility_regimes",
        "estimation_window_days": 61,
        "reporting_window_days": 61,
        "available_history_days": 61,
        "n_regimes": 2,
        "current_regime": 1,
        "current_regime_label": "High Volatility",
        "current_regime_probability": 1.0,
        "current_driver_mix": {
          "market_share": {
            "median": 0.25990770935867114,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "26.0%",
            "display_range": null,
            "display_text": "26.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 61 trading days.",
            "kind": "share_pct",
            "value_pct": 26.0,
            "plain_english": "Market explains about 26.0% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.4179994532187345,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "41.8%",
            "display_range": null,
            "display_text": "41.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 61 trading days.",
            "kind": "share_pct",
            "value_pct": 41.8,
            "plain_english": "Sector explains about 41.8% of price moves in the current state."
          },
          "company_share": {
            "median": 0.32209283742259437,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "32.2%",
            "display_range": null,
            "display_text": "32.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 61 trading days.",
            "kind": "share_pct",
            "value_pct": 32.2,
            "plain_english": "Company-specific explains about 32.2% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 2.504720769847126,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "2.50",
            "display_range": null,
            "display_text": "2.50",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 61 trading days.",
            "kind": "beta",
            "strength_label": "High",
            "plain_english": "High market link: a 1% market move has lined up with about a 2.50% stock move in the same direction in this state.",
            "value_num": 2.5
          },
          "beta_stock_lag": {
            "median": -0.9989208532307714,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-1.00",
            "display_range": null,
            "display_text": "-1.00",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 61 trading days.",
            "kind": "lag_beta",
            "value_num": -1.0
          },
          "beta_sector": {
            "median": 1.939475703880911,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.94",
            "display_range": null,
            "display_text": "1.94",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 61 trading days.",
            "kind": "beta",
            "strength_label": "High",
            "plain_english": "High sector link: a 1% sector move has lined up with about a 1.94% stock move in the same direction in this state.",
            "value_num": 1.94
          },
          "beta_market_lag": {
            "median": 0.7904022945440988,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.79",
            "display_range": null,
            "display_text": "0.79",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 61 trading days.",
            "kind": "lag_beta",
            "value_num": 0.79
          },
          "beta_sector_lag": {
            "median": 4.108610546444988,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "4.11",
            "display_range": null,
            "display_text": "4.11",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 61 trading days.",
            "kind": "lag_beta",
            "value_num": 4.11
          },
          "posterior_source": null,
          "intervals_collapsed": false,
          "confidence_label": "High, limited history",
          "confidence_note": "Based on 61 trading days relative to the 252-day target."
        },
        "rolling_windows": {},
        "monthly_history": [
          {
            "month_key": "2025-12",
            "month_label": "December 2025",
            "month_short_label": "Dec",
            "period_label": "2025-12-15 to 2025-12-31",
            "n_obs": 12,
            "partial_month": true,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5639107275401654,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.4%",
              "display_range": null,
              "display_text": "56.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 12 trading days.",
              "kind": "share_pct",
              "value_pct": 56.4,
              "plain_english": "Company-specific explains about 56.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.18245070546760514,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "18.2%",
                "display_range": null,
                "display_text": "18.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 12 trading days.",
                "kind": "share_pct",
                "value_pct": 18.2,
                "plain_english": "Market explains about 18.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2536385669922295,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "25.4%",
                "display_range": null,
                "display_text": "25.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 12 trading days.",
                "kind": "share_pct",
                "value_pct": 25.4,
                "plain_english": "Sector explains about 25.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5639107275401654,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "56.4%",
                "display_range": null,
                "display_text": "56.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 12 trading days.",
                "kind": "share_pct",
                "value_pct": 56.4,
                "plain_english": "Company-specific explains about 56.4% of price moves in the current state."
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
              "median": 0.5932333656330495,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "59.3%",
              "display_range": null,
              "display_text": "59.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 59.3,
              "plain_english": "Company-specific explains about 59.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.1853112670224285,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "18.5%",
                "display_range": null,
                "display_text": "18.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 18.5,
                "plain_english": "Market explains about 18.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.22145536734452193,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "22.1%",
                "display_range": null,
                "display_text": "22.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 22.1,
                "plain_english": "Sector explains about 22.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5932333656330495,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "59.3%",
                "display_range": null,
                "display_text": "59.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 59.3,
                "plain_english": "Company-specific explains about 59.3% of price moves in the current state."
              }
            },
            "summary": "Jan: Mostly company-driven."
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
              "median": 0.3761964400033791,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.6%",
              "display_range": null,
              "display_text": "37.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 37.6,
              "plain_english": "Company-specific explains about 37.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3634321979530605,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "36.3%",
                "display_range": null,
                "display_text": "36.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 36.3,
                "plain_english": "Market explains about 36.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2603713620435603,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.0%",
                "display_range": null,
                "display_text": "26.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 26.0,
                "plain_english": "Sector explains about 26.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3761964400033791,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "37.6%",
                "display_range": null,
                "display_text": "37.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 37.6,
                "plain_english": "Company-specific explains about 37.6% of price moves in the current state."
              }
            },
            "summary": "Feb: More mixed, though company-driven still has the largest share."
          },
          {
            "month_key": "2026-03",
            "month_label": "March 2026",
            "month_short_label": "Mar",
            "period_label": "2026-03-02 to 2026-03-13",
            "n_obs": 10,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4510075903092634,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.1%",
              "display_range": null,
              "display_text": "45.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
              "kind": "share_pct",
              "value_pct": 45.1,
              "plain_english": "Company-specific explains about 45.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3467275588587097,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "34.7%",
                "display_range": null,
                "display_text": "34.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
                "kind": "share_pct",
                "value_pct": 34.7,
                "plain_english": "Market explains about 34.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.20226485083202672,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.2%",
                "display_range": null,
                "display_text": "20.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
                "kind": "share_pct",
                "value_pct": 20.2,
                "plain_english": "Sector explains about 20.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4510075903092634,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "45.1%",
                "display_range": null,
                "display_text": "45.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
                "kind": "share_pct",
                "value_pct": 45.1,
                "plain_english": "Company-specific explains about 45.1% of price moves in the current state."
              }
            },
            "summary": "Mar: Mostly company-driven."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5084745762711864,
            "expected_duration_days": 6.0,
            "current_probability": 0.0,
            "n_days_effective": 30.0,
            "volatility": {
              "median": 0.029314601504705787,
              "low": 0.029314601504705787,
              "high": 0.029314601504705787
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": 0.0
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4915254237288136,
            "expected_duration_days": 5.8,
            "current_probability": 1.0,
            "n_days_effective": 29.0,
            "volatility": {
              "median": 0.04602951965056627,
              "low": 0.04602951965056627,
              "high": 0.04602951965056627
            },
            "volatility_label": "High Volatility",
            "current_probability_display": null
          }
        ],
        "transitions": {
          "mean": [
            [
              0.8333333333333334,
              0.16666666666666666
            ],
            [
              0.14285714285714285,
              0.8571428571428571
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              25.0,
              5.0
            ],
            [
              4.0,
              24.0
            ]
          ]
        },
        "methodology": {
          "estimation_window_days": 61,
          "reporting_window_days": 61,
          "current_mix_method": "ols_last_5d",
          "monthly_history_method": "ols_per_month",
          "regime_inference": "volatility_kmeans",
          "distribution": "gaussian",
          "history_limited": true,
          "current_driver_mix_basis": "ols_recent_window",
          "sector_proxy_equals_market": false
        },
        "client_read": {
          "market_link_display": "2.50",
          "sector_link_display": "1.94",
          "market_link_explainer": "High market link. A 1% market move has lined up with about a 2.50% stock move in the same direction in this state. This is a point estimate from 61 trading days.",
          "sector_link_explainer": "High sector link. A 1% sector move has lined up with about a 1.94% stock move in the same direction in this state. This is a point estimate from 61 trading days.",
          "stock_persistence_display": "-1.00",
          "point_estimate_note": "Point estimate only because the current state has 61 trading days.",
          "history_limited_note": "Read is based on 61 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "High Volatility",
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "driver_share_pct": 41.8,
          "driver_share_display": "41.8%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 61 trading days relative to the 252-day target.",
          "history_days": 61,
          "history_limited": true,
          "volatility_label": "High Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.8571428571428571,
          "effective_days": 29.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 5.8 days.",
          "expected_duration_days": 5.8
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
          "month_key": "2025-12",
          "month_label": "December 2025",
          "month_short_label": "Dec",
          "period_label": "2025-12-15 to 2025-12-31",
          "n_obs": 12,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Dec: Mostly company-driven.",
          "share_market": 0.18245070546760514,
          "share_sector": 0.2536385669922295,
          "share_company": 0.5639107275401654,
          "share_market_display": "18.2%",
          "share_sector_display": "25.4%",
          "share_company_display": "56.4%",
          "dominant_share_display": "56.4%"
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
          "share_market": 0.1853112670224285,
          "share_sector": 0.22145536734452193,
          "share_company": 0.5932333656330495,
          "share_market_display": "18.5%",
          "share_sector_display": "22.1%",
          "share_company_display": "59.3%",
          "dominant_share_display": "59.3%"
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
          "share_market": 0.3634321979530605,
          "share_sector": 0.2603713620435603,
          "share_company": 0.3761964400033791,
          "share_market_display": "36.3%",
          "share_sector_display": "26.0%",
          "share_company_display": "37.6%",
          "dominant_share_display": "37.6%"
        },
        {
          "month_key": "2026-03",
          "month_label": "March 2026",
          "month_short_label": "Mar",
          "period_label": "2026-03-02 to 2026-03-13",
          "n_obs": 10,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Mar: Mostly company-driven.",
          "share_market": 0.3467275588587097,
          "share_sector": 0.20226485083202672,
          "share_company": 0.4510075903092634,
          "share_market_display": "34.7%",
          "share_sector_display": "20.2%",
          "share_company_display": "45.1%",
          "dominant_share_display": "45.1%"
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
          0.5084745762711864,
          0.4915254237288136
        ],
        "current_regime": 1,
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5084745762711864,
            "expected_duration_days": 6.0,
            "current_probability": 0.0,
            "n_days_effective": 30.0,
            "volatility": {
              "median": 0.029314601504705787,
              "low": 0.029314601504705787,
              "high": 0.029314601504705787
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4915254237288136,
            "expected_duration_days": 5.8,
            "current_probability": 1.0,
            "n_days_effective": 29.0,
            "volatility": {
              "median": 0.04602951965056627,
              "low": 0.04602951965056627,
              "high": 0.04602951965056627
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.8333333333333334,
            0.16666666666666666
          ],
          [
            0.14285714285714285,
            0.8571428571428571
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 0.215,
          "quantity": 25500.0,
          "value": 5482.5
        },
        {
          "level": 2,
          "price": 0.21,
          "quantity": 35000.0,
          "value": 7350.0
        },
        {
          "level": 3,
          "price": 0.2,
          "quantity": 84500.0,
          "value": 16900.0
        },
        {
          "level": 4,
          "price": 0.19,
          "quantity": 300000.0,
          "value": 57000.0
        },
        {
          "level": 5,
          "price": 0.181,
          "quantity": 23000.0,
          "value": 4163.0
        },
        {
          "level": 6,
          "price": 0.171,
          "quantity": 23000.0,
          "value": 3933.0000000000005
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.225,
          "quantity": 1000.0,
          "value": 225.0
        },
        {
          "level": 2,
          "price": 0.23,
          "quantity": 11100.0,
          "value": 2553.0
        },
        {
          "level": 3,
          "price": 0.235,
          "quantity": 80700.0,
          "value": 18964.5
        },
        {
          "level": 4,
          "price": 0.24,
          "quantity": 11000.0,
          "value": 2640.0
        },
        {
          "level": 5,
          "price": 0.245,
          "quantity": 100000.0,
          "value": 24500.0
        },
        {
          "level": 6,
          "price": 0.25,
          "quantity": 11000.0,
          "value": 2750.0
        },
        {
          "level": 7,
          "price": 0.255,
          "quantity": 10000.0,
          "value": 2550.0
        },
        {
          "level": 8,
          "price": 0.26,
          "quantity": 1000.0,
          "value": 260.0
        },
        {
          "level": 9,
          "price": 0.275,
          "quantity": 2000.0,
          "value": 550.0
        },
        {
          "level": 10,
          "price": 0.32,
          "quantity": 100000.0,
          "value": 32000.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-03-13 08:32:04.217500",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 0.22,
        "spread_pct": 0.0454545454545455,
        "spread_ticks": 2.0,
        "tick_size": 0.005,
        "bid_depth_notional_top10": 94828.5,
        "ask_depth_notional_top10": 86992.5,
        "bid_ask_depth_ratio": 1.0901
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 93,
        "history_limited": true,
        "trade_days_used": 62,
        "n_trades_used": 1036,
        "first_trade_date": "2025-12-11",
        "last_trade_date": "2026-03-13",
        "window_label": "Dec 11, 2025 to Mar 13, 2026",
        "window_short_label": "Dec 11, 2025 to Mar 13, 2026",
        "trade_days_label": "62 trading days",
        "trade_count_label": "1,036 trades",
        "window_detail_label": "62 trading days • 1,036 trades",
        "history_note": "Trade-size percentiles use available history from Dec 11, 2025 to Mar 13, 2026 (62 trading days • 1,036 trades), not a full year.",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 8175.0,
            "impact_pct": -0.030331,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 8.62,
            "pct_of_adv": 383.53
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 12562.5,
            "impact_pct": -0.035667,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 13.25,
            "pct_of_adv": 589.37
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 66206.25,
            "impact_pct": -0.10692299999999999,
            "filled_pct": 100.0,
            "levels_consumed": 4,
            "pct_of_bid_depth": 69.82,
            "pct_of_adv": 3106.09
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-03-13",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "8120202883652961280",
            "timestamp": "2026-03-12 22:59:03.982700000",
            "local_timestamp": "2026-03-13 06:59:03",
            "posted_price": 0.32,
            "size_shares": 100000.0,
            "notional": 32000.0,
            "impact_pct": -0.07315,
            "filled_pct": 100.0,
            "levels_consumed": 4,
            "pct_of_bid_depth": 33.75,
            "price_vs_mid_pct": 45.455,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "8124161125509107712",
            "timestamp": "2026-03-13 00:31:31.699800000",
            "local_timestamp": "2026-03-13 08:31:31",
            "posted_price": 0.245,
            "size_shares": 100000.0,
            "notional": 24500.0,
            "impact_pct": -0.062891,
            "filled_pct": 100.0,
            "levels_consumed": 3,
            "pct_of_bid_depth": 25.84,
            "price_vs_mid_pct": 11.364,
            "executed_event_count": 0,
            "event_count": 6
          },
          {
            "rank": 3,
            "order_id": "8124161125509436416",
            "timestamp": "2026-03-13 01:32:50.716300000",
            "local_timestamp": "2026-03-13 09:32:50",
            "posted_price": 0.235,
            "size_shares": 50000.0,
            "notional": 11750.0,
            "impact_pct": -0.034983,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 12.39,
            "price_vs_mid_pct": 6.818,
            "executed_event_count": 0,
            "event_count": 1
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-03-13",
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
            "spread_pct": 0.090909090909091,
            "spread_ticks": 4.0000000000000036,
            "bid_depth_notional": 82516.0,
            "ask_depth_notional": 74788.5,
            "mid_price": 0.22
          },
          {
            "bucket": "09:30",
            "spread_pct": 0.090909090909091,
            "spread_ticks": 4.0000000000000036,
            "bid_depth_notional": 92496.0,
            "ask_depth_notional": 86538.5,
            "mid_price": 0.22
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.090909090909091,
            "spread_ticks": 4.0000000000000036,
            "bid_depth_notional": 92496.0,
            "ask_depth_notional": 86813.5,
            "mid_price": 0.22
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.0674157303370787,
            "spread_ticks": 3.0000000000000027,
            "bid_depth_notional": 94828.5,
            "ask_depth_notional": 86813.5,
            "mid_price": 0.2225
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 94873.5,
            "ask_depth_notional": 86813.5,
            "mid_price": 0.2275
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.0674157303370787,
            "spread_ticks": 3.0000000000000027,
            "bid_depth_notional": 94828.5,
            "ask_depth_notional": 86767.5,
            "mid_price": 0.2225
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.0454545454545455,
            "spread_ticks": 2.0000000000000018,
            "bid_depth_notional": 94828.5,
            "ask_depth_notional": 86992.5,
            "mid_price": 0.22
          }
        ],
        "summary": {
          "median_spread_pct": 0.0674157303370787,
          "median_spread_ticks": 3.0000000000000027,
          "median_bid_depth_notional": 94828.5,
          "median_ask_depth_notional": 86813.5,
          "tightest_bucket": "14:30",
          "widest_bucket": "09:00",
          "deepest_bid_bucket": "14:30",
          "thinnest_bid_bucket": "09:00"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 2345.8,
      "peers": [
        {
          "ticker": "Q01",
          "pct": 763.2
        },
        {
          "ticker": "42W",
          "pct": 1028.2
        },
        {
          "ticker": "D03",
          "pct": 3523.3
        },
        {
          "ticker": "5JS",
          "pct": 3527.7
        },
        {
          "ticker": "MV4",
          "pct": 7080.6
        },
        {
          "ticker": "Y03",
          "pct": 13428.7
        },
        {
          "ticker": "BQD",
          "pct": 49813.2
        },
        {
          "ticker": "OTS",
          "pct": 104602.5
        }
      ]
    },
    "trader_composition": {
      "primary_period": "3m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 1,
          "n_runs": 1,
          "n_trade_days": 1,
          "first_trade_date": "2026-03-13",
          "last_trade_date": "2026-03-13",
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
            "retail_pct": 0.0,
            "mixed_pct": 1.0,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 1.0,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 1.0,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0
          },
          "run_composition": {
            "retail_pct": 0.0,
            "mixed_pct": 1.0,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 1.0,
            "instit_notional_pct": 0.0,
            "unclear_notional_pct": 0.0
          },
          "counts": {
            "trades": {
              "retail": 0,
              "mixed": 1,
              "institutional": 0,
              "ambiguous": 0,
              "unobservable": 0,
              "unclear": 0
            },
            "runs": {
              "retail": 0,
              "mixed": 1,
              "institutional": 0,
              "ambiguous": 0,
              "unobservable": 0,
              "unclear": 0
            }
          },
          "confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.0,
            "na": 1.0
          },
          "confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 0,
            "na": 1
          },
          "trade_confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.0,
            "na": 1.0
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 0,
            "na": 1
          },
          "observability": {
            "avg_feature_coverage": 0.8500000000000001,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.0,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "MIXED",
          "dominant_label": "Mixed",
          "dominant_share": 1.0,
          "dominance_gap": 1.0,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 1
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 1
            },
            "d3_urgency": {
              "IMMEDIATE": 1
            },
            "participant_confidence": {
              "NA": 1
            }
          },
          "trade_size": {
            "avg": 46.0,
            "median": 46.0
          },
          "run_size": {
            "avg": 46.0,
            "median": 46.0,
            "avg_length": 1.0
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-1",
              "timestamp": "2026-03-13T07:03:08.239300",
              "price": 0.23,
              "size": 200.0,
              "notional": 46.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 559,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "LGH",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.0,
              "mixed_pct": 1.0,
              "instit_pct": 0.0,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0,
              "retail_qty_pct": 0.0,
              "mixed_qty_pct": 1.0,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0,
              "retail_notional_pct": 0.0,
              "mixed_notional_pct": 1.0,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0,
              "run_retail_pct": 0.0,
              "run_mixed_pct": 1.0,
              "run_instit_pct": 0.0,
              "run_unclear_pct": 0.0,
              "avg_trade_size": 46.0,
              "avg_run_notional": 46.0,
              "dominant_bucket": "MIXED",
              "dominant_label": "Mixed",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.0,
              "na_confidence_pct": 1.0,
              "avg_feature_coverage": 0.8500000000000001,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "Y03",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.0,
              "mixed_pct": 0.0,
              "instit_pct": 1.0,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0,
              "retail_qty_pct": 0.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 1.0,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0,
              "retail_notional_pct": 0.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 1.0,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0,
              "run_retail_pct": 0.0,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 1.0,
              "run_unclear_pct": 0.0,
              "avg_trade_size": 6000.0,
              "avg_run_notional": 6000.0,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Institution-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 1.0,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.8500000000000001,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "BQD",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.3333333333333333,
              "mixed_pct": 0.0,
              "instit_pct": 0.6666666666666666,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0,
              "retail_qty_pct": 0.0060790273556231,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.993920972644377,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0,
              "retail_notional_pct": 0.0060790273556231,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.993920972644377,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0,
              "run_retail_pct": 0.5,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.5,
              "run_unclear_pct": 0.0,
              "avg_trade_size": 3948.0,
              "avg_run_notional": 5922.0,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 1.0,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.775,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "OTS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.5,
              "ambiguous_pct": 0.5,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.5,
              "retail_qty_pct": 0.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.825,
              "ambiguous_qty_pct": 0.175,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.175,
              "retail_notional_pct": 0.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.825,
              "ambiguous_notional_pct": 0.175,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.175,
              "run_retail_pct": 0.0,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.5,
              "run_unclear_pct": 0.5,
              "avg_trade_size": 11300.0,
              "avg_run_notional": 11300.0,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed, leaning institution-like",
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
            },
            {
              "ticker": "Q01",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.07692307692307693,
              "mixed_pct": 0.15384615384615385,
              "instit_pct": 0.3076923076923077,
              "ambiguous_pct": 0.3076923076923077,
              "unobservable_pct": 0.15384615384615385,
              "unclear_pct": 0.46153846153846156,
              "retail_qty_pct": 0.05813953488372093,
              "mixed_qty_pct": 0.11627906976744186,
              "instit_qty_pct": 0.5058139534883721,
              "ambiguous_qty_pct": 0.29069767441860467,
              "unobservable_qty_pct": 0.029069767441860465,
              "unclear_qty_pct": 0.31976744186046513,
              "retail_notional_pct": 0.05794556628621598,
              "mixed_notional_pct": 0.11647644132279777,
              "instit_notional_pct": 0.5066725197541703,
              "ambiguous_notional_pct": 0.28996195493122623,
              "unobservable_notional_pct": 0.0289435177055897,
              "unclear_notional_pct": 0.3189054726368159,
              "run_retail_pct": 0.125,
              "run_mixed_pct": 0.125,
              "run_instit_pct": 0.25,
              "run_unclear_pct": 0.5,
              "avg_trade_size": 1314.2307692307693,
              "avg_run_notional": 2135.625,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.375,
              "na_confidence_pct": 0.625,
              "avg_feature_coverage": 0.8,
              "observable_run_pct": 0.875,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "42W",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.38095238095238093,
              "mixed_pct": 0.14285714285714285,
              "instit_pct": 0.19047619047619047,
              "ambiguous_pct": 0.2857142857142857,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.2857142857142857,
              "retail_qty_pct": 0.07671474459910563,
              "mixed_qty_pct": 0.29344334572022424,
              "instit_qty_pct": 0.37790514580840207,
              "ambiguous_qty_pct": 0.25193676387226804,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.25193676387226804,
              "retail_notional_pct": 0.07887987234919515,
              "mixed_notional_pct": 0.28857937468245437,
              "instit_notional_pct": 0.37952445178101035,
              "ambiguous_notional_pct": 0.2530163011873402,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.2530163011873402,
              "run_retail_pct": 0.5714285714285714,
              "run_mixed_pct": 0.21428571428571427,
              "run_instit_pct": 0.07142857142857142,
              "run_unclear_pct": 0.14285714285714285,
              "avg_trade_size": 2333.747619047619,
              "avg_run_notional": 3500.621428571428,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.6428571428571429,
              "na_confidence_pct": 0.35714285714285715,
              "avg_feature_coverage": 0.8499999999999999,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "5JS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.125,
              "mixed_pct": 0.0,
              "instit_pct": 0.375,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.5,
              "unclear_pct": 0.5,
              "retail_qty_pct": 0.005859375,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.1953125,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.798828125,
              "unclear_qty_pct": 0.798828125,
              "retail_notional_pct": 0.00592079969242599,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.197359989747533,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.796719210560041,
              "unclear_notional_pct": 0.796719210560041,
              "run_retail_pct": 0.25,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.25,
              "run_unclear_pct": 0.5,
              "avg_trade_size": 2438.4375,
              "avg_run_notional": 4876.875,
              "dominant_bucket": "UNOBSERVABLE",
              "dominant_label": "Not Observable",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5,
              "na_confidence_pct": 0.5,
              "avg_feature_coverage": 0.7,
              "observable_run_pct": 0.5,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "D03",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.20833333333333334,
              "mixed_pct": 0.0,
              "instit_pct": 0.0,
              "ambiguous_pct": 0.16666666666666666,
              "unobservable_pct": 0.625,
              "unclear_pct": 0.7916666666666666,
              "retail_qty_pct": 0.0994,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": 0.244,
              "unobservable_qty_pct": 0.6566,
              "unclear_qty_pct": 0.9006,
              "retail_notional_pct": 0.10007465922756759,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": 0.2377471689846792,
              "unobservable_notional_pct": 0.6621781717877532,
              "unclear_notional_pct": 0.8999253407724324,
              "run_retail_pct": 0.5555555555555556,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.0,
              "run_unclear_pct": 0.4444444444444444,
              "avg_trade_size": 1864.0249999999999,
              "avg_run_notional": 4970.733333333334,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5555555555555556,
              "na_confidence_pct": 0.4444444444444444,
              "avg_feature_coverage": 0.7611111111111111,
              "observable_run_pct": 0.7777777777777778,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "MV4",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.0,
              "mixed_pct": 1.0,
              "instit_pct": 0.0,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0,
              "retail_qty_pct": 0.0,
              "mixed_qty_pct": 1.0,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0,
              "retail_notional_pct": 0.0,
              "mixed_notional_pct": 1.0,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0,
              "run_retail_pct": 0.0,
              "run_mixed_pct": 1.0,
              "run_instit_pct": 0.0,
              "run_unclear_pct": 0.0,
              "avg_trade_size": 580.0,
              "avg_run_notional": 580.0,
              "dominant_bucket": "MIXED",
              "dominant_label": "Mixed",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.0,
              "na_confidence_pct": 1.0,
              "avg_feature_coverage": 0.8500000000000001,
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
          "n_trades": 32,
          "n_runs": 27,
          "n_trade_days": 5,
          "first_trade_date": "2026-03-09",
          "last_trade_date": "2026-03-13",
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
            "retail_pct": 0.1875,
            "mixed_pct": 0.125,
            "instit_pct": 0.15625,
            "ambiguous_pct": 0.53125,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.53125,
            "retail_qty_pct": 0.02019446522064323,
            "mixed_qty_pct": 0.06581899775617053,
            "instit_qty_pct": 0.3851907255048616,
            "ambiguous_qty_pct": 0.5287958115183246,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.5287958115183246,
            "retail_notional_pct": 0.02039843289657747,
            "mixed_notional_pct": 0.06968302589498968,
            "instit_notional_pct": 0.3827348743483522,
            "ambiguous_notional_pct": 0.5271836668600807,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.5271836668600807
          },
          "run_composition": {
            "retail_pct": 0.2222222222222222,
            "mixed_pct": 0.14814814814814814,
            "instit_pct": 0.14814814814814814,
            "ambiguous_pct": 0.48148148148148145,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.48148148148148145,
            "retail_notional_pct": 0.02039843289657747,
            "mixed_notional_pct": 0.06968302589498968,
            "instit_notional_pct": 0.3827348743483522,
            "unclear_notional_pct": 0.5271836668600807
          },
          "counts": {
            "trades": {
              "retail": 6,
              "mixed": 4,
              "institutional": 5,
              "ambiguous": 17,
              "unobservable": 0,
              "unclear": 17
            },
            "runs": {
              "retail": 6,
              "mixed": 4,
              "institutional": 4,
              "ambiguous": 13,
              "unobservable": 0,
              "unclear": 13
            }
          },
          "confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.37037037037037035,
            "na": 0.6296296296296297
          },
          "confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 10,
            "na": 17
          },
          "trade_confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.34375,
            "na": 0.65625
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 11,
            "na": 21
          },
          "observability": {
            "avg_feature_coverage": 0.8166666666666669,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.48148148148148145,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Unclassified Flow",
          "dominant_share": 0.48148148148148145,
          "dominance_gap": 0.25925925925925924,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 22,
              "MULTI_FILL_SINGLE_PRICE": 10
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 17,
              "MOMENTUM_REACTIVE": 9,
              "PERSISTENT_POSITIVE_IMPACT": 6
            },
            "d3_urgency": {
              "IMMEDIATE": 27
            },
            "participant_confidence": {
              "NA": 17,
              "LOW": 10
            }
          },
          "trade_size": {
            "avg": 3473.765625,
            "median": 1315.75
          },
          "run_size": {
            "avg": 4117.055555555556,
            "median": 1182.5,
            "avg_length": 1.0
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-1",
              "timestamp": "2026-03-13T07:03:08.239300",
              "price": 0.23,
              "size": 200.0,
              "notional": 46.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 559,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1",
              "timestamp": "2026-03-12T01:40:31.414900",
              "price": 0.225,
              "size": 500.0,
              "notional": 112.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 558,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-6",
              "timestamp": "2026-03-11T08:35:05.382000",
              "price": 0.22,
              "size": 5000.0,
              "notional": 1100.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 557,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-5",
              "timestamp": "2026-03-11T08:34:31.185000",
              "price": 0.22,
              "size": 10000.0,
              "notional": 2200.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 556,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-4",
              "timestamp": "2026-03-11T08:34:03.641600",
              "price": 0.22,
              "size": 20000.0,
              "notional": 4400.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 555,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-3",
              "timestamp": "2026-03-11T06:45:55.766700",
              "price": 0.22,
              "size": 10000.0,
              "notional": 2200.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 554,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-2",
              "timestamp": "2026-03-11T06:27:12.575100",
              "price": 0.22,
              "size": 100.0,
              "notional": 22.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 553,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1",
              "timestamp": "2026-03-11T05:26:56.368500",
              "price": 0.215,
              "size": 100.0,
              "notional": 21.5,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 552,
              "d1": "SINGLE_FILL",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-3",
              "timestamp": "2026-03-10T07:46:25.970100",
              "price": 0.215,
              "size": 5500.0,
              "notional": 1182.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 551,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-2",
              "timestamp": "2026-03-10T03:10:50.514200",
              "price": 0.215,
              "size": 4500.0,
              "notional": 967.5,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 550,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1",
              "timestamp": "2026-03-10T01:48:16.952200",
              "price": 0.205,
              "size": 100.0,
              "notional": 20.5,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 549,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-24",
              "timestamp": "2026-03-09T06:03:56.094900",
              "price": 0.205,
              "size": 17000.0,
              "notional": 3485.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 548,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-23",
              "timestamp": "2026-03-09T05:47:18.948300",
              "price": 0.2,
              "size": 100.0,
              "notional": 20.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 547,
              "d1": "SINGLE_FILL",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-22",
              "timestamp": "2026-03-09T05:39:02.070300",
              "price": 0.2,
              "size": 99800.0,
              "notional": 19960.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 546,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-21",
              "timestamp": "2026-03-09T05:39:02.070300",
              "price": 0.2,
              "size": 100.0,
              "notional": 20.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 546,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-20",
              "timestamp": "2026-03-09T05:30:51.692300",
              "price": 0.205,
              "size": 22000.0,
              "notional": 4510.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 545,
              "d1": "SINGLE_FILL",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-19",
              "timestamp": "2026-03-09T05:22:40.681200",
              "price": 0.21,
              "size": 5500.0,
              "notional": 1155.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 544,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-18",
              "timestamp": "2026-03-09T05:22:40.681200",
              "price": 0.21,
              "size": 14500.0,
              "notional": 3045.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 543,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-17",
              "timestamp": "2026-03-09T05:22:39.595800",
              "price": 0.205,
              "size": 50000.0,
              "notional": 10250.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 542,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-16",
              "timestamp": "2026-03-09T05:22:39.595800",
              "price": 0.205,
              "size": 100000.0,
              "notional": 20500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 542,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-12",
              "timestamp": "2026-03-09T03:43:11.952900",
              "price": 0.21,
              "size": 100.0,
              "notional": 21.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 541,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-11",
              "timestamp": "2026-03-09T03:30:52.634400",
              "price": 0.21,
              "size": 26000.0,
              "notional": 5460.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 540,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-9",
              "timestamp": "2026-03-09T03:14:03.184300",
              "price": 0.21,
              "size": 300.0,
              "notional": 63.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 539,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-10",
              "timestamp": "2026-03-09T03:14:03.184300",
              "price": 0.21,
              "size": 3700.0,
              "notional": 777.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 539,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-8",
              "timestamp": "2026-03-09T03:12:33.499500",
              "price": 0.21,
              "size": 2000.0,
              "notional": 420.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 538,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-7",
              "timestamp": "2026-03-09T03:11:39.140200",
              "price": 0.21,
              "size": 8800.0,
              "notional": 1848.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 537,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-6",
              "timestamp": "2026-03-09T03:11:27.113500",
              "price": 0.21,
              "size": 6900.0,
              "notional": 1449.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 536,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-5",
              "timestamp": "2026-03-09T03:11:27.113500",
              "price": 0.21,
              "size": 12000.0,
              "notional": 2520.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 536,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-4",
              "timestamp": "2026-03-09T03:00:40.748400",
              "price": 0.21,
              "size": 3000.0,
              "notional": 630.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 535,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-3",
              "timestamp": "2026-03-09T03:00:40.748300",
              "price": 0.21,
              "size": 50000.0,
              "notional": 10500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 534,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "LGH",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.1875,
              "mixed_pct": 0.125,
              "instit_pct": 0.15625,
              "ambiguous_pct": 0.53125,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.53125,
              "retail_qty_pct": 0.02019446522064323,
              "mixed_qty_pct": 0.06581899775617053,
              "instit_qty_pct": 0.3851907255048616,
              "ambiguous_qty_pct": 0.5287958115183246,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.5287958115183246,
              "retail_notional_pct": 0.02039843289657747,
              "mixed_notional_pct": 0.06968302589498968,
              "instit_notional_pct": 0.3827348743483522,
              "ambiguous_notional_pct": 0.5271836668600807,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.5271836668600807,
              "run_retail_pct": 0.2222222222222222,
              "run_mixed_pct": 0.14814814814814814,
              "run_instit_pct": 0.14814814814814814,
              "run_unclear_pct": 0.48148148148148145,
              "avg_trade_size": 3473.765625,
              "avg_run_notional": 4117.055555555556,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.37037037037037035,
              "na_confidence_pct": 0.6296296296296297,
              "avg_feature_coverage": 0.8166666666666669,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "BQD",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.18181818181818182,
              "mixed_pct": 0.0,
              "instit_pct": 0.7272727272727273,
              "ambiguous_pct": 0.09090909090909091,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.09090909090909091,
              "retail_qty_pct": 0.018218623481781375,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.9635627530364372,
              "ambiguous_qty_pct": 0.018218623481781375,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.018218623481781375,
              "retail_notional_pct": 0.018033478688985794,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.9637361091574062,
              "ambiguous_notional_pct": 0.018230412153608103,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.018230412153608103,
              "run_retail_pct": 0.2857142857142857,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.5714285714285714,
              "run_unclear_pct": 0.14285714285714285,
              "avg_trade_size": 1615.6818181818182,
              "avg_run_notional": 2538.9285714285716,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Institution-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.8571428571428571,
              "na_confidence_pct": 0.14285714285714285,
              "avg_feature_coverage": 0.8500000000000002,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "MV4",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.13333333333333333,
              "mixed_pct": 0.1,
              "instit_pct": 0.5,
              "ambiguous_pct": 0.26666666666666666,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.26666666666666666,
              "retail_qty_pct": 0.0046439628482972135,
              "mixed_qty_pct": 0.022703818369453045,
              "instit_qty_pct": 0.9226006191950464,
              "ambiguous_qty_pct": 0.0500515995872033,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0500515995872033,
              "retail_notional_pct": 0.0045244153430653135,
              "mixed_notional_pct": 0.022161819492327598,
              "instit_notional_pct": 0.9246914973991125,
              "ambiguous_notional_pct": 0.0486222677654946,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0486222677654946,
              "run_retail_pct": 0.16666666666666666,
              "run_mixed_pct": 0.1111111111111111,
              "run_instit_pct": 0.3888888888888889,
              "run_unclear_pct": 0.3333333333333333,
              "avg_trade_size": 1919.2166666666667,
              "avg_run_notional": 3198.6944444444443,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed, leaning institution-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5555555555555556,
              "na_confidence_pct": 0.4444444444444444,
              "avg_feature_coverage": 0.8416666666666667,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "OTS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.5,
              "ambiguous_pct": 0.5,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.5,
              "retail_qty_pct": 0.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.826271186440678,
              "ambiguous_qty_pct": 0.17372881355932204,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.17372881355932204,
              "retail_notional_pct": 0.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.8263091153214979,
              "ambiguous_notional_pct": 0.17369088467850216,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.17369088467850216,
              "run_retail_pct": 0.0,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.5,
              "run_unclear_pct": 0.5,
              "avg_trade_size": 6703.0,
              "avg_run_notional": 6703.0,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed, leaning institution-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5,
              "na_confidence_pct": 0.5,
              "avg_feature_coverage": 0.8125000000000001,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "42W",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.31690140845070425,
              "mixed_pct": 0.07746478873239436,
              "instit_pct": 0.29577464788732394,
              "ambiguous_pct": 0.30985915492957744,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.30985915492957744,
              "retail_qty_pct": 0.11180608219521189,
              "mixed_qty_pct": 0.11590401513939233,
              "instit_qty_pct": 0.48530936262879965,
              "ambiguous_qty_pct": 0.2869805400365961,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.2869805400365961,
              "retail_notional_pct": 0.11200620797590945,
              "mixed_notional_pct": 0.11501844340463346,
              "instit_notional_pct": 0.4885175154425236,
              "ambiguous_notional_pct": 0.2844578331769335,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.2844578331769335,
              "run_retail_pct": 0.5342465753424658,
              "run_mixed_pct": 0.0821917808219178,
              "run_instit_pct": 0.0958904109589041,
              "run_unclear_pct": 0.2876712328767123,
              "avg_trade_size": 3070.107746478873,
              "avg_run_notional": 5971.990410958904,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.6301369863013698,
              "na_confidence_pct": 0.3698630136986301,
              "avg_feature_coverage": 0.817123287671233,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "Q01",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.23123123123123124,
              "mixed_pct": 0.08408408408408409,
              "instit_pct": 0.26126126126126126,
              "ambiguous_pct": 0.36936936936936937,
              "unobservable_pct": 0.05405405405405406,
              "unclear_pct": 0.42342342342342343,
              "retail_qty_pct": 0.06777762218176726,
              "mixed_qty_pct": 0.08416188208934323,
              "instit_qty_pct": 0.4212295196751155,
              "ambiguous_qty_pct": 0.29603696961209913,
              "unobservable_qty_pct": 0.13079400644167483,
              "unclear_qty_pct": 0.42683097605377396,
              "retail_notional_pct": 0.067732861387492,
              "mixed_notional_pct": 0.08487039475104137,
              "instit_notional_pct": 0.4237174368160922,
              "ambiguous_notional_pct": 0.2958424161324902,
              "unobservable_notional_pct": 0.12783689091288428,
              "unclear_notional_pct": 0.4236793070453745,
              "run_retail_pct": 0.4589041095890411,
              "run_mixed_pct": 0.08904109589041095,
              "run_instit_pct": 0.13013698630136986,
              "run_unclear_pct": 0.32191780821917804,
              "avg_trade_size": 2087.072072072072,
              "avg_run_notional": 4760.239726027397,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0136986301369863,
              "medium_confidence_pct": 0.3561643835616438,
              "low_confidence_pct": 0.2191780821917808,
              "na_confidence_pct": 0.410958904109589,
              "avg_feature_coverage": 0.8386986301369862,
              "observable_run_pct": 0.9794520547945206,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "D03",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.1984732824427481,
              "mixed_pct": 0.06870229007633588,
              "instit_pct": 0.183206106870229,
              "ambiguous_pct": 0.4122137404580153,
              "unobservable_pct": 0.13740458015267176,
              "unclear_pct": 0.549618320610687,
              "retail_qty_pct": 0.04811948771668976,
              "mixed_qty_pct": 0.04386172405636468,
              "instit_qty_pct": 0.2814854864326023,
              "ambiguous_qty_pct": 0.49062278241476026,
              "unobservable_qty_pct": 0.135910519379583,
              "unclear_qty_pct": 0.6265333017943433,
              "retail_notional_pct": 0.0474784045052728,
              "mixed_notional_pct": 0.04502688528907925,
              "instit_notional_pct": 0.2839390267344808,
              "ambiguous_notional_pct": 0.4933214244370975,
              "unobservable_notional_pct": 0.13023425903406957,
              "unclear_notional_pct": 0.6235556834711671,
              "run_retail_pct": 0.38235294117647056,
              "run_mixed_pct": 0.08823529411764706,
              "run_instit_pct": 0.10294117647058823,
              "run_unclear_pct": 0.4264705882352941,
              "avg_trade_size": 2156.3198473282446,
              "avg_run_notional": 4154.086764705883,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.07352941176470588,
              "medium_confidence_pct": 0.14705882352941177,
              "low_confidence_pct": 0.2647058823529412,
              "na_confidence_pct": 0.5147058823529411,
              "avg_feature_coverage": 0.8132352941176473,
              "observable_run_pct": 0.9558823529411765,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "Y03",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.29411764705882354,
              "mixed_pct": 0.058823529411764705,
              "instit_pct": 0.17647058823529413,
              "ambiguous_pct": 0.47058823529411764,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.47058823529411764,
              "retail_qty_pct": 0.025039123630672927,
              "mixed_qty_pct": 0.012519561815336464,
              "instit_qty_pct": 0.23630672926447574,
              "ambiguous_qty_pct": 0.7261345852895149,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.7261345852895149,
              "retail_notional_pct": 0.025043020284716066,
              "mixed_notional_pct": 0.012514991917401054,
              "instit_notional_pct": 0.23622047244094488,
              "ambiguous_notional_pct": 0.726221515356938,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.726221515356938,
              "run_retail_pct": 0.38461538461538464,
              "run_mixed_pct": 0.07692307692307693,
              "run_instit_pct": 0.15384615384615385,
              "run_unclear_pct": 0.38461538461538464,
              "avg_trade_size": 2256.1176470588234,
              "avg_run_notional": 2950.3076923076924,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5384615384615384,
              "na_confidence_pct": 0.46153846153846156,
              "avg_feature_coverage": 0.8384615384615384,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "5JS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.1864406779661017,
              "mixed_pct": 0.1016949152542373,
              "instit_pct": 0.22033898305084745,
              "ambiguous_pct": 0.4067796610169492,
              "unobservable_pct": 0.0847457627118644,
              "unclear_pct": 0.4915254237288136,
              "retail_qty_pct": 0.04886049723756906,
              "mixed_qty_pct": 0.031077348066298343,
              "instit_qty_pct": 0.22772790055248618,
              "ambiguous_qty_pct": 0.587189226519337,
              "unobservable_qty_pct": 0.1051450276243094,
              "unclear_qty_pct": 0.6923342541436465,
              "retail_notional_pct": 0.0492979100312572,
              "mixed_notional_pct": 0.030972210506156825,
              "instit_notional_pct": 0.2276166787120485,
              "ambiguous_notional_pct": 0.5861351195456649,
              "unobservable_notional_pct": 0.10597808120487257,
              "unclear_notional_pct": 0.6921132007505375,
              "run_retail_pct": 0.3055555555555556,
              "run_mixed_pct": 0.08333333333333333,
              "run_instit_pct": 0.1388888888888889,
              "run_unclear_pct": 0.4722222222222222,
              "avg_trade_size": 3717.1101694915255,
              "avg_run_notional": 6091.930555555556,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Mixed, mostly unclassified",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.4444444444444444,
              "na_confidence_pct": 0.5555555555555556,
              "avg_feature_coverage": 0.7958333333333335,
              "observable_run_pct": 0.9166666666666666,
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
          "n_trades": 94,
          "n_runs": 78,
          "n_trade_days": 20,
          "first_trade_date": "2026-02-11",
          "last_trade_date": "2026-03-13",
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
            "retail_pct": 0.2127659574468085,
            "mixed_pct": 0.13829787234042554,
            "instit_pct": 0.23404255319148937,
            "ambiguous_pct": 0.4148936170212766,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.4148936170212766,
            "retail_qty_pct": 0.03695450324976787,
            "mixed_qty_pct": 0.04726090993500464,
            "instit_qty_pct": 0.4624883936861653,
            "ambiguous_qty_pct": 0.4532961931290622,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.4532961931290622,
            "retail_notional_pct": 0.03746781097490434,
            "mixed_notional_pct": 0.04856954329075741,
            "instit_notional_pct": 0.46644200405335345,
            "ambiguous_notional_pct": 0.4475206416809848,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.4475206416809848
          },
          "run_composition": {
            "retail_pct": 0.24358974358974358,
            "mixed_pct": 0.16666666666666666,
            "instit_pct": 0.1794871794871795,
            "ambiguous_pct": 0.41025641025641024,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.41025641025641024,
            "retail_notional_pct": 0.03746781097490434,
            "mixed_notional_pct": 0.04856954329075741,
            "instit_notional_pct": 0.46644200405335345,
            "unclear_notional_pct": 0.4475206416809848
          },
          "counts": {
            "trades": {
              "retail": 20,
              "mixed": 13,
              "institutional": 22,
              "ambiguous": 39,
              "unobservable": 0,
              "unclear": 39
            },
            "runs": {
              "retail": 19,
              "mixed": 13,
              "institutional": 14,
              "ambiguous": 32,
              "unobservable": 0,
              "unclear": 32
            }
          },
          "confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.4230769230769231,
            "na": 0.5769230769230769
          },
          "confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 33,
            "na": 45
          },
          "trade_confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.44680851063829785,
            "na": 0.5531914893617021
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 42,
            "na": 52
          },
          "observability": {
            "avg_feature_coverage": 0.8211538461538463,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.41025641025641024,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Unclassified Flow",
          "dominant_share": 0.41025641025641024,
          "dominance_gap": 0.16666666666666666,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 62,
              "MULTI_FILL_SINGLE_PRICE": 26,
              "WALK_BOOK": 6
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 54,
              "PERSISTENT_POSITIVE_IMPACT": 21,
              "MOMENTUM_REACTIVE": 12,
              "UNOBSERVABLE": 7
            },
            "d3_urgency": {
              "IMMEDIATE": 78
            },
            "participant_confidence": {
              "NA": 45,
              "LOW": 33
            }
          },
          "trade_size": {
            "avg": 2482.840425531915,
            "median": 860.75
          },
          "run_size": {
            "avg": 2992.141025641026,
            "median": 1056.25,
            "avg_length": 1.0
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-1",
              "timestamp": "2026-03-13T07:03:08.239300",
              "price": 0.23,
              "size": 200.0,
              "notional": 46.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 559,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1",
              "timestamp": "2026-03-12T01:40:31.414900",
              "price": 0.225,
              "size": 500.0,
              "notional": 112.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 558,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-6",
              "timestamp": "2026-03-11T08:35:05.382000",
              "price": 0.22,
              "size": 5000.0,
              "notional": 1100.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 557,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-5",
              "timestamp": "2026-03-11T08:34:31.185000",
              "price": 0.22,
              "size": 10000.0,
              "notional": 2200.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 556,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-4",
              "timestamp": "2026-03-11T08:34:03.641600",
              "price": 0.22,
              "size": 20000.0,
              "notional": 4400.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 555,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-3",
              "timestamp": "2026-03-11T06:45:55.766700",
              "price": 0.22,
              "size": 10000.0,
              "notional": 2200.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 554,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-2",
              "timestamp": "2026-03-11T06:27:12.575100",
              "price": 0.22,
              "size": 100.0,
              "notional": 22.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 553,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1",
              "timestamp": "2026-03-11T05:26:56.368500",
              "price": 0.215,
              "size": 100.0,
              "notional": 21.5,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 552,
              "d1": "SINGLE_FILL",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-3",
              "timestamp": "2026-03-10T07:46:25.970100",
              "price": 0.215,
              "size": 5500.0,
              "notional": 1182.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 551,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-2",
              "timestamp": "2026-03-10T03:10:50.514200",
              "price": 0.215,
              "size": 4500.0,
              "notional": 967.5,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 550,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1",
              "timestamp": "2026-03-10T01:48:16.952200",
              "price": 0.205,
              "size": 100.0,
              "notional": 20.5,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 549,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-24",
              "timestamp": "2026-03-09T06:03:56.094900",
              "price": 0.205,
              "size": 17000.0,
              "notional": 3485.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 548,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-23",
              "timestamp": "2026-03-09T05:47:18.948300",
              "price": 0.2,
              "size": 100.0,
              "notional": 20.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 547,
              "d1": "SINGLE_FILL",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-22",
              "timestamp": "2026-03-09T05:39:02.070300",
              "price": 0.2,
              "size": 99800.0,
              "notional": 19960.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 546,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-21",
              "timestamp": "2026-03-09T05:39:02.070300",
              "price": 0.2,
              "size": 100.0,
              "notional": 20.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 546,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-20",
              "timestamp": "2026-03-09T05:30:51.692300",
              "price": 0.205,
              "size": 22000.0,
              "notional": 4510.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 545,
              "d1": "SINGLE_FILL",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-19",
              "timestamp": "2026-03-09T05:22:40.681200",
              "price": 0.21,
              "size": 5500.0,
              "notional": 1155.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 544,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-18",
              "timestamp": "2026-03-09T05:22:40.681200",
              "price": 0.21,
              "size": 14500.0,
              "notional": 3045.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 543,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-17",
              "timestamp": "2026-03-09T05:22:39.595800",
              "price": 0.205,
              "size": 50000.0,
              "notional": 10250.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 542,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-16",
              "timestamp": "2026-03-09T05:22:39.595800",
              "price": 0.205,
              "size": 100000.0,
              "notional": 20500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 542,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-12",
              "timestamp": "2026-03-09T03:43:11.952900",
              "price": 0.21,
              "size": 100.0,
              "notional": 21.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 541,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-11",
              "timestamp": "2026-03-09T03:30:52.634400",
              "price": 0.21,
              "size": 26000.0,
              "notional": 5460.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 540,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-9",
              "timestamp": "2026-03-09T03:14:03.184300",
              "price": 0.21,
              "size": 300.0,
              "notional": 63.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 539,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-10",
              "timestamp": "2026-03-09T03:14:03.184300",
              "price": 0.21,
              "size": 3700.0,
              "notional": 777.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 539,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-8",
              "timestamp": "2026-03-09T03:12:33.499500",
              "price": 0.21,
              "size": 2000.0,
              "notional": 420.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 538,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-7",
              "timestamp": "2026-03-09T03:11:39.140200",
              "price": 0.21,
              "size": 8800.0,
              "notional": 1848.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 537,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-6",
              "timestamp": "2026-03-09T03:11:27.113500",
              "price": 0.21,
              "size": 6900.0,
              "notional": 1449.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 536,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-5",
              "timestamp": "2026-03-09T03:11:27.113500",
              "price": 0.21,
              "size": 12000.0,
              "notional": 2520.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 536,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-4",
              "timestamp": "2026-03-09T03:00:40.748400",
              "price": 0.21,
              "size": 3000.0,
              "notional": 630.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 535,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-3",
              "timestamp": "2026-03-09T03:00:40.748300",
              "price": 0.21,
              "size": 50000.0,
              "notional": 10500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 534,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "LGH",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.2127659574468085,
              "mixed_pct": 0.13829787234042554,
              "instit_pct": 0.23404255319148937,
              "ambiguous_pct": 0.4148936170212766,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.4148936170212766,
              "retail_qty_pct": 0.03695450324976787,
              "mixed_qty_pct": 0.04726090993500464,
              "instit_qty_pct": 0.4624883936861653,
              "ambiguous_qty_pct": 0.4532961931290622,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.4532961931290622,
              "retail_notional_pct": 0.03746781097490434,
              "mixed_notional_pct": 0.04856954329075741,
              "instit_notional_pct": 0.46644200405335345,
              "ambiguous_notional_pct": 0.4475206416809848,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.4475206416809848,
              "run_retail_pct": 0.24358974358974358,
              "run_mixed_pct": 0.16666666666666666,
              "run_instit_pct": 0.1794871794871795,
              "run_unclear_pct": 0.41025641025641024,
              "avg_trade_size": 2482.840425531915,
              "avg_run_notional": 2992.141025641026,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.4230769230769231,
              "na_confidence_pct": 0.5769230769230769,
              "avg_feature_coverage": 0.8211538461538463,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "OTS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.09090909090909091,
              "mixed_pct": 0.030303030303030304,
              "instit_pct": 0.45454545454545453,
              "ambiguous_pct": 0.3333333333333333,
              "unobservable_pct": 0.09090909090909091,
              "unclear_pct": 0.4242424242424242,
              "retail_qty_pct": 0.036607687614399025,
              "mixed_qty_pct": 0.002033760423022168,
              "instit_qty_pct": 0.7319503762456783,
              "ambiguous_qty_pct": 0.212934716290421,
              "unobservable_qty_pct": 0.01647345942647956,
              "unclear_qty_pct": 0.22940817571690056,
              "retail_notional_pct": 0.038048607121476404,
              "mixed_notional_pct": 0.0020875494067736666,
              "instit_notional_pct": 0.7260220797167833,
              "ambiguous_notional_pct": 0.2170309526643859,
              "unobservable_notional_pct": 0.016810811090580666,
              "unclear_notional_pct": 0.23384176375496657,
              "run_retail_pct": 0.11538461538461539,
              "run_mixed_pct": 0.038461538461538464,
              "run_instit_pct": 0.34615384615384615,
              "run_unclear_pct": 0.5,
              "avg_trade_size": 1756.4454545454546,
              "avg_run_notional": 2229.334615384615,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Mixed, mostly unclassified",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.46153846153846156,
              "na_confidence_pct": 0.5384615384615384,
              "avg_feature_coverage": 0.7750000000000002,
              "observable_run_pct": 0.8846153846153846,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "BQD",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.1794871794871795,
              "mixed_pct": 0.10256410256410256,
              "instit_pct": 0.48717948717948717,
              "ambiguous_pct": 0.23076923076923078,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.23076923076923078,
              "retail_qty_pct": 0.059468681452595665,
              "mixed_qty_pct": 0.14574701437972215,
              "instit_qty_pct": 0.6485498415793322,
              "ambiguous_qty_pct": 0.14623446258835,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.14623446258835,
              "retail_notional_pct": 0.06010939791509771,
              "mixed_notional_pct": 0.14814961618243555,
              "instit_notional_pct": 0.6472214515042213,
              "ambiguous_notional_pct": 0.14451953439824541,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.14451953439824541,
              "run_retail_pct": 0.28,
              "run_mixed_pct": 0.16,
              "run_instit_pct": 0.32,
              "run_unclear_pct": 0.24,
              "avg_trade_size": 3881.3846153846152,
              "avg_run_notional": 6054.96,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed, leaning institution-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.6,
              "na_confidence_pct": 0.4,
              "avg_feature_coverage": 0.8440000000000002,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "MV4",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.20300751879699247,
              "mixed_pct": 0.09022556390977443,
              "instit_pct": 0.42857142857142855,
              "ambiguous_pct": 0.2781954887218045,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.2781954887218045,
              "retail_qty_pct": 0.047619047619047616,
              "mixed_qty_pct": 0.02925901543413064,
              "instit_qty_pct": 0.6331650939945871,
              "ambiguous_qty_pct": 0.2899568429522347,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.2899568429522347,
              "retail_notional_pct": 0.04768557447678876,
              "mixed_notional_pct": 0.030172037428875927,
              "instit_notional_pct": 0.6303461919838668,
              "ambiguous_notional_pct": 0.29179619611046853,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.29179619611046853,
              "run_retail_pct": 0.30952380952380953,
              "run_mixed_pct": 0.10714285714285714,
              "run_instit_pct": 0.2857142857142857,
              "run_unclear_pct": 0.2976190476190476,
              "avg_trade_size": 3143.003759398496,
              "avg_run_notional": 4976.422619047619,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5952380952380952,
              "na_confidence_pct": 0.40476190476190477,
              "avg_feature_coverage": 0.8285714285714283,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "5JS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.302158273381295,
              "mixed_pct": 0.16786570743405277,
              "instit_pct": 0.2853717026378897,
              "ambiguous_pct": 0.20863309352517986,
              "unobservable_pct": 0.03597122302158273,
              "unclear_pct": 0.2446043165467626,
              "retail_qty_pct": 0.05172338282310691,
              "mixed_qty_pct": 0.06954846056146805,
              "instit_qty_pct": 0.4412473174790873,
              "ambiguous_qty_pct": 0.38873560197959095,
              "unobservable_qty_pct": 0.048745237156746814,
              "unclear_qty_pct": 0.4374808391363378,
              "retail_notional_pct": 0.052546165584764076,
              "mixed_notional_pct": 0.07001955358101203,
              "instit_notional_pct": 0.4413596738892026,
              "ambiguous_notional_pct": 0.38801316483342124,
              "unobservable_notional_pct": 0.04806144211160008,
              "unclear_notional_pct": 0.4360746069450213,
              "run_retail_pct": 0.49166666666666664,
              "run_mixed_pct": 0.14166666666666666,
              "run_instit_pct": 0.1375,
              "run_unclear_pct": 0.22916666666666669,
              "avg_trade_size": 2055.4724220623502,
              "avg_run_notional": 3571.383333333333,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.6291666666666667,
              "na_confidence_pct": 0.37083333333333335,
              "avg_feature_coverage": 0.8404166666666665,
              "observable_run_pct": 0.9791666666666666,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "Q01",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.23010752688172043,
              "mixed_pct": 0.13440860215053763,
              "instit_pct": 0.2860215053763441,
              "ambiguous_pct": 0.3161290322580645,
              "unobservable_pct": 0.03333333333333333,
              "unclear_pct": 0.3494623655913978,
              "retail_qty_pct": 0.0843652149160262,
              "mixed_qty_pct": 0.1514730999146029,
              "instit_qty_pct": 0.411400512382579,
              "ambiguous_qty_pct": 0.28721890122402505,
              "unobservable_qty_pct": 0.06554227156276686,
              "unclear_qty_pct": 0.3527611727867919,
              "retail_notional_pct": 0.08464935668433154,
              "mixed_notional_pct": 0.15237799346758407,
              "instit_notional_pct": 0.41139496190314256,
              "ambiguous_notional_pct": 0.2872719374070279,
              "unobservable_notional_pct": 0.06430575053791392,
              "unclear_notional_pct": 0.3515776879449418,
              "run_retail_pct": 0.44761904761904764,
              "run_mixed_pct": 0.14047619047619048,
              "run_instit_pct": 0.14047619047619048,
              "run_unclear_pct": 0.27142857142857146,
              "avg_trade_size": 3019.680107526882,
              "avg_run_notional": 6686.434523809524,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.004761904761904762,
              "medium_confidence_pct": 0.15476190476190477,
              "low_confidence_pct": 0.42857142857142855,
              "na_confidence_pct": 0.4119047619047619,
              "avg_feature_coverage": 0.8445238095238093,
              "observable_run_pct": 0.9904761904761905,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "D03",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.26098191214470284,
              "mixed_pct": 0.06718346253229975,
              "instit_pct": 0.24289405684754523,
              "ambiguous_pct": 0.35917312661498707,
              "unobservable_pct": 0.06976744186046512,
              "unclear_pct": 0.4289405684754522,
              "retail_qty_pct": 0.06379454136248872,
              "mixed_qty_pct": 0.053489620820052326,
              "instit_qty_pct": 0.3448606779312472,
              "ambiguous_qty_pct": 0.4251522317807405,
              "unobservable_qty_pct": 0.11270292810547121,
              "unclear_qty_pct": 0.5378551598862117,
              "retail_notional_pct": 0.06340088948390937,
              "mixed_notional_pct": 0.05353065588074318,
              "instit_notional_pct": 0.34619914579684175,
              "ambiguous_notional_pct": 0.4284433317101396,
              "unobservable_notional_pct": 0.10842597712836613,
              "unclear_notional_pct": 0.5368693088385057,
              "run_retail_pct": 0.4025423728813559,
              "run_mixed_pct": 0.07627118644067797,
              "run_instit_pct": 0.11864406779661017,
              "run_unclear_pct": 0.4025423728813559,
              "avg_trade_size": 2097.6074935400516,
              "avg_run_notional": 3439.720762711864,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0211864406779661,
              "medium_confidence_pct": 0.0423728813559322,
              "low_confidence_pct": 0.4576271186440678,
              "na_confidence_pct": 0.4788135593220339,
              "avg_feature_coverage": 0.8203389830508472,
              "observable_run_pct": 0.9745762711864406,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "42W",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2757078986587183,
              "mixed_pct": 0.16840536512667661,
              "instit_pct": 0.26229508196721313,
              "ambiguous_pct": 0.293591654247392,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.293591654247392,
              "retail_qty_pct": 0.09218991077033187,
              "mixed_qty_pct": 0.23488228840952957,
              "instit_qty_pct": 0.3421831642799735,
              "ambiguous_qty_pct": 0.33074463654016506,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.33074463654016506,
              "retail_notional_pct": 0.09283992237461786,
              "mixed_notional_pct": 0.2382915902921234,
              "instit_notional_pct": 0.3435716555789776,
              "ambiguous_notional_pct": 0.3252968317542812,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.3252968317542812,
              "run_retail_pct": 0.5184049079754601,
              "run_mixed_pct": 0.16257668711656442,
              "run_instit_pct": 0.0950920245398773,
              "run_unclear_pct": 0.22392638036809817,
              "avg_trade_size": 3954.028017883755,
              "avg_run_notional": 8138.5055214723925,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.006134969325153374,
              "medium_confidence_pct": 0.03067484662576687,
              "low_confidence_pct": 0.5766871165644172,
              "na_confidence_pct": 0.38650306748466257,
              "avg_feature_coverage": 0.8421779141104293,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "Y03",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.20224719101123595,
              "mixed_pct": 0.14606741573033707,
              "instit_pct": 0.24719101123595505,
              "ambiguous_pct": 0.29213483146067415,
              "unobservable_pct": 0.11235955056179775,
              "unclear_pct": 0.4044943820224719,
              "retail_qty_pct": 0.03119496855345912,
              "mixed_qty_pct": 0.06918238993710692,
              "instit_qty_pct": 0.3031446540880503,
              "ambiguous_qty_pct": 0.5408805031446541,
              "unobservable_qty_pct": 0.05559748427672956,
              "unclear_qty_pct": 0.5964779874213837,
              "retail_notional_pct": 0.031403611332965556,
              "mixed_notional_pct": 0.06923574116310281,
              "instit_notional_pct": 0.30229475261628147,
              "ambiguous_notional_pct": 0.54065013873908,
              "unobservable_notional_pct": 0.0564157561485702,
              "unclear_notional_pct": 0.5970658948876502,
              "run_retail_pct": 0.2857142857142857,
              "run_mixed_pct": 0.15873015873015872,
              "run_instit_pct": 0.19047619047619047,
              "run_unclear_pct": 0.36507936507936506,
              "avg_trade_size": 2729.2359550561796,
              "avg_run_notional": 3855.5873015873017,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Mixed, mostly unclassified",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.47619047619047616,
              "na_confidence_pct": 0.5238095238095238,
              "avg_feature_coverage": 0.8341269841269843,
              "observable_run_pct": 0.9841269841269842,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            }
          ]
        },
        "3m": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 885,
          "n_runs": 560,
          "n_trade_days": 62,
          "first_trade_date": "2025-12-11",
          "last_trade_date": "2026-03-13",
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
            "retail_pct": 0.23502824858757063,
            "mixed_pct": 0.11299435028248588,
            "instit_pct": 0.24745762711864408,
            "ambiguous_pct": 0.4033898305084746,
            "unobservable_pct": 0.0011299435028248588,
            "unclear_pct": 0.40451977401129946,
            "retail_qty_pct": 0.07537352434825381,
            "mixed_qty_pct": 0.08820862026561731,
            "instit_qty_pct": 0.36356369896704377,
            "ambiguous_qty_pct": 0.4722008730939498,
            "unobservable_qty_pct": 0.000653283325135268,
            "unclear_qty_pct": 0.47285415641908507,
            "retail_notional_pct": 0.07553936751601005,
            "mixed_notional_pct": 0.08706758287981586,
            "instit_notional_pct": 0.36397933508353647,
            "ambiguous_notional_pct": 0.4727800695090338,
            "unobservable_notional_pct": 0.0006336450116038721,
            "unclear_notional_pct": 0.47341371452063763
          },
          "run_composition": {
            "retail_pct": 0.34285714285714286,
            "mixed_pct": 0.11964285714285715,
            "instit_pct": 0.14107142857142857,
            "ambiguous_pct": 0.39464285714285713,
            "unobservable_pct": 0.0017857142857142857,
            "unclear_pct": 0.3964285714285714,
            "retail_notional_pct": 0.07553936751601005,
            "mixed_notional_pct": 0.08706758287981586,
            "instit_notional_pct": 0.36397933508353647,
            "unclear_notional_pct": 0.47341371452063763
          },
          "counts": {
            "trades": {
              "retail": 208,
              "mixed": 100,
              "institutional": 219,
              "ambiguous": 357,
              "unobservable": 1,
              "unclear": 358
            },
            "runs": {
              "retail": 192,
              "mixed": 67,
              "institutional": 79,
              "ambiguous": 221,
              "unobservable": 1,
              "unclear": 222
            }
          },
          "confidence": {
            "high": 0.01607142857142857,
            "medium": 0.11964285714285715,
            "low": 0.3482142857142857,
            "na": 0.5160714285714286
          },
          "confidence_counts": {
            "high": 9,
            "medium": 67,
            "low": 195,
            "na": 289
          },
          "trade_confidence": {
            "high": 0.010169491525423728,
            "medium": 0.12994350282485875,
            "low": 0.3423728813559322,
            "na": 0.5175141242937853
          },
          "trade_confidence_counts": {
            "high": 9,
            "medium": 115,
            "low": 303,
            "na": 458
          },
          "observability": {
            "avg_feature_coverage": 0.8250892857142857,
            "observable_run_pct": 0.9982142857142857,
            "ambiguous_run_pct": 0.39464285714285713,
            "unobservable_run_pct": 0.0017857142857142857
          },
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Mixed, mostly unclassified",
          "dominant_share": 0.39464285714285713,
          "dominance_gap": 0.05178571428571427,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 459,
              "SINGLE_FILL": 412,
              "WALK_BOOK": 14
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 578,
              "PERSISTENT_POSITIVE_IMPACT": 144,
              "MOMENTUM_REACTIVE": 136,
              "UNOBSERVABLE": 20,
              "SHORT_HORIZON_POSITIVE_IMPACT": 7
            },
            "d3_urgency": {
              "IMMEDIATE": 557,
              "ADAPTIVE": 3
            },
            "participant_confidence": {
              "NA": 289,
              "LOW": 195,
              "MEDIUM": 67,
              "HIGH": 9
            }
          },
          "trade_size": {
            "avg": 3562.0293785310732,
            "median": 1861.5
          },
          "run_size": {
            "avg": 5629.278571428571,
            "median": 2450.0,
            "avg_length": 1.0392857142857144
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-1",
              "timestamp": "2026-03-13T07:03:08.239300",
              "price": 0.23,
              "size": 200.0,
              "notional": 46.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 559,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1",
              "timestamp": "2026-03-12T01:40:31.414900",
              "price": 0.225,
              "size": 500.0,
              "notional": 112.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 558,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-6",
              "timestamp": "2026-03-11T08:35:05.382000",
              "price": 0.22,
              "size": 5000.0,
              "notional": 1100.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 557,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-5",
              "timestamp": "2026-03-11T08:34:31.185000",
              "price": 0.22,
              "size": 10000.0,
              "notional": 2200.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 556,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-4",
              "timestamp": "2026-03-11T08:34:03.641600",
              "price": 0.22,
              "size": 20000.0,
              "notional": 4400.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 555,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-3",
              "timestamp": "2026-03-11T06:45:55.766700",
              "price": 0.22,
              "size": 10000.0,
              "notional": 2200.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 554,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-2",
              "timestamp": "2026-03-11T06:27:12.575100",
              "price": 0.22,
              "size": 100.0,
              "notional": 22.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 553,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1",
              "timestamp": "2026-03-11T05:26:56.368500",
              "price": 0.215,
              "size": 100.0,
              "notional": 21.5,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 552,
              "d1": "SINGLE_FILL",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-3",
              "timestamp": "2026-03-10T07:46:25.970100",
              "price": 0.215,
              "size": 5500.0,
              "notional": 1182.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 551,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-2",
              "timestamp": "2026-03-10T03:10:50.514200",
              "price": 0.215,
              "size": 4500.0,
              "notional": 967.5,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 550,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1",
              "timestamp": "2026-03-10T01:48:16.952200",
              "price": 0.205,
              "size": 100.0,
              "notional": 20.5,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 549,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-24",
              "timestamp": "2026-03-09T06:03:56.094900",
              "price": 0.205,
              "size": 17000.0,
              "notional": 3485.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 548,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-23",
              "timestamp": "2026-03-09T05:47:18.948300",
              "price": 0.2,
              "size": 100.0,
              "notional": 20.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 547,
              "d1": "SINGLE_FILL",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-22",
              "timestamp": "2026-03-09T05:39:02.070300",
              "price": 0.2,
              "size": 99800.0,
              "notional": 19960.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 546,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-21",
              "timestamp": "2026-03-09T05:39:02.070300",
              "price": 0.2,
              "size": 100.0,
              "notional": 20.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 546,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-20",
              "timestamp": "2026-03-09T05:30:51.692300",
              "price": 0.205,
              "size": 22000.0,
              "notional": 4510.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 545,
              "d1": "SINGLE_FILL",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-19",
              "timestamp": "2026-03-09T05:22:40.681200",
              "price": 0.21,
              "size": 5500.0,
              "notional": 1155.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 544,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-18",
              "timestamp": "2026-03-09T05:22:40.681200",
              "price": 0.21,
              "size": 14500.0,
              "notional": 3045.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 543,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-17",
              "timestamp": "2026-03-09T05:22:39.595800",
              "price": 0.205,
              "size": 50000.0,
              "notional": 10250.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 542,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-16",
              "timestamp": "2026-03-09T05:22:39.595800",
              "price": 0.205,
              "size": 100000.0,
              "notional": 20500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 542,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-12",
              "timestamp": "2026-03-09T03:43:11.952900",
              "price": 0.21,
              "size": 100.0,
              "notional": 21.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 541,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-11",
              "timestamp": "2026-03-09T03:30:52.634400",
              "price": 0.21,
              "size": 26000.0,
              "notional": 5460.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 540,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-9",
              "timestamp": "2026-03-09T03:14:03.184300",
              "price": 0.21,
              "size": 300.0,
              "notional": 63.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 539,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-10",
              "timestamp": "2026-03-09T03:14:03.184300",
              "price": 0.21,
              "size": 3700.0,
              "notional": 777.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 539,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-8",
              "timestamp": "2026-03-09T03:12:33.499500",
              "price": 0.21,
              "size": 2000.0,
              "notional": 420.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 538,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-7",
              "timestamp": "2026-03-09T03:11:39.140200",
              "price": 0.21,
              "size": 8800.0,
              "notional": 1848.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 537,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-6",
              "timestamp": "2026-03-09T03:11:27.113500",
              "price": 0.21,
              "size": 6900.0,
              "notional": 1449.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 536,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-5",
              "timestamp": "2026-03-09T03:11:27.113500",
              "price": 0.21,
              "size": 12000.0,
              "notional": 2520.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 536,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-4",
              "timestamp": "2026-03-09T03:00:40.748400",
              "price": 0.21,
              "size": 3000.0,
              "notional": 630.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 535,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-3",
              "timestamp": "2026-03-09T03:00:40.748300",
              "price": 0.21,
              "size": 50000.0,
              "notional": 10500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 534,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "LGH",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.23502824858757063,
              "mixed_pct": 0.11299435028248588,
              "instit_pct": 0.24745762711864408,
              "ambiguous_pct": 0.4033898305084746,
              "unobservable_pct": 0.0011299435028248588,
              "unclear_pct": 0.40451977401129946,
              "retail_qty_pct": 0.07537352434825381,
              "mixed_qty_pct": 0.08820862026561731,
              "instit_qty_pct": 0.36356369896704377,
              "ambiguous_qty_pct": 0.4722008730939498,
              "unobservable_qty_pct": 0.000653283325135268,
              "unclear_qty_pct": 0.47285415641908507,
              "retail_notional_pct": 0.07553936751601005,
              "mixed_notional_pct": 0.08706758287981586,
              "instit_notional_pct": 0.36397933508353647,
              "ambiguous_notional_pct": 0.4727800695090338,
              "unobservable_notional_pct": 0.0006336450116038721,
              "unclear_notional_pct": 0.47341371452063763,
              "run_retail_pct": 0.34285714285714286,
              "run_mixed_pct": 0.11964285714285715,
              "run_instit_pct": 0.14107142857142857,
              "run_unclear_pct": 0.3964285714285714,
              "avg_trade_size": 3562.0293785310732,
              "avg_run_notional": 5629.278571428571,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Mixed, mostly unclassified",
              "high_confidence_pct": 0.01607142857142857,
              "medium_confidence_pct": 0.11964285714285715,
              "low_confidence_pct": 0.3482142857142857,
              "na_confidence_pct": 0.5160714285714286,
              "avg_feature_coverage": 0.8250892857142857,
              "observable_run_pct": 0.9982142857142857,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "OTS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.09722222222222222,
              "mixed_pct": 0.06944444444444445,
              "instit_pct": 0.4722222222222222,
              "ambiguous_pct": 0.3194444444444444,
              "unobservable_pct": 0.041666666666666664,
              "unclear_pct": 0.3611111111111111,
              "retail_qty_pct": 0.03080857282026303,
              "mixed_qty_pct": 0.0456648806624452,
              "instit_qty_pct": 0.6678032148075986,
              "ambiguous_qty_pct": 0.24585971748660496,
              "unobservable_qty_pct": 0.009863614223088164,
              "unclear_qty_pct": 0.25572333170969314,
              "retail_notional_pct": 0.03197710317373839,
              "mixed_notional_pct": 0.044816095854516326,
              "instit_notional_pct": 0.6650477830114765,
              "ambiguous_notional_pct": 0.2480472215909268,
              "unobservable_notional_pct": 0.010111796369342079,
              "unclear_notional_pct": 0.25815901796026886,
              "run_retail_pct": 0.11666666666666667,
              "run_mixed_pct": 0.08333333333333333,
              "run_instit_pct": 0.4,
              "run_unclear_pct": 0.39999999999999997,
              "avg_trade_size": 1338.3708333333334,
              "avg_run_notional": 1606.0449999999998,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed, leaning institution-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5166666666666667,
              "na_confidence_pct": 0.48333333333333334,
              "avg_feature_coverage": 0.7975000000000002,
              "observable_run_pct": 0.95,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "MV4",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.21987951807228914,
              "mixed_pct": 0.10542168674698796,
              "instit_pct": 0.3614457831325301,
              "ambiguous_pct": 0.2921686746987952,
              "unobservable_pct": 0.02108433734939759,
              "unclear_pct": 0.3132530120481928,
              "retail_qty_pct": 0.03875447235112827,
              "mixed_qty_pct": 0.09458358425732404,
              "instit_qty_pct": 0.5629317368663431,
              "ambiguous_qty_pct": 0.26865988876687097,
              "unobservable_qty_pct": 0.03507031775833363,
              "unclear_qty_pct": 0.3037302065252046,
              "retail_notional_pct": 0.038444700467371175,
              "mixed_notional_pct": 0.09628663918047932,
              "instit_notional_pct": 0.5635442531969586,
              "ambiguous_notional_pct": 0.2672737400539541,
              "unobservable_notional_pct": 0.03445066710123688,
              "unclear_notional_pct": 0.301724407155191,
              "run_retail_pct": 0.32242990654205606,
              "run_mixed_pct": 0.1261682242990654,
              "run_instit_pct": 0.2383177570093458,
              "run_unclear_pct": 0.3130841121495327,
              "avg_trade_size": 2652.2996987951806,
              "avg_run_notional": 4114.782710280374,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5607476635514018,
              "na_confidence_pct": 0.4392523364485981,
              "avg_feature_coverage": 0.8320093457943923,
              "observable_run_pct": 0.9953271028037384,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "Y03",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2168284789644013,
              "mixed_pct": 0.1779935275080906,
              "instit_pct": 0.2977346278317152,
              "ambiguous_pct": 0.2686084142394822,
              "unobservable_pct": 0.038834951456310676,
              "unclear_pct": 0.30744336569579284,
              "retail_qty_pct": 0.03525046382189239,
              "mixed_qty_pct": 0.08233638282899367,
              "instit_qty_pct": 0.5509564327298317,
              "ambiguous_qty_pct": 0.31635851832896167,
              "unobservable_qty_pct": 0.015098202290320517,
              "unclear_qty_pct": 0.33145672061928216,
              "retail_notional_pct": 0.03519994951301092,
              "mixed_notional_pct": 0.08221175084670888,
              "instit_notional_pct": 0.5507304836232829,
              "ambiguous_notional_pct": 0.31648768327828847,
              "unobservable_notional_pct": 0.015370132738708795,
              "unclear_notional_pct": 0.33185781601699726,
              "run_retail_pct": 0.3130841121495327,
              "run_mixed_pct": 0.1822429906542056,
              "run_instit_pct": 0.18691588785046728,
              "run_unclear_pct": 0.3177570093457944,
              "avg_trade_size": 3076.8284789644013,
              "avg_run_notional": 4442.710280373832,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5,
              "na_confidence_pct": 0.5,
              "avg_feature_coverage": 0.834345794392523,
              "observable_run_pct": 0.9906542056074766,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "5JS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.28982725527831094,
              "mixed_pct": 0.1420345489443378,
              "instit_pct": 0.2648752399232246,
              "ambiguous_pct": 0.28502879078694815,
              "unobservable_pct": 0.018234165067178502,
              "unclear_pct": 0.30326295585412666,
              "retail_qty_pct": 0.05841644314695989,
              "mixed_qty_pct": 0.08855826084379306,
              "instit_qty_pct": 0.4057882959647901,
              "ambiguous_qty_pct": 0.42840206873045744,
              "unobservable_qty_pct": 0.018834931313999496,
              "unclear_qty_pct": 0.44723700004445693,
              "retail_notional_pct": 0.05899103484884041,
              "mixed_notional_pct": 0.08834882166389402,
              "instit_notional_pct": 0.407088187411055,
              "ambiguous_notional_pct": 0.42729022323377164,
              "unobservable_notional_pct": 0.018281732842438888,
              "unclear_notional_pct": 0.44557195607621053,
              "run_retail_pct": 0.4479495268138801,
              "run_mixed_pct": 0.14195583596214512,
              "run_instit_pct": 0.13249211356466878,
              "run_unclear_pct": 0.277602523659306,
              "avg_trade_size": 2482.313819577735,
              "avg_run_notional": 4079.7649842271294,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0015772870662460567,
              "medium_confidence_pct": 0.04100946372239748,
              "low_confidence_pct": 0.5378548895899053,
              "na_confidence_pct": 0.4195583596214511,
              "avg_feature_coverage": 0.8339116719242903,
              "observable_run_pct": 0.9905362776025236,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "Q01",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2505091649694501,
              "mixed_pct": 0.17270875763747454,
              "instit_pct": 0.2480651731160896,
              "ambiguous_pct": 0.29857433808553974,
              "unobservable_pct": 0.03014256619144603,
              "unclear_pct": 0.32871690427698574,
              "retail_qty_pct": 0.10111740183975103,
              "mixed_qty_pct": 0.17203165014871896,
              "instit_qty_pct": 0.359371590661139,
              "ambiguous_qty_pct": 0.3166278121662437,
              "unobservable_qty_pct": 0.05085154518414736,
              "unclear_qty_pct": 0.36747935735039106,
              "retail_notional_pct": 0.10107962642275788,
              "mixed_notional_pct": 0.1723141703969128,
              "instit_notional_pct": 0.36135905076170305,
              "ambiguous_notional_pct": 0.3162463781990891,
              "unobservable_notional_pct": 0.04900077421953719,
              "unclear_notional_pct": 0.36524715241862626,
              "run_retail_pct": 0.46953405017921146,
              "run_mixed_pct": 0.17204301075268819,
              "run_instit_pct": 0.11827956989247312,
              "run_unclear_pct": 0.24014336917562723,
              "avg_trade_size": 3401.6254582484726,
              "avg_run_notional": 7482.966397849463,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.025985663082437275,
              "medium_confidence_pct": 0.12634408602150538,
              "low_confidence_pct": 0.43548387096774194,
              "na_confidence_pct": 0.4121863799283154,
              "avg_feature_coverage": 0.8487455197132617,
              "observable_run_pct": 0.9937275985663082,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "D03",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.283476898981989,
              "mixed_pct": 0.06891151135473766,
              "instit_pct": 0.24353954581049334,
              "ambiguous_pct": 0.3711824588880188,
              "unobservable_pct": 0.03288958496476116,
              "unclear_pct": 0.40407204385277995,
              "retail_qty_pct": 0.06072073144126455,
              "mixed_qty_pct": 0.04237916741040439,
              "instit_qty_pct": 0.3448920092818468,
              "ambiguous_qty_pct": 0.5031911306796771,
              "unobservable_qty_pct": 0.04881696118680708,
              "unclear_qty_pct": 0.5520080918664843,
              "retail_notional_pct": 0.06126057325136253,
              "mixed_notional_pct": 0.04264160430931013,
              "instit_notional_pct": 0.34193459477921995,
              "ambiguous_notional_pct": 0.5072428796399701,
              "unobservable_notional_pct": 0.04692034802013731,
              "unclear_notional_pct": 0.5541632276601074,
              "run_retail_pct": 0.44358974358974357,
              "run_mixed_pct": 0.07564102564102564,
              "run_instit_pct": 0.10256410256410256,
              "run_unclear_pct": 0.3782051282051282,
              "avg_trade_size": 1834.8428347689896,
              "avg_run_notional": 3003.9670512820517,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.1064102564102564,
              "medium_confidence_pct": 0.05128205128205128,
              "low_confidence_pct": 0.38846153846153847,
              "na_confidence_pct": 0.45384615384615384,
              "avg_feature_coverage": 0.8273717948717946,
              "observable_run_pct": 0.9884615384615385,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "42W",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.4346394468225222,
              "mixed_pct": 0.18999012183075403,
              "instit_pct": 0.18109976950938425,
              "ambiguous_pct": 0.1942706618373395,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.1942706618373395,
              "retail_qty_pct": 0.09215647054943106,
              "mixed_qty_pct": 0.2803275846051939,
              "instit_qty_pct": 0.3200809883458969,
              "ambiguous_qty_pct": 0.30743495649947816,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.30743495649947816,
              "retail_notional_pct": 0.09174453783510465,
              "mixed_notional_pct": 0.28315299711740854,
              "instit_notional_pct": 0.31960056730923325,
              "ambiguous_notional_pct": 0.3055018977382535,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.3055018977382535,
              "run_retail_pct": 0.673773987206823,
              "run_mixed_pct": 0.1497867803837953,
              "run_instit_pct": 0.04957356076759062,
              "run_unclear_pct": 0.12686567164179105,
              "avg_trade_size": 3678.5032597958507,
              "avg_run_notional": 5955.018336886994,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.2515991471215352,
              "medium_confidence_pct": 0.17857142857142858,
              "low_confidence_pct": 0.2931769722814499,
              "na_confidence_pct": 0.27665245202558636,
              "avg_feature_coverage": 0.8476812366737737,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "BQD",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.16019417475728157,
              "mixed_pct": 0.1262135922330097,
              "instit_pct": 0.4320388349514563,
              "ambiguous_pct": 0.27184466019417475,
              "unobservable_pct": 0.009708737864077669,
              "unclear_pct": 0.2815533980582524,
              "retail_qty_pct": 0.007701538340480781,
              "mixed_qty_pct": 0.027402919305976315,
              "instit_qty_pct": 0.15922414132273674,
              "ambiguous_qty_pct": 0.05755006491718141,
              "unobservable_qty_pct": 0.7481213361136247,
              "unclear_qty_pct": 0.8056714010308061,
              "retail_notional_pct": 0.007476417829330432,
              "mixed_notional_pct": 0.026572588491930574,
              "instit_notional_pct": 0.1529095916836672,
              "ambiguous_notional_pct": 0.05594335899297798,
              "unobservable_notional_pct": 0.7570980430020938,
              "unclear_notional_pct": 0.8130414019950718,
              "run_retail_pct": 0.2558139534883721,
              "run_mixed_pct": 0.16279069767441862,
              "run_instit_pct": 0.29457364341085274,
              "run_unclear_pct": 0.28682170542635654,
              "avg_trade_size": 19507.29126213592,
              "avg_run_notional": 31151.178294573645,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed, leaning institution-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5503875968992248,
              "na_confidence_pct": 0.4496124031007752,
              "avg_feature_coverage": 0.827906976744186,
              "observable_run_pct": 0.9844961240310077,
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
      "n_trades": 885,
      "n_runs": 560,
      "n_trade_days": 62,
      "first_trade_date": "2025-12-11",
      "last_trade_date": "2026-03-13",
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
        "retail_pct": 0.23502824858757063,
        "mixed_pct": 0.11299435028248588,
        "instit_pct": 0.24745762711864408,
        "ambiguous_pct": 0.4033898305084746,
        "unobservable_pct": 0.0011299435028248588,
        "unclear_pct": 0.40451977401129946,
        "retail_qty_pct": 0.07537352434825381,
        "mixed_qty_pct": 0.08820862026561731,
        "instit_qty_pct": 0.36356369896704377,
        "ambiguous_qty_pct": 0.4722008730939498,
        "unobservable_qty_pct": 0.000653283325135268,
        "unclear_qty_pct": 0.47285415641908507,
        "retail_notional_pct": 0.07553936751601005,
        "mixed_notional_pct": 0.08706758287981586,
        "instit_notional_pct": 0.36397933508353647,
        "ambiguous_notional_pct": 0.4727800695090338,
        "unobservable_notional_pct": 0.0006336450116038721,
        "unclear_notional_pct": 0.47341371452063763
      },
      "run_composition": {
        "retail_pct": 0.34285714285714286,
        "mixed_pct": 0.11964285714285715,
        "instit_pct": 0.14107142857142857,
        "ambiguous_pct": 0.39464285714285713,
        "unobservable_pct": 0.0017857142857142857,
        "unclear_pct": 0.3964285714285714
      },
      "trade_size": {
        "avg": 3562.0293785310732,
        "median": 1861.5
      },
      "run_size": {
        "avg": 5629.278571428571,
        "median": 2450.0,
        "avg_length": 1.0392857142857144
      },
      "confidence": {
        "high": 0.01607142857142857,
        "medium": 0.11964285714285715,
        "low": 0.3482142857142857,
        "na": 0.5160714285714286
      },
      "confidence_counts": {
        "high": 9,
        "medium": 67,
        "low": 195,
        "na": 289
      },
      "trade_confidence": {
        "high": 0.010169491525423728,
        "medium": 0.12994350282485875,
        "low": 0.3423728813559322,
        "na": 0.5175141242937853
      },
      "trade_confidence_counts": {
        "high": 9,
        "medium": 115,
        "low": 303,
        "na": 458
      },
      "counts": {
        "trades": {
          "retail": 208,
          "mixed": 100,
          "institutional": 219,
          "ambiguous": 357,
          "unobservable": 1,
          "unclear": 358
        },
        "runs": {
          "retail": 192,
          "mixed": 67,
          "institutional": 79,
          "ambiguous": 221,
          "unobservable": 1,
          "unclear": 222
        }
      },
      "observability": {
        "avg_feature_coverage": 0.8250892857142857,
        "observable_run_pct": 0.9982142857142857,
        "ambiguous_run_pct": 0.39464285714285713,
        "unobservable_run_pct": 0.0017857142857142857
      },
      "dominant_bucket": "AMBIGUOUS",
      "dominant_label": "Mixed, mostly unclassified",
      "dominant_share": 0.39464285714285713,
      "dominance_gap": 0.05178571428571427,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2025-12",
            "n_trades": 438,
            "n_runs": 233,
            "retail_pct": 0.2100456621004566,
            "mixed_pct": 0.13926940639269406,
            "instit_pct": 0.273972602739726,
            "ambiguous_pct": 0.3767123287671233,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.3767123287671233,
            "avg_trade_size": 3539.1803652968038,
            "avg_run_notional": 6653.051502145922,
            "retail_qty_pct": 0.08395658165714374,
            "mixed_qty_pct": 0.13804369706260355,
            "instit_qty_pct": 0.3903005527941655,
            "ambiguous_qty_pct": 0.38769916848608726,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.38769916848608726,
            "retail_notional_pct": 0.08384000113536594,
            "mixed_notional_pct": 0.13818629161745136,
            "instit_notional_pct": 0.3920570185935525,
            "ambiguous_notional_pct": 0.38591668865363016,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.38591668865363016,
            "run_retail_pct": 0.3648068669527897,
            "run_mixed_pct": 0.15450643776824036,
            "run_instit_pct": 0.13304721030042918,
            "run_ambiguous_pct": 0.34763948497854075,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.34763948497854075,
            "avg_feature_coverage": 0.8326180257510727,
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.15879828326180256,
            "low_confidence_pct": 0.33905579399141633,
            "na_confidence_pct": 0.5021459227467812,
            "total_quantity": null
          },
          {
            "month": "2026-01",
            "n_trades": 336,
            "n_runs": 232,
            "retail_pct": 0.26785714285714285,
            "mixed_pct": 0.06547619047619048,
            "instit_pct": 0.22023809523809523,
            "ambiguous_pct": 0.44345238095238093,
            "unobservable_pct": 0.002976190476190476,
            "unclear_pct": 0.4464285714285714,
            "avg_trade_size": 4005.6369047619046,
            "avg_run_notional": 5801.267241379311,
            "retail_qty_pct": 0.07190685216873745,
            "mixed_qty_pct": 0.02981548991890484,
            "instit_qty_pct": 0.3127743471467897,
            "ambiguous_qty_pct": 0.583922327207797,
            "unobservable_qty_pct": 0.001580983557770999,
            "unclear_qty_pct": 0.585503310765568,
            "retail_notional_pct": 0.07179874492344865,
            "mixed_notional_pct": 0.028642671711145158,
            "instit_notional_pct": 0.3149144732051707,
            "ambiguous_notional_pct": 0.5831599665352546,
            "unobservable_notional_pct": 0.0014841436249808677,
            "unclear_notional_pct": 0.5846441101602354,
            "run_retail_pct": 0.35344827586206895,
            "run_mixed_pct": 0.0603448275862069,
            "run_instit_pct": 0.1336206896551724,
            "run_ambiguous_pct": 0.4482758620689655,
            "run_unobservable_pct": 0.004310344827586207,
            "run_unclear_pct": 0.4525862068965517,
            "avg_feature_coverage": 0.8183189655172413,
            "high_confidence_pct": 0.03879310344827586,
            "medium_confidence_pct": 0.12931034482758622,
            "low_confidence_pct": 0.31896551724137934,
            "na_confidence_pct": 0.5129310344827587,
            "total_quantity": null
          },
          {
            "month": "2026-02",
            "n_trades": 53,
            "n_runs": 46,
            "retail_pct": 0.2830188679245283,
            "mixed_pct": 0.18867924528301888,
            "instit_pct": 0.2641509433962264,
            "ambiguous_pct": 0.2641509433962264,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.2641509433962264,
            "avg_trade_size": 1562.9622641509434,
            "avg_run_notional": 1800.804347826087,
            "retail_qty_pct": 0.06229143492769744,
            "mixed_qty_pct": 0.15628476084538376,
            "instit_qty_pct": 0.6270856507230256,
            "ambiguous_qty_pct": 0.1543381535038932,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.1543381535038932,
            "retail_notional_pct": 0.062073711022852106,
            "mixed_notional_pct": 0.1565966898849548,
            "instit_notional_pct": 0.6262298248367275,
            "ambiguous_notional_pct": 0.15509977425546556,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.15509977425546556,
            "run_retail_pct": 0.30434782608695654,
            "run_mixed_pct": 0.21739130434782608,
            "run_instit_pct": 0.1956521739130435,
            "run_ambiguous_pct": 0.2826086956521739,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.2826086956521739,
            "avg_feature_coverage": 0.8206521739130437,
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5,
            "na_confidence_pct": 0.5,
            "total_quantity": null
          },
          {
            "month": "2026-03",
            "n_trades": 58,
            "n_runs": 49,
            "retail_pct": 0.1896551724137931,
            "mixed_pct": 0.1206896551724138,
            "instit_pct": 0.1896551724137931,
            "ambiguous_pct": 0.5,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.5,
            "avg_trade_size": 2991.448275862069,
            "avg_run_notional": 3540.8979591836733,
            "retail_qty_pct": 0.036103292130706156,
            "mixed_qty_pct": 0.048586464325052016,
            "instit_qty_pct": 0.37045649247338147,
            "ambiguous_qty_pct": 0.5448537510708603,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.5448537510708603,
            "retail_notional_pct": 0.036823358539284395,
            "mixed_notional_pct": 0.050364833087421616,
            "instit_notional_pct": 0.3685159996311324,
            "ambiguous_notional_pct": 0.5442958087421615,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.5442958087421615,
            "run_retail_pct": 0.22448979591836735,
            "run_mixed_pct": 0.14285714285714285,
            "run_instit_pct": 0.16326530612244897,
            "run_ambiguous_pct": 0.46938775510204084,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.46938775510204084,
            "avg_feature_coverage": 0.8255102040816327,
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.3877551020408163,
            "na_confidence_pct": 0.6122448979591837,
            "total_quantity": null
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "LGH",
          "currency": "SGD",
          "is_target": true,
          "retail_pct": 0.23502824858757063,
          "mixed_pct": 0.11299435028248588,
          "instit_pct": 0.24745762711864408,
          "ambiguous_pct": 0.4033898305084746,
          "unobservable_pct": 0.0011299435028248588,
          "unclear_pct": 0.40451977401129946,
          "retail_qty_pct": 0.07537352434825381,
          "mixed_qty_pct": 0.08820862026561731,
          "instit_qty_pct": 0.36356369896704377,
          "ambiguous_qty_pct": 0.4722008730939498,
          "unobservable_qty_pct": 0.000653283325135268,
          "unclear_qty_pct": 0.47285415641908507,
          "retail_notional_pct": 0.07553936751601005,
          "mixed_notional_pct": 0.08706758287981586,
          "instit_notional_pct": 0.36397933508353647,
          "ambiguous_notional_pct": 0.4727800695090338,
          "unobservable_notional_pct": 0.0006336450116038721,
          "unclear_notional_pct": 0.47341371452063763,
          "run_retail_pct": 0.34285714285714286,
          "run_mixed_pct": 0.11964285714285715,
          "run_instit_pct": 0.14107142857142857,
          "run_unclear_pct": 0.3964285714285714,
          "avg_trade_size": 3562.0293785310732,
          "avg_run_notional": 5629.278571428571,
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Mixed, mostly unclassified",
          "high_confidence_pct": 0.01607142857142857,
          "medium_confidence_pct": 0.11964285714285715,
          "low_confidence_pct": 0.3482142857142857,
          "na_confidence_pct": 0.5160714285714286,
          "avg_feature_coverage": 0.8250892857142857,
          "observable_run_pct": 0.9982142857142857,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "OTS",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.09722222222222222,
          "mixed_pct": 0.06944444444444445,
          "instit_pct": 0.4722222222222222,
          "ambiguous_pct": 0.3194444444444444,
          "unobservable_pct": 0.041666666666666664,
          "unclear_pct": 0.3611111111111111,
          "retail_qty_pct": 0.03080857282026303,
          "mixed_qty_pct": 0.0456648806624452,
          "instit_qty_pct": 0.6678032148075986,
          "ambiguous_qty_pct": 0.24585971748660496,
          "unobservable_qty_pct": 0.009863614223088164,
          "unclear_qty_pct": 0.25572333170969314,
          "retail_notional_pct": 0.03197710317373839,
          "mixed_notional_pct": 0.044816095854516326,
          "instit_notional_pct": 0.6650477830114765,
          "ambiguous_notional_pct": 0.2480472215909268,
          "unobservable_notional_pct": 0.010111796369342079,
          "unclear_notional_pct": 0.25815901796026886,
          "run_retail_pct": 0.11666666666666667,
          "run_mixed_pct": 0.08333333333333333,
          "run_instit_pct": 0.4,
          "run_unclear_pct": 0.39999999999999997,
          "avg_trade_size": 1338.3708333333334,
          "avg_run_notional": 1606.0449999999998,
          "dominant_bucket": "INSTITUTIONAL",
          "dominant_label": "Mixed, leaning institution-like",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.5166666666666667,
          "na_confidence_pct": 0.48333333333333334,
          "avg_feature_coverage": 0.7975000000000002,
          "observable_run_pct": 0.95,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "MV4",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.21987951807228914,
          "mixed_pct": 0.10542168674698796,
          "instit_pct": 0.3614457831325301,
          "ambiguous_pct": 0.2921686746987952,
          "unobservable_pct": 0.02108433734939759,
          "unclear_pct": 0.3132530120481928,
          "retail_qty_pct": 0.03875447235112827,
          "mixed_qty_pct": 0.09458358425732404,
          "instit_qty_pct": 0.5629317368663431,
          "ambiguous_qty_pct": 0.26865988876687097,
          "unobservable_qty_pct": 0.03507031775833363,
          "unclear_qty_pct": 0.3037302065252046,
          "retail_notional_pct": 0.038444700467371175,
          "mixed_notional_pct": 0.09628663918047932,
          "instit_notional_pct": 0.5635442531969586,
          "ambiguous_notional_pct": 0.2672737400539541,
          "unobservable_notional_pct": 0.03445066710123688,
          "unclear_notional_pct": 0.301724407155191,
          "run_retail_pct": 0.32242990654205606,
          "run_mixed_pct": 0.1261682242990654,
          "run_instit_pct": 0.2383177570093458,
          "run_unclear_pct": 0.3130841121495327,
          "avg_trade_size": 2652.2996987951806,
          "avg_run_notional": 4114.782710280374,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Mixed, leaning retail-like",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.5607476635514018,
          "na_confidence_pct": 0.4392523364485981,
          "avg_feature_coverage": 0.8320093457943923,
          "observable_run_pct": 0.9953271028037384,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "Y03",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.2168284789644013,
          "mixed_pct": 0.1779935275080906,
          "instit_pct": 0.2977346278317152,
          "ambiguous_pct": 0.2686084142394822,
          "unobservable_pct": 0.038834951456310676,
          "unclear_pct": 0.30744336569579284,
          "retail_qty_pct": 0.03525046382189239,
          "mixed_qty_pct": 0.08233638282899367,
          "instit_qty_pct": 0.5509564327298317,
          "ambiguous_qty_pct": 0.31635851832896167,
          "unobservable_qty_pct": 0.015098202290320517,
          "unclear_qty_pct": 0.33145672061928216,
          "retail_notional_pct": 0.03519994951301092,
          "mixed_notional_pct": 0.08221175084670888,
          "instit_notional_pct": 0.5507304836232829,
          "ambiguous_notional_pct": 0.31648768327828847,
          "unobservable_notional_pct": 0.015370132738708795,
          "unclear_notional_pct": 0.33185781601699726,
          "run_retail_pct": 0.3130841121495327,
          "run_mixed_pct": 0.1822429906542056,
          "run_instit_pct": 0.18691588785046728,
          "run_unclear_pct": 0.3177570093457944,
          "avg_trade_size": 3076.8284789644013,
          "avg_run_notional": 4442.710280373832,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Mixed, leaning retail-like",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.5,
          "na_confidence_pct": 0.5,
          "avg_feature_coverage": 0.834345794392523,
          "observable_run_pct": 0.9906542056074766,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "5JS",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.28982725527831094,
          "mixed_pct": 0.1420345489443378,
          "instit_pct": 0.2648752399232246,
          "ambiguous_pct": 0.28502879078694815,
          "unobservable_pct": 0.018234165067178502,
          "unclear_pct": 0.30326295585412666,
          "retail_qty_pct": 0.05841644314695989,
          "mixed_qty_pct": 0.08855826084379306,
          "instit_qty_pct": 0.4057882959647901,
          "ambiguous_qty_pct": 0.42840206873045744,
          "unobservable_qty_pct": 0.018834931313999496,
          "unclear_qty_pct": 0.44723700004445693,
          "retail_notional_pct": 0.05899103484884041,
          "mixed_notional_pct": 0.08834882166389402,
          "instit_notional_pct": 0.407088187411055,
          "ambiguous_notional_pct": 0.42729022323377164,
          "unobservable_notional_pct": 0.018281732842438888,
          "unclear_notional_pct": 0.44557195607621053,
          "run_retail_pct": 0.4479495268138801,
          "run_mixed_pct": 0.14195583596214512,
          "run_instit_pct": 0.13249211356466878,
          "run_unclear_pct": 0.277602523659306,
          "avg_trade_size": 2482.313819577735,
          "avg_run_notional": 4079.7649842271294,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.0015772870662460567,
          "medium_confidence_pct": 0.04100946372239748,
          "low_confidence_pct": 0.5378548895899053,
          "na_confidence_pct": 0.4195583596214511,
          "avg_feature_coverage": 0.8339116719242903,
          "observable_run_pct": 0.9905362776025236,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "Q01",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.2505091649694501,
          "mixed_pct": 0.17270875763747454,
          "instit_pct": 0.2480651731160896,
          "ambiguous_pct": 0.29857433808553974,
          "unobservable_pct": 0.03014256619144603,
          "unclear_pct": 0.32871690427698574,
          "retail_qty_pct": 0.10111740183975103,
          "mixed_qty_pct": 0.17203165014871896,
          "instit_qty_pct": 0.359371590661139,
          "ambiguous_qty_pct": 0.3166278121662437,
          "unobservable_qty_pct": 0.05085154518414736,
          "unclear_qty_pct": 0.36747935735039106,
          "retail_notional_pct": 0.10107962642275788,
          "mixed_notional_pct": 0.1723141703969128,
          "instit_notional_pct": 0.36135905076170305,
          "ambiguous_notional_pct": 0.3162463781990891,
          "unobservable_notional_pct": 0.04900077421953719,
          "unclear_notional_pct": 0.36524715241862626,
          "run_retail_pct": 0.46953405017921146,
          "run_mixed_pct": 0.17204301075268819,
          "run_instit_pct": 0.11827956989247312,
          "run_unclear_pct": 0.24014336917562723,
          "avg_trade_size": 3401.6254582484726,
          "avg_run_notional": 7482.966397849463,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.025985663082437275,
          "medium_confidence_pct": 0.12634408602150538,
          "low_confidence_pct": 0.43548387096774194,
          "na_confidence_pct": 0.4121863799283154,
          "avg_feature_coverage": 0.8487455197132617,
          "observable_run_pct": 0.9937275985663082,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "D03",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.283476898981989,
          "mixed_pct": 0.06891151135473766,
          "instit_pct": 0.24353954581049334,
          "ambiguous_pct": 0.3711824588880188,
          "unobservable_pct": 0.03288958496476116,
          "unclear_pct": 0.40407204385277995,
          "retail_qty_pct": 0.06072073144126455,
          "mixed_qty_pct": 0.04237916741040439,
          "instit_qty_pct": 0.3448920092818468,
          "ambiguous_qty_pct": 0.5031911306796771,
          "unobservable_qty_pct": 0.04881696118680708,
          "unclear_qty_pct": 0.5520080918664843,
          "retail_notional_pct": 0.06126057325136253,
          "mixed_notional_pct": 0.04264160430931013,
          "instit_notional_pct": 0.34193459477921995,
          "ambiguous_notional_pct": 0.5072428796399701,
          "unobservable_notional_pct": 0.04692034802013731,
          "unclear_notional_pct": 0.5541632276601074,
          "run_retail_pct": 0.44358974358974357,
          "run_mixed_pct": 0.07564102564102564,
          "run_instit_pct": 0.10256410256410256,
          "run_unclear_pct": 0.3782051282051282,
          "avg_trade_size": 1834.8428347689896,
          "avg_run_notional": 3003.9670512820517,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Mixed, leaning retail-like",
          "high_confidence_pct": 0.1064102564102564,
          "medium_confidence_pct": 0.05128205128205128,
          "low_confidence_pct": 0.38846153846153847,
          "na_confidence_pct": 0.45384615384615384,
          "avg_feature_coverage": 0.8273717948717946,
          "observable_run_pct": 0.9884615384615385,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "42W",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.4346394468225222,
          "mixed_pct": 0.18999012183075403,
          "instit_pct": 0.18109976950938425,
          "ambiguous_pct": 0.1942706618373395,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.1942706618373395,
          "retail_qty_pct": 0.09215647054943106,
          "mixed_qty_pct": 0.2803275846051939,
          "instit_qty_pct": 0.3200809883458969,
          "ambiguous_qty_pct": 0.30743495649947816,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.30743495649947816,
          "retail_notional_pct": 0.09174453783510465,
          "mixed_notional_pct": 0.28315299711740854,
          "instit_notional_pct": 0.31960056730923325,
          "ambiguous_notional_pct": 0.3055018977382535,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.3055018977382535,
          "run_retail_pct": 0.673773987206823,
          "run_mixed_pct": 0.1497867803837953,
          "run_instit_pct": 0.04957356076759062,
          "run_unclear_pct": 0.12686567164179105,
          "avg_trade_size": 3678.5032597958507,
          "avg_run_notional": 5955.018336886994,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.2515991471215352,
          "medium_confidence_pct": 0.17857142857142858,
          "low_confidence_pct": 0.2931769722814499,
          "na_confidence_pct": 0.27665245202558636,
          "avg_feature_coverage": 0.8476812366737737,
          "observable_run_pct": 1.0,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "BQD",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.16019417475728157,
          "mixed_pct": 0.1262135922330097,
          "instit_pct": 0.4320388349514563,
          "ambiguous_pct": 0.27184466019417475,
          "unobservable_pct": 0.009708737864077669,
          "unclear_pct": 0.2815533980582524,
          "retail_qty_pct": 0.007701538340480781,
          "mixed_qty_pct": 0.027402919305976315,
          "instit_qty_pct": 0.15922414132273674,
          "ambiguous_qty_pct": 0.05755006491718141,
          "unobservable_qty_pct": 0.7481213361136247,
          "unclear_qty_pct": 0.8056714010308061,
          "retail_notional_pct": 0.007476417829330432,
          "mixed_notional_pct": 0.026572588491930574,
          "instit_notional_pct": 0.1529095916836672,
          "ambiguous_notional_pct": 0.05594335899297798,
          "unobservable_notional_pct": 0.7570980430020938,
          "unclear_notional_pct": 0.8130414019950718,
          "run_retail_pct": 0.2558139534883721,
          "run_mixed_pct": 0.16279069767441862,
          "run_instit_pct": 0.29457364341085274,
          "run_unclear_pct": 0.28682170542635654,
          "avg_trade_size": 19507.29126213592,
          "avg_run_notional": 31151.178294573645,
          "dominant_bucket": "INSTITUTIONAL",
          "dominant_label": "Mixed, leaning institution-like",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.5503875968992248,
          "na_confidence_pct": 0.4496124031007752,
          "avg_feature_coverage": 0.827906976744186,
          "observable_run_pct": 0.9844961240310077,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        }
      ],
      "peer_comparison_periods": {
        "1d": [
          {
            "ticker": "LGH",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.0,
            "mixed_pct": 1.0,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 1.0,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 1.0,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 1.0,
            "run_instit_pct": 0.0,
            "run_unclear_pct": 0.0,
            "avg_trade_size": 46.0,
            "avg_run_notional": 46.0,
            "dominant_bucket": "MIXED",
            "dominant_label": "Mixed",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.0,
            "na_confidence_pct": 1.0,
            "avg_feature_coverage": 0.8500000000000001,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "Y03",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.0,
            "mixed_pct": 0.0,
            "instit_pct": 1.0,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 1.0,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 1.0,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 1.0,
            "run_unclear_pct": 0.0,
            "avg_trade_size": 6000.0,
            "avg_run_notional": 6000.0,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Institution-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 1.0,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.8500000000000001,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "BQD",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.3333333333333333,
            "mixed_pct": 0.0,
            "instit_pct": 0.6666666666666666,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0,
            "retail_qty_pct": 0.0060790273556231,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.993920972644377,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0,
            "retail_notional_pct": 0.0060790273556231,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.993920972644377,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0,
            "run_retail_pct": 0.5,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.5,
            "run_unclear_pct": 0.0,
            "avg_trade_size": 3948.0,
            "avg_run_notional": 5922.0,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 1.0,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.775,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "OTS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.5,
            "ambiguous_pct": 0.5,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.5,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.825,
            "ambiguous_qty_pct": 0.175,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.175,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.825,
            "ambiguous_notional_pct": 0.175,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.175,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.5,
            "run_unclear_pct": 0.5,
            "avg_trade_size": 11300.0,
            "avg_run_notional": 11300.0,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed, leaning institution-like",
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
          },
          {
            "ticker": "Q01",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.07692307692307693,
            "mixed_pct": 0.15384615384615385,
            "instit_pct": 0.3076923076923077,
            "ambiguous_pct": 0.3076923076923077,
            "unobservable_pct": 0.15384615384615385,
            "unclear_pct": 0.46153846153846156,
            "retail_qty_pct": 0.05813953488372093,
            "mixed_qty_pct": 0.11627906976744186,
            "instit_qty_pct": 0.5058139534883721,
            "ambiguous_qty_pct": 0.29069767441860467,
            "unobservable_qty_pct": 0.029069767441860465,
            "unclear_qty_pct": 0.31976744186046513,
            "retail_notional_pct": 0.05794556628621598,
            "mixed_notional_pct": 0.11647644132279777,
            "instit_notional_pct": 0.5066725197541703,
            "ambiguous_notional_pct": 0.28996195493122623,
            "unobservable_notional_pct": 0.0289435177055897,
            "unclear_notional_pct": 0.3189054726368159,
            "run_retail_pct": 0.125,
            "run_mixed_pct": 0.125,
            "run_instit_pct": 0.25,
            "run_unclear_pct": 0.5,
            "avg_trade_size": 1314.2307692307693,
            "avg_run_notional": 2135.625,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.375,
            "na_confidence_pct": 0.625,
            "avg_feature_coverage": 0.8,
            "observable_run_pct": 0.875,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "42W",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.38095238095238093,
            "mixed_pct": 0.14285714285714285,
            "instit_pct": 0.19047619047619047,
            "ambiguous_pct": 0.2857142857142857,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.2857142857142857,
            "retail_qty_pct": 0.07671474459910563,
            "mixed_qty_pct": 0.29344334572022424,
            "instit_qty_pct": 0.37790514580840207,
            "ambiguous_qty_pct": 0.25193676387226804,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.25193676387226804,
            "retail_notional_pct": 0.07887987234919515,
            "mixed_notional_pct": 0.28857937468245437,
            "instit_notional_pct": 0.37952445178101035,
            "ambiguous_notional_pct": 0.2530163011873402,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2530163011873402,
            "run_retail_pct": 0.5714285714285714,
            "run_mixed_pct": 0.21428571428571427,
            "run_instit_pct": 0.07142857142857142,
            "run_unclear_pct": 0.14285714285714285,
            "avg_trade_size": 2333.747619047619,
            "avg_run_notional": 3500.621428571428,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.6428571428571429,
            "na_confidence_pct": 0.35714285714285715,
            "avg_feature_coverage": 0.8499999999999999,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "5JS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.125,
            "mixed_pct": 0.0,
            "instit_pct": 0.375,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.5,
            "unclear_pct": 0.5,
            "retail_qty_pct": 0.005859375,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.1953125,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.798828125,
            "unclear_qty_pct": 0.798828125,
            "retail_notional_pct": 0.00592079969242599,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.197359989747533,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.796719210560041,
            "unclear_notional_pct": 0.796719210560041,
            "run_retail_pct": 0.25,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.25,
            "run_unclear_pct": 0.5,
            "avg_trade_size": 2438.4375,
            "avg_run_notional": 4876.875,
            "dominant_bucket": "UNOBSERVABLE",
            "dominant_label": "Not Observable",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5,
            "na_confidence_pct": 0.5,
            "avg_feature_coverage": 0.7,
            "observable_run_pct": 0.5,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "D03",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.20833333333333334,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.16666666666666666,
            "unobservable_pct": 0.625,
            "unclear_pct": 0.7916666666666666,
            "retail_qty_pct": 0.0994,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 0.244,
            "unobservable_qty_pct": 0.6566,
            "unclear_qty_pct": 0.9006,
            "retail_notional_pct": 0.10007465922756759,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 0.2377471689846792,
            "unobservable_notional_pct": 0.6621781717877532,
            "unclear_notional_pct": 0.8999253407724324,
            "run_retail_pct": 0.5555555555555556,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.0,
            "run_unclear_pct": 0.4444444444444444,
            "avg_trade_size": 1864.0249999999999,
            "avg_run_notional": 4970.733333333334,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5555555555555556,
            "na_confidence_pct": 0.4444444444444444,
            "avg_feature_coverage": 0.7611111111111111,
            "observable_run_pct": 0.7777777777777778,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "MV4",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.0,
            "mixed_pct": 1.0,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 1.0,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 1.0,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 1.0,
            "run_instit_pct": 0.0,
            "run_unclear_pct": 0.0,
            "avg_trade_size": 580.0,
            "avg_run_notional": 580.0,
            "dominant_bucket": "MIXED",
            "dominant_label": "Mixed",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.0,
            "na_confidence_pct": 1.0,
            "avg_feature_coverage": 0.8500000000000001,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ],
        "1w": [
          {
            "ticker": "LGH",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.1875,
            "mixed_pct": 0.125,
            "instit_pct": 0.15625,
            "ambiguous_pct": 0.53125,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.53125,
            "retail_qty_pct": 0.02019446522064323,
            "mixed_qty_pct": 0.06581899775617053,
            "instit_qty_pct": 0.3851907255048616,
            "ambiguous_qty_pct": 0.5287958115183246,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.5287958115183246,
            "retail_notional_pct": 0.02039843289657747,
            "mixed_notional_pct": 0.06968302589498968,
            "instit_notional_pct": 0.3827348743483522,
            "ambiguous_notional_pct": 0.5271836668600807,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.5271836668600807,
            "run_retail_pct": 0.2222222222222222,
            "run_mixed_pct": 0.14814814814814814,
            "run_instit_pct": 0.14814814814814814,
            "run_unclear_pct": 0.48148148148148145,
            "avg_trade_size": 3473.765625,
            "avg_run_notional": 4117.055555555556,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.37037037037037035,
            "na_confidence_pct": 0.6296296296296297,
            "avg_feature_coverage": 0.8166666666666669,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "BQD",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.18181818181818182,
            "mixed_pct": 0.0,
            "instit_pct": 0.7272727272727273,
            "ambiguous_pct": 0.09090909090909091,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.09090909090909091,
            "retail_qty_pct": 0.018218623481781375,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.9635627530364372,
            "ambiguous_qty_pct": 0.018218623481781375,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.018218623481781375,
            "retail_notional_pct": 0.018033478688985794,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.9637361091574062,
            "ambiguous_notional_pct": 0.018230412153608103,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.018230412153608103,
            "run_retail_pct": 0.2857142857142857,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.5714285714285714,
            "run_unclear_pct": 0.14285714285714285,
            "avg_trade_size": 1615.6818181818182,
            "avg_run_notional": 2538.9285714285716,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Institution-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.8571428571428571,
            "na_confidence_pct": 0.14285714285714285,
            "avg_feature_coverage": 0.8500000000000002,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "MV4",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.13333333333333333,
            "mixed_pct": 0.1,
            "instit_pct": 0.5,
            "ambiguous_pct": 0.26666666666666666,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.26666666666666666,
            "retail_qty_pct": 0.0046439628482972135,
            "mixed_qty_pct": 0.022703818369453045,
            "instit_qty_pct": 0.9226006191950464,
            "ambiguous_qty_pct": 0.0500515995872033,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0500515995872033,
            "retail_notional_pct": 0.0045244153430653135,
            "mixed_notional_pct": 0.022161819492327598,
            "instit_notional_pct": 0.9246914973991125,
            "ambiguous_notional_pct": 0.0486222677654946,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0486222677654946,
            "run_retail_pct": 0.16666666666666666,
            "run_mixed_pct": 0.1111111111111111,
            "run_instit_pct": 0.3888888888888889,
            "run_unclear_pct": 0.3333333333333333,
            "avg_trade_size": 1919.2166666666667,
            "avg_run_notional": 3198.6944444444443,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed, leaning institution-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5555555555555556,
            "na_confidence_pct": 0.4444444444444444,
            "avg_feature_coverage": 0.8416666666666667,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "OTS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.5,
            "ambiguous_pct": 0.5,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.5,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.826271186440678,
            "ambiguous_qty_pct": 0.17372881355932204,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.17372881355932204,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.8263091153214979,
            "ambiguous_notional_pct": 0.17369088467850216,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.17369088467850216,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.5,
            "run_unclear_pct": 0.5,
            "avg_trade_size": 6703.0,
            "avg_run_notional": 6703.0,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed, leaning institution-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5,
            "na_confidence_pct": 0.5,
            "avg_feature_coverage": 0.8125000000000001,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "42W",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.31690140845070425,
            "mixed_pct": 0.07746478873239436,
            "instit_pct": 0.29577464788732394,
            "ambiguous_pct": 0.30985915492957744,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.30985915492957744,
            "retail_qty_pct": 0.11180608219521189,
            "mixed_qty_pct": 0.11590401513939233,
            "instit_qty_pct": 0.48530936262879965,
            "ambiguous_qty_pct": 0.2869805400365961,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2869805400365961,
            "retail_notional_pct": 0.11200620797590945,
            "mixed_notional_pct": 0.11501844340463346,
            "instit_notional_pct": 0.4885175154425236,
            "ambiguous_notional_pct": 0.2844578331769335,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2844578331769335,
            "run_retail_pct": 0.5342465753424658,
            "run_mixed_pct": 0.0821917808219178,
            "run_instit_pct": 0.0958904109589041,
            "run_unclear_pct": 0.2876712328767123,
            "avg_trade_size": 3070.107746478873,
            "avg_run_notional": 5971.990410958904,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.6301369863013698,
            "na_confidence_pct": 0.3698630136986301,
            "avg_feature_coverage": 0.817123287671233,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "Q01",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.23123123123123124,
            "mixed_pct": 0.08408408408408409,
            "instit_pct": 0.26126126126126126,
            "ambiguous_pct": 0.36936936936936937,
            "unobservable_pct": 0.05405405405405406,
            "unclear_pct": 0.42342342342342343,
            "retail_qty_pct": 0.06777762218176726,
            "mixed_qty_pct": 0.08416188208934323,
            "instit_qty_pct": 0.4212295196751155,
            "ambiguous_qty_pct": 0.29603696961209913,
            "unobservable_qty_pct": 0.13079400644167483,
            "unclear_qty_pct": 0.42683097605377396,
            "retail_notional_pct": 0.067732861387492,
            "mixed_notional_pct": 0.08487039475104137,
            "instit_notional_pct": 0.4237174368160922,
            "ambiguous_notional_pct": 0.2958424161324902,
            "unobservable_notional_pct": 0.12783689091288428,
            "unclear_notional_pct": 0.4236793070453745,
            "run_retail_pct": 0.4589041095890411,
            "run_mixed_pct": 0.08904109589041095,
            "run_instit_pct": 0.13013698630136986,
            "run_unclear_pct": 0.32191780821917804,
            "avg_trade_size": 2087.072072072072,
            "avg_run_notional": 4760.239726027397,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0136986301369863,
            "medium_confidence_pct": 0.3561643835616438,
            "low_confidence_pct": 0.2191780821917808,
            "na_confidence_pct": 0.410958904109589,
            "avg_feature_coverage": 0.8386986301369862,
            "observable_run_pct": 0.9794520547945206,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "D03",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.1984732824427481,
            "mixed_pct": 0.06870229007633588,
            "instit_pct": 0.183206106870229,
            "ambiguous_pct": 0.4122137404580153,
            "unobservable_pct": 0.13740458015267176,
            "unclear_pct": 0.549618320610687,
            "retail_qty_pct": 0.04811948771668976,
            "mixed_qty_pct": 0.04386172405636468,
            "instit_qty_pct": 0.2814854864326023,
            "ambiguous_qty_pct": 0.49062278241476026,
            "unobservable_qty_pct": 0.135910519379583,
            "unclear_qty_pct": 0.6265333017943433,
            "retail_notional_pct": 0.0474784045052728,
            "mixed_notional_pct": 0.04502688528907925,
            "instit_notional_pct": 0.2839390267344808,
            "ambiguous_notional_pct": 0.4933214244370975,
            "unobservable_notional_pct": 0.13023425903406957,
            "unclear_notional_pct": 0.6235556834711671,
            "run_retail_pct": 0.38235294117647056,
            "run_mixed_pct": 0.08823529411764706,
            "run_instit_pct": 0.10294117647058823,
            "run_unclear_pct": 0.4264705882352941,
            "avg_trade_size": 2156.3198473282446,
            "avg_run_notional": 4154.086764705883,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.07352941176470588,
            "medium_confidence_pct": 0.14705882352941177,
            "low_confidence_pct": 0.2647058823529412,
            "na_confidence_pct": 0.5147058823529411,
            "avg_feature_coverage": 0.8132352941176473,
            "observable_run_pct": 0.9558823529411765,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "Y03",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.29411764705882354,
            "mixed_pct": 0.058823529411764705,
            "instit_pct": 0.17647058823529413,
            "ambiguous_pct": 0.47058823529411764,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.47058823529411764,
            "retail_qty_pct": 0.025039123630672927,
            "mixed_qty_pct": 0.012519561815336464,
            "instit_qty_pct": 0.23630672926447574,
            "ambiguous_qty_pct": 0.7261345852895149,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.7261345852895149,
            "retail_notional_pct": 0.025043020284716066,
            "mixed_notional_pct": 0.012514991917401054,
            "instit_notional_pct": 0.23622047244094488,
            "ambiguous_notional_pct": 0.726221515356938,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.726221515356938,
            "run_retail_pct": 0.38461538461538464,
            "run_mixed_pct": 0.07692307692307693,
            "run_instit_pct": 0.15384615384615385,
            "run_unclear_pct": 0.38461538461538464,
            "avg_trade_size": 2256.1176470588234,
            "avg_run_notional": 2950.3076923076924,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5384615384615384,
            "na_confidence_pct": 0.46153846153846156,
            "avg_feature_coverage": 0.8384615384615384,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "5JS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.1864406779661017,
            "mixed_pct": 0.1016949152542373,
            "instit_pct": 0.22033898305084745,
            "ambiguous_pct": 0.4067796610169492,
            "unobservable_pct": 0.0847457627118644,
            "unclear_pct": 0.4915254237288136,
            "retail_qty_pct": 0.04886049723756906,
            "mixed_qty_pct": 0.031077348066298343,
            "instit_qty_pct": 0.22772790055248618,
            "ambiguous_qty_pct": 0.587189226519337,
            "unobservable_qty_pct": 0.1051450276243094,
            "unclear_qty_pct": 0.6923342541436465,
            "retail_notional_pct": 0.0492979100312572,
            "mixed_notional_pct": 0.030972210506156825,
            "instit_notional_pct": 0.2276166787120485,
            "ambiguous_notional_pct": 0.5861351195456649,
            "unobservable_notional_pct": 0.10597808120487257,
            "unclear_notional_pct": 0.6921132007505375,
            "run_retail_pct": 0.3055555555555556,
            "run_mixed_pct": 0.08333333333333333,
            "run_instit_pct": 0.1388888888888889,
            "run_unclear_pct": 0.4722222222222222,
            "avg_trade_size": 3717.1101694915255,
            "avg_run_notional": 6091.930555555556,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Mixed, mostly unclassified",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.4444444444444444,
            "na_confidence_pct": 0.5555555555555556,
            "avg_feature_coverage": 0.7958333333333335,
            "observable_run_pct": 0.9166666666666666,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ],
        "30d": [
          {
            "ticker": "LGH",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.2127659574468085,
            "mixed_pct": 0.13829787234042554,
            "instit_pct": 0.23404255319148937,
            "ambiguous_pct": 0.4148936170212766,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.4148936170212766,
            "retail_qty_pct": 0.03695450324976787,
            "mixed_qty_pct": 0.04726090993500464,
            "instit_qty_pct": 0.4624883936861653,
            "ambiguous_qty_pct": 0.4532961931290622,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.4532961931290622,
            "retail_notional_pct": 0.03746781097490434,
            "mixed_notional_pct": 0.04856954329075741,
            "instit_notional_pct": 0.46644200405335345,
            "ambiguous_notional_pct": 0.4475206416809848,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.4475206416809848,
            "run_retail_pct": 0.24358974358974358,
            "run_mixed_pct": 0.16666666666666666,
            "run_instit_pct": 0.1794871794871795,
            "run_unclear_pct": 0.41025641025641024,
            "avg_trade_size": 2482.840425531915,
            "avg_run_notional": 2992.141025641026,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.4230769230769231,
            "na_confidence_pct": 0.5769230769230769,
            "avg_feature_coverage": 0.8211538461538463,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "OTS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.09090909090909091,
            "mixed_pct": 0.030303030303030304,
            "instit_pct": 0.45454545454545453,
            "ambiguous_pct": 0.3333333333333333,
            "unobservable_pct": 0.09090909090909091,
            "unclear_pct": 0.4242424242424242,
            "retail_qty_pct": 0.036607687614399025,
            "mixed_qty_pct": 0.002033760423022168,
            "instit_qty_pct": 0.7319503762456783,
            "ambiguous_qty_pct": 0.212934716290421,
            "unobservable_qty_pct": 0.01647345942647956,
            "unclear_qty_pct": 0.22940817571690056,
            "retail_notional_pct": 0.038048607121476404,
            "mixed_notional_pct": 0.0020875494067736666,
            "instit_notional_pct": 0.7260220797167833,
            "ambiguous_notional_pct": 0.2170309526643859,
            "unobservable_notional_pct": 0.016810811090580666,
            "unclear_notional_pct": 0.23384176375496657,
            "run_retail_pct": 0.11538461538461539,
            "run_mixed_pct": 0.038461538461538464,
            "run_instit_pct": 0.34615384615384615,
            "run_unclear_pct": 0.5,
            "avg_trade_size": 1756.4454545454546,
            "avg_run_notional": 2229.334615384615,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Mixed, mostly unclassified",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.46153846153846156,
            "na_confidence_pct": 0.5384615384615384,
            "avg_feature_coverage": 0.7750000000000002,
            "observable_run_pct": 0.8846153846153846,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "BQD",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.1794871794871795,
            "mixed_pct": 0.10256410256410256,
            "instit_pct": 0.48717948717948717,
            "ambiguous_pct": 0.23076923076923078,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.23076923076923078,
            "retail_qty_pct": 0.059468681452595665,
            "mixed_qty_pct": 0.14574701437972215,
            "instit_qty_pct": 0.6485498415793322,
            "ambiguous_qty_pct": 0.14623446258835,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.14623446258835,
            "retail_notional_pct": 0.06010939791509771,
            "mixed_notional_pct": 0.14814961618243555,
            "instit_notional_pct": 0.6472214515042213,
            "ambiguous_notional_pct": 0.14451953439824541,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.14451953439824541,
            "run_retail_pct": 0.28,
            "run_mixed_pct": 0.16,
            "run_instit_pct": 0.32,
            "run_unclear_pct": 0.24,
            "avg_trade_size": 3881.3846153846152,
            "avg_run_notional": 6054.96,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed, leaning institution-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.6,
            "na_confidence_pct": 0.4,
            "avg_feature_coverage": 0.8440000000000002,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "MV4",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.20300751879699247,
            "mixed_pct": 0.09022556390977443,
            "instit_pct": 0.42857142857142855,
            "ambiguous_pct": 0.2781954887218045,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.2781954887218045,
            "retail_qty_pct": 0.047619047619047616,
            "mixed_qty_pct": 0.02925901543413064,
            "instit_qty_pct": 0.6331650939945871,
            "ambiguous_qty_pct": 0.2899568429522347,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2899568429522347,
            "retail_notional_pct": 0.04768557447678876,
            "mixed_notional_pct": 0.030172037428875927,
            "instit_notional_pct": 0.6303461919838668,
            "ambiguous_notional_pct": 0.29179619611046853,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.29179619611046853,
            "run_retail_pct": 0.30952380952380953,
            "run_mixed_pct": 0.10714285714285714,
            "run_instit_pct": 0.2857142857142857,
            "run_unclear_pct": 0.2976190476190476,
            "avg_trade_size": 3143.003759398496,
            "avg_run_notional": 4976.422619047619,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5952380952380952,
            "na_confidence_pct": 0.40476190476190477,
            "avg_feature_coverage": 0.8285714285714283,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "5JS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.302158273381295,
            "mixed_pct": 0.16786570743405277,
            "instit_pct": 0.2853717026378897,
            "ambiguous_pct": 0.20863309352517986,
            "unobservable_pct": 0.03597122302158273,
            "unclear_pct": 0.2446043165467626,
            "retail_qty_pct": 0.05172338282310691,
            "mixed_qty_pct": 0.06954846056146805,
            "instit_qty_pct": 0.4412473174790873,
            "ambiguous_qty_pct": 0.38873560197959095,
            "unobservable_qty_pct": 0.048745237156746814,
            "unclear_qty_pct": 0.4374808391363378,
            "retail_notional_pct": 0.052546165584764076,
            "mixed_notional_pct": 0.07001955358101203,
            "instit_notional_pct": 0.4413596738892026,
            "ambiguous_notional_pct": 0.38801316483342124,
            "unobservable_notional_pct": 0.04806144211160008,
            "unclear_notional_pct": 0.4360746069450213,
            "run_retail_pct": 0.49166666666666664,
            "run_mixed_pct": 0.14166666666666666,
            "run_instit_pct": 0.1375,
            "run_unclear_pct": 0.22916666666666669,
            "avg_trade_size": 2055.4724220623502,
            "avg_run_notional": 3571.383333333333,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.6291666666666667,
            "na_confidence_pct": 0.37083333333333335,
            "avg_feature_coverage": 0.8404166666666665,
            "observable_run_pct": 0.9791666666666666,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "Q01",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.23010752688172043,
            "mixed_pct": 0.13440860215053763,
            "instit_pct": 0.2860215053763441,
            "ambiguous_pct": 0.3161290322580645,
            "unobservable_pct": 0.03333333333333333,
            "unclear_pct": 0.3494623655913978,
            "retail_qty_pct": 0.0843652149160262,
            "mixed_qty_pct": 0.1514730999146029,
            "instit_qty_pct": 0.411400512382579,
            "ambiguous_qty_pct": 0.28721890122402505,
            "unobservable_qty_pct": 0.06554227156276686,
            "unclear_qty_pct": 0.3527611727867919,
            "retail_notional_pct": 0.08464935668433154,
            "mixed_notional_pct": 0.15237799346758407,
            "instit_notional_pct": 0.41139496190314256,
            "ambiguous_notional_pct": 0.2872719374070279,
            "unobservable_notional_pct": 0.06430575053791392,
            "unclear_notional_pct": 0.3515776879449418,
            "run_retail_pct": 0.44761904761904764,
            "run_mixed_pct": 0.14047619047619048,
            "run_instit_pct": 0.14047619047619048,
            "run_unclear_pct": 0.27142857142857146,
            "avg_trade_size": 3019.680107526882,
            "avg_run_notional": 6686.434523809524,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.004761904761904762,
            "medium_confidence_pct": 0.15476190476190477,
            "low_confidence_pct": 0.42857142857142855,
            "na_confidence_pct": 0.4119047619047619,
            "avg_feature_coverage": 0.8445238095238093,
            "observable_run_pct": 0.9904761904761905,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "D03",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.26098191214470284,
            "mixed_pct": 0.06718346253229975,
            "instit_pct": 0.24289405684754523,
            "ambiguous_pct": 0.35917312661498707,
            "unobservable_pct": 0.06976744186046512,
            "unclear_pct": 0.4289405684754522,
            "retail_qty_pct": 0.06379454136248872,
            "mixed_qty_pct": 0.053489620820052326,
            "instit_qty_pct": 0.3448606779312472,
            "ambiguous_qty_pct": 0.4251522317807405,
            "unobservable_qty_pct": 0.11270292810547121,
            "unclear_qty_pct": 0.5378551598862117,
            "retail_notional_pct": 0.06340088948390937,
            "mixed_notional_pct": 0.05353065588074318,
            "instit_notional_pct": 0.34619914579684175,
            "ambiguous_notional_pct": 0.4284433317101396,
            "unobservable_notional_pct": 0.10842597712836613,
            "unclear_notional_pct": 0.5368693088385057,
            "run_retail_pct": 0.4025423728813559,
            "run_mixed_pct": 0.07627118644067797,
            "run_instit_pct": 0.11864406779661017,
            "run_unclear_pct": 0.4025423728813559,
            "avg_trade_size": 2097.6074935400516,
            "avg_run_notional": 3439.720762711864,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0211864406779661,
            "medium_confidence_pct": 0.0423728813559322,
            "low_confidence_pct": 0.4576271186440678,
            "na_confidence_pct": 0.4788135593220339,
            "avg_feature_coverage": 0.8203389830508472,
            "observable_run_pct": 0.9745762711864406,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "42W",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2757078986587183,
            "mixed_pct": 0.16840536512667661,
            "instit_pct": 0.26229508196721313,
            "ambiguous_pct": 0.293591654247392,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.293591654247392,
            "retail_qty_pct": 0.09218991077033187,
            "mixed_qty_pct": 0.23488228840952957,
            "instit_qty_pct": 0.3421831642799735,
            "ambiguous_qty_pct": 0.33074463654016506,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.33074463654016506,
            "retail_notional_pct": 0.09283992237461786,
            "mixed_notional_pct": 0.2382915902921234,
            "instit_notional_pct": 0.3435716555789776,
            "ambiguous_notional_pct": 0.3252968317542812,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.3252968317542812,
            "run_retail_pct": 0.5184049079754601,
            "run_mixed_pct": 0.16257668711656442,
            "run_instit_pct": 0.0950920245398773,
            "run_unclear_pct": 0.22392638036809817,
            "avg_trade_size": 3954.028017883755,
            "avg_run_notional": 8138.5055214723925,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.006134969325153374,
            "medium_confidence_pct": 0.03067484662576687,
            "low_confidence_pct": 0.5766871165644172,
            "na_confidence_pct": 0.38650306748466257,
            "avg_feature_coverage": 0.8421779141104293,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "Y03",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.20224719101123595,
            "mixed_pct": 0.14606741573033707,
            "instit_pct": 0.24719101123595505,
            "ambiguous_pct": 0.29213483146067415,
            "unobservable_pct": 0.11235955056179775,
            "unclear_pct": 0.4044943820224719,
            "retail_qty_pct": 0.03119496855345912,
            "mixed_qty_pct": 0.06918238993710692,
            "instit_qty_pct": 0.3031446540880503,
            "ambiguous_qty_pct": 0.5408805031446541,
            "unobservable_qty_pct": 0.05559748427672956,
            "unclear_qty_pct": 0.5964779874213837,
            "retail_notional_pct": 0.031403611332965556,
            "mixed_notional_pct": 0.06923574116310281,
            "instit_notional_pct": 0.30229475261628147,
            "ambiguous_notional_pct": 0.54065013873908,
            "unobservable_notional_pct": 0.0564157561485702,
            "unclear_notional_pct": 0.5970658948876502,
            "run_retail_pct": 0.2857142857142857,
            "run_mixed_pct": 0.15873015873015872,
            "run_instit_pct": 0.19047619047619047,
            "run_unclear_pct": 0.36507936507936506,
            "avg_trade_size": 2729.2359550561796,
            "avg_run_notional": 3855.5873015873017,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Mixed, mostly unclassified",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.47619047619047616,
            "na_confidence_pct": 0.5238095238095238,
            "avg_feature_coverage": 0.8341269841269843,
            "observable_run_pct": 0.9841269841269842,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ],
        "3m": [
          {
            "ticker": "LGH",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.23502824858757063,
            "mixed_pct": 0.11299435028248588,
            "instit_pct": 0.24745762711864408,
            "ambiguous_pct": 0.4033898305084746,
            "unobservable_pct": 0.0011299435028248588,
            "unclear_pct": 0.40451977401129946,
            "retail_qty_pct": 0.07537352434825381,
            "mixed_qty_pct": 0.08820862026561731,
            "instit_qty_pct": 0.36356369896704377,
            "ambiguous_qty_pct": 0.4722008730939498,
            "unobservable_qty_pct": 0.000653283325135268,
            "unclear_qty_pct": 0.47285415641908507,
            "retail_notional_pct": 0.07553936751601005,
            "mixed_notional_pct": 0.08706758287981586,
            "instit_notional_pct": 0.36397933508353647,
            "ambiguous_notional_pct": 0.4727800695090338,
            "unobservable_notional_pct": 0.0006336450116038721,
            "unclear_notional_pct": 0.47341371452063763,
            "run_retail_pct": 0.34285714285714286,
            "run_mixed_pct": 0.11964285714285715,
            "run_instit_pct": 0.14107142857142857,
            "run_unclear_pct": 0.3964285714285714,
            "avg_trade_size": 3562.0293785310732,
            "avg_run_notional": 5629.278571428571,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Mixed, mostly unclassified",
            "high_confidence_pct": 0.01607142857142857,
            "medium_confidence_pct": 0.11964285714285715,
            "low_confidence_pct": 0.3482142857142857,
            "na_confidence_pct": 0.5160714285714286,
            "avg_feature_coverage": 0.8250892857142857,
            "observable_run_pct": 0.9982142857142857,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "OTS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.09722222222222222,
            "mixed_pct": 0.06944444444444445,
            "instit_pct": 0.4722222222222222,
            "ambiguous_pct": 0.3194444444444444,
            "unobservable_pct": 0.041666666666666664,
            "unclear_pct": 0.3611111111111111,
            "retail_qty_pct": 0.03080857282026303,
            "mixed_qty_pct": 0.0456648806624452,
            "instit_qty_pct": 0.6678032148075986,
            "ambiguous_qty_pct": 0.24585971748660496,
            "unobservable_qty_pct": 0.009863614223088164,
            "unclear_qty_pct": 0.25572333170969314,
            "retail_notional_pct": 0.03197710317373839,
            "mixed_notional_pct": 0.044816095854516326,
            "instit_notional_pct": 0.6650477830114765,
            "ambiguous_notional_pct": 0.2480472215909268,
            "unobservable_notional_pct": 0.010111796369342079,
            "unclear_notional_pct": 0.25815901796026886,
            "run_retail_pct": 0.11666666666666667,
            "run_mixed_pct": 0.08333333333333333,
            "run_instit_pct": 0.4,
            "run_unclear_pct": 0.39999999999999997,
            "avg_trade_size": 1338.3708333333334,
            "avg_run_notional": 1606.0449999999998,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed, leaning institution-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5166666666666667,
            "na_confidence_pct": 0.48333333333333334,
            "avg_feature_coverage": 0.7975000000000002,
            "observable_run_pct": 0.95,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "MV4",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.21987951807228914,
            "mixed_pct": 0.10542168674698796,
            "instit_pct": 0.3614457831325301,
            "ambiguous_pct": 0.2921686746987952,
            "unobservable_pct": 0.02108433734939759,
            "unclear_pct": 0.3132530120481928,
            "retail_qty_pct": 0.03875447235112827,
            "mixed_qty_pct": 0.09458358425732404,
            "instit_qty_pct": 0.5629317368663431,
            "ambiguous_qty_pct": 0.26865988876687097,
            "unobservable_qty_pct": 0.03507031775833363,
            "unclear_qty_pct": 0.3037302065252046,
            "retail_notional_pct": 0.038444700467371175,
            "mixed_notional_pct": 0.09628663918047932,
            "instit_notional_pct": 0.5635442531969586,
            "ambiguous_notional_pct": 0.2672737400539541,
            "unobservable_notional_pct": 0.03445066710123688,
            "unclear_notional_pct": 0.301724407155191,
            "run_retail_pct": 0.32242990654205606,
            "run_mixed_pct": 0.1261682242990654,
            "run_instit_pct": 0.2383177570093458,
            "run_unclear_pct": 0.3130841121495327,
            "avg_trade_size": 2652.2996987951806,
            "avg_run_notional": 4114.782710280374,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5607476635514018,
            "na_confidence_pct": 0.4392523364485981,
            "avg_feature_coverage": 0.8320093457943923,
            "observable_run_pct": 0.9953271028037384,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "Y03",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2168284789644013,
            "mixed_pct": 0.1779935275080906,
            "instit_pct": 0.2977346278317152,
            "ambiguous_pct": 0.2686084142394822,
            "unobservable_pct": 0.038834951456310676,
            "unclear_pct": 0.30744336569579284,
            "retail_qty_pct": 0.03525046382189239,
            "mixed_qty_pct": 0.08233638282899367,
            "instit_qty_pct": 0.5509564327298317,
            "ambiguous_qty_pct": 0.31635851832896167,
            "unobservable_qty_pct": 0.015098202290320517,
            "unclear_qty_pct": 0.33145672061928216,
            "retail_notional_pct": 0.03519994951301092,
            "mixed_notional_pct": 0.08221175084670888,
            "instit_notional_pct": 0.5507304836232829,
            "ambiguous_notional_pct": 0.31648768327828847,
            "unobservable_notional_pct": 0.015370132738708795,
            "unclear_notional_pct": 0.33185781601699726,
            "run_retail_pct": 0.3130841121495327,
            "run_mixed_pct": 0.1822429906542056,
            "run_instit_pct": 0.18691588785046728,
            "run_unclear_pct": 0.3177570093457944,
            "avg_trade_size": 3076.8284789644013,
            "avg_run_notional": 4442.710280373832,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5,
            "na_confidence_pct": 0.5,
            "avg_feature_coverage": 0.834345794392523,
            "observable_run_pct": 0.9906542056074766,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "5JS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.28982725527831094,
            "mixed_pct": 0.1420345489443378,
            "instit_pct": 0.2648752399232246,
            "ambiguous_pct": 0.28502879078694815,
            "unobservable_pct": 0.018234165067178502,
            "unclear_pct": 0.30326295585412666,
            "retail_qty_pct": 0.05841644314695989,
            "mixed_qty_pct": 0.08855826084379306,
            "instit_qty_pct": 0.4057882959647901,
            "ambiguous_qty_pct": 0.42840206873045744,
            "unobservable_qty_pct": 0.018834931313999496,
            "unclear_qty_pct": 0.44723700004445693,
            "retail_notional_pct": 0.05899103484884041,
            "mixed_notional_pct": 0.08834882166389402,
            "instit_notional_pct": 0.407088187411055,
            "ambiguous_notional_pct": 0.42729022323377164,
            "unobservable_notional_pct": 0.018281732842438888,
            "unclear_notional_pct": 0.44557195607621053,
            "run_retail_pct": 0.4479495268138801,
            "run_mixed_pct": 0.14195583596214512,
            "run_instit_pct": 0.13249211356466878,
            "run_unclear_pct": 0.277602523659306,
            "avg_trade_size": 2482.313819577735,
            "avg_run_notional": 4079.7649842271294,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0015772870662460567,
            "medium_confidence_pct": 0.04100946372239748,
            "low_confidence_pct": 0.5378548895899053,
            "na_confidence_pct": 0.4195583596214511,
            "avg_feature_coverage": 0.8339116719242903,
            "observable_run_pct": 0.9905362776025236,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "Q01",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2505091649694501,
            "mixed_pct": 0.17270875763747454,
            "instit_pct": 0.2480651731160896,
            "ambiguous_pct": 0.29857433808553974,
            "unobservable_pct": 0.03014256619144603,
            "unclear_pct": 0.32871690427698574,
            "retail_qty_pct": 0.10111740183975103,
            "mixed_qty_pct": 0.17203165014871896,
            "instit_qty_pct": 0.359371590661139,
            "ambiguous_qty_pct": 0.3166278121662437,
            "unobservable_qty_pct": 0.05085154518414736,
            "unclear_qty_pct": 0.36747935735039106,
            "retail_notional_pct": 0.10107962642275788,
            "mixed_notional_pct": 0.1723141703969128,
            "instit_notional_pct": 0.36135905076170305,
            "ambiguous_notional_pct": 0.3162463781990891,
            "unobservable_notional_pct": 0.04900077421953719,
            "unclear_notional_pct": 0.36524715241862626,
            "run_retail_pct": 0.46953405017921146,
            "run_mixed_pct": 0.17204301075268819,
            "run_instit_pct": 0.11827956989247312,
            "run_unclear_pct": 0.24014336917562723,
            "avg_trade_size": 3401.6254582484726,
            "avg_run_notional": 7482.966397849463,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.025985663082437275,
            "medium_confidence_pct": 0.12634408602150538,
            "low_confidence_pct": 0.43548387096774194,
            "na_confidence_pct": 0.4121863799283154,
            "avg_feature_coverage": 0.8487455197132617,
            "observable_run_pct": 0.9937275985663082,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "D03",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.283476898981989,
            "mixed_pct": 0.06891151135473766,
            "instit_pct": 0.24353954581049334,
            "ambiguous_pct": 0.3711824588880188,
            "unobservable_pct": 0.03288958496476116,
            "unclear_pct": 0.40407204385277995,
            "retail_qty_pct": 0.06072073144126455,
            "mixed_qty_pct": 0.04237916741040439,
            "instit_qty_pct": 0.3448920092818468,
            "ambiguous_qty_pct": 0.5031911306796771,
            "unobservable_qty_pct": 0.04881696118680708,
            "unclear_qty_pct": 0.5520080918664843,
            "retail_notional_pct": 0.06126057325136253,
            "mixed_notional_pct": 0.04264160430931013,
            "instit_notional_pct": 0.34193459477921995,
            "ambiguous_notional_pct": 0.5072428796399701,
            "unobservable_notional_pct": 0.04692034802013731,
            "unclear_notional_pct": 0.5541632276601074,
            "run_retail_pct": 0.44358974358974357,
            "run_mixed_pct": 0.07564102564102564,
            "run_instit_pct": 0.10256410256410256,
            "run_unclear_pct": 0.3782051282051282,
            "avg_trade_size": 1834.8428347689896,
            "avg_run_notional": 3003.9670512820517,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.1064102564102564,
            "medium_confidence_pct": 0.05128205128205128,
            "low_confidence_pct": 0.38846153846153847,
            "na_confidence_pct": 0.45384615384615384,
            "avg_feature_coverage": 0.8273717948717946,
            "observable_run_pct": 0.9884615384615385,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "42W",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.4346394468225222,
            "mixed_pct": 0.18999012183075403,
            "instit_pct": 0.18109976950938425,
            "ambiguous_pct": 0.1942706618373395,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1942706618373395,
            "retail_qty_pct": 0.09215647054943106,
            "mixed_qty_pct": 0.2803275846051939,
            "instit_qty_pct": 0.3200809883458969,
            "ambiguous_qty_pct": 0.30743495649947816,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.30743495649947816,
            "retail_notional_pct": 0.09174453783510465,
            "mixed_notional_pct": 0.28315299711740854,
            "instit_notional_pct": 0.31960056730923325,
            "ambiguous_notional_pct": 0.3055018977382535,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.3055018977382535,
            "run_retail_pct": 0.673773987206823,
            "run_mixed_pct": 0.1497867803837953,
            "run_instit_pct": 0.04957356076759062,
            "run_unclear_pct": 0.12686567164179105,
            "avg_trade_size": 3678.5032597958507,
            "avg_run_notional": 5955.018336886994,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.2515991471215352,
            "medium_confidence_pct": 0.17857142857142858,
            "low_confidence_pct": 0.2931769722814499,
            "na_confidence_pct": 0.27665245202558636,
            "avg_feature_coverage": 0.8476812366737737,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "BQD",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.16019417475728157,
            "mixed_pct": 0.1262135922330097,
            "instit_pct": 0.4320388349514563,
            "ambiguous_pct": 0.27184466019417475,
            "unobservable_pct": 0.009708737864077669,
            "unclear_pct": 0.2815533980582524,
            "retail_qty_pct": 0.007701538340480781,
            "mixed_qty_pct": 0.027402919305976315,
            "instit_qty_pct": 0.15922414132273674,
            "ambiguous_qty_pct": 0.05755006491718141,
            "unobservable_qty_pct": 0.7481213361136247,
            "unclear_qty_pct": 0.8056714010308061,
            "retail_notional_pct": 0.007476417829330432,
            "mixed_notional_pct": 0.026572588491930574,
            "instit_notional_pct": 0.1529095916836672,
            "ambiguous_notional_pct": 0.05594335899297798,
            "unobservable_notional_pct": 0.7570980430020938,
            "unclear_notional_pct": 0.8130414019950718,
            "run_retail_pct": 0.2558139534883721,
            "run_mixed_pct": 0.16279069767441862,
            "run_instit_pct": 0.29457364341085274,
            "run_unclear_pct": 0.28682170542635654,
            "avg_trade_size": 19507.29126213592,
            "avg_run_notional": 31151.178294573645,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed, leaning institution-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5503875968992248,
            "na_confidence_pct": 0.4496124031007752,
            "avg_feature_coverage": 0.827906976744186,
            "observable_run_pct": 0.9844961240310077,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ]
      },
      "recent_trades": [
        {
          "trade_id": "BMLL-1",
          "timestamp": "2026-03-13T07:03:08.239300",
          "price": 0.23,
          "size": 200.0,
          "notional": 46.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 559,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-1",
          "timestamp": "2026-03-12T01:40:31.414900",
          "price": 0.225,
          "size": 500.0,
          "notional": 112.5,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 558,
          "d1": "SINGLE_FILL",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-6",
          "timestamp": "2026-03-11T08:35:05.382000",
          "price": 0.22,
          "size": 5000.0,
          "notional": 1100.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 557,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-5",
          "timestamp": "2026-03-11T08:34:31.185000",
          "price": 0.22,
          "size": 10000.0,
          "notional": 2200.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 556,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-4",
          "timestamp": "2026-03-11T08:34:03.641600",
          "price": 0.22,
          "size": 20000.0,
          "notional": 4400.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 555,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-3",
          "timestamp": "2026-03-11T06:45:55.766700",
          "price": 0.22,
          "size": 10000.0,
          "notional": 2200.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 554,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-2",
          "timestamp": "2026-03-11T06:27:12.575100",
          "price": 0.22,
          "size": 100.0,
          "notional": 22.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 553,
          "d1": "SINGLE_FILL",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-1",
          "timestamp": "2026-03-11T05:26:56.368500",
          "price": 0.215,
          "size": 100.0,
          "notional": 21.5,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 552,
          "d1": "SINGLE_FILL",
          "d2": "MOMENTUM_REACTIVE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-3",
          "timestamp": "2026-03-10T07:46:25.970100",
          "price": 0.215,
          "size": 5500.0,
          "notional": 1182.5,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 551,
          "d1": "SINGLE_FILL",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-2",
          "timestamp": "2026-03-10T03:10:50.514200",
          "price": 0.215,
          "size": 4500.0,
          "notional": 967.5,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 550,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-1",
          "timestamp": "2026-03-10T01:48:16.952200",
          "price": 0.205,
          "size": 100.0,
          "notional": 20.5,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 549,
          "d1": "SINGLE_FILL",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-24",
          "timestamp": "2026-03-09T06:03:56.094900",
          "price": 0.205,
          "size": 17000.0,
          "notional": 3485.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 548,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-23",
          "timestamp": "2026-03-09T05:47:18.948300",
          "price": 0.2,
          "size": 100.0,
          "notional": 20.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 547,
          "d1": "SINGLE_FILL",
          "d2": "MOMENTUM_REACTIVE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-22",
          "timestamp": "2026-03-09T05:39:02.070300",
          "price": 0.2,
          "size": 99800.0,
          "notional": 19960.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 546,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "MOMENTUM_REACTIVE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-21",
          "timestamp": "2026-03-09T05:39:02.070300",
          "price": 0.2,
          "size": 100.0,
          "notional": 20.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 546,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "MOMENTUM_REACTIVE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-20",
          "timestamp": "2026-03-09T05:30:51.692300",
          "price": 0.205,
          "size": 22000.0,
          "notional": 4510.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 545,
          "d1": "SINGLE_FILL",
          "d2": "MOMENTUM_REACTIVE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-19",
          "timestamp": "2026-03-09T05:22:40.681200",
          "price": 0.21,
          "size": 5500.0,
          "notional": 1155.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 544,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-18",
          "timestamp": "2026-03-09T05:22:40.681200",
          "price": 0.21,
          "size": 14500.0,
          "notional": 3045.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 543,
          "d1": "SINGLE_FILL",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-17",
          "timestamp": "2026-03-09T05:22:39.595800",
          "price": 0.205,
          "size": 50000.0,
          "notional": 10250.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 542,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-16",
          "timestamp": "2026-03-09T05:22:39.595800",
          "price": 0.205,
          "size": 100000.0,
          "notional": 20500.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 542,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-12",
          "timestamp": "2026-03-09T03:43:11.952900",
          "price": 0.21,
          "size": 100.0,
          "notional": 21.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 541,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-11",
          "timestamp": "2026-03-09T03:30:52.634400",
          "price": 0.21,
          "size": 26000.0,
          "notional": 5460.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 540,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-9",
          "timestamp": "2026-03-09T03:14:03.184300",
          "price": 0.21,
          "size": 300.0,
          "notional": 63.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 539,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-10",
          "timestamp": "2026-03-09T03:14:03.184300",
          "price": 0.21,
          "size": 3700.0,
          "notional": 777.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 539,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-8",
          "timestamp": "2026-03-09T03:12:33.499500",
          "price": 0.21,
          "size": 2000.0,
          "notional": 420.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 538,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-7",
          "timestamp": "2026-03-09T03:11:39.140200",
          "price": 0.21,
          "size": 8800.0,
          "notional": 1848.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 537,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-6",
          "timestamp": "2026-03-09T03:11:27.113500",
          "price": 0.21,
          "size": 6900.0,
          "notional": 1449.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 536,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "MOMENTUM_REACTIVE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-5",
          "timestamp": "2026-03-09T03:11:27.113500",
          "price": 0.21,
          "size": 12000.0,
          "notional": 2520.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 536,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "MOMENTUM_REACTIVE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-4",
          "timestamp": "2026-03-09T03:00:40.748400",
          "price": 0.21,
          "size": 3000.0,
          "notional": 630.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 535,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-3",
          "timestamp": "2026-03-09T03:00:40.748300",
          "price": 0.21,
          "size": 50000.0,
          "notional": 10500.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 534,
          "d1": "SINGLE_FILL",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
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
      "total_trades": 884,
      "price_moving_trades": 189,
      "pct_price_moving": 21.380090497737555,
      "all_movers": {
        "count": 189,
        "avg_size": 3934.0026455026455,
        "median_size": 1610.0,
        "retail_count": 47,
        "mixed_count": 27,
        "institutional_count": 46,
        "ambiguous_count": 68,
        "unobservable_count": 1,
        "retail_pct": 24.867724867724867,
        "mixed_pct": 14.285714285714285,
        "instit_pct": 24.33862433862434,
        "unclear_pct": 36.507936507936506
      },
      "positive_movers": {
        "count": 94,
        "avg_size": 2820.7978723404253,
        "median_size": 973.75,
        "retail_count": 32,
        "mixed_count": 13,
        "institutional_count": 22,
        "ambiguous_count": 27,
        "unobservable_count": 0,
        "retail_pct": 34.04255319148936,
        "mixed_pct": 13.829787234042554,
        "instit_pct": 23.404255319148938,
        "unclear_pct": 28.723404255319153
      },
      "negative_movers": {
        "count": 95,
        "avg_size": 5035.489473684211,
        "median_size": 2250.0,
        "retail_count": 15,
        "mixed_count": 14,
        "institutional_count": 24,
        "ambiguous_count": 41,
        "unobservable_count": 1,
        "retail_pct": 15.789473684210526,
        "mixed_pct": 14.736842105263156,
        "instit_pct": 25.263157894736842,
        "unclear_pct": 44.21052631578947
      }
    },
    "short_selling": {
      "data_available": true,
      "security_name": "$ Leong Guan Hldgs",
      "mapping": {
        "ticker_to_security": "$ Leong Guan Hldgs",
        "confidence": "high"
      },
      "coverage": {
        "n_days_short_data": 63,
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
            "avg_short_ratio": 0.001275507361940732,
            "max_short_ratio": 0.08035696380226612,
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
            "avg_short_ratio": 0.005739783128733294
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
            "avg_short_ratio": 0.005739783128733294,
            "change_pct": null
          }
        ],
        "interpretation": "Short interest stable"
      },
      "short_series": {
        "valid": true,
        "rows": [
          {
            "date": "2026-03-13",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1500,
            "close": 0.215,
            "return": -0.04444444444444451
          },
          {
            "date": "2026-03-12",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 500,
            "close": 0.225,
            "return": 0.022727272727272707
          },
          {
            "date": "2026-03-11",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 45200,
            "close": 0.22,
            "return": 0.023255813953488413
          },
          {
            "date": "2026-03-10",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 10100,
            "close": 0.215,
            "return": 0.04878048780487809
          },
          {
            "date": "2026-03-09",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 503800,
            "close": 0.205,
            "return": -0.06818181818181823
          },
          {
            "date": "2026-03-06",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2900,
            "close": 0.22,
            "return": -0.022222222222222254
          },
          {
            "date": "2026-03-05",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 21000,
            "close": 0.225,
            "return": 0.022727272727272707
          },
          {
            "date": "2026-03-04",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 28100,
            "close": 0.22,
            "return": -0.06382978723404253
          },
          {
            "date": "2026-03-03",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 250700,
            "close": 0.235,
            "return": 0.0
          },
          {
            "date": "2026-03-02",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 500,
            "close": 0.235,
            "return": 0.0
          },
          {
            "date": "2026-02-27",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 155800,
            "close": 0.235,
            "return": -0.02083333333333337
          },
          {
            "date": "2026-02-26",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 6000,
            "close": 0.24,
            "return": 0.04347826086956519
          },
          {
            "date": "2026-02-25",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 800,
            "close": 0.23,
            "return": 0.022222222222222143
          },
          {
            "date": "2026-02-24",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 10000,
            "close": 0.225,
            "return": -0.04255319148936165
          },
          {
            "date": "2026-02-23",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 600,
            "close": 0.235,
            "return": 0.0
          },
          {
            "date": "2026-02-20",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 8900,
            "close": 0.235,
            "return": -0.02083333333333337
          },
          {
            "date": "2026-02-19",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1300,
            "close": 0.24,
            "return": 0.04347826086956519
          },
          {
            "date": "2026-02-16",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.23,
            "return": 0.0
          },
          {
            "date": "2026-02-13",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 13000,
            "close": 0.23,
            "return": -0.061224489795918324
          },
          {
            "date": "2026-02-12",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 63200,
            "close": 0.245,
            "return": 0.06521739130434767
          },
          {
            "date": "2026-02-11",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1000,
            "close": 0.23,
            "return": 0.0
          },
          {
            "date": "2026-02-10",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1000,
            "close": 0.23,
            "return": 0.022222222222222143
          },
          {
            "date": "2026-02-09",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 31600,
            "close": 0.225,
            "return": 0.0
          },
          {
            "date": "2026-02-06",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 73000,
            "close": 0.225,
            "return": -0.04255319148936165
          },
          {
            "date": "2026-02-05",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 4500,
            "close": 0.235,
            "return": -0.02083333333333337
          },
          {
            "date": "2026-02-04",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1500,
            "close": 0.24,
            "return": 0.0
          },
          {
            "date": "2026-02-03",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 12500,
            "close": 0.24,
            "return": 0.0
          },
          {
            "date": "2026-02-02",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1100,
            "close": 0.24,
            "return": 0.02127659574468077
          },
          {
            "date": "2026-01-30",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 22000,
            "close": 0.235,
            "return": 0.0
          },
          {
            "date": "2026-01-29",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 82400,
            "close": 0.235,
            "return": 0.0
          },
          {
            "date": "2026-01-28",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 12600,
            "close": 0.235,
            "return": 0.021739130434782483
          },
          {
            "date": "2026-01-27",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 100000,
            "close": 0.23,
            "return": -0.04166666666666663
          },
          {
            "date": "2026-01-26",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 40000,
            "close": 0.24,
            "return": 0.02127659574468077
          },
          {
            "date": "2026-01-23",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 28700,
            "close": 0.235,
            "return": 0.021739130434782483
          },
          {
            "date": "2026-01-22",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2100,
            "close": 0.23,
            "return": -0.04166666666666663
          },
          {
            "date": "2026-01-21",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2000,
            "close": 0.24,
            "return": 0.02127659574468077
          },
          {
            "date": "2026-01-20",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 17000,
            "close": 0.235,
            "return": -0.04081632653061229
          },
          {
            "date": "2026-01-19",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 12000,
            "close": 0.245,
            "return": 0.02083333333333326
          },
          {
            "date": "2026-01-16",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 53400,
            "close": 0.24,
            "return": 0.02127659574468077
          },
          {
            "date": "2026-01-15",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 25500,
            "close": 0.235,
            "return": -0.02083333333333337
          },
          {
            "date": "2026-01-14",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 510500,
            "close": 0.24,
            "return": -0.05882352941176472
          },
          {
            "date": "2026-01-13",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2793600,
            "close": 0.255,
            "return": -0.05555555555555558
          },
          {
            "date": "2026-01-12",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1360200,
            "close": 0.27,
            "return": 0.12500000000000022
          },
          {
            "date": "2026-01-09",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 651600,
            "close": 0.24,
            "return": 0.04347826086956519
          },
          {
            "date": "2026-01-08",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 9500,
            "close": 0.23,
            "return": 0.0
          },
          {
            "date": "2026-01-07",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 285000,
            "close": 0.23,
            "return": 0.022222222222222143
          },
          {
            "date": "2026-01-06",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 63000,
            "close": 0.225,
            "return": 0.0
          },
          {
            "date": "2026-01-05",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 31000,
            "close": 0.225,
            "return": 0.022727272727272707
          },
          {
            "date": "2026-01-02",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 112000,
            "close": 0.22,
            "return": -0.0434782608695653
          },
          {
            "date": "2025-12-31",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 485400,
            "close": 0.23,
            "return": 0.06976744186046524
          },
          {
            "date": "2025-12-30",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 80000,
            "close": 0.215,
            "return": 0.0
          },
          {
            "date": "2025-12-29",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 169200,
            "close": 0.215,
            "return": -0.022727272727272707
          },
          {
            "date": "2025-12-26",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 37500,
            "close": 0.22,
            "return": -0.022222222222222254
          },
          {
            "date": "2025-12-24",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2000,
            "close": 0.225,
            "return": 0.0
          },
          {
            "date": "2025-12-23",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 27000,
            "close": 0.225,
            "return": 0.0
          },
          {
            "date": "2025-12-22",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 5300,
            "close": 0.225,
            "return": 0.022727272727272707
          },
          {
            "date": "2025-12-19",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 113700,
            "close": 0.22,
            "return": 0.07317073170731714
          },
          {
            "date": "2025-12-18",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 293000,
            "close": 0.205,
            "return": -0.04651162790697683
          },
          {
            "date": "2025-12-17",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 597600,
            "close": 0.215,
            "return": -0.04444444444444451
          },
          {
            "date": "2025-12-16",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 242400,
            "close": 0.225,
            "return": -0.06249999999999989
          },
          {
            "date": "2025-12-15",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 533300,
            "close": 0.24,
            "return": -0.020408163265306145
          },
          {
            "date": "2025-12-12",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 461400,
            "close": 0.245,
            "return": 0.02083333333333326
          },
          {
            "date": "2025-12-11",
            "short_ratio": 0.08035696380226612,
            "short_vol": 400700,
            "total_vol": 4986500,
            "close": 0.24,
            "return": null
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "LGH",
          "avg_short_ratio": 0.0,
          "max_short_ratio": 0.0,
          "is_target": true
        },
        {
          "ticker": "42W",
          "avg_short_ratio": 0.00014372441445379674,
          "max_short_ratio": 0.009845620667926906,
          "is_target": false
        },
        {
          "ticker": "D03",
          "avg_short_ratio": 0.0008752243565301648,
          "max_short_ratio": 0.06804264005443411,
          "is_target": false
        },
        {
          "ticker": "BQD",
          "avg_short_ratio": 0.00106006394849167,
          "max_short_ratio": 0.21058965102286403,
          "is_target": false
        },
        {
          "ticker": "Q01",
          "avg_short_ratio": 0.0013832312590983777,
          "max_short_ratio": 0.14655172413793102,
          "is_target": false
        },
        {
          "ticker": "OTS",
          "avg_short_ratio": 0.0015943790547019584,
          "max_short_ratio": 0.4401114206128134,
          "is_target": false
        },
        {
          "ticker": "5JS",
          "avg_short_ratio": 0.0040148336264386976,
          "max_short_ratio": 0.2,
          "is_target": false
        },
        {
          "ticker": "MV4",
          "avg_short_ratio": 0.005567258649122047,
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
          "opening": 0.0,
          "continuous": 0.9730771083176805,
          "closing": 0.02692289168231951,
          "auctions": 0.02692289168231951,
          "other": 0.0
        },
        "1W": {
          "opening": 0.0,
          "continuous": 0.9546994367639529,
          "closing": 0.002289810547875064,
          "auctions": 0.04530056323604711,
          "other": 0.0
        },
        "1M": {
          "opening": 0.01918170029937794,
          "continuous": 0.9401801844869244,
          "closing": 0.0018145928320595329,
          "auctions": 0.05981981551307562,
          "other": 0.0
        },
        "3M": {
          "opening": 0.13924065069351052,
          "continuous": 0.8361024643225762,
          "closing": 0.015133091878955953,
          "auctions": 0.1638975356774238,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.8019731093872648,
        "1W": 0.656598595530994,
        "1M": 0.7379189989051788,
        "3M": 0.5635927730700094
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.0404
        },
        {
          "time": "09:00",
          "avg_share": 0.0967
        },
        {
          "time": "09:30",
          "avg_share": 0.1101
        },
        {
          "time": "10:00",
          "avg_share": 0.0638
        },
        {
          "time": "10:30",
          "avg_share": 0.078
        },
        {
          "time": "11:00",
          "avg_share": 0.0643
        },
        {
          "time": "11:30",
          "avg_share": 0.0313
        },
        {
          "time": "12:30",
          "avg_share": 0.0288
        },
        {
          "time": "13:00",
          "avg_share": 0.0614
        },
        {
          "time": "13:30",
          "avg_share": 0.0161
        },
        {
          "time": "14:00",
          "avg_share": 0.0191
        },
        {
          "time": "14:30",
          "avg_share": 0.0663
        },
        {
          "time": "15:00",
          "avg_share": 0.0548
        },
        {
          "time": "15:30",
          "avg_share": 0.0767
        },
        {
          "time": "16:00",
          "avg_share": 0.0074
        },
        {
          "time": "16:30",
          "avg_share": 0.1496
        },
        {
          "time": "17:00",
          "avg_share": 0.0352
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "LGH",
          "auctions_pct": 16.38975356774238,
          "hhi": 0.5635927730700094,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400",
            "you": true
          }
        },
        {
          "ticker": "Y03",
          "auctions_pct": 3.8030052957559417,
          "hhi": 0.6337688215520056,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "BQD",
          "auctions_pct": 0.20838245500198993,
          "hhi": 0.6762348621015692,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "MV4",
          "auctions_pct": 3.7736338162307517,
          "hhi": 0.7211499202041276,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "D03",
          "auctions_pct": 5.836389300386247,
          "hhi": 0.49540236849285857,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "5JS",
          "auctions_pct": 4.825331214999883,
          "hhi": 0.5528969468464856,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "OTS",
          "auctions_pct": 5.901460412944838,
          "hhi": 0.722929791247573,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "Q01",
          "auctions_pct": 2.852600589353575,
          "hhi": 0.3641649107377903,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "42W",
          "auctions_pct": 7.621639545259116,
          "hhi": 0.36003977336208903,
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
