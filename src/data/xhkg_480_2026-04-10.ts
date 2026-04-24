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
      "ticker": "480",
      "name": "HKR INT'L",
      "marketCap": 1722950091.4799998,
      "sector": "Property Development",
      "industry": "Properties & Construction - Properties"
    },
    {
      "ticker": "563",
      "name": "SH IND URBAN",
      "marketCap": 1362418328.8649998,
      "sector": "Property Development",
      "industry": "Properties & Construction - Properties"
    },
    {
      "ticker": "95",
      "name": "LVGEM CHINA",
      "marketCap": 1546395251.481,
      "sector": "Property Development",
      "industry": "Properties & Construction - Properties"
    },
    {
      "ticker": "35",
      "name": "FE CONSORT INTL",
      "marketCap": 2386051575.96,
      "sector": "Property Development",
      "industry": "Properties & Construction - Properties"
    },
    {
      "ticker": "1570",
      "name": "WEIYE HOLDINGS",
      "marketCap": 1500418612.8,
      "sector": "Property Development",
      "industry": "Properties & Construction - Properties"
    },
    {
      "ticker": "1321",
      "name": "CHINA NEWCITY",
      "marketCap": 1290816181.8999999,
      "sector": "Property Development",
      "industry": "Properties & Construction - Properties"
    },
    {
      "ticker": "978",
      "name": "CHI MER LAND",
      "marketCap": 1157640854.96,
      "sector": "Property Development",
      "industry": "Properties & Construction - Properties"
    },
    {
      "ticker": "369",
      "name": "WING TAI PPT",
      "marketCap": 2914051361.48,
      "sector": "Property Development",
      "industry": "Properties & Construction - Properties"
    },
    {
      "ticker": "542",
      "name": "CN CULTURAL T&A",
      "marketCap": 1791189045.36,
      "sector": "Property Development",
      "industry": "Properties & Construction - Properties"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XHKG",
    "currency": "HKD",
    "ticker": "480",
    "company": "HKR INT'L",
    "asof_date": "2026-04-10",
    "industry": "Properties & Construction - Properties",
    "sector": "Property Development",
    "market_cap_display": "1.7B",
    "market_cap_category": "mid",
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
          "score_pca": 44.91064491064491,
          "score_pca_percentile": 44.91064491064491,
          "rank_pca": 1419,
          "total": 2574,
          "adv_notional_sgd": 128643.59999999999,
          "adv_volume_shares": 109020.0,
          "free_float_shares": 578193954.0,
          "turnover_ratio": 0.0001885526461246947,
          "votes": 21.0,
          "trades": 21.0,
          "spread_pct": 0.036208732694355726,
          "spread_ticks": 4.25,
          "amihud": 0.0,
          "volatility": 0.6577513753850458
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5400312061344495,
          "loadings": {
            "log_adv": 0.5402030371846864,
            "log_trades": 0.5011844990984181,
            "log_turnover": 0.501736680482201,
            "neg_spread": 0.3936678213155001,
            "neg_amihud": 0.04034418799513263,
            "neg_vol": -0.2205744157746564
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
          "peer_median_adv": 318327.405,
          "peer_median_score_pca": 48.38772338772338,
          "peer_median_trades": 21.5,
          "peer_median_volatility": 0.46467601112905527,
          "peer_median_spread_pct": 0.04387479221482777,
          "peer_median_spread_ticks": 6.411885245901639,
          "peer_median_amihud": 3.9424100343153616e-08,
          "peer_median_turnover_ratio": 0.0005540074267667718,
          "target_vs_peer": {
            "score_pca_delta": -3.48,
            "adv_delta_pct": -59.6,
            "trades_delta_pct": -2.33,
            "volatility_delta_pct": -41.55,
            "spread_pct_delta_pct": 17.47,
            "spread_ticks_delta_pct": -33.72,
            "amihud_delta_pct": 100.0,
            "turnover_ratio_delta_pct": -65.97
          }
        },
        "peer_liquidity": [
          {
            "ticker": "480",
            "score_pca": 44.91064491064491,
            "rank_pca": 1419,
            "adv": 128643.59999999999,
            "trades": 21.0,
            "volatility": 0.6577513753850458,
            "spread_pct": 0.036208732694355726,
            "spread_ticks": 4.25,
            "amihud": 0.0,
            "turnover_ratio": 0.0001885526461246947,
            "is_target": true
          },
          {
            "ticker": "563",
            "score_pca": 50.15540015540015,
            "rank_pca": 1284,
            "adv": 311460.0,
            "trades": 24.0,
            "volatility": 0.3345470825098894,
            "spread_pct": 0.01925298421255291,
            "spread_ticks": 1.1029411764705883,
            "amihud": 0.0,
            "turnover_ratio": 0.0007599820823114488,
            "is_target": false
          },
          {
            "ticker": "95",
            "score_pca": 27.89432789432789,
            "rank_pca": 1857,
            "adv": 27776.0,
            "trades": 4.0,
            "volatility": 0.5948049397482211,
            "spread_pct": 0.0643202070991188,
            "spread_ticks": 15.380952380952381,
            "amihud": 1.2000768049155184e-06,
            "turnover_ratio": 0.0001294040718920728,
            "is_target": false
          },
          {
            "ticker": "35",
            "score_pca": 47.008547008547005,
            "rank_pca": 1365,
            "adv": 325194.81,
            "trades": 19.0,
            "volatility": 0.24446502429353684,
            "spread_pct": 0.016155088852988705,
            "spread_ticks": 1.25,
            "amihud": 3.9424100343153616e-08,
            "turnover_ratio": 0.0003480327712220949,
            "is_target": false
          },
          {
            "ticker": "1570",
            "score_pca": 49.76689976689977,
            "rank_pca": 1294,
            "adv": 1287400.0,
            "trades": 43.0,
            "volatility": 0.9806025649225669,
            "spread_pct": 0.1057868420442514,
            "spread_ticks": 80.52058823529411,
            "amihud": 9.770557986796153e-09,
            "turnover_ratio": 0.0008361666466258596,
            "is_target": false
          },
          {
            "ticker": "1321",
            "score_pca": 56.91530691530692,
            "rank_pca": 1110,
            "adv": 479520.0,
            "trades": 24.0,
            "volatility": 2.322598791566623,
            "spread_pct": 0.11791730474732012,
            "spread_ticks": 7.573770491803279,
            "amihud": 3.258466800133467e-07,
            "turnover_ratio": 0.001254678136652793,
            "is_target": false
          },
          {
            "ticker": "978",
            "score_pca": 36.55788655788656,
            "rank_pca": 1634,
            "adv": 107144.0,
            "trades": 8.0,
            "volatility": 0.32457989544061594,
            "spread_pct": 0.022167842234057846,
            "spread_ticks": 5.25,
            "amihud": 2.434756637958167e-07,
            "turnover_ratio": 9.255374803068967e-05,
            "is_target": false
          },
          {
            "ticker": "369",
            "score_pca": 11.965811965811966,
            "rank_pca": 2267,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.04772339907475043,
            "spread_ticks": 10.31578947368421,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "542",
            "score_pca": 56.72105672105672,
            "rank_pca": 1115,
            "adv": 715000.0,
            "trades": 36.0,
            "volatility": 0.8230185876471791,
            "spread_pct": 0.04002618535490511,
            "spread_ticks": 5.095238095238095,
            "amihud": 1.110001110001106e-08,
            "turnover_ratio": 0.0010715130467447303,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Property Development",
          "sector_count": 118,
          "market_count": 2574,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4494884703154094,
              "median": 0.3061697294598438,
              "min": 0.0,
              "max": 9.393313124786681,
              "p5": 0.0,
              "p95": 1.3813199111878136,
              "count": 2574
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 67524985.69707848,
              "median": 281655.0,
              "min": 0.0,
              "max": 10425795200.0,
              "p5": 0.0,
              "p95": 282285197.7139998,
              "count": 2574
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04878238946505183,
              "median": 0.028148482980643118,
              "min": 0.0004478493785191276,
              "max": 0.7648559970834851,
              "p5": 0.0013854669278569338,
              "p95": 0.16126579974852753,
              "count": 2574
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006494092693337297,
              "median": 0.0011575575535619843,
              "min": 0.0,
              "max": 0.7118303545605582,
              "p5": 0.0,
              "p95": 0.022477492092257197,
              "count": 2553
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.1276946470376172e-05,
              "median": 5.654850542300145e-09,
              "min": 0.0,
              "max": 0.014034878165312945,
              "p5": 0.0,
              "p95": 5.854475045424379e-06,
              "count": 2211
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1262.1495726495727,
              "median": 23.0,
              "min": 0.0,
              "max": 97719.0,
              "p5": 0.0,
              "p95": 6548.449999999997,
              "count": 2574
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.47893349130986695,
              "median": 0.3276293007638121,
              "min": 0.0,
              "max": 2.9175833051532987,
              "p5": 0.0,
              "p95": 1.3333478146895523,
              "count": 118
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 23577370.07889037,
              "median": 134375.0,
              "min": 0.0,
              "max": 626932044.5999999,
              "p5": 0.0,
              "p95": 107052669.76399973,
              "count": 118
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.05518400213957945,
              "median": 0.03350053652309956,
              "min": 0.0005691839878242957,
              "max": 0.7648559970834851,
              "p5": 0.001979188984458487,
              "p95": 0.1454722418459636,
              "count": 118
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002614970040083826,
              "median": 0.0005570565944535684,
              "min": 0.0,
              "max": 0.05882233577800876,
              "p5": 0.0,
              "p95": 0.009557884623454605,
              "count": 116
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.622707149901099e-06,
              "median": 1.110001110001106e-08,
              "min": 0.0,
              "max": 0.00010860484544695068,
              "p5": 0.0,
              "p95": 1.3317992014386253e-05,
              "count": 97
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 513.1271186440678,
              "median": 20.0,
              "min": 0.0,
              "max": 6677.0,
              "p5": 0.0,
              "p95": 3332.5999999999995,
              "count": 118
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 406686.85125,
              "median": 318327.405,
              "min": 0.0,
              "max": 1287400.0,
              "p5": 9721.6,
              "p95": 1087059.9999999998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 19.75,
              "median": 21.5,
              "min": 0.0,
              "max": 43.0,
              "p5": 1.4000000000000001,
              "p95": 40.55,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.703077110766079,
              "median": 0.46467601112905527,
              "min": 0.0,
              "max": 2.322598791566623,
              "p5": 0.0855627585027379,
              "p95": 1.8529001122412028,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.054168731702493166,
              "median": 0.04387479221482777,
              "min": 0.016155088852988705,
              "max": 0.11791730474732012,
              "p5": 0.01723935222883618,
              "p95": 0.11367164280124606,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 15.811159981680333,
              "median": 6.411885245901639,
              "min": 1.1029411764705883,
              "max": 80.52058823529411,
              "p5": 1.1544117647058825,
              "p95": 57.72171568627447,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.613848311649489e-07,
              "median": 3.9424100343153616e-08,
              "min": 0.0,
              "max": 1.2000768049155184e-06,
              "p5": 2.931167396038846e-09,
              "p95": 9.378077674448662e-07,
              "count": 7
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0005615413129349611,
              "median": 0.0005540074267667718,
              "min": 0.0,
              "max": 0.001254678136652793,
              "p5": 3.2393811810741385e-05,
              "p95": 0.001190570355184971,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.0,
            "market": 0.005388454653585173,
            "sector": 0.0,
            "peers": 0.0064102564102563875,
            "vs_market": -0.005388454653585173,
            "vs_sector": 0.0,
            "vs_peers": -0.0064102564102563875
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 48.67909867909868,
          "score_pca_percentile": 48.67909867909868,
          "rank_pca": 1322,
          "total": 2574,
          "adv_notional_sgd": 152776.0,
          "adv_volume_shares": 135200.0,
          "free_float_shares": 578193954.0,
          "turnover_ratio": 0.00023383156995100644,
          "votes": 20.0,
          "trades": 20.0,
          "spread_pct": 0.023720448937355747,
          "spread_ticks": 2.7142857142857144,
          "amihud": 6.957135946990159e-08,
          "volatility": 0.4236909234521588
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5765422626267434,
          "loadings": {
            "log_adv": 0.5181502180452965,
            "log_trades": 0.472209798428735,
            "log_turnover": 0.4790056355441266,
            "neg_spread": 0.4588008013303223,
            "neg_amihud": 0.24954417455040834,
            "neg_vol": 0.07950716050194355
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
          "peer_median_adv": 165290.0,
          "peer_median_score_pca": 46.42579642579642,
          "peer_median_trades": 15.0,
          "peer_median_volatility": 0.5280849508965828,
          "peer_median_spread_pct": 0.029900624858034415,
          "peer_median_spread_ticks": 5.922259983007647,
          "peer_median_amihud": 7.477257838841094e-08,
          "peer_median_turnover_ratio": 0.00020171897462812813,
          "target_vs_peer": {
            "score_pca_delta": 2.25,
            "adv_delta_pct": -7.6,
            "trades_delta_pct": 33.33,
            "volatility_delta_pct": 19.77,
            "spread_pct_delta_pct": 20.67,
            "spread_ticks_delta_pct": -54.17,
            "amihud_delta_pct": 6.96,
            "turnover_ratio_delta_pct": 15.92
          }
        },
        "peer_liquidity": [
          {
            "ticker": "480",
            "score_pca": 48.67909867909868,
            "rank_pca": 1322,
            "adv": 152776.0,
            "trades": 20.0,
            "volatility": 0.4236909234521588,
            "spread_pct": 0.023720448937355747,
            "spread_ticks": 2.7142857142857144,
            "amihud": 6.957135946990159e-08,
            "turnover_ratio": 0.00023383156995100644,
            "is_target": true
          },
          {
            "ticker": "563",
            "score_pca": 54.156954156954164,
            "rank_pca": 1181,
            "adv": 311460.0,
            "trades": 22.0,
            "volatility": 0.4455170027945112,
            "spread_pct": 0.021106821106821032,
            "spread_ticks": 1.2115384615384615,
            "amihud": 6.069027664084679e-08,
            "turnover_ratio": 0.0007599820823114488,
            "is_target": false
          },
          {
            "ticker": "95",
            "score_pca": 47.04739704739705,
            "rank_pca": 1364,
            "adv": 115072.0,
            "trades": 23.0,
            "volatility": 0.803373252222466,
            "spread_pct": 0.032038895468428606,
            "spread_ticks": 6.549019607843137,
            "amihud": 2.0205975869253863e-07,
            "turnover_ratio": 0.000536102583552873,
            "is_target": false
          },
          {
            "ticker": "35",
            "score_pca": 47.51359751359751,
            "rank_pca": 1352,
            "adv": 189600.0,
            "trades": 14.0,
            "volatility": 0.3554042620969461,
            "spread_pct": 0.024058810425484536,
            "spread_ticks": 2.076923076923077,
            "amihud": 5.134911027955839e-08,
            "turnover_ratio": 0.00020206985325025247,
            "is_target": false
          },
          {
            "ticker": "1570",
            "score_pca": 28.710178710178706,
            "rank_pca": 1836,
            "adv": 223360.0,
            "trades": 10.0,
            "volatility": 0.5697346303736496,
            "spread_pct": 0.1057868420442514,
            "spread_ticks": 73.6140350877193,
            "amihud": 7.687298277056834e-08,
            "turnover_ratio": 0.00015805589052074175,
            "is_target": false
          },
          {
            "ticker": "1321",
            "score_pca": 22.533022533022535,
            "rank_pca": 1995,
            "adv": 52000.0,
            "trades": 12.0,
            "volatility": 1.4548711897142277,
            "spread_pct": 0.11715900150203853,
            "spread_ticks": 7.573770491803279,
            "amihud": 5.115089514066504e-07,
            "turnover_ratio": 0.0002013680960060038,
            "is_target": false
          },
          {
            "ticker": "978",
            "score_pca": 45.8041958041958,
            "rank_pca": 1396,
            "adv": 140980.0,
            "trades": 16.0,
            "volatility": 0.2963402317609786,
            "spread_pct": 0.02581831261740135,
            "spread_ticks": 4.777777777777778,
            "amihud": 1.0352490262445537e-07,
            "turnover_ratio": 0.00011457093919217531,
            "is_target": false
          },
          {
            "ticker": "369",
            "score_pca": 39.199689199689196,
            "rank_pca": 1566,
            "adv": 108560.0,
            "trades": 5.0,
            "volatility": 0.4864352714195159,
            "spread_pct": 0.027762354247640224,
            "spread_ticks": 6.545454545454546,
            "amihud": 7.267217400625355e-08,
            "turnover_ratio": 0.0001236174943923087,
            "is_target": false
          },
          {
            "ticker": "542",
            "score_pca": 53.613053613053616,
            "rank_pca": 1195,
            "adv": 613200.0,
            "trades": 38.0,
            "volatility": 0.6479793058772909,
            "spread_pct": 0.039237396629874355,
            "spread_ticks": 5.299065420560748,
            "amihud": 3.822707904340544e-08,
            "turnover_ratio": 0.0007867753140433335,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Property Development",
          "sector_count": 118,
          "market_count": 2574,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6796127168974047,
              "median": 0.5580095690772611,
              "min": 0.0,
              "max": 10.049160326010377,
              "p5": 0.2064489296469208,
              "p95": 1.6006843710794219,
              "count": 2574
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 65051111.95809761,
              "median": 227185.035,
              "min": 0.0,
              "max": 12576080000.0,
              "p5": 0.0,
              "p95": 244040953.27849993,
              "count": 2574
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.046246612984016784,
              "median": 0.028969965419434997,
              "min": 0.0005957156584162828,
              "max": 0.8377358490566037,
              "p5": 0.001483608700860973,
              "p95": 0.14692304000951856,
              "count": 2574
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004578026865091349,
              "median": 0.0008905645172358846,
              "min": 0.0,
              "max": 0.74849980977415,
              "p5": 0.0,
              "p95": 0.016778360261496133,
              "count": 2553
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.2527324148044631e-06,
              "median": 4.606596646397586e-08,
              "min": 0.0,
              "max": 0.00021538348509114532,
              "p5": 3.7239762836912706e-11,
              "p95": 5.145790517540841e-06,
              "count": 2567
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1166.7696192696192,
              "median": 21.0,
              "min": 0.0,
              "max": 83841.0,
              "p5": 0.0,
              "p95": 5967.499999999997,
              "count": 2574
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6029486515214988,
              "median": 0.5044190822865275,
              "min": 0.0,
              "max": 2.5546256796596314,
              "p5": 0.222505915057603,
              "p95": 1.4608026868286899,
              "count": 118
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 27617590.59542758,
              "median": 111816.0,
              "min": 0.0,
              "max": 745146207.1999999,
              "p5": 0.0,
              "p95": 137720724.30899996,
              "count": 118
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04921163795977045,
              "median": 0.03163225023226272,
              "min": 0.000708530903526535,
              "max": 0.2264150943396227,
              "p5": 0.0018459511502200005,
              "p95": 0.13214769643274996,
              "count": 118
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002046168872923418,
              "median": 0.0004446605190268446,
              "min": 0.0,
              "max": 0.018519944110741073,
              "p5": 0.0,
              "p95": 0.008629471297994733,
              "count": 116
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.9603902569107822e-06,
              "median": 9.643081869613765e-08,
              "min": 0.0,
              "max": 0.00014664795641015932,
              "p5": 4.777818102787687e-11,
              "p95": 1.2956900406622714e-05,
              "count": 116
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 578.0254237288135,
              "median": 15.5,
              "min": 0.0,
              "max": 7594.0,
              "p5": 0.0,
              "p95": 4114.199999999998,
              "count": 118
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 219279.0,
              "median": 165290.0,
              "min": 52000.0,
              "max": 613200.0,
              "p5": 71796.0,
              "p95": 507590.9999999998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 17.5,
              "median": 15.0,
              "min": 5.0,
              "max": 38.0,
              "p5": 6.75,
              "p95": 32.74999999999999,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6324568932824483,
              "median": 0.5280849508965828,
              "min": 0.2963402317609786,
              "max": 1.4548711897142277,
              "p5": 0.31701264237856724,
              "p95": 1.2268469115921108,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.049121054255242505,
              "median": 0.029900624858034415,
              "min": 0.021106821106821032,
              "max": 0.11715900150203853,
              "p5": 0.02214001736835326,
              "p95": 0.11317874569181303,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 13.455948058702543,
              "median": 5.922259983007647,
              "min": 1.2115384615384615,
              "max": 73.6140350877193,
              "p5": 1.514423076923077,
              "p95": 50.49994247914866,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.396131544330346e-07,
              "median": 7.477257838841094e-08,
              "min": 3.822707904340544e-08,
              "max": 5.115089514066504e-07,
              "p5": 4.281978997605897e-08,
              "p95": 4.0320173395671116e-07,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0003603177816586422,
              "median": 0.00020171897462812813,
              "min": 0.00011457093919217531,
              "max": 0.0007867753140433335,
              "p5": 0.00011773723351222198,
              "p95": 0.0007773976829371738,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": -2.220446049250313e-16,
            "market": 0.005817570896814672,
            "sector": -0.0250845348570794,
            "peers": -0.07496576479031758,
            "vs_market": -0.005817570896814894,
            "vs_sector": 0.025084534857079177,
            "vs_peers": 0.07496576479031736
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 52.292152292152295,
          "score_pca_percentile": 52.292152292152295,
          "rank_pca": 1229,
          "total": 2574,
          "adv_notional_sgd": 248992.0,
          "adv_volume_shares": 215200.0,
          "free_float_shares": 578193954.0,
          "turnover_ratio": 0.00037219344566166116,
          "votes": 21.0,
          "trades": 21.0,
          "spread_pct": 0.02234145483331868,
          "spread_ticks": 2.5542168674698793,
          "amihud": 3.265197797846092e-08,
          "volatility": 0.4077526639475372
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.6182699492450147,
          "loadings": {
            "log_adv": 0.4990889927760305,
            "log_trades": 0.4512156660257778,
            "log_turnover": 0.4533286918746743,
            "neg_spread": 0.4603312933107667,
            "neg_amihud": 0.3324973375811198,
            "neg_vol": 0.13909823164304289
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
          "peer_median_adv": 265500.0,
          "peer_median_score_pca": 49.339549339549336,
          "peer_median_trades": 17.0,
          "peer_median_volatility": 0.6082001264593959,
          "peer_median_spread_pct": 0.028732871548163987,
          "peer_median_spread_ticks": 3.748543123543124,
          "peer_median_amihud": 6.208422460388879e-08,
          "peer_median_turnover_ratio": 0.0002469586110040704,
          "target_vs_peer": {
            "score_pca_delta": 2.95,
            "adv_delta_pct": -6.2,
            "trades_delta_pct": 23.53,
            "volatility_delta_pct": 32.96,
            "spread_pct_delta_pct": 22.24,
            "spread_ticks_delta_pct": -31.86,
            "amihud_delta_pct": 47.41,
            "turnover_ratio_delta_pct": 50.71
          }
        },
        "peer_liquidity": [
          {
            "ticker": "480",
            "score_pca": 52.292152292152295,
            "rank_pca": 1229,
            "adv": 248992.0,
            "trades": 21.0,
            "volatility": 0.4077526639475372,
            "spread_pct": 0.02234145483331868,
            "spread_ticks": 2.5542168674698793,
            "amihud": 3.265197797846092e-08,
            "turnover_ratio": 0.00037219344566166116,
            "is_target": true
          },
          {
            "ticker": "563",
            "score_pca": 53.41880341880342,
            "rank_pca": 1200,
            "adv": 249000.0,
            "trades": 21.0,
            "volatility": 0.45900207758609873,
            "spread_pct": 0.02057142857142859,
            "spread_ticks": 1.2222222222222223,
            "amihud": 3.015518764216285e-08,
            "turnover_ratio": 0.0005873232107248626,
            "is_target": false
          },
          {
            "ticker": "95",
            "score_pca": 55.400155400155406,
            "rank_pca": 1149,
            "adv": 435479.99999999994,
            "trades": 34.0,
            "volatility": 0.6932965314866693,
            "spread_pct": 0.030606238964096547,
            "spread_ticks": 2.022727272727273,
            "amihud": 5.624474111670504e-08,
            "turnover_ratio": 0.0017654412665275645,
            "is_target": false
          },
          {
            "ticker": "35",
            "score_pca": 55.05050505050505,
            "rank_pca": 1158,
            "adv": 285475.2,
            "trades": 31.0,
            "volatility": 0.368137090656986,
            "spread_pct": 0.018583879564935547,
            "spread_ticks": 1.5555555555555556,
            "amihud": 4.2683511247013204e-08,
            "turnover_ratio": 0.00029507271457882055,
            "is_target": false
          },
          {
            "ticker": "1570",
            "score_pca": 35.43123543123543,
            "rank_pca": 1663,
            "adv": 282000.0,
            "trades": 12.0,
            "volatility": 0.7438472733719628,
            "spread_pct": 0.07008989791254003,
            "spread_ticks": 47.2,
            "amihud": 8.406739453745345e-08,
            "turnover_ratio": 0.00019884450742932026,
            "is_target": false
          },
          {
            "ticker": "1321",
            "score_pca": 21.950271950271947,
            "rank_pca": 2010,
            "adv": 39000.0,
            "trades": 8.0,
            "volatility": 1.0447256112355665,
            "spread_pct": 0.09850419554906961,
            "spread_ticks": 5.625,
            "amihud": 5.115089514066504e-07,
            "turnover_ratio": 0.00012391882831138697,
            "is_target": false
          },
          {
            "ticker": "978",
            "score_pca": 45.26029526029526,
            "rank_pca": 1410,
            "adv": 140980.0,
            "trades": 13.0,
            "volatility": 0.32642314358287394,
            "spread_pct": 0.026859504132231427,
            "spread_ticks": 1.6,
            "amihud": 6.792370809107254e-08,
            "turnover_ratio": 0.00010927050428292877,
            "is_target": false
          },
          {
            "ticker": "369",
            "score_pca": 41.8026418026418,
            "rank_pca": 1499,
            "adv": 125300.0,
            "trades": 6.0,
            "volatility": 0.5231037214321226,
            "spread_pct": 0.026241488124896212,
            "spread_ticks": 5.666666666666667,
            "amihud": 9.49472852672203e-08,
            "turnover_ratio": 0.0001532856930464628,
            "is_target": false
          },
          {
            "ticker": "542",
            "score_pca": 54.54545454545454,
            "rank_pca": 1171,
            "adv": 996960.0000000001,
            "trades": 37.0,
            "volatility": 0.7714166864870167,
            "spread_pct": 0.040607866209348226,
            "spread_ticks": 5.4743589743589745,
            "amihud": 2.6504248631055596e-08,
            "turnover_ratio": 0.001401209368820032,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Property Development",
          "sector_count": 118,
          "market_count": 2574,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7050481990725268,
              "median": 0.5783560432490424,
              "min": 0.0,
              "max": 8.223126969362776,
              "p5": 0.22085230509755144,
              "p95": 1.5710900513988801,
              "count": 2574
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 61996065.490146406,
              "median": 229028.0,
              "min": 0.0,
              "max": 14268680000.0,
              "p5": 0.0,
              "p95": 239286703.94299993,
              "count": 2574
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04282931079238141,
              "median": 0.02701177101118201,
              "min": 0.0005617553716258445,
              "max": 0.6003953685399606,
              "p5": 0.0014362734329899636,
              "p95": 0.13628709614692394,
              "count": 2574
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0041162209707571425,
              "median": 0.0008952838912855968,
              "min": 0.0,
              "max": 0.4275637256597378,
              "p5": 0.0,
              "p95": 0.016367626506232615,
              "count": 2553
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.205966959054216e-07,
              "median": 4.322802925070572e-08,
              "min": 0.0,
              "max": 4.7054394880481924e-05,
              "p5": 4.533679427385981e-11,
              "p95": 3.6004832555031596e-06,
              "count": 2574
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1095.4201631701633,
              "median": 20.0,
              "min": 0.0,
              "max": 83841.0,
              "p5": 0.0,
              "p95": 5986.75,
              "count": 2574
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6906046070469412,
              "median": 0.626850165594846,
              "min": 0.08957628263747468,
              "max": 4.417876992774344,
              "p5": 0.2645668843458209,
              "p95": 1.44010108414646,
              "count": 118
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 29516402.36689583,
              "median": 123130.0,
              "min": 0.0,
              "max": 799594745.1999999,
              "p5": 0.0,
              "p95": 164827570.0064995,
              "count": 118
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04788921051278387,
              "median": 0.030463731910748373,
              "min": 0.0006248209956155194,
              "max": 0.2492522432701895,
              "p5": 0.0017839243624823745,
              "p95": 0.1382741998547764,
              "count": 118
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0021463515804248084,
              "median": 0.0006130394473072417,
              "min": 0.0,
              "max": 0.01807298730532039,
              "p5": 0.0,
              "p95": 0.00847392537695444,
              "count": 116
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.2328775853274902e-06,
              "median": 7.578841030308438e-08,
              "min": 0.0,
              "max": 1.9021008656508632e-05,
              "p5": 1.732136948275385e-11,
              "p95": 8.763583611241013e-06,
              "count": 118
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 652.2372881355932,
              "median": 17.5,
              "min": 0.0,
              "max": 9157.0,
              "p5": 0.0,
              "p95": 4369.999999999994,
              "count": 118
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 319274.4,
              "median": 265500.0,
              "min": 39000.0,
              "max": 996960.0000000001,
              "p5": 69205.0,
              "p95": 800441.9999999998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 20.25,
              "median": 17.0,
              "min": 6.0,
              "max": 37.0,
              "p5": 6.7,
              "p95": 35.949999999999996,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6162440169799122,
              "median": 0.6082001264593959,
              "min": 0.32642314358287394,
              "max": 1.0447256112355665,
              "p5": 0.34102302505881316,
              "p95": 0.949067487573574,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04150806237856827,
              "median": 0.028732871548163987,
              "min": 0.018583879564935547,
              "max": 0.09850419554906961,
              "p5": 0.019279521717208113,
              "p95": 0.08855919137628424,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 8.795816336441337,
              "median": 3.748543123543124,
              "min": 1.2222222222222223,
              "max": 47.2,
              "p5": 1.338888888888889,
              "p95": 32.66333333333331,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.1425437849241667e-07,
              "median": 6.208422460388879e-08,
              "min": 2.6504248631055596e-08,
              "max": 5.115089514066504e-07,
              "p5": 2.7782077284943136e-08,
              "p95": 3.6571236825784966e-07,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0005792957617151723,
              "median": 0.0002469586110040704,
              "min": 0.00010927050428292877,
              "max": 0.0017654412665275645,
              "p5": 0.00011439741769288914,
              "p95": 0.0016379601023299279,
              "count": 8
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": 0.0925925925925919,
            "market": 0.07151156981189555,
            "sector": -0.032529958558431216,
            "peers": -0.018140218405615638,
            "vs_market": 0.021081022780696346,
            "vs_sector": 0.1251225511510231,
            "vs_peers": 0.11073281099820753
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 53.84615384615385,
          "score_pca_percentile": 53.84615384615385,
          "rank_pca": 1189,
          "total": 2574,
          "adv_notional_sgd": 292729.6,
          "adv_volume_shares": 258240.0,
          "free_float_shares": 578193954.0,
          "turnover_ratio": 0.0004466321347939934,
          "votes": 26.0,
          "trades": 26.0,
          "spread_pct": 0.020639733525286214,
          "spread_ticks": 2.295595194757918,
          "amihud": 3.169979365547644e-08,
          "volatility": 0.4189828248283659
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.6224804103389515,
          "loadings": {
            "log_adv": 0.4990298248574263,
            "log_trades": 0.45352861119851295,
            "log_turnover": 0.4522277478602372,
            "neg_spread": 0.462512578164732,
            "neg_amihud": 0.3374776232172695,
            "neg_vol": 0.11385106788874369
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
          "peer_median_adv": 256867.9925,
          "peer_median_score_pca": 49.16472416472416,
          "peer_median_trades": 17.5,
          "peer_median_volatility": 0.6653072708167329,
          "peer_median_spread_pct": 0.026945781623217306,
          "peer_median_spread_ticks": 3.4468461254507767,
          "peer_median_amihud": 5.07841432537706e-08,
          "peer_median_turnover_ratio": 0.00025330762850816395,
          "target_vs_peer": {
            "score_pca_delta": 4.68,
            "adv_delta_pct": 14.0,
            "trades_delta_pct": 48.57,
            "volatility_delta_pct": 37.02,
            "spread_pct_delta_pct": 23.4,
            "spread_ticks_delta_pct": -33.4,
            "amihud_delta_pct": 37.58,
            "turnover_ratio_delta_pct": 76.32
          }
        },
        "peer_liquidity": [
          {
            "ticker": "480",
            "score_pca": 53.84615384615385,
            "rank_pca": 1189,
            "adv": 292729.6,
            "trades": 26.0,
            "volatility": 0.4189828248283659,
            "spread_pct": 0.020639733525286214,
            "spread_ticks": 2.295595194757918,
            "amihud": 3.169979365547644e-08,
            "turnover_ratio": 0.0004466321347939934,
            "is_target": true
          },
          {
            "ticker": "563",
            "score_pca": 55.516705516705514,
            "rank_pca": 1146,
            "adv": 354254.0,
            "trades": 22.0,
            "volatility": 0.4277220312435597,
            "spread_pct": 0.01878841340401667,
            "spread_ticks": 1.160246913580247,
            "amihud": 2.203007590022042e-08,
            "turnover_ratio": 0.0008283733935362174,
            "is_target": false
          },
          {
            "ticker": "95",
            "score_pca": 57.692307692307686,
            "rank_pca": 1090,
            "adv": 514435.00000000006,
            "trades": 48.0,
            "volatility": 0.8652447258096247,
            "spread_pct": 0.029040238623942942,
            "spread_ticks": 2.0365493937586963,
            "amihud": 4.341780692186211e-08,
            "turnover_ratio": 0.0021813829261806555,
            "is_target": false
          },
          {
            "ticker": "35",
            "score_pca": 56.138306138306135,
            "rank_pca": 1130,
            "adv": 349355.985,
            "trades": 34.0,
            "volatility": 0.3685714631040811,
            "spread_pct": 0.01700834076406607,
            "spread_ticks": 1.3348351648351648,
            "amihud": 2.2912793376374572e-08,
            "turnover_ratio": 0.0003681636632969422,
            "is_target": false
          },
          {
            "ticker": "1570",
            "score_pca": 22.02797202797203,
            "rank_pca": 2008,
            "adv": 141135.0,
            "trades": 6.5,
            "volatility": 1.6634012836098804,
            "spread_pct": 0.10922306938602626,
            "spread_ticks": 34.476190476190474,
            "amihud": 9.405529000006186e-08,
            "turnover_ratio": 0.00013511229350966634,
            "is_target": false
          },
          {
            "ticker": "1321",
            "score_pca": 22.61072261072261,
            "rank_pca": 1993,
            "adv": 33735.0,
            "trades": 6.5,
            "volatility": 0.9045765303938381,
            "spread_pct": 0.09092862453988036,
            "spread_ticks": 5.748206599713056,
            "amihud": 5.336094354143572e-07,
            "turnover_ratio": 0.0001006840480030019,
            "is_target": false
          },
          {
            "ticker": "978",
            "score_pca": 45.84304584304584,
            "rank_pca": 1395,
            "adv": 164380.0,
            "trades": 13.0,
            "volatility": 0.35459444273994833,
            "spread_pct": 0.0242990016508149,
            "spread_ticks": 1.3775681341719077,
            "amihud": 5.8150479585679084e-08,
            "turnover_ratio": 0.00012089068850704619,
            "is_target": false
          },
          {
            "ticker": "369",
            "score_pca": 41.60839160839161,
            "rank_pca": 1504,
            "adv": 110110.0,
            "trades": 6.0,
            "volatility": 0.46536981582384096,
            "spread_pct": 0.024851324622491667,
            "spread_ticks": 4.857142857142857,
            "amihud": 7.655041938694064e-08,
            "turnover_ratio": 0.00013845159371938574,
            "is_target": false
          },
          {
            "ticker": "542",
            "score_pca": 52.48640248640248,
            "rank_pca": 1224,
            "adv": 995900.0,
            "trades": 34.0,
            "volatility": 0.8933425236769659,
            "spread_pct": 0.04619694957324808,
            "spread_ticks": 5.4491525423728815,
            "amihud": 3.640541427051249e-08,
            "turnover_ratio": 0.0015248454895982703,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Property Development",
          "sector_count": 118,
          "market_count": 2574,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7392811363447659,
              "median": 0.5981546596018028,
              "min": 0.0,
              "max": 33.69284958669689,
              "p5": 0.22530761419840245,
              "p95": 1.5551236721277741,
              "count": 2574
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 56751878.340000205,
              "median": 221248.3125,
              "min": 0.0,
              "max": 11530530000.0,
              "p5": 0.0,
              "p95": 211998477.29999983,
              "count": 2574
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04197546340436465,
              "median": 0.02664491311247985,
              "min": 0.000558678699550006,
              "max": 0.6003953685399606,
              "p5": 0.001386836666578392,
              "p95": 0.13589358247871558,
              "count": 2574
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003679889452205205,
              "median": 0.0008690629810280508,
              "min": 0.0,
              "max": 0.18632,
              "p5": 0.0,
              "p95": 0.014621663938525271,
              "count": 2553
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.369212064410586e-07,
              "median": 4.6009826461052226e-08,
              "min": 0.0,
              "max": 4.7054394880481924e-05,
              "p5": 4.9617717549704375e-11,
              "p95": 3.4747662267446528e-06,
              "count": 2574
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1040.1926961926963,
              "median": 21.0,
              "min": 0.0,
              "max": 93269.5,
              "p5": 0.0,
              "p95": 5605.64999999998,
              "count": 2574
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7931091104057915,
              "median": 0.6170913170589826,
              "min": 0.1657094957550727,
              "max": 10.565866100456889,
              "p5": 0.25836387505559616,
              "p95": 1.4719068193686173,
              "count": 118
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 23630713.407866504,
              "median": 117740.056,
              "min": 0.0,
              "max": 487273925.9,
              "p5": 0.0,
              "p95": 161909877.83624983,
              "count": 118
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04549369494802821,
              "median": 0.02869715257637133,
              "min": 0.0006606415221752384,
              "max": 0.22421261958702554,
              "p5": 0.0017328784557574467,
              "p95": 0.1423461345360169,
              "count": 118
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0019237866902383565,
              "median": 0.000493460034293795,
              "min": 0.0,
              "max": 0.016696763622878946,
              "p5": 0.0,
              "p95": 0.007596615841209645,
              "count": 116
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.133426109100972e-06,
              "median": 9.52749878982391e-08,
              "min": 0.0,
              "max": 1.9227589283310876e-05,
              "p5": 4.327512161086824e-11,
              "p95": 7.104049490463078e-06,
              "count": 118
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 586.6355932203389,
              "median": 21.0,
              "min": 0.0,
              "max": 8474.0,
              "p5": 0.0,
              "p95": 3643.3499999999963,
              "count": 118
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 332913.123125,
              "median": 256867.9925,
              "min": 33735.0,
              "max": 995900.0,
              "p5": 60466.25,
              "p95": 827387.2499999998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 21.25,
              "median": 17.5,
              "min": 6.0,
              "max": 48.0,
              "p5": 6.175,
              "p95": 43.099999999999994,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7428528520502173,
              "median": 0.6653072708167329,
              "min": 0.35459444273994833,
              "max": 1.6634012836098804,
              "p5": 0.35948639986739483,
              "p95": 1.3978126199842653,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04504199532056087,
              "median": 0.026945781623217306,
              "min": 0.01700834076406607,
              "max": 0.10922306938602626,
              "p5": 0.01763136618804878,
              "p95": 0.10282001368987519,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 7.05498651022066,
              "median": 3.4468461254507767,
              "min": 1.160246913580247,
              "max": 34.476190476190474,
              "p5": 1.2213528015194681,
              "p95": 24.421396119423363,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.1089146435700104e-07,
              "median": 5.07841432537706e-08,
              "min": 2.203007590022042e-08,
              "max": 5.336094354143572e-07,
              "p5": 2.2339027016874373e-08,
              "p95": 3.797654845193536e-07,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0006747380120438981,
              "median": 0.00025330762850816395,
              "min": 0.0001006840480030019,
              "max": 0.0021813829261806555,
              "p5": 0.0001077563721794174,
              "p95": 0.0019515948233768204,
              "count": 8
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": 0.20408163265306012,
            "market": 0.11289080174108235,
            "sector": -0.12629476847430543,
            "peers": -0.14459551543417382,
            "vs_market": 0.09119083091197777,
            "vs_sector": 0.33037640112736555,
            "vs_peers": 0.34867714808723393
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Liquidity looks weaker today because the spread is 52.6% above the one-month average and the bid side is lighter, which makes immediate access less reliable.",
        "market_comparison": "Return 0.0% vs peers 0.6%."
      },
      "30d": {
        "liquidity": "Liquidity is average over the past month, with a 3-tick spread and enough activity to keep access workable rather than strong.",
        "market_comparison": "The stock was flat over one month while peers fell 7.5%, which matters because relative resilience can help keep participation steadier."
      },
      "3m": {
        "liquidity": "3M score 52.3 vs peer median 49.3 (+3.0 pts).",
        "market_comparison": "Return 9.3% vs peers -1.8%."
      },
      "6m": {
        "liquidity": "Liquidity is average with a modest edge for its size over six months, as the score of 53.8 sits above the 49.2 peer median.",
        "market_comparison": "The stock rose 20.4% over six months while peers fell 14.5%, which matters because stronger relative performance can help sustain access over time."
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
          "median": 0.4944963307634776,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "49.4%",
          "display_range": null,
          "display_text": "49.4%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 49.4,
          "plain_english": "Market explains about 49.4% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.3106450007513275,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "31.1%",
          "display_range": null,
          "display_text": "31.1%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 31.1,
          "plain_english": "Sector explains about 31.1% of price moves in the current state."
        },
        "company_share": {
          "median": 0.1948586684851949,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "19.5%",
          "display_range": null,
          "display_text": "19.5%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 19.5,
          "plain_english": "Company-specific explains about 19.5% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": -4.395144864207158,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-4.40",
          "display_range": null,
          "display_text": "-4.40",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Very high",
          "plain_english": "Very high market link: a 1% market move has lined up with about a 4.40% stock move in the opposite direction in this state.",
          "value_num": -4.4
        },
        "beta_stock_lag": {
          "median": -4.557715750834855,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-4.56",
          "display_range": null,
          "display_text": "-4.56",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -4.56
        },
        "beta_sector": {
          "median": 2.715287880779414,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "2.72",
          "display_range": null,
          "display_text": "2.72",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "High",
          "plain_english": "High sector link: a 1% sector move has lined up with about a 2.72% stock move in the same direction in this state.",
          "value_num": 2.72
        },
        "beta_market_lag": {
          "median": -3.1372896984975296,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-3.14",
          "display_range": null,
          "display_text": "-3.14",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -3.14
        },
        "beta_sector_lag": {
          "median": 4.573881105502143,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "4.57",
          "display_range": null,
          "display_text": "4.57",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 4.57
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
          "period_label": "2025-03-24 to 2025-03-31",
          "n_obs": 6,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.6020617439651589,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "60.2%",
            "display_range": null,
            "display_text": "60.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
            "kind": "share_pct",
            "value_pct": 60.2,
            "plain_english": "Market explains about 60.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.6020617439651589,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "60.2%",
              "display_range": null,
              "display_text": "60.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 60.2,
              "plain_english": "Market explains about 60.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.33441270558297065,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "33.4%",
              "display_range": null,
              "display_text": "33.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 33.4,
              "plain_english": "Sector explains about 33.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.06352555045187065,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "6.4%",
              "display_range": null,
              "display_text": "6.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 6.4,
              "plain_english": "Company-specific explains about 6.4% of price moves in the current state."
            }
          },
          "summary": "Mar: Still clearly market-driven, though based on only 6 trading days."
        },
        {
          "month_key": "2025-04",
          "month_label": "April 2025",
          "month_short_label": "Apr",
          "period_label": "2025-04-01 to 2025-04-30",
          "n_obs": 19,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.36537950768014255,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "36.5%",
            "display_range": null,
            "display_text": "36.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
            "kind": "share_pct",
            "value_pct": 36.5,
            "plain_english": "Company-specific explains about 36.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3379199669606468,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "33.8%",
              "display_range": null,
              "display_text": "33.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 33.8,
              "plain_english": "Market explains about 33.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.29670052535921076,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "29.7%",
              "display_range": null,
              "display_text": "29.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 29.7,
              "plain_english": "Sector explains about 29.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.36537950768014255,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.5%",
              "display_range": null,
              "display_text": "36.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 36.5,
              "plain_english": "Company-specific explains about 36.5% of price moves in the current state."
            }
          },
          "summary": "Apr: Much more balanced across company, sector, and market factors."
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
            "median": 0.5259938891132181,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "52.6%",
            "display_range": null,
            "display_text": "52.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 52.6,
            "plain_english": "Company-specific explains about 52.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2500587613652111,
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
              "median": 0.22394734952157072,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "22.4%",
              "display_range": null,
              "display_text": "22.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 22.4,
              "plain_english": "Sector explains about 22.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5259938891132181,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.6%",
              "display_range": null,
              "display_text": "52.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 52.6,
              "plain_english": "Company-specific explains about 52.6% of price moves in the current state."
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
            "median": 0.4867855787214652,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "48.7%",
            "display_range": null,
            "display_text": "48.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 48.7,
            "plain_english": "Company-specific explains about 48.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3196912674764236,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "32.0%",
              "display_range": null,
              "display_text": "32.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 32.0,
              "plain_english": "Market explains about 32.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.19352315380211102,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "19.4%",
              "display_range": null,
              "display_text": "19.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 19.4,
              "plain_english": "Sector explains about 19.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4867855787214652,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.7%",
              "display_range": null,
              "display_text": "48.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 48.7,
              "plain_english": "Company-specific explains about 48.7% of price moves in the current state."
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
            "median": 0.44637465026164,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "44.6%",
            "display_range": null,
            "display_text": "44.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 44.6,
            "plain_english": "Company-specific explains about 44.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3440726698649524,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.4%",
              "display_range": null,
              "display_text": "34.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 34.4,
              "plain_english": "Market explains about 34.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.20955267987340748,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "21.0%",
              "display_range": null,
              "display_text": "21.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 21.0,
              "plain_english": "Sector explains about 21.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.44637465026164,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.6%",
              "display_range": null,
              "display_text": "44.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 44.6,
              "plain_english": "Company-specific explains about 44.6% of price moves in the current state."
            }
          },
          "summary": "Jul: More mixed, though company-driven still has the largest share."
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
            "median": 0.7302681249872573,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "73.0%",
            "display_range": null,
            "display_text": "73.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 73.0,
            "plain_english": "Company-specific explains about 73.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.06759686084426318,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "6.8%",
              "display_range": null,
              "display_text": "6.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 6.8,
              "plain_english": "Market explains about 6.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.20213501416847957,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.2%",
              "display_range": null,
              "display_text": "20.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 20.2,
              "plain_english": "Sector explains about 20.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.7302681249872573,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "73.0%",
              "display_range": null,
              "display_text": "73.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 73.0,
              "plain_english": "Company-specific explains about 73.0% of price moves in the current state."
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
            "median": 0.4323368021478223,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "43.2%",
            "display_range": null,
            "display_text": "43.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 43.2,
            "plain_english": "Company-specific explains about 43.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.40925261617862474,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "40.9%",
              "display_range": null,
              "display_text": "40.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 40.9,
              "plain_english": "Market explains about 40.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.15841058167355299,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "15.8%",
              "display_range": null,
              "display_text": "15.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 15.8,
              "plain_english": "Sector explains about 15.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4323368021478223,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "43.2%",
              "display_range": null,
              "display_text": "43.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 43.2,
              "plain_english": "Company-specific explains about 43.2% of price moves in the current state."
            }
          },
          "summary": "Sep: More mixed, though company-driven still has the largest share."
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
            "median": 0.6187306800739487,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "61.9%",
            "display_range": null,
            "display_text": "61.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 61.9,
            "plain_english": "Company-specific explains about 61.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.14511547541529096,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "14.5%",
              "display_range": null,
              "display_text": "14.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 14.5,
              "plain_english": "Market explains about 14.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.23615384451076032,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "23.6%",
              "display_range": null,
              "display_text": "23.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 23.6,
              "plain_english": "Sector explains about 23.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6187306800739487,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.9%",
              "display_range": null,
              "display_text": "61.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 61.9,
              "plain_english": "Company-specific explains about 61.9% of price moves in the current state."
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
            "median": 0.6125085723847217,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "61.3%",
            "display_range": null,
            "display_text": "61.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 61.3,
            "plain_english": "Company-specific explains about 61.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.22525313885892517,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "22.5%",
              "display_range": null,
              "display_text": "22.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 22.5,
              "plain_english": "Market explains about 22.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.16223828875635313,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "16.2%",
              "display_range": null,
              "display_text": "16.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 16.2,
              "plain_english": "Sector explains about 16.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6125085723847217,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.3%",
              "display_range": null,
              "display_text": "61.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 61.3,
              "plain_english": "Company-specific explains about 61.3% of price moves in the current state."
            }
          },
          "summary": "Nov: Still clearly company-driven."
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
            "median": 0.4931179499778209,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "49.3%",
            "display_range": null,
            "display_text": "49.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
            "kind": "share_pct",
            "value_pct": 49.3,
            "plain_english": "Sector explains about 49.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.1431502235785395,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "14.3%",
              "display_range": null,
              "display_text": "14.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 14.3,
              "plain_english": "Market explains about 14.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.4931179499778209,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "49.3%",
              "display_range": null,
              "display_text": "49.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 49.3,
              "plain_english": "Sector explains about 49.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3637318264436397,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.4%",
              "display_range": null,
              "display_text": "36.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 36.4,
              "plain_english": "Company-specific explains about 36.4% of price moves in the current state."
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
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5887173210783628,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "58.9%",
            "display_range": null,
            "display_text": "58.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 58.9,
            "plain_english": "Company-specific explains about 58.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3500216817597638,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "35.0%",
              "display_range": null,
              "display_text": "35.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 35.0,
              "plain_english": "Market explains about 35.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.06126099716187343,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "6.1%",
              "display_range": null,
              "display_text": "6.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 6.1,
              "plain_english": "Sector explains about 6.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5887173210783628,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "58.9%",
              "display_range": null,
              "display_text": "58.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 58.9,
              "plain_english": "Company-specific explains about 58.9% of price moves in the current state."
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
            "median": 0.5506880370224378,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "55.1%",
            "display_range": null,
            "display_text": "55.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
            "kind": "share_pct",
            "value_pct": 55.1,
            "plain_english": "Company-specific explains about 55.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.26607265140664454,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.6%",
              "display_range": null,
              "display_text": "26.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 26.6,
              "plain_english": "Market explains about 26.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.18323931157091755,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "18.3%",
              "display_range": null,
              "display_text": "18.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 18.3,
              "plain_english": "Sector explains about 18.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5506880370224378,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "55.1%",
              "display_range": null,
              "display_text": "55.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 55.1,
              "plain_english": "Company-specific explains about 55.1% of price moves in the current state."
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
            "median": 0.43061087809303594,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "43.1%",
            "display_range": null,
            "display_text": "43.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 43.1,
            "plain_english": "Company-specific explains about 43.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.21455062012591813,
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
              "median": 0.35483850178104587,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "35.5%",
              "display_range": null,
              "display_text": "35.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 35.5,
              "plain_english": "Sector explains about 35.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.43061087809303594,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "43.1%",
              "display_range": null,
              "display_text": "43.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 43.1,
              "plain_english": "Company-specific explains about 43.1% of price moves in the current state."
            }
          },
          "summary": "Mar: More mixed, though company-driven still has the largest share."
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-10",
          "n_obs": 5,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4944963307634776,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "49.4%",
            "display_range": null,
            "display_text": "49.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
            "kind": "share_pct",
            "value_pct": 49.4,
            "plain_english": "Market explains about 49.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.4944963307634776,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "49.4%",
              "display_range": null,
              "display_text": "49.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 49.4,
              "plain_english": "Market explains about 49.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3106450007513275,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "31.1%",
              "display_range": null,
              "display_text": "31.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 31.1,
              "plain_english": "Sector explains about 31.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.1948586684851949,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "19.5%",
              "display_range": null,
              "display_text": "19.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 19.5,
              "plain_english": "Company-specific explains about 19.5% of price moves in the current state."
            }
          },
          "summary": "Apr: Mostly market-driven, though based on only 5 trading days."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5020080321285141,
          "expected_duration_days": 10.416666666666666,
          "current_probability": 1.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.01572798931825276,
            "low": 0.01572798931825276,
            "high": 0.01572798931825276
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": null
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 10.333333333333334,
          "current_probability": 0.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.030180501360494424,
            "low": 0.030180501360494424,
            "high": 0.030180501360494424
          },
          "volatility_label": "High Volatility",
          "current_probability_display": 0.0
        }
      ],
      "transitions": {
        "mean": [
          [
            0.9112903225806451,
            0.08870967741935484
          ],
          [
            0.0967741935483871,
            0.9032258064516129
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            113.0,
            11.0
          ],
          [
            12.0,
            112.0
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
        "market_link_display": "-4.40",
        "sector_link_display": "2.72",
        "market_link_explainer": "Very high market link. A 1% market move has lined up with about a 4.40% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "High sector link. A 1% sector move has lined up with about a 2.72% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "-4.56",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "Low Volatility",
        "dominant_driver": "market",
        "dominant_driver_label": "Market",
        "driver_share_pct": 49.4,
        "driver_share_display": "49.4%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 251 trading days relative to the 252-day target.",
        "history_days": 251,
        "history_limited": true,
        "volatility_label": "Low Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.9112903225806451,
        "effective_days": 125.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 10.4 days.",
        "expected_duration_days": 10.4
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
          "expected_duration_days": 10.416666666666666,
          "current_probability": 1.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.01572798931825276,
            "low": 0.01572798931825276,
            "high": 0.01572798931825276
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 10.333333333333334,
          "current_probability": 0.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.030180501360494424,
            "low": 0.030180501360494424,
            "high": 0.030180501360494424
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.9112903225806451,
          0.08870967741935484
        ],
        [
          0.0967741935483871,
          0.9032258064516129
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.9112903225806451,
            0.08870967741935484
          ],
          [
            0.0967741935483871,
            0.9032258064516129
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            113.0,
            11.0
          ],
          [
            12.0,
            112.0
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
        "text": "Liquidity score: 53.8 — Moderate",
        "bg": "bg-amber-500/20",
        "textColor": "text-amber-400"
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
        "bg": "bg-red-500/20",
        "textColor": "text-red-400"
      },
      "short": {
        "text": "Short interest: N/A",
        "bg": "bg-amber-500/20",
        "textColor": "text-amber-400"
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
    "liq_subtitle": "Monthly liquidity is slightly above peers for the company’s size, but today’s setup is less supportive with a wider spread and lighter bid depth.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent share-price performance is mixed, holding flat over one month while peers fell and the market edged higher.",
    "perf_insight": "Performance is strong relative to comparison groups. Recent price performance is weaker than peers and the market, so the tape is not being cushioned by stronger momentum. Recent flow does not show a clear deterioration from the monthly baseline.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Broader market moves remain the main influence, with market factors explaining 49.4% of current trading.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly market-driven, accounting for about 49.4% of price changes. Other influences are sector 31.1%, and company-specific 19.5%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 49.4%, sector 31.1%, and company-specific 19.5%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has shifted from company-driven to market-driven over Feb to Apr."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 49.4%, sector 31.1%, and company-specific 19.5%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "That keeps the tape tied closely to wider market conditions, while the 3-tick spread and lighter bid depth point to a less forgiving trading setup on the day.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: market factors account for 49.4% of recent price moves.",
      "Monthly change: the pattern has shifted from mostly market in February to more mixed in March and mostly market-driven in April."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "The market backdrop is still the main frame for trading, but immediate execution conditions look thinner than the medium-term liquidity profile.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on Apr 10, 2025 to Apr 10, 2026 (237 trading days • 9,027 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on top 10 bid and top 10 ask levels.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is lighter than the monthly baseline, so day-to-day access may feel weaker than the 1M score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The order book is bid-light, with top-10 bid depth at 0.55x ask depth and a 3-tick spread. That leaves buy-side access looking weaker than the six-month liquidity score would suggest.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 39.2% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Near-term execution conditions are thinner than the broader liquidity profile.",
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
    "intraday_insight": "Today’s trading setup looks less supportive, with the spread 52.6% above the one-month average. Combined with top-10 bid depth at 0.55x ask depth, that points to weaker buy-side access on the day.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Current trading is being shaped more by market direction and displayed depth than by short activity.",
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
    "exec_subtitle": "Liquidity is mixed for the company’s size, with peer standing slightly above median but a thinner near-term setup.",
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
        "value": "53.8/100",
        "sub": "Peer median 49.2 (+4.7 pts)",
        "interp": {
          "text": "Moderate",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "HK$292.7K",
        "sub": "Peer median HK$256.9K",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "2.06%",
        "sub": "2.30 ticks; peers 2.69%",
        "interp": {
          "text": "Tighter",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity is mixed for the stock’s size, with structural access slightly ahead of peers but the current setup looking",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "1.165",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "2.58%",
        "note": "3.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.55x",
        "note": "Bid depth / ask depth on displayed top-10 levels",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-2.72% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-6.60% with 43.4% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-6.60% with 17.3% fill.",
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
        "value": "54",
        "suffix": "/100",
        "bar_pct": 54,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Rank 1189/2574",
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
        "value": "2.06",
        "suffix": "%",
        "bar_pct": 21,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "2.06% • 2.30 ticks vs peers 2.69%",
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
        "value": "292.7K",
        "value_prefix": "HK$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Peer median HK$256.9K",
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
        "value": "49.4",
        "suffix": "market",
        "bar_pct": 49,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Sector 31.1% • Company 19.5%",
        "interpretation": {
          "text": "Market",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Liquidity is mixed for the stock’s size, with a six-month score of 53.8 compared with a peer median of 49.2. That puts structural access slightly above peers without making the name stand out as clearly strong.",
      "Near-term execution is less supportive, with the one-day spread 52.6% above the one-month average. That means day-to-day trading can feel more expensive than the medium-term liquidity score implies.",
      "The displayed book is skewed to the offer, with top-10 bid depth at 0.55x ask depth and a 3-tick spread. That leaves immediate buy-side access looking thinner, while market factors still account for 49.4% of current trading.",
      "Recent price performance is weaker than peers and the market, with a one-month return of -0.0% compared with peers at -7.5% and the market at +0.6%. That leaves the tape without visible support from stronger momentum."
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
      "overall": "6M liquidity is mixed: score 53.8 vs peer median 49.2 (+4.7 pts). 1D spread up 52.6% from 1M. Recent flow does not show a clear deterioration from the monthly baseline.",
      "strengths": [
        "6M score 53.8 vs peer median 49.2 (+4.7 pts)."
      ],
      "concerns": [
        "1D spread up 52.6% from 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: +4.7 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is 20.4%, better than market, sector, and peers, which suggests stronger price performance than comparable names.",
        "vs_market": "Better than market: 20.4% vs market 11.3%.",
        "vs_sector": "Better than sector: 20.4% vs sector -12.6%.",
        "vs_peers": "Better than peers: 20.4% vs peers -14.5%."
      },
      "adv": {
        "insight": "ADV is HK$292.7K, better than market, sector, and peers, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: HK$292.7K vs market HK$221.2K.",
        "vs_sector": "Better than sector: HK$292.7K vs sector HK$117.7K.",
        "vs_peers": "Better than peers: HK$292.7K vs peers HK$256.9K."
      },
      "spread": {
        "insight": "Spread is 2.06%, better than market, sector, and peers, which keeps trading costs more competitive than comparable names.",
        "vs_market": "Better than market: 2.06% vs market 2.66%.",
        "vs_sector": "Better than sector: 2.06% vs secto%.",
        "vs_peers": "Better than peers: 2.06% vs peers 2.69%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.04%, better than peers, but worse than market, which shows turnover is mixed across comparison groups.",
        "vs_market": "Worse than market: 0.04% vs market 0.09%.",
        "vs_sector": "In line with sector: 0.04% vs sector 0.05%.",
        "vs_peers": "Better than peers: 0.04% vs peers 0.03%."
      },
      "volatility": {
        "insight": "Volatility is 41.90%, better than market, sector, and peers, which suggests day-to-day price swings are more contained than comparable names.",
        "vs_market": "Better than market: 41.90% vs market 59.82%.",
        "vs_sector": "Better than sector: 41.90% vs sector 61.71%.",
        "vs_peers": "Better than peers: 41.90% vs peers 66.53%."
      },
      "trades": {
        "insight": "Trades is 26, better than market, sector, and peers, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 26 vs market 21.",
        "vs_sector": "Better than sector: 26 vs secto.",
        "vs_peers": "Better than peers: 26 vs peers 18."
      },
      "amihud": {
        "insight": "Price impact is 3.17e-08, better than market, sector, and peers, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 3.17e-08 vs market 4.60e-08.",
        "vs_sector": "Better than sector: 3.17e-08 vs sector 9.53e-08.",
        "vs_peers": "Better than peers: 3.17e-08 vs peers 5.08e-08."
      }
    },
    "performance": {
      "overall": "Performance is strong relative to comparison groups. Recent price performance is weaker than peers and the market, so the tape is not being cushioned by stronger momentum. Recent flow does not show a clear deterioration from the monthly baseline.",
      "conclusion": "Performance is strong relative to comparison groups."
    },
    "drivers": {
      "overall": "The main force now is the market, which accounts for 49.4% of recent price moves. That means the stock is currently taking more of its cue from broader conditions than from company-specific news, which can make trading feel more tied to the tape.",
      "beta": "This market-led pattern matters more because trading quality is a little less supportive right now. The 1D spread is 52.6% above the 1M average, so even with a reasonable longer-term liquidity score relative to peers, day-to-day execution can feel less smooth.",
      "rolling_change": "Feb: mostly market. | Mar: More mixed, though company-driven still has the largest share. | Apr: Mostly market-driven, though based on only 5 trading days."
    },
    "regime": {
      "overall": "The market is in a calmer state that usually lasts around 10.4 days, which supports a steadier backdrop. That matters because a more settled tape can still feel uneven when spreads widen and displayed buy-side depth is lighter.",
      "current": "Low volatility is in place now, pointing to a calmer trading backdrop than a high-volatility phase.",
      "transitions": "This state looks reasonably persistent because its typical run length is about 10.4 days, though the 1D spread is 52.6% above the 1M level so conditions can still shift day to day.",
      "trading_implications": "Trading conditions look broadly stable rather than stressed, but a 3-tick spread and top-10 bid depth at 0.55x ask depth make immediacy feel thinner on the buy side."
    },
    "execution": {
      "overall": "The current book looks bid-light rather than balanced, because top-10 bid depth is only 0.55x of ask depth and the spread is 3 ticks. That points to thinner immediate buy-side liquidity even though the broader liquidity profile is not weak.",
      "concern": "The clearest stress point is the buy-side imbalance, with bid depth well below ask depth, and that is reinforced by the 1D spread sitting 52.6% above the 1M",
      "peer_context": "The broader standing still looks reasonable, with a 6M liquidity score of 53.8 compared with a peer median of 49.2, but the displayed book does not fully match that relative strength today. The current setup suggests peer-relative liquidity is being offset by weaker immediate depth on the bid side."
    },
    "trader_composition": {
      "overall": "By trade count and value, flow looks mainly institution-like.",
      "retail_heavy": "Institution-like trades account for 34.2% of trade count and 53.4% of trade value, compared with retail-like at 8.4% of count and 1.1% of value. That gap shows the tape is being driven more by larger-value participation than by high counts of small trades.",
      "institutional_gap": "The read is directionally clear, although 16.7% of trade count is ambiguous or unclear, which leaves some noise in the mix.",
      "peer_comparison": "Relative to peers, the mix stands out as more institution-like than retail-led, which supports a steadier flow profile."
    },
    "price_moving": {
      "overall": "Price-moving activity is meaningful, with 39.2% of total trades moving price. The signal is mixed rather than fully clean because 16.7% of trade count is ambiguous or unclear. That means price formation is active, but not all of it can be tied neatly to one trader type. Price-moving flow is active enough to matter for execution quality, especially with a 3-tick spread and lighter bid depth than ask depth.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short-selling data is unavailable for this report.",
      "level": "N/A",
      "correlation": "N/A",
      "trend": "There is no clear sign that short activity is becoming a separate pressure point. Recent trading conditions look more affected by wider spreads and lighter bid depth, while the stock has been broadly flat over one month compared with peers down 7.5%, so the broader picture is still driven more by market trading conditions than by short pressure.",
      "peaks": "N/A"
    },
    "intraday": {
      "overall": "Liquidity appears during the continuous session rather than at the open or close, with 98.6% of activity in continuous trading. That makes access look more available through the day than dependent on auction windows.",
      "hhi_interpretation": "Ambiguous or unclear flow is 16.7% of trade count, so the read is not fully clean.",
      "best_times": "The continuous session is the clearest source of liquidity, while the open at 0.0% and close at 1.3% contribute little to total activity. That matters because trading access is tied to the main session rather than to brief auction periods.",
      "peer_ranking": "Compared with peers, the intraday profile looks more anchored in continuous trading, which is typically a steadier base for liquidity."
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
        "480",
        "563",
        "95",
        "35",
        "1570",
        "1321",
        "978",
        "369",
        "542"
      ],
      "scores": [
        53.84615384615385,
        55.516705516705514,
        57.692307692307686,
        56.138306138306135,
        22.02797202797203,
        22.61072261072261,
        45.84304584304584,
        41.60839160839161,
        52.48640248640248
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
        292729.6,
        354254.0,
        514435.00000000006,
        349355.985,
        141135.0,
        33735.0,
        164380.0,
        110110.0,
        995900.0
      ],
      "total": 2574
    },
    "market_comparison": {
      "sector_name": "Property Development",
      "sector_count": 118,
      "market_count": 2574,
      "company": {
        "volatility": 0.4189828248283659,
        "adv": 292729.6,
        "spread_pct": 0.020639733525286214,
        "turnover_ratio": 0.0004466321347939934,
        "amihud": 3.169979365547644e-08,
        "trades": 26.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.7392811363447659,
          "median": 0.5981546596018028,
          "min": 0.0,
          "max": 33.69284958669689,
          "p5": 0.22530761419840245,
          "p95": 1.5551236721277741,
          "count": 2574
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 56751878.340000205,
          "median": 221248.3125,
          "min": 0.0,
          "max": 11530530000.0,
          "p5": 0.0,
          "p95": 211998477.29999983,
          "count": 2574
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.04197546340436465,
          "median": 0.02664491311247985,
          "min": 0.000558678699550006,
          "max": 0.6003953685399606,
          "p5": 0.001386836666578392,
          "p95": 0.13589358247871558,
          "count": 2574
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.003679889452205205,
          "median": 0.0008690629810280508,
          "min": 0.0,
          "max": 0.18632,
          "p5": 0.0,
          "p95": 0.014621663938525271,
          "count": 2553
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 6.369212064410586e-07,
          "median": 4.6009826461052226e-08,
          "min": 0.0,
          "max": 4.7054394880481924e-05,
          "p5": 4.9617717549704375e-11,
          "p95": 3.4747662267446528e-06,
          "count": 2574
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1040.1926961926963,
          "median": 21.0,
          "min": 0.0,
          "max": 93269.5,
          "p5": 0.0,
          "p95": 5605.64999999998,
          "count": 2574
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.7931091104057915,
          "median": 0.6170913170589826,
          "min": 0.1657094957550727,
          "max": 10.565866100456889,
          "p5": 0.25836387505559616,
          "p95": 1.4719068193686173,
          "count": 118
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 23630713.407866504,
          "median": 117740.056,
          "min": 0.0,
          "max": 487273925.9,
          "p5": 0.0,
          "p95": 161909877.83624983,
          "count": 118
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.04549369494802821,
          "median": 0.02869715257637133,
          "min": 0.0006606415221752384,
          "max": 0.22421261958702554,
          "p5": 0.0017328784557574467,
          "p95": 0.1423461345360169,
          "count": 118
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0019237866902383565,
          "median": 0.000493460034293795,
          "min": 0.0,
          "max": 0.016696763622878946,
          "p5": 0.0,
          "p95": 0.007596615841209645,
          "count": 116
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.133426109100972e-06,
          "median": 9.52749878982391e-08,
          "min": 0.0,
          "max": 1.9227589283310876e-05,
          "p5": 4.327512161086824e-11,
          "p95": 7.104049490463078e-06,
          "count": 118
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 586.6355932203389,
          "median": 21.0,
          "min": 0.0,
          "max": 8474.0,
          "p5": 0.0,
          "p95": 3643.3499999999963,
          "count": 118
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 332913.123125,
          "median": 256867.9925,
          "min": 33735.0,
          "max": 995900.0,
          "p5": 60466.25,
          "p95": 827387.2499999998,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 21.25,
          "median": 17.5,
          "min": 6.0,
          "max": 48.0,
          "p5": 6.175,
          "p95": 43.099999999999994,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.7428528520502173,
          "median": 0.6653072708167329,
          "min": 0.35459444273994833,
          "max": 1.6634012836098804,
          "p5": 0.35948639986739483,
          "p95": 1.3978126199842653,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.04504199532056087,
          "median": 0.026945781623217306,
          "min": 0.01700834076406607,
          "max": 0.10922306938602626,
          "p5": 0.01763136618804878,
          "p95": 0.10282001368987519,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 7.05498651022066,
          "median": 3.4468461254507767,
          "min": 1.160246913580247,
          "max": 34.476190476190474,
          "p5": 1.2213528015194681,
          "p95": 24.421396119423363,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.1089146435700104e-07,
          "median": 5.07841432537706e-08,
          "min": 2.203007590022042e-08,
          "max": 5.336094354143572e-07,
          "p5": 2.2339027016874373e-08,
          "p95": 3.797654845193536e-07,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0006747380120438981,
          "median": 0.00025330762850816395,
          "min": 0.0001006840480030019,
          "max": 0.0021813829261806555,
          "p5": 0.0001077563721794174,
          "p95": 0.0019515948233768204,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": -2.220446049250313e-16,
        "market": 0.005817570896814672,
        "sector": -0.0250845348570794,
        "peers": -0.07496576479031758
      },
      {
        "horizon": "3M",
        "stock": 0.0925925925925919,
        "market": 0.07151156981189555,
        "sector": -0.032529958558431216,
        "peers": -0.018140218405615638
      },
      {
        "horizon": "6M",
        "stock": 0.20408163265306012,
        "market": 0.11289080174108235,
        "sector": -0.12629476847430543,
        "peers": -0.14459551543417382
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
      "share_market": 0.4944963307634776,
      "share_sector": 0.3106450007513275,
      "share_idio": 0.1948586684851949,
      "beta_market": -4.395144864207158,
      "beta_sector": 2.715287880779414,
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
            "median": 0.4944963307634776,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "49.4%",
            "display_range": null,
            "display_text": "49.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 49.4,
            "plain_english": "Market explains about 49.4% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.3106450007513275,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "31.1%",
            "display_range": null,
            "display_text": "31.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 31.1,
            "plain_english": "Sector explains about 31.1% of price moves in the current state."
          },
          "company_share": {
            "median": 0.1948586684851949,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "19.5%",
            "display_range": null,
            "display_text": "19.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 19.5,
            "plain_english": "Company-specific explains about 19.5% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": -4.395144864207158,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-4.40",
            "display_range": null,
            "display_text": "-4.40",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Very high",
            "plain_english": "Very high market link: a 1% market move has lined up with about a 4.40% stock move in the opposite direction in this state.",
            "value_num": -4.4
          },
          "beta_stock_lag": {
            "median": -4.557715750834855,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-4.56",
            "display_range": null,
            "display_text": "-4.56",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -4.56
          },
          "beta_sector": {
            "median": 2.715287880779414,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "2.72",
            "display_range": null,
            "display_text": "2.72",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "High",
            "plain_english": "High sector link: a 1% sector move has lined up with about a 2.72% stock move in the same direction in this state.",
            "value_num": 2.72
          },
          "beta_market_lag": {
            "median": -3.1372896984975296,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-3.14",
            "display_range": null,
            "display_text": "-3.14",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -3.14
          },
          "beta_sector_lag": {
            "median": 4.573881105502143,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "4.57",
            "display_range": null,
            "display_text": "4.57",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 4.57
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
            "period_label": "2025-03-24 to 2025-03-31",
            "n_obs": 6,
            "partial_month": true,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.6020617439651589,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "60.2%",
              "display_range": null,
              "display_text": "60.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 60.2,
              "plain_english": "Market explains about 60.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.6020617439651589,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "60.2%",
                "display_range": null,
                "display_text": "60.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 60.2,
                "plain_english": "Market explains about 60.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.33441270558297065,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "33.4%",
                "display_range": null,
                "display_text": "33.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 33.4,
                "plain_english": "Sector explains about 33.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.06352555045187065,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "6.4%",
                "display_range": null,
                "display_text": "6.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 6.4,
                "plain_english": "Company-specific explains about 6.4% of price moves in the current state."
              }
            },
            "summary": "Mar: Still clearly market-driven, though based on only 6 trading days."
          },
          {
            "month_key": "2025-04",
            "month_label": "April 2025",
            "month_short_label": "Apr",
            "period_label": "2025-04-01 to 2025-04-30",
            "n_obs": 19,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.36537950768014255,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.5%",
              "display_range": null,
              "display_text": "36.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 36.5,
              "plain_english": "Company-specific explains about 36.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3379199669606468,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "33.8%",
                "display_range": null,
                "display_text": "33.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 33.8,
                "plain_english": "Market explains about 33.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.29670052535921076,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "29.7%",
                "display_range": null,
                "display_text": "29.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 29.7,
                "plain_english": "Sector explains about 29.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.36537950768014255,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "36.5%",
                "display_range": null,
                "display_text": "36.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 36.5,
                "plain_english": "Company-specific explains about 36.5% of price moves in the current state."
              }
            },
            "summary": "Apr: Much more balanced across company, sector, and market factors."
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
              "median": 0.5259938891132181,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.6%",
              "display_range": null,
              "display_text": "52.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 52.6,
              "plain_english": "Company-specific explains about 52.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2500587613652111,
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
                "median": 0.22394734952157072,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "22.4%",
                "display_range": null,
                "display_text": "22.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 22.4,
                "plain_english": "Sector explains about 22.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5259938891132181,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "52.6%",
                "display_range": null,
                "display_text": "52.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 52.6,
                "plain_english": "Company-specific explains about 52.6% of price moves in the current state."
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
              "median": 0.4867855787214652,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.7%",
              "display_range": null,
              "display_text": "48.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 48.7,
              "plain_english": "Company-specific explains about 48.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3196912674764236,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "32.0%",
                "display_range": null,
                "display_text": "32.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 32.0,
                "plain_english": "Market explains about 32.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.19352315380211102,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "19.4%",
                "display_range": null,
                "display_text": "19.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 19.4,
                "plain_english": "Sector explains about 19.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4867855787214652,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "48.7%",
                "display_range": null,
                "display_text": "48.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 48.7,
                "plain_english": "Company-specific explains about 48.7% of price moves in the current state."
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
              "median": 0.44637465026164,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.6%",
              "display_range": null,
              "display_text": "44.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 44.6,
              "plain_english": "Company-specific explains about 44.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3440726698649524,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "34.4%",
                "display_range": null,
                "display_text": "34.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 34.4,
                "plain_english": "Market explains about 34.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.20955267987340748,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "21.0%",
                "display_range": null,
                "display_text": "21.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 21.0,
                "plain_english": "Sector explains about 21.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.44637465026164,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "44.6%",
                "display_range": null,
                "display_text": "44.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 44.6,
                "plain_english": "Company-specific explains about 44.6% of price moves in the current state."
              }
            },
            "summary": "Jul: More mixed, though company-driven still has the largest share."
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
              "median": 0.7302681249872573,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "73.0%",
              "display_range": null,
              "display_text": "73.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 73.0,
              "plain_english": "Company-specific explains about 73.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.06759686084426318,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "6.8%",
                "display_range": null,
                "display_text": "6.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 6.8,
                "plain_english": "Market explains about 6.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.20213501416847957,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.2%",
                "display_range": null,
                "display_text": "20.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 20.2,
                "plain_english": "Sector explains about 20.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.7302681249872573,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "73.0%",
                "display_range": null,
                "display_text": "73.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 73.0,
                "plain_english": "Company-specific explains about 73.0% of price moves in the current state."
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
              "median": 0.4323368021478223,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "43.2%",
              "display_range": null,
              "display_text": "43.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 43.2,
              "plain_english": "Company-specific explains about 43.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.40925261617862474,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "40.9%",
                "display_range": null,
                "display_text": "40.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 40.9,
                "plain_english": "Market explains about 40.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.15841058167355299,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "15.8%",
                "display_range": null,
                "display_text": "15.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 15.8,
                "plain_english": "Sector explains about 15.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4323368021478223,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "43.2%",
                "display_range": null,
                "display_text": "43.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 43.2,
                "plain_english": "Company-specific explains about 43.2% of price moves in the current state."
              }
            },
            "summary": "Sep: More mixed, though company-driven still has the largest share."
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
              "median": 0.6187306800739487,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.9%",
              "display_range": null,
              "display_text": "61.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 61.9,
              "plain_english": "Company-specific explains about 61.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.14511547541529096,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "14.5%",
                "display_range": null,
                "display_text": "14.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 14.5,
                "plain_english": "Market explains about 14.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.23615384451076032,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "23.6%",
                "display_range": null,
                "display_text": "23.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 23.6,
                "plain_english": "Sector explains about 23.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6187306800739487,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "61.9%",
                "display_range": null,
                "display_text": "61.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 61.9,
                "plain_english": "Company-specific explains about 61.9% of price moves in the current state."
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
              "median": 0.6125085723847217,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.3%",
              "display_range": null,
              "display_text": "61.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 61.3,
              "plain_english": "Company-specific explains about 61.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.22525313885892517,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "22.5%",
                "display_range": null,
                "display_text": "22.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 22.5,
                "plain_english": "Market explains about 22.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.16223828875635313,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "16.2%",
                "display_range": null,
                "display_text": "16.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 16.2,
                "plain_english": "Sector explains about 16.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6125085723847217,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "61.3%",
                "display_range": null,
                "display_text": "61.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 61.3,
                "plain_english": "Company-specific explains about 61.3% of price moves in the current state."
              }
            },
            "summary": "Nov: Still clearly company-driven."
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
              "median": 0.4931179499778209,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "49.3%",
              "display_range": null,
              "display_text": "49.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 49.3,
              "plain_english": "Sector explains about 49.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.1431502235785395,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "14.3%",
                "display_range": null,
                "display_text": "14.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 14.3,
                "plain_english": "Market explains about 14.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.4931179499778209,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "49.3%",
                "display_range": null,
                "display_text": "49.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 49.3,
                "plain_english": "Sector explains about 49.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3637318264436397,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "36.4%",
                "display_range": null,
                "display_text": "36.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 36.4,
                "plain_english": "Company-specific explains about 36.4% of price moves in the current state."
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
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5887173210783628,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "58.9%",
              "display_range": null,
              "display_text": "58.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 58.9,
              "plain_english": "Company-specific explains about 58.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3500216817597638,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "35.0%",
                "display_range": null,
                "display_text": "35.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 35.0,
                "plain_english": "Market explains about 35.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.06126099716187343,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "6.1%",
                "display_range": null,
                "display_text": "6.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 6.1,
                "plain_english": "Sector explains about 6.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5887173210783628,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "58.9%",
                "display_range": null,
                "display_text": "58.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 58.9,
                "plain_english": "Company-specific explains about 58.9% of price moves in the current state."
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
              "median": 0.5506880370224378,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "55.1%",
              "display_range": null,
              "display_text": "55.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 55.1,
              "plain_english": "Company-specific explains about 55.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.26607265140664454,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.6%",
                "display_range": null,
                "display_text": "26.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 26.6,
                "plain_english": "Market explains about 26.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.18323931157091755,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "18.3%",
                "display_range": null,
                "display_text": "18.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 18.3,
                "plain_english": "Sector explains about 18.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5506880370224378,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "55.1%",
                "display_range": null,
                "display_text": "55.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 55.1,
                "plain_english": "Company-specific explains about 55.1% of price moves in the current state."
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
              "median": 0.43061087809303594,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "43.1%",
              "display_range": null,
              "display_text": "43.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 43.1,
              "plain_english": "Company-specific explains about 43.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.21455062012591813,
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
                "median": 0.35483850178104587,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "35.5%",
                "display_range": null,
                "display_text": "35.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 35.5,
                "plain_english": "Sector explains about 35.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.43061087809303594,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "43.1%",
                "display_range": null,
                "display_text": "43.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 43.1,
                "plain_english": "Company-specific explains about 43.1% of price moves in the current state."
              }
            },
            "summary": "Mar: More mixed, though company-driven still has the largest share."
          },
          {
            "month_key": "2026-04",
            "month_label": "April 2026",
            "month_short_label": "Apr",
            "period_label": "2026-04-01 to 2026-04-10",
            "n_obs": 5,
            "partial_month": false,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4944963307634776,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "49.4%",
              "display_range": null,
              "display_text": "49.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 49.4,
              "plain_english": "Market explains about 49.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.4944963307634776,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "49.4%",
                "display_range": null,
                "display_text": "49.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 49.4,
                "plain_english": "Market explains about 49.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3106450007513275,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "31.1%",
                "display_range": null,
                "display_text": "31.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 31.1,
                "plain_english": "Sector explains about 31.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.1948586684851949,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "19.5%",
                "display_range": null,
                "display_text": "19.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 19.5,
                "plain_english": "Company-specific explains about 19.5% of price moves in the current state."
              }
            },
            "summary": "Apr: Mostly market-driven, though based on only 5 trading days."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5020080321285141,
            "expected_duration_days": 10.416666666666666,
            "current_probability": 1.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.01572798931825276,
              "low": 0.01572798931825276,
              "high": 0.01572798931825276
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": null
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 10.333333333333334,
            "current_probability": 0.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.030180501360494424,
              "low": 0.030180501360494424,
              "high": 0.030180501360494424
            },
            "volatility_label": "High Volatility",
            "current_probability_display": 0.0
          }
        ],
        "transitions": {
          "mean": [
            [
              0.9112903225806451,
              0.08870967741935484
            ],
            [
              0.0967741935483871,
              0.9032258064516129
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              113.0,
              11.0
            ],
            [
              12.0,
              112.0
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
          "market_link_display": "-4.40",
          "sector_link_display": "2.72",
          "market_link_explainer": "Very high market link. A 1% market move has lined up with about a 4.40% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "High sector link. A 1% sector move has lined up with about a 2.72% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "-4.56",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "Low Volatility",
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "driver_share_pct": 49.4,
          "driver_share_display": "49.4%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 251 trading days relative to the 252-day target.",
          "history_days": 251,
          "history_limited": true,
          "volatility_label": "Low Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.9112903225806451,
          "effective_days": 125.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 10.4 days.",
          "expected_duration_days": 10.4
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
          "period_label": "2025-03-24 to 2025-03-31",
          "n_obs": 6,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Mar: Still clearly market-driven, though based on only 6 trading days.",
          "share_market": 0.6020617439651589,
          "share_sector": 0.33441270558297065,
          "share_company": 0.06352555045187065,
          "share_market_display": "60.2%",
          "share_sector_display": "33.4%",
          "share_company_display": "6.4%",
          "dominant_share_display": "60.2%"
        },
        {
          "month_key": "2025-04",
          "month_label": "April 2025",
          "month_short_label": "Apr",
          "period_label": "2025-04-01 to 2025-04-30",
          "n_obs": 19,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Apr: Much more balanced across company, sector, and market factors.",
          "share_market": 0.3379199669606468,
          "share_sector": 0.29670052535921076,
          "share_company": 0.36537950768014255,
          "share_market_display": "33.8%",
          "share_sector_display": "29.7%",
          "share_company_display": "36.5%",
          "dominant_share_display": "36.5%"
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
          "share_market": 0.2500587613652111,
          "share_sector": 0.22394734952157072,
          "share_company": 0.5259938891132181,
          "share_market_display": "25.0%",
          "share_sector_display": "22.4%",
          "share_company_display": "52.6%",
          "dominant_share_display": "52.6%"
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
          "share_market": 0.3196912674764236,
          "share_sector": 0.19352315380211102,
          "share_company": 0.4867855787214652,
          "share_market_display": "32.0%",
          "share_sector_display": "19.4%",
          "share_company_display": "48.7%",
          "dominant_share_display": "48.7%"
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
          "summary": "Jul: More mixed, though company-driven still has the largest share.",
          "share_market": 0.3440726698649524,
          "share_sector": 0.20955267987340748,
          "share_company": 0.44637465026164,
          "share_market_display": "34.4%",
          "share_sector_display": "21.0%",
          "share_company_display": "44.6%",
          "dominant_share_display": "44.6%"
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
          "share_market": 0.06759686084426318,
          "share_sector": 0.20213501416847957,
          "share_company": 0.7302681249872573,
          "share_market_display": "6.8%",
          "share_sector_display": "20.2%",
          "share_company_display": "73.0%",
          "dominant_share_display": "73.0%"
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
          "summary": "Sep: More mixed, though company-driven still has the largest share.",
          "share_market": 0.40925261617862474,
          "share_sector": 0.15841058167355299,
          "share_company": 0.4323368021478223,
          "share_market_display": "40.9%",
          "share_sector_display": "15.8%",
          "share_company_display": "43.2%",
          "dominant_share_display": "43.2%"
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
          "summary": "Oct: Still clearly company-driven.",
          "share_market": 0.14511547541529096,
          "share_sector": 0.23615384451076032,
          "share_company": 0.6187306800739487,
          "share_market_display": "14.5%",
          "share_sector_display": "23.6%",
          "share_company_display": "61.9%",
          "dominant_share_display": "61.9%"
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
          "share_market": 0.22525313885892517,
          "share_sector": 0.16223828875635313,
          "share_company": 0.6125085723847217,
          "share_market_display": "22.5%",
          "share_sector_display": "16.2%",
          "share_company_display": "61.3%",
          "dominant_share_display": "61.3%"
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
          "share_market": 0.1431502235785395,
          "share_sector": 0.4931179499778209,
          "share_company": 0.3637318264436397,
          "share_market_display": "14.3%",
          "share_sector_display": "49.3%",
          "share_company_display": "36.4%",
          "dominant_share_display": "49.3%"
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
          "share_market": 0.3500216817597638,
          "share_sector": 0.06126099716187343,
          "share_company": 0.5887173210783628,
          "share_market_display": "35.0%",
          "share_sector_display": "6.1%",
          "share_company_display": "58.9%",
          "dominant_share_display": "58.9%"
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
          "summary": "Feb: Mostly company-driven.",
          "share_market": 0.26607265140664454,
          "share_sector": 0.18323931157091755,
          "share_company": 0.5506880370224378,
          "share_market_display": "26.6%",
          "share_sector_display": "18.3%",
          "share_company_display": "55.1%",
          "dominant_share_display": "55.1%"
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
          "share_market": 0.21455062012591813,
          "share_sector": 0.35483850178104587,
          "share_company": 0.43061087809303594,
          "share_market_display": "21.5%",
          "share_sector_display": "35.5%",
          "share_company_display": "43.1%",
          "dominant_share_display": "43.1%"
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-10",
          "n_obs": 5,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Apr: Mostly market-driven, though based on only 5 trading days.",
          "share_market": 0.4944963307634776,
          "share_sector": 0.3106450007513275,
          "share_company": 0.1948586684851949,
          "share_market_display": "49.4%",
          "share_sector_display": "31.1%",
          "share_company_display": "19.5%",
          "dominant_share_display": "49.4%"
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
            "expected_duration_days": 10.416666666666666,
            "current_probability": 1.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.01572798931825276,
              "low": 0.01572798931825276,
              "high": 0.01572798931825276
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 10.333333333333334,
            "current_probability": 0.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.030180501360494424,
              "low": 0.030180501360494424,
              "high": 0.030180501360494424
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.9112903225806451,
            0.08870967741935484
          ],
          [
            0.0967741935483871,
            0.9032258064516129
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 1.15,
          "quantity": 39200.0,
          "value": 45080.0
        },
        {
          "level": 2,
          "price": 1.13,
          "quantity": 20000.0,
          "value": 22599.999999999996
        },
        {
          "level": 3,
          "price": 1.12,
          "quantity": 8800.0,
          "value": 9856.000000000002
        },
        {
          "level": 4,
          "price": 1.11,
          "quantity": 44800.0,
          "value": 49728.00000000001
        },
        {
          "level": 5,
          "price": 1.1,
          "quantity": 48000.0,
          "value": 52800.00000000001
        },
        {
          "level": 6,
          "price": 1.09,
          "quantity": 40000.0,
          "value": 43600.0
        },
        {
          "level": 7,
          "price": 1.08,
          "quantity": 60000.0,
          "value": 64800.00000000001
        },
        {
          "level": 8,
          "price": 1.07,
          "quantity": 80000.0,
          "value": 85600.0
        },
        {
          "level": 9,
          "price": 1.05,
          "quantity": 32000.0,
          "value": 33600.0
        },
        {
          "level": 10,
          "price": 1.01,
          "quantity": 25600.0,
          "value": 25856.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 1.18,
          "quantity": 81600.0,
          "value": 96288.0
        },
        {
          "level": 2,
          "price": 1.19,
          "quantity": 12000.0,
          "value": 14280.0
        },
        {
          "level": 3,
          "price": 1.2,
          "quantity": 283200.0,
          "value": 339840.0
        },
        {
          "level": 4,
          "price": 1.21,
          "quantity": 1600.0,
          "value": 1936.0
        },
        {
          "level": 5,
          "price": 1.22,
          "quantity": 160800.0,
          "value": 196176.0
        },
        {
          "level": 6,
          "price": 1.25,
          "quantity": 24800.0,
          "value": 31000.0
        },
        {
          "level": 7,
          "price": 1.28,
          "quantity": 40000.0,
          "value": 51200.0
        },
        {
          "level": 8,
          "price": 1.29,
          "quantity": 4000.0,
          "value": 5160.0
        },
        {
          "level": 9,
          "price": 1.3,
          "quantity": 36800.0,
          "value": 47840.0
        },
        {
          "level": 10,
          "price": 1.32,
          "quantity": 800.0,
          "value": 1056.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-04-10 07:58:45.411000000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XHKG",
        "mid_price": 1.165,
        "spread_pct": 0.02575107296137341,
        "spread_ticks": 3.0,
        "tick_size": 0.01,
        "bid_depth_notional_top10": 433520.0,
        "ask_depth_notional_top10": 784776.0,
        "bid_ask_depth_ratio": 0.5524
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 366,
        "history_limited": false,
        "trade_days_used": 237,
        "n_trades_used": 9027,
        "first_trade_date": "2025-04-10",
        "last_trade_date": "2026-04-10",
        "window_label": "Apr 10, 2025 to Apr 10, 2026",
        "window_short_label": "Apr 10, 2025 to Apr 10, 2026",
        "trade_days_label": "237 trading days",
        "trade_count_label": "9,027 trades",
        "window_detail_label": "237 trading days • 9,027 trades",
        "history_note": "Trade-size percentiles use Apr 10, 2025 to Apr 10, 2026 history (237 trading days • 9,027 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 37644.8,
            "impact_pct": -0.012876,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 8.68,
            "pct_of_adv": 21.59
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 57105.6,
            "impact_pct": -0.016541,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 13.17,
            "pct_of_adv": 32.75
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 960428.11,
            "impact_pct": -0.06596300000000001,
            "filled_pct": 45.1,
            "levels_consumed": 10,
            "pct_of_bid_depth": 221.54,
            "pct_of_adv": 550.81
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-04-10",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "26541315.0",
            "timestamp": "2026-04-10 01:30:05.071000000",
            "local_timestamp": "2026-04-10 09:30:05",
            "posted_price": 1.38,
            "size_shares": 149600.0,
            "notional": 206448.0,
            "impact_pct": -0.042144,
            "filled_pct": 100.0,
            "levels_consumed": 6,
            "pct_of_bid_depth": 47.62,
            "price_vs_mid_pct": 18.455,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "13482755.0",
            "timestamp": "2026-04-10 01:20:28.729000000",
            "local_timestamp": "2026-04-10 09:20:28",
            "posted_price": 1.26,
            "size_shares": 134400.0,
            "notional": 169344.0,
            "impact_pct": -0.037701,
            "filled_pct": 100.0,
            "levels_consumed": 5,
            "pct_of_bid_depth": 39.06,
            "price_vs_mid_pct": 8.155,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "308917507.0",
            "timestamp": "2026-04-10 01:36:17.285000000",
            "local_timestamp": "2026-04-10 09:36:17",
            "posted_price": 1.21,
            "size_shares": 134400.0,
            "notional": 162624.0,
            "impact_pct": -0.036938,
            "filled_pct": 100.0,
            "levels_consumed": 5,
            "pct_of_bid_depth": 37.51,
            "price_vs_mid_pct": 3.863,
            "executed_event_count": 0,
            "event_count": 1
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-04-10",
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
            "spread_pct": 0.0338983050847458,
            "spread_ticks": 4.0000000000000036,
            "bid_depth_notional": 473064.0,
            "ask_depth_notional": 615632.0,
            "mid_price": 1.18
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.0338983050847458,
            "spread_ticks": 4.0000000000000036,
            "bid_depth_notional": 461040.0,
            "ask_depth_notional": 616160.0,
            "mid_price": 1.18
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.0338983050847458,
            "spread_ticks": 4.0000000000000036,
            "bid_depth_notional": 530696.0,
            "ask_depth_notional": 837288.0,
            "mid_price": 1.18
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.01709401709401711,
            "spread_ticks": 2.0000000000000018,
            "bid_depth_notional": 452576.0,
            "ask_depth_notional": 927616.0,
            "mid_price": 1.17
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.01709401709401711,
            "spread_ticks": 2.0000000000000018,
            "bid_depth_notional": 417008.0,
            "ask_depth_notional": 923840.0,
            "mid_price": 1.17
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.01709401709401711,
            "spread_ticks": 2.0000000000000018,
            "bid_depth_notional": 448016.0,
            "ask_depth_notional": 927616.0,
            "mid_price": 1.17
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.01709401709401711,
            "spread_ticks": 2.0000000000000018,
            "bid_depth_notional": 394960.0,
            "ask_depth_notional": 958816.0,
            "mid_price": 1.17
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.02575107296137341,
            "spread_ticks": 3.0000000000000027,
            "bid_depth_notional": 628760.0,
            "ask_depth_notional": 787608.0,
            "mid_price": 1.165
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.02575107296137341,
            "spread_ticks": 3.0000000000000027,
            "bid_depth_notional": 433520.0,
            "ask_depth_notional": 784776.0,
            "mid_price": 1.165
          }
        ],
        "summary": {
          "median_spread_pct": 0.02575107296137341,
          "median_spread_ticks": 3.0000000000000027,
          "median_bid_depth_notional": 452576.0,
          "median_ask_depth_notional": 837288.0,
          "tightest_bucket": "11:00",
          "widest_bucket": "09:30",
          "deepest_bid_bucket": "15:00",
          "thinnest_bid_bucket": "14:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 28.7,
      "peers": [
        {
          "ticker": "542",
          "pct": 158.1
        },
        {
          "ticker": "563",
          "pct": 307.1
        },
        {
          "ticker": "1570",
          "pct": 455.2
        },
        {
          "ticker": "35",
          "pct": 552.3
        },
        {
          "ticker": "978",
          "pct": 713.8
        },
        {
          "ticker": "95",
          "pct": 896.6
        },
        {
          "ticker": "369",
          "pct": 925.7
        },
        {
          "ticker": "1321",
          "pct": 1758.4
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 17,
          "n_runs": 11,
          "n_trade_days": 1,
          "first_trade_date": "2026-04-10",
          "last_trade_date": "2026-04-10",
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
            "retail_pct": 0.058823529411764705,
            "mixed_pct": 0.0,
            "instit_pct": 0.5882352941176471,
            "ambiguous_pct": 0.11764705882352941,
            "unobservable_pct": 0.23529411764705882,
            "unclear_pct": 0.3529411764705882,
            "retail_qty_pct": 0.0022675736961451248,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.9152752009894867,
            "ambiguous_qty_pct": 0.049474335188620905,
            "unobservable_qty_pct": 0.03298289012574727,
            "unclear_qty_pct": 0.08245722531436817,
            "retail_notional_pct": 0.0021869097828711007,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.9150229341512944,
            "ambiguous_notional_pct": 0.04913446655022082,
            "unobservable_notional_pct": 0.03365568951561369,
            "unclear_notional_pct": 0.08279015606583451
          },
          "run_composition": {
            "retail_pct": 0.09090909090909091,
            "mixed_pct": 0.0,
            "instit_pct": 0.36363636363636365,
            "ambiguous_pct": 0.18181818181818182,
            "unobservable_pct": 0.36363636363636365,
            "unclear_pct": 0.5454545454545454,
            "retail_notional_pct": 0.0021869097828711007,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.9150229341512944,
            "unclear_notional_pct": 0.08279015606583451
          },
          "counts": {
            "trades": {
              "retail": 1,
              "mixed": 0,
              "institutional": 10,
              "ambiguous": 2,
              "unobservable": 4,
              "unclear": 6
            },
            "runs": {
              "retail": 1,
              "mixed": 0,
              "institutional": 4,
              "ambiguous": 2,
              "unobservable": 4,
              "unclear": 6
            }
          },
          "confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.45454545454545453,
            "na": 0.5454545454545454
          },
          "confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 5,
            "na": 6
          },
          "trade_confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.6470588235294118,
            "na": 0.35294117647058826
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 11,
            "na": 6
          },
          "observability": {
            "avg_feature_coverage": 0.6454545454545455,
            "observable_run_pct": 0.6363636363636364,
            "ambiguous_run_pct": 0.18181818181818182,
            "unobservable_run_pct": 0.36363636363636365
          },
          "dominant_bucket": "INSTITUTIONAL",
          "dominant_label": "Mixed, leaning institution-like",
          "dominant_share": 0.36363636363636365,
          "dominance_gap": 0.0,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 17
            },
            "d2_information": {
              "UNOBSERVABLE": 17
            },
            "d3_urgency": {
              "IMMEDIATE": 11
            },
            "participant_confidence": {
              "NA": 6,
              "LOW": 5
            }
          },
          "trade_size": {
            "avg": 6627.6705882352935,
            "median": 1839.9999999999998
          },
          "run_size": {
            "avg": 10242.763636363634,
            "median": 1855.9999999999998,
            "avg_length": 1.5454545454545454
          },
          "recent_trades": [
            {
              "trade_id": "17",
              "timestamp": "2026-04-10T07:21:37.800430",
              "price": 1.18,
              "size": 800.0,
              "notional": 944.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4164,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "16",
              "timestamp": "2026-04-10T07:18:38.188885",
              "price": 1.15,
              "size": 3200.0,
              "notional": 3679.9999999999995,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 4163,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "15",
              "timestamp": "2026-04-10T07:13:42.917020",
              "price": 1.12,
              "size": 220.0,
              "notional": 246.40000000000003,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 4162,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "14",
              "timestamp": "2026-04-10T07:12:07.926437",
              "price": 1.18,
              "size": 800.0,
              "notional": 944.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4161,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "13",
              "timestamp": "2026-04-10T07:10:15.791885",
              "price": 1.15,
              "size": 21600.0,
              "notional": 24839.999999999996,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 4160,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "12",
              "timestamp": "2026-04-10T07:10:15.791885",
              "price": 1.15,
              "size": 1600.0,
              "notional": 1839.9999999999998,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 4160,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "11",
              "timestamp": "2026-04-10T07:10:15.791885",
              "price": 1.16,
              "size": 3200.0,
              "notional": 3711.9999999999995,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 4160,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10",
              "timestamp": "2026-04-10T03:09:03.373442",
              "price": 1.18,
              "size": 800.0,
              "notional": 944.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4159,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "9",
              "timestamp": "2026-04-10T03:08:48.877559",
              "price": 1.16,
              "size": 48800.0,
              "notional": 56607.99999999999,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 4158,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "8",
              "timestamp": "2026-04-10T03:08:48.877559",
              "price": 1.16,
              "size": 3200.0,
              "notional": 3711.9999999999995,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 4158,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "7",
              "timestamp": "2026-04-10T02:30:13.889699",
              "price": 1.2,
              "size": 800.0,
              "notional": 960.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4157,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "6",
              "timestamp": "2026-04-10T02:27:46.512923",
              "price": 1.16,
              "size": 1600.0,
              "notional": 1855.9999999999998,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 4156,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "5",
              "timestamp": "2026-04-10T02:27:46.512265",
              "price": 1.16,
              "size": 800.0,
              "notional": 927.9999999999999,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 4156,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4",
              "timestamp": "2026-04-10T02:27:31.463871",
              "price": 1.16,
              "size": 1600.0,
              "notional": 1855.9999999999998,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 4155,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "3",
              "timestamp": "2026-04-10T01:55:30.638284",
              "price": 1.2,
              "size": 6400.0,
              "notional": 7680.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 4154,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2",
              "timestamp": "2026-04-10T01:55:30.637951",
              "price": 1.2,
              "size": 800.0,
              "notional": 960.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 4154,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1",
              "timestamp": "2026-04-10T01:55:30.637951",
              "price": 1.2,
              "size": 800.0,
              "notional": 960.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 4154,
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
          "n_trades": 392,
          "n_runs": 222,
          "n_trade_days": 21,
          "first_trade_date": "2026-03-10",
          "last_trade_date": "2026-04-10",
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
            "retail_pct": 0.08163265306122448,
            "mixed_pct": 0.0,
            "instit_pct": 0.23979591836734693,
            "ambiguous_pct": 0.08418367346938775,
            "unobservable_pct": 0.5943877551020408,
            "unclear_pct": 0.6785714285714285,
            "retail_qty_pct": 0.0061779326260032845,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.3755898621501923,
            "ambiguous_qty_pct": 0.05829101719937006,
            "unobservable_qty_pct": 0.5599411880244344,
            "unclear_qty_pct": 0.6182322052238044,
            "retail_notional_pct": 0.0061079577513163084,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.367483532732082,
            "ambiguous_notional_pct": 0.057483160443933985,
            "unobservable_notional_pct": 0.5689253490726678,
            "unclear_notional_pct": 0.6264085095166018
          },
          "run_composition": {
            "retail_pct": 0.14414414414414414,
            "mixed_pct": 0.0,
            "instit_pct": 0.14414414414414414,
            "ambiguous_pct": 0.1036036036036036,
            "unobservable_pct": 0.6081081081081081,
            "unclear_pct": 0.7117117117117118,
            "retail_notional_pct": 0.0061079577513163084,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.367483532732082,
            "unclear_notional_pct": 0.6264085095166018
          },
          "counts": {
            "trades": {
              "retail": 32,
              "mixed": 0,
              "institutional": 94,
              "ambiguous": 33,
              "unobservable": 233,
              "unclear": 266
            },
            "runs": {
              "retail": 32,
              "mixed": 0,
              "institutional": 32,
              "ambiguous": 23,
              "unobservable": 135,
              "unclear": 158
            }
          },
          "confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.2882882882882883,
            "na": 0.7117117117117117
          },
          "confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 64,
            "na": 158
          },
          "trade_confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.32142857142857145,
            "na": 0.6785714285714286
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 126,
            "na": 266
          },
          "observability": {
            "avg_feature_coverage": 0.6175675675675677,
            "observable_run_pct": 0.3918918918918919,
            "ambiguous_run_pct": 0.1036036036036036,
            "unobservable_run_pct": 0.6081081081081081
          },
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "dominant_share": 0.6081081081081081,
          "dominance_gap": 0.463963963963964,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 392
            },
            "d2_information": {
              "UNOBSERVABLE": 392
            },
            "d3_urgency": {
              "IMMEDIATE": 221,
              "ADAPTIVE": 1
            },
            "participant_confidence": {
              "NA": 158,
              "LOW": 64
            }
          },
          "trade_size": {
            "avg": 16803.146377551024,
            "median": 1831.9999999999998
          },
          "run_size": {
            "avg": 29670.420630630626,
            "median": 2308.0,
            "avg_length": 1.7657657657657657
          },
          "recent_trades": [
            {
              "trade_id": "17",
              "timestamp": "2026-04-10T07:21:37.800430",
              "price": 1.18,
              "size": 800.0,
              "notional": 944.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4164,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "16",
              "timestamp": "2026-04-10T07:18:38.188885",
              "price": 1.15,
              "size": 3200.0,
              "notional": 3679.9999999999995,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 4163,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "15",
              "timestamp": "2026-04-10T07:13:42.917020",
              "price": 1.12,
              "size": 220.0,
              "notional": 246.40000000000003,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 4162,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "14",
              "timestamp": "2026-04-10T07:12:07.926437",
              "price": 1.18,
              "size": 800.0,
              "notional": 944.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4161,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "13",
              "timestamp": "2026-04-10T07:10:15.791885",
              "price": 1.15,
              "size": 21600.0,
              "notional": 24839.999999999996,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 4160,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "12",
              "timestamp": "2026-04-10T07:10:15.791885",
              "price": 1.15,
              "size": 1600.0,
              "notional": 1839.9999999999998,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 4160,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "11",
              "timestamp": "2026-04-10T07:10:15.791885",
              "price": 1.16,
              "size": 3200.0,
              "notional": 3711.9999999999995,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 4160,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10",
              "timestamp": "2026-04-10T03:09:03.373442",
              "price": 1.18,
              "size": 800.0,
              "notional": 944.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4159,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "9",
              "timestamp": "2026-04-10T03:08:48.877559",
              "price": 1.16,
              "size": 48800.0,
              "notional": 56607.99999999999,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 4158,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "8",
              "timestamp": "2026-04-10T03:08:48.877559",
              "price": 1.16,
              "size": 3200.0,
              "notional": 3711.9999999999995,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 4158,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "7",
              "timestamp": "2026-04-10T02:30:13.889699",
              "price": 1.2,
              "size": 800.0,
              "notional": 960.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4157,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "6",
              "timestamp": "2026-04-10T02:27:46.512923",
              "price": 1.16,
              "size": 1600.0,
              "notional": 1855.9999999999998,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 4156,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "5",
              "timestamp": "2026-04-10T02:27:46.512265",
              "price": 1.16,
              "size": 800.0,
              "notional": 927.9999999999999,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 4156,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4",
              "timestamp": "2026-04-10T02:27:31.463871",
              "price": 1.16,
              "size": 1600.0,
              "notional": 1855.9999999999998,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 4155,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "3",
              "timestamp": "2026-04-10T01:55:30.638284",
              "price": 1.2,
              "size": 6400.0,
              "notional": 7680.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 4154,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2",
              "timestamp": "2026-04-10T01:55:30.637951",
              "price": 1.2,
              "size": 800.0,
              "notional": 960.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 4154,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1",
              "timestamp": "2026-04-10T01:55:30.637951",
              "price": 1.2,
              "size": 800.0,
              "notional": 960.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 4154,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "11",
              "timestamp": "2026-04-09T07:57:01.788558",
              "price": 1.18,
              "size": 800.0,
              "notional": 944.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4153,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10",
              "timestamp": "2026-04-09T07:57:01.788558",
              "price": 1.17,
              "size": 34400.0,
              "notional": 40248.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4153,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "9",
              "timestamp": "2026-04-09T07:29:39.615956",
              "price": 1.18,
              "size": 800.0,
              "notional": 944.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4152,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "8",
              "timestamp": "2026-04-09T07:29:39.615956",
              "price": 1.17,
              "size": 2400.0,
              "notional": 2808.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4152,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "7",
              "timestamp": "2026-04-09T07:29:22.093792",
              "price": 1.18,
              "size": 800.0,
              "notional": 944.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4151,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "6",
              "timestamp": "2026-04-09T07:29:22.093792",
              "price": 1.17,
              "size": 2400.0,
              "notional": 2808.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4151,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "5",
              "timestamp": "2026-04-09T07:24:06.012733",
              "price": 1.18,
              "size": 800.0,
              "notional": 944.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 4150,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4",
              "timestamp": "2026-04-09T07:24:06.012733",
              "price": 1.16,
              "size": 4000.0,
              "notional": 4640.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 4150,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "3",
              "timestamp": "2026-04-09T07:19:55.183531",
              "price": 1.13,
              "size": 3200.0,
              "notional": 3615.9999999999995,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 4149,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2",
              "timestamp": "2026-04-09T07:19:54.223385",
              "price": 1.13,
              "size": 18400.0,
              "notional": 20791.999999999996,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 4149,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1",
              "timestamp": "2026-04-09T07:19:54.223385",
              "price": 1.13,
              "size": 4000.0,
              "notional": 4520.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 4149,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "23",
              "timestamp": "2026-04-08T06:28:56.235019",
              "price": 1.17,
              "size": 800.0,
              "notional": 936.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4148,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "22",
              "timestamp": "2026-04-08T06:25:26.492787",
              "price": 1.15,
              "size": 3200.0,
              "notional": 3679.9999999999995,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 4147,
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
          "n_trades": 1665,
          "n_runs": 985,
          "n_trade_days": 63,
          "first_trade_date": "2026-01-06",
          "last_trade_date": "2026-04-10",
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
            "retail_pct": 0.0912912912912913,
            "mixed_pct": 0.0,
            "instit_pct": 0.3105105105105105,
            "ambiguous_pct": 0.13513513513513514,
            "unobservable_pct": 0.46306306306306305,
            "unclear_pct": 0.5981981981981982,
            "retail_qty_pct": 0.008400330671921419,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.5102840792765441,
            "ambiguous_qty_pct": 0.13494458696917763,
            "unobservable_qty_pct": 0.34637100308235685,
            "unclear_qty_pct": 0.48131559005153446,
            "retail_notional_pct": 0.008265285846505628,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.5081337050347163,
            "ambiguous_notional_pct": 0.13538952361758688,
            "unobservable_notional_pct": 0.34821148550119113,
            "unclear_notional_pct": 0.483601009118778
          },
          "run_composition": {
            "retail_pct": 0.14923857868020304,
            "mixed_pct": 0.0,
            "instit_pct": 0.16446700507614212,
            "ambiguous_pct": 0.14720812182741116,
            "unobservable_pct": 0.5390862944162437,
            "unclear_pct": 0.6862944162436548,
            "retail_notional_pct": 0.008265285846505628,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.5081337050347163,
            "unclear_notional_pct": 0.483601009118778
          },
          "counts": {
            "trades": {
              "retail": 152,
              "mixed": 0,
              "institutional": 517,
              "ambiguous": 225,
              "unobservable": 771,
              "unclear": 996
            },
            "runs": {
              "retail": 147,
              "mixed": 0,
              "institutional": 162,
              "ambiguous": 145,
              "unobservable": 531,
              "unclear": 676
            }
          },
          "confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.31370558375634516,
            "na": 0.6862944162436548
          },
          "confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 309,
            "na": 676
          },
          "trade_confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.4018018018018018,
            "na": 0.5981981981981982
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 669,
            "na": 996
          },
          "observability": {
            "avg_feature_coverage": 0.6276649746192894,
            "observable_run_pct": 0.46091370558375633,
            "ambiguous_run_pct": 0.14720812182741116,
            "unobservable_run_pct": 0.5390862944162437
          },
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "dominant_share": 0.5390862944162437,
          "dominance_gap": 0.3746192893401016,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 1665
            },
            "d2_information": {
              "UNOBSERVABLE": 1665
            },
            "d3_urgency": {
              "IMMEDIATE": 983,
              "ADAPTIVE": 2
            },
            "participant_confidence": {
              "NA": 676,
              "LOW": 309
            }
          },
          "trade_size": {
            "avg": 16386.645885885886,
            "median": 2952.0
          },
          "run_size": {
            "avg": 27699.254213197968,
            "median": 3808.0,
            "avg_length": 1.6903553299492386
          },
          "recent_trades": [
            {
              "trade_id": "17",
              "timestamp": "2026-04-10T07:21:37.800430",
              "price": 1.18,
              "size": 800.0,
              "notional": 944.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4164,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "16",
              "timestamp": "2026-04-10T07:18:38.188885",
              "price": 1.15,
              "size": 3200.0,
              "notional": 3679.9999999999995,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 4163,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "15",
              "timestamp": "2026-04-10T07:13:42.917020",
              "price": 1.12,
              "size": 220.0,
              "notional": 246.40000000000003,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 4162,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "14",
              "timestamp": "2026-04-10T07:12:07.926437",
              "price": 1.18,
              "size": 800.0,
              "notional": 944.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4161,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "13",
              "timestamp": "2026-04-10T07:10:15.791885",
              "price": 1.15,
              "size": 21600.0,
              "notional": 24839.999999999996,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 4160,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "12",
              "timestamp": "2026-04-10T07:10:15.791885",
              "price": 1.15,
              "size": 1600.0,
              "notional": 1839.9999999999998,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 4160,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "11",
              "timestamp": "2026-04-10T07:10:15.791885",
              "price": 1.16,
              "size": 3200.0,
              "notional": 3711.9999999999995,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 4160,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10",
              "timestamp": "2026-04-10T03:09:03.373442",
              "price": 1.18,
              "size": 800.0,
              "notional": 944.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4159,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "9",
              "timestamp": "2026-04-10T03:08:48.877559",
              "price": 1.16,
              "size": 48800.0,
              "notional": 56607.99999999999,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 4158,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "8",
              "timestamp": "2026-04-10T03:08:48.877559",
              "price": 1.16,
              "size": 3200.0,
              "notional": 3711.9999999999995,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 4158,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "7",
              "timestamp": "2026-04-10T02:30:13.889699",
              "price": 1.2,
              "size": 800.0,
              "notional": 960.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4157,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "6",
              "timestamp": "2026-04-10T02:27:46.512923",
              "price": 1.16,
              "size": 1600.0,
              "notional": 1855.9999999999998,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 4156,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "5",
              "timestamp": "2026-04-10T02:27:46.512265",
              "price": 1.16,
              "size": 800.0,
              "notional": 927.9999999999999,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 4156,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4",
              "timestamp": "2026-04-10T02:27:31.463871",
              "price": 1.16,
              "size": 1600.0,
              "notional": 1855.9999999999998,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 4155,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "3",
              "timestamp": "2026-04-10T01:55:30.638284",
              "price": 1.2,
              "size": 6400.0,
              "notional": 7680.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 4154,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2",
              "timestamp": "2026-04-10T01:55:30.637951",
              "price": 1.2,
              "size": 800.0,
              "notional": 960.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 4154,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1",
              "timestamp": "2026-04-10T01:55:30.637951",
              "price": 1.2,
              "size": 800.0,
              "notional": 960.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 4154,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "11",
              "timestamp": "2026-04-09T07:57:01.788558",
              "price": 1.18,
              "size": 800.0,
              "notional": 944.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4153,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10",
              "timestamp": "2026-04-09T07:57:01.788558",
              "price": 1.17,
              "size": 34400.0,
              "notional": 40248.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4153,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "9",
              "timestamp": "2026-04-09T07:29:39.615956",
              "price": 1.18,
              "size": 800.0,
              "notional": 944.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4152,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "8",
              "timestamp": "2026-04-09T07:29:39.615956",
              "price": 1.17,
              "size": 2400.0,
              "notional": 2808.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4152,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "7",
              "timestamp": "2026-04-09T07:29:22.093792",
              "price": 1.18,
              "size": 800.0,
              "notional": 944.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4151,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "6",
              "timestamp": "2026-04-09T07:29:22.093792",
              "price": 1.17,
              "size": 2400.0,
              "notional": 2808.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4151,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "5",
              "timestamp": "2026-04-09T07:24:06.012733",
              "price": 1.18,
              "size": 800.0,
              "notional": 944.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 4150,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4",
              "timestamp": "2026-04-09T07:24:06.012733",
              "price": 1.16,
              "size": 4000.0,
              "notional": 4640.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 4150,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "3",
              "timestamp": "2026-04-09T07:19:55.183531",
              "price": 1.13,
              "size": 3200.0,
              "notional": 3615.9999999999995,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 4149,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2",
              "timestamp": "2026-04-09T07:19:54.223385",
              "price": 1.13,
              "size": 18400.0,
              "notional": 20791.999999999996,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 4149,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1",
              "timestamp": "2026-04-09T07:19:54.223385",
              "price": 1.13,
              "size": 4000.0,
              "notional": 4520.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 4149,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "23",
              "timestamp": "2026-04-08T06:28:56.235019",
              "price": 1.17,
              "size": 800.0,
              "notional": 936.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4148,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "22",
              "timestamp": "2026-04-08T06:25:26.492787",
              "price": 1.15,
              "size": 3200.0,
              "notional": 3679.9999999999995,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 4147,
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
          "n_trades": 5288,
          "n_runs": 2577,
          "n_trade_days": 126,
          "first_trade_date": "2025-09-23",
          "last_trade_date": "2026-04-10",
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
            "retail_pct": 0.08415279878971256,
            "mixed_pct": 0.0,
            "instit_pct": 0.3415279878971256,
            "ambiguous_pct": 0.16698184568835098,
            "unobservable_pct": 0.4073373676248109,
            "unclear_pct": 0.5743192133131618,
            "retail_qty_pct": 0.01085703914553184,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.5345113468322978,
            "ambiguous_qty_pct": 0.12454325147762153,
            "unobservable_qty_pct": 0.33008836254454876,
            "unclear_qty_pct": 0.4546316140221703,
            "retail_notional_pct": 0.010527035883096069,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.534244276501382,
            "ambiguous_notional_pct": 0.12515846322682944,
            "unobservable_notional_pct": 0.33007022438869255,
            "unclear_notional_pct": 0.455228687615522
          },
          "run_composition": {
            "retail_pct": 0.16918897943344974,
            "mixed_pct": 0.0,
            "instit_pct": 0.15017462165308498,
            "ambiguous_pct": 0.1614280170741172,
            "unobservable_pct": 0.519208381839348,
            "unclear_pct": 0.6806363989134652,
            "retail_notional_pct": 0.010527035883096069,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.534244276501382,
            "unclear_notional_pct": 0.45522868761552204
          },
          "counts": {
            "trades": {
              "retail": 445,
              "mixed": 0,
              "institutional": 1806,
              "ambiguous": 883,
              "unobservable": 2154,
              "unclear": 3037
            },
            "runs": {
              "retail": 436,
              "mixed": 0,
              "institutional": 387,
              "ambiguous": 416,
              "unobservable": 1338,
              "unclear": 1754
            }
          },
          "confidence": {
            "high": 0.012805587892898719,
            "medium": 0.0306558013193636,
            "low": 0.2759022118742724,
            "na": 0.6806363989134653
          },
          "confidence_counts": {
            "high": 33,
            "medium": 79,
            "low": 711,
            "na": 1754
          },
          "trade_confidence": {
            "high": 0.012481089258698942,
            "medium": 0.06788956127080181,
            "low": 0.34531013615733736,
            "na": 0.5743192133131618
          },
          "trade_confidence_counts": {
            "high": 66,
            "medium": 359,
            "low": 1826,
            "na": 3037
          },
          "observability": {
            "avg_feature_coverage": 0.6367287543655413,
            "observable_run_pct": 0.48079161816065197,
            "ambiguous_run_pct": 0.1614280170741172,
            "unobservable_run_pct": 0.519208381839348
          },
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "dominant_share": 0.519208381839348,
          "dominance_gap": 0.3500194024058983,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 5288
            },
            "d2_information": {
              "UNOBSERVABLE": 5288
            },
            "d3_urgency": {
              "IMMEDIATE": 2529,
              "ADAPTIVE": 45,
              "SCHEDULED": 3
            },
            "participant_confidence": {
              "NA": 1754,
              "LOW": 711,
              "MEDIUM": 79,
              "HIGH": 33
            }
          },
          "trade_size": {
            "avg": 12392.858865355522,
            "median": 2316.0
          },
          "run_size": {
            "avg": 25430.127155607293,
            "median": 3456.0,
            "avg_length": 2.051998447807528
          },
          "recent_trades": [
            {
              "trade_id": "17",
              "timestamp": "2026-04-10T07:21:37.800430",
              "price": 1.18,
              "size": 800.0,
              "notional": 944.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4164,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "16",
              "timestamp": "2026-04-10T07:18:38.188885",
              "price": 1.15,
              "size": 3200.0,
              "notional": 3679.9999999999995,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 4163,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "15",
              "timestamp": "2026-04-10T07:13:42.917020",
              "price": 1.12,
              "size": 220.0,
              "notional": 246.40000000000003,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 4162,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "14",
              "timestamp": "2026-04-10T07:12:07.926437",
              "price": 1.18,
              "size": 800.0,
              "notional": 944.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4161,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "13",
              "timestamp": "2026-04-10T07:10:15.791885",
              "price": 1.15,
              "size": 21600.0,
              "notional": 24839.999999999996,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 4160,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "12",
              "timestamp": "2026-04-10T07:10:15.791885",
              "price": 1.15,
              "size": 1600.0,
              "notional": 1839.9999999999998,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 4160,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "11",
              "timestamp": "2026-04-10T07:10:15.791885",
              "price": 1.16,
              "size": 3200.0,
              "notional": 3711.9999999999995,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 4160,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10",
              "timestamp": "2026-04-10T03:09:03.373442",
              "price": 1.18,
              "size": 800.0,
              "notional": 944.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4159,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "9",
              "timestamp": "2026-04-10T03:08:48.877559",
              "price": 1.16,
              "size": 48800.0,
              "notional": 56607.99999999999,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 4158,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "8",
              "timestamp": "2026-04-10T03:08:48.877559",
              "price": 1.16,
              "size": 3200.0,
              "notional": 3711.9999999999995,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 4158,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "7",
              "timestamp": "2026-04-10T02:30:13.889699",
              "price": 1.2,
              "size": 800.0,
              "notional": 960.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4157,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "6",
              "timestamp": "2026-04-10T02:27:46.512923",
              "price": 1.16,
              "size": 1600.0,
              "notional": 1855.9999999999998,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 4156,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "5",
              "timestamp": "2026-04-10T02:27:46.512265",
              "price": 1.16,
              "size": 800.0,
              "notional": 927.9999999999999,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 4156,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4",
              "timestamp": "2026-04-10T02:27:31.463871",
              "price": 1.16,
              "size": 1600.0,
              "notional": 1855.9999999999998,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 4155,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "3",
              "timestamp": "2026-04-10T01:55:30.638284",
              "price": 1.2,
              "size": 6400.0,
              "notional": 7680.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 4154,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2",
              "timestamp": "2026-04-10T01:55:30.637951",
              "price": 1.2,
              "size": 800.0,
              "notional": 960.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 4154,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1",
              "timestamp": "2026-04-10T01:55:30.637951",
              "price": 1.2,
              "size": 800.0,
              "notional": 960.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 4154,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "11",
              "timestamp": "2026-04-09T07:57:01.788558",
              "price": 1.18,
              "size": 800.0,
              "notional": 944.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4153,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10",
              "timestamp": "2026-04-09T07:57:01.788558",
              "price": 1.17,
              "size": 34400.0,
              "notional": 40248.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4153,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "9",
              "timestamp": "2026-04-09T07:29:39.615956",
              "price": 1.18,
              "size": 800.0,
              "notional": 944.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4152,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "8",
              "timestamp": "2026-04-09T07:29:39.615956",
              "price": 1.17,
              "size": 2400.0,
              "notional": 2808.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4152,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "7",
              "timestamp": "2026-04-09T07:29:22.093792",
              "price": 1.18,
              "size": 800.0,
              "notional": 944.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4151,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "6",
              "timestamp": "2026-04-09T07:29:22.093792",
              "price": 1.17,
              "size": 2400.0,
              "notional": 2808.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4151,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "5",
              "timestamp": "2026-04-09T07:24:06.012733",
              "price": 1.18,
              "size": 800.0,
              "notional": 944.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 4150,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4",
              "timestamp": "2026-04-09T07:24:06.012733",
              "price": 1.16,
              "size": 4000.0,
              "notional": 4640.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 4150,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "3",
              "timestamp": "2026-04-09T07:19:55.183531",
              "price": 1.13,
              "size": 3200.0,
              "notional": 3615.9999999999995,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 4149,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2",
              "timestamp": "2026-04-09T07:19:54.223385",
              "price": 1.13,
              "size": 18400.0,
              "notional": 20791.999999999996,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 4149,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1",
              "timestamp": "2026-04-09T07:19:54.223385",
              "price": 1.13,
              "size": 4000.0,
              "notional": 4520.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 4149,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "23",
              "timestamp": "2026-04-08T06:28:56.235019",
              "price": 1.17,
              "size": 800.0,
              "notional": 936.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4148,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "22",
              "timestamp": "2026-04-08T06:25:26.492787",
              "price": 1.15,
              "size": 3200.0,
              "notional": 3679.9999999999995,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 4147,
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
      "n_trades": 5288,
      "n_runs": 2577,
      "n_trade_days": 126,
      "first_trade_date": "2025-09-23",
      "last_trade_date": "2026-04-10",
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
        "retail_pct": 0.08415279878971256,
        "mixed_pct": 0.0,
        "instit_pct": 0.3415279878971256,
        "ambiguous_pct": 0.16698184568835098,
        "unobservable_pct": 0.4073373676248109,
        "unclear_pct": 0.5743192133131618,
        "retail_qty_pct": 0.01085703914553184,
        "mixed_qty_pct": 0.0,
        "instit_qty_pct": 0.5345113468322978,
        "ambiguous_qty_pct": 0.12454325147762153,
        "unobservable_qty_pct": 0.33008836254454876,
        "unclear_qty_pct": 0.4546316140221703,
        "retail_notional_pct": 0.010527035883096069,
        "mixed_notional_pct": 0.0,
        "instit_notional_pct": 0.534244276501382,
        "ambiguous_notional_pct": 0.12515846322682944,
        "unobservable_notional_pct": 0.33007022438869255,
        "unclear_notional_pct": 0.455228687615522
      },
      "run_composition": {
        "retail_pct": 0.16918897943344974,
        "mixed_pct": 0.0,
        "instit_pct": 0.15017462165308498,
        "ambiguous_pct": 0.1614280170741172,
        "unobservable_pct": 0.519208381839348,
        "unclear_pct": 0.6806363989134652
      },
      "trade_size": {
        "avg": 12392.858865355522,
        "median": 2316.0
      },
      "run_size": {
        "avg": 25430.127155607293,
        "median": 3456.0,
        "avg_length": 2.051998447807528
      },
      "confidence": {
        "high": 0.012805587892898719,
        "medium": 0.0306558013193636,
        "low": 0.2759022118742724,
        "na": 0.6806363989134653
      },
      "confidence_counts": {
        "high": 33,
        "medium": 79,
        "low": 711,
        "na": 1754
      },
      "trade_confidence": {
        "high": 0.012481089258698942,
        "medium": 0.06788956127080181,
        "low": 0.34531013615733736,
        "na": 0.5743192133131618
      },
      "trade_confidence_counts": {
        "high": 66,
        "medium": 359,
        "low": 1826,
        "na": 3037
      },
      "counts": {
        "trades": {
          "retail": 445,
          "mixed": 0,
          "institutional": 1806,
          "ambiguous": 883,
          "unobservable": 2154,
          "unclear": 3037
        },
        "runs": {
          "retail": 436,
          "mixed": 0,
          "institutional": 387,
          "ambiguous": 416,
          "unobservable": 1338,
          "unclear": 1754
        }
      },
      "observability": {
        "avg_feature_coverage": 0.6367287543655413,
        "observable_run_pct": 0.48079161816065197,
        "ambiguous_run_pct": 0.1614280170741172,
        "unobservable_run_pct": 0.519208381839348
      },
      "dominant_bucket": "UNOBSERVABLE",
      "dominant_label": "Not Observable",
      "dominant_share": 0.519208381839348,
      "dominance_gap": 0.3500194024058983,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2025-11",
            "n_trades": 1233,
            "n_runs": 553,
            "retail_pct": 0.1305758313057583,
            "mixed_pct": 0.0,
            "instit_pct": 0.2798053527980535,
            "ambiguous_pct": 0.18815896188158962,
            "unobservable_pct": 0.40145985401459855,
            "unclear_pct": 0.5896188158961881,
            "avg_trade_size": 7582.858175182482,
            "avg_run_notional": 16907.168408679925,
            "retail_qty_pct": 0.02138209524560559,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.4800712169319993,
            "ambiguous_qty_pct": 0.14861113018036937,
            "unobservable_qty_pct": 0.3499355576420258,
            "unclear_qty_pct": 0.49854668782239514,
            "retail_notional_pct": 0.020918925779636534,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.4822375581955798,
            "ambiguous_notional_pct": 0.14854522907872625,
            "unobservable_notional_pct": 0.34829828694605736,
            "unclear_notional_pct": 0.4968435160247836,
            "run_retail_pct": 0.2911392405063291,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.13200723327305605,
            "run_ambiguous_pct": 0.17540687160940324,
            "run_unobservable_pct": 0.4014466546112116,
            "run_unclear_pct": 0.5768535262206148,
            "avg_feature_coverage": 0.6685352622061483,
            "high_confidence_pct": 0.045207956600361664,
            "medium_confidence_pct": 0.06871609403254973,
            "low_confidence_pct": 0.3092224231464738,
            "na_confidence_pct": 0.5768535262206148,
            "total_quantity": null
          },
          {
            "month": "2025-12",
            "n_trades": 278,
            "n_runs": 169,
            "retail_pct": 0.1366906474820144,
            "mixed_pct": 0.0,
            "instit_pct": 0.21223021582733814,
            "ambiguous_pct": 0.11510791366906475,
            "unobservable_pct": 0.5359712230215827,
            "unclear_pct": 0.6510791366906474,
            "avg_trade_size": 9614.159928057554,
            "avg_run_notional": 15815.008639053254,
            "retail_qty_pct": 0.0404468926471899,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.4287317295760142,
            "ambiguous_qty_pct": 0.08228327831987135,
            "unobservable_qty_pct": 0.4485380994569246,
            "unclear_qty_pct": 0.5308213777767959,
            "retail_notional_pct": 0.03945518070270198,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.43269810447379464,
            "ambiguous_notional_pct": 0.0805478442120702,
            "unobservable_notional_pct": 0.4472988706114332,
            "unclear_notional_pct": 0.5278467148235034,
            "run_retail_pct": 0.21893491124260356,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.10650887573964497,
            "run_ambiguous_pct": 0.14201183431952663,
            "run_unobservable_pct": 0.5325443786982249,
            "run_unclear_pct": 0.6745562130177516,
            "avg_feature_coverage": 0.6245562130177514,
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.3254437869822485,
            "na_confidence_pct": 0.6745562130177515,
            "total_quantity": null
          },
          {
            "month": "2026-01",
            "n_trades": 798,
            "n_runs": 461,
            "retail_pct": 0.09273182957393483,
            "mixed_pct": 0.0,
            "instit_pct": 0.3508771929824561,
            "ambiguous_pct": 0.15288220551378445,
            "unobservable_pct": 0.40350877192982454,
            "unclear_pct": 0.556390977443609,
            "avg_trade_size": 15846.360426065165,
            "avg_run_notional": 27430.359262472888,
            "retail_qty_pct": 0.01007620042731925,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.5498147407316616,
            "ambiguous_qty_pct": 0.15380846858034783,
            "unobservable_qty_pct": 0.28630059026067134,
            "unclear_qty_pct": 0.44010905884101914,
            "retail_notional_pct": 0.009851144538568418,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.5486910974162151,
            "ambiguous_notional_pct": 0.15486806888846077,
            "unobservable_notional_pct": 0.2865896891567557,
            "unclear_notional_pct": 0.4414577580452165,
            "run_retail_pct": 0.14967462039045554,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.175704989154013,
            "run_ambiguous_pct": 0.16268980477223427,
            "run_unobservable_pct": 0.5119305856832972,
            "run_unclear_pct": 0.6746203904555315,
            "avg_feature_coverage": 0.6339479392624728,
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.32537960954446854,
            "na_confidence_pct": 0.6746203904555315,
            "total_quantity": null
          },
          {
            "month": "2026-02",
            "n_trades": 403,
            "n_runs": 254,
            "retail_pct": 0.10669975186104218,
            "mixed_pct": 0.0,
            "instit_pct": 0.315136476426799,
            "ambiguous_pct": 0.14392059553349876,
            "unobservable_pct": 0.43424317617866004,
            "unclear_pct": 0.5781637717121588,
            "avg_trade_size": 17335.778660049626,
            "avg_run_notional": 27505.192125984257,
            "retail_qty_pct": 0.008172069724165773,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.5416423379210722,
            "ambiguous_qty_pct": 0.17199328270679207,
            "unobservable_qty_pct": 0.27819230964797004,
            "unclear_qty_pct": 0.4501855923547621,
            "retail_notional_pct": 0.008142600077167965,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.5403543852021182,
            "ambiguous_notional_pct": 0.17248110693145008,
            "unobservable_notional_pct": 0.2790219077892638,
            "unclear_notional_pct": 0.45150301472071386,
            "run_retail_pct": 0.16929133858267717,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.15748031496062992,
            "run_ambiguous_pct": 0.15354330708661418,
            "run_unobservable_pct": 0.5196850393700787,
            "run_unclear_pct": 0.6732283464566928,
            "avg_feature_coverage": 0.6303149606299213,
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.32677165354330706,
            "na_confidence_pct": 0.6732283464566929,
            "total_quantity": null
          },
          {
            "month": "2026-03",
            "n_trades": 452,
            "n_runs": 263,
            "retail_pct": 0.07964601769911504,
            "mixed_pct": 0.0,
            "instit_pct": 0.24778761061946902,
            "ambiguous_pct": 0.10398230088495575,
            "unobservable_pct": 0.5685840707964602,
            "unclear_pct": 0.672566371681416,
            "avg_trade_size": 17419.442876106194,
            "avg_run_notional": 29937.59764258555,
            "retail_qty_pct": 0.006175433299614752,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.4187146445225532,
            "ambiguous_qty_pct": 0.07429182064884693,
            "unobservable_qty_pct": 0.5008181015289851,
            "unclear_qty_pct": 0.575109922177832,
            "retail_notional_pct": 0.006093651192206499,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.4141949928602946,
            "ambiguous_notional_pct": 0.07368736930815703,
            "unobservable_notional_pct": 0.5060239866393418,
            "unclear_notional_pct": 0.5797113559474988,
            "run_retail_pct": 0.13688212927756654,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.1520912547528517,
            "run_ambiguous_pct": 0.12167300380228137,
            "run_unobservable_pct": 0.5893536121673004,
            "run_unclear_pct": 0.7110266159695818,
            "avg_feature_coverage": 0.6184410646387832,
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.2889733840304182,
            "na_confidence_pct": 0.7110266159695817,
            "total_quantity": null
          },
          {
            "month": "2026-04",
            "n_trades": 76,
            "n_runs": 43,
            "retail_pct": 0.05263157894736842,
            "mixed_pct": 0.0,
            "instit_pct": 0.32894736842105265,
            "ambiguous_pct": 0.06578947368421052,
            "unobservable_pct": 0.5526315789473685,
            "unclear_pct": 0.618421052631579,
            "avg_trade_size": 9904.278947368422,
            "avg_run_notional": 17505.237209302326,
            "retail_qty_pct": 0.005987659949545606,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.5556062125771253,
            "ambiguous_qty_pct": 0.018236527765113524,
            "unobservable_qty_pct": 0.42016959970821555,
            "unclear_qty_pct": 0.4384061274733291,
            "retail_notional_pct": 0.005990499587366013,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.551733886416982,
            "ambiguous_notional_pct": 0.018375896010921385,
            "unobservable_notional_pct": 0.4238997179847307,
            "unclear_notional_pct": 0.4422756139956521,
            "run_retail_pct": 0.09302325581395349,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.18604651162790697,
            "run_ambiguous_pct": 0.09302325581395349,
            "run_unobservable_pct": 0.627906976744186,
            "run_unclear_pct": 0.7209302325581395,
            "avg_feature_coverage": 0.6127906976744186,
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.27906976744186046,
            "na_confidence_pct": 0.7209302325581395,
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
          "trade_id": "17",
          "timestamp": "2026-04-10T07:21:37.800430",
          "price": 1.18,
          "size": 800.0,
          "notional": 944.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 4164,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "16",
          "timestamp": "2026-04-10T07:18:38.188885",
          "price": 1.15,
          "size": 3200.0,
          "notional": 3679.9999999999995,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 4163,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "15",
          "timestamp": "2026-04-10T07:13:42.917020",
          "price": 1.12,
          "size": 220.0,
          "notional": 246.40000000000003,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 4162,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "14",
          "timestamp": "2026-04-10T07:12:07.926437",
          "price": 1.18,
          "size": 800.0,
          "notional": 944.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 4161,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "13",
          "timestamp": "2026-04-10T07:10:15.791885",
          "price": 1.15,
          "size": 21600.0,
          "notional": 24839.999999999996,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 4160,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "12",
          "timestamp": "2026-04-10T07:10:15.791885",
          "price": 1.15,
          "size": 1600.0,
          "notional": 1839.9999999999998,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 4160,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "11",
          "timestamp": "2026-04-10T07:10:15.791885",
          "price": 1.16,
          "size": 3200.0,
          "notional": 3711.9999999999995,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 4160,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "10",
          "timestamp": "2026-04-10T03:09:03.373442",
          "price": 1.18,
          "size": 800.0,
          "notional": 944.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 4159,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "9",
          "timestamp": "2026-04-10T03:08:48.877559",
          "price": 1.16,
          "size": 48800.0,
          "notional": 56607.99999999999,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 4158,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "8",
          "timestamp": "2026-04-10T03:08:48.877559",
          "price": 1.16,
          "size": 3200.0,
          "notional": 3711.9999999999995,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 4158,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "7",
          "timestamp": "2026-04-10T02:30:13.889699",
          "price": 1.2,
          "size": 800.0,
          "notional": 960.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 4157,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "6",
          "timestamp": "2026-04-10T02:27:46.512923",
          "price": 1.16,
          "size": 1600.0,
          "notional": 1855.9999999999998,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 4156,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "5",
          "timestamp": "2026-04-10T02:27:46.512265",
          "price": 1.16,
          "size": 800.0,
          "notional": 927.9999999999999,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 4156,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "4",
          "timestamp": "2026-04-10T02:27:31.463871",
          "price": 1.16,
          "size": 1600.0,
          "notional": 1855.9999999999998,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 4155,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "3",
          "timestamp": "2026-04-10T01:55:30.638284",
          "price": 1.2,
          "size": 6400.0,
          "notional": 7680.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 4154,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "2",
          "timestamp": "2026-04-10T01:55:30.637951",
          "price": 1.2,
          "size": 800.0,
          "notional": 960.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 4154,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "1",
          "timestamp": "2026-04-10T01:55:30.637951",
          "price": 1.2,
          "size": 800.0,
          "notional": 960.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 4154,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "11",
          "timestamp": "2026-04-09T07:57:01.788558",
          "price": 1.18,
          "size": 800.0,
          "notional": 944.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 4153,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "10",
          "timestamp": "2026-04-09T07:57:01.788558",
          "price": 1.17,
          "size": 34400.0,
          "notional": 40248.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 4153,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "9",
          "timestamp": "2026-04-09T07:29:39.615956",
          "price": 1.18,
          "size": 800.0,
          "notional": 944.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 4152,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "8",
          "timestamp": "2026-04-09T07:29:39.615956",
          "price": 1.17,
          "size": 2400.0,
          "notional": 2808.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 4152,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "7",
          "timestamp": "2026-04-09T07:29:22.093792",
          "price": 1.18,
          "size": 800.0,
          "notional": 944.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 4151,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "6",
          "timestamp": "2026-04-09T07:29:22.093792",
          "price": 1.17,
          "size": 2400.0,
          "notional": 2808.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 4151,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "5",
          "timestamp": "2026-04-09T07:24:06.012733",
          "price": 1.18,
          "size": 800.0,
          "notional": 944.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 4150,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "4",
          "timestamp": "2026-04-09T07:24:06.012733",
          "price": 1.16,
          "size": 4000.0,
          "notional": 4640.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 4150,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "3",
          "timestamp": "2026-04-09T07:19:55.183531",
          "price": 1.13,
          "size": 3200.0,
          "notional": 3615.9999999999995,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 4149,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "2",
          "timestamp": "2026-04-09T07:19:54.223385",
          "price": 1.13,
          "size": 18400.0,
          "notional": 20791.999999999996,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 4149,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "1",
          "timestamp": "2026-04-09T07:19:54.223385",
          "price": 1.13,
          "size": 4000.0,
          "notional": 4520.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 4149,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "23",
          "timestamp": "2026-04-08T06:28:56.235019",
          "price": 1.17,
          "size": 800.0,
          "notional": 936.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 4148,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "22",
          "timestamp": "2026-04-08T06:25:26.492787",
          "price": 1.15,
          "size": 3200.0,
          "notional": 3679.9999999999995,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 4147,
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
      "total_trades": 5287,
      "price_moving_trades": 2075,
      "pct_price_moving": 39.24721013807452,
      "all_movers": {
        "count": 2075,
        "avg_size": 9473.986737349398,
        "median_size": 968.0,
        "retail_count": 300,
        "mixed_count": 0,
        "institutional_count": 401,
        "ambiguous_count": 312,
        "unobservable_count": 1062,
        "retail_pct": 14.457831325301203,
        "mixed_pct": 0.0,
        "instit_pct": 19.32530120481928,
        "unclear_pct": 66.21686746987952
      },
      "positive_movers": {
        "count": 1078,
        "avg_size": 7489.208033395176,
        "median_size": 936.0,
        "retail_count": 35,
        "mixed_count": 0,
        "institutional_count": 128,
        "ambiguous_count": 71,
        "unobservable_count": 844,
        "retail_pct": 3.2467532467532463,
        "mixed_pct": 0.0,
        "instit_pct": 11.873840445269018,
        "unclear_pct": 84.87940630797773
      },
      "negative_movers": {
        "count": 997,
        "avg_size": 11620.01626880642,
        "median_size": 2640.0,
        "retail_count": 265,
        "mixed_count": 0,
        "institutional_count": 273,
        "ambiguous_count": 241,
        "unobservable_count": 218,
        "retail_pct": 26.57973921765296,
        "mixed_pct": 0.0,
        "instit_pct": 27.382146439317957,
        "unclear_pct": 46.03811434302909
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
          "opening": 0.0,
          "continuous": 0.9684484385987898,
          "closing": 0.031551561401210196,
          "auctions": 0.031551561401210196,
          "other": 0.0
        },
        "1M": {
          "opening": 0.0,
          "continuous": 0.9922825052426898,
          "closing": 0.0077174947573101695,
          "auctions": 0.0077174947573101695,
          "other": 0.0
        },
        "3M": {
          "opening": 0.0006864678263911805,
          "continuous": 0.9803136912596909,
          "closing": 0.01899984091391788,
          "auctions": 0.01968630874030906,
          "other": 0.0
        },
        "6M": {
          "opening": 0.00039042039252642303,
          "continuous": 0.9858330734689764,
          "closing": 0.013240974891720313,
          "auctions": 0.013631395284246737,
          "other": 0.0005355312467769839
        }
      },
      "hhi": {
        "1D": 0.3946648231090391,
        "1M": 0.542391883282902,
        "3M": 0.43790708592129146,
        "6M": 0.41772045479485026
      },
      "profile_buckets": [
        {
          "time": "09:00",
          "avg_share": 0.0118
        },
        {
          "time": "09:30",
          "avg_share": 0.1633
        },
        {
          "time": "10:00",
          "avg_share": 0.089
        },
        {
          "time": "10:30",
          "avg_share": 0.0748
        },
        {
          "time": "11:00",
          "avg_share": 0.0611
        },
        {
          "time": "11:30",
          "avg_share": 0.0437
        },
        {
          "time": "13:00",
          "avg_share": 0.0572
        },
        {
          "time": "13:30",
          "avg_share": 0.0569
        },
        {
          "time": "14:00",
          "avg_share": 0.0928
        },
        {
          "time": "14:30",
          "avg_share": 0.0661
        },
        {
          "time": "15:00",
          "avg_share": 0.1247
        },
        {
          "time": "15:30",
          "avg_share": 0.1433
        },
        {
          "time": "16:00",
          "avg_share": 0.0154
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "480",
          "auctions_pct": 1.8401792643978854,
          "hhi": 0.4028857717280145,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400",
            "you": true
          }
        },
        {
          "ticker": "563",
          "auctions_pct": 2.6216772747336288,
          "hhi": 0.4148831104907908,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "95",
          "auctions_pct": 1.3431273737785183,
          "hhi": 0.29292818070616433,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "35",
          "auctions_pct": 7.403200544375646,
          "hhi": 0.3411299990316411,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "1570",
          "auctions_pct": 0.4237885802609707,
          "hhi": 0.5181562391212494,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "1321",
          "auctions_pct": 0.5795054139246021,
          "hhi": 0.5406991625359565,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "978",
          "auctions_pct": 1.1131200962393626,
          "hhi": 0.40912732386184436,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "369",
          "auctions_pct": 2.3958962055943704,
          "hhi": 0.5348463942898815,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "542",
          "auctions_pct": 0.08165614288825829,
          "hhi": 0.256857147587259,
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
