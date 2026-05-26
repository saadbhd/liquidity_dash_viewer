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
      "ticker": "522",
      "name": "ASMPT",
      "marketCap": 71867961076.0,
      "sector": "Semiconductor Equipment & Materials",
      "industry": "Information Technology - Semiconductors"
    },
    {
      "ticker": "2631",
      "name": "SICC",
      "marketCap": 6325344000.0,
      "sector": "Semiconductor Equipment & Materials",
      "industry": "Information Technology - Semiconductors"
    },
    {
      "ticker": "650",
      "name": "PRODUCTIVE TECH",
      "marketCap": 4448145331.2,
      "sector": "Semiconductor Equipment & Materials",
      "industry": "Information Technology - Semiconductors"
    },
    {
      "ticker": "2726",
      "name": "EPIWORLD",
      "marketCap": 12938891052.8,
      "sector": "Semiconductor Equipment & Materials",
      "industry": "Information Technology - Semiconductors"
    },
    {
      "ticker": "2577",
      "name": "INNOSCIENCE",
      "marketCap": 40361563161.6,
      "sector": "Semiconductors",
      "industry": "Information Technology - Semiconductors"
    },
    {
      "ticker": "9903",
      "name": "ILUVATAR COREX",
      "marketCap": 120590166780.0,
      "sector": "Semiconductors",
      "industry": "Information Technology - Semiconductors"
    },
    {
      "ticker": "3986",
      "name": "GIGADEVICE",
      "marketCap": 18089686400.0,
      "sector": "Semiconductors",
      "industry": "Information Technology - Semiconductors"
    },
    {
      "ticker": "6809",
      "name": "MONTAGE TECH",
      "marketCap": 33991992100.0,
      "sector": "Semiconductors",
      "industry": "Information Technology - Semiconductors"
    },
    {
      "ticker": "1385",
      "name": "SHANGHAI FUDAN",
      "marketCap": 10901212200.000002,
      "sector": "Semiconductors",
      "industry": "Information Technology - Semiconductors"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XHKG",
    "currency": "HKD",
    "ticker": "522",
    "company": "ASMPT",
    "asof_date": "2026-05-15",
    "industry": "Information Technology - Semiconductors",
    "sector": "Semiconductor Equipment & Materials",
    "market_cap_display": "71.9B",
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
          "score_pca": 97.35511474134579,
          "score_pca_percentile": 97.35511474134579,
          "rank_pca": 69,
          "total": 2571,
          "adv_notional_sgd": 1122816000.0,
          "adv_volume_shares": 6528000.0,
          "free_float_shares": 235428081.0,
          "turnover_ratio": 0.027728213101307995,
          "votes": 14338.0,
          "trades": 14338.0,
          "spread_pct": 0.0017189012136211946,
          "spread_ticks": 2.904835540092136,
          "amihud": 1.5506985636512022e-12,
          "volatility": 0.5151531714033117
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
          "peer_median_adv": 1103279520.0,
          "peer_median_score_pca": 96.927265655387,
          "peer_median_trades": 11008.0,
          "peer_median_volatility": 1.499771462236854,
          "peer_median_spread_pct": 0.0023909326478400257,
          "peer_median_spread_ticks": 2.699632543565004,
          "peer_median_amihud": 5.5125762233634454e-11,
          "peer_median_turnover_ratio": 0.049279646453806544,
          "target_vs_peer": {
            "score_pca_delta": 0.43,
            "adv_delta_pct": 1.8,
            "trades_delta_pct": 30.25,
            "volatility_delta_pct": 65.65,
            "spread_pct_delta_pct": 28.11,
            "spread_ticks_delta_pct": 7.6,
            "amihud_delta_pct": 97.19,
            "turnover_ratio_delta_pct": -43.73
          }
        },
        "peer_liquidity": [
          {
            "ticker": "522",
            "score_pca": 97.35511474134579,
            "rank_pca": 69,
            "adv": 1122816000.0,
            "trades": 14338.0,
            "volatility": 0.5151531714033117,
            "spread_pct": 0.0017189012136211946,
            "spread_ticks": 2.904835540092136,
            "amihud": 1.5506985636512022e-12,
            "turnover_ratio": 0.027728213101307995,
            "is_target": true
          },
          {
            "ticker": "2631",
            "score_pca": 99.80552314274601,
            "rank_pca": 6,
            "adv": 2148238080.0,
            "trades": 38951.0,
            "volatility": 2.0683214572690387,
            "spread_pct": 0.002342216984958486,
            "spread_ticks": 2.699632543565004,
            "amihud": 4.8828435670921906e-11,
            "turnover_ratio": 0.37979611511378925,
            "is_target": false
          },
          {
            "ticker": "650",
            "score_pca": 85.64760793465578,
            "rank_pca": 370,
            "adv": 22701600.0,
            "trades": 902.0,
            "volatility": 1.5664017982964522,
            "spread_pct": 0.022824521542916875,
            "spread_ticks": 1.3936507936507936,
            "amihud": 2.097607552729661e-09,
            "turnover_ratio": 0.012510616544877525,
            "is_target": false
          },
          {
            "ticker": "2726",
            "score_pca": 86.07545702061455,
            "rank_pca": 359,
            "adv": 35952960.0,
            "trades": 808.0,
            "volatility": 1.433141126177256,
            "spread_pct": 0.009464536682941432,
            "spread_ticks": 10.758415251712838,
            "amihud": 3.0499936902458917e-09,
            "turnover_ratio": 0.006113716005764006,
            "is_target": false
          },
          {
            "ticker": "2577",
            "score_pca": 99.61104628549202,
            "rank_pca": 11,
            "adv": 1775370240.0,
            "trades": 43048.0,
            "volatility": 1.5738065470674496,
            "spread_pct": 0.001494779315657185,
            "spread_ticks": 2.380779159821638,
            "amihud": 6.1423088796347e-11,
            "turnover_ratio": 0.06552849495978984,
            "is_target": false
          },
          {
            "ticker": "9903",
            "score_pca": 94.67133411124075,
            "rank_pca": 138,
            "adv": 431188800.0,
            "trades": 5250.0,
            "volatility": 0.9362707615837835,
            "spread_pct": 0.0025653797857701547,
            "spread_ticks": 5.48984513835999,
            "amihud": 3.52796031246374e-11,
            "turnover_ratio": 0.008183326992282032,
            "is_target": false
          },
          {
            "ticker": "3986",
            "score_pca": 99.10540645663166,
            "rank_pca": 24,
            "adv": 1829744000.0,
            "trades": 16766.0,
            "volatility": 1.0804318913637119,
            "spread_pct": 0.002439648310721565,
            "spread_ticks": 2.5956994237537225,
            "amihud": 2.0318834227246722e-11,
            "turnover_ratio": 0.11632048914434323,
            "is_target": false
          },
          {
            "ticker": "6809",
            "score_pca": 99.72773239984441,
            "rank_pca": 8,
            "adv": 3462877980.0,
            "trades": 35782.0,
            "volatility": 1.681266001790536,
            "spread_pct": 0.001808052432765842,
            "spread_ticks": 4.10433864258465,
            "amihud": 2.0233555844698865e-11,
            "turnover_ratio": 0.15570419168682062,
            "is_target": false
          },
          {
            "ticker": "1385",
            "score_pca": 94.74912485414235,
            "rank_pca": 136,
            "adv": 341923941.36,
            "trades": 4800.0,
            "volatility": 0.6664173883807374,
            "spread_pct": 0.0016815195645124596,
            "spread_ticks": null,
            "amihud": 1.6823075817683706e-10,
            "turnover_ratio": 0.033030797947823244,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Semiconductor Equipment & Materials",
          "sector_count": 8,
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
              "mean": 1.509271575126265,
              "median": 1.499771462236854,
              "min": 0.25837932532352564,
              "max": 3.354344889512927,
              "p5": 0.34825017145145076,
              "p95": 2.9042366882275656,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 437925933.4375,
              "median": 29327280.0,
              "min": 451980.00000000006,
              "max": 2148238080.0,
              "p5": 1638459.0,
              "p95": 1789340351.9999995,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.01477486785632854,
              "median": 0.009955214093776693,
              "min": 0.0017189012136211946,
              "max": 0.032992324283941256,
              "p5": 0.0019370617335892468,
              "p95": 0.03201226557492418,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.07893686799162565,
              "median": 0.02259565859607359,
              "min": 0.002415650422447907,
              "max": 0.37979611511378925,
              "p5": 0.003709973376608542,
              "p95": 0.28772412556654514,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.484024161921207e-09,
              "median": 1.756152436712102e-09,
              "min": 0.0,
              "max": 4.1745042984870746e-08,
              "p5": 5.427444972779208e-13,
              "p95": 3.6764343354573965e-08,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 7414.5,
              "median": 855.0,
              "min": 48.0,
              "max": 38951.0,
              "p5": 73.55,
              "p95": 30336.449999999986,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 1255999700.17,
              "median": 1103279520.0,
              "min": 22701600.0,
              "max": 3462877980.0,
              "p5": 27339576.0,
              "p95": 3002754014.999999,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 18288.375,
              "median": 11008.0,
              "min": 808.0,
              "max": 43048.0,
              "p5": 840.9,
              "p95": 41614.049999999996,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.3757571214911206,
              "median": 1.499771462236854,
              "min": 0.6664173883807374,
              "max": 2.0683214572690387,
              "p5": 0.7608660690018035,
              "p95": 1.9328520478515625,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.005577581827530501,
              "median": 0.0023909326478400257,
              "min": 0.001494779315657185,
              "max": 0.022824521542916875,
              "p5": 0.001560138402756531,
              "p95": 0.01814852684192546,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 4.203194421921234,
              "median": 2.699632543565004,
              "min": 1.3936507936507936,
              "max": 10.758415251712838,
              "p5": 1.689789303502047,
              "p95": 9.17784421770698,
              "count": 7
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.877394398520302e-10,
              "median": 5.5125762233634454e-11,
              "min": 2.0233555844698865e-11,
              "max": 3.0499936902458917e-09,
              "p5": 2.0263403278590614e-11,
              "p95": 2.7166585421152105e-09,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0971484685494362,
              "median": 0.049279646453806544,
              "min": 0.006113716005764006,
              "max": 0.37979611511378925,
              "p5": 0.006838079851045315,
              "p95": 0.3013639419143501,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": -0.0017411491584445882,
            "market": -0.0037607784150035517,
            "sector": -0.0008705745792223496,
            "peers": -0.06379422944275659,
            "vs_market": 0.0020196292565589635,
            "vs_sector": -0.0008705745792222386,
            "vs_peers": 0.062053080284312
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 98.79424348502528,
          "score_pca_percentile": 98.79424348502528,
          "rank_pca": 32,
          "total": 2571,
          "adv_notional_sgd": 724023630.0,
          "adv_volume_shares": 4286700.0,
          "free_float_shares": 235428081.0,
          "turnover_ratio": 0.01820810831822564,
          "votes": 13813.0,
          "trades": 13813.0,
          "spread_pct": 0.0013399231430862902,
          "spread_ticks": 2.2405098365198115,
          "amihud": 3.63177237159789e-11,
          "volatility": 0.5406023093939868
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
          "peer_median_adv": 368696810.0,
          "peer_median_score_pca": 95.79929988331389,
          "peer_median_trades": 6884.0,
          "peer_median_volatility": 1.0883605148350575,
          "peer_median_spread_pct": 0.0025070878308967124,
          "peer_median_spread_ticks": 3.7110625909752546,
          "peer_median_amihud": 7.422269760842793e-11,
          "peer_median_turnover_ratio": 0.018268663040174986,
          "target_vs_peer": {
            "score_pca_delta": 2.99,
            "adv_delta_pct": 96.4,
            "trades_delta_pct": 100.65,
            "volatility_delta_pct": 50.33,
            "spread_pct_delta_pct": 46.55,
            "spread_ticks_delta_pct": -39.63,
            "amihud_delta_pct": 51.07,
            "turnover_ratio_delta_pct": -0.33
          }
        },
        "peer_liquidity": [
          {
            "ticker": "522",
            "score_pca": 98.79424348502528,
            "rank_pca": 32,
            "adv": 724023630.0,
            "trades": 13813.0,
            "volatility": 0.5406023093939868,
            "spread_pct": 0.0013399231430862902,
            "spread_ticks": 2.2405098365198115,
            "amihud": 3.63177237159789e-11,
            "turnover_ratio": 0.01820810831822564,
            "is_target": true
          },
          {
            "ticker": "2631",
            "score_pca": 96.88837028393621,
            "rank_pca": 81,
            "adv": 289862870.0,
            "trades": 7272.0,
            "volatility": 1.3218390842541115,
            "spread_pct": 0.0029388037254246173,
            "spread_ticks": 3.7110625909752546,
            "amihud": 8.373595686756461e-11,
            "turnover_ratio": 0.09096377548853848,
            "is_target": false
          },
          {
            "ticker": "650",
            "score_pca": 76.5460910151692,
            "rank_pca": 604,
            "adv": 25058039.999999996,
            "trades": 1057.0,
            "volatility": 1.768164705340099,
            "spread_pct": 0.019113921020868015,
            "spread_ticks": 1.3592233009708738,
            "amihud": 2.55685900256065e-09,
            "turnover_ratio": 0.013542113175680305,
            "is_target": false
          },
          {
            "ticker": "2726",
            "score_pca": 75.2236483858421,
            "rank_pca": 638,
            "adv": 23452200.0,
            "trades": 350.0,
            "volatility": 0.820435544405509,
            "spread_pct": 0.01011386927270974,
            "spread_ticks": 11.309205903021786,
            "amihud": 1.2483586424524151e-09,
            "turnover_ratio": 0.004025857475727789,
            "is_target": false
          },
          {
            "ticker": "2577",
            "score_pca": 97.74406845585375,
            "rank_pca": 59,
            "adv": 447530750.0,
            "trades": 12966.0,
            "volatility": 0.9889742049872704,
            "spread_pct": 0.001410676955950916,
            "spread_ticks": 1.8658994245684264,
            "amihud": 5.997556896214872e-11,
            "turnover_ratio": 0.018808034159494634,
            "is_target": false
          },
          {
            "ticker": "9903",
            "score_pca": 94.71022948269156,
            "rank_pca": 137,
            "adv": 567578260.0,
            "trades": 6496.0,
            "volatility": 1.3628832607718873,
            "spread_pct": 0.00258505282078696,
            "spread_ticks": 4.48568114260857,
            "amihud": 6.470943834929126e-11,
            "turnover_ratio": 0.010991093339360087,
            "is_target": false
          },
          {
            "ticker": "3986",
            "score_pca": 98.71645274212368,
            "rank_pca": 34,
            "adv": 899507700.0,
            "trades": 9028.0,
            "volatility": 0.9511675360069312,
            "spread_pct": 0.002429122841006465,
            "spread_ticks": 4.741606188691283,
            "amihud": 4.687814620309402e-11,
            "turnover_ratio": 0.06930121248590736,
            "is_target": false
          },
          {
            "ticker": "6809",
            "score_pca": 99.29988331388564,
            "rank_pca": 19,
            "adv": 905772000.0,
            "trades": 14222.0,
            "volatility": 1.1877468246828446,
            "spread_pct": 0.0022881200104463814,
            "spread_ticks": 3.4771156872135185,
            "amihud": 4.686602634994776e-11,
            "turnover_ratio": 0.07814356340781052,
            "is_target": false
          },
          {
            "ticker": "1385",
            "score_pca": 93.30999611046286,
            "rank_pca": 173,
            "adv": 208530398.88,
            "trades": 3124.0,
            "volatility": 0.6363152770267793,
            "spread_pct": 0.0022864851463782103,
            "spread_ticks": null,
            "amihud": 1.335214345394921e-10,
            "turnover_ratio": 0.017729291920855338,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Semiconductor Equipment & Materials",
          "sector_count": 8,
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
              "mean": 1.412171631407095,
              "median": 1.121469445681645,
              "min": 0.497492341835014,
              "max": 3.926298032269465,
              "p5": 0.5125808304806545,
              "p95": 3.170951367844186,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 133778375.745,
              "median": 14300140.0,
              "min": 302940.96,
              "max": 724023630.0,
              "p5": 410875.374,
              "p95": 572067363.9999998,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.017496466767975512,
              "median": 0.011119244457088543,
              "min": 0.0013399231430862902,
              "max": 0.048987589810581364,
              "p5": 0.001899531346904705,
              "p95": 0.044187197306944814,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.019690540639078793,
              "median": 0.010718654830596905,
              "min": 0.0020099135060925705,
              "max": 0.09096377548853848,
              "p5": 0.0022900836487992154,
              "p95": 0.06549929197892895,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.17667767042724e-08,
              "median": 3.320387365201391e-09,
              "min": 3.63177237159789e-11,
              "max": 1.68146875438912e-07,
              "p5": 5.2914105319033894e-11,
              "p95": 1.3225717983582546e-07,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2852.625,
              "median": 241.5,
              "min": 26.0,
              "max": 13813.0,
              "p5": 37.2,
              "p95": 11523.649999999996,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 420911527.36,
              "median": 368696810.0,
              "min": 23452200.0,
              "max": 905772000.0,
              "p5": 24014244.0,
              "p95": 903579495.0,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 6814.375,
              "median": 6884.0,
              "min": 350.0,
              "max": 14222.0,
              "p5": 597.45,
              "p95": 13782.4,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.129690804684429,
              "median": 1.0883605148350575,
              "min": 0.6363152770267793,
              "max": 1.768164705340099,
              "p5": 0.7007573706093346,
              "p95": 1.6263161997412248,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.005395756474196413,
              "median": 0.0025070878308967124,
              "min": 0.001410676955950916,
              "max": 0.019113921020868015,
              "p5": 0.001717209822600469,
              "p95": 0.015963902909012614,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 4.421399176864244,
              "median": 3.7110625909752546,
              "min": 1.3592233009708738,
              "max": 11.309205903021786,
              "p5": 1.5112261380501397,
              "p95": 9.33892598872263,
              "count": 7
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.301130270355754e-10,
              "median": 7.422269760842793e-11,
              "min": 4.686602634994776e-11,
              "max": 2.55685900256065e-09,
              "p5": 4.687026829854895e-11,
              "p95": 2.0988838765227672e-09,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.03793811768167181,
              "median": 0.018268663040174986,
              "min": 0.004025857475727789,
              "max": 0.09096377548853848,
              "p5": 0.006463690027999094,
              "p95": 0.08647670126028369,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.3564668769716095,
            "market": 0.03432254254015166,
            "sector": 0.16135992899397666,
            "peers": 0.1737006479053278,
            "vs_market": 0.32214433443145785,
            "vs_sector": 0.19510694797763284,
            "vs_peers": 0.1827662290662817
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 96.38273045507584,
          "score_pca_percentile": 96.38273045507584,
          "rank_pca": 94,
          "total": 2571,
          "adv_notional_sgd": 335212800.0,
          "adv_volume_shares": 3029800.0,
          "free_float_shares": 235428081.0,
          "turnover_ratio": 0.012869322924991263,
          "votes": 6967.0,
          "trades": 6967.0,
          "spread_pct": 0.0019102092128530164,
          "spread_ticks": 2.3111236589497457,
          "amihud": 7.144058493228755e-11,
          "volatility": 0.5303393475578697
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
          "peer_median_adv": 255117130.88,
          "peer_median_score_pca": 91.73473356670556,
          "peer_median_trades": 4060.5,
          "peer_median_volatility": 1.0149777735320356,
          "peer_median_spread_pct": 0.0026734653915500353,
          "peer_median_spread_ticks": 3.5943832152946973,
          "peer_median_amihud": 1.3944931211250063e-10,
          "peer_median_turnover_ratio": 0.016274268634448343,
          "target_vs_peer": {
            "score_pca_delta": 4.65,
            "adv_delta_pct": 31.4,
            "trades_delta_pct": 71.58,
            "volatility_delta_pct": 47.75,
            "spread_pct_delta_pct": 28.55,
            "spread_ticks_delta_pct": -35.7,
            "amihud_delta_pct": 48.77,
            "turnover_ratio_delta_pct": -20.92
          }
        },
        "peer_liquidity": [
          {
            "ticker": "522",
            "score_pca": 96.38273045507584,
            "rank_pca": 94,
            "adv": 335212800.0,
            "trades": 6967.0,
            "volatility": 0.5303393475578697,
            "spread_pct": 0.0019102092128530164,
            "spread_ticks": 2.3111236589497457,
            "amihud": 7.144058493228755e-11,
            "turnover_ratio": 0.012869322924991263,
            "is_target": true
          },
          {
            "ticker": "2631",
            "score_pca": 91.79307662388176,
            "rank_pca": 212,
            "adv": 98361540.0,
            "trades": 3408.0,
            "volatility": 0.9762760267683208,
            "spread_pct": 0.0028211646964420006,
            "spread_ticks": 3.3535803503573987,
            "amihud": 2.750091999350168e-10,
            "turnover_ratio": 0.03607960241764904,
            "is_target": false
          },
          {
            "ticker": "650",
            "score_pca": 64.5663166083236,
            "rank_pca": 912,
            "adv": 2940020.0,
            "trades": 146.0,
            "volatility": 1.575185905912858,
            "spread_pct": 0.02561138416330429,
            "spread_ticks": 1.575,
            "amihud": 7.657730095645073e-09,
            "turnover_ratio": 0.003352168055078982,
            "is_target": false
          },
          {
            "ticker": "2726",
            "score_pca": 74.40684558537534,
            "rank_pca": 659,
            "adv": 23452200.0,
            "trades": 381.0,
            "volatility": 0.9050886922609594,
            "spread_pct": 0.00982567743151906,
            "spread_ticks": 10.996330275229358,
            "amihud": 1.3509910620609539e-09,
            "turnover_ratio": 0.004132239279429235,
            "is_target": false
          },
          {
            "ticker": "2577",
            "score_pca": 97.54959159859978,
            "rank_pca": 64,
            "adv": 392152860.0,
            "trades": 12503.0,
            "volatility": 0.7932669034618343,
            "spread_pct": 0.0014459753032448179,
            "spread_ticks": 1.8607129359587709,
            "amihud": 8.422948778527158e-11,
            "turnover_ratio": 0.017315013572937615,
            "is_target": false
          },
          {
            "ticker": "9903",
            "score_pca": 90.00388953714507,
            "rank_pca": 258,
            "adv": 323780240.0,
            "trades": 4713.0,
            "volatility": 1.5708101499925815,
            "spread_pct": 0.0036287263925203228,
            "spread_ticks": 5.793728945322623,
            "amihud": 1.453771896855092e-10,
            "turnover_ratio": 0.009593279497798448,
            "is_target": false
          },
          {
            "ticker": "3986",
            "score_pca": 97.39401011279658,
            "rank_pca": 68,
            "adv": 651510000.0,
            "trades": 7264.0,
            "volatility": 1.0943574386371906,
            "spread_pct": 0.0025003745607921476,
            "spread_ticks": 4.815976217874952,
            "amihud": 6.70417236764132e-11,
            "turnover_ratio": 0.0549941554444283,
            "is_target": false
          },
          {
            "ticker": "6809",
            "score_pca": 96.927265655387,
            "rank_pca": 80,
            "adv": 438574499.99999994,
            "trades": 7798.0,
            "volatility": 1.0536795202957503,
            "spread_pct": 0.002352798956653553,
            "spread_ticks": 3.835186080231996,
            "amihud": 9.22176703294661e-11,
            "turnover_ratio": 0.04404084983470057,
            "is_target": false
          },
          {
            "ticker": "1385",
            "score_pca": 91.67639050952937,
            "rank_pca": 215,
            "adv": 186454021.76,
            "trades": 2628.0,
            "volatility": 0.7278807046385941,
            "spread_pct": 0.0025257660866580705,
            "spread_ticks": 2.6870411745930416,
            "amihud": 1.335214345394921e-10,
            "turnover_ratio": 0.015233523695959074,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Semiconductor Equipment & Materials",
          "sector_count": 8,
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
              "mean": 1.1278548338459882,
              "median": 0.9747773718013141,
              "min": 0.5303393475578697,
              "max": 2.3072565087327934,
              "p5": 0.5779443040685774,
              "p95": 2.0510317977458157,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 58332450.3275,
              "median": 3694012.0,
              "min": 32548.620000000003,
              "max": 335212800.0,
              "p5": 40144.103,
              "p95": 252314858.99999988,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0187697754397948,
              "median": 0.012497492134322013,
              "min": 0.0019102092128530164,
              "max": 0.05222797927461144,
              "p5": 0.002229043632109161,
              "p95": 0.04541656809334202,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.009115337330499901,
              "median": 0.0037422036672541087,
              "min": 0.00023978432980673769,
              "max": 0.03607960241764904,
              "p5": 0.0008610692648309782,
              "p95": 0.027956004595218808,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.0453844139921464e-07,
              "median": 5.901552775692175e-09,
              "min": 7.144058493228755e-11,
              "max": 6.206609496034954e-07,
              "p5": 1.4268960018324282e-10,
              "p95": 4.6804651289890753e-07,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1395.375,
              "median": 150.0,
              "min": 8.0,
              "max": 6967.0,
              "p5": 8.35,
              "p95": 5721.3499999999985,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 264653172.72,
              "median": 255117130.88,
              "min": 2940020.0,
              "max": 651510000.0,
              "p5": 10119283.0,
              "p95": 576982574.9999999,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 4855.125,
              "median": 4060.5,
              "min": 146.0,
              "max": 12503.0,
              "p5": 228.25,
              "p95": 10856.249999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.0870681677460112,
              "median": 1.0149777735320356,
              "min": 0.7278807046385941,
              "max": 1.575185905912858,
              "p5": 0.7507658742267281,
              "p95": 1.5736543913407612,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.006338983448891783,
              "median": 0.0026734653915500353,
              "min": 0.0014459753032448179,
              "max": 0.02561138416330429,
              "p5": 0.001763363581937875,
              "p95": 0.020086386807179453,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 4.364694497446017,
              "median": 3.5943832152946973,
              "min": 1.575,
              "max": 10.996330275229358,
              "p5": 1.6749995275855698,
              "p95": 9.175419809761998,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.2257647329571493e-09,
              "median": 1.3944931211250063e-10,
              "min": 6.70417236764132e-11,
              "max": 7.657730095645073e-09,
              "p5": 7.305744111451364e-11,
              "p95": 5.450371433890627e-09,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.02309260397474766,
              "median": 0.016274268634448343,
              "min": 0.003352168055078982,
              "max": 0.0549941554444283,
              "p5": 0.0036251929836015706,
              "p95": 0.051160498481023595,
              "count": 8
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": 0.7470797359065504,
            "market": 0.05789367348833019,
            "sector": 0.1685538925593315,
            "peers": 0.21870279914278745,
            "vs_market": 0.6891860624182202,
            "vs_sector": 0.5785258433472189,
            "vs_peers": 0.528376936763763
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 95.41034616880592,
          "score_pca_percentile": 95.41034616880592,
          "rank_pca": 119,
          "total": 2571,
          "adv_notional_sgd": 224956705.0,
          "adv_volume_shares": 2391150.0,
          "free_float_shares": 235428081.0,
          "turnover_ratio": 0.01015660489540328,
          "votes": 5905.0,
          "trades": 5905.0,
          "spread_pct": 0.0017608119354016458,
          "spread_ticks": 2.2615664318226374,
          "amihud": 7.762697681474158e-11,
          "volatility": 0.4870380329135385
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
          "peer_median_adv": 236269556.71,
          "peer_median_score_pca": 93.09607156748348,
          "peer_median_trades": 3713.0,
          "peer_median_volatility": 0.9793841062783548,
          "peer_median_spread_pct": 0.002673039308687102,
          "peer_median_spread_ticks": 3.6732582447943605,
          "peer_median_amihud": 1.416906340055568e-10,
          "peer_median_turnover_ratio": 0.016610592079638928,
          "target_vs_peer": {
            "score_pca_delta": 2.31,
            "adv_delta_pct": -4.8,
            "trades_delta_pct": 59.04,
            "volatility_delta_pct": 50.27,
            "spread_pct_delta_pct": 34.13,
            "spread_ticks_delta_pct": -38.43,
            "amihud_delta_pct": 45.21,
            "turnover_ratio_delta_pct": -38.85
          }
        },
        "peer_liquidity": [
          {
            "ticker": "522",
            "score_pca": 95.41034616880592,
            "rank_pca": 119,
            "adv": 224956705.0,
            "trades": 5905.0,
            "volatility": 0.4870380329135385,
            "spread_pct": 0.0017608119354016458,
            "spread_ticks": 2.2615664318226374,
            "amihud": 7.762697681474158e-11,
            "turnover_ratio": 0.01015660489540328,
            "is_target": true
          },
          {
            "ticker": "2631",
            "score_pca": 92.6876701672501,
            "rank_pca": 189,
            "adv": 98085915.0,
            "trades": 3155.0,
            "volatility": 0.8226468396065604,
            "spread_pct": 0.0028046078232811717,
            "spread_ticks": 3.3251311012505043,
            "amihud": 2.762398973209522e-10,
            "turnover_ratio": 0.03545841818183855,
            "is_target": false
          },
          {
            "ticker": "650",
            "score_pca": 57.79852197588487,
            "rank_pca": 1086,
            "adv": 606540.0,
            "trades": 68.0,
            "volatility": 1.1941827765385555,
            "spread_pct": 0.025678706043715988,
            "spread_ticks": 3.511330409356725,
            "amihud": 3.073554098434337e-08,
            "turnover_ratio": 0.0009833643515293838,
            "is_target": false
          },
          {
            "ticker": "2726",
            "score_pca": 74.75690392843252,
            "rank_pca": 650,
            "adv": 23452200.0,
            "trades": 381.0,
            "volatility": 0.9050886922609594,
            "spread_pct": 0.00982567743151906,
            "spread_ticks": 10.996330275229358,
            "amihud": 1.3509910620609539e-09,
            "turnover_ratio": 0.004132239279429235,
            "is_target": false
          },
          {
            "ticker": "2577",
            "score_pca": 97.58848697005055,
            "rank_pca": 63,
            "adv": 332950790.0,
            "trades": 10964.5,
            "volatility": 0.7375511979826075,
            "spread_pct": 0.0014103479652374236,
            "spread_ticks": 1.86176166929305,
            "amihud": 7.459878166734133e-11,
            "turnover_ratio": 0.014992143400820378,
            "is_target": false
          },
          {
            "ticker": "9903",
            "score_pca": 91.28743679502139,
            "rank_pca": 225,
            "adv": 264389740.0,
            "trades": 4271.0,
            "volatility": 1.470750501754084,
            "spread_pct": 0.0033985390822964027,
            "spread_ticks": 5.639331814730448,
            "amihud": 1.718854253342699e-10,
            "turnover_ratio": 0.008807067570881347,
            "is_target": false
          },
          {
            "ticker": "3986",
            "score_pca": 98.01633605600934,
            "rank_pca": 52,
            "adv": 578387900.0,
            "trades": 6959.0,
            "volatility": 1.0734166517166819,
            "spread_pct": 0.002541470794093032,
            "spread_ticks": 4.518002781079387,
            "amihud": 7.983474410758987e-11,
            "turnover_ratio": 0.054278283844818406,
            "is_target": false
          },
          {
            "ticker": "6809",
            "score_pca": 97.82185919875535,
            "rank_pca": 57,
            "adv": 438574499.99999994,
            "trades": 7798.0,
            "volatility": 1.0536795202957503,
            "spread_pct": 0.002352798956653553,
            "spread_ticks": 3.835186080231996,
            "amihud": 9.22176703294661e-11,
            "turnover_ratio": 0.04404084983470057,
            "is_target": false
          },
          {
            "ticker": "1385",
            "score_pca": 93.50447296771685,
            "rank_pca": 168,
            "adv": 208149373.42000002,
            "trades": 3071.0,
            "volatility": 0.6593822570283001,
            "spread_pct": 0.002319544562404824,
            "spread_ticks": 2.3789639941627403,
            "amihud": 1.1149584267684371e-10,
            "turnover_ratio": 0.01822904075845748,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Semiconductor Equipment & Materials",
          "sector_count": 8,
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
              "mean": 0.9473448109580942,
              "median": 0.8638677659337599,
              "min": 0.4870380329135385,
              "max": 1.6699517142345992,
              "p5": 0.5466324147689657,
              "p95": 1.5034325860409836,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 44304109.458749995,
              "median": 3639802.5,
              "min": 21540.0,
              "max": 224956705.0,
              "p5": 24630.7345,
              "p95": 180551928.49999994,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.02067375390067638,
              "median": 0.01626225507528294,
              "min": 0.0017608119354016458,
              "max": 0.05666701458069817,
              "p5": 0.00212614049615948,
              "p95": 0.0500088196033005,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.007769061565391158,
              "median": 0.0037385996610366373,
              "min": 0.00023022418401897344,
              "max": 0.03545841818183855,
              "p5": 0.0004283171960024403,
              "p95": 0.02660278353158619,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.334739572867649e-07,
              "median": 1.1156539682428509e-08,
              "min": 7.762697681474158e-11,
              "max": 6.31131031184283e-07,
              "p5": 1.4714149899191528e-10,
              "p95": 5.439026723583376e-07,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1223.375,
              "median": 144.0,
              "min": 6.0,
              "max": 5905.0,
              "p5": 6.35,
              "p95": 4942.499999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 243074619.8025,
              "median": 236269556.71,
              "min": 606540.0,
              "max": 578387900.0,
              "p5": 8602521.0,
              "p95": 529453209.9999999,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 4583.4375,
              "median": 3713.0,
              "min": 68.0,
              "max": 10964.5,
              "p5": 177.55,
              "p95": 9856.224999999999,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.9895873046479373,
              "median": 0.9793841062783548,
              "min": 0.6593822570283001,
              "max": 1.470750501754084,
              "p5": 0.6867413863623077,
              "p95": 1.3739517979286489,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.006291461582400182,
              "median": 0.002673039308687102,
              "min": 0.0014103479652374236,
              "max": 0.025678706043715988,
              "p5": 0.0017285667742460136,
              "p95": 0.020130146029447054,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 4.508254765666776,
              "median": 3.6732582447943605,
              "min": 1.86176166929305,
              "max": 10.996330275229358,
              "p5": 2.0427824829974415,
              "p95": 9.121380814054737,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.111600550980098e-09,
              "median": 1.416906340055568e-10,
              "min": 7.459878166734133e-11,
              "max": 3.073554098434337e-08,
              "p5": 7.643136852142832e-11,
              "p95": 2.045094851154451e-08,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.02261517590280942,
              "median": 0.016610592079638928,
              "min": 0.0009833643515293838,
              "max": 0.054278283844818406,
              "p5": 0.0020854705762943316,
              "p95": 0.05069518194127716,
              "count": 8
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": 0.9713467048710633,
            "market": 0.14932016380160373,
            "sector": 0.11377345040874953,
            "peers": 0.03411027857681459,
            "vs_market": 0.8220265410694596,
            "vs_sector": 0.8575732544623138,
            "vs_peers": 0.9372364262942487
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Near-term tradability is still serviceable, but the wider spread points to slightly less efficient access today.",
        "market_comparison": "The stock held up better than peers on the day, down 0.2% compared with a 6.4% drop, which matters because relative resilience can help keep trading interest in place."
      },
      "30d": {
        "liquidity": "Monthly tradability looks solid, with liquidity standing modestly ahead of peers and supporting reasonable access.",
        "market_comparison": "Return 35.6% vs peers 17.4%."
      },
      "3m": {
        "liquidity": "Three-month tradability appears firm, with liquidity running ahead of the peer group and supporting better access over the period.",
        "market_comparison": "The stock returned 74.7% over three months, compared with 21.9% for peers, which matters because stronger relative performance often coincides with deeper market interest."
      },
      "6m": {
        "liquidity": "Six-month tradability is average to slightly above average for its size, with a liquidity score of 95.4 compared with a 93.1 peer median.",
        "market_comparison": "Return 97.1% vs peers 3.4%."
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
          "median": 0.3440919797123845,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "34.4%",
          "display_range": null,
          "display_text": "34.4%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 34.4,
          "plain_english": "Market explains about 34.4% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.47216899891442377,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "47.2%",
          "display_range": null,
          "display_text": "47.2%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 47.2,
          "plain_english": "Sector explains about 47.2% of price moves in the current state."
        },
        "company_share": {
          "median": 0.1837390213731917,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "18.4%",
          "display_range": null,
          "display_text": "18.4%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 18.4,
          "plain_english": "Company-specific explains about 18.4% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": -5.684877576189466,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-5.68",
          "display_range": null,
          "display_text": "-5.68",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Very high",
          "plain_english": "Very high market link: a 1% market move has lined up with about a 5.68% stock move in the opposite direction in this state. The multiplier is unusually large and comes from only 251 trading days of history.",
          "value_num": -5.68
        },
        "beta_stock_lag": {
          "median": 1.0388641189511387,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.04",
          "display_range": null,
          "display_text": "1.04",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 1.04
        },
        "beta_sector": {
          "median": 4.404758375656836,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "4.40",
          "display_range": null,
          "display_text": "4.40",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Very high",
          "plain_english": "Very high sector link: a 1% sector move has lined up with about a 4.40% stock move in the same direction in this state.",
          "value_num": 4.4
        },
        "beta_market_lag": {
          "median": -11.555291155307149,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-11.56",
          "display_range": null,
          "display_text": "-11.56",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -11.56
        },
        "beta_sector_lag": {
          "median": 2.3942661313132994,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "2.39",
          "display_range": null,
          "display_text": "2.39",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 2.39
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
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5662642267384387,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "56.6%",
            "display_range": null,
            "display_text": "56.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 56.6,
            "plain_english": "Market explains about 56.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.5662642267384387,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.6%",
              "display_range": null,
              "display_text": "56.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 56.6,
              "plain_english": "Market explains about 56.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.065466360169169,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "6.5%",
              "display_range": null,
              "display_text": "6.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 6.5,
              "plain_english": "Sector explains about 6.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.36826941309239225,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.8%",
              "display_range": null,
              "display_text": "36.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 36.8,
              "plain_english": "Company-specific explains about 36.8% of price moves in the current state."
            }
          },
          "summary": "May: Mostly market-driven."
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
            "median": 0.4403714452506555,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "44.0%",
            "display_range": null,
            "display_text": "44.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 44.0,
            "plain_english": "Company-specific explains about 44.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.37701009678553815,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.7%",
              "display_range": null,
              "display_text": "37.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 37.7,
              "plain_english": "Market explains about 37.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.18261845796380638,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "18.3%",
              "display_range": null,
              "display_text": "18.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 18.3,
              "plain_english": "Sector explains about 18.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4403714452506555,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.0%",
              "display_range": null,
              "display_text": "44.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 44.0,
              "plain_english": "Company-specific explains about 44.0% of price moves in the current state."
            }
          },
          "summary": "Jun: More mixed, though company-driven still has the largest share."
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
            "median": 0.5143206218186629,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "51.4%",
            "display_range": null,
            "display_text": "51.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 51.4,
            "plain_english": "Company-specific explains about 51.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.1039594436526636,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "10.4%",
              "display_range": null,
              "display_text": "10.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 10.4,
              "plain_english": "Market explains about 10.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3817199345286734,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "38.2%",
              "display_range": null,
              "display_text": "38.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 38.2,
              "plain_english": "Sector explains about 38.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5143206218186629,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "51.4%",
              "display_range": null,
              "display_text": "51.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 51.4,
              "plain_english": "Company-specific explains about 51.4% of price moves in the current state."
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
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4019813839901821,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "40.2%",
            "display_range": null,
            "display_text": "40.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 40.2,
            "plain_english": "Market explains about 40.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.4019813839901821,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "40.2%",
              "display_range": null,
              "display_text": "40.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 40.2,
              "plain_english": "Market explains about 40.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.26273724732367376,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.3%",
              "display_range": null,
              "display_text": "26.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 26.3,
              "plain_english": "Sector explains about 26.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3352813686861443,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "33.5%",
              "display_range": null,
              "display_text": "33.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 33.5,
              "plain_english": "Company-specific explains about 33.5% of price moves in the current state."
            }
          },
          "summary": "Aug: More mixed, though market-driven still has the largest share."
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
            "median": 0.7050735869941479,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "70.5%",
            "display_range": null,
            "display_text": "70.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 70.5,
            "plain_english": "Company-specific explains about 70.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.1558739805148903,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "15.6%",
              "display_range": null,
              "display_text": "15.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 15.6,
              "plain_english": "Market explains about 15.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.13905243249096175,
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
              "median": 0.7050735869941479,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "70.5%",
              "display_range": null,
              "display_text": "70.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 70.5,
              "plain_english": "Company-specific explains about 70.5% of price moves in the current state."
            }
          },
          "summary": "Sep: Still clearly company-driven."
        },
        {
          "month_key": "2025-10",
          "month_label": "October 2025",
          "month_short_label": "Oct",
          "period_label": "2025-10-02 to 2025-10-31",
          "n_obs": 20,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.46587630577372097,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "46.6%",
            "display_range": null,
            "display_text": "46.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 46.6,
            "plain_english": "Market explains about 46.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.46587630577372097,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.6%",
              "display_range": null,
              "display_text": "46.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 46.6,
              "plain_english": "Market explains about 46.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1577084188400874,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "15.8%",
              "display_range": null,
              "display_text": "15.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 15.8,
              "plain_english": "Sector explains about 15.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3764152753861917,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.6%",
              "display_range": null,
              "display_text": "37.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 37.6,
              "plain_english": "Company-specific explains about 37.6% of price moves in the current state."
            }
          },
          "summary": "Oct: Mostly market-driven."
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
            "median": 0.5034301867635681,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "50.3%",
            "display_range": null,
            "display_text": "50.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 50.3,
            "plain_english": "Company-specific explains about 50.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3100595425660802,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "31.0%",
              "display_range": null,
              "display_text": "31.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 31.0,
              "plain_english": "Market explains about 31.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.18651027067035164,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "18.7%",
              "display_range": null,
              "display_text": "18.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 18.7,
              "plain_english": "Sector explains about 18.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5034301867635681,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.3%",
              "display_range": null,
              "display_text": "50.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 50.3,
              "plain_english": "Company-specific explains about 50.3% of price moves in the current state."
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
            "median": 0.4885746798836013,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "48.9%",
            "display_range": null,
            "display_text": "48.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
            "kind": "share_pct",
            "value_pct": 48.9,
            "plain_english": "Company-specific explains about 48.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2680290021311843,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.8%",
              "display_range": null,
              "display_text": "26.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 26.8,
              "plain_english": "Market explains about 26.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2433963179852143,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "24.3%",
              "display_range": null,
              "display_text": "24.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 24.3,
              "plain_english": "Sector explains about 24.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4885746798836013,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.9%",
              "display_range": null,
              "display_text": "48.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 48.9,
              "plain_english": "Company-specific explains about 48.9% of price moves in the current state."
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
            "median": 0.5727457152107225,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "57.3%",
            "display_range": null,
            "display_text": "57.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 57.3,
            "plain_english": "Company-specific explains about 57.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.24173867691133674,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "24.2%",
              "display_range": null,
              "display_text": "24.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 24.2,
              "plain_english": "Market explains about 24.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.18551560787794077,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "18.6%",
              "display_range": null,
              "display_text": "18.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 18.6,
              "plain_english": "Sector explains about 18.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5727457152107225,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "57.3%",
              "display_range": null,
              "display_text": "57.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 57.3,
              "plain_english": "Company-specific explains about 57.3% of price moves in the current state."
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
            "median": 0.4435034024636021,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "44.4%",
            "display_range": null,
            "display_text": "44.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
            "kind": "share_pct",
            "value_pct": 44.4,
            "plain_english": "Sector explains about 44.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.19631013177994752,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "19.6%",
              "display_range": null,
              "display_text": "19.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 19.6,
              "plain_english": "Market explains about 19.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.4435034024636021,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.4%",
              "display_range": null,
              "display_text": "44.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 44.4,
              "plain_english": "Sector explains about 44.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.36018646575645036,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.0%",
              "display_range": null,
              "display_text": "36.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 36.0,
              "plain_english": "Company-specific explains about 36.0% of price moves in the current state."
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
            "median": 0.3885151377025702,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "38.9%",
            "display_range": null,
            "display_text": "38.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 38.9,
            "plain_english": "Company-specific explains about 38.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.37848358050578024,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.8%",
              "display_range": null,
              "display_text": "37.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 37.8,
              "plain_english": "Market explains about 37.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.23300128179164956,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "23.3%",
              "display_range": null,
              "display_text": "23.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 23.3,
              "plain_english": "Sector explains about 23.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3885151377025702,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "38.9%",
              "display_range": null,
              "display_text": "38.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 38.9,
              "plain_english": "Company-specific explains about 38.9% of price moves in the current state."
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
            "median": 0.5012916560582651,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "50.1%",
            "display_range": null,
            "display_text": "50.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
            "kind": "share_pct",
            "value_pct": 50.1,
            "plain_english": "Company-specific explains about 50.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.27970059555890964,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "28.0%",
              "display_range": null,
              "display_text": "28.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 28.0,
              "plain_english": "Market explains about 28.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.21900774838282533,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "21.9%",
              "display_range": null,
              "display_text": "21.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 21.9,
              "plain_english": "Sector explains about 21.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5012916560582651,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.1%",
              "display_range": null,
              "display_text": "50.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 50.1,
              "plain_english": "Company-specific explains about 50.1% of price moves in the current state."
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
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.45182602772359953,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "45.2%",
            "display_range": null,
            "display_text": "45.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
            "kind": "share_pct",
            "value_pct": 45.2,
            "plain_english": "Market explains about 45.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.45182602772359953,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.2%",
              "display_range": null,
              "display_text": "45.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
              "kind": "share_pct",
              "value_pct": 45.2,
              "plain_english": "Market explains about 45.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.21611282841039575,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "21.6%",
              "display_range": null,
              "display_text": "21.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
              "kind": "share_pct",
              "value_pct": 21.6,
              "plain_english": "Sector explains about 21.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.33206114386600466,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "33.2%",
              "display_range": null,
              "display_text": "33.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
              "kind": "share_pct",
              "value_pct": 33.2,
              "plain_english": "Company-specific explains about 33.2% of price moves in the current state."
            }
          },
          "summary": "May: Mostly market-driven."
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
            "median": 0.019537523547439227,
            "low": 0.019537523547439227,
            "high": 0.019537523547439227
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
            "median": 0.03602072807262226,
            "low": 0.03602072807262226,
            "high": 0.03602072807262226
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
            0.08130081300813008,
            0.9186991869918699
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
        "market_link_display": "-5.68",
        "sector_link_display": "4.40",
        "market_link_explainer": "Very high market link. A 1% market move has lined up with about a 5.68% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 4.40% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "1.04",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "High Volatility",
        "dominant_driver": "sector",
        "dominant_driver_label": "Sector",
        "driver_share_pct": 47.2,
        "driver_share_display": "47.2%",
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
          "expected_duration_days": 11.363636363636363,
          "current_probability": 0.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.019537523547439227,
            "low": 0.019537523547439227,
            "high": 0.019537523547439227
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
            "median": 0.03602072807262226,
            "low": 0.03602072807262226,
            "high": 0.03602072807262226
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
          0.08130081300813008,
          0.9186991869918699
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.912,
            0.088
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
            114.0,
            11.0
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
        "text": "Liquidity score: 95.4 — Strong",
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
    "liq_subtitle": "Peer-relative liquidity is slightly above the group, while near-term trading quality is less efficient than the monthly average.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Returns are well ahead of peers and the market, giving the stock a firmer recent trading backdrop.",
    "perf_insight": "Performance is notably stronger, with a 1M return of 35.6% compared with 17.4% for peers and 3.4% for the market. That matters because the stock is trading with stronger momentum than the main comparison groups while liquidity remains broadly serviceable.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Sector moves are the main influence on the tape, accounting for 47.2% of current trading.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly sector-driven, accounting for about 47.2% of price changes. Other influences are market 34.4%, and company-specific 18.4%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 34.4%, sector 47.2%, and company-specific 18.4%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has shifted from company-driven to market-driven over Mar to May."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 34.4%, sector 47.2%, and company-specific 18.4%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "The tape is being driven more by the sector backdrop than by company-specific factors. That matters because current trading conditions are being shaped by broader market moves alongside a balanced order book.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now is the sector, accounting for 47.2% of current price moves.",
      "The monthly pattern has become more balanced after being more company-driven in March and April, with May mostly market-driven."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Trading conditions look balanced overall, with supportive bid depth but a still-meaningful spread.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on May 15, 2025 to May 15, 2026 (242 trading days • 1,618,875 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on the displayed order book.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate displayed depth broadly matches the stronger monthly liquidity read.",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "Execution looks balanced, with displayed bid depth at 1.44x ask depth and a spread of 7 ticks. That matters because the order book is supportive even as trading costs are higher than the monthly average.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 46.3% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Current trading conditions are balanced overall, with the order book showing more bid than ask depth.",
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
    "intraday_insight": "Displayed liquidity is holding up reasonably well, with bid depth at 1.44x ask depth and a spread of 7 ticks. That matters because immediate execution conditions still look workable even though the one-day spread is running 28.3% above the one-month average.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "The current trading picture is being shaped more by sector direction and displayed depth than by any separate short-driven signal.",
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
    "exec_subtitle": "Liquidity is mixed for its size, with slightly better peer standing offset by a wider spread on the day.",
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
        "value": "95.4/100",
        "sub": "Peer median 93.1 (+2.3 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "HK$225.0M",
        "sub": "Peer median HK$236.3M",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "0.18%",
        "sub": "2.26 ticks; peers 0.27%",
        "interp": {
          "text": "Tighter",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity is mixed rather than clearly strong or weak. The 6M liquidity score is 95.4, which is 2.3 points above the peer median, but the 1D spread is 28.3% above the 1M average. That matters because structural access looks slightly better than peers while near-term execution is less efficient than the recent norm.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "171.650",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "0.41%",
        "note": "7.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "1.44x",
        "note": "Bid depth / ask depth on the displayed order book",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-0.23% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-0.34% with 100.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-0.70% with 100.0% fill.",
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
        "value": "95",
        "suffix": "/100",
        "bar_pct": 95,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Rank 119/2571",
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
        "value": "0.18",
        "suffix": "%",
        "bar_pct": 2,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "0.18% • 2.26 ticks vs peers 0.27%",
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
        "value": "225.0M",
        "value_prefix": "HK$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-red-400",
        "color_bar": "bg-red-500",
        "subtext": "Peer median HK$236.3M",
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
        "value": "47.2",
        "suffix": "sector",
        "bar_pct": 47,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 34.4% • Company 18.4%",
        "interpretation": {
          "text": "Sector",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Liquidity is mixed for the stock’s size, with a 6M liquidity score of 95.4 compared with a peer median of 93.1. That keeps peer-relative access slightly above the group without making liquidity a clear standout strength.",
      "Near-term trading quality is less efficient than the monthly average, with the 1D spread 28.3% above the 1M level. That matters because immediate execution is a little more expensive even though the broader liquidity picture remains intact.",
      "Execution looks balanced overall, with displayed bid depth at 1.44x ask depth and a spread of 7 ticks. Sector factors account for 47.2% of the current driver mix, so broader market moves remain a meaningful influence on the tape."
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
      "overall": "6M liquidity is strong: score 95.4 vs peer median 93.1 (+2.3 pts). 1D spread up 28.3% from 1M. Recent flow does not show a clear deterioration from the monthly baseline.",
      "strengths": [
        "6M score 95.4 vs peer median 93.1 (+2.3 pts)."
      ],
      "concerns": [
        "1D spread up 28.3% from 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: +2.3 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is 97.1%, better than market, sector, and peers, which suggests stronger price performance than comparable names.",
        "vs_market": "Better than market: 97.1% vs market 14.9%.",
        "vs_sector": "Better than sector: 97.1% vs sector 11.4%.",
        "vs_peers": "Better than peers: 97.1% vs peers 3.4%."
      },
      "adv": {
        "insight": "ADV is HK$225.0M, better than market and sector, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: HK$225.0M vs market HK$215.6K.",
        "vs_sector": "Better than sector: HK$225.0M vs sector HK$3.6M.",
        "vs_peers": "In line with peers: HK$225.0M vs peers HK$236.3M."
      },
      "spread": {
        "insight": "Spread is 0.18%, better than market, sector, and peers, which keeps trading costs more competitive than comparable names.",
        "vs_market": "Better than market: 0.18% vs market 2.76%.",
        "vs_sector": "Better than sector: 0.18% vs sector 1.63%.",
        "vs_peers": "Better than peers: 0.18% vs peers 0.27%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 1.02%, better than market and sector, but worse than peers, which shows turnover is mixed across comparison groups.",
        "vs_market": "Better than market: 1.02% vs market 0.08%.",
        "vs_sector": "Better than sector: 1.02% vs sector 0.37%.",
        "vs_peers": "Worse than peers: 1.02% vs peers 1.66%."
      },
      "volatility": {
        "insight": "Volatility is 48.70%, better than market, sector, and peers, which suggests day-to-day price swings are more contained than comparable names.",
        "vs_market": "Better than market: 48.70% vs market 60.05%.",
        "vs_sector": "Better than sector: 48.70% vs sector 86.39%.",
        "vs_peers": "Better than peers: 48.70% vs peers 97.94%."
      },
      "trades": {
        "insight": "Trades is 5905, better than market, sector, and peers, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 5905 vs market 19.",
        "vs_sector": "Better than sector: 5905 vs sector 144.",
        "vs_peers": "Better than peers: 5905 vs peers 3713."
      },
      "amihud": {
        "insight": "Price impact is 7.76e-11, better than market, sector, and peers, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 7.76e-11 vs market 4.73e-08.",
        "vs_sector": "Better than sector: 7.76e-11 vs sector 1.12e-08.",
        "vs_peers": "Better than peers: 7.76e-11 vs peers 1.42e-10."
      }
    },
    "performance": {
      "overall": "Recent returns are strong relative to both peers and the market, with 1M performance of +35.6% compared with +17.4% for peers and +3.4% for the market. Liquidity broadly confirms that strength because the 6M liquidity score of 95.4 is 2.3 points above the peer median, even though the 1D spread is 28.3% above the 1M level and shows some near-term friction. The move also looks meaningfully sector-linked rather than purely company-specific, with sector factors accounting for 47.2% of the current driver mix.",
      "conclusion": "The outperformance looks broadly supported by liquidity and is being driven in meaningful part by sector moves rather than company news alone."
    },
    "drivers": {
      "overall": "Sector moves are the main force in the stock right now, accounting for 47.2% of current price action. That matters because recent performance is being shaped more by the group backdrop than by company-specific news, even after a strong 1M return of 35.6% compared with peers at 17.4% and the market at 3.4%.",
      "beta": "The current pattern looks mixed rather than fully settled, because sector influence is leading while the 1D spread is 28.3% above the 1M average. That points to a tape that is still tradable but a little less efficient than the monthly baseline.",
      "rolling_change": "The monthly picture has shifted away from a mainly sector pattern toward a more balanced one. March was mixed with company factors still leading, April was mostly sector, and May turned mostly market-driven, so the current sector-led read sits between those two recent extremes."
    },
    "regime": {
      "overall": "The stock is trading in a higher-volatility backdrop, and that matters because price moves are likely to stay less steady even with solid underlying liquidity for its size.",
      "current": "High volatility is in place now, while the stock has also outperformed over one month with a 35.6% return compared with 17.4% for peers and 3.4% for the market.",
      "transitions": "This looks more persistent than fleeting, with a typical run length of about 11.3 days, although the picture is still mixed.",
      "trading_implications": "This state looks more persistent, with a typical run length of about 11.3 days."
    },
    "execution": {
      "overall": "displayed bid depth is 1.44x ask depth; spread is 7 ticks. Immediate displayed depth broadly matches the stronger monthly liquidity read.",
      "concern": "The clearest stress point is the spread, which is 7 ticks and 28.3% wider than the 1M average. That means the book is present but trading costs have risen relative to the recent baseline.",
      "peer_context": "The displayed book broadly supports the stronger medium-term standing, with the 6M liquidity score at 95.4 compared with a peer median of 93.1. Even so, the wider day spread keeps the near-term picture mixed rather than clearly strong."
    },
    "trader_composition": {
      "overall": "Flow looks mixed on individual trade count and trade value, so the trading base appears balanced rather than clearly retail-led or institution-led.",
      "retail_heavy": "Retail-like trades dominate activity by count at 77.5%, but they account fo% of trade value. Institution-like trades are only 4.3% of count yet represent 44.6% of trade value, which shows that larger tickets still carry a meaningful share of turnover.",
      "institutional_gap": "The gap between count and value is material, with institutions contributing a much larger share of value than of trades. That split supports a mixed read on how dependable the flow is.",
      "peer_comparison": "The mix looks differentiated enough to matter in peer context, because high retail participation by count sits alongside a substantial institutional share of trade value."
    },
    "price_moving": {
      "overall": "Price-moving activity looks meaningful, with stronger recent returns and a sector driver still accounting for 47.2% of the tape. The signal is mixed rather than clean. The stock is up 35.6% over one month, ahead of peers at 17.4% and the market at 3.4%, but sector moves still explain nearly half of trading. The return backdrop is firm, but the driver mix is not purely company-specific. That means price moves are supported by momentum while still being influenced heavily by broader sector trading.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity does not appear to be the main issue in the tape. The clearer signals are strong one-month share price performance, up 35.6% and ahead of peers and the market, alongside a one-day spread that is 28.3% above the one-month average, which points more to normal trading friction than a separate short-driven pressure point.",
      "level": "N/A",
      "correlation": "N/A",
      "trend": "The short trend is not showing a clear change that alters the read. With sector factors still explaining 47.2% of trading and displayed bid depth running at 1.44 times ask depth, the broader picture remains driven more by market context and order-book balance than by short activity.",
      "peaks": "N/A"
    },
    "intraday": {
      "overall": "Session split is open 1.0%, continuous 83.6%, and close 5.8%. Current trading concentration score is 0.126.",
      "hhi_interpretation": "A concentration score of 0.126 suggests trading is not heavily packed into a few intervals, which supports a steadier intraday liquidity profile.",
      "best_times": "The continuous session is the clearest source of usable liquidity because it captures the large majority of trading activity.",
      "peer_ranking": "Intraday liquidity looks competitive for its size, supported by a 6M liquidity score of 95.4 compared with a peer median of 93.1."
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
        "522",
        "2631",
        "650",
        "2726",
        "2577",
        "9903",
        "3986",
        "6809",
        "1385"
      ],
      "scores": [
        95.41034616880592,
        92.6876701672501,
        57.79852197588487,
        74.75690392843252,
        97.58848697005055,
        91.28743679502139,
        98.01633605600934,
        97.82185919875535,
        93.50447296771685
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
        224956705.0,
        98085915.0,
        606540.0,
        23452200.0,
        332950790.0,
        264389740.0,
        578387900.0,
        438574499.99999994,
        208149373.42000002
      ],
      "total": 2571
    },
    "market_comparison": {
      "sector_name": "Semiconductor Equipment & Materials",
      "sector_count": 8,
      "market_count": 2571,
      "company": {
        "volatility": 0.4870380329135385,
        "adv": 224956705.0,
        "spread_pct": 0.0017608119354016458,
        "turnover_ratio": 0.01015660489540328,
        "amihud": 7.762697681474158e-11,
        "trades": 5905.0
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
          "mean": 0.9473448109580942,
          "median": 0.8638677659337599,
          "min": 0.4870380329135385,
          "max": 1.6699517142345992,
          "p5": 0.5466324147689657,
          "p95": 1.5034325860409836,
          "count": 8
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 44304109.458749995,
          "median": 3639802.5,
          "min": 21540.0,
          "max": 224956705.0,
          "p5": 24630.7345,
          "p95": 180551928.49999994,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.02067375390067638,
          "median": 0.01626225507528294,
          "min": 0.0017608119354016458,
          "max": 0.05666701458069817,
          "p5": 0.00212614049615948,
          "p95": 0.0500088196033005,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.007769061565391158,
          "median": 0.0037385996610366373,
          "min": 0.00023022418401897344,
          "max": 0.03545841818183855,
          "p5": 0.0004283171960024403,
          "p95": 0.02660278353158619,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.334739572867649e-07,
          "median": 1.1156539682428509e-08,
          "min": 7.762697681474158e-11,
          "max": 6.31131031184283e-07,
          "p5": 1.4714149899191528e-10,
          "p95": 5.439026723583376e-07,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1223.375,
          "median": 144.0,
          "min": 6.0,
          "max": 5905.0,
          "p5": 6.35,
          "p95": 4942.499999999998,
          "count": 8
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 243074619.8025,
          "median": 236269556.71,
          "min": 606540.0,
          "max": 578387900.0,
          "p5": 8602521.0,
          "p95": 529453209.9999999,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 4583.4375,
          "median": 3713.0,
          "min": 68.0,
          "max": 10964.5,
          "p5": 177.55,
          "p95": 9856.224999999999,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.9895873046479373,
          "median": 0.9793841062783548,
          "min": 0.6593822570283001,
          "max": 1.470750501754084,
          "p5": 0.6867413863623077,
          "p95": 1.3739517979286489,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.006291461582400182,
          "median": 0.002673039308687102,
          "min": 0.0014103479652374236,
          "max": 0.025678706043715988,
          "p5": 0.0017285667742460136,
          "p95": 0.020130146029447054,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 4.508254765666776,
          "median": 3.6732582447943605,
          "min": 1.86176166929305,
          "max": 10.996330275229358,
          "p5": 2.0427824829974415,
          "p95": 9.121380814054737,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 4.111600550980098e-09,
          "median": 1.416906340055568e-10,
          "min": 7.459878166734133e-11,
          "max": 3.073554098434337e-08,
          "p5": 7.643136852142832e-11,
          "p95": 2.045094851154451e-08,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.02261517590280942,
          "median": 0.016610592079638928,
          "min": 0.0009833643515293838,
          "max": 0.054278283844818406,
          "p5": 0.0020854705762943316,
          "p95": 0.05069518194127716,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": 0.3564668769716095,
        "market": 0.03432254254015166,
        "sector": 0.16135992899397666,
        "peers": 0.1737006479053278
      },
      {
        "horizon": "3M",
        "stock": 0.7470797359065504,
        "market": 0.05789367348833019,
        "sector": 0.1685538925593315,
        "peers": 0.21870279914278745
      },
      {
        "horizon": "6M",
        "stock": 0.9713467048710633,
        "market": 0.14932016380160373,
        "sector": 0.11377345040874953,
        "peers": 0.03411027857681459
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
      "share_market": 0.3440919797123845,
      "share_sector": 0.47216899891442377,
      "share_idio": 0.1837390213731917,
      "beta_market": -5.684877576189466,
      "beta_sector": 4.404758375656836,
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
            "median": 0.3440919797123845,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "34.4%",
            "display_range": null,
            "display_text": "34.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 34.4,
            "plain_english": "Market explains about 34.4% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.47216899891442377,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.2%",
            "display_range": null,
            "display_text": "47.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 47.2,
            "plain_english": "Sector explains about 47.2% of price moves in the current state."
          },
          "company_share": {
            "median": 0.1837390213731917,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "18.4%",
            "display_range": null,
            "display_text": "18.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 18.4,
            "plain_english": "Company-specific explains about 18.4% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": -5.684877576189466,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-5.68",
            "display_range": null,
            "display_text": "-5.68",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Very high",
            "plain_english": "Very high market link: a 1% market move has lined up with about a 5.68% stock move in the opposite direction in this state. The multiplier is unusually large and comes from only 251 trading days of history.",
            "value_num": -5.68
          },
          "beta_stock_lag": {
            "median": 1.0388641189511387,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.04",
            "display_range": null,
            "display_text": "1.04",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 1.04
          },
          "beta_sector": {
            "median": 4.404758375656836,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "4.40",
            "display_range": null,
            "display_text": "4.40",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Very high",
            "plain_english": "Very high sector link: a 1% sector move has lined up with about a 4.40% stock move in the same direction in this state.",
            "value_num": 4.4
          },
          "beta_market_lag": {
            "median": -11.555291155307149,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-11.56",
            "display_range": null,
            "display_text": "-11.56",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -11.56
          },
          "beta_sector_lag": {
            "median": 2.3942661313132994,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "2.39",
            "display_range": null,
            "display_text": "2.39",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 2.39
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
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5662642267384387,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.6%",
              "display_range": null,
              "display_text": "56.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 56.6,
              "plain_english": "Market explains about 56.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.5662642267384387,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "56.6%",
                "display_range": null,
                "display_text": "56.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 56.6,
                "plain_english": "Market explains about 56.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.065466360169169,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "6.5%",
                "display_range": null,
                "display_text": "6.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 6.5,
                "plain_english": "Sector explains about 6.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.36826941309239225,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "36.8%",
                "display_range": null,
                "display_text": "36.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 36.8,
                "plain_english": "Company-specific explains about 36.8% of price moves in the current state."
              }
            },
            "summary": "May: Mostly market-driven."
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
              "median": 0.4403714452506555,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.0%",
              "display_range": null,
              "display_text": "44.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 44.0,
              "plain_english": "Company-specific explains about 44.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.37701009678553815,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "37.7%",
                "display_range": null,
                "display_text": "37.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 37.7,
                "plain_english": "Market explains about 37.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.18261845796380638,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "18.3%",
                "display_range": null,
                "display_text": "18.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 18.3,
                "plain_english": "Sector explains about 18.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4403714452506555,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "44.0%",
                "display_range": null,
                "display_text": "44.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 44.0,
                "plain_english": "Company-specific explains about 44.0% of price moves in the current state."
              }
            },
            "summary": "Jun: More mixed, though company-driven still has the largest share."
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
              "median": 0.5143206218186629,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "51.4%",
              "display_range": null,
              "display_text": "51.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 51.4,
              "plain_english": "Company-specific explains about 51.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.1039594436526636,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "10.4%",
                "display_range": null,
                "display_text": "10.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 10.4,
                "plain_english": "Market explains about 10.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3817199345286734,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "38.2%",
                "display_range": null,
                "display_text": "38.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 38.2,
                "plain_english": "Sector explains about 38.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5143206218186629,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "51.4%",
                "display_range": null,
                "display_text": "51.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 51.4,
                "plain_english": "Company-specific explains about 51.4% of price moves in the current state."
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
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4019813839901821,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "40.2%",
              "display_range": null,
              "display_text": "40.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 40.2,
              "plain_english": "Market explains about 40.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.4019813839901821,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "40.2%",
                "display_range": null,
                "display_text": "40.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 40.2,
                "plain_english": "Market explains about 40.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.26273724732367376,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.3%",
                "display_range": null,
                "display_text": "26.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 26.3,
                "plain_english": "Sector explains about 26.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3352813686861443,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "33.5%",
                "display_range": null,
                "display_text": "33.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 33.5,
                "plain_english": "Company-specific explains about 33.5% of price moves in the current state."
              }
            },
            "summary": "Aug: More mixed, though market-driven still has the largest share."
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
              "median": 0.7050735869941479,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "70.5%",
              "display_range": null,
              "display_text": "70.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 70.5,
              "plain_english": "Company-specific explains about 70.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.1558739805148903,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "15.6%",
                "display_range": null,
                "display_text": "15.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 15.6,
                "plain_english": "Market explains about 15.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.13905243249096175,
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
                "median": 0.7050735869941479,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "70.5%",
                "display_range": null,
                "display_text": "70.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 70.5,
                "plain_english": "Company-specific explains about 70.5% of price moves in the current state."
              }
            },
            "summary": "Sep: Still clearly company-driven."
          },
          {
            "month_key": "2025-10",
            "month_label": "October 2025",
            "month_short_label": "Oct",
            "period_label": "2025-10-02 to 2025-10-31",
            "n_obs": 20,
            "partial_month": true,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.46587630577372097,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.6%",
              "display_range": null,
              "display_text": "46.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 46.6,
              "plain_english": "Market explains about 46.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.46587630577372097,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "46.6%",
                "display_range": null,
                "display_text": "46.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 46.6,
                "plain_english": "Market explains about 46.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1577084188400874,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "15.8%",
                "display_range": null,
                "display_text": "15.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 15.8,
                "plain_english": "Sector explains about 15.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3764152753861917,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "37.6%",
                "display_range": null,
                "display_text": "37.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 37.6,
                "plain_english": "Company-specific explains about 37.6% of price moves in the current state."
              }
            },
            "summary": "Oct: Mostly market-driven."
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
              "median": 0.5034301867635681,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.3%",
              "display_range": null,
              "display_text": "50.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 50.3,
              "plain_english": "Company-specific explains about 50.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3100595425660802,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "31.0%",
                "display_range": null,
                "display_text": "31.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 31.0,
                "plain_english": "Market explains about 31.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.18651027067035164,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "18.7%",
                "display_range": null,
                "display_text": "18.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 18.7,
                "plain_english": "Sector explains about 18.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5034301867635681,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "50.3%",
                "display_range": null,
                "display_text": "50.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 50.3,
                "plain_english": "Company-specific explains about 50.3% of price moves in the current state."
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
              "median": 0.4885746798836013,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.9%",
              "display_range": null,
              "display_text": "48.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 48.9,
              "plain_english": "Company-specific explains about 48.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2680290021311843,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.8%",
                "display_range": null,
                "display_text": "26.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 26.8,
                "plain_english": "Market explains about 26.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2433963179852143,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "24.3%",
                "display_range": null,
                "display_text": "24.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 24.3,
                "plain_english": "Sector explains about 24.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4885746798836013,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "48.9%",
                "display_range": null,
                "display_text": "48.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 48.9,
                "plain_english": "Company-specific explains about 48.9% of price moves in the current state."
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
              "median": 0.5727457152107225,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "57.3%",
              "display_range": null,
              "display_text": "57.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 57.3,
              "plain_english": "Company-specific explains about 57.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.24173867691133674,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "24.2%",
                "display_range": null,
                "display_text": "24.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 24.2,
                "plain_english": "Market explains about 24.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.18551560787794077,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "18.6%",
                "display_range": null,
                "display_text": "18.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 18.6,
                "plain_english": "Sector explains about 18.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5727457152107225,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "57.3%",
                "display_range": null,
                "display_text": "57.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 57.3,
                "plain_english": "Company-specific explains about 57.3% of price moves in the current state."
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
              "median": 0.4435034024636021,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.4%",
              "display_range": null,
              "display_text": "44.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 44.4,
              "plain_english": "Sector explains about 44.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.19631013177994752,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "19.6%",
                "display_range": null,
                "display_text": "19.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 19.6,
                "plain_english": "Market explains about 19.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.4435034024636021,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "44.4%",
                "display_range": null,
                "display_text": "44.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 44.4,
                "plain_english": "Sector explains about 44.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.36018646575645036,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "36.0%",
                "display_range": null,
                "display_text": "36.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 36.0,
                "plain_english": "Company-specific explains about 36.0% of price moves in the current state."
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
              "median": 0.3885151377025702,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "38.9%",
              "display_range": null,
              "display_text": "38.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 38.9,
              "plain_english": "Company-specific explains about 38.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.37848358050578024,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "37.8%",
                "display_range": null,
                "display_text": "37.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 37.8,
                "plain_english": "Market explains about 37.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.23300128179164956,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "23.3%",
                "display_range": null,
                "display_text": "23.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 23.3,
                "plain_english": "Sector explains about 23.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3885151377025702,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "38.9%",
                "display_range": null,
                "display_text": "38.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 38.9,
                "plain_english": "Company-specific explains about 38.9% of price moves in the current state."
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
              "median": 0.5012916560582651,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.1%",
              "display_range": null,
              "display_text": "50.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 50.1,
              "plain_english": "Company-specific explains about 50.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.27970059555890964,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "28.0%",
                "display_range": null,
                "display_text": "28.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 28.0,
                "plain_english": "Market explains about 28.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.21900774838282533,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "21.9%",
                "display_range": null,
                "display_text": "21.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 21.9,
                "plain_english": "Sector explains about 21.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5012916560582651,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "50.1%",
                "display_range": null,
                "display_text": "50.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 50.1,
                "plain_english": "Company-specific explains about 50.1% of price moves in the current state."
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
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.45182602772359953,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.2%",
              "display_range": null,
              "display_text": "45.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
              "kind": "share_pct",
              "value_pct": 45.2,
              "plain_english": "Market explains about 45.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.45182602772359953,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "45.2%",
                "display_range": null,
                "display_text": "45.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
                "kind": "share_pct",
                "value_pct": 45.2,
                "plain_english": "Market explains about 45.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.21611282841039575,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "21.6%",
                "display_range": null,
                "display_text": "21.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
                "kind": "share_pct",
                "value_pct": 21.6,
                "plain_english": "Sector explains about 21.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.33206114386600466,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "33.2%",
                "display_range": null,
                "display_text": "33.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
                "kind": "share_pct",
                "value_pct": 33.2,
                "plain_english": "Company-specific explains about 33.2% of price moves in the current state."
              }
            },
            "summary": "May: Mostly market-driven."
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
              "median": 0.019537523547439227,
              "low": 0.019537523547439227,
              "high": 0.019537523547439227
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
              "median": 0.03602072807262226,
              "low": 0.03602072807262226,
              "high": 0.03602072807262226
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
              0.08130081300813008,
              0.9186991869918699
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
          "market_link_display": "-5.68",
          "sector_link_display": "4.40",
          "market_link_explainer": "Very high market link. A 1% market move has lined up with about a 5.68% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 4.40% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "1.04",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "High Volatility",
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "driver_share_pct": 47.2,
          "driver_share_display": "47.2%",
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
          "month_key": "2025-05",
          "month_label": "May 2025",
          "month_short_label": "May",
          "period_label": "2025-05-02 to 2025-05-30",
          "n_obs": 20,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "May: Mostly market-driven.",
          "share_market": 0.5662642267384387,
          "share_sector": 0.065466360169169,
          "share_company": 0.36826941309239225,
          "share_market_display": "56.6%",
          "share_sector_display": "6.5%",
          "share_company_display": "36.8%",
          "dominant_share_display": "56.6%"
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
          "summary": "Jun: More mixed, though company-driven still has the largest share.",
          "share_market": 0.37701009678553815,
          "share_sector": 0.18261845796380638,
          "share_company": 0.4403714452506555,
          "share_market_display": "37.7%",
          "share_sector_display": "18.3%",
          "share_company_display": "44.0%",
          "dominant_share_display": "44.0%"
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
          "share_market": 0.1039594436526636,
          "share_sector": 0.3817199345286734,
          "share_company": 0.5143206218186629,
          "share_market_display": "10.4%",
          "share_sector_display": "38.2%",
          "share_company_display": "51.4%",
          "dominant_share_display": "51.4%"
        },
        {
          "month_key": "2025-08",
          "month_label": "August 2025",
          "month_short_label": "Aug",
          "period_label": "2025-08-01 to 2025-08-29",
          "n_obs": 21,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Aug: More mixed, though market-driven still has the largest share.",
          "share_market": 0.4019813839901821,
          "share_sector": 0.26273724732367376,
          "share_company": 0.3352813686861443,
          "share_market_display": "40.2%",
          "share_sector_display": "26.3%",
          "share_company_display": "33.5%",
          "dominant_share_display": "40.2%"
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
          "summary": "Sep: Still clearly company-driven.",
          "share_market": 0.1558739805148903,
          "share_sector": 0.13905243249096175,
          "share_company": 0.7050735869941479,
          "share_market_display": "15.6%",
          "share_sector_display": "13.9%",
          "share_company_display": "70.5%",
          "dominant_share_display": "70.5%"
        },
        {
          "month_key": "2025-10",
          "month_label": "October 2025",
          "month_short_label": "Oct",
          "period_label": "2025-10-02 to 2025-10-31",
          "n_obs": 20,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Oct: Mostly market-driven.",
          "share_market": 0.46587630577372097,
          "share_sector": 0.1577084188400874,
          "share_company": 0.3764152753861917,
          "share_market_display": "46.6%",
          "share_sector_display": "15.8%",
          "share_company_display": "37.6%",
          "dominant_share_display": "46.6%"
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
          "share_market": 0.3100595425660802,
          "share_sector": 0.18651027067035164,
          "share_company": 0.5034301867635681,
          "share_market_display": "31.0%",
          "share_sector_display": "18.7%",
          "share_company_display": "50.3%",
          "dominant_share_display": "50.3%"
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
          "share_market": 0.2680290021311843,
          "share_sector": 0.2433963179852143,
          "share_company": 0.4885746798836013,
          "share_market_display": "26.8%",
          "share_sector_display": "24.3%",
          "share_company_display": "48.9%",
          "dominant_share_display": "48.9%"
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
          "share_market": 0.24173867691133674,
          "share_sector": 0.18551560787794077,
          "share_company": 0.5727457152107225,
          "share_market_display": "24.2%",
          "share_sector_display": "18.6%",
          "share_company_display": "57.3%",
          "dominant_share_display": "57.3%"
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
          "share_market": 0.19631013177994752,
          "share_sector": 0.4435034024636021,
          "share_company": 0.36018646575645036,
          "share_market_display": "19.6%",
          "share_sector_display": "44.4%",
          "share_company_display": "36.0%",
          "dominant_share_display": "44.4%"
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
          "share_market": 0.37848358050578024,
          "share_sector": 0.23300128179164956,
          "share_company": 0.3885151377025702,
          "share_market_display": "37.8%",
          "share_sector_display": "23.3%",
          "share_company_display": "38.9%",
          "dominant_share_display": "38.9%"
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
          "share_market": 0.27970059555890964,
          "share_sector": 0.21900774838282533,
          "share_company": 0.5012916560582651,
          "share_market_display": "28.0%",
          "share_sector_display": "21.9%",
          "share_company_display": "50.1%",
          "dominant_share_display": "50.1%"
        },
        {
          "month_key": "2026-05",
          "month_label": "May 2026",
          "month_short_label": "May",
          "period_label": "2026-05-04 to 2026-05-15",
          "n_obs": 10,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "May: Mostly market-driven.",
          "share_market": 0.45182602772359953,
          "share_sector": 0.21611282841039575,
          "share_company": 0.33206114386600466,
          "share_market_display": "45.2%",
          "share_sector_display": "21.6%",
          "share_company_display": "33.2%",
          "dominant_share_display": "45.2%"
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
              "median": 0.019537523547439227,
              "low": 0.019537523547439227,
              "high": 0.019537523547439227
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
              "median": 0.03602072807262226,
              "low": 0.03602072807262226,
              "high": 0.03602072807262226
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
          "price": 171.3,
          "quantity": 300.0,
          "value": 51390.0
        },
        {
          "level": 2,
          "price": 171.2,
          "quantity": 1500.0,
          "value": 256799.99999999997
        },
        {
          "level": 3,
          "price": 171.1,
          "quantity": 1300.0,
          "value": 222430.0
        },
        {
          "level": 4,
          "price": 171.0,
          "quantity": 1200.0,
          "value": 205200.0
        },
        {
          "level": 5,
          "price": 170.9,
          "quantity": 2200.0,
          "value": 375980.0
        },
        {
          "level": 6,
          "price": 170.8,
          "quantity": 600.0,
          "value": 102480.0
        },
        {
          "level": 7,
          "price": 170.7,
          "quantity": 600.0,
          "value": 102420.0
        },
        {
          "level": 8,
          "price": 170.6,
          "quantity": 1000.0,
          "value": 170600.0
        },
        {
          "level": 9,
          "price": 170.5,
          "quantity": 300.0,
          "value": 51150.0
        },
        {
          "level": 10,
          "price": 170.3,
          "quantity": 400.0,
          "value": 68120.0
        },
        {
          "level": 11,
          "price": 170.0,
          "quantity": 2000.0,
          "value": 340000.0
        },
        {
          "level": 12,
          "price": 169.8,
          "quantity": 400.0,
          "value": 67920.0
        },
        {
          "level": 13,
          "price": 169.6,
          "quantity": 400.0,
          "value": 67840.0
        },
        {
          "level": 14,
          "price": 169.4,
          "quantity": 400.0,
          "value": 67760.0
        },
        {
          "level": 15,
          "price": 169.3,
          "quantity": 3800.0,
          "value": 643340.0
        },
        {
          "level": 16,
          "price": 169.2,
          "quantity": 1600.0,
          "value": 270720.0
        },
        {
          "level": 17,
          "price": 169.0,
          "quantity": 400.0,
          "value": 67600.0
        },
        {
          "level": 18,
          "price": 168.8,
          "quantity": 400.0,
          "value": 67520.0
        },
        {
          "level": 19,
          "price": 168.6,
          "quantity": 400.0,
          "value": 67440.0
        },
        {
          "level": 20,
          "price": 168.5,
          "quantity": 300.0,
          "value": 50550.0
        },
        {
          "level": 21,
          "price": 168.4,
          "quantity": 400.0,
          "value": 67360.0
        },
        {
          "level": 22,
          "price": 168.2,
          "quantity": 5900.0,
          "value": 992379.9999999999
        },
        {
          "level": 23,
          "price": 168.1,
          "quantity": 100.0,
          "value": 16810.0
        },
        {
          "level": 24,
          "price": 168.0,
          "quantity": 4100.0,
          "value": 688800.0
        },
        {
          "level": 25,
          "price": 167.9,
          "quantity": 7800.0,
          "value": 1309620.0
        },
        {
          "level": 26,
          "price": 167.8,
          "quantity": 700.0,
          "value": 117460.00000000001
        },
        {
          "level": 27,
          "price": 167.6,
          "quantity": 10600.0,
          "value": 1776560.0
        },
        {
          "level": 28,
          "price": 167.5,
          "quantity": 1800.0,
          "value": 301500.0
        },
        {
          "level": 29,
          "price": 167.4,
          "quantity": 1400.0,
          "value": 234360.0
        },
        {
          "level": 30,
          "price": 167.3,
          "quantity": 13700.0,
          "value": 2292010.0
        },
        {
          "level": 31,
          "price": 167.0,
          "quantity": 16900.0,
          "value": 2822300.0
        },
        {
          "level": 32,
          "price": 166.8,
          "quantity": 1900.0,
          "value": 316920.0
        },
        {
          "level": 33,
          "price": 166.7,
          "quantity": 20000.0,
          "value": 3334000.0
        },
        {
          "level": 34,
          "price": 166.6,
          "quantity": 200.0,
          "value": 33320.0
        },
        {
          "level": 35,
          "price": 166.5,
          "quantity": 200.0,
          "value": 33300.0
        },
        {
          "level": 36,
          "price": 166.2,
          "quantity": 200.0,
          "value": 33240.0
        },
        {
          "level": 37,
          "price": 166.1,
          "quantity": 14800.0,
          "value": 2458280.0
        },
        {
          "level": 38,
          "price": 166.0,
          "quantity": 8900.0,
          "value": 1477400.0
        },
        {
          "level": 39,
          "price": 165.9,
          "quantity": 1600.0,
          "value": 265440.0
        },
        {
          "level": 40,
          "price": 165.8,
          "quantity": 3500.0,
          "value": 580300.0
        },
        {
          "level": 41,
          "price": 165.7,
          "quantity": 900.0,
          "value": 149130.0
        },
        {
          "level": 42,
          "price": 165.6,
          "quantity": 200.0,
          "value": 33120.0
        },
        {
          "level": 43,
          "price": 165.5,
          "quantity": 300.0,
          "value": 49650.0
        },
        {
          "level": 44,
          "price": 165.3,
          "quantity": 100.0,
          "value": 16530.0
        },
        {
          "level": 45,
          "price": 165.2,
          "quantity": 100.0,
          "value": 16520.0
        },
        {
          "level": 46,
          "price": 165.1,
          "quantity": 500.0,
          "value": 82550.0
        },
        {
          "level": 47,
          "price": 165.0,
          "quantity": 11200.0,
          "value": 1848000.0
        },
        {
          "level": 48,
          "price": 164.9,
          "quantity": 500.0,
          "value": 82450.0
        },
        {
          "level": 49,
          "price": 164.8,
          "quantity": 200.0,
          "value": 32960.0
        },
        {
          "level": 50,
          "price": 164.7,
          "quantity": 100.0,
          "value": 16470.0
        },
        {
          "level": 51,
          "price": 164.6,
          "quantity": 1200.0,
          "value": 197520.0
        },
        {
          "level": 52,
          "price": 164.2,
          "quantity": 1000.0,
          "value": 164200.0
        },
        {
          "level": 53,
          "price": 164.0,
          "quantity": 1500.0,
          "value": 246000.0
        },
        {
          "level": 54,
          "price": 163.3,
          "quantity": 100.0,
          "value": 16330.000000000002
        },
        {
          "level": 55,
          "price": 163.1,
          "quantity": 400.0,
          "value": 65240.0
        },
        {
          "level": 56,
          "price": 163.0,
          "quantity": 7500.0,
          "value": 1222500.0
        },
        {
          "level": 57,
          "price": 162.0,
          "quantity": 10700.0,
          "value": 1733400.0
        },
        {
          "level": 58,
          "price": 161.2,
          "quantity": 600.0,
          "value": 96720.0
        },
        {
          "level": 59,
          "price": 161.0,
          "quantity": 300.0,
          "value": 48300.0
        },
        {
          "level": 60,
          "price": 160.5,
          "quantity": 100.0,
          "value": 16050.0
        },
        {
          "level": 61,
          "price": 160.2,
          "quantity": 100.0,
          "value": 16019.999999999998
        },
        {
          "level": 62,
          "price": 160.0,
          "quantity": 3000.0,
          "value": 480000.0
        },
        {
          "level": 63,
          "price": 159.6,
          "quantity": 200.0,
          "value": 31920.0
        },
        {
          "level": 64,
          "price": 159.0,
          "quantity": 100.0,
          "value": 15900.0
        },
        {
          "level": 65,
          "price": 158.9,
          "quantity": 100.0,
          "value": 15890.0
        },
        {
          "level": 66,
          "price": 157.5,
          "quantity": 100.0,
          "value": 15750.0
        },
        {
          "level": 67,
          "price": 157.0,
          "quantity": 100.0,
          "value": 15700.0
        },
        {
          "level": 68,
          "price": 155.0,
          "quantity": 100.0,
          "value": 15500.0
        },
        {
          "level": 69,
          "price": 152.4,
          "quantity": 5000.0,
          "value": 762000.0
        },
        {
          "level": 70,
          "price": 152.0,
          "quantity": 900.0,
          "value": 136800.0
        },
        {
          "level": 71,
          "price": 151.0,
          "quantity": 100.0,
          "value": 15100.0
        },
        {
          "level": 72,
          "price": 146.8,
          "quantity": 500.0,
          "value": 73400.0
        },
        {
          "level": 73,
          "price": 146.5,
          "quantity": 100.0,
          "value": 14650.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 172.0,
          "quantity": 1800.0,
          "value": 309600.0
        },
        {
          "level": 2,
          "price": 172.1,
          "quantity": 1200.0,
          "value": 206520.0
        },
        {
          "level": 3,
          "price": 172.4,
          "quantity": 1900.0,
          "value": 327560.0
        },
        {
          "level": 4,
          "price": 172.5,
          "quantity": 1700.0,
          "value": 293250.0
        },
        {
          "level": 5,
          "price": 172.6,
          "quantity": 4500.0,
          "value": 776700.0
        },
        {
          "level": 6,
          "price": 172.7,
          "quantity": 700.0,
          "value": 120889.99999999999
        },
        {
          "level": 7,
          "price": 173.0,
          "quantity": 1000.0,
          "value": 173000.0
        },
        {
          "level": 8,
          "price": 173.2,
          "quantity": 2200.0,
          "value": 381040.0
        },
        {
          "level": 9,
          "price": 173.3,
          "quantity": 3100.0,
          "value": 537230.0
        },
        {
          "level": 10,
          "price": 173.4,
          "quantity": 7100.0,
          "value": 1231140.0
        },
        {
          "level": 11,
          "price": 173.6,
          "quantity": 1000.0,
          "value": 173600.0
        },
        {
          "level": 12,
          "price": 173.7,
          "quantity": 400.0,
          "value": 69480.0
        },
        {
          "level": 13,
          "price": 173.8,
          "quantity": 100.0,
          "value": 17380.0
        },
        {
          "level": 14,
          "price": 174.0,
          "quantity": 2700.0,
          "value": 469800.0
        },
        {
          "level": 15,
          "price": 174.1,
          "quantity": 2300.0,
          "value": 400430.0
        },
        {
          "level": 16,
          "price": 174.2,
          "quantity": 400.0,
          "value": 69680.0
        },
        {
          "level": 17,
          "price": 174.3,
          "quantity": 1900.0,
          "value": 331170.0
        },
        {
          "level": 18,
          "price": 174.4,
          "quantity": 1100.0,
          "value": 191840.0
        },
        {
          "level": 19,
          "price": 174.6,
          "quantity": 400.0,
          "value": 69840.0
        },
        {
          "level": 20,
          "price": 174.8,
          "quantity": 800.0,
          "value": 139840.0
        },
        {
          "level": 21,
          "price": 174.9,
          "quantity": 1900.0,
          "value": 332310.0
        },
        {
          "level": 22,
          "price": 175.0,
          "quantity": 4100.0,
          "value": 717500.0
        },
        {
          "level": 23,
          "price": 175.1,
          "quantity": 400.0,
          "value": 70040.0
        },
        {
          "level": 24,
          "price": 175.4,
          "quantity": 1000.0,
          "value": 175400.0
        },
        {
          "level": 25,
          "price": 175.7,
          "quantity": 400.0,
          "value": 70280.0
        },
        {
          "level": 26,
          "price": 175.8,
          "quantity": 200.0,
          "value": 35160.0
        },
        {
          "level": 27,
          "price": 176.0,
          "quantity": 700.0,
          "value": 123200.0
        },
        {
          "level": 28,
          "price": 176.2,
          "quantity": 400.0,
          "value": 70480.0
        },
        {
          "level": 29,
          "price": 176.5,
          "quantity": 100.0,
          "value": 17650.0
        },
        {
          "level": 30,
          "price": 176.8,
          "quantity": 100.0,
          "value": 17680.0
        },
        {
          "level": 31,
          "price": 177.0,
          "quantity": 900.0,
          "value": 159300.0
        },
        {
          "level": 32,
          "price": 177.2,
          "quantity": 800.0,
          "value": 141760.0
        },
        {
          "level": 33,
          "price": 178.0,
          "quantity": 2000.0,
          "value": 356000.0
        },
        {
          "level": 34,
          "price": 178.8,
          "quantity": 100.0,
          "value": 17880.0
        },
        {
          "level": 35,
          "price": 179.0,
          "quantity": 1500.0,
          "value": 268500.0
        },
        {
          "level": 36,
          "price": 179.8,
          "quantity": 3000.0,
          "value": 539400.0
        },
        {
          "level": 37,
          "price": 179.9,
          "quantity": 100.0,
          "value": 17990.0
        },
        {
          "level": 38,
          "price": 180.0,
          "quantity": 8000.0,
          "value": 1440000.0
        },
        {
          "level": 39,
          "price": 180.2,
          "quantity": 100.0,
          "value": 18020.0
        },
        {
          "level": 40,
          "price": 181.0,
          "quantity": 100.0,
          "value": 18100.0
        },
        {
          "level": 41,
          "price": 182.2,
          "quantity": 100.0,
          "value": 18220.0
        },
        {
          "level": 42,
          "price": 182.3,
          "quantity": 500.0,
          "value": 91150.0
        },
        {
          "level": 43,
          "price": 182.8,
          "quantity": 100.0,
          "value": 18280.0
        },
        {
          "level": 44,
          "price": 183.0,
          "quantity": 2300.0,
          "value": 420900.0
        },
        {
          "level": 45,
          "price": 184.0,
          "quantity": 700.0,
          "value": 128800.0
        },
        {
          "level": 46,
          "price": 184.4,
          "quantity": 100.0,
          "value": 18440.0
        },
        {
          "level": 47,
          "price": 185.0,
          "quantity": 39500.0,
          "value": 7307500.0
        },
        {
          "level": 48,
          "price": 186.0,
          "quantity": 100.0,
          "value": 18600.0
        },
        {
          "level": 49,
          "price": 188.0,
          "quantity": 3900.0,
          "value": 733200.0
        },
        {
          "level": 50,
          "price": 188.6,
          "quantity": 500.0,
          "value": 94300.0
        },
        {
          "level": 51,
          "price": 189.5,
          "quantity": 100.0,
          "value": 18950.0
        },
        {
          "level": 52,
          "price": 190.0,
          "quantity": 3700.0,
          "value": 703000.0
        },
        {
          "level": 53,
          "price": 191.1,
          "quantity": 100.0,
          "value": 19110.0
        },
        {
          "level": 54,
          "price": 193.0,
          "quantity": 1000.0,
          "value": 193000.0
        },
        {
          "level": 55,
          "price": 193.8,
          "quantity": 200.0,
          "value": 38760.0
        },
        {
          "level": 56,
          "price": 196.0,
          "quantity": 1000.0,
          "value": 196000.0
        },
        {
          "level": 57,
          "price": 197.9,
          "quantity": 300.0,
          "value": 59370.0
        },
        {
          "level": 58,
          "price": 198.0,
          "quantity": 200.0,
          "value": 39600.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-05-15 07:59:59.805000000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XHKG",
        "mid_price": 171.65,
        "spread_pct": 0.004078065831634073,
        "spread_ticks": 7.0,
        "tick_size": 0.1,
        "displayed_levels_per_side": 100,
        "bid_depth_notional_displayed": 30210890.0,
        "ask_depth_notional_displayed": 21013820.0,
        "bid_depth_notional_top10": 30210890.0,
        "ask_depth_notional_top10": 21013820.0,
        "bid_ask_depth_ratio": 1.4377
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 366,
        "history_limited": false,
        "trade_days_used": 242,
        "n_trades_used": 1618875,
        "first_trade_date": "2025-05-15",
        "last_trade_date": "2026-05-15",
        "window_label": "May 15, 2025 to May 15, 2026",
        "window_short_label": "May 15, 2025 to May 15, 2026",
        "trade_days_label": "242 trading days",
        "trade_count_label": "1,618,875 trades",
        "window_detail_label": "242 trading days • 1,618,875 trades",
        "history_note": "Trade-size percentiles use May 15, 2025 to May 15, 2026 history (242 trading days • 1,618,875 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 65320.0,
            "impact_pct": -0.002163,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 0.22,
            "pct_of_adv": 0.01
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 105280.0,
            "impact_pct": -0.002337,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 0.35,
            "pct_of_adv": 0.01
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 5965670.98,
            "impact_pct": -0.014311,
            "filled_pct": 100.0,
            "levels_consumed": 25,
            "pct_of_bid_depth": 19.75,
            "pct_of_adv": 0.84
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
            "order_id": "6398961667",
            "timestamp": "2026-05-15 07:59:15.817000000",
            "local_timestamp": "2026-05-15 15:59:15",
            "posted_price": 172.0,
            "size_shares": 279200.0,
            "notional": 48022400.0,
            "impact_pct": -0.033482,
            "filled_pct": 62.9,
            "levels_consumed": 73,
            "pct_of_bid_depth": 158.96,
            "price_vs_mid_pct": 0.204,
            "executed_event_count": 0,
            "event_count": 18
          },
          {
            "rank": 2,
            "order_id": "6402824195",
            "timestamp": "2026-05-15 07:59:32.217000000",
            "local_timestamp": "2026-05-15 15:59:32",
            "posted_price": 172.0,
            "size_shares": 226300.0,
            "notional": 38923600.0,
            "impact_pct": -0.033482,
            "filled_pct": 77.6,
            "levels_consumed": 73,
            "pct_of_bid_depth": 128.84,
            "price_vs_mid_pct": 0.204,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "2676834819",
            "timestamp": "2026-05-15 02:56:06.255000000",
            "local_timestamp": "2026-05-15 10:56:06",
            "posted_price": 173.5,
            "size_shares": 47000.0,
            "notional": 8154500.0,
            "impact_pct": -0.01671,
            "filled_pct": 100.0,
            "levels_consumed": 27,
            "pct_of_bid_depth": 26.99,
            "price_vs_mid_pct": 1.078,
            "executed_event_count": 0,
            "event_count": 1
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-05-15",
        "bucket_minutes": 30,
        "displayed_levels_per_side": 100,
        "tick_size": 0.1,
        "timezone": "HKT (UTC+8)",
        "session_label": "HKEX continuous trading session",
        "bucket_label_basis": "bucket start time",
        "display_window_label": "HKEX continuous trading session",
        "bucket_note": "Buckets are shown in local market time and labeled by bucket start.",
        "reason": null,
        "rows": [
          {
            "bucket": "09:30",
            "spread_pct": 0.0012019230769230085,
            "spread_ticks": 1.9999999999998863,
            "bid_depth_notional": 14131590.0,
            "ask_depth_notional": 32965070.0,
            "mid_price": 166.4
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.0011947431302269333,
            "spread_ticks": 1.9999999999998863,
            "bid_depth_notional": 19018730.0,
            "ask_depth_notional": 26974850.0,
            "mid_price": 167.4
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.0023487962419260463,
            "spread_ticks": 4.000000000000057,
            "bid_depth_notional": 20602370.0,
            "ask_depth_notional": 34322880.0,
            "mid_price": 170.3
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.001173020527859171,
            "spread_ticks": 1.9999999999998863,
            "bid_depth_notional": 24887260.0,
            "ask_depth_notional": 32250680.0,
            "mid_price": 170.5
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.0005853087503657846,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 20156530.0,
            "ask_depth_notional": 29009080.0,
            "mid_price": 170.85000000000002
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.0005884083553986132,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 28694270.0,
            "ask_depth_notional": 36301040.0,
            "mid_price": 169.95
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.0018001800180018684,
            "spread_ticks": 3.0000000000001137,
            "bid_depth_notional": 19545400.0,
            "ask_depth_notional": 44007460.0,
            "mid_price": 166.65
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.0011918951132301374,
            "spread_ticks": 2.0000000000001705,
            "bid_depth_notional": 20794010.0,
            "ask_depth_notional": 34909790.0,
            "mid_price": 167.8
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.0005918910920390312,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 22773090.0,
            "ask_depth_notional": 25799340.0,
            "mid_price": 168.95
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.0005853087503657846,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 25424440.0,
            "ask_depth_notional": 23742370.0,
            "mid_price": 170.85000000000002
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.004078065831634073,
            "spread_ticks": 6.999999999999886,
            "bid_depth_notional": 30210890.0,
            "ask_depth_notional": 21013820.0,
            "mid_price": 171.65
          }
        ],
        "summary": {
          "median_spread_pct": 0.0011918951132301374,
          "median_spread_ticks": 1.9999999999998863,
          "median_bid_depth_notional": 20794010.0,
          "median_ask_depth_notional": 32250680.0,
          "tightest_bucket": "11:30",
          "widest_bucket": "15:30",
          "deepest_bid_bucket": "15:30",
          "thinnest_bid_bucket": "09:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 0.0,
      "peers": [
        {
          "ticker": "6809",
          "pct": 0.1
        },
        {
          "ticker": "3986",
          "pct": 0.1
        },
        {
          "ticker": "9903",
          "pct": 0.2
        },
        {
          "ticker": "2577",
          "pct": 0.2
        },
        {
          "ticker": "2631",
          "pct": 0.3
        },
        {
          "ticker": "1385",
          "pct": 0.5
        },
        {
          "ticker": "650",
          "pct": 3.9
        },
        {
          "ticker": "2726",
          "pct": 4.2
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 7451,
          "n_runs": 0,
          "n_trade_days": 1,
          "first_trade_date": "2026-05-15",
          "last_trade_date": "2026-05-15",
          "period_days": 0,
          "method": {
            "key": "legacy_size_threshold",
            "name": "Trade-size buckets",
            "version": "legacy",
            "unit_of_classification": null
          },
          "thresholds": {
            "retail_max": 78000.0,
            "instit_min": 390000.0
          },
          "composition": {
            "retail_pct": 0.7545295933431754,
            "mixed_pct": 0.20037578848476714,
            "instit_pct": 0.04509461817205744,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.19744687134650088,
            "mixed_qty_pct": 0.32772157346264524,
            "instit_qty_pct": 0.47483155519085385,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.19698187886719504,
            "mixed_notional_pct": 0.3271324674969457,
            "instit_notional_pct": 0.4758856536358592,
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
              "retail": 5622,
              "mixed": 1493,
              "institutional": 336,
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
            "avg": 102538.62556703799,
            "median": 33380.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": []
        },
        "30d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 120682,
          "n_runs": 0,
          "n_trade_days": 21,
          "first_trade_date": "2026-04-16",
          "last_trade_date": "2026-05-15",
          "period_days": 29,
          "method": {
            "key": "legacy_size_threshold",
            "name": "Trade-size buckets",
            "version": "legacy",
            "unit_of_classification": null
          },
          "thresholds": {
            "retail_max": 78000.0,
            "instit_min": 390000.0
          },
          "composition": {
            "retail_pct": 0.7197759400739132,
            "mixed_pct": 0.22160719908519913,
            "instit_pct": 0.05861686084088762,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.18028526670198314,
            "mixed_qty_pct": 0.32317945221888905,
            "instit_qty_pct": 0.49653528107912775,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.18191101162286727,
            "mixed_notional_pct": 0.3261712820347799,
            "instit_notional_pct": 0.4919177063423528,
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
              "retail": 86864,
              "mixed": 26744,
              "institutional": 7074,
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
            "avg": 113094.46229545418,
            "median": 33640.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": []
        },
        "3m": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 226665,
          "n_runs": 0,
          "n_trade_days": 63,
          "first_trade_date": "2026-02-09",
          "last_trade_date": "2026-05-15",
          "period_days": 95,
          "method": {
            "key": "legacy_size_threshold",
            "name": "Trade-size buckets",
            "version": "legacy",
            "unit_of_classification": null
          },
          "thresholds": {
            "retail_max": 78000.0,
            "instit_min": 390000.0
          },
          "composition": {
            "retail_pct": 0.7464010764785035,
            "mixed_pct": 0.20080735887763881,
            "instit_pct": 0.052791564643857675,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.19356055212503767,
            "mixed_qty_pct": 0.3289918855981278,
            "instit_qty_pct": 0.47744756227683455,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.19107757917760088,
            "mixed_notional_pct": 0.32891337985254854,
            "instit_notional_pct": 0.48000904096985053,
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
              "retail": 169183,
              "mixed": 45516,
              "institutional": 11966,
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
            "avg": 102361.68347861382,
            "median": 30780.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": []
        },
        "6m": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 381984,
          "n_runs": 0,
          "n_trade_days": 126,
          "first_trade_date": "2025-10-30",
          "last_trade_date": "2026-05-15",
          "period_days": 197,
          "method": {
            "key": "legacy_size_threshold",
            "name": "Trade-size buckets",
            "version": "legacy",
            "unit_of_classification": null
          },
          "thresholds": {
            "retail_max": 78000.0,
            "instit_min": 390000.0
          },
          "composition": {
            "retail_pct": 0.7745586202563458,
            "mixed_pct": 0.18215160844433276,
            "instit_pct": 0.04328977129932144,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.22733851706604224,
            "mixed_qty_pct": 0.34320430260369,
            "instit_qty_pct": 0.42945718033026775,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.2156143014828652,
            "mixed_notional_pct": 0.3386235672843013,
            "instit_notional_pct": 0.4457621312328335,
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
              "retail": 295869,
              "mixed": 69579,
              "institutional": 16536,
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
            "avg": 88826.36055978785,
            "median": 23745.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": []
        }
      },
      "valid": true,
      "currency": "HKD",
      "n_trades": 381984,
      "n_runs": 0,
      "n_trade_days": 126,
      "first_trade_date": "2025-10-30",
      "last_trade_date": "2026-05-15",
      "period_days": 197,
      "method": {
        "key": "legacy_size_threshold",
        "name": "Trade-size buckets",
        "version": "legacy",
        "unit_of_classification": null
      },
      "thresholds": {
        "retail_max": 78000.0,
        "instit_min": 390000.0
      },
      "composition": {
        "retail_pct": 0.7745586202563458,
        "mixed_pct": 0.18215160844433276,
        "instit_pct": 0.04328977129932144,
        "ambiguous_pct": null,
        "unobservable_pct": null,
        "unclear_pct": null,
        "retail_qty_pct": null,
        "mixed_qty_pct": null,
        "instit_qty_pct": null,
        "ambiguous_qty_pct": null,
        "unobservable_qty_pct": null,
        "unclear_qty_pct": null,
        "retail_notional_pct": 0.2156143014828652,
        "mixed_notional_pct": 0.3386235672843013,
        "instit_notional_pct": 0.4457621312328335,
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
        "avg": 88826.36055978785,
        "median": 23745.0
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
            "n_trades": 47555,
            "n_runs": 0,
            "retail_pct": 0.7169382819892756,
            "mixed_pct": 0.23349805488381872,
            "instit_pct": 0.04956366312690569,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 107180.12274292922,
            "avg_run_notional": null,
            "retail_qty_pct": 0.19745740032933762,
            "mixed_qty_pct": 0.35937693127513265,
            "instit_qty_pct": 0.44316566839552973,
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
            "total_quantity": 29497998.0
          },
          {
            "month": "2026-04",
            "n_trades": 86607,
            "n_runs": 0,
            "retail_pct": 0.7237752144745806,
            "mixed_pct": 0.21024859422448533,
            "instit_pct": 0.0659761913009341,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 117318.38449940537,
            "avg_run_notional": null,
            "retail_qty_pct": 0.17031267478318718,
            "mixed_qty_pct": 0.3006920038983335,
            "instit_qty_pct": 0.5289953213184794,
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
            "total_quantity": 71624452.0
          },
          {
            "month": "2026-03",
            "n_trades": 51306,
            "n_runs": 0,
            "retail_pct": 0.7878415779830819,
            "mixed_pct": 0.17407320781195182,
            "instit_pct": 0.03808521420496628,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 79184.91684013566,
            "avg_run_notional": null,
            "retail_qty_pct": 0.23599201674823184,
            "mixed_qty_pct": 0.3730696512380076,
            "instit_qty_pct": 0.3909383320137606,
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
            "total_quantity": 37742014.0
          },
          {
            "month": "2026-02",
            "n_trades": 44996,
            "n_runs": 0,
            "retail_pct": 0.7886701040092453,
            "mixed_pct": 0.16781491688150058,
            "instit_pct": 0.04351497910925416,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 86074.82817250422,
            "avg_run_notional": null,
            "retail_qty_pct": 0.20729294761152103,
            "mixed_qty_pct": 0.32364618894211367,
            "instit_qty_pct": 0.46906086344636533,
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
            "total_quantity": 36508695.0
          },
          {
            "month": "2026-01",
            "n_trades": 53491,
            "n_runs": 0,
            "retail_pct": 0.7811781421173656,
            "mixed_pct": 0.17834775943616682,
            "instit_pct": 0.04047409844646763,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 85504.26223944215,
            "avg_run_notional": null,
            "retail_qty_pct": 0.22265785291819756,
            "mixed_qty_pct": 0.3408747820201079,
            "instit_qty_pct": 0.43646736506169453,
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
            "total_quantity": 46002523.0
          },
          {
            "month": "2025-12",
            "n_trades": 26682,
            "n_runs": 0,
            "retail_pct": 0.8856532493816056,
            "mixed_pct": 0.09793118956599955,
            "instit_pct": 0.016415561052394872,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 46625.08310021738,
            "avg_run_notional": null,
            "retail_qty_pct": 0.35675734442312984,
            "mixed_qty_pct": 0.34065470012570437,
            "instit_qty_pct": 0.3025879554511658,
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
            "total_quantity": 16289809.0
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
      "recent_trades": [],
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
      "total_trades": 337644,
      "price_moving_trades": 156399,
      "pct_price_moving": 46.320680953904116,
      "all_movers": {
        "count": 156399,
        "avg_size": 109522.921151414,
        "median_size": 31760.000000000004,
        "retail_count": 113086,
        "mixed_count": 34218,
        "institutional_count": 9095,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 72.30608891361197,
        "mixed_pct": 21.87865651314906,
        "instit_pct": 5.81525457323896,
        "unclear_pct": null
      },
      "positive_movers": {
        "count": 78025,
        "avg_size": 111306.60664210189,
        "median_size": 31060.0,
        "retail_count": 56778,
        "mixed_count": 16645,
        "institutional_count": 4602,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 72.76898429990388,
        "mixed_pct": 21.332906119833385,
        "instit_pct": 5.898109580262736,
        "unclear_pct": null
      },
      "negative_movers": {
        "count": 78374,
        "avg_size": 107747.17842537066,
        "median_size": 32520.0,
        "retail_count": 56308,
        "mixed_count": 17573,
        "institutional_count": 4493,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 71.84525480388905,
        "mixed_pct": 22.42197667593845,
        "instit_pct": 5.732768520172506,
        "unclear_pct": null
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
          "opening": 0.00841768008331943,
          "continuous": 0.8071278109111186,
          "closing": 0.05995591809290554,
          "auctions": 0.06837359817622497,
          "other": 0.1244985909126565
        },
        "1M": {
          "opening": 0.010505281920812931,
          "continuous": 0.8649577992178074,
          "closing": 0.05076884373402766,
          "auctions": 0.06127412565484059,
          "other": 0.07376807512735187
        },
        "3M": {
          "opening": 0.010581157330713608,
          "continuous": 0.8417926944478362,
          "closing": 0.05671037813343062,
          "auctions": 0.06729153546414422,
          "other": 0.09091577008801963
        },
        "6M": {
          "opening": 0.009705039248408156,
          "continuous": 0.8364274128247643,
          "closing": 0.057638641675669865,
          "auctions": 0.06734368092407803,
          "other": 0.09622890625115785
        }
      },
      "hhi": {
        "1D": 0.1262851219574347,
        "1M": 0.11568138281089729,
        "3M": 0.12617026656538557,
        "6M": 0.12576071107678694
      },
      "profile_buckets": [
        {
          "time": "09:00",
          "avg_share": 0.0127
        },
        {
          "time": "09:30",
          "avg_share": 0.1778
        },
        {
          "time": "10:00",
          "avg_share": 0.0866
        },
        {
          "time": "10:30",
          "avg_share": 0.0677
        },
        {
          "time": "11:00",
          "avg_share": 0.0534
        },
        {
          "time": "11:30",
          "avg_share": 0.0322
        },
        {
          "time": "12:00",
          "avg_share": 0.094
        },
        {
          "time": "13:00",
          "avg_share": 0.0758
        },
        {
          "time": "13:30",
          "avg_share": 0.0536
        },
        {
          "time": "14:00",
          "avg_share": 0.0541
        },
        {
          "time": "14:30",
          "avg_share": 0.0509
        },
        {
          "time": "15:00",
          "avg_share": 0.0684
        },
        {
          "time": "15:30",
          "avg_share": 0.1108
        },
        {
          "time": "16:00",
          "avg_share": 0.0619
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "522",
          "auctions_pct": 6.451503103567026,
          "hhi": 0.12457166261828147,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400",
            "you": true
          }
        },
        {
          "ticker": "2631",
          "auctions_pct": 1.0075208388912176,
          "hhi": 0.15346165602768969,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "650",
          "auctions_pct": 1.1321383099882927,
          "hhi": 0.27949072883532017,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "2726",
          "auctions_pct": 1.4160369240521546,
          "hhi": 0.15282092472889444,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "2577",
          "auctions_pct": 2.4134457388760406,
          "hhi": 0.14854769461277548,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "9903",
          "auctions_pct": 0.9580262242468153,
          "hhi": 0.13718242449197032,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "3986",
          "auctions_pct": 1.7329123109186002,
          "hhi": 0.15531928992682123,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "6809",
          "auctions_pct": 1.9437107340167274,
          "hhi": 0.1437318894941283,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "1385",
          "auctions_pct": 1.3948977649428782,
          "hhi": 0.1286612056896178,
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
