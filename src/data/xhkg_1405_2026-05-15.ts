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
      "ticker": "1405",
      "name": "DPC DASH",
      "marketCap": 5257307629.8,
      "sector": "Restaurants",
      "industry": "Consumer Discretionary - Travel & Leisure"
    },
    {
      "ticker": "999",
      "name": "XIAOCAIYUAN",
      "marketCap": 7965032275.999999,
      "sector": "Restaurants",
      "industry": "Consumer Discretionary - Travel & Leisure"
    },
    {
      "ticker": "6831",
      "name": "GREEN TEA GROUP",
      "marketCap": 5208377468.0,
      "sector": "Restaurants",
      "industry": "Consumer Discretionary - Travel & Leisure"
    },
    {
      "ticker": "9658",
      "name": "SUPER HI",
      "marketCap": 7348378700.0,
      "sector": "Restaurants",
      "industry": "Consumer Discretionary - Travel & Leisure"
    },
    {
      "ticker": "6862",
      "name": "HAIDILAO",
      "marketCap": 81826320000.0,
      "sector": "Restaurants",
      "industry": "Consumer Discretionary - Travel & Leisure"
    },
    {
      "ticker": "9987",
      "name": "YUM CHINA",
      "marketCap": 125134417766.4,
      "sector": "Restaurants",
      "industry": "Consumer Discretionary - Travel & Leisure"
    },
    {
      "ticker": "880",
      "name": "SJM HOLDINGS",
      "marketCap": 13706484356.38,
      "sector": "Casinos & Gaming",
      "industry": "Consumer Discretionary - Travel & Leisure"
    },
    {
      "ticker": "1128",
      "name": "WYNN MACAU",
      "marketCap": 30003190320.0,
      "sector": "Casinos & Gaming",
      "industry": "Consumer Discretionary - Travel & Leisure"
    },
    {
      "ticker": "2643",
      "name": "CAOCAO INC",
      "marketCap": 13521986298.4,
      "sector": "Transportation",
      "industry": "Consumer Discretionary - Travel & Leisure"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XHKG",
    "currency": "HKD",
    "ticker": "1405",
    "company": "DPC DASH",
    "asof_date": "2026-05-15",
    "industry": "Consumer Discretionary - Travel & Leisure",
    "sector": "Restaurants",
    "market_cap_display": "5.3B",
    "market_cap_category": "large",
    "universe_total": 2571,
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
          "score_pca": 89.6927265655387,
          "score_pca_percentile": 89.6927265655387,
          "rank_pca": 266,
          "total": 2571,
          "adv_notional_sgd": 58081860.0,
          "adv_volume_shares": 1453500.0,
          "free_float_shares": 87998408.0,
          "turnover_ratio": 0.016517344268319037,
          "votes": 4117.0,
          "trades": 4117.0,
          "spread_pct": 0.0013877062945548565,
          "spread_ticks": null,
          "amihud": 5.666802539591163e-10,
          "volatility": 0.4079424297199262
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5484685946560414,
          "loadings": {
            "log_adv": 0.5357354082357271,
            "log_trades": 0.49904554999360773,
            "log_turnover": 0.4978134063562781,
            "neg_spread": 0.40907865338580285,
            "neg_amihud": 0.05282080725021891,
            "neg_vol": -0.21444705992745383
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
          "peer_median_adv": 28323393.814999998,
          "peer_median_score_pca": 79.01594710229483,
          "peer_median_trades": 1264.5,
          "peer_median_volatility": 0.290428791308132,
          "peer_median_spread_pct": 0.0034026267443930712,
          "peer_median_spread_ticks": 1.393366756652526,
          "peer_median_amihud": 2.8153254658800337e-10,
          "peer_median_turnover_ratio": 0.004775979012864955,
          "target_vs_peer": {
            "score_pca_delta": 10.68,
            "adv_delta_pct": 105.1,
            "trades_delta_pct": 225.58,
            "volatility_delta_pct": -40.46,
            "spread_pct_delta_pct": 59.22,
            "spread_ticks_delta_pct": null,
            "amihud_delta_pct": -101.28,
            "turnover_ratio_delta_pct": 245.84
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1405",
            "score_pca": 89.6927265655387,
            "rank_pca": 266,
            "adv": 58081860.0,
            "trades": 4117.0,
            "volatility": 0.4079424297199262,
            "spread_pct": 0.0013877062945548565,
            "spread_ticks": null,
            "amihud": 5.666802539591163e-10,
            "turnover_ratio": 0.016517344268319037,
            "is_target": true
          },
          {
            "ticker": "999",
            "score_pca": 68.37806301050176,
            "rank_pca": 814,
            "adv": 3390416.0,
            "trades": 254.0,
            "volatility": 0.2779676074630688,
            "spread_pct": 0.005369925799450114,
            "spread_ticks": 3.6698450536352802,
            "amihud": 5.557011207517035e-09,
            "turnover_ratio": 0.002837091573248855,
            "is_target": false
          },
          {
            "ticker": "6831",
            "score_pca": 74.60132244262932,
            "rank_pca": 654,
            "adv": 10555104.0,
            "trades": 690.0,
            "volatility": 0.29702133011506915,
            "spread_pct": 0.003445588761820524,
            "spread_ticks": 2.754922279792746,
            "amihud": 2.450195560888564e-09,
            "turnover_ratio": 0.008330437178771095,
            "is_target": false
          },
          {
            "ticker": "9658",
            "score_pca": 66.70556203811746,
            "rank_pca": 857,
            "adv": 4688370.0,
            "trades": 152.0,
            "volatility": 0.3268987759918757,
            "spread_pct": 0.006264780703124518,
            "spread_ticks": null,
            "amihud": 2.0562937827824565e-09,
            "turnover_ratio": 0.0021074802428298774,
            "is_target": false
          },
          {
            "ticker": "6862",
            "score_pca": 90.70400622325944,
            "rank_pca": 240,
            "adv": 179233625.0,
            "trades": 5476.0,
            "volatility": 0.2838362525011948,
            "spread_pct": 0.0008932586771131063,
            "spread_ticks": null,
            "amihud": 1.1902528520155363e-10,
            "turnover_ratio": 0.00709613570587648,
            "is_target": false
          },
          {
            "ticker": "9987",
            "score_pca": 91.2485414235706,
            "rank_pca": 226,
            "adv": 477209599.99999994,
            "trades": 4958.0,
            "volatility": 0.2724838274742496,
            "spread_pct": 0.0007653838251208628,
            "spread_ticks": 1.3580189889658711,
            "amihud": 2.6554738858019637e-11,
            "turnover_ratio": 0.0039382124021782716,
            "is_target": false
          },
          {
            "ticker": "880",
            "score_pca": 81.21353558926488,
            "rank_pca": 484,
            "adv": 28548175.93,
            "trades": 1265.0,
            "volatility": 0.6023232334189523,
            "spread_pct": 0.0054288267743227885,
            "spread_ticks": 1.0475737392959086,
            "amihud": 0.0,
            "turnover_ratio": 0.005613745623551639,
            "is_target": false
          },
          {
            "ticker": "1128",
            "score_pca": 76.81835861532478,
            "rank_pca": 597,
            "adv": 28098611.7,
            "trades": 1264.0,
            "volatility": 0.15146394851646144,
            "spread_pct": 0.0024555179491361906,
            "spread_ticks": 1.393366756652526,
            "amihud": 6.232740264223853e-11,
            "turnover_ratio": 0.003256605459300995,
            "is_target": false
          },
          {
            "ticker": "2643",
            "score_pca": 90.35394788020226,
            "rank_pca": 249,
            "adv": 68001520.0,
            "trades": 3134.0,
            "volatility": 0.5912329727279483,
            "spread_pct": 0.003359664726965619,
            "spread_ticks": null,
            "amihud": 4.4403980797445314e-10,
            "turnover_ratio": 0.022704872667385342,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Restaurants",
          "sector_count": 41,
          "market_count": 2571,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.49983230852083815,
              "median": 0.3297082720219735,
              "min": 0.0,
              "max": 14.43510868850028,
              "p5": 0.0,
              "p95": 1.570104172681951,
              "count": 2571
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 79169716.55320302,
              "median": 283920.0,
              "min": 0.0,
              "max": 12067626760.0,
              "p5": 0.0,
              "p95": 340751575.90500003,
              "count": 2571
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.045808608436869326,
              "median": 0.026498422712933775,
              "min": 0.0004891229110456647,
              "max": 0.7662226887999475,
              "p5": 0.001454054892022016,
              "p95": 0.15183891384076748,
              "count": 2571
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0080866786278611,
              "median": 0.0011928429423459245,
              "min": 0.0,
              "max": 1.673524503802603,
              "p5": 0.0,
              "p95": 0.02505341090884024,
              "count": 2555
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.4663734473301344e-06,
              "median": 6.5858744623423924e-09,
              "min": 0.0,
              "max": 0.0022453889334402566,
              "p5": 0.0,
              "p95": 4.518587544679413e-06,
              "count": 2214
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1426.313107740179,
              "median": 27.0,
              "min": 0.0,
              "max": 96362.0,
              "p5": 0.0,
              "p95": 7277.5,
              "count": 2571
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.2916813234174855,
              "median": 0.16437671968130868,
              "min": 0.0,
              "max": 1.6228226630794345,
              "p5": 0.0,
              "p95": 1.2730366958631603,
              "count": 41
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 18238154.8004878,
              "median": 49500.00000000001,
              "min": 0.0,
              "max": 477209599.99999994,
              "p5": 0.0,
              "p95": 58081860.0,
              "count": 41
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.060284798929172906,
              "median": 0.04444444444444448,
              "min": 0.0007653838251208628,
              "max": 0.29968484385445515,
              "p5": 0.0013877062945548565,
              "p95": 0.15113855654187575,
              "count": 41
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002145030069901499,
              "median": 0.0005167314464501367,
              "min": 0.0,
              "max": 0.02021418658846325,
              "p5": 0.0,
              "p95": 0.008739782533248468,
              "count": 40
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.705089531804933e-05,
              "median": 1.6851868703720457e-08,
              "min": 0.0,
              "max": 0.0022453889334402566,
              "p5": 0.0,
              "p95": 6.089547326639248e-05,
              "count": 31
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 415.9268292682927,
              "median": 7.0,
              "min": 0.0,
              "max": 5476.0,
              "p5": 0.0,
              "p95": 4117.0,
              "count": 41
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 99965677.82875,
              "median": 28323393.814999998,
              "min": 3390416.0,
              "max": 477209599.99999994,
              "p5": 3844699.9,
              "p95": 372918008.7499998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2149.125,
              "median": 1264.5,
              "min": 152.0,
              "max": 5476.0,
              "p5": 187.7,
              "p95": 5294.7,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.35040349352610256,
              "median": 0.290428791308132,
              "min": 0.15146394851646144,
              "max": 0.6023232334189523,
              "p5": 0.1938209061516873,
              "p95": 0.5984416421771009,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0034978684021317154,
              "median": 0.0034026267443930712,
              "min": 0.0007653838251208628,
              "max": 0.006264780703124518,
              "p5": 0.0008101400233181481,
              "p95": 0.005972196828043912,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.0447453636684663,
              "median": 1.393366756652526,
              "min": 1.0475737392959086,
              "max": 3.6698450536352802,
              "p5": 1.1096627892299011,
              "p95": 3.4868604988667733,
              "count": 5
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.3394309732330402e-09,
              "median": 2.8153254658800337e-10,
              "min": 0.0,
              "max": 5.557011207517035e-09,
              "p5": 9.294158600306874e-12,
              "p95": 4.469625731197068e-09,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006985572606642819,
              "median": 0.004775979012864955,
              "min": 0.0021074802428298774,
              "max": 0.022704872667385342,
              "p5": 0.0023628442084765197,
              "p95": 0.017673820246370348,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": -0.03291384317521784,
            "market": -0.0037607784150035517,
            "sector": 0.0,
            "peers": -0.011156421195461896,
            "vs_market": -0.029153064760214287,
            "vs_sector": -0.03291384317521784,
            "vs_peers": -0.021757421979755942
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 79.03539478802023,
          "score_pca_percentile": 79.03539478802023,
          "rank_pca": 540,
          "total": 2571,
          "adv_notional_sgd": 15504830.0,
          "adv_volume_shares": 317100.0,
          "free_float_shares": 87998408.0,
          "turnover_ratio": 0.0036034742810347204,
          "votes": 897.0,
          "trades": 897.0,
          "spread_pct": 0.003795333513042342,
          "spread_ticks": 5.3725671918443005,
          "amihud": 9.494018337102725e-10,
          "volatility": 0.43313406115617586
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5760515881350389,
          "loadings": {
            "log_adv": 0.5193851873234424,
            "log_trades": 0.4753601323984047,
            "log_turnover": 0.4691471932251965,
            "neg_spread": 0.45316942172616553,
            "neg_amihud": 0.265376909909909,
            "neg_vol": 0.09157103091657709
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
          "peer_median_adv": 24522878.64,
          "peer_median_score_pca": 84.03345001944768,
          "peer_median_trades": 1482.0,
          "peer_median_volatility": 0.37982096272459753,
          "peer_median_spread_pct": 0.0029868622841265078,
          "peer_median_spread_ticks": 1.4104704842353404,
          "peer_median_amihud": 6.348886573131214e-10,
          "peer_median_turnover_ratio": 0.005245549449553163,
          "target_vs_peer": {
            "score_pca_delta": -5.0,
            "adv_delta_pct": -36.8,
            "trades_delta_pct": -39.47,
            "volatility_delta_pct": -14.04,
            "spread_pct_delta_pct": -27.07,
            "spread_ticks_delta_pct": 280.91,
            "amihud_delta_pct": -49.54,
            "turnover_ratio_delta_pct": -31.3
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1405",
            "score_pca": 79.03539478802023,
            "rank_pca": 540,
            "adv": 15504830.0,
            "trades": 897.0,
            "volatility": 0.43313406115617586,
            "spread_pct": 0.003795333513042342,
            "spread_ticks": 5.3725671918443005,
            "amihud": 9.494018337102725e-10,
            "turnover_ratio": 0.0036034742810347204,
            "is_target": true
          },
          {
            "ticker": "999",
            "score_pca": 79.07429015947103,
            "rank_pca": 539,
            "adv": 11238432.0,
            "trades": 715.0,
            "volatility": 0.4911368052411009,
            "spread_pct": 0.004147683540733442,
            "spread_ticks": 2.8057199211045365,
            "amihud": 1.3746969508065895e-09,
            "turnover_ratio": 0.009290795088115261,
            "is_target": false
          },
          {
            "ticker": "6831",
            "score_pca": 86.11435239206534,
            "rank_pca": 358,
            "adv": 21300221.28,
            "trades": 1884.0,
            "volatility": 0.43379865323606753,
            "spread_pct": 0.003069894141844288,
            "spread_ticks": 2.599498327759197,
            "amihud": 8.869528651692466e-10,
            "turnover_ratio": 0.01645714572527899,
            "is_target": false
          },
          {
            "ticker": "9658",
            "score_pca": 70.24504084014002,
            "rank_pca": 766,
            "adv": 2861712.0,
            "trades": 166.0,
            "volatility": 0.3758130452224601,
            "spread_pct": 0.005727406762864694,
            "spread_ticks": null,
            "amihud": 4.451030418653832e-09,
            "turnover_ratio": 0.0013572396261367638,
            "is_target": false
          },
          {
            "ticker": "6862",
            "score_pca": 94.20458965383119,
            "rank_pca": 150,
            "adv": 185858076.12,
            "trades": 5476.0,
            "volatility": 0.3838288802267349,
            "spread_pct": 0.0009226268915933496,
            "spread_ticks": null,
            "amihud": 6.76170137761403e-11,
            "turnover_ratio": 0.007211674380808046,
            "is_target": false
          },
          {
            "ticker": "9987",
            "score_pca": 86.8533644496305,
            "rank_pca": 339,
            "adv": 182606580.0,
            "trades": 1668.0,
            "volatility": 0.28418780928109866,
            "spread_pct": 0.0007454905380288365,
            "spread_ticks": 1.4104704842353404,
            "amihud": 6.28136880155495e-11,
            "turnover_ratio": 0.0014228141765436407,
            "is_target": false
          },
          {
            "ticker": "880",
            "score_pca": 80.43562816024892,
            "rank_pca": 504,
            "adv": 18232592.29,
            "trades": 1102.0,
            "volatility": 0.21698789695808837,
            "spread_pct": 0.0050945833265208995,
            "spread_ticks": 1.036676854681856,
            "amihud": 3.828244494569963e-10,
            "turnover_ratio": 0.003279424518298281,
            "is_target": false
          },
          {
            "ticker": "1128",
            "score_pca": 84.28626993387786,
            "rank_pca": 405,
            "adv": 28043325.0,
            "trades": 1848.0,
            "volatility": 0.19247793951185932,
            "spread_pct": 0.0024227248637679103,
            "spread_ticks": 1.3796004206098844,
            "amihud": 3.216377485383343e-10,
            "turnover_ratio": 0.003256605459300995,
            "is_target": false
          },
          {
            "ticker": "2643",
            "score_pca": 83.78063010501751,
            "rank_pca": 418,
            "adv": 27745536.0,
            "trades": 1296.0,
            "volatility": 0.46798418136608927,
            "spread_pct": 0.002903830426408727,
            "spread_ticks": null,
            "amihud": 9.164606228572532e-10,
            "turnover_ratio": 0.0089212929790958,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Restaurants",
          "sector_count": 41,
          "market_count": 2571,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6683695954060308,
              "median": 0.497748903554959,
              "min": 0.0,
              "max": 12.31263712848922,
              "p5": 0.16064009359131307,
              "p95": 1.6891008974268378,
              "count": 2570
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 60484608.377448834,
              "median": 221292.0,
              "min": 0.0,
              "max": 12067626760.0,
              "p5": 0.0,
              "p95": 246379859.575,
              "count": 2571
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04373211324290928,
              "median": 0.02827277574034285,
              "min": 0.0004644488055358157,
              "max": 0.5912209998910793,
              "p5": 0.0014179103368991324,
              "p95": 0.13960672928312942,
              "count": 2571
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004265199036302778,
              "median": 0.0009357373048519851,
              "min": 0.0,
              "max": 0.22683857272505092,
              "p5": 0.0,
              "p95": 0.01645856060160398,
              "count": 2555
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.280180728085559e-07,
              "median": 4.395419948970934e-08,
              "min": 0.0,
              "max": 0.00011266887194510722,
              "p5": 2.7678893021497664e-11,
              "p95": 4.207404556279379e-06,
              "count": 2563
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1079.1474134577986,
              "median": 21.0,
              "min": 0.0,
              "max": 70256.0,
              "p5": 0.0,
              "p95": 6040.5,
              "count": 2571
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7078921534394049,
              "median": 0.4648520540696417,
              "min": 0.1280349181904778,
              "max": 2.334007595055463,
              "p5": 0.15791156465209177,
              "p95": 1.860535661296868,
              "count": 41
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 10580947.265853658,
              "median": 81036.0,
              "min": 0.0,
              "max": 185858076.12,
              "p5": 0.0,
              "p95": 21300221.28,
              "count": 41
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.06094648685205352,
              "median": 0.04855428259683576,
              "min": 0.0007454905380288365,
              "max": 0.2382671480144405,
              "p5": 0.003069894141844288,
              "p95": 0.1682641107561235,
              "count": 41
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0017565924821480062,
              "median": 0.0005932476169392565,
              "min": 0.0,
              "max": 0.01645714572527899,
              "p5": 0.0,
              "p95": 0.0073156304161734005,
              "count": 40
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.84614134351152e-07,
              "median": 1.521236460995496e-07,
              "min": 0.0,
              "max": 6.349206349206347e-06,
              "p5": 6.28136880155495e-11,
              "p95": 2.7254272171053245e-06,
              "count": 41
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 295.7317073170732,
              "median": 8.0,
              "min": 0.0,
              "max": 5476.0,
              "p5": 0.0,
              "p95": 1668.0,
              "count": 41
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 59735809.33625,
              "median": 24522878.64,
              "min": 2861712.0,
              "max": 185858076.12,
              "p5": 5793564.0,
              "p95": 184720052.47800002,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1769.375,
              "median": 1482.0,
              "min": 166.0,
              "max": 5476.0,
              "p5": 358.15,
              "p95": 4218.799999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3557769013804374,
              "median": 0.37982096272459753,
              "min": 0.19247793951185932,
              "max": 0.4911368052411009,
              "p5": 0.2010564246180395,
              "p95": 0.4830333868848468,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.003129280061470268,
              "median": 0.0029868622841265078,
              "min": 0.0007454905380288365,
              "max": 0.005727406762864694,
              "p5": 0.0008074882617764161,
              "p95": 0.005505918560144366,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.846393201678163,
              "median": 1.4104704842353404,
              "min": 1.036676854681856,
              "max": 2.8057199211045365,
              "p5": 1.1052615678674618,
              "p95": 2.7644756024354686,
              "count": 5
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.0580042196592428e-09,
              "median": 6.348886573131214e-10,
              "min": 6.28136880155495e-11,
              "max": 4.451030418653832e-09,
              "p5": 6.449485203175629e-11,
              "p95": 3.3743137049072954e-09,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006399623994197222,
              "median": 0.005245549449553163,
              "min": 0.0013572396261367638,
              "max": 0.01645714572527899,
              "p5": 0.0013801907187791708,
              "p95": 0.013948923002271681,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": -0.21415929203539796,
            "market": 0.03432254254015166,
            "sector": 0.02290699473847102,
            "peers": -0.04220492698635214,
            "vs_market": -0.24848183457554962,
            "vs_sector": -0.23706628677386898,
            "vs_peers": -0.17195436504904582
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 77.44068455853753,
          "score_pca_percentile": 77.44068455853753,
          "rank_pca": 581,
          "total": 2571,
          "adv_notional_sgd": 13697860.0,
          "adv_volume_shares": 223300.0,
          "free_float_shares": 87998408.0,
          "turnover_ratio": 0.002537545906512309,
          "votes": 828.0,
          "trades": 828.0,
          "spread_pct": 0.00442668791424467,
          "spread_ticks": 6.86071521680153,
          "amihud": 1.1791827831111554e-09,
          "volatility": 0.5469563233276669
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.5986940702771455,
          "loadings": {
            "log_adv": 0.5095187142894015,
            "log_trades": 0.4656132783072493,
            "log_turnover": 0.4597463715131634,
            "neg_spread": 0.46334929764823596,
            "neg_amihud": 0.28670184168271307,
            "neg_vol": 0.12384551295044881
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
          "peer_median_adv": 24903795.58,
          "peer_median_score_pca": 82.90548424737457,
          "peer_median_trades": 1465.5,
          "peer_median_volatility": 0.35754994777931315,
          "peer_median_spread_pct": 0.003822578570551329,
          "peer_median_spread_ticks": 1.457142857142857,
          "peer_median_amihud": 4.805378632527252e-10,
          "peer_median_turnover_ratio": 0.005603176165210161,
          "target_vs_peer": {
            "score_pca_delta": -5.46,
            "adv_delta_pct": -45.0,
            "trades_delta_pct": -43.5,
            "volatility_delta_pct": -52.97,
            "spread_pct_delta_pct": -15.8,
            "spread_ticks_delta_pct": 370.83,
            "amihud_delta_pct": -145.39,
            "turnover_ratio_delta_pct": -54.71
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1405",
            "score_pca": 77.44068455853753,
            "rank_pca": 581,
            "adv": 13697860.0,
            "trades": 828.0,
            "volatility": 0.5469563233276669,
            "spread_pct": 0.00442668791424467,
            "spread_ticks": 6.86071521680153,
            "amihud": 1.1791827831111554e-09,
            "turnover_ratio": 0.002537545906512309,
            "is_target": true
          },
          {
            "ticker": "999",
            "score_pca": 77.86853364449631,
            "rank_pca": 570,
            "adv": 9751448.0,
            "trades": 549.0,
            "volatility": 0.37856101028158995,
            "spread_pct": 0.004267091374323336,
            "spread_ticks": 3.152271273192578,
            "amihud": 1.3955697604460525e-09,
            "turnover_ratio": 0.007400911404337668,
            "is_target": false
          },
          {
            "ticker": "6831",
            "score_pca": 81.95254764683003,
            "rank_pca": 465,
            "adv": 15822185.399999999,
            "trades": 1186.0,
            "volatility": 0.5084423814681505,
            "spread_pct": 0.004076140067696652,
            "spread_ticks": 3.1748135874067938,
            "amihud": 1.2443337912785901e-09,
            "turnover_ratio": 0.012450707366112913,
            "is_target": false
          },
          {
            "ticker": "9658",
            "score_pca": 71.41190198366394,
            "rank_pca": 736,
            "adv": 3918996.0,
            "trades": 181.0,
            "volatility": 0.3365388852770363,
            "spread_pct": 0.006158264277559534,
            "spread_ticks": null,
            "amihud": 4.233890806636052e-09,
            "turnover_ratio": 0.001596483587181081,
            "is_target": false
          },
          {
            "ticker": "6862",
            "score_pca": 96.11046285492026,
            "rank_pca": 101,
            "adv": 257029784.82,
            "trades": 6788.0,
            "volatility": 0.45301339625767667,
            "spread_pct": 0.0008917510329983737,
            "spread_ticks": null,
            "amihud": 6.76170137761403e-11,
            "turnover_ratio": 0.010246001333668705,
            "is_target": false
          },
          {
            "ticker": "9987",
            "score_pca": 88.1369117075068,
            "rank_pca": 306,
            "adv": 214379880.0,
            "trades": 2024.0,
            "volatility": 0.3002453107373697,
            "spread_pct": 0.0006869668630153699,
            "spread_ticks": 1.3957937932803284,
            "amihud": 5.919019087588772e-11,
            "turnover_ratio": 0.0015868200929542943,
            "is_target": false
          },
          {
            "ticker": "880",
            "score_pca": 81.17464021781407,
            "rank_pca": 485,
            "adv": 20800151.16,
            "trades": 1136.0,
            "volatility": 0.23477697959423316,
            "spread_pct": 0.00501797521180585,
            "spread_ticks": 1.0679164105716041,
            "amihud": 4.118179665286539e-10,
            "turnover_ratio": 0.0038054409260826544,
            "is_target": false
          },
          {
            "ticker": "1128",
            "score_pca": 83.8584208479191,
            "rank_pca": 416,
            "adv": 29007440.0,
            "trades": 1745.0,
            "volatility": 0.23784903424858364,
            "spread_pct": 0.00260196922482076,
            "spread_ticks": 1.457142857142857,
            "amihud": 3.555149573359234e-10,
            "turnover_ratio": 0.0033530692911280147,
            "is_target": false
          },
          {
            "ticker": "2643",
            "score_pca": 85.41423570595099,
            "rank_pca": 376,
            "adv": 35371350.0,
            "trades": 1854.0,
            "volatility": 0.5625338885142607,
            "spread_pct": 0.003569017073406006,
            "spread_ticks": null,
            "amihud": 5.492577599767965e-10,
            "turnover_ratio": 0.010489122881821328,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Restaurants",
          "sector_count": 41,
          "market_count": 2571,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7198958600706629,
              "median": 0.579595044305881,
              "min": 0.0,
              "max": 16.15120458067775,
              "p5": 0.2185895618116451,
              "p95": 1.6521181783772458,
              "count": 2570
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 58964429.4500435,
              "median": 221595.0,
              "min": 0.0,
              "max": 12484489600.0,
              "p5": 0.0,
              "p95": 233144319.10000002,
              "count": 2571
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04312981064052699,
              "median": 0.028615115771079076,
              "min": 0.0005681922931204329,
              "max": 0.586235634471959,
              "p5": 0.001447713471750552,
              "p95": 0.13446350945343993,
              "count": 2571
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0038546267588246896,
              "median": 0.0008750906805121407,
              "min": 0.0,
              "max": 0.38612653752209847,
              "p5": 0.0,
              "p95": 0.014604600464326219,
              "count": 2555
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.084925230058465e-07,
              "median": 4.8192233555012427e-08,
              "min": 0.0,
              "max": 9.01875901875902e-05,
              "p5": 4.720922706280273e-11,
              "p95": 3.528062681171702e-06,
              "count": 2571
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1064.2563204978608,
              "median": 20.0,
              "min": 0.0,
              "max": 68934.0,
              "p5": 0.0,
              "p95": 5876.0,
              "count": 2571
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7219919442027842,
              "median": 0.5469563233276669,
              "min": 0.14830830747493465,
              "max": 1.7276475499444317,
              "p5": 0.26662423210721775,
              "p95": 1.547109156859957,
              "count": 41
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 12936948.200487804,
              "median": 34320.0,
              "min": 0.0,
              "max": 257029784.82,
              "p5": 0.0,
              "p95": 15822185.399999999,
              "count": 41
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.06277090546371254,
              "median": 0.051724137931034524,
              "min": 0.0006869668630153699,
              "max": 0.23379216888952278,
              "p5": 0.004076140067696652,
              "p95": 0.16189290161892902,
              "count": 41
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0015424891078717135,
              "median": 0.00039056583911736234,
              "min": 0.0,
              "max": 0.012450707366112913,
              "p5": 0.0,
              "p95": 0.007543165900804212,
              "count": 40
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.784844689348402e-07,
              "median": 2.6280380119417894e-07,
              "min": 5.919019087588772e-11,
              "max": 4.728132387706863e-06,
              "p5": 1.1791827831111554e-09,
              "p95": 3.3725671017778173e-06,
              "count": 41
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 317.7560975609756,
              "median": 8.0,
              "min": 0.0,
              "max": 6788.0,
              "p5": 0.0,
              "p95": 1186.0,
              "count": 41
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 73260154.42249998,
              "median": 24903795.58,
              "min": 3918996.0,
              "max": 257029784.82,
              "p5": 5960354.2,
              "p95": 242102318.133,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1932.875,
              "median": 1465.5,
              "min": 181.0,
              "max": 6788.0,
              "p5": 309.8,
              "p95": 5120.599999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.37649511079736253,
              "median": 0.35754994777931315,
              "min": 0.23477697959423316,
              "max": 0.5625338885142607,
              "p5": 0.23585219872325583,
              "p95": 0.543601861048122,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.003408646890703235,
              "median": 0.003822578570551329,
              "min": 0.0006869668630153699,
              "max": 0.006158264277559534,
              "p5": 0.0007586413225094212,
              "p95": 0.005759163104545744,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.0495875843188323,
              "median": 1.457142857142857,
              "min": 1.0679164105716041,
              "max": 3.1748135874067938,
              "p5": 1.133491887113349,
              "p95": 3.1703051245639506,
              "count": 5
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.039649030856762e-09,
              "median": 4.805378632527252e-10,
              "min": 5.919019087588772e-11,
              "max": 4.233890806636052e-09,
              "p5": 6.213957889097612e-11,
              "p95": 3.2404784404695508e-09,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0063660696104108315,
              "median": 0.005603176165210161,
              "min": 0.0015868200929542943,
              "max": 0.012450707366112913,
              "p5": 0.0015902023159336696,
              "p95": 0.011764152796610857,
              "count": 8
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": -0.3936267071320182,
            "market": 0.05789367348833019,
            "sector": -0.018690780212795244,
            "peers": -0.16425263928823552,
            "vs_market": -0.4515203806203484,
            "vs_sector": -0.37493592691922295,
            "vs_peers": -0.22937406784378267
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 78.91870867366784,
          "score_pca_percentile": 78.91870867366784,
          "rank_pca": 543,
          "total": 2571,
          "adv_notional_sgd": 17694330.0,
          "adv_volume_shares": 263750.0,
          "free_float_shares": 87998408.0,
          "turnover_ratio": 0.0029972133132226664,
          "votes": 1004.5,
          "trades": 1004.5,
          "spread_pct": 0.00336088351141933,
          "spread_ticks": 4.689419795221843,
          "amihud": 9.471590915798316e-10,
          "volatility": 0.47005191867575113
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.6316115198194229,
          "loadings": {
            "log_adv": 0.4954069852717174,
            "log_trades": 0.4485237838921855,
            "log_turnover": 0.44887204157703225,
            "neg_spread": 0.45920151380455215,
            "neg_amihud": 0.3551445957396367,
            "neg_vol": 0.12214135398802974
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
          "peer_median_adv": 31606793.12,
          "peer_median_score_pca": 83.8389731621937,
          "peer_median_trades": 1625.0,
          "peer_median_volatility": 0.3495343899961634,
          "peer_median_spread_pct": 0.0037657888690080608,
          "peer_median_spread_ticks": 2.197324182478552,
          "peer_median_amihud": 3.8204896698757365e-10,
          "peer_median_turnover_ratio": 0.005442997243850831,
          "target_vs_peer": {
            "score_pca_delta": -4.92,
            "adv_delta_pct": -44.0,
            "trades_delta_pct": -38.18,
            "volatility_delta_pct": -34.48,
            "spread_pct_delta_pct": 10.75,
            "spread_ticks_delta_pct": 113.42,
            "amihud_delta_pct": -147.92,
            "turnover_ratio_delta_pct": -44.93
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1405",
            "score_pca": 78.91870867366784,
            "rank_pca": 543,
            "adv": 17694330.0,
            "trades": 1004.5,
            "volatility": 0.47005191867575113,
            "spread_pct": 0.00336088351141933,
            "spread_ticks": 4.689419795221843,
            "amihud": 9.471590915798316e-10,
            "turnover_ratio": 0.0029972133132226664,
            "is_target": true
          },
          {
            "ticker": "999",
            "score_pca": 78.64644107351225,
            "rank_pca": 550,
            "adv": 12095023.44,
            "trades": 671.0,
            "volatility": 0.3779195831473037,
            "spread_pct": 0.004350692035989474,
            "spread_ticks": 3.407008934834204,
            "amihud": 1.1639684611542962e-09,
            "turnover_ratio": 0.008057906579922365,
            "is_target": false
          },
          {
            "ticker": "6831",
            "score_pca": 77.09062621548036,
            "rank_pca": 590,
            "adv": 7205550.0,
            "trades": 640.0,
            "volatility": 0.44743988455689604,
            "spread_pct": 0.004257254325865136,
            "spread_ticks": 3.013875932429939,
            "amihud": 2.381457617404044e-09,
            "turnover_ratio": 0.006440107159487606,
            "is_target": false
          },
          {
            "ticker": "9658",
            "score_pca": 71.80085569817192,
            "rank_pca": 726,
            "adv": 4845738.85,
            "trades": 203.5,
            "volatility": 0.31602176488022643,
            "spread_pct": 0.005532704459051577,
            "spread_ticks": null,
            "amihud": 2.356076164447711e-09,
            "turnover_ratio": 0.002034691156592827,
            "is_target": false
          },
          {
            "ticker": "6862",
            "score_pca": 96.38273045507584,
            "rank_pca": 94,
            "adv": 277364655.03,
            "trades": 6876.5,
            "volatility": 0.3943479531163428,
            "spread_pct": 0.0008693284228158758,
            "spread_ticks": null,
            "amihud": 4.4080617806489793e-11,
            "turnover_ratio": 0.010910826173484609,
            "is_target": false
          },
          {
            "ticker": "9987",
            "score_pca": 87.08673667833527,
            "rank_pca": 333,
            "adv": 187103615.0,
            "trades": 1881.0,
            "volatility": 0.32114919684502313,
            "spread_pct": 0.0006994986345498334,
            "spread_ticks": 1.3665723293450442,
            "amihud": 6.185338771493941e-11,
            "turnover_ratio": 0.0014211874271473223,
            "is_target": false
          },
          {
            "ticker": "880",
            "score_pca": 82.4581874756904,
            "rank_pca": 452,
            "adv": 27442992.634999998,
            "trades": 1369.0,
            "volatility": 0.26514577298833536,
            "spread_pct": 0.004686557407003469,
            "spread_ticks": 1.0837587545577545,
            "amihud": 3.4983014009480976e-10,
            "turnover_ratio": 0.004445887328214056,
            "is_target": false
          },
          {
            "ticker": "1128",
            "score_pca": 85.219758848697,
            "rank_pca": 381,
            "adv": 35770593.605000004,
            "trades": 1966.5,
            "volatility": 0.248106756365232,
            "spread_pct": 0.0023443143907154592,
            "spread_ticks": 1.3807724325271644,
            "amihud": 2.774979268865241e-10,
            "turnover_ratio": 0.00402483858283738,
            "is_target": false
          },
          {
            "ticker": "2643",
            "score_pca": 86.65888759237652,
            "rank_pca": 344,
            "adv": 44874931.0,
            "trades": 1959.5,
            "volatility": 0.6212053057148874,
            "spread_pct": 0.0032743234121509856,
            "spread_ticks": 3.989769022235161,
            "amihud": 4.142677938803375e-10,
            "turnover_ratio": 0.011015864153488007,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Restaurants",
          "sector_count": 41,
          "market_count": 2571,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7497124911098317,
              "median": 0.600450713210492,
              "min": 0.0,
              "max": 33.69087851914916,
              "p5": 0.22432053146727332,
              "p95": 1.6202593347829233,
              "count": 2570
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 55943691.61778561,
              "median": 215639.7,
              "min": 0.0,
              "max": 11892751420.0,
              "p5": 0.0,
              "p95": 221773885.6,
              "count": 2571
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.042123831007698585,
              "median": 0.027555279059267378,
              "min": 0.0005759578485903171,
              "max": 0.586235634471959,
              "p5": 0.0014136838324515758,
              "p95": 0.13460163363653982,
              "count": 2571
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00354261105223898,
              "median": 0.0008377733832704165,
              "min": 0.0,
              "max": 0.18138989186589122,
              "p5": 0.0,
              "p95": 0.014267971626089997,
              "count": 2555
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.175288930181757e-07,
              "median": 4.733333459555602e-08,
              "min": 0.0,
              "max": 1.9277442665615598e-05,
              "p5": 5.132203469978147e-11,
              "p95": 3.11856710064067e-06,
              "count": 2571
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1018.5176973940102,
              "median": 19.0,
              "min": 0.0,
              "max": 81442.5,
              "p5": 0.0,
              "p95": 5570.75,
              "count": 2571
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7427415977912069,
              "median": 0.5424244336350452,
              "min": 0.1336613930071243,
              "max": 2.983008082465917,
              "p5": 0.2588949031581039,
              "p95": 1.4922425179688856,
              "count": 41
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 12805547.93292683,
              "median": 25050.0,
              "min": 0.0,
              "max": 277364655.03,
              "p5": 0.0,
              "p95": 17694330.0,
              "count": 41
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.06363736025712298,
              "median": 0.04747515962210914,
              "min": 0.0006994986345498334,
              "max": 0.2543502417892648,
              "p5": 0.00336088351141933,
              "p95": 0.16590415680310072,
              "count": 41
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0013953020206131186,
              "median": 0.0003744111269228163,
              "min": 0.0,
              "max": 0.010910826173484609,
              "p5": 0.0,
              "p95": 0.006520997130509339,
              "count": 40
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 8.511317511750131e-07,
              "median": 4.4527245330873093e-07,
              "min": 4.4080617806489793e-11,
              "max": 3.6266924564796893e-06,
              "p5": 9.471590915798316e-10,
              "p95": 3.0235839548478103e-06,
              "count": 41
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 314.719512195122,
              "median": 6.0,
              "min": 0.0,
              "max": 6876.5,
              "p5": 0.0,
              "p95": 1004.5,
              "count": 41
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 74587887.445,
              "median": 31606793.12,
              "min": 4845738.85,
              "max": 277364655.03,
              "p5": 5671672.7524999995,
              "p95": 245773291.01949993,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1945.875,
              "median": 1625.0,
              "min": 203.5,
              "max": 6876.5,
              "p5": 356.275,
              "p95": 5157.999999999997,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3739170272017808,
              "median": 0.3495343899961634,
              "min": 0.248106756365232,
              "max": 0.6212053057148874,
              "p5": 0.25407041218331816,
              "p95": 0.5603874083095903,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.003251834136017726,
              "median": 0.0037657888690080608,
              "min": 0.0006994986345498334,
              "max": 0.005532704459051577,
              "p5": 0.0007589390604429482,
              "p95": 0.005236552990834739,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.3736262343215446,
              "median": 2.197324182478552,
              "min": 1.0837587545577545,
              "max": 3.989769022235161,
              "p5": 1.154462148254577,
              "p95": 3.844079000384922,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 8.81129013673644e-10,
              "median": 3.8204896698757365e-10,
              "min": 4.4080617806489793e-11,
              "max": 2.381457617404044e-09,
              "p5": 5.030108727444716e-11,
              "p95": 2.3725741088693274e-09,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0060439135701467715,
              "median": 0.005442997243850831,
              "min": 0.0014211874271473223,
              "max": 0.011015864153488007,
              "p5": 0.001635913732453249,
              "p95": 0.010979100860486818,
              "count": 8
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": -0.556,
            "market": 0.14932016380160373,
            "sector": -0.015519929309790625,
            "peers": -0.2044029911900701,
            "vs_market": -0.7053201638016038,
            "vs_sector": -0.5404800706902094,
            "vs_peers": -0.35159700880992995
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "1D score 89.7 vs peer median 79.0 (+10.7 pts).",
        "market_comparison": "The stock fell 3.3% compared with peers down 1.1%, which matters because weaker price action can make near-term trading conditions feel less supportive."
      },
      "30d": {
        "liquidity": "Monthly tradability is average rather than strong, with a 1M score of 79.0 and current conditions looking less comfortable because the bid side is light.",
        "market_comparison": "The stock is down 21.4% over 1M compared with peers down 4.2% and the market up 3.4%, which matters because weaker momentum is not helping access."
      },
      "3m": {
        "liquidity": "Over 3M, liquidity has stayed around an average level rather than improving, with a score of 77.4 that sits below the peer median of 82.9.",
        "market_comparison": "The stock fell 39.4% compared with peers down 16.4%, which matters because sustained underperformance can leave trading conditions feeling thinner."
      },
      "6m": {
        "liquidity": "Over 6M, tradability is average for its size, with a score of 78.9 that is 4.9 points below the peer median of 83.8.",
        "market_comparison": "The stock fell 55.6% over 6M compared with peers down 20.4%, which matters because relative underperformance has not been offset by stronger liquidity standing."
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
          "median": 0.5199963686698914,
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
          "plain_english": "Market explains about 52.0% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.12185736283756902,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "12.2%",
          "display_range": null,
          "display_text": "12.2%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 12.2,
          "plain_english": "Sector explains about 12.2% of price moves in the current state."
        },
        "company_share": {
          "median": 0.35814626849253955,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "35.8%",
          "display_range": null,
          "display_text": "35.8%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 35.8,
          "plain_english": "Company-specific explains about 35.8% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 11.231648599099204,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "11.23",
          "display_range": null,
          "display_text": "11.23",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Very high",
          "plain_english": "Very high market link: a 1% market move has lined up with about a 11.23% stock move in the same direction in this state. The multiplier is unusually large and comes from only 251 trading days of history.",
          "value_num": 11.23
        },
        "beta_stock_lag": {
          "median": -1.5021731109766814,
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
        "beta_sector": {
          "median": -0.10128210473129194,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.10",
          "display_range": null,
          "display_text": "-0.10",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Weak",
          "plain_english": "Weak sector link: a 1% sector move has lined up with about a 0.10% stock move in the opposite direction in this state.",
          "value_num": -0.1
        },
        "beta_market_lag": {
          "median": 7.445894990857009,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "7.45",
          "display_range": null,
          "display_text": "7.45",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 7.45
        },
        "beta_sector_lag": {
          "median": -7.865834371973301,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-7.87",
          "display_range": null,
          "display_text": "-7.87",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -7.87
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
          "period_label": "2025-05-02 to 2025-05-30",
          "n_obs": 20,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5952043105829686,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "59.5%",
            "display_range": null,
            "display_text": "59.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 59.5,
            "plain_english": "Company-specific explains about 59.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.22359478407947775,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "22.4%",
              "display_range": null,
              "display_text": "22.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 22.4,
              "plain_english": "Market explains about 22.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1812009053375536,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "18.1%",
              "display_range": null,
              "display_text": "18.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 18.1,
              "plain_english": "Sector explains about 18.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5952043105829686,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "59.5%",
              "display_range": null,
              "display_text": "59.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 59.5,
              "plain_english": "Company-specific explains about 59.5% of price moves in the current state."
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
            "median": 0.5425214252434535,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "54.3%",
            "display_range": null,
            "display_text": "54.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 54.3,
            "plain_english": "Company-specific explains about 54.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.17205251449523307,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "17.2%",
              "display_range": null,
              "display_text": "17.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 17.2,
              "plain_english": "Market explains about 17.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.28542606026131345,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "28.5%",
              "display_range": null,
              "display_text": "28.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 28.5,
              "plain_english": "Sector explains about 28.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5425214252434535,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "54.3%",
              "display_range": null,
              "display_text": "54.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 54.3,
              "plain_english": "Company-specific explains about 54.3% of price moves in the current state."
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
            "median": 0.5936573722066111,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "59.4%",
            "display_range": null,
            "display_text": "59.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 59.4,
            "plain_english": "Company-specific explains about 59.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.19052348444609088,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "19.1%",
              "display_range": null,
              "display_text": "19.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 19.1,
              "plain_english": "Market explains about 19.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.215819143347298,
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
              "plain_english": "Sector explains about 21.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5936573722066111,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "59.4%",
              "display_range": null,
              "display_text": "59.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 59.4,
              "plain_english": "Company-specific explains about 59.4% of price moves in the current state."
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
            "median": 0.6832682730183449,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "68.3%",
            "display_range": null,
            "display_text": "68.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 68.3,
            "plain_english": "Company-specific explains about 68.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.14462247042040258,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "14.5%",
              "display_range": null,
              "display_text": "14.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 14.5,
              "plain_english": "Market explains about 14.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.17210925656125253,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "17.2%",
              "display_range": null,
              "display_text": "17.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 17.2,
              "plain_english": "Sector explains about 17.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6832682730183449,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "68.3%",
              "display_range": null,
              "display_text": "68.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 68.3,
              "plain_english": "Company-specific explains about 68.3% of price moves in the current state."
            }
          },
          "summary": "Aug: Still clearly company-driven."
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
            "median": 0.4597144198007711,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "46.0%",
            "display_range": null,
            "display_text": "46.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 46.0,
            "plain_english": "Company-specific explains about 46.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3380425541985937,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "33.8%",
              "display_range": null,
              "display_text": "33.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 33.8,
              "plain_english": "Market explains about 33.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.20224302600063535,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.2%",
              "display_range": null,
              "display_text": "20.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 20.2,
              "plain_english": "Sector explains about 20.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4597144198007711,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.0%",
              "display_range": null,
              "display_text": "46.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 46.0,
              "plain_english": "Company-specific explains about 46.0% of price moves in the current state."
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
            "median": 0.5865813229453403,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "58.7%",
            "display_range": null,
            "display_text": "58.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 58.7,
            "plain_english": "Company-specific explains about 58.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.1959652532773934,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "19.6%",
              "display_range": null,
              "display_text": "19.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 19.6,
              "plain_english": "Market explains about 19.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2174534237772664,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "21.7%",
              "display_range": null,
              "display_text": "21.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 21.7,
              "plain_english": "Sector explains about 21.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5865813229453403,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "58.7%",
              "display_range": null,
              "display_text": "58.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 58.7,
              "plain_english": "Company-specific explains about 58.7% of price moves in the current state."
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
            "median": 0.4652358181571501,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "46.5%",
            "display_range": null,
            "display_text": "46.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 46.5,
            "plain_english": "Company-specific explains about 46.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.24856163258771155,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "24.9%",
              "display_range": null,
              "display_text": "24.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 24.9,
              "plain_english": "Market explains about 24.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2862025492551383,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "28.6%",
              "display_range": null,
              "display_text": "28.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 28.6,
              "plain_english": "Sector explains about 28.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4652358181571501,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.5%",
              "display_range": null,
              "display_text": "46.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 46.5,
              "plain_english": "Company-specific explains about 46.5% of price moves in the current state."
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
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5142152693991653,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "51.4%",
            "display_range": null,
            "display_text": "51.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
            "kind": "share_pct",
            "value_pct": 51.4,
            "plain_english": "Company-specific explains about 51.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.20686468402264158,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.7%",
              "display_range": null,
              "display_text": "20.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 20.7,
              "plain_english": "Market explains about 20.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.27892004657819314,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.9%",
              "display_range": null,
              "display_text": "27.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 27.9,
              "plain_english": "Sector explains about 27.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5142152693991653,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "51.4%",
              "display_range": null,
              "display_text": "51.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 51.4,
              "plain_english": "Company-specific explains about 51.4% of price moves in the current state."
            }
          },
          "summary": "Dec: Mostly company-driven."
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
            "median": 0.544236572178869,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "54.4%",
            "display_range": null,
            "display_text": "54.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 54.4,
            "plain_english": "Company-specific explains about 54.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.29247673795306034,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "29.2%",
              "display_range": null,
              "display_text": "29.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 29.2,
              "plain_english": "Market explains about 29.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1632866898680706,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "16.3%",
              "display_range": null,
              "display_text": "16.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 16.3,
              "plain_english": "Sector explains about 16.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.544236572178869,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "54.4%",
              "display_range": null,
              "display_text": "54.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 54.4,
              "plain_english": "Company-specific explains about 54.4% of price moves in the current state."
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
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.49295013583112424,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "49.3%",
            "display_range": null,
            "display_text": "49.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
            "kind": "share_pct",
            "value_pct": 49.3,
            "plain_english": "Company-specific explains about 49.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2531415244428352,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "25.3%",
              "display_range": null,
              "display_text": "25.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 25.3,
              "plain_english": "Market explains about 25.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2539083397260405,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "25.4%",
              "display_range": null,
              "display_text": "25.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 25.4,
              "plain_english": "Sector explains about 25.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.49295013583112424,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "49.3%",
              "display_range": null,
              "display_text": "49.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 49.3,
              "plain_english": "Company-specific explains about 49.3% of price moves in the current state."
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
            "median": 0.44012712779530583,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "44.0%",
            "display_range": null,
            "display_text": "44.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 44.0,
            "plain_english": "Company-specific explains about 44.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.42070597504461615,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.1%",
              "display_range": null,
              "display_text": "42.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 42.1,
              "plain_english": "Market explains about 42.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1391668971600779,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "13.9%",
              "display_range": null,
              "display_text": "13.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 13.9,
              "plain_english": "Sector explains about 13.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.44012712779530583,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.0%",
              "display_range": null,
              "display_text": "44.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 44.0,
              "plain_english": "Company-specific explains about 44.0% of price moves in the current state."
            }
          },
          "summary": "Mar: More mixed, though company-driven still has the largest share."
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-30",
          "n_obs": 19,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.46313301322275874,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "46.3%",
            "display_range": null,
            "display_text": "46.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
            "kind": "share_pct",
            "value_pct": 46.3,
            "plain_english": "Company-specific explains about 46.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.37492558583309615,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.5%",
              "display_range": null,
              "display_text": "37.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 37.5,
              "plain_english": "Market explains about 37.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.161941400944145,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "16.2%",
              "display_range": null,
              "display_text": "16.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 16.2,
              "plain_english": "Sector explains about 16.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.46313301322275874,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.3%",
              "display_range": null,
              "display_text": "46.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 46.3,
              "plain_english": "Company-specific explains about 46.3% of price moves in the current state."
            }
          },
          "summary": "Apr: Mostly company-driven."
        },
        {
          "month_key": "2026-05",
          "month_label": "May 2026",
          "month_short_label": "May",
          "period_label": "2026-05-04 to 2026-05-15",
          "n_obs": 10,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4916790637576614,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "49.2%",
            "display_range": null,
            "display_text": "49.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
            "kind": "share_pct",
            "value_pct": 49.2,
            "plain_english": "Company-specific explains about 49.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.31212128905225217,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "31.2%",
              "display_range": null,
              "display_text": "31.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
              "kind": "share_pct",
              "value_pct": 31.2,
              "plain_english": "Market explains about 31.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.19619964719008637,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "19.6%",
              "display_range": null,
              "display_text": "19.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
              "kind": "share_pct",
              "value_pct": 19.6,
              "plain_english": "Sector explains about 19.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4916790637576614,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "49.2%",
              "display_range": null,
              "display_text": "49.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
              "kind": "share_pct",
              "value_pct": 49.2,
              "plain_english": "Company-specific explains about 49.2% of price moves in the current state."
            }
          },
          "summary": "May: Mostly company-driven."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5020080321285141,
          "expected_duration_days": 11.363636363636363,
          "current_probability": 0.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.015676224250498208,
            "low": 0.015676224250498208,
            "high": 0.015676224250498208
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": 0.0
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 10.333333333333334,
          "current_probability": 1.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.030062203461388437,
            "low": 0.030062203461388437,
            "high": 0.030062203461388437
          },
          "volatility_label": "High Volatility",
          "current_probability_display": null
        }
      ],
      "transitions": {
        "mean": [
          [
            0.912,
            0.088
          ],
          [
            0.08943089430894309,
            0.9105691056910569
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            114.0,
            11.0
          ],
          [
            11.0,
            112.0
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
        "market_link_display": "11.23",
        "sector_link_display": "-0.10",
        "market_link_explainer": "Very high market link. A 1% market move has lined up with about a 11.23% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "Weak sector link. A 1% sector move has lined up with about a 0.10% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "-1.50",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "High Volatility",
        "dominant_driver": "market",
        "dominant_driver_label": "Market",
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
        "stay_probability": 0.9105691056910569,
        "effective_days": 124.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 10.3 days.",
        "expected_duration_days": 10.3
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
          "current_probability": 0.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.015676224250498208,
            "low": 0.015676224250498208,
            "high": 0.015676224250498208
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 10.333333333333334,
          "current_probability": 1.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.030062203461388437,
            "low": 0.030062203461388437,
            "high": 0.030062203461388437
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.912,
          0.088
        ],
        [
          0.08943089430894309,
          0.9105691056910569
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.912,
            0.088
          ],
          [
            0.08943089430894309,
            0.9105691056910569
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            114.0,
            11.0
          ],
          [
            11.0,
            112.0
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
        "text": "Liquidity score: 78.9 — Strong",
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
    "liq_subtitle": "Structural liquidity is middle-of-the-pack for its size, and the displayed book points to weaker near-term buy-side access.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Performance has materially lagged, with the stock down 21.4% over one month compared with peers down 4.2% and the market up 3.4%.",
    "perf_insight": "The weak share-price move sits alongside only middling liquidity, with a 6M score of 78.9 compared with a peer median of 83.8. That matters because weaker performance is not being offset by standout peer-relative access.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Market factors are the main driver now, accounting for 52.0% of trading.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly market-driven, accounting for about 52.0% of price changes. Other influences are sector 12.2%, and company-specific 35.8%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 52.0%, sector 12.2%, and company-specific 35.8%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has been consistently company-driven across Mar to May."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 52.0%, sector 12.2%, and company-specific 35.8%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "That matters because broader market moves are still shaping the tape while the displayed bid is light at 0.46x of ask depth. Day-to-day trading can therefore feel thinner on the buy side.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now is the market, accounting for 52.0% of current price moves.",
      "The monthly pattern had been mostly market in April and May, so the mix is more balanced now."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Current conditions look mixed, with broader market influence still dominant and the displayed book skewed to the ask side.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on May 15, 2025 to May 15, 2026 (242 trading days • 309,372 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on the displayed order book.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is lighter than the monthly baseline, so day-to-day access may feel weaker than the 1M score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The displayed book is bid-light, with bid depth at 0.46x of ask depth and a spread of 2.8 ticks.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 30.0% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Trading conditions are best judged through the current book, which shows lighter buy-side depth than sell-side depth.",
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
    "intraday_insight": "Displayed bid depth is only 0.46x of ask depth, while the spread is 2.8 ticks. That matters because immediate buy-side access looks thinner than the 6M liquidity score alone would imply.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "The current trading picture is better explained by market-driven moves and a bid-light book.",
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
    "exec_subtitle": "Liquidity is mixed for the stock’s size, with peer standing slightly below the group and the current book showing thinner buy-side support.",
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
        "value": "78.9/100",
        "sub": "Peer median 83.8 (-4.9 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "HK$17.7M",
        "sub": "Peer median HK$31.6M",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "0.34%",
        "sub": "4.69 ticks; peers 0.38%",
        "interp": {
          "text": "Tighter",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity looks middle-of-the-pack for the stock’s size, with a 6M score of 78.9 compared with a peer median of 83.8. Near-term conditions look weaker than that broader profile because displayed bid depth is only 0.46x of ask depth and the spread is 2.8 ticks. That matters because access remains workable overall, but buy-side trading can feel thinner day to day.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "39.930",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "0.35%",
        "note": "2.80 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.46x",
        "note": "Bid depth / ask depth on the displayed order book",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-0.24% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-0.50% with 100.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-1.15% with 77.2% fill.",
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
        "value": "79",
        "suffix": "/100",
        "bar_pct": 79,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Rank 543/2571",
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
        "value": "0.34",
        "suffix": "%",
        "bar_pct": 3,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "0.34% • 4.69 ticks vs peers 0.38%",
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
        "value": "17.7M",
        "value_prefix": "HK$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-red-400",
        "color_bar": "bg-red-500",
        "subtext": "Peer median HK$31.6M",
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
        "value": "52.0",
        "suffix": "market",
        "bar_pct": 52,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Sector 12.2% • Company 35.8%",
        "interpretation": {
          "text": "Market",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Liquidity is mixed for the stock’s size, with a 6M score of 78.9 compared with a peer median of 83.8. That leaves access broadly workable, but not strong enough to rank well within the peer group.",
      "Current trading conditions look weaker than the broader profile, with displayed bid depth at 0.46x of ask depth and a spread of 2.8",
      "The tape is under pressure, with a 1M return of -21.4% compared with peers at -4.2% and the market at +3.4%, while market factors account for 52.0% of trading. That matters because broader moves are dominating at a time when price performance is already weak."
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
      "overall": "6M liquidity is strong: score 78.9 vs peer median 83.8 (-4.9 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "strengths": [
        "6M score 78.9 vs peer median 83.8 (-4.9 pts)."
      ],
      "concerns": [],
      "peer_context": "Primary-period score gap vs peers: -4.9 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is -55.6%, worse than market, sector, and peers, which suggests weaker price performance than comparable names.",
        "vs_market": "Worse than market: -55.6% vs market 14.9%.",
        "vs_sector": "Worse than sector: -55.6% vs sector -1.6%.",
        "vs_peers": "Worse than peers: -55.6% vs peers -20.4%."
      },
      "adv": {
        "insight": "ADV is HK$17.7M, better than market and sector, but worse than peers, which shows trading size is uneven across comparison groups.",
        "vs_market": "Better than market: HK$17.7M vs market HK$215.6K.",
        "vs_sector": "Better than sector: HK$17.7M vs sector HK$25.1K.",
        "vs_peers": "Worse than peers: HK$17.7M vs peers HK$31.6M."
      },
      "spread": {
        "insight": "Spread is 0.34%, better than market, sector, and peers, which keeps trading costs more competitive than comparable names.",
        "vs_market": "Better than market: 0.34% vs market 2.76%.",
        "vs_sector": "Better than sector: 0.34% vs sector 4.75%.",
        "vs_peers": "Better than peers: 0.34% vs peers 0.38%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.30%, better than market and sector, but worse than peers, which shows turnover is mixed across comparison groups.",
        "vs_market": "Better than market: 0.30% vs market 0.08%.",
        "vs_sector": "Better than sector: 0.30% vs sector 0.04%.",
        "vs_peers": "Worse than peers: 0.30% vs peers 0.54%."
      },
      "volatility": {
        "insight": "Volatility is 47.01%, better than market and sector, but worse than peers, which shows price variability is mixed across comparison groups.",
        "vs_market": "Better than market: 47.01% vs market 60.05%.",
        "vs_sector": "Better than sector: 47.01% vs sector 54.24%.",
        "vs_peers": "Worse than peers: 47.01% vs peers 34.95%."
      },
      "trades": {
        "insight": "Trades is 1004, better than market and sector, but worse than peers, which shows trading frequency is mixed across comparison groups.",
        "vs_market": "Better than market: 1004 vs market 19.",
        "vs_sector": "Better than sector: 1004 vs sector 6.",
        "vs_peers": "Worse than peers: 1004 vs peers 1625."
      },
      "amihud": {
        "insight": "Price impact is 9.47e-10, better than market and sector, but worse than peers, which shows price impact is mixed across comparison groups.",
        "vs_market": "Better than market: 9.47e-10 vs market 4.73e-08.",
        "vs_sector": "Better than sector: 9.47e-10 vs sector 4.45e-07.",
        "vs_peers": "Worse than peers: 9.47e-10 vs peers 3.82e-10."
      }
    },
    "performance": {
      "overall": "Recent performance is notably weaker than both peers and the market, with a one-month return of -21.4% compared with -4.2% for peers and +3.4% for the market. Liquidity broadly confirms that pressure rather than offsetting it, as the six-month liquidity score of 78.9 trails the peer median of 83.8 and the order book is skewed to the offer with bid depth at 0.46x ask depth alongside a 2.8-tick spread.",
      "conclusion": "The sell-off looks partly broad-market in character, but the scale of underperformance relative to peers suggests stock-specific pressure is also present."
    },
    "drivers": {
      "overall": "The stock is being driven mainly by the market now, with 52.0% of moves explained by broader conditions. That matters because the recent sell-off has been much steeper than peers and the market, with a 1M return of -21.4% compared with -4.2% for peers and +3.4% for the market, so external pressure is landing on a weak tape.",
      "beta": "Current trading conditions look mixed rather than settled. Displayed bid depth is only 0.46x of ask depth and spreads are 2.8 ticks, which means buying interest is thinner and day-to-day access can feel weaker when market moves are setting the tone.",
      "rolling_change": "This looks more balanced now than it did through April and May, when the stock was mostly market. March was already more mixed, so the current market-led pattern reads more like a shift in emphasis than a fully established new regime."
    },
    "regime": {
      "overall": "Short expected duration points to a short-lived state rather than a durable market backdrop.",
      "current": "The stock is currently in a high-volatility state, while recent price performance is already weak at -21.4% over one month compared with -4.2% for peers and +3.4% for the market. That leaves the tape under pressure rather than supported by stronger momentum.",
      "transitions": "This looks more settled than short-lived because high volatility typically lasts about 10.3 days, although the broader read is still mixed. That points to a state that can persist even if day-to-day conditions still move around.",
      "trading_implications": "Trading conditions look less steady in this backdrop because displayed bid depth is only 0.46x of ask depth and the spread is 2.8 ticks. That combination can make buy-side access feel thinner while volatility remains elevated."
    },
    "execution": {
      "overall": "The current book looks bid-light, with materially less depth on the bid than the ask at 0.46x and a 2.8 tick spread. That matters because displayed liquidity is not offering even visible support on both sides of the market right now.",
      "concern": "The clearest stress point is the thin buy side, as bid depth is less than half of ask depth. The trade-size history is broad at 242 trading days and 309,372 trades, which supports reading this imbalance as a meaningful departure from a typical book shape rather than a one-off print.",
      "peer_context": "This makes the broader liquidity picture look weaker at the screen than the six-month score alone, especially with the stock already 4.9 points below the peer median on liquidity. In other words, a middling peer-relative profile is currently showing up with thinner immediate visible support on the buy side."
    },
    "trader_composition": {
      "overall": "By trade count and value, flow looks mainly institution-like.",
      "retail_heavy": "By trade count and value, flow leans institution-like: institution-like trades are 46.5% of count and 60.4% of value, compared with retail-like at 26.0% of count and 13.7% of value.",
      "institutional_gap": "",
      "peer_comparison": "The mix stands out as institution-leaning relative to the peer comparison in the report tables, which supports the view that trading support is coming from larger participants rather than broad retail activity."
    },
    "price_moving": {
      "overall": "Price-moving activity looks meaningful, with 30.0% of total trades moving price. That matters because execution quality can still shift even when overall participation looks solid. The signal is mixed: the trade mix leans institution-like by count and value, but the stock is down 21.4% over one month compared with peers down 4.2% and the market up 3.4%. That suggests larger participation has not prevented weaker price action.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short-selling data is unavailable for this report.",
      "level": "N/A",
      "correlation": "N/A",
      "trend": "There is no clear sign that short activity is rising or falling in a way that changes the picture. What matters more near term is that displayed bid depth is only 0.46x of ask depth, so trading conditions can still feel weaker on the buy side even without short activity emerging as the main issue.",
      "peaks": "N/A"
    },
    "intraday": {
      "overall": "Trading is concentrated in the continuous session, with 89.2% of activity there compared with 0.1% at the open and 2.1% at the close. That points to liquidity being available through the day rather than only around auction periods.",
      "hhi_interpretation": "Moderately concentrated - some intervals dominate",
      "best_times": "The continuous session is clearly the best window for liquidity because it carries the vast majority of activity. That matters more than the open or close for day-to-day execution.",
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
        "1405",
        "999",
        "6831",
        "9658",
        "6862",
        "9987",
        "880",
        "1128",
        "2643"
      ],
      "scores": [
        78.91870867366784,
        78.64644107351225,
        77.09062621548036,
        71.80085569817192,
        96.38273045507584,
        87.08673667833527,
        82.4581874756904,
        85.219758848697,
        86.65888759237652
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
        17694330.0,
        12095023.44,
        7205550.0,
        4845738.85,
        277364655.03,
        187103615.0,
        27442992.634999998,
        35770593.605000004,
        44874931.0
      ],
      "total": 2571
    },
    "market_comparison": {
      "sector_name": "Restaurants",
      "sector_count": 41,
      "market_count": 2571,
      "company": {
        "volatility": 0.47005191867575113,
        "adv": 17694330.0,
        "spread_pct": 0.00336088351141933,
        "turnover_ratio": 0.0029972133132226664,
        "amihud": 9.471590915798316e-10,
        "trades": 1004.5
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.7497124911098317,
          "median": 0.600450713210492,
          "min": 0.0,
          "max": 33.69087851914916,
          "p5": 0.22432053146727332,
          "p95": 1.6202593347829233,
          "count": 2570
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 55943691.61778561,
          "median": 215639.7,
          "min": 0.0,
          "max": 11892751420.0,
          "p5": 0.0,
          "p95": 221773885.6,
          "count": 2571
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.042123831007698585,
          "median": 0.027555279059267378,
          "min": 0.0005759578485903171,
          "max": 0.586235634471959,
          "p5": 0.0014136838324515758,
          "p95": 0.13460163363653982,
          "count": 2571
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.00354261105223898,
          "median": 0.0008377733832704165,
          "min": 0.0,
          "max": 0.18138989186589122,
          "p5": 0.0,
          "p95": 0.014267971626089997,
          "count": 2555
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 6.175288930181757e-07,
          "median": 4.733333459555602e-08,
          "min": 0.0,
          "max": 1.9277442665615598e-05,
          "p5": 5.132203469978147e-11,
          "p95": 3.11856710064067e-06,
          "count": 2571
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1018.5176973940102,
          "median": 19.0,
          "min": 0.0,
          "max": 81442.5,
          "p5": 0.0,
          "p95": 5570.75,
          "count": 2571
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.7427415977912069,
          "median": 0.5424244336350452,
          "min": 0.1336613930071243,
          "max": 2.983008082465917,
          "p5": 0.2588949031581039,
          "p95": 1.4922425179688856,
          "count": 41
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 12805547.93292683,
          "median": 25050.0,
          "min": 0.0,
          "max": 277364655.03,
          "p5": 0.0,
          "p95": 17694330.0,
          "count": 41
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.06363736025712298,
          "median": 0.04747515962210914,
          "min": 0.0006994986345498334,
          "max": 0.2543502417892648,
          "p5": 0.00336088351141933,
          "p95": 0.16590415680310072,
          "count": 41
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0013953020206131186,
          "median": 0.0003744111269228163,
          "min": 0.0,
          "max": 0.010910826173484609,
          "p5": 0.0,
          "p95": 0.006520997130509339,
          "count": 40
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 8.511317511750131e-07,
          "median": 4.4527245330873093e-07,
          "min": 4.4080617806489793e-11,
          "max": 3.6266924564796893e-06,
          "p5": 9.471590915798316e-10,
          "p95": 3.0235839548478103e-06,
          "count": 41
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 314.719512195122,
          "median": 6.0,
          "min": 0.0,
          "max": 6876.5,
          "p5": 0.0,
          "p95": 1004.5,
          "count": 41
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 74587887.445,
          "median": 31606793.12,
          "min": 4845738.85,
          "max": 277364655.03,
          "p5": 5671672.7524999995,
          "p95": 245773291.01949993,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1945.875,
          "median": 1625.0,
          "min": 203.5,
          "max": 6876.5,
          "p5": 356.275,
          "p95": 5157.999999999997,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.3739170272017808,
          "median": 0.3495343899961634,
          "min": 0.248106756365232,
          "max": 0.6212053057148874,
          "p5": 0.25407041218331816,
          "p95": 0.5603874083095903,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.003251834136017726,
          "median": 0.0037657888690080608,
          "min": 0.0006994986345498334,
          "max": 0.005532704459051577,
          "p5": 0.0007589390604429482,
          "p95": 0.005236552990834739,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 2.3736262343215446,
          "median": 2.197324182478552,
          "min": 1.0837587545577545,
          "max": 3.989769022235161,
          "p5": 1.154462148254577,
          "p95": 3.844079000384922,
          "count": 6
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 8.81129013673644e-10,
          "median": 3.8204896698757365e-10,
          "min": 4.4080617806489793e-11,
          "max": 2.381457617404044e-09,
          "p5": 5.030108727444716e-11,
          "p95": 2.3725741088693274e-09,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0060439135701467715,
          "median": 0.005442997243850831,
          "min": 0.0014211874271473223,
          "max": 0.011015864153488007,
          "p5": 0.001635913732453249,
          "p95": 0.010979100860486818,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": -0.21415929203539796,
        "market": 0.03432254254015166,
        "sector": 0.02290699473847102,
        "peers": -0.04220492698635214
      },
      {
        "horizon": "3M",
        "stock": -0.3936267071320182,
        "market": 0.05789367348833019,
        "sector": -0.018690780212795244,
        "peers": -0.16425263928823552
      },
      {
        "horizon": "6M",
        "stock": -0.556,
        "market": 0.14932016380160373,
        "sector": -0.015519929309790625,
        "peers": -0.2044029911900701
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
      "share_market": 0.5199963686698914,
      "share_sector": 0.12185736283756902,
      "share_idio": 0.35814626849253955,
      "beta_market": 11.231648599099204,
      "beta_sector": -0.10128210473129194,
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
            "median": 0.5199963686698914,
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
            "plain_english": "Market explains about 52.0% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.12185736283756902,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "12.2%",
            "display_range": null,
            "display_text": "12.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 12.2,
            "plain_english": "Sector explains about 12.2% of price moves in the current state."
          },
          "company_share": {
            "median": 0.35814626849253955,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "35.8%",
            "display_range": null,
            "display_text": "35.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 35.8,
            "plain_english": "Company-specific explains about 35.8% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 11.231648599099204,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "11.23",
            "display_range": null,
            "display_text": "11.23",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Very high",
            "plain_english": "Very high market link: a 1% market move has lined up with about a 11.23% stock move in the same direction in this state. The multiplier is unusually large and comes from only 251 trading days of history.",
            "value_num": 11.23
          },
          "beta_stock_lag": {
            "median": -1.5021731109766814,
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
          "beta_sector": {
            "median": -0.10128210473129194,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.10",
            "display_range": null,
            "display_text": "-0.10",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Weak",
            "plain_english": "Weak sector link: a 1% sector move has lined up with about a 0.10% stock move in the opposite direction in this state.",
            "value_num": -0.1
          },
          "beta_market_lag": {
            "median": 7.445894990857009,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "7.45",
            "display_range": null,
            "display_text": "7.45",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 7.45
          },
          "beta_sector_lag": {
            "median": -7.865834371973301,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-7.87",
            "display_range": null,
            "display_text": "-7.87",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -7.87
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
            "period_label": "2025-05-02 to 2025-05-30",
            "n_obs": 20,
            "partial_month": true,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5952043105829686,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "59.5%",
              "display_range": null,
              "display_text": "59.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 59.5,
              "plain_english": "Company-specific explains about 59.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.22359478407947775,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "22.4%",
                "display_range": null,
                "display_text": "22.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 22.4,
                "plain_english": "Market explains about 22.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1812009053375536,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "18.1%",
                "display_range": null,
                "display_text": "18.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 18.1,
                "plain_english": "Sector explains about 18.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5952043105829686,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "59.5%",
                "display_range": null,
                "display_text": "59.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 59.5,
                "plain_english": "Company-specific explains about 59.5% of price moves in the current state."
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
              "median": 0.5425214252434535,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "54.3%",
              "display_range": null,
              "display_text": "54.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 54.3,
              "plain_english": "Company-specific explains about 54.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.17205251449523307,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "17.2%",
                "display_range": null,
                "display_text": "17.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 17.2,
                "plain_english": "Market explains about 17.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.28542606026131345,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "28.5%",
                "display_range": null,
                "display_text": "28.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 28.5,
                "plain_english": "Sector explains about 28.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5425214252434535,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "54.3%",
                "display_range": null,
                "display_text": "54.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 54.3,
                "plain_english": "Company-specific explains about 54.3% of price moves in the current state."
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
              "median": 0.5936573722066111,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "59.4%",
              "display_range": null,
              "display_text": "59.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 59.4,
              "plain_english": "Company-specific explains about 59.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.19052348444609088,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "19.1%",
                "display_range": null,
                "display_text": "19.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 19.1,
                "plain_english": "Market explains about 19.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.215819143347298,
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
                "plain_english": "Sector explains about 21.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5936573722066111,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "59.4%",
                "display_range": null,
                "display_text": "59.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 59.4,
                "plain_english": "Company-specific explains about 59.4% of price moves in the current state."
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
              "median": 0.6832682730183449,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "68.3%",
              "display_range": null,
              "display_text": "68.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 68.3,
              "plain_english": "Company-specific explains about 68.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.14462247042040258,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "14.5%",
                "display_range": null,
                "display_text": "14.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 14.5,
                "plain_english": "Market explains about 14.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.17210925656125253,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "17.2%",
                "display_range": null,
                "display_text": "17.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 17.2,
                "plain_english": "Sector explains about 17.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6832682730183449,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "68.3%",
                "display_range": null,
                "display_text": "68.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 68.3,
                "plain_english": "Company-specific explains about 68.3% of price moves in the current state."
              }
            },
            "summary": "Aug: Still clearly company-driven."
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
              "median": 0.4597144198007711,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.0%",
              "display_range": null,
              "display_text": "46.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 46.0,
              "plain_english": "Company-specific explains about 46.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3380425541985937,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "33.8%",
                "display_range": null,
                "display_text": "33.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 33.8,
                "plain_english": "Market explains about 33.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.20224302600063535,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.2%",
                "display_range": null,
                "display_text": "20.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 20.2,
                "plain_english": "Sector explains about 20.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4597144198007711,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "46.0%",
                "display_range": null,
                "display_text": "46.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 46.0,
                "plain_english": "Company-specific explains about 46.0% of price moves in the current state."
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
              "median": 0.5865813229453403,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "58.7%",
              "display_range": null,
              "display_text": "58.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 58.7,
              "plain_english": "Company-specific explains about 58.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.1959652532773934,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "19.6%",
                "display_range": null,
                "display_text": "19.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 19.6,
                "plain_english": "Market explains about 19.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2174534237772664,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "21.7%",
                "display_range": null,
                "display_text": "21.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 21.7,
                "plain_english": "Sector explains about 21.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5865813229453403,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "58.7%",
                "display_range": null,
                "display_text": "58.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 58.7,
                "plain_english": "Company-specific explains about 58.7% of price moves in the current state."
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
              "median": 0.4652358181571501,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.5%",
              "display_range": null,
              "display_text": "46.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 46.5,
              "plain_english": "Company-specific explains about 46.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.24856163258771155,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "24.9%",
                "display_range": null,
                "display_text": "24.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 24.9,
                "plain_english": "Market explains about 24.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2862025492551383,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "28.6%",
                "display_range": null,
                "display_text": "28.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 28.6,
                "plain_english": "Sector explains about 28.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4652358181571501,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "46.5%",
                "display_range": null,
                "display_text": "46.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 46.5,
                "plain_english": "Company-specific explains about 46.5% of price moves in the current state."
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
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5142152693991653,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "51.4%",
              "display_range": null,
              "display_text": "51.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 51.4,
              "plain_english": "Company-specific explains about 51.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.20686468402264158,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.7%",
                "display_range": null,
                "display_text": "20.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 20.7,
                "plain_english": "Market explains about 20.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.27892004657819314,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.9%",
                "display_range": null,
                "display_text": "27.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 27.9,
                "plain_english": "Sector explains about 27.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5142152693991653,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "51.4%",
                "display_range": null,
                "display_text": "51.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 51.4,
                "plain_english": "Company-specific explains about 51.4% of price moves in the current state."
              }
            },
            "summary": "Dec: Mostly company-driven."
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
              "median": 0.544236572178869,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "54.4%",
              "display_range": null,
              "display_text": "54.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 54.4,
              "plain_english": "Company-specific explains about 54.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.29247673795306034,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "29.2%",
                "display_range": null,
                "display_text": "29.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 29.2,
                "plain_english": "Market explains about 29.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1632866898680706,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "16.3%",
                "display_range": null,
                "display_text": "16.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 16.3,
                "plain_english": "Sector explains about 16.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.544236572178869,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "54.4%",
                "display_range": null,
                "display_text": "54.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 54.4,
                "plain_english": "Company-specific explains about 54.4% of price moves in the current state."
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
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.49295013583112424,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "49.3%",
              "display_range": null,
              "display_text": "49.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 49.3,
              "plain_english": "Company-specific explains about 49.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2531415244428352,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "25.3%",
                "display_range": null,
                "display_text": "25.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 25.3,
                "plain_english": "Market explains about 25.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2539083397260405,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "25.4%",
                "display_range": null,
                "display_text": "25.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 25.4,
                "plain_english": "Sector explains about 25.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.49295013583112424,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "49.3%",
                "display_range": null,
                "display_text": "49.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 49.3,
                "plain_english": "Company-specific explains about 49.3% of price moves in the current state."
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
              "median": 0.44012712779530583,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.0%",
              "display_range": null,
              "display_text": "44.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 44.0,
              "plain_english": "Company-specific explains about 44.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.42070597504461615,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "42.1%",
                "display_range": null,
                "display_text": "42.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 42.1,
                "plain_english": "Market explains about 42.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1391668971600779,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "13.9%",
                "display_range": null,
                "display_text": "13.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 13.9,
                "plain_english": "Sector explains about 13.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.44012712779530583,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "44.0%",
                "display_range": null,
                "display_text": "44.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 44.0,
                "plain_english": "Company-specific explains about 44.0% of price moves in the current state."
              }
            },
            "summary": "Mar: More mixed, though company-driven still has the largest share."
          },
          {
            "month_key": "2026-04",
            "month_label": "April 2026",
            "month_short_label": "Apr",
            "period_label": "2026-04-01 to 2026-04-30",
            "n_obs": 19,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.46313301322275874,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.3%",
              "display_range": null,
              "display_text": "46.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 46.3,
              "plain_english": "Company-specific explains about 46.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.37492558583309615,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "37.5%",
                "display_range": null,
                "display_text": "37.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 37.5,
                "plain_english": "Market explains about 37.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.161941400944145,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "16.2%",
                "display_range": null,
                "display_text": "16.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 16.2,
                "plain_english": "Sector explains about 16.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.46313301322275874,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "46.3%",
                "display_range": null,
                "display_text": "46.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 46.3,
                "plain_english": "Company-specific explains about 46.3% of price moves in the current state."
              }
            },
            "summary": "Apr: Mostly company-driven."
          },
          {
            "month_key": "2026-05",
            "month_label": "May 2026",
            "month_short_label": "May",
            "period_label": "2026-05-04 to 2026-05-15",
            "n_obs": 10,
            "partial_month": true,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4916790637576614,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "49.2%",
              "display_range": null,
              "display_text": "49.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
              "kind": "share_pct",
              "value_pct": 49.2,
              "plain_english": "Company-specific explains about 49.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.31212128905225217,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "31.2%",
                "display_range": null,
                "display_text": "31.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
                "kind": "share_pct",
                "value_pct": 31.2,
                "plain_english": "Market explains about 31.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.19619964719008637,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "19.6%",
                "display_range": null,
                "display_text": "19.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
                "kind": "share_pct",
                "value_pct": 19.6,
                "plain_english": "Sector explains about 19.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4916790637576614,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "49.2%",
                "display_range": null,
                "display_text": "49.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
                "kind": "share_pct",
                "value_pct": 49.2,
                "plain_english": "Company-specific explains about 49.2% of price moves in the current state."
              }
            },
            "summary": "May: Mostly company-driven."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5020080321285141,
            "expected_duration_days": 11.363636363636363,
            "current_probability": 0.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.015676224250498208,
              "low": 0.015676224250498208,
              "high": 0.015676224250498208
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": 0.0
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 10.333333333333334,
            "current_probability": 1.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.030062203461388437,
              "low": 0.030062203461388437,
              "high": 0.030062203461388437
            },
            "volatility_label": "High Volatility",
            "current_probability_display": null
          }
        ],
        "transitions": {
          "mean": [
            [
              0.912,
              0.088
            ],
            [
              0.08943089430894309,
              0.9105691056910569
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              114.0,
              11.0
            ],
            [
              11.0,
              112.0
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
          "market_link_display": "11.23",
          "sector_link_display": "-0.10",
          "market_link_explainer": "Very high market link. A 1% market move has lined up with about a 11.23% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "Weak sector link. A 1% sector move has lined up with about a 0.10% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "-1.50",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "High Volatility",
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
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
          "stay_probability": 0.9105691056910569,
          "effective_days": 124.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 10.3 days.",
          "expected_duration_days": 10.3
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
          "period_label": "2025-05-02 to 2025-05-30",
          "n_obs": 20,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "May: Mostly company-driven.",
          "share_market": 0.22359478407947775,
          "share_sector": 0.1812009053375536,
          "share_company": 0.5952043105829686,
          "share_market_display": "22.4%",
          "share_sector_display": "18.1%",
          "share_company_display": "59.5%",
          "dominant_share_display": "59.5%"
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
          "share_market": 0.17205251449523307,
          "share_sector": 0.28542606026131345,
          "share_company": 0.5425214252434535,
          "share_market_display": "17.2%",
          "share_sector_display": "28.5%",
          "share_company_display": "54.3%",
          "dominant_share_display": "54.3%"
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
          "share_market": 0.19052348444609088,
          "share_sector": 0.215819143347298,
          "share_company": 0.5936573722066111,
          "share_market_display": "19.1%",
          "share_sector_display": "21.6%",
          "share_company_display": "59.4%",
          "dominant_share_display": "59.4%"
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
          "summary": "Aug: Still clearly company-driven.",
          "share_market": 0.14462247042040258,
          "share_sector": 0.17210925656125253,
          "share_company": 0.6832682730183449,
          "share_market_display": "14.5%",
          "share_sector_display": "17.2%",
          "share_company_display": "68.3%",
          "dominant_share_display": "68.3%"
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
          "share_market": 0.3380425541985937,
          "share_sector": 0.20224302600063535,
          "share_company": 0.4597144198007711,
          "share_market_display": "33.8%",
          "share_sector_display": "20.2%",
          "share_company_display": "46.0%",
          "dominant_share_display": "46.0%"
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
          "share_market": 0.1959652532773934,
          "share_sector": 0.2174534237772664,
          "share_company": 0.5865813229453403,
          "share_market_display": "19.6%",
          "share_sector_display": "21.7%",
          "share_company_display": "58.7%",
          "dominant_share_display": "58.7%"
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
          "share_market": 0.24856163258771155,
          "share_sector": 0.2862025492551383,
          "share_company": 0.4652358181571501,
          "share_market_display": "24.9%",
          "share_sector_display": "28.6%",
          "share_company_display": "46.5%",
          "dominant_share_display": "46.5%"
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
          "summary": "Dec: Mostly company-driven.",
          "share_market": 0.20686468402264158,
          "share_sector": 0.27892004657819314,
          "share_company": 0.5142152693991653,
          "share_market_display": "20.7%",
          "share_sector_display": "27.9%",
          "share_company_display": "51.4%",
          "dominant_share_display": "51.4%"
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
          "share_market": 0.29247673795306034,
          "share_sector": 0.1632866898680706,
          "share_company": 0.544236572178869,
          "share_market_display": "29.2%",
          "share_sector_display": "16.3%",
          "share_company_display": "54.4%",
          "dominant_share_display": "54.4%"
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
          "share_market": 0.2531415244428352,
          "share_sector": 0.2539083397260405,
          "share_company": 0.49295013583112424,
          "share_market_display": "25.3%",
          "share_sector_display": "25.4%",
          "share_company_display": "49.3%",
          "dominant_share_display": "49.3%"
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
          "share_market": 0.42070597504461615,
          "share_sector": 0.1391668971600779,
          "share_company": 0.44012712779530583,
          "share_market_display": "42.1%",
          "share_sector_display": "13.9%",
          "share_company_display": "44.0%",
          "dominant_share_display": "44.0%"
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-30",
          "n_obs": 19,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Apr: Mostly company-driven.",
          "share_market": 0.37492558583309615,
          "share_sector": 0.161941400944145,
          "share_company": 0.46313301322275874,
          "share_market_display": "37.5%",
          "share_sector_display": "16.2%",
          "share_company_display": "46.3%",
          "dominant_share_display": "46.3%"
        },
        {
          "month_key": "2026-05",
          "month_label": "May 2026",
          "month_short_label": "May",
          "period_label": "2026-05-04 to 2026-05-15",
          "n_obs": 10,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "May: Mostly company-driven.",
          "share_market": 0.31212128905225217,
          "share_sector": 0.19619964719008637,
          "share_company": 0.4916790637576614,
          "share_market_display": "31.2%",
          "share_sector_display": "19.6%",
          "share_company_display": "49.2%",
          "dominant_share_display": "49.2%"
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
            "expected_duration_days": 11.363636363636363,
            "current_probability": 0.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.015676224250498208,
              "low": 0.015676224250498208,
              "high": 0.015676224250498208
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 10.333333333333334,
            "current_probability": 1.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.030062203461388437,
              "low": 0.030062203461388437,
              "high": 0.030062203461388437
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.912,
            0.088
          ],
          [
            0.08943089430894309,
            0.9105691056910569
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 39.86,
          "quantity": 200.0,
          "value": 7972.0
        },
        {
          "level": 2,
          "price": 39.84,
          "quantity": 1300.0,
          "value": 51792.00000000001
        },
        {
          "level": 3,
          "price": 39.82,
          "quantity": 3900.0,
          "value": 155298.0
        },
        {
          "level": 4,
          "price": 39.8,
          "quantity": 5300.0,
          "value": 210939.99999999997
        },
        {
          "level": 5,
          "price": 39.78,
          "quantity": 1600.0,
          "value": 63648.0
        },
        {
          "level": 6,
          "price": 39.76,
          "quantity": 1800.0,
          "value": 71568.0
        },
        {
          "level": 7,
          "price": 39.74,
          "quantity": 1300.0,
          "value": 51662.0
        },
        {
          "level": 8,
          "price": 39.72,
          "quantity": 1300.0,
          "value": 51636.0
        },
        {
          "level": 9,
          "price": 39.7,
          "quantity": 400.0,
          "value": 15880.000000000002
        },
        {
          "level": 10,
          "price": 39.66,
          "quantity": 1100.0,
          "value": 43625.99999999999
        },
        {
          "level": 11,
          "price": 39.64,
          "quantity": 2200.0,
          "value": 87208.0
        },
        {
          "level": 12,
          "price": 39.6,
          "quantity": 1900.0,
          "value": 75240.0
        },
        {
          "level": 13,
          "price": 39.56,
          "quantity": 5300.0,
          "value": 209668.0
        },
        {
          "level": 14,
          "price": 39.54,
          "quantity": 1800.0,
          "value": 71172.0
        },
        {
          "level": 15,
          "price": 39.48,
          "quantity": 2200.0,
          "value": 86856.0
        },
        {
          "level": 16,
          "price": 39.46,
          "quantity": 1800.0,
          "value": 71028.0
        },
        {
          "level": 17,
          "price": 39.44,
          "quantity": 700.0,
          "value": 27608.0
        },
        {
          "level": 18,
          "price": 39.4,
          "quantity": 2200.0,
          "value": 86680.0
        },
        {
          "level": 19,
          "price": 39.38,
          "quantity": 3700.0,
          "value": 145706.0
        },
        {
          "level": 20,
          "price": 39.32,
          "quantity": 400.0,
          "value": 15728.0
        },
        {
          "level": 21,
          "price": 39.26,
          "quantity": 300.0,
          "value": 11778.0
        },
        {
          "level": 22,
          "price": 39.24,
          "quantity": 500.0,
          "value": 19620.0
        },
        {
          "level": 23,
          "price": 39.2,
          "quantity": 400.0,
          "value": 15680.000000000002
        },
        {
          "level": 24,
          "price": 39.12,
          "quantity": 300.0,
          "value": 11736.0
        },
        {
          "level": 25,
          "price": 39.06,
          "quantity": 300.0,
          "value": 11718.0
        },
        {
          "level": 26,
          "price": 39.02,
          "quantity": 200.0,
          "value": 7804.000000000001
        },
        {
          "level": 27,
          "price": 39.0,
          "quantity": 1800.0,
          "value": 70200.0
        },
        {
          "level": 28,
          "price": 38.8,
          "quantity": 100.0,
          "value": 3879.9999999999995
        },
        {
          "level": 29,
          "price": 38.68,
          "quantity": 500.0,
          "value": 19340.0
        },
        {
          "level": 30,
          "price": 38.46,
          "quantity": 1500.0,
          "value": 57690.0
        },
        {
          "level": 31,
          "price": 38.4,
          "quantity": 2200.0,
          "value": 84480.0
        },
        {
          "level": 32,
          "price": 38.28,
          "quantity": 200.0,
          "value": 7656.0
        },
        {
          "level": 33,
          "price": 38.1,
          "quantity": 100.0,
          "value": 3810.0
        },
        {
          "level": 34,
          "price": 37.74,
          "quantity": 100.0,
          "value": 3774.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 40.0,
          "quantity": 21900.0,
          "value": 876000.0
        },
        {
          "level": 2,
          "price": 40.02,
          "quantity": 10500.0,
          "value": 420210.00000000006
        },
        {
          "level": 3,
          "price": 40.04,
          "quantity": 10300.0,
          "value": 412412.0
        },
        {
          "level": 4,
          "price": 40.06,
          "quantity": 12800.0,
          "value": 512768.0
        },
        {
          "level": 5,
          "price": 40.08,
          "quantity": 400.0,
          "value": 16032.0
        },
        {
          "level": 6,
          "price": 40.1,
          "quantity": 400.0,
          "value": 16040.0
        },
        {
          "level": 7,
          "price": 40.12,
          "quantity": 800.0,
          "value": 32095.999999999996
        },
        {
          "level": 8,
          "price": 40.14,
          "quantity": 400.0,
          "value": 16056.0
        },
        {
          "level": 9,
          "price": 40.16,
          "quantity": 2600.0,
          "value": 104415.99999999999
        },
        {
          "level": 10,
          "price": 40.22,
          "quantity": 400.0,
          "value": 16088.0
        },
        {
          "level": 11,
          "price": 40.24,
          "quantity": 300.0,
          "value": 12072.0
        },
        {
          "level": 12,
          "price": 40.26,
          "quantity": 300.0,
          "value": 12078.0
        },
        {
          "level": 13,
          "price": 40.28,
          "quantity": 1000.0,
          "value": 40280.0
        },
        {
          "level": 14,
          "price": 40.3,
          "quantity": 300.0,
          "value": 12090.0
        },
        {
          "level": 15,
          "price": 40.32,
          "quantity": 1900.0,
          "value": 76608.0
        },
        {
          "level": 16,
          "price": 40.34,
          "quantity": 300.0,
          "value": 12102.000000000002
        },
        {
          "level": 17,
          "price": 40.38,
          "quantity": 300.0,
          "value": 12114.0
        },
        {
          "level": 18,
          "price": 40.4,
          "quantity": 2300.0,
          "value": 92920.0
        },
        {
          "level": 19,
          "price": 40.46,
          "quantity": 400.0,
          "value": 16184.0
        },
        {
          "level": 20,
          "price": 40.52,
          "quantity": 300.0,
          "value": 12156.000000000002
        },
        {
          "level": 21,
          "price": 40.58,
          "quantity": 400.0,
          "value": 16232.0
        },
        {
          "level": 22,
          "price": 40.64,
          "quantity": 400.0,
          "value": 16256.0
        },
        {
          "level": 23,
          "price": 40.7,
          "quantity": 300.0,
          "value": 12210.0
        },
        {
          "level": 24,
          "price": 40.76,
          "quantity": 400.0,
          "value": 16304.0
        },
        {
          "level": 25,
          "price": 40.82,
          "quantity": 400.0,
          "value": 16328.0
        },
        {
          "level": 26,
          "price": 40.88,
          "quantity": 300.0,
          "value": 12264.0
        },
        {
          "level": 27,
          "price": 40.9,
          "quantity": 4000.0,
          "value": 163600.0
        },
        {
          "level": 28,
          "price": 40.94,
          "quantity": 400.0,
          "value": 16376.0
        },
        {
          "level": 29,
          "price": 41.0,
          "quantity": 500.0,
          "value": 20500.0
        },
        {
          "level": 30,
          "price": 41.12,
          "quantity": 3000.0,
          "value": 123359.99999999999
        },
        {
          "level": 31,
          "price": 41.16,
          "quantity": 300.0,
          "value": 12347.999999999998
        },
        {
          "level": 32,
          "price": 41.2,
          "quantity": 100.0,
          "value": 4120.0
        },
        {
          "level": 33,
          "price": 41.22,
          "quantity": 2000.0,
          "value": 82440.0
        },
        {
          "level": 34,
          "price": 41.28,
          "quantity": 3000.0,
          "value": 123840.0
        },
        {
          "level": 35,
          "price": 41.3,
          "quantity": 1000.0,
          "value": 41300.0
        },
        {
          "level": 36,
          "price": 41.32,
          "quantity": 100.0,
          "value": 4132.0
        },
        {
          "level": 37,
          "price": 41.42,
          "quantity": 800.0,
          "value": 33136.0
        },
        {
          "level": 38,
          "price": 41.56,
          "quantity": 100.0,
          "value": 4156.0
        },
        {
          "level": 39,
          "price": 41.94,
          "quantity": 300.0,
          "value": 12582.0
        },
        {
          "level": 40,
          "price": 42.24,
          "quantity": 100.0,
          "value": 4224.0
        },
        {
          "level": 41,
          "price": 42.3,
          "quantity": 200.0,
          "value": 8460.0
        },
        {
          "level": 42,
          "price": 42.38,
          "quantity": 100.0,
          "value": 4238.0
        },
        {
          "level": 43,
          "price": 42.5,
          "quantity": 100.0,
          "value": 4250.0
        },
        {
          "level": 44,
          "price": 42.58,
          "quantity": 100.0,
          "value": 4258.0
        },
        {
          "level": 45,
          "price": 42.64,
          "quantity": 1500.0,
          "value": 63960.0
        },
        {
          "level": 46,
          "price": 42.66,
          "quantity": 100.0,
          "value": 4266.0
        },
        {
          "level": 47,
          "price": 42.82,
          "quantity": 100.0,
          "value": 4282.0
        },
        {
          "level": 48,
          "price": 42.88,
          "quantity": 300.0,
          "value": 12864.0
        },
        {
          "level": 49,
          "price": 42.92,
          "quantity": 400.0,
          "value": 17168.0
        },
        {
          "level": 50,
          "price": 42.98,
          "quantity": 400.0,
          "value": 17192.0
        },
        {
          "level": 51,
          "price": 43.0,
          "quantity": 1800.0,
          "value": 77400.0
        },
        {
          "level": 52,
          "price": 43.12,
          "quantity": 200.0,
          "value": 8624.0
        },
        {
          "level": 53,
          "price": 43.26,
          "quantity": 100.0,
          "value": 4326.0
        },
        {
          "level": 54,
          "price": 43.38,
          "quantity": 100.0,
          "value": 4338.0
        },
        {
          "level": 55,
          "price": 43.5,
          "quantity": 100.0,
          "value": 4350.0
        },
        {
          "level": 56,
          "price": 43.6,
          "quantity": 100.0,
          "value": 4360.0
        },
        {
          "level": 57,
          "price": 43.68,
          "quantity": 100.0,
          "value": 4368.0
        },
        {
          "level": 58,
          "price": 43.74,
          "quantity": 100.0,
          "value": 4374.0
        },
        {
          "level": 59,
          "price": 43.78,
          "quantity": 400.0,
          "value": 17512.0
        },
        {
          "level": 60,
          "price": 43.8,
          "quantity": 100.0,
          "value": 4380.0
        },
        {
          "level": 61,
          "price": 43.94,
          "quantity": 100.0,
          "value": 4394.0
        },
        {
          "level": 62,
          "price": 43.98,
          "quantity": 200.0,
          "value": 8796.0
        },
        {
          "level": 63,
          "price": 44.0,
          "quantity": 500.0,
          "value": 22000.0
        },
        {
          "level": 64,
          "price": 44.98,
          "quantity": 400.0,
          "value": 17992.0
        },
        {
          "level": 65,
          "price": 45.0,
          "quantity": 4200.0,
          "value": 189000.0
        },
        {
          "level": 66,
          "price": 46.0,
          "quantity": 4500.0,
          "value": 207000.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-05-15 07:59:59.413000000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XHKG",
        "mid_price": 39.93,
        "spread_pct": 0.0035061357375407104,
        "spread_ticks": 2.8,
        "tick_size": 0.05,
        "displayed_levels_per_side": 100,
        "bid_depth_notional_displayed": 1930082.0,
        "ask_depth_notional_displayed": 4180582.0,
        "bid_depth_notional_top10": 1930082.0,
        "ask_depth_notional_top10": 4180582.0,
        "bid_ask_depth_ratio": 0.4617
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 366,
        "history_limited": false,
        "trade_days_used": 242,
        "n_trades_used": 309372,
        "first_trade_date": "2025-05-15",
        "last_trade_date": "2026-05-15",
        "window_label": "May 15, 2025 to May 15, 2026",
        "window_short_label": "May 15, 2025 to May 15, 2026",
        "trade_days_label": "242 trading days",
        "trade_count_label": "309,372 trades",
        "window_detail_label": "242 trading days • 309,372 trades",
        "history_note": "Trade-size percentiles use May 15, 2025 to May 15, 2026 history (242 trading days • 309,372 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 30603.6,
            "impact_pct": -0.002124,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 1.59,
            "pct_of_adv": 0.2
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 49920.0,
            "impact_pct": -0.002174,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 2.59,
            "pct_of_adv": 0.32
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 5114465.53,
            "impact_pct": -0.011520999999999998,
            "filled_pct": 37.7,
            "levels_consumed": 34,
            "pct_of_bid_depth": 264.99,
            "pct_of_adv": 33.2
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-05-15",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "5063659010",
            "timestamp": "2026-05-15 06:00:39.514000000",
            "local_timestamp": "2026-05-15 14:00:39",
            "posted_price": 39.98,
            "size_shares": 52400.0,
            "notional": 2094952.0,
            "impact_pct": -0.011520999999999998,
            "filled_pct": 92.1,
            "levels_consumed": 34,
            "pct_of_bid_depth": 108.54,
            "price_vs_mid_pct": 0.125,
            "executed_event_count": 0,
            "event_count": 21
          },
          {
            "rank": 2,
            "order_id": "6587454466",
            "timestamp": "2026-05-15 07:31:07.644000000",
            "local_timestamp": "2026-05-15 15:31:07",
            "posted_price": 40.0,
            "size_shares": 50500.0,
            "notional": 2020000.0,
            "impact_pct": -0.011520999999999998,
            "filled_pct": 95.5,
            "levels_consumed": 34,
            "pct_of_bid_depth": 104.66,
            "price_vs_mid_pct": 0.175,
            "executed_event_count": 0,
            "event_count": 18
          },
          {
            "rank": 3,
            "order_id": "6697302274",
            "timestamp": "2026-05-15 07:40:44.770000000",
            "local_timestamp": "2026-05-15 15:40:44",
            "posted_price": 40.0,
            "size_shares": 49200.0,
            "notional": 1968000.0,
            "impact_pct": -0.011520999999999998,
            "filled_pct": 98.1,
            "levels_consumed": 34,
            "pct_of_bid_depth": 101.96,
            "price_vs_mid_pct": 0.175,
            "executed_event_count": 0,
            "event_count": 2
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-05-15",
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
            "spread_pct": 0.00243249817562623,
            "spread_ticks": 1.9999999999998863,
            "bid_depth_notional": 4393642.0,
            "ask_depth_notional": 2430472.0,
            "mid_price": 41.11
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.0004888780249328557,
            "spread_ticks": 0.40000000000006253,
            "bid_depth_notional": 3956714.0,
            "ask_depth_notional": 3697938.0,
            "mid_price": 40.91
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.000489835904971911,
            "spread_ticks": 0.40000000000006253,
            "bid_depth_notional": 4432610.0,
            "ask_depth_notional": 3356190.0,
            "mid_price": 40.83
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.000490316253983722,
            "spread_ticks": 0.3999999999999204,
            "bid_depth_notional": 4743618.0,
            "ask_depth_notional": 3195212.0,
            "mid_price": 40.79
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.0004917629702484172,
            "spread_ticks": 0.40000000000006253,
            "bid_depth_notional": 2819236.0,
            "ask_depth_notional": 2441582.0,
            "mid_price": 40.67
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.0004978839930297019,
            "spread_ticks": 0.40000000000006253,
            "bid_depth_notional": 2945596.0,
            "ask_depth_notional": 3692324.0,
            "mid_price": 40.17
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.0005001250312578927,
            "spread_ticks": 0.40000000000006253,
            "bid_depth_notional": 2520978.0,
            "ask_depth_notional": 4752834.0,
            "mid_price": 39.989999999999995
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.0004996252810391212,
            "spread_ticks": 0.3999999999999204,
            "bid_depth_notional": 3279076.0,
            "ask_depth_notional": 3572522.0,
            "mid_price": 40.03
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.0005003752814609963,
            "spread_ticks": 0.3999999999999204,
            "bid_depth_notional": 2302190.0,
            "ask_depth_notional": 6976102.0,
            "mid_price": 39.97
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.0005008765339342855,
            "spread_ticks": 0.3999999999999204,
            "bid_depth_notional": 2695674.0,
            "ask_depth_notional": 7200044.0,
            "mid_price": 39.93
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.0035061357375407104,
            "spread_ticks": 2.8000000000000114,
            "bid_depth_notional": 1930082.0,
            "ask_depth_notional": 4180582.0,
            "mid_price": 39.93
          }
        ],
        "summary": {
          "median_spread_pct": 0.0004996252810391212,
          "median_spread_ticks": 0.40000000000006253,
          "median_bid_depth_notional": 2945596.0,
          "median_ask_depth_notional": 3692324.0,
          "tightest_bucket": "10:00",
          "widest_bucket": "15:30",
          "deepest_bid_bucket": "11:00",
          "thinnest_bid_bucket": "15:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 0.3,
      "peers": [
        {
          "ticker": "9987",
          "pct": 0.5
        },
        {
          "ticker": "6862",
          "pct": 0.5
        },
        {
          "ticker": "1128",
          "pct": 3.6
        },
        {
          "ticker": "2643",
          "pct": 3.6
        },
        {
          "ticker": "6831",
          "pct": 5.0
        },
        {
          "ticker": "880",
          "pct": 5.3
        },
        {
          "ticker": "999",
          "pct": 8.3
        },
        {
          "ticker": "9658",
          "pct": 35.5
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 4085,
          "n_runs": 969,
          "n_trade_days": 1,
          "first_trade_date": "2026-05-15",
          "last_trade_date": "2026-05-15",
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
            "retail_pct": 0.1828641370869033,
            "mixed_pct": 0.16181150550795595,
            "instit_pct": 0.5277845777233782,
            "ambiguous_pct": 0.12753977968176256,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.12753977968176256,
            "retail_qty_pct": 0.08455958549222797,
            "mixed_qty_pct": 0.13312607944732296,
            "instit_qty_pct": 0.693678756476684,
            "ambiguous_qty_pct": 0.08863557858376511,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.08863557858376511,
            "retail_notional_pct": 0.08453852295198974,
            "mixed_notional_pct": 0.13278890954303182,
            "instit_notional_pct": 0.6939879175021411,
            "ambiguous_notional_pct": 0.08868465000283743,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.08868465000283743
          },
          "run_composition": {
            "retail_pct": 0.4674922600619195,
            "mixed_pct": 0.17131062951496387,
            "instit_pct": 0.19504643962848298,
            "ambiguous_pct": 0.16615067079463364,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.16615067079463364,
            "retail_notional_pct": 0.06690518183138544,
            "mixed_notional_pct": 0.1477295350835019,
            "instit_notional_pct": 0.6998860674035572,
            "unclear_notional_pct": 0.08547921568155553
          },
          "counts": {
            "trades": {
              "retail": 747,
              "mixed": 661,
              "institutional": 2156,
              "ambiguous": 521,
              "unobservable": 0,
              "unclear": 521
            },
            "runs": {
              "retail": 453,
              "mixed": 166,
              "institutional": 189,
              "ambiguous": 161,
              "unobservable": 0,
              "unclear": 161
            }
          },
          "confidence": {
            "high": 0.6625386996904025,
            "medium": 0.17131062951496387,
            "low": 0.16615067079463364,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 642,
            "medium": 166,
            "low": 161,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5681762545899632,
            "medium": 0.15936352509179927,
            "low": 0.27246022031823747,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 2321,
            "medium": 651,
            "low": 1113,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.9068111455108357,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.16615067079463364,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.4674922600619195,
          "dominance_gap": 0.27244582043343657,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 2687,
              "WALK_BOOK": 717,
              "UNOBSERVABLE": 681
            },
            "d2_information": {
              "UNOBSERVABLE": 4085
            },
            "d3_urgency": {
              "UNOBSERVABLE": 969
            },
            "participant_confidence": {
              "HIGH": 642,
              "MEDIUM": 166,
              "LOW": 161
            }
          },
          "trade_size": {
            "avg": 14346.567784577723,
            "median": 7992.0
          },
          "run_size": {
            "avg": 50427.22291021672,
            "median": 12403.8,
            "avg_length": 1.8121775025799793
          },
          "recent_trades": [
            {
              "trade_id": "4100",
              "timestamp": "2026-05-15T07:59:53.243609",
              "price": 39.86,
              "size": 100.0,
              "notional": 3986.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 74779,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4099",
              "timestamp": "2026-05-15T07:59:52.566512",
              "price": 39.9,
              "size": 300.0,
              "notional": 11970.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 74778,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4098",
              "timestamp": "2026-05-15T07:59:41.263690",
              "price": 39.9,
              "size": 100.0,
              "notional": 3990.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 74777,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4097",
              "timestamp": "2026-05-15T07:59:30.076068",
              "price": 39.9,
              "size": 100.0,
              "notional": 3990.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74776,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4096",
              "timestamp": "2026-05-15T07:59:30.045308",
              "price": 39.9,
              "size": 300.0,
              "notional": 11970.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74776,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4095",
              "timestamp": "2026-05-15T07:59:21.298122",
              "price": 39.92,
              "size": 700.0,
              "notional": 27944.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74776,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4094",
              "timestamp": "2026-05-15T07:59:18.497141",
              "price": 39.9,
              "size": 100.0,
              "notional": 3990.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74776,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4093",
              "timestamp": "2026-05-15T07:59:14.749806",
              "price": 39.92,
              "size": 100.0,
              "notional": 3992.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74776,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4092",
              "timestamp": "2026-05-15T07:59:09.647532",
              "price": 39.9,
              "size": 200.0,
              "notional": 7980.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74776,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4091",
              "timestamp": "2026-05-15T07:59:03.364875",
              "price": 39.9,
              "size": 100.0,
              "notional": 3990.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74776,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4090",
              "timestamp": "2026-05-15T07:59:03.347079",
              "price": 39.9,
              "size": 200.0,
              "notional": 7980.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74776,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4089",
              "timestamp": "2026-05-15T07:58:53.380882",
              "price": 39.86,
              "size": 100.0,
              "notional": 3986.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 74775,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4088",
              "timestamp": "2026-05-15T07:58:51.276197",
              "price": 39.9,
              "size": 100.0,
              "notional": 3990.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 74774,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4087",
              "timestamp": "2026-05-15T07:58:31.390495",
              "price": 39.9,
              "size": 100.0,
              "notional": 3990.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74773,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4086",
              "timestamp": "2026-05-15T07:58:31.390495",
              "price": 39.88,
              "size": 100.0,
              "notional": 3988.0000000000005,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74773,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4085",
              "timestamp": "2026-05-15T07:58:31.390495",
              "price": 39.88,
              "size": 100.0,
              "notional": 3988.0000000000005,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74773,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4084",
              "timestamp": "2026-05-15T07:58:31.390495",
              "price": 39.88,
              "size": 100.0,
              "notional": 3988.0000000000005,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74773,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4083",
              "timestamp": "2026-05-15T07:58:22.347089",
              "price": 39.86,
              "size": 100.0,
              "notional": 3986.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74773,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4082",
              "timestamp": "2026-05-15T07:58:22.347089",
              "price": 39.86,
              "size": 100.0,
              "notional": 3986.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74773,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4081",
              "timestamp": "2026-05-15T07:58:16.263129",
              "price": 39.88,
              "size": 1000.0,
              "notional": 39880.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74773,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4080",
              "timestamp": "2026-05-15T07:58:16.263129",
              "price": 39.88,
              "size": 100.0,
              "notional": 3988.0000000000005,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74773,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4079",
              "timestamp": "2026-05-15T07:58:06.457245",
              "price": 39.86,
              "size": 100.0,
              "notional": 3986.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74773,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4078",
              "timestamp": "2026-05-15T07:58:05.997408",
              "price": 39.86,
              "size": 500.0,
              "notional": 19930.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74773,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4077",
              "timestamp": "2026-05-15T07:58:03.338804",
              "price": 39.86,
              "size": 100.0,
              "notional": 3986.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74773,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4076",
              "timestamp": "2026-05-15T07:58:02.475075",
              "price": 39.88,
              "size": 500.0,
              "notional": 19940.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74773,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4075",
              "timestamp": "2026-05-15T07:58:01.228878",
              "price": 39.86,
              "size": 100.0,
              "notional": 3986.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 74772,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4074",
              "timestamp": "2026-05-15T07:57:57.097200",
              "price": 39.88,
              "size": 200.0,
              "notional": 7976.000000000001,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 74771,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4073",
              "timestamp": "2026-05-15T07:57:49.446680",
              "price": 39.86,
              "size": 100.0,
              "notional": 3986.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 74770,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4072",
              "timestamp": "2026-05-15T07:57:49.446680",
              "price": 39.86,
              "size": 100.0,
              "notional": 3986.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 74770,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4071",
              "timestamp": "2026-05-15T07:57:40.241217",
              "price": 39.86,
              "size": 100.0,
              "notional": 3986.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 74770,
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
          "n_trades": 30747,
          "n_runs": 8643,
          "n_trade_days": 21,
          "first_trade_date": "2026-04-16",
          "last_trade_date": "2026-05-15",
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
            "retail_pct": 0.2160210752268514,
            "mixed_pct": 0.16603245845123102,
            "instit_pct": 0.4916902462028816,
            "ambiguous_pct": 0.126256220119036,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.126256220119036,
            "retail_qty_pct": 0.10585819139038853,
            "mixed_qty_pct": 0.15768209392593696,
            "instit_qty_pct": 0.6478915745712683,
            "ambiguous_qty_pct": 0.08856814011240614,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.08856814011240614,
            "retail_notional_pct": 0.10683970016318296,
            "mixed_notional_pct": 0.15912796645754387,
            "instit_notional_pct": 0.6455394760584942,
            "ambiguous_notional_pct": 0.08849285732077898,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.08849285732077898
          },
          "run_composition": {
            "retail_pct": 0.47252111535346525,
            "mixed_pct": 0.1911373365729492,
            "instit_pct": 0.21138493578618536,
            "ambiguous_pct": 0.12495661228740021,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.12495661228740021,
            "retail_notional_pct": 0.08191672160009282,
            "mixed_notional_pct": 0.13331205097633686,
            "instit_notional_pct": 0.712806385153115,
            "unclear_notional_pct": 0.07196484227045531
          },
          "counts": {
            "trades": {
              "retail": 6642,
              "mixed": 5105,
              "institutional": 15118,
              "ambiguous": 3882,
              "unobservable": 0,
              "unclear": 3882
            },
            "runs": {
              "retail": 4084,
              "mixed": 1652,
              "institutional": 1827,
              "ambiguous": 1080,
              "unobservable": 0,
              "unclear": 1080
            }
          },
          "confidence": {
            "high": 0.6839060511396506,
            "medium": 0.1911373365729492,
            "low": 0.12495661228740021,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 5911,
            "medium": 1652,
            "low": 1080,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5816502423000618,
            "medium": 0.1540638111035223,
            "low": 0.2642859465964159,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 17884,
            "medium": 4737,
            "low": 8126,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.894359597362027,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.12495661228740021,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.47252111535346525,
          "dominance_gap": 0.26113617956727986,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 19119,
              "WALK_BOOK": 6239,
              "UNOBSERVABLE": 5389
            },
            "d2_information": {
              "UNOBSERVABLE": 30747
            },
            "d3_urgency": {
              "UNOBSERVABLE": 8643
            },
            "participant_confidence": {
              "HIGH": 5911,
              "MEDIUM": 1652,
              "LOW": 1080
            }
          },
          "trade_size": {
            "avg": 15510.992101343221,
            "median": 7988.0
          },
          "run_size": {
            "avg": 44282.14778664815,
            "median": 14862.0,
            "avg_length": 1.595626518569941
          },
          "recent_trades": [
            {
              "trade_id": "4100",
              "timestamp": "2026-05-15T07:59:53.243609",
              "price": 39.86,
              "size": 100.0,
              "notional": 3986.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 74779,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4099",
              "timestamp": "2026-05-15T07:59:52.566512",
              "price": 39.9,
              "size": 300.0,
              "notional": 11970.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 74778,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4098",
              "timestamp": "2026-05-15T07:59:41.263690",
              "price": 39.9,
              "size": 100.0,
              "notional": 3990.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 74777,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4097",
              "timestamp": "2026-05-15T07:59:30.076068",
              "price": 39.9,
              "size": 100.0,
              "notional": 3990.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74776,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4096",
              "timestamp": "2026-05-15T07:59:30.045308",
              "price": 39.9,
              "size": 300.0,
              "notional": 11970.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74776,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4095",
              "timestamp": "2026-05-15T07:59:21.298122",
              "price": 39.92,
              "size": 700.0,
              "notional": 27944.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74776,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4094",
              "timestamp": "2026-05-15T07:59:18.497141",
              "price": 39.9,
              "size": 100.0,
              "notional": 3990.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74776,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4093",
              "timestamp": "2026-05-15T07:59:14.749806",
              "price": 39.92,
              "size": 100.0,
              "notional": 3992.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74776,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4092",
              "timestamp": "2026-05-15T07:59:09.647532",
              "price": 39.9,
              "size": 200.0,
              "notional": 7980.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74776,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4091",
              "timestamp": "2026-05-15T07:59:03.364875",
              "price": 39.9,
              "size": 100.0,
              "notional": 3990.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74776,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4090",
              "timestamp": "2026-05-15T07:59:03.347079",
              "price": 39.9,
              "size": 200.0,
              "notional": 7980.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74776,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4089",
              "timestamp": "2026-05-15T07:58:53.380882",
              "price": 39.86,
              "size": 100.0,
              "notional": 3986.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 74775,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4088",
              "timestamp": "2026-05-15T07:58:51.276197",
              "price": 39.9,
              "size": 100.0,
              "notional": 3990.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 74774,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4087",
              "timestamp": "2026-05-15T07:58:31.390495",
              "price": 39.9,
              "size": 100.0,
              "notional": 3990.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74773,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4086",
              "timestamp": "2026-05-15T07:58:31.390495",
              "price": 39.88,
              "size": 100.0,
              "notional": 3988.0000000000005,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74773,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4085",
              "timestamp": "2026-05-15T07:58:31.390495",
              "price": 39.88,
              "size": 100.0,
              "notional": 3988.0000000000005,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74773,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4084",
              "timestamp": "2026-05-15T07:58:31.390495",
              "price": 39.88,
              "size": 100.0,
              "notional": 3988.0000000000005,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74773,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4083",
              "timestamp": "2026-05-15T07:58:22.347089",
              "price": 39.86,
              "size": 100.0,
              "notional": 3986.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74773,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4082",
              "timestamp": "2026-05-15T07:58:22.347089",
              "price": 39.86,
              "size": 100.0,
              "notional": 3986.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74773,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4081",
              "timestamp": "2026-05-15T07:58:16.263129",
              "price": 39.88,
              "size": 1000.0,
              "notional": 39880.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74773,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4080",
              "timestamp": "2026-05-15T07:58:16.263129",
              "price": 39.88,
              "size": 100.0,
              "notional": 3988.0000000000005,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74773,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4079",
              "timestamp": "2026-05-15T07:58:06.457245",
              "price": 39.86,
              "size": 100.0,
              "notional": 3986.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74773,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4078",
              "timestamp": "2026-05-15T07:58:05.997408",
              "price": 39.86,
              "size": 500.0,
              "notional": 19930.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74773,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4077",
              "timestamp": "2026-05-15T07:58:03.338804",
              "price": 39.86,
              "size": 100.0,
              "notional": 3986.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74773,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4076",
              "timestamp": "2026-05-15T07:58:02.475075",
              "price": 39.88,
              "size": 500.0,
              "notional": 19940.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74773,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4075",
              "timestamp": "2026-05-15T07:58:01.228878",
              "price": 39.86,
              "size": 100.0,
              "notional": 3986.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 74772,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4074",
              "timestamp": "2026-05-15T07:57:57.097200",
              "price": 39.88,
              "size": 200.0,
              "notional": 7976.000000000001,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 74771,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4073",
              "timestamp": "2026-05-15T07:57:49.446680",
              "price": 39.86,
              "size": 100.0,
              "notional": 3986.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 74770,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4072",
              "timestamp": "2026-05-15T07:57:49.446680",
              "price": 39.86,
              "size": 100.0,
              "notional": 3986.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 74770,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4071",
              "timestamp": "2026-05-15T07:57:40.241217",
              "price": 39.86,
              "size": 100.0,
              "notional": 3986.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 74770,
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
          "n_trades": 77583,
          "n_runs": 21942,
          "n_trade_days": 63,
          "first_trade_date": "2026-02-09",
          "last_trade_date": "2026-05-15",
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
            "retail_pct": 0.23530928167253135,
            "mixed_pct": 0.1519920601162626,
            "instit_pct": 0.49166698890220795,
            "ambiguous_pct": 0.1210316693089981,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1210316693089981,
            "retail_qty_pct": 0.11427875061749977,
            "mixed_qty_pct": 0.15927991955746876,
            "instit_qty_pct": 0.636892307452267,
            "ambiguous_qty_pct": 0.08954902237276442,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.08954902237276442,
            "retail_notional_pct": 0.11741682880277642,
            "mixed_notional_pct": 0.15983569748091064,
            "instit_notional_pct": 0.6326015495296439,
            "ambiguous_notional_pct": 0.09014592418666897,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.09014592418666897
          },
          "run_composition": {
            "retail_pct": 0.4916142557651992,
            "mixed_pct": 0.1933734390666302,
            "instit_pct": 0.20508613617719443,
            "ambiguous_pct": 0.10992616899097621,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.10992616899097621,
            "retail_notional_pct": 0.09158066590567897,
            "mixed_notional_pct": 0.140385101305952,
            "instit_notional_pct": 0.6957185639119071,
            "unclear_notional_pct": 0.0723156688764619
          },
          "counts": {
            "trades": {
              "retail": 18256,
              "mixed": 11792,
              "institutional": 38145,
              "ambiguous": 9390,
              "unobservable": 0,
              "unclear": 9390
            },
            "runs": {
              "retail": 10787,
              "mixed": 4243,
              "institutional": 4500,
              "ambiguous": 2412,
              "unobservable": 0,
              "unclear": 2412
            }
          },
          "confidence": {
            "high": 0.6965180931546805,
            "medium": 0.19355573785434327,
            "low": 0.10992616899097621,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 15283,
            "medium": 4247,
            "low": 2412,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5312246239511234,
            "medium": 0.13887062887488238,
            "low": 0.3299047471739943,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 41214,
            "medium": 10774,
            "low": 25595,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8907346641144834,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.10992616899097621,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.4916142557651992,
          "dominance_gap": 0.2865281195880047,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 44386,
              "UNOBSERVABLE": 19840,
              "WALK_BOOK": 13356,
              "MULTI_FILL_SINGLE_PRICE": 1
            },
            "d2_information": {
              "UNOBSERVABLE": 77583
            },
            "d3_urgency": {
              "UNOBSERVABLE": 21942
            },
            "participant_confidence": {
              "HIGH": 15283,
              "MEDIUM": 4247,
              "LOW": 2412
            }
          },
          "trade_size": {
            "avg": 15711.098828867149,
            "median": 6570.0
          },
          "run_size": {
            "avg": 40006.827186218216,
            "median": 12770.0,
            "avg_length": 1.5196882690730107
          },
          "recent_trades": [
            {
              "trade_id": "4100",
              "timestamp": "2026-05-15T07:59:53.243609",
              "price": 39.86,
              "size": 100.0,
              "notional": 3986.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 74779,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4099",
              "timestamp": "2026-05-15T07:59:52.566512",
              "price": 39.9,
              "size": 300.0,
              "notional": 11970.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 74778,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4098",
              "timestamp": "2026-05-15T07:59:41.263690",
              "price": 39.9,
              "size": 100.0,
              "notional": 3990.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 74777,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4097",
              "timestamp": "2026-05-15T07:59:30.076068",
              "price": 39.9,
              "size": 100.0,
              "notional": 3990.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74776,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4096",
              "timestamp": "2026-05-15T07:59:30.045308",
              "price": 39.9,
              "size": 300.0,
              "notional": 11970.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74776,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4095",
              "timestamp": "2026-05-15T07:59:21.298122",
              "price": 39.92,
              "size": 700.0,
              "notional": 27944.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74776,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4094",
              "timestamp": "2026-05-15T07:59:18.497141",
              "price": 39.9,
              "size": 100.0,
              "notional": 3990.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74776,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4093",
              "timestamp": "2026-05-15T07:59:14.749806",
              "price": 39.92,
              "size": 100.0,
              "notional": 3992.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74776,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4092",
              "timestamp": "2026-05-15T07:59:09.647532",
              "price": 39.9,
              "size": 200.0,
              "notional": 7980.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74776,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4091",
              "timestamp": "2026-05-15T07:59:03.364875",
              "price": 39.9,
              "size": 100.0,
              "notional": 3990.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74776,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4090",
              "timestamp": "2026-05-15T07:59:03.347079",
              "price": 39.9,
              "size": 200.0,
              "notional": 7980.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74776,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4089",
              "timestamp": "2026-05-15T07:58:53.380882",
              "price": 39.86,
              "size": 100.0,
              "notional": 3986.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 74775,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4088",
              "timestamp": "2026-05-15T07:58:51.276197",
              "price": 39.9,
              "size": 100.0,
              "notional": 3990.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 74774,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4087",
              "timestamp": "2026-05-15T07:58:31.390495",
              "price": 39.9,
              "size": 100.0,
              "notional": 3990.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74773,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4086",
              "timestamp": "2026-05-15T07:58:31.390495",
              "price": 39.88,
              "size": 100.0,
              "notional": 3988.0000000000005,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74773,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4085",
              "timestamp": "2026-05-15T07:58:31.390495",
              "price": 39.88,
              "size": 100.0,
              "notional": 3988.0000000000005,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74773,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4084",
              "timestamp": "2026-05-15T07:58:31.390495",
              "price": 39.88,
              "size": 100.0,
              "notional": 3988.0000000000005,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74773,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4083",
              "timestamp": "2026-05-15T07:58:22.347089",
              "price": 39.86,
              "size": 100.0,
              "notional": 3986.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74773,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4082",
              "timestamp": "2026-05-15T07:58:22.347089",
              "price": 39.86,
              "size": 100.0,
              "notional": 3986.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74773,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4081",
              "timestamp": "2026-05-15T07:58:16.263129",
              "price": 39.88,
              "size": 1000.0,
              "notional": 39880.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74773,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4080",
              "timestamp": "2026-05-15T07:58:16.263129",
              "price": 39.88,
              "size": 100.0,
              "notional": 3988.0000000000005,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74773,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4079",
              "timestamp": "2026-05-15T07:58:06.457245",
              "price": 39.86,
              "size": 100.0,
              "notional": 3986.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74773,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4078",
              "timestamp": "2026-05-15T07:58:05.997408",
              "price": 39.86,
              "size": 500.0,
              "notional": 19930.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74773,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4077",
              "timestamp": "2026-05-15T07:58:03.338804",
              "price": 39.86,
              "size": 100.0,
              "notional": 3986.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74773,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4076",
              "timestamp": "2026-05-15T07:58:02.475075",
              "price": 39.88,
              "size": 500.0,
              "notional": 19940.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74773,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4075",
              "timestamp": "2026-05-15T07:58:01.228878",
              "price": 39.86,
              "size": 100.0,
              "notional": 3986.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 74772,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4074",
              "timestamp": "2026-05-15T07:57:57.097200",
              "price": 39.88,
              "size": 200.0,
              "notional": 7976.000000000001,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 74771,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4073",
              "timestamp": "2026-05-15T07:57:49.446680",
              "price": 39.86,
              "size": 100.0,
              "notional": 3986.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 74770,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4072",
              "timestamp": "2026-05-15T07:57:49.446680",
              "price": 39.86,
              "size": 100.0,
              "notional": 3986.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 74770,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4071",
              "timestamp": "2026-05-15T07:57:40.241217",
              "price": 39.86,
              "size": 100.0,
              "notional": 3986.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 74770,
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
          "n_trades": 151142,
          "n_runs": 45439,
          "n_trade_days": 126,
          "first_trade_date": "2025-10-30",
          "last_trade_date": "2026-05-15",
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
            "retail_pct": 0.2603975069801908,
            "mixed_pct": 0.15456325839276971,
            "instit_pct": 0.46459620753992936,
            "ambiguous_pct": 0.12044302708711013,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.12044302708711013,
            "retail_qty_pct": 0.13287919956327396,
            "mixed_qty_pct": 0.16030841060554987,
            "instit_qty_pct": 0.6112521728110862,
            "ambiguous_qty_pct": 0.0955602170200899,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0955602170200899,
            "retail_notional_pct": 0.13738799169312468,
            "mixed_notional_pct": 0.16104548414979872,
            "instit_notional_pct": 0.6044872714660713,
            "ambiguous_notional_pct": 0.09707925269100537,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.09707925269100537
          },
          "run_composition": {
            "retail_pct": 0.50923215739783,
            "mixed_pct": 0.20086269504170426,
            "instit_pct": 0.19280794031558793,
            "ambiguous_pct": 0.09709720724487775,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.09709720724487775,
            "retail_notional_pct": 0.10852049691383985,
            "mixed_notional_pct": 0.1486213832527525,
            "instit_notional_pct": 0.6687164035365298,
            "unclear_notional_pct": 0.07414171629687792
          },
          "counts": {
            "trades": {
              "retail": 39357,
              "mixed": 23361,
              "institutional": 70220,
              "ambiguous": 18204,
              "unobservable": 0,
              "unclear": 18204
            },
            "runs": {
              "retail": 23139,
              "mixed": 9127,
              "institutional": 8761,
              "ambiguous": 4412,
              "unobservable": 0,
              "unclear": 4412
            }
          },
          "confidence": {
            "high": 0.7019300600805476,
            "medium": 0.2009507251480006,
            "low": 0.09711921477145184,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 31895,
            "medium": 9131,
            "low": 4413,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5103214195921716,
            "medium": 0.13961704886795198,
            "low": 0.3500615315398764,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 77131,
            "medium": 21102,
            "low": 52909,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8880730209731726,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.09709720724487775,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.50923215739783,
          "dominance_gap": 0.3083694623561257,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 84294,
              "UNOBSERVABLE": 42795,
              "WALK_BOOK": 24052,
              "MULTI_FILL_SINGLE_PRICE": 1
            },
            "d2_information": {
              "UNOBSERVABLE": 151142
            },
            "d3_urgency": {
              "UNOBSERVABLE": 45439
            },
            "participant_confidence": {
              "HIGH": 31895,
              "MEDIUM": 9131,
              "LOW": 4413
            }
          },
          "trade_size": {
            "avg": 16433.000732159162,
            "median": 7530.0
          },
          "run_size": {
            "avg": 38142.01356742006,
            "median": 13300.0,
            "avg_length": 1.4514844076674223
          },
          "recent_trades": [
            {
              "trade_id": "4100",
              "timestamp": "2026-05-15T07:59:53.243609",
              "price": 39.86,
              "size": 100.0,
              "notional": 3986.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 74779,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4099",
              "timestamp": "2026-05-15T07:59:52.566512",
              "price": 39.9,
              "size": 300.0,
              "notional": 11970.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 74778,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4098",
              "timestamp": "2026-05-15T07:59:41.263690",
              "price": 39.9,
              "size": 100.0,
              "notional": 3990.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 74777,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4097",
              "timestamp": "2026-05-15T07:59:30.076068",
              "price": 39.9,
              "size": 100.0,
              "notional": 3990.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74776,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4096",
              "timestamp": "2026-05-15T07:59:30.045308",
              "price": 39.9,
              "size": 300.0,
              "notional": 11970.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74776,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4095",
              "timestamp": "2026-05-15T07:59:21.298122",
              "price": 39.92,
              "size": 700.0,
              "notional": 27944.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74776,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4094",
              "timestamp": "2026-05-15T07:59:18.497141",
              "price": 39.9,
              "size": 100.0,
              "notional": 3990.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74776,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4093",
              "timestamp": "2026-05-15T07:59:14.749806",
              "price": 39.92,
              "size": 100.0,
              "notional": 3992.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74776,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4092",
              "timestamp": "2026-05-15T07:59:09.647532",
              "price": 39.9,
              "size": 200.0,
              "notional": 7980.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74776,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4091",
              "timestamp": "2026-05-15T07:59:03.364875",
              "price": 39.9,
              "size": 100.0,
              "notional": 3990.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74776,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4090",
              "timestamp": "2026-05-15T07:59:03.347079",
              "price": 39.9,
              "size": 200.0,
              "notional": 7980.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74776,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4089",
              "timestamp": "2026-05-15T07:58:53.380882",
              "price": 39.86,
              "size": 100.0,
              "notional": 3986.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 74775,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4088",
              "timestamp": "2026-05-15T07:58:51.276197",
              "price": 39.9,
              "size": 100.0,
              "notional": 3990.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 74774,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4087",
              "timestamp": "2026-05-15T07:58:31.390495",
              "price": 39.9,
              "size": 100.0,
              "notional": 3990.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74773,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4086",
              "timestamp": "2026-05-15T07:58:31.390495",
              "price": 39.88,
              "size": 100.0,
              "notional": 3988.0000000000005,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74773,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4085",
              "timestamp": "2026-05-15T07:58:31.390495",
              "price": 39.88,
              "size": 100.0,
              "notional": 3988.0000000000005,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74773,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4084",
              "timestamp": "2026-05-15T07:58:31.390495",
              "price": 39.88,
              "size": 100.0,
              "notional": 3988.0000000000005,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74773,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4083",
              "timestamp": "2026-05-15T07:58:22.347089",
              "price": 39.86,
              "size": 100.0,
              "notional": 3986.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74773,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4082",
              "timestamp": "2026-05-15T07:58:22.347089",
              "price": 39.86,
              "size": 100.0,
              "notional": 3986.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74773,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4081",
              "timestamp": "2026-05-15T07:58:16.263129",
              "price": 39.88,
              "size": 1000.0,
              "notional": 39880.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74773,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4080",
              "timestamp": "2026-05-15T07:58:16.263129",
              "price": 39.88,
              "size": 100.0,
              "notional": 3988.0000000000005,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74773,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4079",
              "timestamp": "2026-05-15T07:58:06.457245",
              "price": 39.86,
              "size": 100.0,
              "notional": 3986.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74773,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4078",
              "timestamp": "2026-05-15T07:58:05.997408",
              "price": 39.86,
              "size": 500.0,
              "notional": 19930.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74773,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4077",
              "timestamp": "2026-05-15T07:58:03.338804",
              "price": 39.86,
              "size": 100.0,
              "notional": 3986.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74773,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4076",
              "timestamp": "2026-05-15T07:58:02.475075",
              "price": 39.88,
              "size": 500.0,
              "notional": 19940.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 74773,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4075",
              "timestamp": "2026-05-15T07:58:01.228878",
              "price": 39.86,
              "size": 100.0,
              "notional": 3986.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 74772,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4074",
              "timestamp": "2026-05-15T07:57:57.097200",
              "price": 39.88,
              "size": 200.0,
              "notional": 7976.000000000001,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 74771,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4073",
              "timestamp": "2026-05-15T07:57:49.446680",
              "price": 39.86,
              "size": 100.0,
              "notional": 3986.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 74770,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4072",
              "timestamp": "2026-05-15T07:57:49.446680",
              "price": 39.86,
              "size": 100.0,
              "notional": 3986.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 74770,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "4071",
              "timestamp": "2026-05-15T07:57:40.241217",
              "price": 39.86,
              "size": 100.0,
              "notional": 3986.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 74770,
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
      "n_trades": 151142,
      "n_runs": 45439,
      "n_trade_days": 126,
      "first_trade_date": "2025-10-30",
      "last_trade_date": "2026-05-15",
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
        "retail_pct": 0.2603975069801908,
        "mixed_pct": 0.15456325839276971,
        "instit_pct": 0.46459620753992936,
        "ambiguous_pct": 0.12044302708711013,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.12044302708711013,
        "retail_qty_pct": 0.13287919956327396,
        "mixed_qty_pct": 0.16030841060554987,
        "instit_qty_pct": 0.6112521728110862,
        "ambiguous_qty_pct": 0.0955602170200899,
        "unobservable_qty_pct": 0.0,
        "unclear_qty_pct": 0.0955602170200899,
        "retail_notional_pct": 0.13738799169312468,
        "mixed_notional_pct": 0.16104548414979872,
        "instit_notional_pct": 0.6044872714660713,
        "ambiguous_notional_pct": 0.09707925269100537,
        "unobservable_notional_pct": 0.0,
        "unclear_notional_pct": 0.09707925269100537
      },
      "run_composition": {
        "retail_pct": 0.50923215739783,
        "mixed_pct": 0.20086269504170426,
        "instit_pct": 0.19280794031558793,
        "ambiguous_pct": 0.09709720724487775,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.09709720724487775
      },
      "trade_size": {
        "avg": 16433.000732159162,
        "median": 7530.0
      },
      "run_size": {
        "avg": 38142.01356742006,
        "median": 13300.0,
        "avg_length": 1.4514844076674223
      },
      "confidence": {
        "high": 0.7019300600805476,
        "medium": 0.2009507251480006,
        "low": 0.09711921477145184,
        "na": 0.0
      },
      "confidence_counts": {
        "high": 31895,
        "medium": 9131,
        "low": 4413,
        "na": 0
      },
      "trade_confidence": {
        "high": 0.5103214195921716,
        "medium": 0.13961704886795198,
        "low": 0.3500615315398764,
        "na": 0.0
      },
      "trade_confidence_counts": {
        "high": 77131,
        "medium": 21102,
        "low": 52909,
        "na": 0
      },
      "counts": {
        "trades": {
          "retail": 39357,
          "mixed": 23361,
          "institutional": 70220,
          "ambiguous": 18204,
          "unobservable": 0,
          "unclear": 18204
        },
        "runs": {
          "retail": 23139,
          "mixed": 9127,
          "institutional": 8761,
          "ambiguous": 4412,
          "unobservable": 0,
          "unclear": 4412
        }
      },
      "observability": {
        "avg_feature_coverage": 0.8880730209731726,
        "observable_run_pct": 1.0,
        "ambiguous_run_pct": 0.09709720724487775,
        "unobservable_run_pct": 0.0
      },
      "dominant_bucket": "RETAIL",
      "dominant_label": "Retail-led",
      "dominant_share": 0.50923215739783,
      "dominance_gap": 0.3083694623561257,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2025-12",
            "n_trades": 11192,
            "n_runs": 4228,
            "retail_pct": 0.3221944245889921,
            "mixed_pct": 0.15948892065761258,
            "instit_pct": 0.40493209435310934,
            "ambiguous_pct": 0.11338456040028592,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.11338456040028592,
            "avg_trade_size": 15205.402762687634,
            "avg_run_notional": 26780.892909176917,
            "retail_qty_pct": 0.1846306769821887,
            "mixed_qty_pct": 0.1738481888199103,
            "instit_qty_pct": 0.5359109400349487,
            "ambiguous_qty_pct": 0.10561019416295236,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.10561019416295236,
            "retail_notional_pct": 0.18510720527198488,
            "mixed_notional_pct": 0.17430834331796316,
            "instit_notional_pct": 0.5350945616222249,
            "ambiguous_notional_pct": 0.10548988978782706,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.10548988978782706,
            "run_retail_pct": 0.5411542100283823,
            "run_mixed_pct": 0.21499526963103122,
            "run_instit_pct": 0.16177861873226113,
            "run_ambiguous_pct": 0.08207190160832545,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.08207190160832545,
            "avg_feature_coverage": 0.8790208136234625,
            "high_confidence_pct": 0.7029328287606433,
            "medium_confidence_pct": 0.21499526963103122,
            "low_confidence_pct": 0.08207190160832545,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-01",
            "n_trades": 31534,
            "n_runs": 10582,
            "retail_pct": 0.30249889008689035,
            "mixed_pct": 0.1654404769455191,
            "instit_pct": 0.4135536246590981,
            "ambiguous_pct": 0.11850700830849242,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.11850700830849242,
            "avg_trade_size": 15437.128708695376,
            "avg_run_notional": 31531.401786051785,
            "retail_qty_pct": 0.1786369373752759,
            "mixed_qty_pct": 0.16589452306911215,
            "instit_qty_pct": 0.5513948650687878,
            "ambiguous_qty_pct": 0.1040736744868242,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.1040736744868242,
            "retail_notional_pct": 0.178113346261804,
            "mixed_notional_pct": 0.1658091174240865,
            "instit_notional_pct": 0.5522773911880818,
            "ambiguous_notional_pct": 0.1038001451260277,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.1038001451260277,
            "run_retail_pct": 0.5314685314685315,
            "run_mixed_pct": 0.21357021357021358,
            "run_instit_pct": 0.17964467964467964,
            "run_ambiguous_pct": 0.07531657531657532,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.07531657531657532,
            "avg_feature_coverage": 0.8870582120582119,
            "high_confidence_pct": 0.7110187110187111,
            "medium_confidence_pct": 0.21357021357021358,
            "low_confidence_pct": 0.07541107541107542,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-02",
            "n_trades": 13910,
            "n_runs": 4477,
            "retail_pct": 0.303450754852624,
            "mixed_pct": 0.13867721063982746,
            "instit_pct": 0.4374550682961898,
            "ambiguous_pct": 0.12041696621135874,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.12041696621135874,
            "avg_trade_size": 13263.784514737601,
            "avg_run_notional": 26865.83149430422,
            "retail_qty_pct": 0.18407767790938478,
            "mixed_qty_pct": 0.14644941914321402,
            "instit_qty_pct": 0.5646833671138587,
            "ambiguous_qty_pct": 0.10478953583354246,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.10478953583354246,
            "retail_notional_pct": 0.18410272487481744,
            "mixed_notional_pct": 0.14642604662920172,
            "instit_notional_pct": 0.5645974646402152,
            "ambiguous_notional_pct": 0.10487376385576555,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.10487376385576555,
            "run_retail_pct": 0.5304891668528032,
            "run_mixed_pct": 0.19968729059638152,
            "run_instit_pct": 0.1833817288362743,
            "run_ambiguous_pct": 0.08644181371454099,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.08644181371454099,
            "avg_feature_coverage": 0.8896694214876032,
            "high_confidence_pct": 0.7138708956890775,
            "medium_confidence_pct": 0.19968729059638152,
            "low_confidence_pct": 0.08644181371454099,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-03",
            "n_trades": 26917,
            "n_runs": 7222,
            "retail_pct": 0.22796002526284503,
            "mixed_pct": 0.13705093435375412,
            "instit_pct": 0.5098636549392577,
            "ambiguous_pct": 0.12512538544414312,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.12512538544414312,
            "avg_trade_size": 16096.817323624475,
            "avg_run_notional": 41268.02283301024,
            "retail_qty_pct": 0.11352660317359412,
            "mixed_qty_pct": 0.15766462312945084,
            "instit_qty_pct": 0.6322477631976434,
            "ambiguous_qty_pct": 0.09656101049931168,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.09656101049931168,
            "retail_notional_pct": 0.11730012153427158,
            "mixed_notional_pct": 0.15773502224496233,
            "instit_notional_pct": 0.627793069284388,
            "ambiguous_notional_pct": 0.09717178693637803,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.09717178693637803,
            "run_retail_pct": 0.479645527554694,
            "run_mixed_pct": 0.19205206314040432,
            "run_instit_pct": 0.22334533370257548,
            "run_ambiguous_pct": 0.10495707560232623,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.10495707560232623,
            "avg_feature_coverage": 0.8883757961783438,
            "high_confidence_pct": 0.7024369980614789,
            "medium_confidence_pct": 0.19260592633619497,
            "low_confidence_pct": 0.10495707560232623,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-04",
            "n_trades": 22600,
            "n_runs": 6912,
            "retail_pct": 0.25853982300884953,
            "mixed_pct": 0.16261061946902655,
            "instit_pct": 0.4661504424778761,
            "ambiguous_pct": 0.11269911504424779,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.11269911504424779,
            "avg_trade_size": 18136.042440707963,
            "avg_run_notional": 40094.484048032406,
            "retail_qty_pct": 0.10996945364590152,
            "mixed_qty_pct": 0.17190152957730498,
            "instit_qty_pct": 0.6372709483958927,
            "ambiguous_qty_pct": 0.08085806838090077,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.08085806838090077,
            "retail_notional_pct": 0.10990969105846467,
            "mixed_notional_pct": 0.17210256509837096,
            "instit_notional_pct": 0.6373111410606732,
            "ambiguous_notional_pct": 0.08067660278249117,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.08067660278249117,
            "run_retail_pct": 0.5185185185185185,
            "run_mixed_pct": 0.19849537037037038,
            "run_instit_pct": 0.18344907407407407,
            "run_ambiguous_pct": 0.09953703703703703,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.09953703703703703,
            "avg_feature_coverage": 0.8862630208333333,
            "high_confidence_pct": 0.7019675925925926,
            "medium_confidence_pct": 0.19849537037037038,
            "low_confidence_pct": 0.09953703703703703,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-05",
            "n_trades": 21601,
            "n_runs": 5692,
            "retail_pct": 0.19818526920049997,
            "mixed_pct": 0.16827924633118838,
            "instit_pct": 0.5071524466459886,
            "ambiguous_pct": 0.12638303782232305,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.12638303782232305,
            "avg_trade_size": 13614.340687005231,
            "avg_run_notional": 44032.31619465917,
            "retail_qty_pct": 0.106974446887867,
            "mixed_qty_pct": 0.1467683931980197,
            "instit_qty_pct": 0.6562042436533571,
            "ambiguous_qty_pct": 0.09005291626075629,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.09005291626075629,
            "retail_notional_pct": 0.10885280059817083,
            "mixed_notional_pct": 0.1474656830512352,
            "instit_notional_pct": 0.6533967361779021,
            "ambiguous_notional_pct": 0.09028478017269184,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.09028478017269184,
            "run_retail_pct": 0.45924104005621924,
            "run_mixed_pct": 0.18921293042867182,
            "run_instit_pct": 0.21451159522136332,
            "run_ambiguous_pct": 0.13703443429374562,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.13703443429374562,
            "avg_feature_coverage": 0.9013879128601545,
            "high_confidence_pct": 0.6737526352775826,
            "medium_confidence_pct": 0.18921293042867182,
            "low_confidence_pct": 0.13703443429374562,
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
          "trade_id": "4100",
          "timestamp": "2026-05-15T07:59:53.243609",
          "price": 39.86,
          "size": 100.0,
          "notional": 3986.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 74779,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "4099",
          "timestamp": "2026-05-15T07:59:52.566512",
          "price": 39.9,
          "size": 300.0,
          "notional": 11970.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 74778,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "4098",
          "timestamp": "2026-05-15T07:59:41.263690",
          "price": 39.9,
          "size": 100.0,
          "notional": 3990.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 74777,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "4097",
          "timestamp": "2026-05-15T07:59:30.076068",
          "price": 39.9,
          "size": 100.0,
          "notional": 3990.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 74776,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "4096",
          "timestamp": "2026-05-15T07:59:30.045308",
          "price": 39.9,
          "size": 300.0,
          "notional": 11970.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 74776,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "4095",
          "timestamp": "2026-05-15T07:59:21.298122",
          "price": 39.92,
          "size": 700.0,
          "notional": 27944.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 74776,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "4094",
          "timestamp": "2026-05-15T07:59:18.497141",
          "price": 39.9,
          "size": 100.0,
          "notional": 3990.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 74776,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "4093",
          "timestamp": "2026-05-15T07:59:14.749806",
          "price": 39.92,
          "size": 100.0,
          "notional": 3992.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 74776,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "4092",
          "timestamp": "2026-05-15T07:59:09.647532",
          "price": 39.9,
          "size": 200.0,
          "notional": 7980.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 74776,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "4091",
          "timestamp": "2026-05-15T07:59:03.364875",
          "price": 39.9,
          "size": 100.0,
          "notional": 3990.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 74776,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "4090",
          "timestamp": "2026-05-15T07:59:03.347079",
          "price": 39.9,
          "size": 200.0,
          "notional": 7980.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 74776,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "4089",
          "timestamp": "2026-05-15T07:58:53.380882",
          "price": 39.86,
          "size": 100.0,
          "notional": 3986.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 74775,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "4088",
          "timestamp": "2026-05-15T07:58:51.276197",
          "price": 39.9,
          "size": 100.0,
          "notional": 3990.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 74774,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "4087",
          "timestamp": "2026-05-15T07:58:31.390495",
          "price": 39.9,
          "size": 100.0,
          "notional": 3990.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 74773,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "4086",
          "timestamp": "2026-05-15T07:58:31.390495",
          "price": 39.88,
          "size": 100.0,
          "notional": 3988.0000000000005,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 74773,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "4085",
          "timestamp": "2026-05-15T07:58:31.390495",
          "price": 39.88,
          "size": 100.0,
          "notional": 3988.0000000000005,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 74773,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "4084",
          "timestamp": "2026-05-15T07:58:31.390495",
          "price": 39.88,
          "size": 100.0,
          "notional": 3988.0000000000005,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 74773,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "4083",
          "timestamp": "2026-05-15T07:58:22.347089",
          "price": 39.86,
          "size": 100.0,
          "notional": 3986.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 74773,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "4082",
          "timestamp": "2026-05-15T07:58:22.347089",
          "price": 39.86,
          "size": 100.0,
          "notional": 3986.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 74773,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "4081",
          "timestamp": "2026-05-15T07:58:16.263129",
          "price": 39.88,
          "size": 1000.0,
          "notional": 39880.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 74773,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "4080",
          "timestamp": "2026-05-15T07:58:16.263129",
          "price": 39.88,
          "size": 100.0,
          "notional": 3988.0000000000005,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 74773,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "4079",
          "timestamp": "2026-05-15T07:58:06.457245",
          "price": 39.86,
          "size": 100.0,
          "notional": 3986.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 74773,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "4078",
          "timestamp": "2026-05-15T07:58:05.997408",
          "price": 39.86,
          "size": 500.0,
          "notional": 19930.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 74773,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "4077",
          "timestamp": "2026-05-15T07:58:03.338804",
          "price": 39.86,
          "size": 100.0,
          "notional": 3986.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 74773,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "4076",
          "timestamp": "2026-05-15T07:58:02.475075",
          "price": 39.88,
          "size": 500.0,
          "notional": 19940.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 74773,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "4075",
          "timestamp": "2026-05-15T07:58:01.228878",
          "price": 39.86,
          "size": 100.0,
          "notional": 3986.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 74772,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "4074",
          "timestamp": "2026-05-15T07:57:57.097200",
          "price": 39.88,
          "size": 200.0,
          "notional": 7976.000000000001,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 74771,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "4073",
          "timestamp": "2026-05-15T07:57:49.446680",
          "price": 39.86,
          "size": 100.0,
          "notional": 3986.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 74770,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "4072",
          "timestamp": "2026-05-15T07:57:49.446680",
          "price": 39.86,
          "size": 100.0,
          "notional": 3986.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 74770,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "4071",
          "timestamp": "2026-05-15T07:57:40.241217",
          "price": 39.86,
          "size": 100.0,
          "notional": 3986.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 74770,
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
      "total_trades": 151141,
      "price_moving_trades": 45406,
      "pct_price_moving": 30.04214607551889,
      "all_movers": {
        "count": 45406,
        "avg_size": 16981.84794938995,
        "median_size": 7368.75,
        "retail_count": 16783,
        "mixed_count": 8673,
        "institutional_count": 15761,
        "ambiguous_count": 4189,
        "unobservable_count": 0,
        "retail_pct": 36.962075496630405,
        "mixed_pct": 19.100999867858874,
        "instit_pct": 34.7112716381095,
        "unclear_pct": 9.225652997401225
      },
      "positive_movers": {
        "count": 22623,
        "avg_size": 15227.804766830217,
        "median_size": 7259.999999999999,
        "retail_count": 8057,
        "mixed_count": 4311,
        "institutional_count": 8198,
        "ambiguous_count": 2057,
        "unobservable_count": 0,
        "retail_pct": 35.6141979401494,
        "mixed_pct": 19.055828139504044,
        "instit_pct": 36.23745745480264,
        "unclear_pct": 9.092516465543914
      },
      "negative_movers": {
        "count": 22783,
        "avg_size": 18723.57287231708,
        "median_size": 7425.0,
        "retail_count": 8726,
        "mixed_count": 4362,
        "institutional_count": 7563,
        "ambiguous_count": 2132,
        "unobservable_count": 0,
        "retail_pct": 38.30048720537243,
        "mixed_pct": 19.14585436509678,
        "instit_pct": 33.1958038888645,
        "unclear_pct": 9.357854540666287
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
          "opening": 0.0028342326557084705,
          "continuous": 0.9394757040218349,
          "closing": 0.014317557077263222,
          "auctions": 0.01715178973297169,
          "other": 0.043372506245193336
        },
        "1M": {
          "opening": 0.0010015694253870985,
          "continuous": 0.9167691185639277,
          "closing": 0.012434511454916204,
          "auctions": 0.013436080880303302,
          "other": 0.06979480055576891
        },
        "3M": {
          "opening": 0.0010158382514589563,
          "continuous": 0.9368013760814942,
          "closing": 0.011872228489567335,
          "auctions": 0.01288806674102629,
          "other": 0.05031055717747946
        },
        "6M": {
          "opening": 0.0009644963670329276,
          "continuous": 0.8923622142695663,
          "closing": 0.020697966821850492,
          "auctions": 0.02166246318888342,
          "other": 0.08597532254155028
        }
      },
      "hhi": {
        "1D": 0.10631613932109905,
        "1M": 0.14421304961425999,
        "3M": 0.16028571513440149,
        "6M": 0.15469961009444202
      },
      "profile_buckets": [
        {
          "time": "09:00",
          "avg_share": 0.0036
        },
        {
          "time": "09:30",
          "avg_share": 0.1347
        },
        {
          "time": "10:00",
          "avg_share": 0.092
        },
        {
          "time": "10:30",
          "avg_share": 0.0917
        },
        {
          "time": "11:00",
          "avg_share": 0.0694
        },
        {
          "time": "11:30",
          "avg_share": 0.0452
        },
        {
          "time": "12:00",
          "avg_share": 0.0132
        },
        {
          "time": "13:00",
          "avg_share": 0.0807
        },
        {
          "time": "13:30",
          "avg_share": 0.0752
        },
        {
          "time": "14:00",
          "avg_share": 0.0944
        },
        {
          "time": "14:30",
          "avg_share": 0.0794
        },
        {
          "time": "15:00",
          "avg_share": 0.0762
        },
        {
          "time": "15:30",
          "avg_share": 0.1318
        },
        {
          "time": "16:00",
          "avg_share": 0.0124
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "1405",
          "auctions_pct": 2.819753346680591,
          "hhi": 0.15740088943756428,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400",
            "you": true
          }
        },
        {
          "ticker": "999",
          "auctions_pct": 0.8240619802034163,
          "hhi": 0.16406538212169133,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "6831",
          "auctions_pct": 1.1239814049562544,
          "hhi": 0.16456861669762088,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "9658",
          "auctions_pct": 4.080758806373782,
          "hhi": 0.17417941464961437,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "6862",
          "auctions_pct": 4.599944910481168,
          "hhi": 0.11212845194432099,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "9987",
          "auctions_pct": 16.985201820009713,
          "hhi": 0.12378743722174941,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "880",
          "auctions_pct": 2.9096480264399758,
          "hhi": 0.14330548560557213,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "1128",
          "auctions_pct": 4.502524756869679,
          "hhi": 0.1292103536429607,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "2643",
          "auctions_pct": 0.940033277649663,
          "hhi": 0.1488409783083369,
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
