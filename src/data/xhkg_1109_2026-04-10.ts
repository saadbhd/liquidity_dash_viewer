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
      "ticker": "1109",
      "name": "CHINA RES LAND",
      "marketCap": 210220098788.92,
      "sector": "Property Development",
      "industry": "Properties & Construction - Properties"
    },
    {
      "ticker": "12",
      "name": "HENDERSON LAND",
      "marketCap": 146500370710.78,
      "sector": "Property Development",
      "industry": "Properties & Construction - Properties"
    },
    {
      "ticker": "1113",
      "name": "CK ASSET",
      "marketCap": 167009422050.76,
      "sector": "Property Development",
      "industry": "Properties & Construction - Properties"
    },
    {
      "ticker": "688",
      "name": "CHINA OVERSEAS",
      "marketCap": 131448051255.34999,
      "sector": "Property Development",
      "industry": "Properties & Construction - Properties"
    },
    {
      "ticker": "16",
      "name": "SHK PPT",
      "marketCap": 393518561209.2,
      "sector": "Property Development",
      "industry": "Properties & Construction - Properties"
    },
    {
      "ticker": "1918",
      "name": "SUNAC",
      "marketCap": 17320164308.72,
      "sector": "Property Development",
      "industry": "Properties & Construction - Properties"
    },
    {
      "ticker": "960",
      "name": "LONGFOR GROUP",
      "marketCap": 53938894930.72,
      "sector": "Property Development",
      "industry": "Properties & Construction - Properties"
    },
    {
      "ticker": "3900",
      "name": "GREENTOWN CHINA",
      "marketCap": 21789756760.2,
      "sector": "Property Development",
      "industry": "Properties & Construction - Properties"
    },
    {
      "ticker": "83",
      "name": "SINO LAND",
      "marketCap": 110304670255.79001,
      "sector": "Property Development",
      "industry": "Properties & Construction - Properties"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XHKG",
    "currency": "HKD",
    "ticker": "1109",
    "company": "CHINA RES LAND",
    "asof_date": "2026-04-10",
    "industry": "Properties & Construction - Properties",
    "sector": "Property Development",
    "market_cap_display": "210.2B",
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
          "score_pca": 90.94794094794095,
          "score_pca_percentile": 90.94794094794095,
          "rank_pca": 234,
          "total": 2574,
          "adv_notional_sgd": 466655509.32000005,
          "adv_volume_shares": 15861846.0,
          "free_float_shares": null,
          "turnover_ratio": 0.002224369709527727,
          "votes": 6539.0,
          "trades": 6539.0,
          "spread_pct": 0.00080361250651055,
          "spread_ticks": null,
          "amihud": 2.917506299246423e-12,
          "volatility": 0.2058620026312268
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
          "peer_median_adv": 176801355.33499998,
          "peer_median_score_pca": 88.5975135975136,
          "peer_median_trades": 3448.5,
          "peer_median_volatility": 0.28372599276153543,
          "peer_median_spread_pct": 0.0011750952546211821,
          "peer_median_spread_ticks": 1.1443139622616643,
          "peer_median_amihud": 4.4048675854925746e-11,
          "peer_median_turnover_ratio": 0.005670118815919856,
          "target_vs_peer": {
            "score_pca_delta": 2.35,
            "adv_delta_pct": 163.9,
            "trades_delta_pct": 89.62,
            "volatility_delta_pct": 27.44,
            "spread_pct_delta_pct": 31.61,
            "spread_ticks_delta_pct": null,
            "amihud_delta_pct": 93.38,
            "turnover_ratio_delta_pct": -60.77
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1109",
            "score_pca": 90.94794094794095,
            "rank_pca": 234,
            "adv": 466655509.32000005,
            "trades": 6539.0,
            "volatility": 0.2058620026312268,
            "spread_pct": 0.00080361250651055,
            "spread_ticks": null,
            "amihud": 2.917506299246423e-12,
            "turnover_ratio": 0.002224369709527727,
            "is_target": true
          },
          {
            "ticker": "12",
            "score_pca": 88.77233877233877,
            "rank_pca": 290,
            "adv": 225547618.32,
            "trades": 3320.0,
            "volatility": 0.261211231942709,
            "spread_pct": 0.0008898335453364411,
            "spread_ticks": null,
            "amihud": 3.195949483317428e-11,
            "turnover_ratio": 0.005510096665546402,
            "is_target": false
          },
          {
            "ticker": "1113",
            "score_pca": 88.42268842268842,
            "rank_pca": 299,
            "adv": 263398900.32,
            "trades": 4422.0,
            "volatility": 0.18334437291812172,
            "spread_pct": 0.0005691839878242957,
            "spread_ticks": null,
            "amihud": 5.613785687667721e-11,
            "turnover_ratio": 0.0030591574597528667,
            "is_target": false
          },
          {
            "ticker": "688",
            "score_pca": 90.79254079254079,
            "rank_pca": 238,
            "adv": 219905630.35,
            "trades": 5041.0,
            "volatility": 0.27936404424888334,
            "spread_pct": 0.0009892528840137497,
            "spread_ticks": null,
            "amihud": 7.753461497590825e-11,
            "turnover_ratio": 0.00583014096629331,
            "is_target": false
          },
          {
            "ticker": "16",
            "score_pca": 90.44289044289044,
            "rank_pca": 247,
            "adv": 626932044.5999999,
            "trades": 3577.0,
            "volatility": 0.2880879412741875,
            "spread_pct": 0.0008947194182941571,
            "spread_ticks": 1.2448024948024947,
            "amihud": 5.770872678145445e-12,
            "turnover_ratio": 0.0028948129460913954,
            "is_target": false
          },
          {
            "ticker": "1918",
            "score_pca": 87.64568764568764,
            "rank_pca": 319,
            "adv": 99836791.60000001,
            "trades": 2657.0,
            "volatility": 0.4606506436325561,
            "spread_pct": 0.009655185627612866,
            "spread_ticks": 1.0104889711553293,
            "amihud": 0.0,
            "turnover_ratio": 0.00947470442535754,
            "is_target": false
          },
          {
            "ticker": "960",
            "score_pca": 93.12354312354313,
            "rank_pca": 178,
            "adv": 133697080.32,
            "trades": 6677.0,
            "volatility": 0.5052103041057867,
            "spread_pct": 0.0013609376252286145,
            "spread_ticks": 1.0438254297208338,
            "amihud": 2.5166873819665056e-10,
            "turnover_ratio": 0.007672070401461149,
            "is_target": false
          },
          {
            "ticker": "3900",
            "score_pca": 83.29448329448329,
            "rank_pca": 431,
            "adv": 53378017.949999996,
            "trades": 1976.0,
            "volatility": 0.2720835380596595,
            "spread_pct": 0.002092673382053148,
            "spread_ticks": 1.7582599118942732,
            "amihud": 2.2463193903326337e-11,
            "turnover_ratio": 0.0061617416445283605,
            "is_target": false
          },
          {
            "ticker": "83",
            "score_pca": 82.32323232323232,
            "rank_pca": 456,
            "adv": 102350714.96,
            "trades": 1705.0,
            "volatility": 0.29657179275250495,
            "spread_pct": 0.0022887048373756206,
            "spread_ticks": null,
            "amihud": 8.25894120961027e-11,
            "turnover_ratio": 0.002159251904240548,
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
              "mean": 215630849.8025,
              "median": 176801355.33499998,
              "min": 53378017.949999996,
              "max": 626932044.5999999,
              "p5": 69638588.7275,
              "p95": 499695444.10199976,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 3671.875,
              "median": 3448.5,
              "min": 1705.0,
              "max": 6677.0,
              "p5": 1799.85,
              "p95": 6104.4,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3183154836168011,
              "median": 0.28372599276153543,
              "min": 0.18334437291812172,
              "max": 0.5052103041057867,
              "p5": 0.21059777357672727,
              "p95": 0.48961442294015595,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.002342561413467362,
              "median": 0.0011750952546211821,
              "min": 0.0005691839878242957,
              "max": 0.009655185627612866,
              "p5": 0.0006814113329535466,
              "p95": 0.007076917351029827,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.60155229449981e-11,
              "median": 4.4048675854925746e-11,
              "min": 0.0,
              "max": 2.5166873819665056e-10,
              "p5": 2.0198054373509058e-12,
              "p95": 1.9249097406145872e-10,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005345247051658946,
              "median": 0.005670118815919856,
              "min": 0.002159251904240548,
              "max": 0.00947470442535754,
              "p5": 0.0024166982688883444,
              "p95": 0.008843782516993802,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.2643442018932327,
              "median": 1.1443139622616643,
              "min": 1.0104889711553293,
              "max": 1.7582599118942732,
              "p5": 1.015489439940155,
              "p95": 1.6812412993305061,
              "count": 4
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.001361470388019148,
            "market": 0.005388454653585173,
            "sector": 0.0,
            "peers": 0.007830736659247606,
            "vs_market": -0.004026984265566025,
            "vs_sector": 0.001361470388019148,
            "vs_peers": -0.006469266271228458
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 95.2991452991453,
          "score_pca_percentile": 95.2991452991453,
          "rank_pca": 122,
          "total": 2574,
          "adv_notional_sgd": 457762291.2,
          "adv_volume_shares": 15732330.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0022062071660697213,
          "votes": 7594.0,
          "trades": 7594.0,
          "spread_pct": 0.000878660101499616,
          "spread_ticks": null,
          "amihud": 2.293646571195137e-11,
          "volatility": 0.2653840506594112
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
          "peer_median_adv": 222162271.08,
          "peer_median_score_pca": 93.62859362859362,
          "peer_median_trades": 4474.0,
          "peer_median_volatility": 0.37063294835520555,
          "peer_median_spread_pct": 0.0012036997248617179,
          "peer_median_spread_ticks": 1.2768143469837185,
          "peer_median_amihud": 6.385179863602438e-11,
          "peer_median_turnover_ratio": 0.0075258184924623705,
          "target_vs_peer": {
            "score_pca_delta": 1.67,
            "adv_delta_pct": 106.0,
            "trades_delta_pct": 69.74,
            "volatility_delta_pct": 28.4,
            "spread_pct_delta_pct": 27.0,
            "spread_ticks_delta_pct": null,
            "amihud_delta_pct": 64.08,
            "turnover_ratio_delta_pct": -70.68
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1109",
            "score_pca": 95.2991452991453,
            "rank_pca": 122,
            "adv": 457762291.2,
            "trades": 7594.0,
            "volatility": 0.2653840506594112,
            "spread_pct": 0.000878660101499616,
            "spread_ticks": null,
            "amihud": 2.293646571195137e-11,
            "turnover_ratio": 0.0022062071660697213,
            "is_target": true
          },
          {
            "ticker": "12",
            "score_pca": 94.4055944055944,
            "rank_pca": 145,
            "adv": 304216362.96000004,
            "trades": 4080.0,
            "volatility": 0.32724254887140086,
            "spread_pct": 0.0009332604047518712,
            "spread_ticks": null,
            "amihud": 4.911839445891146e-11,
            "turnover_ratio": 0.007796700254536966,
            "is_target": false
          },
          {
            "ticker": "1113",
            "score_pca": 94.05594405594405,
            "rank_pca": 154,
            "adv": 329039728.12,
            "trades": 4721.0,
            "volatility": 0.29238382623579806,
            "spread_pct": 0.000708530903526535,
            "spread_ticks": null,
            "amihud": 4.3757540734773114e-11,
            "turnover_ratio": 0.003954473996331929,
            "is_target": false
          },
          {
            "ticker": "688",
            "score_pca": 95.57109557109557,
            "rank_pca": 115,
            "adv": 333784161.72,
            "trades": 5659.0,
            "volatility": 0.3266467656347352,
            "spread_pct": 0.0010014056673066359,
            "spread_ticks": null,
            "amihud": 5.313823403915752e-11,
            "turnover_ratio": 0.00841135315825932,
            "is_target": false
          },
          {
            "ticker": "16",
            "score_pca": 94.71639471639472,
            "rank_pca": 137,
            "adv": 745146207.1999999,
            "trades": 4308.0,
            "volatility": 0.42877464327149745,
            "spread_pct": 0.001025825532669702,
            "spread_ticks": 1.379001828295795,
            "amihud": 2.453867444346512e-11,
            "turnover_ratio": 0.003553211769729825,
            "is_target": false
          },
          {
            "ticker": "1918",
            "score_pca": 90.94794094794095,
            "rank_pca": 234,
            "adv": 137299408.73999998,
            "trades": 3304.0,
            "volatility": 0.4140233478390103,
            "spread_pct": 0.009264745429335143,
            "spread_ticks": 1.0104889711553293,
            "amihud": 7.456536323289123e-11,
            "turnover_ratio": 0.012161582642795137,
            "is_target": false
          },
          {
            "ticker": "960",
            "score_pca": 93.2012432012432,
            "rank_pca": 176,
            "adv": 140108179.2,
            "trades": 5435.0,
            "volatility": 0.4900050729015962,
            "spread_pct": 0.0013815739170537338,
            "spread_ticks": 1.1746268656716419,
            "amihud": 1.6092299821051213e-10,
            "turnover_ratio": 0.007254936730387775,
            "is_target": false
          },
          {
            "ticker": "3900",
            "score_pca": 92.46309246309247,
            "rank_pca": 195,
            "adv": 99424650.0,
            "trades": 4640.0,
            "volatility": 0.43111614491745376,
            "spread_pct": 0.0020516660606640018,
            "spread_ticks": 1.8298573177201833,
            "amihud": 1.743574087689281e-10,
            "turnover_ratio": 0.00998493748228129,
            "is_target": false
          },
          {
            "ticker": "83",
            "score_pca": 85.78088578088578,
            "rank_pca": 367,
            "adv": 103200470.1,
            "trades": 2002.0,
            "volatility": 0.2781480917985586,
            "spread_pct": 0.0021223548024102666,
            "spread_ticks": null,
            "amihud": 1.1656323914953326e-10,
            "turnover_ratio": 0.002288265569079852,
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
              "mean": 274027396.005,
              "median": 222162271.08,
              "min": 99424650.0,
              "max": 745146207.1999999,
              "p5": 100746187.035,
              "p95": 601169491.2819997,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 4268.625,
              "median": 4474.0,
              "min": 2002.0,
              "max": 5659.0,
              "p5": 2457.7,
              "p95": 5580.599999999999,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3735425551837563,
              "median": 0.37063294835520555,
              "min": 0.2781480917985586,
              "max": 0.4900050729015962,
              "p5": 0.2831305988515924,
              "p95": 0.4693939481071463,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0023111703397147364,
              "median": 0.0012036997248617179,
              "min": 0.000708530903526535,
              "max": 0.009264745429335143,
              "p5": 0.0007871862289554026,
              "p95": 0.006764908709911433,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 8.71202316297715e-11,
              "median": 6.385179863602438e-11,
              "min": 2.453867444346512e-11,
              "max": 1.743574087689281e-10,
              "p5": 3.126527764542292e-11,
              "p95": 1.696553650734825e-10,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006925682700425262,
              "median": 0.0075258184924623705,
              "min": 0.002288265569079852,
              "max": 0.012161582642795137,
              "p5": 0.0027309967393073426,
              "p95": 0.01139975683661529,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.3484937457107373,
              "median": 1.2768143469837185,
              "min": 1.0104889711553293,
              "max": 1.8298573177201833,
              "p5": 1.035109655332776,
              "p95": 1.762228994306525,
              "count": 4
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": -0.04604409857328118,
            "market": 0.005817570896814672,
            "sector": -0.0250845348570794,
            "peers": -0.059594650973936125,
            "vs_market": -0.05186166947009585,
            "vs_sector": -0.02095956371620178,
            "vs_peers": 0.013550552400654947
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 96.27039627039628,
          "score_pca_percentile": 96.27039627039628,
          "rank_pca": 97,
          "total": 2574,
          "adv_notional_sgd": 481868372.44,
          "adv_volume_shares": 16069797.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0022535315047857315,
          "votes": 9157.0,
          "trades": 9157.0,
          "spread_pct": 0.0008669590179393136,
          "spread_ticks": null,
          "amihud": 2.3526002698948997e-11,
          "volatility": 0.3159155703339024
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
          "peer_median_adv": 232717210.51999998,
          "peer_median_score_pca": 93.82284382284382,
          "peer_median_trades": 4615.0,
          "peer_median_volatility": 0.34512033188695324,
          "peer_median_spread_pct": 0.001121833862816541,
          "peer_median_spread_ticks": 1.2173768496504398,
          "peer_median_amihud": 7.217557611986441e-11,
          "peer_median_turnover_ratio": 0.006677216604785916,
          "target_vs_peer": {
            "score_pca_delta": 2.45,
            "adv_delta_pct": 107.1,
            "trades_delta_pct": 98.42,
            "volatility_delta_pct": 8.46,
            "spread_pct_delta_pct": 22.72,
            "spread_ticks_delta_pct": null,
            "amihud_delta_pct": 67.4,
            "turnover_ratio_delta_pct": -66.25
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1109",
            "score_pca": 96.27039627039628,
            "rank_pca": 97,
            "adv": 481868372.44,
            "trades": 9157.0,
            "volatility": 0.3159155703339024,
            "spread_pct": 0.0008669590179393136,
            "spread_ticks": null,
            "amihud": 2.3526002698948997e-11,
            "turnover_ratio": 0.0022535315047857315,
            "is_target": true
          },
          {
            "ticker": "12",
            "score_pca": 94.52214452214453,
            "rank_pca": 142,
            "adv": 286520859.24,
            "trades": 3989.0,
            "volatility": 0.3111061667541499,
            "spread_pct": 0.0008795868869972168,
            "spread_ticks": null,
            "amihud": 5.194547874413043e-11,
            "turnover_ratio": 0.006593660364812976,
            "is_target": false
          },
          {
            "ticker": "1113",
            "score_pca": 93.58974358974359,
            "rank_pca": 166,
            "adv": 252571061.04,
            "trades": 4265.0,
            "volatility": 0.2665520687128436,
            "spread_pct": 0.0006248209956155194,
            "spread_ticks": null,
            "amihud": 5.1822077515106963e-11,
            "turnover_ratio": 0.003191712201108313,
            "is_target": false
          },
          {
            "ticker": "688",
            "score_pca": 96.07614607614607,
            "rank_pca": 102,
            "adv": 283416211.32,
            "trades": 6307.0,
            "volatility": 0.3102761437369334,
            "spread_pct": 0.0009560518673201894,
            "spread_ticks": null,
            "amihud": 4.7905259736417686e-11,
            "turnover_ratio": 0.006760772844758857,
            "is_target": false
          },
          {
            "ticker": "16",
            "score_pca": 96.19269619269619,
            "rank_pca": 99,
            "adv": 799594745.1999999,
            "trades": 5012.0,
            "volatility": 0.3791344970197565,
            "spread_pct": 0.001004274517222206,
            "spread_ticks": 1.288824160662272,
            "amihud": 2.037808174441628e-11,
            "turnover_ratio": 0.004429916395845607,
            "is_target": false
          },
          {
            "ticker": "1918",
            "score_pca": 92.26884226884226,
            "rank_pca": 200,
            "adv": 212863360.0,
            "trades": 4965.0,
            "volatility": 0.8299707624792915,
            "spread_pct": 0.008896226962129166,
            "spread_ticks": 1.0221482524644732,
            "amihud": 9.24056734955984e-11,
            "turnover_ratio": 0.01807298730532039,
            "is_target": false
          },
          {
            "ticker": "960",
            "score_pca": 94.05594405594405,
            "rank_pca": 154,
            "adv": 156350665.89,
            "trades": 5454.0,
            "volatility": 0.4034232660711787,
            "spread_pct": 0.001239393208410876,
            "spread_ticks": 1.1459295386386077,
            "amihud": 1.0005281514873236e-10,
            "turnover_ratio": 0.007588157212700881,
            "is_target": false
          },
          {
            "ticker": "3900",
            "score_pca": 92.38539238539238,
            "rank_pca": 197,
            "adv": 106635202.5,
            "trades": 4190.0,
            "volatility": 0.4436274498116222,
            "spread_pct": 0.002282320563794547,
            "spread_ticks": 1.8912272404823836,
            "amihud": 1.6271576045640144e-10,
            "turnover_ratio": 0.00953576469854318,
            "is_target": false
          },
          {
            "ticker": "83",
            "score_pca": 87.2960372960373,
            "rank_pca": 328,
            "adv": 117488761.74,
            "trades": 2141.0,
            "volatility": 0.29140829601595775,
            "spread_pct": 0.0018800180955538149,
            "spread_ticks": null,
            "amihud": 1.107002485576059e-10,
            "turnover_ratio": 0.0024953533844954004,
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
              "mean": 276930108.36625,
              "median": 232717210.51999998,
              "min": 106635202.5,
              "max": 799594745.1999999,
              "p5": 110433948.234,
              "p95": 620018885.1139997,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 4540.375,
              "median": 4615.0,
              "min": 2141.0,
              "max": 6307.0,
              "p5": 2787.8,
              "p95": 6008.45,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4044373313252167,
              "median": 0.34512033188695324,
              "min": 0.2665520687128436,
              "max": 0.8299707624792915,
              "p5": 0.27525174826893356,
              "p95": 0.694750603045607,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.002220336637130442,
              "median": 0.001121833862816541,
              "min": 0.0006248209956155194,
              "max": 0.008896226962129166,
              "p5": 0.0007139890575991135,
              "p95": 0.006581359722712046,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.974067442480118e-11,
              "median": 7.217557611986441e-11,
              "min": 2.037808174441628e-11,
              "max": 1.6271576045640144e-10,
              "p5": 3.0012594041616775e-11,
              "p95": 1.4451033129182298e-10,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0073335405509482,
              "median": 0.006677216604785916,
              "min": 0.0024953533844954004,
              "max": 0.01807298730532039,
              "p5": 0.00273907897030992,
              "p95": 0.015084959392948362,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.337032298061934,
              "median": 1.2173768496504398,
              "min": 1.0221482524644732,
              "max": 1.8912272404823836,
              "p5": 1.0407154453905934,
              "p95": 1.8008667785093666,
              "count": 4
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": 0.01030219780219821,
            "market": 0.07151156981189555,
            "sector": -0.032529958558431216,
            "peers": 0.021887243401319756,
            "vs_market": -0.06120937200969734,
            "vs_sector": 0.042832156360629425,
            "vs_peers": -0.011585045599121546
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
          "adv_notional_sgd": 455210739.48,
          "adv_volume_shares": 15568587.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0021832448343621002,
          "votes": 8474.0,
          "trades": 8474.0,
          "spread_pct": 0.0008588270028513542,
          "spread_ticks": null,
          "amihud": 2.7082328318186272e-11,
          "volatility": 0.3119208645512651
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
          "peer_median_adv": 180452416.9,
          "peer_median_score_pca": 92.3076923076923,
          "peer_median_trades": 3793.5,
          "peer_median_volatility": 0.3016506208193953,
          "peer_median_spread_pct": 0.0010730172754437504,
          "peer_median_spread_ticks": 1.3283613896218438,
          "peer_median_amihud": 6.440058916747675e-11,
          "peer_median_turnover_ratio": 0.005696594954572875,
          "target_vs_peer": {
            "score_pca_delta": 3.34,
            "adv_delta_pct": 152.3,
            "trades_delta_pct": 123.38,
            "volatility_delta_pct": -3.4,
            "spread_pct_delta_pct": 19.96,
            "spread_ticks_delta_pct": null,
            "amihud_delta_pct": 57.95,
            "turnover_ratio_delta_pct": -61.67
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1109",
            "score_pca": 95.64879564879564,
            "rank_pca": 113,
            "adv": 455210739.48,
            "trades": 8474.0,
            "volatility": 0.3119208645512651,
            "spread_pct": 0.0008588270028513542,
            "spread_ticks": null,
            "amihud": 2.7082328318186272e-11,
            "turnover_ratio": 0.0021832448343621002,
            "is_target": true
          },
          {
            "ticker": "12",
            "score_pca": 92.07459207459208,
            "rank_pca": 205,
            "adv": 196676127.67000002,
            "trades": 2837.5,
            "volatility": 0.26453350468665227,
            "spread_pct": 0.0009308783231910297,
            "spread_ticks": null,
            "amihud": 5.5962606174350466e-11,
            "turnover_ratio": 0.004954212277300337,
            "is_target": false
          },
          {
            "ticker": "1113",
            "score_pca": 90.9090909090909,
            "rank_pca": 235,
            "adv": 178175013.8,
            "trades": 3243.0,
            "volatility": 0.2443597199809208,
            "spread_pct": 0.0006606415221752384,
            "spread_ticks": null,
            "amihud": 5.39234697799653e-11,
            "turnover_ratio": 0.002374726585655344,
            "is_target": false
          },
          {
            "ticker": "688",
            "score_pca": 95.41569541569541,
            "rank_pca": 119,
            "adv": 270495195.98,
            "trades": 6036.5,
            "volatility": 0.2787639210137761,
            "spread_pct": 0.0009196974954357757,
            "spread_ticks": null,
            "amihud": 4.613267336840034e-11,
            "turnover_ratio": 0.006438977631845413,
            "is_target": false
          },
          {
            "ticker": "16",
            "score_pca": 94.01709401709401,
            "rank_pca": 155,
            "adv": 487273925.9,
            "trades": 4008.0,
            "volatility": 0.32453732062501456,
            "spread_pct": 0.0008935637161463768,
            "spread_ticks": 1.3283613896218438,
            "amihud": 2.3743041596530157e-11,
            "turnover_ratio": 0.0029985282159282643,
            "is_target": false
          },
          {
            "ticker": "1918",
            "score_pca": 92.54079254079254,
            "rank_pca": 193,
            "adv": 182729820.0,
            "trades": 4011.5,
            "volatility": 0.6252129883757457,
            "spread_pct": 0.007977792688253927,
            "spread_ticks": 1.0176009317686447,
            "amihud": 7.283857216060303e-11,
            "turnover_ratio": 0.014239112476626146,
            "is_target": false
          },
          {
            "ticker": "960",
            "score_pca": 94.32789432789433,
            "rank_pca": 147,
            "adv": 159039559.725,
            "trades": 5525.5,
            "volatility": 0.37306668091468287,
            "spread_pct": 0.001215156227696471,
            "spread_ticks": 1.1463339017206635,
            "amihud": 9.869322421152091e-11,
            "turnover_ratio": 0.007380072512762018,
            "is_target": false
          },
          {
            "ticker": "3900",
            "score_pca": 91.72494172494171,
            "rank_pca": 214,
            "adv": 86144910.0,
            "trades": 3579.0,
            "volatility": 0.3921957332660435,
            "spread_pct": 0.0020537903990050276,
            "spread_ticks": 1.7290241193376574,
            "amihud": 1.5147002507350674e-10,
            "turnover_ratio": 0.009086251179656892,
            "is_target": false
          },
          {
            "ticker": "83",
            "score_pca": 84.42113442113443,
            "rank_pca": 402,
            "adv": 79588692.03,
            "trades": 1655.0,
            "volatility": 0.25905042705281117,
            "spread_pct": 0.0018242412018858538,
            "spread_ticks": 1.567076167076167,
            "amihud": 1.2416713997418956e-10,
            "turnover_ratio": 0.0017913538742814626,
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
              "mean": 205015405.638125,
              "median": 180452416.9,
              "min": 79588692.03,
              "max": 487273925.9,
              "p5": 81883368.3195,
              "p95": 411401370.42799985,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 3862.0,
              "median": 3793.5,
              "min": 1655.0,
              "max": 6036.5,
              "p5": 2068.875,
              "p95": 5857.65,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3452150369894559,
              "median": 0.3016506208193953,
              "min": 0.2443597199809208,
              "max": 0.6252129883757457,
              "p5": 0.24950146745608243,
              "p95": 0.5436569490873497,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0020594701967237127,
              "median": 0.0010730172754437504,
              "min": 0.0006606415221752384,
              "max": 0.007977792688253927,
              "p5": 0.0007421642900651369,
              "p95": 0.005904391887016809,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.83663440423833e-11,
              "median": 6.440058916747675e-11,
              "min": 2.3743041596530157e-11,
              "max": 1.5147002507350674e-10,
              "p5": 3.157941271668472e-11,
              "p95": 1.4191401528874572e-10,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0061579043442569845,
              "median": 0.005696594954572875,
              "min": 0.0017913538742814626,
              "max": 0.014239112476626146,
              "p5": 0.001995534323262321,
              "p95": 0.012435611022686905,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.3576793019049953,
              "median": 1.3283613896218438,
              "min": 1.0176009317686447,
              "max": 1.7290241193376574,
              "p5": 1.0433475257590485,
              "p95": 1.6966345288853593,
              "count": 5
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": -0.04480519480519496,
            "market": 0.11289080174108235,
            "sector": -0.12629476847430543,
            "peers": -0.011521034843838485,
            "vs_market": -0.1576959965462773,
            "vs_sector": 0.08148957366911047,
            "vs_peers": -0.033284159961356474
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Current trading looks orderly, with bid depth slightly ahead of ask depth and a 0.4 tick spread. That supports workable access in the market today.",
        "market_comparison": "Return 0.1% vs peers 0.8%."
      },
      "30d": {
        "liquidity": "Monthly tradability looks above average, with a 1M liquidity score of 95.3 compared with a peer median of 93.6. That suggests access has remained solid over the recent month.",
        "market_comparison": "The stock fell 4.6% over 1M, compared with a 6.0% drop for peers and a 0.6% gain for the market. That matters because liquidity has held up even as price performance lagged the broader market."
      },
      "3m": {
        "liquidity": "Quarterly liquidity looks firm, with a 3M score of 96.3 compared with a peer median of 93.8. That points to steady access over a longer trading window.",
        "market_comparison": "The stock returned 1.0% over 3M compared with 2.2% for peers. That matters because peer-relative tradability stayed healthy despite weaker share price performance."
      },
      "6m": {
        "liquidity": "Six-month tradability is solid for the company’s size, with a liquidity score of 95.6 compared with a peer median of 92.3. That supports a view of consistently accessible liquidity over time.",
        "market_comparison": "Primary average daily volume is HK$455.2M compared with a peer median of HK$180.5M. That matters because deeper turnover may make access easier than for many similarly sized names."
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
          "median": 0.5078329293739017,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "50.8%",
          "display_range": null,
          "display_text": "50.8%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 50.8,
          "plain_english": "Market explains about 50.8% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.3814802062196737,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "38.1%",
          "display_range": null,
          "display_text": "38.1%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 38.1,
          "plain_english": "Sector explains about 38.1% of price moves in the current state."
        },
        "company_share": {
          "median": 0.11068686440642453,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "11.1%",
          "display_range": null,
          "display_text": "11.1%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 11.1,
          "plain_english": "Company-specific explains about 11.1% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 0.9767686357650626,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.98",
          "display_range": null,
          "display_text": "0.98",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Moderate",
          "plain_english": "Moderate market link: a 1% market move has lined up with about a 0.98% stock move in the same direction in this state.",
          "value_num": 0.98
        },
        "beta_stock_lag": {
          "median": 0.40927539757562015,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.41",
          "display_range": null,
          "display_text": "0.41",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 0.41
        },
        "beta_sector": {
          "median": 0.2772780114641553,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.28",
          "display_range": null,
          "display_text": "0.28",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Weak",
          "plain_english": "Weak sector link: a 1% sector move has lined up with about a 0.28% stock move in the same direction in this state.",
          "value_num": 0.28
        },
        "beta_market_lag": {
          "median": 1.284421832787377,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.28",
          "display_range": null,
          "display_text": "1.28",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 1.28
        },
        "beta_sector_lag": {
          "median": -2.3830245015715064,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-2.38",
          "display_range": null,
          "display_text": "-2.38",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -2.38
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
            "median": 0.5486916485938046,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "54.9%",
            "display_range": null,
            "display_text": "54.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
            "kind": "share_pct",
            "value_pct": 54.9,
            "plain_english": "Market explains about 54.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.5486916485938046,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "54.9%",
              "display_range": null,
              "display_text": "54.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 54.9,
              "plain_english": "Market explains about 54.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.37092004618577706,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.1%",
              "display_range": null,
              "display_text": "37.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 37.1,
              "plain_english": "Sector explains about 37.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.08038830522041825,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "8.0%",
              "display_range": null,
              "display_text": "8.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 8.0,
              "plain_english": "Company-specific explains about 8.0% of price moves in the current state."
            }
          },
          "summary": "Mar: Mostly market-driven, though based on only 6 trading days."
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
            "median": 0.458491138177615,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "45.8%",
            "display_range": null,
            "display_text": "45.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
            "kind": "share_pct",
            "value_pct": 45.8,
            "plain_english": "Sector explains about 45.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2427592064221012,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "24.3%",
              "display_range": null,
              "display_text": "24.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 24.3,
              "plain_english": "Market explains about 24.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.458491138177615,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.8%",
              "display_range": null,
              "display_text": "45.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 45.8,
              "plain_english": "Sector explains about 45.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.2987496554002839,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "29.9%",
              "display_range": null,
              "display_text": "29.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 29.9,
              "plain_english": "Company-specific explains about 29.9% of price moves in the current state."
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
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.3841744607674973,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "38.4%",
            "display_range": null,
            "display_text": "38.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 38.4,
            "plain_english": "Sector explains about 38.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.23314280572625828,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "23.3%",
              "display_range": null,
              "display_text": "23.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 23.3,
              "plain_english": "Market explains about 23.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3841744607674973,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "38.4%",
              "display_range": null,
              "display_text": "38.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 38.4,
              "plain_english": "Sector explains about 38.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3826827335062444,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "38.3%",
              "display_range": null,
              "display_text": "38.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 38.3,
              "plain_english": "Company-specific explains about 38.3% of price moves in the current state."
            }
          },
          "summary": "May: More mixed, though sector-driven still has the largest share."
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
            "median": 0.4988522447683997,
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
            "plain_english": "Company-specific explains about 49.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.1918024321081413,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "19.2%",
              "display_range": null,
              "display_text": "19.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 19.2,
              "plain_english": "Market explains about 19.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3093453231234591,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "30.9%",
              "display_range": null,
              "display_text": "30.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 30.9,
              "plain_english": "Sector explains about 30.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4988522447683997,
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
              "plain_english": "Company-specific explains about 49.9% of price moves in the current state."
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
            "median": 0.48942772957552305,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "48.9%",
            "display_range": null,
            "display_text": "48.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 48.9,
            "plain_english": "Company-specific explains about 48.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.16486843918994337,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "16.5%",
              "display_range": null,
              "display_text": "16.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 16.5,
              "plain_english": "Market explains about 16.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.34570383123453347,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.6%",
              "display_range": null,
              "display_text": "34.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 34.6,
              "plain_english": "Sector explains about 34.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.48942772957552305,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.9%",
              "display_range": null,
              "display_text": "48.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 48.9,
              "plain_english": "Company-specific explains about 48.9% of price moves in the current state."
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
            "median": 0.537335364593638,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "53.7%",
            "display_range": null,
            "display_text": "53.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 53.7,
            "plain_english": "Company-specific explains about 53.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.049855446730467635,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "5.0%",
              "display_range": null,
              "display_text": "5.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 5.0,
              "plain_english": "Market explains about 5.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.41280918867589445,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "41.3%",
              "display_range": null,
              "display_text": "41.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 41.3,
              "plain_english": "Sector explains about 41.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.537335364593638,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "53.7%",
              "display_range": null,
              "display_text": "53.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 53.7,
              "plain_english": "Company-specific explains about 53.7% of price moves in the current state."
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
            "median": 0.4079408122205262,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "40.8%",
            "display_range": null,
            "display_text": "40.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 40.8,
            "plain_english": "Company-specific explains about 40.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2967785413032153,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "29.7%",
              "display_range": null,
              "display_text": "29.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 29.7,
              "plain_english": "Market explains about 29.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2952806464762586,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "29.5%",
              "display_range": null,
              "display_text": "29.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 29.5,
              "plain_english": "Sector explains about 29.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4079408122205262,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "40.8%",
              "display_range": null,
              "display_text": "40.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 40.8,
              "plain_english": "Company-specific explains about 40.8% of price moves in the current state."
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
            "median": 0.4101449442533365,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "41.0%",
            "display_range": null,
            "display_text": "41.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 41.0,
            "plain_english": "Company-specific explains about 41.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.20562773726176234,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.6%",
              "display_range": null,
              "display_text": "20.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 20.6,
              "plain_english": "Market explains about 20.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.38422731848490116,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "38.4%",
              "display_range": null,
              "display_text": "38.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 38.4,
              "plain_english": "Sector explains about 38.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4101449442533365,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "41.0%",
              "display_range": null,
              "display_text": "41.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 41.0,
              "plain_english": "Company-specific explains about 41.0% of price moves in the current state."
            }
          },
          "summary": "Oct: More mixed, though company-driven still has the largest share."
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
            "median": 0.415654345337963,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "41.6%",
            "display_range": null,
            "display_text": "41.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 41.6,
            "plain_english": "Market explains about 41.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.415654345337963,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "41.6%",
              "display_range": null,
              "display_text": "41.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 41.6,
              "plain_english": "Market explains about 41.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.26373283594918595,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.4%",
              "display_range": null,
              "display_text": "26.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 26.4,
              "plain_english": "Sector explains about 26.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.32061281871285097,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "32.1%",
              "display_range": null,
              "display_text": "32.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 32.1,
              "plain_english": "Company-specific explains about 32.1% of price moves in the current state."
            }
          },
          "summary": "Nov: More mixed, though market-driven still has the largest share."
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
            "median": 0.45876830736399693,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "45.9%",
            "display_range": null,
            "display_text": "45.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
            "kind": "share_pct",
            "value_pct": 45.9,
            "plain_english": "Sector explains about 45.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.11142386979660682,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "11.1%",
              "display_range": null,
              "display_text": "11.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 11.1,
              "plain_english": "Market explains about 11.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.45876830736399693,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.9%",
              "display_range": null,
              "display_text": "45.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 45.9,
              "plain_english": "Sector explains about 45.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4298078228393963,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "43.0%",
              "display_range": null,
              "display_text": "43.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 43.0,
              "plain_english": "Company-specific explains about 43.0% of price moves in the current state."
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
            "median": 0.5005266957827539,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "50.1%",
            "display_range": null,
            "display_text": "50.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 50.1,
            "plain_english": "Company-specific explains about 50.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.18023592831915877,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "18.0%",
              "display_range": null,
              "display_text": "18.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 18.0,
              "plain_english": "Market explains about 18.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3192373758980873,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "31.9%",
              "display_range": null,
              "display_text": "31.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 31.9,
              "plain_english": "Sector explains about 31.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5005266957827539,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.1%",
              "display_range": null,
              "display_text": "50.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 50.1,
              "plain_english": "Company-specific explains about 50.1% of price moves in the current state."
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
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4841712131214525,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "48.4%",
            "display_range": null,
            "display_text": "48.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
            "kind": "share_pct",
            "value_pct": 48.4,
            "plain_english": "Sector explains about 48.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.23220801282448292,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "23.2%",
              "display_range": null,
              "display_text": "23.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 23.2,
              "plain_english": "Market explains about 23.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.4841712131214525,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.4%",
              "display_range": null,
              "display_text": "48.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 48.4,
              "plain_english": "Sector explains about 48.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.28362077405406466,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "28.4%",
              "display_range": null,
              "display_text": "28.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 28.4,
              "plain_english": "Company-specific explains about 28.4% of price moves in the current state."
            }
          },
          "summary": "Feb: Mostly sector-driven."
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
            "median": 0.41811580439240736,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "41.8%",
            "display_range": null,
            "display_text": "41.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 41.8,
            "plain_english": "Company-specific explains about 41.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3030282998241744,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "30.3%",
              "display_range": null,
              "display_text": "30.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 30.3,
              "plain_english": "Market explains about 30.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.27885589578341824,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.9%",
              "display_range": null,
              "display_text": "27.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 27.9,
              "plain_english": "Sector explains about 27.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.41811580439240736,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "41.8%",
              "display_range": null,
              "display_text": "41.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 41.8,
              "plain_english": "Company-specific explains about 41.8% of price moves in the current state."
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
            "median": 0.5078329293739017,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "50.8%",
            "display_range": null,
            "display_text": "50.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
            "kind": "share_pct",
            "value_pct": 50.8,
            "plain_english": "Market explains about 50.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.5078329293739017,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.8%",
              "display_range": null,
              "display_text": "50.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 50.8,
              "plain_english": "Market explains about 50.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3814802062196737,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "38.1%",
              "display_range": null,
              "display_text": "38.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 38.1,
              "plain_english": "Sector explains about 38.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.11068686440642453,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "11.1%",
              "display_range": null,
              "display_text": "11.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 11.1,
              "plain_english": "Company-specific explains about 11.1% of price moves in the current state."
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
          "expected_duration_days": 6.944444444444445,
          "current_probability": 1.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.014613770235909134,
            "low": 0.014613770235909134,
            "high": 0.014613770235909134
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
            "median": 0.02310842826821826,
            "low": 0.02310842826821826,
            "high": 0.02310842826821826
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
        "market_link_display": "0.98",
        "sector_link_display": "0.28",
        "market_link_explainer": "Moderate market link. A 1% market move has lined up with about a 0.98% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "Weak sector link. A 1% sector move has lined up with about a 0.28% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "0.41",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "Low Volatility",
        "dominant_driver": "market",
        "dominant_driver_label": "Market",
        "driver_share_pct": 50.8,
        "driver_share_display": "50.8%",
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
            "median": 0.014613770235909134,
            "low": 0.014613770235909134,
            "high": 0.014613770235909134
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
            "median": 0.02310842826821826,
            "low": 0.02310842826821826,
            "high": 0.02310842826821826
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
        "text": "Liquidity score: 95.6 — Strong",
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
    "liq_subtitle": "Peer-relative liquidity is above median, while the overall read remains balanced for the stock’s size.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "The stock has fallen over one month, performing better than peers but trailing the market.",
    "perf_insight": "Recent performance is weak in absolute terms, with a 1M return of -4.6% compared with the market at +0.6%. It has held up better than peers at -6.0%, which suggests the pressure is broader rather than purely stock-specific.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Market moves are still the main influence on the tape, with market factors accounting for 50.8%.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly market-driven, accounting for about 50.8% of price changes. Other influences are sector 38.1%, and company-specific 11.1%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 50.8%, sector 38.1%, and company-specific 11.1%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has shifted from sector-driven to market-driven over Feb to Apr."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 50.8%, sector 38.1%, and company-specific 11.1%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "Displayed trading conditions remain orderly, with top-10 bid depth at 1.15x ask depth and a 0.4-tick spread. That supports a balanced execution read even as broader market moves drive much of the tape.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: market factors lead at 50.8% of recent price moves.",
      "Monthly change: the pattern has moved from mostly sector-driven in February to more mixed in March and now more market-led in April."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "The current market state looks balanced, with orderly trading conditions and no clear sign of stress.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on Apr 10, 2025 to Apr 10, 2026 (239 trading days • 1,925,102 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on top 10 bid and top 10 ask levels.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate displayed depth broadly matches the stronger monthly liquidity read.",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The order book looks balanced, with bid depth modestly ahead of ask depth and spread at 0.4 ticks. That is consistent with the stronger peer-relative liquidity score.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 16.4% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Displayed liquidity looks balanced through the current tape.",
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
    "intraday_insight": "Session split is open 0.5%, continuous 87.8%, and close 8.4%. Current trading concentration score is 0.113.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Nothing in the current trading picture suggests short activity is changing the liquidity read.",
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
    "exec_subtitle": "Liquidity is holding up relative to peers, but the overall trading picture still reads as balanced rather than clearly strong.",
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
        "sub": "Peer median 92.3 (+3.3 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "HK$455.2M",
        "sub": "Peer median HK$180.5M",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "0.09%",
        "sub": "N/A ticks; peers 0.11%",
        "interp": {
          "text": "Tighter",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "6M liquidity is strong: score 95.6 vs peer median 92.3 (+3.3 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "29.390",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "0.07%",
        "note": "0.40 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "1.15x",
        "note": "Bid depth / ask depth on displayed top-10 levels",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-0.03% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-0.09% with 100.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-0.12% with 100.0% fill.",
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
        "value": "0.09",
        "suffix": "%",
        "bar_pct": 1,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "0.09% vs peers 0.11%",
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
        "value": "455.2M",
        "value_prefix": "HK$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Peer median HK$180.5M",
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
        "value": "50.8",
        "suffix": "market",
        "bar_pct": 51,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Sector 38.1% • Company 11.1%",
        "interpretation": {
          "text": "Market",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is slightly above peers, with a 6M liquidity score of 95.6 compared with a peer median of 92.3. That keeps access competitive for the stock’s size, even if the overall picture remains balanced.",
      "Recent trend context relative to the 1M baseline is limited. Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "Near-term execution looks orderly, with top-10 bid depth at 1.15x ask depth and a 0.4-tick spread, while market factors account for 50.8% of the driver mix. That means displayed liquidity is supportive even as broader market moves explain much of the tape."
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
      "overall": "6M liquidity is strong: score 95.6 vs peer median 92.3 (+3.3 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "strengths": [
        "6M score 95.6 vs peer median 92.3 (+3.3 pts)."
      ],
      "concerns": [],
      "peer_context": "Primary-period score gap vs peers: +3.3 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is -4.5%, better than sector, but worse than market and peers, which shows price performance is mixed across comparison groups.",
        "vs_market": "Worse than market: -4.5% vs market 11.3%.",
        "vs_sector": "Better than sector: -4.5% vs sector -12.6%.",
        "vs_peers": "Worse than peers: -4.5% vs peers -1.2%."
      },
      "adv": {
        "insight": "ADV is HK$455.2M, better than market, sector, and peers, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: HK$455.2M vs market HK$221.2K.",
        "vs_sector": "Better than sector: HK$455.2M vs sector HK$117.7K.",
        "vs_peers": "Better than peers: HK$455.2M vs peers HK$180.5M."
      },
      "spread": {
        "insight": "Spread is 0.09%, better than market, sector, and peers, which keeps trading costs more competitive than comparable names.",
        "vs_market": "Better than market: 0.09% vs market 2.66%.",
        "vs_sector": "Better than sector: 0.09% vs secto%.",
        "vs_peers": "Better than peers: 0.09% vs peers 0.11%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.22%, better than market and sector, but worse than peers, which shows turnover is mixed across comparison groups.",
        "vs_market": "Better than market: 0.22% vs market 0.09%.",
        "vs_sector": "Better than sector: 0.22% vs sector 0.05%.",
        "vs_peers": "Worse than peers: 0.22% vs peers 0.57%."
      },
      "volatility": {
        "insight": "Volatility is 31.19%, better than market and sector, which suggests day-to-day price swings are more contained than comparable names.",
        "vs_market": "Better than market: 31.19% vs market 59.82%.",
        "vs_sector": "Better than sector: 31.19% vs sector 61.71%.",
        "vs_peers": "In line with peers: 31.19% vs peers 30.17%."
      },
      "trades": {
        "insight": "Trades is 8474, better than market, sector, and peers, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 8474 vs market 21.",
        "vs_sector": "Better than sector: 8474 vs secto.",
        "vs_peers": "Better than peers: 8474 vs peers 3794."
      },
      "amihud": {
        "insight": "Price impact is 2.71e-11, better than market, sector, and peers, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 2.71e-11 vs market 4.60e-08.",
        "vs_sector": "Better than sector: 2.71e-11 vs sector 9.53e-08.",
        "vs_peers": "Better than peers: 2.71e-11 vs peers 6.44e-11."
      }
    },
    "performance": {
      "overall": "Recent performance looks mixed rather than outright weak, with the stock down 4.6% over one month, better than peers at down 6.0% but behind a market that rose 0.6%. Liquidity does not fully confirm a stressed move, because the six-month liquidity score is 95.6 compared with a 92.3 peer median and displayed depth remains balanced with bid depth at 1.15 times ask depth and a 0.4 tick spread.",
      "conclusion": "This looks more like a broad market-led move than a company-specific dislocation, with relative resilience against peers but weaker performance than the market."
    },
    "drivers": {
      "overall": "The stock is being driven mainly by the market right now, with 50.8% of recent moves tied to broader factors rather than company-specific news. That matters because trading conditions are more likely to track the wider tape, and the order book still looks balanced with bid depth 1.15 times ask depth and a 0.4-tick spread.",
      "beta": "This looks more stable than stressed, because displayed depth is slightly stronger on the bid side and the spread remains tight at 0.4 ticks. That supports the view that current price action is being absorbed in an orderly way even as broader market moves set the direction.",
      "rolling_change": "The driver mix has become more market-led over the past three months, shifting from mostly sector-driven in February to more mixed in March and then mostly market-driven in April. That points to a change in what is setting direction, with the current pattern looking more tied to the wider tape than to company-specific developments."
    },
    "regime": {
      "overall": "Low Volatility points to a steadier trading backdrop, and the state’s typical duration of about 6.9 days suggests conditions are holding for more than a brief pause.",
      "current": "The active state is Low Volatility, which indicates price moves are currently more contained.",
      "transitions": "This looks relatively stable rather than fleeting because the state typically lasts about 6.9 days, although the read is still mixed.",
      "trading_implications": "That steadier backdrop is consistent with orderly near-term trading conditions, supported by a 0.4-tick spread and top-10 bid depth running at 1.15x ask depth."
    },
    "execution": {
      "overall": "Displayed liquidity looks balanced right now because bid depth is slightly stronger than ask depth at 1.15x and the spread is 0.4 ticks. That matters because the book is showing usable two-way access rather than a thin or one-sided setup.",
      "concern": "Trade-size percentiles use Apr 10, 2025 to Apr 10, 2026 history (239 trading days • 1,925,102 trades).",
      "peer_context": "The current book supports the broader picture because the stock’s six-month liquidity score of 95.6 sits 3.3 points above the peer median of 92.3. The trade-size history spans 239 trading days and 1,925,102 trades, which helps frame today’s balance as consistent with a solid underlying market rather than a one-off print."
    },
    "trader_composition": {
      "overall": "Flow looks mainly institution-like on both trade count and trade value, which gives the mix a firmer base.",
      "retail_heavy": "Institution-like trades account for 57.8% of trade count and 69.1% of trade value, compared with retail-like trades at 3.4% of count and 1.5% of value. That points to a market shaped more by larger participants than by small-ticket activity.",
      "institutional_gap": "The read is not fully clean because unclear flow still makes up 33.7% of trade count. That leaves the overall mix institution-like, but with some noise in the signal.",
      "peer_comparison": "Peer trader comparison is available in this report."
    },
    "price_moving": {
      "overall": "Price-moving activity is present but not dominant, with 16.4% of total trades moving price. That suggests the tape is active without looking disorderly. The cleaner read is that institution-like flow leads on both count and value, but 33.7% of trade count is still unclear. That makes the signal directionally useful rather than fully definitive. The balance between positive and negative price-moving trades is shown in the report tables, while the broader read remains that flow is institution-like overall.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity does not stand out as a separate driver of trading conditions. The stock has fallen 4.6% over one month, but that is still better than peers at -6.0%, while market factors account for 50.8% of the tape, so the broader backdrop matters more for liquidity than any clear short pressure.",
      "level": "N/A",
      "correlation": "N/A",
      "trend": "N/A",
      "peaks": "N/A"
    },
    "intraday": {
      "overall": "Liquidity is concentrated in the continuous session, which carries 87.8% of activity, while the open contributes 0.5% and the close 8.4%. That points to access being available through most of the day rather than only at the edges.",
      "hhi_interpretation": "Ambiguous or unclear flow is 33.7% of trade count, so the read is not fully clean.",
      "best_times": "The continuous session is the clearest source of liquidity because it accounts for the large majority of trading activity. That matters because execution conditions may be more consistent away from the open and close.",
      "peer_ranking": "The intraday profile looks steady on its own terms, and the peer ranking in the report tables shows how that concentration compares with the wider group."
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
        "1109",
        "12",
        "1113",
        "688",
        "16",
        "1918",
        "960",
        "3900",
        "83"
      ],
      "scores": [
        95.64879564879564,
        92.07459207459208,
        90.9090909090909,
        95.41569541569541,
        94.01709401709401,
        92.54079254079254,
        94.32789432789433,
        91.72494172494171,
        84.42113442113443
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
        455210739.48,
        196676127.67000002,
        178175013.8,
        270495195.98,
        487273925.9,
        182729820.0,
        159039559.725,
        86144910.0,
        79588692.03
      ],
      "total": 2574
    },
    "market_comparison": {
      "sector_name": "Property Development",
      "sector_count": 118,
      "market_count": 2574,
      "company": {
        "volatility": 0.3119208645512651,
        "adv": 455210739.48,
        "spread_pct": 0.0008588270028513542,
        "turnover_ratio": 0.0021832448343621002,
        "amihud": 2.7082328318186272e-11,
        "trades": 8474.0
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
          "mean": 205015405.638125,
          "median": 180452416.9,
          "min": 79588692.03,
          "max": 487273925.9,
          "p5": 81883368.3195,
          "p95": 411401370.42799985,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 3862.0,
          "median": 3793.5,
          "min": 1655.0,
          "max": 6036.5,
          "p5": 2068.875,
          "p95": 5857.65,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.3452150369894559,
          "median": 0.3016506208193953,
          "min": 0.2443597199809208,
          "max": 0.6252129883757457,
          "p5": 0.24950146745608243,
          "p95": 0.5436569490873497,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.0020594701967237127,
          "median": 0.0010730172754437504,
          "min": 0.0006606415221752384,
          "max": 0.007977792688253927,
          "p5": 0.0007421642900651369,
          "p95": 0.005904391887016809,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 7.83663440423833e-11,
          "median": 6.440058916747675e-11,
          "min": 2.3743041596530157e-11,
          "max": 1.5147002507350674e-10,
          "p5": 3.157941271668472e-11,
          "p95": 1.4191401528874572e-10,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0061579043442569845,
          "median": 0.005696594954572875,
          "min": 0.0017913538742814626,
          "max": 0.014239112476626146,
          "p5": 0.001995534323262321,
          "p95": 0.012435611022686905,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 1.3576793019049953,
          "median": 1.3283613896218438,
          "min": 1.0176009317686447,
          "max": 1.7290241193376574,
          "p5": 1.0433475257590485,
          "p95": 1.6966345288853593,
          "count": 5
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": -0.04604409857328118,
        "market": 0.005817570896814672,
        "sector": -0.0250845348570794,
        "peers": -0.059594650973936125
      },
      {
        "horizon": "3M",
        "stock": 0.01030219780219821,
        "market": 0.07151156981189555,
        "sector": -0.032529958558431216,
        "peers": 0.021887243401319756
      },
      {
        "horizon": "6M",
        "stock": -0.04480519480519496,
        "market": 0.11289080174108235,
        "sector": -0.12629476847430543,
        "peers": -0.011521034843838485
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
      "share_market": 0.5078329293739017,
      "share_sector": 0.3814802062196737,
      "share_idio": 0.11068686440642453,
      "beta_market": 0.9767686357650626,
      "beta_sector": 0.2772780114641553,
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
            "median": 0.5078329293739017,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "50.8%",
            "display_range": null,
            "display_text": "50.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 50.8,
            "plain_english": "Market explains about 50.8% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.3814802062196737,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "38.1%",
            "display_range": null,
            "display_text": "38.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 38.1,
            "plain_english": "Sector explains about 38.1% of price moves in the current state."
          },
          "company_share": {
            "median": 0.11068686440642453,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "11.1%",
            "display_range": null,
            "display_text": "11.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 11.1,
            "plain_english": "Company-specific explains about 11.1% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 0.9767686357650626,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.98",
            "display_range": null,
            "display_text": "0.98",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Moderate",
            "plain_english": "Moderate market link: a 1% market move has lined up with about a 0.98% stock move in the same direction in this state.",
            "value_num": 0.98
          },
          "beta_stock_lag": {
            "median": 0.40927539757562015,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.41",
            "display_range": null,
            "display_text": "0.41",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 0.41
          },
          "beta_sector": {
            "median": 0.2772780114641553,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.28",
            "display_range": null,
            "display_text": "0.28",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Weak",
            "plain_english": "Weak sector link: a 1% sector move has lined up with about a 0.28% stock move in the same direction in this state.",
            "value_num": 0.28
          },
          "beta_market_lag": {
            "median": 1.284421832787377,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.28",
            "display_range": null,
            "display_text": "1.28",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 1.28
          },
          "beta_sector_lag": {
            "median": -2.3830245015715064,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-2.38",
            "display_range": null,
            "display_text": "-2.38",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -2.38
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
              "median": 0.5486916485938046,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "54.9%",
              "display_range": null,
              "display_text": "54.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 54.9,
              "plain_english": "Market explains about 54.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.5486916485938046,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "54.9%",
                "display_range": null,
                "display_text": "54.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 54.9,
                "plain_english": "Market explains about 54.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.37092004618577706,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "37.1%",
                "display_range": null,
                "display_text": "37.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 37.1,
                "plain_english": "Sector explains about 37.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.08038830522041825,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "8.0%",
                "display_range": null,
                "display_text": "8.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 8.0,
                "plain_english": "Company-specific explains about 8.0% of price moves in the current state."
              }
            },
            "summary": "Mar: Mostly market-driven, though based on only 6 trading days."
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
              "median": 0.458491138177615,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.8%",
              "display_range": null,
              "display_text": "45.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 45.8,
              "plain_english": "Sector explains about 45.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2427592064221012,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "24.3%",
                "display_range": null,
                "display_text": "24.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 24.3,
                "plain_english": "Market explains about 24.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.458491138177615,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "45.8%",
                "display_range": null,
                "display_text": "45.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 45.8,
                "plain_english": "Sector explains about 45.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.2987496554002839,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "29.9%",
                "display_range": null,
                "display_text": "29.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 29.9,
                "plain_english": "Company-specific explains about 29.9% of price moves in the current state."
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
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.3841744607674973,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "38.4%",
              "display_range": null,
              "display_text": "38.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 38.4,
              "plain_english": "Sector explains about 38.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.23314280572625828,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "23.3%",
                "display_range": null,
                "display_text": "23.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 23.3,
                "plain_english": "Market explains about 23.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3841744607674973,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "38.4%",
                "display_range": null,
                "display_text": "38.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 38.4,
                "plain_english": "Sector explains about 38.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3826827335062444,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "38.3%",
                "display_range": null,
                "display_text": "38.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 38.3,
                "plain_english": "Company-specific explains about 38.3% of price moves in the current state."
              }
            },
            "summary": "May: More mixed, though sector-driven still has the largest share."
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
              "median": 0.4988522447683997,
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
              "plain_english": "Company-specific explains about 49.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.1918024321081413,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "19.2%",
                "display_range": null,
                "display_text": "19.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 19.2,
                "plain_english": "Market explains about 19.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3093453231234591,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "30.9%",
                "display_range": null,
                "display_text": "30.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 30.9,
                "plain_english": "Sector explains about 30.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4988522447683997,
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
                "plain_english": "Company-specific explains about 49.9% of price moves in the current state."
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
              "median": 0.48942772957552305,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.9%",
              "display_range": null,
              "display_text": "48.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 48.9,
              "plain_english": "Company-specific explains about 48.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.16486843918994337,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "16.5%",
                "display_range": null,
                "display_text": "16.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 16.5,
                "plain_english": "Market explains about 16.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.34570383123453347,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "34.6%",
                "display_range": null,
                "display_text": "34.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 34.6,
                "plain_english": "Sector explains about 34.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.48942772957552305,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "48.9%",
                "display_range": null,
                "display_text": "48.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 48.9,
                "plain_english": "Company-specific explains about 48.9% of price moves in the current state."
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
              "median": 0.537335364593638,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "53.7%",
              "display_range": null,
              "display_text": "53.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 53.7,
              "plain_english": "Company-specific explains about 53.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.049855446730467635,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "5.0%",
                "display_range": null,
                "display_text": "5.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 5.0,
                "plain_english": "Market explains about 5.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.41280918867589445,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "41.3%",
                "display_range": null,
                "display_text": "41.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 41.3,
                "plain_english": "Sector explains about 41.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.537335364593638,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "53.7%",
                "display_range": null,
                "display_text": "53.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 53.7,
                "plain_english": "Company-specific explains about 53.7% of price moves in the current state."
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
              "median": 0.4079408122205262,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "40.8%",
              "display_range": null,
              "display_text": "40.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 40.8,
              "plain_english": "Company-specific explains about 40.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2967785413032153,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "29.7%",
                "display_range": null,
                "display_text": "29.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 29.7,
                "plain_english": "Market explains about 29.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2952806464762586,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "29.5%",
                "display_range": null,
                "display_text": "29.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 29.5,
                "plain_english": "Sector explains about 29.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4079408122205262,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "40.8%",
                "display_range": null,
                "display_text": "40.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 40.8,
                "plain_english": "Company-specific explains about 40.8% of price moves in the current state."
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
              "median": 0.4101449442533365,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "41.0%",
              "display_range": null,
              "display_text": "41.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 41.0,
              "plain_english": "Company-specific explains about 41.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.20562773726176234,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.6%",
                "display_range": null,
                "display_text": "20.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 20.6,
                "plain_english": "Market explains about 20.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.38422731848490116,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "38.4%",
                "display_range": null,
                "display_text": "38.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 38.4,
                "plain_english": "Sector explains about 38.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4101449442533365,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "41.0%",
                "display_range": null,
                "display_text": "41.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 41.0,
                "plain_english": "Company-specific explains about 41.0% of price moves in the current state."
              }
            },
            "summary": "Oct: More mixed, though company-driven still has the largest share."
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
              "median": 0.415654345337963,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "41.6%",
              "display_range": null,
              "display_text": "41.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 41.6,
              "plain_english": "Market explains about 41.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.415654345337963,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "41.6%",
                "display_range": null,
                "display_text": "41.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 41.6,
                "plain_english": "Market explains about 41.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.26373283594918595,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.4%",
                "display_range": null,
                "display_text": "26.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 26.4,
                "plain_english": "Sector explains about 26.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.32061281871285097,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "32.1%",
                "display_range": null,
                "display_text": "32.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 32.1,
                "plain_english": "Company-specific explains about 32.1% of price moves in the current state."
              }
            },
            "summary": "Nov: More mixed, though market-driven still has the largest share."
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
              "median": 0.45876830736399693,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.9%",
              "display_range": null,
              "display_text": "45.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 45.9,
              "plain_english": "Sector explains about 45.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.11142386979660682,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "11.1%",
                "display_range": null,
                "display_text": "11.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 11.1,
                "plain_english": "Market explains about 11.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.45876830736399693,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "45.9%",
                "display_range": null,
                "display_text": "45.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 45.9,
                "plain_english": "Sector explains about 45.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4298078228393963,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "43.0%",
                "display_range": null,
                "display_text": "43.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 43.0,
                "plain_english": "Company-specific explains about 43.0% of price moves in the current state."
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
              "median": 0.5005266957827539,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.1%",
              "display_range": null,
              "display_text": "50.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 50.1,
              "plain_english": "Company-specific explains about 50.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.18023592831915877,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "18.0%",
                "display_range": null,
                "display_text": "18.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 18.0,
                "plain_english": "Market explains about 18.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3192373758980873,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "31.9%",
                "display_range": null,
                "display_text": "31.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 31.9,
                "plain_english": "Sector explains about 31.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5005266957827539,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "50.1%",
                "display_range": null,
                "display_text": "50.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 50.1,
                "plain_english": "Company-specific explains about 50.1% of price moves in the current state."
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
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4841712131214525,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.4%",
              "display_range": null,
              "display_text": "48.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 48.4,
              "plain_english": "Sector explains about 48.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.23220801282448292,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "23.2%",
                "display_range": null,
                "display_text": "23.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 23.2,
                "plain_english": "Market explains about 23.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.4841712131214525,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "48.4%",
                "display_range": null,
                "display_text": "48.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 48.4,
                "plain_english": "Sector explains about 48.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.28362077405406466,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "28.4%",
                "display_range": null,
                "display_text": "28.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 28.4,
                "plain_english": "Company-specific explains about 28.4% of price moves in the current state."
              }
            },
            "summary": "Feb: Mostly sector-driven."
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
              "median": 0.41811580439240736,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "41.8%",
              "display_range": null,
              "display_text": "41.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 41.8,
              "plain_english": "Company-specific explains about 41.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3030282998241744,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "30.3%",
                "display_range": null,
                "display_text": "30.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 30.3,
                "plain_english": "Market explains about 30.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.27885589578341824,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.9%",
                "display_range": null,
                "display_text": "27.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 27.9,
                "plain_english": "Sector explains about 27.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.41811580439240736,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "41.8%",
                "display_range": null,
                "display_text": "41.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 41.8,
                "plain_english": "Company-specific explains about 41.8% of price moves in the current state."
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
              "median": 0.5078329293739017,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.8%",
              "display_range": null,
              "display_text": "50.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 50.8,
              "plain_english": "Market explains about 50.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.5078329293739017,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "50.8%",
                "display_range": null,
                "display_text": "50.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 50.8,
                "plain_english": "Market explains about 50.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3814802062196737,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "38.1%",
                "display_range": null,
                "display_text": "38.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 38.1,
                "plain_english": "Sector explains about 38.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.11068686440642453,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "11.1%",
                "display_range": null,
                "display_text": "11.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 11.1,
                "plain_english": "Company-specific explains about 11.1% of price moves in the current state."
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
            "expected_duration_days": 6.944444444444445,
            "current_probability": 1.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.014613770235909134,
              "low": 0.014613770235909134,
              "high": 0.014613770235909134
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
              "median": 0.02310842826821826,
              "low": 0.02310842826821826,
              "high": 0.02310842826821826
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
          "market_link_display": "0.98",
          "sector_link_display": "0.28",
          "market_link_explainer": "Moderate market link. A 1% market move has lined up with about a 0.98% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "Weak sector link. A 1% sector move has lined up with about a 0.28% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "0.41",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "Low Volatility",
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "driver_share_pct": 50.8,
          "driver_share_display": "50.8%",
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
          "period_label": "2025-03-24 to 2025-03-31",
          "n_obs": 6,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Mar: Mostly market-driven, though based on only 6 trading days.",
          "share_market": 0.5486916485938046,
          "share_sector": 0.37092004618577706,
          "share_company": 0.08038830522041825,
          "share_market_display": "54.9%",
          "share_sector_display": "37.1%",
          "share_company_display": "8.0%",
          "dominant_share_display": "54.9%"
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
          "share_market": 0.2427592064221012,
          "share_sector": 0.458491138177615,
          "share_company": 0.2987496554002839,
          "share_market_display": "24.3%",
          "share_sector_display": "45.8%",
          "share_company_display": "29.9%",
          "dominant_share_display": "45.8%"
        },
        {
          "month_key": "2025-05",
          "month_label": "May 2025",
          "month_short_label": "May",
          "period_label": "2025-05-02 to 2025-05-30",
          "n_obs": 20,
          "partial_month": true,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "May: More mixed, though sector-driven still has the largest share.",
          "share_market": 0.23314280572625828,
          "share_sector": 0.3841744607674973,
          "share_company": 0.3826827335062444,
          "share_market_display": "23.3%",
          "share_sector_display": "38.4%",
          "share_company_display": "38.3%",
          "dominant_share_display": "38.4%"
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
          "share_market": 0.1918024321081413,
          "share_sector": 0.3093453231234591,
          "share_company": 0.4988522447683997,
          "share_market_display": "19.2%",
          "share_sector_display": "30.9%",
          "share_company_display": "49.9%",
          "dominant_share_display": "49.9%"
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
          "share_market": 0.16486843918994337,
          "share_sector": 0.34570383123453347,
          "share_company": 0.48942772957552305,
          "share_market_display": "16.5%",
          "share_sector_display": "34.6%",
          "share_company_display": "48.9%",
          "dominant_share_display": "48.9%"
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
          "share_market": 0.049855446730467635,
          "share_sector": 0.41280918867589445,
          "share_company": 0.537335364593638,
          "share_market_display": "5.0%",
          "share_sector_display": "41.3%",
          "share_company_display": "53.7%",
          "dominant_share_display": "53.7%"
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
          "share_market": 0.2967785413032153,
          "share_sector": 0.2952806464762586,
          "share_company": 0.4079408122205262,
          "share_market_display": "29.7%",
          "share_sector_display": "29.5%",
          "share_company_display": "40.8%",
          "dominant_share_display": "40.8%"
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
          "summary": "Oct: More mixed, though company-driven still has the largest share.",
          "share_market": 0.20562773726176234,
          "share_sector": 0.38422731848490116,
          "share_company": 0.4101449442533365,
          "share_market_display": "20.6%",
          "share_sector_display": "38.4%",
          "share_company_display": "41.0%",
          "dominant_share_display": "41.0%"
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
          "share_market": 0.415654345337963,
          "share_sector": 0.26373283594918595,
          "share_company": 0.32061281871285097,
          "share_market_display": "41.6%",
          "share_sector_display": "26.4%",
          "share_company_display": "32.1%",
          "dominant_share_display": "41.6%"
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
          "share_market": 0.11142386979660682,
          "share_sector": 0.45876830736399693,
          "share_company": 0.4298078228393963,
          "share_market_display": "11.1%",
          "share_sector_display": "45.9%",
          "share_company_display": "43.0%",
          "dominant_share_display": "45.9%"
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
          "share_market": 0.18023592831915877,
          "share_sector": 0.3192373758980873,
          "share_company": 0.5005266957827539,
          "share_market_display": "18.0%",
          "share_sector_display": "31.9%",
          "share_company_display": "50.1%",
          "dominant_share_display": "50.1%"
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
          "summary": "Feb: Mostly sector-driven.",
          "share_market": 0.23220801282448292,
          "share_sector": 0.4841712131214525,
          "share_company": 0.28362077405406466,
          "share_market_display": "23.2%",
          "share_sector_display": "48.4%",
          "share_company_display": "28.4%",
          "dominant_share_display": "48.4%"
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
          "share_market": 0.3030282998241744,
          "share_sector": 0.27885589578341824,
          "share_company": 0.41811580439240736,
          "share_market_display": "30.3%",
          "share_sector_display": "27.9%",
          "share_company_display": "41.8%",
          "dominant_share_display": "41.8%"
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
          "share_market": 0.5078329293739017,
          "share_sector": 0.3814802062196737,
          "share_company": 0.11068686440642453,
          "share_market_display": "50.8%",
          "share_sector_display": "38.1%",
          "share_company_display": "11.1%",
          "dominant_share_display": "50.8%"
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
              "median": 0.014613770235909134,
              "low": 0.014613770235909134,
              "high": 0.014613770235909134
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
              "median": 0.02310842826821826,
              "low": 0.02310842826821826,
              "high": 0.02310842826821826
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
          "price": 29.38,
          "quantity": 7000.0,
          "value": 205660.0
        },
        {
          "level": 2,
          "price": 29.36,
          "quantity": 48500.0,
          "value": 1423960.0
        },
        {
          "level": 3,
          "price": 29.34,
          "quantity": 61000.0,
          "value": 1789740.0
        },
        {
          "level": 4,
          "price": 29.32,
          "quantity": 50500.0,
          "value": 1480660.0
        },
        {
          "level": 5,
          "price": 29.3,
          "quantity": 90000.0,
          "value": 2637000.0
        },
        {
          "level": 6,
          "price": 29.28,
          "quantity": 52500.0,
          "value": 1537200.0
        },
        {
          "level": 7,
          "price": 29.26,
          "quantity": 74000.0,
          "value": 2165240.0
        },
        {
          "level": 8,
          "price": 29.24,
          "quantity": 14500.0,
          "value": 423980.0
        },
        {
          "level": 9,
          "price": 29.22,
          "quantity": 33500.0,
          "value": 978870.0
        },
        {
          "level": 10,
          "price": 29.2,
          "quantity": 72000.0,
          "value": 2102400.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 29.4,
          "quantity": 14000.0,
          "value": 411600.0
        },
        {
          "level": 2,
          "price": 29.42,
          "quantity": 23500.0,
          "value": 691370.0
        },
        {
          "level": 3,
          "price": 29.44,
          "quantity": 29500.0,
          "value": 868480.0
        },
        {
          "level": 4,
          "price": 29.46,
          "quantity": 50000.0,
          "value": 1473000.0
        },
        {
          "level": 5,
          "price": 29.48,
          "quantity": 43500.0,
          "value": 1282380.0
        },
        {
          "level": 6,
          "price": 29.5,
          "quantity": 39500.0,
          "value": 1165250.0
        },
        {
          "level": 7,
          "price": 29.52,
          "quantity": 26500.0,
          "value": 782280.0
        },
        {
          "level": 8,
          "price": 29.54,
          "quantity": 21000.0,
          "value": 620340.0
        },
        {
          "level": 9,
          "price": 29.56,
          "quantity": 23000.0,
          "value": 679880.0
        },
        {
          "level": 10,
          "price": 29.58,
          "quantity": 165000.0,
          "value": 4880700.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-04-10 07:59:59.047000000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XHKG",
        "mid_price": 29.39,
        "spread_pct": 0.0006805035726437418,
        "spread_ticks": 0.4,
        "tick_size": 0.05,
        "bid_depth_notional_top10": 14744710.0,
        "ask_depth_notional_top10": 12855280.0,
        "bid_ask_depth_ratio": 1.147
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 366,
        "history_limited": false,
        "trade_days_used": 239,
        "n_trades_used": 1925102,
        "first_trade_date": "2025-04-10",
        "last_trade_date": "2026-04-10",
        "window_label": "Apr 10, 2025 to Apr 10, 2026",
        "window_short_label": "Apr 10, 2025 to Apr 10, 2026",
        "trade_days_label": "239 trading days",
        "trade_count_label": "1,925,102 trades",
        "window_detail_label": "239 trading days • 1,925,102 trades",
        "history_note": "Trade-size percentiles use Apr 10, 2025 to Apr 10, 2026 history (239 trading days • 1,925,102 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 123600.0,
            "impact_pct": -0.00034,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.84,
            "pct_of_adv": 0.03
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 202800.0,
            "impact_pct": -0.00034,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 1.38,
            "pct_of_adv": 0.05
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 8442490.66,
            "impact_pct": -0.002318,
            "filled_pct": 100.0,
            "levels_consumed": 6,
            "pct_of_bid_depth": 57.26,
            "pct_of_adv": 1.88
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
            "order_id": "2695853313.0",
            "timestamp": "2026-04-10 03:54:13.470000000",
            "local_timestamp": "2026-04-10 11:54:13",
            "posted_price": 29.9,
            "size_shares": 306000.0,
            "notional": 9149400.0,
            "impact_pct": -0.002433,
            "filled_pct": 100.0,
            "levels_consumed": 7,
            "pct_of_bid_depth": 62.05,
            "price_vs_mid_pct": 1.735,
            "executed_event_count": 0,
            "event_count": 92
          },
          {
            "rank": 2,
            "order_id": "1834018817.0",
            "timestamp": "2026-04-10 02:35:14.972000000",
            "local_timestamp": "2026-04-10 10:35:14",
            "posted_price": 29.82,
            "size_shares": 274000.0,
            "notional": 8170680.0,
            "impact_pct": -0.00227,
            "filled_pct": 100.0,
            "levels_consumed": 6,
            "pct_of_bid_depth": 55.41,
            "price_vs_mid_pct": 1.463,
            "executed_event_count": 0,
            "event_count": 81
          },
          {
            "rank": 3,
            "order_id": "1547979009.0",
            "timestamp": "2026-04-10 02:19:39.165000000",
            "local_timestamp": "2026-04-10 10:19:39",
            "posted_price": 29.78,
            "size_shares": 233000.0,
            "notional": 6938740.0,
            "impact_pct": -0.002067,
            "filled_pct": 100.0,
            "levels_consumed": 5,
            "pct_of_bid_depth": 47.06,
            "price_vs_mid_pct": 1.327,
            "executed_event_count": 0,
            "event_count": 73
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-04-10",
        "bucket_minutes": 30,
        "tick_size": 0.05,
        "timezone": "HKT (UTC+8)",
        "session_label": "HKEX continuous trading session",
        "bucket_label_basis": "bucket start time",
        "display_window_label": "HKEX continuous trading session",
        "bucket_note": "Buckets are shown in local market time and labeled by bucket start.",
        "rows": [
          {
            "bucket": "09:30",
            "spread_pct": 0.001338688085676009,
            "spread_ticks": 0.799999999999983,
            "bid_depth_notional": 24659320.0,
            "ask_depth_notional": 28816290.0,
            "mid_price": 29.88
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.0013449899125757463,
            "spread_ticks": 0.800000000000054,
            "bid_depth_notional": 25181750.0,
            "ask_depth_notional": 29309000.0,
            "mid_price": 29.740000000000002
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.0006718172657037142,
            "spread_ticks": 0.3999999999999915,
            "bid_depth_notional": 29588550.0,
            "ask_depth_notional": 27039190.0,
            "mid_price": 29.770000000000003
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.0006695681285570665,
            "spread_ticks": 0.3999999999999915,
            "bid_depth_notional": 29128710.0,
            "ask_depth_notional": 28136460.0,
            "mid_price": 29.869999999999997
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.000668225860340781,
            "spread_ticks": 0.3999999999999915,
            "bid_depth_notional": 24534230.0,
            "ask_depth_notional": 25677870.0,
            "mid_price": 29.93
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.0006736274840013329,
            "spread_ticks": 0.3999999999999915,
            "bid_depth_notional": 31613800.0,
            "ask_depth_notional": 30329100.0,
            "mid_price": 29.689999999999998
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.0006727211570803759,
            "spread_ticks": 0.3999999999999915,
            "bid_depth_notional": 39535140.0,
            "ask_depth_notional": 29642020.0,
            "mid_price": 29.729999999999997
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.0006754474839581079,
            "spread_ticks": 0.3999999999999915,
            "bid_depth_notional": 30592190.0,
            "ask_depth_notional": 22716940.0,
            "mid_price": 29.61
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.0006791171477079651,
            "spread_ticks": 0.3999999999999915,
            "bid_depth_notional": 30068030.0,
            "ask_depth_notional": 28390120.0,
            "mid_price": 29.450000000000003
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.0006809669731017901,
            "spread_ticks": 0.3999999999999915,
            "bid_depth_notional": 30962440.0,
            "ask_depth_notional": 28950240.0,
            "mid_price": 29.369999999999997
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.0006805035726437418,
            "spread_ticks": 0.3999999999999915,
            "bid_depth_notional": 14744710.0,
            "ask_depth_notional": 12855280.0,
            "mid_price": 29.39
          }
        ],
        "summary": {
          "median_spread_pct": 0.0006754474839581079,
          "median_spread_ticks": 0.3999999999999915,
          "median_bid_depth_notional": 29588550.0,
          "median_ask_depth_notional": 28390120.0,
          "tightest_bucket": "11:30",
          "widest_bucket": "10:00",
          "deepest_bid_bucket": "13:30",
          "thinnest_bid_bucket": "15:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 0.0,
      "peers": [
        {
          "ticker": "16",
          "pct": 0.1
        },
        {
          "ticker": "688",
          "pct": 0.3
        },
        {
          "ticker": "1113",
          "pct": 0.3
        },
        {
          "ticker": "12",
          "pct": 0.3
        },
        {
          "ticker": "960",
          "pct": 0.7
        },
        {
          "ticker": "1918",
          "pct": 0.7
        },
        {
          "ticker": "83",
          "pct": 1.0
        },
        {
          "ticker": "3900",
          "pct": 1.0
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 6273,
          "n_runs": 860,
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
            "retail_pct": 0.04240395345129922,
            "mixed_pct": 0.0,
            "instit_pct": 0.6194803124501833,
            "ambiguous_pct": 0.291567033317392,
            "unobservable_pct": 0.04654870078112546,
            "unclear_pct": 0.3381157340985174,
            "retail_qty_pct": 0.029725483903966694,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7075879147210121,
            "ambiguous_qty_pct": 0.23391716057038858,
            "unobservable_qty_pct": 0.028769440804632587,
            "unclear_qty_pct": 0.26268660137502114,
            "retail_notional_pct": 0.02959198352310964,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7078807888980113,
            "ambiguous_notional_pct": 0.2337006402121304,
            "unobservable_notional_pct": 0.028826587366748677,
            "unclear_notional_pct": 0.2625272275788791
          },
          "run_composition": {
            "retail_pct": 0.22325581395348837,
            "mixed_pct": 0.0,
            "instit_pct": 0.1813953488372093,
            "ambiguous_pct": 0.4104651162790698,
            "unobservable_pct": 0.18488372093023256,
            "unclear_pct": 0.5953488372093023,
            "retail_notional_pct": 0.02959198352310964,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7078807888980113,
            "unclear_notional_pct": 0.2625272275788791
          },
          "counts": {
            "trades": {
              "retail": 266,
              "mixed": 0,
              "institutional": 3886,
              "ambiguous": 1829,
              "unobservable": 292,
              "unclear": 2121
            },
            "runs": {
              "retail": 192,
              "mixed": 0,
              "institutional": 156,
              "ambiguous": 353,
              "unobservable": 159,
              "unclear": 512
            }
          },
          "confidence": {
            "high": 0.07209302325581396,
            "medium": 0.18953488372093022,
            "low": 0.14302325581395348,
            "na": 0.5953488372093023
          },
          "confidence_counts": {
            "high": 62,
            "medium": 163,
            "low": 123,
            "na": 512
          },
          "trade_confidence": {
            "high": 0.009883628248047187,
            "medium": 0.46134226048142835,
            "low": 0.190658377172007,
            "na": 0.3381157340985175
          },
          "trade_confidence_counts": {
            "high": 62,
            "medium": 2894,
            "low": 1196,
            "na": 2121
          },
          "observability": {
            "avg_feature_coverage": 0.7357558139534882,
            "observable_run_pct": 0.8151162790697675,
            "ambiguous_run_pct": 0.4104651162790698,
            "unobservable_run_pct": 0.18488372093023256
          },
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Unclassified Flow",
          "dominant_share": 0.4104651162790698,
          "dominance_gap": 0.18720930232558142,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 6273
            },
            "d2_information": {
              "UNOBSERVABLE": 6273
            },
            "d3_urgency": {
              "IMMEDIATE": 743,
              "ADAPTIVE": 115,
              "SCHEDULED": 2
            },
            "participant_confidence": {
              "NA": 512,
              "MEDIUM": 163,
              "LOW": 123,
              "HIGH": 62
            }
          },
          "trade_size": {
            "avg": 66839.212064403,
            "median": 29620.0
          },
          "run_size": {
            "avg": 487537.648,
            "median": 161480.0,
            "avg_length": 7.294186046511628
          },
          "recent_trades": [
            {
              "trade_id": "6437",
              "timestamp": "2026-04-10T07:59:55.232608",
              "price": 29.4,
              "size": 500.0,
              "notional": 14700.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 217952,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "6436",
              "timestamp": "2026-04-10T07:59:55.231692",
              "price": 29.4,
              "size": 500.0,
              "notional": 14700.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 217952,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "6435",
              "timestamp": "2026-04-10T07:59:51.051140",
              "price": 29.4,
              "size": 1000.0,
              "notional": 29400.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 217952,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "6434",
              "timestamp": "2026-04-10T07:59:51.044228",
              "price": 29.38,
              "size": 500.0,
              "notional": 14690.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 217952,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "6433",
              "timestamp": "2026-04-10T07:59:37.154630",
              "price": 29.38,
              "size": 500.0,
              "notional": 14690.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 217951,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6432",
              "timestamp": "2026-04-10T07:59:35.216816",
              "price": 29.4,
              "size": 500.0,
              "notional": 14700.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 217951,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6431",
              "timestamp": "2026-04-10T07:59:35.207874",
              "price": 29.4,
              "size": 500.0,
              "notional": 14700.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 217951,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6430",
              "timestamp": "2026-04-10T07:59:31.178378",
              "price": 29.38,
              "size": 6500.0,
              "notional": 190970.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 217951,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6429",
              "timestamp": "2026-04-10T07:59:31.155383",
              "price": 29.38,
              "size": 1000.0,
              "notional": 29380.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 217951,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6428",
              "timestamp": "2026-04-10T07:59:31.148468",
              "price": 29.38,
              "size": 6000.0,
              "notional": 176280.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 217951,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6427",
              "timestamp": "2026-04-10T07:59:31.148468",
              "price": 29.38,
              "size": 6500.0,
              "notional": 190970.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 217951,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6426",
              "timestamp": "2026-04-10T07:59:30.430532",
              "price": 29.4,
              "size": 500.0,
              "notional": 14700.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 217951,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6425",
              "timestamp": "2026-04-10T07:59:30.096224",
              "price": 29.4,
              "size": 500.0,
              "notional": 14700.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 217951,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6424",
              "timestamp": "2026-04-10T07:59:23.842851",
              "price": 29.4,
              "size": 4000.0,
              "notional": 117600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6423",
              "timestamp": "2026-04-10T07:59:23.837859",
              "price": 29.38,
              "size": 22500.0,
              "notional": 661050.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6422",
              "timestamp": "2026-04-10T07:59:23.837517",
              "price": 29.38,
              "size": 500.0,
              "notional": 14690.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6421",
              "timestamp": "2026-04-10T07:59:23.837517",
              "price": 29.38,
              "size": 500.0,
              "notional": 14690.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6420",
              "timestamp": "2026-04-10T07:59:23.837517",
              "price": 29.38,
              "size": 5000.0,
              "notional": 146900.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6419",
              "timestamp": "2026-04-10T07:59:23.837517",
              "price": 29.38,
              "size": 500.0,
              "notional": 14690.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6418",
              "timestamp": "2026-04-10T07:59:23.837517",
              "price": 29.38,
              "size": 1000.0,
              "notional": 29380.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6417",
              "timestamp": "2026-04-10T07:59:21.558673",
              "price": 29.38,
              "size": 500.0,
              "notional": 14690.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6416",
              "timestamp": "2026-04-10T07:59:20.104344",
              "price": 29.4,
              "size": 500.0,
              "notional": 14700.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6415",
              "timestamp": "2026-04-10T07:59:19.944366",
              "price": 29.4,
              "size": 500.0,
              "notional": 14700.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6414",
              "timestamp": "2026-04-10T07:59:18.606602",
              "price": 29.4,
              "size": 500.0,
              "notional": 14700.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6413",
              "timestamp": "2026-04-10T07:59:18.606320",
              "price": 29.4,
              "size": 1500.0,
              "notional": 44100.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6412",
              "timestamp": "2026-04-10T07:59:17.590104",
              "price": 29.38,
              "size": 3500.0,
              "notional": 102830.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6411",
              "timestamp": "2026-04-10T07:59:17.590104",
              "price": 29.38,
              "size": 2000.0,
              "notional": 58760.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6410",
              "timestamp": "2026-04-10T07:59:17.590104",
              "price": 29.38,
              "size": 9500.0,
              "notional": 279110.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6409",
              "timestamp": "2026-04-10T07:59:17.590104",
              "price": 29.38,
              "size": 500.0,
              "notional": 14690.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6408",
              "timestamp": "2026-04-10T07:59:17.590104",
              "price": 29.38,
              "size": 500.0,
              "notional": 14690.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
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
          "n_trades": 163242,
          "n_runs": 22154,
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
            "retail_pct": 0.0415150512735693,
            "mixed_pct": 0.0,
            "instit_pct": 0.5676909128778133,
            "ambiguous_pct": 0.33742541747834504,
            "unobservable_pct": 0.053368618370272354,
            "unclear_pct": 0.3907940358486174,
            "retail_qty_pct": 0.01905625574880261,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6883894622203165,
            "ambiguous_qty_pct": 0.251285588914079,
            "unobservable_qty_pct": 0.04126869311680194,
            "unclear_qty_pct": 0.2925542820308809,
            "retail_notional_pct": 0.018964782999134566,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6887457860402204,
            "ambiguous_notional_pct": 0.2511367373133456,
            "unobservable_notional_pct": 0.04115269364729934,
            "unclear_notional_pct": 0.29228943096064497
          },
          "run_composition": {
            "retail_pct": 0.22641509433962265,
            "mixed_pct": 0.0,
            "instit_pct": 0.17283560530829647,
            "ambiguous_pct": 0.3955944750383678,
            "unobservable_pct": 0.2051548253137131,
            "unclear_pct": 0.600749300352081,
            "retail_notional_pct": 0.018964782999134566,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6887457860402204,
            "unclear_notional_pct": 0.29228943096064497
          },
          "counts": {
            "trades": {
              "retail": 6777,
              "mixed": 0,
              "institutional": 92671,
              "ambiguous": 55082,
              "unobservable": 8712,
              "unclear": 63794
            },
            "runs": {
              "retail": 5016,
              "mixed": 0,
              "institutional": 3829,
              "ambiguous": 8764,
              "unobservable": 4545,
              "unclear": 13309
            }
          },
          "confidence": {
            "high": 0.052541301796515304,
            "medium": 0.21088742439288616,
            "low": 0.13582197345851765,
            "na": 0.6007493003520809
          },
          "confidence_counts": {
            "high": 1164,
            "medium": 4672,
            "low": 3009,
            "na": 13309
          },
          "trade_confidence": {
            "high": 0.008202545913429142,
            "medium": 0.3938753507063133,
            "low": 0.20712806753164015,
            "na": 0.3907940358486174
          },
          "trade_confidence_counts": {
            "high": 1339,
            "medium": 64297,
            "low": 33812,
            "na": 63794
          },
          "observability": {
            "avg_feature_coverage": 0.7344429899792364,
            "observable_run_pct": 0.7948451746862869,
            "ambiguous_run_pct": 0.3955944750383678,
            "unobservable_run_pct": 0.2051548253137131
          },
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Unclassified Flow",
          "dominant_share": 0.3955944750383678,
          "dominance_gap": 0.16917938069874516,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 163242
            },
            "d2_information": {
              "UNOBSERVABLE": 163242
            },
            "d3_urgency": {
              "IMMEDIATE": 18666,
              "ADAPTIVE": 3471,
              "SCHEDULED": 15,
              "OPPORTUNISTIC": 2
            },
            "participant_confidence": {
              "NA": 13309,
              "MEDIUM": 4672,
              "LOW": 3009,
              "HIGH": 1164
            }
          },
          "trade_size": {
            "avg": 49923.11303004129,
            "median": 15540.0
          },
          "run_size": {
            "avg": 367859.0239798682,
            "median": 73875.0,
            "avg_length": 7.368511329782432
          },
          "recent_trades": [
            {
              "trade_id": "6437",
              "timestamp": "2026-04-10T07:59:55.232608",
              "price": 29.4,
              "size": 500.0,
              "notional": 14700.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 217952,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "6436",
              "timestamp": "2026-04-10T07:59:55.231692",
              "price": 29.4,
              "size": 500.0,
              "notional": 14700.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 217952,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "6435",
              "timestamp": "2026-04-10T07:59:51.051140",
              "price": 29.4,
              "size": 1000.0,
              "notional": 29400.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 217952,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "6434",
              "timestamp": "2026-04-10T07:59:51.044228",
              "price": 29.38,
              "size": 500.0,
              "notional": 14690.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 217952,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "6433",
              "timestamp": "2026-04-10T07:59:37.154630",
              "price": 29.38,
              "size": 500.0,
              "notional": 14690.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 217951,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6432",
              "timestamp": "2026-04-10T07:59:35.216816",
              "price": 29.4,
              "size": 500.0,
              "notional": 14700.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 217951,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6431",
              "timestamp": "2026-04-10T07:59:35.207874",
              "price": 29.4,
              "size": 500.0,
              "notional": 14700.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 217951,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6430",
              "timestamp": "2026-04-10T07:59:31.178378",
              "price": 29.38,
              "size": 6500.0,
              "notional": 190970.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 217951,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6429",
              "timestamp": "2026-04-10T07:59:31.155383",
              "price": 29.38,
              "size": 1000.0,
              "notional": 29380.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 217951,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6428",
              "timestamp": "2026-04-10T07:59:31.148468",
              "price": 29.38,
              "size": 6000.0,
              "notional": 176280.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 217951,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6427",
              "timestamp": "2026-04-10T07:59:31.148468",
              "price": 29.38,
              "size": 6500.0,
              "notional": 190970.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 217951,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6426",
              "timestamp": "2026-04-10T07:59:30.430532",
              "price": 29.4,
              "size": 500.0,
              "notional": 14700.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 217951,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6425",
              "timestamp": "2026-04-10T07:59:30.096224",
              "price": 29.4,
              "size": 500.0,
              "notional": 14700.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 217951,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6424",
              "timestamp": "2026-04-10T07:59:23.842851",
              "price": 29.4,
              "size": 4000.0,
              "notional": 117600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6423",
              "timestamp": "2026-04-10T07:59:23.837859",
              "price": 29.38,
              "size": 22500.0,
              "notional": 661050.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6422",
              "timestamp": "2026-04-10T07:59:23.837517",
              "price": 29.38,
              "size": 500.0,
              "notional": 14690.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6421",
              "timestamp": "2026-04-10T07:59:23.837517",
              "price": 29.38,
              "size": 500.0,
              "notional": 14690.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6420",
              "timestamp": "2026-04-10T07:59:23.837517",
              "price": 29.38,
              "size": 5000.0,
              "notional": 146900.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6419",
              "timestamp": "2026-04-10T07:59:23.837517",
              "price": 29.38,
              "size": 500.0,
              "notional": 14690.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6418",
              "timestamp": "2026-04-10T07:59:23.837517",
              "price": 29.38,
              "size": 1000.0,
              "notional": 29380.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6417",
              "timestamp": "2026-04-10T07:59:21.558673",
              "price": 29.38,
              "size": 500.0,
              "notional": 14690.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6416",
              "timestamp": "2026-04-10T07:59:20.104344",
              "price": 29.4,
              "size": 500.0,
              "notional": 14700.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6415",
              "timestamp": "2026-04-10T07:59:19.944366",
              "price": 29.4,
              "size": 500.0,
              "notional": 14700.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6414",
              "timestamp": "2026-04-10T07:59:18.606602",
              "price": 29.4,
              "size": 500.0,
              "notional": 14700.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6413",
              "timestamp": "2026-04-10T07:59:18.606320",
              "price": 29.4,
              "size": 1500.0,
              "notional": 44100.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6412",
              "timestamp": "2026-04-10T07:59:17.590104",
              "price": 29.38,
              "size": 3500.0,
              "notional": 102830.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6411",
              "timestamp": "2026-04-10T07:59:17.590104",
              "price": 29.38,
              "size": 2000.0,
              "notional": 58760.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6410",
              "timestamp": "2026-04-10T07:59:17.590104",
              "price": 29.38,
              "size": 9500.0,
              "notional": 279110.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6409",
              "timestamp": "2026-04-10T07:59:17.590104",
              "price": 29.38,
              "size": 500.0,
              "notional": 14690.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6408",
              "timestamp": "2026-04-10T07:59:17.590104",
              "price": 29.38,
              "size": 500.0,
              "notional": 14690.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
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
          "n_trades": 600259,
          "n_runs": 69173,
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
            "retail_pct": 0.03568293020179623,
            "mixed_pct": 0.0,
            "instit_pct": 0.5845859870489238,
            "ambiguous_pct": 0.3362198650915688,
            "unobservable_pct": 0.043511217657711085,
            "unclear_pct": 0.3797310827492799,
            "retail_qty_pct": 0.014925415830258046,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7005929617934518,
            "ambiguous_qty_pct": 0.2544440027597682,
            "unobservable_qty_pct": 0.030037619616521988,
            "unclear_qty_pct": 0.28448162237629016,
            "retail_notional_pct": 0.014870604575783104,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7012272800174616,
            "ambiguous_notional_pct": 0.253981155270839,
            "unobservable_notional_pct": 0.029920960135916257,
            "unclear_notional_pct": 0.28390211540675525
          },
          "run_composition": {
            "retail_pct": 0.21015425093605886,
            "mixed_pct": 0.0,
            "instit_pct": 0.1699507033090946,
            "ambiguous_pct": 0.4096395992656094,
            "unobservable_pct": 0.21025544648923714,
            "unclear_pct": 0.6198950457548466,
            "retail_notional_pct": 0.014870604575783104,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7012272800174616,
            "unclear_notional_pct": 0.28390211540675525
          },
          "counts": {
            "trades": {
              "retail": 21419,
              "mixed": 0,
              "institutional": 350903,
              "ambiguous": 201819,
              "unobservable": 26118,
              "unclear": 227937
            },
            "runs": {
              "retail": 14537,
              "mixed": 0,
              "institutional": 11756,
              "ambiguous": 28336,
              "unobservable": 14544,
              "unclear": 42880
            }
          },
          "confidence": {
            "high": 0.05720440056091249,
            "medium": 0.2058895811949749,
            "low": 0.11701097248926605,
            "na": 0.6198950457548466
          },
          "confidence_counts": {
            "high": 3957,
            "medium": 14242,
            "low": 8094,
            "na": 42880
          },
          "trade_confidence": {
            "high": 0.0275014618689599,
            "medium": 0.43287314309323144,
            "low": 0.1598943122885288,
            "na": 0.3797310827492799
          },
          "trade_confidence_counts": {
            "high": 16508,
            "medium": 259836,
            "low": 95978,
            "na": 227937
          },
          "observability": {
            "avg_feature_coverage": 0.736532317522733,
            "observable_run_pct": 0.7897445535107629,
            "ambiguous_run_pct": 0.4096395992656094,
            "unobservable_run_pct": 0.21025544648923714
          },
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Unclassified Flow",
          "dominant_share": 0.4096395992656094,
          "dominance_gap": 0.19938415277637225,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 600259
            },
            "d2_information": {
              "UNOBSERVABLE": 600259
            },
            "d3_urgency": {
              "IMMEDIATE": 55964,
              "ADAPTIVE": 13123,
              "SCHEDULED": 78,
              "OPPORTUNISTIC": 8
            },
            "participant_confidence": {
              "NA": 42880,
              "MEDIUM": 14242,
              "LOW": 8094,
              "HIGH": 3957
            }
          },
          "trade_size": {
            "avg": 54312.33773092948,
            "median": 28480.0
          },
          "run_size": {
            "avg": 471303.3919886372,
            "median": 79300.0,
            "avg_length": 8.67764879360444
          },
          "recent_trades": [
            {
              "trade_id": "6437",
              "timestamp": "2026-04-10T07:59:55.232608",
              "price": 29.4,
              "size": 500.0,
              "notional": 14700.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 217952,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "6436",
              "timestamp": "2026-04-10T07:59:55.231692",
              "price": 29.4,
              "size": 500.0,
              "notional": 14700.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 217952,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "6435",
              "timestamp": "2026-04-10T07:59:51.051140",
              "price": 29.4,
              "size": 1000.0,
              "notional": 29400.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 217952,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "6434",
              "timestamp": "2026-04-10T07:59:51.044228",
              "price": 29.38,
              "size": 500.0,
              "notional": 14690.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 217952,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "6433",
              "timestamp": "2026-04-10T07:59:37.154630",
              "price": 29.38,
              "size": 500.0,
              "notional": 14690.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 217951,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6432",
              "timestamp": "2026-04-10T07:59:35.216816",
              "price": 29.4,
              "size": 500.0,
              "notional": 14700.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 217951,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6431",
              "timestamp": "2026-04-10T07:59:35.207874",
              "price": 29.4,
              "size": 500.0,
              "notional": 14700.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 217951,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6430",
              "timestamp": "2026-04-10T07:59:31.178378",
              "price": 29.38,
              "size": 6500.0,
              "notional": 190970.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 217951,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6429",
              "timestamp": "2026-04-10T07:59:31.155383",
              "price": 29.38,
              "size": 1000.0,
              "notional": 29380.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 217951,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6428",
              "timestamp": "2026-04-10T07:59:31.148468",
              "price": 29.38,
              "size": 6000.0,
              "notional": 176280.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 217951,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6427",
              "timestamp": "2026-04-10T07:59:31.148468",
              "price": 29.38,
              "size": 6500.0,
              "notional": 190970.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 217951,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6426",
              "timestamp": "2026-04-10T07:59:30.430532",
              "price": 29.4,
              "size": 500.0,
              "notional": 14700.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 217951,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6425",
              "timestamp": "2026-04-10T07:59:30.096224",
              "price": 29.4,
              "size": 500.0,
              "notional": 14700.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 217951,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6424",
              "timestamp": "2026-04-10T07:59:23.842851",
              "price": 29.4,
              "size": 4000.0,
              "notional": 117600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6423",
              "timestamp": "2026-04-10T07:59:23.837859",
              "price": 29.38,
              "size": 22500.0,
              "notional": 661050.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6422",
              "timestamp": "2026-04-10T07:59:23.837517",
              "price": 29.38,
              "size": 500.0,
              "notional": 14690.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6421",
              "timestamp": "2026-04-10T07:59:23.837517",
              "price": 29.38,
              "size": 500.0,
              "notional": 14690.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6420",
              "timestamp": "2026-04-10T07:59:23.837517",
              "price": 29.38,
              "size": 5000.0,
              "notional": 146900.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6419",
              "timestamp": "2026-04-10T07:59:23.837517",
              "price": 29.38,
              "size": 500.0,
              "notional": 14690.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6418",
              "timestamp": "2026-04-10T07:59:23.837517",
              "price": 29.38,
              "size": 1000.0,
              "notional": 29380.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6417",
              "timestamp": "2026-04-10T07:59:21.558673",
              "price": 29.38,
              "size": 500.0,
              "notional": 14690.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6416",
              "timestamp": "2026-04-10T07:59:20.104344",
              "price": 29.4,
              "size": 500.0,
              "notional": 14700.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6415",
              "timestamp": "2026-04-10T07:59:19.944366",
              "price": 29.4,
              "size": 500.0,
              "notional": 14700.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6414",
              "timestamp": "2026-04-10T07:59:18.606602",
              "price": 29.4,
              "size": 500.0,
              "notional": 14700.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6413",
              "timestamp": "2026-04-10T07:59:18.606320",
              "price": 29.4,
              "size": 1500.0,
              "notional": 44100.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6412",
              "timestamp": "2026-04-10T07:59:17.590104",
              "price": 29.38,
              "size": 3500.0,
              "notional": 102830.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6411",
              "timestamp": "2026-04-10T07:59:17.590104",
              "price": 29.38,
              "size": 2000.0,
              "notional": 58760.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6410",
              "timestamp": "2026-04-10T07:59:17.590104",
              "price": 29.38,
              "size": 9500.0,
              "notional": 279110.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6409",
              "timestamp": "2026-04-10T07:59:17.590104",
              "price": 29.38,
              "size": 500.0,
              "notional": 14690.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6408",
              "timestamp": "2026-04-10T07:59:17.590104",
              "price": 29.38,
              "size": 500.0,
              "notional": 14690.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
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
          "n_trades": 1095137,
          "n_runs": 134999,
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
            "retail_pct": 0.03360218858462457,
            "mixed_pct": 0.0,
            "instit_pct": 0.5783413399419434,
            "ambiguous_pct": 0.3367642587183156,
            "unobservable_pct": 0.05129221275511648,
            "unclear_pct": 0.3880564714734321,
            "retail_qty_pct": 0.014990092176503636,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6897945493515437,
            "ambiguous_qty_pct": 0.2602072244030184,
            "unobservable_qty_pct": 0.03500813406893423,
            "unclear_qty_pct": 0.2952153584719526,
            "retail_notional_pct": 0.01490104393668807,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6908401094792672,
            "ambiguous_notional_pct": 0.25948973753910864,
            "unobservable_notional_pct": 0.03476910904493606,
            "unclear_notional_pct": 0.2942588465840447
          },
          "run_composition": {
            "retail_pct": 0.18680879117623095,
            "mixed_pct": 0.0,
            "instit_pct": 0.16997903688175467,
            "ambiguous_pct": 0.3986696197749613,
            "unobservable_pct": 0.2445425521670531,
            "unclear_pct": 0.6432121719420144,
            "retail_notional_pct": 0.01490104393668807,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6908401094792672,
            "unclear_notional_pct": 0.2942588465840447
          },
          "counts": {
            "trades": {
              "retail": 36799,
              "mixed": 0,
              "institutional": 633363,
              "ambiguous": 368803,
              "unobservable": 56172,
              "unclear": 424975
            },
            "runs": {
              "retail": 25219,
              "mixed": 0,
              "institutional": 22947,
              "ambiguous": 53820,
              "unobservable": 33013,
              "unclear": 86833
            }
          },
          "confidence": {
            "high": 0.06119304587441388,
            "medium": 0.19661627123163875,
            "low": 0.09897851095193298,
            "na": 0.6432121719420144
          },
          "confidence_counts": {
            "high": 8261,
            "medium": 26543,
            "low": 13362,
            "na": 86833
          },
          "trade_confidence": {
            "high": 0.03520016217149087,
            "medium": 0.4355272445365283,
            "low": 0.14121612181854873,
            "na": 0.3880564714734321
          },
          "trade_confidence_counts": {
            "high": 38549,
            "medium": 476962,
            "low": 154651,
            "na": 424975
          },
          "observability": {
            "avg_feature_coverage": 0.726995755524115,
            "observable_run_pct": 0.7554574478329469,
            "ambiguous_run_pct": 0.3986696197749613,
            "unobservable_run_pct": 0.2445425521670531
          },
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Unclassified Flow",
          "dominant_share": 0.3986696197749613,
          "dominance_gap": 0.1541270676079082,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 1095137
            },
            "d2_information": {
              "UNOBSERVABLE": 1095137
            },
            "d3_urgency": {
              "IMMEDIATE": 110855,
              "ADAPTIVE": 23997,
              "SCHEDULED": 134,
              "OPPORTUNISTIC": 13
            },
            "participant_confidence": {
              "NA": 86833,
              "MEDIUM": 26543,
              "LOW": 13362,
              "HIGH": 8261
            }
          },
          "trade_size": {
            "avg": 50891.3398379326,
            "median": 27120.0
          },
          "run_size": {
            "avg": 412840.01537858794,
            "median": 74650.0,
            "avg_length": 8.112186016192712
          },
          "recent_trades": [
            {
              "trade_id": "6437",
              "timestamp": "2026-04-10T07:59:55.232608",
              "price": 29.4,
              "size": 500.0,
              "notional": 14700.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 217952,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "6436",
              "timestamp": "2026-04-10T07:59:55.231692",
              "price": 29.4,
              "size": 500.0,
              "notional": 14700.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 217952,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "6435",
              "timestamp": "2026-04-10T07:59:51.051140",
              "price": 29.4,
              "size": 1000.0,
              "notional": 29400.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 217952,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "6434",
              "timestamp": "2026-04-10T07:59:51.044228",
              "price": 29.38,
              "size": 500.0,
              "notional": 14690.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 217952,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "6433",
              "timestamp": "2026-04-10T07:59:37.154630",
              "price": 29.38,
              "size": 500.0,
              "notional": 14690.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 217951,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6432",
              "timestamp": "2026-04-10T07:59:35.216816",
              "price": 29.4,
              "size": 500.0,
              "notional": 14700.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 217951,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6431",
              "timestamp": "2026-04-10T07:59:35.207874",
              "price": 29.4,
              "size": 500.0,
              "notional": 14700.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 217951,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6430",
              "timestamp": "2026-04-10T07:59:31.178378",
              "price": 29.38,
              "size": 6500.0,
              "notional": 190970.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 217951,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6429",
              "timestamp": "2026-04-10T07:59:31.155383",
              "price": 29.38,
              "size": 1000.0,
              "notional": 29380.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 217951,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6428",
              "timestamp": "2026-04-10T07:59:31.148468",
              "price": 29.38,
              "size": 6000.0,
              "notional": 176280.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 217951,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6427",
              "timestamp": "2026-04-10T07:59:31.148468",
              "price": 29.38,
              "size": 6500.0,
              "notional": 190970.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 217951,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6426",
              "timestamp": "2026-04-10T07:59:30.430532",
              "price": 29.4,
              "size": 500.0,
              "notional": 14700.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 217951,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6425",
              "timestamp": "2026-04-10T07:59:30.096224",
              "price": 29.4,
              "size": 500.0,
              "notional": 14700.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 217951,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6424",
              "timestamp": "2026-04-10T07:59:23.842851",
              "price": 29.4,
              "size": 4000.0,
              "notional": 117600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6423",
              "timestamp": "2026-04-10T07:59:23.837859",
              "price": 29.38,
              "size": 22500.0,
              "notional": 661050.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6422",
              "timestamp": "2026-04-10T07:59:23.837517",
              "price": 29.38,
              "size": 500.0,
              "notional": 14690.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6421",
              "timestamp": "2026-04-10T07:59:23.837517",
              "price": 29.38,
              "size": 500.0,
              "notional": 14690.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6420",
              "timestamp": "2026-04-10T07:59:23.837517",
              "price": 29.38,
              "size": 5000.0,
              "notional": 146900.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6419",
              "timestamp": "2026-04-10T07:59:23.837517",
              "price": 29.38,
              "size": 500.0,
              "notional": 14690.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6418",
              "timestamp": "2026-04-10T07:59:23.837517",
              "price": 29.38,
              "size": 1000.0,
              "notional": 29380.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6417",
              "timestamp": "2026-04-10T07:59:21.558673",
              "price": 29.38,
              "size": 500.0,
              "notional": 14690.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6416",
              "timestamp": "2026-04-10T07:59:20.104344",
              "price": 29.4,
              "size": 500.0,
              "notional": 14700.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6415",
              "timestamp": "2026-04-10T07:59:19.944366",
              "price": 29.4,
              "size": 500.0,
              "notional": 14700.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6414",
              "timestamp": "2026-04-10T07:59:18.606602",
              "price": 29.4,
              "size": 500.0,
              "notional": 14700.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6413",
              "timestamp": "2026-04-10T07:59:18.606320",
              "price": 29.4,
              "size": 1500.0,
              "notional": 44100.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6412",
              "timestamp": "2026-04-10T07:59:17.590104",
              "price": 29.38,
              "size": 3500.0,
              "notional": 102830.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6411",
              "timestamp": "2026-04-10T07:59:17.590104",
              "price": 29.38,
              "size": 2000.0,
              "notional": 58760.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6410",
              "timestamp": "2026-04-10T07:59:17.590104",
              "price": 29.38,
              "size": 9500.0,
              "notional": 279110.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6409",
              "timestamp": "2026-04-10T07:59:17.590104",
              "price": 29.38,
              "size": 500.0,
              "notional": 14690.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "6408",
              "timestamp": "2026-04-10T07:59:17.590104",
              "price": 29.38,
              "size": 500.0,
              "notional": 14690.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 217950,
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
      "n_trades": 1095137,
      "n_runs": 134999,
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
        "retail_pct": 0.03360218858462457,
        "mixed_pct": 0.0,
        "instit_pct": 0.5783413399419434,
        "ambiguous_pct": 0.3367642587183156,
        "unobservable_pct": 0.05129221275511648,
        "unclear_pct": 0.3880564714734321,
        "retail_qty_pct": 0.014990092176503636,
        "mixed_qty_pct": 0.0,
        "instit_qty_pct": 0.6897945493515437,
        "ambiguous_qty_pct": 0.2602072244030184,
        "unobservable_qty_pct": 0.03500813406893423,
        "unclear_qty_pct": 0.2952153584719526,
        "retail_notional_pct": 0.01490104393668807,
        "mixed_notional_pct": 0.0,
        "instit_notional_pct": 0.6908401094792672,
        "ambiguous_notional_pct": 0.25948973753910864,
        "unobservable_notional_pct": 0.03476910904493606,
        "unclear_notional_pct": 0.2942588465840447
      },
      "run_composition": {
        "retail_pct": 0.18680879117623095,
        "mixed_pct": 0.0,
        "instit_pct": 0.16997903688175467,
        "ambiguous_pct": 0.3986696197749613,
        "unobservable_pct": 0.2445425521670531,
        "unclear_pct": 0.6432121719420144
      },
      "trade_size": {
        "avg": 50891.3398379326,
        "median": 27120.0
      },
      "run_size": {
        "avg": 412840.01537858794,
        "median": 74650.0,
        "avg_length": 8.112186016192712
      },
      "confidence": {
        "high": 0.06119304587441388,
        "medium": 0.19661627123163875,
        "low": 0.09897851095193298,
        "na": 0.6432121719420144
      },
      "confidence_counts": {
        "high": 8261,
        "medium": 26543,
        "low": 13362,
        "na": 86833
      },
      "trade_confidence": {
        "high": 0.03520016217149087,
        "medium": 0.4355272445365283,
        "low": 0.14121612181854873,
        "na": 0.3880564714734321
      },
      "trade_confidence_counts": {
        "high": 38549,
        "medium": 476962,
        "low": 154651,
        "na": 424975
      },
      "counts": {
        "trades": {
          "retail": 36799,
          "mixed": 0,
          "institutional": 633363,
          "ambiguous": 368803,
          "unobservable": 56172,
          "unclear": 424975
        },
        "runs": {
          "retail": 25219,
          "mixed": 0,
          "institutional": 22947,
          "ambiguous": 53820,
          "unobservable": 33013,
          "unclear": 86833
        }
      },
      "observability": {
        "avg_feature_coverage": 0.726995755524115,
        "observable_run_pct": 0.7554574478329469,
        "ambiguous_run_pct": 0.3986696197749613,
        "unobservable_run_pct": 0.2445425521670531
      },
      "dominant_bucket": "AMBIGUOUS",
      "dominant_label": "Unclassified Flow",
      "dominant_share": 0.3986696197749613,
      "dominance_gap": 0.1541270676079082,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2025-11",
            "n_trades": 162605,
            "n_runs": 19190,
            "retail_pct": 0.026684296300851756,
            "mixed_pct": 0.0,
            "instit_pct": 0.620122382460564,
            "ambiguous_pct": 0.2965160972909812,
            "unobservable_pct": 0.056677223947603085,
            "unclear_pct": 0.3531933212385843,
            "avg_trade_size": 48684.29347707635,
            "avg_run_notional": 412522.64412923396,
            "retail_qty_pct": 0.012628988228181467,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7045927688492061,
            "ambiguous_qty_pct": 0.2421074153644499,
            "unobservable_qty_pct": 0.040670827558162495,
            "unclear_qty_pct": 0.2827782429226124,
            "retail_notional_pct": 0.012550782357287326,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7058649827564819,
            "ambiguous_notional_pct": 0.2412661060140072,
            "unobservable_notional_pct": 0.04031812887222355,
            "unclear_notional_pct": 0.28158423488623074,
            "run_retail_pct": 0.16133402813965608,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.17983324648254298,
            "run_ambiguous_pct": 0.3848879624804586,
            "run_unobservable_pct": 0.2739447628973424,
            "run_unclear_pct": 0.658832725377801,
            "avg_feature_coverage": 0.7175169359041168,
            "high_confidence_pct": 0.06492965085982283,
            "medium_confidence_pct": 0.18999478895257946,
            "low_confidence_pct": 0.08624283480979678,
            "na_confidence_pct": 0.6588327253778009,
            "total_quantity": null
          },
          {
            "month": "2025-12",
            "n_trades": 94556,
            "n_runs": 15088,
            "retail_pct": 0.03945809890435298,
            "mixed_pct": 0.0,
            "instit_pct": 0.5282160835906764,
            "ambiguous_pct": 0.35996658065061976,
            "unobservable_pct": 0.07235923685435086,
            "unclear_pct": 0.4323258175049706,
            "avg_trade_size": 45486.01178321841,
            "avg_run_notional": 285059.3405470573,
            "retail_qty_pct": 0.020926016827541867,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6449961733518608,
            "ambiguous_qty_pct": 0.28371739136947005,
            "unobservable_qty_pct": 0.05036041845112737,
            "unclear_qty_pct": 0.3340778098205974,
            "retail_notional_pct": 0.02089078825671037,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6454412381755497,
            "ambiguous_notional_pct": 0.2831773846921199,
            "unobservable_notional_pct": 0.050490588875620135,
            "unclear_notional_pct": 0.33366797356774003,
            "run_retail_pct": 0.17583510074231176,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.15820519618239662,
            "run_ambiguous_pct": 0.38958112407211026,
            "run_unobservable_pct": 0.27637857900318136,
            "run_unclear_pct": 0.6659597030752916,
            "avg_feature_coverage": 0.7175470572640509,
            "high_confidence_pct": 0.07436373276776247,
            "medium_confidence_pct": 0.18020943796394487,
            "low_confidence_pct": 0.07946712619300106,
            "na_confidence_pct": 0.6659597030752916,
            "total_quantity": null
          },
          {
            "month": "2026-01",
            "n_trades": 232697,
            "n_runs": 23427,
            "retail_pct": 0.03483500002148717,
            "mixed_pct": 0.0,
            "instit_pct": 0.586436438802391,
            "ambiguous_pct": 0.34233789004585363,
            "unobservable_pct": 0.036390671130268115,
            "unclear_pct": 0.37872856117612175,
            "avg_trade_size": 54907.60390645346,
            "avg_run_notional": 545389.2818636616,
            "retail_qty_pct": 0.014192217428421208,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6930653845540842,
            "ambiguous_qty_pct": 0.26816676118581473,
            "unobservable_qty_pct": 0.024575636831679855,
            "unclear_qty_pct": 0.2927423980174946,
            "retail_notional_pct": 0.014231659710012457,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6931526401369652,
            "ambiguous_notional_pct": 0.26823382525185097,
            "unobservable_notional_pct": 0.024381874901171316,
            "unclear_notional_pct": 0.2926157001530223,
            "run_retail_pct": 0.21453878004012464,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.15768130789260254,
            "run_ambiguous_pct": 0.41546079310197637,
            "run_unobservable_pct": 0.21231911896529646,
            "run_unclear_pct": 0.6277799120672728,
            "avg_feature_coverage": 0.736297861441926,
            "high_confidence_pct": 0.06906560805907713,
            "medium_confidence_pct": 0.19801937934861485,
            "low_confidence_pct": 0.10513510052503522,
            "na_confidence_pct": 0.6277799120672728,
            "total_quantity": null
          },
          {
            "month": "2026-02",
            "n_trades": 150386,
            "n_runs": 17840,
            "retail_pct": 0.03154548960674531,
            "mixed_pct": 0.0,
            "instit_pct": 0.6101166331972391,
            "ambiguous_pct": 0.3106339685875015,
            "unobservable_pct": 0.04770390860851409,
            "unclear_pct": 0.35833787719601556,
            "avg_trade_size": 59984.49160826141,
            "avg_run_notional": 505651.77998878923,
            "retail_qty_pct": 0.012071558948585843,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7286581759912776,
            "ambiguous_qty_pct": 0.22870921375228817,
            "unobservable_qty_pct": 0.030561051307848426,
            "unclear_qty_pct": 0.2592702650601366,
            "retail_notional_pct": 0.012085950458323546,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7288971359236422,
            "ambiguous_notional_pct": 0.2285086421983234,
            "unobservable_notional_pct": 0.03050827141971075,
            "unclear_notional_pct": 0.25901691361803414,
            "run_retail_pct": 0.19702914798206278,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.1798206278026906,
            "run_ambiguous_pct": 0.403195067264574,
            "run_unobservable_pct": 0.21995515695067264,
            "run_unclear_pct": 0.6231502242152467,
            "avg_feature_coverage": 0.7370039237668162,
            "high_confidence_pct": 0.04248878923766816,
            "medium_confidence_pct": 0.2164237668161435,
            "low_confidence_pct": 0.1179372197309417,
            "na_confidence_pct": 0.6231502242152467,
            "total_quantity": null
          },
          {
            "month": "2026-03",
            "n_trades": 200623,
            "n_runs": 25000,
            "retail_pct": 0.038001624938317144,
            "mixed_pct": 0.0,
            "instit_pct": 0.5607083933547001,
            "ambiguous_pct": 0.35549762489844133,
            "unobservable_pct": 0.04579235680854139,
            "unclear_pct": 0.4012899817069827,
            "avg_trade_size": 48202.96106563055,
            "avg_run_notional": 386824.90631479997,
            "retail_qty_pct": 0.01712722827598471,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.687411348242703,
            "ambiguous_qty_pct": 0.2621839509739745,
            "unobservable_qty_pct": 0.033277472507337744,
            "unclear_qty_pct": 0.29546142348131227,
            "retail_notional_pct": 0.01704965622103135,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6875793593247845,
            "ambiguous_notional_pct": 0.26229429707669794,
            "unobservable_notional_pct": 0.033076687377486126,
            "unclear_notional_pct": 0.2953709844541841,
            "run_retail_pct": 0.20796,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.17516,
            "run_ambiguous_pct": 0.41416,
            "run_unobservable_pct": 0.20272,
            "run_unclear_pct": 0.61688,
            "avg_feature_coverage": 0.7367440000000001,
            "high_confidence_pct": 0.06104,
            "medium_confidence_pct": 0.202,
            "low_confidence_pct": 0.12008,
            "na_confidence_pct": 0.61688,
            "total_quantity": null
          },
          {
            "month": "2026-04",
            "n_trades": 32135,
            "n_runs": 4728,
            "retail_pct": 0.04415746071261864,
            "mixed_pct": 0.0,
            "instit_pct": 0.5881126497588299,
            "ambiguous_pct": 0.29811731756651627,
            "unobservable_pct": 0.06961257196203516,
            "unclear_pct": 0.36772988952855146,
            "avg_trade_size": 58656.53516041699,
            "avg_run_notional": 398673.38354060915,
            "retail_qty_pct": 0.021035882065204545,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6793119991482124,
            "ambiguous_qty_pct": 0.2462676676166644,
            "unobservable_qty_pct": 0.05338445116991863,
            "unclear_qty_pct": 0.29965211878658304,
            "retail_notional_pct": 0.021017600693124763,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6791644093243184,
            "ambiguous_notional_pct": 0.24647254439382763,
            "unobservable_notional_pct": 0.05334544558872912,
            "unclear_notional_pct": 0.29981798998255677,
            "run_retail_pct": 0.23244500846023688,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.1660321489001692,
            "run_ambiguous_pct": 0.36315566835871405,
            "run_unobservable_pct": 0.23836717428087986,
            "run_unclear_pct": 0.6015228426395939,
            "avg_feature_coverage": 0.7256027918781726,
            "high_confidence_pct": 0.04483925549915398,
            "medium_confidence_pct": 0.21065989847715735,
            "low_confidence_pct": 0.14297800338409475,
            "na_confidence_pct": 0.6015228426395939,
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
          "trade_id": "6437",
          "timestamp": "2026-04-10T07:59:55.232608",
          "price": 29.4,
          "size": 500.0,
          "notional": 14700.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 217952,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "6436",
          "timestamp": "2026-04-10T07:59:55.231692",
          "price": 29.4,
          "size": 500.0,
          "notional": 14700.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 217952,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "6435",
          "timestamp": "2026-04-10T07:59:51.051140",
          "price": 29.4,
          "size": 1000.0,
          "notional": 29400.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 217952,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "6434",
          "timestamp": "2026-04-10T07:59:51.044228",
          "price": 29.38,
          "size": 500.0,
          "notional": 14690.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 217952,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "6433",
          "timestamp": "2026-04-10T07:59:37.154630",
          "price": 29.38,
          "size": 500.0,
          "notional": 14690.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 217951,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "6432",
          "timestamp": "2026-04-10T07:59:35.216816",
          "price": 29.4,
          "size": 500.0,
          "notional": 14700.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 217951,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "6431",
          "timestamp": "2026-04-10T07:59:35.207874",
          "price": 29.4,
          "size": 500.0,
          "notional": 14700.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 217951,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "6430",
          "timestamp": "2026-04-10T07:59:31.178378",
          "price": 29.38,
          "size": 6500.0,
          "notional": 190970.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 217951,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "6429",
          "timestamp": "2026-04-10T07:59:31.155383",
          "price": 29.38,
          "size": 1000.0,
          "notional": 29380.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 217951,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "6428",
          "timestamp": "2026-04-10T07:59:31.148468",
          "price": 29.38,
          "size": 6000.0,
          "notional": 176280.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 217951,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "6427",
          "timestamp": "2026-04-10T07:59:31.148468",
          "price": 29.38,
          "size": 6500.0,
          "notional": 190970.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 217951,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "6426",
          "timestamp": "2026-04-10T07:59:30.430532",
          "price": 29.4,
          "size": 500.0,
          "notional": 14700.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 217951,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "6425",
          "timestamp": "2026-04-10T07:59:30.096224",
          "price": 29.4,
          "size": 500.0,
          "notional": 14700.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 217951,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "6424",
          "timestamp": "2026-04-10T07:59:23.842851",
          "price": 29.4,
          "size": 4000.0,
          "notional": 117600.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 217950,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "6423",
          "timestamp": "2026-04-10T07:59:23.837859",
          "price": 29.38,
          "size": 22500.0,
          "notional": 661050.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 217950,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "6422",
          "timestamp": "2026-04-10T07:59:23.837517",
          "price": 29.38,
          "size": 500.0,
          "notional": 14690.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 217950,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "6421",
          "timestamp": "2026-04-10T07:59:23.837517",
          "price": 29.38,
          "size": 500.0,
          "notional": 14690.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 217950,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "6420",
          "timestamp": "2026-04-10T07:59:23.837517",
          "price": 29.38,
          "size": 5000.0,
          "notional": 146900.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 217950,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "6419",
          "timestamp": "2026-04-10T07:59:23.837517",
          "price": 29.38,
          "size": 500.0,
          "notional": 14690.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 217950,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "6418",
          "timestamp": "2026-04-10T07:59:23.837517",
          "price": 29.38,
          "size": 1000.0,
          "notional": 29380.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 217950,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "6417",
          "timestamp": "2026-04-10T07:59:21.558673",
          "price": 29.38,
          "size": 500.0,
          "notional": 14690.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 217950,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "6416",
          "timestamp": "2026-04-10T07:59:20.104344",
          "price": 29.4,
          "size": 500.0,
          "notional": 14700.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 217950,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "6415",
          "timestamp": "2026-04-10T07:59:19.944366",
          "price": 29.4,
          "size": 500.0,
          "notional": 14700.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 217950,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "6414",
          "timestamp": "2026-04-10T07:59:18.606602",
          "price": 29.4,
          "size": 500.0,
          "notional": 14700.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 217950,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "6413",
          "timestamp": "2026-04-10T07:59:18.606320",
          "price": 29.4,
          "size": 1500.0,
          "notional": 44100.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 217950,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "6412",
          "timestamp": "2026-04-10T07:59:17.590104",
          "price": 29.38,
          "size": 3500.0,
          "notional": 102830.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 217950,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "6411",
          "timestamp": "2026-04-10T07:59:17.590104",
          "price": 29.38,
          "size": 2000.0,
          "notional": 58760.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 217950,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "6410",
          "timestamp": "2026-04-10T07:59:17.590104",
          "price": 29.38,
          "size": 9500.0,
          "notional": 279110.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 217950,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "6409",
          "timestamp": "2026-04-10T07:59:17.590104",
          "price": 29.38,
          "size": 500.0,
          "notional": 14690.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 217950,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "6408",
          "timestamp": "2026-04-10T07:59:17.590104",
          "price": 29.38,
          "size": 500.0,
          "notional": 14690.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 217950,
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
      "total_trades": 1095136,
      "price_moving_trades": 180017,
      "pct_price_moving": 16.437867077696286,
      "all_movers": {
        "count": 180017,
        "avg_size": 46490.66861981923,
        "median_size": 15930.0,
        "retail_count": 13085,
        "mixed_count": 0,
        "institutional_count": 88752,
        "ambiguous_count": 66268,
        "unobservable_count": 11912,
        "retail_pct": 7.268757950637996,
        "mixed_pct": 0.0,
        "instit_pct": 49.302010365687686,
        "unclear_pct": 43.42923168367432
      },
      "positive_movers": {
        "count": 90028,
        "avg_size": 45682.869624894476,
        "median_size": 15925.0,
        "retail_count": 2372,
        "mixed_count": 0,
        "institutional_count": 44745,
        "ambiguous_count": 32330,
        "unobservable_count": 10581,
        "retail_pct": 2.634735859954681,
        "mixed_pct": 0.0,
        "instit_pct": 49.70120406984494,
        "unclear_pct": 47.66406007020038
      },
      "negative_movers": {
        "count": 89989,
        "avg_size": 47298.817703763794,
        "median_size": 15940.0,
        "retail_count": 10713,
        "mixed_count": 0,
        "institutional_count": 44007,
        "ambiguous_count": 33938,
        "unobservable_count": 1331,
        "retail_pct": 11.904788363022147,
        "mixed_pct": 0.0,
        "instit_pct": 48.9026436564469,
        "unclear_pct": 39.19256798053096
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
          "opening": 0.008470669867933232,
          "continuous": 0.9002890910773542,
          "closing": 0.06823734141112564,
          "auctions": 0.07670801127905888,
          "other": 0.02300289764358676
        },
        "1M": {
          "opening": 0.005418833287909796,
          "continuous": 0.8919831128833208,
          "closing": 0.08605694689432201,
          "auctions": 0.0914757801822318,
          "other": 0.016541106934447415
        },
        "3M": {
          "opening": 0.005114526563691756,
          "continuous": 0.8871210130460431,
          "closing": 0.07897821259320578,
          "auctions": 0.08409273915689754,
          "other": 0.02878624779705938
        },
        "6M": {
          "opening": 0.005371116258752992,
          "continuous": 0.8777516307255591,
          "closing": 0.08390904584790286,
          "auctions": 0.08928016210665585,
          "other": 0.032968207167785014
        }
      },
      "hhi": {
        "1D": 0.10951754365298162,
        "1M": 0.11727240688112213,
        "3M": 0.10999869415524341,
        "6M": 0.11266967154476105
      },
      "profile_buckets": [
        {
          "time": "09:00",
          "avg_share": 0.0054
        },
        {
          "time": "09:30",
          "avg_share": 0.1622
        },
        {
          "time": "10:00",
          "avg_share": 0.0819
        },
        {
          "time": "10:30",
          "avg_share": 0.0668
        },
        {
          "time": "11:00",
          "avg_share": 0.061
        },
        {
          "time": "11:30",
          "avg_share": 0.0367
        },
        {
          "time": "12:00",
          "avg_share": 0.097
        },
        {
          "time": "13:00",
          "avg_share": 0.0712
        },
        {
          "time": "13:30",
          "avg_share": 0.0585
        },
        {
          "time": "14:00",
          "avg_share": 0.0558
        },
        {
          "time": "14:30",
          "avg_share": 0.056
        },
        {
          "time": "15:00",
          "avg_share": 0.0666
        },
        {
          "time": "15:30",
          "avg_share": 0.1063
        },
        {
          "time": "16:00",
          "avg_share": 0.0748
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "1109",
          "auctions_pct": 8.958504329529001,
          "hhi": 0.11026918148738124,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400",
            "you": true
          }
        },
        {
          "ticker": "12",
          "auctions_pct": 14.35765941880952,
          "hhi": 0.12259021185664234,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "1113",
          "auctions_pct": 22.86556969699844,
          "hhi": 0.13465260343815008,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "688",
          "auctions_pct": 8.408390913457255,
          "hhi": 0.11489152722105657,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "16",
          "auctions_pct": 19.03375481023108,
          "hhi": 0.12560141511218542,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "1918",
          "auctions_pct": 2.181871477340002,
          "hhi": 0.16180117859170082,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "960",
          "auctions_pct": 5.743966051064423,
          "hhi": 0.12354078197440121,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "3900",
          "auctions_pct": 2.099375792485096,
          "hhi": 0.12784321802615548,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "83",
          "auctions_pct": 29.419490904537444,
          "hhi": 0.16152681841545835,
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
