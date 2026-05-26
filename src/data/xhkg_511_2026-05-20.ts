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
      "ticker": "511",
      "name": "TVB",
      "marketCap": 1251457720.48,
      "sector": "Broadcasting",
      "industry": "Consumer Discretionary - Media & Entertainment"
    },
    {
      "ticker": "2008",
      "name": "PHOENIX TV",
      "marketCap": 749048925.0,
      "sector": "Broadcasting",
      "industry": "Consumer Discretionary - Media & Entertainment"
    },
    {
      "ticker": "3700",
      "name": "INKEVERSE",
      "marketCap": 2053688520.0,
      "sector": "Broadcasting",
      "industry": "Consumer Discretionary - Media & Entertainment"
    },
    {
      "ticker": "2306",
      "name": "YH ENT",
      "marketCap": 1569756510.0,
      "sector": "Movies & Entertainment",
      "industry": "Consumer Discretionary - Media & Entertainment"
    },
    {
      "ticker": "2422",
      "name": "REGO INTERACT",
      "marketCap": 1975400000.0,
      "sector": "Advertising & Marketing",
      "industry": "Consumer Discretionary - Media & Entertainment"
    },
    {
      "ticker": "1970",
      "name": "IMAX CHINA",
      "marketCap": 2518564307.61,
      "sector": "Movies & Entertainment",
      "industry": "Consumer Discretionary - Media & Entertainment"
    },
    {
      "ticker": "752",
      "name": "PICO FAR EAST",
      "marketCap": 2903190016.14,
      "sector": "Advertising & Marketing",
      "industry": "Consumer Discretionary - Media & Entertainment"
    },
    {
      "ticker": "1450",
      "name": "BE FRIENDS HLDG",
      "marketCap": 1348467036.48,
      "sector": "Interactive Media & Services",
      "industry": "Consumer Discretionary - Media & Entertainment"
    },
    {
      "ticker": "2550",
      "name": "EASOU TECH",
      "marketCap": 940272827.52,
      "sector": "Interactive Media & Services",
      "industry": "Consumer Discretionary - Media & Entertainment"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XHKG",
    "currency": "HKD",
    "ticker": "511",
    "company": "TVB",
    "asof_date": "2026-05-20",
    "industry": "Consumer Discretionary - Media & Entertainment",
    "sector": "Broadcasting",
    "market_cap_display": "1.3B",
    "market_cap_category": "mid",
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
          "score_pca": 60.89494163424124,
          "score_pca_percentile": 60.89494163424124,
          "rank_pca": 1006,
          "total": 2570,
          "adv_notional_sgd": 687152.0,
          "adv_volume_shares": 256400.0,
          "free_float_shares": 350144309.0,
          "turnover_ratio": 0.0007322695054855225,
          "votes": 240.0,
          "trades": 240.0,
          "spread_pct": 0.0063026157992851885,
          "spread_ticks": 1.6840101522842639,
          "amihud": 5.4099706017868084e-09,
          "volatility": 0.07141316959598021
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5502813418519003,
          "loadings": {
            "log_adv": 0.5350611583441586,
            "log_trades": 0.49691547907135625,
            "log_turnover": 0.5014634894702156,
            "neg_spread": 0.39964956938798574,
            "neg_amihud": 0.05312299889769208,
            "neg_vol": -0.2297326726766546
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
          "peer_median_adv": 1627845.0,
          "peer_median_score_pca": 60.62256809338521,
          "peer_median_trades": 72.5,
          "peer_median_volatility": 0.3701469998927306,
          "peer_median_spread_pct": 0.02267716703302333,
          "peer_median_spread_ticks": 3.1476393819347983,
          "peer_median_amihud": 8.384285420621438e-09,
          "peer_median_turnover_ratio": 0.0016053297459202754,
          "target_vs_peer": {
            "score_pca_delta": 0.27,
            "adv_delta_pct": -57.8,
            "trades_delta_pct": 231.03,
            "volatility_delta_pct": 80.71,
            "spread_pct_delta_pct": 72.21,
            "spread_ticks_delta_pct": -46.5,
            "amihud_delta_pct": 35.47,
            "turnover_ratio_delta_pct": -54.39
          }
        },
        "peer_liquidity": [
          {
            "ticker": "511",
            "score_pca": 60.89494163424124,
            "rank_pca": 1006,
            "adv": 687152.0,
            "trades": 240.0,
            "volatility": 0.07141316959598021,
            "spread_pct": 0.0063026157992851885,
            "spread_ticks": 1.6840101522842639,
            "amihud": 5.4099706017868084e-09,
            "turnover_ratio": 0.0007322695054855225,
            "is_target": true
          },
          {
            "ticker": "2008",
            "score_pca": 39.33852140077821,
            "rank_pca": 1560,
            "adv": 112500.0,
            "trades": 19.0,
            "volatility": 0.12627487339413954,
            "spread_pct": 0.04106189366022415,
            "spread_ticks": 6.204545454545454,
            "amihud": 1.1695906432748574e-07,
            "turnover_ratio": 0.0005246409845018185,
            "is_target": false
          },
          {
            "ticker": "3700",
            "score_pca": 85.71984435797665,
            "rank_pca": 368,
            "adv": 11710880.0,
            "trades": 634.0,
            "volatility": 1.3841091782133539,
            "spread_pct": 0.013553044173664174,
            "spread_ticks": 1.426356589147287,
            "amihud": 6.037724808645526e-09,
            "turnover_ratio": 0.010637560370658512,
            "is_target": false
          },
          {
            "ticker": "2306",
            "score_pca": 60.311284046692606,
            "rank_pca": 1021,
            "adv": 1854090.0,
            "trades": 55.0,
            "volatility": 0.20285049443063372,
            "spread_pct": 0.012073221399418311,
            "spread_ticks": 2.287037037037037,
            "amihud": 8.699163610215525e-09,
            "turnover_ratio": 0.002937741442817357,
            "is_target": false
          },
          {
            "ticker": "2422",
            "score_pca": 45.05836575875487,
            "rank_pca": 1413,
            "adv": 547400.0,
            "trades": 29.0,
            "volatility": 0.4057469172755718,
            "spread_pct": 0.061445097667362066,
            "spread_ticks": 7.280898876404494,
            "amihud": 4.4921746317914244e-08,
            "turnover_ratio": 0.0005330342161615975,
            "is_target": false
          },
          {
            "ticker": "1970",
            "score_pca": 38.404669260700395,
            "rank_pca": 1584,
            "adv": 167466.0,
            "trades": 12.0,
            "volatility": 0.07750948029932504,
            "spread_pct": 0.03007254341613542,
            "spread_ticks": 22.42622950819672,
            "amihud": 8.069407231027351e-09,
            "turnover_ratio": 0.0002338948372175245,
            "is_target": false
          },
          {
            "ticker": "752",
            "score_pca": 65.05836575875486,
            "rank_pca": 899,
            "adv": 1951828.83,
            "trades": 141.0,
            "volatility": 0.3345470825098894,
            "spread_pct": 0.006704855189703683,
            "spread_ticks": 1.5384615384615385,
            "amihud": 1.0947436086145572e-08,
            "turnover_ratio": 0.0017292150336929706,
            "is_target": false
          },
          {
            "ticker": "1450",
            "score_pca": 60.93385214007782,
            "rank_pca": 1005,
            "adv": 1401600.0,
            "trades": 90.0,
            "volatility": 0.6152853204781146,
            "spread_pct": 0.033508173346234106,
            "spread_ticks": 3.148325358851675,
            "amihud": 7.510213890891636e-09,
            "turnover_ratio": 0.0014814444581475801,
            "is_target": false
          },
          {
            "ticker": "2550",
            "score_pca": 64.39688715953308,
            "rank_pca": 916,
            "adv": 2065440.0,
            "trades": 100.0,
            "volatility": 0.4155743725972748,
            "spread_pct": 0.015281790649911238,
            "spread_ticks": 3.1469534050179213,
            "amihud": 7.085243987461959e-09,
            "turnover_ratio": 0.0028766069456413407,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Broadcasting",
          "sector_count": 5,
          "market_count": 2570,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4607468868158824,
              "median": 0.3126054996063373,
              "min": 0.0,
              "max": 5.197984003613531,
              "p5": 0.0,
              "p95": 1.4931458902138883,
              "count": 2570
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 70770066.38516714,
              "median": 246300.0,
              "min": 0.0,
              "max": 19427078128.050003,
              "p5": 0.0,
              "p95": 281617146.57999945,
              "count": 2570
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0479597041881861,
              "median": 0.02788735717654246,
              "min": 0.0004649470857657017,
              "max": 0.7662226887999475,
              "p5": 0.0013949511880232718,
              "p95": 0.15842293255545944,
              "count": 2570
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006637080591520298,
              "median": 0.0010699107756735504,
              "min": 0.0,
              "max": 1.0615469704283622,
              "p5": 0.0,
              "p95": 0.02327147986814193,
              "count": 2554
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.352439084355239e-06,
              "median": 6.348045563731802e-09,
              "min": 0.0,
              "max": 0.0016339869281045726,
              "p5": 0.0,
              "p95": 5.267441813848235e-06,
              "count": 2199
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1271.7501945525291,
              "median": 24.0,
              "min": 0.0,
              "max": 149367.0,
              "p5": 0.0,
              "p95": 6804.999999999989,
              "count": 2570
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6841732457990174,
              "median": 0.12627487339413954,
              "min": 0.0,
              "max": 1.8390690077916134,
              "p5": 0.014282633919196042,
              "p95": 1.7480770418759615,
              "count": 5
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2512725.3745999997,
              "median": 112500.0,
              "min": 0.0,
              "max": 11710880.0,
              "p5": 10618.974600000001,
              "p95": 9506134.399999999,
              "count": 5
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.036267395936347716,
              "median": 0.03708609271523182,
              "min": 0.0063026157992851885,
              "max": 0.08333333333333323,
              "p5": 0.0077527014741609855,
              "p95": 0.0748790453987114,
              "count": 5
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002437922177069052,
              "median": 0.0005246409845018185,
              "min": 0.0,
              "max": 0.010637560370658512,
              "p5": 5.902800493988173e-05,
              "p95": 0.008656502197623912,
              "count": 5
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.132836305634027e-07,
              "median": 6.149839456806564e-08,
              "min": 5.4099706017868084e-09,
              "max": 3.2472776251569267e-07,
              "p5": 5.504133732815616e-09,
              "p95": 2.9356245778746155e-07,
              "count": 4
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 182.0,
              "median": 19.0,
              "min": 0.0,
              "max": 634.0,
              "p5": 3.4000000000000004,
              "p95": 555.1999999999999,
              "count": 5
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 2476400.60375,
              "median": 1627845.0,
              "min": 112500.0,
              "max": 11710880.0,
              "p5": 131738.1,
              "p95": 8334975.999999994,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 135.0,
              "median": 72.5,
              "min": 12.0,
              "max": 634.0,
              "p5": 14.45,
              "p95": 461.4499999999997,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.44523721489978785,
              "median": 0.3701469998927306,
              "min": 0.07750948029932504,
              "max": 1.3841091782133539,
              "p5": 0.09457736788251012,
              "p95": 1.1150208280060196,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.02671257743783164,
              "median": 0.02267716703302333,
              "min": 0.006704855189703683,
              "max": 0.061445097667362066,
              "p5": 0.008583783363103803,
              "p95": 0.05431097626486378,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 5.932350970957766,
              "median": 3.1476393819347983,
              "min": 1.426356589147287,
              "max": 22.42622950819672,
              "p5": 1.465593321407275,
              "p95": 17.125363787069432,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.6278750032473446e-08,
              "median": 8.384285420621438e-09,
              "min": 6.037724808645526e-09,
              "max": 1.1695906432748574e-07,
              "p5": 6.404356521231278e-09,
              "p95": 9.174600302413568e-08,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0026192672861048375,
              "median": 0.0016053297459202754,
              "min": 0.0002338948372175245,
              "max": 0.010637560370658512,
              "p5": 0.0003356559887670274,
              "p95": 0.007942623745914104,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": -0.0037174721189590088,
            "market": -0.003547814367408031,
            "sector": -0.0037174721189590088,
            "peers": 0.005938833570412472,
            "vs_market": -0.00016965775155097784,
            "vs_sector": 0.0,
            "vs_peers": -0.00965630568937148
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 70.07782101167315,
          "score_pca_percentile": 70.07782101167315,
          "rank_pca": 770,
          "total": 2570,
          "adv_notional_sgd": 1045373.9999999999,
          "adv_volume_shares": 375200.0,
          "free_float_shares": 350144309.0,
          "turnover_ratio": 0.001071558184314228,
          "votes": 264.0,
          "trades": 264.0,
          "spread_pct": 0.004980899855794911,
          "spread_ticks": 1.3870246085011186,
          "amihud": 5.594577735258841e-09,
          "volatility": 0.13451744859246134
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5688709427000682,
          "loadings": {
            "log_adv": 0.5229845807340547,
            "log_trades": 0.4802835549715877,
            "log_turnover": 0.47170379200532275,
            "neg_spread": 0.45545356808837106,
            "neg_amihud": 0.2398202087148972,
            "neg_vol": 0.09142583088817526
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
          "peer_median_adv": 568680.0,
          "peer_median_score_pca": 57.49027237354086,
          "peer_median_trades": 44.5,
          "peer_median_volatility": 0.3430609066286311,
          "peer_median_spread_pct": 0.020675372617258193,
          "peer_median_spread_ticks": 3.7058786715620826,
          "peer_median_amihud": 3.001553737254457e-08,
          "peer_median_turnover_ratio": 0.0006885419327937558,
          "target_vs_peer": {
            "score_pca_delta": 12.59,
            "adv_delta_pct": 83.8,
            "trades_delta_pct": 493.26,
            "volatility_delta_pct": 60.79,
            "spread_pct_delta_pct": 75.91,
            "spread_ticks_delta_pct": -62.57,
            "amihud_delta_pct": 81.36,
            "turnover_ratio_delta_pct": 55.63
          }
        },
        "peer_liquidity": [
          {
            "ticker": "511",
            "score_pca": 70.07782101167315,
            "rank_pca": 770,
            "adv": 1045373.9999999999,
            "trades": 264.0,
            "volatility": 0.13451744859246134,
            "spread_pct": 0.004980899855794911,
            "spread_ticks": 1.3870246085011186,
            "amihud": 5.594577735258841e-09,
            "turnover_ratio": 0.001071558184314228,
            "is_target": true
          },
          {
            "ticker": "2008",
            "score_pca": 41.01167315175097,
            "rank_pca": 1517,
            "adv": 68640.0,
            "trades": 8.0,
            "volatility": 0.3944187731056623,
            "spread_pct": 0.028233938346297918,
            "spread_ticks": 4.9,
            "amihud": 1.7654926689682524e-07,
            "turnover_ratio": 0.00027281331194094563,
            "is_target": false
          },
          {
            "ticker": "3700",
            "score_pca": 67.04280155642023,
            "rank_pca": 848,
            "adv": 2225230.0,
            "trades": 185.0,
            "volatility": 1.1715654736140835,
            "spread_pct": 0.018465502433438318,
            "spread_ticks": 1.3613682092555333,
            "amihud": 1.557809532859654e-08,
            "turnover_ratio": 0.002838480084422637,
            "is_target": false
          },
          {
            "ticker": "2306",
            "score_pca": 59.766536964980546,
            "rank_pca": 1035,
            "adv": 754560.0,
            "trades": 36.0,
            "volatility": 0.29170304015159987,
            "spread_pct": 0.022885242801078072,
            "spread_ticks": 4.5233644859813085,
            "amihud": 8.699163610215525e-09,
            "turnover_ratio": 0.0011768933608840176,
            "is_target": false
          },
          {
            "ticker": "2422",
            "score_pca": 41.20622568093385,
            "rank_pca": 1512,
            "adv": 382800.00000000006,
            "trades": 18.0,
            "volatility": 1.3111029830963477,
            "spread_pct": 0.05142521304731124,
            "spread_ticks": 6.94,
            "amihud": 5.48988040125426e-08,
            "turnover_ratio": 0.0004032519722265998,
            "is_target": false
          },
          {
            "ticker": "1970",
            "score_pca": 55.21400778210117,
            "rank_pca": 1152,
            "adv": 219328.0,
            "trades": 30.0,
            "volatility": 0.2558677291955249,
            "spread_pct": 0.011932424794322669,
            "spread_ticks": 9.0,
            "amihud": 5.323634381308496e-08,
            "turnover_ratio": 0.00030841000659655887,
            "is_target": false
          },
          {
            "ticker": "752",
            "score_pca": 66.61478599221789,
            "rank_pca": 859,
            "adv": 1171200.0,
            "trades": 102.0,
            "volatility": 0.19198644202677168,
            "spread_pct": 0.005706615655416861,
            "spread_ticks": 1.3941176470588235,
            "amihud": 7.447380782874591e-09,
            "turnover_ratio": 0.0009738318933609118,
            "is_target": false
          },
          {
            "ticker": "1450",
            "score_pca": 52.33463035019456,
            "rank_pca": 1226,
            "adv": 222940.0,
            "trades": 53.0,
            "volatility": 0.8701844601744617,
            "spread_pct": 0.0252920631097194,
            "spread_ticks": 1.8902439024390243,
            "amihud": 4.445297941649259e-08,
            "turnover_ratio": 0.000318612027300233,
            "is_target": false
          },
          {
            "ticker": "2550",
            "score_pca": 67.54863813229572,
            "rank_pca": 835,
            "adv": 1767500.0,
            "trades": 106.0,
            "volatility": 0.2545620382268031,
            "spread_pct": 0.015055835028006724,
            "spread_ticks": 2.888392857142857,
            "amihud": 7.411396751831803e-09,
            "turnover_ratio": 0.0025593980226325526,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Broadcasting",
          "sector_count": 5,
          "market_count": 2570,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6715294854390154,
              "median": 0.5022840954788743,
              "min": 0.0,
              "max": 12.716269334404805,
              "p5": 0.16720681306353216,
              "p95": 1.6713677432925578,
              "count": 2570
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 61493670.80147341,
              "median": 221406.0,
              "min": 0.0,
              "max": 12214990420.0,
              "p5": 0.0,
              "p95": 255279270.25199974,
              "count": 2570
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04369335707278293,
              "median": 0.02823258916804223,
              "min": 0.0004644488055358157,
              "max": 0.5912209998910793,
              "p5": 0.001428450818730307,
              "p95": 0.13850979779937872,
              "count": 2570
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004308608814045892,
              "median": 0.0009751414348347415,
              "min": 0.0,
              "max": 0.2531131591700725,
              "p5": 0.0,
              "p95": 0.01693603156896355,
              "count": 2554
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.93114515345098e-07,
              "median": 4.676515253409587e-08,
              "min": 0.0,
              "max": 0.00018237082066869308,
              "p5": 2.7452315734562228e-11,
              "p95": 4.1840515782900976e-06,
              "count": 2563
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1103.5110894941633,
              "median": 21.0,
              "min": 0.0,
              "max": 71810.0,
              "p5": 0.0,
              "p95": 6110.549999999999,
              "count": 2570
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7314181739784201,
              "median": 0.7871004800029002,
              "min": 0.13451744859246134,
              "max": 1.1715654736140835,
              "p5": 0.18649771349510152,
              "p95": 1.1711501178066654,
              "count": 5
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 684187.1039999999,
              "median": 78191.52,
              "min": 3500.0000000000005,
              "max": 2225230.0,
              "p5": 16528.0,
              "p95": 1989258.7999999998,
              "count": 5
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03302054189909115,
              "median": 0.028233938346297918,
              "min": 0.004980899855794911,
              "max": 0.07138697062983605,
              "p5": 0.007677820371323593,
              "p95": 0.06551665614988654,
              "count": 5
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0009647890212428799,
              "median": 0.0004504507815704319,
              "min": 0.0001906427439661581,
              "max": 0.002838480084422637,
              "p5": 0.00020707685756111562,
              "p95": 0.0024850957044009548,
              "count": 5
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.8688619907804654e-07,
              "median": 1.7654926689682524e-07,
              "min": 5.594577735258841e-09,
              "max": 1.0083320798042808e-06,
              "p5": 7.591281253926381e-09,
              "p95": 8.523410589684788e-07,
              "count": 5
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 96.8,
              "median": 26.0,
              "min": 1.0,
              "max": 264.0,
              "p5": 2.4000000000000004,
              "p95": 248.2,
              "count": 5
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 851524.75,
              "median": 568680.0,
              "min": 68640.0,
              "max": 2225230.0,
              "p5": 121380.8,
              "p95": 2065024.4999999998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 67.25,
              "median": 44.5,
              "min": 8.0,
              "max": 185.0,
              "p5": 11.5,
              "p95": 157.34999999999997,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5926738674489068,
              "median": 0.3430609066286311,
              "min": 0.19198644202677168,
              "max": 1.3111029830963477,
              "p5": 0.21388790069678268,
              "p95": 1.262264854777555,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0223746044019489,
              "median": 0.020675372617258193,
              "min": 0.005706615655416861,
              "max": 0.05142521304731124,
              "p5": 0.007885648854033894,
              "p95": 0.04330826690195656,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 4.112185887734693,
              "median": 3.7058786715620826,
              "min": 1.3613682092555333,
              "max": 9.0,
              "p5": 1.3728305124866849,
              "p95": 8.279,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.603417882655798e-08,
              "median": 3.001553737254457e-08,
              "min": 7.411396751831803e-09,
              "max": 1.7654926689682524e-07,
              "p5": 7.423991162696779e-09,
              "p95": 1.3397160488732625e-07,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.001106461334920557,
              "median": 0.0006885419327937558,
              "min": 0.00027281331194094563,
              "max": 0.002838480084422637,
              "p5": 0.0002852721550704103,
              "p95": 0.002740801362796107,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": -0.0563380281690139,
            "market": 0.01655570232671688,
            "sector": -0.08511593137657114,
            "peers": -0.05757436061469201,
            "vs_market": -0.07289373049573078,
            "vs_sector": 0.028777903207557243,
            "vs_peers": 0.0012363324456781122
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 70.70038910505836,
          "score_pca_percentile": 70.70038910505836,
          "rank_pca": 754,
          "total": 2570,
          "adv_notional_sgd": 1305264.0,
          "adv_volume_shares": 455500.0,
          "free_float_shares": 350144309.0,
          "turnover_ratio": 0.001300892198707705,
          "votes": 255.0,
          "trades": 255.0,
          "spread_pct": 0.005329714463012412,
          "spread_ticks": 1.5262172284644195,
          "amihud": 6.259044632446093e-09,
          "volatility": 0.2901896490621197
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.6070361177986145,
          "loadings": {
            "log_adv": 0.5056164741043646,
            "log_trades": 0.4604726020166664,
            "log_turnover": 0.4570616655455383,
            "neg_spread": 0.46276733113223634,
            "neg_amihud": 0.3073770239355957,
            "neg_vol": 0.12156216594094399
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
          "peer_median_adv": 827810.0,
          "peer_median_score_pca": 58.94941634241245,
          "peer_median_trades": 43.5,
          "peer_median_volatility": 0.44013473554377713,
          "peer_median_spread_pct": 0.021498488289644648,
          "peer_median_spread_ticks": 3.700383668056082,
          "peer_median_amihud": 2.4324742181425955e-08,
          "peer_median_turnover_ratio": 0.0009199790761206196,
          "target_vs_peer": {
            "score_pca_delta": 11.75,
            "adv_delta_pct": 57.7,
            "trades_delta_pct": 486.21,
            "volatility_delta_pct": 34.07,
            "spread_pct_delta_pct": 75.21,
            "spread_ticks_delta_pct": -58.76,
            "amihud_delta_pct": 74.27,
            "turnover_ratio_delta_pct": 41.4
          }
        },
        "peer_liquidity": [
          {
            "ticker": "511",
            "score_pca": 70.70038910505836,
            "rank_pca": 754,
            "adv": 1305264.0,
            "trades": 255.0,
            "volatility": 0.2901896490621197,
            "spread_pct": 0.005329714463012412,
            "spread_ticks": 1.5262172284644195,
            "amihud": 6.259044632446093e-09,
            "turnover_ratio": 0.001300892198707705,
            "is_target": true
          },
          {
            "ticker": "2008",
            "score_pca": 45.75875486381323,
            "rank_pca": 1395,
            "adv": 104248.0,
            "trades": 11.0,
            "volatility": 0.42344795835321253,
            "spread_pct": 0.030137397380661464,
            "spread_ticks": 5.357142857142857,
            "amihud": 7.927010787455089e-08,
            "turnover_ratio": 0.0004392993843561894,
            "is_target": false
          },
          {
            "ticker": "3700",
            "score_pca": 64.04669260700389,
            "rank_pca": 925,
            "adv": 1191630.0,
            "trades": 125.0,
            "volatility": 0.9691712551118258,
            "spread_pct": 0.021100884913930626,
            "spread_ticks": 1.4725274725274726,
            "amihud": 2.3909884628011525e-08,
            "turnover_ratio": 0.0017215747594802153,
            "is_target": false
          },
          {
            "ticker": "2306",
            "score_pca": 62.33463035019455,
            "rank_pca": 969,
            "adv": 995220.0,
            "trades": 53.0,
            "volatility": 0.4568215127343418,
            "spread_pct": 0.02189609166535867,
            "spread_ticks": 4.528846153846154,
            "amihud": 1.3021158862304831e-08,
            "turnover_ratio": 0.0014284430868744947,
            "is_target": false
          },
          {
            "ticker": "2422",
            "score_pca": 52.49027237354086,
            "rank_pca": 1222,
            "adv": 660400.0,
            "trades": 34.0,
            "volatility": 0.9354166972096479,
            "spread_pct": 0.03624571418920063,
            "spread_ticks": 5.159574468085107,
            "amihud": 2.4739599734840386e-08,
            "turnover_ratio": 0.000588655177848025,
            "is_target": false
          },
          {
            "ticker": "1970",
            "score_pca": 55.56420233463035,
            "rank_pca": 1143,
            "adv": 194055.0,
            "trades": 31.0,
            "volatility": 0.26543984897092476,
            "spread_pct": 0.014557982650075494,
            "spread_ticks": 11.44915254237288,
            "amihud": 4.556439577872546e-08,
            "turnover_ratio": 0.00026390789155074666,
            "is_target": false
          },
          {
            "ticker": "752",
            "score_pca": 69.26070038910505,
            "rank_pca": 791,
            "adv": 1603589.0,
            "trades": 121.0,
            "volatility": 0.23375924815550797,
            "spread_pct": 0.005574809295065346,
            "spread_ticks": 1.4285714285714286,
            "amihud": 5.742231239652026e-09,
            "turnover_ratio": 0.001251302974393214,
            "is_target": false
          },
          {
            "ticker": "1450",
            "score_pca": 52.41245136186771,
            "rank_pca": 1224,
            "adv": 278080.0,
            "trades": 31.0,
            "volatility": 0.6037738484631626,
            "spread_pct": 0.02793017456359105,
            "spread_ticks": 2.210526315789474,
            "amihud": 3.8048236814377366e-08,
            "turnover_ratio": 0.0003571701707314714,
            "is_target": false
          },
          {
            "ticker": "2550",
            "score_pca": 68.63813229571984,
            "rank_pca": 807,
            "adv": 1647000.0,
            "trades": 144.0,
            "volatility": 0.4125879041173958,
            "spread_pct": 0.014681022452661091,
            "spread_ticks": 2.87192118226601,
            "amihud": 7.314818065845089e-09,
            "turnover_ratio": 0.0023595129478598915,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Broadcasting",
          "sector_count": 5,
          "market_count": 2570,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7196460852017147,
              "median": 0.5812854371406497,
              "min": 0.0,
              "max": 16.15738820474862,
              "p5": 0.2214873247536304,
              "p95": 1.6584354579762783,
              "count": 2570
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 59017183.756557405,
              "median": 219744.0,
              "min": 0.0,
              "max": 12307843080.0,
              "p5": 0.0,
              "p95": 234558909.2199998,
              "count": 2570
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04313643407672629,
              "median": 0.02876493065556507,
              "min": 0.0005681922931204329,
              "max": 0.586235634471959,
              "p5": 0.0014449401568078955,
              "p95": 0.1331169221520889,
              "count": 2570
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0038550792784433022,
              "median": 0.0008788385287665518,
              "min": 0.0,
              "max": 0.38612653752209847,
              "p5": 0.0,
              "p95": 0.014650219493673951,
              "count": 2554
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.939396995815482e-07,
              "median": 4.819284733514202e-08,
              "min": 0.0,
              "max": 6.966637265889136e-05,
              "p5": 4.956422516864857e-11,
              "p95": 3.4821132579018315e-06,
              "count": 2570
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1070.2317120622567,
              "median": 20.0,
              "min": 0.0,
              "max": 68317.0,
              "p5": 0.0,
              "p95": 5871.399999999998,
              "count": 2570
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6753314400277277,
              "median": 0.812923965340165,
              "min": 0.2901896490621197,
              "max": 0.9691712551118258,
              "p5": 0.31684131092033824,
              "p95": 0.9515218785437236,
              "count": 5
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 543351.4388,
              "median": 110965.19399999999,
              "min": 4650.0,
              "max": 1305264.0,
              "p5": 24569.600000000002,
              "p95": 1282537.2,
              "count": 5
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03565842104172735,
              "median": 0.030137397380661464,
              "min": 0.005329714463012412,
              "max": 0.08735632183908047,
              "p5": 0.008483948553196055,
              "p95": 0.07675861479365473,
              "count": 5
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0008588158958017542,
              "median": 0.0005959161339466252,
              "min": 0.00023639700251803605,
              "max": 0.0017215747594802153,
              "p5": 0.0002769774788856667,
              "p95": 0.001637438247325713,
              "count": 5
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.536517042307167e-07,
              "median": 7.927010787455089e-08,
              "min": 6.259044632446093e-09,
              "max": 1.5002850541602968e-06,
              "p5": 9.78921263155918e-09,
              "p95": 1.2319349292998928e-06,
              "count": 5
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 83.2,
              "median": 24.0,
              "min": 1.0,
              "max": 255.0,
              "p5": 3.0,
              "p95": 228.99999999999997,
              "count": 5
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 834277.75,
              "median": 827810.0,
              "min": 104248.0,
              "max": 1647000.0,
              "p5": 135680.45,
              "p95": 1631806.15,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 68.75,
              "median": 43.5,
              "min": 11.0,
              "max": 144.0,
              "p5": 18.0,
              "p95": 137.35,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5375522841395024,
              "median": 0.44013473554377713,
              "min": 0.23375924815550797,
              "max": 0.9691712551118258,
              "p5": 0.24484745844090386,
              "p95": 0.9573571598460635,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.02151550963881805,
              "median": 0.021498488289644648,
              "min": 0.005574809295065346,
              "max": 0.03624571418920063,
              "p5": 0.008718919969318898,
              "p95": 0.03410780330621192,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 4.309782802575173,
              "median": 3.700383668056082,
              "min": 1.4285714285714286,
              "max": 11.44915254237288,
              "p5": 1.443956043956044,
              "p95": 9.316949152542369,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.9701304124788447e-08,
              "median": 2.4324742181425955e-08,
              "min": 5.742231239652026e-09,
              "max": 7.927010787455089e-08,
              "p5": 6.292636628819598e-09,
              "p95": 6.747310864101198e-08,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.001051233299136781,
              "median": 0.0009199790761206196,
              "min": 0.00026390789155074666,
              "max": 0.0023595129478598915,
              "p5": 0.0002965496892640003,
              "p95": 0.0021362345819270043,
              "count": 8
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": -0.1572327044025157,
            "market": 0.024009398025444995,
            "sector": -0.15532549302223897,
            "peers": -0.1451886147268151,
            "vs_market": -0.18124210242796068,
            "vs_sector": -0.0019072113802767188,
            "vs_peers": -0.012044089675700587
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 70.38910505836576,
          "score_pca_percentile": 70.38910505836576,
          "rank_pca": 762,
          "total": 2570,
          "adv_notional_sgd": 1309530.0,
          "adv_volume_shares": 443950.0,
          "free_float_shares": 350144309.0,
          "turnover_ratio": 0.0012679057993771363,
          "votes": 255.0,
          "trades": 255.0,
          "spread_pct": 0.005059382440626627,
          "spread_ticks": 1.5079782146919958,
          "amihud": 5.9965608288714436e-09,
          "volatility": 0.2746393614984155
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.6304259807871022,
          "loadings": {
            "log_adv": 0.49580526868262037,
            "log_trades": 0.4490790677276847,
            "log_turnover": 0.44837881735388746,
            "neg_spread": 0.4594979579114632,
            "neg_amihud": 0.354048191095558,
            "neg_vol": 0.12236448700859119
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
          "peer_median_adv": 869888.4025,
          "peer_median_score_pca": 62.295719844357976,
          "peer_median_trades": 66.0,
          "peer_median_volatility": 0.4739136500206339,
          "peer_median_spread_pct": 0.018399189452430728,
          "peer_median_spread_ticks": 3.2977283007244864,
          "peer_median_amihud": 1.753049162337933e-08,
          "peer_median_turnover_ratio": 0.0010149222050802628,
          "target_vs_peer": {
            "score_pca_delta": 8.09,
            "adv_delta_pct": 50.5,
            "trades_delta_pct": 286.36,
            "volatility_delta_pct": 42.05,
            "spread_pct_delta_pct": 72.5,
            "spread_ticks_delta_pct": -54.27,
            "amihud_delta_pct": 65.79,
            "turnover_ratio_delta_pct": 24.93
          }
        },
        "peer_liquidity": [
          {
            "ticker": "511",
            "score_pca": 70.38910505836576,
            "rank_pca": 762,
            "adv": 1309530.0,
            "trades": 255.0,
            "volatility": 0.2746393614984155,
            "spread_pct": 0.005059382440626627,
            "spread_ticks": 1.5079782146919958,
            "amihud": 5.9965608288714436e-09,
            "turnover_ratio": 0.0012679057993771363,
            "is_target": true
          },
          {
            "ticker": "2008",
            "score_pca": 52.645914396887164,
            "rank_pca": 1218,
            "adv": 231150.0,
            "trades": 18.0,
            "volatility": 0.449014692096958,
            "spread_pct": 0.025222119979072605,
            "spread_ticks": 4.549122807017544,
            "amihud": 4.625641084944112e-08,
            "turnover_ratio": 0.0009058800999064733,
            "is_target": false
          },
          {
            "ticker": "3700",
            "score_pca": 65.01945525291829,
            "rank_pca": 900,
            "adv": 1109142.125,
            "trades": 148.0,
            "volatility": 0.751891805476555,
            "spread_pct": 0.017515765664777326,
            "spread_ticks": 1.5041513223970537,
            "amihud": 1.7685038227028853e-08,
            "turnover_ratio": 0.0011366360352171804,
            "is_target": false
          },
          {
            "ticker": "2306",
            "score_pca": 66.26459143968872,
            "rank_pca": 868,
            "adv": 2108055.0,
            "trades": 86.5,
            "volatility": 0.5493781441776401,
            "spread_pct": 0.019282613240084134,
            "spread_ticks": 4.273589196872779,
            "amihud": 8.912661924452503e-09,
            "turnover_ratio": 0.002937741442817357,
            "is_target": false
          },
          {
            "ticker": "2422",
            "score_pca": 47.85992217898833,
            "rank_pca": 1341,
            "adv": 540540.0,
            "trades": 28.0,
            "volatility": 1.4581252494254453,
            "spread_pct": 0.038686897912735795,
            "spread_ticks": 4.157575757575758,
            "amihud": 4.120353888954808e-08,
            "turnover_ratio": 0.0005492569966534721,
            "is_target": false
          },
          {
            "ticker": "1970",
            "score_pca": 55.60311284046693,
            "rank_pca": 1142,
            "adv": 250128.5,
            "trades": 24.0,
            "volatility": 0.26817978834899575,
            "spread_pct": 0.012067697557948811,
            "spread_ticks": 9.567169540229884,
            "amihud": 3.1584656567507175e-08,
            "turnover_ratio": 0.0003130672046827485,
            "is_target": false
          },
          {
            "ticker": "752",
            "score_pca": 67.54863813229572,
            "rank_pca": 835,
            "adv": 1470130.0,
            "trades": 102.0,
            "volatility": 0.21233739979648514,
            "spread_pct": 0.005452115523775763,
            "spread_ticks": 1.4444879248658318,
            "amihud": 5.27477405892841e-09,
            "turnover_ratio": 0.0011239643102540523,
            "is_target": false
          },
          {
            "ticker": "1450",
            "score_pca": 59.57198443579767,
            "rank_pca": 1040,
            "adv": 630634.6799999999,
            "trades": 45.5,
            "volatility": 0.4988126079443098,
            "spread_pct": 0.019851841278009798,
            "spread_ticks": 1.8711283185840708,
            "amihud": 1.7375945019729805e-08,
            "turnover_ratio": 0.0006899878298221606,
            "is_target": false
          },
          {
            "ticker": "2550",
            "score_pca": 71.284046692607,
            "rank_pca": 739,
            "adv": 3047690.0,
            "trades": 213.5,
            "volatility": 0.3947318703376465,
            "spread_pct": 0.010209427754200908,
            "spread_ticks": 2.4378808438732142,
            "amihud": 4.062245261797817e-09,
            "turnover_ratio": 0.0037731928969766833,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Broadcasting",
          "sector_count": 5,
          "market_count": 2570,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7483147301179937,
              "median": 0.605061240008339,
              "min": 0.0,
              "max": 33.69063316055627,
              "p5": 0.22420189997375514,
              "p95": 1.620966664417821,
              "count": 2570
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 55789391.36964397,
              "median": 212763.0,
              "min": 0.0,
              "max": 11892751420.0,
              "p5": 0.0,
              "p95": 221462819.30399984,
              "count": 2570
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.042062614687010925,
              "median": 0.027786432019735404,
              "min": 0.0005759578485903171,
              "max": 0.586235634471959,
              "p5": 0.0014171090838533925,
              "p95": 0.13293266374782126,
              "count": 2570
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0035345008282309082,
              "median": 0.0008306667028089253,
              "min": 0.0,
              "max": 0.18523236964248901,
              "p5": 0.0,
              "p95": 0.014471303919301359,
              "count": 2554
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.129067217651611e-07,
              "median": 4.734371574929171e-08,
              "min": 0.0,
              "max": 1.9124298969909754e-05,
              "p5": 5.2975151998027814e-11,
              "p95": 3.1600228288865187e-06,
              "count": 2570
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1018.3235408560312,
              "median": 19.0,
              "min": 0.0,
              "max": 80079.0,
              "p5": 0.0,
              "p95": 5558.874999999999,
              "count": 2570
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7012489689288843,
              "median": 0.751891805476555,
              "min": 0.2746393614984155,
              "max": 1.1884988575993682,
              "p5": 0.309514427618124,
              "p95": 1.1192391116741196,
              "count": 5
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 576981.0586999999,
              "median": 231150.0,
              "min": 7358.0,
              "max": 1309530.0,
              "p5": 51431.4337,
              "p95": 1269452.425,
              "count": 5
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0331084980120212,
              "median": 0.025222119979072605,
              "min": 0.005059382440626627,
              "max": 0.09031824861612092,
              "p5": 0.007550659085456766,
              "p95": 0.07773999356479842,
              "count": 5
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0009445669346532986,
              "median": 0.0010273143959540643,
              "min": 0.0003850983428116394,
              "max": 0.0012679057993771363,
              "p5": 0.0004892546942306061,
              "p95": 0.001241651846545145,
              "count": 5
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.236863655750971e-07,
              "median": 4.625641084944112e-08,
              "min": 5.9965608288714436e-09,
              "max": 1.499393276330897e-06,
              "p5": 8.334256308502925e-09,
              "p95": 1.2093347293925668e-06,
              "count": 5
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 90.7,
              "median": 29.5,
              "min": 3.0,
              "max": 255.0,
              "p5": 6.0,
              "p95": 233.59999999999997,
              "count": 5
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 1173433.788125,
              "median": 869888.4025,
              "min": 231150.0,
              "max": 3047690.0,
              "p5": 237792.475,
              "p95": 2718817.7499999995,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 83.1875,
              "median": 66.0,
              "min": 18.0,
              "max": 213.5,
              "p5": 20.1,
              "p95": 190.57499999999996,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5728089447005045,
              "median": 0.4739136500206339,
              "min": 0.21233739979648514,
              "max": 1.4581252494254453,
              "p5": 0.23188223578986386,
              "p95": 1.2109435440433334,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.018536059863825644,
              "median": 0.018399189452430728,
              "min": 0.005452115523775763,
              "max": 0.038686897912735795,
              "p5": 0.007117174804424564,
              "p95": 0.03397422563595367,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.725638213927017,
              "median": 3.2977283007244864,
              "min": 1.4444879248658318,
              "max": 9.567169540229884,
              "p5": 1.4653701140017594,
              "p95": 7.810853183605563,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.154440884980422e-08,
              "median": 1.753049162337933e-08,
              "min": 4.062245261797817e-09,
              "max": 4.625641084944112e-08,
              "p5": 4.486630340793525e-09,
              "p95": 4.448790566347855e-08,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0014287158520412658,
              "median": 0.0010149222050802628,
              "min": 0.0003130672046827485,
              "max": 0.0037731928969766833,
              "p5": 0.0003957336318725018,
              "p95": 0.0034807848880209187,
              "count": 8
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": -0.197604790419162,
            "market": 0.13602925408451405,
            "sector": -0.22482534735311954,
            "peers": -0.20580621241639774,
            "vs_market": -0.33363404450367606,
            "vs_sector": 0.02722055693395753,
            "vs_peers": 0.008201421997235725
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Near-term tradability is average and a little softer, as average volume is 34.3% below the 1M average.",
        "market_comparison": "The stock is underperforming the market over 1M, down 5.6% while the market is up 1.7%, which can leave liquidity less supported by momentum."
      },
      "30d": {
        "liquidity": "Monthly tradability is solid, with average daily volume of HK$1.3M supporting workable access.",
        "market_comparison": "Return -5.6% vs peers -5.8%."
      },
      "3m": {
        "liquidity": "Medium-term tradability looks firm, with liquidity holding above peer levels over the broader period.",
        "market_comparison": "The stock has lagged peers over 3M, which matters because weaker price performance can make trading interest less resilient."
      },
      "6m": {
        "liquidity": "Six-month tradability is strong relative to peers, with a liquidity score of 70.4 compared with the 62.3 peer median.",
        "market_comparison": "That peer lead suggests access has generally been better than the group, even though the current read is less robust than the longer-term average."
      }
    }
  },
  "q02": {
    "driver_model": {
      "valid": true,
      "model_method": "ols_with_hmm_jump_regimes",
      "regime_method": "hmm_jump_aware",
      "estimation_window_days": 251,
      "reporting_window_days": 63,
      "available_history_days": 251,
      "n_regimes": 4,
      "current_regime": 0,
      "current_regime_label": "Calm / Liquid",
      "current_regime_probability": 0.9999999801583357,
      "current_regime_probability_display": ">99.9%",
      "current_probability_basis": "filtered",
      "historical_probability_basis": "smoothed",
      "current_driver_mix": {
        "market_share": {
          "median": 0.6608071136881171,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "66.1%",
          "display_range": null,
          "display_text": "66.1%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 66.1,
          "plain_english": "Market explains about 66.1% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.152323716478436,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "15.2%",
          "display_range": null,
          "display_text": "15.2%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 15.2,
          "plain_english": "Sector explains about 15.2% of price moves in the current state."
        },
        "company_share": {
          "median": 0.186869169833447,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "18.7%",
          "display_range": null,
          "display_text": "18.7%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 18.7,
          "plain_english": "Company-specific explains about 18.7% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 0.5730733610462371,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.57",
          "display_range": null,
          "display_text": "0.57",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Modest",
          "plain_english": "Modest market link: a 1% market move has lined up with about a 0.57% stock move in the same direction in this state.",
          "value_num": 0.57
        },
        "beta_stock_lag": {
          "median": -0.3065032420913922,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.31",
          "display_range": null,
          "display_text": "-0.31",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -0.31
        },
        "beta_sector": {
          "median": 0.21274316216743905,
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
          "plain_english": "Weak sector link: a 1% sector move has lined up with about a 0.21% stock move in the same direction in this state.",
          "value_num": 0.21
        },
        "beta_market_lag": {
          "median": 0.6871545975209312,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.69",
          "display_range": null,
          "display_text": "0.69",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 0.69
        },
        "beta_sector_lag": {
          "median": -0.13268258319975856,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.13",
          "display_range": null,
          "display_text": "-0.13",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -0.13
        },
        "posterior_source": null,
        "intervals_collapsed": false,
        "confidence_label": "High, limited history",
        "confidence_note": "Based on 251 trading days relative to the 252-day target."
      },
      "rolling_windows": {},
      "monthly_history": [
        {
          "month_key": "2025-05",
          "month_label": "May 2025",
          "month_short_label": "May",
          "period_label": "2025-05-07 to 2025-05-30",
          "n_obs": 18,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.6405718961520086,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "64.1%",
            "display_range": null,
            "display_text": "64.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
            "kind": "share_pct",
            "value_pct": 64.1,
            "plain_english": "Company-specific explains about 64.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.15272726365562742,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "15.3%",
              "display_range": null,
              "display_text": "15.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 15.3,
              "plain_english": "Market explains about 15.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.20670084019236393,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.7%",
              "display_range": null,
              "display_text": "20.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 20.7,
              "plain_english": "Sector explains about 20.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6405718961520086,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "64.1%",
              "display_range": null,
              "display_text": "64.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 64.1,
              "plain_english": "Company-specific explains about 64.1% of price moves in the current state."
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
            "median": 0.6737656530501399,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "67.4%",
            "display_range": null,
            "display_text": "67.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 67.4,
            "plain_english": "Company-specific explains about 67.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.10621773254524795,
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
              "plain_english": "Market explains about 10.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.22001661440461207,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "22.0%",
              "display_range": null,
              "display_text": "22.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 22.0,
              "plain_english": "Sector explains about 22.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6737656530501399,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "67.4%",
              "display_range": null,
              "display_text": "67.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 67.4,
              "plain_english": "Company-specific explains about 67.4% of price moves in the current state."
            }
          },
          "summary": "Jun: Still clearly company-driven."
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
            "median": 0.5202330186024126,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "52.0%",
            "display_range": null,
            "display_text": "52.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 52.0,
            "plain_english": "Company-specific explains about 52.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2090208474033254,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.9%",
              "display_range": null,
              "display_text": "20.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 20.9,
              "plain_english": "Market explains about 20.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.27074613399426206,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.1%",
              "display_range": null,
              "display_text": "27.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 27.1,
              "plain_english": "Sector explains about 27.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5202330186024126,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.0%",
              "display_range": null,
              "display_text": "52.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 52.0,
              "plain_english": "Company-specific explains about 52.0% of price moves in the current state."
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
            "median": 0.5645049045662222,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "56.5%",
            "display_range": null,
            "display_text": "56.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 56.5,
            "plain_english": "Company-specific explains about 56.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3781037520100116,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.8%",
              "display_range": null,
              "display_text": "37.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 37.8,
              "plain_english": "Market explains about 37.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.05739134342376616,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "5.7%",
              "display_range": null,
              "display_text": "5.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 5.7,
              "plain_english": "Sector explains about 5.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5645049045662222,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.5%",
              "display_range": null,
              "display_text": "56.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 56.5,
              "plain_english": "Company-specific explains about 56.5% of price moves in the current state."
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
            "median": 0.5838094217956722,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "58.4%",
            "display_range": null,
            "display_text": "58.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 58.4,
            "plain_english": "Company-specific explains about 58.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.21649863925868057,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "21.6%",
              "display_range": null,
              "display_text": "21.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 21.6,
              "plain_english": "Market explains about 21.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.19969193894564724,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.0%",
              "display_range": null,
              "display_text": "20.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 20.0,
              "plain_english": "Sector explains about 20.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5838094217956722,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "58.4%",
              "display_range": null,
              "display_text": "58.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 58.4,
              "plain_english": "Company-specific explains about 58.4% of price moves in the current state."
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
            "median": 0.5913096706146111,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "59.1%",
            "display_range": null,
            "display_text": "59.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 59.1,
            "plain_english": "Company-specific explains about 59.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.19813212218230317,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "19.8%",
              "display_range": null,
              "display_text": "19.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 19.8,
              "plain_english": "Market explains about 19.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.21055820720308563,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "21.1%",
              "display_range": null,
              "display_text": "21.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 21.1,
              "plain_english": "Sector explains about 21.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5913096706146111,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "59.1%",
              "display_range": null,
              "display_text": "59.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 59.1,
              "plain_english": "Company-specific explains about 59.1% of price moves in the current state."
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
            "median": 0.3548410992148945,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "35.5%",
            "display_range": null,
            "display_text": "35.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 35.5,
            "plain_english": "Market explains about 35.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3548410992148945,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "35.5%",
              "display_range": null,
              "display_text": "35.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 35.5,
              "plain_english": "Market explains about 35.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.34123420254755993,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.1%",
              "display_range": null,
              "display_text": "34.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 34.1,
              "plain_english": "Sector explains about 34.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.30392469823754564,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "30.4%",
              "display_range": null,
              "display_text": "30.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 30.4,
              "plain_english": "Company-specific explains about 30.4% of price moves in the current state."
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
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4355270557723893,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "43.6%",
            "display_range": null,
            "display_text": "43.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
            "kind": "share_pct",
            "value_pct": 43.6,
            "plain_english": "Company-specific explains about 43.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.22497889603568452,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "22.5%",
              "display_range": null,
              "display_text": "22.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 22.5,
              "plain_english": "Market explains about 22.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3394940481919261,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "33.9%",
              "display_range": null,
              "display_text": "33.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 33.9,
              "plain_english": "Sector explains about 33.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4355270557723893,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "43.6%",
              "display_range": null,
              "display_text": "43.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 43.6,
              "plain_english": "Company-specific explains about 43.6% of price moves in the current state."
            }
          },
          "summary": "Dec: More mixed, though company-driven still has the largest share."
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
            "median": 0.42159773241238724,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "42.2%",
            "display_range": null,
            "display_text": "42.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 42.2,
            "plain_english": "Company-specific explains about 42.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.24457505809779742,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "24.5%",
              "display_range": null,
              "display_text": "24.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 24.5,
              "plain_english": "Market explains about 24.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.33382720948981526,
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
              "median": 0.42159773241238724,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.2%",
              "display_range": null,
              "display_text": "42.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 42.2,
              "plain_english": "Company-specific explains about 42.2% of price moves in the current state."
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
            "median": 0.4225698285659922,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "42.3%",
            "display_range": null,
            "display_text": "42.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
            "kind": "share_pct",
            "value_pct": 42.3,
            "plain_english": "Company-specific explains about 42.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2901699850454438,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "29.0%",
              "display_range": null,
              "display_text": "29.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 29.0,
              "plain_english": "Market explains about 29.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.28726018638856393,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "28.7%",
              "display_range": null,
              "display_text": "28.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 28.7,
              "plain_english": "Sector explains about 28.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4225698285659922,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.3%",
              "display_range": null,
              "display_text": "42.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 42.3,
              "plain_english": "Company-specific explains about 42.3% of price moves in the current state."
            }
          },
          "summary": "Feb: More mixed, though company-driven still has the largest share."
        },
        {
          "month_key": "2026-03",
          "month_label": "March 2026",
          "month_short_label": "Mar",
          "period_label": "2026-03-02 to 2026-03-31",
          "n_obs": 22,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4079007515828694,
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
            "plain_english": "Market explains about 40.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.4079007515828694,
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
              "plain_english": "Market explains about 40.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.38524705986142577,
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
              "median": 0.20685218855570472,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.7%",
              "display_range": null,
              "display_text": "20.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 20.7,
              "plain_english": "Company-specific explains about 20.7% of price moves in the current state."
            }
          },
          "summary": "Mar: More mixed, though market-driven still has the largest share."
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-30",
          "n_obs": 19,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.35966917654867525,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "36.0%",
            "display_range": null,
            "display_text": "36.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
            "kind": "share_pct",
            "value_pct": 36.0,
            "plain_english": "Market explains about 36.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.35966917654867525,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.0%",
              "display_range": null,
              "display_text": "36.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 36.0,
              "plain_english": "Market explains about 36.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.30846685332216117,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "30.8%",
              "display_range": null,
              "display_text": "30.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 30.8,
              "plain_english": "Sector explains about 30.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3318639701291635,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "33.2%",
              "display_range": null,
              "display_text": "33.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 33.2,
              "plain_english": "Company-specific explains about 33.2% of price moves in the current state."
            }
          },
          "summary": "Apr: Much more balanced across company, sector, and market factors."
        },
        {
          "month_key": "2026-05",
          "month_label": "May 2026",
          "month_short_label": "May",
          "period_label": "2026-05-04 to 2026-05-20",
          "n_obs": 13,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4478614024876759,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "44.8%",
            "display_range": null,
            "display_text": "44.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
            "kind": "share_pct",
            "value_pct": 44.8,
            "plain_english": "Company-specific explains about 44.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.36970242550326454,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.0%",
              "display_range": null,
              "display_text": "37.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
              "kind": "share_pct",
              "value_pct": 37.0,
              "plain_english": "Market explains about 37.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.18243617200905957,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "18.2%",
              "display_range": null,
              "display_text": "18.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
              "kind": "share_pct",
              "value_pct": 18.2,
              "plain_english": "Sector explains about 18.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4478614024876759,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.8%",
              "display_range": null,
              "display_text": "44.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
              "kind": "share_pct",
              "value_pct": 44.8,
              "plain_english": "Company-specific explains about 44.8% of price moves in the current state."
            }
          },
          "summary": "May: More mixed, though company-driven still has the largest share."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Calm / Liquid",
          "pct_time": 0.25913705125498265,
          "expected_duration_days": 12.691626991429844,
          "current_probability": 0.9999999801583357,
          "current_probability_display": ">99.9%",
          "current_probability_basis": "filtered",
          "n_days_effective": 65.04339986500065,
          "volatility": {
            "median": 0.00910718431178384,
            "low": 0.00910718431178384,
            "high": 0.00910718431178384
          },
          "volatility_label": "Calm / Liquid",
          "jump_probability": 0.25185088657881893,
          "jump_rate": 0.10761979994542131,
          "risk_score": 0.23401810652394733,
          "metrics": {
            "rolling_vol_10d": 0.010424171571491312,
            "downside_vol_10d": 0.00585986072224968,
            "drawdown_21d": 0.045273668419953644,
            "amihud_stress": 0.4157246517708848,
            "spread_rel": 49.15031852424161,
            "spread_ticks": 1.5139291655334768,
            "log_notional": 14.127579952072486,
            "log_trade_count": 5.497463514287458
          }
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "pct_time": 0.21163188759676382,
          "expected_duration_days": 13.161669490242765,
          "current_probability": 1.7902709446378817e-19,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 53.11960378678772,
          "volatility": {
            "median": 0.011126061610757831,
            "low": 0.011126061610757831,
            "high": 0.011126061610757831
          },
          "volatility_label": "Normal / Active",
          "jump_probability": 0.17517282218534694,
          "jump_rate": 6.942407768966805e-13,
          "risk_score": 0.5224001666527207,
          "metrics": {
            "rolling_vol_10d": 0.01972900574906921,
            "downside_vol_10d": 0.00959992009444703,
            "drawdown_21d": 0.08853356099676846,
            "amihud_stress": 0.4253942000624096,
            "spread_rel": 52.41955475756791,
            "spread_ticks": 1.5832935945762334,
            "log_notional": 14.39188471119825,
            "log_trade_count": 5.684314853465821
          }
        },
        {
          "id": 2,
          "label": "Stressed / Illiquid",
          "pct_time": 0.2927277323715625,
          "expected_duration_days": 12.152863530512688,
          "current_probability": 1.9841664225415805e-08,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 73.47466082526219,
          "volatility": {
            "median": 0.01670190815825701,
            "low": 0.01670190815825701,
            "high": 0.01670190815825701
          },
          "volatility_label": "Stressed / Illiquid",
          "jump_probability": 0.2828601236547768,
          "jump_rate": 0.1360695302380551,
          "risk_score": 0.6205951823176518,
          "metrics": {
            "rolling_vol_10d": 0.016949357980099892,
            "downside_vol_10d": 0.009910149101827775,
            "drawdown_21d": 0.06466311310714838,
            "amihud_stress": 0.5264711966128574,
            "spread_rel": 50.61484166931195,
            "spread_ticks": 1.6064968361868,
            "log_notional": 14.30954664734665,
            "log_trade_count": 5.708724182066154
          }
        },
        {
          "id": 3,
          "label": "Jump / Tail Shock",
          "pct_time": 0.23650332877669092,
          "expected_duration_days": 11.788642956168857,
          "current_probability": 1.6218628047640885e-20,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 59.36233552294942,
          "volatility": {
            "median": 0.032636344289874934,
            "low": 0.032636344289874934,
            "high": 0.032636344289874934
          },
          "volatility_label": "Jump / Tail Shock",
          "jump_probability": 0.301956310277677,
          "jump_rate": 0.15165137383025534,
          "risk_score": 0.8059930387796771,
          "metrics": {
            "rolling_vol_10d": 0.026216220963375798,
            "downside_vol_10d": 0.012298434007088348,
            "drawdown_21d": 0.05045883269630397,
            "amihud_stress": 0.26724427003075696,
            "spread_rel": 45.71236771411729,
            "spread_ticks": 1.7883187333339639,
            "log_notional": 15.723869892251985,
            "log_trade_count": 6.607592748945466
          }
        }
      ],
      "transitions": {
        "mean": [
          [
            0.9212078955144789,
            0.0001558035820867842,
            0.047295058305594315,
            0.03134124259784012
          ],
          [
            0.0377395381846141,
            0.924021796722571,
            0.01899395067424869,
            0.019244714418566167
          ],
          [
            0.05483889018093806,
            0.00013584030273212623,
            0.9177148663367066,
            0.027310403179623348
          ],
          [
            0.00016807373141574216,
            0.06767534746549542,
            0.016983984613756213,
            0.9151725941893327
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            59.0,
            0.0,
            3.0,
            2.0
          ],
          [
            2.0,
            49.0,
            1.0,
            1.0
          ],
          [
            4.0,
            0.0,
            68.0,
            2.0
          ],
          [
            0.0,
            4.0,
            1.0,
            54.0
          ]
        ]
      },
      "current_state_is_transition": false,
      "state_probabilities": [
        {
          "id": 0,
          "label": "Calm / Liquid",
          "probability": 0.9999999801583357,
          "probability_display": ">99.9%",
          "basis": "filtered"
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "probability": 1.7902709446378817e-19,
          "probability_display": "<0.1%",
          "basis": "filtered"
        },
        {
          "id": 2,
          "label": "Stressed / Illiquid",
          "probability": 1.9841664225415805e-08,
          "probability_display": "<0.1%",
          "basis": "filtered"
        },
        {
          "id": 3,
          "label": "Jump / Tail Shock",
          "probability": 1.6218628047640885e-20,
          "probability_display": "<0.1%",
          "basis": "filtered"
        }
      ],
      "jump_risk": {
        "current_probability": 0.25185088719409376,
        "current_score": 2.3658984425491254,
        "current_flag": false,
        "jump_threshold_score": 2.5,
        "method": "robust_residual_and_return_jump_overlay",
        "model_definition": "jump_score_feature_overlay"
      },
      "model_selection": {
        "chosen": 4,
        "criterion": "bic_with_min_state_support",
        "bic": 11493.056266031444,
        "loglik": -5218.847377328637,
        "n_params": 191,
        "bic_delta_vs_next_best": 410.8314180282068,
        "candidates": [
          {
            "k": 2,
            "valid": true,
            "reason": "ok",
            "bic": 12594.407983182811,
            "loglik": -6045.79588286091,
            "n_params": 91,
            "converged": true,
            "iterations": 16,
            "best_seed": 2027,
            "seed_runs": [
              {
                "seed": 42,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 12594.408001377162,
                "loglik": -6045.795891958085,
                "n_params": 91,
                "converged": true,
                "iterations": 15
              },
              {
                "seed": 1337,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 12594.407998436482,
                "loglik": -6045.795890487745,
                "n_params": 91,
                "converged": true,
                "iterations": 15
              },
              {
                "seed": 2027,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 12594.407983182811,
                "loglik": -6045.79588286091,
                "n_params": 91,
                "converged": true,
                "iterations": 16
              }
            ]
          },
          {
            "k": 3,
            "valid": true,
            "reason": "ok",
            "bic": 11903.887684059651,
            "loglik": -5565.162136290601,
            "n_params": 140,
            "converged": true,
            "iterations": 26,
            "best_seed": 1337,
            "seed_runs": [
              {
                "seed": 42,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 11903.887684300036,
                "loglik": -5565.162136410793,
                "n_params": 140,
                "converged": true,
                "iterations": 26
              },
              {
                "seed": 1337,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 11903.887684059651,
                "loglik": -5565.162136290601,
                "n_params": 140,
                "converged": true,
                "iterations": 26
              },
              {
                "seed": 2027,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 11903.88768425258,
                "loglik": -5565.162136387065,
                "n_params": 140,
                "converged": true,
                "iterations": 30
              }
            ]
          },
          {
            "k": 4,
            "valid": true,
            "reason": "ok",
            "bic": 11493.056266031444,
            "loglik": -5218.847377328637,
            "n_params": 191,
            "converged": true,
            "iterations": 25,
            "best_seed": 1337,
            "seed_runs": [
              {
                "seed": 42,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 11559.661239147921,
                "loglik": -5252.149863886875,
                "n_params": 191,
                "converged": true,
                "iterations": 12
              },
              {
                "seed": 1337,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 11493.056266031444,
                "loglik": -5218.847377328637,
                "n_params": 191,
                "converged": true,
                "iterations": 25
              },
              {
                "seed": 2027,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 11559.661240157702,
                "loglik": -5252.149864391766,
                "n_params": 191,
                "converged": true,
                "iterations": 12
              }
            ]
          }
        ],
        "seed_stability": {
          "seeds_tested": [
            42,
            1337,
            2027
          ],
          "valid_seed_count": 3,
          "selected_by_seed": [
            {
              "seed": 42,
              "selected_states": 4,
              "bic": 11559.661239147921,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 4,
              "bic": 11493.056266031444,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 4,
              "bic": 11559.661240157702,
              "valid": true,
              "reason": null
            }
          ],
          "selected_state_counts": {
            "4": 3
          },
          "selected_state_share": 1.0,
          "stable": true,
          "majority_support": true
        },
        "rolling_window_stability": {
          "status": "stable",
          "minimum_history_days": 160,
          "windows": [
            {
              "window_days": 126,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 4,
              "bic_by_state": {
                "2": 5859.694767889856,
                "3": 5664.890904194382,
                "4": 5302.955785072856
              },
              "valid": true
            },
            {
              "window_days": 189,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 4,
              "bic_by_state": {
                "2": 9258.443126564143,
                "3": 8785.837342303264,
                "4": 8458.859428211743
              },
              "valid": true
            },
            {
              "window_days": 251,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 4,
              "bic_by_state": {
                "2": 12594.408001377162,
                "3": 11903.887684300036,
                "4": 11559.661239147921
              },
              "valid": true
            }
          ],
          "stable": true
        }
      },
      "robustness_diagnostics": {
        "history_used_days": 251,
        "n_features": 22,
        "candidate_states": [
          2,
          3,
          4
        ],
        "selected_states": 4,
        "bic_delta_vs_next_best": 410.8314180282068,
        "state_count_interpretation": "251 observations allowed the current rule to test up to 4 states; BIC preferred 4 with a 410.83 improvement versus the next best valid state count.",
        "parameter_count": {
          "formula": "k^2 - 1 + 2*k*d",
          "n_parameters": 191,
          "observations_per_parameter": 1.3141361256544504,
          "parameter_pressure_label": "parameter_heavy"
        },
        "state_occupancy": {
          "min_effective_days_required": 7.529999999999999,
          "min_effective_days_observed": 53.11960378678772,
          "passes": true,
          "states": [
            {
              "id": 0,
              "label": "Calm / Liquid",
              "effective_days": 65.04339986500065,
              "pct_time": 0.25913705125498265,
              "passes_min_support": true
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "effective_days": 53.11960378678772,
              "pct_time": 0.21163188759676382,
              "passes_min_support": true
            },
            {
              "id": 2,
              "label": "Stressed / Illiquid",
              "effective_days": 73.47466082526219,
              "pct_time": 0.2927277323715625,
              "passes_min_support": true
            },
            {
              "id": 3,
              "label": "Jump / Tail Shock",
              "effective_days": 59.36233552294942,
              "pct_time": 0.23650332877669092,
              "passes_min_support": true
            }
          ]
        },
        "transition_diagnostics": {
          "self_transition_probabilities": [
            0.9212078955144789,
            0.924021796722571,
            0.9177148663367066,
            0.9151725941893327
          ],
          "expected_duration_days": [
            12.691626991429844,
            13.161669490242765,
            12.152863530512688,
            11.788642956168857
          ],
          "nearly_absorbing_state_ids": [],
          "fast_switching_state_ids": [],
          "warnings": []
        },
        "seed_stability": {
          "seeds_tested": [
            42,
            1337,
            2027
          ],
          "valid_seed_count": 3,
          "selected_by_seed": [
            {
              "seed": 42,
              "selected_states": 4,
              "bic": 11559.661239147921,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 4,
              "bic": 11493.056266031444,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 4,
              "bic": 11559.661240157702,
              "valid": true,
              "reason": null
            }
          ],
          "selected_state_counts": {
            "4": 3
          },
          "selected_state_share": 1.0,
          "stable": true,
          "majority_support": true
        },
        "rolling_window_stability": {
          "status": "stable",
          "minimum_history_days": 160,
          "windows": [
            {
              "window_days": 126,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 4,
              "bic_by_state": {
                "2": 5859.694767889856,
                "3": 5664.890904194382,
                "4": 5302.955785072856
              },
              "valid": true
            },
            {
              "window_days": 189,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 4,
              "bic_by_state": {
                "2": 9258.443126564143,
                "3": 8785.837342303264,
                "4": 8458.859428211743
              },
              "valid": true
            },
            {
              "window_days": 251,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 4,
              "bic_by_state": {
                "2": 12594.408001377162,
                "3": 11903.887684300036,
                "4": 11559.661239147921
              },
              "valid": true
            }
          ],
          "stable": true
        },
        "feature_profile_by_state": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "risk_score": 0.23401810652394733,
            "jump_probability": 0.25185088657881893,
            "jump_rate": 0.10761979994542131,
            "rolling_vol_10d": 0.010424171571491312,
            "downside_vol_10d": 0.00585986072224968,
            "drawdown_21d": 0.045273668419953644,
            "amihud_stress": 0.4157246517708848,
            "spread_rel": 49.15031852424161,
            "spread_ticks": 1.5139291655334768,
            "log_notional": 14.127579952072486,
            "log_trade_count": 5.497463514287458
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "risk_score": 0.5224001666527207,
            "jump_probability": 0.17517282218534694,
            "jump_rate": 6.942407768966805e-13,
            "rolling_vol_10d": 0.01972900574906921,
            "downside_vol_10d": 0.00959992009444703,
            "drawdown_21d": 0.08853356099676846,
            "amihud_stress": 0.4253942000624096,
            "spread_rel": 52.41955475756791,
            "spread_ticks": 1.5832935945762334,
            "log_notional": 14.39188471119825,
            "log_trade_count": 5.684314853465821
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "risk_score": 0.6205951823176518,
            "jump_probability": 0.2828601236547768,
            "jump_rate": 0.1360695302380551,
            "rolling_vol_10d": 0.016949357980099892,
            "downside_vol_10d": 0.009910149101827775,
            "drawdown_21d": 0.06466311310714838,
            "amihud_stress": 0.5264711966128574,
            "spread_rel": 50.61484166931195,
            "spread_ticks": 1.6064968361868,
            "log_notional": 14.30954664734665,
            "log_trade_count": 5.708724182066154
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "risk_score": 0.8059930387796771,
            "jump_probability": 0.301956310277677,
            "jump_rate": 0.15165137383025534,
            "rolling_vol_10d": 0.026216220963375798,
            "downside_vol_10d": 0.012298434007088348,
            "drawdown_21d": 0.05045883269630397,
            "amihud_stress": 0.26724427003075696,
            "spread_rel": 45.71236771411729,
            "spread_ticks": 1.7883187333339639,
            "log_notional": 15.723869892251985,
            "log_trade_count": 6.607592748945466
          }
        ],
        "jump_model_definition": {
          "type": "jump_score_feature_overlay",
          "method_name": "hmm_jump_aware",
          "description": "Jump score enters the HMM feature panel and current jump risk overlay; the likelihood is still diagonal Gaussian, not a full jump-diffusion emission model."
        },
        "probability_basis": {
          "current_state": "filtered_forward_probability",
          "historical_states": "smoothed_forward_backward_probability",
          "lookahead_note": "Current live monitoring uses filtered probabilities; smoothed probabilities are retained for retrospective historical charts."
        }
      },
      "feature_columns": [
        "stock_ret",
        "market_ret",
        "sector_ret",
        "abs_stock_ret",
        "residual_ret",
        "abs_residual_ret",
        "rolling_vol_5d",
        "rolling_vol_10d",
        "rolling_vol_21d",
        "downside_vol_10d",
        "rolling_skew_21d",
        "rolling_kurtosis_21d",
        "drawdown_21d",
        "market_corr_21d",
        "sector_corr_21d",
        "log_notional",
        "log_volume",
        "log_trade_count",
        "amihud_stress",
        "spread_rel",
        "spread_ticks",
        "jump_score"
      ],
      "smoothed_probability_tail": [
        {
          "trade_date": "2026-05-07",
          "state": 1,
          "probabilities": [
            1.1816858319772813e-28,
            1.0,
            3.558447788986044e-107,
            1.1174581443616955e-17
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            4.841065557016841e-30,
            0.9999999999999976,
            2.4488846365747742e-107,
            2.5091509627233648e-15
          ],
          "jump_probability": 0.38876420568580894,
          "jump_score": 1.8565132214344604
        },
        {
          "trade_date": "2026-05-08",
          "state": 0,
          "probabilities": [
            0.9999999860125729,
            4.732234828246455e-12,
            1.3982694945914292e-08,
            1.4167001364430794e-18
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999997649992151,
            1.1551201322129629e-10,
            2.3488526509589063e-07,
            7.764462284119483e-15
          ],
          "jump_probability": 0.14818023125045152,
          "jump_score": 0.729177692319028
        },
        {
          "trade_date": "2026-05-11",
          "state": 0,
          "probabilities": [
            0.99999997159856,
            1.02207379989977e-16,
            2.8401439640699147e-08,
            2.2612433405216866e-16
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999995228993113,
            2.494842446213072e-15,
            4.770994468969877e-07,
            1.2393770665687407e-12
          ],
          "jump_probability": 0.21260882213407825,
          "jump_score": 1.1115032931565831
        },
        {
          "trade_date": "2026-05-12",
          "state": 0,
          "probabilities": [
            0.9999999982912666,
            6.723374802633003e-21,
            1.7087333402449341e-09,
            1.0343658904929609e-20
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999999712959449,
            1.6411503890461496e-19,
            2.8704055112374698e-08,
            5.669331629561308e-17
          ],
          "jump_probability": 0.5521225966067357,
          "jump_score": 2.4319570218213435
        },
        {
          "trade_date": "2026-05-13",
          "state": 0,
          "probabilities": [
            0.9999999998517834,
            2.439650879907571e-19,
            1.4821664137922028e-10,
            4.7911800647367e-22
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999999975101914,
            5.955095783820195e-18,
            2.489808578318828e-09,
            2.626033650087397e-18
          ],
          "jump_probability": 0.14298442786079124,
          "jump_score": 0.6928518602565683
        },
        {
          "trade_date": "2026-05-14",
          "state": 0,
          "probabilities": [
            0.9999999999827021,
            3.8564463011313835e-21,
            1.729799381039512e-11,
            6.69272442476525e-23
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999999997094207,
            9.413439974255e-20,
            2.905793189901748e-10,
            3.6682638834455165e-19
          ],
          "jump_probability": 0.35230127608741935,
          "jump_score": 1.7204878708676636
        },
        {
          "trade_date": "2026-05-15",
          "state": 0,
          "probabilities": [
            0.9999999997861453,
            3.4021296815233873e-19,
            2.1385481588928136e-10,
            3.018003923997872e-22
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999999964075748,
            8.30447008067e-18,
            3.592425239500523e-09,
            1.6541536954612503e-18
          ],
          "jump_probability": 0.14195266099094617,
          "jump_score": 0.6855081365918734
        },
        {
          "trade_date": "2026-05-18",
          "state": 0,
          "probabilities": [
            0.9999999979531864,
            1.7712888920113754e-18,
            2.046813653600495e-09,
            2.8774145901668636e-20
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999999656167218,
            4.323649248794229e-17,
            3.4383278118769934e-08,
            1.5771035259988792e-16
          ],
          "jump_probability": 0.19829997024778834,
          "jump_score": 1.0352577176774462
        },
        {
          "trade_date": "2026-05-19",
          "state": 0,
          "probabilities": [
            0.9999999999599243,
            1.587264795788336e-19,
            4.00758099356702e-11,
            1.0600483110903696e-21
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999999993267932,
            3.8744528316052656e-18,
            6.732068127404332e-10,
            5.809871353065761e-18
          ],
          "jump_probability": 0.1416524529291939,
          "jump_score": 0.6833630078012308
        },
        {
          "trade_date": "2026-05-20",
          "state": 0,
          "probabilities": [
            0.9999999801583357,
            1.7902709446378817e-19,
            1.9841664225415805e-08,
            1.6218628047640885e-20
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999999801583357,
            1.7902709446378817e-19,
            1.9841664225415805e-08,
            1.6218628047640885e-20
          ],
          "jump_probability": 0.5332715626590364,
          "jump_score": 2.3658984425491254
        }
      ],
      "methodology": {
        "estimation_window_days": 251,
        "reporting_window_days": 63,
        "current_mix_method": "ols_last_5d",
        "monthly_history_method": "ols_per_month",
        "regime_inference": "hmm_jump_aware",
        "regime_feature_stack": "returns_volatility_shape_liquidity_activity_jump_score",
        "regime_scaling": "robust_median_iqr",
        "regime_model_selection": "bic_with_min_state_support",
        "jump_component": "robust_residual_and_return_jump_overlay",
        "jump_model_definition": "jump_score_feature_overlay_not_full_jump_diffusion",
        "current_state_probability_basis": "filtered",
        "historical_state_probability_basis": "smoothed",
        "distribution": "gaussian",
        "history_limited": true,
        "current_driver_mix_basis": "ols_recent_window",
        "sector_proxy_equals_market": false
      },
      "client_read": {
        "market_link_display": "0.57",
        "sector_link_display": "0.21",
        "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.57% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "Weak sector link. A 1% sector move has lined up with about a 0.21% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "-0.31",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "Calm / Liquid",
        "dominant_driver": "market",
        "dominant_driver_label": "Market",
        "driver_share_pct": 66.1,
        "driver_share_display": "66.1%",
        "confidence_label": "High, limited history",
        "confidence_pct": 99.9,
        "confidence_display": ">99.9%",
        "probability_basis": "filtered",
        "display_confidence_pct": null,
        "confidence_note": "Based on 251 trading days relative to the 252-day target.",
        "history_days": 251,
        "history_limited": true,
        "volatility_label": "Calm / Liquid",
        "jump_risk_label": "Contained",
        "jump_risk_probability": 25.2,
        "jump_risk_score": 2.37,
        "jump_risk_note": "Jump risk is contained based on recent residual and return shocks.",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.9212078955144789,
        "effective_days": 65.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 12.7 days.",
        "expected_duration_days": 12.7
      },
      "display_notes": {
        "collapsed_interval": "When only one number is shown, the run produced a point estimate instead of a wider uncertainty range."
      }
    },
    "regime_switching": {
      "valid": true,
      "regime_method": "hmm_jump_aware",
      "n_regimes": 4,
      "regimes": [
        {
          "id": 0,
          "label": "Calm / Liquid",
          "pct_time": 0.25913705125498265,
          "expected_duration_days": 12.691626991429844,
          "current_probability": 0.9999999801583357,
          "current_probability_display": ">99.9%",
          "current_probability_basis": "filtered",
          "n_days_effective": 65.04339986500065,
          "volatility": {
            "median": 0.00910718431178384,
            "low": 0.00910718431178384,
            "high": 0.00910718431178384
          },
          "volatility_label": "Calm / Liquid",
          "jump_probability": 0.25185088657881893,
          "jump_rate": 0.10761979994542131,
          "risk_score": 0.23401810652394733,
          "metrics": {
            "rolling_vol_10d": 0.010424171571491312,
            "downside_vol_10d": 0.00585986072224968,
            "drawdown_21d": 0.045273668419953644,
            "amihud_stress": 0.4157246517708848,
            "spread_rel": 49.15031852424161,
            "spread_ticks": 1.5139291655334768,
            "log_notional": 14.127579952072486,
            "log_trade_count": 5.497463514287458
          }
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "pct_time": 0.21163188759676382,
          "expected_duration_days": 13.161669490242765,
          "current_probability": 1.7902709446378817e-19,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 53.11960378678772,
          "volatility": {
            "median": 0.011126061610757831,
            "low": 0.011126061610757831,
            "high": 0.011126061610757831
          },
          "volatility_label": "Normal / Active",
          "jump_probability": 0.17517282218534694,
          "jump_rate": 6.942407768966805e-13,
          "risk_score": 0.5224001666527207,
          "metrics": {
            "rolling_vol_10d": 0.01972900574906921,
            "downside_vol_10d": 0.00959992009444703,
            "drawdown_21d": 0.08853356099676846,
            "amihud_stress": 0.4253942000624096,
            "spread_rel": 52.41955475756791,
            "spread_ticks": 1.5832935945762334,
            "log_notional": 14.39188471119825,
            "log_trade_count": 5.684314853465821
          }
        },
        {
          "id": 2,
          "label": "Stressed / Illiquid",
          "pct_time": 0.2927277323715625,
          "expected_duration_days": 12.152863530512688,
          "current_probability": 1.9841664225415805e-08,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 73.47466082526219,
          "volatility": {
            "median": 0.01670190815825701,
            "low": 0.01670190815825701,
            "high": 0.01670190815825701
          },
          "volatility_label": "Stressed / Illiquid",
          "jump_probability": 0.2828601236547768,
          "jump_rate": 0.1360695302380551,
          "risk_score": 0.6205951823176518,
          "metrics": {
            "rolling_vol_10d": 0.016949357980099892,
            "downside_vol_10d": 0.009910149101827775,
            "drawdown_21d": 0.06466311310714838,
            "amihud_stress": 0.5264711966128574,
            "spread_rel": 50.61484166931195,
            "spread_ticks": 1.6064968361868,
            "log_notional": 14.30954664734665,
            "log_trade_count": 5.708724182066154
          }
        },
        {
          "id": 3,
          "label": "Jump / Tail Shock",
          "pct_time": 0.23650332877669092,
          "expected_duration_days": 11.788642956168857,
          "current_probability": 1.6218628047640885e-20,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 59.36233552294942,
          "volatility": {
            "median": 0.032636344289874934,
            "low": 0.032636344289874934,
            "high": 0.032636344289874934
          },
          "volatility_label": "Jump / Tail Shock",
          "jump_probability": 0.301956310277677,
          "jump_rate": 0.15165137383025534,
          "risk_score": 0.8059930387796771,
          "metrics": {
            "rolling_vol_10d": 0.026216220963375798,
            "downside_vol_10d": 0.012298434007088348,
            "drawdown_21d": 0.05045883269630397,
            "amihud_stress": 0.26724427003075696,
            "spread_rel": 45.71236771411729,
            "spread_ticks": 1.7883187333339639,
            "log_notional": 15.723869892251985,
            "log_trade_count": 6.607592748945466
          }
        }
      ],
      "transitions": [
        [
          0.9212078955144789,
          0.0001558035820867842,
          0.047295058305594315,
          0.03134124259784012
        ],
        [
          0.0377395381846141,
          0.924021796722571,
          0.01899395067424869,
          0.019244714418566167
        ],
        [
          0.05483889018093806,
          0.00013584030273212623,
          0.9177148663367066,
          0.027310403179623348
        ],
        [
          0.00016807373141574216,
          0.06767534746549542,
          0.016983984613756213,
          0.9151725941893327
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.9212078955144789,
            0.0001558035820867842,
            0.047295058305594315,
            0.03134124259784012
          ],
          [
            0.0377395381846141,
            0.924021796722571,
            0.01899395067424869,
            0.019244714418566167
          ],
          [
            0.05483889018093806,
            0.00013584030273212623,
            0.9177148663367066,
            0.027310403179623348
          ],
          [
            0.00016807373141574216,
            0.06767534746549542,
            0.016983984613756213,
            0.9151725941893327
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            59.0,
            0.0,
            3.0,
            2.0
          ],
          [
            2.0,
            49.0,
            1.0,
            1.0
          ],
          [
            4.0,
            0.0,
            68.0,
            2.0
          ],
          [
            0.0,
            4.0,
            1.0,
            54.0
          ]
        ]
      },
      "current_regime": 0,
      "current_regime_label": "Calm / Liquid",
      "current_regime_probability": 0.9999999801583357,
      "current_regime_probability_display": ">99.9%",
      "current_probability_basis": "filtered",
      "historical_probability_basis": "smoothed",
      "current_state_is_transition": false,
      "state_probabilities": [
        {
          "id": 0,
          "label": "Calm / Liquid",
          "probability": 0.9999999801583357,
          "probability_display": ">99.9%",
          "basis": "filtered"
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "probability": 1.7902709446378817e-19,
          "probability_display": "<0.1%",
          "basis": "filtered"
        },
        {
          "id": 2,
          "label": "Stressed / Illiquid",
          "probability": 1.9841664225415805e-08,
          "probability_display": "<0.1%",
          "basis": "filtered"
        },
        {
          "id": 3,
          "label": "Jump / Tail Shock",
          "probability": 1.6218628047640885e-20,
          "probability_display": "<0.1%",
          "basis": "filtered"
        }
      ],
      "jump_risk": {
        "current_probability": 0.25185088719409376,
        "current_score": 2.3658984425491254,
        "current_flag": false,
        "jump_threshold_score": 2.5,
        "method": "robust_residual_and_return_jump_overlay",
        "model_definition": "jump_score_feature_overlay"
      },
      "model_selection": {
        "chosen": 4,
        "criterion": "bic_with_min_state_support",
        "bic": 11493.056266031444,
        "loglik": -5218.847377328637,
        "n_params": 191,
        "bic_delta_vs_next_best": 410.8314180282068,
        "candidates": [
          {
            "k": 2,
            "valid": true,
            "reason": "ok",
            "bic": 12594.407983182811,
            "loglik": -6045.79588286091,
            "n_params": 91,
            "converged": true,
            "iterations": 16,
            "best_seed": 2027,
            "seed_runs": [
              {
                "seed": 42,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 12594.408001377162,
                "loglik": -6045.795891958085,
                "n_params": 91,
                "converged": true,
                "iterations": 15
              },
              {
                "seed": 1337,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 12594.407998436482,
                "loglik": -6045.795890487745,
                "n_params": 91,
                "converged": true,
                "iterations": 15
              },
              {
                "seed": 2027,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 12594.407983182811,
                "loglik": -6045.79588286091,
                "n_params": 91,
                "converged": true,
                "iterations": 16
              }
            ]
          },
          {
            "k": 3,
            "valid": true,
            "reason": "ok",
            "bic": 11903.887684059651,
            "loglik": -5565.162136290601,
            "n_params": 140,
            "converged": true,
            "iterations": 26,
            "best_seed": 1337,
            "seed_runs": [
              {
                "seed": 42,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 11903.887684300036,
                "loglik": -5565.162136410793,
                "n_params": 140,
                "converged": true,
                "iterations": 26
              },
              {
                "seed": 1337,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 11903.887684059651,
                "loglik": -5565.162136290601,
                "n_params": 140,
                "converged": true,
                "iterations": 26
              },
              {
                "seed": 2027,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 11903.88768425258,
                "loglik": -5565.162136387065,
                "n_params": 140,
                "converged": true,
                "iterations": 30
              }
            ]
          },
          {
            "k": 4,
            "valid": true,
            "reason": "ok",
            "bic": 11493.056266031444,
            "loglik": -5218.847377328637,
            "n_params": 191,
            "converged": true,
            "iterations": 25,
            "best_seed": 1337,
            "seed_runs": [
              {
                "seed": 42,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 11559.661239147921,
                "loglik": -5252.149863886875,
                "n_params": 191,
                "converged": true,
                "iterations": 12
              },
              {
                "seed": 1337,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 11493.056266031444,
                "loglik": -5218.847377328637,
                "n_params": 191,
                "converged": true,
                "iterations": 25
              },
              {
                "seed": 2027,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 11559.661240157702,
                "loglik": -5252.149864391766,
                "n_params": 191,
                "converged": true,
                "iterations": 12
              }
            ]
          }
        ],
        "seed_stability": {
          "seeds_tested": [
            42,
            1337,
            2027
          ],
          "valid_seed_count": 3,
          "selected_by_seed": [
            {
              "seed": 42,
              "selected_states": 4,
              "bic": 11559.661239147921,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 4,
              "bic": 11493.056266031444,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 4,
              "bic": 11559.661240157702,
              "valid": true,
              "reason": null
            }
          ],
          "selected_state_counts": {
            "4": 3
          },
          "selected_state_share": 1.0,
          "stable": true,
          "majority_support": true
        },
        "rolling_window_stability": {
          "status": "stable",
          "minimum_history_days": 160,
          "windows": [
            {
              "window_days": 126,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 4,
              "bic_by_state": {
                "2": 5859.694767889856,
                "3": 5664.890904194382,
                "4": 5302.955785072856
              },
              "valid": true
            },
            {
              "window_days": 189,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 4,
              "bic_by_state": {
                "2": 9258.443126564143,
                "3": 8785.837342303264,
                "4": 8458.859428211743
              },
              "valid": true
            },
            {
              "window_days": 251,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 4,
              "bic_by_state": {
                "2": 12594.408001377162,
                "3": 11903.887684300036,
                "4": 11559.661239147921
              },
              "valid": true
            }
          ],
          "stable": true
        }
      },
      "robustness_diagnostics": {
        "history_used_days": 251,
        "n_features": 22,
        "candidate_states": [
          2,
          3,
          4
        ],
        "selected_states": 4,
        "bic_delta_vs_next_best": 410.8314180282068,
        "state_count_interpretation": "251 observations allowed the current rule to test up to 4 states; BIC preferred 4 with a 410.83 improvement versus the next best valid state count.",
        "parameter_count": {
          "formula": "k^2 - 1 + 2*k*d",
          "n_parameters": 191,
          "observations_per_parameter": 1.3141361256544504,
          "parameter_pressure_label": "parameter_heavy"
        },
        "state_occupancy": {
          "min_effective_days_required": 7.529999999999999,
          "min_effective_days_observed": 53.11960378678772,
          "passes": true,
          "states": [
            {
              "id": 0,
              "label": "Calm / Liquid",
              "effective_days": 65.04339986500065,
              "pct_time": 0.25913705125498265,
              "passes_min_support": true
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "effective_days": 53.11960378678772,
              "pct_time": 0.21163188759676382,
              "passes_min_support": true
            },
            {
              "id": 2,
              "label": "Stressed / Illiquid",
              "effective_days": 73.47466082526219,
              "pct_time": 0.2927277323715625,
              "passes_min_support": true
            },
            {
              "id": 3,
              "label": "Jump / Tail Shock",
              "effective_days": 59.36233552294942,
              "pct_time": 0.23650332877669092,
              "passes_min_support": true
            }
          ]
        },
        "transition_diagnostics": {
          "self_transition_probabilities": [
            0.9212078955144789,
            0.924021796722571,
            0.9177148663367066,
            0.9151725941893327
          ],
          "expected_duration_days": [
            12.691626991429844,
            13.161669490242765,
            12.152863530512688,
            11.788642956168857
          ],
          "nearly_absorbing_state_ids": [],
          "fast_switching_state_ids": [],
          "warnings": []
        },
        "seed_stability": {
          "seeds_tested": [
            42,
            1337,
            2027
          ],
          "valid_seed_count": 3,
          "selected_by_seed": [
            {
              "seed": 42,
              "selected_states": 4,
              "bic": 11559.661239147921,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 4,
              "bic": 11493.056266031444,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 4,
              "bic": 11559.661240157702,
              "valid": true,
              "reason": null
            }
          ],
          "selected_state_counts": {
            "4": 3
          },
          "selected_state_share": 1.0,
          "stable": true,
          "majority_support": true
        },
        "rolling_window_stability": {
          "status": "stable",
          "minimum_history_days": 160,
          "windows": [
            {
              "window_days": 126,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 4,
              "bic_by_state": {
                "2": 5859.694767889856,
                "3": 5664.890904194382,
                "4": 5302.955785072856
              },
              "valid": true
            },
            {
              "window_days": 189,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 4,
              "bic_by_state": {
                "2": 9258.443126564143,
                "3": 8785.837342303264,
                "4": 8458.859428211743
              },
              "valid": true
            },
            {
              "window_days": 251,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 4,
              "bic_by_state": {
                "2": 12594.408001377162,
                "3": 11903.887684300036,
                "4": 11559.661239147921
              },
              "valid": true
            }
          ],
          "stable": true
        },
        "feature_profile_by_state": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "risk_score": 0.23401810652394733,
            "jump_probability": 0.25185088657881893,
            "jump_rate": 0.10761979994542131,
            "rolling_vol_10d": 0.010424171571491312,
            "downside_vol_10d": 0.00585986072224968,
            "drawdown_21d": 0.045273668419953644,
            "amihud_stress": 0.4157246517708848,
            "spread_rel": 49.15031852424161,
            "spread_ticks": 1.5139291655334768,
            "log_notional": 14.127579952072486,
            "log_trade_count": 5.497463514287458
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "risk_score": 0.5224001666527207,
            "jump_probability": 0.17517282218534694,
            "jump_rate": 6.942407768966805e-13,
            "rolling_vol_10d": 0.01972900574906921,
            "downside_vol_10d": 0.00959992009444703,
            "drawdown_21d": 0.08853356099676846,
            "amihud_stress": 0.4253942000624096,
            "spread_rel": 52.41955475756791,
            "spread_ticks": 1.5832935945762334,
            "log_notional": 14.39188471119825,
            "log_trade_count": 5.684314853465821
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "risk_score": 0.6205951823176518,
            "jump_probability": 0.2828601236547768,
            "jump_rate": 0.1360695302380551,
            "rolling_vol_10d": 0.016949357980099892,
            "downside_vol_10d": 0.009910149101827775,
            "drawdown_21d": 0.06466311310714838,
            "amihud_stress": 0.5264711966128574,
            "spread_rel": 50.61484166931195,
            "spread_ticks": 1.6064968361868,
            "log_notional": 14.30954664734665,
            "log_trade_count": 5.708724182066154
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "risk_score": 0.8059930387796771,
            "jump_probability": 0.301956310277677,
            "jump_rate": 0.15165137383025534,
            "rolling_vol_10d": 0.026216220963375798,
            "downside_vol_10d": 0.012298434007088348,
            "drawdown_21d": 0.05045883269630397,
            "amihud_stress": 0.26724427003075696,
            "spread_rel": 45.71236771411729,
            "spread_ticks": 1.7883187333339639,
            "log_notional": 15.723869892251985,
            "log_trade_count": 6.607592748945466
          }
        ],
        "jump_model_definition": {
          "type": "jump_score_feature_overlay",
          "method_name": "hmm_jump_aware",
          "description": "Jump score enters the HMM feature panel and current jump risk overlay; the likelihood is still diagonal Gaussian, not a full jump-diffusion emission model."
        },
        "probability_basis": {
          "current_state": "filtered_forward_probability",
          "historical_states": "smoothed_forward_backward_probability",
          "lookahead_note": "Current live monitoring uses filtered probabilities; smoothed probabilities are retained for retrospective historical charts."
        }
      },
      "feature_columns": [
        "stock_ret",
        "market_ret",
        "sector_ret",
        "abs_stock_ret",
        "residual_ret",
        "abs_residual_ret",
        "rolling_vol_5d",
        "rolling_vol_10d",
        "rolling_vol_21d",
        "downside_vol_10d",
        "rolling_skew_21d",
        "rolling_kurtosis_21d",
        "drawdown_21d",
        "market_corr_21d",
        "sector_corr_21d",
        "log_notional",
        "log_volume",
        "log_trade_count",
        "amihud_stress",
        "spread_rel",
        "spread_ticks",
        "jump_score"
      ],
      "smoothed_probability_tail": [
        {
          "trade_date": "2026-05-07",
          "state": 1,
          "probabilities": [
            1.1816858319772813e-28,
            1.0,
            3.558447788986044e-107,
            1.1174581443616955e-17
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            4.841065557016841e-30,
            0.9999999999999976,
            2.4488846365747742e-107,
            2.5091509627233648e-15
          ],
          "jump_probability": 0.38876420568580894,
          "jump_score": 1.8565132214344604
        },
        {
          "trade_date": "2026-05-08",
          "state": 0,
          "probabilities": [
            0.9999999860125729,
            4.732234828246455e-12,
            1.3982694945914292e-08,
            1.4167001364430794e-18
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999997649992151,
            1.1551201322129629e-10,
            2.3488526509589063e-07,
            7.764462284119483e-15
          ],
          "jump_probability": 0.14818023125045152,
          "jump_score": 0.729177692319028
        },
        {
          "trade_date": "2026-05-11",
          "state": 0,
          "probabilities": [
            0.99999997159856,
            1.02207379989977e-16,
            2.8401439640699147e-08,
            2.2612433405216866e-16
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999995228993113,
            2.494842446213072e-15,
            4.770994468969877e-07,
            1.2393770665687407e-12
          ],
          "jump_probability": 0.21260882213407825,
          "jump_score": 1.1115032931565831
        },
        {
          "trade_date": "2026-05-12",
          "state": 0,
          "probabilities": [
            0.9999999982912666,
            6.723374802633003e-21,
            1.7087333402449341e-09,
            1.0343658904929609e-20
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999999712959449,
            1.6411503890461496e-19,
            2.8704055112374698e-08,
            5.669331629561308e-17
          ],
          "jump_probability": 0.5521225966067357,
          "jump_score": 2.4319570218213435
        },
        {
          "trade_date": "2026-05-13",
          "state": 0,
          "probabilities": [
            0.9999999998517834,
            2.439650879907571e-19,
            1.4821664137922028e-10,
            4.7911800647367e-22
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999999975101914,
            5.955095783820195e-18,
            2.489808578318828e-09,
            2.626033650087397e-18
          ],
          "jump_probability": 0.14298442786079124,
          "jump_score": 0.6928518602565683
        },
        {
          "trade_date": "2026-05-14",
          "state": 0,
          "probabilities": [
            0.9999999999827021,
            3.8564463011313835e-21,
            1.729799381039512e-11,
            6.69272442476525e-23
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999999997094207,
            9.413439974255e-20,
            2.905793189901748e-10,
            3.6682638834455165e-19
          ],
          "jump_probability": 0.35230127608741935,
          "jump_score": 1.7204878708676636
        },
        {
          "trade_date": "2026-05-15",
          "state": 0,
          "probabilities": [
            0.9999999997861453,
            3.4021296815233873e-19,
            2.1385481588928136e-10,
            3.018003923997872e-22
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999999964075748,
            8.30447008067e-18,
            3.592425239500523e-09,
            1.6541536954612503e-18
          ],
          "jump_probability": 0.14195266099094617,
          "jump_score": 0.6855081365918734
        },
        {
          "trade_date": "2026-05-18",
          "state": 0,
          "probabilities": [
            0.9999999979531864,
            1.7712888920113754e-18,
            2.046813653600495e-09,
            2.8774145901668636e-20
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999999656167218,
            4.323649248794229e-17,
            3.4383278118769934e-08,
            1.5771035259988792e-16
          ],
          "jump_probability": 0.19829997024778834,
          "jump_score": 1.0352577176774462
        },
        {
          "trade_date": "2026-05-19",
          "state": 0,
          "probabilities": [
            0.9999999999599243,
            1.587264795788336e-19,
            4.00758099356702e-11,
            1.0600483110903696e-21
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999999993267932,
            3.8744528316052656e-18,
            6.732068127404332e-10,
            5.809871353065761e-18
          ],
          "jump_probability": 0.1416524529291939,
          "jump_score": 0.6833630078012308
        },
        {
          "trade_date": "2026-05-20",
          "state": 0,
          "probabilities": [
            0.9999999801583357,
            1.7902709446378817e-19,
            1.9841664225415805e-08,
            1.6218628047640885e-20
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999999801583357,
            1.7902709446378817e-19,
            1.9841664225415805e-08,
            1.6218628047640885e-20
          ],
          "jump_probability": 0.5332715626590364,
          "jump_score": 2.3658984425491254
        }
      ]
    }
  },
  "theme": {
    "badges": {
      "liq_section": {
        "text": "Liquidity score: 70.4 — Strong",
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
    "liq_subtitle": "Liquidity is holding up on a six-month view, while today’s lighter volume keeps near-term trading conditions mixed.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent performance is weak relative to the market but broadly in line with peers, with the stock down 5.6% over one month compared with peers at -5.8% and the market at +1.7%.",
    "perf_insight": "The share price has fallen 5.6% over one month, broadly matching peers but lagging the market by 7.3 points. That matters because weaker momentum can weigh on trading conditions even when six-month liquidity remains above the peer median.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Recent moves are being driven mainly by the market, with 66.1% of the current move explained by broader conditions rather than company-specific factors.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly market-driven, accounting for about 66.1% of price changes. Other influences are sector 15.2%, and company-specific 18.7%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 66.1%, sector 15.2%, and company-specific 18.7%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has shifted from market-driven to company-driven over Mar to May."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 66.1%, sector 15.2%, and company-specific 18.7%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "That matters because the tape is being shaped mainly by wider market moves, while today’s average volume is 34.3% below the monthly average.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: price moves are mainly market-led, with 66.1% of the current move explained by broader market conditions.",
      "Monthly change: the pattern has become more mixed over recent months, shifting from market-led in March to more balanced in April and back to a mixed profile in May."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "The market state looks orderly, with a 1 tick spread and bid depth running ahead of ask depth despite lighter activity today.",
    "regime_badge_text": "Calm / Liquid",
    "regime_pie_title": "State Mix",
    "transition_title": "State Transitions",
    "transition_cols": [
      "From \\",
      "Calm / Liquid",
      "Normal / Active",
      "Stressed / Illiquid",
      "Jump / Tail Shock"
    ],
    "transition_note_template": "Rows sum to 100%. Each row shows how states tend to transition across the observed sample.",
    "market_state_strip": [],
    "exec_check_title": "Trading Costs & Market Depth",
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on May 20, 2025 to May 20, 2026 (242 trading days • 109,288 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on the displayed order book.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate displayed depth broadly matches the stronger monthly liquidity read.",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "Immediate execution conditions look balanced, with displayed bid depth at 1.39 times ask depth and the spread at 1 tick. That supports the steadier six-month liquidity picture even with today’s lighter volume.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 20.0% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Displayed liquidity looks balanced in the current session, with a 1 tick spread and stronger bid than ask depth.",
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
    "intraday_insight": "The order book is holding up in the current session, with displayed bid depth at 1.39 times ask depth and the spread at 1 tick. That matters because immediate trading access remains orderly even as average volume sits 34.3% below the monthly average.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Short activity is not a defining feature of the current trading picture.",
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
    "exec_subtitle": "Trading access is holding up relative to peers, while lighter recent volume and weaker price performance keep the overall picture balanced.",
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
        "value": "70.4/100",
        "sub": "Peer median 62.3 (+8.1 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "HK$1.3M",
        "sub": "Peer median HK$869.9K",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "0.51%",
        "sub": "1.51 ticks; peers 1.84%",
        "interp": {
          "text": "Tighter",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity is mixed for the stock’s size. The six-month liquidity score is 70.4, which is 8.1 points above the peer median, so access has been stronger than peers on a sustained view. Recent activity is lighter, with one-day average volume down 34.3% from the one-month average, which leaves the near-term picture less robust than the broader trend. Immediate trading conditions still look orderly, with a 1 tick spread and displayed bid depth 1.39 times ask depth, supporting current execution quality.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "2.675",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "0.37%",
        "note": "1.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "1.39x",
        "note": "Bid depth / ask depth on the displayed order book",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-0.46% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-0.85% with 100.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-2.21% with 64.0% fill.",
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
        "value": "70",
        "suffix": "/100",
        "bar_pct": 70,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Rank 762/2570",
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
        "value": "0.51",
        "suffix": "%",
        "bar_pct": 5,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "0.51% • 1.51 ticks vs peers 1.84%",
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
        "value": "1.3M",
        "value_prefix": "HK$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Peer median HK$869.9K",
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
        "value": "66.1",
        "suffix": "market",
        "bar_pct": 66,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Sector 15.2% • Company 18.7%",
        "interpretation": {
          "text": "Market",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is mixed for the stock’s size, with a six-month liquidity score of 70.4 compared with a peer median of 62.3. That means peer-relative access is better than average, but not decisively strong.",
      "Recent activity is lighter, with one-day average volume down 34.3% from the one-month average. That matters because near-term trading flow is thinner than the recent average.",
      "The current tape remains balanced, with displayed bid depth at 1.39 times ask depth and a 1 tick spread, while the stock is down 5.6% over one month. That means execution conditions are orderly even as price performance trails the market."
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
      "overall": "6M liquidity is strong: score 70.4 vs peer median 62.3 (+8.1 pts). 1D average volume down -34.3% from 1M. Recent flow does not show a clear deterioration from the monthly baseline.",
      "strengths": [
        "6M score 70.4 vs peer median 62.3 (+8.1 pts)."
      ],
      "concerns": [
        "1D average volume down -34.3% from 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: +8.1 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is -19.8%, better than sector, but worse than market, which shows price performance is mixed across comparison groups.",
        "vs_market": "Worse than market: -19.8% vs market 13.6%.",
        "vs_sector": "Better than sector: -19.8% vs sector -22.5%.",
        "vs_peers": "In line with peers: -19.8% vs peers -20.6%."
      },
      "adv": {
        "insight": "ADV is HK$1.3M, better than market, sector, and peers, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: HK$1.3M vs market HK$212.8K.",
        "vs_sector": "Better than sector: HK$1.3M vs sector HK$231.2K.",
        "vs_peers": "Better than peers: HK$1.3M vs peers HK$869.9K."
      },
      "spread": {
        "insight": "Spread is 0.51%, better than market, sector, and peers, which keeps trading costs more competitive than comparable names.",
        "vs_market": "Better than market: 0.51% vs market 2.78%.",
        "vs_sector": "Better than sector: 0.51% vs secto%.",
        "vs_peers": "Better than peers: 0.51% vs peers 1.84%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.13%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.13% vs market 0.08%.",
        "vs_sector": "Better than sector: 0.13% vs sector 0.10%.",
        "vs_peers": "Better than peers: 0.13% vs peers 0.10%."
      },
      "volatility": {
        "insight": "Volatility is 27.46%, better than market, sector, and peers, which suggests day-to-day price swings are more contained than comparable names.",
        "vs_market": "Better than market: 27.46% vs market 60.51%.",
        "vs_sector": "Better than sector: 27.46% vs sector 75.19%.",
        "vs_peers": "Better than peers: 27.46% vs peers 47.39%."
      },
      "trades": {
        "insight": "Trades is 255, better than market, sector, and peers, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 255 vs market 19.",
        "vs_sector": "Better than sector: 255 vs sector 30.",
        "vs_peers": "Better than peers: 255 vs peers 66."
      },
      "amihud": {
        "insight": "Price impact is 6.00e-09, better than market, sector, and peers, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 6.00e-09 vs market 4.73e-08.",
        "vs_sector": "Better than sector: 6.00e-09 vs sector 4.63e-08.",
        "vs_peers": "Better than peers: 6.00e-09 vs peers 1.75e-08."
      }
    },
    "performance": {
      "overall": "Recent returns look weak against the market but broadly aligned with peers, with the stock down 5.6% over one month compared with peers at -5.8% and the market at +1.7%. Liquidity gives a mixed read on that move, because the six-month liquidity score is 70.4 against a peer median of 62.3 while one-day average volume is 34.3% below the monthly average. The driver mix points to a broad market-led move rather than a company-specific break, with market factors explaining 66.1% of the current tape.",
      "conclusion": "This looks more like a broad market-driven move than a company-specific one, with peer-relative returns holding close even as the stock trails the market."
    },
    "drivers": {
      "overall": "The stock is currently moving mainly with the market, with 66.1% of recent price action explained by broader conditions. That matters because day-to-day trading is being shaped more by the external tape than by company-specific news.",
      "beta": "This market-led pattern sits alongside a 1D average volume that is 34.3% below the 1M average. That points to a mixed near-term setup, where broader moves can still dominate even as activity has pulled back from the recent monthly average.",
      "rolling_change": "The monthly pattern has not stayed in one lane. March was still mainly market-driven, April became much more balanced across market, sector, and company factors, and May turned mixed again with company factors taking the largest share."
    },
    "regime": {
      "overall": "The backdrop is broadly steady because the stock is currently in a Calm / Liquid state and that state typically lasts about 12.7 days. That matters because trading conditions are more likely to stay orderly than swing abruptly from day to day.",
      "current": "Current market state is Calm / Liquid. Current-state posterior is >99.9% on a filtered basis. The market has been in this state about 25.9% of the time. Jump risk is 25% on the current read. Based on 251 trading days relative to the 252-day target.",
      "transitions": "This state looks more settled than short-lived because its typical duration is about 12.7 days. The main sign of change is that 1D average volume is 34.3% below the 1M average, so activity is lighter even as the broader state remains calm.",
      "trading_implications": "Trading conditions look mixed for the stock’s size. Over 6M, the liquidity score is 70.4 versus a peer median of 62.3, while 1D average volume is 34.3% below 1M. Displayed bid depth is 1.39x ask depth and the spread is 1 tick. Market factors account for 66.1% of trading. The stock is down 5.6% over 1M, versus peers at -5.8% and the market at +1.7%."
    },
    "execution": {
      "overall": "Displayed liquidity looks balanced right now because bid depth is 1.39x ask depth and the spread is 1 tick. That matters because the book is showing orderly two-way interest at the screen despite a weaker 1D volume print.",
      "concern": "The main watchpoint is lighter recent activity, with 1D average volume down 34.3% from the 1M average. That matters because a balanced top-of-book can still translate into less depth behind the touch when trading interest drops.",
      "peer_context": "The current book supports the stronger medium-term standing, with a 6M liquidity score of 70.4 compared with a peer median of 62.3. That matters because today’s displayed depth does not contradict the stock’s better peer-relative liquidity position."
    },
    "trader_composition": {
      "overall": "By trade count and value, flow looks mainly institution-like.",
      "retail_heavy": "Retail-like activity is present in count but much lighter in value. Retail-like trades make up 30.1% of count but only 6.3% of value, which shows smaller-value participation is not setting the overall tone of trading.",
      "institutional_gap": "The institutional lead is clearer in value than in count. Institution-like trades are only 3.9 points ahead on count but 51.9 points ahead on value relative to retail-like trades, which reinforces that larger-value flow is carrying the tape.",
      "peer_comparison": "Peer trader comparison is available in this report."
    },
    "price_moving": {
      "overall": "The price-moving signal is mixed rather than fully clean. Institution-like flow leads on count and value, but 17.4% of trade count is classified as ambiguous or unclear, which tempers conviction in who is driving moves. The cleaner read is that larger-value trading is more likely to matter for price because institution-like trades represent 58.2% of value. The offset is that the ambiguous share of count leaves part of the tape harder to attribute with confidence.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short-selling data is unavailable for this report.",
      "level": "N/A",
      "correlation": "N/A",
      "trend": "The short trend is not showing a separate change that alters the picture. Recent trading is being shaped more by lower same-day volume and a 1M share price move of -5.6%, broadly in line with peers at -5.8%, so short activity does not stand out as a new driver.",
      "peaks": "N/A"
    },
    "intraday": {
      "overall": "Session split is open 0.9%, continuous 97.0%, and close 1.6%. Current trading concentration score is 0.191.",
      "hhi_interpretation": "A concentration score of 0.191 indicates activity is not heavily concentrated into a narrow part of the session. That matters because liquidity appears available across the main trading window rather than depending on brief bursts.",
      "best_times": "The continuous session is the clearest source of usable liquidity because it carries 97.0% of activity. That makes the middle of the day more representative of normal trading conditions than the open or close.",
      "peer_ranking": "Intraday activity appears well distributed, and the peer ranking in the report tables provides the clearest read on how that pattern compares with similar stocks."
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
        "511",
        "2008",
        "3700",
        "2306",
        "2422",
        "1970",
        "752",
        "1450",
        "2550"
      ],
      "scores": [
        70.38910505836576,
        52.645914396887164,
        65.01945525291829,
        66.26459143968872,
        47.85992217898833,
        55.60311284046693,
        67.54863813229572,
        59.57198443579767,
        71.284046692607
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
        1309530.0,
        231150.0,
        1109142.125,
        2108055.0,
        540540.0,
        250128.5,
        1470130.0,
        630634.6799999999,
        3047690.0
      ],
      "total": 2570
    },
    "market_comparison": {
      "sector_name": "Broadcasting",
      "sector_count": 5,
      "market_count": 2570,
      "company": {
        "volatility": 0.2746393614984155,
        "adv": 1309530.0,
        "spread_pct": 0.005059382440626627,
        "turnover_ratio": 0.0012679057993771363,
        "amihud": 5.9965608288714436e-09,
        "trades": 255.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.7483147301179937,
          "median": 0.605061240008339,
          "min": 0.0,
          "max": 33.69063316055627,
          "p5": 0.22420189997375514,
          "p95": 1.620966664417821,
          "count": 2570
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 55789391.36964397,
          "median": 212763.0,
          "min": 0.0,
          "max": 11892751420.0,
          "p5": 0.0,
          "p95": 221462819.30399984,
          "count": 2570
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.042062614687010925,
          "median": 0.027786432019735404,
          "min": 0.0005759578485903171,
          "max": 0.586235634471959,
          "p5": 0.0014171090838533925,
          "p95": 0.13293266374782126,
          "count": 2570
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0035345008282309082,
          "median": 0.0008306667028089253,
          "min": 0.0,
          "max": 0.18523236964248901,
          "p5": 0.0,
          "p95": 0.014471303919301359,
          "count": 2554
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 6.129067217651611e-07,
          "median": 4.734371574929171e-08,
          "min": 0.0,
          "max": 1.9124298969909754e-05,
          "p5": 5.2975151998027814e-11,
          "p95": 3.1600228288865187e-06,
          "count": 2570
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1018.3235408560312,
          "median": 19.0,
          "min": 0.0,
          "max": 80079.0,
          "p5": 0.0,
          "p95": 5558.874999999999,
          "count": 2570
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.7012489689288843,
          "median": 0.751891805476555,
          "min": 0.2746393614984155,
          "max": 1.1884988575993682,
          "p5": 0.309514427618124,
          "p95": 1.1192391116741196,
          "count": 5
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 576981.0586999999,
          "median": 231150.0,
          "min": 7358.0,
          "max": 1309530.0,
          "p5": 51431.4337,
          "p95": 1269452.425,
          "count": 5
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.0331084980120212,
          "median": 0.025222119979072605,
          "min": 0.005059382440626627,
          "max": 0.09031824861612092,
          "p5": 0.007550659085456766,
          "p95": 0.07773999356479842,
          "count": 5
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0009445669346532986,
          "median": 0.0010273143959540643,
          "min": 0.0003850983428116394,
          "max": 0.0012679057993771363,
          "p5": 0.0004892546942306061,
          "p95": 0.001241651846545145,
          "count": 5
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 3.236863655750971e-07,
          "median": 4.625641084944112e-08,
          "min": 5.9965608288714436e-09,
          "max": 1.499393276330897e-06,
          "p5": 8.334256308502925e-09,
          "p95": 1.2093347293925668e-06,
          "count": 5
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 90.7,
          "median": 29.5,
          "min": 3.0,
          "max": 255.0,
          "p5": 6.0,
          "p95": 233.59999999999997,
          "count": 5
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 1173433.788125,
          "median": 869888.4025,
          "min": 231150.0,
          "max": 3047690.0,
          "p5": 237792.475,
          "p95": 2718817.7499999995,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 83.1875,
          "median": 66.0,
          "min": 18.0,
          "max": 213.5,
          "p5": 20.1,
          "p95": 190.57499999999996,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.5728089447005045,
          "median": 0.4739136500206339,
          "min": 0.21233739979648514,
          "max": 1.4581252494254453,
          "p5": 0.23188223578986386,
          "p95": 1.2109435440433334,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.018536059863825644,
          "median": 0.018399189452430728,
          "min": 0.005452115523775763,
          "max": 0.038686897912735795,
          "p5": 0.007117174804424564,
          "p95": 0.03397422563595367,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 3.725638213927017,
          "median": 3.2977283007244864,
          "min": 1.4444879248658318,
          "max": 9.567169540229884,
          "p5": 1.4653701140017594,
          "p95": 7.810853183605563,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 2.154440884980422e-08,
          "median": 1.753049162337933e-08,
          "min": 4.062245261797817e-09,
          "max": 4.625641084944112e-08,
          "p5": 4.486630340793525e-09,
          "p95": 4.448790566347855e-08,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0014287158520412658,
          "median": 0.0010149222050802628,
          "min": 0.0003130672046827485,
          "max": 0.0037731928969766833,
          "p5": 0.0003957336318725018,
          "p95": 0.0034807848880209187,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": -0.0563380281690139,
        "market": 0.01655570232671688,
        "sector": -0.08511593137657114,
        "peers": -0.05757436061469201
      },
      {
        "horizon": "3M",
        "stock": -0.1572327044025157,
        "market": 0.024009398025444995,
        "sector": -0.15532549302223897,
        "peers": -0.1451886147268151
      },
      {
        "horizon": "6M",
        "stock": -0.197604790419162,
        "market": 0.13602925408451405,
        "sector": -0.22482534735311954,
        "peers": -0.20580621241639774
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
      "share_market": 0.6608071136881171,
      "share_sector": 0.152323716478436,
      "share_idio": 0.186869169833447,
      "beta_market": 0.5730733610462371,
      "beta_sector": 0.21274316216743905,
      "driver_model": {
        "valid": true,
        "model_method": "ols_with_hmm_jump_regimes",
        "regime_method": "hmm_jump_aware",
        "estimation_window_days": 251,
        "reporting_window_days": 63,
        "available_history_days": 251,
        "n_regimes": 4,
        "current_regime": 0,
        "current_regime_label": "Calm / Liquid",
        "current_regime_probability": 0.9999999801583357,
        "current_regime_probability_display": ">99.9%",
        "current_probability_basis": "filtered",
        "historical_probability_basis": "smoothed",
        "current_driver_mix": {
          "market_share": {
            "median": 0.6608071136881171,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "66.1%",
            "display_range": null,
            "display_text": "66.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 66.1,
            "plain_english": "Market explains about 66.1% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.152323716478436,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "15.2%",
            "display_range": null,
            "display_text": "15.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 15.2,
            "plain_english": "Sector explains about 15.2% of price moves in the current state."
          },
          "company_share": {
            "median": 0.186869169833447,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "18.7%",
            "display_range": null,
            "display_text": "18.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 18.7,
            "plain_english": "Company-specific explains about 18.7% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 0.5730733610462371,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.57",
            "display_range": null,
            "display_text": "0.57",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Modest",
            "plain_english": "Modest market link: a 1% market move has lined up with about a 0.57% stock move in the same direction in this state.",
            "value_num": 0.57
          },
          "beta_stock_lag": {
            "median": -0.3065032420913922,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.31",
            "display_range": null,
            "display_text": "-0.31",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -0.31
          },
          "beta_sector": {
            "median": 0.21274316216743905,
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
            "plain_english": "Weak sector link: a 1% sector move has lined up with about a 0.21% stock move in the same direction in this state.",
            "value_num": 0.21
          },
          "beta_market_lag": {
            "median": 0.6871545975209312,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.69",
            "display_range": null,
            "display_text": "0.69",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 0.69
          },
          "beta_sector_lag": {
            "median": -0.13268258319975856,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.13",
            "display_range": null,
            "display_text": "-0.13",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -0.13
          },
          "posterior_source": null,
          "intervals_collapsed": false,
          "confidence_label": "High, limited history",
          "confidence_note": "Based on 251 trading days relative to the 252-day target."
        },
        "rolling_windows": {},
        "monthly_history": [
          {
            "month_key": "2025-05",
            "month_label": "May 2025",
            "month_short_label": "May",
            "period_label": "2025-05-07 to 2025-05-30",
            "n_obs": 18,
            "partial_month": true,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.6405718961520086,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "64.1%",
              "display_range": null,
              "display_text": "64.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 64.1,
              "plain_english": "Company-specific explains about 64.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.15272726365562742,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "15.3%",
                "display_range": null,
                "display_text": "15.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 15.3,
                "plain_english": "Market explains about 15.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.20670084019236393,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.7%",
                "display_range": null,
                "display_text": "20.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 20.7,
                "plain_english": "Sector explains about 20.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6405718961520086,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "64.1%",
                "display_range": null,
                "display_text": "64.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 64.1,
                "plain_english": "Company-specific explains about 64.1% of price moves in the current state."
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
              "median": 0.6737656530501399,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "67.4%",
              "display_range": null,
              "display_text": "67.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 67.4,
              "plain_english": "Company-specific explains about 67.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.10621773254524795,
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
                "plain_english": "Market explains about 10.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.22001661440461207,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "22.0%",
                "display_range": null,
                "display_text": "22.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 22.0,
                "plain_english": "Sector explains about 22.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6737656530501399,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "67.4%",
                "display_range": null,
                "display_text": "67.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 67.4,
                "plain_english": "Company-specific explains about 67.4% of price moves in the current state."
              }
            },
            "summary": "Jun: Still clearly company-driven."
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
              "median": 0.5202330186024126,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.0%",
              "display_range": null,
              "display_text": "52.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 52.0,
              "plain_english": "Company-specific explains about 52.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2090208474033254,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.9%",
                "display_range": null,
                "display_text": "20.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 20.9,
                "plain_english": "Market explains about 20.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.27074613399426206,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.1%",
                "display_range": null,
                "display_text": "27.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 27.1,
                "plain_english": "Sector explains about 27.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5202330186024126,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "52.0%",
                "display_range": null,
                "display_text": "52.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 52.0,
                "plain_english": "Company-specific explains about 52.0% of price moves in the current state."
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
              "median": 0.5645049045662222,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.5%",
              "display_range": null,
              "display_text": "56.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 56.5,
              "plain_english": "Company-specific explains about 56.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3781037520100116,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "37.8%",
                "display_range": null,
                "display_text": "37.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 37.8,
                "plain_english": "Market explains about 37.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.05739134342376616,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "5.7%",
                "display_range": null,
                "display_text": "5.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 5.7,
                "plain_english": "Sector explains about 5.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5645049045662222,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "56.5%",
                "display_range": null,
                "display_text": "56.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 56.5,
                "plain_english": "Company-specific explains about 56.5% of price moves in the current state."
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
              "median": 0.5838094217956722,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "58.4%",
              "display_range": null,
              "display_text": "58.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 58.4,
              "plain_english": "Company-specific explains about 58.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.21649863925868057,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "21.6%",
                "display_range": null,
                "display_text": "21.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 21.6,
                "plain_english": "Market explains about 21.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.19969193894564724,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.0%",
                "display_range": null,
                "display_text": "20.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 20.0,
                "plain_english": "Sector explains about 20.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5838094217956722,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "58.4%",
                "display_range": null,
                "display_text": "58.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 58.4,
                "plain_english": "Company-specific explains about 58.4% of price moves in the current state."
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
              "median": 0.5913096706146111,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "59.1%",
              "display_range": null,
              "display_text": "59.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 59.1,
              "plain_english": "Company-specific explains about 59.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.19813212218230317,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "19.8%",
                "display_range": null,
                "display_text": "19.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 19.8,
                "plain_english": "Market explains about 19.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.21055820720308563,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "21.1%",
                "display_range": null,
                "display_text": "21.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 21.1,
                "plain_english": "Sector explains about 21.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5913096706146111,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "59.1%",
                "display_range": null,
                "display_text": "59.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 59.1,
                "plain_english": "Company-specific explains about 59.1% of price moves in the current state."
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
              "median": 0.3548410992148945,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "35.5%",
              "display_range": null,
              "display_text": "35.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 35.5,
              "plain_english": "Market explains about 35.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3548410992148945,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "35.5%",
                "display_range": null,
                "display_text": "35.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 35.5,
                "plain_english": "Market explains about 35.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.34123420254755993,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "34.1%",
                "display_range": null,
                "display_text": "34.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 34.1,
                "plain_english": "Sector explains about 34.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.30392469823754564,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "30.4%",
                "display_range": null,
                "display_text": "30.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 30.4,
                "plain_english": "Company-specific explains about 30.4% of price moves in the current state."
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
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4355270557723893,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "43.6%",
              "display_range": null,
              "display_text": "43.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 43.6,
              "plain_english": "Company-specific explains about 43.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.22497889603568452,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "22.5%",
                "display_range": null,
                "display_text": "22.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 22.5,
                "plain_english": "Market explains about 22.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3394940481919261,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "33.9%",
                "display_range": null,
                "display_text": "33.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 33.9,
                "plain_english": "Sector explains about 33.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4355270557723893,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "43.6%",
                "display_range": null,
                "display_text": "43.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 43.6,
                "plain_english": "Company-specific explains about 43.6% of price moves in the current state."
              }
            },
            "summary": "Dec: More mixed, though company-driven still has the largest share."
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
              "median": 0.42159773241238724,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.2%",
              "display_range": null,
              "display_text": "42.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 42.2,
              "plain_english": "Company-specific explains about 42.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.24457505809779742,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "24.5%",
                "display_range": null,
                "display_text": "24.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 24.5,
                "plain_english": "Market explains about 24.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.33382720948981526,
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
                "median": 0.42159773241238724,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "42.2%",
                "display_range": null,
                "display_text": "42.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 42.2,
                "plain_english": "Company-specific explains about 42.2% of price moves in the current state."
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
              "median": 0.4225698285659922,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.3%",
              "display_range": null,
              "display_text": "42.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 42.3,
              "plain_english": "Company-specific explains about 42.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2901699850454438,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "29.0%",
                "display_range": null,
                "display_text": "29.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 29.0,
                "plain_english": "Market explains about 29.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.28726018638856393,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "28.7%",
                "display_range": null,
                "display_text": "28.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 28.7,
                "plain_english": "Sector explains about 28.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4225698285659922,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "42.3%",
                "display_range": null,
                "display_text": "42.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 42.3,
                "plain_english": "Company-specific explains about 42.3% of price moves in the current state."
              }
            },
            "summary": "Feb: More mixed, though company-driven still has the largest share."
          },
          {
            "month_key": "2026-03",
            "month_label": "March 2026",
            "month_short_label": "Mar",
            "period_label": "2026-03-02 to 2026-03-31",
            "n_obs": 22,
            "partial_month": false,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4079007515828694,
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
              "plain_english": "Market explains about 40.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.4079007515828694,
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
                "plain_english": "Market explains about 40.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.38524705986142577,
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
                "median": 0.20685218855570472,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.7%",
                "display_range": null,
                "display_text": "20.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 20.7,
                "plain_english": "Company-specific explains about 20.7% of price moves in the current state."
              }
            },
            "summary": "Mar: More mixed, though market-driven still has the largest share."
          },
          {
            "month_key": "2026-04",
            "month_label": "April 2026",
            "month_short_label": "Apr",
            "period_label": "2026-04-01 to 2026-04-30",
            "n_obs": 19,
            "partial_month": false,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.35966917654867525,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.0%",
              "display_range": null,
              "display_text": "36.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 36.0,
              "plain_english": "Market explains about 36.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.35966917654867525,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "36.0%",
                "display_range": null,
                "display_text": "36.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 36.0,
                "plain_english": "Market explains about 36.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.30846685332216117,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "30.8%",
                "display_range": null,
                "display_text": "30.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 30.8,
                "plain_english": "Sector explains about 30.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3318639701291635,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "33.2%",
                "display_range": null,
                "display_text": "33.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 33.2,
                "plain_english": "Company-specific explains about 33.2% of price moves in the current state."
              }
            },
            "summary": "Apr: Much more balanced across company, sector, and market factors."
          },
          {
            "month_key": "2026-05",
            "month_label": "May 2026",
            "month_short_label": "May",
            "period_label": "2026-05-04 to 2026-05-20",
            "n_obs": 13,
            "partial_month": true,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4478614024876759,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.8%",
              "display_range": null,
              "display_text": "44.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
              "kind": "share_pct",
              "value_pct": 44.8,
              "plain_english": "Company-specific explains about 44.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.36970242550326454,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "37.0%",
                "display_range": null,
                "display_text": "37.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
                "kind": "share_pct",
                "value_pct": 37.0,
                "plain_english": "Market explains about 37.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.18243617200905957,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "18.2%",
                "display_range": null,
                "display_text": "18.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
                "kind": "share_pct",
                "value_pct": 18.2,
                "plain_english": "Sector explains about 18.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4478614024876759,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "44.8%",
                "display_range": null,
                "display_text": "44.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
                "kind": "share_pct",
                "value_pct": 44.8,
                "plain_english": "Company-specific explains about 44.8% of price moves in the current state."
              }
            },
            "summary": "May: More mixed, though company-driven still has the largest share."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "pct_time": 0.25913705125498265,
            "expected_duration_days": 12.691626991429844,
            "current_probability": 0.9999999801583357,
            "current_probability_display": ">99.9%",
            "current_probability_basis": "filtered",
            "n_days_effective": 65.04339986500065,
            "volatility": {
              "median": 0.00910718431178384,
              "low": 0.00910718431178384,
              "high": 0.00910718431178384
            },
            "volatility_label": "Calm / Liquid",
            "jump_probability": 0.25185088657881893,
            "jump_rate": 0.10761979994542131,
            "risk_score": 0.23401810652394733,
            "metrics": {
              "rolling_vol_10d": 0.010424171571491312,
              "downside_vol_10d": 0.00585986072224968,
              "drawdown_21d": 0.045273668419953644,
              "amihud_stress": 0.4157246517708848,
              "spread_rel": 49.15031852424161,
              "spread_ticks": 1.5139291655334768,
              "log_notional": 14.127579952072486,
              "log_trade_count": 5.497463514287458
            }
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "pct_time": 0.21163188759676382,
            "expected_duration_days": 13.161669490242765,
            "current_probability": 1.7902709446378817e-19,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 53.11960378678772,
            "volatility": {
              "median": 0.011126061610757831,
              "low": 0.011126061610757831,
              "high": 0.011126061610757831
            },
            "volatility_label": "Normal / Active",
            "jump_probability": 0.17517282218534694,
            "jump_rate": 6.942407768966805e-13,
            "risk_score": 0.5224001666527207,
            "metrics": {
              "rolling_vol_10d": 0.01972900574906921,
              "downside_vol_10d": 0.00959992009444703,
              "drawdown_21d": 0.08853356099676846,
              "amihud_stress": 0.4253942000624096,
              "spread_rel": 52.41955475756791,
              "spread_ticks": 1.5832935945762334,
              "log_notional": 14.39188471119825,
              "log_trade_count": 5.684314853465821
            }
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "pct_time": 0.2927277323715625,
            "expected_duration_days": 12.152863530512688,
            "current_probability": 1.9841664225415805e-08,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 73.47466082526219,
            "volatility": {
              "median": 0.01670190815825701,
              "low": 0.01670190815825701,
              "high": 0.01670190815825701
            },
            "volatility_label": "Stressed / Illiquid",
            "jump_probability": 0.2828601236547768,
            "jump_rate": 0.1360695302380551,
            "risk_score": 0.6205951823176518,
            "metrics": {
              "rolling_vol_10d": 0.016949357980099892,
              "downside_vol_10d": 0.009910149101827775,
              "drawdown_21d": 0.06466311310714838,
              "amihud_stress": 0.5264711966128574,
              "spread_rel": 50.61484166931195,
              "spread_ticks": 1.6064968361868,
              "log_notional": 14.30954664734665,
              "log_trade_count": 5.708724182066154
            }
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "pct_time": 0.23650332877669092,
            "expected_duration_days": 11.788642956168857,
            "current_probability": 1.6218628047640885e-20,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 59.36233552294942,
            "volatility": {
              "median": 0.032636344289874934,
              "low": 0.032636344289874934,
              "high": 0.032636344289874934
            },
            "volatility_label": "Jump / Tail Shock",
            "jump_probability": 0.301956310277677,
            "jump_rate": 0.15165137383025534,
            "risk_score": 0.8059930387796771,
            "metrics": {
              "rolling_vol_10d": 0.026216220963375798,
              "downside_vol_10d": 0.012298434007088348,
              "drawdown_21d": 0.05045883269630397,
              "amihud_stress": 0.26724427003075696,
              "spread_rel": 45.71236771411729,
              "spread_ticks": 1.7883187333339639,
              "log_notional": 15.723869892251985,
              "log_trade_count": 6.607592748945466
            }
          }
        ],
        "transitions": {
          "mean": [
            [
              0.9212078955144789,
              0.0001558035820867842,
              0.047295058305594315,
              0.03134124259784012
            ],
            [
              0.0377395381846141,
              0.924021796722571,
              0.01899395067424869,
              0.019244714418566167
            ],
            [
              0.05483889018093806,
              0.00013584030273212623,
              0.9177148663367066,
              0.027310403179623348
            ],
            [
              0.00016807373141574216,
              0.06767534746549542,
              0.016983984613756213,
              0.9151725941893327
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              59.0,
              0.0,
              3.0,
              2.0
            ],
            [
              2.0,
              49.0,
              1.0,
              1.0
            ],
            [
              4.0,
              0.0,
              68.0,
              2.0
            ],
            [
              0.0,
              4.0,
              1.0,
              54.0
            ]
          ]
        },
        "current_state_is_transition": false,
        "state_probabilities": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "probability": 0.9999999801583357,
            "probability_display": ">99.9%",
            "basis": "filtered"
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "probability": 1.7902709446378817e-19,
            "probability_display": "<0.1%",
            "basis": "filtered"
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "probability": 1.9841664225415805e-08,
            "probability_display": "<0.1%",
            "basis": "filtered"
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "probability": 1.6218628047640885e-20,
            "probability_display": "<0.1%",
            "basis": "filtered"
          }
        ],
        "jump_risk": {
          "current_probability": 0.25185088719409376,
          "current_score": 2.3658984425491254,
          "current_flag": false,
          "jump_threshold_score": 2.5,
          "method": "robust_residual_and_return_jump_overlay",
          "model_definition": "jump_score_feature_overlay"
        },
        "model_selection": {
          "chosen": 4,
          "criterion": "bic_with_min_state_support",
          "bic": 11493.056266031444,
          "loglik": -5218.847377328637,
          "n_params": 191,
          "bic_delta_vs_next_best": 410.8314180282068,
          "candidates": [
            {
              "k": 2,
              "valid": true,
              "reason": "ok",
              "bic": 12594.407983182811,
              "loglik": -6045.79588286091,
              "n_params": 91,
              "converged": true,
              "iterations": 16,
              "best_seed": 2027,
              "seed_runs": [
                {
                  "seed": 42,
                  "k": 2,
                  "valid": true,
                  "reason": "ok",
                  "bic": 12594.408001377162,
                  "loglik": -6045.795891958085,
                  "n_params": 91,
                  "converged": true,
                  "iterations": 15
                },
                {
                  "seed": 1337,
                  "k": 2,
                  "valid": true,
                  "reason": "ok",
                  "bic": 12594.407998436482,
                  "loglik": -6045.795890487745,
                  "n_params": 91,
                  "converged": true,
                  "iterations": 15
                },
                {
                  "seed": 2027,
                  "k": 2,
                  "valid": true,
                  "reason": "ok",
                  "bic": 12594.407983182811,
                  "loglik": -6045.79588286091,
                  "n_params": 91,
                  "converged": true,
                  "iterations": 16
                }
              ]
            },
            {
              "k": 3,
              "valid": true,
              "reason": "ok",
              "bic": 11903.887684059651,
              "loglik": -5565.162136290601,
              "n_params": 140,
              "converged": true,
              "iterations": 26,
              "best_seed": 1337,
              "seed_runs": [
                {
                  "seed": 42,
                  "k": 3,
                  "valid": true,
                  "reason": "ok",
                  "bic": 11903.887684300036,
                  "loglik": -5565.162136410793,
                  "n_params": 140,
                  "converged": true,
                  "iterations": 26
                },
                {
                  "seed": 1337,
                  "k": 3,
                  "valid": true,
                  "reason": "ok",
                  "bic": 11903.887684059651,
                  "loglik": -5565.162136290601,
                  "n_params": 140,
                  "converged": true,
                  "iterations": 26
                },
                {
                  "seed": 2027,
                  "k": 3,
                  "valid": true,
                  "reason": "ok",
                  "bic": 11903.88768425258,
                  "loglik": -5565.162136387065,
                  "n_params": 140,
                  "converged": true,
                  "iterations": 30
                }
              ]
            },
            {
              "k": 4,
              "valid": true,
              "reason": "ok",
              "bic": 11493.056266031444,
              "loglik": -5218.847377328637,
              "n_params": 191,
              "converged": true,
              "iterations": 25,
              "best_seed": 1337,
              "seed_runs": [
                {
                  "seed": 42,
                  "k": 4,
                  "valid": true,
                  "reason": "ok",
                  "bic": 11559.661239147921,
                  "loglik": -5252.149863886875,
                  "n_params": 191,
                  "converged": true,
                  "iterations": 12
                },
                {
                  "seed": 1337,
                  "k": 4,
                  "valid": true,
                  "reason": "ok",
                  "bic": 11493.056266031444,
                  "loglik": -5218.847377328637,
                  "n_params": 191,
                  "converged": true,
                  "iterations": 25
                },
                {
                  "seed": 2027,
                  "k": 4,
                  "valid": true,
                  "reason": "ok",
                  "bic": 11559.661240157702,
                  "loglik": -5252.149864391766,
                  "n_params": 191,
                  "converged": true,
                  "iterations": 12
                }
              ]
            }
          ],
          "seed_stability": {
            "seeds_tested": [
              42,
              1337,
              2027
            ],
            "valid_seed_count": 3,
            "selected_by_seed": [
              {
                "seed": 42,
                "selected_states": 4,
                "bic": 11559.661239147921,
                "valid": true,
                "reason": null
              },
              {
                "seed": 1337,
                "selected_states": 4,
                "bic": 11493.056266031444,
                "valid": true,
                "reason": null
              },
              {
                "seed": 2027,
                "selected_states": 4,
                "bic": 11559.661240157702,
                "valid": true,
                "reason": null
              }
            ],
            "selected_state_counts": {
              "4": 3
            },
            "selected_state_share": 1.0,
            "stable": true,
            "majority_support": true
          },
          "rolling_window_stability": {
            "status": "stable",
            "minimum_history_days": 160,
            "windows": [
              {
                "window_days": 126,
                "candidate_states": [
                  2,
                  3,
                  4
                ],
                "selected_states": 4,
                "bic_by_state": {
                  "2": 5859.694767889856,
                  "3": 5664.890904194382,
                  "4": 5302.955785072856
                },
                "valid": true
              },
              {
                "window_days": 189,
                "candidate_states": [
                  2,
                  3,
                  4
                ],
                "selected_states": 4,
                "bic_by_state": {
                  "2": 9258.443126564143,
                  "3": 8785.837342303264,
                  "4": 8458.859428211743
                },
                "valid": true
              },
              {
                "window_days": 251,
                "candidate_states": [
                  2,
                  3,
                  4
                ],
                "selected_states": 4,
                "bic_by_state": {
                  "2": 12594.408001377162,
                  "3": 11903.887684300036,
                  "4": 11559.661239147921
                },
                "valid": true
              }
            ],
            "stable": true
          }
        },
        "robustness_diagnostics": {
          "history_used_days": 251,
          "n_features": 22,
          "candidate_states": [
            2,
            3,
            4
          ],
          "selected_states": 4,
          "bic_delta_vs_next_best": 410.8314180282068,
          "state_count_interpretation": "251 observations allowed the current rule to test up to 4 states; BIC preferred 4 with a 410.83 improvement versus the next best valid state count.",
          "parameter_count": {
            "formula": "k^2 - 1 + 2*k*d",
            "n_parameters": 191,
            "observations_per_parameter": 1.3141361256544504,
            "parameter_pressure_label": "parameter_heavy"
          },
          "state_occupancy": {
            "min_effective_days_required": 7.529999999999999,
            "min_effective_days_observed": 53.11960378678772,
            "passes": true,
            "states": [
              {
                "id": 0,
                "label": "Calm / Liquid",
                "effective_days": 65.04339986500065,
                "pct_time": 0.25913705125498265,
                "passes_min_support": true
              },
              {
                "id": 1,
                "label": "Normal / Active",
                "effective_days": 53.11960378678772,
                "pct_time": 0.21163188759676382,
                "passes_min_support": true
              },
              {
                "id": 2,
                "label": "Stressed / Illiquid",
                "effective_days": 73.47466082526219,
                "pct_time": 0.2927277323715625,
                "passes_min_support": true
              },
              {
                "id": 3,
                "label": "Jump / Tail Shock",
                "effective_days": 59.36233552294942,
                "pct_time": 0.23650332877669092,
                "passes_min_support": true
              }
            ]
          },
          "transition_diagnostics": {
            "self_transition_probabilities": [
              0.9212078955144789,
              0.924021796722571,
              0.9177148663367066,
              0.9151725941893327
            ],
            "expected_duration_days": [
              12.691626991429844,
              13.161669490242765,
              12.152863530512688,
              11.788642956168857
            ],
            "nearly_absorbing_state_ids": [],
            "fast_switching_state_ids": [],
            "warnings": []
          },
          "seed_stability": {
            "seeds_tested": [
              42,
              1337,
              2027
            ],
            "valid_seed_count": 3,
            "selected_by_seed": [
              {
                "seed": 42,
                "selected_states": 4,
                "bic": 11559.661239147921,
                "valid": true,
                "reason": null
              },
              {
                "seed": 1337,
                "selected_states": 4,
                "bic": 11493.056266031444,
                "valid": true,
                "reason": null
              },
              {
                "seed": 2027,
                "selected_states": 4,
                "bic": 11559.661240157702,
                "valid": true,
                "reason": null
              }
            ],
            "selected_state_counts": {
              "4": 3
            },
            "selected_state_share": 1.0,
            "stable": true,
            "majority_support": true
          },
          "rolling_window_stability": {
            "status": "stable",
            "minimum_history_days": 160,
            "windows": [
              {
                "window_days": 126,
                "candidate_states": [
                  2,
                  3,
                  4
                ],
                "selected_states": 4,
                "bic_by_state": {
                  "2": 5859.694767889856,
                  "3": 5664.890904194382,
                  "4": 5302.955785072856
                },
                "valid": true
              },
              {
                "window_days": 189,
                "candidate_states": [
                  2,
                  3,
                  4
                ],
                "selected_states": 4,
                "bic_by_state": {
                  "2": 9258.443126564143,
                  "3": 8785.837342303264,
                  "4": 8458.859428211743
                },
                "valid": true
              },
              {
                "window_days": 251,
                "candidate_states": [
                  2,
                  3,
                  4
                ],
                "selected_states": 4,
                "bic_by_state": {
                  "2": 12594.408001377162,
                  "3": 11903.887684300036,
                  "4": 11559.661239147921
                },
                "valid": true
              }
            ],
            "stable": true
          },
          "feature_profile_by_state": [
            {
              "id": 0,
              "label": "Calm / Liquid",
              "risk_score": 0.23401810652394733,
              "jump_probability": 0.25185088657881893,
              "jump_rate": 0.10761979994542131,
              "rolling_vol_10d": 0.010424171571491312,
              "downside_vol_10d": 0.00585986072224968,
              "drawdown_21d": 0.045273668419953644,
              "amihud_stress": 0.4157246517708848,
              "spread_rel": 49.15031852424161,
              "spread_ticks": 1.5139291655334768,
              "log_notional": 14.127579952072486,
              "log_trade_count": 5.497463514287458
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "risk_score": 0.5224001666527207,
              "jump_probability": 0.17517282218534694,
              "jump_rate": 6.942407768966805e-13,
              "rolling_vol_10d": 0.01972900574906921,
              "downside_vol_10d": 0.00959992009444703,
              "drawdown_21d": 0.08853356099676846,
              "amihud_stress": 0.4253942000624096,
              "spread_rel": 52.41955475756791,
              "spread_ticks": 1.5832935945762334,
              "log_notional": 14.39188471119825,
              "log_trade_count": 5.684314853465821
            },
            {
              "id": 2,
              "label": "Stressed / Illiquid",
              "risk_score": 0.6205951823176518,
              "jump_probability": 0.2828601236547768,
              "jump_rate": 0.1360695302380551,
              "rolling_vol_10d": 0.016949357980099892,
              "downside_vol_10d": 0.009910149101827775,
              "drawdown_21d": 0.06466311310714838,
              "amihud_stress": 0.5264711966128574,
              "spread_rel": 50.61484166931195,
              "spread_ticks": 1.6064968361868,
              "log_notional": 14.30954664734665,
              "log_trade_count": 5.708724182066154
            },
            {
              "id": 3,
              "label": "Jump / Tail Shock",
              "risk_score": 0.8059930387796771,
              "jump_probability": 0.301956310277677,
              "jump_rate": 0.15165137383025534,
              "rolling_vol_10d": 0.026216220963375798,
              "downside_vol_10d": 0.012298434007088348,
              "drawdown_21d": 0.05045883269630397,
              "amihud_stress": 0.26724427003075696,
              "spread_rel": 45.71236771411729,
              "spread_ticks": 1.7883187333339639,
              "log_notional": 15.723869892251985,
              "log_trade_count": 6.607592748945466
            }
          ],
          "jump_model_definition": {
            "type": "jump_score_feature_overlay",
            "method_name": "hmm_jump_aware",
            "description": "Jump score enters the HMM feature panel and current jump risk overlay; the likelihood is still diagonal Gaussian, not a full jump-diffusion emission model."
          },
          "probability_basis": {
            "current_state": "filtered_forward_probability",
            "historical_states": "smoothed_forward_backward_probability",
            "lookahead_note": "Current live monitoring uses filtered probabilities; smoothed probabilities are retained for retrospective historical charts."
          }
        },
        "feature_columns": [
          "stock_ret",
          "market_ret",
          "sector_ret",
          "abs_stock_ret",
          "residual_ret",
          "abs_residual_ret",
          "rolling_vol_5d",
          "rolling_vol_10d",
          "rolling_vol_21d",
          "downside_vol_10d",
          "rolling_skew_21d",
          "rolling_kurtosis_21d",
          "drawdown_21d",
          "market_corr_21d",
          "sector_corr_21d",
          "log_notional",
          "log_volume",
          "log_trade_count",
          "amihud_stress",
          "spread_rel",
          "spread_ticks",
          "jump_score"
        ],
        "smoothed_probability_tail": [
          {
            "trade_date": "2026-05-07",
            "state": 1,
            "probabilities": [
              1.1816858319772813e-28,
              1.0,
              3.558447788986044e-107,
              1.1174581443616955e-17
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              4.841065557016841e-30,
              0.9999999999999976,
              2.4488846365747742e-107,
              2.5091509627233648e-15
            ],
            "jump_probability": 0.38876420568580894,
            "jump_score": 1.8565132214344604
          },
          {
            "trade_date": "2026-05-08",
            "state": 0,
            "probabilities": [
              0.9999999860125729,
              4.732234828246455e-12,
              1.3982694945914292e-08,
              1.4167001364430794e-18
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.9999997649992151,
              1.1551201322129629e-10,
              2.3488526509589063e-07,
              7.764462284119483e-15
            ],
            "jump_probability": 0.14818023125045152,
            "jump_score": 0.729177692319028
          },
          {
            "trade_date": "2026-05-11",
            "state": 0,
            "probabilities": [
              0.99999997159856,
              1.02207379989977e-16,
              2.8401439640699147e-08,
              2.2612433405216866e-16
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.9999995228993113,
              2.494842446213072e-15,
              4.770994468969877e-07,
              1.2393770665687407e-12
            ],
            "jump_probability": 0.21260882213407825,
            "jump_score": 1.1115032931565831
          },
          {
            "trade_date": "2026-05-12",
            "state": 0,
            "probabilities": [
              0.9999999982912666,
              6.723374802633003e-21,
              1.7087333402449341e-09,
              1.0343658904929609e-20
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.9999999712959449,
              1.6411503890461496e-19,
              2.8704055112374698e-08,
              5.669331629561308e-17
            ],
            "jump_probability": 0.5521225966067357,
            "jump_score": 2.4319570218213435
          },
          {
            "trade_date": "2026-05-13",
            "state": 0,
            "probabilities": [
              0.9999999998517834,
              2.439650879907571e-19,
              1.4821664137922028e-10,
              4.7911800647367e-22
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.9999999975101914,
              5.955095783820195e-18,
              2.489808578318828e-09,
              2.626033650087397e-18
            ],
            "jump_probability": 0.14298442786079124,
            "jump_score": 0.6928518602565683
          },
          {
            "trade_date": "2026-05-14",
            "state": 0,
            "probabilities": [
              0.9999999999827021,
              3.8564463011313835e-21,
              1.729799381039512e-11,
              6.69272442476525e-23
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.9999999997094207,
              9.413439974255e-20,
              2.905793189901748e-10,
              3.6682638834455165e-19
            ],
            "jump_probability": 0.35230127608741935,
            "jump_score": 1.7204878708676636
          },
          {
            "trade_date": "2026-05-15",
            "state": 0,
            "probabilities": [
              0.9999999997861453,
              3.4021296815233873e-19,
              2.1385481588928136e-10,
              3.018003923997872e-22
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.9999999964075748,
              8.30447008067e-18,
              3.592425239500523e-09,
              1.6541536954612503e-18
            ],
            "jump_probability": 0.14195266099094617,
            "jump_score": 0.6855081365918734
          },
          {
            "trade_date": "2026-05-18",
            "state": 0,
            "probabilities": [
              0.9999999979531864,
              1.7712888920113754e-18,
              2.046813653600495e-09,
              2.8774145901668636e-20
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.9999999656167218,
              4.323649248794229e-17,
              3.4383278118769934e-08,
              1.5771035259988792e-16
            ],
            "jump_probability": 0.19829997024778834,
            "jump_score": 1.0352577176774462
          },
          {
            "trade_date": "2026-05-19",
            "state": 0,
            "probabilities": [
              0.9999999999599243,
              1.587264795788336e-19,
              4.00758099356702e-11,
              1.0600483110903696e-21
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.9999999993267932,
              3.8744528316052656e-18,
              6.732068127404332e-10,
              5.809871353065761e-18
            ],
            "jump_probability": 0.1416524529291939,
            "jump_score": 0.6833630078012308
          },
          {
            "trade_date": "2026-05-20",
            "state": 0,
            "probabilities": [
              0.9999999801583357,
              1.7902709446378817e-19,
              1.9841664225415805e-08,
              1.6218628047640885e-20
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.9999999801583357,
              1.7902709446378817e-19,
              1.9841664225415805e-08,
              1.6218628047640885e-20
            ],
            "jump_probability": 0.5332715626590364,
            "jump_score": 2.3658984425491254
          }
        ],
        "methodology": {
          "estimation_window_days": 251,
          "reporting_window_days": 63,
          "current_mix_method": "ols_last_5d",
          "monthly_history_method": "ols_per_month",
          "regime_inference": "hmm_jump_aware",
          "regime_feature_stack": "returns_volatility_shape_liquidity_activity_jump_score",
          "regime_scaling": "robust_median_iqr",
          "regime_model_selection": "bic_with_min_state_support",
          "jump_component": "robust_residual_and_return_jump_overlay",
          "jump_model_definition": "jump_score_feature_overlay_not_full_jump_diffusion",
          "current_state_probability_basis": "filtered",
          "historical_state_probability_basis": "smoothed",
          "distribution": "gaussian",
          "history_limited": true,
          "current_driver_mix_basis": "ols_recent_window",
          "sector_proxy_equals_market": false
        },
        "client_read": {
          "market_link_display": "0.57",
          "sector_link_display": "0.21",
          "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.57% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "Weak sector link. A 1% sector move has lined up with about a 0.21% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "-0.31",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "Calm / Liquid",
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "driver_share_pct": 66.1,
          "driver_share_display": "66.1%",
          "confidence_label": "High, limited history",
          "confidence_pct": 99.9,
          "confidence_display": ">99.9%",
          "probability_basis": "filtered",
          "display_confidence_pct": null,
          "confidence_note": "Based on 251 trading days relative to the 252-day target.",
          "history_days": 251,
          "history_limited": true,
          "volatility_label": "Calm / Liquid",
          "jump_risk_label": "Contained",
          "jump_risk_probability": 25.2,
          "jump_risk_score": 2.37,
          "jump_risk_note": "Jump risk is contained based on recent residual and return shocks.",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.9212078955144789,
          "effective_days": 65.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 12.7 days.",
          "expected_duration_days": 12.7
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
          "month_key": "2025-05",
          "month_label": "May 2025",
          "month_short_label": "May",
          "period_label": "2025-05-07 to 2025-05-30",
          "n_obs": 18,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "May: Still clearly company-driven.",
          "share_market": 0.15272726365562742,
          "share_sector": 0.20670084019236393,
          "share_company": 0.6405718961520086,
          "share_market_display": "15.3%",
          "share_sector_display": "20.7%",
          "share_company_display": "64.1%",
          "dominant_share_display": "64.1%"
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
          "share_market": 0.10621773254524795,
          "share_sector": 0.22001661440461207,
          "share_company": 0.6737656530501399,
          "share_market_display": "10.6%",
          "share_sector_display": "22.0%",
          "share_company_display": "67.4%",
          "dominant_share_display": "67.4%"
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
          "share_market": 0.2090208474033254,
          "share_sector": 0.27074613399426206,
          "share_company": 0.5202330186024126,
          "share_market_display": "20.9%",
          "share_sector_display": "27.1%",
          "share_company_display": "52.0%",
          "dominant_share_display": "52.0%"
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
          "share_market": 0.3781037520100116,
          "share_sector": 0.05739134342376616,
          "share_company": 0.5645049045662222,
          "share_market_display": "37.8%",
          "share_sector_display": "5.7%",
          "share_company_display": "56.5%",
          "dominant_share_display": "56.5%"
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
          "share_market": 0.21649863925868057,
          "share_sector": 0.19969193894564724,
          "share_company": 0.5838094217956722,
          "share_market_display": "21.6%",
          "share_sector_display": "20.0%",
          "share_company_display": "58.4%",
          "dominant_share_display": "58.4%"
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
          "share_market": 0.19813212218230317,
          "share_sector": 0.21055820720308563,
          "share_company": 0.5913096706146111,
          "share_market_display": "19.8%",
          "share_sector_display": "21.1%",
          "share_company_display": "59.1%",
          "dominant_share_display": "59.1%"
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
          "summary": "Nov: Much more balanced across company, sector, and market factors.",
          "share_market": 0.3548410992148945,
          "share_sector": 0.34123420254755993,
          "share_company": 0.30392469823754564,
          "share_market_display": "35.5%",
          "share_sector_display": "34.1%",
          "share_company_display": "30.4%",
          "dominant_share_display": "35.5%"
        },
        {
          "month_key": "2025-12",
          "month_label": "December 2025",
          "month_short_label": "Dec",
          "period_label": "2025-12-01 to 2025-12-31",
          "n_obs": 15,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Dec: More mixed, though company-driven still has the largest share.",
          "share_market": 0.22497889603568452,
          "share_sector": 0.3394940481919261,
          "share_company": 0.4355270557723893,
          "share_market_display": "22.5%",
          "share_sector_display": "33.9%",
          "share_company_display": "43.6%",
          "dominant_share_display": "43.6%"
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
          "share_market": 0.24457505809779742,
          "share_sector": 0.33382720948981526,
          "share_company": 0.42159773241238724,
          "share_market_display": "24.5%",
          "share_sector_display": "33.4%",
          "share_company_display": "42.2%",
          "dominant_share_display": "42.2%"
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
          "summary": "Feb: More mixed, though company-driven still has the largest share.",
          "share_market": 0.2901699850454438,
          "share_sector": 0.28726018638856393,
          "share_company": 0.4225698285659922,
          "share_market_display": "29.0%",
          "share_sector_display": "28.7%",
          "share_company_display": "42.3%",
          "dominant_share_display": "42.3%"
        },
        {
          "month_key": "2026-03",
          "month_label": "March 2026",
          "month_short_label": "Mar",
          "period_label": "2026-03-02 to 2026-03-31",
          "n_obs": 22,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Mar: More mixed, though market-driven still has the largest share.",
          "share_market": 0.4079007515828694,
          "share_sector": 0.38524705986142577,
          "share_company": 0.20685218855570472,
          "share_market_display": "40.8%",
          "share_sector_display": "38.5%",
          "share_company_display": "20.7%",
          "dominant_share_display": "40.8%"
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-30",
          "n_obs": 19,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Apr: Much more balanced across company, sector, and market factors.",
          "share_market": 0.35966917654867525,
          "share_sector": 0.30846685332216117,
          "share_company": 0.3318639701291635,
          "share_market_display": "36.0%",
          "share_sector_display": "30.8%",
          "share_company_display": "33.2%",
          "dominant_share_display": "36.0%"
        },
        {
          "month_key": "2026-05",
          "month_label": "May 2026",
          "month_short_label": "May",
          "period_label": "2026-05-04 to 2026-05-20",
          "n_obs": 13,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "May: More mixed, though company-driven still has the largest share.",
          "share_market": 0.36970242550326454,
          "share_sector": 0.18243617200905957,
          "share_company": 0.4478614024876759,
          "share_market_display": "37.0%",
          "share_sector_display": "18.2%",
          "share_company_display": "44.8%",
          "dominant_share_display": "44.8%"
        }
      ],
      "regime": {
        "valid": true,
        "regime_method": "hmm_jump_aware",
        "n_regimes": 4,
        "current_regime_label": "Calm / Liquid",
        "current_regime_probability": 0.9999999801583357,
        "labels": [
          "Calm / Liquid",
          "Normal / Active",
          "Stressed / Illiquid",
          "Jump / Tail Shock"
        ],
        "pct_time": [
          0.25913705125498265,
          0.21163188759676382,
          0.2927277323715625,
          0.23650332877669092
        ],
        "current_regime": 0,
        "regimes": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "pct_time": 0.25913705125498265,
            "expected_duration_days": 12.691626991429844,
            "current_probability": 0.9999999801583357,
            "current_probability_display": ">99.9%",
            "current_probability_basis": "filtered",
            "n_days_effective": 65.04339986500065,
            "volatility": {
              "median": 0.00910718431178384,
              "low": 0.00910718431178384,
              "high": 0.00910718431178384
            },
            "volatility_label": "Calm / Liquid",
            "jump_probability": 0.25185088657881893,
            "jump_rate": 0.10761979994542131,
            "risk_score": 0.23401810652394733,
            "metrics": {
              "rolling_vol_10d": 0.010424171571491312,
              "downside_vol_10d": 0.00585986072224968,
              "drawdown_21d": 0.045273668419953644,
              "amihud_stress": 0.4157246517708848,
              "spread_rel": 49.15031852424161,
              "spread_ticks": 1.5139291655334768,
              "log_notional": 14.127579952072486,
              "log_trade_count": 5.497463514287458
            }
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "pct_time": 0.21163188759676382,
            "expected_duration_days": 13.161669490242765,
            "current_probability": 1.7902709446378817e-19,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 53.11960378678772,
            "volatility": {
              "median": 0.011126061610757831,
              "low": 0.011126061610757831,
              "high": 0.011126061610757831
            },
            "volatility_label": "Normal / Active",
            "jump_probability": 0.17517282218534694,
            "jump_rate": 6.942407768966805e-13,
            "risk_score": 0.5224001666527207,
            "metrics": {
              "rolling_vol_10d": 0.01972900574906921,
              "downside_vol_10d": 0.00959992009444703,
              "drawdown_21d": 0.08853356099676846,
              "amihud_stress": 0.4253942000624096,
              "spread_rel": 52.41955475756791,
              "spread_ticks": 1.5832935945762334,
              "log_notional": 14.39188471119825,
              "log_trade_count": 5.684314853465821
            }
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "pct_time": 0.2927277323715625,
            "expected_duration_days": 12.152863530512688,
            "current_probability": 1.9841664225415805e-08,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 73.47466082526219,
            "volatility": {
              "median": 0.01670190815825701,
              "low": 0.01670190815825701,
              "high": 0.01670190815825701
            },
            "volatility_label": "Stressed / Illiquid",
            "jump_probability": 0.2828601236547768,
            "jump_rate": 0.1360695302380551,
            "risk_score": 0.6205951823176518,
            "metrics": {
              "rolling_vol_10d": 0.016949357980099892,
              "downside_vol_10d": 0.009910149101827775,
              "drawdown_21d": 0.06466311310714838,
              "amihud_stress": 0.5264711966128574,
              "spread_rel": 50.61484166931195,
              "spread_ticks": 1.6064968361868,
              "log_notional": 14.30954664734665,
              "log_trade_count": 5.708724182066154
            }
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "pct_time": 0.23650332877669092,
            "expected_duration_days": 11.788642956168857,
            "current_probability": 1.6218628047640885e-20,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 59.36233552294942,
            "volatility": {
              "median": 0.032636344289874934,
              "low": 0.032636344289874934,
              "high": 0.032636344289874934
            },
            "volatility_label": "Jump / Tail Shock",
            "jump_probability": 0.301956310277677,
            "jump_rate": 0.15165137383025534,
            "risk_score": 0.8059930387796771,
            "metrics": {
              "rolling_vol_10d": 0.026216220963375798,
              "downside_vol_10d": 0.012298434007088348,
              "drawdown_21d": 0.05045883269630397,
              "amihud_stress": 0.26724427003075696,
              "spread_rel": 45.71236771411729,
              "spread_ticks": 1.7883187333339639,
              "log_notional": 15.723869892251985,
              "log_trade_count": 6.607592748945466
            }
          }
        ],
        "transitions": [
          [
            0.9212078955144789,
            0.0001558035820867842,
            0.047295058305594315,
            0.03134124259784012
          ],
          [
            0.0377395381846141,
            0.924021796722571,
            0.01899395067424869,
            0.019244714418566167
          ],
          [
            0.05483889018093806,
            0.00013584030273212623,
            0.9177148663367066,
            0.027310403179623348
          ],
          [
            0.00016807373141574216,
            0.06767534746549542,
            0.016983984613756213,
            0.9151725941893327
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 2.67,
          "quantity": 9900.0,
          "value": 26433.0
        },
        {
          "level": 2,
          "price": 2.66,
          "quantity": 144800.0,
          "value": 385168.0
        },
        {
          "level": 3,
          "price": 2.65,
          "quantity": 182300.0,
          "value": 483095.0
        },
        {
          "level": 4,
          "price": 2.64,
          "quantity": 3800.0,
          "value": 10032.0
        },
        {
          "level": 5,
          "price": 2.63,
          "quantity": 34500.0,
          "value": 90735.0
        },
        {
          "level": 6,
          "price": 2.62,
          "quantity": 2600.0,
          "value": 6812.0
        },
        {
          "level": 7,
          "price": 2.61,
          "quantity": 13400.0,
          "value": 34974.0
        },
        {
          "level": 8,
          "price": 2.6,
          "quantity": 119100.0,
          "value": 309660.0
        },
        {
          "level": 9,
          "price": 2.57,
          "quantity": 500.0,
          "value": 1285.0
        },
        {
          "level": 10,
          "price": 2.53,
          "quantity": 33400.0,
          "value": 84502.0
        },
        {
          "level": 11,
          "price": 2.52,
          "quantity": 500.0,
          "value": 1260.0
        },
        {
          "level": 12,
          "price": 2.5,
          "quantity": 27000.0,
          "value": 67500.0
        },
        {
          "level": 13,
          "price": 2.48,
          "quantity": 36400.0,
          "value": 90272.0
        },
        {
          "level": 14,
          "price": 2.42,
          "quantity": 500.0,
          "value": 1210.0
        },
        {
          "level": 15,
          "price": 2.4,
          "quantity": 2000.0,
          "value": 4800.0
        },
        {
          "level": 16,
          "price": 2.36,
          "quantity": 800.0,
          "value": 1888.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 2.68,
          "quantity": 8000.0,
          "value": 21440.0
        },
        {
          "level": 2,
          "price": 2.69,
          "quantity": 5600.0,
          "value": 15064.0
        },
        {
          "level": 3,
          "price": 2.7,
          "quantity": 2400.0,
          "value": 6480.0
        },
        {
          "level": 4,
          "price": 2.71,
          "quantity": 6600.0,
          "value": 17886.0
        },
        {
          "level": 5,
          "price": 2.72,
          "quantity": 2600.0,
          "value": 7072.000000000001
        },
        {
          "level": 6,
          "price": 2.73,
          "quantity": 3000.0,
          "value": 8190.0
        },
        {
          "level": 7,
          "price": 2.74,
          "quantity": 8000.0,
          "value": 21920.0
        },
        {
          "level": 8,
          "price": 2.75,
          "quantity": 21000.0,
          "value": 57750.0
        },
        {
          "level": 9,
          "price": 2.76,
          "quantity": 9000.0,
          "value": 24839.999999999996
        },
        {
          "level": 10,
          "price": 2.77,
          "quantity": 14600.0,
          "value": 40442.0
        },
        {
          "level": 11,
          "price": 2.78,
          "quantity": 11800.0,
          "value": 32804.0
        },
        {
          "level": 12,
          "price": 2.79,
          "quantity": 25800.0,
          "value": 71982.0
        },
        {
          "level": 13,
          "price": 2.8,
          "quantity": 20000.0,
          "value": 56000.0
        },
        {
          "level": 14,
          "price": 2.81,
          "quantity": 10000.0,
          "value": 28100.0
        },
        {
          "level": 15,
          "price": 2.82,
          "quantity": 2200.0,
          "value": 6204.0
        },
        {
          "level": 16,
          "price": 2.84,
          "quantity": 10000.0,
          "value": 28400.0
        },
        {
          "level": 17,
          "price": 2.88,
          "quantity": 5400.0,
          "value": 15552.0
        },
        {
          "level": 18,
          "price": 2.89,
          "quantity": 12000.0,
          "value": 34680.0
        },
        {
          "level": 19,
          "price": 2.94,
          "quantity": 60000.0,
          "value": 176400.0
        },
        {
          "level": 20,
          "price": 2.96,
          "quantity": 20000.0,
          "value": 59200.0
        },
        {
          "level": 21,
          "price": 2.98,
          "quantity": 3000.0,
          "value": 8940.0
        },
        {
          "level": 22,
          "price": 2.99,
          "quantity": 3000.0,
          "value": 8970.0
        },
        {
          "level": 23,
          "price": 3.0,
          "quantity": 115900.0,
          "value": 347700.0
        },
        {
          "level": 24,
          "price": 3.02,
          "quantity": 10000.0,
          "value": 30200.0
        },
        {
          "level": 25,
          "price": 3.05,
          "quantity": 7000.0,
          "value": 21350.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-05-20 07:59:59.307000000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XHKG",
        "mid_price": 2.675,
        "spread_pct": 0.0037383177570094327,
        "spread_ticks": 1.0,
        "tick_size": 0.01,
        "displayed_levels_per_side": 100,
        "bid_depth_notional_displayed": 1599626.0,
        "ask_depth_notional_displayed": 1147566.0,
        "bid_depth_notional_top10": 1599626.0,
        "ask_depth_notional_top10": 1147566.0,
        "bid_ask_depth_ratio": 1.3939
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 366,
        "history_limited": false,
        "trade_days_used": 242,
        "n_trades_used": 109288,
        "first_trade_date": "2025-05-20",
        "last_trade_date": "2026-05-20",
        "window_label": "May 20, 2025 to May 20, 2026",
        "window_short_label": "May 20, 2025 to May 20, 2026",
        "trade_days_label": "242 trading days",
        "trade_count_label": "109,288 trades",
        "window_detail_label": "242 trading days • 109,288 trades",
        "history_note": "Trade-size percentiles use May 20, 2025 to May 20, 2026 history (242 trading days • 109,288 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 20424.0,
            "impact_pct": -0.001869,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 1.28,
            "pct_of_adv": 1.96
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 34591.55,
            "impact_pct": -0.002753,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 2.16,
            "pct_of_adv": 3.32
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 731790.0,
            "impact_pct": -0.007113,
            "filled_pct": 100.0,
            "levels_consumed": 3,
            "pct_of_bid_depth": 45.75,
            "pct_of_adv": 70.3
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-05-20",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "3971075",
            "timestamp": "2026-05-20 01:20:07.849000000",
            "local_timestamp": "2026-05-20 09:20:07",
            "posted_price": 3.0,
            "size_shares": 100000.0,
            "notional": 300000.0,
            "impact_pct": -0.005279000000000001,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 18.75,
            "price_vs_mid_pct": 12.15,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "29293059",
            "timestamp": "2026-05-20 01:30:09.322000000",
            "local_timestamp": "2026-05-20 09:30:09",
            "posted_price": 2.94,
            "size_shares": 30000.0,
            "notional": 88200.0,
            "impact_pct": -0.00449,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 5.51,
            "price_vs_mid_pct": 9.907,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "3532805379",
            "timestamp": "2026-05-20 03:52:59.644000000",
            "local_timestamp": "2026-05-20 11:52:59",
            "posted_price": 2.68,
            "size_shares": 30500.0,
            "notional": 81740.0,
            "impact_pct": -0.004402,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 5.11,
            "price_vs_mid_pct": 0.187,
            "executed_event_count": 0,
            "event_count": 7
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-05-20",
        "bucket_minutes": 30,
        "displayed_levels_per_side": 100,
        "tick_size": 0.01,
        "timezone": "HKT (UTC+8)",
        "session_label": "HKEX continuous trading session",
        "bucket_label_basis": "bucket start time",
        "display_window_label": "HKEX continuous trading session",
        "bucket_note": "Buckets are shown in local market time and labeled by bucket start.",
        "reason": null,
        "rows": [
          {
            "bucket": "09:30",
            "spread_pct": 0.014869888475836444,
            "spread_ticks": 4.0000000000000036,
            "bid_depth_notional": 652844.0,
            "ask_depth_notional": 1022972.0,
            "mid_price": 2.69
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.011173184357541992,
            "spread_ticks": 3.000000000000025,
            "bid_depth_notional": 811471.0,
            "ask_depth_notional": 1176433.0,
            "mid_price": 2.685
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.0037523452157597697,
            "spread_ticks": 0.9999999999999787,
            "bid_depth_notional": 977807.0,
            "ask_depth_notional": 1189395.0,
            "mid_price": 2.665
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.0037523452157597697,
            "spread_ticks": 0.9999999999999787,
            "bid_depth_notional": 1065768.0,
            "ask_depth_notional": 1276074.0,
            "mid_price": 2.665
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.0037383177570094323,
            "spread_ticks": 1.000000000000023,
            "bid_depth_notional": 1350086.0,
            "ask_depth_notional": 1126976.0,
            "mid_price": 2.675
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 2.0000000000000018,
            "bid_depth_notional": 1526754.0,
            "ask_depth_notional": 1169738.0,
            "mid_price": 2.67
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.0037383177570094323,
            "spread_ticks": 1.000000000000023,
            "bid_depth_notional": 1690368.0,
            "ask_depth_notional": 1155826.0,
            "mid_price": 2.675
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.0037523452157597697,
            "spread_ticks": 0.9999999999999787,
            "bid_depth_notional": 1635302.0,
            "ask_depth_notional": 1099733.0,
            "mid_price": 2.665
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 2.0000000000000018,
            "bid_depth_notional": 1648202.0,
            "ask_depth_notional": 1142916.0,
            "mid_price": 2.67
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 2.0000000000000018,
            "bid_depth_notional": 1647720.0,
            "ask_depth_notional": 1123717.0,
            "mid_price": 2.67
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.0037383177570094323,
            "spread_ticks": 1.000000000000023,
            "bid_depth_notional": 1599626.0,
            "ask_depth_notional": 1147566.0,
            "mid_price": 2.675
          }
        ],
        "summary": {
          "median_spread_pct": 0.0037523452157597697,
          "median_spread_ticks": 1.000000000000023,
          "median_bid_depth_notional": 1526754.0,
          "median_ask_depth_notional": 1147566.0,
          "tightest_bucket": "11:30",
          "widest_bucket": "09:30",
          "deepest_bid_bucket": "13:30",
          "thinnest_bid_bucket": "09:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 4.8,
      "peers": [
        {
          "ticker": "3700",
          "pct": 42.8
        },
        {
          "ticker": "2550",
          "pct": 55.5
        },
        {
          "ticker": "752",
          "pct": 82.4
        },
        {
          "ticker": "2306",
          "pct": 144.5
        },
        {
          "ticker": "2422",
          "pct": 230.7
        },
        {
          "ticker": "1970",
          "pct": 377.2
        },
        {
          "ticker": "1450",
          "pct": 418.5
        },
        {
          "ticker": "2008",
          "pct": 1438.4
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 235,
          "n_runs": 84,
          "n_trade_days": 1,
          "first_trade_date": "2026-05-20",
          "last_trade_date": "2026-05-20",
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
            "retail_pct": 0.3021276595744681,
            "mixed_pct": 0.32340425531914896,
            "instit_pct": 0.28936170212765955,
            "ambiguous_pct": 0.0851063829787234,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0851063829787234,
            "retail_qty_pct": 0.03699284009546539,
            "mixed_qty_pct": 0.22911694510739858,
            "instit_qty_pct": 0.5035799522673031,
            "ambiguous_qty_pct": 0.23031026252983294,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.23031026252983294,
            "retail_notional_pct": 0.03690545675453538,
            "mixed_notional_pct": 0.22896243046539053,
            "instit_notional_pct": 0.5037998356183965,
            "ambiguous_notional_pct": 0.23033227716167765,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.23033227716167765
          },
          "run_composition": {
            "retail_pct": 0.5833333333333334,
            "mixed_pct": 0.25,
            "instit_pct": 0.03571428571428571,
            "ambiguous_pct": 0.13095238095238096,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.13095238095238096,
            "retail_notional_pct": 0.03574169078312725,
            "mixed_notional_pct": 0.4214159650969043,
            "instit_notional_pct": 0.3640297509427344,
            "unclear_notional_pct": 0.17881259317723405
          },
          "counts": {
            "trades": {
              "retail": 71,
              "mixed": 76,
              "institutional": 68,
              "ambiguous": 20,
              "unobservable": 0,
              "unclear": 20
            },
            "runs": {
              "retail": 49,
              "mixed": 21,
              "institutional": 3,
              "ambiguous": 11,
              "unobservable": 0,
              "unclear": 11
            }
          },
          "confidence": {
            "high": 0.6190476190476191,
            "medium": 0.25,
            "low": 0.13095238095238096,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 52,
            "medium": 21,
            "low": 11,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.2765957446808511,
            "medium": 0.32340425531914896,
            "low": 0.4,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 65,
            "medium": 76,
            "low": 94,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8589285714285712,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.13095238095238096,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5833333333333334,
          "dominance_gap": 0.33333333333333337,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 121,
              "UNOBSERVABLE": 81,
              "WALK_BOOK": 33
            },
            "d2_information": {
              "UNOBSERVABLE": 235
            },
            "d3_urgency": {
              "UNOBSERVABLE": 84
            },
            "participant_confidence": {
              "HIGH": 52,
              "MEDIUM": 21,
              "LOW": 11
            }
          },
          "trade_size": {
            "avg": 2857.9063829787233,
            "median": 268.0
          },
          "run_size": {
            "avg": 4344.0,
            "median": 266.5,
            "avg_length": 1.119047619047619
          },
          "recent_trades": [
            {
              "trade_id": "235",
              "timestamp": "2026-05-20T07:59:54.147557",
              "price": 2.67,
              "size": 300.0,
              "notional": 801.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31458,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "234",
              "timestamp": "2026-05-20T07:59:53.504151",
              "price": 2.68,
              "size": 1700.0,
              "notional": 4556.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 31457,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "233",
              "timestamp": "2026-05-20T07:58:34.095808",
              "price": 2.68,
              "size": 500.0,
              "notional": 1340.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31456,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "232",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 3700.0,
              "notional": 9879.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "231",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 500.0,
              "notional": 1335.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "230",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 500.0,
              "notional": 1335.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "229",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 2000.0,
              "notional": 5340.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "228",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 1700.0,
              "notional": 4539.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "227",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 700.0,
              "notional": 1869.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "226",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 4200.0,
              "notional": 11214.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "225",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 1100.0,
              "notional": 2937.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "224",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 100.0,
              "notional": 267.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "223",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 1100.0,
              "notional": 2937.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "222",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 500.0,
              "notional": 1335.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "221",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 2600.0,
              "notional": 6942.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "220",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 100.0,
              "notional": 267.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "219",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 100.0,
              "notional": 267.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "218",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 400.0,
              "notional": 1068.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "217",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 2800.0,
              "notional": 7476.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "216",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 1800.0,
              "notional": 4806.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "215",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 4900.0,
              "notional": 13083.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "214",
              "timestamp": "2026-05-20T07:50:20.316390",
              "price": 2.66,
              "size": 200.0,
              "notional": 532.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31454,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "213",
              "timestamp": "2026-05-20T07:50:18.687528",
              "price": 2.67,
              "size": 1200.0,
              "notional": 3204.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31453,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "212",
              "timestamp": "2026-05-20T07:26:52.194738",
              "price": 2.66,
              "size": 200.0,
              "notional": 532.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31452,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "211",
              "timestamp": "2026-05-20T07:26:46.190867",
              "price": 2.68,
              "size": 1200.0,
              "notional": 3216.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 31451,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "210",
              "timestamp": "2026-05-20T06:43:16.660536",
              "price": 2.67,
              "size": 400.0,
              "notional": 1068.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "209",
              "timestamp": "2026-05-20T06:31:39.213178",
              "price": 2.67,
              "size": 600.0,
              "notional": 1602.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 31450,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "208",
              "timestamp": "2026-05-20T06:31:39.213178",
              "price": 2.67,
              "size": 100.0,
              "notional": 267.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 31450,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "207",
              "timestamp": "2026-05-20T06:28:02.589919",
              "price": 2.66,
              "size": 100.0,
              "notional": 266.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "206",
              "timestamp": "2026-05-20T06:26:16.128586",
              "price": 2.66,
              "size": 100.0,
              "notional": 266.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 31449,
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
          "n_trades": 6226,
          "n_runs": 2292,
          "n_trade_days": 21,
          "first_trade_date": "2026-04-21",
          "last_trade_date": "2026-05-20",
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
            "retail_pct": 0.31561194988756824,
            "mixed_pct": 0.17587536138772888,
            "instit_pct": 0.37006103437198845,
            "ambiguous_pct": 0.13845165435271442,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.13845165435271442,
            "retail_qty_pct": 0.05335311183622872,
            "mixed_qty_pct": 0.10044616978651245,
            "instit_qty_pct": 0.6343504008254147,
            "ambiguous_qty_pct": 0.21185031755184414,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.21185031755184414,
            "retail_notional_pct": 0.05351865649160919,
            "mixed_notional_pct": 0.10035458306271518,
            "instit_notional_pct": 0.6341620523977503,
            "ambiguous_notional_pct": 0.21196470804792544,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.21196470804792544
          },
          "run_composition": {
            "retail_pct": 0.5955497382198953,
            "mixed_pct": 0.2286212914485166,
            "instit_pct": 0.08027923211169284,
            "ambiguous_pct": 0.09554973821989529,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.09554973821989529,
            "retail_notional_pct": 0.044722617541857614,
            "mixed_notional_pct": 0.15505548308792366,
            "instit_notional_pct": 0.618420088357374,
            "unclear_notional_pct": 0.18180181101284465
          },
          "counts": {
            "trades": {
              "retail": 1965,
              "mixed": 1095,
              "institutional": 2304,
              "ambiguous": 862,
              "unobservable": 0,
              "unclear": 862
            },
            "runs": {
              "retail": 1365,
              "mixed": 524,
              "institutional": 184,
              "ambiguous": 219,
              "unobservable": 0,
              "unclear": 219
            }
          },
          "confidence": {
            "high": 0.6758289703315882,
            "medium": 0.2286212914485166,
            "low": 0.09554973821989529,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 1549,
            "medium": 524,
            "low": 219,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.4384837777063926,
            "medium": 0.17587536138772888,
            "low": 0.38564086090587857,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 2730,
            "medium": 1095,
            "low": 2401,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8643979057591622,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.09554973821989529,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5955497382198953,
          "dominance_gap": 0.3669284467713787,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 3265,
              "UNOBSERVABLE": 1825,
              "WALK_BOOK": 1136
            },
            "d2_information": {
              "UNOBSERVABLE": 6226
            },
            "d3_urgency": {
              "UNOBSERVABLE": 2292
            },
            "participant_confidence": {
              "HIGH": 1549,
              "MEDIUM": 524,
              "LOW": 219
            }
          },
          "trade_size": {
            "avg": 3762.1899469964665,
            "median": 554.0
          },
          "run_size": {
            "avg": 6614.321553228621,
            "median": 282.0,
            "avg_length": 1.1269633507853403
          },
          "recent_trades": [
            {
              "trade_id": "235",
              "timestamp": "2026-05-20T07:59:54.147557",
              "price": 2.67,
              "size": 300.0,
              "notional": 801.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31458,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "234",
              "timestamp": "2026-05-20T07:59:53.504151",
              "price": 2.68,
              "size": 1700.0,
              "notional": 4556.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 31457,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "233",
              "timestamp": "2026-05-20T07:58:34.095808",
              "price": 2.68,
              "size": 500.0,
              "notional": 1340.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31456,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "232",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 3700.0,
              "notional": 9879.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "231",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 500.0,
              "notional": 1335.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "230",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 500.0,
              "notional": 1335.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "229",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 2000.0,
              "notional": 5340.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "228",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 1700.0,
              "notional": 4539.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "227",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 700.0,
              "notional": 1869.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "226",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 4200.0,
              "notional": 11214.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "225",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 1100.0,
              "notional": 2937.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "224",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 100.0,
              "notional": 267.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "223",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 1100.0,
              "notional": 2937.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "222",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 500.0,
              "notional": 1335.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "221",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 2600.0,
              "notional": 6942.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "220",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 100.0,
              "notional": 267.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "219",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 100.0,
              "notional": 267.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "218",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 400.0,
              "notional": 1068.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "217",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 2800.0,
              "notional": 7476.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "216",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 1800.0,
              "notional": 4806.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "215",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 4900.0,
              "notional": 13083.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "214",
              "timestamp": "2026-05-20T07:50:20.316390",
              "price": 2.66,
              "size": 200.0,
              "notional": 532.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31454,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "213",
              "timestamp": "2026-05-20T07:50:18.687528",
              "price": 2.67,
              "size": 1200.0,
              "notional": 3204.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31453,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "212",
              "timestamp": "2026-05-20T07:26:52.194738",
              "price": 2.66,
              "size": 200.0,
              "notional": 532.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31452,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "211",
              "timestamp": "2026-05-20T07:26:46.190867",
              "price": 2.68,
              "size": 1200.0,
              "notional": 3216.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 31451,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "210",
              "timestamp": "2026-05-20T06:43:16.660536",
              "price": 2.67,
              "size": 400.0,
              "notional": 1068.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "209",
              "timestamp": "2026-05-20T06:31:39.213178",
              "price": 2.67,
              "size": 600.0,
              "notional": 1602.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 31450,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "208",
              "timestamp": "2026-05-20T06:31:39.213178",
              "price": 2.67,
              "size": 100.0,
              "notional": 267.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 31450,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "207",
              "timestamp": "2026-05-20T06:28:02.589919",
              "price": 2.66,
              "size": 100.0,
              "notional": 266.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "206",
              "timestamp": "2026-05-20T06:26:16.128586",
              "price": 2.66,
              "size": 100.0,
              "notional": 266.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 31449,
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
          "n_trades": 17176,
          "n_runs": 6334,
          "n_trade_days": 63,
          "first_trade_date": "2026-02-12",
          "last_trade_date": "2026-05-20",
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
            "retail_pct": 0.2884257102934327,
            "mixed_pct": 0.17600139729855613,
            "instit_pct": 0.35916394969725196,
            "ambiguous_pct": 0.1764089427107592,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1764089427107592,
            "retail_qty_pct": 0.05229385856084518,
            "mixed_qty_pct": 0.12602833377435693,
            "instit_qty_pct": 0.6011550147131519,
            "ambiguous_qty_pct": 0.22052279295164595,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.22052279295164595,
            "retail_notional_pct": 0.052340717242834935,
            "mixed_notional_pct": 0.1262750682747101,
            "instit_notional_pct": 0.6007300455745644,
            "ambiguous_notional_pct": 0.2206541689078905,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2206541689078905
          },
          "run_composition": {
            "retail_pct": 0.5587306599305336,
            "mixed_pct": 0.23113356488790654,
            "instit_pct": 0.09267445532049258,
            "ambiguous_pct": 0.11746131986106725,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.11746131986106725,
            "retail_notional_pct": 0.052686942732277815,
            "mixed_notional_pct": 0.1950727464939545,
            "instit_notional_pct": 0.5840974455487928,
            "unclear_notional_pct": 0.16814286522497487
          },
          "counts": {
            "trades": {
              "retail": 4954,
              "mixed": 3023,
              "institutional": 6169,
              "ambiguous": 3030,
              "unobservable": 0,
              "unclear": 3030
            },
            "runs": {
              "retail": 3539,
              "mixed": 1464,
              "institutional": 587,
              "ambiguous": 744,
              "unobservable": 0,
              "unclear": 744
            }
          },
          "confidence": {
            "high": 0.6514051152510262,
            "medium": 0.23113356488790654,
            "low": 0.11746131986106725,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 4126,
            "medium": 1464,
            "low": 744,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.4230321378667909,
            "medium": 0.17600139729855613,
            "low": 0.400966464834653,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 7266,
            "medium": 3023,
            "low": 6887,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8670508367540257,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.11746131986106725,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5587306599305336,
          "dominance_gap": 0.3275970950426271,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 8985,
              "UNOBSERVABLE": 5107,
              "WALK_BOOK": 3084
            },
            "d2_information": {
              "UNOBSERVABLE": 17176
            },
            "d3_urgency": {
              "UNOBSERVABLE": 6334
            },
            "participant_confidence": {
              "HIGH": 4126,
              "MEDIUM": 1464,
              "LOW": 744
            }
          },
          "trade_size": {
            "avg": 6109.478307522124,
            "median": 1395.0
          },
          "run_size": {
            "avg": 10724.303915377328,
            "median": 1352.5,
            "avg_length": 1.1531417745500474
          },
          "recent_trades": [
            {
              "trade_id": "235",
              "timestamp": "2026-05-20T07:59:54.147557",
              "price": 2.67,
              "size": 300.0,
              "notional": 801.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31458,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "234",
              "timestamp": "2026-05-20T07:59:53.504151",
              "price": 2.68,
              "size": 1700.0,
              "notional": 4556.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 31457,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "233",
              "timestamp": "2026-05-20T07:58:34.095808",
              "price": 2.68,
              "size": 500.0,
              "notional": 1340.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31456,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "232",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 3700.0,
              "notional": 9879.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "231",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 500.0,
              "notional": 1335.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "230",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 500.0,
              "notional": 1335.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "229",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 2000.0,
              "notional": 5340.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "228",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 1700.0,
              "notional": 4539.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "227",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 700.0,
              "notional": 1869.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "226",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 4200.0,
              "notional": 11214.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "225",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 1100.0,
              "notional": 2937.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "224",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 100.0,
              "notional": 267.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "223",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 1100.0,
              "notional": 2937.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "222",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 500.0,
              "notional": 1335.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "221",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 2600.0,
              "notional": 6942.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "220",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 100.0,
              "notional": 267.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "219",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 100.0,
              "notional": 267.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "218",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 400.0,
              "notional": 1068.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "217",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 2800.0,
              "notional": 7476.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "216",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 1800.0,
              "notional": 4806.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "215",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 4900.0,
              "notional": 13083.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "214",
              "timestamp": "2026-05-20T07:50:20.316390",
              "price": 2.66,
              "size": 200.0,
              "notional": 532.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31454,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "213",
              "timestamp": "2026-05-20T07:50:18.687528",
              "price": 2.67,
              "size": 1200.0,
              "notional": 3204.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31453,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "212",
              "timestamp": "2026-05-20T07:26:52.194738",
              "price": 2.66,
              "size": 200.0,
              "notional": 532.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31452,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "211",
              "timestamp": "2026-05-20T07:26:46.190867",
              "price": 2.68,
              "size": 1200.0,
              "notional": 3216.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 31451,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "210",
              "timestamp": "2026-05-20T06:43:16.660536",
              "price": 2.67,
              "size": 400.0,
              "notional": 1068.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "209",
              "timestamp": "2026-05-20T06:31:39.213178",
              "price": 2.67,
              "size": 600.0,
              "notional": 1602.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 31450,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "208",
              "timestamp": "2026-05-20T06:31:39.213178",
              "price": 2.67,
              "size": 100.0,
              "notional": 267.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 31450,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "207",
              "timestamp": "2026-05-20T06:28:02.589919",
              "price": 2.66,
              "size": 100.0,
              "notional": 266.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "206",
              "timestamp": "2026-05-20T06:26:16.128586",
              "price": 2.66,
              "size": 100.0,
              "notional": 266.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 31449,
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
          "n_trades": 33811,
          "n_runs": 12402,
          "n_trade_days": 126,
          "first_trade_date": "2025-11-04",
          "last_trade_date": "2026-05-20",
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
            "retail_pct": 0.3007601076572713,
            "mixed_pct": 0.18514684570110318,
            "instit_pct": 0.3403330277128745,
            "ambiguous_pct": 0.173760018928751,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.173760018928751,
            "retail_qty_pct": 0.062411756800142534,
            "mixed_qty_pct": 0.1360789247841039,
            "instit_qty_pct": 0.5832264988361765,
            "ambiguous_qty_pct": 0.21828281957957704,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.21828281957957704,
            "retail_notional_pct": 0.06292838450705021,
            "mixed_notional_pct": 0.13673868532941738,
            "instit_notional_pct": 0.5820848615552058,
            "ambiguous_notional_pct": 0.21824806860832657,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.21824806860832657
          },
          "run_composition": {
            "retail_pct": 0.5553942912433478,
            "mixed_pct": 0.23222060957910015,
            "instit_pct": 0.09837123044670215,
            "ambiguous_pct": 0.11401386873084986,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.11401386873084986,
            "retail_notional_pct": 0.06267080225765005,
            "mixed_notional_pct": 0.20618361760508566,
            "instit_notional_pct": 0.5718647404839823,
            "unclear_notional_pct": 0.15928083965328196
          },
          "counts": {
            "trades": {
              "retail": 10169,
              "mixed": 6260,
              "institutional": 11507,
              "ambiguous": 5875,
              "unobservable": 0,
              "unclear": 5875
            },
            "runs": {
              "retail": 6888,
              "mixed": 2880,
              "institutional": 1220,
              "ambiguous": 1414,
              "unobservable": 0,
              "unclear": 1414
            }
          },
          "confidence": {
            "high": 0.65376552169005,
            "medium": 0.23222060957910015,
            "low": 0.11401386873084986,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 8108,
            "medium": 2880,
            "low": 1414,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.42799680577326904,
            "medium": 0.18496938866049512,
            "low": 0.38703380556623584,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 14471,
            "medium": 6254,
            "low": 13086,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8700935333010803,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.11401386873084986,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5553942912433478,
          "dominance_gap": 0.32317368166424765,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 18462,
              "UNOBSERVABLE": 9712,
              "WALK_BOOK": 5637
            },
            "d2_information": {
              "UNOBSERVABLE": 33811
            },
            "d3_urgency": {
              "UNOBSERVABLE": 12402
            },
            "participant_confidence": {
              "HIGH": 8108,
              "MEDIUM": 2880,
              "LOW": 1414
            }
          },
          "trade_size": {
            "avg": 6484.923342699121,
            "median": 1580.0
          },
          "run_size": {
            "avg": 11661.862715691015,
            "median": 1749.0,
            "avg_length": 1.225044347685857
          },
          "recent_trades": [
            {
              "trade_id": "235",
              "timestamp": "2026-05-20T07:59:54.147557",
              "price": 2.67,
              "size": 300.0,
              "notional": 801.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31458,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "234",
              "timestamp": "2026-05-20T07:59:53.504151",
              "price": 2.68,
              "size": 1700.0,
              "notional": 4556.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 31457,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "233",
              "timestamp": "2026-05-20T07:58:34.095808",
              "price": 2.68,
              "size": 500.0,
              "notional": 1340.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31456,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "232",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 3700.0,
              "notional": 9879.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "231",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 500.0,
              "notional": 1335.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "230",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 500.0,
              "notional": 1335.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "229",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 2000.0,
              "notional": 5340.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "228",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 1700.0,
              "notional": 4539.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "227",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 700.0,
              "notional": 1869.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "226",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 4200.0,
              "notional": 11214.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "225",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 1100.0,
              "notional": 2937.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "224",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 100.0,
              "notional": 267.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "223",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 1100.0,
              "notional": 2937.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "222",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 500.0,
              "notional": 1335.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "221",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 2600.0,
              "notional": 6942.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "220",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 100.0,
              "notional": 267.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "219",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 100.0,
              "notional": 267.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "218",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 400.0,
              "notional": 1068.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "217",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 2800.0,
              "notional": 7476.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "216",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 1800.0,
              "notional": 4806.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "215",
              "timestamp": "2026-05-20T07:53:54.405506",
              "price": 2.67,
              "size": 4900.0,
              "notional": 13083.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31455,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "214",
              "timestamp": "2026-05-20T07:50:20.316390",
              "price": 2.66,
              "size": 200.0,
              "notional": 532.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31454,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "213",
              "timestamp": "2026-05-20T07:50:18.687528",
              "price": 2.67,
              "size": 1200.0,
              "notional": 3204.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31453,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "212",
              "timestamp": "2026-05-20T07:26:52.194738",
              "price": 2.66,
              "size": 200.0,
              "notional": 532.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 31452,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "211",
              "timestamp": "2026-05-20T07:26:46.190867",
              "price": 2.68,
              "size": 1200.0,
              "notional": 3216.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 31451,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "210",
              "timestamp": "2026-05-20T06:43:16.660536",
              "price": 2.67,
              "size": 400.0,
              "notional": 1068.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "209",
              "timestamp": "2026-05-20T06:31:39.213178",
              "price": 2.67,
              "size": 600.0,
              "notional": 1602.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 31450,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "208",
              "timestamp": "2026-05-20T06:31:39.213178",
              "price": 2.67,
              "size": 100.0,
              "notional": 267.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 31450,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "207",
              "timestamp": "2026-05-20T06:28:02.589919",
              "price": 2.66,
              "size": 100.0,
              "notional": 266.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "206",
              "timestamp": "2026-05-20T06:26:16.128586",
              "price": 2.66,
              "size": 100.0,
              "notional": 266.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 31449,
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
      "n_trades": 33811,
      "n_runs": 12402,
      "n_trade_days": 126,
      "first_trade_date": "2025-11-04",
      "last_trade_date": "2026-05-20",
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
        "retail_pct": 0.3007601076572713,
        "mixed_pct": 0.18514684570110318,
        "instit_pct": 0.3403330277128745,
        "ambiguous_pct": 0.173760018928751,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.173760018928751,
        "retail_qty_pct": 0.062411756800142534,
        "mixed_qty_pct": 0.1360789247841039,
        "instit_qty_pct": 0.5832264988361765,
        "ambiguous_qty_pct": 0.21828281957957704,
        "unobservable_qty_pct": 0.0,
        "unclear_qty_pct": 0.21828281957957704,
        "retail_notional_pct": 0.06292838450705021,
        "mixed_notional_pct": 0.13673868532941738,
        "instit_notional_pct": 0.5820848615552058,
        "ambiguous_notional_pct": 0.21824806860832657,
        "unobservable_notional_pct": 0.0,
        "unclear_notional_pct": 0.21824806860832657
      },
      "run_composition": {
        "retail_pct": 0.5553942912433478,
        "mixed_pct": 0.23222060957910015,
        "instit_pct": 0.09837123044670215,
        "ambiguous_pct": 0.11401386873084986,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.11401386873084986
      },
      "trade_size": {
        "avg": 6484.923342699121,
        "median": 1580.0
      },
      "run_size": {
        "avg": 11661.862715691015,
        "median": 1749.0,
        "avg_length": 1.225044347685857
      },
      "confidence": {
        "high": 0.65376552169005,
        "medium": 0.23222060957910015,
        "low": 0.11401386873084986,
        "na": 0.0
      },
      "confidence_counts": {
        "high": 8108,
        "medium": 2880,
        "low": 1414,
        "na": 0
      },
      "trade_confidence": {
        "high": 0.42799680577326904,
        "medium": 0.18496938866049512,
        "low": 0.38703380556623584,
        "na": 0.0
      },
      "trade_confidence_counts": {
        "high": 14471,
        "medium": 6254,
        "low": 13086,
        "na": 0
      },
      "counts": {
        "trades": {
          "retail": 10169,
          "mixed": 6260,
          "institutional": 11507,
          "ambiguous": 5875,
          "unobservable": 0,
          "unclear": 5875
        },
        "runs": {
          "retail": 6888,
          "mixed": 2880,
          "institutional": 1220,
          "ambiguous": 1414,
          "unobservable": 0,
          "unclear": 1414
        }
      },
      "observability": {
        "avg_feature_coverage": 0.8700935333010803,
        "observable_run_pct": 1.0,
        "ambiguous_run_pct": 0.11401386873084986,
        "unobservable_run_pct": 0.0
      },
      "dominant_bucket": "RETAIL",
      "dominant_label": "Retail-led",
      "dominant_share": 0.5553942912433478,
      "dominance_gap": 0.32317368166424765,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2025-12",
            "n_trades": 2940,
            "n_runs": 1180,
            "retail_pct": 0.3442176870748299,
            "mixed_pct": 0.18197278911564627,
            "instit_pct": 0.31020408163265306,
            "ambiguous_pct": 0.16360544217687076,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.16360544217687076,
            "avg_trade_size": 4468.469268707482,
            "avg_run_notional": 7669.440127118645,
            "retail_qty_pct": 0.09068784346599293,
            "mixed_qty_pct": 0.1517812559590053,
            "instit_qty_pct": 0.5633693154294703,
            "ambiguous_qty_pct": 0.19416158514553145,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.19416158514553145,
            "retail_notional_pct": 0.09113476756237344,
            "mixed_notional_pct": 0.15228985813686605,
            "instit_notional_pct": 0.5619291328260142,
            "ambiguous_notional_pct": 0.1946462414747463,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.1946462414747463,
            "run_retail_pct": 0.588135593220339,
            "run_mixed_pct": 0.21271186440677967,
            "run_instit_pct": 0.1,
            "run_ambiguous_pct": 0.09915254237288136,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.09915254237288136,
            "avg_feature_coverage": 0.8702118644067796,
            "high_confidence_pct": 0.688135593220339,
            "medium_confidence_pct": 0.21271186440677967,
            "low_confidence_pct": 0.09915254237288136,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-01",
            "n_trades": 4168,
            "n_runs": 1629,
            "retail_pct": 0.31381957773512476,
            "mixed_pct": 0.18881957773512476,
            "instit_pct": 0.3222168905950096,
            "ambiguous_pct": 0.1751439539347409,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1751439539347409,
            "avg_trade_size": 7181.564093090211,
            "avg_run_notional": 12423.198367096378,
            "retail_qty_pct": 0.06118392446735822,
            "mixed_qty_pct": 0.14578545251257843,
            "instit_qty_pct": 0.5796219226867093,
            "ambiguous_qty_pct": 0.21340870033335405,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.21340870033335405,
            "retail_notional_pct": 0.061196668554090394,
            "mixed_notional_pct": 0.14561370636145105,
            "instit_notional_pct": 0.5800007583263506,
            "ambiguous_notional_pct": 0.21318886675810803,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.21318886675810803,
            "run_retail_pct": 0.5463474524248005,
            "run_mixed_pct": 0.2430939226519337,
            "run_instit_pct": 0.10190300798035605,
            "run_ambiguous_pct": 0.10865561694290976,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.10865561694290976,
            "avg_feature_coverage": 0.869244935543278,
            "high_confidence_pct": 0.6482504604051565,
            "medium_confidence_pct": 0.2430939226519337,
            "low_confidence_pct": 0.10865561694290976,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-02",
            "n_trades": 5626,
            "n_runs": 1883,
            "retail_pct": 0.2616423746889442,
            "mixed_pct": 0.16690366157127623,
            "instit_pct": 0.37948809100604336,
            "ambiguous_pct": 0.19196587273373622,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.19196587273373622,
            "avg_trade_size": 10727.091423746888,
            "avg_run_notional": 21270.289617631435,
            "retail_qty_pct": 0.06688794984673213,
            "mixed_qty_pct": 0.1422350990251491,
            "instit_qty_pct": 0.5771410235772155,
            "ambiguous_qty_pct": 0.21373592755090318,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.21373592755090318,
            "retail_notional_pct": 0.0671678865132253,
            "mixed_notional_pct": 0.1426451214694181,
            "instit_notional_pct": 0.5762234936975917,
            "ambiguous_notional_pct": 0.21396349831976488,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.21396349831976488,
            "run_retail_pct": 0.5236325013276686,
            "run_mixed_pct": 0.2373871481678173,
            "run_instit_pct": 0.11736590546999469,
            "run_ambiguous_pct": 0.12161444503451939,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.12161444503451939,
            "avg_feature_coverage": 0.8718534253850238,
            "high_confidence_pct": 0.6409984067976633,
            "medium_confidence_pct": 0.2373871481678173,
            "low_confidence_pct": 0.12161444503451939,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-03",
            "n_trades": 5592,
            "n_runs": 1991,
            "retail_pct": 0.2510729613733906,
            "mixed_pct": 0.18007868383404865,
            "instit_pct": 0.3490701001430615,
            "ambiguous_pct": 0.2197782546494993,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.2197782546494993,
            "avg_trade_size": 7259.602074391988,
            "avg_run_notional": 13349.171672526369,
            "retail_qty_pct": 0.05148324145826407,
            "mixed_qty_pct": 0.1408333023294384,
            "instit_qty_pct": 0.5700063178143308,
            "ambiguous_qty_pct": 0.23767713839796675,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.23767713839796675,
            "retail_notional_pct": 0.051589726701758536,
            "mixed_notional_pct": 0.14082404619910582,
            "instit_notional_pct": 0.5689620565380741,
            "ambiguous_notional_pct": 0.23862417056106158,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.23862417056106158,
            "run_retail_pct": 0.5253641386238072,
            "run_mixed_pct": 0.22300351582119537,
            "run_instit_pct": 0.09944751381215469,
            "run_ambiguous_pct": 0.15218483174284278,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.15218483174284278,
            "avg_feature_coverage": 0.871622300351582,
            "high_confidence_pct": 0.6248116524359618,
            "medium_confidence_pct": 0.22300351582119537,
            "low_confidence_pct": 0.15218483174284278,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-04",
            "n_trades": 5014,
            "n_runs": 2019,
            "retail_pct": 0.33266852812126047,
            "mixed_pct": 0.16733147187873953,
            "instit_pct": 0.34782608695652173,
            "ambiguous_pct": 0.15217391304347827,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.15217391304347827,
            "avg_trade_size": 4612.473234942162,
            "avg_run_notional": 7308.05695889054,
            "retail_qty_pct": 0.05634540055519309,
            "mixed_qty_pct": 0.11335812435035214,
            "instit_qty_pct": 0.6085913525823424,
            "ambiguous_qty_pct": 0.2217051225121123,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2217051225121123,
            "retail_notional_pct": 0.05635301319230255,
            "mixed_notional_pct": 0.11342209169316506,
            "instit_notional_pct": 0.6076654980670855,
            "ambiguous_notional_pct": 0.22255939704744693,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.22255939704744693,
            "run_retail_pct": 0.5809806835066865,
            "run_mixed_pct": 0.22634967805844478,
            "run_instit_pct": 0.09361069836552749,
            "run_ambiguous_pct": 0.09905894006934125,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.09905894006934125,
            "avg_feature_coverage": 0.8649331352154529,
            "high_confidence_pct": 0.674591381872214,
            "medium_confidence_pct": 0.22634967805844478,
            "low_confidence_pct": 0.09905894006934125,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-05",
            "n_trades": 4142,
            "n_runs": 1482,
            "retail_pct": 0.30178657653307583,
            "mixed_pct": 0.18879768227909222,
            "instit_pct": 0.3691453404152583,
            "ambiguous_pct": 0.14027040077257363,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.14027040077257363,
            "avg_trade_size": 3755.4554828585224,
            "avg_run_notional": 6979.2334682861,
            "retail_qty_pct": 0.05243546696443705,
            "mixed_qty_pct": 0.09723630538725818,
            "instit_qty_pct": 0.6384472668978726,
            "ambiguous_qty_pct": 0.21188096075043217,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.21188096075043217,
            "retail_notional_pct": 0.052659628579446026,
            "mixed_notional_pct": 0.09709132883360472,
            "instit_notional_pct": 0.6383575910172377,
            "ambiguous_notional_pct": 0.2118914515697116,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2118914515697116,
            "run_retail_pct": 0.582995951417004,
            "run_mixed_pct": 0.24156545209176788,
            "run_instit_pct": 0.08097165991902834,
            "run_ambiguous_pct": 0.09446693657219973,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.09446693657219973,
            "avg_feature_coverage": 0.865485829959514,
            "high_confidence_pct": 0.6639676113360324,
            "medium_confidence_pct": 0.24156545209176788,
            "low_confidence_pct": 0.09446693657219973,
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
          "trade_id": "235",
          "timestamp": "2026-05-20T07:59:54.147557",
          "price": 2.67,
          "size": 300.0,
          "notional": 801.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 31458,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "234",
          "timestamp": "2026-05-20T07:59:53.504151",
          "price": 2.68,
          "size": 1700.0,
          "notional": 4556.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 31457,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "233",
          "timestamp": "2026-05-20T07:58:34.095808",
          "price": 2.68,
          "size": 500.0,
          "notional": 1340.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 31456,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "232",
          "timestamp": "2026-05-20T07:53:54.405506",
          "price": 2.67,
          "size": 3700.0,
          "notional": 9879.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 31455,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "231",
          "timestamp": "2026-05-20T07:53:54.405506",
          "price": 2.67,
          "size": 500.0,
          "notional": 1335.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 31455,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "230",
          "timestamp": "2026-05-20T07:53:54.405506",
          "price": 2.67,
          "size": 500.0,
          "notional": 1335.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 31455,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "229",
          "timestamp": "2026-05-20T07:53:54.405506",
          "price": 2.67,
          "size": 2000.0,
          "notional": 5340.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 31455,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "228",
          "timestamp": "2026-05-20T07:53:54.405506",
          "price": 2.67,
          "size": 1700.0,
          "notional": 4539.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 31455,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "227",
          "timestamp": "2026-05-20T07:53:54.405506",
          "price": 2.67,
          "size": 700.0,
          "notional": 1869.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 31455,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "226",
          "timestamp": "2026-05-20T07:53:54.405506",
          "price": 2.67,
          "size": 4200.0,
          "notional": 11214.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 31455,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "225",
          "timestamp": "2026-05-20T07:53:54.405506",
          "price": 2.67,
          "size": 1100.0,
          "notional": 2937.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 31455,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "224",
          "timestamp": "2026-05-20T07:53:54.405506",
          "price": 2.67,
          "size": 100.0,
          "notional": 267.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 31455,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "223",
          "timestamp": "2026-05-20T07:53:54.405506",
          "price": 2.67,
          "size": 1100.0,
          "notional": 2937.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 31455,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "222",
          "timestamp": "2026-05-20T07:53:54.405506",
          "price": 2.67,
          "size": 500.0,
          "notional": 1335.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 31455,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "221",
          "timestamp": "2026-05-20T07:53:54.405506",
          "price": 2.67,
          "size": 2600.0,
          "notional": 6942.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 31455,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "220",
          "timestamp": "2026-05-20T07:53:54.405506",
          "price": 2.67,
          "size": 100.0,
          "notional": 267.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 31455,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "219",
          "timestamp": "2026-05-20T07:53:54.405506",
          "price": 2.67,
          "size": 100.0,
          "notional": 267.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 31455,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "218",
          "timestamp": "2026-05-20T07:53:54.405506",
          "price": 2.67,
          "size": 400.0,
          "notional": 1068.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 31455,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "217",
          "timestamp": "2026-05-20T07:53:54.405506",
          "price": 2.67,
          "size": 2800.0,
          "notional": 7476.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 31455,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "216",
          "timestamp": "2026-05-20T07:53:54.405506",
          "price": 2.67,
          "size": 1800.0,
          "notional": 4806.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 31455,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "215",
          "timestamp": "2026-05-20T07:53:54.405506",
          "price": 2.67,
          "size": 4900.0,
          "notional": 13083.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 31455,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "214",
          "timestamp": "2026-05-20T07:50:20.316390",
          "price": 2.66,
          "size": 200.0,
          "notional": 532.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 31454,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "213",
          "timestamp": "2026-05-20T07:50:18.687528",
          "price": 2.67,
          "size": 1200.0,
          "notional": 3204.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 31453,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "212",
          "timestamp": "2026-05-20T07:26:52.194738",
          "price": 2.66,
          "size": 200.0,
          "notional": 532.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 31452,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "211",
          "timestamp": "2026-05-20T07:26:46.190867",
          "price": 2.68,
          "size": 1200.0,
          "notional": 3216.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 31451,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "210",
          "timestamp": "2026-05-20T06:43:16.660536",
          "price": 2.67,
          "size": 400.0,
          "notional": 1068.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "209",
          "timestamp": "2026-05-20T06:31:39.213178",
          "price": 2.67,
          "size": 600.0,
          "notional": 1602.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 31450,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "208",
          "timestamp": "2026-05-20T06:31:39.213178",
          "price": 2.67,
          "size": 100.0,
          "notional": 267.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 31450,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "207",
          "timestamp": "2026-05-20T06:28:02.589919",
          "price": 2.66,
          "size": 100.0,
          "notional": 266.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "206",
          "timestamp": "2026-05-20T06:26:16.128586",
          "price": 2.66,
          "size": 100.0,
          "notional": 266.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 31449,
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
      "total_trades": 33810,
      "price_moving_trades": 6761,
      "pct_price_moving": 19.99704229517894,
      "all_movers": {
        "count": 6761,
        "avg_size": 7063.8625795000735,
        "median_size": 1650.0,
        "retail_count": 3105,
        "mixed_count": 1649,
        "institutional_count": 1053,
        "ambiguous_count": 954,
        "unobservable_count": 0,
        "retail_pct": 45.92515900014791,
        "mixed_pct": 24.389883153379678,
        "instit_pct": 15.574619139180596,
        "unclear_pct": 14.11033870729182
      },
      "positive_movers": {
        "count": 3329,
        "avg_size": 7026.144544908381,
        "median_size": 1565.0,
        "retail_count": 1528,
        "mixed_count": 803,
        "institutional_count": 485,
        "ambiguous_count": 513,
        "unobservable_count": 0,
        "retail_pct": 45.899669570441574,
        "mixed_pct": 24.121357765094622,
        "instit_pct": 14.568939621507958,
        "unclear_pct": 15.410033042955842
      },
      "negative_movers": {
        "count": 3432,
        "avg_size": 7100.448633449883,
        "median_size": 1761.0,
        "retail_count": 1577,
        "mixed_count": 846,
        "institutional_count": 568,
        "ambiguous_count": 441,
        "unobservable_count": 0,
        "retail_pct": 45.94988344988345,
        "mixed_pct": 24.65034965034965,
        "instit_pct": 16.55011655011655,
        "unclear_pct": 12.849650349650348
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
          "continuous": 0.9639617392554569,
          "closing": 0.03603826074454305,
          "auctions": 0.03603826074454305,
          "other": 0.0
        },
        "1M": {
          "opening": 0.0017865584752454126,
          "continuous": 0.9737547578860477,
          "closing": 0.017302716812937782,
          "auctions": 0.019089275288183195,
          "other": 0.00715596682576912
        },
        "3M": {
          "opening": 0.003247309940019863,
          "continuous": 0.9768750433062477,
          "closing": 0.012553756108134457,
          "auctions": 0.01580106604815432,
          "other": 0.0073238906455978196
        },
        "6M": {
          "opening": 0.008711448532181497,
          "continuous": 0.9699813130065532,
          "closing": 0.016064360716135796,
          "auctions": 0.024775809248317293,
          "other": 0.005242877745129562
        }
      },
      "hhi": {
        "1D": 0.21232136305431878,
        "1M": 0.21095732406475246,
        "3M": 0.18959442101894342,
        "6M": 0.1906048192246434
      },
      "profile_buckets": [
        {
          "time": "09:00",
          "avg_share": 0.0036
        },
        {
          "time": "09:30",
          "avg_share": 0.1253
        },
        {
          "time": "10:00",
          "avg_share": 0.1246
        },
        {
          "time": "10:30",
          "avg_share": 0.1166
        },
        {
          "time": "11:00",
          "avg_share": 0.0682
        },
        {
          "time": "11:30",
          "avg_share": 0.0688
        },
        {
          "time": "12:00",
          "avg_share": 0.0191
        },
        {
          "time": "13:00",
          "avg_share": 0.0757
        },
        {
          "time": "13:30",
          "avg_share": 0.0692
        },
        {
          "time": "14:00",
          "avg_share": 0.0648
        },
        {
          "time": "14:30",
          "avg_share": 0.0539
        },
        {
          "time": "15:00",
          "avg_share": 0.0785
        },
        {
          "time": "15:30",
          "avg_share": 0.1204
        },
        {
          "time": "16:00",
          "avg_share": 0.0112
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "511",
          "auctions_pct": 2.692675662736786,
          "hhi": 0.17934334899802004,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400",
            "you": true
          }
        },
        {
          "ticker": "2008",
          "auctions_pct": 0.7663713803184142,
          "hhi": 0.37169762082186436,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "3700",
          "auctions_pct": 0.9361339639985262,
          "hhi": 0.2555526580390791,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "2306",
          "auctions_pct": 0.5702311425090484,
          "hhi": 0.25834107352222097,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "2422",
          "auctions_pct": 0.7156450675186218,
          "hhi": 0.41371888353150293,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "1970",
          "auctions_pct": 2.596962675734428,
          "hhi": 0.44828804078823803,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "752",
          "auctions_pct": 2.152956273410931,
          "hhi": 0.2095498523552794,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "1450",
          "auctions_pct": 0.7351171156614298,
          "hhi": 0.30016494364101043,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "2550",
          "auctions_pct": 1.606055526803195,
          "hhi": 0.16917770122225875,
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
