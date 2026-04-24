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
      "ticker": "1723",
      "name": "MOON INC",
      "marketCap": 468706560.0,
      "sector": "Diversified Retailers",
      "industry": "Consumer Discretionary - Specialty Retail"
    },
    {
      "ticker": "244",
      "name": "SINCERE",
      "marketCap": 413898206.4,
      "sector": "Diversified Retailers",
      "industry": "Consumer Discretionary - Specialty Retail"
    },
    {
      "ticker": "825",
      "name": "NWDS CHINA",
      "marketCap": 539566400.0,
      "sector": "Diversified Retailers",
      "industry": "Consumer Discretionary - Specialty Retail"
    },
    {
      "ticker": "312",
      "name": "SHIRBLE STORE",
      "marketCap": 127244999.99999999,
      "sector": "Diversified Retailers",
      "industry": "Consumer Discretionary - Specialty Retail"
    },
    {
      "ticker": "3368",
      "name": "PARKSON GROUP",
      "marketCap": 395179837.5,
      "sector": "Diversified Retailers",
      "industry": "Consumer Discretionary - Specialty Retail"
    },
    {
      "ticker": "848",
      "name": "MAOYE INT'L",
      "marketCap": 627119772.0,
      "sector": "Diversified Retailers",
      "industry": "Consumer Discretionary - Specialty Retail"
    },
    {
      "ticker": "974",
      "name": "SKL",
      "marketCap": 246888450.0,
      "sector": "Diversified Retailers",
      "industry": "Consumer Discretionary - Specialty Retail"
    },
    {
      "ticker": "162",
      "name": "CENTURY GINWA",
      "marketCap": 47137483.315000005,
      "sector": "Diversified Retailers",
      "industry": "Consumer Discretionary - Specialty Retail"
    },
    {
      "ticker": "602",
      "name": "JIAHUA STORES H",
      "marketCap": 41500000.08,
      "sector": "Diversified Retailers",
      "industry": "Consumer Discretionary - Specialty Retail"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XHKG",
    "currency": "HKD",
    "ticker": "1723",
    "company": "MOON INC",
    "asof_date": "2026-04-10",
    "industry": "Consumer Discretionary - Specialty Retail",
    "sector": "Diversified Retailers",
    "market_cap_display": "468.7M",
    "market_cap_category": "small",
    "universe_total": 2574,
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
          "score_pca": 71.60062160062161,
          "score_pca_percentile": 71.60062160062161,
          "rank_pca": 732,
          "total": 2574,
          "adv_notional_sgd": 842930.0,
          "adv_volume_shares": 869000.0,
          "free_float_shares": 145094000.0,
          "turnover_ratio": 0.005989220781010931,
          "votes": 103.0,
          "trades": 103.0,
          "spread_pct": 0.06780881823326641,
          "spread_ticks": 7.349442379182156,
          "amihud": 1.0072682236645817e-07,
          "volatility": 2.3063112929067873
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5400312061344495,
          "loadings": {
            "log_adv": 0.5402030371846864,
            "log_trades": 0.5011844990984181,
            "log_turnover": 0.501736680482201,
            "neg_spread": 0.3936678213155001,
            "neg_amihud": 0.04034418799513263,
            "neg_vol": -0.2205744157746564
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
          "peer_median_adv": 10785.0,
          "peer_median_score_pca": 23.44599844599845,
          "peer_median_trades": 4.0,
          "peer_median_volatility": 0.05641257296939997,
          "peer_median_spread_pct": 0.0747653597816681,
          "peer_median_spread_ticks": 5.211229946524064,
          "peer_median_amihud": 1.8964022712434636e-06,
          "peer_median_turnover_ratio": 4.895698599723548e-05,
          "target_vs_peer": {
            "score_pca_delta": 48.15,
            "adv_delta_pct": 7715.8,
            "trades_delta_pct": 2475.0,
            "volatility_delta_pct": -3988.29,
            "spread_pct_delta_pct": 9.3,
            "spread_ticks_delta_pct": 41.03,
            "amihud_delta_pct": 94.69,
            "turnover_ratio_delta_pct": 12133.64
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1723",
            "score_pca": 71.60062160062161,
            "rank_pca": 732,
            "adv": 842930.0,
            "trades": 103.0,
            "volatility": 2.3063112929067873,
            "spread_pct": 0.06780881823326641,
            "spread_ticks": 7.349442379182156,
            "amihud": 1.0072682236645817e-07,
            "turnover_ratio": 0.005989220781010931,
            "is_target": true
          },
          {
            "ticker": "244",
            "score_pca": 13.947163947163945,
            "rank_pca": 2216,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.016000000000000014,
            "spread_ticks": 1.0,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "825",
            "score_pca": 30.61383061383061,
            "rank_pca": 1787,
            "adv": 26880.0,
            "trades": 7.0,
            "volatility": 0.5868691636329498,
            "spread_pct": 0.046948356807511776,
            "spread_ticks": 3.0303030303030303,
            "amihud": 0.0,
            "turnover_ratio": 4.981777960970142e-05,
            "is_target": false
          },
          {
            "ticker": "312",
            "score_pca": 29.37062937062937,
            "rank_pca": 1819,
            "adv": 6120.0,
            "trades": 10.0,
            "volatility": 1.3891600994246835,
            "spread_pct": 0.09263913824057454,
            "spread_ticks": 5.0588235294117645,
            "amihud": 2.2155754957350166e-05,
            "turnover_ratio": 4.809619238476954e-05,
            "is_target": false
          },
          {
            "ticker": "3368",
            "score_pca": 23.465423465423466,
            "rank_pca": 1971,
            "adv": 15450.0,
            "trades": 2.0,
            "volatility": 0.0,
            "spread_pct": 0.047124398277172574,
            "spread_ticks": 7.153846153846154,
            "amihud": 0.0,
            "turnover_ratio": 0.00016490560554979409,
            "is_target": false
          },
          {
            "ticker": "848",
            "score_pca": 23.426573426573427,
            "rank_pca": 1972,
            "adv": 38674.0,
            "trades": 9.0,
            "volatility": 0.0,
            "spread_pct": 0.0854970875703426,
            "spread_ticks": 10.560975609756097,
            "amihud": 1.3374395700220943e-06,
            "turnover_ratio": 6.166924043338885e-05,
            "is_target": false
          },
          {
            "ticker": "974",
            "score_pca": 25.602175602175603,
            "rank_pca": 1916,
            "adv": 36550.0,
            "trades": 2.0,
            "volatility": 0.11282514593879994,
            "spread_pct": 0.06519337016574578,
            "spread_ticks": 5.363636363636363,
            "amihud": 2.455364972464833e-06,
            "turnover_ratio": 0.0007375809844623763,
            "is_target": false
          },
          {
            "ticker": "162",
            "score_pca": 0.9712509712509712,
            "rank_pca": 2550,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.29689737470167066,
            "spread_ticks": 13.521739130434783,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "602",
            "score_pca": 22.843822843822846,
            "rank_pca": 1987,
            "adv": 800.0,
            "trades": 6.0,
            "volatility": 1.2730366958631603,
            "spread_pct": 0.0843373493975904,
            "spread_ticks": 3.230769230769231,
            "amihud": 0.00013888888888888894,
            "turnover_ratio": 1.927710839657425e-05,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Diversified Retailers",
          "sector_count": 12,
          "market_count": 2574,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4494884703154094,
              "median": 0.3061697294598438,
              "min": 0.0,
              "max": 9.393313124786681,
              "p5": 0.0,
              "p95": 1.3813199111878136,
              "count": 2574
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 67524985.69707848,
              "median": 281655.0,
              "min": 0.0,
              "max": 10425795200.0,
              "p5": 0.0,
              "p95": 282285197.7139998,
              "count": 2574
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04878238946505183,
              "median": 0.028148482980643118,
              "min": 0.0004478493785191276,
              "max": 0.7648559970834851,
              "p5": 0.0013854669278569338,
              "p95": 0.16126579974852753,
              "count": 2574
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006494092693337297,
              "median": 0.0011575575535619843,
              "min": 0.0,
              "max": 0.7118303545605582,
              "p5": 0.0,
              "p95": 0.022477492092257197,
              "count": 2553
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.1276946470376172e-05,
              "median": 5.654850542300145e-09,
              "min": 0.0,
              "max": 0.014034878165312945,
              "p5": 0.0,
              "p95": 5.854475045424379e-06,
              "count": 2211
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1262.1495726495727,
              "median": 23.0,
              "min": 0.0,
              "max": 97719.0,
              "p5": 0.0,
              "p95": 6548.449999999997,
              "count": 2574
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5347277390606915,
              "median": 0.20538740928994328,
              "min": 0.0,
              "max": 2.3063112929067873,
              "p5": 0.0,
              "p95": 1.8018781364916296,
              "count": 12
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 8963651.883333335,
              "median": 31715.0,
              "min": 0.0,
              "max": 106170993.60000001,
              "p5": 0.0,
              "p95": 48240558.61999993,
              "count": 12
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.07119825500192586,
              "median": 0.05615888422145918,
              "min": 0.0009583219473853984,
              "max": 0.29689737470167066,
              "p5": 0.009231244876323437,
              "p95": 0.18455534464806767,
              "count": 12
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0012484620399901168,
              "median": 9.111309080017945e-05,
              "min": 0.0,
              "max": 0.007537423582402833,
              "p5": 0.0,
              "p95": 0.006685912041637286,
              "count": 12
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.651777618194613e-05,
              "median": 1.5082452770807805e-07,
              "min": 0.0,
              "max": 0.00013888888888888894,
              "p5": 0.0,
              "p95": 8.635897861969638e-05,
              "count": 10
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 425.8333333333333,
              "median": 6.5,
              "min": 0.0,
              "max": 4957.0,
              "p5": 0.0,
              "p95": 2287.2999999999965,
              "count": 12
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 15559.25,
              "median": 10785.0,
              "min": 0.0,
              "max": 38674.0,
              "p5": 0.0,
              "p95": 37930.6,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 4.5,
              "median": 4.0,
              "min": 0.0,
              "max": 10.0,
              "p5": 0.0,
              "p95": 9.649999999999999,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.42023638810744923,
              "median": 0.05641257296939997,
              "min": 0.0,
              "max": 1.3891600994246835,
              "p5": 0.0,
              "p95": 1.3485169081781503,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09182963439507605,
              "median": 0.0747653597816681,
              "min": 0.016000000000000014,
              "max": 0.29689737470167066,
              "p5": 0.02683192488262913,
              "p95": 0.2254069919402869,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 6.115011631019678,
              "median": 5.211229946524064,
              "min": 1.0,
              "max": 13.521739130434783,
              "p5": 1.7106060606060607,
              "p95": 12.485471898197241,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00013516836385457556,
              "median": 4.895698599723548e-05,
              "min": 0.0,
              "max": 0.0007375809844623763,
              "p5": 0.0,
              "p95": 0.0005371446018429722,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.747290806478767e-05,
              "median": 1.8964022712434636e-06,
              "min": 0.0,
              "max": 0.00013888888888888894,
              "p5": 0.0,
              "p95": 0.00010970560540600425,
              "count": 6
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": -0.08490566037735858,
            "market": 0.005388454653585173,
            "sector": 0.0,
            "peers": 0.0,
            "vs_market": -0.09029411503094376,
            "vs_sector": -0.08490566037735858,
            "vs_peers": -0.08490566037735858
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 47.474747474747474,
          "score_pca_percentile": 47.474747474747474,
          "rank_pca": 1353,
          "total": 2574,
          "adv_notional_sgd": 185300.0,
          "adv_volume_shares": 170000.0,
          "free_float_shares": 145094000.0,
          "turnover_ratio": 0.0011716542379422994,
          "votes": 19.0,
          "trades": 19.0,
          "spread_pct": 0.04206250409486991,
          "spread_ticks": 4.428571428571429,
          "amihud": 1.4261472814408129e-07,
          "volatility": 0.6923852219282792
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5765422626267434,
          "loadings": {
            "log_adv": 0.5181502180452965,
            "log_trades": 0.472209798428735,
            "log_turnover": 0.4790056355441266,
            "neg_spread": 0.4588008013303223,
            "neg_amihud": 0.24954417455040834,
            "neg_vol": 0.07950716050194355
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
          "peer_median_adv": 4800.0,
          "peer_median_score_pca": 18.298368298368295,
          "peer_median_trades": 2.5,
          "peer_median_volatility": 0.5776212680203765,
          "peer_median_spread_pct": 0.07833353341645702,
          "peer_median_spread_ticks": 5.223856209150327,
          "peer_median_amihud": 1.2430121415387563e-06,
          "peer_median_turnover_ratio": 6.019267443596149e-05,
          "target_vs_peer": {
            "score_pca_delta": 29.18,
            "adv_delta_pct": 3760.4,
            "trades_delta_pct": 660.0,
            "volatility_delta_pct": -19.87,
            "spread_pct_delta_pct": 46.3,
            "spread_ticks_delta_pct": -15.22,
            "amihud_delta_pct": 88.53,
            "turnover_ratio_delta_pct": 1846.51
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1723",
            "score_pca": 47.474747474747474,
            "rank_pca": 1353,
            "adv": 185300.0,
            "trades": 19.0,
            "volatility": 0.6923852219282792,
            "spread_pct": 0.04206250409486991,
            "spread_ticks": 4.428571428571429,
            "amihud": 1.4261472814408129e-07,
            "turnover_ratio": 0.0011716542379422994,
            "is_target": true
          },
          {
            "ticker": "244",
            "score_pca": 28.63247863247863,
            "rank_pca": 1838,
            "adv": 9520.0,
            "trades": 2.0,
            "volatility": 0.5006388201585279,
            "spread_pct": 0.03375068045726728,
            "spread_ticks": 2.3846153846153846,
            "amihud": 6.610375645613328e-07,
            "turnover_ratio": 8.523820476918837e-05,
            "is_target": false
          },
          {
            "ticker": "825",
            "score_pca": 41.686091686091686,
            "rank_pca": 1502,
            "adv": 71355.0,
            "trades": 16.0,
            "volatility": 0.3677532884444218,
            "spread_pct": 0.03695331695331686,
            "spread_ticks": 2.4714285714285715,
            "amihud": 1.8452703874698787e-07,
            "turnover_ratio": 0.00012632365543888575,
            "is_target": false
          },
          {
            "ticker": "312",
            "score_pca": 18.337218337218335,
            "rank_pca": 2103,
            "adv": 6300.0,
            "trades": 11.0,
            "volatility": 1.6952679244754305,
            "spread_pct": 0.07948094079480947,
            "spread_ticks": 5.0588235294117645,
            "amihud": 6.796660217900421e-06,
            "turnover_ratio": 4.809619238476954e-05,
            "is_target": false
          },
          {
            "ticker": "3368",
            "score_pca": 32.78943278943279,
            "rank_pca": 1731,
            "adv": 15240.5,
            "trades": 3.0,
            "volatility": 0.23603433944618804,
            "spread_pct": 0.03469322197237394,
            "spread_ticks": 5.388888888888889,
            "amihud": 4.5261430019794303e-07,
            "turnover_ratio": 0.00014969586523209464,
            "is_target": false
          },
          {
            "ticker": "848",
            "score_pca": 15.112665112665113,
            "rank_pca": 2186,
            "adv": 2460.0,
            "trades": 1.0,
            "volatility": 0.3327369450112046,
            "spread_pct": 0.0983326207781103,
            "spread_ticks": 12.105263157894736,
            "amihud": 6.899311448717387e-07,
            "turnover_ratio": 3.890803812832105e-06,
            "is_target": false
          },
          {
            "ticker": "974",
            "score_pca": 16.278166278166278,
            "rank_pca": 2156,
            "adv": 940.0,
            "trades": 1.0,
            "volatility": 0.6673119021772679,
            "spread_pct": 0.07718612603810457,
            "spread_ticks": 7.555555555555555,
            "amihud": 1.7960931382057739e-06,
            "turnover_ratio": 1.715304615028782e-05,
            "is_target": false
          },
          {
            "ticker": "162",
            "score_pca": 0.3108003108003108,
            "rank_pca": 2567,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 1.9550983303524998,
            "spread_pct": 0.29137432934378865,
            "spread_ticks": 14.368421052631579,
            "amihud": 4.997133275213442e-05,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "602",
            "score_pca": 18.25951825951826,
            "rank_pca": 2105,
            "adv": 3300.0,
            "trades": 4.0,
            "volatility": 0.654603715882225,
            "spread_pct": 0.09096651926721416,
            "spread_ticks": 3.8181818181818183,
            "amihud": 3.752345215759853e-06,
            "turnover_ratio": 7.228915648715343e-05,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Diversified Retailers",
          "sector_count": 12,
          "market_count": 2574,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6796127168974047,
              "median": 0.5580095690772611,
              "min": 0.0,
              "max": 10.049160326010377,
              "p5": 0.2064489296469208,
              "p95": 1.6006843710794219,
              "count": 2574
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 65051111.95809761,
              "median": 227185.035,
              "min": 0.0,
              "max": 12576080000.0,
              "p5": 0.0,
              "p95": 244040953.27849993,
              "count": 2574
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.046246612984016784,
              "median": 0.028969965419434997,
              "min": 0.0005957156584162828,
              "max": 0.8377358490566037,
              "p5": 0.001483608700860973,
              "p95": 0.14692304000951856,
              "count": 2574
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004578026865091349,
              "median": 0.0008905645172358846,
              "min": 0.0,
              "max": 0.74849980977415,
              "p5": 0.0,
              "p95": 0.016778360261496133,
              "count": 2553
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.2527324148044631e-06,
              "median": 4.606596646397586e-08,
              "min": 0.0,
              "max": 0.00021538348509114532,
              "p5": 3.7239762836912706e-11,
              "p95": 5.145790517540841e-06,
              "count": 2567
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1166.7696192696192,
              "median": 21.0,
              "min": 0.0,
              "max": 83841.0,
              "p5": 0.0,
              "p95": 5967.499999999997,
              "count": 2574
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.676599224576809,
              "median": 0.4562671419474281,
              "min": 0.23603433944618804,
              "max": 1.9550983303524998,
              "p5": 0.24896903290420222,
              "p95": 1.8121916071201114,
              "count": 12
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 6825396.291666667,
              "median": 12380.25,
              "min": 0.0,
              "max": 81098740.0,
              "p5": 517.0,
              "p95": 36691717.99999994,
              "count": 12
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.06911906495036269,
              "median": 0.03950791052409339,
              "min": 0.0013227971215803859,
              "max": 0.29137432934378865,
              "p5": 0.011467211263463653,
              "p95": 0.18520138963266541,
              "count": 12
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0006529582936575474,
              "median": 9.362396210908151e-05,
              "min": 0.0,
              "max": 0.005698944783911551,
              "p5": 2.1399420970576577e-06,
              "p95": 0.0032089349836284596,
              "count": 12
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.376513832629563e-06,
              "median": 5.568259323796379e-07,
              "min": 2.5294684355936327e-10,
              "max": 4.997133275213442e-05,
              "p5": 7.441121721326268e-09,
              "p95": 2.622526285830569e-05,
              "count": 12
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 362.0,
              "median": 4.5,
              "min": 0.0,
              "max": 4257.0,
              "p5": 0.55,
              "p95": 1929.399999999997,
              "count": 12
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 13639.4375,
              "median": 4800.0,
              "min": 0.0,
              "max": 71355.0,
              "p5": 329.00000000000006,
              "p95": 51714.924999999974,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 4.75,
              "median": 2.5,
              "min": 0.0,
              "max": 16.0,
              "p5": 0.35000000000000003,
              "p95": 14.249999999999996,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.8011806582434707,
              "median": 0.5776212680203765,
              "min": 0.23603433944618804,
              "max": 1.9550983303524998,
              "p5": 0.26988025139394384,
              "p95": 1.8641576882955255,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09284221945062315,
              "median": 0.07833353341645702,
              "min": 0.03375068045726728,
              "max": 0.29137432934378865,
              "p5": 0.03408056998755461,
              "p95": 0.22380973134580112,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 6.643897244826037,
              "median": 5.223856209150327,
              "min": 2.3846153846153846,
              "max": 14.368421052631579,
              "p5": 2.415,
              "p95": 13.576315789473682,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 8.038067671547309e-06,
              "median": 1.2430121415387563e-06,
              "min": 1.8452703874698787e-07,
              "max": 4.997133275213442e-05,
              "p5": 2.7835758025482215e-07,
              "p95": 3.48601973651525e-05,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 6.283586553440147e-05,
              "median": 6.019267443596149e-05,
              "min": 0.0,
              "max": 0.00014969586523209464,
              "p5": 1.3617813344912368e-06,
              "p95": 0.00014151559180447152,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": -0.15652173913043466,
            "market": 0.005817570896814672,
            "sector": -0.03761178167027435,
            "peers": -0.06152537902608246,
            "vs_market": -0.16233931002724933,
            "vs_sector": -0.11890995746016031,
            "vs_peers": -0.0949963601043522
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 51.74825174825175,
          "score_pca_percentile": 51.74825174825175,
          "rank_pca": 1243,
          "total": 2574,
          "adv_notional_sgd": 301920.0,
          "adv_volume_shares": 266000.0,
          "free_float_shares": 145094000.0,
          "turnover_ratio": 0.0018332942781920686,
          "votes": 31.0,
          "trades": 31.0,
          "spread_pct": 0.034314235208485006,
          "spread_ticks": 3.9060773480662982,
          "amihud": 9.86781916408668e-08,
          "volatility": 0.8671470552482219
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.6182699492450147,
          "loadings": {
            "log_adv": 0.4990889927760305,
            "log_trades": 0.4512156660257778,
            "log_turnover": 0.4533286918746743,
            "neg_spread": 0.4603312933107667,
            "neg_amihud": 0.3324973375811198,
            "neg_vol": 0.13909823164304289
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
          "peer_median_adv": 15469.5,
          "peer_median_score_pca": 25.543900543900545,
          "peer_median_trades": 4.5,
          "peer_median_volatility": 0.7382382753407182,
          "peer_median_spread_pct": 0.06281322387857374,
          "peer_median_spread_ticks": 6.036764705882353,
          "peer_median_amihud": 1.0054841614501436e-06,
          "peer_median_turnover_ratio": 0.0001341007898945174,
          "target_vs_peer": {
            "score_pca_delta": 26.2,
            "adv_delta_pct": 1851.7,
            "trades_delta_pct": 588.89,
            "volatility_delta_pct": -17.46,
            "spread_pct_delta_pct": 45.37,
            "spread_ticks_delta_pct": -35.3,
            "amihud_delta_pct": 90.19,
            "turnover_ratio_delta_pct": 1267.1
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1723",
            "score_pca": 51.74825174825175,
            "rank_pca": 1243,
            "adv": 301920.0,
            "trades": 31.0,
            "volatility": 0.8671470552482219,
            "spread_pct": 0.034314235208485006,
            "spread_ticks": 3.9060773480662982,
            "amihud": 9.86781916408668e-08,
            "turnover_ratio": 0.0018332942781920686,
            "is_target": true
          },
          {
            "ticker": "244",
            "score_pca": 31.818181818181817,
            "rank_pca": 1756,
            "adv": 23804.999999999996,
            "trades": 4.0,
            "volatility": 0.6906489415854647,
            "spread_pct": 0.039370078740157514,
            "spread_ticks": 2.75,
            "amihud": 5.89773571846233e-07,
            "turnover_ratio": 0.00021309551192297092,
            "is_target": false
          },
          {
            "ticker": "825",
            "score_pca": 45.10489510489511,
            "rank_pca": 1414,
            "adv": 136675.0,
            "trades": 23.0,
            "volatility": 0.8022796057154425,
            "spread_pct": 0.030075187969924845,
            "spread_ticks": 1.8888888888888888,
            "amihud": 9.627140835443231e-08,
            "turnover_ratio": 0.00022536614585341117,
            "is_target": false
          },
          {
            "ticker": "312",
            "score_pca": 13.170163170163171,
            "rank_pca": 2236,
            "adv": 10804.0,
            "trades": 8.0,
            "volatility": 1.4761077731978967,
            "spread_pct": 0.09967845659163982,
            "spread_ticks": 7.485294117647059,
            "amihud": 4.210264919460999e-06,
            "turnover_ratio": 5.6112224448897796e-05,
            "is_target": false
          },
          {
            "ticker": "3368",
            "score_pca": 35.1981351981352,
            "rank_pca": 1669,
            "adv": 19239.0,
            "trades": 7.0,
            "volatility": 0.40185391821414473,
            "spread_pct": 0.037880651350420645,
            "spread_ticks": 6.073529411764706,
            "amihud": 4.6150718773097775e-07,
            "turnover_ratio": 0.00019372406088859307,
            "is_target": false
          },
          {
            "ticker": "848",
            "score_pca": 31.313131313131315,
            "rank_pca": 1769,
            "adv": 27540.0,
            "trades": 5.0,
            "volatility": 0.4136766236604127,
            "spread_pct": 0.04423109891993812,
            "spread_ticks": 6.0,
            "amihud": 2.0260354736932132e-07,
            "turnover_ratio": 3.968619889088746e-05,
            "is_target": false
          },
          {
            "ticker": "974",
            "score_pca": 19.774669774669775,
            "rank_pca": 2066,
            "adv": 11700.0,
            "trades": 2.0,
            "volatility": 0.7011547857461833,
            "spread_pct": 0.08170212765957448,
            "spread_ticks": 8.25,
            "amihud": 1.421194751054054e-06,
            "turnover_ratio": 0.00018868350765316601,
            "is_target": false
          },
          {
            "ticker": "162",
            "score_pca": 4.972804972804973,
            "rank_pca": 2447,
            "adv": 408.00000000000006,
            "trades": 2.0,
            "volatility": 1.8281690699225726,
            "spread_pct": 0.14028985507246375,
            "spread_ticks": 6.285714285714286,
            "amihud": 1.128029095116861e-05,
            "turnover_ratio": 8.697961180068571e-06,
            "is_target": false
          },
          {
            "ticker": "602",
            "score_pca": 16.55011655011655,
            "rank_pca": 2149,
            "adv": 3720.0,
            "trades": 4.0,
            "volatility": 0.7753217649352532,
            "spread_pct": 0.08139534883720935,
            "spread_ticks": 4.0,
            "amihud": 2.513826043237814e-06,
            "turnover_ratio": 7.951807213586878e-05,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Diversified Retailers",
          "sector_count": 12,
          "market_count": 2574,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7050481990725268,
              "median": 0.5783560432490424,
              "min": 0.0,
              "max": 8.223126969362776,
              "p5": 0.22085230509755144,
              "p95": 1.5710900513988801,
              "count": 2574
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 61996065.490146406,
              "median": 229028.0,
              "min": 0.0,
              "max": 14268680000.0,
              "p5": 0.0,
              "p95": 239286703.94299993,
              "count": 2574
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04282931079238141,
              "median": 0.02701177101118201,
              "min": 0.0005617553716258445,
              "max": 0.6003953685399606,
              "p5": 0.0014362734329899636,
              "p95": 0.13628709614692394,
              "count": 2574
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0041162209707571425,
              "median": 0.0008952838912855968,
              "min": 0.0,
              "max": 0.4275637256597378,
              "p5": 0.0,
              "p95": 0.016367626506232615,
              "count": 2553
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.205966959054216e-07,
              "median": 4.322802925070572e-08,
              "min": 0.0,
              "max": 4.7054394880481924e-05,
              "p5": 4.533679427385981e-11,
              "p95": 3.6004832555031596e-06,
              "count": 2574
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1095.4201631701633,
              "median": 20.0,
              "min": 0.0,
              "max": 83841.0,
              "p5": 0.0,
              "p95": 5986.75,
              "count": 2574
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.8014302245774493,
              "median": 0.7382382753407182,
              "min": 0.18333949943967548,
              "max": 1.8281690699225726,
              "p5": 0.30275041764090727,
              "p95": 1.6345353567240006,
              "count": 12
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 8702352.241666665,
              "median": 25672.5,
              "min": 408.00000000000006,
              "max": 102602415.89999999,
              "p5": 2229.6000000000004,
              "p95": 46788847.15499993,
              "count": 12
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0517643716969578,
              "median": 0.03862536504528908,
              "min": 0.0011514890263031629,
              "max": 0.14028985507246375,
              "p5": 0.008033671029412746,
              "p95": 0.11795358590801056,
              "count": 12
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0008845195223742877,
              "median": 0.00019120378427087955,
              "min": 8.697961180068571e-06,
              "max": 0.006599525547695178,
              "p5": 2.5741491921018964e-05,
              "p95": 0.003978098349468464,
              "count": 12
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.7433550996720698e-06,
              "median": 3.3205536755014954e-07,
              "min": 1.730163285178958e-10,
              "max": 1.128029095116861e-05,
              "p5": 4.94402348836559e-09,
              "p95": 7.391776633729419e-06,
              "count": 12
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 402.0833333333333,
              "median": 6.0,
              "min": 2.0,
              "max": 4670.0,
              "p5": 2.0,
              "p95": 2136.6999999999966,
              "count": 12
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 29236.375,
              "median": 15469.5,
              "min": 408.00000000000006,
              "max": 136675.0,
              "p5": 1567.2,
              "p95": 98477.74999999994,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 6.875,
              "median": 4.5,
              "min": 2.0,
              "max": 23.0,
              "p5": 2.0,
              "p95": 17.749999999999993,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.8861515603721712,
              "median": 0.7382382753407182,
              "min": 0.40185391821414473,
              "max": 1.8281690699225726,
              "p5": 0.4059918651203385,
              "p95": 1.7049476160689359,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.06932785064266607,
              "median": 0.06281322387857374,
              "min": 0.030075187969924845,
              "max": 0.14028985507246375,
              "p5": 0.03280710015309837,
              "p95": 0.12607586560417536,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 5.341678338001867,
              "median": 6.036764705882353,
              "min": 1.8888888888888888,
              "max": 8.25,
              "p5": 2.1902777777777778,
              "p95": 7.982352941176471,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.596966547527805e-06,
              "median": 1.0054841614501436e-06,
              "min": 9.627140835443231e-08,
              "max": 1.128029095116861e-05,
              "p5": 1.3348765700964345e-07,
              "p95": 8.805781840070942e-06,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.000125610460371733,
              "median": 0.0001341007898945174,
              "min": 8.697961180068571e-06,
              "max": 0.00022536614585341117,
              "p5": 1.9543844378855185e-05,
              "p95": 0.00022107142397775708,
              "count": 8
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": -0.3489932885906043,
            "market": 0.07151156981189555,
            "sector": -0.05200820731569222,
            "peers": -0.07776647845748164,
            "vs_market": -0.42050485840249985,
            "vs_sector": -0.2969850812749121,
            "vs_peers": -0.27122681013312266
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 56.33255633255633,
          "score_pca_percentile": 56.33255633255633,
          "rank_pca": 1125,
          "total": 2574,
          "adv_notional_sgd": 540920.0,
          "adv_volume_shares": 337000.0,
          "free_float_shares": 145094000.0,
          "turnover_ratio": 0.0023226322246267935,
          "votes": 39.5,
          "trades": 39.5,
          "spread_pct": 0.029847951300976457,
          "spread_ticks": 4.2734312416555404,
          "amihud": 6.446709245032327e-08,
          "volatility": 1.0244946208876098
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.6224804103389515,
          "loadings": {
            "log_adv": 0.4990298248574263,
            "log_trades": 0.45352861119851295,
            "log_turnover": 0.4522277478602372,
            "neg_spread": 0.462512578164732,
            "neg_amihud": 0.3374776232172695,
            "neg_vol": 0.11385106788874369
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
          "peer_median_adv": 12342.5,
          "peer_median_score_pca": 22.202797202797203,
          "peer_median_trades": 4.0,
          "peer_median_volatility": 0.7086235443782143,
          "peer_median_spread_pct": 0.07079606974938434,
          "peer_median_spread_ticks": 5.052777777777778,
          "peer_median_amihud": 6.282201192564501e-07,
          "peer_median_turnover_ratio": 7.004482759194062e-05,
          "target_vs_peer": {
            "score_pca_delta": 34.13,
            "adv_delta_pct": 4282.6,
            "trades_delta_pct": 887.5,
            "volatility_delta_pct": -44.58,
            "spread_pct_delta_pct": 57.84,
            "spread_ticks_delta_pct": -15.42,
            "amihud_delta_pct": 89.74,
            "turnover_ratio_delta_pct": 3215.92
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1723",
            "score_pca": 56.33255633255633,
            "rank_pca": 1125,
            "adv": 540920.0,
            "trades": 39.5,
            "volatility": 1.0244946208876098,
            "spread_pct": 0.029847951300976457,
            "spread_ticks": 4.2734312416555404,
            "amihud": 6.446709245032327e-08,
            "turnover_ratio": 0.0023226322246267935,
            "is_target": true
          },
          {
            "ticker": "244",
            "score_pca": 23.115773115773116,
            "rank_pca": 1980,
            "adv": 9565.0,
            "trades": 3.0,
            "volatility": 0.7302497785769213,
            "spread_pct": 0.06406315890765318,
            "spread_ticks": 4.406178489702517,
            "amihud": 5.89773571846233e-07,
            "turnover_ratio": 8.828242636808795e-05,
            "is_target": false
          },
          {
            "ticker": "825",
            "score_pca": 45.06604506604507,
            "rank_pca": 1415,
            "adv": 119453.325,
            "trades": 18.5,
            "volatility": 0.644165165950459,
            "spread_pct": 0.03003826891999722,
            "spread_ticks": 1.8087097228084987,
            "amihud": 1.0097853308552719e-07,
            "turnover_ratio": 0.00021202209774366974,
            "is_target": false
          },
          {
            "ticker": "312",
            "score_pca": 12.975912975912976,
            "rank_pca": 2241,
            "adv": 3262.0,
            "trades": 4.0,
            "volatility": 1.4973777013306304,
            "spread_pct": 0.07752898059111549,
            "spread_ticks": 6.1201923076923075,
            "amihud": 3.977487421196031e-06,
            "turnover_ratio": 1.8837675350701404e-05,
            "is_target": false
          },
          {
            "ticker": "3368",
            "score_pca": 44.36674436674436,
            "rank_pca": 1433,
            "adv": 66156.0,
            "trades": 16.0,
            "volatility": 0.576614699882973,
            "spread_pct": 0.03405453177826619,
            "spread_ticks": 5.394444444444445,
            "amihud": 1.891353026365387e-07,
            "turnover_ratio": 0.000640810374964127,
            "is_target": false
          },
          {
            "ticker": "848",
            "score_pca": 29.564879564879565,
            "rank_pca": 1814,
            "adv": 26259.0,
            "trades": 5.0,
            "volatility": 0.4781416923436851,
            "spread_pct": 0.04543493402741553,
            "spread_ticks": 5.860752688172043,
            "amihud": 3.0973148182919965e-07,
            "turnover_ratio": 3.929711850960426e-05,
            "is_target": false
          },
          {
            "ticker": "974",
            "score_pca": 21.28982128982129,
            "rank_pca": 2027,
            "adv": 15120.000000000002,
            "trades": 2.0,
            "volatility": 0.6869973101795072,
            "spread_pct": 0.08541273338110578,
            "spread_ticks": 9.422077922077921,
            "amihud": 6.666666666666672e-07,
            "turnover_ratio": 0.00023156612302888558,
            "is_target": false
          },
          {
            "ticker": "162",
            "score_pca": 8.81895881895882,
            "rank_pca": 2348,
            "adv": 302.0,
            "trades": 1.0,
            "volatility": 1.4371373766308004,
            "spread_pct": 0.11302580935076094,
            "spread_ticks": 4.711111111111111,
            "amihud": 6.293736132445806e-06,
            "turnover_ratio": 6.0885728260480004e-06,
            "is_target": false
          },
          {
            "ticker": "602",
            "score_pca": 13.325563325563325,
            "rank_pca": 2232,
            "adv": 2766.25,
            "trades": 4.0,
            "volatility": 0.9085548722866199,
            "spread_pct": 0.08575701033270379,
            "spread_ticks": 4.285714285714286,
            "amihud": 3.7710809890596957e-06,
            "turnover_ratio": 5.180722881579329e-05,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Diversified Retailers",
          "sector_count": 12,
          "market_count": 2574,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7392811363447659,
              "median": 0.5981546596018028,
              "min": 0.0,
              "max": 33.69284958669689,
              "p5": 0.22530761419840245,
              "p95": 1.5551236721277741,
              "count": 2574
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 56751878.340000205,
              "median": 221248.3125,
              "min": 0.0,
              "max": 11530530000.0,
              "p5": 0.0,
              "p95": 211998477.29999983,
              "count": 2574
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04197546340436465,
              "median": 0.02664491311247985,
              "min": 0.000558678699550006,
              "max": 0.6003953685399606,
              "p5": 0.001386836666578392,
              "p95": 0.13589358247871558,
              "count": 2574
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003679889452205205,
              "median": 0.0008690629810280508,
              "min": 0.0,
              "max": 0.18632,
              "p5": 0.0,
              "p95": 0.014621663938525271,
              "count": 2553
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.369212064410586e-07,
              "median": 4.6009826461052226e-08,
              "min": 0.0,
              "max": 4.7054394880481924e-05,
              "p5": 4.9617717549704375e-11,
              "p95": 3.4747662267446528e-06,
              "count": 2574
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1040.1926961926963,
              "median": 21.0,
              "min": 0.0,
              "max": 93269.5,
              "p5": 0.0,
              "p95": 5605.64999999998,
              "count": 2574
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7752728323970017,
              "median": 0.7086235443782143,
              "min": 0.1934741617443099,
              "max": 1.4973777013306304,
              "p5": 0.28608221711366205,
              "p95": 1.4642455227457238,
              "count": 12
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 9889486.78125,
              "median": 46207.5,
              "min": 302.0,
              "max": 117228405.3,
              "p5": 1657.3375,
              "p95": 53050288.384999916,
              "count": 12
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04977200316346769,
              "median": 0.03974473290284086,
              "min": 0.001070317251082809,
              "max": 0.11302580935076094,
              "p5": 0.0080490611004033,
              "p95": 0.09802796989082949,
              "count": 12
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0009156861081580548,
              "median": 0.00018483674117331528,
              "min": 6.0885728260480004e-06,
              "max": 0.006786481302897772,
              "p5": 1.3100579214607373e-05,
              "p95": 0.004331364309848731,
              "count": 12
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.3324945080863333e-06,
              "median": 2.4943339223286916e-07,
              "min": 1.0870715911576509e-10,
              "max": 6.293736132445806e-06,
              "p5": 4.454516256481467e-10,
              "p95": 5.019799341258428e-06,
              "count": 12
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 409.4583333333333,
              "median": 5.5,
              "min": 1.0,
              "max": 4793.5,
              "p5": 1.55,
              "p95": 2178.7999999999965,
              "count": 12
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 30360.446875,
              "median": 12342.5,
              "min": 302.0,
              "max": 119453.325,
              "p5": 1164.4875000000002,
              "p95": 100799.26124999997,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 6.6875,
              "median": 4.0,
              "min": 1.0,
              "max": 18.5,
              "p5": 1.35,
              "p95": 17.625,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.8699048246476996,
              "median": 0.7086235443782143,
              "min": 0.4781416923436851,
              "max": 1.4973777013306304,
              "p5": 0.5126072449824358,
              "p95": 1.47629358768569,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.06691442841112727,
              "median": 0.07079606974938434,
              "min": 0.03003826891999722,
              "max": 0.11302580935076094,
              "p5": 0.03144396092039136,
              "p95": 0.10348172969444092,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 5.251147621465391,
              "median": 5.052777777777778,
              "min": 1.8087097228084987,
              "max": 9.422077922077921,
              "p5": 2.675661319825524,
              "p95": 8.266417957042954,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.9873237623457123e-06,
              "median": 6.282201192564501e-07,
              "min": 1.0097853308552719e-07,
              "max": 6.293736132445806e-06,
              "p5": 1.3183340242838124e-07,
              "p95": 5.483049083508383e-06,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00016108895220086467,
              "median": 7.004482759194062e-05,
              "min": 6.0885728260480004e-06,
              "max": 0.000640810374964127,
              "p5": 1.0550758709676691e-05,
              "p95": 0.0004975748867867923,
              "count": 8
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": -0.5336538461538463,
            "market": 0.11289080174108235,
            "sector": -0.11824011940787549,
            "peers": -0.1638301771999341,
            "vs_market": -0.6465446478949286,
            "vs_sector": -0.41541372674597077,
            "vs_peers": -0.36982366895391217
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Liquidity is still strong on the day, but the wider spread shows trading is less clean than the recent average.",
        "market_comparison": "The stock remains ahead of peers on liquidity score, which matters because access to liquidity still looks better than the peer set despite the weaker session."
      },
      "30d": {
        "liquidity": "Monthly tradability is strong, with liquidity holding up well for the company’s size.",
        "market_comparison": "The stock ranks well ahead of peers on liquidity over 1M, which matters because it remains more accessible than the typical peer even as the shares have fallen 15.7%."
      },
      "3m": {
        "liquidity": "Three-month liquidity is solid and points to consistently accessible trading conditions.",
        "market_comparison": "Liquidity remains above peers over 3M, which matters because the stock has stayed tradable even while returns have lagged the peer group."
      },
      "6m": {
        "liquidity": "Six-month liquidity is strong and supports the view that the name is structurally tradable for its size.",
        "market_comparison": "A 6M score of 56.3 compared with a peer median of 22.2 shows clear outperformance on liquidity, which matters because the stock screens as more accessible than peers over time."
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
          "median": 0.23259251288899788,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "23.3%",
          "display_range": null,
          "display_text": "23.3%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 23.3,
          "plain_english": "Market explains about 23.3% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.6120874993401766,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "61.2%",
          "display_range": null,
          "display_text": "61.2%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 61.2,
          "plain_english": "Sector explains about 61.2% of price moves in the current state."
        },
        "company_share": {
          "median": 0.1553199877708256,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "15.5%",
          "display_range": null,
          "display_text": "15.5%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 15.5,
          "plain_english": "Company-specific explains about 15.5% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 4.503280155491516,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "4.50",
          "display_range": null,
          "display_text": "4.50",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Very high",
          "plain_english": "Very high market link: a 1% market move has lined up with about a 4.50% stock move in the same direction in this state.",
          "value_num": 4.5
        },
        "beta_stock_lag": {
          "median": 1.241672181780799,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.24",
          "display_range": null,
          "display_text": "1.24",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 1.24
        },
        "beta_sector": {
          "median": -6.157627692136051,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-6.16",
          "display_range": null,
          "display_text": "-6.16",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Very high",
          "plain_english": "Very high sector link: a 1% sector move has lined up with about a 6.16% stock move in the opposite direction in this state. The multiplier is unusually large and comes from only 251 trading days of history.",
          "value_num": -6.16
        },
        "beta_market_lag": {
          "median": -0.4965072557975619,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.50",
          "display_range": null,
          "display_text": "-0.50",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -0.5
        },
        "beta_sector_lag": {
          "median": -6.7961736353897715,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-6.80",
          "display_range": null,
          "display_text": "-6.80",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -6.8
        },
        "posterior_source": null,
        "intervals_collapsed": false,
        "confidence_label": "High, limited history",
        "confidence_note": "Based on 251 trading days relative to the 252-day target."
      },
      "rolling_windows": {},
      "monthly_history": [
        {
          "month_key": "2025-03",
          "month_label": "March 2025",
          "month_short_label": "Mar",
          "period_label": "2025-03-24 to 2025-03-31",
          "n_obs": 6,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4316533214077692,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "43.2%",
            "display_range": null,
            "display_text": "43.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
            "kind": "share_pct",
            "value_pct": 43.2,
            "plain_english": "Market explains about 43.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.4316533214077692,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "43.2%",
              "display_range": null,
              "display_text": "43.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 43.2,
              "plain_english": "Market explains about 43.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2742038587770303,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.4%",
              "display_range": null,
              "display_text": "27.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 27.4,
              "plain_english": "Sector explains about 27.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.29414281981520035,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "29.4%",
              "display_range": null,
              "display_text": "29.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 29.4,
              "plain_english": "Company-specific explains about 29.4% of price moves in the current state."
            }
          },
          "summary": "Mar: More mixed, though market-driven still has the largest share, though based on only 6 trading days."
        },
        {
          "month_key": "2025-04",
          "month_label": "April 2025",
          "month_short_label": "Apr",
          "period_label": "2025-04-01 to 2025-04-30",
          "n_obs": 19,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5209888672249148,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "52.1%",
            "display_range": null,
            "display_text": "52.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
            "kind": "share_pct",
            "value_pct": 52.1,
            "plain_english": "Market explains about 52.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.5209888672249148,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.1%",
              "display_range": null,
              "display_text": "52.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 52.1,
              "plain_english": "Market explains about 52.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.01925861685409611,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "1.9%",
              "display_range": null,
              "display_text": "1.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 1.9,
              "plain_english": "Sector explains about 1.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.45975251592098904,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.0%",
              "display_range": null,
              "display_text": "46.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 46.0,
              "plain_english": "Company-specific explains about 46.0% of price moves in the current state."
            }
          },
          "summary": "Apr: Mostly market-driven."
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
            "median": 0.7501278871929556,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "75.0%",
            "display_range": null,
            "display_text": "75.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 75.0,
            "plain_english": "Company-specific explains about 75.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.1754340986702343,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "17.5%",
              "display_range": null,
              "display_text": "17.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 17.5,
              "plain_english": "Market explains about 17.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.07443801413680998,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "7.4%",
              "display_range": null,
              "display_text": "7.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 7.4,
              "plain_english": "Sector explains about 7.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.7501278871929556,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "75.0%",
              "display_range": null,
              "display_text": "75.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 75.0,
              "plain_english": "Company-specific explains about 75.0% of price moves in the current state."
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
            "median": 0.49997280499969804,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "50.0%",
            "display_range": null,
            "display_text": "50.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 50.0,
            "plain_english": "Company-specific explains about 50.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.04796883853730474,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "4.8%",
              "display_range": null,
              "display_text": "4.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 4.8,
              "plain_english": "Market explains about 4.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.45205835646299725,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.2%",
              "display_range": null,
              "display_text": "45.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 45.2,
              "plain_english": "Sector explains about 45.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.49997280499969804,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.0%",
              "display_range": null,
              "display_text": "50.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 50.0,
              "plain_english": "Company-specific explains about 50.0% of price moves in the current state."
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
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
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
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
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
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
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
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 33.3,
              "plain_english": "Company-specific explains about 33.3% of price moves in the current state."
            }
          },
          "summary": "Jul: Much more balanced across company, sector, and market factors."
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
            "median": 0.35702666779293074,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "35.7%",
            "display_range": null,
            "display_text": "35.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 35.7,
            "plain_english": "Company-specific explains about 35.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3316480875521919,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "33.2%",
              "display_range": null,
              "display_text": "33.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 33.2,
              "plain_english": "Market explains about 33.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.31132524465487743,
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
              "plain_english": "Sector explains about 31.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.35702666779293074,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "35.7%",
              "display_range": null,
              "display_text": "35.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 35.7,
              "plain_english": "Company-specific explains about 35.7% of price moves in the current state."
            }
          },
          "summary": "Sep: Much more balanced across company, sector, and market factors."
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
            "median": 0.4811790399547171,
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
            "plain_english": "Company-specific explains about 48.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.28932512026804735,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "28.9%",
              "display_range": null,
              "display_text": "28.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 28.9,
              "plain_english": "Market explains about 28.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.22949583977723553,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "22.9%",
              "display_range": null,
              "display_text": "22.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 22.9,
              "plain_english": "Sector explains about 22.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4811790399547171,
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
              "plain_english": "Company-specific explains about 48.1% of price moves in the current state."
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
            "median": 0.6223737154660597,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "62.2%",
            "display_range": null,
            "display_text": "62.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 62.2,
            "plain_english": "Company-specific explains about 62.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.08326248110821166,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "8.3%",
              "display_range": null,
              "display_text": "8.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 8.3,
              "plain_english": "Market explains about 8.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2943638034257285,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "29.4%",
              "display_range": null,
              "display_text": "29.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 29.4,
              "plain_english": "Sector explains about 29.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6223737154660597,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "62.2%",
              "display_range": null,
              "display_text": "62.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 62.2,
              "plain_english": "Company-specific explains about 62.2% of price moves in the current state."
            }
          },
          "summary": "Nov: Still clearly company-driven."
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
            "median": 0.44062965617741395,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "44.1%",
            "display_range": null,
            "display_text": "44.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
            "kind": "share_pct",
            "value_pct": 44.1,
            "plain_english": "Company-specific explains about 44.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3629782844453231,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.3%",
              "display_range": null,
              "display_text": "36.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 36.3,
              "plain_english": "Market explains about 36.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.19639205937726284,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "19.6%",
              "display_range": null,
              "display_text": "19.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 19.6,
              "plain_english": "Sector explains about 19.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.44062965617741395,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.1%",
              "display_range": null,
              "display_text": "44.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 44.1,
              "plain_english": "Company-specific explains about 44.1% of price moves in the current state."
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
            "median": 0.5083798893375805,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "50.8%",
            "display_range": null,
            "display_text": "50.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 50.8,
            "plain_english": "Company-specific explains about 50.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3756148302690272,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.6%",
              "display_range": null,
              "display_text": "37.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 37.6,
              "plain_english": "Market explains about 37.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.11600528039339228,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "11.6%",
              "display_range": null,
              "display_text": "11.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 11.6,
              "plain_english": "Sector explains about 11.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5083798893375805,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.8%",
              "display_range": null,
              "display_text": "50.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 50.8,
              "plain_english": "Company-specific explains about 50.8% of price moves in the current state."
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
            "median": 0.7147508685316339,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "71.5%",
            "display_range": null,
            "display_text": "71.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
            "kind": "share_pct",
            "value_pct": 71.5,
            "plain_english": "Company-specific explains about 71.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.23755649112933222,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "23.8%",
              "display_range": null,
              "display_text": "23.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 23.8,
              "plain_english": "Market explains about 23.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.04769264033903381,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "4.8%",
              "display_range": null,
              "display_text": "4.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 4.8,
              "plain_english": "Sector explains about 4.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.7147508685316339,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "71.5%",
              "display_range": null,
              "display_text": "71.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 71.5,
              "plain_english": "Company-specific explains about 71.5% of price moves in the current state."
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
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4530477061991593,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "45.3%",
            "display_range": null,
            "display_text": "45.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 45.3,
            "plain_english": "Market explains about 45.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.4530477061991593,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.3%",
              "display_range": null,
              "display_text": "45.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 45.3,
              "plain_english": "Market explains about 45.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.10601222512084231,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "10.6%",
              "display_range": null,
              "display_text": "10.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 10.6,
              "plain_english": "Sector explains about 10.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.44094006867999835,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.1%",
              "display_range": null,
              "display_text": "44.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 44.1,
              "plain_english": "Company-specific explains about 44.1% of price moves in the current state."
            }
          },
          "summary": "Mar: Mostly market-driven."
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-10",
          "n_obs": 5,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.6120874993401766,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "61.2%",
            "display_range": null,
            "display_text": "61.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
            "kind": "share_pct",
            "value_pct": 61.2,
            "plain_english": "Sector explains about 61.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.23259251288899788,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "23.3%",
              "display_range": null,
              "display_text": "23.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 23.3,
              "plain_english": "Market explains about 23.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.6120874993401766,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.2%",
              "display_range": null,
              "display_text": "61.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 61.2,
              "plain_english": "Sector explains about 61.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.1553199877708256,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "15.5%",
              "display_range": null,
              "display_text": "15.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 15.5,
              "plain_english": "Company-specific explains about 15.5% of price moves in the current state."
            }
          },
          "summary": "Apr: Still clearly sector-driven, though based on only 5 trading days."
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
            "median": 0.018178033493691143,
            "low": 0.018178033493691143,
            "high": 0.018178033493691143
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
            "median": 0.08150757487728447,
            "low": 0.08150757487728447,
            "high": 0.08150757487728447
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
        "market_link_display": "4.50",
        "sector_link_display": "-6.16",
        "market_link_explainer": "Very high market link. A 1% market move has lined up with about a 4.50% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 6.16% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "1.24",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "High Volatility",
        "dominant_driver": "sector",
        "dominant_driver_label": "Sector",
        "driver_share_pct": 61.2,
        "driver_share_display": "61.2%",
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
            "median": 0.018178033493691143,
            "low": 0.018178033493691143,
            "high": 0.018178033493691143
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
            "median": 0.08150757487728447,
            "low": 0.08150757487728447,
            "high": 0.08150757487728447
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
        "text": "Liquidity score: 56.3 — Strong",
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
        "text": "Liquidity Health: MODERATE",
        "bg": "bg-amber-500/20",
        "textColor": "text-amber-400",
        "dot": "bg-amber-500"
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
    "liq_subtitle": "Liquidity screens well relative to peers, with near-term dealing terms a little less favourable than the monthly average.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent performance has lagged, with the stock down 15.7% over one month compared with peers down 6.2% and the market up 0.6%.",
    "perf_insight": "The key point is weaker price performance rather than a breakdown in access. Six-month liquidity remains well above peers, while sector moves account for 61.2% of current trading.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Current trading is being driven mainly by the sector, with sector factors explaining 61.2% of price action.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly sector-driven, accounting for about 61.2% of price changes. Other influences are market 23.3%, and company-specific 15.5%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 23.3%, sector 61.2%, and company-specific 15.5%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has shifted from company-driven to sector-driven over Feb to Apr."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 23.3%, sector 61.2%, and company-specific 15.5%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "Current driver: Sector at 61.2%. Broader market or sector moves still explain a meaningful part of the tape, so the stock is not trading on company news alone. Recent flow does not show a clear deterioration from the monthly baseline.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: sector factors account for 61.2% of current price moves.",
      "Monthly change: the pattern has shifted from clearly company-driven in February to market-led in March and now back to sector-driven in April."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Trading conditions look supported by the broader liquidity profile, even with a wider spread today.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on Apr 10, 2025 to Apr 10, 2026 (169 trading days • 22,824 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on top 10 bid and top 10 ask levels.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate displayed depth broadly matches the stronger monthly liquidity read.",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "Displayed liquidity looks supportive, with top-10 bid depth at 1.49x ask depth and a 4-tick spread.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 36.8% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Displayed depth remains supportive, in line with the stronger medium-term liquidity picture.",
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
    "intraday_insight": "The clearest intraday read is that the order book remains usable, with top-10 bid depth at 1.49x ask depth and a 4-tick spread. That supports the view that access is still holding up despite a wider spread than the one-month average.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "The current trading picture is better explained by sector direction and displayed depth.",
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
    "exec_subtitle": "Trading access remains strong for the company’s size, while today’s spread is wider than the recent average.",
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
        "value": "56.3/100",
        "sub": "Peer median 22.2 (+34.1 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "HK$540.9K",
        "sub": "Peer median HK$12.3K",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "2.98%",
        "sub": "4.27 ticks; peers 7.08%",
        "interp": {
          "text": "Tighter",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity remains strong relative to peers, with a 6M score of 56.3 compared with a peer median of 22.2. The near-term picture is less clean because the 1D spread is 61.2% above the 1M average, but top-10 bid depth at 1.49x ask depth and a 4-tick spread still point to usable displayed liquidity. That matters because the stock continues to screen as accessible for its size even as today’s dealing terms are less favourable than the monthly average.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "1.000",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "4.00%",
        "note": "4.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "1.49x",
        "note": "Bid depth / ask depth on displayed top-10 levels",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-2.02% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-4.84% with 44.5% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-4.84% with 17.8% fill.",
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
        "value": "56",
        "suffix": "/100",
        "bar_pct": 56,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Rank 1125/2574",
        "interpretation": {
          "text": "Moderate",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      },
      {
        "title": "Trading Cost (Spread)",
        "tooltip": {
          "title": "Trading Cost (Spread)",
          "body": "The gap between best buy and sell prices in the selected window."
        },
        "value": "2.98",
        "suffix": "%",
        "bar_pct": 30,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "2.98% • 4.27 ticks vs peers 7.08%",
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
        "value": "540.9K",
        "value_prefix": "HK$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Peer median HK$12.3K",
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
        "value": "61.2",
        "suffix": "sector",
        "bar_pct": 61,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 23.3% • Company 15.5%",
        "interpretation": {
          "text": "Sector",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Liquidity is a clear strength for the stock’s size, with a 6M liquidity score of 56.3 compared with a peer median of 22.2. That supports the view that the name remains accessible relative to peers.",
      "Near-term trading terms are less favourable than the recent average, with the 1D spread 61.2% above the 1M level. That matters because execution costs can rise even when the broader liquidity profile stays solid.",
      "Price performance is the weaker part of the picture, with a 1M return of -15.7% compared with peers at -6.2% and the market at +0.6%. Sector moves explain 61.2% of current trading, so the tape is being driven more by the group than by stock-specific momentum."
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
      "overall": "6M liquidity is strong: score 56.3 vs peer median 22.2 (+34.1 pts). 1D spread up 61.2% from 1M. Recent flow does not show a clear deterioration from the monthly baseline.",
      "strengths": [
        "6M score 56.3 vs peer median 22.2 (+34.1 pts)."
      ],
      "concerns": [
        "1D spread up 61.2% from 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: +34.1 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is -53.4%, worse than market, sector, and peers, which suggests weaker price performance than comparable names.",
        "vs_market": "Worse than market: -53.4% vs market 11.3%.",
        "vs_sector": "Worse than sector: -53.4% vs sector -11.8%.",
        "vs_peers": "Worse than peers: -53.4% vs peers -16.4%."
      },
      "adv": {
        "insight": "ADV is HK$540.9K, better than market, sector, and peers, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: HK$540.9K vs market HK$221.2K.",
        "vs_sector": "Better than sector: HK$540.9K vs sector HK$46.2K.",
        "vs_peers": "Better than peers: HK$540.9K vs peers HK$12.3K."
      },
      "spread": {
        "insight": "Spread is 2.98%, better than sector and peers, but worse than market, which shows execution cost is mixed across comparison groups.",
        "vs_market": "Worse than market: 2.98% vs market 2.66%.",
        "vs_sector": "Better than sector: 2.98% vs sector 3.97%.",
        "vs_peers": "Better than peers: 2.98% vs peers 7.08%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.23%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.23% vs market 0.09%.",
        "vs_sector": "Better than sector: 0.23% vs sector 0.02%.",
        "vs_peers": "Better than peers: 0.23% vs peers 0.01%."
      },
      "volatility": {
        "insight": "Volatility is 102.45%, worse than market, sector, and peers, which suggests day-to-day price swings are heavier than comparable names.",
        "vs_market": "Worse than market: 102.45% vs market 59.82%.",
        "vs_sector": "Worse than sector: 102.45% vs sector 70.86%.",
        "vs_peers": "Worse than peers: 102.45% vs peers 70.86%."
      },
      "trades": {
        "insight": "Trades is 40, better than market, sector, and peers, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 40 vs market 21.",
        "vs_sector": "Better than sector: 40 vs sector 6.",
        "vs_peers": "Better than peers: 40 vs peers 4."
      },
      "amihud": {
        "insight": "Price impact is 6.45e-08, better than sector and peers, but worse than market, which shows price impact is mixed across comparison groups.",
        "vs_market": "Worse than market: 6.45e-08 vs market 4.60e-08.",
        "vs_sector": "Better than sector: 6.45e-08 vs sectoe-07.",
        "vs_peers": "Better than peers: 6.45e-08 vs peers 6.28e-07."
      }
    },
    "performance": {
      "overall": "Recent performance is weak relative to both peers and the market, with the stock down 15.7% over one month compared with peers down 6.2% and the market up 0.6%. Liquidity gives a mixed read on that move because the six-month liquidity score of 56.3 sits 34.1 points above the peer median, yet the one-day spread is 61.2% above the one-month average.",
      "conclusion": "The move looks primarily sector-linked, but the depth of underperformance relative to peers points to stock-specific pressure as well."
    },
    "drivers": {
      "overall": "The stock is moving mainly with its sector right now, with sector factors driving 61.2% of price action. That matters because a 1M return of -15.7%, compared with -6.2% for peers and +0.6% for the market, shows the tape is not being supported by stronger relative performance.",
      "beta": "The current read is more balanced than a pure company story, with sector moves clearly outweighing stock-specific factors. Trading conditions are still mixed because the 1D spread is 61.2% above the 1M average, even as the broader 6M liquidity score of 56.3 remains well above the peer median of 22.2.",
      "rolling_change": "The driver mix has changed materially over the last three months, moving from clearly company-driven in February to mostly market-driven in March and now clearly sector-driven in April. That points to a pattern that is still shifting rather than one stable company-specific narrative."
    },
    "regime": {
      "overall": "High volatility is the active backdrop, which matters because trading conditions are less steady when price moves are larger and the spread is already 61.2% above the 1M level.",
      "current": "The stock is currently in a high-volatility state, while the top-10 bid depth at 1.49x ask depth shows displayed liquidity is still present on the bid side.",
      "transitions": "This looks more persistent than fleeting, with a typical run length of about 10.3 days, although the wider 1D spread points to some near-term instability within that state.",
      "trading_implications": "This state looks more persistent, with a typical run length of about 10.3 days."
    },
    "execution": {
      "overall": "Displayed liquidity looks balanced overall because bid depth exceeds ask depth by 1.49x and the spread is 4 ticks. That supports the view that buyers are present in the book and near-term access remains workable.",
      "concern": "The clearest stress point is that the 1D spread is 61.2% wider than the 1M average. That matters because execution quality is weaker today even with decent displayed depth.",
      "peer_context": "The book still supports the broader liquidity picture because the 6M liquidity score of 56.3 sits 34.1 points above the peer median of 22.2. Even so, today’s wider spread means the strong relative standing is showing through more in depth than in price formation."
    },
    "trader_composition": {
      "overall": "Flow looks mainly institution-like on both trade count and trade value, which gives the read a firmer base. Institution-like trades account for 43.3% of count and 53.5% of value, compared with retail-like at 6.7% and 2.6%, so participation appears supported by larger-value trading rather than just a high number of small tickets.",
      "retail_heavy": "By trade count and value, flow leans institution-like: institution-like trades are 43.3% of count and 53.5% of value, compared with retail-like at 6.7% of count and 2.6% of value.",
      "institutional_gap": "The institution-like share leads by 36.6 points on trade count and 50.9 points on trade value. That gap matters because both measures point in the same direction, even with 17.2% of trade count still unclear.",
      "peer_comparison": "Peer trader comparison is available in this report."
    },
    "price_moving": {
      "overall": "Price-moving trades account for 36.8% of total trades, so a meaningful share of activity is influencing the tape rather than just adding background turnover. The signal is directionally useful but not fully clean because 17.2% of trade count is unclear. Even so, the broader flow read still leans institution-like on both count and value. The cleaner message is the institution-like skew in observed trading, with 43.3% of count and 53.5% of value compared with retail-like at 6.7% and 2.6%.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short-selling data is unavailable for this report.",
      "level": "N/A",
      "correlation": "N/A",
      "trend": "There is no clear sign that short activity is becoming more important. The one-day spread is 61.2% above the one-month average, but displayed depth remains supportive with top-10 bid depth at 1.49 times ask depth and a 4-tick spread, so the broader liquidity picture still looks intact.",
      "peaks": "N/A"
    },
    "intraday": {
      "overall": "Liquidity is concentrated in the continuous session, which carries 99.0% of trading compared with 0.4% at the open and 0.6% at the close. That profile points to usable liquidity through the day rather than only at the session edges.",
      "hhi_interpretation": "Ambiguous or unclear flow is 17.2% of trade count, so the read is not fully clean.",
      "best_times": "The continuous session is the clear center of liquidity, with almost all trading taking place there. That makes intraday access look steadier than a market that relies on the open or close.",
      "peer_ranking": "The intraday pattern looks constructive because activity is concentrated in the continuous session and the concentration score remains low at 0.284. The peer ranking in the report tables shows how that intraday profile compares across the group."
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
        "1723",
        "244",
        "825",
        "312",
        "3368",
        "848",
        "974",
        "162",
        "602"
      ],
      "scores": [
        56.33255633255633,
        23.115773115773116,
        45.06604506604507,
        12.975912975912976,
        44.36674436674436,
        29.564879564879565,
        21.28982128982129,
        8.81895881895882,
        13.325563325563325
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
        540920.0,
        9565.0,
        119453.325,
        3262.0,
        66156.0,
        26259.0,
        15120.000000000002,
        302.0,
        2766.25
      ],
      "total": 2574
    },
    "market_comparison": {
      "sector_name": "Diversified Retailers",
      "sector_count": 12,
      "market_count": 2574,
      "company": {
        "volatility": 1.0244946208876098,
        "adv": 540920.0,
        "spread_pct": 0.029847951300976457,
        "turnover_ratio": 0.0023226322246267935,
        "amihud": 6.446709245032327e-08,
        "trades": 39.5
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.7392811363447659,
          "median": 0.5981546596018028,
          "min": 0.0,
          "max": 33.69284958669689,
          "p5": 0.22530761419840245,
          "p95": 1.5551236721277741,
          "count": 2574
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 56751878.340000205,
          "median": 221248.3125,
          "min": 0.0,
          "max": 11530530000.0,
          "p5": 0.0,
          "p95": 211998477.29999983,
          "count": 2574
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.04197546340436465,
          "median": 0.02664491311247985,
          "min": 0.000558678699550006,
          "max": 0.6003953685399606,
          "p5": 0.001386836666578392,
          "p95": 0.13589358247871558,
          "count": 2574
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.003679889452205205,
          "median": 0.0008690629810280508,
          "min": 0.0,
          "max": 0.18632,
          "p5": 0.0,
          "p95": 0.014621663938525271,
          "count": 2553
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 6.369212064410586e-07,
          "median": 4.6009826461052226e-08,
          "min": 0.0,
          "max": 4.7054394880481924e-05,
          "p5": 4.9617717549704375e-11,
          "p95": 3.4747662267446528e-06,
          "count": 2574
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1040.1926961926963,
          "median": 21.0,
          "min": 0.0,
          "max": 93269.5,
          "p5": 0.0,
          "p95": 5605.64999999998,
          "count": 2574
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.7752728323970017,
          "median": 0.7086235443782143,
          "min": 0.1934741617443099,
          "max": 1.4973777013306304,
          "p5": 0.28608221711366205,
          "p95": 1.4642455227457238,
          "count": 12
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 9889486.78125,
          "median": 46207.5,
          "min": 302.0,
          "max": 117228405.3,
          "p5": 1657.3375,
          "p95": 53050288.384999916,
          "count": 12
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.04977200316346769,
          "median": 0.03974473290284086,
          "min": 0.001070317251082809,
          "max": 0.11302580935076094,
          "p5": 0.0080490611004033,
          "p95": 0.09802796989082949,
          "count": 12
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0009156861081580548,
          "median": 0.00018483674117331528,
          "min": 6.0885728260480004e-06,
          "max": 0.006786481302897772,
          "p5": 1.3100579214607373e-05,
          "p95": 0.004331364309848731,
          "count": 12
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.3324945080863333e-06,
          "median": 2.4943339223286916e-07,
          "min": 1.0870715911576509e-10,
          "max": 6.293736132445806e-06,
          "p5": 4.454516256481467e-10,
          "p95": 5.019799341258428e-06,
          "count": 12
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 409.4583333333333,
          "median": 5.5,
          "min": 1.0,
          "max": 4793.5,
          "p5": 1.55,
          "p95": 2178.7999999999965,
          "count": 12
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 30360.446875,
          "median": 12342.5,
          "min": 302.0,
          "max": 119453.325,
          "p5": 1164.4875000000002,
          "p95": 100799.26124999997,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 6.6875,
          "median": 4.0,
          "min": 1.0,
          "max": 18.5,
          "p5": 1.35,
          "p95": 17.625,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.8699048246476996,
          "median": 0.7086235443782143,
          "min": 0.4781416923436851,
          "max": 1.4973777013306304,
          "p5": 0.5126072449824358,
          "p95": 1.47629358768569,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.06691442841112727,
          "median": 0.07079606974938434,
          "min": 0.03003826891999722,
          "max": 0.11302580935076094,
          "p5": 0.03144396092039136,
          "p95": 0.10348172969444092,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 5.251147621465391,
          "median": 5.052777777777778,
          "min": 1.8087097228084987,
          "max": 9.422077922077921,
          "p5": 2.675661319825524,
          "p95": 8.266417957042954,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.9873237623457123e-06,
          "median": 6.282201192564501e-07,
          "min": 1.0097853308552719e-07,
          "max": 6.293736132445806e-06,
          "p5": 1.3183340242838124e-07,
          "p95": 5.483049083508383e-06,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.00016108895220086467,
          "median": 7.004482759194062e-05,
          "min": 6.0885728260480004e-06,
          "max": 0.000640810374964127,
          "p5": 1.0550758709676691e-05,
          "p95": 0.0004975748867867923,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": -0.15652173913043466,
        "market": 0.005817570896814672,
        "sector": -0.03761178167027435,
        "peers": -0.06152537902608246
      },
      {
        "horizon": "3M",
        "stock": -0.3489932885906043,
        "market": 0.07151156981189555,
        "sector": -0.05200820731569222,
        "peers": -0.07776647845748164
      },
      {
        "horizon": "6M",
        "stock": -0.5336538461538463,
        "market": 0.11289080174108235,
        "sector": -0.11824011940787549,
        "peers": -0.1638301771999341
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
      "share_market": 0.23259251288899788,
      "share_sector": 0.6120874993401766,
      "share_idio": 0.1553199877708256,
      "beta_market": 4.503280155491516,
      "beta_sector": -6.157627692136051,
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
            "median": 0.23259251288899788,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "23.3%",
            "display_range": null,
            "display_text": "23.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 23.3,
            "plain_english": "Market explains about 23.3% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.6120874993401766,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "61.2%",
            "display_range": null,
            "display_text": "61.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 61.2,
            "plain_english": "Sector explains about 61.2% of price moves in the current state."
          },
          "company_share": {
            "median": 0.1553199877708256,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "15.5%",
            "display_range": null,
            "display_text": "15.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 15.5,
            "plain_english": "Company-specific explains about 15.5% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 4.503280155491516,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "4.50",
            "display_range": null,
            "display_text": "4.50",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Very high",
            "plain_english": "Very high market link: a 1% market move has lined up with about a 4.50% stock move in the same direction in this state.",
            "value_num": 4.5
          },
          "beta_stock_lag": {
            "median": 1.241672181780799,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.24",
            "display_range": null,
            "display_text": "1.24",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 1.24
          },
          "beta_sector": {
            "median": -6.157627692136051,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-6.16",
            "display_range": null,
            "display_text": "-6.16",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Very high",
            "plain_english": "Very high sector link: a 1% sector move has lined up with about a 6.16% stock move in the opposite direction in this state. The multiplier is unusually large and comes from only 251 trading days of history.",
            "value_num": -6.16
          },
          "beta_market_lag": {
            "median": -0.4965072557975619,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.50",
            "display_range": null,
            "display_text": "-0.50",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -0.5
          },
          "beta_sector_lag": {
            "median": -6.7961736353897715,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-6.80",
            "display_range": null,
            "display_text": "-6.80",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -6.8
          },
          "posterior_source": null,
          "intervals_collapsed": false,
          "confidence_label": "High, limited history",
          "confidence_note": "Based on 251 trading days relative to the 252-day target."
        },
        "rolling_windows": {},
        "monthly_history": [
          {
            "month_key": "2025-03",
            "month_label": "March 2025",
            "month_short_label": "Mar",
            "period_label": "2025-03-24 to 2025-03-31",
            "n_obs": 6,
            "partial_month": true,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4316533214077692,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "43.2%",
              "display_range": null,
              "display_text": "43.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 43.2,
              "plain_english": "Market explains about 43.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.4316533214077692,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "43.2%",
                "display_range": null,
                "display_text": "43.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 43.2,
                "plain_english": "Market explains about 43.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2742038587770303,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.4%",
                "display_range": null,
                "display_text": "27.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 27.4,
                "plain_english": "Sector explains about 27.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.29414281981520035,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "29.4%",
                "display_range": null,
                "display_text": "29.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 29.4,
                "plain_english": "Company-specific explains about 29.4% of price moves in the current state."
              }
            },
            "summary": "Mar: More mixed, though market-driven still has the largest share, though based on only 6 trading days."
          },
          {
            "month_key": "2025-04",
            "month_label": "April 2025",
            "month_short_label": "Apr",
            "period_label": "2025-04-01 to 2025-04-30",
            "n_obs": 19,
            "partial_month": false,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5209888672249148,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.1%",
              "display_range": null,
              "display_text": "52.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 52.1,
              "plain_english": "Market explains about 52.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.5209888672249148,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "52.1%",
                "display_range": null,
                "display_text": "52.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 52.1,
                "plain_english": "Market explains about 52.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.01925861685409611,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "1.9%",
                "display_range": null,
                "display_text": "1.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 1.9,
                "plain_english": "Sector explains about 1.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.45975251592098904,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "46.0%",
                "display_range": null,
                "display_text": "46.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 46.0,
                "plain_english": "Company-specific explains about 46.0% of price moves in the current state."
              }
            },
            "summary": "Apr: Mostly market-driven."
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
              "median": 0.7501278871929556,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "75.0%",
              "display_range": null,
              "display_text": "75.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 75.0,
              "plain_english": "Company-specific explains about 75.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.1754340986702343,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "17.5%",
                "display_range": null,
                "display_text": "17.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 17.5,
                "plain_english": "Market explains about 17.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.07443801413680998,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "7.4%",
                "display_range": null,
                "display_text": "7.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 7.4,
                "plain_english": "Sector explains about 7.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.7501278871929556,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "75.0%",
                "display_range": null,
                "display_text": "75.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 75.0,
                "plain_english": "Company-specific explains about 75.0% of price moves in the current state."
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
              "median": 0.49997280499969804,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.0%",
              "display_range": null,
              "display_text": "50.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 50.0,
              "plain_english": "Company-specific explains about 50.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.04796883853730474,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "4.8%",
                "display_range": null,
                "display_text": "4.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 4.8,
                "plain_english": "Market explains about 4.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.45205835646299725,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "45.2%",
                "display_range": null,
                "display_text": "45.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 45.2,
                "plain_english": "Sector explains about 45.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.49997280499969804,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "50.0%",
                "display_range": null,
                "display_text": "50.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 50.0,
                "plain_english": "Company-specific explains about 50.0% of price moves in the current state."
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
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
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
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
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
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
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
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 33.3,
                "plain_english": "Company-specific explains about 33.3% of price moves in the current state."
              }
            },
            "summary": "Jul: Much more balanced across company, sector, and market factors."
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
              "median": 0.35702666779293074,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "35.7%",
              "display_range": null,
              "display_text": "35.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 35.7,
              "plain_english": "Company-specific explains about 35.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3316480875521919,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "33.2%",
                "display_range": null,
                "display_text": "33.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 33.2,
                "plain_english": "Market explains about 33.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.31132524465487743,
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
                "plain_english": "Sector explains about 31.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.35702666779293074,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "35.7%",
                "display_range": null,
                "display_text": "35.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 35.7,
                "plain_english": "Company-specific explains about 35.7% of price moves in the current state."
              }
            },
            "summary": "Sep: Much more balanced across company, sector, and market factors."
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
              "median": 0.4811790399547171,
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
              "plain_english": "Company-specific explains about 48.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.28932512026804735,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "28.9%",
                "display_range": null,
                "display_text": "28.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 28.9,
                "plain_english": "Market explains about 28.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.22949583977723553,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "22.9%",
                "display_range": null,
                "display_text": "22.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 22.9,
                "plain_english": "Sector explains about 22.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4811790399547171,
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
                "plain_english": "Company-specific explains about 48.1% of price moves in the current state."
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
              "median": 0.6223737154660597,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "62.2%",
              "display_range": null,
              "display_text": "62.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 62.2,
              "plain_english": "Company-specific explains about 62.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.08326248110821166,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "8.3%",
                "display_range": null,
                "display_text": "8.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 8.3,
                "plain_english": "Market explains about 8.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2943638034257285,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "29.4%",
                "display_range": null,
                "display_text": "29.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 29.4,
                "plain_english": "Sector explains about 29.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6223737154660597,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "62.2%",
                "display_range": null,
                "display_text": "62.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 62.2,
                "plain_english": "Company-specific explains about 62.2% of price moves in the current state."
              }
            },
            "summary": "Nov: Still clearly company-driven."
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
              "median": 0.44062965617741395,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.1%",
              "display_range": null,
              "display_text": "44.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 44.1,
              "plain_english": "Company-specific explains about 44.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3629782844453231,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "36.3%",
                "display_range": null,
                "display_text": "36.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 36.3,
                "plain_english": "Market explains about 36.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.19639205937726284,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "19.6%",
                "display_range": null,
                "display_text": "19.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 19.6,
                "plain_english": "Sector explains about 19.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.44062965617741395,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "44.1%",
                "display_range": null,
                "display_text": "44.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 44.1,
                "plain_english": "Company-specific explains about 44.1% of price moves in the current state."
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
              "median": 0.5083798893375805,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.8%",
              "display_range": null,
              "display_text": "50.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 50.8,
              "plain_english": "Company-specific explains about 50.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3756148302690272,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "37.6%",
                "display_range": null,
                "display_text": "37.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 37.6,
                "plain_english": "Market explains about 37.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.11600528039339228,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "11.6%",
                "display_range": null,
                "display_text": "11.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 11.6,
                "plain_english": "Sector explains about 11.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5083798893375805,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "50.8%",
                "display_range": null,
                "display_text": "50.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 50.8,
                "plain_english": "Company-specific explains about 50.8% of price moves in the current state."
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
              "median": 0.7147508685316339,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "71.5%",
              "display_range": null,
              "display_text": "71.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 71.5,
              "plain_english": "Company-specific explains about 71.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.23755649112933222,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "23.8%",
                "display_range": null,
                "display_text": "23.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 23.8,
                "plain_english": "Market explains about 23.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.04769264033903381,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "4.8%",
                "display_range": null,
                "display_text": "4.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 4.8,
                "plain_english": "Sector explains about 4.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.7147508685316339,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "71.5%",
                "display_range": null,
                "display_text": "71.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 71.5,
                "plain_english": "Company-specific explains about 71.5% of price moves in the current state."
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
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4530477061991593,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.3%",
              "display_range": null,
              "display_text": "45.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 45.3,
              "plain_english": "Market explains about 45.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.4530477061991593,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "45.3%",
                "display_range": null,
                "display_text": "45.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 45.3,
                "plain_english": "Market explains about 45.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.10601222512084231,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "10.6%",
                "display_range": null,
                "display_text": "10.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 10.6,
                "plain_english": "Sector explains about 10.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.44094006867999835,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "44.1%",
                "display_range": null,
                "display_text": "44.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 44.1,
                "plain_english": "Company-specific explains about 44.1% of price moves in the current state."
              }
            },
            "summary": "Mar: Mostly market-driven."
          },
          {
            "month_key": "2026-04",
            "month_label": "April 2026",
            "month_short_label": "Apr",
            "period_label": "2026-04-01 to 2026-04-10",
            "n_obs": 5,
            "partial_month": false,
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.6120874993401766,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.2%",
              "display_range": null,
              "display_text": "61.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 61.2,
              "plain_english": "Sector explains about 61.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.23259251288899788,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "23.3%",
                "display_range": null,
                "display_text": "23.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 23.3,
                "plain_english": "Market explains about 23.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.6120874993401766,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "61.2%",
                "display_range": null,
                "display_text": "61.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 61.2,
                "plain_english": "Sector explains about 61.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.1553199877708256,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "15.5%",
                "display_range": null,
                "display_text": "15.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 15.5,
                "plain_english": "Company-specific explains about 15.5% of price moves in the current state."
              }
            },
            "summary": "Apr: Still clearly sector-driven, though based on only 5 trading days."
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
              "median": 0.018178033493691143,
              "low": 0.018178033493691143,
              "high": 0.018178033493691143
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
              "median": 0.08150757487728447,
              "low": 0.08150757487728447,
              "high": 0.08150757487728447
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
          "market_link_display": "4.50",
          "sector_link_display": "-6.16",
          "market_link_explainer": "Very high market link. A 1% market move has lined up with about a 4.50% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 6.16% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "1.24",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "High Volatility",
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "driver_share_pct": 61.2,
          "driver_share_display": "61.2%",
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
          "month_key": "2025-03",
          "month_label": "March 2025",
          "month_short_label": "Mar",
          "period_label": "2025-03-24 to 2025-03-31",
          "n_obs": 6,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Mar: More mixed, though market-driven still has the largest share, though based on only 6 trading days.",
          "share_market": 0.4316533214077692,
          "share_sector": 0.2742038587770303,
          "share_company": 0.29414281981520035,
          "share_market_display": "43.2%",
          "share_sector_display": "27.4%",
          "share_company_display": "29.4%",
          "dominant_share_display": "43.2%"
        },
        {
          "month_key": "2025-04",
          "month_label": "April 2025",
          "month_short_label": "Apr",
          "period_label": "2025-04-01 to 2025-04-30",
          "n_obs": 19,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Apr: Mostly market-driven.",
          "share_market": 0.5209888672249148,
          "share_sector": 0.01925861685409611,
          "share_company": 0.45975251592098904,
          "share_market_display": "52.1%",
          "share_sector_display": "1.9%",
          "share_company_display": "46.0%",
          "dominant_share_display": "52.1%"
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
          "summary": "May: Still clearly company-driven.",
          "share_market": 0.1754340986702343,
          "share_sector": 0.07443801413680998,
          "share_company": 0.7501278871929556,
          "share_market_display": "17.5%",
          "share_sector_display": "7.4%",
          "share_company_display": "75.0%",
          "dominant_share_display": "75.0%"
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
          "share_market": 0.04796883853730474,
          "share_sector": 0.45205835646299725,
          "share_company": 0.49997280499969804,
          "share_market_display": "4.8%",
          "share_sector_display": "45.2%",
          "share_company_display": "50.0%",
          "dominant_share_display": "50.0%"
        },
        {
          "month_key": "2025-07",
          "month_label": "July 2025",
          "month_short_label": "Jul",
          "period_label": "2025-07-02 to 2025-07-31",
          "n_obs": 22,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Jul: Much more balanced across company, sector, and market factors.",
          "share_market": 0.3333333333333333,
          "share_sector": 0.3333333333333333,
          "share_company": 0.3333333333333333,
          "share_market_display": "33.3%",
          "share_sector_display": "33.3%",
          "share_company_display": "33.3%",
          "dominant_share_display": "33.3%"
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
          "summary": "Sep: Much more balanced across company, sector, and market factors.",
          "share_market": 0.3316480875521919,
          "share_sector": 0.31132524465487743,
          "share_company": 0.35702666779293074,
          "share_market_display": "33.2%",
          "share_sector_display": "31.1%",
          "share_company_display": "35.7%",
          "dominant_share_display": "35.7%"
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
          "share_market": 0.28932512026804735,
          "share_sector": 0.22949583977723553,
          "share_company": 0.4811790399547171,
          "share_market_display": "28.9%",
          "share_sector_display": "22.9%",
          "share_company_display": "48.1%",
          "dominant_share_display": "48.1%"
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
          "summary": "Nov: Still clearly company-driven.",
          "share_market": 0.08326248110821166,
          "share_sector": 0.2943638034257285,
          "share_company": 0.6223737154660597,
          "share_market_display": "8.3%",
          "share_sector_display": "29.4%",
          "share_company_display": "62.2%",
          "dominant_share_display": "62.2%"
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
          "share_market": 0.3629782844453231,
          "share_sector": 0.19639205937726284,
          "share_company": 0.44062965617741395,
          "share_market_display": "36.3%",
          "share_sector_display": "19.6%",
          "share_company_display": "44.1%",
          "dominant_share_display": "44.1%"
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
          "share_market": 0.3756148302690272,
          "share_sector": 0.11600528039339228,
          "share_company": 0.5083798893375805,
          "share_market_display": "37.6%",
          "share_sector_display": "11.6%",
          "share_company_display": "50.8%",
          "dominant_share_display": "50.8%"
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
          "summary": "Feb: Still clearly company-driven.",
          "share_market": 0.23755649112933222,
          "share_sector": 0.04769264033903381,
          "share_company": 0.7147508685316339,
          "share_market_display": "23.8%",
          "share_sector_display": "4.8%",
          "share_company_display": "71.5%",
          "dominant_share_display": "71.5%"
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
          "share_market": 0.4530477061991593,
          "share_sector": 0.10601222512084231,
          "share_company": 0.44094006867999835,
          "share_market_display": "45.3%",
          "share_sector_display": "10.6%",
          "share_company_display": "44.1%",
          "dominant_share_display": "45.3%"
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-10",
          "n_obs": 5,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "Apr: Still clearly sector-driven, though based on only 5 trading days.",
          "share_market": 0.23259251288899788,
          "share_sector": 0.6120874993401766,
          "share_company": 0.1553199877708256,
          "share_market_display": "23.3%",
          "share_sector_display": "61.2%",
          "share_company_display": "15.5%",
          "dominant_share_display": "61.2%"
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
              "median": 0.018178033493691143,
              "low": 0.018178033493691143,
              "high": 0.018178033493691143
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
              "median": 0.08150757487728447,
              "low": 0.08150757487728447,
              "high": 0.08150757487728447
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
          "price": 0.98,
          "quantity": 100000.0,
          "value": 98000.0
        },
        {
          "level": 2,
          "price": 0.97,
          "quantity": 70000.0,
          "value": 67900.0
        },
        {
          "level": 3,
          "price": 0.96,
          "quantity": 66000.0,
          "value": 63360.0
        },
        {
          "level": 4,
          "price": 0.95,
          "quantity": 98000.0,
          "value": 93100.0
        },
        {
          "level": 5,
          "price": 0.94,
          "quantity": 14000.0,
          "value": 13160.0
        },
        {
          "level": 6,
          "price": 0.93,
          "quantity": 50000.0,
          "value": 46500.0
        },
        {
          "level": 7,
          "price": 0.92,
          "quantity": 22000.0,
          "value": 20240.0
        },
        {
          "level": 8,
          "price": 0.91,
          "quantity": 20000.0,
          "value": 18200.0
        },
        {
          "level": 9,
          "price": 0.9,
          "quantity": 18000.0,
          "value": 16200.0
        },
        {
          "level": 10,
          "price": 0.87,
          "quantity": 10000.0,
          "value": 8700.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 1.02,
          "quantity": 4000.0,
          "value": 4080.0
        },
        {
          "level": 2,
          "price": 1.09,
          "quantity": 10000.0,
          "value": 10900.0
        },
        {
          "level": 3,
          "price": 1.15,
          "quantity": 6000.0,
          "value": 6899.999999999999
        },
        {
          "level": 4,
          "price": 1.17,
          "quantity": 24000.0,
          "value": 28080.0
        },
        {
          "level": 5,
          "price": 1.18,
          "quantity": 20000.0,
          "value": 23600.0
        },
        {
          "level": 6,
          "price": 1.19,
          "quantity": 84000.0,
          "value": 99960.0
        },
        {
          "level": 7,
          "price": 1.2,
          "quantity": 70000.0,
          "value": 84000.0
        },
        {
          "level": 8,
          "price": 1.21,
          "quantity": 20000.0,
          "value": 24200.0
        },
        {
          "level": 9,
          "price": 1.23,
          "quantity": 6000.0,
          "value": 7380.0
        },
        {
          "level": 10,
          "price": 1.27,
          "quantity": 8000.0,
          "value": 10160.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-04-10 07:59:31.004000000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XHKG",
        "mid_price": 1.0,
        "spread_pct": 0.040000000000000036,
        "spread_ticks": 4.0,
        "tick_size": 0.01,
        "bid_depth_notional_top10": 445360.0,
        "ask_depth_notional_top10": 299260.0,
        "bid_ask_depth_ratio": 1.4882
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 366,
        "history_limited": false,
        "trade_days_used": 169,
        "n_trades_used": 22824,
        "first_trade_date": "2025-04-10",
        "last_trade_date": "2026-04-10",
        "window_label": "Apr 10, 2025 to Apr 10, 2026",
        "window_short_label": "Apr 10, 2025 to Apr 10, 2026",
        "trade_days_label": "169 trading days",
        "trade_count_label": "22,824 trades",
        "window_detail_label": "169 trading days • 22,824 trades",
        "history_note": "Trade-size percentiles use Apr 10, 2025 to Apr 10, 2026 history (169 trading days • 22,824 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 43200.0,
            "impact_pct": -0.02,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 9.7,
            "pct_of_adv": 23.35
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 70125.0,
            "impact_pct": -0.02,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 15.75,
            "pct_of_adv": 37.9
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 1055466.26,
            "impact_pct": -0.048376,
            "filled_pct": 42.2,
            "levels_consumed": 10,
            "pct_of_bid_depth": 236.99,
            "pct_of_adv": 570.37
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-04-10",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "2513456642.0",
            "timestamp": "2026-04-10 03:22:24.834000000",
            "local_timestamp": "2026-04-10 11:22:24",
            "posted_price": 1.1,
            "size_shares": 200000.0,
            "notional": 220000.0,
            "impact_pct": -0.028072,
            "filled_pct": 100.0,
            "levels_consumed": 3,
            "pct_of_bid_depth": 49.4,
            "price_vs_mid_pct": 10.0,
            "executed_event_count": 0,
            "event_count": 3
          },
          {
            "rank": 2,
            "order_id": "2503710210.0",
            "timestamp": "2026-04-10 03:21:19.250000000",
            "local_timestamp": "2026-04-10 11:21:19",
            "posted_price": 1.19,
            "size_shares": 100000.0,
            "notional": 119000.0,
            "impact_pct": -0.02178,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 26.72,
            "price_vs_mid_pct": 19.0,
            "executed_event_count": 0,
            "event_count": 2
          },
          {
            "rank": 3,
            "order_id": "2505134850.0",
            "timestamp": "2026-04-10 03:21:27.028000000",
            "local_timestamp": "2026-04-10 11:21:27",
            "posted_price": 1.2,
            "size_shares": 94000.0,
            "notional": 112800.0,
            "impact_pct": -0.021324,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 25.33,
            "price_vs_mid_pct": 20.0,
            "executed_event_count": 0,
            "event_count": 7
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-04-10",
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
            "spread_pct": 0.11981566820276489,
            "spread_ticks": 12.99999999999999,
            "bid_depth_notional": 117220.0,
            "ask_depth_notional": 153960.0,
            "mid_price": 1.085
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.08144796380090485,
            "spread_ticks": 8.999999999999986,
            "bid_depth_notional": 119340.0,
            "ask_depth_notional": 156260.0,
            "mid_price": 1.105
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.03703703703703707,
            "spread_ticks": 4.0000000000000036,
            "bid_depth_notional": 119340.0,
            "ask_depth_notional": 158460.0,
            "mid_price": 1.08
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.09691629955947126,
            "spread_ticks": 10.999999999999988,
            "bid_depth_notional": 124840.0,
            "ask_depth_notional": 160920.0,
            "mid_price": 1.135
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.09009009009008997,
            "spread_ticks": 9.999999999999986,
            "bid_depth_notional": 163220.0,
            "ask_depth_notional": 201920.0,
            "mid_price": 1.1099999999999999
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.04784688995215316,
            "spread_ticks": 5.000000000000004,
            "bid_depth_notional": 172460.0,
            "ask_depth_notional": 278320.0,
            "mid_price": 1.045
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.150943396226415,
            "spread_ticks": 15.999999999999991,
            "bid_depth_notional": 148820.0,
            "ask_depth_notional": 297640.0,
            "mid_price": 1.06
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.04040404040404044,
            "spread_ticks": 4.0000000000000036,
            "bid_depth_notional": 255860.0,
            "ask_depth_notional": 293080.0,
            "mid_price": 0.99
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.06896551724137936,
            "spread_ticks": 7.000000000000006,
            "bid_depth_notional": 557780.0,
            "ask_depth_notional": 342240.0,
            "mid_price": 1.0150000000000001
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.06896551724137936,
            "spread_ticks": 7.000000000000006,
            "bid_depth_notional": 374200.0,
            "ask_depth_notional": 323840.0,
            "mid_price": 1.0150000000000001
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.040000000000000036,
            "spread_ticks": 4.0000000000000036,
            "bid_depth_notional": 445360.0,
            "ask_depth_notional": 299260.0,
            "mid_price": 1.0
          }
        ],
        "summary": {
          "median_spread_pct": 0.06896551724137936,
          "median_spread_ticks": 7.000000000000006,
          "median_bid_depth_notional": 163220.0,
          "median_ask_depth_notional": 278320.0,
          "tightest_bucket": "10:30",
          "widest_bucket": "13:30",
          "deepest_bid_bucket": "14:30",
          "thinnest_bid_bucket": "09:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 27.0,
      "peers": [
        {
          "ticker": "825",
          "pct": 1449.9
        },
        {
          "ticker": "3368",
          "pct": 9398.5
        },
        {
          "ticker": "244",
          "pct": 12642.2
        },
        {
          "ticker": "312",
          "pct": 16103.1
        },
        {
          "ticker": "848",
          "pct": 35932.4
        },
        {
          "ticker": "602",
          "pct": 45197.7
        },
        {
          "ticker": "974",
          "pct": 212766.0
        },
        {
          "ticker": "162",
          "pct": null
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 103,
          "n_runs": 44,
          "n_trade_days": 1,
          "first_trade_date": "2026-04-10",
          "last_trade_date": "2026-04-10",
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
            "retail_pct": 0.0970873786407767,
            "mixed_pct": 0.0,
            "instit_pct": 0.36893203883495146,
            "ambiguous_pct": 0.14563106796116504,
            "unobservable_pct": 0.3883495145631068,
            "unclear_pct": 0.5339805825242718,
            "retail_qty_pct": 0.0333716915995397,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.3751438434982739,
            "ambiguous_qty_pct": 0.13118527042577677,
            "unobservable_qty_pct": 0.46029919447640966,
            "unclear_qty_pct": 0.5914844649021864,
            "retail_notional_pct": 0.03490919816289555,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.37502633463953144,
            "ambiguous_notional_pct": 0.12497366536046854,
            "unobservable_notional_pct": 0.46509080183710444,
            "unclear_notional_pct": 0.590064467197573
          },
          "run_composition": {
            "retail_pct": 0.22727272727272727,
            "mixed_pct": 0.0,
            "instit_pct": 0.20454545454545456,
            "ambiguous_pct": 0.11363636363636363,
            "unobservable_pct": 0.45454545454545453,
            "unclear_pct": 0.5681818181818181,
            "retail_notional_pct": 0.03490919816289555,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.37502633463953144,
            "unclear_notional_pct": 0.590064467197573
          },
          "counts": {
            "trades": {
              "retail": 10,
              "mixed": 0,
              "institutional": 38,
              "ambiguous": 15,
              "unobservable": 40,
              "unclear": 55
            },
            "runs": {
              "retail": 10,
              "mixed": 0,
              "institutional": 9,
              "ambiguous": 5,
              "unobservable": 20,
              "unclear": 25
            }
          },
          "confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.4318181818181818,
            "na": 0.5681818181818182
          },
          "confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 19,
            "na": 25
          },
          "trade_confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.46601941747572817,
            "na": 0.5339805825242718
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 48,
            "na": 55
          },
          "observability": {
            "avg_feature_coverage": 0.6522727272727273,
            "observable_run_pct": 0.5454545454545454,
            "ambiguous_run_pct": 0.11363636363636363,
            "unobservable_run_pct": 0.45454545454545453
          },
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "dominant_share": 0.45454545454545453,
          "dominance_gap": 0.22727272727272727,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 103
            },
            "d2_information": {
              "UNOBSERVABLE": 103
            },
            "d3_urgency": {
              "IMMEDIATE": 43,
              "ADAPTIVE": 1
            },
            "participant_confidence": {
              "NA": 25,
              "LOW": 19
            }
          },
          "trade_size": {
            "avg": 9216.699029126214,
            "median": 6120.0
          },
          "run_size": {
            "avg": 21575.454545454544,
            "median": 15200.0,
            "avg_length": 2.340909090909091
          },
          "recent_trades": [
            {
              "trade_id": "103",
              "timestamp": "2026-04-10T07:35:29.499549",
              "price": 0.97,
              "size": 2000.0,
              "notional": 1940.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 6381,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "102",
              "timestamp": "2026-04-10T07:35:20.985614",
              "price": 0.98,
              "size": 8000.0,
              "notional": 7840.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 6380,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "99",
              "timestamp": "2026-04-10T07:35:20.985238",
              "price": 0.98,
              "size": 10000.0,
              "notional": 9800.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 6380,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "98",
              "timestamp": "2026-04-10T07:35:20.985238",
              "price": 0.98,
              "size": 2000.0,
              "notional": 1960.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 6380,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "101",
              "timestamp": "2026-04-10T07:35:20.985238",
              "price": 0.98,
              "size": 2000.0,
              "notional": 1960.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 6380,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "100",
              "timestamp": "2026-04-10T07:35:20.985238",
              "price": 0.98,
              "size": 2000.0,
              "notional": 1960.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 6380,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "97",
              "timestamp": "2026-04-10T06:39:42.582533",
              "price": 0.95,
              "size": 10000.0,
              "notional": 9500.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 6379,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "96",
              "timestamp": "2026-04-10T06:39:42.582533",
              "price": 0.96,
              "size": 4000.0,
              "notional": 3840.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 6379,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "95",
              "timestamp": "2026-04-10T06:39:42.582533",
              "price": 0.96,
              "size": 16000.0,
              "notional": 15360.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 6379,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "94",
              "timestamp": "2026-04-10T06:39:42.582533",
              "price": 0.96,
              "size": 14000.0,
              "notional": 13440.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 6379,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "93",
              "timestamp": "2026-04-10T06:39:42.582533",
              "price": 0.97,
              "size": 6000.0,
              "notional": 5820.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 6379,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "92",
              "timestamp": "2026-04-10T06:34:13.797671",
              "price": 1.01,
              "size": 2000.0,
              "notional": 2020.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 6378,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "91",
              "timestamp": "2026-04-10T06:26:00.598243",
              "price": 1.0,
              "size": 2000.0,
              "notional": 2000.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 6377,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "90",
              "timestamp": "2026-04-10T06:16:04.714294",
              "price": 1.0,
              "size": 30000.0,
              "notional": 30000.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 6376,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "89",
              "timestamp": "2026-04-10T06:16:04.714294",
              "price": 1.0,
              "size": 4000.0,
              "notional": 4000.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 6376,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "88",
              "timestamp": "2026-04-10T06:11:48.176047",
              "price": 1.0,
              "size": 2000.0,
              "notional": 2000.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 6375,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "87",
              "timestamp": "2026-04-10T06:08:52.348400",
              "price": 1.0,
              "size": 12000.0,
              "notional": 12000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 6374,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "86",
              "timestamp": "2026-04-10T06:08:52.347909",
              "price": 1.0,
              "size": 2000.0,
              "notional": 2000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 6374,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "85",
              "timestamp": "2026-04-10T06:08:52.347909",
              "price": 1.0,
              "size": 10000.0,
              "notional": 10000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 6374,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "84",
              "timestamp": "2026-04-10T06:05:41.294056",
              "price": 1.0,
              "size": 10000.0,
              "notional": 10000.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 6373,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "83",
              "timestamp": "2026-04-10T06:01:16.805045",
              "price": 1.0,
              "size": 16000.0,
              "notional": 16000.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 6372,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "82",
              "timestamp": "2026-04-10T06:01:04.215934",
              "price": 0.95,
              "size": 20000.0,
              "notional": 19000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 6371,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "81",
              "timestamp": "2026-04-10T06:01:04.215934",
              "price": 0.95,
              "size": 16000.0,
              "notional": 15200.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 6371,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "80",
              "timestamp": "2026-04-10T06:01:04.215934",
              "price": 0.96,
              "size": 10000.0,
              "notional": 9600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 6371,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "79",
              "timestamp": "2026-04-10T06:01:04.215934",
              "price": 0.96,
              "size": 2000.0,
              "notional": 1920.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 6371,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "78",
              "timestamp": "2026-04-10T06:01:04.215934",
              "price": 0.98,
              "size": 2000.0,
              "notional": 1960.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 6371,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "77",
              "timestamp": "2026-04-10T05:55:51.341409",
              "price": 1.0,
              "size": 10000.0,
              "notional": 10000.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 6370,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "76",
              "timestamp": "2026-04-10T05:53:39.361531",
              "price": 1.0,
              "size": 10000.0,
              "notional": 10000.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 6369,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "75",
              "timestamp": "2026-04-10T05:53:39.361531",
              "price": 1.0,
              "size": 14000.0,
              "notional": 14000.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 6369,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "74",
              "timestamp": "2026-04-10T05:53:39.361531",
              "price": 1.01,
              "size": 10000.0,
              "notional": 10100.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 6369,
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
          "n_trades": 510,
          "n_runs": 267,
          "n_trade_days": 20,
          "first_trade_date": "2026-03-10",
          "last_trade_date": "2026-04-10",
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
            "retail_pct": 0.08627450980392157,
            "mixed_pct": 0.0,
            "instit_pct": 0.36666666666666664,
            "ambiguous_pct": 0.20784313725490197,
            "unobservable_pct": 0.3392156862745098,
            "unclear_pct": 0.5470588235294118,
            "retail_qty_pct": 0.02835538752362949,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.4448645242596093,
            "ambiguous_qty_pct": 0.1776937618147448,
            "unobservable_qty_pct": 0.34908632640201637,
            "unclear_qty_pct": 0.5267800882167611,
            "retail_notional_pct": 0.027848200312989044,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.44642410015649453,
            "ambiguous_notional_pct": 0.1739319248826291,
            "unobservable_notional_pct": 0.3517957746478873,
            "unclear_notional_pct": 0.5257276995305165
          },
          "run_composition": {
            "retail_pct": 0.15355805243445692,
            "mixed_pct": 0.0,
            "instit_pct": 0.2209737827715356,
            "ambiguous_pct": 0.20973782771535582,
            "unobservable_pct": 0.4157303370786517,
            "unclear_pct": 0.6254681647940075,
            "retail_notional_pct": 0.027848200312989044,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.44642410015649453,
            "unclear_notional_pct": 0.5257276995305165
          },
          "counts": {
            "trades": {
              "retail": 44,
              "mixed": 0,
              "institutional": 187,
              "ambiguous": 106,
              "unobservable": 173,
              "unclear": 279
            },
            "runs": {
              "retail": 41,
              "mixed": 0,
              "institutional": 59,
              "ambiguous": 56,
              "unobservable": 111,
              "unclear": 167
            }
          },
          "confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.37453183520599254,
            "na": 0.6254681647940075
          },
          "confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 100,
            "na": 167
          },
          "trade_confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.45294117647058824,
            "na": 0.5470588235294118
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 231,
            "na": 279
          },
          "observability": {
            "avg_feature_coverage": 0.6747191011235956,
            "observable_run_pct": 0.5842696629213483,
            "ambiguous_run_pct": 0.20973782771535582,
            "unobservable_run_pct": 0.4157303370786517
          },
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "dominant_share": 0.4157303370786517,
          "dominance_gap": 0.1947565543071161,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 510
            },
            "d2_information": {
              "UNOBSERVABLE": 510
            },
            "d3_urgency": {
              "IMMEDIATE": 266,
              "ADAPTIVE": 1
            },
            "participant_confidence": {
              "NA": 167,
              "LOW": 100
            }
          },
          "trade_size": {
            "avg": 10023.529411764706,
            "median": 5880.0
          },
          "run_size": {
            "avg": 19146.067415730337,
            "median": 10800.0,
            "avg_length": 1.9101123595505618
          },
          "recent_trades": [
            {
              "trade_id": "103",
              "timestamp": "2026-04-10T07:35:29.499549",
              "price": 0.97,
              "size": 2000.0,
              "notional": 1940.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 6381,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "102",
              "timestamp": "2026-04-10T07:35:20.985614",
              "price": 0.98,
              "size": 8000.0,
              "notional": 7840.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 6380,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "99",
              "timestamp": "2026-04-10T07:35:20.985238",
              "price": 0.98,
              "size": 10000.0,
              "notional": 9800.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 6380,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "98",
              "timestamp": "2026-04-10T07:35:20.985238",
              "price": 0.98,
              "size": 2000.0,
              "notional": 1960.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 6380,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "101",
              "timestamp": "2026-04-10T07:35:20.985238",
              "price": 0.98,
              "size": 2000.0,
              "notional": 1960.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 6380,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "100",
              "timestamp": "2026-04-10T07:35:20.985238",
              "price": 0.98,
              "size": 2000.0,
              "notional": 1960.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 6380,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "97",
              "timestamp": "2026-04-10T06:39:42.582533",
              "price": 0.95,
              "size": 10000.0,
              "notional": 9500.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 6379,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "96",
              "timestamp": "2026-04-10T06:39:42.582533",
              "price": 0.96,
              "size": 4000.0,
              "notional": 3840.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 6379,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "95",
              "timestamp": "2026-04-10T06:39:42.582533",
              "price": 0.96,
              "size": 16000.0,
              "notional": 15360.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 6379,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "94",
              "timestamp": "2026-04-10T06:39:42.582533",
              "price": 0.96,
              "size": 14000.0,
              "notional": 13440.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 6379,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "93",
              "timestamp": "2026-04-10T06:39:42.582533",
              "price": 0.97,
              "size": 6000.0,
              "notional": 5820.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 6379,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "92",
              "timestamp": "2026-04-10T06:34:13.797671",
              "price": 1.01,
              "size": 2000.0,
              "notional": 2020.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 6378,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "91",
              "timestamp": "2026-04-10T06:26:00.598243",
              "price": 1.0,
              "size": 2000.0,
              "notional": 2000.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 6377,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "90",
              "timestamp": "2026-04-10T06:16:04.714294",
              "price": 1.0,
              "size": 30000.0,
              "notional": 30000.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 6376,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "89",
              "timestamp": "2026-04-10T06:16:04.714294",
              "price": 1.0,
              "size": 4000.0,
              "notional": 4000.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 6376,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "88",
              "timestamp": "2026-04-10T06:11:48.176047",
              "price": 1.0,
              "size": 2000.0,
              "notional": 2000.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 6375,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "87",
              "timestamp": "2026-04-10T06:08:52.348400",
              "price": 1.0,
              "size": 12000.0,
              "notional": 12000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 6374,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "86",
              "timestamp": "2026-04-10T06:08:52.347909",
              "price": 1.0,
              "size": 2000.0,
              "notional": 2000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 6374,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "85",
              "timestamp": "2026-04-10T06:08:52.347909",
              "price": 1.0,
              "size": 10000.0,
              "notional": 10000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 6374,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "84",
              "timestamp": "2026-04-10T06:05:41.294056",
              "price": 1.0,
              "size": 10000.0,
              "notional": 10000.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 6373,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "83",
              "timestamp": "2026-04-10T06:01:16.805045",
              "price": 1.0,
              "size": 16000.0,
              "notional": 16000.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 6372,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "82",
              "timestamp": "2026-04-10T06:01:04.215934",
              "price": 0.95,
              "size": 20000.0,
              "notional": 19000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 6371,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "81",
              "timestamp": "2026-04-10T06:01:04.215934",
              "price": 0.95,
              "size": 16000.0,
              "notional": 15200.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 6371,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "80",
              "timestamp": "2026-04-10T06:01:04.215934",
              "price": 0.96,
              "size": 10000.0,
              "notional": 9600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 6371,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "79",
              "timestamp": "2026-04-10T06:01:04.215934",
              "price": 0.96,
              "size": 2000.0,
              "notional": 1920.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 6371,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "78",
              "timestamp": "2026-04-10T06:01:04.215934",
              "price": 0.98,
              "size": 2000.0,
              "notional": 1960.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 6371,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "77",
              "timestamp": "2026-04-10T05:55:51.341409",
              "price": 1.0,
              "size": 10000.0,
              "notional": 10000.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 6370,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "76",
              "timestamp": "2026-04-10T05:53:39.361531",
              "price": 1.0,
              "size": 10000.0,
              "notional": 10000.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 6369,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "75",
              "timestamp": "2026-04-10T05:53:39.361531",
              "price": 1.0,
              "size": 14000.0,
              "notional": 14000.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 6369,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "74",
              "timestamp": "2026-04-10T05:53:39.361531",
              "price": 1.01,
              "size": 10000.0,
              "notional": 10100.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 6369,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": []
        },
        "3m": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 2268,
          "n_runs": 1231,
          "n_trade_days": 62,
          "first_trade_date": "2026-01-06",
          "last_trade_date": "2026-04-10",
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
            "retail_pct": 0.09259259259259259,
            "mixed_pct": 0.0,
            "instit_pct": 0.30599647266313934,
            "ambiguous_pct": 0.18033509700176367,
            "unobservable_pct": 0.4210758377425044,
            "unclear_pct": 0.6014109347442681,
            "retail_qty_pct": 0.024710969905568793,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.39784661547965755,
            "ambiguous_qty_pct": 0.12046597828964786,
            "unobservable_qty_pct": 0.45697643632512575,
            "unclear_qty_pct": 0.5774424146147736,
            "retail_notional_pct": 0.02406843624431122,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.39492460585037287,
            "ambiguous_notional_pct": 0.11755277223011246,
            "unobservable_notional_pct": 0.4634541856752034,
            "unclear_notional_pct": 0.5810069579053159
          },
          "run_composition": {
            "retail_pct": 0.16246953696181965,
            "mixed_pct": 0.0,
            "instit_pct": 0.17303005686433795,
            "ambiguous_pct": 0.1957757920389927,
            "unobservable_pct": 0.4687246141348497,
            "unclear_pct": 0.6645004061738424,
            "retail_notional_pct": 0.02406843624431122,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.39492460585037287,
            "unclear_notional_pct": 0.5810069579053159
          },
          "counts": {
            "trades": {
              "retail": 210,
              "mixed": 0,
              "institutional": 694,
              "ambiguous": 409,
              "unobservable": 955,
              "unclear": 1364
            },
            "runs": {
              "retail": 200,
              "mixed": 0,
              "institutional": 213,
              "ambiguous": 241,
              "unobservable": 577,
              "unclear": 818
            }
          },
          "confidence": {
            "high": 0.0,
            "medium": 0.02761982128350934,
            "low": 0.30787977254264826,
            "na": 0.6645004061738424
          },
          "confidence_counts": {
            "high": 0,
            "medium": 34,
            "low": 379,
            "na": 818
          },
          "trade_confidence": {
            "high": 0.0,
            "medium": 0.021604938271604937,
            "low": 0.376984126984127,
            "na": 0.6014109347442681
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 49,
            "low": 855,
            "na": 1364
          },
          "observability": {
            "avg_feature_coverage": 0.6495532087733551,
            "observable_run_pct": 0.5312753858651502,
            "ambiguous_run_pct": 0.1957757920389927,
            "unobservable_run_pct": 0.4687246141348497
          },
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "dominant_share": 0.4687246141348497,
          "dominance_gap": 0.272948822095857,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 2268
            },
            "d2_information": {
              "UNOBSERVABLE": 2268
            },
            "d3_urgency": {
              "IMMEDIATE": 1226,
              "ADAPTIVE": 5
            },
            "participant_confidence": {
              "NA": 818,
              "LOW": 379,
              "MEDIUM": 34
            }
          },
          "trade_size": {
            "avg": 11998.963844797177,
            "median": 5520.0
          },
          "run_size": {
            "avg": 22106.945572705117,
            "median": 10800.0,
            "avg_length": 1.8424045491470349
          },
          "recent_trades": [
            {
              "trade_id": "103",
              "timestamp": "2026-04-10T07:35:29.499549",
              "price": 0.97,
              "size": 2000.0,
              "notional": 1940.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 6381,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "102",
              "timestamp": "2026-04-10T07:35:20.985614",
              "price": 0.98,
              "size": 8000.0,
              "notional": 7840.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 6380,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "99",
              "timestamp": "2026-04-10T07:35:20.985238",
              "price": 0.98,
              "size": 10000.0,
              "notional": 9800.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 6380,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "98",
              "timestamp": "2026-04-10T07:35:20.985238",
              "price": 0.98,
              "size": 2000.0,
              "notional": 1960.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 6380,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "101",
              "timestamp": "2026-04-10T07:35:20.985238",
              "price": 0.98,
              "size": 2000.0,
              "notional": 1960.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 6380,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "100",
              "timestamp": "2026-04-10T07:35:20.985238",
              "price": 0.98,
              "size": 2000.0,
              "notional": 1960.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 6380,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "97",
              "timestamp": "2026-04-10T06:39:42.582533",
              "price": 0.95,
              "size": 10000.0,
              "notional": 9500.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 6379,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "96",
              "timestamp": "2026-04-10T06:39:42.582533",
              "price": 0.96,
              "size": 4000.0,
              "notional": 3840.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 6379,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "95",
              "timestamp": "2026-04-10T06:39:42.582533",
              "price": 0.96,
              "size": 16000.0,
              "notional": 15360.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 6379,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "94",
              "timestamp": "2026-04-10T06:39:42.582533",
              "price": 0.96,
              "size": 14000.0,
              "notional": 13440.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 6379,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "93",
              "timestamp": "2026-04-10T06:39:42.582533",
              "price": 0.97,
              "size": 6000.0,
              "notional": 5820.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 6379,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "92",
              "timestamp": "2026-04-10T06:34:13.797671",
              "price": 1.01,
              "size": 2000.0,
              "notional": 2020.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 6378,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "91",
              "timestamp": "2026-04-10T06:26:00.598243",
              "price": 1.0,
              "size": 2000.0,
              "notional": 2000.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 6377,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "90",
              "timestamp": "2026-04-10T06:16:04.714294",
              "price": 1.0,
              "size": 30000.0,
              "notional": 30000.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 6376,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "89",
              "timestamp": "2026-04-10T06:16:04.714294",
              "price": 1.0,
              "size": 4000.0,
              "notional": 4000.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 6376,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "88",
              "timestamp": "2026-04-10T06:11:48.176047",
              "price": 1.0,
              "size": 2000.0,
              "notional": 2000.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 6375,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "87",
              "timestamp": "2026-04-10T06:08:52.348400",
              "price": 1.0,
              "size": 12000.0,
              "notional": 12000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 6374,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "86",
              "timestamp": "2026-04-10T06:08:52.347909",
              "price": 1.0,
              "size": 2000.0,
              "notional": 2000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 6374,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "85",
              "timestamp": "2026-04-10T06:08:52.347909",
              "price": 1.0,
              "size": 10000.0,
              "notional": 10000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 6374,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "84",
              "timestamp": "2026-04-10T06:05:41.294056",
              "price": 1.0,
              "size": 10000.0,
              "notional": 10000.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 6373,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "83",
              "timestamp": "2026-04-10T06:01:16.805045",
              "price": 1.0,
              "size": 16000.0,
              "notional": 16000.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 6372,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "82",
              "timestamp": "2026-04-10T06:01:04.215934",
              "price": 0.95,
              "size": 20000.0,
              "notional": 19000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 6371,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "81",
              "timestamp": "2026-04-10T06:01:04.215934",
              "price": 0.95,
              "size": 16000.0,
              "notional": 15200.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 6371,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "80",
              "timestamp": "2026-04-10T06:01:04.215934",
              "price": 0.96,
              "size": 10000.0,
              "notional": 9600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 6371,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "79",
              "timestamp": "2026-04-10T06:01:04.215934",
              "price": 0.96,
              "size": 2000.0,
              "notional": 1920.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 6371,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "78",
              "timestamp": "2026-04-10T06:01:04.215934",
              "price": 0.98,
              "size": 2000.0,
              "notional": 1960.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 6371,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "77",
              "timestamp": "2026-04-10T05:55:51.341409",
              "price": 1.0,
              "size": 10000.0,
              "notional": 10000.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 6370,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "76",
              "timestamp": "2026-04-10T05:53:39.361531",
              "price": 1.0,
              "size": 10000.0,
              "notional": 10000.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 6369,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "75",
              "timestamp": "2026-04-10T05:53:39.361531",
              "price": 1.0,
              "size": 14000.0,
              "notional": 14000.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 6369,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "74",
              "timestamp": "2026-04-10T05:53:39.361531",
              "price": 1.01,
              "size": 10000.0,
              "notional": 10100.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 6369,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": []
        },
        "6m": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 11188,
          "n_runs": 4749,
          "n_trade_days": 125,
          "first_trade_date": "2025-09-23",
          "last_trade_date": "2026-04-10",
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
            "retail_pct": 0.066589202717197,
            "mixed_pct": 0.0,
            "instit_pct": 0.43287450840185915,
            "ambiguous_pct": 0.17214873078298176,
            "unobservable_pct": 0.3283875580979621,
            "unclear_pct": 0.5005362888809439,
            "retail_qty_pct": 0.025560529912597593,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.5121362478695822,
            "ambiguous_qty_pct": 0.1305795984158791,
            "unobservable_qty_pct": 0.33172362380194104,
            "unclear_qty_pct": 0.46230322221782016,
            "retail_notional_pct": 0.025920019731786734,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.5347011934950378,
            "ambiguous_notional_pct": 0.13511639771188189,
            "unobservable_notional_pct": 0.3042623890612936,
            "unclear_notional_pct": 0.4393787867731755
          },
          "run_composition": {
            "retail_pct": 0.15034744156664562,
            "mixed_pct": 0.0,
            "instit_pct": 0.2093072225731733,
            "ambiguous_pct": 0.19562013055380081,
            "unobservable_pct": 0.44472520530638027,
            "unclear_pct": 0.640345335860181,
            "retail_notional_pct": 0.025920019731786734,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.5347011934950378,
            "unclear_notional_pct": 0.4393787867731755
          },
          "counts": {
            "trades": {
              "retail": 745,
              "mixed": 0,
              "institutional": 4843,
              "ambiguous": 1926,
              "unobservable": 3674,
              "unclear": 5600
            },
            "runs": {
              "retail": 714,
              "mixed": 0,
              "institutional": 994,
              "ambiguous": 929,
              "unobservable": 2112,
              "unclear": 3041
            }
          },
          "confidence": {
            "high": 0.010528532322594231,
            "medium": 0.114971572962729,
            "low": 0.23415455885449568,
            "na": 0.640345335860181
          },
          "confidence_counts": {
            "high": 50,
            "medium": 546,
            "low": 1112,
            "na": 3041
          },
          "trade_confidence": {
            "high": 0.017250625670361102,
            "medium": 0.1999463711119056,
            "low": 0.2822667143367894,
            "na": 0.5005362888809438
          },
          "trade_confidence_counts": {
            "high": 193,
            "medium": 2237,
            "low": 3158,
            "na": 5600
          },
          "observability": {
            "avg_feature_coverage": 0.6572962728995578,
            "observable_run_pct": 0.5552747946936197,
            "ambiguous_run_pct": 0.19562013055380081,
            "unobservable_run_pct": 0.44472520530638027
          },
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "dominant_share": 0.44472520530638027,
          "dominance_gap": 0.23541798273320697,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 11188
            },
            "d2_information": {
              "UNOBSERVABLE": 11188
            },
            "d3_urgency": {
              "IMMEDIATE": 4671,
              "ADAPTIVE": 78
            },
            "participant_confidence": {
              "NA": 3041,
              "LOW": 1112,
              "MEDIUM": 546,
              "HIGH": 50
            }
          },
          "trade_size": {
            "avg": 15985.560377189846,
            "median": 6400.0
          },
          "run_size": {
            "avg": 37659.812486839335,
            "median": 16140.0,
            "avg_length": 2.355864392503685
          },
          "recent_trades": [
            {
              "trade_id": "103",
              "timestamp": "2026-04-10T07:35:29.499549",
              "price": 0.97,
              "size": 2000.0,
              "notional": 1940.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 6381,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "102",
              "timestamp": "2026-04-10T07:35:20.985614",
              "price": 0.98,
              "size": 8000.0,
              "notional": 7840.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 6380,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "99",
              "timestamp": "2026-04-10T07:35:20.985238",
              "price": 0.98,
              "size": 10000.0,
              "notional": 9800.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 6380,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "98",
              "timestamp": "2026-04-10T07:35:20.985238",
              "price": 0.98,
              "size": 2000.0,
              "notional": 1960.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 6380,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "101",
              "timestamp": "2026-04-10T07:35:20.985238",
              "price": 0.98,
              "size": 2000.0,
              "notional": 1960.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 6380,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "100",
              "timestamp": "2026-04-10T07:35:20.985238",
              "price": 0.98,
              "size": 2000.0,
              "notional": 1960.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 6380,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "97",
              "timestamp": "2026-04-10T06:39:42.582533",
              "price": 0.95,
              "size": 10000.0,
              "notional": 9500.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 6379,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "96",
              "timestamp": "2026-04-10T06:39:42.582533",
              "price": 0.96,
              "size": 4000.0,
              "notional": 3840.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 6379,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "95",
              "timestamp": "2026-04-10T06:39:42.582533",
              "price": 0.96,
              "size": 16000.0,
              "notional": 15360.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 6379,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "94",
              "timestamp": "2026-04-10T06:39:42.582533",
              "price": 0.96,
              "size": 14000.0,
              "notional": 13440.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 6379,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "93",
              "timestamp": "2026-04-10T06:39:42.582533",
              "price": 0.97,
              "size": 6000.0,
              "notional": 5820.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 6379,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "92",
              "timestamp": "2026-04-10T06:34:13.797671",
              "price": 1.01,
              "size": 2000.0,
              "notional": 2020.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 6378,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "91",
              "timestamp": "2026-04-10T06:26:00.598243",
              "price": 1.0,
              "size": 2000.0,
              "notional": 2000.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 6377,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "90",
              "timestamp": "2026-04-10T06:16:04.714294",
              "price": 1.0,
              "size": 30000.0,
              "notional": 30000.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 6376,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "89",
              "timestamp": "2026-04-10T06:16:04.714294",
              "price": 1.0,
              "size": 4000.0,
              "notional": 4000.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 6376,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "88",
              "timestamp": "2026-04-10T06:11:48.176047",
              "price": 1.0,
              "size": 2000.0,
              "notional": 2000.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 6375,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "87",
              "timestamp": "2026-04-10T06:08:52.348400",
              "price": 1.0,
              "size": 12000.0,
              "notional": 12000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 6374,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "86",
              "timestamp": "2026-04-10T06:08:52.347909",
              "price": 1.0,
              "size": 2000.0,
              "notional": 2000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 6374,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "85",
              "timestamp": "2026-04-10T06:08:52.347909",
              "price": 1.0,
              "size": 10000.0,
              "notional": 10000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 6374,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "84",
              "timestamp": "2026-04-10T06:05:41.294056",
              "price": 1.0,
              "size": 10000.0,
              "notional": 10000.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 6373,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "83",
              "timestamp": "2026-04-10T06:01:16.805045",
              "price": 1.0,
              "size": 16000.0,
              "notional": 16000.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 6372,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "82",
              "timestamp": "2026-04-10T06:01:04.215934",
              "price": 0.95,
              "size": 20000.0,
              "notional": 19000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 6371,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "81",
              "timestamp": "2026-04-10T06:01:04.215934",
              "price": 0.95,
              "size": 16000.0,
              "notional": 15200.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 6371,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "80",
              "timestamp": "2026-04-10T06:01:04.215934",
              "price": 0.96,
              "size": 10000.0,
              "notional": 9600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 6371,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "79",
              "timestamp": "2026-04-10T06:01:04.215934",
              "price": 0.96,
              "size": 2000.0,
              "notional": 1920.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 6371,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "78",
              "timestamp": "2026-04-10T06:01:04.215934",
              "price": 0.98,
              "size": 2000.0,
              "notional": 1960.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 6371,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "77",
              "timestamp": "2026-04-10T05:55:51.341409",
              "price": 1.0,
              "size": 10000.0,
              "notional": 10000.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 6370,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "76",
              "timestamp": "2026-04-10T05:53:39.361531",
              "price": 1.0,
              "size": 10000.0,
              "notional": 10000.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 6369,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "75",
              "timestamp": "2026-04-10T05:53:39.361531",
              "price": 1.0,
              "size": 14000.0,
              "notional": 14000.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 6369,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "74",
              "timestamp": "2026-04-10T05:53:39.361531",
              "price": 1.01,
              "size": 10000.0,
              "notional": 10100.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 6369,
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
      "n_trades": 11188,
      "n_runs": 4749,
      "n_trade_days": 125,
      "first_trade_date": "2025-09-23",
      "last_trade_date": "2026-04-10",
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
        "retail_pct": 0.066589202717197,
        "mixed_pct": 0.0,
        "instit_pct": 0.43287450840185915,
        "ambiguous_pct": 0.17214873078298176,
        "unobservable_pct": 0.3283875580979621,
        "unclear_pct": 0.5005362888809439,
        "retail_qty_pct": 0.025560529912597593,
        "mixed_qty_pct": 0.0,
        "instit_qty_pct": 0.5121362478695822,
        "ambiguous_qty_pct": 0.1305795984158791,
        "unobservable_qty_pct": 0.33172362380194104,
        "unclear_qty_pct": 0.46230322221782016,
        "retail_notional_pct": 0.025920019731786734,
        "mixed_notional_pct": 0.0,
        "instit_notional_pct": 0.5347011934950378,
        "ambiguous_notional_pct": 0.13511639771188189,
        "unobservable_notional_pct": 0.3042623890612936,
        "unclear_notional_pct": 0.4393787867731755
      },
      "run_composition": {
        "retail_pct": 0.15034744156664562,
        "mixed_pct": 0.0,
        "instit_pct": 0.2093072225731733,
        "ambiguous_pct": 0.19562013055380081,
        "unobservable_pct": 0.44472520530638027,
        "unclear_pct": 0.640345335860181
      },
      "trade_size": {
        "avg": 15985.560377189846,
        "median": 6400.0
      },
      "run_size": {
        "avg": 37659.812486839335,
        "median": 16140.0,
        "avg_length": 2.355864392503685
      },
      "confidence": {
        "high": 0.010528532322594231,
        "medium": 0.114971572962729,
        "low": 0.23415455885449568,
        "na": 0.640345335860181
      },
      "confidence_counts": {
        "high": 50,
        "medium": 546,
        "low": 1112,
        "na": 3041
      },
      "trade_confidence": {
        "high": 0.017250625670361102,
        "medium": 0.1999463711119056,
        "low": 0.2822667143367894,
        "na": 0.5005362888809438
      },
      "trade_confidence_counts": {
        "high": 193,
        "medium": 2237,
        "low": 3158,
        "na": 5600
      },
      "counts": {
        "trades": {
          "retail": 745,
          "mixed": 0,
          "institutional": 4843,
          "ambiguous": 1926,
          "unobservable": 3674,
          "unclear": 5600
        },
        "runs": {
          "retail": 714,
          "mixed": 0,
          "institutional": 994,
          "ambiguous": 929,
          "unobservable": 2112,
          "unclear": 3041
        }
      },
      "observability": {
        "avg_feature_coverage": 0.6572962728995578,
        "observable_run_pct": 0.5552747946936197,
        "ambiguous_run_pct": 0.19562013055380081,
        "unobservable_run_pct": 0.44472520530638027
      },
      "dominant_bucket": "UNOBSERVABLE",
      "dominant_label": "Not Observable",
      "dominant_share": 0.44472520530638027,
      "dominance_gap": 0.23541798273320697,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2025-11",
            "n_trades": 1318,
            "n_runs": 577,
            "retail_pct": 0.054628224582701064,
            "mixed_pct": 0.0,
            "instit_pct": 0.4537177541729894,
            "ambiguous_pct": 0.15629742033383914,
            "unobservable_pct": 0.3353566009104704,
            "unclear_pct": 0.49165402124430957,
            "avg_trade_size": 16315.658194233687,
            "avg_run_notional": 37268.695840554596,
            "retail_qty_pct": 0.021305905628837444,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.533127071540667,
            "ambiguous_qty_pct": 0.1327490669743547,
            "unobservable_qty_pct": 0.3128179558561409,
            "unclear_qty_pct": 0.44556702283049565,
            "retail_notional_pct": 0.02185652345518836,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.5299181607174932,
            "ambiguous_notional_pct": 0.1354592131826407,
            "unobservable_notional_pct": 0.31276610264467775,
            "unclear_notional_pct": 0.44822531582731845,
            "run_retail_pct": 0.12305025996533796,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.21143847487001732,
            "run_ambiguous_pct": 0.18370883882149047,
            "run_unobservable_pct": 0.48180242634315423,
            "run_unclear_pct": 0.6655112651646446,
            "avg_feature_coverage": 0.648526863084922,
            "high_confidence_pct": 0.0034662045060658577,
            "medium_confidence_pct": 0.05025996533795494,
            "low_confidence_pct": 0.2807625649913345,
            "na_confidence_pct": 0.6655112651646448,
            "total_quantity": null
          },
          {
            "month": "2025-12",
            "n_trades": 701,
            "n_runs": 341,
            "retail_pct": 0.08416547788873038,
            "mixed_pct": 0.0,
            "instit_pct": 0.42510699001426533,
            "ambiguous_pct": 0.15691868758915833,
            "unobservable_pct": 0.3338088445078459,
            "unclear_pct": 0.49072753209700426,
            "avg_trade_size": 12288.587731811698,
            "avg_run_notional": 25261.876832844573,
            "retail_qty_pct": 0.02083069520070913,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.5228251234646069,
            "ambiguous_qty_pct": 0.1228314549829049,
            "unobservable_qty_pct": 0.33351272635177914,
            "unclear_qty_pct": 0.456344181334684,
            "retail_notional_pct": 0.020187362873361734,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.5295671151457461,
            "ambiguous_notional_pct": 0.12201107460849982,
            "unobservable_notional_pct": 0.32823444737239243,
            "unclear_notional_pct": 0.45024552198089224,
            "run_retail_pct": 0.17302052785923755,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.22287390029325513,
            "run_ambiguous_pct": 0.17008797653958943,
            "run_unobservable_pct": 0.4340175953079179,
            "run_unclear_pct": 0.6041055718475073,
            "avg_feature_coverage": 0.6546920821114369,
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.026392961876832845,
            "low_confidence_pct": 0.36950146627565983,
            "na_confidence_pct": 0.6041055718475073,
            "total_quantity": null
          },
          {
            "month": "2026-01",
            "n_trades": 727,
            "n_runs": 390,
            "retail_pct": 0.08665749656121045,
            "mixed_pct": 0.0,
            "instit_pct": 0.31361760660247595,
            "ambiguous_pct": 0.15405777166437415,
            "unobservable_pct": 0.44566712517193946,
            "unclear_pct": 0.5997248968363136,
            "avg_trade_size": 12735.969738651995,
            "avg_run_notional": 23741.153846153848,
            "retail_qty_pct": 0.023944275141488898,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.3656943839791032,
            "ambiguous_qty_pct": 0.11638368886953998,
            "unobservable_qty_pct": 0.49397765200986793,
            "unclear_qty_pct": 0.610361340879408,
            "retail_notional_pct": 0.023698975596848488,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.36907458108553254,
            "ambiguous_notional_pct": 0.11568141439996545,
            "unobservable_notional_pct": 0.49154502891765356,
            "unclear_notional_pct": 0.607226443317619,
            "run_retail_pct": 0.15128205128205127,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.18205128205128204,
            "run_ambiguous_pct": 0.16666666666666666,
            "run_unobservable_pct": 0.5,
            "run_unclear_pct": 0.6666666666666666,
            "avg_feature_coverage": 0.6380769230769231,
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.3333333333333333,
            "na_confidence_pct": 0.6666666666666666,
            "total_quantity": null
          },
          {
            "month": "2026-02",
            "n_trades": 848,
            "n_runs": 477,
            "retail_pct": 0.09669811320754718,
            "mixed_pct": 0.0,
            "instit_pct": 0.2511792452830189,
            "ambiguous_pct": 0.18278301886792453,
            "unobservable_pct": 0.4693396226415094,
            "unclear_pct": 0.6521226415094339,
            "avg_trade_size": 12925.683962264151,
            "avg_run_notional": 22978.993710691822,
            "retail_qty_pct": 0.021743857360295715,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.3929115025005436,
            "ambiguous_qty_pct": 0.09458577951728636,
            "unobservable_qty_pct": 0.4907588606218743,
            "unclear_qty_pct": 0.5853446401391607,
            "retail_notional_pct": 0.020649613446972807,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.3897990873078867,
            "ambiguous_notional_pct": 0.09204286478033899,
            "unobservable_notional_pct": 0.49750843446480153,
            "unclear_notional_pct": 0.5895512992451405,
            "run_retail_pct": 0.16771488469601678,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.13417190775681342,
            "run_ambiguous_pct": 0.20754716981132076,
            "run_unobservable_pct": 0.49056603773584906,
            "run_unclear_pct": 0.6981132075471699,
            "avg_feature_coverage": 0.6386792452830188,
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.06708595387840671,
            "low_confidence_pct": 0.2348008385744235,
            "na_confidence_pct": 0.6981132075471698,
            "total_quantity": null
          },
          {
            "month": "2026-03",
            "n_trades": 637,
            "n_runs": 330,
            "retail_pct": 0.08006279434850863,
            "mixed_pct": 0.0,
            "instit_pct": 0.37676609105180536,
            "ambiguous_pct": 0.21036106750392464,
            "unobservable_pct": 0.3328100470957614,
            "unclear_pct": 0.543171114599686,
            "avg_trade_size": 10375.321821036106,
            "avg_run_notional": 20027.515151515152,
            "retail_qty_pct": 0.02562396006655574,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.46389351081530783,
            "ambiguous_qty_pct": 0.15806988352745424,
            "unobservable_qty_pct": 0.3524126455906822,
            "unclear_qty_pct": 0.5104825291181364,
            "retail_notional_pct": 0.024871842979658287,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.46572594067555545,
            "ambiguous_notional_pct": 0.15475981528442687,
            "unobservable_notional_pct": 0.3546424010603594,
            "unclear_notional_pct": 0.5094022163447862,
            "run_retail_pct": 0.14242424242424243,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.21515151515151515,
            "run_ambiguous_pct": 0.22121212121212122,
            "run_unobservable_pct": 0.4212121212121212,
            "run_unclear_pct": 0.6424242424242425,
            "avg_feature_coverage": 0.6754545454545454,
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.006060606060606061,
            "low_confidence_pct": 0.3515151515151515,
            "na_confidence_pct": 0.6424242424242425,
            "total_quantity": null
          },
          {
            "month": "2026-04",
            "n_trades": 160,
            "n_runs": 85,
            "retail_pct": 0.1,
            "mixed_pct": 0.0,
            "instit_pct": 0.325,
            "ambiguous_pct": 0.1375,
            "unobservable_pct": 0.4375,
            "unclear_pct": 0.575,
            "avg_trade_size": 9089.125,
            "avg_run_notional": 17108.941176470587,
            "retail_qty_pct": 0.033607169529499624,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.3793876026885736,
            "ambiguous_qty_pct": 0.12098581030619865,
            "unobservable_qty_pct": 0.46601941747572817,
            "unclear_qty_pct": 0.5870052277819269,
            "retail_notional_pct": 0.03427172582619339,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.3767414355067182,
            "ambiguous_notional_pct": 0.11579772530359082,
            "unobservable_notional_pct": 0.47318911336349756,
            "unclear_notional_pct": 0.5889868386670883,
            "run_retail_pct": 0.17647058823529413,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.18823529411764706,
            "run_ambiguous_pct": 0.11764705882352941,
            "run_unobservable_pct": 0.5176470588235295,
            "run_unclear_pct": 0.6352941176470589,
            "avg_feature_coverage": 0.641764705882353,
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.36470588235294116,
            "na_confidence_pct": 0.6352941176470588,
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
          "trade_id": "103",
          "timestamp": "2026-04-10T07:35:29.499549",
          "price": 0.97,
          "size": 2000.0,
          "notional": 1940.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 6381,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "102",
          "timestamp": "2026-04-10T07:35:20.985614",
          "price": 0.98,
          "size": 8000.0,
          "notional": 7840.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 6380,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "99",
          "timestamp": "2026-04-10T07:35:20.985238",
          "price": 0.98,
          "size": 10000.0,
          "notional": 9800.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 6380,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "98",
          "timestamp": "2026-04-10T07:35:20.985238",
          "price": 0.98,
          "size": 2000.0,
          "notional": 1960.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 6380,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "101",
          "timestamp": "2026-04-10T07:35:20.985238",
          "price": 0.98,
          "size": 2000.0,
          "notional": 1960.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 6380,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "100",
          "timestamp": "2026-04-10T07:35:20.985238",
          "price": 0.98,
          "size": 2000.0,
          "notional": 1960.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 6380,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "97",
          "timestamp": "2026-04-10T06:39:42.582533",
          "price": 0.95,
          "size": 10000.0,
          "notional": 9500.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 6379,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "96",
          "timestamp": "2026-04-10T06:39:42.582533",
          "price": 0.96,
          "size": 4000.0,
          "notional": 3840.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 6379,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "95",
          "timestamp": "2026-04-10T06:39:42.582533",
          "price": 0.96,
          "size": 16000.0,
          "notional": 15360.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 6379,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "94",
          "timestamp": "2026-04-10T06:39:42.582533",
          "price": 0.96,
          "size": 14000.0,
          "notional": 13440.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 6379,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "93",
          "timestamp": "2026-04-10T06:39:42.582533",
          "price": 0.97,
          "size": 6000.0,
          "notional": 5820.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 6379,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "92",
          "timestamp": "2026-04-10T06:34:13.797671",
          "price": 1.01,
          "size": 2000.0,
          "notional": 2020.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 6378,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "91",
          "timestamp": "2026-04-10T06:26:00.598243",
          "price": 1.0,
          "size": 2000.0,
          "notional": 2000.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 6377,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "90",
          "timestamp": "2026-04-10T06:16:04.714294",
          "price": 1.0,
          "size": 30000.0,
          "notional": 30000.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 6376,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "89",
          "timestamp": "2026-04-10T06:16:04.714294",
          "price": 1.0,
          "size": 4000.0,
          "notional": 4000.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 6376,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "88",
          "timestamp": "2026-04-10T06:11:48.176047",
          "price": 1.0,
          "size": 2000.0,
          "notional": 2000.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 6375,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "87",
          "timestamp": "2026-04-10T06:08:52.348400",
          "price": 1.0,
          "size": 12000.0,
          "notional": 12000.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 6374,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "86",
          "timestamp": "2026-04-10T06:08:52.347909",
          "price": 1.0,
          "size": 2000.0,
          "notional": 2000.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 6374,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "85",
          "timestamp": "2026-04-10T06:08:52.347909",
          "price": 1.0,
          "size": 10000.0,
          "notional": 10000.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 6374,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "84",
          "timestamp": "2026-04-10T06:05:41.294056",
          "price": 1.0,
          "size": 10000.0,
          "notional": 10000.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 6373,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "83",
          "timestamp": "2026-04-10T06:01:16.805045",
          "price": 1.0,
          "size": 16000.0,
          "notional": 16000.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 6372,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "82",
          "timestamp": "2026-04-10T06:01:04.215934",
          "price": 0.95,
          "size": 20000.0,
          "notional": 19000.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 6371,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "81",
          "timestamp": "2026-04-10T06:01:04.215934",
          "price": 0.95,
          "size": 16000.0,
          "notional": 15200.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 6371,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "80",
          "timestamp": "2026-04-10T06:01:04.215934",
          "price": 0.96,
          "size": 10000.0,
          "notional": 9600.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 6371,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "79",
          "timestamp": "2026-04-10T06:01:04.215934",
          "price": 0.96,
          "size": 2000.0,
          "notional": 1920.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 6371,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "78",
          "timestamp": "2026-04-10T06:01:04.215934",
          "price": 0.98,
          "size": 2000.0,
          "notional": 1960.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 6371,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "77",
          "timestamp": "2026-04-10T05:55:51.341409",
          "price": 1.0,
          "size": 10000.0,
          "notional": 10000.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 6370,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "76",
          "timestamp": "2026-04-10T05:53:39.361531",
          "price": 1.0,
          "size": 10000.0,
          "notional": 10000.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 6369,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "75",
          "timestamp": "2026-04-10T05:53:39.361531",
          "price": 1.0,
          "size": 14000.0,
          "notional": 14000.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 6369,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "74",
          "timestamp": "2026-04-10T05:53:39.361531",
          "price": 1.01,
          "size": 10000.0,
          "notional": 10100.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 6369,
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
      "total_trades": 11187,
      "price_moving_trades": 4121,
      "pct_price_moving": 36.83740055421471,
      "all_movers": {
        "count": 4121,
        "avg_size": 16328.304173744236,
        "median_size": 6440.0,
        "retail_count": 328,
        "mixed_count": 0,
        "institutional_count": 1659,
        "ambiguous_count": 706,
        "unobservable_count": 1428,
        "retail_pct": 7.959233195826256,
        "mixed_pct": 0.0,
        "instit_pct": 40.25721912157243,
        "unclear_pct": 51.783547682601316
      },
      "positive_movers": {
        "count": 2025,
        "avg_size": 17168.607160493826,
        "median_size": 6800.0,
        "retail_count": 84,
        "mixed_count": 0,
        "institutional_count": 669,
        "ambiguous_count": 284,
        "unobservable_count": 988,
        "retail_pct": 4.148148148148148,
        "mixed_pct": 0.0,
        "instit_pct": 33.03703703703704,
        "unclear_pct": 62.81481481481481
      },
      "negative_movers": {
        "count": 2096,
        "avg_size": 15516.465648854963,
        "median_size": 6300.0,
        "retail_count": 244,
        "mixed_count": 0,
        "institutional_count": 990,
        "ambiguous_count": 422,
        "unobservable_count": 440,
        "retail_pct": 11.641221374045802,
        "mixed_pct": 0.0,
        "instit_pct": 47.23282442748092,
        "unclear_pct": 41.12595419847328
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
          "continuous": 0.9798302698177113,
          "closing": 0.020169730182288695,
          "auctions": 0.020169730182288695,
          "other": 0.0
        },
        "1M": {
          "opening": 0.0,
          "continuous": 0.9909222702962562,
          "closing": 0.009077729703743766,
          "auctions": 0.009077729703743766,
          "other": 0.0
        },
        "3M": {
          "opening": 0.0036221863999413946,
          "continuous": 0.9826230391945525,
          "closing": 0.013367108626685215,
          "auctions": 0.01698929502662661,
          "other": 0.00038766577882090017
        },
        "6M": {
          "opening": 0.003711149851938077,
          "continuous": 0.9896950529901748,
          "closing": 0.00649087680832488,
          "auctions": 0.010202026660262957,
          "other": 0.00010292034956226054
        }
      },
      "hhi": {
        "1D": 0.33679953359312725,
        "1M": 0.34787530131033806,
        "3M": 0.3154082372793676,
        "6M": 0.28377212966623727
      },
      "profile_buckets": [
        {
          "time": "09:00",
          "avg_share": 0.009
        },
        {
          "time": "09:30",
          "avg_share": 0.1134
        },
        {
          "time": "10:00",
          "avg_share": 0.1075
        },
        {
          "time": "10:30",
          "avg_share": 0.0732
        },
        {
          "time": "11:00",
          "avg_share": 0.0529
        },
        {
          "time": "11:30",
          "avg_share": 0.0503
        },
        {
          "time": "13:00",
          "avg_share": 0.117
        },
        {
          "time": "13:30",
          "avg_share": 0.0869
        },
        {
          "time": "14:00",
          "avg_share": 0.0875
        },
        {
          "time": "14:30",
          "avg_share": 0.0808
        },
        {
          "time": "15:00",
          "avg_share": 0.0844
        },
        {
          "time": "15:30",
          "avg_share": 0.1245
        },
        {
          "time": "16:00",
          "avg_share": 0.0125
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "1723",
          "auctions_pct": 0.9448092590380529,
          "hhi": 0.27761546142136206,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400",
            "you": true
          }
        },
        {
          "ticker": "244",
          "auctions_pct": 0.2652001362781034,
          "hhi": 0.7232564856230219,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "825",
          "auctions_pct": 2.2333564430718935,
          "hhi": 0.40775165761302196,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "312",
          "auctions_pct": 0.42775070440432783,
          "hhi": 0.6128158201569549,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "3368",
          "auctions_pct": 1.7782362963121467,
          "hhi": 0.45980295619793726,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "848",
          "auctions_pct": 0.5535595465689864,
          "hhi": 0.6028634180796203,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "974",
          "auctions_pct": 0.666629304419605,
          "hhi": 0.6801767763977297,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "162",
          "auctions_pct": 0.20619349616287186,
          "hhi": 0.7035818484172959,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "602",
          "auctions_pct": 1.8911980430299375,
          "hhi": 0.5341904231802032,
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
