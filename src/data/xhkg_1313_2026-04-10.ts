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
      "ticker": "1313",
      "name": "CR BLDG MAT TEC",
      "marketCap": 10893382994.52,
      "sector": "Construction Materials",
      "industry": "Properties & Construction - Construction"
    },
    {
      "ticker": "6655",
      "name": "HX BLDG MAT",
      "marketCap": 12732697599.999998,
      "sector": "Construction Materials",
      "industry": "Properties & Construction - Construction"
    },
    {
      "ticker": "2128",
      "name": "CHINA LESSO",
      "marketCap": 15108777608.0,
      "sector": "Construction Materials",
      "industry": "Properties & Construction - Construction"
    },
    {
      "ticker": "2233",
      "name": "WESTCHINACEMENT",
      "marketCap": 13601706721.800001,
      "sector": "Construction Materials",
      "industry": "Properties & Construction - Construction"
    },
    {
      "ticker": "3323",
      "name": "CNBM",
      "marketCap": 20514512521.92,
      "sector": "Construction Materials",
      "industry": "Properties & Construction - Construction"
    },
    {
      "ticker": "914",
      "name": "CONCH CEMENT",
      "marketCap": 27239616000.0,
      "sector": "Construction Materials",
      "industry": "Properties & Construction - Construction"
    },
    {
      "ticker": "1783",
      "name": "ENVISION GREEN",
      "marketCap": 9159215027.6,
      "sector": "Building Construction",
      "industry": "Properties & Construction - Construction"
    },
    {
      "ticker": "1757",
      "name": "GLOBAL CHI-1K",
      "marketCap": 21588000000.0,
      "sector": "Heavy Construction & Engineering",
      "industry": "Properties & Construction - Construction"
    },
    {
      "ticker": "1186",
      "name": "CHINA RAIL CONS",
      "marketCap": 11336576160.0,
      "sector": "Heavy Construction & Engineering",
      "industry": "Properties & Construction - Construction"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XHKG",
    "currency": "HKD",
    "ticker": "1313",
    "company": "CR BLDG MAT TEC",
    "asof_date": "2026-04-10",
    "industry": "Properties & Construction - Construction",
    "sector": "Construction Materials",
    "market_cap_display": "10.9B",
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
          "score_pca": 66.66666666666666,
          "score_pca_percentile": 66.66666666666666,
          "rank_pca": 859,
          "total": 2574,
          "adv_notional_sgd": 5943600.0,
          "adv_volume_shares": 3810000.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0005456156276695655,
          "votes": 355.0,
          "trades": 355.0,
          "spread_pct": 0.006889685927421012,
          "spread_ticks": 1.0776450511945392,
          "amihud": 1.0854722564145824e-09,
          "volatility": 0.1827585722135597
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5400311351591687,
          "loadings": {
            "log_adv": 0.5402029833535159,
            "log_trades": 0.5011844939658837,
            "log_turnover": 0.5017366694515694,
            "neg_spread": 0.39366793713877407,
            "neg_amihud": 0.04034419997132453,
            "neg_vol": -0.2205743754594915
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
          "peer_median_adv": 28897605.36,
          "peer_median_score_pca": 82.75058275058275,
          "peer_median_trades": 2156.0,
          "peer_median_volatility": 0.2985938093553795,
          "peer_median_spread_pct": 0.0025758463364235944,
          "peer_median_spread_ticks": 1.1450892857142858,
          "peer_median_amihud": 3.620105829916241e-10,
          "peer_median_turnover_ratio": 0.005600002059294002,
          "target_vs_peer": {
            "score_pca_delta": -16.08,
            "adv_delta_pct": -79.4,
            "trades_delta_pct": -83.53,
            "volatility_delta_pct": 38.79,
            "spread_pct_delta_pct": -167.47,
            "spread_ticks_delta_pct": -5.89,
            "amihud_delta_pct": -199.85,
            "turnover_ratio_delta_pct": -90.26
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1313",
            "score_pca": 66.66666666666666,
            "rank_pca": 859,
            "adv": 5943600.0,
            "trades": 355.0,
            "volatility": 0.1827585722135597,
            "spread_pct": 0.006889685927421012,
            "spread_ticks": 1.0776450511945392,
            "amihud": 1.0854722564145824e-09,
            "turnover_ratio": 0.0005456156276695655,
            "is_target": true
          },
          {
            "ticker": "6655",
            "score_pca": 84.6930846930847,
            "rank_pca": 395,
            "adv": 30375972.0,
            "trades": 3090.0,
            "volatility": 0.3755750912967635,
            "spread_pct": 0.0022133674162536756,
            "spread_ticks": null,
            "amihud": 5.62903184939913e-10,
            "turnover_ratio": 0.005380384045853927,
            "is_target": false
          },
          {
            "ticker": "2128",
            "score_pca": 80.8080808080808,
            "rank_pca": 495,
            "adv": 27419238.72,
            "trades": 1222.0,
            "volatility": 0.4220799923059268,
            "spread_pct": 0.002938325256593513,
            "spread_ticks": 1.4576271186440677,
            "amihud": 4.3940653838417317e-10,
            "turnover_ratio": 0.005819620072734078,
            "is_target": false
          },
          {
            "ticker": "2233",
            "score_pca": 92.57964257964258,
            "rank_pca": 192,
            "adv": 117878094.00000001,
            "trades": 3476.0,
            "volatility": 0.5803178749667619,
            "spread_pct": 0.004249844309246301,
            "spread_ticks": 1.055583885772565,
            "amihud": 3.549514821990625e-10,
            "turnover_ratio": 0.02238286078980285,
            "is_target": false
          },
          {
            "ticker": "3323",
            "score_pca": 91.02564102564102,
            "rank_pca": 232,
            "adv": 154526358.38,
            "trades": 5376.0,
            "volatility": 0.3002961195058443,
            "spread_pct": 0.0021811982665054,
            "spread_ticks": 1.1015751383567476,
            "amihud": 1.2840055282010569e-11,
            "turnover_ratio": 0.008845763329999503,
            "is_target": false
          },
          {
            "ticker": "914",
            "score_pca": 92.07459207459208,
            "rank_pca": 205,
            "adv": 197212473.89999998,
            "trades": 5612.0,
            "volatility": 0.2802876320131934,
            "spread_pct": 0.0015635176321922876,
            "spread_ticks": null,
            "amihud": 0.0,
            "turnover_ratio": 0.0109013285319059,
            "is_target": false
          },
          {
            "ticker": "1783",
            "score_pca": 75.990675990676,
            "rank_pca": 619,
            "adv": 22884720.0,
            "trades": 730.0,
            "volatility": 0.1804523317725139,
            "spread_pct": 0.004413698996279144,
            "spread_ticks": 1.3983286908077994,
            "amihud": 0.0,
            "turnover_ratio": 0.004561590121185614,
            "is_target": false
          },
          {
            "ticker": "1757",
            "score_pca": 64.14141414141415,
            "rank_pca": 924,
            "adv": 6144840.0,
            "trades": 182.0,
            "volatility": 0.2968914992049147,
            "spread_pct": 0.008936736250800246,
            "spread_ticks": null,
            "amihud": 8.902525563887084e-10,
            "turnover_ratio": 0.00028166666666666666,
            "is_target": false
          },
          {
            "ticker": "1186",
            "score_pca": 73.50427350427351,
            "rank_pca": 683,
            "adv": 24949497.44,
            "trades": 600.0,
            "volatility": 0.0698436351877061,
            "spread_pct": 0.0020958878924682814,
            "spread_ticks": 1.1450892857142858,
            "amihud": 3.6906968378418573e-10,
            "turnover_ratio": 0.002192764422799061,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Construction Materials",
          "sector_count": 29,
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
              "mean": 67524991.66783933,
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
              "mean": 1.1276946212907057e-05,
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
              "mean": 0.5974183274788537,
              "median": 0.3232042928751561,
              "min": 0.0,
              "max": 4.835904529131727,
              "p5": 0.0,
              "p95": 2.1656145148595467,
              "count": 29
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 19664223.137931034,
              "median": 454245.0,
              "min": 0.0,
              "max": 197212473.89999998,
              "p5": 0.0,
              "p95": 139867052.62799993,
              "count": 29
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04518230734717383,
              "median": 0.03898881636583191,
              "min": 0.0015635176321922876,
              "max": 0.15994436717663416,
              "p5": 0.00219406592640471,
              "p95": 0.12956003274493486,
              "count": 29
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.013105426369343712,
              "median": 0.001606653435403081,
              "min": 0.0,
              "max": 0.20395605350008686,
              "p5": 0.0,
              "p95": 0.050712387540176776,
              "count": 29
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.94899303634957e-07,
              "median": 2.6320305936390554e-09,
              "min": 0.0,
              "max": 2.4733637747336364e-05,
              "p5": 0.0,
              "p95": 3.0682366266428743e-07,
              "count": 26
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 744.8275862068965,
              "median": 21.0,
              "min": 0.0,
              "max": 5612.0,
              "p5": 0.0,
              "p95": 4615.999999999996,
              "count": 29
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 72673899.305,
              "median": 28897605.36,
              "min": 6144840.0,
              "max": 197212473.89999998,
              "p5": 12003798.0,
              "p95": 182272333.46799996,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2536.0,
              "median": 2156.0,
              "min": 182.0,
              "max": 5612.0,
              "p5": 328.3,
              "p95": 5529.4,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.31321802203170307,
              "median": 0.2985938093553795,
              "min": 0.0698436351877061,
              "max": 0.5803178749667619,
              "p5": 0.10855667899238883,
              "p95": 0.5249346160354695,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0035740720025423563,
              "median": 0.0025758463364235944,
              "min": 0.0015635176321922876,
              "max": 0.008936736250800246,
              "p5": 0.0017498472232888855,
              "p95": 0.0073536732117178575,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.286779376222567e-10,
              "median": 3.620105829916241e-10,
              "min": 0.0,
              "max": 8.902525563887084e-10,
              "p5": 0.0,
              "p95": 7.756802763816298e-10,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00754574724761845,
              "median": 0.005600002059294002,
              "min": 0.00028166666666666666,
              "max": 0.02238286078980285,
              "p5": 0.0009505508813130049,
              "p95": 0.01836432449953891,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.231640823859093,
              "median": 1.1450892857142858,
              "min": 1.055583885772565,
              "max": 1.4576271186440677,
              "p5": 1.0647821362894014,
              "p95": 1.445767433076814,
              "count": 5
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.006451612903225712,
            "market": 0.005388454653585173,
            "sector": 0.0,
            "peers": -0.0009920634920634885,
            "vs_market": 0.001063158249640539,
            "vs_sector": 0.006451612903225712,
            "vs_peers": 0.0074436763952892004
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 75.56332556332556,
          "score_pca_percentile": 75.56332556332556,
          "rank_pca": 630,
          "total": 2574,
          "adv_notional_sgd": 15356021.92,
          "adv_volume_shares": 9766000.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0013985517637325397,
          "votes": 644.0,
          "trades": 644.0,
          "spread_pct": 0.0067497476222479974,
          "spread_ticks": 1.0612678192296026,
          "amihud": 7.863364707022686e-10,
          "volatility": 0.39586249395407813
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5765422124926693,
          "loadings": {
            "log_adv": 0.5181501785345138,
            "log_trades": 0.4722097727257014,
            "log_turnover": 0.47900559362064843,
            "neg_spread": 0.4588008942753266,
            "neg_amihud": 0.24954419274815193,
            "neg_vol": 0.07950722976532218
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
          "peer_median_adv": 55156504.75,
          "peer_median_score_pca": 89.14141414141415,
          "peer_median_trades": 2748.5,
          "peer_median_volatility": 0.45492501232849125,
          "peer_median_spread_pct": 0.002829602313302528,
          "peer_median_spread_ticks": 1.324181919023849,
          "peer_median_amihud": 3.315648492169554e-10,
          "peer_median_turnover_ratio": 0.010322708168928232,
          "target_vs_peer": {
            "score_pca_delta": -13.58,
            "adv_delta_pct": -72.2,
            "trades_delta_pct": -76.57,
            "volatility_delta_pct": 12.98,
            "spread_pct_delta_pct": -138.54,
            "spread_ticks_delta_pct": -19.85,
            "amihud_delta_pct": -137.16,
            "turnover_ratio_delta_pct": -86.45
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1313",
            "score_pca": 75.56332556332556,
            "rank_pca": 630,
            "adv": 15356021.92,
            "trades": 644.0,
            "volatility": 0.39586249395407813,
            "spread_pct": 0.0067497476222479974,
            "spread_ticks": 1.0612678192296026,
            "amihud": 7.863364707022686e-10,
            "turnover_ratio": 0.0013985517637325397,
            "is_target": true
          },
          {
            "ticker": "6655",
            "score_pca": 89.74358974358975,
            "rank_pca": 265,
            "adv": 53108594.0,
            "trades": 4224.0,
            "volatility": 0.5869606737387546,
            "spread_pct": 0.0026861529635121453,
            "spread_ticks": null,
            "amihud": 4.717347107844668e-10,
            "turnover_ratio": 0.011142060120769895,
            "is_target": false
          },
          {
            "ticker": "2128",
            "score_pca": 88.53923853923854,
            "rank_pca": 296,
            "adv": 57204415.5,
            "trades": 2767.0,
            "volatility": 0.40283346050843505,
            "spread_pct": 0.002973051663092911,
            "spread_ticks": 1.7139053860331763,
            "amihud": 3.5117166556159335e-10,
            "turnover_ratio": 0.010388815919043084,
            "is_target": false
          },
          {
            "ticker": "2233",
            "score_pca": 90.32634032634033,
            "rank_pca": 250,
            "adv": 92320200.0,
            "trades": 2730.0,
            "volatility": 0.5414955124973695,
            "spread_pct": 0.004866378517107444,
            "spread_ticks": 1.097870750840493,
            "amihud": 2.3629238729297753e-10,
            "turnover_ratio": 0.019490903224691547,
            "is_target": false
          },
          {
            "ticker": "3323",
            "score_pca": 93.7062937062937,
            "rank_pca": 163,
            "adv": 180087121.66,
            "trades": 4624.0,
            "volatility": 0.5070165641485475,
            "spread_pct": 0.0022428493536890875,
            "spread_ticks": 1.1814128943758573,
            "amihud": 6.871559014317992e-11,
            "turnover_ratio": 0.01025660041881338,
            "is_target": false
          },
          {
            "ticker": "914",
            "score_pca": 94.13364413364414,
            "rank_pca": 152,
            "adv": 197212473.89999998,
            "trades": 4268.0,
            "volatility": 0.3443458400099246,
            "spread_pct": 0.0017384403355142873,
            "spread_ticks": null,
            "amihud": 8.776996416669562e-11,
            "turnover_ratio": 0.010402037937840744,
            "is_target": false
          },
          {
            "ticker": "1783",
            "score_pca": 79.48717948717949,
            "rank_pca": 529,
            "adv": 22884720.0,
            "trades": 830.0,
            "volatility": 0.25208118563527354,
            "spread_pct": 0.004841549295774646,
            "spread_ticks": 1.5386289445048966,
            "amihud": 4.71885745664233e-10,
            "turnover_ratio": 0.00467811789975774,
            "is_target": false
          },
          {
            "ticker": "1757",
            "score_pca": 69.46386946386947,
            "rank_pca": 787,
            "adv": 17437500.0,
            "trades": 185.0,
            "volatility": 0.7342962212136815,
            "spread_pct": 0.018536222187518766,
            "spread_ticks": null,
            "amihud": 1.9849516806102317e-09,
            "turnover_ratio": 0.0008003333333333333,
            "is_target": false
          },
          {
            "ticker": "1186",
            "score_pca": 81.23543123543124,
            "rank_pca": 484,
            "adv": 31177860.0,
            "trades": 1067.0,
            "volatility": 0.19729204393317942,
            "spread_pct": 0.0024715183280518646,
            "spread_ticks": 1.324181919023849,
            "amihud": 3.1195803287231746e-10,
            "turnover_ratio": 0.0028225744306206823,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Construction Materials",
          "sector_count": 29,
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
              "mean": 65051119.21526279,
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
              "mean": 1.2527321305846246e-06,
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
              "mean": 0.8030346660030219,
              "median": 0.5649040828732604,
              "min": 0.08600176991009081,
              "max": 5.567560836067367,
              "p5": 0.18236457632483113,
              "p95": 1.7232343503088423,
              "count": 29
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 21324965.41310345,
              "median": 188700.0,
              "min": 0.0,
              "max": 197212473.89999998,
              "p5": 0.0,
              "p95": 144980352.9959998,
              "count": 29
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04986876431357417,
              "median": 0.03726006774557765,
              "min": 0.0017384403355142873,
              "max": 0.22894168466522674,
              "p5": 0.0024201707976183105,
              "p95": 0.13383345355454035,
              "count": 29
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0037102648871325562,
              "median": 0.0013985517637325397,
              "min": 0.0,
              "max": 0.019490903224691547,
              "p5": 0.0,
              "p95": 0.011760289813312183,
              "count": 29
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.154987960972446e-07,
              "median": 5.7186884315911695e-08,
              "min": 0.0,
              "max": 2.8480291638186583e-06,
              "p5": 7.63373397525862e-11,
              "p95": 1.7852913382781963e-06,
              "count": 29
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 700.1034482758621,
              "median": 17.0,
              "min": 0.0,
              "max": 4624.0,
              "p5": 0.0,
              "p95": 4250.4,
              "count": 29
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 81429110.6325,
              "median": 55156504.75,
              "min": 17437500.0,
              "max": 197212473.89999998,
              "p5": 19344027.0,
              "p95": 191218600.61599997,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2586.875,
              "median": 2748.5,
              "min": 185.0,
              "max": 4624.0,
              "p5": 410.75,
              "p95": 4499.4,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4457901877106457,
              "median": 0.45492501232849125,
              "min": 0.19729204393317942,
              "max": 0.7342962212136815,
              "p5": 0.21646824352891236,
              "p95": 0.682728779597457,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.005044520330532644,
              "median": 0.002829602313302528,
              "min": 0.0017384403355142873,
              "max": 0.018536222187518766,
              "p5": 0.0019149834918754673,
              "p95": 0.013751776902874796,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.98059972136962e-10,
              "median": 3.315648492169554e-10,
              "min": 6.871559014317992e-11,
              "max": 1.9849516806102317e-09,
              "p5": 7.538462105141041e-11,
              "p95": 1.4553786033791314e-09,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.008747680410608801,
              "median": 0.010322708168928232,
              "min": 0.0008003333333333333,
              "max": 0.019490903224691547,
              "p5": 0.0015081177173839055,
              "p95": 0.016568808138318965,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.3711999789556546,
              "median": 1.324181919023849,
              "min": 1.097870750840493,
              "max": 1.7139053860331763,
              "p5": 1.114579179547566,
              "p95": 1.6788500977275203,
              "count": 5
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": -0.09302325581395343,
            "market": 0.005817570896814672,
            "sector": -0.05199006212126012,
            "peers": -0.06001919600154004,
            "vs_market": -0.0988408267107681,
            "vs_sector": -0.041033193692693315,
            "vs_peers": -0.03300405981241339
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 77.93317793317793,
          "score_pca_percentile": 77.93317793317793,
          "rank_pca": 569,
          "total": 2574,
          "adv_notional_sgd": 21200000.0,
          "adv_volume_shares": 13250000.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0018974821697169927,
          "votes": 891.0,
          "trades": 891.0,
          "spread_pct": 0.006704078618800847,
          "spread_ticks": 1.108433734939759,
          "amihud": 7.196891157487359e-10,
          "volatility": 0.3945757233977186
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.6182698953679459,
          "loadings": {
            "log_adv": 0.49908895981340645,
            "log_trades": 0.4512156351514548,
            "log_turnover": 0.45332862908270105,
            "neg_spread": 0.46033139109407134,
            "neg_amihud": 0.33249734124833735,
            "neg_vol": 0.13909832233864095
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
          "peer_median_adv": 60583947.0,
          "peer_median_score_pca": 88.85003885003886,
          "peer_median_trades": 2808.0,
          "peer_median_volatility": 0.4828808181448467,
          "peer_median_spread_pct": 0.0027763670749332897,
          "peer_median_spread_ticks": 1.4320122934330524,
          "peer_median_amihud": 2.785003910508363e-10,
          "peer_median_turnover_ratio": 0.010272112752129822,
          "target_vs_peer": {
            "score_pca_delta": -10.92,
            "adv_delta_pct": -65.0,
            "trades_delta_pct": -68.27,
            "volatility_delta_pct": 18.29,
            "spread_pct_delta_pct": -141.47,
            "spread_ticks_delta_pct": -22.6,
            "amihud_delta_pct": -158.42,
            "turnover_ratio_delta_pct": -81.53
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1313",
            "score_pca": 77.93317793317793,
            "rank_pca": 569,
            "adv": 21200000.0,
            "trades": 891.0,
            "volatility": 0.3945757233977186,
            "spread_pct": 0.006704078618800847,
            "spread_ticks": 1.108433734939759,
            "amihud": 7.196891157487359e-10,
            "turnover_ratio": 0.0018974821697169927,
            "is_target": true
          },
          {
            "ticker": "6655",
            "score_pca": 89.16083916083916,
            "rank_pca": 280,
            "adv": 54819900.0,
            "trades": 3362.0,
            "volatility": 0.4940390446781643,
            "spread_pct": 0.0027104263511210603,
            "spread_ticks": null,
            "amihud": 3.2729324109167014e-10,
            "turnover_ratio": 0.010287625085446265,
            "is_target": false
          },
          {
            "ticker": "2128",
            "score_pca": 89.35508935508936,
            "rank_pca": 275,
            "adv": 66347994.0,
            "trades": 2943.0,
            "volatility": 0.4717225916115291,
            "spread_pct": 0.0028423077987455195,
            "spread_ticks": 1.6104198370781488,
            "amihud": 3.5117166556159335e-10,
            "turnover_ratio": 0.011414693052210186,
            "is_target": false
          },
          {
            "ticker": "2233",
            "score_pca": 88.53923853923854,
            "rank_pca": 296,
            "adv": 97083840.0,
            "trades": 2673.0,
            "volatility": 0.7858731657749872,
            "spread_pct": 0.004069118708314127,
            "spread_ticks": 1.1615299510036352,
            "amihud": 2.2543964124519638e-10,
            "turnover_ratio": 0.01646542559673693,
            "is_target": false
          },
          {
            "ticker": "3323",
            "score_pca": 92.96814296814297,
            "rank_pca": 182,
            "adv": 183351409.92,
            "trades": 4624.0,
            "volatility": 0.6297951751898794,
            "spread_pct": 0.0022900370338854044,
            "spread_ticks": 1.245453621863253,
            "amihud": 1.1977432486862425e-10,
            "turnover_ratio": 0.01025660041881338,
            "is_target": false
          },
          {
            "ticker": "914",
            "score_pca": 94.94949494949495,
            "rank_pca": 131,
            "adv": 223595799.23999998,
            "trades": 4541.0,
            "volatility": 0.3768103631000663,
            "spread_pct": 0.0016370413720267713,
            "spread_ticks": null,
            "amihud": 7.710958510378168e-11,
            "turnover_ratio": 0.011093232723990328,
            "is_target": false
          },
          {
            "ticker": "1783",
            "score_pca": 81.27428127428128,
            "rank_pca": 483,
            "adv": 27603200.0,
            "trades": 888.0,
            "volatility": 0.2645099130816046,
            "spread_pct": 0.005198684096615008,
            "spread_ticks": 1.6473804100227791,
            "amihud": 3.23521293410173e-10,
            "turnover_ratio": 0.005450980517638816,
            "is_target": false
          },
          {
            "ticker": "1757",
            "score_pca": 65.5011655011655,
            "rank_pca": 889,
            "adv": 14910700.0,
            "trades": 127.0,
            "volatility": 1.2590454154741193,
            "spread_pct": 0.024632690446420767,
            "spread_ticks": 15.975951903807616,
            "amihud": 2.670499061720168e-09,
            "turnover_ratio": 0.0012918333333333334,
            "is_target": false
          },
          {
            "ticker": "1186",
            "score_pca": 81.97358197358197,
            "rank_pca": 465,
            "adv": 31177860.0,
            "trades": 1035.0,
            "volatility": 0.165542269035218,
            "spread_pct": 0.002300195407443472,
            "spread_ticks": 1.2536047497879559,
            "amihud": 2.3347948869149954e-10,
            "turnover_ratio": 0.0028225744306206823,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Construction Materials",
          "sector_count": 29,
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
              "mean": 61996073.903859206,
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
              "mean": 7.20596480762886e-07,
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
              "mean": 0.7806097022050488,
              "median": 0.5856120215709989,
              "min": 0.09099954538308395,
              "max": 4.572256192508602,
              "p5": 0.2557601671201864,
              "p95": 1.243827106510306,
              "count": 29
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 23161212.0787931,
              "median": 294450.0,
              "min": 0.0,
              "max": 223595799.23999998,
              "p5": 0.0,
              "p95": 148844381.9519998,
              "count": 29
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.042074381476321615,
              "median": 0.035934038887521565,
              "min": 0.0016370413720267713,
              "max": 0.12824956672443671,
              "p5": 0.002458192760779667,
              "p95": 0.1031137214726396,
              "count": 29
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0034357695132384305,
              "median": 0.0018021902252261387,
              "min": 0.0,
              "max": 0.01646542559673693,
              "p5": 0.0,
              "p95": 0.011286108920922243,
              "count": 29
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.423760973159099e-07,
              "median": 5.104124132298925e-08,
              "min": 7.710958510378168e-11,
              "max": 3.684055408193323e-06,
              "p5": 1.620404514192531e-10,
              "p95": 1.8897146025629022e-06,
              "count": 29
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 692.6379310344828,
              "median": 21.0,
              "min": 0.0,
              "max": 4624.0,
              "p5": 0.0,
              "p95": 4069.3999999999974,
              "count": 29
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 87361337.895,
              "median": 60583947.0,
              "min": 14910700.0,
              "max": 223595799.23999998,
              "p5": 19353075.0,
              "p95": 209510262.97799996,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2524.125,
              "median": 2808.0,
              "min": 127.0,
              "max": 4624.0,
              "p5": 393.35,
              "p95": 4594.95,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.555917242243196,
              "median": 0.4828808181448467,
              "min": 0.165542269035218,
              "max": 1.2590454154741193,
              "p5": 0.2001809444514533,
              "p95": 1.0934351280794228,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.005710062651821516,
              "median": 0.0027763670749332897,
              "min": 0.0016370413720267713,
              "max": 0.024632690446420767,
              "p5": 0.0018655898536772929,
              "p95": 0.01783078822398874,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.410360377115883e-10,
              "median": 2.785003910508363e-10,
              "min": 7.710958510378168e-11,
              "max": 2.670499061720168e-09,
              "p5": 9.204224402147658e-11,
              "p95": 1.8587344730646658e-09,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00863537064484874,
              "median": 0.010272112752129822,
              "min": 0.0012918333333333334,
              "max": 0.01646542559673693,
              "p5": 0.0018275927173839056,
              "p95": 0.014697669206152567,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.815723412260565,
              "median": 1.4320122934330524,
              "min": 1.1615299510036352,
              "max": 15.975951903807616,
              "p5": 1.1825108687185397,
              "p95": 12.393809030361407,
              "count": 6
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": -0.03105590062111796,
            "market": 0.07151156981189555,
            "sector": -0.1158188619801428,
            "peers": -0.028499636765301983,
            "vs_market": -0.10256747043301351,
            "vs_sector": 0.08476296135902484,
            "vs_peers": -0.0025562638558159767
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 76.34032634032634,
          "score_pca_percentile": 76.34032634032634,
          "rank_pca": 610,
          "total": 2574,
          "adv_notional_sgd": 18989655.93,
          "adv_volume_shares": 11001000.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0015754114225703122,
          "votes": 760.0,
          "trades": 760.0,
          "spread_pct": 0.006704537805974864,
          "spread_ticks": 1.1036914190846183,
          "amihud": 6.511271529012795e-10,
          "volatility": 0.33427781892865754
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.6224803396219781,
          "loadings": {
            "log_adv": 0.49902979504185463,
            "log_trades": 0.45352858976720734,
            "log_turnover": 0.4522276880256036,
            "neg_spread": 0.46251268825128455,
            "neg_amihud": 0.3374776004918131,
            "neg_vol": 0.11385114176032164
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
          "peer_median_adv": 45814494.5,
          "peer_median_score_pca": 87.89821289821289,
          "peer_median_trades": 2232.0,
          "peer_median_volatility": 0.4492519313774788,
          "peer_median_spread_pct": 0.0026366235515871634,
          "peer_median_spread_ticks": 1.375371883989813,
          "peer_median_amihud": 2.6382297107341643e-10,
          "peer_median_turnover_ratio": 0.007768244723844127,
          "target_vs_peer": {
            "score_pca_delta": -11.56,
            "adv_delta_pct": -58.6,
            "trades_delta_pct": -65.95,
            "volatility_delta_pct": 25.59,
            "spread_pct_delta_pct": -154.28,
            "spread_ticks_delta_pct": -19.75,
            "amihud_delta_pct": -146.8,
            "turnover_ratio_delta_pct": -79.72
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1313",
            "score_pca": 76.34032634032634,
            "rank_pca": 610,
            "adv": 18989655.93,
            "trades": 760.0,
            "volatility": 0.33427781892865754,
            "spread_pct": 0.006704537805974864,
            "spread_ticks": 1.1036914190846183,
            "amihud": 6.511271529012795e-10,
            "turnover_ratio": 0.0015754114225703122,
            "is_target": true
          },
          {
            "ticker": "6655",
            "score_pca": 90.48174048174047,
            "rank_pca": 246,
            "adv": 56946134.0,
            "trades": 3348.0,
            "volatility": 0.486052831570476,
            "spread_pct": 0.002333968307318719,
            "spread_ticks": null,
            "amihud": 2.950803531272506e-10,
            "turnover_ratio": 0.010481111851849436,
            "is_target": false
          },
          {
            "ticker": "2128",
            "score_pca": 85.3146853146853,
            "rank_pca": 379,
            "adv": 34682855.0,
            "trades": 1796.0,
            "volatility": 0.4124510311844816,
            "spread_pct": 0.002939278795855607,
            "spread_ticks": 1.4849567513452024,
            "amihud": 4.1667494958917216e-10,
            "turnover_ratio": 0.007440884504525465,
            "is_target": false
          },
          {
            "ticker": "2233",
            "score_pca": 90.79254079254079,
            "rank_pca": 238,
            "adv": 94801394.32499999,
            "trades": 2668.0,
            "volatility": 0.6546267544217943,
            "spread_pct": 0.0039033188534986275,
            "spread_ticks": 1.1662479086887685,
            "amihud": 2.0796265525561676e-10,
            "turnover_ratio": 0.015027626336444696,
            "is_target": false
          },
          {
            "ticker": "3323",
            "score_pca": 92.42424242424242,
            "rank_pca": 196,
            "adv": 145130884.46499997,
            "trades": 3928.0,
            "volatility": 0.516577546057645,
            "spread_pct": 0.0023239740513317196,
            "spread_ticks": 1.2580175284888557,
            "amihud": 1.0870292202529277e-10,
            "turnover_ratio": 0.008095604943162788,
            "is_target": false
          },
          {
            "ticker": "914",
            "score_pca": 93.86169386169387,
            "rank_pca": 159,
            "adv": 173319236.85,
            "trades": 3964.5,
            "volatility": 0.33497543071617286,
            "spread_pct": 0.0015289078634181837,
            "spread_ticks": null,
            "amihud": 7.823341967978451e-11,
            "turnover_ratio": 0.008870856755728313,
            "is_target": false
          },
          {
            "ticker": "1783",
            "score_pca": 80.1864801864802,
            "rank_pca": 511,
            "adv": 25902010.0,
            "trades": 883.0,
            "volatility": 0.35821133155578133,
            "spread_pct": 0.004921038581521348,
            "spread_ticks": 1.55680488147443,
            "amihud": 5.261801067328036e-10,
            "turnover_ratio": 0.005138245155146596,
            "is_target": false
          },
          {
            "ticker": "1757",
            "score_pca": 63.71406371406372,
            "rank_pca": 935,
            "adv": 7123700.0,
            "trades": 94.5,
            "volatility": 1.4712495603730025,
            "spread_pct": 0.026271971291581934,
            "spread_ticks": 3.663392857142857,
            "amihud": 6.6462546800541895e-09,
            "turnover_ratio": 0.0012919375,
            "is_target": false
          },
          {
            "ticker": "1186",
            "score_pca": 79.7979797979798,
            "rank_pca": 521,
            "adv": 30270918.0,
            "trades": 783.5,
            "volatility": 0.16787660789661055,
            "spread_pct": 0.002317524150134196,
            "spread_ticks": 1.2657870166344236,
            "amihud": 2.3256558901958227e-10,
            "turnover_ratio": 0.002655594385386284,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Construction Materials",
          "sector_count": 29,
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
              "mean": 56751885.99842481,
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
              "mean": 6.369209259933948e-07,
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
              "mean": 0.8043144459891817,
              "median": 0.6075570915084201,
              "min": 0.1623323089257856,
              "max": 4.572256192508602,
              "p5": 0.27585893918193033,
              "p95": 1.5240342762153598,
              "count": 29
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 18771988.287758622,
              "median": 288708.0,
              "min": 0.0,
              "max": 173319236.85,
              "p5": 1036.0000000000005,
              "p95": 124999088.40899988,
              "count": 29
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0399843891707063,
              "median": 0.03456279036024294,
              "min": 0.0015289078634181837,
              "max": 0.127626866403912,
              "p5": 0.0023279717537265194,
              "p95": 0.09384978061536801,
              "count": 29
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003172221813635118,
              "median": 0.0012222020508424782,
              "min": 0.0,
              "max": 0.015027626336444696,
              "p5": 1.2559079432438576e-05,
              "p95": 0.009837009813400983,
              "count": 29
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.046014307377482e-07,
              "median": 7.717410472944128e-08,
              "min": 7.823341967978451e-11,
              "max": 2.8480291638186583e-06,
              "p5": 1.4840681531742238e-10,
              "p95": 1.7418641199704198e-06,
              "count": 29
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 604.2586206896551,
              "median": 23.5,
              "min": 0.0,
              "max": 3964.5,
              "p5": 0.40000000000000013,
              "p95": 3695.9999999999986,
              "count": 29
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 71022141.58,
              "median": 45814494.5,
              "min": 7123700.0,
              "max": 173319236.85,
              "p5": 13696108.5,
              "p95": 163453313.51524997,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2183.1875,
              "median": 2232.0,
              "min": 94.5,
              "max": 3964.5,
              "p5": 335.65000000000003,
              "p95": 3951.725,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5502526367219955,
              "median": 0.4492519313774788,
              "min": 0.16787660789661055,
              "max": 1.4712495603730025,
              "p5": 0.22636119588345738,
              "p95": 1.1854315782900793,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0058174977368325425,
              "median": 0.0026366235515871634,
              "min": 0.0015289078634181837,
              "max": 0.026271971291581934,
              "p5": 0.001804923563768788,
              "p95": 0.018799144843060715,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.0639568344354614e-09,
              "median": 2.6382297107341643e-10,
              "min": 7.823341967978451e-11,
              "max": 6.6462546800541895e-09,
              "p5": 8.88977455007124e-11,
              "p95": 4.504228579391702e-09,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.007375232679030447,
              "median": 0.007768244723844127,
              "min": 0.0012919375,
              "max": 0.015027626336444696,
              "p5": 0.0017692174098851994,
              "p95": 0.013436346266836352,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.7325344906290894,
              "median": 1.375371883989813,
              "min": 1.1662479086887685,
              "max": 3.663392857142857,
              "p5": 1.1891903136387902,
              "p95": 3.1367458632257503,
              "count": 6
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": -0.14754098360655765,
            "market": 0.11289080174108235,
            "sector": -0.19651308189189431,
            "peers": 0.044540416594211596,
            "vs_market": -0.26043178534764,
            "vs_sector": 0.04897209828533666,
            "vs_peers": -0.19208140020076925
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "1D score 66.7 vs peer median 82.8 (-16.1 pts).",
        "market_comparison": "Price action is stronger than peers on the day, but that does not offset the weaker trading flow. That matters because relative performance is not translating into easier access."
      },
      "30d": {
        "liquidity": "Liquidity is weak over the month, with a 1M score of 75.6 compared with a peer median of 89.1. That matters because access screens below peers even before the latest slowdown in trading.",
        "market_comparison": "Return -9.3% vs peers -6.0%."
      },
      "3m": {
        "liquidity": "Liquidity remains weak over 3M, with a score of 77.9 compared with a peer median of 88.9. That matters because the gap to peers looks structural rather than a short-lived dip.",
        "market_comparison": "The stock is slightly behind peers over 3M. That matters because relative performance has not been strong enough to improve accessibility."
      },
      "6m": {
        "liquidity": "Liquidity is weak over 6M, with a score of 76.3 compared with a peer median of 87.9. That matters because the stock has been consistently less accessible than peers for its size.",
        "market_comparison": "The stock fell 14.8% over 6M while peers rose 4.5%. That matters because sustained underperformance has come alongside weaker tradability rather than offsetting it."
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
          "median": 0.6451878678218267,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "64.5%",
          "display_range": null,
          "display_text": "64.5%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 64.5,
          "plain_english": "Market explains about 64.5% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.13003075271700665,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "13.0%",
          "display_range": null,
          "display_text": "13.0%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 13.0,
          "plain_english": "Sector explains about 13.0% of price moves in the current state."
        },
        "company_share": {
          "median": 0.2247813794611667,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "22.5%",
          "display_range": null,
          "display_text": "22.5%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 22.5,
          "plain_english": "Company-specific explains about 22.5% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 0.562466790661372,
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
          "plain_english": "Modest market link: a 1% market move has lined up with about a 0.56% stock move in the same direction in this state.",
          "value_num": 0.56
        },
        "beta_stock_lag": {
          "median": 0.48265655685112957,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.48",
          "display_range": null,
          "display_text": "0.48",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 0.48
        },
        "beta_sector": {
          "median": 0.031160790204940007,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.03",
          "display_range": null,
          "display_text": "0.03",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Weak",
          "plain_english": "Weak sector link: a 1% sector move has lined up with about a 0.03% stock move in the same direction in this state.",
          "value_num": 0.03
        },
        "beta_market_lag": {
          "median": -1.5028779322429862,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-1.50",
          "display_range": null,
          "display_text": "-1.50",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -1.5
        },
        "beta_sector_lag": {
          "median": 0.6835939317917299,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.68",
          "display_range": null,
          "display_text": "0.68",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 0.68
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
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5484699576494854,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "54.8%",
            "display_range": null,
            "display_text": "54.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
            "kind": "share_pct",
            "value_pct": 54.8,
            "plain_english": "Sector explains about 54.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2629413028362087,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.3%",
              "display_range": null,
              "display_text": "26.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 26.3,
              "plain_english": "Market explains about 26.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.5484699576494854,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "54.8%",
              "display_range": null,
              "display_text": "54.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 54.8,
              "plain_english": "Sector explains about 54.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.18858873951430596,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "18.9%",
              "display_range": null,
              "display_text": "18.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 18.9,
              "plain_english": "Company-specific explains about 18.9% of price moves in the current state."
            }
          },
          "summary": "Mar: Mostly sector-driven, though based on only 6 trading days."
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
            "median": 0.4931353946512204,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "49.3%",
            "display_range": null,
            "display_text": "49.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
            "kind": "share_pct",
            "value_pct": 49.3,
            "plain_english": "Company-specific explains about 49.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.242090901697651,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "24.2%",
              "display_range": null,
              "display_text": "24.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 24.2,
              "plain_english": "Market explains about 24.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2647737036511286,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.5%",
              "display_range": null,
              "display_text": "26.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 26.5,
              "plain_english": "Sector explains about 26.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4931353946512204,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "49.3%",
              "display_range": null,
              "display_text": "49.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 49.3,
              "plain_english": "Company-specific explains about 49.3% of price moves in the current state."
            }
          },
          "summary": "Apr: Mostly company-driven."
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
            "median": 0.4894289119118847,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "48.9%",
            "display_range": null,
            "display_text": "48.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 48.9,
            "plain_english": "Company-specific explains about 48.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3244748892073721,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "32.4%",
              "display_range": null,
              "display_text": "32.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 32.4,
              "plain_english": "Market explains about 32.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.18609619888074314,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "18.6%",
              "display_range": null,
              "display_text": "18.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 18.6,
              "plain_english": "Sector explains about 18.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4894289119118847,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.9%",
              "display_range": null,
              "display_text": "48.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 48.9,
              "plain_english": "Company-specific explains about 48.9% of price moves in the current state."
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
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4495281544407481,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "45.0%",
            "display_range": null,
            "display_text": "45.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 45.0,
            "plain_english": "Market explains about 45.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.4495281544407481,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.0%",
              "display_range": null,
              "display_text": "45.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 45.0,
              "plain_english": "Market explains about 45.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.16378533022732225,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "16.4%",
              "display_range": null,
              "display_text": "16.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 16.4,
              "plain_english": "Sector explains about 16.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.38668651533192966,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "38.7%",
              "display_range": null,
              "display_text": "38.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 38.7,
              "plain_english": "Company-specific explains about 38.7% of price moves in the current state."
            }
          },
          "summary": "Jun: More mixed, though market-driven still has the largest share."
        },
        {
          "month_key": "2025-07",
          "month_label": "July 2025",
          "month_short_label": "Jul",
          "period_label": "2025-07-02 to 2025-07-31",
          "n_obs": 22,
          "partial_month": true,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5363180283881444,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "53.6%",
            "display_range": null,
            "display_text": "53.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 53.6,
            "plain_english": "Sector explains about 53.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.18142850806379718,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "18.1%",
              "display_range": null,
              "display_text": "18.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 18.1,
              "plain_english": "Market explains about 18.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.5363180283881444,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "53.6%",
              "display_range": null,
              "display_text": "53.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 53.6,
              "plain_english": "Sector explains about 53.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.28225346354805836,
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
              "plain_english": "Company-specific explains about 28.2% of price moves in the current state."
            }
          },
          "summary": "Jul: Mostly sector-driven."
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
            "median": 0.41743532390609345,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "41.7%",
            "display_range": null,
            "display_text": "41.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 41.7,
            "plain_english": "Company-specific explains about 41.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.24897037255593668,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "24.9%",
              "display_range": null,
              "display_text": "24.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 24.9,
              "plain_english": "Market explains about 24.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.33359430353797,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "33.4%",
              "display_range": null,
              "display_text": "33.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 33.4,
              "plain_english": "Sector explains about 33.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.41743532390609345,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "41.7%",
              "display_range": null,
              "display_text": "41.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 41.7,
              "plain_english": "Company-specific explains about 41.7% of price moves in the current state."
            }
          },
          "summary": "Aug: More mixed, though company-driven still has the largest share."
        },
        {
          "month_key": "2025-09",
          "month_label": "September 2025",
          "month_short_label": "Sep",
          "period_label": "2025-09-01 to 2025-09-30",
          "n_obs": 22,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.40448377139121816,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "40.4%",
            "display_range": null,
            "display_text": "40.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 40.4,
            "plain_english": "Sector explains about 40.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2108431809426206,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "21.1%",
              "display_range": null,
              "display_text": "21.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 21.1,
              "plain_english": "Market explains about 21.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.40448377139121816,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "40.4%",
              "display_range": null,
              "display_text": "40.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 40.4,
              "plain_english": "Sector explains about 40.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3846730476661612,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "38.5%",
              "display_range": null,
              "display_text": "38.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 38.5,
              "plain_english": "Company-specific explains about 38.5% of price moves in the current state."
            }
          },
          "summary": "Sep: More mixed, though sector-driven still has the largest share."
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
            "median": 0.5213553821109191,
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
              "median": 0.022862399763262337,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "2.3%",
              "display_range": null,
              "display_text": "2.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 2.3,
              "plain_english": "Market explains about 2.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.45578221812581843,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.6%",
              "display_range": null,
              "display_text": "45.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 45.6,
              "plain_english": "Sector explains about 45.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5213553821109191,
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
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.3590445654962291,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "35.9%",
            "display_range": null,
            "display_text": "35.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 35.9,
            "plain_english": "Company-specific explains about 35.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.34828381874029063,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.8%",
              "display_range": null,
              "display_text": "34.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 34.8,
              "plain_english": "Market explains about 34.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2926716157634803,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "29.3%",
              "display_range": null,
              "display_text": "29.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 29.3,
              "plain_english": "Sector explains about 29.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3590445654962291,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "35.9%",
              "display_range": null,
              "display_text": "35.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 35.9,
              "plain_english": "Company-specific explains about 35.9% of price moves in the current state."
            }
          },
          "summary": "Nov: Much more balanced across company, sector, and market factors."
        },
        {
          "month_key": "2025-12",
          "month_label": "December 2025",
          "month_short_label": "Dec",
          "period_label": "2025-12-01 to 2025-12-31",
          "n_obs": 15,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5692802016805747,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "56.9%",
            "display_range": null,
            "display_text": "56.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
            "kind": "share_pct",
            "value_pct": 56.9,
            "plain_english": "Market explains about 56.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.5692802016805747,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.9%",
              "display_range": null,
              "display_text": "56.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 56.9,
              "plain_english": "Market explains about 56.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.08270910225923879,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "8.3%",
              "display_range": null,
              "display_text": "8.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 8.3,
              "plain_english": "Sector explains about 8.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.34801069606018653,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.8%",
              "display_range": null,
              "display_text": "34.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 34.8,
              "plain_english": "Company-specific explains about 34.8% of price moves in the current state."
            }
          },
          "summary": "Dec: Mostly market-driven."
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
            "median": 0.5182193880317452,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "51.8%",
            "display_range": null,
            "display_text": "51.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 51.8,
            "plain_english": "Company-specific explains about 51.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.06263465954814658,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "6.3%",
              "display_range": null,
              "display_text": "6.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 6.3,
              "plain_english": "Market explains about 6.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.4191459524201081,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "41.9%",
              "display_range": null,
              "display_text": "41.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 41.9,
              "plain_english": "Sector explains about 41.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5182193880317452,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "51.8%",
              "display_range": null,
              "display_text": "51.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 51.8,
              "plain_english": "Company-specific explains about 51.8% of price moves in the current state."
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
            "median": 0.43691131139589606,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "43.7%",
            "display_range": null,
            "display_text": "43.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
            "kind": "share_pct",
            "value_pct": 43.7,
            "plain_english": "Sector explains about 43.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.20177575710347562,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.2%",
              "display_range": null,
              "display_text": "20.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 20.2,
              "plain_english": "Market explains about 20.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.43691131139589606,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "43.7%",
              "display_range": null,
              "display_text": "43.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 43.7,
              "plain_english": "Sector explains about 43.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3613129315006283,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.1%",
              "display_range": null,
              "display_text": "36.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 36.1,
              "plain_english": "Company-specific explains about 36.1% of price moves in the current state."
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
            "median": 0.6507962647279772,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "65.1%",
            "display_range": null,
            "display_text": "65.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 65.1,
            "plain_english": "Company-specific explains about 65.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.21202626423204468,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "21.2%",
              "display_range": null,
              "display_text": "21.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 21.2,
              "plain_english": "Market explains about 21.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.13717747103997807,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "13.7%",
              "display_range": null,
              "display_text": "13.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 13.7,
              "plain_english": "Sector explains about 13.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6507962647279772,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "65.1%",
              "display_range": null,
              "display_text": "65.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 65.1,
              "plain_english": "Company-specific explains about 65.1% of price moves in the current state."
            }
          },
          "summary": "Mar: Still clearly company-driven."
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
            "median": 0.6451878678218267,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "64.5%",
            "display_range": null,
            "display_text": "64.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
            "kind": "share_pct",
            "value_pct": 64.5,
            "plain_english": "Market explains about 64.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.6451878678218267,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "64.5%",
              "display_range": null,
              "display_text": "64.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 64.5,
              "plain_english": "Market explains about 64.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.13003075271700665,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "13.0%",
              "display_range": null,
              "display_text": "13.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 13.0,
              "plain_english": "Sector explains about 13.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.2247813794611667,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "22.5%",
              "display_range": null,
              "display_text": "22.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 22.5,
              "plain_english": "Company-specific explains about 22.5% of price moves in the current state."
            }
          },
          "summary": "Apr: Still clearly market-driven, though based on only 5 trading days."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5060240963855421,
          "expected_duration_days": 9.692307692307692,
          "current_probability": 0.0,
          "n_days_effective": 126.0,
          "volatility": {
            "median": 0.014052307989615214,
            "low": 0.014052307989615214,
            "high": 0.014052307989615214
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": 0.0
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4939759036144578,
          "expected_duration_days": 9.461538461538462,
          "current_probability": 1.0,
          "n_days_effective": 123.0,
          "volatility": {
            "median": 0.027507170769961523,
            "low": 0.027507170769961523,
            "high": 0.027507170769961523
          },
          "volatility_label": "High Volatility",
          "current_probability_display": null
        }
      ],
      "transitions": {
        "mean": [
          [
            0.8968253968253969,
            0.10317460317460317
          ],
          [
            0.09836065573770492,
            0.9016393442622951
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            113.0,
            13.0
          ],
          [
            12.0,
            110.0
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
        "market_link_display": "0.56",
        "sector_link_display": "0.03",
        "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.56% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "Weak sector link. A 1% sector move has lined up with about a 0.03% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "0.48",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "High Volatility",
        "dominant_driver": "market",
        "dominant_driver_label": "Market",
        "driver_share_pct": 64.5,
        "driver_share_display": "64.5%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 251 trading days relative to the 252-day target.",
        "history_days": 251,
        "history_limited": true,
        "volatility_label": "High Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.9016393442622951,
        "effective_days": 123.0,
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
          "pct_time": 0.5060240963855421,
          "expected_duration_days": 9.692307692307692,
          "current_probability": 0.0,
          "n_days_effective": 126.0,
          "volatility": {
            "median": 0.014052307989615214,
            "low": 0.014052307989615214,
            "high": 0.014052307989615214
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4939759036144578,
          "expected_duration_days": 9.461538461538462,
          "current_probability": 1.0,
          "n_days_effective": 123.0,
          "volatility": {
            "median": 0.027507170769961523,
            "low": 0.027507170769961523,
            "high": 0.027507170769961523
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.8968253968253969,
          0.10317460317460317
        ],
        [
          0.09836065573770492,
          0.9016393442622951
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.8968253968253969,
            0.10317460317460317
          ],
          [
            0.09836065573770492,
            0.9016393442622951
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            113.0,
            13.0
          ],
          [
            12.0,
            110.0
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
        "text": "Liquidity score: 76.3 — Weak",
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
        "text": "Execution: bid-light",
        "bg": "bg-amber-500/20",
        "textColor": "text-amber-400"
      },
      "intraday": {
        "text": "Trading Activity",
        "bg": "bg-amber-500/20",
        "textColor": "text-amber-400"
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
    "liq_subtitle": "Liquidity is weak for size, and the near-term book looks thinner on the bid side.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Performance has lagged, with the stock down 9.3% over one month compared with peers down 6.0% and the market up 0.6%.",
    "perf_insight": "The share move is weaker than both peers and the market, and the stock’s six-month liquidity score sits 11.6 points below the peer median. That matters because weaker momentum is meeting a below-peer liquidity profile.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Trading is being driven mainly by broader market moves, with market factors accounting for 64.5% of the tape.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly market-driven, accounting for about 64.5% of price changes. Other influences are sector 13.0%, and company-specific 22.5%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 64.5%, sector 13.0%, and company-specific 22.5%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has shifted from sector-driven to market-driven over Feb to Apr."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 64.5%, sector 13.0%, and company-specific 22.5%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "That matters because market-led trading can dominate near-term price action, while bid depth is only 0.67x ask depth and leaves buy-side access thinner.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now is the market, accounting for 64.5% of recent price moves.",
      "The monthly pattern has shifted from more mixed in February and company-driven in March to clearly market-driven in April."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Current conditions look market-led and the displayed book is less supportive on the bid side.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on Apr 10, 2025 to Apr 10, 2026 (239 trading days • 239,220 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on top 10 bid and top 10 ask levels.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is lighter than the monthly baseline, so day-to-day access may feel weaker than the 1M score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "Near-term execution looks less supported than the headline spread suggests, with a 1 tick spread but top-10 bid depth at only 0.67x ask depth. That matters because displayed buy-side liquidity is lighter than the sell side.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 15.3% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Market-led trading is the clearest feature of the current tape, with broader factors driving most of the move.",
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
    "intraday_insight": "The tape is being driven mainly by the market, with market factors at 64.5%, while 1D average volume is 61.3% below the 1M average. That matters because day-to-day trading conditions can feel thinner when broader moves dominate lighter flow.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "The current trading picture is defined more by weak liquidity and market direction than by short activity.",
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
    "exec_subtitle": "Liquidity is weak for its size.",
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
        "value": "76.3/100",
        "sub": "Peer median 87.9 (-11.6 pts)",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "HK$19.0M",
        "sub": "Peer median HK$45.8M",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "0.67%",
        "sub": "1.10 ticks; peers 0.26%",
        "interp": {
          "text": "Wider",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity looks weak for the company’s size, with a six-month score of 76.3 compared with a peer median of 87.9. Near-term conditions are also less supportive, with 1D average volume down 61.3% from the 1M average and top-10 bid depth at only 0.67x ask depth. That matters because access already screens below peers and the current book looks thinner on the buy side.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "1.565",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "0.64%",
        "note": "1.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.67x",
        "note": "Bid depth / ask depth on displayed top-10 levels",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-0.32% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-0.45% with 100.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-0.79% with 100.0% fill.",
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
        "value": "76",
        "suffix": "/100",
        "bar_pct": 76,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Rank 610/2574",
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
        "value": "0.67",
        "suffix": "%",
        "bar_pct": 7,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "0.67% • 1.10 ticks vs peers 0.26%",
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
        "value": "19.0M",
        "value_prefix": "HK$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-red-400",
        "color_bar": "bg-red-500",
        "subtext": "Peer median HK$45.8M",
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
        "value": "64.5",
        "suffix": "market",
        "bar_pct": 65,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Sector 13.0% • Company 22.5%",
        "interpretation": {
          "text": "Market",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is weak for the company’s size, with a six-month score of 76.3 compared with a peer median of 87.9. That leaves the stock screening below peers before current trading conditions are considered.",
      "Recent trading activity is lighter, with 1D average volume down 61.3% from the 1M",
      "Displayed liquidity is skewed away from buyers, with top-10 bid depth at 0.67x ask depth despite a 1 tick spread. Market factors account for 64.5% of the tape, so broader moves are likely to shape trading conditions."
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
      "overall": "6M liquidity is weak: score 76.3 vs peer median 87.9 (-11.6 pts). 1D average volume down -61.3% from 1M. Recent flow does not show a clear deterioration from the monthly baseline.",
      "strengths": [
        "6M score 76.3 vs peer median 87.9 (-11.6 pts)."
      ],
      "concerns": [
        "1D average volume down -61.3% from 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: -11.6 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is -14.8%, better than sector, but worse than market and peers, which shows price performance is mixed across comparison groups.",
        "vs_market": "Worse than market: -14.8% vs market 11.3%.",
        "vs_sector": "Better than sector: -14.8% vs sector -19.7%.",
        "vs_peers": "Worse than peers: -14.8% vs peers 4.5%."
      },
      "adv": {
        "insight": "ADV is HK$19.0M, better than market and sector, but worse than peers, which shows trading size is uneven across comparison groups.",
        "vs_market": "Better than market: HK$19.0M vs market HK$221.2K.",
        "vs_sector": "Better than sector: HK$19.0M vs sector HK$288.7K.",
        "vs_peers": "Worse than peers: HK$19.0M vs peers HK$45.8M."
      },
      "spread": {
        "insight": "Spread is 0.67%, better than market and sector, but worse than peers, which shows execution cost is mixed across comparison groups.",
        "vs_market": "Better than market: 0.67% vs market 2.66%.",
        "vs_sector": "Better than sector: 0.67% vs sector 3.46%.",
        "vs_peers": "Worse than peers: 0.67% vs peers 0.26%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.16%, better than market and sector, but worse than peers, which shows turnover is mixed across comparison groups.",
        "vs_market": "Better than market: 0.16% vs market 0.09%.",
        "vs_sector": "Better than sector: 0.16% vs sector 0.12%.",
        "vs_peers": "Worse than peers: 0.16% vs peers 0.78%."
      },
      "volatility": {
        "insight": "Volatility is 33.43%, better than market, sector, and peers, which suggests day-to-day price swings are more contained than comparable names.",
        "vs_market": "Better than market: 33.43% vs market 59.82%.",
        "vs_sector": "Better than sector: 33.43% vs sector 60.76%.",
        "vs_peers": "Better than peers: 33.43% vs peers 44.93%."
      },
      "trades": {
        "insight": "Trades is 760, better than market and sector, but worse than peers, which shows trading frequency is mixed across comparison groups.",
        "vs_market": "Better than market: 760 vs market 21.",
        "vs_sector": "Better than sector: 760 vs secto.",
        "vs_peers": "Worse than peers: 760 vs peers 2232."
      },
      "amihud": {
        "insight": "Price impact is 6.51e-10, better than market and sector, but worse than peers, which shows price impact is mixed across comparison groups.",
        "vs_market": "Better than market: 6.51e-10 vs market 4.60e-08.",
        "vs_sector": "Better than sector: 6.51e-10 vs sector 7.72e-08.",
        "vs_peers": "Worse than peers: 6.51e-10 vs peers 2.64e-10."
      }
    },
    "performance": {
      "overall": "Returns have been weak relative to peers and the market, with the stock down 9.3% over one month compared with peers down 6.0% and the market up 0.6%. Liquidity broadly confirms that weaker tape because the six-month liquidity score is 76.3 against a peer median of 87.9, although the picture is mixed as one-day average volume is 61.3% below the one-month average and can make the move look sharper day to day.",
      "conclusion": "The move looks mainly broad-market led, but weaker liquidity and relative underperformance make the stock more exposed than peers."
    },
    "drivers": {
      "overall": "Current driver: Market at 64.5%. Broader market or sector moves still explain a meaningful part of the tape, so the stock is not trading on company news alone.",
      "beta": "The current read is directionally clear but the trading backdrop is thinner, with 1D average volume down 61.3% from the 1M average and top-10 bid depth at 0.67x ask depth. That combination means market-led moves can feel sharper in day-to-day trading even with a 1 tick spread.",
      "rolling_change": "The driver mix has changed meaningfully over the past three months, moving from more mixed in February to clearly company-driven in March and now clearly market-driven in April. In plain terms, the stock is no longer trading primarily on its own story and is currently taking more of its cue from broader market moves."
    },
    "regime": {
      "overall": "High volatility is the active backdrop, and that matters because price moves are less steady while liquidity already screens below peers on a six-month view.",
      "current": "The stock is currently in a high-volatility state, with recent price action sitting above its normal volatility threshold.",
      "transitions": "This looks more persistent than short-lived, with a typical spell of about 9.5 days, although the picture is still mixed rather than fully entrenched.",
      "trading_implications": "This state looks more persistent, with a typical run length of about 9.5 days."
    },
    "execution": {
      "overall": "Displayed liquidity looks bid-light rather than balanced because top-10 bid depth is only 0.67x of ask depth even with a 1 tick spread. That matters because the screen appears orderly on spread, but buy-side support is thinner than the offer side.",
      "concern": "The clearest stress point is the imbalance on the bid side, and the 61.3% drop in 1D average volume from the 1M average adds to that caution. That matters because lighter trading activity can make a thin bid more noticeable in day-to-day execution.",
      "peer_context": "This book supports the broader weak-for-size reading rather than offsetting it, with the 6M liquidity score at 76.3 compared with a peer median of 87.9 and current depth still skewed away from buyers. The result is a monthly liquidity profile that already sits below peers and looks less supported by the live book."
    },
    "trader_composition": {
      "overall": "By trade count and value, flow looks mainly institution-like.",
      "retail_heavy": "Institution-like trades account for 51.3% of trade count and 65.8% of trade value, while retail-like trades are just 0.5% of count and 0.2% of value. That points to a market where larger participants are doing most of the trading.",
      "institutional_gap": "The value share is more institution-like than the count share, with 65.8% of trade value against 51.3% of trade count. That gap suggests the larger share of money traded is coming from institution-like flow.",
      "peer_comparison": "The mix stands out as institution-like relative to peers, with both trade count and trade value pointing in the same direction. That matters because the flow profile looks more stable than a market driven mainly by retail activity."
    },
    "price_moving": {
      "overall": "Price-moving activity is present, but the cleaner signal is that the tape is being driven mainly by institution-like flow and broader market moves. The read is mixed but still constructive: institution-like trades dominate both count and value, while market factors explain 64.5% of trading. That means price moves are not coming from one-off retail bursts alone. Recent price performance is weaker than both peers and the market, with a 1M return of -9.3% compared with peers at -6.0% and the market at +0.6%.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short-selling data is unavailable for this report.",
      "level": "N/A",
      "correlation": "N/A",
      "trend": "There is no clear sign that short activity is becoming more important. Recent average volume is down 61.3% from the one-month average, so the current picture is better explained by thinner trading and market-led moves than by a rising short overhang.",
      "peaks": "N/A"
    },
    "intraday": {
      "overall": "Liquidity appears through the continuous session rather than at the open or close, which makes the day feel usable but still dependent on the main session. The session split is 0.2% open, 96.8% continuous, and 2.8% close.",
      "hhi_interpretation": "Trading is fairly well distributed through the day, with a concentration score of 0.154. That supports a steadier intraday flow picture rather than activity being confined to a few short windows.",
      "best_times": "The continuous session is the clear source of liquidity, accounting for 96.8% of activity. That matters because access is most reliable during the middle of the day.",
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
        "1313",
        "6655",
        "2128",
        "2233",
        "3323",
        "914",
        "1783",
        "1757",
        "1186"
      ],
      "scores": [
        76.34032634032634,
        90.48174048174047,
        85.3146853146853,
        90.79254079254079,
        92.42424242424242,
        93.86169386169387,
        80.1864801864802,
        63.71406371406372,
        79.7979797979798
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
        18989655.93,
        56946134.0,
        34682855.0,
        94801394.32499999,
        145130884.46499997,
        173319236.85,
        25902010.0,
        7123700.0,
        30270918.0
      ],
      "total": 2574
    },
    "market_comparison": {
      "sector_name": "Construction Materials",
      "sector_count": 29,
      "market_count": 2574,
      "company": {
        "volatility": 0.33427781892865754,
        "adv": 18989655.93,
        "spread_pct": 0.006704537805974864,
        "turnover_ratio": 0.0015754114225703122,
        "amihud": 6.511271529012795e-10,
        "trades": 760.0
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
          "mean": 56751885.99842481,
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
          "mean": 6.369209259933948e-07,
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
          "mean": 0.8043144459891817,
          "median": 0.6075570915084201,
          "min": 0.1623323089257856,
          "max": 4.572256192508602,
          "p5": 0.27585893918193033,
          "p95": 1.5240342762153598,
          "count": 29
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 18771988.287758622,
          "median": 288708.0,
          "min": 0.0,
          "max": 173319236.85,
          "p5": 1036.0000000000005,
          "p95": 124999088.40899988,
          "count": 29
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.0399843891707063,
          "median": 0.03456279036024294,
          "min": 0.0015289078634181837,
          "max": 0.127626866403912,
          "p5": 0.0023279717537265194,
          "p95": 0.09384978061536801,
          "count": 29
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.003172221813635118,
          "median": 0.0012222020508424782,
          "min": 0.0,
          "max": 0.015027626336444696,
          "p5": 1.2559079432438576e-05,
          "p95": 0.009837009813400983,
          "count": 29
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 4.046014307377482e-07,
          "median": 7.717410472944128e-08,
          "min": 7.823341967978451e-11,
          "max": 2.8480291638186583e-06,
          "p5": 1.4840681531742238e-10,
          "p95": 1.7418641199704198e-06,
          "count": 29
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 604.2586206896551,
          "median": 23.5,
          "min": 0.0,
          "max": 3964.5,
          "p5": 0.40000000000000013,
          "p95": 3695.9999999999986,
          "count": 29
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 71022141.58,
          "median": 45814494.5,
          "min": 7123700.0,
          "max": 173319236.85,
          "p5": 13696108.5,
          "p95": 163453313.51524997,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 2183.1875,
          "median": 2232.0,
          "min": 94.5,
          "max": 3964.5,
          "p5": 335.65000000000003,
          "p95": 3951.725,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.5502526367219955,
          "median": 0.4492519313774788,
          "min": 0.16787660789661055,
          "max": 1.4712495603730025,
          "p5": 0.22636119588345738,
          "p95": 1.1854315782900793,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.0058174977368325425,
          "median": 0.0026366235515871634,
          "min": 0.0015289078634181837,
          "max": 0.026271971291581934,
          "p5": 0.001804923563768788,
          "p95": 0.018799144843060715,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.0639568344354614e-09,
          "median": 2.6382297107341643e-10,
          "min": 7.823341967978451e-11,
          "max": 6.6462546800541895e-09,
          "p5": 8.88977455007124e-11,
          "p95": 4.504228579391702e-09,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.007375232679030447,
          "median": 0.007768244723844127,
          "min": 0.0012919375,
          "max": 0.015027626336444696,
          "p5": 0.0017692174098851994,
          "p95": 0.013436346266836352,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 1.7325344906290894,
          "median": 1.375371883989813,
          "min": 1.1662479086887685,
          "max": 3.663392857142857,
          "p5": 1.1891903136387902,
          "p95": 3.1367458632257503,
          "count": 6
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": -0.09302325581395343,
        "market": 0.005817570896814672,
        "sector": -0.05199006212126012,
        "peers": -0.06001919600154004
      },
      {
        "horizon": "3M",
        "stock": -0.03105590062111796,
        "market": 0.07151156981189555,
        "sector": -0.1158188619801428,
        "peers": -0.028499636765301983
      },
      {
        "horizon": "6M",
        "stock": -0.14754098360655765,
        "market": 0.11289080174108235,
        "sector": -0.19651308189189431,
        "peers": 0.044540416594211596
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
      "share_market": 0.6451878678218267,
      "share_sector": 0.13003075271700665,
      "share_idio": 0.2247813794611667,
      "beta_market": 0.562466790661372,
      "beta_sector": 0.031160790204940007,
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
            "median": 0.6451878678218267,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "64.5%",
            "display_range": null,
            "display_text": "64.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 64.5,
            "plain_english": "Market explains about 64.5% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.13003075271700665,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "13.0%",
            "display_range": null,
            "display_text": "13.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 13.0,
            "plain_english": "Sector explains about 13.0% of price moves in the current state."
          },
          "company_share": {
            "median": 0.2247813794611667,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "22.5%",
            "display_range": null,
            "display_text": "22.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 22.5,
            "plain_english": "Company-specific explains about 22.5% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 0.562466790661372,
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
            "plain_english": "Modest market link: a 1% market move has lined up with about a 0.56% stock move in the same direction in this state.",
            "value_num": 0.56
          },
          "beta_stock_lag": {
            "median": 0.48265655685112957,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.48",
            "display_range": null,
            "display_text": "0.48",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 0.48
          },
          "beta_sector": {
            "median": 0.031160790204940007,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.03",
            "display_range": null,
            "display_text": "0.03",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Weak",
            "plain_english": "Weak sector link: a 1% sector move has lined up with about a 0.03% stock move in the same direction in this state.",
            "value_num": 0.03
          },
          "beta_market_lag": {
            "median": -1.5028779322429862,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-1.50",
            "display_range": null,
            "display_text": "-1.50",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -1.5
          },
          "beta_sector_lag": {
            "median": 0.6835939317917299,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.68",
            "display_range": null,
            "display_text": "0.68",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 0.68
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
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5484699576494854,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "54.8%",
              "display_range": null,
              "display_text": "54.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 54.8,
              "plain_english": "Sector explains about 54.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2629413028362087,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.3%",
                "display_range": null,
                "display_text": "26.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 26.3,
                "plain_english": "Market explains about 26.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.5484699576494854,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "54.8%",
                "display_range": null,
                "display_text": "54.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 54.8,
                "plain_english": "Sector explains about 54.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.18858873951430596,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "18.9%",
                "display_range": null,
                "display_text": "18.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 18.9,
                "plain_english": "Company-specific explains about 18.9% of price moves in the current state."
              }
            },
            "summary": "Mar: Mostly sector-driven, though based on only 6 trading days."
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
              "median": 0.4931353946512204,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "49.3%",
              "display_range": null,
              "display_text": "49.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 49.3,
              "plain_english": "Company-specific explains about 49.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.242090901697651,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "24.2%",
                "display_range": null,
                "display_text": "24.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 24.2,
                "plain_english": "Market explains about 24.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2647737036511286,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.5%",
                "display_range": null,
                "display_text": "26.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 26.5,
                "plain_english": "Sector explains about 26.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4931353946512204,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "49.3%",
                "display_range": null,
                "display_text": "49.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 49.3,
                "plain_english": "Company-specific explains about 49.3% of price moves in the current state."
              }
            },
            "summary": "Apr: Mostly company-driven."
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
              "median": 0.4894289119118847,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.9%",
              "display_range": null,
              "display_text": "48.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 48.9,
              "plain_english": "Company-specific explains about 48.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3244748892073721,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "32.4%",
                "display_range": null,
                "display_text": "32.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 32.4,
                "plain_english": "Market explains about 32.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.18609619888074314,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "18.6%",
                "display_range": null,
                "display_text": "18.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 18.6,
                "plain_english": "Sector explains about 18.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4894289119118847,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "48.9%",
                "display_range": null,
                "display_text": "48.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 48.9,
                "plain_english": "Company-specific explains about 48.9% of price moves in the current state."
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
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4495281544407481,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.0%",
              "display_range": null,
              "display_text": "45.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 45.0,
              "plain_english": "Market explains about 45.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.4495281544407481,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "45.0%",
                "display_range": null,
                "display_text": "45.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 45.0,
                "plain_english": "Market explains about 45.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.16378533022732225,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "16.4%",
                "display_range": null,
                "display_text": "16.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 16.4,
                "plain_english": "Sector explains about 16.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.38668651533192966,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "38.7%",
                "display_range": null,
                "display_text": "38.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 38.7,
                "plain_english": "Company-specific explains about 38.7% of price moves in the current state."
              }
            },
            "summary": "Jun: More mixed, though market-driven still has the largest share."
          },
          {
            "month_key": "2025-07",
            "month_label": "July 2025",
            "month_short_label": "Jul",
            "period_label": "2025-07-02 to 2025-07-31",
            "n_obs": 22,
            "partial_month": true,
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5363180283881444,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "53.6%",
              "display_range": null,
              "display_text": "53.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 53.6,
              "plain_english": "Sector explains about 53.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.18142850806379718,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "18.1%",
                "display_range": null,
                "display_text": "18.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 18.1,
                "plain_english": "Market explains about 18.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.5363180283881444,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "53.6%",
                "display_range": null,
                "display_text": "53.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 53.6,
                "plain_english": "Sector explains about 53.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.28225346354805836,
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
                "plain_english": "Company-specific explains about 28.2% of price moves in the current state."
              }
            },
            "summary": "Jul: Mostly sector-driven."
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
              "median": 0.41743532390609345,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "41.7%",
              "display_range": null,
              "display_text": "41.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 41.7,
              "plain_english": "Company-specific explains about 41.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.24897037255593668,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "24.9%",
                "display_range": null,
                "display_text": "24.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 24.9,
                "plain_english": "Market explains about 24.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.33359430353797,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "33.4%",
                "display_range": null,
                "display_text": "33.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 33.4,
                "plain_english": "Sector explains about 33.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.41743532390609345,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "41.7%",
                "display_range": null,
                "display_text": "41.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 41.7,
                "plain_english": "Company-specific explains about 41.7% of price moves in the current state."
              }
            },
            "summary": "Aug: More mixed, though company-driven still has the largest share."
          },
          {
            "month_key": "2025-09",
            "month_label": "September 2025",
            "month_short_label": "Sep",
            "period_label": "2025-09-01 to 2025-09-30",
            "n_obs": 22,
            "partial_month": false,
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.40448377139121816,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "40.4%",
              "display_range": null,
              "display_text": "40.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 40.4,
              "plain_english": "Sector explains about 40.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2108431809426206,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "21.1%",
                "display_range": null,
                "display_text": "21.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 21.1,
                "plain_english": "Market explains about 21.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.40448377139121816,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "40.4%",
                "display_range": null,
                "display_text": "40.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 40.4,
                "plain_english": "Sector explains about 40.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3846730476661612,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "38.5%",
                "display_range": null,
                "display_text": "38.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 38.5,
                "plain_english": "Company-specific explains about 38.5% of price moves in the current state."
              }
            },
            "summary": "Sep: More mixed, though sector-driven still has the largest share."
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
              "median": 0.5213553821109191,
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
                "median": 0.022862399763262337,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "2.3%",
                "display_range": null,
                "display_text": "2.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 2.3,
                "plain_english": "Market explains about 2.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.45578221812581843,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "45.6%",
                "display_range": null,
                "display_text": "45.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 45.6,
                "plain_english": "Sector explains about 45.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5213553821109191,
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
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.3590445654962291,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "35.9%",
              "display_range": null,
              "display_text": "35.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 35.9,
              "plain_english": "Company-specific explains about 35.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.34828381874029063,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "34.8%",
                "display_range": null,
                "display_text": "34.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 34.8,
                "plain_english": "Market explains about 34.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2926716157634803,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "29.3%",
                "display_range": null,
                "display_text": "29.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 29.3,
                "plain_english": "Sector explains about 29.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3590445654962291,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "35.9%",
                "display_range": null,
                "display_text": "35.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 35.9,
                "plain_english": "Company-specific explains about 35.9% of price moves in the current state."
              }
            },
            "summary": "Nov: Much more balanced across company, sector, and market factors."
          },
          {
            "month_key": "2025-12",
            "month_label": "December 2025",
            "month_short_label": "Dec",
            "period_label": "2025-12-01 to 2025-12-31",
            "n_obs": 15,
            "partial_month": false,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5692802016805747,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.9%",
              "display_range": null,
              "display_text": "56.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 56.9,
              "plain_english": "Market explains about 56.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.5692802016805747,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "56.9%",
                "display_range": null,
                "display_text": "56.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 56.9,
                "plain_english": "Market explains about 56.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.08270910225923879,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "8.3%",
                "display_range": null,
                "display_text": "8.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 8.3,
                "plain_english": "Sector explains about 8.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.34801069606018653,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "34.8%",
                "display_range": null,
                "display_text": "34.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 34.8,
                "plain_english": "Company-specific explains about 34.8% of price moves in the current state."
              }
            },
            "summary": "Dec: Mostly market-driven."
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
              "median": 0.5182193880317452,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "51.8%",
              "display_range": null,
              "display_text": "51.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 51.8,
              "plain_english": "Company-specific explains about 51.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.06263465954814658,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "6.3%",
                "display_range": null,
                "display_text": "6.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 6.3,
                "plain_english": "Market explains about 6.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.4191459524201081,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "41.9%",
                "display_range": null,
                "display_text": "41.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 41.9,
                "plain_english": "Sector explains about 41.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5182193880317452,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "51.8%",
                "display_range": null,
                "display_text": "51.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 51.8,
                "plain_english": "Company-specific explains about 51.8% of price moves in the current state."
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
              "median": 0.43691131139589606,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "43.7%",
              "display_range": null,
              "display_text": "43.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 43.7,
              "plain_english": "Sector explains about 43.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.20177575710347562,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.2%",
                "display_range": null,
                "display_text": "20.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 20.2,
                "plain_english": "Market explains about 20.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.43691131139589606,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "43.7%",
                "display_range": null,
                "display_text": "43.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 43.7,
                "plain_english": "Sector explains about 43.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3613129315006283,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "36.1%",
                "display_range": null,
                "display_text": "36.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 36.1,
                "plain_english": "Company-specific explains about 36.1% of price moves in the current state."
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
              "median": 0.6507962647279772,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "65.1%",
              "display_range": null,
              "display_text": "65.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 65.1,
              "plain_english": "Company-specific explains about 65.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.21202626423204468,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "21.2%",
                "display_range": null,
                "display_text": "21.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 21.2,
                "plain_english": "Market explains about 21.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.13717747103997807,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "13.7%",
                "display_range": null,
                "display_text": "13.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 13.7,
                "plain_english": "Sector explains about 13.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6507962647279772,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "65.1%",
                "display_range": null,
                "display_text": "65.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 65.1,
                "plain_english": "Company-specific explains about 65.1% of price moves in the current state."
              }
            },
            "summary": "Mar: Still clearly company-driven."
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
              "median": 0.6451878678218267,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "64.5%",
              "display_range": null,
              "display_text": "64.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 64.5,
              "plain_english": "Market explains about 64.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.6451878678218267,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "64.5%",
                "display_range": null,
                "display_text": "64.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 64.5,
                "plain_english": "Market explains about 64.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.13003075271700665,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "13.0%",
                "display_range": null,
                "display_text": "13.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 13.0,
                "plain_english": "Sector explains about 13.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.2247813794611667,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "22.5%",
                "display_range": null,
                "display_text": "22.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 22.5,
                "plain_english": "Company-specific explains about 22.5% of price moves in the current state."
              }
            },
            "summary": "Apr: Still clearly market-driven, though based on only 5 trading days."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5060240963855421,
            "expected_duration_days": 9.692307692307692,
            "current_probability": 0.0,
            "n_days_effective": 126.0,
            "volatility": {
              "median": 0.014052307989615214,
              "low": 0.014052307989615214,
              "high": 0.014052307989615214
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": 0.0
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4939759036144578,
            "expected_duration_days": 9.461538461538462,
            "current_probability": 1.0,
            "n_days_effective": 123.0,
            "volatility": {
              "median": 0.027507170769961523,
              "low": 0.027507170769961523,
              "high": 0.027507170769961523
            },
            "volatility_label": "High Volatility",
            "current_probability_display": null
          }
        ],
        "transitions": {
          "mean": [
            [
              0.8968253968253969,
              0.10317460317460317
            ],
            [
              0.09836065573770492,
              0.9016393442622951
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              113.0,
              13.0
            ],
            [
              12.0,
              110.0
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
          "market_link_display": "0.56",
          "sector_link_display": "0.03",
          "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.56% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "Weak sector link. A 1% sector move has lined up with about a 0.03% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "0.48",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "High Volatility",
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "driver_share_pct": 64.5,
          "driver_share_display": "64.5%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 251 trading days relative to the 252-day target.",
          "history_days": 251,
          "history_limited": true,
          "volatility_label": "High Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.9016393442622951,
          "effective_days": 123.0,
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
          "period_label": "2025-03-24 to 2025-03-31",
          "n_obs": 6,
          "partial_month": true,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "Mar: Mostly sector-driven, though based on only 6 trading days.",
          "share_market": 0.2629413028362087,
          "share_sector": 0.5484699576494854,
          "share_company": 0.18858873951430596,
          "share_market_display": "26.3%",
          "share_sector_display": "54.8%",
          "share_company_display": "18.9%",
          "dominant_share_display": "54.8%"
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
          "summary": "Apr: Mostly company-driven.",
          "share_market": 0.242090901697651,
          "share_sector": 0.2647737036511286,
          "share_company": 0.4931353946512204,
          "share_market_display": "24.2%",
          "share_sector_display": "26.5%",
          "share_company_display": "49.3%",
          "dominant_share_display": "49.3%"
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
          "share_market": 0.3244748892073721,
          "share_sector": 0.18609619888074314,
          "share_company": 0.4894289119118847,
          "share_market_display": "32.4%",
          "share_sector_display": "18.6%",
          "share_company_display": "48.9%",
          "dominant_share_display": "48.9%"
        },
        {
          "month_key": "2025-06",
          "month_label": "June 2025",
          "month_short_label": "Jun",
          "period_label": "2025-06-02 to 2025-06-30",
          "n_obs": 21,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Jun: More mixed, though market-driven still has the largest share.",
          "share_market": 0.4495281544407481,
          "share_sector": 0.16378533022732225,
          "share_company": 0.38668651533192966,
          "share_market_display": "45.0%",
          "share_sector_display": "16.4%",
          "share_company_display": "38.7%",
          "dominant_share_display": "45.0%"
        },
        {
          "month_key": "2025-07",
          "month_label": "July 2025",
          "month_short_label": "Jul",
          "period_label": "2025-07-02 to 2025-07-31",
          "n_obs": 22,
          "partial_month": true,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "Jul: Mostly sector-driven.",
          "share_market": 0.18142850806379718,
          "share_sector": 0.5363180283881444,
          "share_company": 0.28225346354805836,
          "share_market_display": "18.1%",
          "share_sector_display": "53.6%",
          "share_company_display": "28.2%",
          "dominant_share_display": "53.6%"
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
          "summary": "Aug: More mixed, though company-driven still has the largest share.",
          "share_market": 0.24897037255593668,
          "share_sector": 0.33359430353797,
          "share_company": 0.41743532390609345,
          "share_market_display": "24.9%",
          "share_sector_display": "33.4%",
          "share_company_display": "41.7%",
          "dominant_share_display": "41.7%"
        },
        {
          "month_key": "2025-09",
          "month_label": "September 2025",
          "month_short_label": "Sep",
          "period_label": "2025-09-01 to 2025-09-30",
          "n_obs": 22,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "Sep: More mixed, though sector-driven still has the largest share.",
          "share_market": 0.2108431809426206,
          "share_sector": 0.40448377139121816,
          "share_company": 0.3846730476661612,
          "share_market_display": "21.1%",
          "share_sector_display": "40.4%",
          "share_company_display": "38.5%",
          "dominant_share_display": "40.4%"
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
          "share_market": 0.022862399763262337,
          "share_sector": 0.45578221812581843,
          "share_company": 0.5213553821109191,
          "share_market_display": "2.3%",
          "share_sector_display": "45.6%",
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
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Nov: Much more balanced across company, sector, and market factors.",
          "share_market": 0.34828381874029063,
          "share_sector": 0.2926716157634803,
          "share_company": 0.3590445654962291,
          "share_market_display": "34.8%",
          "share_sector_display": "29.3%",
          "share_company_display": "35.9%",
          "dominant_share_display": "35.9%"
        },
        {
          "month_key": "2025-12",
          "month_label": "December 2025",
          "month_short_label": "Dec",
          "period_label": "2025-12-01 to 2025-12-31",
          "n_obs": 15,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Dec: Mostly market-driven.",
          "share_market": 0.5692802016805747,
          "share_sector": 0.08270910225923879,
          "share_company": 0.34801069606018653,
          "share_market_display": "56.9%",
          "share_sector_display": "8.3%",
          "share_company_display": "34.8%",
          "dominant_share_display": "56.9%"
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
          "share_market": 0.06263465954814658,
          "share_sector": 0.4191459524201081,
          "share_company": 0.5182193880317452,
          "share_market_display": "6.3%",
          "share_sector_display": "41.9%",
          "share_company_display": "51.8%",
          "dominant_share_display": "51.8%"
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
          "share_market": 0.20177575710347562,
          "share_sector": 0.43691131139589606,
          "share_company": 0.3613129315006283,
          "share_market_display": "20.2%",
          "share_sector_display": "43.7%",
          "share_company_display": "36.1%",
          "dominant_share_display": "43.7%"
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
          "share_market": 0.21202626423204468,
          "share_sector": 0.13717747103997807,
          "share_company": 0.6507962647279772,
          "share_market_display": "21.2%",
          "share_sector_display": "13.7%",
          "share_company_display": "65.1%",
          "dominant_share_display": "65.1%"
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
          "summary": "Apr: Still clearly market-driven, though based on only 5 trading days.",
          "share_market": 0.6451878678218267,
          "share_sector": 0.13003075271700665,
          "share_company": 0.2247813794611667,
          "share_market_display": "64.5%",
          "share_sector_display": "13.0%",
          "share_company_display": "22.5%",
          "dominant_share_display": "64.5%"
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
          0.5060240963855421,
          0.4939759036144578
        ],
        "current_regime": 1,
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5060240963855421,
            "expected_duration_days": 9.692307692307692,
            "current_probability": 0.0,
            "n_days_effective": 126.0,
            "volatility": {
              "median": 0.014052307989615214,
              "low": 0.014052307989615214,
              "high": 0.014052307989615214
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4939759036144578,
            "expected_duration_days": 9.461538461538462,
            "current_probability": 1.0,
            "n_days_effective": 123.0,
            "volatility": {
              "median": 0.027507170769961523,
              "low": 0.027507170769961523,
              "high": 0.027507170769961523
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.8968253968253969,
            0.10317460317460317
          ],
          [
            0.09836065573770492,
            0.9016393442622951
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 1.56,
          "quantity": 508000.0,
          "value": 792480.0
        },
        {
          "level": 2,
          "price": 1.55,
          "quantity": 1022000.0,
          "value": 1584100.0
        },
        {
          "level": 3,
          "price": 1.54,
          "quantity": 826000.0,
          "value": 1272040.0
        },
        {
          "level": 4,
          "price": 1.53,
          "quantity": 572000.0,
          "value": 875160.0
        },
        {
          "level": 5,
          "price": 1.52,
          "quantity": 306000.0,
          "value": 465120.0
        },
        {
          "level": 6,
          "price": 1.51,
          "quantity": 128000.0,
          "value": 193280.0
        },
        {
          "level": 7,
          "price": 1.5,
          "quantity": 168000.0,
          "value": 252000.0
        },
        {
          "level": 8,
          "price": 1.49,
          "quantity": 60000.0,
          "value": 89400.0
        },
        {
          "level": 9,
          "price": 1.48,
          "quantity": 454000.0,
          "value": 671920.0
        },
        {
          "level": 10,
          "price": 1.47,
          "quantity": 470000.0,
          "value": 690900.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 1.57,
          "quantity": 928000.0,
          "value": 1456960.0
        },
        {
          "level": 2,
          "price": 1.58,
          "quantity": 1612000.0,
          "value": 2546960.0
        },
        {
          "level": 3,
          "price": 1.59,
          "quantity": 1252000.0,
          "value": 1990680.0
        },
        {
          "level": 4,
          "price": 1.6,
          "quantity": 1670000.0,
          "value": 2672000.0
        },
        {
          "level": 5,
          "price": 1.61,
          "quantity": 90000.0,
          "value": 144900.0
        },
        {
          "level": 6,
          "price": 1.62,
          "quantity": 190000.0,
          "value": 307800.0
        },
        {
          "level": 7,
          "price": 1.63,
          "quantity": 216000.0,
          "value": 352080.0
        },
        {
          "level": 8,
          "price": 1.64,
          "quantity": 10000.0,
          "value": 16400.0
        },
        {
          "level": 9,
          "price": 1.65,
          "quantity": 244000.0,
          "value": 402600.0
        },
        {
          "level": 10,
          "price": 1.66,
          "quantity": 194000.0,
          "value": 322040.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-04-10 07:59:59.009000000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XHKG",
        "mid_price": 1.565,
        "spread_pct": 0.006389776357827482,
        "spread_ticks": 1.0,
        "tick_size": 0.01,
        "bid_depth_notional_top10": 6886400.0,
        "ask_depth_notional_top10": 10212420.0,
        "bid_ask_depth_ratio": 0.6743
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 366,
        "history_limited": false,
        "trade_days_used": 239,
        "n_trades_used": 239220,
        "first_trade_date": "2025-04-10",
        "last_trade_date": "2026-04-10",
        "window_label": "Apr 10, 2025 to Apr 10, 2026",
        "window_short_label": "Apr 10, 2025 to Apr 10, 2026",
        "trade_days_label": "239 trading days",
        "trade_count_label": "239,220 trades",
        "window_detail_label": "239 trading days • 239,220 trades",
        "history_note": "Trade-size percentiles use Apr 10, 2025 to Apr 10, 2026 history (239 trading days • 239,220 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 55040.0,
            "impact_pct": -0.003195,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.8,
            "pct_of_adv": 0.36
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 91846.0,
            "impact_pct": -0.003195,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 1.33,
            "pct_of_adv": 0.6
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 1788805.22,
            "impact_pct": -0.006764,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 25.98,
            "pct_of_adv": 11.78
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
            "order_id": "195636993.0",
            "timestamp": "2026-04-10 01:33:43.964000000",
            "local_timestamp": "2026-04-10 09:33:43",
            "posted_price": 1.6,
            "size_shares": 510000.0,
            "notional": 816000.0,
            "impact_pct": -0.00338,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 11.85,
            "price_vs_mid_pct": 2.236,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "171490561.0",
            "timestamp": "2026-04-10 01:33:10.385000000",
            "local_timestamp": "2026-04-10 09:33:10",
            "posted_price": 1.6,
            "size_shares": 500000.0,
            "notional": 800000.0,
            "impact_pct": -0.003255,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 11.62,
            "price_vs_mid_pct": 2.236,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "3853175041.0",
            "timestamp": "2026-04-10 06:26:35.806000000",
            "local_timestamp": "2026-04-10 14:26:35",
            "posted_price": 1.59,
            "size_shares": 500000.0,
            "notional": 795000.0,
            "impact_pct": -0.003215,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 11.54,
            "price_vs_mid_pct": 1.597,
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
            "spread_pct": 0.006389776357827482,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 6621180.0,
            "ask_depth_notional": 9395960.0,
            "mid_price": 1.565
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.006389776357827482,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 7778460.0,
            "ask_depth_notional": 10471200.0,
            "mid_price": 1.565
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.006389776357827482,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 8299980.0,
            "ask_depth_notional": 11270940.0,
            "mid_price": 1.565
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.012820512820512832,
            "spread_ticks": 2.0000000000000018,
            "bid_depth_notional": 9065020.0,
            "ask_depth_notional": 11716560.0,
            "mid_price": 1.56
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.006389776357827482,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 6646180.0,
            "ask_depth_notional": 8186900.0,
            "mid_price": 1.565
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.006389776357827482,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 10525360.0,
            "ask_depth_notional": 12451280.0,
            "mid_price": 1.565
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.006389776357827482,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 11815520.0,
            "ask_depth_notional": 12325600.0,
            "mid_price": 1.565
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.006389776357827482,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 11490860.0,
            "ask_depth_notional": 14639560.0,
            "mid_price": 1.565
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.006389776357827482,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 11440100.0,
            "ask_depth_notional": 14503800.0,
            "mid_price": 1.565
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.006389776357827482,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 12301540.0,
            "ask_depth_notional": 14425140.0,
            "mid_price": 1.565
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.006389776357827482,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 6886400.0,
            "ask_depth_notional": 10212420.0,
            "mid_price": 1.565
          }
        ],
        "summary": {
          "median_spread_pct": 0.006389776357827482,
          "median_spread_ticks": 1.0000000000000009,
          "median_bid_depth_notional": 9065020.0,
          "median_ask_depth_notional": 11716560.0,
          "tightest_bucket": "09:30",
          "widest_bucket": "11:00",
          "deepest_bid_bucket": "15:00",
          "thinnest_bid_bucket": "09:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 0.3,
      "peers": [
        {
          "ticker": "914",
          "pct": 0.5
        },
        {
          "ticker": "3323",
          "pct": 0.6
        },
        {
          "ticker": "2233",
          "pct": 1.1
        },
        {
          "ticker": "2128",
          "pct": 1.6
        },
        {
          "ticker": "6655",
          "pct": 1.9
        },
        {
          "ticker": "1186",
          "pct": 3.1
        },
        {
          "ticker": "1783",
          "pct": 4.4
        },
        {
          "ticker": "1757",
          "pct": 5.6
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 313,
          "n_runs": 134,
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
            "retail_pct": 0.07028753993610223,
            "mixed_pct": 0.0,
            "instit_pct": 0.3354632587859425,
            "ambiguous_pct": 0.20447284345047922,
            "unobservable_pct": 0.38977635782747605,
            "unclear_pct": 0.5942492012779552,
            "retail_qty_pct": 0.04753521126760563,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.4788732394366197,
            "ambiguous_qty_pct": 0.14906103286384975,
            "unobservable_qty_pct": 0.3245305164319249,
            "unclear_qty_pct": 0.4735915492957746,
            "retail_notional_pct": 0.04736043177601619,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.47831187571447314,
            "ambiguous_notional_pct": 0.14880155919116958,
            "unobservable_notional_pct": 0.3255261333183411,
            "unclear_notional_pct": 0.4743276925095107
          },
          "run_composition": {
            "retail_pct": 0.15671641791044777,
            "mixed_pct": 0.0,
            "instit_pct": 0.12686567164179105,
            "ambiguous_pct": 0.15671641791044777,
            "unobservable_pct": 0.5597014925373134,
            "unclear_pct": 0.7164179104477612,
            "retail_notional_pct": 0.04736043177601619,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.47831187571447314,
            "unclear_notional_pct": 0.4743276925095107
          },
          "counts": {
            "trades": {
              "retail": 22,
              "mixed": 0,
              "institutional": 105,
              "ambiguous": 64,
              "unobservable": 122,
              "unclear": 186
            },
            "runs": {
              "retail": 21,
              "mixed": 0,
              "institutional": 17,
              "ambiguous": 21,
              "unobservable": 75,
              "unclear": 96
            }
          },
          "confidence": {
            "high": 0.0,
            "medium": 0.17164179104477612,
            "low": 0.11194029850746269,
            "na": 0.7164179104477612
          },
          "confidence_counts": {
            "high": 0,
            "medium": 23,
            "low": 15,
            "na": 96
          },
          "trade_confidence": {
            "high": 0.0,
            "medium": 0.23961661341853036,
            "low": 0.16613418530351437,
            "na": 0.5942492012779552
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 75,
            "low": 52,
            "na": 186
          },
          "observability": {
            "avg_feature_coverage": 0.628358208955224,
            "observable_run_pct": 0.4402985074626866,
            "ambiguous_run_pct": 0.15671641791044777,
            "unobservable_run_pct": 0.5597014925373134
          },
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "dominant_share": 0.5597014925373134,
          "dominance_gap": 0.4029850746268656,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 313
            },
            "d2_information": {
              "UNOBSERVABLE": 313
            },
            "d3_urgency": {
              "IMMEDIATE": 133,
              "ADAPTIVE": 1
            },
            "participant_confidence": {
              "NA": 96,
              "MEDIUM": 23,
              "LOW": 15
            }
          },
          "trade_size": {
            "avg": 17048.242811501597,
            "median": 6280.0
          },
          "run_size": {
            "avg": 39821.64179104478,
            "median": 14080.0,
            "avg_length": 2.3358208955223883
          },
          "recent_trades": [
            {
              "trade_id": "313",
              "timestamp": "2026-04-10T07:59:53.577646",
              "price": 1.57,
              "size": 116000.0,
              "notional": 182120.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 69948,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "312",
              "timestamp": "2026-04-10T07:59:53.577309",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 69948,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "311",
              "timestamp": "2026-04-10T07:59:10.674023",
              "price": 1.56,
              "size": 10000.0,
              "notional": 15600.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 69947,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "310",
              "timestamp": "2026-04-10T07:59:04.634829",
              "price": 1.56,
              "size": 12000.0,
              "notional": 18720.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 69946,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "309",
              "timestamp": "2026-04-10T07:59:03.023405",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 69946,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "308",
              "timestamp": "2026-04-10T07:58:51.099314",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69945,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "307",
              "timestamp": "2026-04-10T07:58:29.764100",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69944,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "306",
              "timestamp": "2026-04-10T07:57:48.456225",
              "price": 1.56,
              "size": 60000.0,
              "notional": 93600.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 69943,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "305",
              "timestamp": "2026-04-10T07:57:30.140864",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69942,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "304",
              "timestamp": "2026-04-10T07:56:39.642951",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69941,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "303",
              "timestamp": "2026-04-10T07:55:28.822268",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69940,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "302",
              "timestamp": "2026-04-10T07:55:11.287769",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69939,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "301",
              "timestamp": "2026-04-10T07:54:42.857144",
              "price": 1.56,
              "size": 6000.0,
              "notional": 9360.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 69938,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "300",
              "timestamp": "2026-04-10T07:54:35.944780",
              "price": 1.56,
              "size": 6000.0,
              "notional": 9360.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 69937,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "299",
              "timestamp": "2026-04-10T07:54:29.137465",
              "price": 1.56,
              "size": 6000.0,
              "notional": 9360.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 69936,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "298",
              "timestamp": "2026-04-10T07:53:55.490661",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69935,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "297",
              "timestamp": "2026-04-10T07:52:57.809538",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69934,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "296",
              "timestamp": "2026-04-10T07:52:49.404844",
              "price": 1.57,
              "size": 26000.0,
              "notional": 40820.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69933,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "295",
              "timestamp": "2026-04-10T07:51:49.976105",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69932,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "294",
              "timestamp": "2026-04-10T07:50:48.376179",
              "price": 1.57,
              "size": 24000.0,
              "notional": 37680.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 69931,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "293",
              "timestamp": "2026-04-10T07:50:48.364094",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 69931,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "292",
              "timestamp": "2026-04-10T07:50:17.748017",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69930,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "291",
              "timestamp": "2026-04-10T07:50:02.588523",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69929,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "290",
              "timestamp": "2026-04-10T07:49:26.040471",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 69928,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "289",
              "timestamp": "2026-04-10T07:49:26.034097",
              "price": 1.56,
              "size": 2000.0,
              "notional": 3120.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 69928,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "288",
              "timestamp": "2026-04-10T07:48:23.276526",
              "price": 1.56,
              "size": 2000.0,
              "notional": 3120.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 69927,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "287",
              "timestamp": "2026-04-10T07:47:35.100613",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69926,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "286",
              "timestamp": "2026-04-10T07:47:35.100613",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69926,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "285",
              "timestamp": "2026-04-10T07:47:25.707152",
              "price": 1.56,
              "size": 6000.0,
              "notional": 9360.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 69925,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "284",
              "timestamp": "2026-04-10T07:47:15.162096",
              "price": 1.56,
              "size": 8000.0,
              "notional": 12480.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 69924,
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
          "n_trades": 17817,
          "n_runs": 5628,
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
            "retail_pct": 0.03064488971207274,
            "mixed_pct": 0.0,
            "instit_pct": 0.5034517595554807,
            "ambiguous_pct": 0.1375091205028905,
            "unobservable_pct": 0.32839423022955605,
            "unclear_pct": 0.46590335073244654,
            "retail_qty_pct": 0.015438963416942477,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6555827965766168,
            "ambiguous_qty_pct": 0.08602390304112724,
            "unobservable_qty_pct": 0.24295433696531354,
            "unclear_qty_pct": 0.32897824000644077,
            "retail_notional_pct": 0.014633309359475407,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6575077260724862,
            "ambiguous_notional_pct": 0.0832407605832134,
            "unobservable_notional_pct": 0.244618203984825,
            "unclear_notional_pct": 0.3278589645680384
          },
          "run_composition": {
            "retail_pct": 0.08795309168443496,
            "mixed_pct": 0.0,
            "instit_pct": 0.15422885572139303,
            "ambiguous_pct": 0.1480099502487562,
            "unobservable_pct": 0.6098081023454158,
            "unclear_pct": 0.757818052594172,
            "retail_notional_pct": 0.014633309359475407,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6575077260724862,
            "unclear_notional_pct": 0.3278589645680384
          },
          "counts": {
            "trades": {
              "retail": 546,
              "mixed": 0,
              "institutional": 8970,
              "ambiguous": 2450,
              "unobservable": 5851,
              "unclear": 8301
            },
            "runs": {
              "retail": 495,
              "mixed": 0,
              "institutional": 868,
              "ambiguous": 833,
              "unobservable": 3432,
              "unclear": 4265
            }
          },
          "confidence": {
            "high": 0.08759772565742716,
            "medium": 0.09346126510305615,
            "low": 0.06112295664534471,
            "na": 0.757818052594172
          },
          "confidence_counts": {
            "high": 493,
            "medium": 526,
            "low": 344,
            "na": 4265
          },
          "trade_confidence": {
            "high": 0.29887186395015997,
            "medium": 0.11399225458831454,
            "low": 0.12123253072907897,
            "na": 0.46590335073244654
          },
          "trade_confidence_counts": {
            "high": 5325,
            "medium": 2031,
            "low": 2160,
            "na": 8301
          },
          "observability": {
            "avg_feature_coverage": 0.6197050461975835,
            "observable_run_pct": 0.3901918976545842,
            "ambiguous_run_pct": 0.1480099502487562,
            "unobservable_run_pct": 0.6098081023454158
          },
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "dominant_share": 0.6098081023454158,
          "dominance_gap": 0.4555792466240228,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 17817
            },
            "d2_information": {
              "UNOBSERVABLE": 17817
            },
            "d3_urgency": {
              "IMMEDIATE": 5427,
              "ADAPTIVE": 198,
              "SCHEDULED": 3
            },
            "participant_confidence": {
              "NA": 4265,
              "MEDIUM": 526,
              "HIGH": 493,
              "LOW": 344
            }
          },
          "trade_size": {
            "avg": 25004.156304091597,
            "median": 9420.0
          },
          "run_size": {
            "avg": 79157.6142270789,
            "median": 15200.0,
            "avg_length": 3.1657782515991473
          },
          "recent_trades": [
            {
              "trade_id": "313",
              "timestamp": "2026-04-10T07:59:53.577646",
              "price": 1.57,
              "size": 116000.0,
              "notional": 182120.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 69948,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "312",
              "timestamp": "2026-04-10T07:59:53.577309",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 69948,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "311",
              "timestamp": "2026-04-10T07:59:10.674023",
              "price": 1.56,
              "size": 10000.0,
              "notional": 15600.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 69947,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "310",
              "timestamp": "2026-04-10T07:59:04.634829",
              "price": 1.56,
              "size": 12000.0,
              "notional": 18720.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 69946,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "309",
              "timestamp": "2026-04-10T07:59:03.023405",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 69946,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "308",
              "timestamp": "2026-04-10T07:58:51.099314",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69945,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "307",
              "timestamp": "2026-04-10T07:58:29.764100",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69944,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "306",
              "timestamp": "2026-04-10T07:57:48.456225",
              "price": 1.56,
              "size": 60000.0,
              "notional": 93600.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 69943,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "305",
              "timestamp": "2026-04-10T07:57:30.140864",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69942,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "304",
              "timestamp": "2026-04-10T07:56:39.642951",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69941,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "303",
              "timestamp": "2026-04-10T07:55:28.822268",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69940,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "302",
              "timestamp": "2026-04-10T07:55:11.287769",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69939,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "301",
              "timestamp": "2026-04-10T07:54:42.857144",
              "price": 1.56,
              "size": 6000.0,
              "notional": 9360.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 69938,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "300",
              "timestamp": "2026-04-10T07:54:35.944780",
              "price": 1.56,
              "size": 6000.0,
              "notional": 9360.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 69937,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "299",
              "timestamp": "2026-04-10T07:54:29.137465",
              "price": 1.56,
              "size": 6000.0,
              "notional": 9360.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 69936,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "298",
              "timestamp": "2026-04-10T07:53:55.490661",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69935,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "297",
              "timestamp": "2026-04-10T07:52:57.809538",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69934,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "296",
              "timestamp": "2026-04-10T07:52:49.404844",
              "price": 1.57,
              "size": 26000.0,
              "notional": 40820.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69933,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "295",
              "timestamp": "2026-04-10T07:51:49.976105",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69932,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "294",
              "timestamp": "2026-04-10T07:50:48.376179",
              "price": 1.57,
              "size": 24000.0,
              "notional": 37680.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 69931,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "293",
              "timestamp": "2026-04-10T07:50:48.364094",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 69931,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "292",
              "timestamp": "2026-04-10T07:50:17.748017",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69930,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "291",
              "timestamp": "2026-04-10T07:50:02.588523",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69929,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "290",
              "timestamp": "2026-04-10T07:49:26.040471",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 69928,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "289",
              "timestamp": "2026-04-10T07:49:26.034097",
              "price": 1.56,
              "size": 2000.0,
              "notional": 3120.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 69928,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "288",
              "timestamp": "2026-04-10T07:48:23.276526",
              "price": 1.56,
              "size": 2000.0,
              "notional": 3120.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 69927,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "287",
              "timestamp": "2026-04-10T07:47:35.100613",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69926,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "286",
              "timestamp": "2026-04-10T07:47:35.100613",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69926,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "285",
              "timestamp": "2026-04-10T07:47:25.707152",
              "price": 1.56,
              "size": 6000.0,
              "notional": 9360.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 69925,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "284",
              "timestamp": "2026-04-10T07:47:15.162096",
              "price": 1.56,
              "size": 8000.0,
              "notional": 12480.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 69924,
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
          "n_trades": 63591,
          "n_runs": 19413,
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
            "retail_pct": 0.008900630592379425,
            "mixed_pct": 0.0,
            "instit_pct": 0.5256718718057587,
            "ambiguous_pct": 0.10647733169788177,
            "unobservable_pct": 0.3589501659039801,
            "unclear_pct": 0.46542749760186186,
            "retail_qty_pct": 0.004547416673988773,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.673615690780324,
            "ambiguous_qty_pct": 0.04870742914710389,
            "unobservable_qty_pct": 0.2731294633985833,
            "unclear_qty_pct": 0.3218368925456872,
            "retail_notional_pct": 0.003966574623351513,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6768152911750643,
            "ambiguous_notional_pct": 0.047954271190283164,
            "unobservable_notional_pct": 0.271263863011301,
            "unclear_notional_pct": 0.3192181342015842
          },
          "run_composition": {
            "retail_pct": 0.026013496110853553,
            "mixed_pct": 0.0,
            "instit_pct": 0.17127697934373873,
            "ambiguous_pct": 0.1170864884355844,
            "unobservable_pct": 0.6856230361098233,
            "unclear_pct": 0.8027095245454078,
            "retail_notional_pct": 0.003966574623351513,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6768152911750643,
            "unclear_notional_pct": 0.3192181342015842
          },
          "counts": {
            "trades": {
              "retail": 566,
              "mixed": 0,
              "institutional": 33428,
              "ambiguous": 6771,
              "unobservable": 22826,
              "unclear": 29597
            },
            "runs": {
              "retail": 505,
              "mixed": 0,
              "institutional": 3325,
              "ambiguous": 2273,
              "unobservable": 13310,
              "unclear": 15583
            }
          },
          "confidence": {
            "high": 0.13568227476433317,
            "medium": 0.03904600010302375,
            "low": 0.02256220058723536,
            "na": 0.8027095245454077
          },
          "confidence_counts": {
            "high": 2634,
            "medium": 758,
            "low": 438,
            "na": 15583
          },
          "trade_confidence": {
            "high": 0.4345111729647277,
            "medium": 0.04955103709644446,
            "low": 0.050510292336965926,
            "na": 0.4654274976018619
          },
          "trade_confidence_counts": {
            "high": 27631,
            "medium": 3151,
            "low": 3212,
            "na": 29597
          },
          "observability": {
            "avg_feature_coverage": 0.6003966414258487,
            "observable_run_pct": 0.31437696389017666,
            "ambiguous_run_pct": 0.1170864884355844,
            "unobservable_run_pct": 0.6856230361098233
          },
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "dominant_share": 0.6856230361098233,
          "dominance_gap": 0.5143460567660846,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 63591
            },
            "d2_information": {
              "UNOBSERVABLE": 63591
            },
            "d3_urgency": {
              "IMMEDIATE": 18548,
              "ADAPTIVE": 857,
              "SCHEDULED": 8
            },
            "participant_confidence": {
              "NA": 15583,
              "HIGH": 2634,
              "MEDIUM": 758,
              "LOW": 438
            }
          },
          "trade_size": {
            "avg": 26187.922506958534,
            "median": 9900.0
          },
          "run_size": {
            "avg": 85783.55638695719,
            "median": 16100.000000000002,
            "avg_length": 3.2756915469015606
          },
          "recent_trades": [
            {
              "trade_id": "313",
              "timestamp": "2026-04-10T07:59:53.577646",
              "price": 1.57,
              "size": 116000.0,
              "notional": 182120.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 69948,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "312",
              "timestamp": "2026-04-10T07:59:53.577309",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 69948,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "311",
              "timestamp": "2026-04-10T07:59:10.674023",
              "price": 1.56,
              "size": 10000.0,
              "notional": 15600.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 69947,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "310",
              "timestamp": "2026-04-10T07:59:04.634829",
              "price": 1.56,
              "size": 12000.0,
              "notional": 18720.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 69946,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "309",
              "timestamp": "2026-04-10T07:59:03.023405",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 69946,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "308",
              "timestamp": "2026-04-10T07:58:51.099314",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69945,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "307",
              "timestamp": "2026-04-10T07:58:29.764100",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69944,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "306",
              "timestamp": "2026-04-10T07:57:48.456225",
              "price": 1.56,
              "size": 60000.0,
              "notional": 93600.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 69943,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "305",
              "timestamp": "2026-04-10T07:57:30.140864",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69942,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "304",
              "timestamp": "2026-04-10T07:56:39.642951",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69941,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "303",
              "timestamp": "2026-04-10T07:55:28.822268",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69940,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "302",
              "timestamp": "2026-04-10T07:55:11.287769",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69939,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "301",
              "timestamp": "2026-04-10T07:54:42.857144",
              "price": 1.56,
              "size": 6000.0,
              "notional": 9360.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 69938,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "300",
              "timestamp": "2026-04-10T07:54:35.944780",
              "price": 1.56,
              "size": 6000.0,
              "notional": 9360.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 69937,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "299",
              "timestamp": "2026-04-10T07:54:29.137465",
              "price": 1.56,
              "size": 6000.0,
              "notional": 9360.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 69936,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "298",
              "timestamp": "2026-04-10T07:53:55.490661",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69935,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "297",
              "timestamp": "2026-04-10T07:52:57.809538",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69934,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "296",
              "timestamp": "2026-04-10T07:52:49.404844",
              "price": 1.57,
              "size": 26000.0,
              "notional": 40820.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69933,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "295",
              "timestamp": "2026-04-10T07:51:49.976105",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69932,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "294",
              "timestamp": "2026-04-10T07:50:48.376179",
              "price": 1.57,
              "size": 24000.0,
              "notional": 37680.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 69931,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "293",
              "timestamp": "2026-04-10T07:50:48.364094",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 69931,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "292",
              "timestamp": "2026-04-10T07:50:17.748017",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69930,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "291",
              "timestamp": "2026-04-10T07:50:02.588523",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69929,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "290",
              "timestamp": "2026-04-10T07:49:26.040471",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 69928,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "289",
              "timestamp": "2026-04-10T07:49:26.034097",
              "price": 1.56,
              "size": 2000.0,
              "notional": 3120.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 69928,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "288",
              "timestamp": "2026-04-10T07:48:23.276526",
              "price": 1.56,
              "size": 2000.0,
              "notional": 3120.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 69927,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "287",
              "timestamp": "2026-04-10T07:47:35.100613",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69926,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "286",
              "timestamp": "2026-04-10T07:47:35.100613",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69926,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "285",
              "timestamp": "2026-04-10T07:47:25.707152",
              "price": 1.56,
              "size": 6000.0,
              "notional": 9360.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 69925,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "284",
              "timestamp": "2026-04-10T07:47:15.162096",
              "price": 1.56,
              "size": 8000.0,
              "notional": 12480.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 69924,
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
          "n_trades": 107981,
          "n_runs": 35331,
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
            "retail_pct": 0.005278706439095767,
            "mixed_pct": 0.0,
            "instit_pct": 0.513155092099536,
            "ambiguous_pct": 0.0859317842953853,
            "unobservable_pct": 0.3956344171659829,
            "unclear_pct": 0.4815662014613682,
            "retail_qty_pct": 0.0027654066065502573,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6559197288958513,
            "ambiguous_qty_pct": 0.03677223465166454,
            "unobservable_qty_pct": 0.30454262984593394,
            "unclear_qty_pct": 0.3413148644975985,
            "retail_notional_pct": 0.002418497432275322,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6575508787177617,
            "ambiguous_notional_pct": 0.03636631767846528,
            "unobservable_notional_pct": 0.30366430617149764,
            "unclear_notional_pct": 0.3400306238499629
          },
          "run_composition": {
            "retail_pct": 0.014350004245563387,
            "mixed_pct": 0.0,
            "instit_pct": 0.16665251478871246,
            "ambiguous_pct": 0.09218533299368827,
            "unobservable_pct": 0.7268121479720359,
            "unclear_pct": 0.8189974809657241,
            "retail_notional_pct": 0.002418497432275322,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6575508787177617,
            "unclear_notional_pct": 0.3400306238499629
          },
          "counts": {
            "trades": {
              "retail": 570,
              "mixed": 0,
              "institutional": 55411,
              "ambiguous": 9279,
              "unobservable": 42721,
              "unclear": 52000
            },
            "runs": {
              "retail": 507,
              "mixed": 0,
              "institutional": 5888,
              "ambiguous": 3257,
              "unobservable": 25679,
              "unclear": 28936
            }
          },
          "confidence": {
            "high": 0.13812232883303616,
            "medium": 0.024822393931674732,
            "low": 0.018057796269564972,
            "na": 0.8189974809657241
          },
          "confidence_counts": {
            "high": 4880,
            "medium": 877,
            "low": 638,
            "na": 28936
          },
          "trade_confidence": {
            "high": 0.4385678962039618,
            "medium": 0.035089506487252384,
            "low": 0.0447763958474176,
            "na": 0.4815662014613682
          },
          "trade_confidence_counts": {
            "high": 47357,
            "medium": 3789,
            "low": 4835,
            "na": 52000
          },
          "observability": {
            "avg_feature_coverage": 0.5927556536752426,
            "observable_run_pct": 0.27318785202796414,
            "ambiguous_run_pct": 0.09218533299368827,
            "unobservable_run_pct": 0.7268121479720359
          },
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "dominant_share": 0.7268121479720359,
          "dominance_gap": 0.5601596331833234,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 107981
            },
            "d2_information": {
              "UNOBSERVABLE": 107981
            },
            "d3_urgency": {
              "IMMEDIATE": 34086,
              "ADAPTIVE": 1231,
              "SCHEDULED": 14
            },
            "participant_confidence": {
              "NA": 28936,
              "HIGH": 4880,
              "MEDIUM": 877,
              "LOW": 638
            }
          },
          "trade_size": {
            "avg": 25318.950695770553,
            "median": 9720.0
          },
          "run_size": {
            "avg": 77381.49543120772,
            "median": 15300.0,
            "avg_length": 3.0562678667459173
          },
          "recent_trades": [
            {
              "trade_id": "313",
              "timestamp": "2026-04-10T07:59:53.577646",
              "price": 1.57,
              "size": 116000.0,
              "notional": 182120.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 69948,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "312",
              "timestamp": "2026-04-10T07:59:53.577309",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 69948,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "311",
              "timestamp": "2026-04-10T07:59:10.674023",
              "price": 1.56,
              "size": 10000.0,
              "notional": 15600.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 69947,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "310",
              "timestamp": "2026-04-10T07:59:04.634829",
              "price": 1.56,
              "size": 12000.0,
              "notional": 18720.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 69946,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "309",
              "timestamp": "2026-04-10T07:59:03.023405",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 69946,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "308",
              "timestamp": "2026-04-10T07:58:51.099314",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69945,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "307",
              "timestamp": "2026-04-10T07:58:29.764100",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69944,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "306",
              "timestamp": "2026-04-10T07:57:48.456225",
              "price": 1.56,
              "size": 60000.0,
              "notional": 93600.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 69943,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "305",
              "timestamp": "2026-04-10T07:57:30.140864",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69942,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "304",
              "timestamp": "2026-04-10T07:56:39.642951",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69941,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "303",
              "timestamp": "2026-04-10T07:55:28.822268",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69940,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "302",
              "timestamp": "2026-04-10T07:55:11.287769",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69939,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "301",
              "timestamp": "2026-04-10T07:54:42.857144",
              "price": 1.56,
              "size": 6000.0,
              "notional": 9360.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 69938,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "300",
              "timestamp": "2026-04-10T07:54:35.944780",
              "price": 1.56,
              "size": 6000.0,
              "notional": 9360.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 69937,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "299",
              "timestamp": "2026-04-10T07:54:29.137465",
              "price": 1.56,
              "size": 6000.0,
              "notional": 9360.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 69936,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "298",
              "timestamp": "2026-04-10T07:53:55.490661",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69935,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "297",
              "timestamp": "2026-04-10T07:52:57.809538",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69934,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "296",
              "timestamp": "2026-04-10T07:52:49.404844",
              "price": 1.57,
              "size": 26000.0,
              "notional": 40820.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69933,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "295",
              "timestamp": "2026-04-10T07:51:49.976105",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69932,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "294",
              "timestamp": "2026-04-10T07:50:48.376179",
              "price": 1.57,
              "size": 24000.0,
              "notional": 37680.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 69931,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "293",
              "timestamp": "2026-04-10T07:50:48.364094",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 69931,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "292",
              "timestamp": "2026-04-10T07:50:17.748017",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69930,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "291",
              "timestamp": "2026-04-10T07:50:02.588523",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69929,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "290",
              "timestamp": "2026-04-10T07:49:26.040471",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 69928,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "289",
              "timestamp": "2026-04-10T07:49:26.034097",
              "price": 1.56,
              "size": 2000.0,
              "notional": 3120.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 69928,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "288",
              "timestamp": "2026-04-10T07:48:23.276526",
              "price": 1.56,
              "size": 2000.0,
              "notional": 3120.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 69927,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "287",
              "timestamp": "2026-04-10T07:47:35.100613",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69926,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "286",
              "timestamp": "2026-04-10T07:47:35.100613",
              "price": 1.57,
              "size": 2000.0,
              "notional": 3140.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69926,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "285",
              "timestamp": "2026-04-10T07:47:25.707152",
              "price": 1.56,
              "size": 6000.0,
              "notional": 9360.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 69925,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "284",
              "timestamp": "2026-04-10T07:47:15.162096",
              "price": 1.56,
              "size": 8000.0,
              "notional": 12480.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 69924,
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
      "n_trades": 107981,
      "n_runs": 35331,
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
        "retail_pct": 0.005278706439095767,
        "mixed_pct": 0.0,
        "instit_pct": 0.513155092099536,
        "ambiguous_pct": 0.0859317842953853,
        "unobservable_pct": 0.3956344171659829,
        "unclear_pct": 0.4815662014613682,
        "retail_qty_pct": 0.0027654066065502573,
        "mixed_qty_pct": 0.0,
        "instit_qty_pct": 0.6559197288958513,
        "ambiguous_qty_pct": 0.03677223465166454,
        "unobservable_qty_pct": 0.30454262984593394,
        "unclear_qty_pct": 0.3413148644975985,
        "retail_notional_pct": 0.002418497432275322,
        "mixed_notional_pct": 0.0,
        "instit_notional_pct": 0.6575508787177617,
        "ambiguous_notional_pct": 0.03636631767846528,
        "unobservable_notional_pct": 0.30366430617149764,
        "unclear_notional_pct": 0.3400306238499629
      },
      "run_composition": {
        "retail_pct": 0.014350004245563387,
        "mixed_pct": 0.0,
        "instit_pct": 0.16665251478871246,
        "ambiguous_pct": 0.09218533299368827,
        "unobservable_pct": 0.7268121479720359,
        "unclear_pct": 0.8189974809657241
      },
      "trade_size": {
        "avg": 25318.950695770553,
        "median": 9720.0
      },
      "run_size": {
        "avg": 77381.49543120772,
        "median": 15300.0,
        "avg_length": 3.0562678667459173
      },
      "confidence": {
        "high": 0.13812232883303616,
        "medium": 0.024822393931674732,
        "low": 0.018057796269564972,
        "na": 0.8189974809657241
      },
      "confidence_counts": {
        "high": 4880,
        "medium": 877,
        "low": 638,
        "na": 28936
      },
      "trade_confidence": {
        "high": 0.4385678962039618,
        "medium": 0.035089506487252384,
        "low": 0.0447763958474176,
        "na": 0.4815662014613682
      },
      "trade_confidence_counts": {
        "high": 47357,
        "medium": 3789,
        "low": 4835,
        "na": 52000
      },
      "counts": {
        "trades": {
          "retail": 570,
          "mixed": 0,
          "institutional": 55411,
          "ambiguous": 9279,
          "unobservable": 42721,
          "unclear": 52000
        },
        "runs": {
          "retail": 507,
          "mixed": 0,
          "institutional": 5888,
          "ambiguous": 3257,
          "unobservable": 25679,
          "unclear": 28936
        }
      },
      "observability": {
        "avg_feature_coverage": 0.5927556536752426,
        "observable_run_pct": 0.27318785202796414,
        "ambiguous_run_pct": 0.09218533299368827,
        "unobservable_run_pct": 0.7268121479720359
      },
      "dominant_bucket": "UNOBSERVABLE",
      "dominant_label": "Not Observable",
      "dominant_share": 0.7268121479720359,
      "dominance_gap": 0.5601596331833234,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2025-11",
            "n_trades": 13680,
            "n_runs": 4334,
            "retail_pct": 0.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.5173976608187134,
            "ambiguous_pct": 0.06783625730994151,
            "unobservable_pct": 0.414766081871345,
            "unclear_pct": 0.48260233918128653,
            "avg_trade_size": 24352.859399853805,
            "avg_run_notional": 76868.27793954777,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6422373908172369,
            "ambiguous_qty_pct": 0.02016742336053065,
            "unobservable_qty_pct": 0.33759518582223247,
            "unclear_qty_pct": 0.35776260918276315,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6426954865813986,
            "ambiguous_notional_pct": 0.020273025590408878,
            "unobservable_notional_pct": 0.3370314878281925,
            "unclear_notional_pct": 0.35730451341860137,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.16289801568989387,
            "run_ambiguous_pct": 0.08167974157821874,
            "run_unobservable_pct": 0.7554222427318874,
            "run_unclear_pct": 0.8371019843101062,
            "avg_feature_coverage": 0.5866866635902168,
            "high_confidence_pct": 0.14259344716197508,
            "medium_confidence_pct": 0.008075680664513151,
            "low_confidence_pct": 0.01222888786340563,
            "na_confidence_pct": 0.8371019843101062,
            "total_quantity": null
          },
          {
            "month": "2025-12",
            "n_trades": 8653,
            "n_runs": 3707,
            "retail_pct": 0.00023113371085172773,
            "mixed_pct": 0.0,
            "instit_pct": 0.46608112793250894,
            "ambiguous_pct": 0.03779036172425748,
            "unobservable_pct": 0.4958973766323818,
            "unclear_pct": 0.5336877383566393,
            "avg_trade_size": 15887.618453715473,
            "avg_run_notional": 37085.39586727812,
            "retail_qty_pct": 2.280714535498652e-05,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6254452817483335,
            "ambiguous_qty_pct": 0.01719277495739718,
            "unobservable_qty_pct": 0.3573391361489144,
            "unclear_qty_pct": 0.37453191110631157,
            "retail_notional_pct": 2.1879670435518993e-05,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6255957238400964,
            "ambiguous_notional_pct": 0.016923543705001907,
            "unobservable_notional_pct": 0.3574588527844662,
            "unclear_notional_pct": 0.37438239648946814,
            "run_retail_pct": 0.0002697599136768276,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.16266522794712707,
            "run_ambiguous_pct": 0.03371998920960345,
            "run_unobservable_pct": 0.8033450229295926,
            "run_unclear_pct": 0.837065012139196,
            "avg_feature_coverage": 0.5794712705691933,
            "high_confidence_pct": 0.14297275424871864,
            "medium_confidence_pct": 0.004046398705152414,
            "low_confidence_pct": 0.01591583490693283,
            "na_confidence_pct": 0.8370650121391962,
            "total_quantity": null
          },
          {
            "month": "2026-01",
            "n_trades": 16576,
            "n_runs": 5568,
            "retail_pct": 0.00012065637065637066,
            "mixed_pct": 0.0,
            "instit_pct": 0.5220197876447876,
            "ambiguous_pct": 0.06346525096525096,
            "unobservable_pct": 0.414394305019305,
            "unclear_pct": 0.477859555984556,
            "avg_trade_size": 26013.892554898648,
            "avg_run_notional": 77443.65714619253,
            "retail_qty_pct": 7.620569137989382e-06,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6654435863080665,
            "ambiguous_qty_pct": 0.017328220217642385,
            "unobservable_qty_pct": 0.31722057290515304,
            "unclear_qty_pct": 0.33454879312279545,
            "retail_notional_pct": 7.039415054326549e-06,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6662693837572461,
            "ambiguous_notional_pct": 0.0174550438082892,
            "unobservable_notional_pct": 0.3162685330194103,
            "unclear_notional_pct": 0.33372357682769954,
            "run_retail_pct": 0.00017959770114942528,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.17492816091954022,
            "run_ambiguous_pct": 0.07866379310344827,
            "run_unobservable_pct": 0.7462284482758621,
            "run_unclear_pct": 0.8248922413793104,
            "avg_feature_coverage": 0.5880657327586206,
            "high_confidence_pct": 0.15229885057471265,
            "medium_confidence_pct": 0.007004310344827586,
            "low_confidence_pct": 0.015804597701149427,
            "na_confidence_pct": 0.8248922413793104,
            "total_quantity": null
          },
          {
            "month": "2026-02",
            "n_trades": 24056,
            "n_runs": 6752,
            "retail_pct": 0.0007482540738277353,
            "mixed_pct": 0.0,
            "instit_pct": 0.537246425008314,
            "ambiguous_pct": 0.12541569670768207,
            "unobservable_pct": 0.33658962421017624,
            "unclear_pct": 0.4620053209178583,
            "avg_trade_size": 26321.057249750585,
            "avg_run_notional": 93776.56297393366,
            "retail_qty_pct": 0.0001249292617800233,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6841441970185382,
            "ambiguous_qty_pct": 0.0498709284408401,
            "unobservable_qty_pct": 0.2658599452788417,
            "unclear_qty_pct": 0.31573087371968184,
            "retail_notional_pct": 0.0001317794074906358,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6874064978592547,
            "ambiguous_notional_pct": 0.051325440091750614,
            "unobservable_notional_pct": 0.2611362826415042,
            "unclear_notional_pct": 0.3124617227332548,
            "run_retail_pct": 0.0013329383886255925,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.1806872037914692,
            "run_ambiguous_pct": 0.1338862559241706,
            "run_unobservable_pct": 0.6840936018957346,
            "run_unclear_pct": 0.8179798578199052,
            "avg_feature_coverage": 0.5973859597156398,
            "high_confidence_pct": 0.15328791469194314,
            "medium_confidence_pct": 0.027843601895734597,
            "low_confidence_pct": 0.0008886255924170616,
            "na_confidence_pct": 0.8179798578199052,
            "total_quantity": null
          },
          {
            "month": "2026-03",
            "n_trades": 20871,
            "n_runs": 6445,
            "retail_pct": 0.018590388577451968,
            "mixed_pct": 0.0,
            "instit_pct": 0.5168415504767381,
            "ambiguous_pct": 0.10195965694025202,
            "unobservable_pct": 0.36260840400555794,
            "unclear_pct": 0.46456806094580994,
            "avg_trade_size": 26760.819263092326,
            "avg_run_notional": 86660.2108363072,
            "retail_qty_pct": 0.01041575656513035,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6715426151631653,
            "ambiguous_qty_pct": 0.055120395948236506,
            "unobservable_qty_pct": 0.26292123232346787,
            "unclear_qty_pct": 0.31804162827170435,
            "retail_notional_pct": 0.009423498402974538,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6752019506577454,
            "ambiguous_notional_pct": 0.05175270033547488,
            "unobservable_notional_pct": 0.2636218506038052,
            "unclear_notional_pct": 0.31537455093928013,
            "run_retail_pct": 0.05352986811481769,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.15841737781225756,
            "run_ambiguous_pct": 0.11792086889061287,
            "run_unobservable_pct": 0.6701318851823118,
            "run_unclear_pct": 0.7880527540729247,
            "avg_feature_coverage": 0.6065166795965865,
            "high_confidence_pct": 0.12055857253685028,
            "medium_confidence_pct": 0.05120248254460822,
            "low_confidence_pct": 0.040186190845616754,
            "na_confidence_pct": 0.7880527540729247,
            "total_quantity": null
          },
          {
            "month": "2026-04",
            "n_trades": 3323,
            "n_runs": 1134,
            "retail_pct": 0.0475473969304845,
            "mixed_pct": 0.0,
            "instit_pct": 0.50827565452904,
            "ambiguous_pct": 0.19741197712910022,
            "unobservable_pct": 0.24676497141137527,
            "unclear_pct": 0.4441769485404755,
            "avg_trade_size": 19228.845895275354,
            "avg_run_notional": 56346.96200176366,
            "retail_qty_pct": 0.019721042903699408,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.67300511585969,
            "ambiguous_qty_pct": 0.1767458722474419,
            "unobservable_qty_pct": 0.13052796898916869,
            "unclear_qty_pct": 0.3072738412366106,
            "retail_notional_pct": 0.019654389392643183,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6726574643784979,
            "ambiguous_notional_pct": 0.17769189736887442,
            "unobservable_notional_pct": 0.12999624885998454,
            "unclear_notional_pct": 0.307688146228859,
            "run_retail_pct": 0.13227513227513227,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.17195767195767195,
            "run_ambiguous_pct": 0.18253968253968253,
            "run_unobservable_pct": 0.5132275132275133,
            "run_unclear_pct": 0.6957671957671958,
            "avg_feature_coverage": 0.6384920634920634,
            "high_confidence_pct": 0.05202821869488536,
            "medium_confidence_pct": 0.17724867724867724,
            "low_confidence_pct": 0.07495590828924162,
            "na_confidence_pct": 0.6957671957671958,
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
          "trade_id": "313",
          "timestamp": "2026-04-10T07:59:53.577646",
          "price": 1.57,
          "size": 116000.0,
          "notional": 182120.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 69948,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "312",
          "timestamp": "2026-04-10T07:59:53.577309",
          "price": 1.57,
          "size": 2000.0,
          "notional": 3140.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 69948,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "311",
          "timestamp": "2026-04-10T07:59:10.674023",
          "price": 1.56,
          "size": 10000.0,
          "notional": 15600.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 69947,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "310",
          "timestamp": "2026-04-10T07:59:04.634829",
          "price": 1.56,
          "size": 12000.0,
          "notional": 18720.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 69946,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "309",
          "timestamp": "2026-04-10T07:59:03.023405",
          "price": 1.57,
          "size": 2000.0,
          "notional": 3140.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 69946,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "308",
          "timestamp": "2026-04-10T07:58:51.099314",
          "price": 1.57,
          "size": 2000.0,
          "notional": 3140.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 69945,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "307",
          "timestamp": "2026-04-10T07:58:29.764100",
          "price": 1.57,
          "size": 2000.0,
          "notional": 3140.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 69944,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "306",
          "timestamp": "2026-04-10T07:57:48.456225",
          "price": 1.56,
          "size": 60000.0,
          "notional": 93600.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 69943,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "305",
          "timestamp": "2026-04-10T07:57:30.140864",
          "price": 1.57,
          "size": 2000.0,
          "notional": 3140.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 69942,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "304",
          "timestamp": "2026-04-10T07:56:39.642951",
          "price": 1.57,
          "size": 2000.0,
          "notional": 3140.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 69941,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "303",
          "timestamp": "2026-04-10T07:55:28.822268",
          "price": 1.57,
          "size": 2000.0,
          "notional": 3140.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 69940,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "302",
          "timestamp": "2026-04-10T07:55:11.287769",
          "price": 1.57,
          "size": 2000.0,
          "notional": 3140.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 69939,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "301",
          "timestamp": "2026-04-10T07:54:42.857144",
          "price": 1.56,
          "size": 6000.0,
          "notional": 9360.0,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 69938,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "300",
          "timestamp": "2026-04-10T07:54:35.944780",
          "price": 1.56,
          "size": 6000.0,
          "notional": 9360.0,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 69937,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "299",
          "timestamp": "2026-04-10T07:54:29.137465",
          "price": 1.56,
          "size": 6000.0,
          "notional": 9360.0,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 69936,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "298",
          "timestamp": "2026-04-10T07:53:55.490661",
          "price": 1.57,
          "size": 2000.0,
          "notional": 3140.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 69935,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "297",
          "timestamp": "2026-04-10T07:52:57.809538",
          "price": 1.57,
          "size": 2000.0,
          "notional": 3140.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 69934,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "296",
          "timestamp": "2026-04-10T07:52:49.404844",
          "price": 1.57,
          "size": 26000.0,
          "notional": 40820.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 69933,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "295",
          "timestamp": "2026-04-10T07:51:49.976105",
          "price": 1.57,
          "size": 2000.0,
          "notional": 3140.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 69932,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "294",
          "timestamp": "2026-04-10T07:50:48.376179",
          "price": 1.57,
          "size": 24000.0,
          "notional": 37680.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 69931,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "293",
          "timestamp": "2026-04-10T07:50:48.364094",
          "price": 1.57,
          "size": 2000.0,
          "notional": 3140.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 69931,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "292",
          "timestamp": "2026-04-10T07:50:17.748017",
          "price": 1.57,
          "size": 2000.0,
          "notional": 3140.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 69930,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "291",
          "timestamp": "2026-04-10T07:50:02.588523",
          "price": 1.57,
          "size": 2000.0,
          "notional": 3140.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 69929,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "290",
          "timestamp": "2026-04-10T07:49:26.040471",
          "price": 1.57,
          "size": 2000.0,
          "notional": 3140.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 69928,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "289",
          "timestamp": "2026-04-10T07:49:26.034097",
          "price": 1.56,
          "size": 2000.0,
          "notional": 3120.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 69928,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "288",
          "timestamp": "2026-04-10T07:48:23.276526",
          "price": 1.56,
          "size": 2000.0,
          "notional": 3120.0,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 69927,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "287",
          "timestamp": "2026-04-10T07:47:35.100613",
          "price": 1.57,
          "size": 2000.0,
          "notional": 3140.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 69926,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "286",
          "timestamp": "2026-04-10T07:47:35.100613",
          "price": 1.57,
          "size": 2000.0,
          "notional": 3140.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 69926,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "285",
          "timestamp": "2026-04-10T07:47:25.707152",
          "price": 1.56,
          "size": 6000.0,
          "notional": 9360.0,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 69925,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "284",
          "timestamp": "2026-04-10T07:47:15.162096",
          "price": 1.56,
          "size": 8000.0,
          "notional": 12480.0,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 69924,
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
      "total_trades": 107980,
      "price_moving_trades": 16545,
      "pct_price_moving": 15.322281904056306,
      "all_movers": {
        "count": 16545,
        "avg_size": 22188.693546086433,
        "median_size": 9300.0,
        "retail_count": 161,
        "mixed_count": 0,
        "institutional_count": 6051,
        "ambiguous_count": 2274,
        "unobservable_count": 8059,
        "retail_pct": 0.9731036566938652,
        "mixed_pct": 0.0,
        "instit_pct": 36.57298277425204,
        "unclear_pct": 62.453913569054095
      },
      "positive_movers": {
        "count": 8274,
        "avg_size": 21452.057000241723,
        "median_size": 8140.0,
        "retail_count": 14,
        "mixed_count": 0,
        "institutional_count": 3092,
        "ambiguous_count": 1093,
        "unobservable_count": 4075,
        "retail_pct": 0.1692047377326565,
        "mixed_pct": 0.0,
        "instit_pct": 37.37007493352671,
        "unclear_pct": 62.460720328740635
      },
      "negative_movers": {
        "count": 8271,
        "avg_size": 22925.597279651796,
        "median_size": 9420.0,
        "retail_count": 147,
        "mixed_count": 0,
        "institutional_count": 2959,
        "ambiguous_count": 1181,
        "unobservable_count": 3984,
        "retail_pct": 1.7772941603191876,
        "mixed_pct": 0.0,
        "instit_pct": 35.77560149921412,
        "unclear_pct": 62.447104340466694
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
          "opening": 0.0004613382408406961,
          "continuous": 0.9667253160451595,
          "closing": 0.030137198755327145,
          "auctions": 0.030598536996167842,
          "other": 0.002676146958672658
        },
        "1M": {
          "opening": 0.002052166707455766,
          "continuous": 0.958578699954202,
          "closing": 0.037284703744072036,
          "auctions": 0.039336870451527804,
          "other": 0.0020844295942702156
        },
        "3M": {
          "opening": 0.0014788290426520534,
          "continuous": 0.9723389224878651,
          "closing": 0.024018018366028005,
          "auctions": 0.025496847408680058,
          "other": 0.002164230103454897
        },
        "6M": {
          "opening": 0.0016901328828396976,
          "continuous": 0.9678972530698474,
          "closing": 0.0275469366391127,
          "auctions": 0.0292370695219524,
          "other": 0.0028656774082003026
        }
      },
      "hhi": {
        "1D": 0.15647667090059503,
        "1M": 0.15532460081245902,
        "3M": 0.15756892532636174,
        "6M": 0.15352940763016007
      },
      "profile_buckets": [
        {
          "time": "09:00",
          "avg_share": 0.0013
        },
        {
          "time": "09:30",
          "avg_share": 0.1964
        },
        {
          "time": "10:00",
          "avg_share": 0.1083
        },
        {
          "time": "10:30",
          "avg_share": 0.0869
        },
        {
          "time": "11:00",
          "avg_share": 0.0841
        },
        {
          "time": "11:30",
          "avg_share": 0.0416
        },
        {
          "time": "12:00",
          "avg_share": 0.0283
        },
        {
          "time": "13:00",
          "avg_share": 0.0819
        },
        {
          "time": "13:30",
          "avg_share": 0.0645
        },
        {
          "time": "14:00",
          "avg_share": 0.0677
        },
        {
          "time": "14:30",
          "avg_share": 0.0591
        },
        {
          "time": "15:00",
          "avg_share": 0.0596
        },
        {
          "time": "15:30",
          "avg_share": 0.0967
        },
        {
          "time": "16:00",
          "avg_share": 0.0237
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "1313",
          "auctions_pct": 2.80041095214438,
          "hhi": 0.14637472598126652,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400",
            "you": true
          }
        },
        {
          "ticker": "6655",
          "auctions_pct": 1.6796481081157073,
          "hhi": 0.13624481319803985,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "2128",
          "auctions_pct": 4.009413178222286,
          "hhi": 0.12841010036115724,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "2233",
          "auctions_pct": 1.3999135005894996,
          "hhi": 0.1469172859899001,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "3323",
          "auctions_pct": 7.093504122896024,
          "hhi": 0.12200601818616086,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "914",
          "auctions_pct": 6.24076834520276,
          "hhi": 0.12801324758828775,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "1783",
          "auctions_pct": 2.0650252654289014,
          "hhi": 0.13338025433731196,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "1757",
          "auctions_pct": 4.813305415294184,
          "hhi": 0.2694693234670057,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "1186",
          "auctions_pct": 2.3181317147516216,
          "hhi": 0.14287304002676218,
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
