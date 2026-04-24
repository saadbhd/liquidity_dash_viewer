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
      "ticker": "1398",
      "name": "ICBC",
      "marketCap": 630124763433.0,
      "sector": "Banks",
      "industry": "Financials - Banks"
    },
    {
      "ticker": "3988",
      "name": "BANK OF CHINA",
      "marketCap": 439016951073.75,
      "sector": "Banks",
      "industry": "Financials - Banks"
    },
    {
      "ticker": "939",
      "name": "CCB",
      "marketCap": 2154139186124.8003,
      "sector": "Banks",
      "industry": "Financials - Banks"
    },
    {
      "ticker": "5",
      "name": "HSBC HOLDINGS",
      "marketCap": 2469275611788.3,
      "sector": "Banks",
      "industry": "Financials - Banks"
    },
    {
      "ticker": "3968",
      "name": "CM BANK",
      "marketCap": 235742775182.2,
      "sector": "Banks",
      "industry": "Financials - Banks"
    },
    {
      "ticker": "1288",
      "name": "ABC",
      "marketCap": 192117644350.0,
      "sector": "Banks",
      "industry": "Financials - Banks"
    },
    {
      "ticker": "2888",
      "name": "STANCHART",
      "marketCap": 427767914126.8,
      "sector": "Banks",
      "industry": "Financials - Banks"
    },
    {
      "ticker": "998",
      "name": "CITIC BANK",
      "marketCap": 124563704117.48999,
      "sector": "Banks",
      "industry": "Financials - Banks"
    },
    {
      "ticker": "1658",
      "name": "PSBC",
      "marketCap": 104244876750.0,
      "sector": "Banks",
      "industry": "Financials - Banks"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XHKG",
    "currency": "HKD",
    "ticker": "1398",
    "company": "ICBC",
    "asof_date": "2026-04-21",
    "industry": "Financials - Banks",
    "sector": "Banks",
    "market_cap_display": "630.1B",
    "market_cap_category": "large",
    "universe_total": 2573,
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
          "score_pca": 98.01787796346677,
          "score_pca_percentile": 98.01787796346677,
          "rank_pca": 52,
          "total": 2573,
          "adv_notional_sgd": 2042332343.7,
          "adv_volume_shares": 281312995.0,
          "free_float_shares": 63345228370.0,
          "turnover_ratio": 0.004440950048468504,
          "votes": 16883.0,
          "trades": 16883.0,
          "spread_pct": 0.0014561430942065289,
          "spread_ticks": 1.0564304461942258,
          "amihud": 4.7669734649428564e-12,
          "volatility": 0.4261542320176028
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5401216091395131,
          "loadings": {
            "log_adv": 0.5398633206775353,
            "log_trades": 0.4990568443095309,
            "log_turnover": 0.504583571884669,
            "neg_spread": 0.3895806484506804,
            "neg_amihud": 0.04188883945983949,
            "neg_vol": -0.2266219839300702
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
          "peer_median_adv": 490440578.57500005,
          "peer_median_score_pca": 92.36300038865139,
          "peer_median_trades": 6174.0,
          "peer_median_volatility": 0.18016454594424927,
          "peer_median_spread_pct": 0.0014967187508233056,
          "peer_median_spread_ticks": 1.0749854326352701,
          "peer_median_amihud": 1.8399745690440798e-11,
          "peer_median_turnover_ratio": 0.003013226547233355,
          "target_vs_peer": {
            "score_pca_delta": 5.65,
            "adv_delta_pct": 316.4,
            "trades_delta_pct": 173.45,
            "volatility_delta_pct": -136.54,
            "spread_pct_delta_pct": 2.71,
            "spread_ticks_delta_pct": -1.73,
            "amihud_delta_pct": 74.09,
            "turnover_ratio_delta_pct": 47.38
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1398",
            "score_pca": 98.01787796346677,
            "rank_pca": 52,
            "adv": 2042332343.7,
            "trades": 16883.0,
            "volatility": 0.4261542320176028,
            "spread_pct": 0.0014561430942065289,
            "spread_ticks": 1.0564304461942258,
            "amihud": 4.7669734649428564e-12,
            "turnover_ratio": 0.004440950048468504,
            "is_target": true
          },
          {
            "ticker": "3988",
            "score_pca": 94.98639720171008,
            "rank_pca": 130,
            "adv": 945905961.0,
            "trades": 8495.0,
            "volatility": 0.2922409218337481,
            "spread_pct": 0.001966790413385652,
            "spread_ticks": 1.0300287444193015,
            "amihud": 8.116603026863062e-12,
            "turnover_ratio": 0.003188462153863848,
            "is_target": false
          },
          {
            "ticker": "939",
            "score_pca": 98.4453944811504,
            "rank_pca": 41,
            "adv": 2287585171.2000003,
            "trades": 17885.0,
            "volatility": 0.5449262294462458,
            "spread_pct": 0.0011722045844460214,
            "spread_ticks": 1.0487865192355248,
            "amihud": 3.9382179612062505e-12,
            "turnover_ratio": 0.002837990940602862,
            "is_target": false
          },
          {
            "ticker": "5",
            "score_pca": 93.70384764865915,
            "rank_pca": 163,
            "adv": 1991016094.1999998,
            "trades": 8579.0,
            "volatility": 0.16034486274931326,
            "spread_pct": 0.000721707323850918,
            "spread_ticks": 1.0324256911245064,
            "amihud": 5.298060240436924e-12,
            "turnover_ratio": 0.0008067058225285587,
            "is_target": false
          },
          {
            "ticker": "3968",
            "score_pca": 91.44966964632725,
            "rank_pca": 221,
            "adv": 501411388.40000004,
            "trades": 4310.0,
            "volatility": 0.17698471897037682,
            "spread_pct": 0.001071084499977328,
            "spread_ticks": 1.1011843460350155,
            "amihud": 9.757193432877798e-12,
            "turnover_ratio": 0.0037813382795918297,
            "is_target": false
          },
          {
            "ticker": "1288",
            "score_pca": 93.2763311309755,
            "rank_pca": 174,
            "adv": 479469768.75,
            "trades": 8038.0,
            "volatility": 0.16846984441736632,
            "spread_pct": 0.0016782315375854407,
            "spread_ticks": 1.045676779853995,
            "amihud": 2.7042297948003798e-11,
            "turnover_ratio": 0.004141151632369444,
            "is_target": false
          },
          {
            "ticker": "2888",
            "score_pca": 75.2817722502915,
            "rank_pca": 637,
            "adv": 74737780.0,
            "trades": 1214.0,
            "volatility": 0.12971102897770162,
            "spread_pct": 0.0013152059640611706,
            "spread_ticks": 2.5156423341468828,
            "amihud": 1.4765233282283063e-10,
            "turnover_ratio": 0.00020746320169326847,
            "is_target": false
          },
          {
            "ticker": "998",
            "score_pca": 88.30159347065683,
            "rank_pca": 302,
            "adv": 198835895.33999997,
            "trades": 3730.0,
            "volatility": 0.24195363222395064,
            "spread_pct": 0.001983052757293723,
            "spread_ticks": 1.6511002855703008,
            "amihud": 9.177505475698017e-11,
            "turnover_ratio": 0.0026132253014173323,
            "is_target": false
          },
          {
            "ticker": "1658",
            "score_pca": 89.46754760979402,
            "rank_pca": 272,
            "adv": 182854465.5,
            "trades": 4300.0,
            "volatility": 0.18334437291812172,
            "spread_pct": 0.0021632909845599423,
            "spread_ticks": 1.1279988710132656,
            "amihud": 1.279258496724931e-10,
            "turnover_ratio": 0.004967675983327419,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Banks",
          "sector_count": 37,
          "market_count": 2573,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4137618310559361,
              "median": 0.2861320657861704,
              "min": 0.0,
              "max": 7.073343932895646,
              "p5": 0.0,
              "p95": 1.3455276123066036,
              "count": 2573
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 53195232.43707454,
              "median": 266208.0,
              "min": 0.0,
              "max": 6802688700.0,
              "p5": 0.0,
              "p95": 238522447.6160001,
              "count": 2573
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04618055045352236,
              "median": 0.026329647182727775,
              "min": 0.000502604471656948,
              "max": 0.8734693877551021,
              "p5": 0.0013805371518808597,
              "p95": 0.15582888317078666,
              "count": 2573
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005459825970823092,
              "median": 0.0010126008628010678,
              "min": 0.0,
              "max": 0.49200996715020767,
              "p5": 0.0,
              "p95": 0.02032796405233106,
              "count": 2552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.055329886935778e-06,
              "median": 5.467819227227194e-09,
              "min": 0.0,
              "max": 0.003341687552213872,
              "p5": 0.0,
              "p95": 5.139310094835402e-06,
              "count": 2196
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 992.7718616401088,
              "median": 23.0,
              "min": 0.0,
              "max": 37433.0,
              "p5": 0.0,
              "p95": 5641.800000000001,
              "count": 2573
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.22479335797457753,
              "median": 0.18334437291812172,
              "min": 0.0,
              "max": 0.6658616383695962,
              "p5": 0.0,
              "p95": 0.47223917696256007,
              "count": 37
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 246295627.3835343,
              "median": 11869280.0,
              "min": 0.0,
              "max": 2287585171.2000003,
              "p5": 0.0,
              "p95": 2001279344.0999997,
              "count": 37
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.014861763065398461,
              "median": 0.0034038512432376785,
              "min": 0.000721707323850918,
              "max": 0.14463276836158198,
              "p5": 0.0011519805675522827,
              "p95": 0.06034707343401871,
              "count": 37
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003594788277484003,
              "median": 0.0011396906323873498,
              "min": 0.0,
              "max": 0.06415911180013685,
              "p5": 0.0,
              "p95": 0.005966176855350924,
              "count": 37
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.3474978417407354e-08,
              "median": 3.609678930517695e-10,
              "min": 0.0,
              "max": 3.327417923691219e-07,
              "p5": 0.0,
              "p95": 2.0849386501716054e-07,
              "count": 34
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2410.972972972973,
              "median": 451.0,
              "min": 0.0,
              "max": 17885.0,
              "p5": 0.0,
              "p95": 10239.799999999965,
              "count": 37
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 832727065.54875,
              "median": 490440578.57500005,
              "min": 74737780.0,
              "max": 2287585171.2000003,
              "p5": 112578619.92500001,
              "p95": 2183785994.25,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 7068.875,
              "median": 6174.0,
              "min": 1214.0,
              "max": 17885.0,
              "p5": 2094.6000000000004,
              "p95": 14627.899999999994,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.23724695144210306,
              "median": 0.18016454594424927,
              "min": 0.12971102897770162,
              "max": 0.5449262294462458,
              "p5": 0.1404328707977657,
              "p95": 0.45648637178187146,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0015089460081450245,
              "median": 0.0014967187508233056,
              "min": 0.000721707323850918,
              "max": 0.0021632909845599423,
              "p5": 0.0008439893354951615,
              "p95": 0.002100207605016765,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.319105446424849,
              "median": 1.0749854326352701,
              "min": 1.0300287444193015,
              "max": 2.5156423341468828,
              "p5": 1.0308676757661233,
              "p95": 2.2130526171450784,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.268820123271147e-11,
              "median": 1.8399745690440798e-11,
              "min": 3.9382179612062505e-12,
              "max": 1.4765233282283063e-10,
              "p5": 4.414162758936986e-12,
              "p95": 1.407480637202125e-10,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0028180016644243203,
              "median": 0.003013226547233355,
              "min": 0.00020746320169326847,
              "max": 0.004967675983327419,
              "p5": 0.0004171981189856201,
              "p95": 0.004678392460492127,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.009735744089012455,
            "market": 0.003158555184072487,
            "sector": 0.009009009009008917,
            "peers": 0.010791865386875266,
            "vs_market": 0.006577188904939968,
            "vs_sector": 0.0007267350800035377,
            "vs_peers": -0.001056121297862811
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 98.2510687912942,
          "score_pca_percentile": 98.2510687912942,
          "rank_pca": 46,
          "total": 2573,
          "adv_notional_sgd": 1539468048.15,
          "adv_volume_shares": 216003215.0,
          "free_float_shares": 63345228370.0,
          "turnover_ratio": 0.0034099366370316554,
          "votes": 12943.0,
          "trades": 12943.0,
          "spread_pct": 0.0014898135234903416,
          "spread_ticks": 1.04219875573019,
          "amihud": 5.547259627479332e-12,
          "volatility": 0.204734920919781
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5738772565480973,
          "loadings": {
            "log_adv": 0.5192860769281911,
            "log_trades": 0.4734323135422246,
            "log_turnover": 0.47682701953977535,
            "neg_spread": 0.46374133851166377,
            "neg_amihud": 0.23774742130033386,
            "neg_vol": 0.08520529830856402
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
          "peer_median_adv": 621195241.25,
          "peer_median_score_pca": 96.44383987563155,
          "peer_median_trades": 7691.5,
          "peer_median_volatility": 0.2129354615428386,
          "peer_median_spread_pct": 0.0015243286169653453,
          "peer_median_spread_ticks": 1.0726342499326855,
          "peer_median_amihud": 1.4789409328121388e-11,
          "peer_median_turnover_ratio": 0.003916319548989196,
          "target_vs_peer": {
            "score_pca_delta": 1.81,
            "adv_delta_pct": 147.8,
            "trades_delta_pct": 68.28,
            "volatility_delta_pct": 3.85,
            "spread_pct_delta_pct": 2.26,
            "spread_ticks_delta_pct": -2.84,
            "amihud_delta_pct": 62.49,
            "turnover_ratio_delta_pct": -12.93
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1398",
            "score_pca": 98.2510687912942,
            "rank_pca": 46,
            "adv": 1539468048.15,
            "trades": 12943.0,
            "volatility": 0.204734920919781,
            "spread_pct": 0.0014898135234903416,
            "spread_ticks": 1.04219875573019,
            "amihud": 5.547259627479332e-12,
            "turnover_ratio": 0.0034099366370316554,
            "is_target": true
          },
          {
            "ticker": "3988",
            "score_pca": 98.4453944811504,
            "rank_pca": 41,
            "adv": 1357898808.0,
            "trades": 12778.0,
            "volatility": 0.17078632620917633,
            "spread_pct": 0.0020383233500495973,
            "spread_ticks": 1.0198737601442742,
            "amihud": 4.674008833497951e-12,
            "turnover_ratio": 0.005092547509175748,
            "is_target": false
          },
          {
            "ticker": "939",
            "score_pca": 98.8340458608628,
            "rank_pca": 31,
            "adv": 2287585171.2000003,
            "trades": 16414.0,
            "volatility": 0.2114299905555936,
            "spread_pct": 0.0012150155006530705,
            "spread_ticks": 1.0216612273628976,
            "amihud": 3.9382179612062505e-12,
            "turnover_ratio": 0.002864989525767373,
            "is_target": false
          },
          {
            "ticker": "5",
            "score_pca": 96.7741935483871,
            "rank_pca": 84,
            "adv": 2214643046.4,
            "trades": 10295.0,
            "volatility": 0.36495006965949733,
            "spread_pct": 0.0008283536548651357,
            "spread_ticks": 1.079548015323697,
            "amihud": 4.2814872134032325e-12,
            "turnover_ratio": 0.0009785581531926788,
            "is_target": false
          },
          {
            "ticker": "3968",
            "score_pca": 96.61873299650213,
            "rank_pca": 88,
            "adv": 694554185.7,
            "trades": 7345.0,
            "volatility": 0.19220750134074785,
            "spread_pct": 0.0006173946113100451,
            "spread_ticks": 1.1011843460350155,
            "amihud": 1.1587706048188655e-11,
            "turnover_ratio": 0.005368589435837446,
            "is_target": false
          },
          {
            "ticker": "1288",
            "score_pca": 96.26894675476098,
            "rank_pca": 97,
            "adv": 547836296.8000001,
            "trades": 8038.0,
            "volatility": 0.21444093253008356,
            "spread_pct": 0.0018679990553499902,
            "spread_ticks": 1.0632577754348973,
            "amihud": 1.799111260805412e-11,
            "turnover_ratio": 0.004967649572211019,
            "is_target": false
          },
          {
            "ticker": "2888",
            "score_pca": 85.736494364555,
            "rank_pca": 368,
            "adv": 204379604.99999997,
            "trades": 2976.0,
            "volatility": 0.4902877187869196,
            "spread_pct": 0.0013206639881065791,
            "spread_ticks": 2.273932863655201,
            "amihud": 1.1396656872599539e-10,
            "turnover_ratio": 0.0006223629011022415,
            "is_target": false
          },
          {
            "ticker": "998",
            "score_pca": 91.95491643995337,
            "rank_pca": 208,
            "adv": 200227783.10000002,
            "trades": 4511.0,
            "volatility": 0.26393360805475446,
            "spread_pct": 0.0017279932458241112,
            "spread_ticks": 1.3541357672561323,
            "amihud": 4.058257610339071e-11,
            "turnover_ratio": 0.0027880770452656284,
            "is_target": false
          },
          {
            "ticker": "1658",
            "score_pca": 91.25534395647105,
            "rank_pca": 226,
            "adv": 182854465.5,
            "trades": 3018.0,
            "volatility": 0.15300428325745927,
            "spread_pct": 0.0021632909845599423,
            "spread_ticks": 1.0657204845416741,
            "amihud": 2.810530054836508e-11,
            "turnover_ratio": 0.004967675983327419,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Banks",
          "sector_count": 37,
          "market_count": 2573,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6999772046578383,
              "median": 0.5512201617218833,
              "min": 0.0,
              "max": 27.97363784997846,
              "p5": 0.20370048795302398,
              "p95": 1.580054301747391,
              "count": 2573
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 62485750.03629678,
              "median": 221390.0,
              "min": 0.0,
              "max": 11207547960.0,
              "p5": 0.0,
              "p95": 240785355.90400046,
              "count": 2573
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0463794116408143,
              "median": 0.029185799732838375,
              "min": 0.0005925101167187221,
              "max": 0.5912209998910793,
              "p5": 0.0014545178058640335,
              "p95": 0.1474137123997526,
              "count": 2573
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004328940380743849,
              "median": 0.0009136569322983098,
              "min": 0.0,
              "max": 0.5731155398272103,
              "p5": 0.0,
              "p95": 0.016561075897376785,
              "count": 2552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.3042055724107917e-06,
              "median": 4.912916588305663e-08,
              "min": 0.0,
              "max": 0.00030847461286986937,
              "p5": 3.838223892318575e-11,
              "p95": 5.2774739378805954e-06,
              "count": 2569
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1139.2401865526622,
              "median": 20.0,
              "min": 0.0,
              "max": 78179.0,
              "p5": 0.0,
              "p95": 5959.600000000004,
              "count": 2573
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.2812841573624392,
              "median": 0.26393360805475446,
              "min": 0.04948716593053956,
              "max": 1.0031691447099724,
              "p5": 0.12813917268630248,
              "p95": 0.4971499225114523,
              "count": 37
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 263348128.52361235,
              "median": 9170260.0,
              "min": 0.0,
              "max": 2287585171.2000003,
              "p5": 0.0,
              "p95": 1674503047.7999973,
              "count": 37
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.01653211470225523,
              "median": 0.0034451392950117124,
              "min": 0.0006173946113100451,
              "max": 0.12975912975912968,
              "p5": 0.0011376831314954836,
              "p95": 0.06349777378416295,
              "count": 37
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0027321862259940084,
              "median": 0.0010672773384941025,
              "min": 0.0,
              "max": 0.024937625599508233,
              "p5": 0.0,
              "p95": 0.007099980102801688,
              "count": 37
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.98540922911987e-07,
              "median": 8.890819263567287e-10,
              "min": 3.9382179612062505e-12,
              "max": 1.0351966873706047e-05,
              "p5": 4.595504509479008e-12,
              "p95": 1.4475111201883448e-06,
              "count": 37
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2587.324324324324,
              "median": 554.0,
              "min": 0.0,
              "max": 16414.0,
              "p5": 0.0,
              "p95": 12811.0,
              "count": 37
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 961247420.2125001,
              "median": 621195241.25,
              "min": 182854465.5,
              "max": 2287585171.2000003,
              "p5": 188935126.66,
              "p95": 2262055427.52,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 8171.875,
              "median": 7691.5,
              "min": 2976.0,
              "max": 16414.0,
              "p5": 2990.7,
              "p95": 15141.399999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.257630053799279,
              "median": 0.2129354615428386,
              "min": 0.15300428325745927,
              "max": 0.4902877187869196,
              "p5": 0.15922799829056025,
              "p95": 0.4464195415923218,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.001472379298839809,
              "median": 0.0015243286169653453,
              "min": 0.0006173946113100451,
              "max": 0.0021632909845599423,
              "p5": 0.0006912302765543268,
              "p95": 0.0021195523124813214,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.2474142799692236,
              "median": 1.0726342499326855,
              "min": 1.0198737601442742,
              "max": 2.273932863655201,
              "p5": 1.0204993736707924,
              "p95": 1.9520038799155264,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.8140872255262672e-11,
              "median": 1.4789409328121388e-11,
              "min": 3.9382179612062505e-12,
              "max": 1.1396656872599539e-10,
              "p5": 4.058362199475194e-12,
              "p95": 8.828217130808371e-11,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003456306265734944,
              "median": 0.003916319548989196,
              "min": 0.0006223629011022415,
              "max": 0.005368589435837446,
              "p5": 0.0007470312393338946,
              "p95": 0.005271974761505852,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.10502283105022814,
            "market": 0.010485223924600051,
            "sector": 0.034157877807575954,
            "peers": 0.07918189673833842,
            "vs_market": 0.09453760712562809,
            "vs_sector": 0.07086495324265218,
            "vs_peers": 0.02584093431188972
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 98.09560823940924,
          "score_pca_percentile": 98.09560823940924,
          "rank_pca": 50,
          "total": 2573,
          "adv_notional_sgd": 1261223960.16,
          "adv_volume_shares": 195652332.0,
          "free_float_shares": 63345228370.0,
          "turnover_ratio": 0.0030886672451031845,
          "votes": 11077.0,
          "trades": 11077.0,
          "spread_pct": 0.0015969234922850303,
          "spread_ticks": 1.0291638795986622,
          "amihud": 6.103001673977774e-12,
          "volatility": 0.20238625331778867
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.622025181063095,
          "loadings": {
            "log_adv": 0.49778709065353605,
            "log_trades": 0.4496608426577564,
            "log_turnover": 0.4532173226576691,
            "neg_spread": 0.45603501911133354,
            "neg_amihud": 0.34818593223549194,
            "neg_vol": 0.12412016491870623
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
          "peer_median_adv": 599976053.1899999,
          "peer_median_score_pca": 96.5798678585309,
          "peer_median_trades": 7365.0,
          "peer_median_volatility": 0.21929238129806966,
          "peer_median_spread_pct": 0.0015378384035969685,
          "peer_median_spread_ticks": 1.0775906605461025,
          "peer_median_amihud": 1.4348712717617326e-11,
          "peer_median_turnover_ratio": 0.0028706942931890633,
          "target_vs_peer": {
            "score_pca_delta": 1.52,
            "adv_delta_pct": 110.2,
            "trades_delta_pct": 50.4,
            "volatility_delta_pct": 7.71,
            "spread_pct_delta_pct": -3.84,
            "spread_ticks_delta_pct": -4.49,
            "amihud_delta_pct": 57.47,
            "turnover_ratio_delta_pct": 7.59
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1398",
            "score_pca": 98.09560823940924,
            "rank_pca": 50,
            "adv": 1261223960.16,
            "trades": 11077.0,
            "volatility": 0.20238625331778867,
            "spread_pct": 0.0015969234922850303,
            "spread_ticks": 1.0291638795986622,
            "amihud": 6.103001673977774e-12,
            "turnover_ratio": 0.0030886672451031845,
            "is_target": true
          },
          {
            "ticker": "3988",
            "score_pca": 97.24057520404197,
            "rank_pca": 72,
            "adv": 860973342.6800001,
            "trades": 9386.0,
            "volatility": 0.17625773495044397,
            "spread_pct": 0.002189380703693833,
            "spread_ticks": 1.0170094325034793,
            "amihud": 6.35014921827837e-12,
            "turnover_ratio": 0.0032533464618715742,
            "is_target": false
          },
          {
            "ticker": "939",
            "score_pca": 98.67858530897784,
            "rank_pca": 35,
            "adv": 1805626419.9999998,
            "trades": 14021.0,
            "volatility": 0.213285048978391,
            "spread_pct": 0.0012751523969209806,
            "spread_ticks": 1.0185340489768535,
            "amihud": 4.805848255114337e-12,
            "turnover_ratio": 0.0024589702958660053,
            "is_target": false
          },
          {
            "ticker": "5",
            "score_pca": 96.9685192382433,
            "rank_pca": 79,
            "adv": 2084064404.0,
            "trades": 10789.0,
            "volatility": 0.37302323648812247,
            "spread_pct": 0.0008120688175608302,
            "spread_ticks": 1.091278219912295,
            "amihud": 5.435487420004142e-12,
            "turnover_ratio": 0.0008862081765551299,
            "is_target": false
          },
          {
            "ticker": "3968",
            "score_pca": 97.51263116984066,
            "rank_pca": 65,
            "adv": 745583991.3,
            "trades": 7672.0,
            "volatility": 0.17135860566357056,
            "spread_pct": 0.0005617553716258445,
            "spread_ticks": 1.1011843460350155,
            "amihud": 9.808059308159993e-12,
            "turnover_ratio": 0.0057599333790658925,
            "is_target": false
          },
          {
            "ticker": "1288",
            "score_pca": 96.1912164788185,
            "rank_pca": 99,
            "adv": 454368115.08,
            "trades": 7058.0,
            "volatility": 0.22529971361774828,
            "spread_pct": 0.001916671413097265,
            "spread_ticks": 1.0389823553549447,
            "amihud": 1.8889366127074657e-11,
            "turnover_ratio": 0.004263301014034966,
            "is_target": false
          },
          {
            "ticker": "2888",
            "score_pca": 86.39720171006607,
            "rank_pca": 351,
            "adv": 191221590.0,
            "trades": 3220.0,
            "volatility": 0.42828573750358917,
            "spread_pct": 0.0011921707470284783,
            "spread_ticks": 2.0682926829268293,
            "amihud": 8.243870867291164e-11,
            "turnover_ratio": 0.0005947509883012582,
            "is_target": false
          },
          {
            "ticker": "998",
            "score_pca": 91.83832102603964,
            "rank_pca": 211,
            "adv": 166240771.2,
            "trades": 4472.0,
            "volatility": 0.24931481493320626,
            "spread_pct": 0.0018005244102729562,
            "spread_ticks": 1.3387777777777778,
            "amihud": 6.501588579288044e-11,
            "turnover_ratio": 0.002488042124506553,
            "is_target": false
          },
          {
            "ticker": "1658",
            "score_pca": 93.08200544111932,
            "rank_pca": 179,
            "adv": 183459583.44,
            "trades": 3550.0,
            "volatility": 0.1530122792517818,
            "spread_pct": 0.0021184279113080373,
            "spread_ticks": 1.0639031011799103,
            "amihud": 3.196637272615065e-11,
            "turnover_ratio": 0.005191786926890208,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Banks",
          "sector_count": 37,
          "market_count": 2573,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.717161831929755,
              "median": 0.5752749311442727,
              "min": 0.0,
              "max": 19.621431198489866,
              "p5": 0.2257309036871058,
              "p95": 1.5636179862665118,
              "count": 2573
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 60309553.21836327,
              "median": 224640.00000000003,
              "min": 0.0,
              "max": 13074995200.0,
              "p5": 0.0,
              "p95": 237847835.20400053,
              "count": 2573
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04292794302704975,
              "median": 0.027784318342359338,
              "min": 0.0005617553716258445,
              "max": 0.5805603802291607,
              "p5": 0.0014436255983473112,
              "p95": 0.13351520723433963,
              "count": 2573
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0039634676921921,
              "median": 0.0008797708217432711,
              "min": 0.0,
              "max": 0.3795407267661592,
              "p5": 0.0,
              "p95": 0.015703338092081354,
              "count": 2552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.905078749456801e-07,
              "median": 4.383104359961606e-08,
              "min": 0.0,
              "max": 2.4387783224079216e-05,
              "p5": 4.6467263335557195e-11,
              "p95": 3.749805531186535e-06,
              "count": 2573
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1073.521570151574,
              "median": 20.0,
              "min": 0.0,
              "max": 78727.0,
              "p5": 0.0,
              "p95": 5897.200000000001,
              "count": 2573
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.2764841859741717,
              "median": 0.26101756055514974,
              "min": 0.09523491837424065,
              "max": 0.6221017641069695,
              "p5": 0.14973730922071068,
              "p95": 0.47642617021840183,
              "count": 37
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 222682997.27420977,
              "median": 9856665.0,
              "min": 0.0,
              "max": 2084064404.0,
              "p5": 0.0,
              "p95": 1370104452.1279976,
              "count": 37
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.01484440620769017,
              "median": 0.0035489502529484794,
              "min": 0.0005617553716258445,
              "max": 0.08386679133999857,
              "p5": 0.0011161503611349488,
              "p95": 0.06443690826100547,
              "count": 37
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0028532670073683833,
              "median": 0.00094821113830372,
              "min": 0.0,
              "max": 0.03445505755511436,
              "p5": 0.0,
              "p95": 0.006988732595895715,
              "count": 37
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.3209956587376933e-07,
              "median": 9.379766612716726e-10,
              "min": 4.805848255114337e-12,
              "max": 5.783021050196618e-06,
              "p5": 5.969498823183047e-12,
              "p95": 6.465162023976996e-07,
              "count": 37
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2436.054054054054,
              "median": 659.0,
              "min": 0.0,
              "max": 14021.0,
              "p5": 0.0,
              "p95": 10846.599999999999,
              "count": 37
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 811442277.2125,
              "median": 599976053.1899999,
              "min": 166240771.2,
              "max": 2084064404.0,
              "p5": 172267355.484,
              "p95": 1986611109.5999997,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 7521.0,
              "median": 7365.0,
              "min": 3220.0,
              "max": 14021.0,
              "p5": 3335.5,
              "p95": 12889.8,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.2487296464233567,
              "median": 0.21929238129806966,
              "min": 0.1530122792517818,
              "max": 0.42828573750358917,
              "p5": 0.15943349349590785,
              "p95": 0.4089438621481758,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.001483268971438528,
              "median": 0.0015378384035969685,
              "min": 0.0005617553716258445,
              "max": 0.002189380703693833,
              "p5": 0.0006493650777030895,
              "p95": 0.0021645472263588047,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.217245245583388,
              "median": 1.0775906605461025,
              "min": 1.0170094325034793,
              "max": 2.0682926829268293,
              "p5": 1.0175430482691603,
              "p95": 1.8129624661246608,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.808873469007178e-11,
              "median": 1.4348712717617326e-11,
              "min": 4.805848255114337e-12,
              "max": 8.243870867291164e-11,
              "p5": 5.026221962825769e-12,
              "p95": 7.634072066490071e-11,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0031120424208864483,
              "median": 0.0028706942931890633,
              "min": 0.0005947509883012582,
              "max": 0.0057599333790658925,
              "p5": 0.0006967610041901133,
              "p95": 0.005561082120804402,
              "count": 8
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": 0.1634615384615392,
            "market": 0.052730756547201274,
            "sector": 0.01878135820504534,
            "peers": 0.08648534693182985,
            "vs_market": 0.11073078191433794,
            "vs_sector": 0.14468018025649387,
            "vs_peers": 0.07697619152970936
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 98.17333851535173,
          "score_pca_percentile": 98.17333851535173,
          "rank_pca": 48,
          "total": 2573,
          "adv_notional_sgd": 1249085738.22,
          "adv_volume_shares": 199230299.0,
          "free_float_shares": 63345228370.0,
          "turnover_ratio": 0.0031451508523466704,
          "votes": 10996.5,
          "trades": 10996.5,
          "spread_pct": 0.0016147484689554843,
          "spread_ticks": 1.0245394737958602,
          "amihud": 6.197000668583443e-12,
          "volatility": 0.2011458805154907
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.629364030429742,
          "loadings": {
            "log_adv": 0.496081905691144,
            "log_trades": 0.4492934444717396,
            "log_turnover": 0.4501502319131296,
            "neg_spread": 0.4607286860068457,
            "neg_amihud": 0.35188717040730416,
            "neg_vol": 0.11535774574021657
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
          "peer_median_adv": 673413534.8,
          "peer_median_score_pca": 96.46327244461719,
          "peer_median_trades": 7399.0,
          "peer_median_volatility": 0.22275705528217915,
          "peer_median_spread_pct": 0.0015808228981014619,
          "peer_median_spread_ticks": 1.0659463826401363,
          "peer_median_amihud": 1.371733178838809e-11,
          "peer_median_turnover_ratio": 0.0029802112483333543,
          "target_vs_peer": {
            "score_pca_delta": 1.71,
            "adv_delta_pct": 85.5,
            "trades_delta_pct": 48.62,
            "volatility_delta_pct": 9.7,
            "spread_pct_delta_pct": -2.15,
            "spread_ticks_delta_pct": -3.88,
            "amihud_delta_pct": 54.82,
            "turnover_ratio_delta_pct": 5.53
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1398",
            "score_pca": 98.17333851535173,
            "rank_pca": 48,
            "adv": 1249085738.22,
            "trades": 10996.5,
            "volatility": 0.2011458805154907,
            "spread_pct": 0.0016147484689554843,
            "spread_ticks": 1.0245394737958602,
            "amihud": 6.197000668583443e-12,
            "turnover_ratio": 0.0031451508523466704,
            "is_target": true
          },
          {
            "ticker": "3988",
            "score_pca": 97.47376603186942,
            "rank_pca": 66,
            "adv": 891857422.3000001,
            "trades": 8928.5,
            "volatility": 0.18189392640724011,
            "spread_pct": 0.0022353675201590177,
            "spread_ticks": 1.0128856579462244,
            "amihud": 7.256500594206154e-12,
            "turnover_ratio": 0.003407966076431571,
            "is_target": false
          },
          {
            "ticker": "939",
            "score_pca": 98.71745044694909,
            "rank_pca": 34,
            "adv": 1786736479.64,
            "trades": 13730.5,
            "volatility": 0.2181769319063289,
            "spread_pct": 0.0012888500036044802,
            "spread_ticks": 1.0183026450410821,
            "amihud": 4.7085062071234835e-12,
            "turnover_ratio": 0.0024972223043289317,
            "is_target": false
          },
          {
            "ticker": "5",
            "score_pca": 96.15235134084726,
            "rank_pca": 100,
            "adv": 1691320891.35,
            "trades": 8341.0,
            "volatility": 0.3146802489479343,
            "spread_pct": 0.0008785796642996374,
            "spread_ticks": 1.0728874489249653,
            "amihud": 6.183296089864476e-12,
            "turnover_ratio": 0.0008068147293045356,
            "is_target": false
          },
          {
            "ticker": "3968",
            "score_pca": 97.90128254955304,
            "rank_pca": 55,
            "adv": 803566482.88,
            "trades": 7363.5,
            "volatility": 0.20044302649824633,
            "spread_pct": 0.0006736297380271065,
            "spread_ticks": 1.1353038153556287,
            "amihud": 9.140150163698993e-12,
            "turnover_ratio": 0.006318043187390251,
            "is_target": false
          },
          {
            "ticker": "1288",
            "score_pca": 96.7741935483871,
            "rank_pca": 84,
            "adv": 543260586.72,
            "trades": 7434.5,
            "volatility": 0.22788938085553226,
            "spread_pct": 0.0018727957925984435,
            "spread_ticks": 1.0433900137638203,
            "amihud": 1.829451341307719e-11,
            "turnover_ratio": 0.0052445575614114065,
            "is_target": false
          },
          {
            "ticker": "2888",
            "score_pca": 84.25961912164787,
            "rank_pca": 406,
            "adv": 143746550.0,
            "trades": 2433.0,
            "volatility": 0.35999258630173603,
            "spread_pct": 0.0011750287953052388,
            "spread_ticks": 1.985690957721943,
            "amihud": 8.796440768846831e-11,
            "turnover_ratio": 0.00042556793844571666,
            "is_target": false
          },
          {
            "ticker": "998",
            "score_pca": 92.07151185386708,
            "rank_pca": 205,
            "adv": 171463091.755,
            "trades": 4411.5,
            "volatility": 0.22733717865802944,
            "spread_pct": 0.0018751514586267915,
            "spread_ticks": 1.3600487351670187,
            "amihud": 5.4609967845715087e-11,
            "turnover_ratio": 0.0025524564202351377,
            "is_target": false
          },
          {
            "ticker": "1658",
            "score_pca": 91.52739992226972,
            "rank_pca": 219,
            "adv": 157012261.19,
            "trades": 3135.0,
            "volatility": 0.19459669426647913,
            "spread_pct": 0.0020587155266860715,
            "spread_ticks": 1.059005316355307,
            "amihud": 3.9525928810089206e-11,
            "turnover_ratio": 0.004181570502346878,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Banks",
          "sector_count": 37,
          "market_count": 2573,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7494316893150852,
              "median": 0.5955661294981315,
              "min": 0.0,
              "max": 33.69286046323141,
              "p5": 0.22139699436698676,
              "p95": 1.5544347942554586,
              "count": 2573
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 55658416.00908079,
              "median": 215799.0,
              "min": 0.0,
              "max": 11339932000.0,
              "p5": 0.0,
              "p95": 208842741.90000013,
              "count": 2573
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.042117197273236796,
              "median": 0.026991072991423073,
              "min": 0.000558678699550006,
              "max": 0.5805603802291607,
              "p5": 0.0013956733723377492,
              "p95": 0.13443929602147833,
              "count": 2573
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0035867025411568253,
              "median": 0.0008498035469323222,
              "min": 0.0,
              "max": 0.17898037843814615,
              "p5": 0.0,
              "p95": 0.014181816176742459,
              "count": 2552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.371344112457105e-07,
              "median": 4.6563532937153205e-08,
              "min": 0.0,
              "max": 2.961485977790332e-05,
              "p5": 5.100397888105272e-11,
              "p95": 3.560405228048617e-06,
              "count": 2573
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1024.402837155072,
              "median": 20.0,
              "min": 0.0,
              "max": 89671.5,
              "p5": 0.0,
              "p95": 5573.300000000002,
              "count": 2573
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.26781573536356457,
              "median": 0.2556963245072978,
              "min": 0.09908923213409612,
              "max": 0.5423257197321213,
              "p5": 0.17569763556123086,
              "p95": 0.47789237439866,
              "count": 37
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 214674873.92479688,
              "median": 10607654.605,
              "min": 0.0,
              "max": 1786736479.64,
              "p5": 1123.2,
              "p95": 1337532768.845998,
              "count": 37
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.014007251836232592,
              "median": 0.0034473948140579724,
              "min": 0.0006736297380271065,
              "max": 0.07058564131580446,
              "p5": 0.0011157389691041186,
              "p95": 0.06412549753014986,
              "count": 37
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0027112814216342404,
              "median": 0.000896081118013112,
              "min": 0.0,
              "max": 0.03165793006519014,
              "p5": 1.5782171268373148e-06,
              "p95": 0.006744443893000853,
              "count": 37
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.0009845737841388e-07,
              "median": 8.654394066579286e-10,
              "min": 4.7085062071234835e-12,
              "max": 1.5915457091927665e-06,
              "p5": 6.19425975283965e-12,
              "p95": 4.65790890160896e-07,
              "count": 37
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2339.2297297297296,
              "median": 644.5,
              "min": 0.0,
              "max": 13730.5,
              "p5": 0.8,
              "p95": 9342.099999999991,
              "count": 37
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 773620470.729375,
              "median": 673413534.8,
              "min": 143746550.0,
              "max": 1786736479.64,
              "p5": 148389548.9165,
              "p95": 1753341023.7384999,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 6972.1875,
              "median": 7399.0,
              "min": 2433.0,
              "max": 13730.5,
              "p5": 2678.7,
              "p95": 12049.799999999997,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.24062624673019078,
              "median": 0.22275705528217915,
              "min": 0.18189392640724011,
              "max": 0.35999258630173603,
              "p5": 0.18633989515797378,
              "p95": 0.3441332682279054,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0015072648124133483,
              "median": 0.0015808228981014619,
              "min": 0.0006736297380271065,
              "max": 0.0022353675201590177,
              "p5": 0.0007453622122224924,
              "p95": 0.0021735393224434863,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.2109393237844988,
              "median": 1.0659463826401363,
              "min": 1.0128856579462244,
              "max": 1.985690957721943,
              "p5": 1.0147816034294246,
              "p95": 1.7667161798277191,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.846040885153036e-11,
              "median": 1.371733178838809e-11,
              "min": 4.7085062071234835e-12,
              "max": 8.796440768846831e-11,
              "p5": 5.224682666082831e-12,
              "p95": 7.629035374350467e-11,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003179274839986804,
              "median": 0.0029802112483333543,
              "min": 0.00042556793844571666,
              "max": 0.006318043187390251,
              "p5": 0.0005590043152463033,
              "p95": 0.0059423232182976545,
              "count": 8
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": 0.26701570680628395,
            "market": 0.10983210197100868,
            "sector": 0.005077301348884733,
            "peers": 0.16566552507925625,
            "vs_market": 0.15718360483527527,
            "vs_sector": 0.2619384054573992,
            "vs_peers": 0.1013501817270277
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Near-term trading looks accessible, with a 1D liquidity score of 98.0 and a 1 tick spread supporting clean entry and exit.",
        "market_comparison": "Peer standing is strong on the day, with the 1D score 5.7 points above the peer median, which supports better access than the group."
      },
      "30d": {
        "liquidity": "Monthly tradability looks solid, with a 1M liquidity score of 98.3 indicating access has held up well.",
        "market_comparison": "The stock has outperformed over 1M, returning 10.5% compared with 7.9% for peers and 1.0% for the market, which gives trading a firmer backdrop."
      },
      "3m": {
        "liquidity": "Quarterly liquidity appears steady, with a 3M score of 98.1 keeping access at a consistently high level.",
        "market_comparison": "Return 16.3% vs peers 8.6%."
      },
      "6m": {
        "liquidity": "Six-month liquidity is solid and stable, with a score of 98.2 showing sustained access over time.",
        "market_comparison": "The stock remains ahead of peers on the main structural measure, with the 6M score 1.7 points above the peer median, which supports stronger peer-relative access."
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
          "median": 0.17884684307287946,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "17.9%",
          "display_range": null,
          "display_text": "17.9%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 17.9,
          "plain_english": "Market explains about 17.9% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.8197977460830392,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "82.0%",
          "display_range": null,
          "display_text": "82.0%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 82.0,
          "plain_english": "Sector explains about 82.0% of price moves in the current state."
        },
        "company_share": {
          "median": 0.001355410844081188,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.1%",
          "display_range": null,
          "display_text": "0.1%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 0.1,
          "plain_english": "Company-specific explains about 0.1% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": -0.1746013220820896,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.17",
          "display_range": null,
          "display_text": "-0.17",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Weak",
          "plain_english": "Weak market link: a 1% market move has lined up with about a 0.17% stock move in the opposite direction in this state.",
          "value_num": -0.17
        },
        "beta_stock_lag": {
          "median": 0.0027444235904040795,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.00",
          "display_range": null,
          "display_text": "0.00",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 0.0
        },
        "beta_sector": {
          "median": 2.0000532297051983,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "2.00",
          "display_range": null,
          "display_text": "2.00",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "High",
          "plain_english": "High sector link: a 1% sector move has lined up with about a 2.00% stock move in the same direction in this state.",
          "value_num": 2.0
        },
        "beta_market_lag": {
          "median": 0.1678120765253077,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.17",
          "display_range": null,
          "display_text": "0.17",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 0.17
        },
        "beta_sector_lag": {
          "median": -1.322694577540884,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-1.32",
          "display_range": null,
          "display_text": "-1.32",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -1.32
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
          "period_label": "2025-04-02 to 2025-04-30",
          "n_obs": 18,
          "partial_month": true,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5034589669402736,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "50.3%",
            "display_range": null,
            "display_text": "50.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
            "kind": "share_pct",
            "value_pct": 50.3,
            "plain_english": "Sector explains about 50.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.22380926188099234,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "22.4%",
              "display_range": null,
              "display_text": "22.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 22.4,
              "plain_english": "Market explains about 22.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.5034589669402736,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.3%",
              "display_range": null,
              "display_text": "50.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 50.3,
              "plain_english": "Sector explains about 50.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.2727317711787341,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.3%",
              "display_range": null,
              "display_text": "27.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 27.3,
              "plain_english": "Company-specific explains about 27.3% of price moves in the current state."
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
            "median": 0.4395408867722433,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "44.0%",
            "display_range": null,
            "display_text": "44.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 44.0,
            "plain_english": "Company-specific explains about 44.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.12137803794785257,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "12.1%",
              "display_range": null,
              "display_text": "12.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 12.1,
              "plain_english": "Market explains about 12.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.43908107527990414,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "43.9%",
              "display_range": null,
              "display_text": "43.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 43.9,
              "plain_english": "Sector explains about 43.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4395408867722433,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.0%",
              "display_range": null,
              "display_text": "44.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 44.0,
              "plain_english": "Company-specific explains about 44.0% of price moves in the current state."
            }
          },
          "summary": "May: More mixed, though company-driven still has the largest share."
        },
        {
          "month_key": "2025-06",
          "month_label": "June 2025",
          "month_short_label": "Jun",
          "period_label": "2025-06-02 to 2025-06-30",
          "n_obs": 21,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5594110334647053,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "55.9%",
            "display_range": null,
            "display_text": "55.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 55.9,
            "plain_english": "Sector explains about 55.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.16226872507882545,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "16.2%",
              "display_range": null,
              "display_text": "16.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 16.2,
              "plain_english": "Market explains about 16.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.5594110334647053,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "55.9%",
              "display_range": null,
              "display_text": "55.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 55.9,
              "plain_english": "Sector explains about 55.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.27832024145646916,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.8%",
              "display_range": null,
              "display_text": "27.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 27.8,
              "plain_english": "Company-specific explains about 27.8% of price moves in the current state."
            }
          },
          "summary": "Jun: Mostly sector-driven."
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
            "median": 0.48898181453449635,
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
            "plain_english": "Sector explains about 48.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.06117541289958193,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "6.1%",
              "display_range": null,
              "display_text": "6.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 6.1,
              "plain_english": "Market explains about 6.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.48898181453449635,
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
              "plain_english": "Sector explains about 48.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.44984277256592176,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.0%",
              "display_range": null,
              "display_text": "45.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 45.0,
              "plain_english": "Company-specific explains about 45.0% of price moves in the current state."
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
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5214166595938229,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "52.1%",
            "display_range": null,
            "display_text": "52.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 52.1,
            "plain_english": "Sector explains about 52.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.15725797678221265,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "15.7%",
              "display_range": null,
              "display_text": "15.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 15.7,
              "plain_english": "Market explains about 15.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.5214166595938229,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.1%",
              "display_range": null,
              "display_text": "52.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 52.1,
              "plain_english": "Sector explains about 52.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3213253636239645,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "32.1%",
              "display_range": null,
              "display_text": "32.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 32.1,
              "plain_english": "Company-specific explains about 32.1% of price moves in the current state."
            }
          },
          "summary": "Aug: Mostly sector-driven."
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
            "median": 0.5516703224640017,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "55.2%",
            "display_range": null,
            "display_text": "55.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 55.2,
            "plain_english": "Sector explains about 55.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.13706165480114688,
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
              "plain_english": "Market explains about 13.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.5516703224640017,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "55.2%",
              "display_range": null,
              "display_text": "55.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 55.2,
              "plain_english": "Sector explains about 55.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3112680227348513,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "31.1%",
              "display_range": null,
              "display_text": "31.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 31.1,
              "plain_english": "Company-specific explains about 31.1% of price moves in the current state."
            }
          },
          "summary": "Sep: Mostly sector-driven."
        },
        {
          "month_key": "2025-10",
          "month_label": "October 2025",
          "month_short_label": "Oct",
          "period_label": "2025-10-02 to 2025-10-31",
          "n_obs": 20,
          "partial_month": true,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5450468625451763,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "54.5%",
            "display_range": null,
            "display_text": "54.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 54.5,
            "plain_english": "Sector explains about 54.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.049250378698502406,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "4.9%",
              "display_range": null,
              "display_text": "4.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 4.9,
              "plain_english": "Market explains about 4.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.5450468625451763,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "54.5%",
              "display_range": null,
              "display_text": "54.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 54.5,
              "plain_english": "Sector explains about 54.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.40570275875632117,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "40.6%",
              "display_range": null,
              "display_text": "40.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 40.6,
              "plain_english": "Company-specific explains about 40.6% of price moves in the current state."
            }
          },
          "summary": "Oct: Mostly sector-driven."
        },
        {
          "month_key": "2025-11",
          "month_label": "November 2025",
          "month_short_label": "Nov",
          "period_label": "2025-11-03 to 2025-11-28",
          "n_obs": 20,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5730389070551061,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "57.3%",
            "display_range": null,
            "display_text": "57.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 57.3,
            "plain_english": "Sector explains about 57.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.07555361923444963,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "7.6%",
              "display_range": null,
              "display_text": "7.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 7.6,
              "plain_english": "Market explains about 7.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.5730389070551061,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "57.3%",
              "display_range": null,
              "display_text": "57.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 57.3,
              "plain_english": "Sector explains about 57.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.35140747371044445,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "35.1%",
              "display_range": null,
              "display_text": "35.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 35.1,
              "plain_english": "Company-specific explains about 35.1% of price moves in the current state."
            }
          },
          "summary": "Nov: Mostly sector-driven."
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
            "median": 0.46163873766186003,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "46.2%",
            "display_range": null,
            "display_text": "46.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
            "kind": "share_pct",
            "value_pct": 46.2,
            "plain_english": "Sector explains about 46.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.32185856623835424,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "32.2%",
              "display_range": null,
              "display_text": "32.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 32.2,
              "plain_english": "Market explains about 32.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.46163873766186003,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.2%",
              "display_range": null,
              "display_text": "46.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 46.2,
              "plain_english": "Sector explains about 46.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.21650269609978567,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "21.7%",
              "display_range": null,
              "display_text": "21.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 21.7,
              "plain_english": "Company-specific explains about 21.7% of price moves in the current state."
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
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.47133358200857206,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.1%",
            "display_range": null,
            "display_text": "47.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 47.1,
            "plain_english": "Sector explains about 47.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.1201228626890309,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "12.0%",
              "display_range": null,
              "display_text": "12.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 12.0,
              "plain_english": "Market explains about 12.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.47133358200857206,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.1%",
              "display_range": null,
              "display_text": "47.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 47.1,
              "plain_english": "Sector explains about 47.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.40854355530239705,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "40.9%",
              "display_range": null,
              "display_text": "40.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 40.9,
              "plain_english": "Company-specific explains about 40.9% of price moves in the current state."
            }
          },
          "summary": "Jan: Mostly sector-driven."
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
            "median": 0.5731090554704732,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "57.3%",
            "display_range": null,
            "display_text": "57.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
            "kind": "share_pct",
            "value_pct": 57.3,
            "plain_english": "Sector explains about 57.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.09275399395712644,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "9.3%",
              "display_range": null,
              "display_text": "9.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 9.3,
              "plain_english": "Market explains about 9.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.5731090554704732,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "57.3%",
              "display_range": null,
              "display_text": "57.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 57.3,
              "plain_english": "Sector explains about 57.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3341369505724004,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "33.4%",
              "display_range": null,
              "display_text": "33.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 33.4,
              "plain_english": "Company-specific explains about 33.4% of price moves in the current state."
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
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.41453623720699034,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "41.5%",
            "display_range": null,
            "display_text": "41.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 41.5,
            "plain_english": "Sector explains about 41.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.27401768620266115,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.4%",
              "display_range": null,
              "display_text": "27.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 27.4,
              "plain_english": "Market explains about 27.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.41453623720699034,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "41.5%",
              "display_range": null,
              "display_text": "41.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 41.5,
              "plain_english": "Sector explains about 41.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3114460765903485,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "31.1%",
              "display_range": null,
              "display_text": "31.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 31.1,
              "plain_english": "Company-specific explains about 31.1% of price moves in the current state."
            }
          },
          "summary": "Mar: More mixed, though sector-driven still has the largest share."
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-21",
          "n_obs": 12,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.38510094446302023,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "38.5%",
            "display_range": null,
            "display_text": "38.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 12 trading days.",
            "kind": "share_pct",
            "value_pct": 38.5,
            "plain_english": "Sector explains about 38.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2638067346437695,
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
              "plain_english": "Market explains about 26.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.38510094446302023,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "38.5%",
              "display_range": null,
              "display_text": "38.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 12 trading days.",
              "kind": "share_pct",
              "value_pct": 38.5,
              "plain_english": "Sector explains about 38.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3510923208932102,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "35.1%",
              "display_range": null,
              "display_text": "35.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 12 trading days.",
              "kind": "share_pct",
              "value_pct": 35.1,
              "plain_english": "Company-specific explains about 35.1% of price moves in the current state."
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
          "expected_duration_days": 6.578947368421052,
          "current_probability": 1.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.009579255403180524,
            "low": 0.009579255403180524,
            "high": 0.009579255403180524
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": null
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 6.526315789473684,
          "current_probability": 0.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.015976691419952758,
            "low": 0.015976691419952758,
            "high": 0.015976691419952758
          },
          "volatility_label": "High Volatility",
          "current_probability_display": 0.0
        }
      ],
      "transitions": {
        "mean": [
          [
            0.8548387096774194,
            0.14516129032258066
          ],
          [
            0.1532258064516129,
            0.8467741935483871
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            106.0,
            18.0
          ],
          [
            19.0,
            105.0
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
        "market_link_display": "-0.17",
        "sector_link_display": "2.00",
        "market_link_explainer": "Weak market link. A 1% market move has lined up with about a 0.17% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "High sector link. A 1% sector move has lined up with about a 2.00% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "0.00",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "Low Volatility",
        "dominant_driver": "sector",
        "dominant_driver_label": "Sector",
        "driver_share_pct": 82.0,
        "driver_share_display": "82.0%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 251 trading days relative to the 252-day target.",
        "history_days": 251,
        "history_limited": true,
        "volatility_label": "Low Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.8548387096774194,
        "effective_days": 125.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 6.6 days.",
        "expected_duration_days": 6.6
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
          "expected_duration_days": 6.578947368421052,
          "current_probability": 1.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.009579255403180524,
            "low": 0.009579255403180524,
            "high": 0.009579255403180524
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 6.526315789473684,
          "current_probability": 0.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.015976691419952758,
            "low": 0.015976691419952758,
            "high": 0.015976691419952758
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.8548387096774194,
          0.14516129032258066
        ],
        [
          0.1532258064516129,
          0.8467741935483871
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.8548387096774194,
            0.14516129032258066
          ],
          [
            0.1532258064516129,
            0.8467741935483871
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            106.0,
            18.0
          ],
          [
            19.0,
            105.0
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
        "text": "Liquidity score: 98.2 — Strong",
        "bg": "bg-emerald-500/20",
        "textColor": "text-emerald-400"
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
    "liq_subtitle": "Peer-relative liquidity is respectable, although displayed depth is a little lighter on the bid side.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent performance is strong, with a 1M return of 10.5% compared with 7.9% for peers and 1.0% for the market.",
    "perf_insight": "The stock is outperforming on a solid liquidity base, with a 6M score of 98.2 against a peer median of 96.5 and sector factors explaining 82.0% of the tape. That matters because the stronger return backdrop is arriving without signs of disorderly trading.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Sector moves are setting the tone, with 82.0% of current trading explained by the sector rather than company-specific news.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly sector-driven, accounting for about 82.0% of price changes. Other influences are market 17.9%, and company-specific 0.1%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 17.9%, sector 82.0%, and company-specific 0.1%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has been consistently sector-driven across Feb to Apr."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 17.9%, sector 82.0%, and company-specific 0.1%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "That matters because trading conditions are being shaped mainly by the broader group, while a 1-tick spread and bid depth at 0.79x of ask depth keep the market orderly but not especially deep on the buy side.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: price moves are predominantly sector-led, with the sector accounting for 82.0% of current action.",
      "Monthly change: the pattern has become more mixed since February, but sector influence has remained the largest driver through March and April."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Trading conditions look orderly, with a tight spread and broadly balanced displayed depth.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on Apr 22, 2025 to Apr 21, 2026 (240 trading days • 2,753,458 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on top 10 bid and top 10 ask levels.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate displayed depth broadly matches the stronger monthly liquidity read.",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "Execution is orderly, with a 1-tick spread and top-10 bid depth at 0.79x of ask depth. That matters because the live book supports trading, although buying depth is slightly thinner than selling depth.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 20.5% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Trading stays usable through the day, and the observed flow mix currently leans institution-like.",
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
    "intraday_insight": "Execution conditions look steady because the spread is 1 tick. Bid depth at 0.79x of ask depth matters because buying interest is somewhat thinner than selling interest in the displayed book.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "The current trading picture is better explained by sector leadership and balanced execution conditions.",
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
    "exec_subtitle": "Liquidity is holding up relative to peers, while the live book still points to a balanced trading profile.",
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
        "value": "98.2/100",
        "sub": "Peer median 96.5 (+1.7 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "HK$1.2B",
        "sub": "Peer median HK$673.4M",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "0.16%",
        "sub": "1.02 ticks; peers 0.16%",
        "interp": {
          "text": "Wider",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "6M liquidity is strong: score 98.2 vs peer median 96.5 (+1.7 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "7.265",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "0.14%",
        "note": "1.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.79x",
        "note": "Bid depth / ask depth on displayed top-10 levels",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-0.07% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-0.07% with 100.0% fill.",
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
        "value": "98",
        "suffix": "/100",
        "bar_pct": 98,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Rank 48/2573",
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
        "value": "0.16",
        "suffix": "%",
        "bar_pct": 2,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "0.16% • 1.02 ticks vs peers 0.16%",
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
        "value": "1.2B",
        "value_prefix": "HK$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Peer median HK$673.4M",
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
        "value": "82.0",
        "suffix": "sector",
        "bar_pct": 82,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 17.9% • Company 0.1%",
        "interpretation": {
          "text": "Sector",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Liquidity is respectable relative to peers, with a 6M score of 98.2 compared with a peer median of 96.5. That keeps access broadly in line with the group rather than pointing to a clear liquidity edge.",
      "Recent trend context relative to the 1M baseline is limited. Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "Near-term execution still looks balanced rather than outright strong, with a 1-tick spread and top-10 bid depth at 0.79x of ask depth. With sector factors driving 82.0% of the tape, trading conditions remain closely tied to the broader group."
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
      "overall": "6M liquidity is strong: score 98.2 vs peer median 96.5 (+1.7 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "strengths": [
        "6M score 98.2 vs peer median 96.5 (+1.7 pts)."
      ],
      "concerns": [],
      "peer_context": "Primary-period score gap vs peers: +1.7 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is 26.7%, better than market, sector, and peers, which suggests stronger price performance than comparable names.",
        "vs_market": "Better than market: 26.7% vs market 11.0%.",
        "vs_sector": "Better than sector: 26.7% vs sector 0.5%.",
        "vs_peers": "Better than peers: 26.7% vs peers 16.6%."
      },
      "adv": {
        "insight": "ADV is HK$1.2B, better than market, sector, and peers, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: HK$1.2B vs market HK$215.8K.",
        "vs_sector": "Better than sector: HK$1.2B vs sector HK$10.6M.",
        "vs_peers": "Better than peers: HK$1.2B vs peers HK$673.4M."
      },
      "spread": {
        "insight": "Spread is 0.16%, better than market and sector, which keeps trading costs more competitive than comparable names.",
        "vs_market": "Better than market: 0.16% vs market 2.70%.",
        "vs_sector": "Better than sector: 0.16% vs sector 0.34%.",
        "vs_peers": "In line with peers: 0.16% vs peers 0.16%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.31%, better than market and sector, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.31% vs market 0.08%.",
        "vs_sector": "Better than sector: 0.31% vs sector 0.09%.",
        "vs_peers": "In line with peers: 0.31% vs peers 0.30%."
      },
      "volatility": {
        "insight": "Volatility is 20.11%, better than market and sector, which suggests day-to-day price swings are more contained than comparable names.",
        "vs_market": "Better than market: 20.11% vs market 59.56%.",
        "vs_sector": "Better than sector: 20.11% vs secto%.",
        "vs_peers": "In line with peers: 20.11% vs peers 22.28%."
      },
      "trades": {
        "insight": "Trades is 10996, better than market, sector, and peers, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 10996 vs market 20.",
        "vs_sector": "Better than sector: 10996 vs sector 644.",
        "vs_peers": "Better than peers: 10996 vs peers 7399."
      },
      "amihud": {
        "insight": "Price impact is 6.20e-12, better than market, sector, and peers, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 6.20e-12 vs market 4.66e-08.",
        "vs_sector": "Better than sector: 6.20e-12 vs sector 8.65e-10.",
        "vs_peers": "Better than peers: 6.20e-12 vs peers 1.37e-11."
      }
    },
    "performance": {
      "overall": "Recent performance is strong relative to both peers and the market, with a 1M return of 10.5% compared with 7.9% for peers and 1.0% for the market. Liquidity broadly confirms that move rather than pushing against it, as the 6M liquidity score is 98.2 compared with a 96.5 peer median and the spread is 1 tick with bid depth at 0.79x of ask depth. The price action also looks mainly sector-linked rather than company-specific, with sector factors accounting for 82.0% of the current driver mix.",
      "conclusion": "The recent outperformance looks broadly supported by liquidity and is primarily sector-linked rather than company-specific."
    },
    "drivers": {
      "overall": "Sector moves are the main force in the stock right now, with 82.0% of recent price action tied to the sector. That matters because the tape is being shaped more by the group backdrop than by company-specific news, even as the stock has outperformed peers and the market over the past month.",
      "beta": "Current trading conditions look stable rather than stressed, with a 1-tick spread and top-10 bid depth at 0.79x of ask depth. That matters because the sector-led pattern is showing up in an orderly market, not alongside a sharp deterioration in displayed liquidity.",
      "rolling_change": "The driver mix is more balanced than it was in February, but sector influence has still remained the largest component through March and April. That matters because the stock is not trading on a short-lived company-specific burst, even though the monthly picture is no longer as one-sided as it was earlier in the quarter."
    },
    "regime": {
      "overall": "Short expected duration points to a short-lived state rather than a durable market backdrop.",
      "current": "Low Volatility is the active state, which means price moves are currently more contained than in a higher-volatility backdrop.",
      "transitions": "This state looks fairly stable because its typical run length is about 6.6 days, although the read is still mixed rather than definitive.",
      "trading_implications": "This state looks more persistent, with a typical run length of about 6.6 days."
    },
    "execution": {
      "overall": "top-10 bid depth is 0.79x ask depth; spread is 1 tick. Immediate displayed depth broadly matches the stronger monthly liquidity read.",
      "concern": "The clearest pressure point is thinner buy-side depth, with top-10 bid depth at 0.79x of ask",
      "peer_context": "The current book broadly supports the stock’s stronger 6M liquidity score of 98.2 compared with the peer median of 96.5, but it does so with a mild bid-side imbalance rather than clear depth on both sides."
    },
    "trader_composition": {
      "overall": "Flow looks mainly institution-like on both trade count and trade value, which gives the activity a firmer base. Institution-like trades account for 66.5% of count and 80.7% of value, so the read is clear even with some mixed flow in the background.",
      "retail_heavy": "Retail-like activity is a small part of the tape, at 1.9% of trade count and 0.4% of trade value. That matters because the observed flow is being set by larger participants rather than by a broad base of small trades.",
      "institutional_gap": "The institution-like share is materially ahead on both measures, leading retail-like flow by 64.6 percentage points on trade count and 80.3 points on trade value. That gap makes the overall flow picture look more fully reflective of day-to-day access, even though 25.7% of trade count remains unclear.",
      "peer_comparison": "The trader mix looks more institution-like than a balanced market because count and value both point the same way. Relative to peers, the report tables provide the direct ranking context."
    },
    "price_moving": {
      "overall": "The price-moving signal is mixed rather than fully clean because 20.5% of trades move price while 25.7% of trade count is still unclear. That matters because the tape is active, but not every move can be tied neatly to a single flow type. The cleaner read comes from trader composition, where count and value both lean institution-like at 66.5% and 80.7% respectively. The unclear share means price formation may still be read with some caution rather than as a one-way signal.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short-selling data is unavailable for this report.",
      "level": "N/A",
      "correlation": "N/A",
      "trend": "There is no clear sign that short activity is becoming a bigger influence. The broader picture is still defined by sector-led trading and a firm recent return backdrop, so short flow does not stand out as changing liquidity conditions.",
      "peaks": "N/A"
    },
    "intraday": {
      "overall": "Session split is open 0.8%, continuous 86.0%, and close 11.0%. Current trading concentration score is 0.112.",
      "hhi_interpretation": "The concentration score of 0.112 indicates activity is not heavily concentrated into a narrow part of the session. That supports a steadier intraday flow picture, even with 25.7% of trade count still classified as unclear.",
      "best_times": "The continuous session is the clearest source of usable liquidity because it accounts for the large majority of trading activity. The close is a secondary pocket of activity, while the open contributes very little.",
      "peer_ranking": "The intraday profile looks solid because activity is concentrated in the main session and the concentration score remains low at 0.112. Relative to peers, the report tables provide the direct ranking view."
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
        "1398",
        "3988",
        "939",
        "5",
        "3968",
        "1288",
        "2888",
        "998",
        "1658"
      ],
      "scores": [
        98.17333851535173,
        97.47376603186942,
        98.71745044694909,
        96.15235134084726,
        97.90128254955304,
        96.7741935483871,
        84.25961912164787,
        92.07151185386708,
        91.52739992226972
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
        1249085738.22,
        891857422.3000001,
        1786736479.64,
        1691320891.35,
        803566482.88,
        543260586.72,
        143746550.0,
        171463091.755,
        157012261.19
      ],
      "total": 2573
    },
    "market_comparison": {
      "sector_name": "Banks",
      "sector_count": 37,
      "market_count": 2573,
      "company": {
        "volatility": 0.2011458805154907,
        "adv": 1249085738.22,
        "spread_pct": 0.0016147484689554843,
        "turnover_ratio": 0.0031451508523466704,
        "amihud": 6.197000668583443e-12,
        "trades": 10996.5
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.7494316893150852,
          "median": 0.5955661294981315,
          "min": 0.0,
          "max": 33.69286046323141,
          "p5": 0.22139699436698676,
          "p95": 1.5544347942554586,
          "count": 2573
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 55658416.00908079,
          "median": 215799.0,
          "min": 0.0,
          "max": 11339932000.0,
          "p5": 0.0,
          "p95": 208842741.90000013,
          "count": 2573
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.042117197273236796,
          "median": 0.026991072991423073,
          "min": 0.000558678699550006,
          "max": 0.5805603802291607,
          "p5": 0.0013956733723377492,
          "p95": 0.13443929602147833,
          "count": 2573
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0035867025411568253,
          "median": 0.0008498035469323222,
          "min": 0.0,
          "max": 0.17898037843814615,
          "p5": 0.0,
          "p95": 0.014181816176742459,
          "count": 2552
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 6.371344112457105e-07,
          "median": 4.6563532937153205e-08,
          "min": 0.0,
          "max": 2.961485977790332e-05,
          "p5": 5.100397888105272e-11,
          "p95": 3.560405228048617e-06,
          "count": 2573
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1024.402837155072,
          "median": 20.0,
          "min": 0.0,
          "max": 89671.5,
          "p5": 0.0,
          "p95": 5573.300000000002,
          "count": 2573
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.26781573536356457,
          "median": 0.2556963245072978,
          "min": 0.09908923213409612,
          "max": 0.5423257197321213,
          "p5": 0.17569763556123086,
          "p95": 0.47789237439866,
          "count": 37
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 214674873.92479688,
          "median": 10607654.605,
          "min": 0.0,
          "max": 1786736479.64,
          "p5": 1123.2,
          "p95": 1337532768.845998,
          "count": 37
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.014007251836232592,
          "median": 0.0034473948140579724,
          "min": 0.0006736297380271065,
          "max": 0.07058564131580446,
          "p5": 0.0011157389691041186,
          "p95": 0.06412549753014986,
          "count": 37
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0027112814216342404,
          "median": 0.000896081118013112,
          "min": 0.0,
          "max": 0.03165793006519014,
          "p5": 1.5782171268373148e-06,
          "p95": 0.006744443893000853,
          "count": 37
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.0009845737841388e-07,
          "median": 8.654394066579286e-10,
          "min": 4.7085062071234835e-12,
          "max": 1.5915457091927665e-06,
          "p5": 6.19425975283965e-12,
          "p95": 4.65790890160896e-07,
          "count": 37
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 2339.2297297297296,
          "median": 644.5,
          "min": 0.0,
          "max": 13730.5,
          "p5": 0.8,
          "p95": 9342.099999999991,
          "count": 37
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 773620470.729375,
          "median": 673413534.8,
          "min": 143746550.0,
          "max": 1786736479.64,
          "p5": 148389548.9165,
          "p95": 1753341023.7384999,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 6972.1875,
          "median": 7399.0,
          "min": 2433.0,
          "max": 13730.5,
          "p5": 2678.7,
          "p95": 12049.799999999997,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.24062624673019078,
          "median": 0.22275705528217915,
          "min": 0.18189392640724011,
          "max": 0.35999258630173603,
          "p5": 0.18633989515797378,
          "p95": 0.3441332682279054,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.0015072648124133483,
          "median": 0.0015808228981014619,
          "min": 0.0006736297380271065,
          "max": 0.0022353675201590177,
          "p5": 0.0007453622122224924,
          "p95": 0.0021735393224434863,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 1.2109393237844988,
          "median": 1.0659463826401363,
          "min": 1.0128856579462244,
          "max": 1.985690957721943,
          "p5": 1.0147816034294246,
          "p95": 1.7667161798277191,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 2.846040885153036e-11,
          "median": 1.371733178838809e-11,
          "min": 4.7085062071234835e-12,
          "max": 8.796440768846831e-11,
          "p5": 5.224682666082831e-12,
          "p95": 7.629035374350467e-11,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.003179274839986804,
          "median": 0.0029802112483333543,
          "min": 0.00042556793844571666,
          "max": 0.006318043187390251,
          "p5": 0.0005590043152463033,
          "p95": 0.0059423232182976545,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": 0.10502283105022814,
        "market": 0.010485223924600051,
        "sector": 0.034157877807575954,
        "peers": 0.07918189673833842
      },
      {
        "horizon": "3M",
        "stock": 0.1634615384615392,
        "market": 0.052730756547201274,
        "sector": 0.01878135820504534,
        "peers": 0.08648534693182985
      },
      {
        "horizon": "6M",
        "stock": 0.26701570680628395,
        "market": 0.10983210197100868,
        "sector": 0.005077301348884733,
        "peers": 0.16566552507925625
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
      "share_market": 0.17884684307287946,
      "share_sector": 0.8197977460830392,
      "share_idio": 0.001355410844081188,
      "beta_market": -0.1746013220820896,
      "beta_sector": 2.0000532297051983,
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
            "median": 0.17884684307287946,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "17.9%",
            "display_range": null,
            "display_text": "17.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 17.9,
            "plain_english": "Market explains about 17.9% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.8197977460830392,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "82.0%",
            "display_range": null,
            "display_text": "82.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 82.0,
            "plain_english": "Sector explains about 82.0% of price moves in the current state."
          },
          "company_share": {
            "median": 0.001355410844081188,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.1%",
            "display_range": null,
            "display_text": "0.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 0.1,
            "plain_english": "Company-specific explains about 0.1% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": -0.1746013220820896,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.17",
            "display_range": null,
            "display_text": "-0.17",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Weak",
            "plain_english": "Weak market link: a 1% market move has lined up with about a 0.17% stock move in the opposite direction in this state.",
            "value_num": -0.17
          },
          "beta_stock_lag": {
            "median": 0.0027444235904040795,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.00",
            "display_range": null,
            "display_text": "0.00",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 0.0
          },
          "beta_sector": {
            "median": 2.0000532297051983,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "2.00",
            "display_range": null,
            "display_text": "2.00",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "High",
            "plain_english": "High sector link: a 1% sector move has lined up with about a 2.00% stock move in the same direction in this state.",
            "value_num": 2.0
          },
          "beta_market_lag": {
            "median": 0.1678120765253077,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.17",
            "display_range": null,
            "display_text": "0.17",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 0.17
          },
          "beta_sector_lag": {
            "median": -1.322694577540884,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-1.32",
            "display_range": null,
            "display_text": "-1.32",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -1.32
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
            "period_label": "2025-04-02 to 2025-04-30",
            "n_obs": 18,
            "partial_month": true,
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5034589669402736,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.3%",
              "display_range": null,
              "display_text": "50.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 50.3,
              "plain_english": "Sector explains about 50.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.22380926188099234,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "22.4%",
                "display_range": null,
                "display_text": "22.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 22.4,
                "plain_english": "Market explains about 22.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.5034589669402736,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "50.3%",
                "display_range": null,
                "display_text": "50.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 50.3,
                "plain_english": "Sector explains about 50.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.2727317711787341,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.3%",
                "display_range": null,
                "display_text": "27.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 27.3,
                "plain_english": "Company-specific explains about 27.3% of price moves in the current state."
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
              "median": 0.4395408867722433,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.0%",
              "display_range": null,
              "display_text": "44.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 44.0,
              "plain_english": "Company-specific explains about 44.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.12137803794785257,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "12.1%",
                "display_range": null,
                "display_text": "12.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 12.1,
                "plain_english": "Market explains about 12.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.43908107527990414,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "43.9%",
                "display_range": null,
                "display_text": "43.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 43.9,
                "plain_english": "Sector explains about 43.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4395408867722433,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "44.0%",
                "display_range": null,
                "display_text": "44.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 44.0,
                "plain_english": "Company-specific explains about 44.0% of price moves in the current state."
              }
            },
            "summary": "May: More mixed, though company-driven still has the largest share."
          },
          {
            "month_key": "2025-06",
            "month_label": "June 2025",
            "month_short_label": "Jun",
            "period_label": "2025-06-02 to 2025-06-30",
            "n_obs": 21,
            "partial_month": false,
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5594110334647053,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "55.9%",
              "display_range": null,
              "display_text": "55.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 55.9,
              "plain_english": "Sector explains about 55.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.16226872507882545,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "16.2%",
                "display_range": null,
                "display_text": "16.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 16.2,
                "plain_english": "Market explains about 16.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.5594110334647053,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "55.9%",
                "display_range": null,
                "display_text": "55.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 55.9,
                "plain_english": "Sector explains about 55.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.27832024145646916,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.8%",
                "display_range": null,
                "display_text": "27.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 27.8,
                "plain_english": "Company-specific explains about 27.8% of price moves in the current state."
              }
            },
            "summary": "Jun: Mostly sector-driven."
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
              "median": 0.48898181453449635,
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
              "plain_english": "Sector explains about 48.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.06117541289958193,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "6.1%",
                "display_range": null,
                "display_text": "6.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 6.1,
                "plain_english": "Market explains about 6.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.48898181453449635,
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
                "plain_english": "Sector explains about 48.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.44984277256592176,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "45.0%",
                "display_range": null,
                "display_text": "45.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 45.0,
                "plain_english": "Company-specific explains about 45.0% of price moves in the current state."
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
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5214166595938229,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.1%",
              "display_range": null,
              "display_text": "52.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 52.1,
              "plain_english": "Sector explains about 52.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.15725797678221265,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "15.7%",
                "display_range": null,
                "display_text": "15.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 15.7,
                "plain_english": "Market explains about 15.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.5214166595938229,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "52.1%",
                "display_range": null,
                "display_text": "52.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 52.1,
                "plain_english": "Sector explains about 52.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3213253636239645,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "32.1%",
                "display_range": null,
                "display_text": "32.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 32.1,
                "plain_english": "Company-specific explains about 32.1% of price moves in the current state."
              }
            },
            "summary": "Aug: Mostly sector-driven."
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
              "median": 0.5516703224640017,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "55.2%",
              "display_range": null,
              "display_text": "55.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 55.2,
              "plain_english": "Sector explains about 55.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.13706165480114688,
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
                "plain_english": "Market explains about 13.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.5516703224640017,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "55.2%",
                "display_range": null,
                "display_text": "55.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 55.2,
                "plain_english": "Sector explains about 55.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3112680227348513,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "31.1%",
                "display_range": null,
                "display_text": "31.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 31.1,
                "plain_english": "Company-specific explains about 31.1% of price moves in the current state."
              }
            },
            "summary": "Sep: Mostly sector-driven."
          },
          {
            "month_key": "2025-10",
            "month_label": "October 2025",
            "month_short_label": "Oct",
            "period_label": "2025-10-02 to 2025-10-31",
            "n_obs": 20,
            "partial_month": true,
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5450468625451763,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "54.5%",
              "display_range": null,
              "display_text": "54.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 54.5,
              "plain_english": "Sector explains about 54.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.049250378698502406,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "4.9%",
                "display_range": null,
                "display_text": "4.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 4.9,
                "plain_english": "Market explains about 4.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.5450468625451763,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "54.5%",
                "display_range": null,
                "display_text": "54.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 54.5,
                "plain_english": "Sector explains about 54.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.40570275875632117,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "40.6%",
                "display_range": null,
                "display_text": "40.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 40.6,
                "plain_english": "Company-specific explains about 40.6% of price moves in the current state."
              }
            },
            "summary": "Oct: Mostly sector-driven."
          },
          {
            "month_key": "2025-11",
            "month_label": "November 2025",
            "month_short_label": "Nov",
            "period_label": "2025-11-03 to 2025-11-28",
            "n_obs": 20,
            "partial_month": false,
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5730389070551061,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "57.3%",
              "display_range": null,
              "display_text": "57.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 57.3,
              "plain_english": "Sector explains about 57.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.07555361923444963,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "7.6%",
                "display_range": null,
                "display_text": "7.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 7.6,
                "plain_english": "Market explains about 7.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.5730389070551061,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "57.3%",
                "display_range": null,
                "display_text": "57.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 57.3,
                "plain_english": "Sector explains about 57.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.35140747371044445,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "35.1%",
                "display_range": null,
                "display_text": "35.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 35.1,
                "plain_english": "Company-specific explains about 35.1% of price moves in the current state."
              }
            },
            "summary": "Nov: Mostly sector-driven."
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
              "median": 0.46163873766186003,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.2%",
              "display_range": null,
              "display_text": "46.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 46.2,
              "plain_english": "Sector explains about 46.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.32185856623835424,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "32.2%",
                "display_range": null,
                "display_text": "32.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 32.2,
                "plain_english": "Market explains about 32.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.46163873766186003,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "46.2%",
                "display_range": null,
                "display_text": "46.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 46.2,
                "plain_english": "Sector explains about 46.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.21650269609978567,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "21.7%",
                "display_range": null,
                "display_text": "21.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 21.7,
                "plain_english": "Company-specific explains about 21.7% of price moves in the current state."
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
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.47133358200857206,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.1%",
              "display_range": null,
              "display_text": "47.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 47.1,
              "plain_english": "Sector explains about 47.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.1201228626890309,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "12.0%",
                "display_range": null,
                "display_text": "12.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 12.0,
                "plain_english": "Market explains about 12.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.47133358200857206,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "47.1%",
                "display_range": null,
                "display_text": "47.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 47.1,
                "plain_english": "Sector explains about 47.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.40854355530239705,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "40.9%",
                "display_range": null,
                "display_text": "40.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 40.9,
                "plain_english": "Company-specific explains about 40.9% of price moves in the current state."
              }
            },
            "summary": "Jan: Mostly sector-driven."
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
              "median": 0.5731090554704732,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "57.3%",
              "display_range": null,
              "display_text": "57.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 57.3,
              "plain_english": "Sector explains about 57.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.09275399395712644,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "9.3%",
                "display_range": null,
                "display_text": "9.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 9.3,
                "plain_english": "Market explains about 9.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.5731090554704732,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "57.3%",
                "display_range": null,
                "display_text": "57.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 57.3,
                "plain_english": "Sector explains about 57.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3341369505724004,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "33.4%",
                "display_range": null,
                "display_text": "33.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 33.4,
                "plain_english": "Company-specific explains about 33.4% of price moves in the current state."
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
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.41453623720699034,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "41.5%",
              "display_range": null,
              "display_text": "41.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 41.5,
              "plain_english": "Sector explains about 41.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.27401768620266115,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.4%",
                "display_range": null,
                "display_text": "27.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 27.4,
                "plain_english": "Market explains about 27.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.41453623720699034,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "41.5%",
                "display_range": null,
                "display_text": "41.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 41.5,
                "plain_english": "Sector explains about 41.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3114460765903485,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "31.1%",
                "display_range": null,
                "display_text": "31.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 31.1,
                "plain_english": "Company-specific explains about 31.1% of price moves in the current state."
              }
            },
            "summary": "Mar: More mixed, though sector-driven still has the largest share."
          },
          {
            "month_key": "2026-04",
            "month_label": "April 2026",
            "month_short_label": "Apr",
            "period_label": "2026-04-01 to 2026-04-21",
            "n_obs": 12,
            "partial_month": false,
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.38510094446302023,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "38.5%",
              "display_range": null,
              "display_text": "38.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 12 trading days.",
              "kind": "share_pct",
              "value_pct": 38.5,
              "plain_english": "Sector explains about 38.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2638067346437695,
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
                "plain_english": "Market explains about 26.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.38510094446302023,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "38.5%",
                "display_range": null,
                "display_text": "38.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 12 trading days.",
                "kind": "share_pct",
                "value_pct": 38.5,
                "plain_english": "Sector explains about 38.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3510923208932102,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "35.1%",
                "display_range": null,
                "display_text": "35.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 12 trading days.",
                "kind": "share_pct",
                "value_pct": 35.1,
                "plain_english": "Company-specific explains about 35.1% of price moves in the current state."
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
            "expected_duration_days": 6.578947368421052,
            "current_probability": 1.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.009579255403180524,
              "low": 0.009579255403180524,
              "high": 0.009579255403180524
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": null
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 6.526315789473684,
            "current_probability": 0.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.015976691419952758,
              "low": 0.015976691419952758,
              "high": 0.015976691419952758
            },
            "volatility_label": "High Volatility",
            "current_probability_display": 0.0
          }
        ],
        "transitions": {
          "mean": [
            [
              0.8548387096774194,
              0.14516129032258066
            ],
            [
              0.1532258064516129,
              0.8467741935483871
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              106.0,
              18.0
            ],
            [
              19.0,
              105.0
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
          "market_link_display": "-0.17",
          "sector_link_display": "2.00",
          "market_link_explainer": "Weak market link. A 1% market move has lined up with about a 0.17% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "High sector link. A 1% sector move has lined up with about a 2.00% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "0.00",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "Low Volatility",
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "driver_share_pct": 82.0,
          "driver_share_display": "82.0%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 251 trading days relative to the 252-day target.",
          "history_days": 251,
          "history_limited": true,
          "volatility_label": "Low Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.8548387096774194,
          "effective_days": 125.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 6.6 days.",
          "expected_duration_days": 6.6
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
          "period_label": "2025-04-02 to 2025-04-30",
          "n_obs": 18,
          "partial_month": true,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "Apr: Mostly sector-driven.",
          "share_market": 0.22380926188099234,
          "share_sector": 0.5034589669402736,
          "share_company": 0.2727317711787341,
          "share_market_display": "22.4%",
          "share_sector_display": "50.3%",
          "share_company_display": "27.3%",
          "dominant_share_display": "50.3%"
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
          "summary": "May: More mixed, though company-driven still has the largest share.",
          "share_market": 0.12137803794785257,
          "share_sector": 0.43908107527990414,
          "share_company": 0.4395408867722433,
          "share_market_display": "12.1%",
          "share_sector_display": "43.9%",
          "share_company_display": "44.0%",
          "dominant_share_display": "44.0%"
        },
        {
          "month_key": "2025-06",
          "month_label": "June 2025",
          "month_short_label": "Jun",
          "period_label": "2025-06-02 to 2025-06-30",
          "n_obs": 21,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "Jun: Mostly sector-driven.",
          "share_market": 0.16226872507882545,
          "share_sector": 0.5594110334647053,
          "share_company": 0.27832024145646916,
          "share_market_display": "16.2%",
          "share_sector_display": "55.9%",
          "share_company_display": "27.8%",
          "dominant_share_display": "55.9%"
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
          "share_market": 0.06117541289958193,
          "share_sector": 0.48898181453449635,
          "share_company": 0.44984277256592176,
          "share_market_display": "6.1%",
          "share_sector_display": "48.9%",
          "share_company_display": "45.0%",
          "dominant_share_display": "48.9%"
        },
        {
          "month_key": "2025-08",
          "month_label": "August 2025",
          "month_short_label": "Aug",
          "period_label": "2025-08-01 to 2025-08-29",
          "n_obs": 21,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "Aug: Mostly sector-driven.",
          "share_market": 0.15725797678221265,
          "share_sector": 0.5214166595938229,
          "share_company": 0.3213253636239645,
          "share_market_display": "15.7%",
          "share_sector_display": "52.1%",
          "share_company_display": "32.1%",
          "dominant_share_display": "52.1%"
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
          "summary": "Sep: Mostly sector-driven.",
          "share_market": 0.13706165480114688,
          "share_sector": 0.5516703224640017,
          "share_company": 0.3112680227348513,
          "share_market_display": "13.7%",
          "share_sector_display": "55.2%",
          "share_company_display": "31.1%",
          "dominant_share_display": "55.2%"
        },
        {
          "month_key": "2025-10",
          "month_label": "October 2025",
          "month_short_label": "Oct",
          "period_label": "2025-10-02 to 2025-10-31",
          "n_obs": 20,
          "partial_month": true,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "Oct: Mostly sector-driven.",
          "share_market": 0.049250378698502406,
          "share_sector": 0.5450468625451763,
          "share_company": 0.40570275875632117,
          "share_market_display": "4.9%",
          "share_sector_display": "54.5%",
          "share_company_display": "40.6%",
          "dominant_share_display": "54.5%"
        },
        {
          "month_key": "2025-11",
          "month_label": "November 2025",
          "month_short_label": "Nov",
          "period_label": "2025-11-03 to 2025-11-28",
          "n_obs": 20,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "Nov: Mostly sector-driven.",
          "share_market": 0.07555361923444963,
          "share_sector": 0.5730389070551061,
          "share_company": 0.35140747371044445,
          "share_market_display": "7.6%",
          "share_sector_display": "57.3%",
          "share_company_display": "35.1%",
          "dominant_share_display": "57.3%"
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
          "share_market": 0.32185856623835424,
          "share_sector": 0.46163873766186003,
          "share_company": 0.21650269609978567,
          "share_market_display": "32.2%",
          "share_sector_display": "46.2%",
          "share_company_display": "21.7%",
          "dominant_share_display": "46.2%"
        },
        {
          "month_key": "2026-01",
          "month_label": "January 2026",
          "month_short_label": "Jan",
          "period_label": "2026-01-02 to 2026-01-30",
          "n_obs": 21,
          "partial_month": true,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "Jan: Mostly sector-driven.",
          "share_market": 0.1201228626890309,
          "share_sector": 0.47133358200857206,
          "share_company": 0.40854355530239705,
          "share_market_display": "12.0%",
          "share_sector_display": "47.1%",
          "share_company_display": "40.9%",
          "dominant_share_display": "47.1%"
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
          "share_market": 0.09275399395712644,
          "share_sector": 0.5731090554704732,
          "share_company": 0.3341369505724004,
          "share_market_display": "9.3%",
          "share_sector_display": "57.3%",
          "share_company_display": "33.4%",
          "dominant_share_display": "57.3%"
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
          "share_market": 0.27401768620266115,
          "share_sector": 0.41453623720699034,
          "share_company": 0.3114460765903485,
          "share_market_display": "27.4%",
          "share_sector_display": "41.5%",
          "share_company_display": "31.1%",
          "dominant_share_display": "41.5%"
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-21",
          "n_obs": 12,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "Apr: More mixed, though sector-driven still has the largest share.",
          "share_market": 0.2638067346437695,
          "share_sector": 0.38510094446302023,
          "share_company": 0.3510923208932102,
          "share_market_display": "26.4%",
          "share_sector_display": "38.5%",
          "share_company_display": "35.1%",
          "dominant_share_display": "38.5%"
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
            "expected_duration_days": 6.578947368421052,
            "current_probability": 1.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.009579255403180524,
              "low": 0.009579255403180524,
              "high": 0.009579255403180524
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 6.526315789473684,
            "current_probability": 0.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.015976691419952758,
              "low": 0.015976691419952758,
              "high": 0.015976691419952758
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.8548387096774194,
            0.14516129032258066
          ],
          [
            0.1532258064516129,
            0.8467741935483871
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 7.26,
          "quantity": 222000.0,
          "value": 1611720.0
        },
        {
          "level": 2,
          "price": 7.25,
          "quantity": 3962000.0,
          "value": 28724500.0
        },
        {
          "level": 3,
          "price": 7.24,
          "quantity": 3022000.0,
          "value": 21879280.0
        },
        {
          "level": 4,
          "price": 7.23,
          "quantity": 1465000.0,
          "value": 10591950.0
        },
        {
          "level": 5,
          "price": 7.22,
          "quantity": 3707000.0,
          "value": 26764540.0
        },
        {
          "level": 6,
          "price": 7.21,
          "quantity": 1428000.0,
          "value": 10295880.0
        },
        {
          "level": 7,
          "price": 7.2,
          "quantity": 1241000.0,
          "value": 8935200.0
        },
        {
          "level": 8,
          "price": 7.19,
          "quantity": 1040000.0,
          "value": 7477600.0
        },
        {
          "level": 9,
          "price": 7.18,
          "quantity": 597000.0,
          "value": 4286460.0
        },
        {
          "level": 10,
          "price": 7.17,
          "quantity": 77000.0,
          "value": 552090.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 7.27,
          "quantity": 660000.0,
          "value": 4798200.0
        },
        {
          "level": 2,
          "price": 7.28,
          "quantity": 1999000.0,
          "value": 14552720.0
        },
        {
          "level": 3,
          "price": 7.29,
          "quantity": 2189000.0,
          "value": 15957810.0
        },
        {
          "level": 4,
          "price": 7.3,
          "quantity": 4294000.0,
          "value": 31346200.0
        },
        {
          "level": 5,
          "price": 7.31,
          "quantity": 2048000.0,
          "value": 14970880.0
        },
        {
          "level": 6,
          "price": 7.32,
          "quantity": 3072000.0,
          "value": 22487040.0
        },
        {
          "level": 7,
          "price": 7.33,
          "quantity": 2237000.0,
          "value": 16397210.0
        },
        {
          "level": 8,
          "price": 7.34,
          "quantity": 965000.0,
          "value": 7083100.0
        },
        {
          "level": 9,
          "price": 7.35,
          "quantity": 3230000.0,
          "value": 23740500.0
        },
        {
          "level": 10,
          "price": 7.36,
          "quantity": 304000.0,
          "value": 2237440.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-04-21 07:59:58.271000000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XHKG",
        "mid_price": 7.265,
        "spread_pct": 0.00137646249139708,
        "spread_ticks": 1.0,
        "tick_size": 0.01,
        "bid_depth_notional_top10": 121119220.0,
        "ask_depth_notional_top10": 153571100.0,
        "bid_ask_depth_ratio": 0.7887
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 365,
        "history_limited": false,
        "trade_days_used": 240,
        "n_trades_used": 2753458,
        "first_trade_date": "2025-04-22",
        "last_trade_date": "2026-04-21",
        "window_label": "Apr 22, 2025 to Apr 21, 2026",
        "window_short_label": "Apr 22, 2025 to Apr 21, 2026",
        "trade_days_label": "240 trading days",
        "trade_count_label": "2,753,458 trades",
        "window_detail_label": "240 trading days • 2,753,458 trades",
        "history_note": "Trade-size percentiles use Apr 22, 2025 to Apr 21, 2026 history (240 trading days • 2,753,458 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 240570.0,
            "impact_pct": -0.000688,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.2,
            "pct_of_adv": 0.02
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 485870.0,
            "impact_pct": -0.000688,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.4,
            "pct_of_adv": 0.03
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 12964044.18,
            "impact_pct": -0.001894,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 10.7,
            "pct_of_adv": 0.81
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-04-21",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "2495271682.0",
            "timestamp": "2026-04-21 05:20:43.667000000",
            "local_timestamp": "2026-04-21 13:20:43",
            "posted_price": 7.28,
            "size_shares": 3000000.0,
            "notional": 21840000.0,
            "impact_pct": -0.001963,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 18.03,
            "price_vs_mid_pct": 0.206,
            "executed_event_count": 0,
            "event_count": 155
          },
          {
            "rank": 2,
            "order_id": "3416919554.0",
            "timestamp": "2026-04-21 07:03:14.495000000",
            "local_timestamp": "2026-04-21 15:03:14",
            "posted_price": 7.28,
            "size_shares": 2687000.0,
            "notional": 19561360.0,
            "impact_pct": -0.001951,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 16.15,
            "price_vs_mid_pct": 0.206,
            "executed_event_count": 0,
            "event_count": 104
          },
          {
            "rank": 3,
            "order_id": "3375394818.0",
            "timestamp": "2026-04-21 06:57:45.556000000",
            "local_timestamp": "2026-04-21 14:57:45",
            "posted_price": 7.28,
            "size_shares": 2060000.0,
            "notional": 14996800.0,
            "impact_pct": -0.001917,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 12.38,
            "price_vs_mid_pct": 0.206,
            "executed_event_count": 0,
            "event_count": 2
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-04-21",
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
            "spread_pct": 0.0013821700069108205,
            "spread_ticks": 0.9999999999999787,
            "bid_depth_notional": 102559480.0,
            "ask_depth_notional": 162045170.0,
            "mid_price": 7.235
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.0013821700069108205,
            "spread_ticks": 0.9999999999999787,
            "bid_depth_notional": 132619130.0,
            "ask_depth_notional": 187977270.0,
            "mid_price": 7.235
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.0013802622498274378,
            "spread_ticks": 0.9999999999999787,
            "bid_depth_notional": 144428690.0,
            "ask_depth_notional": 191214110.0,
            "mid_price": 7.245
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.0013783597518952154,
            "spread_ticks": 0.9999999999999787,
            "bid_depth_notional": 129427800.0,
            "ask_depth_notional": 195358100.0,
            "mid_price": 7.255
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.0013783597518952154,
            "spread_ticks": 0.9999999999999787,
            "bid_depth_notional": 87014630.0,
            "ask_depth_notional": 199593100.0,
            "mid_price": 7.255
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.0013726835964309933,
            "spread_ticks": 0.9999999999999787,
            "bid_depth_notional": 152940720.0,
            "ask_depth_notional": 203987700.0,
            "mid_price": 7.285
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.0013726835964309933,
            "spread_ticks": 0.9999999999999787,
            "bid_depth_notional": 180235790.0,
            "ask_depth_notional": 210635650.0,
            "mid_price": 7.285
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.0013726835964309933,
            "spread_ticks": 0.9999999999999787,
            "bid_depth_notional": 155743520.0,
            "ask_depth_notional": 208501860.0,
            "mid_price": 7.285
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.0013726835964309933,
            "spread_ticks": 0.9999999999999787,
            "bid_depth_notional": 163850840.0,
            "ask_depth_notional": 246251520.0,
            "mid_price": 7.285
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.00137646249139708,
            "spread_ticks": 0.9999999999999787,
            "bid_depth_notional": 168882870.0,
            "ask_depth_notional": 213732490.0,
            "mid_price": 7.265
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.00137646249139708,
            "spread_ticks": 0.9999999999999787,
            "bid_depth_notional": 121119220.0,
            "ask_depth_notional": 153571100.0,
            "mid_price": 7.265
          }
        ],
        "summary": {
          "median_spread_pct": 0.00137646249139708,
          "median_spread_ticks": 0.9999999999999787,
          "median_bid_depth_notional": 144428690.0,
          "median_ask_depth_notional": 199593100.0,
          "tightest_bucket": "13:00",
          "widest_bucket": "09:30",
          "deepest_bid_bucket": "13:30",
          "thinnest_bid_bucket": "11:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 0.0,
      "peers": [
        {
          "ticker": "939",
          "pct": 0.0
        },
        {
          "ticker": "5",
          "pct": 0.0
        },
        {
          "ticker": "3988",
          "pct": 0.1
        },
        {
          "ticker": "3968",
          "pct": 0.1
        },
        {
          "ticker": "1288",
          "pct": 0.2
        },
        {
          "ticker": "2888",
          "pct": 0.5
        },
        {
          "ticker": "998",
          "pct": 0.5
        },
        {
          "ticker": "1658",
          "pct": 0.5
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 15694,
          "n_runs": 1337,
          "n_trade_days": 1,
          "first_trade_date": "2026-04-21",
          "last_trade_date": "2026-04-21",
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
            "retail_pct": 0.06454696062189372,
            "mixed_pct": 0.0,
            "instit_pct": 0.400726392251816,
            "ambiguous_pct": 0.49783356696826814,
            "unobservable_pct": 0.03689308015802217,
            "unclear_pct": 0.5347266471262904,
            "retail_qty_pct": 0.01745922756653778,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.5179066979478014,
            "ambiguous_qty_pct": 0.4267870588765842,
            "unobservable_qty_pct": 0.03784701560907661,
            "unclear_qty_pct": 0.4646340744856608,
            "retail_notional_pct": 0.017442041418625553,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.5176995063351313,
            "ambiguous_notional_pct": 0.42694594617135867,
            "unobservable_notional_pct": 0.03791250607488457,
            "unclear_notional_pct": 0.4648584522462432
          },
          "run_composition": {
            "retail_pct": 0.2700074794315632,
            "mixed_pct": 0.0,
            "instit_pct": 0.08526551982049364,
            "ambiguous_pct": 0.44801795063575167,
            "unobservable_pct": 0.19670905011219147,
            "unclear_pct": 0.6447270007479431,
            "retail_notional_pct": 0.017442041418625553,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.5176995063351312,
            "unclear_notional_pct": 0.4648584522462432
          },
          "counts": {
            "trades": {
              "retail": 1013,
              "mixed": 0,
              "institutional": 6289,
              "ambiguous": 7813,
              "unobservable": 579,
              "unclear": 8392
            },
            "runs": {
              "retail": 361,
              "mixed": 0,
              "institutional": 114,
              "ambiguous": 599,
              "unobservable": 263,
              "unclear": 862
            }
          },
          "confidence": {
            "high": 0.055347793567688854,
            "medium": 0.2161555721765146,
            "low": 0.08376963350785341,
            "na": 0.6447270007479432
          },
          "confidence_counts": {
            "high": 74,
            "medium": 289,
            "low": 112,
            "na": 862
          },
          "trade_confidence": {
            "high": 0.005033770867847585,
            "medium": 0.36606346374410603,
            "low": 0.09417611826175608,
            "na": 0.5347266471262903
          },
          "trade_confidence_counts": {
            "high": 79,
            "medium": 5745,
            "low": 1478,
            "na": 8392
          },
          "observability": {
            "avg_feature_coverage": 0.7476813762154076,
            "observable_run_pct": 0.8032909498878085,
            "ambiguous_run_pct": 0.44801795063575167,
            "unobservable_run_pct": 0.19670905011219147
          },
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Unclassified Flow",
          "dominant_share": 0.44801795063575167,
          "dominance_gap": 0.17801047120418845,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 15694
            },
            "d2_information": {
              "UNOBSERVABLE": 15694
            },
            "d3_urgency": {
              "IMMEDIATE": 772,
              "ADAPTIVE": 563,
              "SCHEDULED": 2
            },
            "participant_confidence": {
              "NA": 862,
              "MEDIUM": 289,
              "LOW": 112,
              "HIGH": 74
            }
          },
          "trade_size": {
            "avg": 119481.58819102842,
            "median": 36250.0
          },
          "run_size": {
            "avg": 1402501.1556245326,
            "median": 289400.0,
            "avg_length": 11.738219895287958
          },
          "recent_trades": [
            {
              "trade_id": "16742",
              "timestamp": "2026-04-21T08:01:00.041034",
              "price": 7.2,
              "size": 226.0,
              "notional": 1627.2,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 257480,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "16741",
              "timestamp": "2026-04-21T07:59:57.665624",
              "price": 7.26,
              "size": 1000.0,
              "notional": 7260.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16740",
              "timestamp": "2026-04-21T07:59:54.548585",
              "price": 7.26,
              "size": 2000.0,
              "notional": 14520.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16739",
              "timestamp": "2026-04-21T07:59:52.157998",
              "price": 7.26,
              "size": 1000.0,
              "notional": 7260.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16738",
              "timestamp": "2026-04-21T07:59:52.157273",
              "price": 7.26,
              "size": 1000.0,
              "notional": 7260.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16737",
              "timestamp": "2026-04-21T07:59:51.048760",
              "price": 7.26,
              "size": 1000.0,
              "notional": 7260.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16736",
              "timestamp": "2026-04-21T07:59:50.063649",
              "price": 7.27,
              "size": 1000.0,
              "notional": 7270.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16735",
              "timestamp": "2026-04-21T07:59:50.045074",
              "price": 7.27,
              "size": 3000.0,
              "notional": 21810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16734",
              "timestamp": "2026-04-21T07:59:49.672221",
              "price": 7.27,
              "size": 7000.0,
              "notional": 50890.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16733",
              "timestamp": "2026-04-21T07:59:49.672221",
              "price": 7.27,
              "size": 2000.0,
              "notional": 14540.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16732",
              "timestamp": "2026-04-21T07:59:49.672221",
              "price": 7.27,
              "size": 3000.0,
              "notional": 21810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16731",
              "timestamp": "2026-04-21T07:59:49.672221",
              "price": 7.27,
              "size": 3000.0,
              "notional": 21810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16730",
              "timestamp": "2026-04-21T07:59:49.672221",
              "price": 7.27,
              "size": 12000.0,
              "notional": 87240.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16729",
              "timestamp": "2026-04-21T07:59:49.492469",
              "price": 7.27,
              "size": 1000.0,
              "notional": 7270.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16728",
              "timestamp": "2026-04-21T07:59:49.340065",
              "price": 7.26,
              "size": 1000.0,
              "notional": 7260.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16727",
              "timestamp": "2026-04-21T07:59:49.339446",
              "price": 7.27,
              "size": 4000.0,
              "notional": 29080.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16726",
              "timestamp": "2026-04-21T07:59:45.312526",
              "price": 7.26,
              "size": 4000.0,
              "notional": 29040.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16725",
              "timestamp": "2026-04-21T07:59:45.176746",
              "price": 7.26,
              "size": 4000.0,
              "notional": 29040.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16724",
              "timestamp": "2026-04-21T07:59:44.496028",
              "price": 7.26,
              "size": 22000.0,
              "notional": 159720.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16723",
              "timestamp": "2026-04-21T07:59:40.716013",
              "price": 7.27,
              "size": 11000.0,
              "notional": 79970.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16722",
              "timestamp": "2026-04-21T07:59:40.176447",
              "price": 7.26,
              "size": 2000.0,
              "notional": 14520.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16721",
              "timestamp": "2026-04-21T07:59:39.007010",
              "price": 7.26,
              "size": 2000.0,
              "notional": 14520.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16720",
              "timestamp": "2026-04-21T07:59:37.400526",
              "price": 7.27,
              "size": 2000.0,
              "notional": 14540.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16719",
              "timestamp": "2026-04-21T07:59:35.666119",
              "price": 7.27,
              "size": 7000.0,
              "notional": 50890.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16718",
              "timestamp": "2026-04-21T07:59:35.666119",
              "price": 7.27,
              "size": 1000.0,
              "notional": 7270.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16717",
              "timestamp": "2026-04-21T07:59:35.666119",
              "price": 7.27,
              "size": 40000.0,
              "notional": 290800.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16716",
              "timestamp": "2026-04-21T07:59:35.452220",
              "price": 7.26,
              "size": 6000.0,
              "notional": 43560.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16715",
              "timestamp": "2026-04-21T07:59:35.436524",
              "price": 7.26,
              "size": 10000.0,
              "notional": 72600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16714",
              "timestamp": "2026-04-21T07:59:34.453365",
              "price": 7.27,
              "size": 1000.0,
              "notional": 7270.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16713",
              "timestamp": "2026-04-21T07:59:34.349450",
              "price": 7.27,
              "size": 2000.0,
              "notional": 14540.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
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
          "n_trades": 250257,
          "n_runs": 26634,
          "n_trade_days": 21,
          "first_trade_date": "2026-03-19",
          "last_trade_date": "2026-04-21",
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
            "retail_pct": 0.039763123509032716,
            "mixed_pct": 0.0,
            "instit_pct": 0.5474572139840245,
            "ambiguous_pct": 0.3772761601074096,
            "unobservable_pct": 0.03550350239953328,
            "unclear_pct": 0.41277966250694287,
            "retail_qty_pct": 0.00871956691678735,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7084507252508863,
            "ambiguous_qty_pct": 0.260311595928149,
            "unobservable_qty_pct": 0.022518111904177303,
            "unclear_qty_pct": 0.2828297078323263,
            "retail_notional_pct": 0.008924105130438334,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7037776048795088,
            "ambiguous_notional_pct": 0.2648139163487549,
            "unobservable_notional_pct": 0.02248437364129797,
            "unclear_notional_pct": 0.28729828999005286
          },
          "run_composition": {
            "retail_pct": 0.1738004054967335,
            "mixed_pct": 0.0,
            "instit_pct": 0.12423969362469024,
            "ambiguous_pct": 0.46530750168956975,
            "unobservable_pct": 0.23665239918900655,
            "unclear_pct": 0.7019599008785763,
            "retail_notional_pct": 0.008924105130438334,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7037776048795088,
            "unclear_notional_pct": 0.28729828999005286
          },
          "counts": {
            "trades": {
              "retail": 9951,
              "mixed": 0,
              "institutional": 137005,
              "ambiguous": 94416,
              "unobservable": 8885,
              "unclear": 103301
            },
            "runs": {
              "retail": 4629,
              "mixed": 0,
              "institutional": 3309,
              "ambiguous": 12393,
              "unobservable": 6303,
              "unclear": 18696
            }
          },
          "confidence": {
            "high": 0.04186378313433957,
            "medium": 0.20477585041676052,
            "low": 0.05140046557032365,
            "na": 0.7019599008785763
          },
          "confidence_counts": {
            "high": 1115,
            "medium": 5454,
            "low": 1369,
            "na": 18696
          },
          "trade_confidence": {
            "high": 0.021861526350911265,
            "medium": 0.4964416579756011,
            "low": 0.06891715316654479,
            "na": 0.41277966250694287
          },
          "trade_confidence_counts": {
            "high": 5471,
            "medium": 124238,
            "low": 17247,
            "na": 103301
          },
          "observability": {
            "avg_feature_coverage": 0.7061049785987835,
            "observable_run_pct": 0.7633476008109934,
            "ambiguous_run_pct": 0.46530750168956975,
            "unobservable_run_pct": 0.23665239918900655
          },
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Unclassified Flow",
          "dominant_share": 0.46530750168956975,
          "dominance_gap": 0.2286551025005632,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 250257
            },
            "d2_information": {
              "UNOBSERVABLE": 250257
            },
            "d3_urgency": {
              "IMMEDIATE": 19073,
              "ADAPTIVE": 7503,
              "SCHEDULED": 54,
              "OPPORTUNISTIC": 4
            },
            "participant_confidence": {
              "NA": 18696,
              "MEDIUM": 5454,
              "LOW": 1369,
              "HIGH": 1115
            }
          },
          "trade_size": {
            "avg": 112935.74066579556,
            "median": 34200.0
          },
          "run_size": {
            "avg": 1061160.9090560938,
            "median": 132595.0,
            "avg_length": 9.396147781031765
          },
          "recent_trades": [
            {
              "trade_id": "16742",
              "timestamp": "2026-04-21T08:01:00.041034",
              "price": 7.2,
              "size": 226.0,
              "notional": 1627.2,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 257480,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "16741",
              "timestamp": "2026-04-21T07:59:57.665624",
              "price": 7.26,
              "size": 1000.0,
              "notional": 7260.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16740",
              "timestamp": "2026-04-21T07:59:54.548585",
              "price": 7.26,
              "size": 2000.0,
              "notional": 14520.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16739",
              "timestamp": "2026-04-21T07:59:52.157998",
              "price": 7.26,
              "size": 1000.0,
              "notional": 7260.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16738",
              "timestamp": "2026-04-21T07:59:52.157273",
              "price": 7.26,
              "size": 1000.0,
              "notional": 7260.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16737",
              "timestamp": "2026-04-21T07:59:51.048760",
              "price": 7.26,
              "size": 1000.0,
              "notional": 7260.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16736",
              "timestamp": "2026-04-21T07:59:50.063649",
              "price": 7.27,
              "size": 1000.0,
              "notional": 7270.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16735",
              "timestamp": "2026-04-21T07:59:50.045074",
              "price": 7.27,
              "size": 3000.0,
              "notional": 21810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16734",
              "timestamp": "2026-04-21T07:59:49.672221",
              "price": 7.27,
              "size": 7000.0,
              "notional": 50890.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16733",
              "timestamp": "2026-04-21T07:59:49.672221",
              "price": 7.27,
              "size": 2000.0,
              "notional": 14540.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16732",
              "timestamp": "2026-04-21T07:59:49.672221",
              "price": 7.27,
              "size": 3000.0,
              "notional": 21810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16731",
              "timestamp": "2026-04-21T07:59:49.672221",
              "price": 7.27,
              "size": 3000.0,
              "notional": 21810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16730",
              "timestamp": "2026-04-21T07:59:49.672221",
              "price": 7.27,
              "size": 12000.0,
              "notional": 87240.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16729",
              "timestamp": "2026-04-21T07:59:49.492469",
              "price": 7.27,
              "size": 1000.0,
              "notional": 7270.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16728",
              "timestamp": "2026-04-21T07:59:49.340065",
              "price": 7.26,
              "size": 1000.0,
              "notional": 7260.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16727",
              "timestamp": "2026-04-21T07:59:49.339446",
              "price": 7.27,
              "size": 4000.0,
              "notional": 29080.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16726",
              "timestamp": "2026-04-21T07:59:45.312526",
              "price": 7.26,
              "size": 4000.0,
              "notional": 29040.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16725",
              "timestamp": "2026-04-21T07:59:45.176746",
              "price": 7.26,
              "size": 4000.0,
              "notional": 29040.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16724",
              "timestamp": "2026-04-21T07:59:44.496028",
              "price": 7.26,
              "size": 22000.0,
              "notional": 159720.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16723",
              "timestamp": "2026-04-21T07:59:40.716013",
              "price": 7.27,
              "size": 11000.0,
              "notional": 79970.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16722",
              "timestamp": "2026-04-21T07:59:40.176447",
              "price": 7.26,
              "size": 2000.0,
              "notional": 14520.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16721",
              "timestamp": "2026-04-21T07:59:39.007010",
              "price": 7.26,
              "size": 2000.0,
              "notional": 14520.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16720",
              "timestamp": "2026-04-21T07:59:37.400526",
              "price": 7.27,
              "size": 2000.0,
              "notional": 14540.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16719",
              "timestamp": "2026-04-21T07:59:35.666119",
              "price": 7.27,
              "size": 7000.0,
              "notional": 50890.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16718",
              "timestamp": "2026-04-21T07:59:35.666119",
              "price": 7.27,
              "size": 1000.0,
              "notional": 7270.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16717",
              "timestamp": "2026-04-21T07:59:35.666119",
              "price": 7.27,
              "size": 40000.0,
              "notional": 290800.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16716",
              "timestamp": "2026-04-21T07:59:35.452220",
              "price": 7.26,
              "size": 6000.0,
              "notional": 43560.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16715",
              "timestamp": "2026-04-21T07:59:35.436524",
              "price": 7.26,
              "size": 10000.0,
              "notional": 72600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16714",
              "timestamp": "2026-04-21T07:59:34.453365",
              "price": 7.27,
              "size": 1000.0,
              "notional": 7270.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16713",
              "timestamp": "2026-04-21T07:59:34.349450",
              "price": 7.27,
              "size": 2000.0,
              "notional": 14540.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
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
          "n_trades": 647682,
          "n_runs": 76421,
          "n_trade_days": 63,
          "first_trade_date": "2026-01-15",
          "last_trade_date": "2026-04-21",
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
            "retail_pct": 0.023244431680979245,
            "mixed_pct": 0.0,
            "instit_pct": 0.6487535549853168,
            "ambiguous_pct": 0.2753990384170009,
            "unobservable_pct": 0.052602974916702946,
            "unclear_pct": 0.3280020133337039,
            "retail_qty_pct": 0.004610779827095455,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.8007017929294039,
            "ambiguous_qty_pct": 0.1654073914287528,
            "unobservable_qty_pct": 0.029280035814747887,
            "unclear_qty_pct": 0.1946874272435007,
            "retail_notional_pct": 0.004780274518119644,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7967237660335358,
            "ambiguous_notional_pct": 0.16936489062867674,
            "unobservable_notional_pct": 0.029131068819667795,
            "unclear_notional_pct": 0.19849595944834453
          },
          "run_composition": {
            "retail_pct": 0.08962196254956098,
            "mixed_pct": 0.0,
            "instit_pct": 0.1723740856570838,
            "ambiguous_pct": 0.4127792099030371,
            "unobservable_pct": 0.3252247418903181,
            "unclear_pct": 0.7380039517933552,
            "retail_notional_pct": 0.004780274518119644,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7967237660335358,
            "unclear_notional_pct": 0.19849595944834453
          },
          "counts": {
            "trades": {
              "retail": 15055,
              "mixed": 0,
              "institutional": 420186,
              "ambiguous": 178371,
              "unobservable": 34070,
              "unclear": 212441
            },
            "runs": {
              "retail": 6849,
              "mixed": 0,
              "institutional": 13173,
              "ambiguous": 31545,
              "unobservable": 24854,
              "unclear": 56399
            }
          },
          "confidence": {
            "high": 0.022336792242969864,
            "medium": 0.20164614438439696,
            "low": 0.03801311157927795,
            "na": 0.7380039517933552
          },
          "confidence_counts": {
            "high": 1707,
            "medium": 15410,
            "low": 2905,
            "na": 56399
          },
          "trade_confidence": {
            "high": 0.05221543905805627,
            "medium": 0.5710827226941616,
            "low": 0.048699824914078205,
            "na": 0.3280020133337039
          },
          "trade_confidence_counts": {
            "high": 33819,
            "medium": 369880,
            "low": 31542,
            "na": 212441
          },
          "observability": {
            "avg_feature_coverage": 0.6657155755616911,
            "observable_run_pct": 0.674775258109682,
            "ambiguous_run_pct": 0.4127792099030371,
            "unobservable_run_pct": 0.3252247418903181
          },
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Mixed, mostly unclassified",
          "dominant_share": 0.4127792099030371,
          "dominance_gap": 0.08755446801271904,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 647682
            },
            "d2_information": {
              "UNOBSERVABLE": 647682
            },
            "d3_urgency": {
              "IMMEDIATE": 57910,
              "ADAPTIVE": 18390,
              "SCHEDULED": 114,
              "OPPORTUNISTIC": 7
            },
            "participant_confidence": {
              "NA": 56399,
              "MEDIUM": 15410,
              "LOW": 2905,
              "HIGH": 1707
            }
          },
          "trade_size": {
            "avg": 112901.56822431379,
            "median": 32150.0
          },
          "run_size": {
            "avg": 956861.5107190432,
            "median": 113940.0,
            "avg_length": 8.475183522853666
          },
          "recent_trades": [
            {
              "trade_id": "16742",
              "timestamp": "2026-04-21T08:01:00.041034",
              "price": 7.2,
              "size": 226.0,
              "notional": 1627.2,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 257480,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "16741",
              "timestamp": "2026-04-21T07:59:57.665624",
              "price": 7.26,
              "size": 1000.0,
              "notional": 7260.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16740",
              "timestamp": "2026-04-21T07:59:54.548585",
              "price": 7.26,
              "size": 2000.0,
              "notional": 14520.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16739",
              "timestamp": "2026-04-21T07:59:52.157998",
              "price": 7.26,
              "size": 1000.0,
              "notional": 7260.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16738",
              "timestamp": "2026-04-21T07:59:52.157273",
              "price": 7.26,
              "size": 1000.0,
              "notional": 7260.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16737",
              "timestamp": "2026-04-21T07:59:51.048760",
              "price": 7.26,
              "size": 1000.0,
              "notional": 7260.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16736",
              "timestamp": "2026-04-21T07:59:50.063649",
              "price": 7.27,
              "size": 1000.0,
              "notional": 7270.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16735",
              "timestamp": "2026-04-21T07:59:50.045074",
              "price": 7.27,
              "size": 3000.0,
              "notional": 21810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16734",
              "timestamp": "2026-04-21T07:59:49.672221",
              "price": 7.27,
              "size": 7000.0,
              "notional": 50890.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16733",
              "timestamp": "2026-04-21T07:59:49.672221",
              "price": 7.27,
              "size": 2000.0,
              "notional": 14540.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16732",
              "timestamp": "2026-04-21T07:59:49.672221",
              "price": 7.27,
              "size": 3000.0,
              "notional": 21810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16731",
              "timestamp": "2026-04-21T07:59:49.672221",
              "price": 7.27,
              "size": 3000.0,
              "notional": 21810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16730",
              "timestamp": "2026-04-21T07:59:49.672221",
              "price": 7.27,
              "size": 12000.0,
              "notional": 87240.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16729",
              "timestamp": "2026-04-21T07:59:49.492469",
              "price": 7.27,
              "size": 1000.0,
              "notional": 7270.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16728",
              "timestamp": "2026-04-21T07:59:49.340065",
              "price": 7.26,
              "size": 1000.0,
              "notional": 7260.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16727",
              "timestamp": "2026-04-21T07:59:49.339446",
              "price": 7.27,
              "size": 4000.0,
              "notional": 29080.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16726",
              "timestamp": "2026-04-21T07:59:45.312526",
              "price": 7.26,
              "size": 4000.0,
              "notional": 29040.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16725",
              "timestamp": "2026-04-21T07:59:45.176746",
              "price": 7.26,
              "size": 4000.0,
              "notional": 29040.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16724",
              "timestamp": "2026-04-21T07:59:44.496028",
              "price": 7.26,
              "size": 22000.0,
              "notional": 159720.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16723",
              "timestamp": "2026-04-21T07:59:40.716013",
              "price": 7.27,
              "size": 11000.0,
              "notional": 79970.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16722",
              "timestamp": "2026-04-21T07:59:40.176447",
              "price": 7.26,
              "size": 2000.0,
              "notional": 14520.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16721",
              "timestamp": "2026-04-21T07:59:39.007010",
              "price": 7.26,
              "size": 2000.0,
              "notional": 14520.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16720",
              "timestamp": "2026-04-21T07:59:37.400526",
              "price": 7.27,
              "size": 2000.0,
              "notional": 14540.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16719",
              "timestamp": "2026-04-21T07:59:35.666119",
              "price": 7.27,
              "size": 7000.0,
              "notional": 50890.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16718",
              "timestamp": "2026-04-21T07:59:35.666119",
              "price": 7.27,
              "size": 1000.0,
              "notional": 7270.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16717",
              "timestamp": "2026-04-21T07:59:35.666119",
              "price": 7.27,
              "size": 40000.0,
              "notional": 290800.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16716",
              "timestamp": "2026-04-21T07:59:35.452220",
              "price": 7.26,
              "size": 6000.0,
              "notional": 43560.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16715",
              "timestamp": "2026-04-21T07:59:35.436524",
              "price": 7.26,
              "size": 10000.0,
              "notional": 72600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16714",
              "timestamp": "2026-04-21T07:59:34.453365",
              "price": 7.27,
              "size": 1000.0,
              "notional": 7270.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16713",
              "timestamp": "2026-04-21T07:59:34.349450",
              "price": 7.27,
              "size": 2000.0,
              "notional": 14540.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
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
          "n_trades": 1252228,
          "n_runs": 154428,
          "n_trade_days": 126,
          "first_trade_date": "2025-10-03",
          "last_trade_date": "2026-04-21",
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
            "retail_pct": 0.01945252781442357,
            "mixed_pct": 0.0,
            "instit_pct": 0.6649356187531344,
            "ambiguous_pct": 0.2568773418259295,
            "unobservable_pct": 0.05873451160651255,
            "unclear_pct": 0.315611853432442,
            "retail_qty_pct": 0.003486901897272031,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.8097641142673493,
            "ambiguous_qty_pct": 0.15016115327366775,
            "unobservable_qty_pct": 0.036587830561710916,
            "unclear_qty_pct": 0.18674898383537866,
            "retail_notional_pct": 0.0036163188054879657,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.8070830380189569,
            "ambiguous_notional_pct": 0.15294657994335642,
            "unobservable_notional_pct": 0.0363540632321987,
            "unclear_notional_pct": 0.18930064317555512
          },
          "run_composition": {
            "retail_pct": 0.07062190794415521,
            "mixed_pct": 0.0,
            "instit_pct": 0.18283601419431708,
            "ambiguous_pct": 0.4066879063382288,
            "unobservable_pct": 0.3398541715232989,
            "unclear_pct": 0.7465420778615277,
            "retail_notional_pct": 0.0036163188054879657,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.8070830380189569,
            "unclear_notional_pct": 0.18930064317555512
          },
          "counts": {
            "trades": {
              "retail": 24359,
              "mixed": 0,
              "institutional": 832651,
              "ambiguous": 321669,
              "unobservable": 73549,
              "unclear": 395218
            },
            "runs": {
              "retail": 10906,
              "mixed": 0,
              "institutional": 28235,
              "ambiguous": 62804,
              "unobservable": 52483,
              "unclear": 115287
            }
          },
          "confidence": {
            "high": 0.014971378247468076,
            "medium": 0.2021718859274225,
            "low": 0.036314657963581735,
            "na": 0.7465420778615277
          },
          "confidence_counts": {
            "high": 2312,
            "medium": 31221,
            "low": 5608,
            "na": 115287
          },
          "trade_confidence": {
            "high": 0.047587180609282013,
            "medium": 0.591706142970769,
            "low": 0.04509482298750707,
            "na": 0.315611853432442
          },
          "trade_confidence_counts": {
            "high": 59590,
            "medium": 740951,
            "low": 56469,
            "na": 395218
          },
          "observability": {
            "avg_feature_coverage": 0.6561970627088353,
            "observable_run_pct": 0.6601458284767011,
            "ambiguous_run_pct": 0.4066879063382288,
            "unobservable_run_pct": 0.3398541715232989
          },
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Mixed, mostly unclassified",
          "dominant_share": 0.4066879063382288,
          "dominance_gap": 0.06683373481492993,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 1252228
            },
            "d2_information": {
              "UNOBSERVABLE": 1252228
            },
            "d3_urgency": {
              "IMMEDIATE": 116983,
              "ADAPTIVE": 37267,
              "SCHEDULED": 168,
              "OPPORTUNISTIC": 10
            },
            "participant_confidence": {
              "NA": 115287,
              "MEDIUM": 31221,
              "LOW": 5608,
              "HIGH": 2312
            }
          },
          "trade_size": {
            "avg": 114909.87785165322,
            "median": 31600.0
          },
          "run_size": {
            "avg": 931782.8795452896,
            "median": 116221.25,
            "avg_length": 8.108814463698293
          },
          "recent_trades": [
            {
              "trade_id": "16742",
              "timestamp": "2026-04-21T08:01:00.041034",
              "price": 7.2,
              "size": 226.0,
              "notional": 1627.2,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 257480,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "16741",
              "timestamp": "2026-04-21T07:59:57.665624",
              "price": 7.26,
              "size": 1000.0,
              "notional": 7260.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16740",
              "timestamp": "2026-04-21T07:59:54.548585",
              "price": 7.26,
              "size": 2000.0,
              "notional": 14520.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16739",
              "timestamp": "2026-04-21T07:59:52.157998",
              "price": 7.26,
              "size": 1000.0,
              "notional": 7260.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16738",
              "timestamp": "2026-04-21T07:59:52.157273",
              "price": 7.26,
              "size": 1000.0,
              "notional": 7260.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16737",
              "timestamp": "2026-04-21T07:59:51.048760",
              "price": 7.26,
              "size": 1000.0,
              "notional": 7260.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16736",
              "timestamp": "2026-04-21T07:59:50.063649",
              "price": 7.27,
              "size": 1000.0,
              "notional": 7270.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16735",
              "timestamp": "2026-04-21T07:59:50.045074",
              "price": 7.27,
              "size": 3000.0,
              "notional": 21810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16734",
              "timestamp": "2026-04-21T07:59:49.672221",
              "price": 7.27,
              "size": 7000.0,
              "notional": 50890.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16733",
              "timestamp": "2026-04-21T07:59:49.672221",
              "price": 7.27,
              "size": 2000.0,
              "notional": 14540.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16732",
              "timestamp": "2026-04-21T07:59:49.672221",
              "price": 7.27,
              "size": 3000.0,
              "notional": 21810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16731",
              "timestamp": "2026-04-21T07:59:49.672221",
              "price": 7.27,
              "size": 3000.0,
              "notional": 21810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16730",
              "timestamp": "2026-04-21T07:59:49.672221",
              "price": 7.27,
              "size": 12000.0,
              "notional": 87240.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16729",
              "timestamp": "2026-04-21T07:59:49.492469",
              "price": 7.27,
              "size": 1000.0,
              "notional": 7270.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16728",
              "timestamp": "2026-04-21T07:59:49.340065",
              "price": 7.26,
              "size": 1000.0,
              "notional": 7260.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16727",
              "timestamp": "2026-04-21T07:59:49.339446",
              "price": 7.27,
              "size": 4000.0,
              "notional": 29080.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16726",
              "timestamp": "2026-04-21T07:59:45.312526",
              "price": 7.26,
              "size": 4000.0,
              "notional": 29040.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16725",
              "timestamp": "2026-04-21T07:59:45.176746",
              "price": 7.26,
              "size": 4000.0,
              "notional": 29040.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16724",
              "timestamp": "2026-04-21T07:59:44.496028",
              "price": 7.26,
              "size": 22000.0,
              "notional": 159720.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16723",
              "timestamp": "2026-04-21T07:59:40.716013",
              "price": 7.27,
              "size": 11000.0,
              "notional": 79970.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16722",
              "timestamp": "2026-04-21T07:59:40.176447",
              "price": 7.26,
              "size": 2000.0,
              "notional": 14520.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16721",
              "timestamp": "2026-04-21T07:59:39.007010",
              "price": 7.26,
              "size": 2000.0,
              "notional": 14520.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16720",
              "timestamp": "2026-04-21T07:59:37.400526",
              "price": 7.27,
              "size": 2000.0,
              "notional": 14540.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16719",
              "timestamp": "2026-04-21T07:59:35.666119",
              "price": 7.27,
              "size": 7000.0,
              "notional": 50890.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16718",
              "timestamp": "2026-04-21T07:59:35.666119",
              "price": 7.27,
              "size": 1000.0,
              "notional": 7270.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16717",
              "timestamp": "2026-04-21T07:59:35.666119",
              "price": 7.27,
              "size": 40000.0,
              "notional": 290800.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16716",
              "timestamp": "2026-04-21T07:59:35.452220",
              "price": 7.26,
              "size": 6000.0,
              "notional": 43560.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16715",
              "timestamp": "2026-04-21T07:59:35.436524",
              "price": 7.26,
              "size": 10000.0,
              "notional": 72600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16714",
              "timestamp": "2026-04-21T07:59:34.453365",
              "price": 7.27,
              "size": 1000.0,
              "notional": 7270.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "16713",
              "timestamp": "2026-04-21T07:59:34.349450",
              "price": 7.27,
              "size": 2000.0,
              "notional": 14540.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 257479,
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
      "n_trades": 1252228,
      "n_runs": 154428,
      "n_trade_days": 126,
      "first_trade_date": "2025-10-03",
      "last_trade_date": "2026-04-21",
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
        "retail_pct": 0.01945252781442357,
        "mixed_pct": 0.0,
        "instit_pct": 0.6649356187531344,
        "ambiguous_pct": 0.2568773418259295,
        "unobservable_pct": 0.05873451160651255,
        "unclear_pct": 0.315611853432442,
        "retail_qty_pct": 0.003486901897272031,
        "mixed_qty_pct": 0.0,
        "instit_qty_pct": 0.8097641142673493,
        "ambiguous_qty_pct": 0.15016115327366775,
        "unobservable_qty_pct": 0.036587830561710916,
        "unclear_qty_pct": 0.18674898383537866,
        "retail_notional_pct": 0.0036163188054879657,
        "mixed_notional_pct": 0.0,
        "instit_notional_pct": 0.8070830380189569,
        "ambiguous_notional_pct": 0.15294657994335642,
        "unobservable_notional_pct": 0.0363540632321987,
        "unclear_notional_pct": 0.18930064317555512
      },
      "run_composition": {
        "retail_pct": 0.07062190794415521,
        "mixed_pct": 0.0,
        "instit_pct": 0.18283601419431708,
        "ambiguous_pct": 0.4066879063382288,
        "unobservable_pct": 0.3398541715232989,
        "unclear_pct": 0.7465420778615277
      },
      "trade_size": {
        "avg": 114909.87785165322,
        "median": 31600.0
      },
      "run_size": {
        "avg": 931782.8795452896,
        "median": 116221.25,
        "avg_length": 8.108814463698293
      },
      "confidence": {
        "high": 0.014971378247468076,
        "medium": 0.2021718859274225,
        "low": 0.036314657963581735,
        "na": 0.7465420778615277
      },
      "confidence_counts": {
        "high": 2312,
        "medium": 31221,
        "low": 5608,
        "na": 115287
      },
      "trade_confidence": {
        "high": 0.047587180609282013,
        "medium": 0.591706142970769,
        "low": 0.04509482298750707,
        "na": 0.315611853432442
      },
      "trade_confidence_counts": {
        "high": 59590,
        "medium": 740951,
        "low": 56469,
        "na": 395218
      },
      "counts": {
        "trades": {
          "retail": 24359,
          "mixed": 0,
          "institutional": 832651,
          "ambiguous": 321669,
          "unobservable": 73549,
          "unclear": 395218
        },
        "runs": {
          "retail": 10906,
          "mixed": 0,
          "institutional": 28235,
          "ambiguous": 62804,
          "unobservable": 52483,
          "unclear": 115287
        }
      },
      "observability": {
        "avg_feature_coverage": 0.6561970627088353,
        "observable_run_pct": 0.6601458284767011,
        "ambiguous_run_pct": 0.4066879063382288,
        "unobservable_run_pct": 0.3398541715232989
      },
      "dominant_bucket": "AMBIGUOUS",
      "dominant_label": "Mixed, mostly unclassified",
      "dominant_share": 0.4066879063382288,
      "dominance_gap": 0.06683373481492993,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2025-11",
            "n_trades": 203821,
            "n_runs": 25225,
            "retail_pct": 0.018943092223078092,
            "mixed_pct": 0.0,
            "instit_pct": 0.6703234701036694,
            "ambiguous_pct": 0.24910583305940015,
            "unobservable_pct": 0.06162760461385235,
            "unclear_pct": 0.3107334376732525,
            "avg_trade_size": 117248.79964400134,
            "avg_run_notional": 947384.2454802776,
            "retail_qty_pct": 0.0031136280135045094,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.8011923737787672,
            "ambiguous_qty_pct": 0.14935997621739153,
            "unobservable_qty_pct": 0.0463340219903368,
            "unclear_qty_pct": 0.19569399820772831,
            "retail_notional_pct": 0.003115225833235325,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.8009641180607799,
            "ambiguous_notional_pct": 0.14944348635810156,
            "unobservable_notional_pct": 0.046477169747883185,
            "unclear_notional_pct": 0.19592065610598475,
            "run_retail_pct": 0.06497522299306244,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.19203171456888007,
            "run_ambiguous_pct": 0.4051139742319128,
            "run_unobservable_pct": 0.3378790882061447,
            "run_unclear_pct": 0.7429930624380575,
            "avg_feature_coverage": 0.6493181367690782,
            "high_confidence_pct": 0.006422200198216056,
            "medium_confidence_pct": 0.20174430128840437,
            "low_confidence_pct": 0.048840436075322104,
            "na_confidence_pct": 0.7429930624380575,
            "total_quantity": null
          },
          {
            "month": "2025-12",
            "n_trades": 120817,
            "n_runs": 17968,
            "retail_pct": 0.013690126389498167,
            "mixed_pct": 0.0,
            "instit_pct": 0.6537738894360893,
            "ambiguous_pct": 0.25092495261428444,
            "unobservable_pct": 0.08161103156012812,
            "unclear_pct": 0.33253598417441255,
            "avg_trade_size": 125578.68373457377,
            "avg_run_notional": 844392.2435863758,
            "retail_qty_pct": 0.0018640940527910699,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.8003887367942185,
            "ambiguous_qty_pct": 0.14066785620379751,
            "unobservable_qty_pct": 0.05707931294919284,
            "unclear_qty_pct": 0.19774716915299034,
            "retail_notional_pct": 0.0018554785197185237,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.8001300892749925,
            "ambiguous_notional_pct": 0.14097029382244392,
            "unobservable_notional_pct": 0.05704413838284513,
            "unclear_notional_pct": 0.19801443220528905,
            "run_retail_pct": 0.041685218165627785,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.19122885129118433,
            "run_ambiguous_pct": 0.39180765805877116,
            "run_unobservable_pct": 0.37527827248441675,
            "run_unclear_pct": 0.7670859305431879,
            "avg_feature_coverage": 0.6437082591273374,
            "high_confidence_pct": 0.006344612644701692,
            "medium_confidence_pct": 0.20848174532502226,
            "low_confidence_pct": 0.018087711487088157,
            "na_confidence_pct": 0.7670859305431879,
            "total_quantity": null
          },
          {
            "month": "2026-01",
            "n_trades": 222057,
            "n_runs": 26173,
            "retail_pct": 0.014924096065424643,
            "mixed_pct": 0.0,
            "instit_pct": 0.6966094291105437,
            "ambiguous_pct": 0.2318954142404878,
            "unobservable_pct": 0.056571060583543865,
            "unclear_pct": 0.28846647482403165,
            "avg_trade_size": 109500.34426340983,
            "avg_run_notional": 929022.9605356664,
            "retail_qty_pct": 0.002488536928484963,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.8311088606009646,
            "ambiguous_qty_pct": 0.1345573696290754,
            "unobservable_qty_pct": 0.03184523284147509,
            "unclear_qty_pct": 0.1664026024705505,
            "retail_notional_pct": 0.0024934256292430826,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.8311668772816335,
            "ambiguous_notional_pct": 0.1345361497662296,
            "unobservable_notional_pct": 0.031803547322893796,
            "unclear_notional_pct": 0.16633969708912338,
            "run_retail_pct": 0.05582088411722003,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.19294693004241012,
            "run_ambiguous_pct": 0.40786306499063923,
            "run_unobservable_pct": 0.34336912084973065,
            "run_unclear_pct": 0.7512321858403699,
            "avg_feature_coverage": 0.6484946318725404,
            "high_confidence_pct": 0.005807511557712146,
            "medium_confidence_pct": 0.20421808734191724,
            "low_confidence_pct": 0.03874221526000077,
            "na_confidence_pct": 0.7512321858403699,
            "total_quantity": null
          },
          {
            "month": "2026-02",
            "n_trades": 122439,
            "n_runs": 19499,
            "retail_pct": 0.0064113558588358285,
            "mixed_pct": 0.0,
            "instit_pct": 0.6950481464239335,
            "ambiguous_pct": 0.2089611970042225,
            "unobservable_pct": 0.08957930071300811,
            "unclear_pct": 0.2985404977172306,
            "avg_trade_size": 105868.3043825905,
            "avg_run_notional": 664773.0304272013,
            "retail_qty_pct": 0.0009387779966832166,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.8602471796447076,
            "ambiguous_qty_pct": 0.09284949261272722,
            "unobservable_qty_pct": 0.04596454974588196,
            "unclear_qty_pct": 0.13881404235860917,
            "retail_notional_pct": 0.0009416041476861431,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.8602184060587846,
            "ambiguous_notional_pct": 0.09283420057531015,
            "unobservable_notional_pct": 0.04600578921821906,
            "unclear_notional_pct": 0.1388399897935292,
            "run_retail_pct": 0.017949638442997077,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.198112723729422,
            "run_ambiguous_pct": 0.3594030463100672,
            "run_unobservable_pct": 0.4245345915175137,
            "run_unclear_pct": 0.7839376378275809,
            "avg_feature_coverage": 0.6363198112723729,
            "high_confidence_pct": 0.023898661469818967,
            "medium_confidence_pct": 0.18354787424996152,
            "low_confidence_pct": 0.008615826452638597,
            "na_confidence_pct": 0.7839376378275809,
            "total_quantity": null
          },
          {
            "month": "2026-03",
            "n_trades": 255596,
            "n_runs": 25821,
            "retail_pct": 0.014624642013177045,
            "mixed_pct": 0.0,
            "instit_pct": 0.7331413637146121,
            "ambiguous_pct": 0.20652905366281163,
            "unobservable_pct": 0.04570494060939921,
            "unclear_pct": 0.2522339942722108,
            "avg_trade_size": 121707.72712992379,
            "avg_run_notional": 1204756.1373881723,
            "retail_qty_pct": 0.002493402713357541,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.8580752563053244,
            "ambiguous_qty_pct": 0.11478467432799144,
            "unobservable_qty_pct": 0.0246466666533266,
            "unclear_qty_pct": 0.13943134098131804,
            "retail_notional_pct": 0.0024942122067907265,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.8576605628580546,
            "ambiguous_notional_pct": 0.1151800599548919,
            "unobservable_notional_pct": 0.02466516498026282,
            "unclear_notional_pct": 0.13984522493515472,
            "run_retail_pct": 0.06200379536036559,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.20219975988536462,
            "run_ambiguous_pct": 0.4035862282638163,
            "run_unobservable_pct": 0.3322102164904535,
            "run_unclear_pct": 0.7357964447542698,
            "avg_feature_coverage": 0.650168467526432,
            "high_confidence_pct": 0.00395027303357732,
            "medium_confidence_pct": 0.2163355408388521,
            "low_confidence_pct": 0.0439177413733008,
            "na_confidence_pct": 0.7357964447542698,
            "total_quantity": null
          },
          {
            "month": "2026-04",
            "n_trades": 138788,
            "n_runs": 15988,
            "retail_pct": 0.05985387785687524,
            "mixed_pct": 0.0,
            "instit_pct": 0.4043289045162406,
            "ambiguous_pct": 0.5066864570423956,
            "unobservable_pct": 0.029130760584488574,
            "unclear_pct": 0.5358172176268842,
            "avg_trade_size": 106704.75633296826,
            "avg_run_notional": 926278.4414523392,
            "retail_qty_pct": 0.014613276117576892,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.5789568217066919,
            "ambiguous_qty_pct": 0.3868748686362705,
            "unobservable_qty_pct": 0.019555033539460618,
            "unclear_qty_pct": 0.40642990217573116,
            "retail_notional_pct": 0.014645421783300671,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.5780460886299791,
            "ambiguous_notional_pct": 0.3876063421177324,
            "unobservable_notional_pct": 0.019702147468987755,
            "unclear_notional_pct": 0.40730848958672017,
            "run_retail_pct": 0.24587190392794597,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.07211658744058043,
            "run_ambiguous_pct": 0.5014385789342006,
            "run_unobservable_pct": 0.18057292969727295,
            "run_unclear_pct": 0.6820115086314735,
            "avg_feature_coverage": 0.7422191643732798,
            "high_confidence_pct": 0.06892669502126594,
            "medium_confidence_pct": 0.19264448336252188,
            "low_confidence_pct": 0.05641731298473855,
            "na_confidence_pct": 0.6820115086314736,
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
          "trade_id": "16742",
          "timestamp": "2026-04-21T08:01:00.041034",
          "price": 7.2,
          "size": 226.0,
          "notional": 1627.2,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 257480,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "16741",
          "timestamp": "2026-04-21T07:59:57.665624",
          "price": 7.26,
          "size": 1000.0,
          "notional": 7260.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 257479,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "16740",
          "timestamp": "2026-04-21T07:59:54.548585",
          "price": 7.26,
          "size": 2000.0,
          "notional": 14520.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 257479,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "16739",
          "timestamp": "2026-04-21T07:59:52.157998",
          "price": 7.26,
          "size": 1000.0,
          "notional": 7260.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 257479,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "16738",
          "timestamp": "2026-04-21T07:59:52.157273",
          "price": 7.26,
          "size": 1000.0,
          "notional": 7260.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 257479,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "16737",
          "timestamp": "2026-04-21T07:59:51.048760",
          "price": 7.26,
          "size": 1000.0,
          "notional": 7260.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 257479,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "16736",
          "timestamp": "2026-04-21T07:59:50.063649",
          "price": 7.27,
          "size": 1000.0,
          "notional": 7270.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 257479,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "16735",
          "timestamp": "2026-04-21T07:59:50.045074",
          "price": 7.27,
          "size": 3000.0,
          "notional": 21810.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 257479,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "16734",
          "timestamp": "2026-04-21T07:59:49.672221",
          "price": 7.27,
          "size": 7000.0,
          "notional": 50890.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 257479,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "16733",
          "timestamp": "2026-04-21T07:59:49.672221",
          "price": 7.27,
          "size": 2000.0,
          "notional": 14540.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 257479,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "16732",
          "timestamp": "2026-04-21T07:59:49.672221",
          "price": 7.27,
          "size": 3000.0,
          "notional": 21810.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 257479,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "16731",
          "timestamp": "2026-04-21T07:59:49.672221",
          "price": 7.27,
          "size": 3000.0,
          "notional": 21810.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 257479,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "16730",
          "timestamp": "2026-04-21T07:59:49.672221",
          "price": 7.27,
          "size": 12000.0,
          "notional": 87240.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 257479,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "16729",
          "timestamp": "2026-04-21T07:59:49.492469",
          "price": 7.27,
          "size": 1000.0,
          "notional": 7270.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 257479,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "16728",
          "timestamp": "2026-04-21T07:59:49.340065",
          "price": 7.26,
          "size": 1000.0,
          "notional": 7260.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 257479,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "16727",
          "timestamp": "2026-04-21T07:59:49.339446",
          "price": 7.27,
          "size": 4000.0,
          "notional": 29080.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 257479,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "16726",
          "timestamp": "2026-04-21T07:59:45.312526",
          "price": 7.26,
          "size": 4000.0,
          "notional": 29040.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 257479,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "16725",
          "timestamp": "2026-04-21T07:59:45.176746",
          "price": 7.26,
          "size": 4000.0,
          "notional": 29040.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 257479,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "16724",
          "timestamp": "2026-04-21T07:59:44.496028",
          "price": 7.26,
          "size": 22000.0,
          "notional": 159720.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 257479,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "16723",
          "timestamp": "2026-04-21T07:59:40.716013",
          "price": 7.27,
          "size": 11000.0,
          "notional": 79970.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 257479,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "16722",
          "timestamp": "2026-04-21T07:59:40.176447",
          "price": 7.26,
          "size": 2000.0,
          "notional": 14520.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 257479,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "16721",
          "timestamp": "2026-04-21T07:59:39.007010",
          "price": 7.26,
          "size": 2000.0,
          "notional": 14520.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 257479,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "16720",
          "timestamp": "2026-04-21T07:59:37.400526",
          "price": 7.27,
          "size": 2000.0,
          "notional": 14540.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 257479,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "16719",
          "timestamp": "2026-04-21T07:59:35.666119",
          "price": 7.27,
          "size": 7000.0,
          "notional": 50890.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 257479,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "16718",
          "timestamp": "2026-04-21T07:59:35.666119",
          "price": 7.27,
          "size": 1000.0,
          "notional": 7270.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 257479,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "16717",
          "timestamp": "2026-04-21T07:59:35.666119",
          "price": 7.27,
          "size": 40000.0,
          "notional": 290800.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 257479,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "16716",
          "timestamp": "2026-04-21T07:59:35.452220",
          "price": 7.26,
          "size": 6000.0,
          "notional": 43560.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 257479,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "16715",
          "timestamp": "2026-04-21T07:59:35.436524",
          "price": 7.26,
          "size": 10000.0,
          "notional": 72600.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 257479,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "16714",
          "timestamp": "2026-04-21T07:59:34.453365",
          "price": 7.27,
          "size": 1000.0,
          "notional": 7270.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 257479,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "16713",
          "timestamp": "2026-04-21T07:59:34.349450",
          "price": 7.27,
          "size": 2000.0,
          "notional": 14540.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 257479,
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
      "total_trades": 1252227,
      "price_moving_trades": 256684,
      "pct_price_moving": 20.498200406156393,
      "all_movers": {
        "count": 256684,
        "avg_size": 79032.17872154088,
        "median_size": 25880.0,
        "retail_count": 9836,
        "mixed_count": 0,
        "institutional_count": 134400,
        "ambiguous_count": 91090,
        "unobservable_count": 21358,
        "retail_pct": 3.8319490112356047,
        "mixed_pct": 0.0,
        "instit_pct": 52.36010035685902,
        "unclear_pct": 43.80795063190538
      },
      "positive_movers": {
        "count": 128368,
        "avg_size": 84656.0682988751,
        "median_size": 27950.0,
        "retail_count": 4395,
        "mixed_count": 0,
        "institutional_count": 67590,
        "ambiguous_count": 45588,
        "unobservable_count": 10795,
        "retail_pct": 3.423750467406207,
        "mixed_pct": 0.0,
        "instit_pct": 52.65330923594666,
        "unclear_pct": 43.92294029664714
      },
      "negative_movers": {
        "count": 128316,
        "avg_size": 73406.01006554131,
        "median_size": 24920.0,
        "retail_count": 5441,
        "mixed_count": 0,
        "institutional_count": 66810,
        "ambiguous_count": 45502,
        "unobservable_count": 10563,
        "retail_pct": 4.240312977337199,
        "mixed_pct": 0.0,
        "instit_pct": 52.06677265500795,
        "unclear_pct": 43.69291436765485
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
          "opening": 0.009564688903665207,
          "continuous": 0.8980559170058882,
          "closing": 0.07372243567740977,
          "auctions": 0.08328712458107498,
          "other": 0.018656958413036773
        },
        "1M": {
          "opening": 0.010416093492675934,
          "continuous": 0.8493338912354097,
          "closing": 0.11563984052127597,
          "auctions": 0.1260559340139519,
          "other": 0.02461017475063843
        },
        "3M": {
          "opening": 0.008983495377583924,
          "continuous": 0.8486012225499969,
          "closing": 0.11723960890845558,
          "auctions": 0.1262231042860395,
          "other": 0.025175673163963606
        },
        "6M": {
          "opening": 0.008181814899509558,
          "continuous": 0.8600606800175652,
          "closing": 0.11040460891164529,
          "auctions": 0.11858642381115485,
          "other": 0.021352896171280052
        }
      },
      "hhi": {
        "1D": 0.09453028708326977,
        "1M": 0.1108201388523959,
        "3M": 0.10972095140424665,
        "6M": 0.11223924617928975
      },
      "profile_buckets": [
        {
          "time": "09:00",
          "avg_share": 0.0085
        },
        {
          "time": "09:30",
          "avg_share": 0.139
        },
        {
          "time": "10:00",
          "avg_share": 0.0797
        },
        {
          "time": "10:30",
          "avg_share": 0.0693
        },
        {
          "time": "11:00",
          "avg_share": 0.0577
        },
        {
          "time": "11:30",
          "avg_share": 0.0338
        },
        {
          "time": "12:00",
          "avg_share": 0.1468
        },
        {
          "time": "13:00",
          "avg_share": 0.0615
        },
        {
          "time": "13:30",
          "avg_share": 0.0572
        },
        {
          "time": "14:00",
          "avg_share": 0.0582
        },
        {
          "time": "14:30",
          "avg_share": 0.0517
        },
        {
          "time": "15:00",
          "avg_share": 0.0554
        },
        {
          "time": "15:30",
          "avg_share": 0.0899
        },
        {
          "time": "16:00",
          "avg_share": 0.0912
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "1398",
          "auctions_pct": 11.708693174769571,
          "hhi": 0.1101234803991701,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400",
            "you": true
          }
        },
        {
          "ticker": "3988",
          "auctions_pct": 12.581914950437268,
          "hhi": 0.11441397539930223,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "939",
          "auctions_pct": 14.71646909270993,
          "hhi": 0.11018325608991392,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "5",
          "auctions_pct": 8.961060140755604,
          "hhi": 0.11576590589180706,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "3968",
          "auctions_pct": 10.700820833388756,
          "hhi": 0.11245790163659618,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "1288",
          "auctions_pct": 10.1956347723606,
          "hhi": 0.11646088191488711,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "2888",
          "auctions_pct": 5.242343508125479,
          "hhi": 0.12015138834169224,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "998",
          "auctions_pct": 10.88546929664069,
          "hhi": 0.11804128750174858,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "1658",
          "auctions_pct": 9.71437880075683,
          "hhi": 0.13219970040241372,
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
