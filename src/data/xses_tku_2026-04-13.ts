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
      "marketCap": 131155488.65,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "ITS",
      "name": "Info-Tech",
      "marketCap": 260580000.0,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "NXR",
      "name": "iWOW Tech",
      "marketCap": 101518238.39999999,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "LVR",
      "name": "17LIVE GROUP",
      "marketCap": 133453391.67,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "U77",
      "name": "Sarine Tech",
      "marketCap": 68102809.4,
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
      "ticker": "KUX",
      "name": "OIO",
      "marketCap": 11609592.972,
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
      "ticker": "S71",
      "name": "Sunright",
      "marketCap": 58946880.0,
      "sector": "Semiconductors",
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
    "asof_date": "2026-04-13",
    "industry": "Technology",
    "sector": "Software - Application",
    "market_cap_display": "131.2M",
    "market_cap_category": "small",
    "universe_total": 558,
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
          "score_pca": 71.86379928315412,
          "score_pca_percentile": 71.86379928315412,
          "rank_pca": 158,
          "total": 558,
          "adv_notional_sgd": 234124.0,
          "adv_volume_shares": 1064200.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0018662276548195378,
          "votes": 39.0,
          "trades": 39.0,
          "spread_pct": 0.02719665271966529,
          "spread_ticks": 1.2264150943396226,
          "amihud": 1.8570612525655337e-07,
          "volatility": 0.42378592656177866
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5076314060074202,
          "loadings": {
            "log_adv": 0.5589631221600231,
            "log_trades": 0.5149119620124044,
            "log_turnover": 0.5136774052532106,
            "neg_spread": 0.35611862226325813,
            "neg_amihud": 0.06600990590356645,
            "neg_vol": -0.16548003497070424
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
          "peer_median_adv": 4456.35,
          "peer_median_score_pca": 38.26164874551971,
          "peer_median_trades": 3.0,
          "peer_median_volatility": 0.04991466322057237,
          "peer_median_spread_pct": 0.026958340148545264,
          "peer_median_spread_ticks": 1.866783216783217,
          "peer_median_amihud": 1.545466527971694e-08,
          "peer_median_turnover_ratio": 0.000121670053944838,
          "target_vs_peer": {
            "score_pca_delta": 33.6,
            "adv_delta_pct": 5153.7,
            "trades_delta_pct": 1200.0,
            "volatility_delta_pct": -749.02,
            "spread_pct_delta_pct": -0.88,
            "spread_ticks_delta_pct": -34.3,
            "amihud_delta_pct": -1101.62,
            "turnover_ratio_delta_pct": 1433.84
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 71.86379928315412,
            "rank_pca": 158,
            "adv": 234124.0,
            "trades": 39.0,
            "volatility": 0.42378592656177866,
            "spread_pct": 0.02719665271966529,
            "spread_ticks": 1.2264150943396226,
            "amihud": 1.8570612525655337e-07,
            "turnover_ratio": 0.0018662276548195378,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 77.95698924731182,
            "rank_pca": 124,
            "adv": 480485.5,
            "trades": 127.0,
            "volatility": 0.19067862739149508,
            "spread_pct": 0.007507350947803065,
            "spread_ticks": 1.1583333333333334,
            "amihud": 3.090933055943388e-08,
            "turnover_ratio": 0.007152103272283489,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 24.731182795698924,
            "rank_pca": 421,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.036262203626220395,
            "spread_ticks": 2.6,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 57.70609318996416,
            "rank_pca": 237,
            "adv": 26928.0,
            "trades": 14.0,
            "volatility": 0.1851245267022846,
            "spread_pct": 0.015059796249815457,
            "spread_ticks": 2.3181818181818183,
            "amihud": 0.0,
            "turnover_ratio": 0.000243340107889676,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 26.344086021505376,
            "rank_pca": 412,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.01765447667087013,
            "spread_ticks": 3.5,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 2.1505376344086025,
            "rank_pca": 545,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.6666666666666666,
            "spread_ticks": 1.0,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "KUX",
            "score_pca": 3.405017921146954,
            "rank_pca": 540,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.5116279069767442,
            "spread_ticks": 22.0,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 50.179211469534046,
            "rank_pca": 279,
            "adv": 8912.7,
            "trades": 6.0,
            "volatility": 0.35980170274396134,
            "spread_pct": 0.03773584905660381,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.00040253894887483415,
            "is_target": false
          },
          {
            "ticker": "S71",
            "score_pca": 66.12903225806451,
            "rank_pca": 190,
            "adv": 65645.0,
            "trades": 27.0,
            "volatility": 0.09982932644114474,
            "spread_pct": 0.014930217461863021,
            "spread_ticks": 1.4153846153846155,
            "amihud": 1.5868179856297706e-07,
            "turnover_ratio": 0.0029420972065085068,
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
              "mean": 0.2310622929907628,
              "median": 0.08910178640665076,
              "min": 0.0,
              "max": 6.608197362010048,
              "p5": 0.0,
              "p95": 0.8848513704784596,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2550274.401881042,
              "median": 10849.9,
              "min": 0.0,
              "max": 203948664.0,
              "p5": 0.0,
              "p95": 11566494.40999998,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10805107207881111,
              "median": 0.02911112781020911,
              "min": 0.00022251652530667204,
              "max": 1.2520325203252034,
              "p5": 0.003227520554665631,
              "p95": 0.5216519647153168,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004424884491843785,
              "median": 0.0002450335085081181,
              "min": 0.0,
              "max": 0.5240261024322721,
              "p5": 0.0,
              "p95": 0.012645558797535424,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.008030652186634122,
              "median": 9.820776974567706e-09,
              "min": 0.0,
              "max": 2.5,
              "p5": 0.0,
              "p95": 6.244920679780562e-05,
              "count": 409
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 451.8440860215054,
              "median": 7.0,
              "min": 0.0,
              "max": 9480.0,
              "p5": 0.0,
              "p95": 2608.199999999999,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.12407554569994471,
              "median": 0.0925622633511423,
              "min": 0.0,
              "max": 0.42378592656177866,
              "p5": 0.0,
              "p95": 0.34301620199555577,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1297600.1875,
              "median": 13464.0,
              "min": 0.0,
              "max": 9639264.0,
              "p5": 0.0,
              "p95": 6433691.524999995,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.16039695079152602,
              "median": 0.02242556469526771,
              "min": 0.0012005524744231047,
              "max": 0.6666666666666666,
              "p5": 0.003407931940106091,
              "p95": 0.6124031007751937,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0019028155889140345,
              "median": 0.000121670053944838,
              "min": 0.0,
              "max": 0.007152103272283489,
              "p5": 0.0,
              "p95": 0.0067351659136961175,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.440244788469788e-08,
              "median": 1.5951833141119076e-08,
              "min": 0.0,
              "max": 1.8570612525655337e-07,
              "p5": 1.4915035842064128e-10,
              "p95": 1.624866060519854e-07,
              "count": 4
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 260.125,
              "median": 7.0,
              "min": 0.0,
              "max": 1901.0,
              "p5": 0.0,
              "p95": 1280.099999999999,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 72746.4,
              "median": 4456.35,
              "min": 0.0,
              "max": 480485.5,
              "p5": 0.0,
              "p95": 335291.3249999998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 21.75,
              "median": 3.0,
              "min": 0.0,
              "max": 127.0,
              "p5": 0.0,
              "p95": 91.99999999999994,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.10442927290986072,
              "median": 0.04991466322057237,
              "min": 0.0,
              "max": 0.35980170274396134,
              "p5": 0.0,
              "p95": 0.30060862637059804,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.16343055845707333,
              "median": 0.026958340148545264,
              "min": 0.007507350947803065,
              "max": 0.6666666666666666,
              "p5": 0.01010535422772405,
              "p95": 0.6124031007751937,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 4.373987470862471,
              "median": 1.866783216783217,
              "min": 1.0,
              "max": 22.0,
              "p5": 1.0,
              "p95": 15.52499999999999,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.7397782280602734e-08,
              "median": 1.545466527971694e-08,
              "min": 0.0,
              "max": 1.5868179856297706e-07,
              "p5": 0.0,
              "p95": 1.3951592836244552e-07,
              "count": 4
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0013425099419445633,
              "median": 0.000121670053944838,
              "min": 0.0,
              "max": 0.007152103272283489,
              "p5": 0.0,
              "p95": 0.005678601149262243,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": -0.0434782608695653,
            "market": -0.0010502713168281108,
            "sector": 0.0,
            "peers": 0.0,
            "vs_market": -0.04242798955273719,
            "vs_sector": -0.0434782608695653,
            "vs_peers": -0.0434782608695653
          }
        }
      },
      "1w": {
        "label": "1W",
        "window_days": 5,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 5,
          "score_pca": 72.93906810035843,
          "score_pca_percentile": 72.93906810035843,
          "rank_pca": 152,
          "total": 558,
          "adv_notional_sgd": 234124.0,
          "adv_volume_shares": 1029700.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0018057269462203327,
          "votes": 52.0,
          "trades": 52.0,
          "spread_pct": 0.02342442833240376,
          "spread_ticks": 1.072992700729927,
          "amihud": 6.348843558145879e-08,
          "volatility": 0.4274550127790744
        },
        "pca": {
          "valid": true,
          "window_days": 5,
          "variance_explained": 0.5194918866218814,
          "loadings": {
            "log_adv": 0.5502656337705393,
            "log_trades": 0.503983370947261,
            "log_turnover": 0.5081810876983802,
            "neg_spread": 0.40686898110204167,
            "neg_amihud": 0.10853889700708055,
            "neg_vol": 0.08739231235587162
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
          "peer_median_adv": 14216.7,
          "peer_median_score_pca": 50.53763440860215,
          "peer_median_trades": 9.5,
          "peer_median_volatility": 0.21291860842654675,
          "peer_median_spread_pct": 0.02904300605636456,
          "peer_median_spread_ticks": 2.1865634365634365,
          "peer_median_amihud": 4.385833593754387e-08,
          "peer_median_turnover_ratio": 0.00013374903337390242,
          "target_vs_peer": {
            "score_pca_delta": 22.4,
            "adv_delta_pct": 1546.8,
            "trades_delta_pct": 447.37,
            "volatility_delta_pct": -100.76,
            "spread_pct_delta_pct": 19.35,
            "spread_ticks_delta_pct": -50.93,
            "amihud_delta_pct": -44.76,
            "turnover_ratio_delta_pct": 1250.09
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 72.93906810035843,
            "rank_pca": 152,
            "adv": 234124.0,
            "trades": 52.0,
            "volatility": 0.4274550127790744,
            "spread_pct": 0.02342442833240376,
            "spread_ticks": 1.072992700729927,
            "amihud": 6.348843558145879e-08,
            "turnover_ratio": 0.0018057269462203327,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 79.92831541218638,
            "rank_pca": 113,
            "adv": 480485.5,
            "trades": 167.0,
            "volatility": 0.42952980548314623,
            "spread_pct": 0.010569554288516964,
            "spread_ticks": 1.159362549800797,
            "amihud": 4.385833593754387e-08,
            "turnover_ratio": 0.007152103272283489,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 25.985663082437277,
            "rank_pca": 414,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.19998016168224025,
            "spread_pct": 0.034843205574912925,
            "spread_ticks": 2.5,
            "amihud": 1.659685614052556e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 59.67741935483871,
            "rank_pca": 226,
            "adv": 26928.0,
            "trades": 15.0,
            "volatility": 0.22585705517085325,
            "spread_pct": 0.015059796249815457,
            "spread_ticks": 2.3181818181818183,
            "amihud": 3.77222405803795e-08,
            "turnover_ratio": 0.000243340107889676,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 41.39784946236559,
            "rank_pca": 328,
            "adv": 1505.4,
            "trades": 4.0,
            "volatility": 0.3736814086676826,
            "spread_pct": 0.02021886399166227,
            "spread_ticks": 3.5,
            "amihud": 6.078658448185385e-06,
            "turnover_ratio": 2.4157958858128855e-05,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 3.136200716845878,
            "rank_pca": 539,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.6666666666666666,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "KUX",
            "score_pca": 5.197132616487455,
            "rank_pca": 530,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.47943262411347515,
            "spread_ticks": 21.125,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 78.67383512544804,
            "rank_pca": 120,
            "adv": 490473.9,
            "trades": 64.0,
            "volatility": 0.0,
            "spread_pct": 0.03964757709251105,
            "spread_ticks": 1.0714285714285714,
            "amihud": 0.0,
            "turnover_ratio": 0.02215208053188602,
            "is_target": false
          },
          {
            "ticker": "S71",
            "score_pca": 67.02508960573476,
            "rank_pca": 185,
            "adv": 52380.0,
            "trades": 27.0,
            "volatility": 0.6366310047824755,
            "spread_pct": 0.023242806537816192,
            "spread_ticks": 2.0549450549450547,
            "amihud": 2.5889979128238533e-07,
            "turnover_ratio": 0.0024780037253081776,
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
              "mean": 0.5427894578021153,
              "median": 0.28376012911010623,
              "min": 0.0,
              "max": 12.037441588643327,
              "p5": 0.0,
              "p95": 1.9926994805267952,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3097394.9786527287,
              "median": 11556.55,
              "min": 0.0,
              "max": 284335480.0,
              "p5": 0.0,
              "p95": 12004198.499999996,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10719610905197544,
              "median": 0.027920931625469717,
              "min": 0.0002259218487676184,
              "max": 1.2467532467532467,
              "p5": 0.0031861112900137597,
              "p95": 0.4823642519750867,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00393023096735065,
              "median": 0.00025635254422209567,
              "min": 0.0,
              "max": 0.5240261024322721,
              "p5": 0.0,
              "p95": 0.012647332528342665,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00043934935757863745,
              "median": 6.848909269066016e-08,
              "min": 0.0,
              "max": 0.11111111111111112,
              "p5": 0.0,
              "p95": 0.0002974457141123784,
              "count": 504
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 468.4068100358423,
              "median": 6.0,
              "min": 0.0,
              "max": 11350.0,
              "p5": 0.0,
              "p95": 2748.699999999999,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.24848534510391002,
              "median": 0.2786181861095683,
              "min": 0.0,
              "max": 0.42952980548314623,
              "p5": 0.0,
              "p95": 0.42880362803672106,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1297788.3625,
              "median": 14216.7,
              "min": 0.0,
              "max": 9639264.0,
              "p5": 0.0,
              "p95": 6433691.524999995,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15644134996320466,
              "median": 0.021821646162033016,
              "min": 0.0013156604881843018,
              "max": 0.6666666666666666,
              "p5": 0.004554523318300734,
              "p95": 0.6011347517730495,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0018982727451964,
              "median": 0.00013374903337390242,
              "min": 0.0,
              "max": 0.007152103272283489,
              "p5": 0.0,
              "p95": 0.0067351659136961175,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.12624938471837e-06,
              "median": 4.385833593754387e-08,
              "min": 0.0,
              "max": 6.078658448185385e-06,
              "p5": 9.978560737951301e-11,
              "p95": 4.7529665979455335e-06,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 332.625,
              "median": 9.5,
              "min": 0.0,
              "max": 2423.0,
              "p5": 0.0,
              "p95": 1633.3999999999987,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 131471.6,
              "median": 14216.7,
              "min": 0.0,
              "max": 490473.9,
              "p5": 0.0,
              "p95": 486977.96,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 34.625,
              "median": 9.5,
              "min": 0.0,
              "max": 167.0,
              "p5": 0.0,
              "p95": 130.94999999999993,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.23320992947329974,
              "median": 0.21291860842654675,
              "min": 0.0,
              "max": 0.6366310047824755,
              "p5": 0.0,
              "p95": 0.5641455850277102,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.16121013681442206,
              "median": 0.02904300605636456,
              "min": 0.010569554288516964,
              "max": 0.6666666666666666,
              "p5": 0.012141138974971436,
              "p95": 0.6011347517730495,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 4.341114749294531,
              "median": 2.1865634365634365,
              "min": 1.0,
              "max": 21.125,
              "p5": 1.025,
              "p95": 14.95624999999999,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.1541177757197498e-06,
              "median": 4.385833593754387e-08,
              "min": 0.0,
              "max": 6.078658448185385e-06,
              "p5": 0.0,
              "p95": 4.7529665979455335e-06,
              "count": 7
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004006210699528187,
              "median": 0.00013374903337390242,
              "min": 0.0,
              "max": 0.02215208053188602,
              "p5": 0.0,
              "p95": 0.016902088491025126,
              "count": 8
            }
          },
          "returns": {
            "window_days": 5,
            "n_obs": 5,
            "stock": -1.1102230246251565e-16,
            "market": 0.0023670701798748084,
            "sector": 0.0033112582781456013,
            "peers": 0.0,
            "vs_market": -0.0023670701798749194,
            "vs_sector": -0.0033112582781457123,
            "vs_peers": -1.1102230246251565e-16
          }
        }
      },
      "2w": {
        "label": "2W",
        "window_days": 10,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 10,
          "score_pca": 72.75985663082437,
          "score_pca_percentile": 72.75985663082437,
          "rank_pca": 153,
          "total": 558,
          "adv_notional_sgd": 169723.0,
          "adv_volume_shares": 753800.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0013218966417994434,
          "votes": 48.0,
          "trades": 48.0,
          "spread_pct": 0.025041146816611553,
          "spread_ticks": 1.1287926675094817,
          "amihud": 7.865999786644192e-08,
          "volatility": 0.39545150702161597
        },
        "pca": {
          "valid": true,
          "window_days": 10,
          "variance_explained": 0.5227024053615411,
          "loadings": {
            "log_adv": 0.5457007136707371,
            "log_trades": 0.4981362797089095,
            "log_turnover": 0.4972777747490998,
            "neg_spread": 0.4152163234159944,
            "neg_amihud": 0.10686445576843864,
            "neg_vol": 0.15152948736077287
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
          "peer_median_adv": 4175.6,
          "peer_median_score_pca": 47.222222222222214,
          "peer_median_trades": 6.5,
          "peer_median_volatility": 0.28148107641398595,
          "peer_median_spread_pct": 0.032173310428552454,
          "peer_median_spread_ticks": 2.5656565656565657,
          "peer_median_amihud": 3.430695926063145e-07,
          "peer_median_turnover_ratio": 4.689070124654826e-05,
          "target_vs_peer": {
            "score_pca_delta": 25.54,
            "adv_delta_pct": 3964.6,
            "trades_delta_pct": 638.46,
            "volatility_delta_pct": -40.49,
            "spread_pct_delta_pct": 22.17,
            "spread_ticks_delta_pct": -56.0,
            "amihud_delta_pct": 77.07,
            "turnover_ratio_delta_pct": 2719.1
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 72.75985663082437,
            "rank_pca": 153,
            "adv": 169723.0,
            "trades": 48.0,
            "volatility": 0.39545150702161597,
            "spread_pct": 0.025041146816611553,
            "spread_ticks": 1.1287926675094817,
            "amihud": 7.865999786644192e-08,
            "turnover_ratio": 0.0013218966417994434,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 80.28673835125448,
            "rank_pca": 111,
            "adv": 414823.0,
            "trades": 174.0,
            "volatility": 0.3442171837194229,
            "spread_pct": 0.009188650635802324,
            "spread_ticks": 1.2329198130169003,
            "amihud": 4.4032034710588365e-08,
            "turnover_ratio": 0.006111649234433178,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 24.014336917562723,
            "rank_pca": 425,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.22121004012331463,
            "spread_pct": 0.03450234812907139,
            "spread_ticks": 2.4722222222222223,
            "amihud": 2.495757212738346e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 49.283154121863795,
            "rank_pca": 284,
            "adv": 5938.5,
            "trades": 8.0,
            "volatility": 0.20441434681615916,
            "spread_pct": 0.01783209592710554,
            "spread_ticks": 2.659090909090909,
            "amihud": 9.13607452113269e-07,
            "turnover_ratio": 5.599587709961294e-05,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 45.16129032258064,
            "rank_pca": 307,
            "adv": 2412.7,
            "trades": 5.0,
            "volatility": 0.4013887216434605,
            "spread_pct": 0.017993141176864954,
            "spread_ticks": 3.1195652173913047,
            "amihud": 6.078658448185385e-06,
            "turnover_ratio": 3.7785525393483593e-05,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 3.584229390681003,
            "rank_pca": 538,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.6666666666666666,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "KUX",
            "score_pca": 6.272401433691756,
            "rank_pca": 524,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.4955302655451096,
            "spread_ticks": 21.5625,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 67.92114695340501,
            "rank_pca": 180,
            "adv": 88056.8,
            "trades": 19.5,
            "volatility": 0.3417521127046573,
            "spread_pct": 0.041210372980030906,
            "spread_ticks": 1.1089285714285713,
            "amihud": 0.0,
            "turnover_ratio": 0.004034962135669479,
            "is_target": false
          },
          {
            "ticker": "S71",
            "score_pca": 65.77060931899642,
            "rank_pca": 192,
            "adv": 51502.5,
            "trades": 19.5,
            "volatility": 0.545368173295401,
            "spread_pct": 0.029844272728033513,
            "spread_ticks": 2.6799059315390643,
            "amihud": 3.430695926063145e-07,
            "turnover_ratio": 0.0024364907763017264,
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
              "mean": 0.6179525877191282,
              "median": 0.3500920947014631,
              "min": 0.0,
              "max": 10.74709263010234,
              "p5": 0.0,
              "p95": 2.216374296610913,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3137875.37036951,
              "median": 8980.0,
              "min": 0.0,
              "max": 277532840.0,
              "p5": 0.0,
              "p95": 12474060.499999996,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1113081498343218,
              "median": 0.03290518165560724,
              "min": 0.00025208290228604556,
              "max": 1.2605067902391984,
              "p5": 0.0033716590277372955,
              "p95": 0.50240201382588,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0037730045407809655,
              "median": 0.00018096437124239296,
              "min": 0.0,
              "max": 0.5915892162678795,
              "p5": 0.0,
              "p95": 0.011274282746833782,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0005182407822681222,
              "median": 1.6062584606599236e-07,
              "min": 0.0,
              "max": 0.11111111111111112,
              "p5": 0.0,
              "p95": 0.00024989362603813025,
              "count": 528
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 461.8862007168459,
              "median": 6.0,
              "min": 0.0,
              "max": 10991.0,
              "p5": 0.0,
              "p95": 2654.7249999999976,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.23802632014322456,
              "median": 0.279369400972569,
              "min": 0.0,
              "max": 0.4013887216434605,
              "p5": 0.0,
              "p95": 0.3993106965258149,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1567385.525,
              "median": 4175.6,
              "min": 0.0,
              "max": 11946187.0,
              "p5": 0.0,
              "p95": 7910209.599999994,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15851388326625793,
              "median": 0.021517143996738253,
              "min": 0.001356751232831438,
              "max": 0.6666666666666666,
              "p5": 0.004097916023871249,
              "p95": 0.6067689262741216,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0019063010191522072,
              "median": 4.689070124654826e-05,
              "min": 0.0,
              "max": 0.007723080874491939,
              "p5": 0.0,
              "p95": 0.007159079800471372,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.3730862578648141e-06,
              "median": 7.865999786644192e-08,
              "min": 0.0,
              "max": 6.078658448185385e-06,
              "p5": 2.6659783190136593e-10,
              "p95": 5.00378807755127e-06,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 453.9375,
              "median": 6.5,
              "min": 0.0,
              "max": 3396.5,
              "p5": 0.0,
              "p95": 2268.624999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 70341.6875,
              "median": 4175.6,
              "min": 0.0,
              "max": 414823.0,
              "p5": 0.0,
              "p95": 300454.82999999984,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 28.25,
              "median": 6.5,
              "min": 0.0,
              "max": 174.0,
              "p5": 0.0,
              "p95": 119.92499999999993,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.25729382228780195,
              "median": 0.28148107641398595,
              "min": 0.0,
              "max": 0.545368173295401,
              "p5": 0.0,
              "p95": 0.49497536521722174,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.16409597672358558,
              "median": 0.032173310428552454,
              "min": 0.009188650635802324,
              "max": 0.6666666666666666,
              "p5": 0.01221385648775845,
              "p95": 0.6067689262741216,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 4.479391583086121,
              "median": 2.5656565656565657,
              "min": 1.0,
              "max": 21.5625,
              "p5": 1.038125,
              "p95": 15.107472826086948,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.410732105764843e-06,
              "median": 3.430695926063145e-07,
              "min": 0.0,
              "max": 6.078658448185385e-06,
              "p5": 0.0,
              "p95": 5.00378807755127e-06,
              "count": 7
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.001584610443612185,
              "median": 4.689070124654826e-05,
              "min": 0.0,
              "max": 0.006111649234433178,
              "p5": 0.0,
              "p95": 0.0053848087498658825,
              "count": 8
            }
          },
          "returns": {
            "window_days": 10,
            "n_obs": 10,
            "stock": -0.04347826086956563,
            "market": 0.017555447739330043,
            "sector": 0.008378486855308065,
            "peers": -0.0015924657534247544,
            "vs_market": -0.061033708608895676,
            "vs_sector": -0.0518567477248737,
            "vs_peers": -0.04188579511614088
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 71.68458781362007,
          "score_pca_percentile": 71.68458781362007,
          "rank_pca": 159,
          "total": 558,
          "adv_notional_sgd": 145406.0,
          "adv_volume_shares": 632200.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0011086535645338392,
          "votes": 43.0,
          "trades": 43.0,
          "spread_pct": 0.02502709626564191,
          "spread_ticks": 1.1627906976744187,
          "amihud": 1.0125507692955736e-07,
          "volatility": 0.3486143108594328
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5278616986307217,
          "loadings": {
            "log_adv": 0.5447219004153119,
            "log_trades": 0.5001384087870463,
            "log_turnover": 0.5029065585094966,
            "neg_spread": 0.4107101314446878,
            "neg_amihud": 0.10870747659378817,
            "neg_vol": 0.1404439003065826
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
          "peer_median_adv": 8311.0,
          "peer_median_score_pca": 50.7168458781362,
          "peer_median_trades": 7.0,
          "peer_median_volatility": 0.3481149041296958,
          "peer_median_spread_pct": 0.029620907995167537,
          "peer_median_spread_ticks": 1.9769736842105263,
          "peer_median_amihud": 3.9642896785753787e-07,
          "peer_median_turnover_ratio": 8.711136378976008e-05,
          "target_vs_peer": {
            "score_pca_delta": 20.97,
            "adv_delta_pct": 1649.6,
            "trades_delta_pct": 514.29,
            "volatility_delta_pct": -0.14,
            "spread_pct_delta_pct": 15.51,
            "spread_ticks_delta_pct": -41.18,
            "amihud_delta_pct": 74.46,
            "turnover_ratio_delta_pct": 1172.69
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 71.68458781362007,
            "rank_pca": 159,
            "adv": 145406.0,
            "trades": 43.0,
            "volatility": 0.3486143108594328,
            "spread_pct": 0.02502709626564191,
            "spread_ticks": 1.1627906976744187,
            "amihud": 1.0125507692955736e-07,
            "turnover_ratio": 0.0011086535645338392,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 81.72043010752688,
            "rank_pca": 103,
            "adv": 496000.0,
            "trades": 218.0,
            "volatility": 0.33173467100342374,
            "spread_pct": 0.012252014513924894,
            "spread_ticks": 1.418703506907545,
            "amihud": 3.090933055943388e-08,
            "turnover_ratio": 0.0073461238829004155,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 26.523297491039425,
            "rank_pca": 411,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.425343646666782,
            "spread_pct": 0.036262203626220395,
            "spread_ticks": 2.6,
            "amihud": 2.012072434607639e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 55.55555555555556,
            "rank_pca": 249,
            "adv": 12782.0,
            "trades": 10.0,
            "volatility": 0.32700044736197903,
            "spread_pct": 0.01981599433828735,
            "spread_ticks": 3.0,
            "amihud": 1.0452643373972158e-06,
            "turnover_ratio": 0.0001147569826979722,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 45.878136200716845,
            "rank_pca": 303,
            "adv": 3840.0,
            "trades": 4.0,
            "volatility": 0.3644951372559679,
            "spread_pct": 0.014098690835850969,
            "spread_ticks": 2.0,
            "amihud": 1.953119913850011e-06,
            "turnover_ratio": 5.946574488154795e-05,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 3.584229390681003,
            "rank_pca": 538,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.6666666666666666,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "KUX",
            "score_pca": 8.960573476702509,
            "rank_pca": 509,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.41811846689895465,
            "spread_ticks": 16.8,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 65.59139784946237,
            "rank_pca": 193,
            "adv": 66671.8,
            "trades": 21.0,
            "volatility": 0.5216833161972937,
            "spread_pct": 0.04165568151858687,
            "spread_ticks": 1.0886075949367089,
            "amihud": 0.0,
            "turnover_ratio": 0.0031358040200897786,
            "is_target": false
          },
          {
            "ticker": "S71",
            "score_pca": 69.71326164874552,
            "rank_pca": 170,
            "adv": 95472.0,
            "trades": 32.0,
            "volatility": 0.7489458111175881,
            "spread_pct": 0.02297961236411468,
            "spread_ticks": 1.9539473684210527,
            "amihud": 3.9642896785753787e-07,
            "turnover_ratio": 0.0049176878053796315,
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
              "mean": 0.6316136097851205,
              "median": 0.3806516179187508,
              "min": 0.0,
              "max": 10.345938508287322,
              "p5": 0.0,
              "p95": 1.858754148901324,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3153118.0794065106,
              "median": 9864.75,
              "min": 0.0,
              "max": 270730200.0,
              "p5": 0.0,
              "p95": 12736565.400484825,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.11088021957242412,
              "median": 0.034262655906089484,
              "min": 0.0002674471588617271,
              "max": 1.3614536015574303,
              "p5": 0.0034260156658703893,
              "p95": 0.5417690417690416,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006673135203536352,
              "median": 0.00018037467566378633,
              "min": 0.0,
              "max": 2.2707797772065126,
              "p5": 0.0,
              "p95": 0.009837597332501068,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 8.345403725054353e-05,
              "median": 1.6663310126536243e-07,
              "min": 0.0,
              "max": 0.0182648401826484,
              "p5": 0.0,
              "p95": 0.00012961185793710034,
              "count": 538
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 466.163082437276,
              "median": 6.0,
              "min": 0.0,
              "max": 10826.0,
              "p5": 0.0,
              "p95": 2847.4999999999955,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.26376980990131427,
              "median": 0.3293675591827014,
              "min": 0.0,
              "max": 0.425343646666782,
              "p5": 0.0,
              "p95": 0.404046668372997,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1304656.0,
              "median": 8311.0,
              "min": 0.0,
              "max": 9779220.0,
              "p5": 0.0,
              "p95": 6530092.999999994,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.149201792547846,
              "median": 0.022421545301964628,
              "min": 0.001373207237221099,
              "max": 0.6666666666666666,
              "p5": 0.005180789784067428,
              "p95": 0.5796747967479673,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0018910756600228065,
              "median": 8.711136378976008e-05,
              "min": 0.0,
              "max": 0.0073461238829004155,
              "p5": 0.0,
              "p95": 0.007049842310694306,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.348292364110587e-07,
              "median": 1.0125507692955736e-07,
              "min": 0.0,
              "max": 2.012072434607639e-06,
              "p5": 3.55068460066479e-10,
              "p95": 1.9943866783803505e-06,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 422.25,
              "median": 7.0,
              "min": 0.0,
              "max": 3103.0,
              "p5": 0.0,
              "p95": 2093.249999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 84345.725,
              "median": 8311.0,
              "min": 0.0,
              "max": 496000.0,
              "p5": 0.0,
              "p95": 355815.1999999998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 35.625,
              "median": 7.0,
              "min": 0.0,
              "max": 218.0,
              "p5": 0.0,
              "p95": 152.89999999999992,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3399003787003793,
              "median": 0.3481149041296958,
              "min": 0.0,
              "max": 0.7489458111175881,
              "p5": 0.0,
              "p95": 0.6694039378954849,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1539811663453258,
              "median": 0.029620907995167537,
              "min": 0.012252014513924894,
              "max": 0.6666666666666666,
              "p5": 0.01289835122659902,
              "p95": 0.5796747967479673,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.7326573087831636,
              "median": 1.9769736842105263,
              "min": 1.0,
              "max": 16.8,
              "p5": 1.031012658227848,
              "p95": 11.969999999999994,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.768278548959767e-07,
              "median": 3.9642896785753787e-07,
              "min": 0.0,
              "max": 2.012072434607639e-06,
              "p5": 0.0,
              "p95": 1.9943866783803505e-06,
              "count": 7
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0019467298044936682,
              "median": 8.711136378976008e-05,
              "min": 0.0,
              "max": 0.0073461238829004155,
              "p5": 0.0,
              "p95": 0.0064961712557681395,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": -0.12000000000000033,
            "market": 0.026535753836895992,
            "sector": -0.002833355170261287,
            "peers": 0.004842926023204797,
            "vs_market": -0.14653575383689632,
            "vs_sector": -0.11716664482973904,
            "vs_peers": -0.12484292602320513
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Liquidity looks strong on the day, with a 1D score of 71.9 compared with a peer median of 38.3, which supports near-term access relative to similar names.",
        "market_comparison": "The stock fell 4.3% while peers were flat, which matters because weaker price action can make trading feel less supported even when liquidity screens well."
      },
      "1w": {
        "liquidity": "Liquidity remains strong over one week, with a 1W score of 72.9 compared with a peer median of 50.5, indicating access has held up.",
        "market_comparison": "The stock was flat over the week, in line with peers, which matters because relative price stability has not disrupted tradability."
      },
      "2w": {
        "liquidity": "Liquidity is still strong over two weeks, with a 2W score of 72.8 compared with a peer median of 47.2, suggesting the liquidity profile has stayed intact.",
        "market_comparison": "The stock fell 4.3% compared with a 0.2% drop for peers, which matters because weaker relative performance can leave the tape feeling less supported."
      },
      "30d": {
        "liquidity": "Liquidity is strong on the monthly view, with a 1M score of 71.7 compared with a peer median of 50.7, so the stock remains accessible for its size.",
        "market_comparison": "The stock fell 12.0% over the month while peers rose 0.5%, which matters because sustained underperformance can outweigh an otherwise strong liquidity standing."
      }
    }
  },
  "q02": {
    "driver_model": {
      "valid": true,
      "model_method": "ols_with_volatility_regimes",
      "estimation_window_days": 53,
      "reporting_window_days": 53,
      "available_history_days": 53,
      "n_regimes": 2,
      "current_regime": 0,
      "current_regime_label": "Low Volatility",
      "current_regime_probability": 1.0,
      "current_driver_mix": {
        "market_share": {
          "median": 0.603966602814282,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "60.4%",
          "display_range": null,
          "display_text": "60.4%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 53 trading days.",
          "kind": "share_pct",
          "value_pct": 60.4,
          "plain_english": "Market explains about 60.4% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.36814652441248896,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "36.8%",
          "display_range": null,
          "display_text": "36.8%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 53 trading days.",
          "kind": "share_pct",
          "value_pct": 36.8,
          "plain_english": "Sector explains about 36.8% of price moves in the current state."
        },
        "company_share": {
          "median": 0.02788687277322887,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "2.8%",
          "display_range": null,
          "display_text": "2.8%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 53 trading days.",
          "kind": "share_pct",
          "value_pct": 2.8,
          "plain_english": "Company-specific explains about 2.8% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 10.720666368527704,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "10.72",
          "display_range": null,
          "display_text": "10.72",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 53 trading days.",
          "kind": "beta",
          "strength_label": "Very high",
          "plain_english": "Very high market link: a 1% market move has lined up with about a 10.72% stock move in the same direction in this state. The multiplier is unusually large and comes from only 53 trading days of history.",
          "value_num": 10.72
        },
        "beta_stock_lag": {
          "median": -0.14942676508278674,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.15",
          "display_range": null,
          "display_text": "-0.15",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 53 trading days.",
          "kind": "lag_beta",
          "value_num": -0.15
        },
        "beta_sector": {
          "median": 11.371010378635354,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "11.37",
          "display_range": null,
          "display_text": "11.37",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 53 trading days.",
          "kind": "beta",
          "strength_label": "Very high",
          "plain_english": "Very high sector link: a 1% sector move has lined up with about a 11.37% stock move in the same direction in this state. The multiplier is unusually large and comes from only 53 trading days of history.",
          "value_num": 11.37
        },
        "beta_market_lag": {
          "median": 4.314343969775069,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "4.31",
          "display_range": null,
          "display_text": "4.31",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 53 trading days.",
          "kind": "lag_beta",
          "value_num": 4.31
        },
        "beta_sector_lag": {
          "median": 1.6452535482186366,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.65",
          "display_range": null,
          "display_text": "1.65",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 53 trading days.",
          "kind": "lag_beta",
          "value_num": 1.65
        },
        "posterior_source": null,
        "intervals_collapsed": false,
        "confidence_label": "High, limited history",
        "confidence_note": "Based on 53 trading days relative to the 252-day target."
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
            "median": 0.47931948471963925,
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
              "median": 0.47931948471963925,
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
              "median": 0.2984396411024003,
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
              "median": 0.22224087417796046,
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
            "median": 0.5656898926629687,
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
              "median": 0.2647931795787311,
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
              "median": 0.1695169277583002,
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
              "median": 0.5656898926629687,
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
            "median": 0.5379214653603349,
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
              "median": 0.22982068067655406,
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
              "median": 0.5379214653603349,
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
          "period_label": "2026-04-01 to 2026-04-13",
          "n_obs": 8,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.37362688804880045,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "37.4%",
            "display_range": null,
            "display_text": "37.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
            "kind": "share_pct",
            "value_pct": 37.4,
            "plain_english": "Company-specific explains about 37.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3581794042990322,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "35.8%",
              "display_range": null,
              "display_text": "35.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
              "kind": "share_pct",
              "value_pct": 35.8,
              "plain_english": "Market explains about 35.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2681937076521674,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.8%",
              "display_range": null,
              "display_text": "26.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
              "kind": "share_pct",
              "value_pct": 26.8,
              "plain_english": "Sector explains about 26.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.37362688804880045,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.4%",
              "display_range": null,
              "display_text": "37.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
              "kind": "share_pct",
              "value_pct": 37.4,
              "plain_english": "Company-specific explains about 37.4% of price moves in the current state."
            }
          },
          "summary": "Apr: More mixed, though company-driven still has the largest share."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5098039215686274,
          "expected_duration_days": 5.2,
          "current_probability": 1.0,
          "n_days_effective": 26.0,
          "volatility": {
            "median": 0.027283921999567643,
            "low": 0.027283921999567643,
            "high": 0.027283921999567643
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": null
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.49019607843137253,
          "expected_duration_days": 6.25,
          "current_probability": 0.0,
          "n_days_effective": 25.0,
          "volatility": {
            "median": 0.0422813008358722,
            "low": 0.0422813008358722,
            "high": 0.0422813008358722
          },
          "volatility_label": "High Volatility",
          "current_probability_display": 0.0
        }
      ],
      "transitions": {
        "mean": [
          [
            0.84,
            0.16
          ],
          [
            0.16,
            0.84
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            21.0,
            4.0
          ],
          [
            4.0,
            21.0
          ]
        ]
      },
      "methodology": {
        "estimation_window_days": 53,
        "reporting_window_days": 53,
        "current_mix_method": "ols_last_5d",
        "monthly_history_method": "ols_per_month",
        "regime_inference": "volatility_kmeans",
        "distribution": "gaussian",
        "history_limited": true,
        "current_driver_mix_basis": "ols_recent_window",
        "sector_proxy_equals_market": false
      },
      "client_read": {
        "market_link_display": "10.72",
        "sector_link_display": "11.37",
        "market_link_explainer": "Very high market link. A 1% market move has lined up with about a 10.72% stock move in the same direction in this state. This is a point estimate from 53 trading days.",
        "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 11.37% stock move in the same direction in this state. This is a point estimate from 53 trading days.",
        "stock_persistence_display": "-0.15",
        "point_estimate_note": "Point estimate only because the current state has 53 trading days.",
        "history_limited_note": "Read is based on 53 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "Low Volatility",
        "dominant_driver": "market",
        "dominant_driver_label": "Market",
        "driver_share_pct": 60.4,
        "driver_share_display": "60.4%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 53 trading days relative to the 252-day target.",
        "history_days": 53,
        "history_limited": true,
        "volatility_label": "Low Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.84,
        "effective_days": 26.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 5.2 days.",
        "expected_duration_days": 5.2
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
          "pct_time": 0.5098039215686274,
          "expected_duration_days": 5.2,
          "current_probability": 1.0,
          "n_days_effective": 26.0,
          "volatility": {
            "median": 0.027283921999567643,
            "low": 0.027283921999567643,
            "high": 0.027283921999567643
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.49019607843137253,
          "expected_duration_days": 6.25,
          "current_probability": 0.0,
          "n_days_effective": 25.0,
          "volatility": {
            "median": 0.0422813008358722,
            "low": 0.0422813008358722,
            "high": 0.0422813008358722
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.84,
          0.16
        ],
        [
          0.16,
          0.84
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.84,
            0.16
          ],
          [
            0.16,
            0.84
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            21.0,
            4.0
          ],
          [
            4.0,
            21.0
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
        "text": "Liquidity score: 71.7 — Strong",
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
    "liq_subtitle": "Monthly liquidity remains strong for the stock’s size, although displayed buy-side depth is notably thinner than the sell side.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Performance has been weak, with the stock down 12.0% over one month compared with peers up 0.5% and the market up 2.7%.",
    "perf_insight": "The stock has underperformed both peers and the market, while market factors still explain 60.4% of trading. That matters because broader moves are still driving the tape as the shares trade from a weaker starting point.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "The tape is being driven mainly by broader market moves, with market factors accounting for 60.4% of current trading.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly market-driven, accounting for about 60.4% of price changes. Other influences are sector 36.8%, and company-specific 2.8%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 60.4%, sector 36.8%, and company-specific 2.8%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has been consistently company-driven across Feb to Apr."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 60.4%, sector 36.8%, and company-specific 2.8%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "That matters because a market-led tape can add pressure to a stock already down 12.0% over one month, while thin bid depth can make downside execution feel harsher than a 1 tick spread",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: price moves are primarily market-led, with broader conditions accounting for 60.4% of the tape.",
      "Monthly change: the pattern was mostly market in February and March, but April is more mixed."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Market factors are the clearest current influence, shaping 60.4% of the tape.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on available history from Jan 22, 2026 to Apr 13, 2026 (55 trading days • 10,353 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on top 10 bid and top 10 ask levels.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is thin enough that downside execution may feel worse than the monthly liquidity score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The displayed book is skewed to the sell side, with top-10 bid depth at just 0.20x of ask depth despite a 1 tick spread. That leaves near-term buy-side support looking weaker than the stronger monthly liquidity profile.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 13.1% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "The displayed book is the key near-term watchpoint, with buy-side support much thinner than the sell side.",
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
    "intraday_insight": "Top-10 bid depth is only 0.20x of ask depth, even though the spread is 1 tick. That matters because execution on weakness can feel worse than the headline spread implies.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "The current read is defined more by market direction and book imbalance than by any short-driven signal.",
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
    "exec_subtitle": "Liquidity screens well relative to peers, but the current book and recent price action point to a less supportive tape.",
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
        "value": "71.7/100",
        "sub": "Peer median 50.7 (+21.0 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "S$145.4K",
        "sub": "Peer median S$8.3K",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "2.50%",
        "sub": "1.16 ticks; peers 2.96%",
        "interp": {
          "text": "Tighter",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity looks strong relative to peers, with a 1M score of 71.7 compared with a peer median of 50.7. That supports the view that the stock is accessible for its size. The near-term caveat is the displayed book, where top-10 bid depth is only 0.20x of ask depth despite a 1 tick spread, leaving buy-side support thinner than the monthly profile implies.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "0.223",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "2.25%",
        "note": "1.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.20x",
        "note": "Bid depth / ask depth on displayed top-10 levels",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-1.99% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-3.45% with 14.6% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-3.45% with 5.9% fill.",
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
        "value": "72",
        "suffix": "/100",
        "bar_pct": 72,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Rank 159/558",
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
        "subtext": "2.50% • 1.16 ticks vs peers 2.96%",
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
        "value": "145.4K",
        "value_prefix": "S$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Peer median S$8.3K",
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
        "value": "60.4",
        "suffix": "market",
        "bar_pct": 60,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Sector 36.8% • Company 2.8%",
        "interpretation": {
          "text": "Market",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is strong for the stock’s size, with a 1M liquidity score of 71.7 compared with a peer median of 50.7. That keeps the name accessible relative to peers on a monthly view.",
      "The main near-term watchpoint is the displayed book, with top-10 bid depth at only 0.20x of ask depth despite a 1 tick",
      "Price action is also working against the tape, with the stock down 12.0% over one month compared with peers up 0.5% and the market up 2.7%, while market factors drive 60.4% of trading. That leaves broader moves carrying meaningful influence over a stock already under pressure."
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
      "overall": "1M liquidity is strong: score 71.7 vs peer median 50.7 (+21.0 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "strengths": [
        "1M score 71.7 vs peer median 50.7 (+21.0 pts)."
      ],
      "concerns": [],
      "peer_context": "Primary-period score gap vs peers: +21.0 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "1M return is -12.0%, worse than market, sector, and peers, which suggests weaker price performance than comparable names.",
        "vs_market": "Worse than market: -12.0% vs market 2.7%.",
        "vs_sector": "Worse than sector: -12.0% vs sector -0.3%.",
        "vs_peers": "Worse than peers: -12.0% vs peers 0.5%."
      },
      "adv": {
        "insight": "ADV is S$145.4K, better than market, sector, and peers, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: S$145.4K vs market S$9.9K.",
        "vs_sector": "Better than sector: S$145.4K vs sector S$8.3K.",
        "vs_peers": "Better than peers: S$145.4K vs peers S$8.3K."
      },
      "spread": {
        "insight": "Spread is 2.50%, better than market and peers, but worse than sector, which shows execution cost is mixed across comparison groups.",
        "vs_market": "Better than market: 2.50% vs market 3.43%.",
        "vs_sector": "Worse than sector: 2.50% vs secto%.",
        "vs_peers": "Better than peers: 2.50% vs peers 2.96%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.11%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.11% vs market 0.02%.",
        "vs_sector": "Better than sector: 0.11% vs sector 0.01%.",
        "vs_peers": "Better than peers: 0.11% vs peers 0.01%."
      },
      "volatility": {
        "insight": "Volatility is 34.86%, broadly in line with market, sector, and peers, which suggests price variability is broadly in line with the group.",
        "vs_market": "In line with market: 34.86% vs market 38.07%.",
        "vs_sector": "In line with sector: 34.86% vs sector 32.94%.",
        "vs_peers": "In line with peers: 34.86% vs peers 34.81%."
      },
      "trades": {
        "insight": "Trades is 43, better than market, sector, and peers, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 43 vs market 6.",
        "vs_sector": "Better than sector: 43 vs sector 7.",
        "vs_peers": "Better than peers: 43 vs peers 7."
      },
      "amihud": {
        "insight": "Price impact is 1.01e-07, better than market and peers, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 1.01e-07 vs market 1.67e-07.",
        "vs_sector": "In line with sector: 1.01e-07 vs sector 1.01e-07.",
        "vs_peers": "Better than peers: 1.01e-07 vs peers 3.96e-07."
      }
    },
    "performance": {
      "overall": "Performance is mixed relative to comparison groups. Recent price performance is weaker than peers and the market, so the tape is not being cushioned by stronger momentum. Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "conclusion": "Performance is mixed relative to comparison groups."
    },
    "drivers": {
      "overall": "The stock is currently being driven mainly by broader market moves, with 60.4% of recent price action explained by the market. That matters because the shares have already fallen 12.0% over one month, lagging peers at +0.5% and the market at +2.7%, so external pressure is landing on a weak tape.",
      "beta": "This market-led pattern matters more because the displayed book is uneven, with top-10 bid depth at 0.20x of ask depth even though the spread is only 1 tick. In practice, that means selling pressure can push through a thinner buy side more easily than the headline spread implies.",
      "rolling_change": "The mix has shifted from mostly market in February and March to a more mixed pattern in April, even though company factors still hold the largest share over the month. That points to a change that looks real but not fully settled yet."
    },
    "regime": {
      "overall": "The backdrop is relatively calm, which may support steadier trading conditions, but that calm sits alongside a thinner bid side than the offer side. That matters because a stable volatility regime does not fully offset fragility in displayed buy-side support.",
      "current": "The stock is currently in a low-volatility state, pointing to a calmer tape than a high-volatility regime would imply.",
      "transitions": "This state looks reasonably persistent rather than short-lived, with a typical run length of about 5.2 days, although the read is based on a shorter history window.",
      "trading_implications": "Trading conditions may feel broadly steady while low volatility holds, but top-10 bid depth at 0.20x of ask depth means downside liquidity can still feel thinner than the calm regime"
    },
    "execution": {
      "overall": "The displayed book reads as thin buy-side because bid visible support is materially lighter than sell-side depth, with top-10 bid depth at 0.20x of ask depth. That matters because immediate liquidity on the way down looks less robust than the headline monthly score implies.",
      "concern": "Trade-size percentiles use available history from Jan 22, 2026 to Apr 13, 2026 (55 trading days • 10,353 trades), not a full year.",
      "peer_context": "This tempers an otherwise strong cross-sectional liquidity picture, with the 1M score at 71.7 compared with a peer median of 50.7. In other words, the stock still screens well for size, but the current book does not fully visible support that strength in near-term downside liquidity."
    },
    "trader_composition": {
      "overall": "By trade count and value, flow looks mainly institution-like.",
      "retail_heavy": "By trade count and value, flow leans institution-like: institution-like trades are 39.8% of count and 59.4% of value, compared with retail-like at 32.3% of count and 7.1% of value.",
      "institutional_gap": "The institution-like share leads retail-like flow by 7.5 points on trade count and 52.3 points on trade value. That spread matters because the value mix is doing most of the work in supporting the institution-like read.",
      "peer_comparison": "The mix stands out as institution-leaning rather than retail-heavy, with institution-like flow ahead on both count and value. That makes the trading profile look stronger than a peer set dominated by smaller-value activity."
    },
    "price_moving": {
      "overall": "Price-moving activity is present but not dominant, so the cleaner signal comes from who is trading rather than from aggressive price-setting trades. The institution-like lead on both count and value gives that broader flow read more weight. The signal is mixed rather than fully clean because 20.4% of trade count is unclear. Even so, institution-like flow still leads retail-like flow on both count and value, which keeps the overall read intact.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity appears immaterial to the current trading picture, with a 1M average short ratio of 0.65%. That matters because the recent share price weakness looks more consistent with broader market pressure and underperformance than with active short pressure.",
      "level": "Low short interest",
      "correlation": "",
      "trend": "Short positioning has fallen sharply, with shorts covering significantly month on month. That points away from short selling as a growing source of pressure, so it does not materially change the broader liquidity read.",
      "peaks": "0 notable peak days identified."
    },
    "intraday": {
      "overall": "Session split is open 1.5%, continuous 97.5%, and close 0.8%. Current trading concentration score is 0.308.",
      "hhi_interpretation": "Ambiguous or unclear flow is 20.4% of trade count, so the read is not fully clean.",
      "best_times": "The best access is during the continuous session, which carries 97.5% of trading compared with 1.5% at the open and 0.8% at the close. That makes the middle of the day the clearest source of usable liquidity.",
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
        "ITS",
        "NXR",
        "LVR",
        "U77",
        "532",
        "KUX",
        "42F",
        "S71"
      ],
      "scores": [
        71.68458781362007,
        81.72043010752688,
        26.523297491039425,
        55.55555555555556,
        45.878136200716845,
        3.584229390681003,
        8.960573476702509,
        65.59139784946237,
        69.71326164874552
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
        145406.0,
        496000.0,
        0.0,
        12782.0,
        3840.0,
        0.0,
        0.0,
        66671.8,
        95472.0
      ],
      "total": 558
    },
    "market_comparison": {
      "sector_name": "Software - Application",
      "sector_count": 8,
      "market_count": 558,
      "company": {
        "volatility": 0.3486143108594328,
        "adv": 145406.0,
        "spread_pct": 0.02502709626564191,
        "turnover_ratio": 0.0011086535645338392,
        "amihud": 1.0125507692955736e-07,
        "trades": 43.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6316136097851205,
          "median": 0.3806516179187508,
          "min": 0.0,
          "max": 10.345938508287322,
          "p5": 0.0,
          "p95": 1.858754148901324,
          "count": 558
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 3153118.0794065106,
          "median": 9864.75,
          "min": 0.0,
          "max": 270730200.0,
          "p5": 0.0,
          "p95": 12736565.400484825,
          "count": 558
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.11088021957242412,
          "median": 0.034262655906089484,
          "min": 0.0002674471588617271,
          "max": 1.3614536015574303,
          "p5": 0.0034260156658703893,
          "p95": 0.5417690417690416,
          "count": 556
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.006673135203536352,
          "median": 0.00018037467566378633,
          "min": 0.0,
          "max": 2.2707797772065126,
          "p5": 0.0,
          "p95": 0.009837597332501068,
          "count": 551
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 8.345403725054353e-05,
          "median": 1.6663310126536243e-07,
          "min": 0.0,
          "max": 0.0182648401826484,
          "p5": 0.0,
          "p95": 0.00012961185793710034,
          "count": 538
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 466.163082437276,
          "median": 6.0,
          "min": 0.0,
          "max": 10826.0,
          "p5": 0.0,
          "p95": 2847.4999999999955,
          "count": 558
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.26376980990131427,
          "median": 0.3293675591827014,
          "min": 0.0,
          "max": 0.425343646666782,
          "p5": 0.0,
          "p95": 0.404046668372997,
          "count": 8
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 1304656.0,
          "median": 8311.0,
          "min": 0.0,
          "max": 9779220.0,
          "p5": 0.0,
          "p95": 6530092.999999994,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.149201792547846,
          "median": 0.022421545301964628,
          "min": 0.001373207237221099,
          "max": 0.6666666666666666,
          "p5": 0.005180789784067428,
          "p95": 0.5796747967479673,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0018910756600228065,
          "median": 8.711136378976008e-05,
          "min": 0.0,
          "max": 0.0073461238829004155,
          "p5": 0.0,
          "p95": 0.007049842310694306,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 7.348292364110587e-07,
          "median": 1.0125507692955736e-07,
          "min": 0.0,
          "max": 2.012072434607639e-06,
          "p5": 3.55068460066479e-10,
          "p95": 1.9943866783803505e-06,
          "count": 7
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 422.25,
          "median": 7.0,
          "min": 0.0,
          "max": 3103.0,
          "p5": 0.0,
          "p95": 2093.249999999998,
          "count": 8
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 84345.725,
          "median": 8311.0,
          "min": 0.0,
          "max": 496000.0,
          "p5": 0.0,
          "p95": 355815.1999999998,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 35.625,
          "median": 7.0,
          "min": 0.0,
          "max": 218.0,
          "p5": 0.0,
          "p95": 152.89999999999992,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.3399003787003793,
          "median": 0.3481149041296958,
          "min": 0.0,
          "max": 0.7489458111175881,
          "p5": 0.0,
          "p95": 0.6694039378954849,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.1539811663453258,
          "median": 0.029620907995167537,
          "min": 0.012252014513924894,
          "max": 0.6666666666666666,
          "p5": 0.01289835122659902,
          "p95": 0.5796747967479673,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 3.7326573087831636,
          "median": 1.9769736842105263,
          "min": 1.0,
          "max": 16.8,
          "p5": 1.031012658227848,
          "p95": 11.969999999999994,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 7.768278548959767e-07,
          "median": 3.9642896785753787e-07,
          "min": 0.0,
          "max": 2.012072434607639e-06,
          "p5": 0.0,
          "p95": 1.9943866783803505e-06,
          "count": 7
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0019467298044936682,
          "median": 8.711136378976008e-05,
          "min": 0.0,
          "max": 0.0073461238829004155,
          "p5": 0.0,
          "p95": 0.0064961712557681395,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1W",
        "stock": -1.1102230246251565e-16,
        "market": 0.0023670701798748084,
        "sector": 0.0033112582781456013,
        "peers": 0.0
      },
      {
        "horizon": "2W",
        "stock": -0.04347826086956563,
        "market": 0.017555447739330043,
        "sector": 0.008378486855308065,
        "peers": -0.0015924657534247544
      },
      {
        "horizon": "1M",
        "stock": -0.12000000000000033,
        "market": 0.026535753836895992,
        "sector": -0.002833355170261287,
        "peers": 0.004842926023204797
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
      "share_market": 0.603966602814282,
      "share_sector": 0.36814652441248896,
      "share_idio": 0.02788687277322887,
      "beta_market": 10.720666368527704,
      "beta_sector": 11.371010378635354,
      "driver_model": {
        "valid": true,
        "model_method": "ols_with_volatility_regimes",
        "estimation_window_days": 53,
        "reporting_window_days": 53,
        "available_history_days": 53,
        "n_regimes": 2,
        "current_regime": 0,
        "current_regime_label": "Low Volatility",
        "current_regime_probability": 1.0,
        "current_driver_mix": {
          "market_share": {
            "median": 0.603966602814282,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "60.4%",
            "display_range": null,
            "display_text": "60.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 53 trading days.",
            "kind": "share_pct",
            "value_pct": 60.4,
            "plain_english": "Market explains about 60.4% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.36814652441248896,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "36.8%",
            "display_range": null,
            "display_text": "36.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 53 trading days.",
            "kind": "share_pct",
            "value_pct": 36.8,
            "plain_english": "Sector explains about 36.8% of price moves in the current state."
          },
          "company_share": {
            "median": 0.02788687277322887,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "2.8%",
            "display_range": null,
            "display_text": "2.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 53 trading days.",
            "kind": "share_pct",
            "value_pct": 2.8,
            "plain_english": "Company-specific explains about 2.8% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 10.720666368527704,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "10.72",
            "display_range": null,
            "display_text": "10.72",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 53 trading days.",
            "kind": "beta",
            "strength_label": "Very high",
            "plain_english": "Very high market link: a 1% market move has lined up with about a 10.72% stock move in the same direction in this state. The multiplier is unusually large and comes from only 53 trading days of history.",
            "value_num": 10.72
          },
          "beta_stock_lag": {
            "median": -0.14942676508278674,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.15",
            "display_range": null,
            "display_text": "-0.15",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 53 trading days.",
            "kind": "lag_beta",
            "value_num": -0.15
          },
          "beta_sector": {
            "median": 11.371010378635354,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "11.37",
            "display_range": null,
            "display_text": "11.37",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 53 trading days.",
            "kind": "beta",
            "strength_label": "Very high",
            "plain_english": "Very high sector link: a 1% sector move has lined up with about a 11.37% stock move in the same direction in this state. The multiplier is unusually large and comes from only 53 trading days of history.",
            "value_num": 11.37
          },
          "beta_market_lag": {
            "median": 4.314343969775069,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "4.31",
            "display_range": null,
            "display_text": "4.31",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 53 trading days.",
            "kind": "lag_beta",
            "value_num": 4.31
          },
          "beta_sector_lag": {
            "median": 1.6452535482186366,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.65",
            "display_range": null,
            "display_text": "1.65",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 53 trading days.",
            "kind": "lag_beta",
            "value_num": 1.65
          },
          "posterior_source": null,
          "intervals_collapsed": false,
          "confidence_label": "High, limited history",
          "confidence_note": "Based on 53 trading days relative to the 252-day target."
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
              "median": 0.47931948471963925,
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
                "median": 0.47931948471963925,
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
                "median": 0.2984396411024003,
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
                "median": 0.22224087417796046,
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
              "median": 0.5656898926629687,
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
                "median": 0.2647931795787311,
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
                "median": 0.1695169277583002,
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
                "median": 0.5656898926629687,
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
              "median": 0.5379214653603349,
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
                "median": 0.22982068067655406,
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
                "median": 0.5379214653603349,
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
            "period_label": "2026-04-01 to 2026-04-13",
            "n_obs": 8,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.37362688804880045,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.4%",
              "display_range": null,
              "display_text": "37.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
              "kind": "share_pct",
              "value_pct": 37.4,
              "plain_english": "Company-specific explains about 37.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3581794042990322,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "35.8%",
                "display_range": null,
                "display_text": "35.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
                "kind": "share_pct",
                "value_pct": 35.8,
                "plain_english": "Market explains about 35.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2681937076521674,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.8%",
                "display_range": null,
                "display_text": "26.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
                "kind": "share_pct",
                "value_pct": 26.8,
                "plain_english": "Sector explains about 26.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.37362688804880045,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "37.4%",
                "display_range": null,
                "display_text": "37.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
                "kind": "share_pct",
                "value_pct": 37.4,
                "plain_english": "Company-specific explains about 37.4% of price moves in the current state."
              }
            },
            "summary": "Apr: More mixed, though company-driven still has the largest share."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5098039215686274,
            "expected_duration_days": 5.2,
            "current_probability": 1.0,
            "n_days_effective": 26.0,
            "volatility": {
              "median": 0.027283921999567643,
              "low": 0.027283921999567643,
              "high": 0.027283921999567643
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": null
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.49019607843137253,
            "expected_duration_days": 6.25,
            "current_probability": 0.0,
            "n_days_effective": 25.0,
            "volatility": {
              "median": 0.0422813008358722,
              "low": 0.0422813008358722,
              "high": 0.0422813008358722
            },
            "volatility_label": "High Volatility",
            "current_probability_display": 0.0
          }
        ],
        "transitions": {
          "mean": [
            [
              0.84,
              0.16
            ],
            [
              0.16,
              0.84
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              21.0,
              4.0
            ],
            [
              4.0,
              21.0
            ]
          ]
        },
        "methodology": {
          "estimation_window_days": 53,
          "reporting_window_days": 53,
          "current_mix_method": "ols_last_5d",
          "monthly_history_method": "ols_per_month",
          "regime_inference": "volatility_kmeans",
          "distribution": "gaussian",
          "history_limited": true,
          "current_driver_mix_basis": "ols_recent_window",
          "sector_proxy_equals_market": false
        },
        "client_read": {
          "market_link_display": "10.72",
          "sector_link_display": "11.37",
          "market_link_explainer": "Very high market link. A 1% market move has lined up with about a 10.72% stock move in the same direction in this state. This is a point estimate from 53 trading days.",
          "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 11.37% stock move in the same direction in this state. This is a point estimate from 53 trading days.",
          "stock_persistence_display": "-0.15",
          "point_estimate_note": "Point estimate only because the current state has 53 trading days.",
          "history_limited_note": "Read is based on 53 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "Low Volatility",
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "driver_share_pct": 60.4,
          "driver_share_display": "60.4%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 53 trading days relative to the 252-day target.",
          "history_days": 53,
          "history_limited": true,
          "volatility_label": "Low Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.84,
          "effective_days": 26.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 5.2 days.",
          "expected_duration_days": 5.2
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
          "share_market": 0.47931948471963925,
          "share_sector": 0.2984396411024003,
          "share_company": 0.22224087417796046,
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
          "share_market": 0.2647931795787311,
          "share_sector": 0.1695169277583002,
          "share_company": 0.5656898926629687,
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
          "share_market": 0.22982068067655406,
          "share_sector": 0.23225785396311108,
          "share_company": 0.5379214653603349,
          "share_market_display": "23.0%",
          "share_sector_display": "23.2%",
          "share_company_display": "53.8%",
          "dominant_share_display": "53.8%"
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-13",
          "n_obs": 8,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Apr: More mixed, though company-driven still has the largest share.",
          "share_market": 0.3581794042990322,
          "share_sector": 0.2681937076521674,
          "share_company": 0.37362688804880045,
          "share_market_display": "35.8%",
          "share_sector_display": "26.8%",
          "share_company_display": "37.4%",
          "dominant_share_display": "37.4%"
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
          0.5098039215686274,
          0.49019607843137253
        ],
        "current_regime": 0,
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5098039215686274,
            "expected_duration_days": 5.2,
            "current_probability": 1.0,
            "n_days_effective": 26.0,
            "volatility": {
              "median": 0.027283921999567643,
              "low": 0.027283921999567643,
              "high": 0.027283921999567643
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.49019607843137253,
            "expected_duration_days": 6.25,
            "current_probability": 0.0,
            "n_days_effective": 25.0,
            "volatility": {
              "median": 0.0422813008358722,
              "low": 0.0422813008358722,
              "high": 0.0422813008358722
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.84,
            0.16
          ],
          [
            0.16,
            0.84
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 0.22,
          "quantity": 282500.0,
          "value": 62150.0
        },
        {
          "level": 2,
          "price": 0.215,
          "quantity": 237300.0,
          "value": 51019.5
        },
        {
          "level": 3,
          "price": 0.21,
          "quantity": 77000.0,
          "value": 16170.0
        },
        {
          "level": 4,
          "price": 0.205,
          "quantity": 25000.0,
          "value": 5125.0
        },
        {
          "level": 5,
          "price": 0.2,
          "quantity": 60000.0,
          "value": 12000.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.225,
          "quantity": 270000.0,
          "value": 60750.0
        },
        {
          "level": 2,
          "price": 0.23,
          "quantity": 1059600.0,
          "value": 243708.0
        },
        {
          "level": 3,
          "price": 0.235,
          "quantity": 480600.0,
          "value": 112941.0
        },
        {
          "level": 4,
          "price": 0.24,
          "quantity": 164200.0,
          "value": 39408.0
        },
        {
          "level": 5,
          "price": 0.245,
          "quantity": 52600.0,
          "value": 12887.0
        },
        {
          "level": 6,
          "price": 0.25,
          "quantity": 195400.0,
          "value": 48850.0
        },
        {
          "level": 7,
          "price": 0.255,
          "quantity": 260000.0,
          "value": 66300.0
        },
        {
          "level": 8,
          "price": 0.26,
          "quantity": 300000.0,
          "value": 78000.0
        },
        {
          "level": 9,
          "price": 0.265,
          "quantity": 183000.0,
          "value": 48495.0
        },
        {
          "level": 10,
          "price": 0.27,
          "quantity": 55000.0,
          "value": 14850.000000000002
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-04-13 08:59:59.942100",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 0.2225,
        "spread_pct": 0.02247191011235957,
        "spread_ticks": 1.0,
        "tick_size": 0.005,
        "bid_depth_notional_top10": 146464.5,
        "ask_depth_notional_top10": 726189.0,
        "bid_ask_depth_ratio": 0.2017
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 82,
        "history_limited": true,
        "trade_days_used": 55,
        "n_trades_used": 10353,
        "first_trade_date": "2026-01-22",
        "last_trade_date": "2026-04-13",
        "window_label": "Jan 22, 2026 to Apr 13, 2026",
        "window_short_label": "Jan 22-Apr 13",
        "trade_days_label": "55 trading days",
        "trade_count_label": "10,353 trades",
        "window_detail_label": "55 trading days • 10,353 trades",
        "history_note": "Trade-size percentiles use available history from Jan 22, 2026 to Apr 13, 2026 (55 trading days • 10,353 trades), not a full year.",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 9509.2,
            "impact_pct": -0.011236,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 6.49,
            "pct_of_adv": 6.61
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 13726.8,
            "impact_pct": -0.011236,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 9.37,
            "pct_of_adv": 9.55
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 103797.45,
            "impact_pct": -0.020377,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 70.87,
            "pct_of_adv": 72.19
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-04-13",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "8136218919775101952",
            "timestamp": "2026-04-13 00:30:30.116400000",
            "local_timestamp": "2026-04-13 08:30:30",
            "posted_price": 0.23,
            "size_shares": 869100.0,
            "notional": 199893.0,
            "impact_pct": -0.034515,
            "filled_pct": 73.3,
            "levels_consumed": 5,
            "pct_of_bid_depth": 136.48,
            "price_vs_mid_pct": 3.371,
            "executed_event_count": 0,
            "event_count": 2
          },
          {
            "rank": 2,
            "order_id": "8136218919775090688",
            "timestamp": "2026-04-13 00:30:06.194300000",
            "local_timestamp": "2026-04-13 08:30:06",
            "posted_price": 0.235,
            "size_shares": 200000.0,
            "notional": 47000.0,
            "impact_pct": -0.011236,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 32.09,
            "price_vs_mid_pct": 5.618,
            "executed_event_count": 0,
            "event_count": 6
          },
          {
            "rank": 3,
            "order_id": "8126536070628204544",
            "timestamp": "2026-04-12 22:59:01.016700000",
            "local_timestamp": "2026-04-13 06:59:01",
            "posted_price": 0.365,
            "size_shares": 100000.0,
            "notional": 36500.0,
            "impact_pct": -0.011236,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 24.92,
            "price_vs_mid_pct": 64.045,
            "executed_event_count": 0,
            "event_count": 1
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-04-13",
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
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 216523.5,
            "ask_depth_notional": 703074.0,
            "mid_price": 0.2275
          },
          {
            "bucket": "09:30",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 222656.0,
            "ask_depth_notional": 707892.0,
            "mid_price": 0.2275
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 226631.0,
            "ask_depth_notional": 697542.0,
            "mid_price": 0.2275
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 252663.5,
            "ask_depth_notional": 695610.0,
            "mid_price": 0.2275
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 235401.0,
            "ask_depth_notional": 695610.0,
            "mid_price": 0.2275
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 231733.5,
            "ask_depth_notional": 695610.0,
            "mid_price": 0.2275
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 235738.5,
            "ask_depth_notional": 700327.0,
            "mid_price": 0.2275
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 235738.5,
            "ask_depth_notional": 704697.0,
            "mid_price": 0.2275
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 236838.5,
            "ask_depth_notional": 704697.0,
            "mid_price": 0.2275
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 236838.5,
            "ask_depth_notional": 707687.0,
            "mid_price": 0.2275
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.02247191011235957,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 227924.5,
            "ask_depth_notional": 708525.0,
            "mid_price": 0.2225
          },
          {
            "bucket": "16:00",
            "spread_pct": 0.02247191011235957,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 223766.5,
            "ask_depth_notional": 708525.0,
            "mid_price": 0.2225
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.02247191011235957,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 146464.5,
            "ask_depth_notional": 726189.0,
            "mid_price": 0.2225
          }
        ],
        "summary": {
          "median_spread_pct": 0.021978021978021997,
          "median_spread_ticks": 1.0000000000000009,
          "median_bid_depth_notional": 231733.5,
          "median_ask_depth_notional": 704697.0,
          "tightest_bucket": "09:00",
          "widest_bucket": "15:30",
          "deepest_bid_bucket": "10:30",
          "thinnest_bid_bucket": "16:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 34.8,
      "peers": [
        {
          "ticker": "ITS",
          "pct": 203.8
        },
        {
          "ticker": "S71",
          "pct": 1020.6
        },
        {
          "ticker": "42F",
          "pct": 1135.6
        },
        {
          "ticker": "LVR",
          "pct": 9213.6
        },
        {
          "ticker": "U77",
          "pct": 27933.0
        },
        {
          "ticker": "NXR",
          "pct": null
        },
        {
          "ticker": "532",
          "pct": null
        },
        {
          "ticker": "KUX",
          "pct": null
        }
      ]
    },
    "trader_composition": {
      "primary_period": "30d",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 38,
          "n_runs": 17,
          "n_trade_days": 1,
          "first_trade_date": "2026-04-13",
          "last_trade_date": "2026-04-13",
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
            "retail_pct": 0.2894736842105263,
            "mixed_pct": 0.07894736842105263,
            "instit_pct": 0.5,
            "ambiguous_pct": 0.13157894736842105,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.13157894736842105,
            "retail_qty_pct": 0.06211822197161921,
            "mixed_qty_pct": 0.06578329104407481,
            "instit_qty_pct": 0.6211822197161921,
            "ambiguous_qty_pct": 0.2509162672681139,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2509162672681139,
            "retail_notional_pct": 0.06288048719241864,
            "mixed_notional_pct": 0.06646985961143619,
            "instit_notional_pct": 0.6171146172496671,
            "ambiguous_notional_pct": 0.253535035946478,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.253535035946478
          },
          "run_composition": {
            "retail_pct": 0.5882352941176471,
            "mixed_pct": 0.11764705882352941,
            "instit_pct": 0.23529411764705882,
            "ambiguous_pct": 0.058823529411764705,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.058823529411764705,
            "retail_notional_pct": 0.06288048719241864,
            "mixed_notional_pct": 0.06646985961143619,
            "instit_notional_pct": 0.6171146172496671,
            "unclear_notional_pct": 0.253535035946478
          },
          "counts": {
            "trades": {
              "retail": 11,
              "mixed": 3,
              "institutional": 19,
              "ambiguous": 5,
              "unobservable": 0,
              "unclear": 5
            },
            "runs": {
              "retail": 10,
              "mixed": 2,
              "institutional": 4,
              "ambiguous": 1,
              "unobservable": 0,
              "unclear": 1
            }
          },
          "confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.8235294117647058,
            "na": 0.17647058823529413
          },
          "confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 14,
            "na": 3
          },
          "trade_confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.7894736842105263,
            "na": 0.21052631578947367
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 30,
            "na": 8
          },
          "observability": {
            "avg_feature_coverage": 0.8411764705882353,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.058823529411764705,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5882352941176471,
          "dominance_gap": 0.35294117647058826,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 26,
              "SINGLE_FILL": 12
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 29,
              "PERSISTENT_POSITIVE_IMPACT": 8,
              "MOMENTUM_REACTIVE": 1
            },
            "d3_urgency": {
              "IMMEDIATE": 17
            },
            "participant_confidence": {
              "LOW": 14,
              "NA": 3
            }
          },
          "trade_size": {
            "avg": 6235.513157894737,
            "median": 4117.5
          },
          "run_size": {
            "avg": 13938.20588235294,
            "median": 2700.0,
            "avg_length": 1.1176470588235294
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-39",
              "timestamp": "2026-04-13T08:52:51.775000",
              "price": 0.22,
              "size": 2500.0,
              "notional": 550.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1295,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-38",
              "timestamp": "2026-04-13T08:52:51.775000",
              "price": 0.22,
              "size": 500.0,
              "notional": 110.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1295,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-37",
              "timestamp": "2026-04-13T08:46:32.719800",
              "price": 0.225,
              "size": 2000.0,
              "notional": 450.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1294,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-36",
              "timestamp": "2026-04-13T08:35:53.512700",
              "price": 0.22,
              "size": 500.0,
              "notional": 110.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1293,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-35",
              "timestamp": "2026-04-13T08:35:53.512700",
              "price": 0.22,
              "size": 200000.0,
              "notional": 44000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1293,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-34",
              "timestamp": "2026-04-13T08:35:53.512700",
              "price": 0.22,
              "size": 18000.0,
              "notional": 3960.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1293,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-33",
              "timestamp": "2026-04-13T08:35:53.512700",
              "price": 0.22,
              "size": 50000.0,
              "notional": 11000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1293,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-32",
              "timestamp": "2026-04-13T08:35:53.512700",
              "price": 0.22,
              "size": 50000.0,
              "notional": 11000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1293,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-31",
              "timestamp": "2026-04-13T08:35:53.512700",
              "price": 0.22,
              "size": 2500.0,
              "notional": 550.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1293,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-30",
              "timestamp": "2026-04-13T08:35:53.512700",
              "price": 0.22,
              "size": 100000.0,
              "notional": 22000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1293,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-29",
              "timestamp": "2026-04-13T08:35:53.512700",
              "price": 0.22,
              "size": 40000.0,
              "notional": 8800.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1293,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-28",
              "timestamp": "2026-04-13T08:35:53.512700",
              "price": 0.22,
              "size": 39000.0,
              "notional": 8580.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1293,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-27",
              "timestamp": "2026-04-13T08:35:38.458900",
              "price": 0.225,
              "size": 9700.0,
              "notional": 2182.5,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1292,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-26",
              "timestamp": "2026-04-13T07:35:46.006300",
              "price": 0.225,
              "size": 12000.0,
              "notional": 2700.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1291,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-25",
              "timestamp": "2026-04-13T07:35:03.871800",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1290,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-24",
              "timestamp": "2026-04-13T07:35:03.871800",
              "price": 0.225,
              "size": 10000.0,
              "notional": 2250.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1290,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-23",
              "timestamp": "2026-04-13T07:35:03.871800",
              "price": 0.225,
              "size": 9000.0,
              "notional": 2025.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1290,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-22",
              "timestamp": "2026-04-13T07:35:03.841600",
              "price": 0.225,
              "size": 11000.0,
              "notional": 2475.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1290,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-21",
              "timestamp": "2026-04-13T07:35:03.841600",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1290,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-20",
              "timestamp": "2026-04-13T07:35:03.841600",
              "price": 0.225,
              "size": 19000.0,
              "notional": 4275.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1290,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-19",
              "timestamp": "2026-04-13T02:58:40.038200",
              "price": 0.23,
              "size": 4200.0,
              "notional": 966.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1289,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-18",
              "timestamp": "2026-04-13T02:57:50.256700",
              "price": 0.23,
              "size": 4200.0,
              "notional": 966.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1288,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-17",
              "timestamp": "2026-04-13T02:01:46.985000",
              "price": 0.225,
              "size": 1000.0,
              "notional": 225.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1287,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-16",
              "timestamp": "2026-04-13T01:44:04.917800",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1286,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-15",
              "timestamp": "2026-04-13T01:34:15.599400",
              "price": 0.225,
              "size": 10000.0,
              "notional": 2250.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1285,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-14",
              "timestamp": "2026-04-13T01:30:25.623700",
              "price": 0.225,
              "size": 3000.0,
              "notional": 675.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1284,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-13",
              "timestamp": "2026-04-13T01:30:25.321700",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1284,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-12",
              "timestamp": "2026-04-13T01:30:19.677400",
              "price": 0.225,
              "size": 17000.0,
              "notional": 3825.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1283,
              "d1": "SINGLE_FILL",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-11",
              "timestamp": "2026-04-13T01:28:25.216800",
              "price": 0.225,
              "size": 19000.0,
              "notional": 4275.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1282,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-10",
              "timestamp": "2026-04-13T01:28:25.216800",
              "price": 0.225,
              "size": 30000.0,
              "notional": 6750.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1282,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.2894736842105263,
              "mixed_pct": 0.07894736842105263,
              "instit_pct": 0.5,
              "ambiguous_pct": 0.13157894736842105,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.13157894736842105,
              "retail_qty_pct": 0.06211822197161921,
              "mixed_qty_pct": 0.06578329104407481,
              "instit_qty_pct": 0.6211822197161921,
              "ambiguous_qty_pct": 0.2509162672681139,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.2509162672681139,
              "retail_notional_pct": 0.06288048719241864,
              "mixed_notional_pct": 0.06646985961143619,
              "instit_notional_pct": 0.6171146172496671,
              "ambiguous_notional_pct": 0.253535035946478,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.253535035946478,
              "run_retail_pct": 0.5882352941176471,
              "run_mixed_pct": 0.11764705882352941,
              "run_instit_pct": 0.23529411764705882,
              "run_unclear_pct": 0.058823529411764705,
              "avg_trade_size": 6235.513157894737,
              "avg_run_notional": 13938.20588235294,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.8235294117647058,
              "na_confidence_pct": 0.17647058823529413,
              "avg_feature_coverage": 0.8411764705882353,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "S71",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.25,
              "mixed_pct": 0.25,
              "instit_pct": 0.25,
              "ambiguous_pct": 0.25,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.25,
              "retail_qty_pct": 0.1705348133198789,
              "mixed_qty_pct": 0.2119071644803229,
              "instit_qty_pct": 0.2341069626639758,
              "ambiguous_qty_pct": 0.3834510595358224,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.3834510595358224,
              "retail_notional_pct": 0.17070217917675545,
              "mixed_notional_pct": 0.211864406779661,
              "instit_notional_pct": 0.23405972558514931,
              "ambiguous_notional_pct": 0.3833736884584342,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.3833736884584342,
              "run_retail_pct": 0.3125,
              "run_mixed_pct": 0.1875,
              "run_instit_pct": 0.1875,
              "run_unclear_pct": 0.3125,
              "avg_trade_size": 2354.1,
              "avg_run_notional": 2942.625,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5,
              "na_confidence_pct": 0.5,
              "avg_feature_coverage": 0.8406250000000001,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.275,
              "mixed_pct": 0.05,
              "instit_pct": 0.13333333333333333,
              "ambiguous_pct": 0.5,
              "unobservable_pct": 0.041666666666666664,
              "unclear_pct": 0.5416666666666666,
              "retail_qty_pct": 0.015397419891801914,
              "mixed_qty_pct": 0.046192259675405745,
              "instit_qty_pct": 0.22929671244277985,
              "ambiguous_qty_pct": 0.6674989596337911,
              "unobservable_qty_pct": 0.04161464835622139,
              "unclear_qty_pct": 0.7091136079900126,
              "retail_notional_pct": 0.01537496995851663,
              "mixed_notional_pct": 0.04678738989143269,
              "instit_notional_pct": 0.22858486327206612,
              "ambiguous_notional_pct": 0.6671069267823743,
              "unobservable_notional_pct": 0.04214585009561029,
              "unclear_notional_pct": 0.7092527768779846,
              "run_retail_pct": 0.49230769230769234,
              "run_mixed_pct": 0.06153846153846154,
              "run_instit_pct": 0.09230769230769231,
              "run_unclear_pct": 0.35384615384615387,
              "avg_trade_size": 3987.5416666666665,
              "avg_run_notional": 7361.615384615385,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.4153846153846154,
              "low_confidence_pct": 0.16923076923076924,
              "na_confidence_pct": 0.4153846153846154,
              "avg_feature_coverage": 0.8415384615384615,
              "observable_run_pct": 0.9846153846153847,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "42F",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.6666666666666666,
              "mixed_pct": 0.3333333333333333,
              "instit_pct": 0.0,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0,
              "retail_qty_pct": 0.001996007984031936,
              "mixed_qty_pct": 0.998003992015968,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0,
              "retail_notional_pct": 0.002034314666257245,
              "mixed_notional_pct": 0.9979656853337426,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0,
              "run_retail_pct": 0.6666666666666666,
              "run_mixed_pct": 0.3333333333333333,
              "run_instit_pct": 0.0,
              "run_unclear_pct": 0.0,
              "avg_trade_size": 868.4333333333334,
              "avg_run_notional": 868.4333333333334,
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
            },
            {
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.21428571428571427,
              "mixed_pct": 0.0,
              "instit_pct": 0.0,
              "ambiguous_pct": 0.2857142857142857,
              "unobservable_pct": 0.5,
              "unclear_pct": 0.7857142857142857,
              "retail_qty_pct": 0.11363636363636363,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": 0.3181818181818182,
              "unobservable_qty_pct": 0.5681818181818182,
              "unclear_qty_pct": 0.8863636363636365,
              "retail_notional_pct": 0.11308089817386027,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": 0.31792853596189563,
              "unobservable_notional_pct": 0.5689905658642441,
              "unclear_notional_pct": 0.8869191018261398,
              "run_retail_pct": 0.2857142857142857,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.0,
              "run_unclear_pct": 0.7142857142857142,
              "avg_trade_size": 1942.0357142857142,
              "avg_run_notional": 3884.0714285714284,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.2857142857142857,
              "na_confidence_pct": 0.7142857142857143,
              "avg_feature_coverage": 0.7357142857142858,
              "observable_run_pct": 0.7142857142857143,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            }
          ]
        },
        "1w": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 344,
          "n_runs": 183,
          "n_trade_days": 5,
          "first_trade_date": "2026-04-07",
          "last_trade_date": "2026-04-13",
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
            "retail_pct": 0.3866279069767442,
            "mixed_pct": 0.06976744186046512,
            "instit_pct": 0.29941860465116277,
            "ambiguous_pct": 0.2441860465116279,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.2441860465116279,
            "retail_qty_pct": 0.07260433855193786,
            "mixed_qty_pct": 0.0856642653036584,
            "instit_qty_pct": 0.6107980842757676,
            "ambiguous_qty_pct": 0.23093331186863605,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.23093331186863605,
            "retail_notional_pct": 0.07292823617928415,
            "mixed_notional_pct": 0.08620167675826736,
            "instit_notional_pct": 0.6095898570456093,
            "ambiguous_notional_pct": 0.23128023001683923,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.23128023001683923
          },
          "run_composition": {
            "retail_pct": 0.6885245901639344,
            "mixed_pct": 0.07103825136612021,
            "instit_pct": 0.14207650273224043,
            "ambiguous_pct": 0.09836065573770492,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.09836065573770492,
            "retail_notional_pct": 0.07292823617928415,
            "mixed_notional_pct": 0.08620167675826736,
            "instit_notional_pct": 0.6095898570456093,
            "unclear_notional_pct": 0.23128023001683923
          },
          "counts": {
            "trades": {
              "retail": 133,
              "mixed": 24,
              "institutional": 103,
              "ambiguous": 84,
              "unobservable": 0,
              "unclear": 84
            },
            "runs": {
              "retail": 126,
              "mixed": 13,
              "institutional": 26,
              "ambiguous": 18,
              "unobservable": 0,
              "unclear": 18
            }
          },
          "confidence": {
            "high": 0.1366120218579235,
            "medium": 0.3989071038251366,
            "low": 0.29508196721311475,
            "na": 0.16939890710382513
          },
          "confidence_counts": {
            "high": 25,
            "medium": 73,
            "low": 54,
            "na": 31
          },
          "trade_confidence": {
            "high": 0.08139534883720931,
            "medium": 0.30523255813953487,
            "low": 0.29941860465116277,
            "na": 0.313953488372093
          },
          "trade_confidence_counts": {
            "high": 28,
            "medium": 105,
            "low": 103,
            "na": 108
          },
          "observability": {
            "avg_feature_coverage": 0.8459016393442621,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.09836065573770492,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.6885245901639344,
          "dominance_gap": 0.5464480874316939,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 195,
              "SINGLE_FILL": 149
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 248,
              "MOMENTUM_REACTIVE": 47,
              "PERSISTENT_POSITIVE_IMPACT": 46,
              "SHORT_HORIZON_POSITIVE_IMPACT": 2,
              "UNOBSERVABLE": 1
            },
            "d3_urgency": {
              "IMMEDIATE": 183
            },
            "participant_confidence": {
              "MEDIUM": 73,
              "LOW": 54,
              "NA": 31,
              "HIGH": 25
            }
          },
          "trade_size": {
            "avg": 3245.4651162790697,
            "median": 834.25
          },
          "run_size": {
            "avg": 6100.765027322404,
            "median": 330.0,
            "avg_length": 1.0819672131147542
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-39",
              "timestamp": "2026-04-13T08:52:51.775000",
              "price": 0.22,
              "size": 2500.0,
              "notional": 550.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1295,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-38",
              "timestamp": "2026-04-13T08:52:51.775000",
              "price": 0.22,
              "size": 500.0,
              "notional": 110.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1295,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-37",
              "timestamp": "2026-04-13T08:46:32.719800",
              "price": 0.225,
              "size": 2000.0,
              "notional": 450.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1294,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-36",
              "timestamp": "2026-04-13T08:35:53.512700",
              "price": 0.22,
              "size": 500.0,
              "notional": 110.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1293,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-35",
              "timestamp": "2026-04-13T08:35:53.512700",
              "price": 0.22,
              "size": 200000.0,
              "notional": 44000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1293,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-34",
              "timestamp": "2026-04-13T08:35:53.512700",
              "price": 0.22,
              "size": 18000.0,
              "notional": 3960.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1293,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-33",
              "timestamp": "2026-04-13T08:35:53.512700",
              "price": 0.22,
              "size": 50000.0,
              "notional": 11000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1293,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-32",
              "timestamp": "2026-04-13T08:35:53.512700",
              "price": 0.22,
              "size": 50000.0,
              "notional": 11000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1293,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-31",
              "timestamp": "2026-04-13T08:35:53.512700",
              "price": 0.22,
              "size": 2500.0,
              "notional": 550.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1293,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-30",
              "timestamp": "2026-04-13T08:35:53.512700",
              "price": 0.22,
              "size": 100000.0,
              "notional": 22000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1293,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-29",
              "timestamp": "2026-04-13T08:35:53.512700",
              "price": 0.22,
              "size": 40000.0,
              "notional": 8800.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1293,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-28",
              "timestamp": "2026-04-13T08:35:53.512700",
              "price": 0.22,
              "size": 39000.0,
              "notional": 8580.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1293,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-27",
              "timestamp": "2026-04-13T08:35:38.458900",
              "price": 0.225,
              "size": 9700.0,
              "notional": 2182.5,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1292,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-26",
              "timestamp": "2026-04-13T07:35:46.006300",
              "price": 0.225,
              "size": 12000.0,
              "notional": 2700.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1291,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-25",
              "timestamp": "2026-04-13T07:35:03.871800",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1290,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-24",
              "timestamp": "2026-04-13T07:35:03.871800",
              "price": 0.225,
              "size": 10000.0,
              "notional": 2250.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1290,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-23",
              "timestamp": "2026-04-13T07:35:03.871800",
              "price": 0.225,
              "size": 9000.0,
              "notional": 2025.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1290,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-22",
              "timestamp": "2026-04-13T07:35:03.841600",
              "price": 0.225,
              "size": 11000.0,
              "notional": 2475.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1290,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-21",
              "timestamp": "2026-04-13T07:35:03.841600",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1290,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-20",
              "timestamp": "2026-04-13T07:35:03.841600",
              "price": 0.225,
              "size": 19000.0,
              "notional": 4275.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1290,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-19",
              "timestamp": "2026-04-13T02:58:40.038200",
              "price": 0.23,
              "size": 4200.0,
              "notional": 966.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1289,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-18",
              "timestamp": "2026-04-13T02:57:50.256700",
              "price": 0.23,
              "size": 4200.0,
              "notional": 966.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1288,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-17",
              "timestamp": "2026-04-13T02:01:46.985000",
              "price": 0.225,
              "size": 1000.0,
              "notional": 225.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1287,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-16",
              "timestamp": "2026-04-13T01:44:04.917800",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1286,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-15",
              "timestamp": "2026-04-13T01:34:15.599400",
              "price": 0.225,
              "size": 10000.0,
              "notional": 2250.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1285,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-14",
              "timestamp": "2026-04-13T01:30:25.623700",
              "price": 0.225,
              "size": 3000.0,
              "notional": 675.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1284,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-13",
              "timestamp": "2026-04-13T01:30:25.321700",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1284,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-12",
              "timestamp": "2026-04-13T01:30:19.677400",
              "price": 0.225,
              "size": 17000.0,
              "notional": 3825.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1283,
              "d1": "SINGLE_FILL",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-11",
              "timestamp": "2026-04-13T01:28:25.216800",
              "price": 0.225,
              "size": 19000.0,
              "notional": 4275.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1282,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-10",
              "timestamp": "2026-04-13T01:28:25.216800",
              "price": 0.225,
              "size": 30000.0,
              "notional": 6750.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1282,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.3866279069767442,
              "mixed_pct": 0.06976744186046512,
              "instit_pct": 0.29941860465116277,
              "ambiguous_pct": 0.2441860465116279,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.2441860465116279,
              "retail_qty_pct": 0.07260433855193786,
              "mixed_qty_pct": 0.0856642653036584,
              "instit_qty_pct": 0.6107980842757676,
              "ambiguous_qty_pct": 0.23093331186863605,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.23093331186863605,
              "retail_notional_pct": 0.07292823617928415,
              "mixed_notional_pct": 0.08620167675826736,
              "instit_notional_pct": 0.6095898570456093,
              "ambiguous_notional_pct": 0.23128023001683923,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.23128023001683923,
              "run_retail_pct": 0.6885245901639344,
              "run_mixed_pct": 0.07103825136612021,
              "run_instit_pct": 0.14207650273224043,
              "run_unclear_pct": 0.09836065573770492,
              "avg_trade_size": 3245.4651162790697,
              "avg_run_notional": 6100.765027322404,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.1366120218579235,
              "medium_confidence_pct": 0.3989071038251366,
              "low_confidence_pct": 0.29508196721311475,
              "na_confidence_pct": 0.16939890710382513,
              "avg_feature_coverage": 0.8459016393442621,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "42F",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2053872053872054,
              "mixed_pct": 0.07407407407407407,
              "instit_pct": 0.3468013468013468,
              "ambiguous_pct": 0.37373737373737376,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.37373737373737376,
              "retail_qty_pct": 0.027794484904747584,
              "mixed_qty_pct": 0.04099711039343105,
              "instit_qty_pct": 0.6097413082987931,
              "ambiguous_qty_pct": 0.32146709640302823,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.32146709640302823,
              "retail_notional_pct": 0.02819139180442267,
              "mixed_notional_pct": 0.0415161563045411,
              "instit_notional_pct": 0.6076478675423811,
              "ambiguous_notional_pct": 0.32264458434865506,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.32264458434865506,
              "run_retail_pct": 0.4225352112676056,
              "run_mixed_pct": 0.08450704225352113,
              "run_instit_pct": 0.11971830985915492,
              "run_unclear_pct": 0.3732394366197183,
              "avg_trade_size": 5492.721885521886,
              "avg_run_notional": 11488.298591549295,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.02112676056338028,
              "medium_confidence_pct": 0.28169014084507044,
              "low_confidence_pct": 0.23943661971830985,
              "na_confidence_pct": 0.45774647887323944,
              "avg_feature_coverage": 0.8373239436619718,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.29923273657289,
              "mixed_pct": 0.11764705882352941,
              "instit_pct": 0.2557544757033248,
              "ambiguous_pct": 0.3209718670076726,
              "unobservable_pct": 0.00639386189258312,
              "unclear_pct": 0.3273657289002557,
              "retail_qty_pct": 0.041759300429820664,
              "mixed_qty_pct": 0.06795612864977027,
              "instit_qty_pct": 0.40703275529865124,
              "ambiguous_qty_pct": 0.4758411145694383,
              "unobservable_qty_pct": 0.007410701052319549,
              "unclear_qty_pct": 0.48325181562175784,
              "retail_notional_pct": 0.04180957586696829,
              "mixed_notional_pct": 0.0684358115414483,
              "instit_notional_pct": 0.4070948908573092,
              "ambiguous_notional_pct": 0.475298555744854,
              "unobservable_notional_pct": 0.007361165989420172,
              "unclear_notional_pct": 0.4826597217342742,
              "run_retail_pct": 0.5957446808510638,
              "run_mixed_pct": 0.09840425531914894,
              "run_instit_pct": 0.09042553191489362,
              "run_unclear_pct": 0.2154255319148936,
              "avg_trade_size": 3503.3855498721227,
              "avg_run_notional": 7286.296542553191,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.007978723404255319,
              "medium_confidence_pct": 0.5053191489361702,
              "low_confidence_pct": 0.17287234042553193,
              "na_confidence_pct": 0.31382978723404253,
              "avg_feature_coverage": 0.8453457446808508,
              "observable_run_pct": 0.9973404255319149,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "S71",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.18686868686868688,
              "mixed_pct": 0.08585858585858586,
              "instit_pct": 0.23232323232323232,
              "ambiguous_pct": 0.41919191919191917,
              "unobservable_pct": 0.07575757575757576,
              "unclear_pct": 0.4949494949494949,
              "retail_qty_pct": 0.08611784547275218,
              "mixed_qty_pct": 0.08548540107515548,
              "instit_qty_pct": 0.36660693580689363,
              "ambiguous_qty_pct": 0.39390745230315166,
              "unobservable_qty_pct": 0.06788236534204702,
              "unclear_qty_pct": 0.46178981764519866,
              "retail_notional_pct": 0.0866729398276473,
              "mixed_notional_pct": 0.08619412063355222,
              "instit_notional_pct": 0.36556456782401675,
              "ambiguous_notional_pct": 0.3931005598074058,
              "unobservable_notional_pct": 0.06846781190737793,
              "unclear_notional_pct": 0.46156837171478377,
              "run_retail_pct": 0.3181818181818182,
              "run_mixed_pct": 0.08181818181818182,
              "run_instit_pct": 0.16363636363636364,
              "run_unclear_pct": 0.43636363636363634,
              "avg_trade_size": 2273.058080808081,
              "avg_run_notional": 4091.5045454545457,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Mixed, mostly unclassified",
              "high_confidence_pct": 0.03636363636363636,
              "medium_confidence_pct": 0.14545454545454545,
              "low_confidence_pct": 0.3,
              "na_confidence_pct": 0.5181818181818182,
              "avg_feature_coverage": 0.8159090909090907,
              "observable_run_pct": 0.9818181818181818,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.18309859154929578,
              "mixed_pct": 0.09859154929577464,
              "instit_pct": 0.23943661971830985,
              "ambiguous_pct": 0.29577464788732394,
              "unobservable_pct": 0.18309859154929578,
              "unclear_pct": 0.47887323943661975,
              "retail_qty_pct": 0.11426780864842281,
              "mixed_qty_pct": 0.26175057447252975,
              "instit_qty_pct": 0.3106329642782536,
              "ambiguous_qty_pct": 0.2448297472320869,
              "unobservable_qty_pct": 0.06851890536870692,
              "unclear_qty_pct": 0.3133486526007938,
              "retail_notional_pct": 0.11416100467810203,
              "mixed_notional_pct": 0.2607721652929383,
              "instit_notional_pct": 0.30946619514368456,
              "ambiguous_notional_pct": 0.2456504789485409,
              "unobservable_notional_pct": 0.06995015593673425,
              "unclear_notional_pct": 0.3156006348852751,
              "run_retail_pct": 0.32432432432432434,
              "run_mixed_pct": 0.16216216216216217,
              "run_instit_pct": 0.13513513513513514,
              "run_unclear_pct": 0.3783783783783784,
              "avg_trade_size": 5058.028169014085,
              "avg_run_notional": 9705.945945945947,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.4594594594594595,
              "na_confidence_pct": 0.5405405405405406,
              "avg_feature_coverage": 0.7986486486486488,
              "observable_run_pct": 0.8918918918918919,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.08,
              "mixed_pct": 0.12,
              "instit_pct": 0.08,
              "ambiguous_pct": 0.44,
              "unobservable_pct": 0.28,
              "unclear_pct": 0.72,
              "retail_qty_pct": 0.0015479876160990713,
              "mixed_qty_pct": 0.09287925696594428,
              "instit_qty_pct": 0.03715170278637771,
              "ambiguous_qty_pct": 0.5758513931888545,
              "unobservable_qty_pct": 0.29256965944272445,
              "unclear_qty_pct": 0.868421052631579,
              "retail_notional_pct": 0.0015259706221533657,
              "mixed_notional_pct": 0.09481985392617097,
              "instit_notional_pct": 0.03597097161228697,
              "ambiguous_notional_pct": 0.5751899697523889,
              "unobservable_notional_pct": 0.29249323408699973,
              "unclear_notional_pct": 0.8676832038393887,
              "run_retail_pct": 0.13333333333333333,
              "run_mixed_pct": 0.13333333333333333,
              "run_instit_pct": 0.06666666666666667,
              "run_unclear_pct": 0.6666666666666666,
              "avg_trade_size": 1030.164,
              "avg_run_notional": 1716.9399999999998,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.2,
              "na_confidence_pct": 0.8,
              "avg_feature_coverage": 0.7766666666666665,
              "observable_run_pct": 0.8666666666666667,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "NXR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2,
              "mixed_pct": 0.2,
              "instit_pct": 0.0,
              "ambiguous_pct": 0.6,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.6,
              "retail_qty_pct": 0.13978494623655913,
              "mixed_qty_pct": 0.17634408602150536,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": 0.6838709677419355,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.6838709677419355,
              "retail_notional_pct": 0.14068846917899605,
              "mixed_notional_pct": 0.17748391496427196,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": 0.681827615856732,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.681827615856732,
              "run_retail_pct": 0.25,
              "run_mixed_pct": 0.25,
              "run_instit_pct": 0.0,
              "run_unclear_pct": 0.5,
              "avg_trade_size": 3372.7,
              "avg_run_notional": 4215.875,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.25,
              "na_confidence_pct": 0.75,
              "avg_feature_coverage": 0.8125000000000001,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "532",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.0,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 1.0,
              "unclear_pct": 1.0,
              "retail_qty_pct": 0.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 1.0,
              "unclear_qty_pct": 1.0,
              "retail_notional_pct": 0.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 1.0,
              "unclear_notional_pct": 1.0,
              "run_retail_pct": 0.0,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.0,
              "run_unclear_pct": 1.0,
              "avg_trade_size": 700.0,
              "avg_run_notional": 1166.6666666666667,
              "dominant_bucket": "UNOBSERVABLE",
              "dominant_label": "Not Observable",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.0,
              "na_confidence_pct": 1.0,
              "avg_feature_coverage": 0.55,
              "observable_run_pct": 0.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            }
          ]
        },
        "2w": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 594,
          "n_runs": 312,
          "n_trade_days": 10,
          "first_trade_date": "2026-03-30",
          "last_trade_date": "2026-04-13",
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
            "retail_pct": 0.3602693602693603,
            "mixed_pct": 0.05723905723905724,
            "instit_pct": 0.3686868686868687,
            "ambiguous_pct": 0.2138047138047138,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.2138047138047138,
            "retail_qty_pct": 0.07738209586014792,
            "mixed_qty_pct": 0.07768225914897704,
            "instit_qty_pct": 0.6200413024685428,
            "ambiguous_qty_pct": 0.22489434252233215,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.22489434252233215,
            "retail_notional_pct": 0.0777625695044771,
            "mixed_notional_pct": 0.07803258305851717,
            "instit_notional_pct": 0.618943371860959,
            "ambiguous_notional_pct": 0.2252614755760467,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2252614755760467
          },
          "run_composition": {
            "retail_pct": 0.6378205128205128,
            "mixed_pct": 0.060897435897435896,
            "instit_pct": 0.16666666666666666,
            "ambiguous_pct": 0.1346153846153846,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1346153846153846,
            "retail_notional_pct": 0.0777625695044771,
            "mixed_notional_pct": 0.07803258305851717,
            "instit_notional_pct": 0.618943371860959,
            "unclear_notional_pct": 0.2252614755760467
          },
          "counts": {
            "trades": {
              "retail": 214,
              "mixed": 34,
              "institutional": 219,
              "ambiguous": 127,
              "unobservable": 0,
              "unclear": 127
            },
            "runs": {
              "retail": 199,
              "mixed": 19,
              "institutional": 52,
              "ambiguous": 42,
              "unobservable": 0,
              "unclear": 42
            }
          },
          "confidence": {
            "high": 0.15064102564102563,
            "medium": 0.3141025641025641,
            "low": 0.33974358974358976,
            "na": 0.1955128205128205
          },
          "confidence_counts": {
            "high": 47,
            "medium": 98,
            "low": 106,
            "na": 61
          },
          "trade_confidence": {
            "high": 0.1026936026936027,
            "medium": 0.25925925925925924,
            "low": 0.367003367003367,
            "na": 0.27104377104377103
          },
          "trade_confidence_counts": {
            "high": 61,
            "medium": 154,
            "low": 218,
            "na": 161
          },
          "observability": {
            "avg_feature_coverage": 0.8480769230769232,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.1346153846153846,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.6378205128205128,
          "dominance_gap": 0.47115384615384615,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 338,
              "SINGLE_FILL": 256
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 435,
              "PERSISTENT_POSITIVE_IMPACT": 106,
              "MOMENTUM_REACTIVE": 50,
              "SHORT_HORIZON_POSITIVE_IMPACT": 2,
              "UNOBSERVABLE": 1
            },
            "d3_urgency": {
              "IMMEDIATE": 312
            },
            "participant_confidence": {
              "LOW": 106,
              "MEDIUM": 98,
              "NA": 61,
              "HIGH": 47
            }
          },
          "trade_size": {
            "avg": 3154.848484848485,
            "median": 1180.0
          },
          "run_size": {
            "avg": 6006.346153846154,
            "median": 799.0,
            "avg_length": 1.0993589743589745
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-39",
              "timestamp": "2026-04-13T08:52:51.775000",
              "price": 0.22,
              "size": 2500.0,
              "notional": 550.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1295,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-38",
              "timestamp": "2026-04-13T08:52:51.775000",
              "price": 0.22,
              "size": 500.0,
              "notional": 110.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1295,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-37",
              "timestamp": "2026-04-13T08:46:32.719800",
              "price": 0.225,
              "size": 2000.0,
              "notional": 450.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1294,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-36",
              "timestamp": "2026-04-13T08:35:53.512700",
              "price": 0.22,
              "size": 500.0,
              "notional": 110.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1293,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-35",
              "timestamp": "2026-04-13T08:35:53.512700",
              "price": 0.22,
              "size": 200000.0,
              "notional": 44000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1293,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-34",
              "timestamp": "2026-04-13T08:35:53.512700",
              "price": 0.22,
              "size": 18000.0,
              "notional": 3960.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1293,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-33",
              "timestamp": "2026-04-13T08:35:53.512700",
              "price": 0.22,
              "size": 50000.0,
              "notional": 11000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1293,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-32",
              "timestamp": "2026-04-13T08:35:53.512700",
              "price": 0.22,
              "size": 50000.0,
              "notional": 11000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1293,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-31",
              "timestamp": "2026-04-13T08:35:53.512700",
              "price": 0.22,
              "size": 2500.0,
              "notional": 550.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1293,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-30",
              "timestamp": "2026-04-13T08:35:53.512700",
              "price": 0.22,
              "size": 100000.0,
              "notional": 22000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1293,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-29",
              "timestamp": "2026-04-13T08:35:53.512700",
              "price": 0.22,
              "size": 40000.0,
              "notional": 8800.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1293,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-28",
              "timestamp": "2026-04-13T08:35:53.512700",
              "price": 0.22,
              "size": 39000.0,
              "notional": 8580.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1293,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-27",
              "timestamp": "2026-04-13T08:35:38.458900",
              "price": 0.225,
              "size": 9700.0,
              "notional": 2182.5,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1292,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-26",
              "timestamp": "2026-04-13T07:35:46.006300",
              "price": 0.225,
              "size": 12000.0,
              "notional": 2700.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1291,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-25",
              "timestamp": "2026-04-13T07:35:03.871800",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1290,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-24",
              "timestamp": "2026-04-13T07:35:03.871800",
              "price": 0.225,
              "size": 10000.0,
              "notional": 2250.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1290,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-23",
              "timestamp": "2026-04-13T07:35:03.871800",
              "price": 0.225,
              "size": 9000.0,
              "notional": 2025.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1290,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-22",
              "timestamp": "2026-04-13T07:35:03.841600",
              "price": 0.225,
              "size": 11000.0,
              "notional": 2475.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1290,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-21",
              "timestamp": "2026-04-13T07:35:03.841600",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1290,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-20",
              "timestamp": "2026-04-13T07:35:03.841600",
              "price": 0.225,
              "size": 19000.0,
              "notional": 4275.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1290,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-19",
              "timestamp": "2026-04-13T02:58:40.038200",
              "price": 0.23,
              "size": 4200.0,
              "notional": 966.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1289,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-18",
              "timestamp": "2026-04-13T02:57:50.256700",
              "price": 0.23,
              "size": 4200.0,
              "notional": 966.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1288,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-17",
              "timestamp": "2026-04-13T02:01:46.985000",
              "price": 0.225,
              "size": 1000.0,
              "notional": 225.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1287,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-16",
              "timestamp": "2026-04-13T01:44:04.917800",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1286,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-15",
              "timestamp": "2026-04-13T01:34:15.599400",
              "price": 0.225,
              "size": 10000.0,
              "notional": 2250.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1285,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-14",
              "timestamp": "2026-04-13T01:30:25.623700",
              "price": 0.225,
              "size": 3000.0,
              "notional": 675.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1284,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-13",
              "timestamp": "2026-04-13T01:30:25.321700",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1284,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-12",
              "timestamp": "2026-04-13T01:30:19.677400",
              "price": 0.225,
              "size": 17000.0,
              "notional": 3825.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1283,
              "d1": "SINGLE_FILL",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-11",
              "timestamp": "2026-04-13T01:28:25.216800",
              "price": 0.225,
              "size": 19000.0,
              "notional": 4275.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1282,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-10",
              "timestamp": "2026-04-13T01:28:25.216800",
              "price": 0.225,
              "size": 30000.0,
              "notional": 6750.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1282,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.3602693602693603,
              "mixed_pct": 0.05723905723905724,
              "instit_pct": 0.3686868686868687,
              "ambiguous_pct": 0.2138047138047138,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.2138047138047138,
              "retail_qty_pct": 0.07738209586014792,
              "mixed_qty_pct": 0.07768225914897704,
              "instit_qty_pct": 0.6200413024685428,
              "ambiguous_qty_pct": 0.22489434252233215,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.22489434252233215,
              "retail_notional_pct": 0.0777625695044771,
              "mixed_notional_pct": 0.07803258305851717,
              "instit_notional_pct": 0.618943371860959,
              "ambiguous_notional_pct": 0.2252614755760467,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.2252614755760467,
              "run_retail_pct": 0.6378205128205128,
              "run_mixed_pct": 0.060897435897435896,
              "run_instit_pct": 0.16666666666666666,
              "run_unclear_pct": 0.1346153846153846,
              "avg_trade_size": 3154.848484848485,
              "avg_run_notional": 6006.346153846154,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.15064102564102563,
              "medium_confidence_pct": 0.3141025641025641,
              "low_confidence_pct": 0.33974358974358976,
              "na_confidence_pct": 0.1955128205128205,
              "avg_feature_coverage": 0.8480769230769232,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "42F",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.20680628272251309,
              "mixed_pct": 0.10471204188481675,
              "instit_pct": 0.31413612565445026,
              "ambiguous_pct": 0.3743455497382199,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.3743455497382199,
              "retail_qty_pct": 0.03364123908958254,
              "mixed_qty_pct": 0.06175659740357641,
              "instit_qty_pct": 0.5518557805693609,
              "ambiguous_qty_pct": 0.3527463829374801,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.3527463829374801,
              "retail_notional_pct": 0.03403191875909717,
              "mixed_notional_pct": 0.06212066771896905,
              "instit_notional_pct": 0.5512799485775036,
              "ambiguous_notional_pct": 0.35256746494443014,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.35256746494443014,
              "run_retail_pct": 0.39896373056994816,
              "run_mixed_pct": 0.11398963730569948,
              "run_instit_pct": 0.11398963730569948,
              "run_unclear_pct": 0.37305699481865284,
              "avg_trade_size": 5171.4078534031405,
              "avg_run_notional": 10235.636269430051,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.015544041450777202,
              "medium_confidence_pct": 0.20725388601036268,
              "low_confidence_pct": 0.29015544041450775,
              "na_confidence_pct": 0.48704663212435234,
              "avg_feature_coverage": 0.8344559585492226,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "NXR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.125,
              "mixed_pct": 0.125,
              "instit_pct": 0.375,
              "ambiguous_pct": 0.375,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.375,
              "retail_qty_pct": 0.07361268403171008,
              "mixed_qty_pct": 0.0928652321630804,
              "instit_qty_pct": 0.4733861834654587,
              "ambiguous_qty_pct": 0.36013590033975085,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.36013590033975085,
              "retail_notional_pct": 0.07521359392584843,
              "mixed_notional_pct": 0.0948848415679934,
              "instit_notional_pct": 0.4653890658931317,
              "ambiguous_notional_pct": 0.3645124986130265,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.3645124986130265,
              "run_retail_pct": 0.16666666666666666,
              "run_mixed_pct": 0.16666666666666666,
              "run_instit_pct": 0.3333333333333333,
              "run_unclear_pct": 0.3333333333333333,
              "avg_trade_size": 3942.9375,
              "avg_run_notional": 5257.25,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed, leaning institution-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5,
              "na_confidence_pct": 0.5,
              "avg_feature_coverage": 0.8250000000000002,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.3127051101734646,
              "mixed_pct": 0.1828410689170183,
              "instit_pct": 0.27379278012189406,
              "ambiguous_pct": 0.22831692451945618,
              "unobservable_pct": 0.0023441162681669013,
              "unclear_pct": 0.2306610407876231,
              "retail_qty_pct": 0.052104565837749695,
              "mixed_qty_pct": 0.09282001630656339,
              "instit_qty_pct": 0.4448124745209947,
              "ambiguous_qty_pct": 0.4051671422747656,
              "unobservable_qty_pct": 0.005095801059926621,
              "unclear_qty_pct": 0.4102629433346922,
              "retail_notional_pct": 0.05197488724407976,
              "mixed_notional_pct": 0.09276719267140227,
              "instit_notional_pct": 0.44421750740227295,
              "ambiguous_notional_pct": 0.4059433016854309,
              "unobservable_notional_pct": 0.005097110996814148,
              "unclear_notional_pct": 0.41104041268224506,
              "run_retail_pct": 0.6182692307692308,
              "run_mixed_pct": 0.14615384615384616,
              "run_instit_pct": 0.09230769230769231,
              "run_unclear_pct": 0.14326923076923076,
              "avg_trade_size": 1854.9249882794186,
              "avg_run_notional": 3804.3798076923076,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.07884615384615384,
              "medium_confidence_pct": 0.46153846153846156,
              "low_confidence_pct": 0.1701923076923077,
              "na_confidence_pct": 0.28942307692307695,
              "avg_feature_coverage": 0.8646634615384613,
              "observable_run_pct": 0.9990384615384615,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "S71",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.19557195571955718,
              "mixed_pct": 0.06642066420664207,
              "instit_pct": 0.26199261992619927,
              "ambiguous_pct": 0.42066420664206644,
              "unobservable_pct": 0.055350553505535055,
              "unclear_pct": 0.47601476014760147,
              "retail_qty_pct": 0.06701239224137931,
              "mixed_qty_pct": 0.055765086206896554,
              "instit_qty_pct": 0.44073275862068967,
              "ambiguous_qty_pct": 0.3931169181034483,
              "unobservable_qty_pct": 0.04337284482758621,
              "unclear_qty_pct": 0.4364897629310345,
              "retail_notional_pct": 0.06808949585936365,
              "mixed_notional_pct": 0.05742263547871568,
              "instit_notional_pct": 0.43520630539009153,
              "ambiguous_notional_pct": 0.3945118407671074,
              "unobservable_notional_pct": 0.044769722504721776,
              "unclear_notional_pct": 0.43928156327182916,
              "run_retail_pct": 0.3128834355828221,
              "run_mixed_pct": 0.06134969325153374,
              "run_instit_pct": 0.18404907975460122,
              "run_unclear_pct": 0.44171779141104295,
              "avg_trade_size": 2539.8523985239854,
              "avg_run_notional": 4222.699386503067,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.024539877300613498,
              "medium_confidence_pct": 0.09815950920245399,
              "low_confidence_pct": 0.37423312883435583,
              "na_confidence_pct": 0.5030674846625767,
              "avg_feature_coverage": 0.8159509202453987,
              "observable_run_pct": 0.9877300613496932,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.17777777777777778,
              "mixed_pct": 0.07777777777777778,
              "instit_pct": 0.26666666666666666,
              "ambiguous_pct": 0.28888888888888886,
              "unobservable_pct": 0.18888888888888888,
              "unclear_pct": 0.47777777777777775,
              "retail_qty_pct": 0.11303996770286637,
              "mixed_qty_pct": 0.2529269277351635,
              "instit_qty_pct": 0.31429148163100523,
              "ambiguous_qty_pct": 0.24586192975373436,
              "unobservable_qty_pct": 0.07387969317723052,
              "unclear_qty_pct": 0.31974162293096486,
              "retail_notional_pct": 0.11294878976226126,
              "mixed_notional_pct": 0.2521961479215365,
              "instit_notional_pct": 0.31308370945676645,
              "ambiguous_notional_pct": 0.24662431462949597,
              "unobservable_notional_pct": 0.07514703822993979,
              "unclear_notional_pct": 0.32177135285943576,
              "run_retail_pct": 0.28846153846153844,
              "run_mixed_pct": 0.11538461538461539,
              "run_instit_pct": 0.19230769230769232,
              "run_unclear_pct": 0.40384615384615385,
              "avg_trade_size": 4125.9111111111115,
              "avg_run_notional": 7141.0,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.4807692307692308,
              "na_confidence_pct": 0.5192307692307693,
              "avg_feature_coverage": 0.7942307692307693,
              "observable_run_pct": 0.8846153846153846,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.18518518518518517,
              "mixed_pct": 0.09259259259259259,
              "instit_pct": 0.14814814814814814,
              "ambiguous_pct": 0.4074074074074074,
              "unobservable_pct": 0.16666666666666666,
              "unclear_pct": 0.5740740740740741,
              "retail_qty_pct": 0.06606942889137737,
              "mixed_qty_pct": 0.07129525942515864,
              "instit_qty_pct": 0.2127659574468085,
              "ambiguous_qty_pct": 0.49010824934677116,
              "unobservable_qty_pct": 0.1597611048898843,
              "unclear_qty_pct": 0.6498693542366555,
              "retail_notional_pct": 0.06584394016969677,
              "mixed_notional_pct": 0.07232234454380054,
              "instit_notional_pct": 0.2113218098723401,
              "ambiguous_notional_pct": 0.48933774421544046,
              "unobservable_notional_pct": 0.1611741611987221,
              "unclear_notional_pct": 0.6505119054141626,
              "run_retail_pct": 0.21875,
              "run_mixed_pct": 0.125,
              "run_instit_pct": 0.09375,
              "run_unclear_pct": 0.5625,
              "avg_trade_size": 980.1796296296296,
              "avg_run_notional": 1654.053125,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.3125,
              "na_confidence_pct": 0.6875,
              "avg_feature_coverage": 0.7890625,
              "observable_run_pct": 0.90625,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "532",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.11904761904761904,
              "mixed_pct": 0.07142857142857142,
              "instit_pct": 0.0,
              "ambiguous_pct": 0.19047619047619047,
              "unobservable_pct": 0.6190476190476191,
              "unclear_pct": 0.8095238095238095,
              "retail_qty_pct": 0.05151539402531183,
              "mixed_qty_pct": 0.10260778104242646,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": 0.14290777303959118,
              "unobservable_qty_pct": 0.7029690518926706,
              "unclear_qty_pct": 0.8458768249322617,
              "retail_notional_pct": 0.051526237567165886,
              "mixed_notional_pct": 0.10260660797987882,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": 0.1429061392477421,
              "unobservable_notional_pct": 0.7029610152052133,
              "unclear_notional_pct": 0.8458671544529553,
              "run_retail_pct": 0.2,
              "run_mixed_pct": 0.12,
              "run_instit_pct": 0.0,
              "run_unclear_pct": 0.6799999999999999,
              "avg_trade_size": 416.5238095238095,
              "avg_run_notional": 699.76,
              "dominant_bucket": "UNOBSERVABLE",
              "dominant_label": "Not Observable",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.2,
              "na_confidence_pct": 0.8,
              "avg_feature_coverage": 0.7060000000000001,
              "observable_run_pct": 0.52,
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
          "n_trades": 1037,
          "n_runs": 555,
          "n_trade_days": 21,
          "first_trade_date": "2026-03-13",
          "last_trade_date": "2026-04-13",
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
            "retail_pct": 0.32304725168756027,
            "mixed_pct": 0.0742526518804243,
            "instit_pct": 0.3982642237222758,
            "ambiguous_pct": 0.20443587270973965,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.20443587270973965,
            "retail_qty_pct": 0.07131550774040578,
            "mixed_qty_pct": 0.09013287094507169,
            "instit_qty_pct": 0.5961261847057201,
            "ambiguous_qty_pct": 0.24242543660880245,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.24242543660880245,
            "retail_notional_pct": 0.07135636904792439,
            "mixed_notional_pct": 0.0915445373677752,
            "instit_notional_pct": 0.5943875239171658,
            "ambiguous_notional_pct": 0.2427115696671346,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2427115696671346
          },
          "run_composition": {
            "retail_pct": 0.5711711711711712,
            "mixed_pct": 0.07927927927927927,
            "instit_pct": 0.1891891891891892,
            "ambiguous_pct": 0.16036036036036036,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.16036036036036036,
            "retail_notional_pct": 0.07135636904792439,
            "mixed_notional_pct": 0.0915445373677752,
            "instit_notional_pct": 0.5943875239171658,
            "unclear_notional_pct": 0.2427115696671346
          },
          "counts": {
            "trades": {
              "retail": 335,
              "mixed": 77,
              "institutional": 413,
              "ambiguous": 212,
              "unobservable": 0,
              "unclear": 212
            },
            "runs": {
              "retail": 317,
              "mixed": 44,
              "institutional": 105,
              "ambiguous": 89,
              "unobservable": 0,
              "unclear": 89
            }
          },
          "confidence": {
            "high": 0.08468468468468468,
            "medium": 0.218018018018018,
            "low": 0.45765765765765765,
            "na": 0.23963963963963963
          },
          "confidence_counts": {
            "high": 47,
            "medium": 121,
            "low": 254,
            "na": 133
          },
          "trade_confidence": {
            "high": 0.058823529411764705,
            "medium": 0.18514946962391515,
            "low": 0.4773384763741562,
            "na": 0.2786885245901639
          },
          "trade_confidence_counts": {
            "high": 61,
            "medium": 192,
            "low": 495,
            "na": 289
          },
          "observability": {
            "avg_feature_coverage": 0.8529729729729729,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.16036036036036036,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5711711711711712,
          "dominance_gap": 0.381981981981982,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 546,
              "SINGLE_FILL": 491
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 797,
              "PERSISTENT_POSITIVE_IMPACT": 182,
              "MOMENTUM_REACTIVE": 53,
              "UNOBSERVABLE": 3,
              "SHORT_HORIZON_POSITIVE_IMPACT": 2
            },
            "d3_urgency": {
              "IMMEDIATE": 555
            },
            "participant_confidence": {
              "LOW": 254,
              "NA": 133,
              "MEDIUM": 121,
              "HIGH": 47
            }
          },
          "trade_size": {
            "avg": 3383.785920925747,
            "median": 1440.0
          },
          "run_size": {
            "avg": 6322.497297297297,
            "median": 1334.0,
            "avg_length": 1.1693693693693694
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-39",
              "timestamp": "2026-04-13T08:52:51.775000",
              "price": 0.22,
              "size": 2500.0,
              "notional": 550.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1295,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-38",
              "timestamp": "2026-04-13T08:52:51.775000",
              "price": 0.22,
              "size": 500.0,
              "notional": 110.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1295,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-37",
              "timestamp": "2026-04-13T08:46:32.719800",
              "price": 0.225,
              "size": 2000.0,
              "notional": 450.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1294,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-36",
              "timestamp": "2026-04-13T08:35:53.512700",
              "price": 0.22,
              "size": 500.0,
              "notional": 110.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1293,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-35",
              "timestamp": "2026-04-13T08:35:53.512700",
              "price": 0.22,
              "size": 200000.0,
              "notional": 44000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1293,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-34",
              "timestamp": "2026-04-13T08:35:53.512700",
              "price": 0.22,
              "size": 18000.0,
              "notional": 3960.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1293,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-33",
              "timestamp": "2026-04-13T08:35:53.512700",
              "price": 0.22,
              "size": 50000.0,
              "notional": 11000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1293,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-32",
              "timestamp": "2026-04-13T08:35:53.512700",
              "price": 0.22,
              "size": 50000.0,
              "notional": 11000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1293,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-31",
              "timestamp": "2026-04-13T08:35:53.512700",
              "price": 0.22,
              "size": 2500.0,
              "notional": 550.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1293,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-30",
              "timestamp": "2026-04-13T08:35:53.512700",
              "price": 0.22,
              "size": 100000.0,
              "notional": 22000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1293,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-29",
              "timestamp": "2026-04-13T08:35:53.512700",
              "price": 0.22,
              "size": 40000.0,
              "notional": 8800.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1293,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-28",
              "timestamp": "2026-04-13T08:35:53.512700",
              "price": 0.22,
              "size": 39000.0,
              "notional": 8580.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1293,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-27",
              "timestamp": "2026-04-13T08:35:38.458900",
              "price": 0.225,
              "size": 9700.0,
              "notional": 2182.5,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1292,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-26",
              "timestamp": "2026-04-13T07:35:46.006300",
              "price": 0.225,
              "size": 12000.0,
              "notional": 2700.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1291,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-25",
              "timestamp": "2026-04-13T07:35:03.871800",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1290,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-24",
              "timestamp": "2026-04-13T07:35:03.871800",
              "price": 0.225,
              "size": 10000.0,
              "notional": 2250.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1290,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-23",
              "timestamp": "2026-04-13T07:35:03.871800",
              "price": 0.225,
              "size": 9000.0,
              "notional": 2025.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1290,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-22",
              "timestamp": "2026-04-13T07:35:03.841600",
              "price": 0.225,
              "size": 11000.0,
              "notional": 2475.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1290,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-21",
              "timestamp": "2026-04-13T07:35:03.841600",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1290,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-20",
              "timestamp": "2026-04-13T07:35:03.841600",
              "price": 0.225,
              "size": 19000.0,
              "notional": 4275.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1290,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-19",
              "timestamp": "2026-04-13T02:58:40.038200",
              "price": 0.23,
              "size": 4200.0,
              "notional": 966.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1289,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-18",
              "timestamp": "2026-04-13T02:57:50.256700",
              "price": 0.23,
              "size": 4200.0,
              "notional": 966.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1288,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-17",
              "timestamp": "2026-04-13T02:01:46.985000",
              "price": 0.225,
              "size": 1000.0,
              "notional": 225.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1287,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-16",
              "timestamp": "2026-04-13T01:44:04.917800",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1286,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-15",
              "timestamp": "2026-04-13T01:34:15.599400",
              "price": 0.225,
              "size": 10000.0,
              "notional": 2250.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1285,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-14",
              "timestamp": "2026-04-13T01:30:25.623700",
              "price": 0.225,
              "size": 3000.0,
              "notional": 675.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1284,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-13",
              "timestamp": "2026-04-13T01:30:25.321700",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1284,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-12",
              "timestamp": "2026-04-13T01:30:19.677400",
              "price": 0.225,
              "size": 17000.0,
              "notional": 3825.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1283,
              "d1": "SINGLE_FILL",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-11",
              "timestamp": "2026-04-13T01:28:25.216800",
              "price": 0.225,
              "size": 19000.0,
              "notional": 4275.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1282,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-10",
              "timestamp": "2026-04-13T01:28:25.216800",
              "price": 0.225,
              "size": 30000.0,
              "notional": 6750.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1282,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.32304725168756027,
              "mixed_pct": 0.0742526518804243,
              "instit_pct": 0.3982642237222758,
              "ambiguous_pct": 0.20443587270973965,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.20443587270973965,
              "retail_qty_pct": 0.07131550774040578,
              "mixed_qty_pct": 0.09013287094507169,
              "instit_qty_pct": 0.5961261847057201,
              "ambiguous_qty_pct": 0.24242543660880245,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.24242543660880245,
              "retail_notional_pct": 0.07135636904792439,
              "mixed_notional_pct": 0.0915445373677752,
              "instit_notional_pct": 0.5943875239171658,
              "ambiguous_notional_pct": 0.2427115696671346,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.2427115696671346,
              "run_retail_pct": 0.5711711711711712,
              "run_mixed_pct": 0.07927927927927927,
              "run_instit_pct": 0.1891891891891892,
              "run_unclear_pct": 0.16036036036036036,
              "avg_trade_size": 3383.785920925747,
              "avg_run_notional": 6322.497297297297,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.08468468468468468,
              "medium_confidence_pct": 0.218018018018018,
              "low_confidence_pct": 0.45765765765765765,
              "na_confidence_pct": 0.23963963963963963,
              "avg_feature_coverage": 0.8529729729729729,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "NXR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.125,
              "mixed_pct": 0.08333333333333333,
              "instit_pct": 0.3333333333333333,
              "ambiguous_pct": 0.4583333333333333,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.4583333333333333,
              "retail_qty_pct": 0.004115894936366098,
              "mixed_qty_pct": 0.007636068237205524,
              "instit_qty_pct": 0.9210398050365557,
              "ambiguous_qty_pct": 0.06720823178987273,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.06720823178987273,
              "retail_notional_pct": 0.00405813999591763,
              "mixed_notional_pct": 0.007340923408573271,
              "instit_notional_pct": 0.9220047079416779,
              "ambiguous_notional_pct": 0.06659622865383119,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.06659622865383119,
              "run_retail_pct": 0.14285714285714285,
              "run_mixed_pct": 0.09523809523809523,
              "run_instit_pct": 0.3333333333333333,
              "run_unclear_pct": 0.42857142857142855,
              "avg_trade_size": 28374.041666666668,
              "avg_run_notional": 32427.47619047619,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Mixed, mostly unclassified",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.47619047619047616,
              "na_confidence_pct": 0.5238095238095238,
              "avg_feature_coverage": 0.8285714285714286,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2901094752736882,
              "mixed_pct": 0.1591166477916195,
              "instit_pct": 0.3282370705926765,
              "ambiguous_pct": 0.2202718006795017,
              "unobservable_pct": 0.0022650056625141564,
              "unclear_pct": 0.22253680634201586,
              "retail_qty_pct": 0.058653881820542306,
              "mixed_qty_pct": 0.1043065395600727,
              "instit_qty_pct": 0.5052487110056011,
              "ambiguous_qty_pct": 0.32912941874698615,
              "unobservable_qty_pct": 0.00266144886679773,
              "unclear_qty_pct": 0.3317908676137839,
              "retail_notional_pct": 0.058777055623537286,
              "mixed_notional_pct": 0.10448357019058399,
              "instit_notional_pct": 0.504924372641377,
              "ambiguous_notional_pct": 0.3291497953787553,
              "unobservable_notional_pct": 0.0026652061657464203,
              "unclear_notional_pct": 0.3318150015445018,
              "run_retail_pct": 0.5959266802443992,
              "run_mixed_pct": 0.13767820773930753,
              "run_instit_pct": 0.11323828920570264,
              "run_unclear_pct": 0.15315682281059065,
              "avg_trade_size": 2056.760664401661,
              "avg_run_notional": 4438.581670061099,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.12342158859470469,
              "medium_confidence_pct": 0.43421588594704685,
              "low_confidence_pct": 0.1515274949083503,
              "na_confidence_pct": 0.2908350305498982,
              "avg_feature_coverage": 0.8608757637474541,
              "observable_run_pct": 0.9991853360488798,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "42F",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.23183391003460208,
              "mixed_pct": 0.14763552479815456,
              "instit_pct": 0.3044982698961938,
              "ambiguous_pct": 0.3160322952710496,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.3160322952710496,
              "retail_qty_pct": 0.04749026370789981,
              "mixed_qty_pct": 0.13507768095417566,
              "instit_qty_pct": 0.4915436067870426,
              "ambiguous_qty_pct": 0.3258884485508819,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.3258884485508819,
              "retail_notional_pct": 0.04768916748324691,
              "mixed_notional_pct": 0.1331044294043259,
              "instit_notional_pct": 0.49484980685323143,
              "ambiguous_notional_pct": 0.32435659625919583,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.32435659625919583,
              "run_retail_pct": 0.4088983050847458,
              "run_mixed_pct": 0.1504237288135593,
              "run_instit_pct": 0.125,
              "run_unclear_pct": 0.3156779661016949,
              "avg_trade_size": 3970.2433679354094,
              "avg_run_notional": 7292.79872881356,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.006355932203389831,
              "medium_confidence_pct": 0.211864406779661,
              "low_confidence_pct": 0.3156779661016949,
              "na_confidence_pct": 0.4661016949152542,
              "avg_feature_coverage": 0.8404661016949151,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "S71",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.22675521821631878,
              "mixed_pct": 0.09297912713472485,
              "instit_pct": 0.2874762808349146,
              "ambiguous_pct": 0.37855787476280833,
              "unobservable_pct": 0.014231499051233396,
              "unclear_pct": 0.3927893738140417,
              "retail_qty_pct": 0.05498853311391607,
              "mixed_qty_pct": 0.03716671626897288,
              "instit_qty_pct": 0.4781603963516045,
              "ambiguous_qty_pct": 0.41841004184100417,
              "unobservable_qty_pct": 0.011274312424502372,
              "unclear_qty_pct": 0.42968435426550655,
              "retail_notional_pct": 0.05508091473710559,
              "mixed_notional_pct": 0.03824436242234387,
              "instit_notional_pct": 0.4801285695031263,
              "ambiguous_notional_pct": 0.41364776409781595,
              "unobservable_notional_pct": 0.012898389239608248,
              "unclear_notional_pct": 0.4265461533374242,
              "run_retail_pct": 0.3859060402684564,
              "run_mixed_pct": 0.0738255033557047,
              "run_instit_pct": 0.18288590604026847,
              "run_unclear_pct": 0.3573825503355705,
              "avg_trade_size": 2266.6584440227703,
              "avg_run_notional": 4008.486577181208,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.010067114093959731,
              "medium_confidence_pct": 0.24496644295302014,
              "low_confidence_pct": 0.313758389261745,
              "na_confidence_pct": 0.4312080536912752,
              "avg_feature_coverage": 0.8371644295302012,
              "observable_run_pct": 0.9966442953020134,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.1694915254237288,
              "mixed_pct": 0.1016949152542373,
              "instit_pct": 0.2542372881355932,
              "ambiguous_pct": 0.3983050847457627,
              "unobservable_pct": 0.07627118644067797,
              "unclear_pct": 0.4745762711864407,
              "retail_qty_pct": 0.0640495867768595,
              "mixed_qty_pct": 0.10221195916383082,
              "instit_qty_pct": 0.3565872630043753,
              "ambiguous_qty_pct": 0.42513368983957217,
              "unobservable_qty_pct": 0.05201750121536218,
              "unclear_qty_pct": 0.47715119105493436,
              "retail_notional_pct": 0.06380244679227198,
              "mixed_notional_pct": 0.1040406675679308,
              "instit_notional_pct": 0.35612582912348106,
              "ambiguous_notional_pct": 0.4241512031754662,
              "unobservable_notional_pct": 0.051879853340849956,
              "unclear_notional_pct": 0.4760310565163161,
              "run_retail_pct": 0.2318840579710145,
              "run_mixed_pct": 0.13043478260869565,
              "run_instit_pct": 0.14492753623188406,
              "run_unclear_pct": 0.49275362318840576,
              "avg_trade_size": 1393.5228813559322,
              "avg_run_notional": 2383.1260869565217,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.37681159420289856,
              "na_confidence_pct": 0.6231884057971014,
              "avg_feature_coverage": 0.8000000000000003,
              "observable_run_pct": 0.9565217391304348,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.18811881188118812,
              "mixed_pct": 0.07920792079207921,
              "instit_pct": 0.28217821782178215,
              "ambiguous_pct": 0.36633663366336633,
              "unobservable_pct": 0.08415841584158416,
              "unclear_pct": 0.4504950495049505,
              "retail_qty_pct": 0.10531374433612523,
              "mixed_qty_pct": 0.20650830701633943,
              "instit_qty_pct": 0.33296718385280794,
              "ambiguous_qty_pct": 0.30495674859261296,
              "unobservable_qty_pct": 0.05025401620211451,
              "unclear_qty_pct": 0.35521076479472746,
              "retail_notional_pct": 0.10508330707313208,
              "mixed_notional_pct": 0.20478129957941177,
              "instit_notional_pct": 0.3319158896379371,
              "ambiguous_notional_pct": 0.3073909867703231,
              "unobservable_notional_pct": 0.05082851693919595,
              "unclear_notional_pct": 0.35821950370951905,
              "run_retail_pct": 0.2781954887218045,
              "run_mixed_pct": 0.08270676691729323,
              "run_instit_pct": 0.20300751879699247,
              "run_unclear_pct": 0.43609022556390975,
              "avg_trade_size": 2717.7871287128714,
              "avg_run_notional": 4127.766917293233,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.48120300751879697,
              "na_confidence_pct": 0.518796992481203,
              "avg_feature_coverage": 0.8157894736842105,
              "observable_run_pct": 0.9548872180451128,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "532",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.10638297872340426,
              "mixed_pct": 0.06382978723404255,
              "instit_pct": 0.02127659574468085,
              "ambiguous_pct": 0.1702127659574468,
              "unobservable_pct": 0.6382978723404256,
              "unclear_pct": 0.8085106382978724,
              "retail_qty_pct": 0.0484675081612787,
              "mixed_qty_pct": 0.0965370363398749,
              "instit_qty_pct": 0.05378107874087738,
              "ambiguous_qty_pct": 0.13445269685219347,
              "unobservable_qty_pct": 0.6667616799057755,
              "unclear_qty_pct": 0.8012143767579689,
              "retail_notional_pct": 0.04847774293996482,
              "mixed_notional_pct": 0.09653599797785317,
              "instit_notional_pct": 0.05378050026621347,
              "ambiguous_notional_pct": 0.13445125066553368,
              "unobservable_notional_pct": 0.6667545081504348,
              "unclear_notional_pct": 0.8012057588159684,
              "run_retail_pct": 0.17857142857142858,
              "run_mixed_pct": 0.10714285714285714,
              "run_instit_pct": 0.03571428571428571,
              "run_unclear_pct": 0.6785714285714286,
              "avg_trade_size": 395.6191489361702,
              "avg_run_notional": 664.0749999999999,
              "dominant_bucket": "UNOBSERVABLE",
              "dominant_label": "Not Observable",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.21428571428571427,
              "na_confidence_pct": 0.7857142857142857,
              "avg_feature_coverage": 0.6946428571428573,
              "observable_run_pct": 0.5,
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
      "n_trades": 1037,
      "n_runs": 555,
      "n_trade_days": 21,
      "first_trade_date": "2026-03-13",
      "last_trade_date": "2026-04-13",
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
        "retail_pct": 0.32304725168756027,
        "mixed_pct": 0.0742526518804243,
        "instit_pct": 0.3982642237222758,
        "ambiguous_pct": 0.20443587270973965,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.20443587270973965,
        "retail_qty_pct": 0.07131550774040578,
        "mixed_qty_pct": 0.09013287094507169,
        "instit_qty_pct": 0.5961261847057201,
        "ambiguous_qty_pct": 0.24242543660880245,
        "unobservable_qty_pct": 0.0,
        "unclear_qty_pct": 0.24242543660880245,
        "retail_notional_pct": 0.07135636904792439,
        "mixed_notional_pct": 0.0915445373677752,
        "instit_notional_pct": 0.5943875239171658,
        "ambiguous_notional_pct": 0.2427115696671346,
        "unobservable_notional_pct": 0.0,
        "unclear_notional_pct": 0.2427115696671346
      },
      "run_composition": {
        "retail_pct": 0.5711711711711712,
        "mixed_pct": 0.07927927927927927,
        "instit_pct": 0.1891891891891892,
        "ambiguous_pct": 0.16036036036036036,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.16036036036036036
      },
      "trade_size": {
        "avg": 3383.785920925747,
        "median": 1440.0
      },
      "run_size": {
        "avg": 6322.497297297297,
        "median": 1334.0,
        "avg_length": 1.1693693693693694
      },
      "confidence": {
        "high": 0.08468468468468468,
        "medium": 0.218018018018018,
        "low": 0.45765765765765765,
        "na": 0.23963963963963963
      },
      "confidence_counts": {
        "high": 47,
        "medium": 121,
        "low": 254,
        "na": 133
      },
      "trade_confidence": {
        "high": 0.058823529411764705,
        "medium": 0.18514946962391515,
        "low": 0.4773384763741562,
        "na": 0.2786885245901639
      },
      "trade_confidence_counts": {
        "high": 61,
        "medium": 192,
        "low": 495,
        "na": 289
      },
      "counts": {
        "trades": {
          "retail": 335,
          "mixed": 77,
          "institutional": 413,
          "ambiguous": 212,
          "unobservable": 0,
          "unclear": 212
        },
        "runs": {
          "retail": 317,
          "mixed": 44,
          "institutional": 105,
          "ambiguous": 89,
          "unobservable": 0,
          "unclear": 89
        }
      },
      "observability": {
        "avg_feature_coverage": 0.8529729729729729,
        "observable_run_pct": 1.0,
        "ambiguous_run_pct": 0.16036036036036036,
        "unobservable_run_pct": 0.0
      },
      "dominant_bucket": "RETAIL",
      "dominant_label": "Retail-led",
      "dominant_share": 0.5711711711711712,
      "dominance_gap": 0.381981981981982,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2026-02",
            "n_trades": 541,
            "n_runs": 281,
            "retail_pct": 0.3049907578558225,
            "mixed_pct": 0.15157116451016636,
            "instit_pct": 0.3512014787430684,
            "ambiguous_pct": 0.1922365988909427,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1922365988909427,
            "avg_trade_size": 4627.718114602588,
            "avg_run_notional": 8909.592526690392,
            "retail_qty_pct": 0.07347701004391057,
            "mixed_qty_pct": 0.1717458234492505,
            "instit_qty_pct": 0.4880129208095695,
            "ambiguous_qty_pct": 0.2667642456972695,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2667642456972695,
            "retail_notional_pct": 0.07350029188021787,
            "mixed_notional_pct": 0.17243899823274167,
            "instit_notional_pct": 0.4888760983952879,
            "ambiguous_notional_pct": 0.26518461149175254,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.26518461149175254,
            "run_retail_pct": 0.5587188612099644,
            "run_mixed_pct": 0.11743772241992882,
            "run_instit_pct": 0.1601423487544484,
            "run_ambiguous_pct": 0.16370106761565836,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.16370106761565836,
            "avg_feature_coverage": 0.8516014234875444,
            "high_confidence_pct": 0.10320284697508897,
            "medium_confidence_pct": 0.3736654804270463,
            "low_confidence_pct": 0.24199288256227758,
            "na_confidence_pct": 0.28113879003558717,
            "total_quantity": null
          },
          {
            "month": "2026-03",
            "n_trades": 1431,
            "n_runs": 745,
            "retail_pct": 0.27113906359189377,
            "mixed_pct": 0.14255765199161424,
            "instit_pct": 0.3941299790356394,
            "ambiguous_pct": 0.19217330538085256,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.19217330538085256,
            "avg_trade_size": 3185.088749126485,
            "avg_run_notional": 6117.935570469798,
            "retail_qty_pct": 0.06899682251475261,
            "mixed_qty_pct": 0.16353083384761333,
            "instit_qty_pct": 0.5271616335232344,
            "ambiguous_qty_pct": 0.24031071011439967,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.24031071011439967,
            "retail_notional_pct": 0.06849428525918512,
            "mixed_notional_pct": 0.16450322541577608,
            "instit_notional_pct": 0.5287911305783282,
            "ambiguous_notional_pct": 0.23821135874671062,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.23821135874671062,
            "run_retail_pct": 0.4966442953020134,
            "run_mixed_pct": 0.13691275167785236,
            "run_instit_pct": 0.19731543624161074,
            "run_ambiguous_pct": 0.1691275167785235,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.1691275167785235,
            "avg_feature_coverage": 0.8594630872483221,
            "high_confidence_pct": 0.036241610738255034,
            "medium_confidence_pct": 0.23221476510067113,
            "low_confidence_pct": 0.425503355704698,
            "na_confidence_pct": 0.30604026845637583,
            "total_quantity": null
          },
          {
            "month": "2026-04",
            "n_trades": 520,
            "n_runs": 270,
            "retail_pct": 0.37115384615384617,
            "mixed_pct": 0.046153846153846156,
            "instit_pct": 0.3596153846153846,
            "ambiguous_pct": 0.2230769230769231,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.2230769230769231,
            "avg_trade_size": 3152.5201923076925,
            "avg_run_notional": 6071.52037037037,
            "retail_qty_pct": 0.06900762939788133,
            "mixed_qty_pct": 0.058414292771282725,
            "instit_qty_pct": 0.6469756847247379,
            "ambiguous_qty_pct": 0.22560239310609803,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.22560239310609803,
            "retail_notional_pct": 0.06950666148969338,
            "mixed_notional_pct": 0.05870699907064586,
            "instit_notional_pct": 0.6458782518625971,
            "ambiguous_notional_pct": 0.22590808757706365,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.22590808757706365,
            "run_retail_pct": 0.6703703703703704,
            "run_mixed_pct": 0.04814814814814815,
            "run_instit_pct": 0.15555555555555556,
            "run_ambiguous_pct": 0.1259259259259259,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.1259259259259259,
            "avg_feature_coverage": 0.8449999999999999,
            "high_confidence_pct": 0.17407407407407408,
            "medium_confidence_pct": 0.362962962962963,
            "low_confidence_pct": 0.28888888888888886,
            "na_confidence_pct": 0.17407407407407408,
            "total_quantity": null
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "TKU",
          "currency": "SGD",
          "is_target": true,
          "retail_pct": 0.32304725168756027,
          "mixed_pct": 0.0742526518804243,
          "instit_pct": 0.3982642237222758,
          "ambiguous_pct": 0.20443587270973965,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.20443587270973965,
          "retail_qty_pct": 0.07131550774040578,
          "mixed_qty_pct": 0.09013287094507169,
          "instit_qty_pct": 0.5961261847057201,
          "ambiguous_qty_pct": 0.24242543660880245,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.24242543660880245,
          "retail_notional_pct": 0.07135636904792439,
          "mixed_notional_pct": 0.0915445373677752,
          "instit_notional_pct": 0.5943875239171658,
          "ambiguous_notional_pct": 0.2427115696671346,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.2427115696671346,
          "run_retail_pct": 0.5711711711711712,
          "run_mixed_pct": 0.07927927927927927,
          "run_instit_pct": 0.1891891891891892,
          "run_unclear_pct": 0.16036036036036036,
          "avg_trade_size": 3383.785920925747,
          "avg_run_notional": 6322.497297297297,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.08468468468468468,
          "medium_confidence_pct": 0.218018018018018,
          "low_confidence_pct": 0.45765765765765765,
          "na_confidence_pct": 0.23963963963963963,
          "avg_feature_coverage": 0.8529729729729729,
          "observable_run_pct": 1.0,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "NXR",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.125,
          "mixed_pct": 0.08333333333333333,
          "instit_pct": 0.3333333333333333,
          "ambiguous_pct": 0.4583333333333333,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.4583333333333333,
          "retail_qty_pct": 0.004115894936366098,
          "mixed_qty_pct": 0.007636068237205524,
          "instit_qty_pct": 0.9210398050365557,
          "ambiguous_qty_pct": 0.06720823178987273,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.06720823178987273,
          "retail_notional_pct": 0.00405813999591763,
          "mixed_notional_pct": 0.007340923408573271,
          "instit_notional_pct": 0.9220047079416779,
          "ambiguous_notional_pct": 0.06659622865383119,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.06659622865383119,
          "run_retail_pct": 0.14285714285714285,
          "run_mixed_pct": 0.09523809523809523,
          "run_instit_pct": 0.3333333333333333,
          "run_unclear_pct": 0.42857142857142855,
          "avg_trade_size": 28374.041666666668,
          "avg_run_notional": 32427.47619047619,
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Mixed, mostly unclassified",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.47619047619047616,
          "na_confidence_pct": 0.5238095238095238,
          "avg_feature_coverage": 0.8285714285714286,
          "observable_run_pct": 1.0,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "ITS",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.2901094752736882,
          "mixed_pct": 0.1591166477916195,
          "instit_pct": 0.3282370705926765,
          "ambiguous_pct": 0.2202718006795017,
          "unobservable_pct": 0.0022650056625141564,
          "unclear_pct": 0.22253680634201586,
          "retail_qty_pct": 0.058653881820542306,
          "mixed_qty_pct": 0.1043065395600727,
          "instit_qty_pct": 0.5052487110056011,
          "ambiguous_qty_pct": 0.32912941874698615,
          "unobservable_qty_pct": 0.00266144886679773,
          "unclear_qty_pct": 0.3317908676137839,
          "retail_notional_pct": 0.058777055623537286,
          "mixed_notional_pct": 0.10448357019058399,
          "instit_notional_pct": 0.504924372641377,
          "ambiguous_notional_pct": 0.3291497953787553,
          "unobservable_notional_pct": 0.0026652061657464203,
          "unclear_notional_pct": 0.3318150015445018,
          "run_retail_pct": 0.5959266802443992,
          "run_mixed_pct": 0.13767820773930753,
          "run_instit_pct": 0.11323828920570264,
          "run_unclear_pct": 0.15315682281059065,
          "avg_trade_size": 2056.760664401661,
          "avg_run_notional": 4438.581670061099,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.12342158859470469,
          "medium_confidence_pct": 0.43421588594704685,
          "low_confidence_pct": 0.1515274949083503,
          "na_confidence_pct": 0.2908350305498982,
          "avg_feature_coverage": 0.8608757637474541,
          "observable_run_pct": 0.9991853360488798,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "42F",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.23183391003460208,
          "mixed_pct": 0.14763552479815456,
          "instit_pct": 0.3044982698961938,
          "ambiguous_pct": 0.3160322952710496,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.3160322952710496,
          "retail_qty_pct": 0.04749026370789981,
          "mixed_qty_pct": 0.13507768095417566,
          "instit_qty_pct": 0.4915436067870426,
          "ambiguous_qty_pct": 0.3258884485508819,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.3258884485508819,
          "retail_notional_pct": 0.04768916748324691,
          "mixed_notional_pct": 0.1331044294043259,
          "instit_notional_pct": 0.49484980685323143,
          "ambiguous_notional_pct": 0.32435659625919583,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.32435659625919583,
          "run_retail_pct": 0.4088983050847458,
          "run_mixed_pct": 0.1504237288135593,
          "run_instit_pct": 0.125,
          "run_unclear_pct": 0.3156779661016949,
          "avg_trade_size": 3970.2433679354094,
          "avg_run_notional": 7292.79872881356,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Mixed, leaning retail-like",
          "high_confidence_pct": 0.006355932203389831,
          "medium_confidence_pct": 0.211864406779661,
          "low_confidence_pct": 0.3156779661016949,
          "na_confidence_pct": 0.4661016949152542,
          "avg_feature_coverage": 0.8404661016949151,
          "observable_run_pct": 1.0,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "S71",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.22675521821631878,
          "mixed_pct": 0.09297912713472485,
          "instit_pct": 0.2874762808349146,
          "ambiguous_pct": 0.37855787476280833,
          "unobservable_pct": 0.014231499051233396,
          "unclear_pct": 0.3927893738140417,
          "retail_qty_pct": 0.05498853311391607,
          "mixed_qty_pct": 0.03716671626897288,
          "instit_qty_pct": 0.4781603963516045,
          "ambiguous_qty_pct": 0.41841004184100417,
          "unobservable_qty_pct": 0.011274312424502372,
          "unclear_qty_pct": 0.42968435426550655,
          "retail_notional_pct": 0.05508091473710559,
          "mixed_notional_pct": 0.03824436242234387,
          "instit_notional_pct": 0.4801285695031263,
          "ambiguous_notional_pct": 0.41364776409781595,
          "unobservable_notional_pct": 0.012898389239608248,
          "unclear_notional_pct": 0.4265461533374242,
          "run_retail_pct": 0.3859060402684564,
          "run_mixed_pct": 0.0738255033557047,
          "run_instit_pct": 0.18288590604026847,
          "run_unclear_pct": 0.3573825503355705,
          "avg_trade_size": 2266.6584440227703,
          "avg_run_notional": 4008.486577181208,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Mixed, leaning retail-like",
          "high_confidence_pct": 0.010067114093959731,
          "medium_confidence_pct": 0.24496644295302014,
          "low_confidence_pct": 0.313758389261745,
          "na_confidence_pct": 0.4312080536912752,
          "avg_feature_coverage": 0.8371644295302012,
          "observable_run_pct": 0.9966442953020134,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "U77",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.1694915254237288,
          "mixed_pct": 0.1016949152542373,
          "instit_pct": 0.2542372881355932,
          "ambiguous_pct": 0.3983050847457627,
          "unobservable_pct": 0.07627118644067797,
          "unclear_pct": 0.4745762711864407,
          "retail_qty_pct": 0.0640495867768595,
          "mixed_qty_pct": 0.10221195916383082,
          "instit_qty_pct": 0.3565872630043753,
          "ambiguous_qty_pct": 0.42513368983957217,
          "unobservable_qty_pct": 0.05201750121536218,
          "unclear_qty_pct": 0.47715119105493436,
          "retail_notional_pct": 0.06380244679227198,
          "mixed_notional_pct": 0.1040406675679308,
          "instit_notional_pct": 0.35612582912348106,
          "ambiguous_notional_pct": 0.4241512031754662,
          "unobservable_notional_pct": 0.051879853340849956,
          "unclear_notional_pct": 0.4760310565163161,
          "run_retail_pct": 0.2318840579710145,
          "run_mixed_pct": 0.13043478260869565,
          "run_instit_pct": 0.14492753623188406,
          "run_unclear_pct": 0.49275362318840576,
          "avg_trade_size": 1393.5228813559322,
          "avg_run_notional": 2383.1260869565217,
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Unclassified Flow",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.37681159420289856,
          "na_confidence_pct": 0.6231884057971014,
          "avg_feature_coverage": 0.8000000000000003,
          "observable_run_pct": 0.9565217391304348,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "LVR",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.18811881188118812,
          "mixed_pct": 0.07920792079207921,
          "instit_pct": 0.28217821782178215,
          "ambiguous_pct": 0.36633663366336633,
          "unobservable_pct": 0.08415841584158416,
          "unclear_pct": 0.4504950495049505,
          "retail_qty_pct": 0.10531374433612523,
          "mixed_qty_pct": 0.20650830701633943,
          "instit_qty_pct": 0.33296718385280794,
          "ambiguous_qty_pct": 0.30495674859261296,
          "unobservable_qty_pct": 0.05025401620211451,
          "unclear_qty_pct": 0.35521076479472746,
          "retail_notional_pct": 0.10508330707313208,
          "mixed_notional_pct": 0.20478129957941177,
          "instit_notional_pct": 0.3319158896379371,
          "ambiguous_notional_pct": 0.3073909867703231,
          "unobservable_notional_pct": 0.05082851693919595,
          "unclear_notional_pct": 0.35821950370951905,
          "run_retail_pct": 0.2781954887218045,
          "run_mixed_pct": 0.08270676691729323,
          "run_instit_pct": 0.20300751879699247,
          "run_unclear_pct": 0.43609022556390975,
          "avg_trade_size": 2717.7871287128714,
          "avg_run_notional": 4127.766917293233,
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Unclassified Flow",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.48120300751879697,
          "na_confidence_pct": 0.518796992481203,
          "avg_feature_coverage": 0.8157894736842105,
          "observable_run_pct": 0.9548872180451128,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "532",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.10638297872340426,
          "mixed_pct": 0.06382978723404255,
          "instit_pct": 0.02127659574468085,
          "ambiguous_pct": 0.1702127659574468,
          "unobservable_pct": 0.6382978723404256,
          "unclear_pct": 0.8085106382978724,
          "retail_qty_pct": 0.0484675081612787,
          "mixed_qty_pct": 0.0965370363398749,
          "instit_qty_pct": 0.05378107874087738,
          "ambiguous_qty_pct": 0.13445269685219347,
          "unobservable_qty_pct": 0.6667616799057755,
          "unclear_qty_pct": 0.8012143767579689,
          "retail_notional_pct": 0.04847774293996482,
          "mixed_notional_pct": 0.09653599797785317,
          "instit_notional_pct": 0.05378050026621347,
          "ambiguous_notional_pct": 0.13445125066553368,
          "unobservable_notional_pct": 0.6667545081504348,
          "unclear_notional_pct": 0.8012057588159684,
          "run_retail_pct": 0.17857142857142858,
          "run_mixed_pct": 0.10714285714285714,
          "run_instit_pct": 0.03571428571428571,
          "run_unclear_pct": 0.6785714285714286,
          "avg_trade_size": 395.6191489361702,
          "avg_run_notional": 664.0749999999999,
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.21428571428571427,
          "na_confidence_pct": 0.7857142857142857,
          "avg_feature_coverage": 0.6946428571428573,
          "observable_run_pct": 0.5,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        }
      ],
      "peer_comparison_periods": {
        "1d": [
          {
            "ticker": "TKU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.2894736842105263,
            "mixed_pct": 0.07894736842105263,
            "instit_pct": 0.5,
            "ambiguous_pct": 0.13157894736842105,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.13157894736842105,
            "retail_qty_pct": 0.06211822197161921,
            "mixed_qty_pct": 0.06578329104407481,
            "instit_qty_pct": 0.6211822197161921,
            "ambiguous_qty_pct": 0.2509162672681139,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2509162672681139,
            "retail_notional_pct": 0.06288048719241864,
            "mixed_notional_pct": 0.06646985961143619,
            "instit_notional_pct": 0.6171146172496671,
            "ambiguous_notional_pct": 0.253535035946478,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.253535035946478,
            "run_retail_pct": 0.5882352941176471,
            "run_mixed_pct": 0.11764705882352941,
            "run_instit_pct": 0.23529411764705882,
            "run_unclear_pct": 0.058823529411764705,
            "avg_trade_size": 6235.513157894737,
            "avg_run_notional": 13938.20588235294,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.8235294117647058,
            "na_confidence_pct": 0.17647058823529413,
            "avg_feature_coverage": 0.8411764705882353,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "S71",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.25,
            "mixed_pct": 0.25,
            "instit_pct": 0.25,
            "ambiguous_pct": 0.25,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.25,
            "retail_qty_pct": 0.1705348133198789,
            "mixed_qty_pct": 0.2119071644803229,
            "instit_qty_pct": 0.2341069626639758,
            "ambiguous_qty_pct": 0.3834510595358224,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3834510595358224,
            "retail_notional_pct": 0.17070217917675545,
            "mixed_notional_pct": 0.211864406779661,
            "instit_notional_pct": 0.23405972558514931,
            "ambiguous_notional_pct": 0.3833736884584342,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.3833736884584342,
            "run_retail_pct": 0.3125,
            "run_mixed_pct": 0.1875,
            "run_instit_pct": 0.1875,
            "run_unclear_pct": 0.3125,
            "avg_trade_size": 2354.1,
            "avg_run_notional": 2942.625,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5,
            "na_confidence_pct": 0.5,
            "avg_feature_coverage": 0.8406250000000001,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.275,
            "mixed_pct": 0.05,
            "instit_pct": 0.13333333333333333,
            "ambiguous_pct": 0.5,
            "unobservable_pct": 0.041666666666666664,
            "unclear_pct": 0.5416666666666666,
            "retail_qty_pct": 0.015397419891801914,
            "mixed_qty_pct": 0.046192259675405745,
            "instit_qty_pct": 0.22929671244277985,
            "ambiguous_qty_pct": 0.6674989596337911,
            "unobservable_qty_pct": 0.04161464835622139,
            "unclear_qty_pct": 0.7091136079900126,
            "retail_notional_pct": 0.01537496995851663,
            "mixed_notional_pct": 0.04678738989143269,
            "instit_notional_pct": 0.22858486327206612,
            "ambiguous_notional_pct": 0.6671069267823743,
            "unobservable_notional_pct": 0.04214585009561029,
            "unclear_notional_pct": 0.7092527768779846,
            "run_retail_pct": 0.49230769230769234,
            "run_mixed_pct": 0.06153846153846154,
            "run_instit_pct": 0.09230769230769231,
            "run_unclear_pct": 0.35384615384615387,
            "avg_trade_size": 3987.5416666666665,
            "avg_run_notional": 7361.615384615385,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.4153846153846154,
            "low_confidence_pct": 0.16923076923076924,
            "na_confidence_pct": 0.4153846153846154,
            "avg_feature_coverage": 0.8415384615384615,
            "observable_run_pct": 0.9846153846153847,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "42F",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.6666666666666666,
            "mixed_pct": 0.3333333333333333,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0,
            "retail_qty_pct": 0.001996007984031936,
            "mixed_qty_pct": 0.998003992015968,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0,
            "retail_notional_pct": 0.002034314666257245,
            "mixed_notional_pct": 0.9979656853337426,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0,
            "run_retail_pct": 0.6666666666666666,
            "run_mixed_pct": 0.3333333333333333,
            "run_instit_pct": 0.0,
            "run_unclear_pct": 0.0,
            "avg_trade_size": 868.4333333333334,
            "avg_run_notional": 868.4333333333334,
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
          },
          {
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.21428571428571427,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.2857142857142857,
            "unobservable_pct": 0.5,
            "unclear_pct": 0.7857142857142857,
            "retail_qty_pct": 0.11363636363636363,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 0.3181818181818182,
            "unobservable_qty_pct": 0.5681818181818182,
            "unclear_qty_pct": 0.8863636363636365,
            "retail_notional_pct": 0.11308089817386027,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 0.31792853596189563,
            "unobservable_notional_pct": 0.5689905658642441,
            "unclear_notional_pct": 0.8869191018261398,
            "run_retail_pct": 0.2857142857142857,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.0,
            "run_unclear_pct": 0.7142857142857142,
            "avg_trade_size": 1942.0357142857142,
            "avg_run_notional": 3884.0714285714284,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.2857142857142857,
            "na_confidence_pct": 0.7142857142857143,
            "avg_feature_coverage": 0.7357142857142858,
            "observable_run_pct": 0.7142857142857143,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ],
        "1w": [
          {
            "ticker": "TKU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.3866279069767442,
            "mixed_pct": 0.06976744186046512,
            "instit_pct": 0.29941860465116277,
            "ambiguous_pct": 0.2441860465116279,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.2441860465116279,
            "retail_qty_pct": 0.07260433855193786,
            "mixed_qty_pct": 0.0856642653036584,
            "instit_qty_pct": 0.6107980842757676,
            "ambiguous_qty_pct": 0.23093331186863605,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.23093331186863605,
            "retail_notional_pct": 0.07292823617928415,
            "mixed_notional_pct": 0.08620167675826736,
            "instit_notional_pct": 0.6095898570456093,
            "ambiguous_notional_pct": 0.23128023001683923,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.23128023001683923,
            "run_retail_pct": 0.6885245901639344,
            "run_mixed_pct": 0.07103825136612021,
            "run_instit_pct": 0.14207650273224043,
            "run_unclear_pct": 0.09836065573770492,
            "avg_trade_size": 3245.4651162790697,
            "avg_run_notional": 6100.765027322404,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.1366120218579235,
            "medium_confidence_pct": 0.3989071038251366,
            "low_confidence_pct": 0.29508196721311475,
            "na_confidence_pct": 0.16939890710382513,
            "avg_feature_coverage": 0.8459016393442621,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "42F",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2053872053872054,
            "mixed_pct": 0.07407407407407407,
            "instit_pct": 0.3468013468013468,
            "ambiguous_pct": 0.37373737373737376,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.37373737373737376,
            "retail_qty_pct": 0.027794484904747584,
            "mixed_qty_pct": 0.04099711039343105,
            "instit_qty_pct": 0.6097413082987931,
            "ambiguous_qty_pct": 0.32146709640302823,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.32146709640302823,
            "retail_notional_pct": 0.02819139180442267,
            "mixed_notional_pct": 0.0415161563045411,
            "instit_notional_pct": 0.6076478675423811,
            "ambiguous_notional_pct": 0.32264458434865506,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.32264458434865506,
            "run_retail_pct": 0.4225352112676056,
            "run_mixed_pct": 0.08450704225352113,
            "run_instit_pct": 0.11971830985915492,
            "run_unclear_pct": 0.3732394366197183,
            "avg_trade_size": 5492.721885521886,
            "avg_run_notional": 11488.298591549295,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.02112676056338028,
            "medium_confidence_pct": 0.28169014084507044,
            "low_confidence_pct": 0.23943661971830985,
            "na_confidence_pct": 0.45774647887323944,
            "avg_feature_coverage": 0.8373239436619718,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.29923273657289,
            "mixed_pct": 0.11764705882352941,
            "instit_pct": 0.2557544757033248,
            "ambiguous_pct": 0.3209718670076726,
            "unobservable_pct": 0.00639386189258312,
            "unclear_pct": 0.3273657289002557,
            "retail_qty_pct": 0.041759300429820664,
            "mixed_qty_pct": 0.06795612864977027,
            "instit_qty_pct": 0.40703275529865124,
            "ambiguous_qty_pct": 0.4758411145694383,
            "unobservable_qty_pct": 0.007410701052319549,
            "unclear_qty_pct": 0.48325181562175784,
            "retail_notional_pct": 0.04180957586696829,
            "mixed_notional_pct": 0.0684358115414483,
            "instit_notional_pct": 0.4070948908573092,
            "ambiguous_notional_pct": 0.475298555744854,
            "unobservable_notional_pct": 0.007361165989420172,
            "unclear_notional_pct": 0.4826597217342742,
            "run_retail_pct": 0.5957446808510638,
            "run_mixed_pct": 0.09840425531914894,
            "run_instit_pct": 0.09042553191489362,
            "run_unclear_pct": 0.2154255319148936,
            "avg_trade_size": 3503.3855498721227,
            "avg_run_notional": 7286.296542553191,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.007978723404255319,
            "medium_confidence_pct": 0.5053191489361702,
            "low_confidence_pct": 0.17287234042553193,
            "na_confidence_pct": 0.31382978723404253,
            "avg_feature_coverage": 0.8453457446808508,
            "observable_run_pct": 0.9973404255319149,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "S71",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.18686868686868688,
            "mixed_pct": 0.08585858585858586,
            "instit_pct": 0.23232323232323232,
            "ambiguous_pct": 0.41919191919191917,
            "unobservable_pct": 0.07575757575757576,
            "unclear_pct": 0.4949494949494949,
            "retail_qty_pct": 0.08611784547275218,
            "mixed_qty_pct": 0.08548540107515548,
            "instit_qty_pct": 0.36660693580689363,
            "ambiguous_qty_pct": 0.39390745230315166,
            "unobservable_qty_pct": 0.06788236534204702,
            "unclear_qty_pct": 0.46178981764519866,
            "retail_notional_pct": 0.0866729398276473,
            "mixed_notional_pct": 0.08619412063355222,
            "instit_notional_pct": 0.36556456782401675,
            "ambiguous_notional_pct": 0.3931005598074058,
            "unobservable_notional_pct": 0.06846781190737793,
            "unclear_notional_pct": 0.46156837171478377,
            "run_retail_pct": 0.3181818181818182,
            "run_mixed_pct": 0.08181818181818182,
            "run_instit_pct": 0.16363636363636364,
            "run_unclear_pct": 0.43636363636363634,
            "avg_trade_size": 2273.058080808081,
            "avg_run_notional": 4091.5045454545457,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Mixed, mostly unclassified",
            "high_confidence_pct": 0.03636363636363636,
            "medium_confidence_pct": 0.14545454545454545,
            "low_confidence_pct": 0.3,
            "na_confidence_pct": 0.5181818181818182,
            "avg_feature_coverage": 0.8159090909090907,
            "observable_run_pct": 0.9818181818181818,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.18309859154929578,
            "mixed_pct": 0.09859154929577464,
            "instit_pct": 0.23943661971830985,
            "ambiguous_pct": 0.29577464788732394,
            "unobservable_pct": 0.18309859154929578,
            "unclear_pct": 0.47887323943661975,
            "retail_qty_pct": 0.11426780864842281,
            "mixed_qty_pct": 0.26175057447252975,
            "instit_qty_pct": 0.3106329642782536,
            "ambiguous_qty_pct": 0.2448297472320869,
            "unobservable_qty_pct": 0.06851890536870692,
            "unclear_qty_pct": 0.3133486526007938,
            "retail_notional_pct": 0.11416100467810203,
            "mixed_notional_pct": 0.2607721652929383,
            "instit_notional_pct": 0.30946619514368456,
            "ambiguous_notional_pct": 0.2456504789485409,
            "unobservable_notional_pct": 0.06995015593673425,
            "unclear_notional_pct": 0.3156006348852751,
            "run_retail_pct": 0.32432432432432434,
            "run_mixed_pct": 0.16216216216216217,
            "run_instit_pct": 0.13513513513513514,
            "run_unclear_pct": 0.3783783783783784,
            "avg_trade_size": 5058.028169014085,
            "avg_run_notional": 9705.945945945947,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.4594594594594595,
            "na_confidence_pct": 0.5405405405405406,
            "avg_feature_coverage": 0.7986486486486488,
            "observable_run_pct": 0.8918918918918919,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.08,
            "mixed_pct": 0.12,
            "instit_pct": 0.08,
            "ambiguous_pct": 0.44,
            "unobservable_pct": 0.28,
            "unclear_pct": 0.72,
            "retail_qty_pct": 0.0015479876160990713,
            "mixed_qty_pct": 0.09287925696594428,
            "instit_qty_pct": 0.03715170278637771,
            "ambiguous_qty_pct": 0.5758513931888545,
            "unobservable_qty_pct": 0.29256965944272445,
            "unclear_qty_pct": 0.868421052631579,
            "retail_notional_pct": 0.0015259706221533657,
            "mixed_notional_pct": 0.09481985392617097,
            "instit_notional_pct": 0.03597097161228697,
            "ambiguous_notional_pct": 0.5751899697523889,
            "unobservable_notional_pct": 0.29249323408699973,
            "unclear_notional_pct": 0.8676832038393887,
            "run_retail_pct": 0.13333333333333333,
            "run_mixed_pct": 0.13333333333333333,
            "run_instit_pct": 0.06666666666666667,
            "run_unclear_pct": 0.6666666666666666,
            "avg_trade_size": 1030.164,
            "avg_run_notional": 1716.9399999999998,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.2,
            "na_confidence_pct": 0.8,
            "avg_feature_coverage": 0.7766666666666665,
            "observable_run_pct": 0.8666666666666667,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "NXR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2,
            "mixed_pct": 0.2,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.6,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.6,
            "retail_qty_pct": 0.13978494623655913,
            "mixed_qty_pct": 0.17634408602150536,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 0.6838709677419355,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.6838709677419355,
            "retail_notional_pct": 0.14068846917899605,
            "mixed_notional_pct": 0.17748391496427196,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 0.681827615856732,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.681827615856732,
            "run_retail_pct": 0.25,
            "run_mixed_pct": 0.25,
            "run_instit_pct": 0.0,
            "run_unclear_pct": 0.5,
            "avg_trade_size": 3372.7,
            "avg_run_notional": 4215.875,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.25,
            "na_confidence_pct": 0.75,
            "avg_feature_coverage": 0.8125000000000001,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "532",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 1.0,
            "unclear_pct": 1.0,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 1.0,
            "unclear_qty_pct": 1.0,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 1.0,
            "unclear_notional_pct": 1.0,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.0,
            "run_unclear_pct": 1.0,
            "avg_trade_size": 700.0,
            "avg_run_notional": 1166.6666666666667,
            "dominant_bucket": "UNOBSERVABLE",
            "dominant_label": "Not Observable",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.0,
            "na_confidence_pct": 1.0,
            "avg_feature_coverage": 0.55,
            "observable_run_pct": 0.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ],
        "2w": [
          {
            "ticker": "TKU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.3602693602693603,
            "mixed_pct": 0.05723905723905724,
            "instit_pct": 0.3686868686868687,
            "ambiguous_pct": 0.2138047138047138,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.2138047138047138,
            "retail_qty_pct": 0.07738209586014792,
            "mixed_qty_pct": 0.07768225914897704,
            "instit_qty_pct": 0.6200413024685428,
            "ambiguous_qty_pct": 0.22489434252233215,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.22489434252233215,
            "retail_notional_pct": 0.0777625695044771,
            "mixed_notional_pct": 0.07803258305851717,
            "instit_notional_pct": 0.618943371860959,
            "ambiguous_notional_pct": 0.2252614755760467,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2252614755760467,
            "run_retail_pct": 0.6378205128205128,
            "run_mixed_pct": 0.060897435897435896,
            "run_instit_pct": 0.16666666666666666,
            "run_unclear_pct": 0.1346153846153846,
            "avg_trade_size": 3154.848484848485,
            "avg_run_notional": 6006.346153846154,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.15064102564102563,
            "medium_confidence_pct": 0.3141025641025641,
            "low_confidence_pct": 0.33974358974358976,
            "na_confidence_pct": 0.1955128205128205,
            "avg_feature_coverage": 0.8480769230769232,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "42F",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.20680628272251309,
            "mixed_pct": 0.10471204188481675,
            "instit_pct": 0.31413612565445026,
            "ambiguous_pct": 0.3743455497382199,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.3743455497382199,
            "retail_qty_pct": 0.03364123908958254,
            "mixed_qty_pct": 0.06175659740357641,
            "instit_qty_pct": 0.5518557805693609,
            "ambiguous_qty_pct": 0.3527463829374801,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3527463829374801,
            "retail_notional_pct": 0.03403191875909717,
            "mixed_notional_pct": 0.06212066771896905,
            "instit_notional_pct": 0.5512799485775036,
            "ambiguous_notional_pct": 0.35256746494443014,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.35256746494443014,
            "run_retail_pct": 0.39896373056994816,
            "run_mixed_pct": 0.11398963730569948,
            "run_instit_pct": 0.11398963730569948,
            "run_unclear_pct": 0.37305699481865284,
            "avg_trade_size": 5171.4078534031405,
            "avg_run_notional": 10235.636269430051,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.015544041450777202,
            "medium_confidence_pct": 0.20725388601036268,
            "low_confidence_pct": 0.29015544041450775,
            "na_confidence_pct": 0.48704663212435234,
            "avg_feature_coverage": 0.8344559585492226,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "NXR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.125,
            "mixed_pct": 0.125,
            "instit_pct": 0.375,
            "ambiguous_pct": 0.375,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.375,
            "retail_qty_pct": 0.07361268403171008,
            "mixed_qty_pct": 0.0928652321630804,
            "instit_qty_pct": 0.4733861834654587,
            "ambiguous_qty_pct": 0.36013590033975085,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.36013590033975085,
            "retail_notional_pct": 0.07521359392584843,
            "mixed_notional_pct": 0.0948848415679934,
            "instit_notional_pct": 0.4653890658931317,
            "ambiguous_notional_pct": 0.3645124986130265,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.3645124986130265,
            "run_retail_pct": 0.16666666666666666,
            "run_mixed_pct": 0.16666666666666666,
            "run_instit_pct": 0.3333333333333333,
            "run_unclear_pct": 0.3333333333333333,
            "avg_trade_size": 3942.9375,
            "avg_run_notional": 5257.25,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed, leaning institution-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5,
            "na_confidence_pct": 0.5,
            "avg_feature_coverage": 0.8250000000000002,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.3127051101734646,
            "mixed_pct": 0.1828410689170183,
            "instit_pct": 0.27379278012189406,
            "ambiguous_pct": 0.22831692451945618,
            "unobservable_pct": 0.0023441162681669013,
            "unclear_pct": 0.2306610407876231,
            "retail_qty_pct": 0.052104565837749695,
            "mixed_qty_pct": 0.09282001630656339,
            "instit_qty_pct": 0.4448124745209947,
            "ambiguous_qty_pct": 0.4051671422747656,
            "unobservable_qty_pct": 0.005095801059926621,
            "unclear_qty_pct": 0.4102629433346922,
            "retail_notional_pct": 0.05197488724407976,
            "mixed_notional_pct": 0.09276719267140227,
            "instit_notional_pct": 0.44421750740227295,
            "ambiguous_notional_pct": 0.4059433016854309,
            "unobservable_notional_pct": 0.005097110996814148,
            "unclear_notional_pct": 0.41104041268224506,
            "run_retail_pct": 0.6182692307692308,
            "run_mixed_pct": 0.14615384615384616,
            "run_instit_pct": 0.09230769230769231,
            "run_unclear_pct": 0.14326923076923076,
            "avg_trade_size": 1854.9249882794186,
            "avg_run_notional": 3804.3798076923076,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.07884615384615384,
            "medium_confidence_pct": 0.46153846153846156,
            "low_confidence_pct": 0.1701923076923077,
            "na_confidence_pct": 0.28942307692307695,
            "avg_feature_coverage": 0.8646634615384613,
            "observable_run_pct": 0.9990384615384615,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "S71",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.19557195571955718,
            "mixed_pct": 0.06642066420664207,
            "instit_pct": 0.26199261992619927,
            "ambiguous_pct": 0.42066420664206644,
            "unobservable_pct": 0.055350553505535055,
            "unclear_pct": 0.47601476014760147,
            "retail_qty_pct": 0.06701239224137931,
            "mixed_qty_pct": 0.055765086206896554,
            "instit_qty_pct": 0.44073275862068967,
            "ambiguous_qty_pct": 0.3931169181034483,
            "unobservable_qty_pct": 0.04337284482758621,
            "unclear_qty_pct": 0.4364897629310345,
            "retail_notional_pct": 0.06808949585936365,
            "mixed_notional_pct": 0.05742263547871568,
            "instit_notional_pct": 0.43520630539009153,
            "ambiguous_notional_pct": 0.3945118407671074,
            "unobservable_notional_pct": 0.044769722504721776,
            "unclear_notional_pct": 0.43928156327182916,
            "run_retail_pct": 0.3128834355828221,
            "run_mixed_pct": 0.06134969325153374,
            "run_instit_pct": 0.18404907975460122,
            "run_unclear_pct": 0.44171779141104295,
            "avg_trade_size": 2539.8523985239854,
            "avg_run_notional": 4222.699386503067,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.024539877300613498,
            "medium_confidence_pct": 0.09815950920245399,
            "low_confidence_pct": 0.37423312883435583,
            "na_confidence_pct": 0.5030674846625767,
            "avg_feature_coverage": 0.8159509202453987,
            "observable_run_pct": 0.9877300613496932,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.17777777777777778,
            "mixed_pct": 0.07777777777777778,
            "instit_pct": 0.26666666666666666,
            "ambiguous_pct": 0.28888888888888886,
            "unobservable_pct": 0.18888888888888888,
            "unclear_pct": 0.47777777777777775,
            "retail_qty_pct": 0.11303996770286637,
            "mixed_qty_pct": 0.2529269277351635,
            "instit_qty_pct": 0.31429148163100523,
            "ambiguous_qty_pct": 0.24586192975373436,
            "unobservable_qty_pct": 0.07387969317723052,
            "unclear_qty_pct": 0.31974162293096486,
            "retail_notional_pct": 0.11294878976226126,
            "mixed_notional_pct": 0.2521961479215365,
            "instit_notional_pct": 0.31308370945676645,
            "ambiguous_notional_pct": 0.24662431462949597,
            "unobservable_notional_pct": 0.07514703822993979,
            "unclear_notional_pct": 0.32177135285943576,
            "run_retail_pct": 0.28846153846153844,
            "run_mixed_pct": 0.11538461538461539,
            "run_instit_pct": 0.19230769230769232,
            "run_unclear_pct": 0.40384615384615385,
            "avg_trade_size": 4125.9111111111115,
            "avg_run_notional": 7141.0,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.4807692307692308,
            "na_confidence_pct": 0.5192307692307693,
            "avg_feature_coverage": 0.7942307692307693,
            "observable_run_pct": 0.8846153846153846,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.18518518518518517,
            "mixed_pct": 0.09259259259259259,
            "instit_pct": 0.14814814814814814,
            "ambiguous_pct": 0.4074074074074074,
            "unobservable_pct": 0.16666666666666666,
            "unclear_pct": 0.5740740740740741,
            "retail_qty_pct": 0.06606942889137737,
            "mixed_qty_pct": 0.07129525942515864,
            "instit_qty_pct": 0.2127659574468085,
            "ambiguous_qty_pct": 0.49010824934677116,
            "unobservable_qty_pct": 0.1597611048898843,
            "unclear_qty_pct": 0.6498693542366555,
            "retail_notional_pct": 0.06584394016969677,
            "mixed_notional_pct": 0.07232234454380054,
            "instit_notional_pct": 0.2113218098723401,
            "ambiguous_notional_pct": 0.48933774421544046,
            "unobservable_notional_pct": 0.1611741611987221,
            "unclear_notional_pct": 0.6505119054141626,
            "run_retail_pct": 0.21875,
            "run_mixed_pct": 0.125,
            "run_instit_pct": 0.09375,
            "run_unclear_pct": 0.5625,
            "avg_trade_size": 980.1796296296296,
            "avg_run_notional": 1654.053125,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.3125,
            "na_confidence_pct": 0.6875,
            "avg_feature_coverage": 0.7890625,
            "observable_run_pct": 0.90625,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "532",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.11904761904761904,
            "mixed_pct": 0.07142857142857142,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.19047619047619047,
            "unobservable_pct": 0.6190476190476191,
            "unclear_pct": 0.8095238095238095,
            "retail_qty_pct": 0.05151539402531183,
            "mixed_qty_pct": 0.10260778104242646,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 0.14290777303959118,
            "unobservable_qty_pct": 0.7029690518926706,
            "unclear_qty_pct": 0.8458768249322617,
            "retail_notional_pct": 0.051526237567165886,
            "mixed_notional_pct": 0.10260660797987882,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 0.1429061392477421,
            "unobservable_notional_pct": 0.7029610152052133,
            "unclear_notional_pct": 0.8458671544529553,
            "run_retail_pct": 0.2,
            "run_mixed_pct": 0.12,
            "run_instit_pct": 0.0,
            "run_unclear_pct": 0.6799999999999999,
            "avg_trade_size": 416.5238095238095,
            "avg_run_notional": 699.76,
            "dominant_bucket": "UNOBSERVABLE",
            "dominant_label": "Not Observable",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.2,
            "na_confidence_pct": 0.8,
            "avg_feature_coverage": 0.7060000000000001,
            "observable_run_pct": 0.52,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ],
        "30d": [
          {
            "ticker": "TKU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.32304725168756027,
            "mixed_pct": 0.0742526518804243,
            "instit_pct": 0.3982642237222758,
            "ambiguous_pct": 0.20443587270973965,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.20443587270973965,
            "retail_qty_pct": 0.07131550774040578,
            "mixed_qty_pct": 0.09013287094507169,
            "instit_qty_pct": 0.5961261847057201,
            "ambiguous_qty_pct": 0.24242543660880245,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.24242543660880245,
            "retail_notional_pct": 0.07135636904792439,
            "mixed_notional_pct": 0.0915445373677752,
            "instit_notional_pct": 0.5943875239171658,
            "ambiguous_notional_pct": 0.2427115696671346,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2427115696671346,
            "run_retail_pct": 0.5711711711711712,
            "run_mixed_pct": 0.07927927927927927,
            "run_instit_pct": 0.1891891891891892,
            "run_unclear_pct": 0.16036036036036036,
            "avg_trade_size": 3383.785920925747,
            "avg_run_notional": 6322.497297297297,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.08468468468468468,
            "medium_confidence_pct": 0.218018018018018,
            "low_confidence_pct": 0.45765765765765765,
            "na_confidence_pct": 0.23963963963963963,
            "avg_feature_coverage": 0.8529729729729729,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "NXR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.125,
            "mixed_pct": 0.08333333333333333,
            "instit_pct": 0.3333333333333333,
            "ambiguous_pct": 0.4583333333333333,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.4583333333333333,
            "retail_qty_pct": 0.004115894936366098,
            "mixed_qty_pct": 0.007636068237205524,
            "instit_qty_pct": 0.9210398050365557,
            "ambiguous_qty_pct": 0.06720823178987273,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.06720823178987273,
            "retail_notional_pct": 0.00405813999591763,
            "mixed_notional_pct": 0.007340923408573271,
            "instit_notional_pct": 0.9220047079416779,
            "ambiguous_notional_pct": 0.06659622865383119,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.06659622865383119,
            "run_retail_pct": 0.14285714285714285,
            "run_mixed_pct": 0.09523809523809523,
            "run_instit_pct": 0.3333333333333333,
            "run_unclear_pct": 0.42857142857142855,
            "avg_trade_size": 28374.041666666668,
            "avg_run_notional": 32427.47619047619,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Mixed, mostly unclassified",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.47619047619047616,
            "na_confidence_pct": 0.5238095238095238,
            "avg_feature_coverage": 0.8285714285714286,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2901094752736882,
            "mixed_pct": 0.1591166477916195,
            "instit_pct": 0.3282370705926765,
            "ambiguous_pct": 0.2202718006795017,
            "unobservable_pct": 0.0022650056625141564,
            "unclear_pct": 0.22253680634201586,
            "retail_qty_pct": 0.058653881820542306,
            "mixed_qty_pct": 0.1043065395600727,
            "instit_qty_pct": 0.5052487110056011,
            "ambiguous_qty_pct": 0.32912941874698615,
            "unobservable_qty_pct": 0.00266144886679773,
            "unclear_qty_pct": 0.3317908676137839,
            "retail_notional_pct": 0.058777055623537286,
            "mixed_notional_pct": 0.10448357019058399,
            "instit_notional_pct": 0.504924372641377,
            "ambiguous_notional_pct": 0.3291497953787553,
            "unobservable_notional_pct": 0.0026652061657464203,
            "unclear_notional_pct": 0.3318150015445018,
            "run_retail_pct": 0.5959266802443992,
            "run_mixed_pct": 0.13767820773930753,
            "run_instit_pct": 0.11323828920570264,
            "run_unclear_pct": 0.15315682281059065,
            "avg_trade_size": 2056.760664401661,
            "avg_run_notional": 4438.581670061099,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.12342158859470469,
            "medium_confidence_pct": 0.43421588594704685,
            "low_confidence_pct": 0.1515274949083503,
            "na_confidence_pct": 0.2908350305498982,
            "avg_feature_coverage": 0.8608757637474541,
            "observable_run_pct": 0.9991853360488798,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "42F",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.23183391003460208,
            "mixed_pct": 0.14763552479815456,
            "instit_pct": 0.3044982698961938,
            "ambiguous_pct": 0.3160322952710496,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.3160322952710496,
            "retail_qty_pct": 0.04749026370789981,
            "mixed_qty_pct": 0.13507768095417566,
            "instit_qty_pct": 0.4915436067870426,
            "ambiguous_qty_pct": 0.3258884485508819,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3258884485508819,
            "retail_notional_pct": 0.04768916748324691,
            "mixed_notional_pct": 0.1331044294043259,
            "instit_notional_pct": 0.49484980685323143,
            "ambiguous_notional_pct": 0.32435659625919583,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.32435659625919583,
            "run_retail_pct": 0.4088983050847458,
            "run_mixed_pct": 0.1504237288135593,
            "run_instit_pct": 0.125,
            "run_unclear_pct": 0.3156779661016949,
            "avg_trade_size": 3970.2433679354094,
            "avg_run_notional": 7292.79872881356,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.006355932203389831,
            "medium_confidence_pct": 0.211864406779661,
            "low_confidence_pct": 0.3156779661016949,
            "na_confidence_pct": 0.4661016949152542,
            "avg_feature_coverage": 0.8404661016949151,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "S71",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.22675521821631878,
            "mixed_pct": 0.09297912713472485,
            "instit_pct": 0.2874762808349146,
            "ambiguous_pct": 0.37855787476280833,
            "unobservable_pct": 0.014231499051233396,
            "unclear_pct": 0.3927893738140417,
            "retail_qty_pct": 0.05498853311391607,
            "mixed_qty_pct": 0.03716671626897288,
            "instit_qty_pct": 0.4781603963516045,
            "ambiguous_qty_pct": 0.41841004184100417,
            "unobservable_qty_pct": 0.011274312424502372,
            "unclear_qty_pct": 0.42968435426550655,
            "retail_notional_pct": 0.05508091473710559,
            "mixed_notional_pct": 0.03824436242234387,
            "instit_notional_pct": 0.4801285695031263,
            "ambiguous_notional_pct": 0.41364776409781595,
            "unobservable_notional_pct": 0.012898389239608248,
            "unclear_notional_pct": 0.4265461533374242,
            "run_retail_pct": 0.3859060402684564,
            "run_mixed_pct": 0.0738255033557047,
            "run_instit_pct": 0.18288590604026847,
            "run_unclear_pct": 0.3573825503355705,
            "avg_trade_size": 2266.6584440227703,
            "avg_run_notional": 4008.486577181208,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.010067114093959731,
            "medium_confidence_pct": 0.24496644295302014,
            "low_confidence_pct": 0.313758389261745,
            "na_confidence_pct": 0.4312080536912752,
            "avg_feature_coverage": 0.8371644295302012,
            "observable_run_pct": 0.9966442953020134,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.1694915254237288,
            "mixed_pct": 0.1016949152542373,
            "instit_pct": 0.2542372881355932,
            "ambiguous_pct": 0.3983050847457627,
            "unobservable_pct": 0.07627118644067797,
            "unclear_pct": 0.4745762711864407,
            "retail_qty_pct": 0.0640495867768595,
            "mixed_qty_pct": 0.10221195916383082,
            "instit_qty_pct": 0.3565872630043753,
            "ambiguous_qty_pct": 0.42513368983957217,
            "unobservable_qty_pct": 0.05201750121536218,
            "unclear_qty_pct": 0.47715119105493436,
            "retail_notional_pct": 0.06380244679227198,
            "mixed_notional_pct": 0.1040406675679308,
            "instit_notional_pct": 0.35612582912348106,
            "ambiguous_notional_pct": 0.4241512031754662,
            "unobservable_notional_pct": 0.051879853340849956,
            "unclear_notional_pct": 0.4760310565163161,
            "run_retail_pct": 0.2318840579710145,
            "run_mixed_pct": 0.13043478260869565,
            "run_instit_pct": 0.14492753623188406,
            "run_unclear_pct": 0.49275362318840576,
            "avg_trade_size": 1393.5228813559322,
            "avg_run_notional": 2383.1260869565217,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.37681159420289856,
            "na_confidence_pct": 0.6231884057971014,
            "avg_feature_coverage": 0.8000000000000003,
            "observable_run_pct": 0.9565217391304348,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.18811881188118812,
            "mixed_pct": 0.07920792079207921,
            "instit_pct": 0.28217821782178215,
            "ambiguous_pct": 0.36633663366336633,
            "unobservable_pct": 0.08415841584158416,
            "unclear_pct": 0.4504950495049505,
            "retail_qty_pct": 0.10531374433612523,
            "mixed_qty_pct": 0.20650830701633943,
            "instit_qty_pct": 0.33296718385280794,
            "ambiguous_qty_pct": 0.30495674859261296,
            "unobservable_qty_pct": 0.05025401620211451,
            "unclear_qty_pct": 0.35521076479472746,
            "retail_notional_pct": 0.10508330707313208,
            "mixed_notional_pct": 0.20478129957941177,
            "instit_notional_pct": 0.3319158896379371,
            "ambiguous_notional_pct": 0.3073909867703231,
            "unobservable_notional_pct": 0.05082851693919595,
            "unclear_notional_pct": 0.35821950370951905,
            "run_retail_pct": 0.2781954887218045,
            "run_mixed_pct": 0.08270676691729323,
            "run_instit_pct": 0.20300751879699247,
            "run_unclear_pct": 0.43609022556390975,
            "avg_trade_size": 2717.7871287128714,
            "avg_run_notional": 4127.766917293233,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.48120300751879697,
            "na_confidence_pct": 0.518796992481203,
            "avg_feature_coverage": 0.8157894736842105,
            "observable_run_pct": 0.9548872180451128,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "532",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.10638297872340426,
            "mixed_pct": 0.06382978723404255,
            "instit_pct": 0.02127659574468085,
            "ambiguous_pct": 0.1702127659574468,
            "unobservable_pct": 0.6382978723404256,
            "unclear_pct": 0.8085106382978724,
            "retail_qty_pct": 0.0484675081612787,
            "mixed_qty_pct": 0.0965370363398749,
            "instit_qty_pct": 0.05378107874087738,
            "ambiguous_qty_pct": 0.13445269685219347,
            "unobservable_qty_pct": 0.6667616799057755,
            "unclear_qty_pct": 0.8012143767579689,
            "retail_notional_pct": 0.04847774293996482,
            "mixed_notional_pct": 0.09653599797785317,
            "instit_notional_pct": 0.05378050026621347,
            "ambiguous_notional_pct": 0.13445125066553368,
            "unobservable_notional_pct": 0.6667545081504348,
            "unclear_notional_pct": 0.8012057588159684,
            "run_retail_pct": 0.17857142857142858,
            "run_mixed_pct": 0.10714285714285714,
            "run_instit_pct": 0.03571428571428571,
            "run_unclear_pct": 0.6785714285714286,
            "avg_trade_size": 395.6191489361702,
            "avg_run_notional": 664.0749999999999,
            "dominant_bucket": "UNOBSERVABLE",
            "dominant_label": "Not Observable",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.21428571428571427,
            "na_confidence_pct": 0.7857142857142857,
            "avg_feature_coverage": 0.6946428571428573,
            "observable_run_pct": 0.5,
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
          "trade_id": "BMLL-39",
          "timestamp": "2026-04-13T08:52:51.775000",
          "price": 0.22,
          "size": 2500.0,
          "notional": 550.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1295,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-38",
          "timestamp": "2026-04-13T08:52:51.775000",
          "price": 0.22,
          "size": 500.0,
          "notional": 110.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1295,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-37",
          "timestamp": "2026-04-13T08:46:32.719800",
          "price": 0.225,
          "size": 2000.0,
          "notional": 450.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1294,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-36",
          "timestamp": "2026-04-13T08:35:53.512700",
          "price": 0.22,
          "size": 500.0,
          "notional": 110.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1293,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-35",
          "timestamp": "2026-04-13T08:35:53.512700",
          "price": 0.22,
          "size": 200000.0,
          "notional": 44000.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1293,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-34",
          "timestamp": "2026-04-13T08:35:53.512700",
          "price": 0.22,
          "size": 18000.0,
          "notional": 3960.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1293,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-33",
          "timestamp": "2026-04-13T08:35:53.512700",
          "price": 0.22,
          "size": 50000.0,
          "notional": 11000.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1293,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-32",
          "timestamp": "2026-04-13T08:35:53.512700",
          "price": 0.22,
          "size": 50000.0,
          "notional": 11000.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1293,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-31",
          "timestamp": "2026-04-13T08:35:53.512700",
          "price": 0.22,
          "size": 2500.0,
          "notional": 550.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1293,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-30",
          "timestamp": "2026-04-13T08:35:53.512700",
          "price": 0.22,
          "size": 100000.0,
          "notional": 22000.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1293,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-29",
          "timestamp": "2026-04-13T08:35:53.512700",
          "price": 0.22,
          "size": 40000.0,
          "notional": 8800.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1293,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-28",
          "timestamp": "2026-04-13T08:35:53.512700",
          "price": 0.22,
          "size": 39000.0,
          "notional": 8580.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1293,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-27",
          "timestamp": "2026-04-13T08:35:38.458900",
          "price": 0.225,
          "size": 9700.0,
          "notional": 2182.5,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1292,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-26",
          "timestamp": "2026-04-13T07:35:46.006300",
          "price": 0.225,
          "size": 12000.0,
          "notional": 2700.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1291,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-25",
          "timestamp": "2026-04-13T07:35:03.871800",
          "price": 0.225,
          "size": 20000.0,
          "notional": 4500.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1290,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-24",
          "timestamp": "2026-04-13T07:35:03.871800",
          "price": 0.225,
          "size": 10000.0,
          "notional": 2250.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1290,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-23",
          "timestamp": "2026-04-13T07:35:03.871800",
          "price": 0.225,
          "size": 9000.0,
          "notional": 2025.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1290,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-22",
          "timestamp": "2026-04-13T07:35:03.841600",
          "price": 0.225,
          "size": 11000.0,
          "notional": 2475.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1290,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-21",
          "timestamp": "2026-04-13T07:35:03.841600",
          "price": 0.225,
          "size": 20000.0,
          "notional": 4500.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1290,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-20",
          "timestamp": "2026-04-13T07:35:03.841600",
          "price": 0.225,
          "size": 19000.0,
          "notional": 4275.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1290,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-19",
          "timestamp": "2026-04-13T02:58:40.038200",
          "price": 0.23,
          "size": 4200.0,
          "notional": 966.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1289,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-18",
          "timestamp": "2026-04-13T02:57:50.256700",
          "price": 0.23,
          "size": 4200.0,
          "notional": 966.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1288,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-17",
          "timestamp": "2026-04-13T02:01:46.985000",
          "price": 0.225,
          "size": 1000.0,
          "notional": 225.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1287,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-16",
          "timestamp": "2026-04-13T01:44:04.917800",
          "price": 0.225,
          "size": 20000.0,
          "notional": 4500.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 1286,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-15",
          "timestamp": "2026-04-13T01:34:15.599400",
          "price": 0.225,
          "size": 10000.0,
          "notional": 2250.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1285,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-14",
          "timestamp": "2026-04-13T01:30:25.623700",
          "price": 0.225,
          "size": 3000.0,
          "notional": 675.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1284,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-13",
          "timestamp": "2026-04-13T01:30:25.321700",
          "price": 0.225,
          "size": 20000.0,
          "notional": 4500.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1284,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-12",
          "timestamp": "2026-04-13T01:30:19.677400",
          "price": 0.225,
          "size": 17000.0,
          "notional": 3825.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1283,
          "d1": "SINGLE_FILL",
          "d2": "MOMENTUM_REACTIVE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-11",
          "timestamp": "2026-04-13T01:28:25.216800",
          "price": 0.225,
          "size": 19000.0,
          "notional": 4275.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1282,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-10",
          "timestamp": "2026-04-13T01:28:25.216800",
          "price": 0.225,
          "size": 30000.0,
          "notional": 6750.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1282,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
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
      "total_trades": 1036,
      "price_moving_trades": 136,
      "pct_price_moving": 13.127413127413126,
      "all_movers": {
        "count": 136,
        "avg_size": 2597.488970588235,
        "median_size": 560.0,
        "retail_count": 90,
        "mixed_count": 11,
        "institutional_count": 21,
        "ambiguous_count": 14,
        "unobservable_count": 0,
        "retail_pct": 66.17647058823529,
        "mixed_pct": 8.088235294117647,
        "instit_pct": 15.441176470588236,
        "unclear_pct": 10.294117647058822
      },
      "positive_movers": {
        "count": 65,
        "avg_size": 1663.5615384615385,
        "median_size": 69.0,
        "retail_count": 50,
        "mixed_count": 6,
        "institutional_count": 5,
        "ambiguous_count": 4,
        "unobservable_count": 0,
        "retail_pct": 76.92307692307693,
        "mixed_pct": 9.230769230769232,
        "instit_pct": 7.6923076923076925,
        "unclear_pct": 6.153846153846154
      },
      "negative_movers": {
        "count": 71,
        "avg_size": 3452.492957746479,
        "median_size": 1824.0,
        "retail_count": 40,
        "mixed_count": 5,
        "institutional_count": 16,
        "ambiguous_count": 10,
        "unobservable_count": 0,
        "retail_pct": 56.33802816901409,
        "mixed_pct": 7.042253521126761,
        "instit_pct": 22.535211267605636,
        "unclear_pct": 14.084507042253522
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
        "n_days_short_data": 22,
        "window_days": 21
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
        "2W": {
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
            "avg_short_ratio": 0.006520682420982033,
            "max_short_ratio": 0.07371154614462645,
            "interpretation": "Low short interest"
          }
        }
      },
      "correlation": {
        "valid": false,
        "correlation": null,
        "interpretation": ""
      },
      "peaks": [],
      "short_interest_change": {
        "valid": true,
        "monthly_data": [
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
        "interpretation": "Shorts covering significantly (-100% MoM)"
      },
      "short_series": {
        "valid": true,
        "rows": [
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
          "avg_short_ratio": 1.9392890062288023e-05,
          "max_short_ratio": 0.0071947622131088565,
          "is_target": false
        },
        {
          "ticker": "NXR",
          "avg_short_ratio": 8.705697209154375e-05,
          "max_short_ratio": 0.03229813664596273,
          "is_target": false
        },
        {
          "ticker": "S71",
          "avg_short_ratio": 0.0006684852012901777,
          "max_short_ratio": 0.08042344762205719,
          "is_target": false
        },
        {
          "ticker": "ITS",
          "avg_short_ratio": 0.0031888030297628914,
          "max_short_ratio": 0.1385606874328679,
          "is_target": false
        },
        {
          "ticker": "U77",
          "avg_short_ratio": 0.0036202968406150115,
          "max_short_ratio": 1.0,
          "is_target": false
        }
      ]
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
          "opening": 9.705767546867252e-05,
          "continuous": 0.9999029423245314,
          "closing": 0.0,
          "auctions": 9.705767546867252e-05,
          "other": 0.0
        },
        "1W": {
          "opening": 0.028071556119300987,
          "continuous": 0.9649585249675767,
          "closing": 0.006891706766324005,
          "auctions": 0.03504147503242328,
          "other": 0.0
        },
        "2W": {
          "opening": 0.020991496316317394,
          "continuous": 0.9736799650219665,
          "closing": 0.005150582980214705,
          "auctions": 0.026320034978033514,
          "other": 0.0
        },
        "1M": {
          "opening": 0.01520868996177374,
          "continuous": 0.9751909326963357,
          "closing": 0.007729793610917872,
          "auctions": 0.0248090673036643,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.36499440100838765,
        "1W": 0.32541003735324914,
        "2W": 0.31918749460872764,
        "1M": 0.30793632917994124
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.0029
        },
        {
          "time": "09:00",
          "avg_share": 0.1508
        },
        {
          "time": "09:30",
          "avg_share": 0.0694
        },
        {
          "time": "10:00",
          "avg_share": 0.0167
        },
        {
          "time": "10:30",
          "avg_share": 0.0582
        },
        {
          "time": "11:00",
          "avg_share": 0.1034
        },
        {
          "time": "11:30",
          "avg_share": 0.0801
        },
        {
          "time": "12:30",
          "avg_share": 0.0007
        },
        {
          "time": "13:00",
          "avg_share": 0.042
        },
        {
          "time": "13:30",
          "avg_share": 0.0327
        },
        {
          "time": "14:00",
          "avg_share": 0.0338
        },
        {
          "time": "14:30",
          "avg_share": 0.0644
        },
        {
          "time": "15:00",
          "avg_share": 0.1434
        },
        {
          "time": "15:30",
          "avg_share": 0.0717
        },
        {
          "time": "16:00",
          "avg_share": 0.0223
        },
        {
          "time": "16:30",
          "avg_share": 0.0493
        },
        {
          "time": "17:00",
          "avg_share": 0.0585
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "TKU",
          "auctions_pct": 6.622493141557882,
          "hhi": 0.2389966849816128,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400",
            "you": true
          }
        },
        {
          "ticker": "ITS",
          "auctions_pct": 3.942368507179339,
          "hhi": 0.19440448227218762,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "NXR",
          "auctions_pct": 2.095013910421713,
          "hhi": 0.7938721933612873,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "LVR",
          "auctions_pct": 3.4020186252494415,
          "hhi": 0.45289240183967067,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "U77",
          "auctions_pct": 4.286538355214269,
          "hhi": 0.5449607366057615,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "532",
          "auctions_pct": 7.740391975733107,
          "hhi": 0.8819381282154602,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "KUX",
          "auctions_pct": 0.27495188342040144,
          "hhi": 0.5833437712921885,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "42F",
          "auctions_pct": 4.240432195591383,
          "hhi": 0.5285771127156421,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "S71",
          "auctions_pct": 2.1567417563901214,
          "hhi": 0.41656148780594227,
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
