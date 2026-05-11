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
      "ticker": "6682",
      "name": "PHANCY",
      "marketCap": 11650949632.16,
      "sector": "Digital Solution Services",
      "industry": "Information Technology - Software & Services"
    },
    {
      "ticker": "9678",
      "name": "UNISOUND",
      "marketCap": 13674113145.0,
      "sector": "Digital Solution Services",
      "industry": "Information Technology - Software & Services"
    },
    {
      "ticker": "6082",
      "name": "BIREN TECH",
      "marketCap": 54038044080.0,
      "sector": "Digital Solution Services",
      "industry": "Information Technology - Software & Services"
    },
    {
      "ticker": "2498",
      "name": "ROBOSENSE",
      "marketCap": 16149252072.600002,
      "sector": "Digital Solution Services",
      "industry": "Information Technology - Software & Services"
    },
    {
      "ticker": "6636",
      "name": "EXTREME VISION",
      "marketCap": 11976769677.599998,
      "sector": "Digital Solution Services",
      "industry": "Information Technology - Software & Services"
    },
    {
      "ticker": "2525",
      "name": "HESAI-W",
      "marketCap": 24141591425.0,
      "sector": "Digital Solution Services",
      "industry": "Information Technology - Software & Services"
    },
    {
      "ticker": "6651",
      "name": "51WORLD",
      "marketCap": 20101527916.7,
      "sector": "Digital Solution Services",
      "industry": "Information Technology - Software & Services"
    },
    {
      "ticker": "9880",
      "name": "UBTECH ROBOTICS",
      "marketCap": 46345960911.6,
      "sector": "Digital Solution Services",
      "industry": "Information Technology - Software & Services"
    },
    {
      "ticker": "856",
      "name": "VSTECS",
      "marketCap": 13997624500.419998,
      "sector": "Digital Solution Services",
      "industry": "Information Technology - Software & Services"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XHKG",
    "currency": "HKD",
    "ticker": "6682",
    "company": "PHANCY",
    "asof_date": "2026-04-23",
    "industry": "Information Technology - Software & Services",
    "sector": "Digital Solution Services",
    "market_cap_display": "11.7B",
    "market_cap_category": "large",
    "universe_total": 2570,
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
          "score_pca": 98.28793774319065,
          "score_pca_percentile": 98.28793774319065,
          "rank_pca": 45,
          "total": 2570,
          "adv_notional_sgd": 449787000.0,
          "adv_volume_shares": 11836500.0,
          "free_float_shares": 242452532.0,
          "turnover_ratio": 0.04881986549020655,
          "votes": 14721.0,
          "trades": 14721.0,
          "spread_pct": 0.0009080263570692376,
          "spread_ticks": null,
          "amihud": 8.982927564389465e-11,
          "volatility": 0.7166373783086302
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5504712752426593,
          "loadings": {
            "log_adv": 0.5363474722282557,
            "log_trades": 0.4985896196111139,
            "log_turnover": 0.5027586184314453,
            "neg_spread": 0.40039359295738686,
            "neg_amihud": 0.04561677793545561,
            "neg_vol": -0.22040333965884298
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
          "peer_median_adv": 150220256.0,
          "peer_median_score_pca": 92.95719844357976,
          "peer_median_trades": 4336.0,
          "peer_median_volatility": 0.6785944688716221,
          "peer_median_spread_pct": 0.002435260536266436,
          "peer_median_spread_ticks": 3.3532955488701477,
          "peer_median_amihud": 2.607636271846712e-10,
          "peer_median_turnover_ratio": 0.011942953786219755,
          "target_vs_peer": {
            "score_pca_delta": 5.33,
            "adv_delta_pct": 199.4,
            "trades_delta_pct": 239.51,
            "volatility_delta_pct": -5.61,
            "spread_pct_delta_pct": 62.71,
            "spread_ticks_delta_pct": null,
            "amihud_delta_pct": 65.55,
            "turnover_ratio_delta_pct": 308.78
          }
        },
        "peer_liquidity": [
          {
            "ticker": "6682",
            "score_pca": 98.28793774319065,
            "rank_pca": 45,
            "adv": 449787000.0,
            "trades": 14721.0,
            "volatility": 0.7166373783086302,
            "spread_pct": 0.0009080263570692376,
            "spread_ticks": null,
            "amihud": 8.982927564389465e-11,
            "turnover_ratio": 0.04881986549020655,
            "is_target": true
          },
          {
            "ticker": "9678",
            "score_pca": 93.81322957198444,
            "rank_pca": 160,
            "adv": 140572160.0,
            "trades": 1589.0,
            "volatility": 0.9909818369444198,
            "spread_pct": 0.002534961983159962,
            "spread_ticks": 4.45601652608022,
            "amihud": 5.034606808024624e-10,
            "turnover_ratio": 0.028094653903069595,
            "is_target": false
          },
          {
            "ticker": "6082",
            "score_pca": 96.4591439688716,
            "rank_pca": 92,
            "adv": 278710175.0,
            "trades": 9089.0,
            "volatility": 0.9962517217761863,
            "spread_pct": 0.00233555908937291,
            "spread_ticks": null,
            "amihud": 2.6162183230901647e-10,
            "turnover_ratio": 0.005215617160065057,
            "is_target": false
          },
          {
            "ticker": "2498",
            "score_pca": 92.10116731517509,
            "rank_pca": 204,
            "adv": 159868352.0,
            "trades": 5774.0,
            "volatility": 0.2857776658502421,
            "spread_pct": 0.0012351970382632157,
            "spread_ticks": null,
            "amihud": 6.207676269145679e-11,
            "turnover_ratio": 0.011985652291006154,
            "is_target": false
          },
          {
            "ticker": "6636",
            "score_pca": 90.70038910505836,
            "rank_pca": 240,
            "adv": 101808000.0,
            "trades": 1662.0,
            "volatility": 0.9047976794508545,
            "spread_pct": 0.007513500680306551,
            "spread_ticks": 8.851109139307898,
            "amihud": 1.9259629044136946e-10,
            "turnover_ratio": 0.012663430496454239,
            "is_target": false
          },
          {
            "ticker": "2525",
            "score_pca": 89.37743190661479,
            "rank_pca": 274,
            "adv": 140149926.0,
            "trades": 2898.0,
            "volatility": 0.43016079377582994,
            "spread_pct": 0.0010690167408252784,
            "spread_ticks": 1.8228627740822863,
            "amihud": 2.59905422060326e-10,
            "turnover_ratio": 0.006360832113204401,
            "is_target": false
          },
          {
            "ticker": "6651",
            "score_pca": 98.67704280155642,
            "rank_pca": 35,
            "adv": 423399784.8,
            "trades": 8626.0,
            "volatility": 1.4208476189117287,
            "spread_pct": 0.0034007698559826226,
            "spread_ticks": 4.034617532104969,
            "amihud": 2.7971524030169886e-10,
            "turnover_ratio": 0.03448948175513656,
            "is_target": false
          },
          {
            "ticker": "9880",
            "score_pca": 94.98054474708171,
            "rank_pca": 130,
            "adv": 407184680.0,
            "trades": 8070.0,
            "volatility": 0.3513018416547285,
            "spread_pct": 0.0012841005943417798,
            "spread_ticks": 1.3537326877603872,
            "amihud": 5.274082701091392e-11,
            "turnover_ratio": 0.011900255281433358,
            "is_target": false
          },
          {
            "ticker": "856",
            "score_pca": 82.60700389105058,
            "rank_pca": 448,
            "adv": 44777210.34,
            "trades": 1031.0,
            "volatility": 0.45239125829238974,
            "spread_pct": 0.002833414799981459,
            "spread_ticks": 2.671973565635326,
            "amihud": 7.137283150051152e-10,
            "turnover_ratio": 0.0074798428402388486,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Digital Solution Services",
          "sector_count": 67,
          "market_count": 2570,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.44682272023595204,
              "median": 0.3002961195058443,
              "min": 0.0,
              "max": 8.637276202991943,
              "p5": 0.0,
              "p95": 1.4793321759752576,
              "count": 2570
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 66497406.433889784,
              "median": 228680.0,
              "min": 0.0,
              "max": 11632693680.0,
              "p5": 0.0,
              "p95": 288439431.9119974,
              "count": 2570
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.045888778065762685,
              "median": 0.02660691120716105,
              "min": 0.0004200936271142237,
              "max": 0.7648559970834851,
              "p5": 0.0013440322613031467,
              "p95": 0.1510010628213596,
              "count": 2570
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006985206755037552,
              "median": 0.000946296785815808,
              "min": 0.0,
              "max": 1.1297316442194167,
              "p5": 0.0,
              "p95": 0.024861697689331455,
              "count": 2551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.389363263394742e-06,
              "median": 6.446372522233959e-09,
              "min": 0.0,
              "max": 0.003047619047619048,
              "p5": 0.0,
              "p95": 6.115903453724737e-06,
              "count": 2153
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1211.7704280155642,
              "median": 21.0,
              "min": 0.0,
              "max": 70283.0,
              "p5": 0.0,
              "p95": 6509.299999999987,
              "count": 2570
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5753857811700009,
              "median": 0.45239125829238974,
              "min": 0.0,
              "max": 2.5012795102754373,
              "p5": 0.0,
              "p95": 1.5959410634016433,
              "count": 67
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 295772896.3547589,
              "median": 4476400.0,
              "min": 0.0,
              "max": 11632693680.0,
              "p5": 0.0,
              "p95": 960664761.825998,
              "count": 67
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03429312446828842,
              "median": 0.008628338213113321,
              "min": 0.0004200936271142237,
              "max": 0.5024630541871921,
              "p5": 0.0011568810739799962,
              "p95": 0.10446519246519237,
              "count": 67
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.008172956234966363,
              "median": 0.003010393049795144,
              "min": 0.0,
              "max": 0.08053252433841708,
              "p5": 0.0,
              "p95": 0.03307736094009393,
              "count": 66
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.1433303535892768e-06,
              "median": 8.125066215983134e-10,
              "min": 0.0,
              "max": 3.713606654783124e-05,
              "p5": 0.0,
              "p95": 2.5916702099657903e-06,
              "count": 61
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 3352.910447761194,
              "median": 170.0,
              "min": 0.0,
              "max": 70283.0,
              "p5": 0.0,
              "p95": 13741.599999999995,
              "count": 67
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 212058786.01749998,
              "median": 150220256.0,
              "min": 44777210.34,
              "max": 423399784.8,
              "p5": 64737986.721,
              "p95": 417724498.12,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 4842.375,
              "median": 4336.0,
              "min": 1031.0,
              "max": 9089.0,
              "p5": 1226.3,
              "p95": 8926.949999999999,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7290638020820475,
              "median": 0.6785944688716221,
              "min": 0.2857776658502421,
              "max": 1.4208476189117287,
              "p5": 0.30871112738181233,
              "p95": 1.2722390549142886,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0027758150977792223,
              "median": 0.002435260536266436,
              "min": 0.0010690167408252784,
              "max": 0.007513500680306551,
              "p5": 0.0011271798449285564,
              "p95": 0.006074044891793174,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.865052037495181,
              "median": 3.3532955488701477,
              "min": 1.3537326877603872,
              "max": 8.851109139307898,
              "p5": 1.471015209340862,
              "p95": 7.752335986000978,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.9073067132779484e-10,
              "median": 2.607636271846712e-10,
              "min": 5.274082701091392e-11,
              "max": 7.137283150051152e-10,
              "p5": 5.6008404499103926e-11,
              "p95": 6.401346430341866e-10,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.014773720730076026,
              "median": 0.011942953786219755,
              "min": 0.005215617160065057,
              "max": 0.03448948175513656,
              "p5": 0.005616442393663827,
              "p95": 0.03225129200691312,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": -0.04040404040404044,
            "market": -0.0032925940906346485,
            "sector": -0.012376237623762387,
            "peers": -0.03419224427767564,
            "vs_market": -0.037111446313405794,
            "vs_sector": -0.028027802780278055,
            "vs_peers": -0.006211796126364799
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 95.56420233463035,
          "score_pca_percentile": 95.56420233463035,
          "rank_pca": 115,
          "total": 2570,
          "adv_notional_sgd": 188892370.0,
          "adv_volume_shares": 4811800.0,
          "free_float_shares": 242452532.0,
          "turnover_ratio": 0.019846359039055118,
          "votes": 6698.0,
          "trades": 6698.0,
          "spread_pct": 0.001235499976190168,
          "spread_ticks": null,
          "amihud": 1.3405093429812347e-10,
          "volatility": 0.8477894301309841
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5860345951947027,
          "loadings": {
            "log_adv": 0.5128675414231458,
            "log_trades": 0.46522661211089344,
            "log_turnover": 0.47044702174282327,
            "neg_spread": 0.46036931664900843,
            "neg_amihud": 0.28512457107875067,
            "neg_vol": 0.0772965414943602
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
          "peer_median_adv": 161132167.5,
          "peer_median_score_pca": 90.93385214007782,
          "peer_median_trades": 3654.0,
          "peer_median_volatility": 1.0118193873439818,
          "peer_median_spread_pct": 0.0021405217860736656,
          "peer_median_spread_ticks": 3.297602139921965,
          "peer_median_amihud": 1.9024804005742913e-10,
          "peer_median_turnover_ratio": 0.01599280580965127,
          "target_vs_peer": {
            "score_pca_delta": 4.63,
            "adv_delta_pct": 17.2,
            "trades_delta_pct": 83.31,
            "volatility_delta_pct": 16.21,
            "spread_pct_delta_pct": 42.28,
            "spread_ticks_delta_pct": null,
            "amihud_delta_pct": 29.54,
            "turnover_ratio_delta_pct": 24.1
          }
        },
        "peer_liquidity": [
          {
            "ticker": "6682",
            "score_pca": 95.56420233463035,
            "rank_pca": 115,
            "adv": 188892370.0,
            "trades": 6698.0,
            "volatility": 0.8477894301309841,
            "spread_pct": 0.001235499976190168,
            "spread_ticks": null,
            "amihud": 1.3405093429812347e-10,
            "turnover_ratio": 0.019846359039055118,
            "is_target": true
          },
          {
            "ticker": "9678",
            "score_pca": 87.04280155642023,
            "rank_pca": 334,
            "adv": 122042208.0,
            "trades": 1507.0,
            "volatility": 1.542289458013374,
            "spread_pct": 0.0028735506549793896,
            "spread_ticks": 4.754231393461628,
            "amihud": 2.8129327352799103e-10,
            "turnover_ratio": 0.028094653903069595,
            "is_target": false
          },
          {
            "ticker": "6082",
            "score_pca": 93.92996108949416,
            "rank_pca": 157,
            "adv": 250963263.70000002,
            "trades": 8226.0,
            "volatility": 1.250902489623398,
            "spread_pct": 0.0016405272275900706,
            "spread_ticks": null,
            "amihud": 1.2589298454215972e-10,
            "turnover_ratio": 0.005870215149356309,
            "is_target": false
          },
          {
            "ticker": "2498",
            "score_pca": 95.7976653696498,
            "rank_pca": 109,
            "adv": 196233215.99999997,
            "trades": 6753.0,
            "volatility": 0.41583973351748965,
            "spread_pct": 0.0010646496615409264,
            "spread_ticks": null,
            "amihud": 9.260186152769255e-11,
            "turnover_ratio": 0.01367957836748219,
            "is_target": false
          },
          {
            "ticker": "6636",
            "score_pca": 86.10894941634241,
            "rank_pca": 358,
            "adv": 113915585.0,
            "trades": 2463.0,
            "volatility": 1.9620833973621579,
            "spread_pct": 0.0056883814016052995,
            "spread_ticks": 8.971299791658165,
            "amihud": 6.656074250009868e-10,
            "turnover_ratio": 0.01648902837038307,
            "is_target": false
          },
          {
            "ticker": "2525",
            "score_pca": 89.96108949416343,
            "rank_pca": 259,
            "adv": 151832502.0,
            "trades": 2898.0,
            "volatility": 0.7013668307612647,
            "spread_pct": 0.0009833716719239885,
            "spread_ticks": 1.7205805731298847,
            "amihud": 2.2104958557503253e-10,
            "turnover_ratio": 0.006891785096971916,
            "is_target": false
          },
          {
            "ticker": "6651",
            "score_pca": 91.90661478599222,
            "rank_pca": 209,
            "adv": 170431833.0,
            "trades": 4410.0,
            "volatility": 1.4774971814375608,
            "spread_pct": 0.0042405322087586406,
            "spread_ticks": 4.096377696660779,
            "amihud": 1.5944649453982575e-10,
            "turnover_ratio": 0.02000591683505295,
            "is_target": false
          },
          {
            "ticker": "9880",
            "score_pca": 97.82101167315174,
            "rank_pca": 57,
            "adv": 502766730.0,
            "trades": 10840.0,
            "volatility": 0.7727362850645657,
            "spread_pct": 0.001162650976673007,
            "spread_ticks": 1.3537326877603872,
            "amihud": 5.2480244234346835e-11,
            "turnover_ratio": 0.017188270709488664,
            "is_target": false
          },
          {
            "ticker": "856",
            "score_pca": 89.10505836575877,
            "rank_pca": 281,
            "adv": 88378800.0,
            "trades": 2121.0,
            "volatility": 0.6153139194593026,
            "spread_pct": 0.0026405163445572606,
            "spread_ticks": 2.498826583183151,
            "amihud": 2.396643009904873e-10,
            "turnover_ratio": 0.015496583248919468,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Digital Solution Services",
          "sector_count": 67,
          "market_count": 2570,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6921305704877337,
              "median": 0.5450501736672351,
              "min": 0.0,
              "max": 27.98817803324715,
              "p5": 0.20315172868936052,
              "p95": 1.615123768514041,
              "count": 2570
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 61666171.58483452,
              "median": 220280.0,
              "min": 0.0,
              "max": 11207547960.0,
              "p5": 0.0,
              "p95": 254724843.5729999,
              "count": 2570
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04608844244431638,
              "median": 0.029270415520647887,
              "min": 0.000587472082824556,
              "max": 0.5912209998910793,
              "p5": 0.0014331670193849452,
              "p95": 0.1449741704270304,
              "count": 2570
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004268217053388044,
              "median": 0.0009111829995295472,
              "min": 0.0,
              "max": 0.4466650060282735,
              "p5": 0.0,
              "p95": 0.01640470430626092,
              "count": 2551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.2758110261957494e-06,
              "median": 4.941785763703751e-08,
              "min": 0.0,
              "max": 0.00014832162373145977,
              "p5": 3.9594667713996224e-11,
              "p95": 5.345874664056457e-06,
              "count": 2565
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1121.7301556420234,
              "median": 20.5,
              "min": 0.0,
              "max": 67896.0,
              "p5": 0.0,
              "p95": 5968.599999999991,
              "count": 2570
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.8192704021795041,
              "median": 0.6530493482323714,
              "min": 0.16891188819706685,
              "max": 3.333230309982013,
              "p5": 0.3154674141104542,
              "p95": 1.6069611076423027,
              "count": 67
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 274844742.5450521,
              "median": 5865106.605898649,
              "min": 0.0,
              "max": 11207547960.0,
              "p5": 1972.3,
              "p95": 782181077.901999,
              "count": 67
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03037652320624882,
              "median": 0.009157259424585312,
              "min": 0.0008848978900537066,
              "max": 0.28621222477413416,
              "p5": 0.0011845056765281553,
              "p95": 0.10417301977385922,
              "count": 67
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0071414816281324235,
              "median": 0.0028725790135827553,
              "min": 0.0,
              "max": 0.07194958127087868,
              "p5": 1.0701735529242654e-05,
              "p95": 0.02748395976306386,
              "count": 66
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.561873132339205e-07,
              "median": 2.595330722665198e-09,
              "min": 0.0,
              "max": 9.824147755182241e-06,
              "p5": 3.360503285732976e-11,
              "p95": 1.9655877021806102e-06,
              "count": 67
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 3106.4701492537315,
              "median": 248.0,
              "min": 0.0,
              "max": 62060.0,
              "p5": 2.0,
              "p95": 11108.8,
              "count": 67
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 199570517.2125,
              "median": 161132167.5,
              "min": 88378800.0,
              "max": 502766730.0,
              "p5": 97316674.75,
              "p95": 414635516.79499984,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 4902.25,
              "median": 3654.0,
              "min": 1507.0,
              "max": 10840.0,
              "p5": 1721.9,
              "p95": 9925.099999999999,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.092253661904889,
              "median": 1.0118193873439818,
              "min": 0.41583973351748965,
              "max": 1.9620833973621579,
              "p5": 0.4856556985971242,
              "p95": 1.8151555185900832,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.002536772518453573,
              "median": 0.0021405217860736656,
              "min": 0.0009833716719239885,
              "max": 0.0056883814016052995,
              "p5": 0.0010118189682899168,
              "p95": 0.005181634184108969,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.8991747876423326,
              "median": 3.297602139921965,
              "min": 1.3537326877603872,
              "max": 8.971299791658165,
              "p5": 1.4454446591027617,
              "p95": 7.91703269210903,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.297545212423153e-10,
              "median": 1.9024804005742913e-10,
              "min": 5.2480244234346835e-11,
              "max": 6.656074250009868e-10,
              "p5": 6.652281028701783e-11,
              "p95": 5.31097471985438e-10,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.015464503960090518,
              "median": 0.01599280580965127,
              "min": 0.005870215149356309,
              "max": 0.028094653903069595,
              "p5": 0.0062277646310217715,
              "p95": 0.025263595929263763,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.10144927536231907,
            "market": 0.02414767314911015,
            "sector": -0.024108534181391028,
            "peers": -0.008344949422129155,
            "vs_market": 0.07730160221320892,
            "vs_sector": 0.1255578095437101,
            "vs_peers": 0.10979422478444822
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 95.87548638132296,
          "score_pca_percentile": 95.87548638132296,
          "rank_pca": 107,
          "total": 2570,
          "adv_notional_sgd": 201681200.0,
          "adv_volume_shares": 4649600.0,
          "free_float_shares": 242452532.0,
          "turnover_ratio": 0.019177362107317568,
          "votes": 6520.0,
          "trades": 6520.0,
          "spread_pct": 0.0013001311758956094,
          "spread_ticks": 1.8517345399698342,
          "amihud": 1.1670156218658796e-10,
          "volatility": 0.6393452237068807
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.6255442573263524,
          "loadings": {
            "log_adv": 0.4960780653441559,
            "log_trades": 0.44854955472282976,
            "log_turnover": 0.45072408585687446,
            "neg_spread": 0.45667186205682153,
            "neg_amihud": 0.35109813273997315,
            "neg_vol": 0.13318618570593382
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
          "peer_median_adv": 117897147.0,
          "peer_median_score_pca": 84.61089494163424,
          "peer_median_trades": 2271.5,
          "peer_median_volatility": 0.7882587681237566,
          "peer_median_spread_pct": 0.0023728964615940895,
          "peer_median_spread_ticks": 3.6841060788046285,
          "peer_median_amihud": 2.510173789722244e-10,
          "peer_median_turnover_ratio": 0.009127034926483743,
          "target_vs_peer": {
            "score_pca_delta": 11.26,
            "adv_delta_pct": 71.1,
            "trades_delta_pct": 187.03,
            "volatility_delta_pct": 18.89,
            "spread_pct_delta_pct": 45.21,
            "spread_ticks_delta_pct": -49.74,
            "amihud_delta_pct": 53.51,
            "turnover_ratio_delta_pct": 110.12
          }
        },
        "peer_liquidity": [
          {
            "ticker": "6682",
            "score_pca": 95.87548638132296,
            "rank_pca": 107,
            "adv": 201681200.0,
            "trades": 6520.0,
            "volatility": 0.6393452237068807,
            "spread_pct": 0.0013001311758956094,
            "spread_ticks": 1.8517345399698342,
            "amihud": 1.1670156218658796e-10,
            "turnover_ratio": 0.019177362107317568,
            "is_target": true
          },
          {
            "ticker": "9678",
            "score_pca": 81.32295719844358,
            "rank_pca": 481,
            "adv": 115232879.99999999,
            "trades": 1378.0,
            "volatility": 1.8784166094208476,
            "spread_pct": 0.0030916023341453886,
            "spread_ticks": 4.766521264994547,
            "amihud": 2.8129327352799103e-10,
            "turnover_ratio": 0.025039332790470697,
            "is_target": false
          },
          {
            "ticker": "6082",
            "score_pca": 91.55642023346303,
            "rank_pca": 218,
            "adv": 199285690.0,
            "trades": 6070.0,
            "volatility": 0.9346997395781326,
            "spread_pct": 0.0016566744377585192,
            "spread_ticks": null,
            "amihud": 1.5485190924720344e-10,
            "turnover_ratio": 0.004853172509570224,
            "is_target": false
          },
          {
            "ticker": "2498",
            "score_pca": 95.91439688715954,
            "rank_pca": 106,
            "adv": 172600829.99999997,
            "trades": 6704.0,
            "volatility": 0.41545757430307906,
            "spread_pct": 0.0010975318749013407,
            "spread_ticks": null,
            "amihud": 9.589161957687783e-11,
            "turnover_ratio": 0.012622940798384769,
            "is_target": false
          },
          {
            "ticker": "6636",
            "score_pca": 81.90661478599222,
            "rank_pca": 466,
            "adv": 113915585.0,
            "trades": 2463.0,
            "volatility": 1.9620833973621579,
            "spread_pct": 0.0056883814016052995,
            "spread_ticks": 8.971299791658165,
            "amihud": 6.656074250009868e-10,
            "turnover_ratio": 0.01648902837038307,
            "is_target": false
          },
          {
            "ticker": "2525",
            "score_pca": 87.31517509727627,
            "rank_pca": 327,
            "adv": 120561414.0,
            "trades": 2080.0,
            "volatility": 0.5972480062765155,
            "spread_pct": 0.0011837976762115916,
            "spread_ticks": 1.7306598832859494,
            "amihud": 2.2074148441645784e-10,
            "turnover_ratio": 0.004731398108316714,
            "is_target": false
          },
          {
            "ticker": "6651",
            "score_pca": 78.715953307393,
            "rank_pca": 548,
            "adv": 62626230.0,
            "trades": 1525.0,
            "volatility": 1.3985670014557874,
            "spread_pct": 0.007235669031246091,
            "spread_ticks": 12.711398800126302,
            "amihud": 6.136548112157235e-10,
            "turnover_ratio": 0.004803703162503609,
            "is_target": false
          },
          {
            "ticker": "9880",
            "score_pca": 98.40466926070039,
            "rank_pca": 42,
            "adv": 658555275.0,
            "trades": 12215.0,
            "volatility": 0.6418177966693807,
            "spread_pct": 0.00107544782884749,
            "spread_ticks": 1.3289687669404946,
            "amihud": 3.5989390161260314e-11,
            "turnover_ratio": 0.01796133476627474,
            "is_target": false
          },
          {
            "ticker": "856",
            "score_pca": 80.58365758754864,
            "rank_pca": 500,
            "adv": 28662873.8,
            "trades": 930.0,
            "volatility": 0.5243799012650163,
            "spread_pct": 0.00308911848542966,
            "spread_ticks": 2.6016908926147098,
            "amihud": 4.3368005930166223e-10,
            "turnover_ratio": 0.005631129054582716,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Digital Solution Services",
          "sector_count": 67,
          "market_count": 2570,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7054261639368724,
              "median": 0.5726697411393592,
              "min": 0.0,
              "max": 16.135908972680973,
              "p5": 0.2263807866630155,
              "p95": 1.558374626991632,
              "count": 2570
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 59978210.70502247,
              "median": 226680.0,
              "min": 0.0,
              "max": 13045753760.0,
              "p5": 0.0,
              "p95": 235137595.7589998,
              "count": 2570
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04294163688752076,
              "median": 0.02770394130441295,
              "min": 0.0005681922931204329,
              "max": 0.586235634471959,
              "p5": 0.0014441895608789464,
              "p95": 0.13511356651933285,
              "count": 2570
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003932979333257075,
              "median": 0.0008686375788138418,
              "min": 0.0,
              "max": 0.38612653752209847,
              "p5": 0.0,
              "p95": 0.015343502951144412,
              "count": 2551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.889665562812844e-07,
              "median": 4.435807406809365e-08,
              "min": 0.0,
              "max": 2.0997788670380663e-05,
              "p5": 4.827399748713608e-11,
              "p95": 3.6793456782680804e-06,
              "count": 2570
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1073.0515564202335,
              "median": 20.0,
              "min": 0.0,
              "max": 78392.0,
              "p5": 0.0,
              "p95": 5796.199999999966,
              "count": 2570
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.8441741854810896,
              "median": 0.6506182523894963,
              "min": 0.1278565851804465,
              "max": 2.6384840702446897,
              "p5": 0.34945160828049104,
              "p95": 1.9141238085500745,
              "count": 67
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 283218375.4165071,
              "median": 5743776.0,
              "min": 0.0,
              "max": 13045753760.0,
              "p5": 4577.0,
              "p95": 852071373.5099989,
              "count": 67
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.030399824045770046,
              "median": 0.010096639261502968,
              "min": 0.0009577517471627137,
              "max": 0.3470779183449777,
              "p5": 0.001218697726116797,
              "p95": 0.10457702945562525,
              "count": 67
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005579544650523418,
              "median": 0.002720149282841685,
              "min": 0.0,
              "max": 0.05018474439542272,
              "p5": 2.051053089159025e-05,
              "p95": 0.01887335527205686,
              "count": 66
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.14478409104388e-07,
              "median": 3.8877016010187124e-09,
              "min": 9.98857815410754e-13,
              "max": 4.9582093780988785e-06,
              "p5": 3.921288679486821e-11,
              "p95": 1.667701040617398e-06,
              "count": 67
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2763.007462686567,
              "median": 251.0,
              "min": 0.0,
              "max": 59877.0,
              "p5": 2.0,
              "p95": 11935.099999999997,
              "count": 67
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 183930097.225,
              "median": 117897147.0,
              "min": 28662873.8,
              "max": 658555275.0,
              "p5": 40550048.47,
              "p95": 497810920.24999976,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 4170.625,
              "median": 2271.5,
              "min": 930.0,
              "max": 12215.0,
              "p5": 1086.8,
              "p95": 10286.149999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.0440837532913645,
              "median": 0.7882587681237566,
              "min": 0.41545757430307906,
              "max": 1.9620833973621579,
              "p5": 0.4535803887397571,
              "p95": 1.9328000215826993,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.003014777883768173,
              "median": 0.0023728964615940895,
              "min": 0.00107544782884749,
              "max": 0.007235669031246091,
              "p5": 0.0010831772449663379,
              "p95": 0.006694118360871813,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 5.351756566603361,
              "median": 3.6841060788046285,
              "min": 1.3289687669404946,
              "max": 12.711398800126302,
              "p5": 1.4293915460268583,
              "p95": 11.776374048009268,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.127137465560204e-10,
              "median": 2.510173789722244e-10,
              "min": 3.5989390161260314e-11,
              "max": 6.656074250009868e-10,
              "p5": 5.695517045672645e-11,
              "p95": 6.474240101761446e-10,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.011516504945060818,
              "median": 0.009127034926483743,
              "min": 0.004731398108316714,
              "max": 0.025039332790470697,
              "p5": 0.004756704877282127,
              "p95": 0.022562033482002107,
              "count": 8
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": -0.31593159315931585,
            "market": 0.041011153040892534,
            "sector": -0.18260918171127327,
            "peers": -0.21959407836911926,
            "vs_market": -0.3569427462002084,
            "vs_sector": -0.13332241144804258,
            "vs_peers": -0.09633751479019659
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 96.18677042801556,
          "score_pca_percentile": 96.18677042801556,
          "rank_pca": 99,
          "total": 2570,
          "adv_notional_sgd": 224795384.0,
          "adv_volume_shares": 4838500.0,
          "free_float_shares": 242452532.0,
          "turnover_ratio": 0.019956483688114257,
          "votes": 6674.0,
          "trades": 6674.0,
          "spread_pct": 0.0013203234951782402,
          "spread_ticks": 1.761640456367561,
          "amihud": 1.0023983636466892e-10,
          "volatility": 0.6498012384390802
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.6305152469330463,
          "loadings": {
            "log_adv": 0.4957103694432075,
            "log_trades": 0.4492451456660449,
            "log_turnover": 0.4496576460345292,
            "neg_spread": 0.46029419827062906,
            "neg_amihud": 0.3525134547982796,
            "neg_vol": 0.11883410835799404
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
          "peer_median_adv": 106855321.0,
          "peer_median_score_pca": 85.93385214007782,
          "peer_median_trades": 2101.25,
          "peer_median_volatility": 0.8159269787075969,
          "peer_median_spread_pct": 0.002137773323306847,
          "peer_median_spread_ticks": 4.087940834157531,
          "peer_median_amihud": 3.0430991113725823e-10,
          "peer_median_turnover_ratio": 0.009659480326629721,
          "target_vs_peer": {
            "score_pca_delta": 10.25,
            "adv_delta_pct": 110.4,
            "trades_delta_pct": 217.62,
            "volatility_delta_pct": 20.36,
            "spread_pct_delta_pct": 38.24,
            "spread_ticks_delta_pct": -56.91,
            "amihud_delta_pct": 67.06,
            "turnover_ratio_delta_pct": 106.6
          }
        },
        "peer_liquidity": [
          {
            "ticker": "6682",
            "score_pca": 96.18677042801556,
            "rank_pca": 99,
            "adv": 224795384.0,
            "trades": 6674.0,
            "volatility": 0.6498012384390802,
            "spread_pct": 0.0013203234951782402,
            "spread_ticks": 1.761640456367561,
            "amihud": 1.0023983636466892e-10,
            "turnover_ratio": 0.019956483688114257,
            "is_target": true
          },
          {
            "ticker": "9678",
            "score_pca": 80.23346303501945,
            "rank_pca": 509,
            "adv": 58289352.0,
            "trades": 783.0,
            "volatility": 1.4315075392012093,
            "spread_pct": 0.004152661141643186,
            "spread_ticks": 5.8543759434731015,
            "amihud": 3.506071393969577e-10,
            "turnover_ratio": 0.01294386376842921,
            "is_target": false
          },
          {
            "ticker": "6082",
            "score_pca": 92.91828793774319,
            "rank_pca": 183,
            "adv": 209335418.49,
            "trades": 6244.0,
            "volatility": 0.9716808143280873,
            "spread_pct": 0.001582492509553618,
            "spread_ticks": null,
            "amihud": 1.2589298454215972e-10,
            "turnover_ratio": 0.005195016257146515,
            "is_target": false
          },
          {
            "ticker": "2498",
            "score_pca": 96.26459143968872,
            "rank_pca": 97,
            "adv": 192178699.0,
            "trades": 7351.5,
            "volatility": 0.4332568147612983,
            "spread_pct": 0.0010576288002502223,
            "spread_ticks": null,
            "amihud": 8.758086416844063e-11,
            "turnover_ratio": 0.013952193403360033,
            "is_target": false
          },
          {
            "ticker": "6636",
            "score_pca": 85.52529182879377,
            "rank_pca": 373,
            "adv": 113915585.0,
            "trades": 2463.0,
            "volatility": 1.9620833973621579,
            "spread_pct": 0.0056883814016052995,
            "spread_ticks": 8.971299791658165,
            "amihud": 6.656074250009868e-10,
            "turnover_ratio": 0.01648902837038307,
            "is_target": false
          },
          {
            "ticker": "2525",
            "score_pca": 86.34241245136187,
            "rank_pca": 352,
            "adv": 99795057.0,
            "trades": 1739.5,
            "volatility": 0.6601731430871064,
            "spread_pct": 0.0012101462841641228,
            "spread_ticks": 1.788321481270279,
            "amihud": 2.5801268287755876e-10,
            "turnover_ratio": 0.004171400229055115,
            "is_target": false
          },
          {
            "ticker": "6651",
            "score_pca": 80.03891050583658,
            "rank_pca": 514,
            "adv": 58514250.0,
            "trades": 1515.5,
            "volatility": 1.376263162213936,
            "spread_pct": 0.006779285384082007,
            "spread_ticks": 12.015637648435199,
            "amihud": 6.697274517838324e-10,
            "turnover_ratio": 0.00436829073944722,
            "is_target": false
          },
          {
            "ticker": "9880",
            "score_pca": 99.1828793774319,
            "rank_pca": 22,
            "adv": 798967562.5,
            "trades": 13240.0,
            "volatility": 0.6012680060095252,
            "spread_pct": 0.0010539122972686571,
            "spread_ticks": 1.2913876851415629,
            "amihud": 2.9207943799773524e-11,
            "turnover_ratio": 0.01948533376807875,
            "is_target": false
          },
          {
            "ticker": "856",
            "score_pca": 81.78988326848248,
            "rank_pca": 469,
            "adv": 33997260.8,
            "trades": 950.5,
            "volatility": 0.47103908770148417,
            "spread_pct": 0.002693054137060076,
            "spread_ticks": 2.3215057248419613,
            "amihud": 4.276303584459866e-10,
            "turnover_ratio": 0.006375096884830232,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Digital Solution Services",
          "sector_count": 67,
          "market_count": 2570,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7391826955291299,
              "median": 0.5942736874178158,
              "min": 0.0,
              "max": 33.69227034911436,
              "p5": 0.22074746744764606,
              "p95": 1.5523854340199539,
              "count": 2570
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 56145764.834515855,
              "median": 216647.5,
              "min": 0.0,
              "max": 11463870050.0,
              "p5": 0.0,
              "p95": 210825143.6249999,
              "count": 2570
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04210179416577523,
              "median": 0.02707420995450322,
              "min": 0.0005616996269061497,
              "max": 0.586235634471959,
              "p5": 0.0014027808755638215,
              "p95": 0.13469060668991223,
              "count": 2570
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0035999674216896727,
              "median": 0.0008406243451926764,
              "min": 0.0,
              "max": 0.18345863604845108,
              "p5": 0.0,
              "p95": 0.014337945085637195,
              "count": 2551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.383314168860201e-07,
              "median": 4.662001424208288e-08,
              "min": 0.0,
              "max": 2.961485977790332e-05,
              "p5": 5.195200789240232e-11,
              "p95": 3.531112017226262e-06,
              "count": 2570
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1031.2101167315175,
              "median": 20.0,
              "min": 0.0,
              "max": 89671.5,
              "p5": 0.0,
              "p95": 5626.924999999999,
              "count": 2570
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.8605329493372799,
              "median": 0.7068192673862433,
              "min": 0.1242174199772173,
              "max": 2.6384840702446897,
              "p5": 0.3342309992704644,
              "p95": 1.795693744489396,
              "count": 67
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 264006668.42889616,
              "median": 6322037.43,
              "min": 0.0,
              "max": 11463870050.0,
              "p5": 2867.3,
              "p95": 972563332.525999,
              "count": 67
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.028448036075413165,
              "median": 0.010550884324932364,
              "min": 0.0008593729734103632,
              "max": 0.20782244878418843,
              "p5": 0.0012260005837613883,
              "p95": 0.11237628608372996,
              "count": 67
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0051784323721538236,
              "median": 0.0022897181572325105,
              "min": 0.0,
              "max": 0.03426326325329403,
              "p5": 4.700897468042477e-06,
              "p95": 0.01889382255024268,
              "count": 66
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.0074729953955156e-07,
              "median": 3.2140247698214717e-09,
              "min": 0.0,
              "max": 4.536303782906547e-06,
              "p5": 2.217868054969259e-11,
              "p95": 2.050958746918938e-06,
              "count": 67
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2667.589552238806,
              "median": 333.0,
              "min": 0.0,
              "max": 49627.5,
              "p5": 1.3000000000000003,
              "p95": 12969.249999999996,
              "count": 67
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 195624148.09875,
              "median": 106855321.0,
              "min": 33997260.8,
              "max": 798967562.5,
              "p5": 42499492.72,
              "p95": 592596312.0964997,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 4285.875,
              "median": 2101.25,
              "min": 783.0,
              "max": 13240.0,
              "p5": 841.625,
              "p95": 11179.024999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.9884089955831006,
              "median": 0.8159269787075969,
              "min": 0.4332568147612983,
              "max": 1.9620833973621579,
              "p5": 0.44648061029036334,
              "p95": 1.7763818470058257,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.003027195244453399,
              "median": 0.002137773323306847,
              "min": 0.0010539122972686571,
              "max": 0.006779285384082007,
              "p5": 0.001055213073312205,
              "p95": 0.006397468990215159,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 5.373754712470045,
              "median": 4.087940834157531,
              "min": 1.2913876851415629,
              "max": 12.015637648435199,
              "p5": 1.415621134173742,
              "p95": 11.25455318424094,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.26783356251962e-10,
              "median": 3.0430991113725823e-10,
              "min": 2.9207943799773524e-11,
              "max": 6.697274517838324e-10,
              "p5": 4.963846592880701e-11,
              "p95": 6.682854424098365e-10,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.010372527927591267,
              "median": 0.009659480326629721,
              "min": 0.004171400229055115,
              "max": 0.01948533376807875,
              "p5": 0.004240311907692352,
              "p95": 0.01843662687888526,
              "count": 8
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": -0.4238059135708875,
            "market": 0.09474979759512481,
            "sector": -0.2776481387415741,
            "peers": -0.32273369372088534,
            "vs_market": -0.5185557111660123,
            "vs_sector": -0.14615777482931336,
            "vs_peers": -0.10107221985000214
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "1D score 98.3 vs peer median 93.0 (+5.3 pts).",
        "market_comparison": "Return -4.0% vs peers -3.4%."
      },
      "30d": {
        "liquidity": "Monthly tradability looks strong for the company’s size, supported by a 1M liquidity score of 95.6. That keeps the name accessible in normal conditions.",
        "market_comparison": "Performance has been stronger than the main comparison groups, with a 1M return of +10.1% compared with peers at -0.8% and the market at +2.4%. That matters because the tape has held up better than the broader set."
      },
      "3m": {
        "liquidity": "Liquidity looks solid over the medium term, with a 3M score of 95.9. That suggests access has held up rather than pulled back materially.",
        "market_comparison": "Sector factors account for 52.0% of the current driver mix. That matters because trading conditions are still being shaped meaningfully by broader market moves rather than company-specific news alone."
      },
      "6m": {
        "liquidity": "Structural liquidity is strong, with a 6M score of 96.2 compared with a peer median of 85.9. That supports above-peer accessibility for the stock’s size.",
        "market_comparison": "Primary average daily volume is HK$224.8M compared with a peer median of HK$106.9M. That deeper turnover base helps explain why the name screens more accessible than peers."
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
          "median": 0.2984777750616723,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "29.8%",
          "display_range": null,
          "display_text": "29.8%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 29.8,
          "plain_english": "Market explains about 29.8% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.520267238626,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "52.0%",
          "display_range": null,
          "display_text": "52.0%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 52.0,
          "plain_english": "Sector explains about 52.0% of price moves in the current state."
        },
        "company_share": {
          "median": 0.18125498631232775,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "18.1%",
          "display_range": null,
          "display_text": "18.1%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 18.1,
          "plain_english": "Company-specific explains about 18.1% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 9.21362052186976,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "9.21",
          "display_range": null,
          "display_text": "9.21",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Very high",
          "plain_english": "Very high market link: a 1% market move has lined up with about a 9.21% stock move in the same direction in this state. The multiplier is unusually large and comes from only 251 trading days of history.",
          "value_num": 9.21
        },
        "beta_stock_lag": {
          "median": -0.886360090594361,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.89",
          "display_range": null,
          "display_text": "-0.89",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -0.89
        },
        "beta_sector": {
          "median": 8.079461593010587,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "8.08",
          "display_range": null,
          "display_text": "8.08",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Very high",
          "plain_english": "Very high sector link: a 1% sector move has lined up with about a 8.08% stock move in the same direction in this state. The multiplier is unusually large and comes from only 251 trading days of history.",
          "value_num": 8.08
        },
        "beta_market_lag": {
          "median": -2.5814370049514315,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-2.58",
          "display_range": null,
          "display_text": "-2.58",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -2.58
        },
        "beta_sector_lag": {
          "median": 9.719661947321942,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "9.72",
          "display_range": null,
          "display_text": "9.72",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 9.72
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
          "period_label": "2025-04-07 to 2025-04-30",
          "n_obs": 16,
          "partial_month": true,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5897147258396063,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "59.0%",
            "display_range": null,
            "display_text": "59.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
            "kind": "share_pct",
            "value_pct": 59.0,
            "plain_english": "Sector explains about 59.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.15057206982829888,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "15.1%",
              "display_range": null,
              "display_text": "15.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 15.1,
              "plain_english": "Market explains about 15.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.5897147258396063,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "59.0%",
              "display_range": null,
              "display_text": "59.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 59.0,
              "plain_english": "Sector explains about 59.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.2597132043320949,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.0%",
              "display_range": null,
              "display_text": "26.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 26.0,
              "plain_english": "Company-specific explains about 26.0% of price moves in the current state."
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
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.6030619172892728,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "60.3%",
            "display_range": null,
            "display_text": "60.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 60.3,
            "plain_english": "Company-specific explains about 60.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.06940649967268121,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "6.9%",
              "display_range": null,
              "display_text": "6.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 6.9,
              "plain_english": "Market explains about 6.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3275315830380459,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "32.8%",
              "display_range": null,
              "display_text": "32.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 32.8,
              "plain_english": "Sector explains about 32.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6030619172892728,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "60.3%",
              "display_range": null,
              "display_text": "60.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 60.3,
              "plain_english": "Company-specific explains about 60.3% of price moves in the current state."
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
            "median": 0.5079278018017921,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "50.8%",
            "display_range": null,
            "display_text": "50.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 50.8,
            "plain_english": "Company-specific explains about 50.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.25385453722260437,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "25.4%",
              "display_range": null,
              "display_text": "25.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 25.4,
              "plain_english": "Market explains about 25.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2382176609756036,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "23.8%",
              "display_range": null,
              "display_text": "23.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 23.8,
              "plain_english": "Sector explains about 23.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5079278018017921,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.8%",
              "display_range": null,
              "display_text": "50.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 50.8,
              "plain_english": "Company-specific explains about 50.8% of price moves in the current state."
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
            "median": 0.5958107556726171,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "59.6%",
            "display_range": null,
            "display_text": "59.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 59.6,
            "plain_english": "Company-specific explains about 59.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.027517006483146225,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "2.8%",
              "display_range": null,
              "display_text": "2.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 2.8,
              "plain_english": "Market explains about 2.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.37667223784423676,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.7%",
              "display_range": null,
              "display_text": "37.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 37.7,
              "plain_english": "Sector explains about 37.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5958107556726171,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "59.6%",
              "display_range": null,
              "display_text": "59.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 59.6,
              "plain_english": "Company-specific explains about 59.6% of price moves in the current state."
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
            "median": 0.4458524897805697,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "44.6%",
            "display_range": null,
            "display_text": "44.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 44.6,
            "plain_english": "Company-specific explains about 44.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2320194021645045,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "23.2%",
              "display_range": null,
              "display_text": "23.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 23.2,
              "plain_english": "Market explains about 23.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3221281080549259,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "32.2%",
              "display_range": null,
              "display_text": "32.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 32.2,
              "plain_english": "Sector explains about 32.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4458524897805697,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.6%",
              "display_range": null,
              "display_text": "44.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 44.6,
              "plain_english": "Company-specific explains about 44.6% of price moves in the current state."
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
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.48277196080477963,
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
              "median": 0.1322279592187253,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "13.2%",
              "display_range": null,
              "display_text": "13.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 13.2,
              "plain_english": "Market explains about 13.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3850000799764951,
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
              "plain_english": "Sector explains about 38.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.48277196080477963,
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
          "summary": "Sep: Mostly company-driven."
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
            "median": 0.5095019799322906,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "51.0%",
            "display_range": null,
            "display_text": "51.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 51.0,
            "plain_english": "Company-specific explains about 51.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.043592288886750985,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "4.4%",
              "display_range": null,
              "display_text": "4.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 4.4,
              "plain_english": "Market explains about 4.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.4469057311809584,
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
              "plain_english": "Sector explains about 44.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5095019799322906,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "51.0%",
              "display_range": null,
              "display_text": "51.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 51.0,
              "plain_english": "Company-specific explains about 51.0% of price moves in the current state."
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
            "median": 0.4700030372208897,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.0%",
            "display_range": null,
            "display_text": "47.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 47.0,
            "plain_english": "Company-specific explains about 47.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.1264150567811758,
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
              "plain_english": "Market explains about 12.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.4035819059979344,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "40.4%",
              "display_range": null,
              "display_text": "40.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 40.4,
              "plain_english": "Sector explains about 40.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4700030372208897,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.0%",
              "display_range": null,
              "display_text": "47.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 47.0,
              "plain_english": "Company-specific explains about 47.0% of price moves in the current state."
            }
          },
          "summary": "Nov: Mostly company-driven."
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
            "median": 0.49437638905038683,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "49.4%",
            "display_range": null,
            "display_text": "49.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
            "kind": "share_pct",
            "value_pct": 49.4,
            "plain_english": "Market explains about 49.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.49437638905038683,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "49.4%",
              "display_range": null,
              "display_text": "49.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 49.4,
              "plain_english": "Market explains about 49.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.11923566346864356,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "11.9%",
              "display_range": null,
              "display_text": "11.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 11.9,
              "plain_english": "Sector explains about 11.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.38638794748096966,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "38.6%",
              "display_range": null,
              "display_text": "38.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 38.6,
              "plain_english": "Company-specific explains about 38.6% of price moves in the current state."
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
            "median": 0.4493291103761468,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "44.9%",
            "display_range": null,
            "display_text": "44.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 44.9,
            "plain_english": "Company-specific explains about 44.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.1240374343444409,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "12.4%",
              "display_range": null,
              "display_text": "12.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 12.4,
              "plain_english": "Market explains about 12.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.42663345527941227,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.7%",
              "display_range": null,
              "display_text": "42.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 42.7,
              "plain_english": "Sector explains about 42.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4493291103761468,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.9%",
              "display_range": null,
              "display_text": "44.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 44.9,
              "plain_english": "Company-specific explains about 44.9% of price moves in the current state."
            }
          },
          "summary": "Jan: More mixed, though company-driven still has the largest share."
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
            "median": 0.4525954307263395,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "45.3%",
            "display_range": null,
            "display_text": "45.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
            "kind": "share_pct",
            "value_pct": 45.3,
            "plain_english": "Company-specific explains about 45.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.19213225752192808,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "19.2%",
              "display_range": null,
              "display_text": "19.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 19.2,
              "plain_english": "Market explains about 19.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.35527231175173235,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "35.5%",
              "display_range": null,
              "display_text": "35.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 35.5,
              "plain_english": "Sector explains about 35.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4525954307263395,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.3%",
              "display_range": null,
              "display_text": "45.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 45.3,
              "plain_english": "Company-specific explains about 45.3% of price moves in the current state."
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
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4294373885756902,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "42.9%",
            "display_range": null,
            "display_text": "42.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 42.9,
            "plain_english": "Sector explains about 42.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.17201399806800557,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "17.2%",
              "display_range": null,
              "display_text": "17.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 17.2,
              "plain_english": "Market explains about 17.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.4294373885756902,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.9%",
              "display_range": null,
              "display_text": "42.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 42.9,
              "plain_english": "Sector explains about 42.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3985486133563043,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "39.9%",
              "display_range": null,
              "display_text": "39.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 39.9,
              "plain_english": "Company-specific explains about 39.9% of price moves in the current state."
            }
          },
          "summary": "Mar: More mixed, though sector-driven still has the largest share."
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-23",
          "n_obs": 14,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.3757202122673446,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "37.6%",
            "display_range": null,
            "display_text": "37.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
            "kind": "share_pct",
            "value_pct": 37.6,
            "plain_english": "Sector explains about 37.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3589900146578712,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "35.9%",
              "display_range": null,
              "display_text": "35.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
              "kind": "share_pct",
              "value_pct": 35.9,
              "plain_english": "Market explains about 35.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3757202122673446,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.6%",
              "display_range": null,
              "display_text": "37.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
              "kind": "share_pct",
              "value_pct": 37.6,
              "plain_english": "Sector explains about 37.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.2652897730747843,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.5%",
              "display_range": null,
              "display_text": "26.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
              "kind": "share_pct",
              "value_pct": 26.5,
              "plain_english": "Company-specific explains about 26.5% of price moves in the current state."
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
          "expected_duration_days": 8.333333333333334,
          "current_probability": 0.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.028770732134776475,
            "low": 0.028770732134776475,
            "high": 0.028770732134776475
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": 0.0
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 7.75,
          "current_probability": 1.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.04817824826592967,
            "low": 0.04817824826592967,
            "high": 0.04817824826592967
          },
          "volatility_label": "High Volatility",
          "current_probability_display": null
        }
      ],
      "transitions": {
        "mean": [
          [
            0.88,
            0.12
          ],
          [
            0.12195121951219512,
            0.8780487804878049
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            110.0,
            15.0
          ],
          [
            15.0,
            108.0
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
        "market_link_display": "9.21",
        "sector_link_display": "8.08",
        "market_link_explainer": "Very high market link. A 1% market move has lined up with about a 9.21% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 8.08% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "-0.89",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "High Volatility",
        "dominant_driver": "sector",
        "dominant_driver_label": "Sector",
        "driver_share_pct": 52.0,
        "driver_share_display": "52.0%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 251 trading days relative to the 252-day target.",
        "history_days": 251,
        "history_limited": true,
        "volatility_label": "High Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.8780487804878049,
        "effective_days": 124.0,
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
          "pct_time": 0.5020080321285141,
          "expected_duration_days": 8.333333333333334,
          "current_probability": 0.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.028770732134776475,
            "low": 0.028770732134776475,
            "high": 0.028770732134776475
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 7.75,
          "current_probability": 1.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.04817824826592967,
            "low": 0.04817824826592967,
            "high": 0.04817824826592967
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.88,
          0.12
        ],
        [
          0.12195121951219512,
          0.8780487804878049
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.88,
            0.12
          ],
          [
            0.12195121951219512,
            0.8780487804878049
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            110.0,
            15.0
          ],
          [
            15.0,
            108.0
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
        "text": "Liquidity score: 96.2 — Strong",
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
        "text": "Execution: thin buy-side",
        "bg": "bg-red-500/20",
        "textColor": "text-red-400"
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
    "liq_subtitle": "Liquidity screens well for the stock’s size, while the displayed book remains less supportive for buyers.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent performance is strong, with the stock ahead of both peers and the market over one month.",
    "perf_insight": "Performance is weak relative to comparison groups. Recent price performance is stronger than the main comparison groups, so the tape has a firmer return backdrop than peers. Recent trend context is too limited to say whether access has changed from the 1M baseline.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Sector moves are the main influence on the tape, accounting for 52.0% of current trading.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly sector-driven, accounting for about 52.0% of price changes. Other influences are market 29.8%, and company-specific 18.1%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 29.8%, sector 52.0%, and company-specific 18.1%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has shifted from company-driven to sector-driven over Feb to Apr."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 29.8%, sector 52.0%, and company-specific 18.1%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "The stock is moving mainly with its sector rather than on company-specific news. That matters because broader group moves are still a meaningful driver of day-to-day trading conditions.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Sector is the main driver now, accounting for 52.0% of current price moves.",
      "The pattern has become more mixed since February, shifting from mostly sector to sector-led in March and April."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "The market backdrop remains supportive in structural liquidity terms, even though the displayed book is less balanced on the buy side.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on Apr 23, 2025 to Apr 23, 2026 (241 trading days • 2,065,728 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on the displayed order book.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is thin enough that downside execution may feel worse than the monthly liquidity score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The key watchpoint is the order book, where bid depth is only 0.54x of ask depth despite a strong 6M liquidity score relative to peers.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 23.9% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Displayed liquidity is the main execution signal, with the buy side notably thinner than the sell side.",
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
    "intraday_insight": "The order book is skewed to the sell side, with displayed bid depth at 0.54x of ask depth and spread at 1.2 ticks. That matters because trading can feel less forgiving when selling into a thinner bid.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "The current trading picture is defined more by liquidity strength and book imbalance than by short activity.",
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
    "exec_subtitle": "Liquid for its size, but the displayed book shows thin buy-side support.",
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
        "value": "96.2/100",
        "sub": "Peer median 85.9 (+10.3 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "HK$224.8M",
        "sub": "Peer median HK$106.9M",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "0.13%",
        "sub": "1.76 ticks; peers 0.21%",
        "interp": {
          "text": "Tighter",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "6M liquidity is strong: score 96.2 vs peer median 85.9 (+10.3 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "38.110",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "0.16%",
        "note": "1.20 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.54x",
        "note": "Bid depth / ask depth on the displayed order book",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-0.15% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-0.41% with 100.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-0.62% with 100.0% fill.",
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
        "subtext": "Rank 99/2570",
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
        "value": "0.13",
        "suffix": "%",
        "bar_pct": 1,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "0.13% • 1.76 ticks vs peers 0.21%",
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
        "value": "224.8M",
        "value_prefix": "HK$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Peer median HK$106.9M",
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
        "value": "52.0",
        "suffix": "sector",
        "bar_pct": 52,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 29.8% • Company 18.1%",
        "interpretation": {
          "text": "Sector",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is strong for the stock’s size, with a 6M liquidity score of 96.2 compared with a peer median of 85.9. That keeps the name looking accessible relative to peers.",
      "The price backdrop is firm, with a 1M return of 10.1% compared with -0.8% for peers and 2.4% for the market. That matters because the stock is trading from a position of relative strength.",
      "The main watchpoint is the displayed book, where bid depth is only 0.54x of ask depth and sector factors account for 52.0% of the tape. That matters because downside execution can feel thinner even with strong structural liquidity."
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
      "overall": "6M liquidity is strong: score 96.2 vs peer median 85.9 (+10.3 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "strengths": [
        "6M score 96.2 vs peer median 85.9 (+10.3 pts)."
      ],
      "concerns": [],
      "peer_context": "Primary-period score gap vs peers: +10.3 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is -42.4%, worse than market, sector, and peers, which suggests weaker price performance than comparable names.",
        "vs_market": "Worse than market: -42.4% vs market 9.5%.",
        "vs_sector": "Worse than sector: -42.4% vs sector -27.8%.",
        "vs_peers": "Worse than peers: -42.4% vs peers -32.3%."
      },
      "adv": {
        "insight": "ADV is HK$224.8M, better than market, sector, and peers, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: HK$224.8M vs market HK$216.6K.",
        "vs_sector": "Better than sector: HK$224.8M vs sector HK$6.3M.",
        "vs_peers": "Better than peers: HK$224.8M vs peers HK$106.9M."
      },
      "spread": {
        "insight": "Spread is 0.13%, better than market, sector, and peers, which keeps trading costs more competitive than comparable names.",
        "vs_market": "Better than market: 0.13% vs market 2.71%.",
        "vs_sector": "Better than sector: 0.13% vs sector 1.06%.",
        "vs_peers": "Better than peers: 0.13% vs peers 0.21%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 2.00%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 2.00% vs market 0.08%.",
        "vs_sector": "Better than sector: 2.00% vs sector 0.23%.",
        "vs_peers": "Better than peers: 2.00% vs peers 0.97%."
      },
      "volatility": {
        "insight": "Volatility is 64.98%, better than peers, which suggests day-to-day price swings are more contained than comparable names.",
        "vs_market": "In line with market: 64.98% vs market 59.43%.",
        "vs_sector": "In line with sector: 64.98% vs sector 70.68%.",
        "vs_peers": "Better than peers: 64.98% vs peers 81.59%."
      },
      "trades": {
        "insight": "Trades is 6674, better than market, sector, and peers, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 6674 vs market 20.",
        "vs_sector": "Better than sector: 6674 vs sector 333.",
        "vs_peers": "Better than peers: 6674 vs peers 2101."
      },
      "amihud": {
        "insight": "Price impact is 1.00e-10, better than market, sector, and peers, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 1.00e-10 vs market 4.66e-08.",
        "vs_sector": "Better than sector: 1.00e-10 vs sector 3.21e-09.",
        "vs_peers": "Better than peers: 1.00e-10 vs peers 3.04e-10."
      }
    },
    "performance": {
      "overall": "Performance is weak relative to comparison groups. Recent price performance is stronger than the main comparison groups, so the tape has a firmer return backdrop than peers. Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "conclusion": "The recent move looks positive and broadly confirmed by liquidity, but it appears primarily sector-linked rather than company-specific."
    },
    "drivers": {
      "overall": "Sector moves are leading the stock now, with 52.0% of current price action explained by the group. That matters because the shares are moving with the broader sector backdrop rather than on company news alone, even as the stock has outperformed with a 1M return of 10.1% compared with peers at -0.8% and the market at 2.4%.",
      "beta": "Current trading conditions look more tied to external moves than internal ones, and the order book reinforces that read. Displayed bid depth is only 0.54x of ask depth, so when the sector turns lower the buy side may absorb selling less smoothly even with a 1.2 tick spread.",
      "rolling_change": "Feb: mostly sector. | Mar: More mixed, though sector-driven still has the largest share. | Apr: More mixed, though sector-driven still has the largest share."
    },
    "regime": {
      "overall": "High volatility is shaping the tape now, which matters because trading conditions can feel less steady even when the stock remains liquid for its size. The displayed book reinforces that fragility, with bid depth at 0.54x of ask depth despite a 1.2-tick spread.",
      "current": "The stock is currently in a high-volatility state, so price moves are running at a higher range than its usual backdrop. That leaves the market feeling firmer on returns but less even day to day.",
      "transitions": "This state looks more persistent, with a typical run length of about 7.8 days.",
      "trading_implications": "Trading conditions are likely to stay usable but less forgiving, because the stock screens strong on 6M liquidity while the visible buy side is much thinner than the sell"
    },
    "execution": {
      "overall": "Displayed liquidity looks bid-light at the screen because bid depth is only 0.54x ask depth while the spread is 1.2 ticks. That matters because immediate sell-side pressure is less well absorbed than the broader liquidity profile implies.",
      "concern": "The clearest stress point is the imbalance in the book, with materially less size bid than offered. That asymmetry matters because execution can feel worse on the way down even when the quoted spread remains relatively contained.",
      "peer_context": "The broader liquidity picture still screens well, with a 6M score of 96.2 compared with a peer median of 85.9, but the live book is less supportive than that ranking suggests. The trade-size history is deep at 241 trading days and 2,065,728 trades, so the contrast is best read as a current book condition rather than a challenge to the stock’s longer-term accessibility."
    },
    "trader_composition": {
      "overall": "By trade count and value, flow looks mainly institution-like.",
      "retail_heavy": "Institution-like trades account for 51.6% of trade count and 67.1% of trade value, compared with retail-like at 14.7% of count and 6.1% of value. That balance points to larger participants carrying most of the activity.",
      "institutional_gap": "The gap is clearer in trade value than in trade count, with institution-like flow at 67.1% of value against 51.6% of count. That matters because the larger share of value reinforces that the flow base is not being driven mainly by smaller tickets.",
      "peer_comparison": "The mix stands out as institution-like relative to peers, which supports the view that trading interest is anchored by larger participants rather than dominated by retail turnover."
    },
    "price_moving": {
      "overall": "Price-moving activity is present, but the cleaner signal is that the broader flow base remains institution-like. That makes the tape easier to read than a market driven mainly by smaller trades. By trade count and value, flow looks mainly institution-like. The stronger skew in trade value than in trade count suggests larger tickets carry more of the market impact. That matters because price formation is more likely to reflect bigger participants than a high volume of small trades.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity does not appear to be the main issue in the tape, as the clearer signals are strong 1M price performance and a sector-driven market at 52.0%. That matters because the current trading picture looks more shaped by broader market direction than by short pressure.",
      "level": "N/A",
      "correlation": "N/A",
      "trend": "There is no clear sign that short activity is rising or falling enough to change the read, while the stock is up 10.1% over 1M compared with peers down 0.8%. That matters because the broader picture still points to relative strength rather than a short-driven dislocation.",
      "peaks": "N/A"
    },
    "intraday": {
      "overall": "Session split is open 0.6%, continuous 96.4%, and close 1.7%. Current trading concentration score is 0.143.",
      "hhi_interpretation": "A concentration score of 0.143 indicates trading is not heavily confined to a small number of intervals. That supports a steadier intraday liquidity profile.",
      "best_times": "The continuous session is the clearest source of liquidity, accounting for 96.4% of activity. That matters because the open and close contribute relatively little to overall flow.",
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
        "6682",
        "9678",
        "6082",
        "2498",
        "6636",
        "2525",
        "6651",
        "9880",
        "856"
      ],
      "scores": [
        96.18677042801556,
        80.23346303501945,
        92.91828793774319,
        96.26459143968872,
        85.52529182879377,
        86.34241245136187,
        80.03891050583658,
        99.1828793774319,
        81.78988326848248
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
        224795384.0,
        58289352.0,
        209335418.49,
        192178699.0,
        113915585.0,
        99795057.0,
        58514250.0,
        798967562.5,
        33997260.8
      ],
      "total": 2570
    },
    "market_comparison": {
      "sector_name": "Digital Solution Services",
      "sector_count": 67,
      "market_count": 2570,
      "company": {
        "volatility": 0.6498012384390802,
        "adv": 224795384.0,
        "spread_pct": 0.0013203234951782402,
        "turnover_ratio": 0.019956483688114257,
        "amihud": 1.0023983636466892e-10,
        "trades": 6674.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.7391826955291299,
          "median": 0.5942736874178158,
          "min": 0.0,
          "max": 33.69227034911436,
          "p5": 0.22074746744764606,
          "p95": 1.5523854340199539,
          "count": 2570
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 56145764.834515855,
          "median": 216647.5,
          "min": 0.0,
          "max": 11463870050.0,
          "p5": 0.0,
          "p95": 210825143.6249999,
          "count": 2570
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.04210179416577523,
          "median": 0.02707420995450322,
          "min": 0.0005616996269061497,
          "max": 0.586235634471959,
          "p5": 0.0014027808755638215,
          "p95": 0.13469060668991223,
          "count": 2570
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0035999674216896727,
          "median": 0.0008406243451926764,
          "min": 0.0,
          "max": 0.18345863604845108,
          "p5": 0.0,
          "p95": 0.014337945085637195,
          "count": 2551
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 6.383314168860201e-07,
          "median": 4.662001424208288e-08,
          "min": 0.0,
          "max": 2.961485977790332e-05,
          "p5": 5.195200789240232e-11,
          "p95": 3.531112017226262e-06,
          "count": 2570
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1031.2101167315175,
          "median": 20.0,
          "min": 0.0,
          "max": 89671.5,
          "p5": 0.0,
          "p95": 5626.924999999999,
          "count": 2570
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.8605329493372799,
          "median": 0.7068192673862433,
          "min": 0.1242174199772173,
          "max": 2.6384840702446897,
          "p5": 0.3342309992704644,
          "p95": 1.795693744489396,
          "count": 67
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 264006668.42889616,
          "median": 6322037.43,
          "min": 0.0,
          "max": 11463870050.0,
          "p5": 2867.3,
          "p95": 972563332.525999,
          "count": 67
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.028448036075413165,
          "median": 0.010550884324932364,
          "min": 0.0008593729734103632,
          "max": 0.20782244878418843,
          "p5": 0.0012260005837613883,
          "p95": 0.11237628608372996,
          "count": 67
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0051784323721538236,
          "median": 0.0022897181572325105,
          "min": 0.0,
          "max": 0.03426326325329403,
          "p5": 4.700897468042477e-06,
          "p95": 0.01889382255024268,
          "count": 66
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 3.0074729953955156e-07,
          "median": 3.2140247698214717e-09,
          "min": 0.0,
          "max": 4.536303782906547e-06,
          "p5": 2.217868054969259e-11,
          "p95": 2.050958746918938e-06,
          "count": 67
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 2667.589552238806,
          "median": 333.0,
          "min": 0.0,
          "max": 49627.5,
          "p5": 1.3000000000000003,
          "p95": 12969.249999999996,
          "count": 67
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 195624148.09875,
          "median": 106855321.0,
          "min": 33997260.8,
          "max": 798967562.5,
          "p5": 42499492.72,
          "p95": 592596312.0964997,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 4285.875,
          "median": 2101.25,
          "min": 783.0,
          "max": 13240.0,
          "p5": 841.625,
          "p95": 11179.024999999998,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.9884089955831006,
          "median": 0.8159269787075969,
          "min": 0.4332568147612983,
          "max": 1.9620833973621579,
          "p5": 0.44648061029036334,
          "p95": 1.7763818470058257,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.003027195244453399,
          "median": 0.002137773323306847,
          "min": 0.0010539122972686571,
          "max": 0.006779285384082007,
          "p5": 0.001055213073312205,
          "p95": 0.006397468990215159,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 5.373754712470045,
          "median": 4.087940834157531,
          "min": 1.2913876851415629,
          "max": 12.015637648435199,
          "p5": 1.415621134173742,
          "p95": 11.25455318424094,
          "count": 6
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 3.26783356251962e-10,
          "median": 3.0430991113725823e-10,
          "min": 2.9207943799773524e-11,
          "max": 6.697274517838324e-10,
          "p5": 4.963846592880701e-11,
          "p95": 6.682854424098365e-10,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.010372527927591267,
          "median": 0.009659480326629721,
          "min": 0.004171400229055115,
          "max": 0.01948533376807875,
          "p5": 0.004240311907692352,
          "p95": 0.01843662687888526,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": 0.10144927536231907,
        "market": 0.02414767314911015,
        "sector": -0.024108534181391028,
        "peers": -0.008344949422129155
      },
      {
        "horizon": "3M",
        "stock": -0.31593159315931585,
        "market": 0.041011153040892534,
        "sector": -0.18260918171127327,
        "peers": -0.21959407836911926
      },
      {
        "horizon": "6M",
        "stock": -0.4238059135708875,
        "market": 0.09474979759512481,
        "sector": -0.2776481387415741,
        "peers": -0.32273369372088534
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
      "share_market": 0.2984777750616723,
      "share_sector": 0.520267238626,
      "share_idio": 0.18125498631232775,
      "beta_market": 9.21362052186976,
      "beta_sector": 8.079461593010587,
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
            "median": 0.2984777750616723,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "29.8%",
            "display_range": null,
            "display_text": "29.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 29.8,
            "plain_english": "Market explains about 29.8% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.520267238626,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "52.0%",
            "display_range": null,
            "display_text": "52.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 52.0,
            "plain_english": "Sector explains about 52.0% of price moves in the current state."
          },
          "company_share": {
            "median": 0.18125498631232775,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "18.1%",
            "display_range": null,
            "display_text": "18.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 18.1,
            "plain_english": "Company-specific explains about 18.1% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 9.21362052186976,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "9.21",
            "display_range": null,
            "display_text": "9.21",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Very high",
            "plain_english": "Very high market link: a 1% market move has lined up with about a 9.21% stock move in the same direction in this state. The multiplier is unusually large and comes from only 251 trading days of history.",
            "value_num": 9.21
          },
          "beta_stock_lag": {
            "median": -0.886360090594361,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.89",
            "display_range": null,
            "display_text": "-0.89",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -0.89
          },
          "beta_sector": {
            "median": 8.079461593010587,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "8.08",
            "display_range": null,
            "display_text": "8.08",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Very high",
            "plain_english": "Very high sector link: a 1% sector move has lined up with about a 8.08% stock move in the same direction in this state. The multiplier is unusually large and comes from only 251 trading days of history.",
            "value_num": 8.08
          },
          "beta_market_lag": {
            "median": -2.5814370049514315,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-2.58",
            "display_range": null,
            "display_text": "-2.58",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -2.58
          },
          "beta_sector_lag": {
            "median": 9.719661947321942,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "9.72",
            "display_range": null,
            "display_text": "9.72",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 9.72
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
            "period_label": "2025-04-07 to 2025-04-30",
            "n_obs": 16,
            "partial_month": true,
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5897147258396063,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "59.0%",
              "display_range": null,
              "display_text": "59.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 59.0,
              "plain_english": "Sector explains about 59.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.15057206982829888,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "15.1%",
                "display_range": null,
                "display_text": "15.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
                "kind": "share_pct",
                "value_pct": 15.1,
                "plain_english": "Market explains about 15.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.5897147258396063,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "59.0%",
                "display_range": null,
                "display_text": "59.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
                "kind": "share_pct",
                "value_pct": 59.0,
                "plain_english": "Sector explains about 59.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.2597132043320949,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.0%",
                "display_range": null,
                "display_text": "26.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
                "kind": "share_pct",
                "value_pct": 26.0,
                "plain_english": "Company-specific explains about 26.0% of price moves in the current state."
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
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.6030619172892728,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "60.3%",
              "display_range": null,
              "display_text": "60.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 60.3,
              "plain_english": "Company-specific explains about 60.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.06940649967268121,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "6.9%",
                "display_range": null,
                "display_text": "6.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 6.9,
                "plain_english": "Market explains about 6.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3275315830380459,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "32.8%",
                "display_range": null,
                "display_text": "32.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 32.8,
                "plain_english": "Sector explains about 32.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6030619172892728,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "60.3%",
                "display_range": null,
                "display_text": "60.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 60.3,
                "plain_english": "Company-specific explains about 60.3% of price moves in the current state."
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
              "median": 0.5079278018017921,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.8%",
              "display_range": null,
              "display_text": "50.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 50.8,
              "plain_english": "Company-specific explains about 50.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.25385453722260437,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "25.4%",
                "display_range": null,
                "display_text": "25.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 25.4,
                "plain_english": "Market explains about 25.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2382176609756036,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "23.8%",
                "display_range": null,
                "display_text": "23.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 23.8,
                "plain_english": "Sector explains about 23.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5079278018017921,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "50.8%",
                "display_range": null,
                "display_text": "50.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 50.8,
                "plain_english": "Company-specific explains about 50.8% of price moves in the current state."
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
              "median": 0.5958107556726171,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "59.6%",
              "display_range": null,
              "display_text": "59.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 59.6,
              "plain_english": "Company-specific explains about 59.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.027517006483146225,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "2.8%",
                "display_range": null,
                "display_text": "2.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 2.8,
                "plain_english": "Market explains about 2.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.37667223784423676,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "37.7%",
                "display_range": null,
                "display_text": "37.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 37.7,
                "plain_english": "Sector explains about 37.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5958107556726171,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "59.6%",
                "display_range": null,
                "display_text": "59.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 59.6,
                "plain_english": "Company-specific explains about 59.6% of price moves in the current state."
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
              "median": 0.4458524897805697,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.6%",
              "display_range": null,
              "display_text": "44.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 44.6,
              "plain_english": "Company-specific explains about 44.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2320194021645045,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "23.2%",
                "display_range": null,
                "display_text": "23.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 23.2,
                "plain_english": "Market explains about 23.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3221281080549259,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "32.2%",
                "display_range": null,
                "display_text": "32.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 32.2,
                "plain_english": "Sector explains about 32.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4458524897805697,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "44.6%",
                "display_range": null,
                "display_text": "44.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 44.6,
                "plain_english": "Company-specific explains about 44.6% of price moves in the current state."
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
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.48277196080477963,
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
                "median": 0.1322279592187253,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "13.2%",
                "display_range": null,
                "display_text": "13.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 13.2,
                "plain_english": "Market explains about 13.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3850000799764951,
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
                "plain_english": "Sector explains about 38.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.48277196080477963,
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
            "summary": "Sep: Mostly company-driven."
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
              "median": 0.5095019799322906,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "51.0%",
              "display_range": null,
              "display_text": "51.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 51.0,
              "plain_english": "Company-specific explains about 51.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.043592288886750985,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "4.4%",
                "display_range": null,
                "display_text": "4.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 4.4,
                "plain_english": "Market explains about 4.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.4469057311809584,
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
                "plain_english": "Sector explains about 44.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5095019799322906,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "51.0%",
                "display_range": null,
                "display_text": "51.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 51.0,
                "plain_english": "Company-specific explains about 51.0% of price moves in the current state."
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
              "median": 0.4700030372208897,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.0%",
              "display_range": null,
              "display_text": "47.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 47.0,
              "plain_english": "Company-specific explains about 47.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.1264150567811758,
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
                "plain_english": "Market explains about 12.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.4035819059979344,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "40.4%",
                "display_range": null,
                "display_text": "40.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 40.4,
                "plain_english": "Sector explains about 40.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4700030372208897,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "47.0%",
                "display_range": null,
                "display_text": "47.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 47.0,
                "plain_english": "Company-specific explains about 47.0% of price moves in the current state."
              }
            },
            "summary": "Nov: Mostly company-driven."
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
              "median": 0.49437638905038683,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "49.4%",
              "display_range": null,
              "display_text": "49.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 49.4,
              "plain_english": "Market explains about 49.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.49437638905038683,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "49.4%",
                "display_range": null,
                "display_text": "49.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 49.4,
                "plain_english": "Market explains about 49.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.11923566346864356,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "11.9%",
                "display_range": null,
                "display_text": "11.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 11.9,
                "plain_english": "Sector explains about 11.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.38638794748096966,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "38.6%",
                "display_range": null,
                "display_text": "38.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 38.6,
                "plain_english": "Company-specific explains about 38.6% of price moves in the current state."
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
              "median": 0.4493291103761468,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.9%",
              "display_range": null,
              "display_text": "44.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 44.9,
              "plain_english": "Company-specific explains about 44.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.1240374343444409,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "12.4%",
                "display_range": null,
                "display_text": "12.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 12.4,
                "plain_english": "Market explains about 12.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.42663345527941227,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "42.7%",
                "display_range": null,
                "display_text": "42.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 42.7,
                "plain_english": "Sector explains about 42.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4493291103761468,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "44.9%",
                "display_range": null,
                "display_text": "44.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 44.9,
                "plain_english": "Company-specific explains about 44.9% of price moves in the current state."
              }
            },
            "summary": "Jan: More mixed, though company-driven still has the largest share."
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
              "median": 0.4525954307263395,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.3%",
              "display_range": null,
              "display_text": "45.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 45.3,
              "plain_english": "Company-specific explains about 45.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.19213225752192808,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "19.2%",
                "display_range": null,
                "display_text": "19.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 19.2,
                "plain_english": "Market explains about 19.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.35527231175173235,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "35.5%",
                "display_range": null,
                "display_text": "35.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 35.5,
                "plain_english": "Sector explains about 35.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4525954307263395,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "45.3%",
                "display_range": null,
                "display_text": "45.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 45.3,
                "plain_english": "Company-specific explains about 45.3% of price moves in the current state."
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
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4294373885756902,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.9%",
              "display_range": null,
              "display_text": "42.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 42.9,
              "plain_english": "Sector explains about 42.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.17201399806800557,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "17.2%",
                "display_range": null,
                "display_text": "17.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 17.2,
                "plain_english": "Market explains about 17.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.4294373885756902,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "42.9%",
                "display_range": null,
                "display_text": "42.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 42.9,
                "plain_english": "Sector explains about 42.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3985486133563043,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "39.9%",
                "display_range": null,
                "display_text": "39.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 39.9,
                "plain_english": "Company-specific explains about 39.9% of price moves in the current state."
              }
            },
            "summary": "Mar: More mixed, though sector-driven still has the largest share."
          },
          {
            "month_key": "2026-04",
            "month_label": "April 2026",
            "month_short_label": "Apr",
            "period_label": "2026-04-01 to 2026-04-23",
            "n_obs": 14,
            "partial_month": false,
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.3757202122673446,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.6%",
              "display_range": null,
              "display_text": "37.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
              "kind": "share_pct",
              "value_pct": 37.6,
              "plain_english": "Sector explains about 37.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3589900146578712,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "35.9%",
                "display_range": null,
                "display_text": "35.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
                "kind": "share_pct",
                "value_pct": 35.9,
                "plain_english": "Market explains about 35.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3757202122673446,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "37.6%",
                "display_range": null,
                "display_text": "37.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
                "kind": "share_pct",
                "value_pct": 37.6,
                "plain_english": "Sector explains about 37.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.2652897730747843,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.5%",
                "display_range": null,
                "display_text": "26.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
                "kind": "share_pct",
                "value_pct": 26.5,
                "plain_english": "Company-specific explains about 26.5% of price moves in the current state."
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
            "expected_duration_days": 8.333333333333334,
            "current_probability": 0.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.028770732134776475,
              "low": 0.028770732134776475,
              "high": 0.028770732134776475
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": 0.0
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 7.75,
            "current_probability": 1.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.04817824826592967,
              "low": 0.04817824826592967,
              "high": 0.04817824826592967
            },
            "volatility_label": "High Volatility",
            "current_probability_display": null
          }
        ],
        "transitions": {
          "mean": [
            [
              0.88,
              0.12
            ],
            [
              0.12195121951219512,
              0.8780487804878049
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              110.0,
              15.0
            ],
            [
              15.0,
              108.0
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
          "market_link_display": "9.21",
          "sector_link_display": "8.08",
          "market_link_explainer": "Very high market link. A 1% market move has lined up with about a 9.21% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 8.08% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "-0.89",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "High Volatility",
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "driver_share_pct": 52.0,
          "driver_share_display": "52.0%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 251 trading days relative to the 252-day target.",
          "history_days": 251,
          "history_limited": true,
          "volatility_label": "High Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.8780487804878049,
          "effective_days": 124.0,
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
          "month_key": "2025-04",
          "month_label": "April 2025",
          "month_short_label": "Apr",
          "period_label": "2025-04-07 to 2025-04-30",
          "n_obs": 16,
          "partial_month": true,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "Apr: Mostly sector-driven.",
          "share_market": 0.15057206982829888,
          "share_sector": 0.5897147258396063,
          "share_company": 0.2597132043320949,
          "share_market_display": "15.1%",
          "share_sector_display": "59.0%",
          "share_company_display": "26.0%",
          "dominant_share_display": "59.0%"
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
          "share_market": 0.06940649967268121,
          "share_sector": 0.3275315830380459,
          "share_company": 0.6030619172892728,
          "share_market_display": "6.9%",
          "share_sector_display": "32.8%",
          "share_company_display": "60.3%",
          "dominant_share_display": "60.3%"
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
          "share_market": 0.25385453722260437,
          "share_sector": 0.2382176609756036,
          "share_company": 0.5079278018017921,
          "share_market_display": "25.4%",
          "share_sector_display": "23.8%",
          "share_company_display": "50.8%",
          "dominant_share_display": "50.8%"
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
          "share_market": 0.027517006483146225,
          "share_sector": 0.37667223784423676,
          "share_company": 0.5958107556726171,
          "share_market_display": "2.8%",
          "share_sector_display": "37.7%",
          "share_company_display": "59.6%",
          "dominant_share_display": "59.6%"
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
          "share_market": 0.2320194021645045,
          "share_sector": 0.3221281080549259,
          "share_company": 0.4458524897805697,
          "share_market_display": "23.2%",
          "share_sector_display": "32.2%",
          "share_company_display": "44.6%",
          "dominant_share_display": "44.6%"
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
          "share_market": 0.1322279592187253,
          "share_sector": 0.3850000799764951,
          "share_company": 0.48277196080477963,
          "share_market_display": "13.2%",
          "share_sector_display": "38.5%",
          "share_company_display": "48.3%",
          "dominant_share_display": "48.3%"
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
          "share_market": 0.043592288886750985,
          "share_sector": 0.4469057311809584,
          "share_company": 0.5095019799322906,
          "share_market_display": "4.4%",
          "share_sector_display": "44.7%",
          "share_company_display": "51.0%",
          "dominant_share_display": "51.0%"
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
          "share_market": 0.1264150567811758,
          "share_sector": 0.4035819059979344,
          "share_company": 0.4700030372208897,
          "share_market_display": "12.6%",
          "share_sector_display": "40.4%",
          "share_company_display": "47.0%",
          "dominant_share_display": "47.0%"
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
          "share_market": 0.49437638905038683,
          "share_sector": 0.11923566346864356,
          "share_company": 0.38638794748096966,
          "share_market_display": "49.4%",
          "share_sector_display": "11.9%",
          "share_company_display": "38.6%",
          "dominant_share_display": "49.4%"
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
          "summary": "Jan: More mixed, though company-driven still has the largest share.",
          "share_market": 0.1240374343444409,
          "share_sector": 0.42663345527941227,
          "share_company": 0.4493291103761468,
          "share_market_display": "12.4%",
          "share_sector_display": "42.7%",
          "share_company_display": "44.9%",
          "dominant_share_display": "44.9%"
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
          "share_market": 0.19213225752192808,
          "share_sector": 0.35527231175173235,
          "share_company": 0.4525954307263395,
          "share_market_display": "19.2%",
          "share_sector_display": "35.5%",
          "share_company_display": "45.3%",
          "dominant_share_display": "45.3%"
        },
        {
          "month_key": "2026-03",
          "month_label": "March 2026",
          "month_short_label": "Mar",
          "period_label": "2026-03-02 to 2026-03-31",
          "n_obs": 22,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "Mar: More mixed, though sector-driven still has the largest share.",
          "share_market": 0.17201399806800557,
          "share_sector": 0.4294373885756902,
          "share_company": 0.3985486133563043,
          "share_market_display": "17.2%",
          "share_sector_display": "42.9%",
          "share_company_display": "39.9%",
          "dominant_share_display": "42.9%"
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-23",
          "n_obs": 14,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "Apr: More mixed, though sector-driven still has the largest share.",
          "share_market": 0.3589900146578712,
          "share_sector": 0.3757202122673446,
          "share_company": 0.2652897730747843,
          "share_market_display": "35.9%",
          "share_sector_display": "37.6%",
          "share_company_display": "26.5%",
          "dominant_share_display": "37.6%"
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
            "expected_duration_days": 8.333333333333334,
            "current_probability": 0.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.028770732134776475,
              "low": 0.028770732134776475,
              "high": 0.028770732134776475
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 7.75,
            "current_probability": 1.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.04817824826592967,
              "low": 0.04817824826592967,
              "high": 0.04817824826592967
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.88,
            0.12
          ],
          [
            0.12195121951219512,
            0.8780487804878049
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 38.08,
          "quantity": 800.0,
          "value": 30464.0
        },
        {
          "level": 2,
          "price": 38.04,
          "quantity": 3000.0,
          "value": 114120.0
        },
        {
          "level": 3,
          "price": 38.02,
          "quantity": 200.0,
          "value": 7604.000000000001
        },
        {
          "level": 4,
          "price": 38.0,
          "quantity": 4000.0,
          "value": 152000.0
        },
        {
          "level": 5,
          "price": 37.98,
          "quantity": 2400.0,
          "value": 91151.99999999999
        },
        {
          "level": 6,
          "price": 37.96,
          "quantity": 2200.0,
          "value": 83512.0
        },
        {
          "level": 7,
          "price": 37.94,
          "quantity": 2500.0,
          "value": 94850.0
        },
        {
          "level": 8,
          "price": 37.92,
          "quantity": 3800.0,
          "value": 144096.0
        },
        {
          "level": 9,
          "price": 37.9,
          "quantity": 2800.0,
          "value": 106120.0
        },
        {
          "level": 10,
          "price": 37.88,
          "quantity": 3800.0,
          "value": 143944.0
        },
        {
          "level": 11,
          "price": 37.86,
          "quantity": 9500.0,
          "value": 359670.0
        },
        {
          "level": 12,
          "price": 37.84,
          "quantity": 7300.0,
          "value": 276232.0
        },
        {
          "level": 13,
          "price": 37.82,
          "quantity": 5500.0,
          "value": 208010.0
        },
        {
          "level": 14,
          "price": 37.8,
          "quantity": 14100.0,
          "value": 532980.0
        },
        {
          "level": 15,
          "price": 37.78,
          "quantity": 2500.0,
          "value": 94450.0
        },
        {
          "level": 16,
          "price": 37.76,
          "quantity": 2800.0,
          "value": 105728.0
        },
        {
          "level": 17,
          "price": 37.74,
          "quantity": 1500.0,
          "value": 56610.0
        },
        {
          "level": 18,
          "price": 37.72,
          "quantity": 2300.0,
          "value": 86756.0
        },
        {
          "level": 19,
          "price": 37.7,
          "quantity": 11300.0,
          "value": 426010.00000000006
        },
        {
          "level": 20,
          "price": 37.68,
          "quantity": 3800.0,
          "value": 143184.0
        },
        {
          "level": 21,
          "price": 37.66,
          "quantity": 15500.0,
          "value": 583730.0
        },
        {
          "level": 22,
          "price": 37.64,
          "quantity": 1000.0,
          "value": 37640.0
        },
        {
          "level": 23,
          "price": 37.62,
          "quantity": 4300.0,
          "value": 161766.0
        },
        {
          "level": 24,
          "price": 37.6,
          "quantity": 10100.0,
          "value": 379760.0
        },
        {
          "level": 25,
          "price": 37.58,
          "quantity": 2400.0,
          "value": 90192.0
        },
        {
          "level": 26,
          "price": 37.56,
          "quantity": 1300.0,
          "value": 48828.0
        },
        {
          "level": 27,
          "price": 37.54,
          "quantity": 2300.0,
          "value": 86342.0
        },
        {
          "level": 28,
          "price": 37.52,
          "quantity": 22500.0,
          "value": 844200.0000000001
        },
        {
          "level": 29,
          "price": 37.5,
          "quantity": 25900.0,
          "value": 971250.0
        },
        {
          "level": 30,
          "price": 37.48,
          "quantity": 1800.0,
          "value": 67464.0
        },
        {
          "level": 31,
          "price": 37.46,
          "quantity": 300.0,
          "value": 11238.0
        },
        {
          "level": 32,
          "price": 37.44,
          "quantity": 300.0,
          "value": 11232.0
        },
        {
          "level": 33,
          "price": 37.42,
          "quantity": 16200.0,
          "value": 606204.0
        },
        {
          "level": 34,
          "price": 37.4,
          "quantity": 9100.0,
          "value": 340340.0
        },
        {
          "level": 35,
          "price": 37.38,
          "quantity": 600.0,
          "value": 22428.0
        },
        {
          "level": 36,
          "price": 37.36,
          "quantity": 3000.0,
          "value": 112080.0
        },
        {
          "level": 37,
          "price": 37.34,
          "quantity": 100.0,
          "value": 3734.0000000000005
        },
        {
          "level": 38,
          "price": 37.32,
          "quantity": 2800.0,
          "value": 104496.0
        },
        {
          "level": 39,
          "price": 37.3,
          "quantity": 4400.0,
          "value": 164120.0
        },
        {
          "level": 40,
          "price": 37.28,
          "quantity": 1600.0,
          "value": 59648.0
        },
        {
          "level": 41,
          "price": 37.24,
          "quantity": 1300.0,
          "value": 48412.0
        },
        {
          "level": 42,
          "price": 37.2,
          "quantity": 9300.0,
          "value": 345960.0
        },
        {
          "level": 43,
          "price": 37.18,
          "quantity": 500.0,
          "value": 18590.0
        },
        {
          "level": 44,
          "price": 37.16,
          "quantity": 1400.0,
          "value": 52023.99999999999
        },
        {
          "level": 45,
          "price": 37.14,
          "quantity": 500.0,
          "value": 18570.0
        },
        {
          "level": 46,
          "price": 37.12,
          "quantity": 1500.0,
          "value": 55679.99999999999
        },
        {
          "level": 47,
          "price": 37.08,
          "quantity": 1300.0,
          "value": 48204.0
        },
        {
          "level": 48,
          "price": 37.04,
          "quantity": 3000.0,
          "value": 111120.0
        },
        {
          "level": 49,
          "price": 37.02,
          "quantity": 300.0,
          "value": 11106.000000000002
        },
        {
          "level": 50,
          "price": 37.0,
          "quantity": 9100.0,
          "value": 336700.0
        },
        {
          "level": 51,
          "price": 36.96,
          "quantity": 1400.0,
          "value": 51744.0
        },
        {
          "level": 52,
          "price": 36.9,
          "quantity": 3300.0,
          "value": 121770.0
        },
        {
          "level": 53,
          "price": 36.84,
          "quantity": 400.0,
          "value": 14736.000000000002
        },
        {
          "level": 54,
          "price": 36.8,
          "quantity": 1100.0,
          "value": 40480.0
        },
        {
          "level": 55,
          "price": 36.7,
          "quantity": 300.0,
          "value": 11010.0
        },
        {
          "level": 56,
          "price": 36.68,
          "quantity": 500.0,
          "value": 18340.0
        },
        {
          "level": 57,
          "price": 36.66,
          "quantity": 100.0,
          "value": 3665.9999999999995
        },
        {
          "level": 58,
          "price": 36.64,
          "quantity": 800.0,
          "value": 29312.0
        },
        {
          "level": 59,
          "price": 36.6,
          "quantity": 14600.0,
          "value": 534360.0
        },
        {
          "level": 60,
          "price": 36.5,
          "quantity": 1800.0,
          "value": 65700.0
        },
        {
          "level": 61,
          "price": 36.38,
          "quantity": 100.0,
          "value": 3638.0000000000005
        },
        {
          "level": 62,
          "price": 36.2,
          "quantity": 500.0,
          "value": 18100.0
        },
        {
          "level": 63,
          "price": 36.12,
          "quantity": 100.0,
          "value": 3611.9999999999995
        },
        {
          "level": 64,
          "price": 36.0,
          "quantity": 5200.0,
          "value": 187200.0
        },
        {
          "level": 65,
          "price": 35.88,
          "quantity": 300.0,
          "value": 10764.0
        },
        {
          "level": 66,
          "price": 35.74,
          "quantity": 100.0,
          "value": 3574.0
        },
        {
          "level": 67,
          "price": 35.64,
          "quantity": 100.0,
          "value": 3564.0
        },
        {
          "level": 68,
          "price": 35.34,
          "quantity": 100.0,
          "value": 3534.0000000000005
        },
        {
          "level": 69,
          "price": 35.2,
          "quantity": 300.0,
          "value": 10560.0
        },
        {
          "level": 70,
          "price": 35.04,
          "quantity": 1100.0,
          "value": 38544.0
        },
        {
          "level": 71,
          "price": 35.02,
          "quantity": 1400.0,
          "value": 49028.00000000001
        },
        {
          "level": 72,
          "price": 35.0,
          "quantity": 7800.0,
          "value": 273000.0
        },
        {
          "level": 73,
          "price": 34.02,
          "quantity": 100.0,
          "value": 3402.0000000000005
        },
        {
          "level": 74,
          "price": 34.0,
          "quantity": 4200.0,
          "value": 142800.0
        },
        {
          "level": 75,
          "price": 33.74,
          "quantity": 2100.0,
          "value": 70854.0
        },
        {
          "level": 76,
          "price": 33.66,
          "quantity": 2000.0,
          "value": 67320.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 38.14,
          "quantity": 60800.0,
          "value": 2318912.0
        },
        {
          "level": 2,
          "price": 38.16,
          "quantity": 2400.0,
          "value": 91583.99999999999
        },
        {
          "level": 3,
          "price": 38.18,
          "quantity": 5800.0,
          "value": 221444.0
        },
        {
          "level": 4,
          "price": 38.2,
          "quantity": 4600.0,
          "value": 175720.0
        },
        {
          "level": 5,
          "price": 38.26,
          "quantity": 5900.0,
          "value": 225734.0
        },
        {
          "level": 6,
          "price": 38.38,
          "quantity": 9800.0,
          "value": 376124.0
        },
        {
          "level": 7,
          "price": 38.44,
          "quantity": 17100.0,
          "value": 657324.0
        },
        {
          "level": 8,
          "price": 38.46,
          "quantity": 1000.0,
          "value": 38460.0
        },
        {
          "level": 9,
          "price": 38.5,
          "quantity": 11300.0,
          "value": 435050.0
        },
        {
          "level": 10,
          "price": 38.6,
          "quantity": 2200.0,
          "value": 84920.0
        },
        {
          "level": 11,
          "price": 38.62,
          "quantity": 1000.0,
          "value": 38620.0
        },
        {
          "level": 12,
          "price": 38.64,
          "quantity": 1200.0,
          "value": 46368.0
        },
        {
          "level": 13,
          "price": 38.66,
          "quantity": 2200.0,
          "value": 85051.99999999999
        },
        {
          "level": 14,
          "price": 38.68,
          "quantity": 3300.0,
          "value": 127644.0
        },
        {
          "level": 15,
          "price": 38.8,
          "quantity": 1300.0,
          "value": 50439.99999999999
        },
        {
          "level": 16,
          "price": 38.82,
          "quantity": 100.0,
          "value": 3882.0
        },
        {
          "level": 17,
          "price": 38.86,
          "quantity": 5800.0,
          "value": 225388.0
        },
        {
          "level": 18,
          "price": 38.88,
          "quantity": 1600.0,
          "value": 62208.00000000001
        },
        {
          "level": 19,
          "price": 38.9,
          "quantity": 700.0,
          "value": 27230.0
        },
        {
          "level": 20,
          "price": 38.92,
          "quantity": 600.0,
          "value": 23352.0
        },
        {
          "level": 21,
          "price": 38.94,
          "quantity": 20200.0,
          "value": 786588.0
        },
        {
          "level": 22,
          "price": 38.96,
          "quantity": 300.0,
          "value": 11688.0
        },
        {
          "level": 23,
          "price": 38.98,
          "quantity": 4500.0,
          "value": 175410.0
        },
        {
          "level": 24,
          "price": 39.0,
          "quantity": 10700.0,
          "value": 417300.0
        },
        {
          "level": 25,
          "price": 39.06,
          "quantity": 200.0,
          "value": 7812.0
        },
        {
          "level": 26,
          "price": 39.12,
          "quantity": 1000.0,
          "value": 39120.0
        },
        {
          "level": 27,
          "price": 39.16,
          "quantity": 2300.0,
          "value": 90067.99999999999
        },
        {
          "level": 28,
          "price": 39.2,
          "quantity": 300.0,
          "value": 11760.0
        },
        {
          "level": 29,
          "price": 39.26,
          "quantity": 200.0,
          "value": 7852.0
        },
        {
          "level": 30,
          "price": 39.3,
          "quantity": 16500.0,
          "value": 648450.0
        },
        {
          "level": 31,
          "price": 39.34,
          "quantity": 1300.0,
          "value": 51142.00000000001
        },
        {
          "level": 32,
          "price": 39.42,
          "quantity": 1100.0,
          "value": 43362.0
        },
        {
          "level": 33,
          "price": 39.44,
          "quantity": 200.0,
          "value": 7888.0
        },
        {
          "level": 34,
          "price": 39.46,
          "quantity": 400.0,
          "value": 15784.0
        },
        {
          "level": 35,
          "price": 39.48,
          "quantity": 900.0,
          "value": 35532.0
        },
        {
          "level": 36,
          "price": 39.5,
          "quantity": 600.0,
          "value": 23700.0
        },
        {
          "level": 37,
          "price": 39.52,
          "quantity": 2000.0,
          "value": 79040.0
        },
        {
          "level": 38,
          "price": 39.58,
          "quantity": 3400.0,
          "value": 134572.0
        },
        {
          "level": 39,
          "price": 39.6,
          "quantity": 3200.0,
          "value": 126720.0
        },
        {
          "level": 40,
          "price": 39.7,
          "quantity": 10600.0,
          "value": 420820.00000000006
        },
        {
          "level": 41,
          "price": 39.8,
          "quantity": 400.0,
          "value": 15919.999999999998
        },
        {
          "level": 42,
          "price": 39.9,
          "quantity": 5200.0,
          "value": 207480.0
        },
        {
          "level": 43,
          "price": 39.98,
          "quantity": 14500.0,
          "value": 579710.0
        },
        {
          "level": 44,
          "price": 40.0,
          "quantity": 24100.0,
          "value": 964000.0
        },
        {
          "level": 45,
          "price": 40.04,
          "quantity": 200.0,
          "value": 8008.0
        },
        {
          "level": 46,
          "price": 40.08,
          "quantity": 100.0,
          "value": 4008.0
        },
        {
          "level": 47,
          "price": 40.1,
          "quantity": 200.0,
          "value": 8020.0
        },
        {
          "level": 48,
          "price": 40.14,
          "quantity": 5500.0,
          "value": 220770.0
        },
        {
          "level": 49,
          "price": 40.16,
          "quantity": 100.0,
          "value": 4015.9999999999995
        },
        {
          "level": 50,
          "price": 40.18,
          "quantity": 300.0,
          "value": 12054.0
        },
        {
          "level": 51,
          "price": 40.2,
          "quantity": 2900.0,
          "value": 116580.00000000001
        },
        {
          "level": 52,
          "price": 40.22,
          "quantity": 1100.0,
          "value": 44242.0
        },
        {
          "level": 53,
          "price": 40.28,
          "quantity": 700.0,
          "value": 28196.0
        },
        {
          "level": 54,
          "price": 40.3,
          "quantity": 20900.0,
          "value": 842269.9999999999
        },
        {
          "level": 55,
          "price": 40.32,
          "quantity": 2100.0,
          "value": 84672.0
        },
        {
          "level": 56,
          "price": 40.34,
          "quantity": 1000.0,
          "value": 40340.0
        },
        {
          "level": 57,
          "price": 40.36,
          "quantity": 3100.0,
          "value": 125116.0
        },
        {
          "level": 58,
          "price": 40.38,
          "quantity": 2200.0,
          "value": 88836.0
        },
        {
          "level": 59,
          "price": 40.4,
          "quantity": 3200.0,
          "value": 129280.0
        },
        {
          "level": 60,
          "price": 40.44,
          "quantity": 500.0,
          "value": 20220.0
        },
        {
          "level": 61,
          "price": 40.48,
          "quantity": 1800.0,
          "value": 72864.0
        },
        {
          "level": 62,
          "price": 40.5,
          "quantity": 8400.0,
          "value": 340200.0
        },
        {
          "level": 63,
          "price": 40.52,
          "quantity": 2900.0,
          "value": 117508.00000000001
        },
        {
          "level": 64,
          "price": 40.56,
          "quantity": 1700.0,
          "value": 68952.0
        },
        {
          "level": 65,
          "price": 40.58,
          "quantity": 6500.0,
          "value": 263770.0
        },
        {
          "level": 66,
          "price": 40.6,
          "quantity": 10700.0,
          "value": 434420.0
        },
        {
          "level": 67,
          "price": 40.62,
          "quantity": 1600.0,
          "value": 64991.99999999999
        },
        {
          "level": 68,
          "price": 40.66,
          "quantity": 3600.0,
          "value": 146376.0
        },
        {
          "level": 69,
          "price": 40.68,
          "quantity": 900.0,
          "value": 36612.0
        },
        {
          "level": 70,
          "price": 40.7,
          "quantity": 800.0,
          "value": 32560.000000000004
        },
        {
          "level": 71,
          "price": 40.72,
          "quantity": 400.0,
          "value": 16288.0
        },
        {
          "level": 72,
          "price": 40.74,
          "quantity": 1000.0,
          "value": 40740.0
        },
        {
          "level": 73,
          "price": 40.78,
          "quantity": 1600.0,
          "value": 65248.0
        },
        {
          "level": 74,
          "price": 40.8,
          "quantity": 26500.0,
          "value": 1081200.0
        },
        {
          "level": 75,
          "price": 40.82,
          "quantity": 300.0,
          "value": 12246.0
        },
        {
          "level": 76,
          "price": 40.86,
          "quantity": 4000.0,
          "value": 163440.0
        },
        {
          "level": 77,
          "price": 40.88,
          "quantity": 5800.0,
          "value": 237104.00000000003
        },
        {
          "level": 78,
          "price": 40.9,
          "quantity": 1900.0,
          "value": 77710.0
        },
        {
          "level": 79,
          "price": 40.96,
          "quantity": 500.0,
          "value": 20480.0
        },
        {
          "level": 80,
          "price": 40.98,
          "quantity": 6800.0,
          "value": 278664.0
        },
        {
          "level": 81,
          "price": 41.0,
          "quantity": 29200.0,
          "value": 1197200.0
        },
        {
          "level": 82,
          "price": 41.04,
          "quantity": 600.0,
          "value": 24624.0
        },
        {
          "level": 83,
          "price": 41.06,
          "quantity": 2000.0,
          "value": 82120.0
        },
        {
          "level": 84,
          "price": 41.08,
          "quantity": 300.0,
          "value": 12324.0
        },
        {
          "level": 85,
          "price": 41.1,
          "quantity": 100.0,
          "value": 4110.0
        },
        {
          "level": 86,
          "price": 41.12,
          "quantity": 1000.0,
          "value": 41120.0
        },
        {
          "level": 87,
          "price": 41.14,
          "quantity": 200.0,
          "value": 8228.0
        },
        {
          "level": 88,
          "price": 41.18,
          "quantity": 600.0,
          "value": 24708.0
        },
        {
          "level": 89,
          "price": 41.2,
          "quantity": 17400.0,
          "value": 716880.0
        },
        {
          "level": 90,
          "price": 41.22,
          "quantity": 2000.0,
          "value": 82440.0
        },
        {
          "level": 91,
          "price": 41.24,
          "quantity": 100.0,
          "value": 4124.0
        },
        {
          "level": 92,
          "price": 41.28,
          "quantity": 400.0,
          "value": 16512.0
        },
        {
          "level": 93,
          "price": 41.3,
          "quantity": 11800.0,
          "value": 487339.99999999994
        },
        {
          "level": 94,
          "price": 41.32,
          "quantity": 1100.0,
          "value": 45452.0
        },
        {
          "level": 95,
          "price": 41.34,
          "quantity": 200.0,
          "value": 8268.0
        },
        {
          "level": 96,
          "price": 41.36,
          "quantity": 900.0,
          "value": 37224.0
        },
        {
          "level": 97,
          "price": 41.4,
          "quantity": 1000.0,
          "value": 41400.0
        },
        {
          "level": 98,
          "price": 41.46,
          "quantity": 10500.0,
          "value": 435330.0
        },
        {
          "level": 99,
          "price": 41.48,
          "quantity": 7700.0,
          "value": 319396.0
        },
        {
          "level": 100,
          "price": 41.5,
          "quantity": 17100.0,
          "value": 709650.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-04-23 07:59:58.339000000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XHKG",
        "mid_price": 38.11,
        "spread_pct": 0.0015743899239045467,
        "spread_ticks": 1.2,
        "tick_size": 0.05,
        "displayed_levels_per_side": 100,
        "bid_depth_notional_displayed": 10791162.0,
        "ask_depth_notional_displayed": 19863626.0,
        "bid_depth_notional_top10": 10791162.0,
        "ask_depth_notional_top10": 19863626.0,
        "bid_ask_depth_ratio": 0.5433
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 366,
        "history_limited": false,
        "trade_days_used": 241,
        "n_trades_used": 2065728,
        "first_trade_date": "2025-04-23",
        "last_trade_date": "2026-04-23",
        "window_label": "Apr 23, 2025 to Apr 23, 2026",
        "window_short_label": "Apr 23, 2025 to Apr 23, 2026",
        "trade_days_label": "241 trading days",
        "trade_count_label": "2,065,728 trades",
        "window_detail_label": "241 trading days • 2,065,728 trades",
        "history_note": "Trade-size percentiles use Apr 23, 2025 to Apr 23, 2026 history (241 trading days • 2,065,728 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 74760.0,
            "impact_pct": -0.0014089999999999999,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 0.69,
            "pct_of_adv": 0.04
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 127650.0,
            "impact_pct": -0.001587,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 1.18,
            "pct_of_adv": 0.06
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 3692993.32,
            "impact_pct": -0.007787,
            "filled_pct": 100.0,
            "levels_consumed": 21,
            "pct_of_bid_depth": 34.22,
            "pct_of_adv": 1.77
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
            "order_id": "345379329",
            "timestamp": "2026-04-23 01:36:53.911000000",
            "local_timestamp": "2026-04-23 09:36:53",
            "posted_price": 39.68,
            "size_shares": 132800.0,
            "notional": 5269504.0,
            "impact_pct": -0.009695,
            "filled_pct": 100.0,
            "levels_consumed": 28,
            "pct_of_bid_depth": 48.83,
            "price_vs_mid_pct": 4.12,
            "executed_event_count": 0,
            "event_count": 38
          },
          {
            "rank": 2,
            "order_id": "1170695169",
            "timestamp": "2026-04-23 02:06:32.876000000",
            "local_timestamp": "2026-04-23 10:06:32",
            "posted_price": 40.16,
            "size_shares": 125200.0,
            "notional": 5028032.0,
            "impact_pct": -0.009415,
            "filled_pct": 100.0,
            "levels_consumed": 28,
            "pct_of_bid_depth": 46.59,
            "price_vs_mid_pct": 5.379,
            "executed_event_count": 0,
            "event_count": 29
          },
          {
            "rank": 3,
            "order_id": "27286529",
            "timestamp": "2026-04-23 01:30:02.375000000",
            "local_timestamp": "2026-04-23 09:30:02",
            "posted_price": 39.64,
            "size_shares": 124000.0,
            "notional": 4915360.0,
            "impact_pct": -0.009276,
            "filled_pct": 100.0,
            "levels_consumed": 28,
            "pct_of_bid_depth": 45.55,
            "price_vs_mid_pct": 4.015,
            "executed_event_count": 0,
            "event_count": 8
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-04-23",
        "bucket_minutes": 30,
        "displayed_levels_per_side": 100,
        "tick_size": 0.05,
        "timezone": "HKT (UTC+8)",
        "session_label": "HKEX continuous trading session",
        "bucket_label_basis": "bucket start time",
        "display_window_label": "HKEX continuous trading session",
        "bucket_note": "Buckets are shown in local market time and labeled by bucket start.",
        "reason": null,
        "rows": [
          {
            "bucket": "09:30",
            "spread_pct": 0.002991026919242209,
            "spread_ticks": 2.399999999999949,
            "bid_depth_notional": 23386574.0,
            "ask_depth_notional": 21317408.0,
            "mid_price": 40.120000000000005
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.0005011275369582343,
            "spread_ticks": 0.40000000000006253,
            "bid_depth_notional": 22128704.0,
            "ask_depth_notional": 25917310.0,
            "mid_price": 39.91
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.0005087763927754547,
            "spread_ticks": 0.40000000000006253,
            "bid_depth_notional": 16995374.0,
            "ask_depth_notional": 20857952.0,
            "mid_price": 39.31
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.0025673940949936178,
            "spread_ticks": 2.0000000000000284,
            "bid_depth_notional": 12585740.0,
            "ask_depth_notional": 18820522.0,
            "mid_price": 38.95
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.0015396458814473256,
            "spread_ticks": 1.2000000000000455,
            "bid_depth_notional": 13778238.0,
            "ask_depth_notional": 20030546.0,
            "mid_price": 38.97
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.0005185377236192902,
            "spread_ticks": 0.3999999999999204,
            "bid_depth_notional": 16233328.0,
            "ask_depth_notional": 20285448.0,
            "mid_price": 38.57
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.0005196154845415206,
            "spread_ticks": 0.40000000000006253,
            "bid_depth_notional": 17424906.0,
            "ask_depth_notional": 18954658.0,
            "mid_price": 38.489999999999995
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.000525624178712303,
            "spread_ticks": 0.40000000000006253,
            "bid_depth_notional": 12352000.0,
            "ask_depth_notional": 21157768.0,
            "mid_price": 38.05
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.000525624178712303,
            "spread_ticks": 0.40000000000006253,
            "bid_depth_notional": 14074000.0,
            "ask_depth_notional": 20643898.0,
            "mid_price": 38.05
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.0005295207836908427,
            "spread_ticks": 0.40000000000006253,
            "bid_depth_notional": 8332554.0,
            "ask_depth_notional": 19198416.0,
            "mid_price": 37.769999999999996
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.0015743899239045467,
            "spread_ticks": 1.2000000000000455,
            "bid_depth_notional": 10791162.0,
            "ask_depth_notional": 19863626.0,
            "mid_price": 38.11
          }
        ],
        "summary": {
          "median_spread_pct": 0.000525624178712303,
          "median_spread_ticks": 0.40000000000006253,
          "median_bid_depth_notional": 14074000.0,
          "median_ask_depth_notional": 20285448.0,
          "tightest_bucket": "10:00",
          "widest_bucket": "09:30",
          "deepest_bid_bucket": "09:30",
          "thinnest_bid_bucket": "15:00"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 0.0,
      "peers": [
        {
          "ticker": "9880",
          "pct": 0.2
        },
        {
          "ticker": "6082",
          "pct": 0.4
        },
        {
          "ticker": "6651",
          "pct": 0.5
        },
        {
          "ticker": "2498",
          "pct": 0.5
        },
        {
          "ticker": "2525",
          "pct": 0.7
        },
        {
          "ticker": "9678",
          "pct": 0.8
        },
        {
          "ticker": "6636",
          "pct": 0.9
        },
        {
          "ticker": "856",
          "pct": 1.1
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 14574,
          "n_runs": 1541,
          "n_trade_days": 1,
          "first_trade_date": "2026-04-23",
          "last_trade_date": "2026-04-23",
          "period_days": 1,
          "method": {
            "key": "persona_v4_l2_only",
            "name": "Trader persona v4 — L2-only",
            "version": "4.0",
            "unit_of_classification": "runs"
          },
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          },
          "composition": {
            "retail_pct": 0.08350487168930973,
            "mixed_pct": 0.21202140798682587,
            "instit_pct": 0.5760944147111294,
            "ambiguous_pct": 0.128379305612735,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.128379305612735,
            "retail_qty_pct": 0.039740975522357495,
            "mixed_qty_pct": 0.16759805134418004,
            "instit_qty_pct": 0.7051932872049075,
            "ambiguous_qty_pct": 0.08746768592855497,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.08746768592855497,
            "retail_notional_pct": 0.039620978735837906,
            "mixed_notional_pct": 0.16727169368126085,
            "instit_notional_pct": 0.7058596065258553,
            "ambiguous_notional_pct": 0.08724772105704594,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.08724772105704594
          },
          "run_composition": {
            "retail_pct": 0.3614536015574302,
            "mixed_pct": 0.24205061648280338,
            "instit_pct": 0.2199870214146658,
            "ambiguous_pct": 0.1765087605451006,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1765087605451006,
            "retail_notional_pct": 0.032662419808434734,
            "mixed_notional_pct": 0.1641546414582302,
            "instit_notional_pct": 0.7166174126521593,
            "unclear_notional_pct": 0.08656552608117574
          },
          "counts": {
            "trades": {
              "retail": 1217,
              "mixed": 3090,
              "institutional": 8396,
              "ambiguous": 1871,
              "unobservable": 0,
              "unclear": 1871
            },
            "runs": {
              "retail": 557,
              "mixed": 373,
              "institutional": 339,
              "ambiguous": 272,
              "unobservable": 0,
              "unclear": 272
            }
          },
          "confidence": {
            "high": 0.5814406229720961,
            "medium": 0.24205061648280338,
            "low": 0.1765087605451006,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 896,
            "medium": 373,
            "low": 272,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5743790311513655,
            "medium": 0.2017291066282421,
            "low": 0.22389186222039248,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 8371,
            "medium": 2940,
            "low": 3263,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.9313757300454251,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.1765087605451006,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.3614536015574302,
          "dominance_gap": 0.11940298507462685,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 11598,
              "UNOBSERVABLE": 1628,
              "WALK_BOOK": 1348
            },
            "d2_information": {
              "UNOBSERVABLE": 14574
            },
            "d3_urgency": {
              "UNOBSERVABLE": 1541
            },
            "participant_confidence": {
              "HIGH": 896,
              "MEDIUM": 373,
              "LOW": 272
            }
          },
          "trade_size": {
            "avg": 31403.89666529436,
            "median": 12042.0
          },
          "run_size": {
            "avg": 266244.1610382868,
            "median": 85896.0,
            "avg_length": 3.7696301103179755
          },
          "recent_trades": [
            {
              "trade_id": "14639",
              "timestamp": "2026-04-23T07:59:57.745033",
              "price": 38.1,
              "size": 100.0,
              "notional": 3810.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 366691,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14638",
              "timestamp": "2026-04-23T07:59:57.745033",
              "price": 38.1,
              "size": 300.0,
              "notional": 11430.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 366691,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14637",
              "timestamp": "2026-04-23T07:59:54.745406",
              "price": 38.08,
              "size": 500.0,
              "notional": 19040.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 366690,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14636",
              "timestamp": "2026-04-23T07:59:54.745406",
              "price": 38.08,
              "size": 1700.0,
              "notional": 64736.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 366690,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14635",
              "timestamp": "2026-04-23T07:59:54.745406",
              "price": 38.08,
              "size": 2700.0,
              "notional": 102816.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 366690,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14634",
              "timestamp": "2026-04-23T07:59:53.300670",
              "price": 38.08,
              "size": 200.0,
              "notional": 7616.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 366690,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14633",
              "timestamp": "2026-04-23T07:59:51.032408",
              "price": 38.08,
              "size": 300.0,
              "notional": 11424.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 366690,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14632",
              "timestamp": "2026-04-23T07:59:50.739171",
              "price": 38.04,
              "size": 100.0,
              "notional": 3804.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14631",
              "timestamp": "2026-04-23T07:59:50.739143",
              "price": 38.04,
              "size": 100.0,
              "notional": 3804.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14630",
              "timestamp": "2026-04-23T07:59:50.738411",
              "price": 38.04,
              "size": 100.0,
              "notional": 3804.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 366690,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14629",
              "timestamp": "2026-04-23T07:59:41.318173",
              "price": 38.0,
              "size": 300.0,
              "notional": 11400.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 366689,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14628",
              "timestamp": "2026-04-23T07:59:41.318173",
              "price": 38.0,
              "size": 100.0,
              "notional": 3800.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 366689,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14627",
              "timestamp": "2026-04-23T07:59:41.318173",
              "price": 38.0,
              "size": 200.0,
              "notional": 7600.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 366689,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14626",
              "timestamp": "2026-04-23T07:59:41.318173",
              "price": 38.02,
              "size": 600.0,
              "notional": 22812.000000000004,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 366688,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14625",
              "timestamp": "2026-04-23T07:59:41.318173",
              "price": 38.02,
              "size": 200.0,
              "notional": 7604.000000000001,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 366688,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14624",
              "timestamp": "2026-04-23T07:59:40.556125",
              "price": 38.02,
              "size": 200.0,
              "notional": 7604.000000000001,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 366688,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14623",
              "timestamp": "2026-04-23T07:59:40.020546",
              "price": 38.04,
              "size": 100.0,
              "notional": 3804.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 366688,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14622",
              "timestamp": "2026-04-23T07:59:39.792437",
              "price": 38.02,
              "size": 400.0,
              "notional": 15208.000000000002,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 366688,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14621",
              "timestamp": "2026-04-23T07:59:39.792437",
              "price": 38.02,
              "size": 600.0,
              "notional": 22812.000000000004,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 366688,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14620",
              "timestamp": "2026-04-23T07:59:36.538155",
              "price": 38.02,
              "size": 500.0,
              "notional": 19010.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 366688,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14619",
              "timestamp": "2026-04-23T07:59:33.054230",
              "price": 38.0,
              "size": 3800.0,
              "notional": 144400.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 366687,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14618",
              "timestamp": "2026-04-23T07:59:33.007703",
              "price": 38.02,
              "size": 700.0,
              "notional": 26614.000000000004,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 366686,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14617",
              "timestamp": "2026-04-23T07:59:33.007703",
              "price": 38.02,
              "size": 100.0,
              "notional": 3802.0000000000005,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 366686,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14616",
              "timestamp": "2026-04-23T07:59:33.007703",
              "price": 38.02,
              "size": 100.0,
              "notional": 3802.0000000000005,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 366686,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14615",
              "timestamp": "2026-04-23T07:59:33.007703",
              "price": 38.02,
              "size": 600.0,
              "notional": 22812.000000000004,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 366686,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14614",
              "timestamp": "2026-04-23T07:59:33.007703",
              "price": 38.02,
              "size": 100.0,
              "notional": 3802.0000000000005,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 366686,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14613",
              "timestamp": "2026-04-23T07:59:33.007703",
              "price": 38.02,
              "size": 400.0,
              "notional": 15208.000000000002,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 366686,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14612",
              "timestamp": "2026-04-23T07:59:33.007703",
              "price": 38.02,
              "size": 300.0,
              "notional": 11406.000000000002,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 366686,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14611",
              "timestamp": "2026-04-23T07:59:33.007703",
              "price": 38.02,
              "size": 1000.0,
              "notional": 38020.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 366686,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14610",
              "timestamp": "2026-04-23T07:59:27.843913",
              "price": 38.0,
              "size": 300.0,
              "notional": 11400.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 366686,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            }
          ],
          "peer_comparison": []
        },
        "30d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 181399,
          "n_runs": 28951,
          "n_trade_days": 21,
          "first_trade_date": "2026-03-23",
          "last_trade_date": "2026-04-23",
          "period_days": 21,
          "method": {
            "key": "persona_v4_l2_only",
            "name": "Trader persona v4 — L2-only",
            "version": "4.0",
            "unit_of_classification": "runs"
          },
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          },
          "composition": {
            "retail_pct": 0.12184741922502329,
            "mixed_pct": 0.18557434164466177,
            "instit_pct": 0.5691321341352488,
            "ambiguous_pct": 0.12344610499506613,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.12344610499506613,
            "retail_qty_pct": 0.053078091297453514,
            "mixed_qty_pct": 0.15367812746621626,
            "instit_qty_pct": 0.7172102530585546,
            "ambiguous_qty_pct": 0.07603352817777563,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.07603352817777563,
            "retail_notional_pct": 0.05248912863609285,
            "mixed_notional_pct": 0.1540761751335697,
            "instit_notional_pct": 0.7177353245581743,
            "ambiguous_notional_pct": 0.07569937167216308,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.07569937167216308
          },
          "run_composition": {
            "retail_pct": 0.38686055749369624,
            "mixed_pct": 0.21712548789333702,
            "instit_pct": 0.24534558391765396,
            "ambiguous_pct": 0.15066837069531278,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.15066837069531278,
            "retail_notional_pct": 0.044144382063009566,
            "mixed_notional_pct": 0.14006583719350135,
            "instit_notional_pct": 0.7449308700528717,
            "unclear_notional_pct": 0.0708589106906174
          },
          "counts": {
            "trades": {
              "retail": 22103,
              "mixed": 33663,
              "institutional": 103240,
              "ambiguous": 22393,
              "unobservable": 0,
              "unclear": 22393
            },
            "runs": {
              "retail": 11200,
              "mixed": 6286,
              "institutional": 7103,
              "ambiguous": 4362,
              "unobservable": 0,
              "unclear": 4362
            }
          },
          "confidence": {
            "high": 0.6321025180477359,
            "medium": 0.2172291112569514,
            "low": 0.15066837069531278,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 18300,
            "medium": 6289,
            "low": 4362,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.598377058307929,
            "medium": 0.1721233303380945,
            "low": 0.2294996113539766,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 108545,
            "medium": 31223,
            "low": 41631,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.9178750302234809,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.15066837069531278,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.38686055749369624,
          "dominance_gap": 0.14151497357604229,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 126529,
              "WALK_BOOK": 31288,
              "UNOBSERVABLE": 23582
            },
            "d2_information": {
              "UNOBSERVABLE": 181399
            },
            "d3_urgency": {
              "UNOBSERVABLE": 28951
            },
            "participant_confidence": {
              "HIGH": 18300,
              "MEDIUM": 6289,
              "LOW": 4362
            }
          },
          "trade_size": {
            "avg": 31915.92249549336,
            "median": 11832.0
          },
          "run_size": {
            "avg": 175453.61146903387,
            "median": 55199.99999999999,
            "avg_length": 2.48955131083555
          },
          "recent_trades": [
            {
              "trade_id": "14639",
              "timestamp": "2026-04-23T07:59:57.745033",
              "price": 38.1,
              "size": 100.0,
              "notional": 3810.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 366691,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14638",
              "timestamp": "2026-04-23T07:59:57.745033",
              "price": 38.1,
              "size": 300.0,
              "notional": 11430.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 366691,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14637",
              "timestamp": "2026-04-23T07:59:54.745406",
              "price": 38.08,
              "size": 500.0,
              "notional": 19040.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 366690,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14636",
              "timestamp": "2026-04-23T07:59:54.745406",
              "price": 38.08,
              "size": 1700.0,
              "notional": 64736.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 366690,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14635",
              "timestamp": "2026-04-23T07:59:54.745406",
              "price": 38.08,
              "size": 2700.0,
              "notional": 102816.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 366690,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14634",
              "timestamp": "2026-04-23T07:59:53.300670",
              "price": 38.08,
              "size": 200.0,
              "notional": 7616.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 366690,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14633",
              "timestamp": "2026-04-23T07:59:51.032408",
              "price": 38.08,
              "size": 300.0,
              "notional": 11424.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 366690,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14632",
              "timestamp": "2026-04-23T07:59:50.739171",
              "price": 38.04,
              "size": 100.0,
              "notional": 3804.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14631",
              "timestamp": "2026-04-23T07:59:50.739143",
              "price": 38.04,
              "size": 100.0,
              "notional": 3804.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14630",
              "timestamp": "2026-04-23T07:59:50.738411",
              "price": 38.04,
              "size": 100.0,
              "notional": 3804.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 366690,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14629",
              "timestamp": "2026-04-23T07:59:41.318173",
              "price": 38.0,
              "size": 300.0,
              "notional": 11400.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 366689,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14628",
              "timestamp": "2026-04-23T07:59:41.318173",
              "price": 38.0,
              "size": 100.0,
              "notional": 3800.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 366689,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14627",
              "timestamp": "2026-04-23T07:59:41.318173",
              "price": 38.0,
              "size": 200.0,
              "notional": 7600.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 366689,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14626",
              "timestamp": "2026-04-23T07:59:41.318173",
              "price": 38.02,
              "size": 600.0,
              "notional": 22812.000000000004,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 366688,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14625",
              "timestamp": "2026-04-23T07:59:41.318173",
              "price": 38.02,
              "size": 200.0,
              "notional": 7604.000000000001,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 366688,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14624",
              "timestamp": "2026-04-23T07:59:40.556125",
              "price": 38.02,
              "size": 200.0,
              "notional": 7604.000000000001,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 366688,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14623",
              "timestamp": "2026-04-23T07:59:40.020546",
              "price": 38.04,
              "size": 100.0,
              "notional": 3804.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 366688,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14622",
              "timestamp": "2026-04-23T07:59:39.792437",
              "price": 38.02,
              "size": 400.0,
              "notional": 15208.000000000002,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 366688,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14621",
              "timestamp": "2026-04-23T07:59:39.792437",
              "price": 38.02,
              "size": 600.0,
              "notional": 22812.000000000004,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 366688,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14620",
              "timestamp": "2026-04-23T07:59:36.538155",
              "price": 38.02,
              "size": 500.0,
              "notional": 19010.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 366688,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14619",
              "timestamp": "2026-04-23T07:59:33.054230",
              "price": 38.0,
              "size": 3800.0,
              "notional": 144400.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 366687,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14618",
              "timestamp": "2026-04-23T07:59:33.007703",
              "price": 38.02,
              "size": 700.0,
              "notional": 26614.000000000004,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 366686,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14617",
              "timestamp": "2026-04-23T07:59:33.007703",
              "price": 38.02,
              "size": 100.0,
              "notional": 3802.0000000000005,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 366686,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14616",
              "timestamp": "2026-04-23T07:59:33.007703",
              "price": 38.02,
              "size": 100.0,
              "notional": 3802.0000000000005,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 366686,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14615",
              "timestamp": "2026-04-23T07:59:33.007703",
              "price": 38.02,
              "size": 600.0,
              "notional": 22812.000000000004,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 366686,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14614",
              "timestamp": "2026-04-23T07:59:33.007703",
              "price": 38.02,
              "size": 100.0,
              "notional": 3802.0000000000005,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 366686,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14613",
              "timestamp": "2026-04-23T07:59:33.007703",
              "price": 38.02,
              "size": 400.0,
              "notional": 15208.000000000002,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 366686,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14612",
              "timestamp": "2026-04-23T07:59:33.007703",
              "price": 38.02,
              "size": 300.0,
              "notional": 11406.000000000002,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 366686,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14611",
              "timestamp": "2026-04-23T07:59:33.007703",
              "price": 38.02,
              "size": 1000.0,
              "notional": 38020.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 366686,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14610",
              "timestamp": "2026-04-23T07:59:27.843913",
              "price": 38.0,
              "size": 300.0,
              "notional": 11400.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 366686,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            }
          ],
          "peer_comparison": []
        },
        "3m": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 486206,
          "n_runs": 84767,
          "n_trade_days": 63,
          "first_trade_date": "2026-01-19",
          "last_trade_date": "2026-04-23",
          "period_days": 63,
          "method": {
            "key": "persona_v4_l2_only",
            "name": "Trader persona v4 — L2-only",
            "version": "4.0",
            "unit_of_classification": "runs"
          },
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          },
          "composition": {
            "retail_pct": 0.13347223193461208,
            "mixed_pct": 0.1923361702652785,
            "instit_pct": 0.5419657511425199,
            "ambiguous_pct": 0.13222584665758957,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.13222584665758957,
            "retail_qty_pct": 0.05615148836150477,
            "mixed_qty_pct": 0.16565573020660418,
            "instit_qty_pct": 0.6982368632774221,
            "ambiguous_qty_pct": 0.07995591815446898,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.07995591815446898,
            "retail_notional_pct": 0.05651622543150032,
            "mixed_notional_pct": 0.1689898961535369,
            "instit_notional_pct": 0.6939587292192536,
            "ambiguous_notional_pct": 0.0805351491957092,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0805351491957092
          },
          "run_composition": {
            "retail_pct": 0.40015572097632335,
            "mixed_pct": 0.2153078438543301,
            "instit_pct": 0.22668019394339778,
            "ambiguous_pct": 0.15785624122594877,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.15785624122594877,
            "retail_notional_pct": 0.04825870429772769,
            "mixed_notional_pct": 0.14597702170108268,
            "instit_notional_pct": 0.7275205169650418,
            "unclear_notional_pct": 0.07824375703614787
          },
          "counts": {
            "trades": {
              "retail": 64895,
              "mixed": 93515,
              "institutional": 263507,
              "ambiguous": 64289,
              "unobservable": 0,
              "unclear": 64289
            },
            "runs": {
              "retail": 33920,
              "mixed": 18251,
              "institutional": 19215,
              "ambiguous": 13381,
              "unobservable": 0,
              "unclear": 13381
            }
          },
          "confidence": {
            "high": 0.6267533356140951,
            "medium": 0.2153668290726344,
            "low": 0.1578798353132705,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 53128,
            "medium": 18256,
            "low": 13383,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5671814004763414,
            "medium": 0.17425124330016495,
            "low": 0.25856735622349375,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 275767,
            "medium": 84722,
            "low": 125717,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.9147757971852253,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.15785624122594877,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.40015572097632335,
          "dominance_gap": 0.17347552703292557,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 330406,
              "WALK_BOOK": 82011,
              "UNOBSERVABLE": 73789
            },
            "d2_information": {
              "UNOBSERVABLE": 486206
            },
            "d3_urgency": {
              "UNOBSERVABLE": 84767
            },
            "participant_confidence": {
              "HIGH": 53128,
              "MEDIUM": 18256,
              "LOW": 13383
            }
          },
          "trade_size": {
            "avg": 31153.72018284431,
            "median": 11238.0
          },
          "run_size": {
            "avg": 150495.65788337443,
            "median": 46684.0,
            "avg_length": 2.3110762442931803
          },
          "recent_trades": [
            {
              "trade_id": "14639",
              "timestamp": "2026-04-23T07:59:57.745033",
              "price": 38.1,
              "size": 100.0,
              "notional": 3810.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 366691,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14638",
              "timestamp": "2026-04-23T07:59:57.745033",
              "price": 38.1,
              "size": 300.0,
              "notional": 11430.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 366691,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14637",
              "timestamp": "2026-04-23T07:59:54.745406",
              "price": 38.08,
              "size": 500.0,
              "notional": 19040.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 366690,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14636",
              "timestamp": "2026-04-23T07:59:54.745406",
              "price": 38.08,
              "size": 1700.0,
              "notional": 64736.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 366690,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14635",
              "timestamp": "2026-04-23T07:59:54.745406",
              "price": 38.08,
              "size": 2700.0,
              "notional": 102816.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 366690,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14634",
              "timestamp": "2026-04-23T07:59:53.300670",
              "price": 38.08,
              "size": 200.0,
              "notional": 7616.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 366690,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14633",
              "timestamp": "2026-04-23T07:59:51.032408",
              "price": 38.08,
              "size": 300.0,
              "notional": 11424.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 366690,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14632",
              "timestamp": "2026-04-23T07:59:50.739171",
              "price": 38.04,
              "size": 100.0,
              "notional": 3804.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14631",
              "timestamp": "2026-04-23T07:59:50.739143",
              "price": 38.04,
              "size": 100.0,
              "notional": 3804.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14630",
              "timestamp": "2026-04-23T07:59:50.738411",
              "price": 38.04,
              "size": 100.0,
              "notional": 3804.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 366690,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14629",
              "timestamp": "2026-04-23T07:59:41.318173",
              "price": 38.0,
              "size": 300.0,
              "notional": 11400.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 366689,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14628",
              "timestamp": "2026-04-23T07:59:41.318173",
              "price": 38.0,
              "size": 100.0,
              "notional": 3800.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 366689,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14627",
              "timestamp": "2026-04-23T07:59:41.318173",
              "price": 38.0,
              "size": 200.0,
              "notional": 7600.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 366689,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14626",
              "timestamp": "2026-04-23T07:59:41.318173",
              "price": 38.02,
              "size": 600.0,
              "notional": 22812.000000000004,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 366688,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14625",
              "timestamp": "2026-04-23T07:59:41.318173",
              "price": 38.02,
              "size": 200.0,
              "notional": 7604.000000000001,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 366688,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14624",
              "timestamp": "2026-04-23T07:59:40.556125",
              "price": 38.02,
              "size": 200.0,
              "notional": 7604.000000000001,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 366688,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14623",
              "timestamp": "2026-04-23T07:59:40.020546",
              "price": 38.04,
              "size": 100.0,
              "notional": 3804.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 366688,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14622",
              "timestamp": "2026-04-23T07:59:39.792437",
              "price": 38.02,
              "size": 400.0,
              "notional": 15208.000000000002,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 366688,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14621",
              "timestamp": "2026-04-23T07:59:39.792437",
              "price": 38.02,
              "size": 600.0,
              "notional": 22812.000000000004,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 366688,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14620",
              "timestamp": "2026-04-23T07:59:36.538155",
              "price": 38.02,
              "size": 500.0,
              "notional": 19010.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 366688,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14619",
              "timestamp": "2026-04-23T07:59:33.054230",
              "price": 38.0,
              "size": 3800.0,
              "notional": 144400.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 366687,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14618",
              "timestamp": "2026-04-23T07:59:33.007703",
              "price": 38.02,
              "size": 700.0,
              "notional": 26614.000000000004,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 366686,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14617",
              "timestamp": "2026-04-23T07:59:33.007703",
              "price": 38.02,
              "size": 100.0,
              "notional": 3802.0000000000005,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 366686,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14616",
              "timestamp": "2026-04-23T07:59:33.007703",
              "price": 38.02,
              "size": 100.0,
              "notional": 3802.0000000000005,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 366686,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14615",
              "timestamp": "2026-04-23T07:59:33.007703",
              "price": 38.02,
              "size": 600.0,
              "notional": 22812.000000000004,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 366686,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14614",
              "timestamp": "2026-04-23T07:59:33.007703",
              "price": 38.02,
              "size": 100.0,
              "notional": 3802.0000000000005,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 366686,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14613",
              "timestamp": "2026-04-23T07:59:33.007703",
              "price": 38.02,
              "size": 400.0,
              "notional": 15208.000000000002,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 366686,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14612",
              "timestamp": "2026-04-23T07:59:33.007703",
              "price": 38.02,
              "size": 300.0,
              "notional": 11406.000000000002,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 366686,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14611",
              "timestamp": "2026-04-23T07:59:33.007703",
              "price": 38.02,
              "size": 1000.0,
              "notional": 38020.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 366686,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14610",
              "timestamp": "2026-04-23T07:59:27.843913",
              "price": 38.0,
              "size": 300.0,
              "notional": 11400.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 366686,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            }
          ],
          "peer_comparison": []
        },
        "6m": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 985725,
          "n_runs": 183725,
          "n_trade_days": 126,
          "first_trade_date": "2025-10-08",
          "last_trade_date": "2026-04-23",
          "period_days": 126,
          "method": {
            "key": "persona_v4_l2_only",
            "name": "Trader persona v4 — L2-only",
            "version": "4.0",
            "unit_of_classification": "runs"
          },
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          },
          "composition": {
            "retail_pct": 0.1466504349590403,
            "mixed_pct": 0.20223185979862537,
            "instit_pct": 0.5159410586116817,
            "ambiguous_pct": 0.13517664663065257,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.13517664663065257,
            "retail_qty_pct": 0.06062408973249118,
            "mixed_qty_pct": 0.18130160240376728,
            "instit_qty_pct": 0.677018626388459,
            "ambiguous_qty_pct": 0.08105568147528251,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.08105568147528251,
            "retail_notional_pct": 0.06141231856425212,
            "mixed_notional_pct": 0.18605821773860096,
            "instit_notional_pct": 0.6707250106997916,
            "ambiguous_notional_pct": 0.08180445299735532,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.08180445299735532
          },
          "run_composition": {
            "retail_pct": 0.41316097428221527,
            "mixed_pct": 0.21834807456796843,
            "instit_pct": 0.20913321540345625,
            "ambiguous_pct": 0.15935773574636006,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.15935773574636006,
            "retail_notional_pct": 0.05434755649555177,
            "mixed_notional_pct": 0.15776369501513135,
            "instit_notional_pct": 0.706260691433025,
            "unclear_notional_pct": 0.0816280570562919
          },
          "counts": {
            "trades": {
              "retail": 144557,
              "mixed": 199345,
              "institutional": 508576,
              "ambiguous": 133247,
              "unobservable": 0,
              "unclear": 133247
            },
            "runs": {
              "retail": 75908,
              "mixed": 40116,
              "institutional": 38423,
              "ambiguous": 29278,
              "unobservable": 0,
              "unclear": 29278
            }
          },
          "confidence": {
            "high": 0.6222397605116342,
            "medium": 0.21837528915498708,
            "low": 0.15938495033337868,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 114321,
            "medium": 40121,
            "low": 29283,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5362266352177332,
            "medium": 0.17748662152222983,
            "low": 0.286286743260037,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 528572,
            "medium": 174953,
            "low": 282200,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.9130145598040549,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.15935773574636006,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.41316097428221527,
          "dominance_gap": 0.19481289971424684,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 648994,
              "UNOBSERVABLE": 176395,
              "WALK_BOOK": 160336
            },
            "d2_information": {
              "UNOBSERVABLE": 985725
            },
            "d3_urgency": {
              "UNOBSERVABLE": 183725
            },
            "participant_confidence": {
              "HIGH": 114321,
              "MEDIUM": 40121,
              "LOW": 29283
            }
          },
          "trade_size": {
            "avg": 34081.35610888433,
            "median": 12474.0
          },
          "run_size": {
            "avg": 147819.64180884475,
            "median": 47385.0,
            "avg_length": 2.1679629881616544
          },
          "recent_trades": [
            {
              "trade_id": "14639",
              "timestamp": "2026-04-23T07:59:57.745033",
              "price": 38.1,
              "size": 100.0,
              "notional": 3810.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 366691,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14638",
              "timestamp": "2026-04-23T07:59:57.745033",
              "price": 38.1,
              "size": 300.0,
              "notional": 11430.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 366691,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14637",
              "timestamp": "2026-04-23T07:59:54.745406",
              "price": 38.08,
              "size": 500.0,
              "notional": 19040.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 366690,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14636",
              "timestamp": "2026-04-23T07:59:54.745406",
              "price": 38.08,
              "size": 1700.0,
              "notional": 64736.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 366690,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14635",
              "timestamp": "2026-04-23T07:59:54.745406",
              "price": 38.08,
              "size": 2700.0,
              "notional": 102816.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 366690,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14634",
              "timestamp": "2026-04-23T07:59:53.300670",
              "price": 38.08,
              "size": 200.0,
              "notional": 7616.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 366690,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14633",
              "timestamp": "2026-04-23T07:59:51.032408",
              "price": 38.08,
              "size": 300.0,
              "notional": 11424.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 366690,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14632",
              "timestamp": "2026-04-23T07:59:50.739171",
              "price": 38.04,
              "size": 100.0,
              "notional": 3804.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14631",
              "timestamp": "2026-04-23T07:59:50.739143",
              "price": 38.04,
              "size": 100.0,
              "notional": 3804.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14630",
              "timestamp": "2026-04-23T07:59:50.738411",
              "price": 38.04,
              "size": 100.0,
              "notional": 3804.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 366690,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14629",
              "timestamp": "2026-04-23T07:59:41.318173",
              "price": 38.0,
              "size": 300.0,
              "notional": 11400.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 366689,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14628",
              "timestamp": "2026-04-23T07:59:41.318173",
              "price": 38.0,
              "size": 100.0,
              "notional": 3800.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 366689,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14627",
              "timestamp": "2026-04-23T07:59:41.318173",
              "price": 38.0,
              "size": 200.0,
              "notional": 7600.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 366689,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14626",
              "timestamp": "2026-04-23T07:59:41.318173",
              "price": 38.02,
              "size": 600.0,
              "notional": 22812.000000000004,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 366688,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14625",
              "timestamp": "2026-04-23T07:59:41.318173",
              "price": 38.02,
              "size": 200.0,
              "notional": 7604.000000000001,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 366688,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14624",
              "timestamp": "2026-04-23T07:59:40.556125",
              "price": 38.02,
              "size": 200.0,
              "notional": 7604.000000000001,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 366688,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14623",
              "timestamp": "2026-04-23T07:59:40.020546",
              "price": 38.04,
              "size": 100.0,
              "notional": 3804.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 366688,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14622",
              "timestamp": "2026-04-23T07:59:39.792437",
              "price": 38.02,
              "size": 400.0,
              "notional": 15208.000000000002,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 366688,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14621",
              "timestamp": "2026-04-23T07:59:39.792437",
              "price": 38.02,
              "size": 600.0,
              "notional": 22812.000000000004,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 366688,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14620",
              "timestamp": "2026-04-23T07:59:36.538155",
              "price": 38.02,
              "size": 500.0,
              "notional": 19010.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 366688,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14619",
              "timestamp": "2026-04-23T07:59:33.054230",
              "price": 38.0,
              "size": 3800.0,
              "notional": 144400.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 366687,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14618",
              "timestamp": "2026-04-23T07:59:33.007703",
              "price": 38.02,
              "size": 700.0,
              "notional": 26614.000000000004,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 366686,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14617",
              "timestamp": "2026-04-23T07:59:33.007703",
              "price": 38.02,
              "size": 100.0,
              "notional": 3802.0000000000005,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 366686,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14616",
              "timestamp": "2026-04-23T07:59:33.007703",
              "price": 38.02,
              "size": 100.0,
              "notional": 3802.0000000000005,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 366686,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14615",
              "timestamp": "2026-04-23T07:59:33.007703",
              "price": 38.02,
              "size": 600.0,
              "notional": 22812.000000000004,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 366686,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14614",
              "timestamp": "2026-04-23T07:59:33.007703",
              "price": 38.02,
              "size": 100.0,
              "notional": 3802.0000000000005,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 366686,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14613",
              "timestamp": "2026-04-23T07:59:33.007703",
              "price": 38.02,
              "size": 400.0,
              "notional": 15208.000000000002,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 366686,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14612",
              "timestamp": "2026-04-23T07:59:33.007703",
              "price": 38.02,
              "size": 300.0,
              "notional": 11406.000000000002,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 366686,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14611",
              "timestamp": "2026-04-23T07:59:33.007703",
              "price": 38.02,
              "size": 1000.0,
              "notional": 38020.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 366686,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "14610",
              "timestamp": "2026-04-23T07:59:27.843913",
              "price": 38.0,
              "size": 300.0,
              "notional": 11400.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 366686,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            }
          ],
          "peer_comparison": []
        }
      },
      "valid": true,
      "currency": "HKD",
      "n_trades": 985725,
      "n_runs": 183725,
      "n_trade_days": 126,
      "first_trade_date": "2025-10-08",
      "last_trade_date": "2026-04-23",
      "period_days": 126,
      "method": {
        "key": "persona_v4_l2_only",
        "name": "Trader persona v4 — L2-only",
        "version": "4.0",
        "unit_of_classification": "runs"
      },
      "thresholds": {
        "retail_max": 10000.0,
        "instit_min": 50000.0
      },
      "composition": {
        "retail_pct": 0.1466504349590403,
        "mixed_pct": 0.20223185979862537,
        "instit_pct": 0.5159410586116817,
        "ambiguous_pct": 0.13517664663065257,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.13517664663065257,
        "retail_qty_pct": 0.06062408973249118,
        "mixed_qty_pct": 0.18130160240376728,
        "instit_qty_pct": 0.677018626388459,
        "ambiguous_qty_pct": 0.08105568147528251,
        "unobservable_qty_pct": 0.0,
        "unclear_qty_pct": 0.08105568147528251,
        "retail_notional_pct": 0.06141231856425212,
        "mixed_notional_pct": 0.18605821773860096,
        "instit_notional_pct": 0.6707250106997916,
        "ambiguous_notional_pct": 0.08180445299735532,
        "unobservable_notional_pct": 0.0,
        "unclear_notional_pct": 0.08180445299735532
      },
      "run_composition": {
        "retail_pct": 0.41316097428221527,
        "mixed_pct": 0.21834807456796843,
        "instit_pct": 0.20913321540345625,
        "ambiguous_pct": 0.15935773574636006,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.15935773574636006
      },
      "trade_size": {
        "avg": 34081.35610888433,
        "median": 12474.0
      },
      "run_size": {
        "avg": 147819.64180884475,
        "median": 47385.0,
        "avg_length": 2.1679629881616544
      },
      "confidence": {
        "high": 0.6222397605116342,
        "medium": 0.21837528915498708,
        "low": 0.15938495033337868,
        "na": 0.0
      },
      "confidence_counts": {
        "high": 114321,
        "medium": 40121,
        "low": 29283,
        "na": 0
      },
      "trade_confidence": {
        "high": 0.5362266352177332,
        "medium": 0.17748662152222983,
        "low": 0.286286743260037,
        "na": 0.0
      },
      "trade_confidence_counts": {
        "high": 528572,
        "medium": 174953,
        "low": 282200,
        "na": 0
      },
      "counts": {
        "trades": {
          "retail": 144557,
          "mixed": 199345,
          "institutional": 508576,
          "ambiguous": 133247,
          "unobservable": 0,
          "unclear": 133247
        },
        "runs": {
          "retail": 75908,
          "mixed": 40116,
          "institutional": 38423,
          "ambiguous": 29278,
          "unobservable": 0,
          "unclear": 29278
        }
      },
      "observability": {
        "avg_feature_coverage": 0.9130145598040549,
        "observable_run_pct": 1.0,
        "ambiguous_run_pct": 0.15935773574636006,
        "unobservable_run_pct": 0.0
      },
      "dominant_bucket": "RETAIL",
      "dominant_label": "Retail-led",
      "dominant_share": 0.41316097428221527,
      "dominance_gap": 0.19481289971424684,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2025-11",
            "n_trades": 156666,
            "n_runs": 30679,
            "retail_pct": 0.15751981923327332,
            "mixed_pct": 0.2019327741820178,
            "instit_pct": 0.5071681156090025,
            "ambiguous_pct": 0.13337929097570628,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.13337929097570628,
            "avg_trade_size": 34191.16662728352,
            "avg_run_notional": 138272.51452231169,
            "retail_qty_pct": 0.06680932882776419,
            "mixed_qty_pct": 0.19106829184341878,
            "instit_qty_pct": 0.6601498423621198,
            "ambiguous_qty_pct": 0.08197253696669721,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.08197253696669721,
            "retail_notional_pct": 0.06702430048481127,
            "mixed_notional_pct": 0.19265231548446576,
            "instit_notional_pct": 0.6581513399798751,
            "ambiguous_notional_pct": 0.08217204405084791,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.08217204405084791,
            "run_retail_pct": 0.41930962547671047,
            "run_mixed_pct": 0.21672805502135012,
            "run_instit_pct": 0.2041461586101242,
            "run_ambiguous_pct": 0.15981616089181525,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.15981616089181525,
            "avg_feature_coverage": 0.9116366244010561,
            "high_confidence_pct": 0.6234557840868347,
            "medium_confidence_pct": 0.21672805502135012,
            "low_confidence_pct": 0.15981616089181525,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2025-12",
            "n_trades": 95670,
            "n_runs": 17160,
            "retail_pct": 0.14236437754782064,
            "mixed_pct": 0.1902059161701683,
            "instit_pct": 0.5375770879063447,
            "ambiguous_pct": 0.12985261837566636,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.12985261837566636,
            "avg_trade_size": 32653.479007212292,
            "avg_run_notional": 159331.81468181818,
            "retail_qty_pct": 0.05819177714721125,
            "mixed_qty_pct": 0.16151837469592722,
            "instit_qty_pct": 0.7084318610730457,
            "ambiguous_qty_pct": 0.07185798708381584,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.07185798708381584,
            "retail_notional_pct": 0.05816451290339424,
            "mixed_notional_pct": 0.16154318640690193,
            "instit_notional_pct": 0.7085509368011939,
            "ambiguous_notional_pct": 0.07174136388851006,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.07174136388851006,
            "run_retail_pct": 0.39813519813519815,
            "run_mixed_pct": 0.21241258741258742,
            "run_instit_pct": 0.23461538461538461,
            "run_ambiguous_pct": 0.15483682983682984,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.15483682983682984,
            "avg_feature_coverage": 0.9148310023310023,
            "high_confidence_pct": 0.6326340326340326,
            "medium_confidence_pct": 0.21241258741258742,
            "low_confidence_pct": 0.15495337995337996,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-01",
            "n_trades": 206615,
            "n_runs": 40904,
            "retail_pct": 0.15445635602448998,
            "mixed_pct": 0.22671635650848196,
            "instit_pct": 0.4741040098734361,
            "ambiguous_pct": 0.14472327759359194,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.14472327759359194,
            "avg_trade_size": 39631.613679597314,
            "avg_run_notional": 148452.94682940544,
            "retail_qty_pct": 0.06245798559378031,
            "mixed_qty_pct": 0.21519626932851585,
            "instit_qty_pct": 0.63573449718322,
            "ambiguous_qty_pct": 0.08661124789448395,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.08661124789448395,
            "retail_notional_pct": 0.06228072580862525,
            "mixed_notional_pct": 0.2163597678193087,
            "instit_notional_pct": 0.6347172033755903,
            "ambiguous_notional_pct": 0.08664230299647567,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.08664230299647567,
            "run_retail_pct": 0.4220858595736358,
            "run_mixed_pct": 0.23061314296890278,
            "run_instit_pct": 0.17990905534911011,
            "run_ambiguous_pct": 0.16739194210835126,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.16739194210835126,
            "avg_feature_coverage": 0.91309529630354,
            "high_confidence_pct": 0.6019704674359476,
            "medium_confidence_pct": 0.23063759045570115,
            "low_confidence_pct": 0.16739194210835126,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-02",
            "n_trades": 126448,
            "n_runs": 20192,
            "retail_pct": 0.12222415538403138,
            "mixed_pct": 0.1778280399848159,
            "instit_pct": 0.5732949512843224,
            "ambiguous_pct": 0.12665285334683032,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.12665285334683032,
            "avg_trade_size": 31095.77856272934,
            "avg_run_notional": 169866.93623217114,
            "retail_qty_pct": 0.052677697326737286,
            "mixed_qty_pct": 0.1537084400744524,
            "instit_qty_pct": 0.7169994024760806,
            "ambiguous_qty_pct": 0.07661446012272974,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.07661446012272974,
            "retail_notional_pct": 0.05312071157977673,
            "mixed_notional_pct": 0.1540232799637082,
            "instit_notional_pct": 0.7162003705456835,
            "ambiguous_notional_pct": 0.0766556379108315,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0766556379108315,
            "run_retail_pct": 0.3872325673534073,
            "run_mixed_pct": 0.21023177496038034,
            "run_instit_pct": 0.24925713153724247,
            "run_ambiguous_pct": 0.1532785261489699,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.1532785261489699,
            "avg_feature_coverage": 0.915548236925515,
            "high_confidence_pct": 0.6363906497622821,
            "medium_confidence_pct": 0.21028129952456417,
            "low_confidence_pct": 0.15332805071315372,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-03",
            "n_trades": 156461,
            "n_runs": 28044,
            "retail_pct": 0.1352541527920696,
            "mixed_pct": 0.186289235017033,
            "instit_pct": 0.5483219460440621,
            "ambiguous_pct": 0.1301346661468353,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1301346661468353,
            "avg_trade_size": 25337.781712759093,
            "avg_run_notional": 124138.51296391385,
            "retail_qty_pct": 0.05758440951669621,
            "mixed_qty_pct": 0.14716640406619447,
            "instit_qty_pct": 0.7178206365078227,
            "ambiguous_qty_pct": 0.07742854990928666,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.07742854990928666,
            "retail_notional_pct": 0.057545559949067036,
            "mixed_notional_pct": 0.14716969309578481,
            "instit_notional_pct": 0.7178223357846633,
            "ambiguous_notional_pct": 0.07746241117048494,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.07746241117048494,
            "run_retail_pct": 0.3955926401369277,
            "run_mixed_pct": 0.21024104977891883,
            "run_instit_pct": 0.23965910711738697,
            "run_ambiguous_pct": 0.1545072029667665,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.1545072029667665,
            "avg_feature_coverage": 0.9154578519469405,
            "high_confidence_pct": 0.6351447725003566,
            "medium_confidence_pct": 0.21031236628155756,
            "low_confidence_pct": 0.15454286121808586,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-04",
            "n_trades": 125831,
            "n_runs": 19688,
            "retail_pct": 0.12028037605995343,
            "mixed_pct": 0.19537315923738982,
            "instit_pct": 0.5565162797720753,
            "ambiguous_pct": 0.1278301849305815,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1278301849305815,
            "avg_trade_size": 34342.79582821403,
            "avg_run_notional": 193097.94198191792,
            "retail_qty_pct": 0.051657878939254775,
            "mixed_qty_pct": 0.16053678981478933,
            "instit_qty_pct": 0.7108949230953243,
            "ambiguous_qty_pct": 0.07691040815063153,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.07691040815063153,
            "retail_notional_pct": 0.051152958418186394,
            "mixed_notional_pct": 0.16038276485970435,
            "instit_notional_pct": 0.7120797346196227,
            "ambiguous_notional_pct": 0.07638454210248663,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.07638454210248663,
            "run_retail_pct": 0.3863266964648517,
            "run_mixed_pct": 0.22186103210077204,
            "run_instit_pct": 0.2355749695245835,
            "run_ambiguous_pct": 0.15623730190979276,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.15623730190979276,
            "avg_feature_coverage": 0.919176655830963,
            "high_confidence_pct": 0.6218508736286062,
            "medium_confidence_pct": 0.221911824461601,
            "low_confidence_pct": 0.15623730190979276,
            "na_confidence_pct": 0.0,
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
          "trade_id": "14639",
          "timestamp": "2026-04-23T07:59:57.745033",
          "price": 38.1,
          "size": 100.0,
          "notional": 3810.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 366691,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "14638",
          "timestamp": "2026-04-23T07:59:57.745033",
          "price": 38.1,
          "size": 300.0,
          "notional": 11430.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 366691,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "14637",
          "timestamp": "2026-04-23T07:59:54.745406",
          "price": 38.08,
          "size": 500.0,
          "notional": 19040.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 366690,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "14636",
          "timestamp": "2026-04-23T07:59:54.745406",
          "price": 38.08,
          "size": 1700.0,
          "notional": 64736.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 366690,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "14635",
          "timestamp": "2026-04-23T07:59:54.745406",
          "price": 38.08,
          "size": 2700.0,
          "notional": 102816.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 366690,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "14634",
          "timestamp": "2026-04-23T07:59:53.300670",
          "price": 38.08,
          "size": 200.0,
          "notional": 7616.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 366690,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "14633",
          "timestamp": "2026-04-23T07:59:51.032408",
          "price": 38.08,
          "size": 300.0,
          "notional": 11424.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 366690,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "14632",
          "timestamp": "2026-04-23T07:59:50.739171",
          "price": 38.04,
          "size": 100.0,
          "notional": 3804.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "14631",
          "timestamp": "2026-04-23T07:59:50.739143",
          "price": 38.04,
          "size": 100.0,
          "notional": 3804.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "14630",
          "timestamp": "2026-04-23T07:59:50.738411",
          "price": 38.04,
          "size": 100.0,
          "notional": 3804.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 366690,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "14629",
          "timestamp": "2026-04-23T07:59:41.318173",
          "price": 38.0,
          "size": 300.0,
          "notional": 11400.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 366689,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "14628",
          "timestamp": "2026-04-23T07:59:41.318173",
          "price": 38.0,
          "size": 100.0,
          "notional": 3800.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 366689,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "14627",
          "timestamp": "2026-04-23T07:59:41.318173",
          "price": 38.0,
          "size": 200.0,
          "notional": 7600.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 366689,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "14626",
          "timestamp": "2026-04-23T07:59:41.318173",
          "price": 38.02,
          "size": 600.0,
          "notional": 22812.000000000004,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 366688,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "14625",
          "timestamp": "2026-04-23T07:59:41.318173",
          "price": 38.02,
          "size": 200.0,
          "notional": 7604.000000000001,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 366688,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "14624",
          "timestamp": "2026-04-23T07:59:40.556125",
          "price": 38.02,
          "size": 200.0,
          "notional": 7604.000000000001,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 366688,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "14623",
          "timestamp": "2026-04-23T07:59:40.020546",
          "price": 38.04,
          "size": 100.0,
          "notional": 3804.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 366688,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "14622",
          "timestamp": "2026-04-23T07:59:39.792437",
          "price": 38.02,
          "size": 400.0,
          "notional": 15208.000000000002,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 366688,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "14621",
          "timestamp": "2026-04-23T07:59:39.792437",
          "price": 38.02,
          "size": 600.0,
          "notional": 22812.000000000004,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 366688,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "14620",
          "timestamp": "2026-04-23T07:59:36.538155",
          "price": 38.02,
          "size": 500.0,
          "notional": 19010.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 366688,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "14619",
          "timestamp": "2026-04-23T07:59:33.054230",
          "price": 38.0,
          "size": 3800.0,
          "notional": 144400.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 366687,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "14618",
          "timestamp": "2026-04-23T07:59:33.007703",
          "price": 38.02,
          "size": 700.0,
          "notional": 26614.000000000004,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 366686,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "14617",
          "timestamp": "2026-04-23T07:59:33.007703",
          "price": 38.02,
          "size": 100.0,
          "notional": 3802.0000000000005,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 366686,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "14616",
          "timestamp": "2026-04-23T07:59:33.007703",
          "price": 38.02,
          "size": 100.0,
          "notional": 3802.0000000000005,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 366686,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "14615",
          "timestamp": "2026-04-23T07:59:33.007703",
          "price": 38.02,
          "size": 600.0,
          "notional": 22812.000000000004,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 366686,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "14614",
          "timestamp": "2026-04-23T07:59:33.007703",
          "price": 38.02,
          "size": 100.0,
          "notional": 3802.0000000000005,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 366686,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "14613",
          "timestamp": "2026-04-23T07:59:33.007703",
          "price": 38.02,
          "size": 400.0,
          "notional": 15208.000000000002,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 366686,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "14612",
          "timestamp": "2026-04-23T07:59:33.007703",
          "price": 38.02,
          "size": 300.0,
          "notional": 11406.000000000002,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 366686,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "14611",
          "timestamp": "2026-04-23T07:59:33.007703",
          "price": 38.02,
          "size": 1000.0,
          "notional": 38020.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 366686,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "14610",
          "timestamp": "2026-04-23T07:59:27.843913",
          "price": 38.0,
          "size": 300.0,
          "notional": 11400.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 366686,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
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
      "total_trades": 985724,
      "price_moving_trades": 235996,
      "pct_price_moving": 23.941387244299623,
      "all_movers": {
        "count": 235996,
        "avg_size": 36654.738977058936,
        "median_size": 12850.0,
        "retail_count": 60758,
        "mixed_count": 49178,
        "institutional_count": 93128,
        "ambiguous_count": 32932,
        "unobservable_count": 0,
        "retail_pct": 25.745351616129085,
        "mixed_pct": 20.838488787945558,
        "instit_pct": 39.461685791284594,
        "unclear_pct": 13.954473804640758
      },
      "positive_movers": {
        "count": 115247,
        "avg_size": 34735.92233784827,
        "median_size": 11540.0,
        "retail_count": 26941,
        "mixed_count": 23771,
        "institutional_count": 48403,
        "ambiguous_count": 16132,
        "unobservable_count": 0,
        "retail_pct": 23.376747333987,
        "mixed_pct": 20.626133435143647,
        "instit_pct": 41.999357900856424,
        "unclear_pct": 13.997761330012928
      },
      "negative_movers": {
        "count": 120749,
        "avg_size": 38486.123594895194,
        "median_size": 14106.000000000002,
        "retail_count": 33817,
        "mixed_count": 25407,
        "institutional_count": 44725,
        "ambiguous_count": 16800,
        "unobservable_count": 0,
        "retail_pct": 28.006029035437148,
        "mixed_pct": 21.041168042799526,
        "instit_pct": 37.03964422065607,
        "unclear_pct": 13.913158701107257
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
          "opening": 0.01556087697691849,
          "continuous": 0.9768677390455062,
          "closing": 0.005412122718974884,
          "auctions": 0.020972999695893373,
          "other": 0.0021592612586005867
        },
        "1M": {
          "opening": 0.0074804563723767275,
          "continuous": 0.9820733845732678,
          "closing": 0.009394148378997397,
          "auctions": 0.016874604751374124,
          "other": 0.001052010675358188
        },
        "3M": {
          "opening": 0.005643646655877092,
          "continuous": 0.9612126753811642,
          "closing": 0.011449830205078641,
          "auctions": 0.017093476860955734,
          "other": 0.021693847757880004
        },
        "6M": {
          "opening": 0.005604100613837606,
          "continuous": 0.9642395970922247,
          "closing": 0.01718372853736279,
          "auctions": 0.022787829151200395,
          "other": 0.012972573756574901
        }
      },
      "hhi": {
        "1D": 0.20201366766391696,
        "1M": 0.14439774633928049,
        "3M": 0.1464336921845293,
        "6M": 0.1430620821887602
      },
      "profile_buckets": [
        {
          "time": "09:00",
          "avg_share": 0.004
        },
        {
          "time": "09:30",
          "avg_share": 0.2383
        },
        {
          "time": "10:00",
          "avg_share": 0.1335
        },
        {
          "time": "10:30",
          "avg_share": 0.0887
        },
        {
          "time": "11:00",
          "avg_share": 0.0645
        },
        {
          "time": "11:30",
          "avg_share": 0.0332
        },
        {
          "time": "12:00",
          "avg_share": 0.0061
        },
        {
          "time": "13:00",
          "avg_share": 0.0827
        },
        {
          "time": "13:30",
          "avg_share": 0.0728
        },
        {
          "time": "14:00",
          "avg_share": 0.0674
        },
        {
          "time": "14:30",
          "avg_share": 0.064
        },
        {
          "time": "15:00",
          "avg_share": 0.0553
        },
        {
          "time": "15:30",
          "avg_share": 0.0768
        },
        {
          "time": "16:00",
          "avg_share": 0.0128
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "6682",
          "auctions_pct": 2.829603692858094,
          "hhi": 0.14171587197816482,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400",
            "you": true
          }
        },
        {
          "ticker": "9678",
          "auctions_pct": 1.1402634998598715,
          "hhi": 0.13951935334588134,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "6082",
          "auctions_pct": 1.7824384035819238,
          "hhi": 0.1303973892370581,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "2498",
          "auctions_pct": 3.070622158308123,
          "hhi": 0.1420304343700013,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "6636",
          "auctions_pct": 1.2453279935345705,
          "hhi": 0.15111495246634396,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "2525",
          "auctions_pct": 12.28722900962976,
          "hhi": 0.12674309362406008,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "6651",
          "auctions_pct": 1.1687545167445101,
          "hhi": 0.14679596472496614,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "9880",
          "auctions_pct": 3.9079361193260076,
          "hhi": 0.13964035528302388,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "856",
          "auctions_pct": 2.6619145859775415,
          "hhi": 0.14286840878599832,
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
