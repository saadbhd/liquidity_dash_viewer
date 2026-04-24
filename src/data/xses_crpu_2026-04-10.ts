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
      "marketCap": 806747427.87,
      "sector": "REIT - Retail",
      "industry": "Real Estate"
    },
    {
      "ticker": "ODBU",
      "name": "UtdHampshReitUSD",
      "marketCap": 306639076.12,
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
      "marketCap": 1144044274.45,
      "sector": "REIT - Retail",
      "industry": "Real Estate"
    },
    {
      "ticker": "JYEU",
      "name": "Lendlease Reit",
      "marketCap": 1380966532.7099998,
      "sector": "REIT - Diversified",
      "industry": "Real Estate"
    },
    {
      "ticker": "AJBU",
      "name": "Keppel DC Reit",
      "marketCap": 4760129910.690001,
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
    "asof_date": "2026-04-10",
    "industry": "Real Estate",
    "sector": "REIT - Retail",
    "market_cap_display": "806.7M",
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
          "score_pca": 79.56989247311827,
          "score_pca_percentile": 79.56989247311827,
          "rank_pca": 115,
          "total": 558,
          "adv_notional_sgd": 870234.0,
          "adv_volume_shares": 1349200.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.0029519048604651618,
          "votes": 316.0,
          "trades": 316.0,
          "spread_pct": 0.007722007722007728,
          "spread_ticks": 1.0,
          "amihud": 0.0,
          "volatility": 0.07361900337800631
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5156340447318739,
          "loadings": {
            "log_adv": 0.5552916250606093,
            "log_trades": 0.5101786608233787,
            "log_turnover": 0.5115656965805693,
            "neg_spread": 0.37335728090459336,
            "neg_amihud": 0.0614747445822995,
            "neg_vol": -0.16277186438115918
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
          "peer_median_adv": 706130.983204605,
          "peer_median_score_pca": 67.29390681003585,
          "peer_median_trades": 435.5,
          "peer_median_volatility": 0.11773911826175795,
          "peer_median_spread_pct": 0.009239401193526365,
          "peer_median_spread_ticks": 1.000712749668644,
          "peer_median_amihud": 3.120990590179181e-10,
          "peer_median_turnover_ratio": 0.0008896605572017143,
          "target_vs_peer": {
            "score_pca_delta": 12.28,
            "adv_delta_pct": 23.2,
            "trades_delta_pct": -27.44,
            "volatility_delta_pct": 37.47,
            "spread_pct_delta_pct": 16.42,
            "spread_ticks_delta_pct": -0.07,
            "amihud_delta_pct": 100.0,
            "turnover_ratio_delta_pct": 231.8
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 79.56989247311827,
            "rank_pca": 115,
            "adv": 870234.0,
            "trades": 316.0,
            "volatility": 0.07361900337800631,
            "spread_pct": 0.007722007722007728,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0029519048604651618,
            "is_target": true
          },
          {
            "ticker": "ODBU",
            "score_pca": 51.25448028673835,
            "rank_pca": 273,
            "adv": 16426.96640921023,
            "trades": 16.0,
            "volatility": 0.09211292491637581,
            "spread_pct": 0.009661835748792277,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 4.205595765281162e-05,
            "is_target": false
          },
          {
            "ticker": "D5IU",
            "score_pca": 30.46594982078853,
            "rank_pca": 389,
            "adv": 60.2,
            "trades": 5.0,
            "volatility": 0.0,
            "spread_pct": 0.15384615384615383,
            "spread_ticks": 1.0,
            "amihud": 0.0027685492801771882,
            "turnover_ratio": 2.713424802515326e-06,
            "is_target": false
          },
          {
            "ticker": "BMGU",
            "score_pca": 17.921146953405017,
            "rank_pca": 459,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.0981475463113422,
            "spread_ticks": 8.38888888888889,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "AU8U",
            "score_pca": 83.33333333333334,
            "rank_pca": 94,
            "adv": 1395835.0,
            "trades": 855.0,
            "volatility": 0.1433653116071401,
            "spread_pct": 0.007507761783799047,
            "spread_ticks": 1.001254705144291,
            "amihud": 0.0,
            "turnover_ratio": 0.0017372651567506168,
            "is_target": false
          },
          {
            "ticker": "JYEU",
            "score_pca": 94.44444444444444,
            "rank_pca": 32,
            "adv": 7253306.999999999,
            "trades": 2982.0,
            "volatility": 0.16874092830106743,
            "spread_pct": 0.008816966638260452,
            "spread_ticks": 1.0001707941929974,
            "amihud": 2.4619312069849757e-09,
            "turnover_ratio": 0.015107806435252136,
            "is_target": false
          },
          {
            "ticker": "AJBU",
            "score_pca": 93.54838709677419,
            "rank_pca": 37,
            "adv": 13930917.0,
            "trades": 2853.0,
            "volatility": 0.1665302352909577,
            "spread_pct": 0.004363767696390546,
            "spread_ticks": 1.0038543897216274,
            "amihud": 3.120990590179181e-10,
            "turnover_ratio": 0.003705875090796843,
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
              "mean": 0.26846603871638464,
              "median": 0.11350076166974352,
              "min": 0.0,
              "max": 9.372489788739538,
              "p5": 0.0,
              "p95": 0.8734938752361594,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3390473.0841646064,
              "median": 13118.1,
              "min": 0.0,
              "max": 285980477.7,
              "p5": 0.0,
              "p95": 12177015.999999994,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10584102191491025,
              "median": 0.02662823791350924,
              "min": 0.0002334722276610592,
              "max": 1.2394366197183098,
              "p5": 0.0032688853554951325,
              "p95": 0.49204799860440196,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006637293205632565,
              "median": 0.00029500255013511134,
              "min": 0.0,
              "max": 0.8726341647053794,
              "p5": 0.0,
              "p95": 0.015879606635955352,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0012315106462792579,
              "median": 2.0422595229209673e-08,
              "min": 0.0,
              "max": 0.25,
              "p5": 0.0,
              "p95": 0.00010599261061795729,
              "count": 414
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 503.3584229390681,
              "median": 8.0,
              "min": 0.0,
              "max": 15043.0,
              "p5": 0.0,
              "p95": 2995.949999999998,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.09647753984832426,
              "median": 0.11004140680824809,
              "min": 0.0,
              "max": 0.1717814684523061,
              "p5": 0.0,
              "p95": 0.16869805710042482,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 8003690.270801151,
              "median": 875165.0,
              "min": 0.0,
              "max": 54903990.0,
              "p5": 21.070000000000004,
              "p95": 37774601.49999997,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03683487738263373,
              "median": 0.008364229498378457,
              "min": 0.004329596189360625,
              "max": 0.15384615384615383,
              "p5": 0.004374420687787136,
              "p95": 0.13435164120896972,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002006173735888342,
              "median": 0.0014446756757939664,
              "min": 0.0,
              "max": 0.006586807015961539,
              "p5": 9.496986808803642e-07,
              "p95": 0.005533219607197871,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00039551010985046023,
              "median": 7.783595096648677e-11,
              "min": 0.0,
              "max": 0.0027685492801771882,
              "p5": 0.0,
              "p95": 0.0019379906937950276,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1218.375,
              "median": 463.0,
              "min": 0.0,
              "max": 6138.0,
              "p5": 1.7500000000000002,
              "p95": 4622.149999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 3766091.027734868,
              "median": 706130.983204605,
              "min": 0.0,
              "max": 13930917.0,
              "p5": 15.05,
              "p95": 12261514.5,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1118.5,
              "median": 435.5,
              "min": 0.0,
              "max": 2982.0,
              "p5": 1.25,
              "p95": 2949.75,
              "count": 6
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.09512490001925683,
              "median": 0.11773911826175795,
              "min": 0.0,
              "max": 0.16874092830106743,
              "p5": 0.0,
              "p95": 0.16818825504854001,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04705733867078971,
              "median": 0.009239401193526365,
              "min": 0.004363767696390546,
              "max": 0.15384615384615383,
              "p5": 0.005149766218242671,
              "p95": 0.13992150196245093,
              "count": 6
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.232361462991301,
              "median": 1.000712749668644,
              "min": 1.0,
              "max": 8.38888888888889,
              "p5": 1.0,
              "p95": 6.542630264097074,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0005537104108414908,
              "median": 3.120990590179181e-10,
              "min": 0.0,
              "max": 0.0027685492801771882,
              "p5": 0.0,
              "p95": 0.0022148399165279917,
              "count": 5
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003432619344209154,
              "median": 0.0008896605572017143,
              "min": 0.0,
              "max": 0.015107806435252136,
              "p5": 6.783562006288315e-07,
              "p95": 0.012257323599138312,
              "count": 6
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.0,
            "market": 0.0024773718588921856,
            "sector": 0.002136752136752129,
            "peers": 0.0021739130434783593,
            "vs_market": -0.0024773718588921856,
            "vs_sector": -0.002136752136752129,
            "vs_peers": -0.0021739130434783593
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 83.69175627240143,
          "score_pca_percentile": 83.69175627240143,
          "rank_pca": 92,
          "total": 558,
          "adv_notional_sgd": 799528.5,
          "adv_volume_shares": 1259100.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.002754775726216784,
          "votes": 431.0,
          "trades": 431.0,
          "spread_pct": 0.007843137254901968,
          "spread_ticks": 1.0,
          "amihud": 7.256500418427968e-09,
          "volatility": 0.2684150262758949
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5248623072786346,
          "loadings": {
            "log_adv": 0.5471870251543424,
            "log_trades": 0.5022485531933875,
            "log_turnover": 0.5045907225881288,
            "neg_spread": 0.41237432981629174,
            "neg_amihud": 0.065666169536639,
            "neg_vol": 0.13912698977132296
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
          "peer_median_adv": 603989.3135683666,
          "peer_median_score_pca": 75.3584229390681,
          "peer_median_trades": 432.5,
          "peer_median_volatility": 0.22611655497766803,
          "peer_median_spread_pct": 0.009850632101743258,
          "peer_median_spread_ticks": 1.0019267736173165,
          "peer_median_amihud": 4.239962801442419e-09,
          "peer_median_turnover_ratio": 0.000860724810054216,
          "target_vs_peer": {
            "score_pca_delta": 8.33,
            "adv_delta_pct": 32.4,
            "trades_delta_pct": -0.35,
            "volatility_delta_pct": -18.71,
            "spread_pct_delta_pct": 20.38,
            "spread_ticks_delta_pct": -0.19,
            "amihud_delta_pct": -71.15,
            "turnover_ratio_delta_pct": 220.05
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 83.69175627240143,
            "rank_pca": 92,
            "adv": 799528.5,
            "trades": 431.0,
            "volatility": 0.2684150262758949,
            "spread_pct": 0.007843137254901968,
            "spread_ticks": 1.0,
            "amihud": 7.256500418427968e-09,
            "turnover_ratio": 0.002754775726216784,
            "is_target": true
          },
          {
            "ticker": "ODBU",
            "score_pca": 65.05376344086021,
            "rank_pca": 196,
            "adv": 111543.12713673325,
            "trades": 17.0,
            "volatility": 0.1511865787109442,
            "spread_pct": 0.010667804565820364,
            "spread_ticks": 1.0869565217391304,
            "amihud": 2.3806365442057246e-08,
            "turnover_ratio": 0.0002911696745559579,
            "is_target": false
          },
          {
            "ticker": "D5IU",
            "score_pca": 44.982078853046595,
            "rank_pca": 308,
            "adv": 6977.6,
            "trades": 17.0,
            "volatility": 1.3484685190759098,
            "spread_pct": 0.15384615384615383,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0003145048654822415,
            "is_target": false
          },
          {
            "ticker": "BMGU",
            "score_pca": 21.32616487455197,
            "rank_pca": 440,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.4132773300102938,
            "spread_pct": 0.0981475463113422,
            "spread_ticks": 8.38888888888889,
            "amihud": 7.061382230575132e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "AU8U",
            "score_pca": 85.66308243727599,
            "rank_pca": 81,
            "adv": 1096435.5,
            "trades": 848.0,
            "volatility": 0.21643345307219078,
            "spread_pct": 0.00777260922685255,
            "spread_ticks": 1.0024061597690086,
            "amihud": 7.411108514999811e-09,
            "turnover_ratio": 0.0014069447546261903,
            "is_target": false
          },
          {
            "ticker": "JYEU",
            "score_pca": 95.6989247311828,
            "rank_pca": 25,
            "adv": 8353694.499999999,
            "trades": 2762.0,
            "volatility": 0.23579965688314528,
            "spread_pct": 0.00903345963766615,
            "spread_ticks": 1.0,
            "amihud": 1.0688170878850281e-09,
            "turnover_ratio": 0.01787990388404784,
            "is_target": false
          },
          {
            "ticker": "AJBU",
            "score_pca": 96.95340501792114,
            "rank_pca": 18,
            "adv": 20259720.0,
            "trades": 3450.0,
            "volatility": 0.18864555258797325,
            "spread_pct": 0.004474984142267051,
            "spread_ticks": 1.0014473874656245,
            "amihud": 3.120990590179181e-10,
            "turnover_ratio": 0.005607942042982074,
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
              "mean": 0.6275140511824993,
              "median": 0.37929264806024,
              "min": 0.0,
              "max": 10.33654217116354,
              "p5": 0.0,
              "p95": 1.8584062739389107,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3203899.3421613364,
              "median": 9125.0,
              "min": 0.0,
              "max": 270730200.0,
              "p5": 0.0,
              "p95": 12436778.399999993,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.11102648956019748,
              "median": 0.03461702008616345,
              "min": 0.0002781015891092082,
              "max": 1.3686236766121267,
              "p5": 0.0035244213093422578,
              "p95": 0.5417690417690416,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0069402430011851176,
              "median": 0.0001823042656480005,
              "min": 0.0,
              "max": 2.4059060048777274,
              "p5": 0.0,
              "p95": 0.009837597332501068,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0008945299162326034,
              "median": 1.6485903905899377e-07,
              "min": 0.0,
              "max": 0.4168860803931893,
              "p5": 0.0,
              "p95": 0.00011568846054217275,
              "count": 538
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 469.8189964157706,
              "median": 5.5,
              "min": 0.0,
              "max": 11204.0,
              "p5": 0.0,
              "p95": 2799.0499999999943,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3650606036555939,
              "median": 0.21067989645309493,
              "min": 0.14080283972420135,
              "max": 1.3484685190759098,
              "p5": 0.14443714836956134,
              "p95": 1.0211516029029437,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 8356422.21589209,
              "median": 804536.75,
              "min": 0.0,
              "max": 55410679.99999999,
              "p5": 2442.1600000000003,
              "p95": 39032775.79999997,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03705940379939777,
              "median": 0.008561067060052868,
              "min": 0.004332557752007294,
              "max": 0.15384615384615383,
              "p5": 0.00442141113931979,
              "p95": 0.13435164120896972,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002243632243515285,
              "median": 0.001242972145123303,
              "min": 0.0,
              "max": 0.006792107309113357,
              "p5": 0.00010190938609458527,
              "p95": 0.006273564379801248,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 8.890065325342964e-07,
              "median": 7.33380446671389e-09,
              "min": 0.0,
              "max": 7.061382230575132e-06,
              "p5": 2.918508333345036e-11,
              "p95": 4.5982306777785525e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1185.625,
              "median": 520.5,
              "min": 0.0,
              "max": 5927.0,
              "p5": 5.95,
              "p95": 4424.799999999997,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 4971395.1211894555,
              "median": 603989.3135683666,
              "min": 0.0,
              "max": 20259720.0,
              "p5": 1744.4,
              "p95": 17283213.625,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1182.3333333333333,
              "median": 432.5,
              "min": 0.0,
              "max": 3450.0,
              "p5": 4.25,
              "p95": 3278.0,
              "count": 6
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4256351817234096,
              "median": 0.22611655497766803,
              "min": 0.1511865787109442,
              "max": 1.3484685190759098,
              "p5": 0.16055132218020146,
              "p95": 1.1146707218095058,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04732375962168369,
              "median": 0.009850632101743258,
              "min": 0.004474984142267051,
              "max": 0.15384615384615383,
              "p5": 0.005299390413413426,
              "p95": 0.13992150196245093,
              "count": 6
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.246616492977109,
              "median": 1.0019267736173165,
              "min": 1.0,
              "max": 8.38888888888889,
              "p5": 1.0,
              "p95": 6.563405797101449,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.1823301034465152e-06,
              "median": 4.239962801442419e-09,
              "min": 0.0,
              "max": 7.061382230575132e-06,
              "p5": 7.802476475447953e-11,
              "p95": 5.301988264291863e-06,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004250077536949051,
              "median": 0.000860724810054216,
              "min": 0.0,
              "max": 0.01787990388404784,
              "p5": 7.279241863898947e-05,
              "p95": 0.014811913423781398,
              "count": 6
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": -0.05147058823529449,
            "market": 0.025823396913769336,
            "sector": 0.008337401527204191,
            "peers": 0.002373529874609037,
            "vs_market": -0.07729398514906383,
            "vs_sector": -0.05980798976249868,
            "vs_peers": -0.05384411810990353
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 84.22939068100358,
          "score_pca_percentile": 84.22939068100358,
          "rank_pca": 89,
          "total": 558,
          "adv_notional_sgd": 720015.0,
          "adv_volume_shares": 1043500.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.0022830660553627307,
          "votes": 321.0,
          "trades": 321.0,
          "spread_pct": 0.007380073800738015,
          "spread_ticks": 1.0,
          "amihud": 5.0607336622513225e-09,
          "volatility": 0.17524175279509427
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.54836230717962,
          "loadings": {
            "log_adv": 0.5271915703118437,
            "log_trades": 0.47671167402800263,
            "log_turnover": 0.4811783381430849,
            "neg_spread": 0.42025277895245106,
            "neg_amihud": 0.1531831374815838,
            "neg_vol": 0.2514059727083868
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
          "peer_median_adv": 753689.0635683666,
          "peer_median_score_pca": 75.80645161290323,
          "peer_median_trades": 461.5,
          "peer_median_volatility": 0.2061768550190038,
          "peer_median_spread_pct": 0.009310071385893171,
          "peer_median_spread_ticks": 1.0012153934558894,
          "peer_median_amihud": 2.7682480788202e-09,
          "peer_median_turnover_ratio": 0.0016421321800737325,
          "target_vs_peer": {
            "score_pca_delta": 8.42,
            "adv_delta_pct": -4.5,
            "trades_delta_pct": -30.44,
            "volatility_delta_pct": 15.0,
            "spread_pct_delta_pct": 20.73,
            "spread_ticks_delta_pct": -0.12,
            "amihud_delta_pct": -82.81,
            "turnover_ratio_delta_pct": 39.03
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 84.22939068100358,
            "rank_pca": 89,
            "adv": 720015.0,
            "trades": 321.0,
            "volatility": 0.17524175279509427,
            "spread_pct": 0.007380073800738015,
            "spread_ticks": 1.0,
            "amihud": 5.0607336622513225e-09,
            "turnover_ratio": 0.0022830660553627307,
            "is_target": true
          },
          {
            "ticker": "ODBU",
            "score_pca": 64.87455197132617,
            "rank_pca": 197,
            "adv": 111543.12713673325,
            "trades": 19.0,
            "volatility": 0.19956505939612237,
            "spread_pct": 0.010187600944216682,
            "spread_ticks": 1.0303030303030303,
            "amihud": 3.2177345444807135e-08,
            "turnover_ratio": 0.0002884563869654539,
            "is_target": false
          },
          {
            "ticker": "D5IU",
            "score_pca": 49.46236559139785,
            "rank_pca": 283,
            "adv": 42658.2,
            "trades": 39.0,
            "volatility": 1.4175428753231476,
            "spread_pct": 0.1366971296177114,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0015469992033968483,
            "is_target": false
          },
          {
            "ticker": "BMGU",
            "score_pca": 20.967741935483872,
            "rank_pca": 442,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.4481823577753397,
            "spread_pct": 0.09575625680087045,
            "spread_ticks": 8.0,
            "amihud": 9.329750709061133e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "AU8U",
            "score_pca": 86.73835125448028,
            "rank_pca": 75,
            "adv": 1395835.0,
            "trades": 884.0,
            "volatility": 0.195735469508431,
            "spread_pct": 0.007212328588961124,
            "spread_ticks": 1.0019406709176601,
            "amihud": 4.74073977995082e-09,
            "turnover_ratio": 0.0017372651567506168,
            "is_target": false
          },
          {
            "ticker": "JYEU",
            "score_pca": 96.23655913978494,
            "rank_pca": 22,
            "adv": 8533513.5,
            "trades": 2495.0,
            "volatility": 0.21278865064188518,
            "spread_pct": 0.008432541827569662,
            "spread_ticks": 1.0,
            "amihud": 7.957563776895805e-10,
            "turnover_ratio": 0.01651362278247,
            "is_target": false
          },
          {
            "ticker": "AJBU",
            "score_pca": 97.67025089605734,
            "rank_pca": 14,
            "adv": 25054129.999999996,
            "trades": 3619.0,
            "volatility": 0.14615831211992086,
            "spread_pct": 0.0044517454966966526,
            "spread_ticks": 1.0004901159941186,
            "amihud": 2.2102382661384021e-10,
            "turnover_ratio": 0.006693827905808462,
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
              "mean": 0.6755689430007039,
              "median": 0.45796223990172363,
              "min": 0.0,
              "max": 8.153764220759756,
              "p5": 0.1571587470117249,
              "p95": 1.9969684805711176,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3080288.3874119082,
              "median": 14092.0,
              "min": 0.0,
              "max": 280084950.0,
              "p5": 0.0,
              "p95": 12544358.599999994,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09747130626165372,
              "median": 0.02822973134509602,
              "min": 0.0002674471588617271,
              "max": 1.3542204201990415,
              "p5": 0.003536940461532936,
              "p95": 0.49603594080338265,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005763007228353156,
              "median": 0.0002900580390479593,
              "min": 0.0,
              "max": 1.9906400369125306,
              "p5": 0.0,
              "p95": 0.009163593932514303,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.4518797903580347e-05,
              "median": 1.4481525718519854e-07,
              "min": 0.0,
              "max": 0.003429924242424242,
              "p5": 0.0,
              "p95": 5.145083355396793e-05,
              "count": 555
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 438.673835125448,
              "median": 7.0,
              "min": 0.0,
              "max": 11330.0,
              "p5": 0.0,
              "p95": 2450.799999999999,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.36653783560375286,
              "median": 0.19765026445227668,
              "min": 0.11251473403677317,
              "max": 1.4175428753231476,
              "p5": 0.13391644960622198,
              "p95": 1.0782666941814143,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 9771138.41589209,
              "median": 752994.0,
              "min": 0.0,
              "max": 64247854.0,
              "p5": 14930.37,
              "p95": 45563935.24999997,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.034353222772415065,
              "median": 0.008105432564866913,
              "min": 0.004247569272483084,
              "max": 0.1366971296177114,
              "p5": 0.0043408311659843945,
              "p95": 0.12236782413181706,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0026160368371529394,
              "median": 0.0016421321800737325,
              "min": 0.0,
              "max": 0.007512096170210739,
              "p5": 0.00010095973543790888,
              "p95": 0.007175218068207278,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.1724067404839096e-06,
              "median": 4.900736721101071e-09,
              "min": 0.0,
              "max": 9.329750709061133e-06,
              "p5": 3.099796967904169e-11,
              "p95": 6.075600031795414e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1159.125,
              "median": 426.0,
              "min": 0.0,
              "max": 5639.0,
              "p5": 6.65,
              "p95": 4309.349999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 5856279.971189454,
              "median": 753689.0635683666,
              "min": 0.0,
              "max": 25054129.999999996,
              "p5": 10664.55,
              "p95": 20923975.874999996,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1176.0,
              "median": 461.5,
              "min": 0.0,
              "max": 3619.0,
              "p5": 4.75,
              "p95": 3338.0,
              "count": 6
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4366621207941411,
              "median": 0.2061768550190038,
              "min": 0.14615831211992086,
              "max": 1.4175428753231476,
              "p5": 0.1585526014670484,
              "p95": 1.1752027459361956,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04378960054600433,
              "median": 0.009310071385893171,
              "min": 0.0044517454966966526,
              "max": 0.1366971296177114,
              "p5": 0.00514189126976277,
              "p95": 0.12646191141350116,
              "count": 6
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.172122302869135,
              "median": 1.0012153934558894,
              "min": 1.0,
              "max": 8.0,
              "p5": 1.0,
              "p95": 6.257575757575758,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.561280929081699e-06,
              "median": 2.7682480788202e-09,
              "min": 0.0,
              "max": 9.329750709061133e-06,
              "p5": 5.5255956653460053e-11,
              "p95": 7.005357368157051e-06,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0044633619058985635,
              "median": 0.0016421321800737325,
              "min": 0.0,
              "max": 0.01651362278247,
              "p5": 7.211409674136348e-05,
              "p95": 0.014058674063304615,
              "count": 6
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": -0.05839416058394187,
            "market": 0.052824782355369804,
            "sector": -0.033255908660660194,
            "peers": -0.04283140457754797,
            "vs_market": -0.11121894293931167,
            "vs_sector": -0.025138251923281674,
            "vs_peers": -0.015562756006393896
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 85.66308243727599,
          "score_pca_percentile": 85.66308243727599,
          "rank_pca": 81,
          "total": 558,
          "adv_notional_sgd": 619303.5,
          "adv_volume_shares": 904150.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.0019781832045579423,
          "votes": 383.5,
          "trades": 383.5,
          "spread_pct": 0.007380073800738015,
          "spread_ticks": 1.0,
          "amihud": 4.537007254882173e-09,
          "volatility": 0.14057283913489527
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.5706674442769264,
          "loadings": {
            "log_adv": 0.5090000501612695,
            "log_trades": 0.45556041697578886,
            "log_turnover": 0.4614351631958384,
            "neg_spread": 0.4288013458580947,
            "neg_amihud": 0.20943640188920584,
            "neg_vol": 0.3045111573343267
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
          "peer_median_adv": 670544.4611990525,
          "peer_median_score_pca": 76.52329749103943,
          "peer_median_trades": 386.75,
          "peer_median_volatility": 0.18910249003026558,
          "peer_median_spread_pct": 0.009071369483265961,
          "peer_median_spread_ticks": 1.0040359722023293,
          "peer_median_amihud": 3.0779870794709914e-09,
          "peer_median_turnover_ratio": 0.0012577547642075963,
          "target_vs_peer": {
            "score_pca_delta": 9.14,
            "adv_delta_pct": -7.6,
            "trades_delta_pct": -0.84,
            "volatility_delta_pct": 25.66,
            "spread_pct_delta_pct": 18.64,
            "spread_ticks_delta_pct": -0.4,
            "amihud_delta_pct": -47.4,
            "turnover_ratio_delta_pct": 57.28
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 85.66308243727599,
            "rank_pca": 81,
            "adv": 619303.5,
            "trades": 383.5,
            "volatility": 0.14057283913489527,
            "spread_pct": 0.007380073800738015,
            "spread_ticks": 1.0,
            "amihud": 4.537007254882173e-09,
            "turnover_ratio": 0.0019781832045579423,
            "is_target": true
          },
          {
            "ticker": "ODBU",
            "score_pca": 65.77060931899642,
            "rank_pca": 192,
            "adv": 91551.422398105,
            "trades": 20.5,
            "volatility": 0.17043942546029606,
            "spread_pct": 0.010050251256281416,
            "spread_ticks": 1.0110878765247697,
            "amihud": 3.2061516979665056e-08,
            "turnover_ratio": 0.00023368189373215492,
            "is_target": false
          },
          {
            "ticker": "D5IU",
            "score_pca": 50.7168458781362,
            "rank_pca": 276,
            "adv": 38861.2,
            "trades": 36.5,
            "volatility": 1.2453592239820352,
            "spread_pct": 0.1176470588235293,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0011732880397527462,
            "is_target": false
          },
          {
            "ticker": "BMGU",
            "score_pca": 19.892473118279568,
            "rank_pca": 448,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.5703671216831183,
            "spread_pct": 0.10752268329781241,
            "spread_ticks": 8.953125,
            "amihud": 3.670819280978272e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "AU8U",
            "score_pca": 87.27598566308244,
            "rank_pca": 72,
            "adv": 1249537.5,
            "trades": 737.0,
            "volatility": 0.17643055875493463,
            "spread_pct": 0.006545598337531834,
            "spread_ticks": 1.0074285399266794,
            "amihud": 5.138802991109125e-09,
            "turnover_ratio": 0.0013422214886624467,
            "is_target": false
          },
          {
            "ticker": "JYEU",
            "score_pca": 96.05734767025089,
            "rank_pca": 23,
            "adv": 7996143.75,
            "trades": 1893.5,
            "volatility": 0.20177442130559653,
            "spread_pct": 0.008092487710250508,
            "spread_ticks": 1.0001924197290017,
            "amihud": 1.0171711678328577e-09,
            "turnover_ratio": 0.016007559765831528,
            "is_target": false
          },
          {
            "ticker": "AJBU",
            "score_pca": 97.4910394265233,
            "rank_pca": 15,
            "adv": 18307937.0,
            "trades": 3146.0,
            "volatility": 0.13545458900038526,
            "spread_pct": 0.004428487683346552,
            "spread_ticks": 1.0006434044779793,
            "amihud": 2.7130394186595765e-10,
            "turnover_ratio": 0.004815695792827062,
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
              "mean": 0.6940743657437258,
              "median": 0.4424253446636862,
              "min": 0.0,
              "max": 6.6878662931876525,
              "p5": 0.15152825125399375,
              "p95": 2.10748252629657,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2539596.246939145,
              "median": 11779.4,
              "min": 0.0,
              "max": 246202433.5,
              "p5": 0.0,
              "p95": 10457944.487499993,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09298344886101735,
              "median": 0.028595564437953767,
              "min": 0.0002765980143104683,
              "max": 1.267605633802817,
              "p5": 0.0035885694783540445,
              "p95": 0.46743397104407935,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0032297716575878537,
              "median": 0.00027973039191322876,
              "min": 0.0,
              "max": 0.8816162415134138,
              "p5": 0.0,
              "p95": 0.00703104284095599,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.175760909055767e-05,
              "median": 1.799344318930182e-07,
              "min": 0.0,
              "max": 0.0012875000252631538,
              "p5": 0.0,
              "p95": 4.41238372786769e-05,
              "count": 557
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 369.2867383512545,
              "median": 7.0,
              "min": 0.0,
              "max": 10176.5,
              "p5": 0.0,
              "p95": 2009.0499999999997,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3413939494077104,
              "median": 0.16967527072012945,
              "min": 0.11506399943947218,
              "max": 1.2453592239820352,
              "p5": 0.12399209333287026,
              "p95": 1.009111988177414,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 8571667.452799764,
              "median": 664470.5,
              "min": 0.0,
              "max": 55454011.0,
              "p5": 13601.42,
              "p95": 39688760.274999976,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03332598225308998,
              "median": 0.008056849127443248,
              "min": 0.004270758868815006,
              "max": 0.1176470588235293,
              "p5": 0.004336226479781921,
              "p95": 0.11410352738952838,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0023108946308042257,
              "median": 0.0012577547642075963,
              "min": 0.0,
              "max": 0.006654469842597678,
              "p5": 8.178866280625423e-05,
              "p95": 0.0064933573565972595,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.6496765642621796e-07,
              "median": 4.837905122995649e-09,
              "min": 0.0,
              "max": 3.670819280978272e-06,
              "p5": 3.649170348902075e-11,
              "p95": 2.3972540635787575e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1084.9375,
              "median": 402.25,
              "min": 0.0,
              "max": 5309.0,
              "p5": 7.175000000000001,
              "p95": 4071.0499999999984,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 4614005.145399684,
              "median": 670544.4611990525,
              "min": 0.0,
              "max": 18307937.0,
              "p5": 9715.3,
              "p95": 15729988.6875,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 972.25,
              "median": 386.75,
              "min": 0.0,
              "max": 3146.0,
              "p5": 5.125,
              "p95": 2832.875,
              "count": 6
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4166375566977276,
              "median": 0.18910249003026558,
              "min": 0.13545458900038526,
              "max": 1.2453592239820352,
              "p5": 0.14420079811536296,
              "p95": 1.076611198407306,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04238109451812533,
              "median": 0.009071369483265961,
              "min": 0.004428487683346552,
              "max": 0.1176470588235293,
              "p5": 0.004957765346892872,
              "p95": 0.11511596494210008,
              "count": 6
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.3287462067764046,
              "median": 1.0040359722023293,
              "min": 1.0,
              "max": 8.953125,
              "p5": 1.0000481049322505,
              "p95": 6.967615719131192,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.182180126764575e-07,
              "median": 3.0779870794709914e-09,
              "min": 0.0,
              "max": 3.670819280978272e-06,
              "p5": 6.782598546648941e-11,
              "p95": 2.7611298399786204e-06,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003928741163467656,
              "median": 0.0012577547642075963,
              "min": 0.0,
              "max": 0.016007559765831528,
              "p5": 5.842047343303873e-05,
              "p95": 0.013209593772580411,
              "count": 6
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": -0.051470588235293935,
            "market": 0.11963071941473524,
            "sector": -0.028432029015071913,
            "peers": -0.05179844281922441,
            "vs_market": -0.17110130765002918,
            "vs_sector": -0.02303855922022202,
            "vs_peers": 0.00032785458393047584
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Near-term tradability is a little softer, with trade activity down 26.7% from the 1M average, which can make access feel thinner on the day.",
        "market_comparison": "Return 0.0% vs peers 0.2%."
      },
      "30d": {
        "liquidity": "Monthly tradability is average, with primary average daily volume of S$619.3K compared with a peer median of S$670.5K, so access is reasonable but not standout for the group.",
        "market_comparison": "The stock fell 5.1% over the month compared with peers up 0.2%, which matters because weaker performance can leave trading conditions less supported."
      },
      "3m": {
        "liquidity": "3M score 84.2 vs peer median 75.8 (+8.4 pts).",
        "market_comparison": "The stock fell 5.8% over three months compared with peers down 4.3%, which matters because relative underperformance can weigh on trading interest."
      },
      "6m": {
        "liquidity": "Six-month tradability is solid, with a liquidity score of 85.7 compared with a peer median of 76.5, showing better structural access than much of the peer set.",
        "market_comparison": "The stock returned -5.1% over six months compared with peers at -5.2%, which matters because liquidity has held up even without stronger relative price momentum."
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
          "median": 0.12695335925834428,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "12.7%",
          "display_range": null,
          "display_text": "12.7%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 12.7,
          "plain_english": "Market explains about 12.7% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.8391693250802302,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "83.9%",
          "display_range": null,
          "display_text": "83.9%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 83.9,
          "plain_english": "Sector explains about 83.9% of price moves in the current state."
        },
        "company_share": {
          "median": 0.03387731566142537,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "3.4%",
          "display_range": null,
          "display_text": "3.4%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 3.4,
          "plain_english": "Company-specific explains about 3.4% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 0.20839197562015507,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.21",
          "display_range": null,
          "display_text": "0.21",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Weak",
          "plain_english": "Weak market link: a 1% market move has lined up with about a 0.21% stock move in the same direction in this state.",
          "value_num": 0.21
        },
        "beta_stock_lag": {
          "median": 0.05847854840714263,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.06",
          "display_range": null,
          "display_text": "0.06",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 0.06
        },
        "beta_sector": {
          "median": 0.6425037332000677,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.64",
          "display_range": null,
          "display_text": "0.64",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Modest",
          "plain_english": "Modest sector link: a 1% sector move has lined up with about a 0.64% stock move in the same direction in this state.",
          "value_num": 0.64
        },
        "beta_market_lag": {
          "median": -0.024109270018372833,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.02",
          "display_range": null,
          "display_text": "-0.02",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -0.02
        },
        "beta_sector_lag": {
          "median": 0.2988191910172862,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.30",
          "display_range": null,
          "display_text": "0.30",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 0.3
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
          "period_label": "2025-04-14 to 2025-04-30",
          "n_obs": 12,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.3937542586480043,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "39.4%",
            "display_range": null,
            "display_text": "39.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 12 trading days.",
            "kind": "share_pct",
            "value_pct": 39.4,
            "plain_english": "Company-specific explains about 39.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.341819879468435,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.2%",
              "display_range": null,
              "display_text": "34.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 12 trading days.",
              "kind": "share_pct",
              "value_pct": 34.2,
              "plain_english": "Market explains about 34.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.26442586188356065,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.4%",
              "display_range": null,
              "display_text": "26.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 12 trading days.",
              "kind": "share_pct",
              "value_pct": 26.4,
              "plain_english": "Sector explains about 26.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3937542586480043,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "39.4%",
              "display_range": null,
              "display_text": "39.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 12 trading days.",
              "kind": "share_pct",
              "value_pct": 39.4,
              "plain_english": "Company-specific explains about 39.4% of price moves in the current state."
            }
          },
          "summary": "Apr: More mixed, though company-driven still has the largest share."
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
          "period_label": "2026-04-01 to 2026-04-10",
          "n_obs": 7,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4762567484159748,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.6%",
            "display_range": null,
            "display_text": "47.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
            "kind": "share_pct",
            "value_pct": 47.6,
            "plain_english": "Sector explains about 47.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3830682876765587,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "38.3%",
              "display_range": null,
              "display_text": "38.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
              "kind": "share_pct",
              "value_pct": 38.3,
              "plain_english": "Market explains about 38.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.4762567484159748,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.6%",
              "display_range": null,
              "display_text": "47.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
              "kind": "share_pct",
              "value_pct": 47.6,
              "plain_english": "Sector explains about 47.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.14067496390746645,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "14.1%",
              "display_range": null,
              "display_text": "14.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
              "kind": "share_pct",
              "value_pct": 14.1,
              "plain_english": "Company-specific explains about 14.1% of price moves in the current state."
            }
          },
          "summary": "Apr: Mostly sector-driven, though based on only 7 trading days."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5020080321285141,
          "expected_duration_days": 11.363636363636363,
          "current_probability": 1.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.005585309480740537,
            "low": 0.005585309480740537,
            "high": 0.005585309480740537
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": null
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 11.272727272727273,
          "current_probability": 0.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.012091529029812814,
            "low": 0.012091529029812814,
            "high": 0.012091529029812814
          },
          "volatility_label": "High Volatility",
          "current_probability_display": 0.0
        }
      ],
      "transitions": {
        "mean": [
          [
            0.9193548387096774,
            0.08064516129032258
          ],
          [
            0.08870967741935484,
            0.9112903225806451
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            114.0,
            10.0
          ],
          [
            11.0,
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
        "market_link_display": "0.21",
        "sector_link_display": "0.64",
        "market_link_explainer": "Weak market link. A 1% market move has lined up with about a 0.21% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "Modest sector link. A 1% sector move has lined up with about a 0.64% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "0.06",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "Low Volatility",
        "dominant_driver": "sector",
        "dominant_driver_label": "Sector",
        "driver_share_pct": 83.9,
        "driver_share_display": "83.9%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 251 trading days relative to the 252-day target.",
        "history_days": 251,
        "history_limited": true,
        "volatility_label": "Low Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.9193548387096774,
        "effective_days": 125.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 11.4 days.",
        "expected_duration_days": 11.4
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
          "current_probability": 1.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.005585309480740537,
            "low": 0.005585309480740537,
            "high": 0.005585309480740537
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 11.272727272727273,
          "current_probability": 0.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.012091529029812814,
            "low": 0.012091529029812814,
            "high": 0.012091529029812814
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.9193548387096774,
          0.08064516129032258
        ],
        [
          0.08870967741935484,
          0.9112903225806451
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.9193548387096774,
            0.08064516129032258
          ],
          [
            0.08870967741935484,
            0.9112903225806451
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            114.0,
            10.0
          ],
          [
            11.0,
            113.0
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
        "text": "Liquidity score: 85.7 — Strong",
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
        "text": "Elevated short interest",
        "bg": "bg-red-500/20",
        "textColor": "text-red-400"
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
    "liq_subtitle": "Structural liquidity is sound relative to peers, but near-term access looks less supportive because displayed buying depth is light.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent performance is weak, with the stock down 5.1% over one month compared with peers up 0.2% and the market up 2.6%.",
    "perf_insight": "The stock has underperformed over the past month, falling 5.1% while peers rose 0.2% and the market rose 2.6%. That matters because weaker price momentum can make trading conditions feel less supportive even with a six-month liquidity score above the peer median.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Sector moves are dominating the tape, with sector factors explaining 83.9% of current trading.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly sector-driven, accounting for about 83.9% of price changes. Other influences are market 12.7%, and company-specific 3.4%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 12.7%, sector 83.9%, and company-specific 3.4%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has shifted from company-driven to sector-driven over Feb to Apr."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 12.7%, sector 83.9%, and company-specific 3.4%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "Current driver: Sector at 83.9%. Broader market or sector moves still explain a meaningful part of the tape, so the stock is not trading on company news alone. Recent flow does not show a clear deterioration from the monthly baseline.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now is the sector, accounting for 83.9% of recent price moves.",
      "The mix has shifted from mostly sector in February and March to mostly sector-driven in April."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Trading conditions look broadly orderly, but immediate buy-side depth is lighter than the wider liquidity profile",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on Apr 10, 2025 to Apr 10, 2026 (253 trading days • 97,309 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on top 10 bid and top 10 ask levels.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is lighter than the monthly baseline, so day-to-day access may feel weaker than the 1M score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The main execution watchpoint is on the bid, with top-10 bid depth at 0.50x ask depth even as the spread remains 1 tick. That matters because buying access can feel thinner on the day than the six-month liquidity score implies.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 25.6% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Displayed liquidity looks balanced on spread but less supportive on the bid side.",
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
    "intraday_insight": "The order book is easy to cross at 1 tick, but buying depth is lighter with top-10 bid depth at 0.50x ask depth. That matters because immediate access can feel less reliable for buyers even though the broader liquidity profile is sound relative to peers.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Near-term trading activity has pulled back from the monthly average.",
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
    "exec_subtitle": "Liquidity is mixed for its size, with solid six-month peer standing offset by a less supportive near-term tape.",
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
        "value": "85.7/100",
        "sub": "Peer median 76.5 (+9.1 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "S$619.3K",
        "sub": "Peer median S$670.5K",
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
    "liq_insight": "Liquidity is mixed for its size because the six-month score is strong relative to peers at 85.7 compared with a 76.5 median, while near-term access looks less supportive. One-day trades are down 26.7% compared with the monthly average, and top-10 bid depth is only 0.50x ask depth. That matters because the stock screens well on longer-term peer standing, but immediate buying access can feel thinner on the day.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "0.647",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "0.77%",
        "note": "1.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.50x",
        "note": "Bid depth / ask depth on displayed top-10 levels",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-0.39% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-0.78% with 100.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-2.58% with 91.0% fill.",
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
        "value": "86",
        "suffix": "/100",
        "bar_pct": 86,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Rank 81/558",
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
        "value": "619.3K",
        "value_prefix": "S$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-red-400",
        "color_bar": "bg-red-500",
        "subtext": "Peer median S$670.5K",
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
        "value": "83.9",
        "suffix": "sector",
        "bar_pct": 84,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 12.7% • Company 3.4%",
        "interpretation": {
          "text": "Sector",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is solid relative to peers, with a six-month liquidity score of 85.7 compared with a peer median of 76.5. That gives the stock a stronger base of access than its size alone would suggest, even as the overall picture remains mixed.",
      "Recent flow looks broadly stable rather than sharply weaker, with one-day trades down 26.7% compared with the monthly average. That matters because activity has pulled back, but not enough to outweigh the stronger six-month standing on its own.",
      "The clearest execution watchpoint is on the bid, with top-10 bid depth at 0.50x ask depth while the spread is 1 tick. That matters because immediate buying access looks thinner on screen even though the quoted spread remains straightforward to cross."
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
      "overall": "6M liquidity is strong: score 85.7 vs peer median 76.5 (+9.1 pts). 1D trades down -26.7% vs 1M. Recent flow does not show a clear deterioration from the monthly baseline.",
      "strengths": [
        "6M score 85.7 vs peer median 76.5 (+9.1 pts)."
      ],
      "concerns": [
        "1D trades down -26.7% vs 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: +9.1 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is -5.1%, worse than market and sector, which suggests weaker price performance than comparable names.",
        "vs_market": "Worse than market: -5.1% vs market 12.0%.",
        "vs_sector": "Worse than sector: -5.1% vs sector -2.8%.",
        "vs_peers": "In line with peers: -5.1% vs peers -5.2%."
      },
      "adv": {
        "insight": "ADV is S$619.3K, better than market, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: S$619.3K vs market S$11.8K.",
        "vs_sector": "In line with sector: S$619.3K vs sector S$664.5K.",
        "vs_peers": "In line with peers: S$619.3K vs peers S$670.5K."
      },
      "spread": {
        "insight": "Spread is 0.74%, better than market and peers, which keeps trading costs more competitive than comparable names.",
        "vs_market": "Better than market: 0.74% vs market 2.86%.",
        "vs_sector": "In line with sector: 0.74% vs sector 0.81%.",
        "vs_peers": "Better than peers: 0.74% vs peers 0.91%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.20%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.20% vs market 0.03%.",
        "vs_sector": "Better than sector: 0.20% vs sector 0.13%.",
        "vs_peers": "Better than peers: 0.20% vs peers 0.13%."
      },
      "volatility": {
        "insight": "Volatility is 14.06%, better than market, sector, and peers, which suggests day-to-day price swings are more contained than comparable names.",
        "vs_market": "Better than market: 14.06% vs market 44.24%.",
        "vs_sector": "Better than sector: 14.06% vs sector 16.97%.",
        "vs_peers": "Better than peers: 14.06% vs peers 18.91%."
      },
      "trades": {
        "insight": "Trades is 384, better than market, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 384 vs market 7.",
        "vs_sector": "In line with sector: 384 vs sector 402.",
        "vs_peers": "In line with peers: 384 vs peers 387."
      },
      "amihud": {
        "insight": "Price impact is 4.54e-09, better than market, but worse than peers, which shows price impact is mixed across comparison groups.",
        "vs_market": "Better than market: 4.54e-09 vs market 1.80e-07.",
        "vs_sector": "In line with sector: 4.54e-09 vs sector 4.84e-09.",
        "vs_peers": "Worse than peers: 4.54e-09 vs peers 3.08e-09."
      }
    },
    "performance": {
      "overall": "Performance is mixed relative to comparison groups. Recent price performance is weaker than peers and the market, so the tape is not being cushioned by stronger momentum. Recent flow does not show a clear deterioration from the monthly baseline.",
      "conclusion": "The move looks mainly sector-linked, but weaker near-term trading support means the underperformance is not being offset by stronger liquidity."
    },
    "drivers": {
      "overall": "The stock is moving mainly with its sector now, with sector factors accounting for 83.9% of recent price action. That matters because the shares are already down 5.1% over the past month while peers are up 0.2%, so sector moves are hitting a weaker starting point.",
      "beta": "Based on the last 5 trading days, current mix is market 12.7%, sector 83.9%, and company-specific 3.4%.",
      "rolling_change": "The driver mix has become more sector-led over time. February was still clearly company-driven, March was mostly sector, and April has turned mostly sector-driven."
    },
    "regime": {
      "overall": "The market is in a calmer state, which usually supports steadier trading conditions, but the picture is mixed because 1D trades are 26.7% below the 1M average.",
      "current": "Low Volatility is the active state, pointing to a quieter tape than a higher-volatility backdrop.",
      "transitions": "This state looks more persistent than short-lived, with a typical run length of about 11.4 days.",
      "trading_implications": "Trading conditions may feel relatively steady while this state holds, although lighter trading activity can make access feel less consistent day to day."
    },
    "execution": {
      "overall": "Displayed liquidity looks mixed rather than fully supportive because the spread is 1 tick but the book is not balanced, with top-10 bid depth at only 0.50x ask depth. That matters because immediate sell-side access looks available while buy-side support is thinner.",
      "concern": "The clearest stress point is the lighter bid side, and the drop in 1D trades of 26.7% compared with the 1M average reinforces that the book may feel less resilient today. That matters because thinner buy-side depth can make day-to-day liquidity feel weaker even when the quoted spread is stable.",
      "peer_context": "The broader standing remains solid, with a 6M liquidity score of 85.7 compared with a peer median of 76.5, but the current book does not fully reflect that strength. That matters because peer-relative liquidity looks better on a monthly basis than the immediate depth currently on screen."
    },
    "trader_composition": {
      "overall": "Flow looks mixed on individual trade count and value, so participation is broad but conviction sits with larger tickets.",
      "retail_heavy": "Retail-like trades make up 60.8% of individual trade count but only 9.8% of trade value, while institution-like trades are 10.8% of count and 48.2% of value. That split shows frequent smaller tickets alongside a much larger share of value coming from institution-like activity, which keeps the flow picture mixed rather than clearly one-sided.",
      "institutional_gap": "Institution-like activity is a small share of individual trades at 10.8% but nearly half of trade value at 48.2%. That means larger tickets still matter materially for turnover even though they are not the dominant source of trade count.",
      "peer_comparison": "The mix looks differentiated rather than extreme relative to peers, with retail-like activity dominating count while institution-like activity carries a much larger share of value. That matters because peer standing is likely to depend more on value participation than on trade count alone."
    },
    "price_moving": {
      "overall": "Price-moving activity is present but the broader read remains mixed because sector moves are the main driver of the tape. Sector explains 83.9% of current trading, so individual trades are interacting with a market-led backdrop rather than a purely stock-specific move. The signal is mixed because the stock is underperforming even as trading remains active through the day.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity is material but not becoming a bigger drag on trading right now. Short interest is elevated, yet shorts have covered by 70% month on month, which reduces the chance that short positioning is the main source of current pressure.",
      "level": "Elevated short interest",
      "correlation": "Moderate negative - shorts somewhat predict drops",
      "trend": "The short trend is falling sharply, with covering down 70% month on month. That matters because the stock’s 1M return of -5.1%, compared with peers at +0.2% and the market at +2.6%, looks less like a fresh build in bearish positioning and more like part of a broader weak tape.",
      "peaks": "5 notable peak days identified."
    },
    "intraday": {
      "overall": "Session split is open 4.1%, continuous 86.6%, and close 8.2%. Current trading concentration score is 0.227.",
      "hhi_interpretation": "Intraday activity looks reasonably well distributed, with a concentration score of 0.227 and most trading taking place in continuous hours. That matters because access appears less dependent on the auction periods.",
      "best_times": "The continuous session is the clearest source of liquidity, accounting for 86.6% of activity compared with 4.1% at the open and 8.2% at the close. That makes midday execution conditions more representative of the day than the auction windows.",
      "peer_ranking": "Intraday liquidity looks competitive on distribution because activity is anchored in the continuous session rather than concentrated at the edges of the day. That supports a steadier flow profile relative to names that rely more heavily on the open or close."
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
        85.66308243727599,
        65.77060931899642,
        50.7168458781362,
        19.892473118279568,
        87.27598566308244,
        96.05734767025089,
        97.4910394265233
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
        619303.5,
        91551.422398105,
        38861.2,
        0.0,
        1249537.5,
        7996143.75,
        18307937.0
      ],
      "total": 558
    },
    "market_comparison": {
      "sector_name": "REIT - Retail",
      "sector_count": 8,
      "market_count": 558,
      "company": {
        "volatility": 0.14057283913489527,
        "adv": 619303.5,
        "spread_pct": 0.007380073800738015,
        "turnover_ratio": 0.0019781832045579423,
        "amihud": 4.537007254882173e-09,
        "trades": 383.5
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6940743657437258,
          "median": 0.4424253446636862,
          "min": 0.0,
          "max": 6.6878662931876525,
          "p5": 0.15152825125399375,
          "p95": 2.10748252629657,
          "count": 558
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 2539596.246939145,
          "median": 11779.4,
          "min": 0.0,
          "max": 246202433.5,
          "p5": 0.0,
          "p95": 10457944.487499993,
          "count": 558
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.09298344886101735,
          "median": 0.028595564437953767,
          "min": 0.0002765980143104683,
          "max": 1.267605633802817,
          "p5": 0.0035885694783540445,
          "p95": 0.46743397104407935,
          "count": 556
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0032297716575878537,
          "median": 0.00027973039191322876,
          "min": 0.0,
          "max": 0.8816162415134138,
          "p5": 0.0,
          "p95": 0.00703104284095599,
          "count": 551
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.175760909055767e-05,
          "median": 1.799344318930182e-07,
          "min": 0.0,
          "max": 0.0012875000252631538,
          "p5": 0.0,
          "p95": 4.41238372786769e-05,
          "count": 557
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 369.2867383512545,
          "median": 7.0,
          "min": 0.0,
          "max": 10176.5,
          "p5": 0.0,
          "p95": 2009.0499999999997,
          "count": 558
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.3413939494077104,
          "median": 0.16967527072012945,
          "min": 0.11506399943947218,
          "max": 1.2453592239820352,
          "p5": 0.12399209333287026,
          "p95": 1.009111988177414,
          "count": 8
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 8571667.452799764,
          "median": 664470.5,
          "min": 0.0,
          "max": 55454011.0,
          "p5": 13601.42,
          "p95": 39688760.274999976,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.03332598225308998,
          "median": 0.008056849127443248,
          "min": 0.004270758868815006,
          "max": 0.1176470588235293,
          "p5": 0.004336226479781921,
          "p95": 0.11410352738952838,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0023108946308042257,
          "median": 0.0012577547642075963,
          "min": 0.0,
          "max": 0.006654469842597678,
          "p5": 8.178866280625423e-05,
          "p95": 0.0064933573565972595,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 4.6496765642621796e-07,
          "median": 4.837905122995649e-09,
          "min": 0.0,
          "max": 3.670819280978272e-06,
          "p5": 3.649170348902075e-11,
          "p95": 2.3972540635787575e-06,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1084.9375,
          "median": 402.25,
          "min": 0.0,
          "max": 5309.0,
          "p5": 7.175000000000001,
          "p95": 4071.0499999999984,
          "count": 8
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 4614005.145399684,
          "median": 670544.4611990525,
          "min": 0.0,
          "max": 18307937.0,
          "p5": 9715.3,
          "p95": 15729988.6875,
          "count": 6
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 972.25,
          "median": 386.75,
          "min": 0.0,
          "max": 3146.0,
          "p5": 5.125,
          "p95": 2832.875,
          "count": 6
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.4166375566977276,
          "median": 0.18910249003026558,
          "min": 0.13545458900038526,
          "max": 1.2453592239820352,
          "p5": 0.14420079811536296,
          "p95": 1.076611198407306,
          "count": 6
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.04238109451812533,
          "median": 0.009071369483265961,
          "min": 0.004428487683346552,
          "max": 0.1176470588235293,
          "p5": 0.004957765346892872,
          "p95": 0.11511596494210008,
          "count": 6
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 2.3287462067764046,
          "median": 1.0040359722023293,
          "min": 1.0,
          "max": 8.953125,
          "p5": 1.0000481049322505,
          "p95": 6.967615719131192,
          "count": 6
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 6.182180126764575e-07,
          "median": 3.0779870794709914e-09,
          "min": 0.0,
          "max": 3.670819280978272e-06,
          "p5": 6.782598546648941e-11,
          "p95": 2.7611298399786204e-06,
          "count": 6
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.003928741163467656,
          "median": 0.0012577547642075963,
          "min": 0.0,
          "max": 0.016007559765831528,
          "p5": 5.842047343303873e-05,
          "p95": 0.013209593772580411,
          "count": 6
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": -0.05147058823529449,
        "market": 0.025823396913769336,
        "sector": 0.008337401527204191,
        "peers": 0.002373529874609037
      },
      {
        "horizon": "3M",
        "stock": -0.05839416058394187,
        "market": 0.052824782355369804,
        "sector": -0.033255908660660194,
        "peers": -0.04283140457754797
      },
      {
        "horizon": "6M",
        "stock": -0.051470588235293935,
        "market": 0.11963071941473524,
        "sector": -0.028432029015071913,
        "peers": -0.05179844281922441
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
      "share_market": 0.12695335925834428,
      "share_sector": 0.8391693250802302,
      "share_idio": 0.03387731566142537,
      "beta_market": 0.20839197562015507,
      "beta_sector": 0.6425037332000677,
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
            "median": 0.12695335925834428,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "12.7%",
            "display_range": null,
            "display_text": "12.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 12.7,
            "plain_english": "Market explains about 12.7% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.8391693250802302,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "83.9%",
            "display_range": null,
            "display_text": "83.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 83.9,
            "plain_english": "Sector explains about 83.9% of price moves in the current state."
          },
          "company_share": {
            "median": 0.03387731566142537,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "3.4%",
            "display_range": null,
            "display_text": "3.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 3.4,
            "plain_english": "Company-specific explains about 3.4% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 0.20839197562015507,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.21",
            "display_range": null,
            "display_text": "0.21",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Weak",
            "plain_english": "Weak market link: a 1% market move has lined up with about a 0.21% stock move in the same direction in this state.",
            "value_num": 0.21
          },
          "beta_stock_lag": {
            "median": 0.05847854840714263,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.06",
            "display_range": null,
            "display_text": "0.06",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 0.06
          },
          "beta_sector": {
            "median": 0.6425037332000677,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.64",
            "display_range": null,
            "display_text": "0.64",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Modest",
            "plain_english": "Modest sector link: a 1% sector move has lined up with about a 0.64% stock move in the same direction in this state.",
            "value_num": 0.64
          },
          "beta_market_lag": {
            "median": -0.024109270018372833,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.02",
            "display_range": null,
            "display_text": "-0.02",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -0.02
          },
          "beta_sector_lag": {
            "median": 0.2988191910172862,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.30",
            "display_range": null,
            "display_text": "0.30",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 0.3
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
            "period_label": "2025-04-14 to 2025-04-30",
            "n_obs": 12,
            "partial_month": true,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.3937542586480043,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "39.4%",
              "display_range": null,
              "display_text": "39.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 12 trading days.",
              "kind": "share_pct",
              "value_pct": 39.4,
              "plain_english": "Company-specific explains about 39.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.341819879468435,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "34.2%",
                "display_range": null,
                "display_text": "34.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 12 trading days.",
                "kind": "share_pct",
                "value_pct": 34.2,
                "plain_english": "Market explains about 34.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.26442586188356065,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.4%",
                "display_range": null,
                "display_text": "26.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 12 trading days.",
                "kind": "share_pct",
                "value_pct": 26.4,
                "plain_english": "Sector explains about 26.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3937542586480043,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "39.4%",
                "display_range": null,
                "display_text": "39.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 12 trading days.",
                "kind": "share_pct",
                "value_pct": 39.4,
                "plain_english": "Company-specific explains about 39.4% of price moves in the current state."
              }
            },
            "summary": "Apr: More mixed, though company-driven still has the largest share."
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
            "period_label": "2026-04-01 to 2026-04-10",
            "n_obs": 7,
            "partial_month": false,
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4762567484159748,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.6%",
              "display_range": null,
              "display_text": "47.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
              "kind": "share_pct",
              "value_pct": 47.6,
              "plain_english": "Sector explains about 47.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3830682876765587,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "38.3%",
                "display_range": null,
                "display_text": "38.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
                "kind": "share_pct",
                "value_pct": 38.3,
                "plain_english": "Market explains about 38.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.4762567484159748,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "47.6%",
                "display_range": null,
                "display_text": "47.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
                "kind": "share_pct",
                "value_pct": 47.6,
                "plain_english": "Sector explains about 47.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.14067496390746645,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "14.1%",
                "display_range": null,
                "display_text": "14.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
                "kind": "share_pct",
                "value_pct": 14.1,
                "plain_english": "Company-specific explains about 14.1% of price moves in the current state."
              }
            },
            "summary": "Apr: Mostly sector-driven, though based on only 7 trading days."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5020080321285141,
            "expected_duration_days": 11.363636363636363,
            "current_probability": 1.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.005585309480740537,
              "low": 0.005585309480740537,
              "high": 0.005585309480740537
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": null
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 11.272727272727273,
            "current_probability": 0.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.012091529029812814,
              "low": 0.012091529029812814,
              "high": 0.012091529029812814
            },
            "volatility_label": "High Volatility",
            "current_probability_display": 0.0
          }
        ],
        "transitions": {
          "mean": [
            [
              0.9193548387096774,
              0.08064516129032258
            ],
            [
              0.08870967741935484,
              0.9112903225806451
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              114.0,
              10.0
            ],
            [
              11.0,
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
          "market_link_display": "0.21",
          "sector_link_display": "0.64",
          "market_link_explainer": "Weak market link. A 1% market move has lined up with about a 0.21% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "Modest sector link. A 1% sector move has lined up with about a 0.64% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "0.06",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "Low Volatility",
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "driver_share_pct": 83.9,
          "driver_share_display": "83.9%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 251 trading days relative to the 252-day target.",
          "history_days": 251,
          "history_limited": true,
          "volatility_label": "Low Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.9193548387096774,
          "effective_days": 125.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 11.4 days.",
          "expected_duration_days": 11.4
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
          "period_label": "2025-04-14 to 2025-04-30",
          "n_obs": 12,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Apr: More mixed, though company-driven still has the largest share.",
          "share_market": 0.341819879468435,
          "share_sector": 0.26442586188356065,
          "share_company": 0.3937542586480043,
          "share_market_display": "34.2%",
          "share_sector_display": "26.4%",
          "share_company_display": "39.4%",
          "dominant_share_display": "39.4%"
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
          "period_label": "2026-04-01 to 2026-04-10",
          "n_obs": 7,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "Apr: Mostly sector-driven, though based on only 7 trading days.",
          "share_market": 0.3830682876765587,
          "share_sector": 0.4762567484159748,
          "share_company": 0.14067496390746645,
          "share_market_display": "38.3%",
          "share_sector_display": "47.6%",
          "share_company_display": "14.1%",
          "dominant_share_display": "47.6%"
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
            "expected_duration_days": 11.363636363636363,
            "current_probability": 1.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.005585309480740537,
              "low": 0.005585309480740537,
              "high": 0.005585309480740537
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 11.272727272727273,
            "current_probability": 0.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.012091529029812814,
              "low": 0.012091529029812814,
              "high": 0.012091529029812814
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.9193548387096774,
            0.08064516129032258
          ],
          [
            0.08870967741935484,
            0.9112903225806451
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 0.645,
          "quantity": 885600.0,
          "value": 571212.0
        },
        {
          "level": 2,
          "price": 0.64,
          "quantity": 540200.0,
          "value": 345728.0
        },
        {
          "level": 3,
          "price": 0.635,
          "quantity": 316700.0,
          "value": 201104.5
        },
        {
          "level": 4,
          "price": 0.63,
          "quantity": 789600.0,
          "value": 497448.0
        },
        {
          "level": 5,
          "price": 0.625,
          "quantity": 213400.0,
          "value": 133375.0
        },
        {
          "level": 6,
          "price": 0.62,
          "quantity": 259800.0,
          "value": 161076.0
        },
        {
          "level": 7,
          "price": 0.615,
          "quantity": 139200.0,
          "value": 85608.0
        },
        {
          "level": 8,
          "price": 0.61,
          "quantity": 158900.0,
          "value": 96929.0
        },
        {
          "level": 9,
          "price": 0.605,
          "quantity": 108800.0,
          "value": 65824.0
        },
        {
          "level": 10,
          "price": 0.6,
          "quantity": 195000.0,
          "value": 117000.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.65,
          "quantity": 2604800.0,
          "value": 1693120.0
        },
        {
          "level": 2,
          "price": 0.655,
          "quantity": 1069900.0,
          "value": 700784.5
        },
        {
          "level": 3,
          "price": 0.66,
          "quantity": 199300.0,
          "value": 131538.0
        },
        {
          "level": 4,
          "price": 0.665,
          "quantity": 112800.0,
          "value": 75012.0
        },
        {
          "level": 5,
          "price": 0.67,
          "quantity": 312300.0,
          "value": 209241.0
        },
        {
          "level": 6,
          "price": 0.675,
          "quantity": 125000.0,
          "value": 84375.0
        },
        {
          "level": 7,
          "price": 0.68,
          "quantity": 1245000.0,
          "value": 846600.0000000001
        },
        {
          "level": 8,
          "price": 0.685,
          "quantity": 116800.0,
          "value": 80008.0
        },
        {
          "level": 9,
          "price": 0.69,
          "quantity": 1081100.0,
          "value": 745959.0
        },
        {
          "level": 10,
          "price": 0.695,
          "quantity": 29500.0,
          "value": 20502.5
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-04-10 08:59:58.092800",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 0.6475,
        "spread_pct": 0.007722007722007728,
        "spread_ticks": 1.0,
        "tick_size": 0.005,
        "bid_depth_notional_top10": 2275304.5,
        "ask_depth_notional_top10": 4587140.0,
        "bid_ask_depth_ratio": 0.496
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 366,
        "history_limited": false,
        "trade_days_used": 253,
        "n_trades_used": 97309,
        "first_trade_date": "2025-04-10",
        "last_trade_date": "2026-04-10",
        "window_label": "Apr 10, 2025 to Apr 10, 2026",
        "window_short_label": "Apr 10, 2025 to Apr 10, 2026",
        "trade_days_label": "253 trading days",
        "trade_count_label": "97,309 trades",
        "window_detail_label": "253 trading days • 97,309 trades",
        "history_note": "Trade-size percentiles use Apr 10, 2025 to Apr 10, 2026 history (253 trading days • 97,309 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 3425.0,
            "impact_pct": -0.003861,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.15,
            "pct_of_adv": 0.42
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 7961.4,
            "impact_pct": -0.003861,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.35,
            "pct_of_adv": 0.99
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 340000.0,
            "impact_pct": -0.003861,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 14.94,
            "pct_of_adv": 42.12
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
            "order_id": "8135244202719840256",
            "timestamp": "2026-04-10 08:39:32.585400000",
            "local_timestamp": "2026-04-10 16:39:32",
            "posted_price": 0.65,
            "size_shares": 1367800.0,
            "notional": 889070.0,
            "impact_pct": -0.0066359999999999995,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 39.07,
            "price_vs_mid_pct": 0.386,
            "executed_event_count": 0,
            "event_count": 2
          },
          {
            "rank": 2,
            "order_id": "8125135567689201664",
            "timestamp": "2026-04-09 22:59:01.396700000",
            "local_timestamp": "2026-04-10 06:59:01",
            "posted_price": 0.69,
            "size_shares": 1000000.0,
            "notional": 690000.0,
            "impact_pct": -0.0051990000000000005,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 30.33,
            "price_vs_mid_pct": 6.564,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "8135244202717065216",
            "timestamp": "2026-04-10 08:12:35.532900000",
            "local_timestamp": "2026-04-10 16:12:35",
            "posted_price": 0.65,
            "size_shares": 600000.0,
            "notional": 390000.0,
            "impact_pct": -0.003861,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 17.14,
            "price_vs_mid_pct": 0.386,
            "executed_event_count": 0,
            "event_count": 4
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-04-10",
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
            "spread_pct": 0.007722007722007729,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2820901.5,
            "ask_depth_notional": 3717211.0,
            "mid_price": 0.6475
          },
          {
            "bucket": "09:30",
            "spread_pct": 0.007722007722007729,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2861044.0,
            "ask_depth_notional": 3717017.0,
            "mid_price": 0.6475
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.007722007722007729,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2867623.0,
            "ask_depth_notional": 3720292.0,
            "mid_price": 0.6475
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.007722007722007729,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2867340.0,
            "ask_depth_notional": 3735762.5,
            "mid_price": 0.6475
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.007722007722007729,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2867533.5,
            "ask_depth_notional": 3735567.5,
            "mid_price": 0.6475
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.007722007722007729,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2881688.0,
            "ask_depth_notional": 3734527.0,
            "mid_price": 0.6475
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.007722007722007729,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2872485.0,
            "ask_depth_notional": 3749072.5,
            "mid_price": 0.6475
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.007722007722007729,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2868297.5,
            "ask_depth_notional": 3747380.5,
            "mid_price": 0.6475
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.007722007722007729,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2882874.5,
            "ask_depth_notional": 3747381.0,
            "mid_price": 0.6475
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.007722007722007729,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2875499.0,
            "ask_depth_notional": 3746231.0,
            "mid_price": 0.6475
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.007722007722007729,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2875176.5,
            "ask_depth_notional": 3742396.5,
            "mid_price": 0.6475
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.007722007722007729,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2885819.0,
            "ask_depth_notional": 3741092.5,
            "mid_price": 0.6475
          },
          {
            "bucket": "16:00",
            "spread_pct": 0.007722007722007729,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2283737.0,
            "ask_depth_notional": 3759951.0,
            "mid_price": 0.6475
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.007722007722007729,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2275304.5,
            "ask_depth_notional": 4587140.0,
            "mid_price": 0.6475
          }
        ],
        "summary": {
          "median_spread_pct": 0.007722007722007729,
          "median_spread_ticks": 1.0000000000000009,
          "median_bid_depth_notional": 2867960.25,
          "median_ask_depth_notional": 3741744.5,
          "tightest_bucket": "09:00",
          "widest_bucket": "09:00",
          "deepest_bid_bucket": "15:30",
          "thinnest_bid_bucket": "16:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 6.2,
      "peers": [
        {
          "ticker": "AJBU",
          "pct": 5.0
        },
        {
          "ticker": "JYEU",
          "pct": 10.3
        },
        {
          "ticker": "AU8U",
          "pct": 95.3
        },
        {
          "ticker": "ODBU",
          "pct": 869.4
        },
        {
          "ticker": "D5IU",
          "pct": 17988.5
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
          "n_trades": 284,
          "n_runs": 212,
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
            "retail_pct": 0.6126760563380281,
            "mixed_pct": 0.3274647887323944,
            "instit_pct": 0.035211267605633804,
            "ambiguous_pct": 0.02464788732394366,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.02464788732394366,
            "retail_qty_pct": 0.04340248962655602,
            "mixed_qty_pct": 0.16066390041493775,
            "instit_qty_pct": 0.7940248962655602,
            "ambiguous_qty_pct": 0.001908713692946058,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.001908713692946058,
            "retail_notional_pct": 0.04329860726410364,
            "mixed_notional_pct": 0.1601342078146144,
            "instit_notional_pct": 0.794667038968042,
            "ambiguous_notional_pct": 0.0019001459532398866,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0019001459532398866
          },
          "run_composition": {
            "retail_pct": 0.8207547169811321,
            "mixed_pct": 0.1650943396226415,
            "instit_pct": 0.009433962264150943,
            "ambiguous_pct": 0.0047169811320754715,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0047169811320754715,
            "retail_notional_pct": 0.04329860726410364,
            "mixed_notional_pct": 0.1601342078146144,
            "instit_notional_pct": 0.794667038968042,
            "unclear_notional_pct": 0.0019001459532398866
          },
          "counts": {
            "trades": {
              "retail": 174,
              "mixed": 93,
              "institutional": 10,
              "ambiguous": 7,
              "unobservable": 0,
              "unclear": 7
            },
            "runs": {
              "retail": 174,
              "mixed": 35,
              "institutional": 2,
              "ambiguous": 1,
              "unobservable": 0,
              "unclear": 1
            }
          },
          "confidence": {
            "high": 0.5754716981132075,
            "medium": 0.25,
            "low": 0.0047169811320754715,
            "na": 0.16981132075471697
          },
          "confidence_counts": {
            "high": 122,
            "medium": 53,
            "low": 1,
            "na": 36
          },
          "trade_confidence": {
            "high": 0.45422535211267606,
            "medium": 0.19014084507042253,
            "low": 0.0035211267605633804,
            "na": 0.352112676056338
          },
          "trade_confidence_counts": {
            "high": 129,
            "medium": 54,
            "low": 1,
            "na": 100
          },
          "observability": {
            "avg_feature_coverage": 0.8733490566037735,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.0047169811320754715,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.8207547169811321,
          "dominance_gap": 0.6556603773584906,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 250,
              "MULTI_FILL_SINGLE_PRICE": 34
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 284
            },
            "d3_urgency": {
              "IMMEDIATE": 210,
              "ADAPTIVE": 2
            },
            "participant_confidence": {
              "HIGH": 122,
              "MEDIUM": 53,
              "NA": 36,
              "LOW": 1
            }
          },
          "trade_size": {
            "avg": 2749.0475352112676,
            "median": 65.0
          },
          "run_size": {
            "avg": 3682.686320754717,
            "median": 65.0,
            "avg_length": 1.2358490566037736
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-316",
              "timestamp": "2026-04-10T09:06:16.032100",
              "price": 0.645,
              "size": 254200.0,
              "notional": 163959.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57028,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-315",
              "timestamp": "2026-04-10T09:06:16.032000",
              "price": 0.645,
              "size": 45800.0,
              "notional": 29541.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57028,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-297",
              "timestamp": "2026-04-10T08:59:52.243500",
              "price": 0.645,
              "size": 100.0,
              "notional": 64.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57027,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-296",
              "timestamp": "2026-04-10T08:59:51.910100",
              "price": 0.65,
              "size": 100.0,
              "notional": 65.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57026,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-295",
              "timestamp": "2026-04-10T08:59:45.981100",
              "price": 0.645,
              "size": 100.0,
              "notional": 64.5,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57025,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-294",
              "timestamp": "2026-04-10T08:59:43.709000",
              "price": 0.645,
              "size": 100.0,
              "notional": 64.5,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57025,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-293",
              "timestamp": "2026-04-10T08:59:40.347000",
              "price": 0.645,
              "size": 200.0,
              "notional": 129.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57025,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-292",
              "timestamp": "2026-04-10T08:59:37.174100",
              "price": 0.645,
              "size": 200.0,
              "notional": 129.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57025,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-291",
              "timestamp": "2026-04-10T08:59:28.021900",
              "price": 0.645,
              "size": 100.0,
              "notional": 64.5,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57024,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-290",
              "timestamp": "2026-04-10T08:59:24.956800",
              "price": 0.645,
              "size": 200.0,
              "notional": 129.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57024,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-289",
              "timestamp": "2026-04-10T08:59:23.859900",
              "price": 0.65,
              "size": 100.0,
              "notional": 65.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57023,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-288",
              "timestamp": "2026-04-10T08:59:21.917200",
              "price": 0.65,
              "size": 100.0,
              "notional": 65.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57023,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-287",
              "timestamp": "2026-04-10T08:59:21.069300",
              "price": 0.65,
              "size": 100.0,
              "notional": 65.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57023,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-286",
              "timestamp": "2026-04-10T08:59:21.069200",
              "price": 0.65,
              "size": 300.0,
              "notional": 195.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57023,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-285",
              "timestamp": "2026-04-10T08:59:18.701200",
              "price": 0.645,
              "size": 300.0,
              "notional": 193.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57022,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-284",
              "timestamp": "2026-04-10T08:59:06.901300",
              "price": 0.645,
              "size": 200.0,
              "notional": 129.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 57021,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-283",
              "timestamp": "2026-04-10T08:59:02.812000",
              "price": 0.645,
              "size": 200.0,
              "notional": 129.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 57021,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-282",
              "timestamp": "2026-04-10T08:59:00.931400",
              "price": 0.645,
              "size": 100.0,
              "notional": 64.5,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 57021,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-281",
              "timestamp": "2026-04-10T08:59:00.931400",
              "price": 0.645,
              "size": 1300.0,
              "notional": 838.5,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 57021,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-280",
              "timestamp": "2026-04-10T08:58:59.285700",
              "price": 0.645,
              "size": 100.0,
              "notional": 64.5,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 57021,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-279",
              "timestamp": "2026-04-10T08:58:55.181100",
              "price": 0.645,
              "size": 100.0,
              "notional": 64.5,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 57021,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-278",
              "timestamp": "2026-04-10T08:58:51.525000",
              "price": 0.645,
              "size": 300.0,
              "notional": 193.5,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 57021,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-277",
              "timestamp": "2026-04-10T08:58:45.574200",
              "price": 0.645,
              "size": 200.0,
              "notional": 129.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57020,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-276",
              "timestamp": "2026-04-10T08:58:29.629900",
              "price": 0.645,
              "size": 1500.0,
              "notional": 967.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57019,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-275",
              "timestamp": "2026-04-10T08:58:14.433800",
              "price": 0.645,
              "size": 200.0,
              "notional": 129.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57018,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-274",
              "timestamp": "2026-04-10T08:57:52.915100",
              "price": 0.645,
              "size": 300.0,
              "notional": 193.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57017,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-273",
              "timestamp": "2026-04-10T08:57:33.479900",
              "price": 0.645,
              "size": 1500.0,
              "notional": 967.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57016,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-272",
              "timestamp": "2026-04-10T08:57:15.456300",
              "price": 0.645,
              "size": 200.0,
              "notional": 129.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57015,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-271",
              "timestamp": "2026-04-10T08:56:58.588200",
              "price": 0.645,
              "size": 100.0,
              "notional": 64.5,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57014,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-270",
              "timestamp": "2026-04-10T08:56:56.569300",
              "price": 0.645,
              "size": 300.0,
              "notional": 193.5,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57014,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "CRPU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.6126760563380281,
              "mixed_pct": 0.3274647887323944,
              "instit_pct": 0.035211267605633804,
              "ambiguous_pct": 0.02464788732394366,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.02464788732394366,
              "retail_qty_pct": 0.04340248962655602,
              "mixed_qty_pct": 0.16066390041493775,
              "instit_qty_pct": 0.7940248962655602,
              "ambiguous_qty_pct": 0.001908713692946058,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.001908713692946058,
              "retail_notional_pct": 0.04329860726410364,
              "mixed_notional_pct": 0.1601342078146144,
              "instit_notional_pct": 0.794667038968042,
              "ambiguous_notional_pct": 0.0019001459532398866,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0019001459532398866,
              "run_retail_pct": 0.8207547169811321,
              "run_mixed_pct": 0.1650943396226415,
              "run_instit_pct": 0.009433962264150943,
              "run_unclear_pct": 0.0047169811320754715,
              "avg_trade_size": 2749.0475352112676,
              "avg_run_notional": 3682.686320754717,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.5754716981132075,
              "medium_confidence_pct": 0.25,
              "low_confidence_pct": 0.0047169811320754715,
              "na_confidence_pct": 0.16981132075471697,
              "avg_feature_coverage": 0.8733490566037735,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "JYEU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.5766016713091922,
              "mixed_pct": 0.3328690807799443,
              "instit_pct": 0.06928969359331476,
              "ambiguous_pct": 0.021239554317548745,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.021239554317548745,
              "retail_qty_pct": 0.15553882781317835,
              "mixed_qty_pct": 0.1804495483509558,
              "instit_qty_pct": 0.6611844408654856,
              "ambiguous_qty_pct": 0.0028271829703802255,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0028271829703802255,
              "retail_notional_pct": 0.15589227098726385,
              "mixed_notional_pct": 0.1805937184182993,
              "instit_notional_pct": 0.6606888120114421,
              "ambiguous_notional_pct": 0.0028251985829946544,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0028251985829946544,
              "run_retail_pct": 0.7934131736526946,
              "run_mixed_pct": 0.20209580838323354,
              "run_instit_pct": 0.000998003992015968,
              "run_unclear_pct": 0.003493013972055888,
              "avg_trade_size": 2256.170438718663,
              "avg_run_notional": 3233.3939620758483,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.37624750499001997,
              "medium_confidence_pct": 0.36976047904191617,
              "low_confidence_pct": 0.04840319361277445,
              "na_confidence_pct": 0.2055888223552894,
              "avg_feature_coverage": 0.8819610778443113,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AJBU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.38361266294227186,
              "mixed_pct": 0.3039106145251397,
              "instit_pct": 0.2435754189944134,
              "ambiguous_pct": 0.06890130353817504,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.06890130353817504,
              "retail_qty_pct": 0.11066344345957561,
              "mixed_qty_pct": 0.25317844032590203,
              "instit_qty_pct": 0.5498925597636315,
              "ambiguous_qty_pct": 0.08626555645089086,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.08626555645089086,
              "retail_notional_pct": 0.11081210132118238,
              "mixed_notional_pct": 0.25393480036094257,
              "instit_notional_pct": 0.5493975844911626,
              "ambiguous_notional_pct": 0.08585551382671247,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.08585551382671247,
              "run_retail_pct": 0.7492625368731564,
              "run_mixed_pct": 0.193952802359882,
              "run_instit_pct": 0.019174041297935103,
              "run_unclear_pct": 0.03761061946902655,
              "avg_trade_size": 3821.9813780260706,
              "avg_run_notional": 7567.861356932153,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.4918879056047198,
              "medium_confidence_pct": 0.252212389380531,
              "low_confidence_pct": 0.024336283185840708,
              "na_confidence_pct": 0.23156342182890854,
              "avg_feature_coverage": 0.8688053097345132,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AU8U",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.375,
              "mixed_pct": 0.3275,
              "instit_pct": 0.17625,
              "ambiguous_pct": 0.12125,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.12125,
              "retail_qty_pct": 0.04284692811176503,
              "mixed_qty_pct": 0.23068038061712778,
              "instit_qty_pct": 0.49221714977173975,
              "ambiguous_qty_pct": 0.23425554149936748,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.23425554149936748,
              "retail_notional_pct": 0.04273997143541183,
              "mixed_notional_pct": 0.2303271718581017,
              "instit_notional_pct": 0.4923969487075762,
              "ambiguous_notional_pct": 0.23453590799891025,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.23453590799891025,
              "run_retail_pct": 0.7410256410256411,
              "run_mixed_pct": 0.22564102564102564,
              "run_instit_pct": 0.020512820512820513,
              "run_unclear_pct": 0.01282051282051282,
              "avg_trade_size": 1514.1125,
              "avg_run_notional": 3105.871794871795,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.3717948717948718,
              "medium_confidence_pct": 0.35128205128205126,
              "low_confidence_pct": 0.038461538461538464,
              "na_confidence_pct": 0.23846153846153847,
              "avg_feature_coverage": 0.8788461538461537,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ODBU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.3076923076923077,
              "mixed_pct": 0.23076923076923078,
              "instit_pct": 0.0,
              "ambiguous_pct": 0.46153846153846156,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.46153846153846156,
              "retail_qty_pct": 0.07983193277310924,
              "mixed_qty_pct": 0.7058823529411765,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": 0.21428571428571427,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.21428571428571427,
              "retail_notional_pct": 0.08005185545292497,
              "mixed_notional_pct": 0.7071382271917032,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": 0.2128099173553719,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.2128099173553719,
              "run_retail_pct": 0.5,
              "run_mixed_pct": 0.3333333333333333,
              "run_instit_pct": 0.0,
              "run_unclear_pct": 0.16666666666666666,
              "avg_trade_size": 949.3846153846154,
              "avg_run_notional": 2057.0,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5,
              "na_confidence_pct": 0.5,
              "avg_feature_coverage": 0.9,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "D5IU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.6666666666666666,
              "mixed_pct": 0.3333333333333333,
              "instit_pct": 0.0,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0,
              "retail_qty_pct": 0.3670886075949367,
              "mixed_qty_pct": 0.6329113924050633,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0,
              "retail_notional_pct": 0.3670886075949367,
              "mixed_notional_pct": 0.6329113924050633,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0,
              "run_retail_pct": 0.6666666666666666,
              "run_mixed_pct": 0.3333333333333333,
              "run_instit_pct": 0.0,
              "run_unclear_pct": 0.0,
              "avg_trade_size": 18.433333333333334,
              "avg_run_notional": 18.433333333333334,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.6666666666666666,
              "na_confidence_pct": 0.3333333333333333,
              "avg_feature_coverage": 0.8500000000000001,
              "observable_run_pct": 1.0,
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
          "n_trades": 8616,
          "n_runs": 6087,
          "n_trade_days": 21,
          "first_trade_date": "2026-03-12",
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
            "retail_pct": 0.5868152274837511,
            "mixed_pct": 0.2404828226555246,
            "instit_pct": 0.12894614670380686,
            "ambiguous_pct": 0.043755803156917364,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.043755803156917364,
            "retail_qty_pct": 0.08529356856156071,
            "mixed_qty_pct": 0.3028407853386851,
            "instit_qty_pct": 0.4621954634556147,
            "ambiguous_qty_pct": 0.14967018264413953,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.14967018264413953,
            "retail_notional_pct": 0.08571418412625254,
            "mixed_notional_pct": 0.3036956258607783,
            "instit_notional_pct": 0.46145790699630196,
            "ambiguous_notional_pct": 0.14913228301666714,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.14913228301666714
          },
          "run_composition": {
            "retail_pct": 0.8243798258583868,
            "mixed_pct": 0.15327747658945293,
            "instit_pct": 0.015114177755873173,
            "ambiguous_pct": 0.007228519796287169,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.007228519796287169,
            "retail_notional_pct": 0.08571418412625254,
            "mixed_notional_pct": 0.3036956258607783,
            "instit_notional_pct": 0.46145790699630196,
            "unclear_notional_pct": 0.14913228301666714
          },
          "counts": {
            "trades": {
              "retail": 5056,
              "mixed": 2072,
              "institutional": 1111,
              "ambiguous": 377,
              "unobservable": 0,
              "unclear": 377
            },
            "runs": {
              "retail": 5018,
              "mixed": 933,
              "institutional": 92,
              "ambiguous": 44,
              "unobservable": 0,
              "unclear": 44
            }
          },
          "confidence": {
            "high": 0.4990964350254641,
            "medium": 0.3150977493017907,
            "low": 0.025299819287005094,
            "na": 0.1605059963857401
          },
          "confidence_counts": {
            "high": 3038,
            "medium": 1918,
            "low": 154,
            "na": 977
          },
          "trade_confidence": {
            "high": 0.3983286908077994,
            "medium": 0.2880687093779016,
            "low": 0.02936397400185701,
            "na": 0.28423862581244197
          },
          "trade_confidence_counts": {
            "high": 3432,
            "medium": 2482,
            "low": 253,
            "na": 2449
          },
          "observability": {
            "avg_feature_coverage": 0.8645391818629865,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.007228519796287169,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.8243798258583868,
          "dominance_gap": 0.6711023492689339,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 6522,
              "MULTI_FILL_SINGLE_PRICE": 2028,
              "WALK_BOOK": 66
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 8262,
              "MOMENTUM_REACTIVE": 197,
              "PERSISTENT_POSITIVE_IMPACT": 150,
              "UNOBSERVABLE": 6,
              "SHORT_HORIZON_POSITIVE_IMPACT": 1
            },
            "d3_urgency": {
              "IMMEDIATE": 6036,
              "ADAPTIVE": 51
            },
            "participant_confidence": {
              "HIGH": 3038,
              "MEDIUM": 1918,
              "NA": 977,
              "LOW": 154
            }
          },
          "trade_size": {
            "avg": 1925.9088324048282,
            "median": 127.0
          },
          "run_size": {
            "avg": 2726.0769673073764,
            "median": 127.0,
            "avg_length": 1.139149006078528
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-316",
              "timestamp": "2026-04-10T09:06:16.032100",
              "price": 0.645,
              "size": 254200.0,
              "notional": 163959.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57028,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-315",
              "timestamp": "2026-04-10T09:06:16.032000",
              "price": 0.645,
              "size": 45800.0,
              "notional": 29541.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57028,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-297",
              "timestamp": "2026-04-10T08:59:52.243500",
              "price": 0.645,
              "size": 100.0,
              "notional": 64.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57027,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-296",
              "timestamp": "2026-04-10T08:59:51.910100",
              "price": 0.65,
              "size": 100.0,
              "notional": 65.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57026,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-295",
              "timestamp": "2026-04-10T08:59:45.981100",
              "price": 0.645,
              "size": 100.0,
              "notional": 64.5,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57025,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-294",
              "timestamp": "2026-04-10T08:59:43.709000",
              "price": 0.645,
              "size": 100.0,
              "notional": 64.5,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57025,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-293",
              "timestamp": "2026-04-10T08:59:40.347000",
              "price": 0.645,
              "size": 200.0,
              "notional": 129.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57025,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-292",
              "timestamp": "2026-04-10T08:59:37.174100",
              "price": 0.645,
              "size": 200.0,
              "notional": 129.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57025,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-291",
              "timestamp": "2026-04-10T08:59:28.021900",
              "price": 0.645,
              "size": 100.0,
              "notional": 64.5,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57024,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-290",
              "timestamp": "2026-04-10T08:59:24.956800",
              "price": 0.645,
              "size": 200.0,
              "notional": 129.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57024,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-289",
              "timestamp": "2026-04-10T08:59:23.859900",
              "price": 0.65,
              "size": 100.0,
              "notional": 65.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57023,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-288",
              "timestamp": "2026-04-10T08:59:21.917200",
              "price": 0.65,
              "size": 100.0,
              "notional": 65.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57023,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-287",
              "timestamp": "2026-04-10T08:59:21.069300",
              "price": 0.65,
              "size": 100.0,
              "notional": 65.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57023,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-286",
              "timestamp": "2026-04-10T08:59:21.069200",
              "price": 0.65,
              "size": 300.0,
              "notional": 195.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57023,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-285",
              "timestamp": "2026-04-10T08:59:18.701200",
              "price": 0.645,
              "size": 300.0,
              "notional": 193.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57022,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-284",
              "timestamp": "2026-04-10T08:59:06.901300",
              "price": 0.645,
              "size": 200.0,
              "notional": 129.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 57021,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-283",
              "timestamp": "2026-04-10T08:59:02.812000",
              "price": 0.645,
              "size": 200.0,
              "notional": 129.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 57021,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-282",
              "timestamp": "2026-04-10T08:59:00.931400",
              "price": 0.645,
              "size": 100.0,
              "notional": 64.5,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 57021,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-281",
              "timestamp": "2026-04-10T08:59:00.931400",
              "price": 0.645,
              "size": 1300.0,
              "notional": 838.5,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 57021,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-280",
              "timestamp": "2026-04-10T08:58:59.285700",
              "price": 0.645,
              "size": 100.0,
              "notional": 64.5,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 57021,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-279",
              "timestamp": "2026-04-10T08:58:55.181100",
              "price": 0.645,
              "size": 100.0,
              "notional": 64.5,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 57021,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-278",
              "timestamp": "2026-04-10T08:58:51.525000",
              "price": 0.645,
              "size": 300.0,
              "notional": 193.5,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 57021,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-277",
              "timestamp": "2026-04-10T08:58:45.574200",
              "price": 0.645,
              "size": 200.0,
              "notional": 129.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57020,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-276",
              "timestamp": "2026-04-10T08:58:29.629900",
              "price": 0.645,
              "size": 1500.0,
              "notional": 967.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57019,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-275",
              "timestamp": "2026-04-10T08:58:14.433800",
              "price": 0.645,
              "size": 200.0,
              "notional": 129.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57018,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-274",
              "timestamp": "2026-04-10T08:57:52.915100",
              "price": 0.645,
              "size": 300.0,
              "notional": 193.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57017,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-273",
              "timestamp": "2026-04-10T08:57:33.479900",
              "price": 0.645,
              "size": 1500.0,
              "notional": 967.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57016,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-272",
              "timestamp": "2026-04-10T08:57:15.456300",
              "price": 0.645,
              "size": 200.0,
              "notional": 129.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57015,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-271",
              "timestamp": "2026-04-10T08:56:58.588200",
              "price": 0.645,
              "size": 100.0,
              "notional": 64.5,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57014,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-270",
              "timestamp": "2026-04-10T08:56:56.569300",
              "price": 0.645,
              "size": 300.0,
              "notional": 193.5,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57014,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "CRPU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.5868152274837511,
              "mixed_pct": 0.2404828226555246,
              "instit_pct": 0.12894614670380686,
              "ambiguous_pct": 0.043755803156917364,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.043755803156917364,
              "retail_qty_pct": 0.08529356856156071,
              "mixed_qty_pct": 0.3028407853386851,
              "instit_qty_pct": 0.4621954634556147,
              "ambiguous_qty_pct": 0.14967018264413953,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.14967018264413953,
              "retail_notional_pct": 0.08571418412625254,
              "mixed_notional_pct": 0.3036956258607783,
              "instit_notional_pct": 0.46145790699630196,
              "ambiguous_notional_pct": 0.14913228301666714,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.14913228301666714,
              "run_retail_pct": 0.8243798258583868,
              "run_mixed_pct": 0.15327747658945293,
              "run_instit_pct": 0.015114177755873173,
              "run_unclear_pct": 0.007228519796287169,
              "avg_trade_size": 1925.9088324048282,
              "avg_run_notional": 2726.0769673073764,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.4990964350254641,
              "medium_confidence_pct": 0.3150977493017907,
              "low_confidence_pct": 0.025299819287005094,
              "na_confidence_pct": 0.1605059963857401,
              "avg_feature_coverage": 0.8645391818629865,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AJBU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.3859079164085284,
              "mixed_pct": 0.32257967028815787,
              "instit_pct": 0.252315689266988,
              "ambiguous_pct": 0.03854697109354931,
              "unobservable_pct": 0.0006497529427764094,
              "unclear_pct": 0.03919672403632572,
              "retail_qty_pct": 0.10537056549993118,
              "mixed_qty_pct": 0.23575052654848164,
              "instit_qty_pct": 0.5956663318259474,
              "ambiguous_qty_pct": 0.04949929379705759,
              "unobservable_qty_pct": 0.013713282328582163,
              "unclear_qty_pct": 0.06321257612563976,
              "retail_notional_pct": 0.10521020700970615,
              "mixed_notional_pct": 0.23595162921840787,
              "instit_notional_pct": 0.595915011576091,
              "ambiguous_notional_pct": 0.04930736782366978,
              "unobservable_notional_pct": 0.013615784372125331,
              "unclear_notional_pct": 0.06292315219579511,
              "run_retail_pct": 0.7350360576923077,
              "run_mixed_pct": 0.23134014423076923,
              "run_instit_pct": 0.01748798076923077,
              "run_unclear_pct": 0.016135817307692306,
              "avg_trade_size": 5623.759264117017,
              "avg_run_notional": 11183.135947716348,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.37115384615384617,
              "medium_confidence_pct": 0.34753605769230766,
              "low_confidence_pct": 0.03383413461538461,
              "na_confidence_pct": 0.24747596153846155,
              "avg_feature_coverage": 0.8812049278846151,
              "observable_run_pct": 0.999609375,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AU8U",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.4782580686722927,
              "mixed_pct": 0.2904722025381692,
              "instit_pct": 0.19455002254718803,
              "ambiguous_pct": 0.03671970624235006,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.03671970624235006,
              "retail_qty_pct": 0.09408524647780972,
              "mixed_qty_pct": 0.29108901647761753,
              "instit_qty_pct": 0.529826382310381,
              "ambiguous_qty_pct": 0.08499935473419168,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.08499935473419168,
              "retail_notional_pct": 0.09384341994352209,
              "mixed_notional_pct": 0.291178196978604,
              "instit_notional_pct": 0.5295271987473911,
              "ambiguous_notional_pct": 0.08545118433048293,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.08545118433048293,
              "run_retail_pct": 0.7838012958963283,
              "run_mixed_pct": 0.18812095032397408,
              "run_instit_pct": 0.02062634989200864,
              "run_unclear_pct": 0.0074514038876889845,
              "avg_trade_size": 1522.7330090832957,
              "avg_run_notional": 2552.633315334773,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.4652267818574514,
              "medium_confidence_pct": 0.30615550755939525,
              "low_confidence_pct": 0.03304535637149028,
              "na_confidence_pct": 0.19557235421166308,
              "avg_feature_coverage": 0.8727591792656586,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ODBU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2208398133748056,
              "mixed_pct": 0.07153965785381027,
              "instit_pct": 0.31259720062208396,
              "ambiguous_pct": 0.39502332814930013,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.39502332814930013,
              "retail_qty_pct": 0.05894089732528041,
              "mixed_qty_pct": 0.07788682772505033,
              "instit_qty_pct": 0.5219298245614035,
              "ambiguous_qty_pct": 0.34124245038826573,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.34124245038826573,
              "retail_notional_pct": 0.0591492651870392,
              "mixed_notional_pct": 0.07833083707271465,
              "instit_notional_pct": 0.5211543279607298,
              "ambiguous_notional_pct": 0.3413655697795163,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.3413655697795163,
              "run_retail_pct": 0.4216417910447761,
              "run_mixed_pct": 0.11940298507462686,
              "run_instit_pct": 0.1417910447761194,
              "run_unclear_pct": 0.31716417910447764,
              "avg_trade_size": 4397.972783825817,
              "avg_run_notional": 10551.852611940298,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.018656716417910446,
              "medium_confidence_pct": 0.09701492537313433,
              "low_confidence_pct": 0.44776119402985076,
              "na_confidence_pct": 0.43656716417910446,
              "avg_feature_coverage": 0.8309701492537312,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "JYEU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.476127518528174,
              "mixed_pct": 0.3458157982942907,
              "instit_pct": 0.12520948940449145,
              "ambiguous_pct": 0.05269822352984991,
              "unobservable_pct": 0.000148970243193922,
              "unclear_pct": 0.05284719377304383,
              "retail_qty_pct": 0.08048377709775395,
              "mixed_qty_pct": 0.2643138770871674,
              "instit_qty_pct": 0.4018369028027884,
              "ambiguous_qty_pct": 0.04096919831345509,
              "unobservable_qty_pct": 0.21239624469883514,
              "unclear_qty_pct": 0.25336544301229025,
              "retail_notional_pct": 0.08087943286448984,
              "mixed_notional_pct": 0.265165423581597,
              "instit_notional_pct": 0.402940877743929,
              "ambiguous_notional_pct": 0.04126718757929966,
              "unobservable_notional_pct": 0.20974707823068456,
              "unclear_notional_pct": 0.2510142658099842,
              "run_retail_pct": 0.7633125058285928,
              "run_mixed_pct": 0.22304081569212597,
              "run_instit_pct": 0.005253504927103733,
              "run_unclear_pct": 0.008393173552177563,
              "avg_trade_size": 4548.279745447097,
              "avg_run_notional": 7592.766915042433,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.3682738039727688,
              "medium_confidence_pct": 0.35562187198856043,
              "low_confidence_pct": 0.044670334794367245,
              "na_confidence_pct": 0.23143398924430353,
              "avg_feature_coverage": 0.8855497528676676,
              "observable_run_pct": 0.9997513133762318,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "BMGU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.10487444608567208,
              "mixed_pct": 0.3604135893648449,
              "instit_pct": 0.07828655834564253,
              "ambiguous_pct": 0.44756277695716395,
              "unobservable_pct": 0.008862629246676515,
              "unclear_pct": 0.4564254062038405,
              "retail_qty_pct": 0.05300127713920817,
              "mixed_qty_pct": 0.16666666666666666,
              "instit_qty_pct": 0.4182630906768838,
              "ambiguous_qty_pct": 0.31545338441890164,
              "unobservable_qty_pct": 0.04661558109833972,
              "unclear_qty_pct": 0.3620689655172414,
              "retail_notional_pct": 0.05442898778077683,
              "mixed_notional_pct": 0.17680577663967517,
              "instit_notional_pct": 0.39810521297129364,
              "ambiguous_notional_pct": 0.32635092009443173,
              "unobservable_notional_pct": 0.044309102513822564,
              "unclear_notional_pct": 0.3706600226082543,
              "run_retail_pct": 0.4013605442176871,
              "run_mixed_pct": 0.2857142857142857,
              "run_instit_pct": 0.07482993197278912,
              "run_unclear_pct": 0.2380952380952381,
              "avg_trade_size": 96.04209748892171,
              "avg_run_notional": 442.31632653061223,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.2789115646258503,
              "low_confidence_pct": 0.19727891156462585,
              "na_confidence_pct": 0.5238095238095238,
              "avg_feature_coverage": 0.9166666666666665,
              "observable_run_pct": 0.9931972789115646,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "D5IU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.7570498915401301,
              "mixed_pct": 0.23210412147505424,
              "instit_pct": 0.010845986984815618,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0,
              "retail_qty_pct": 0.10761365870709808,
              "mixed_qty_pct": 0.7321798148835922,
              "instit_qty_pct": 0.1602065264093097,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0,
              "retail_notional_pct": 0.1078043618931523,
              "mixed_notional_pct": 0.7371813165067744,
              "instit_notional_pct": 0.1550143216000733,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0,
              "run_retail_pct": 0.843520782396088,
              "run_mixed_pct": 0.15403422982885084,
              "run_instit_pct": 0.0024449877750611247,
              "run_unclear_pct": 0.0,
              "avg_trade_size": 923.5477223427332,
              "avg_run_notional": 1040.9669926650367,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6430317848410758,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.20293398533007334,
              "na_confidence_pct": 0.15403422982885084,
              "avg_feature_coverage": 0.8518337408312955,
              "observable_run_pct": 1.0,
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
          "n_trades": 20395,
          "n_runs": 14200,
          "n_trade_days": 63,
          "first_trade_date": "2026-01-09",
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
            "retail_pct": 0.5798480019612651,
            "mixed_pct": 0.24094140720764892,
            "instit_pct": 0.13356214758519244,
            "ambiguous_pct": 0.0456484432458936,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0456484432458936,
            "retail_qty_pct": 0.07412932864396904,
            "mixed_qty_pct": 0.3055570007491884,
            "instit_qty_pct": 0.48165138807958047,
            "ambiguous_qty_pct": 0.13866228252726212,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.13866228252726212,
            "retail_notional_pct": 0.07417424019944803,
            "mixed_notional_pct": 0.3062714760588223,
            "instit_notional_pct": 0.48116387548096073,
            "ambiguous_notional_pct": 0.13839040826076893,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.13839040826076893
          },
          "run_composition": {
            "retail_pct": 0.8280281690140845,
            "mixed_pct": 0.14830985915492959,
            "instit_pct": 0.015774647887323943,
            "ambiguous_pct": 0.007887323943661971,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.007887323943661971,
            "retail_notional_pct": 0.07417424019944803,
            "mixed_notional_pct": 0.3062714760588223,
            "instit_notional_pct": 0.48116387548096073,
            "unclear_notional_pct": 0.13839040826076893
          },
          "counts": {
            "trades": {
              "retail": 11826,
              "mixed": 4914,
              "institutional": 2724,
              "ambiguous": 931,
              "unobservable": 0,
              "unclear": 931
            },
            "runs": {
              "retail": 11758,
              "mixed": 2106,
              "institutional": 224,
              "ambiguous": 112,
              "unobservable": 0,
              "unclear": 112
            }
          },
          "confidence": {
            "high": 0.5377464788732395,
            "medium": 0.2865492957746479,
            "low": 0.019507042253521126,
            "na": 0.15619718309859154
          },
          "confidence_counts": {
            "high": 7636,
            "medium": 4069,
            "low": 277,
            "na": 2218
          },
          "trade_confidence": {
            "high": 0.4170630056386369,
            "medium": 0.2755087031135082,
            "low": 0.02083844079431233,
            "na": 0.2865898504535425
          },
          "trade_confidence_counts": {
            "high": 8506,
            "medium": 5619,
            "low": 425,
            "na": 5845
          },
          "observability": {
            "avg_feature_coverage": 0.8635211267605633,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.007887323943661971,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.8280281690140845,
          "dominance_gap": 0.6797183098591549,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 15099,
              "MULTI_FILL_SINGLE_PRICE": 5182,
              "WALK_BOOK": 114
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 19619,
              "MOMENTUM_REACTIVE": 485,
              "PERSISTENT_POSITIVE_IMPACT": 280,
              "UNOBSERVABLE": 10,
              "SHORT_HORIZON_POSITIVE_IMPACT": 1
            },
            "d3_urgency": {
              "IMMEDIATE": 14094,
              "ADAPTIVE": 106
            },
            "participant_confidence": {
              "HIGH": 7636,
              "MEDIUM": 4069,
              "NA": 2218,
              "LOW": 277
            }
          },
          "trade_size": {
            "avg": 2527.023314537877,
            "median": 135.0
          },
          "run_size": {
            "avg": 3629.481725352113,
            "median": 128.0,
            "avg_length": 1.1356338028169015
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-316",
              "timestamp": "2026-04-10T09:06:16.032100",
              "price": 0.645,
              "size": 254200.0,
              "notional": 163959.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57028,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-315",
              "timestamp": "2026-04-10T09:06:16.032000",
              "price": 0.645,
              "size": 45800.0,
              "notional": 29541.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57028,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-297",
              "timestamp": "2026-04-10T08:59:52.243500",
              "price": 0.645,
              "size": 100.0,
              "notional": 64.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57027,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-296",
              "timestamp": "2026-04-10T08:59:51.910100",
              "price": 0.65,
              "size": 100.0,
              "notional": 65.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57026,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-295",
              "timestamp": "2026-04-10T08:59:45.981100",
              "price": 0.645,
              "size": 100.0,
              "notional": 64.5,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57025,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-294",
              "timestamp": "2026-04-10T08:59:43.709000",
              "price": 0.645,
              "size": 100.0,
              "notional": 64.5,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57025,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-293",
              "timestamp": "2026-04-10T08:59:40.347000",
              "price": 0.645,
              "size": 200.0,
              "notional": 129.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57025,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-292",
              "timestamp": "2026-04-10T08:59:37.174100",
              "price": 0.645,
              "size": 200.0,
              "notional": 129.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57025,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-291",
              "timestamp": "2026-04-10T08:59:28.021900",
              "price": 0.645,
              "size": 100.0,
              "notional": 64.5,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57024,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-290",
              "timestamp": "2026-04-10T08:59:24.956800",
              "price": 0.645,
              "size": 200.0,
              "notional": 129.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57024,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-289",
              "timestamp": "2026-04-10T08:59:23.859900",
              "price": 0.65,
              "size": 100.0,
              "notional": 65.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57023,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-288",
              "timestamp": "2026-04-10T08:59:21.917200",
              "price": 0.65,
              "size": 100.0,
              "notional": 65.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57023,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-287",
              "timestamp": "2026-04-10T08:59:21.069300",
              "price": 0.65,
              "size": 100.0,
              "notional": 65.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57023,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-286",
              "timestamp": "2026-04-10T08:59:21.069200",
              "price": 0.65,
              "size": 300.0,
              "notional": 195.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57023,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-285",
              "timestamp": "2026-04-10T08:59:18.701200",
              "price": 0.645,
              "size": 300.0,
              "notional": 193.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57022,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-284",
              "timestamp": "2026-04-10T08:59:06.901300",
              "price": 0.645,
              "size": 200.0,
              "notional": 129.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 57021,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-283",
              "timestamp": "2026-04-10T08:59:02.812000",
              "price": 0.645,
              "size": 200.0,
              "notional": 129.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 57021,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-282",
              "timestamp": "2026-04-10T08:59:00.931400",
              "price": 0.645,
              "size": 100.0,
              "notional": 64.5,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 57021,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-281",
              "timestamp": "2026-04-10T08:59:00.931400",
              "price": 0.645,
              "size": 1300.0,
              "notional": 838.5,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 57021,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-280",
              "timestamp": "2026-04-10T08:58:59.285700",
              "price": 0.645,
              "size": 100.0,
              "notional": 64.5,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 57021,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-279",
              "timestamp": "2026-04-10T08:58:55.181100",
              "price": 0.645,
              "size": 100.0,
              "notional": 64.5,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 57021,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-278",
              "timestamp": "2026-04-10T08:58:51.525000",
              "price": 0.645,
              "size": 300.0,
              "notional": 193.5,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 57021,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-277",
              "timestamp": "2026-04-10T08:58:45.574200",
              "price": 0.645,
              "size": 200.0,
              "notional": 129.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57020,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-276",
              "timestamp": "2026-04-10T08:58:29.629900",
              "price": 0.645,
              "size": 1500.0,
              "notional": 967.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57019,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-275",
              "timestamp": "2026-04-10T08:58:14.433800",
              "price": 0.645,
              "size": 200.0,
              "notional": 129.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57018,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-274",
              "timestamp": "2026-04-10T08:57:52.915100",
              "price": 0.645,
              "size": 300.0,
              "notional": 193.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57017,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-273",
              "timestamp": "2026-04-10T08:57:33.479900",
              "price": 0.645,
              "size": 1500.0,
              "notional": 967.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57016,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-272",
              "timestamp": "2026-04-10T08:57:15.456300",
              "price": 0.645,
              "size": 200.0,
              "notional": 129.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57015,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-271",
              "timestamp": "2026-04-10T08:56:58.588200",
              "price": 0.645,
              "size": 100.0,
              "notional": 64.5,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57014,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-270",
              "timestamp": "2026-04-10T08:56:56.569300",
              "price": 0.645,
              "size": 300.0,
              "notional": 193.5,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57014,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "CRPU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.5798480019612651,
              "mixed_pct": 0.24094140720764892,
              "instit_pct": 0.13356214758519244,
              "ambiguous_pct": 0.0456484432458936,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0456484432458936,
              "retail_qty_pct": 0.07412932864396904,
              "mixed_qty_pct": 0.3055570007491884,
              "instit_qty_pct": 0.48165138807958047,
              "ambiguous_qty_pct": 0.13866228252726212,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.13866228252726212,
              "retail_notional_pct": 0.07417424019944803,
              "mixed_notional_pct": 0.3062714760588223,
              "instit_notional_pct": 0.48116387548096073,
              "ambiguous_notional_pct": 0.13839040826076893,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.13839040826076893,
              "run_retail_pct": 0.8280281690140845,
              "run_mixed_pct": 0.14830985915492959,
              "run_instit_pct": 0.015774647887323943,
              "run_unclear_pct": 0.007887323943661971,
              "avg_trade_size": 2527.023314537877,
              "avg_run_notional": 3629.481725352113,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.5377464788732395,
              "medium_confidence_pct": 0.2865492957746479,
              "low_confidence_pct": 0.019507042253521126,
              "na_confidence_pct": 0.15619718309859154,
              "avg_feature_coverage": 0.8635211267605633,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AJBU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.3815765890143533,
              "mixed_pct": 0.3434673719802551,
              "instit_pct": 0.22850513241584436,
              "ambiguous_pct": 0.046077904211051526,
              "unobservable_pct": 0.0003730023784956862,
              "unclear_pct": 0.04645090658954721,
              "retail_qty_pct": 0.0996626038331736,
              "mixed_qty_pct": 0.2340374125212239,
              "instit_qty_pct": 0.6047945203609434,
              "ambiguous_qty_pct": 0.04829211537964769,
              "unobservable_qty_pct": 0.01321334790501145,
              "unclear_qty_pct": 0.06150546328465914,
              "retail_notional_pct": 0.09954556463861294,
              "mixed_notional_pct": 0.23403862499128628,
              "instit_notional_pct": 0.6048408820197367,
              "ambiguous_notional_pct": 0.04842076843425778,
              "unobservable_notional_pct": 0.013154159916106255,
              "unclear_notional_pct": 0.06157492835036403,
              "run_retail_pct": 0.7226622283440465,
              "run_mixed_pct": 0.2471782216100398,
              "run_instit_pct": 0.015419344964799511,
              "run_unclear_pct": 0.014740205081114172,
              "avg_trade_size": 6437.191625127765,
              "avg_run_notional": 12710.904296277165,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.32016184573002754,
              "medium_confidence_pct": 0.367825987144169,
              "low_confidence_pct": 0.05009374043464952,
              "na_confidence_pct": 0.26191842669115395,
              "avg_feature_coverage": 0.8858882384450565,
              "observable_run_pct": 0.9996269513314968,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AU8U",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.4697350470309471,
              "mixed_pct": 0.2906225317728154,
              "instit_pct": 0.19726071659366698,
              "ambiguous_pct": 0.04238170460257055,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.04238170460257055,
              "retail_qty_pct": 0.1055579491598449,
              "mixed_qty_pct": 0.2756442559333052,
              "instit_qty_pct": 0.5495323844510789,
              "ambiguous_qty_pct": 0.06926541045577102,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.06926541045577102,
              "retail_notional_pct": 0.1067232728658773,
              "mixed_notional_pct": 0.2766132451476115,
              "instit_notional_pct": 0.5476208301436847,
              "ambiguous_notional_pct": 0.06904265184282653,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.06904265184282653,
              "run_retail_pct": 0.7807527775213123,
              "run_mixed_pct": 0.19274920752162003,
              "run_instit_pct": 0.018711722524851506,
              "run_unclear_pct": 0.007786292432216169,
              "avg_trade_size": 1670.96774251454,
              "avg_run_notional": 2864.8099898439664,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.45646754685624596,
              "medium_confidence_pct": 0.3160680762010279,
              "low_confidence_pct": 0.026928876988889915,
              "na_confidence_pct": 0.2005354999538362,
              "avg_feature_coverage": 0.8736435539962452,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "JYEU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.46253204286109906,
              "mixed_pct": 0.331463426757653,
              "instit_pct": 0.15717866602285074,
              "ambiguous_pct": 0.048485020628146594,
              "unobservable_pct": 0.00034084373025059113,
              "unclear_pct": 0.048825864358397184,
              "retail_qty_pct": 0.08253550889473273,
              "mixed_qty_pct": 0.23197721765861545,
              "instit_qty_pct": 0.5371039723014632,
              "ambiguous_qty_pct": 0.045944563764433774,
              "unobservable_qty_pct": 0.10243873738075482,
              "unclear_qty_pct": 0.1483833011451886,
              "retail_notional_pct": 0.08228116689246949,
              "mixed_notional_pct": 0.22990264521799908,
              "instit_notional_pct": 0.5448355534202627,
              "ambiguous_notional_pct": 0.04610463819706862,
              "unobservable_notional_pct": 0.0968759962722001,
              "unclear_notional_pct": 0.14298063446926873,
              "run_retail_pct": 0.7613546735265924,
              "run_mixed_pct": 0.22118406523401002,
              "run_instit_pct": 0.00776595357415879,
              "run_unclear_pct": 0.009695307665238864,
              "avg_trade_size": 4406.886006873681,
              "avg_run_notional": 7530.651681086262,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.3718314302702309,
              "medium_confidence_pct": 0.3535571707660385,
              "low_confidence_pct": 0.043732026064481684,
              "na_confidence_pct": 0.2308793728992489,
              "avg_feature_coverage": 0.8846052104694759,
              "observable_run_pct": 0.9994782249942362,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ODBU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.35850052798310456,
              "mixed_pct": 0.14308342133051744,
              "instit_pct": 0.20538542766631468,
              "ambiguous_pct": 0.2930306230200634,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.2930306230200634,
              "retail_qty_pct": 0.08528791850190505,
              "mixed_qty_pct": 0.1363390709865701,
              "instit_qty_pct": 0.4085037965790256,
              "ambiguous_qty_pct": 0.3698692139324993,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.3698692139324993,
              "retail_notional_pct": 0.08628704282551365,
              "mixed_notional_pct": 0.13816996435221154,
              "instit_notional_pct": 0.40469892560905385,
              "ambiguous_notional_pct": 0.37084406721322094,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.37084406721322094,
              "run_retail_pct": 0.5697569756975698,
              "run_mixed_pct": 0.16561656165616562,
              "run_instit_pct": 0.07560756075607561,
              "run_unclear_pct": 0.18901890189018902,
              "avg_trade_size": 4132.4461457233365,
              "avg_run_notional": 7044.872187218722,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.1854185418541854,
              "medium_confidence_pct": 0.1224122412241224,
              "low_confidence_pct": 0.33753375337533753,
              "na_confidence_pct": 0.3546354635463546,
              "avg_feature_coverage": 0.8393339333933393,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "D5IU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.5985732814526589,
              "mixed_pct": 0.20914396887159534,
              "instit_pct": 0.1582360570687419,
              "ambiguous_pct": 0.03404669260700389,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.03404669260700389,
              "retail_qty_pct": 0.11446788213225752,
              "mixed_qty_pct": 0.4654556242567676,
              "instit_qty_pct": 0.3807939927285936,
              "ambiguous_qty_pct": 0.039282500882381305,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.039282500882381305,
              "retail_notional_pct": 0.11227247515545839,
              "mixed_notional_pct": 0.461912074114904,
              "instit_notional_pct": 0.3836646097199949,
              "ambiguous_notional_pct": 0.042150841009642774,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.042150841009642774,
              "run_retail_pct": 0.8167420814479638,
              "run_mixed_pct": 0.14841628959276018,
              "run_instit_pct": 0.019909502262443438,
              "run_unclear_pct": 0.01493212669683258,
              "avg_trade_size": 2252.939494163424,
              "avg_run_notional": 3143.920995475113,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.43981900452488687,
              "medium_confidence_pct": 0.22036199095022624,
              "low_confidence_pct": 0.17647058823529413,
              "na_confidence_pct": 0.16334841628959276,
              "avg_feature_coverage": 0.8547511312217192,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "BMGU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.1141732283464567,
              "mixed_pct": 0.3320209973753281,
              "instit_pct": 0.0984251968503937,
              "ambiguous_pct": 0.4409448818897638,
              "unobservable_pct": 0.014435695538057743,
              "unclear_pct": 0.4553805774278215,
              "retail_qty_pct": 0.05658470865611317,
              "mixed_qty_pct": 0.14011451667228023,
              "instit_qty_pct": 0.39811384304479625,
              "ambiguous_qty_pct": 0.36308521387672615,
              "unobservable_qty_pct": 0.04210171775008421,
              "unclear_qty_pct": 0.40518693162681035,
              "retail_notional_pct": 0.05849423981827032,
              "mixed_notional_pct": 0.14754989453188383,
              "instit_notional_pct": 0.38150657147493106,
              "ambiguous_notional_pct": 0.3715885120882687,
              "unobservable_notional_pct": 0.04086078208664611,
              "unclear_notional_pct": 0.4124492941749148,
              "run_retail_pct": 0.3476190476190476,
              "run_mixed_pct": 0.23809523809523808,
              "run_instit_pct": 0.10952380952380952,
              "run_unclear_pct": 0.30476190476190473,
              "avg_trade_size": 161.75853018372703,
              "avg_run_notional": 586.952380952381,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.19523809523809524,
              "low_confidence_pct": 0.2619047619047619,
              "na_confidence_pct": 0.5428571428571428,
              "avg_feature_coverage": 0.8857142857142857,
              "observable_run_pct": 0.9809523809523809,
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
          "n_trades": 47734,
          "n_runs": 34580,
          "n_trade_days": 126,
          "first_trade_date": "2025-10-09",
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
            "retail_pct": 0.6084132903171744,
            "mixed_pct": 0.2424896300331001,
            "instit_pct": 0.10839234088909373,
            "ambiguous_pct": 0.04070473876063183,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.04070473876063183,
            "retail_qty_pct": 0.09816496395613047,
            "mixed_qty_pct": 0.30657688441301545,
            "instit_qty_pct": 0.48200370581807406,
            "ambiguous_qty_pct": 0.11325444581278002,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.11325444581278002,
            "retail_notional_pct": 0.09828545047850218,
            "mixed_notional_pct": 0.30674248735289866,
            "instit_notional_pct": 0.482034719434445,
            "ambiguous_notional_pct": 0.11293734273415418,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.11293734273415418
          },
          "run_composition": {
            "retail_pct": 0.8309427414690572,
            "mixed_pct": 0.1497108155002892,
            "instit_pct": 0.013100057836899942,
            "ambiguous_pct": 0.006246385193753615,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.006246385193753615,
            "retail_notional_pct": 0.09828545047850218,
            "mixed_notional_pct": 0.30674248735289866,
            "instit_notional_pct": 0.482034719434445,
            "unclear_notional_pct": 0.11293734273415418
          },
          "counts": {
            "trades": {
              "retail": 29042,
              "mixed": 11575,
              "institutional": 5174,
              "ambiguous": 1943,
              "unobservable": 0,
              "unclear": 1943
            },
            "runs": {
              "retail": 28734,
              "mixed": 5177,
              "institutional": 453,
              "ambiguous": 216,
              "unobservable": 0,
              "unclear": 216
            }
          },
          "confidence": {
            "high": 0.4943609022556391,
            "medium": 0.32186234817813764,
            "low": 0.027819548872180452,
            "na": 0.15595720069404279
          },
          "confidence_counts": {
            "high": 17095,
            "medium": 11130,
            "low": 962,
            "na": 5393
          },
          "trade_confidence": {
            "high": 0.39095822684040726,
            "medium": 0.2978380190220807,
            "low": 0.028009385343780113,
            "na": 0.28319436879373194
          },
          "trade_confidence_counts": {
            "high": 18662,
            "medium": 14217,
            "low": 1337,
            "na": 13518
          },
          "observability": {
            "avg_feature_coverage": 0.8645271833429727,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.006246385193753615,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.8309427414690572,
          "dominance_gap": 0.681231925968768,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 37389,
              "MULTI_FILL_SINGLE_PRICE": 10145,
              "WALK_BOOK": 200
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 46445,
              "MOMENTUM_REACTIVE": 855,
              "PERSISTENT_POSITIVE_IMPACT": 403,
              "UNOBSERVABLE": 27,
              "SHORT_HORIZON_POSITIVE_IMPACT": 4
            },
            "d3_urgency": {
              "IMMEDIATE": 34293,
              "ADAPTIVE": 281,
              "SCHEDULED": 6
            },
            "participant_confidence": {
              "HIGH": 17095,
              "MEDIUM": 11130,
              "NA": 5393,
              "LOW": 962
            }
          },
          "trade_size": {
            "avg": 1874.3020069552101,
            "median": 136.0
          },
          "run_size": {
            "avg": 2587.273915558126,
            "median": 137.0,
            "avg_length": 1.143637941006362
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-316",
              "timestamp": "2026-04-10T09:06:16.032100",
              "price": 0.645,
              "size": 254200.0,
              "notional": 163959.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57028,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-315",
              "timestamp": "2026-04-10T09:06:16.032000",
              "price": 0.645,
              "size": 45800.0,
              "notional": 29541.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57028,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-297",
              "timestamp": "2026-04-10T08:59:52.243500",
              "price": 0.645,
              "size": 100.0,
              "notional": 64.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57027,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-296",
              "timestamp": "2026-04-10T08:59:51.910100",
              "price": 0.65,
              "size": 100.0,
              "notional": 65.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57026,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-295",
              "timestamp": "2026-04-10T08:59:45.981100",
              "price": 0.645,
              "size": 100.0,
              "notional": 64.5,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57025,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-294",
              "timestamp": "2026-04-10T08:59:43.709000",
              "price": 0.645,
              "size": 100.0,
              "notional": 64.5,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57025,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-293",
              "timestamp": "2026-04-10T08:59:40.347000",
              "price": 0.645,
              "size": 200.0,
              "notional": 129.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57025,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-292",
              "timestamp": "2026-04-10T08:59:37.174100",
              "price": 0.645,
              "size": 200.0,
              "notional": 129.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57025,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-291",
              "timestamp": "2026-04-10T08:59:28.021900",
              "price": 0.645,
              "size": 100.0,
              "notional": 64.5,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57024,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-290",
              "timestamp": "2026-04-10T08:59:24.956800",
              "price": 0.645,
              "size": 200.0,
              "notional": 129.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57024,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-289",
              "timestamp": "2026-04-10T08:59:23.859900",
              "price": 0.65,
              "size": 100.0,
              "notional": 65.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57023,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-288",
              "timestamp": "2026-04-10T08:59:21.917200",
              "price": 0.65,
              "size": 100.0,
              "notional": 65.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57023,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-287",
              "timestamp": "2026-04-10T08:59:21.069300",
              "price": 0.65,
              "size": 100.0,
              "notional": 65.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57023,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-286",
              "timestamp": "2026-04-10T08:59:21.069200",
              "price": 0.65,
              "size": 300.0,
              "notional": 195.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57023,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-285",
              "timestamp": "2026-04-10T08:59:18.701200",
              "price": 0.645,
              "size": 300.0,
              "notional": 193.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57022,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-284",
              "timestamp": "2026-04-10T08:59:06.901300",
              "price": 0.645,
              "size": 200.0,
              "notional": 129.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 57021,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-283",
              "timestamp": "2026-04-10T08:59:02.812000",
              "price": 0.645,
              "size": 200.0,
              "notional": 129.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 57021,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-282",
              "timestamp": "2026-04-10T08:59:00.931400",
              "price": 0.645,
              "size": 100.0,
              "notional": 64.5,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 57021,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-281",
              "timestamp": "2026-04-10T08:59:00.931400",
              "price": 0.645,
              "size": 1300.0,
              "notional": 838.5,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 57021,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-280",
              "timestamp": "2026-04-10T08:58:59.285700",
              "price": 0.645,
              "size": 100.0,
              "notional": 64.5,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 57021,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-279",
              "timestamp": "2026-04-10T08:58:55.181100",
              "price": 0.645,
              "size": 100.0,
              "notional": 64.5,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 57021,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-278",
              "timestamp": "2026-04-10T08:58:51.525000",
              "price": 0.645,
              "size": 300.0,
              "notional": 193.5,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 57021,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-277",
              "timestamp": "2026-04-10T08:58:45.574200",
              "price": 0.645,
              "size": 200.0,
              "notional": 129.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57020,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-276",
              "timestamp": "2026-04-10T08:58:29.629900",
              "price": 0.645,
              "size": 1500.0,
              "notional": 967.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57019,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-275",
              "timestamp": "2026-04-10T08:58:14.433800",
              "price": 0.645,
              "size": 200.0,
              "notional": 129.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57018,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-274",
              "timestamp": "2026-04-10T08:57:52.915100",
              "price": 0.645,
              "size": 300.0,
              "notional": 193.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57017,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-273",
              "timestamp": "2026-04-10T08:57:33.479900",
              "price": 0.645,
              "size": 1500.0,
              "notional": 967.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57016,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-272",
              "timestamp": "2026-04-10T08:57:15.456300",
              "price": 0.645,
              "size": 200.0,
              "notional": 129.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57015,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-271",
              "timestamp": "2026-04-10T08:56:58.588200",
              "price": 0.645,
              "size": 100.0,
              "notional": 64.5,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57014,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-270",
              "timestamp": "2026-04-10T08:56:56.569300",
              "price": 0.645,
              "size": 300.0,
              "notional": 193.5,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57014,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "CRPU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.6084132903171744,
              "mixed_pct": 0.2424896300331001,
              "instit_pct": 0.10839234088909373,
              "ambiguous_pct": 0.04070473876063183,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.04070473876063183,
              "retail_qty_pct": 0.09816496395613047,
              "mixed_qty_pct": 0.30657688441301545,
              "instit_qty_pct": 0.48200370581807406,
              "ambiguous_qty_pct": 0.11325444581278002,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.11325444581278002,
              "retail_notional_pct": 0.09828545047850218,
              "mixed_notional_pct": 0.30674248735289866,
              "instit_notional_pct": 0.482034719434445,
              "ambiguous_notional_pct": 0.11293734273415418,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.11293734273415418,
              "run_retail_pct": 0.8309427414690572,
              "run_mixed_pct": 0.1497108155002892,
              "run_instit_pct": 0.013100057836899942,
              "run_unclear_pct": 0.006246385193753615,
              "avg_trade_size": 1874.3020069552101,
              "avg_run_notional": 2587.273915558126,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.4943609022556391,
              "medium_confidence_pct": 0.32186234817813764,
              "low_confidence_pct": 0.027819548872180452,
              "na_confidence_pct": 0.15595720069404279,
              "avg_feature_coverage": 0.8645271833429727,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AJBU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.36393433445049256,
              "mixed_pct": 0.33145528436664196,
              "instit_pct": 0.23301294530500483,
              "ambiguous_pct": 0.07125389033517321,
              "unobservable_pct": 0.00034354554268744224,
              "unclear_pct": 0.07159743587786065,
              "retail_qty_pct": 0.09872939520990445,
              "mixed_qty_pct": 0.2265212898870561,
              "instit_qty_pct": 0.6139618402666018,
              "ambiguous_qty_pct": 0.046011562629183995,
              "unobservable_qty_pct": 0.01477591200725356,
              "unclear_qty_pct": 0.060787474636437556,
              "retail_notional_pct": 0.09862657875743305,
              "mixed_notional_pct": 0.22651395448808928,
              "instit_notional_pct": 0.614115801003348,
              "ambiguous_notional_pct": 0.04596174961926635,
              "unobservable_notional_pct": 0.014781916131863393,
              "unclear_notional_pct": 0.060743665751129744,
              "run_retail_pct": 0.7214566045310247,
              "run_mixed_pct": 0.24619025232810576,
              "run_instit_pct": 0.015275965708309344,
              "run_unclear_pct": 0.017077177432560205,
              "avg_trade_size": 5602.10609131695,
              "avg_run_notional": 11628.164463571682,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.3107908956934665,
              "medium_confidence_pct": 0.3730515484610468,
              "low_confidence_pct": 0.052890126084820695,
              "na_confidence_pct": 0.26326742976066597,
              "avg_feature_coverage": 0.8865173227972131,
              "observable_run_pct": 0.9995879926261244,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "JYEU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.44250875159519043,
              "mixed_pct": 0.30947279688103685,
              "instit_pct": 0.16786281557452223,
              "ambiguous_pct": 0.07989025870378826,
              "unobservable_pct": 0.00026537724546224424,
              "unclear_pct": 0.0801556359492505,
              "retail_qty_pct": 0.08159570695407352,
              "mixed_qty_pct": 0.2159629101360208,
              "instit_qty_pct": 0.5717913778789396,
              "ambiguous_qty_pct": 0.06529841851379717,
              "unobservable_qty_pct": 0.06535158651716882,
              "unclear_qty_pct": 0.130650005030966,
              "retail_notional_pct": 0.08142688327814016,
              "mixed_notional_pct": 0.21421158782454877,
              "instit_notional_pct": 0.5774829676991539,
              "ambiguous_notional_pct": 0.0662050340639179,
              "unobservable_notional_pct": 0.060673527134239354,
              "unclear_notional_pct": 0.12687856119815724,
              "run_retail_pct": 0.7645844925096666,
              "run_mixed_pct": 0.2134410457589993,
              "run_instit_pct": 0.009381404816069529,
              "run_unclear_pct": 0.012593056915264503,
              "avg_trade_size": 4145.751778573909,
              "avg_run_notional": 7481.904805434454,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.3787847840938704,
              "medium_confidence_pct": 0.3540846439362459,
              "low_confidence_pct": 0.0410964692956199,
              "na_confidence_pct": 0.22603410267426383,
              "avg_feature_coverage": 0.8834895726953226,
              "observable_run_pct": 0.9995703711007656,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AU8U",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.4875909684642657,
              "mixed_pct": 0.26826107690074846,
              "instit_pct": 0.20149903588978044,
              "ambiguous_pct": 0.042648918745205364,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.042648918745205364,
              "retail_qty_pct": 0.11801784455159493,
              "mixed_qty_pct": 0.2648253897296208,
              "instit_qty_pct": 0.5399379448738992,
              "ambiguous_qty_pct": 0.07721882084488507,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.07721882084488507,
              "retail_notional_pct": 0.11938176010836785,
              "mixed_notional_pct": 0.2644921797628202,
              "instit_notional_pct": 0.5385745177193845,
              "ambiguous_notional_pct": 0.07755154240942748,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.07755154240942748,
              "run_retail_pct": 0.7947408775659569,
              "run_mixed_pct": 0.177255776670268,
              "run_instit_pct": 0.01991774997386122,
              "run_unclear_pct": 0.008085595789913917,
              "avg_trade_size": 1713.8496039891356,
              "avg_run_notional": 2880.865725089743,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.46049559125919215,
              "medium_confidence_pct": 0.3301676367058167,
              "low_confidence_pct": 0.023995399574809187,
              "na_confidence_pct": 0.18534137246018192,
              "avg_feature_coverage": 0.8703080890809602,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "D5IU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.5315985130111525,
              "mixed_pct": 0.20979473088734443,
              "instit_pct": 0.17973169549054469,
              "ambiguous_pct": 0.07887506061095846,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.07887506061095846,
              "retail_qty_pct": 0.11440583995129502,
              "mixed_qty_pct": 0.417710611899414,
              "instit_qty_pct": 0.3969490018163917,
              "ambiguous_qty_pct": 0.07093454633289926,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.07093454633289926,
              "retail_notional_pct": 0.10971048761623407,
              "mixed_notional_pct": 0.3910364991208603,
              "instit_notional_pct": 0.41039565012095264,
              "ambiguous_notional_pct": 0.08885736314195296,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.08885736314195296,
              "run_retail_pct": 0.7732714390422673,
              "run_mixed_pct": 0.16149523576838504,
              "run_instit_pct": 0.0305399462496946,
              "run_unclear_pct": 0.03469337893965307,
              "avg_trade_size": 1825.642055923711,
              "avg_run_notional": 2759.6499877840215,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.3596384070364036,
              "medium_confidence_pct": 0.21573418030784267,
              "low_confidence_pct": 0.2284387979477156,
              "na_confidence_pct": 0.1961886147080381,
              "avg_feature_coverage": 0.8546176398729536,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ODBU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.42070116861435725,
              "mixed_pct": 0.18602432625804913,
              "instit_pct": 0.15025041736227046,
              "ambiguous_pct": 0.24302408776532317,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.24302408776532317,
              "retail_qty_pct": 0.09414976139510221,
              "mixed_qty_pct": 0.16626539148877673,
              "instit_qty_pct": 0.3780169281828715,
              "ambiguous_qty_pct": 0.3615679189332495,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.3615679189332495,
              "retail_notional_pct": 0.09445388726636222,
              "mixed_notional_pct": 0.16651660318177072,
              "instit_notional_pct": 0.37667713772944994,
              "ambiguous_notional_pct": 0.3623523718224171,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.3623523718224171,
              "run_retail_pct": 0.6484896037661828,
              "run_mixed_pct": 0.15888583758336602,
              "run_instit_pct": 0.05453118870145155,
              "run_unclear_pct": 0.1380933699489996,
              "avg_trade_size": 3143.593608394944,
              "avg_run_notional": 5171.081992938407,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.22244017261671242,
              "medium_confidence_pct": 0.18595527657905062,
              "low_confidence_pct": 0.29462534327187134,
              "na_confidence_pct": 0.2969792075323656,
              "avg_feature_coverage": 0.8471165162808943,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "BMGU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.14327485380116958,
              "mixed_pct": 0.1953216374269006,
              "instit_pct": 0.2152046783625731,
              "ambiguous_pct": 0.4391812865497076,
              "unobservable_pct": 0.007017543859649123,
              "unclear_pct": 0.44619883040935676,
              "retail_qty_pct": 0.008625997175150543,
              "mixed_qty_pct": 0.016110641034505085,
              "instit_qty_pct": 0.08140922015937244,
              "ambiguous_qty_pct": 0.056299447211860414,
              "unobservable_qty_pct": 0.8375546944191116,
              "unclear_qty_pct": 0.893854141630972,
              "retail_notional_pct": 0.008666627454709438,
              "mixed_notional_pct": 0.01600283728904827,
              "instit_notional_pct": 0.07842675348340958,
              "ambiguous_notional_pct": 0.05595244023792106,
              "unobservable_notional_pct": 0.8409513415349117,
              "unclear_notional_pct": 0.8969037817728327,
              "run_retail_pct": 0.4817987152034261,
              "run_mixed_pct": 0.18201284796573874,
              "run_instit_pct": 0.08993576017130621,
              "run_unclear_pct": 0.2462526766595289,
              "avg_trade_size": 1167.2454970760234,
              "avg_run_notional": 4274.068094218415,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.19700214132762311,
              "medium_confidence_pct": 0.16274089935760172,
              "low_confidence_pct": 0.21199143468950749,
              "na_confidence_pct": 0.4282655246252677,
              "avg_feature_coverage": 0.8798715203426123,
              "observable_run_pct": 0.9892933618843683,
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
      "n_trades": 47734,
      "n_runs": 34580,
      "n_trade_days": 126,
      "first_trade_date": "2025-10-09",
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
        "retail_pct": 0.6084132903171744,
        "mixed_pct": 0.2424896300331001,
        "instit_pct": 0.10839234088909373,
        "ambiguous_pct": 0.04070473876063183,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.04070473876063183,
        "retail_qty_pct": 0.09816496395613047,
        "mixed_qty_pct": 0.30657688441301545,
        "instit_qty_pct": 0.48200370581807406,
        "ambiguous_qty_pct": 0.11325444581278002,
        "unobservable_qty_pct": 0.0,
        "unclear_qty_pct": 0.11325444581278002,
        "retail_notional_pct": 0.09828545047850218,
        "mixed_notional_pct": 0.30674248735289866,
        "instit_notional_pct": 0.482034719434445,
        "ambiguous_notional_pct": 0.11293734273415418,
        "unobservable_notional_pct": 0.0,
        "unclear_notional_pct": 0.11293734273415418
      },
      "run_composition": {
        "retail_pct": 0.8309427414690572,
        "mixed_pct": 0.1497108155002892,
        "instit_pct": 0.013100057836899942,
        "ambiguous_pct": 0.006246385193753615,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.006246385193753615
      },
      "trade_size": {
        "avg": 1874.3020069552101,
        "median": 136.0
      },
      "run_size": {
        "avg": 2587.273915558126,
        "median": 137.0,
        "avg_length": 1.143637941006362
      },
      "confidence": {
        "high": 0.4943609022556391,
        "medium": 0.32186234817813764,
        "low": 0.027819548872180452,
        "na": 0.15595720069404279
      },
      "confidence_counts": {
        "high": 17095,
        "medium": 11130,
        "low": 962,
        "na": 5393
      },
      "trade_confidence": {
        "high": 0.39095822684040726,
        "medium": 0.2978380190220807,
        "low": 0.028009385343780113,
        "na": 0.28319436879373194
      },
      "trade_confidence_counts": {
        "high": 18662,
        "medium": 14217,
        "low": 1337,
        "na": 13518
      },
      "counts": {
        "trades": {
          "retail": 29042,
          "mixed": 11575,
          "institutional": 5174,
          "ambiguous": 1943,
          "unobservable": 0,
          "unclear": 1943
        },
        "runs": {
          "retail": 28734,
          "mixed": 5177,
          "institutional": 453,
          "ambiguous": 216,
          "unobservable": 0,
          "unclear": 216
        }
      },
      "observability": {
        "avg_feature_coverage": 0.8645271833429727,
        "observable_run_pct": 1.0,
        "ambiguous_run_pct": 0.006246385193753615,
        "unobservable_run_pct": 0.0
      },
      "dominant_bucket": "RETAIL",
      "dominant_label": "Retail-led",
      "dominant_share": 0.8309427414690572,
      "dominance_gap": 0.681231925968768,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2025-11",
            "n_trades": 9842,
            "n_runs": 7179,
            "retail_pct": 0.6181670392196708,
            "mixed_pct": 0.23470839260312945,
            "instit_pct": 0.09185124974598659,
            "ambiguous_pct": 0.05527331843121317,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.05527331843121317,
            "avg_trade_size": 1573.244411704938,
            "avg_run_notional": 2156.8284580025074,
            "retail_qty_pct": 0.13906937147948673,
            "mixed_qty_pct": 0.2441389105762063,
            "instit_qty_pct": 0.5242361285712396,
            "ambiguous_qty_pct": 0.09255558937306745,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.09255558937306745,
            "retail_notional_pct": 0.13879874939545966,
            "mixed_notional_pct": 0.2440253395282956,
            "instit_notional_pct": 0.5245362569690661,
            "ambiguous_notional_pct": 0.09263965410717856,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.09263965410717856,
            "run_retail_pct": 0.8322886195849004,
            "run_mixed_pct": 0.15043877977434184,
            "run_instit_pct": 0.011561498815991085,
            "run_ambiguous_pct": 0.005711101824766681,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.005711101824766681,
            "avg_feature_coverage": 0.865900543251149,
            "high_confidence_pct": 0.45048056832427913,
            "medium_confidence_pct": 0.3535311324697033,
            "low_confidence_pct": 0.03983841760690904,
            "na_confidence_pct": 0.1561498815991085,
            "total_quantity": null
          },
          {
            "month": "2025-12",
            "n_trades": 7506,
            "n_runs": 5481,
            "retail_pct": 0.6020516919797495,
            "mixed_pct": 0.2740474287236877,
            "instit_pct": 0.09592326139088729,
            "ambiguous_pct": 0.027977617905675458,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.027977617905675458,
            "avg_trade_size": 982.2464028776978,
            "avg_run_notional": 1345.1453201970444,
            "retail_qty_pct": 0.12156722835135482,
            "mixed_qty_pct": 0.3816528532484403,
            "instit_qty_pct": 0.4224436028322081,
            "ambiguous_qty_pct": 0.07433631556799677,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.07433631556799677,
            "retail_notional_pct": 0.12161432758764158,
            "mixed_notional_pct": 0.3815530491608854,
            "instit_notional_pct": 0.42238596050058175,
            "ambiguous_notional_pct": 0.07444666275089123,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.07444666275089123,
            "run_retail_pct": 0.8137201240649516,
            "run_mixed_pct": 0.16894727239554827,
            "run_instit_pct": 0.011859149790184273,
            "run_ambiguous_pct": 0.005473453749315818,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.005473453749315818,
            "avg_feature_coverage": 0.8674329501915709,
            "high_confidence_pct": 0.4796569968983762,
            "medium_confidence_pct": 0.3061485130450648,
            "low_confidence_pct": 0.039773763911694945,
            "na_confidence_pct": 0.17442072614486406,
            "total_quantity": null
          },
          {
            "month": "2026-01",
            "n_trades": 5045,
            "n_runs": 3679,
            "retail_pct": 0.6166501486620416,
            "mixed_pct": 0.25867195242814667,
            "instit_pct": 0.08126858275520317,
            "ambiguous_pct": 0.043409316154608524,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.043409316154608524,
            "avg_trade_size": 2718.34271555996,
            "avg_run_notional": 3727.6539820603425,
            "retail_qty_pct": 0.06846663473818647,
            "mixed_qty_pct": 0.3614054517879949,
            "instit_qty_pct": 0.4431423611111111,
            "ambiguous_qty_pct": 0.12698555236270753,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.12698555236270753,
            "retail_notional_pct": 0.06868578250360817,
            "mixed_notional_pct": 0.362438884707853,
            "instit_notional_pct": 0.4414249879266057,
            "ambiguous_notional_pct": 0.1274503448619331,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.1274503448619331,
            "run_retail_pct": 0.8426202772492525,
            "run_mixed_pct": 0.13998369122044033,
            "run_instit_pct": 0.010872519706441968,
            "run_ambiguous_pct": 0.006523511823865181,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.006523511823865181,
            "avg_feature_coverage": 0.8626393041587386,
            "high_confidence_pct": 0.6588746942103832,
            "medium_confidence_pct": 0.19189997281870072,
            "low_confidence_pct": 0.002718129926610492,
            "na_confidence_pct": 0.1465072030443055,
            "total_quantity": null
          },
          {
            "month": "2026-02",
            "n_trades": 4649,
            "n_runs": 3458,
            "retail_pct": 0.6263712626371263,
            "mixed_pct": 0.22628522262852227,
            "instit_pct": 0.12088621208862121,
            "ambiguous_pct": 0.026457302645730263,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.026457302645730263,
            "avg_trade_size": 2790.37459668746,
            "avg_run_notional": 3751.431897050318,
            "retail_qty_pct": 0.08098770128058831,
            "mixed_qty_pct": 0.2951639829254892,
            "instit_qty_pct": 0.5494220447149317,
            "ambiguous_qty_pct": 0.07442627107899075,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.07442627107899075,
            "retail_notional_pct": 0.08103094469075486,
            "mixed_notional_pct": 0.2955381640856395,
            "instit_notional_pct": 0.5487301686963332,
            "ambiguous_notional_pct": 0.0747007225272725,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0747007225272725,
            "run_retail_pct": 0.8403701561596298,
            "run_mixed_pct": 0.137941006362059,
            "run_instit_pct": 0.0167727009832273,
            "run_ambiguous_pct": 0.004916136495083863,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.004916136495083863,
            "avg_feature_coverage": 0.8607142857142854,
            "high_confidence_pct": 0.5326778484673221,
            "medium_confidence_pct": 0.30624638519375363,
            "low_confidence_pct": 0.018218623481781375,
            "na_confidence_pct": 0.14285714285714285,
            "total_quantity": null
          },
          {
            "month": "2026-03",
            "n_trades": 9747,
            "n_runs": 6347,
            "retail_pct": 0.5349338257925516,
            "mixed_pct": 0.24612701344003282,
            "instit_pct": 0.1694880476043911,
            "ambiguous_pct": 0.04945111316302452,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.04945111316302452,
            "avg_trade_size": 2229.761003385657,
            "avg_run_notional": 3424.2130927997478,
            "retail_qty_pct": 0.07765442987925424,
            "mixed_qty_pct": 0.30682198363697194,
            "instit_qty_pct": 0.4704583472733356,
            "ambiguous_qty_pct": 0.14506523921043826,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.14506523921043826,
            "retail_notional_pct": 0.07757777223026933,
            "mixed_notional_pct": 0.307640209767598,
            "instit_notional_pct": 0.4683636843164628,
            "ambiguous_notional_pct": 0.1464183336856699,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.1464183336856699,
            "run_retail_pct": 0.8134551756735465,
            "run_mixed_pct": 0.15944540727902945,
            "run_instit_pct": 0.01780368678115645,
            "run_ambiguous_pct": 0.009295730266267527,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.009295730266267527,
            "avg_feature_coverage": 0.8650543563888449,
            "high_confidence_pct": 0.45753899480069327,
            "medium_confidence_pct": 0.34110603434693554,
            "low_confidence_pct": 0.03261383330707421,
            "na_confidence_pct": 0.168741137545297,
            "total_quantity": null
          },
          {
            "month": "2026-04",
            "n_trades": 2291,
            "n_runs": 1821,
            "retail_pct": 0.6669576604103011,
            "mixed_pct": 0.22741161065037102,
            "instit_pct": 0.05237887385421213,
            "ambiguous_pct": 0.05325185508511567,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.05325185508511567,
            "avg_trade_size": 2089.3221300742034,
            "avg_run_notional": 2628.576057111477,
            "retail_qty_pct": 0.06526073517014358,
            "mixed_qty_pct": 0.306311972273889,
            "instit_qty_pct": 0.36797313029398776,
            "ambiguous_qty_pct": 0.26045416226197965,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.26045416226197965,
            "retail_notional_pct": 0.06522314100693243,
            "mixed_notional_pct": 0.30617707171026337,
            "instit_notional_pct": 0.3695866220897887,
            "ambiguous_notional_pct": 0.2590131651930155,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2590131651930155,
            "run_retail_pct": 0.8380010982976387,
            "run_mixed_pct": 0.14497528830313014,
            "run_instit_pct": 0.009884678747940691,
            "run_ambiguous_pct": 0.007138934651290499,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.007138934651290499,
            "avg_feature_coverage": 0.8635914332784183,
            "high_confidence_pct": 0.6370126304228446,
            "medium_confidence_pct": 0.21032399780340472,
            "low_confidence_pct": 0.0005491488193300384,
            "na_confidence_pct": 0.15211422295442065,
            "total_quantity": null
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "CRPU",
          "currency": "SGD",
          "is_target": true,
          "retail_pct": 0.6084132903171744,
          "mixed_pct": 0.2424896300331001,
          "instit_pct": 0.10839234088909373,
          "ambiguous_pct": 0.04070473876063183,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.04070473876063183,
          "retail_qty_pct": 0.09816496395613047,
          "mixed_qty_pct": 0.30657688441301545,
          "instit_qty_pct": 0.48200370581807406,
          "ambiguous_qty_pct": 0.11325444581278002,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.11325444581278002,
          "retail_notional_pct": 0.09828545047850218,
          "mixed_notional_pct": 0.30674248735289866,
          "instit_notional_pct": 0.482034719434445,
          "ambiguous_notional_pct": 0.11293734273415418,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.11293734273415418,
          "run_retail_pct": 0.8309427414690572,
          "run_mixed_pct": 0.1497108155002892,
          "run_instit_pct": 0.013100057836899942,
          "run_unclear_pct": 0.006246385193753615,
          "avg_trade_size": 1874.3020069552101,
          "avg_run_notional": 2587.273915558126,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.4943609022556391,
          "medium_confidence_pct": 0.32186234817813764,
          "low_confidence_pct": 0.027819548872180452,
          "na_confidence_pct": 0.15595720069404279,
          "avg_feature_coverage": 0.8645271833429727,
          "observable_run_pct": 1.0,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "AJBU",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.36393433445049256,
          "mixed_pct": 0.33145528436664196,
          "instit_pct": 0.23301294530500483,
          "ambiguous_pct": 0.07125389033517321,
          "unobservable_pct": 0.00034354554268744224,
          "unclear_pct": 0.07159743587786065,
          "retail_qty_pct": 0.09872939520990445,
          "mixed_qty_pct": 0.2265212898870561,
          "instit_qty_pct": 0.6139618402666018,
          "ambiguous_qty_pct": 0.046011562629183995,
          "unobservable_qty_pct": 0.01477591200725356,
          "unclear_qty_pct": 0.060787474636437556,
          "retail_notional_pct": 0.09862657875743305,
          "mixed_notional_pct": 0.22651395448808928,
          "instit_notional_pct": 0.614115801003348,
          "ambiguous_notional_pct": 0.04596174961926635,
          "unobservable_notional_pct": 0.014781916131863393,
          "unclear_notional_pct": 0.060743665751129744,
          "run_retail_pct": 0.7214566045310247,
          "run_mixed_pct": 0.24619025232810576,
          "run_instit_pct": 0.015275965708309344,
          "run_unclear_pct": 0.017077177432560205,
          "avg_trade_size": 5602.10609131695,
          "avg_run_notional": 11628.164463571682,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.3107908956934665,
          "medium_confidence_pct": 0.3730515484610468,
          "low_confidence_pct": 0.052890126084820695,
          "na_confidence_pct": 0.26326742976066597,
          "avg_feature_coverage": 0.8865173227972131,
          "observable_run_pct": 0.9995879926261244,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "JYEU",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.44250875159519043,
          "mixed_pct": 0.30947279688103685,
          "instit_pct": 0.16786281557452223,
          "ambiguous_pct": 0.07989025870378826,
          "unobservable_pct": 0.00026537724546224424,
          "unclear_pct": 0.0801556359492505,
          "retail_qty_pct": 0.08159570695407352,
          "mixed_qty_pct": 0.2159629101360208,
          "instit_qty_pct": 0.5717913778789396,
          "ambiguous_qty_pct": 0.06529841851379717,
          "unobservable_qty_pct": 0.06535158651716882,
          "unclear_qty_pct": 0.130650005030966,
          "retail_notional_pct": 0.08142688327814016,
          "mixed_notional_pct": 0.21421158782454877,
          "instit_notional_pct": 0.5774829676991539,
          "ambiguous_notional_pct": 0.0662050340639179,
          "unobservable_notional_pct": 0.060673527134239354,
          "unclear_notional_pct": 0.12687856119815724,
          "run_retail_pct": 0.7645844925096666,
          "run_mixed_pct": 0.2134410457589993,
          "run_instit_pct": 0.009381404816069529,
          "run_unclear_pct": 0.012593056915264503,
          "avg_trade_size": 4145.751778573909,
          "avg_run_notional": 7481.904805434454,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.3787847840938704,
          "medium_confidence_pct": 0.3540846439362459,
          "low_confidence_pct": 0.0410964692956199,
          "na_confidence_pct": 0.22603410267426383,
          "avg_feature_coverage": 0.8834895726953226,
          "observable_run_pct": 0.9995703711007656,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "AU8U",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.4875909684642657,
          "mixed_pct": 0.26826107690074846,
          "instit_pct": 0.20149903588978044,
          "ambiguous_pct": 0.042648918745205364,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.042648918745205364,
          "retail_qty_pct": 0.11801784455159493,
          "mixed_qty_pct": 0.2648253897296208,
          "instit_qty_pct": 0.5399379448738992,
          "ambiguous_qty_pct": 0.07721882084488507,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.07721882084488507,
          "retail_notional_pct": 0.11938176010836785,
          "mixed_notional_pct": 0.2644921797628202,
          "instit_notional_pct": 0.5385745177193845,
          "ambiguous_notional_pct": 0.07755154240942748,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.07755154240942748,
          "run_retail_pct": 0.7947408775659569,
          "run_mixed_pct": 0.177255776670268,
          "run_instit_pct": 0.01991774997386122,
          "run_unclear_pct": 0.008085595789913917,
          "avg_trade_size": 1713.8496039891356,
          "avg_run_notional": 2880.865725089743,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.46049559125919215,
          "medium_confidence_pct": 0.3301676367058167,
          "low_confidence_pct": 0.023995399574809187,
          "na_confidence_pct": 0.18534137246018192,
          "avg_feature_coverage": 0.8703080890809602,
          "observable_run_pct": 1.0,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "D5IU",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.5315985130111525,
          "mixed_pct": 0.20979473088734443,
          "instit_pct": 0.17973169549054469,
          "ambiguous_pct": 0.07887506061095846,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.07887506061095846,
          "retail_qty_pct": 0.11440583995129502,
          "mixed_qty_pct": 0.417710611899414,
          "instit_qty_pct": 0.3969490018163917,
          "ambiguous_qty_pct": 0.07093454633289926,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.07093454633289926,
          "retail_notional_pct": 0.10971048761623407,
          "mixed_notional_pct": 0.3910364991208603,
          "instit_notional_pct": 0.41039565012095264,
          "ambiguous_notional_pct": 0.08885736314195296,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.08885736314195296,
          "run_retail_pct": 0.7732714390422673,
          "run_mixed_pct": 0.16149523576838504,
          "run_instit_pct": 0.0305399462496946,
          "run_unclear_pct": 0.03469337893965307,
          "avg_trade_size": 1825.642055923711,
          "avg_run_notional": 2759.6499877840215,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.3596384070364036,
          "medium_confidence_pct": 0.21573418030784267,
          "low_confidence_pct": 0.2284387979477156,
          "na_confidence_pct": 0.1961886147080381,
          "avg_feature_coverage": 0.8546176398729536,
          "observable_run_pct": 1.0,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "ODBU",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.42070116861435725,
          "mixed_pct": 0.18602432625804913,
          "instit_pct": 0.15025041736227046,
          "ambiguous_pct": 0.24302408776532317,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.24302408776532317,
          "retail_qty_pct": 0.09414976139510221,
          "mixed_qty_pct": 0.16626539148877673,
          "instit_qty_pct": 0.3780169281828715,
          "ambiguous_qty_pct": 0.3615679189332495,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.3615679189332495,
          "retail_notional_pct": 0.09445388726636222,
          "mixed_notional_pct": 0.16651660318177072,
          "instit_notional_pct": 0.37667713772944994,
          "ambiguous_notional_pct": 0.3623523718224171,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.3623523718224171,
          "run_retail_pct": 0.6484896037661828,
          "run_mixed_pct": 0.15888583758336602,
          "run_instit_pct": 0.05453118870145155,
          "run_unclear_pct": 0.1380933699489996,
          "avg_trade_size": 3143.593608394944,
          "avg_run_notional": 5171.081992938407,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.22244017261671242,
          "medium_confidence_pct": 0.18595527657905062,
          "low_confidence_pct": 0.29462534327187134,
          "na_confidence_pct": 0.2969792075323656,
          "avg_feature_coverage": 0.8471165162808943,
          "observable_run_pct": 1.0,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "BMGU",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.14327485380116958,
          "mixed_pct": 0.1953216374269006,
          "instit_pct": 0.2152046783625731,
          "ambiguous_pct": 0.4391812865497076,
          "unobservable_pct": 0.007017543859649123,
          "unclear_pct": 0.44619883040935676,
          "retail_qty_pct": 0.008625997175150543,
          "mixed_qty_pct": 0.016110641034505085,
          "instit_qty_pct": 0.08140922015937244,
          "ambiguous_qty_pct": 0.056299447211860414,
          "unobservable_qty_pct": 0.8375546944191116,
          "unclear_qty_pct": 0.893854141630972,
          "retail_notional_pct": 0.008666627454709438,
          "mixed_notional_pct": 0.01600283728904827,
          "instit_notional_pct": 0.07842675348340958,
          "ambiguous_notional_pct": 0.05595244023792106,
          "unobservable_notional_pct": 0.8409513415349117,
          "unclear_notional_pct": 0.8969037817728327,
          "run_retail_pct": 0.4817987152034261,
          "run_mixed_pct": 0.18201284796573874,
          "run_instit_pct": 0.08993576017130621,
          "run_unclear_pct": 0.2462526766595289,
          "avg_trade_size": 1167.2454970760234,
          "avg_run_notional": 4274.068094218415,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.19700214132762311,
          "medium_confidence_pct": 0.16274089935760172,
          "low_confidence_pct": 0.21199143468950749,
          "na_confidence_pct": 0.4282655246252677,
          "avg_feature_coverage": 0.8798715203426123,
          "observable_run_pct": 0.9892933618843683,
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
            "retail_pct": 0.6126760563380281,
            "mixed_pct": 0.3274647887323944,
            "instit_pct": 0.035211267605633804,
            "ambiguous_pct": 0.02464788732394366,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.02464788732394366,
            "retail_qty_pct": 0.04340248962655602,
            "mixed_qty_pct": 0.16066390041493775,
            "instit_qty_pct": 0.7940248962655602,
            "ambiguous_qty_pct": 0.001908713692946058,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.001908713692946058,
            "retail_notional_pct": 0.04329860726410364,
            "mixed_notional_pct": 0.1601342078146144,
            "instit_notional_pct": 0.794667038968042,
            "ambiguous_notional_pct": 0.0019001459532398866,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0019001459532398866,
            "run_retail_pct": 0.8207547169811321,
            "run_mixed_pct": 0.1650943396226415,
            "run_instit_pct": 0.009433962264150943,
            "run_unclear_pct": 0.0047169811320754715,
            "avg_trade_size": 2749.0475352112676,
            "avg_run_notional": 3682.686320754717,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.5754716981132075,
            "medium_confidence_pct": 0.25,
            "low_confidence_pct": 0.0047169811320754715,
            "na_confidence_pct": 0.16981132075471697,
            "avg_feature_coverage": 0.8733490566037735,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "JYEU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.5766016713091922,
            "mixed_pct": 0.3328690807799443,
            "instit_pct": 0.06928969359331476,
            "ambiguous_pct": 0.021239554317548745,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.021239554317548745,
            "retail_qty_pct": 0.15553882781317835,
            "mixed_qty_pct": 0.1804495483509558,
            "instit_qty_pct": 0.6611844408654856,
            "ambiguous_qty_pct": 0.0028271829703802255,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0028271829703802255,
            "retail_notional_pct": 0.15589227098726385,
            "mixed_notional_pct": 0.1805937184182993,
            "instit_notional_pct": 0.6606888120114421,
            "ambiguous_notional_pct": 0.0028251985829946544,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0028251985829946544,
            "run_retail_pct": 0.7934131736526946,
            "run_mixed_pct": 0.20209580838323354,
            "run_instit_pct": 0.000998003992015968,
            "run_unclear_pct": 0.003493013972055888,
            "avg_trade_size": 2256.170438718663,
            "avg_run_notional": 3233.3939620758483,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.37624750499001997,
            "medium_confidence_pct": 0.36976047904191617,
            "low_confidence_pct": 0.04840319361277445,
            "na_confidence_pct": 0.2055888223552894,
            "avg_feature_coverage": 0.8819610778443113,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AJBU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.38361266294227186,
            "mixed_pct": 0.3039106145251397,
            "instit_pct": 0.2435754189944134,
            "ambiguous_pct": 0.06890130353817504,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.06890130353817504,
            "retail_qty_pct": 0.11066344345957561,
            "mixed_qty_pct": 0.25317844032590203,
            "instit_qty_pct": 0.5498925597636315,
            "ambiguous_qty_pct": 0.08626555645089086,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.08626555645089086,
            "retail_notional_pct": 0.11081210132118238,
            "mixed_notional_pct": 0.25393480036094257,
            "instit_notional_pct": 0.5493975844911626,
            "ambiguous_notional_pct": 0.08585551382671247,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.08585551382671247,
            "run_retail_pct": 0.7492625368731564,
            "run_mixed_pct": 0.193952802359882,
            "run_instit_pct": 0.019174041297935103,
            "run_unclear_pct": 0.03761061946902655,
            "avg_trade_size": 3821.9813780260706,
            "avg_run_notional": 7567.861356932153,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.4918879056047198,
            "medium_confidence_pct": 0.252212389380531,
            "low_confidence_pct": 0.024336283185840708,
            "na_confidence_pct": 0.23156342182890854,
            "avg_feature_coverage": 0.8688053097345132,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AU8U",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.375,
            "mixed_pct": 0.3275,
            "instit_pct": 0.17625,
            "ambiguous_pct": 0.12125,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.12125,
            "retail_qty_pct": 0.04284692811176503,
            "mixed_qty_pct": 0.23068038061712778,
            "instit_qty_pct": 0.49221714977173975,
            "ambiguous_qty_pct": 0.23425554149936748,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.23425554149936748,
            "retail_notional_pct": 0.04273997143541183,
            "mixed_notional_pct": 0.2303271718581017,
            "instit_notional_pct": 0.4923969487075762,
            "ambiguous_notional_pct": 0.23453590799891025,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.23453590799891025,
            "run_retail_pct": 0.7410256410256411,
            "run_mixed_pct": 0.22564102564102564,
            "run_instit_pct": 0.020512820512820513,
            "run_unclear_pct": 0.01282051282051282,
            "avg_trade_size": 1514.1125,
            "avg_run_notional": 3105.871794871795,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.3717948717948718,
            "medium_confidence_pct": 0.35128205128205126,
            "low_confidence_pct": 0.038461538461538464,
            "na_confidence_pct": 0.23846153846153847,
            "avg_feature_coverage": 0.8788461538461537,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ODBU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.3076923076923077,
            "mixed_pct": 0.23076923076923078,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.46153846153846156,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.46153846153846156,
            "retail_qty_pct": 0.07983193277310924,
            "mixed_qty_pct": 0.7058823529411765,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 0.21428571428571427,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.21428571428571427,
            "retail_notional_pct": 0.08005185545292497,
            "mixed_notional_pct": 0.7071382271917032,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 0.2128099173553719,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2128099173553719,
            "run_retail_pct": 0.5,
            "run_mixed_pct": 0.3333333333333333,
            "run_instit_pct": 0.0,
            "run_unclear_pct": 0.16666666666666666,
            "avg_trade_size": 949.3846153846154,
            "avg_run_notional": 2057.0,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5,
            "na_confidence_pct": 0.5,
            "avg_feature_coverage": 0.9,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "D5IU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.6666666666666666,
            "mixed_pct": 0.3333333333333333,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0,
            "retail_qty_pct": 0.3670886075949367,
            "mixed_qty_pct": 0.6329113924050633,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0,
            "retail_notional_pct": 0.3670886075949367,
            "mixed_notional_pct": 0.6329113924050633,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0,
            "run_retail_pct": 0.6666666666666666,
            "run_mixed_pct": 0.3333333333333333,
            "run_instit_pct": 0.0,
            "run_unclear_pct": 0.0,
            "avg_trade_size": 18.433333333333334,
            "avg_run_notional": 18.433333333333334,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.6666666666666666,
            "na_confidence_pct": 0.3333333333333333,
            "avg_feature_coverage": 0.8500000000000001,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ],
        "30d": [
          {
            "ticker": "CRPU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.5868152274837511,
            "mixed_pct": 0.2404828226555246,
            "instit_pct": 0.12894614670380686,
            "ambiguous_pct": 0.043755803156917364,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.043755803156917364,
            "retail_qty_pct": 0.08529356856156071,
            "mixed_qty_pct": 0.3028407853386851,
            "instit_qty_pct": 0.4621954634556147,
            "ambiguous_qty_pct": 0.14967018264413953,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.14967018264413953,
            "retail_notional_pct": 0.08571418412625254,
            "mixed_notional_pct": 0.3036956258607783,
            "instit_notional_pct": 0.46145790699630196,
            "ambiguous_notional_pct": 0.14913228301666714,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.14913228301666714,
            "run_retail_pct": 0.8243798258583868,
            "run_mixed_pct": 0.15327747658945293,
            "run_instit_pct": 0.015114177755873173,
            "run_unclear_pct": 0.007228519796287169,
            "avg_trade_size": 1925.9088324048282,
            "avg_run_notional": 2726.0769673073764,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.4990964350254641,
            "medium_confidence_pct": 0.3150977493017907,
            "low_confidence_pct": 0.025299819287005094,
            "na_confidence_pct": 0.1605059963857401,
            "avg_feature_coverage": 0.8645391818629865,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AJBU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.3859079164085284,
            "mixed_pct": 0.32257967028815787,
            "instit_pct": 0.252315689266988,
            "ambiguous_pct": 0.03854697109354931,
            "unobservable_pct": 0.0006497529427764094,
            "unclear_pct": 0.03919672403632572,
            "retail_qty_pct": 0.10537056549993118,
            "mixed_qty_pct": 0.23575052654848164,
            "instit_qty_pct": 0.5956663318259474,
            "ambiguous_qty_pct": 0.04949929379705759,
            "unobservable_qty_pct": 0.013713282328582163,
            "unclear_qty_pct": 0.06321257612563976,
            "retail_notional_pct": 0.10521020700970615,
            "mixed_notional_pct": 0.23595162921840787,
            "instit_notional_pct": 0.595915011576091,
            "ambiguous_notional_pct": 0.04930736782366978,
            "unobservable_notional_pct": 0.013615784372125331,
            "unclear_notional_pct": 0.06292315219579511,
            "run_retail_pct": 0.7350360576923077,
            "run_mixed_pct": 0.23134014423076923,
            "run_instit_pct": 0.01748798076923077,
            "run_unclear_pct": 0.016135817307692306,
            "avg_trade_size": 5623.759264117017,
            "avg_run_notional": 11183.135947716348,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.37115384615384617,
            "medium_confidence_pct": 0.34753605769230766,
            "low_confidence_pct": 0.03383413461538461,
            "na_confidence_pct": 0.24747596153846155,
            "avg_feature_coverage": 0.8812049278846151,
            "observable_run_pct": 0.999609375,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AU8U",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.4782580686722927,
            "mixed_pct": 0.2904722025381692,
            "instit_pct": 0.19455002254718803,
            "ambiguous_pct": 0.03671970624235006,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.03671970624235006,
            "retail_qty_pct": 0.09408524647780972,
            "mixed_qty_pct": 0.29108901647761753,
            "instit_qty_pct": 0.529826382310381,
            "ambiguous_qty_pct": 0.08499935473419168,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.08499935473419168,
            "retail_notional_pct": 0.09384341994352209,
            "mixed_notional_pct": 0.291178196978604,
            "instit_notional_pct": 0.5295271987473911,
            "ambiguous_notional_pct": 0.08545118433048293,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.08545118433048293,
            "run_retail_pct": 0.7838012958963283,
            "run_mixed_pct": 0.18812095032397408,
            "run_instit_pct": 0.02062634989200864,
            "run_unclear_pct": 0.0074514038876889845,
            "avg_trade_size": 1522.7330090832957,
            "avg_run_notional": 2552.633315334773,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.4652267818574514,
            "medium_confidence_pct": 0.30615550755939525,
            "low_confidence_pct": 0.03304535637149028,
            "na_confidence_pct": 0.19557235421166308,
            "avg_feature_coverage": 0.8727591792656586,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ODBU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2208398133748056,
            "mixed_pct": 0.07153965785381027,
            "instit_pct": 0.31259720062208396,
            "ambiguous_pct": 0.39502332814930013,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.39502332814930013,
            "retail_qty_pct": 0.05894089732528041,
            "mixed_qty_pct": 0.07788682772505033,
            "instit_qty_pct": 0.5219298245614035,
            "ambiguous_qty_pct": 0.34124245038826573,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.34124245038826573,
            "retail_notional_pct": 0.0591492651870392,
            "mixed_notional_pct": 0.07833083707271465,
            "instit_notional_pct": 0.5211543279607298,
            "ambiguous_notional_pct": 0.3413655697795163,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.3413655697795163,
            "run_retail_pct": 0.4216417910447761,
            "run_mixed_pct": 0.11940298507462686,
            "run_instit_pct": 0.1417910447761194,
            "run_unclear_pct": 0.31716417910447764,
            "avg_trade_size": 4397.972783825817,
            "avg_run_notional": 10551.852611940298,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.018656716417910446,
            "medium_confidence_pct": 0.09701492537313433,
            "low_confidence_pct": 0.44776119402985076,
            "na_confidence_pct": 0.43656716417910446,
            "avg_feature_coverage": 0.8309701492537312,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "JYEU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.476127518528174,
            "mixed_pct": 0.3458157982942907,
            "instit_pct": 0.12520948940449145,
            "ambiguous_pct": 0.05269822352984991,
            "unobservable_pct": 0.000148970243193922,
            "unclear_pct": 0.05284719377304383,
            "retail_qty_pct": 0.08048377709775395,
            "mixed_qty_pct": 0.2643138770871674,
            "instit_qty_pct": 0.4018369028027884,
            "ambiguous_qty_pct": 0.04096919831345509,
            "unobservable_qty_pct": 0.21239624469883514,
            "unclear_qty_pct": 0.25336544301229025,
            "retail_notional_pct": 0.08087943286448984,
            "mixed_notional_pct": 0.265165423581597,
            "instit_notional_pct": 0.402940877743929,
            "ambiguous_notional_pct": 0.04126718757929966,
            "unobservable_notional_pct": 0.20974707823068456,
            "unclear_notional_pct": 0.2510142658099842,
            "run_retail_pct": 0.7633125058285928,
            "run_mixed_pct": 0.22304081569212597,
            "run_instit_pct": 0.005253504927103733,
            "run_unclear_pct": 0.008393173552177563,
            "avg_trade_size": 4548.279745447097,
            "avg_run_notional": 7592.766915042433,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.3682738039727688,
            "medium_confidence_pct": 0.35562187198856043,
            "low_confidence_pct": 0.044670334794367245,
            "na_confidence_pct": 0.23143398924430353,
            "avg_feature_coverage": 0.8855497528676676,
            "observable_run_pct": 0.9997513133762318,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "BMGU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.10487444608567208,
            "mixed_pct": 0.3604135893648449,
            "instit_pct": 0.07828655834564253,
            "ambiguous_pct": 0.44756277695716395,
            "unobservable_pct": 0.008862629246676515,
            "unclear_pct": 0.4564254062038405,
            "retail_qty_pct": 0.05300127713920817,
            "mixed_qty_pct": 0.16666666666666666,
            "instit_qty_pct": 0.4182630906768838,
            "ambiguous_qty_pct": 0.31545338441890164,
            "unobservable_qty_pct": 0.04661558109833972,
            "unclear_qty_pct": 0.3620689655172414,
            "retail_notional_pct": 0.05442898778077683,
            "mixed_notional_pct": 0.17680577663967517,
            "instit_notional_pct": 0.39810521297129364,
            "ambiguous_notional_pct": 0.32635092009443173,
            "unobservable_notional_pct": 0.044309102513822564,
            "unclear_notional_pct": 0.3706600226082543,
            "run_retail_pct": 0.4013605442176871,
            "run_mixed_pct": 0.2857142857142857,
            "run_instit_pct": 0.07482993197278912,
            "run_unclear_pct": 0.2380952380952381,
            "avg_trade_size": 96.04209748892171,
            "avg_run_notional": 442.31632653061223,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.2789115646258503,
            "low_confidence_pct": 0.19727891156462585,
            "na_confidence_pct": 0.5238095238095238,
            "avg_feature_coverage": 0.9166666666666665,
            "observable_run_pct": 0.9931972789115646,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "D5IU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.7570498915401301,
            "mixed_pct": 0.23210412147505424,
            "instit_pct": 0.010845986984815618,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0,
            "retail_qty_pct": 0.10761365870709808,
            "mixed_qty_pct": 0.7321798148835922,
            "instit_qty_pct": 0.1602065264093097,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0,
            "retail_notional_pct": 0.1078043618931523,
            "mixed_notional_pct": 0.7371813165067744,
            "instit_notional_pct": 0.1550143216000733,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0,
            "run_retail_pct": 0.843520782396088,
            "run_mixed_pct": 0.15403422982885084,
            "run_instit_pct": 0.0024449877750611247,
            "run_unclear_pct": 0.0,
            "avg_trade_size": 923.5477223427332,
            "avg_run_notional": 1040.9669926650367,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6430317848410758,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.20293398533007334,
            "na_confidence_pct": 0.15403422982885084,
            "avg_feature_coverage": 0.8518337408312955,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ],
        "3m": [
          {
            "ticker": "CRPU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.5798480019612651,
            "mixed_pct": 0.24094140720764892,
            "instit_pct": 0.13356214758519244,
            "ambiguous_pct": 0.0456484432458936,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0456484432458936,
            "retail_qty_pct": 0.07412932864396904,
            "mixed_qty_pct": 0.3055570007491884,
            "instit_qty_pct": 0.48165138807958047,
            "ambiguous_qty_pct": 0.13866228252726212,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.13866228252726212,
            "retail_notional_pct": 0.07417424019944803,
            "mixed_notional_pct": 0.3062714760588223,
            "instit_notional_pct": 0.48116387548096073,
            "ambiguous_notional_pct": 0.13839040826076893,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.13839040826076893,
            "run_retail_pct": 0.8280281690140845,
            "run_mixed_pct": 0.14830985915492959,
            "run_instit_pct": 0.015774647887323943,
            "run_unclear_pct": 0.007887323943661971,
            "avg_trade_size": 2527.023314537877,
            "avg_run_notional": 3629.481725352113,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.5377464788732395,
            "medium_confidence_pct": 0.2865492957746479,
            "low_confidence_pct": 0.019507042253521126,
            "na_confidence_pct": 0.15619718309859154,
            "avg_feature_coverage": 0.8635211267605633,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AJBU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.3815765890143533,
            "mixed_pct": 0.3434673719802551,
            "instit_pct": 0.22850513241584436,
            "ambiguous_pct": 0.046077904211051526,
            "unobservable_pct": 0.0003730023784956862,
            "unclear_pct": 0.04645090658954721,
            "retail_qty_pct": 0.0996626038331736,
            "mixed_qty_pct": 0.2340374125212239,
            "instit_qty_pct": 0.6047945203609434,
            "ambiguous_qty_pct": 0.04829211537964769,
            "unobservable_qty_pct": 0.01321334790501145,
            "unclear_qty_pct": 0.06150546328465914,
            "retail_notional_pct": 0.09954556463861294,
            "mixed_notional_pct": 0.23403862499128628,
            "instit_notional_pct": 0.6048408820197367,
            "ambiguous_notional_pct": 0.04842076843425778,
            "unobservable_notional_pct": 0.013154159916106255,
            "unclear_notional_pct": 0.06157492835036403,
            "run_retail_pct": 0.7226622283440465,
            "run_mixed_pct": 0.2471782216100398,
            "run_instit_pct": 0.015419344964799511,
            "run_unclear_pct": 0.014740205081114172,
            "avg_trade_size": 6437.191625127765,
            "avg_run_notional": 12710.904296277165,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.32016184573002754,
            "medium_confidence_pct": 0.367825987144169,
            "low_confidence_pct": 0.05009374043464952,
            "na_confidence_pct": 0.26191842669115395,
            "avg_feature_coverage": 0.8858882384450565,
            "observable_run_pct": 0.9996269513314968,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AU8U",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.4697350470309471,
            "mixed_pct": 0.2906225317728154,
            "instit_pct": 0.19726071659366698,
            "ambiguous_pct": 0.04238170460257055,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.04238170460257055,
            "retail_qty_pct": 0.1055579491598449,
            "mixed_qty_pct": 0.2756442559333052,
            "instit_qty_pct": 0.5495323844510789,
            "ambiguous_qty_pct": 0.06926541045577102,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.06926541045577102,
            "retail_notional_pct": 0.1067232728658773,
            "mixed_notional_pct": 0.2766132451476115,
            "instit_notional_pct": 0.5476208301436847,
            "ambiguous_notional_pct": 0.06904265184282653,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.06904265184282653,
            "run_retail_pct": 0.7807527775213123,
            "run_mixed_pct": 0.19274920752162003,
            "run_instit_pct": 0.018711722524851506,
            "run_unclear_pct": 0.007786292432216169,
            "avg_trade_size": 1670.96774251454,
            "avg_run_notional": 2864.8099898439664,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.45646754685624596,
            "medium_confidence_pct": 0.3160680762010279,
            "low_confidence_pct": 0.026928876988889915,
            "na_confidence_pct": 0.2005354999538362,
            "avg_feature_coverage": 0.8736435539962452,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "JYEU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.46253204286109906,
            "mixed_pct": 0.331463426757653,
            "instit_pct": 0.15717866602285074,
            "ambiguous_pct": 0.048485020628146594,
            "unobservable_pct": 0.00034084373025059113,
            "unclear_pct": 0.048825864358397184,
            "retail_qty_pct": 0.08253550889473273,
            "mixed_qty_pct": 0.23197721765861545,
            "instit_qty_pct": 0.5371039723014632,
            "ambiguous_qty_pct": 0.045944563764433774,
            "unobservable_qty_pct": 0.10243873738075482,
            "unclear_qty_pct": 0.1483833011451886,
            "retail_notional_pct": 0.08228116689246949,
            "mixed_notional_pct": 0.22990264521799908,
            "instit_notional_pct": 0.5448355534202627,
            "ambiguous_notional_pct": 0.04610463819706862,
            "unobservable_notional_pct": 0.0968759962722001,
            "unclear_notional_pct": 0.14298063446926873,
            "run_retail_pct": 0.7613546735265924,
            "run_mixed_pct": 0.22118406523401002,
            "run_instit_pct": 0.00776595357415879,
            "run_unclear_pct": 0.009695307665238864,
            "avg_trade_size": 4406.886006873681,
            "avg_run_notional": 7530.651681086262,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.3718314302702309,
            "medium_confidence_pct": 0.3535571707660385,
            "low_confidence_pct": 0.043732026064481684,
            "na_confidence_pct": 0.2308793728992489,
            "avg_feature_coverage": 0.8846052104694759,
            "observable_run_pct": 0.9994782249942362,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ODBU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.35850052798310456,
            "mixed_pct": 0.14308342133051744,
            "instit_pct": 0.20538542766631468,
            "ambiguous_pct": 0.2930306230200634,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.2930306230200634,
            "retail_qty_pct": 0.08528791850190505,
            "mixed_qty_pct": 0.1363390709865701,
            "instit_qty_pct": 0.4085037965790256,
            "ambiguous_qty_pct": 0.3698692139324993,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3698692139324993,
            "retail_notional_pct": 0.08628704282551365,
            "mixed_notional_pct": 0.13816996435221154,
            "instit_notional_pct": 0.40469892560905385,
            "ambiguous_notional_pct": 0.37084406721322094,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.37084406721322094,
            "run_retail_pct": 0.5697569756975698,
            "run_mixed_pct": 0.16561656165616562,
            "run_instit_pct": 0.07560756075607561,
            "run_unclear_pct": 0.18901890189018902,
            "avg_trade_size": 4132.4461457233365,
            "avg_run_notional": 7044.872187218722,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.1854185418541854,
            "medium_confidence_pct": 0.1224122412241224,
            "low_confidence_pct": 0.33753375337533753,
            "na_confidence_pct": 0.3546354635463546,
            "avg_feature_coverage": 0.8393339333933393,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "D5IU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.5985732814526589,
            "mixed_pct": 0.20914396887159534,
            "instit_pct": 0.1582360570687419,
            "ambiguous_pct": 0.03404669260700389,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.03404669260700389,
            "retail_qty_pct": 0.11446788213225752,
            "mixed_qty_pct": 0.4654556242567676,
            "instit_qty_pct": 0.3807939927285936,
            "ambiguous_qty_pct": 0.039282500882381305,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.039282500882381305,
            "retail_notional_pct": 0.11227247515545839,
            "mixed_notional_pct": 0.461912074114904,
            "instit_notional_pct": 0.3836646097199949,
            "ambiguous_notional_pct": 0.042150841009642774,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.042150841009642774,
            "run_retail_pct": 0.8167420814479638,
            "run_mixed_pct": 0.14841628959276018,
            "run_instit_pct": 0.019909502262443438,
            "run_unclear_pct": 0.01493212669683258,
            "avg_trade_size": 2252.939494163424,
            "avg_run_notional": 3143.920995475113,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.43981900452488687,
            "medium_confidence_pct": 0.22036199095022624,
            "low_confidence_pct": 0.17647058823529413,
            "na_confidence_pct": 0.16334841628959276,
            "avg_feature_coverage": 0.8547511312217192,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "BMGU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.1141732283464567,
            "mixed_pct": 0.3320209973753281,
            "instit_pct": 0.0984251968503937,
            "ambiguous_pct": 0.4409448818897638,
            "unobservable_pct": 0.014435695538057743,
            "unclear_pct": 0.4553805774278215,
            "retail_qty_pct": 0.05658470865611317,
            "mixed_qty_pct": 0.14011451667228023,
            "instit_qty_pct": 0.39811384304479625,
            "ambiguous_qty_pct": 0.36308521387672615,
            "unobservable_qty_pct": 0.04210171775008421,
            "unclear_qty_pct": 0.40518693162681035,
            "retail_notional_pct": 0.05849423981827032,
            "mixed_notional_pct": 0.14754989453188383,
            "instit_notional_pct": 0.38150657147493106,
            "ambiguous_notional_pct": 0.3715885120882687,
            "unobservable_notional_pct": 0.04086078208664611,
            "unclear_notional_pct": 0.4124492941749148,
            "run_retail_pct": 0.3476190476190476,
            "run_mixed_pct": 0.23809523809523808,
            "run_instit_pct": 0.10952380952380952,
            "run_unclear_pct": 0.30476190476190473,
            "avg_trade_size": 161.75853018372703,
            "avg_run_notional": 586.952380952381,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.19523809523809524,
            "low_confidence_pct": 0.2619047619047619,
            "na_confidence_pct": 0.5428571428571428,
            "avg_feature_coverage": 0.8857142857142857,
            "observable_run_pct": 0.9809523809523809,
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
            "retail_pct": 0.6084132903171744,
            "mixed_pct": 0.2424896300331001,
            "instit_pct": 0.10839234088909373,
            "ambiguous_pct": 0.04070473876063183,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.04070473876063183,
            "retail_qty_pct": 0.09816496395613047,
            "mixed_qty_pct": 0.30657688441301545,
            "instit_qty_pct": 0.48200370581807406,
            "ambiguous_qty_pct": 0.11325444581278002,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.11325444581278002,
            "retail_notional_pct": 0.09828545047850218,
            "mixed_notional_pct": 0.30674248735289866,
            "instit_notional_pct": 0.482034719434445,
            "ambiguous_notional_pct": 0.11293734273415418,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.11293734273415418,
            "run_retail_pct": 0.8309427414690572,
            "run_mixed_pct": 0.1497108155002892,
            "run_instit_pct": 0.013100057836899942,
            "run_unclear_pct": 0.006246385193753615,
            "avg_trade_size": 1874.3020069552101,
            "avg_run_notional": 2587.273915558126,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.4943609022556391,
            "medium_confidence_pct": 0.32186234817813764,
            "low_confidence_pct": 0.027819548872180452,
            "na_confidence_pct": 0.15595720069404279,
            "avg_feature_coverage": 0.8645271833429727,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AJBU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.36393433445049256,
            "mixed_pct": 0.33145528436664196,
            "instit_pct": 0.23301294530500483,
            "ambiguous_pct": 0.07125389033517321,
            "unobservable_pct": 0.00034354554268744224,
            "unclear_pct": 0.07159743587786065,
            "retail_qty_pct": 0.09872939520990445,
            "mixed_qty_pct": 0.2265212898870561,
            "instit_qty_pct": 0.6139618402666018,
            "ambiguous_qty_pct": 0.046011562629183995,
            "unobservable_qty_pct": 0.01477591200725356,
            "unclear_qty_pct": 0.060787474636437556,
            "retail_notional_pct": 0.09862657875743305,
            "mixed_notional_pct": 0.22651395448808928,
            "instit_notional_pct": 0.614115801003348,
            "ambiguous_notional_pct": 0.04596174961926635,
            "unobservable_notional_pct": 0.014781916131863393,
            "unclear_notional_pct": 0.060743665751129744,
            "run_retail_pct": 0.7214566045310247,
            "run_mixed_pct": 0.24619025232810576,
            "run_instit_pct": 0.015275965708309344,
            "run_unclear_pct": 0.017077177432560205,
            "avg_trade_size": 5602.10609131695,
            "avg_run_notional": 11628.164463571682,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.3107908956934665,
            "medium_confidence_pct": 0.3730515484610468,
            "low_confidence_pct": 0.052890126084820695,
            "na_confidence_pct": 0.26326742976066597,
            "avg_feature_coverage": 0.8865173227972131,
            "observable_run_pct": 0.9995879926261244,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "JYEU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.44250875159519043,
            "mixed_pct": 0.30947279688103685,
            "instit_pct": 0.16786281557452223,
            "ambiguous_pct": 0.07989025870378826,
            "unobservable_pct": 0.00026537724546224424,
            "unclear_pct": 0.0801556359492505,
            "retail_qty_pct": 0.08159570695407352,
            "mixed_qty_pct": 0.2159629101360208,
            "instit_qty_pct": 0.5717913778789396,
            "ambiguous_qty_pct": 0.06529841851379717,
            "unobservable_qty_pct": 0.06535158651716882,
            "unclear_qty_pct": 0.130650005030966,
            "retail_notional_pct": 0.08142688327814016,
            "mixed_notional_pct": 0.21421158782454877,
            "instit_notional_pct": 0.5774829676991539,
            "ambiguous_notional_pct": 0.0662050340639179,
            "unobservable_notional_pct": 0.060673527134239354,
            "unclear_notional_pct": 0.12687856119815724,
            "run_retail_pct": 0.7645844925096666,
            "run_mixed_pct": 0.2134410457589993,
            "run_instit_pct": 0.009381404816069529,
            "run_unclear_pct": 0.012593056915264503,
            "avg_trade_size": 4145.751778573909,
            "avg_run_notional": 7481.904805434454,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.3787847840938704,
            "medium_confidence_pct": 0.3540846439362459,
            "low_confidence_pct": 0.0410964692956199,
            "na_confidence_pct": 0.22603410267426383,
            "avg_feature_coverage": 0.8834895726953226,
            "observable_run_pct": 0.9995703711007656,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AU8U",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.4875909684642657,
            "mixed_pct": 0.26826107690074846,
            "instit_pct": 0.20149903588978044,
            "ambiguous_pct": 0.042648918745205364,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.042648918745205364,
            "retail_qty_pct": 0.11801784455159493,
            "mixed_qty_pct": 0.2648253897296208,
            "instit_qty_pct": 0.5399379448738992,
            "ambiguous_qty_pct": 0.07721882084488507,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.07721882084488507,
            "retail_notional_pct": 0.11938176010836785,
            "mixed_notional_pct": 0.2644921797628202,
            "instit_notional_pct": 0.5385745177193845,
            "ambiguous_notional_pct": 0.07755154240942748,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.07755154240942748,
            "run_retail_pct": 0.7947408775659569,
            "run_mixed_pct": 0.177255776670268,
            "run_instit_pct": 0.01991774997386122,
            "run_unclear_pct": 0.008085595789913917,
            "avg_trade_size": 1713.8496039891356,
            "avg_run_notional": 2880.865725089743,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.46049559125919215,
            "medium_confidence_pct": 0.3301676367058167,
            "low_confidence_pct": 0.023995399574809187,
            "na_confidence_pct": 0.18534137246018192,
            "avg_feature_coverage": 0.8703080890809602,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "D5IU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.5315985130111525,
            "mixed_pct": 0.20979473088734443,
            "instit_pct": 0.17973169549054469,
            "ambiguous_pct": 0.07887506061095846,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.07887506061095846,
            "retail_qty_pct": 0.11440583995129502,
            "mixed_qty_pct": 0.417710611899414,
            "instit_qty_pct": 0.3969490018163917,
            "ambiguous_qty_pct": 0.07093454633289926,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.07093454633289926,
            "retail_notional_pct": 0.10971048761623407,
            "mixed_notional_pct": 0.3910364991208603,
            "instit_notional_pct": 0.41039565012095264,
            "ambiguous_notional_pct": 0.08885736314195296,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.08885736314195296,
            "run_retail_pct": 0.7732714390422673,
            "run_mixed_pct": 0.16149523576838504,
            "run_instit_pct": 0.0305399462496946,
            "run_unclear_pct": 0.03469337893965307,
            "avg_trade_size": 1825.642055923711,
            "avg_run_notional": 2759.6499877840215,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.3596384070364036,
            "medium_confidence_pct": 0.21573418030784267,
            "low_confidence_pct": 0.2284387979477156,
            "na_confidence_pct": 0.1961886147080381,
            "avg_feature_coverage": 0.8546176398729536,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ODBU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.42070116861435725,
            "mixed_pct": 0.18602432625804913,
            "instit_pct": 0.15025041736227046,
            "ambiguous_pct": 0.24302408776532317,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.24302408776532317,
            "retail_qty_pct": 0.09414976139510221,
            "mixed_qty_pct": 0.16626539148877673,
            "instit_qty_pct": 0.3780169281828715,
            "ambiguous_qty_pct": 0.3615679189332495,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3615679189332495,
            "retail_notional_pct": 0.09445388726636222,
            "mixed_notional_pct": 0.16651660318177072,
            "instit_notional_pct": 0.37667713772944994,
            "ambiguous_notional_pct": 0.3623523718224171,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.3623523718224171,
            "run_retail_pct": 0.6484896037661828,
            "run_mixed_pct": 0.15888583758336602,
            "run_instit_pct": 0.05453118870145155,
            "run_unclear_pct": 0.1380933699489996,
            "avg_trade_size": 3143.593608394944,
            "avg_run_notional": 5171.081992938407,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.22244017261671242,
            "medium_confidence_pct": 0.18595527657905062,
            "low_confidence_pct": 0.29462534327187134,
            "na_confidence_pct": 0.2969792075323656,
            "avg_feature_coverage": 0.8471165162808943,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "BMGU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.14327485380116958,
            "mixed_pct": 0.1953216374269006,
            "instit_pct": 0.2152046783625731,
            "ambiguous_pct": 0.4391812865497076,
            "unobservable_pct": 0.007017543859649123,
            "unclear_pct": 0.44619883040935676,
            "retail_qty_pct": 0.008625997175150543,
            "mixed_qty_pct": 0.016110641034505085,
            "instit_qty_pct": 0.08140922015937244,
            "ambiguous_qty_pct": 0.056299447211860414,
            "unobservable_qty_pct": 0.8375546944191116,
            "unclear_qty_pct": 0.893854141630972,
            "retail_notional_pct": 0.008666627454709438,
            "mixed_notional_pct": 0.01600283728904827,
            "instit_notional_pct": 0.07842675348340958,
            "ambiguous_notional_pct": 0.05595244023792106,
            "unobservable_notional_pct": 0.8409513415349117,
            "unclear_notional_pct": 0.8969037817728327,
            "run_retail_pct": 0.4817987152034261,
            "run_mixed_pct": 0.18201284796573874,
            "run_instit_pct": 0.08993576017130621,
            "run_unclear_pct": 0.2462526766595289,
            "avg_trade_size": 1167.2454970760234,
            "avg_run_notional": 4274.068094218415,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.19700214132762311,
            "medium_confidence_pct": 0.16274089935760172,
            "low_confidence_pct": 0.21199143468950749,
            "na_confidence_pct": 0.4282655246252677,
            "avg_feature_coverage": 0.8798715203426123,
            "observable_run_pct": 0.9892933618843683,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ]
      },
      "peer_activity_enabled": true,
      "peer_activity_reason": null,
      "recent_trades": [
        {
          "trade_id": "BMLL-316",
          "timestamp": "2026-04-10T09:06:16.032100",
          "price": 0.645,
          "size": 254200.0,
          "notional": 163959.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 57028,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-315",
          "timestamp": "2026-04-10T09:06:16.032000",
          "price": 0.645,
          "size": 45800.0,
          "notional": 29541.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 57028,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-297",
          "timestamp": "2026-04-10T08:59:52.243500",
          "price": 0.645,
          "size": 100.0,
          "notional": 64.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 57027,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-296",
          "timestamp": "2026-04-10T08:59:51.910100",
          "price": 0.65,
          "size": 100.0,
          "notional": 65.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 57026,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-295",
          "timestamp": "2026-04-10T08:59:45.981100",
          "price": 0.645,
          "size": 100.0,
          "notional": 64.5,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57025,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "BMLL-294",
          "timestamp": "2026-04-10T08:59:43.709000",
          "price": 0.645,
          "size": 100.0,
          "notional": 64.5,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57025,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "BMLL-293",
          "timestamp": "2026-04-10T08:59:40.347000",
          "price": 0.645,
          "size": 200.0,
          "notional": 129.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57025,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "BMLL-292",
          "timestamp": "2026-04-10T08:59:37.174100",
          "price": 0.645,
          "size": 200.0,
          "notional": 129.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57025,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "BMLL-291",
          "timestamp": "2026-04-10T08:59:28.021900",
          "price": 0.645,
          "size": 100.0,
          "notional": 64.5,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57024,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-290",
          "timestamp": "2026-04-10T08:59:24.956800",
          "price": 0.645,
          "size": 200.0,
          "notional": 129.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57024,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-289",
          "timestamp": "2026-04-10T08:59:23.859900",
          "price": 0.65,
          "size": 100.0,
          "notional": 65.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57023,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-288",
          "timestamp": "2026-04-10T08:59:21.917200",
          "price": 0.65,
          "size": 100.0,
          "notional": 65.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57023,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-287",
          "timestamp": "2026-04-10T08:59:21.069300",
          "price": 0.65,
          "size": 100.0,
          "notional": 65.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57023,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-286",
          "timestamp": "2026-04-10T08:59:21.069200",
          "price": 0.65,
          "size": 300.0,
          "notional": 195.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57023,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-285",
          "timestamp": "2026-04-10T08:59:18.701200",
          "price": 0.645,
          "size": 300.0,
          "notional": 193.5,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 57022,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-284",
          "timestamp": "2026-04-10T08:59:06.901300",
          "price": 0.645,
          "size": 200.0,
          "notional": 129.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 57021,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "BMLL-283",
          "timestamp": "2026-04-10T08:59:02.812000",
          "price": 0.645,
          "size": 200.0,
          "notional": 129.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 57021,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "BMLL-282",
          "timestamp": "2026-04-10T08:59:00.931400",
          "price": 0.645,
          "size": 100.0,
          "notional": 64.5,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 57021,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "BMLL-281",
          "timestamp": "2026-04-10T08:59:00.931400",
          "price": 0.645,
          "size": 1300.0,
          "notional": 838.5,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 57021,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "BMLL-280",
          "timestamp": "2026-04-10T08:58:59.285700",
          "price": 0.645,
          "size": 100.0,
          "notional": 64.5,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 57021,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "BMLL-279",
          "timestamp": "2026-04-10T08:58:55.181100",
          "price": 0.645,
          "size": 100.0,
          "notional": 64.5,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 57021,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "BMLL-278",
          "timestamp": "2026-04-10T08:58:51.525000",
          "price": 0.645,
          "size": 300.0,
          "notional": 193.5,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 57021,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "BMLL-277",
          "timestamp": "2026-04-10T08:58:45.574200",
          "price": 0.645,
          "size": 200.0,
          "notional": 129.0,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 57020,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-276",
          "timestamp": "2026-04-10T08:58:29.629900",
          "price": 0.645,
          "size": 1500.0,
          "notional": 967.5,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 57019,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-275",
          "timestamp": "2026-04-10T08:58:14.433800",
          "price": 0.645,
          "size": 200.0,
          "notional": 129.0,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 57018,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-274",
          "timestamp": "2026-04-10T08:57:52.915100",
          "price": 0.645,
          "size": 300.0,
          "notional": 193.5,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 57017,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-273",
          "timestamp": "2026-04-10T08:57:33.479900",
          "price": 0.645,
          "size": 1500.0,
          "notional": 967.5,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 57016,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-272",
          "timestamp": "2026-04-10T08:57:15.456300",
          "price": 0.645,
          "size": 200.0,
          "notional": 129.0,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 57015,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-271",
          "timestamp": "2026-04-10T08:56:58.588200",
          "price": 0.645,
          "size": 100.0,
          "notional": 64.5,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57014,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-270",
          "timestamp": "2026-04-10T08:56:56.569300",
          "price": 0.645,
          "size": 300.0,
          "notional": 193.5,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57014,
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
      "total_trades": 47733,
      "price_moving_trades": 12235,
      "pct_price_moving": 25.6321622357698,
      "all_movers": {
        "count": 12235,
        "avg_size": 1426.9259092766654,
        "median_size": 202.5,
        "retail_count": 9958,
        "mixed_count": 2002,
        "institutional_count": 215,
        "ambiguous_count": 60,
        "unobservable_count": 0,
        "retail_pct": 81.38945647731917,
        "mixed_pct": 16.362893338782182,
        "instit_pct": 1.7572537801389458,
        "unclear_pct": 0.4903964037597058
      },
      "positive_movers": {
        "count": 6110,
        "avg_size": 1382.793371522095,
        "median_size": 138.0,
        "retail_count": 4990,
        "mixed_count": 998,
        "institutional_count": 100,
        "ambiguous_count": 22,
        "unobservable_count": 0,
        "retail_pct": 81.66939443535188,
        "mixed_pct": 16.333878887070377,
        "instit_pct": 1.6366612111292964,
        "unclear_pct": 0.36006546644844517
      },
      "negative_movers": {
        "count": 6125,
        "avg_size": 1470.9503673469387,
        "median_size": 204.00000000000003,
        "retail_count": 4968,
        "mixed_count": 1004,
        "institutional_count": 115,
        "ambiguous_count": 38,
        "unobservable_count": 0,
        "retail_pct": 81.11020408163266,
        "mixed_pct": 16.391836734693875,
        "instit_pct": 1.8775510204081631,
        "unclear_pct": 0.6204081632653061
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
            "avg_short_ratio": 0.14080134896160026,
            "max_short_ratio": 0.36836158192090396,
            "interpretation": "Elevated short interest"
          }
        },
        "3M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.06252476174560782,
            "max_short_ratio": 0.36836158192090396,
            "interpretation": "Moderate short interest"
          }
        },
        "6M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.06584694267359924,
            "max_short_ratio": 0.36836158192090396,
            "interpretation": "Moderate short interest"
          }
        }
      },
      "correlation": {
        "valid": true,
        "correlation": -0.13374839270642935,
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
            "avg_short_ratio": 0.043232682683831604
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
            "avg_short_ratio": 0.043232682683831604,
            "change_pct": null
          },
          {
            "month": "2026-03",
            "avg_short_ratio": 0.1453584600680963,
            "change_pct": 236.2235490476705
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
        "interpretation": "Shorts covering significantly (-70% MoM)"
      },
      "short_series": {
        "valid": true,
        "rows": [
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
          },
          {
            "date": "2025-12-02",
            "short_ratio": 0.23535638673253353,
            "short_vol": 66700,
            "total_vol": 283400,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-12-01",
            "short_ratio": 0.1338889874091151,
            "short_vol": 75500,
            "total_vol": 563900,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-11-28",
            "short_ratio": 0.09212067955477446,
            "short_vol": 62900,
            "total_vol": 682800,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-11-27",
            "short_ratio": 0.06048687147868608,
            "short_vol": 56900,
            "total_vol": 940700,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-11-26",
            "short_ratio": 0.0897165991902834,
            "short_vol": 55400,
            "total_vol": 617500,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-11-25",
            "short_ratio": 0.0633817215293396,
            "short_vol": 93000,
            "total_vol": 1467300,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-11-24",
            "short_ratio": 0.16246397694524495,
            "short_vol": 135300,
            "total_vol": 832800,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-11-21",
            "short_ratio": 0.15066529020417527,
            "short_vol": 262700,
            "total_vol": 1743600,
            "close": 0.68,
            "return": -0.007299270072992692
          },
          {
            "date": "2025-11-20",
            "short_ratio": 0.06797493793592624,
            "short_vol": 57500,
            "total_vol": 845900,
            "close": 0.685,
            "return": 0.007352941176470562
          },
          {
            "date": "2025-11-19",
            "short_ratio": 0.12824858757062146,
            "short_vol": 90800,
            "total_vol": 708000,
            "close": 0.68,
            "return": 0.007407407407407307
          },
          {
            "date": "2025-11-18",
            "short_ratio": 0.18656074147633234,
            "short_vol": 281800,
            "total_vol": 1510500,
            "close": 0.675,
            "return": -0.007352941176470562
          },
          {
            "date": "2025-11-17",
            "short_ratio": 0.16113818581983966,
            "short_vol": 307500,
            "total_vol": 1908300,
            "close": 0.68,
            "return": 0.007407407407407307
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "CRPU",
          "avg_short_ratio": 0.06252476174560782,
          "max_short_ratio": 0.36836158192090396,
          "is_target": true
        },
        {
          "ticker": "BMGU",
          "avg_short_ratio": 1.976597090449083e-05,
          "max_short_ratio": 0.007352941176470588,
          "is_target": false
        },
        {
          "ticker": "ODBU",
          "avg_short_ratio": 0.0008405532155461406,
          "max_short_ratio": 0.1091703056768559,
          "is_target": false
        },
        {
          "ticker": "D5IU",
          "avg_short_ratio": 0.0014637631039160614,
          "max_short_ratio": 0.2702329197017246,
          "is_target": false
        },
        {
          "ticker": "AU8U",
          "avg_short_ratio": 0.06387528136038999,
          "max_short_ratio": 0.583009889700239,
          "is_target": false
        },
        {
          "ticker": "AJBU",
          "avg_short_ratio": 0.0833268986857782,
          "max_short_ratio": 0.4312404120096428,
          "is_target": false
        },
        {
          "ticker": "JYEU",
          "avg_short_ratio": 0.10323541868157884,
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
          "opening": 0.002203178480612251,
          "continuous": 0.8944379106168356,
          "closing": 0.07537721528468662,
          "auctions": 0.10556208938316439,
          "other": 0.0
        },
        "1M": {
          "opening": 0.05634202125402356,
          "continuous": 0.878505534279011,
          "closing": 0.050538937986387984,
          "auctions": 0.12149446572098897,
          "other": 0.0
        },
        "3M": {
          "opening": 0.05201532839605642,
          "continuous": 0.84971556785983,
          "closing": 0.0849989906472994,
          "auctions": 0.15028443214017,
          "other": 0.0
        },
        "6M": {
          "opening": 0.04058075937139558,
          "continuous": 0.8658224819402739,
          "closing": 0.08173903305452146,
          "auctions": 0.1341775180597262,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.27358893236847986,
        "1M": 0.20150938212289007,
        "3M": 0.2400251859461562,
        "6M": 0.2273793729081703
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.0192
        },
        {
          "time": "09:00",
          "avg_share": 0.0929
        },
        {
          "time": "09:30",
          "avg_share": 0.0426
        },
        {
          "time": "10:00",
          "avg_share": 0.0435
        },
        {
          "time": "10:30",
          "avg_share": 0.0399
        },
        {
          "time": "11:00",
          "avg_share": 0.0339
        },
        {
          "time": "11:30",
          "avg_share": 0.0404
        },
        {
          "time": "12:00",
          "avg_share": 0.2308
        },
        {
          "time": "12:30",
          "avg_share": 0.0095
        },
        {
          "time": "13:00",
          "avg_share": 0.0226
        },
        {
          "time": "13:30",
          "avg_share": 0.0197
        },
        {
          "time": "14:00",
          "avg_share": 0.0363
        },
        {
          "time": "14:30",
          "avg_share": 0.0349
        },
        {
          "time": "15:00",
          "avg_share": 0.0264
        },
        {
          "time": "15:30",
          "avg_share": 0.049
        },
        {
          "time": "16:00",
          "avg_share": 0.0403
        },
        {
          "time": "16:30",
          "avg_share": 0.1009
        },
        {
          "time": "17:00",
          "avg_share": 0.1172
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "CRPU",
          "auctions_pct": 11.773803720593836,
          "hhi": 0.22868253923411508,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400",
            "you": true
          }
        },
        {
          "ticker": "ODBU",
          "auctions_pct": 6.868186676028828,
          "hhi": 0.38718434632095433,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "D5IU",
          "auctions_pct": 11.65259235870801,
          "hhi": 0.40770225230497903,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "BMGU",
          "auctions_pct": 0.8053532877947668,
          "hhi": 0.7446740664312872,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "AU8U",
          "auctions_pct": 13.295645448321988,
          "hhi": 0.17418173609489251,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "JYEU",
          "auctions_pct": 13.33402213853963,
          "hhi": 0.21083139787299615,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "AJBU",
          "auctions_pct": 19.801176402493056,
          "hhi": 0.14832735671697392,
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
