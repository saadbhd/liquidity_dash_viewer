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
      "ticker": "1299",
      "name": "AIA",
      "marketCap": 905140444214.7999,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    },
    {
      "ticker": "2318",
      "name": "PING AN",
      "marketCap": 488561045427.19995,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    },
    {
      "ticker": "2628",
      "name": "CHINA LIFE",
      "marketCap": 232611130500.0,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    },
    {
      "ticker": "2328",
      "name": "PICC P&C",
      "marketCap": 102661492235.04001,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    },
    {
      "ticker": "1336",
      "name": "NCI",
      "marketCap": 54755979417.0,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    },
    {
      "ticker": "2601",
      "name": "CPIC",
      "marketCap": 98356632000.0,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    },
    {
      "ticker": "1339",
      "name": "PICC GROUP",
      "marketCap": 48605123380.0,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    },
    {
      "ticker": "966",
      "name": "CHINA TAIPING",
      "marketCap": 85034478609.08,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    },
    {
      "ticker": "6060",
      "name": "ZA ONLINE",
      "marketCap": 19977413638.0,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XHKG",
    "currency": "HKD",
    "ticker": "1299",
    "company": "AIA",
    "asof_date": "2026-05-08",
    "industry": "Financials - Insurance",
    "sector": "Insurance",
    "market_cap_display": "905.1B",
    "market_cap_category": "large",
    "universe_total": 2569,
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
          "score_pca": 97.11950175165434,
          "score_pca_percentile": 97.11950175165434,
          "rank_pca": 75,
          "total": 2569,
          "adv_notional_sgd": 2802960983.0,
          "adv_volume_shares": 32366755.0,
          "free_float_shares": 9729775402.0,
          "turnover_ratio": 0.0033265675375555807,
          "votes": 18031.0,
          "trades": 18031.0,
          "spread_pct": 0.0006730043907931626,
          "spread_ticks": 1.167949233331419,
          "amihud": 1.020473615542799e-11,
          "volatility": 0.38739897023790665
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5413864100280537,
          "loadings": {
            "log_adv": 0.5392779552043565,
            "log_trades": 0.5032848924595267,
            "log_turnover": 0.49432062072535216,
            "neg_spread": 0.40399542924313514,
            "neg_amihud": 0.09043308650141862,
            "neg_vol": -0.20035038805751187
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
          "peer_median_adv": 397784670.025,
          "peer_median_score_pca": 93.71350720124562,
          "peer_median_trades": 9336.5,
          "peer_median_volatility": 0.25060382130852626,
          "peer_median_spread_pct": 0.0013744785901841643,
          "peer_median_spread_ticks": 1.1646581822277284,
          "peer_median_amihud": 9.892408394890003e-12,
          "peer_median_turnover_ratio": 0.006241204148200239,
          "target_vs_peer": {
            "score_pca_delta": 3.41,
            "adv_delta_pct": 604.6,
            "trades_delta_pct": 93.12,
            "volatility_delta_pct": -54.59,
            "spread_pct_delta_pct": 51.04,
            "spread_ticks_delta_pct": 0.28,
            "amihud_delta_pct": -3.16,
            "turnover_ratio_delta_pct": -46.7
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1299",
            "score_pca": 97.11950175165434,
            "rank_pca": 75,
            "adv": 2802960983.0,
            "trades": 18031.0,
            "volatility": 0.38739897023790665,
            "spread_pct": 0.0006730043907931626,
            "spread_ticks": 1.167949233331419,
            "amihud": 1.020473615542799e-11,
            "turnover_ratio": 0.0033265675375555807,
            "is_target": true
          },
          {
            "ticker": "2318",
            "score_pca": 96.88594783962631,
            "rank_pca": 81,
            "adv": 2157521417.6,
            "trades": 16521.0,
            "volatility": 0.25639384247012603,
            "spread_pct": 0.0008760232784056519,
            "spread_ticks": 1.147481243301179,
            "amihud": 2.809059512070959e-12,
            "turnover_ratio": 0.005803736285047117,
            "is_target": false
          },
          {
            "ticker": "2628",
            "score_pca": 97.50875827170104,
            "rank_pca": 65,
            "adv": 1800282531.1200001,
            "trades": 20928.0,
            "volatility": 0.32007389929477564,
            "spread_pct": 0.0009334286179918726,
            "spread_ticks": null,
            "amihud": 1.4251914516425191e-12,
            "turnover_ratio": 0.009662218295019155,
            "is_target": false
          },
          {
            "ticker": "2328",
            "score_pca": 95.67925262748152,
            "rank_pca": 112,
            "adv": 748450250.88,
            "trades": 10789.0,
            "volatility": 0.3083917476865184,
            "spread_pct": 0.0008367053008893278,
            "spread_ticks": null,
            "amihud": 8.985165754133512e-13,
            "turnover_ratio": 0.00829058129882776,
            "is_target": false
          },
          {
            "ticker": "1336",
            "score_pca": 91.47528221097704,
            "rank_pca": 220,
            "adv": 295222725.0,
            "trades": 5518.0,
            "volatility": 0.24481380014692652,
            "spread_pct": 0.0014786503310936264,
            "spread_ticks": 1.5567411083540115,
            "amihud": 2.253888956359027e-11,
            "turnover_ratio": 0.006075241134116927,
            "is_target": false
          },
          {
            "ticker": "2601",
            "score_pca": 93.46049046321527,
            "rank_pca": 169,
            "adv": 474550672.64,
            "trades": 8516.0,
            "volatility": 0.1991287191450356,
            "spread_pct": 0.0014863620726036245,
            "spread_ticks": null,
            "amihud": 5.929253016674736e-12,
            "turnover_ratio": 0.006407167162283551,
            "is_target": false
          },
          {
            "ticker": "1339",
            "score_pca": 93.96652393927599,
            "rank_pca": 156,
            "adv": 321018667.41,
            "trades": 10157.0,
            "volatility": 0.3284797408913801,
            "spread_pct": 0.0021024324356469374,
            "spread_ticks": 1.1646581822277284,
            "amihud": 6.858899764770291e-11,
            "turnover_ratio": 0.007454052596287663,
            "is_target": false
          },
          {
            "ticker": "966",
            "score_pca": 88.12767613857531,
            "rank_pca": 306,
            "adv": 121811262.3,
            "trades": 5458.0,
            "volatility": 0.20276420528090364,
            "spread_pct": 0.0013123909107404796,
            "spread_ticks": null,
            "amihud": 1.385556377310527e-11,
            "turnover_ratio": 0.003697230065128134,
            "is_target": false
          },
          {
            "ticker": "6060",
            "score_pca": 87.3491630984819,
            "rank_pca": 326,
            "adv": 88862618.0,
            "trades": 4485.0,
            "volatility": 0.21212870713462678,
            "spread_pct": 0.0014365662696278491,
            "spread_ticks": null,
            "amihud": 6.483397633443547e-11,
            "turnover_ratio": 0.005851086056444332,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Insurance",
          "sector_count": 21,
          "market_count": 2569,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4876480017863212,
              "median": 0.32320429287515406,
              "min": 0.0,
              "max": 9.109476872285487,
              "p5": 0.0,
              "p95": 1.4904005426940643,
              "count": 2569
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 75697918.65498105,
              "median": 281600.0,
              "min": 0.0,
              "max": 11879562840.0,
              "p5": 0.0,
              "p95": 296247221.9999998,
              "count": 2569
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.044342597570976014,
              "median": 0.02531645569620246,
              "min": 0.00045454417502872315,
              "max": 0.8647751876950764,
              "p5": 0.001402730027911123,
              "p95": 0.1477956704733715,
              "count": 2569
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006771212059842554,
              "median": 0.0012417520407736358,
              "min": 0.0,
              "max": 1.31841474794073,
              "p5": 0.0,
              "p95": 0.024378697168253857,
              "count": 2553
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.1036563944329287e-06,
              "median": 7.323731693234102e-09,
              "min": 0.0,
              "max": 0.0007258064516129035,
              "p5": 0.0,
              "p95": 5.461475445950189e-06,
              "count": 2243
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1302.8049824834566,
              "median": 26.0,
              "min": 0.0,
              "max": 72121.0,
              "p5": 0.0,
              "p95": 6881.999999999984,
              "count": 2569
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.23882449493347005,
              "median": 0.23736363583603803,
              "min": 0.0,
              "max": 0.5169273442310142,
              "p5": 0.0,
              "p95": 0.42694956142186685,
              "count": 21
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 424538229.12153083,
              "median": 18299940.0,
              "min": 0.0,
              "max": 2802960983.0,
              "p5": 17354.405719910785,
              "p95": 2157521417.6,
              "count": 21
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.012485336319727909,
              "median": 0.0021412274657624636,
              "min": 0.0006730043907931626,
              "max": 0.13475935828877003,
              "p5": 0.0008367053008893278,
              "p95": 0.033364012885411846,
              "count": 21
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0033166664763048274,
              "median": 0.0029051892072153914,
              "min": 0.0,
              "max": 0.009662218295019155,
              "p5": 2.055545906628935e-08,
              "p95": 0.00829058129882776,
              "count": 21
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 8.131928995255306e-08,
              "median": 2.834535186133318e-10,
              "min": 0.0,
              "max": 1.3078981463072907e-06,
              "p5": 8.535907466426837e-13,
              "p95": 1.8841314820113379e-07,
              "count": 20
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 5014.619047619048,
              "median": 1128.0,
              "min": 0.0,
              "max": 20928.0,
              "p5": 1.0,
              "p95": 18031.0,
              "count": 21
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 750965018.1187501,
              "median": 397784670.025,
              "min": 88862618.0,
              "max": 2157521417.6,
              "p5": 100394643.505,
              "p95": 2032487807.3319998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 10296.5,
              "median": 9336.5,
              "min": 4485.0,
              "max": 20928.0,
              "p5": 4825.55,
              "p95": 19385.55,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.2590218327562866,
              "median": 0.25060382130852626,
              "min": 0.1991287191450356,
              "max": 0.3284797408913801,
              "p5": 0.2004011392925894,
              "p95": 0.3255376963325685,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0013078199021249212,
              "median": 0.0013744785901841643,
              "min": 0.0008367053008893278,
              "max": 0.0021024324356469374,
              "p5": 0.0008504665930200412,
              "p95": 0.0018868078085817776,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.2896268446276398,
              "median": 1.1646581822277284,
              "min": 1.147481243301179,
              "max": 1.5567411083540115,
              "p5": 1.1491989371938338,
              "p95": 1.5175328157413832,
              "count": 3
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.2609930984329437e-11,
              "median": 9.892408394890003e-12,
              "min": 8.985165754133512e-13,
              "max": 6.858899764770291e-11,
              "p5": 1.08285278209356e-12,
              "p95": 6.72747401880593e-11,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00665516411164433,
              "median": 0.006241204148200239,
              "min": 0.003697230065128134,
              "max": 0.009662218295019155,
              "p5": 0.0044345072420997785,
              "p95": 0.009182145346352167,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": -0.028603477285474077,
            "market": 0.002106292729059822,
            "sector": -0.00576923076923086,
            "peers": 0.0016191211150906604,
            "vs_market": -0.0307097700145339,
            "vs_sector": -0.022834246516243217,
            "vs_peers": -0.030222598400564737
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 98.71545348384585,
          "score_pca_percentile": 98.71545348384585,
          "rank_pca": 34,
          "total": 2569,
          "adv_notional_sgd": 2019173119.0,
          "adv_volume_shares": 24181714.0,
          "free_float_shares": 9729775402.0,
          "turnover_ratio": 0.0024853311613985806,
          "votes": 15856.0,
          "trades": 15856.0,
          "spread_pct": 0.000654122492092104,
          "spread_ticks": 1.1288761111274093,
          "amihud": 6.97490101189958e-12,
          "volatility": 0.2766951701809652
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5569848722620764,
          "loadings": {
            "log_adv": 0.5315974116293171,
            "log_trades": 0.4892112486172703,
            "log_turnover": 0.4815305099919683,
            "neg_spread": 0.4565942762807833,
            "neg_amihud": 0.18093822137382237,
            "neg_vol": 0.07062535689058057
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
          "peer_median_adv": 375551627.9,
          "peer_median_score_pca": 95.15375632541844,
          "peer_median_trades": 7593.5,
          "peer_median_volatility": 0.3185282504090328,
          "peer_median_spread_pct": 0.0011529216480715297,
          "peer_median_spread_ticks": 1.2770961145194275,
          "peer_median_amihud": 2.5211814256052055e-11,
          "peer_median_turnover_ratio": 0.006178957981394248,
          "target_vs_peer": {
            "score_pca_delta": 3.56,
            "adv_delta_pct": 437.7,
            "trades_delta_pct": 108.81,
            "volatility_delta_pct": 13.13,
            "spread_pct_delta_pct": 43.26,
            "spread_ticks_delta_pct": -11.61,
            "amihud_delta_pct": 72.33,
            "turnover_ratio_delta_pct": -59.78
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1299",
            "score_pca": 98.71545348384585,
            "rank_pca": 34,
            "adv": 2019173119.0,
            "trades": 15856.0,
            "volatility": 0.2766951701809652,
            "spread_pct": 0.000654122492092104,
            "spread_ticks": 1.1288761111274093,
            "amihud": 6.97490101189958e-12,
            "turnover_ratio": 0.0024853311613985806,
            "is_target": true
          },
          {
            "ticker": "2318",
            "score_pca": 98.59867652783184,
            "rank_pca": 37,
            "adv": 1691795901.25,
            "trades": 12281.0,
            "volatility": 0.3060913134394748,
            "spread_pct": 0.0008643284014210691,
            "spread_ticks": 1.0797531992687386,
            "amihud": 4.952079555319346e-12,
            "turnover_ratio": 0.004753570122425039,
            "is_target": false
          },
          {
            "ticker": "2628",
            "score_pca": 99.37718956792526,
            "rank_pca": 17,
            "adv": 1334850237.6999998,
            "trades": 17977.0,
            "volatility": 0.3420750647642546,
            "spread_pct": 0.0009003443356077639,
            "spread_ticks": null,
            "amihud": 1.1584758416358526e-11,
            "turnover_ratio": 0.008375221307096541,
            "is_target": false
          },
          {
            "ticker": "2328",
            "score_pca": 95.17321915142078,
            "rank_pca": 125,
            "adv": 436015639.79999995,
            "trades": 5983.0,
            "volatility": 0.3004109819964836,
            "spread_pct": 0.0009033293437720628,
            "spread_ticks": null,
            "amihud": 1.937866571908566e-11,
            "turnover_ratio": 0.005068452957030528,
            "is_target": false
          },
          {
            "ticker": "1336",
            "score_pca": 97.85908913974309,
            "rank_pca": 56,
            "adv": 465270552.0,
            "trades": 10622.0,
            "volatility": 0.3309651873785908,
            "spread_pct": 0.0011742916478256656,
            "spread_ticks": 1.5800408632622385,
            "amihud": 2.2049313039041156e-11,
            "turnover_ratio": 0.010291788639576934,
            "is_target": false
          },
          {
            "ticker": "2601",
            "score_pca": 95.09536784741145,
            "rank_pca": 127,
            "adv": 315087616.0,
            "trades": 7543.0,
            "volatility": 0.2910076576953352,
            "spread_pct": 0.0012781774369827522,
            "spread_ticks": null,
            "amihud": 2.8374315473062955e-11,
            "turnover_ratio": 0.004452680721365283,
            "is_target": false
          },
          {
            "ticker": "1339",
            "score_pca": 95.13429349941612,
            "rank_pca": 126,
            "adv": 278571850.79999995,
            "trades": 7034.0,
            "volatility": 0.2816237187845411,
            "spread_pct": 0.0023537600154402132,
            "spread_ticks": 1.2770961145194275,
            "amihud": 4.748583784993531e-11,
            "turnover_ratio": 0.006527028548993405,
            "is_target": false
          },
          {
            "ticker": "966",
            "score_pca": 94.97859089139743,
            "rank_pca": 130,
            "adv": 194979652.98000002,
            "trades": 7644.0,
            "volatility": 0.43108911430031444,
            "spread_pct": 0.0013555117288079194,
            "spread_ticks": null,
            "amihud": 8.162300330564314e-11,
            "turnover_ratio": 0.006506829906344163,
            "is_target": false
          },
          {
            "ticker": "6060",
            "score_pca": 92.02024133904243,
            "rank_pca": 206,
            "adv": 89732246.0,
            "trades": 4795.0,
            "volatility": 0.438995308702197,
            "spread_pct": 0.0011315516483173939,
            "spread_ticks": null,
            "amihud": 1.7803108384813867e-10,
            "turnover_ratio": 0.005851086056444332,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Insurance",
          "sector_count": 21,
          "market_count": 2569,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6706737015282522,
              "median": 0.49755691746432784,
              "min": 0.0,
              "max": 28.011170680986556,
              "p5": 0.1610304251929099,
              "p95": 1.6730146247205702,
              "count": 2568
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 57381127.45486926,
              "median": 222870.0,
              "min": 0.0,
              "max": 11234837900.0,
              "p5": 0.0,
              "p95": 231896325.3599997,
              "count": 2569
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.044394587727395796,
              "median": 0.028387096774193616,
              "min": 0.0004644488055358157,
              "max": 0.5912209998910793,
              "p5": 0.0014121474359292342,
              "p95": 0.1428012847367685,
              "count": 2569
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004151176438585332,
              "median": 0.0008952543034088454,
              "min": 0.0,
              "max": 0.3058299844695711,
              "p5": 0.0,
              "p95": 0.01502672375571245,
              "count": 2553
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.2576398558487517e-06,
              "median": 4.5503875792620654e-08,
              "min": 0.0,
              "max": 0.0003728590250329387,
              "p5": 2.310946598684302e-11,
              "p95": 4.68218115633243e-06,
              "count": 2563
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1040.2277150642274,
              "median": 20.0,
              "min": 0.0,
              "max": 64083.0,
              "p5": 0.0,
              "p95": 5710.799999999996,
              "count": 2569
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.41657603723577835,
              "median": 0.3060913134394748,
              "min": 0.16583403566958593,
              "max": 2.3041679340548447,
              "p5": 0.17330062559965614,
              "p95": 0.5167840275510779,
              "count": 21
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 330978104.58524615,
              "median": 34779050.129999995,
              "min": 0.0,
              "max": 2019173119.0,
              "p5": 0.0,
              "p95": 1691795901.25,
              "count": 21
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.008642621086422235,
              "median": 0.0023537600154402132,
              "min": 0.000654122492092104,
              "max": 0.05241143832693134,
              "p5": 0.0008643284014210691,
              "p95": 0.040542570613062316,
              "count": 21
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00330767612965226,
              "median": 0.0031234999955498774,
              "min": 0.0,
              "max": 0.010291788639576934,
              "p5": 0.0,
              "p95": 0.008375221307096541,
              "count": 21
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.648343560109302e-08,
              "median": 3.8402038979300856e-10,
              "min": 4.952079555319346e-12,
              "max": 3.7054668719444715e-07,
              "p5": 6.97490101189958e-12,
              "p95": 1.470626904347672e-07,
              "count": 21
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 4556.761904761905,
              "median": 1543.0,
              "min": 0.0,
              "max": 17977.0,
              "p5": 0.0,
              "p95": 15856.0,
              "count": 21
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 600787962.06625,
              "median": 375551627.9,
              "min": 89732246.0,
              "max": 1691795901.25,
              "p5": 126568838.44300002,
              "p95": 1566864919.0074997,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 9234.875,
              "median": 7593.5,
              "min": 4795.0,
              "max": 17977.0,
              "p5": 5210.8,
              "p95": 15983.399999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3402822933826489,
              "median": 0.3185282504090328,
              "min": 0.2816237187845411,
              "max": 0.438995308702197,
              "p5": 0.28490809740331907,
              "p95": 0.4362281406615381,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.001245161819771855,
              "median": 0.0011529216480715297,
              "min": 0.0008643284014210691,
              "max": 0.0023537600154402132,
              "p5": 0.0008769339783864122,
              "p95": 0.00200437311511891,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.3122967256834681,
              "median": 1.2770961145194275,
              "min": 1.0797531992687386,
              "max": 1.5800408632622385,
              "p5": 1.0994874907938075,
              "p95": 1.5497463883879574,
              "count": 3
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.918488215082309e-11,
              "median": 2.5211814256052055e-11,
              "min": 4.952079555319346e-12,
              "max": 1.7803108384813867e-10,
              "p5": 7.2735171566830594e-12,
              "p95": 1.4428825565826517e-10,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006478332282409528,
              "median": 0.006178957981394248,
              "min": 0.004452680721365283,
              "max": 0.010291788639576934,
              "p5": 0.004557992011736197,
              "p95": 0.009620990073208796,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": -0.02312464749012988,
            "market": 0.0463903296607342,
            "sector": 0.018473102929176477,
            "peers": 0.061484827069767656,
            "vs_market": -0.06951497715086408,
            "vs_sector": -0.041597750419306356,
            "vs_peers": -0.08460947455989754
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 99.0657843518879,
          "score_pca_percentile": 99.0657843518879,
          "rank_pca": 25,
          "total": 2569,
          "adv_notional_sgd": 2331474959.65,
          "adv_volume_shares": 27553287.0,
          "free_float_shares": 9729775402.0,
          "turnover_ratio": 0.0028318523153511126,
          "votes": 16023.0,
          "trades": 16023.0,
          "spread_pct": 0.0006695946697762095,
          "spread_ticks": 1.1288761111274093,
          "amihud": 7.645486352395445e-12,
          "volatility": 0.4250823773977561
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.6155127020427905,
          "loadings": {
            "log_adv": 0.5007904852788888,
            "log_trades": 0.4550395804377655,
            "log_turnover": 0.4535545895962209,
            "neg_spread": 0.46181469462483576,
            "neg_amihud": 0.32759498717356483,
            "neg_vol": 0.1258761953376498
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
          "peer_median_adv": 467368589.6,
          "peer_median_score_pca": 97.08057609964968,
          "peer_median_trades": 9029.5,
          "peer_median_volatility": 0.37863004140789813,
          "peer_median_spread_pct": 0.0012074031101396091,
          "peer_median_spread_ticks": 1.2730229237725073,
          "peer_median_amihud": 3.155972922282415e-11,
          "peer_median_turnover_ratio": 0.006329483033596139,
          "target_vs_peer": {
            "score_pca_delta": 1.99,
            "adv_delta_pct": 398.9,
            "trades_delta_pct": 77.45,
            "volatility_delta_pct": -12.27,
            "spread_pct_delta_pct": 44.54,
            "spread_ticks_delta_pct": -11.32,
            "amihud_delta_pct": 75.77,
            "turnover_ratio_delta_pct": -55.26
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1299",
            "score_pca": 99.0657843518879,
            "rank_pca": 25,
            "adv": 2331474959.65,
            "trades": 16023.0,
            "volatility": 0.4250823773977561,
            "spread_pct": 0.0006695946697762095,
            "spread_ticks": 1.1288761111274093,
            "amihud": 7.645486352395445e-12,
            "turnover_ratio": 0.0028318523153511126,
            "is_target": true
          },
          {
            "ticker": "2318",
            "score_pca": 99.53289217594394,
            "rank_pca": 13,
            "adv": 2159393254.15,
            "trades": 15732.0,
            "volatility": 0.35410647829731084,
            "spread_pct": 0.0008582473280921204,
            "spread_ticks": 1.096469574076251,
            "amihud": 5.847757401381381e-12,
            "turnover_ratio": 0.005803736285047117,
            "is_target": false
          },
          {
            "ticker": "2628",
            "score_pca": 99.57181782794862,
            "rank_pca": 12,
            "adv": 1578322295.0,
            "trades": 17431.0,
            "volatility": 0.452021763078436,
            "spread_pct": 0.0008597360319164293,
            "spread_ticks": null,
            "amihud": 1.1584758416358526e-11,
            "turnover_ratio": 0.009144998652503974,
            "is_target": false
          },
          {
            "ticker": "2328",
            "score_pca": 96.37991436356559,
            "rank_pca": 94,
            "adv": 469077883.20000005,
            "trades": 6500.0,
            "volatility": 0.30059856296200005,
            "spread_pct": 0.0008954850217025895,
            "spread_ticks": null,
            "amihud": 2.446611128467566e-11,
            "turnover_ratio": 0.005068452957030528,
            "is_target": false
          },
          {
            "ticker": "1336",
            "score_pca": 97.93694044375243,
            "rank_pca": 54,
            "adv": 477391344.0,
            "trades": 10034.0,
            "volatility": 0.392852962621436,
            "spread_pct": 0.0012941749067759522,
            "spread_ticks": 1.5901870532470748,
            "amihud": 3.536103171876427e-11,
            "turnover_ratio": 0.009976558210001108,
            "is_target": false
          },
          {
            "ticker": "2601",
            "score_pca": 97.78123783573375,
            "rank_pca": 58,
            "adv": 465659295.99999994,
            "trades": 11414.0,
            "volatility": 0.3245388958478693,
            "spread_pct": 0.00121514919136685,
            "spread_ticks": null,
            "amihud": 2.7758426726884045e-11,
            "turnover_ratio": 0.006152136160848115,
            "is_target": false
          },
          {
            "ticker": "1339",
            "score_pca": 94.93966523939275,
            "rank_pca": 131,
            "adv": 248023946.34,
            "trades": 6109.0,
            "volatility": 0.36440712019436033,
            "spread_pct": 0.002163840140090736,
            "spread_ticks": 1.2730229237725073,
            "amihud": 5.451786393692964e-11,
            "turnover_ratio": 0.005421286667919962,
            "is_target": false
          },
          {
            "ticker": "966",
            "score_pca": 95.48462436745815,
            "rank_pca": 117,
            "adv": 195450729.5,
            "trades": 8025.0,
            "volatility": 0.41908714073077824,
            "spread_pct": 0.001533592250931656,
            "spread_ticks": null,
            "amihud": 8.178804859093126e-11,
            "turnover_ratio": 0.006506829906344163,
            "is_target": false
          },
          {
            "ticker": "6060",
            "score_pca": 94.55040871934605,
            "rank_pca": 141,
            "adv": 124042200.0,
            "trades": 6780.0,
            "volatility": 0.4045639831203769,
            "spread_pct": 0.0011996570289123682,
            "spread_ticks": null,
            "amihud": 1.4825686783904716e-10,
            "turnover_ratio": 0.007310417837763256,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Insurance",
          "sector_count": 21,
          "market_count": 2569,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.711904495406787,
              "median": 0.5769375041276281,
              "min": 0.0,
              "max": 16.13986780767803,
              "p5": 0.21740855526041006,
              "p95": 1.584872635142618,
              "count": 2568
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 59210631.92790906,
              "median": 221100.0,
              "min": 0.0,
              "max": 12656870800.0,
              "p5": 0.0,
              "p95": 233828809.00799993,
              "count": 2569
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.043179985441492486,
              "median": 0.028540065861690483,
              "min": 0.000574238716854322,
              "max": 0.586235634471959,
              "p5": 0.0014574226786203716,
              "p95": 0.1360649956328998,
              "count": 2569
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003786063676231558,
              "median": 0.0008606421714664018,
              "min": 0.0,
              "max": 0.38612653752209847,
              "p5": 0.0,
              "p95": 0.014313942684737879,
              "count": 2553
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.13662430888105e-07,
              "median": 4.771888783500076e-08,
              "min": 0.0,
              "max": 4.629629629629633e-05,
              "p5": 4.698299682707699e-11,
              "p95": 3.743432317775712e-06,
              "count": 2569
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1060.6187232386142,
              "median": 20.0,
              "min": 0.0,
              "max": 70158.0,
              "p5": 0.0,
              "p95": 5753.799999999999,
              "count": 2569
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4902321085900612,
              "median": 0.40330580761314394,
              "min": 0.1971935706180417,
              "max": 2.697297632712947,
              "p5": 0.27151249846663944,
              "p95": 0.6202604142715609,
              "count": 21
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 389141907.4112625,
              "median": 32453203.2,
              "min": 0.0,
              "max": 2331474959.65,
              "p5": 20100.0,
              "p95": 2159393254.15,
              "count": 21
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.00817146718232199,
              "median": 0.0022716564734522686,
              "min": 0.0006695946697762095,
              "max": 0.04663923182441697,
              "p5": 0.0008582473280921204,
              "p95": 0.035213392502067356,
              "count": 21
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0034974988197407214,
              "median": 0.003226804833582578,
              "min": 0.0,
              "max": 0.009976558210001108,
              "p5": 4.11109181325787e-07,
              "p95": 0.009144998652503974,
              "count": 21
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.637606967914469e-08,
              "median": 3.974522388004641e-10,
              "min": 5.847757401381381e-12,
              "max": 3.9806936358660704e-07,
              "p5": 7.645486352395445e-12,
              "p95": 1.2440484721094314e-07,
              "count": 21
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 4938.952380952381,
              "median": 1501.0,
              "min": 0.0,
              "max": 17431.0,
              "p5": 2.0,
              "p95": 16023.0,
              "count": 21
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 714670118.5237501,
              "median": 467368589.6,
              "min": 124042200.0,
              "max": 2159393254.15,
              "p5": 149035185.325,
              "p95": 1956018418.4474998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 10253.125,
              "median": 9029.5,
              "min": 6109.0,
              "max": 17431.0,
              "p5": 6245.85,
              "p95": 16836.35,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.376522113356571,
              "median": 0.37863004140789813,
              "min": 0.30059856296200005,
              "max": 0.452021763078436,
              "p5": 0.3089776794720543,
              "p95": 0.44049464525675575,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0012524852374735875,
              "median": 0.0012074031101396091,
              "min": 0.0008582473280921204,
              "max": 0.002163840140090736,
              "p5": 0.0008587683744306285,
              "p95": 0.0019432533788850577,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.3198931836986112,
              "median": 1.2730229237725073,
              "min": 1.096469574076251,
              "max": 1.5901870532470748,
              "p5": 1.1141249090458765,
              "p95": 1.558470640299618,
              "count": 3
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.869760823937149e-11,
              "median": 3.155972922282415e-11,
              "min": 5.847757401381381e-12,
              "max": 1.4825686783904716e-10,
              "p5": 7.855707756623382e-12,
              "p95": 1.2499278110220656e-10,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0069230520846822775,
              "median": 0.006329483033596139,
              "min": 0.005068452957030528,
              "max": 0.009976558210001108,
              "p5": 0.00519194475584183,
              "p95": 0.009685512364877111,
              "count": 8
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": -0.04150525733259636,
            "market": 0.05278409007713414,
            "sector": -0.10494617193954803,
            "peers": -0.12012173535761395,
            "vs_market": -0.0942893474097305,
            "vs_sector": 0.06344091460695167,
            "vs_peers": 0.07861647802501759
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 98.98793304787856,
          "score_pca_percentile": 98.98793304787856,
          "rank_pca": 27,
          "total": 2569,
          "adv_notional_sgd": 2133859266.3250003,
          "adv_volume_shares": 25289143.0,
          "free_float_shares": 9729775402.0,
          "turnover_ratio": 0.002599149718790189,
          "votes": 14379.0,
          "trades": 14379.0,
          "spread_pct": 0.0006754270726815418,
          "spread_ticks": 1.117458801539985,
          "amihud": 7.1688115716375715e-12,
          "volatility": 0.36819481981717755
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.6314187153019157,
          "loadings": {
            "log_adv": 0.4954104555127341,
            "log_trades": 0.4487803878953087,
            "log_turnover": 0.4495172464776996,
            "neg_spread": 0.4597074445293593,
            "neg_amihud": 0.3528999557600545,
            "neg_vol": 0.12340816746530689
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
          "peer_median_adv": 494040409.425,
          "peer_median_score_pca": 97.17789022966134,
          "peer_median_trades": 9446.5,
          "peer_median_volatility": 0.35818755510897027,
          "peer_median_spread_pct": 0.0011323757230234143,
          "peer_median_spread_ticks": 1.3259204975908965,
          "peer_median_amihud": 2.9676878623327226e-11,
          "peer_median_turnover_ratio": 0.007219832021879184,
          "target_vs_peer": {
            "score_pca_delta": 1.81,
            "adv_delta_pct": 331.9,
            "trades_delta_pct": 52.22,
            "volatility_delta_pct": -2.79,
            "spread_pct_delta_pct": 40.35,
            "spread_ticks_delta_pct": -15.72,
            "amihud_delta_pct": 75.84,
            "turnover_ratio_delta_pct": -64.0
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1299",
            "score_pca": 98.98793304787856,
            "rank_pca": 27,
            "adv": 2133859266.3250003,
            "trades": 14379.0,
            "volatility": 0.36819481981717755,
            "spread_pct": 0.0006754270726815418,
            "spread_ticks": 1.117458801539985,
            "amihud": 7.1688115716375715e-12,
            "turnover_ratio": 0.002599149718790189,
            "is_target": true
          },
          {
            "ticker": "2318",
            "score_pca": 99.41611521992994,
            "rank_pca": 16,
            "adv": 2263657292.3500004,
            "trades": 16216.5,
            "volatility": 0.32494748979422095,
            "spread_pct": 0.0008635842010847185,
            "spread_ticks": 1.0900516419566681,
            "amihud": 4.848002172787999e-12,
            "turnover_ratio": 0.006156674478547602,
            "is_target": false
          },
          {
            "ticker": "2628",
            "score_pca": 99.45504087193461,
            "rank_pca": 15,
            "adv": 1660072234.4499998,
            "trades": 16971.5,
            "volatility": 0.4231909754407321,
            "spread_pct": 0.000848979114030872,
            "spread_ticks": null,
            "amihud": 1.0621619314111293e-11,
            "turnover_ratio": 0.009665992039880729,
            "is_target": false
          },
          {
            "ticker": "2328",
            "score_pca": 96.34098871156091,
            "rank_pca": 95,
            "adv": 490083553.85,
            "trades": 6501.5,
            "volatility": 0.28457110160324267,
            "spread_pct": 0.000851031683661445,
            "spread_ticks": null,
            "amihud": 2.167599590585155e-11,
            "turnover_ratio": 0.005056454798565637,
            "is_target": false
          },
          {
            "ticker": "1336",
            "score_pca": 98.01479174776178,
            "rank_pca": 52,
            "adv": 497997265.0,
            "trades": 10381.0,
            "volatility": 0.39316640994743834,
            "spread_pct": 0.0012642041054962774,
            "spread_ticks": 1.5824961229856382,
            "amihud": 3.3019944476537975e-11,
            "turnover_ratio": 0.010377542648590476,
            "is_target": false
          },
          {
            "ticker": "2601",
            "score_pca": 98.09264305177112,
            "rank_pca": 50,
            "adv": 504222362.18,
            "trades": 12074.0,
            "volatility": 0.33057525654456,
            "spread_pct": 0.0011736267962659621,
            "spread_ticks": null,
            "amihud": 2.633381277011647e-11,
            "turnover_ratio": 0.007178110961113641,
            "is_target": false
          },
          {
            "ticker": "1339",
            "score_pca": 95.05644219540677,
            "rank_pca": 128,
            "adv": 268541788.15999997,
            "trades": 6245.0,
            "volatility": 0.3594449279607544,
            "spread_pct": 0.002056517422086669,
            "spread_ticks": 1.3259204975908965,
            "amihud": 5.109186720256527e-11,
            "turnover_ratio": 0.005365255669065264,
            "is_target": false
          },
          {
            "ticker": "966",
            "score_pca": 95.91280653950953,
            "rank_pca": 106,
            "adv": 199305288.68,
            "trades": 8512.0,
            "volatility": 0.4106788506151574,
            "spread_pct": 0.0015766473457540808,
            "spread_ticks": null,
            "amihud": 7.848104488738391e-11,
            "turnover_ratio": 0.0072615530826447275,
            "is_target": false
          },
          {
            "ticker": "6060",
            "score_pca": 95.09536784741145,
            "rank_pca": 127,
            "adv": 144094456.0,
            "trades": 7049.5,
            "volatility": 0.3569301822571861,
            "spread_pct": 0.0010911246497808664,
            "spread_ticks": null,
            "amihud": 9.598714543429525e-11,
            "turnover_ratio": 0.007701501375454199,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Insurance",
          "sector_count": 21,
          "market_count": 2569,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7434882321110232,
              "median": 0.5971402553101746,
              "min": 0.0,
              "max": 33.691723975352446,
              "p5": 0.22341982537964436,
              "p95": 1.5811301367770403,
              "count": 2568
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 55509222.109089606,
              "median": 212607.5,
              "min": 0.0,
              "max": 11645651090.0,
              "p5": 0.0,
              "p95": 210925875.7499999,
              "count": 2569
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04211308667301478,
              "median": 0.027297478087587177,
              "min": 0.0005771398776265944,
              "max": 0.586235634471959,
              "p5": 0.0014170477254261057,
              "p95": 0.13496070259926324,
              "count": 2569
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0034958720161184587,
              "median": 0.0008375,
              "min": 0.0,
              "max": 0.20008792533686492,
              "p5": 0.0,
              "p95": 0.013951902860940401,
              "count": 2553
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.28409251063162e-07,
              "median": 4.7034476271106754e-08,
              "min": 0.0,
              "max": 1.9778481012658228e-05,
              "p5": 5.247755042603508e-11,
              "p95": 3.3430044608947646e-06,
              "count": 2569
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1014.9486181393538,
              "median": 19.5,
              "min": 0.0,
              "max": 87680.5,
              "p5": 0.0,
              "p95": 5614.899999999997,
              "count": 2569
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.43189350690809936,
              "median": 0.3579537740818999,
              "min": 0.21911821063810177,
              "max": 1.9563878261558785,
              "p5": 0.2209607648320536,
              "p95": 0.6205026585298904,
              "count": 21
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 395066444.8412867,
              "median": 30258669.785,
              "min": 0.0,
              "max": 2263657292.3500004,
              "p5": 40500.0,
              "p95": 2133859266.3250003,
              "count": 21
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.008462946759275312,
              "median": 0.0021572762931632156,
              "min": 0.0006754270726815418,
              "max": 0.050849090660404314,
              "p5": 0.000848979114030872,
              "p95": 0.035485959350850124,
              "count": 21
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003715335898576762,
              "median": 0.002980167291234769,
              "min": 0.0,
              "max": 0.010377542648590476,
              "p5": 4.2138691085893165e-07,
              "p95": 0.009665992039880729,
              "count": 21
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.385667141370415e-08,
              "median": 4.2320166367483765e-10,
              "min": 4.848002172787999e-12,
              "max": 1.592610288262445e-07,
              "p5": 7.1688115716375715e-12,
              "p95": 1.3631350714081933e-07,
              "count": 21
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 4951.119047619048,
              "median": 1150.0,
              "min": 0.0,
              "max": 16971.5,
              "p5": 3.0,
              "p95": 16216.5,
              "count": 21
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 753496780.08375,
              "median": 494040409.425,
              "min": 144094456.0,
              "max": 2263657292.3500004,
              "p5": 163418247.438,
              "p95": 2052402522.0849998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 10493.875,
              "median": 9446.5,
              "min": 6245.0,
              "max": 16971.5,
              "p5": 6334.775,
              "p95": 16707.25,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3604381492704115,
              "median": 0.35818755510897027,
              "min": 0.28457110160324267,
              "max": 0.4231909754407321,
              "p5": 0.2987028374700851,
              "p95": 0.41881173175178094,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0012157144147701114,
              "median": 0.0011323757230234143,
              "min": 0.000848979114030872,
              "max": 0.002056517422086669,
              "p5": 0.0008496975134015725,
              "p95": 0.0018885628953702628,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.3328227541777344,
              "median": 1.3259204975908965,
              "min": 1.0900516419566681,
              "max": 1.5824961229856382,
              "p5": 1.113638527520091,
              "p95": 1.556838560446164,
              "count": 3
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.0257429020456216e-11,
              "median": 2.9676878623327226e-11,
              "min": 4.848002172787999e-12,
              "max": 9.598714543429525e-11,
              "p5": 6.868768172251151e-12,
              "p95": 8.986001024287627e-11,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.007345385631732784,
              "median": 0.007219832021879184,
              "min": 0.005056454798565637,
              "max": 0.010377542648590476,
              "p5": 0.005164535103240507,
              "p95": 0.010128499935542065,
              "count": 8
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": 0.18792866941015096,
            "market": 0.15600031434298334,
            "sector": -0.03975931809571398,
            "peers": 0.025332466928631225,
            "vs_market": 0.031928355067167624,
            "vs_sector": 0.22768798750586494,
            "vs_peers": 0.16259620248151974
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Near-term access looks mixed, with thinner displayed buying interest despite a still-manageable 2 tick spread.",
        "market_comparison": "The stock fell 2.9% while peers rose 0.2%, which matters because weaker price action can make trading feel less supported on the day."
      },
      "30d": {
        "liquidity": "Monthly tradability looks average to slightly better than peers, supported by a 1M score of 98.7 compared with a peer median of 95.2.",
        "market_comparison": "The stock returned -2.3% compared with peers at +6.1%, which matters because weaker momentum can reduce how supportive the tape feels even when liquidity screens well."
      },
      "3m": {
        "liquidity": "Quarterly access appears steady and slightly ahead of peers, with a 3M score of 99.1 compared with a peer median of 97.1.",
        "market_comparison": "The stock returned -4.2% compared with peers at -12.0%, which matters because relative resilience can help keep trading conditions more orderly over the period."
      },
      "6m": {
        "liquidity": "6M score 99.0 vs peer median 97.2 (+1.8 pts).",
        "market_comparison": "Return 18.8% vs peers 2.5%."
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
          "median": 0.21096166916782597,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "21.1%",
          "display_range": null,
          "display_text": "21.1%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 21.1,
          "plain_english": "Market explains about 21.1% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.5583107222016289,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "55.8%",
          "display_range": null,
          "display_text": "55.8%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 55.8,
          "plain_english": "Sector explains about 55.8% of price moves in the current state."
        },
        "company_share": {
          "median": 0.23072760863054517,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "23.1%",
          "display_range": null,
          "display_text": "23.1%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 23.1,
          "plain_english": "Company-specific explains about 23.1% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": -0.369991488798288,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.37",
          "display_range": null,
          "display_text": "-0.37",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Modest",
          "plain_english": "Modest market link: a 1% market move has lined up with about a 0.37% stock move in the opposite direction in this state.",
          "value_num": -0.37
        },
        "beta_stock_lag": {
          "median": -0.8914404929465686,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.89",
          "display_range": null,
          "display_text": "-0.89",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -0.89
        },
        "beta_sector": {
          "median": 1.396553374751249,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.40",
          "display_range": null,
          "display_text": "1.40",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Moderate",
          "plain_english": "Moderate sector link: a 1% sector move has lined up with about a 1.40% stock move in the same direction in this state.",
          "value_num": 1.4
        },
        "beta_market_lag": {
          "median": 0.40810377281836385,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.41",
          "display_range": null,
          "display_text": "0.41",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 0.41
        },
        "beta_sector_lag": {
          "median": -0.6935200950159007,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.69",
          "display_range": null,
          "display_text": "-0.69",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -0.69
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
          "period_label": "2025-04-23 to 2025-04-30",
          "n_obs": 6,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.46969193084258215,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.0%",
            "display_range": null,
            "display_text": "47.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
            "kind": "share_pct",
            "value_pct": 47.0,
            "plain_english": "Market explains about 47.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.46969193084258215,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.0%",
              "display_range": null,
              "display_text": "47.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 47.0,
              "plain_english": "Market explains about 47.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.30128332107753686,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "30.1%",
              "display_range": null,
              "display_text": "30.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 30.1,
              "plain_english": "Sector explains about 30.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.22902474807988094,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "22.9%",
              "display_range": null,
              "display_text": "22.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 22.9,
              "plain_english": "Company-specific explains about 22.9% of price moves in the current state."
            }
          },
          "summary": "Apr: Mostly market-driven, though based on only 6 trading days."
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
            "median": 0.437306032753178,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "43.7%",
            "display_range": null,
            "display_text": "43.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 43.7,
            "plain_english": "Company-specific explains about 43.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.33664787671017915,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "33.7%",
              "display_range": null,
              "display_text": "33.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 33.7,
              "plain_english": "Market explains about 33.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2260460905366428,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "22.6%",
              "display_range": null,
              "display_text": "22.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 22.6,
              "plain_english": "Sector explains about 22.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.437306032753178,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "43.7%",
              "display_range": null,
              "display_text": "43.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 43.7,
              "plain_english": "Company-specific explains about 43.7% of price moves in the current state."
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
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.446063351787901,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "44.6%",
            "display_range": null,
            "display_text": "44.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 44.6,
            "plain_english": "Company-specific explains about 44.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.4256550269917437,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.6%",
              "display_range": null,
              "display_text": "42.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 42.6,
              "plain_english": "Market explains about 42.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.12828162122035536,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "12.8%",
              "display_range": null,
              "display_text": "12.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 12.8,
              "plain_english": "Sector explains about 12.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.446063351787901,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.6%",
              "display_range": null,
              "display_text": "44.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 44.6,
              "plain_english": "Company-specific explains about 44.6% of price moves in the current state."
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
            "median": 0.4921728448658782,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "49.2%",
            "display_range": null,
            "display_text": "49.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 49.2,
            "plain_english": "Company-specific explains about 49.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2541768673721703,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "25.4%",
              "display_range": null,
              "display_text": "25.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 25.4,
              "plain_english": "Market explains about 25.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2536502877619514,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "25.4%",
              "display_range": null,
              "display_text": "25.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 25.4,
              "plain_english": "Sector explains about 25.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4921728448658782,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "49.2%",
              "display_range": null,
              "display_text": "49.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 49.2,
              "plain_english": "Company-specific explains about 49.2% of price moves in the current state."
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
            "median": 0.460470305398557,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "46.0%",
            "display_range": null,
            "display_text": "46.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 46.0,
            "plain_english": "Market explains about 46.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.460470305398557,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.0%",
              "display_range": null,
              "display_text": "46.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 46.0,
              "plain_english": "Market explains about 46.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2676369575201473,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.8%",
              "display_range": null,
              "display_text": "26.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 26.8,
              "plain_english": "Sector explains about 26.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.27189273708129563,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.2%",
              "display_range": null,
              "display_text": "27.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 27.2,
              "plain_english": "Company-specific explains about 27.2% of price moves in the current state."
            }
          },
          "summary": "Aug: Mostly market-driven."
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
            "median": 0.42778093632251263,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "42.8%",
            "display_range": null,
            "display_text": "42.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 42.8,
            "plain_english": "Company-specific explains about 42.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.18971216180996234,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "19.0%",
              "display_range": null,
              "display_text": "19.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 19.0,
              "plain_english": "Market explains about 19.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3825069018675251,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "38.3%",
              "display_range": null,
              "display_text": "38.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 38.3,
              "plain_english": "Sector explains about 38.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.42778093632251263,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.8%",
              "display_range": null,
              "display_text": "42.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 42.8,
              "plain_english": "Company-specific explains about 42.8% of price moves in the current state."
            }
          },
          "summary": "Sep: More mixed, though company-driven still has the largest share."
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
            "median": 0.4163854379119396,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "41.6%",
            "display_range": null,
            "display_text": "41.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 41.6,
            "plain_english": "Company-specific explains about 41.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3629498810964993,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.3%",
              "display_range": null,
              "display_text": "36.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 36.3,
              "plain_english": "Market explains about 36.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.22066468099156122,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "22.1%",
              "display_range": null,
              "display_text": "22.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 22.1,
              "plain_english": "Sector explains about 22.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4163854379119396,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "41.6%",
              "display_range": null,
              "display_text": "41.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 41.6,
              "plain_english": "Company-specific explains about 41.6% of price moves in the current state."
            }
          },
          "summary": "Oct: More mixed, though company-driven still has the largest share."
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
            "median": 0.48126274402625624,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "48.1%",
            "display_range": null,
            "display_text": "48.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 48.1,
            "plain_english": "Market explains about 48.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.48126274402625624,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.1%",
              "display_range": null,
              "display_text": "48.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 48.1,
              "plain_english": "Market explains about 48.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.11362232944822628,
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
              "median": 0.40511492652551745,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "40.5%",
              "display_range": null,
              "display_text": "40.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 40.5,
              "plain_english": "Company-specific explains about 40.5% of price moves in the current state."
            }
          },
          "summary": "Nov: Mostly market-driven."
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
            "median": 0.45650415441167286,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "45.7%",
            "display_range": null,
            "display_text": "45.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
            "kind": "share_pct",
            "value_pct": 45.7,
            "plain_english": "Sector explains about 45.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3721745400960958,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.2%",
              "display_range": null,
              "display_text": "37.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 37.2,
              "plain_english": "Market explains about 37.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.45650415441167286,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.7%",
              "display_range": null,
              "display_text": "45.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 45.7,
              "plain_english": "Sector explains about 45.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.17132130549223137,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "17.1%",
              "display_range": null,
              "display_text": "17.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 17.1,
              "plain_english": "Company-specific explains about 17.1% of price moves in the current state."
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
            "median": 0.345038912308282,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "34.5%",
            "display_range": null,
            "display_text": "34.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 34.5,
            "plain_english": "Sector explains about 34.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.32184376710287554,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "32.2%",
              "display_range": null,
              "display_text": "32.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 32.2,
              "plain_english": "Market explains about 32.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.345038912308282,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.5%",
              "display_range": null,
              "display_text": "34.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 34.5,
              "plain_english": "Sector explains about 34.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.33311732058884247,
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
          "summary": "Jan: Much more balanced across company, sector, and market factors."
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
            "median": 0.4834813906540285,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "48.3%",
            "display_range": null,
            "display_text": "48.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
            "kind": "share_pct",
            "value_pct": 48.3,
            "plain_english": "Sector explains about 48.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.16903167872050076,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "16.9%",
              "display_range": null,
              "display_text": "16.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 16.9,
              "plain_english": "Market explains about 16.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.4834813906540285,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.3%",
              "display_range": null,
              "display_text": "48.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 48.3,
              "plain_english": "Sector explains about 48.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3474869306254707,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.7%",
              "display_range": null,
              "display_text": "34.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 34.7,
              "plain_english": "Company-specific explains about 34.7% of price moves in the current state."
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
            "median": 0.4474503435369622,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "44.7%",
            "display_range": null,
            "display_text": "44.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 44.7,
            "plain_english": "Sector explains about 44.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.11023632300074264,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "11.0%",
              "display_range": null,
              "display_text": "11.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 11.0,
              "plain_english": "Market explains about 11.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.4474503435369622,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.7%",
              "display_range": null,
              "display_text": "44.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 44.7,
              "plain_english": "Sector explains about 44.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.44231333346229523,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.2%",
              "display_range": null,
              "display_text": "44.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 44.2,
              "plain_english": "Company-specific explains about 44.2% of price moves in the current state."
            }
          },
          "summary": "Mar: More mixed, though sector-driven still has the largest share."
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-30",
          "n_obs": 19,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4828144940203618,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "48.3%",
            "display_range": null,
            "display_text": "48.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
            "kind": "share_pct",
            "value_pct": 48.3,
            "plain_english": "Sector explains about 48.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2506110115330755,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "25.1%",
              "display_range": null,
              "display_text": "25.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 25.1,
              "plain_english": "Market explains about 25.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.4828144940203618,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.3%",
              "display_range": null,
              "display_text": "48.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 48.3,
              "plain_english": "Sector explains about 48.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.2665744944465626,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.7%",
              "display_range": null,
              "display_text": "26.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 26.7,
              "plain_english": "Company-specific explains about 26.7% of price moves in the current state."
            }
          },
          "summary": "Apr: Mostly sector-driven."
        },
        {
          "month_key": "2026-05",
          "month_label": "May 2026",
          "month_short_label": "May",
          "period_label": "2026-05-04 to 2026-05-08",
          "n_obs": 5,
          "partial_month": true,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5583107222016289,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "55.8%",
            "display_range": null,
            "display_text": "55.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
            "kind": "share_pct",
            "value_pct": 55.8,
            "plain_english": "Sector explains about 55.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.21096166916782597,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "21.1%",
              "display_range": null,
              "display_text": "21.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 21.1,
              "plain_english": "Market explains about 21.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.5583107222016289,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "55.8%",
              "display_range": null,
              "display_text": "55.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 55.8,
              "plain_english": "Sector explains about 55.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.23072760863054517,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "23.1%",
              "display_range": null,
              "display_text": "23.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 23.1,
              "plain_english": "Company-specific explains about 23.1% of price moves in the current state."
            }
          },
          "summary": "May: Mostly sector-driven, though based on only 5 trading days."
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
            "median": 0.014871593423656335,
            "low": 0.014871593423656335,
            "high": 0.014871593423656335
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
            "median": 0.02488418772642264,
            "low": 0.02488418772642264,
            "high": 0.02488418772642264
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
        "market_link_display": "-0.37",
        "sector_link_display": "1.40",
        "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.37% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "Moderate sector link. A 1% sector move has lined up with about a 1.40% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "-0.89",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "Low Volatility",
        "dominant_driver": "sector",
        "dominant_driver_label": "Sector",
        "driver_share_pct": 55.8,
        "driver_share_display": "55.8%",
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
            "median": 0.014871593423656335,
            "low": 0.014871593423656335,
            "high": 0.014871593423656335
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
            "median": 0.02488418772642264,
            "low": 0.02488418772642264,
            "high": 0.02488418772642264
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
        "text": "Liquidity score: 99.0 — Strong",
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
        "text": "Execution: bid-light",
        "bg": "bg-amber-500/20",
        "textColor": "text-amber-400"
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
    "liq_subtitle": "Longer-term liquidity is slightly above peers, but current buy-side depth is thinner.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent performance is weak, with the stock down 2.3% over 1M while peers rose 6.1% and the market rose 4.6%.",
    "perf_insight": "That underperformance matters because the tape is not being helped by momentum, while sector factors still explain 55.8% of trading. The screen also looks less supportive day to day, with bid depth at 0.71x of ask depth and a 2 tick spread.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Sector moves are the main influence on the tape, with sector factors accounting for 55.8% of trading.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly sector-driven, accounting for about 55.8% of price changes. Other influences are market 21.1%, and company-specific 23.1%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 21.1%, sector 55.8%, and company-specific 23.1%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has been consistently sector-driven across Mar to May."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 21.1%, sector 55.8%, and company-specific 23.1%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "Current driver: Sector at 55.8%. Broader market or sector moves still explain a meaningful part of the tape, so the stock is not trading on company news alone. Recent trend context is too limited to say whether access has changed from the 1M baseline.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: sector factors account for 55.8% of recent price moves.",
      "Monthly change: from March into April and May, trading became more clearly driven by the sector."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "The current market state looks mixed, with solid structural liquidity but thinner buy-side depth on screen.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on May 8, 2025 to May 8, 2026 (242 trading days • 3,624,203 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on the displayed order book.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is lighter than the monthly baseline, so day-to-day access may feel weaker than the 1M score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The displayed book is bid-light, so immediate buying access looks weaker than the six-month peer standing",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 36.5% of total trades.",
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
    "intraday_insight": "The clearest near-term signal is a bid-light book, with displayed bid depth at 0.71x of ask depth and a 2 tick spread. That matters because day-to-day buying access can feel weaker even though the six-month liquidity score sits above the peer median.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "The broader trading picture is being shaped more by sector moves and displayed depth than by short activity.",
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
    "exec_subtitle": "Liquidity is mixed for the stock’s size, with solid peer standing but a less supportive screen today.",
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
        "value": "99.0/100",
        "sub": "Peer median 97.2 (+1.8 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "HK$2.1B",
        "sub": "Peer median HK$494.0M",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "0.07%",
        "sub": "1.12 ticks; peers 0.11%",
        "interp": {
          "text": "Tighter",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity is mixed for the stock’s size, with a 6M score of 99.0 compared with a peer median of 97.2 showing slightly better structural access. Near-term conditions are less supportive, with displayed bid depth at 0.71x of ask depth and a 2 tick spread. Sector factors account for 55.8% of trading, so the tape is still being shaped meaningfully by the broader group.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "86.650",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "0.12%",
        "note": "2.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.71x",
        "note": "Bid depth / ask depth on the displayed order book",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-0.06% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-0.06% with 100.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-0.06% with 100.0% fill.",
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
        "value": "99",
        "suffix": "/100",
        "bar_pct": 99,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Rank 27/2569",
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
        "value": "0.07",
        "suffix": "%",
        "bar_pct": 1,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "0.07% • 1.12 ticks vs peers 0.11%",
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
        "value": "2.1B",
        "value_prefix": "HK$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Peer median HK$494.0M",
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
        "value": "55.8",
        "suffix": "sector",
        "bar_pct": 56,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 21.1% • Company 23.1%",
        "interpretation": {
          "text": "Sector",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is slightly above peers, with a 6M liquidity score of 99.0 compared with a peer median of 97.2. That keeps peer-relative access competitive, but not decisively stronger than comparable names.",
      "Current execution looks less supportive, with displayed bid depth at 0.71x of ask depth and a 2 tick spread. That matters because immediate buying access appears thinner than the longer-term liquidity score would suggest.",
      "The tape is under pressure, with the stock down 2.3% over 1M while peers rose 6.1% and the market rose 4.6%. Sector factors account for 55.8% of trading, which means broader group moves are still a major influence on liquidity conditions."
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
      "overall": "6M liquidity is strong: score 99.0 vs peer median 97.2 (+1.8 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "strengths": [
        "6M score 99.0 vs peer median 97.2 (+1.8 pts)."
      ],
      "concerns": [],
      "peer_context": "Primary-period score gap vs peers: +1.8 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is 18.8%, better than market, sector, and peers, which suggests stronger price performance than comparable names.",
        "vs_market": "Better than market: 18.8% vs market 15.6%.",
        "vs_sector": "Better than sector: 18.8% vs sector -4.0%.",
        "vs_peers": "Better than peers: 18.8% vs peers 2.5%."
      },
      "adv": {
        "insight": "ADV is HK$2.1B, better than market, sector, and peers, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: HK$2.1B vs market HK$212.6K.",
        "vs_sector": "Better than sector: HK$2.1B vs sector HK$30.3M.",
        "vs_peers": "Better than peers: HK$2.1B vs peers HK$494.0M."
      },
      "spread": {
        "insight": "Spread is 0.07%, better than market, sector, and peers, which keeps trading costs more competitive than comparable names.",
        "vs_market": "Better than market: 0.07% vs market 2.73%.",
        "vs_sector": "Better than sector: 0.07% vs sector 0.22%.",
        "vs_peers": "Better than peers: 0.07% vs peers 0.11%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.26%, better than market, but worse than sector and peers, which shows turnover is mixed across comparison groups.",
        "vs_market": "Better than market: 0.26% vs market 0.08%.",
        "vs_sector": "Worse than sector: 0.26% vs sector 0.30%.",
        "vs_peers": "Worse than peers: 0.26% vs peers 0.72%."
      },
      "volatility": {
        "insight": "Volatility is 36.82%, better than market, which suggests day-to-day price swings are more contained than comparable names.",
        "vs_market": "Better than market: 36.82% vs market 59.71%.",
        "vs_sector": "In line with sector: 36.82% vs sector 35.80%.",
        "vs_peers": "In line with peers: 36.82% vs peers 35.82%."
      },
      "trades": {
        "insight": "Trades is 14379, better than market, sector, and peers, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 14379 vs market 20.",
        "vs_sector": "Better than sector: 14379 vs sector 1150.",
        "vs_peers": "Better than peers: 14379 vs peers 9446."
      },
      "amihud": {
        "insight": "Price impact is 7.17e-12, better than market, sector, and peers, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 7.17e-12 vs market 4.70e-08.",
        "vs_sector": "Better than sector: 7.17e-12 vs sector 4.23e-10.",
        "vs_peers": "Better than peers: 7.17e-12 vs peers 2.97e-11."
      }
    },
    "performance": {
      "overall": "Recent returns are weak relative to peers and the market, with the stock down 2.3% over 1M while peers rose 6.1% and the market gained 4.6%. Liquidity gives a mixed read on that move because the 6M liquidity score of 99.0 sits above the peer median of 97.2, yet the order book is less supportive day to day with displayed bid depth at 0.71x ask depth and a 2-tick spread. The driver mix points more to a sector-linked move than a purely company-specific one, with sector factors explaining 55.8% of current trading.",
      "conclusion": "The move looks mainly sector-linked, but weaker near-term buy-side depth means the underperformance is not being offset by stronger trading support."
    },
    "drivers": {
      "overall": "Current driver: Sector at 55.8%. Broader market or sector moves still explain a meaningful part of the tape, so the stock is not trading on company news alone.",
      "beta": "Current trading conditions look mixed rather than firmly stable, because displayed bid depth is only 0.71x of ask depth even with a 2-tick spread. That leaves the buy side thinner on the screen, which can make day-to-day trading feel less resilient when sector moves dominate.",
      "rolling_change": "Mar: More mixed, though sector-driven still has the largest share. | Apr: Mostly sector-driven. | May: Mostly sector-driven, though based on only 5 trading days."
    },
    "regime": {
      "overall": "Low Volatility points to a steadier trading backdrop, but the picture is mixed because displayed bid depth is only 0.71x of ask depth. That matters because calmer price moves do not fully remove the risk of thinner buy-side access on the day.",
      "current": "The active state is Low Volatility, which signals a calmer market backdrop for the stock right now.",
      "transitions": "This state looks reasonably stable, with a typical run length of about 11.4 days, so it appears more settled than fleeting.",
      "trading_implications": "This state looks more persistent, with a typical run length of about 11.4 days."
    },
    "execution": {
      "overall": "Displayed liquidity looks bid-light because bid depth is only 0.71x of ask depth while the spread is 2 ticks. That points to a tradable book, but one where buy-side support is thinner than the offer side.",
      "concern": "The clearest stress point is the imbalance on the bid side, with materially less displayed depth than on the ask. That matters because immediate selling pressure would meet less visible support than buying interest.",
      "peer_context": "This tempers the broader picture because the six-month liquidity score of 99.0 sits 1.8 points above the peer median, yet the current book does not show that strength evenly. The trade-size history is broad at 242 trading days and 3,624,203 trades, so the weaker bid is best read as a current book condition rather than a change to the longer liquidity profile."
    },
    "trader_composition": {
      "overall": "Flow looks mixed on individual trade count and value, so participation is broad but the largest share of value comes from a smaller institutional-style slice.",
      "retail_heavy": "Retail-like trades make up 58.3% of individual trade count but only 7.4% of trade value, while institution-like trades are 13.0% of count and 74.5% of value. That split shows frequent smaller tickets alongside a value base carried by larger participants, which makes the flow look mixed rather than cleanly retail-led or institution-led.",
      "institutional_gap": "Institution-like activity is a small share of individual trades at 13.0% but accounts for 74.5% of trade value. That gap matters because day-to-day liquidity can still depend heavily on a relatively narrow set of larger trades.",
      "peer_comparison": "The mix does not read as one-way because count is led by retail-like activity while value is led by institution-like activity. Relative to peers, the key question is whether that split is more balanced or more dependent on large-value trades."
    },
    "price_moving": {
      "overall": "Price-moving activity is best read as mixed because the stock is trading under a strong sector influence rather than on a single clear company-specific flow. Sector explains 55.8% of the current tape, while the shares are down 2.3% over one month compared with peers up 6.1% and the market up 4.6%. That points to price formation being shaped by broader market flow and weaker relative performance, which makes the signal less clean.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity does not stand out as a separate driver of trading conditions. The clearer signals are weaker price performance, with the stock down 2.3% over one month while peers rose 6.1%, and a lighter bid side with displayed bid depth at 0.71x ask depth, which matters more for near-term access.",
      "level": "N/A",
      "correlation": "N/A",
      "trend": "There is no clear sign that short activity is rising or falling in a way that changes the picture. The more relevant backdrop is that sector moves explain 55.8% of trading and the order book is thinner on the bid side, so broader market pressure and day-to-day depth remain the main influences.",
      "peaks": "N/A"
    },
    "intraday": {
      "overall": "Session split is open 6.9%, continuous 65.2%, and close 17.0%. Current trading concentration score is 0.121.",
      "hhi_interpretation": "A concentration score of 0.121 indicates activity is reasonably dispersed across the session. That supports a steadier flow profile than one dominated by only a few time buckets.",
      "best_times": "The continuous session is the clearest source of liquidity because it accounts for nearly two thirds of activity. The close is the next most active window, which matters for investors relying on end-of-day access.",
      "peer_ranking": "Intraday activity looks reasonably well distributed, with most trading in the continuous session and a low concentration score of 0.121. Relative to peers, that points to a flow profile that may be judged on how consistently peers also hold volume outside the close."
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
        "1299",
        "2318",
        "2628",
        "2328",
        "1336",
        "2601",
        "1339",
        "966",
        "6060"
      ],
      "scores": [
        98.98793304787856,
        99.41611521992994,
        99.45504087193461,
        96.34098871156091,
        98.01479174776178,
        98.09264305177112,
        95.05644219540677,
        95.91280653950953,
        95.09536784741145
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
        2133859266.3250003,
        2263657292.3500004,
        1660072234.4499998,
        490083553.85,
        497997265.0,
        504222362.18,
        268541788.15999997,
        199305288.68,
        144094456.0
      ],
      "total": 2569
    },
    "market_comparison": {
      "sector_name": "Insurance",
      "sector_count": 21,
      "market_count": 2569,
      "company": {
        "volatility": 0.36819481981717755,
        "adv": 2133859266.3250003,
        "spread_pct": 0.0006754270726815418,
        "turnover_ratio": 0.002599149718790189,
        "amihud": 7.1688115716375715e-12,
        "trades": 14379.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.7434882321110232,
          "median": 0.5971402553101746,
          "min": 0.0,
          "max": 33.691723975352446,
          "p5": 0.22341982537964436,
          "p95": 1.5811301367770403,
          "count": 2568
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 55509222.109089606,
          "median": 212607.5,
          "min": 0.0,
          "max": 11645651090.0,
          "p5": 0.0,
          "p95": 210925875.7499999,
          "count": 2569
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.04211308667301478,
          "median": 0.027297478087587177,
          "min": 0.0005771398776265944,
          "max": 0.586235634471959,
          "p5": 0.0014170477254261057,
          "p95": 0.13496070259926324,
          "count": 2569
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0034958720161184587,
          "median": 0.0008375,
          "min": 0.0,
          "max": 0.20008792533686492,
          "p5": 0.0,
          "p95": 0.013951902860940401,
          "count": 2553
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 6.28409251063162e-07,
          "median": 4.7034476271106754e-08,
          "min": 0.0,
          "max": 1.9778481012658228e-05,
          "p5": 5.247755042603508e-11,
          "p95": 3.3430044608947646e-06,
          "count": 2569
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1014.9486181393538,
          "median": 19.5,
          "min": 0.0,
          "max": 87680.5,
          "p5": 0.0,
          "p95": 5614.899999999997,
          "count": 2569
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.43189350690809936,
          "median": 0.3579537740818999,
          "min": 0.21911821063810177,
          "max": 1.9563878261558785,
          "p5": 0.2209607648320536,
          "p95": 0.6205026585298904,
          "count": 21
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 395066444.8412867,
          "median": 30258669.785,
          "min": 0.0,
          "max": 2263657292.3500004,
          "p5": 40500.0,
          "p95": 2133859266.3250003,
          "count": 21
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.008462946759275312,
          "median": 0.0021572762931632156,
          "min": 0.0006754270726815418,
          "max": 0.050849090660404314,
          "p5": 0.000848979114030872,
          "p95": 0.035485959350850124,
          "count": 21
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.003715335898576762,
          "median": 0.002980167291234769,
          "min": 0.0,
          "max": 0.010377542648590476,
          "p5": 4.2138691085893165e-07,
          "p95": 0.009665992039880729,
          "count": 21
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 2.385667141370415e-08,
          "median": 4.2320166367483765e-10,
          "min": 4.848002172787999e-12,
          "max": 1.592610288262445e-07,
          "p5": 7.1688115716375715e-12,
          "p95": 1.3631350714081933e-07,
          "count": 21
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 4951.119047619048,
          "median": 1150.0,
          "min": 0.0,
          "max": 16971.5,
          "p5": 3.0,
          "p95": 16216.5,
          "count": 21
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 753496780.08375,
          "median": 494040409.425,
          "min": 144094456.0,
          "max": 2263657292.3500004,
          "p5": 163418247.438,
          "p95": 2052402522.0849998,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 10493.875,
          "median": 9446.5,
          "min": 6245.0,
          "max": 16971.5,
          "p5": 6334.775,
          "p95": 16707.25,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.3604381492704115,
          "median": 0.35818755510897027,
          "min": 0.28457110160324267,
          "max": 0.4231909754407321,
          "p5": 0.2987028374700851,
          "p95": 0.41881173175178094,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.0012157144147701114,
          "median": 0.0011323757230234143,
          "min": 0.000848979114030872,
          "max": 0.002056517422086669,
          "p5": 0.0008496975134015725,
          "p95": 0.0018885628953702628,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 1.3328227541777344,
          "median": 1.3259204975908965,
          "min": 1.0900516419566681,
          "max": 1.5824961229856382,
          "p5": 1.113638527520091,
          "p95": 1.556838560446164,
          "count": 3
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 4.0257429020456216e-11,
          "median": 2.9676878623327226e-11,
          "min": 4.848002172787999e-12,
          "max": 9.598714543429525e-11,
          "p5": 6.868768172251151e-12,
          "p95": 8.986001024287627e-11,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.007345385631732784,
          "median": 0.007219832021879184,
          "min": 0.005056454798565637,
          "max": 0.010377542648590476,
          "p5": 0.005164535103240507,
          "p95": 0.010128499935542065,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": -0.02312464749012988,
        "market": 0.0463903296607342,
        "sector": 0.018473102929176477,
        "peers": 0.061484827069767656
      },
      {
        "horizon": "3M",
        "stock": -0.04150525733259636,
        "market": 0.05278409007713414,
        "sector": -0.10494617193954803,
        "peers": -0.12012173535761395
      },
      {
        "horizon": "6M",
        "stock": 0.18792866941015096,
        "market": 0.15600031434298334,
        "sector": -0.03975931809571398,
        "peers": 0.025332466928631225
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
      "share_market": 0.21096166916782597,
      "share_sector": 0.5583107222016289,
      "share_idio": 0.23072760863054517,
      "beta_market": -0.369991488798288,
      "beta_sector": 1.396553374751249,
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
            "median": 0.21096166916782597,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "21.1%",
            "display_range": null,
            "display_text": "21.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 21.1,
            "plain_english": "Market explains about 21.1% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.5583107222016289,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "55.8%",
            "display_range": null,
            "display_text": "55.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 55.8,
            "plain_english": "Sector explains about 55.8% of price moves in the current state."
          },
          "company_share": {
            "median": 0.23072760863054517,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "23.1%",
            "display_range": null,
            "display_text": "23.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 23.1,
            "plain_english": "Company-specific explains about 23.1% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": -0.369991488798288,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.37",
            "display_range": null,
            "display_text": "-0.37",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Modest",
            "plain_english": "Modest market link: a 1% market move has lined up with about a 0.37% stock move in the opposite direction in this state.",
            "value_num": -0.37
          },
          "beta_stock_lag": {
            "median": -0.8914404929465686,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.89",
            "display_range": null,
            "display_text": "-0.89",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -0.89
          },
          "beta_sector": {
            "median": 1.396553374751249,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.40",
            "display_range": null,
            "display_text": "1.40",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Moderate",
            "plain_english": "Moderate sector link: a 1% sector move has lined up with about a 1.40% stock move in the same direction in this state.",
            "value_num": 1.4
          },
          "beta_market_lag": {
            "median": 0.40810377281836385,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.41",
            "display_range": null,
            "display_text": "0.41",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 0.41
          },
          "beta_sector_lag": {
            "median": -0.6935200950159007,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.69",
            "display_range": null,
            "display_text": "-0.69",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -0.69
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
            "period_label": "2025-04-23 to 2025-04-30",
            "n_obs": 6,
            "partial_month": true,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.46969193084258215,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.0%",
              "display_range": null,
              "display_text": "47.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 47.0,
              "plain_english": "Market explains about 47.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.46969193084258215,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "47.0%",
                "display_range": null,
                "display_text": "47.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 47.0,
                "plain_english": "Market explains about 47.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.30128332107753686,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "30.1%",
                "display_range": null,
                "display_text": "30.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 30.1,
                "plain_english": "Sector explains about 30.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.22902474807988094,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "22.9%",
                "display_range": null,
                "display_text": "22.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 22.9,
                "plain_english": "Company-specific explains about 22.9% of price moves in the current state."
              }
            },
            "summary": "Apr: Mostly market-driven, though based on only 6 trading days."
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
              "median": 0.437306032753178,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "43.7%",
              "display_range": null,
              "display_text": "43.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 43.7,
              "plain_english": "Company-specific explains about 43.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.33664787671017915,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "33.7%",
                "display_range": null,
                "display_text": "33.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 33.7,
                "plain_english": "Market explains about 33.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2260460905366428,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "22.6%",
                "display_range": null,
                "display_text": "22.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 22.6,
                "plain_english": "Sector explains about 22.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.437306032753178,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "43.7%",
                "display_range": null,
                "display_text": "43.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 43.7,
                "plain_english": "Company-specific explains about 43.7% of price moves in the current state."
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
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.446063351787901,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.6%",
              "display_range": null,
              "display_text": "44.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 44.6,
              "plain_english": "Company-specific explains about 44.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.4256550269917437,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "42.6%",
                "display_range": null,
                "display_text": "42.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 42.6,
                "plain_english": "Market explains about 42.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.12828162122035536,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "12.8%",
                "display_range": null,
                "display_text": "12.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 12.8,
                "plain_english": "Sector explains about 12.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.446063351787901,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "44.6%",
                "display_range": null,
                "display_text": "44.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 44.6,
                "plain_english": "Company-specific explains about 44.6% of price moves in the current state."
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
              "median": 0.4921728448658782,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "49.2%",
              "display_range": null,
              "display_text": "49.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 49.2,
              "plain_english": "Company-specific explains about 49.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2541768673721703,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "25.4%",
                "display_range": null,
                "display_text": "25.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 25.4,
                "plain_english": "Market explains about 25.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2536502877619514,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "25.4%",
                "display_range": null,
                "display_text": "25.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 25.4,
                "plain_english": "Sector explains about 25.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4921728448658782,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "49.2%",
                "display_range": null,
                "display_text": "49.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 49.2,
                "plain_english": "Company-specific explains about 49.2% of price moves in the current state."
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
              "median": 0.460470305398557,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.0%",
              "display_range": null,
              "display_text": "46.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 46.0,
              "plain_english": "Market explains about 46.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.460470305398557,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "46.0%",
                "display_range": null,
                "display_text": "46.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 46.0,
                "plain_english": "Market explains about 46.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2676369575201473,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.8%",
                "display_range": null,
                "display_text": "26.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 26.8,
                "plain_english": "Sector explains about 26.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.27189273708129563,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.2%",
                "display_range": null,
                "display_text": "27.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 27.2,
                "plain_english": "Company-specific explains about 27.2% of price moves in the current state."
              }
            },
            "summary": "Aug: Mostly market-driven."
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
              "median": 0.42778093632251263,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.8%",
              "display_range": null,
              "display_text": "42.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 42.8,
              "plain_english": "Company-specific explains about 42.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.18971216180996234,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "19.0%",
                "display_range": null,
                "display_text": "19.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 19.0,
                "plain_english": "Market explains about 19.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3825069018675251,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "38.3%",
                "display_range": null,
                "display_text": "38.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 38.3,
                "plain_english": "Sector explains about 38.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.42778093632251263,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "42.8%",
                "display_range": null,
                "display_text": "42.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 42.8,
                "plain_english": "Company-specific explains about 42.8% of price moves in the current state."
              }
            },
            "summary": "Sep: More mixed, though company-driven still has the largest share."
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
              "median": 0.4163854379119396,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "41.6%",
              "display_range": null,
              "display_text": "41.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 41.6,
              "plain_english": "Company-specific explains about 41.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3629498810964993,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "36.3%",
                "display_range": null,
                "display_text": "36.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 36.3,
                "plain_english": "Market explains about 36.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.22066468099156122,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "22.1%",
                "display_range": null,
                "display_text": "22.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 22.1,
                "plain_english": "Sector explains about 22.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4163854379119396,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "41.6%",
                "display_range": null,
                "display_text": "41.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 41.6,
                "plain_english": "Company-specific explains about 41.6% of price moves in the current state."
              }
            },
            "summary": "Oct: More mixed, though company-driven still has the largest share."
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
              "median": 0.48126274402625624,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.1%",
              "display_range": null,
              "display_text": "48.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 48.1,
              "plain_english": "Market explains about 48.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.48126274402625624,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "48.1%",
                "display_range": null,
                "display_text": "48.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 48.1,
                "plain_english": "Market explains about 48.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.11362232944822628,
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
                "median": 0.40511492652551745,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "40.5%",
                "display_range": null,
                "display_text": "40.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 40.5,
                "plain_english": "Company-specific explains about 40.5% of price moves in the current state."
              }
            },
            "summary": "Nov: Mostly market-driven."
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
              "median": 0.45650415441167286,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.7%",
              "display_range": null,
              "display_text": "45.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 45.7,
              "plain_english": "Sector explains about 45.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3721745400960958,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "37.2%",
                "display_range": null,
                "display_text": "37.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 37.2,
                "plain_english": "Market explains about 37.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.45650415441167286,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "45.7%",
                "display_range": null,
                "display_text": "45.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 45.7,
                "plain_english": "Sector explains about 45.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.17132130549223137,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "17.1%",
                "display_range": null,
                "display_text": "17.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 17.1,
                "plain_english": "Company-specific explains about 17.1% of price moves in the current state."
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
              "median": 0.345038912308282,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.5%",
              "display_range": null,
              "display_text": "34.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 34.5,
              "plain_english": "Sector explains about 34.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.32184376710287554,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "32.2%",
                "display_range": null,
                "display_text": "32.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 32.2,
                "plain_english": "Market explains about 32.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.345038912308282,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "34.5%",
                "display_range": null,
                "display_text": "34.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 34.5,
                "plain_english": "Sector explains about 34.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.33311732058884247,
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
            "summary": "Jan: Much more balanced across company, sector, and market factors."
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
              "median": 0.4834813906540285,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.3%",
              "display_range": null,
              "display_text": "48.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 48.3,
              "plain_english": "Sector explains about 48.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.16903167872050076,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "16.9%",
                "display_range": null,
                "display_text": "16.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 16.9,
                "plain_english": "Market explains about 16.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.4834813906540285,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "48.3%",
                "display_range": null,
                "display_text": "48.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 48.3,
                "plain_english": "Sector explains about 48.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3474869306254707,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "34.7%",
                "display_range": null,
                "display_text": "34.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 34.7,
                "plain_english": "Company-specific explains about 34.7% of price moves in the current state."
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
              "median": 0.4474503435369622,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.7%",
              "display_range": null,
              "display_text": "44.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 44.7,
              "plain_english": "Sector explains about 44.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.11023632300074264,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "11.0%",
                "display_range": null,
                "display_text": "11.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 11.0,
                "plain_english": "Market explains about 11.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.4474503435369622,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "44.7%",
                "display_range": null,
                "display_text": "44.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 44.7,
                "plain_english": "Sector explains about 44.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.44231333346229523,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "44.2%",
                "display_range": null,
                "display_text": "44.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 44.2,
                "plain_english": "Company-specific explains about 44.2% of price moves in the current state."
              }
            },
            "summary": "Mar: More mixed, though sector-driven still has the largest share."
          },
          {
            "month_key": "2026-04",
            "month_label": "April 2026",
            "month_short_label": "Apr",
            "period_label": "2026-04-01 to 2026-04-30",
            "n_obs": 19,
            "partial_month": false,
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4828144940203618,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.3%",
              "display_range": null,
              "display_text": "48.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 48.3,
              "plain_english": "Sector explains about 48.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2506110115330755,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "25.1%",
                "display_range": null,
                "display_text": "25.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 25.1,
                "plain_english": "Market explains about 25.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.4828144940203618,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "48.3%",
                "display_range": null,
                "display_text": "48.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 48.3,
                "plain_english": "Sector explains about 48.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.2665744944465626,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.7%",
                "display_range": null,
                "display_text": "26.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 26.7,
                "plain_english": "Company-specific explains about 26.7% of price moves in the current state."
              }
            },
            "summary": "Apr: Mostly sector-driven."
          },
          {
            "month_key": "2026-05",
            "month_label": "May 2026",
            "month_short_label": "May",
            "period_label": "2026-05-04 to 2026-05-08",
            "n_obs": 5,
            "partial_month": true,
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5583107222016289,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "55.8%",
              "display_range": null,
              "display_text": "55.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 55.8,
              "plain_english": "Sector explains about 55.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.21096166916782597,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "21.1%",
                "display_range": null,
                "display_text": "21.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 21.1,
                "plain_english": "Market explains about 21.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.5583107222016289,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "55.8%",
                "display_range": null,
                "display_text": "55.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 55.8,
                "plain_english": "Sector explains about 55.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.23072760863054517,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "23.1%",
                "display_range": null,
                "display_text": "23.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 23.1,
                "plain_english": "Company-specific explains about 23.1% of price moves in the current state."
              }
            },
            "summary": "May: Mostly sector-driven, though based on only 5 trading days."
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
              "median": 0.014871593423656335,
              "low": 0.014871593423656335,
              "high": 0.014871593423656335
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
              "median": 0.02488418772642264,
              "low": 0.02488418772642264,
              "high": 0.02488418772642264
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
          "market_link_display": "-0.37",
          "sector_link_display": "1.40",
          "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.37% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "Moderate sector link. A 1% sector move has lined up with about a 1.40% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "-0.89",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "Low Volatility",
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "driver_share_pct": 55.8,
          "driver_share_display": "55.8%",
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
          "period_label": "2025-04-23 to 2025-04-30",
          "n_obs": 6,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Apr: Mostly market-driven, though based on only 6 trading days.",
          "share_market": 0.46969193084258215,
          "share_sector": 0.30128332107753686,
          "share_company": 0.22902474807988094,
          "share_market_display": "47.0%",
          "share_sector_display": "30.1%",
          "share_company_display": "22.9%",
          "dominant_share_display": "47.0%"
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
          "share_market": 0.33664787671017915,
          "share_sector": 0.2260460905366428,
          "share_company": 0.437306032753178,
          "share_market_display": "33.7%",
          "share_sector_display": "22.6%",
          "share_company_display": "43.7%",
          "dominant_share_display": "43.7%"
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
          "share_market": 0.4256550269917437,
          "share_sector": 0.12828162122035536,
          "share_company": 0.446063351787901,
          "share_market_display": "42.6%",
          "share_sector_display": "12.8%",
          "share_company_display": "44.6%",
          "dominant_share_display": "44.6%"
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
          "share_market": 0.2541768673721703,
          "share_sector": 0.2536502877619514,
          "share_company": 0.4921728448658782,
          "share_market_display": "25.4%",
          "share_sector_display": "25.4%",
          "share_company_display": "49.2%",
          "dominant_share_display": "49.2%"
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
          "summary": "Aug: Mostly market-driven.",
          "share_market": 0.460470305398557,
          "share_sector": 0.2676369575201473,
          "share_company": 0.27189273708129563,
          "share_market_display": "46.0%",
          "share_sector_display": "26.8%",
          "share_company_display": "27.2%",
          "dominant_share_display": "46.0%"
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
          "summary": "Sep: More mixed, though company-driven still has the largest share.",
          "share_market": 0.18971216180996234,
          "share_sector": 0.3825069018675251,
          "share_company": 0.42778093632251263,
          "share_market_display": "19.0%",
          "share_sector_display": "38.3%",
          "share_company_display": "42.8%",
          "dominant_share_display": "42.8%"
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
          "summary": "Oct: More mixed, though company-driven still has the largest share.",
          "share_market": 0.3629498810964993,
          "share_sector": 0.22066468099156122,
          "share_company": 0.4163854379119396,
          "share_market_display": "36.3%",
          "share_sector_display": "22.1%",
          "share_company_display": "41.6%",
          "dominant_share_display": "41.6%"
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
          "share_market": 0.48126274402625624,
          "share_sector": 0.11362232944822628,
          "share_company": 0.40511492652551745,
          "share_market_display": "48.1%",
          "share_sector_display": "11.4%",
          "share_company_display": "40.5%",
          "dominant_share_display": "48.1%"
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
          "share_market": 0.3721745400960958,
          "share_sector": 0.45650415441167286,
          "share_company": 0.17132130549223137,
          "share_market_display": "37.2%",
          "share_sector_display": "45.7%",
          "share_company_display": "17.1%",
          "dominant_share_display": "45.7%"
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
          "summary": "Jan: Much more balanced across company, sector, and market factors.",
          "share_market": 0.32184376710287554,
          "share_sector": 0.345038912308282,
          "share_company": 0.33311732058884247,
          "share_market_display": "32.2%",
          "share_sector_display": "34.5%",
          "share_company_display": "33.3%",
          "dominant_share_display": "34.5%"
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
          "share_market": 0.16903167872050076,
          "share_sector": 0.4834813906540285,
          "share_company": 0.3474869306254707,
          "share_market_display": "16.9%",
          "share_sector_display": "48.3%",
          "share_company_display": "34.7%",
          "dominant_share_display": "48.3%"
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
          "share_market": 0.11023632300074264,
          "share_sector": 0.4474503435369622,
          "share_company": 0.44231333346229523,
          "share_market_display": "11.0%",
          "share_sector_display": "44.7%",
          "share_company_display": "44.2%",
          "dominant_share_display": "44.7%"
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-30",
          "n_obs": 19,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "Apr: Mostly sector-driven.",
          "share_market": 0.2506110115330755,
          "share_sector": 0.4828144940203618,
          "share_company": 0.2665744944465626,
          "share_market_display": "25.1%",
          "share_sector_display": "48.3%",
          "share_company_display": "26.7%",
          "dominant_share_display": "48.3%"
        },
        {
          "month_key": "2026-05",
          "month_label": "May 2026",
          "month_short_label": "May",
          "period_label": "2026-05-04 to 2026-05-08",
          "n_obs": 5,
          "partial_month": true,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "May: Mostly sector-driven, though based on only 5 trading days.",
          "share_market": 0.21096166916782597,
          "share_sector": 0.5583107222016289,
          "share_company": 0.23072760863054517,
          "share_market_display": "21.1%",
          "share_sector_display": "55.8%",
          "share_company_display": "23.1%",
          "dominant_share_display": "55.8%"
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
              "median": 0.014871593423656335,
              "low": 0.014871593423656335,
              "high": 0.014871593423656335
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
              "median": 0.02488418772642264,
              "low": 0.02488418772642264,
              "high": 0.02488418772642264
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
          "price": 86.6,
          "quantity": 30400.0,
          "value": 2632640.0
        },
        {
          "level": 2,
          "price": 86.55,
          "quantity": 35200.0,
          "value": 3046560.0
        },
        {
          "level": 3,
          "price": 86.5,
          "quantity": 61600.0,
          "value": 5328400.0
        },
        {
          "level": 4,
          "price": 86.45,
          "quantity": 52600.0,
          "value": 4547270.0
        },
        {
          "level": 5,
          "price": 86.4,
          "quantity": 81000.0,
          "value": 6998400.0
        },
        {
          "level": 6,
          "price": 86.35,
          "quantity": 30400.0,
          "value": 2625040.0
        },
        {
          "level": 7,
          "price": 86.3,
          "quantity": 111600.0,
          "value": 9631080.0
        },
        {
          "level": 8,
          "price": 86.25,
          "quantity": 7400.0,
          "value": 638250.0
        },
        {
          "level": 9,
          "price": 86.2,
          "quantity": 55000.0,
          "value": 4741000.0
        },
        {
          "level": 10,
          "price": 86.15,
          "quantity": 33800.0,
          "value": 2911870.0
        },
        {
          "level": 11,
          "price": 86.1,
          "quantity": 99200.0,
          "value": 8541120.0
        },
        {
          "level": 12,
          "price": 86.05,
          "quantity": 5400.0,
          "value": 464670.0
        },
        {
          "level": 13,
          "price": 86.0,
          "quantity": 153000.0,
          "value": 13158000.0
        },
        {
          "level": 14,
          "price": 85.95,
          "quantity": 47000.0,
          "value": 4039650.0
        },
        {
          "level": 15,
          "price": 85.9,
          "quantity": 26000.0,
          "value": 2233400.0
        },
        {
          "level": 16,
          "price": 85.85,
          "quantity": 132600.0,
          "value": 11383710.0
        },
        {
          "level": 17,
          "price": 85.8,
          "quantity": 19000.0,
          "value": 1630200.0
        },
        {
          "level": 18,
          "price": 85.75,
          "quantity": 131800.0,
          "value": 11301850.0
        },
        {
          "level": 19,
          "price": 85.7,
          "quantity": 11200.0,
          "value": 959840.0
        },
        {
          "level": 20,
          "price": 85.65,
          "quantity": 142600.0,
          "value": 12213690.0
        },
        {
          "level": 21,
          "price": 85.6,
          "quantity": 89400.0,
          "value": 7652639.999999999
        },
        {
          "level": 22,
          "price": 85.55,
          "quantity": 2200.0,
          "value": 188210.0
        },
        {
          "level": 23,
          "price": 85.5,
          "quantity": 55200.0,
          "value": 4719600.0
        },
        {
          "level": 24,
          "price": 85.45,
          "quantity": 1000.0,
          "value": 85450.0
        },
        {
          "level": 25,
          "price": 85.4,
          "quantity": 8000.0,
          "value": 683200.0
        },
        {
          "level": 26,
          "price": 85.35,
          "quantity": 400.0,
          "value": 34140.0
        },
        {
          "level": 27,
          "price": 85.3,
          "quantity": 4000.0,
          "value": 341200.0
        },
        {
          "level": 28,
          "price": 85.25,
          "quantity": 1000.0,
          "value": 85250.0
        },
        {
          "level": 29,
          "price": 85.2,
          "quantity": 1200.0,
          "value": 102240.0
        },
        {
          "level": 30,
          "price": 85.15,
          "quantity": 600.0,
          "value": 51090.0
        },
        {
          "level": 31,
          "price": 85.05,
          "quantity": 1200.0,
          "value": 102060.0
        },
        {
          "level": 32,
          "price": 85.0,
          "quantity": 27400.0,
          "value": 2329000.0
        },
        {
          "level": 33,
          "price": 84.95,
          "quantity": 4000.0,
          "value": 339800.0
        },
        {
          "level": 34,
          "price": 84.9,
          "quantity": 400.0,
          "value": 33960.0
        },
        {
          "level": 35,
          "price": 84.85,
          "quantity": 2400.0,
          "value": 203640.0
        },
        {
          "level": 36,
          "price": 84.8,
          "quantity": 17600.0,
          "value": 1492480.0
        },
        {
          "level": 37,
          "price": 84.75,
          "quantity": 50000.0,
          "value": 4237500.0
        },
        {
          "level": 38,
          "price": 84.7,
          "quantity": 5000.0,
          "value": 423500.0
        },
        {
          "level": 39,
          "price": 84.65,
          "quantity": 5000.0,
          "value": 423250.0
        },
        {
          "level": 40,
          "price": 84.6,
          "quantity": 5400.0,
          "value": 456839.99999999994
        },
        {
          "level": 41,
          "price": 84.55,
          "quantity": 200.0,
          "value": 16910.0
        },
        {
          "level": 42,
          "price": 84.5,
          "quantity": 7800.0,
          "value": 659100.0
        },
        {
          "level": 43,
          "price": 84.4,
          "quantity": 1400.0,
          "value": 118160.00000000001
        },
        {
          "level": 44,
          "price": 84.3,
          "quantity": 1600.0,
          "value": 134880.0
        },
        {
          "level": 45,
          "price": 84.25,
          "quantity": 600.0,
          "value": 50550.0
        },
        {
          "level": 46,
          "price": 84.2,
          "quantity": 3800.0,
          "value": 319960.0
        },
        {
          "level": 47,
          "price": 84.1,
          "quantity": 3600.0,
          "value": 302760.0
        },
        {
          "level": 48,
          "price": 84.05,
          "quantity": 200.0,
          "value": 16810.0
        },
        {
          "level": 49,
          "price": 84.0,
          "quantity": 31400.0,
          "value": 2637600.0
        },
        {
          "level": 50,
          "price": 83.95,
          "quantity": 200.0,
          "value": 16790.0
        },
        {
          "level": 51,
          "price": 83.9,
          "quantity": 600.0,
          "value": 50340.0
        },
        {
          "level": 52,
          "price": 83.85,
          "quantity": 2400.0,
          "value": 201240.0
        },
        {
          "level": 53,
          "price": 83.8,
          "quantity": 32200.0,
          "value": 2698360.0
        },
        {
          "level": 54,
          "price": 83.75,
          "quantity": 1600.0,
          "value": 134000.0
        },
        {
          "level": 55,
          "price": 83.7,
          "quantity": 1200.0,
          "value": 100440.0
        },
        {
          "level": 56,
          "price": 83.6,
          "quantity": 4400.0,
          "value": 367840.0
        },
        {
          "level": 57,
          "price": 83.5,
          "quantity": 5200.0,
          "value": 434200.0
        },
        {
          "level": 58,
          "price": 83.3,
          "quantity": 2000.0,
          "value": 166600.0
        },
        {
          "level": 59,
          "price": 83.2,
          "quantity": 1400.0,
          "value": 116480.0
        },
        {
          "level": 60,
          "price": 83.1,
          "quantity": 800.0,
          "value": 66480.0
        },
        {
          "level": 61,
          "price": 83.05,
          "quantity": 600.0,
          "value": 49830.0
        },
        {
          "level": 62,
          "price": 83.0,
          "quantity": 26600.0,
          "value": 2207800.0
        },
        {
          "level": 63,
          "price": 82.95,
          "quantity": 7000.0,
          "value": 580650.0
        },
        {
          "level": 64,
          "price": 82.85,
          "quantity": 5200.0,
          "value": 430819.99999999994
        },
        {
          "level": 65,
          "price": 82.8,
          "quantity": 13400.0,
          "value": 1109520.0
        },
        {
          "level": 66,
          "price": 82.7,
          "quantity": 200.0,
          "value": 16540.0
        },
        {
          "level": 67,
          "price": 82.6,
          "quantity": 3200.0,
          "value": 264320.0
        },
        {
          "level": 68,
          "price": 82.5,
          "quantity": 10600.0,
          "value": 874500.0
        },
        {
          "level": 69,
          "price": 82.4,
          "quantity": 1000.0,
          "value": 82400.0
        },
        {
          "level": 70,
          "price": 82.35,
          "quantity": 3000.0,
          "value": 247049.99999999997
        },
        {
          "level": 71,
          "price": 82.3,
          "quantity": 2600.0,
          "value": 213980.0
        },
        {
          "level": 72,
          "price": 82.25,
          "quantity": 200.0,
          "value": 16450.0
        },
        {
          "level": 73,
          "price": 82.2,
          "quantity": 3600.0,
          "value": 295920.0
        },
        {
          "level": 74,
          "price": 82.1,
          "quantity": 200.0,
          "value": 16420.0
        },
        {
          "level": 75,
          "price": 82.05,
          "quantity": 1600.0,
          "value": 131280.0
        },
        {
          "level": 76,
          "price": 82.0,
          "quantity": 66000.0,
          "value": 5412000.0
        },
        {
          "level": 77,
          "price": 81.95,
          "quantity": 200.0,
          "value": 16390.0
        },
        {
          "level": 78,
          "price": 81.8,
          "quantity": 1800.0,
          "value": 147240.0
        },
        {
          "level": 79,
          "price": 81.75,
          "quantity": 2200.0,
          "value": 179850.0
        },
        {
          "level": 80,
          "price": 81.65,
          "quantity": 200.0,
          "value": 16330.000000000002
        },
        {
          "level": 81,
          "price": 81.6,
          "quantity": 4600.0,
          "value": 375360.0
        },
        {
          "level": 82,
          "price": 81.55,
          "quantity": 200.0,
          "value": 16310.0
        },
        {
          "level": 83,
          "price": 81.5,
          "quantity": 19200.0,
          "value": 1564800.0
        },
        {
          "level": 84,
          "price": 81.4,
          "quantity": 600.0,
          "value": 48840.0
        },
        {
          "level": 85,
          "price": 81.3,
          "quantity": 2800.0,
          "value": 227640.0
        },
        {
          "level": 86,
          "price": 81.2,
          "quantity": 1600.0,
          "value": 129920.0
        },
        {
          "level": 87,
          "price": 81.05,
          "quantity": 2000.0,
          "value": 162100.0
        },
        {
          "level": 88,
          "price": 81.0,
          "quantity": 95800.0,
          "value": 7759800.0
        },
        {
          "level": 89,
          "price": 80.95,
          "quantity": 43800.0,
          "value": 3545610.0
        },
        {
          "level": 90,
          "price": 80.9,
          "quantity": 800.0,
          "value": 64720.00000000001
        },
        {
          "level": 91,
          "price": 80.85,
          "quantity": 5000.0,
          "value": 404250.0
        },
        {
          "level": 92,
          "price": 80.8,
          "quantity": 5800.0,
          "value": 468640.0
        },
        {
          "level": 93,
          "price": 80.6,
          "quantity": 4600.0,
          "value": 370760.0
        },
        {
          "level": 94,
          "price": 80.55,
          "quantity": 200.0,
          "value": 16110.0
        },
        {
          "level": 95,
          "price": 80.5,
          "quantity": 27800.0,
          "value": 2237900.0
        },
        {
          "level": 96,
          "price": 80.45,
          "quantity": 400.0,
          "value": 32180.0
        },
        {
          "level": 97,
          "price": 80.35,
          "quantity": 10800.0,
          "value": 867779.9999999999
        },
        {
          "level": 98,
          "price": 80.3,
          "quantity": 34400.0,
          "value": 2762320.0
        },
        {
          "level": 99,
          "price": 80.2,
          "quantity": 1200.0,
          "value": 96240.0
        },
        {
          "level": 100,
          "price": 80.1,
          "quantity": 1000.0,
          "value": 80100.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 86.7,
          "quantity": 30600.0,
          "value": 2653020.0
        },
        {
          "level": 2,
          "price": 86.75,
          "quantity": 23600.0,
          "value": 2047300.0
        },
        {
          "level": 3,
          "price": 86.8,
          "quantity": 49600.0,
          "value": 4305280.0
        },
        {
          "level": 4,
          "price": 86.85,
          "quantity": 38000.0,
          "value": 3300300.0
        },
        {
          "level": 5,
          "price": 86.9,
          "quantity": 50800.0,
          "value": 4414520.0
        },
        {
          "level": 6,
          "price": 86.95,
          "quantity": 27600.0,
          "value": 2399820.0
        },
        {
          "level": 7,
          "price": 87.0,
          "quantity": 32800.0,
          "value": 2853600.0
        },
        {
          "level": 8,
          "price": 87.05,
          "quantity": 46200.0,
          "value": 4021710.0
        },
        {
          "level": 9,
          "price": 87.1,
          "quantity": 27400.0,
          "value": 2386540.0
        },
        {
          "level": 10,
          "price": 87.15,
          "quantity": 75400.0,
          "value": 6571110.0
        },
        {
          "level": 11,
          "price": 87.2,
          "quantity": 7200.0,
          "value": 627840.0
        },
        {
          "level": 12,
          "price": 87.25,
          "quantity": 56600.0,
          "value": 4938350.0
        },
        {
          "level": 13,
          "price": 87.3,
          "quantity": 41800.0,
          "value": 3649140.0
        },
        {
          "level": 14,
          "price": 87.35,
          "quantity": 105800.0,
          "value": 9241630.0
        },
        {
          "level": 15,
          "price": 87.4,
          "quantity": 12800.0,
          "value": 1118720.0
        },
        {
          "level": 16,
          "price": 87.45,
          "quantity": 100200.0,
          "value": 8762490.0
        },
        {
          "level": 17,
          "price": 87.5,
          "quantity": 3800.0,
          "value": 332500.0
        },
        {
          "level": 18,
          "price": 87.55,
          "quantity": 128200.0,
          "value": 11223910.0
        },
        {
          "level": 19,
          "price": 87.6,
          "quantity": 1800.0,
          "value": 157680.0
        },
        {
          "level": 20,
          "price": 87.65,
          "quantity": 142000.0,
          "value": 12446300.0
        },
        {
          "level": 21,
          "price": 87.7,
          "quantity": 8200.0,
          "value": 719140.0
        },
        {
          "level": 22,
          "price": 87.75,
          "quantity": 163000.0,
          "value": 14303250.0
        },
        {
          "level": 23,
          "price": 87.8,
          "quantity": 11000.0,
          "value": 965800.0
        },
        {
          "level": 24,
          "price": 87.85,
          "quantity": 6600.0,
          "value": 579810.0
        },
        {
          "level": 25,
          "price": 87.9,
          "quantity": 5800.0,
          "value": 509820.00000000006
        },
        {
          "level": 26,
          "price": 87.95,
          "quantity": 1000.0,
          "value": 87950.0
        },
        {
          "level": 27,
          "price": 88.0,
          "quantity": 38400.0,
          "value": 3379200.0
        },
        {
          "level": 28,
          "price": 88.1,
          "quantity": 14600.0,
          "value": 1286260.0
        },
        {
          "level": 29,
          "price": 88.2,
          "quantity": 200.0,
          "value": 17640.0
        },
        {
          "level": 30,
          "price": 88.3,
          "quantity": 200.0,
          "value": 17660.0
        },
        {
          "level": 31,
          "price": 88.4,
          "quantity": 1200.0,
          "value": 106080.0
        },
        {
          "level": 32,
          "price": 88.5,
          "quantity": 22800.0,
          "value": 2017800.0
        },
        {
          "level": 33,
          "price": 88.6,
          "quantity": 2000.0,
          "value": 177200.0
        },
        {
          "level": 34,
          "price": 88.65,
          "quantity": 600.0,
          "value": 53190.0
        },
        {
          "level": 35,
          "price": 88.7,
          "quantity": 600.0,
          "value": 53220.0
        },
        {
          "level": 36,
          "price": 88.75,
          "quantity": 2000.0,
          "value": 177500.0
        },
        {
          "level": 37,
          "price": 88.8,
          "quantity": 600.0,
          "value": 53280.0
        },
        {
          "level": 38,
          "price": 88.85,
          "quantity": 200.0,
          "value": 17770.0
        },
        {
          "level": 39,
          "price": 88.9,
          "quantity": 2800.0,
          "value": 248920.00000000003
        },
        {
          "level": 40,
          "price": 88.95,
          "quantity": 2200.0,
          "value": 195690.0
        },
        {
          "level": 41,
          "price": 89.0,
          "quantity": 56000.0,
          "value": 4984000.0
        },
        {
          "level": 42,
          "price": 89.1,
          "quantity": 200.0,
          "value": 17820.0
        },
        {
          "level": 43,
          "price": 89.15,
          "quantity": 14800.0,
          "value": 1319420.0
        },
        {
          "level": 44,
          "price": 89.2,
          "quantity": 1200.0,
          "value": 107040.0
        },
        {
          "level": 45,
          "price": 89.25,
          "quantity": 1200.0,
          "value": 107100.0
        },
        {
          "level": 46,
          "price": 89.3,
          "quantity": 2400.0,
          "value": 214320.0
        },
        {
          "level": 47,
          "price": 89.4,
          "quantity": 5200.0,
          "value": 464880.00000000006
        },
        {
          "level": 48,
          "price": 89.5,
          "quantity": 313200.0,
          "value": 28031400.0
        },
        {
          "level": 49,
          "price": 89.6,
          "quantity": 7400.0,
          "value": 663040.0
        },
        {
          "level": 50,
          "price": 89.65,
          "quantity": 2000.0,
          "value": 179300.0
        },
        {
          "level": 51,
          "price": 89.75,
          "quantity": 2000.0,
          "value": 179500.0
        },
        {
          "level": 52,
          "price": 89.8,
          "quantity": 19000.0,
          "value": 1706200.0
        },
        {
          "level": 53,
          "price": 89.85,
          "quantity": 200.0,
          "value": 17970.0
        },
        {
          "level": 54,
          "price": 89.9,
          "quantity": 9200.0,
          "value": 827080.0
        },
        {
          "level": 55,
          "price": 89.95,
          "quantity": 9800.0,
          "value": 881510.0
        },
        {
          "level": 56,
          "price": 90.0,
          "quantity": 366800.0,
          "value": 33012000.0
        },
        {
          "level": 57,
          "price": 90.05,
          "quantity": 200.0,
          "value": 18010.0
        },
        {
          "level": 58,
          "price": 90.1,
          "quantity": 3600.0,
          "value": 324360.0
        },
        {
          "level": 59,
          "price": 90.15,
          "quantity": 3000.0,
          "value": 270450.0
        },
        {
          "level": 60,
          "price": 90.2,
          "quantity": 4600.0,
          "value": 414920.0
        },
        {
          "level": 61,
          "price": 90.3,
          "quantity": 4600.0,
          "value": 415380.0
        },
        {
          "level": 62,
          "price": 90.35,
          "quantity": 1000.0,
          "value": 90350.0
        },
        {
          "level": 63,
          "price": 90.4,
          "quantity": 3400.0,
          "value": 307360.0
        },
        {
          "level": 64,
          "price": 90.45,
          "quantity": 3200.0,
          "value": 289440.0
        },
        {
          "level": 65,
          "price": 90.5,
          "quantity": 55200.0,
          "value": 4995600.0
        },
        {
          "level": 66,
          "price": 90.55,
          "quantity": 400.0,
          "value": 36220.0
        },
        {
          "level": 67,
          "price": 90.6,
          "quantity": 7800.0,
          "value": 706680.0
        },
        {
          "level": 68,
          "price": 90.65,
          "quantity": 10000.0,
          "value": 906500.0
        },
        {
          "level": 69,
          "price": 90.7,
          "quantity": 2600.0,
          "value": 235820.0
        },
        {
          "level": 70,
          "price": 90.75,
          "quantity": 5800.0,
          "value": 526350.0
        },
        {
          "level": 71,
          "price": 90.8,
          "quantity": 9000.0,
          "value": 817200.0
        },
        {
          "level": 72,
          "price": 90.85,
          "quantity": 1600.0,
          "value": 145360.0
        },
        {
          "level": 73,
          "price": 90.9,
          "quantity": 12000.0,
          "value": 1090800.0
        },
        {
          "level": 74,
          "price": 90.95,
          "quantity": 7200.0,
          "value": 654840.0
        },
        {
          "level": 75,
          "price": 91.0,
          "quantity": 103200.0,
          "value": 9391200.0
        },
        {
          "level": 76,
          "price": 91.05,
          "quantity": 400.0,
          "value": 36420.0
        },
        {
          "level": 77,
          "price": 91.1,
          "quantity": 9600.0,
          "value": 874560.0
        },
        {
          "level": 78,
          "price": 91.2,
          "quantity": 33200.0,
          "value": 3027840.0
        },
        {
          "level": 79,
          "price": 91.25,
          "quantity": 4000.0,
          "value": 365000.0
        },
        {
          "level": 80,
          "price": 91.3,
          "quantity": 2000.0,
          "value": 182600.0
        },
        {
          "level": 81,
          "price": 91.45,
          "quantity": 26000.0,
          "value": 2377700.0
        },
        {
          "level": 82,
          "price": 91.5,
          "quantity": 32200.0,
          "value": 2946300.0
        },
        {
          "level": 83,
          "price": 91.6,
          "quantity": 7000.0,
          "value": 641200.0
        },
        {
          "level": 84,
          "price": 91.7,
          "quantity": 1200.0,
          "value": 110040.0
        },
        {
          "level": 85,
          "price": 91.75,
          "quantity": 1400.0,
          "value": 128450.0
        },
        {
          "level": 86,
          "price": 91.8,
          "quantity": 9400.0,
          "value": 862920.0
        },
        {
          "level": 87,
          "price": 91.85,
          "quantity": 200.0,
          "value": 18370.0
        },
        {
          "level": 88,
          "price": 91.9,
          "quantity": 5000.0,
          "value": 459500.0
        },
        {
          "level": 89,
          "price": 91.95,
          "quantity": 6200.0,
          "value": 570090.0
        },
        {
          "level": 90,
          "price": 92.0,
          "quantity": 220600.0,
          "value": 20295200.0
        },
        {
          "level": 91,
          "price": 92.05,
          "quantity": 200.0,
          "value": 18410.0
        },
        {
          "level": 92,
          "price": 92.1,
          "quantity": 2200.0,
          "value": 202620.0
        },
        {
          "level": 93,
          "price": 92.15,
          "quantity": 6800.0,
          "value": 626620.0
        },
        {
          "level": 94,
          "price": 92.2,
          "quantity": 17000.0,
          "value": 1567400.0
        },
        {
          "level": 95,
          "price": 92.25,
          "quantity": 600.0,
          "value": 55350.0
        },
        {
          "level": 96,
          "price": 92.3,
          "quantity": 2200.0,
          "value": 203060.0
        },
        {
          "level": 97,
          "price": 92.4,
          "quantity": 200.0,
          "value": 18480.0
        },
        {
          "level": 98,
          "price": 92.45,
          "quantity": 400.0,
          "value": 36980.0
        },
        {
          "level": 99,
          "price": 92.5,
          "quantity": 23200.0,
          "value": 2146000.0
        },
        {
          "level": 100,
          "price": 92.55,
          "quantity": 5000.0,
          "value": 462750.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-05-08 07:59:59.623000000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XHKG",
        "mid_price": 86.65,
        "spread_pct": 0.0011540680900174094,
        "spread_ticks": 2.0,
        "tick_size": 0.05,
        "displayed_levels_per_side": 100,
        "bid_depth_notional_displayed": 175161860.0,
        "ask_depth_notional_displayed": 245002220.0,
        "bid_depth_notional_top10": 175161860.0,
        "ask_depth_notional_top10": 245002220.0,
        "bid_ask_depth_ratio": 0.7149
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 366,
        "history_limited": false,
        "trade_days_used": 242,
        "n_trades_used": 3624203,
        "first_trade_date": "2025-05-08",
        "last_trade_date": "2026-05-08",
        "window_label": "May 8, 2025 to May 8, 2026",
        "window_short_label": "May 8, 2025 to May 8, 2026",
        "trade_days_label": "242 trading days",
        "trade_count_label": "3,624,203 trades",
        "window_detail_label": "242 trading days • 3,624,203 trades",
        "history_note": "Trade-size percentiles use May 8, 2025 to May 8, 2026 history (242 trading days • 3,624,203 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 252300.0,
            "impact_pct": -0.000577,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.14,
            "pct_of_adv": 0.01
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 462840.0,
            "impact_pct": -0.000577,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.26,
            "pct_of_adv": 0.02
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 34564008.85,
            "impact_pct": -0.002661,
            "filled_pct": 100.0,
            "levels_consumed": 7,
            "pct_of_bid_depth": 19.73,
            "pct_of_adv": 1.71
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-05-08",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "4712740867",
            "timestamp": "2026-05-08 07:31:31.757000000",
            "local_timestamp": "2026-05-08 15:31:31",
            "posted_price": 89.5,
            "size_shares": 255000.0,
            "notional": 22822500.0,
            "impact_pct": -0.002011,
            "filled_pct": 100.0,
            "levels_consumed": 6,
            "pct_of_bid_depth": 13.03,
            "price_vs_mid_pct": 3.289,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "2971712259",
            "timestamp": "2026-05-08 05:04:11.465000000",
            "local_timestamp": "2026-05-08 13:04:11",
            "posted_price": 86.65,
            "size_shares": 225800.0,
            "notional": 19565570.0,
            "impact_pct": -0.0018570000000000001,
            "filled_pct": 100.0,
            "levels_consumed": 5,
            "pct_of_bid_depth": 11.17,
            "price_vs_mid_pct": 0.0,
            "executed_event_count": 0,
            "event_count": 31
          },
          {
            "rank": 3,
            "order_id": "21757443",
            "timestamp": "2026-05-08 01:20:21.029000000",
            "local_timestamp": "2026-05-08 09:20:21",
            "posted_price": 86.7,
            "size_shares": 187600.0,
            "notional": 16264920.0,
            "impact_pct": -0.001648,
            "filled_pct": 100.0,
            "levels_consumed": 5,
            "pct_of_bid_depth": 9.29,
            "price_vs_mid_pct": 0.058,
            "executed_event_count": 0,
            "event_count": 1
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-05-08",
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
            "spread_pct": 0.0005748778384592947,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 134079080.0,
            "ask_depth_notional": 166713060.0,
            "mid_price": 86.975
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.0011500862564691697,
            "spread_ticks": 1.9999999999998863,
            "bid_depth_notional": 138741030.0,
            "ask_depth_notional": 163975270.0,
            "mid_price": 86.95
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.0005768676088837283,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 150632940.0,
            "ask_depth_notional": 175574640.0,
            "mid_price": 86.67500000000001
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.0005765350245027058,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 159462460.0,
            "ask_depth_notional": 180121490.0,
            "mid_price": 86.725
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.0005755395683454546,
            "spread_ticks": 1.0000000000002274,
            "bid_depth_notional": 147627760.0,
            "ask_depth_notional": 161070970.0,
            "mid_price": 86.875
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.0005772005772007084,
            "spread_ticks": 1.0000000000002274,
            "bid_depth_notional": 148894290.0,
            "ask_depth_notional": 186813600.0,
            "mid_price": 86.625
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.0005782017924255237,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 150391940.0,
            "ask_depth_notional": 208322660.0,
            "mid_price": 86.475
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.0005778676683039255,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 159253100.0,
            "ask_depth_notional": 211251660.0,
            "mid_price": 86.525
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.0005752085130859609,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 169087350.0,
            "ask_depth_notional": 182468640.0,
            "mid_price": 86.92500000000001
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.0005752085130859609,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 173308240.0,
            "ask_depth_notional": 177055190.0,
            "mid_price": 86.92500000000001
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.0011540680900174094,
            "spread_ticks": 2.0000000000001705,
            "bid_depth_notional": 175161860.0,
            "ask_depth_notional": 245002220.0,
            "mid_price": 86.65
          }
        ],
        "summary": {
          "median_spread_pct": 0.0005768676088837283,
          "median_spread_ticks": 0.9999999999999432,
          "median_bid_depth_notional": 150632940.0,
          "median_ask_depth_notional": 180121490.0,
          "tightest_bucket": "09:30",
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
          "ticker": "2318",
          "pct": 0.1
        },
        {
          "ticker": "2628",
          "pct": 0.1
        },
        {
          "ticker": "1336",
          "pct": 0.2
        },
        {
          "ticker": "2328",
          "pct": 0.2
        },
        {
          "ticker": "2601",
          "pct": 0.3
        },
        {
          "ticker": "1339",
          "pct": 0.4
        },
        {
          "ticker": "966",
          "pct": 0.5
        },
        {
          "ticker": "6060",
          "pct": 1.1
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 7437,
          "n_runs": 0,
          "n_trade_days": 1,
          "first_trade_date": "2026-05-08",
          "last_trade_date": "2026-05-08",
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
            "retail_pct": 0.5572139303482587,
            "mixed_pct": 0.34409035901573215,
            "instit_pct": 0.09869571063600914,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.08720956316515602,
            "mixed_qty_pct": 0.24084835805142474,
            "instit_qty_pct": 0.6719420787834193,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.08710230510368788,
            "mixed_notional_pct": 0.24077715805163838,
            "instit_notional_pct": 0.6721205368446737,
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
              "retail": 4144,
              "mixed": 2559,
              "institutional": 734,
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
            "avg": 230236.99833938418,
            "median": 69320.0
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
          "n_trades": 127069,
          "n_runs": 0,
          "n_trade_days": 21,
          "first_trade_date": "2026-04-09",
          "last_trade_date": "2026-05-08",
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
            "retail_pct": 0.5820066263211326,
            "mixed_pct": 0.30714021515869333,
            "instit_pct": 0.11085315852017408,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.07768160809233955,
            "mixed_qty_pct": 0.19822112615593063,
            "instit_qty_pct": 0.7240972657517298,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.07759142660610713,
            "mixed_notional_pct": 0.1982472285840045,
            "instit_notional_pct": 0.7241613448098883,
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
              "retail": 73955,
              "mixed": 39028,
              "institutional": 14086,
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
            "avg": 240748.69520614785,
            "median": 53460.0
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
          "n_trades": 405315,
          "n_runs": 0,
          "n_trade_days": 63,
          "first_trade_date": "2026-02-02",
          "last_trade_date": "2026-05-08",
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
            "retail_pct": 0.5884632939812244,
            "mixed_pct": 0.2859356303122263,
            "instit_pct": 0.12560107570654921,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.07666941283582945,
            "mixed_qty_pct": 0.18031504990558603,
            "instit_qty_pct": 0.7430155372585845,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.07660028455258418,
            "mixed_notional_pct": 0.1803787301287589,
            "instit_notional_pct": 0.743020985318657,
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
              "retail": 238513,
              "mixed": 115894,
              "institutional": 50908,
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
            "avg": 251742.96036321876,
            "median": 52530.0
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
          "n_trades": 725253,
          "n_runs": 0,
          "n_trade_days": 126,
          "first_trade_date": "2025-10-22",
          "last_trade_date": "2026-05-08",
          "period_days": 198,
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
            "retail_pct": 0.5833743535014677,
            "mixed_pct": 0.28670270926145774,
            "instit_pct": 0.12992293723707452,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.07385656004861028,
            "mixed_qty_pct": 0.18124048197996903,
            "instit_qty_pct": 0.7449029579714207,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.07381390805678188,
            "mixed_notional_pct": 0.18135903301816791,
            "instit_notional_pct": 0.7448270589250503,
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
              "retail": 423094,
              "mixed": 207932,
              "institutional": 94227,
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
            "avg": 253231.47353848798,
            "median": 53970.0
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
      "n_trades": 725253,
      "n_runs": 0,
      "n_trade_days": 126,
      "first_trade_date": "2025-10-22",
      "last_trade_date": "2026-05-08",
      "period_days": 198,
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
        "retail_pct": 0.5833743535014677,
        "mixed_pct": 0.28670270926145774,
        "instit_pct": 0.12992293723707452,
        "ambiguous_pct": null,
        "unobservable_pct": null,
        "unclear_pct": null,
        "retail_qty_pct": null,
        "mixed_qty_pct": null,
        "instit_qty_pct": null,
        "ambiguous_qty_pct": null,
        "unobservable_qty_pct": null,
        "unclear_qty_pct": null,
        "retail_notional_pct": 0.07381390805678188,
        "mixed_notional_pct": 0.18135903301816791,
        "instit_notional_pct": 0.7448270589250503,
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
        "avg": 253231.47353848798,
        "median": 53970.0
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
            "n_trades": 21292,
            "n_runs": 0,
            "retail_pct": 0.5654236332894984,
            "mixed_pct": 0.3138267894044712,
            "instit_pct": 0.12074957730603043,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 258773.6819946459,
            "avg_run_notional": null,
            "retail_qty_pct": 0.06590799565019899,
            "mixed_qty_pct": 0.19422087697259038,
            "instit_qty_pct": 0.7398711273772106,
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
            "total_quantity": 63216685.0
          },
          {
            "month": "2026-04",
            "n_trades": 117623,
            "n_runs": 0,
            "retail_pct": 0.578934392083181,
            "mixed_pct": 0.3021347865638523,
            "instit_pct": 0.11893082135296668,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 250215.47358909398,
            "avg_run_notional": null,
            "retail_qty_pct": 0.07479609665439028,
            "mixed_qty_pct": 0.18885528904184967,
            "instit_qty_pct": 0.7363486143037601,
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
            "total_quantity": 345323662.0
          },
          {
            "month": "2026-03",
            "n_trades": 155806,
            "n_runs": 0,
            "retail_pct": 0.58708907230787,
            "mixed_pct": 0.28464885819544816,
            "instit_pct": 0.12826206949668176,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 244972.78351865784,
            "avg_run_notional": null,
            "retail_qty_pct": 0.08160985566476756,
            "mixed_qty_pct": 0.1838186563163455,
            "instit_qty_pct": 0.7345714880188869,
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
            "total_quantity": 454249866.0
          },
          {
            "month": "2026-02",
            "n_trades": 103157,
            "n_runs": 0,
            "retail_pct": 0.608412419903642,
            "mixed_pct": 0.25945888306174086,
            "instit_pct": 0.13212869703461713,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 263809.4557524938,
            "avg_run_notional": null,
            "retail_qty_pct": 0.07314528674382856,
            "mixed_qty_pct": 0.1595952097665331,
            "instit_qty_pct": 0.7672595034896383,
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
            "total_quantity": 319202563.0
          },
          {
            "month": "2026-01",
            "n_trades": 111891,
            "n_runs": 0,
            "retail_pct": 0.5482925346989481,
            "mixed_pct": 0.3086932818546621,
            "instit_pct": 0.1430141834463898,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 255511.71618387537,
            "avg_run_notional": null,
            "retail_qty_pct": 0.06885604293684644,
            "mixed_qty_pct": 0.19897859077240837,
            "instit_qty_pct": 0.7321653662907452,
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
            "total_quantity": 335092332.0
          },
          {
            "month": "2025-12",
            "n_trades": 62972,
            "n_runs": 0,
            "retail_pct": 0.6131296449215524,
            "mixed_pct": 0.2668328781045544,
            "instit_pct": 0.12003747697389316,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 225938.52922487774,
            "avg_run_notional": null,
            "retail_qty_pct": 0.08347719683973497,
            "mixed_qty_pct": 0.1953639163449671,
            "instit_qty_pct": 0.7211588868152979,
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
            "total_quantity": 176735810.0
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
      "total_trades": 647566,
      "price_moving_trades": 236162,
      "pct_price_moving": 36.46917843123326,
      "all_movers": {
        "count": 236162,
        "avg_size": 272867.2542184009,
        "median_size": 53730.0,
        "retail_count": 137609,
        "mixed_count": 66097,
        "institutional_count": 32456,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 58.268900161753365,
        "mixed_pct": 27.98799129411167,
        "instit_pct": 13.743108544134957,
        "unclear_pct": null
      },
      "positive_movers": {
        "count": 117991,
        "avg_size": 281130.72585519234,
        "median_size": 65520.0,
        "retail_count": 66186,
        "mixed_count": 34978,
        "institutional_count": 16827,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 56.094108872710635,
        "mixed_pct": 29.644633912756056,
        "instit_pct": 14.261257214533313,
        "unclear_pct": null
      },
      "negative_movers": {
        "count": 118171,
        "avg_size": 264616.3696367637,
        "median_size": 51120.0,
        "retail_count": 71423,
        "mixed_count": 31119,
        "institutional_count": 15629,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 60.44037877313385,
        "mixed_pct": 26.333872100599976,
        "instit_pct": 13.225749126266173,
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
          "opening": 0.09121889815660275,
          "continuous": 0.6815828566303839,
          "closing": 0.1483203794541483,
          "auctions": 0.23953927761075106,
          "other": 0.07887786575886506
        },
        "1M": {
          "opening": 0.07247218123164714,
          "continuous": 0.6883146017644222,
          "closing": 0.16036853754989203,
          "auctions": 0.23284071878153917,
          "other": 0.07884467945403863
        },
        "3M": {
          "opening": 0.06812523310231766,
          "continuous": 0.650038291088765,
          "closing": 0.16621010750686765,
          "auctions": 0.23433534060918532,
          "other": 0.11562636830204948
        },
        "6M": {
          "opening": 0.06933746200821925,
          "continuous": 0.6522397200931945,
          "closing": 0.1704834132045417,
          "auctions": 0.23982087521276094,
          "other": 0.10793940469404441
        }
      },
      "hhi": {
        "1D": 0.1124897113782093,
        "1M": 0.11575221356798675,
        "3M": 0.12037671882688465,
        "6M": 0.12080064688729221
      },
      "profile_buckets": [
        {
          "time": "09:00",
          "avg_share": 0.1113
        },
        {
          "time": "09:30",
          "avg_share": 0.1383
        },
        {
          "time": "10:00",
          "avg_share": 0.0591
        },
        {
          "time": "10:30",
          "avg_share": 0.0498
        },
        {
          "time": "11:00",
          "avg_share": 0.0385
        },
        {
          "time": "11:30",
          "avg_share": 0.0276
        },
        {
          "time": "12:00",
          "avg_share": 0.1159
        },
        {
          "time": "13:00",
          "avg_share": 0.0457
        },
        {
          "time": "13:30",
          "avg_share": 0.0358
        },
        {
          "time": "14:00",
          "avg_share": 0.0367
        },
        {
          "time": "14:30",
          "avg_share": 0.0378
        },
        {
          "time": "15:00",
          "avg_share": 0.0506
        },
        {
          "time": "15:30",
          "avg_share": 0.1058
        },
        {
          "time": "16:00",
          "avg_share": 0.1474
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "1299",
          "auctions_pct": 23.891977255512796,
          "hhi": 0.12012591655225084,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400",
            "you": true
          }
        },
        {
          "ticker": "2318",
          "auctions_pct": 9.602785693241358,
          "hhi": 0.10502446441774207,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "2628",
          "auctions_pct": 6.22767924756057,
          "hhi": 0.11503239476542207,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "2328",
          "auctions_pct": 11.074237929839168,
          "hhi": 0.11456810077931621,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "1336",
          "auctions_pct": 4.370496037512578,
          "hhi": 0.1205757512157943,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "2601",
          "auctions_pct": 6.5778410129849805,
          "hhi": 0.1121110299170043,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "1339",
          "auctions_pct": 7.3395251420880765,
          "hhi": 0.11877106324603451,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "966",
          "auctions_pct": 4.839402053731515,
          "hhi": 0.11577378413927034,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "6060",
          "auctions_pct": 4.51758226996953,
          "hhi": 0.12275237693669522,
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
