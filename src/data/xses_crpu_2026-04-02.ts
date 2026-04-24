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
      "marketCap": 794239715.8100001,
      "sector": "REIT - Retail",
      "industry": "Real Estate"
    },
    {
      "ticker": "ODBU",
      "name": "UtdHampshReitUSD",
      "marketCap": 300742170.81,
      "sector": "REIT - Retail",
      "industry": "Real Estate"
    },
    {
      "ticker": "D5IU",
      "name": "LANDMARK REIT",
      "marketCap": 46180859.874,
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
      "marketCap": 1109636927.8500001,
      "sector": "REIT - Retail",
      "industry": "Real Estate"
    },
    {
      "ticker": "JYEU",
      "name": "Lendlease Reit",
      "marketCap": 1296170342.105,
      "sector": "REIT - Diversified",
      "industry": "Real Estate"
    },
    {
      "ticker": "AJBU",
      "name": "Keppel DC Reit",
      "marketCap": 4574670303.780001,
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
    "asof_date": "2026-04-02",
    "industry": "Real Estate",
    "sector": "REIT - Retail",
    "market_cap_display": "794.2M",
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
          "score_pca": 82.07885304659499,
          "score_pca_percentile": 82.07885304659499,
          "rank_pca": 101,
          "total": 558,
          "adv_notional_sgd": 501523.0,
          "adv_volume_shares": 789800.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.0017279976718020936,
          "votes": 734.0,
          "trades": 734.0,
          "spread_pct": 0.007843137254901968,
          "spread_ticks": 1.0,
          "amihud": 1.5577550780323135e-08,
          "volatility": 0.07477382302249089
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5108910707179195,
          "loadings": {
            "log_adv": 0.5584929385657076,
            "log_trades": 0.5199635891691764,
            "log_turnover": 0.5238611527634245,
            "neg_spread": 0.3353325031857625,
            "neg_amihud": 0.040767511874861516,
            "neg_vol": -0.17083067177362937
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
          "peer_median_adv": 652015.65,
          "peer_median_score_pca": 80.55555555555554,
          "peer_median_trades": 519.0,
          "peer_median_volatility": 0.20214885473250765,
          "peer_median_spread_pct": 0.010691102082498218,
          "peer_median_spread_ticks": 1.0005518763796908,
          "peer_median_amihud": 1.9506317253875322e-10,
          "peer_median_turnover_ratio": 0.0022943249696837,
          "target_vs_peer": {
            "score_pca_delta": 1.52,
            "adv_delta_pct": -23.1,
            "trades_delta_pct": 41.43,
            "volatility_delta_pct": 63.01,
            "spread_pct_delta_pct": 26.64,
            "spread_ticks_delta_pct": -0.06,
            "amihud_delta_pct": -7885.9,
            "turnover_ratio_delta_pct": -24.68
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 82.07885304659499,
            "rank_pca": 101,
            "adv": 501523.0,
            "trades": 734.0,
            "volatility": 0.07477382302249089,
            "spread_pct": 0.007843137254901968,
            "spread_ticks": 1.0,
            "amihud": 1.5577550780323135e-08,
            "turnover_ratio": 0.0017279976718020936,
            "is_target": true
          },
          {
            "ticker": "ODBU",
            "score_pca": 59.318996415770606,
            "rank_pca": 228,
            "adv": 57170.560357078095,
            "trades": 14.0,
            "volatility": 0.1851245267022846,
            "spread_pct": 0.012010113780025294,
            "spread_ticks": 1.2258064516129032,
            "amihud": 0.0,
            "turnover_ratio": 0.00014770459320806017,
            "is_target": false
          },
          {
            "ticker": "D5IU",
            "score_pca": 76.34408602150538,
            "rank_pca": 133,
            "adv": 207595.80000000002,
            "trades": 52.0,
            "volatility": 1.469613012006543,
            "spread_pct": 0.15384615384615383,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.010916581252287037,
            "is_target": false
          },
          {
            "ticker": "BMGU",
            "score_pca": 40.32258064516129,
            "rank_pca": 334,
            "adv": 1513.0,
            "trades": 5.0,
            "volatility": 0.6654058226556423,
            "spread_pct": 0.07461692205196531,
            "spread_ticks": 6.222222222222222,
            "amihud": 1.5193989257849576e-05,
            "turnover_ratio": 6.543462241059875e-06,
            "is_target": false
          },
          {
            "ticker": "AU8U",
            "score_pca": 84.76702508960572,
            "rank_pca": 86,
            "adv": 1096435.5,
            "trades": 986.0,
            "volatility": 0.21917318276273073,
            "spread_pct": 0.007692104219018656,
            "spread_ticks": 1.0,
            "amihud": 7.015741183414496e-09,
            "turnover_ratio": 0.0014069447546261903,
            "is_target": false
          },
          {
            "ticker": "JYEU",
            "score_pca": 93.72759856630825,
            "rank_pca": 36,
            "adv": 7043114.5,
            "trades": 2800.0,
            "volatility": 0.1782035728132994,
            "spread_pct": 0.00937209038497114,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.015629719167485033,
            "is_target": false
          },
          {
            "ticker": "AJBU",
            "score_pca": 91.93548387096774,
            "rank_pca": 46,
            "adv": 11494494.000000002,
            "trades": 2485.0,
            "volatility": 0.17101110656239488,
            "spread_pct": 0.004510250003108001,
            "spread_ticks": 1.0011037527593818,
            "amihud": 3.9012634507750644e-10,
            "turnover_ratio": 0.00318170518474121,
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
              "mean": 0.29017298063593877,
              "median": 0.12144894893604596,
              "min": 0.0,
              "max": 6.608197362010048,
              "p5": 0.0,
              "p95": 0.9131263014776855,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2914112.7878651754,
              "median": 11436.0,
              "min": 0.0,
              "max": 245600380.0,
              "p5": 0.0,
              "p95": 12689618.774999995,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.11252936549158786,
              "median": 0.03231188069703618,
              "min": 0.0002671610380959682,
              "max": 1.3400402414486918,
              "p5": 0.0034691714780117336,
              "p95": 0.5462753950338599,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0035451845469250468,
              "median": 0.00018963018166556688,
              "min": 0.0,
              "max": 0.4116033354924642,
              "p5": 0.0,
              "p95": 0.01222049733796755,
              "count": 552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00017942207639727668,
              "median": 1.976647291170524e-08,
              "min": 0.0,
              "max": 0.037986704653371325,
              "p5": 0.0,
              "p95": 0.00013094998944055469,
              "count": 388
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 469.25985663082434,
              "median": 6.0,
              "min": 0.0,
              "max": 11204.0,
              "p5": 0.0,
              "p95": 2946.999999999993,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3852441620718917,
              "median": 0.19507818824692874,
              "min": 0.07477382302249089,
              "max": 1.469613012006543,
              "p5": 0.07880015709530905,
              "p95": 1.1881404957337272,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 6755892.1700446345,
              "median": 550811.25,
              "min": 1513.0,
              "max": 44150760.0,
              "p5": 20993.146124977335,
              "p95": 31299207.999999978,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.034261559808193044,
              "median": 0.0085310169536581,
              "min": 0.004334601480391496,
              "max": 0.15384615384615383,
              "p5": 0.004403183175490229,
              "p95": 0.1261159227181878,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003114625604125154,
              "median": 0.001567471213214142,
              "min": 6.543462241059875e-06,
              "max": 0.010916581252287037,
              "p5": 5.594985807950998e-05,
              "p95": 0.008973611554839342,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.9040776156193659e-06,
              "median": 3.812288145826166e-09,
              "min": 0.0,
              "max": 1.5193989257849576e-05,
              "p5": 0.0,
              "p95": 9.88154516037533e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1053.75,
              "median": 632.5,
              "min": 5.0,
              "max": 4443.0,
              "p5": 8.15,
              "p95": 3470.6999999999985,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 3316720.5600595134,
              "median": 652015.65,
              "min": 1513.0,
              "max": 11494494.000000002,
              "p5": 15427.390089269524,
              "p95": 10381649.125000002,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1057.0,
              "median": 519.0,
              "min": 5.0,
              "max": 2800.0,
              "p5": 7.25,
              "p95": 2721.25,
              "count": 6
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4814218705838158,
              "median": 0.20214885473250765,
              "min": 0.17101110656239488,
              "max": 1.469613012006543,
              "p5": 0.172809223125121,
              "p95": 1.2685612146688179,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04367460571420704,
              "median": 0.010691102082498218,
              "min": 0.004510250003108001,
              "max": 0.15384615384615383,
              "p5": 0.005305713557085665,
              "p95": 0.1340388458976067,
              "count": 6
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.9081887377657514,
              "median": 1.0005518763796908,
              "min": 1.0,
              "max": 6.222222222222222,
              "p5": 1.0,
              "p95": 4.973118279569892,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.5335658542296783e-06,
              "median": 1.9506317253875322e-10,
              "min": 0.0,
              "max": 1.5193989257849576e-05,
              "p5": 0.0,
              "p95": 1.1397245878683036e-05,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005214866402431431,
              "median": 0.0022943249696837,
              "min": 6.543462241059875e-06,
              "max": 0.015629719167485033,
              "p5": 4.183374498280995e-05,
              "p95": 0.014451434688685535,
              "count": 6
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": -0.0078125,
            "market": -0.005693538099210027,
            "sector": 0.0,
            "peers": 0.0,
            "vs_market": -0.002118961900789973,
            "vs_sector": -0.0078125,
            "vs_peers": -0.0078125
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 83.51254480286738,
          "score_pca_percentile": 83.51254480286738,
          "rank_pca": 93,
          "total": 558,
          "adv_notional_sgd": 807570.0,
          "adv_volume_shares": 1196400.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.002617594852550044,
          "votes": 483.0,
          "trades": 483.0,
          "spread_pct": 0.007843137254901968,
          "spread_ticks": 1.002724795640327,
          "amihud": 8.32452224276545e-09,
          "volatility": 0.26837268326413216
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5306379975624421,
          "loadings": {
            "log_adv": 0.5436203839967068,
            "log_trades": 0.49801953018501277,
            "log_turnover": 0.5012803994211672,
            "neg_spread": 0.41741169107370113,
            "neg_amihud": 0.07475864479898425,
            "neg_vol": 0.15921687095449155
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
          "peer_median_adv": 701582.6195889692,
          "peer_median_score_pca": 75.53763440860216,
          "peer_median_trades": 486.5,
          "peer_median_volatility": 0.23372846969641542,
          "peer_median_spread_pct": 0.010033595041609972,
          "peer_median_spread_ticks": 1.002973586934203,
          "peer_median_amihud": 3.831865545103219e-09,
          "peer_median_turnover_ratio": 0.0009711965837481816,
          "target_vs_peer": {
            "score_pca_delta": 7.97,
            "adv_delta_pct": 15.1,
            "trades_delta_pct": -0.72,
            "volatility_delta_pct": -14.82,
            "spread_pct_delta_pct": 21.83,
            "spread_ticks_delta_pct": -0.02,
            "amihud_delta_pct": -117.24,
            "turnover_ratio_delta_pct": 169.52
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 83.51254480286738,
            "rank_pca": 93,
            "adv": 807570.0,
            "trades": 483.0,
            "volatility": 0.26837268326413216,
            "spread_pct": 0.007843137254901968,
            "spread_ticks": 1.002724795640327,
            "amihud": 8.32452224276545e-09,
            "turnover_ratio": 0.002617594852550044,
            "is_target": true
          },
          {
            "ticker": "ODBU",
            "score_pca": 65.23297491039428,
            "rank_pca": 195,
            "adv": 96174.23917793827,
            "trades": 21.0,
            "volatility": 0.23829845072083777,
            "spread_pct": 0.01107521919704662,
            "spread_ticks": 1.1428571428571428,
            "amihud": 5.23090448188121e-08,
            "turnover_ratio": 0.0002460612683638293,
            "is_target": false
          },
          {
            "ticker": "D5IU",
            "score_pca": 45.878136200716845,
            "rank_pca": 303,
            "adv": 7004.2,
            "trades": 16.0,
            "volatility": 1.101328820138667,
            "spread_pct": 0.15384615384615383,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.000315703820627539,
            "is_target": false
          },
          {
            "ticker": "BMGU",
            "score_pca": 21.68458781362007,
            "rank_pca": 438,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.4287205676885114,
            "spread_pct": 0.09027777777777773,
            "spread_ticks": 7.428571428571429,
            "amihud": 1.1898812498512652e-05,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "AU8U",
            "score_pca": 85.84229390681004,
            "rank_pca": 80,
            "adv": 1306991.0,
            "trades": 952.0,
            "volatility": 0.22915848867199304,
            "spread_pct": 0.00777260922685255,
            "spread_ticks": 1.0038948393378773,
            "amihud": 6.59491400232141e-09,
            "turnover_ratio": 0.0016266893468688244,
            "is_target": false
          },
          {
            "ticker": "JYEU",
            "score_pca": 95.3405017921147,
            "rank_pca": 27,
            "adv": 8353694.499999999,
            "trades": 2762.0,
            "volatility": 0.20521348040517617,
            "spread_pct": 0.008991970886173324,
            "spread_ticks": 1.0,
            "amihud": 1.0688170878850281e-09,
            "turnover_ratio": 0.01787990388404784,
            "is_target": false
          },
          {
            "ticker": "AJBU",
            "score_pca": 97.31182795698925,
            "rank_pca": 16,
            "adv": 25054129.999999996,
            "trades": 3666.0,
            "volatility": 0.19353154022266753,
            "spread_pct": 0.004458497793866408,
            "spread_ticks": 1.0020523345305286,
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
              "mean": 0.6450386508604602,
              "median": 0.40652426849656087,
              "min": 0.0,
              "max": 10.424621821966237,
              "p5": 0.0,
              "p95": 2.002191103403035,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3401378.0466548093,
              "median": 8892.0,
              "min": 0.0,
              "max": 278393500.0,
              "p5": 0.0,
              "p95": 14115266.000000002,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.11015762052077444,
              "median": 0.036315604015351305,
              "min": 0.0002854442826014152,
              "max": 1.3716475095785439,
              "p5": 0.0037518628589434623,
              "p95": 0.4924799276263712,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.007420125077540505,
              "median": 0.0002144937479553005,
              "min": 0.0,
              "max": 2.831059257794476,
              "p5": 0.0,
              "p95": 0.009711780348739272,
              "count": 552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0005327125826500479,
              "median": 1.6797283667611684e-07,
              "min": 0.0,
              "max": 0.25,
              "p5": 0.0,
              "p95": 0.00013363806468858605,
              "count": 542
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 494.9623655913978,
              "median": 5.0,
              "min": 0.0,
              "max": 11430.0,
              "p5": 0.0,
              "p95": 3002.299999999994,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.35140041856334797,
              "median": 0.23372846969641542,
              "min": 0.145589629703473,
              "max": 1.101328820138667,
              "p5": 0.15655779948977344,
              "p95": 0.8659159317811123,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 9934683.492397241,
              "median": 840050.75,
              "min": 0.0,
              "max": 65900017.0,
              "p5": 2451.4700000000003,
              "p95": 46505524.04999997,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03613024412244935,
              "median": 0.008564351525379058,
              "min": 0.004341209680886184,
              "max": 0.15384615384615383,
              "p5": 0.004431884362617922,
              "p95": 0.13159722222222217,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0025288063487817793,
              "median": 0.0014111231715128606,
              "min": 0.0,
              "max": 0.007894898611904696,
              "p5": 8.612144392734027e-05,
              "p95": 0.007348565160561892,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.4970198864166713e-06,
              "median": 7.45971812254343e-09,
              "min": 0.0,
              "max": 1.1898812498512652e-05,
              "p5": 2.886565140574631e-11,
              "p95": 7.752536289719802e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1194.375,
              "median": 564.5,
              "min": 0.0,
              "max": 5742.0,
              "p5": 5.6000000000000005,
              "p95": 4325.549999999997,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 5802998.989862989,
              "median": 701582.6195889692,
              "min": 0.0,
              "max": 25054129.999999996,
              "p5": 1751.05,
              "p95": 20879021.124999996,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1236.1666666666667,
              "median": 486.5,
              "min": 0.0,
              "max": 3666.0,
              "p5": 4.0,
              "p95": 3440.0,
              "count": 6
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.39937522464130887,
              "median": 0.23372846969641542,
              "min": 0.19353154022266753,
              "max": 1.101328820138667,
              "p5": 0.1964520252682947,
              "p95": 0.9331767570261281,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04607037145464508,
              "median": 0.010033595041609972,
              "min": 0.004458497793866408,
              "max": 0.15384615384615383,
              "p5": 0.005287025652112943,
              "p95": 0.1379540598290598,
              "count": 6
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.0962292908828295,
              "median": 1.002973586934203,
              "min": 1.0,
              "max": 7.428571428571429,
              "p5": 1.0,
              "p95": 5.857142857142858,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.9931677163747143e-06,
              "median": 3.831865545103219e-09,
              "min": 0.0,
              "max": 1.1898812498512652e-05,
              "p5": 5.5255956653460053e-11,
              "p95": 8.937186635089191e-06,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004460364370952749,
              "median": 0.0009711965837481816,
              "min": 0.0,
              "max": 0.01787990388404784,
              "p5": 6.151531709095733e-05,
              "p95": 0.015083384889487995,
              "count": 6
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": -0.06617647058823561,
            "market": 0.027998545530102392,
            "sector": -0.012046321742862687,
            "peers": -0.017697837599445987,
            "vs_market": -0.094175016118338,
            "vs_sector": -0.05413014884537293,
            "vs_peers": -0.04847863298878963
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 83.69175627240143,
          "score_pca_percentile": 83.69175627240143,
          "rank_pca": 92,
          "total": 558,
          "adv_notional_sgd": 609063.0,
          "adv_volume_shares": 882700.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.0019312529056719524,
          "votes": 321.0,
          "trades": 321.0,
          "spread_pct": 0.007326007326007333,
          "spread_ticks": 1.0,
          "amihud": 5.0607336622513225e-09,
          "volatility": 0.17278867331627837
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.5472227850182756,
          "loadings": {
            "log_adv": 0.5281825126466876,
            "log_trades": 0.47575225893432704,
            "log_turnover": 0.4818662907106456,
            "neg_spread": 0.4238825098135692,
            "neg_amihud": 0.11562222547705939,
            "neg_vol": 0.2635204321865035
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
          "peer_median_adv": 774537.387586312,
          "peer_median_score_pca": 75.89605734767025,
          "peer_median_trades": 467.5,
          "peer_median_volatility": 0.20295875725454132,
          "peer_median_spread_pct": 0.009142383468059762,
          "peer_median_spread_ticks": 1.0014467446018531,
          "peer_median_amihud": 2.8191777249980254e-09,
          "peer_median_turnover_ratio": 0.0015891203490637864,
          "target_vs_peer": {
            "score_pca_delta": 7.8,
            "adv_delta_pct": -21.4,
            "trades_delta_pct": -31.34,
            "volatility_delta_pct": 14.87,
            "spread_pct_delta_pct": 19.87,
            "spread_ticks_delta_pct": -0.14,
            "amihud_delta_pct": -79.51,
            "turnover_ratio_delta_pct": 21.53
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 83.69175627240143,
            "rank_pca": 92,
            "adv": 609063.0,
            "trades": 321.0,
            "volatility": 0.17278867331627837,
            "spread_pct": 0.007326007326007333,
            "spread_ticks": 1.0,
            "amihud": 5.0607336622513225e-09,
            "turnover_ratio": 0.0019312529056719524,
            "is_target": true
          },
          {
            "ticker": "ODBU",
            "score_pca": 64.87455197132617,
            "rank_pca": 197,
            "adv": 108140.27517262398,
            "trades": 20.0,
            "volatility": 0.20427318895412563,
            "spread_pct": 0.010187600944216682,
            "spread_ticks": 1.0303030303030303,
            "amihud": 4.5064485001309677e-08,
            "turnover_ratio": 0.0002638672181765116,
            "is_target": false
          },
          {
            "ticker": "D5IU",
            "score_pca": 49.82078853046595,
            "rank_pca": 281,
            "adv": 42918.299999999996,
            "trades": 39.0,
            "volatility": 1.3461640423372998,
            "spread_pct": 0.13333333333333333,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0015469992033968483,
            "is_target": false
          },
          {
            "ticker": "BMGU",
            "score_pca": 17.20430107526882,
            "rank_pca": 463,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.7906918285592106,
            "spread_pct": 0.09140767824497252,
            "spread_ticks": 7.833333333333333,
            "amihud": 9.329750709061133e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "AU8U",
            "score_pca": 86.91756272401435,
            "rank_pca": 74,
            "adv": 1440934.5,
            "trades": 896.0,
            "volatility": 0.18593542859021017,
            "spread_pct": 0.0069664355657459605,
            "spread_ticks": 1.0024061597690086,
            "amihud": 4.698317266192312e-09,
            "turnover_ratio": 0.0016312414947307246,
            "is_target": false
          },
          {
            "ticker": "JYEU",
            "score_pca": 95.87813620071685,
            "rank_pca": 24,
            "adv": 8077160.000000001,
            "trades": 2236.0,
            "volatility": 0.20164432555495698,
            "spread_pct": 0.008097165991902843,
            "spread_ticks": 1.0,
            "amihud": 9.400381838037385e-10,
            "turnover_ratio": 0.01617454572076455,
            "is_target": false
          },
          {
            "ticker": "AJBU",
            "score_pca": 97.84946236559139,
            "rank_pca": 13,
            "adv": 25242931.0,
            "trades": 3621.0,
            "volatility": 0.13713227094635277,
            "spread_pct": 0.004454342984409705,
            "spread_ticks": 1.0004873294346979,
            "amihud": 2.0820116263752226e-10,
            "turnover_ratio": 0.006955974309001116,
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
              "mean": 0.6773381697067559,
              "median": 0.45151159138652985,
              "min": 0.0,
              "max": 8.331827820995205,
              "p5": 0.15347624104523883,
              "p95": 1.9802180685861777,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2994192.798357419,
              "median": 14352.75,
              "min": 0.0,
              "max": 278393500.0,
              "p5": 0.0,
              "p95": 12400024.449999997,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09518181068965606,
              "median": 0.026510583754308023,
              "min": 0.00027050510432176795,
              "max": 1.3542204201990415,
              "p5": 0.0035383852724346428,
              "p95": 0.4684552004139633,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0055357694610436384,
              "median": 0.00029935272710479593,
              "min": 0.0,
              "max": 1.88847142574649,
              "p5": 0.0,
              "p95": 0.009527282899512091,
              "count": 552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.7616000182361628e-05,
              "median": 1.4461332710146332e-07,
              "min": 0.0,
              "max": 0.007072115384615384,
              "p5": 0.0,
              "p95": 4.605361491804788e-05,
              "count": 555
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 426.4820788530466,
              "median": 7.0,
              "min": 0.0,
              "max": 11391.0,
              "p5": 0.0,
              "p95": 2297.549999999997,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.396327774229945,
              "median": 0.19271815332846698,
              "min": 0.10778007815718149,
              "max": 1.3461640423372998,
              "p5": 0.12727787735265345,
              "p95": 1.1517487675149682,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 9809497.196896577,
              "median": 670123.75,
              "min": 0.0,
              "max": 64247854.0,
              "p5": 15021.405,
              "p95": 45714664.149999976,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03333512526755637,
              "median": 0.008030861019552464,
              "min": 0.004231604809733075,
              "max": 0.13333333333333333,
              "p5": 0.004322962647497071,
              "p95": 0.11865935405240702,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002556990696734724,
              "median": 0.0015891203490637864,
              "min": 0.0,
              "max": 0.007512096170210739,
              "p5": 9.235352636177908e-05,
              "p95": 0.007202445315844786,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.17400319324613e-06,
              "median": 4.879525464221817e-09,
              "min": 0.0,
              "max": 9.329750709061133e-06,
              "p5": 2.918508333345036e-11,
              "p95": 6.08011053064019e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1146.875,
              "median": 381.0,
              "min": 0.0,
              "max": 5570.0,
              "p5": 7.000000000000001,
              "p95": 4281.299999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 5818680.679195438,
              "median": 774537.387586312,
              "min": 0.0,
              "max": 25242931.0,
              "p5": 10729.574999999999,
              "p95": 20951488.25,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1135.3333333333333,
              "median": 467.5,
              "min": 0.0,
              "max": 3621.0,
              "p5": 5.0,
              "p95": 3274.75,
              "count": 6
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4776401808236927,
              "median": 0.20295875725454132,
              "min": 0.13713227094635277,
              "max": 1.3461640423372998,
              "p5": 0.14933306035731714,
              "p95": 1.2072959888927774,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04240775951076351,
              "median": 0.009142383468059762,
              "min": 0.004454342984409705,
              "max": 0.13333333333333333,
              "p5": 0.005082366129743769,
              "p95": 0.12285191956124313,
              "count": 6
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.1444216421400117,
              "median": 1.0014467446018531,
              "min": 1.0,
              "max": 7.833333333333333,
              "p5": 1.0,
              "p95": 6.132575757575758,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.5634436251125128e-06,
              "median": 2.8191777249980254e-09,
              "min": 0.0,
              "max": 9.329750709061133e-06,
              "p5": 5.2050290659380566e-11,
              "p95": 7.008579153046177e-06,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004428771324344959,
              "median": 0.0015891203490637864,
              "min": 0.0,
              "max": 0.01617454572076455,
              "p5": 6.59668045441279e-05,
              "p95": 0.013869902867823691,
              "count": 6
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": -0.06617647058823439,
            "market": 0.06484641064342056,
            "sector": -0.04545674060769689,
            "peers": -0.05159456999860179,
            "vs_market": -0.13102288123165495,
            "vs_sector": -0.020719729980537505,
            "vs_peers": -0.014581900589632601
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 85.84229390681004,
          "score_pca_percentile": 85.84229390681004,
          "rank_pca": 80,
          "total": 558,
          "adv_notional_sgd": 607437.5,
          "adv_volume_shares": 886800.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.0019402232658319784,
          "votes": 395.5,
          "trades": 395.5,
          "spread_pct": 0.007380073800738015,
          "spread_ticks": 1.0,
          "amihud": 4.537007254882173e-09,
          "volatility": 0.1394603821678132
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.5705682413766845,
          "loadings": {
            "log_adv": 0.5087104677823633,
            "log_trades": 0.4547891061134627,
            "log_turnover": 0.4624290904017235,
            "neg_spread": 0.43017925137232266,
            "neg_amihud": 0.20809358125437868,
            "neg_vol": 0.3036161036718537
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
          "peer_median_adv": 676253.1720302795,
          "peer_median_score_pca": 76.52329749103943,
          "peer_median_trades": 382.75,
          "peer_median_volatility": 0.18588161145711196,
          "peer_median_spread_pct": 0.009060021656094219,
          "peer_median_spread_ticks": 1.0037461048679042,
          "peer_median_amihud": 3.042630560993269e-09,
          "peer_median_turnover_ratio": 0.0012846568892152476,
          "target_vs_peer": {
            "score_pca_delta": 9.32,
            "adv_delta_pct": -10.2,
            "trades_delta_pct": 3.33,
            "volatility_delta_pct": 24.97,
            "spread_pct_delta_pct": 18.54,
            "spread_ticks_delta_pct": -0.37,
            "amihud_delta_pct": -49.11,
            "turnover_ratio_delta_pct": 51.03
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 85.84229390681004,
            "rank_pca": 80,
            "adv": 607437.5,
            "trades": 395.5,
            "volatility": 0.1394603821678132,
            "spread_pct": 0.007380073800738015,
            "spread_ticks": 1.0,
            "amihud": 4.537007254882173e-09,
            "turnover_ratio": 0.0019402232658319784,
            "is_target": true
          },
          {
            "ticker": "ODBU",
            "score_pca": 65.77060931899642,
            "rank_pca": 192,
            "adv": 92501.09406055909,
            "trades": 20.0,
            "volatility": 0.17460802895661312,
            "spread_pct": 0.010050251256281416,
            "spread_ticks": 1.0110878765247697,
            "amihud": 3.173235423364451e-08,
            "turnover_ratio": 0.00023368189373215492,
            "is_target": false
          },
          {
            "ticker": "D5IU",
            "score_pca": 51.971326164874554,
            "rank_pca": 269,
            "adv": 39783.8,
            "trades": 36.5,
            "volatility": 1.189211449728041,
            "spread_pct": 0.10526315789473692,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.001196841198067603,
            "is_target": false
          },
          {
            "ticker": "BMGU",
            "score_pca": 19.35483870967742,
            "rank_pca": 451,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.5708389910004623,
            "spread_pct": 0.10752268329781241,
            "spread_ticks": 8.953125,
            "amihud": 5.678978692471941e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "AU8U",
            "score_pca": 87.27598566308244,
            "rank_pca": 72,
            "adv": 1260005.25,
            "trades": 729.0,
            "volatility": 0.17145744317677758,
            "spread_pct": 0.006509930267114876,
            "spread_ticks": 1.0068890023314194,
            "amihud": 5.06808995415368e-09,
            "turnover_ratio": 0.001372472580362892,
            "is_target": false
          },
          {
            "ticker": "JYEU",
            "score_pca": 96.05734767025089,
            "rank_pca": 23,
            "adv": 7933299.75,
            "trades": 1857.5,
            "volatility": 0.19715519395761077,
            "spread_pct": 0.00806979205590702,
            "spread_ticks": 1.0001990171611,
            "amihud": 1.0171711678328577e-09,
            "turnover_ratio": 0.01579213423065487,
            "is_target": false
          },
          {
            "ticker": "AJBU",
            "score_pca": 97.4910394265233,
            "rank_pca": 15,
            "adv": 18307937.0,
            "trades": 3149.0,
            "volatility": 0.13061505638666018,
            "spread_pct": 0.004415685497073206,
            "spread_ticks": 1.0006032074043891,
            "amihud": 2.6972829512577055e-10,
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
              "mean": 0.6903785092121039,
              "median": 0.43881713780057485,
              "min": 0.0,
              "max": 6.607874090810144,
              "p5": 0.15097011978763455,
              "p95": 2.1179487257066296,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2520345.9882226796,
              "median": 11173.05,
              "min": 0.0,
              "max": 243597405.0,
              "p5": 0.0,
              "p95": 10423151.724999996,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09208882228750546,
              "median": 0.02852371897291928,
              "min": 0.0002778915930896397,
              "max": 1.267605633802817,
              "p5": 0.003595212825290478,
              "p95": 0.46176599534943086,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0031903159608283557,
              "median": 0.0002788673146703366,
              "min": 0.0,
              "max": 0.8816162415134138,
              "p5": 0.0,
              "p95": 0.007105748516550527,
              "count": 552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.342175038910886e-05,
              "median": 1.9492356657107546e-07,
              "min": 0.0,
              "max": 0.0012875000252631538,
              "p5": 0.0,
              "p95": 4.9002412932273264e-05,
              "count": 557
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 364.5044802867383,
              "median": 6.5,
              "min": 0.0,
              "max": 10294.0,
              "p5": 0.0,
              "p95": 2015.75,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.33267418677945415,
              "median": 0.1674558757801367,
              "min": 0.1113508719768271,
              "max": 1.189211449728041,
              "p5": 0.12118920054367223,
              "p95": 0.9727810891733881,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 8570585.330507569,
              "median": 658718.75,
              "min": 0.0,
              "max": 55454011.0,
              "p5": 13924.330000000002,
              "p95": 39685437.549999975,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.031772639583400535,
              "median": 0.008056849127443248,
              "min": 0.0042692302128051595,
              "max": 0.10752268329781241,
              "p5": 0.004333257557571803,
              "p95": 0.10673184940673598,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0023077092098980076,
              "median": 0.0012846568892152476,
              "min": 0.0,
              "max": 0.006654469842597678,
              "p5": 8.178866280625423e-05,
              "p95": 0.006480072905029737,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.158446863198049e-07,
              "median": 4.802548604517927e-09,
              "min": 0.0,
              "max": 5.678978692471941e-06,
              "p5": 3.3848990888613956e-11,
              "p95": 3.702442474088534e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1081.125,
              "median": 401.5,
              "min": 0.0,
              "max": 5295.5,
              "p5": 7.000000000000001,
              "p95": 4059.824999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 4605587.81567676,
              "median": 676253.1720302795,
              "min": 0.0,
              "max": 18307937.0,
              "p5": 9945.95,
              "p95": 15714277.6875,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 965.3333333333334,
              "median": 382.75,
              "min": 0.0,
              "max": 3149.0,
              "p5": 5.0,
              "p95": 2826.125,
              "count": 6
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4056476938676942,
              "median": 0.18588161145711196,
              "min": 0.13061505638666018,
              "max": 1.189211449728041,
              "p5": 0.14082565308418954,
              "p95": 1.0346183350461464,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.040305250044820974,
              "median": 0.009060021656094219,
              "min": 0.004415685497073206,
              "max": 0.10752268329781241,
              "p5": 0.004939246689583624,
              "p95": 0.10695780194704353,
              "count": 6
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.328650683903613,
              "median": 1.0037461048679042,
              "min": 1.0,
              "max": 8.953125,
              "p5": 1.0000497542902749,
              "p95": 6.967615719131192,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.528443393537829e-07,
              "median": 3.042630560993269e-09,
              "min": 0.0,
              "max": 5.678978692471941e-06,
              "p5": 6.743207378144264e-11,
              "p95": 4.267167107912367e-06,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0039018042826074305,
              "median": 0.0012846568892152476,
              "min": 0.0,
              "max": 0.01579213423065487,
              "p5": 5.842047343303873e-05,
              "p95": 0.013048024621197918,
              "count": 6
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": -0.06617647058823506,
            "market": 0.14442806720316326,
            "sector": -0.03405059050274495,
            "peers": -0.06883745345161518,
            "vs_market": -0.21060453779139832,
            "vs_sector": -0.03212588008549011,
            "vs_peers": 0.0026609828633801236
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Near-term tradability is softer, with average volume down 37.9% from the 1M average and bid depth lighter than the ask side. That matters because access can feel thinner on the buy side even with a 1 tick spread.",
        "market_comparison": "The stock fell 0.8% on the day while peers were flat. That matters because weaker tape can make current liquidity feel less supportive."
      },
      "30d": {
        "liquidity": "Monthly tradability is average, with a 1M liquidity score of 83.5 compared with a 75.5 peer median but primary average daily volume of S$607.4K still below the S$676.3K peer median. That matters because peer-relative quality is good, but outright access is not leading the group.",
        "market_comparison": "Return -6.6% vs peers -1.8%."
      },
      "3m": {
        "liquidity": "Three-month tradability looks steady, with the liquidity score at 83.7 compared with a 75.9 peer median. That matters because access has held up reasonably well over the quarter.",
        "market_comparison": "The stock is down 6.6% over 3M compared with a 5.2% drop for peers. That matters because relative underperformance can make liquidity feel less resilient."
      },
      "6m": {
        "liquidity": "Six-month tradability is solid for the company’s size, with a liquidity score of 85.8 compared with a 76.5 peer median. That matters because the stock screens well on structural access over time.",
        "market_comparison": "The stock is down 6.6% over 6M compared with a 6.9% drop for peers. That matters because relative performance has been broadly in line, even as recent trading conditions have become less supportive."
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
          "median": 0.2563278590488638,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "25.6%",
          "display_range": null,
          "display_text": "25.6%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 25.6,
          "plain_english": "Market explains about 25.6% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.4821046773935885,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "48.2%",
          "display_range": null,
          "display_text": "48.2%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 48.2,
          "plain_english": "Sector explains about 48.2% of price moves in the current state."
        },
        "company_share": {
          "median": 0.2615674635575477,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "26.2%",
          "display_range": null,
          "display_text": "26.2%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 26.2,
          "plain_english": "Company-specific explains about 26.2% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": -0.35427342925877997,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.35",
          "display_range": null,
          "display_text": "-0.35",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Modest",
          "plain_english": "Modest market link: a 1% market move has lined up with about a 0.35% stock move in the opposite direction in this state.",
          "value_num": -0.35
        },
        "beta_stock_lag": {
          "median": -1.1888197479508094,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-1.19",
          "display_range": null,
          "display_text": "-1.19",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -1.19
        },
        "beta_sector": {
          "median": 2.5419713210668715,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "2.54",
          "display_range": null,
          "display_text": "2.54",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "High",
          "plain_english": "High sector link: a 1% sector move has lined up with about a 2.54% stock move in the same direction in this state.",
          "value_num": 2.54
        },
        "beta_market_lag": {
          "median": 0.650797928527962,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.65",
          "display_range": null,
          "display_text": "0.65",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 0.65
        },
        "beta_sector_lag": {
          "median": -0.7570308900747087,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.76",
          "display_range": null,
          "display_text": "-0.76",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -0.76
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
          "n_obs": 17,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5470787497587595,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "54.7%",
            "display_range": null,
            "display_text": "54.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
            "kind": "share_pct",
            "value_pct": 54.7,
            "plain_english": "Company-specific explains about 54.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.30785391454437605,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "30.8%",
              "display_range": null,
              "display_text": "30.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 30.8,
              "plain_english": "Market explains about 30.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.14506733569686445,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "14.5%",
              "display_range": null,
              "display_text": "14.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 14.5,
              "plain_english": "Sector explains about 14.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5470787497587595,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "54.7%",
              "display_range": null,
              "display_text": "54.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 54.7,
              "plain_english": "Company-specific explains about 54.7% of price moves in the current state."
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
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5020080321285141,
          "expected_duration_days": 12.5,
          "current_probability": 0.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.005601401852451488,
            "low": 0.005601401852451488,
            "high": 0.005601401852451488
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
            "median": 0.015221941696667638,
            "low": 0.015221941696667638,
            "high": 0.015221941696667638
          },
          "volatility_label": "High Volatility",
          "current_probability_display": null
        }
      ],
      "transitions": {
        "mean": [
          [
            0.92,
            0.08
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
            115.0,
            10.0
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
        "market_link_display": "-0.35",
        "sector_link_display": "2.54",
        "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.35% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "High sector link. A 1% sector move has lined up with about a 2.54% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "-1.19",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "High Volatility",
        "dominant_driver": "sector",
        "dominant_driver_label": "Sector",
        "driver_share_pct": 48.2,
        "driver_share_display": "48.2%",
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
          "expected_duration_days": 12.5,
          "current_probability": 0.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.005601401852451488,
            "low": 0.005601401852451488,
            "high": 0.005601401852451488
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
            "median": 0.015221941696667638,
            "low": 0.015221941696667638,
            "high": 0.015221941696667638
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.92,
          0.08
        ],
        [
          0.08130081300813008,
          0.9186991869918699
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.92,
            0.08
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
            115.0,
            10.0
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
        "text": "Liquidity score: 85.8 — Strong",
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
    "liq_subtitle": "Structural liquidity is sound relative to peers, but day-to-day access looks less supportive as volume has dropped and the bid is lighter.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent performance has lagged, with the stock down 6.6% over one month compared with peers down 1.8% and the market up 2.8%.",
    "perf_insight": "The stock has underperformed over one month, falling 6.6% while peers fell 1.8% and the market rose 2.8%. That matters because weaker price momentum sits alongside lighter near-term trading conditions, with 1D average volume down 37.9% from the 1M average.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Sector moves are the main current driver, with 48.2% of trading explained by the group rather than company-specific news.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly sector-driven, accounting for about 48.2% of price changes. Other influences are market 25.6%, and company-specific 26.2%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 25.6%, sector 48.2%, and company-specific 26.2%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has been consistently company-driven across Jan to Mar."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 25.6%, sector 48.2%, and company-specific 26.2%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "Current driver: Sector at 48.2%. Broader market or sector moves still explain a meaningful part of the tape, so the stock is not trading on company news alone. Recent flow does not show a clear deterioration from the monthly baseline.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: sector factors are leading, accounting for 48.2% of recent price moves.",
      "Monthly change: the pattern has shifted from clearly company-driven in January and February to mostly sector in March, and is now more balanced with sector influence stronger."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Trading conditions look balanced at the headline level, but immediate buy-side support is lighter than the broader liquidity profile",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on Apr 2, 2025 to Apr 2, 2026 (254 trading days • 98,170 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on top 10 bid and top 10 ask levels.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is lighter than the monthly baseline, so day-to-day access may feel weaker than the 1M score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "Buy-side support is the main watchpoint, with top-10 bid depth at 0.63x of ask depth while the spread remains 1",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 30.8% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Trading stays usable through the day, but the flow mix remains mixed rather than clearly one-sided.",
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
    "intraday_insight": "The spread is 1 tick, so headline trading cost looks",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Near-term liquidity is mixed, with thinner buy-side support despite a still-orderly spread.",
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
    "exec_subtitle": "Liquidity is mixed for the stock’s size, with solid peer-relative depth over six months but less supportive near-term trading conditions.",
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
        "value": "85.8/100",
        "sub": "Peer median 76.5 (+9.3 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "S$607.4K",
        "sub": "Peer median S$676.3K",
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
    "liq_insight": "Liquidity is mixed for the stock’s size, because the six-month liquidity score is 85.8 compared with a peer median of 76.5, but near-term trading conditions are less supportive. The clearest signs are 1D average volume running 37.9% below the 1M average and top-10 bid depth at just 0.63x of ask depth. That matters because peer-relative access looks sound over time, while immediate buying access can still feel thinner day to day.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "0.637",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "0.78%",
        "note": "1.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.63x",
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
        "text": "Estimated impact ~-0.81% with 100.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-2.01% with 92.7% fill.",
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
        "subtext": "Rank 80/558",
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
        "value": "607.4K",
        "value_prefix": "S$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-red-400",
        "color_bar": "bg-red-500",
        "subtext": "Peer median S$676.3K",
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
        "value": "48.2",
        "suffix": "sector",
        "bar_pct": 48,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 25.6% • Company 26.2%",
        "interpretation": {
          "text": "Sector",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is solid relative to peers, with a six-month liquidity score of 85.8 compared with a peer median of 76.5. That matters because the stock retains a stronger base of access than its peer group even though the overall picture remains mixed for its size.",
      "Near-term trading conditions are less supportive, with 1D average volume down 37.9% from the 1M average. That matters because day-to-day access looks thinner than the monthly backdrop.",
      "The main execution watchpoint is lighter buy-side support, with top-10 bid depth at 0.63x of ask depth while the spread is 1 tick. That matters because displayed trading cost looks orderly, but immediate buying access is less robust."
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
      "overall": "6M liquidity is strong: score 85.8 vs peer median 76.5 (+9.3 pts). 1D average volume down -37.9% from 1M. Recent flow does not show a clear deterioration from the monthly baseline.",
      "strengths": [
        "6M score 85.8 vs peer median 76.5 (+9.3 pts)."
      ],
      "concerns": [
        "1D average volume down -37.9% from 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: +9.3 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is -6.6%, worse than market and sector, which suggests weaker price performance than comparable names.",
        "vs_market": "Worse than market: -6.6% vs market 14.4%.",
        "vs_sector": "Worse than sector: -6.6% vs sector -3.4%.",
        "vs_peers": "In line with peers: -6.6% vs peers -6.9%."
      },
      "adv": {
        "insight": "ADV is S$607.4K, better than market, but worse than peers, which shows trading size is uneven across comparison groups.",
        "vs_market": "Better than market: S$607.4K vs market S$11.2K.",
        "vs_sector": "In line with sector: S$607.4K vs sector S$658.7K.",
        "vs_peers": "Worse than peers: S$607.4K vs peers S$676.3K."
      },
      "spread": {
        "insight": "Spread is 0.74%, better than market and peers, which keeps trading costs more competitive than comparable names.",
        "vs_market": "Better than market: 0.74% vs market 2.85%.",
        "vs_sector": "In line with sector: 0.74% vs sector 0.81%.",
        "vs_peers": "Better than peers: 0.74% vs peers 0.91%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.19%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.19% vs market 0.03%.",
        "vs_sector": "Better than sector: 0.19% vs sector 0.13%.",
        "vs_peers": "Better than peers: 0.19% vs peers 0.13%."
      },
      "volatility": {
        "insight": "Volatility is 13.95%, better than market, sector, and peers, which suggests day-to-day price swings are more contained than comparable names.",
        "vs_market": "Better than market: 13.95% vs market 43.88%.",
        "vs_sector": "Better than sector: 13.95% vs sector 16.75%.",
        "vs_peers": "Better than peers: 13.95% vs peers 18.59%."
      },
      "trades": {
        "insight": "Trades is 396, better than market, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 396 vs market 6.",
        "vs_sector": "In line with sector: 396 vs sector 402.",
        "vs_peers": "In line with peers: 396 vs peers 383."
      },
      "amihud": {
        "insight": "Price impact is 4.54e-09, better than market, but worse than peers, which shows price impact is mixed across comparison groups.",
        "vs_market": "Better than market: 4.54e-09 vs market 1.95e-07.",
        "vs_sector": "In line with sector: 4.54e-09 vs sector 4.80e-09.",
        "vs_peers": "Worse than peers: 4.54e-09 vs peers 3.04e-09."
      }
    },
    "performance": {
      "overall": "Recent performance is weak relative to both peers and the market, with a 1M return of -6.6% compared with -1.8% for peers and +2.8% for the market. Liquidity does not fully confirm that drop because the 6M liquidity score of 85.8 sits 9.3 points above the peer median, although the latest session was less supportive with 1D average volume down 37.9% from the 1M average.",
      "conclusion": "The move looks mainly sector-linked, but the stock is underperforming that backdrop and recent trading activity is thinner."
    },
    "drivers": {
      "overall": "Sector moves are the main force in the stock right now, with sector factors explaining 48.2% of recent price action. That matters because the shares have already underperformed over the past month, down 6.6% compared with peers down 1.8% and the market up 2.8%, so sector weakness is landing on a weaker tape.",
      "beta": "The current read looks mixed rather than fully established because average volume today is 37.9% below the monthly average. That makes the sector-led pattern more important for near-term trading conditions, as price moves may feel less supported by underlying flow.",
      "rolling_change": "The monthly picture has moved away from a clearly company-driven pattern. January and February were still clearly company-driven, March was mostly sector, and the current tape is now more balanced with sector influence taking the lead."
    },
    "regime": {
      "overall": "High volatility is the active backdrop, and its typical run length of about 11.3 days suggests this is more than a brief spike. That matters because trading conditions can stay uneven even when the spread remains at 1 tick.",
      "current": "The stock is currently in a high-volatility state, with recent price action also weak at -6.6% over one month compared with -1.8% for peers and +2.8% for the market.",
      "transitions": "This state looks relatively persistent rather than short-lived, with a typical run length of about 11.3 days. Even so, the picture is mixed because one-day average volume is 37.9% below the one-month average.",
      "trading_implications": "Trading conditions look active but less sturdy than the headline spread suggests, because top-10 bid depth is only 0.63x ask depth while volume is running below the monthly average."
    },
    "execution": {
      "overall": "Displayed liquidity looks mixed rather than fully balanced because the spread is 1 tick but top-10 bid depth is only 0.63x of ask depth. That matters because the screen looks orderly at the touch while buy-side support is thinner just below it.",
      "concern": "Trade-size percentiles use Apr 2, 2025 to Apr 2, 2026 history (254 trading days • 98,170 trades).",
      "peer_context": "The broader liquidity profile still screens well, with a 6M score of 85.8 compared with a peer median of 76.5, but the current book does not fully match that standing. That matters because near-term execution may feel less robust than the longer-period score suggests."
    },
    "trader_composition": {
      "overall": "Flow looks mixed on individual trade count and value, so the trading base does not read as clearly retail-led or institution-led.",
      "retail_heavy": "Retail-like trades dominate activity by count at 96.8%, but they account for only 28.1% of trade value, while institution-like trades are just 0.6% of count yet 37.4% of value. That split shows frequent smaller tickets alongside a meaningful share of value from larger tickets, which makes the flow mix look balanced rather than one-sided.",
      "institutional_gap": "Institution-like participation is sparse by count but meaningful by value, which suggests larger tickets are present even though they are infrequent.",
      "peer_comparison": "The mix looks unusual enough to warrant a peer read because count is overwhelmingly retail-like while value is more evenly shared, leaving this name less cleanly classified than a stock where count and value point the same way."
    },
    "price_moving": {
      "overall": "Price-moving activity looks mixed rather than dominated by one side of the flow. The cleanest read is the split between count and value: retail-like trades dominate the number of prints, while institution-like trades carry a larger share of value. That matters because price formation is likely being shaped by a small number of larger tickets alongside heavy day-to-day traffic.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity is material but not becoming a bigger drag on trading. Short interest is elevated, yet covering has accelerated by 77% month on month, which suggests short positioning is not adding fresh pressure to an already weak 1M share price move.",
      "level": "Elevated short interest",
      "correlation": "Moderate negative - shorts somewhat predict drops",
      "trend": "The near-term trend is improving because shorts are covering sharply. That pullback matters because it points away from short selling as the main force behind the current trading picture, even with the stock down 6.6% over 1M compared with peers down 1.8% and the market up 2.8%.",
      "peaks": "5 notable peak days identified."
    },
    "intraday": {
      "overall": "Trading is concentrated in the continuous session, with 86.5% of activity there compared with 4.2% at the open and 8.1% at the close. That points to liquidity being available through most of the day rather than only at the edges.",
      "hhi_interpretation": "A concentration score of 0.226 suggests activity is reasonably spread across the session, which supports a steadier flow profile.",
      "best_times": "The continuous session is the clearest source of liquidity because it carries the large majority of trading activity.",
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
        85.84229390681004,
        65.77060931899642,
        51.971326164874554,
        19.35483870967742,
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
        607437.5,
        92501.09406055909,
        39783.8,
        0.0,
        1260005.25,
        7933299.75,
        18307937.0
      ],
      "total": 558
    },
    "market_comparison": {
      "sector_name": "REIT - Retail",
      "sector_count": 8,
      "market_count": 558,
      "company": {
        "volatility": 0.1394603821678132,
        "adv": 607437.5,
        "spread_pct": 0.007380073800738015,
        "turnover_ratio": 0.0019402232658319784,
        "amihud": 4.537007254882173e-09,
        "trades": 395.5
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6903785092121039,
          "median": 0.43881713780057485,
          "min": 0.0,
          "max": 6.607874090810144,
          "p5": 0.15097011978763455,
          "p95": 2.1179487257066296,
          "count": 558
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 2520345.9882226796,
          "median": 11173.05,
          "min": 0.0,
          "max": 243597405.0,
          "p5": 0.0,
          "p95": 10423151.724999996,
          "count": 558
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.09208882228750546,
          "median": 0.02852371897291928,
          "min": 0.0002778915930896397,
          "max": 1.267605633802817,
          "p5": 0.003595212825290478,
          "p95": 0.46176599534943086,
          "count": 556
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0031903159608283557,
          "median": 0.0002788673146703366,
          "min": 0.0,
          "max": 0.8816162415134138,
          "p5": 0.0,
          "p95": 0.007105748516550527,
          "count": 552
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.342175038910886e-05,
          "median": 1.9492356657107546e-07,
          "min": 0.0,
          "max": 0.0012875000252631538,
          "p5": 0.0,
          "p95": 4.9002412932273264e-05,
          "count": 557
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 364.5044802867383,
          "median": 6.5,
          "min": 0.0,
          "max": 10294.0,
          "p5": 0.0,
          "p95": 2015.75,
          "count": 558
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.33267418677945415,
          "median": 0.1674558757801367,
          "min": 0.1113508719768271,
          "max": 1.189211449728041,
          "p5": 0.12118920054367223,
          "p95": 0.9727810891733881,
          "count": 8
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 8570585.330507569,
          "median": 658718.75,
          "min": 0.0,
          "max": 55454011.0,
          "p5": 13924.330000000002,
          "p95": 39685437.549999975,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.031772639583400535,
          "median": 0.008056849127443248,
          "min": 0.0042692302128051595,
          "max": 0.10752268329781241,
          "p5": 0.004333257557571803,
          "p95": 0.10673184940673598,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0023077092098980076,
          "median": 0.0012846568892152476,
          "min": 0.0,
          "max": 0.006654469842597678,
          "p5": 8.178866280625423e-05,
          "p95": 0.006480072905029737,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 7.158446863198049e-07,
          "median": 4.802548604517927e-09,
          "min": 0.0,
          "max": 5.678978692471941e-06,
          "p5": 3.3848990888613956e-11,
          "p95": 3.702442474088534e-06,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1081.125,
          "median": 401.5,
          "min": 0.0,
          "max": 5295.5,
          "p5": 7.000000000000001,
          "p95": 4059.824999999998,
          "count": 8
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 4605587.81567676,
          "median": 676253.1720302795,
          "min": 0.0,
          "max": 18307937.0,
          "p5": 9945.95,
          "p95": 15714277.6875,
          "count": 6
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 965.3333333333334,
          "median": 382.75,
          "min": 0.0,
          "max": 3149.0,
          "p5": 5.0,
          "p95": 2826.125,
          "count": 6
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.4056476938676942,
          "median": 0.18588161145711196,
          "min": 0.13061505638666018,
          "max": 1.189211449728041,
          "p5": 0.14082565308418954,
          "p95": 1.0346183350461464,
          "count": 6
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.040305250044820974,
          "median": 0.009060021656094219,
          "min": 0.004415685497073206,
          "max": 0.10752268329781241,
          "p5": 0.004939246689583624,
          "p95": 0.10695780194704353,
          "count": 6
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 2.328650683903613,
          "median": 1.0037461048679042,
          "min": 1.0,
          "max": 8.953125,
          "p5": 1.0000497542902749,
          "p95": 6.967615719131192,
          "count": 6
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 9.528443393537829e-07,
          "median": 3.042630560993269e-09,
          "min": 0.0,
          "max": 5.678978692471941e-06,
          "p5": 6.743207378144264e-11,
          "p95": 4.267167107912367e-06,
          "count": 6
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0039018042826074305,
          "median": 0.0012846568892152476,
          "min": 0.0,
          "max": 0.01579213423065487,
          "p5": 5.842047343303873e-05,
          "p95": 0.013048024621197918,
          "count": 6
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": -0.06617647058823561,
        "market": 0.027998545530102392,
        "sector": -0.012046321742862687,
        "peers": -0.017697837599445987
      },
      {
        "horizon": "3M",
        "stock": -0.06617647058823439,
        "market": 0.06484641064342056,
        "sector": -0.04545674060769689,
        "peers": -0.05159456999860179
      },
      {
        "horizon": "6M",
        "stock": -0.06617647058823506,
        "market": 0.14442806720316326,
        "sector": -0.03405059050274495,
        "peers": -0.06883745345161518
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
      "share_market": 0.2563278590488638,
      "share_sector": 0.4821046773935885,
      "share_idio": 0.2615674635575477,
      "beta_market": -0.35427342925877997,
      "beta_sector": 2.5419713210668715,
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
            "median": 0.2563278590488638,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "25.6%",
            "display_range": null,
            "display_text": "25.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 25.6,
            "plain_english": "Market explains about 25.6% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.4821046773935885,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "48.2%",
            "display_range": null,
            "display_text": "48.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 48.2,
            "plain_english": "Sector explains about 48.2% of price moves in the current state."
          },
          "company_share": {
            "median": 0.2615674635575477,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "26.2%",
            "display_range": null,
            "display_text": "26.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 26.2,
            "plain_english": "Company-specific explains about 26.2% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": -0.35427342925877997,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.35",
            "display_range": null,
            "display_text": "-0.35",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Modest",
            "plain_english": "Modest market link: a 1% market move has lined up with about a 0.35% stock move in the opposite direction in this state.",
            "value_num": -0.35
          },
          "beta_stock_lag": {
            "median": -1.1888197479508094,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-1.19",
            "display_range": null,
            "display_text": "-1.19",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -1.19
          },
          "beta_sector": {
            "median": 2.5419713210668715,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "2.54",
            "display_range": null,
            "display_text": "2.54",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "High",
            "plain_english": "High sector link: a 1% sector move has lined up with about a 2.54% stock move in the same direction in this state.",
            "value_num": 2.54
          },
          "beta_market_lag": {
            "median": 0.650797928527962,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.65",
            "display_range": null,
            "display_text": "0.65",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 0.65
          },
          "beta_sector_lag": {
            "median": -0.7570308900747087,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.76",
            "display_range": null,
            "display_text": "-0.76",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -0.76
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
            "n_obs": 17,
            "partial_month": true,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5470787497587595,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "54.7%",
              "display_range": null,
              "display_text": "54.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 54.7,
              "plain_english": "Company-specific explains about 54.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.30785391454437605,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "30.8%",
                "display_range": null,
                "display_text": "30.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 30.8,
                "plain_english": "Market explains about 30.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.14506733569686445,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "14.5%",
                "display_range": null,
                "display_text": "14.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 14.5,
                "plain_english": "Sector explains about 14.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5470787497587595,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "54.7%",
                "display_range": null,
                "display_text": "54.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 54.7,
                "plain_english": "Company-specific explains about 54.7% of price moves in the current state."
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
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5020080321285141,
            "expected_duration_days": 12.5,
            "current_probability": 0.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.005601401852451488,
              "low": 0.005601401852451488,
              "high": 0.005601401852451488
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
              "median": 0.015221941696667638,
              "low": 0.015221941696667638,
              "high": 0.015221941696667638
            },
            "volatility_label": "High Volatility",
            "current_probability_display": null
          }
        ],
        "transitions": {
          "mean": [
            [
              0.92,
              0.08
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
              115.0,
              10.0
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
          "market_link_display": "-0.35",
          "sector_link_display": "2.54",
          "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.35% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "High sector link. A 1% sector move has lined up with about a 2.54% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "-1.19",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "High Volatility",
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "driver_share_pct": 48.2,
          "driver_share_display": "48.2%",
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
          "month_key": "2025-04",
          "month_label": "April 2025",
          "month_short_label": "Apr",
          "period_label": "2025-04-07 to 2025-04-30",
          "n_obs": 17,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Apr: Mostly company-driven.",
          "share_market": 0.30785391454437605,
          "share_sector": 0.14506733569686445,
          "share_company": 0.5470787497587595,
          "share_market_display": "30.8%",
          "share_sector_display": "14.5%",
          "share_company_display": "54.7%",
          "dominant_share_display": "54.7%"
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
            "expected_duration_days": 12.5,
            "current_probability": 0.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.005601401852451488,
              "low": 0.005601401852451488,
              "high": 0.005601401852451488
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
              "median": 0.015221941696667638,
              "low": 0.015221941696667638,
              "high": 0.015221941696667638
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.92,
            0.08
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
          "price": 0.635,
          "quantity": 744300.0,
          "value": 472630.5
        },
        {
          "level": 2,
          "price": 0.63,
          "quantity": 1585300.0,
          "value": 998739.0
        },
        {
          "level": 3,
          "price": 0.625,
          "quantity": 323900.0,
          "value": 202437.5
        },
        {
          "level": 4,
          "price": 0.62,
          "quantity": 268100.0,
          "value": 166222.0
        },
        {
          "level": 5,
          "price": 0.615,
          "quantity": 149200.0,
          "value": 91758.0
        },
        {
          "level": 6,
          "price": 0.61,
          "quantity": 173900.0,
          "value": 106079.0
        },
        {
          "level": 7,
          "price": 0.605,
          "quantity": 184400.0,
          "value": 111562.0
        },
        {
          "level": 8,
          "price": 0.6,
          "quantity": 209000.0,
          "value": 125400.0
        },
        {
          "level": 9,
          "price": 0.595,
          "quantity": 72900.0,
          "value": 43375.5
        },
        {
          "level": 10,
          "price": 0.59,
          "quantity": 100.0,
          "value": 59.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.64,
          "quantity": 1249100.0,
          "value": 799424.0
        },
        {
          "level": 2,
          "price": 0.645,
          "quantity": 895200.0,
          "value": 577404.0
        },
        {
          "level": 3,
          "price": 0.65,
          "quantity": 1048100.0,
          "value": 681265.0
        },
        {
          "level": 4,
          "price": 0.655,
          "quantity": 621600.0,
          "value": 407148.0
        },
        {
          "level": 5,
          "price": 0.66,
          "quantity": 150700.0,
          "value": 99462.0
        },
        {
          "level": 6,
          "price": 0.665,
          "quantity": 102800.0,
          "value": 68362.0
        },
        {
          "level": 7,
          "price": 0.67,
          "quantity": 297700.0,
          "value": 199459.0
        },
        {
          "level": 8,
          "price": 0.675,
          "quantity": 85300.0,
          "value": 57577.50000000001
        },
        {
          "level": 9,
          "price": 0.68,
          "quantity": 1116800.0,
          "value": 759424.0
        },
        {
          "level": 10,
          "price": 0.685,
          "quantity": 80800.0,
          "value": 55348.00000000001
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-04-02 08:59:59.354400",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 0.6375,
        "spread_pct": 0.007843137254901968,
        "spread_ticks": 1.0,
        "tick_size": 0.005,
        "bid_depth_notional_top10": 2318262.5,
        "ask_depth_notional_top10": 3704873.5,
        "bid_ask_depth_ratio": 0.6257
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 366,
        "history_limited": false,
        "trade_days_used": 254,
        "n_trades_used": 98170,
        "first_trade_date": "2025-04-02",
        "last_trade_date": "2026-04-02",
        "window_label": "Apr 2, 2025 to Apr 2, 2026",
        "window_short_label": "Apr 2, 2025 to Apr 2, 2026",
        "trade_days_label": "254 trading days",
        "trade_count_label": "98,170 trades",
        "window_detail_label": "254 trading days • 98,170 trades",
        "history_note": "Trade-size percentiles use Apr 2, 2025 to Apr 2, 2026 history (254 trading days • 98,170 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 3475.0,
            "impact_pct": -0.003922,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.15,
            "pct_of_adv": 0.44
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 8100.0,
            "impact_pct": -0.003922,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.35,
            "pct_of_adv": 1.03
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 340000.0,
            "impact_pct": -0.003922,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 14.67,
            "pct_of_adv": 43.07
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-04-02",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "8125135567689201664",
            "timestamp": "2026-04-01 22:59:00.907400000",
            "local_timestamp": "2026-04-02 06:59:00",
            "posted_price": 0.69,
            "size_shares": 1000000.0,
            "notional": 690000.0,
            "impact_pct": -0.006405999999999999,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 29.76,
            "price_vs_mid_pct": 8.235,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "8131681785044905984",
            "timestamp": "2026-04-02 00:55:15.915100000",
            "local_timestamp": "2026-04-02 08:55:15",
            "posted_price": 0.64,
            "size_shares": 770000.0,
            "notional": 492800.0,
            "impact_pct": -0.004245,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 21.26,
            "price_vs_mid_pct": 0.392,
            "executed_event_count": 0,
            "event_count": 3
          },
          {
            "rank": 3,
            "order_id": "8131681785046007808",
            "timestamp": "2026-04-01 22:59:00.907400000",
            "local_timestamp": "2026-04-02 06:59:00",
            "posted_price": 0.655,
            "size_shares": 500000.0,
            "notional": 327500.0,
            "impact_pct": -0.003922,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 14.13,
            "price_vs_mid_pct": 2.745,
            "executed_event_count": 0,
            "event_count": 1
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-04-02",
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
            "spread_pct": 0.007843137254901968,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2021536.0,
            "ask_depth_notional": 3786163.0,
            "mid_price": 0.6375
          },
          {
            "bucket": "09:30",
            "spread_pct": 0.007843137254901968,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2024714.5,
            "ask_depth_notional": 3804147.0,
            "mid_price": 0.6375
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.007843137254901968,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2168068.5,
            "ask_depth_notional": 3813235.0,
            "mid_price": 0.6375
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.007843137254901968,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2245037.5,
            "ask_depth_notional": 3814714.5,
            "mid_price": 0.6375
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.007843137254901968,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2265512.0,
            "ask_depth_notional": 3812858.5,
            "mid_price": 0.6375
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.007843137254901968,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2306454.0,
            "ask_depth_notional": 3723194.5,
            "mid_price": 0.6375
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.007843137254901968,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2296328.5,
            "ask_depth_notional": 3755274.0,
            "mid_price": 0.6375
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.007843137254901968,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2313848.0,
            "ask_depth_notional": 3787772.0,
            "mid_price": 0.6375
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.007843137254901968,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2330866.0,
            "ask_depth_notional": 3787388.0,
            "mid_price": 0.6375
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.007843137254901968,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2329125.0,
            "ask_depth_notional": 3786876.0,
            "mid_price": 0.6375
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.007843137254901968,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2349266.0,
            "ask_depth_notional": 3784444.0,
            "mid_price": 0.6375
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.007843137254901968,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2344630.5,
            "ask_depth_notional": 3778364.0,
            "mid_price": 0.6375
          },
          {
            "bucket": "16:00",
            "spread_pct": 0.007843137254901968,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2343605.0,
            "ask_depth_notional": 3776316.0,
            "mid_price": 0.6375
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.007843137254901968,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2318262.5,
            "ask_depth_notional": 3704873.5,
            "mid_price": 0.6375
          }
        ],
        "summary": {
          "median_spread_pct": 0.007843137254901968,
          "median_spread_ticks": 1.0000000000000009,
          "median_bid_depth_notional": 2310151.0,
          "median_ask_depth_notional": 3786519.5,
          "tightest_bucket": "09:00",
          "widest_bucket": "09:00",
          "deepest_bid_bucket": "15:00",
          "thinnest_bid_bucket": "09:00"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 6.3,
      "peers": [
        {
          "ticker": "AJBU",
          "pct": 4.0
        },
        {
          "ticker": "JYEU",
          "pct": 12.2
        },
        {
          "ticker": "AU8U",
          "pct": 77.9
        },
        {
          "ticker": "ODBU",
          "pct": 926.3
        },
        {
          "ticker": "D5IU",
          "pct": 14071.4
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
          "n_trades": 683,
          "n_runs": 0,
          "n_trade_days": 0,
          "first_trade_date": "2026-04-02",
          "last_trade_date": "2026-04-02",
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
            "retail_pct": 0.9970717423133236,
            "mixed_pct": 0.0029282576866764276,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.659345584939489,
            "mixed_qty_pct": 0.340654415060511,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6591929514425667,
            "mixed_notional_pct": 0.34080704855743327,
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
            "avg": 207.8865300146413,
            "median": 63.5
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
              "retail_pct": 0.9970717423133236,
              "mixed_pct": 0.0029282576866764276,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.659345584939489,
              "mixed_qty_pct": 0.340654415060511,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.6591929514425667,
              "mixed_notional_pct": 0.34080704855743327,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 207.8865300146413,
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
              "avg_trade_size": 288.4,
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
              "retail_pct": 0.9771573604060914,
              "mixed_pct": 0.021573604060913704,
              "instit_pct": 0.0012690355329949238,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.4237730061349693,
              "mixed_qty_pct": 0.4335889570552147,
              "instit_qty_pct": 0.14263803680981596,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.4237174930325399,
              "mixed_notional_pct": 0.4328964155242543,
              "instit_notional_pct": 0.1433860914432058,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1078.253807106599,
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
              "retail_pct": 0.9744306831801838,
              "mixed_pct": 0.017179384738314023,
              "instit_pct": 0.008389932081502197,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.24975849831711458,
              "mixed_qty_pct": 0.20773212124909754,
              "instit_qty_pct": 0.5425093804337878,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.25003378185399966,
              "mixed_notional_pct": 0.20754388613288507,
              "instit_notional_pct": 0.5424223320131153,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2094.766080703156,
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
              "retail_pct": 0.9385722191477587,
              "mixed_pct": 0.045932484781405644,
              "instit_pct": 0.01549529607083564,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.3055375269347595,
              "mixed_qty_pct": 0.3017471896985903,
              "instit_qty_pct": 0.39271528336665024,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3049675473851168,
              "mixed_notional_pct": 0.30175785824774454,
              "instit_notional_pct": 0.3932745943671387,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4737.143884892086,
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
              "retail_pct": 0.8,
              "mixed_pct": 0.2,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.42479908151549944,
              "mixed_qty_pct": 0.5752009184845006,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.42503206642813746,
              "mixed_notional_pct": 0.5749679335718626,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4443.9,
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
              "ticker": "D5IU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.75,
              "mixed_pct": 0.25,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.22983498120240817,
              "mixed_qty_pct": 0.7701650187975918,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.23020724335292017,
              "mixed_notional_pct": 0.7697927566470798,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 10354.735,
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
          "n_trades": 7741,
          "n_runs": 0,
          "n_trade_days": 0,
          "first_trade_date": "2026-03-05",
          "last_trade_date": "2026-04-02",
          "period_days": 28,
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
            "retail_pct": 0.9609869525901047,
            "mixed_pct": 0.033587391809843686,
            "instit_pct": 0.005425655600051673,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.29207560753430695,
            "mixed_qty_pct": 0.4093693984896124,
            "instit_qty_pct": 0.29855499397608065,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.29225882102972833,
            "mixed_notional_pct": 0.4097849062928685,
            "instit_notional_pct": 0.29795627267740316,
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
            "avg": 2296.3917452525516,
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
              "retail_pct": 0.9609869525901047,
              "mixed_pct": 0.033587391809843686,
              "instit_pct": 0.005425655600051673,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.29207560753430695,
              "mixed_qty_pct": 0.4093693984896124,
              "instit_qty_pct": 0.29855499397608065,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.29225882102972833,
              "mixed_notional_pct": 0.4097849062928685,
              "instit_notional_pct": 0.29795627267740316,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2296.3917452525516,
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
              "retail_pct": 0.9979591836734694,
              "mixed_pct": 0.0020408163265306124,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.7667638483965015,
              "mixed_qty_pct": 0.23323615160349853,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.787406724946725,
              "mixed_notional_pct": 0.2125932750532749,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 145.08877551020407,
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
              "retail_pct": 0.973621103117506,
              "mixed_pct": 0.026378896882494004,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.38219308494011633,
              "mixed_qty_pct": 0.6178069150598837,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3932464178917873,
              "mixed_notional_pct": 0.6067535821082128,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1279.3565947242205,
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
              "retail_pct": 0.9656741385078622,
              "mixed_pct": 0.03185011709601874,
              "instit_pct": 0.0024757443961191034,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.3676752095452265,
              "mixed_qty_pct": 0.4569665656884792,
              "instit_qty_pct": 0.17535822476629434,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3673102037794233,
              "mixed_notional_pct": 0.45682851391059154,
              "instit_notional_pct": 0.17586128230998516,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1871.5878889260623,
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
              "retail_pct": 0.961695805263265,
              "mixed_pct": 0.026031384202063787,
              "instit_pct": 0.012272810534671198,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.23635763442994406,
              "mixed_qty_pct": 0.21164274113659984,
              "instit_qty_pct": 0.5519996244334561,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.236519896887162,
              "mixed_notional_pct": 0.21177585820004202,
              "instit_notional_pct": 0.551704244912796,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3774.9906071275923,
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
              "retail_pct": 0.9120012616306576,
              "mixed_pct": 0.05980917836303422,
              "instit_pct": 0.028189560006308154,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.20122026486095682,
              "mixed_qty_pct": 0.21687381138261952,
              "instit_qty_pct": 0.5819059237564237,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.20079915080340904,
              "mixed_notional_pct": 0.21677725710539766,
              "instit_notional_pct": 0.5824235920911933,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 8275.027401040845,
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
              "retail_pct": 0.8231441048034934,
              "mixed_pct": 0.15283842794759825,
              "instit_pct": 0.024017467248908297,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.24063478732524976,
              "mixed_qty_pct": 0.4609206865781324,
              "instit_qty_pct": 0.29844452609661787,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.2406868782559356,
              "mixed_notional_pct": 0.461448879628784,
              "instit_notional_pct": 0.2978642421152804,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 6347.367903930131,
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
        "3m": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 17304,
          "n_runs": 0,
          "n_trade_days": 0,
          "first_trade_date": "2026-01-02",
          "last_trade_date": "2026-04-02",
          "period_days": 90,
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
            "retail_pct": 0.9554438280166435,
            "mixed_pct": 0.035483125288950534,
            "instit_pct": 0.009073046694405918,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.23372087033636504,
            "mixed_qty_pct": 0.35507596439912736,
            "instit_qty_pct": 0.41120316526450756,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.23275681640117263,
            "mixed_notional_pct": 0.3541723282841381,
            "instit_notional_pct": 0.4130708553146893,
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
            "avg": 2792.3479542302357,
            "median": 128.0
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
              "retail_pct": 0.9554438280166435,
              "mixed_pct": 0.035483125288950534,
              "instit_pct": 0.009073046694405918,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.23372087033636504,
              "mixed_qty_pct": 0.35507596439912736,
              "instit_qty_pct": 0.41120316526450756,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.23275681640117263,
              "mixed_notional_pct": 0.3541723282841381,
              "instit_notional_pct": 0.4130708553146893,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2792.3479542302357,
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
              "retail_pct": 0.9966914805624483,
              "mixed_pct": 0.0033085194375516956,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.7060518731988472,
              "mixed_qty_pct": 0.29394812680115273,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.7096786981841096,
              "mixed_notional_pct": 0.29032130181589044,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 198.20885028949544,
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
              "retail_pct": 0.9631501416430595,
              "mixed_pct": 0.03320113314447592,
              "instit_pct": 0.003648725212464589,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.36459850903418994,
              "mixed_qty_pct": 0.43028963013081084,
              "instit_qty_pct": 0.20511186083499922,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3659848365243586,
              "mixed_notional_pct": 0.4281275721812245,
              "instit_notional_pct": 0.20588759129441692,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2109.917133144476,
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
              "retail_pct": 0.9535729232056915,
              "mixed_pct": 0.03055032433563507,
              "instit_pct": 0.015876752458673364,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.2002380234753752,
              "mixed_qty_pct": 0.2051274445029738,
              "instit_qty_pct": 0.5946345320216511,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.1989255518193774,
              "mixed_notional_pct": 0.20515085589211504,
              "instit_notional_pct": 0.5959235922885076,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4651.4498761944615,
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
              "retail_pct": 0.9472211115553778,
              "mixed_pct": 0.04758096761295482,
              "instit_pct": 0.005197920831667333,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.3450389373028828,
              "mixed_qty_pct": 0.48381496444428523,
              "instit_qty_pct": 0.17114609825283192,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3546940636893137,
              "mixed_notional_pct": 0.47798605639840885,
              "instit_notional_pct": 0.16731987991227745,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2825.909676129548,
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
              "retail_pct": 0.9219484971697361,
              "mixed_pct": 0.05353277034692964,
              "instit_pct": 0.024518732483334253,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.1980491400185169,
              "mixed_qty_pct": 0.19408116074720425,
              "instit_qty_pct": 0.6078696992342789,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.19789849055992348,
              "mixed_notional_pct": 0.19409523519292393,
              "instit_notional_pct": 0.6080062742471526,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 8192.616138943573,
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
              "retail_pct": 0.8508005822416302,
              "mixed_pct": 0.12882096069868995,
              "instit_pct": 0.020378457059679767,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.24198612085345175,
              "mixed_qty_pct": 0.43918849896825773,
              "instit_qty_pct": 0.3188253801782905,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.24195914986676842,
              "mixed_notional_pct": 0.438457165521399,
              "instit_notional_pct": 0.3195836846118326,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5653.60480349345,
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
          "n_trades": 42802,
          "n_runs": 0,
          "n_trade_days": 0,
          "first_trade_date": "2025-10-02",
          "last_trade_date": "2026-04-02",
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
            "retail_pct": 0.9682257838418765,
            "mixed_pct": 0.025886640811177048,
            "instit_pct": 0.005887575346946405,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.28127949297909227,
            "mixed_qty_pct": 0.3461366828555136,
            "instit_qty_pct": 0.37258382416539415,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.2807679917257624,
            "mixed_notional_pct": 0.34542148581386867,
            "instit_notional_pct": 0.37381052246036894,
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
            "avg": 2064.1872459230876,
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
              "retail_pct": 0.9682257838418765,
              "mixed_pct": 0.025886640811177048,
              "instit_pct": 0.005887575346946405,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.28127949297909227,
              "mixed_qty_pct": 0.3461366828555136,
              "instit_qty_pct": 0.37258382416539415,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.2807679917257624,
              "mixed_notional_pct": 0.34542148581386867,
              "instit_notional_pct": 0.37381052246036894,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2064.1872459230876,
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
              "retail_pct": 0.9961627014581734,
              "mixed_pct": 0.003837298541826554,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.7029702970297029,
              "mixed_qty_pct": 0.297029702970297,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.7066451477965531,
              "mixed_notional_pct": 0.293354852203447,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 245.8472755180353,
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
              "retail_pct": 0.9605263157894737,
              "mixed_pct": 0.0356203007518797,
              "instit_pct": 0.0038533834586466165,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.3633205011311089,
              "mixed_qty_pct": 0.4424663763956641,
              "instit_qty_pct": 0.194213122473227,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3637970297939295,
              "mixed_notional_pct": 0.4420833807549671,
              "instit_notional_pct": 0.19411958945110339,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2241.907035445757,
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
              "retail_pct": 0.9592608147837043,
              "mixed_pct": 0.0371692566148677,
              "instit_pct": 0.0035699286014279717,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.41804689446501986,
              "mixed_qty_pct": 0.4410683130535259,
              "instit_qty_pct": 0.14088479248145422,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.4503065918216039,
              "mixed_notional_pct": 0.42112554648535094,
              "instit_notional_pct": 0.12856786169304507,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2397.5947711045783,
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
              "retail_pct": 0.952506772482735,
              "mixed_pct": 0.03094833835705292,
              "instit_pct": 0.016544889160212142,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.1950748318234355,
              "mixed_qty_pct": 0.20709325378485083,
              "instit_qty_pct": 0.5978319143917137,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.19433247826684424,
              "mixed_notional_pct": 0.20736417110393213,
              "instit_notional_pct": 0.5983033506292236,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4682.196051451791,
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
              "retail_pct": 0.9263170066903444,
              "mixed_pct": 0.0518278681754357,
              "instit_pct": 0.021855125134219874,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.21395724914308278,
              "mixed_qty_pct": 0.217003204418446,
              "instit_qty_pct": 0.5690395464384712,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.21410364315459837,
              "mixed_notional_pct": 0.21771975023470827,
              "instit_notional_pct": 0.5681766066106934,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 7080.454186834063,
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
              "retail_pct": 0.8939626110940851,
              "mixed_pct": 0.09132699969353356,
              "instit_pct": 0.014710389212381244,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.283865959863688,
              "mixed_qty_pct": 0.42856872396819384,
              "instit_qty_pct": 0.28756531616811815,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.28255610646689205,
              "mixed_notional_pct": 0.4286328115424859,
              "instit_notional_pct": 0.28881108199062205,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4182.095157830217,
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
      "n_trades": 42802,
      "n_runs": 0,
      "n_trade_days": 0,
      "first_trade_date": "2025-10-02",
      "last_trade_date": "2026-04-02",
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
        "retail_pct": 0.9682257838418765,
        "mixed_pct": 0.025886640811177048,
        "instit_pct": 0.005887575346946405,
        "ambiguous_pct": null,
        "unobservable_pct": null,
        "unclear_pct": null,
        "retail_qty_pct": null,
        "mixed_qty_pct": null,
        "instit_qty_pct": null,
        "ambiguous_qty_pct": null,
        "unobservable_qty_pct": null,
        "unclear_qty_pct": null,
        "retail_notional_pct": 0.2807679917257624,
        "mixed_notional_pct": 0.34542148581386867,
        "instit_notional_pct": 0.37381052246036894,
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
        "avg": 2064.1872459230876,
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
            "n_trades": 407,
            "n_runs": 0,
            "retail_pct": 0.9606879606879607,
            "mixed_pct": 0.029484029484029485,
            "instit_pct": 0.009828009828009828,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 3518.0135135135133,
            "avg_run_notional": null,
            "retail_qty_pct": 0.1590505767524401,
            "mixed_qty_pct": 0.240905057675244,
            "instit_qty_pct": 0.6000443655723159,
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
            "total_quantity": 2254000.0
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
          "retail_pct": 0.9682257838418765,
          "mixed_pct": 0.025886640811177048,
          "instit_pct": 0.005887575346946405,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.28127949297909227,
          "mixed_qty_pct": 0.3461366828555136,
          "instit_qty_pct": 0.37258382416539415,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.2807679917257624,
          "mixed_notional_pct": 0.34542148581386867,
          "instit_notional_pct": 0.37381052246036894,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 2064.1872459230876,
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
          "retail_pct": 0.9961627014581734,
          "mixed_pct": 0.003837298541826554,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.7029702970297029,
          "mixed_qty_pct": 0.297029702970297,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.7066451477965531,
          "mixed_notional_pct": 0.293354852203447,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 245.8472755180353,
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
          "retail_pct": 0.9605263157894737,
          "mixed_pct": 0.0356203007518797,
          "instit_pct": 0.0038533834586466165,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.3633205011311089,
          "mixed_qty_pct": 0.4424663763956641,
          "instit_qty_pct": 0.194213122473227,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.3637970297939295,
          "mixed_notional_pct": 0.4420833807549671,
          "instit_notional_pct": 0.19411958945110339,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 2241.907035445757,
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
          "retail_pct": 0.9592608147837043,
          "mixed_pct": 0.0371692566148677,
          "instit_pct": 0.0035699286014279717,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.41804689446501986,
          "mixed_qty_pct": 0.4410683130535259,
          "instit_qty_pct": 0.14088479248145422,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.4503065918216039,
          "mixed_notional_pct": 0.42112554648535094,
          "instit_notional_pct": 0.12856786169304507,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 2397.5947711045783,
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
          "retail_pct": 0.952506772482735,
          "mixed_pct": 0.03094833835705292,
          "instit_pct": 0.016544889160212142,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.1950748318234355,
          "mixed_qty_pct": 0.20709325378485083,
          "instit_qty_pct": 0.5978319143917137,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.19433247826684424,
          "mixed_notional_pct": 0.20736417110393213,
          "instit_notional_pct": 0.5983033506292236,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 4682.196051451791,
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
          "retail_pct": 0.9263170066903444,
          "mixed_pct": 0.0518278681754357,
          "instit_pct": 0.021855125134219874,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.21395724914308278,
          "mixed_qty_pct": 0.217003204418446,
          "instit_qty_pct": 0.5690395464384712,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.21410364315459837,
          "mixed_notional_pct": 0.21771975023470827,
          "instit_notional_pct": 0.5681766066106934,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 7080.454186834063,
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
          "retail_pct": 0.8939626110940851,
          "mixed_pct": 0.09132699969353356,
          "instit_pct": 0.014710389212381244,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.283865959863688,
          "mixed_qty_pct": 0.42856872396819384,
          "instit_qty_pct": 0.28756531616811815,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.28255610646689205,
          "mixed_notional_pct": 0.4286328115424859,
          "instit_notional_pct": 0.28881108199062205,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 4182.095157830217,
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
            "retail_pct": 0.9970717423133236,
            "mixed_pct": 0.0029282576866764276,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.659345584939489,
            "mixed_qty_pct": 0.340654415060511,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6591929514425667,
            "mixed_notional_pct": 0.34080704855743327,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 207.8865300146413,
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
            "avg_trade_size": 288.4,
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
            "retail_pct": 0.9771573604060914,
            "mixed_pct": 0.021573604060913704,
            "instit_pct": 0.0012690355329949238,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.4237730061349693,
            "mixed_qty_pct": 0.4335889570552147,
            "instit_qty_pct": 0.14263803680981596,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.4237174930325399,
            "mixed_notional_pct": 0.4328964155242543,
            "instit_notional_pct": 0.1433860914432058,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1078.253807106599,
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
            "retail_pct": 0.9744306831801838,
            "mixed_pct": 0.017179384738314023,
            "instit_pct": 0.008389932081502197,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.24975849831711458,
            "mixed_qty_pct": 0.20773212124909754,
            "instit_qty_pct": 0.5425093804337878,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.25003378185399966,
            "mixed_notional_pct": 0.20754388613288507,
            "instit_notional_pct": 0.5424223320131153,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2094.766080703156,
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
            "retail_pct": 0.9385722191477587,
            "mixed_pct": 0.045932484781405644,
            "instit_pct": 0.01549529607083564,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3055375269347595,
            "mixed_qty_pct": 0.3017471896985903,
            "instit_qty_pct": 0.39271528336665024,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3049675473851168,
            "mixed_notional_pct": 0.30175785824774454,
            "instit_notional_pct": 0.3932745943671387,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4737.143884892086,
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
            "retail_pct": 0.8,
            "mixed_pct": 0.2,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.42479908151549944,
            "mixed_qty_pct": 0.5752009184845006,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.42503206642813746,
            "mixed_notional_pct": 0.5749679335718626,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4443.9,
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
            "ticker": "D5IU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.75,
            "mixed_pct": 0.25,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.22983498120240817,
            "mixed_qty_pct": 0.7701650187975918,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.23020724335292017,
            "mixed_notional_pct": 0.7697927566470798,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 10354.735,
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
            "retail_pct": 0.9609869525901047,
            "mixed_pct": 0.033587391809843686,
            "instit_pct": 0.005425655600051673,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.29207560753430695,
            "mixed_qty_pct": 0.4093693984896124,
            "instit_qty_pct": 0.29855499397608065,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.29225882102972833,
            "mixed_notional_pct": 0.4097849062928685,
            "instit_notional_pct": 0.29795627267740316,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2296.3917452525516,
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
            "retail_pct": 0.9979591836734694,
            "mixed_pct": 0.0020408163265306124,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.7667638483965015,
            "mixed_qty_pct": 0.23323615160349853,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.787406724946725,
            "mixed_notional_pct": 0.2125932750532749,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 145.08877551020407,
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
            "retail_pct": 0.973621103117506,
            "mixed_pct": 0.026378896882494004,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.38219308494011633,
            "mixed_qty_pct": 0.6178069150598837,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3932464178917873,
            "mixed_notional_pct": 0.6067535821082128,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1279.3565947242205,
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
            "retail_pct": 0.9656741385078622,
            "mixed_pct": 0.03185011709601874,
            "instit_pct": 0.0024757443961191034,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3676752095452265,
            "mixed_qty_pct": 0.4569665656884792,
            "instit_qty_pct": 0.17535822476629434,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3673102037794233,
            "mixed_notional_pct": 0.45682851391059154,
            "instit_notional_pct": 0.17586128230998516,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1871.5878889260623,
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
            "retail_pct": 0.961695805263265,
            "mixed_pct": 0.026031384202063787,
            "instit_pct": 0.012272810534671198,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.23635763442994406,
            "mixed_qty_pct": 0.21164274113659984,
            "instit_qty_pct": 0.5519996244334561,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.236519896887162,
            "mixed_notional_pct": 0.21177585820004202,
            "instit_notional_pct": 0.551704244912796,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3774.9906071275923,
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
            "retail_pct": 0.9120012616306576,
            "mixed_pct": 0.05980917836303422,
            "instit_pct": 0.028189560006308154,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.20122026486095682,
            "mixed_qty_pct": 0.21687381138261952,
            "instit_qty_pct": 0.5819059237564237,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.20079915080340904,
            "mixed_notional_pct": 0.21677725710539766,
            "instit_notional_pct": 0.5824235920911933,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 8275.027401040845,
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
            "retail_pct": 0.8231441048034934,
            "mixed_pct": 0.15283842794759825,
            "instit_pct": 0.024017467248908297,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.24063478732524976,
            "mixed_qty_pct": 0.4609206865781324,
            "instit_qty_pct": 0.29844452609661787,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.2406868782559356,
            "mixed_notional_pct": 0.461448879628784,
            "instit_notional_pct": 0.2978642421152804,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 6347.367903930131,
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
        "3m": [
          {
            "ticker": "CRPU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.9554438280166435,
            "mixed_pct": 0.035483125288950534,
            "instit_pct": 0.009073046694405918,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.23372087033636504,
            "mixed_qty_pct": 0.35507596439912736,
            "instit_qty_pct": 0.41120316526450756,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.23275681640117263,
            "mixed_notional_pct": 0.3541723282841381,
            "instit_notional_pct": 0.4130708553146893,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2792.3479542302357,
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
            "retail_pct": 0.9966914805624483,
            "mixed_pct": 0.0033085194375516956,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.7060518731988472,
            "mixed_qty_pct": 0.29394812680115273,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.7096786981841096,
            "mixed_notional_pct": 0.29032130181589044,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 198.20885028949544,
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
            "retail_pct": 0.9631501416430595,
            "mixed_pct": 0.03320113314447592,
            "instit_pct": 0.003648725212464589,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.36459850903418994,
            "mixed_qty_pct": 0.43028963013081084,
            "instit_qty_pct": 0.20511186083499922,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3659848365243586,
            "mixed_notional_pct": 0.4281275721812245,
            "instit_notional_pct": 0.20588759129441692,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2109.917133144476,
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
            "retail_pct": 0.9535729232056915,
            "mixed_pct": 0.03055032433563507,
            "instit_pct": 0.015876752458673364,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2002380234753752,
            "mixed_qty_pct": 0.2051274445029738,
            "instit_qty_pct": 0.5946345320216511,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.1989255518193774,
            "mixed_notional_pct": 0.20515085589211504,
            "instit_notional_pct": 0.5959235922885076,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4651.4498761944615,
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
            "retail_pct": 0.9472211115553778,
            "mixed_pct": 0.04758096761295482,
            "instit_pct": 0.005197920831667333,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3450389373028828,
            "mixed_qty_pct": 0.48381496444428523,
            "instit_qty_pct": 0.17114609825283192,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3546940636893137,
            "mixed_notional_pct": 0.47798605639840885,
            "instit_notional_pct": 0.16731987991227745,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2825.909676129548,
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
            "retail_pct": 0.9219484971697361,
            "mixed_pct": 0.05353277034692964,
            "instit_pct": 0.024518732483334253,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.1980491400185169,
            "mixed_qty_pct": 0.19408116074720425,
            "instit_qty_pct": 0.6078696992342789,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.19789849055992348,
            "mixed_notional_pct": 0.19409523519292393,
            "instit_notional_pct": 0.6080062742471526,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 8192.616138943573,
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
            "retail_pct": 0.8508005822416302,
            "mixed_pct": 0.12882096069868995,
            "instit_pct": 0.020378457059679767,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.24198612085345175,
            "mixed_qty_pct": 0.43918849896825773,
            "instit_qty_pct": 0.3188253801782905,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.24195914986676842,
            "mixed_notional_pct": 0.438457165521399,
            "instit_notional_pct": 0.3195836846118326,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5653.60480349345,
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
            "retail_pct": 0.9682257838418765,
            "mixed_pct": 0.025886640811177048,
            "instit_pct": 0.005887575346946405,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.28127949297909227,
            "mixed_qty_pct": 0.3461366828555136,
            "instit_qty_pct": 0.37258382416539415,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.2807679917257624,
            "mixed_notional_pct": 0.34542148581386867,
            "instit_notional_pct": 0.37381052246036894,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2064.1872459230876,
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
            "retail_pct": 0.9961627014581734,
            "mixed_pct": 0.003837298541826554,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.7029702970297029,
            "mixed_qty_pct": 0.297029702970297,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.7066451477965531,
            "mixed_notional_pct": 0.293354852203447,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 245.8472755180353,
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
            "retail_pct": 0.9605263157894737,
            "mixed_pct": 0.0356203007518797,
            "instit_pct": 0.0038533834586466165,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3633205011311089,
            "mixed_qty_pct": 0.4424663763956641,
            "instit_qty_pct": 0.194213122473227,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3637970297939295,
            "mixed_notional_pct": 0.4420833807549671,
            "instit_notional_pct": 0.19411958945110339,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2241.907035445757,
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
            "retail_pct": 0.9592608147837043,
            "mixed_pct": 0.0371692566148677,
            "instit_pct": 0.0035699286014279717,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.41804689446501986,
            "mixed_qty_pct": 0.4410683130535259,
            "instit_qty_pct": 0.14088479248145422,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.4503065918216039,
            "mixed_notional_pct": 0.42112554648535094,
            "instit_notional_pct": 0.12856786169304507,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2397.5947711045783,
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
            "retail_pct": 0.952506772482735,
            "mixed_pct": 0.03094833835705292,
            "instit_pct": 0.016544889160212142,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.1950748318234355,
            "mixed_qty_pct": 0.20709325378485083,
            "instit_qty_pct": 0.5978319143917137,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.19433247826684424,
            "mixed_notional_pct": 0.20736417110393213,
            "instit_notional_pct": 0.5983033506292236,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4682.196051451791,
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
            "retail_pct": 0.9263170066903444,
            "mixed_pct": 0.0518278681754357,
            "instit_pct": 0.021855125134219874,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.21395724914308278,
            "mixed_qty_pct": 0.217003204418446,
            "instit_qty_pct": 0.5690395464384712,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.21410364315459837,
            "mixed_notional_pct": 0.21771975023470827,
            "instit_notional_pct": 0.5681766066106934,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 7080.454186834063,
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
            "retail_pct": 0.8939626110940851,
            "mixed_pct": 0.09132699969353356,
            "instit_pct": 0.014710389212381244,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.283865959863688,
            "mixed_qty_pct": 0.42856872396819384,
            "instit_qty_pct": 0.28756531616811815,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.28255610646689205,
            "mixed_notional_pct": 0.4286328115424859,
            "instit_notional_pct": 0.28881108199062205,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4182.095157830217,
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
      "total_trades": 41177,
      "price_moving_trades": 12664,
      "pct_price_moving": 30.75503314957379,
      "all_movers": {
        "count": 12664,
        "avg_size": 1884.314197725837,
        "median_size": 204.00000000000003,
        "retail_count": 12317,
        "mixed_count": 281,
        "institutional_count": 66,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 97.25994946304485,
        "mixed_pct": 2.2188881869867343,
        "instit_pct": 0.5211623499684144,
        "unclear_pct": null
      },
      "positive_movers": {
        "count": 6326,
        "avg_size": 2015.7887290546948,
        "median_size": 138.0,
        "retail_count": 6123,
        "mixed_count": 167,
        "institutional_count": 36,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 96.79102118242176,
        "mixed_pct": 2.63989883022447,
        "instit_pct": 0.569079987353778,
        "unclear_pct": null
      },
      "negative_movers": {
        "count": 6338,
        "avg_size": 1753.0885926159672,
        "median_size": 205.50000000000003,
        "retail_count": 6194,
        "mixed_count": 114,
        "institutional_count": 30,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 97.72798990217734,
        "mixed_pct": 1.7986746607762703,
        "instit_pct": 0.4733354370463868,
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
            "avg_short_ratio": 0.1360534803411255,
            "max_short_ratio": 0.36836158192090396,
            "interpretation": "Elevated short interest"
          }
        },
        "3M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.060783239889866746,
            "max_short_ratio": 0.36836158192090396,
            "interpretation": "Moderate short interest"
          }
        },
        "6M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.0677590790038037,
            "max_short_ratio": 0.36836158192090396,
            "interpretation": "Moderate short interest"
          }
        }
      },
      "correlation": {
        "valid": true,
        "correlation": -0.1323048544475588,
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
          "date": "2025-09-26",
          "short_ratio": 0.22050590918515448,
          "return_pct": 0.0
        }
      ],
      "short_interest_change": {
        "valid": true,
        "monthly_data": [
          {
            "month": "2026-04",
            "avg_short_ratio": 0.03369870334444643
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
            "avg_short_ratio": 0.03369870334444643,
            "change_pct": null
          },
          {
            "month": "2026-03",
            "avg_short_ratio": 0.1453584600680963,
            "change_pct": 331.3473387457546
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
        "interpretation": "Shorts covering significantly (-77% MoM)"
      },
      "short_series": {
        "valid": true,
        "rows": [
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
          },
          {
            "date": "2025-11-14",
            "short_ratio": 0.05037980339588918,
            "short_vol": 90200,
            "total_vol": 1790400,
            "close": 0.675,
            "return": -0.007352941176470562
          },
          {
            "date": "2025-11-13",
            "short_ratio": 0.00460510027234464,
            "short_vol": 18600,
            "total_vol": 4039000,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-11-12",
            "short_ratio": 0.020994314039947514,
            "short_vol": 14400,
            "total_vol": 685900,
            "close": 0.68,
            "return": -0.014492753623188248
          },
          {
            "date": "2025-11-11",
            "short_ratio": 0.01329845214737301,
            "short_vol": 12200,
            "total_vol": 917400,
            "close": 0.69,
            "return": 0.007299270072992581
          },
          {
            "date": "2025-11-10",
            "short_ratio": 0.0019028489877900524,
            "short_vol": 3600,
            "total_vol": 1891900,
            "close": 0.685,
            "return": -0.007246376811594013
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "CRPU",
          "avg_short_ratio": 0.060783239889866746,
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
          "avg_short_ratio": 0.0008376799886268877,
          "max_short_ratio": 0.1091703056768559,
          "is_target": false
        },
        {
          "ticker": "D5IU",
          "avg_short_ratio": 0.001540265932584688,
          "max_short_ratio": 0.2702329197017246,
          "is_target": false
        },
        {
          "ticker": "AU8U",
          "avg_short_ratio": 0.06399960509144627,
          "max_short_ratio": 0.583009889700239,
          "is_target": false
        },
        {
          "ticker": "AJBU",
          "avg_short_ratio": 0.08232068229137064,
          "max_short_ratio": 0.4312404120096428,
          "is_target": false
        },
        {
          "ticker": "JYEU",
          "avg_short_ratio": 0.10260207700576858,
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
          "opening": 0.12894129795776738,
          "continuous": 0.8256513296586468,
          "closing": 0.04252877720203282,
          "auctions": 0.17434867034135318,
          "other": 0.0
        },
        "1M": {
          "opening": 0.05818692797161165,
          "continuous": 0.8829610809969184,
          "closing": 0.04886297534033079,
          "auctions": 0.11703891900308164,
          "other": 0.0
        },
        "3M": {
          "opening": 0.05358238416705724,
          "continuous": 0.8472677122993545,
          "closing": 0.08655824001980689,
          "auctions": 0.15273228770064556,
          "other": 0.0
        },
        "6M": {
          "opening": 0.041561222426666294,
          "continuous": 0.8652626439270658,
          "closing": 0.08145938700914085,
          "auctions": 0.13473735607293416,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.23997200659840412,
        "1M": 0.1926606543155247,
        "3M": 0.23662444185228057,
        "6M": 0.22645441355925008
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.0219
        },
        {
          "time": "09:00",
          "avg_share": 0.0916
        },
        {
          "time": "09:30",
          "avg_share": 0.0423
        },
        {
          "time": "10:00",
          "avg_share": 0.0435
        },
        {
          "time": "10:30",
          "avg_share": 0.0385
        },
        {
          "time": "11:00",
          "avg_share": 0.0356
        },
        {
          "time": "11:30",
          "avg_share": 0.0426
        },
        {
          "time": "12:00",
          "avg_share": 0.2277
        },
        {
          "time": "12:30",
          "avg_share": 0.0097
        },
        {
          "time": "13:00",
          "avg_share": 0.0228
        },
        {
          "time": "13:30",
          "avg_share": 0.0202
        },
        {
          "time": "14:00",
          "avg_share": 0.036
        },
        {
          "time": "14:30",
          "avg_share": 0.0349
        },
        {
          "time": "15:00",
          "avg_share": 0.0278
        },
        {
          "time": "15:30",
          "avg_share": 0.048
        },
        {
          "time": "16:00",
          "avg_share": 0.0417
        },
        {
          "time": "16:30",
          "avg_share": 0.1007
        },
        {
          "time": "17:00",
          "avg_share": 0.1143
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "CRPU",
          "auctions_pct": 12.534849142067703,
          "hhi": 0.2288923158951751,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400",
            "you": true
          }
        },
        {
          "ticker": "ODBU",
          "auctions_pct": 4.824576828416788,
          "hhi": 0.4076806380955142,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "D5IU",
          "auctions_pct": 11.4215431849273,
          "hhi": 0.47387821114436773,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "BMGU",
          "auctions_pct": 1.4946564176059536,
          "hhi": 0.7344259728531879,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "AU8U",
          "auctions_pct": 13.601178016094511,
          "hhi": 0.17800296740502947,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "JYEU",
          "auctions_pct": 14.454843483017536,
          "hhi": 0.19967700643938288,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "AJBU",
          "auctions_pct": 18.432866687249998,
          "hhi": 0.14110561092296856,
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
