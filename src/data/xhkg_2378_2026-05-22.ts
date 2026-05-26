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
      "ticker": "2378",
      "name": "PRU",
      "marketCap": 301520491107.0,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    },
    {
      "ticker": "376",
      "name": "YUNFENG FIN",
      "marketCap": 8930441680.6,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    },
    {
      "ticker": "1828",
      "name": "FWD",
      "marketCap": 38388662280.0,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    },
    {
      "ticker": "82318",
      "name": "PING AN-R",
      "marketCap": 392859682108.0,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    },
    {
      "ticker": "945",
      "name": "MANULIFE-S",
      "marketCap": 506341381947.6,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    },
    {
      "ticker": "1508",
      "name": "CHINA RE",
      "marketCap": 8349270875.0,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    },
    {
      "ticker": "6963",
      "name": "SUNSHINE INS",
      "marketCap": 12140902110.37,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    },
    {
      "ticker": "6060",
      "name": "ZA ONLINE",
      "marketCap": 17378061127.0,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    },
    {
      "ticker": "966",
      "name": "CHINA TAIPING",
      "marketCap": 73461738916.72,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XHKG",
    "currency": "HKD",
    "ticker": "2378",
    "company": "PRU",
    "asof_date": "2026-05-22",
    "industry": "Financials - Insurance",
    "sector": "Insurance",
    "market_cap_display": "301.5B",
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
          "score_pca": 60.63788409179308,
          "score_pca_percentile": 60.63788409179308,
          "rank_pca": 1013,
          "total": 2571,
          "adv_notional_sgd": 5688200.0,
          "adv_volume_shares": 47600.0,
          "free_float_shares": 2557509480.0,
          "turnover_ratio": 1.8611856719295524e-05,
          "votes": 203.0,
          "trades": 203.0,
          "spread_pct": 0.002459874134224027,
          "spread_ticks": 2.96474358974359,
          "amihud": 0.0,
          "volatility": 0.1895727130500785
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5406954755527241,
          "loadings": {
            "log_adv": 0.5407109812235213,
            "log_trades": 0.5025331161204728,
            "log_turnover": 0.4998196642338014,
            "neg_spread": 0.407846230925005,
            "neg_amihud": 0.0420994516049351,
            "neg_vol": -0.19277316547327142
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
          "peer_median_adv": 10934033.75,
          "peer_median_score_pca": 73.88175807078957,
          "peer_median_trades": 585.5,
          "peer_median_volatility": 0.21635920696633287,
          "peer_median_spread_pct": 0.002503314850526173,
          "peer_median_spread_ticks": 1.1922825376062787,
          "peer_median_amihud": 9.81801833259751e-11,
          "peer_median_turnover_ratio": 0.00239840644413954,
          "target_vs_peer": {
            "score_pca_delta": -13.24,
            "adv_delta_pct": -48.0,
            "trades_delta_pct": -65.33,
            "volatility_delta_pct": 12.38,
            "spread_pct_delta_pct": 1.74,
            "spread_ticks_delta_pct": 148.66,
            "amihud_delta_pct": 100.0,
            "turnover_ratio_delta_pct": -99.22
          }
        },
        "peer_liquidity": [
          {
            "ticker": "2378",
            "score_pca": 60.63788409179308,
            "rank_pca": 1013,
            "adv": 5688200.0,
            "trades": 203.0,
            "volatility": 0.1895727130500785,
            "spread_pct": 0.002459874134224027,
            "spread_ticks": 2.96474358974359,
            "amihud": 0.0,
            "turnover_ratio": 1.8611856719295524e-05,
            "is_target": true
          },
          {
            "ticker": "376",
            "score_pca": 73.12329832749903,
            "rank_pca": 692,
            "adv": 8698800.0,
            "trades": 533.0,
            "volatility": 0.2576809176778238,
            "spread_pct": 0.005370998083469953,
            "spread_ticks": 1.1922825376062787,
            "amihud": 0.0,
            "turnover_ratio": 0.003109345161733186,
            "is_target": false
          },
          {
            "ticker": "1828",
            "score_pca": 66.0832360949047,
            "rank_pca": 873,
            "adv": 3024000.0,
            "trades": 361.0,
            "volatility": 0.05706869190714034,
            "spread_pct": 0.0016685084320825314,
            "spread_ticks": null,
            "amihud": 4.4150578195972583e-10,
            "turnover_ratio": 0.0003660567395136646,
            "is_target": false
          },
          {
            "ticker": "82318",
            "score_pca": 54.4535200311163,
            "rank_pca": 1172,
            "adv": 6629608.503212715,
            "trades": 44.0,
            "volatility": 0.09002534849183383,
            "spread_pct": 0.002006255285288183,
            "spread_ticks": 2.1246066708621774,
            "amihud": 0.0,
            "turnover_ratio": 1.9478625279944747e-05,
            "is_target": false
          },
          {
            "ticker": "945",
            "score_pca": 47.413457798521975,
            "rank_pca": 1353,
            "adv": 2245160.0,
            "trades": 42.0,
            "volatility": 0.06901626007742315,
            "spread_pct": 0.004869238179796444,
            "spread_ticks": 7.4037037037037035,
            "amihud": 2.955557762634758e-09,
            "turnover_ratio": 4.332492565922844e-06,
            "is_target": false
          },
          {
            "ticker": "1508",
            "score_pca": 74.64021781408012,
            "rank_pca": 653,
            "adv": 13169267.5,
            "trades": 638.0,
            "volatility": 0.46514657088559663,
            "spread_pct": 0.008739072962821873,
            "spread_ticks": 1.0864589955499047,
            "amihud": 6.123739326452478e-10,
            "turnover_ratio": 0.0016874677265458931,
            "is_target": false
          },
          {
            "ticker": "6963",
            "score_pca": 85.84208479190977,
            "rank_pca": 365,
            "adv": 63565087.080000006,
            "trades": 2853.0,
            "volatility": 0.2448138001469245,
            "spread_pct": 0.0030003744157641628,
            "spread_ticks": 1.047180892717306,
            "amihud": 1.3407874769369672e-10,
            "turnover_ratio": 0.0070199865172492154,
            "is_target": false
          },
          {
            "ticker": "6060",
            "score_pca": 85.99766627771295,
            "rank_pca": 361,
            "adv": 60646276.00000001,
            "trades": 3971.0,
            "volatility": 0.18790461378574125,
            "spread_pct": 0.0015017506455060408,
            "spread_ticks": null,
            "amihud": 6.228161895825349e-11,
            "turnover_ratio": 0.00454116681180393,
            "is_target": false
          },
          {
            "ticker": "966",
            "score_pca": 92.22092570984053,
            "rank_pca": 201,
            "adv": 146509586.72,
            "trades": 6820.0,
            "volatility": 0.36956617721577045,
            "spread_pct": 0.0015990779416459834,
            "spread_ticks": null,
            "amihud": 1.9977049514760755e-11,
            "turnover_ratio": 0.005147411925453545,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Insurance",
          "sector_count": 21,
          "market_count": 2571,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4916096374673696,
              "median": 0.3232042928751561,
              "min": 0.0,
              "max": 8.346380628758805,
              "p5": 0.0,
              "p95": 1.574697276834208,
              "count": 2571
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 75462343.85910961,
              "median": 250368.0,
              "min": 0.0,
              "max": 16976702966.099998,
              "p5": 0.0,
              "p95": 264125078.68,
              "count": 2571
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04726026632294284,
              "median": 0.02675500649895896,
              "min": 0.0005035150421513581,
              "max": 0.7662226887999475,
              "p5": 0.001439122612394633,
              "p95": 0.15140370330439512,
              "count": 2571
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006255503878706491,
              "median": 0.0010660658652869685,
              "min": 0.0,
              "max": 0.4711159875,
              "p5": 0.0,
              "p95": 0.025415181368797272,
              "count": 2555
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.0478535891994099e-05,
              "median": 7.2727500578353275e-09,
              "min": 0.0,
              "max": 0.009173510396645114,
              "p5": 0.0,
              "p95": 7.121644833509226e-06,
              "count": 2258
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1255.512252042007,
              "median": 24.0,
              "min": 0.0,
              "max": 123709.0,
              "p5": 0.0,
              "p95": 6609.5,
              "count": 2571
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3177493832805896,
              "median": 0.2448138001469245,
              "min": 0.0,
              "max": 1.6478165848198418,
              "p5": 0.05706869190714034,
              "p95": 0.5855813595565101,
              "count": 21
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 299608941.0773607,
              "median": 13169267.5,
              "min": 0.0,
              "max": 2252842695.2,
              "p5": 8840.0,
              "p95": 1499104311.8500001,
              "count": 21
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.009942116099015576,
              "median": 0.002006255285288183,
              "min": 0.0006621525622509683,
              "max": 0.06006094564042067,
              "p5": 0.000852269882566611,
              "p95": 0.05631219036871136,
              "count": 21
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0033060265445428853,
              "median": 0.004339873639302612,
              "min": 0.0,
              "max": 0.009056578990575642,
              "p5": 2.262028543937936e-07,
              "p95": 0.0070199865172492154,
              "count": 21
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 8.998559494288824e-08,
              "median": 4.112933423650712e-11,
              "min": 0.0,
              "max": 1.556727136867428e-06,
              "p5": 0.0,
              "p95": 1.9016346188768064e-07,
              "count": 20
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 3837.285714285714,
              "median": 638.0,
              "min": 0.0,
              "max": 15840.0,
              "p5": 2.0,
              "p95": 10560.0,
              "count": 21
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 38060973.22540159,
              "median": 10934033.75,
              "min": 2245160.0,
              "max": 146509586.72,
              "p5": 2517754.0,
              "p95": 117479011.84599996,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1907.75,
              "median": 585.5,
              "min": 42.0,
              "max": 6820.0,
              "p5": 42.7,
              "p95": 5822.8499999999985,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.21765279752353173,
              "median": 0.21635920696633287,
              "min": 0.05706869190714034,
              "max": 0.46514657088559663,
              "p5": 0.061250340766739325,
              "p95": 0.43169343310115743,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.003594409493296896,
              "median": 0.002503314850526173,
              "min": 0.0015017506455060408,
              "max": 0.008739072962821873,
              "p5": 0.0015358151991550207,
              "p95": 0.007560246755048699,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.570846560087874,
              "median": 1.1922825376062787,
              "min": 1.047180892717306,
              "max": 7.4037037037037035,
              "p5": 1.0550365132838257,
              "p95": 6.347884297135398,
              "count": 5
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.282218616758053e-10,
              "median": 9.81801833259751e-11,
              "min": 0.0,
              "max": 2.955557762634758e-09,
              "p5": 0.0,
              "p95": 2.1354434221384283e-09,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0027369057500181626,
              "median": 0.00239840644413954,
              "min": 4.332492565922844e-06,
              "max": 0.0070199865172492154,
              "p5": 9.63363901583051e-06,
              "p95": 0.00636458541012073,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.0,
            "market": 0.006898577571811337,
            "sector": 0.000822368421052655,
            "peers": 0.0006675567423231055,
            "vs_market": -0.006898577571811337,
            "vs_sector": -0.000822368421052655,
            "vs_peers": -0.0006675567423231055
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 67.79463243873978,
          "score_pca_percentile": 67.79463243873978,
          "rank_pca": 829,
          "total": 2571,
          "adv_notional_sgd": 9655520.0,
          "adv_volume_shares": 81550.0,
          "free_float_shares": 2557509480.0,
          "turnover_ratio": 3.188648982055777e-05,
          "votes": 314.0,
          "trades": 314.0,
          "spread_pct": 0.0029384830112982913,
          "spread_ticks": 3.448202959830867,
          "amihud": 1.0735181483634944e-09,
          "volatility": 0.3504158488379418
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.568684862026577,
          "loadings": {
            "log_adv": 0.5240486297281388,
            "log_trades": 0.4804228298837161,
            "log_turnover": 0.4741829709988567,
            "neg_spread": 0.4523762906591961,
            "neg_amihud": 0.25058601476865405,
            "neg_vol": 0.0477471368049439
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
          "peer_median_adv": 19051220.0,
          "peer_median_score_pca": 78.45196421625826,
          "peer_median_trades": 968.0,
          "peer_median_volatility": 0.32482686221487755,
          "peer_median_spread_pct": 0.002820822357925889,
          "peer_median_spread_ticks": 1.3071120689655173,
          "peer_median_amihud": 9.228730561713358e-10,
          "peer_median_turnover_ratio": 0.0035501838912526673,
          "target_vs_peer": {
            "score_pca_delta": -10.66,
            "adv_delta_pct": -49.3,
            "trades_delta_pct": -67.56,
            "volatility_delta_pct": -7.88,
            "spread_pct_delta_pct": -4.17,
            "spread_ticks_delta_pct": 163.8,
            "amihud_delta_pct": -16.32,
            "turnover_ratio_delta_pct": -99.1
          }
        },
        "peer_liquidity": [
          {
            "ticker": "2378",
            "score_pca": 67.79463243873978,
            "rank_pca": 829,
            "adv": 9655520.0,
            "trades": 314.0,
            "volatility": 0.3504158488379418,
            "spread_pct": 0.0029384830112982913,
            "spread_ticks": 3.448202959830867,
            "amihud": 1.0735181483634944e-09,
            "turnover_ratio": 3.188648982055777e-05,
            "is_target": true
          },
          {
            "ticker": "376",
            "score_pca": 76.50719564371839,
            "rank_pca": 605,
            "adv": 11576290.000000002,
            "trades": 596.0,
            "volatility": 0.3357180613242595,
            "spread_pct": 0.005109670653636548,
            "spread_ticks": 1.3071120689655173,
            "amihud": 1.6729780320585383e-09,
            "turnover_ratio": 0.003840678242262236,
            "is_target": false
          },
          {
            "ticker": "1828",
            "score_pca": 73.59004278490859,
            "rank_pca": 680,
            "adv": 5739370.0,
            "trades": 611.0,
            "volatility": 0.2241369755252657,
            "spread_pct": 0.002526584069903239,
            "spread_ticks": null,
            "amihud": 1.4653990203133647e-09,
            "turnover_ratio": 0.0006809091136786916,
            "is_target": false
          },
          {
            "ticker": "82318",
            "score_pca": 59.39323220536756,
            "rank_pca": 1045,
            "adv": 5818512.698771655,
            "trades": 42.0,
            "volatility": 0.2735725210330361,
            "spread_pct": 0.0022448128407331763,
            "spread_ticks": 2.472457627118644,
            "amihud": 1.4509278025961812e-09,
            "turnover_ratio": 1.6887432008759437e-05,
            "is_target": false
          },
          {
            "ticker": "945",
            "score_pca": 57.02061454686892,
            "rank_pca": 1106,
            "adv": 3624000.0,
            "trades": 57.0,
            "volatility": 0.22605482623084552,
            "spread_pct": 0.004890688511270169,
            "spread_ticks": 7.586956521739131,
            "amihud": 2.275002275002265e-09,
            "turnover_ratio": 7.025663620415422e-06,
            "is_target": false
          },
          {
            "ticker": "1508",
            "score_pca": 80.39673278879813,
            "rank_pca": 505,
            "adv": 26526150.0,
            "trades": 1325.0,
            "volatility": 0.3693831124392409,
            "spread_pct": 0.008228673489637975,
            "spread_ticks": 1.0421052631578946,
            "amihud": 3.948183097464904e-10,
            "turnover_ratio": 0.003259689540243098,
            "is_target": false
          },
          {
            "ticker": "6963",
            "score_pca": 88.05912096460521,
            "rank_pca": 308,
            "adv": 60133091.74,
            "trades": 2676.0,
            "volatility": 0.3466653270735935,
            "spread_pct": 0.0031150606459485392,
            "spread_ticks": 1.11968434896975,
            "amihud": 3.6222273154405227e-10,
            "turnover_ratio": 0.006474012978448546,
            "is_target": false
          },
          {
            "ticker": "6060",
            "score_pca": 90.97627382341501,
            "rank_pca": 233,
            "adv": 83607700.0,
            "trades": 4566.0,
            "volatility": 0.31393566310549553,
            "spread_pct": 0.0013418958078890944,
            "spread_ticks": null,
            "amihud": 1.6165429355466477e-10,
            "turnover_ratio": 0.005788212672431641,
            "is_target": false
          },
          {
            "ticker": "966",
            "score_pca": 94.47685725398678,
            "rank_pca": 143,
            "adv": 194979652.98000002,
            "trades": 7788.0,
            "volatility": 0.4491595830369361,
            "spread_pct": 0.0015863627399135478,
            "spread_ticks": null,
            "amihud": 9.231249676623304e-11,
            "turnover_ratio": 0.006461430372413298,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Insurance",
          "sector_count": 21,
          "market_count": 2571,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7011151554535207,
              "median": 0.5106680275119818,
              "min": 0.0,
              "max": 59.50183291238528,
              "p5": 0.16376262650510948,
              "p95": 1.673153348621239,
              "count": 2571
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 62902627.31827769,
              "median": 221400.0,
              "min": 0.0,
              "max": 12307843080.0,
              "p5": 0.0,
              "p95": 254491351.175,
              "count": 2571
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04378896465895211,
              "median": 0.028605482717520857,
              "min": 0.0004644488055358157,
              "max": 0.5912209998910793,
              "p5": 0.0014277647807145535,
              "p95": 0.1376472417616101,
              "count": 2571
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004332117176113941,
              "median": 0.0009551138871723442,
              "min": 0.0,
              "max": 0.25464556631692925,
              "p5": 0.0,
              "p95": 0.017816381106878738,
              "count": 2555
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.231960444764851e-07,
              "median": 4.6305996973902975e-08,
              "min": 0.0,
              "max": 0.0001421629445822993,
              "p5": 2.6656947361175034e-11,
              "p95": 4.055650959504832e-06,
              "count": 2563
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1123.1664721898094,
              "median": 21.0,
              "min": 0.0,
              "max": 83202.0,
              "p5": 0.0,
              "p95": 6120.5,
              "count": 2571
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3341238770014385,
              "median": 0.3205058195657933,
              "min": 0.19317227887919272,
              "max": 0.8814217586056219,
              "p5": 0.21420841545708136,
              "p95": 0.4491595830369361,
              "count": 21
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 373854861.4511548,
              "median": 26526150.0,
              "min": 0.0,
              "max": 2252481212.25,
              "p5": 0.0,
              "p95": 1942079452.0,
              "count": 21
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.011668994081575765,
              "median": 0.0024097833685150657,
              "min": 0.0006730043907931626,
              "max": 0.11545356758694877,
              "p5": 0.0008734336841850196,
              "p95": 0.04462725642626763,
              "count": 21
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003496255223353916,
              "median": 0.003259689540243098,
              "min": 0.0,
              "max": 0.009355138613035222,
              "p5": 0.0,
              "p95": 0.008844488929928182,
              "count": 21
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.3929283482497046e-08,
              "median": 3.948183097464904e-10,
              "min": 3.5084715340117e-12,
              "max": 4.5278473832721776e-07,
              "p5": 3.8841683711377744e-12,
              "p95": 3.401230395095426e-07,
              "count": 21
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 4741.952380952381,
              "median": 1325.0,
              "min": 0.0,
              "max": 15840.0,
              "p5": 0.0,
              "p95": 15715.0,
              "count": 21
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 49000595.92734646,
              "median": 19051220.0,
              "min": 3624000.0,
              "max": 194979652.98000002,
              "p5": 4364379.5,
              "p95": 155999469.43699995,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2207.625,
              "median": 968.0,
              "min": 42.0,
              "max": 7788.0,
              "p5": 47.25,
              "p95": 6660.299999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3173282587210841,
              "median": 0.32482686221487755,
              "min": 0.2241369755252657,
              "max": 0.4491595830369361,
              "p5": 0.22480822327221864,
              "p95": 0.4212378183277427,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0036304685948665358,
              "median": 0.002820822357925889,
              "min": 0.0013418958078890944,
              "max": 0.008228673489637975,
              "p5": 0.0014274592340976532,
              "p95": 0.0071370224970374735,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.7056631659901873,
              "median": 1.3071120689655173,
              "min": 1.0421052631578946,
              "max": 7.586956521739131,
              "p5": 1.0576210803202657,
              "p95": 6.5640567428150325,
              "count": 5
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.844143701977236e-10,
              "median": 9.228730561713358e-10,
              "min": 9.231249676623304e-11,
              "max": 2.275002275002265e-09,
              "p5": 1.1658212564218416e-10,
              "p95": 2.06429378997196e-09,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003316105751888335,
              "median": 0.0035501838912526673,
              "min": 7.025663620415422e-06,
              "max": 0.006474012978448546,
              "p5": 1.0477282556335827e-05,
              "p95": 0.0064696090663362085,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.008438818565400963,
            "market": 0.02086654266861232,
            "sector": -0.023903913558397716,
            "peers": -0.06247086488729148,
            "vs_market": -0.012427724103211357,
            "vs_sector": 0.03234273212379868,
            "vs_peers": 0.07090968345269244
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 67.21120186697783,
          "score_pca_percentile": 67.21120186697783,
          "rank_pca": 844,
          "total": 2571,
          "adv_notional_sgd": 7670745.0,
          "adv_volume_shares": 66750.0,
          "free_float_shares": 2557509480.0,
          "turnover_ratio": 2.609961000027261e-05,
          "votes": 270.0,
          "trades": 270.0,
          "spread_pct": 0.0035400913694717475,
          "spread_ticks": 4.075871195412439,
          "amihud": 1.9281629162692664e-09,
          "volatility": 0.3691406992824093
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.6077995981281279,
          "loadings": {
            "log_adv": 0.5062609965266698,
            "log_trades": 0.45994196001153886,
            "log_turnover": 0.4589839532616572,
            "neg_spread": 0.4608437840933715,
            "neg_amihud": 0.31902478957325225,
            "neg_vol": 0.08563362520127225
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
          "peer_median_adv": 23404464.0,
          "peer_median_score_pca": 79.56048230260599,
          "peer_median_trades": 1131.5,
          "peer_median_volatility": 0.36650824575641255,
          "peer_median_spread_pct": 0.0028613038842016754,
          "peer_median_spread_ticks": 1.325448028673835,
          "peer_median_amihud": 8.284983914723181e-10,
          "peer_median_turnover_ratio": 0.003971704941717646,
          "target_vs_peer": {
            "score_pca_delta": -12.35,
            "adv_delta_pct": -67.2,
            "trades_delta_pct": -76.14,
            "volatility_delta_pct": -0.72,
            "spread_pct_delta_pct": -23.72,
            "spread_ticks_delta_pct": 207.51,
            "amihud_delta_pct": -132.73,
            "turnover_ratio_delta_pct": -99.34
          }
        },
        "peer_liquidity": [
          {
            "ticker": "2378",
            "score_pca": 67.21120186697783,
            "rank_pca": 844,
            "adv": 7670745.0,
            "trades": 270.0,
            "volatility": 0.3691406992824093,
            "spread_pct": 0.0035400913694717475,
            "spread_ticks": 4.075871195412439,
            "amihud": 1.9281629162692664e-09,
            "turnover_ratio": 2.609961000027261e-05,
            "is_target": true
          },
          {
            "ticker": "376",
            "score_pca": 77.75184753014392,
            "rank_pca": 573,
            "adv": 15063808.0,
            "trades": 679.0,
            "volatility": 0.5896505078731508,
            "spread_pct": 0.0047759145528608014,
            "spread_ticks": 1.325448028673835,
            "amihud": 1.3131051747211863e-09,
            "turnover_ratio": 0.004590884434546874,
            "is_target": false
          },
          {
            "ticker": "1828",
            "score_pca": 74.9124854142357,
            "rank_pca": 646,
            "adv": 7642110.0,
            "trades": 748.0,
            "volatility": 0.2664778255368511,
            "spread_pct": 0.002537245038768167,
            "spread_ticks": null,
            "amihud": 1.2438432673523702e-09,
            "turnover_ratio": 0.0008730162716179066,
            "is_target": false
          },
          {
            "ticker": "82318",
            "score_pca": 58.69311551925321,
            "rank_pca": 1063,
            "adv": 3944875.0488724275,
            "trades": 33.0,
            "volatility": 0.30822726245306303,
            "spread_pct": 0.0022944768262999128,
            "spread_ticks": 2.514347202295552,
            "amihud": 2.382732048122587e-09,
            "turnover_ratio": 1.1258288005839625e-05,
            "is_target": false
          },
          {
            "ticker": "945",
            "score_pca": 59.27654609101517,
            "rank_pca": 1048,
            "adv": 3722400.0,
            "trades": 64.0,
            "volatility": 0.2514987266022581,
            "spread_pct": 0.004945549359841873,
            "spread_ticks": 7.586956521739131,
            "amihud": 3.2003826603417872e-09,
            "turnover_ratio": 7.435493998272989e-06,
            "is_target": false
          },
          {
            "ticker": "1508",
            "score_pca": 81.36911707506806,
            "rank_pca": 480,
            "adv": 31745120.0,
            "trades": 1515.0,
            "volatility": 0.43152023425074293,
            "spread_pct": 0.0072952355918196946,
            "spread_ticks": 1.0669663984855655,
            "amihud": 4.1315351559226593e-10,
            "turnover_ratio": 0.003352525448888419,
            "is_target": false
          },
          {
            "ticker": "6963",
            "score_pca": 86.7366783352781,
            "rank_pca": 342,
            "adv": 50381760.0,
            "trades": 2434.0,
            "volatility": 0.337605751215132,
            "spread_pct": 0.003185362729635183,
            "spread_ticks": 1.1896396396396396,
            "amihud": 3.2562080085068537e-10,
            "turnover_ratio": 0.0053275760427861545,
            "is_target": false
          },
          {
            "ticker": "6060",
            "score_pca": 93.77674056787242,
            "rank_pca": 161,
            "adv": 115859350.0,
            "trades": 6177.0,
            "volatility": 0.39541074029769313,
            "spread_pct": 0.0012236879873623906,
            "spread_ticks": null,
            "amihud": 1.5036770012754012e-10,
            "turnover_ratio": 0.007066858533485036,
            "is_target": false
          },
          {
            "ticker": "966",
            "score_pca": 94.98249708284715,
            "rank_pca": 130,
            "adv": 190066708.0,
            "trades": 7644.0,
            "volatility": 0.413776811314124,
            "spread_pct": 0.001533592250931656,
            "spread_ticks": null,
            "amihud": 8.501054098064112e-11,
            "turnover_ratio": 0.0062335221124455486,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Insurance",
          "sector_count": 21,
          "market_count": 2571,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7357243729704763,
              "median": 0.5852980955369584,
              "min": 0.0,
              "max": 34.385705571190606,
              "p5": 0.22164619388369478,
              "p95": 1.6751756484854745,
              "count": 2571
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 58964655.65297873,
              "median": 219888.0,
              "min": 0.0,
              "max": 12236636500.0,
              "p5": 0.0,
              "p95": 234495515.75,
              "count": 2571
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04311758135656986,
              "median": 0.02881844380403459,
              "min": 0.0005681922931204329,
              "max": 0.586235634471959,
              "p5": 0.0014500226814230816,
              "p95": 0.13143370097338894,
              "count": 2571
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0038888401494928536,
              "median": 0.0008843933226605998,
              "min": 0.0,
              "max": 0.38612653752209847,
              "p5": 0.0,
              "p95": 0.014793894971560263,
              "count": 2555
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.992807053771985e-07,
              "median": 4.923906765497146e-08,
              "min": 0.0,
              "max": 4.914515513019252e-05,
              "p5": 4.954160167373198e-11,
              "p95": 3.423917792152159e-06,
              "count": 2571
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1071.655387008946,
              "median": 20.0,
              "min": 0.0,
              "max": 67896.0,
              "p5": 0.0,
              "p95": 5824.0,
              "count": 2571
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.43112871714142337,
              "median": 0.38734632175922284,
              "min": 0.20979710540378374,
              "max": 1.716050947944944,
              "p5": 0.2514987266022581,
              "p95": 0.5896505078731508,
              "count": 21
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 373654565.5418062,
              "median": 31745120.0,
              "min": 0.0,
              "max": 2255352501.75,
              "p5": 6940.0,
              "p95": 2067353752.0,
              "count": 21
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.008571138609547849,
              "median": 0.0022944768262999128,
              "min": 0.0006721075695228333,
              "max": 0.05241143832693134,
              "p5": 0.0008695892751344031,
              "p95": 0.038732525687007,
              "count": 21
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0034482774772435255,
              "median": 0.003352525448888419,
              "min": 0.0,
              "max": 0.009355138613035222,
              "p5": 2.262028543937936e-07,
              "p95": 0.008844488929928182,
              "count": 21
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.782242934594407e-08,
              "median": 4.1315351559226593e-10,
              "min": 5.377789876709357e-12,
              "max": 5.805717470565019e-07,
              "p5": 6.880184524268378e-12,
              "p95": 1.6488415898526306e-07,
              "count": 21
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 4767.952380952381,
              "median": 1515.0,
              "min": 0.0,
              "max": 15856.0,
              "p5": 1.0,
              "p95": 15818.0,
              "count": 21
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 52303266.38110905,
              "median": 23404464.0,
              "min": 3722400.0,
              "max": 190066708.0,
              "p5": 3800266.26710535,
              "p95": 164094132.69999996,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2411.75,
              "median": 1131.5,
              "min": 33.0,
              "max": 7644.0,
              "p5": 43.85,
              "p95": 7130.549999999999,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3742709824428769,
              "median": 0.36650824575641255,
              "min": 0.2514987266022581,
              "max": 0.5896505078731508,
              "p5": 0.25674141122936567,
              "p95": 0.534304912105308,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0034738830421899595,
              "median": 0.0028613038842016754,
              "min": 0.0012236879873623906,
              "max": 0.0072952355918196946,
              "p5": 0.0013321544796116335,
              "p95": 0.006472845410627455,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.736671558166745,
              "median": 1.325448028673835,
              "min": 1.0669663984855655,
              "max": 7.586956521739131,
              "p5": 1.0915010467163804,
              "p95": 6.572434657850414,
              "count": 5
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.1392769635111328e-09,
              "median": 8.284983914723181e-10,
              "min": 8.501054098064112e-11,
              "max": 3.2003826603417872e-09,
              "p5": 1.0788554668205577e-10,
              "p95": 2.9142049460650667e-09,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0034328845782217567,
              "median": 0.003971704941717646,
              "min": 7.435493998272989e-06,
              "max": 0.007066858533485036,
              "p5": 8.773471900921313e-06,
              "p95": 0.006775190786121215,
              "count": 8
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": 0.031061259706643085,
            "market": 0.029271276062160734,
            "sector": -0.11788138148293426,
            "peers": -0.17549184959233988,
            "vs_market": 0.0017899836444823514,
            "vs_sector": 0.14894264118957734,
            "vs_peers": 0.20655310929898296
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 67.87242318164138,
          "score_pca_percentile": 67.87242318164138,
          "rank_pca": 827,
          "total": 2571,
          "adv_notional_sgd": 8630745.0,
          "adv_volume_shares": 72425.0,
          "free_float_shares": 2557509480.0,
          "turnover_ratio": 2.8318565607037357e-05,
          "votes": 271.0,
          "trades": 271.0,
          "spread_pct": 0.0034695532331077495,
          "spread_ticks": 4.138320463237838,
          "amihud": 1.3828644341540456e-09,
          "volatility": 0.33916495668027413
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.6278930772038819,
          "loadings": {
            "log_adv": 0.4972405548774173,
            "log_trades": 0.4502866682635278,
            "log_turnover": 0.4499390435752101,
            "neg_spread": 0.460142718554864,
            "neg_amihud": 0.3517472510336677,
            "neg_vol": 0.10995978349902442
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
          "peer_median_adv": 27320287.7,
          "peer_median_score_pca": 79.87164527421237,
          "peer_median_trades": 1029.0,
          "peer_median_volatility": 0.34690058195360723,
          "peer_median_spread_pct": 0.00275985846234272,
          "peer_median_spread_ticks": 1.3526260713573848,
          "peer_median_amihud": 5.789557112725479e-10,
          "peer_median_turnover_ratio": 0.004007071846044922,
          "target_vs_peer": {
            "score_pca_delta": -12.0,
            "adv_delta_pct": -68.4,
            "trades_delta_pct": -73.66,
            "volatility_delta_pct": 2.23,
            "spread_pct_delta_pct": -25.71,
            "spread_ticks_delta_pct": 205.95,
            "amihud_delta_pct": -138.85,
            "turnover_ratio_delta_pct": -99.29
          }
        },
        "peer_liquidity": [
          {
            "ticker": "2378",
            "score_pca": 67.87242318164138,
            "rank_pca": 827,
            "adv": 8630745.0,
            "trades": 271.0,
            "volatility": 0.33916495668027413,
            "spread_pct": 0.0034695532331077495,
            "spread_ticks": 4.138320463237838,
            "amihud": 1.3828644341540456e-09,
            "turnover_ratio": 2.8318565607037357e-05,
            "is_target": true
          },
          {
            "ticker": "376",
            "score_pca": 79.77440684558537,
            "rank_pca": 521,
            "adv": 24483975.4,
            "trades": 867.0,
            "volatility": 0.6098940062111264,
            "spread_pct": 0.00446149281911183,
            "spread_ticks": 1.3526260713573848,
            "amihud": 1.0341474669400284e-09,
            "turnover_ratio": 0.006163588700936619,
            "is_target": false
          },
          {
            "ticker": "1828",
            "score_pca": 76.93504472967717,
            "rank_pca": 594,
            "adv": 11247428.0,
            "trades": 864.0,
            "volatility": 0.21844048650518122,
            "spread_pct": 0.002149718430856517,
            "spread_ticks": null,
            "amihud": 7.347097588702582e-10,
            "turnover_ratio": 0.0011143304615056349,
            "is_target": false
          },
          {
            "ticker": "82318",
            "score_pca": 58.92648774795799,
            "rank_pca": 1057,
            "adv": 4634686.981070053,
            "trades": 33.0,
            "volatility": 0.31964830291644675,
            "spread_pct": 0.0022530412460761077,
            "spread_ticks": 2.539879846112113,
            "amihud": 2.149257434906314e-09,
            "turnover_ratio": 1.2196478672992927e-05,
            "is_target": false
          },
          {
            "ticker": "945",
            "score_pca": 59.50991831971996,
            "rank_pca": 1042,
            "adv": 3587050.0,
            "trades": 62.0,
            "volatility": 0.22826696421155068,
            "spread_pct": 0.004493256573419837,
            "spread_ticks": 6.3194773135302755,
            "amihud": 2.3920814572436205e-09,
            "turnover_ratio": 7.406220399854591e-06,
            "is_target": false
          },
          {
            "ticker": "1508",
            "score_pca": 79.96888370283936,
            "rank_pca": 516,
            "adv": 30156600.0,
            "trades": 1191.0,
            "volatility": 0.3756639188778311,
            "spread_pct": 0.006718332424202004,
            "spread_ticks": 1.0760004750029686,
            "amihud": 4.2320166367483765e-10,
            "turnover_ratio": 0.002980167291234769,
            "is_target": false
          },
          {
            "ticker": "6963",
            "score_pca": 86.7755737067289,
            "rank_pca": 341,
            "adv": 49337585.0,
            "trades": 2353.5,
            "volatility": 0.3381005390937223,
            "spread_pct": 0.003266675678609333,
            "spread_ticks": 1.228738060294598,
            "amihud": 2.9261069156643023e-10,
            "turnover_ratio": 0.005033976400855074,
            "is_target": false
          },
          {
            "ticker": "6060",
            "score_pca": 94.71022948269156,
            "rank_pca": 137,
            "adv": 133765207.5,
            "trades": 6745.0,
            "volatility": 0.3557006248134922,
            "spread_pct": 0.0011371279687285637,
            "spread_ticks": null,
            "amihud": 1.0650837246208049e-10,
            "turnover_ratio": 0.007390818235582105,
            "is_target": false
          },
          {
            "ticker": "966",
            "score_pca": 95.91598599766627,
            "rank_pca": 106,
            "adv": 199305288.68,
            "trades": 8512.0,
            "volatility": 0.4164305190406225,
            "spread_pct": 0.0015754932569227848,
            "spread_ticks": null,
            "amihud": 8.17055259482872e-11,
            "turnover_ratio": 0.007076066625744584,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Insurance",
          "sector_count": 21,
          "market_count": 2571,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.75822812756525,
              "median": 0.6031638752731745,
              "min": 0.0,
              "max": 33.691646467757096,
              "p5": 0.22550745371131659,
              "p95": 1.63682605116363,
              "count": 2571
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 55728659.478669554,
              "median": 210975.0,
              "min": 0.0,
              "max": 11918065125.0,
              "p5": 0.0,
              "p95": 220259932.29,
              "count": 2571
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04207446141121854,
              "median": 0.027695784679656173,
              "min": 0.0005771856643019467,
              "max": 0.586235634471959,
              "p5": 0.0014208584315453484,
              "p95": 0.1324396532286795,
              "count": 2571
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0035373519647117313,
              "median": 0.0008301989288898599,
              "min": 0.0,
              "max": 0.18523236964248901,
              "p5": 0.0,
              "p95": 0.01457506378368512,
              "count": 2555
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.114115465324687e-07,
              "median": 4.764775689033665e-08,
              "min": 0.0,
              "max": 2.184280144806465e-05,
              "p5": 5.243088147276305e-11,
              "p95": 3.143788841813537e-06,
              "count": 2571
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1017.7306495527032,
              "median": 19.0,
              "min": 0.0,
              "max": 79385.5,
              "p5": 0.0,
              "p95": 5533.25,
              "count": 2571
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4315190064202189,
              "median": 0.3557006248134922,
              "min": 0.21844048650518122,
              "max": 1.968484818579439,
              "p5": 0.22826696421155068,
              "p95": 0.6098940062111264,
              "count": 21
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 395633931.9010032,
              "median": 30156600.0,
              "min": 0.0,
              "max": 2277587334.95,
              "p5": 27000.0,
              "p95": 2133859266.3250003,
              "count": 21
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.008508185857922724,
              "median": 0.002149718430856517,
              "min": 0.000675890048809352,
              "max": 0.052379174494585255,
              "p5": 0.0008483486664256693,
              "p95": 0.03625207608907069,
              "count": 21
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0036545330583630077,
              "median": 0.002980167291234769,
              "min": 0.0,
              "max": 0.009771684565041131,
              "p5": 3.0845843780971854e-07,
              "p95": 0.009404131840219713,
              "count": 21
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.811933185913324e-08,
              "median": 4.2320166367483765e-10,
              "min": 4.883409595552578e-12,
              "max": 2.1603719112949397e-07,
              "p5": 6.865674918277967e-12,
              "p95": 1.4097085128208605e-07,
              "count": 21
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 4953.380952380952,
              "median": 1191.0,
              "min": 0.0,
              "max": 17315.0,
              "p5": 2.0,
              "p95": 16392.5,
              "count": 21
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 57064727.69513376,
              "median": 27320287.7,
              "min": 3587050.0,
              "max": 199305288.68,
              "p5": 3953722.9433745183,
              "p95": 176366260.26699996,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2578.4375,
              "median": 1029.0,
              "min": 33.0,
              "max": 8512.0,
              "p5": 43.15,
              "p95": 7893.549999999999,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3577681702087466,
              "median": 0.34690058195360723,
              "min": 0.21844048650518122,
              "max": 0.6098940062111264,
              "p5": 0.22187975370241053,
              "p95": 0.5421817857014499,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.003256892299740872,
              "median": 0.00275985846234272,
              "min": 0.0011371279687285637,
              "max": 0.006718332424202004,
              "p5": 0.0012905558195965411,
              "p95": 0.005939555876428244,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.503344353259468,
              "median": 1.3526260713573848,
              "min": 1.0760004750029686,
              "max": 6.3194773135302755,
              "p5": 1.1065479920612944,
              "p95": 5.5635578200466425,
              "count": 5
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.017777964514821e-10,
              "median": 5.789557112725479e-10,
              "min": 8.17055259482872e-11,
              "max": 2.3920814572436205e-09,
              "p5": 9.038652222811485e-11,
              "p95": 2.307093049425563e-09,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003722318801866455,
              "median": 0.004007071846044922,
              "min": 7.406220399854591e-06,
              "max": 0.007390818235582105,
              "p5": 9.08281079545301e-06,
              "p95": 0.007280655172138973,
              "count": 8
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": 0.12842304060434317,
            "market": 0.15043005670937237,
            "sector": -0.10017017179734633,
            "peers": -0.18465185595292855,
            "vs_market": -0.022007016105029198,
            "vs_sector": 0.2285932124016895,
            "vs_peers": 0.3130748965572717
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "1D score 60.6 vs peer median 73.9 (-13.2 pts).",
        "market_comparison": "Return 0.0% vs peers 0.1%."
      },
      "30d": {
        "liquidity": "Liquidity is weak on the monthly view, with a score of 67.8 compared with a peer median of 78.5, which leaves access below the peer group.",
        "market_comparison": "The stock returned 0.8% over 1M while peers fell 6.2%, which gives trading a firmer backdrop than the sector."
      },
      "3m": {
        "liquidity": "Liquidity remains weak over 3M, with a score of 67.2 compared with a peer median of 79.6, showing the gap is structural rather than a short-term move.",
        "market_comparison": "The stock rose 3.1% over 3M while peers fell 17.5%, which supports interest even though liquidity still screens below peers."
      },
      "6m": {
        "liquidity": "Liquidity is weak over 6M, with a score of 67.9 compared with a peer median of 79.9, so accessibility has been consistently below peers for its size.",
        "market_comparison": "The stock gained 12.8% over 6M while peers fell 18.5%, which strengthens the return backdrop but does not close the liquidity gap."
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
      "current_regime": 2,
      "current_regime_label": "Stressed / Illiquid",
      "current_regime_probability": 0.9984577388326532,
      "current_regime_probability_display": "99.8%",
      "current_probability_basis": "filtered",
      "historical_probability_basis": "smoothed",
      "current_driver_mix": {
        "market_share": {
          "median": 0.38913472981046404,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "38.9%",
          "display_range": null,
          "display_text": "38.9%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 38.9,
          "plain_english": "Market explains about 38.9% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.4843773200892645,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "48.4%",
          "display_range": null,
          "display_text": "48.4%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 48.4,
          "plain_english": "Sector explains about 48.4% of price moves in the current state."
        },
        "company_share": {
          "median": 0.12648795010027147,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "12.6%",
          "display_range": null,
          "display_text": "12.6%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 12.6,
          "plain_english": "Company-specific explains about 12.6% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 0.5713380867249417,
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
          "median": -0.5572552410366294,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.56",
          "display_range": null,
          "display_text": "-0.56",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -0.56
        },
        "beta_sector": {
          "median": 4.483814424521306,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "4.48",
          "display_range": null,
          "display_text": "4.48",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Very high",
          "plain_english": "Very high sector link: a 1% sector move has lined up with about a 4.48% stock move in the same direction in this state.",
          "value_num": 4.48
        },
        "beta_market_lag": {
          "median": 3.5008677687846657,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "3.50",
          "display_range": null,
          "display_text": "3.50",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 3.5
        },
        "beta_sector_lag": {
          "median": -1.5485450298293817,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-1.55",
          "display_range": null,
          "display_text": "-1.55",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -1.55
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
          "period_label": "2025-05-09 to 2025-05-30",
          "n_obs": 16,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4245159322630158,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "42.5%",
            "display_range": null,
            "display_text": "42.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
            "kind": "share_pct",
            "value_pct": 42.5,
            "plain_english": "Company-specific explains about 42.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.41608517633152675,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "41.6%",
              "display_range": null,
              "display_text": "41.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 41.6,
              "plain_english": "Market explains about 41.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1593988914054574,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "15.9%",
              "display_range": null,
              "display_text": "15.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 15.9,
              "plain_english": "Sector explains about 15.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4245159322630158,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.5%",
              "display_range": null,
              "display_text": "42.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 42.5,
              "plain_english": "Company-specific explains about 42.5% of price moves in the current state."
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
            "median": 0.4794529001562919,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.9%",
            "display_range": null,
            "display_text": "47.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 47.9,
            "plain_english": "Company-specific explains about 47.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.33392984337425474,
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
              "plain_english": "Market explains about 33.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.18661725646945324,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "18.7%",
              "display_range": null,
              "display_text": "18.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 18.7,
              "plain_english": "Sector explains about 18.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4794529001562919,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.9%",
              "display_range": null,
              "display_text": "47.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 47.9,
              "plain_english": "Company-specific explains about 47.9% of price moves in the current state."
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
            "median": 0.5004388456767385,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "50.0%",
            "display_range": null,
            "display_text": "50.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 50.0,
            "plain_english": "Company-specific explains about 50.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.35018628624572556,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "35.0%",
              "display_range": null,
              "display_text": "35.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 35.0,
              "plain_english": "Market explains about 35.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.14937486807753597,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "14.9%",
              "display_range": null,
              "display_text": "14.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 14.9,
              "plain_english": "Sector explains about 14.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5004388456767385,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.0%",
              "display_range": null,
              "display_text": "50.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 50.0,
              "plain_english": "Company-specific explains about 50.0% of price moves in the current state."
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
            "median": 0.6494568952859515,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "64.9%",
            "display_range": null,
            "display_text": "64.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 64.9,
            "plain_english": "Company-specific explains about 64.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.30046790305353754,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "30.0%",
              "display_range": null,
              "display_text": "30.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 30.0,
              "plain_english": "Market explains about 30.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.05007520166051088,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "5.0%",
              "display_range": null,
              "display_text": "5.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 5.0,
              "plain_english": "Sector explains about 5.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6494568952859515,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "64.9%",
              "display_range": null,
              "display_text": "64.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 64.9,
              "plain_english": "Company-specific explains about 64.9% of price moves in the current state."
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
            "median": 0.5922380027625286,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "59.2%",
            "display_range": null,
            "display_text": "59.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 59.2,
            "plain_english": "Company-specific explains about 59.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.12549892883993152,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "12.5%",
              "display_range": null,
              "display_text": "12.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 12.5,
              "plain_english": "Market explains about 12.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.28226306839753995,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "28.2%",
              "display_range": null,
              "display_text": "28.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 28.2,
              "plain_english": "Sector explains about 28.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5922380027625286,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "59.2%",
              "display_range": null,
              "display_text": "59.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 59.2,
              "plain_english": "Company-specific explains about 59.2% of price moves in the current state."
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
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4789320174052419,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.9%",
            "display_range": null,
            "display_text": "47.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 47.9,
            "plain_english": "Market explains about 47.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.4789320174052419,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.9%",
              "display_range": null,
              "display_text": "47.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 47.9,
              "plain_english": "Market explains about 47.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.13541206513283022,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "13.5%",
              "display_range": null,
              "display_text": "13.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 13.5,
              "plain_english": "Sector explains about 13.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.38565591746192796,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "38.6%",
              "display_range": null,
              "display_text": "38.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 38.6,
              "plain_english": "Company-specific explains about 38.6% of price moves in the current state."
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
            "median": 0.5646027879049075,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "56.5%",
            "display_range": null,
            "display_text": "56.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 56.5,
            "plain_english": "Market explains about 56.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.5646027879049075,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.5%",
              "display_range": null,
              "display_text": "56.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 56.5,
              "plain_english": "Market explains about 56.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.14929996693098943,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "14.9%",
              "display_range": null,
              "display_text": "14.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 14.9,
              "plain_english": "Sector explains about 14.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.28609724516410306,
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
              "plain_english": "Company-specific explains about 28.6% of price moves in the current state."
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
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.6443547956648966,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "64.4%",
            "display_range": null,
            "display_text": "64.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
            "kind": "share_pct",
            "value_pct": 64.4,
            "plain_english": "Company-specific explains about 64.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.21617621152973657,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "21.6%",
              "display_range": null,
              "display_text": "21.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 21.6,
              "plain_english": "Market explains about 21.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.13946899280536676,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "13.9%",
              "display_range": null,
              "display_text": "13.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 13.9,
              "plain_english": "Sector explains about 13.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6443547956648966,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "64.4%",
              "display_range": null,
              "display_text": "64.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 64.4,
              "plain_english": "Company-specific explains about 64.4% of price moves in the current state."
            }
          },
          "summary": "Dec: Still clearly company-driven."
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
            "median": 0.4789512085996049,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.9%",
            "display_range": null,
            "display_text": "47.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 47.9,
            "plain_english": "Company-specific explains about 47.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.147633073437993,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "14.8%",
              "display_range": null,
              "display_text": "14.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 14.8,
              "plain_english": "Market explains about 14.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.37341571796240214,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.3%",
              "display_range": null,
              "display_text": "37.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 37.3,
              "plain_english": "Sector explains about 37.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4789512085996049,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.9%",
              "display_range": null,
              "display_text": "47.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 47.9,
              "plain_english": "Company-specific explains about 47.9% of price moves in the current state."
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
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.43708702031748037,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "43.7%",
            "display_range": null,
            "display_text": "43.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
            "kind": "share_pct",
            "value_pct": 43.7,
            "plain_english": "Market explains about 43.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.43708702031748037,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "43.7%",
              "display_range": null,
              "display_text": "43.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 43.7,
              "plain_english": "Market explains about 43.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2669740629448737,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.7%",
              "display_range": null,
              "display_text": "26.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 26.7,
              "plain_english": "Sector explains about 26.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.2959389167376459,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "29.6%",
              "display_range": null,
              "display_text": "29.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 29.6,
              "plain_english": "Company-specific explains about 29.6% of price moves in the current state."
            }
          },
          "summary": "Feb: More mixed, though market-driven still has the largest share."
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
            "median": 0.3973377497760369,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "39.7%",
            "display_range": null,
            "display_text": "39.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 39.7,
            "plain_english": "Market explains about 39.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3973377497760369,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "39.7%",
              "display_range": null,
              "display_text": "39.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 39.7,
              "plain_english": "Market explains about 39.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3620610601374832,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.2%",
              "display_range": null,
              "display_text": "36.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 36.2,
              "plain_english": "Sector explains about 36.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.24060119008647984,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "24.1%",
              "display_range": null,
              "display_text": "24.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 24.1,
              "plain_english": "Company-specific explains about 24.1% of price moves in the current state."
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
            "median": 0.49626801893513955,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "49.6%",
            "display_range": null,
            "display_text": "49.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
            "kind": "share_pct",
            "value_pct": 49.6,
            "plain_english": "Market explains about 49.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.49626801893513955,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "49.6%",
              "display_range": null,
              "display_text": "49.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 49.6,
              "plain_english": "Market explains about 49.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2447280962911579,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "24.5%",
              "display_range": null,
              "display_text": "24.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 24.5,
              "plain_english": "Sector explains about 24.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.25900388477370256,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "25.9%",
              "display_range": null,
              "display_text": "25.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 25.9,
              "plain_english": "Company-specific explains about 25.9% of price moves in the current state."
            }
          },
          "summary": "Apr: Mostly market-driven."
        },
        {
          "month_key": "2026-05",
          "month_label": "May 2026",
          "month_short_label": "May",
          "period_label": "2026-05-04 to 2026-05-22",
          "n_obs": 15,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.36784031838420955,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "36.8%",
            "display_range": null,
            "display_text": "36.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
            "kind": "share_pct",
            "value_pct": 36.8,
            "plain_english": "Company-specific explains about 36.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2773969845775809,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.7%",
              "display_range": null,
              "display_text": "27.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 27.7,
              "plain_english": "Market explains about 27.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3547626970382096,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "35.5%",
              "display_range": null,
              "display_text": "35.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 35.5,
              "plain_english": "Sector explains about 35.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.36784031838420955,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.8%",
              "display_range": null,
              "display_text": "36.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 36.8,
              "plain_english": "Company-specific explains about 36.8% of price moves in the current state."
            }
          },
          "summary": "May: Much more balanced across company, sector, and market factors."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Calm / Liquid",
          "pct_time": 0.1845518371000242,
          "expected_duration_days": 4.542270017411272,
          "current_probability": 9.639983651026922e-18,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 46.32251111210608,
          "volatility": {
            "median": 0.0078088952523777,
            "low": 0.0078088952523777,
            "high": 0.0078088952523777
          },
          "volatility_label": "Calm / Liquid",
          "jump_probability": 0.1803339116380829,
          "jump_rate": 0.00010114260672673877,
          "risk_score": 0.01573057144961522,
          "metrics": {
            "rolling_vol_10d": 0.010186033340106515,
            "downside_vol_10d": 0.005026593711083678,
            "drawdown_21d": 0.011908119019798992,
            "amihud_stress": 0.09693563436345307,
            "spread_rel": 27.021717648873654,
            "spread_ticks": 4.335356150804627,
            "log_notional": 15.778040634126913,
            "log_trade_count": 5.406004795625246
          }
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "pct_time": 0.27282690608320576,
          "expected_duration_days": 6.723843433601532,
          "current_probability": 0.00018251885507725144,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 68.47955342688465,
          "volatility": {
            "median": 0.01713360953942907,
            "low": 0.01713360953942907,
            "high": 0.01713360953942907
          },
          "volatility_label": "Normal / Active",
          "jump_probability": 0.2235469297231818,
          "jump_rate": 0.043742724927105854,
          "risk_score": 0.26737060272618335,
          "metrics": {
            "rolling_vol_10d": 0.016083095264823877,
            "downside_vol_10d": 0.007866560006466097,
            "drawdown_21d": 0.02221525841305102,
            "amihud_stress": 0.163079097984146,
            "spread_rel": 26.62298934318184,
            "spread_ticks": 3.302283345197291,
            "log_notional": 16.000966753833357,
            "log_trade_count": 5.561989432665824
          }
        },
        {
          "id": 2,
          "label": "Stressed / Illiquid",
          "pct_time": 0.2903680161449006,
          "expected_duration_days": 5.592530933294633,
          "current_probability": 0.9984577388326532,
          "current_probability_display": "99.8%",
          "current_probability_basis": "filtered",
          "n_days_effective": 72.88237205237004,
          "volatility": {
            "median": 0.010130784659521027,
            "low": 0.010130784659521027,
            "high": 0.010130784659521027
          },
          "volatility_label": "Stressed / Illiquid",
          "jump_probability": 0.1994900893748884,
          "jump_rate": 0.013714347688367432,
          "risk_score": 0.37970521969892884,
          "metrics": {
            "rolling_vol_10d": 0.017530270761234014,
            "downside_vol_10d": 0.00882185767400303,
            "drawdown_21d": 0.023070569624913637,
            "amihud_stress": 0.08693123265375194,
            "spread_rel": 34.516568757379375,
            "spread_ticks": 4.301264220839396,
            "log_notional": 15.946851806693969,
            "log_trade_count": 5.585281083086917
          }
        },
        {
          "id": 3,
          "label": "Jump / Tail Shock",
          "pct_time": 0.2522532406718695,
          "expected_duration_days": 4.572238030527758,
          "current_probability": 0.0013597423122694247,
          "current_probability_display": "0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 63.31556340863925,
          "volatility": {
            "median": 0.02971495914931679,
            "low": 0.02971495914931679,
            "high": 0.02971495914931679
          },
          "volatility_label": "Jump / Tail Shock",
          "jump_probability": 0.347081883753662,
          "jump_rate": 0.17373766841680838,
          "risk_score": 1.0,
          "metrics": {
            "rolling_vol_10d": 0.025620924731100014,
            "downside_vol_10d": 0.014736363943419813,
            "drawdown_21d": 0.06163173899724627,
            "amihud_stress": 0.23135969825875027,
            "spread_rel": 39.211772931443754,
            "spread_ticks": 4.5909910046584965,
            "log_notional": 16.00671528966338,
            "log_trade_count": 5.6368889384391805
          }
        }
      ],
      "transitions": {
        "mean": [
          [
            0.7798457607833011,
            0.17646363487453798,
            0.00021874042533710048,
            0.0434718639168237
          ],
          [
            0.11950376532495194,
            0.8512755375887204,
            0.00015577726271813708,
            0.029064919823609505
          ],
          [
            0.02804838435957624,
            0.013812960959255835,
            0.8211900815699401,
            0.13694857311122788
          ],
          [
            0.0001577602659467674,
            0.0001605136102178921,
            0.21839299909852206,
            0.7812887270253134
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            36.0,
            8.0,
            0.0,
            2.0
          ],
          [
            8.0,
            59.0,
            0.0,
            2.0
          ],
          [
            2.0,
            1.0,
            59.0,
            10.0
          ],
          [
            0.0,
            0.0,
            14.0,
            49.0
          ]
        ]
      },
      "current_state_is_transition": false,
      "state_probabilities": [
        {
          "id": 0,
          "label": "Calm / Liquid",
          "probability": 9.639983651026922e-18,
          "probability_display": "<0.1%",
          "basis": "filtered"
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "probability": 0.00018251885507725144,
          "probability_display": "<0.1%",
          "basis": "filtered"
        },
        {
          "id": 2,
          "label": "Stressed / Illiquid",
          "probability": 0.9984577388326532,
          "probability_display": "99.8%",
          "basis": "filtered"
        },
        {
          "id": 3,
          "label": "Jump / Tail Shock",
          "probability": 0.0013597423122694247,
          "probability_display": "0.1%",
          "basis": "filtered"
        }
      ],
      "jump_risk": {
        "current_probability": 0.19969516700960613,
        "current_score": 0.5525756401451052,
        "current_flag": false,
        "jump_threshold_score": 2.5,
        "method": "robust_residual_and_return_jump_overlay",
        "model_definition": "jump_score_feature_overlay"
      },
      "model_selection": {
        "chosen": 4,
        "criterion": "bic_with_min_state_support",
        "bic": 11816.571505445525,
        "loglik": -5380.604997035677,
        "n_params": 191,
        "bic_delta_vs_next_best": 165.00843268413882,
        "candidates": [
          {
            "k": 2,
            "valid": true,
            "reason": "ok",
            "bic": 12503.496694478257,
            "loglik": -6000.340238508633,
            "n_params": 91,
            "converged": true,
            "iterations": 11,
            "best_seed": 42,
            "seed_runs": [
              {
                "seed": 42,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 12503.496694478257,
                "loglik": -6000.340238508633,
                "n_params": 91,
                "converged": true,
                "iterations": 11
              },
              {
                "seed": 1337,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 12503.496694888183,
                "loglik": -6000.340238713596,
                "n_params": 91,
                "converged": true,
                "iterations": 11
              },
              {
                "seed": 2027,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 12503.496698115167,
                "loglik": -6000.3402403270875,
                "n_params": 91,
                "converged": true,
                "iterations": 11
              }
            ]
          },
          {
            "k": 3,
            "valid": true,
            "reason": "ok",
            "bic": 11981.579938129664,
            "loglik": -5604.008263325607,
            "n_params": 140,
            "converged": true,
            "iterations": 24,
            "best_seed": 42,
            "seed_runs": [
              {
                "seed": 42,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 11981.579938129664,
                "loglik": -5604.008263325607,
                "n_params": 140,
                "converged": true,
                "iterations": 24
              },
              {
                "seed": 1337,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 11981.57994334027,
                "loglik": -5604.00826593091,
                "n_params": 140,
                "converged": true,
                "iterations": 21
              },
              {
                "seed": 2027,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 11981.57994103151,
                "loglik": -5604.00826477653,
                "n_params": 140,
                "converged": true,
                "iterations": 22
              }
            ]
          },
          {
            "k": 4,
            "valid": true,
            "reason": "ok",
            "bic": 11816.571505445525,
            "loglik": -5380.604997035677,
            "n_params": 191,
            "converged": true,
            "iterations": 28,
            "best_seed": 42,
            "seed_runs": [
              {
                "seed": 42,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 11816.571505445525,
                "loglik": -5380.604997035677,
                "n_params": 191,
                "converged": true,
                "iterations": 28
              },
              {
                "seed": 1337,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 11816.571618982804,
                "loglik": -5380.605053804316,
                "n_params": 191,
                "converged": true,
                "iterations": 28
              },
              {
                "seed": 2027,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 11816.571591982169,
                "loglik": -5380.605040303999,
                "n_params": 191,
                "converged": true,
                "iterations": 29
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
              "bic": 11816.571505445525,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 4,
              "bic": 11816.571618982804,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 4,
              "bic": 11816.571591982169,
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
                "2": 6757.1966092301545,
                "3": 6634.928185360642,
                "4": 6529.31897877415
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
                "2": 9741.311671319603,
                "3": 9259.144008107347,
                "4": 9149.842559500365
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
                "2": 12503.496694478257,
                "3": 11981.579952324388,
                "4": 11816.57168619361
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
        "bic_delta_vs_next_best": 165.00843268413882,
        "state_count_interpretation": "251 observations allowed the current rule to test up to 4 states; BIC preferred 4 with a 165.01 improvement versus the next best valid state count.",
        "parameter_count": {
          "formula": "k^2 - 1 + 2*k*d",
          "n_parameters": 191,
          "observations_per_parameter": 1.3141361256544504,
          "parameter_pressure_label": "parameter_heavy"
        },
        "state_occupancy": {
          "min_effective_days_required": 7.529999999999999,
          "min_effective_days_observed": 46.32251111210608,
          "passes": true,
          "states": [
            {
              "id": 0,
              "label": "Calm / Liquid",
              "effective_days": 46.32251111210608,
              "pct_time": 0.1845518371000242,
              "passes_min_support": true
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "effective_days": 68.47955342688465,
              "pct_time": 0.27282690608320576,
              "passes_min_support": true
            },
            {
              "id": 2,
              "label": "Stressed / Illiquid",
              "effective_days": 72.88237205237004,
              "pct_time": 0.2903680161449006,
              "passes_min_support": true
            },
            {
              "id": 3,
              "label": "Jump / Tail Shock",
              "effective_days": 63.31556340863925,
              "pct_time": 0.2522532406718695,
              "passes_min_support": true
            }
          ]
        },
        "transition_diagnostics": {
          "self_transition_probabilities": [
            0.7798457607833011,
            0.8512755375887204,
            0.8211900815699401,
            0.7812887270253134
          ],
          "expected_duration_days": [
            4.542270017411272,
            6.723843433601532,
            5.592530933294633,
            4.572238030527758
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
              "bic": 11816.571505445525,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 4,
              "bic": 11816.571618982804,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 4,
              "bic": 11816.571591982169,
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
                "2": 6757.1966092301545,
                "3": 6634.928185360642,
                "4": 6529.31897877415
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
                "2": 9741.311671319603,
                "3": 9259.144008107347,
                "4": 9149.842559500365
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
                "2": 12503.496694478257,
                "3": 11981.579952324388,
                "4": 11816.57168619361
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
            "risk_score": 0.01573057144961522,
            "jump_probability": 0.1803339116380829,
            "jump_rate": 0.00010114260672673877,
            "rolling_vol_10d": 0.010186033340106515,
            "downside_vol_10d": 0.005026593711083678,
            "drawdown_21d": 0.011908119019798992,
            "amihud_stress": 0.09693563436345307,
            "spread_rel": 27.021717648873654,
            "spread_ticks": 4.335356150804627,
            "log_notional": 15.778040634126913,
            "log_trade_count": 5.406004795625246
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "risk_score": 0.26737060272618335,
            "jump_probability": 0.2235469297231818,
            "jump_rate": 0.043742724927105854,
            "rolling_vol_10d": 0.016083095264823877,
            "downside_vol_10d": 0.007866560006466097,
            "drawdown_21d": 0.02221525841305102,
            "amihud_stress": 0.163079097984146,
            "spread_rel": 26.62298934318184,
            "spread_ticks": 3.302283345197291,
            "log_notional": 16.000966753833357,
            "log_trade_count": 5.561989432665824
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "risk_score": 0.37970521969892884,
            "jump_probability": 0.1994900893748884,
            "jump_rate": 0.013714347688367432,
            "rolling_vol_10d": 0.017530270761234014,
            "downside_vol_10d": 0.00882185767400303,
            "drawdown_21d": 0.023070569624913637,
            "amihud_stress": 0.08693123265375194,
            "spread_rel": 34.516568757379375,
            "spread_ticks": 4.301264220839396,
            "log_notional": 15.946851806693969,
            "log_trade_count": 5.585281083086917
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "risk_score": 1.0,
            "jump_probability": 0.347081883753662,
            "jump_rate": 0.17373766841680838,
            "rolling_vol_10d": 0.025620924731100014,
            "downside_vol_10d": 0.014736363943419813,
            "drawdown_21d": 0.06163173899724627,
            "amihud_stress": 0.23135969825875027,
            "spread_rel": 39.211772931443754,
            "spread_ticks": 4.5909910046584965,
            "log_notional": 16.00671528966338,
            "log_trade_count": 5.6368889384391805
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
          "trade_date": "2026-05-11",
          "state": 2,
          "probabilities": [
            8.650968503629963e-38,
            1.563489902338839e-12,
            0.875937227096799,
            0.12406277290163761
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            4.465345999725096e-37,
            1.2070159889600012e-11,
            0.9651466679919146,
            0.03485333199601518
          ],
          "jump_probability": 0.14579041554409533,
          "jump_score": 0.7126030449320552
        },
        {
          "trade_date": "2026-05-12",
          "state": 3,
          "probabilities": [
            3.0629200746739264e-43,
            2.9543772562380023e-12,
            0.28988568026601086,
            0.7101143197310348
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            2.6161234793924794e-42,
            3.774170865499793e-11,
            0.665301222067074,
            0.3346987778951843
          ],
          "jump_probability": 0.18537036615022057,
          "jump_score": 0.9627149826260918
        },
        {
          "trade_date": "2026-05-13",
          "state": 3,
          "probabilities": [
            3.7487814669185014e-41,
            4.066918601122919e-09,
            0.05049901136419277,
            0.9495009845688885
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            3.8644063336091197e-38,
            5.888556667171938e-06,
            0.01394837412392196,
            0.9860457373194108
          ],
          "jump_probability": 0.2622429413111345,
          "jump_score": 1.350571086434105
        },
        {
          "trade_date": "2026-05-14",
          "state": 2,
          "probabilities": [
            2.6412619212723202e-27,
            2.372127998541085e-11,
            0.9998987292737874,
            0.00010127070249123139
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            3.2924573493285574e-24,
            4.308241134598167e-08,
            0.9996319605831295,
            0.0003679963344591898
          ],
          "jump_probability": 0.1142240477823509,
          "jump_score": 0.46886765917884665
        },
        {
          "trade_date": "2026-05-15",
          "state": 2,
          "probabilities": [
            1.3921870647932608e-23,
            5.008567587123849e-08,
            0.9983097880045576,
            0.0016901619097665387
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            4.4326620895874986e-23,
            2.3851702464119685e-07,
            0.9997004610276429,
            0.00029930045533248576
          ],
          "jump_probability": 0.15987845533409586,
          "jump_score": 0.8072759086850066
        },
        {
          "trade_date": "2026-05-18",
          "state": 3,
          "probabilities": [
            2.9698882700832984e-36,
            8.953279325082639e-10,
            0.009191143015656704,
            0.9908088560890154
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            6.979636239594922e-35,
            3.1408517203687775e-08,
            0.008891358135443587,
            0.9911086104560393
          ],
          "jump_probability": 0.2363305173016958,
          "jump_score": 1.2300836878197032
        },
        {
          "trade_date": "2026-05-19",
          "state": 3,
          "probabilities": [
            6.630682434365497e-32,
            1.7827676065073007e-08,
            0.2453515028720136,
            0.7546484793003104
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            5.531460288726098e-31,
            2.224302965676209e-07,
            0.6497109862552651,
            0.3502887913144384
          ],
          "jump_probability": 0.17986631316264068,
          "jump_score": 0.9306491396505062
        },
        {
          "trade_date": "2026-05-20",
          "state": 3,
          "probabilities": [
            1.1932453504570219e-36,
            4.8854776833831665e-08,
            2.718424555620021e-06,
            0.9999972327206677
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            2.1383058906764487e-35,
            1.2863318367041647e-06,
            1.5507222465793975e-05,
            0.9999832064456976
          ],
          "jump_probability": 0.236708993217459,
          "jump_score": 1.2319062202124778
        },
        {
          "trade_date": "2026-05-21",
          "state": 3,
          "probabilities": [
            1.4758254677873188e-44,
            1.4791917197657097e-07,
            4.1991893169964303e-10,
            0.9999998516609091
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            7.321697592735371e-44,
            1.5281565276101362e-07,
            1.1137599908715911e-10,
            0.9999998470729713
          ],
          "jump_probability": 0.33219152590202095,
          "jump_score": 1.6427915398482427
        },
        {
          "trade_date": "2026-05-22",
          "state": 2,
          "probabilities": [
            9.639983651026922e-18,
            0.00018251885507725144,
            0.9984577388326532,
            0.0013597423122694247
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            9.639983651026922e-18,
            0.00018251885507725144,
            0.9984577388326532,
            0.0013597423122694247
          ],
          "jump_probability": 0.12433130351304691,
          "jump_score": 0.5525756401451052
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
        "sector_link_display": "4.48",
        "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.57% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 4.48% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "-0.56",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "Stressed / Illiquid",
        "dominant_driver": "sector",
        "dominant_driver_label": "Sector",
        "driver_share_pct": 48.4,
        "driver_share_display": "48.4%",
        "confidence_label": "High, limited history",
        "confidence_pct": 99.8,
        "confidence_display": "99.8%",
        "probability_basis": "filtered",
        "display_confidence_pct": null,
        "confidence_note": "Based on 251 trading days relative to the 252-day target.",
        "history_days": 251,
        "history_limited": true,
        "volatility_label": "Stressed / Illiquid",
        "jump_risk_label": "Contained",
        "jump_risk_probability": 20.0,
        "jump_risk_score": 0.55,
        "jump_risk_note": "Jump risk is contained based on recent residual and return shocks.",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.8211900815699401,
        "effective_days": 72.9,
        "persistence_note": "This state looks more persistent, with a typical run length of about 5.6 days.",
        "expected_duration_days": 5.6
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
          "pct_time": 0.1845518371000242,
          "expected_duration_days": 4.542270017411272,
          "current_probability": 9.639983651026922e-18,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 46.32251111210608,
          "volatility": {
            "median": 0.0078088952523777,
            "low": 0.0078088952523777,
            "high": 0.0078088952523777
          },
          "volatility_label": "Calm / Liquid",
          "jump_probability": 0.1803339116380829,
          "jump_rate": 0.00010114260672673877,
          "risk_score": 0.01573057144961522,
          "metrics": {
            "rolling_vol_10d": 0.010186033340106515,
            "downside_vol_10d": 0.005026593711083678,
            "drawdown_21d": 0.011908119019798992,
            "amihud_stress": 0.09693563436345307,
            "spread_rel": 27.021717648873654,
            "spread_ticks": 4.335356150804627,
            "log_notional": 15.778040634126913,
            "log_trade_count": 5.406004795625246
          }
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "pct_time": 0.27282690608320576,
          "expected_duration_days": 6.723843433601532,
          "current_probability": 0.00018251885507725144,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 68.47955342688465,
          "volatility": {
            "median": 0.01713360953942907,
            "low": 0.01713360953942907,
            "high": 0.01713360953942907
          },
          "volatility_label": "Normal / Active",
          "jump_probability": 0.2235469297231818,
          "jump_rate": 0.043742724927105854,
          "risk_score": 0.26737060272618335,
          "metrics": {
            "rolling_vol_10d": 0.016083095264823877,
            "downside_vol_10d": 0.007866560006466097,
            "drawdown_21d": 0.02221525841305102,
            "amihud_stress": 0.163079097984146,
            "spread_rel": 26.62298934318184,
            "spread_ticks": 3.302283345197291,
            "log_notional": 16.000966753833357,
            "log_trade_count": 5.561989432665824
          }
        },
        {
          "id": 2,
          "label": "Stressed / Illiquid",
          "pct_time": 0.2903680161449006,
          "expected_duration_days": 5.592530933294633,
          "current_probability": 0.9984577388326532,
          "current_probability_display": "99.8%",
          "current_probability_basis": "filtered",
          "n_days_effective": 72.88237205237004,
          "volatility": {
            "median": 0.010130784659521027,
            "low": 0.010130784659521027,
            "high": 0.010130784659521027
          },
          "volatility_label": "Stressed / Illiquid",
          "jump_probability": 0.1994900893748884,
          "jump_rate": 0.013714347688367432,
          "risk_score": 0.37970521969892884,
          "metrics": {
            "rolling_vol_10d": 0.017530270761234014,
            "downside_vol_10d": 0.00882185767400303,
            "drawdown_21d": 0.023070569624913637,
            "amihud_stress": 0.08693123265375194,
            "spread_rel": 34.516568757379375,
            "spread_ticks": 4.301264220839396,
            "log_notional": 15.946851806693969,
            "log_trade_count": 5.585281083086917
          }
        },
        {
          "id": 3,
          "label": "Jump / Tail Shock",
          "pct_time": 0.2522532406718695,
          "expected_duration_days": 4.572238030527758,
          "current_probability": 0.0013597423122694247,
          "current_probability_display": "0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 63.31556340863925,
          "volatility": {
            "median": 0.02971495914931679,
            "low": 0.02971495914931679,
            "high": 0.02971495914931679
          },
          "volatility_label": "Jump / Tail Shock",
          "jump_probability": 0.347081883753662,
          "jump_rate": 0.17373766841680838,
          "risk_score": 1.0,
          "metrics": {
            "rolling_vol_10d": 0.025620924731100014,
            "downside_vol_10d": 0.014736363943419813,
            "drawdown_21d": 0.06163173899724627,
            "amihud_stress": 0.23135969825875027,
            "spread_rel": 39.211772931443754,
            "spread_ticks": 4.5909910046584965,
            "log_notional": 16.00671528966338,
            "log_trade_count": 5.6368889384391805
          }
        }
      ],
      "transitions": [
        [
          0.7798457607833011,
          0.17646363487453798,
          0.00021874042533710048,
          0.0434718639168237
        ],
        [
          0.11950376532495194,
          0.8512755375887204,
          0.00015577726271813708,
          0.029064919823609505
        ],
        [
          0.02804838435957624,
          0.013812960959255835,
          0.8211900815699401,
          0.13694857311122788
        ],
        [
          0.0001577602659467674,
          0.0001605136102178921,
          0.21839299909852206,
          0.7812887270253134
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.7798457607833011,
            0.17646363487453798,
            0.00021874042533710048,
            0.0434718639168237
          ],
          [
            0.11950376532495194,
            0.8512755375887204,
            0.00015577726271813708,
            0.029064919823609505
          ],
          [
            0.02804838435957624,
            0.013812960959255835,
            0.8211900815699401,
            0.13694857311122788
          ],
          [
            0.0001577602659467674,
            0.0001605136102178921,
            0.21839299909852206,
            0.7812887270253134
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            36.0,
            8.0,
            0.0,
            2.0
          ],
          [
            8.0,
            59.0,
            0.0,
            2.0
          ],
          [
            2.0,
            1.0,
            59.0,
            10.0
          ],
          [
            0.0,
            0.0,
            14.0,
            49.0
          ]
        ]
      },
      "current_regime": 2,
      "current_regime_label": "Stressed / Illiquid",
      "current_regime_probability": 0.9984577388326532,
      "current_regime_probability_display": "99.8%",
      "current_probability_basis": "filtered",
      "historical_probability_basis": "smoothed",
      "current_state_is_transition": false,
      "state_probabilities": [
        {
          "id": 0,
          "label": "Calm / Liquid",
          "probability": 9.639983651026922e-18,
          "probability_display": "<0.1%",
          "basis": "filtered"
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "probability": 0.00018251885507725144,
          "probability_display": "<0.1%",
          "basis": "filtered"
        },
        {
          "id": 2,
          "label": "Stressed / Illiquid",
          "probability": 0.9984577388326532,
          "probability_display": "99.8%",
          "basis": "filtered"
        },
        {
          "id": 3,
          "label": "Jump / Tail Shock",
          "probability": 0.0013597423122694247,
          "probability_display": "0.1%",
          "basis": "filtered"
        }
      ],
      "jump_risk": {
        "current_probability": 0.19969516700960613,
        "current_score": 0.5525756401451052,
        "current_flag": false,
        "jump_threshold_score": 2.5,
        "method": "robust_residual_and_return_jump_overlay",
        "model_definition": "jump_score_feature_overlay"
      },
      "model_selection": {
        "chosen": 4,
        "criterion": "bic_with_min_state_support",
        "bic": 11816.571505445525,
        "loglik": -5380.604997035677,
        "n_params": 191,
        "bic_delta_vs_next_best": 165.00843268413882,
        "candidates": [
          {
            "k": 2,
            "valid": true,
            "reason": "ok",
            "bic": 12503.496694478257,
            "loglik": -6000.340238508633,
            "n_params": 91,
            "converged": true,
            "iterations": 11,
            "best_seed": 42,
            "seed_runs": [
              {
                "seed": 42,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 12503.496694478257,
                "loglik": -6000.340238508633,
                "n_params": 91,
                "converged": true,
                "iterations": 11
              },
              {
                "seed": 1337,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 12503.496694888183,
                "loglik": -6000.340238713596,
                "n_params": 91,
                "converged": true,
                "iterations": 11
              },
              {
                "seed": 2027,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 12503.496698115167,
                "loglik": -6000.3402403270875,
                "n_params": 91,
                "converged": true,
                "iterations": 11
              }
            ]
          },
          {
            "k": 3,
            "valid": true,
            "reason": "ok",
            "bic": 11981.579938129664,
            "loglik": -5604.008263325607,
            "n_params": 140,
            "converged": true,
            "iterations": 24,
            "best_seed": 42,
            "seed_runs": [
              {
                "seed": 42,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 11981.579938129664,
                "loglik": -5604.008263325607,
                "n_params": 140,
                "converged": true,
                "iterations": 24
              },
              {
                "seed": 1337,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 11981.57994334027,
                "loglik": -5604.00826593091,
                "n_params": 140,
                "converged": true,
                "iterations": 21
              },
              {
                "seed": 2027,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 11981.57994103151,
                "loglik": -5604.00826477653,
                "n_params": 140,
                "converged": true,
                "iterations": 22
              }
            ]
          },
          {
            "k": 4,
            "valid": true,
            "reason": "ok",
            "bic": 11816.571505445525,
            "loglik": -5380.604997035677,
            "n_params": 191,
            "converged": true,
            "iterations": 28,
            "best_seed": 42,
            "seed_runs": [
              {
                "seed": 42,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 11816.571505445525,
                "loglik": -5380.604997035677,
                "n_params": 191,
                "converged": true,
                "iterations": 28
              },
              {
                "seed": 1337,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 11816.571618982804,
                "loglik": -5380.605053804316,
                "n_params": 191,
                "converged": true,
                "iterations": 28
              },
              {
                "seed": 2027,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 11816.571591982169,
                "loglik": -5380.605040303999,
                "n_params": 191,
                "converged": true,
                "iterations": 29
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
              "bic": 11816.571505445525,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 4,
              "bic": 11816.571618982804,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 4,
              "bic": 11816.571591982169,
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
                "2": 6757.1966092301545,
                "3": 6634.928185360642,
                "4": 6529.31897877415
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
                "2": 9741.311671319603,
                "3": 9259.144008107347,
                "4": 9149.842559500365
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
                "2": 12503.496694478257,
                "3": 11981.579952324388,
                "4": 11816.57168619361
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
        "bic_delta_vs_next_best": 165.00843268413882,
        "state_count_interpretation": "251 observations allowed the current rule to test up to 4 states; BIC preferred 4 with a 165.01 improvement versus the next best valid state count.",
        "parameter_count": {
          "formula": "k^2 - 1 + 2*k*d",
          "n_parameters": 191,
          "observations_per_parameter": 1.3141361256544504,
          "parameter_pressure_label": "parameter_heavy"
        },
        "state_occupancy": {
          "min_effective_days_required": 7.529999999999999,
          "min_effective_days_observed": 46.32251111210608,
          "passes": true,
          "states": [
            {
              "id": 0,
              "label": "Calm / Liquid",
              "effective_days": 46.32251111210608,
              "pct_time": 0.1845518371000242,
              "passes_min_support": true
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "effective_days": 68.47955342688465,
              "pct_time": 0.27282690608320576,
              "passes_min_support": true
            },
            {
              "id": 2,
              "label": "Stressed / Illiquid",
              "effective_days": 72.88237205237004,
              "pct_time": 0.2903680161449006,
              "passes_min_support": true
            },
            {
              "id": 3,
              "label": "Jump / Tail Shock",
              "effective_days": 63.31556340863925,
              "pct_time": 0.2522532406718695,
              "passes_min_support": true
            }
          ]
        },
        "transition_diagnostics": {
          "self_transition_probabilities": [
            0.7798457607833011,
            0.8512755375887204,
            0.8211900815699401,
            0.7812887270253134
          ],
          "expected_duration_days": [
            4.542270017411272,
            6.723843433601532,
            5.592530933294633,
            4.572238030527758
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
              "bic": 11816.571505445525,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 4,
              "bic": 11816.571618982804,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 4,
              "bic": 11816.571591982169,
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
                "2": 6757.1966092301545,
                "3": 6634.928185360642,
                "4": 6529.31897877415
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
                "2": 9741.311671319603,
                "3": 9259.144008107347,
                "4": 9149.842559500365
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
                "2": 12503.496694478257,
                "3": 11981.579952324388,
                "4": 11816.57168619361
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
            "risk_score": 0.01573057144961522,
            "jump_probability": 0.1803339116380829,
            "jump_rate": 0.00010114260672673877,
            "rolling_vol_10d": 0.010186033340106515,
            "downside_vol_10d": 0.005026593711083678,
            "drawdown_21d": 0.011908119019798992,
            "amihud_stress": 0.09693563436345307,
            "spread_rel": 27.021717648873654,
            "spread_ticks": 4.335356150804627,
            "log_notional": 15.778040634126913,
            "log_trade_count": 5.406004795625246
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "risk_score": 0.26737060272618335,
            "jump_probability": 0.2235469297231818,
            "jump_rate": 0.043742724927105854,
            "rolling_vol_10d": 0.016083095264823877,
            "downside_vol_10d": 0.007866560006466097,
            "drawdown_21d": 0.02221525841305102,
            "amihud_stress": 0.163079097984146,
            "spread_rel": 26.62298934318184,
            "spread_ticks": 3.302283345197291,
            "log_notional": 16.000966753833357,
            "log_trade_count": 5.561989432665824
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "risk_score": 0.37970521969892884,
            "jump_probability": 0.1994900893748884,
            "jump_rate": 0.013714347688367432,
            "rolling_vol_10d": 0.017530270761234014,
            "downside_vol_10d": 0.00882185767400303,
            "drawdown_21d": 0.023070569624913637,
            "amihud_stress": 0.08693123265375194,
            "spread_rel": 34.516568757379375,
            "spread_ticks": 4.301264220839396,
            "log_notional": 15.946851806693969,
            "log_trade_count": 5.585281083086917
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "risk_score": 1.0,
            "jump_probability": 0.347081883753662,
            "jump_rate": 0.17373766841680838,
            "rolling_vol_10d": 0.025620924731100014,
            "downside_vol_10d": 0.014736363943419813,
            "drawdown_21d": 0.06163173899724627,
            "amihud_stress": 0.23135969825875027,
            "spread_rel": 39.211772931443754,
            "spread_ticks": 4.5909910046584965,
            "log_notional": 16.00671528966338,
            "log_trade_count": 5.6368889384391805
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
          "trade_date": "2026-05-11",
          "state": 2,
          "probabilities": [
            8.650968503629963e-38,
            1.563489902338839e-12,
            0.875937227096799,
            0.12406277290163761
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            4.465345999725096e-37,
            1.2070159889600012e-11,
            0.9651466679919146,
            0.03485333199601518
          ],
          "jump_probability": 0.14579041554409533,
          "jump_score": 0.7126030449320552
        },
        {
          "trade_date": "2026-05-12",
          "state": 3,
          "probabilities": [
            3.0629200746739264e-43,
            2.9543772562380023e-12,
            0.28988568026601086,
            0.7101143197310348
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            2.6161234793924794e-42,
            3.774170865499793e-11,
            0.665301222067074,
            0.3346987778951843
          ],
          "jump_probability": 0.18537036615022057,
          "jump_score": 0.9627149826260918
        },
        {
          "trade_date": "2026-05-13",
          "state": 3,
          "probabilities": [
            3.7487814669185014e-41,
            4.066918601122919e-09,
            0.05049901136419277,
            0.9495009845688885
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            3.8644063336091197e-38,
            5.888556667171938e-06,
            0.01394837412392196,
            0.9860457373194108
          ],
          "jump_probability": 0.2622429413111345,
          "jump_score": 1.350571086434105
        },
        {
          "trade_date": "2026-05-14",
          "state": 2,
          "probabilities": [
            2.6412619212723202e-27,
            2.372127998541085e-11,
            0.9998987292737874,
            0.00010127070249123139
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            3.2924573493285574e-24,
            4.308241134598167e-08,
            0.9996319605831295,
            0.0003679963344591898
          ],
          "jump_probability": 0.1142240477823509,
          "jump_score": 0.46886765917884665
        },
        {
          "trade_date": "2026-05-15",
          "state": 2,
          "probabilities": [
            1.3921870647932608e-23,
            5.008567587123849e-08,
            0.9983097880045576,
            0.0016901619097665387
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            4.4326620895874986e-23,
            2.3851702464119685e-07,
            0.9997004610276429,
            0.00029930045533248576
          ],
          "jump_probability": 0.15987845533409586,
          "jump_score": 0.8072759086850066
        },
        {
          "trade_date": "2026-05-18",
          "state": 3,
          "probabilities": [
            2.9698882700832984e-36,
            8.953279325082639e-10,
            0.009191143015656704,
            0.9908088560890154
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            6.979636239594922e-35,
            3.1408517203687775e-08,
            0.008891358135443587,
            0.9911086104560393
          ],
          "jump_probability": 0.2363305173016958,
          "jump_score": 1.2300836878197032
        },
        {
          "trade_date": "2026-05-19",
          "state": 3,
          "probabilities": [
            6.630682434365497e-32,
            1.7827676065073007e-08,
            0.2453515028720136,
            0.7546484793003104
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            5.531460288726098e-31,
            2.224302965676209e-07,
            0.6497109862552651,
            0.3502887913144384
          ],
          "jump_probability": 0.17986631316264068,
          "jump_score": 0.9306491396505062
        },
        {
          "trade_date": "2026-05-20",
          "state": 3,
          "probabilities": [
            1.1932453504570219e-36,
            4.8854776833831665e-08,
            2.718424555620021e-06,
            0.9999972327206677
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            2.1383058906764487e-35,
            1.2863318367041647e-06,
            1.5507222465793975e-05,
            0.9999832064456976
          ],
          "jump_probability": 0.236708993217459,
          "jump_score": 1.2319062202124778
        },
        {
          "trade_date": "2026-05-21",
          "state": 3,
          "probabilities": [
            1.4758254677873188e-44,
            1.4791917197657097e-07,
            4.1991893169964303e-10,
            0.9999998516609091
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            7.321697592735371e-44,
            1.5281565276101362e-07,
            1.1137599908715911e-10,
            0.9999998470729713
          ],
          "jump_probability": 0.33219152590202095,
          "jump_score": 1.6427915398482427
        },
        {
          "trade_date": "2026-05-22",
          "state": 2,
          "probabilities": [
            9.639983651026922e-18,
            0.00018251885507725144,
            0.9984577388326532,
            0.0013597423122694247
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            9.639983651026922e-18,
            0.00018251885507725144,
            0.9984577388326532,
            0.0013597423122694247
          ],
          "jump_probability": 0.12433130351304691,
          "jump_score": 0.5525756401451052
        }
      ]
    }
  },
  "theme": {
    "badges": {
      "liq_section": {
        "text": "Liquidity score: 67.9 — Weak",
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
    "liq_subtitle": "Liquidity screens weak for the stock’s size, and today’s volume is below the recent average.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Returns are ahead of peers, with the stock up 0.8% over one month while peers are down 6.2%.",
    "perf_insight": "Performance is strong relative to comparison groups. Recent price performance is stronger than the main comparison groups, so the tape has a firmer return backdrop than peers. Recent flow does not show a clear deterioration from the monthly baseline.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Sector factors are the main current driver, pointing to a broader market read-through in the tape.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly sector-driven, accounting for about 48.4% of price changes. Other influences are market 38.9%, and company-specific 12.6%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 38.9%, sector 48.4%, and company-specific 12.6%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has shifted from market-driven to company-driven over Mar to May."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 38.9%, sector 48.4%, and company-specific 12.6%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "That matters because 48.4% of the current move is tied to sector factors, while today’s average volume is 41.1% below the one-month average. The backdrop is supportive, but trading remains thinner than the recent norm.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: sector factors account for 48.4% of recent price moves.",
      "Monthly change: the pattern has become more balanced by May after a more market-led setup in April."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "The market looks weak for its size, but current trading conditions appear orderly rather than dislocated.",
    "regime_badge_text": "Stressed / Illiquid",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on May 22, 2025 to May 22, 2026 (242 trading days • 151,814 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on the displayed order book.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate displayed depth broadly matches the stronger monthly liquidity read.",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The displayed book looks broadly balanced, with bid depth at 0.83x of ask depth and a 3-tick spread. That suggests immediate liquidity is steadier than the weaker six-month peer standing.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 28.2% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Immediate execution conditions look broadly balanced.",
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
    "intraday_insight": "The displayed book is broadly orderly, with bid depth at 0.83x of ask depth and a 3-tick spread. That matters because near-term access looks usable even though structural liquidity screens below peers.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Current trading is being shaped more by liquidity and sector factors than by short activity.",
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
    "exec_subtitle": "Trading access screens below peers, while the current book still looks broadly orderly.",
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
        "value": "67.9/100",
        "sub": "Peer median 79.9 (-12.0 pts)",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "HK$8.6M",
        "sub": "Peer median HK$27.3M",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "0.35%",
        "sub": "4.14 ticks; peers 0.28%",
        "interp": {
          "text": "Wider",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "6M liquidity is weak: score 67.9 vs peer median 79.9 (-12.0 pts). 1D average volume down -41.1% from 1M. Recent flow does not show a clear deterioration from the monthly baseline.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "120.150",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "0.25%",
        "note": "3.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.83x",
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
        "text": "Estimated impact ~-0.56% with 100.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-4.52% with 66.5% fill.",
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
        "value": "68",
        "suffix": "/100",
        "bar_pct": 68,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Rank 827/2571",
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
        "value": "0.35",
        "suffix": "%",
        "bar_pct": 3,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "0.35% • 4.14 ticks vs peers 0.28%",
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
        "value": "8.6M",
        "value_prefix": "HK$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-red-400",
        "color_bar": "bg-red-500",
        "subtext": "Peer median HK$27.3M",
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
        "value": "48.4",
        "suffix": "sector",
        "bar_pct": 48,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 38.9% • Company 12.6%",
        "interpretation": {
          "text": "Sector",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is weak relative to peers, with a six-month liquidity score of 67.9 compared with a peer median of 79.9. That leaves trading access starting from a weaker base for a company of this size.",
      "Recent flow is thinner than the monthly average, with one-day average volume down 41.1% from one month. That matters because lower daily activity can make access less reliable even without a broader break in conditions.",
      "The current tape is orderly rather than dislocated, with bid depth at 0.83x of ask depth and a 3-tick spread, while the stock is up 0.8% over one month compared with peers down 6.2%. That matters because relative performance is supportive, but immediacy still looks only moderate."
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
      "overall": "6M liquidity is weak: score 67.9 vs peer median 79.9 (-12.0 pts). 1D average volume down -41.1% from 1M. Recent flow does not show a clear deterioration from the monthly baseline.",
      "strengths": [
        "6M score 67.9 vs peer median 79.9 (-12.0 pts)."
      ],
      "concerns": [
        "1D average volume down -41.1% from 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: -12.0 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is 12.8%, better than sector and peers, but worse than market, which shows price performance is mixed across comparison groups.",
        "vs_market": "Worse than market: 12.8% vs market 15.0%.",
        "vs_sector": "Better than sector: 12.8% vs sector -10.0%.",
        "vs_peers": "Better than peers: 12.8% vs peers -18.5%."
      },
      "adv": {
        "insight": "ADV is HK$8.6M, better than market, but worse than sector and peers, which shows trading size is uneven across comparison groups.",
        "vs_market": "Better than market: HK$8.6M vs market HK$211.0K.",
        "vs_sector": "Worse than sector: HK$8.6M vs sector HK$30.2M.",
        "vs_peers": "Worse than peers: HK$8.6M vs peers HK$27.3M."
      },
      "spread": {
        "insight": "Spread is 0.35%, better than market, but worse than sector and peers, which shows execution cost is mixed across comparison groups.",
        "vs_market": "Better than market: 0.35% vs market 2.77%.",
        "vs_sector": "Worse than sector: 0.35% vs sector 0.21%.",
        "vs_peers": "Worse than peers: 0.35% vs peers 0.28%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.00%, worse than market, sector, and peers, which shows a lighter free-float turnover profile than comparable names.",
        "vs_market": "Worse than market: 0.00% vs market 0.08%.",
        "vs_sector": "Worse than sector: 0.00% vs sector 0.30%.",
        "vs_peers": "Worse than peers: 0.00% vs peers 0.40%."
      },
      "volatility": {
        "insight": "Volatility is 33.92%, better than market, which suggests day-to-day price swings are more contained than comparable names.",
        "vs_market": "Better than market: 33.92% vs market 60.32%.",
        "vs_sector": "In line with sector: 33.92% vs sector 35.57%.",
        "vs_peers": "In line with peers: 33.92% vs peers 34.69%."
      },
      "trades": {
        "insight": "Trades is 271, better than market, but worse than sector and peers, which shows trading frequency is mixed across comparison groups.",
        "vs_market": "Better than market: 271 vs market 19.",
        "vs_sector": "Worse than sector: 271 vs sector 1191.",
        "vs_peers": "Worse than peers: 271 vs peers 1029."
      },
      "amihud": {
        "insight": "Price impact is 1.38e-09, better than market, but worse than sector and peers, which shows price impact is mixed across comparison groups.",
        "vs_market": "Better than market: 1.38e-09 vs market 4.76e-08.",
        "vs_sector": "Worse than sector: 1.38e-09 vs sector 4.23e-10.",
        "vs_peers": "Worse than peers: 1.38e-09 vs peers 5.79e-10."
      }
    },
    "performance": {
      "overall": "Recent returns are stronger than peers, but the liquidity read is mixed rather than fully supportive. The stock rose 0.8% over one month while peers fell 6.2%, yet the six-month liquidity score is 67.9 compared with a peer median of 79.9 and one-day average volume is 41.1% below the one-month average. That matters because the move is happening in a name that already screens weaker than peers on liquidity, with sector factors accounting for 48.4% of current trading.",
      "conclusion": "The move looks more sector-linked than company-specific, with relative outperformance but only partial confirmation from liquidity."
    },
    "drivers": {
      "overall": "Sector moves are the main force in the stock right now, with sector factors accounting for 48.4% of recent price action. That matters because the tape is being shaped more by the industry backdrop than by company-specific news, which fits with the stock outperforming peers over the past month.",
      "beta": "The current read is mixed rather than fully settled because 1D average volume is 41.1% below the 1M average. Lower activity can make the day-to-day driver mix less durable even when sector influence is leading.",
      "rolling_change": "The monthly picture is more balanced now. March was more mixed, April was mostly market-driven, and May has moved to a more even split across company, sector, and market factors."
    },
    "regime": {
      "overall": "The active backdrop matters because liquidity is already weak for the stock's size, with a 6M score of 67.9 compared with a peer median of 79.9, so a stressed state leaves less cushion when trading conditions tighten.",
      "current": "The stock is currently in a stressed, illiquid state, and recent average volume is 41.1% below the 1M average, which keeps activity thinner than the recent baseline.",
      "transitions": "This state looks more persistent than fleeting, with a typical run length of about 5.6 days, although the signals are mixed rather than one-way.",
      "trading_implications": "This state looks more persistent, with a typical run length of about 5.6 days."
    },
    "execution": {
      "overall": "Displayed liquidity looks balanced overall because the spread is 3 ticks and bid depth is close to ask depth at 0.83x. That matters because the screen does not point to acute stress in immediate execution conditions.",
      "concern": "The main watchpoint is that the buy side is thinner than the sell side, with bid depth at 0.83x of ask depth. That matters because liquidity could feel less even if selling pressure builds, especially with 1D average volume down 41.1% from the 1M average.",
      "peer_context": "The book is more supportive than the broader liquidity profile suggests, even though the six month liquidity score of 67.9 sits 12.0 points below the peer median of 79.9. That matters because the current screen does not fully echo the weaker peer-relative standing."
    },
    "trader_composition": {
      "overall": "By trade count and value, flow looks mainly institution-like.",
      "retail_heavy": "By trade count and value, flow leans institution-like: institution-like trades are 37.8% of count and 50.7% of value, compared with retail-like at 30.9% of count and 16.7% of value.",
      "institutional_gap": "The institutional lead is clearer in value than in count. That gap matters because trade value is doing more of the work than trade frequency in shaping the overall flow read.",
      "peer_comparison": "The mix stands out for stronger institution-like value share than retail-like value share. That matters because the stock’s trading base appears more supported by larger-value participation relative to a more retail-skewed profile."
    },
    "price_moving": {
      "overall": "Price-moving trades account fo% of total trades. The cleaner read comes from the count and value split, which leans institution-like overall. That matters because the direction of participation is still visible even with some noise in the tape. The main asymmetry is between clearer institution-like value share and the portion of trades that remain unclear. That leaves the signal constructive, but not fully clean.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity does not appear to be the main issue in the tape. The clearer signals are weaker structural liquidity for the stock’s size, with a 6M liquidity score of 67.9 compared with a peer median of 79.9, while the stock still delivered a 1M return of +0.8% compared with peers at -6.2%, which points away from short pressure as the defining feature.",
      "level": "N/A",
      "correlation": "N/A",
      "trend": "There is no clear sign that short activity is changing the picture near term. Recent average volume is down 41.1% from the 1M average, but displayed depth remains broadly balanced at 0.83x bid to ask with a 3 tick spread, so the current setup looks more like generally weak liquidity than a rising short-driven dislocation.",
      "peaks": "N/A"
    },
    "intraday": {
      "overall": "Session split is open 0.5%, continuous 89.0%, and close 5.1%. Current trading concentration score is 0.197.",
      "hhi_interpretation": "The low concentration score points to trading being spread across the session rather than packed into a few moments. That matters because access looks more repeatable during market hours.",
      "best_times": "The continuous session is the clearest source of liquidity, with 89.0% of activity compared with 0.5% at the open and 5.1% at the close. That makes the middle of the day the most reliable part of the session for observed flow.",
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
        "2378",
        "376",
        "1828",
        "82318",
        "945",
        "1508",
        "6963",
        "6060",
        "966"
      ],
      "scores": [
        67.87242318164138,
        79.77440684558537,
        76.93504472967717,
        58.92648774795799,
        59.50991831971996,
        79.96888370283936,
        86.7755737067289,
        94.71022948269156,
        95.91598599766627
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
        8630745.0,
        24483975.4,
        11247428.0,
        4634686.981070053,
        3587050.0,
        30156600.0,
        49337585.0,
        133765207.5,
        199305288.68
      ],
      "total": 2571
    },
    "market_comparison": {
      "sector_name": "Insurance",
      "sector_count": 21,
      "market_count": 2571,
      "company": {
        "volatility": 0.33916495668027413,
        "adv": 8630745.0,
        "spread_pct": 0.0034695532331077495,
        "turnover_ratio": 2.8318565607037357e-05,
        "amihud": 1.3828644341540456e-09,
        "trades": 271.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.75822812756525,
          "median": 0.6031638752731745,
          "min": 0.0,
          "max": 33.691646467757096,
          "p5": 0.22550745371131659,
          "p95": 1.63682605116363,
          "count": 2571
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 55728659.478669554,
          "median": 210975.0,
          "min": 0.0,
          "max": 11918065125.0,
          "p5": 0.0,
          "p95": 220259932.29,
          "count": 2571
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.04207446141121854,
          "median": 0.027695784679656173,
          "min": 0.0005771856643019467,
          "max": 0.586235634471959,
          "p5": 0.0014208584315453484,
          "p95": 0.1324396532286795,
          "count": 2571
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0035373519647117313,
          "median": 0.0008301989288898599,
          "min": 0.0,
          "max": 0.18523236964248901,
          "p5": 0.0,
          "p95": 0.01457506378368512,
          "count": 2555
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 6.114115465324687e-07,
          "median": 4.764775689033665e-08,
          "min": 0.0,
          "max": 2.184280144806465e-05,
          "p5": 5.243088147276305e-11,
          "p95": 3.143788841813537e-06,
          "count": 2571
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1017.7306495527032,
          "median": 19.0,
          "min": 0.0,
          "max": 79385.5,
          "p5": 0.0,
          "p95": 5533.25,
          "count": 2571
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.4315190064202189,
          "median": 0.3557006248134922,
          "min": 0.21844048650518122,
          "max": 1.968484818579439,
          "p5": 0.22826696421155068,
          "p95": 0.6098940062111264,
          "count": 21
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 395633931.9010032,
          "median": 30156600.0,
          "min": 0.0,
          "max": 2277587334.95,
          "p5": 27000.0,
          "p95": 2133859266.3250003,
          "count": 21
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.008508185857922724,
          "median": 0.002149718430856517,
          "min": 0.000675890048809352,
          "max": 0.052379174494585255,
          "p5": 0.0008483486664256693,
          "p95": 0.03625207608907069,
          "count": 21
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0036545330583630077,
          "median": 0.002980167291234769,
          "min": 0.0,
          "max": 0.009771684565041131,
          "p5": 3.0845843780971854e-07,
          "p95": 0.009404131840219713,
          "count": 21
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 2.811933185913324e-08,
          "median": 4.2320166367483765e-10,
          "min": 4.883409595552578e-12,
          "max": 2.1603719112949397e-07,
          "p5": 6.865674918277967e-12,
          "p95": 1.4097085128208605e-07,
          "count": 21
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 4953.380952380952,
          "median": 1191.0,
          "min": 0.0,
          "max": 17315.0,
          "p5": 2.0,
          "p95": 16392.5,
          "count": 21
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 57064727.69513376,
          "median": 27320287.7,
          "min": 3587050.0,
          "max": 199305288.68,
          "p5": 3953722.9433745183,
          "p95": 176366260.26699996,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 2578.4375,
          "median": 1029.0,
          "min": 33.0,
          "max": 8512.0,
          "p5": 43.15,
          "p95": 7893.549999999999,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.3577681702087466,
          "median": 0.34690058195360723,
          "min": 0.21844048650518122,
          "max": 0.6098940062111264,
          "p5": 0.22187975370241053,
          "p95": 0.5421817857014499,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.003256892299740872,
          "median": 0.00275985846234272,
          "min": 0.0011371279687285637,
          "max": 0.006718332424202004,
          "p5": 0.0012905558195965411,
          "p95": 0.005939555876428244,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 2.503344353259468,
          "median": 1.3526260713573848,
          "min": 1.0760004750029686,
          "max": 6.3194773135302755,
          "p5": 1.1065479920612944,
          "p95": 5.5635578200466425,
          "count": 5
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 9.017777964514821e-10,
          "median": 5.789557112725479e-10,
          "min": 8.17055259482872e-11,
          "max": 2.3920814572436205e-09,
          "p5": 9.038652222811485e-11,
          "p95": 2.307093049425563e-09,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.003722318801866455,
          "median": 0.004007071846044922,
          "min": 7.406220399854591e-06,
          "max": 0.007390818235582105,
          "p5": 9.08281079545301e-06,
          "p95": 0.007280655172138973,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": 0.008438818565400963,
        "market": 0.02086654266861232,
        "sector": -0.023903913558397716,
        "peers": -0.06247086488729148
      },
      {
        "horizon": "3M",
        "stock": 0.031061259706643085,
        "market": 0.029271276062160734,
        "sector": -0.11788138148293426,
        "peers": -0.17549184959233988
      },
      {
        "horizon": "6M",
        "stock": 0.12842304060434317,
        "market": 0.15043005670937237,
        "sector": -0.10017017179734633,
        "peers": -0.18465185595292855
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
      "share_market": 0.38913472981046404,
      "share_sector": 0.4843773200892645,
      "share_idio": 0.12648795010027147,
      "beta_market": 0.5713380867249417,
      "beta_sector": 4.483814424521306,
      "driver_model": {
        "valid": true,
        "model_method": "ols_with_hmm_jump_regimes",
        "regime_method": "hmm_jump_aware",
        "estimation_window_days": 251,
        "reporting_window_days": 63,
        "available_history_days": 251,
        "n_regimes": 4,
        "current_regime": 2,
        "current_regime_label": "Stressed / Illiquid",
        "current_regime_probability": 0.9984577388326532,
        "current_regime_probability_display": "99.8%",
        "current_probability_basis": "filtered",
        "historical_probability_basis": "smoothed",
        "current_driver_mix": {
          "market_share": {
            "median": 0.38913472981046404,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "38.9%",
            "display_range": null,
            "display_text": "38.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 38.9,
            "plain_english": "Market explains about 38.9% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.4843773200892645,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "48.4%",
            "display_range": null,
            "display_text": "48.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 48.4,
            "plain_english": "Sector explains about 48.4% of price moves in the current state."
          },
          "company_share": {
            "median": 0.12648795010027147,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "12.6%",
            "display_range": null,
            "display_text": "12.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 12.6,
            "plain_english": "Company-specific explains about 12.6% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 0.5713380867249417,
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
            "median": -0.5572552410366294,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.56",
            "display_range": null,
            "display_text": "-0.56",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -0.56
          },
          "beta_sector": {
            "median": 4.483814424521306,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "4.48",
            "display_range": null,
            "display_text": "4.48",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Very high",
            "plain_english": "Very high sector link: a 1% sector move has lined up with about a 4.48% stock move in the same direction in this state.",
            "value_num": 4.48
          },
          "beta_market_lag": {
            "median": 3.5008677687846657,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "3.50",
            "display_range": null,
            "display_text": "3.50",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 3.5
          },
          "beta_sector_lag": {
            "median": -1.5485450298293817,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-1.55",
            "display_range": null,
            "display_text": "-1.55",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -1.55
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
            "period_label": "2025-05-09 to 2025-05-30",
            "n_obs": 16,
            "partial_month": true,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4245159322630158,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.5%",
              "display_range": null,
              "display_text": "42.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 42.5,
              "plain_english": "Company-specific explains about 42.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.41608517633152675,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "41.6%",
                "display_range": null,
                "display_text": "41.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
                "kind": "share_pct",
                "value_pct": 41.6,
                "plain_english": "Market explains about 41.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1593988914054574,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "15.9%",
                "display_range": null,
                "display_text": "15.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
                "kind": "share_pct",
                "value_pct": 15.9,
                "plain_english": "Sector explains about 15.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4245159322630158,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "42.5%",
                "display_range": null,
                "display_text": "42.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
                "kind": "share_pct",
                "value_pct": 42.5,
                "plain_english": "Company-specific explains about 42.5% of price moves in the current state."
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
              "median": 0.4794529001562919,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.9%",
              "display_range": null,
              "display_text": "47.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 47.9,
              "plain_english": "Company-specific explains about 47.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.33392984337425474,
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
                "plain_english": "Market explains about 33.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.18661725646945324,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "18.7%",
                "display_range": null,
                "display_text": "18.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 18.7,
                "plain_english": "Sector explains about 18.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4794529001562919,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "47.9%",
                "display_range": null,
                "display_text": "47.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 47.9,
                "plain_english": "Company-specific explains about 47.9% of price moves in the current state."
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
              "median": 0.5004388456767385,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.0%",
              "display_range": null,
              "display_text": "50.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 50.0,
              "plain_english": "Company-specific explains about 50.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.35018628624572556,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "35.0%",
                "display_range": null,
                "display_text": "35.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 35.0,
                "plain_english": "Market explains about 35.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.14937486807753597,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "14.9%",
                "display_range": null,
                "display_text": "14.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 14.9,
                "plain_english": "Sector explains about 14.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5004388456767385,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "50.0%",
                "display_range": null,
                "display_text": "50.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 50.0,
                "plain_english": "Company-specific explains about 50.0% of price moves in the current state."
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
              "median": 0.6494568952859515,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "64.9%",
              "display_range": null,
              "display_text": "64.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 64.9,
              "plain_english": "Company-specific explains about 64.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.30046790305353754,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "30.0%",
                "display_range": null,
                "display_text": "30.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 30.0,
                "plain_english": "Market explains about 30.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.05007520166051088,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "5.0%",
                "display_range": null,
                "display_text": "5.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 5.0,
                "plain_english": "Sector explains about 5.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6494568952859515,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "64.9%",
                "display_range": null,
                "display_text": "64.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 64.9,
                "plain_english": "Company-specific explains about 64.9% of price moves in the current state."
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
              "median": 0.5922380027625286,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "59.2%",
              "display_range": null,
              "display_text": "59.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 59.2,
              "plain_english": "Company-specific explains about 59.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.12549892883993152,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "12.5%",
                "display_range": null,
                "display_text": "12.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 12.5,
                "plain_english": "Market explains about 12.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.28226306839753995,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "28.2%",
                "display_range": null,
                "display_text": "28.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 28.2,
                "plain_english": "Sector explains about 28.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5922380027625286,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "59.2%",
                "display_range": null,
                "display_text": "59.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 59.2,
                "plain_english": "Company-specific explains about 59.2% of price moves in the current state."
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
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4789320174052419,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.9%",
              "display_range": null,
              "display_text": "47.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 47.9,
              "plain_english": "Market explains about 47.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.4789320174052419,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "47.9%",
                "display_range": null,
                "display_text": "47.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 47.9,
                "plain_english": "Market explains about 47.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.13541206513283022,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "13.5%",
                "display_range": null,
                "display_text": "13.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 13.5,
                "plain_english": "Sector explains about 13.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.38565591746192796,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "38.6%",
                "display_range": null,
                "display_text": "38.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 38.6,
                "plain_english": "Company-specific explains about 38.6% of price moves in the current state."
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
              "median": 0.5646027879049075,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.5%",
              "display_range": null,
              "display_text": "56.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 56.5,
              "plain_english": "Market explains about 56.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.5646027879049075,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "56.5%",
                "display_range": null,
                "display_text": "56.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 56.5,
                "plain_english": "Market explains about 56.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.14929996693098943,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "14.9%",
                "display_range": null,
                "display_text": "14.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 14.9,
                "plain_english": "Sector explains about 14.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.28609724516410306,
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
                "plain_english": "Company-specific explains about 28.6% of price moves in the current state."
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
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.6443547956648966,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "64.4%",
              "display_range": null,
              "display_text": "64.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 64.4,
              "plain_english": "Company-specific explains about 64.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.21617621152973657,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "21.6%",
                "display_range": null,
                "display_text": "21.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 21.6,
                "plain_english": "Market explains about 21.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.13946899280536676,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "13.9%",
                "display_range": null,
                "display_text": "13.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 13.9,
                "plain_english": "Sector explains about 13.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6443547956648966,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "64.4%",
                "display_range": null,
                "display_text": "64.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 64.4,
                "plain_english": "Company-specific explains about 64.4% of price moves in the current state."
              }
            },
            "summary": "Dec: Still clearly company-driven."
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
              "median": 0.4789512085996049,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.9%",
              "display_range": null,
              "display_text": "47.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 47.9,
              "plain_english": "Company-specific explains about 47.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.147633073437993,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "14.8%",
                "display_range": null,
                "display_text": "14.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 14.8,
                "plain_english": "Market explains about 14.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.37341571796240214,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "37.3%",
                "display_range": null,
                "display_text": "37.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 37.3,
                "plain_english": "Sector explains about 37.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4789512085996049,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "47.9%",
                "display_range": null,
                "display_text": "47.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 47.9,
                "plain_english": "Company-specific explains about 47.9% of price moves in the current state."
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
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.43708702031748037,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "43.7%",
              "display_range": null,
              "display_text": "43.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 43.7,
              "plain_english": "Market explains about 43.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.43708702031748037,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "43.7%",
                "display_range": null,
                "display_text": "43.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 43.7,
                "plain_english": "Market explains about 43.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2669740629448737,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.7%",
                "display_range": null,
                "display_text": "26.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 26.7,
                "plain_english": "Sector explains about 26.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.2959389167376459,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "29.6%",
                "display_range": null,
                "display_text": "29.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 29.6,
                "plain_english": "Company-specific explains about 29.6% of price moves in the current state."
              }
            },
            "summary": "Feb: More mixed, though market-driven still has the largest share."
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
              "median": 0.3973377497760369,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "39.7%",
              "display_range": null,
              "display_text": "39.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 39.7,
              "plain_english": "Market explains about 39.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3973377497760369,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "39.7%",
                "display_range": null,
                "display_text": "39.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 39.7,
                "plain_english": "Market explains about 39.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3620610601374832,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "36.2%",
                "display_range": null,
                "display_text": "36.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 36.2,
                "plain_english": "Sector explains about 36.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.24060119008647984,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "24.1%",
                "display_range": null,
                "display_text": "24.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 24.1,
                "plain_english": "Company-specific explains about 24.1% of price moves in the current state."
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
              "median": 0.49626801893513955,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "49.6%",
              "display_range": null,
              "display_text": "49.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 49.6,
              "plain_english": "Market explains about 49.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.49626801893513955,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "49.6%",
                "display_range": null,
                "display_text": "49.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 49.6,
                "plain_english": "Market explains about 49.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2447280962911579,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "24.5%",
                "display_range": null,
                "display_text": "24.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 24.5,
                "plain_english": "Sector explains about 24.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.25900388477370256,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "25.9%",
                "display_range": null,
                "display_text": "25.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 25.9,
                "plain_english": "Company-specific explains about 25.9% of price moves in the current state."
              }
            },
            "summary": "Apr: Mostly market-driven."
          },
          {
            "month_key": "2026-05",
            "month_label": "May 2026",
            "month_short_label": "May",
            "period_label": "2026-05-04 to 2026-05-22",
            "n_obs": 15,
            "partial_month": true,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.36784031838420955,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.8%",
              "display_range": null,
              "display_text": "36.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 36.8,
              "plain_english": "Company-specific explains about 36.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2773969845775809,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.7%",
                "display_range": null,
                "display_text": "27.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 27.7,
                "plain_english": "Market explains about 27.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3547626970382096,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "35.5%",
                "display_range": null,
                "display_text": "35.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 35.5,
                "plain_english": "Sector explains about 35.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.36784031838420955,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "36.8%",
                "display_range": null,
                "display_text": "36.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 36.8,
                "plain_english": "Company-specific explains about 36.8% of price moves in the current state."
              }
            },
            "summary": "May: Much more balanced across company, sector, and market factors."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "pct_time": 0.1845518371000242,
            "expected_duration_days": 4.542270017411272,
            "current_probability": 9.639983651026922e-18,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 46.32251111210608,
            "volatility": {
              "median": 0.0078088952523777,
              "low": 0.0078088952523777,
              "high": 0.0078088952523777
            },
            "volatility_label": "Calm / Liquid",
            "jump_probability": 0.1803339116380829,
            "jump_rate": 0.00010114260672673877,
            "risk_score": 0.01573057144961522,
            "metrics": {
              "rolling_vol_10d": 0.010186033340106515,
              "downside_vol_10d": 0.005026593711083678,
              "drawdown_21d": 0.011908119019798992,
              "amihud_stress": 0.09693563436345307,
              "spread_rel": 27.021717648873654,
              "spread_ticks": 4.335356150804627,
              "log_notional": 15.778040634126913,
              "log_trade_count": 5.406004795625246
            }
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "pct_time": 0.27282690608320576,
            "expected_duration_days": 6.723843433601532,
            "current_probability": 0.00018251885507725144,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 68.47955342688465,
            "volatility": {
              "median": 0.01713360953942907,
              "low": 0.01713360953942907,
              "high": 0.01713360953942907
            },
            "volatility_label": "Normal / Active",
            "jump_probability": 0.2235469297231818,
            "jump_rate": 0.043742724927105854,
            "risk_score": 0.26737060272618335,
            "metrics": {
              "rolling_vol_10d": 0.016083095264823877,
              "downside_vol_10d": 0.007866560006466097,
              "drawdown_21d": 0.02221525841305102,
              "amihud_stress": 0.163079097984146,
              "spread_rel": 26.62298934318184,
              "spread_ticks": 3.302283345197291,
              "log_notional": 16.000966753833357,
              "log_trade_count": 5.561989432665824
            }
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "pct_time": 0.2903680161449006,
            "expected_duration_days": 5.592530933294633,
            "current_probability": 0.9984577388326532,
            "current_probability_display": "99.8%",
            "current_probability_basis": "filtered",
            "n_days_effective": 72.88237205237004,
            "volatility": {
              "median": 0.010130784659521027,
              "low": 0.010130784659521027,
              "high": 0.010130784659521027
            },
            "volatility_label": "Stressed / Illiquid",
            "jump_probability": 0.1994900893748884,
            "jump_rate": 0.013714347688367432,
            "risk_score": 0.37970521969892884,
            "metrics": {
              "rolling_vol_10d": 0.017530270761234014,
              "downside_vol_10d": 0.00882185767400303,
              "drawdown_21d": 0.023070569624913637,
              "amihud_stress": 0.08693123265375194,
              "spread_rel": 34.516568757379375,
              "spread_ticks": 4.301264220839396,
              "log_notional": 15.946851806693969,
              "log_trade_count": 5.585281083086917
            }
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "pct_time": 0.2522532406718695,
            "expected_duration_days": 4.572238030527758,
            "current_probability": 0.0013597423122694247,
            "current_probability_display": "0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 63.31556340863925,
            "volatility": {
              "median": 0.02971495914931679,
              "low": 0.02971495914931679,
              "high": 0.02971495914931679
            },
            "volatility_label": "Jump / Tail Shock",
            "jump_probability": 0.347081883753662,
            "jump_rate": 0.17373766841680838,
            "risk_score": 1.0,
            "metrics": {
              "rolling_vol_10d": 0.025620924731100014,
              "downside_vol_10d": 0.014736363943419813,
              "drawdown_21d": 0.06163173899724627,
              "amihud_stress": 0.23135969825875027,
              "spread_rel": 39.211772931443754,
              "spread_ticks": 4.5909910046584965,
              "log_notional": 16.00671528966338,
              "log_trade_count": 5.6368889384391805
            }
          }
        ],
        "transitions": {
          "mean": [
            [
              0.7798457607833011,
              0.17646363487453798,
              0.00021874042533710048,
              0.0434718639168237
            ],
            [
              0.11950376532495194,
              0.8512755375887204,
              0.00015577726271813708,
              0.029064919823609505
            ],
            [
              0.02804838435957624,
              0.013812960959255835,
              0.8211900815699401,
              0.13694857311122788
            ],
            [
              0.0001577602659467674,
              0.0001605136102178921,
              0.21839299909852206,
              0.7812887270253134
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              36.0,
              8.0,
              0.0,
              2.0
            ],
            [
              8.0,
              59.0,
              0.0,
              2.0
            ],
            [
              2.0,
              1.0,
              59.0,
              10.0
            ],
            [
              0.0,
              0.0,
              14.0,
              49.0
            ]
          ]
        },
        "current_state_is_transition": false,
        "state_probabilities": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "probability": 9.639983651026922e-18,
            "probability_display": "<0.1%",
            "basis": "filtered"
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "probability": 0.00018251885507725144,
            "probability_display": "<0.1%",
            "basis": "filtered"
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "probability": 0.9984577388326532,
            "probability_display": "99.8%",
            "basis": "filtered"
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "probability": 0.0013597423122694247,
            "probability_display": "0.1%",
            "basis": "filtered"
          }
        ],
        "jump_risk": {
          "current_probability": 0.19969516700960613,
          "current_score": 0.5525756401451052,
          "current_flag": false,
          "jump_threshold_score": 2.5,
          "method": "robust_residual_and_return_jump_overlay",
          "model_definition": "jump_score_feature_overlay"
        },
        "model_selection": {
          "chosen": 4,
          "criterion": "bic_with_min_state_support",
          "bic": 11816.571505445525,
          "loglik": -5380.604997035677,
          "n_params": 191,
          "bic_delta_vs_next_best": 165.00843268413882,
          "candidates": [
            {
              "k": 2,
              "valid": true,
              "reason": "ok",
              "bic": 12503.496694478257,
              "loglik": -6000.340238508633,
              "n_params": 91,
              "converged": true,
              "iterations": 11,
              "best_seed": 42,
              "seed_runs": [
                {
                  "seed": 42,
                  "k": 2,
                  "valid": true,
                  "reason": "ok",
                  "bic": 12503.496694478257,
                  "loglik": -6000.340238508633,
                  "n_params": 91,
                  "converged": true,
                  "iterations": 11
                },
                {
                  "seed": 1337,
                  "k": 2,
                  "valid": true,
                  "reason": "ok",
                  "bic": 12503.496694888183,
                  "loglik": -6000.340238713596,
                  "n_params": 91,
                  "converged": true,
                  "iterations": 11
                },
                {
                  "seed": 2027,
                  "k": 2,
                  "valid": true,
                  "reason": "ok",
                  "bic": 12503.496698115167,
                  "loglik": -6000.3402403270875,
                  "n_params": 91,
                  "converged": true,
                  "iterations": 11
                }
              ]
            },
            {
              "k": 3,
              "valid": true,
              "reason": "ok",
              "bic": 11981.579938129664,
              "loglik": -5604.008263325607,
              "n_params": 140,
              "converged": true,
              "iterations": 24,
              "best_seed": 42,
              "seed_runs": [
                {
                  "seed": 42,
                  "k": 3,
                  "valid": true,
                  "reason": "ok",
                  "bic": 11981.579938129664,
                  "loglik": -5604.008263325607,
                  "n_params": 140,
                  "converged": true,
                  "iterations": 24
                },
                {
                  "seed": 1337,
                  "k": 3,
                  "valid": true,
                  "reason": "ok",
                  "bic": 11981.57994334027,
                  "loglik": -5604.00826593091,
                  "n_params": 140,
                  "converged": true,
                  "iterations": 21
                },
                {
                  "seed": 2027,
                  "k": 3,
                  "valid": true,
                  "reason": "ok",
                  "bic": 11981.57994103151,
                  "loglik": -5604.00826477653,
                  "n_params": 140,
                  "converged": true,
                  "iterations": 22
                }
              ]
            },
            {
              "k": 4,
              "valid": true,
              "reason": "ok",
              "bic": 11816.571505445525,
              "loglik": -5380.604997035677,
              "n_params": 191,
              "converged": true,
              "iterations": 28,
              "best_seed": 42,
              "seed_runs": [
                {
                  "seed": 42,
                  "k": 4,
                  "valid": true,
                  "reason": "ok",
                  "bic": 11816.571505445525,
                  "loglik": -5380.604997035677,
                  "n_params": 191,
                  "converged": true,
                  "iterations": 28
                },
                {
                  "seed": 1337,
                  "k": 4,
                  "valid": true,
                  "reason": "ok",
                  "bic": 11816.571618982804,
                  "loglik": -5380.605053804316,
                  "n_params": 191,
                  "converged": true,
                  "iterations": 28
                },
                {
                  "seed": 2027,
                  "k": 4,
                  "valid": true,
                  "reason": "ok",
                  "bic": 11816.571591982169,
                  "loglik": -5380.605040303999,
                  "n_params": 191,
                  "converged": true,
                  "iterations": 29
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
                "bic": 11816.571505445525,
                "valid": true,
                "reason": null
              },
              {
                "seed": 1337,
                "selected_states": 4,
                "bic": 11816.571618982804,
                "valid": true,
                "reason": null
              },
              {
                "seed": 2027,
                "selected_states": 4,
                "bic": 11816.571591982169,
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
                  "2": 6757.1966092301545,
                  "3": 6634.928185360642,
                  "4": 6529.31897877415
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
                  "2": 9741.311671319603,
                  "3": 9259.144008107347,
                  "4": 9149.842559500365
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
                  "2": 12503.496694478257,
                  "3": 11981.579952324388,
                  "4": 11816.57168619361
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
          "bic_delta_vs_next_best": 165.00843268413882,
          "state_count_interpretation": "251 observations allowed the current rule to test up to 4 states; BIC preferred 4 with a 165.01 improvement versus the next best valid state count.",
          "parameter_count": {
            "formula": "k^2 - 1 + 2*k*d",
            "n_parameters": 191,
            "observations_per_parameter": 1.3141361256544504,
            "parameter_pressure_label": "parameter_heavy"
          },
          "state_occupancy": {
            "min_effective_days_required": 7.529999999999999,
            "min_effective_days_observed": 46.32251111210608,
            "passes": true,
            "states": [
              {
                "id": 0,
                "label": "Calm / Liquid",
                "effective_days": 46.32251111210608,
                "pct_time": 0.1845518371000242,
                "passes_min_support": true
              },
              {
                "id": 1,
                "label": "Normal / Active",
                "effective_days": 68.47955342688465,
                "pct_time": 0.27282690608320576,
                "passes_min_support": true
              },
              {
                "id": 2,
                "label": "Stressed / Illiquid",
                "effective_days": 72.88237205237004,
                "pct_time": 0.2903680161449006,
                "passes_min_support": true
              },
              {
                "id": 3,
                "label": "Jump / Tail Shock",
                "effective_days": 63.31556340863925,
                "pct_time": 0.2522532406718695,
                "passes_min_support": true
              }
            ]
          },
          "transition_diagnostics": {
            "self_transition_probabilities": [
              0.7798457607833011,
              0.8512755375887204,
              0.8211900815699401,
              0.7812887270253134
            ],
            "expected_duration_days": [
              4.542270017411272,
              6.723843433601532,
              5.592530933294633,
              4.572238030527758
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
                "bic": 11816.571505445525,
                "valid": true,
                "reason": null
              },
              {
                "seed": 1337,
                "selected_states": 4,
                "bic": 11816.571618982804,
                "valid": true,
                "reason": null
              },
              {
                "seed": 2027,
                "selected_states": 4,
                "bic": 11816.571591982169,
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
                  "2": 6757.1966092301545,
                  "3": 6634.928185360642,
                  "4": 6529.31897877415
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
                  "2": 9741.311671319603,
                  "3": 9259.144008107347,
                  "4": 9149.842559500365
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
                  "2": 12503.496694478257,
                  "3": 11981.579952324388,
                  "4": 11816.57168619361
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
              "risk_score": 0.01573057144961522,
              "jump_probability": 0.1803339116380829,
              "jump_rate": 0.00010114260672673877,
              "rolling_vol_10d": 0.010186033340106515,
              "downside_vol_10d": 0.005026593711083678,
              "drawdown_21d": 0.011908119019798992,
              "amihud_stress": 0.09693563436345307,
              "spread_rel": 27.021717648873654,
              "spread_ticks": 4.335356150804627,
              "log_notional": 15.778040634126913,
              "log_trade_count": 5.406004795625246
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "risk_score": 0.26737060272618335,
              "jump_probability": 0.2235469297231818,
              "jump_rate": 0.043742724927105854,
              "rolling_vol_10d": 0.016083095264823877,
              "downside_vol_10d": 0.007866560006466097,
              "drawdown_21d": 0.02221525841305102,
              "amihud_stress": 0.163079097984146,
              "spread_rel": 26.62298934318184,
              "spread_ticks": 3.302283345197291,
              "log_notional": 16.000966753833357,
              "log_trade_count": 5.561989432665824
            },
            {
              "id": 2,
              "label": "Stressed / Illiquid",
              "risk_score": 0.37970521969892884,
              "jump_probability": 0.1994900893748884,
              "jump_rate": 0.013714347688367432,
              "rolling_vol_10d": 0.017530270761234014,
              "downside_vol_10d": 0.00882185767400303,
              "drawdown_21d": 0.023070569624913637,
              "amihud_stress": 0.08693123265375194,
              "spread_rel": 34.516568757379375,
              "spread_ticks": 4.301264220839396,
              "log_notional": 15.946851806693969,
              "log_trade_count": 5.585281083086917
            },
            {
              "id": 3,
              "label": "Jump / Tail Shock",
              "risk_score": 1.0,
              "jump_probability": 0.347081883753662,
              "jump_rate": 0.17373766841680838,
              "rolling_vol_10d": 0.025620924731100014,
              "downside_vol_10d": 0.014736363943419813,
              "drawdown_21d": 0.06163173899724627,
              "amihud_stress": 0.23135969825875027,
              "spread_rel": 39.211772931443754,
              "spread_ticks": 4.5909910046584965,
              "log_notional": 16.00671528966338,
              "log_trade_count": 5.6368889384391805
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
            "trade_date": "2026-05-11",
            "state": 2,
            "probabilities": [
              8.650968503629963e-38,
              1.563489902338839e-12,
              0.875937227096799,
              0.12406277290163761
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              4.465345999725096e-37,
              1.2070159889600012e-11,
              0.9651466679919146,
              0.03485333199601518
            ],
            "jump_probability": 0.14579041554409533,
            "jump_score": 0.7126030449320552
          },
          {
            "trade_date": "2026-05-12",
            "state": 3,
            "probabilities": [
              3.0629200746739264e-43,
              2.9543772562380023e-12,
              0.28988568026601086,
              0.7101143197310348
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              2.6161234793924794e-42,
              3.774170865499793e-11,
              0.665301222067074,
              0.3346987778951843
            ],
            "jump_probability": 0.18537036615022057,
            "jump_score": 0.9627149826260918
          },
          {
            "trade_date": "2026-05-13",
            "state": 3,
            "probabilities": [
              3.7487814669185014e-41,
              4.066918601122919e-09,
              0.05049901136419277,
              0.9495009845688885
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              3.8644063336091197e-38,
              5.888556667171938e-06,
              0.01394837412392196,
              0.9860457373194108
            ],
            "jump_probability": 0.2622429413111345,
            "jump_score": 1.350571086434105
          },
          {
            "trade_date": "2026-05-14",
            "state": 2,
            "probabilities": [
              2.6412619212723202e-27,
              2.372127998541085e-11,
              0.9998987292737874,
              0.00010127070249123139
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              3.2924573493285574e-24,
              4.308241134598167e-08,
              0.9996319605831295,
              0.0003679963344591898
            ],
            "jump_probability": 0.1142240477823509,
            "jump_score": 0.46886765917884665
          },
          {
            "trade_date": "2026-05-15",
            "state": 2,
            "probabilities": [
              1.3921870647932608e-23,
              5.008567587123849e-08,
              0.9983097880045576,
              0.0016901619097665387
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              4.4326620895874986e-23,
              2.3851702464119685e-07,
              0.9997004610276429,
              0.00029930045533248576
            ],
            "jump_probability": 0.15987845533409586,
            "jump_score": 0.8072759086850066
          },
          {
            "trade_date": "2026-05-18",
            "state": 3,
            "probabilities": [
              2.9698882700832984e-36,
              8.953279325082639e-10,
              0.009191143015656704,
              0.9908088560890154
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              6.979636239594922e-35,
              3.1408517203687775e-08,
              0.008891358135443587,
              0.9911086104560393
            ],
            "jump_probability": 0.2363305173016958,
            "jump_score": 1.2300836878197032
          },
          {
            "trade_date": "2026-05-19",
            "state": 3,
            "probabilities": [
              6.630682434365497e-32,
              1.7827676065073007e-08,
              0.2453515028720136,
              0.7546484793003104
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              5.531460288726098e-31,
              2.224302965676209e-07,
              0.6497109862552651,
              0.3502887913144384
            ],
            "jump_probability": 0.17986631316264068,
            "jump_score": 0.9306491396505062
          },
          {
            "trade_date": "2026-05-20",
            "state": 3,
            "probabilities": [
              1.1932453504570219e-36,
              4.8854776833831665e-08,
              2.718424555620021e-06,
              0.9999972327206677
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              2.1383058906764487e-35,
              1.2863318367041647e-06,
              1.5507222465793975e-05,
              0.9999832064456976
            ],
            "jump_probability": 0.236708993217459,
            "jump_score": 1.2319062202124778
          },
          {
            "trade_date": "2026-05-21",
            "state": 3,
            "probabilities": [
              1.4758254677873188e-44,
              1.4791917197657097e-07,
              4.1991893169964303e-10,
              0.9999998516609091
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              7.321697592735371e-44,
              1.5281565276101362e-07,
              1.1137599908715911e-10,
              0.9999998470729713
            ],
            "jump_probability": 0.33219152590202095,
            "jump_score": 1.6427915398482427
          },
          {
            "trade_date": "2026-05-22",
            "state": 2,
            "probabilities": [
              9.639983651026922e-18,
              0.00018251885507725144,
              0.9984577388326532,
              0.0013597423122694247
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              9.639983651026922e-18,
              0.00018251885507725144,
              0.9984577388326532,
              0.0013597423122694247
            ],
            "jump_probability": 0.12433130351304691,
            "jump_score": 0.5525756401451052
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
          "sector_link_display": "4.48",
          "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.57% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 4.48% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "-0.56",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "Stressed / Illiquid",
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "driver_share_pct": 48.4,
          "driver_share_display": "48.4%",
          "confidence_label": "High, limited history",
          "confidence_pct": 99.8,
          "confidence_display": "99.8%",
          "probability_basis": "filtered",
          "display_confidence_pct": null,
          "confidence_note": "Based on 251 trading days relative to the 252-day target.",
          "history_days": 251,
          "history_limited": true,
          "volatility_label": "Stressed / Illiquid",
          "jump_risk_label": "Contained",
          "jump_risk_probability": 20.0,
          "jump_risk_score": 0.55,
          "jump_risk_note": "Jump risk is contained based on recent residual and return shocks.",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.8211900815699401,
          "effective_days": 72.9,
          "persistence_note": "This state looks more persistent, with a typical run length of about 5.6 days.",
          "expected_duration_days": 5.6
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
          "period_label": "2025-05-09 to 2025-05-30",
          "n_obs": 16,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "May: More mixed, though company-driven still has the largest share.",
          "share_market": 0.41608517633152675,
          "share_sector": 0.1593988914054574,
          "share_company": 0.4245159322630158,
          "share_market_display": "41.6%",
          "share_sector_display": "15.9%",
          "share_company_display": "42.5%",
          "dominant_share_display": "42.5%"
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
          "share_market": 0.33392984337425474,
          "share_sector": 0.18661725646945324,
          "share_company": 0.4794529001562919,
          "share_market_display": "33.4%",
          "share_sector_display": "18.7%",
          "share_company_display": "47.9%",
          "dominant_share_display": "47.9%"
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
          "share_market": 0.35018628624572556,
          "share_sector": 0.14937486807753597,
          "share_company": 0.5004388456767385,
          "share_market_display": "35.0%",
          "share_sector_display": "14.9%",
          "share_company_display": "50.0%",
          "dominant_share_display": "50.0%"
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
          "share_market": 0.30046790305353754,
          "share_sector": 0.05007520166051088,
          "share_company": 0.6494568952859515,
          "share_market_display": "30.0%",
          "share_sector_display": "5.0%",
          "share_company_display": "64.9%",
          "dominant_share_display": "64.9%"
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
          "share_market": 0.12549892883993152,
          "share_sector": 0.28226306839753995,
          "share_company": 0.5922380027625286,
          "share_market_display": "12.5%",
          "share_sector_display": "28.2%",
          "share_company_display": "59.2%",
          "dominant_share_display": "59.2%"
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
          "share_market": 0.4789320174052419,
          "share_sector": 0.13541206513283022,
          "share_company": 0.38565591746192796,
          "share_market_display": "47.9%",
          "share_sector_display": "13.5%",
          "share_company_display": "38.6%",
          "dominant_share_display": "47.9%"
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
          "share_market": 0.5646027879049075,
          "share_sector": 0.14929996693098943,
          "share_company": 0.28609724516410306,
          "share_market_display": "56.5%",
          "share_sector_display": "14.9%",
          "share_company_display": "28.6%",
          "dominant_share_display": "56.5%"
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
          "summary": "Dec: Still clearly company-driven.",
          "share_market": 0.21617621152973657,
          "share_sector": 0.13946899280536676,
          "share_company": 0.6443547956648966,
          "share_market_display": "21.6%",
          "share_sector_display": "13.9%",
          "share_company_display": "64.4%",
          "dominant_share_display": "64.4%"
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
          "share_market": 0.147633073437993,
          "share_sector": 0.37341571796240214,
          "share_company": 0.4789512085996049,
          "share_market_display": "14.8%",
          "share_sector_display": "37.3%",
          "share_company_display": "47.9%",
          "dominant_share_display": "47.9%"
        },
        {
          "month_key": "2026-02",
          "month_label": "February 2026",
          "month_short_label": "Feb",
          "period_label": "2026-02-02 to 2026-02-27",
          "n_obs": 17,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Feb: More mixed, though market-driven still has the largest share.",
          "share_market": 0.43708702031748037,
          "share_sector": 0.2669740629448737,
          "share_company": 0.2959389167376459,
          "share_market_display": "43.7%",
          "share_sector_display": "26.7%",
          "share_company_display": "29.6%",
          "dominant_share_display": "43.7%"
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
          "share_market": 0.3973377497760369,
          "share_sector": 0.3620610601374832,
          "share_company": 0.24060119008647984,
          "share_market_display": "39.7%",
          "share_sector_display": "36.2%",
          "share_company_display": "24.1%",
          "dominant_share_display": "39.7%"
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
          "summary": "Apr: Mostly market-driven.",
          "share_market": 0.49626801893513955,
          "share_sector": 0.2447280962911579,
          "share_company": 0.25900388477370256,
          "share_market_display": "49.6%",
          "share_sector_display": "24.5%",
          "share_company_display": "25.9%",
          "dominant_share_display": "49.6%"
        },
        {
          "month_key": "2026-05",
          "month_label": "May 2026",
          "month_short_label": "May",
          "period_label": "2026-05-04 to 2026-05-22",
          "n_obs": 15,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "May: Much more balanced across company, sector, and market factors.",
          "share_market": 0.2773969845775809,
          "share_sector": 0.3547626970382096,
          "share_company": 0.36784031838420955,
          "share_market_display": "27.7%",
          "share_sector_display": "35.5%",
          "share_company_display": "36.8%",
          "dominant_share_display": "36.8%"
        }
      ],
      "regime": {
        "valid": true,
        "regime_method": "hmm_jump_aware",
        "n_regimes": 4,
        "current_regime_label": "Stressed / Illiquid",
        "current_regime_probability": 0.9984577388326532,
        "labels": [
          "Calm / Liquid",
          "Normal / Active",
          "Stressed / Illiquid",
          "Jump / Tail Shock"
        ],
        "pct_time": [
          0.1845518371000242,
          0.27282690608320576,
          0.2903680161449006,
          0.2522532406718695
        ],
        "current_regime": 2,
        "regimes": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "pct_time": 0.1845518371000242,
            "expected_duration_days": 4.542270017411272,
            "current_probability": 9.639983651026922e-18,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 46.32251111210608,
            "volatility": {
              "median": 0.0078088952523777,
              "low": 0.0078088952523777,
              "high": 0.0078088952523777
            },
            "volatility_label": "Calm / Liquid",
            "jump_probability": 0.1803339116380829,
            "jump_rate": 0.00010114260672673877,
            "risk_score": 0.01573057144961522,
            "metrics": {
              "rolling_vol_10d": 0.010186033340106515,
              "downside_vol_10d": 0.005026593711083678,
              "drawdown_21d": 0.011908119019798992,
              "amihud_stress": 0.09693563436345307,
              "spread_rel": 27.021717648873654,
              "spread_ticks": 4.335356150804627,
              "log_notional": 15.778040634126913,
              "log_trade_count": 5.406004795625246
            }
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "pct_time": 0.27282690608320576,
            "expected_duration_days": 6.723843433601532,
            "current_probability": 0.00018251885507725144,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 68.47955342688465,
            "volatility": {
              "median": 0.01713360953942907,
              "low": 0.01713360953942907,
              "high": 0.01713360953942907
            },
            "volatility_label": "Normal / Active",
            "jump_probability": 0.2235469297231818,
            "jump_rate": 0.043742724927105854,
            "risk_score": 0.26737060272618335,
            "metrics": {
              "rolling_vol_10d": 0.016083095264823877,
              "downside_vol_10d": 0.007866560006466097,
              "drawdown_21d": 0.02221525841305102,
              "amihud_stress": 0.163079097984146,
              "spread_rel": 26.62298934318184,
              "spread_ticks": 3.302283345197291,
              "log_notional": 16.000966753833357,
              "log_trade_count": 5.561989432665824
            }
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "pct_time": 0.2903680161449006,
            "expected_duration_days": 5.592530933294633,
            "current_probability": 0.9984577388326532,
            "current_probability_display": "99.8%",
            "current_probability_basis": "filtered",
            "n_days_effective": 72.88237205237004,
            "volatility": {
              "median": 0.010130784659521027,
              "low": 0.010130784659521027,
              "high": 0.010130784659521027
            },
            "volatility_label": "Stressed / Illiquid",
            "jump_probability": 0.1994900893748884,
            "jump_rate": 0.013714347688367432,
            "risk_score": 0.37970521969892884,
            "metrics": {
              "rolling_vol_10d": 0.017530270761234014,
              "downside_vol_10d": 0.00882185767400303,
              "drawdown_21d": 0.023070569624913637,
              "amihud_stress": 0.08693123265375194,
              "spread_rel": 34.516568757379375,
              "spread_ticks": 4.301264220839396,
              "log_notional": 15.946851806693969,
              "log_trade_count": 5.585281083086917
            }
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "pct_time": 0.2522532406718695,
            "expected_duration_days": 4.572238030527758,
            "current_probability": 0.0013597423122694247,
            "current_probability_display": "0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 63.31556340863925,
            "volatility": {
              "median": 0.02971495914931679,
              "low": 0.02971495914931679,
              "high": 0.02971495914931679
            },
            "volatility_label": "Jump / Tail Shock",
            "jump_probability": 0.347081883753662,
            "jump_rate": 0.17373766841680838,
            "risk_score": 1.0,
            "metrics": {
              "rolling_vol_10d": 0.025620924731100014,
              "downside_vol_10d": 0.014736363943419813,
              "drawdown_21d": 0.06163173899724627,
              "amihud_stress": 0.23135969825875027,
              "spread_rel": 39.211772931443754,
              "spread_ticks": 4.5909910046584965,
              "log_notional": 16.00671528966338,
              "log_trade_count": 5.6368889384391805
            }
          }
        ],
        "transitions": [
          [
            0.7798457607833011,
            0.17646363487453798,
            0.00021874042533710048,
            0.0434718639168237
          ],
          [
            0.11950376532495194,
            0.8512755375887204,
            0.00015577726271813708,
            0.029064919823609505
          ],
          [
            0.02804838435957624,
            0.013812960959255835,
            0.8211900815699401,
            0.13694857311122788
          ],
          [
            0.0001577602659467674,
            0.0001605136102178921,
            0.21839299909852206,
            0.7812887270253134
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 120.0,
          "quantity": 50.0,
          "value": 6000.0
        },
        {
          "level": 2,
          "price": 119.9,
          "quantity": 450.0,
          "value": 53955.0
        },
        {
          "level": 3,
          "price": 119.8,
          "quantity": 4000.0,
          "value": 479200.0
        },
        {
          "level": 4,
          "price": 119.7,
          "quantity": 450.0,
          "value": 53865.0
        },
        {
          "level": 5,
          "price": 119.6,
          "quantity": 600.0,
          "value": 71760.0
        },
        {
          "level": 6,
          "price": 119.5,
          "quantity": 450.0,
          "value": 53775.0
        },
        {
          "level": 7,
          "price": 119.4,
          "quantity": 450.0,
          "value": 53730.0
        },
        {
          "level": 8,
          "price": 119.3,
          "quantity": 250.0,
          "value": 29825.0
        },
        {
          "level": 9,
          "price": 119.2,
          "quantity": 150.0,
          "value": 17880.0
        },
        {
          "level": 10,
          "price": 119.1,
          "quantity": 150.0,
          "value": 17865.0
        },
        {
          "level": 11,
          "price": 118.9,
          "quantity": 250.0,
          "value": 29725.0
        },
        {
          "level": 12,
          "price": 118.8,
          "quantity": 150.0,
          "value": 17820.0
        },
        {
          "level": 13,
          "price": 118.6,
          "quantity": 250.0,
          "value": 29650.0
        },
        {
          "level": 14,
          "price": 118.4,
          "quantity": 150.0,
          "value": 17760.0
        },
        {
          "level": 15,
          "price": 118.3,
          "quantity": 250.0,
          "value": 29575.0
        },
        {
          "level": 16,
          "price": 118.0,
          "quantity": 100.0,
          "value": 11800.0
        },
        {
          "level": 17,
          "price": 117.6,
          "quantity": 100.0,
          "value": 11760.0
        },
        {
          "level": 18,
          "price": 117.3,
          "quantity": 100.0,
          "value": 11730.0
        },
        {
          "level": 19,
          "price": 117.0,
          "quantity": 500.0,
          "value": 58500.0
        },
        {
          "level": 20,
          "price": 116.0,
          "quantity": 300.0,
          "value": 34800.0
        },
        {
          "level": 21,
          "price": 115.0,
          "quantity": 450.0,
          "value": 51750.0
        },
        {
          "level": 22,
          "price": 112.3,
          "quantity": 200.0,
          "value": 22460.0
        },
        {
          "level": 23,
          "price": 111.8,
          "quantity": 100.0,
          "value": 11180.0
        },
        {
          "level": 24,
          "price": 111.0,
          "quantity": 200.0,
          "value": 22200.0
        },
        {
          "level": 25,
          "price": 110.0,
          "quantity": 600.0,
          "value": 66000.0
        },
        {
          "level": 26,
          "price": 108.0,
          "quantity": 100.0,
          "value": 10800.0
        },
        {
          "level": 27,
          "price": 107.8,
          "quantity": 200.0,
          "value": 21560.0
        },
        {
          "level": 28,
          "price": 105.5,
          "quantity": 700.0,
          "value": 73850.0
        },
        {
          "level": 29,
          "price": 105.0,
          "quantity": 1400.0,
          "value": 147000.0
        },
        {
          "level": 30,
          "price": 104.8,
          "quantity": 500.0,
          "value": 52400.0
        },
        {
          "level": 31,
          "price": 104.0,
          "quantity": 500.0,
          "value": 52000.0
        },
        {
          "level": 32,
          "price": 103.2,
          "quantity": 400.0,
          "value": 41280.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 120.3,
          "quantity": 350.0,
          "value": 42105.0
        },
        {
          "level": 2,
          "price": 120.5,
          "quantity": 3000.0,
          "value": 361500.0
        },
        {
          "level": 3,
          "price": 120.7,
          "quantity": 300.0,
          "value": 36210.0
        },
        {
          "level": 4,
          "price": 120.8,
          "quantity": 1050.0,
          "value": 126840.0
        },
        {
          "level": 5,
          "price": 120.9,
          "quantity": 1000.0,
          "value": 120900.0
        },
        {
          "level": 6,
          "price": 121.0,
          "quantity": 150.0,
          "value": 18150.0
        },
        {
          "level": 7,
          "price": 121.1,
          "quantity": 100.0,
          "value": 12110.0
        },
        {
          "level": 8,
          "price": 121.2,
          "quantity": 800.0,
          "value": 96960.0
        },
        {
          "level": 9,
          "price": 121.3,
          "quantity": 700.0,
          "value": 84910.0
        },
        {
          "level": 10,
          "price": 121.4,
          "quantity": 250.0,
          "value": 30350.0
        },
        {
          "level": 11,
          "price": 121.5,
          "quantity": 250.0,
          "value": 30375.0
        },
        {
          "level": 12,
          "price": 121.6,
          "quantity": 50.0,
          "value": 6080.0
        },
        {
          "level": 13,
          "price": 121.7,
          "quantity": 350.0,
          "value": 42595.0
        },
        {
          "level": 14,
          "price": 121.8,
          "quantity": 150.0,
          "value": 18270.0
        },
        {
          "level": 15,
          "price": 122.0,
          "quantity": 450.0,
          "value": 54900.0
        },
        {
          "level": 16,
          "price": 122.3,
          "quantity": 100.0,
          "value": 12230.0
        },
        {
          "level": 17,
          "price": 122.6,
          "quantity": 100.0,
          "value": 12260.0
        },
        {
          "level": 18,
          "price": 122.7,
          "quantity": 1300.0,
          "value": 159510.0
        },
        {
          "level": 19,
          "price": 122.9,
          "quantity": 100.0,
          "value": 12290.0
        },
        {
          "level": 20,
          "price": 123.0,
          "quantity": 1200.0,
          "value": 147600.0
        },
        {
          "level": 21,
          "price": 123.2,
          "quantity": 100.0,
          "value": 12320.0
        },
        {
          "level": 22,
          "price": 125.0,
          "quantity": 1950.0,
          "value": 243750.0
        },
        {
          "level": 23,
          "price": 126.8,
          "quantity": 100.0,
          "value": 12680.0
        },
        {
          "level": 24,
          "price": 128.8,
          "quantity": 500.0,
          "value": 64400.00000000001
        },
        {
          "level": 25,
          "price": 129.0,
          "quantity": 300.0,
          "value": 38700.0
        },
        {
          "level": 26,
          "price": 129.5,
          "quantity": 100.0,
          "value": 12950.0
        },
        {
          "level": 27,
          "price": 130.0,
          "quantity": 200.0,
          "value": 26000.0
        },
        {
          "level": 28,
          "price": 131.0,
          "quantity": 50.0,
          "value": 6550.0
        },
        {
          "level": 29,
          "price": 132.0,
          "quantity": 200.0,
          "value": 26400.0
        },
        {
          "level": 30,
          "price": 135.0,
          "quantity": 1000.0,
          "value": 135000.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-05-22 07:59:57.377000000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XHKG",
        "mid_price": 120.15,
        "spread_pct": 0.0024968789013732596,
        "spread_ticks": 3.0,
        "tick_size": 0.1,
        "displayed_levels_per_side": 100,
        "bid_depth_notional_displayed": 1663455.0,
        "ask_depth_notional_displayed": 2004895.0,
        "bid_depth_notional_top10": 1663455.0,
        "ask_depth_notional_top10": 2004895.0,
        "bid_ask_depth_ratio": 0.8297
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 366,
        "history_limited": false,
        "trade_days_used": 242,
        "n_trades_used": 151814,
        "first_trade_date": "2025-05-22",
        "last_trade_date": "2026-05-22",
        "window_label": "May 22, 2025 to May 22, 2026",
        "window_short_label": "May 22, 2025 to May 22, 2026",
        "trade_days_label": "242 trading days",
        "trade_count_label": "151,814 trades",
        "window_detail_label": "242 trading days • 151,814 trades",
        "history_note": "Trade-size percentiles use May 22, 2025 to May 22, 2026 history (242 trading days • 151,814 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 35770.0,
            "impact_pct": -0.001941,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 2.15,
            "pct_of_adv": 0.35
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 55780.5,
            "impact_pct": -0.001991,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 3.35,
            "pct_of_adv": 0.55
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 6815650.72,
            "impact_pct": -0.045185,
            "filled_pct": 24.4,
            "levels_consumed": 32,
            "pct_of_bid_depth": 409.73,
            "pct_of_adv": 67.01
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-05-22",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "16228609",
            "timestamp": "2026-05-22 01:20:28.973000000",
            "local_timestamp": "2026-05-22 09:20:28",
            "posted_price": 120.3,
            "size_shares": 7000.0,
            "notional": 842100.0,
            "impact_pct": -0.003832,
            "filled_pct": 100.0,
            "levels_consumed": 11,
            "pct_of_bid_depth": 50.62,
            "price_vs_mid_pct": 0.125,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "5041118209",
            "timestamp": "2026-05-22 07:55:20.733000000",
            "local_timestamp": "2026-05-22 15:55:20",
            "posted_price": 120.5,
            "size_shares": 3550.0,
            "notional": 427775.0,
            "impact_pct": -0.002785,
            "filled_pct": 100.0,
            "levels_consumed": 3,
            "pct_of_bid_depth": 25.72,
            "price_vs_mid_pct": 0.291,
            "executed_event_count": 0,
            "event_count": 14
          },
          {
            "rank": 3,
            "order_id": "16230401",
            "timestamp": "2026-05-22 01:20:28.973000000",
            "local_timestamp": "2026-05-22 09:20:28",
            "posted_price": 121.9,
            "size_shares": 3500.0,
            "notional": 426650.0,
            "impact_pct": -0.002784,
            "filled_pct": 100.0,
            "levels_consumed": 3,
            "pct_of_bid_depth": 25.65,
            "price_vs_mid_pct": 1.457,
            "executed_event_count": 0,
            "event_count": 1
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-05-22",
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
            "spread_pct": 0.0008309098462817493,
            "spread_ticks": 1.0000000000000853,
            "bid_depth_notional": 1212010.0,
            "ask_depth_notional": 1256970.0,
            "mid_price": 120.35
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.0033112582781457426,
            "spread_ticks": 4.000000000000057,
            "bid_depth_notional": 2025585.0,
            "ask_depth_notional": 1217170.0,
            "mid_price": 120.8
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.000827472072817613,
            "spread_ticks": 1.0000000000000853,
            "bid_depth_notional": 2236015.0,
            "ask_depth_notional": 1327380.0,
            "mid_price": 120.85
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.0016515276630883803,
            "spread_ticks": 2.0000000000000284,
            "bid_depth_notional": 2565530.0,
            "ask_depth_notional": 1340875.0,
            "mid_price": 121.1
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.003300330033003347,
            "spread_ticks": 4.000000000000057,
            "bid_depth_notional": 1226045.0,
            "ask_depth_notional": 1366860.0,
            "mid_price": 121.2
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.002470152326060084,
            "spread_ticks": 2.9999999999999716,
            "bid_depth_notional": 1250230.0,
            "ask_depth_notional": 1318855.0,
            "mid_price": 121.44999999999999
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.004930156121610471,
            "spread_ticks": 5.999999999999943,
            "bid_depth_notional": 2206965.0,
            "ask_depth_notional": 1413430.0,
            "mid_price": 121.7
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.003303055326176643,
            "spread_ticks": 3.9999999999999147,
            "bid_depth_notional": 2312425.0,
            "ask_depth_notional": 1861025.0,
            "mid_price": 121.1
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.003319502074688844,
            "spread_ticks": 4.000000000000057,
            "bid_depth_notional": 1627465.0,
            "ask_depth_notional": 1985395.0,
            "mid_price": 120.5
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.0016638935108153317,
            "spread_ticks": 2.0000000000000284,
            "bid_depth_notional": 1501890.0,
            "ask_depth_notional": 2336815.0,
            "mid_price": 120.19999999999999
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.0024968789013732596,
            "spread_ticks": 2.9999999999999716,
            "bid_depth_notional": 1663455.0,
            "ask_depth_notional": 2004895.0,
            "mid_price": 120.15
          }
        ],
        "summary": {
          "median_spread_pct": 0.0024968789013732596,
          "median_spread_ticks": 2.9999999999999716,
          "median_bid_depth_notional": 1663455.0,
          "median_ask_depth_notional": 1366860.0,
          "tightest_bucket": "10:30",
          "widest_bucket": "13:30",
          "deepest_bid_bucket": "11:00",
          "thinnest_bid_bucket": "09:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 0.5,
      "peers": [
        {
          "ticker": "966",
          "pct": 0.5
        },
        {
          "ticker": "6060",
          "pct": 1.2
        },
        {
          "ticker": "6963",
          "pct": 1.7
        },
        {
          "ticker": "1508",
          "pct": 3.6
        },
        {
          "ticker": "376",
          "pct": 8.2
        },
        {
          "ticker": "1828",
          "pct": 17.6
        },
        {
          "ticker": "82318",
          "pct": 18.1
        },
        {
          "ticker": "945",
          "pct": 26.8
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 488,
          "n_runs": 170,
          "n_trade_days": 1,
          "first_trade_date": "2026-05-22",
          "last_trade_date": "2026-05-22",
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
            "retail_pct": 0.3483606557377049,
            "mixed_pct": 0.19057377049180327,
            "instit_pct": 0.32581967213114754,
            "ambiguous_pct": 0.13524590163934427,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.13524590163934427,
            "retail_qty_pct": 0.20557089491635536,
            "mixed_qty_pct": 0.2647393210979373,
            "instit_qty_pct": 0.39710898164690595,
            "ambiguous_qty_pct": 0.13258080233880137,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.13258080233880137,
            "retail_notional_pct": 0.20520312874027902,
            "mixed_notional_pct": 0.26502279616548435,
            "instit_notional_pct": 0.39720372343981236,
            "ambiguous_notional_pct": 0.1325703516544243,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.1325703516544243
          },
          "run_composition": {
            "retail_pct": 0.47058823529411764,
            "mixed_pct": 0.2235294117647059,
            "instit_pct": 0.1588235294117647,
            "ambiguous_pct": 0.14705882352941177,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.14705882352941177,
            "retail_notional_pct": 0.1575156114146556,
            "mixed_notional_pct": 0.21090378265947957,
            "instit_notional_pct": 0.49326758189040987,
            "unclear_notional_pct": 0.13831302403545503
          },
          "counts": {
            "trades": {
              "retail": 170,
              "mixed": 93,
              "institutional": 159,
              "ambiguous": 66,
              "unobservable": 0,
              "unclear": 66
            },
            "runs": {
              "retail": 80,
              "mixed": 38,
              "institutional": 27,
              "ambiguous": 25,
              "unobservable": 0,
              "unclear": 25
            }
          },
          "confidence": {
            "high": 0.6294117647058823,
            "medium": 0.2235294117647059,
            "low": 0.14705882352941177,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 107,
            "medium": 38,
            "low": 25,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.4487704918032787,
            "medium": 0.17008196721311475,
            "low": 0.38114754098360654,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 219,
            "medium": 83,
            "low": 186,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8817647058823528,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.14705882352941177,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.47058823529411764,
          "dominance_gap": 0.24705882352941175,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 280,
              "UNOBSERVABLE": 143,
              "WALK_BOOK": 65
            },
            "d2_information": {
              "UNOBSERVABLE": 488
            },
            "d3_urgency": {
              "UNOBSERVABLE": 170
            },
            "participant_confidence": {
              "HIGH": 107,
              "MEDIUM": 38,
              "LOW": 25
            }
          },
          "trade_size": {
            "avg": 15238.443237704918,
            "median": 6060.0
          },
          "run_size": {
            "avg": 26786.678235294115,
            "median": 12145.0,
            "avg_length": 1.3176470588235294
          },
          "recent_trades": [
            {
              "trade_id": "488",
              "timestamp": "2026-05-22T07:59:51.761034",
              "price": 120.2,
              "size": 50.0,
              "notional": 6010.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "487",
              "timestamp": "2026-05-22T07:59:51.760405",
              "price": 120.2,
              "size": 50.0,
              "notional": 6010.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47548,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "486",
              "timestamp": "2026-05-22T07:59:43.357173",
              "price": 119.8,
              "size": 100.0,
              "notional": 11980.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47547,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "485",
              "timestamp": "2026-05-22T07:59:42.776714",
              "price": 119.9,
              "size": 50.0,
              "notional": 5995.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47546,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "484",
              "timestamp": "2026-05-22T07:59:42.212901",
              "price": 119.9,
              "size": 200.0,
              "notional": 23980.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47545,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "483",
              "timestamp": "2026-05-22T07:59:42.212901",
              "price": 119.9,
              "size": 50.0,
              "notional": 5995.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47545,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "482",
              "timestamp": "2026-05-22T07:59:42.212901",
              "price": 119.9,
              "size": 50.0,
              "notional": 5995.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47545,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "481",
              "timestamp": "2026-05-22T07:59:42.210716",
              "price": 119.9,
              "size": 50.0,
              "notional": 5995.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47545,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "480",
              "timestamp": "2026-05-22T07:59:37.444597",
              "price": 120.0,
              "size": 50.0,
              "notional": 6000.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47544,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "479",
              "timestamp": "2026-05-22T07:59:16.334556",
              "price": 119.9,
              "size": 100.0,
              "notional": 11990.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47543,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "478",
              "timestamp": "2026-05-22T07:59:15.769716",
              "price": 119.9,
              "size": 200.0,
              "notional": 23980.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47543,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "477",
              "timestamp": "2026-05-22T07:59:07.561097",
              "price": 120.0,
              "size": 50.0,
              "notional": 6000.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47542,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "476",
              "timestamp": "2026-05-22T07:59:07.561097",
              "price": 120.0,
              "size": 50.0,
              "notional": 6000.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47542,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "475",
              "timestamp": "2026-05-22T07:58:50.073447",
              "price": 119.9,
              "size": 50.0,
              "notional": 5995.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47541,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "474",
              "timestamp": "2026-05-22T07:58:49.498511",
              "price": 119.9,
              "size": 150.0,
              "notional": 17985.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47541,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "473",
              "timestamp": "2026-05-22T07:58:39.364303",
              "price": 120.2,
              "size": 50.0,
              "notional": 6010.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47540,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "472",
              "timestamp": "2026-05-22T07:58:39.362733",
              "price": 120.2,
              "size": 50.0,
              "notional": 6010.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47540,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "471",
              "timestamp": "2026-05-22T07:58:20.145823",
              "price": 119.9,
              "size": 100.0,
              "notional": 11990.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47539,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "470",
              "timestamp": "2026-05-22T07:58:00.200736",
              "price": 119.9,
              "size": 50.0,
              "notional": 5995.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47538,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "469",
              "timestamp": "2026-05-22T07:57:59.619128",
              "price": 119.9,
              "size": 50.0,
              "notional": 5995.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47538,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "468",
              "timestamp": "2026-05-22T07:57:50.011625",
              "price": 119.9,
              "size": 50.0,
              "notional": 5995.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47538,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "467",
              "timestamp": "2026-05-22T07:57:23.887857",
              "price": 120.2,
              "size": 50.0,
              "notional": 6010.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47537,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "466",
              "timestamp": "2026-05-22T07:57:23.887214",
              "price": 119.9,
              "size": 50.0,
              "notional": 5995.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47536,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "465",
              "timestamp": "2026-05-22T07:57:23.320380",
              "price": 120.2,
              "size": 50.0,
              "notional": 6010.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47535,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "464",
              "timestamp": "2026-05-22T07:57:01.414950",
              "price": 120.2,
              "size": 50.0,
              "notional": 6010.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47534,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "463",
              "timestamp": "2026-05-22T07:56:52.536804",
              "price": 119.9,
              "size": 250.0,
              "notional": 29975.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47533,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "462",
              "timestamp": "2026-05-22T07:56:51.944814",
              "price": 119.9,
              "size": 50.0,
              "notional": 5995.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47533,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "461",
              "timestamp": "2026-05-22T07:56:16.237442",
              "price": 120.2,
              "size": 50.0,
              "notional": 6010.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47532,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "460",
              "timestamp": "2026-05-22T07:56:16.236766",
              "price": 120.2,
              "size": 50.0,
              "notional": 6010.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "459",
              "timestamp": "2026-05-22T07:55:21.306864",
              "price": 120.2,
              "size": 200.0,
              "notional": 24040.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47531,
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
          "n_trades": 16664,
          "n_runs": 5270,
          "n_trade_days": 21,
          "first_trade_date": "2026-04-23",
          "last_trade_date": "2026-05-22",
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
            "retail_pct": 0.2602016322611618,
            "mixed_pct": 0.16112578012481998,
            "instit_pct": 0.425048007681229,
            "ambiguous_pct": 0.15362457993278925,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.15362457993278925,
            "retail_qty_pct": 0.12743092800944433,
            "mixed_qty_pct": 0.19304569031850655,
            "instit_qty_pct": 0.5545517394375611,
            "ambiguous_qty_pct": 0.12497164223448799,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.12497164223448799,
            "retail_notional_pct": 0.12708601858840823,
            "mixed_notional_pct": 0.19313316992688995,
            "instit_notional_pct": 0.5552009587571802,
            "ambiguous_notional_pct": 0.12457985272752171,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.12457985272752171
          },
          "run_composition": {
            "retail_pct": 0.4815939278937381,
            "mixed_pct": 0.19127134724857686,
            "instit_pct": 0.20113851992409867,
            "ambiguous_pct": 0.12599620493358635,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.12599620493358635,
            "retail_notional_pct": 0.09933970022499884,
            "mixed_notional_pct": 0.15114737027001574,
            "instit_notional_pct": 0.6559987650241005,
            "unclear_notional_pct": 0.09351416448088494
          },
          "counts": {
            "trades": {
              "retail": 4336,
              "mixed": 2685,
              "institutional": 7083,
              "ambiguous": 2560,
              "unobservable": 0,
              "unclear": 2560
            },
            "runs": {
              "retail": 2538,
              "mixed": 1008,
              "institutional": 1060,
              "ambiguous": 664,
              "unobservable": 0,
              "unclear": 664
            }
          },
          "confidence": {
            "high": 0.6827324478178368,
            "medium": 0.19127134724857686,
            "low": 0.12599620493358635,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 3598,
            "medium": 1008,
            "low": 664,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5266442630820931,
            "medium": 0.13964234277484397,
            "low": 0.3337133941430629,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 8776,
            "medium": 2327,
            "low": 5561,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.887201138519924,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.12599620493358635,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.4815939278937381,
          "dominance_gap": 0.2804554079696394,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 9515,
              "UNOBSERVABLE": 4128,
              "WALK_BOOK": 3021
            },
            "d2_information": {
              "UNOBSERVABLE": 16664
            },
            "d3_urgency": {
              "UNOBSERVABLE": 5270
            },
            "participant_confidence": {
              "HIGH": 3598,
              "MEDIUM": 1008,
              "LOW": 664
            }
          },
          "trade_size": {
            "avg": 20023.792540806528,
            "median": 11430.0
          },
          "run_size": {
            "avg": 45195.42137571158,
            "median": 17700.0,
            "avg_length": 1.4648956356736242
          },
          "recent_trades": [
            {
              "trade_id": "488",
              "timestamp": "2026-05-22T07:59:51.761034",
              "price": 120.2,
              "size": 50.0,
              "notional": 6010.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "487",
              "timestamp": "2026-05-22T07:59:51.760405",
              "price": 120.2,
              "size": 50.0,
              "notional": 6010.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47548,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "486",
              "timestamp": "2026-05-22T07:59:43.357173",
              "price": 119.8,
              "size": 100.0,
              "notional": 11980.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47547,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "485",
              "timestamp": "2026-05-22T07:59:42.776714",
              "price": 119.9,
              "size": 50.0,
              "notional": 5995.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47546,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "484",
              "timestamp": "2026-05-22T07:59:42.212901",
              "price": 119.9,
              "size": 200.0,
              "notional": 23980.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47545,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "483",
              "timestamp": "2026-05-22T07:59:42.212901",
              "price": 119.9,
              "size": 50.0,
              "notional": 5995.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47545,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "482",
              "timestamp": "2026-05-22T07:59:42.212901",
              "price": 119.9,
              "size": 50.0,
              "notional": 5995.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47545,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "481",
              "timestamp": "2026-05-22T07:59:42.210716",
              "price": 119.9,
              "size": 50.0,
              "notional": 5995.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47545,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "480",
              "timestamp": "2026-05-22T07:59:37.444597",
              "price": 120.0,
              "size": 50.0,
              "notional": 6000.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47544,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "479",
              "timestamp": "2026-05-22T07:59:16.334556",
              "price": 119.9,
              "size": 100.0,
              "notional": 11990.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47543,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "478",
              "timestamp": "2026-05-22T07:59:15.769716",
              "price": 119.9,
              "size": 200.0,
              "notional": 23980.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47543,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "477",
              "timestamp": "2026-05-22T07:59:07.561097",
              "price": 120.0,
              "size": 50.0,
              "notional": 6000.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47542,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "476",
              "timestamp": "2026-05-22T07:59:07.561097",
              "price": 120.0,
              "size": 50.0,
              "notional": 6000.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47542,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "475",
              "timestamp": "2026-05-22T07:58:50.073447",
              "price": 119.9,
              "size": 50.0,
              "notional": 5995.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47541,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "474",
              "timestamp": "2026-05-22T07:58:49.498511",
              "price": 119.9,
              "size": 150.0,
              "notional": 17985.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47541,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "473",
              "timestamp": "2026-05-22T07:58:39.364303",
              "price": 120.2,
              "size": 50.0,
              "notional": 6010.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47540,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "472",
              "timestamp": "2026-05-22T07:58:39.362733",
              "price": 120.2,
              "size": 50.0,
              "notional": 6010.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47540,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "471",
              "timestamp": "2026-05-22T07:58:20.145823",
              "price": 119.9,
              "size": 100.0,
              "notional": 11990.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47539,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "470",
              "timestamp": "2026-05-22T07:58:00.200736",
              "price": 119.9,
              "size": 50.0,
              "notional": 5995.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47538,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "469",
              "timestamp": "2026-05-22T07:57:59.619128",
              "price": 119.9,
              "size": 50.0,
              "notional": 5995.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47538,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "468",
              "timestamp": "2026-05-22T07:57:50.011625",
              "price": 119.9,
              "size": 50.0,
              "notional": 5995.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47538,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "467",
              "timestamp": "2026-05-22T07:57:23.887857",
              "price": 120.2,
              "size": 50.0,
              "notional": 6010.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47537,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "466",
              "timestamp": "2026-05-22T07:57:23.887214",
              "price": 119.9,
              "size": 50.0,
              "notional": 5995.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47536,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "465",
              "timestamp": "2026-05-22T07:57:23.320380",
              "price": 120.2,
              "size": 50.0,
              "notional": 6010.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47535,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "464",
              "timestamp": "2026-05-22T07:57:01.414950",
              "price": 120.2,
              "size": 50.0,
              "notional": 6010.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47534,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "463",
              "timestamp": "2026-05-22T07:56:52.536804",
              "price": 119.9,
              "size": 250.0,
              "notional": 29975.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47533,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "462",
              "timestamp": "2026-05-22T07:56:51.944814",
              "price": 119.9,
              "size": 50.0,
              "notional": 5995.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47533,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "461",
              "timestamp": "2026-05-22T07:56:16.237442",
              "price": 120.2,
              "size": 50.0,
              "notional": 6010.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47532,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "460",
              "timestamp": "2026-05-22T07:56:16.236766",
              "price": 120.2,
              "size": 50.0,
              "notional": 6010.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "459",
              "timestamp": "2026-05-22T07:55:21.306864",
              "price": 120.2,
              "size": 200.0,
              "notional": 24040.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47531,
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
          "n_trades": 40515,
          "n_runs": 14455,
          "n_trade_days": 63,
          "first_trade_date": "2026-02-16",
          "last_trade_date": "2026-05-22",
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
            "retail_pct": 0.3079600148093299,
            "mixed_pct": 0.15707762557077626,
            "instit_pct": 0.37746513636924595,
            "ambiguous_pct": 0.1574972232506479,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1574972232506479,
            "retail_qty_pct": 0.17031576813745386,
            "mixed_qty_pct": 0.1826263569798819,
            "instit_qty_pct": 0.513748342042174,
            "ambiguous_qty_pct": 0.13330953284049027,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.13330953284049027,
            "retail_notional_pct": 0.16850600011896652,
            "mixed_notional_pct": 0.18268815217108417,
            "instit_notional_pct": 0.5159251111198152,
            "ambiguous_notional_pct": 0.13288073659013414,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.13288073659013414
          },
          "run_composition": {
            "retail_pct": 0.49629885852646144,
            "mixed_pct": 0.20124524386025597,
            "instit_pct": 0.18796264268419233,
            "ambiguous_pct": 0.11449325492909028,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.11449325492909028,
            "retail_notional_pct": 0.13057862614208338,
            "mixed_notional_pct": 0.15269014689786112,
            "instit_notional_pct": 0.6229697657041586,
            "unclear_notional_pct": 0.0937614612558969
          },
          "counts": {
            "trades": {
              "retail": 12477,
              "mixed": 6364,
              "institutional": 15293,
              "ambiguous": 6381,
              "unobservable": 0,
              "unclear": 6381
            },
            "runs": {
              "retail": 7174,
              "mixed": 2909,
              "institutional": 2717,
              "ambiguous": 1655,
              "unobservable": 0,
              "unclear": 1655
            }
          },
          "confidence": {
            "high": 0.6840539605672777,
            "medium": 0.20145278450363197,
            "low": 0.11449325492909028,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 9888,
            "medium": 2912,
            "low": 1655,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5134394668641244,
            "medium": 0.1402690361594471,
            "low": 0.34629149697642847,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 20802,
            "medium": 5683,
            "low": 14030,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8798062953995156,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.11449325492909028,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.49629885852646144,
          "dominance_gap": 0.2950536146662055,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 22302,
              "UNOBSERVABLE": 10793,
              "WALK_BOOK": 7420
            },
            "d2_information": {
              "UNOBSERVABLE": 40515
            },
            "d3_urgency": {
              "UNOBSERVABLE": 14455
            },
            "participant_confidence": {
              "HIGH": 9888,
              "MEDIUM": 2912,
              "LOW": 1655
            }
          },
          "trade_size": {
            "avg": 18188.656369986424,
            "median": 6235.0
          },
          "run_size": {
            "avg": 36286.539223798,
            "median": 11940.0,
            "avg_length": 1.3326184711172604
          },
          "recent_trades": [
            {
              "trade_id": "488",
              "timestamp": "2026-05-22T07:59:51.761034",
              "price": 120.2,
              "size": 50.0,
              "notional": 6010.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "487",
              "timestamp": "2026-05-22T07:59:51.760405",
              "price": 120.2,
              "size": 50.0,
              "notional": 6010.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47548,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "486",
              "timestamp": "2026-05-22T07:59:43.357173",
              "price": 119.8,
              "size": 100.0,
              "notional": 11980.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47547,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "485",
              "timestamp": "2026-05-22T07:59:42.776714",
              "price": 119.9,
              "size": 50.0,
              "notional": 5995.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47546,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "484",
              "timestamp": "2026-05-22T07:59:42.212901",
              "price": 119.9,
              "size": 200.0,
              "notional": 23980.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47545,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "483",
              "timestamp": "2026-05-22T07:59:42.212901",
              "price": 119.9,
              "size": 50.0,
              "notional": 5995.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47545,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "482",
              "timestamp": "2026-05-22T07:59:42.212901",
              "price": 119.9,
              "size": 50.0,
              "notional": 5995.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47545,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "481",
              "timestamp": "2026-05-22T07:59:42.210716",
              "price": 119.9,
              "size": 50.0,
              "notional": 5995.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47545,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "480",
              "timestamp": "2026-05-22T07:59:37.444597",
              "price": 120.0,
              "size": 50.0,
              "notional": 6000.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47544,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "479",
              "timestamp": "2026-05-22T07:59:16.334556",
              "price": 119.9,
              "size": 100.0,
              "notional": 11990.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47543,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "478",
              "timestamp": "2026-05-22T07:59:15.769716",
              "price": 119.9,
              "size": 200.0,
              "notional": 23980.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47543,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "477",
              "timestamp": "2026-05-22T07:59:07.561097",
              "price": 120.0,
              "size": 50.0,
              "notional": 6000.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47542,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "476",
              "timestamp": "2026-05-22T07:59:07.561097",
              "price": 120.0,
              "size": 50.0,
              "notional": 6000.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47542,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "475",
              "timestamp": "2026-05-22T07:58:50.073447",
              "price": 119.9,
              "size": 50.0,
              "notional": 5995.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47541,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "474",
              "timestamp": "2026-05-22T07:58:49.498511",
              "price": 119.9,
              "size": 150.0,
              "notional": 17985.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47541,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "473",
              "timestamp": "2026-05-22T07:58:39.364303",
              "price": 120.2,
              "size": 50.0,
              "notional": 6010.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47540,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "472",
              "timestamp": "2026-05-22T07:58:39.362733",
              "price": 120.2,
              "size": 50.0,
              "notional": 6010.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47540,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "471",
              "timestamp": "2026-05-22T07:58:20.145823",
              "price": 119.9,
              "size": 100.0,
              "notional": 11990.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47539,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "470",
              "timestamp": "2026-05-22T07:58:00.200736",
              "price": 119.9,
              "size": 50.0,
              "notional": 5995.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47538,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "469",
              "timestamp": "2026-05-22T07:57:59.619128",
              "price": 119.9,
              "size": 50.0,
              "notional": 5995.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47538,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "468",
              "timestamp": "2026-05-22T07:57:50.011625",
              "price": 119.9,
              "size": 50.0,
              "notional": 5995.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47538,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "467",
              "timestamp": "2026-05-22T07:57:23.887857",
              "price": 120.2,
              "size": 50.0,
              "notional": 6010.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47537,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "466",
              "timestamp": "2026-05-22T07:57:23.887214",
              "price": 119.9,
              "size": 50.0,
              "notional": 5995.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47536,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "465",
              "timestamp": "2026-05-22T07:57:23.320380",
              "price": 120.2,
              "size": 50.0,
              "notional": 6010.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47535,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "464",
              "timestamp": "2026-05-22T07:57:01.414950",
              "price": 120.2,
              "size": 50.0,
              "notional": 6010.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47534,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "463",
              "timestamp": "2026-05-22T07:56:52.536804",
              "price": 119.9,
              "size": 250.0,
              "notional": 29975.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47533,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "462",
              "timestamp": "2026-05-22T07:56:51.944814",
              "price": 119.9,
              "size": 50.0,
              "notional": 5995.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47533,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "461",
              "timestamp": "2026-05-22T07:56:16.237442",
              "price": 120.2,
              "size": 50.0,
              "notional": 6010.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47532,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "460",
              "timestamp": "2026-05-22T07:56:16.236766",
              "price": 120.2,
              "size": 50.0,
              "notional": 6010.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "459",
              "timestamp": "2026-05-22T07:55:21.306864",
              "price": 120.2,
              "size": 200.0,
              "notional": 24040.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47531,
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
          "n_trades": 85202,
          "n_runs": 29852,
          "n_trade_days": 126,
          "first_trade_date": "2025-11-06",
          "last_trade_date": "2026-05-22",
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
            "retail_pct": 0.30910072533508604,
            "mixed_pct": 0.15740240839416916,
            "instit_pct": 0.3779840848806366,
            "ambiguous_pct": 0.1555127813901082,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1555127813901082,
            "retail_qty_pct": 0.16810721013197574,
            "mixed_qty_pct": 0.1908014157339225,
            "instit_qty_pct": 0.5055395102582014,
            "ambiguous_qty_pct": 0.1355518638759003,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.1355518638759003,
            "retail_notional_pct": 0.1670155962880455,
            "mixed_notional_pct": 0.19095039973971004,
            "instit_notional_pct": 0.506793105445345,
            "ambiguous_notional_pct": 0.13524089852689958,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.13524089852689958
          },
          "run_composition": {
            "retail_pct": 0.4988610478359909,
            "mixed_pct": 0.20521238107999465,
            "instit_pct": 0.18574969851266246,
            "ambiguous_pct": 0.110176872571352,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.110176872571352,
            "retail_notional_pct": 0.12561134664894558,
            "mixed_notional_pct": 0.15889420202489796,
            "instit_notional_pct": 0.6224336787635772,
            "unclear_notional_pct": 0.09306077256257926
          },
          "counts": {
            "trades": {
              "retail": 26336,
              "mixed": 13411,
              "institutional": 32205,
              "ambiguous": 13250,
              "unobservable": 0,
              "unclear": 13250
            },
            "runs": {
              "retail": 14892,
              "mixed": 6126,
              "institutional": 5545,
              "ambiguous": 3289,
              "unobservable": 0,
              "unclear": 3289
            }
          },
          "confidence": {
            "high": 0.6845102505694761,
            "medium": 0.2053128768591719,
            "low": 0.110176872571352,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 20434,
            "medium": 6129,
            "low": 3289,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5096593976667214,
            "medium": 0.13975024060468064,
            "low": 0.3505903617285979,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 43424,
            "medium": 11907,
            "low": 29871,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8793732413238643,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.110176872571352,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.4988610478359909,
          "dominance_gap": 0.2936486667559962,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 46059,
              "UNOBSERVABLE": 23488,
              "WALK_BOOK": 15655
            },
            "d2_information": {
              "UNOBSERVABLE": 85202
            },
            "d3_urgency": {
              "UNOBSERVABLE": 29852
            },
            "participant_confidence": {
              "HIGH": 20434,
              "MEDIUM": 6129,
              "LOW": 3289
            }
          },
          "trade_size": {
            "avg": 17431.034733104854,
            "median": 6409.999999999999
          },
          "run_size": {
            "avg": 34970.98832507035,
            "median": 12160.0,
            "avg_length": 1.331602572691947
          },
          "recent_trades": [
            {
              "trade_id": "488",
              "timestamp": "2026-05-22T07:59:51.761034",
              "price": 120.2,
              "size": 50.0,
              "notional": 6010.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "487",
              "timestamp": "2026-05-22T07:59:51.760405",
              "price": 120.2,
              "size": 50.0,
              "notional": 6010.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47548,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "486",
              "timestamp": "2026-05-22T07:59:43.357173",
              "price": 119.8,
              "size": 100.0,
              "notional": 11980.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47547,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "485",
              "timestamp": "2026-05-22T07:59:42.776714",
              "price": 119.9,
              "size": 50.0,
              "notional": 5995.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47546,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "484",
              "timestamp": "2026-05-22T07:59:42.212901",
              "price": 119.9,
              "size": 200.0,
              "notional": 23980.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47545,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "483",
              "timestamp": "2026-05-22T07:59:42.212901",
              "price": 119.9,
              "size": 50.0,
              "notional": 5995.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47545,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "482",
              "timestamp": "2026-05-22T07:59:42.212901",
              "price": 119.9,
              "size": 50.0,
              "notional": 5995.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47545,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "481",
              "timestamp": "2026-05-22T07:59:42.210716",
              "price": 119.9,
              "size": 50.0,
              "notional": 5995.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47545,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "480",
              "timestamp": "2026-05-22T07:59:37.444597",
              "price": 120.0,
              "size": 50.0,
              "notional": 6000.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47544,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "479",
              "timestamp": "2026-05-22T07:59:16.334556",
              "price": 119.9,
              "size": 100.0,
              "notional": 11990.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47543,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "478",
              "timestamp": "2026-05-22T07:59:15.769716",
              "price": 119.9,
              "size": 200.0,
              "notional": 23980.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47543,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "477",
              "timestamp": "2026-05-22T07:59:07.561097",
              "price": 120.0,
              "size": 50.0,
              "notional": 6000.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47542,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "476",
              "timestamp": "2026-05-22T07:59:07.561097",
              "price": 120.0,
              "size": 50.0,
              "notional": 6000.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47542,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "475",
              "timestamp": "2026-05-22T07:58:50.073447",
              "price": 119.9,
              "size": 50.0,
              "notional": 5995.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47541,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "474",
              "timestamp": "2026-05-22T07:58:49.498511",
              "price": 119.9,
              "size": 150.0,
              "notional": 17985.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47541,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "473",
              "timestamp": "2026-05-22T07:58:39.364303",
              "price": 120.2,
              "size": 50.0,
              "notional": 6010.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47540,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "472",
              "timestamp": "2026-05-22T07:58:39.362733",
              "price": 120.2,
              "size": 50.0,
              "notional": 6010.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47540,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "471",
              "timestamp": "2026-05-22T07:58:20.145823",
              "price": 119.9,
              "size": 100.0,
              "notional": 11990.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47539,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "470",
              "timestamp": "2026-05-22T07:58:00.200736",
              "price": 119.9,
              "size": 50.0,
              "notional": 5995.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47538,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "469",
              "timestamp": "2026-05-22T07:57:59.619128",
              "price": 119.9,
              "size": 50.0,
              "notional": 5995.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47538,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "468",
              "timestamp": "2026-05-22T07:57:50.011625",
              "price": 119.9,
              "size": 50.0,
              "notional": 5995.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47538,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "467",
              "timestamp": "2026-05-22T07:57:23.887857",
              "price": 120.2,
              "size": 50.0,
              "notional": 6010.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47537,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "466",
              "timestamp": "2026-05-22T07:57:23.887214",
              "price": 119.9,
              "size": 50.0,
              "notional": 5995.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47536,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "465",
              "timestamp": "2026-05-22T07:57:23.320380",
              "price": 120.2,
              "size": 50.0,
              "notional": 6010.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47535,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "464",
              "timestamp": "2026-05-22T07:57:01.414950",
              "price": 120.2,
              "size": 50.0,
              "notional": 6010.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47534,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "463",
              "timestamp": "2026-05-22T07:56:52.536804",
              "price": 119.9,
              "size": 250.0,
              "notional": 29975.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47533,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "462",
              "timestamp": "2026-05-22T07:56:51.944814",
              "price": 119.9,
              "size": 50.0,
              "notional": 5995.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47533,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "461",
              "timestamp": "2026-05-22T07:56:16.237442",
              "price": 120.2,
              "size": 50.0,
              "notional": 6010.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47532,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "460",
              "timestamp": "2026-05-22T07:56:16.236766",
              "price": 120.2,
              "size": 50.0,
              "notional": 6010.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "459",
              "timestamp": "2026-05-22T07:55:21.306864",
              "price": 120.2,
              "size": 200.0,
              "notional": 24040.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47531,
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
      "n_trades": 85202,
      "n_runs": 29852,
      "n_trade_days": 126,
      "first_trade_date": "2025-11-06",
      "last_trade_date": "2026-05-22",
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
        "retail_pct": 0.30910072533508604,
        "mixed_pct": 0.15740240839416916,
        "instit_pct": 0.3779840848806366,
        "ambiguous_pct": 0.1555127813901082,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.1555127813901082,
        "retail_qty_pct": 0.16810721013197574,
        "mixed_qty_pct": 0.1908014157339225,
        "instit_qty_pct": 0.5055395102582014,
        "ambiguous_qty_pct": 0.1355518638759003,
        "unobservable_qty_pct": 0.0,
        "unclear_qty_pct": 0.1355518638759003,
        "retail_notional_pct": 0.1670155962880455,
        "mixed_notional_pct": 0.19095039973971004,
        "instit_notional_pct": 0.506793105445345,
        "ambiguous_notional_pct": 0.13524089852689958,
        "unobservable_notional_pct": 0.0,
        "unclear_notional_pct": 0.13524089852689958
      },
      "run_composition": {
        "retail_pct": 0.4988610478359909,
        "mixed_pct": 0.20521238107999465,
        "instit_pct": 0.18574969851266246,
        "ambiguous_pct": 0.110176872571352,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.110176872571352
      },
      "trade_size": {
        "avg": 17431.034733104854,
        "median": 6409.999999999999
      },
      "run_size": {
        "avg": 34970.98832507035,
        "median": 12160.0,
        "avg_length": 1.331602572691947
      },
      "confidence": {
        "high": 0.6845102505694761,
        "medium": 0.2053128768591719,
        "low": 0.110176872571352,
        "na": 0.0
      },
      "confidence_counts": {
        "high": 20434,
        "medium": 6129,
        "low": 3289,
        "na": 0
      },
      "trade_confidence": {
        "high": 0.5096593976667214,
        "medium": 0.13975024060468064,
        "low": 0.3505903617285979,
        "na": 0.0
      },
      "trade_confidence_counts": {
        "high": 43424,
        "medium": 11907,
        "low": 29871,
        "na": 0
      },
      "counts": {
        "trades": {
          "retail": 26336,
          "mixed": 13411,
          "institutional": 32205,
          "ambiguous": 13250,
          "unobservable": 0,
          "unclear": 13250
        },
        "runs": {
          "retail": 14892,
          "mixed": 6126,
          "institutional": 5545,
          "ambiguous": 3289,
          "unobservable": 0,
          "unclear": 3289
        }
      },
      "observability": {
        "avg_feature_coverage": 0.8793732413238643,
        "observable_run_pct": 1.0,
        "ambiguous_run_pct": 0.110176872571352,
        "unobservable_run_pct": 0.0
      },
      "dominant_bucket": "RETAIL",
      "dominant_label": "Retail-led",
      "dominant_share": 0.4988610478359909,
      "dominance_gap": 0.2936486667559962,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2025-12",
            "n_trades": 9038,
            "n_runs": 3506,
            "retail_pct": 0.3425536623146714,
            "mixed_pct": 0.17603452091170613,
            "instit_pct": 0.3426643062624474,
            "ambiguous_pct": 0.13874751051117504,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.13874751051117504,
            "avg_trade_size": 15656.106052223944,
            "avg_run_notional": 28348.424443810614,
            "retail_qty_pct": 0.1733986740931535,
            "mixed_qty_pct": 0.19332771587663272,
            "instit_qty_pct": 0.4888903927460533,
            "ambiguous_qty_pct": 0.1443832172841605,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.1443832172841605,
            "retail_notional_pct": 0.1730004666823531,
            "mixed_notional_pct": 0.19344277636576054,
            "instit_notional_pct": 0.48943550566028193,
            "ambiguous_notional_pct": 0.14412125129160439,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.14412125129160439,
            "run_retail_pct": 0.5382201939532231,
            "run_mixed_pct": 0.2076440387906446,
            "run_instit_pct": 0.15944095835710212,
            "run_ambiguous_pct": 0.09469480889903023,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.09469480889903023,
            "avg_feature_coverage": 0.8790929834569308,
            "high_confidence_pct": 0.6976611523103251,
            "medium_confidence_pct": 0.2076440387906446,
            "low_confidence_pct": 0.09469480889903023,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-01",
            "n_trades": 15782,
            "n_runs": 4931,
            "retail_pct": 0.28171334431630973,
            "mixed_pct": 0.14763654796603726,
            "instit_pct": 0.39830186288176406,
            "ambiguous_pct": 0.17234824483588898,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.17234824483588898,
            "avg_trade_size": 16462.923878469144,
            "avg_run_notional": 37021.43353275198,
            "retail_qty_pct": 0.15886022314439022,
            "mixed_qty_pct": 0.18258214008846732,
            "instit_qty_pct": 0.5085754974387037,
            "ambiguous_qty_pct": 0.14998213932843876,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.14998213932843876,
            "retail_notional_pct": 0.15881329986906273,
            "mixed_notional_pct": 0.1826820363716664,
            "instit_notional_pct": 0.5086887415460867,
            "ambiguous_notional_pct": 0.14981592221318413,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.14981592221318413,
            "run_retail_pct": 0.4788075441087001,
            "run_mixed_pct": 0.21314135063881565,
            "run_instit_pct": 0.1948894747515717,
            "run_ambiguous_pct": 0.11316163050091259,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.11316163050091259,
            "avg_feature_coverage": 0.8793652403163658,
            "high_confidence_pct": 0.6736970188602718,
            "medium_confidence_pct": 0.21314135063881565,
            "low_confidence_pct": 0.11316163050091259,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-02",
            "n_trades": 9727,
            "n_runs": 3272,
            "retail_pct": 0.3054384702374833,
            "mixed_pct": 0.15256502518762208,
            "instit_pct": 0.396113909735787,
            "ambiguous_pct": 0.14588259483910765,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.14588259483910765,
            "avg_trade_size": 19849.76744114321,
            "avg_run_notional": 38406.21491442543,
            "retail_qty_pct": 0.16078242187920969,
            "mixed_qty_pct": 0.22985037347991488,
            "instit_qty_pct": 0.48879179897316005,
            "ambiguous_qty_pct": 0.1205754056677154,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.1205754056677154,
            "retail_notional_pct": 0.16127841368037388,
            "mixed_notional_pct": 0.22973344019705244,
            "instit_notional_pct": 0.4888323565202765,
            "ambiguous_notional_pct": 0.12015578960229716,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.12015578960229716,
            "run_retail_pct": 0.49602689486552565,
            "run_mixed_pct": 0.19559902200489,
            "run_instit_pct": 0.20507334963325183,
            "run_ambiguous_pct": 0.10330073349633252,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.10330073349633252,
            "avg_feature_coverage": 0.8780103911980438,
            "high_confidence_pct": 0.7004889975550123,
            "medium_confidence_pct": 0.19621026894865526,
            "low_confidence_pct": 0.10330073349633252,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-03",
            "n_trades": 12719,
            "n_runs": 5010,
            "retail_pct": 0.3530937966821291,
            "mixed_pct": 0.16101894803050554,
            "instit_pct": 0.3391776083025395,
            "ambiguous_pct": 0.14670964698482586,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.14670964698482586,
            "avg_trade_size": 15392.532614985454,
            "avg_run_notional": 27543.236373253498,
            "retail_qty_pct": 0.24319489785232637,
            "mixed_qty_pct": 0.17902990443148342,
            "instit_qty_pct": 0.4469808726375363,
            "ambiguous_qty_pct": 0.13079432507865393,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.13079432507865393,
            "retail_notional_pct": 0.24253682961765083,
            "mixed_notional_pct": 0.17885767527085894,
            "instit_notional_pct": 0.4478677085586608,
            "ambiguous_notional_pct": 0.13073778655282947,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.13073778655282947,
            "run_retail_pct": 0.4994011976047904,
            "run_mixed_pct": 0.21397205588822354,
            "run_instit_pct": 0.18423153692614772,
            "run_ambiguous_pct": 0.10239520958083832,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.10239520958083832,
            "avg_feature_coverage": 0.87500998003992,
            "high_confidence_pct": 0.6834331337325349,
            "medium_confidence_pct": 0.21417165668662674,
            "low_confidence_pct": 0.10239520958083832,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-04",
            "n_trades": 10895,
            "n_runs": 4257,
            "retail_pct": 0.33061037173015145,
            "mixed_pct": 0.15080312069756768,
            "instit_pct": 0.34860027535566773,
            "ambiguous_pct": 0.16998623221661313,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.16998623221661313,
            "avg_trade_size": 18388.85122533272,
            "avg_run_notional": 34907.756448202956,
            "retail_qty_pct": 0.16517084904063056,
            "mixed_qty_pct": 0.16365224262094014,
            "instit_qty_pct": 0.5236853144940801,
            "ambiguous_qty_pct": 0.14749159384434923,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.14749159384434923,
            "retail_notional_pct": 0.16484800023301227,
            "mixed_notional_pct": 0.163144663055092,
            "instit_notional_pct": 0.525223901539907,
            "ambiguous_notional_pct": 0.14678343517198883,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.14678343517198883,
            "run_retail_pct": 0.5090439276485789,
            "run_mixed_pct": 0.19943622269203665,
            "run_instit_pct": 0.1738313366220343,
            "run_ambiguous_pct": 0.11768851303735024,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.11768851303735024,
            "avg_feature_coverage": 0.8772727272727271,
            "high_confidence_pct": 0.6828752642706131,
            "medium_confidence_pct": 0.19943622269203665,
            "low_confidence_pct": 0.11768851303735024,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-05",
            "n_trades": 14830,
            "n_runs": 4479,
            "retail_pct": 0.251652056641942,
            "mixed_pct": 0.16129467296021577,
            "instit_pct": 0.43270397842211733,
            "ambiguous_pct": 0.1543492919757249,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1543492919757249,
            "avg_trade_size": 20539.157842211735,
            "avg_run_notional": 48251.76547220361,
            "retail_qty_pct": 0.12224874080423388,
            "mixed_qty_pct": 0.19366332584958854,
            "instit_qty_pct": 0.561804984881787,
            "ambiguous_qty_pct": 0.12228294846439061,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.12228294846439061,
            "retail_notional_pct": 0.1219239318979931,
            "mixed_notional_pct": 0.1937714629827939,
            "instit_notional_pct": 0.5624126996078501,
            "ambiguous_notional_pct": 0.12189190551136284,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.12189190551136284,
            "run_retail_pct": 0.477561955793704,
            "run_mixed_pct": 0.19044429560169682,
            "run_instit_pct": 0.20495646349631613,
            "run_ambiguous_pct": 0.1270372851082831,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.1270372851082831,
            "avg_feature_coverage": 0.8891493636972538,
            "high_confidence_pct": 0.6825184192900201,
            "medium_confidence_pct": 0.19044429560169682,
            "low_confidence_pct": 0.1270372851082831,
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
          "trade_id": "488",
          "timestamp": "2026-05-22T07:59:51.761034",
          "price": 120.2,
          "size": 50.0,
          "notional": 6010.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "487",
          "timestamp": "2026-05-22T07:59:51.760405",
          "price": 120.2,
          "size": 50.0,
          "notional": 6010.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47548,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "486",
          "timestamp": "2026-05-22T07:59:43.357173",
          "price": 119.8,
          "size": 100.0,
          "notional": 11980.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47547,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "485",
          "timestamp": "2026-05-22T07:59:42.776714",
          "price": 119.9,
          "size": 50.0,
          "notional": 5995.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47546,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "484",
          "timestamp": "2026-05-22T07:59:42.212901",
          "price": 119.9,
          "size": 200.0,
          "notional": 23980.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47545,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "483",
          "timestamp": "2026-05-22T07:59:42.212901",
          "price": 119.9,
          "size": 50.0,
          "notional": 5995.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47545,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "482",
          "timestamp": "2026-05-22T07:59:42.212901",
          "price": 119.9,
          "size": 50.0,
          "notional": 5995.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47545,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "481",
          "timestamp": "2026-05-22T07:59:42.210716",
          "price": 119.9,
          "size": 50.0,
          "notional": 5995.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47545,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "480",
          "timestamp": "2026-05-22T07:59:37.444597",
          "price": 120.0,
          "size": 50.0,
          "notional": 6000.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47544,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "479",
          "timestamp": "2026-05-22T07:59:16.334556",
          "price": 119.9,
          "size": 100.0,
          "notional": 11990.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47543,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "478",
          "timestamp": "2026-05-22T07:59:15.769716",
          "price": 119.9,
          "size": 200.0,
          "notional": 23980.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47543,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "477",
          "timestamp": "2026-05-22T07:59:07.561097",
          "price": 120.0,
          "size": 50.0,
          "notional": 6000.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47542,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "476",
          "timestamp": "2026-05-22T07:59:07.561097",
          "price": 120.0,
          "size": 50.0,
          "notional": 6000.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47542,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "475",
          "timestamp": "2026-05-22T07:58:50.073447",
          "price": 119.9,
          "size": 50.0,
          "notional": 5995.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47541,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "474",
          "timestamp": "2026-05-22T07:58:49.498511",
          "price": 119.9,
          "size": 150.0,
          "notional": 17985.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47541,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "473",
          "timestamp": "2026-05-22T07:58:39.364303",
          "price": 120.2,
          "size": 50.0,
          "notional": 6010.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47540,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "472",
          "timestamp": "2026-05-22T07:58:39.362733",
          "price": 120.2,
          "size": 50.0,
          "notional": 6010.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47540,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "471",
          "timestamp": "2026-05-22T07:58:20.145823",
          "price": 119.9,
          "size": 100.0,
          "notional": 11990.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47539,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "470",
          "timestamp": "2026-05-22T07:58:00.200736",
          "price": 119.9,
          "size": 50.0,
          "notional": 5995.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 47538,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "469",
          "timestamp": "2026-05-22T07:57:59.619128",
          "price": 119.9,
          "size": 50.0,
          "notional": 5995.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 47538,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "468",
          "timestamp": "2026-05-22T07:57:50.011625",
          "price": 119.9,
          "size": 50.0,
          "notional": 5995.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 47538,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "467",
          "timestamp": "2026-05-22T07:57:23.887857",
          "price": 120.2,
          "size": 50.0,
          "notional": 6010.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47537,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "466",
          "timestamp": "2026-05-22T07:57:23.887214",
          "price": 119.9,
          "size": 50.0,
          "notional": 5995.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47536,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "465",
          "timestamp": "2026-05-22T07:57:23.320380",
          "price": 120.2,
          "size": 50.0,
          "notional": 6010.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47535,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "464",
          "timestamp": "2026-05-22T07:57:01.414950",
          "price": 120.2,
          "size": 50.0,
          "notional": 6010.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47534,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "463",
          "timestamp": "2026-05-22T07:56:52.536804",
          "price": 119.9,
          "size": 250.0,
          "notional": 29975.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47533,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "462",
          "timestamp": "2026-05-22T07:56:51.944814",
          "price": 119.9,
          "size": 50.0,
          "notional": 5995.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47533,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "461",
          "timestamp": "2026-05-22T07:56:16.237442",
          "price": 120.2,
          "size": 50.0,
          "notional": 6010.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47532,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "460",
          "timestamp": "2026-05-22T07:56:16.236766",
          "price": 120.2,
          "size": 50.0,
          "notional": 6010.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "459",
          "timestamp": "2026-05-22T07:55:21.306864",
          "price": 120.2,
          "size": 200.0,
          "notional": 24040.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 47531,
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
      "total_trades": 85201,
      "price_moving_trades": 24068,
      "pct_price_moving": 28.248494735977275,
      "all_movers": {
        "count": 24068,
        "avg_size": 18495.580313279042,
        "median_size": 6315.0,
        "retail_count": 10229,
        "mixed_count": 4673,
        "institutional_count": 6544,
        "ambiguous_count": 2622,
        "unobservable_count": 0,
        "retail_pct": 42.50041548944657,
        "mixed_pct": 19.41582183812531,
        "instit_pct": 27.18962938341366,
        "unclear_pct": 10.894133289014459
      },
      "positive_movers": {
        "count": 12049,
        "avg_size": 17954.225035272637,
        "median_size": 6365.0,
        "retail_count": 4866,
        "mixed_count": 2545,
        "institutional_count": 3268,
        "ambiguous_count": 1370,
        "unobservable_count": 0,
        "retail_pct": 40.385094198688684,
        "mixed_pct": 21.12208482031704,
        "instit_pct": 27.122582786953274,
        "unclear_pct": 11.370238194040999
      },
      "negative_movers": {
        "count": 12019,
        "avg_size": 19038.28684000333,
        "median_size": 6285.0,
        "retail_count": 5363,
        "mixed_count": 2128,
        "institutional_count": 3276,
        "ambiguous_count": 1252,
        "unobservable_count": 0,
        "retail_pct": 44.62101672352109,
        "mixed_pct": 17.70529994175888,
        "instit_pct": 27.256843331391963,
        "unclear_pct": 10.416840003328064
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
          "opening": 8.949674022140403e-05,
          "continuous": 0.9366293850430728,
          "closing": 0.007477025399753531,
          "auctions": 0.007566522139974934,
          "other": 0.05580409281695235
        },
        "1M": {
          "opening": 0.0039090912795327285,
          "continuous": 0.9424563238538305,
          "closing": 0.004975680844040681,
          "auctions": 0.00888477212357341,
          "other": 0.04865890402259608
        },
        "3M": {
          "opening": 0.003609219580862208,
          "continuous": 0.8755981381299236,
          "closing": 0.04391325567330444,
          "auctions": 0.04752247525416665,
          "other": 0.07687938661590964
        },
        "6M": {
          "opening": 0.004572859724350887,
          "continuous": 0.8899239139904012,
          "closing": 0.05127813366810581,
          "auctions": 0.055850993392456694,
          "other": 0.0542250926171422
        }
      },
      "hhi": {
        "1D": 0.23136475835833034,
        "1M": 0.2001319953551163,
        "3M": 0.2050715479574311,
        "6M": 0.19749145987497763
      },
      "profile_buckets": [
        {
          "time": "09:00",
          "avg_share": 0.0071
        },
        {
          "time": "09:30",
          "avg_share": 0.1208
        },
        {
          "time": "10:00",
          "avg_share": 0.0497
        },
        {
          "time": "10:30",
          "avg_share": 0.0502
        },
        {
          "time": "11:00",
          "avg_share": 0.0317
        },
        {
          "time": "11:30",
          "avg_share": 0.0341
        },
        {
          "time": "12:00",
          "avg_share": 0.0331
        },
        {
          "time": "13:00",
          "avg_share": 0.0731
        },
        {
          "time": "13:30",
          "avg_share": 0.0574
        },
        {
          "time": "14:00",
          "avg_share": 0.0562
        },
        {
          "time": "14:30",
          "avg_share": 0.0909
        },
        {
          "time": "15:00",
          "avg_share": 0.1141
        },
        {
          "time": "15:30",
          "avg_share": 0.2582
        },
        {
          "time": "16:00",
          "avg_share": 0.0236
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "2378",
          "auctions_pct": 4.648350611007603,
          "hhi": 0.20234899235118806,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400",
            "you": true
          }
        },
        {
          "ticker": "376",
          "auctions_pct": 1.2599636237892704,
          "hhi": 0.14873719403140437,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "1828",
          "auctions_pct": 8.73253294712064,
          "hhi": 0.16712719324012232,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "82318",
          "auctions_pct": 0.10256911023850572,
          "hhi": 0.2346324621574511,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "945",
          "auctions_pct": 3.1002244420548264,
          "hhi": 0.21346978237105532,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "1508",
          "auctions_pct": 4.6335147089893365,
          "hhi": 0.15195970358643585,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "6963",
          "auctions_pct": 5.241260120750817,
          "hhi": 0.14167521933075308,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "6060",
          "auctions_pct": 5.244677264317238,
          "hhi": 0.1214913750760316,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "966",
          "auctions_pct": 5.192066083306269,
          "hhi": 0.11504255635553876,
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
