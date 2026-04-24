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
      "ticker": "1004",
      "name": "C SMARTERENERGY",
      "marketCap": 145302446.08,
      "sector": "Alternative/ Renewable Energy",
      "industry": "Utilities - Utilities"
    },
    {
      "ticker": "1281",
      "name": "XINDA INV HLDGS",
      "marketCap": 151429608.0,
      "sector": "Alternative/ Renewable Energy",
      "industry": "Utilities - Utilities"
    },
    {
      "ticker": "1395",
      "name": "ELL ENV",
      "marketCap": 181597200.0,
      "sector": "Alternative/ Renewable Energy",
      "industry": "Utilities - Utilities"
    },
    {
      "ticker": "92",
      "name": "CHAMPION TECH",
      "marketCap": 216230125.05600002,
      "sector": "Alternative/ Renewable Energy",
      "industry": "Utilities - Utilities"
    },
    {
      "ticker": "90",
      "name": "PUXING ENERGY",
      "marketCap": 435670000.0,
      "sector": "Alternative/ Renewable Energy",
      "industry": "Utilities - Utilities"
    },
    {
      "ticker": "987",
      "name": "CH RENEW EN INV",
      "marketCap": 451108343.52,
      "sector": "Alternative/ Renewable Energy",
      "industry": "Utilities - Utilities"
    },
    {
      "ticker": "994",
      "name": "CT VISION",
      "marketCap": 366631980.0,
      "sector": "Alternative/ Renewable Energy",
      "industry": "Utilities - Utilities"
    },
    {
      "ticker": "295",
      "name": "KONG SUN HOLD",
      "marketCap": 404039948.013,
      "sector": "Alternative/ Renewable Energy",
      "industry": "Utilities - Utilities"
    },
    {
      "ticker": "1853",
      "name": "CHUNCHENG HEAT",
      "marketCap": 204225000.0,
      "sector": "Alternative/ Renewable Energy",
      "industry": "Utilities - Utilities"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XHKG",
    "currency": "HKD",
    "ticker": "1004",
    "company": "C SMARTERENERGY",
    "asof_date": "2026-04-01",
    "industry": "Utilities - Utilities",
    "sector": "Alternative/ Renewable Energy",
    "market_cap_display": "145.3M",
    "market_cap_category": "small",
    "universe_total": 2607,
    "peers_count": 8,
    "page_title_template": "Liquidity Analysis Report — {market}/{ticker} — {asof}"
  },
  "q01": {
    "primary_liquidity_period": "30d",
    "periods": {
      "1d": {
        "label": "1D",
        "window_days": 1,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 1,
          "score_pca": 16.033755274261605,
          "score_pca_percentile": 16.033755274261605,
          "rank_pca": 2190,
          "total": 2607,
          "adv_notional_sgd": 2029.9999999999998,
          "adv_volume_shares": 7000.0,
          "free_float_shares": null,
          "turnover_ratio": 1.4934366616273277e-05,
          "votes": 1.0,
          "trades": 1.0,
          "spread_pct": 0.17293729372937294,
          "spread_ticks": 11.909090909090908,
          "amihud": 3.178134435086607e-05,
          "volatility": 0.0
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5495416588409058,
          "loadings": {
            "log_adv": 0.5356484085715254,
            "log_trades": 0.4964819672465921,
            "log_turnover": 0.5004793728776782,
            "neg_spread": 0.4022061112581351,
            "neg_amihud": 0.049081029685999394,
            "neg_vol": -0.22787745063802015
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
          "peer_median_adv": 82686.0,
          "peer_median_score_pca": 37.686996547756046,
          "peer_median_trades": 10.0,
          "peer_median_volatility": 0.5232807794207006,
          "peer_median_spread_pct": 0.046913880687833705,
          "peer_median_spread_ticks": 5.2202184548867905,
          "peer_median_amihud": 1.2053224106384758e-07,
          "peer_median_turnover_ratio": 0.0004627245505571374,
          "target_vs_peer": {
            "score_pca_delta": -21.65,
            "adv_delta_pct": -97.5,
            "trades_delta_pct": -90.0,
            "volatility_delta_pct": 100.0,
            "spread_pct_delta_pct": -268.63,
            "spread_ticks_delta_pct": 128.13,
            "amihud_delta_pct": -26267.5,
            "turnover_ratio_delta_pct": -96.77
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1004",
            "score_pca": 16.033755274261605,
            "rank_pca": 2190,
            "adv": 2029.9999999999998,
            "trades": 1.0,
            "volatility": 0.0,
            "spread_pct": 0.17293729372937294,
            "spread_ticks": 11.909090909090908,
            "amihud": 3.178134435086607e-05,
            "turnover_ratio": 1.4934366616273277e-05,
            "is_target": true
          },
          {
            "ticker": "1281",
            "score_pca": 43.037974683544306,
            "rank_pca": 1486,
            "adv": 116622.0,
            "trades": 12.0,
            "volatility": 0.6513292710240516,
            "spread_pct": 0.04616687844133838,
            "spread_ticks": 4.638297872340425,
            "amihud": 2.521973959105679e-07,
            "turnover_ratio": 0.0007934775872892704,
            "is_target": false
          },
          {
            "ticker": "1395",
            "score_pca": 4.909858074415037,
            "rank_pca": 2480,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.14010007147962827,
            "spread_ticks": 24.5,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "92",
            "score_pca": 25.431530494821637,
            "rank_pca": 1945,
            "adv": 20389.5,
            "trades": 5.0,
            "volatility": 0.39523228781734976,
            "spread_pct": 0.08381601362862007,
            "spread_ticks": 16.772727272727273,
            "amihud": 0.0,
            "turnover_ratio": 0.00010486055543037468,
            "is_target": false
          },
          {
            "ticker": "90",
            "score_pca": 83.19907940161104,
            "rank_pca": 439,
            "adv": 2433600.0,
            "trades": 130.0,
            "volatility": 3.1079669523141553,
            "spread_pct": 0.04766088293432903,
            "spread_ticks": 5.802139037433155,
            "amihud": 1.5138932142980726e-07,
            "turnover_ratio": 0.004081988661142608,
            "is_target": false
          },
          {
            "ticker": "987",
            "score_pca": 68.96816263904871,
            "rank_pca": 810,
            "adv": 1573440.9679999999,
            "trades": 139.0,
            "volatility": 0.8527346405491362,
            "spread_pct": 0.021016696004694104,
            "spread_ticks": 3.7763578274760383,
            "amihud": 7.061663791069582e-09,
            "turnover_ratio": 0.014013266931039063,
            "is_target": false
          },
          {
            "ticker": "994",
            "score_pca": 57.499041043344846,
            "rank_pca": 1109,
            "adv": 337920.0,
            "trades": 49.0,
            "volatility": 0.8672897785875878,
            "spread_pct": 0.03879195819679388,
            "spread_ticks": 2.546511627906977,
            "amihud": 8.967516069788789e-08,
            "turnover_ratio": 0.0020631205479773214,
            "is_target": false
          },
          {
            "ticker": "295",
            "score_pca": 32.336018411967785,
            "rank_pca": 1765,
            "adv": 48750.0,
            "trades": 8.0,
            "volatility": 0.35980170274396134,
            "spread_pct": 0.04600219058050387,
            "spread_ticks": 1.2352941176470589,
            "amihud": 7.597340930674275e-07,
            "turnover_ratio": 0.00013197151382500437,
            "is_target": false
          },
          {
            "ticker": "1853",
            "score_pca": 0.9205983889528193,
            "rank_pca": 2584,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.3050847457627119,
            "spread_ticks": 46.3235294117647,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Alternative/ Renewable Energy",
          "sector_count": 26,
          "market_count": 2607,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4815050482238079,
              "median": 0.343149098399249,
              "min": 0.0,
              "max": 10.150540723275236,
              "p5": 0.0,
              "p95": 1.4498345274708844,
              "count": 2607
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 86183438.37309761,
              "median": 286000.0,
              "min": 0.0,
              "max": 10561587990.2,
              "p5": 0.0,
              "p95": 301975342.42199993,
              "count": 2607
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.05029979686568031,
              "median": 0.027869940278699424,
              "min": 0.0005061340649462837,
              "max": 0.7648559970834851,
              "p5": 0.0013698726131500202,
              "p95": 0.1722648239018552,
              "count": 2607
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0064885491965258795,
              "median": 0.0011941199235876348,
              "min": 0.0,
              "max": 0.6098615669688484,
              "p5": 0.0,
              "p95": 0.024815763803591302,
              "count": 2584
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.434243215363578e-06,
              "median": 1.0601641751867905e-08,
              "min": 0.0,
              "max": 0.003349282296650716,
              "p5": 0.0,
              "p95": 6.334044895486184e-06,
              "count": 2216
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1503.1388569236672,
              "median": 25.0,
              "min": 0.0,
              "max": 84077.0,
              "p5": 0.0,
              "p95": 8087.199999999979,
              "count": 2607
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.583581363103245,
              "median": 0.38457370535060015,
              "min": 0.0,
              "max": 3.1079669523141553,
              "p5": 0.0,
              "p95": 1.5590619251118938,
              "count": 26
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 29343337.693384614,
              "median": 873081.0,
              "min": 0.0,
              "max": 389166918.0,
              "p5": 0.0,
              "p95": 90561716.25,
              "count": 26
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04480259188572989,
              "median": 0.019921812561447046,
              "min": 0.001912734536889678,
              "max": 0.3050847457627119,
              "p5": 0.0026342744660603715,
              "p95": 0.1647279881669368,
              "count": 26
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005360493715300159,
              "median": 0.001716993173293649,
              "min": 0.0,
              "max": 0.02758198986014945,
              "p5": 0.0,
              "p95": 0.02110620232644291,
              "count": 26
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.4717140524644372e-06,
              "median": 3.1668612544564355e-09,
              "min": 0.0,
              "max": 3.178134435086607e-05,
              "p5": 0.0,
              "p95": 7.438662290982972e-07,
              "count": 23
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1023.5,
              "median": 93.0,
              "min": 0.0,
              "max": 11176.0,
              "p5": 0.0,
              "p95": 4673.5,
              "count": 26
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 566340.3085,
              "median": 82686.0,
              "min": 0.0,
              "max": 2433600.0,
              "p5": 0.0,
              "p95": 2132544.3387999996,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 42.875,
              "median": 10.0,
              "min": 0.0,
              "max": 139.0,
              "p5": 0.0,
              "p95": 135.85,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7792943291295302,
              "median": 0.5232807794207006,
              "min": 0.0,
              "max": 3.1079669523141553,
              "p5": 0.0,
              "p95": 2.3237299415098556,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09107992962857743,
              "median": 0.046913880687833705,
              "min": 0.021016696004694104,
              "max": 0.3050847457627119,
              "p5": 0.027238037771929027,
              "p95": 0.24734010976363252,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 13.199357145911954,
              "median": 5.2202184548867905,
              "min": 1.2352941176470589,
              "max": 46.3235294117647,
              "p5": 1.6942202462380302,
              "p95": 38.68529411764705,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.100096058161267e-07,
              "median": 1.2053224106384758e-07,
              "min": 0.0,
              "max": 7.597340930674275e-07,
              "p5": 1.7654159477673955e-09,
              "p95": 6.328499187782126e-07,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0026485857245879553,
              "median": 0.0004627245505571374,
              "min": 0.0,
              "max": 0.014013266931039063,
              "p5": 0.0,
              "p95": 0.010537319536575298,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": -0.06451612903225812,
            "market": 0.013147967527018523,
            "sector": 0.0,
            "peers": -0.005555555555555536,
            "vs_market": -0.07766409655927664,
            "vs_sector": -0.06451612903225812,
            "vs_peers": -0.05896057347670258
          }
        }
      },
      "1w": {
        "label": "1W",
        "window_days": 5,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 5,
          "score_pca": 14.767932489451477,
          "score_pca_percentile": 14.767932489451477,
          "rank_pca": 2223,
          "total": 2607,
          "adv_notional_sgd": 3751.0,
          "adv_volume_shares": 12100.0,
          "free_float_shares": null,
          "turnover_ratio": 2.5815119436700953e-05,
          "votes": 2.0,
          "trades": 2.0,
          "spread_pct": 0.17551020408163265,
          "spread_ticks": 12.285714285714286,
          "amihud": 3.5203164943280295e-06,
          "volatility": 0.9948723066948572
        },
        "pca": {
          "valid": true,
          "window_days": 5,
          "variance_explained": 0.5554451355194079,
          "loadings": {
            "log_adv": 0.5341562982846878,
            "log_trades": 0.49092364383736864,
            "log_turnover": 0.4944077331495083,
            "neg_spread": 0.4514068877569335,
            "neg_amihud": 0.15919709639078042,
            "neg_vol": -0.010960132870925964
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
          "peer_median_adv": 75888.56,
          "peer_median_score_pca": 35.42385884158036,
          "peer_median_trades": 11.5,
          "peer_median_volatility": 0.7075798272406963,
          "peer_median_spread_pct": 0.05297643612875789,
          "peer_median_spread_ticks": 5.2202184548867905,
          "peer_median_amihud": 1.9849650765468163e-07,
          "peer_median_turnover_ratio": 0.00021492355112365724,
          "target_vs_peer": {
            "score_pca_delta": -20.66,
            "adv_delta_pct": -95.1,
            "trades_delta_pct": -82.61,
            "volatility_delta_pct": -40.6,
            "spread_pct_delta_pct": -231.3,
            "spread_ticks_delta_pct": 135.35,
            "amihud_delta_pct": -1673.49,
            "turnover_ratio_delta_pct": -87.99
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1004",
            "score_pca": 14.767932489451477,
            "rank_pca": 2223,
            "adv": 3751.0,
            "trades": 2.0,
            "volatility": 0.9948723066948572,
            "spread_pct": 0.17551020408163265,
            "spread_ticks": 12.285714285714286,
            "amihud": 3.5203164943280295e-06,
            "turnover_ratio": 2.5815119436700953e-05,
            "is_target": true
          },
          {
            "ticker": "1281",
            "score_pca": 20.79018028385117,
            "rank_pca": 2066,
            "adv": 840.0,
            "trades": 5.0,
            "volatility": 0.5124683658539199,
            "spread_pct": 0.04616687844133838,
            "spread_ticks": 4.638297872340425,
            "amihud": 3.370264425470967e-07,
            "turnover_ratio": 5.388642358500988e-06,
            "is_target": false
          },
          {
            "ticker": "1395",
            "score_pca": 6.866129650939777,
            "rank_pca": 2429,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.17748239349298786,
            "spread_pct": 0.12205797340820873,
            "spread_ticks": 21.114285714285714,
            "amihud": 3.810975609756084e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "92",
            "score_pca": 30.648254698887612,
            "rank_pca": 1809,
            "adv": 32737.12,
            "trades": 7.0,
            "volatility": 0.3754435246967059,
            "spread_pct": 0.0685916814343792,
            "spread_ticks": 13.708333333333334,
            "amihud": 0.0,
            "turnover_ratio": 0.0001594589644365862,
            "is_target": false
          },
          {
            "ticker": "90",
            "score_pca": 40.19946298427311,
            "rank_pca": 1560,
            "adv": 119040.0,
            "trades": 16.0,
            "volatility": 2.5100932926469577,
            "spread_pct": 0.05635062611806795,
            "spread_ticks": 5.802139037433155,
            "amihud": 1.5138932142980726e-07,
            "turnover_ratio": 0.0002703881378107283,
            "is_target": false
          },
          {
            "ticker": "987",
            "score_pca": 53.54813962408899,
            "rank_pca": 1212,
            "adv": 196998.816,
            "trades": 20.0,
            "volatility": 1.5729700205072288,
            "spread_pct": 0.026661477084752243,
            "spread_ticks": 3.8055555555555554,
            "amihud": 2.9992893153974276e-08,
            "turnover_ratio": 0.0021244926086513303,
            "is_target": false
          },
          {
            "ticker": "994",
            "score_pca": 55.50441120061373,
            "rank_pca": 1161,
            "adv": 373560.0,
            "trades": 43.0,
            "volatility": 0.5465703738346223,
            "spread_pct": 0.041379310344827606,
            "spread_ticks": 2.967032967032967,
            "amihud": 8.967516069788789e-08,
            "turnover_ratio": 0.002102194800779922,
            "is_target": false
          },
          {
            "ticker": "295",
            "score_pca": 47.564250095895666,
            "rank_pca": 1368,
            "adv": 270000.0,
            "trades": 25.0,
            "volatility": 0.8685892806467705,
            "spread_pct": 0.049602246139447824,
            "spread_ticks": 1.4324324324324325,
            "amihud": 2.45603693879556e-07,
            "turnover_ratio": 0.0006598575691250219,
            "is_target": false
          },
          {
            "ticker": "1853",
            "score_pca": 0.7671653241273495,
            "rank_pca": 2588,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 1.5030040530036866,
            "spread_pct": 0.33838134956988786,
            "spread_ticks": 57.59662921348315,
            "amihud": 4.8391248391248404e-05,
            "turnover_ratio": 0.0,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Alternative/ Renewable Energy",
          "sector_count": 26,
          "market_count": 2607,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6255869571814743,
              "median": 0.4844804220067095,
              "min": 0.0,
              "max": 16.049922118191105,
              "p5": 0.03464381452909665,
              "p95": 1.5800734946189399,
              "count": 2607
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 72192435.66415395,
              "median": 231840.0,
              "min": 0.0,
              "max": 11207547960.0,
              "p5": 0.0,
              "p95": 261571339.5959998,
              "count": 2607
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.05025120485931442,
              "median": 0.02971137521222414,
              "min": 0.0004686854076525858,
              "max": 0.5899280575539567,
              "p5": 0.0014780905933685462,
              "p95": 0.16945336552811463,
              "count": 2607
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0049126121771919384,
              "median": 0.0009388379071075827,
              "min": 0.0,
              "max": 0.4753034973867234,
              "p5": 0.0,
              "p95": 0.018767123776054405,
              "count": 2584
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.20202524507904e-06,
              "median": 3.3937237049782086e-08,
              "min": 0.0,
              "max": 0.000934497588038767,
              "p5": 0.0,
              "p95": 9.015267479445495e-06,
              "count": 2510
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1305.1948599923282,
              "median": 22.0,
              "min": 0.0,
              "max": 84077.0,
              "p5": 0.0,
              "p95": 7231.499999999986,
              "count": 2607
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6312021986600828,
              "median": 0.5295193698442711,
              "min": 0.13652491807152992,
              "max": 2.5100932926469577,
              "p5": 0.15202705744100833,
              "p95": 1.5554785286313433,
              "count": 26
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 20653258.77023077,
              "median": 489580.0,
              "min": 0.0,
              "max": 259927040.70000002,
              "p5": 0.0,
              "p95": 62494448.144999996,
              "count": 26
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04715994301636949,
              "median": 0.020960978927741153,
              "min": 0.001912734536889678,
              "max": 0.33838134956988786,
              "p5": 0.0026255484801795273,
              "p95": 0.16214714641327665,
              "count": 26
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003586598518820419,
              "median": 0.001630607331590006,
              "min": 0.0,
              "max": 0.016660890923758127,
              "p5": 0.0,
              "p95": 0.015750744511396554,
              "count": 26
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.2759497681347708e-06,
              "median": 1.1609106600243961e-08,
              "min": 0.0,
              "max": 4.8391248391248404e-05,
              "p5": 0.0,
              "p95": 3.7383108308990704e-06,
              "count": 26
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 762.3846153846154,
              "median": 48.5,
              "min": 0.0,
              "max": 8187.0,
              "p5": 0.0,
              "p95": 3173.0,
              "count": 26
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 124146.992,
              "median": 75888.56,
              "min": 0.0,
              "max": 373560.0,
              "p5": 0.0,
              "p95": 337313.99999999994,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 14.5,
              "median": 11.5,
              "min": 0.0,
              "max": 43.0,
              "p5": 0.0,
              "p95": 36.69999999999999,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.00832766308536,
              "median": 0.7075798272406963,
              "min": 0.17748239349298786,
              "max": 2.5100932926469577,
              "p5": 0.24676878941428917,
              "p95": 2.182100147398052,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09364894281761371,
              "median": 0.05297643612875789,
              "min": 0.026661477084752243,
              "max": 0.33838134956988786,
              "p5": 0.03181271872577862,
              "p95": 0.26266816791330005,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 13.883088265737092,
              "median": 5.2202184548867905,
              "min": 1.4324324324324325,
              "max": 57.59662921348315,
              "p5": 1.9695426195426196,
              "p95": 44.827808988764026,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.631988939089102e-06,
              "median": 1.9849650765468163e-07,
              "min": 0.0,
              "max": 4.8391248391248404e-05,
              "p5": 1.0497512603890997e-08,
              "p95": 3.278815291772607e-05,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0006652225903952613,
              "median": 0.00021492355112365724,
              "min": 0.0,
              "max": 0.0021244926086513303,
              "p5": 0.0,
              "p95": 0.0021166883758963373,
              "count": 8
            }
          },
          "returns": {
            "window_days": 5,
            "n_obs": 5,
            "stock": -0.19444444444444453,
            "market": -0.003981662176825607,
            "sector": -0.03986980125084438,
            "peers": -0.005555555555555536,
            "vs_market": -0.19046278226761892,
            "vs_sector": -0.15457464319360015,
            "vs_peers": -0.188888888888889
          }
        }
      },
      "2w": {
        "label": "2W",
        "window_days": 10,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 10,
          "score_pca": 13.578826237054084,
          "score_pca_percentile": 13.578826237054084,
          "rank_pca": 2254,
          "total": 2607,
          "adv_notional_sgd": 7470.0,
          "adv_volume_shares": 22900.0,
          "free_float_shares": null,
          "turnover_ratio": 4.885671364466544e-05,
          "votes": 2.0,
          "trades": 2.0,
          "spread_pct": 0.15082231222562656,
          "spread_ticks": 10.377622377622377,
          "amihud": 3.5203164943280295e-06,
          "volatility": 1.4902430708535002
        },
        "pca": {
          "valid": true,
          "window_days": 10,
          "variance_explained": 0.5585429366739925,
          "loadings": {
            "log_adv": 0.532124266588976,
            "log_trades": 0.48679340500371915,
            "log_turnover": 0.4889404517323396,
            "neg_spread": 0.46212919709840455,
            "neg_amihud": 0.16459965470999602,
            "neg_vol": 0.012519555516817082
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
          "peer_median_adv": 73907.63575,
          "peer_median_score_pca": 37.130801687763714,
          "peer_median_trades": 13.5,
          "peer_median_volatility": 0.680346109707689,
          "peer_median_spread_pct": 0.06348162905244403,
          "peer_median_spread_ticks": 6.920296905107276,
          "peer_median_amihud": 1.6178443486276812e-07,
          "peer_median_turnover_ratio": 0.0003056910831956439,
          "target_vs_peer": {
            "score_pca_delta": -23.55,
            "adv_delta_pct": -89.9,
            "trades_delta_pct": -85.19,
            "volatility_delta_pct": -119.04,
            "spread_pct_delta_pct": -137.58,
            "spread_ticks_delta_pct": 49.96,
            "amihud_delta_pct": -2075.93,
            "turnover_ratio_delta_pct": -84.02
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1004",
            "score_pca": 13.578826237054084,
            "rank_pca": 2254,
            "adv": 7470.0,
            "trades": 2.0,
            "volatility": 1.4902430708535002,
            "spread_pct": 0.15082231222562656,
            "spread_ticks": 10.377622377622377,
            "amihud": 3.5203164943280295e-06,
            "turnover_ratio": 4.885671364466544e-05,
            "is_target": true
          },
          {
            "ticker": "1281",
            "score_pca": 18.8722669735328,
            "rank_pca": 2116,
            "adv": 2650.0,
            "trades": 5.0,
            "volatility": 0.4409355686095273,
            "spread_pct": 0.08066771458994391,
            "spread_ticks": 8.016447368421051,
            "amihud": 3.370264425470967e-07,
            "turnover_ratio": 1.7513087665128208e-05,
            "is_target": false
          },
          {
            "ticker": "1395",
            "score_pca": 14.729574223245109,
            "rank_pca": 2224,
            "adv": 2817.5,
            "trades": 0.5,
            "volatility": 0.6969233798444393,
            "spread_pct": 0.10924045106334752,
            "spread_ticks": 18.46315789473684,
            "amihud": 3.810975609756084e-06,
            "turnover_ratio": 4.785474035385162e-05,
            "is_target": false
          },
          {
            "ticker": "92",
            "score_pca": 34.253931722286154,
            "rank_pca": 1715,
            "adv": 54807.214,
            "trades": 9.5,
            "volatility": 0.5163060797172286,
            "spread_pct": 0.06265171435203909,
            "spread_ticks": 12.901408450704224,
            "amihud": 6.476065390611954e-08,
            "turnover_ratio": 0.0002735350909992767,
            "is_target": false
          },
          {
            "ticker": "90",
            "score_pca": 40.007671653241275,
            "rank_pca": 1565,
            "adv": 173420.0,
            "trades": 21.0,
            "volatility": 2.0519802253336423,
            "spread_pct": 0.06431154375284898,
            "spread_ticks": 5.8241464417935,
            "amihud": 1.5203279181495653e-07,
            "turnover_ratio": 0.0004273877017008286,
            "is_target": false
          },
          {
            "ticker": "987",
            "score_pca": 46.835443037974684,
            "rank_pca": 1387,
            "adv": 93008.0575,
            "trades": 17.5,
            "volatility": 1.1876596446761793,
            "spread_pct": 0.031553006939159696,
            "spread_ticks": 4.56447963800905,
            "amihud": 1.2807636206266546e-07,
            "turnover_ratio": 0.0010176021370531848,
            "is_target": false
          },
          {
            "ticker": "994",
            "score_pca": 58.11277330264672,
            "rank_pca": 1093,
            "adv": 381180.0,
            "trades": 41.5,
            "volatility": 0.5373436572206406,
            "spread_pct": 0.027561101281851286,
            "spread_ticks": 1.9959803921568626,
            "amihud": 3.3159867445490726e-08,
            "turnover_ratio": 0.002106102226060182,
            "is_target": false
          },
          {
            "ticker": "295",
            "score_pca": 41.69543536632144,
            "rank_pca": 1521,
            "adv": 134600.0,
            "trades": 21.5,
            "volatility": 0.6637688395709389,
            "spread_pct": 0.05496477370298353,
            "spread_ticks": 1.4635451505016723,
            "amihud": 1.715360779105797e-07,
            "turnover_ratio": 0.0003378470753920112,
            "is_target": false
          },
          {
            "ticker": "1853",
            "score_pca": 0.2685078634445723,
            "rank_pca": 2601,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 1.062784358029772,
            "spread_pct": 0.46817627571039866,
            "spread_ticks": 75.68139704758816,
            "amihud": 4.8391248391248404e-05,
            "turnover_ratio": 0.0,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Alternative/ Renewable Energy",
          "sector_count": 26,
          "market_count": 2607,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6593600498938251,
              "median": 0.5458849743714753,
              "min": 0.0,
              "max": 10.94435074733702,
              "p5": 0.1561904230687645,
              "p95": 1.5092571602243843,
              "count": 2607
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 76115365.8208874,
              "median": 229517.5,
              "min": 0.0,
              "max": 13167083160.0,
              "p5": 0.0,
              "p95": 264524946.81299916,
              "count": 2607
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.048654438428473334,
              "median": 0.02956289726563063,
              "min": 0.0006018012568958262,
              "max": 0.5064809946517242,
              "p5": 0.0014819720135967746,
              "p95": 0.16230860753406665,
              "count": 2607
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0046656770587596656,
              "median": 0.0009704929459447903,
              "min": 0.0,
              "max": 0.6249326260729391,
              "p5": 0.0,
              "p95": 0.017687327601064357,
              "count": 2584
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.593417497078721e-06,
              "median": 4.7838175772780386e-08,
              "min": 0.0,
              "max": 0.0007965686274509804,
              "p5": 3.161170435720428e-11,
              "p95": 7.013059660412803e-06,
              "count": 2577
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1290.674338319908,
              "median": 21.5,
              "min": 0.0,
              "max": 103633.5,
              "p5": 0.0,
              "p95": 6460.049999999999,
              "count": 2607
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6425766372466675,
              "median": 0.5268248684689346,
              "min": 0.24785797586281652,
              "max": 2.0519802253336423,
              "p5": 0.25664707748090937,
              "p95": 1.41459721430917,
              "count": 26
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 19930467.2005,
              "median": 633010.0,
              "min": 0.0,
              "max": 239968738.48000002,
              "p5": 662.5,
              "p95": 80077667.32124999,
              "count": 26
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.05371944939863623,
              "median": 0.02019003545602196,
              "min": 0.0019715035568902456,
              "max": 0.46817627571039866,
              "p5": 0.0027848476661293206,
              "p95": 0.14702961181309518,
              "count": 26
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00314335727781434,
              "median": 0.00137015798755078,
              "min": 0.0,
              "max": 0.015476977983426466,
              "p5": 4.378271916282052e-06,
              "p95": 0.011184486411348499,
              "count": 26
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.228438934932971e-06,
              "median": 2.3901325462218118e-08,
              "min": 9.569905450101526e-11,
              "max": 4.8391248391248404e-05,
              "p5": 1.9548881748197082e-10,
              "p95": 3.7383108308990704e-06,
              "count": 26
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 643.0961538461538,
              "median": 40.75,
              "min": 0.0,
              "max": 5478.0,
              "p5": 0.125,
              "p95": 3305.125,
              "count": 26
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 105310.3464375,
              "median": 73907.63575,
              "min": 0.0,
              "max": 381180.0,
              "p5": 927.5000000000001,
              "p95": 308463.9999999999,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 14.5625,
              "median": 13.5,
              "min": 0.0,
              "max": 41.5,
              "p5": 0.17500000000000002,
              "p95": 34.499999999999986,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.894712719125296,
              "median": 0.680346109707689,
              "min": 0.4409355686095273,
              "max": 2.0519802253336423,
              "p5": 0.4673152474972228,
              "p95": 1.74946802210353,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.11239082267407158,
              "median": 0.06348162905244403,
              "min": 0.027561101281851286,
              "max": 0.46817627571039866,
              "p5": 0.02895826826190923,
              "p95": 0.3425487370839306,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 16.113820297988923,
              "median": 6.920296905107276,
              "min": 1.4635451505016723,
              "max": 75.68139704758816,
              "p5": 1.6498974850809889,
              "p95": 55.655013344090165,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.636102024586425e-06,
              "median": 1.6178443486276812e-07,
              "min": 3.3159867445490726e-08,
              "max": 4.8391248391248404e-05,
              "p5": 4.422014270671081e-08,
              "p95": 3.278815291772607e-05,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.000528480257403058,
              "median": 0.0003056910831956439,
              "min": 0.0,
              "max": 0.002106102226060182,
              "p5": 6.129580682794873e-06,
              "p95": 0.0017251271949077324,
              "count": 8
            }
          },
          "returns": {
            "window_days": 10,
            "n_obs": 10,
            "stock": -0.12121212121212144,
            "market": -0.025729709667726475,
            "sector": -0.03634190195107778,
            "peers": -0.012183331607469539,
            "vs_market": -0.09548241154439496,
            "vs_sector": -0.08487021926104366,
            "vs_peers": -0.1090287896046519
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 15.304948216340621,
          "score_pca_percentile": 15.304948216340621,
          "rank_pca": 2209,
          "total": 2607,
          "adv_notional_sgd": 9000.0,
          "adv_volume_shares": 30000.0,
          "free_float_shares": null,
          "turnover_ratio": 6.40044283554569e-05,
          "votes": 2.0,
          "trades": 2.0,
          "spread_pct": 0.11838790931989929,
          "spread_ticks": 7.393939393939394,
          "amihud": 4.231675785928e-06,
          "volatility": 1.357269826205656
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5724814763823942,
          "loadings": {
            "log_adv": 0.5214752824918063,
            "log_trades": 0.4763550371692524,
            "log_turnover": 0.48014363818837885,
            "neg_spread": 0.4554944926057694,
            "neg_amihud": 0.2436592042531785,
            "neg_vol": 0.06137144620520919
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
          "peer_median_adv": 59540.621,
          "peer_median_score_pca": 36.59378596087457,
          "peer_median_trades": 12.5,
          "peer_median_volatility": 0.7934429793131452,
          "peer_median_spread_pct": 0.059265602667211176,
          "peer_median_spread_ticks": 5.66875,
          "peer_median_amihud": 3.771515025613404e-07,
          "peer_median_turnover_ratio": 0.00031767939731182257,
          "target_vs_peer": {
            "score_pca_delta": -21.29,
            "adv_delta_pct": -84.9,
            "trades_delta_pct": -84.0,
            "volatility_delta_pct": -71.06,
            "spread_pct_delta_pct": -99.76,
            "spread_ticks_delta_pct": 30.43,
            "amihud_delta_pct": -1022.01,
            "turnover_ratio_delta_pct": -79.85
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1004",
            "score_pca": 15.304948216340621,
            "rank_pca": 2209,
            "adv": 9000.0,
            "trades": 2.0,
            "volatility": 1.357269826205656,
            "spread_pct": 0.11838790931989929,
            "spread_ticks": 7.393939393939394,
            "amihud": 4.231675785928e-06,
            "turnover_ratio": 6.40044283554569e-05,
            "is_target": true
          },
          {
            "ticker": "1281",
            "score_pca": 21.288837744533947,
            "rank_pca": 2053,
            "adv": 3200.0,
            "trades": 5.0,
            "volatility": 0.6972363868788349,
            "spread_pct": 0.06243386243386243,
            "spread_ticks": 5.9,
            "amihud": 1.930404657603928e-06,
            "turnover_ratio": 2.4248890613254443e-05,
            "is_target": false
          },
          {
            "ticker": "1395",
            "score_pca": 17.376294591484466,
            "rank_pca": 2155,
            "adv": 5635.0,
            "trades": 2.0,
            "volatility": 0.8534950761421709,
            "spread_pct": 0.10250569476082003,
            "spread_ticks": 16.875,
            "amihud": 2.4501696742499465e-06,
            "turnover_ratio": 9.570948070770325e-05,
            "is_target": false
          },
          {
            "ticker": "92",
            "score_pca": 35.481396240889914,
            "rank_pca": 1683,
            "adv": 59694.428,
            "trades": 11.0,
            "volatility": 0.6784847877359251,
            "spread_pct": 0.062180579216354406,
            "spread_ticks": 12.80281690140845,
            "amihud": 3.3761831496229576e-07,
            "turnover_ratio": 0.0003039152708556556,
            "is_target": false
          },
          {
            "ticker": "90",
            "score_pca": 37.706175680859225,
            "rank_pca": 1625,
            "adv": 165680.0,
            "trades": 14.0,
            "volatility": 1.5555022050621787,
            "spread_pct": 0.05635062611806795,
            "spread_ticks": 5.4375,
            "amihud": 1.616713802855764e-07,
            "turnover_ratio": 0.00033144352376798954,
            "is_target": false
          },
          {
            "ticker": "987",
            "score_pca": 42.692750287687,
            "rank_pca": 1495,
            "adv": 59386.81399999999,
            "trades": 14.0,
            "volatility": 0.8860656753783747,
            "spread_pct": 0.0356234096692112,
            "spread_ticks": 5.147058823529412,
            "amihud": 4.1668469016038507e-07,
            "turnover_ratio": 0.0006629955685668335,
            "is_target": false
          },
          {
            "ticker": "994",
            "score_pca": 56.616800920598386,
            "rank_pca": 1132,
            "adv": 388800.0,
            "trades": 38.0,
            "volatility": 0.6823861967662311,
            "spread_pct": 0.03259896113200791,
            "spread_ticks": 2.2305630026809653,
            "amihud": 8.967516069788789e-08,
            "turnover_ratio": 0.0021100096513404424,
            "is_target": false
          },
          {
            "ticker": "295",
            "score_pca": 41.31185270425777,
            "rank_pca": 1531,
            "adv": 270000.0,
            "trades": 36.0,
            "volatility": 2.833895343515212,
            "spread_pct": 0.05453805453805459,
            "spread_ticks": 1.4324324324324325,
            "amihud": 8.352008424169779e-08,
            "turnover_ratio": 0.0007038480737333567,
            "is_target": false
          },
          {
            "ticker": "1853",
            "score_pca": 0.1534330648254699,
            "rank_pca": 2604,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.7333908824841194,
            "spread_pct": 0.5477289666299924,
            "spread_ticks": 97.07142857142857,
            "amihud": 4.8391248391248404e-05,
            "turnover_ratio": 0.0,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Alternative/ Renewable Energy",
          "sector_count": 26,
          "market_count": 2607,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6705629443083656,
              "median": 0.5505121850438891,
              "min": 0.0,
              "max": 12.575339065692916,
              "p5": 0.2137048460675019,
              "p95": 1.530535888280091,
              "count": 2607
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 71755060.10210612,
              "median": 221400.0,
              "min": 0.0,
              "max": 13520726500.0,
              "p5": 0.0,
              "p95": 253237799.44399986,
              "count": 2607
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04631721433300971,
              "median": 0.029033677110318085,
              "min": 0.0005766037246855124,
              "max": 0.8484231943031536,
              "p5": 0.0014499608623189312,
              "p95": 0.14580575733118092,
              "count": 2607
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004612597812088855,
              "median": 0.0008804158222755281,
              "min": 0.0,
              "max": 0.8831474735556349,
              "p5": 0.0,
              "p95": 0.01625981097505356,
              "count": 2584
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.2059373702050112e-06,
              "median": 4.786843640975599e-08,
              "min": 0.0,
              "max": 0.00021538348509114532,
              "p5": 3.5895116541956826e-11,
              "p95": 4.939319395129787e-06,
              "count": 2600
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1234.9733410049867,
              "median": 20.0,
              "min": 0.0,
              "max": 108394.0,
              "p5": 0.0,
              "p95": 6115.399999999976,
              "count": 2607
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7314679730917999,
              "median": 0.6432086933135683,
              "min": 0.19955149490664567,
              "max": 2.833895343515212,
              "p5": 0.2973578136237116,
              "p95": 1.505944110348048,
              "count": 26
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 21964972.822384614,
              "median": 768414.0,
              "min": 0.0,
              "max": 287696269.8,
              "p5": 800.0,
              "p95": 79654851.1875,
              "count": 26
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.05398672705069078,
              "median": 0.02031353787810571,
              "min": 0.0019663701724218934,
              "max": 0.5477289666299924,
              "p5": 0.002824429327209155,
              "p95": 0.11981038539205717,
              "count": 26
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0033454164963089912,
              "median": 0.0013982450742472798,
              "min": 0.0,
              "max": 0.017621258879094652,
              "p5": 6.062222653313611e-06,
              "p95": 0.01311164218566492,
              "count": 26
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.2642258546702875e-06,
              "median": 2.4736649661487716e-08,
              "min": 7.49964476432633e-11,
              "max": 4.8391248391248404e-05,
              "p5": 1.8274069267056212e-10,
              "p95": 3.7862992580084866e-06,
              "count": 26
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 665.0769230769231,
              "median": 43.5,
              "min": 0.0,
              "max": 6023.0,
              "p5": 0.5,
              "p95": 2912.75,
              "count": 26
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 119049.53025000001,
              "median": 59540.621,
              "min": 0.0,
              "max": 388800.0,
              "p5": 1120.0,
              "p95": 347219.99999999994,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 15.0,
              "median": 12.5,
              "min": 0.0,
              "max": 38.0,
              "p5": 0.7000000000000001,
              "p95": 37.3,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.115057069245381,
              "median": 0.7934429793131452,
              "min": 0.6784847877359251,
              "max": 2.833895343515212,
              "p5": 0.6798502808965322,
              "p95": 2.3864577450566498,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.11924501931229636,
              "median": 0.059265602667211176,
              "min": 0.03259896113200791,
              "max": 0.5477289666299924,
              "p5": 0.03365751812002906,
              "p95": 0.3919008214757818,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 18.36209996643498,
              "median": 5.66875,
              "min": 1.4324324324324325,
              "max": 97.07142857142857,
              "p5": 1.711778132019419,
              "p95": 69.00267857142853,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.732624044181265e-06,
              "median": 3.771515025613404e-07,
              "min": 8.352008424169779e-08,
              "max": 4.8391248391248404e-05,
              "p5": 8.567436100136432e-08,
              "p95": 3.2311870840298916e-05,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0005290213074481544,
              "median": 0.00031767939731182257,
              "min": 0.0,
              "max": 0.0021100096513404424,
              "p5": 8.487111714639055e-06,
              "p95": 0.0016178530991779617,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": -0.10769230769230786,
            "market": -0.01934411605736608,
            "sector": -0.04320768305754574,
            "peers": 0.01431213051597302,
            "vs_market": -0.08834819163494179,
            "vs_sector": -0.06448462463476212,
            "vs_peers": -0.12200443820828089
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Liquidity looks weak on the day, with access still screening below peers and a 10-tick spread keeping execution conditions demanding.",
        "market_comparison": "The stock fell 6.5% compared with peers down 0.6%, which matters because weaker price action can coincide with a less supportive trading backdrop."
      },
      "1w": {
        "liquidity": "Liquidity is weak and has pulled back further over the past week, with average volume down 58.3% from the 1M average and access looking thinner day to day.",
        "market_comparison": "The stock fell 19.4% compared with peers down 0.6%, which matters because the recent tape has been materially weaker than the group."
      },
      "2w": {
        "liquidity": "Liquidity remains weak over two weeks, with tradability still screening below peers rather than showing a sustained improvement.",
        "market_comparison": "The stock fell 12.1% compared with peers down 1.2%, which matters because relative underperformance adds to an already weak liquidity profile."
      },
      "30d": {
        "liquidity": "1M score 15.3 vs peer median 36.6 (-21.3 pts).",
        "market_comparison": "The stock returned -10.8% compared with peers at +1.4%, which matters because the shares have lagged the group while liquidity has also remained weak."
      }
    }
  },
  "q02": {
    "driver_model": {
      "valid": true,
      "model_method": "ols_with_volatility_regimes",
      "estimation_window_days": 22,
      "reporting_window_days": 22,
      "available_history_days": 22,
      "n_regimes": 2,
      "current_regime": 1,
      "current_regime_label": "High Volatility",
      "current_regime_probability": 1.0,
      "current_driver_mix": {
        "market_share": {
          "median": 0.16377928384592375,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "16.4%",
          "display_range": null,
          "display_text": "16.4%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
          "kind": "share_pct",
          "value_pct": 16.4,
          "plain_english": "Market explains about 16.4% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.5212002978016922,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "52.1%",
          "display_range": null,
          "display_text": "52.1%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
          "kind": "share_pct",
          "value_pct": 52.1,
          "plain_english": "Sector explains about 52.1% of price moves in the current state."
        },
        "company_share": {
          "median": 0.31502041835238415,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "31.5%",
          "display_range": null,
          "display_text": "31.5%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
          "kind": "share_pct",
          "value_pct": 31.5,
          "plain_english": "Company-specific explains about 31.5% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 1.5162720558955456,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.52",
          "display_range": null,
          "display_text": "1.52",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
          "kind": "beta",
          "strength_label": "High",
          "plain_english": "High market link: a 1% market move has lined up with about a 1.52% stock move in the same direction in this state.",
          "value_num": 1.52
        },
        "beta_stock_lag": {
          "median": -1.1712205998045642,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-1.17",
          "display_range": null,
          "display_text": "-1.17",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
          "kind": "lag_beta",
          "value_num": -1.17
        },
        "beta_sector": {
          "median": -9.308835099870112,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-9.31",
          "display_range": null,
          "display_text": "-9.31",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
          "kind": "beta",
          "strength_label": "Very high",
          "plain_english": "Very high sector link: a 1% sector move has lined up with about a 9.31% stock move in the opposite direction in this state. The multiplier is unusually large and comes from only 22 trading days of history.",
          "value_num": -9.31
        },
        "beta_market_lag": {
          "median": 2.123979734100586,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "2.12",
          "display_range": null,
          "display_text": "2.12",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
          "kind": "lag_beta",
          "value_num": 2.12
        },
        "beta_sector_lag": {
          "median": -1.0886218844378566,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-1.09",
          "display_range": null,
          "display_text": "-1.09",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
          "kind": "lag_beta",
          "value_num": -1.09
        },
        "posterior_source": null,
        "intervals_collapsed": false,
        "confidence_label": "High, limited history",
        "confidence_note": "Based on 22 trading days relative to the 252-day target."
      },
      "rolling_windows": {},
      "monthly_history": [
        {
          "month_key": "2026-03",
          "month_label": "March 2026",
          "month_short_label": "Mar",
          "period_label": "2026-03-03 to 2026-03-31",
          "n_obs": 21,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5027514619408022,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "50.3%",
            "display_range": null,
            "display_text": "50.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 50.3,
            "plain_english": "Company-specific explains about 50.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.21358307984395755,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "21.4%",
              "display_range": null,
              "display_text": "21.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 21.4,
              "plain_english": "Market explains about 21.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2836654582152402,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "28.4%",
              "display_range": null,
              "display_text": "28.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 28.4,
              "plain_english": "Sector explains about 28.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5027514619408022,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.3%",
              "display_range": null,
              "display_text": "50.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 50.3,
              "plain_english": "Company-specific explains about 50.3% of price moves in the current state."
            }
          },
          "summary": "Mar: Mostly company-driven."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5,
          "expected_duration_days": 5.0,
          "current_probability": 0.0,
          "n_days_effective": 10.0,
          "volatility": {
            "median": 0.07073014245044233,
            "low": 0.07073014245044233,
            "high": 0.07073014245044233
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": 0.0
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.5,
          "expected_duration_days": 5.0,
          "current_probability": 1.0,
          "n_days_effective": 10.0,
          "volatility": {
            "median": 0.09635914661762851,
            "low": 0.09635914661762851,
            "high": 0.09635914661762851
          },
          "volatility_label": "High Volatility",
          "current_probability_display": null
        }
      ],
      "transitions": {
        "mean": [
          [
            0.8,
            0.2
          ],
          [
            0.1111111111111111,
            0.8888888888888888
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            8.0,
            2.0
          ],
          [
            1.0,
            8.0
          ]
        ]
      },
      "methodology": {
        "estimation_window_days": 22,
        "reporting_window_days": 22,
        "current_mix_method": "ols_last_5d",
        "monthly_history_method": "ols_per_month",
        "regime_inference": "volatility_kmeans",
        "distribution": "gaussian",
        "history_limited": true,
        "current_driver_mix_basis": "ols_recent_window",
        "sector_proxy_equals_market": false
      },
      "client_read": {
        "market_link_display": "1.52",
        "sector_link_display": "-9.31",
        "market_link_explainer": "High market link. A 1% market move has lined up with about a 1.52% stock move in the same direction in this state. This is a point estimate from 22 trading days.",
        "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 9.31% stock move in the opposite direction in this state. This is a point estimate from 22 trading days.",
        "stock_persistence_display": "-1.17",
        "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
        "history_limited_note": "Read is based on 22 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "High Volatility",
        "dominant_driver": "sector",
        "dominant_driver_label": "Sector",
        "driver_share_pct": 52.1,
        "driver_share_display": "52.1%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 22 trading days relative to the 252-day target.",
        "history_days": 22,
        "history_limited": true,
        "volatility_label": "High Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.8888888888888888,
        "effective_days": 10.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 5.0 days.",
        "expected_duration_days": 5.0
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
          "pct_time": 0.5,
          "expected_duration_days": 5.0,
          "current_probability": 0.0,
          "n_days_effective": 10.0,
          "volatility": {
            "median": 0.07073014245044233,
            "low": 0.07073014245044233,
            "high": 0.07073014245044233
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.5,
          "expected_duration_days": 5.0,
          "current_probability": 1.0,
          "n_days_effective": 10.0,
          "volatility": {
            "median": 0.09635914661762851,
            "low": 0.09635914661762851,
            "high": 0.09635914661762851
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.8,
          0.2
        ],
        [
          0.1111111111111111,
          0.8888888888888888
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.8,
            0.2
          ],
          [
            0.1111111111111111,
            0.8888888888888888
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            8.0,
            2.0
          ],
          [
            1.0,
            8.0
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
        "text": "Liquidity score: 15.3 — Weak",
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
        "text": "Short interest: N/A",
        "bg": "bg-amber-500/20",
        "textColor": "text-amber-400"
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
    "liq_subtitle": "Monthly liquidity is weak for the stock’s size, and the latest week shows a sharp drop in average volume.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent performance has lagged clearly, with the stock down 10.8% over one month compared with peers up 1.4% and the market down 1.9%.",
    "perf_insight": "The stock has underperformed over the past month, falling 10.8% while peers rose 1.4% and the market fell 1.9%. That matters because weaker price performance is arriving alongside already weak liquidity and a recent drop in trading activity.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Sector moves are the main influence on trading, accounting for 52.1% of the tape.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly sector-driven, accounting for about 52.1% of price changes. Other influences are market 16.4%, and company-specific 31.5%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 16.4%, sector 52.1%, and company-specific 31.5%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has been consistently company-driven across the past 1 months."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 16.4%, sector 52.1%, and company-specific 31.5%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "The stock is moving mainly with its sector, with sector factors explaining 52.1% of trading. That matters because broader market moves are still shaping the tape while recent average volume is lower.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: sector factors are driving 52.1% of recent price moves.",
      "Monthly change: the stock was mostly sector in March, so the current pattern is more balanced now."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Trading conditions look weak overall, with recent activity lower even though the displayed book remains broadly even.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on available history from Feb 27, 2026 to Apr 1, 2026 (20 trading days • 86 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on top 10 bid and top 10 ask levels.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate displayed depth broadly matches the stronger monthly liquidity read.",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The displayed book looks broadly balanced, with top-10 bid depth at 0.91x ask depth and a 10-tick spread. That matters because near-term execution is not showing a clear imbalance even as underlying liquidity remains weak.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 53.0% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Displayed liquidity looks broadly balanced in the book.",
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
    "intraday_insight": "Top-10 bid depth is 0.91x ask depth and the spread is 10 ticks. That matters because immediate displayed liquidity appears broadly even despite weaker underlying trading activity.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Recent trading conditions are being shaped more by weak liquidity and sector moves than by short activity.",
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
    "exec_subtitle": "Trading access screens below peers for the stock’s size, and recent volume has dropped further even though the displayed book is broadly balanced.",
    "exec_takeaways_title": "Key Takeaways:",
    "metric_liquidity_score": "Liquidity Score",
    "metric_spread": "Trading Cost (Spread)",
    "metric_adv": "Average Traded Volume",
    "metric_drivers": "What Drives Price Changes",
    "metric_period_note": "The metrics shown here are based on the last 1 month of trading data, except for price driver mix which uses the last 5 trading days.",
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
        "value": "15.3/100",
        "sub": "Peer median 36.6 (-21.3 pts)",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "HK$9.0K",
        "sub": "Peer median HK$59.5K",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "11.84%",
        "sub": "7.39 ticks; peers 5.93%",
        "interp": {
          "text": "Wider",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity is weak for the stock’s size, with a 1M score of 15.3 compared with a peer median of 36.6. That matters because the stock already screens below peers on monthly trading access. Recent activity has then dropped further, with 1W average volume down 58.3% from the 1M average, which leaves near-term liquidity thinner than the monthly reading alone would imply.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "0.355",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "14.08%",
        "note": "10.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.91x",
        "note": "Bid depth / ask depth on displayed top-10 levels",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-21.08% with 89.6% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-21.08% with 9.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-21.08% with 3.6% fill.",
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
        "value": "15",
        "suffix": "/100",
        "bar_pct": 15,
        "color_value": "text-red-400",
        "color_bar": "bg-red-500",
        "subtext": "Rank 2209/2607",
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
        "value": "11.84",
        "suffix": "%",
        "bar_pct": 100,
        "color_value": "text-red-400",
        "color_bar": "bg-red-500",
        "subtext": "11.84% • 7.39 ticks vs peers 5.93%",
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
        "value": "9.0K",
        "value_prefix": "HK$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-red-400",
        "color_bar": "bg-red-500",
        "subtext": "Peer median HK$59.5K",
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
        "value": "52.1",
        "suffix": "sector",
        "bar_pct": 52,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 16.4% • Company 31.5%",
        "interpretation": {
          "text": "Sector",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is weak for the stock’s size, with a 1M liquidity score of 15.3 compared with a peer median of 36.6. That leaves access screening below peers before current trading conditions are considered.",
      "Recent trading activity has dropped sharply, with 1W average volume down 58.3% from the 1M",
      "Displayed depth is broadly balanced, with top-10 bid depth at 0.91x ask depth and a 10-tick spread. Sector factors are also the main current driver at 52.1%, so broader market moves still explain a meaningful part of the tape."
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
      "overall": "1M liquidity is weak: score 15.3 vs peer median 36.6 (-21.3",
      "strengths": [
        "1M score 15.3 vs peer median 36.6 (-21.3 pts)."
      ],
      "concerns": [
        "1W average volume down -58.3% from 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: -21.3 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "1M return is -10.8%, worse than market, sector, and peers, which suggests weaker price performance than comparable names.",
        "vs_market": "Worse than market: -10.8% vs market -1.9%.",
        "vs_sector": "Worse than sector: -10.8% vs sector -4.3%.",
        "vs_peers": "Worse than peers: -10.8% vs peers 1.4%."
      },
      "adv": {
        "insight": "average daily volume is HK$9.0K, worse than market, sector, and peers, which suggests smaller day-to-day trading size than comparable names.",
        "vs_market": "Worse than market: HK$9.0K vs market HK$221.4K.",
        "vs_sector": "Worse than sector: HK$9.0K vs sector HK$768.4K.",
        "vs_peers": "Worse than peers: HK$9.0K vs peers HK$59.5K."
      },
      "spread": {
        "insight": "Spread is 11.84%, worse than market, sector, and peers, which suggests trading costs are heavier than comparable names.",
        "vs_market": "Worse than market: 11.84% vs market 2.90%.",
        "vs_sector": "Worse than sector: 11.84% vs secto%.",
        "vs_peers": "Worse than peers: 11.84% vs peers 5.93%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.01%, worse than market, sector, and peers, which shows a lighter free-float turnover profile than comparable names.",
        "vs_market": "Worse than market: 0.01% vs market 0.09%.",
        "vs_sector": "Worse than sector: 0.01% vs sector 0.14%.",
        "vs_peers": "Worse than peers: 0.01% vs peers 0.03%."
      },
      "volatility": {
        "insight": "Volatility is 135.73%, worse than market, sector, and peers, which suggests day-to-day price swings are heavier than comparable names.",
        "vs_market": "Worse than market: 135.73% vs market 55.05%.",
        "vs_sector": "Worse than sector: 135.73% vs sector 64.32%.",
        "vs_peers": "Worse than peers: 135.73% vs peers 79.34%."
      },
      "trades": {
        "insight": "Trades is 2, worse than market, sector, and peers, which suggests activity is thinner than comparable names.",
        "vs_market": "Worse than market: 2 vs market 20.",
        "vs_sector": "Worse than sector: 2 vs sector 44.",
        "vs_peers": "Worse than peers: 2 vs peers 12."
      },
      "amihud": {
        "insight": "Price impact is 4.23e-06, worse than market, sector, and peers, which suggests trades move price more than comparable names.",
        "vs_market": "Worse than market: 4.23e-06 vs market 4.79e-08.",
        "vs_sector": "Worse than sector: 4.23e-06 vs sectoe-08.",
        "vs_peers": "Worse than peers: 4.23e-06 vs peers 3.77e-07."
      }
    },
    "performance": {
      "overall": "Recent performance is weak relative to both peers and the market, with the stock down 10.8% over one month compared with peers up 1.4% and the market down 1.9%. Liquidity broadly confirms that move because the one-month liquidity score of 15.3 is well below the peer median of 36.6, and the one-week average volume is down 58.3% from the one-month average, leaving less trading support behind the decline.",
      "conclusion": "The decline looks broadly confirmed by weak liquidity and is more sector-linked than purely company-specific."
    },
    "drivers": {
      "overall": "Sector factors are the main force behind the tape now, accounting for 52.1% of recent price moves. That means the stock is currently trading more with its group than on company-specific news, which matters when recent volume is lighter.",
      "beta": "The current read is mixed rather than fully established because sector influence is leading now, while the stock has also underperformed over one month at -10.8% compared with peers at +1.4% and the market at -1.9%. That combination points to a tape shaped by both group moves and weaker stock-level performance.",
      "rolling_change": "The monthly picture has shifted from mostly sector in March to a more balanced setup now, with sector moves taking the lead. That change matters because near-term trading conditions are being shaped more by external flows than by a single stock story."
    },
    "regime": {
      "overall": "Short expected duration points to a short-lived state rather than a durable market backdrop.",
      "current": "Current market state is High Volatility. The market has been in this state about 50.0% of the time. Based on 22 trading days relative to the 252-day target.",
      "transitions": "The state looks reasonably persistent rather than short-lived, with a typical run length of about 5.0 days. Sector moves still account for 52.1% of trading, which supports a market-led backdrop rather than a one-off swing.",
      "trading_implications": "Trading conditions look more changeable because larger price swings are meeting thinner recent activity, even though displayed depth is broadly balanced with top-10 bid depth at 0.91x ask depth and a 10-tick spread."
    },
    "execution": {
      "overall": "Displayed liquidity looks balanced on screen, with bid depth close to ask depth at 0.91x and a 10-tick spread. That matters because the book is not showing acute one-sided stress even as trading activity has pulled back.",
      "concern": "The main stress point is that recent average volume is down 58.3% from the monthly average, so the displayed balance may rest on a thinner flow backdrop. That matters because stable quotes can still translate into less reliable access when participation drops.",
      "peer_context": "The book is holding up better than the broader liquidity profile implies, but it does not overturn it. The monthly liquidity score of 15.3 remains 21.3 points below the peer median of 36.6, so current depth only partly offsets a weaker standing for the stock's size."
    },
    "trader_composition": {
      "overall": "Flow leans institution-like on both trade count and trade value, although the signal is mixed rather than clean.",
      "retail_heavy": "By trade count and value, flow leans institution-like: institution-like trades are 14.9% of count and 11.6% of value, compared with retail-like at 10.4% of count and 1.2% of value.",
      "institutional_gap": "The read is tempered by 20.9% of trade count falling into ambiguous or unclear flow, so conviction in the mix may stay measured.",
      "peer_comparison": "Relative to peers, the mix appears more institution-like than retail-like, which supports a steadier flow profile where peer tables show a similar split."
    },
    "price_moving": {
      "overall": "Price-moving activity is meaningful, with 53.0% of total trades moving price. That signal is only moderately clean because 20.9% of trade count is ambiguous or unclear. This means price formation is active, but the source of that pressure is not fully transparent. Positive and negative price-moving trade asymmetry is tracked in the report tables, adding context on whether pressure is balanced or one-sided.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short-selling data is unavailable for this report.",
      "level": "N/A",
      "correlation": "N/A",
      "trend": "The short trend is mixed rather than clearly rising or falling. That means it does not appear to add a new source of stress beyond already thinner recent trading activity.",
      "peaks": "N/A"
    },
    "intraday": {
      "overall": "Liquidity shows up during the continuous session rather than at the open or close, with 99.3% of activity in continuous trading.",
      "hhi_interpretation": "A concentration score of 0.660 points to moderate concentration, so flow is present through the day but not evenly spread across every interval.",
      "best_times": "The continuous session is the clearest window for usable liquidity because almost all trading occurs there.",
      "peer_ranking": "Peer comparison in the report tables shows how this intraday concentration ranks relative to comparable names."
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
        "1004",
        "1281",
        "1395",
        "92",
        "90",
        "987",
        "994",
        "295",
        "1853"
      ],
      "scores": [
        15.304948216340621,
        21.288837744533947,
        17.376294591484466,
        35.481396240889914,
        37.706175680859225,
        42.692750287687,
        56.616800920598386,
        41.31185270425777,
        0.1534330648254699
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
        9000.0,
        3200.0,
        5635.0,
        59694.428,
        165680.0,
        59386.81399999999,
        388800.0,
        270000.0,
        0.0
      ],
      "total": 2607
    },
    "market_comparison": {
      "sector_name": "Alternative/ Renewable Energy",
      "sector_count": 26,
      "market_count": 2607,
      "company": {
        "volatility": 1.357269826205656,
        "adv": 9000.0,
        "spread_pct": 0.11838790931989929,
        "turnover_ratio": 6.40044283554569e-05,
        "amihud": 4.231675785928e-06,
        "trades": 2.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6705629443083656,
          "median": 0.5505121850438891,
          "min": 0.0,
          "max": 12.575339065692916,
          "p5": 0.2137048460675019,
          "p95": 1.530535888280091,
          "count": 2607
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 71755060.10210612,
          "median": 221400.0,
          "min": 0.0,
          "max": 13520726500.0,
          "p5": 0.0,
          "p95": 253237799.44399986,
          "count": 2607
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.04631721433300971,
          "median": 0.029033677110318085,
          "min": 0.0005766037246855124,
          "max": 0.8484231943031536,
          "p5": 0.0014499608623189312,
          "p95": 0.14580575733118092,
          "count": 2607
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.004612597812088855,
          "median": 0.0008804158222755281,
          "min": 0.0,
          "max": 0.8831474735556349,
          "p5": 0.0,
          "p95": 0.01625981097505356,
          "count": 2584
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.2059373702050112e-06,
          "median": 4.786843640975599e-08,
          "min": 0.0,
          "max": 0.00021538348509114532,
          "p5": 3.5895116541956826e-11,
          "p95": 4.939319395129787e-06,
          "count": 2600
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1234.9733410049867,
          "median": 20.0,
          "min": 0.0,
          "max": 108394.0,
          "p5": 0.0,
          "p95": 6115.399999999976,
          "count": 2607
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.7314679730917999,
          "median": 0.6432086933135683,
          "min": 0.19955149490664567,
          "max": 2.833895343515212,
          "p5": 0.2973578136237116,
          "p95": 1.505944110348048,
          "count": 26
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 21964972.822384614,
          "median": 768414.0,
          "min": 0.0,
          "max": 287696269.8,
          "p5": 800.0,
          "p95": 79654851.1875,
          "count": 26
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.05398672705069078,
          "median": 0.02031353787810571,
          "min": 0.0019663701724218934,
          "max": 0.5477289666299924,
          "p5": 0.002824429327209155,
          "p95": 0.11981038539205717,
          "count": 26
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0033454164963089912,
          "median": 0.0013982450742472798,
          "min": 0.0,
          "max": 0.017621258879094652,
          "p5": 6.062222653313611e-06,
          "p95": 0.01311164218566492,
          "count": 26
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 2.2642258546702875e-06,
          "median": 2.4736649661487716e-08,
          "min": 7.49964476432633e-11,
          "max": 4.8391248391248404e-05,
          "p5": 1.8274069267056212e-10,
          "p95": 3.7862992580084866e-06,
          "count": 26
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 665.0769230769231,
          "median": 43.5,
          "min": 0.0,
          "max": 6023.0,
          "p5": 0.5,
          "p95": 2912.75,
          "count": 26
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 119049.53025000001,
          "median": 59540.621,
          "min": 0.0,
          "max": 388800.0,
          "p5": 1120.0,
          "p95": 347219.99999999994,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 15.0,
          "median": 12.5,
          "min": 0.0,
          "max": 38.0,
          "p5": 0.7000000000000001,
          "p95": 37.3,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 1.115057069245381,
          "median": 0.7934429793131452,
          "min": 0.6784847877359251,
          "max": 2.833895343515212,
          "p5": 0.6798502808965322,
          "p95": 2.3864577450566498,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.11924501931229636,
          "median": 0.059265602667211176,
          "min": 0.03259896113200791,
          "max": 0.5477289666299924,
          "p5": 0.03365751812002906,
          "p95": 0.3919008214757818,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 18.36209996643498,
          "median": 5.66875,
          "min": 1.4324324324324325,
          "max": 97.07142857142857,
          "p5": 1.711778132019419,
          "p95": 69.00267857142853,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 6.732624044181265e-06,
          "median": 3.771515025613404e-07,
          "min": 8.352008424169779e-08,
          "max": 4.8391248391248404e-05,
          "p5": 8.567436100136432e-08,
          "p95": 3.2311870840298916e-05,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0005290213074481544,
          "median": 0.00031767939731182257,
          "min": 0.0,
          "max": 0.0021100096513404424,
          "p5": 8.487111714639055e-06,
          "p95": 0.0016178530991779617,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1W",
        "stock": -0.19444444444444453,
        "market": -0.003981662176825607,
        "sector": -0.03986980125084438,
        "peers": -0.005555555555555536
      },
      {
        "horizon": "2W",
        "stock": -0.12121212121212144,
        "market": -0.025729709667726475,
        "sector": -0.03634190195107778,
        "peers": -0.012183331607469539
      },
      {
        "horizon": "1M",
        "stock": -0.10769230769230786,
        "market": -0.01934411605736608,
        "sector": -0.04320768305754574,
        "peers": 0.01431213051597302
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
      "share_market": 0.16377928384592375,
      "share_sector": 0.5212002978016922,
      "share_idio": 0.31502041835238415,
      "beta_market": 1.5162720558955456,
      "beta_sector": -9.308835099870112,
      "driver_model": {
        "valid": true,
        "model_method": "ols_with_volatility_regimes",
        "estimation_window_days": 22,
        "reporting_window_days": 22,
        "available_history_days": 22,
        "n_regimes": 2,
        "current_regime": 1,
        "current_regime_label": "High Volatility",
        "current_regime_probability": 1.0,
        "current_driver_mix": {
          "market_share": {
            "median": 0.16377928384592375,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "16.4%",
            "display_range": null,
            "display_text": "16.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 16.4,
            "plain_english": "Market explains about 16.4% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.5212002978016922,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "52.1%",
            "display_range": null,
            "display_text": "52.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 52.1,
            "plain_english": "Sector explains about 52.1% of price moves in the current state."
          },
          "company_share": {
            "median": 0.31502041835238415,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "31.5%",
            "display_range": null,
            "display_text": "31.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 31.5,
            "plain_english": "Company-specific explains about 31.5% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 1.5162720558955456,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.52",
            "display_range": null,
            "display_text": "1.52",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "beta",
            "strength_label": "High",
            "plain_english": "High market link: a 1% market move has lined up with about a 1.52% stock move in the same direction in this state.",
            "value_num": 1.52
          },
          "beta_stock_lag": {
            "median": -1.1712205998045642,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-1.17",
            "display_range": null,
            "display_text": "-1.17",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "lag_beta",
            "value_num": -1.17
          },
          "beta_sector": {
            "median": -9.308835099870112,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-9.31",
            "display_range": null,
            "display_text": "-9.31",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "beta",
            "strength_label": "Very high",
            "plain_english": "Very high sector link: a 1% sector move has lined up with about a 9.31% stock move in the opposite direction in this state. The multiplier is unusually large and comes from only 22 trading days of history.",
            "value_num": -9.31
          },
          "beta_market_lag": {
            "median": 2.123979734100586,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "2.12",
            "display_range": null,
            "display_text": "2.12",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "lag_beta",
            "value_num": 2.12
          },
          "beta_sector_lag": {
            "median": -1.0886218844378566,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-1.09",
            "display_range": null,
            "display_text": "-1.09",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "lag_beta",
            "value_num": -1.09
          },
          "posterior_source": null,
          "intervals_collapsed": false,
          "confidence_label": "High, limited history",
          "confidence_note": "Based on 22 trading days relative to the 252-day target."
        },
        "rolling_windows": {},
        "monthly_history": [
          {
            "month_key": "2026-03",
            "month_label": "March 2026",
            "month_short_label": "Mar",
            "period_label": "2026-03-03 to 2026-03-31",
            "n_obs": 21,
            "partial_month": true,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5027514619408022,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.3%",
              "display_range": null,
              "display_text": "50.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 50.3,
              "plain_english": "Company-specific explains about 50.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.21358307984395755,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "21.4%",
                "display_range": null,
                "display_text": "21.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 21.4,
                "plain_english": "Market explains about 21.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2836654582152402,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "28.4%",
                "display_range": null,
                "display_text": "28.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 28.4,
                "plain_english": "Sector explains about 28.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5027514619408022,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "50.3%",
                "display_range": null,
                "display_text": "50.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 50.3,
                "plain_english": "Company-specific explains about 50.3% of price moves in the current state."
              }
            },
            "summary": "Mar: Mostly company-driven."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5,
            "expected_duration_days": 5.0,
            "current_probability": 0.0,
            "n_days_effective": 10.0,
            "volatility": {
              "median": 0.07073014245044233,
              "low": 0.07073014245044233,
              "high": 0.07073014245044233
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": 0.0
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.5,
            "expected_duration_days": 5.0,
            "current_probability": 1.0,
            "n_days_effective": 10.0,
            "volatility": {
              "median": 0.09635914661762851,
              "low": 0.09635914661762851,
              "high": 0.09635914661762851
            },
            "volatility_label": "High Volatility",
            "current_probability_display": null
          }
        ],
        "transitions": {
          "mean": [
            [
              0.8,
              0.2
            ],
            [
              0.1111111111111111,
              0.8888888888888888
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              8.0,
              2.0
            ],
            [
              1.0,
              8.0
            ]
          ]
        },
        "methodology": {
          "estimation_window_days": 22,
          "reporting_window_days": 22,
          "current_mix_method": "ols_last_5d",
          "monthly_history_method": "ols_per_month",
          "regime_inference": "volatility_kmeans",
          "distribution": "gaussian",
          "history_limited": true,
          "current_driver_mix_basis": "ols_recent_window",
          "sector_proxy_equals_market": false
        },
        "client_read": {
          "market_link_display": "1.52",
          "sector_link_display": "-9.31",
          "market_link_explainer": "High market link. A 1% market move has lined up with about a 1.52% stock move in the same direction in this state. This is a point estimate from 22 trading days.",
          "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 9.31% stock move in the opposite direction in this state. This is a point estimate from 22 trading days.",
          "stock_persistence_display": "-1.17",
          "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
          "history_limited_note": "Read is based on 22 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "High Volatility",
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "driver_share_pct": 52.1,
          "driver_share_display": "52.1%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 22 trading days relative to the 252-day target.",
          "history_days": 22,
          "history_limited": true,
          "volatility_label": "High Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.8888888888888888,
          "effective_days": 10.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 5.0 days.",
          "expected_duration_days": 5.0
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
          "month_key": "2026-03",
          "month_label": "March 2026",
          "month_short_label": "Mar",
          "period_label": "2026-03-03 to 2026-03-31",
          "n_obs": 21,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Mar: Mostly company-driven.",
          "share_market": 0.21358307984395755,
          "share_sector": 0.2836654582152402,
          "share_company": 0.5027514619408022,
          "share_market_display": "21.4%",
          "share_sector_display": "28.4%",
          "share_company_display": "50.3%",
          "dominant_share_display": "50.3%"
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
          0.5,
          0.5
        ],
        "current_regime": 1,
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5,
            "expected_duration_days": 5.0,
            "current_probability": 0.0,
            "n_days_effective": 10.0,
            "volatility": {
              "median": 0.07073014245044233,
              "low": 0.07073014245044233,
              "high": 0.07073014245044233
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.5,
            "expected_duration_days": 5.0,
            "current_probability": 1.0,
            "n_days_effective": 10.0,
            "volatility": {
              "median": 0.09635914661762851,
              "low": 0.09635914661762851,
              "high": 0.09635914661762851
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.8,
            0.2
          ],
          [
            0.1111111111111111,
            0.8888888888888888
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 0.33,
          "quantity": 10000.0,
          "value": 3300.0
        },
        {
          "level": 2,
          "price": 0.31,
          "quantity": 40000.0,
          "value": 12400.0
        },
        {
          "level": 3,
          "price": 0.3,
          "quantity": 40000.0,
          "value": 12000.0
        },
        {
          "level": 4,
          "price": 0.295,
          "quantity": 30000.0,
          "value": 8850.0
        },
        {
          "level": 5,
          "price": 0.29,
          "quantity": 40000.0,
          "value": 11600.0
        },
        {
          "level": 6,
          "price": 0.285,
          "quantity": 40000.0,
          "value": 11399.999999999998
        },
        {
          "level": 7,
          "price": 0.255,
          "quantity": 20000.0,
          "value": 5100.0
        },
        {
          "level": 8,
          "price": 0.25,
          "quantity": 100000.0,
          "value": 25000.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.38,
          "quantity": 20000.0,
          "value": 7600.0
        },
        {
          "level": 2,
          "price": 0.385,
          "quantity": 190000.0,
          "value": 73150.0
        },
        {
          "level": 3,
          "price": 0.39,
          "quantity": 20000.0,
          "value": 7800.0
        },
        {
          "level": 4,
          "price": 0.5,
          "quantity": 20000.0,
          "value": 10000.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-04-01 07:57:42.196000000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XHKG",
        "mid_price": 0.355,
        "spread_pct": 0.1408450704225352,
        "spread_ticks": 10.0,
        "tick_size": 0.005,
        "bid_depth_notional_top10": 89650.0,
        "ask_depth_notional_top10": 98550.0,
        "bid_ask_depth_ratio": 0.9097
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 34,
        "history_limited": true,
        "trade_days_used": 20,
        "n_trades_used": 86,
        "first_trade_date": "2026-02-27",
        "last_trade_date": "2026-04-01",
        "window_label": "Feb 27, 2026 to Apr 1, 2026",
        "window_short_label": "Feb 27-Apr 1",
        "trade_days_label": "20 trading days",
        "trade_count_label": "86 trades",
        "window_detail_label": "20 trading days • 86 trades",
        "history_note": "Trade-size percentiles use available history from Feb 27, 2026 to Apr 1, 2026 (20 trading days • 86 trades), not a full year.",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 10050.0,
            "impact_pct": -0.10903,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 11.21,
            "pct_of_adv": 92.47
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 13450.0,
            "impact_pct": -0.11358,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 15.0,
            "pct_of_adv": 123.76
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 65904.37,
            "impact_pct": -0.17497,
            "filled_pct": 100.0,
            "levels_consumed": 8,
            "pct_of_bid_depth": 73.51,
            "pct_of_adv": 606.41
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-04-01",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "27648770.0",
            "timestamp": "2026-04-01 01:30:03.404000000",
            "local_timestamp": "2026-04-01 09:30:03",
            "posted_price": 0.385,
            "size_shares": 140000.0,
            "notional": 53900.0,
            "impact_pct": -0.157316,
            "filled_pct": 100.0,
            "levels_consumed": 6,
            "pct_of_bid_depth": 60.12,
            "price_vs_mid_pct": 8.451,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "5416002306.0",
            "timestamp": "2026-04-01 07:57:42.196000000",
            "local_timestamp": "2026-04-01 15:57:42",
            "posted_price": 0.385,
            "size_shares": 30000.0,
            "notional": 11550.0,
            "impact_pct": -0.111373,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 12.88,
            "price_vs_mid_pct": 8.451,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "29417218.0",
            "timestamp": "2026-04-01 01:30:05.125000000",
            "local_timestamp": "2026-04-01 09:30:05",
            "posted_price": 0.5,
            "size_shares": 20000.0,
            "notional": 10000.0,
            "impact_pct": -0.10893900000000001,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 11.15,
            "price_vs_mid_pct": 40.845,
            "executed_event_count": 0,
            "event_count": 1
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-04-01",
        "bucket_minutes": 30,
        "tick_size": 0.005,
        "timezone": "HKT (UTC+8)",
        "session_label": "HKEX continuous trading session",
        "bucket_label_basis": "bucket start time",
        "display_window_label": "HKEX continuous trading session",
        "bucket_note": "Buckets are shown in local market time and labeled by bucket start.",
        "rows": [
          {
            "bucket": "09:30",
            "spread_pct": 0.20289855072463772,
            "spread_ticks": 14.000000000000002,
            "bid_depth_notional": 106950.0,
            "ask_depth_notional": 83200.0,
            "mid_price": 0.345
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.20289855072463772,
            "spread_ticks": 14.000000000000002,
            "bid_depth_notional": 102050.0,
            "ask_depth_notional": 83200.0,
            "mid_price": 0.345
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.20289855072463772,
            "spread_ticks": 14.000000000000002,
            "bid_depth_notional": 111350.0,
            "ask_depth_notional": 83200.0,
            "mid_price": 0.345
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.18705035971223022,
            "spread_ticks": 13.0,
            "bid_depth_notional": 120250.0,
            "ask_depth_notional": 83200.0,
            "mid_price": 0.34750000000000003
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.13333333333333328,
            "spread_ticks": 8.999999999999996,
            "bid_depth_notional": 120250.0,
            "ask_depth_notional": 101200.0,
            "mid_price": 0.3375
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.14925373134328357,
            "spread_ticks": 9.999999999999998,
            "bid_depth_notional": 101350.0,
            "ask_depth_notional": 101200.0,
            "mid_price": 0.33499999999999996
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.1408450704225352,
            "spread_ticks": 9.999999999999998,
            "bid_depth_notional": 89650.0,
            "ask_depth_notional": 98550.0,
            "mid_price": 0.355
          }
        ],
        "summary": {
          "median_spread_pct": 0.18705035971223022,
          "median_spread_ticks": 13.0,
          "median_bid_depth_notional": 106950.0,
          "median_ask_depth_notional": 83200.0,
          "tightest_bucket": "14:30",
          "widest_bucket": "09:30",
          "deepest_bid_bucket": "13:30",
          "thinnest_bid_bucket": "15:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 460.1,
      "peers": [
        {
          "ticker": "994",
          "pct": 252.4
        },
        {
          "ticker": "295",
          "pct": 369.1
        },
        {
          "ticker": "90",
          "pct": 554.7
        },
        {
          "ticker": "92",
          "pct": 1514.3
        },
        {
          "ticker": "987",
          "pct": 1901.0
        },
        {
          "ticker": "1395",
          "pct": 19685.0
        },
        {
          "ticker": "1281",
          "pct": 25236.6
        },
        {
          "ticker": "1853",
          "pct": null
        }
      ]
    },
    "trader_composition": {
      "primary_period": "30d",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 1,
          "n_runs": 1,
          "n_trade_days": 1,
          "first_trade_date": "2026-04-01",
          "last_trade_date": "2026-04-01",
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
            "unclear_notional_pct": 0.0
          },
          "run_composition": {
            "retail_pct": 0.0,
            "mixed_pct": 0.0,
            "instit_pct": 1.0,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 1.0,
            "unclear_notional_pct": 0.0
          },
          "counts": {
            "trades": {
              "retail": 0,
              "mixed": 0,
              "institutional": 1,
              "ambiguous": 0,
              "unobservable": 0,
              "unclear": 0
            },
            "runs": {
              "retail": 0,
              "mixed": 0,
              "institutional": 1,
              "ambiguous": 0,
              "unobservable": 0,
              "unclear": 0
            }
          },
          "confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 1.0,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 1,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 1.0,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 1,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.7000000000000001,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.0,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "INSTITUTIONAL",
          "dominant_label": "Institution-led",
          "dominant_share": 1.0,
          "dominance_gap": 1.0,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 1
            },
            "d2_information": {
              "UNOBSERVABLE": 1
            },
            "d3_urgency": {
              "IMMEDIATE": 1
            },
            "participant_confidence": {
              "LOW": 1
            }
          },
          "trade_size": {
            "avg": 2029.9999999999998,
            "median": 2029.9999999999998
          },
          "run_size": {
            "avg": 2029.9999999999998,
            "median": 2029.9999999999998,
            "avg_length": 1.0
          },
          "recent_trades": [
            {
              "trade_id": "1",
              "timestamp": "2026-04-01T02:01:32.786151",
              "price": 0.29,
              "size": 7000.0,
              "notional": 2029.9999999999998,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 76,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": []
        },
        "1w": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 12,
          "n_runs": 12,
          "n_trade_days": 4,
          "first_trade_date": "2026-03-26",
          "last_trade_date": "2026-04-01",
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
            "retail_pct": 0.16666666666666666,
            "mixed_pct": 0.0,
            "instit_pct": 0.16666666666666666,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.6666666666666666,
            "unclear_pct": 0.6666666666666666,
            "retail_qty_pct": 0.024619516562220233,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.03804834377797672,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.937332139659803,
            "unclear_qty_pct": 0.937332139659803,
            "retail_notional_pct": 0.022546423482662066,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.033918813039899236,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.9435347634774387,
            "unclear_notional_pct": 0.9435347634774387
          },
          "run_composition": {
            "retail_pct": 0.16666666666666666,
            "mixed_pct": 0.0,
            "instit_pct": 0.16666666666666666,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.6666666666666666,
            "unclear_pct": 0.6666666666666666,
            "retail_notional_pct": 0.022546423482662066,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.033918813039899236,
            "unclear_notional_pct": 0.9435347634774387
          },
          "counts": {
            "trades": {
              "retail": 2,
              "mixed": 0,
              "institutional": 2,
              "ambiguous": 0,
              "unobservable": 8,
              "unclear": 8
            },
            "runs": {
              "retail": 2,
              "mixed": 0,
              "institutional": 2,
              "ambiguous": 0,
              "unobservable": 8,
              "unclear": 8
            }
          },
          "confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.3333333333333333,
            "na": 0.6666666666666666
          },
          "confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 4,
            "na": 8
          },
          "trade_confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.3333333333333333,
            "na": 0.6666666666666666
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 4,
            "na": 8
          },
          "observability": {
            "avg_feature_coverage": 0.6,
            "observable_run_pct": 0.33333333333333337,
            "ambiguous_run_pct": 0.0,
            "unobservable_run_pct": 0.6666666666666666
          },
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "dominant_share": 0.6666666666666666,
          "dominance_gap": 0.5,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 12
            },
            "d2_information": {
              "UNOBSERVABLE": 12
            },
            "d3_urgency": {
              "IMMEDIATE": 12
            },
            "participant_confidence": {
              "NA": 8,
              "LOW": 4
            }
          },
          "trade_size": {
            "avg": 12603.625,
            "median": 3150.0
          },
          "run_size": {
            "avg": 12603.625,
            "median": 3150.0,
            "avg_length": 1.0
          },
          "recent_trades": [
            {
              "trade_id": "1",
              "timestamp": "2026-04-01T02:01:32.786151",
              "price": 0.29,
              "size": 7000.0,
              "notional": 2029.9999999999998,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 76,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2",
              "timestamp": "2026-03-31T01:58:23.729747",
              "price": 0.31,
              "size": 10000.0,
              "notional": 3100.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 75,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1",
              "timestamp": "2026-03-31T01:48:26.517754",
              "price": 0.29,
              "size": 2100.0,
              "notional": 609.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 74,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "6",
              "timestamp": "2026-03-30T05:39:14.111160",
              "price": 0.32,
              "size": 10000.0,
              "notional": 3200.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 73,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "5",
              "timestamp": "2026-03-30T05:38:58.474213",
              "price": 0.31,
              "size": 8200.0,
              "notional": 2542.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 72,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4",
              "timestamp": "2026-03-30T05:33:49.421697",
              "price": 0.33,
              "size": 200000.0,
              "notional": 66000.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 71,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "3",
              "timestamp": "2026-03-30T03:53:13.384409",
              "price": 0.33,
              "size": 10000.0,
              "notional": 3300.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 70,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2",
              "timestamp": "2026-03-30T02:51:34.555057",
              "price": 0.305,
              "size": 20000.0,
              "notional": 6100.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1",
              "timestamp": "2026-03-30T02:51:25.491670",
              "price": 0.325,
              "size": 20000.0,
              "notional": 6500.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 68,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "3",
              "timestamp": "2026-03-26T06:35:20.871355",
              "price": 0.31,
              "size": 2800.0,
              "notional": 868.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 67,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2",
              "timestamp": "2026-03-26T02:45:28.807833",
              "price": 0.335,
              "size": 6700.0,
              "notional": 2244.5,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 66,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1",
              "timestamp": "2026-03-26T02:04:10.049020",
              "price": 0.365,
              "size": 150000.0,
              "notional": 54750.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 65,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": []
        },
        "2w": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 25,
          "n_runs": 25,
          "n_trade_days": 8,
          "first_trade_date": "2026-03-20",
          "last_trade_date": "2026-04-01",
          "period_days": 10,
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
            "retail_pct": 0.16,
            "mixed_pct": 0.0,
            "instit_pct": 0.08,
            "ambiguous_pct": 0.04,
            "unobservable_pct": 0.72,
            "unclear_pct": 0.76,
            "retail_qty_pct": 0.019404422017130336,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.02351548148639975,
            "ambiguous_qty_pct": 0.013832636168470443,
            "unobservable_qty_pct": 0.9432474603279994,
            "unclear_qty_pct": 0.9570800964964699,
            "retail_notional_pct": 0.016829016920497368,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.020673774845101845,
            "ambiguous_notional_pct": 0.014104914611667924,
            "unobservable_notional_pct": 0.9483922936227329,
            "unclear_notional_pct": 0.9624972082344009
          },
          "run_composition": {
            "retail_pct": 0.16,
            "mixed_pct": 0.0,
            "instit_pct": 0.08,
            "ambiguous_pct": 0.04,
            "unobservable_pct": 0.72,
            "unclear_pct": 0.76,
            "retail_notional_pct": 0.016829016920497368,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.020673774845101845,
            "unclear_notional_pct": 0.9624972082344009
          },
          "counts": {
            "trades": {
              "retail": 4,
              "mixed": 0,
              "institutional": 2,
              "ambiguous": 1,
              "unobservable": 18,
              "unclear": 19
            },
            "runs": {
              "retail": 4,
              "mixed": 0,
              "institutional": 2,
              "ambiguous": 1,
              "unobservable": 18,
              "unclear": 19
            }
          },
          "confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.24,
            "na": 0.76
          },
          "confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 6,
            "na": 19
          },
          "trade_confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.24,
            "na": 0.76
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 6,
            "na": 19
          },
          "observability": {
            "avg_feature_coverage": 0.5920000000000001,
            "observable_run_pct": 0.28,
            "ambiguous_run_pct": 0.04,
            "unobservable_run_pct": 0.72
          },
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "dominant_share": 0.72,
          "dominance_gap": 0.5599999999999999,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 25
            },
            "d2_information": {
              "UNOBSERVABLE": 25
            },
            "d3_urgency": {
              "IMMEDIATE": 25
            },
            "participant_confidence": {
              "NA": 19,
              "LOW": 6
            }
          },
          "trade_size": {
            "avg": 9925.618400000001,
            "median": 3400.0000000000005
          },
          "run_size": {
            "avg": 9925.618400000001,
            "median": 3400.0000000000005,
            "avg_length": 1.0
          },
          "recent_trades": [
            {
              "trade_id": "1",
              "timestamp": "2026-04-01T02:01:32.786151",
              "price": 0.29,
              "size": 7000.0,
              "notional": 2029.9999999999998,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 76,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2",
              "timestamp": "2026-03-31T01:58:23.729747",
              "price": 0.31,
              "size": 10000.0,
              "notional": 3100.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 75,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1",
              "timestamp": "2026-03-31T01:48:26.517754",
              "price": 0.29,
              "size": 2100.0,
              "notional": 609.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 74,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "6",
              "timestamp": "2026-03-30T05:39:14.111160",
              "price": 0.32,
              "size": 10000.0,
              "notional": 3200.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 73,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "5",
              "timestamp": "2026-03-30T05:38:58.474213",
              "price": 0.31,
              "size": 8200.0,
              "notional": 2542.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 72,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4",
              "timestamp": "2026-03-30T05:33:49.421697",
              "price": 0.33,
              "size": 200000.0,
              "notional": 66000.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 71,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "3",
              "timestamp": "2026-03-30T03:53:13.384409",
              "price": 0.33,
              "size": 10000.0,
              "notional": 3300.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 70,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2",
              "timestamp": "2026-03-30T02:51:34.555057",
              "price": 0.305,
              "size": 20000.0,
              "notional": 6100.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1",
              "timestamp": "2026-03-30T02:51:25.491670",
              "price": 0.325,
              "size": 20000.0,
              "notional": 6500.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 68,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "3",
              "timestamp": "2026-03-26T06:35:20.871355",
              "price": 0.31,
              "size": 2800.0,
              "notional": 868.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 67,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2",
              "timestamp": "2026-03-26T02:45:28.807833",
              "price": 0.335,
              "size": 6700.0,
              "notional": 2244.5,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 66,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1",
              "timestamp": "2026-03-26T02:04:10.049020",
              "price": 0.365,
              "size": 150000.0,
              "notional": 54750.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 65,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1",
              "timestamp": "2026-03-25T07:48:10.867263",
              "price": 0.36,
              "size": 20000.0,
              "notional": 7200.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 64,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2",
              "timestamp": "2026-03-24T02:37:55.764833",
              "price": 0.32,
              "size": 128.0,
              "notional": 40.96,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 63,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1",
              "timestamp": "2026-03-24T01:50:43.869647",
              "price": 0.35,
              "size": 100000.0,
              "notional": 35000.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 62,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4",
              "timestamp": "2026-03-23T06:08:49.414238",
              "price": 0.3,
              "size": 2900.0,
              "notional": 870.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 61,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "3",
              "timestamp": "2026-03-23T06:08:38.264018",
              "price": 0.25,
              "size": 2900.0,
              "notional": 725.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 60,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2",
              "timestamp": "2026-03-23T05:38:00.067707",
              "price": 0.34,
              "size": 10000.0,
              "notional": 3400.0000000000005,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 59,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1",
              "timestamp": "2026-03-23T02:36:35.776671",
              "price": 0.34,
              "size": 10000.0,
              "notional": 3400.0000000000005,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 58,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "6",
              "timestamp": "2026-03-20T05:18:35.144198",
              "price": 0.36,
              "size": 50000.0,
              "notional": 18000.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 57,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "5",
              "timestamp": "2026-03-20T05:16:16.495653",
              "price": 0.355,
              "size": 30000.0,
              "notional": 10650.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 56,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4",
              "timestamp": "2026-03-20T05:07:03.156780",
              "price": 0.355,
              "size": 10000.0,
              "notional": 3550.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 55,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "3",
              "timestamp": "2026-03-20T03:49:31.647081",
              "price": 0.35,
              "size": 10000.0,
              "notional": 3500.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 54,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2",
              "timestamp": "2026-03-20T02:49:47.170600",
              "price": 0.35,
              "size": 30000.0,
              "notional": 10500.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 53,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1",
              "timestamp": "2026-03-20T02:39:27.590592",
              "price": 0.305,
              "size": 200.0,
              "notional": 61.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 52,
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
          "n_trades": 67,
          "n_runs": 63,
          "n_trade_days": 17,
          "first_trade_date": "2026-03-04",
          "last_trade_date": "2026-04-01",
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
            "retail_pct": 0.1044776119402985,
            "mixed_pct": 0.0,
            "instit_pct": 0.14925373134328357,
            "ambiguous_pct": 0.208955223880597,
            "unobservable_pct": 0.5373134328358209,
            "unclear_pct": 0.7462686567164178,
            "retail_qty_pct": 0.013193178161535986,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.1198806241363863,
            "ambiguous_qty_pct": 0.10040002271422352,
            "unobservable_qty_pct": 0.7665261749878542,
            "unclear_qty_pct": 0.8669261977020778,
            "retail_notional_pct": 0.01184396592545221,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.11645431011305832,
            "ambiguous_notional_pct": 0.09404241586874867,
            "unobservable_notional_pct": 0.7776593080927408,
            "unclear_notional_pct": 0.8717017239614895
          },
          "run_composition": {
            "retail_pct": 0.1111111111111111,
            "mixed_pct": 0.0,
            "instit_pct": 0.12698412698412698,
            "ambiguous_pct": 0.2222222222222222,
            "unobservable_pct": 0.5396825396825397,
            "unclear_pct": 0.7619047619047619,
            "retail_notional_pct": 0.01184396592545221,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.11645431011305832,
            "unclear_notional_pct": 0.8717017239614895
          },
          "counts": {
            "trades": {
              "retail": 7,
              "mixed": 0,
              "institutional": 10,
              "ambiguous": 14,
              "unobservable": 36,
              "unclear": 50
            },
            "runs": {
              "retail": 7,
              "mixed": 0,
              "institutional": 8,
              "ambiguous": 14,
              "unobservable": 34,
              "unclear": 48
            }
          },
          "confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.23809523809523808,
            "na": 0.7619047619047619
          },
          "confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 15,
            "na": 48
          },
          "trade_confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.2537313432835821,
            "na": 0.746268656716418
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 17,
            "na": 50
          },
          "observability": {
            "avg_feature_coverage": 0.6190476190476191,
            "observable_run_pct": 0.46031746031746035,
            "ambiguous_run_pct": 0.2222222222222222,
            "unobservable_run_pct": 0.5396825396825397
          },
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "dominant_share": 0.5396825396825397,
          "dominance_gap": 0.31746031746031744,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 67
            },
            "d2_information": {
              "UNOBSERVABLE": 67
            },
            "d3_urgency": {
              "IMMEDIATE": 63
            },
            "participant_confidence": {
              "NA": 48,
              "LOW": 15
            }
          },
          "trade_size": {
            "avg": 6274.320298507462,
            "median": 3250.0
          },
          "run_size": {
            "avg": 6672.689841269841,
            "median": 3350.0,
            "avg_length": 1.0634920634920635
          },
          "recent_trades": [
            {
              "trade_id": "1",
              "timestamp": "2026-04-01T02:01:32.786151",
              "price": 0.29,
              "size": 7000.0,
              "notional": 2029.9999999999998,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 76,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2",
              "timestamp": "2026-03-31T01:58:23.729747",
              "price": 0.31,
              "size": 10000.0,
              "notional": 3100.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 75,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1",
              "timestamp": "2026-03-31T01:48:26.517754",
              "price": 0.29,
              "size": 2100.0,
              "notional": 609.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 74,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "6",
              "timestamp": "2026-03-30T05:39:14.111160",
              "price": 0.32,
              "size": 10000.0,
              "notional": 3200.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 73,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "5",
              "timestamp": "2026-03-30T05:38:58.474213",
              "price": 0.31,
              "size": 8200.0,
              "notional": 2542.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 72,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4",
              "timestamp": "2026-03-30T05:33:49.421697",
              "price": 0.33,
              "size": 200000.0,
              "notional": 66000.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 71,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "3",
              "timestamp": "2026-03-30T03:53:13.384409",
              "price": 0.33,
              "size": 10000.0,
              "notional": 3300.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 70,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2",
              "timestamp": "2026-03-30T02:51:34.555057",
              "price": 0.305,
              "size": 20000.0,
              "notional": 6100.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 69,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1",
              "timestamp": "2026-03-30T02:51:25.491670",
              "price": 0.325,
              "size": 20000.0,
              "notional": 6500.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 68,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "3",
              "timestamp": "2026-03-26T06:35:20.871355",
              "price": 0.31,
              "size": 2800.0,
              "notional": 868.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 67,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2",
              "timestamp": "2026-03-26T02:45:28.807833",
              "price": 0.335,
              "size": 6700.0,
              "notional": 2244.5,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 66,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1",
              "timestamp": "2026-03-26T02:04:10.049020",
              "price": 0.365,
              "size": 150000.0,
              "notional": 54750.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 65,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1",
              "timestamp": "2026-03-25T07:48:10.867263",
              "price": 0.36,
              "size": 20000.0,
              "notional": 7200.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 64,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2",
              "timestamp": "2026-03-24T02:37:55.764833",
              "price": 0.32,
              "size": 128.0,
              "notional": 40.96,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 63,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1",
              "timestamp": "2026-03-24T01:50:43.869647",
              "price": 0.35,
              "size": 100000.0,
              "notional": 35000.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 62,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4",
              "timestamp": "2026-03-23T06:08:49.414238",
              "price": 0.3,
              "size": 2900.0,
              "notional": 870.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 61,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "3",
              "timestamp": "2026-03-23T06:08:38.264018",
              "price": 0.25,
              "size": 2900.0,
              "notional": 725.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 60,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2",
              "timestamp": "2026-03-23T05:38:00.067707",
              "price": 0.34,
              "size": 10000.0,
              "notional": 3400.0000000000005,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 59,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1",
              "timestamp": "2026-03-23T02:36:35.776671",
              "price": 0.34,
              "size": 10000.0,
              "notional": 3400.0000000000005,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 58,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "6",
              "timestamp": "2026-03-20T05:18:35.144198",
              "price": 0.36,
              "size": 50000.0,
              "notional": 18000.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 57,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "5",
              "timestamp": "2026-03-20T05:16:16.495653",
              "price": 0.355,
              "size": 30000.0,
              "notional": 10650.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 56,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4",
              "timestamp": "2026-03-20T05:07:03.156780",
              "price": 0.355,
              "size": 10000.0,
              "notional": 3550.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 55,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "3",
              "timestamp": "2026-03-20T03:49:31.647081",
              "price": 0.35,
              "size": 10000.0,
              "notional": 3500.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 54,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2",
              "timestamp": "2026-03-20T02:49:47.170600",
              "price": 0.35,
              "size": 30000.0,
              "notional": 10500.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 53,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1",
              "timestamp": "2026-03-20T02:39:27.590592",
              "price": 0.305,
              "size": 200.0,
              "notional": 61.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 52,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4",
              "timestamp": "2026-03-18T07:01:54.182436",
              "price": 0.33,
              "size": 20000.0,
              "notional": 6600.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 51,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "3",
              "timestamp": "2026-03-18T03:47:56.718461",
              "price": 0.315,
              "size": 10000.0,
              "notional": 3150.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 50,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2",
              "timestamp": "2026-03-18T03:47:56.718461",
              "price": 0.32,
              "size": 30000.0,
              "notional": 9600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 50,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1",
              "timestamp": "2026-03-18T02:53:02.930359",
              "price": 0.3,
              "size": 2000.0,
              "notional": 600.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 49,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "8",
              "timestamp": "2026-03-17T07:54:34.816121",
              "price": 0.355,
              "size": 20000.0,
              "notional": 7100.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 48,
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
      "n_trades": 67,
      "n_runs": 63,
      "n_trade_days": 17,
      "first_trade_date": "2026-03-04",
      "last_trade_date": "2026-04-01",
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
        "retail_pct": 0.1044776119402985,
        "mixed_pct": 0.0,
        "instit_pct": 0.14925373134328357,
        "ambiguous_pct": 0.208955223880597,
        "unobservable_pct": 0.5373134328358209,
        "unclear_pct": 0.7462686567164178,
        "retail_qty_pct": 0.013193178161535986,
        "mixed_qty_pct": 0.0,
        "instit_qty_pct": 0.1198806241363863,
        "ambiguous_qty_pct": 0.10040002271422352,
        "unobservable_qty_pct": 0.7665261749878542,
        "unclear_qty_pct": 0.8669261977020778,
        "retail_notional_pct": 0.01184396592545221,
        "mixed_notional_pct": 0.0,
        "instit_notional_pct": 0.11645431011305832,
        "ambiguous_notional_pct": 0.09404241586874867,
        "unobservable_notional_pct": 0.7776593080927408,
        "unclear_notional_pct": 0.8717017239614895
      },
      "run_composition": {
        "retail_pct": 0.1111111111111111,
        "mixed_pct": 0.0,
        "instit_pct": 0.12698412698412698,
        "ambiguous_pct": 0.2222222222222222,
        "unobservable_pct": 0.5396825396825397,
        "unclear_pct": 0.7619047619047619
      },
      "trade_size": {
        "avg": 6274.320298507462,
        "median": 3250.0
      },
      "run_size": {
        "avg": 6672.689841269841,
        "median": 3350.0,
        "avg_length": 1.0634920634920635
      },
      "confidence": {
        "high": 0.0,
        "medium": 0.0,
        "low": 0.23809523809523808,
        "na": 0.7619047619047619
      },
      "confidence_counts": {
        "high": 0,
        "medium": 0,
        "low": 15,
        "na": 48
      },
      "trade_confidence": {
        "high": 0.0,
        "medium": 0.0,
        "low": 0.2537313432835821,
        "na": 0.746268656716418
      },
      "trade_confidence_counts": {
        "high": 0,
        "medium": 0,
        "low": 17,
        "na": 50
      },
      "counts": {
        "trades": {
          "retail": 7,
          "mixed": 0,
          "institutional": 10,
          "ambiguous": 14,
          "unobservable": 36,
          "unclear": 50
        },
        "runs": {
          "retail": 7,
          "mixed": 0,
          "institutional": 8,
          "ambiguous": 14,
          "unobservable": 34,
          "unclear": 48
        }
      },
      "observability": {
        "avg_feature_coverage": 0.6190476190476191,
        "observable_run_pct": 0.46031746031746035,
        "ambiguous_run_pct": 0.2222222222222222,
        "unobservable_run_pct": 0.5396825396825397
      },
      "dominant_bucket": "UNOBSERVABLE",
      "dominant_label": "Not Observable",
      "dominant_share": 0.5396825396825397,
      "dominance_gap": 0.31746031746031744,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2026-02",
            "n_trades": 5,
            "n_runs": 4,
            "retail_pct": 0.2,
            "mixed_pct": 0.0,
            "instit_pct": 0.6,
            "ambiguous_pct": 0.2,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.2,
            "avg_trade_size": 6186.8,
            "avg_run_notional": 7733.5,
            "retail_qty_pct": 0.09808342728297632,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6764374295377678,
            "ambiguous_qty_pct": 0.2254791431792559,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2254791431792559,
            "retail_notional_pct": 0.0899980603866296,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6772483351651905,
            "ambiguous_notional_pct": 0.23275360444818,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.23275360444818,
            "run_retail_pct": 0.25,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.5,
            "run_ambiguous_pct": 0.25,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.25,
            "avg_feature_coverage": 0.7375,
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.75,
            "na_confidence_pct": 0.25,
            "total_quantity": null
          },
          {
            "month": "2026-03",
            "n_trades": 79,
            "n_runs": 72,
            "retail_pct": 0.08860759493670886,
            "mixed_pct": 0.0,
            "instit_pct": 0.17721518987341772,
            "ambiguous_pct": 0.20253164556962025,
            "unobservable_pct": 0.5316455696202531,
            "unclear_pct": 0.7341772151898733,
            "avg_trade_size": 5958.784303797468,
            "avg_run_notional": 6538.110555555555,
            "retail_qty_pct": 0.011786689665085526,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.1500815936551421,
            "ambiguous_qty_pct": 0.10378882040095037,
            "unobservable_qty_pct": 0.734342896278822,
            "unclear_qty_pct": 0.8381317166797724,
            "retail_notional_pct": 0.010576789981543258,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.14875390010314737,
            "ambiguous_notional_pct": 0.09768261285816604,
            "unobservable_notional_pct": 0.7429866970571433,
            "unclear_notional_pct": 0.8406693099153093,
            "run_retail_pct": 0.09722222222222222,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.125,
            "run_ambiguous_pct": 0.2222222222222222,
            "run_unobservable_pct": 0.5555555555555556,
            "run_unclear_pct": 0.7777777777777778,
            "avg_feature_coverage": 0.61875,
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.2222222222222222,
            "na_confidence_pct": 0.7777777777777778,
            "total_quantity": null
          },
          {
            "month": "2026-04",
            "n_trades": 1,
            "n_runs": 1,
            "retail_pct": 0.0,
            "mixed_pct": 0.0,
            "instit_pct": 1.0,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0,
            "avg_trade_size": 2029.9999999999998,
            "avg_run_notional": 2029.9999999999998,
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
            "run_ambiguous_pct": 0.0,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.0,
            "avg_feature_coverage": 0.7000000000000001,
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 1.0,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          }
        ]
      },
      "peer_comparison": [],
      "peer_comparison_periods": {
        "1d": [],
        "1w": [],
        "2w": [],
        "30d": []
      },
      "peer_activity_enabled": false,
      "peer_activity_reason": "Disabled for XHKG to avoid fetching peer L2/L3 history.",
      "recent_trades": [
        {
          "trade_id": "1",
          "timestamp": "2026-04-01T02:01:32.786151",
          "price": 0.29,
          "size": 7000.0,
          "notional": 2029.9999999999998,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 76,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "2",
          "timestamp": "2026-03-31T01:58:23.729747",
          "price": 0.31,
          "size": 10000.0,
          "notional": 3100.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 75,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "1",
          "timestamp": "2026-03-31T01:48:26.517754",
          "price": 0.29,
          "size": 2100.0,
          "notional": 609.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 74,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "6",
          "timestamp": "2026-03-30T05:39:14.111160",
          "price": 0.32,
          "size": 10000.0,
          "notional": 3200.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 73,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "5",
          "timestamp": "2026-03-30T05:38:58.474213",
          "price": 0.31,
          "size": 8200.0,
          "notional": 2542.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 72,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "4",
          "timestamp": "2026-03-30T05:33:49.421697",
          "price": 0.33,
          "size": 200000.0,
          "notional": 66000.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 71,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "3",
          "timestamp": "2026-03-30T03:53:13.384409",
          "price": 0.33,
          "size": 10000.0,
          "notional": 3300.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 70,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "2",
          "timestamp": "2026-03-30T02:51:34.555057",
          "price": 0.305,
          "size": 20000.0,
          "notional": 6100.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 69,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "1",
          "timestamp": "2026-03-30T02:51:25.491670",
          "price": 0.325,
          "size": 20000.0,
          "notional": 6500.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 68,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "3",
          "timestamp": "2026-03-26T06:35:20.871355",
          "price": 0.31,
          "size": 2800.0,
          "notional": 868.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 67,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "2",
          "timestamp": "2026-03-26T02:45:28.807833",
          "price": 0.335,
          "size": 6700.0,
          "notional": 2244.5,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 66,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "1",
          "timestamp": "2026-03-26T02:04:10.049020",
          "price": 0.365,
          "size": 150000.0,
          "notional": 54750.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 65,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "1",
          "timestamp": "2026-03-25T07:48:10.867263",
          "price": 0.36,
          "size": 20000.0,
          "notional": 7200.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 64,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "2",
          "timestamp": "2026-03-24T02:37:55.764833",
          "price": 0.32,
          "size": 128.0,
          "notional": 40.96,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 63,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "1",
          "timestamp": "2026-03-24T01:50:43.869647",
          "price": 0.35,
          "size": 100000.0,
          "notional": 35000.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 62,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "4",
          "timestamp": "2026-03-23T06:08:49.414238",
          "price": 0.3,
          "size": 2900.0,
          "notional": 870.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 61,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "3",
          "timestamp": "2026-03-23T06:08:38.264018",
          "price": 0.25,
          "size": 2900.0,
          "notional": 725.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 60,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "2",
          "timestamp": "2026-03-23T05:38:00.067707",
          "price": 0.34,
          "size": 10000.0,
          "notional": 3400.0000000000005,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 59,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "1",
          "timestamp": "2026-03-23T02:36:35.776671",
          "price": 0.34,
          "size": 10000.0,
          "notional": 3400.0000000000005,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 58,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "6",
          "timestamp": "2026-03-20T05:18:35.144198",
          "price": 0.36,
          "size": 50000.0,
          "notional": 18000.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 57,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "5",
          "timestamp": "2026-03-20T05:16:16.495653",
          "price": 0.355,
          "size": 30000.0,
          "notional": 10650.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 56,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "4",
          "timestamp": "2026-03-20T05:07:03.156780",
          "price": 0.355,
          "size": 10000.0,
          "notional": 3550.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 55,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "3",
          "timestamp": "2026-03-20T03:49:31.647081",
          "price": 0.35,
          "size": 10000.0,
          "notional": 3500.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 54,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "2",
          "timestamp": "2026-03-20T02:49:47.170600",
          "price": 0.35,
          "size": 30000.0,
          "notional": 10500.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 53,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "1",
          "timestamp": "2026-03-20T02:39:27.590592",
          "price": 0.305,
          "size": 200.0,
          "notional": 61.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 52,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "4",
          "timestamp": "2026-03-18T07:01:54.182436",
          "price": 0.33,
          "size": 20000.0,
          "notional": 6600.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 51,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "3",
          "timestamp": "2026-03-18T03:47:56.718461",
          "price": 0.315,
          "size": 10000.0,
          "notional": 3150.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 50,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "2",
          "timestamp": "2026-03-18T03:47:56.718461",
          "price": 0.32,
          "size": 30000.0,
          "notional": 9600.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 50,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "1",
          "timestamp": "2026-03-18T02:53:02.930359",
          "price": 0.3,
          "size": 2000.0,
          "notional": 600.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 49,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "8",
          "timestamp": "2026-03-17T07:54:34.816121",
          "price": 0.355,
          "size": 20000.0,
          "notional": 7100.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 48,
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
      "total_trades": 66,
      "price_moving_trades": 35,
      "pct_price_moving": 53.03030303030303,
      "all_movers": {
        "count": 35,
        "avg_size": 4033.541714285714,
        "median_size": 2849.9999999999995,
        "retail_count": 6,
        "mixed_count": 0,
        "institutional_count": 5,
        "ambiguous_count": 8,
        "unobservable_count": 16,
        "retail_pct": 17.142857142857142,
        "mixed_pct": 0.0,
        "instit_pct": 14.285714285714285,
        "unclear_pct": 68.57142857142857
      },
      "positive_movers": {
        "count": 16,
        "avg_size": 6720.0,
        "median_size": 3325.0,
        "retail_count": 0,
        "mixed_count": 0,
        "institutional_count": 3,
        "ambiguous_count": 5,
        "unobservable_count": 8,
        "retail_pct": 0.0,
        "mixed_pct": 0.0,
        "instit_pct": 18.75,
        "unclear_pct": 81.25
      },
      "negative_movers": {
        "count": 19,
        "avg_size": 1771.2610526315789,
        "median_size": 1375.0,
        "retail_count": 6,
        "mixed_count": 0,
        "institutional_count": 2,
        "ambiguous_count": 3,
        "unobservable_count": 8,
        "retail_pct": 31.57894736842105,
        "mixed_pct": 0.0,
        "instit_pct": 10.526315789473683,
        "unclear_pct": 57.89473684210527
      }
    },
    "short_selling": {
      "data_available": false
    },
    "intraday": {
      "session_periods": [
        "1D",
        "1W",
        "2W",
        "1M"
      ],
      "session": {
        "1D": {
          "opening": 0.0,
          "continuous": 0.9673679957733785,
          "closing": 0.0326320042266215,
          "auctions": 0.0326320042266215,
          "other": 0.0
        },
        "1W": {
          "opening": 0.0,
          "continuous": 0.983980427438812,
          "closing": 0.0160195725611879,
          "auctions": 0.0160195725611879,
          "other": 0.0
        },
        "2W": {
          "opening": 0.0,
          "continuous": 0.9897238642472228,
          "closing": 0.010276135752777185,
          "auctions": 0.010276135752777185,
          "other": 0.0
        },
        "1M": {
          "opening": 0.0,
          "continuous": 0.9933812956170561,
          "closing": 0.006618704382943864,
          "auctions": 0.006618704382943864,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.8820561308553575,
        "1W": 0.9234789798303488,
        "2W": 0.7333359468413654,
        "1M": 0.659712074930546
      },
      "profile_buckets": [
        {
          "time": "09:30",
          "avg_share": 0.2185
        },
        {
          "time": "10:00",
          "avg_share": 0.207
        },
        {
          "time": "10:30",
          "avg_share": 0.0304
        },
        {
          "time": "11:00",
          "avg_share": 0.0009
        },
        {
          "time": "11:30",
          "avg_share": 0.0264
        },
        {
          "time": "13:00",
          "avg_share": 0.1066
        },
        {
          "time": "13:30",
          "avg_share": 0.1031
        },
        {
          "time": "14:00",
          "avg_share": 0.0374
        },
        {
          "time": "14:30",
          "avg_share": 0.0759
        },
        {
          "time": "15:00",
          "avg_share": 0.0729
        },
        {
          "time": "15:30",
          "avg_share": 0.113
        },
        {
          "time": "16:00",
          "avg_share": 0.0076
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "1004",
          "auctions_pct": 0.6214758864593939,
          "hhi": 0.6478346298083181,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400",
            "you": true
          }
        },
        {
          "ticker": "1281",
          "auctions_pct": 1.2506790255671052,
          "hhi": 0.6769559044561252,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "1395",
          "auctions_pct": 0.5374770401835669,
          "hhi": 0.7029169992137777,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "92",
          "auctions_pct": 0.5084689055753658,
          "hhi": 0.5508336115334926,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "90",
          "auctions_pct": 1.6166345098279755,
          "hhi": 0.5281050386208334,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "987",
          "auctions_pct": 1.1803891241950546,
          "hhi": 0.5315825048144668,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "994",
          "auctions_pct": 0.8192134266240169,
          "hhi": 0.4619796910317156,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "295",
          "auctions_pct": 1.391818691266474,
          "hhi": 0.5166056325411577,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "1853",
          "auctions_pct": 3.358261694845894,
          "hhi": 0.6435582663158551,
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
