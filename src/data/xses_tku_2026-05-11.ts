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
      "ticker": "TKU",
      "name": "Toku Ltd",
      "marketCap": 148262726.3,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "KUX",
      "name": "OIO",
      "marketCap": 9857201.58,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "532",
      "name": "DISA",
      "marketCap": 14089803.417,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "U77",
      "name": "Sarine Tech",
      "marketCap": 67418811.30600001,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "J03",
      "name": "Jadason",
      "marketCap": 33676640.0,
      "sector": "Electronic Components",
      "industry": "Technology"
    },
    {
      "ticker": "NXR",
      "name": "iWOW Tech",
      "marketCap": 112643524.80000001,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "42F",
      "name": "Totm Tech",
      "marketCap": 40499746.632,
      "sector": "Software - Infrastructure",
      "industry": "Technology"
    },
    {
      "ticker": "LVR",
      "name": "17LIVE GROUP",
      "marketCap": 157568730.3,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "ITS",
      "name": "Info-Tech",
      "marketCap": 254130000.0,
      "sector": "Software - Application",
      "industry": "Technology"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XSES",
    "currency": "SGD",
    "ticker": "TKU",
    "company": "Toku Ltd",
    "asof_date": "2026-05-11",
    "industry": "Technology",
    "sector": "Software - Application",
    "market_cap_display": "148.3M",
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
          "score_pca": 65.59139784946237,
          "score_pca_percentile": 65.59139784946237,
          "rank_pca": 193,
          "total": 558,
          "adv_notional_sgd": 235900.5,
          "adv_volume_shares": 925100.0,
          "free_float_shares": null,
          "turnover_ratio": 0.001622295812322453,
          "votes": 30.0,
          "trades": 30.0,
          "spread_pct": 0.01991924629878871,
          "spread_ticks": 1.0,
          "amihud": 0.0,
          "volatility": 0.18879059618156516
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5129145562873185,
          "loadings": {
            "log_adv": 0.555944113859297,
            "log_trades": 0.5128044975190234,
            "log_turnover": 0.5168931373893724,
            "neg_spread": 0.3565467837202957,
            "neg_amihud": 0.053149929313673246,
            "neg_vol": -0.17558089344202515
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
          "peer_median_adv": 9860.55,
          "peer_median_score_pca": 36.64874551971326,
          "peer_median_trades": 5.5,
          "peer_median_volatility": 0.05921575257484781,
          "peer_median_spread_pct": 0.04088095148763745,
          "peer_median_spread_ticks": 2.139689578713969,
          "peer_median_amihud": 0.0,
          "peer_median_turnover_ratio": 0.0004659089996835043,
          "target_vs_peer": {
            "score_pca_delta": 28.94,
            "adv_delta_pct": 2292.4,
            "trades_delta_pct": 445.45,
            "volatility_delta_pct": -218.82,
            "spread_pct_delta_pct": 51.27,
            "spread_ticks_delta_pct": -53.26,
            "amihud_delta_pct": null,
            "turnover_ratio_delta_pct": 248.2
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 65.59139784946237,
            "rank_pca": 193,
            "adv": 235900.5,
            "trades": 30.0,
            "volatility": 0.18879059618156516,
            "spread_pct": 0.01991924629878871,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.001622295812322453,
            "is_target": true
          },
          {
            "ticker": "KUX",
            "score_pca": 2.867383512544803,
            "rank_pca": 543,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.611036339165545,
            "spread_ticks": 28.375,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 24.910394265232974,
            "rank_pca": 420,
            "adv": 1010.1,
            "trades": 5.0,
            "volatility": 0.0,
            "spread_pct": 0.6666666666666666,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.00010950075065398836,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 23.297491039426525,
            "rank_pca": 429,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.014398848092152639,
            "spread_ticks": 2.857142857142857,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 67.74193548387096,
            "rank_pca": 181,
            "adv": 92971.2,
            "trades": 40.0,
            "volatility": 0.4057469172755718,
            "spread_pct": 0.0453982666116385,
            "spread_ticks": 1.0784313725490196,
            "amihud": 0.0,
            "turnover_ratio": 0.006623567460752464,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 46.774193548387096,
            "rank_pca": 298,
            "adv": 18711.0,
            "trades": 6.0,
            "volatility": 0.11843150514969562,
            "spread_pct": 0.035307517084282446,
            "spread_ticks": 2.8181818181818183,
            "amihud": 2.055557611113171e-06,
            "turnover_ratio": 0.0008223172487130202,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 63.799283154121866,
            "rank_pca": 203,
            "adv": 54648.0,
            "trades": 35.0,
            "volatility": 0.3467150657358996,
            "spread_pct": 0.0363636363636364,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0024681576265454842,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 26.523297491039425,
            "rank_pca": 411,
            "adv": 90.0,
            "trades": 1.0,
            "volatility": 0.0,
            "spread_pct": 0.04916881292437373,
            "spread_ticks": 8.75,
            "amihud": 0.0,
            "turnover_ratio": 6.913071246865795e-07,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 78.31541218637993,
            "rank_pca": 122,
            "adv": 544292.0,
            "trades": 280.0,
            "volatility": 0.19556816158595927,
            "spread_pct": 0.007486126809762643,
            "spread_ticks": 1.4611973392461197,
            "amihud": 9.326137683412049e-09,
            "turnover_ratio": 0.00822588146081228,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Software - Application",
          "sector_count": 8,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.30236814079863567,
              "median": 0.14229626195419176,
              "min": 0.0,
              "max": 6.608197362010048,
              "p5": 0.0,
              "p95": 1.1500757493172897,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 4423025.809913381,
              "median": 24847.4,
              "min": 0.0,
              "max": 518604111.0,
              "p5": 0.0,
              "p95": 14833673.15,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09930364172704968,
              "median": 0.027513697702785018,
              "min": 0.00028924782024520836,
              "max": 1.2847682119205297,
              "p5": 0.0034870115840025424,
              "p95": 0.4976033233915637,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.012531807749467303,
              "median": 0.00042933273587905744,
              "min": 0.0,
              "max": 4.040603783534375,
              "p5": 0.0,
              "p95": 0.017690051632661366,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0005367192070390459,
              "median": 1.5093076132826707e-08,
              "min": 0.0,
              "max": 0.1388888888888889,
              "p5": 0.0,
              "p95": 4.1261681875373877e-05,
              "count": 429
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 595.0358422939069,
              "median": 12.0,
              "min": 0.0,
              "max": 20498.0,
              "p5": 0.0,
              "p95": 3326.1999999999985,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.07374441712207232,
              "median": 0.04358253702967927,
              "min": 0.0,
              "max": 0.19556816158595927,
              "p5": 0.0,
              "p95": 0.19319601369442133,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 621341.45,
              "median": 9860.55,
              "min": 0.0,
              "max": 4170728.0,
              "p5": 0.0,
              "p95": 2901475.399999998,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.17568862196806878,
              "median": 0.027613381691535578,
              "min": 0.001525418702978331,
              "max": 0.6666666666666666,
              "p5": 0.0036116665403528405,
              "p95": 0.6471960520412741,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00169727595010128,
              "median": 0.0004659089996835043,
              "min": 0.0,
              "max": 0.00822588146081228,
              "p5": 0.0,
              "p95": 0.006325955306942313,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.44238526738166e-07,
              "median": 2.7370581620654984e-10,
              "min": 0.0,
              "max": 2.055557611113171e-06,
              "p5": 0.0,
              "p95": 1.5439997427557313e-06,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 176.125,
              "median": 5.5,
              "min": 0.0,
              "max": 1087.0,
              "p5": 0.0,
              "p95": 804.5499999999995,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 88965.2875,
              "median": 9860.55,
              "min": 0.0,
              "max": 544292.0,
              "p5": 0.0,
              "p95": 386329.71999999974,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 45.875,
              "median": 5.5,
              "min": 0.0,
              "max": 280.0,
              "p5": 0.0,
              "p95": 195.9999999999999,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.13330770621839078,
              "median": 0.05921575257484781,
              "min": 0.0,
              "max": 0.4057469172755718,
              "p5": 0.0,
              "p95": 0.38508576923668647,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.18322827671475725,
              "median": 0.04088095148763745,
              "min": 0.007486126809762643,
              "max": 0.6666666666666666,
              "p5": 0.009905579258599142,
              "p95": 0.6471960520412741,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 5.9174941733899775,
              "median": 2.139689578713969,
              "min": 1.0,
              "max": 28.375,
              "p5": 1.0,
              "p95": 21.50624999999999,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0022812644818252406,
              "median": 0.0004659089996835043,
              "min": 0.0,
              "max": 0.00822588146081228,
              "p5": 0.0,
              "p95": 0.007665071560791344,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.441472914660972e-07,
              "median": 0.0,
              "min": 0.0,
              "max": 2.055557611113171e-06,
              "p5": 0.0,
              "p95": 1.5439997427557313e-06,
              "count": 6
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.0,
            "market": 0.004240256324099967,
            "sector": 0.0,
            "peers": 0.0,
            "vs_market": -0.004240256324099967,
            "vs_sector": 0.0,
            "vs_peers": 0.0
          }
        }
      },
      "1w": {
        "label": "1W",
        "window_days": 5,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 5,
          "score_pca": 71.68458781362007,
          "score_pca_percentile": 71.68458781362007,
          "rank_pca": 159,
          "total": 558,
          "adv_notional_sgd": 235900.5,
          "adv_volume_shares": 925100.0,
          "free_float_shares": null,
          "turnover_ratio": 0.001622295812322453,
          "votes": 50.0,
          "trades": 50.0,
          "spread_pct": 0.022777369581190324,
          "spread_ticks": 1.1071428571428572,
          "amihud": 4.7142904285761484e-08,
          "volatility": 0.2898501925319133
        },
        "pca": {
          "valid": true,
          "window_days": 5,
          "variance_explained": 0.5152044498241108,
          "loadings": {
            "log_adv": 0.550656084710642,
            "log_trades": 0.5026802022441628,
            "log_turnover": 0.5057386868419336,
            "neg_spread": 0.39458349973311546,
            "neg_amihud": 0.16251104320006612,
            "neg_vol": 0.07882191224971534
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
          "peer_median_adv": 6674.5,
          "peer_median_score_pca": 40.23297491039426,
          "peer_median_trades": 2.5,
          "peer_median_volatility": 0.2729557875551343,
          "peer_median_spread_pct": 0.04040404040404044,
          "peer_median_spread_ticks": 1.67896234676007,
          "peer_median_amihud": 3.1054874460048885e-07,
          "peer_median_turnover_ratio": 0.0003306360323627477,
          "target_vs_peer": {
            "score_pca_delta": 31.45,
            "adv_delta_pct": 3434.4,
            "trades_delta_pct": 1900.0,
            "volatility_delta_pct": -6.19,
            "spread_pct_delta_pct": 43.63,
            "spread_ticks_delta_pct": -34.06,
            "amihud_delta_pct": 84.82,
            "turnover_ratio_delta_pct": 390.66
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 71.68458781362007,
            "rank_pca": 159,
            "adv": 235900.5,
            "trades": 50.0,
            "volatility": 0.2898501925319133,
            "spread_pct": 0.022777369581190324,
            "spread_ticks": 1.1071428571428572,
            "amihud": 4.7142904285761484e-08,
            "turnover_ratio": 0.001622295812322453,
            "is_target": true
          },
          {
            "ticker": "KUX",
            "score_pca": 2.6881720430107525,
            "rank_pca": 544,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.8017118402282455,
            "spread_ticks": 40.142857142857146,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 24.551971326164875,
            "rank_pca": 422,
            "adv": 1010.1,
            "trades": 2.0,
            "volatility": 0.0,
            "spread_pct": 0.6666666666666666,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.00010950075065398836,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 34.76702508960574,
            "rank_pca": 365,
            "adv": 2189.0,
            "trades": 1.0,
            "volatility": 0.1501602104643403,
            "spread_pct": 0.010778039744021565,
            "spread_ticks": 2.125,
            "amihud": 1.4265544390789943e-06,
            "turnover_ratio": 3.406891633838685e-05,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 73.65591397849462,
            "rank_pca": 148,
            "adv": 211864.80000000002,
            "trades": 52.0,
            "volatility": 0.38678671376205725,
            "spread_pct": 0.04444444444444448,
            "spread_ticks": 1.043010752688172,
            "amihud": 0.0,
            "turnover_ratio": 0.015093930113398867,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 45.69892473118279,
            "rank_pca": 304,
            "adv": 11160.0,
            "trades": 3.0,
            "volatility": 0.33295112286827866,
            "spread_pct": 0.035307517084282446,
            "spread_ticks": 2.8181818181818183,
            "amihud": 1.5081625527762664e-06,
            "turnover_ratio": 0.000551771314071507,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 67.38351254480287,
            "rank_pca": 183,
            "adv": 102580.8,
            "trades": 29.0,
            "volatility": 0.5121275617017539,
            "spread_pct": 0.0363636363636364,
            "spread_ticks": 1.0,
            "amihud": 3.1054874460048885e-07,
            "turnover_ratio": 0.004467560415322151,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 28.31541218637993,
            "rank_pca": 401,
            "adv": 90.0,
            "trades": 1.0,
            "volatility": 0.5572949698864612,
            "spread_pct": 0.060905349794238735,
            "spread_ticks": 10.882352941176471,
            "amihud": 9.4562647754137e-06,
            "turnover_ratio": 6.913071246865795e-07,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 82.61648745519713,
            "rank_pca": 98,
            "adv": 621000.0,
            "trades": 369.0,
            "volatility": 0.21296045224198992,
            "spread_pct": 0.010961596408027656,
            "spread_ticks": 1.2329246935201401,
            "amihud": 9.326137683412049e-09,
            "turnover_ratio": 0.0091974655872604,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Software - Application",
          "sector_count": 8,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5068600625897726,
              "median": 0.28098926155291437,
              "min": 0.0,
              "max": 7.09929573971954,
              "p5": 0.0,
              "p95": 1.6426805370252844,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3865158.755629794,
              "median": 17245.5,
              "min": 0.0,
              "max": 341641098.0,
              "p5": 0.0,
              "p95": 17724010.524999995,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10215472307351235,
              "median": 0.029179283984305547,
              "min": 0.00028924782024520836,
              "max": 1.4976744186046513,
              "p5": 0.0034914519881302456,
              "p95": 0.5112924027473682,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006770100181671975,
              "median": 0.00031166512749697265,
              "min": 0.0,
              "max": 1.7632324830268276,
              "p5": 0.0,
              "p95": 0.015066568704043852,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00010546421941798493,
              "median": 5.241252149688307e-08,
              "min": 0.0,
              "max": 0.013888888888888886,
              "p5": 0.0,
              "p95": 9.39548991580585e-05,
              "count": 512
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 556.7813620071685,
              "median": 9.0,
              "min": 0.0,
              "max": 12692.0,
              "p5": 0.0,
              "p95": 3612.199999999994,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.2038665166367229,
              "median": 0.18156033135316513,
              "min": 0.0,
              "max": 0.5572949698864612,
              "p5": 0.0,
              "p95": 0.4787746234300972,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1598966.575,
              "median": 6674.5,
              "min": 0.0,
              "max": 11920383.0,
              "p5": 31.500000000000004,
              "p95": 7965598.949999994,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.20130877753893658,
              "median": 0.029042443332736385,
              "min": 0.001361840804819715,
              "max": 0.8017118402282455,
              "p5": 0.004657510433540363,
              "p95": 0.7544460294816928,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0024469950753955748,
              "median": 0.0003306360323627477,
              "min": 0.0,
              "max": 0.0091974655872604,
              "p5": 2.4195749364030285e-07,
              "p95": 0.008799411052106871,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.7782725155685433e-06,
              "median": 4.7142904285761484e-08,
              "min": 0.0,
              "max": 9.4562647754137e-06,
              "p5": 1.370399225009238e-10,
              "p95": 7.0718341086224645e-06,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 278.625,
              "median": 2.5,
              "min": 0.0,
              "max": 1803.0,
              "p5": 0.35000000000000003,
              "p95": 1301.0999999999992,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 118736.83750000001,
              "median": 6674.5,
              "min": 0.0,
              "max": 621000.0,
              "p5": 31.500000000000004,
              "p95": 477802.6799999998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 57.125,
              "median": 2.5,
              "min": 0.0,
              "max": 369.0,
              "p5": 0.35000000000000003,
              "p95": 258.04999999999984,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.26903512886561015,
              "median": 0.2729557875551343,
              "min": 0.0,
              "max": 0.5572949698864612,
              "p5": 0.0,
              "p95": 0.5414863770218136,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.20839238634169543,
              "median": 0.04040404040404044,
              "min": 0.010778039744021565,
              "max": 0.8017118402282455,
              "p5": 0.010842284576423696,
              "p95": 0.7544460294816928,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 7.530540918552968,
              "median": 1.67896234676007,
              "min": 1.0,
              "max": 40.142857142857146,
              "p5": 1.0,
              "p95": 29.901680672268895,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003681873550521249,
              "median": 0.0003306360323627477,
              "min": 0.0,
              "max": 0.015093930113398867,
              "p5": 2.4195749364030285e-07,
              "p95": 0.013030167529250401,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.8158366642218374e-06,
              "median": 3.1054874460048885e-07,
              "min": 0.0,
              "max": 9.4562647754137e-06,
              "p5": 0.0,
              "p95": 7.0718341086224645e-06,
              "count": 7
            }
          },
          "returns": {
            "window_days": 5,
            "n_obs": 5,
            "stock": 0.04081632653061207,
            "market": 0.003748740578446208,
            "sector": 0.010196427549892029,
            "peers": 0.010082677664974726,
            "vs_market": 0.03706758595216586,
            "vs_sector": 0.03061989898072004,
            "vs_peers": 0.030733648865637342
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 68.63799283154121,
          "score_pca_percentile": 68.63799283154121,
          "rank_pca": 176,
          "total": 558,
          "adv_notional_sgd": 188278.0,
          "adv_volume_shares": 818600.0,
          "free_float_shares": null,
          "turnover_ratio": 0.001435532755342298,
          "votes": 39.0,
          "trades": 39.0,
          "spread_pct": 0.023280423280423297,
          "spread_ticks": 1.1176470588235294,
          "amihud": 4.7142904285761484e-08,
          "volatility": 0.560161009268252
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5270794684754931,
          "loadings": {
            "log_adv": 0.5392529414067864,
            "log_trades": 0.49127809857936466,
            "log_turnover": 0.4864805767908172,
            "neg_spread": 0.4151376912374711,
            "neg_amihud": 0.1534432810749687,
            "neg_vol": 0.18789518421880494
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
          "peer_median_adv": 6619.5,
          "peer_median_score_pca": 46.05734767025089,
          "peer_median_trades": 5.0,
          "peer_median_volatility": 0.5041435145346413,
          "peer_median_spread_pct": 0.036167705715678636,
          "peer_median_spread_ticks": 1.6745672436750998,
          "peer_median_amihud": 5.48973802898043e-07,
          "peer_median_turnover_ratio": 0.00011614759855650702,
          "target_vs_peer": {
            "score_pca_delta": 22.58,
            "adv_delta_pct": 2744.3,
            "trades_delta_pct": 680.0,
            "volatility_delta_pct": -11.11,
            "spread_pct_delta_pct": 35.63,
            "spread_ticks_delta_pct": -33.26,
            "amihud_delta_pct": 91.41,
            "turnover_ratio_delta_pct": 1135.96
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 68.63799283154121,
            "rank_pca": 176,
            "adv": 188278.0,
            "trades": 39.0,
            "volatility": 0.560161009268252,
            "spread_pct": 0.023280423280423297,
            "spread_ticks": 1.1176470588235294,
            "amihud": 4.7142904285761484e-08,
            "turnover_ratio": 0.001435532755342298,
            "is_target": true
          },
          {
            "ticker": "KUX",
            "score_pca": 2.1505376344086025,
            "rank_pca": 547,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 4.014372790730359,
            "spread_pct": 0.5660377358490567,
            "spread_ticks": 28.375,
            "amihud": 0.00031763779127385455,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 14.695340501792115,
            "rank_pca": 477,
            "adv": 1500.0,
            "trades": 3.0,
            "volatility": 3.9496835316263,
            "spread_pct": 0.6666666666666666,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.00016260877732995004,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 44.982078853046595,
            "rank_pca": 308,
            "adv": 4432.5,
            "trades": 4.0,
            "volatility": 0.25009272164573637,
            "spread_pct": 0.014398848092152639,
            "spread_ticks": 2.2,
            "amihud": 1.0249902381882072e-06,
            "turnover_ratio": 6.9686419783064e-05,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 67.56272401433692,
            "rank_pca": 182,
            "adv": 203786.0,
            "trades": 67.0,
            "volatility": 1.589887169065916,
            "spread_pct": 0.04588775150017653,
            "spread_ticks": 1.0627615062761506,
            "amihud": 1.9253151018828551e-07,
            "turnover_ratio": 0.015093930113398867,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 22.58064516129032,
            "rank_pca": 433,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.3211951179630725,
            "spread_pct": 0.035307517084282446,
            "spread_ticks": 2.6,
            "amihud": 2.7260964520959306e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 71.14695340501792,
            "rank_pca": 162,
            "adv": 145662.8,
            "trades": 47.0,
            "volatility": 0.5306860827878794,
            "spread_pct": 0.037027894347074826,
            "spread_ticks": 1.010752688172043,
            "amihud": 7.338955501652384e-08,
            "turnover_ratio": 0.006463914590429667,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 47.132616487455195,
            "rank_pca": 296,
            "adv": 8806.5,
            "trades": 6.0,
            "volatility": 0.47760094628140315,
            "spread_pct": 0.020979020979020997,
            "spread_ticks": 3.5384615384615383,
            "amihud": 9.054160956078003e-07,
            "turnover_ratio": 6.774809821928479e-05,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 85.66308243727599,
            "rank_pca": 81,
            "adv": 1027979.0000000001,
            "trades": 481.0,
            "volatility": 0.32438366424899767,
            "spread_pct": 0.01013835115561731,
            "spread_ticks": 1.1491344873501996,
            "amihud": 1.2112369650917102e-08,
            "turnover_ratio": 0.014581167263539233,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Software - Application",
          "sector_count": 8,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6336636825399498,
              "median": 0.38516683142960784,
              "min": 0.0,
              "max": 5.55877684387492,
              "p5": 0.07600395769320081,
              "p95": 1.8316303964988099,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3305123.414284709,
              "median": 16249.4,
              "min": 0.0,
              "max": 268652400.0,
              "p5": 0.0,
              "p95": 14298816.299999999,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1027829924945668,
              "median": 0.02981189731057282,
              "min": 0.0002705286818559187,
              "max": 1.2631578947368423,
              "p5": 0.0033722613348105427,
              "p95": 0.5061197356587026,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004639561397343174,
              "median": 0.00034298567790598365,
              "min": 0.0,
              "max": 0.8766725990376376,
              "p5": 0.0,
              "p95": 0.014110326446934664,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.350575207970881e-05,
              "median": 8.816201021844527e-08,
              "min": 0.0,
              "max": 0.010416666666666664,
              "p5": 0.0,
              "p95": 3.513893459681999e-05,
              "count": 545
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 492.7508960573477,
              "median": 8.0,
              "min": 0.0,
              "max": 12747.0,
              "p5": 0.0,
              "p95": 2815.5499999999975,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.266286331674859,
              "median": 0.4009923052652004,
              "min": 0.2328008716347501,
              "max": 4.014372790730359,
              "p5": 0.2388530191385953,
              "p95": 3.9917315500439385,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1643922.375,
              "median": 6619.5,
              "min": 0.0,
              "max": 11920383.0,
              "p5": 0.0,
              "p95": 8108041.599999994,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.16725848570216692,
              "median": 0.022129722129722147,
              "min": 0.0012593225101152894,
              "max": 0.6666666666666666,
              "p5": 0.0043669825360409965,
              "p95": 0.6314465408805031,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003022858239670808,
              "median": 0.00011614759855650702,
              "min": 0.0,
              "max": 0.014581167263539233,
              "p5": 0.0,
              "p95": 0.01223090163240392,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.0294250766678104e-05,
              "median": 4.7627949994678093e-07,
              "min": 0.0,
              "max": 0.00031763779127385455,
              "p5": 1.5987990958441108e-10,
              "p95": 0.00020741869808623887,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 385.5,
              "median": 5.0,
              "min": 0.0,
              "max": 2551.0,
              "p5": 0.0,
              "p95": 1826.4999999999989,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 174020.85,
              "median": 6619.5,
              "min": 0.0,
              "max": 1027979.0000000001,
              "p5": 0.0,
              "p95": 739511.4499999997,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 76.0,
              "median": 5.0,
              "min": 0.0,
              "max": 481.0,
              "p5": 0.0,
              "p95": 336.0999999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.432237753043708,
              "median": 0.5041435145346413,
              "min": 0.25009272164573637,
              "max": 4.014372790730359,
              "p5": 0.274978560356804,
              "p95": 3.9917315500439385,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.17455547320925602,
              "median": 0.036167705715678636,
              "min": 0.01013835115561731,
              "max": 0.6666666666666666,
              "p5": 0.011629525083404674,
              "p95": 0.6314465408805031,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 5.117013777532492,
              "median": 1.6745672436750998,
              "min": 1.0,
              "max": 28.375,
              "p5": 1.003763440860215,
              "p95": 19.682211538461527,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.032154093682528e-05,
              "median": 5.48973802898043e-07,
              "min": 0.0,
              "max": 0.00031763779127385455,
              "p5": 4.2393293778209865e-09,
              "p95": 0.00020741869808623887,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0045548819078375085,
              "median": 0.00011614759855650702,
              "min": 0.0,
              "max": 0.015093930113398867,
              "p5": 0.0,
              "p95": 0.014914463115947995,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.10869565217391197,
            "market": -0.006893611928115995,
            "sector": -0.00557050949089255,
            "peers": 0.004681296454256634,
            "vs_market": 0.11558926410202797,
            "vs_sector": 0.11426616166480452,
            "vs_peers": 0.10401435571965534
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 72.58064516129032,
          "score_pca_percentile": 72.58064516129032,
          "rank_pca": 154,
          "total": 558,
          "adv_notional_sgd": 228475.0,
          "adv_volume_shares": 913900.0,
          "free_float_shares": null,
          "turnover_ratio": 0.001602655002574305,
          "votes": 68.0,
          "trades": 68.0,
          "spread_pct": 0.02496157393175533,
          "spread_ticks": 1.1699029126213591,
          "amihud": 7.83519022118116e-08,
          "volatility": 0.5597510480519746
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.5525976077920575,
          "loadings": {
            "log_adv": 0.5226735439867005,
            "log_trades": 0.4717439163649624,
            "log_turnover": 0.47510716337193,
            "neg_spread": 0.42578378300947267,
            "neg_amihud": 0.18369651676207538,
            "neg_vol": 0.2520059264329533
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
          "peer_median_adv": 6444.25,
          "peer_median_score_pca": 45.6989247311828,
          "peer_median_trades": 5.5,
          "peer_median_volatility": 0.5673901383969766,
          "peer_median_spread_pct": 0.04436533155610937,
          "peer_median_spread_ticks": 1.6154754569726844,
          "peer_median_amihud": 5.152466424607622e-07,
          "peer_median_turnover_ratio": 7.597598381038349e-05,
          "target_vs_peer": {
            "score_pca_delta": 26.88,
            "adv_delta_pct": 3445.4,
            "trades_delta_pct": 1136.36,
            "volatility_delta_pct": 1.35,
            "spread_pct_delta_pct": 43.74,
            "spread_ticks_delta_pct": -27.58,
            "amihud_delta_pct": 84.79,
            "turnover_ratio_delta_pct": 2009.42
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 72.58064516129032,
            "rank_pca": 154,
            "adv": 228475.0,
            "trades": 68.0,
            "volatility": 0.5597510480519746,
            "spread_pct": 0.02496157393175533,
            "spread_ticks": 1.1699029126213591,
            "amihud": 7.83519022118116e-08,
            "turnover_ratio": 0.001602655002574305,
            "is_target": true
          },
          {
            "ticker": "KUX",
            "score_pca": 3.046594982078853,
            "rank_pca": 542,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 2.28509876728461,
            "spread_pct": 0.4408945686900958,
            "spread_ticks": 19.6,
            "amihud": 0.00036013640690511566,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 2.6881720430107525,
            "rank_pca": 543,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 2.250447984076117,
            "spread_pct": 0.6666666666666666,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 45.878136200716845,
            "rank_pca": 303,
            "adv": 4432.5,
            "trades": 4.0,
            "volatility": 0.33979649952943153,
            "spread_pct": 0.02206359506813759,
            "spread_ticks": 1.9444444444444444,
            "amihud": 1.7770953731544884e-06,
            "turnover_ratio": 6.9686419783064e-05,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 45.51971326164875,
            "rank_pca": 305,
            "adv": 8456.0,
            "trades": 9.0,
            "volatility": 1.1322939309927187,
            "spread_pct": 0.07011686143572618,
            "spread_ticks": 1.125,
            "amihud": 2.0823608708066677e-07,
            "turnover_ratio": 0.0010327416867919068,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 35.483870967741936,
            "rank_pca": 361,
            "adv": 639.0,
            "trades": 1.0,
            "volatility": 0.36509007490498396,
            "spread_pct": 0.04377431906614782,
            "spread_ticks": 3.3333333333333335,
            "amihud": 1.855230614885314e-06,
            "turnover_ratio": 3.2038334365442344e-05,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 63.620071684587806,
            "rank_pca": 204,
            "adv": 52150.5,
            "trades": 24.0,
            "volatility": 0.60455271913286,
            "spread_pct": 0.04495634404607091,
            "spread_ticks": 1.0480769230769231,
            "amihud": 0.0,
            "turnover_ratio": 0.0027302164575457926,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 50.89605734767025,
            "rank_pca": 275,
            "adv": 9157.5,
            "trades": 7.0,
            "volatility": 0.35931287992789507,
            "spread_pct": 0.016704013037278483,
            "spread_ticks": 2.86046511627907,
            "amihud": 8.222571978408574e-07,
            "turnover_ratio": 8.226554783770296e-05,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 83.51254480286738,
            "rank_pca": 93,
            "adv": 809414.0,
            "trades": 358.0,
            "volatility": 0.5302275576610933,
            "spread_pct": 0.010621495696122571,
            "spread_ticks": 1.2865064695009243,
            "amihud": 1.8048675400492878e-08,
            "turnover_ratio": 0.011869321934992728,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Software - Application",
          "sector_count": 8,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6931449971804232,
              "median": 0.47366130867405953,
              "min": 0.0,
              "max": 7.013811259728677,
              "p5": 0.16109197823379615,
              "p95": 2.233353574586954,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3372078.2203803444,
              "median": 13514.5,
              "min": 0.0,
              "max": 306786193.7,
              "p5": 0.0,
              "p95": 13424509.399999987,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10102734679409033,
              "median": 0.03144310246184567,
              "min": 0.0002709146678517975,
              "max": 1.3542204201990415,
              "p5": 0.0035544589348858063,
              "p95": 0.4801396414984653,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006430084174459412,
              "median": 0.0002837326975699041,
              "min": 0.0,
              "max": 2.2707797772065126,
              "p5": 0.0,
              "p95": 0.011182811623954,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.884220814389684e-05,
              "median": 1.4351502470005683e-07,
              "min": 0.0,
              "max": 0.002923830374993834,
              "p5": 0.0,
              "p95": 3.933617224214761e-05,
              "count": 555
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 477.7795698924731,
              "median": 7.0,
              "min": 0.0,
              "max": 11430.0,
              "p5": 0.0,
              "p95": 2817.999999999999,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.870825141984301,
              "median": 0.4476588162830386,
              "min": 0.27687632443830296,
              "max": 2.28509876728461,
              "p5": 0.29889838572019795,
              "p95": 2.2729709931616373,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2089332.7500000002,
              "median": 6795.0,
              "min": 0.0,
              "max": 15662544.000000002,
              "p5": 0.0,
              "p95": 10463948.499999993,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15337918044446283,
              "median": 0.023512584499946462,
              "min": 0.0013472113994984552,
              "max": 0.6666666666666666,
              "p5": 0.004593210903316896,
              "p95": 0.5876464323748667,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0029255619428021186,
              "median": 7.597598381038349e-05,
              "min": 0.0,
              "max": 0.011869321934992728,
              "p5": 0.0,
              "p95": 0.011127044163747568,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.558600509620352e-05,
              "median": 4.503045500263345e-07,
              "min": 0.0,
              "max": 0.00036013640690511566,
              "p5": 2.2753535685562302e-10,
              "p95": 0.00023473799520353484,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 503.625,
              "median": 5.5,
              "min": 0.0,
              "max": 3591.0,
              "p5": 0.0,
              "p95": 2459.449999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 110531.1875,
              "median": 6444.25,
              "min": 0.0,
              "max": 809414.0,
              "p5": 0.0,
              "p95": 544371.7749999997,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 50.375,
              "median": 5.5,
              "min": 0.0,
              "max": 358.0,
              "p5": 0.0,
              "p95": 241.09999999999982,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.9833525516887136,
              "median": 0.5673901383969766,
              "min": 0.33979649952943153,
              "max": 2.28509876728461,
              "p5": 0.3466272326688938,
              "p95": 2.2729709931616373,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.16447473296328075,
              "median": 0.04436533155610937,
              "min": 0.010621495696122571,
              "max": 0.6666666666666666,
              "p5": 0.01275037676552714,
              "p95": 0.5876464323748667,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 4.024728285829337,
              "median": 1.6154754569726844,
              "min": 1.0,
              "max": 19.6,
              "p5": 1.0168269230769231,
              "p95": 13.90666666666666,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.560215935668468e-05,
              "median": 5.152466424607622e-07,
              "min": 0.0,
              "max": 0.00036013640690511566,
              "p5": 0.0,
              "p95": 0.00023473799520353484,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00197703379766458,
              "median": 7.597598381038349e-05,
              "min": 0.0,
              "max": 0.011869321934992728,
              "p5": 0.0,
              "p95": 0.008670635017886296,
              "count": 8
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": 0.01999999999999913,
            "market": -0.0066521225186154664,
            "sector": -0.08405923099396839,
            "peers": -0.02395965398305544,
            "vs_market": 0.026652122518614596,
            "vs_sector": 0.10405923099396752,
            "vs_peers": 0.04395965398305457
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Current tradability still screens strong, but the displayed book is uneven because bid depth is much lighter than ask depth.",
        "market_comparison": "The stock sits well above peers on liquidity score, which matters because access looks better than the peer set even if the book is thinner on the buy side."
      },
      "1w": {
        "liquidity": "Near-term liquidity appears broadly steady rather than improving, with structural access still the stronger signal than any short-term shift.",
        "market_comparison": "Return 4.1% vs peers 1.0%."
      },
      "30d": {
        "liquidity": "Monthly tradability is strong for the company’s size, supported by a 1M liquidity score of 68.6 compared with a peer median of 46.1.",
        "market_comparison": "The stock returned 10.9% over 1M compared with 0.5% for peers and -0.7% for the market, which matters because stronger performance can reinforce access."
      },
      "3m": {
        "liquidity": "Structural liquidity is strong and looks stable on the 3M view, with a score of 72.6 compared with a peer median of 45.7.",
        "market_comparison": "Average daily volume of S$228.5K compared with a peer median of S$6.4K shows materially better access than peers, which matters for overall tradability."
      }
    }
  },
  "q02": {
    "driver_model": {
      "valid": true,
      "model_method": "ols_with_volatility_regimes",
      "estimation_window_days": 72,
      "reporting_window_days": 63,
      "available_history_days": 72,
      "n_regimes": 2,
      "current_regime": 0,
      "current_regime_label": "Low Volatility",
      "current_regime_probability": 1.0,
      "current_driver_mix": {
        "market_share": {
          "median": 0.42052048583085877,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "42.1%",
          "display_range": null,
          "display_text": "42.1%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 72 trading days.",
          "kind": "share_pct",
          "value_pct": 42.1,
          "plain_english": "Market explains about 42.1% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.5393714076886427,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "53.9%",
          "display_range": null,
          "display_text": "53.9%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 72 trading days.",
          "kind": "share_pct",
          "value_pct": 53.9,
          "plain_english": "Sector explains about 53.9% of price moves in the current state."
        },
        "company_share": {
          "median": 0.04010810648049852,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "4.0%",
          "display_range": null,
          "display_text": "4.0%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 72 trading days.",
          "kind": "share_pct",
          "value_pct": 4.0,
          "plain_english": "Company-specific explains about 4.0% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 9.25888526190966,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "9.26",
          "display_range": null,
          "display_text": "9.26",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 72 trading days.",
          "kind": "beta",
          "strength_label": "Very high",
          "plain_english": "Very high market link: a 1% market move has lined up with about a 9.26% stock move in the same direction in this state. The multiplier is unusually large and comes from only 72 trading days of history.",
          "value_num": 9.26
        },
        "beta_stock_lag": {
          "median": -0.19847545373876133,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.20",
          "display_range": null,
          "display_text": "-0.20",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 72 trading days.",
          "kind": "lag_beta",
          "value_num": -0.2
        },
        "beta_sector": {
          "median": 1.4268789864293348,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.43",
          "display_range": null,
          "display_text": "1.43",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 72 trading days.",
          "kind": "beta",
          "strength_label": "Moderate",
          "plain_english": "Moderate sector link: a 1% sector move has lined up with about a 1.43% stock move in the same direction in this state.",
          "value_num": 1.43
        },
        "beta_market_lag": {
          "median": -11.686842956222067,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-11.69",
          "display_range": null,
          "display_text": "-11.69",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 72 trading days.",
          "kind": "lag_beta",
          "value_num": -11.69
        },
        "beta_sector_lag": {
          "median": 10.995139201644047,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "11.00",
          "display_range": null,
          "display_text": "11.00",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 72 trading days.",
          "kind": "lag_beta",
          "value_num": 11.0
        },
        "posterior_source": null,
        "intervals_collapsed": false,
        "confidence_label": "High, limited history",
        "confidence_note": "Based on 72 trading days relative to the 252-day target."
      },
      "rolling_windows": {},
      "monthly_history": [
        {
          "month_key": "2026-01",
          "month_label": "January 2026",
          "month_short_label": "Jan",
          "period_label": "2026-01-26 to 2026-01-30",
          "n_obs": 5,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.47931948471963903,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.9%",
            "display_range": null,
            "display_text": "47.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
            "kind": "share_pct",
            "value_pct": 47.9,
            "plain_english": "Market explains about 47.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.47931948471963903,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.9%",
              "display_range": null,
              "display_text": "47.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 47.9,
              "plain_english": "Market explains about 47.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2984396411024004,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "29.8%",
              "display_range": null,
              "display_text": "29.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 29.8,
              "plain_english": "Sector explains about 29.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.2222408741779605,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "22.2%",
              "display_range": null,
              "display_text": "22.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 22.2,
              "plain_english": "Company-specific explains about 22.2% of price moves in the current state."
            }
          },
          "summary": "Jan: Mostly market-driven, though based on only 5 trading days."
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
            "median": 0.5656898926629685,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "56.6%",
            "display_range": null,
            "display_text": "56.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
            "kind": "share_pct",
            "value_pct": 56.6,
            "plain_english": "Company-specific explains about 56.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.26479317957873116,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.5%",
              "display_range": null,
              "display_text": "26.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 26.5,
              "plain_english": "Market explains about 26.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.16951692775830024,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "17.0%",
              "display_range": null,
              "display_text": "17.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 17.0,
              "plain_english": "Sector explains about 17.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5656898926629685,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.6%",
              "display_range": null,
              "display_text": "56.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 56.6,
              "plain_english": "Company-specific explains about 56.6% of price moves in the current state."
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
            "median": 0.537921465360335,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "53.8%",
            "display_range": null,
            "display_text": "53.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 53.8,
            "plain_english": "Company-specific explains about 53.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.22982068067655398,
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
              "median": 0.23225785396311108,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "23.2%",
              "display_range": null,
              "display_text": "23.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 23.2,
              "plain_english": "Sector explains about 23.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.537921465360335,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "53.8%",
              "display_range": null,
              "display_text": "53.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 53.8,
              "plain_english": "Company-specific explains about 53.8% of price moves in the current state."
            }
          },
          "summary": "Mar: Mostly company-driven."
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-30",
          "n_obs": 21,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5202476822091704,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "52.0%",
            "display_range": null,
            "display_text": "52.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 52.0,
            "plain_english": "Company-specific explains about 52.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.34425966677405034,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.4%",
              "display_range": null,
              "display_text": "34.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 34.4,
              "plain_english": "Market explains about 34.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1354926510167792,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "13.5%",
              "display_range": null,
              "display_text": "13.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 13.5,
              "plain_english": "Sector explains about 13.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5202476822091704,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.0%",
              "display_range": null,
              "display_text": "52.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 52.0,
              "plain_english": "Company-specific explains about 52.0% of price moves in the current state."
            }
          },
          "summary": "Apr: Mostly company-driven."
        },
        {
          "month_key": "2026-05",
          "month_label": "May 2026",
          "month_short_label": "May",
          "period_label": "2026-05-04 to 2026-05-11",
          "n_obs": 6,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5282355311464603,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "52.8%",
            "display_range": null,
            "display_text": "52.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
            "kind": "share_pct",
            "value_pct": 52.8,
            "plain_english": "Market explains about 52.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.5282355311464603,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.8%",
              "display_range": null,
              "display_text": "52.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 52.8,
              "plain_english": "Market explains about 52.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.41972376150696933,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.0%",
              "display_range": null,
              "display_text": "42.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 42.0,
              "plain_english": "Sector explains about 42.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.05204070734657046,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "5.2%",
              "display_range": null,
              "display_text": "5.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 5.2,
              "plain_english": "Company-specific explains about 5.2% of price moves in the current state."
            }
          },
          "summary": "May: Mostly market-driven, though based on only 6 trading days."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5,
          "expected_duration_days": 5.833333333333333,
          "current_probability": 1.0,
          "n_days_effective": 35.0,
          "volatility": {
            "median": 0.02759855260307063,
            "low": 0.02759855260307063,
            "high": 0.02759855260307063
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": null
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.5,
          "expected_duration_days": 7.0,
          "current_probability": 0.0,
          "n_days_effective": 35.0,
          "volatility": {
            "median": 0.042579971760279195,
            "low": 0.042579971760279195,
            "high": 0.042579971760279195
          },
          "volatility_label": "High Volatility",
          "current_probability_display": 0.0
        }
      ],
      "transitions": {
        "mean": [
          [
            0.8529411764705882,
            0.14705882352941177
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
            29.0,
            5.0
          ],
          [
            5.0,
            30.0
          ]
        ]
      },
      "methodology": {
        "estimation_window_days": 72,
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
        "market_link_display": "9.26",
        "sector_link_display": "1.43",
        "market_link_explainer": "Very high market link. A 1% market move has lined up with about a 9.26% stock move in the same direction in this state. This is a point estimate from 72 trading days.",
        "sector_link_explainer": "Moderate sector link. A 1% sector move has lined up with about a 1.43% stock move in the same direction in this state. This is a point estimate from 72 trading days.",
        "stock_persistence_display": "-0.20",
        "point_estimate_note": "Point estimate only because the current state has 72 trading days.",
        "history_limited_note": "Read is based on 72 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "Low Volatility",
        "dominant_driver": "sector",
        "dominant_driver_label": "Sector",
        "driver_share_pct": 53.9,
        "driver_share_display": "53.9%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 72 trading days relative to the 252-day target.",
        "history_days": 72,
        "history_limited": true,
        "volatility_label": "Low Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.8529411764705882,
        "effective_days": 35.0,
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
          "pct_time": 0.5,
          "expected_duration_days": 5.833333333333333,
          "current_probability": 1.0,
          "n_days_effective": 35.0,
          "volatility": {
            "median": 0.02759855260307063,
            "low": 0.02759855260307063,
            "high": 0.02759855260307063
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.5,
          "expected_duration_days": 7.0,
          "current_probability": 0.0,
          "n_days_effective": 35.0,
          "volatility": {
            "median": 0.042579971760279195,
            "low": 0.042579971760279195,
            "high": 0.042579971760279195
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.8529411764705882,
          0.14705882352941177
        ],
        [
          0.14285714285714285,
          0.8571428571428571
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.8529411764705882,
            0.14705882352941177
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
            29.0,
            5.0
          ],
          [
            5.0,
            30.0
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
        "text": "Liquidity score: 72.6 — Strong",
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
        "text": "Execution: thin buy-side",
        "bg": "bg-red-500/20",
        "textColor": "text-red-400"
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
    "liq_subtitle": "Monthly liquidity remains strong relative to peers, although displayed buy-side depth is light.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent returns are ahead of both peers and the market, giving the tape a firmer backdrop.",
    "perf_insight": "Performance is strong, with the stock up 10.9% over one month compared with 0.5% for peers and -0.7% for the market. That matters because the return backdrop is firmer even as sector moves remain the main driver at 53.9%.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Sector moves are the main influence on the tape, accounting for 53.9% of current trading.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly sector-driven, accounting for about 53.9% of price changes. Other influences are market 42.1%, and company-specific 4.0%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 42.1%, sector 53.9%, and company-specific 4.0%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has shifted from company-driven to market-driven over Mar to May."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 42.1%, sector 53.9%, and company-specific 4.0%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "That matters because the stock is moving mainly with the group, while bid depth is only 0.27x of ask depth despite a 1 tick",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Sector is the main driver now, accounting for 53.9% of recent price moves.",
      "The pattern has become more market-led in May after being mostly sector in March and April."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "The market backdrop is constructive, with returns running ahead of peers and the market over one month.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on available history from Jan 22, 2026 to May 11, 2026 (74 trading days • 12,003 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on the displayed order book.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is thin enough that downside execution may feel worse than the monthly liquidity score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The key watchpoint is buy-side support, because displayed bid depth is only 0.27x of ask depth even with a 1 tick spread. That leaves immediate selling conditions thinner than the strong 3M liquidity profile implies.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 19.7% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "The live trading picture is defined more by book shape than by spread.",
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
    "intraday_insight": "Session split is open 1.9%, continuous 95.9%, and close 1.5%. Current trading concentration score is 0.287.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "The main trading signal remains strong structural liquidity alongside thin displayed buy-side support.",
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
    "exec_subtitle": "Liquidity screens well for the stock’s size, but the live book is thin on the buy side.",
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
        "value": "72.6/100",
        "sub": "Peer median 45.7 (+26.9 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "S$228.5K",
        "sub": "Peer median S$6.4K",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "2.50%",
        "sub": "1.17 ticks; peers 4.44%",
        "interp": {
          "text": "Tighter",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "3M liquidity is strong: score 72.6 vs peer median 45.7 (+26.9 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "0.253",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "1.98%",
        "note": "1.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.27x",
        "note": "Bid depth / ask depth on the displayed order book",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-0.99% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-6.73% with 67.8% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-6.73% with 27.1% fill.",
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
        "value": "73",
        "suffix": "/100",
        "bar_pct": 73,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Rank 154/558",
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
        "value": "2.50",
        "suffix": "%",
        "bar_pct": 25,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "2.50% • 1.17 ticks vs peers 4.44%",
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
        "value": "228.5K",
        "value_prefix": "S$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Peer median S$6.4K",
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
        "value": "53.9",
        "suffix": "sector",
        "bar_pct": 54,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 42.1% • Company 4.0%",
        "interpretation": {
          "text": "Sector",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is strong for the stock’s size, with a 3M liquidity score of 72.6 compared with a peer median of 45.7. That points to better baseline access than peers under normal conditions.",
      "The return backdrop is firm, with the stock up 10.9% over one month compared with 0.5% for peers and -0.7% for the market. That matters because recent performance is stronger than the main comparison groups.",
      "The main caveat is the displayed book, because bid depth is only 0.27x of ask depth even with a 1 tick spread. That matters because buy-side support looks thin while sector moves still account for 53.9% of the tape."
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
      "overall": "3M liquidity is strong: score 72.6 vs peer median 45.7 (+26.9 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "strengths": [
        "3M score 72.6 vs peer median 45.7 (+26.9 pts)."
      ],
      "concerns": [],
      "peer_context": "Primary-period score gap vs peers: +26.9 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "3M return is 2.0%, better than market, sector, and peers, which suggests stronger price performance than comparable names.",
        "vs_market": "Better than market: 2.0% vs market -0.7%.",
        "vs_sector": "Better than sector: 2.0% vs sector -8.4%.",
        "vs_peers": "Better than peers: 2.0% vs peers -2.4%."
      },
      "adv": {
        "insight": "ADV is S$228.5K, better than market, sector, and peers, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: S$228.5K vs market S$13.5K.",
        "vs_sector": "Better than sector: S$228.5K vs sector S$6.8K.",
        "vs_peers": "Better than peers: S$228.5K vs peers S$6.4K."
      },
      "spread": {
        "insight": "Spread is 2.50%, better than market and peers, which keeps trading costs more competitive than comparable names.",
        "vs_market": "Better than market: 2.50% vs market 3.14%.",
        "vs_sector": "In line with sector: 2.50% vs secto%.",
        "vs_peers": "Better than peers: 2.50% vs peers 4.44%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.16%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.16% vs market 0.03%.",
        "vs_sector": "Better than sector: 0.16% vs sector 0.01%.",
        "vs_peers": "Better than peers: 0.16% vs peers 0.01%."
      },
      "volatility": {
        "insight": "Volatility is 55.98%, worse than market and sector, which suggests day-to-day price swings are heavier than comparable names.",
        "vs_market": "Worse than market: 55.98% vs market 47.37%.",
        "vs_sector": "Worse than sector: 55.98% vs sector 44.77%.",
        "vs_peers": "In line with peers: 55.98% vs peers 56.74%."
      },
      "trades": {
        "insight": "Trades is 68, better than market, sector, and peers, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 68 vs market 7.",
        "vs_sector": "Better than sector: 68 vs sector 6.",
        "vs_peers": "Better than peers: 68 vs peers 6."
      },
      "amihud": {
        "insight": "Price impact is 7.84e-08, better than market, sector, and peers, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 7.84e-08 vs market 1.44e-07.",
        "vs_sector": "Better than sector: 7.84e-08 vs sector 4.50e-07.",
        "vs_peers": "Better than peers: 7.84e-08 vs peers 5.15e-07."
      }
    },
    "performance": {
      "overall": "Recent performance is strong relative to both peers and the market, with a 10.9% one-month gain compared with 0.5% for peers and -0.7% for the market. That move is broadly confirmed by liquidity, as the three-month liquidity score of 72.6 sits 26.9 points above the peer median, which supports access for the stock's size. The main contradiction is in the displayed book, where bid depth is only 0.27x ask depth despite a 1-tick spread, so immediate buy-side support looks thinner than the broader liquidity profile.",
      "conclusion": "The recent outperformance looks broadly supported by liquidity, but it appears primarily sector-linked rather than company-specific, with thinner buy-side depth tempering the near-term trading picture."
    },
    "drivers": {
      "overall": "Sector moves are the main force in the stock now, with 53.9% of recent price action tied to the sector. That matters because the name is currently trading more with its group than on company-specific news, even as the 1M return of +10.9% sits well ahead of peers at +0.5% and the market at -0.7%.",
      "beta": "Based on the last 5 trading days, current mix is market 42.1%, sector 53.9%, and company-specific 4.0%.",
      "rolling_change": "The driver mix has shifted from mostly sector in March and April to more market-led in May. That points to a pattern that is changing rather than fully settled, especially with May based on only 6 trading days."
    },
    "regime": {
      "overall": "Low volatility points to a steadier trading backdrop, and that matters because the stock already screens well on 3M liquidity with a score of 72.6 compared with a peer median of 45.7.",
      "current": "The stock is currently in a low-volatility state, which fits with a firmer tape after a 1M return of +10.9% compared with +0.5% for peers and -0.7% for the market.",
      "transitions": "The state looks fairly stable, with a typical run length of about 5.8 days, although the read is based on a shorter available history and may be treated as mixed rather than fully settled.",
      "trading_implications": "This state looks more persistent, with a typical run length of about 5.8 days."
    },
    "execution": {
      "overall": "The displayed book is thin buy-side rather than balanced because bid depth is only 0.27x ask depth while the spread remains 1 tick. That matters because the top line still looks orderly, but available visible support on the buy side is light.",
      "concern": "The clearest stress point is the imbalance in displayed depth, with materially less size bid than offered. Trade-size percentile context is based on 74 trading days and 12,003 trades, which makes the historical size framing less complete than the current book signal.",
      "peer_context": "The broader liquidity picture remains strong for size, with a 3M score of 72.6 compared with a peer median of 45.7, but the current book tempers that read. In practical terms, the stock screens well on monthly liquidity while the displayed depth shows thinner immediate buy-side support."
    },
    "trader_composition": {
      "overall": "By trade count and value, flow looks mainly retail-like.",
      "retail_heavy": "Retail-like trades account for 88.0% of trade count and 35.5% of trade value, while institution-like trades are 1.0% of count and 16.4% of value. That leaves the tape led by many smaller tickets rather than a large institutional presence.",
      "institutional_gap": "Institution-like activity is present in value terms but sparse in count, so the mix is still led by retail-style participation rather than steady institutional flow.",
      "peer_comparison": "The mix stands out as more retail-leaning than a peer set with a stronger institutional share, which makes liquidity breadth more reliant on broad participation."
    },
    "price_moving": {
      "overall": "Price-moving trades account for 19.7% of total trades, so most activity is transacting without shifting the price. That signal sits alongside a retail-like flow mix, which suggests trading is active enough to absorb most orders through the day. The balance between positive and negative price-moving trades is mixed, so the cleaner read is that impact is present but not dominating overall activity.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity appears low and is not the main factor in current trading. The stronger 1M share price performance, up 10.9% compared with peers at 0.5% and the market at -0.7%, points to a firmer backdrop than one driven by short pressure.",
      "level": "Low short interest",
      "correlation": "No clear relationship (correlation undefined)",
      "trend": "The short trend looks stable rather than rising, so it does not add a new source of stress to the tape. That leaves the broader trading picture more influenced by the existing market backdrop than by short positioning.",
      "peaks": "0 notable peak days identified."
    },
    "intraday": {
      "overall": "Session split is open 1.9%, continuous 95.9%, and close 1.5%. Current trading concentration score is 0.287.",
      "hhi_interpretation": "The concentration score of 0.287 indicates activity is not heavily concentrated into a few short periods, which supports a steadier intraday trading pattern.",
      "best_times": "The continuous session is the clearest source of liquidity because almost all trading happens there, while the open and close contribute only a small share.",
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
        "TKU",
        "KUX",
        "532",
        "U77",
        "J03",
        "NXR",
        "42F",
        "LVR",
        "ITS"
      ],
      "scores": [
        72.58064516129032,
        3.046594982078853,
        2.6881720430107525,
        45.878136200716845,
        45.51971326164875,
        35.483870967741936,
        63.620071684587806,
        50.89605734767025,
        83.51254480286738
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
        228475.0,
        0.0,
        0.0,
        4432.5,
        8456.0,
        639.0,
        52150.5,
        9157.5,
        809414.0
      ],
      "total": 558
    },
    "market_comparison": {
      "sector_name": "Software - Application",
      "sector_count": 8,
      "market_count": 558,
      "company": {
        "volatility": 0.5597510480519746,
        "adv": 228475.0,
        "spread_pct": 0.02496157393175533,
        "turnover_ratio": 0.001602655002574305,
        "amihud": 7.83519022118116e-08,
        "trades": 68.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6931449971804232,
          "median": 0.47366130867405953,
          "min": 0.0,
          "max": 7.013811259728677,
          "p5": 0.16109197823379615,
          "p95": 2.233353574586954,
          "count": 558
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 3372078.2203803444,
          "median": 13514.5,
          "min": 0.0,
          "max": 306786193.7,
          "p5": 0.0,
          "p95": 13424509.399999987,
          "count": 558
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.10102734679409033,
          "median": 0.03144310246184567,
          "min": 0.0002709146678517975,
          "max": 1.3542204201990415,
          "p5": 0.0035544589348858063,
          "p95": 0.4801396414984653,
          "count": 556
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.006430084174459412,
          "median": 0.0002837326975699041,
          "min": 0.0,
          "max": 2.2707797772065126,
          "p5": 0.0,
          "p95": 0.011182811623954,
          "count": 551
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.884220814389684e-05,
          "median": 1.4351502470005683e-07,
          "min": 0.0,
          "max": 0.002923830374993834,
          "p5": 0.0,
          "p95": 3.933617224214761e-05,
          "count": 555
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 477.7795698924731,
          "median": 7.0,
          "min": 0.0,
          "max": 11430.0,
          "p5": 0.0,
          "p95": 2817.999999999999,
          "count": 558
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.870825141984301,
          "median": 0.4476588162830386,
          "min": 0.27687632443830296,
          "max": 2.28509876728461,
          "p5": 0.29889838572019795,
          "p95": 2.2729709931616373,
          "count": 8
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 2089332.7500000002,
          "median": 6795.0,
          "min": 0.0,
          "max": 15662544.000000002,
          "p5": 0.0,
          "p95": 10463948.499999993,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.15337918044446283,
          "median": 0.023512584499946462,
          "min": 0.0013472113994984552,
          "max": 0.6666666666666666,
          "p5": 0.004593210903316896,
          "p95": 0.5876464323748667,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0029255619428021186,
          "median": 7.597598381038349e-05,
          "min": 0.0,
          "max": 0.011869321934992728,
          "p5": 0.0,
          "p95": 0.011127044163747568,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 4.558600509620352e-05,
          "median": 4.503045500263345e-07,
          "min": 0.0,
          "max": 0.00036013640690511566,
          "p5": 2.2753535685562302e-10,
          "p95": 0.00023473799520353484,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 503.625,
          "median": 5.5,
          "min": 0.0,
          "max": 3591.0,
          "p5": 0.0,
          "p95": 2459.449999999998,
          "count": 8
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 110531.1875,
          "median": 6444.25,
          "min": 0.0,
          "max": 809414.0,
          "p5": 0.0,
          "p95": 544371.7749999997,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 50.375,
          "median": 5.5,
          "min": 0.0,
          "max": 358.0,
          "p5": 0.0,
          "p95": 241.09999999999982,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.9833525516887136,
          "median": 0.5673901383969766,
          "min": 0.33979649952943153,
          "max": 2.28509876728461,
          "p5": 0.3466272326688938,
          "p95": 2.2729709931616373,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.16447473296328075,
          "median": 0.04436533155610937,
          "min": 0.010621495696122571,
          "max": 0.6666666666666666,
          "p5": 0.01275037676552714,
          "p95": 0.5876464323748667,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 4.024728285829337,
          "median": 1.6154754569726844,
          "min": 1.0,
          "max": 19.6,
          "p5": 1.0168269230769231,
          "p95": 13.90666666666666,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 4.560215935668468e-05,
          "median": 5.152466424607622e-07,
          "min": 0.0,
          "max": 0.00036013640690511566,
          "p5": 0.0,
          "p95": 0.00023473799520353484,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.00197703379766458,
          "median": 7.597598381038349e-05,
          "min": 0.0,
          "max": 0.011869321934992728,
          "p5": 0.0,
          "p95": 0.008670635017886296,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1W",
        "stock": 0.04081632653061207,
        "market": 0.003748740578446208,
        "sector": 0.010196427549892029,
        "peers": 0.010082677664974726
      },
      {
        "horizon": "1M",
        "stock": 0.10869565217391197,
        "market": -0.006893611928115995,
        "sector": -0.00557050949089255,
        "peers": 0.004681296454256634
      },
      {
        "horizon": "3M",
        "stock": 0.01999999999999913,
        "market": -0.0066521225186154664,
        "sector": -0.08405923099396839,
        "peers": -0.02395965398305544
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
      "share_market": 0.42052048583085877,
      "share_sector": 0.5393714076886427,
      "share_idio": 0.04010810648049852,
      "beta_market": 9.25888526190966,
      "beta_sector": 1.4268789864293348,
      "driver_model": {
        "valid": true,
        "model_method": "ols_with_volatility_regimes",
        "estimation_window_days": 72,
        "reporting_window_days": 63,
        "available_history_days": 72,
        "n_regimes": 2,
        "current_regime": 0,
        "current_regime_label": "Low Volatility",
        "current_regime_probability": 1.0,
        "current_driver_mix": {
          "market_share": {
            "median": 0.42052048583085877,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "42.1%",
            "display_range": null,
            "display_text": "42.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 72 trading days.",
            "kind": "share_pct",
            "value_pct": 42.1,
            "plain_english": "Market explains about 42.1% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.5393714076886427,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "53.9%",
            "display_range": null,
            "display_text": "53.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 72 trading days.",
            "kind": "share_pct",
            "value_pct": 53.9,
            "plain_english": "Sector explains about 53.9% of price moves in the current state."
          },
          "company_share": {
            "median": 0.04010810648049852,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "4.0%",
            "display_range": null,
            "display_text": "4.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 72 trading days.",
            "kind": "share_pct",
            "value_pct": 4.0,
            "plain_english": "Company-specific explains about 4.0% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 9.25888526190966,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "9.26",
            "display_range": null,
            "display_text": "9.26",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 72 trading days.",
            "kind": "beta",
            "strength_label": "Very high",
            "plain_english": "Very high market link: a 1% market move has lined up with about a 9.26% stock move in the same direction in this state. The multiplier is unusually large and comes from only 72 trading days of history.",
            "value_num": 9.26
          },
          "beta_stock_lag": {
            "median": -0.19847545373876133,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.20",
            "display_range": null,
            "display_text": "-0.20",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 72 trading days.",
            "kind": "lag_beta",
            "value_num": -0.2
          },
          "beta_sector": {
            "median": 1.4268789864293348,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.43",
            "display_range": null,
            "display_text": "1.43",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 72 trading days.",
            "kind": "beta",
            "strength_label": "Moderate",
            "plain_english": "Moderate sector link: a 1% sector move has lined up with about a 1.43% stock move in the same direction in this state.",
            "value_num": 1.43
          },
          "beta_market_lag": {
            "median": -11.686842956222067,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-11.69",
            "display_range": null,
            "display_text": "-11.69",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 72 trading days.",
            "kind": "lag_beta",
            "value_num": -11.69
          },
          "beta_sector_lag": {
            "median": 10.995139201644047,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "11.00",
            "display_range": null,
            "display_text": "11.00",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 72 trading days.",
            "kind": "lag_beta",
            "value_num": 11.0
          },
          "posterior_source": null,
          "intervals_collapsed": false,
          "confidence_label": "High, limited history",
          "confidence_note": "Based on 72 trading days relative to the 252-day target."
        },
        "rolling_windows": {},
        "monthly_history": [
          {
            "month_key": "2026-01",
            "month_label": "January 2026",
            "month_short_label": "Jan",
            "period_label": "2026-01-26 to 2026-01-30",
            "n_obs": 5,
            "partial_month": true,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.47931948471963903,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.9%",
              "display_range": null,
              "display_text": "47.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 47.9,
              "plain_english": "Market explains about 47.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.47931948471963903,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "47.9%",
                "display_range": null,
                "display_text": "47.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 47.9,
                "plain_english": "Market explains about 47.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2984396411024004,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "29.8%",
                "display_range": null,
                "display_text": "29.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 29.8,
                "plain_english": "Sector explains about 29.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.2222408741779605,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "22.2%",
                "display_range": null,
                "display_text": "22.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 22.2,
                "plain_english": "Company-specific explains about 22.2% of price moves in the current state."
              }
            },
            "summary": "Jan: Mostly market-driven, though based on only 5 trading days."
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
              "median": 0.5656898926629685,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.6%",
              "display_range": null,
              "display_text": "56.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 56.6,
              "plain_english": "Company-specific explains about 56.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.26479317957873116,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.5%",
                "display_range": null,
                "display_text": "26.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 26.5,
                "plain_english": "Market explains about 26.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.16951692775830024,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "17.0%",
                "display_range": null,
                "display_text": "17.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 17.0,
                "plain_english": "Sector explains about 17.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5656898926629685,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "56.6%",
                "display_range": null,
                "display_text": "56.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 56.6,
                "plain_english": "Company-specific explains about 56.6% of price moves in the current state."
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
              "median": 0.537921465360335,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "53.8%",
              "display_range": null,
              "display_text": "53.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 53.8,
              "plain_english": "Company-specific explains about 53.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.22982068067655398,
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
                "median": 0.23225785396311108,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "23.2%",
                "display_range": null,
                "display_text": "23.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 23.2,
                "plain_english": "Sector explains about 23.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.537921465360335,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "53.8%",
                "display_range": null,
                "display_text": "53.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 53.8,
                "plain_english": "Company-specific explains about 53.8% of price moves in the current state."
              }
            },
            "summary": "Mar: Mostly company-driven."
          },
          {
            "month_key": "2026-04",
            "month_label": "April 2026",
            "month_short_label": "Apr",
            "period_label": "2026-04-01 to 2026-04-30",
            "n_obs": 21,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5202476822091704,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.0%",
              "display_range": null,
              "display_text": "52.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 52.0,
              "plain_english": "Company-specific explains about 52.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.34425966677405034,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "34.4%",
                "display_range": null,
                "display_text": "34.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 34.4,
                "plain_english": "Market explains about 34.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1354926510167792,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "13.5%",
                "display_range": null,
                "display_text": "13.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 13.5,
                "plain_english": "Sector explains about 13.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5202476822091704,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "52.0%",
                "display_range": null,
                "display_text": "52.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 52.0,
                "plain_english": "Company-specific explains about 52.0% of price moves in the current state."
              }
            },
            "summary": "Apr: Mostly company-driven."
          },
          {
            "month_key": "2026-05",
            "month_label": "May 2026",
            "month_short_label": "May",
            "period_label": "2026-05-04 to 2026-05-11",
            "n_obs": 6,
            "partial_month": true,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5282355311464603,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.8%",
              "display_range": null,
              "display_text": "52.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 52.8,
              "plain_english": "Market explains about 52.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.5282355311464603,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "52.8%",
                "display_range": null,
                "display_text": "52.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 52.8,
                "plain_english": "Market explains about 52.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.41972376150696933,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "42.0%",
                "display_range": null,
                "display_text": "42.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 42.0,
                "plain_english": "Sector explains about 42.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.05204070734657046,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "5.2%",
                "display_range": null,
                "display_text": "5.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 5.2,
                "plain_english": "Company-specific explains about 5.2% of price moves in the current state."
              }
            },
            "summary": "May: Mostly market-driven, though based on only 6 trading days."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5,
            "expected_duration_days": 5.833333333333333,
            "current_probability": 1.0,
            "n_days_effective": 35.0,
            "volatility": {
              "median": 0.02759855260307063,
              "low": 0.02759855260307063,
              "high": 0.02759855260307063
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": null
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.5,
            "expected_duration_days": 7.0,
            "current_probability": 0.0,
            "n_days_effective": 35.0,
            "volatility": {
              "median": 0.042579971760279195,
              "low": 0.042579971760279195,
              "high": 0.042579971760279195
            },
            "volatility_label": "High Volatility",
            "current_probability_display": 0.0
          }
        ],
        "transitions": {
          "mean": [
            [
              0.8529411764705882,
              0.14705882352941177
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
              29.0,
              5.0
            ],
            [
              5.0,
              30.0
            ]
          ]
        },
        "methodology": {
          "estimation_window_days": 72,
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
          "market_link_display": "9.26",
          "sector_link_display": "1.43",
          "market_link_explainer": "Very high market link. A 1% market move has lined up with about a 9.26% stock move in the same direction in this state. This is a point estimate from 72 trading days.",
          "sector_link_explainer": "Moderate sector link. A 1% sector move has lined up with about a 1.43% stock move in the same direction in this state. This is a point estimate from 72 trading days.",
          "stock_persistence_display": "-0.20",
          "point_estimate_note": "Point estimate only because the current state has 72 trading days.",
          "history_limited_note": "Read is based on 72 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "Low Volatility",
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "driver_share_pct": 53.9,
          "driver_share_display": "53.9%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 72 trading days relative to the 252-day target.",
          "history_days": 72,
          "history_limited": true,
          "volatility_label": "Low Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.8529411764705882,
          "effective_days": 35.0,
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
          "month_key": "2026-01",
          "month_label": "January 2026",
          "month_short_label": "Jan",
          "period_label": "2026-01-26 to 2026-01-30",
          "n_obs": 5,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Jan: Mostly market-driven, though based on only 5 trading days.",
          "share_market": 0.47931948471963903,
          "share_sector": 0.2984396411024004,
          "share_company": 0.2222408741779605,
          "share_market_display": "47.9%",
          "share_sector_display": "29.8%",
          "share_company_display": "22.2%",
          "dominant_share_display": "47.9%"
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
          "summary": "Feb: Mostly company-driven.",
          "share_market": 0.26479317957873116,
          "share_sector": 0.16951692775830024,
          "share_company": 0.5656898926629685,
          "share_market_display": "26.5%",
          "share_sector_display": "17.0%",
          "share_company_display": "56.6%",
          "dominant_share_display": "56.6%"
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
          "share_market": 0.22982068067655398,
          "share_sector": 0.23225785396311108,
          "share_company": 0.537921465360335,
          "share_market_display": "23.0%",
          "share_sector_display": "23.2%",
          "share_company_display": "53.8%",
          "dominant_share_display": "53.8%"
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-30",
          "n_obs": 21,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Apr: Mostly company-driven.",
          "share_market": 0.34425966677405034,
          "share_sector": 0.1354926510167792,
          "share_company": 0.5202476822091704,
          "share_market_display": "34.4%",
          "share_sector_display": "13.5%",
          "share_company_display": "52.0%",
          "dominant_share_display": "52.0%"
        },
        {
          "month_key": "2026-05",
          "month_label": "May 2026",
          "month_short_label": "May",
          "period_label": "2026-05-04 to 2026-05-11",
          "n_obs": 6,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "May: Mostly market-driven, though based on only 6 trading days.",
          "share_market": 0.5282355311464603,
          "share_sector": 0.41972376150696933,
          "share_company": 0.05204070734657046,
          "share_market_display": "52.8%",
          "share_sector_display": "42.0%",
          "share_company_display": "5.2%",
          "dominant_share_display": "52.8%"
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
          0.5,
          0.5
        ],
        "current_regime": 0,
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5,
            "expected_duration_days": 5.833333333333333,
            "current_probability": 1.0,
            "n_days_effective": 35.0,
            "volatility": {
              "median": 0.02759855260307063,
              "low": 0.02759855260307063,
              "high": 0.02759855260307063
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.5,
            "expected_duration_days": 7.0,
            "current_probability": 0.0,
            "n_days_effective": 35.0,
            "volatility": {
              "median": 0.042579971760279195,
              "low": 0.042579971760279195,
              "high": 0.042579971760279195
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.8529411764705882,
            0.14705882352941177
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
          "price": 0.25,
          "quantity": 404900.0,
          "value": 101225.0
        },
        {
          "level": 2,
          "price": 0.245,
          "quantity": 810100.0,
          "value": 198474.5
        },
        {
          "level": 3,
          "price": 0.24,
          "quantity": 483600.0,
          "value": 116064.0
        },
        {
          "level": 4,
          "price": 0.235,
          "quantity": 223000.0,
          "value": 52405.0
        },
        {
          "level": 5,
          "price": 0.23,
          "quantity": 95400.0,
          "value": 21942.0
        },
        {
          "level": 6,
          "price": 0.225,
          "quantity": 255000.0,
          "value": 57375.0
        },
        {
          "level": 7,
          "price": 0.22,
          "quantity": 161000.0,
          "value": 35420.0
        },
        {
          "level": 8,
          "price": 0.215,
          "quantity": 367800.0,
          "value": 79077.0
        },
        {
          "level": 9,
          "price": 0.21,
          "quantity": 50000.0,
          "value": 10500.0
        },
        {
          "level": 10,
          "price": 0.2,
          "quantity": 30000.0,
          "value": 6000.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.255,
          "quantity": 567400.0,
          "value": 144687.0
        },
        {
          "level": 2,
          "price": 0.26,
          "quantity": 844900.0,
          "value": 219674.0
        },
        {
          "level": 3,
          "price": 0.265,
          "quantity": 818800.0,
          "value": 216982.0
        },
        {
          "level": 4,
          "price": 0.27,
          "quantity": 672700.0,
          "value": 181629.0
        },
        {
          "level": 5,
          "price": 0.275,
          "quantity": 242000.0,
          "value": 66550.0
        },
        {
          "level": 6,
          "price": 0.28,
          "quantity": 510800.0,
          "value": 143024.0
        },
        {
          "level": 7,
          "price": 0.285,
          "quantity": 369000.0,
          "value": 105164.99999999999
        },
        {
          "level": 8,
          "price": 0.29,
          "quantity": 332000.0,
          "value": 96280.0
        },
        {
          "level": 9,
          "price": 0.295,
          "quantity": 457200.0,
          "value": 134874.0
        },
        {
          "level": 10,
          "price": 0.3,
          "quantity": 3532600.0,
          "value": 1059780.0
        },
        {
          "level": 11,
          "price": 0.305,
          "quantity": 282000.0,
          "value": 86010.0
        },
        {
          "level": 12,
          "price": 0.31,
          "quantity": 50000.0,
          "value": 15500.0
        },
        {
          "level": 13,
          "price": 0.33,
          "quantity": 8000.0,
          "value": 2640.0
        },
        {
          "level": 14,
          "price": 0.35,
          "quantity": 136000.0,
          "value": 47600.0
        },
        {
          "level": 15,
          "price": 0.355,
          "quantity": 12000.0,
          "value": 4260.0
        },
        {
          "level": 16,
          "price": 0.395,
          "quantity": 20000.0,
          "value": 7900.0
        },
        {
          "level": 17,
          "price": 0.4,
          "quantity": 1000.0,
          "value": 400.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-05-11 08:59:49.012400000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 0.2525,
        "spread_pct": 0.01980198019801982,
        "spread_ticks": 1.0,
        "tick_size": 0.005,
        "displayed_levels_per_side": 100,
        "bid_depth_notional_displayed": 678482.5,
        "ask_depth_notional_displayed": 2532955.0,
        "bid_depth_notional_top10": 678482.5,
        "ask_depth_notional_top10": 2532955.0,
        "bid_ask_depth_ratio": 0.2679
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 110,
        "history_limited": true,
        "trade_days_used": 74,
        "n_trades_used": 12003,
        "first_trade_date": "2026-01-22",
        "last_trade_date": "2026-05-11",
        "window_label": "Jan 22, 2026 to May 11, 2026",
        "window_short_label": "Jan 22-May 11",
        "trade_days_label": "74 trading days",
        "trade_count_label": "12,003 trades",
        "window_detail_label": "74 trading days • 12,003 trades",
        "history_note": "Trade-size percentiles use available history from Jan 22, 2026 to May 11, 2026 (74 trading days • 12,003 trades), not a full year.",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 10420.5,
            "impact_pct": -0.009901,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 1.54,
            "pct_of_adv": 5.46
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 14140.5,
            "impact_pct": -0.009901,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 2.08,
            "pct_of_adv": 7.4
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 166771.78,
            "impact_pct": -0.017779,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 24.58,
            "pct_of_adv": 87.32
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-05-11",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "8146327279925059584",
            "timestamp": "2026-05-10 22:59:01.853400000",
            "local_timestamp": "2026-05-11 06:59:01",
            "posted_price": 0.3,
            "size_shares": 3284000.0,
            "notional": 985200.0,
            "impact_pct": -0.067252,
            "filled_pct": 68.9,
            "levels_consumed": 10,
            "pct_of_bid_depth": 145.21,
            "price_vs_mid_pct": 18.812,
            "executed_event_count": 0,
            "event_count": 2
          },
          {
            "rank": 2,
            "order_id": "8146327279927361536",
            "timestamp": "2026-05-10 22:59:01.853400000",
            "local_timestamp": "2026-05-11 06:59:01",
            "posted_price": 0.28,
            "size_shares": 300000.0,
            "notional": 84000.0,
            "impact_pct": -0.009901,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 12.38,
            "price_vs_mid_pct": 10.891,
            "executed_event_count": 0,
            "event_count": 3
          },
          {
            "rank": 3,
            "order_id": "8147301996983068672",
            "timestamp": "2026-05-11 00:30:00.452800000",
            "local_timestamp": "2026-05-11 08:30:00",
            "posted_price": 0.255,
            "size_shares": 255600.0,
            "notional": 65178.0,
            "impact_pct": -0.009901,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 9.61,
            "price_vs_mid_pct": 0.99,
            "executed_event_count": 0,
            "event_count": 8
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-05-11",
        "bucket_minutes": 30,
        "displayed_levels_per_side": 100,
        "tick_size": 0.005,
        "timezone": "SGT (UTC+8)",
        "session_label": "SGX continuous trading session",
        "bucket_label_basis": "bucket start time",
        "display_window_label": "SGX continuous trading session",
        "bucket_note": "Buckets cover the SGX continuous trading session (auctions excluded).",
        "reason": null,
        "rows": [
          {
            "bucket": "09:00",
            "spread_pct": 0.01980198019801982,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 663121.5,
            "ask_depth_notional": 2606844.5,
            "mid_price": 0.2525
          },
          {
            "bucket": "09:30",
            "spread_pct": 0.02020202020202022,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 567153.5,
            "ask_depth_notional": 2654635.0,
            "mid_price": 0.2475
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.02020202020202022,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 568748.5,
            "ask_depth_notional": 2600435.0,
            "mid_price": 0.2475
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.01980198019801982,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 641440.5,
            "ask_depth_notional": 2509534.5,
            "mid_price": 0.2525
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.01980198019801982,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 689415.5,
            "ask_depth_notional": 2504334.5,
            "mid_price": 0.2525
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.01980198019801982,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 701765.5,
            "ask_depth_notional": 2571687.0,
            "mid_price": 0.2525
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.01980198019801982,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 719765.5,
            "ask_depth_notional": 2572508.0,
            "mid_price": 0.2525
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.01980198019801982,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 721165.5,
            "ask_depth_notional": 2572508.0,
            "mid_price": 0.2525
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.01980198019801982,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 723465.5,
            "ask_depth_notional": 2570508.0,
            "mid_price": 0.2525
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.01980198019801982,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 723465.5,
            "ask_depth_notional": 2570508.0,
            "mid_price": 0.2525
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.01980198019801982,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 723465.5,
            "ask_depth_notional": 2570358.0,
            "mid_price": 0.2525
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.01980198019801982,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 693490.5,
            "ask_depth_notional": 2544858.0,
            "mid_price": 0.2525
          },
          {
            "bucket": "16:00",
            "spread_pct": 0.01980198019801982,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 688490.5,
            "ask_depth_notional": 2544858.0,
            "mid_price": 0.2525
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.01980198019801982,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 678482.5,
            "ask_depth_notional": 2532955.0,
            "mid_price": 0.2525
          }
        ],
        "summary": {
          "median_spread_pct": 0.01980198019801982,
          "median_spread_ticks": 1.0000000000000009,
          "median_bid_depth_notional": 691453.0,
          "median_ask_depth_notional": 2570508.0,
          "tightest_bucket": "09:00",
          "widest_bucket": "09:30",
          "deepest_bid_bucket": "14:00",
          "thinnest_bid_bucket": "09:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 26.2,
      "peers": [
        {
          "ticker": "ITS",
          "pct": 94.2
        },
        {
          "ticker": "J03",
          "pct": 481.2
        },
        {
          "ticker": "42F",
          "pct": 566.5
        },
        {
          "ticker": "LVR",
          "pct": 13984.5
        },
        {
          "ticker": "U77",
          "pct": 23944.9
        },
        {
          "ticker": "532",
          "pct": 57142.9
        },
        {
          "ticker": "NXR",
          "pct": 312989.0
        },
        {
          "ticker": "KUX",
          "pct": null
        }
      ]
    },
    "trader_composition": {
      "primary_period": "3m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 9,
          "n_runs": 0,
          "n_trade_days": 1,
          "first_trade_date": "2026-05-11",
          "last_trade_date": "2026-05-11",
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
            "retail_pct": 0.5555555555555556,
            "mixed_pct": 0.3333333333333333,
            "instit_pct": 0.1111111111111111,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.04177516132684252,
            "mixed_qty_pct": 0.5020944186573079,
            "instit_qty_pct": 0.45613042001584964,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.041829399445293486,
            "mixed_notional_pct": 0.5020659987547405,
            "instit_notional_pct": 0.45610460179996604,
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
              "retail": 5,
              "mixed": 3,
              "institutional": 1,
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
            "avg": 24537.5,
            "median": 5000.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.5555555555555556,
              "mixed_pct": 0.3333333333333333,
              "instit_pct": 0.1111111111111111,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.04177516132684252,
              "mixed_qty_pct": 0.5020944186573079,
              "instit_qty_pct": 0.45613042001584964,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.041829399445293486,
              "mixed_notional_pct": 0.5020659987547405,
              "instit_notional_pct": 0.45610460179996604,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 24537.5,
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
              "ticker": "LVR",
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
              "avg_trade_size": 90.0,
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
              "ticker": "532",
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
              "avg_trade_size": 500.0,
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
              "ticker": "NXR",
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
              "avg_trade_size": 3700.3,
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
              "ticker": "42F",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9583333333333334,
              "mixed_pct": 0.041666666666666664,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.6477287689269257,
              "mixed_qty_pct": 0.3522712310730744,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.6539638819697261,
              "mixed_notional_pct": 0.346036118030274,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1739.6666666666667,
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
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9536082474226805,
              "mixed_pct": 0.041237113402061855,
              "instit_pct": 0.005154639175257732,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.40611910398834455,
              "mixed_qty_pct": 0.46476051720997996,
              "instit_qty_pct": 0.12912037880167546,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.4066476045633067,
              "mixed_notional_pct": 0.4647009690993764,
              "instit_notional_pct": 0.1286514263373169,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2755.507731958763,
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
              "ticker": "J03",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8125,
              "mixed_pct": 0.1875,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.3181964659756163,
              "mixed_qty_pct": 0.6818035340243837,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3217971465816918,
              "mixed_notional_pct": 0.6782028534183082,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5523.2,
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
        "1w": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 262,
          "n_runs": 0,
          "n_trade_days": 5,
          "first_trade_date": "2026-05-05",
          "last_trade_date": "2026-05-11",
          "period_days": 6,
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
            "retail_pct": 0.8206106870229007,
            "mixed_pct": 0.15267175572519084,
            "instit_pct": 0.026717557251908396,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2526688529165504,
            "mixed_qty_pct": 0.4788933854312029,
            "instit_qty_pct": 0.2684377616522467,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.2502351708565159,
            "mixed_notional_pct": 0.4806374279478349,
            "instit_notional_pct": 0.2691274011956491,
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
              "retail": 215,
              "mixed": 40,
              "institutional": 7,
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
            "avg": 11125.580152671755,
            "median": 2794.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.8206106870229007,
              "mixed_pct": 0.15267175572519084,
              "instit_pct": 0.026717557251908396,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.2526688529165504,
              "mixed_qty_pct": 0.4788933854312029,
              "instit_qty_pct": 0.2684377616522467,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.2502351708565159,
              "mixed_notional_pct": 0.4806374279478349,
              "instit_notional_pct": 0.2691274011956491,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 11125.580152671755,
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
              "ticker": "LVR",
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
              "avg_trade_size": 826.0,
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
              "ticker": "U77",
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
              "avg_trade_size": 2203.7533333333336,
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
              "ticker": "532",
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
              "avg_trade_size": 836.3909090909091,
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
              "ticker": "NXR",
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
              "avg_trade_size": 3331.0625,
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
              "ticker": "42F",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9534883720930233,
              "mixed_pct": 0.046511627906976744,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.6999788601717807,
              "mixed_qty_pct": 0.3000211398282193,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.6995463282703343,
              "mixed_notional_pct": 0.3004536717296657,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2754.4418604651164,
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
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9318181818181818,
              "mixed_pct": 0.06397306397306397,
              "instit_pct": 0.004208754208754209,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.31486562075486774,
              "mixed_qty_pct": 0.5622086673947208,
              "instit_qty_pct": 0.12292571185041153,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.31478583995063136,
              "mixed_notional_pct": 0.5623635824266974,
              "instit_notional_pct": 0.12285057762267126,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3165.2218013468014,
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
              "ticker": "J03",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8813559322033898,
              "mixed_pct": 0.11864406779661017,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.43527698477123405,
              "mixed_qty_pct": 0.5647230152287659,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.4383173863382964,
              "mixed_notional_pct": 0.5616826136617036,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 6472.094067796609,
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
          "n_trades": 918,
          "n_runs": 0,
          "n_trade_days": 21,
          "first_trade_date": "2026-04-10",
          "last_trade_date": "2026-05-11",
          "period_days": 31,
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
            "retail_pct": 0.8224400871459695,
            "mixed_pct": 0.1514161220043573,
            "instit_pct": 0.026143790849673203,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2535001201533784,
            "mixed_qty_pct": 0.4677910584990231,
            "instit_qty_pct": 0.2787088213475985,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.2529284083828013,
            "mixed_notional_pct": 0.4681100410532476,
            "instit_notional_pct": 0.27896155056395106,
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
              "retail": 755,
              "mixed": 139,
              "institutional": 24,
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
            "avg": 10293.900326797386,
            "median": 2512.5
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.8224400871459695,
              "mixed_pct": 0.1514161220043573,
              "instit_pct": 0.026143790849673203,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.2535001201533784,
              "mixed_qty_pct": 0.4677910584990231,
              "instit_qty_pct": 0.2787088213475985,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.2529284083828013,
              "mixed_notional_pct": 0.4681100410532476,
              "instit_notional_pct": 0.27896155056395106,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 10293.900326797386,
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
              "ticker": "532",
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
              "avg_trade_size": 399.9235521235521,
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
              "ticker": "NXR",
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
              "avg_trade_size": 2734.7105263157896,
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
              "ticker": "KUX",
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
              "avg_trade_size": 510.14,
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
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9882352941176471,
              "mixed_pct": 0.011764705882352941,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.9067512122342409,
              "mixed_qty_pct": 0.09324878776575904,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.9070113011642279,
              "mixed_notional_pct": 0.09298869883577214,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2517.7,
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
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9587628865979382,
              "mixed_pct": 0.041237113402061855,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.8014297061159651,
              "mixed_qty_pct": 0.19857029388403494,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.7913982365138845,
              "mixed_notional_pct": 0.20860176348611548,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3350.907216494845,
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
              "ticker": "J03",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9265442404006677,
              "mixed_pct": 0.07345575959933222,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.6423805815056841,
              "mixed_qty_pct": 0.35761941849431594,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.6418724665607879,
              "mixed_notional_pct": 0.3581275334392121,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4841.110767946578,
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
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9253062443979684,
              "mixed_pct": 0.0676725425754407,
              "instit_pct": 0.007021213026590977,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.3487114655256248,
              "mixed_qty_pct": 0.4751609452494408,
              "instit_qty_pct": 0.17612758922493435,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.35035784245809926,
              "mixed_notional_pct": 0.47365633028593207,
              "instit_notional_pct": 0.17598582725596867,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3910.770690170302,
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
              "ticker": "42F",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.869031377899045,
              "mixed_pct": 0.12278308321964529,
              "instit_pct": 0.008185538881309686,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.4067893590779779,
              "mixed_qty_pct": 0.46654320804569577,
              "instit_qty_pct": 0.12666743287632634,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.4106729253763704,
              "mixed_notional_pct": 0.4624547344420601,
              "instit_notional_pct": 0.12687234018156954,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 6282.163165075033,
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
        "3m": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 3379,
          "n_runs": 0,
          "n_trade_days": 63,
          "first_trade_date": "2026-02-06",
          "last_trade_date": "2026-05-11",
          "period_days": 94,
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
            "retail_pct": 0.8795501627700503,
            "mixed_pct": 0.11009174311926606,
            "instit_pct": 0.010358094110683634,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3583060582384864,
            "mixed_qty_pct": 0.48042211288721837,
            "instit_qty_pct": 0.16127182887429525,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3547472815022256,
            "mixed_notional_pct": 0.4812728984295671,
            "instit_notional_pct": 0.16397982006820727,
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
              "retail": 2972,
              "mixed": 372,
              "institutional": 35,
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
            "avg": 6726.316513761468,
            "median": 1824.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.8795501627700503,
              "mixed_pct": 0.11009174311926606,
              "instit_pct": 0.010358094110683634,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.3583060582384864,
              "mixed_qty_pct": 0.48042211288721837,
              "instit_qty_pct": 0.16127182887429525,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3547472815022256,
              "mixed_notional_pct": 0.4812728984295671,
              "instit_notional_pct": 0.16397982006820727,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 6726.316513761468,
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
              "ticker": "532",
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
              "avg_trade_size": 420.66541095890415,
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
              "ticker": "KUX",
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
              "avg_trade_size": 452.0941176470588,
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
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9943396226415094,
              "mixed_pct": 0.005660377358490566,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.9079528233511234,
              "mixed_qty_pct": 0.09204717664887659,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.9076624188289404,
              "mixed_notional_pct": 0.09233758117105959,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1168.3339622641508,
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
              "ticker": "NXR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9680851063829787,
              "mixed_pct": 0.02127659574468085,
              "instit_pct": 0.010638297872340425,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.3249035746948189,
              "mixed_qty_pct": 0.03888822617201479,
              "instit_qty_pct": 0.6362081991331663,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3273581325691851,
              "mixed_notional_pct": 0.04071448357282349,
              "instit_notional_pct": 0.6319273838579914,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 9966.132978723404,
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
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9358024691358025,
              "mixed_pct": 0.06419753086419754,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5971733333333333,
              "mixed_qty_pct": 0.40282666666666667,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.6032428748320451,
              "mixed_notional_pct": 0.3967571251679549,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3865.4925925925927,
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
              "ticker": "J03",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.935,
              "mixed_pct": 0.065,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.6722417405433141,
              "mixed_qty_pct": 0.32775825945668596,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.6622950682902168,
              "mixed_notional_pct": 0.33770493170978333,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4486.241857142857,
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
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9147693049030238,
              "mixed_pct": 0.077159378388146,
              "instit_pct": 0.008071316708830262,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.3482593496471209,
              "mixed_qty_pct": 0.46751005870325174,
              "instit_qty_pct": 0.18423059164962732,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.35071309929186845,
              "mixed_notional_pct": 0.46542772893564416,
              "instit_notional_pct": 0.18385917177248742,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4589.9338031562465,
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
              "ticker": "42F",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9022698612862547,
              "mixed_pct": 0.0914249684741488,
              "instit_pct": 0.006305170239596469,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.46471470417429817,
              "mixed_qty_pct": 0.3980832434571179,
              "instit_qty_pct": 0.13720205236858396,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.457310200196803,
              "mixed_notional_pct": 0.40417352872356554,
              "instit_notional_pct": 0.1385162710796315,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5336.501639344263,
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
        }
      },
      "valid": true,
      "currency": "SGD",
      "n_trades": 3379,
      "n_runs": 0,
      "n_trade_days": 63,
      "first_trade_date": "2026-02-06",
      "last_trade_date": "2026-05-11",
      "period_days": 94,
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
        "retail_pct": 0.8795501627700503,
        "mixed_pct": 0.11009174311926606,
        "instit_pct": 0.010358094110683634,
        "ambiguous_pct": null,
        "unobservable_pct": null,
        "unclear_pct": null,
        "retail_qty_pct": null,
        "mixed_qty_pct": null,
        "instit_qty_pct": null,
        "ambiguous_qty_pct": null,
        "unobservable_qty_pct": null,
        "unclear_qty_pct": null,
        "retail_notional_pct": 0.3547472815022256,
        "mixed_notional_pct": 0.4812728984295671,
        "instit_notional_pct": 0.16397982006820727,
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
        "avg": 6726.316513761468,
        "median": 1824.0
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
            "month": "2026-05",
            "n_trades": 276,
            "n_runs": 0,
            "retail_pct": 0.8333333333333334,
            "mixed_pct": 0.14492753623188406,
            "instit_pct": 0.021739130434782608,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 10346.942028985508,
            "avg_run_notional": null,
            "retail_qty_pct": 0.2803766545260727,
            "mixed_qty_pct": 0.4820023096739806,
            "instit_qty_pct": 0.2376210357999467,
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
            "total_quantity": 11257000.0
          },
          {
            "month": "2026-04",
            "n_trades": 913,
            "n_runs": 0,
            "retail_pct": 0.8499452354874042,
            "mixed_pct": 0.13143483023001096,
            "instit_pct": 0.018619934282584884,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 8334.989594742607,
            "avg_run_notional": null,
            "retail_qty_pct": 0.27906226883902663,
            "mixed_qty_pct": 0.48092862697494454,
            "instit_qty_pct": 0.24000910418602886,
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
            "total_quantity": 31633800.0
          },
          {
            "month": "2026-03",
            "n_trades": 1026,
            "n_runs": 0,
            "retail_pct": 0.928849902534113,
            "mixed_pct": 0.06920077972709551,
            "instit_pct": 0.001949317738791423,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 4442.360623781677,
            "avg_run_notional": null,
            "retail_qty_pct": 0.5525152116368385,
            "mixed_qty_pct": 0.4064222944197647,
            "instit_qty_pct": 0.0410624939433969,
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
            "total_quantity": 19606700.0
          },
          {
            "month": "2026-02",
            "n_trades": 2084,
            "n_runs": 0,
            "retail_pct": 0.9021113243761996,
            "mixed_pct": 0.09213051823416507,
            "instit_pct": 0.005758157389635317,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 5392.230326295586,
            "avg_run_notional": null,
            "retail_qty_pct": 0.4015510527645414,
            "mixed_qty_pct": 0.4952392567491049,
            "instit_qty_pct": 0.1032096904863537,
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
            "total_quantity": 45917200.0
          },
          {
            "month": "2026-01",
            "n_trades": 2477,
            "n_runs": 0,
            "retail_pct": 0.8389180460234155,
            "mixed_pct": 0.14937424303593055,
            "instit_pct": 0.011707710940654016,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 7226.47779572063,
            "avg_run_notional": null,
            "retail_qty_pct": 0.27654494081056014,
            "mixed_qty_pct": 0.5780789376207284,
            "instit_qty_pct": 0.1453761215687115,
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
            "total_quantity": 65332600.0
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "TKU",
          "currency": "SGD",
          "is_target": true,
          "retail_pct": 0.8795501627700503,
          "mixed_pct": 0.11009174311926606,
          "instit_pct": 0.010358094110683634,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.3583060582384864,
          "mixed_qty_pct": 0.48042211288721837,
          "instit_qty_pct": 0.16127182887429525,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.3547472815022256,
          "mixed_notional_pct": 0.4812728984295671,
          "instit_notional_pct": 0.16397982006820727,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 6726.316513761468,
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
          "ticker": "532",
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
          "avg_trade_size": 420.66541095890415,
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
          "ticker": "KUX",
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
          "avg_trade_size": 452.0941176470588,
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
          "ticker": "U77",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9943396226415094,
          "mixed_pct": 0.005660377358490566,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.9079528233511234,
          "mixed_qty_pct": 0.09204717664887659,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.9076624188289404,
          "mixed_notional_pct": 0.09233758117105959,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 1168.3339622641508,
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
          "ticker": "NXR",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9680851063829787,
          "mixed_pct": 0.02127659574468085,
          "instit_pct": 0.010638297872340425,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.3249035746948189,
          "mixed_qty_pct": 0.03888822617201479,
          "instit_qty_pct": 0.6362081991331663,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.3273581325691851,
          "mixed_notional_pct": 0.04071448357282349,
          "instit_notional_pct": 0.6319273838579914,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 9966.132978723404,
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
          "ticker": "LVR",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9358024691358025,
          "mixed_pct": 0.06419753086419754,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.5971733333333333,
          "mixed_qty_pct": 0.40282666666666667,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.6032428748320451,
          "mixed_notional_pct": 0.3967571251679549,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 3865.4925925925927,
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
          "ticker": "J03",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.935,
          "mixed_pct": 0.065,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.6722417405433141,
          "mixed_qty_pct": 0.32775825945668596,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.6622950682902168,
          "mixed_notional_pct": 0.33770493170978333,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 4486.241857142857,
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
          "ticker": "ITS",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9147693049030238,
          "mixed_pct": 0.077159378388146,
          "instit_pct": 0.008071316708830262,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.3482593496471209,
          "mixed_qty_pct": 0.46751005870325174,
          "instit_qty_pct": 0.18423059164962732,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.35071309929186845,
          "mixed_notional_pct": 0.46542772893564416,
          "instit_notional_pct": 0.18385917177248742,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 4589.9338031562465,
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
          "ticker": "42F",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9022698612862547,
          "mixed_pct": 0.0914249684741488,
          "instit_pct": 0.006305170239596469,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.46471470417429817,
          "mixed_qty_pct": 0.3980832434571179,
          "instit_qty_pct": 0.13720205236858396,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.457310200196803,
          "mixed_notional_pct": 0.40417352872356554,
          "instit_notional_pct": 0.1385162710796315,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 5336.501639344263,
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
      "peer_comparison_periods": {
        "1d": [
          {
            "ticker": "TKU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.5555555555555556,
            "mixed_pct": 0.3333333333333333,
            "instit_pct": 0.1111111111111111,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.04177516132684252,
            "mixed_qty_pct": 0.5020944186573079,
            "instit_qty_pct": 0.45613042001584964,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.041829399445293486,
            "mixed_notional_pct": 0.5020659987547405,
            "instit_notional_pct": 0.45610460179996604,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 24537.5,
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
            "ticker": "LVR",
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
            "avg_trade_size": 90.0,
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
            "ticker": "532",
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
            "avg_trade_size": 500.0,
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
            "ticker": "NXR",
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
            "avg_trade_size": 3700.3,
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
            "ticker": "42F",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9583333333333334,
            "mixed_pct": 0.041666666666666664,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6477287689269257,
            "mixed_qty_pct": 0.3522712310730744,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6539638819697261,
            "mixed_notional_pct": 0.346036118030274,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1739.6666666666667,
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
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9536082474226805,
            "mixed_pct": 0.041237113402061855,
            "instit_pct": 0.005154639175257732,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.40611910398834455,
            "mixed_qty_pct": 0.46476051720997996,
            "instit_qty_pct": 0.12912037880167546,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.4066476045633067,
            "mixed_notional_pct": 0.4647009690993764,
            "instit_notional_pct": 0.1286514263373169,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2755.507731958763,
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
            "ticker": "J03",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8125,
            "mixed_pct": 0.1875,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3181964659756163,
            "mixed_qty_pct": 0.6818035340243837,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3217971465816918,
            "mixed_notional_pct": 0.6782028534183082,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5523.2,
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
        "1w": [
          {
            "ticker": "TKU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.8206106870229007,
            "mixed_pct": 0.15267175572519084,
            "instit_pct": 0.026717557251908396,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2526688529165504,
            "mixed_qty_pct": 0.4788933854312029,
            "instit_qty_pct": 0.2684377616522467,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.2502351708565159,
            "mixed_notional_pct": 0.4806374279478349,
            "instit_notional_pct": 0.2691274011956491,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 11125.580152671755,
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
            "ticker": "LVR",
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
            "avg_trade_size": 826.0,
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
            "ticker": "U77",
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
            "avg_trade_size": 2203.7533333333336,
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
            "ticker": "532",
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
            "avg_trade_size": 836.3909090909091,
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
            "ticker": "NXR",
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
            "avg_trade_size": 3331.0625,
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
            "ticker": "42F",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9534883720930233,
            "mixed_pct": 0.046511627906976744,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6999788601717807,
            "mixed_qty_pct": 0.3000211398282193,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6995463282703343,
            "mixed_notional_pct": 0.3004536717296657,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2754.4418604651164,
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
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9318181818181818,
            "mixed_pct": 0.06397306397306397,
            "instit_pct": 0.004208754208754209,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.31486562075486774,
            "mixed_qty_pct": 0.5622086673947208,
            "instit_qty_pct": 0.12292571185041153,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.31478583995063136,
            "mixed_notional_pct": 0.5623635824266974,
            "instit_notional_pct": 0.12285057762267126,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3165.2218013468014,
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
            "ticker": "J03",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8813559322033898,
            "mixed_pct": 0.11864406779661017,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.43527698477123405,
            "mixed_qty_pct": 0.5647230152287659,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.4383173863382964,
            "mixed_notional_pct": 0.5616826136617036,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 6472.094067796609,
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
            "ticker": "TKU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.8224400871459695,
            "mixed_pct": 0.1514161220043573,
            "instit_pct": 0.026143790849673203,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2535001201533784,
            "mixed_qty_pct": 0.4677910584990231,
            "instit_qty_pct": 0.2787088213475985,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.2529284083828013,
            "mixed_notional_pct": 0.4681100410532476,
            "instit_notional_pct": 0.27896155056395106,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 10293.900326797386,
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
            "ticker": "532",
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
            "avg_trade_size": 399.9235521235521,
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
            "ticker": "NXR",
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
            "avg_trade_size": 2734.7105263157896,
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
            "ticker": "KUX",
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
            "avg_trade_size": 510.14,
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
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9882352941176471,
            "mixed_pct": 0.011764705882352941,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.9067512122342409,
            "mixed_qty_pct": 0.09324878776575904,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.9070113011642279,
            "mixed_notional_pct": 0.09298869883577214,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2517.7,
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
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9587628865979382,
            "mixed_pct": 0.041237113402061855,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.8014297061159651,
            "mixed_qty_pct": 0.19857029388403494,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.7913982365138845,
            "mixed_notional_pct": 0.20860176348611548,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3350.907216494845,
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
            "ticker": "J03",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9265442404006677,
            "mixed_pct": 0.07345575959933222,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6423805815056841,
            "mixed_qty_pct": 0.35761941849431594,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6418724665607879,
            "mixed_notional_pct": 0.3581275334392121,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4841.110767946578,
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
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9253062443979684,
            "mixed_pct": 0.0676725425754407,
            "instit_pct": 0.007021213026590977,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3487114655256248,
            "mixed_qty_pct": 0.4751609452494408,
            "instit_qty_pct": 0.17612758922493435,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.35035784245809926,
            "mixed_notional_pct": 0.47365633028593207,
            "instit_notional_pct": 0.17598582725596867,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3910.770690170302,
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
            "ticker": "42F",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.869031377899045,
            "mixed_pct": 0.12278308321964529,
            "instit_pct": 0.008185538881309686,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.4067893590779779,
            "mixed_qty_pct": 0.46654320804569577,
            "instit_qty_pct": 0.12666743287632634,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.4106729253763704,
            "mixed_notional_pct": 0.4624547344420601,
            "instit_notional_pct": 0.12687234018156954,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 6282.163165075033,
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
        "3m": [
          {
            "ticker": "TKU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.8795501627700503,
            "mixed_pct": 0.11009174311926606,
            "instit_pct": 0.010358094110683634,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3583060582384864,
            "mixed_qty_pct": 0.48042211288721837,
            "instit_qty_pct": 0.16127182887429525,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3547472815022256,
            "mixed_notional_pct": 0.4812728984295671,
            "instit_notional_pct": 0.16397982006820727,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 6726.316513761468,
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
            "ticker": "532",
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
            "avg_trade_size": 420.66541095890415,
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
            "ticker": "KUX",
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
            "avg_trade_size": 452.0941176470588,
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
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9943396226415094,
            "mixed_pct": 0.005660377358490566,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.9079528233511234,
            "mixed_qty_pct": 0.09204717664887659,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.9076624188289404,
            "mixed_notional_pct": 0.09233758117105959,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1168.3339622641508,
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
            "ticker": "NXR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9680851063829787,
            "mixed_pct": 0.02127659574468085,
            "instit_pct": 0.010638297872340425,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3249035746948189,
            "mixed_qty_pct": 0.03888822617201479,
            "instit_qty_pct": 0.6362081991331663,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3273581325691851,
            "mixed_notional_pct": 0.04071448357282349,
            "instit_notional_pct": 0.6319273838579914,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 9966.132978723404,
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
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9358024691358025,
            "mixed_pct": 0.06419753086419754,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5971733333333333,
            "mixed_qty_pct": 0.40282666666666667,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6032428748320451,
            "mixed_notional_pct": 0.3967571251679549,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3865.4925925925927,
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
            "ticker": "J03",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.935,
            "mixed_pct": 0.065,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6722417405433141,
            "mixed_qty_pct": 0.32775825945668596,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6622950682902168,
            "mixed_notional_pct": 0.33770493170978333,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4486.241857142857,
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
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9147693049030238,
            "mixed_pct": 0.077159378388146,
            "instit_pct": 0.008071316708830262,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3482593496471209,
            "mixed_qty_pct": 0.46751005870325174,
            "instit_qty_pct": 0.18423059164962732,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.35071309929186845,
            "mixed_notional_pct": 0.46542772893564416,
            "instit_notional_pct": 0.18385917177248742,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4589.9338031562465,
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
            "ticker": "42F",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9022698612862547,
            "mixed_pct": 0.0914249684741488,
            "instit_pct": 0.006305170239596469,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.46471470417429817,
            "mixed_qty_pct": 0.3980832434571179,
            "instit_qty_pct": 0.13720205236858396,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.457310200196803,
            "mixed_notional_pct": 0.40417352872356554,
            "instit_notional_pct": 0.1385162710796315,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5336.501639344263,
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
      "peer_activity_enabled": true,
      "peer_activity_reason": null,
      "recent_trades": [],
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
      "total_trades": 6775,
      "price_moving_trades": 1336,
      "pct_price_moving": 19.719557195571955,
      "all_movers": {
        "count": 1336,
        "avg_size": 7061.839071856288,
        "median_size": 958.0,
        "retail_count": 1134,
        "mixed_count": 184,
        "institutional_count": 18,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 84.88023952095809,
        "mixed_pct": 13.77245508982036,
        "instit_pct": 1.347305389221557,
        "unclear_pct": null
      },
      "positive_movers": {
        "count": 669,
        "avg_size": 5261.543348281017,
        "median_size": 72.0,
        "retail_count": 591,
        "mixed_count": 72,
        "institutional_count": 6,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 88.34080717488789,
        "mixed_pct": 10.762331838565023,
        "instit_pct": 0.8968609865470852,
        "unclear_pct": null
      },
      "negative_movers": {
        "count": 667,
        "avg_size": 8867.532983508247,
        "median_size": 2400.0,
        "retail_count": 543,
        "mixed_count": 112,
        "institutional_count": 12,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 81.40929535232384,
        "mixed_pct": 16.79160419790105,
        "instit_pct": 1.7991004497751124,
        "unclear_pct": null
      }
    },
    "short_selling": {
      "data_available": true,
      "security_name": "$ Toku Ltd",
      "mapping": {
        "ticker_to_security": "$ Toku Ltd",
        "confidence": "high"
      },
      "coverage": {
        "n_days_short_data": 64,
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
            "avg_short_ratio": 0.006172142551089886,
            "max_short_ratio": 0.0924792304328815,
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
            "month": "2026-05",
            "avg_short_ratio": 0.0
          },
          {
            "month": "2026-04",
            "avg_short_ratio": 0.0
          },
          {
            "month": "2026-03",
            "avg_short_ratio": 0.006996731109067539
          },
          {
            "month": "2026-02",
            "avg_short_ratio": 0.014753167520636205
          },
          {
            "month": "2026-01",
            "avg_short_ratio": 0.009069182023479604
          }
        ],
        "mom_change": [
          {
            "month": "2026-05",
            "avg_short_ratio": 0.0,
            "change_pct": null
          },
          {
            "month": "2026-04",
            "avg_short_ratio": 0.0,
            "change_pct": null
          },
          {
            "month": "2026-03",
            "avg_short_ratio": 0.006996731109067539,
            "change_pct": null
          },
          {
            "month": "2026-02",
            "avg_short_ratio": 0.014753167520636205,
            "change_pct": 110.85800341128693
          },
          {
            "month": "2026-01",
            "avg_short_ratio": 0.009069182023479604,
            "change_pct": -38.527221284554955
          }
        ],
        "interpretation": "Short interest stable"
      },
      "short_series": {
        "valid": true,
        "rows": [
          {
            "date": "2026-05-11",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 925100,
            "close": 0.255,
            "return": 0.0
          },
          {
            "date": "2026-05-08",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 8857000,
            "close": 0.255,
            "return": 0.020000000000000018
          },
          {
            "date": "2026-05-07",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1731600,
            "close": 0.25,
            "return": 0.020408163265306145
          },
          {
            "date": "2026-05-06",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 439300,
            "close": 0.245,
            "return": 0.02083333333333326
          },
          {
            "date": "2026-05-05",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 570000,
            "close": 0.24,
            "return": -0.020408163265306145
          },
          {
            "date": "2026-05-04",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 674700,
            "close": 0.245,
            "return": 0.042553191489361764
          },
          {
            "date": "2026-04-30",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 757800,
            "close": 0.235,
            "return": -0.02083333333333337
          },
          {
            "date": "2026-04-29",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 460300,
            "close": 0.24,
            "return": 0.0
          },
          {
            "date": "2026-04-28",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 417500,
            "close": 0.24,
            "return": -0.020408163265306145
          },
          {
            "date": "2026-04-27",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1888200,
            "close": 0.245,
            "return": -0.020000000000000018
          },
          {
            "date": "2026-04-24",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 444200,
            "close": 0.25,
            "return": -0.019607843137254943
          },
          {
            "date": "2026-04-23",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1814600,
            "close": 0.255,
            "return": -0.019230769230769273
          },
          {
            "date": "2026-04-22",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 5476800,
            "close": 0.26,
            "return": 0.019607843137254832
          },
          {
            "date": "2026-04-21",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 7842700,
            "close": 0.255,
            "return": 0.08510638297872353
          },
          {
            "date": "2026-04-20",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 824200,
            "close": 0.235,
            "return": 0.021739130434782483
          },
          {
            "date": "2026-04-17",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 818600,
            "close": 0.23,
            "return": -0.061224489795918324
          },
          {
            "date": "2026-04-16",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 9893900,
            "close": 0.245,
            "return": 0.06521739130434767
          },
          {
            "date": "2026-04-15",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 550400,
            "close": 0.23,
            "return": 0.0
          },
          {
            "date": "2026-04-14",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 512100,
            "close": 0.23,
            "return": 0.045454545454545414
          },
          {
            "date": "2026-04-13",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1064200,
            "close": 0.22,
            "return": -0.0434782608695653
          },
          {
            "date": "2026-04-10",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 777400,
            "close": 0.23,
            "return": 0.0
          },
          {
            "date": "2026-04-09",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1029700,
            "close": 0.23,
            "return": 0.022222222222222143
          },
          {
            "date": "2026-04-08",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1591000,
            "close": 0.225,
            "return": 0.022727272727272707
          },
          {
            "date": "2026-04-07",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 730200,
            "close": 0.22,
            "return": 0.0
          },
          {
            "date": "2026-04-06",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1221000,
            "close": 0.22,
            "return": -0.0434782608695653
          },
          {
            "date": "2026-04-02",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 466000,
            "close": 0.23,
            "return": 0.0
          },
          {
            "date": "2026-04-01",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 632200,
            "close": 0.23,
            "return": 0.022222222222222143
          },
          {
            "date": "2026-03-31",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 578100,
            "close": 0.225,
            "return": 0.0
          },
          {
            "date": "2026-03-30",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 463200,
            "close": 0.225,
            "return": -0.021739130434782594
          },
          {
            "date": "2026-03-27",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 476800,
            "close": 0.23,
            "return": 0.0
          },
          {
            "date": "2026-03-26",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 458600,
            "close": 0.23,
            "return": 0.0
          },
          {
            "date": "2026-03-25",
            "short_ratio": 0.03807390817469205,
            "short_vol": 17000,
            "total_vol": 446500,
            "close": 0.23,
            "return": -0.02127659574468077
          },
          {
            "date": "2026-03-24",
            "short_ratio": 0.02231404958677686,
            "short_vol": 13500,
            "total_vol": 605000,
            "close": 0.235,
            "return": 0.04444444444444429
          },
          {
            "date": "2026-03-23",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 788800,
            "close": 0.225,
            "return": -0.021739130434782594
          },
          {
            "date": "2026-03-20",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 586700,
            "close": 0.23,
            "return": -0.02127659574468077
          },
          {
            "date": "2026-03-19",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 581900,
            "close": 0.235,
            "return": -0.02083333333333337
          },
          {
            "date": "2026-03-18",
            "short_ratio": 0.0020242914979757085,
            "short_vol": 1700,
            "total_vol": 839800,
            "close": 0.24,
            "return": -0.020408163265306145
          },
          {
            "date": "2026-03-17",
            "short_ratio": 0.07371154614462645,
            "short_vol": 36900,
            "total_vol": 500600,
            "close": 0.245,
            "return": -0.020000000000000018
          },
          {
            "date": "2026-03-16",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 921800,
            "close": 0.25,
            "return": 0.0
          },
          {
            "date": "2026-03-13",
            "short_ratio": 0.007331217857533647,
            "short_vol": 6700,
            "total_vol": 913900,
            "close": 0.25,
            "return": 0.0
          },
          {
            "date": "2026-03-12",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2461200,
            "close": 0.25,
            "return": 0.06382978723404253
          },
          {
            "date": "2026-03-11",
            "short_ratio": 0.002012578616352201,
            "short_vol": 1600,
            "total_vol": 795000,
            "close": 0.235,
            "return": 0.06818181818181812
          },
          {
            "date": "2026-03-10",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 732800,
            "close": 0.22,
            "return": 0.023255813953488413
          },
          {
            "date": "2026-03-09",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1332500,
            "close": 0.215,
            "return": -0.022727272727272707
          },
          {
            "date": "2026-03-06",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 682900,
            "close": 0.22,
            "return": 0.0
          },
          {
            "date": "2026-03-05",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 791200,
            "close": 0.22,
            "return": 0.0
          },
          {
            "date": "2026-03-04",
            "short_ratio": 0.008460492521528931,
            "short_vol": 16800,
            "total_vol": 1985700,
            "close": 0.22,
            "return": -0.0434782608695653
          },
          {
            "date": "2026-03-03",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1124800,
            "close": 0.23,
            "return": -0.04166666666666663
          },
          {
            "date": "2026-03-02",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1989800,
            "close": 0.24,
            "return": -0.07692307692307698
          },
          {
            "date": "2026-02-27",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1797700,
            "close": 0.26,
            "return": 0.040000000000000036
          },
          {
            "date": "2026-02-26",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1722300,
            "close": 0.25,
            "return": 0.0
          },
          {
            "date": "2026-02-25",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1623700,
            "close": 0.25,
            "return": -0.019607843137254943
          },
          {
            "date": "2026-02-24",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1450400,
            "close": 0.255,
            "return": -0.019230769230769273
          },
          {
            "date": "2026-02-23",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 3005400,
            "close": 0.26,
            "return": 0.061224489795918435
          },
          {
            "date": "2026-02-20",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 655800,
            "close": 0.245,
            "return": 0.0
          },
          {
            "date": "2026-02-19",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2119900,
            "close": 0.245,
            "return": -0.020000000000000018
          },
          {
            "date": "2026-02-16",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1310400,
            "close": 0.25,
            "return": 0.08695652173913038
          },
          {
            "date": "2026-02-13",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2619400,
            "close": 0.23,
            "return": 0.0
          },
          {
            "date": "2026-02-12",
            "short_ratio": 0.0629643621710112,
            "short_vol": 100000,
            "total_vol": 1588200,
            "close": 0.23,
            "return": 0.0
          },
          {
            "date": "2026-02-11",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1992800,
            "close": 0.23,
            "return": 0.045454545454545414
          },
          {
            "date": "2026-02-10",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 3371800,
            "close": 0.22,
            "return": 0.0
          },
          {
            "date": "2026-02-09",
            "short_ratio": 0.0924792304328815,
            "short_vol": 380700,
            "total_vol": 4116600,
            "close": 0.22,
            "return": -0.06382978723404253
          },
          {
            "date": "2026-02-06",
            "short_ratio": 0.07566872528200433,
            "short_vol": 388400,
            "total_vol": 5132900,
            "close": 0.235,
            "return": -0.06000000000000005
          },
          {
            "date": "2026-02-05",
            "short_ratio": 0.009976720984369804,
            "short_vol": 30000,
            "total_vol": 3007000,
            "close": 0.25,
            "return": null
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "TKU",
          "avg_short_ratio": 0.0,
          "max_short_ratio": 0.0,
          "is_target": true
        },
        {
          "ticker": "42F",
          "avg_short_ratio": 2.496750201587269e-05,
          "max_short_ratio": 0.0071947622131088565,
          "is_target": false
        },
        {
          "ticker": "532",
          "avg_short_ratio": 7.7619427677031e-05,
          "max_short_ratio": 0.0287968076681785,
          "is_target": false
        },
        {
          "ticker": "J03",
          "avg_short_ratio": 0.000286649595908388,
          "max_short_ratio": 0.039047524386953865,
          "is_target": false
        },
        {
          "ticker": "U77",
          "avg_short_ratio": 0.0033388938927270055,
          "max_short_ratio": 1.0,
          "is_target": false
        },
        {
          "ticker": "ITS",
          "avg_short_ratio": 0.005023651289644152,
          "max_short_ratio": 0.28210566910914,
          "is_target": false
        }
      ]
    },
    "intraday": {
      "session_periods": [
        "1D",
        "1M",
        "3M",
        "1W"
      ],
      "session": {
        "1D": {
          "opening": 0.02355356274647507,
          "continuous": 0.9544054886283831,
          "closing": 0.022040948625141808,
          "auctions": 0.04559451137161688,
          "other": 0.0
        },
        "1W": {
          "opening": 0.07485021952302462,
          "continuous": 0.9171105144948392,
          "closing": 0.007739980764068604,
          "auctions": 0.08288948550516081,
          "other": 0.0
        },
        "1M": {
          "opening": 0.026866358334708792,
          "continuous": 0.9464091772852764,
          "closing": 0.01760749145783546,
          "auctions": 0.053590822714723624,
          "other": 0.0
        },
        "3M": {
          "opening": 0.019270859443410504,
          "continuous": 0.9593984922790321,
          "closing": 0.015035693154536525,
          "auctions": 0.040601507720967954,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.3428679627527717,
        "1W": 0.3365399094818063,
        "1M": 0.3558160407899218,
        "3M": 0.28713456451106206
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.0136
        },
        {
          "time": "09:00",
          "avg_share": 0.1135
        },
        {
          "time": "09:30",
          "avg_share": 0.1075
        },
        {
          "time": "10:00",
          "avg_share": 0.0517
        },
        {
          "time": "10:30",
          "avg_share": 0.0764
        },
        {
          "time": "11:00",
          "avg_share": 0.0572
        },
        {
          "time": "11:30",
          "avg_share": 0.0647
        },
        {
          "time": "12:00",
          "avg_share": 0.0023
        },
        {
          "time": "12:30",
          "avg_share": 0.0025
        },
        {
          "time": "13:00",
          "avg_share": 0.11
        },
        {
          "time": "13:30",
          "avg_share": 0.0559
        },
        {
          "time": "14:00",
          "avg_share": 0.0576
        },
        {
          "time": "14:30",
          "avg_share": 0.0568
        },
        {
          "time": "15:00",
          "avg_share": 0.0431
        },
        {
          "time": "15:30",
          "avg_share": 0.0488
        },
        {
          "time": "16:00",
          "avg_share": 0.0398
        },
        {
          "time": "16:30",
          "avg_share": 0.0667
        },
        {
          "time": "17:00",
          "avg_share": 0.0318
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "TKU",
          "auctions_pct": 6.385580469087726,
          "hhi": 0.267584298100771,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400",
            "you": true
          }
        },
        {
          "ticker": "KUX",
          "auctions_pct": 3.2801850519491573,
          "hhi": 0.6756866005597023,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "532",
          "auctions_pct": 10.604242909423606,
          "hhi": 0.8171963371428395,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "U77",
          "auctions_pct": 4.739753167563321,
          "hhi": 0.5624133343958216,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "J03",
          "auctions_pct": 4.752909823502682,
          "hhi": 0.5493697665391349,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "NXR",
          "auctions_pct": 2.661377311037733,
          "hhi": 0.7513410161816533,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "42F",
          "auctions_pct": 9.219130217599805,
          "hhi": 0.4668658272404149,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "LVR",
          "auctions_pct": 2.9038175580579715,
          "hhi": 0.46827018642631546,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "ITS",
          "auctions_pct": 3.180173149695524,
          "hhi": 0.19700585497475404,
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
