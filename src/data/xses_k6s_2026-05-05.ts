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
      "ticker": "K6S",
      "name": "Prudential USD",
      "marketCap": 39813673718.6,
      "sector": "Insurance - Life",
      "industry": "Financial Services"
    },
    {
      "ticker": "G07",
      "name": "Great Eastern",
      "marketCap": 14767554952.8,
      "sector": "Insurance - Life",
      "industry": "Financial Services"
    },
    {
      "ticker": "S68",
      "name": "SGX",
      "marketCap": 22646204783.09,
      "sector": "Financial Data & Stock Exchanges",
      "industry": "Financial Services"
    },
    {
      "ticker": "U11",
      "name": "UOB",
      "marketCap": 59995201693.48,
      "sector": "Banks - Regional",
      "industry": "Financial Services"
    },
    {
      "ticker": "O39",
      "name": "OCBC Bank",
      "marketCap": 97994845506.73999,
      "sector": "Banks - Regional",
      "industry": "Financial Services"
    },
    {
      "ticker": "D05",
      "name": "DBS",
      "marketCap": 166496906428.35,
      "sector": "Banks - Regional",
      "industry": "Financial Services"
    },
    {
      "ticker": "8A1",
      "name": "Heptamax",
      "marketCap": 4664499.905,
      "sector": "Asset Management",
      "industry": "Financial Services"
    },
    {
      "ticker": "CJN",
      "name": "B&M Hldg",
      "marketCap": 16815513.599999998,
      "sector": "Asset Management",
      "industry": "Financial Services"
    },
    {
      "ticker": "T55",
      "name": "TIH",
      "marketCap": 49545555.79,
      "sector": "Asset Management",
      "industry": "Financial Services"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XSES",
    "currency": "USD",
    "ticker": "K6S",
    "company": "Prudential USD",
    "asof_date": "2026-05-05",
    "industry": "Financial Services",
    "sector": "Insurance - Life",
    "market_cap_display": "39.8B",
    "market_cap_category": "large",
    "universe_total": 558,
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
          "score_pca": 34.229390681003586,
          "score_pca_percentile": 34.229390681003586,
          "rank_pca": 368,
          "total": 558,
          "adv_notional_sgd": 11060.0,
          "adv_volume_shares": 700.0,
          "free_float_shares": 2557509480.0,
          "turnover_ratio": 2.737037752837577e-07,
          "votes": 4.0,
          "trades": 4.0,
          "spread_pct": 0.08882101039139938,
          "spread_ticks": 134.8181818181818,
          "amihud": 4.19146617486797e-06,
          "volatility": 0.36908919842575805
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.514449687623448,
          "loadings": {
            "log_adv": 0.5540046631241674,
            "log_trades": 0.5090806184097435,
            "log_turnover": 0.5170873601728349,
            "neg_spread": 0.3661673630561616,
            "neg_amihud": 0.05177923844562509,
            "neg_vol": -0.172559531305018
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
          "peer_median_adv": 19744858.131781098,
          "peer_median_score_pca": 77.77777777777777,
          "peer_median_trades": 1965.5,
          "peer_median_volatility": 0.07925518921939914,
          "peer_median_spread_pct": 0.0020670390393096737,
          "peer_median_spread_ticks": 1.7743352308293034,
          "peer_median_amihud": 1.1907168654514874e-10,
          "peer_median_turnover_ratio": 0.0004910918036673717,
          "target_vs_peer": {
            "score_pca_delta": -43.55,
            "adv_delta_pct": -99.9,
            "trades_delta_pct": -99.8,
            "volatility_delta_pct": -365.7,
            "spread_pct_delta_pct": -4197.02,
            "spread_ticks_delta_pct": 7498.24,
            "amihud_delta_pct": -3520019.93,
            "turnover_ratio_delta_pct": -99.94
          }
        },
        "peer_liquidity": [
          {
            "ticker": "K6S",
            "score_pca": 34.229390681003586,
            "rank_pca": 368,
            "adv": 11060.0,
            "trades": 4.0,
            "volatility": 0.36908919842575805,
            "spread_pct": 0.08882101039139938,
            "spread_ticks": 134.8181818181818,
            "amihud": 4.19146617486797e-06,
            "turnover_ratio": 2.737037752837577e-07,
            "is_target": true
          },
          {
            "ticker": "G07",
            "score_pca": 61.82795698924731,
            "rank_pca": 214,
            "adv": 241301.20425962424,
            "trades": 67.0,
            "volatility": 0.07957476459953337,
            "spread_pct": 0.0034422357236240514,
            "spread_ticks": 5.37037037037037,
            "amihud": 2.6548354466625414e-09,
            "turnover_ratio": 2.1168229385054135e-05,
            "is_target": false
          },
          {
            "ticker": "S68",
            "score_pca": 99.46236559139786,
            "rank_pca": 4,
            "adv": 55367015.93600044,
            "trades": 9313.0,
            "volatility": 0.22507215194386512,
            "spread_pct": 0.000691842354995296,
            "spread_ticks": 1.459313118811881,
            "amihud": 1.6065758531079726e-10,
            "turnover_ratio": 0.0040842992298210125,
            "is_target": false
          },
          {
            "ticker": "U11",
            "score_pca": 93.72759856630825,
            "rank_pca": 36,
            "adv": 39248415.05930257,
            "trades": 3864.0,
            "volatility": 0.07121559362513162,
            "spread_pct": 0.0005078170862737831,
            "spread_ticks": 1.8342371390883776,
            "amihud": 7.748578777950022e-11,
            "turnover_ratio": 0.0009628275955205129,
            "is_target": false
          },
          {
            "ticker": "O39",
            "score_pca": 96.7741935483871,
            "rank_pca": 19,
            "adv": 57062295.87260383,
            "trades": 7176.0,
            "volatility": 0.0789356138392649,
            "spread_pct": 0.0005986135493268918,
            "spread_ticks": 1.3001994017946161,
            "amihud": 3.205250429099326e-11,
            "turnover_ratio": 0.0008710240373016705,
            "is_target": false
          },
          {
            "ticker": "D05",
            "score_pca": 99.2831541218638,
            "rank_pca": 5,
            "adv": 154999968.31802815,
            "trades": 9355.0,
            "volatility": 0.0928685414312658,
            "spread_pct": 0.0002935575658447305,
            "spread_ticks": 1.7144333225702293,
            "amihud": 5.504790291753496e-12,
            "turnover_ratio": 0.0013447315168684103,
            "is_target": false
          },
          {
            "ticker": "8A1",
            "score_pca": 6.810035842293908,
            "rank_pca": 521,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.3107088989441931,
            "spread_ticks": 34.333333333333336,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "CJN",
            "score_pca": 7.706093189964158,
            "rank_pca": 516,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.2849580943978826,
            "spread_ticks": 64.6,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "T55",
            "score_pca": 41.03942652329749,
            "rank_pca": 330,
            "adv": 3766.5035690271293,
            "trades": 6.0,
            "volatility": 0.22973674457855953,
            "spread_pct": 0.03465623253214089,
            "spread_ticks": 1.4761904761904763,
            "amihud": 1.810215148672467e-05,
            "turnover_ratio": 0.00011115957003307296,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Insurance - Life",
          "sector_count": 2,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.26686185259131745,
              "median": 0.11843150514969562,
              "min": 0.0,
              "max": 6.608197362010048,
              "p5": 0.0,
              "p95": 1.0469772646673634,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2362601.3584467014,
              "median": 15345.93058262471,
              "min": 0.0,
              "max": 154999968.31802815,
              "p5": 0.0,
              "p95": 13784358.617559547,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10327075901714342,
              "median": 0.028071389487789773,
              "min": 0.0002935575658447305,
              "max": 1.4976744186046513,
              "p5": 0.0034905516765943723,
              "p95": 0.511182278212251,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.007521073119839352,
              "median": 0.0003552368337285009,
              "min": 0.0,
              "max": 1.7632324830268276,
              "p5": 0.0,
              "p95": 0.01598887852255307,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00014482535330454714,
              "median": 2.318232964721275e-08,
              "min": 0.0,
              "max": 0.03930848672839506,
              "p5": 0.0,
              "p95": 8.599461470223793e-05,
              "count": 423
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 499.2831541218638,
              "median": 11.0,
              "min": 0.0,
              "max": 9355.0,
              "p5": 0.0,
              "p95": 3493.449999999999,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.22433198151264572,
              "median": 0.22433198151264572,
              "min": 0.07957476459953337,
              "max": 0.36908919842575805,
              "p5": 0.09405048629084461,
              "p95": 0.3546134767344468,
              "count": 2
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 126180.60212981212,
              "median": 126180.60212981212,
              "min": 11060.0,
              "max": 241301.20425962424,
              "p5": 22572.06021298121,
              "p95": 229789.14404664302,
              "count": 2
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.046131623057511714,
              "median": 0.046131623057511714,
              "min": 0.0034422357236240514,
              "max": 0.08882101039139938,
              "p5": 0.007711174457012818,
              "p95": 0.08455207165801061,
              "count": 2
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 1.0720966580168946e-05,
              "median": 1.0720966580168946e-05,
              "min": 2.737037752837577e-07,
              "max": 2.1168229385054135e-05,
              "p5": 1.3184300557722766e-06,
              "p95": 2.0123503104565614e-05,
              "count": 2
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.097060505157316e-06,
              "median": 2.097060505157316e-06,
              "min": 2.6548354466625414e-09,
              "max": 4.19146617486797e-06,
              "p5": 2.1209540241772795e-07,
              "p95": 3.982025607896904e-06,
              "count": 2
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 35.5,
              "median": 35.5,
              "min": 4.0,
              "max": 67.0,
              "p5": 7.15,
              "p95": 63.849999999999994,
              "count": 2
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 38365345.36172046,
              "median": 19744858.131781098,
              "min": 0.0,
              "max": 154999968.31802815,
              "p5": 0.0,
              "p95": 120721782.9621296,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 3722.625,
              "median": 1965.5,
              "min": 0.0,
              "max": 9355.0,
              "p5": 0.0,
              "p95": 9340.3,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.09717542625220255,
              "median": 0.07925518921939914,
              "min": 0.0,
              "max": 0.22973674457855953,
              "p5": 0.0,
              "p95": 0.22810413715641648,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.07948216151928517,
              "median": 0.0020670390393096737,
              "min": 0.0002935575658447305,
              "max": 0.3107088989441931,
              "p5": 0.00036854839799489893,
              "p95": 0.3016961173529844,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 14.01100964526991,
              "median": 1.7743352308293034,
              "min": 1.3001994017946161,
              "max": 64.6,
              "p5": 1.3558892027506588,
              "p95": 54.006666666666646,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.017513670473168e-06,
              "median": 1.1907168654514874e-10,
              "min": 5.504790291753496e-12,
              "max": 1.810215148672467e-05,
              "p5": 1.2141718791563436e-11,
              "p95": 1.3577277323905169e-05,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0009244012723662166,
              "median": 0.0004910918036673717,
              "min": 0.0,
              "max": 0.0040842992298210125,
              "p5": 0.0,
              "p95": 0.0031254505302876004,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.04635761589403975,
            "market": -0.0007514139581934476,
            "sector": 0.02285850045182447,
            "peers": -0.0007469286556049948,
            "vs_market": 0.0471090298522332,
            "vs_sector": 0.02349911544221528,
            "vs_peers": 0.047104544549644745
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 9.85663082437276,
          "score_pca_percentile": 9.85663082437276,
          "rank_pca": 504,
          "total": 558,
          "adv_notional_sgd": 0.0,
          "adv_volume_shares": 0.0,
          "free_float_shares": 2557509480.0,
          "turnover_ratio": 0.0,
          "votes": 0.0,
          "trades": 0.0,
          "spread_pct": 0.2864772077055121,
          "spread_ticks": 380.0,
          "amihud": 8.666301769750054e-06,
          "volatility": 0.5486546371240908
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5260868290004163,
          "loadings": {
            "log_adv": 0.5427947857572638,
            "log_trades": 0.4953750138966333,
            "log_turnover": 0.48905599775912895,
            "neg_spread": 0.4176042067069534,
            "neg_amihud": 0.11702083950304926,
            "neg_vol": 0.18087149272375058
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
          "peer_median_adv": 17290837.761395995,
          "peer_median_score_pca": 85.21505376344086,
          "peer_median_trades": 2918.5,
          "peer_median_volatility": 0.18140576197104952,
          "peer_median_spread_pct": 0.0019247390337715476,
          "peer_median_spread_ticks": 1.5215318869165024,
          "peer_median_amihud": 6.1375061348898444e-09,
          "peer_median_turnover_ratio": 0.0007724611257889773,
          "target_vs_peer": {
            "score_pca_delta": -75.36,
            "adv_delta_pct": -100.0,
            "trades_delta_pct": -100.0,
            "volatility_delta_pct": -202.45,
            "spread_pct_delta_pct": -14783.95,
            "spread_ticks_delta_pct": 24874.83,
            "amihud_delta_pct": -141102.33,
            "turnover_ratio_delta_pct": -100.0
          }
        },
        "peer_liquidity": [
          {
            "ticker": "K6S",
            "score_pca": 9.85663082437276,
            "rank_pca": 504,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.5486546371240908,
            "spread_pct": 0.2864772077055121,
            "spread_ticks": 380.0,
            "amihud": 8.666301769750054e-06,
            "turnover_ratio": 0.0,
            "is_target": true
          },
          {
            "ticker": "G07",
            "score_pca": 72.22222222222221,
            "rank_pca": 156,
            "adv": 339602.471891044,
            "trades": 91.0,
            "volatility": 0.11173602217533066,
            "spread_pct": 0.003169348532260848,
            "spread_ticks": 4.9356060606060606,
            "amihud": 1.2077687585574387e-08,
            "turnover_ratio": 2.9119747022079547e-05,
            "is_target": false
          },
          {
            "ticker": "S68",
            "score_pca": 98.2078853046595,
            "rank_pca": 11,
            "adv": 34242073.05090094,
            "trades": 6332.0,
            "volatility": 0.20671843463414147,
            "spread_pct": 0.0006801295352822471,
            "spread_ticks": 1.4319526627218935,
            "amihud": 1.9732468420530086e-10,
            "turnover_ratio": 0.0025758465856330123,
            "is_target": false
          },
          {
            "ticker": "U11",
            "score_pca": 98.56630824372759,
            "rank_pca": 9,
            "adv": 60118038.93980517,
            "trades": 5746.0,
            "volatility": 0.11194552594658841,
            "spread_pct": 0.0003853212416486871,
            "spread_ticks": 1.3953624889932492,
            "amihud": 4.438527562093049e-11,
            "turnover_ratio": 0.0014879173438686864,
            "is_target": false
          },
          {
            "ticker": "O39",
            "score_pca": 99.6415770609319,
            "rank_pca": 3,
            "adv": 105520404.18312895,
            "trades": 10918.0,
            "volatility": 0.15609308930795754,
            "spread_pct": 0.000535353707179105,
            "spread_ticks": 1.1802027200410572,
            "amihud": 4.258955484893884e-11,
            "turnover_ratio": 0.0015367918920725788,
            "is_target": false
          },
          {
            "ticker": "D05",
            "score_pca": 99.82078853046595,
            "rank_pca": 2,
            "adv": 200683417.5860478,
            "trades": 9956.0,
            "volatility": 0.1293480888244965,
            "spread_pct": 0.00024072671116111928,
            "spread_ticks": 1.3675626698882513,
            "amihud": 1.097744119191622e-11,
            "turnover_ratio": 0.0017821585284354294,
            "is_target": false
          },
          {
            "ticker": "8A1",
            "score_pca": 15.770609318996415,
            "rank_pca": 471,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.42906674956523627,
            "spread_pct": 0.16050686378035903,
            "spread_ticks": 16.88888888888889,
            "amihud": 3.344524606092434e-05,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "CJN",
            "score_pca": 8.960573476702509,
            "rank_pca": 509,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.98190826143996,
            "spread_pct": 0.28625472887767967,
            "spread_ticks": 64.85714285714286,
            "amihud": 5.189642851321727e-05,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "T55",
            "score_pca": 39.42652329749104,
            "rank_pca": 339,
            "adv": 1978.651030633389,
            "trades": 3.0,
            "volatility": 0.4401607568348071,
            "spread_pct": 0.03465623253214089,
            "spread_ticks": 1.6111111111111112,
            "amihud": 3.797106156011119e-06,
            "turnover_ratio": 5.700490770926819e-05,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Insurance - Life",
          "sector_count": 2,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6287944581781851,
              "median": 0.38466186324454466,
              "min": 0.0,
              "max": 7.056911505750941,
              "p5": 0.03322637234498236,
              "p95": 1.9248817144894366,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2461042.102401843,
              "median": 12282.3584958097,
              "min": 0.0,
              "max": 200683417.5860478,
              "p5": 0.0,
              "p95": 10165333.80310066,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1042704716001038,
              "median": 0.029336562722115007,
              "min": 0.00024072671116111928,
              "max": 1.2394366197183098,
              "p5": 0.0033111441414321657,
              "p95": 0.5357344358834213,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004426763294750324,
              "median": 0.0003198112468903873,
              "min": 0.0,
              "max": 0.8766725990376376,
              "p5": 0.0,
              "p95": 0.012751057593026367,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.201655669890245e-05,
              "median": 1.1950340303610736e-07,
              "min": 0.0,
              "max": 0.013266614270833331,
              "p5": 0.0,
              "p95": 5.927636163563829e-05,
              "count": 541
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 473.16129032258067,
              "median": 8.0,
              "min": 0.0,
              "max": 12683.0,
              "p5": 0.0,
              "p95": 2637.549999999999,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3301953296497107,
              "median": 0.3301953296497107,
              "min": 0.11173602217533066,
              "max": 0.5486546371240908,
              "p5": 0.13358195292276867,
              "p95": 0.5268087063766528,
              "count": 2
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 169801.235945522,
              "median": 169801.235945522,
              "min": 0.0,
              "max": 339602.471891044,
              "p5": 16980.123594552202,
              "p95": 322622.3482964918,
              "count": 2
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.14482327811888648,
              "median": 0.14482327811888648,
              "min": 0.003169348532260848,
              "max": 0.2864772077055121,
              "p5": 0.01733474149092341,
              "p95": 0.2723118147468495,
              "count": 2
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 1.4559873511039774e-05,
              "median": 1.4559873511039774e-05,
              "min": 0.0,
              "max": 2.9119747022079547e-05,
              "p5": 1.4559873511039774e-06,
              "p95": 2.766375967097557e-05,
              "count": 2
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.339189728667814e-06,
              "median": 4.339189728667814e-06,
              "min": 1.2077687585574387e-08,
              "max": 8.666301769750054e-06,
              "p5": 4.447888916937984e-07,
              "p95": 8.233590565641829e-06,
              "count": 2
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 45.5,
              "median": 45.5,
              "min": 0.0,
              "max": 91.0,
              "p5": 4.55,
              "p95": 86.44999999999999,
              "count": 2
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 50113189.360350564,
              "median": 17290837.761395995,
              "min": 0.0,
              "max": 200683417.5860478,
              "p5": 0.0,
              "p95": 167376362.89502615,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 4130.75,
              "median": 2918.5,
              "min": 0.0,
              "max": 10918.0,
              "p5": 0.0,
              "p95": 10581.3,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.32087211609106475,
              "median": 0.18140576197104952,
              "min": 0.11173602217533066,
              "max": 0.98190826143996,
              "p5": 0.11180934849527087,
              "p95": 0.7922966348281562,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.06080358811471395,
              "median": 0.0019247390337715476,
              "min": 0.00024072671116111928,
              "max": 0.28625472887767967,
              "p5": 0.000291334796831768,
              "p95": 0.2422429760936174,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 11.708478682424172,
              "median": 1.5215318869165024,
              "min": 1.1802027200410572,
              "max": 64.85714285714286,
              "p5": 1.245778702487575,
              "p95": 48.06825396825394,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.114389421183677e-05,
              "median": 6.1375061348898444e-09,
              "min": 1.097744119191622e-11,
              "max": 5.189642851321727e-05,
              "p5": 2.2041680971874137e-11,
              "p95": 4.5438514654914735e-05,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0009336048755926318,
              "median": 0.0007724611257889773,
              "min": 0.0,
              "max": 0.0025758465856330123,
              "p5": 0.0,
              "p95": 0.0022980557656138577,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.2539682539682542,
            "market": -0.005435095850177207,
            "sector": 0.11468236584736102,
            "peers": 0.0028835196234877625,
            "vs_market": 0.2594033498184314,
            "vs_sector": 0.13928588812089315,
            "vs_peers": 0.2510847343447664
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 11.469534050179211,
          "score_pca_percentile": 11.469534050179211,
          "rank_pca": 495,
          "total": 558,
          "adv_notional_sgd": 0.0,
          "adv_volume_shares": 0.0,
          "free_float_shares": 2557509480.0,
          "turnover_ratio": 0.0,
          "votes": 0.0,
          "trades": 0.0,
          "spread_pct": 0.282341742027606,
          "spread_ticks": 330.0,
          "amihud": 8.666301769750054e-06,
          "volatility": 0.3903703933748911
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.5533754183149672,
          "loadings": {
            "log_adv": 0.5219950365578067,
            "log_trades": 0.47294408446448144,
            "log_turnover": 0.47322129360927323,
            "neg_spread": 0.4255914895394828,
            "neg_amihud": 0.18209938249385782,
            "neg_vol": 0.2561608498204852
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
          "peer_median_adv": 22371364.65763523,
          "peer_median_score_pca": 86.20071684587813,
          "peer_median_trades": 3243.0,
          "peer_median_volatility": 0.217744038302233,
          "peer_median_spread_pct": 0.001945596681045858,
          "peer_median_spread_ticks": 1.805115712545676,
          "peer_median_amihud": 6.129515943523888e-09,
          "peer_median_turnover_ratio": 0.0007873975819393787,
          "target_vs_peer": {
            "score_pca_delta": -74.73,
            "adv_delta_pct": -100.0,
            "trades_delta_pct": -100.0,
            "volatility_delta_pct": -79.28,
            "spread_pct_delta_pct": -14411.83,
            "spread_ticks_delta_pct": 18181.38,
            "amihud_delta_pct": -141286.4,
            "turnover_ratio_delta_pct": -100.0
          }
        },
        "peer_liquidity": [
          {
            "ticker": "K6S",
            "score_pca": 11.469534050179211,
            "rank_pca": 495,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.3903703933748911,
            "spread_pct": 0.282341742027606,
            "spread_ticks": 330.0,
            "amihud": 8.666301769750054e-06,
            "turnover_ratio": 0.0,
            "is_target": true
          },
          {
            "ticker": "G07",
            "score_pca": 73.65591397849462,
            "rank_pca": 148,
            "adv": 371951.0607049586,
            "trades": 91.0,
            "volatility": 0.11143329451255694,
            "spread_pct": 0.003201397363066611,
            "spread_ticks": 5.078864353312303,
            "amihud": 1.2061707202842474e-08,
            "turnover_ratio": 3.191352348914253e-05,
            "is_target": false
          },
          {
            "ticker": "S68",
            "score_pca": 98.74551971326166,
            "rank_pca": 8,
            "adv": 44370778.2545655,
            "trades": 7524.0,
            "volatility": 0.2568408184958261,
            "spread_pct": 0.0006897959990251047,
            "spread_ticks": 1.3513703938561263,
            "amihud": 1.9732468420530086e-10,
            "turnover_ratio": 0.0036908165005737933,
            "is_target": false
          },
          {
            "ticker": "U11",
            "score_pca": 99.2831541218638,
            "rank_pca": 5,
            "adv": 77442486.28745763,
            "trades": 6395.0,
            "volatility": 0.1582348832146659,
            "spread_pct": 0.0004346613644499481,
            "spread_ticks": 1.610231425091352,
            "amihud": 5.192821876399552e-11,
            "turnover_ratio": 0.0019097920857874943,
            "is_target": false
          },
          {
            "ticker": "O39",
            "score_pca": 99.6415770609319,
            "rank_pca": 3,
            "adv": 102246751.17867339,
            "trades": 10548.0,
            "volatility": 0.18192773415561797,
            "spread_pct": 0.0005601857850575594,
            "spread_ticks": 1.21710875331565,
            "amihud": 6.415800313588787e-11,
            "turnover_ratio": 0.0015367918920725788,
            "is_target": false
          },
          {
            "ticker": "D05",
            "score_pca": 100.0,
            "rank_pca": 1,
            "adv": 224545859.89767218,
            "trades": 11391.0,
            "volatility": 0.14642419441210122,
            "spread_pct": 0.0002652156920799096,
            "spread_ticks": 1.538764975163144,
            "amihud": 1.732193429631589e-11,
            "turnover_ratio": 0.0019888521701413903,
            "is_target": false
          },
          {
            "ticker": "8A1",
            "score_pca": 18.45878136200717,
            "rank_pca": 456,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.253560342448848,
            "spread_pct": 0.15155615696887687,
            "spread_ticks": 16.0,
            "amihud": 4.465933691002179e-05,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "CJN",
            "score_pca": 4.301075268817205,
            "rank_pca": 535,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 1.722356695748313,
            "spread_pct": 0.45125348189415065,
            "spread_ticks": 81.0,
            "amihud": 0.00030798499969772095,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "T55",
            "score_pca": 38.35125448028674,
            "rank_pca": 345,
            "adv": 1365.8188364233254,
            "trades": 3.0,
            "volatility": 0.5433517538621111,
            "spread_pct": 0.03402587220697759,
            "spread_ticks": 2.0,
            "amihud": 1.8039077788164657e-06,
            "turnover_ratio": 3.800327180617879e-05,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Insurance - Life",
          "sector_count": 2,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6885503770296926,
              "median": 0.46669781142851197,
              "min": 0.0,
              "max": 7.344078149840708,
              "p5": 0.15637620452022566,
              "p95": 2.2430208564033762,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2569764.656630866,
              "median": 10037.571049766317,
              "min": 0.0,
              "max": 224545859.89767218,
              "p5": 0.0,
              "p95": 10797985.171062661,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10063986516865239,
              "median": 0.030272657629499336,
              "min": 0.0002652156920799096,
              "max": 1.3542204201990415,
              "p5": 0.0035701061829561623,
              "p95": 0.4756571865124839,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005943480540126935,
              "median": 0.00025254119578256204,
              "min": 0.0,
              "max": 2.0598510315733964,
              "p5": 0.0,
              "p95": 0.010620788735089955,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.4465008994012173e-05,
              "median": 1.678525919990311e-07,
              "min": 0.0,
              "max": 0.0037237756587253606,
              "p5": 0.0,
              "p95": 4.90065678976249e-05,
              "count": 553
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 469.3781362007168,
              "median": 6.0,
              "min": 0.0,
              "max": 11391.0,
              "p5": 0.0,
              "p95": 2764.4499999999975,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.250901843943724,
              "median": 0.250901843943724,
              "min": 0.11143329451255694,
              "max": 0.3903703933748911,
              "p5": 0.12538014945567366,
              "p95": 0.3764235384317744,
              "count": 2
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 185975.5303524793,
              "median": 185975.5303524793,
              "min": 0.0,
              "max": 371951.0607049586,
              "p5": 18597.553035247933,
              "p95": 353353.50766971067,
              "count": 2
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1427715696953363,
              "median": 0.1427715696953363,
              "min": 0.003201397363066611,
              "max": 0.282341742027606,
              "p5": 0.017158414596293577,
              "p95": 0.268384724794379,
              "count": 2
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 1.5956761744571264e-05,
              "median": 1.5956761744571264e-05,
              "min": 0.0,
              "max": 3.191352348914253e-05,
              "p5": 1.5956761744571265e-06,
              "p95": 3.03178473146854e-05,
              "count": 2
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.339181738476448e-06,
              "median": 4.339181738476448e-06,
              "min": 1.2061707202842474e-08,
              "max": 8.666301769750054e-06,
              "p5": 4.4477371033020313e-07,
              "p95": 8.233589766622693e-06,
              "count": 2
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 45.5,
              "median": 45.5,
              "min": 0.0,
              "max": 91.0,
              "p5": 4.55,
              "p95": 86.44999999999999,
              "count": 2
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 56122399.06223876,
              "median": 22371364.65763523,
              "min": 0.0,
              "max": 224545859.89767218,
              "p5": 0.0,
              "p95": 181741171.84602255,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 4494.0,
              "median": 3243.0,
              "min": 0.0,
              "max": 11391.0,
              "p5": 0.0,
              "p95": 11095.949999999999,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4217662146062551,
              "median": 0.217744038302233,
              "min": 0.11143329451255694,
              "max": 1.722356695748313,
              "p5": 0.12368010947739744,
              "p95": 1.3097049660881417,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.08024834590921054,
              "median": 0.001945596681045858,
              "min": 0.0002652156920799096,
              "max": 0.45125348189415065,
              "p5": 0.0003245216774094231,
              "p95": 0.3463594181703047,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 13.724542487592322,
              "median": 1.805115712545676,
              "min": 1.21710875331565,
              "max": 81.0,
              "p5": 1.2641003275048166,
              "p95": 58.249999999999964,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.430757960332531e-05,
              "median": 6.129515943523888e-09,
              "min": 1.732193429631589e-11,
              "max": 0.00030798499969772095,
              "p5": 2.943413386000376e-11,
              "p95": 0.0002158210177220261,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.001149521180483822,
              "median": 0.0007873975819393787,
              "min": 0.0,
              "max": 0.0036908165005737933,
              "p5": 0.0,
              "p95": 0.0030951289849224513,
              "count": 8
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": 0.13750899928005778,
            "market": 0.0031558757542777816,
            "sector": 0.07072892408910492,
            "peers": 0.008042381397328047,
            "vs_market": 0.13435312352578,
            "vs_sector": 0.06678007519095286,
            "vs_peers": 0.12946661788272973
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 14.157706093189965,
          "score_pca_percentile": 14.157706093189965,
          "rank_pca": 480,
          "total": 558,
          "adv_notional_sgd": 0.0,
          "adv_volume_shares": 0.0,
          "free_float_shares": 2557509480.0,
          "turnover_ratio": 0.0,
          "votes": 0.0,
          "trades": 0.0,
          "spread_pct": 0.24884792626728103,
          "spread_ticks": 282.5,
          "amihud": 4.395604395604399e-06,
          "volatility": 0.28722357456089065
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.5773331928112002,
          "loadings": {
            "log_adv": 0.5015275070253409,
            "log_trades": 0.44765953932162905,
            "log_turnover": 0.45580229043746645,
            "neg_spread": 0.4340374362354751,
            "neg_amihud": 0.2634932163820501,
            "neg_vol": 0.28722499447302724
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
          "peer_median_adv": 17205791.689017113,
          "peer_median_score_pca": 85.57347670250896,
          "peer_median_trades": 3152.0,
          "peer_median_volatility": 0.18748822798643933,
          "peer_median_spread_pct": 0.00166345667647502,
          "peer_median_spread_ticks": 1.6940093899880122,
          "peer_median_amihud": 4.415841618901011e-09,
          "peer_median_turnover_ratio": 0.0006969059680693671,
          "target_vs_peer": {
            "score_pca_delta": -71.42,
            "adv_delta_pct": -100.0,
            "trades_delta_pct": -100.0,
            "volatility_delta_pct": -53.2,
            "spread_pct_delta_pct": -14859.69,
            "spread_ticks_delta_pct": 16576.41,
            "amihud_delta_pct": -99441.71,
            "turnover_ratio_delta_pct": -100.0
          }
        },
        "peer_liquidity": [
          {
            "ticker": "K6S",
            "score_pca": 14.157706093189965,
            "rank_pca": 480,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.28722357456089065,
            "spread_pct": 0.24884792626728103,
            "spread_ticks": 282.5,
            "amihud": 4.395604395604399e-06,
            "turnover_ratio": 0.0,
            "is_target": true
          },
          {
            "ticker": "G07",
            "score_pca": 72.22222222222221,
            "rank_pca": 156,
            "adv": 287694.2894961339,
            "trades": 63.0,
            "volatility": 0.0865546244137674,
            "spread_pct": 0.0026355401097207533,
            "spread_ticks": 4.137560107412727,
            "amihud": 8.627885672671264e-09,
            "turnover_ratio": 2.535889408564861e-05,
            "is_target": false
          },
          {
            "ticker": "S68",
            "score_pca": 98.9247311827957,
            "rank_pca": 7,
            "adv": 34123889.088538095,
            "trades": 6241.0,
            "volatility": 0.2061252375489475,
            "spread_pct": 0.000691373243229287,
            "spread_ticks": 1.2278448761362166,
            "amihud": 2.0379756513075776e-10,
            "turnover_ratio": 0.002925861060745567,
            "is_target": false
          },
          {
            "ticker": "U11",
            "score_pca": 99.2831541218638,
            "rank_pca": 5,
            "adv": 75646604.5088102,
            "trades": 6411.0,
            "volatility": 0.15466192597103595,
            "spread_pct": 0.0004158755392054928,
            "spread_ticks": 1.4920873672448247,
            "amihud": 4.425135472159087e-11,
            "turnover_ratio": 0.0018711476047073054,
            "is_target": false
          },
          {
            "ticker": "O39",
            "score_pca": 99.6415770609319,
            "rank_pca": 3,
            "adv": 85700079.75141422,
            "trades": 8688.0,
            "volatility": 0.1688512184239312,
            "spread_pct": 0.000585872527712772,
            "spread_ticks": 1.1876645733068347,
            "amihud": 7.465793604487375e-11,
            "turnover_ratio": 0.0013684530420530856,
            "is_target": false
          },
          {
            "ticker": "D05",
            "score_pca": 100.0,
            "rank_pca": 1,
            "adv": 197553283.75708017,
            "trades": 10165.5,
            "volatility": 0.14351501475061995,
            "spread_pct": 0.0002712702706268827,
            "spread_ticks": 1.542780684737929,
            "amihud": 2.3435789483238113e-11,
            "turnover_ratio": 0.0017836848920358135,
            "is_target": false
          },
          {
            "ticker": "8A1",
            "score_pca": 12.724014336917563,
            "rank_pca": 488,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.49962686749219787,
            "spread_pct": 0.15155615696887687,
            "spread_ticks": 15.166666666666668,
            "amihud": 9.515100853930266e-05,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "CJN",
            "score_pca": 0.35842293906810035,
            "rank_pca": 557,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 1.3003378330992528,
            "spread_pct": 1.267605633802817,
            "spread_ticks": 260.0,
            "amihud": 0.0004325836608929983,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "T55",
            "score_pca": 33.87096774193548,
            "rank_pca": 370,
            "adv": 828.9527085679366,
            "trades": 1.5,
            "volatility": 0.44078547573912374,
            "spread_pct": 0.034841251117208816,
            "spread_ticks": 1.8452380952380953,
            "amihud": 1.526983136748216e-06,
            "turnover_ratio": 2.3752044878861744e-05,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Insurance - Life",
          "sector_count": 2,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6886477998811863,
              "median": 0.45478987975751467,
              "min": 0.0,
              "max": 6.912950809089335,
              "p5": 0.15465547174076782,
              "p95": 2.035916599623587,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2083953.0526018997,
              "median": 9150.358060851951,
              "min": 0.0,
              "max": 197553283.75708017,
              "p5": 0.0,
              "p95": 8464257.312118618,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.095748394520773,
              "median": 0.028680905466471195,
              "min": 0.0002712702706268827,
              "max": 1.267605633802817,
              "p5": 0.0036014837025888655,
              "p95": 0.4847795163584637,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003300074858863382,
              "median": 0.00026597074665578606,
              "min": 0.0,
              "max": 0.8651374332608266,
              "p5": 0.0,
              "p95": 0.007217629168998251,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.2370287232457166e-05,
              "median": 2.1184971960693142e-07,
              "min": 0.0,
              "max": 0.0008431704884749916,
              "p5": 0.0,
              "p95": 4.624620313405457e-05,
              "count": 556
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 385.241935483871,
              "median": 7.0,
              "min": 0.0,
              "max": 10165.5,
              "p5": 0.0,
              "p95": 2137.2749999999983,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.186889099487329,
              "median": 0.186889099487329,
              "min": 0.0865546244137674,
              "max": 0.28722357456089065,
              "p5": 0.09658807192112356,
              "p95": 0.27719012705353446,
              "count": 2
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 143847.14474806696,
              "median": 143847.14474806696,
              "min": 0.0,
              "max": 287694.2894961339,
              "p5": 14384.714474806697,
              "p95": 273309.5750213272,
              "count": 2
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1257417331885009,
              "median": 0.1257417331885009,
              "min": 0.0026355401097207533,
              "max": 0.24884792626728103,
              "p5": 0.014946159417598769,
              "p95": 0.236537306959403,
              "count": 2
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 1.2679447042824305e-05,
              "median": 1.2679447042824305e-05,
              "min": 0.0,
              "max": 2.535889408564861e-05,
              "p5": 1.2679447042824306e-06,
              "p95": 2.4090949381366177e-05,
              "count": 2
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.202116140638535e-06,
              "median": 2.202116140638535e-06,
              "min": 8.627885672671264e-09,
              "max": 4.395604395604399e-06,
              "p5": 2.279767111692577e-07,
              "p95": 4.176255570107813e-06,
              "count": 2
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 31.5,
              "median": 31.5,
              "min": 0.0,
              "max": 63.0,
              "p5": 3.1500000000000004,
              "p95": 59.849999999999994,
              "count": 2
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 49164047.54350592,
              "median": 17205791.689017113,
              "min": 0.0,
              "max": 197553283.75708017,
              "p5": 0.0,
              "p95": 158404662.35509703,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 3946.25,
              "median": 3152.0,
              "min": 0.0,
              "max": 10165.5,
              "p5": 0.0,
              "p95": 9648.375,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.37505727467985955,
              "median": 0.18748822798643933,
              "min": 0.0865546244137674,
              "max": 1.3003378330992528,
              "p5": 0.1064907610316658,
              "p95": 1.020088995136783,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.18232537169742474,
              "median": 0.00166345667647502,
              "min": 0.0002712702706268827,
              "max": 1.267605633802817,
              "p5": 0.00032188211462939626,
              "p95": 0.8769883169109374,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 35.82498029634291,
              "median": 1.6940093899880122,
              "min": 1.1876645733068347,
              "max": 260.0,
              "p5": 1.2017276792971183,
              "p95": 174.3083333333332,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.615882832467091e-05,
              "median": 4.415841618901011e-09,
              "min": 2.3435789483238113e-11,
              "max": 0.0004325836608929983,
              "p5": 3.0721237316661574e-11,
              "p95": 0.00031448223256920466,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0009997821923132851,
              "median": 0.0006969059680693671,
              "min": 0.0,
              "max": 0.002925861060745567,
              "p5": 0.0,
              "p95": 0.002556711351132175,
              "count": 8
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": 0.2950819672131153,
            "market": 0.11109323741368993,
            "sector": 0.15721387462699132,
            "peers": 0.05984037785862384,
            "vs_market": 0.18398872979942538,
            "vs_sector": 0.13786809258612398,
            "vs_peers": 0.23524158935449146
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Near-term access looks mixed rather than clearly stronger, with bid depth running ahead of ask depth but a 60-tick spread keeping trading conditions expensive.",
        "market_comparison": "The stock outperformed peers over the past month, rising 25.4% compared with 0.3%, which supports interest but does not close the liquidity gap."
      },
      "30d": {
        "liquidity": "Monthly tradability is weak, with a 1M liquidity score of 9.9 compared with a peer median of 85.2, leaving access well below the group.",
        "market_comparison": "The stock rose 25.4% over the month compared with 0.3% for peers and -0.5% for the market, so returns have been stronger than liquidity conditions."
      },
      "3m": {
        "liquidity": "Three-month tradability remains weak, with a score of 11.5 compared with a peer median of 86.2, showing little sign of a broader improvement in access.",
        "market_comparison": "Return 13.8% vs peers 0.8%."
      },
      "6m": {
        "liquidity": "Six-month tradability is weak, with a score of 14.2 compared with a peer median of 85.6, which places the stock well below peers on structural access.",
        "market_comparison": "The stock gained 29.5% over six months compared with 6.0% for peers, so relative performance has been strong despite weaker liquidity."
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
          "median": 0.3162205639921364,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "31.6%",
          "display_range": null,
          "display_text": "31.6%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 31.6,
          "plain_english": "Market explains about 31.6% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.683779436007861,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "68.4%",
          "display_range": null,
          "display_text": "68.4%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 68.4,
          "plain_english": "Sector explains about 68.4% of price moves in the current state."
        },
        "company_share": {
          "median": 2.5009826407238704e-15,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.0%",
          "display_range": null,
          "display_text": "0.0%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 0.0,
          "plain_english": "Company-specific explains about 0.0% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 0.926992600361275,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.93",
          "display_range": null,
          "display_text": "0.93",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Moderate",
          "plain_english": "Moderate market link: a 1% market move has lined up with about a 0.93% stock move in the same direction in this state.",
          "value_num": 0.93
        },
        "beta_stock_lag": {
          "median": 4.440892098500626e-15,
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
          "median": -25.631475103284714,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-25.63",
          "display_range": null,
          "display_text": "-25.63",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Very high",
          "plain_english": "Very high sector link: a 1% sector move has lined up with about a 25.63% stock move in the opposite direction in this state. The multiplier is unusually large and comes from only 251 trading days of history.",
          "value_num": -25.63
        },
        "beta_market_lag": {
          "median": 4.390608094729639,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "4.39",
          "display_range": null,
          "display_text": "4.39",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 4.39
        },
        "beta_sector_lag": {
          "median": -27.624600215960697,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-27.62",
          "display_range": null,
          "display_text": "-27.62",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -27.62
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
          "period_label": "2025-05-08 to 2025-05-30",
          "n_obs": 16,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5054604720556088,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "50.5%",
            "display_range": null,
            "display_text": "50.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
            "kind": "share_pct",
            "value_pct": 50.5,
            "plain_english": "Company-specific explains about 50.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.4080157419390284,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "40.8%",
              "display_range": null,
              "display_text": "40.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 40.8,
              "plain_english": "Market explains about 40.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.0865237860053628,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "8.7%",
              "display_range": null,
              "display_text": "8.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 8.7,
              "plain_english": "Sector explains about 8.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5054604720556088,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.5%",
              "display_range": null,
              "display_text": "50.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 50.5,
              "plain_english": "Company-specific explains about 50.5% of price moves in the current state."
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
            "median": 0.4712872513816686,
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
            "plain_english": "Company-specific explains about 47.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.24956715672804503,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "25.0%",
              "display_range": null,
              "display_text": "25.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 25.0,
              "plain_english": "Market explains about 25.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.27914559189028637,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.9%",
              "display_range": null,
              "display_text": "27.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 27.9,
              "plain_english": "Sector explains about 27.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4712872513816686,
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
              "plain_english": "Company-specific explains about 47.1% of price moves in the current state."
            }
          },
          "summary": "Jun: Mostly company-driven."
        },
        {
          "month_key": "2025-07",
          "month_label": "July 2025",
          "month_short_label": "Jul",
          "period_label": "2025-07-01 to 2025-07-31",
          "n_obs": 23,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4329206662680639,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "43.3%",
            "display_range": null,
            "display_text": "43.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
            "kind": "share_pct",
            "value_pct": 43.3,
            "plain_english": "Market explains about 43.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.4329206662680639,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "43.3%",
              "display_range": null,
              "display_text": "43.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
              "kind": "share_pct",
              "value_pct": 43.3,
              "plain_english": "Market explains about 43.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.391538344233002,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "39.2%",
              "display_range": null,
              "display_text": "39.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
              "kind": "share_pct",
              "value_pct": 39.2,
              "plain_english": "Sector explains about 39.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.17554098949893418,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "17.6%",
              "display_range": null,
              "display_text": "17.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
              "kind": "share_pct",
              "value_pct": 17.6,
              "plain_english": "Company-specific explains about 17.6% of price moves in the current state."
            }
          },
          "summary": "Jul: More mixed, though market-driven still has the largest share."
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
            "median": 0.3333333333333333,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "33.3%",
            "display_range": null,
            "display_text": "33.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 33.3,
            "plain_english": "Market explains about 33.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3333333333333333,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "33.3%",
              "display_range": null,
              "display_text": "33.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 33.3,
              "plain_english": "Market explains about 33.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3333333333333333,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "33.3%",
              "display_range": null,
              "display_text": "33.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 33.3,
              "plain_english": "Sector explains about 33.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3333333333333333,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "33.3%",
              "display_range": null,
              "display_text": "33.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 33.3,
              "plain_english": "Company-specific explains about 33.3% of price moves in the current state."
            }
          },
          "summary": "Aug: Much more balanced across company, sector, and market factors."
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
            "median": 0.5251771335594325,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "52.5%",
            "display_range": null,
            "display_text": "52.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 52.5,
            "plain_english": "Company-specific explains about 52.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2465806200480266,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "24.7%",
              "display_range": null,
              "display_text": "24.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 24.7,
              "plain_english": "Market explains about 24.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.22824224639254073,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "22.8%",
              "display_range": null,
              "display_text": "22.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 22.8,
              "plain_english": "Sector explains about 22.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5251771335594325,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.5%",
              "display_range": null,
              "display_text": "52.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 52.5,
              "plain_english": "Company-specific explains about 52.5% of price moves in the current state."
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
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.47300268261199785,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.3%",
            "display_range": null,
            "display_text": "47.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 47.3,
            "plain_english": "Market explains about 47.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.47300268261199785,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.3%",
              "display_range": null,
              "display_text": "47.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 47.3,
              "plain_english": "Market explains about 47.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.28048721744805594,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "28.0%",
              "display_range": null,
              "display_text": "28.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 28.0,
              "plain_english": "Sector explains about 28.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.24651009993994616,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "24.7%",
              "display_range": null,
              "display_text": "24.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 24.7,
              "plain_english": "Company-specific explains about 24.7% of price moves in the current state."
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
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.45704172485967764,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "45.7%",
            "display_range": null,
            "display_text": "45.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 45.7,
            "plain_english": "Market explains about 45.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.45704172485967764,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.7%",
              "display_range": null,
              "display_text": "45.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 45.7,
              "plain_english": "Market explains about 45.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.19744619810304867,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "19.7%",
              "display_range": null,
              "display_text": "19.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 19.7,
              "plain_english": "Sector explains about 19.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.34551207703727377,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.6%",
              "display_range": null,
              "display_text": "34.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 34.6,
              "plain_english": "Company-specific explains about 34.6% of price moves in the current state."
            }
          },
          "summary": "Nov: Mostly market-driven."
        },
        {
          "month_key": "2025-12",
          "month_label": "December 2025",
          "month_short_label": "Dec",
          "period_label": "2025-12-01 to 2025-12-31",
          "n_obs": 22,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.3638967687748571,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "36.4%",
            "display_range": null,
            "display_text": "36.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 36.4,
            "plain_english": "Market explains about 36.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3638967687748571,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.4%",
              "display_range": null,
              "display_text": "36.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 36.4,
              "plain_english": "Market explains about 36.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.27759210624020475,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.8%",
              "display_range": null,
              "display_text": "27.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 27.8,
              "plain_english": "Sector explains about 27.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3585111249849382,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "35.9%",
              "display_range": null,
              "display_text": "35.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 35.9,
              "plain_english": "Company-specific explains about 35.9% of price moves in the current state."
            }
          },
          "summary": "Dec: Much more balanced across company, sector, and market factors."
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
            "median": 0.6740837909943584,
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
              "median": 0.13138401170565542,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "13.1%",
              "display_range": null,
              "display_text": "13.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 13.1,
              "plain_english": "Market explains about 13.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.194532197299986,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "19.5%",
              "display_range": null,
              "display_text": "19.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 19.5,
              "plain_english": "Sector explains about 19.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6740837909943584,
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
          "summary": "Jan: Still clearly company-driven."
        },
        {
          "month_key": "2026-02",
          "month_label": "February 2026",
          "month_short_label": "Feb",
          "period_label": "2026-02-02 to 2026-02-27",
          "n_obs": 18,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.47461420274641536,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.5%",
            "display_range": null,
            "display_text": "47.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
            "kind": "share_pct",
            "value_pct": 47.5,
            "plain_english": "Market explains about 47.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.47461420274641536,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.5%",
              "display_range": null,
              "display_text": "47.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 47.5,
              "plain_english": "Market explains about 47.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3127047871140637,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "31.3%",
              "display_range": null,
              "display_text": "31.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 31.3,
              "plain_english": "Sector explains about 31.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.21268101013952107,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "21.3%",
              "display_range": null,
              "display_text": "21.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 21.3,
              "plain_english": "Company-specific explains about 21.3% of price moves in the current state."
            }
          },
          "summary": "Feb: Mostly market-driven."
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
            "median": 0.48325313249380314,
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
            "plain_english": "Market explains about 48.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.48325313249380314,
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
              "plain_english": "Market explains about 48.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3140983893822498,
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
              "plain_english": "Sector explains about 31.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.20264847812394698,
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
              "plain_english": "Company-specific explains about 20.3% of price moves in the current state."
            }
          },
          "summary": "Mar: Mostly market-driven."
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
            "median": 0.5483280295156168,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "54.8%",
            "display_range": null,
            "display_text": "54.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 54.8,
            "plain_english": "Company-specific explains about 54.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.09847505234815228,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "9.8%",
              "display_range": null,
              "display_text": "9.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 9.8,
              "plain_english": "Market explains about 9.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.35319691813623094,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "35.3%",
              "display_range": null,
              "display_text": "35.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 35.3,
              "plain_english": "Sector explains about 35.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5483280295156168,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "54.8%",
              "display_range": null,
              "display_text": "54.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 54.8,
              "plain_english": "Company-specific explains about 54.8% of price moves in the current state."
            }
          },
          "summary": "Apr: Mostly company-driven."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5100401606425703,
          "expected_duration_days": 10.583333333333334,
          "current_probability": 0.0,
          "n_days_effective": 127.0,
          "volatility": {
            "median": 0.00011032223347582894,
            "low": 0.00011032223347582894,
            "high": 0.00011032223347582894
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": 0.0
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4899598393574297,
          "expected_duration_days": 10.166666666666666,
          "current_probability": 1.0,
          "n_days_effective": 122.0,
          "volatility": {
            "median": 0.02207588850256697,
            "low": 0.02207588850256697,
            "high": 0.02207588850256697
          },
          "volatility_label": "High Volatility",
          "current_probability_display": null
        }
      ],
      "transitions": {
        "mean": [
          [
            0.905511811023622,
            0.09448818897637795
          ],
          [
            0.09090909090909091,
            0.9090909090909091
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            115.0,
            12.0
          ],
          [
            11.0,
            110.0
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
        "market_link_display": "0.93",
        "sector_link_display": "-25.63",
        "market_link_explainer": "Moderate market link. A 1% market move has lined up with about a 0.93% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 25.63% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "0.00",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "High Volatility",
        "dominant_driver": "sector",
        "dominant_driver_label": "Sector",
        "driver_share_pct": 68.4,
        "driver_share_display": "68.4%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 251 trading days relative to the 252-day target.",
        "history_days": 251,
        "history_limited": true,
        "volatility_label": "High Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.9090909090909091,
        "effective_days": 122.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 10.2 days.",
        "expected_duration_days": 10.2
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
          "pct_time": 0.5100401606425703,
          "expected_duration_days": 10.583333333333334,
          "current_probability": 0.0,
          "n_days_effective": 127.0,
          "volatility": {
            "median": 0.00011032223347582894,
            "low": 0.00011032223347582894,
            "high": 0.00011032223347582894
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4899598393574297,
          "expected_duration_days": 10.166666666666666,
          "current_probability": 1.0,
          "n_days_effective": 122.0,
          "volatility": {
            "median": 0.02207588850256697,
            "low": 0.02207588850256697,
            "high": 0.02207588850256697
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.905511811023622,
          0.09448818897637795
        ],
        [
          0.09090909090909091,
          0.9090909090909091
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.905511811023622,
            0.09448818897637795
          ],
          [
            0.09090909090909091,
            0.9090909090909091
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            115.0,
            12.0
          ],
          [
            11.0,
            110.0
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
        "text": "Liquidity score: 14.2 — Weak",
        "bg": "bg-red-500/20",
        "textColor": "text-red-400"
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
        "bg": "bg-amber-500/20",
        "textColor": "text-amber-400"
      },
      "intraday": {
        "text": "Trading Activity",
        "bg": "bg-red-500/20",
        "textColor": "text-red-400"
      },
      "short": {
        "text": "High short interest",
        "bg": "bg-red-500/20",
        "textColor": "text-red-400"
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
    "liq_subtitle": "Monthly liquidity looks weak for the stock's size, so access already screens below peers before current conditions are considered. Recent trend context is too limited to say whether access has changed from the 1M baseline.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent performance is strong. The stock returned 25.4% over 1M, compared with 0.3% for peers and -0.5% for the market.",
    "perf_insight": "The return backdrop is firm, with a 25.4% 1M gain compared with 0.3% for peers and -0.5% for the market. That matters because price strength is standing out even as the broader liquidity profile remains weak for the stock’s size.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Sector moves are the main driver of trading, accounting for 68.4% of the tape.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly sector-driven, accounting for about 68.4% of price changes. Other influences are market 31.6%, and company-specific 0.0%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 31.6%, sector 68.4%, and company-specific 0.0%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has shifted from market-driven to company-driven over Feb to Apr."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 31.6%, sector 68.4%, and company-specific 0.0%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "That matters because broader sector moves are still setting the tone, while a 60-tick spread keeps execution costly even with bid depth at 1.56x ask depth.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: sector factors account for 68.4% of recent price moves.",
      "Monthly change: the pattern moved from mostly market-driven in February and March to mostly sector in April."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Current trading conditions look balanced on screen, but the wider liquidity profile remains weak for the stock’s size.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on May 5, 2025 to May 5, 2026 (27 trading days • 46 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on the displayed order book.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate displayed depth broadly matches the stronger monthly liquidity read.",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The displayed book looks balanced because bid depth is 1.56x ask depth, but a 60-tick spread still points to expensive execution. That only partly offsets the much weaker six-month liquidity score relative to peers.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 53.3% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Displayed liquidity is more supportive on the bid side, but execution still looks expensive.",
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
    "intraday_insight": "The clearest near-term signal is balanced displayed depth, with bid depth at 1.56x ask depth. That matters less than it might in a tighter market because the spread remains 60 ticks, keeping trading costs elevated.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "The current trading picture is defined more by weak structural liquidity and sector-led moves than by short activity.",
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
    "exec_subtitle": "Trading access remains weak for its size, despite strong recent returns and balanced displayed depth.",
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
        "value": "14.2/100",
        "sub": "Peer median 85.6 (-71.4 pts)",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "US$0",
        "sub": "Peer median US$17.2M",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "24.88%",
        "sub": "282.50 ticks; peers 0.17%",
        "interp": {
          "text": "Wider",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity is weak for the stock’s size, and the clearest signal is the six-month liquidity score of 14.2 compared with a peer median of 85.6. The current book is more supportive on the bid side, with bid depth at 1.56x ask depth, but the 60-tick spread still points to expensive execution. That matters because access screens below peers even before the stronger recent price backdrop is considered.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "15.500",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "3.87%",
        "note": "60.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "1.56x",
        "note": "Bid depth / ask depth on the displayed order book",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-26.56% with 26.2% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-26.56% with 2.6% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-26.56% with 1.0% fill.",
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
        "value": "14",
        "suffix": "/100",
        "bar_pct": 14,
        "color_value": "text-red-400",
        "color_bar": "bg-red-500",
        "subtext": "Rank 480/558",
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
        "value": "24.88",
        "suffix": "%",
        "bar_pct": 100,
        "color_value": "text-red-400",
        "color_bar": "bg-red-500",
        "subtext": "24.88% • 282.50 ticks vs peers 0.17%",
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
        "value": "0",
        "value_prefix": "US$",
        "suffix": "",
        "bar_pct": 0,
        "color_value": "text-red-400",
        "color_bar": "bg-red-500",
        "subtext": "Peer median US$17.2M",
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
        "value": "68.4",
        "suffix": "sector",
        "bar_pct": 68,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 31.6% • Company 0.0%",
        "interpretation": {
          "text": "Sector",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is weak for the stock’s size. The six-month liquidity score is 14.2 compared with a peer median of 85.6, which means access starts from a materially weaker base than comparable names.",
      "Recent price performance is notably stronger than the main comparison groups. The stock returned 25.4% over 1M, compared with 0.3% for peers and -0.5% for the market, which gives the tape a firmer backdrop than peers.",
      "displayed bid depth is 1.56x ask depth; spread is 60 ticks. Immediate displayed depth broadly matches the stronger monthly liquidity read. Current driver: Sector at 68.4%. Broader market or sector moves still explain a meaningful part of the tape, so the stock is not trading on company news alone."
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
      "overall": "6M liquidity is weak: score 14.2 vs peer median 85.6 (-71.4 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "strengths": [
        "6M score 14.2 vs peer median 85.6 (-71.4 pts)."
      ],
      "concerns": [],
      "peer_context": "Primary-period score gap vs peers: -71.4 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is 29.5%, better than market, sector, and peers, which suggests stronger price performance than comparable names.",
        "vs_market": "Better than market: 29.5% vs market 11.1%.",
        "vs_sector": "Better than sector: 29.5% vs sector 15.7%.",
        "vs_peers": "Better than peers: 29.5% vs peers 6.0%."
      },
      "adv": {
        "insight": "average daily volume is US$0, worse than market, sector, and peers, which suggests smaller day-to-day trading size than comparable names.",
        "vs_market": "Worse than market: US$0 vs market US$9.2K.",
        "vs_sector": "Worse than sector: US$0 vs sector US$143.8K.",
        "vs_peers": "Worse than peers: US$0 vs peers US$17.2M."
      },
      "spread": {
        "insight": "Spread is 24.88%, worse than market, sector, and peers, which suggests trading costs are heavier than comparable names.",
        "vs_market": "Worse than market: 24.88% vs market 2.87%.",
        "vs_sector": "Worse than sector: 24.88% vs sector 12.57%.",
        "vs_peers": "Worse than peers: 24.88% vs peers 0.17%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.00%, worse than market, sector, and peers, which shows a lighter free-float turnover profile than comparable names.",
        "vs_market": "Worse than market: 0.00% vs market 0.03%.",
        "vs_sector": "Worse than sector: 0.00% vs sector 0.00%.",
        "vs_peers": "Worse than peers: 0.00% vs peers 0.07%."
      },
      "volatility": {
        "insight": "Volatility is 28.72%, better than market, but worse than sector and peers, which shows price variability is mixed across comparison groups.",
        "vs_market": "Better than market: 28.72% vs market 45.48%.",
        "vs_sector": "Worse than sector: 28.72% vs sector 18.69%.",
        "vs_peers": "Worse than peers: 28.72% vs peers 18.75%."
      },
      "trades": {
        "insight": "Trades is 0, worse than market, sector, and peers, which suggests activity is thinner than comparable names.",
        "vs_market": "Worse than market: 0 vs market 7.",
        "vs_sector": "Worse than sector: 0 vs sector 32.",
        "vs_peers": "Worse than peers: 0 vs peers 3152."
      },
      "amihud": {
        "insight": "Price impact is 4.40e-06, worse than market, sector, and peers, which suggests trades move price more than comparable names.",
        "vs_market": "Worse than market: 4.40e-06 vs market 2.12e-07.",
        "vs_sector": "Worse than sector: 4.40e-06 vs sectoe-06.",
        "vs_peers": "Worse than peers: 4.40e-06 vs peers 4.42e-09."
      }
    },
    "performance": {
      "overall": "Recent returns are clearly ahead of peers and the market, with a 1M gain of 25.4% compared with 0.3% for peers and -0.5% for the market. Liquidity does not fully confirm that strength because the 6M liquidity score is 14.2, which sits 71.4 points below the peer median of 85.6, so the price move is happening against a weak access backdrop for the company’s size.",
      "conclusion": "The move looks mainly sector-linked, with strong returns but weak underlying liquidity relative to peers."
    },
    "drivers": {
      "overall": "Sector moves are the main force in the stock now, accounting for 68.4% of recent price action. That means the tape is being shaped more by the broader industry backdrop than by stock-specific news, which matters after a strong 1M return of 25.4% compared with 0.3% for peers and -0.5% for the market.",
      "beta": "Based on the last 5 trading days, current mix is market 31.6%, sector 68.4%, and company-specific 0.0%.",
      "rolling_change": "The monthly pattern has not been stable. It was mostly market-driven in February and March, then mostly sector in April, so the current sector-led read looks more temporary than established."
    },
    "regime": {
      "overall": "High volatility matters because price moves are less steady, and that raises the risk of uneven execution when liquidity is already weak for the stock's size.",
      "current": "The active state is high volatility, while the stock has also outperformed with a 1M return of 25.4% compared with 0.3% for peers and -0.5% for the market, pointing to a stronger but less stable tape.",
      "transitions": "This looks more persistent than short-lived, with a typical run length of about 10.2 days, although the read is mixed.",
      "trading_implications": "This state looks more persistent, with a typical run length of about 10.2 days."
    },
    "execution": {
      "overall": "Displayed liquidity looks balanced on the surface because bid depth is 1.56x ask depth, which shows buyers are present in the book. That matters because the immediate screen does not point to a one-sided book even though the stock’s broader liquidity profile is weak for its size.",
      "concern": "Trade-size percentiles use May 5, 2025 to May 5, 2026 history (27 trading days • 46 trades).",
      "peer_context": "The current book is firmer than the longer-term liquidity standing suggests, but it does not overturn it. A 6M liquidity score of 14.2 compared with a peer median of 85.6 still leaves the stock well behind peers, so the balanced depth looks like a near-term offset rather than a change in the broader picture."
    },
    "trader_composition": {
      "overall": "Flow looks mainly retail-like, based on both trade count and trade value.",
      "retail_heavy": "Retail-like trades account for 82.6% of trade count and 43.0% of trade value, while institution-like trades are 0.0% on both measures. That leaves the tape leaning on smaller-ticket participation rather than institutional support.",
      "institutional_gap": "The absence of institution-like trades in both count and value makes the flow base look narrow, which reduces confidence that liquidity will hold up consistently.",
      "peer_comparison": "The mix stands out as more retail-like than a market with visible institutional participation, which matters because peer liquidity is typically steadier when larger-value traders are present."
    },
    "price_moving": {
      "overall": "Price-moving activity appears meaningful, with 53.3% of total trades moving price. That signal is mixed because more than half of trades move price, yet the overall flow still leans retail-like on both count and value. This matters because price formation is active, but it is not being anchored by institutional participation. Price-moving trades are active enough to matter for the tape, so any imbalance between positive and negative moves will have an outsized effect on trading quality.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity appears material, with high short interest and a sharp build in positioning. That matters because it adds a clear source of pressure around a stock that has still returned 25.4% over one month, well ahead of peers and the market.",
      "level": "High short interest",
      "correlation": "Strong negative - high shorts coincide with price drops",
      "trend": "Short positioning is rising quickly, up 54% month on month and 177% year on year. That points to growing bearish interest, but the strong recent share-price performance means it is not the only force shaping trading.",
      "peaks": "5 notable peak days identified."
    },
    "intraday": {
      "overall": "Liquidity is concentrated in the continuous session, with 100.0% of trading away from the open and close and a concentration score of 0.848.",
      "hhi_interpretation": "Highly concentrated - liquidity only in auctions",
      "best_times": "The continuous session is the only part of the day showing activity, so that is where liquidity is available.",
      "peer_ranking": "This intraday profile looks less robust than peers that spread activity across more of the session, because access here depends on a narrower trading window."
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
        "K6S",
        "G07",
        "S68",
        "U11",
        "O39",
        "D05",
        "8A1",
        "CJN",
        "T55"
      ],
      "scores": [
        14.157706093189965,
        72.22222222222221,
        98.9247311827957,
        99.2831541218638,
        99.6415770609319,
        100.0,
        12.724014336917563,
        0.35842293906810035,
        33.87096774193548
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
        0.0,
        287694.2894961339,
        34123889.088538095,
        75646604.5088102,
        85700079.75141422,
        197553283.75708017,
        0.0,
        0.0,
        828.9527085679366
      ],
      "total": 558
    },
    "market_comparison": {
      "sector_name": "Insurance - Life",
      "sector_count": 2,
      "market_count": 558,
      "company": {
        "volatility": 0.28722357456089065,
        "adv": 0.0,
        "spread_pct": 0.24884792626728103,
        "turnover_ratio": 0.0,
        "amihud": 4.395604395604399e-06,
        "trades": 0.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6886477998811863,
          "median": 0.45478987975751467,
          "min": 0.0,
          "max": 6.912950809089335,
          "p5": 0.15465547174076782,
          "p95": 2.035916599623587,
          "count": 558
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 2083953.0526018997,
          "median": 9150.358060851951,
          "min": 0.0,
          "max": 197553283.75708017,
          "p5": 0.0,
          "p95": 8464257.312118618,
          "count": 558
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.095748394520773,
          "median": 0.028680905466471195,
          "min": 0.0002712702706268827,
          "max": 1.267605633802817,
          "p5": 0.0036014837025888655,
          "p95": 0.4847795163584637,
          "count": 556
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.003300074858863382,
          "median": 0.00026597074665578606,
          "min": 0.0,
          "max": 0.8651374332608266,
          "p5": 0.0,
          "p95": 0.007217629168998251,
          "count": 551
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.2370287232457166e-05,
          "median": 2.1184971960693142e-07,
          "min": 0.0,
          "max": 0.0008431704884749916,
          "p5": 0.0,
          "p95": 4.624620313405457e-05,
          "count": 556
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 385.241935483871,
          "median": 7.0,
          "min": 0.0,
          "max": 10165.5,
          "p5": 0.0,
          "p95": 2137.2749999999983,
          "count": 558
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.186889099487329,
          "median": 0.186889099487329,
          "min": 0.0865546244137674,
          "max": 0.28722357456089065,
          "p5": 0.09658807192112356,
          "p95": 0.27719012705353446,
          "count": 2
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 143847.14474806696,
          "median": 143847.14474806696,
          "min": 0.0,
          "max": 287694.2894961339,
          "p5": 14384.714474806697,
          "p95": 273309.5750213272,
          "count": 2
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.1257417331885009,
          "median": 0.1257417331885009,
          "min": 0.0026355401097207533,
          "max": 0.24884792626728103,
          "p5": 0.014946159417598769,
          "p95": 0.236537306959403,
          "count": 2
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 1.2679447042824305e-05,
          "median": 1.2679447042824305e-05,
          "min": 0.0,
          "max": 2.535889408564861e-05,
          "p5": 1.2679447042824306e-06,
          "p95": 2.4090949381366177e-05,
          "count": 2
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 2.202116140638535e-06,
          "median": 2.202116140638535e-06,
          "min": 8.627885672671264e-09,
          "max": 4.395604395604399e-06,
          "p5": 2.279767111692577e-07,
          "p95": 4.176255570107813e-06,
          "count": 2
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 31.5,
          "median": 31.5,
          "min": 0.0,
          "max": 63.0,
          "p5": 3.1500000000000004,
          "p95": 59.849999999999994,
          "count": 2
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 49164047.54350592,
          "median": 17205791.689017113,
          "min": 0.0,
          "max": 197553283.75708017,
          "p5": 0.0,
          "p95": 158404662.35509703,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 3946.25,
          "median": 3152.0,
          "min": 0.0,
          "max": 10165.5,
          "p5": 0.0,
          "p95": 9648.375,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.37505727467985955,
          "median": 0.18748822798643933,
          "min": 0.0865546244137674,
          "max": 1.3003378330992528,
          "p5": 0.1064907610316658,
          "p95": 1.020088995136783,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.18232537169742474,
          "median": 0.00166345667647502,
          "min": 0.0002712702706268827,
          "max": 1.267605633802817,
          "p5": 0.00032188211462939626,
          "p95": 0.8769883169109374,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 35.82498029634291,
          "median": 1.6940093899880122,
          "min": 1.1876645733068347,
          "max": 260.0,
          "p5": 1.2017276792971183,
          "p95": 174.3083333333332,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 6.615882832467091e-05,
          "median": 4.415841618901011e-09,
          "min": 2.3435789483238113e-11,
          "max": 0.0004325836608929983,
          "p5": 3.0721237316661574e-11,
          "p95": 0.00031448223256920466,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0009997821923132851,
          "median": 0.0006969059680693671,
          "min": 0.0,
          "max": 0.002925861060745567,
          "p5": 0.0,
          "p95": 0.002556711351132175,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": 0.2539682539682542,
        "market": -0.005435095850177207,
        "sector": 0.11468236584736102,
        "peers": 0.0028835196234877625
      },
      {
        "horizon": "3M",
        "stock": 0.13750899928005778,
        "market": 0.0031558757542777816,
        "sector": 0.07072892408910492,
        "peers": 0.008042381397328047
      },
      {
        "horizon": "6M",
        "stock": 0.2950819672131153,
        "market": 0.11109323741368993,
        "sector": 0.15721387462699132,
        "peers": 0.05984037785862384
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
      "share_market": 0.3162205639921364,
      "share_sector": 0.683779436007861,
      "share_idio": 2.5009826407238704e-15,
      "beta_market": 0.926992600361275,
      "beta_sector": -25.631475103284714,
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
            "median": 0.3162205639921364,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "31.6%",
            "display_range": null,
            "display_text": "31.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 31.6,
            "plain_english": "Market explains about 31.6% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.683779436007861,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "68.4%",
            "display_range": null,
            "display_text": "68.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 68.4,
            "plain_english": "Sector explains about 68.4% of price moves in the current state."
          },
          "company_share": {
            "median": 2.5009826407238704e-15,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.0%",
            "display_range": null,
            "display_text": "0.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 0.0,
            "plain_english": "Company-specific explains about 0.0% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 0.926992600361275,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.93",
            "display_range": null,
            "display_text": "0.93",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Moderate",
            "plain_english": "Moderate market link: a 1% market move has lined up with about a 0.93% stock move in the same direction in this state.",
            "value_num": 0.93
          },
          "beta_stock_lag": {
            "median": 4.440892098500626e-15,
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
            "median": -25.631475103284714,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-25.63",
            "display_range": null,
            "display_text": "-25.63",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Very high",
            "plain_english": "Very high sector link: a 1% sector move has lined up with about a 25.63% stock move in the opposite direction in this state. The multiplier is unusually large and comes from only 251 trading days of history.",
            "value_num": -25.63
          },
          "beta_market_lag": {
            "median": 4.390608094729639,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "4.39",
            "display_range": null,
            "display_text": "4.39",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 4.39
          },
          "beta_sector_lag": {
            "median": -27.624600215960697,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-27.62",
            "display_range": null,
            "display_text": "-27.62",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -27.62
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
            "period_label": "2025-05-08 to 2025-05-30",
            "n_obs": 16,
            "partial_month": true,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5054604720556088,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.5%",
              "display_range": null,
              "display_text": "50.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 50.5,
              "plain_english": "Company-specific explains about 50.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.4080157419390284,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "40.8%",
                "display_range": null,
                "display_text": "40.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
                "kind": "share_pct",
                "value_pct": 40.8,
                "plain_english": "Market explains about 40.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.0865237860053628,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "8.7%",
                "display_range": null,
                "display_text": "8.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
                "kind": "share_pct",
                "value_pct": 8.7,
                "plain_english": "Sector explains about 8.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5054604720556088,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "50.5%",
                "display_range": null,
                "display_text": "50.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
                "kind": "share_pct",
                "value_pct": 50.5,
                "plain_english": "Company-specific explains about 50.5% of price moves in the current state."
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
              "median": 0.4712872513816686,
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
              "plain_english": "Company-specific explains about 47.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.24956715672804503,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "25.0%",
                "display_range": null,
                "display_text": "25.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 25.0,
                "plain_english": "Market explains about 25.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.27914559189028637,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.9%",
                "display_range": null,
                "display_text": "27.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 27.9,
                "plain_english": "Sector explains about 27.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4712872513816686,
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
                "plain_english": "Company-specific explains about 47.1% of price moves in the current state."
              }
            },
            "summary": "Jun: Mostly company-driven."
          },
          {
            "month_key": "2025-07",
            "month_label": "July 2025",
            "month_short_label": "Jul",
            "period_label": "2025-07-01 to 2025-07-31",
            "n_obs": 23,
            "partial_month": false,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4329206662680639,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "43.3%",
              "display_range": null,
              "display_text": "43.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
              "kind": "share_pct",
              "value_pct": 43.3,
              "plain_english": "Market explains about 43.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.4329206662680639,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "43.3%",
                "display_range": null,
                "display_text": "43.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
                "kind": "share_pct",
                "value_pct": 43.3,
                "plain_english": "Market explains about 43.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.391538344233002,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "39.2%",
                "display_range": null,
                "display_text": "39.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
                "kind": "share_pct",
                "value_pct": 39.2,
                "plain_english": "Sector explains about 39.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.17554098949893418,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "17.6%",
                "display_range": null,
                "display_text": "17.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
                "kind": "share_pct",
                "value_pct": 17.6,
                "plain_english": "Company-specific explains about 17.6% of price moves in the current state."
              }
            },
            "summary": "Jul: More mixed, though market-driven still has the largest share."
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
              "median": 0.3333333333333333,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "33.3%",
              "display_range": null,
              "display_text": "33.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 33.3,
              "plain_english": "Market explains about 33.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3333333333333333,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "33.3%",
                "display_range": null,
                "display_text": "33.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 33.3,
                "plain_english": "Market explains about 33.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3333333333333333,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "33.3%",
                "display_range": null,
                "display_text": "33.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 33.3,
                "plain_english": "Sector explains about 33.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3333333333333333,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "33.3%",
                "display_range": null,
                "display_text": "33.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 33.3,
                "plain_english": "Company-specific explains about 33.3% of price moves in the current state."
              }
            },
            "summary": "Aug: Much more balanced across company, sector, and market factors."
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
              "median": 0.5251771335594325,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.5%",
              "display_range": null,
              "display_text": "52.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 52.5,
              "plain_english": "Company-specific explains about 52.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2465806200480266,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "24.7%",
                "display_range": null,
                "display_text": "24.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 24.7,
                "plain_english": "Market explains about 24.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.22824224639254073,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "22.8%",
                "display_range": null,
                "display_text": "22.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 22.8,
                "plain_english": "Sector explains about 22.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5251771335594325,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "52.5%",
                "display_range": null,
                "display_text": "52.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 52.5,
                "plain_english": "Company-specific explains about 52.5% of price moves in the current state."
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
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.47300268261199785,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.3%",
              "display_range": null,
              "display_text": "47.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 47.3,
              "plain_english": "Market explains about 47.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.47300268261199785,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "47.3%",
                "display_range": null,
                "display_text": "47.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 47.3,
                "plain_english": "Market explains about 47.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.28048721744805594,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "28.0%",
                "display_range": null,
                "display_text": "28.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 28.0,
                "plain_english": "Sector explains about 28.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.24651009993994616,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "24.7%",
                "display_range": null,
                "display_text": "24.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 24.7,
                "plain_english": "Company-specific explains about 24.7% of price moves in the current state."
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
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.45704172485967764,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.7%",
              "display_range": null,
              "display_text": "45.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 45.7,
              "plain_english": "Market explains about 45.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.45704172485967764,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "45.7%",
                "display_range": null,
                "display_text": "45.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 45.7,
                "plain_english": "Market explains about 45.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.19744619810304867,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "19.7%",
                "display_range": null,
                "display_text": "19.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 19.7,
                "plain_english": "Sector explains about 19.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.34551207703727377,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "34.6%",
                "display_range": null,
                "display_text": "34.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 34.6,
                "plain_english": "Company-specific explains about 34.6% of price moves in the current state."
              }
            },
            "summary": "Nov: Mostly market-driven."
          },
          {
            "month_key": "2025-12",
            "month_label": "December 2025",
            "month_short_label": "Dec",
            "period_label": "2025-12-01 to 2025-12-31",
            "n_obs": 22,
            "partial_month": false,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.3638967687748571,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.4%",
              "display_range": null,
              "display_text": "36.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 36.4,
              "plain_english": "Market explains about 36.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3638967687748571,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "36.4%",
                "display_range": null,
                "display_text": "36.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 36.4,
                "plain_english": "Market explains about 36.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.27759210624020475,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.8%",
                "display_range": null,
                "display_text": "27.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 27.8,
                "plain_english": "Sector explains about 27.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3585111249849382,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "35.9%",
                "display_range": null,
                "display_text": "35.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 35.9,
                "plain_english": "Company-specific explains about 35.9% of price moves in the current state."
              }
            },
            "summary": "Dec: Much more balanced across company, sector, and market factors."
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
              "median": 0.6740837909943584,
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
                "median": 0.13138401170565542,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "13.1%",
                "display_range": null,
                "display_text": "13.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 13.1,
                "plain_english": "Market explains about 13.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.194532197299986,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "19.5%",
                "display_range": null,
                "display_text": "19.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 19.5,
                "plain_english": "Sector explains about 19.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6740837909943584,
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
            "summary": "Jan: Still clearly company-driven."
          },
          {
            "month_key": "2026-02",
            "month_label": "February 2026",
            "month_short_label": "Feb",
            "period_label": "2026-02-02 to 2026-02-27",
            "n_obs": 18,
            "partial_month": false,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.47461420274641536,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.5%",
              "display_range": null,
              "display_text": "47.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 47.5,
              "plain_english": "Market explains about 47.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.47461420274641536,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "47.5%",
                "display_range": null,
                "display_text": "47.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 47.5,
                "plain_english": "Market explains about 47.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3127047871140637,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "31.3%",
                "display_range": null,
                "display_text": "31.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 31.3,
                "plain_english": "Sector explains about 31.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.21268101013952107,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "21.3%",
                "display_range": null,
                "display_text": "21.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 21.3,
                "plain_english": "Company-specific explains about 21.3% of price moves in the current state."
              }
            },
            "summary": "Feb: Mostly market-driven."
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
              "median": 0.48325313249380314,
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
              "plain_english": "Market explains about 48.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.48325313249380314,
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
                "plain_english": "Market explains about 48.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3140983893822498,
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
                "plain_english": "Sector explains about 31.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.20264847812394698,
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
                "plain_english": "Company-specific explains about 20.3% of price moves in the current state."
              }
            },
            "summary": "Mar: Mostly market-driven."
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
              "median": 0.5483280295156168,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "54.8%",
              "display_range": null,
              "display_text": "54.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 54.8,
              "plain_english": "Company-specific explains about 54.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.09847505234815228,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "9.8%",
                "display_range": null,
                "display_text": "9.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 9.8,
                "plain_english": "Market explains about 9.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.35319691813623094,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "35.3%",
                "display_range": null,
                "display_text": "35.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 35.3,
                "plain_english": "Sector explains about 35.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5483280295156168,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "54.8%",
                "display_range": null,
                "display_text": "54.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 54.8,
                "plain_english": "Company-specific explains about 54.8% of price moves in the current state."
              }
            },
            "summary": "Apr: Mostly company-driven."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5100401606425703,
            "expected_duration_days": 10.583333333333334,
            "current_probability": 0.0,
            "n_days_effective": 127.0,
            "volatility": {
              "median": 0.00011032223347582894,
              "low": 0.00011032223347582894,
              "high": 0.00011032223347582894
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": 0.0
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4899598393574297,
            "expected_duration_days": 10.166666666666666,
            "current_probability": 1.0,
            "n_days_effective": 122.0,
            "volatility": {
              "median": 0.02207588850256697,
              "low": 0.02207588850256697,
              "high": 0.02207588850256697
            },
            "volatility_label": "High Volatility",
            "current_probability_display": null
          }
        ],
        "transitions": {
          "mean": [
            [
              0.905511811023622,
              0.09448818897637795
            ],
            [
              0.09090909090909091,
              0.9090909090909091
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              115.0,
              12.0
            ],
            [
              11.0,
              110.0
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
          "market_link_display": "0.93",
          "sector_link_display": "-25.63",
          "market_link_explainer": "Moderate market link. A 1% market move has lined up with about a 0.93% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 25.63% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "0.00",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "High Volatility",
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "driver_share_pct": 68.4,
          "driver_share_display": "68.4%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 251 trading days relative to the 252-day target.",
          "history_days": 251,
          "history_limited": true,
          "volatility_label": "High Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.9090909090909091,
          "effective_days": 122.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 10.2 days.",
          "expected_duration_days": 10.2
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
          "period_label": "2025-05-08 to 2025-05-30",
          "n_obs": 16,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "May: Mostly company-driven.",
          "share_market": 0.4080157419390284,
          "share_sector": 0.0865237860053628,
          "share_company": 0.5054604720556088,
          "share_market_display": "40.8%",
          "share_sector_display": "8.7%",
          "share_company_display": "50.5%",
          "dominant_share_display": "50.5%"
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
          "share_market": 0.24956715672804503,
          "share_sector": 0.27914559189028637,
          "share_company": 0.4712872513816686,
          "share_market_display": "25.0%",
          "share_sector_display": "27.9%",
          "share_company_display": "47.1%",
          "dominant_share_display": "47.1%"
        },
        {
          "month_key": "2025-07",
          "month_label": "July 2025",
          "month_short_label": "Jul",
          "period_label": "2025-07-01 to 2025-07-31",
          "n_obs": 23,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Jul: More mixed, though market-driven still has the largest share.",
          "share_market": 0.4329206662680639,
          "share_sector": 0.391538344233002,
          "share_company": 0.17554098949893418,
          "share_market_display": "43.3%",
          "share_sector_display": "39.2%",
          "share_company_display": "17.6%",
          "dominant_share_display": "43.3%"
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
          "summary": "Aug: Much more balanced across company, sector, and market factors.",
          "share_market": 0.3333333333333333,
          "share_sector": 0.3333333333333333,
          "share_company": 0.3333333333333333,
          "share_market_display": "33.3%",
          "share_sector_display": "33.3%",
          "share_company_display": "33.3%",
          "dominant_share_display": "33.3%"
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
          "share_market": 0.2465806200480266,
          "share_sector": 0.22824224639254073,
          "share_company": 0.5251771335594325,
          "share_market_display": "24.7%",
          "share_sector_display": "22.8%",
          "share_company_display": "52.5%",
          "dominant_share_display": "52.5%"
        },
        {
          "month_key": "2025-10",
          "month_label": "October 2025",
          "month_short_label": "Oct",
          "period_label": "2025-10-01 to 2025-10-31",
          "n_obs": 22,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Oct: Mostly market-driven.",
          "share_market": 0.47300268261199785,
          "share_sector": 0.28048721744805594,
          "share_company": 0.24651009993994616,
          "share_market_display": "47.3%",
          "share_sector_display": "28.0%",
          "share_company_display": "24.7%",
          "dominant_share_display": "47.3%"
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
          "summary": "Nov: Mostly market-driven.",
          "share_market": 0.45704172485967764,
          "share_sector": 0.19744619810304867,
          "share_company": 0.34551207703727377,
          "share_market_display": "45.7%",
          "share_sector_display": "19.7%",
          "share_company_display": "34.6%",
          "dominant_share_display": "45.7%"
        },
        {
          "month_key": "2025-12",
          "month_label": "December 2025",
          "month_short_label": "Dec",
          "period_label": "2025-12-01 to 2025-12-31",
          "n_obs": 22,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Dec: Much more balanced across company, sector, and market factors.",
          "share_market": 0.3638967687748571,
          "share_sector": 0.27759210624020475,
          "share_company": 0.3585111249849382,
          "share_market_display": "36.4%",
          "share_sector_display": "27.8%",
          "share_company_display": "35.9%",
          "dominant_share_display": "36.4%"
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
          "share_market": 0.13138401170565542,
          "share_sector": 0.194532197299986,
          "share_company": 0.6740837909943584,
          "share_market_display": "13.1%",
          "share_sector_display": "19.5%",
          "share_company_display": "67.4%",
          "dominant_share_display": "67.4%"
        },
        {
          "month_key": "2026-02",
          "month_label": "February 2026",
          "month_short_label": "Feb",
          "period_label": "2026-02-02 to 2026-02-27",
          "n_obs": 18,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Feb: Mostly market-driven.",
          "share_market": 0.47461420274641536,
          "share_sector": 0.3127047871140637,
          "share_company": 0.21268101013952107,
          "share_market_display": "47.5%",
          "share_sector_display": "31.3%",
          "share_company_display": "21.3%",
          "dominant_share_display": "47.5%"
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
          "summary": "Mar: Mostly market-driven.",
          "share_market": 0.48325313249380314,
          "share_sector": 0.3140983893822498,
          "share_company": 0.20264847812394698,
          "share_market_display": "48.3%",
          "share_sector_display": "31.4%",
          "share_company_display": "20.3%",
          "dominant_share_display": "48.3%"
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
          "share_market": 0.09847505234815228,
          "share_sector": 0.35319691813623094,
          "share_company": 0.5483280295156168,
          "share_market_display": "9.8%",
          "share_sector_display": "35.3%",
          "share_company_display": "54.8%",
          "dominant_share_display": "54.8%"
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
          0.5100401606425703,
          0.4899598393574297
        ],
        "current_regime": 1,
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5100401606425703,
            "expected_duration_days": 10.583333333333334,
            "current_probability": 0.0,
            "n_days_effective": 127.0,
            "volatility": {
              "median": 0.00011032223347582894,
              "low": 0.00011032223347582894,
              "high": 0.00011032223347582894
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4899598393574297,
            "expected_duration_days": 10.166666666666666,
            "current_probability": 1.0,
            "n_days_effective": 122.0,
            "volatility": {
              "median": 0.02207588850256697,
              "low": 0.02207588850256697,
              "high": 0.02207588850256697
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.905511811023622,
            0.09448818897637795
          ],
          [
            0.09090909090909091,
            0.9090909090909091
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 15.2,
          "quantity": 100.0,
          "value": 1520.0
        },
        {
          "level": 2,
          "price": 13.05,
          "quantity": 1200.0,
          "value": 15660.0
        },
        {
          "level": 3,
          "price": 9.0,
          "quantity": 1000.0,
          "value": 9000.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 15.8,
          "quantity": 300.0,
          "value": 4740.0
        },
        {
          "level": 2,
          "price": 19.98,
          "quantity": 600.0,
          "value": 11988.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-05-05 08:59:37.938800000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 15.5,
        "spread_pct": 0.03870967741935493,
        "spread_ticks": 60.0,
        "tick_size": 0.01,
        "displayed_levels_per_side": 100,
        "bid_depth_notional_displayed": 26180.0,
        "ask_depth_notional_displayed": 16728.0,
        "bid_depth_notional_top10": 26180.0,
        "ask_depth_notional_top10": 16728.0,
        "bid_ask_depth_ratio": 1.565
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 366,
        "history_limited": false,
        "trade_days_used": 27,
        "n_trades_used": 46,
        "first_trade_date": "2025-05-05",
        "last_trade_date": "2026-05-05",
        "window_label": "May 5, 2025 to May 5, 2026",
        "window_short_label": "May 5, 2025 to May 5, 2026",
        "trade_days_label": "27 trading days",
        "trade_count_label": "46 trades",
        "window_detail_label": "27 trading days • 46 trades",
        "history_note": "Trade-size percentiles use May 5, 2025 to May 5, 2026 history (27 trading days • 46 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 9012.0,
            "impact_pct": -0.137487,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 34.42,
            "pct_of_adv": null
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 13848.75,
            "impact_pct": -0.144787,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 52.9,
            "pct_of_adv": null
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 22514.37,
            "impact_pct": -0.23256,
            "filled_pct": 100.0,
            "levels_consumed": 3,
            "pct_of_bid_depth": 86.0,
            "pct_of_adv": null
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-05-05",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "8137619147833895936",
            "timestamp": "2026-05-04 22:59:06.527700000",
            "local_timestamp": "2026-05-05 06:59:06",
            "posted_price": 19.98,
            "size_shares": 1000.0,
            "notional": 19980.0,
            "impact_pct": -0.199911,
            "filled_pct": 100.0,
            "levels_consumed": 3,
            "pct_of_bid_depth": 76.32,
            "price_vs_mid_pct": 28.903,
            "executed_event_count": 0,
            "event_count": 7
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-05-05",
        "bucket_minutes": 30,
        "displayed_levels_per_side": 100,
        "tick_size": 0.01,
        "timezone": "SGT (UTC+8)",
        "session_label": "SGX continuous trading session",
        "bucket_label_basis": "bucket start time",
        "display_window_label": "SGX continuous trading session",
        "bucket_note": "Buckets cover the SGX continuous trading session (auctions excluded).",
        "reason": null,
        "rows": [
          {
            "bucket": "10:30",
            "spread_pct": 0.15221238938053086,
            "spread_ticks": 214.99999999999986,
            "bid_depth_notional": 24660.0,
            "ask_depth_notional": 21108.0,
            "mid_price": 14.125
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.02666666666666657,
            "spread_ticks": 39.99999999999986,
            "bid_depth_notional": 32060.0,
            "ask_depth_notional": 21108.0,
            "mid_price": 15.0
          },
          {
            "bucket": "16:00",
            "spread_pct": 0.04620462046204616,
            "spread_ticks": 69.99999999999993,
            "bid_depth_notional": 32060.0,
            "ask_depth_notional": 19738.0,
            "mid_price": 15.15
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.03870967741935493,
            "spread_ticks": 60.00000000000014,
            "bid_depth_notional": 26180.0,
            "ask_depth_notional": 16728.0,
            "mid_price": 15.5
          }
        ],
        "summary": {
          "median_spread_pct": 0.042457148940700545,
          "median_spread_ticks": 65.00000000000003,
          "median_bid_depth_notional": 29120.0,
          "median_ask_depth_notional": 20423.0,
          "tightest_bucket": "15:30",
          "widest_bucket": "10:30",
          "deepest_bid_bucket": "15:30",
          "thinnest_bid_bucket": "10:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": null,
      "peers": [
        {
          "ticker": "D05",
          "pct": 0.5
        },
        {
          "ticker": "O39",
          "pct": 0.9
        },
        {
          "ticker": "U11",
          "pct": 1.6
        },
        {
          "ticker": "S68",
          "pct": 2.8
        },
        {
          "ticker": "G07",
          "pct": 303.3
        },
        {
          "ticker": "T55",
          "pct": 36988.2
        },
        {
          "ticker": "8A1",
          "pct": null
        },
        {
          "ticker": "CJN",
          "pct": null
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "USD",
          "n_trades": 4,
          "n_runs": 0,
          "n_trade_days": 1,
          "first_trade_date": "2026-05-05",
          "last_trade_date": "2026-05-05",
          "period_days": 0,
          "method": {
            "key": "legacy_size_threshold",
            "name": "Trade-size buckets",
            "version": "legacy",
            "unit_of_classification": null
          },
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          },
          "composition": {
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
              "retail": 4,
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
            "avg": 2682.5,
            "median": 1565.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "K6S",
              "currency": "USD",
              "is_target": true,
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
              "avg_trade_size": 2682.5,
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
              "ticker": "T55",
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
              "avg_trade_size": 1630.6666666666667,
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
              "ticker": "G07",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9166666666666666,
              "mixed_pct": 0.08333333333333333,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5282051282051282,
              "mixed_qty_pct": 0.4717948717948718,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5276699396142809,
              "mixed_notional_pct": 0.4723300603857191,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 6337.729166666667,
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
              "ticker": "O39",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.7223257547521431,
              "mixed_pct": 0.22586656727543794,
              "instit_pct": 0.05180767797241893,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.21954713493530498,
              "mixed_qty_pct": 0.39671903881700554,
              "instit_qty_pct": 0.3837338262476895,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.2195369215678899,
              "mixed_notional_pct": 0.3967404827971332,
              "instit_notional_pct": 0.3837225956349769,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 17518.85799478196,
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
              "ticker": "S68",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.6937685459940652,
              "mixed_pct": 0.2587537091988131,
              "instit_pct": 0.04747774480712166,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.18553028226911483,
              "mixed_qty_pct": 0.5010374662334103,
              "instit_qty_pct": 0.31343225149747483,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.1857394331376694,
              "mixed_notional_pct": 0.5009971566610193,
              "instit_notional_pct": 0.31326341020131127,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 15978.518397626112,
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
              "ticker": "U11",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.6465116279069767,
              "mixed_pct": 0.2943521594684385,
              "instit_pct": 0.05913621262458472,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.17730676481787028,
              "mixed_qty_pct": 0.4707450184033507,
              "instit_qty_pct": 0.351948216778779,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.1773499928618184,
              "mixed_notional_pct": 0.47079900444239803,
              "instit_notional_pct": 0.35185100269578357,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 18910.05249169435,
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
              "ticker": "D05",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.5591453882230328,
              "mixed_pct": 0.29233976029181863,
              "instit_pct": 0.1485148514851485,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.11699979394189161,
              "mixed_qty_pct": 0.25378116628889347,
              "instit_qty_pct": 0.6292190397692149,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.1170372627224454,
              "mixed_notional_pct": 0.2538324568736508,
              "instit_notional_pct": 0.6291302804039037,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 36914.72068785826,
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
          "currency": "USD",
          "n_trades": 10,
          "n_runs": 0,
          "n_trade_days": 3,
          "first_trade_date": "2026-04-15",
          "last_trade_date": "2026-05-05",
          "period_days": 20,
          "method": {
            "key": "legacy_size_threshold",
            "name": "Trade-size buckets",
            "version": "legacy",
            "unit_of_classification": null
          },
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          },
          "composition": {
            "retail_pct": 0.9,
            "mixed_pct": 0.1,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5454545454545454,
            "mixed_qty_pct": 0.45454545454545453,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5548050353085662,
            "mixed_notional_pct": 0.4451949646914338,
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
              "retail": 9,
              "mixed": 1,
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
            "avg": 3257.0,
            "median": 1515.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "K6S",
              "currency": "USD",
              "is_target": true,
              "retail_pct": 0.9,
              "mixed_pct": 0.1,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5454545454545454,
              "mixed_qty_pct": 0.45454545454545453,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5548050353085662,
              "mixed_notional_pct": 0.4451949646914338,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3257.0,
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
              "ticker": "T55",
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
              "avg_trade_size": 571.8546666666667,
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
              "ticker": "8A1",
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
              "avg_trade_size": 560.1999999999999,
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
              "ticker": "CJN",
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
              "avg_trade_size": 3610.6666666666665,
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
              "ticker": "G07",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.857024106400665,
              "mixed_pct": 0.1313383208645054,
              "instit_pct": 0.011637572734829594,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.4149810366624526,
              "mixed_qty_pct": 0.3919089759797724,
              "instit_qty_pct": 0.19310998735777496,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.41500609657569315,
              "mixed_notional_pct": 0.3918577535171087,
              "instit_notional_pct": 0.19313614990719813,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 8292.678304239402,
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
              "ticker": "S68",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.7857357407469212,
              "mixed_pct": 0.19327170176551078,
              "instit_pct": 0.020992557487568002,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.29033162839215537,
              "mixed_qty_pct": 0.4915241417779921,
              "instit_qty_pct": 0.21814422982985254,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.29104136630535304,
              "mixed_notional_pct": 0.4916264553773093,
              "instit_notional_pct": 0.21733217831733767,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 11164.784300637453,
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
              "ticker": "O39",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.7115354546165272,
              "mixed_pct": 0.22828551325150495,
              "instit_pct": 0.06017903213196779,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.18593326260057194,
              "mixed_qty_pct": 0.36970528914036604,
              "instit_qty_pct": 0.444361448259062,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.18575719627038467,
              "mixed_notional_pct": 0.36933188227611585,
              "instit_notional_pct": 0.4449109214534994,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 18891.98454968337,
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
              "ticker": "U11",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.6978305443481712,
              "mixed_pct": 0.24090548316687613,
              "instit_pct": 0.06126397248495271,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.19565306904601273,
              "mixed_qty_pct": 0.38222205329456443,
              "instit_qty_pct": 0.42212487765942286,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.19599112292753856,
              "mixed_notional_pct": 0.38193313762750397,
              "instit_notional_pct": 0.42207573944495747,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 19252.71340697136,
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
              "ticker": "D05",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.5828190083755095,
              "mixed_pct": 0.2878935817619922,
              "instit_pct": 0.12928740986249831,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.12409022503454285,
              "mixed_qty_pct": 0.2643957862127839,
              "instit_qty_pct": 0.6115139887526733,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.12372149151988036,
              "mixed_notional_pct": 0.2643295302825135,
              "instit_notional_pct": 0.6119489781976062,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 35187.035114435435,
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
          "currency": "USD",
          "n_trades": 12,
          "n_runs": 0,
          "n_trade_days": 5,
          "first_trade_date": "2026-02-13",
          "last_trade_date": "2026-05-05",
          "period_days": 81,
          "method": {
            "key": "legacy_size_threshold",
            "name": "Trade-size buckets",
            "version": "legacy",
            "unit_of_classification": null
          },
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          },
          "composition": {
            "retail_pct": 0.8333333333333334,
            "mixed_pct": 0.16666666666666666,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3333333333333333,
            "mixed_qty_pct": 0.6666666666666666,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.34298591149437524,
            "mixed_notional_pct": 0.6570140885056247,
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
              "retail": 10,
              "mixed": 2,
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
            "avg": 4696.5,
            "median": 1515.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "K6S",
              "currency": "USD",
              "is_target": true,
              "retail_pct": 0.8333333333333334,
              "mixed_pct": 0.16666666666666666,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.3333333333333333,
              "mixed_qty_pct": 0.6666666666666666,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.34298591149437524,
              "mixed_notional_pct": 0.6570140885056247,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4696.5,
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
              "ticker": "8A1",
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
              "avg_trade_size": 363.3684210526315,
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
              "ticker": "CJN",
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
              "avg_trade_size": 1684.857142857143,
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
              "ticker": "T55",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9714285714285714,
              "mixed_pct": 0.02857142857142857,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.7065347111046427,
              "mixed_qty_pct": 0.2934652888953573,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.715133971232399,
              "mixed_notional_pct": 0.2848660287676009,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1859.9748051948054,
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
              "ticker": "G07",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8168649767201241,
              "mixed_pct": 0.16968442834971548,
              "instit_pct": 0.013450594930160372,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.38743136058572303,
              "mixed_qty_pct": 0.436241610738255,
              "instit_qty_pct": 0.17632702867602196,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.38724473021443623,
              "mixed_notional_pct": 0.43640343870076487,
              "instit_notional_pct": 0.17635183108479893,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 9390.570098292808,
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
              "ticker": "S68",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.7605963466137485,
              "mixed_pct": 0.21294458861242557,
              "instit_pct": 0.02645906477382588,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.25627386112339673,
              "mixed_qty_pct": 0.48398690844758957,
              "instit_qty_pct": 0.2597392304290137,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.25758417276564777,
              "mixed_notional_pct": 0.48442856591773853,
              "instit_notional_pct": 0.2579872613166137,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 12414.504517006426,
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
              "ticker": "O39",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.697521028766423,
              "mixed_pct": 0.24467061018276937,
              "instit_pct": 0.057808361050807625,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.1791073783471208,
              "mixed_qty_pct": 0.39960540979573816,
              "instit_qty_pct": 0.4212872118571411,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.17914019912667273,
              "mixed_notional_pct": 0.3988027595035885,
              "instit_notional_pct": 0.42205704136973876,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 18757.82893837094,
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
              "ticker": "U11",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.6423980073033301,
              "mixed_pct": 0.27993518899180186,
              "instit_pct": 0.07766680370486809,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.15466620405875645,
              "mixed_qty_pct": 0.37909331466155705,
              "instit_qty_pct": 0.46624048127968654,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.15438120116101292,
              "mixed_notional_pct": 0.37813207220584477,
              "instit_notional_pct": 0.4674867266331423,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 22858.323895431793,
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
              "ticker": "D05",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.5429798196650923,
              "mixed_pct": 0.3227538643194504,
              "instit_pct": 0.13426631601545727,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.11216535866727641,
              "mixed_qty_pct": 0.2959531666071634,
              "instit_qty_pct": 0.5918814747255602,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.11220325784674898,
              "mixed_notional_pct": 0.29545613378317276,
              "instit_notional_pct": 0.5923406083700783,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 35767.163165521684,
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
        "6m": {
          "valid": true,
          "currency": "USD",
          "n_trades": 23,
          "n_runs": 0,
          "n_trade_days": 13,
          "first_trade_date": "2025-11-03",
          "last_trade_date": "2026-05-05",
          "period_days": 183,
          "method": {
            "key": "legacy_size_threshold",
            "name": "Trade-size buckets",
            "version": "legacy",
            "unit_of_classification": null
          },
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          },
          "composition": {
            "retail_pct": 0.8260869565217391,
            "mixed_pct": 0.17391304347826086,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.43023255813953487,
            "mixed_qty_pct": 0.5697674418604651,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.4301426185275601,
            "mixed_notional_pct": 0.5698573814724399,
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
              "retail": 19,
              "mixed": 4,
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
            "avg": 5075.869565217391,
            "median": 1580.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "K6S",
              "currency": "USD",
              "is_target": true,
              "retail_pct": 0.8260869565217391,
              "mixed_pct": 0.17391304347826086,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.43023255813953487,
              "mixed_qty_pct": 0.5697674418604651,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.4301426185275601,
              "mixed_notional_pct": 0.5698573814724399,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5075.869565217391,
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
              "ticker": "8A1",
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
              "avg_trade_size": 273.0948275862069,
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
              "ticker": "CJN",
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
              "avg_trade_size": 1515.5,
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
              "ticker": "T55",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9766454352441614,
              "mixed_pct": 0.02335456475583864,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.7490479153702552,
              "mixed_qty_pct": 0.2509520846297449,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.7625725295716733,
              "mixed_notional_pct": 0.23742747042832657,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1824.1333333333334,
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
              "ticker": "G07",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8050074614491792,
              "mixed_pct": 0.1804012601558614,
              "instit_pct": 0.014591278394959377,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.36209118074403046,
              "mixed_qty_pct": 0.45812429750253586,
              "instit_qty_pct": 0.17978452175343368,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.362656396930514,
              "mixed_notional_pct": 0.45762495880502113,
              "instit_notional_pct": 0.17971864426446488,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 9442.660918587299,
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
              "ticker": "S68",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.7746339393081983,
              "mixed_pct": 0.20161768626789495,
              "instit_pct": 0.023748374423906714,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.2702861291551962,
              "mixed_qty_pct": 0.4844578151646962,
              "instit_qty_pct": 0.24525605568010764,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.270168146712664,
              "mixed_notional_pct": 0.4847299910564366,
              "instit_notional_pct": 0.24510186223089944,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 11641.53450574325,
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
              "ticker": "O39",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.6945879482242598,
              "mixed_pct": 0.24511123396305545,
              "instit_pct": 0.060300817812684676,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.17295504947907972,
              "mixed_qty_pct": 0.3933816604907972,
              "instit_qty_pct": 0.43366329003012305,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.17358488004414502,
              "mixed_notional_pct": 0.39394030064309754,
              "instit_notional_pct": 0.43247481931275744,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 18912.98708084717,
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
              "ticker": "U11",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.6331114906927681,
              "mixed_pct": 0.28621008190931146,
              "instit_pct": 0.08067842739792049,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.1504655601861504,
              "mixed_qty_pct": 0.3787650186349314,
              "instit_qty_pct": 0.4707694211789182,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.15016909446556106,
              "mixed_notional_pct": 0.3778882790931961,
              "instit_notional_pct": 0.4719426264412428,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 23209.091765834342,
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
              "ticker": "D05",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.552435318888222,
              "mixed_pct": 0.3145263871567679,
              "instit_pct": 0.13303829395501013,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.11417439217283178,
              "mixed_qty_pct": 0.2893653619236994,
              "instit_qty_pct": 0.5964602459034688,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.11409169368478181,
              "mixed_notional_pct": 0.2891750504628551,
              "instit_notional_pct": 0.5967332558523631,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 35486.18578772715,
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
      "currency": "USD",
      "n_trades": 23,
      "n_runs": 0,
      "n_trade_days": 13,
      "first_trade_date": "2025-11-03",
      "last_trade_date": "2026-05-05",
      "period_days": 183,
      "method": {
        "key": "legacy_size_threshold",
        "name": "Trade-size buckets",
        "version": "legacy",
        "unit_of_classification": null
      },
      "thresholds": {
        "retail_max": 10000.0,
        "instit_min": 50000.0
      },
      "composition": {
        "retail_pct": 0.8260869565217391,
        "mixed_pct": 0.17391304347826086,
        "instit_pct": 0.0,
        "ambiguous_pct": null,
        "unobservable_pct": null,
        "unclear_pct": null,
        "retail_qty_pct": null,
        "mixed_qty_pct": null,
        "instit_qty_pct": null,
        "ambiguous_qty_pct": null,
        "unobservable_qty_pct": null,
        "unclear_qty_pct": null,
        "retail_notional_pct": 0.4301426185275601,
        "mixed_notional_pct": 0.5698573814724399,
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
        "unclear_pct": null
      },
      "trade_size": {
        "avg": 5075.869565217391,
        "median": 1580.0
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
            "n_trades": 6,
            "n_runs": 0,
            "retail_pct": 0.8333333333333334,
            "mixed_pct": 0.16666666666666666,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 3640.0,
            "avg_run_notional": null,
            "retail_qty_pct": 0.3333333333333333,
            "mixed_qty_pct": 0.6666666666666666,
            "instit_qty_pct": 0.0,
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
            "total_quantity": 1500.0
          },
          {
            "month": "2026-03",
            "n_trades": 1,
            "n_runs": 0,
            "retail_pct": 1.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 1260.0,
            "avg_run_notional": null,
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
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
            "total_quantity": 100.0
          },
          {
            "month": "2026-02",
            "n_trades": 1,
            "n_runs": 0,
            "retail_pct": 0.0,
            "mixed_pct": 1.0,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 22528.0,
            "avg_run_notional": null,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 1.0,
            "instit_qty_pct": 0.0,
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
            "total_quantity": 1600.0
          },
          {
            "month": "2026-01",
            "n_trades": 1,
            "n_runs": 0,
            "retail_pct": 1.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 1389.0,
            "avg_run_notional": null,
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
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
            "total_quantity": 100.0
          },
          {
            "month": "2025-12",
            "n_trades": 2,
            "n_runs": 0,
            "retail_pct": 1.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 1344.0,
            "avg_run_notional": null,
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
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
            "total_quantity": 200.0
          },
          {
            "month": "2025-11",
            "n_trades": 5,
            "n_runs": 0,
            "retail_pct": 0.8,
            "mixed_pct": 0.2,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 7512.0,
            "avg_run_notional": null,
            "retail_qty_pct": 0.4827586206896552,
            "mixed_qty_pct": 0.5172413793103449,
            "instit_qty_pct": 0.0,
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
            "total_quantity": 2900.0
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "K6S",
          "currency": "USD",
          "is_target": true,
          "retail_pct": 0.8260869565217391,
          "mixed_pct": 0.17391304347826086,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.43023255813953487,
          "mixed_qty_pct": 0.5697674418604651,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.4301426185275601,
          "mixed_notional_pct": 0.5698573814724399,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 5075.869565217391,
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
          "ticker": "8A1",
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
          "avg_trade_size": 273.0948275862069,
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
          "ticker": "CJN",
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
          "avg_trade_size": 1515.5,
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
          "ticker": "T55",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9766454352441614,
          "mixed_pct": 0.02335456475583864,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.7490479153702552,
          "mixed_qty_pct": 0.2509520846297449,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.7625725295716733,
          "mixed_notional_pct": 0.23742747042832657,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 1824.1333333333334,
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
          "ticker": "G07",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.8050074614491792,
          "mixed_pct": 0.1804012601558614,
          "instit_pct": 0.014591278394959377,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.36209118074403046,
          "mixed_qty_pct": 0.45812429750253586,
          "instit_qty_pct": 0.17978452175343368,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.362656396930514,
          "mixed_notional_pct": 0.45762495880502113,
          "instit_notional_pct": 0.17971864426446488,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 9442.660918587299,
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
          "ticker": "S68",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.7746339393081983,
          "mixed_pct": 0.20161768626789495,
          "instit_pct": 0.023748374423906714,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.2702861291551962,
          "mixed_qty_pct": 0.4844578151646962,
          "instit_qty_pct": 0.24525605568010764,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.270168146712664,
          "mixed_notional_pct": 0.4847299910564366,
          "instit_notional_pct": 0.24510186223089944,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 11641.53450574325,
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
          "ticker": "O39",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.6945879482242598,
          "mixed_pct": 0.24511123396305545,
          "instit_pct": 0.060300817812684676,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.17295504947907972,
          "mixed_qty_pct": 0.3933816604907972,
          "instit_qty_pct": 0.43366329003012305,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.17358488004414502,
          "mixed_notional_pct": 0.39394030064309754,
          "instit_notional_pct": 0.43247481931275744,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 18912.98708084717,
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
          "ticker": "U11",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.6331114906927681,
          "mixed_pct": 0.28621008190931146,
          "instit_pct": 0.08067842739792049,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.1504655601861504,
          "mixed_qty_pct": 0.3787650186349314,
          "instit_qty_pct": 0.4707694211789182,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.15016909446556106,
          "mixed_notional_pct": 0.3778882790931961,
          "instit_notional_pct": 0.4719426264412428,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 23209.091765834342,
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
          "ticker": "D05",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.552435318888222,
          "mixed_pct": 0.3145263871567679,
          "instit_pct": 0.13303829395501013,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.11417439217283178,
          "mixed_qty_pct": 0.2893653619236994,
          "instit_qty_pct": 0.5964602459034688,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.11409169368478181,
          "mixed_notional_pct": 0.2891750504628551,
          "instit_notional_pct": 0.5967332558523631,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 35486.18578772715,
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
            "ticker": "K6S",
            "currency": "USD",
            "is_target": true,
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
            "avg_trade_size": 2682.5,
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
            "ticker": "T55",
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
            "avg_trade_size": 1630.6666666666667,
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
            "ticker": "G07",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9166666666666666,
            "mixed_pct": 0.08333333333333333,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5282051282051282,
            "mixed_qty_pct": 0.4717948717948718,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5276699396142809,
            "mixed_notional_pct": 0.4723300603857191,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 6337.729166666667,
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
            "ticker": "O39",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.7223257547521431,
            "mixed_pct": 0.22586656727543794,
            "instit_pct": 0.05180767797241893,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.21954713493530498,
            "mixed_qty_pct": 0.39671903881700554,
            "instit_qty_pct": 0.3837338262476895,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.2195369215678899,
            "mixed_notional_pct": 0.3967404827971332,
            "instit_notional_pct": 0.3837225956349769,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 17518.85799478196,
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
            "ticker": "S68",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.6937685459940652,
            "mixed_pct": 0.2587537091988131,
            "instit_pct": 0.04747774480712166,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.18553028226911483,
            "mixed_qty_pct": 0.5010374662334103,
            "instit_qty_pct": 0.31343225149747483,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.1857394331376694,
            "mixed_notional_pct": 0.5009971566610193,
            "instit_notional_pct": 0.31326341020131127,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 15978.518397626112,
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
            "ticker": "U11",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.6465116279069767,
            "mixed_pct": 0.2943521594684385,
            "instit_pct": 0.05913621262458472,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.17730676481787028,
            "mixed_qty_pct": 0.4707450184033507,
            "instit_qty_pct": 0.351948216778779,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.1773499928618184,
            "mixed_notional_pct": 0.47079900444239803,
            "instit_notional_pct": 0.35185100269578357,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 18910.05249169435,
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
            "ticker": "D05",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.5591453882230328,
            "mixed_pct": 0.29233976029181863,
            "instit_pct": 0.1485148514851485,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.11699979394189161,
            "mixed_qty_pct": 0.25378116628889347,
            "instit_qty_pct": 0.6292190397692149,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.1170372627224454,
            "mixed_notional_pct": 0.2538324568736508,
            "instit_notional_pct": 0.6291302804039037,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 36914.72068785826,
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
            "ticker": "K6S",
            "currency": "USD",
            "is_target": true,
            "retail_pct": 0.9,
            "mixed_pct": 0.1,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5454545454545454,
            "mixed_qty_pct": 0.45454545454545453,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5548050353085662,
            "mixed_notional_pct": 0.4451949646914338,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3257.0,
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
            "ticker": "T55",
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
            "avg_trade_size": 571.8546666666667,
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
            "ticker": "8A1",
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
            "avg_trade_size": 560.1999999999999,
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
            "ticker": "CJN",
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
            "avg_trade_size": 3610.6666666666665,
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
            "ticker": "G07",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.857024106400665,
            "mixed_pct": 0.1313383208645054,
            "instit_pct": 0.011637572734829594,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.4149810366624526,
            "mixed_qty_pct": 0.3919089759797724,
            "instit_qty_pct": 0.19310998735777496,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.41500609657569315,
            "mixed_notional_pct": 0.3918577535171087,
            "instit_notional_pct": 0.19313614990719813,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 8292.678304239402,
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
            "ticker": "S68",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.7857357407469212,
            "mixed_pct": 0.19327170176551078,
            "instit_pct": 0.020992557487568002,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.29033162839215537,
            "mixed_qty_pct": 0.4915241417779921,
            "instit_qty_pct": 0.21814422982985254,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.29104136630535304,
            "mixed_notional_pct": 0.4916264553773093,
            "instit_notional_pct": 0.21733217831733767,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 11164.784300637453,
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
            "ticker": "O39",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.7115354546165272,
            "mixed_pct": 0.22828551325150495,
            "instit_pct": 0.06017903213196779,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.18593326260057194,
            "mixed_qty_pct": 0.36970528914036604,
            "instit_qty_pct": 0.444361448259062,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.18575719627038467,
            "mixed_notional_pct": 0.36933188227611585,
            "instit_notional_pct": 0.4449109214534994,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 18891.98454968337,
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
            "ticker": "U11",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.6978305443481712,
            "mixed_pct": 0.24090548316687613,
            "instit_pct": 0.06126397248495271,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.19565306904601273,
            "mixed_qty_pct": 0.38222205329456443,
            "instit_qty_pct": 0.42212487765942286,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.19599112292753856,
            "mixed_notional_pct": 0.38193313762750397,
            "instit_notional_pct": 0.42207573944495747,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 19252.71340697136,
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
            "ticker": "D05",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.5828190083755095,
            "mixed_pct": 0.2878935817619922,
            "instit_pct": 0.12928740986249831,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.12409022503454285,
            "mixed_qty_pct": 0.2643957862127839,
            "instit_qty_pct": 0.6115139887526733,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.12372149151988036,
            "mixed_notional_pct": 0.2643295302825135,
            "instit_notional_pct": 0.6119489781976062,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 35187.035114435435,
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
            "ticker": "K6S",
            "currency": "USD",
            "is_target": true,
            "retail_pct": 0.8333333333333334,
            "mixed_pct": 0.16666666666666666,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3333333333333333,
            "mixed_qty_pct": 0.6666666666666666,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.34298591149437524,
            "mixed_notional_pct": 0.6570140885056247,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4696.5,
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
            "ticker": "8A1",
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
            "avg_trade_size": 363.3684210526315,
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
            "ticker": "CJN",
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
            "avg_trade_size": 1684.857142857143,
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
            "ticker": "T55",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9714285714285714,
            "mixed_pct": 0.02857142857142857,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.7065347111046427,
            "mixed_qty_pct": 0.2934652888953573,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.715133971232399,
            "mixed_notional_pct": 0.2848660287676009,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1859.9748051948054,
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
            "ticker": "G07",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8168649767201241,
            "mixed_pct": 0.16968442834971548,
            "instit_pct": 0.013450594930160372,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.38743136058572303,
            "mixed_qty_pct": 0.436241610738255,
            "instit_qty_pct": 0.17632702867602196,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.38724473021443623,
            "mixed_notional_pct": 0.43640343870076487,
            "instit_notional_pct": 0.17635183108479893,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 9390.570098292808,
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
            "ticker": "S68",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.7605963466137485,
            "mixed_pct": 0.21294458861242557,
            "instit_pct": 0.02645906477382588,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.25627386112339673,
            "mixed_qty_pct": 0.48398690844758957,
            "instit_qty_pct": 0.2597392304290137,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.25758417276564777,
            "mixed_notional_pct": 0.48442856591773853,
            "instit_notional_pct": 0.2579872613166137,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 12414.504517006426,
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
            "ticker": "O39",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.697521028766423,
            "mixed_pct": 0.24467061018276937,
            "instit_pct": 0.057808361050807625,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.1791073783471208,
            "mixed_qty_pct": 0.39960540979573816,
            "instit_qty_pct": 0.4212872118571411,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.17914019912667273,
            "mixed_notional_pct": 0.3988027595035885,
            "instit_notional_pct": 0.42205704136973876,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 18757.82893837094,
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
            "ticker": "U11",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.6423980073033301,
            "mixed_pct": 0.27993518899180186,
            "instit_pct": 0.07766680370486809,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.15466620405875645,
            "mixed_qty_pct": 0.37909331466155705,
            "instit_qty_pct": 0.46624048127968654,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.15438120116101292,
            "mixed_notional_pct": 0.37813207220584477,
            "instit_notional_pct": 0.4674867266331423,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 22858.323895431793,
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
            "ticker": "D05",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.5429798196650923,
            "mixed_pct": 0.3227538643194504,
            "instit_pct": 0.13426631601545727,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.11216535866727641,
            "mixed_qty_pct": 0.2959531666071634,
            "instit_qty_pct": 0.5918814747255602,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.11220325784674898,
            "mixed_notional_pct": 0.29545613378317276,
            "instit_notional_pct": 0.5923406083700783,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 35767.163165521684,
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
        "6m": [
          {
            "ticker": "K6S",
            "currency": "USD",
            "is_target": true,
            "retail_pct": 0.8260869565217391,
            "mixed_pct": 0.17391304347826086,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.43023255813953487,
            "mixed_qty_pct": 0.5697674418604651,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.4301426185275601,
            "mixed_notional_pct": 0.5698573814724399,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5075.869565217391,
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
            "ticker": "8A1",
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
            "avg_trade_size": 273.0948275862069,
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
            "ticker": "CJN",
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
            "avg_trade_size": 1515.5,
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
            "ticker": "T55",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9766454352441614,
            "mixed_pct": 0.02335456475583864,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.7490479153702552,
            "mixed_qty_pct": 0.2509520846297449,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.7625725295716733,
            "mixed_notional_pct": 0.23742747042832657,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1824.1333333333334,
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
            "ticker": "G07",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8050074614491792,
            "mixed_pct": 0.1804012601558614,
            "instit_pct": 0.014591278394959377,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.36209118074403046,
            "mixed_qty_pct": 0.45812429750253586,
            "instit_qty_pct": 0.17978452175343368,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.362656396930514,
            "mixed_notional_pct": 0.45762495880502113,
            "instit_notional_pct": 0.17971864426446488,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 9442.660918587299,
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
            "ticker": "S68",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.7746339393081983,
            "mixed_pct": 0.20161768626789495,
            "instit_pct": 0.023748374423906714,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2702861291551962,
            "mixed_qty_pct": 0.4844578151646962,
            "instit_qty_pct": 0.24525605568010764,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.270168146712664,
            "mixed_notional_pct": 0.4847299910564366,
            "instit_notional_pct": 0.24510186223089944,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 11641.53450574325,
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
            "ticker": "O39",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.6945879482242598,
            "mixed_pct": 0.24511123396305545,
            "instit_pct": 0.060300817812684676,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.17295504947907972,
            "mixed_qty_pct": 0.3933816604907972,
            "instit_qty_pct": 0.43366329003012305,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.17358488004414502,
            "mixed_notional_pct": 0.39394030064309754,
            "instit_notional_pct": 0.43247481931275744,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 18912.98708084717,
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
            "ticker": "U11",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.6331114906927681,
            "mixed_pct": 0.28621008190931146,
            "instit_pct": 0.08067842739792049,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.1504655601861504,
            "mixed_qty_pct": 0.3787650186349314,
            "instit_qty_pct": 0.4707694211789182,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.15016909446556106,
            "mixed_notional_pct": 0.3778882790931961,
            "instit_notional_pct": 0.4719426264412428,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 23209.091765834342,
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
            "ticker": "D05",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.552435318888222,
            "mixed_pct": 0.3145263871567679,
            "instit_pct": 0.13303829395501013,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.11417439217283178,
            "mixed_qty_pct": 0.2893653619236994,
            "instit_qty_pct": 0.5964602459034688,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.11409169368478181,
            "mixed_notional_pct": 0.2891750504628551,
            "instit_notional_pct": 0.5967332558523631,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 35486.18578772715,
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
      "total_trades": 15,
      "price_moving_trades": 8,
      "pct_price_moving": 53.333333333333336,
      "all_movers": {
        "count": 8,
        "avg_size": 3173.625,
        "median_size": 1435.0,
        "retail_count": 7,
        "mixed_count": 1,
        "institutional_count": 0,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 87.5,
        "mixed_pct": 12.5,
        "instit_pct": 0.0,
        "unclear_pct": null
      },
      "positive_movers": {
        "count": 6,
        "avg_size": 3784.8333333333335,
        "median_size": 1465.0,
        "retail_count": 5,
        "mixed_count": 1,
        "institutional_count": 0,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 83.33333333333334,
        "mixed_pct": 16.666666666666664,
        "instit_pct": 0.0,
        "unclear_pct": null
      },
      "negative_movers": {
        "count": 2,
        "avg_size": 1340.0,
        "median_size": 1340.0,
        "retail_count": 2,
        "mixed_count": 0,
        "institutional_count": 0,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 100.0,
        "mixed_pct": 0.0,
        "instit_pct": 0.0,
        "unclear_pct": null
      }
    },
    "short_selling": {
      "data_available": true,
      "security_name": "DFIRG USD",
      "mapping": {
        "ticker_to_security": "DFIRG USD",
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
            "avg_short_ratio": 1465.9024659863946,
            "max_short_ratio": 21462.6,
            "interpretation": "High short interest"
          }
        },
        "3M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 1195.7997349330358,
            "max_short_ratio": 43473.0,
            "interpretation": "High short interest"
          }
        },
        "6M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 1540.383766941392,
            "max_short_ratio": 43473.0,
            "interpretation": "High short interest"
          }
        }
      },
      "correlation": {
        "valid": true,
        "correlation": -0.3052970463913395,
        "interpretation": "Strong negative - high shorts coincide with price drops"
      },
      "peaks": [
        {
          "date": "2026-03-09",
          "short_ratio": 43473.0,
          "return_pct": -10.511363636363635
        },
        {
          "date": "2026-01-15",
          "short_ratio": 42678.7,
          "return_pct": 2.2827687776141525
        },
        {
          "date": "2025-12-10",
          "short_ratio": 36864.85,
          "return_pct": 2.105263157894721
        },
        {
          "date": "2025-12-09",
          "short_ratio": 22633.3,
          "return_pct": 2.3076923076923217
        },
        {
          "date": "2026-04-16",
          "short_ratio": 21462.6,
          "return_pct": 4.137931034482767
        }
      ],
      "short_interest_change": {
        "valid": true,
        "monthly_data": [
          {
            "month": "2026-05",
            "avg_short_ratio": 1972.4571428571428
          },
          {
            "month": "2026-04",
            "avg_short_ratio": 1278.0494047619047
          },
          {
            "month": "2026-03",
            "avg_short_ratio": 1976.0454545454545
          },
          {
            "month": "2026-02",
            "avg_short_ratio": 126.34618055555555
          },
          {
            "month": "2026-01",
            "avg_short_ratio": 2032.3190476190475
          },
          {
            "month": "2025-12",
            "avg_short_ratio": 2704.4613636363633
          },
          {
            "month": "2025-11",
            "avg_short_ratio": 1077.0928333333334
          },
          {
            "month": "2025-10",
            "avg_short_ratio": 2319.8012727272726
          },
          {
            "month": "2025-09",
            "avg_short_ratio": 3251.472195322793
          },
          {
            "month": "2025-08",
            "avg_short_ratio": 0.0
          },
          {
            "month": "2025-07",
            "avg_short_ratio": 1216.513043478261
          },
          {
            "month": "2025-06",
            "avg_short_ratio": 711.2285714285714
          }
        ],
        "mom_change": [
          {
            "month": "2026-05",
            "avg_short_ratio": 1972.4571428571428,
            "change_pct": null
          },
          {
            "month": "2026-04",
            "avg_short_ratio": 1278.0494047619047,
            "change_pct": -35.20521298066709
          },
          {
            "month": "2026-03",
            "avg_short_ratio": 1976.0454545454545,
            "change_pct": 54.61416805820457
          },
          {
            "month": "2026-02",
            "avg_short_ratio": 126.34618055555555,
            "change_pct": -93.60610960315087
          },
          {
            "month": "2026-01",
            "avg_short_ratio": 2032.3190476190475,
            "change_pct": 1508.5322395047936
          },
          {
            "month": "2025-12",
            "avg_short_ratio": 2704.4613636363633,
            "change_pct": 33.07267708801728
          },
          {
            "month": "2025-11",
            "avg_short_ratio": 1077.0928333333334,
            "change_pct": -60.1734804639584
          },
          {
            "month": "2025-10",
            "avg_short_ratio": 2319.8012727272726,
            "change_pct": 115.3761682312997
          },
          {
            "month": "2025-09",
            "avg_short_ratio": 3251.472195322793,
            "change_pct": 40.16166960285362
          },
          {
            "month": "2025-08",
            "avg_short_ratio": 0.0,
            "change_pct": -100.0
          },
          {
            "month": "2025-07",
            "avg_short_ratio": 1216.513043478261,
            "change_pct": null
          },
          {
            "month": "2025-06",
            "avg_short_ratio": 711.2285714285714,
            "change_pct": -41.535475082534035
          }
        ],
        "interpretation": "Shorts building significantly (+54% MoM) | YoY: +177% ⬆️"
      },
      "short_series": {
        "valid": true,
        "rows": [
          {
            "date": "2026-05-05",
            "short_ratio": 3944.9142857142856,
            "short_vol": 2761440,
            "total_vol": 700,
            "close": 15.8,
            "return": 0.04635761589403975
          },
          {
            "date": "2026-05-04",
            "short_ratio": 0.0,
            "short_vol": 3656226,
            "total_vol": 0,
            "close": 15.1,
            "return": 0.0
          },
          {
            "date": "2026-04-30",
            "short_ratio": 0.0,
            "short_vol": 9395511,
            "total_vol": 0,
            "close": 15.1,
            "return": 0.0
          },
          {
            "date": "2026-04-29",
            "short_ratio": 0.0,
            "short_vol": 3148318,
            "total_vol": 0,
            "close": 15.1,
            "return": 0.0
          },
          {
            "date": "2026-04-28",
            "short_ratio": 0.0,
            "short_vol": 3484680,
            "total_vol": 0,
            "close": 15.1,
            "return": 0.0
          },
          {
            "date": "2026-04-27",
            "short_ratio": 0.0,
            "short_vol": 3405300,
            "total_vol": 0,
            "close": 15.1,
            "return": 0.0
          },
          {
            "date": "2026-04-24",
            "short_ratio": 0.0,
            "short_vol": 4740215,
            "total_vol": 0,
            "close": 15.1,
            "return": 0.0
          },
          {
            "date": "2026-04-23",
            "short_ratio": 0.0,
            "short_vol": 3129900,
            "total_vol": 0,
            "close": 15.1,
            "return": 0.0
          },
          {
            "date": "2026-04-22",
            "short_ratio": 0.0,
            "short_vol": 3119475,
            "total_vol": 0,
            "close": 15.1,
            "return": 0.0
          },
          {
            "date": "2026-04-21",
            "short_ratio": 0.0,
            "short_vol": 2494570,
            "total_vol": 0,
            "close": 15.1,
            "return": 0.0
          },
          {
            "date": "2026-04-20",
            "short_ratio": 0.0,
            "short_vol": 2583500,
            "total_vol": 0,
            "close": 15.1,
            "return": 0.0
          },
          {
            "date": "2026-04-17",
            "short_ratio": 0.0,
            "short_vol": 2644270,
            "total_vol": 0,
            "close": 15.1,
            "return": 0.0
          },
          {
            "date": "2026-04-16",
            "short_ratio": 21462.6,
            "short_vol": 6438780,
            "total_vol": 300,
            "close": 15.1,
            "return": 0.04137931034482767
          },
          {
            "date": "2026-04-15",
            "short_ratio": 5376.4375,
            "short_vol": 6451725,
            "total_vol": 1200,
            "close": 14.5,
            "return": 0.15079365079365092
          },
          {
            "date": "2026-04-14",
            "short_ratio": 0.0,
            "short_vol": 3235200,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-04-13",
            "short_ratio": 0.0,
            "short_vol": 3672390,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-04-10",
            "short_ratio": 0.0,
            "short_vol": 3834430,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-04-09",
            "short_ratio": 0.0,
            "short_vol": 3267230,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-04-08",
            "short_ratio": 0.0,
            "short_vol": 5588480,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-04-07",
            "short_ratio": 0.0,
            "short_vol": 3341010,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-04-06",
            "short_ratio": 0.0,
            "short_vol": 992270,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-04-02",
            "short_ratio": 0.0,
            "short_vol": 1917430,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-04-01",
            "short_ratio": 0.0,
            "short_vol": 3134841,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-03-31",
            "short_ratio": 0.0,
            "short_vol": 4494123,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-03-30",
            "short_ratio": 0.0,
            "short_vol": 5681500,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-03-27",
            "short_ratio": 0.0,
            "short_vol": 3440380,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-03-26",
            "short_ratio": 0.0,
            "short_vol": 3103890,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-03-25",
            "short_ratio": 0.0,
            "short_vol": 3866110,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-03-24",
            "short_ratio": 0.0,
            "short_vol": 2889733,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-03-23",
            "short_ratio": 0.0,
            "short_vol": 8165870,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-03-20",
            "short_ratio": 0.0,
            "short_vol": 13891210,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-03-19",
            "short_ratio": 0.0,
            "short_vol": 3784600,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-03-18",
            "short_ratio": 0.0,
            "short_vol": 3184200,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-03-17",
            "short_ratio": 0.0,
            "short_vol": 3332778,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-03-16",
            "short_ratio": 0.0,
            "short_vol": 5395650,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-03-13",
            "short_ratio": 0.0,
            "short_vol": 4995981,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-03-12",
            "short_ratio": 0.0,
            "short_vol": 3656715,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-03-11",
            "short_ratio": 0.0,
            "short_vol": 3933992,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-03-10",
            "short_ratio": 0.0,
            "short_vol": 2341126,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-03-09",
            "short_ratio": 43473.0,
            "short_vol": 4347300,
            "total_vol": 100,
            "close": 12.6,
            "return": -0.10511363636363635
          },
          {
            "date": "2026-03-06",
            "short_ratio": 0.0,
            "short_vol": 2942537,
            "total_vol": 0,
            "close": 14.08,
            "return": 0.0
          },
          {
            "date": "2026-03-05",
            "short_ratio": 0.0,
            "short_vol": 3601521,
            "total_vol": 0,
            "close": 14.08,
            "return": 0.0
          },
          {
            "date": "2026-03-04",
            "short_ratio": 0.0,
            "short_vol": 9460380,
            "total_vol": 0,
            "close": 14.08,
            "return": 0.0
          },
          {
            "date": "2026-03-03",
            "short_ratio": 0.0,
            "short_vol": 22389959,
            "total_vol": 0,
            "close": 14.08,
            "return": 0.0
          },
          {
            "date": "2026-03-02",
            "short_ratio": 0.0,
            "short_vol": 5367242,
            "total_vol": 0,
            "close": 14.08,
            "return": 0.0
          },
          {
            "date": "2026-02-27",
            "short_ratio": 0.0,
            "short_vol": 8799670,
            "total_vol": 0,
            "close": 14.08,
            "return": 0.0
          },
          {
            "date": "2026-02-26",
            "short_ratio": 0.0,
            "short_vol": 4775511,
            "total_vol": 0,
            "close": 14.08,
            "return": 0.0
          },
          {
            "date": "2026-02-25",
            "short_ratio": 0.0,
            "short_vol": 2205520,
            "total_vol": 0,
            "close": 14.08,
            "return": 0.0
          },
          {
            "date": "2026-02-24",
            "short_ratio": 0.0,
            "short_vol": 4581433,
            "total_vol": 0,
            "close": 14.08,
            "return": 0.0
          },
          {
            "date": "2026-02-23",
            "short_ratio": 0.0,
            "short_vol": 3486730,
            "total_vol": 0,
            "close": 14.08,
            "return": 0.0
          },
          {
            "date": "2026-02-20",
            "short_ratio": 0.0,
            "short_vol": 3996994,
            "total_vol": 0,
            "close": 14.08,
            "return": 0.0
          },
          {
            "date": "2026-02-19",
            "short_ratio": 0.0,
            "short_vol": 4006166,
            "total_vol": 0,
            "close": 14.08,
            "return": 0.0
          },
          {
            "date": "2026-02-16",
            "short_ratio": 0.0,
            "short_vol": 1758400,
            "total_vol": 0,
            "close": 14.08,
            "return": 0.0
          },
          {
            "date": "2026-02-13",
            "short_ratio": 2274.23125,
            "short_vol": 3638770,
            "total_vol": 1600,
            "close": 14.08,
            "return": 0.01367890568754504
          },
          {
            "date": "2026-02-12",
            "short_ratio": 0.0,
            "short_vol": 4387830,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-02-11",
            "short_ratio": 0.0,
            "short_vol": 5538420,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-02-10",
            "short_ratio": 0.0,
            "short_vol": 2931230,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-02-09",
            "short_ratio": 0.0,
            "short_vol": 4071130,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-02-06",
            "short_ratio": 0.0,
            "short_vol": 3029405,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-02-05",
            "short_ratio": 0.0,
            "short_vol": 3878880,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-02-04",
            "short_ratio": 0.0,
            "short_vol": 6880030,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-02-03",
            "short_ratio": 0.0,
            "short_vol": 3265170,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-02-02",
            "short_ratio": 0.0,
            "short_vol": 5424883,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-01-30",
            "short_ratio": 0.0,
            "short_vol": 11091750,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-01-29",
            "short_ratio": 0.0,
            "short_vol": 9093500,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-01-28",
            "short_ratio": 0.0,
            "short_vol": 3203280,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-01-27",
            "short_ratio": 0.0,
            "short_vol": 8163569,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-01-26",
            "short_ratio": 0.0,
            "short_vol": 4918620,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-01-23",
            "short_ratio": 0.0,
            "short_vol": 5160130,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-01-22",
            "short_ratio": 0.0,
            "short_vol": 6234206,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-01-21",
            "short_ratio": 0.0,
            "short_vol": 3726930,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-01-20",
            "short_ratio": 0.0,
            "short_vol": 6193270,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-01-19",
            "short_ratio": 0.0,
            "short_vol": 2111120,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-01-16",
            "short_ratio": 0.0,
            "short_vol": 2875800,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-01-15",
            "short_ratio": 42678.7,
            "short_vol": 4267870,
            "total_vol": 100,
            "close": 13.89,
            "return": 0.022827687776141525
          },
          {
            "date": "2026-01-14",
            "short_ratio": 0.0,
            "short_vol": 2999360,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2026-01-13",
            "short_ratio": 0.0,
            "short_vol": 3832240,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2026-01-12",
            "short_ratio": 0.0,
            "short_vol": 3552540,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2026-01-09",
            "short_ratio": 0.0,
            "short_vol": 2416690,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2026-01-08",
            "short_ratio": 0.0,
            "short_vol": 3128896,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2026-01-07",
            "short_ratio": 0.0,
            "short_vol": 2909530,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2026-01-06",
            "short_ratio": 0.0,
            "short_vol": 6001121,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2026-01-05",
            "short_ratio": 0.0,
            "short_vol": 9875140,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2026-01-02",
            "short_ratio": 0.0,
            "short_vol": 1214290,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2025-12-31",
            "short_ratio": 0.0,
            "short_vol": 1335330,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2025-12-30",
            "short_ratio": 0.0,
            "short_vol": 2557057,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2025-12-29",
            "short_ratio": 0.0,
            "short_vol": 1221350,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2025-12-26",
            "short_ratio": 0.0,
            "short_vol": 1429690,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2025-12-24",
            "short_ratio": 0.0,
            "short_vol": 1158306,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2025-12-23",
            "short_ratio": 0.0,
            "short_vol": 2991350,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2025-12-22",
            "short_ratio": 0.0,
            "short_vol": 2360970,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2025-12-19",
            "short_ratio": 0.0,
            "short_vol": 12874230,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2025-12-18",
            "short_ratio": 0.0,
            "short_vol": 2633470,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2025-12-17",
            "short_ratio": 0.0,
            "short_vol": 2152230,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2025-12-16",
            "short_ratio": 0.0,
            "short_vol": 2543970,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2025-12-15",
            "short_ratio": 0.0,
            "short_vol": 2183850,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2025-12-12",
            "short_ratio": 0.0,
            "short_vol": 3183610,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2025-12-11",
            "short_ratio": 0.0,
            "short_vol": 2363580,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2025-12-10",
            "short_ratio": 36864.85,
            "short_vol": 3686485,
            "total_vol": 100,
            "close": 13.58,
            "return": 0.021052631578947212
          },
          {
            "date": "2025-12-09",
            "short_ratio": 22633.3,
            "short_vol": 2263330,
            "total_vol": 100,
            "close": 13.3,
            "return": 0.023076923076923217
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "K6S",
          "avg_short_ratio": 1195.7997349330358,
          "max_short_ratio": 43473.0,
          "is_target": true
        },
        {
          "ticker": "G07",
          "avg_short_ratio": 0.0006115971294325253,
          "max_short_ratio": 0.12048192771084337,
          "is_target": false
        },
        {
          "ticker": "D05",
          "avg_short_ratio": 0.05858999453444697,
          "max_short_ratio": 0.4500000874898293,
          "is_target": false
        },
        {
          "ticker": "O39",
          "avg_short_ratio": 0.07775467313949387,
          "max_short_ratio": 0.6282301538337058,
          "is_target": false
        },
        {
          "ticker": "S68",
          "avg_short_ratio": 0.07973462749666435,
          "max_short_ratio": 0.4301208053691275,
          "is_target": false
        },
        {
          "ticker": "U11",
          "avg_short_ratio": 0.09005939460633937,
          "max_short_ratio": 0.5729590452942772,
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
          "opening": 0.0,
          "continuous": 1.0,
          "closing": 0.0,
          "auctions": 0.0,
          "other": 0.0
        },
        "1M": {
          "opening": 0.0,
          "continuous": 1.0,
          "closing": 0.0,
          "auctions": 0.0,
          "other": 0.0
        },
        "3M": {
          "opening": 0.0,
          "continuous": 1.0,
          "closing": 0.0,
          "auctions": 0.0,
          "other": 0.0
        },
        "6M": {
          "opening": 0.0,
          "continuous": 1.0,
          "closing": 0.0,
          "auctions": 0.0,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.7568166874976658,
        "1M": 0.673308753110108,
        "3M": 0.8039852518660646,
        "6M": 0.848293791189589
      },
      "profile_buckets": [
        {
          "time": "09:00",
          "avg_share": 0.1715
        },
        {
          "time": "09:30",
          "avg_share": 0.1144
        },
        {
          "time": "10:00",
          "avg_share": 0.0747
        },
        {
          "time": "10:30",
          "avg_share": 0.1715
        },
        {
          "time": "11:30",
          "avg_share": 0.1231
        },
        {
          "time": "14:30",
          "avg_share": 0.1432
        },
        {
          "time": "15:30",
          "avg_share": 0.0229
        },
        {
          "time": "16:00",
          "avg_share": 0.0979
        },
        {
          "time": "16:30",
          "avg_share": 0.0808
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "K6S",
          "auctions_pct": 0.0,
          "hhi": 0.8373035679951499,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400",
            "you": true
          }
        },
        {
          "ticker": "G07",
          "auctions_pct": 4.016062898903686,
          "hhi": 0.18389543508556222,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "S68",
          "auctions_pct": 30.47296523750493,
          "hhi": 0.13897353877794505,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "U11",
          "auctions_pct": 27.588090526795483,
          "hhi": 0.13148801516654765,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "O39",
          "auctions_pct": 30.2415447336392,
          "hhi": 0.1409094600498672,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "D05",
          "auctions_pct": 29.26028581526239,
          "hhi": 0.12210668198325356,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "8A1",
          "auctions_pct": 19.73207207984106,
          "hhi": 0.8421258087118578,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "CJN",
          "auctions_pct": 0.7287316793580612,
          "hhi": 0.8650668762327416,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "T55",
          "auctions_pct": 2.2150313582377987,
          "hhi": 0.7651139870068935,
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
