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
      "ticker": "CRPU",
      "name": "Sasseur Reit",
      "marketCap": 844270564.0500001,
      "sector": "REIT - Retail",
      "industry": "Real Estate"
    },
    {
      "ticker": "AU8U",
      "name": "CapLand China T",
      "marketCap": 1144044274.45,
      "sector": "REIT - Retail",
      "industry": "Real Estate"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XSES",
    "currency": "SGD",
    "ticker": "CRPU",
    "company": "Sasseur Reit",
    "asof_date": "2026-05-13",
    "industry": "Real Estate",
    "sector": "REIT - Retail",
    "market_cap_display": "844.3M",
    "market_cap_category": "small",
    "universe_total": 557,
    "peers_count": 1,
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
          "score_pca": 73.07001795332137,
          "score_pca_percentile": 73.07001795332137,
          "rank_pca": 151,
          "total": 557,
          "adv_notional_sgd": 355167.0,
          "adv_volume_shares": 530100.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.001159801931909711,
          "votes": 291.0,
          "trades": 291.0,
          "spread_pct": 0.007521645185631905,
          "spread_ticks": 1.0,
          "amihud": 2.1169751109988423e-08,
          "volatility": 0.1433653116071401
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5216046283367142,
          "loadings": {
            "log_adv": 0.5499658037124315,
            "log_trades": 0.5077640265199378,
            "log_turnover": 0.5144044596028471,
            "neg_spread": 0.36333183532509683,
            "neg_amihud": 0.047314780218891746,
            "neg_vol": -0.20212038262391013
          }
        },
        "data_quality": {
          "turnover_ratio": {
            "valid": true,
            "reason": null
          }
        },
        "peer_summary": {
          "n_peers": 1,
          "peer_median_adv": 926278.5,
          "peer_median_score_pca": 80.43087971274686,
          "peer_median_trades": 836.0,
          "peer_median_volatility": 0.14229538134807682,
          "peer_median_spread_pct": 0.007463592902962258,
          "peer_median_spread_ticks": 1.0,
          "peer_median_amihud": 8.056633687561787e-09,
          "peer_median_turnover_ratio": 0.0011528521376074007,
          "target_vs_peer": {
            "score_pca_delta": -7.36,
            "adv_delta_pct": -61.7,
            "trades_delta_pct": -65.19,
            "volatility_delta_pct": -0.75,
            "spread_pct_delta_pct": -0.78,
            "spread_ticks_delta_pct": 0.0,
            "amihud_delta_pct": -162.76,
            "turnover_ratio_delta_pct": 0.6
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 73.07001795332137,
            "rank_pca": 151,
            "adv": 355167.0,
            "trades": 291.0,
            "volatility": 0.1433653116071401,
            "spread_pct": 0.007521645185631905,
            "spread_ticks": 1.0,
            "amihud": 2.1169751109988423e-08,
            "turnover_ratio": 0.001159801931909711,
            "is_target": true
          },
          {
            "ticker": "AU8U",
            "score_pca": 80.43087971274686,
            "rank_pca": 110,
            "adv": 926278.5,
            "trades": 836.0,
            "volatility": 0.14229538134807682,
            "spread_pct": 0.007463592902962258,
            "spread_ticks": 1.0,
            "amihud": 8.056633687561787e-09,
            "turnover_ratio": 0.0011528521376074007,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "REIT - Retail",
          "sector_count": 8,
          "market_count": 557,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.30359478577715987,
              "median": 0.12222748909926467,
              "min": 0.0,
              "max": 6.608197362010048,
              "p5": 0.0,
              "p95": 1.168843160802253,
              "count": 557
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 4738813.758338722,
              "median": 22550.0,
              "min": 0.0,
              "max": 433759860.0,
              "p5": 0.0,
              "p95": 19979671.19999996,
              "count": 557
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09736772104440564,
              "median": 0.026439232409381692,
              "min": 0.0002623059441542142,
              "max": 1.2388663967611337,
              "p5": 0.0031874827929876687,
              "p95": 0.499241387887078,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.013647989210609812,
              "median": 0.0004935244322677773,
              "min": 0.0,
              "max": 3.01891767187397,
              "p5": 0.0,
              "p95": 0.02555943444438863,
              "count": 550
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.490012712895328e-05,
              "median": 1.8339523118353393e-08,
              "min": 0.0,
              "max": 0.004418522446094022,
              "p5": 0.0,
              "p95": 4.9146855738446046e-05,
              "count": 422
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 643.2315978456014,
              "median": 11.0,
              "min": 0.0,
              "max": 21044.0,
              "p5": 0.0,
              "p95": 3710.599999999985,
              "count": 557
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.24845473653299752,
              "median": 0.11720415313222632,
              "min": 0.0,
              "max": 1.2730366958631603,
              "p5": 0.02966032638145218,
              "p95": 0.8855060062841409,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 12307372.536100442,
              "median": 498650.4444017721,
              "min": 0.0,
              "max": 89166011.99999999,
              "p5": 2312.0650000000005,
              "p95": 60410573.39999995,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04017649470652258,
              "median": 0.00828570947064401,
              "min": 0.004408140049295298,
              "max": 0.14533762057877808,
              "p5": 0.004437319346937875,
              "p95": 0.1411361200428724,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0024857111501622314,
              "median": 0.0011563270347585558,
              "min": 0.0,
              "max": 0.011025629407514413,
              "p5": 0.00010421286571474414,
              "p95": 0.008637776930241491,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.6435233932083385e-09,
              "median": 6.342305920364874e-10,
              "min": 0.0,
              "max": 2.1169751109988423e-08,
              "p5": 0.0,
              "p95": 1.9812040285853395e-08,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1274.875,
              "median": 204.5,
              "min": 0.0,
              "max": 6700.0,
              "p5": 2.8000000000000003,
              "p95": 5109.249999999997,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 926278.5,
              "median": 926278.5,
              "min": 926278.5,
              "max": 926278.5,
              "p5": 926278.5,
              "p95": 926278.5,
              "count": 1
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 836.0,
              "median": 836.0,
              "min": 836.0,
              "max": 836.0,
              "p5": 836.0,
              "p95": 836.0,
              "count": 1
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.14229538134807682,
              "median": 0.14229538134807682,
              "min": 0.14229538134807682,
              "max": 0.14229538134807682,
              "p5": 0.14229538134807682,
              "p95": 0.14229538134807682,
              "count": 1
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.007463592902962258,
              "median": 0.007463592902962258,
              "min": 0.007463592902962258,
              "max": 0.007463592902962258,
              "p5": 0.007463592902962258,
              "p95": 0.007463592902962258,
              "count": 1
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.0,
              "median": 1.0,
              "min": 1.0,
              "max": 1.0,
              "p5": 1.0,
              "p95": 1.0,
              "count": 1
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 8.056633687561787e-09,
              "median": 8.056633687561787e-09,
              "min": 8.056633687561787e-09,
              "max": 8.056633687561787e-09,
              "p5": 8.056633687561787e-09,
              "p95": 8.056633687561787e-09,
              "count": 1
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0011528521376074007,
              "median": 0.0011528521376074007,
              "min": 0.0011528521376074007,
              "max": 0.0011528521376074007,
              "p5": 0.0011528521376074007,
              "p95": 0.0011528521376074007,
              "count": 1
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.007518796992481258,
            "market": 0.01171855255509513,
            "sector": 0.0,
            "peers": -0.007462686567164201,
            "vs_market": -0.004199755562613872,
            "vs_sector": 0.007518796992481258,
            "vs_peers": 0.014981483559645459
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 81.14901256732495,
          "score_pca_percentile": 81.14901256732495,
          "rank_pca": 106,
          "total": 557,
          "adv_notional_sgd": 554130.0,
          "adv_volume_shares": 844000.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.0018465814573321942,
          "votes": 343.0,
          "trades": 343.0,
          "spread_pct": 0.007547169811320763,
          "spread_ticks": 1.0006325110689438,
          "amihud": 1.2051208186646115e-08,
          "volatility": 0.12089371815002546
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5310270173037331,
          "loadings": {
            "log_adv": 0.5361818052810416,
            "log_trades": 0.4877909619256122,
            "log_turnover": 0.48525412006385676,
            "neg_spread": 0.4169254545180222,
            "neg_amihud": 0.17847550525261033,
            "neg_vol": 0.18280357630545957
          }
        },
        "data_quality": {
          "turnover_ratio": {
            "valid": true,
            "reason": null
          }
        },
        "peer_summary": {
          "n_peers": 1,
          "peer_median_adv": 734436.0,
          "peer_median_score_pca": 83.48294434470377,
          "peer_median_trades": 767.0,
          "peer_median_volatility": 0.14521967718487838,
          "peer_median_spread_pct": 0.007467064020482989,
          "peer_median_spread_ticks": 1.007915567282322,
          "peer_median_amihud": 8.693788528045263e-09,
          "peer_median_turnover_ratio": 0.0008961109981962329,
          "target_vs_peer": {
            "score_pca_delta": -2.33,
            "adv_delta_pct": -24.6,
            "trades_delta_pct": -55.28,
            "volatility_delta_pct": 16.75,
            "spread_pct_delta_pct": -1.07,
            "spread_ticks_delta_pct": -0.72,
            "amihud_delta_pct": -38.62,
            "turnover_ratio_delta_pct": 106.07
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 81.14901256732495,
            "rank_pca": 106,
            "adv": 554130.0,
            "trades": 343.0,
            "volatility": 0.12089371815002546,
            "spread_pct": 0.007547169811320763,
            "spread_ticks": 1.0006325110689438,
            "amihud": 1.2051208186646115e-08,
            "turnover_ratio": 0.0018465814573321942,
            "is_target": true
          },
          {
            "ticker": "AU8U",
            "score_pca": 83.48294434470377,
            "rank_pca": 93,
            "adv": 734436.0,
            "trades": 767.0,
            "volatility": 0.14521967718487838,
            "spread_pct": 0.007467064020482989,
            "spread_ticks": 1.007915567282322,
            "amihud": 8.693788528045263e-09,
            "turnover_ratio": 0.0008961109981962329,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "REIT - Retail",
          "sector_count": 8,
          "market_count": 557,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6387346635177905,
              "median": 0.40161051765101724,
              "min": 0.0,
              "max": 5.558776843874919,
              "p5": 0.081225315036818,
              "p95": 1.8417947843686011,
              "count": 557
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3444412.880805821,
              "median": 16152.9,
              "min": 0.0,
              "max": 306786193.7,
              "p5": 0.0,
              "p95": 14827633.399999956,
              "count": 557
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1009875630704394,
              "median": 0.029053788771103147,
              "min": 0.00027741427863602243,
              "max": 1.2631578947368423,
              "p5": 0.003324168185140111,
              "p95": 0.4906699205931012,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0062589044493718896,
              "median": 0.00034029516650419114,
              "min": 0.0,
              "max": 1.7632324830268276,
              "p5": 0.0,
              "p95": 0.014135967236243059,
              "count": 550
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.823024662363418e-05,
              "median": 8.772932362322438e-08,
              "min": 0.0,
              "max": 0.010416666666666664,
              "p5": 0.0,
              "p95": 4.794651661841225e-05,
              "count": 546
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 504.5062836624776,
              "median": 8.0,
              "min": 0.0,
              "max": 12683.0,
              "p5": 0.0,
              "p95": 3002.7999999999843,
              "count": 557
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3098845135836692,
              "median": 0.14418521989892225,
              "min": 0.09570550630993344,
              "max": 1.5068720135785003,
              "p5": 0.10428572737358899,
              "p95": 1.0439843508205697,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 11397220.423735198,
              "median": 599270.25,
              "min": 0.0,
              "max": 77127708.0,
              "p5": 4886.525000000001,
              "p95": 54324321.449999966,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03925088432697305,
              "median": 0.008298471783488439,
              "min": 0.004233058864274688,
              "max": 0.15384615384615383,
              "p5": 0.004310572679192477,
              "p95": 0.14112808460634543,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002577461325679295,
              "median": 0.0008736368432141789,
              "min": 0.0,
              "max": 0.008914690180689036,
              "p5": 0.00011585738011451977,
              "p95": 0.008297339292769199,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.0932266283297586e-06,
              "median": 4.635481187952865e-09,
              "min": 0.0,
              "max": 8.707767328456976e-06,
              "p5": 0.0,
              "p95": 5.665874180424035e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1273.25,
              "median": 294.0,
              "min": 0.0,
              "max": 6474.0,
              "p5": 6.300000000000001,
              "p95": 5010.649999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 734436.0,
              "median": 734436.0,
              "min": 734436.0,
              "max": 734436.0,
              "p5": 734436.0,
              "p95": 734436.0,
              "count": 1
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 767.0,
              "median": 767.0,
              "min": 767.0,
              "max": 767.0,
              "p5": 767.0,
              "p95": 767.0,
              "count": 1
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.14521967718487838,
              "median": 0.14521967718487838,
              "min": 0.14521967718487838,
              "max": 0.14521967718487838,
              "p5": 0.14521967718487838,
              "p95": 0.14521967718487838,
              "count": 1
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.007467064020482989,
              "median": 0.007467064020482989,
              "min": 0.007467064020482989,
              "max": 0.007467064020482989,
              "p5": 0.007467064020482989,
              "p95": 0.007467064020482989,
              "count": 1
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.007915567282322,
              "median": 1.007915567282322,
              "min": 1.007915567282322,
              "max": 1.007915567282322,
              "p5": 1.007915567282322,
              "p95": 1.007915567282322,
              "count": 1
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 8.693788528045263e-09,
              "median": 8.693788528045263e-09,
              "min": 8.693788528045263e-09,
              "max": 8.693788528045263e-09,
              "p5": 8.693788528045263e-09,
              "p95": 8.693788528045263e-09,
              "count": 1
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0008961109981962329,
              "median": 0.0008961109981962329,
              "min": 0.0008961109981962329,
              "max": 0.0008961109981962329,
              "p5": 0.0008961109981962329,
              "p95": 0.0008961109981962329,
              "count": 1
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.022900763358778553,
            "market": 0.003970578726789187,
            "sector": 0.011731075694589421,
            "peers": -0.007462686567163979,
            "vs_market": 0.018930184631989366,
            "vs_sector": 0.011169687664189132,
            "vs_peers": 0.03036344992594253
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 84.02154398563735,
          "score_pca_percentile": 84.02154398563735,
          "rank_pca": 90,
          "total": 557,
          "adv_notional_sgd": 684382.5,
          "adv_volume_shares": 1013900.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.0022183044307927864,
          "votes": 406.0,
          "trades": 406.0,
          "spread_pct": 0.007668286630131328,
          "spread_ticks": 1.0,
          "amihud": 6.095646422273147e-09,
          "volatility": 0.18056437898090794
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.5627755326766404,
          "loadings": {
            "log_adv": 0.51756440851798,
            "log_trades": 0.4650095819648573,
            "log_turnover": 0.47422361128139245,
            "neg_spread": 0.4172377592124681,
            "neg_amihud": 0.24715799641168265,
            "neg_vol": 0.23628524142793647
          }
        },
        "data_quality": {
          "turnover_ratio": {
            "valid": true,
            "reason": null
          }
        },
        "peer_summary": {
          "n_peers": 1,
          "peer_median_adv": 1213571.0,
          "peer_median_score_pca": 86.17594254937163,
          "peer_median_trades": 848.0,
          "peer_median_volatility": 0.2009803312065182,
          "peer_median_spread_pct": 0.007534888173234059,
          "peer_median_spread_ticks": 1.0038948393378773,
          "peer_median_amihud": 6.660991169141017e-09,
          "peer_median_turnover_ratio": 0.0014991464404108586,
          "target_vs_peer": {
            "score_pca_delta": -2.15,
            "adv_delta_pct": -43.6,
            "trades_delta_pct": -52.12,
            "volatility_delta_pct": 10.16,
            "spread_pct_delta_pct": -1.77,
            "spread_ticks_delta_pct": -0.39,
            "amihud_delta_pct": 8.49,
            "turnover_ratio_delta_pct": 47.97
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 84.02154398563735,
            "rank_pca": 90,
            "adv": 684382.5,
            "trades": 406.0,
            "volatility": 0.18056437898090794,
            "spread_pct": 0.007668286630131328,
            "spread_ticks": 1.0,
            "amihud": 6.095646422273147e-09,
            "turnover_ratio": 0.0022183044307927864,
            "is_target": true
          },
          {
            "ticker": "AU8U",
            "score_pca": 86.17594254937163,
            "rank_pca": 78,
            "adv": 1213571.0,
            "trades": 848.0,
            "volatility": 0.2009803312065182,
            "spread_pct": 0.007534888173234059,
            "spread_ticks": 1.0038948393378773,
            "amihud": 6.660991169141017e-09,
            "turnover_ratio": 0.0014991464404108586,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "REIT - Retail",
          "sector_count": 8,
          "market_count": 557,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6855183801840733,
              "median": 0.4757225112446752,
              "min": 0.0,
              "max": 7.107469945927176,
              "p5": 0.15851840193107378,
              "p95": 2.2201923505837455,
              "count": 557
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3380674.938775532,
              "median": 11830.0,
              "min": 0.0,
              "max": 306786193.7,
              "p5": 0.0,
              "p95": 13106383.599999947,
              "count": 557
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10046219388938141,
              "median": 0.031003217315004293,
              "min": 0.0002742695631217783,
              "max": 1.3400402414486918,
              "p5": 0.0035508696516023982,
              "p95": 0.4604419557292643,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006534990778711877,
              "median": 0.0002797779694726035,
              "min": 0.0,
              "max": 2.3103289170127215,
              "p5": 0.0,
              "p95": 0.011416608981406598,
              "count": 550
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.211569616881281e-05,
              "median": 1.4611760212736376e-07,
              "min": 0.0,
              "max": 0.0005935746352413022,
              "p5": 0.0,
              "p95": 3.99537792703361e-05,
              "count": 552
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 482.0125673249551,
              "median": 6.0,
              "min": 0.0,
              "max": 11430.0,
              "p5": 0.0,
              "p95": 2831.999999999998,
              "count": 557
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.33753907709009956,
              "median": 0.1939352052832748,
              "min": 0.1305753574672915,
              "max": 1.3443253023788733,
              "p5": 0.14807151499705723,
              "p95": 0.9676774096580071,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 11051549.736235198,
              "median": 735177.75,
              "min": 0.0,
              "max": 75024274.0,
              "p5": 4140.5,
              "p95": 52463326.849999964,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.038018219615115395,
              "median": 0.008359030192893722,
              "min": 0.004293330205464596,
              "max": 0.15384615384615383,
              "p5": 0.004371304887393285,
              "p95": 0.13746736292428194,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002592456862942417,
              "median": 0.001254985428802138,
              "min": 0.0,
              "max": 0.008733466576681911,
              "p5": 0.00011585738011451977,
              "p95": 0.007918369281116699,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.0361211152181266e-06,
              "median": 6.180596110194884e-09,
              "min": 0.0,
              "max": 8.237503706876742e-06,
              "p5": 3.267082641860938e-11,
              "p95": 5.365497788814267e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1227.375,
              "median": 442.5,
              "min": 0.0,
              "max": 6075.0,
              "p5": 6.300000000000001,
              "p95": 4634.749999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 1213571.0,
              "median": 1213571.0,
              "min": 1213571.0,
              "max": 1213571.0,
              "p5": 1213571.0,
              "p95": 1213571.0,
              "count": 1
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 848.0,
              "median": 848.0,
              "min": 848.0,
              "max": 848.0,
              "p5": 848.0,
              "p95": 848.0,
              "count": 1
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.2009803312065182,
              "median": 0.2009803312065182,
              "min": 0.2009803312065182,
              "max": 0.2009803312065182,
              "p5": 0.2009803312065182,
              "p95": 0.2009803312065182,
              "count": 1
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.007534888173234059,
              "median": 0.007534888173234059,
              "min": 0.007534888173234059,
              "max": 0.007534888173234059,
              "p5": 0.007534888173234059,
              "p95": 0.007534888173234059,
              "count": 1
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.0038948393378773,
              "median": 1.0038948393378773,
              "min": 1.0038948393378773,
              "max": 1.0038948393378773,
              "p5": 1.0038948393378773,
              "p95": 1.0038948393378773,
              "count": 1
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.660991169141017e-09,
              "median": 6.660991169141017e-09,
              "min": 6.660991169141017e-09,
              "max": 6.660991169141017e-09,
              "p5": 6.660991169141017e-09,
              "p95": 6.660991169141017e-09,
              "count": 1
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0014991464404108586,
              "median": 0.0014991464404108586,
              "min": 0.0014991464404108586,
              "max": 0.0014991464404108586,
              "p5": 0.0014991464404108586,
              "p95": 0.0014991464404108586,
              "count": 1
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": -0.014705882352940791,
            "market": 0.008694085895560644,
            "sector": -0.015448111012800969,
            "peers": -0.14193548387096766,
            "vs_market": -0.023399968248501435,
            "vs_sector": 0.0007422286598601779,
            "vs_peers": 0.12722960151802687
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 85.09874326750449,
          "score_pca_percentile": 85.09874326750449,
          "rank_pca": 84,
          "total": 557,
          "adv_notional_sgd": 563782.0,
          "adv_volume_shares": 845950.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.0018508478481400114,
          "votes": 343.0,
          "trades": 343.0,
          "spread_pct": 0.0074601752697391775,
          "spread_ticks": 1.0,
          "amihud": 5.507546014056164e-09,
          "volatility": 0.14277268494997897
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.5773693025870739,
          "loadings": {
            "log_adv": 0.5020492668444525,
            "log_trades": 0.44797618898893843,
            "log_turnover": 0.4564863324483496,
            "neg_spread": 0.43254239624270946,
            "neg_amihud": 0.2670092714071303,
            "neg_vol": 0.2837203208848436
          }
        },
        "data_quality": {
          "turnover_ratio": {
            "valid": true,
            "reason": null
          }
        },
        "peer_summary": {
          "n_peers": 1,
          "peer_median_adv": 1091829.5,
          "peer_median_score_pca": 86.89407540394973,
          "peer_median_trades": 737.0,
          "peer_median_volatility": 0.16279639878880464,
          "peer_median_spread_pct": 0.006956955012793358,
          "peer_median_spread_ticks": 1.003866068939852,
          "peer_median_amihud": 5.458407282732866e-09,
          "peer_median_turnover_ratio": 0.0011872829287083182,
          "target_vs_peer": {
            "score_pca_delta": -1.8,
            "adv_delta_pct": -48.4,
            "trades_delta_pct": -53.46,
            "volatility_delta_pct": 12.3,
            "spread_pct_delta_pct": -7.23,
            "spread_ticks_delta_pct": -0.39,
            "amihud_delta_pct": -0.9,
            "turnover_ratio_delta_pct": 55.89
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 85.09874326750449,
            "rank_pca": 84,
            "adv": 563782.0,
            "trades": 343.0,
            "volatility": 0.14277268494997897,
            "spread_pct": 0.0074601752697391775,
            "spread_ticks": 1.0,
            "amihud": 5.507546014056164e-09,
            "turnover_ratio": 0.0018508478481400114,
            "is_target": true
          },
          {
            "ticker": "AU8U",
            "score_pca": 86.89407540394973,
            "rank_pca": 74,
            "adv": 1091829.5,
            "trades": 737.0,
            "volatility": 0.16279639878880464,
            "spread_pct": 0.006956955012793358,
            "spread_ticks": 1.003866068939852,
            "amihud": 5.458407282732866e-09,
            "turnover_ratio": 0.0011872829287083182,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "REIT - Retail",
          "sector_count": 8,
          "market_count": 557,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6860347258994315,
              "median": 0.46191279887179554,
              "min": 0.0,
              "max": 6.911407639226295,
              "p5": 0.1522061183277049,
              "p95": 2.016632696454801,
              "count": 557
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2695561.7455153894,
              "median": 11696.25,
              "min": 0.0,
              "max": 254635655.60000002,
              "p5": 0.0,
              "p95": 11078198.399999978,
              "count": 557
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09478966925407993,
              "median": 0.028695536770314077,
              "min": 0.00027162635129017947,
              "max": 1.267605633802817,
              "p5": 0.003617004750681945,
              "p95": 0.46604249856410274,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0035031383420457427,
              "median": 0.00027114093098598894,
              "min": 0.0,
              "max": 0.9475314745237624,
              "p5": 0.0,
              "p95": 0.007576566426022534,
              "count": 550
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.891200079673386e-06,
              "median": 1.6182000506942358e-07,
              "min": 0.0,
              "max": 0.0006620397444526588,
              "p5": 0.0,
              "p95": 3.657946492584105e-05,
              "count": 556
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 395.3536804308797,
              "median": 7.0,
              "min": 0.0,
              "max": 10264.5,
              "p5": 0.0,
              "p95": 2230.9999999999995,
              "count": 557
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3528663764490485,
              "median": 0.16505633059767838,
              "min": 0.11512400085041198,
              "max": 1.3456590847918484,
              "p5": 0.12480104028526043,
              "p95": 1.070437669311535,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 8792658.600391846,
              "median": 636709.75,
              "min": 0.0,
              "max": 57398890.5,
              "p5": 12063.9225,
              "p95": 40965221.149999976,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.035539588651133505,
              "median": 0.008112710426645395,
              "min": 0.0042712193330027145,
              "max": 0.13333333333333333,
              "p5": 0.004342009735156364,
              "p95": 0.12485378567011218,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0023034815814018906,
              "median": 0.0011641626926714003,
              "min": 0.0,
              "max": 0.006833889104561173,
              "p5": 8.48750274404525e-05,
              "p95": 0.006632010905402327,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.339385842156139e-07,
              "median": 5.4829766483945154e-09,
              "min": 0.0,
              "max": 7.421899249138285e-06,
              "p5": 3.3048834462562446e-11,
              "p95": 4.835354891284271e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1120.125,
              "median": 382.75,
              "min": 0.0,
              "max": 5579.0,
              "p5": 8.225000000000001,
              "p95": 4264.574999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 1091829.5,
              "median": 1091829.5,
              "min": 1091829.5,
              "max": 1091829.5,
              "p5": 1091829.5,
              "p95": 1091829.5,
              "count": 1
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 737.0,
              "median": 737.0,
              "min": 737.0,
              "max": 737.0,
              "p5": 737.0,
              "p95": 737.0,
              "count": 1
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.16279639878880464,
              "median": 0.16279639878880464,
              "min": 0.16279639878880464,
              "max": 0.16279639878880464,
              "p5": 0.16279639878880464,
              "p95": 0.16279639878880464,
              "count": 1
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.006956955012793358,
              "median": 0.006956955012793358,
              "min": 0.006956955012793358,
              "max": 0.006956955012793358,
              "p5": 0.006956955012793358,
              "p95": 0.006956955012793358,
              "count": 1
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.003866068939852,
              "median": 1.003866068939852,
              "min": 1.003866068939852,
              "max": 1.003866068939852,
              "p5": 1.003866068939852,
              "p95": 1.003866068939852,
              "count": 1
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.458407282732866e-09,
              "median": 5.458407282732866e-09,
              "min": 5.458407282732866e-09,
              "max": 5.458407282732866e-09,
              "p5": 5.458407282732866e-09,
              "p95": 5.458407282732866e-09,
              "count": 1
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0011872829287083182,
              "median": 0.0011872829287083182,
              "min": 0.0011872829287083182,
              "max": 0.0011872829287083182,
              "p5": 0.0011872829287083182,
              "p95": 0.0011872829287083182,
              "count": 1
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": -0.021897810218978186,
            "market": 0.11493207451513299,
            "sector": -0.02029985641200871,
            "peers": -0.1739130434782613,
            "vs_market": -0.13682988473411117,
            "vs_sector": -0.0015979538069694765,
            "vs_peers": 0.15201523325928312
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Near-term tradability is weaker, with average volume down 35.9% from the 1M average and bid depth lighter than ask depth. That matters because immediate access can feel thinner on the buy side.",
        "market_comparison": "Return 0.8% vs peers -0.7%."
      },
      "30d": {
        "liquidity": "Monthly tradability is average for its size, with the stock sitting slightly below peers on the 6M liquidity score. That matters because access looks serviceable rather than standout.",
        "market_comparison": "The stock has outperformed over 1M, returning 2.3% compared with peers at -0.7% and the market at 0.4%. That matters because the return backdrop is firmer than the main comparison groups."
      },
      "3m": {
        "liquidity": "Medium-term tradability remains broadly steady, with the longer-term liquidity score only modestly below the peer median. That matters because access has held around an average level rather than dropping sharply.",
        "market_comparison": "Company-specific factors are dominating at 92.7%. That matters because trading conditions are more likely to respond to stock news than to broader market moves."
      },
      "6m": {
        "liquidity": "Longer-term tradability is average, with a 6M liquidity score of 85.1 compared with a peer median of 86.9. That matters because peer-relative access is close to the group but not leading it.",
        "market_comparison": "Primary average daily volume is S$563.8K compared with a peer median of S$1.1M. That matters because the stock offers less natural turnover than the typical peer."
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
          "median": 0.04336739601972121,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "4.3%",
          "display_range": null,
          "display_text": "4.3%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 4.3,
          "plain_english": "Market explains about 4.3% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.029668136089632556,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "3.0%",
          "display_range": null,
          "display_text": "3.0%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 3.0,
          "plain_english": "Sector explains about 3.0% of price moves in the current state."
        },
        "company_share": {
          "median": 0.9269644678906463,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "92.7%",
          "display_range": null,
          "display_text": "92.7%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 92.7,
          "plain_english": "Company-specific explains about 92.7% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 0.04630841605983668,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.05",
          "display_range": null,
          "display_text": "0.05",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Weak",
          "plain_english": "Weak market link: a 1% market move has lined up with about a 0.05% stock move in the same direction in this state.",
          "value_num": 0.05
        },
        "beta_stock_lag": {
          "median": -0.9832962070817265,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.98",
          "display_range": null,
          "display_text": "-0.98",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -0.98
        },
        "beta_sector": {
          "median": -0.04458701736201118,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.04",
          "display_range": null,
          "display_text": "-0.04",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Weak",
          "plain_english": "Weak sector link: a 1% sector move has lined up with about a 0.04% stock move in the opposite direction in this state.",
          "value_num": -0.04
        },
        "beta_market_lag": {
          "median": 0.04721655148759175,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.05",
          "display_range": null,
          "display_text": "0.05",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 0.05
        },
        "beta_sector_lag": {
          "median": 0.10031400864050473,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.10",
          "display_range": null,
          "display_text": "0.10",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 0.1
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
          "period_label": "2025-05-19 to 2025-05-30",
          "n_obs": 10,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4312865560579184,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "43.1%",
            "display_range": null,
            "display_text": "43.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
            "kind": "share_pct",
            "value_pct": 43.1,
            "plain_english": "Company-specific explains about 43.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.36830578667508923,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.8%",
              "display_range": null,
              "display_text": "36.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
              "kind": "share_pct",
              "value_pct": 36.8,
              "plain_english": "Market explains about 36.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.20040765726699225,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.0%",
              "display_range": null,
              "display_text": "20.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
              "kind": "share_pct",
              "value_pct": 20.0,
              "plain_english": "Sector explains about 20.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4312865560579184,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "43.1%",
              "display_range": null,
              "display_text": "43.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
              "kind": "share_pct",
              "value_pct": 43.1,
              "plain_english": "Company-specific explains about 43.1% of price moves in the current state."
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
            "median": 0.623404724325774,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "62.3%",
            "display_range": null,
            "display_text": "62.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 62.3,
            "plain_english": "Company-specific explains about 62.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.19863657260917883,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "19.9%",
              "display_range": null,
              "display_text": "19.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 19.9,
              "plain_english": "Market explains about 19.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1779587030650471,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "17.8%",
              "display_range": null,
              "display_text": "17.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 17.8,
              "plain_english": "Sector explains about 17.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.623404724325774,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "62.3%",
              "display_range": null,
              "display_text": "62.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 62.3,
              "plain_english": "Company-specific explains about 62.3% of price moves in the current state."
            }
          },
          "summary": "Jun: Still clearly company-driven."
        },
        {
          "month_key": "2025-07",
          "month_label": "July 2025",
          "month_short_label": "Jul",
          "period_label": "2025-07-01 to 2025-07-31",
          "n_obs": 23,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.6156446349712699,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "61.6%",
            "display_range": null,
            "display_text": "61.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
            "kind": "share_pct",
            "value_pct": 61.6,
            "plain_english": "Company-specific explains about 61.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.15572514972889706,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "15.6%",
              "display_range": null,
              "display_text": "15.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
              "kind": "share_pct",
              "value_pct": 15.6,
              "plain_english": "Market explains about 15.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.22863021529983313,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "22.9%",
              "display_range": null,
              "display_text": "22.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
              "kind": "share_pct",
              "value_pct": 22.9,
              "plain_english": "Sector explains about 22.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6156446349712699,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.6%",
              "display_range": null,
              "display_text": "61.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
              "kind": "share_pct",
              "value_pct": 61.6,
              "plain_english": "Company-specific explains about 61.6% of price moves in the current state."
            }
          },
          "summary": "Jul: Still clearly company-driven."
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
            "median": 0.4539874874240682,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "45.4%",
            "display_range": null,
            "display_text": "45.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 45.4,
            "plain_english": "Company-specific explains about 45.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3380759283078133,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "33.8%",
              "display_range": null,
              "display_text": "33.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 33.8,
              "plain_english": "Market explains about 33.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.20793658426811856,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.8%",
              "display_range": null,
              "display_text": "20.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 20.8,
              "plain_english": "Sector explains about 20.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4539874874240682,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.4%",
              "display_range": null,
              "display_text": "45.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 45.4,
              "plain_english": "Company-specific explains about 45.4% of price moves in the current state."
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
            "median": 0.47594380520699603,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.6%",
            "display_range": null,
            "display_text": "47.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 47.6,
            "plain_english": "Company-specific explains about 47.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3064722257863164,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "30.6%",
              "display_range": null,
              "display_text": "30.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 30.6,
              "plain_english": "Market explains about 30.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.21758396900668758,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "21.8%",
              "display_range": null,
              "display_text": "21.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 21.8,
              "plain_english": "Sector explains about 21.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.47594380520699603,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.6%",
              "display_range": null,
              "display_text": "47.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 47.6,
              "plain_english": "Company-specific explains about 47.6% of price moves in the current state."
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
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4828150565478932,
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
            "plain_english": "Company-specific explains about 48.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3142352514374536,
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
              "plain_english": "Market explains about 31.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2029496920146531,
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
              "plain_english": "Sector explains about 20.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4828150565478932,
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
              "plain_english": "Company-specific explains about 48.3% of price moves in the current state."
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
            "median": 0.4219146512462774,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "42.2%",
            "display_range": null,
            "display_text": "42.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 42.2,
            "plain_english": "Market explains about 42.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.4219146512462774,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.2%",
              "display_range": null,
              "display_text": "42.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 42.2,
              "plain_english": "Market explains about 42.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2775902288822491,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.8%",
              "display_range": null,
              "display_text": "27.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 27.8,
              "plain_english": "Sector explains about 27.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3004951198714734,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "30.0%",
              "display_range": null,
              "display_text": "30.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 30.0,
              "plain_english": "Company-specific explains about 30.0% of price moves in the current state."
            }
          },
          "summary": "Nov: More mixed, though market-driven still has the largest share."
        },
        {
          "month_key": "2025-12",
          "month_label": "December 2025",
          "month_short_label": "Dec",
          "period_label": "2025-12-01 to 2025-12-31",
          "n_obs": 22,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.7687417314818247,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "76.9%",
            "display_range": null,
            "display_text": "76.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 76.9,
            "plain_english": "Company-specific explains about 76.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.12378967681730305,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "12.4%",
              "display_range": null,
              "display_text": "12.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 12.4,
              "plain_english": "Market explains about 12.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1074685917008723,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "10.7%",
              "display_range": null,
              "display_text": "10.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 10.7,
              "plain_english": "Sector explains about 10.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.7687417314818247,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "76.9%",
              "display_range": null,
              "display_text": "76.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 76.9,
              "plain_english": "Company-specific explains about 76.9% of price moves in the current state."
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
            "median": 0.634478433420432,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "63.4%",
            "display_range": null,
            "display_text": "63.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 63.4,
            "plain_english": "Company-specific explains about 63.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.20419511848433777,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.4%",
              "display_range": null,
              "display_text": "20.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 20.4,
              "plain_english": "Market explains about 20.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.16132644809523028,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "16.1%",
              "display_range": null,
              "display_text": "16.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 16.1,
              "plain_english": "Sector explains about 16.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.634478433420432,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "63.4%",
              "display_range": null,
              "display_text": "63.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 63.4,
              "plain_english": "Company-specific explains about 63.4% of price moves in the current state."
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
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.8241639016384482,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "82.4%",
            "display_range": null,
            "display_text": "82.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
            "kind": "share_pct",
            "value_pct": 82.4,
            "plain_english": "Company-specific explains about 82.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.12970195459975553,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "13.0%",
              "display_range": null,
              "display_text": "13.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 13.0,
              "plain_english": "Market explains about 13.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.04613414376179617,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "4.6%",
              "display_range": null,
              "display_text": "4.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 4.6,
              "plain_english": "Sector explains about 4.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.8241639016384482,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "82.4%",
              "display_range": null,
              "display_text": "82.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 82.4,
              "plain_english": "Company-specific explains about 82.4% of price moves in the current state."
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
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4594963935612947,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "45.9%",
            "display_range": null,
            "display_text": "45.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 45.9,
            "plain_english": "Company-specific explains about 45.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.23035600504921894,
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
              "median": 0.31014760138948644,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "31.0%",
              "display_range": null,
              "display_text": "31.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 31.0,
              "plain_english": "Sector explains about 31.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4594963935612947,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.9%",
              "display_range": null,
              "display_text": "45.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 45.9,
              "plain_english": "Company-specific explains about 45.9% of price moves in the current state."
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
            "median": 0.47906534683171254,
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
              "median": 0.2381469594055639,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "23.8%",
              "display_range": null,
              "display_text": "23.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 23.8,
              "plain_english": "Market explains about 23.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.28278769376272356,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "28.3%",
              "display_range": null,
              "display_text": "28.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 28.3,
              "plain_english": "Sector explains about 28.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.47906534683171254,
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
          "summary": "Apr: Mostly company-driven."
        },
        {
          "month_key": "2026-05",
          "month_label": "May 2026",
          "month_short_label": "May",
          "period_label": "2026-05-04 to 2026-05-13",
          "n_obs": 8,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.9999999999999983,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "100.0%",
            "display_range": null,
            "display_text": "100.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
            "kind": "share_pct",
            "value_pct": 100.0,
            "plain_english": "Company-specific explains about 100.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 1.256560814141949e-15,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "0.0%",
              "display_range": null,
              "display_text": "0.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
              "kind": "share_pct",
              "value_pct": 0.0,
              "plain_english": "Market explains about 0.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 3.1353825135661616e-16,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "0.0%",
              "display_range": null,
              "display_text": "0.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
              "kind": "share_pct",
              "value_pct": 0.0,
              "plain_english": "Sector explains about 0.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.9999999999999983,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "100.0%",
              "display_range": null,
              "display_text": "100.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
              "kind": "share_pct",
              "value_pct": 100.0,
              "plain_english": "Company-specific explains about 100.0% of price moves in the current state."
            }
          },
          "summary": "May: Still clearly company-driven."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5060240963855421,
          "expected_duration_days": 9.0,
          "current_probability": 0.0,
          "n_days_effective": 126.0,
          "volatility": {
            "median": 0.0054695600691849,
            "low": 0.0054695600691849,
            "high": 0.0054695600691849
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": 0.0
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4939759036144578,
          "expected_duration_days": 8.785714285714286,
          "current_probability": 1.0,
          "n_days_effective": 123.0,
          "volatility": {
            "median": 0.010658093531380973,
            "low": 0.010658093531380973,
            "high": 0.010658093531380973
          },
          "volatility_label": "High Volatility",
          "current_probability_display": null
        }
      ],
      "transitions": {
        "mean": [
          [
            0.8888888888888888,
            0.1111111111111111
          ],
          [
            0.10655737704918032,
            0.8934426229508197
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            112.0,
            14.0
          ],
          [
            13.0,
            109.0
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
        "market_link_display": "0.05",
        "sector_link_display": "-0.04",
        "market_link_explainer": "Weak market link. A 1% market move has lined up with about a 0.05% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "Weak sector link. A 1% sector move has lined up with about a 0.04% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "-0.98",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "High Volatility",
        "dominant_driver": "company",
        "dominant_driver_label": "Company-specific",
        "driver_share_pct": 92.7,
        "driver_share_display": "92.7%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 251 trading days relative to the 252-day target.",
        "history_days": 251,
        "history_limited": true,
        "volatility_label": "High Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.8934426229508197,
        "effective_days": 123.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 8.8 days.",
        "expected_duration_days": 8.8
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
          "pct_time": 0.5060240963855421,
          "expected_duration_days": 9.0,
          "current_probability": 0.0,
          "n_days_effective": 126.0,
          "volatility": {
            "median": 0.0054695600691849,
            "low": 0.0054695600691849,
            "high": 0.0054695600691849
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4939759036144578,
          "expected_duration_days": 8.785714285714286,
          "current_probability": 1.0,
          "n_days_effective": 123.0,
          "volatility": {
            "median": 0.010658093531380973,
            "low": 0.010658093531380973,
            "high": 0.010658093531380973
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.8888888888888888,
          0.1111111111111111
        ],
        [
          0.10655737704918032,
          0.8934426229508197
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.8888888888888888,
            0.1111111111111111
          ],
          [
            0.10655737704918032,
            0.8934426229508197
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            112.0,
            14.0
          ],
          [
            13.0,
            109.0
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
        "text": "Liquidity score: 85.1 — Strong",
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
        "bg": "bg-amber-500/20",
        "textColor": "text-amber-400"
      },
      "short": {
        "text": "Low short interest",
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
    "liq_subtitle": "Liquidity looks mixed for its size: the 6M score is 85.1 versus a peer median of 86.9. Recent flow appears stable, with 1D average volume 35.9% below the 1M average. Near-term execution looks a little thinner, as displayed bid depth is 0.68x ask depth, while the spread is 1 tick. Price moves are mainly company-specific at 92.7%, and the 1M return is +2.3% versus peers at -0.7% and the market at +0.4%.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent returns are stronger than peers and the market, with the stock up 2.3% over one month.",
    "perf_insight": "Performance has been firm, with the stock up 2.3% over one month compared with peers down 0.7% and the market up 0.4%. That matters because the return backdrop is stronger than the main comparison groups even as liquidity sits only slightly below the peer median.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Price action is being driven mainly by company-specific factors, with stock-level drivers accounting for 92.7% of the mix.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly company-driven, accounting for about 92.7% of price changes. Other influences are market 4.3%, and sector 3.0%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 4.3%, sector 3.0%, and company-specific 92.7%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has been consistently company-driven across Mar to May."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 4.3%, sector 3.0%, and company-specific 92.7%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "Company news is setting the tone, with company-specific drivers at 92.7%. That matters because near-term moves are more likely to reflect stock developments than broader market direction.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: price moves are overwhelmingly company-specific at 92.7%.",
      "Monthly change: the stock has stayed clearly company-driven from March through"
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Current trading conditions look mixed, with a tight spread but lighter buy-side depth on screen.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on May 13, 2025 to May 13, 2026 (255 trading days • 101,232 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on the displayed order book.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is lighter than the monthly baseline, so day-to-day access may feel weaker than the 1M score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The screen looks less supportive on the buy side, with displayed bid depth at 0.68x ask depth while the spread remains 1 tick.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 23.9% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Near-term trading conditions are thinner than the monthly average, even though the broader liquidity profile remains close to peers.",
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
    "intraday_insight": "Today’s flow is lighter, with 1D average volume down 35.9% from the 1M average. That matters because day-to-day access may feel less supported than the monthly profile implies.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Recent trading quality is being shaped more by displayed depth and volume than by any broader change in the liquidity profile.",
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
    "exec_subtitle": "Liquidity is mixed for its size, with peer standing close to the group but today’s screen looking less supportive.",
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
        "value": "85.1/100",
        "sub": "Peer median 86.9 (-1.8 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "S$563.8K",
        "sub": "Peer median S$1.1M",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "0.75%",
        "sub": "1.00 ticks; peers 0.70%",
        "interp": {
          "text": "Wider",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity looks mixed for its size: the 6M score is 85.1 versus a peer median of 86.9. Recent flow appears stable, with 1D average volume 35.9% below the 1M average. Near-term execution looks a little thinner, as displayed bid depth is 0.68x ask depth, while the spread is 1 tick. Price moves are mainly company-specific at 92.7%, and the 1M return is +2.3% versus peers at -0.7% and the market at +0.4%.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "0.667",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "0.75%",
        "note": "1.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.68x",
        "note": "Bid depth / ask depth on the displayed order book",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-0.76% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-1.18% with 100.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-3.10% with 82.3% fill.",
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
        "value": "85",
        "suffix": "/100",
        "bar_pct": 85,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Rank 84/557",
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
        "value": "0.75",
        "suffix": "%",
        "bar_pct": 7,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "0.75% • 1.00 ticks vs peers 0.70%",
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
        "value": "563.8K",
        "value_prefix": "S$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-red-400",
        "color_bar": "bg-red-500",
        "subtext": "Peer median S$1.1M",
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
        "value": "92.7",
        "suffix": "company-specific",
        "bar_pct": 93,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 4.3% • Sector 3.0%",
        "interpretation": {
          "text": "Company",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Liquidity is mixed for its size, with a 6M liquidity score of 85.1 compared with a peer median of 86.9. That matters because peer-relative access looks broadly in line rather than clearly strong or weak.",
      "Near-term trading conditions are thinner, with 1D average volume down 35.9% from the 1M",
      "The stock has outperformed while company-specific factors dominate, with a 1M return of 2.3% compared with peers at -0.7% and company-specific drivers at 92.7%. That matters because trading is being shaped more by stock-level developments than by broader market moves."
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
      "overall": "6M liquidity is strong: score 85.1 vs peer median 86.9 (-1.8 pts). 1D average volume down -35.9% from 1M. Recent flow does not show a clear deterioration from the monthly baseline.",
      "strengths": [
        "6M score 85.1 vs peer median 86.9 (-1.8 pts)."
      ],
      "concerns": [
        "1D average volume down -35.9% from 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: -1.8 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is -2.2%, better than peers, but worse than market, which shows price performance is mixed across comparison groups.",
        "vs_market": "Worse than market: -2.2% vs market 11.5%.",
        "vs_sector": "In line with sector: -2.2% vs sector -2.0%.",
        "vs_peers": "Better than peers: -2.2% vs peers -17.4%."
      },
      "adv": {
        "insight": "ADV is S$563.8K, better than market, but worse than sector and peers, which shows trading size is uneven across comparison groups.",
        "vs_market": "Better than market: S$563.8K vs market S$11.7K.",
        "vs_sector": "Worse than sector: S$563.8K vs sector S$636.7K.",
        "vs_peers": "Worse than peers: S$563.8K vs peers S$1.1M."
      },
      "spread": {
        "insight": "Spread is 0.75%, better than market, which keeps trading costs more competitive than comparable names.",
        "vs_market": "Better than market: 0.75% vs market 2.87%.",
        "vs_sector": "In line with sector: 0.75% vs sector 0.81%.",
        "vs_peers": "In line with peers: 0.75% vs peers 0.70%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.19%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.19% vs market 0.03%.",
        "vs_sector": "Better than sector: 0.19% vs sector 0.12%.",
        "vs_peers": "Better than peers: 0.19% vs peers 0.12%."
      },
      "volatility": {
        "insight": "Volatility is 14.28%, better than market, sector, and peers, which suggests day-to-day price swings are more contained than comparable names.",
        "vs_market": "Better than market: 14.28% vs market 46.19%.",
        "vs_sector": "Better than sector: 14.28% vs sector 16.51%.",
        "vs_peers": "Better than peers: 14.28% vs peers 16.28%."
      },
      "trades": {
        "insight": "Trades is 343, better than market, but worse than sector and peers, which shows trading frequency is mixed across comparison groups.",
        "vs_market": "Better than market: 343 vs market 7.",
        "vs_sector": "Worse than sector: 343 vs sector 383.",
        "vs_peers": "Worse than peers: 343 vs peers 737."
      },
      "amihud": {
        "insight": "Price impact is 5.51e-09, better than market, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 5.51e-09 vs market 1.62e-07.",
        "vs_sector": "In line with sector: 5.51e-09 vs sector 5.48e-09.",
        "vs_peers": "In line with peers: 5.51e-09 vs peers 5.46e-09."
      }
    },
    "performance": {
      "overall": "Recent returns are stronger than the main comparison groups, with the stock up 2.3% over one month compared with peers down 0.7% and the market up 0.4%. Liquidity gives a mixed read on that move, because the six-month liquidity score of 85.1 is 1.8 points below the peer median and one-day average volume is 35.9% below the monthly average, so the price strength is not being fully confirmed by stronger trading activity.",
      "conclusion": "The move looks company-specific, with strong relative returns but only mixed liquidity confirmation."
    },
    "drivers": {
      "overall": "Recent price moves are being driven primarily by company-specific factors, with 92.7% of the current mix coming from stock-level drivers. That matters because trading is likely to respond more directly to company developments, and the stock’s 1M return of +2.3% compared with peers at -0.7% shows that this stock-specific backdrop has recently been supportive.",
      "beta": "The current pattern looks established rather than fleeting because the stock has remained mostly company-driven through March and April and is still clearly company-driven in May. That consistency suggests the main influence on the shares has not recently shifted back toward broader market or sector moves.",
      "rolling_change": "The company-driven pattern is still in place, but today’s average volume is 35.9% below the 1M average, so the same stock-specific driver may be coming through a thinner trading day. That matters because price reactions can feel sharper even when the underlying driver has not changed."
    },
    "regime": {
      "overall": "Short expected duration points to a short-lived state rather than a durable market backdrop.",
      "current": "The stock is currently in a High Volatility state. Recent price moves are also being driven mainly by company-specific factors at 92.7%, which can keep day-to-day trading more reactive.",
      "transitions": "This looks more settled than fleeting because the typical run length is about 8.8 days. Even so, the picture is mixed because 1D average volume is 35.9% below the 1M average.",
      "trading_implications": "This state looks more persistent, with a typical run length of about 8.8 days."
    },
    "execution": {
      "overall": "Displayed liquidity looks mixed in the moment because the spread is 1 tick but the book is not balanced, with bid depth at 0.68x of ask depth. That matters because the headline liquidity picture is not being matched by equally firm buy-side support on screen.",
      "concern": "The clearest stress point is the thinner buy side, with displayed bid depth materially below ask depth. With 1D average volume also down 35.9% from the 1M average, immediate access can feel weaker if selling pressure builds.",
      "peer_context": "This book does not materially improve the broader standing because the 6M liquidity score of 85.1 already sits 1.8 points below the peer median of 86.9, and the current bid-light shape reinforces that middle-of-the-pack picture rather than offsetting it."
    },
    "trader_composition": {
      "overall": "Flow looks mixed by trade count and value, so the trading base appears balanced rather than clearly retail-led or institution-led.",
      "retail_heavy": "The split is mixed: retail-like trades make up 37.5% of trade count but only 2.9% of trade value, while institution-like trades are 21.2% of count and 53.8% of value. That matters because activity is broad in participation, but most value still comes from larger tickets.",
      "institutional_gap": "Institution-like trades account for just over one-fifth of trade count but more than half of trade value. That gap shows larger trades remain important to turnover even though they are not the majority of prints.",
      "peer_comparison": "The trader mix does not read as unusually one-sided, with count spread across smaller trades and value concentrated in institution-like trades. That points to a peer standing that is more balanced than extreme."
    },
    "price_moving": {
      "overall": "Price moves are being driven mainly by company-specific factors, with the current driver mix at 92.7%. That makes stock-level flow more important than broader market direction in explaining trading moves. The signal is reasonably clean because company-specific drivers dominate the tape. That matters because price formation is being shaped more by stock news and stock-specific demand than by market-wide moves.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity does not look material to the current trading picture. Short interest is low, and the stock’s 1M return of +2.3% compared with -0.7% for peers points to price strength rather than short pressure as the more visible backdrop.",
      "level": "Low short interest",
      "correlation": "Moderate negative - shorts somewhat predict drops",
      "trend": "Short positioning is falling, with shorts covering by 33% month on month. That reduces the chance that short activity is a separate source of trading pressure, so the broader picture is still better explained by recent price strength and day-to-day liquidity conditions.",
      "peaks": "5 notable peak days identified."
    },
    "intraday": {
      "overall": "Liquidity is available through the day rather than only at the edges, with 86.8% of trading in the continuous session and a concentration score of 0.233. That makes intraday access look steadier than a profile dominated by the open or close.",
      "hhi_interpretation": "Concentrated - liquidity clustered at open/close",
      "best_times": "The continuous session is the clearest source of liquidity, accounting for 86.8% of activity compared with 3.7% at the open and 8.3% at the close. That means access is most consistently available during the main part of the day.",
      "peer_ranking": "The intraday profile looks balanced, with most activity in continuous trading rather than concentrated at the auction windows. That supports a solid peer-relative read on dependability through the session."
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
        "CRPU",
        "AU8U"
      ],
      "scores": [
        85.09874326750449,
        86.89407540394973
      ],
      "is_target": [
        true,
        false
      ],
      "adv": [
        563782.0,
        1091829.5
      ],
      "total": 557
    },
    "market_comparison": {
      "sector_name": "REIT - Retail",
      "sector_count": 8,
      "market_count": 557,
      "company": {
        "volatility": 0.14277268494997897,
        "adv": 563782.0,
        "spread_pct": 0.0074601752697391775,
        "turnover_ratio": 0.0018508478481400114,
        "amihud": 5.507546014056164e-09,
        "trades": 343.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6860347258994315,
          "median": 0.46191279887179554,
          "min": 0.0,
          "max": 6.911407639226295,
          "p5": 0.1522061183277049,
          "p95": 2.016632696454801,
          "count": 557
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 2695561.7455153894,
          "median": 11696.25,
          "min": 0.0,
          "max": 254635655.60000002,
          "p5": 0.0,
          "p95": 11078198.399999978,
          "count": 557
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.09478966925407993,
          "median": 0.028695536770314077,
          "min": 0.00027162635129017947,
          "max": 1.267605633802817,
          "p5": 0.003617004750681945,
          "p95": 0.46604249856410274,
          "count": 555
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0035031383420457427,
          "median": 0.00027114093098598894,
          "min": 0.0,
          "max": 0.9475314745237624,
          "p5": 0.0,
          "p95": 0.007576566426022534,
          "count": 550
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 9.891200079673386e-06,
          "median": 1.6182000506942358e-07,
          "min": 0.0,
          "max": 0.0006620397444526588,
          "p5": 0.0,
          "p95": 3.657946492584105e-05,
          "count": 556
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 395.3536804308797,
          "median": 7.0,
          "min": 0.0,
          "max": 10264.5,
          "p5": 0.0,
          "p95": 2230.9999999999995,
          "count": 557
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.3528663764490485,
          "median": 0.16505633059767838,
          "min": 0.11512400085041198,
          "max": 1.3456590847918484,
          "p5": 0.12480104028526043,
          "p95": 1.070437669311535,
          "count": 8
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 8792658.600391846,
          "median": 636709.75,
          "min": 0.0,
          "max": 57398890.5,
          "p5": 12063.9225,
          "p95": 40965221.149999976,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.035539588651133505,
          "median": 0.008112710426645395,
          "min": 0.0042712193330027145,
          "max": 0.13333333333333333,
          "p5": 0.004342009735156364,
          "p95": 0.12485378567011218,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0023034815814018906,
          "median": 0.0011641626926714003,
          "min": 0.0,
          "max": 0.006833889104561173,
          "p5": 8.48750274404525e-05,
          "p95": 0.006632010905402327,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 9.339385842156139e-07,
          "median": 5.4829766483945154e-09,
          "min": 0.0,
          "max": 7.421899249138285e-06,
          "p5": 3.3048834462562446e-11,
          "p95": 4.835354891284271e-06,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1120.125,
          "median": 382.75,
          "min": 0.0,
          "max": 5579.0,
          "p5": 8.225000000000001,
          "p95": 4264.574999999998,
          "count": 8
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 1091829.5,
          "median": 1091829.5,
          "min": 1091829.5,
          "max": 1091829.5,
          "p5": 1091829.5,
          "p95": 1091829.5,
          "count": 1
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 737.0,
          "median": 737.0,
          "min": 737.0,
          "max": 737.0,
          "p5": 737.0,
          "p95": 737.0,
          "count": 1
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.16279639878880464,
          "median": 0.16279639878880464,
          "min": 0.16279639878880464,
          "max": 0.16279639878880464,
          "p5": 0.16279639878880464,
          "p95": 0.16279639878880464,
          "count": 1
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.006956955012793358,
          "median": 0.006956955012793358,
          "min": 0.006956955012793358,
          "max": 0.006956955012793358,
          "p5": 0.006956955012793358,
          "p95": 0.006956955012793358,
          "count": 1
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 1.003866068939852,
          "median": 1.003866068939852,
          "min": 1.003866068939852,
          "max": 1.003866068939852,
          "p5": 1.003866068939852,
          "p95": 1.003866068939852,
          "count": 1
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 5.458407282732866e-09,
          "median": 5.458407282732866e-09,
          "min": 5.458407282732866e-09,
          "max": 5.458407282732866e-09,
          "p5": 5.458407282732866e-09,
          "p95": 5.458407282732866e-09,
          "count": 1
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0011872829287083182,
          "median": 0.0011872829287083182,
          "min": 0.0011872829287083182,
          "max": 0.0011872829287083182,
          "p5": 0.0011872829287083182,
          "p95": 0.0011872829287083182,
          "count": 1
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": 0.022900763358778553,
        "market": 0.003970578726789187,
        "sector": 0.011731075694589421,
        "peers": -0.007462686567163979
      },
      {
        "horizon": "3M",
        "stock": -0.014705882352940791,
        "market": 0.008694085895560644,
        "sector": -0.015448111012800969,
        "peers": -0.14193548387096766
      },
      {
        "horizon": "6M",
        "stock": -0.021897810218978186,
        "market": 0.11493207451513299,
        "sector": -0.02029985641200871,
        "peers": -0.1739130434782613
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
      "share_market": 0.04336739601972121,
      "share_sector": 0.029668136089632556,
      "share_idio": 0.9269644678906463,
      "beta_market": 0.04630841605983668,
      "beta_sector": -0.04458701736201118,
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
            "median": 0.04336739601972121,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "4.3%",
            "display_range": null,
            "display_text": "4.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 4.3,
            "plain_english": "Market explains about 4.3% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.029668136089632556,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "3.0%",
            "display_range": null,
            "display_text": "3.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 3.0,
            "plain_english": "Sector explains about 3.0% of price moves in the current state."
          },
          "company_share": {
            "median": 0.9269644678906463,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "92.7%",
            "display_range": null,
            "display_text": "92.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 92.7,
            "plain_english": "Company-specific explains about 92.7% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 0.04630841605983668,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.05",
            "display_range": null,
            "display_text": "0.05",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Weak",
            "plain_english": "Weak market link: a 1% market move has lined up with about a 0.05% stock move in the same direction in this state.",
            "value_num": 0.05
          },
          "beta_stock_lag": {
            "median": -0.9832962070817265,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.98",
            "display_range": null,
            "display_text": "-0.98",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -0.98
          },
          "beta_sector": {
            "median": -0.04458701736201118,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.04",
            "display_range": null,
            "display_text": "-0.04",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Weak",
            "plain_english": "Weak sector link: a 1% sector move has lined up with about a 0.04% stock move in the opposite direction in this state.",
            "value_num": -0.04
          },
          "beta_market_lag": {
            "median": 0.04721655148759175,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.05",
            "display_range": null,
            "display_text": "0.05",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 0.05
          },
          "beta_sector_lag": {
            "median": 0.10031400864050473,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.10",
            "display_range": null,
            "display_text": "0.10",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 0.1
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
            "period_label": "2025-05-19 to 2025-05-30",
            "n_obs": 10,
            "partial_month": true,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4312865560579184,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "43.1%",
              "display_range": null,
              "display_text": "43.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
              "kind": "share_pct",
              "value_pct": 43.1,
              "plain_english": "Company-specific explains about 43.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.36830578667508923,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "36.8%",
                "display_range": null,
                "display_text": "36.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
                "kind": "share_pct",
                "value_pct": 36.8,
                "plain_english": "Market explains about 36.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.20040765726699225,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.0%",
                "display_range": null,
                "display_text": "20.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
                "kind": "share_pct",
                "value_pct": 20.0,
                "plain_english": "Sector explains about 20.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4312865560579184,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "43.1%",
                "display_range": null,
                "display_text": "43.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
                "kind": "share_pct",
                "value_pct": 43.1,
                "plain_english": "Company-specific explains about 43.1% of price moves in the current state."
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
              "median": 0.623404724325774,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "62.3%",
              "display_range": null,
              "display_text": "62.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 62.3,
              "plain_english": "Company-specific explains about 62.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.19863657260917883,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "19.9%",
                "display_range": null,
                "display_text": "19.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 19.9,
                "plain_english": "Market explains about 19.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1779587030650471,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "17.8%",
                "display_range": null,
                "display_text": "17.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 17.8,
                "plain_english": "Sector explains about 17.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.623404724325774,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "62.3%",
                "display_range": null,
                "display_text": "62.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 62.3,
                "plain_english": "Company-specific explains about 62.3% of price moves in the current state."
              }
            },
            "summary": "Jun: Still clearly company-driven."
          },
          {
            "month_key": "2025-07",
            "month_label": "July 2025",
            "month_short_label": "Jul",
            "period_label": "2025-07-01 to 2025-07-31",
            "n_obs": 23,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.6156446349712699,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.6%",
              "display_range": null,
              "display_text": "61.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
              "kind": "share_pct",
              "value_pct": 61.6,
              "plain_english": "Company-specific explains about 61.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.15572514972889706,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "15.6%",
                "display_range": null,
                "display_text": "15.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
                "kind": "share_pct",
                "value_pct": 15.6,
                "plain_english": "Market explains about 15.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.22863021529983313,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "22.9%",
                "display_range": null,
                "display_text": "22.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
                "kind": "share_pct",
                "value_pct": 22.9,
                "plain_english": "Sector explains about 22.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6156446349712699,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "61.6%",
                "display_range": null,
                "display_text": "61.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
                "kind": "share_pct",
                "value_pct": 61.6,
                "plain_english": "Company-specific explains about 61.6% of price moves in the current state."
              }
            },
            "summary": "Jul: Still clearly company-driven."
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
              "median": 0.4539874874240682,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.4%",
              "display_range": null,
              "display_text": "45.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 45.4,
              "plain_english": "Company-specific explains about 45.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3380759283078133,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "33.8%",
                "display_range": null,
                "display_text": "33.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 33.8,
                "plain_english": "Market explains about 33.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.20793658426811856,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.8%",
                "display_range": null,
                "display_text": "20.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 20.8,
                "plain_english": "Sector explains about 20.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4539874874240682,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "45.4%",
                "display_range": null,
                "display_text": "45.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 45.4,
                "plain_english": "Company-specific explains about 45.4% of price moves in the current state."
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
              "median": 0.47594380520699603,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.6%",
              "display_range": null,
              "display_text": "47.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 47.6,
              "plain_english": "Company-specific explains about 47.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3064722257863164,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "30.6%",
                "display_range": null,
                "display_text": "30.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 30.6,
                "plain_english": "Market explains about 30.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.21758396900668758,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "21.8%",
                "display_range": null,
                "display_text": "21.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 21.8,
                "plain_english": "Sector explains about 21.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.47594380520699603,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "47.6%",
                "display_range": null,
                "display_text": "47.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 47.6,
                "plain_english": "Company-specific explains about 47.6% of price moves in the current state."
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
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4828150565478932,
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
              "plain_english": "Company-specific explains about 48.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3142352514374536,
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
                "plain_english": "Market explains about 31.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2029496920146531,
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
                "plain_english": "Sector explains about 20.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4828150565478932,
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
                "plain_english": "Company-specific explains about 48.3% of price moves in the current state."
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
              "median": 0.4219146512462774,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.2%",
              "display_range": null,
              "display_text": "42.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 42.2,
              "plain_english": "Market explains about 42.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.4219146512462774,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "42.2%",
                "display_range": null,
                "display_text": "42.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 42.2,
                "plain_english": "Market explains about 42.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2775902288822491,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.8%",
                "display_range": null,
                "display_text": "27.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 27.8,
                "plain_english": "Sector explains about 27.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3004951198714734,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "30.0%",
                "display_range": null,
                "display_text": "30.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 30.0,
                "plain_english": "Company-specific explains about 30.0% of price moves in the current state."
              }
            },
            "summary": "Nov: More mixed, though market-driven still has the largest share."
          },
          {
            "month_key": "2025-12",
            "month_label": "December 2025",
            "month_short_label": "Dec",
            "period_label": "2025-12-01 to 2025-12-31",
            "n_obs": 22,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.7687417314818247,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "76.9%",
              "display_range": null,
              "display_text": "76.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 76.9,
              "plain_english": "Company-specific explains about 76.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.12378967681730305,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "12.4%",
                "display_range": null,
                "display_text": "12.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 12.4,
                "plain_english": "Market explains about 12.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1074685917008723,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "10.7%",
                "display_range": null,
                "display_text": "10.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 10.7,
                "plain_english": "Sector explains about 10.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.7687417314818247,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "76.9%",
                "display_range": null,
                "display_text": "76.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 76.9,
                "plain_english": "Company-specific explains about 76.9% of price moves in the current state."
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
              "median": 0.634478433420432,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "63.4%",
              "display_range": null,
              "display_text": "63.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 63.4,
              "plain_english": "Company-specific explains about 63.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.20419511848433777,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.4%",
                "display_range": null,
                "display_text": "20.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 20.4,
                "plain_english": "Market explains about 20.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.16132644809523028,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "16.1%",
                "display_range": null,
                "display_text": "16.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 16.1,
                "plain_english": "Sector explains about 16.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.634478433420432,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "63.4%",
                "display_range": null,
                "display_text": "63.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 63.4,
                "plain_english": "Company-specific explains about 63.4% of price moves in the current state."
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
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.8241639016384482,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "82.4%",
              "display_range": null,
              "display_text": "82.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 82.4,
              "plain_english": "Company-specific explains about 82.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.12970195459975553,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "13.0%",
                "display_range": null,
                "display_text": "13.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 13.0,
                "plain_english": "Market explains about 13.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.04613414376179617,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "4.6%",
                "display_range": null,
                "display_text": "4.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 4.6,
                "plain_english": "Sector explains about 4.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.8241639016384482,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "82.4%",
                "display_range": null,
                "display_text": "82.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 82.4,
                "plain_english": "Company-specific explains about 82.4% of price moves in the current state."
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
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4594963935612947,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.9%",
              "display_range": null,
              "display_text": "45.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 45.9,
              "plain_english": "Company-specific explains about 45.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.23035600504921894,
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
                "median": 0.31014760138948644,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "31.0%",
                "display_range": null,
                "display_text": "31.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 31.0,
                "plain_english": "Sector explains about 31.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4594963935612947,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "45.9%",
                "display_range": null,
                "display_text": "45.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 45.9,
                "plain_english": "Company-specific explains about 45.9% of price moves in the current state."
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
              "median": 0.47906534683171254,
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
                "median": 0.2381469594055639,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "23.8%",
                "display_range": null,
                "display_text": "23.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 23.8,
                "plain_english": "Market explains about 23.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.28278769376272356,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "28.3%",
                "display_range": null,
                "display_text": "28.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 28.3,
                "plain_english": "Sector explains about 28.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.47906534683171254,
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
            "summary": "Apr: Mostly company-driven."
          },
          {
            "month_key": "2026-05",
            "month_label": "May 2026",
            "month_short_label": "May",
            "period_label": "2026-05-04 to 2026-05-13",
            "n_obs": 8,
            "partial_month": true,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.9999999999999983,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "100.0%",
              "display_range": null,
              "display_text": "100.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
              "kind": "share_pct",
              "value_pct": 100.0,
              "plain_english": "Company-specific explains about 100.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 1.256560814141949e-15,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "0.0%",
                "display_range": null,
                "display_text": "0.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
                "kind": "share_pct",
                "value_pct": 0.0,
                "plain_english": "Market explains about 0.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 3.1353825135661616e-16,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "0.0%",
                "display_range": null,
                "display_text": "0.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
                "kind": "share_pct",
                "value_pct": 0.0,
                "plain_english": "Sector explains about 0.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.9999999999999983,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "100.0%",
                "display_range": null,
                "display_text": "100.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
                "kind": "share_pct",
                "value_pct": 100.0,
                "plain_english": "Company-specific explains about 100.0% of price moves in the current state."
              }
            },
            "summary": "May: Still clearly company-driven."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5060240963855421,
            "expected_duration_days": 9.0,
            "current_probability": 0.0,
            "n_days_effective": 126.0,
            "volatility": {
              "median": 0.0054695600691849,
              "low": 0.0054695600691849,
              "high": 0.0054695600691849
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": 0.0
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4939759036144578,
            "expected_duration_days": 8.785714285714286,
            "current_probability": 1.0,
            "n_days_effective": 123.0,
            "volatility": {
              "median": 0.010658093531380973,
              "low": 0.010658093531380973,
              "high": 0.010658093531380973
            },
            "volatility_label": "High Volatility",
            "current_probability_display": null
          }
        ],
        "transitions": {
          "mean": [
            [
              0.8888888888888888,
              0.1111111111111111
            ],
            [
              0.10655737704918032,
              0.8934426229508197
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              112.0,
              14.0
            ],
            [
              13.0,
              109.0
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
          "market_link_display": "0.05",
          "sector_link_display": "-0.04",
          "market_link_explainer": "Weak market link. A 1% market move has lined up with about a 0.05% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "Weak sector link. A 1% sector move has lined up with about a 0.04% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "-0.98",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "High Volatility",
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "driver_share_pct": 92.7,
          "driver_share_display": "92.7%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 251 trading days relative to the 252-day target.",
          "history_days": 251,
          "history_limited": true,
          "volatility_label": "High Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.8934426229508197,
          "effective_days": 123.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 8.8 days.",
          "expected_duration_days": 8.8
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
          "period_label": "2025-05-19 to 2025-05-30",
          "n_obs": 10,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "May: More mixed, though company-driven still has the largest share.",
          "share_market": 0.36830578667508923,
          "share_sector": 0.20040765726699225,
          "share_company": 0.4312865560579184,
          "share_market_display": "36.8%",
          "share_sector_display": "20.0%",
          "share_company_display": "43.1%",
          "dominant_share_display": "43.1%"
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
          "share_market": 0.19863657260917883,
          "share_sector": 0.1779587030650471,
          "share_company": 0.623404724325774,
          "share_market_display": "19.9%",
          "share_sector_display": "17.8%",
          "share_company_display": "62.3%",
          "dominant_share_display": "62.3%"
        },
        {
          "month_key": "2025-07",
          "month_label": "July 2025",
          "month_short_label": "Jul",
          "period_label": "2025-07-01 to 2025-07-31",
          "n_obs": 23,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Jul: Still clearly company-driven.",
          "share_market": 0.15572514972889706,
          "share_sector": 0.22863021529983313,
          "share_company": 0.6156446349712699,
          "share_market_display": "15.6%",
          "share_sector_display": "22.9%",
          "share_company_display": "61.6%",
          "dominant_share_display": "61.6%"
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
          "share_market": 0.3380759283078133,
          "share_sector": 0.20793658426811856,
          "share_company": 0.4539874874240682,
          "share_market_display": "33.8%",
          "share_sector_display": "20.8%",
          "share_company_display": "45.4%",
          "dominant_share_display": "45.4%"
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
          "share_market": 0.3064722257863164,
          "share_sector": 0.21758396900668758,
          "share_company": 0.47594380520699603,
          "share_market_display": "30.6%",
          "share_sector_display": "21.8%",
          "share_company_display": "47.6%",
          "dominant_share_display": "47.6%"
        },
        {
          "month_key": "2025-10",
          "month_label": "October 2025",
          "month_short_label": "Oct",
          "period_label": "2025-10-01 to 2025-10-31",
          "n_obs": 22,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Oct: Mostly company-driven.",
          "share_market": 0.3142352514374536,
          "share_sector": 0.2029496920146531,
          "share_company": 0.4828150565478932,
          "share_market_display": "31.4%",
          "share_sector_display": "20.3%",
          "share_company_display": "48.3%",
          "dominant_share_display": "48.3%"
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
          "summary": "Nov: More mixed, though market-driven still has the largest share.",
          "share_market": 0.4219146512462774,
          "share_sector": 0.2775902288822491,
          "share_company": 0.3004951198714734,
          "share_market_display": "42.2%",
          "share_sector_display": "27.8%",
          "share_company_display": "30.0%",
          "dominant_share_display": "42.2%"
        },
        {
          "month_key": "2025-12",
          "month_label": "December 2025",
          "month_short_label": "Dec",
          "period_label": "2025-12-01 to 2025-12-31",
          "n_obs": 22,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Dec: Still clearly company-driven.",
          "share_market": 0.12378967681730305,
          "share_sector": 0.1074685917008723,
          "share_company": 0.7687417314818247,
          "share_market_display": "12.4%",
          "share_sector_display": "10.7%",
          "share_company_display": "76.9%",
          "dominant_share_display": "76.9%"
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
          "share_market": 0.20419511848433777,
          "share_sector": 0.16132644809523028,
          "share_company": 0.634478433420432,
          "share_market_display": "20.4%",
          "share_sector_display": "16.1%",
          "share_company_display": "63.4%",
          "dominant_share_display": "63.4%"
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
          "summary": "Feb: Still clearly company-driven.",
          "share_market": 0.12970195459975553,
          "share_sector": 0.04613414376179617,
          "share_company": 0.8241639016384482,
          "share_market_display": "13.0%",
          "share_sector_display": "4.6%",
          "share_company_display": "82.4%",
          "dominant_share_display": "82.4%"
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
          "share_market": 0.23035600504921894,
          "share_sector": 0.31014760138948644,
          "share_company": 0.4594963935612947,
          "share_market_display": "23.0%",
          "share_sector_display": "31.0%",
          "share_company_display": "45.9%",
          "dominant_share_display": "45.9%"
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
          "share_market": 0.2381469594055639,
          "share_sector": 0.28278769376272356,
          "share_company": 0.47906534683171254,
          "share_market_display": "23.8%",
          "share_sector_display": "28.3%",
          "share_company_display": "47.9%",
          "dominant_share_display": "47.9%"
        },
        {
          "month_key": "2026-05",
          "month_label": "May 2026",
          "month_short_label": "May",
          "period_label": "2026-05-04 to 2026-05-13",
          "n_obs": 8,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "May: Still clearly company-driven.",
          "share_market": 1.256560814141949e-15,
          "share_sector": 3.1353825135661616e-16,
          "share_company": 0.9999999999999983,
          "share_market_display": "0.0%",
          "share_sector_display": "0.0%",
          "share_company_display": "100.0%",
          "dominant_share_display": "100.0%"
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
          0.5060240963855421,
          0.4939759036144578
        ],
        "current_regime": 1,
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5060240963855421,
            "expected_duration_days": 9.0,
            "current_probability": 0.0,
            "n_days_effective": 126.0,
            "volatility": {
              "median": 0.0054695600691849,
              "low": 0.0054695600691849,
              "high": 0.0054695600691849
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4939759036144578,
            "expected_duration_days": 8.785714285714286,
            "current_probability": 1.0,
            "n_days_effective": 123.0,
            "volatility": {
              "median": 0.010658093531380973,
              "low": 0.010658093531380973,
              "high": 0.010658093531380973
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.8888888888888888,
            0.1111111111111111
          ],
          [
            0.10655737704918032,
            0.8934426229508197
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 0.665,
          "quantity": 72600.0,
          "value": 48279.0
        },
        {
          "level": 2,
          "price": 0.66,
          "quantity": 1254300.0,
          "value": 827838.0
        },
        {
          "level": 3,
          "price": 0.655,
          "quantity": 435600.0,
          "value": 285318.0
        },
        {
          "level": 4,
          "price": 0.65,
          "quantity": 372600.0,
          "value": 242190.0
        },
        {
          "level": 5,
          "price": 0.645,
          "quantity": 82500.0,
          "value": 53212.5
        },
        {
          "level": 6,
          "price": 0.64,
          "quantity": 153200.0,
          "value": 98048.0
        },
        {
          "level": 7,
          "price": 0.635,
          "quantity": 104400.0,
          "value": 66294.0
        },
        {
          "level": 8,
          "price": 0.63,
          "quantity": 347900.0,
          "value": 219177.0
        },
        {
          "level": 9,
          "price": 0.625,
          "quantity": 116400.0,
          "value": 72750.0
        },
        {
          "level": 10,
          "price": 0.62,
          "quantity": 74200.0,
          "value": 46004.0
        },
        {
          "level": 11,
          "price": 0.615,
          "quantity": 7600.0,
          "value": 4674.0
        },
        {
          "level": 12,
          "price": 0.61,
          "quantity": 63800.0,
          "value": 38918.0
        },
        {
          "level": 13,
          "price": 0.605,
          "quantity": 5000.0,
          "value": 3025.0
        },
        {
          "level": 14,
          "price": 0.6,
          "quantity": 31800.0,
          "value": 19080.0
        },
        {
          "level": 15,
          "price": 0.59,
          "quantity": 6500.0,
          "value": 3835.0
        },
        {
          "level": 16,
          "price": 0.58,
          "quantity": 400.0,
          "value": 231.99999999999997
        },
        {
          "level": 17,
          "price": 0.57,
          "quantity": 23000.0,
          "value": 13109.999999999998
        },
        {
          "level": 18,
          "price": 0.565,
          "quantity": 10500.0,
          "value": 5932.499999999999
        },
        {
          "level": 19,
          "price": 0.55,
          "quantity": 3000.0,
          "value": 1650.0000000000002
        },
        {
          "level": 20,
          "price": 0.535,
          "quantity": 1000.0,
          "value": 535.0
        },
        {
          "level": 21,
          "price": 0.52,
          "quantity": 3000.0,
          "value": 1560.0
        },
        {
          "level": 22,
          "price": 0.515,
          "quantity": 7000.0,
          "value": 3605.0
        },
        {
          "level": 23,
          "price": 0.51,
          "quantity": 6000.0,
          "value": 3060.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.67,
          "quantity": 732200.0,
          "value": 490574.00000000006
        },
        {
          "level": 2,
          "price": 0.675,
          "quantity": 291900.0,
          "value": 197032.5
        },
        {
          "level": 3,
          "price": 0.68,
          "quantity": 686100.0,
          "value": 466548.00000000006
        },
        {
          "level": 4,
          "price": 0.685,
          "quantity": 429800.0,
          "value": 294413.0
        },
        {
          "level": 5,
          "price": 0.69,
          "quantity": 1215200.0,
          "value": 838487.9999999999
        },
        {
          "level": 6,
          "price": 0.695,
          "quantity": 221600.0,
          "value": 154012.0
        },
        {
          "level": 7,
          "price": 0.7,
          "quantity": 152400.0,
          "value": 106680.0
        },
        {
          "level": 8,
          "price": 0.705,
          "quantity": 101000.0,
          "value": 71205.0
        },
        {
          "level": 9,
          "price": 0.71,
          "quantity": 46300.0,
          "value": 32873.0
        },
        {
          "level": 10,
          "price": 0.715,
          "quantity": 22100.0,
          "value": 15801.5
        },
        {
          "level": 11,
          "price": 0.72,
          "quantity": 25200.0,
          "value": 18144.0
        },
        {
          "level": 12,
          "price": 0.73,
          "quantity": 200.0,
          "value": 146.0
        },
        {
          "level": 13,
          "price": 0.75,
          "quantity": 10000.0,
          "value": 7500.0
        },
        {
          "level": 14,
          "price": 0.755,
          "quantity": 26000.0,
          "value": 19630.0
        },
        {
          "level": 15,
          "price": 0.765,
          "quantity": 500.0,
          "value": 382.5
        },
        {
          "level": 16,
          "price": 0.775,
          "quantity": 12400.0,
          "value": 9610.0
        },
        {
          "level": 17,
          "price": 0.8,
          "quantity": 231700.0,
          "value": 185360.0
        },
        {
          "level": 18,
          "price": 0.82,
          "quantity": 3400.0,
          "value": 2788.0
        },
        {
          "level": 19,
          "price": 0.85,
          "quantity": 150000.0,
          "value": 127500.0
        },
        {
          "level": 20,
          "price": 0.88,
          "quantity": 12000.0,
          "value": 10560.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-05-13 08:59:58.292400000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 0.6675,
        "spread_pct": 0.007490636704119858,
        "spread_ticks": 1.0,
        "tick_size": 0.005,
        "displayed_levels_per_side": 100,
        "bid_depth_notional_displayed": 2058327.0,
        "ask_depth_notional_displayed": 3049247.5,
        "bid_depth_notional_top10": 2058327.0,
        "ask_depth_notional_top10": 3049247.5,
        "bid_ask_depth_ratio": 0.675
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 366,
        "history_limited": false,
        "trade_days_used": 255,
        "n_trades_used": 101232,
        "first_trade_date": "2025-05-13",
        "last_trade_date": "2026-05-13",
        "window_label": "May 13, 2025 to May 13, 2026",
        "window_short_label": "May 13, 2025 to May 13, 2026",
        "trade_days_label": "255 trading days",
        "trade_count_label": "101,232 trades",
        "window_detail_label": "255 trading days • 101,232 trades",
        "history_note": "Trade-size percentiles use May 13, 2025 to May 13, 2026 history (255 trading days • 101,232 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 3400.0,
            "impact_pct": -0.003745,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.17,
            "pct_of_adv": 0.65
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 7910.0,
            "impact_pct": -0.003745,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.38,
            "pct_of_adv": 1.52
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 339076.75,
            "impact_pct": -0.010176000000000001,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 16.47,
            "pct_of_adv": 65.26
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-05-13",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "8137223323647089664",
            "timestamp": "2026-05-12 22:59:01.095300000",
            "local_timestamp": "2026-05-13 06:59:01",
            "posted_price": 0.69,
            "size_shares": 1000000.0,
            "notional": 690000.0,
            "impact_pct": -0.010716000000000002,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 33.52,
            "price_vs_mid_pct": 3.371,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "8148306400856177664",
            "timestamp": "2026-05-13 02:37:46.604700000",
            "local_timestamp": "2026-05-13 10:37:46",
            "posted_price": 0.67,
            "size_shares": 457700.0,
            "notional": 306659.0,
            "impact_pct": -0.010064,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 14.9,
            "price_vs_mid_pct": 0.375,
            "executed_event_count": 0,
            "event_count": 3
          },
          {
            "rank": 3,
            "order_id": "8148306400855046144",
            "timestamp": "2026-05-13 00:30:00.127900000",
            "local_timestamp": "2026-05-13 08:30:00",
            "posted_price": 0.68,
            "size_shares": 300000.0,
            "notional": 204000.0,
            "impact_pct": -0.009473,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 9.91,
            "price_vs_mid_pct": 1.873,
            "executed_event_count": 0,
            "event_count": 8
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-05-13",
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
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2072063.0,
            "ask_depth_notional": 2664195.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "09:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2071996.5,
            "ask_depth_notional": 2703544.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2085162.5,
            "ask_depth_notional": 2699868.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2124114.5,
            "ask_depth_notional": 3036466.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2129263.0,
            "ask_depth_notional": 3094622.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 1978690.0,
            "ask_depth_notional": 3117149.5,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2005769.0,
            "ask_depth_notional": 3162898.5,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2008079.0,
            "ask_depth_notional": 3154918.5,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2030585.0,
            "ask_depth_notional": 3150795.5,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2039262.0,
            "ask_depth_notional": 3174270.0,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2025598.0,
            "ask_depth_notional": 3168418.0,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2016228.0,
            "ask_depth_notional": 3156248.5,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "16:00",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2025380.0,
            "ask_depth_notional": 3161386.5,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2058327.0,
            "ask_depth_notional": 3049247.5,
            "mid_price": 0.6675
          }
        ],
        "summary": {
          "median_spread_pct": 0.00754716981132076,
          "median_spread_ticks": 1.0000000000000009,
          "median_bid_depth_notional": 2034923.5,
          "median_ask_depth_notional": 3133972.5,
          "tightest_bucket": "09:00",
          "widest_bucket": "11:30",
          "deepest_bid_bucket": "11:00",
          "thinnest_bid_bucket": "11:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 9.6,
      "peers": [
        {
          "ticker": "AU8U",
          "pct": 135.0
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 243,
          "n_runs": 152,
          "n_trade_days": 1,
          "first_trade_date": "2026-05-13",
          "last_trade_date": "2026-05-13",
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
            "retail_pct": 0.37448559670781895,
            "mixed_pct": 0.26337448559670784,
            "instit_pct": 0.24279835390946503,
            "ambiguous_pct": 0.11934156378600823,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.11934156378600823,
            "retail_qty_pct": 0.02454920703888768,
            "mixed_qty_pct": 0.0545296545731045,
            "instit_qty_pct": 0.5405170540951554,
            "ambiguous_qty_pct": 0.3804040842928525,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3804040842928525,
            "retail_notional_pct": 0.02450186407684475,
            "mixed_notional_pct": 0.0546654223143319,
            "instit_notional_pct": 0.5404613365455494,
            "ambiguous_notional_pct": 0.380371377063274,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.380371377063274
          },
          "run_composition": {
            "retail_pct": 0.5986842105263158,
            "mixed_pct": 0.2631578947368421,
            "instit_pct": 0.046052631578947366,
            "ambiguous_pct": 0.09210526315789473,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.09210526315789473,
            "retail_notional_pct": 0.02450186407684475,
            "mixed_notional_pct": 0.0546654223143319,
            "instit_notional_pct": 0.5404613365455494,
            "unclear_notional_pct": 0.380371377063274
          },
          "counts": {
            "trades": {
              "retail": 91,
              "mixed": 64,
              "institutional": 59,
              "ambiguous": 29,
              "unobservable": 0,
              "unclear": 29
            },
            "runs": {
              "retail": 91,
              "mixed": 40,
              "institutional": 7,
              "ambiguous": 14,
              "unobservable": 0,
              "unclear": 14
            }
          },
          "confidence": {
            "high": 0.6447368421052632,
            "medium": 0.2631578947368421,
            "low": 0.09210526315789473,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 98,
            "medium": 40,
            "low": 14,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.6172839506172839,
            "medium": 0.26337448559670784,
            "low": 0.11934156378600823,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 150,
            "medium": 64,
            "low": 29,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8717105263157893,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.09210526315789473,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5986842105263158,
          "dominance_gap": 0.33552631578947373,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 243
            },
            "d2_information": {
              "UNOBSERVABLE": 243
            },
            "d3_urgency": {
              "UNOBSERVABLE": 152
            },
            "participant_confidence": {
              "HIGH": 98,
              "MEDIUM": 40,
              "LOW": 14
            }
          },
          "trade_size": {
            "avg": 1258.9115226337449,
            "median": 66.5
          },
          "run_size": {
            "avg": 2012.6019736842106,
            "median": 132.0,
            "avg_length": 1.2171052631578947
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-258",
              "timestamp": "2026-05-13T08:59:58.292400",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47701,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-257",
              "timestamp": "2026-05-13T08:59:30.029800",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47700,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-256",
              "timestamp": "2026-05-13T08:59:16.888300",
              "price": 0.67,
              "size": 2000.0,
              "notional": 1340.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47699,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-255",
              "timestamp": "2026-05-13T08:59:10.391300",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47699,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-254",
              "timestamp": "2026-05-13T08:59:00.779400",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47699,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-253",
              "timestamp": "2026-05-13T08:59:00.352800",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47699,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-252",
              "timestamp": "2026-05-13T08:58:30.268800",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47698,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-251",
              "timestamp": "2026-05-13T08:58:01.521900",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47697,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-250",
              "timestamp": "2026-05-13T08:57:47.141100",
              "price": 0.67,
              "size": 1500.0,
              "notional": 1005.0000000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47696,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-249",
              "timestamp": "2026-05-13T08:57:38.245700",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47696,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-248",
              "timestamp": "2026-05-13T08:57:30.468200",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47695,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-247",
              "timestamp": "2026-05-13T08:57:03.120100",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47694,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-246",
              "timestamp": "2026-05-13T08:56:53.445300",
              "price": 0.67,
              "size": 1100.0,
              "notional": 737.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47693,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-245",
              "timestamp": "2026-05-13T08:56:01.299500",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-244",
              "timestamp": "2026-05-13T08:55:30.490100",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47691,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-243",
              "timestamp": "2026-05-13T08:55:24.881400",
              "price": 0.67,
              "size": 1500.0,
              "notional": 1005.0000000000001,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47690,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-242",
              "timestamp": "2026-05-13T08:55:03.168200",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47689,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-241",
              "timestamp": "2026-05-13T08:54:40.533400",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47688,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-240",
              "timestamp": "2026-05-13T08:54:32.612400",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47687,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-239",
              "timestamp": "2026-05-13T08:54:05.453500",
              "price": 0.67,
              "size": 1500.0,
              "notional": 1005.0000000000001,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47686,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-238",
              "timestamp": "2026-05-13T08:54:03.856700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47685,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-237",
              "timestamp": "2026-05-13T08:53:31.342300",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47684,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-236",
              "timestamp": "2026-05-13T08:53:05.184300",
              "price": 0.67,
              "size": 1400.0,
              "notional": 938.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47683,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-235",
              "timestamp": "2026-05-13T08:52:04.415000",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47682,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-234",
              "timestamp": "2026-05-13T08:52:04.354600",
              "price": 0.67,
              "size": 1100.0,
              "notional": 737.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47681,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-233",
              "timestamp": "2026-05-13T08:51:06.779700",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47680,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-232",
              "timestamp": "2026-05-13T08:51:01.806600",
              "price": 0.67,
              "size": 1100.0,
              "notional": 737.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47679,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-231",
              "timestamp": "2026-05-13T08:50:11.239200",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47678,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-230",
              "timestamp": "2026-05-13T08:49:39.311300",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47677,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-229",
              "timestamp": "2026-05-13T08:49:33.223300",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47677,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "CRPU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.37448559670781895,
              "mixed_pct": 0.26337448559670784,
              "instit_pct": 0.24279835390946503,
              "ambiguous_pct": 0.11934156378600823,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.11934156378600823,
              "retail_qty_pct": 0.02454920703888768,
              "mixed_qty_pct": 0.0545296545731045,
              "instit_qty_pct": 0.5405170540951554,
              "ambiguous_qty_pct": 0.3804040842928525,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.3804040842928525,
              "retail_notional_pct": 0.02450186407684475,
              "mixed_notional_pct": 0.0546654223143319,
              "instit_notional_pct": 0.5404613365455494,
              "ambiguous_notional_pct": 0.380371377063274,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.380371377063274,
              "run_retail_pct": 0.5986842105263158,
              "run_mixed_pct": 0.2631578947368421,
              "run_instit_pct": 0.046052631578947366,
              "run_unclear_pct": 0.09210526315789473,
              "avg_trade_size": 1258.9115226337449,
              "avg_run_notional": 2012.6019736842106,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6447368421052632,
              "medium_confidence_pct": 0.2631578947368421,
              "low_confidence_pct": 0.09210526315789473,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.8717105263157893,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AU8U",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.5,
              "mixed_pct": 0.02727272727272727,
              "instit_pct": 0.4727272727272727,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0,
              "retail_qty_pct": 0.24259110933119743,
              "mixed_qty_pct": 0.0025030036043251903,
              "instit_qty_pct": 0.7549058870644774,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0,
              "retail_notional_pct": 0.24242859397309124,
              "mixed_notional_pct": 0.0025003047784017945,
              "instit_notional_pct": 0.755071101248507,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0,
              "run_retail_pct": 0.7995337995337995,
              "run_mixed_pct": 0.023310023310023312,
              "run_instit_pct": 0.17715617715617715,
              "run_unclear_pct": 0.0,
              "avg_trade_size": 868.2058441558441,
              "avg_run_notional": 1558.3181818181818,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.6783216783216783,
              "low_confidence_pct": 0.32167832167832167,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.4811188811188812,
              "observable_run_pct": 1.0,
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
          "n_trades": 7517,
          "n_runs": 4244,
          "n_trade_days": 21,
          "first_trade_date": "2026-04-14",
          "last_trade_date": "2026-05-13",
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
            "retail_pct": 0.33909804443261937,
            "mixed_pct": 0.28442197685246773,
            "instit_pct": 0.22375947851536518,
            "ambiguous_pct": 0.1527205001995477,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1527205001995477,
            "retail_qty_pct": 0.02793383097306738,
            "mixed_qty_pct": 0.1758073666996696,
            "instit_qty_pct": 0.5303645526248456,
            "ambiguous_qty_pct": 0.2658942497024174,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2658942497024174,
            "retail_notional_pct": 0.027933083453347708,
            "mixed_notional_pct": 0.17568660231783245,
            "instit_notional_pct": 0.5305774049706571,
            "ambiguous_notional_pct": 0.26580290925816275,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.26580290925816275
          },
          "run_composition": {
            "retail_pct": 0.590009425070688,
            "mixed_pct": 0.25989632422243164,
            "instit_pct": 0.054429783223374176,
            "ambiguous_pct": 0.09566446748350613,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.09566446748350613,
            "retail_notional_pct": 0.027933083453347708,
            "mixed_notional_pct": 0.17568660231783245,
            "instit_notional_pct": 0.5305774049706571,
            "unclear_notional_pct": 0.26580290925816275
          },
          "counts": {
            "trades": {
              "retail": 2549,
              "mixed": 2138,
              "institutional": 1682,
              "ambiguous": 1148,
              "unobservable": 0,
              "unclear": 1148
            },
            "runs": {
              "retail": 2504,
              "mixed": 1103,
              "institutional": 231,
              "ambiguous": 406,
              "unobservable": 0,
              "unclear": 406
            }
          },
          "confidence": {
            "high": 0.6444392082940622,
            "medium": 0.25989632422243164,
            "low": 0.09566446748350613,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 2735,
            "medium": 1103,
            "low": 406,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5628575229479845,
            "medium": 0.28442197685246773,
            "low": 0.1527205001995477,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 4231,
            "medium": 2138,
            "low": 1148,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8790292177191328,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.09566446748350613,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.590009425070688,
          "dominance_gap": 0.33011310084825635,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 7160,
              "WALK_BOOK": 353,
              "UNOBSERVABLE": 4
            },
            "d2_information": {
              "UNOBSERVABLE": 7517
            },
            "d3_urgency": {
              "UNOBSERVABLE": 4244
            },
            "participant_confidence": {
              "HIGH": 2735,
              "MEDIUM": 1103,
              "LOW": 406
            }
          },
          "trade_size": {
            "avg": 1588.754356791273,
            "median": 132.0
          },
          "run_size": {
            "avg": 2814.011899151744,
            "median": 133.0,
            "avg_length": 1.3847785108388313
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-258",
              "timestamp": "2026-05-13T08:59:58.292400",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47701,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-257",
              "timestamp": "2026-05-13T08:59:30.029800",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47700,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-256",
              "timestamp": "2026-05-13T08:59:16.888300",
              "price": 0.67,
              "size": 2000.0,
              "notional": 1340.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47699,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-255",
              "timestamp": "2026-05-13T08:59:10.391300",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47699,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-254",
              "timestamp": "2026-05-13T08:59:00.779400",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47699,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-253",
              "timestamp": "2026-05-13T08:59:00.352800",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47699,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-252",
              "timestamp": "2026-05-13T08:58:30.268800",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47698,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-251",
              "timestamp": "2026-05-13T08:58:01.521900",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47697,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-250",
              "timestamp": "2026-05-13T08:57:47.141100",
              "price": 0.67,
              "size": 1500.0,
              "notional": 1005.0000000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47696,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-249",
              "timestamp": "2026-05-13T08:57:38.245700",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47696,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-248",
              "timestamp": "2026-05-13T08:57:30.468200",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47695,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-247",
              "timestamp": "2026-05-13T08:57:03.120100",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47694,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-246",
              "timestamp": "2026-05-13T08:56:53.445300",
              "price": 0.67,
              "size": 1100.0,
              "notional": 737.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47693,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-245",
              "timestamp": "2026-05-13T08:56:01.299500",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-244",
              "timestamp": "2026-05-13T08:55:30.490100",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47691,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-243",
              "timestamp": "2026-05-13T08:55:24.881400",
              "price": 0.67,
              "size": 1500.0,
              "notional": 1005.0000000000001,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47690,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-242",
              "timestamp": "2026-05-13T08:55:03.168200",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47689,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-241",
              "timestamp": "2026-05-13T08:54:40.533400",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47688,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-240",
              "timestamp": "2026-05-13T08:54:32.612400",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47687,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-239",
              "timestamp": "2026-05-13T08:54:05.453500",
              "price": 0.67,
              "size": 1500.0,
              "notional": 1005.0000000000001,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47686,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-238",
              "timestamp": "2026-05-13T08:54:03.856700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47685,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-237",
              "timestamp": "2026-05-13T08:53:31.342300",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47684,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-236",
              "timestamp": "2026-05-13T08:53:05.184300",
              "price": 0.67,
              "size": 1400.0,
              "notional": 938.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47683,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-235",
              "timestamp": "2026-05-13T08:52:04.415000",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47682,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-234",
              "timestamp": "2026-05-13T08:52:04.354600",
              "price": 0.67,
              "size": 1100.0,
              "notional": 737.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47681,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-233",
              "timestamp": "2026-05-13T08:51:06.779700",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47680,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-232",
              "timestamp": "2026-05-13T08:51:01.806600",
              "price": 0.67,
              "size": 1100.0,
              "notional": 737.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47679,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-231",
              "timestamp": "2026-05-13T08:50:11.239200",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47678,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-230",
              "timestamp": "2026-05-13T08:49:39.311300",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47677,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-229",
              "timestamp": "2026-05-13T08:49:33.223300",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47677,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "CRPU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.33909804443261937,
              "mixed_pct": 0.28442197685246773,
              "instit_pct": 0.22375947851536518,
              "ambiguous_pct": 0.1527205001995477,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.1527205001995477,
              "retail_qty_pct": 0.02793383097306738,
              "mixed_qty_pct": 0.1758073666996696,
              "instit_qty_pct": 0.5303645526248456,
              "ambiguous_qty_pct": 0.2658942497024174,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.2658942497024174,
              "retail_notional_pct": 0.027933083453347708,
              "mixed_notional_pct": 0.17568660231783245,
              "instit_notional_pct": 0.5305774049706571,
              "ambiguous_notional_pct": 0.26580290925816275,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.26580290925816275,
              "run_retail_pct": 0.590009425070688,
              "run_mixed_pct": 0.25989632422243164,
              "run_instit_pct": 0.054429783223374176,
              "run_unclear_pct": 0.09566446748350613,
              "avg_trade_size": 1588.754356791273,
              "avg_run_notional": 2814.011899151744,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6444392082940622,
              "medium_confidence_pct": 0.25989632422243164,
              "low_confidence_pct": 0.09566446748350613,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.8790292177191328,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AU8U",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.5190596360738478,
              "mixed_pct": 0.033138531013414796,
              "instit_pct": 0.44554389693186347,
              "ambiguous_pct": 0.002257935980873954,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.002257935980873954,
              "retail_qty_pct": 0.22682838915886064,
              "mixed_qty_pct": 0.004920289571852296,
              "instit_qty_pct": 0.768103669155039,
              "ambiguous_qty_pct": 0.00014765211424799476,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.00014765211424799476,
              "retail_notional_pct": 0.22717984177204725,
              "mixed_notional_pct": 0.004930340602750007,
              "instit_notional_pct": 0.7677404629820568,
              "ambiguous_notional_pct": 0.00014935464314594303,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.00014935464314594303,
              "run_retail_pct": 0.8004164839982464,
              "run_mixed_pct": 0.025865848312143797,
              "run_instit_pct": 0.1718544498027181,
              "run_unclear_pct": 0.001863217886891714,
              "avg_trade_size": 1034.2456169478019,
              "avg_run_notional": 1706.8906729504604,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.7289565979833407,
              "low_confidence_pct": 0.2710434020166594,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.4806115738711092,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            }
          ]
        },
        "3m": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 24024,
          "n_runs": 14082,
          "n_trade_days": 63,
          "first_trade_date": "2026-02-10",
          "last_trade_date": "2026-05-13",
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
            "retail_pct": 0.3537712287712288,
            "mixed_pct": 0.28525641025641024,
            "instit_pct": 0.22556610056610057,
            "ambiguous_pct": 0.13540626040626041,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.13540626040626041,
            "retail_qty_pct": 0.023137926596239717,
            "mixed_qty_pct": 0.17385339332212196,
            "instit_qty_pct": 0.5578504740311815,
            "ambiguous_qty_pct": 0.24515820605045677,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.24515820605045677,
            "retail_notional_pct": 0.023107225573242574,
            "mixed_notional_pct": 0.17494086335963027,
            "instit_notional_pct": 0.5566467374065743,
            "ambiguous_notional_pct": 0.2453051736605528,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2453051736605528
          },
          "run_composition": {
            "retail_pct": 0.5973583297827013,
            "mixed_pct": 0.2521658855276239,
            "instit_pct": 0.050987075699474506,
            "ambiguous_pct": 0.09948870899020025,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.09948870899020025,
            "retail_notional_pct": 0.023107225573242574,
            "mixed_notional_pct": 0.17494086335963027,
            "instit_notional_pct": 0.5566467374065743,
            "unclear_notional_pct": 0.2453051736605528
          },
          "counts": {
            "trades": {
              "retail": 8499,
              "mixed": 6853,
              "institutional": 5419,
              "ambiguous": 3253,
              "unobservable": 0,
              "unclear": 3253
            },
            "runs": {
              "retail": 8412,
              "mixed": 3551,
              "institutional": 718,
              "ambiguous": 1401,
              "unobservable": 0,
              "unclear": 1401
            }
          },
          "confidence": {
            "high": 0.6482743928419259,
            "medium": 0.25223689816787387,
            "low": 0.09948870899020025,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 9129,
            "medium": 3552,
            "low": 1401,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5792540792540792,
            "medium": 0.28533966033966035,
            "low": 0.13540626040626041,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 13916,
            "medium": 6855,
            "low": 3253,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8778298537139608,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.09948870899020025,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5973583297827013,
          "dominance_gap": 0.3451924442550774,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 23133,
              "WALK_BOOK": 885,
              "UNOBSERVABLE": 6
            },
            "d2_information": {
              "UNOBSERVABLE": 24024
            },
            "d3_urgency": {
              "UNOBSERVABLE": 14082
            },
            "participant_confidence": {
              "HIGH": 9129,
              "MEDIUM": 3552,
              "LOW": 1401
            }
          },
          "trade_size": {
            "avg": 1953.431505994006,
            "median": 132.0
          },
          "run_size": {
            "avg": 3332.5691308052833,
            "median": 134.0,
            "avg_length": 1.3627325663968186
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-258",
              "timestamp": "2026-05-13T08:59:58.292400",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47701,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-257",
              "timestamp": "2026-05-13T08:59:30.029800",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47700,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-256",
              "timestamp": "2026-05-13T08:59:16.888300",
              "price": 0.67,
              "size": 2000.0,
              "notional": 1340.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47699,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-255",
              "timestamp": "2026-05-13T08:59:10.391300",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47699,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-254",
              "timestamp": "2026-05-13T08:59:00.779400",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47699,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-253",
              "timestamp": "2026-05-13T08:59:00.352800",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47699,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-252",
              "timestamp": "2026-05-13T08:58:30.268800",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47698,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-251",
              "timestamp": "2026-05-13T08:58:01.521900",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47697,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-250",
              "timestamp": "2026-05-13T08:57:47.141100",
              "price": 0.67,
              "size": 1500.0,
              "notional": 1005.0000000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47696,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-249",
              "timestamp": "2026-05-13T08:57:38.245700",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47696,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-248",
              "timestamp": "2026-05-13T08:57:30.468200",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47695,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-247",
              "timestamp": "2026-05-13T08:57:03.120100",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47694,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-246",
              "timestamp": "2026-05-13T08:56:53.445300",
              "price": 0.67,
              "size": 1100.0,
              "notional": 737.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47693,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-245",
              "timestamp": "2026-05-13T08:56:01.299500",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-244",
              "timestamp": "2026-05-13T08:55:30.490100",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47691,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-243",
              "timestamp": "2026-05-13T08:55:24.881400",
              "price": 0.67,
              "size": 1500.0,
              "notional": 1005.0000000000001,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47690,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-242",
              "timestamp": "2026-05-13T08:55:03.168200",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47689,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-241",
              "timestamp": "2026-05-13T08:54:40.533400",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47688,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-240",
              "timestamp": "2026-05-13T08:54:32.612400",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47687,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-239",
              "timestamp": "2026-05-13T08:54:05.453500",
              "price": 0.67,
              "size": 1500.0,
              "notional": 1005.0000000000001,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47686,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-238",
              "timestamp": "2026-05-13T08:54:03.856700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47685,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-237",
              "timestamp": "2026-05-13T08:53:31.342300",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47684,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-236",
              "timestamp": "2026-05-13T08:53:05.184300",
              "price": 0.67,
              "size": 1400.0,
              "notional": 938.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47683,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-235",
              "timestamp": "2026-05-13T08:52:04.415000",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47682,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-234",
              "timestamp": "2026-05-13T08:52:04.354600",
              "price": 0.67,
              "size": 1100.0,
              "notional": 737.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47681,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-233",
              "timestamp": "2026-05-13T08:51:06.779700",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47680,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-232",
              "timestamp": "2026-05-13T08:51:01.806600",
              "price": 0.67,
              "size": 1100.0,
              "notional": 737.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47679,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-231",
              "timestamp": "2026-05-13T08:50:11.239200",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47678,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-230",
              "timestamp": "2026-05-13T08:49:39.311300",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47677,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-229",
              "timestamp": "2026-05-13T08:49:33.223300",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47677,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "CRPU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.3537712287712288,
              "mixed_pct": 0.28525641025641024,
              "instit_pct": 0.22556610056610057,
              "ambiguous_pct": 0.13540626040626041,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.13540626040626041,
              "retail_qty_pct": 0.023137926596239717,
              "mixed_qty_pct": 0.17385339332212196,
              "instit_qty_pct": 0.5578504740311815,
              "ambiguous_qty_pct": 0.24515820605045677,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.24515820605045677,
              "retail_notional_pct": 0.023107225573242574,
              "mixed_notional_pct": 0.17494086335963027,
              "instit_notional_pct": 0.5566467374065743,
              "ambiguous_notional_pct": 0.2453051736605528,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.2453051736605528,
              "run_retail_pct": 0.5973583297827013,
              "run_mixed_pct": 0.2521658855276239,
              "run_instit_pct": 0.050987075699474506,
              "run_unclear_pct": 0.09948870899020025,
              "avg_trade_size": 1953.431505994006,
              "avg_run_notional": 3332.5691308052833,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6482743928419259,
              "medium_confidence_pct": 0.25223689816787387,
              "low_confidence_pct": 0.09948870899020025,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.8778298537139608,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AU8U",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.4546621671190668,
              "mixed_pct": 0.04467757317878365,
              "instit_pct": 0.4986244589538552,
              "ambiguous_pct": 0.002035800748294329,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.002035800748294329,
              "retail_qty_pct": 0.21508770551211776,
              "mixed_qty_pct": 0.029516334383586952,
              "instit_qty_pct": 0.75490106744668,
              "ambiguous_qty_pct": 0.0004948926576153697,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0004948926576153697,
              "retail_notional_pct": 0.21562831099036994,
              "mixed_notional_pct": 0.030065806384867857,
              "instit_notional_pct": 0.7538246743619759,
              "ambiguous_notional_pct": 0.00048120826278637627,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.00048120826278637627,
              "run_retail_pct": 0.7833801891270218,
              "run_mixed_pct": 0.03537916681879587,
              "run_instit_pct": 0.17941509365073569,
              "run_unclear_pct": 0.0018255504034466392,
              "avg_trade_size": 1490.7536956202773,
              "avg_run_notional": 2967.6824455073206,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.7014494870203366,
              "low_confidence_pct": 0.2985505129796634,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.48614042133703317,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            }
          ]
        },
        "6m": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 44027,
          "n_runs": 27150,
          "n_trade_days": 126,
          "first_trade_date": "2025-11-11",
          "last_trade_date": "2026-05-13",
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
            "retail_pct": 0.3754287141981057,
            "mixed_pct": 0.28539305426215733,
            "instit_pct": 0.21241510891044132,
            "ambiguous_pct": 0.12676312262929565,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.12676312262929565,
            "retail_qty_pct": 0.028727197194210966,
            "mixed_qty_pct": 0.18446883278184614,
            "instit_qty_pct": 0.5391382097281144,
            "ambiguous_qty_pct": 0.2476657602958285,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2476657602958285,
            "retail_notional_pct": 0.028762236463011685,
            "mixed_notional_pct": 0.18536921269936343,
            "instit_notional_pct": 0.5379185619701989,
            "ambiguous_notional_pct": 0.2479499888674259,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2479499888674259
          },
          "run_composition": {
            "retail_pct": 0.6015837937384899,
            "mixed_pct": 0.25156537753222835,
            "instit_pct": 0.05432780847145488,
            "ambiguous_pct": 0.09252302025782688,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.09252302025782688,
            "retail_notional_pct": 0.02876140083668619,
            "mixed_notional_pct": 0.18536937218594837,
            "instit_notional_pct": 0.5379190247805717,
            "unclear_notional_pct": 0.24795020219679373
          },
          "counts": {
            "trades": {
              "retail": 16529,
              "mixed": 12565,
              "institutional": 9352,
              "ambiguous": 5581,
              "unobservable": 0,
              "unclear": 5581
            },
            "runs": {
              "retail": 16333,
              "mixed": 6830,
              "institutional": 1475,
              "ambiguous": 2512,
              "unobservable": 0,
              "unclear": 2512
            }
          },
          "confidence": {
            "high": 0.6558747697974218,
            "medium": 0.25160220994475135,
            "low": 0.09252302025782688,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 17807,
            "medium": 6831,
            "low": 2512,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5877756831035501,
            "medium": 0.2854384809321553,
            "low": 0.12678583596429463,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 25878,
            "medium": 12567,
            "low": 5582,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.876793738489871,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.09252302025782688,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.6015837937384899,
          "dominance_gap": 0.35001841620626156,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 42884,
              "WALK_BOOK": 1136,
              "UNOBSERVABLE": 7
            },
            "d2_information": {
              "UNOBSERVABLE": 44027
            },
            "d3_urgency": {
              "UNOBSERVABLE": 27150
            },
            "participant_confidence": {
              "HIGH": 17807,
              "MEDIUM": 6831,
              "LOW": 2512
            }
          },
          "trade_size": {
            "avg": 1781.9622504372317,
            "median": 135.0
          },
          "run_size": {
            "avg": 2889.6642541436463,
            "median": 137.0,
            "avg_length": 1.3296869244935543
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-258",
              "timestamp": "2026-05-13T08:59:58.292400",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47701,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-257",
              "timestamp": "2026-05-13T08:59:30.029800",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47700,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-256",
              "timestamp": "2026-05-13T08:59:16.888300",
              "price": 0.67,
              "size": 2000.0,
              "notional": 1340.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47699,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-255",
              "timestamp": "2026-05-13T08:59:10.391300",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47699,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-254",
              "timestamp": "2026-05-13T08:59:00.779400",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47699,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-253",
              "timestamp": "2026-05-13T08:59:00.352800",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47699,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-252",
              "timestamp": "2026-05-13T08:58:30.268800",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47698,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-251",
              "timestamp": "2026-05-13T08:58:01.521900",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47697,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-250",
              "timestamp": "2026-05-13T08:57:47.141100",
              "price": 0.67,
              "size": 1500.0,
              "notional": 1005.0000000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47696,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-249",
              "timestamp": "2026-05-13T08:57:38.245700",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47696,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-248",
              "timestamp": "2026-05-13T08:57:30.468200",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47695,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-247",
              "timestamp": "2026-05-13T08:57:03.120100",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47694,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-246",
              "timestamp": "2026-05-13T08:56:53.445300",
              "price": 0.67,
              "size": 1100.0,
              "notional": 737.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47693,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-245",
              "timestamp": "2026-05-13T08:56:01.299500",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-244",
              "timestamp": "2026-05-13T08:55:30.490100",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47691,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-243",
              "timestamp": "2026-05-13T08:55:24.881400",
              "price": 0.67,
              "size": 1500.0,
              "notional": 1005.0000000000001,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47690,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-242",
              "timestamp": "2026-05-13T08:55:03.168200",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47689,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-241",
              "timestamp": "2026-05-13T08:54:40.533400",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47688,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-240",
              "timestamp": "2026-05-13T08:54:32.612400",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47687,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-239",
              "timestamp": "2026-05-13T08:54:05.453500",
              "price": 0.67,
              "size": 1500.0,
              "notional": 1005.0000000000001,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47686,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-238",
              "timestamp": "2026-05-13T08:54:03.856700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47685,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-237",
              "timestamp": "2026-05-13T08:53:31.342300",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47684,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-236",
              "timestamp": "2026-05-13T08:53:05.184300",
              "price": 0.67,
              "size": 1400.0,
              "notional": 938.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47683,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-235",
              "timestamp": "2026-05-13T08:52:04.415000",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47682,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-234",
              "timestamp": "2026-05-13T08:52:04.354600",
              "price": 0.67,
              "size": 1100.0,
              "notional": 737.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47681,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-233",
              "timestamp": "2026-05-13T08:51:06.779700",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47680,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-232",
              "timestamp": "2026-05-13T08:51:01.806600",
              "price": 0.67,
              "size": 1100.0,
              "notional": 737.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47679,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-231",
              "timestamp": "2026-05-13T08:50:11.239200",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47678,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-230",
              "timestamp": "2026-05-13T08:49:39.311300",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47677,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-229",
              "timestamp": "2026-05-13T08:49:33.223300",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47677,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "CRPU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.3754287141981057,
              "mixed_pct": 0.28539305426215733,
              "instit_pct": 0.21241510891044132,
              "ambiguous_pct": 0.12676312262929565,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.12676312262929565,
              "retail_qty_pct": 0.028727197194210966,
              "mixed_qty_pct": 0.18446883278184614,
              "instit_qty_pct": 0.5391382097281144,
              "ambiguous_qty_pct": 0.2476657602958285,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.2476657602958285,
              "retail_notional_pct": 0.028762236463011685,
              "mixed_notional_pct": 0.18536921269936343,
              "instit_notional_pct": 0.5379185619701989,
              "ambiguous_notional_pct": 0.2479499888674259,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.2479499888674259,
              "run_retail_pct": 0.6015837937384899,
              "run_mixed_pct": 0.25156537753222835,
              "run_instit_pct": 0.05432780847145488,
              "run_unclear_pct": 0.09252302025782688,
              "avg_trade_size": 1781.9622504372317,
              "avg_run_notional": 2889.6642541436463,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6558747697974218,
              "medium_confidence_pct": 0.25160220994475135,
              "low_confidence_pct": 0.09252302025782688,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.876793738489871,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AU8U",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.48034272084362056,
              "mixed_pct": 0.04709796208729129,
              "instit_pct": 0.4709273130518475,
              "ambiguous_pct": 0.0016320040172406577,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0016320040172406577,
              "retail_qty_pct": 0.23417337982814512,
              "mixed_qty_pct": 0.027387039647924022,
              "instit_qty_pct": 0.7380018379053402,
              "ambiguous_qty_pct": 0.0004377426185906631,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0004377426185906631,
              "retail_notional_pct": 0.23608185972552787,
              "mixed_notional_pct": 0.027482329323453278,
              "instit_notional_pct": 0.7360130160304564,
              "ambiguous_notional_pct": 0.00042279492056244576,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.00042279492056244576,
              "run_retail_pct": 0.7920561209366663,
              "run_mixed_pct": 0.03566841221223199,
              "run_instit_pct": 0.170911965220828,
              "run_unclear_pct": 0.0013635016302736883,
              "avg_trade_size": 1475.2764311419844,
              "avg_run_notional": 2786.655933208181,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.7171623357375754,
              "low_confidence_pct": 0.2828376642624247,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.48489674933306987,
              "observable_run_pct": 1.0,
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
      "n_trades": 44027,
      "n_runs": 27150,
      "n_trade_days": 126,
      "first_trade_date": "2025-11-11",
      "last_trade_date": "2026-05-13",
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
        "retail_pct": 0.3754287141981057,
        "mixed_pct": 0.28539305426215733,
        "instit_pct": 0.21241510891044132,
        "ambiguous_pct": 0.12676312262929565,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.12676312262929565,
        "retail_qty_pct": 0.028727197194210966,
        "mixed_qty_pct": 0.18446883278184614,
        "instit_qty_pct": 0.5391382097281144,
        "ambiguous_qty_pct": 0.2476657602958285,
        "unobservable_qty_pct": 0.0,
        "unclear_qty_pct": 0.2476657602958285,
        "retail_notional_pct": 0.028762236463011685,
        "mixed_notional_pct": 0.18536921269936343,
        "instit_notional_pct": 0.5379185619701989,
        "ambiguous_notional_pct": 0.2479499888674259,
        "unobservable_notional_pct": 0.0,
        "unclear_notional_pct": 0.2479499888674259
      },
      "run_composition": {
        "retail_pct": 0.6015837937384899,
        "mixed_pct": 0.25156537753222835,
        "instit_pct": 0.05432780847145488,
        "ambiguous_pct": 0.09252302025782688,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.09252302025782688
      },
      "trade_size": {
        "avg": 1781.9622504372317,
        "median": 135.0
      },
      "run_size": {
        "avg": 2889.6642541436463,
        "median": 137.0,
        "avg_length": 1.3296869244935543
      },
      "confidence": {
        "high": 0.6558747697974218,
        "medium": 0.25160220994475135,
        "low": 0.09252302025782688,
        "na": 0.0
      },
      "confidence_counts": {
        "high": 17807,
        "medium": 6831,
        "low": 2512,
        "na": 0
      },
      "trade_confidence": {
        "high": 0.5877756831035501,
        "medium": 0.2854384809321553,
        "low": 0.12678583596429463,
        "na": 0.0
      },
      "trade_confidence_counts": {
        "high": 25878,
        "medium": 12567,
        "low": 5582,
        "na": 0
      },
      "counts": {
        "trades": {
          "retail": 16529,
          "mixed": 12565,
          "institutional": 9352,
          "ambiguous": 5581,
          "unobservable": 0,
          "unclear": 5581
        },
        "runs": {
          "retail": 16333,
          "mixed": 6830,
          "institutional": 1475,
          "ambiguous": 2512,
          "unobservable": 0,
          "unclear": 2512
        }
      },
      "observability": {
        "avg_feature_coverage": 0.876793738489871,
        "observable_run_pct": 1.0,
        "ambiguous_run_pct": 0.09252302025782688,
        "unobservable_run_pct": 0.0
      },
      "dominant_bucket": "RETAIL",
      "dominant_label": "Retail-led",
      "dominant_share": 0.6015837937384899,
      "dominance_gap": 0.35001841620626156,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2025-12",
            "n_trades": 7482,
            "n_runs": 4659,
            "retail_pct": 0.3744987971130714,
            "mixed_pct": 0.3032611601176156,
            "instit_pct": 0.20395616145415665,
            "ambiguous_pct": 0.11828388131515638,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.11828388131515638,
            "avg_trade_size": 971.4749398556536,
            "avg_run_notional": 1560.1004507405023,
            "retail_qty_pct": 0.04269277164331447,
            "mixed_qty_pct": 0.2121740744177415,
            "instit_qty_pct": 0.48862392131390925,
            "ambiguous_qty_pct": 0.2565092326250348,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2565092326250348,
            "retail_notional_pct": 0.042695917515061924,
            "mixed_notional_pct": 0.2125468050789319,
            "instit_notional_pct": 0.4882909312835782,
            "ambiguous_notional_pct": 0.25646634612242797,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.25646634612242797,
            "run_retail_pct": 0.5908993346211633,
            "run_mixed_pct": 0.26915647134578236,
            "run_instit_pct": 0.0549474136080704,
            "run_ambiguous_pct": 0.0849967804249839,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.0849967804249839,
            "avg_feature_coverage": 0.8789117836445588,
            "high_confidence_pct": 0.6458467482292337,
            "medium_confidence_pct": 0.26915647134578236,
            "low_confidence_pct": 0.0849967804249839,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-01",
            "n_trades": 4966,
            "n_runs": 3378,
            "retail_pct": 0.43254128070882,
            "mixed_pct": 0.27527184857027787,
            "instit_pct": 0.18344744260974627,
            "ambiguous_pct": 0.10873942811115586,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.10873942811115586,
            "avg_trade_size": 2388.3777688280306,
            "avg_run_notional": 3511.1557134399054,
            "retail_qty_pct": 0.022452603902394022,
            "mixed_qty_pct": 0.12681627381336777,
            "instit_qty_pct": 0.5434002952165691,
            "ambiguous_qty_pct": 0.3073308270676692,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3073308270676692,
            "retail_notional_pct": 0.022507639525679968,
            "mixed_notional_pct": 0.1272717070954761,
            "instit_notional_pct": 0.5419302967687193,
            "ambiguous_notional_pct": 0.30829035661012466,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.30829035661012466,
            "run_retail_pct": 0.6343990526939017,
            "run_mixed_pct": 0.2285375962107756,
            "run_instit_pct": 0.05358200118413262,
            "run_ambiguous_pct": 0.08348134991119005,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.08348134991119005,
            "avg_feature_coverage": 0.8710923623445824,
            "high_confidence_pct": 0.6879810538780343,
            "medium_confidence_pct": 0.2285375962107756,
            "low_confidence_pct": 0.08348134991119005,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-02",
            "n_trades": 4495,
            "n_runs": 3123,
            "retail_pct": 0.41757508342602895,
            "mixed_pct": 0.3087875417130145,
            "instit_pct": 0.16418242491657398,
            "ambiguous_pct": 0.10945494994438265,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.10945494994438265,
            "avg_trade_size": 2441.2621802002222,
            "avg_run_notional": 3513.7603266090296,
            "retail_qty_pct": 0.02029660911067243,
            "mixed_qty_pct": 0.22378120392813414,
            "instit_qty_pct": 0.4950148679377296,
            "ambiguous_qty_pct": 0.26090731902346387,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.26090731902346387,
            "retail_notional_pct": 0.02029052150169224,
            "mixed_notional_pct": 0.22405836219497866,
            "instit_notional_pct": 0.49469167625000415,
            "ambiguous_notional_pct": 0.26095944005332494,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.26095944005332494,
            "run_retail_pct": 0.5997438360550752,
            "run_mixed_pct": 0.2580851745116875,
            "run_instit_pct": 0.051232788984950366,
            "run_ambiguous_pct": 0.0909382004482869,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.0909382004482869,
            "avg_feature_coverage": 0.8714217098943322,
            "high_confidence_pct": 0.6509766250400256,
            "medium_confidence_pct": 0.2580851745116875,
            "low_confidence_pct": 0.0909382004482869,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-03",
            "n_trades": 9697,
            "n_runs": 5554,
            "retail_pct": 0.3459832938022069,
            "mixed_pct": 0.28740847684850984,
            "instit_pct": 0.2266680416623698,
            "ambiguous_pct": 0.1399401876869135,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1399401876869135,
            "avg_trade_size": 2161.422347117665,
            "avg_run_notional": 3773.732895210659,
            "retail_qty_pct": 0.021510052309825424,
            "mixed_qty_pct": 0.16204071343039012,
            "instit_qty_pct": 0.5838469780046638,
            "ambiguous_qty_pct": 0.23260225625512068,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.23260225625512068,
            "retail_notional_pct": 0.021441280576354783,
            "mixed_notional_pct": 0.1629021705745358,
            "instit_notional_pct": 0.583193341861762,
            "ambiguous_notional_pct": 0.23246320698734751,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.23246320698734751,
            "run_retail_pct": 0.5966870723802665,
            "run_mixed_pct": 0.2511703276917537,
            "run_instit_pct": 0.045012603528988115,
            "run_ambiguous_pct": 0.10712999639899172,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.10712999639899172,
            "avg_feature_coverage": 0.8779348217500899,
            "high_confidence_pct": 0.6415196254951386,
            "medium_confidence_pct": 0.25135037810586963,
            "low_confidence_pct": 0.10712999639899172,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-04",
            "n_trades": 8271,
            "n_runs": 4562,
            "retail_pct": 0.33587232499093217,
            "mixed_pct": 0.2780800386893967,
            "instit_pct": 0.25486640067706445,
            "ambiguous_pct": 0.1311812356426067,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1311812356426067,
            "avg_trade_size": 1583.4353161649135,
            "avg_run_notional": 2870.800854888207,
            "retail_qty_pct": 0.024315653764279074,
            "mixed_qty_pct": 0.16991475029732458,
            "instit_qty_pct": 0.555032530806824,
            "ambiguous_qty_pct": 0.25073706513157235,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.25073706513157235,
            "retail_notional_pct": 0.024360075007291017,
            "mixed_notional_pct": 0.17067781786156835,
            "instit_notional_pct": 0.5539449246859498,
            "ambiguous_notional_pct": 0.2510171824451908,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2510171824451908,
            "run_retail_pct": 0.6034633932485752,
            "run_mixed_pct": 0.2479175800087681,
            "run_instit_pct": 0.05830775975449364,
            "run_ambiguous_pct": 0.09031126698816308,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.09031126698816308,
            "avg_feature_coverage": 0.8808855765015343,
            "high_confidence_pct": 0.6617711530030689,
            "medium_confidence_pct": 0.2479175800087681,
            "low_confidence_pct": 0.09031126698816308,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-05",
            "n_trades": 2607,
            "n_runs": 1584,
            "retail_pct": 0.3582662063674722,
            "mixed_pct": 0.2654392021480629,
            "instit_pct": 0.21173762945914845,
            "ambiguous_pct": 0.16455696202531644,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.16455696202531644,
            "avg_trade_size": 1608.7305331799002,
            "avg_run_notional": 2647.7023358585857,
            "retail_qty_pct": 0.031371988955536514,
            "mixed_qty_pct": 0.11455457170967025,
            "instit_qty_pct": 0.6082230473832874,
            "ambiguous_qty_pct": 0.24585039195150593,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.24585039195150593,
            "retail_notional_pct": 0.03136844040376632,
            "mixed_notional_pct": 0.11465045986961489,
            "instit_notional_pct": 0.6081341252498682,
            "ambiguous_notional_pct": 0.24584697447675055,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.24584697447675055,
            "run_retail_pct": 0.5763888888888888,
            "run_mixed_pct": 0.26073232323232326,
            "run_instit_pct": 0.05113636363636364,
            "run_ambiguous_pct": 0.11174242424242424,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.11174242424242424,
            "avg_feature_coverage": 0.8762310606060605,
            "high_confidence_pct": 0.6275252525252525,
            "medium_confidence_pct": 0.26073232323232326,
            "low_confidence_pct": 0.11174242424242424,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "CRPU",
          "currency": "SGD",
          "is_target": true,
          "retail_pct": 0.3754287141981057,
          "mixed_pct": 0.28539305426215733,
          "instit_pct": 0.21241510891044132,
          "ambiguous_pct": 0.12676312262929565,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.12676312262929565,
          "retail_qty_pct": 0.028727197194210966,
          "mixed_qty_pct": 0.18446883278184614,
          "instit_qty_pct": 0.5391382097281144,
          "ambiguous_qty_pct": 0.2476657602958285,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.2476657602958285,
          "retail_notional_pct": 0.028762236463011685,
          "mixed_notional_pct": 0.18536921269936343,
          "instit_notional_pct": 0.5379185619701989,
          "ambiguous_notional_pct": 0.2479499888674259,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.2479499888674259,
          "run_retail_pct": 0.6015837937384899,
          "run_mixed_pct": 0.25156537753222835,
          "run_instit_pct": 0.05432780847145488,
          "run_unclear_pct": 0.09252302025782688,
          "avg_trade_size": 1781.9622504372317,
          "avg_run_notional": 2889.6642541436463,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.6558747697974218,
          "medium_confidence_pct": 0.25160220994475135,
          "low_confidence_pct": 0.09252302025782688,
          "na_confidence_pct": 0.0,
          "avg_feature_coverage": 0.876793738489871,
          "observable_run_pct": 1.0,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "AU8U",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.48034272084362056,
          "mixed_pct": 0.04709796208729129,
          "instit_pct": 0.4709273130518475,
          "ambiguous_pct": 0.0016320040172406577,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.0016320040172406577,
          "retail_qty_pct": 0.23417337982814512,
          "mixed_qty_pct": 0.027387039647924022,
          "instit_qty_pct": 0.7380018379053402,
          "ambiguous_qty_pct": 0.0004377426185906631,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.0004377426185906631,
          "retail_notional_pct": 0.23608185972552787,
          "mixed_notional_pct": 0.027482329323453278,
          "instit_notional_pct": 0.7360130160304564,
          "ambiguous_notional_pct": 0.00042279492056244576,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.00042279492056244576,
          "run_retail_pct": 0.7920561209366663,
          "run_mixed_pct": 0.03566841221223199,
          "run_instit_pct": 0.170911965220828,
          "run_unclear_pct": 0.0013635016302736883,
          "avg_trade_size": 1475.2764311419844,
          "avg_run_notional": 2786.655933208181,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.7171623357375754,
          "low_confidence_pct": 0.2828376642624247,
          "na_confidence_pct": 0.0,
          "avg_feature_coverage": 0.48489674933306987,
          "observable_run_pct": 1.0,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        }
      ],
      "peer_comparison_periods": {
        "1d": [
          {
            "ticker": "CRPU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.37448559670781895,
            "mixed_pct": 0.26337448559670784,
            "instit_pct": 0.24279835390946503,
            "ambiguous_pct": 0.11934156378600823,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.11934156378600823,
            "retail_qty_pct": 0.02454920703888768,
            "mixed_qty_pct": 0.0545296545731045,
            "instit_qty_pct": 0.5405170540951554,
            "ambiguous_qty_pct": 0.3804040842928525,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3804040842928525,
            "retail_notional_pct": 0.02450186407684475,
            "mixed_notional_pct": 0.0546654223143319,
            "instit_notional_pct": 0.5404613365455494,
            "ambiguous_notional_pct": 0.380371377063274,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.380371377063274,
            "run_retail_pct": 0.5986842105263158,
            "run_mixed_pct": 0.2631578947368421,
            "run_instit_pct": 0.046052631578947366,
            "run_unclear_pct": 0.09210526315789473,
            "avg_trade_size": 1258.9115226337449,
            "avg_run_notional": 2012.6019736842106,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6447368421052632,
            "medium_confidence_pct": 0.2631578947368421,
            "low_confidence_pct": 0.09210526315789473,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.8717105263157893,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AU8U",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.5,
            "mixed_pct": 0.02727272727272727,
            "instit_pct": 0.4727272727272727,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0,
            "retail_qty_pct": 0.24259110933119743,
            "mixed_qty_pct": 0.0025030036043251903,
            "instit_qty_pct": 0.7549058870644774,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0,
            "retail_notional_pct": 0.24242859397309124,
            "mixed_notional_pct": 0.0025003047784017945,
            "instit_notional_pct": 0.755071101248507,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0,
            "run_retail_pct": 0.7995337995337995,
            "run_mixed_pct": 0.023310023310023312,
            "run_instit_pct": 0.17715617715617715,
            "run_unclear_pct": 0.0,
            "avg_trade_size": 868.2058441558441,
            "avg_run_notional": 1558.3181818181818,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.6783216783216783,
            "low_confidence_pct": 0.32167832167832167,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.4811188811188812,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ],
        "30d": [
          {
            "ticker": "CRPU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.33909804443261937,
            "mixed_pct": 0.28442197685246773,
            "instit_pct": 0.22375947851536518,
            "ambiguous_pct": 0.1527205001995477,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1527205001995477,
            "retail_qty_pct": 0.02793383097306738,
            "mixed_qty_pct": 0.1758073666996696,
            "instit_qty_pct": 0.5303645526248456,
            "ambiguous_qty_pct": 0.2658942497024174,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2658942497024174,
            "retail_notional_pct": 0.027933083453347708,
            "mixed_notional_pct": 0.17568660231783245,
            "instit_notional_pct": 0.5305774049706571,
            "ambiguous_notional_pct": 0.26580290925816275,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.26580290925816275,
            "run_retail_pct": 0.590009425070688,
            "run_mixed_pct": 0.25989632422243164,
            "run_instit_pct": 0.054429783223374176,
            "run_unclear_pct": 0.09566446748350613,
            "avg_trade_size": 1588.754356791273,
            "avg_run_notional": 2814.011899151744,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6444392082940622,
            "medium_confidence_pct": 0.25989632422243164,
            "low_confidence_pct": 0.09566446748350613,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.8790292177191328,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AU8U",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.5190596360738478,
            "mixed_pct": 0.033138531013414796,
            "instit_pct": 0.44554389693186347,
            "ambiguous_pct": 0.002257935980873954,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.002257935980873954,
            "retail_qty_pct": 0.22682838915886064,
            "mixed_qty_pct": 0.004920289571852296,
            "instit_qty_pct": 0.768103669155039,
            "ambiguous_qty_pct": 0.00014765211424799476,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.00014765211424799476,
            "retail_notional_pct": 0.22717984177204725,
            "mixed_notional_pct": 0.004930340602750007,
            "instit_notional_pct": 0.7677404629820568,
            "ambiguous_notional_pct": 0.00014935464314594303,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.00014935464314594303,
            "run_retail_pct": 0.8004164839982464,
            "run_mixed_pct": 0.025865848312143797,
            "run_instit_pct": 0.1718544498027181,
            "run_unclear_pct": 0.001863217886891714,
            "avg_trade_size": 1034.2456169478019,
            "avg_run_notional": 1706.8906729504604,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.7289565979833407,
            "low_confidence_pct": 0.2710434020166594,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.4806115738711092,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ],
        "3m": [
          {
            "ticker": "CRPU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.3537712287712288,
            "mixed_pct": 0.28525641025641024,
            "instit_pct": 0.22556610056610057,
            "ambiguous_pct": 0.13540626040626041,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.13540626040626041,
            "retail_qty_pct": 0.023137926596239717,
            "mixed_qty_pct": 0.17385339332212196,
            "instit_qty_pct": 0.5578504740311815,
            "ambiguous_qty_pct": 0.24515820605045677,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.24515820605045677,
            "retail_notional_pct": 0.023107225573242574,
            "mixed_notional_pct": 0.17494086335963027,
            "instit_notional_pct": 0.5566467374065743,
            "ambiguous_notional_pct": 0.2453051736605528,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2453051736605528,
            "run_retail_pct": 0.5973583297827013,
            "run_mixed_pct": 0.2521658855276239,
            "run_instit_pct": 0.050987075699474506,
            "run_unclear_pct": 0.09948870899020025,
            "avg_trade_size": 1953.431505994006,
            "avg_run_notional": 3332.5691308052833,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6482743928419259,
            "medium_confidence_pct": 0.25223689816787387,
            "low_confidence_pct": 0.09948870899020025,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.8778298537139608,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AU8U",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.4546621671190668,
            "mixed_pct": 0.04467757317878365,
            "instit_pct": 0.4986244589538552,
            "ambiguous_pct": 0.002035800748294329,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.002035800748294329,
            "retail_qty_pct": 0.21508770551211776,
            "mixed_qty_pct": 0.029516334383586952,
            "instit_qty_pct": 0.75490106744668,
            "ambiguous_qty_pct": 0.0004948926576153697,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0004948926576153697,
            "retail_notional_pct": 0.21562831099036994,
            "mixed_notional_pct": 0.030065806384867857,
            "instit_notional_pct": 0.7538246743619759,
            "ambiguous_notional_pct": 0.00048120826278637627,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.00048120826278637627,
            "run_retail_pct": 0.7833801891270218,
            "run_mixed_pct": 0.03537916681879587,
            "run_instit_pct": 0.17941509365073569,
            "run_unclear_pct": 0.0018255504034466392,
            "avg_trade_size": 1490.7536956202773,
            "avg_run_notional": 2967.6824455073206,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.7014494870203366,
            "low_confidence_pct": 0.2985505129796634,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.48614042133703317,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ],
        "6m": [
          {
            "ticker": "CRPU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.3754287141981057,
            "mixed_pct": 0.28539305426215733,
            "instit_pct": 0.21241510891044132,
            "ambiguous_pct": 0.12676312262929565,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.12676312262929565,
            "retail_qty_pct": 0.028727197194210966,
            "mixed_qty_pct": 0.18446883278184614,
            "instit_qty_pct": 0.5391382097281144,
            "ambiguous_qty_pct": 0.2476657602958285,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2476657602958285,
            "retail_notional_pct": 0.028762236463011685,
            "mixed_notional_pct": 0.18536921269936343,
            "instit_notional_pct": 0.5379185619701989,
            "ambiguous_notional_pct": 0.2479499888674259,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2479499888674259,
            "run_retail_pct": 0.6015837937384899,
            "run_mixed_pct": 0.25156537753222835,
            "run_instit_pct": 0.05432780847145488,
            "run_unclear_pct": 0.09252302025782688,
            "avg_trade_size": 1781.9622504372317,
            "avg_run_notional": 2889.6642541436463,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6558747697974218,
            "medium_confidence_pct": 0.25160220994475135,
            "low_confidence_pct": 0.09252302025782688,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.876793738489871,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AU8U",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.48034272084362056,
            "mixed_pct": 0.04709796208729129,
            "instit_pct": 0.4709273130518475,
            "ambiguous_pct": 0.0016320040172406577,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0016320040172406577,
            "retail_qty_pct": 0.23417337982814512,
            "mixed_qty_pct": 0.027387039647924022,
            "instit_qty_pct": 0.7380018379053402,
            "ambiguous_qty_pct": 0.0004377426185906631,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0004377426185906631,
            "retail_notional_pct": 0.23608185972552787,
            "mixed_notional_pct": 0.027482329323453278,
            "instit_notional_pct": 0.7360130160304564,
            "ambiguous_notional_pct": 0.00042279492056244576,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.00042279492056244576,
            "run_retail_pct": 0.7920561209366663,
            "run_mixed_pct": 0.03566841221223199,
            "run_instit_pct": 0.170911965220828,
            "run_unclear_pct": 0.0013635016302736883,
            "avg_trade_size": 1475.2764311419844,
            "avg_run_notional": 2786.655933208181,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.7171623357375754,
            "low_confidence_pct": 0.2828376642624247,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.48489674933306987,
            "observable_run_pct": 1.0,
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
          "trade_id": "BMLL-258",
          "timestamp": "2026-05-13T08:59:58.292400",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47701,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-257",
          "timestamp": "2026-05-13T08:59:30.029800",
          "price": 0.665,
          "size": 300.0,
          "notional": 199.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47700,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-256",
          "timestamp": "2026-05-13T08:59:16.888300",
          "price": 0.67,
          "size": 2000.0,
          "notional": 1340.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47699,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-255",
          "timestamp": "2026-05-13T08:59:10.391300",
          "price": 0.67,
          "size": 200.0,
          "notional": 134.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47699,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-254",
          "timestamp": "2026-05-13T08:59:00.779400",
          "price": 0.67,
          "size": 200.0,
          "notional": 134.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47699,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-253",
          "timestamp": "2026-05-13T08:59:00.352800",
          "price": 0.67,
          "size": 200.0,
          "notional": 134.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47699,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-252",
          "timestamp": "2026-05-13T08:58:30.268800",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47698,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-251",
          "timestamp": "2026-05-13T08:58:01.521900",
          "price": 0.665,
          "size": 200.0,
          "notional": 133.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47697,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-250",
          "timestamp": "2026-05-13T08:57:47.141100",
          "price": 0.67,
          "size": 1500.0,
          "notional": 1005.0000000000001,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47696,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-249",
          "timestamp": "2026-05-13T08:57:38.245700",
          "price": 0.67,
          "size": 200.0,
          "notional": 134.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47696,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-248",
          "timestamp": "2026-05-13T08:57:30.468200",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47695,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-247",
          "timestamp": "2026-05-13T08:57:03.120100",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47694,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-246",
          "timestamp": "2026-05-13T08:56:53.445300",
          "price": 0.67,
          "size": 1100.0,
          "notional": 737.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47693,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-245",
          "timestamp": "2026-05-13T08:56:01.299500",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47692,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-244",
          "timestamp": "2026-05-13T08:55:30.490100",
          "price": 0.665,
          "size": 200.0,
          "notional": 133.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47691,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-243",
          "timestamp": "2026-05-13T08:55:24.881400",
          "price": 0.67,
          "size": 1500.0,
          "notional": 1005.0000000000001,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 47690,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-242",
          "timestamp": "2026-05-13T08:55:03.168200",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47689,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-241",
          "timestamp": "2026-05-13T08:54:40.533400",
          "price": 0.67,
          "size": 300.0,
          "notional": 201.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47688,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-240",
          "timestamp": "2026-05-13T08:54:32.612400",
          "price": 0.665,
          "size": 200.0,
          "notional": 133.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47687,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-239",
          "timestamp": "2026-05-13T08:54:05.453500",
          "price": 0.67,
          "size": 1500.0,
          "notional": 1005.0000000000001,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 47686,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-238",
          "timestamp": "2026-05-13T08:54:03.856700",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47685,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-237",
          "timestamp": "2026-05-13T08:53:31.342300",
          "price": 0.665,
          "size": 200.0,
          "notional": 133.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47684,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-236",
          "timestamp": "2026-05-13T08:53:05.184300",
          "price": 0.67,
          "size": 1400.0,
          "notional": 938.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47683,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-235",
          "timestamp": "2026-05-13T08:52:04.415000",
          "price": 0.665,
          "size": 200.0,
          "notional": 133.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47682,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-234",
          "timestamp": "2026-05-13T08:52:04.354600",
          "price": 0.67,
          "size": 1100.0,
          "notional": 737.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47681,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-233",
          "timestamp": "2026-05-13T08:51:06.779700",
          "price": 0.665,
          "size": 200.0,
          "notional": 133.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47680,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-232",
          "timestamp": "2026-05-13T08:51:01.806600",
          "price": 0.67,
          "size": 1100.0,
          "notional": 737.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47679,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-231",
          "timestamp": "2026-05-13T08:50:11.239200",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47678,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-230",
          "timestamp": "2026-05-13T08:49:39.311300",
          "price": 0.665,
          "size": 200.0,
          "notional": 133.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47677,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-229",
          "timestamp": "2026-05-13T08:49:33.223300",
          "price": 0.665,
          "size": 300.0,
          "notional": 199.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47677,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
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
      "total_trades": 44026,
      "price_moving_trades": 10507,
      "pct_price_moving": 23.865443147231183,
      "all_movers": {
        "count": 10507,
        "avg_size": 1469.746311982488,
        "median_size": 137.0,
        "retail_count": 5560,
        "mixed_count": 3115,
        "institutional_count": 661,
        "ambiguous_count": 1171,
        "unobservable_count": 0,
        "retail_pct": 52.917102883791756,
        "mixed_pct": 29.646902065289805,
        "instit_pct": 6.291044065860854,
        "unclear_pct": 11.14495098505758
      },
      "positive_movers": {
        "count": 5245,
        "avg_size": 1434.8999046711153,
        "median_size": 137.0,
        "retail_count": 2672,
        "mixed_count": 1596,
        "institutional_count": 330,
        "ambiguous_count": 647,
        "unobservable_count": 0,
        "retail_pct": 50.94375595805529,
        "mixed_pct": 30.428979980934223,
        "instit_pct": 6.291706387035272,
        "unclear_pct": 12.335557673975215
      },
      "negative_movers": {
        "count": 5262,
        "avg_size": 1504.4801406309389,
        "median_size": 189.0,
        "retail_count": 2888,
        "mixed_count": 1519,
        "institutional_count": 331,
        "ambiguous_count": 524,
        "unobservable_count": 0,
        "retail_pct": 54.8840744963892,
        "mixed_pct": 28.867350817179783,
        "instit_pct": 6.29038388445458,
        "unclear_pct": 9.958190801976436
      }
    },
    "short_selling": {
      "data_available": true,
      "security_name": "Sasseur Reit",
      "mapping": {
        "ticker_to_security": "Sasseur Reit",
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
            "avg_short_ratio": 0.033251261053149135,
            "max_short_ratio": 0.1365038753856573,
            "interpretation": "Low short interest"
          }
        },
        "3M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.07010270344665162,
            "max_short_ratio": 0.36836158192090396,
            "interpretation": "Moderate short interest"
          }
        },
        "6M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.061436818596012,
            "max_short_ratio": 0.36836158192090396,
            "interpretation": "Moderate short interest"
          }
        }
      },
      "correlation": {
        "valid": true,
        "correlation": -0.12806636280584838,
        "interpretation": "Moderate negative - shorts somewhat predict drops"
      },
      "peaks": [
        {
          "date": "2026-03-25",
          "short_ratio": 0.36836158192090396,
          "return_pct": 0.0
        },
        {
          "date": "2026-03-27",
          "short_ratio": 0.26441708229426436,
          "return_pct": 0.0
        },
        {
          "date": "2026-03-24",
          "short_ratio": 0.2476085356880059,
          "return_pct": 0.7936507936507908
        },
        {
          "date": "2025-12-02",
          "short_ratio": 0.23535638673253353,
          "return_pct": 0.0
        },
        {
          "date": "2026-03-09",
          "short_ratio": 0.20926869577193224,
          "return_pct": -0.7407407407407418
        }
      ],
      "short_interest_change": {
        "valid": true,
        "monthly_data": [
          {
            "month": "2026-05",
            "avg_short_ratio": 0.026242097976668186
          },
          {
            "month": "2026-04",
            "avg_short_ratio": 0.039248558959178885
          },
          {
            "month": "2026-03",
            "avg_short_ratio": 0.1453584600680963
          },
          {
            "month": "2026-02",
            "avg_short_ratio": 0.01955998308759306
          },
          {
            "month": "2026-01",
            "avg_short_ratio": 0.016982764014565978
          },
          {
            "month": "2025-12",
            "avg_short_ratio": 0.07871316646993508
          },
          {
            "month": "2025-11",
            "avg_short_ratio": 0.0668994704724344
          },
          {
            "month": "2025-10",
            "avg_short_ratio": 0.06470348255473901
          },
          {
            "month": "2025-09",
            "avg_short_ratio": 0.06966288440475607
          },
          {
            "month": "2025-08",
            "avg_short_ratio": 0.05367218265667169
          },
          {
            "month": "2025-07",
            "avg_short_ratio": 0.023438723514618575
          },
          {
            "month": "2025-06",
            "avg_short_ratio": 0.02462641566210631
          }
        ],
        "mom_change": [
          {
            "month": "2026-05",
            "avg_short_ratio": 0.026242097976668186,
            "change_pct": null
          },
          {
            "month": "2026-04",
            "avg_short_ratio": 0.039248558959178885,
            "change_pct": 49.56334281685377
          },
          {
            "month": "2026-03",
            "avg_short_ratio": 0.1453584600680963,
            "change_pct": 270.35362296811655
          },
          {
            "month": "2026-02",
            "avg_short_ratio": 0.01955998308759306,
            "change_pct": -86.54362251882017
          },
          {
            "month": "2026-01",
            "avg_short_ratio": 0.016982764014565978,
            "change_pct": -13.175978023528142
          },
          {
            "month": "2025-12",
            "avg_short_ratio": 0.07871316646993508,
            "change_pct": 363.4885487569835
          },
          {
            "month": "2025-11",
            "avg_short_ratio": 0.0668994704724344,
            "change_pct": -15.008538631225035
          },
          {
            "month": "2025-10",
            "avg_short_ratio": 0.06470348255473901,
            "change_pct": -3.2825191323453518
          },
          {
            "month": "2025-09",
            "avg_short_ratio": 0.06966288440475607,
            "change_pct": 7.664814402874552
          },
          {
            "month": "2025-08",
            "avg_short_ratio": 0.05367218265667169,
            "change_pct": -22.95440661798473
          },
          {
            "month": "2025-07",
            "avg_short_ratio": 0.023438723514618575,
            "change_pct": -56.329848434615435
          },
          {
            "month": "2025-06",
            "avg_short_ratio": 0.02462641566210631,
            "change_pct": 5.067221970287669
          }
        ],
        "interpretation": "Shorts covering significantly (-33% MoM)"
      },
      "short_series": {
        "valid": true,
        "rows": [
          {
            "date": "2026-05-13",
            "short_ratio": 0.08621014902848519,
            "short_vol": 45700,
            "total_vol": 530100,
            "close": 0.67,
            "return": 0.007518796992481258
          },
          {
            "date": "2026-05-12",
            "short_ratio": 0.006099110546378653,
            "short_vol": 2400,
            "total_vol": 393500,
            "close": 0.665,
            "return": -0.007462686567164201
          },
          {
            "date": "2026-05-11",
            "short_ratio": 0.03959219414560921,
            "short_vol": 63300,
            "total_vol": 1598800,
            "close": 0.67,
            "return": 0.007518796992481258
          },
          {
            "date": "2026-05-08",
            "short_ratio": 0.008327781479013991,
            "short_vol": 5000,
            "total_vol": 600400,
            "close": 0.665,
            "return": -0.007462686567164201
          },
          {
            "date": "2026-05-07",
            "short_ratio": 0.023456589021013195,
            "short_vol": 14400,
            "total_vol": 613900,
            "close": 0.67,
            "return": 0.007518796992481258
          },
          {
            "date": "2026-05-06",
            "short_ratio": 0.010781990521327015,
            "short_vol": 9100,
            "total_vol": 844000,
            "close": 0.665,
            "return": -0.007462686567164201
          },
          {
            "date": "2026-05-05",
            "short_ratio": 0.004997284084736557,
            "short_vol": 9200,
            "total_vol": 1841000,
            "close": 0.67,
            "return": 0.007518796992481258
          },
          {
            "date": "2026-05-04",
            "short_ratio": 0.03047168498678169,
            "short_vol": 21900,
            "total_vol": 718700,
            "close": 0.665,
            "return": -0.007462686567164201
          },
          {
            "date": "2026-04-30",
            "short_ratio": 0.11554982817869416,
            "short_vol": 107600,
            "total_vol": 931200,
            "close": 0.67,
            "return": 0.007518796992481258
          },
          {
            "date": "2026-04-29",
            "short_ratio": 0.05085158150851581,
            "short_vol": 20900,
            "total_vol": 411000,
            "close": 0.665,
            "return": 0.007575757575757569
          },
          {
            "date": "2026-04-28",
            "short_ratio": 0.1365038753856573,
            "short_vol": 181400,
            "total_vol": 1328900,
            "close": 0.66,
            "return": 0.0
          },
          {
            "date": "2026-04-27",
            "short_ratio": 0.03616133518776078,
            "short_vol": 13000,
            "total_vol": 359500,
            "close": 0.66,
            "return": 0.0
          },
          {
            "date": "2026-04-24",
            "short_ratio": 0.028525382755842064,
            "short_vol": 17700,
            "total_vol": 620500,
            "close": 0.66,
            "return": 0.0
          },
          {
            "date": "2026-04-23",
            "short_ratio": 0.001321003963011889,
            "short_vol": 800,
            "total_vol": 605600,
            "close": 0.66,
            "return": -0.014925373134328401
          },
          {
            "date": "2026-04-22",
            "short_ratio": 0.0046252848907360235,
            "short_vol": 6900,
            "total_vol": 1491800,
            "close": 0.67,
            "return": 0.007518796992481258
          },
          {
            "date": "2026-04-21",
            "short_ratio": 0.023340669523919843,
            "short_vol": 40300,
            "total_vol": 1726600,
            "close": 0.665,
            "return": 0.0
          },
          {
            "date": "2026-04-20",
            "short_ratio": 0.007475209763539283,
            "short_vol": 4900,
            "total_vol": 655500,
            "close": 0.665,
            "return": 0.0
          },
          {
            "date": "2026-04-17",
            "short_ratio": 0.0030158914279085954,
            "short_vol": 2600,
            "total_vol": 862100,
            "close": 0.665,
            "return": -0.007462686567164201
          },
          {
            "date": "2026-04-16",
            "short_ratio": 0.006643180674383493,
            "short_vol": 6600,
            "total_vol": 993500,
            "close": 0.67,
            "return": 0.015151515151515138
          },
          {
            "date": "2026-04-15",
            "short_ratio": 0.008671713695801789,
            "short_vol": 18900,
            "total_vol": 2179500,
            "close": 0.66,
            "return": 0.007633587786259444
          },
          {
            "date": "2026-04-14",
            "short_ratio": 0.04148936170212766,
            "short_vol": 35100,
            "total_vol": 846000,
            "close": 0.655,
            "return": 0.0
          },
          {
            "date": "2026-04-13",
            "short_ratio": 0.05741664069803677,
            "short_vol": 73700,
            "total_vol": 1283600,
            "close": 0.655,
            "return": 0.015503875968992276
          },
          {
            "date": "2026-04-10",
            "short_ratio": 0.016528313074414467,
            "short_vol": 22300,
            "total_vol": 1349200,
            "close": 0.645,
            "return": 0.0
          },
          {
            "date": "2026-04-09",
            "short_ratio": 0.00303905181583346,
            "short_vol": 4000,
            "total_vol": 1316200,
            "close": 0.645,
            "return": 0.0
          },
          {
            "date": "2026-04-08",
            "short_ratio": 0.010373267579287476,
            "short_vol": 12200,
            "total_vol": 1176100,
            "close": 0.645,
            "return": 0.015748031496062964
          },
          {
            "date": "2026-04-07",
            "short_ratio": 0.043985045084671215,
            "short_vol": 20000,
            "total_vol": 454700,
            "close": 0.635,
            "return": 0.0
          },
          {
            "date": "2026-04-06",
            "short_ratio": 0.1613056945437217,
            "short_vol": 203100,
            "total_vol": 1259100,
            "close": 0.635,
            "return": 0.0
          },
          {
            "date": "2026-04-02",
            "short_ratio": 0.05267156242086604,
            "short_vol": 41600,
            "total_vol": 789800,
            "close": 0.635,
            "return": -0.0078125
          },
          {
            "date": "2026-04-01",
            "short_ratio": 0.01472584426802682,
            "short_vol": 35800,
            "total_vol": 2431100,
            "close": 0.64,
            "return": 0.007874015748031482
          },
          {
            "date": "2026-03-31",
            "short_ratio": 0.10057279872119355,
            "short_vol": 151000,
            "total_vol": 1501400,
            "close": 0.635,
            "return": 0.007936507936507908
          },
          {
            "date": "2026-03-30",
            "short_ratio": 0.06768748912476075,
            "short_vol": 38900,
            "total_vol": 574700,
            "close": 0.63,
            "return": -0.007874015748031482
          },
          {
            "date": "2026-03-27",
            "short_ratio": 0.26441708229426436,
            "short_vol": 339300,
            "total_vol": 1283200,
            "close": 0.635,
            "return": 0.0
          },
          {
            "date": "2026-03-26",
            "short_ratio": 0.1595657756507529,
            "short_vol": 136700,
            "total_vol": 856700,
            "close": 0.635,
            "return": 0.0
          },
          {
            "date": "2026-03-25",
            "short_ratio": 0.36836158192090396,
            "short_vol": 97800,
            "total_vol": 265500,
            "close": 0.635,
            "return": 0.0
          },
          {
            "date": "2026-03-24",
            "short_ratio": 0.2476085356880059,
            "short_vol": 134600,
            "total_vol": 543600,
            "close": 0.635,
            "return": 0.007936507936507908
          },
          {
            "date": "2026-03-23",
            "short_ratio": 0.18642151319994102,
            "short_vol": 379200,
            "total_vol": 2034100,
            "close": 0.63,
            "return": -0.015625
          },
          {
            "date": "2026-03-20",
            "short_ratio": 0.1987347631538343,
            "short_vol": 386400,
            "total_vol": 1944300,
            "close": 0.64,
            "return": 0.0
          },
          {
            "date": "2026-03-19",
            "short_ratio": 0.17494422918868147,
            "short_vol": 149000,
            "total_vol": 851700,
            "close": 0.64,
            "return": -0.015384615384615441
          },
          {
            "date": "2026-03-18",
            "short_ratio": 0.11682385153635534,
            "short_vol": 192000,
            "total_vol": 1643500,
            "close": 0.65,
            "return": 0.007751937984496138
          },
          {
            "date": "2026-03-17",
            "short_ratio": 0.13784764207980654,
            "short_vol": 114000,
            "total_vol": 827000,
            "close": 0.645,
            "return": 0.015748031496062964
          },
          {
            "date": "2026-03-16",
            "short_ratio": 0.18052071005917159,
            "short_vol": 762700,
            "total_vol": 4225000,
            "close": 0.635,
            "return": -0.06617647058823539
          },
          {
            "date": "2026-03-13",
            "short_ratio": 0.17986120035985093,
            "short_vol": 559800,
            "total_vol": 3112400,
            "close": 0.68,
            "return": 0.007407407407407307
          },
          {
            "date": "2026-03-12",
            "short_ratio": 0.16983923463852452,
            "short_vol": 172200,
            "total_vol": 1013900,
            "close": 0.675,
            "return": -0.007352941176470562
          },
          {
            "date": "2026-03-11",
            "short_ratio": 0.11613756613756614,
            "short_vol": 131700,
            "total_vol": 1134000,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2026-03-10",
            "short_ratio": 0.1979909267660402,
            "short_vol": 183300,
            "total_vol": 925800,
            "close": 0.68,
            "return": 0.014925373134328401
          },
          {
            "date": "2026-03-09",
            "short_ratio": 0.20926869577193224,
            "short_vol": 607800,
            "total_vol": 2904400,
            "close": 0.67,
            "return": -0.007407407407407418
          },
          {
            "date": "2026-03-06",
            "short_ratio": 0.02449013707790037,
            "short_vol": 29300,
            "total_vol": 1196400,
            "close": 0.675,
            "return": -0.007352941176470562
          },
          {
            "date": "2026-03-05",
            "short_ratio": 0.0008945998698763826,
            "short_vol": 1100,
            "total_vol": 1229600,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2026-03-04",
            "short_ratio": 0.0033744990977901718,
            "short_vol": 14400,
            "total_vol": 4267300,
            "close": 0.68,
            "return": -0.007299270072992692
          },
          {
            "date": "2026-03-03",
            "short_ratio": 0.03416203059805285,
            "short_vol": 39300,
            "total_vol": 1150400,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-03-02",
            "short_ratio": 0.05836125856291332,
            "short_vol": 196800,
            "total_vol": 3372100,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-02-27",
            "short_ratio": 0.0067413905133203375,
            "short_vol": 16600,
            "total_vol": 2462400,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-02-26",
            "short_ratio": 0.0060887923385246154,
            "short_vol": 39800,
            "total_vol": 6536600,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-02-25",
            "short_ratio": 0.0008496176720475786,
            "short_vol": 800,
            "total_vol": 941600,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-02-24",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 382700,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-02-23",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1809900,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-02-20",
            "short_ratio": 0.09221772379667116,
            "short_vol": 20500,
            "total_vol": 222300,
            "close": 0.685,
            "return": -0.007246376811594013
          },
          {
            "date": "2026-02-19",
            "short_ratio": 0.04595755760968624,
            "short_vol": 105900,
            "total_vol": 2304300,
            "close": 0.69,
            "return": 0.014705882352941124
          },
          {
            "date": "2026-02-16",
            "short_ratio": 0.06251680559290132,
            "short_vol": 46500,
            "total_vol": 743800,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2026-02-13",
            "short_ratio": 0.009060706735125339,
            "short_vol": 18000,
            "total_vol": 1986600,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2026-02-12",
            "short_ratio": 0.022450728363324766,
            "short_vol": 13100,
            "total_vol": 583500,
            "close": 0.68,
            "return": -0.007299270072992692
          },
          {
            "date": "2026-02-11",
            "short_ratio": 0.006556033599672198,
            "short_vol": 3200,
            "total_vol": 488100,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-02-10",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 726400,
            "close": 0.685,
            "return": 0.007352941176470562
          },
          {
            "date": "2026-02-09",
            "short_ratio": 0.002091020910209102,
            "short_vol": 1700,
            "total_vol": 813000,
            "close": 0.68,
            "return": -0.007299270072992692
          },
          {
            "date": "2026-02-06",
            "short_ratio": 0.030951223464592448,
            "short_vol": 19100,
            "total_vol": 617100,
            "close": 0.685,
            "return": 0.007352941176470562
          },
          {
            "date": "2026-02-05",
            "short_ratio": 0.01563966218329684,
            "short_vol": 10000,
            "total_vol": 639400,
            "close": 0.68,
            "return": -0.007299270072992692
          },
          {
            "date": "2026-02-04",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 775000,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-02-03",
            "short_ratio": 0.025183823529411765,
            "short_vol": 13700,
            "total_vol": 544000,
            "close": 0.685,
            "return": -0.007246376811594013
          },
          {
            "date": "2026-02-02",
            "short_ratio": 0.025774609267891418,
            "short_vol": 9400,
            "total_vol": 364700,
            "close": 0.69,
            "return": 0.007299270072992581
          },
          {
            "date": "2026-01-30",
            "short_ratio": 0.004020369874028411,
            "short_vol": 4500,
            "total_vol": 1119300,
            "close": 0.685,
            "return": -0.007246376811594013
          },
          {
            "date": "2026-01-29",
            "short_ratio": 0.03738632536207477,
            "short_vol": 11100,
            "total_vol": 296900,
            "close": 0.69,
            "return": 0.007299270072992581
          },
          {
            "date": "2026-01-28",
            "short_ratio": 0.0007983273141988215,
            "short_vol": 2100,
            "total_vol": 2630500,
            "close": 0.685,
            "return": -0.007246376811594013
          },
          {
            "date": "2026-01-27",
            "short_ratio": 0.025203641590800192,
            "short_vol": 26300,
            "total_vol": 1043500,
            "close": 0.69,
            "return": 0.007299270072992581
          },
          {
            "date": "2026-01-26",
            "short_ratio": 0.016331658291457288,
            "short_vol": 3900,
            "total_vol": 238800,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-01-23",
            "short_ratio": 0.09597292724196277,
            "short_vol": 141800,
            "total_vol": 1477500,
            "close": 0.685,
            "return": -0.007246376811594013
          },
          {
            "date": "2026-01-22",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 285400,
            "close": 0.69,
            "return": 0.0
          },
          {
            "date": "2026-01-21",
            "short_ratio": 0.018341650418057437,
            "short_vol": 55500,
            "total_vol": 3025900,
            "close": 0.69,
            "return": 0.0
          },
          {
            "date": "2026-01-20",
            "short_ratio": 0.043049733771383256,
            "short_vol": 38000,
            "total_vol": 882700,
            "close": 0.69,
            "return": 0.0
          },
          {
            "date": "2026-01-19",
            "short_ratio": 0.012526652452025586,
            "short_vol": 14100,
            "total_vol": 1125600,
            "close": 0.69,
            "return": 0.007299270072992581
          },
          {
            "date": "2026-01-16",
            "short_ratio": 0.05860180641490648,
            "short_vol": 82400,
            "total_vol": 1406100,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-01-15",
            "short_ratio": 0.008310957678046285,
            "short_vol": 6500,
            "total_vol": 782100,
            "close": 0.685,
            "return": 0.007352941176470562
          },
          {
            "date": "2026-01-14",
            "short_ratio": 0.0022742213456994117,
            "short_vol": 12800,
            "total_vol": 5628300,
            "close": 0.68,
            "return": -0.014492753623188248
          },
          {
            "date": "2026-01-13",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 540300,
            "close": 0.69,
            "return": 0.007299270072992581
          },
          {
            "date": "2026-01-12",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 319100,
            "close": 0.685,
            "return": 0.007352941176470562
          },
          {
            "date": "2026-01-09",
            "short_ratio": 0.0015347885402455662,
            "short_vol": 900,
            "total_vol": 586400,
            "close": 0.68,
            "return": -0.007299270072992692
          },
          {
            "date": "2026-01-08",
            "short_ratio": 0.007297551789077213,
            "short_vol": 6200,
            "total_vol": 849600,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-01-07",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 772400,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-01-06",
            "short_ratio": 0.0003454231433506045,
            "short_vol": 200,
            "total_vol": 579000,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-01-05",
            "short_ratio": 0.0045684058667949026,
            "short_vol": 3800,
            "total_vol": 831800,
            "close": 0.685,
            "return": 0.007352941176470562
          },
          {
            "date": "2026-01-02",
            "short_ratio": 0.020073603211776515,
            "short_vol": 6000,
            "total_vol": 298900,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-12-31",
            "short_ratio": 0.00038550501156515033,
            "short_vol": 200,
            "total_vol": 518800,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-12-30",
            "short_ratio": 0.0137524557956778,
            "short_vol": 7700,
            "total_vol": 559900,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-12-29",
            "short_ratio": 0.023554603854389723,
            "short_vol": 4400,
            "total_vol": 186800,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-12-26",
            "short_ratio": 0.0009287925696594427,
            "short_vol": 300,
            "total_vol": 323000,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-12-24",
            "short_ratio": 0.0002644802962179318,
            "short_vol": 100,
            "total_vol": 378100,
            "close": 0.68,
            "return": 0.007407407407407307
          },
          {
            "date": "2025-12-23",
            "short_ratio": 0.002872737719046251,
            "short_vol": 2000,
            "total_vol": 696200,
            "close": 0.675,
            "return": 0.0
          },
          {
            "date": "2025-12-22",
            "short_ratio": 0.013897662665824383,
            "short_vol": 4400,
            "total_vol": 316600,
            "close": 0.675,
            "return": 0.0
          },
          {
            "date": "2025-12-19",
            "short_ratio": 0.04928861788617886,
            "short_vol": 58200,
            "total_vol": 1180800,
            "close": 0.675,
            "return": 0.0
          },
          {
            "date": "2025-12-18",
            "short_ratio": 0.10728476821192053,
            "short_vol": 24300,
            "total_vol": 226500,
            "close": 0.675,
            "return": 0.0
          },
          {
            "date": "2025-12-17",
            "short_ratio": 0.13839969372128638,
            "short_vol": 72300,
            "total_vol": 522400,
            "close": 0.675,
            "return": 0.00746268656716409
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "CRPU",
          "avg_short_ratio": 0.07010270344665162,
          "max_short_ratio": 0.36836158192090396,
          "is_target": true
        },
        {
          "ticker": "AU8U",
          "avg_short_ratio": 0.06299468073313197,
          "max_short_ratio": 0.583009889700239,
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
          "opening": 0.04469632846476597,
          "continuous": 0.8788360875238999,
          "closing": 0.07179360430708556,
          "auctions": 0.12116391247610014,
          "other": 0.0
        },
        "1M": {
          "opening": 0.01653546656691451,
          "continuous": 0.9050013658498169,
          "closing": 0.07031978464222294,
          "auctions": 0.09499863415018302,
          "other": 0.0
        },
        "3M": {
          "opening": 0.04697547292003545,
          "continuous": 0.8725886602803867,
          "closing": 0.0668359136821053,
          "auctions": 0.1274113397196133,
          "other": 0.0
        },
        "6M": {
          "opening": 0.03747250558764897,
          "continuous": 0.8677492418883732,
          "closing": 0.08318670708397544,
          "auctions": 0.13225075811162687,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.2989262497107418,
        "1M": 0.23118124870410037,
        "3M": 0.22514666608811923,
        "6M": 0.23335785892706254
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.0178
        },
        {
          "time": "09:00",
          "avg_share": 0.1013
        },
        {
          "time": "09:30",
          "avg_share": 0.0399
        },
        {
          "time": "10:00",
          "avg_share": 0.046
        },
        {
          "time": "10:30",
          "avg_share": 0.0346
        },
        {
          "time": "11:00",
          "avg_share": 0.0299
        },
        {
          "time": "11:30",
          "avg_share": 0.0393
        },
        {
          "time": "12:00",
          "avg_share": 0.2374
        },
        {
          "time": "12:30",
          "avg_share": 0.0097
        },
        {
          "time": "13:00",
          "avg_share": 0.0214
        },
        {
          "time": "13:30",
          "avg_share": 0.0203
        },
        {
          "time": "14:00",
          "avg_share": 0.032
        },
        {
          "time": "14:30",
          "avg_share": 0.0318
        },
        {
          "time": "15:00",
          "avg_share": 0.0307
        },
        {
          "time": "15:30",
          "avg_share": 0.0518
        },
        {
          "time": "16:00",
          "avg_share": 0.0387
        },
        {
          "time": "16:30",
          "avg_share": 0.0995
        },
        {
          "time": "17:00",
          "avg_share": 0.1178
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "CRPU",
          "auctions_pct": 12.002756662974006,
          "hhi": 0.22732523445259345,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400",
            "you": true
          }
        },
        {
          "ticker": "AU8U",
          "auctions_pct": 14.124589458357503,
          "hhi": 0.17086355610380138,
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
