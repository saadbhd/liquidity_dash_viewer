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
      "ticker": "751",
      "name": "SKYWORTH GROUP",
      "marketCap": 11635829101.800001,
      "sector": "Consumer Electronics",
      "industry": "Consumer Discretionary - Household Goods & Electronics"
    },
    {
      "ticker": "1070",
      "name": "TCL ELECTRONICS",
      "marketCap": 32167132577.8,
      "sector": "Consumer Electronics",
      "industry": "Consumer Discretionary - Household Goods & Electronics"
    },
    {
      "ticker": "6969",
      "name": "SMOORE INTL",
      "marketCap": 55011287788.08,
      "sector": "Consumer Electronics",
      "industry": "Consumer Discretionary - Household Goods & Electronics"
    },
    {
      "ticker": "921",
      "name": "HISENSE HA",
      "marketCap": 9168816669.6,
      "sector": "Home Appliances",
      "industry": "Consumer Discretionary - Household Goods & Electronics"
    },
    {
      "ticker": "1126",
      "name": "DREAM INT'L",
      "marketCap": 4663599850.0,
      "sector": "Toys & Leisure Products",
      "industry": "Consumer Discretionary - Household Goods & Electronics"
    },
    {
      "ticker": "1999",
      "name": "MAN WAH HLDGS",
      "marketCap": 16714538591.999998,
      "sector": "Household Goods",
      "industry": "Consumer Discretionary - Household Goods & Electronics"
    },
    {
      "ticker": "1691",
      "name": "JS GLOBAL LIFE",
      "marketCap": 6045754891.98,
      "sector": "Home Appliances",
      "industry": "Consumer Discretionary - Household Goods & Electronics"
    },
    {
      "ticker": "2580",
      "name": "AUX ELECTRIC",
      "marketCap": 14818234416.0,
      "sector": "Home Appliances",
      "industry": "Consumer Discretionary - Household Goods & Electronics"
    },
    {
      "ticker": "2285",
      "name": "CHERVON",
      "marketCap": 8330177119.3,
      "sector": "Home Appliances",
      "industry": "Consumer Discretionary - Household Goods & Electronics"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XHKG",
    "currency": "HKD",
    "ticker": "751",
    "company": "SKYWORTH GROUP",
    "asof_date": "2026-03-31",
    "industry": "Consumer Discretionary - Household Goods & Electronics",
    "sector": "Consumer Electronics",
    "market_cap_display": "11.6B",
    "market_cap_category": "large",
    "universe_total": 2607,
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
          "score_pca": 78.09742999616417,
          "score_pca_percentile": 78.09742999616417,
          "rank_pca": 572,
          "total": 2607,
          "adv_notional_sgd": 22595100.0,
          "adv_volume_shares": 3674000.0,
          "free_float_shares": 641585551.0,
          "turnover_ratio": 0.005726438187820099,
          "votes": 830.0,
          "trades": 830.0,
          "spread_pct": 0.0033067364776108344,
          "spread_ticks": 2.0645285935085007,
          "amihud": 1.6622491356979728e-09,
          "volatility": 0.5276864172196447
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5598329178332057,
          "loadings": {
            "log_adv": 0.5297645529578383,
            "log_trades": 0.4922167592936276,
            "log_turnover": 0.49803057263960104,
            "neg_spread": 0.39893535636861427,
            "neg_amihud": 0.0696177592601886,
            "neg_vol": -0.2550326999636883
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
          "peer_median_adv": 30599906.0,
          "peer_median_score_pca": 79.90026850786344,
          "peer_median_trades": 1575.5,
          "peer_median_volatility": 0.3760352784976516,
          "peer_median_spread_pct": 0.00278212687788675,
          "peer_median_spread_ticks": 1.5403108305002429,
          "peer_median_amihud": 3.946274400320108e-10,
          "peer_median_turnover_ratio": 0.006934426261725479,
          "target_vs_peer": {
            "score_pca_delta": -1.8,
            "adv_delta_pct": -26.2,
            "trades_delta_pct": -47.32,
            "volatility_delta_pct": -40.33,
            "spread_pct_delta_pct": -18.86,
            "spread_ticks_delta_pct": 34.03,
            "amihud_delta_pct": -321.22,
            "turnover_ratio_delta_pct": -17.42
          }
        },
        "peer_liquidity": [
          {
            "ticker": "751",
            "score_pca": 78.09742999616417,
            "rank_pca": 572,
            "adv": 22595100.0,
            "trades": 830.0,
            "volatility": 0.5276864172196447,
            "spread_pct": 0.0033067364776108344,
            "spread_ticks": 2.0645285935085007,
            "amihud": 1.6622491356979728e-09,
            "turnover_ratio": 0.005726438187820099,
            "is_target": true
          },
          {
            "ticker": "1070",
            "score_pca": 96.16417337936325,
            "rank_pca": 101,
            "adv": 397813607.4,
            "trades": 9591.0,
            "volatility": 0.6079262976786094,
            "spread_pct": 0.0021779317440658655,
            "spread_ticks": null,
            "amihud": 7.715841854000492e-11,
            "turnover_ratio": 0.02720285304763411,
            "is_target": false
          },
          {
            "ticker": "6969",
            "score_pca": 90.06520905255083,
            "rank_pca": 260,
            "adv": 132775385.04,
            "trades": 4361.0,
            "volatility": 0.5818208307573314,
            "spread_pct": 0.00172447144053176,
            "spread_ticks": 1.5403108305002429,
            "amihud": 2.4612798940290226e-10,
            "turnover_ratio": 0.007871319711515874,
            "is_target": false
          },
          {
            "ticker": "921",
            "score_pca": 78.51937092443421,
            "rank_pca": 561,
            "adv": 40099500.0,
            "trades": 985.0,
            "volatility": 0.3686566486394547,
            "spread_pct": 0.0031621753323421145,
            "spread_ticks": null,
            "amihud": 4.0652824138671516e-10,
            "turnover_ratio": 0.005997532811935083,
            "is_target": false
          },
          {
            "ticker": "1126",
            "score_pca": 74.33831990794016,
            "rank_pca": 670,
            "adv": 7678905.0,
            "trades": 802.0,
            "volatility": 0.36032479476150503,
            "spread_pct": 0.004580974131655524,
            "spread_ticks": 3.1627372052903966,
            "amihud": 2.8982247961575387e-09,
            "turnover_ratio": 0.005171597742965328,
            "is_target": false
          },
          {
            "ticker": "1999",
            "score_pca": 76.48638281549674,
            "rank_pca": 614,
            "adv": 20117356.0,
            "trades": 1435.0,
            "volatility": 0.26545418556481315,
            "spread_pct": 0.0031882097130793764,
            "spread_ticks": 1.36996336996337,
            "amihud": 1.1506555905333641e-10,
            "turnover_ratio": 0.0032214267809363532,
            "is_target": false
          },
          {
            "ticker": "1691",
            "score_pca": 71.03950901419256,
            "rank_pca": 756,
            "adv": 5587140.0,
            "trades": 503.0,
            "volatility": 0.3345470825098914,
            "spread_pct": 0.0060176684899112785,
            "spread_ticks": 1.0289283366206443,
            "amihud": 5.295338727250074e-09,
            "turnover_ratio": 0.003941746921961826,
            "is_target": false
          },
          {
            "ticker": "2580",
            "score_pca": 81.28116609129268,
            "rank_pca": 489,
            "adv": 27965742.0,
            "trades": 1716.0,
            "volatility": 0.3834139083558486,
            "spread_pct": 0.0024020784234313856,
            "spread_ticks": 2.2502421698417825,
            "amihud": 1.1498953379655622e-09,
            "turnover_ratio": 0.010432490312426528,
            "is_target": false
          },
          {
            "ticker": "2285",
            "score_pca": 87.95550441120061,
            "rank_pca": 315,
            "adv": 33234070.0,
            "trades": 3947.0,
            "volatility": 0.5260036188691842,
            "spread_pct": 0.002110780048164248,
            "spread_ticks": null,
            "amihud": 3.827266386773064e-10,
            "turnover_ratio": 0.021458013784613744,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Consumer Electronics",
          "sector_count": 16,
          "market_count": 2607,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.49242991965509486,
              "median": 0.3702839617036409,
              "min": 0.0,
              "max": 12.056183174095738,
              "p5": 0.0,
              "p95": 1.4900129303204466,
              "count": 2607
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 75765757.13324317,
              "median": 255117.37261269218,
              "min": 0.0,
              "max": 12484489600.0,
              "p5": 0.0,
              "p95": 306492891.7039994,
              "count": 2607
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.05236208021531143,
              "median": 0.029488795794554625,
              "min": 0.0004686854076525858,
              "max": 0.7648559970834851,
              "p5": 0.0014866246801682839,
              "p95": 0.17627994601781508,
              "count": 2607
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00684662285367795,
              "median": 0.0010664138949048742,
              "min": 0.0,
              "max": 0.5520647260843509,
              "p5": 0.0,
              "p95": 0.022951477733405952,
              "count": 2584
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.8079447622066976e-06,
              "median": 7.313467542044848e-09,
              "min": 0.0,
              "max": 0.0008544921875,
              "p5": 0.0,
              "p95": 4.999020483952848e-06,
              "count": 2193
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1413.271192942079,
              "median": 24.0,
              "min": 0.0,
              "max": 83841.0,
              "p5": 0.0,
              "p95": 7696.699999999998,
              "count": 2607
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.44088060899991155,
              "median": 0.4340440107041702,
              "min": 0.0,
              "max": 1.3449888378743202,
              "p5": 0.0,
              "p95": 1.2558884927376073,
              "count": 16
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 34975083.07125,
              "median": 108514.0,
              "min": 0.0,
              "max": 397813607.4,
              "p5": 0.0,
              "p95": 199034940.63,
              "count": 16
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.06585638988712089,
              "median": 0.04778863979249559,
              "min": 0.00172447144053176,
              "max": 0.21201758671226192,
              "p5": 0.002064566668182339,
              "p95": 0.18522856480416014,
              "count": 16
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003260183367569873,
              "median": 0.00043204950020589086,
              "min": 0.0,
              "max": 0.02720285304763411,
              "p5": 0.0,
              "p95": 0.012704203045545433,
              "count": 16
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.1366396704802163e-06,
              "median": 9.25744919701172e-09,
              "min": 0.0,
              "max": 2.2784233310549107e-05,
              "p5": 0.0,
              "p95": 1.889518058342336e-05,
              "count": 14
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 937.3125,
              "median": 9.0,
              "min": 0.0,
              "max": 9591.0,
              "p5": 0.0,
              "p95": 5668.5,
              "count": 16
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 83158963.18,
              "median": 30599906.0,
              "min": 5587140.0,
              "max": 397813607.4,
              "p5": 6319257.75,
              "p95": 305050229.5739999,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2917.5,
              "median": 1575.5,
              "min": 503.0,
              "max": 9591.0,
              "p5": 607.65,
              "p95": 7760.499999999997,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4285184208920797,
              "median": 0.3760352784976516,
              "min": 0.26545418556481315,
              "max": 0.6079262976786094,
              "p5": 0.28963669949559057,
              "p95": 0.5987893842561621,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.003170536165397694,
              "median": 0.00278212687788675,
              "min": 0.00172447144053176,
              "max": 0.0060176684899112785,
              "p5": 0.0018596794532031308,
              "p95": 0.005514825464521764,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.3213832135541799e-09,
              "median": 3.946274400320108e-10,
              "min": 7.715841854000492e-11,
              "max": 5.295338727250074e-09,
              "p5": 9.042591771967095e-11,
              "p95": 4.456348851367685e-09,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.010662122639248605,
              "median": 0.006934426261725479,
              "min": 0.0032214267809363532,
              "max": 0.02720285304763411,
              "p5": 0.0034735388302952687,
              "p95": 0.02519215930557698,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.8704363824432875,
              "median": 1.5403108305002429,
              "min": 1.0289283366206443,
              "max": 3.1627372052903966,
              "p5": 1.0971353432891895,
              "p95": 2.9802381982006736,
              "count": 5
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": -0.037558685446009266,
            "market": -0.006131557650310371,
            "sector": 0.006666666666666821,
            "peers": 0.0069933822003358515,
            "vs_market": -0.031427127795698895,
            "vs_sector": -0.044225352112676086,
            "vs_peers": -0.04455206764634512
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 76.6398158803222,
          "score_pca_percentile": 76.6398158803222,
          "rank_pca": 610,
          "total": 2607,
          "adv_notional_sgd": 14749129.81,
          "adv_volume_shares": 2098027.0,
          "free_float_shares": 641585551.0,
          "turnover_ratio": 0.003270065849721731,
          "votes": 447.0,
          "trades": 447.0,
          "spread_pct": 0.002899028572327615,
          "spread_ticks": 2.0435525192143467,
          "amihud": 6.55944097190552e-10,
          "volatility": 0.24727579521511725
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5806555100735369,
          "loadings": {
            "log_adv": 0.5169313360248206,
            "log_trades": 0.47014335520278583,
            "log_turnover": 0.4771874088628449,
            "neg_spread": 0.45206073210088077,
            "neg_amihud": 0.2752751128038773,
            "neg_vol": 0.062482821481211454
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
          "peer_median_adv": 23227585.435000002,
          "peer_median_score_pca": 82.566168009206,
          "peer_median_trades": 1833.5,
          "peer_median_volatility": 0.5225765829618939,
          "peer_median_spread_pct": 0.0029439048910478187,
          "peer_median_spread_ticks": 1.637467269697691,
          "peer_median_amihud": 7.822487920534687e-10,
          "peer_median_turnover_ratio": 0.004883359792231236,
          "target_vs_peer": {
            "score_pca_delta": -5.93,
            "adv_delta_pct": -36.5,
            "trades_delta_pct": -75.62,
            "volatility_delta_pct": 52.68,
            "spread_pct_delta_pct": 1.52,
            "spread_ticks_delta_pct": 24.8,
            "amihud_delta_pct": 16.15,
            "turnover_ratio_delta_pct": -33.04
          }
        },
        "peer_liquidity": [
          {
            "ticker": "751",
            "score_pca": 76.6398158803222,
            "rank_pca": 610,
            "adv": 14749129.81,
            "trades": 447.0,
            "volatility": 0.24727579521511725,
            "spread_pct": 0.002899028572327615,
            "spread_ticks": 2.0435525192143467,
            "amihud": 6.55944097190552e-10,
            "turnover_ratio": 0.003270065849721731,
            "is_target": true
          },
          {
            "ticker": "1070",
            "score_pca": 86.22938243191408,
            "rank_pca": 360,
            "adv": 63171607.720000006,
            "trades": 2660.0,
            "volatility": 0.6156526358336927,
            "spread_pct": 0.0025520121205634236,
            "spread_ticks": null,
            "amihud": 2.038968272048638e-10,
            "turnover_ratio": 0.004838736809200758,
            "is_target": false
          },
          {
            "ticker": "6969",
            "score_pca": 91.67625623321825,
            "rank_pca": 218,
            "adv": 150611766.79999998,
            "trades": 5079.0,
            "volatility": 0.7659034001035635,
            "spread_pct": 0.0018630086024954008,
            "spread_ticks": 1.637467269697691,
            "amihud": 1.1227290671054353e-10,
            "turnover_ratio": 0.007087131184134537,
            "is_target": false
          },
          {
            "ticker": "921",
            "score_pca": 76.17951668584581,
            "rank_pca": 622,
            "adv": 17312838.0,
            "trades": 456.0,
            "volatility": 0.34536124016185876,
            "spread_pct": 0.0030023870284010133,
            "spread_ticks": null,
            "amihud": 9.850682759687665e-10,
            "turnover_ratio": 0.002291594626649823,
            "is_target": false
          },
          {
            "ticker": "1126",
            "score_pca": 77.17683160721135,
            "rank_pca": 596,
            "adv": 7836080.0,
            "trades": 802.0,
            "volatility": 0.5893344582091551,
            "spread_pct": 0.004257232641463834,
            "spread_ticks": 3.494167055529631,
            "amihud": 3.036403440852391e-09,
            "turnover_ratio": 0.0049279827752617125,
            "is_target": false
          },
          {
            "ticker": "1999",
            "score_pca": 80.13041810510165,
            "rank_pca": 519,
            "adv": 19056270.87,
            "trades": 1355.0,
            "volatility": 0.2759807802793745,
            "spread_pct": 0.002947070368528264,
            "spread_ticks": 1.3205445544554455,
            "amihud": 4.927680167450661e-10,
            "turnover_ratio": 0.0028653644306337283,
            "is_target": false
          },
          {
            "ticker": "1691",
            "score_pca": 76.90832374376679,
            "rank_pca": 603,
            "adv": 6438900.0,
            "trades": 759.0,
            "volatility": 0.2712954515244596,
            "spread_pct": 0.006246920131913125,
            "spread_ticks": 1.0946614361248508,
            "amihud": 1.611444141109795e-09,
            "turnover_ratio": 0.004677065017961556,
            "is_target": false
          },
          {
            "ticker": "2580",
            "score_pca": 85.27042577675489,
            "rank_pca": 385,
            "adv": 27398900.0,
            "trades": 2312.0,
            "volatility": 0.45581870771463273,
            "spread_pct": 0.002005236769439208,
            "spread_ticks": 2.117568214830257,
            "amihud": 5.794293081381709e-10,
            "turnover_ratio": 0.008401958902448001,
            "is_target": false
          },
          {
            "ticker": "2285",
            "score_pca": 85.00191791331032,
            "rank_pca": 392,
            "adv": 30074340.0,
            "trades": 2412.0,
            "volatility": 0.9466981387787822,
            "spread_pct": 0.002940739413567373,
            "spread_ticks": null,
            "amihud": 1.015255972300368e-09,
            "turnover_ratio": 0.013434280541497593,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Consumer Electronics",
          "sector_count": 16,
          "market_count": 2607,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6710354845437732,
              "median": 0.5470691652595865,
              "min": 0.0,
              "max": 12.575339065692916,
              "p5": 0.21070392832465507,
              "p95": 1.5085076730306006,
              "count": 2607
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 72722524.87113972,
              "median": 227532.0,
              "min": 0.0,
              "max": 13677295520.0,
              "p5": 0.0,
              "p95": 260088872.38999954,
              "count": 2607
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0462774105261273,
              "median": 0.029111338100102167,
              "min": 0.0005766037246855124,
              "max": 0.8484231943031536,
              "p5": 0.001471166401915189,
              "p95": 0.14578315567079597,
              "count": 2607
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004799469728548532,
              "median": 0.0008957151185207807,
              "min": 0.0,
              "max": 1.211843253259325,
              "p5": 0.0,
              "p95": 0.016325587540012128,
              "count": 2584
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.1415890922595843e-06,
              "median": 4.697455277406427e-08,
              "min": 0.0,
              "max": 0.00015502332461030842,
              "p5": 3.483152269943349e-11,
              "p95": 4.620785325958261e-06,
              "count": 2602
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1244.3647871116225,
              "median": 21.0,
              "min": 0.0,
              "max": 112926.0,
              "p5": 0.0,
              "p95": 6280.5999999999785,
              "count": 2607
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6309342525832541,
              "median": 0.5308283276701915,
              "min": 0.24727579521511725,
              "max": 2.0390729408873054,
              "p5": 0.2712919706125725,
              "p95": 1.2963959309793807,
              "count": 16
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 15294442.198749999,
              "median": 79530.0,
              "min": 0.0,
              "max": 150611766.79999998,
              "p5": 0.0,
              "p95": 85031647.49000001,
              "count": 16
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.05713150277915111,
              "median": 0.05637848257354761,
              "min": 0.0018630086024954008,
              "max": 0.123301985370951,
              "p5": 0.002379761241046418,
              "p95": 0.12257359623416013,
              "count": 16
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002408138516823953,
              "median": 0.0009073984697700714,
              "min": 0.0,
              "max": 0.009475487595816547,
              "p5": 0.0,
              "p95": 0.007684220287055039,
              "count": 16
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.649400286667473e-07,
              "median": 1.3457006691862745e-07,
              "min": 0.0,
              "max": 2.7737240027706457e-06,
              "p5": 8.420468003290765e-11,
              "p95": 2.4204392527224876e-06,
              "count": 16
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 540.0,
              "median": 4.5,
              "min": 0.0,
              "max": 5079.0,
              "p5": 0.0,
              "p95": 3264.75,
              "count": 16
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 40237587.92375,
              "median": 23227585.435000002,
              "min": 6438900.0,
              "max": 150611766.79999998,
              "p5": 6927913.0,
              "p95": 120007711.12199995,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1979.375,
              "median": 1833.5,
              "min": 456.0,
              "max": 5079.0,
              "p5": 562.05,
              "p95": 4232.3499999999985,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5332556015756899,
              "median": 0.5225765829618939,
              "min": 0.2712954515244596,
              "max": 0.9466981387787822,
              "p5": 0.2729353165886798,
              "p95": 0.8834199802424555,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.003226825884546455,
              "median": 0.0029439048910478187,
              "min": 0.0018630086024954008,
              "max": 0.006246920131913125,
              "p5": 0.0019127884609257335,
              "p95": 0.0055505295102558725,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.0045673611287456e-09,
              "median": 7.822487920534687e-10,
              "min": 1.1227290671054353e-10,
              "max": 3.036403440852391e-09,
              "p5": 1.4434127888355562e-10,
              "p95": 2.5376676859424816e-09,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006065514285973464,
              "median": 0.004883359792231236,
              "min": 0.002291594626649823,
              "max": 0.013434280541497593,
              "p5": 0.0024924140580441898,
              "p95": 0.011672967967830234,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.932881706127575,
              "median": 1.637467269697691,
              "min": 1.0946614361248508,
              "max": 3.494167055529631,
              "p5": 1.1398380597909696,
              "p95": 3.2188472873897562,
              "count": 5
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": -0.1276595744680844,
            "market": -0.04370104310790479,
            "sector": -0.04810789270998128,
            "peers": -0.10062320222617327,
            "vs_market": -0.08395853136017961,
            "vs_sector": -0.07955168175810312,
            "vs_peers": -0.027036372241911133
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 75.29727656309935,
          "score_pca_percentile": 75.29727656309935,
          "rank_pca": 645,
          "total": 2607,
          "adv_notional_sgd": 15045155.76,
          "adv_volume_shares": 2125022.0,
          "free_float_shares": 641585551.0,
          "turnover_ratio": 0.003312141298518738,
          "votes": 523.0,
          "trades": 523.0,
          "spread_pct": 0.0030381789981182984,
          "spread_ticks": 1.9175,
          "amihud": 5.181000873443723e-10,
          "volatility": 0.827102349075025
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.6199745525532449,
          "loadings": {
            "log_adv": 0.49869883075893634,
            "log_trades": 0.45084604040580456,
            "log_turnover": 0.452180135362822,
            "neg_spread": 0.4597992677087187,
            "neg_amihud": 0.3342516828560681,
            "neg_vol": 0.14293668233084536
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
          "peer_median_adv": 21173076.0,
          "peer_median_score_pca": 83.02646720368239,
          "peer_median_trades": 1666.0,
          "peer_median_volatility": 0.4234613604149726,
          "peer_median_spread_pct": 0.0029148920946253,
          "peer_median_spread_ticks": 1.877517742263974,
          "peer_median_amihud": 5.599423703548152e-10,
          "peer_median_turnover_ratio": 0.004862582605883913,
          "target_vs_peer": {
            "score_pca_delta": -7.73,
            "adv_delta_pct": -28.9,
            "trades_delta_pct": -68.61,
            "volatility_delta_pct": -95.32,
            "spread_pct_delta_pct": -4.23,
            "spread_ticks_delta_pct": 2.13,
            "amihud_delta_pct": 7.47,
            "turnover_ratio_delta_pct": -31.89
          }
        },
        "peer_liquidity": [
          {
            "ticker": "751",
            "score_pca": 75.29727656309935,
            "rank_pca": 645,
            "adv": 15045155.76,
            "trades": 523.0,
            "volatility": 0.827102349075025,
            "spread_pct": 0.0030381789981182984,
            "spread_ticks": 1.9175,
            "amihud": 5.181000873443723e-10,
            "turnover_ratio": 0.003312141298518738,
            "is_target": true
          },
          {
            "ticker": "1070",
            "score_pca": 86.80475642500959,
            "rank_pca": 345,
            "adv": 67912585.28999999,
            "trades": 2672.0,
            "volatility": 0.6082648144654185,
            "spread_pct": 0.0023753599012812884,
            "spread_ticks": 2.135437589670014,
            "amihud": 2.042948857927932e-10,
            "turnover_ratio": 0.004919818489245383,
            "is_target": false
          },
          {
            "ticker": "6969",
            "score_pca": 93.2873034138857,
            "rank_pca": 176,
            "adv": 160204416.4,
            "trades": 5079.0,
            "volatility": 0.5495787747506325,
            "spread_pct": 0.0017495519382400885,
            "spread_ticks": 1.637467269697691,
            "amihud": 1.1227290671054353e-10,
            "turnover_ratio": 0.007521047639194955,
            "is_target": false
          },
          {
            "ticker": "921",
            "score_pca": 78.28922132719602,
            "rank_pca": 567,
            "adv": 19148544.9,
            "trades": 537.0,
            "volatility": 0.27325570990129255,
            "spread_pct": 0.0032328271223616752,
            "spread_ticks": null,
            "amihud": 5.274620171832251e-10,
            "turnover_ratio": 0.002495036310555567,
            "is_target": false
          },
          {
            "ticker": "1126",
            "score_pca": 77.29190640583046,
            "rank_pca": 593,
            "adv": 8360544.92,
            "trades": 705.0,
            "volatility": 0.46752096089455203,
            "spread_pct": 0.004225669247703332,
            "spread_ticks": 3.6022999520843317,
            "amihud": 2.2799318573966773e-09,
            "turnover_ratio": 0.004773419518895241,
            "is_target": false
          },
          {
            "ticker": "1999",
            "score_pca": 82.24012274645186,
            "rank_pca": 464,
            "adv": 20534472.0,
            "trades": 1673.0,
            "volatility": 0.327946272230836,
            "spread_pct": 0.0029632769409284,
            "spread_ticks": 1.36996336996337,
            "amihud": 5.420949794335317e-10,
            "turnover_ratio": 0.0030934696883865203,
            "is_target": false
          },
          {
            "ticker": "1691",
            "score_pca": 78.25086306098964,
            "rank_pca": 568,
            "adv": 6912735.0,
            "trades": 768.0,
            "volatility": 0.24028955105587865,
            "spread_pct": 0.006074321559267606,
            "spread_ticks": 1.070916905444126,
            "amihud": 1.0380005783739187e-09,
            "turnover_ratio": 0.004805346722522444,
            "is_target": false
          },
          {
            "ticker": "2580",
            "score_pca": 83.81281166091293,
            "rank_pca": 423,
            "adv": 21811680.0,
            "trades": 1659.0,
            "volatility": 0.37940175993539316,
            "spread_pct": 0.0020202491640635757,
            "spread_ticks": 2.117568214830257,
            "amihud": 5.777897612760989e-10,
            "turnover_ratio": 0.006341495078815352,
            "is_target": false
          },
          {
            "ticker": "2285",
            "score_pca": 85.11699271192941,
            "rank_pca": 389,
            "adv": 26296688.0,
            "trades": 2434.0,
            "volatility": 0.7230733905374473,
            "spread_pct": 0.0028665072483222,
            "spread_ticks": null,
            "amihud": 8.396576542773973e-10,
            "turnover_ratio": 0.012608122278663625,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Consumer Electronics",
          "sector_count": 16,
          "market_count": 2607,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7057291205256693,
              "median": 0.5728648400289352,
              "min": 0.0,
              "max": 8.183697405562258,
              "p5": 0.22076715302561178,
              "p95": 1.5833478902388864,
              "count": 2607
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 65852978.25924742,
              "median": 227610.00000000003,
              "min": 0.0,
              "max": 13968603216.0,
              "p5": 0.0,
              "p95": 240317281.18399876,
              "count": 2607
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04318059559038924,
              "median": 0.02729044834307995,
              "min": 0.0005645995381930385,
              "max": 0.5518881068100528,
              "p5": 0.001430852555938918,
              "p95": 0.13628172282605897,
              "count": 2607
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0038219756760674837,
              "median": 0.0008905163996897478,
              "min": 0.0,
              "max": 0.30766533440800353,
              "p5": 0.0,
              "p95": 0.015278962780254996,
              "count": 2584
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.122826913644738e-07,
              "median": 4.731152272135884e-08,
              "min": 0.0,
              "max": 4.7054394880481924e-05,
              "p5": 4.179883879557233e-11,
              "p95": 3.4417536796479828e-06,
              "count": 2607
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1113.1810510164942,
              "median": 20.0,
              "min": 0.0,
              "max": 103821.0,
              "p5": 0.0,
              "p95": 5823.7,
              "count": 2607
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7240567695731054,
              "median": 0.5722115366217412,
              "min": 0.26954798608081854,
              "max": 2.0112450023151154,
              "p5": 0.3183170158624812,
              "p95": 1.45649414183741,
              "count": 16
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 16097512.884374999,
              "median": 121280.0,
              "min": 0.0,
              "max": 160204416.4,
              "p5": 0.0,
              "p95": 90985543.0675,
              "count": 16
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.054559895395647526,
              "median": 0.05116858088451347,
              "min": 0.0017495519382400885,
              "max": 0.1445174330469934,
              "p5": 0.0022189079105209885,
              "p95": 0.12835870567781785,
              "count": 16
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00232845720626698,
              "median": 0.0010531299004301199,
              "min": 0.0,
              "max": 0.008824968369678882,
              "p5": 0.0,
              "p95": 0.007847027821815938,
              "count": 16
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.744773497463514e-07,
              "median": 1.0607156590815342e-07,
              "min": 0.0,
              "max": 1.68137873055906e-06,
              "p5": 8.420468003290765e-11,
              "p95": 1.1494582719080664e-06,
              "count": 16
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 545.125,
              "median": 8.0,
              "min": 0.0,
              "max": 5079.0,
              "p5": 0.0,
              "p95": 3273.75,
              "count": 16
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 41397708.31375,
              "median": 21173076.0,
              "min": 6912735.0,
              "max": 160204416.4,
              "p5": 7419468.472,
              "p95": 127902275.51149996,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1940.875,
              "median": 1666.0,
              "min": 537.0,
              "max": 5079.0,
              "p5": 595.8,
              "p95": 4236.549999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.44616640422143133,
              "median": 0.4234613604149726,
              "min": 0.24028955105587865,
              "max": 0.7230733905374473,
              "p5": 0.2518277066517735,
              "p95": 0.6828903889122372,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.003188470390271021,
              "median": 0.0029148920946253,
              "min": 0.0017495519382400885,
              "max": 0.006074321559267606,
              "p5": 0.001844295967278309,
              "p95": 0.005427293250220109,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.9889422169482982,
              "median": 1.877517742263974,
              "min": 1.070916905444126,
              "max": 3.6022999520843317,
              "p5": 1.1456785215739371,
              "p95": 3.2355843614807522,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.651880800555232e-10,
              "median": 5.599423703548152e-10,
              "min": 1.1227290671054353e-10,
              "max": 2.2799318573966773e-09,
              "p5": 1.4448059938933093e-10,
              "p95": 1.845255909738711e-09,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005819719465784886,
              "median": 0.004862582605883913,
              "min": 0.002495036310555567,
              "max": 0.012608122278663625,
              "p5": 0.0027044879927964004,
              "p95": 0.010827646154849588,
              "count": 8
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": 0.4927184466019432,
            "market": 0.06098476563318167,
            "sector": -0.09261972374096583,
            "peers": -0.14003249341114787,
            "vs_market": 0.4317336809687615,
            "vs_sector": 0.585338170342909,
            "vs_peers": 0.6327509400130911
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 77.75220560030687,
          "score_pca_percentile": 77.75220560030687,
          "rank_pca": 581,
          "total": 2607,
          "adv_notional_sgd": 15656860.0,
          "adv_volume_shares": 3449016.0,
          "free_float_shares": 641585551.0,
          "turnover_ratio": 0.005375769442787841,
          "votes": 633.0,
          "trades": 633.0,
          "spread_pct": 0.0032608137994431666,
          "spread_ticks": 1.6378161760012437,
          "amihud": 5.183686768022925e-10,
          "volatility": 0.6523084055353149
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.623884331835792,
          "loadings": {
            "log_adv": 0.4984360111119159,
            "log_trades": 0.45308826751176734,
            "log_turnover": 0.4501610497250237,
            "neg_spread": 0.46216478275401,
            "neg_amihud": 0.34133055512626786,
            "neg_vol": 0.11629600035953387
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
          "peer_median_adv": 24082239.5,
          "peer_median_score_pca": 83.12236286919831,
          "peer_median_trades": 1788.5,
          "peer_median_volatility": 0.46953432248949356,
          "peer_median_spread_pct": 0.0026697125727834494,
          "peer_median_spread_ticks": 1.775498591687556,
          "peer_median_amihud": 5.934886628233692e-10,
          "peer_median_turnover_ratio": 0.005731654981998034,
          "target_vs_peer": {
            "score_pca_delta": -5.37,
            "adv_delta_pct": -35.0,
            "trades_delta_pct": -64.61,
            "volatility_delta_pct": -38.93,
            "spread_pct_delta_pct": -22.14,
            "spread_ticks_delta_pct": -7.75,
            "amihud_delta_pct": 12.66,
            "turnover_ratio_delta_pct": -6.21
          }
        },
        "peer_liquidity": [
          {
            "ticker": "751",
            "score_pca": 77.75220560030687,
            "rank_pca": 581,
            "adv": 15656860.0,
            "trades": 633.0,
            "volatility": 0.6523084055353149,
            "spread_pct": 0.0032608137994431666,
            "spread_ticks": 1.6378161760012437,
            "amihud": 5.183686768022925e-10,
            "turnover_ratio": 0.005375769442787841,
            "is_target": true
          },
          {
            "ticker": "1070",
            "score_pca": 87.80207134637514,
            "rank_pca": 319,
            "adv": 65197271.0,
            "trades": 2651.0,
            "volatility": 0.5199385432926726,
            "spread_pct": 0.0022119884527865706,
            "spread_ticks": 1.9135299136774209,
            "amihud": 2.175070513721099e-10,
            "turnover_ratio": 0.005595164682501732,
            "is_target": false
          },
          {
            "ticker": "6969",
            "score_pca": 94.39969313387034,
            "rank_pca": 147,
            "adv": 201325932.68,
            "trades": 5568.5,
            "volatility": 0.5362618226344819,
            "spread_pct": 0.0016357208063743599,
            "spread_ticks": 1.637467269697691,
            "amihud": 9.423062797809111e-11,
            "turnover_ratio": 0.00843971816577227,
            "is_target": false
          },
          {
            "ticker": "921",
            "score_pca": 78.63444572305332,
            "rank_pca": 558,
            "adv": 25128860.0,
            "trades": 636.5,
            "volatility": 0.3763444104049438,
            "spread_pct": 0.0028870585310989774,
            "spread_ticks": null,
            "amihud": 4.008555368892003e-10,
            "turnover_ratio": 0.0032734295379768076,
            "is_target": false
          },
          {
            "ticker": "1126",
            "score_pca": 76.44802454929037,
            "rank_pca": 615,
            "adv": 8789978.515,
            "trades": 626.0,
            "volatility": 0.4956568271010146,
            "spread_pct": 0.00432067521634588,
            "spread_ticks": 3.436583396656535,
            "amihud": 2.0399812150794507e-09,
            "turnover_ratio": 0.0045833604016630785,
            "is_target": false
          },
          {
            "ticker": "1999",
            "score_pca": 82.47027234369007,
            "rank_pca": 458,
            "adv": 21608456.21,
            "trades": 1772.5,
            "volatility": 0.3309795626135033,
            "spread_pct": 0.002936508883882857,
            "spread_ticks": 1.359413639168011,
            "amihud": 5.793897127590127e-10,
            "turnover_ratio": 0.003123314265379973,
            "is_target": false
          },
          {
            "ticker": "1691",
            "score_pca": 78.94131185270426,
            "rank_pca": 550,
            "adv": 10777575.0,
            "trades": 907.0,
            "volatility": 0.28201756614473633,
            "spread_pct": 0.005853606386455868,
            "spread_ticks": 1.0688176388086825,
            "amihud": 8.315364320420883e-10,
            "turnover_ratio": 0.007236254334548263,
            "is_target": false
          },
          {
            "ticker": "2580",
            "score_pca": 83.77445339470655,
            "rank_pca": 424,
            "adv": 23035619.0,
            "trades": 1804.5,
            "volatility": 0.44341181787797257,
            "spread_pct": 0.0020805092437900592,
            "spread_ticks": 2.117568214830257,
            "amihud": 6.075876128877256e-10,
            "turnover_ratio": 0.005868145281494337,
            "is_target": false
          },
          {
            "ticker": "2285",
            "score_pca": 87.34177215189874,
            "rank_pca": 331,
            "adv": 28327452.5,
            "trades": 2656.0,
            "volatility": 0.6118448523512795,
            "spread_pct": 0.002452366614467922,
            "spread_ticks": null,
            "amihud": 6.442537785432063e-10,
            "turnover_ratio": 0.013408495984249908,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Consumer Electronics",
          "sector_count": 16,
          "market_count": 2607,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7407154072379732,
              "median": 0.5960261264727168,
              "min": 0.0593216797254774,
              "max": 33.69148083298805,
              "p5": 0.22291636091564176,
              "p95": 1.5562952258444027,
              "count": 2607
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 63472193.6609616,
              "median": 219920.0,
              "min": 0.0,
              "max": 13896623190.0,
              "p5": 0.0,
              "p95": 228498387.5579998,
              "count": 2607
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.042106154934994394,
              "median": 0.026612396298344696,
              "min": 0.000558678699550006,
              "max": 0.5518881068100528,
              "p5": 0.0013667703319299987,
              "p95": 0.13449868178503904,
              "count": 2607
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0035187881972746785,
              "median": 0.0008797362381101288,
              "min": 0.0,
              "max": 0.13261028525846094,
              "p5": 0.0,
              "p95": 0.014313397851931649,
              "count": 2584
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.308441646342878e-07,
              "median": 4.6868525954451004e-08,
              "min": 0.0,
              "max": 4.7054394880481924e-05,
              "p5": 4.529078948771039e-11,
              "p95": 3.4591819837721457e-06,
              "count": 2607
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1090.710203298811,
              "median": 21.0,
              "min": 0.0,
              "max": 114079.0,
              "p5": 0.0,
              "p95": 5806.59999999998,
              "count": 2607
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7500862960802479,
              "median": 0.6683550669348555,
              "min": 0.32316409909238264,
              "max": 1.988427430852115,
              "p5": 0.33451344999039867,
              "p95": 1.5551713134419214,
              "count": 16
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 18365502.351875,
              "median": 107637.5,
              "min": 0.0,
              "max": 201325932.68,
              "p5": 0.0,
              "p95": 99229436.42,
              "count": 16
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.050076572058845824,
              "median": 0.0546006031349195,
              "min": 0.0016357208063743599,
              "max": 0.129365536609029,
              "p5": 0.002067921541183518,
              "p95": 0.1011584727748159,
              "count": 16
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0023381101180289816,
              "median": 0.001163018643373577,
              "min": 0.0,
              "max": 0.00843971816577227,
              "p5": 0.0,
              "p95": 0.006306303053319366,
              "count": 16
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.1614262097762234e-07,
              "median": 1.2743157309854208e-07,
              "min": 0.0,
              "max": 2.775002775002775e-06,
              "p5": 7.067297098356833e-11,
              "p95": 1.49454082384024e-06,
              "count": 16
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 582.59375,
              "median": 13.5,
              "min": 0.0,
              "max": 5568.5,
              "p5": 0.0,
              "p95": 3380.375,
              "count": 16
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 48023893.113125,
              "median": 24082239.5,
              "min": 8789978.515,
              "max": 201325932.68,
              "p5": 9485637.28475,
              "p95": 153680901.09199995,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2077.75,
              "median": 1788.5,
              "min": 626.0,
              "max": 5568.5,
              "p5": 629.675,
              "p95": 4549.124999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.44955692530257557,
              "median": 0.46953432248949356,
              "min": 0.28201756614473633,
              "max": 0.6118448523512795,
              "p5": 0.29915426490880476,
              "p95": 0.5853907919504003,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0030473042669003116,
              "median": 0.0026697125727834494,
              "min": 0.0016357208063743599,
              "max": 0.005853606386455868,
              "p5": 0.0017913967594698546,
              "p95": 0.005317080476917371,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.9222300121397662,
              "median": 1.775498591687556,
              "min": 1.0688176388086825,
              "max": 3.436583396656535,
              "p5": 1.1414666388985146,
              "p95": 3.1068296011999657,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.769177459438606e-10,
              "median": 5.934886628233692e-10,
              "min": 9.423062797809111e-11,
              "max": 2.0399812150794507e-09,
              "p5": 1.373773761659977e-10,
              "p95": 1.617025541016373e-09,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006440985331698296,
              "median": 0.005731654981998034,
              "min": 0.003123314265379973,
              "max": 0.013408495984249908,
              "p5": 0.0031758546107888653,
              "p95": 0.011669423747782732,
              "count": 8
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": 0.31974248927038684,
            "market": 0.08593791309963694,
            "sector": -0.11477101894560382,
            "peers": -0.2290408111396861,
            "vs_market": 0.2338045761707499,
            "vs_sector": 0.43451350821599066,
            "vs_peers": 0.548783300410073
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "1D score 78.1 vs peer median 79.9 (-1.8 pts).",
        "market_comparison": "The stock fell 3.8% while peers rose 0.7%, which matters because weaker tape can make liquidity feel less supportive on the day."
      },
      "30d": {
        "liquidity": "Monthly tradability looks average, with a 1M liquidity score of 76.6 that sits below the peer median of 82.6.",
        "market_comparison": "The stock is down 12.8% over 1M compared with peers down 10.1% and the market down 4.4%, which matters because weaker performance is not helping access."
      },
      "3m": {
        "liquidity": "Three-month tradability looks average to slightly weak, with a 3M score of 75.3 against a peer median of 83.0.",
        "market_comparison": "The stock returned 49.3% compared with peers at -14.0%, which matters because stronger performance over this window likely supported trading interest."
      },
      "6m": {
        "liquidity": "Six-month tradability is average for its size, with a score of 77.8 that trails the peer median of 83.1.",
        "market_comparison": "Primary average daily volume is HK$15.7M compared with a peer median of HK$24.1M, which matters because peer-relative access is present but not especially deep."
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
          "median": 0.5389281074609656,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "53.9%",
          "display_range": null,
          "display_text": "53.9%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 53.9,
          "plain_english": "Market explains about 53.9% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.11622872427000246,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "11.6%",
          "display_range": null,
          "display_text": "11.6%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 11.6,
          "plain_english": "Sector explains about 11.6% of price moves in the current state."
        },
        "company_share": {
          "median": 0.34484316826903194,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "34.5%",
          "display_range": null,
          "display_text": "34.5%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 34.5,
          "plain_english": "Company-specific explains about 34.5% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 0.420215813899411,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.42",
          "display_range": null,
          "display_text": "0.42",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Modest",
          "plain_english": "Modest market link: a 1% market move has lined up with about a 0.42% stock move in the same direction in this state.",
          "value_num": 0.42
        },
        "beta_stock_lag": {
          "median": 0.4864391406910001,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.49",
          "display_range": null,
          "display_text": "0.49",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 0.49
        },
        "beta_sector": {
          "median": 0.014433118258166167,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.01",
          "display_range": null,
          "display_text": "0.01",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Weak",
          "plain_english": "Weak sector link: a 1% sector move has lined up with about a 0.01% stock move in the same direction in this state.",
          "value_num": 0.01
        },
        "beta_market_lag": {
          "median": 0.6504299366011798,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.65",
          "display_range": null,
          "display_text": "0.65",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 0.65
        },
        "beta_sector_lag": {
          "median": 0.37122507759859635,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.37",
          "display_range": null,
          "display_text": "0.37",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 0.37
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
          "period_label": "2025-03-17 to 2025-03-31",
          "n_obs": 11,
          "partial_month": true,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.3798849812438006,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "38.0%",
            "display_range": null,
            "display_text": "38.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
            "kind": "share_pct",
            "value_pct": 38.0,
            "plain_english": "Sector explains about 38.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3093261486801607,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "30.9%",
              "display_range": null,
              "display_text": "30.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
              "kind": "share_pct",
              "value_pct": 30.9,
              "plain_english": "Market explains about 30.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3798849812438006,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "38.0%",
              "display_range": null,
              "display_text": "38.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
              "kind": "share_pct",
              "value_pct": 38.0,
              "plain_english": "Sector explains about 38.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.31078887007603884,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "31.1%",
              "display_range": null,
              "display_text": "31.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
              "kind": "share_pct",
              "value_pct": 31.1,
              "plain_english": "Company-specific explains about 31.1% of price moves in the current state."
            }
          },
          "summary": "Mar: Much more balanced across company, sector, and market factors."
        },
        {
          "month_key": "2025-04",
          "month_label": "April 2025",
          "month_short_label": "Apr",
          "period_label": "2025-04-01 to 2025-04-30",
          "n_obs": 19,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.47821945677497824,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.8%",
            "display_range": null,
            "display_text": "47.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
            "kind": "share_pct",
            "value_pct": 47.8,
            "plain_english": "Company-specific explains about 47.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.29671876164721633,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "29.7%",
              "display_range": null,
              "display_text": "29.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 29.7,
              "plain_english": "Market explains about 29.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2250617815778054,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "22.5%",
              "display_range": null,
              "display_text": "22.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 22.5,
              "plain_english": "Sector explains about 22.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.47821945677497824,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.8%",
              "display_range": null,
              "display_text": "47.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 47.8,
              "plain_english": "Company-specific explains about 47.8% of price moves in the current state."
            }
          },
          "summary": "Apr: Mostly company-driven."
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
            "median": 0.5571163221874134,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "55.7%",
            "display_range": null,
            "display_text": "55.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 55.7,
            "plain_english": "Company-specific explains about 55.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3196765031090875,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "32.0%",
              "display_range": null,
              "display_text": "32.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 32.0,
              "plain_english": "Market explains about 32.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.12320717470349914,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "12.3%",
              "display_range": null,
              "display_text": "12.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 12.3,
              "plain_english": "Sector explains about 12.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5571163221874134,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "55.7%",
              "display_range": null,
              "display_text": "55.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 55.7,
              "plain_english": "Company-specific explains about 55.7% of price moves in the current state."
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
            "median": 0.6117981618447391,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "61.2%",
            "display_range": null,
            "display_text": "61.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 61.2,
            "plain_english": "Company-specific explains about 61.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.23761591751510758,
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
              "median": 0.1505859206401533,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "15.1%",
              "display_range": null,
              "display_text": "15.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 15.1,
              "plain_english": "Sector explains about 15.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6117981618447391,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.2%",
              "display_range": null,
              "display_text": "61.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 61.2,
              "plain_english": "Company-specific explains about 61.2% of price moves in the current state."
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
            "median": 0.5109756699252264,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "51.1%",
            "display_range": null,
            "display_text": "51.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 51.1,
            "plain_english": "Company-specific explains about 51.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.4370651727019019,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "43.7%",
              "display_range": null,
              "display_text": "43.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 43.7,
              "plain_english": "Market explains about 43.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.05195915737287166,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "5.2%",
              "display_range": null,
              "display_text": "5.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 5.2,
              "plain_english": "Sector explains about 5.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5109756699252264,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "51.1%",
              "display_range": null,
              "display_text": "51.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 51.1,
              "plain_english": "Company-specific explains about 51.1% of price moves in the current state."
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
            "median": 0.6054223723135175,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "60.5%",
            "display_range": null,
            "display_text": "60.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 60.5,
            "plain_english": "Company-specific explains about 60.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.19732098375924426,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "19.7%",
              "display_range": null,
              "display_text": "19.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 19.7,
              "plain_english": "Market explains about 19.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.19725664392723827,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "19.7%",
              "display_range": null,
              "display_text": "19.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 19.7,
              "plain_english": "Sector explains about 19.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6054223723135175,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "60.5%",
              "display_range": null,
              "display_text": "60.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 60.5,
              "plain_english": "Company-specific explains about 60.5% of price moves in the current state."
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
            "median": 0.6100340082013811,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "61.0%",
            "display_range": null,
            "display_text": "61.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 61.0,
            "plain_english": "Company-specific explains about 61.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.27611797560081563,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.6%",
              "display_range": null,
              "display_text": "27.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 27.6,
              "plain_english": "Market explains about 27.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.11384801619780321,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "11.4%",
              "display_range": null,
              "display_text": "11.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 11.4,
              "plain_english": "Sector explains about 11.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6100340082013811,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.0%",
              "display_range": null,
              "display_text": "61.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 61.0,
              "plain_english": "Company-specific explains about 61.0% of price moves in the current state."
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
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.46164028502744403,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "46.2%",
            "display_range": null,
            "display_text": "46.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 46.2,
            "plain_english": "Company-specific explains about 46.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3586029776878113,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "35.9%",
              "display_range": null,
              "display_text": "35.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 35.9,
              "plain_english": "Market explains about 35.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.17975673728474462,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "18.0%",
              "display_range": null,
              "display_text": "18.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 18.0,
              "plain_english": "Sector explains about 18.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.46164028502744403,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.2%",
              "display_range": null,
              "display_text": "46.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 46.2,
              "plain_english": "Company-specific explains about 46.2% of price moves in the current state."
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
            "median": 0.6764360640553014,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "67.6%",
            "display_range": null,
            "display_text": "67.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 67.6,
            "plain_english": "Company-specific explains about 67.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.04070726402114385,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "4.1%",
              "display_range": null,
              "display_text": "4.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 4.1,
              "plain_english": "Market explains about 4.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2828566719235546,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "28.3%",
              "display_range": null,
              "display_text": "28.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 28.3,
              "plain_english": "Sector explains about 28.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6764360640553014,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "67.6%",
              "display_range": null,
              "display_text": "67.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 67.6,
              "plain_english": "Company-specific explains about 67.6% of price moves in the current state."
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
            "median": 0.5989715008544253,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "59.9%",
            "display_range": null,
            "display_text": "59.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
            "kind": "share_pct",
            "value_pct": 59.9,
            "plain_english": "Company-specific explains about 59.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.058981549170249815,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "5.9%",
              "display_range": null,
              "display_text": "5.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 5.9,
              "plain_english": "Market explains about 5.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3420469499753248,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.2%",
              "display_range": null,
              "display_text": "34.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 34.2,
              "plain_english": "Sector explains about 34.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5989715008544253,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "59.9%",
              "display_range": null,
              "display_text": "59.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 59.9,
              "plain_english": "Company-specific explains about 59.9% of price moves in the current state."
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
            "median": 0.5498354305873044,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "55.0%",
            "display_range": null,
            "display_text": "55.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 55.0,
            "plain_english": "Company-specific explains about 55.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3081678944705593,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "30.8%",
              "display_range": null,
              "display_text": "30.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 30.8,
              "plain_english": "Market explains about 30.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1419966749421361,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "14.2%",
              "display_range": null,
              "display_text": "14.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 14.2,
              "plain_english": "Sector explains about 14.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5498354305873044,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "55.0%",
              "display_range": null,
              "display_text": "55.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 55.0,
              "plain_english": "Company-specific explains about 55.0% of price moves in the current state."
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
            "median": 0.5528582758377732,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "55.3%",
            "display_range": null,
            "display_text": "55.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
            "kind": "share_pct",
            "value_pct": 55.3,
            "plain_english": "Company-specific explains about 55.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3630626817084341,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.3%",
              "display_range": null,
              "display_text": "36.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 36.3,
              "plain_english": "Market explains about 36.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.0840790424537926,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "8.4%",
              "display_range": null,
              "display_text": "8.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 8.4,
              "plain_english": "Sector explains about 8.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5528582758377732,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "55.3%",
              "display_range": null,
              "display_text": "55.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 55.3,
              "plain_english": "Company-specific explains about 55.3% of price moves in the current state."
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
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4373774088356011,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "43.7%",
            "display_range": null,
            "display_text": "43.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 43.7,
            "plain_english": "Market explains about 43.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.4373774088356011,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "43.7%",
              "display_range": null,
              "display_text": "43.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 43.7,
              "plain_english": "Market explains about 43.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2120586093445348,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "21.2%",
              "display_range": null,
              "display_text": "21.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 21.2,
              "plain_english": "Sector explains about 21.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3505639818198641,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "35.1%",
              "display_range": null,
              "display_text": "35.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 35.1,
              "plain_english": "Company-specific explains about 35.1% of price moves in the current state."
            }
          },
          "summary": "Mar: More mixed, though market-driven still has the largest share."
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
            "median": 0.01019788684127538,
            "low": 0.01019788684127538,
            "high": 0.01019788684127538
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": null
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 12.4,
          "current_probability": 0.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.04416654132820716,
            "low": 0.04416654132820716,
            "high": 0.04416654132820716
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
            0.08064516129032258,
            0.9193548387096774
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
            10.0,
            114.0
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
        "market_link_display": "0.42",
        "sector_link_display": "0.01",
        "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.42% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "Weak sector link. A 1% sector move has lined up with about a 0.01% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "0.49",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "Low Volatility",
        "dominant_driver": "market",
        "dominant_driver_label": "Market",
        "driver_share_pct": 53.9,
        "driver_share_display": "53.9%",
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
            "median": 0.01019788684127538,
            "low": 0.01019788684127538,
            "high": 0.01019788684127538
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 12.4,
          "current_probability": 0.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.04416654132820716,
            "low": 0.04416654132820716,
            "high": 0.04416654132820716
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
          0.08064516129032258,
          0.9193548387096774
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.9193548387096774,
            0.08064516129032258
          ],
          [
            0.08064516129032258,
            0.9193548387096774
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
            10.0,
            114.0
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
        "text": "Liquidity score: 77.8 — Strong",
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
    "liq_subtitle": "Liquidity is middle-of-the-pack for the company’s size, and the current book looks less supportive because bid depth is lighter than ask depth.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent performance has been weak, with the stock down 12.8% over one month compared with peers down 10.1% and the market down 4.4%.",
    "perf_insight": "The weak share move is not being offset by stronger trading conditions, as the six-month liquidity score is 5.4 points below the peer median and market factors still explain 53.9% of trading. That matters because weaker performance is arriving in a tape that remains exposed to broader market pressure.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "The tape is being driven mainly by broader moves, with market factors accounting for 53.9% of current trading.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly market-driven, accounting for about 53.9% of price changes. Other influences are sector 11.6%, and company-specific 34.5%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 53.9%, sector 11.6%, and company-specific 34.5%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has shifted from company-driven to market-driven over Jan to Mar."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 53.9%, sector 11.6%, and company-specific 34.5%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "That matters because the stock is already down 12.8% over one month compared with peers down 10.1%, and lighter bid depth at 0.68x of ask depth can leave weak sessions feeling less well supported.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: broader market moves are the largest influence, accounting for 53.9% of current price action.",
      "Monthly change: the pattern has shifted from mostly market in January and February to a more mixed picture in March, with market moves now leading."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Market-led trading is the clearest current state, with broader factors still driving more than half of price action.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on Mar 31, 2025 to Mar 31, 2026 (229 trading days • 272,292 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on top 10 bid and top 10 ask levels.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is lighter than the monthly baseline, so day-to-day access may feel weaker than the 1M score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "Liquidity appears stable, supported by current trading activity and visible depth, which matters because steadier execution conditions reduce friction for investors.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 21.4% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "The current execution picture is defined more by book balance than by spread, with a 1-tick spread but lighter buy-side depth.",
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
    "intraday_insight": "Immediate trading conditions look orderly on spread, with the stock at 1 tick. Buy-side support is lighter, however, with top-10 bid depth at 0.68x of ask depth, which can make purchase liquidity feel thinner than the headline spread implies.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "The current trading picture is better explained by market direction and displayed depth than by short activity.",
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
    "exec_subtitle": "Trading access is workable overall, but peer standing and the current book point to a market that is less robust than size alone would suggest.",
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
        "value": "77.8/100",
        "sub": "Peer median 83.1 (-5.4 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "HK$15.7M",
        "sub": "Peer median HK$24.1M",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "0.33%",
        "sub": "1.64 ticks; peers 0.27%",
        "interp": {
          "text": "Wider",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "6M liquidity is strong: score 77.8 vs peer median 83.1 (-5.4 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "6.155",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "0.16%",
        "note": "1.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.68x",
        "note": "Bid depth / ask depth on displayed top-10 levels",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-0.08% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-0.42% with 100.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-0.74% with 100.0% fill.",
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
        "value": "78",
        "suffix": "/100",
        "bar_pct": 78,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Rank 581/2607",
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
        "value": "0.33",
        "suffix": "%",
        "bar_pct": 3,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "0.33% • 1.64 ticks vs peers 0.27%",
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
        "value": "15.7M",
        "value_prefix": "HK$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-red-400",
        "color_bar": "bg-red-500",
        "subtext": "Peer median HK$24.1M",
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
        "value": "53.9",
        "suffix": "market",
        "bar_pct": 54,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Sector 11.6% • Company 34.5%",
        "interpretation": {
          "text": "Market",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is serviceable rather than strong, with a six-month score of 77.8 compared with a peer median of 83.1. That leaves access broadly workable, but not as strong as similarly sized names.",
      "The clearest near-term watchpoint is thinner buy-side support, with top-10 bid depth at 0.68x of ask depth while the spread remains 1",
      "top-10 bid depth is 0.68x ask depth; spread is 1 tick. Immediate buy-side depth is lighter than the monthly baseline, so day-to-day access may feel weaker than the 1M score suggests. Current driver: Market at 53.9%. Broader market or sector moves still explain a meaningful part of the tape, so the stock is not trading on company news alone."
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
      "overall": "6M liquidity is strong: score 77.8 vs peer median 83.1 (-5.4 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "strengths": [
        "6M score 77.8 vs peer median 83.1 (-5.4 pts)."
      ],
      "concerns": [],
      "peer_context": "Primary-period score gap vs peers: -5.4 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is 32.0%, better than market, sector, and peers, which suggests stronger price performance than comparable names.",
        "vs_market": "Better than market: 32.0% vs market 8.6%.",
        "vs_sector": "Better than sector: 32.0% vs sector -11.5%.",
        "vs_peers": "Better than peers: 32.0% vs peers -22.9%."
      },
      "adv": {
        "insight": "ADV is HK$15.7M, better than market and sector, but worse than peers, which shows trading size is uneven across comparison groups.",
        "vs_market": "Better than market: HK$15.7M vs market HK$219.9K.",
        "vs_sector": "Better than sector: HK$15.7M vs sector HK$107.6K.",
        "vs_peers": "Worse than peers: HK$15.7M vs peers HK$24.1M."
      },
      "spread": {
        "insight": "Spread is 0.33%, better than market and sector, but worse than peers, which shows execution cost is mixed across comparison groups.",
        "vs_market": "Better than market: 0.33% vs market 2.66%.",
        "vs_sector": "Better than sector: 0.33% vs sector 5.46%.",
        "vs_peers": "Worse than peers: 0.33% vs peers 0.27%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.54%, better than market and sector, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.54% vs market 0.09%.",
        "vs_sector": "Better than sector: 0.54% vs sector 0.12%.",
        "vs_peers": "In line with peers: 0.54% vs peers 0.57%."
      },
      "volatility": {
        "insight": "Volatility is 65.23%, worse than peers, which suggests day-to-day price swings are heavier than comparable names.",
        "vs_market": "In line with market: 65.23% vs market 59.60%.",
        "vs_sector": "In line with sector: 65.23% vs sector 66.84%.",
        "vs_peers": "Worse than peers: 65.23% vs peers 46.95%."
      },
      "trades": {
        "insight": "Trades is 633, better than market and sector, but worse than peers, which shows trading frequency is mixed across comparison groups.",
        "vs_market": "Better than market: 633 vs market 21.",
        "vs_sector": "Better than sector: 633 vs sector 14.",
        "vs_peers": "Worse than peers: 633 vs peers 1788."
      },
      "amihud": {
        "insight": "Price impact is 5.18e-10, better than market, sector, and peers, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 5.18e-10 vs market 4.69e-08.",
        "vs_sector": "Better than sector: 5.18e-10 vs sector 1.27e-07.",
        "vs_peers": "Better than peers: 5.18e-10 vs peers 5.93e-10."
      }
    },
    "performance": {
      "overall": "Recent performance is weak relative to both peers and the market, with the stock down 12.8% over one month compared with peers down 10.1% and the market down 4.4%. Liquidity broadly confirms that weaker tape rather than offsetting it, because the six-month liquidity score of 77.8 is below the 83.1 peer median and top-10 bid depth is only 0.68x ask depth despite a 1 tick spread.",
      "conclusion": "The recent decline looks broadly market-led, with weaker liquidity conditions reinforcing rather than resisting the move."
    },
    "drivers": {
      "overall": "The main force behind the stock now is the broader market, which accounts for 53.9% of current price moves. That matters because the shares have already fallen 12.8% over the past month, worse than peers and the market, so external weakness is landing on an already pressured tape.",
      "beta": "Based on the last 5 trading days, current mix is market 53.9%, sector 11.6%, and company-specific 34.5%.",
      "rolling_change": "The driver mix has become more balanced over the quarter. January and February were mostly market, while March turned more mixed with market moves taking the largest share, suggesting the current pattern is more recent than deeply established."
    },
    "regime": {
      "overall": "Low volatility points to a steadier trading backdrop, but conditions are not fully robust because buy-side depth is lighter, with top-10 bid depth at 0.68x of ask depth.",
      "current": "Current market state is Low Volatility. The market has been in this state about 50.2% of the time. Based on 251 trading days relative to the 252-day target.",
      "transitions": "This state looks fairly stable, with a typical run length of about 11.4 days, although the overall picture is still mixed.",
      "trading_implications": "Trading conditions may feel relatively orderly while this state holds, but the lighter bid side means buy-side access can still feel thinner even with a 1-tick spread."
    },
    "execution": {
      "overall": "Displayed liquidity is mixed rather than fully balanced because the spread is 1 tick but buy-side depth is materially lighter than sell-side",
      "concern": "Trade-size percentiles use Mar 31, 2025 to Mar 31, 2026 history (229 trading days • 272,292 trades).",
      "peer_context": "This book does not strengthen the stock’s peer standing because the 6M liquidity score already sits 5.4 points below the peer median, and the lighter bid side reinforces that access can feel weaker in the near term."
    },
    "trader_composition": {
      "overall": "By trade count and value, flow looks mainly institution-like.",
      "retail_heavy": "Institution-like trades account for 58.5% of trade count and 71.5% of trade value, compared with retail-like trades at 4.4% of count and 1.9% of value. That gap shows the tape is being driven more by larger participants than by retail flow.",
      "institutional_gap": "The read is directionally clear but not fully clean because 21.1% of trade count is ambiguous or unclear. That leaves some uncertainty around how consistent the flow mix is day to day.",
      "peer_comparison": "The peer comparison indicates this trader mix can be judged in a broader market context, with the current read pointing more institution-like than retail-heavy."
    },
    "price_moving": {
      "overall": "Price-moving activity is meaningful, with 21.4% of total trades moving price. That matters because execution quality can still shift even when overall participation looks solid. Ambiguous or unclear flow is 21.1% of trade count, so the read is not fully clean. Price pressure is present on both sides of the tape, and the main takeaway is that the signal is mixed rather than one-way. That matters because short-term moves may reflect changing participation rather than a single dominant buyer or seller.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity does not stand out as a separate driver of trading conditions. The clearer signals are weaker share-price performance over the past month and a market-led tape, which means the current picture is better explained by broader selling pressure than by short activity.",
      "level": "N/A",
      "correlation": "N/A",
      "trend": "There is no clear sign that short activity is rising or falling in a way that changes the read-through. That leaves the broader picture centered on weaker recent performance and lighter buy-side depth rather than a distinct short-driven effect.",
      "peaks": "N/A"
    },
    "intraday": {
      "overall": "Liquidity is concentrated in the continuous session, where 95.9% of trading takes place, while the open and close contribute only 0.4% and 3.2%. That makes the middle of the day the clearest source of usable liquidity.",
      "hhi_interpretation": "Ambiguous or unclear flow is 21.1% of trade count, so the read is not fully clean.",
      "best_times": "The continuous session is the strongest window for liquidity because it carries nearly all trading activity. That matters more than the open or close for assessing day-to-day access.",
      "peer_ranking": "Peer ranking is available in the report tables, and the current intraday profile stands out more for steady continuous-session activity than for auction-driven liquidity."
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
        "751",
        "1070",
        "6969",
        "921",
        "1126",
        "1999",
        "1691",
        "2580",
        "2285"
      ],
      "scores": [
        77.75220560030687,
        87.80207134637514,
        94.39969313387034,
        78.63444572305332,
        76.44802454929037,
        82.47027234369007,
        78.94131185270426,
        83.77445339470655,
        87.34177215189874
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
        15656860.0,
        65197271.0,
        201325932.68,
        25128860.0,
        8789978.515,
        21608456.21,
        10777575.0,
        23035619.0,
        28327452.5
      ],
      "total": 2607
    },
    "market_comparison": {
      "sector_name": "Consumer Electronics",
      "sector_count": 16,
      "market_count": 2607,
      "company": {
        "volatility": 0.6523084055353149,
        "adv": 15656860.0,
        "spread_pct": 0.0032608137994431666,
        "turnover_ratio": 0.005375769442787841,
        "amihud": 5.183686768022925e-10,
        "trades": 633.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.7407154072379732,
          "median": 0.5960261264727168,
          "min": 0.0593216797254774,
          "max": 33.69148083298805,
          "p5": 0.22291636091564176,
          "p95": 1.5562952258444027,
          "count": 2607
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 63472193.6609616,
          "median": 219920.0,
          "min": 0.0,
          "max": 13896623190.0,
          "p5": 0.0,
          "p95": 228498387.5579998,
          "count": 2607
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.042106154934994394,
          "median": 0.026612396298344696,
          "min": 0.000558678699550006,
          "max": 0.5518881068100528,
          "p5": 0.0013667703319299987,
          "p95": 0.13449868178503904,
          "count": 2607
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0035187881972746785,
          "median": 0.0008797362381101288,
          "min": 0.0,
          "max": 0.13261028525846094,
          "p5": 0.0,
          "p95": 0.014313397851931649,
          "count": 2584
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 6.308441646342878e-07,
          "median": 4.6868525954451004e-08,
          "min": 0.0,
          "max": 4.7054394880481924e-05,
          "p5": 4.529078948771039e-11,
          "p95": 3.4591819837721457e-06,
          "count": 2607
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1090.710203298811,
          "median": 21.0,
          "min": 0.0,
          "max": 114079.0,
          "p5": 0.0,
          "p95": 5806.59999999998,
          "count": 2607
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.7500862960802479,
          "median": 0.6683550669348555,
          "min": 0.32316409909238264,
          "max": 1.988427430852115,
          "p5": 0.33451344999039867,
          "p95": 1.5551713134419214,
          "count": 16
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 18365502.351875,
          "median": 107637.5,
          "min": 0.0,
          "max": 201325932.68,
          "p5": 0.0,
          "p95": 99229436.42,
          "count": 16
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.050076572058845824,
          "median": 0.0546006031349195,
          "min": 0.0016357208063743599,
          "max": 0.129365536609029,
          "p5": 0.002067921541183518,
          "p95": 0.1011584727748159,
          "count": 16
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0023381101180289816,
          "median": 0.001163018643373577,
          "min": 0.0,
          "max": 0.00843971816577227,
          "p5": 0.0,
          "p95": 0.006306303053319366,
          "count": 16
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 4.1614262097762234e-07,
          "median": 1.2743157309854208e-07,
          "min": 0.0,
          "max": 2.775002775002775e-06,
          "p5": 7.067297098356833e-11,
          "p95": 1.49454082384024e-06,
          "count": 16
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 582.59375,
          "median": 13.5,
          "min": 0.0,
          "max": 5568.5,
          "p5": 0.0,
          "p95": 3380.375,
          "count": 16
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 48023893.113125,
          "median": 24082239.5,
          "min": 8789978.515,
          "max": 201325932.68,
          "p5": 9485637.28475,
          "p95": 153680901.09199995,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 2077.75,
          "median": 1788.5,
          "min": 626.0,
          "max": 5568.5,
          "p5": 629.675,
          "p95": 4549.124999999998,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.44955692530257557,
          "median": 0.46953432248949356,
          "min": 0.28201756614473633,
          "max": 0.6118448523512795,
          "p5": 0.29915426490880476,
          "p95": 0.5853907919504003,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.0030473042669003116,
          "median": 0.0026697125727834494,
          "min": 0.0016357208063743599,
          "max": 0.005853606386455868,
          "p5": 0.0017913967594698546,
          "p95": 0.005317080476917371,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 1.9222300121397662,
          "median": 1.775498591687556,
          "min": 1.0688176388086825,
          "max": 3.436583396656535,
          "p5": 1.1414666388985146,
          "p95": 3.1068296011999657,
          "count": 6
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 6.769177459438606e-10,
          "median": 5.934886628233692e-10,
          "min": 9.423062797809111e-11,
          "max": 2.0399812150794507e-09,
          "p5": 1.373773761659977e-10,
          "p95": 1.617025541016373e-09,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.006440985331698296,
          "median": 0.005731654981998034,
          "min": 0.003123314265379973,
          "max": 0.013408495984249908,
          "p5": 0.0031758546107888653,
          "p95": 0.011669423747782732,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": -0.1276595744680844,
        "market": -0.04370104310790479,
        "sector": -0.04810789270998128,
        "peers": -0.10062320222617327
      },
      {
        "horizon": "3M",
        "stock": 0.4927184466019432,
        "market": 0.06098476563318167,
        "sector": -0.09261972374096583,
        "peers": -0.14003249341114787
      },
      {
        "horizon": "6M",
        "stock": 0.31974248927038684,
        "market": 0.08593791309963694,
        "sector": -0.11477101894560382,
        "peers": -0.2290408111396861
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
      "share_market": 0.5389281074609656,
      "share_sector": 0.11622872427000246,
      "share_idio": 0.34484316826903194,
      "beta_market": 0.420215813899411,
      "beta_sector": 0.014433118258166167,
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
            "median": 0.5389281074609656,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "53.9%",
            "display_range": null,
            "display_text": "53.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 53.9,
            "plain_english": "Market explains about 53.9% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.11622872427000246,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "11.6%",
            "display_range": null,
            "display_text": "11.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 11.6,
            "plain_english": "Sector explains about 11.6% of price moves in the current state."
          },
          "company_share": {
            "median": 0.34484316826903194,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "34.5%",
            "display_range": null,
            "display_text": "34.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 34.5,
            "plain_english": "Company-specific explains about 34.5% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 0.420215813899411,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.42",
            "display_range": null,
            "display_text": "0.42",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Modest",
            "plain_english": "Modest market link: a 1% market move has lined up with about a 0.42% stock move in the same direction in this state.",
            "value_num": 0.42
          },
          "beta_stock_lag": {
            "median": 0.4864391406910001,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.49",
            "display_range": null,
            "display_text": "0.49",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 0.49
          },
          "beta_sector": {
            "median": 0.014433118258166167,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.01",
            "display_range": null,
            "display_text": "0.01",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Weak",
            "plain_english": "Weak sector link: a 1% sector move has lined up with about a 0.01% stock move in the same direction in this state.",
            "value_num": 0.01
          },
          "beta_market_lag": {
            "median": 0.6504299366011798,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.65",
            "display_range": null,
            "display_text": "0.65",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 0.65
          },
          "beta_sector_lag": {
            "median": 0.37122507759859635,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.37",
            "display_range": null,
            "display_text": "0.37",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 0.37
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
            "period_label": "2025-03-17 to 2025-03-31",
            "n_obs": 11,
            "partial_month": true,
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.3798849812438006,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "38.0%",
              "display_range": null,
              "display_text": "38.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
              "kind": "share_pct",
              "value_pct": 38.0,
              "plain_english": "Sector explains about 38.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3093261486801607,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "30.9%",
                "display_range": null,
                "display_text": "30.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
                "kind": "share_pct",
                "value_pct": 30.9,
                "plain_english": "Market explains about 30.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3798849812438006,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "38.0%",
                "display_range": null,
                "display_text": "38.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
                "kind": "share_pct",
                "value_pct": 38.0,
                "plain_english": "Sector explains about 38.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.31078887007603884,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "31.1%",
                "display_range": null,
                "display_text": "31.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
                "kind": "share_pct",
                "value_pct": 31.1,
                "plain_english": "Company-specific explains about 31.1% of price moves in the current state."
              }
            },
            "summary": "Mar: Much more balanced across company, sector, and market factors."
          },
          {
            "month_key": "2025-04",
            "month_label": "April 2025",
            "month_short_label": "Apr",
            "period_label": "2025-04-01 to 2025-04-30",
            "n_obs": 19,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.47821945677497824,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.8%",
              "display_range": null,
              "display_text": "47.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 47.8,
              "plain_english": "Company-specific explains about 47.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.29671876164721633,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "29.7%",
                "display_range": null,
                "display_text": "29.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 29.7,
                "plain_english": "Market explains about 29.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2250617815778054,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "22.5%",
                "display_range": null,
                "display_text": "22.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 22.5,
                "plain_english": "Sector explains about 22.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.47821945677497824,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "47.8%",
                "display_range": null,
                "display_text": "47.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 47.8,
                "plain_english": "Company-specific explains about 47.8% of price moves in the current state."
              }
            },
            "summary": "Apr: Mostly company-driven."
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
              "median": 0.5571163221874134,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "55.7%",
              "display_range": null,
              "display_text": "55.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 55.7,
              "plain_english": "Company-specific explains about 55.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3196765031090875,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "32.0%",
                "display_range": null,
                "display_text": "32.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 32.0,
                "plain_english": "Market explains about 32.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.12320717470349914,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "12.3%",
                "display_range": null,
                "display_text": "12.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 12.3,
                "plain_english": "Sector explains about 12.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5571163221874134,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "55.7%",
                "display_range": null,
                "display_text": "55.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 55.7,
                "plain_english": "Company-specific explains about 55.7% of price moves in the current state."
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
              "median": 0.6117981618447391,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.2%",
              "display_range": null,
              "display_text": "61.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 61.2,
              "plain_english": "Company-specific explains about 61.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.23761591751510758,
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
                "median": 0.1505859206401533,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "15.1%",
                "display_range": null,
                "display_text": "15.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 15.1,
                "plain_english": "Sector explains about 15.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6117981618447391,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "61.2%",
                "display_range": null,
                "display_text": "61.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 61.2,
                "plain_english": "Company-specific explains about 61.2% of price moves in the current state."
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
              "median": 0.5109756699252264,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "51.1%",
              "display_range": null,
              "display_text": "51.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 51.1,
              "plain_english": "Company-specific explains about 51.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.4370651727019019,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "43.7%",
                "display_range": null,
                "display_text": "43.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 43.7,
                "plain_english": "Market explains about 43.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.05195915737287166,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "5.2%",
                "display_range": null,
                "display_text": "5.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 5.2,
                "plain_english": "Sector explains about 5.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5109756699252264,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "51.1%",
                "display_range": null,
                "display_text": "51.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 51.1,
                "plain_english": "Company-specific explains about 51.1% of price moves in the current state."
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
              "median": 0.6054223723135175,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "60.5%",
              "display_range": null,
              "display_text": "60.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 60.5,
              "plain_english": "Company-specific explains about 60.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.19732098375924426,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "19.7%",
                "display_range": null,
                "display_text": "19.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 19.7,
                "plain_english": "Market explains about 19.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.19725664392723827,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "19.7%",
                "display_range": null,
                "display_text": "19.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 19.7,
                "plain_english": "Sector explains about 19.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6054223723135175,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "60.5%",
                "display_range": null,
                "display_text": "60.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 60.5,
                "plain_english": "Company-specific explains about 60.5% of price moves in the current state."
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
              "median": 0.6100340082013811,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.0%",
              "display_range": null,
              "display_text": "61.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 61.0,
              "plain_english": "Company-specific explains about 61.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.27611797560081563,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.6%",
                "display_range": null,
                "display_text": "27.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 27.6,
                "plain_english": "Market explains about 27.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.11384801619780321,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "11.4%",
                "display_range": null,
                "display_text": "11.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 11.4,
                "plain_english": "Sector explains about 11.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6100340082013811,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "61.0%",
                "display_range": null,
                "display_text": "61.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 61.0,
                "plain_english": "Company-specific explains about 61.0% of price moves in the current state."
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
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.46164028502744403,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.2%",
              "display_range": null,
              "display_text": "46.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 46.2,
              "plain_english": "Company-specific explains about 46.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3586029776878113,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "35.9%",
                "display_range": null,
                "display_text": "35.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 35.9,
                "plain_english": "Market explains about 35.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.17975673728474462,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "18.0%",
                "display_range": null,
                "display_text": "18.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 18.0,
                "plain_english": "Sector explains about 18.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.46164028502744403,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "46.2%",
                "display_range": null,
                "display_text": "46.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 46.2,
                "plain_english": "Company-specific explains about 46.2% of price moves in the current state."
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
              "median": 0.6764360640553014,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "67.6%",
              "display_range": null,
              "display_text": "67.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 67.6,
              "plain_english": "Company-specific explains about 67.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.04070726402114385,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "4.1%",
                "display_range": null,
                "display_text": "4.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 4.1,
                "plain_english": "Market explains about 4.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2828566719235546,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "28.3%",
                "display_range": null,
                "display_text": "28.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 28.3,
                "plain_english": "Sector explains about 28.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6764360640553014,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "67.6%",
                "display_range": null,
                "display_text": "67.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 67.6,
                "plain_english": "Company-specific explains about 67.6% of price moves in the current state."
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
              "median": 0.5989715008544253,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "59.9%",
              "display_range": null,
              "display_text": "59.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 59.9,
              "plain_english": "Company-specific explains about 59.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.058981549170249815,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "5.9%",
                "display_range": null,
                "display_text": "5.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 5.9,
                "plain_english": "Market explains about 5.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3420469499753248,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "34.2%",
                "display_range": null,
                "display_text": "34.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 34.2,
                "plain_english": "Sector explains about 34.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5989715008544253,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "59.9%",
                "display_range": null,
                "display_text": "59.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 59.9,
                "plain_english": "Company-specific explains about 59.9% of price moves in the current state."
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
              "median": 0.5498354305873044,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "55.0%",
              "display_range": null,
              "display_text": "55.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 55.0,
              "plain_english": "Company-specific explains about 55.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3081678944705593,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "30.8%",
                "display_range": null,
                "display_text": "30.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 30.8,
                "plain_english": "Market explains about 30.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1419966749421361,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "14.2%",
                "display_range": null,
                "display_text": "14.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 14.2,
                "plain_english": "Sector explains about 14.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5498354305873044,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "55.0%",
                "display_range": null,
                "display_text": "55.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 55.0,
                "plain_english": "Company-specific explains about 55.0% of price moves in the current state."
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
              "median": 0.5528582758377732,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "55.3%",
              "display_range": null,
              "display_text": "55.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 55.3,
              "plain_english": "Company-specific explains about 55.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3630626817084341,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "36.3%",
                "display_range": null,
                "display_text": "36.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 36.3,
                "plain_english": "Market explains about 36.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.0840790424537926,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "8.4%",
                "display_range": null,
                "display_text": "8.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 8.4,
                "plain_english": "Sector explains about 8.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5528582758377732,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "55.3%",
                "display_range": null,
                "display_text": "55.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 55.3,
                "plain_english": "Company-specific explains about 55.3% of price moves in the current state."
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
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4373774088356011,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "43.7%",
              "display_range": null,
              "display_text": "43.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 43.7,
              "plain_english": "Market explains about 43.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.4373774088356011,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "43.7%",
                "display_range": null,
                "display_text": "43.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 43.7,
                "plain_english": "Market explains about 43.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2120586093445348,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "21.2%",
                "display_range": null,
                "display_text": "21.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 21.2,
                "plain_english": "Sector explains about 21.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3505639818198641,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "35.1%",
                "display_range": null,
                "display_text": "35.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 35.1,
                "plain_english": "Company-specific explains about 35.1% of price moves in the current state."
              }
            },
            "summary": "Mar: More mixed, though market-driven still has the largest share."
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
              "median": 0.01019788684127538,
              "low": 0.01019788684127538,
              "high": 0.01019788684127538
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": null
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 12.4,
            "current_probability": 0.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.04416654132820716,
              "low": 0.04416654132820716,
              "high": 0.04416654132820716
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
              0.08064516129032258,
              0.9193548387096774
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
              10.0,
              114.0
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
          "market_link_display": "0.42",
          "sector_link_display": "0.01",
          "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.42% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "Weak sector link. A 1% sector move has lined up with about a 0.01% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "0.49",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "Low Volatility",
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "driver_share_pct": 53.9,
          "driver_share_display": "53.9%",
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
          "month_key": "2025-03",
          "month_label": "March 2025",
          "month_short_label": "Mar",
          "period_label": "2025-03-17 to 2025-03-31",
          "n_obs": 11,
          "partial_month": true,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "Mar: Much more balanced across company, sector, and market factors.",
          "share_market": 0.3093261486801607,
          "share_sector": 0.3798849812438006,
          "share_company": 0.31078887007603884,
          "share_market_display": "30.9%",
          "share_sector_display": "38.0%",
          "share_company_display": "31.1%",
          "dominant_share_display": "38.0%"
        },
        {
          "month_key": "2025-04",
          "month_label": "April 2025",
          "month_short_label": "Apr",
          "period_label": "2025-04-01 to 2025-04-30",
          "n_obs": 19,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Apr: Mostly company-driven.",
          "share_market": 0.29671876164721633,
          "share_sector": 0.2250617815778054,
          "share_company": 0.47821945677497824,
          "share_market_display": "29.7%",
          "share_sector_display": "22.5%",
          "share_company_display": "47.8%",
          "dominant_share_display": "47.8%"
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
          "summary": "May: Mostly company-driven.",
          "share_market": 0.3196765031090875,
          "share_sector": 0.12320717470349914,
          "share_company": 0.5571163221874134,
          "share_market_display": "32.0%",
          "share_sector_display": "12.3%",
          "share_company_display": "55.7%",
          "dominant_share_display": "55.7%"
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
          "share_market": 0.23761591751510758,
          "share_sector": 0.1505859206401533,
          "share_company": 0.6117981618447391,
          "share_market_display": "23.8%",
          "share_sector_display": "15.1%",
          "share_company_display": "61.2%",
          "dominant_share_display": "61.2%"
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
          "share_market": 0.4370651727019019,
          "share_sector": 0.05195915737287166,
          "share_company": 0.5109756699252264,
          "share_market_display": "43.7%",
          "share_sector_display": "5.2%",
          "share_company_display": "51.1%",
          "dominant_share_display": "51.1%"
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
          "share_market": 0.19732098375924426,
          "share_sector": 0.19725664392723827,
          "share_company": 0.6054223723135175,
          "share_market_display": "19.7%",
          "share_sector_display": "19.7%",
          "share_company_display": "60.5%",
          "dominant_share_display": "60.5%"
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
          "share_market": 0.27611797560081563,
          "share_sector": 0.11384801619780321,
          "share_company": 0.6100340082013811,
          "share_market_display": "27.6%",
          "share_sector_display": "11.4%",
          "share_company_display": "61.0%",
          "dominant_share_display": "61.0%"
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
          "share_market": 0.3586029776878113,
          "share_sector": 0.17975673728474462,
          "share_company": 0.46164028502744403,
          "share_market_display": "35.9%",
          "share_sector_display": "18.0%",
          "share_company_display": "46.2%",
          "dominant_share_display": "46.2%"
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
          "share_market": 0.04070726402114385,
          "share_sector": 0.2828566719235546,
          "share_company": 0.6764360640553014,
          "share_market_display": "4.1%",
          "share_sector_display": "28.3%",
          "share_company_display": "67.6%",
          "dominant_share_display": "67.6%"
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
          "share_market": 0.058981549170249815,
          "share_sector": 0.3420469499753248,
          "share_company": 0.5989715008544253,
          "share_market_display": "5.9%",
          "share_sector_display": "34.2%",
          "share_company_display": "59.9%",
          "dominant_share_display": "59.9%"
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
          "share_market": 0.3081678944705593,
          "share_sector": 0.1419966749421361,
          "share_company": 0.5498354305873044,
          "share_market_display": "30.8%",
          "share_sector_display": "14.2%",
          "share_company_display": "55.0%",
          "dominant_share_display": "55.0%"
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
          "share_market": 0.3630626817084341,
          "share_sector": 0.0840790424537926,
          "share_company": 0.5528582758377732,
          "share_market_display": "36.3%",
          "share_sector_display": "8.4%",
          "share_company_display": "55.3%",
          "dominant_share_display": "55.3%"
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
          "share_market": 0.4373774088356011,
          "share_sector": 0.2120586093445348,
          "share_company": 0.3505639818198641,
          "share_market_display": "43.7%",
          "share_sector_display": "21.2%",
          "share_company_display": "35.1%",
          "dominant_share_display": "43.7%"
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
              "median": 0.01019788684127538,
              "low": 0.01019788684127538,
              "high": 0.01019788684127538
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 12.4,
            "current_probability": 0.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.04416654132820716,
              "low": 0.04416654132820716,
              "high": 0.04416654132820716
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
            0.08064516129032258,
            0.9193548387096774
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 6.15,
          "quantity": 38000.0,
          "value": 233700.0
        },
        {
          "level": 2,
          "price": 6.14,
          "quantity": 6000.0,
          "value": 36840.0
        },
        {
          "level": 3,
          "price": 6.13,
          "quantity": 56000.0,
          "value": 343280.0
        },
        {
          "level": 4,
          "price": 6.12,
          "quantity": 34000.0,
          "value": 208080.0
        },
        {
          "level": 5,
          "price": 6.11,
          "quantity": 68000.0,
          "value": 415480.0
        },
        {
          "level": 6,
          "price": 6.1,
          "quantity": 128000.0,
          "value": 780800.0
        },
        {
          "level": 7,
          "price": 6.09,
          "quantity": 32000.0,
          "value": 194880.0
        },
        {
          "level": 8,
          "price": 6.08,
          "quantity": 30000.0,
          "value": 182400.0
        },
        {
          "level": 9,
          "price": 6.07,
          "quantity": 40000.0,
          "value": 242800.0
        },
        {
          "level": 10,
          "price": 6.06,
          "quantity": 6000.0,
          "value": 36360.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 6.16,
          "quantity": 308000.0,
          "value": 1897280.0
        },
        {
          "level": 2,
          "price": 6.17,
          "quantity": 2000.0,
          "value": 12340.0
        },
        {
          "level": 3,
          "price": 6.18,
          "quantity": 22000.0,
          "value": 135960.0
        },
        {
          "level": 4,
          "price": 6.19,
          "quantity": 24000.0,
          "value": 148560.0
        },
        {
          "level": 5,
          "price": 6.2,
          "quantity": 106000.0,
          "value": 657200.0
        },
        {
          "level": 6,
          "price": 6.21,
          "quantity": 34000.0,
          "value": 211140.0
        },
        {
          "level": 7,
          "price": 6.22,
          "quantity": 58000.0,
          "value": 360760.0
        },
        {
          "level": 8,
          "price": 6.23,
          "quantity": 6000.0,
          "value": 37380.0
        },
        {
          "level": 9,
          "price": 6.24,
          "quantity": 40000.0,
          "value": 249600.0
        },
        {
          "level": 10,
          "price": 6.25,
          "quantity": 38000.0,
          "value": 237500.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-03-31 07:59:57.082000000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XHKG",
        "mid_price": 6.155,
        "spread_pct": 0.0016246953696181616,
        "spread_ticks": 1.0,
        "tick_size": 0.01,
        "bid_depth_notional_top10": 2674620.0,
        "ask_depth_notional_top10": 3947720.0,
        "bid_ask_depth_ratio": 0.6775
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 366,
        "history_limited": false,
        "trade_days_used": 229,
        "n_trades_used": 272292,
        "first_trade_date": "2025-03-31",
        "last_trade_date": "2026-03-31",
        "window_label": "Mar 31, 2025 to Mar 31, 2026",
        "window_short_label": "Mar 31, 2025 to Mar 31, 2026",
        "trade_days_label": "229 trading days",
        "trade_count_label": "272,292 trades",
        "window_detail_label": "229 trading days • 272,292 trades",
        "history_note": "Trade-size percentiles use Mar 31, 2025 to Mar 31, 2026 history (229 trading days • 272,292 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 70800.0,
            "impact_pct": -0.0008119999999999999,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 2.65,
            "pct_of_adv": 0.54
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 114400.0,
            "impact_pct": -0.0008119999999999999,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 4.28,
            "pct_of_adv": 0.87
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 2406624.29,
            "impact_pct": -0.007201,
            "filled_pct": 100.0,
            "levels_consumed": 9,
            "pct_of_bid_depth": 89.98,
            "pct_of_adv": 18.38
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-03-31",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "168033025.0",
            "timestamp": "2026-03-31 01:32:22.377000000",
            "local_timestamp": "2026-03-31 09:32:22",
            "posted_price": 6.56,
            "size_shares": 206000.0,
            "notional": 1351360.0,
            "impact_pct": -0.005122,
            "filled_pct": 100.0,
            "levels_consumed": 6,
            "pct_of_bid_depth": 50.53,
            "price_vs_mid_pct": 6.58,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "3391347201.0",
            "timestamp": "2026-03-31 03:14:18.632000000",
            "local_timestamp": "2026-03-31 11:14:18",
            "posted_price": 6.21,
            "size_shares": 166000.0,
            "notional": 1030860.0,
            "impact_pct": -0.004259,
            "filled_pct": 100.0,
            "levels_consumed": 5,
            "pct_of_bid_depth": 38.54,
            "price_vs_mid_pct": 0.894,
            "executed_event_count": 0,
            "event_count": 25
          },
          {
            "rank": 3,
            "order_id": "4638350337.0",
            "timestamp": "2026-03-31 05:35:00.282000000",
            "local_timestamp": "2026-03-31 13:35:00",
            "posted_price": 6.22,
            "size_shares": 142000.0,
            "notional": 883240.0,
            "impact_pct": -0.003747,
            "filled_pct": 100.0,
            "levels_consumed": 5,
            "pct_of_bid_depth": 33.02,
            "price_vs_mid_pct": 1.056,
            "executed_event_count": 0,
            "event_count": 34
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-03-31",
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
            "spread_pct": 0.0031897926634769477,
            "spread_ticks": 2.000000000000046,
            "bid_depth_notional": 2687340.0,
            "ask_depth_notional": 2499160.0,
            "mid_price": 6.27
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.0031999999999999316,
            "spread_ticks": 1.9999999999999574,
            "bid_depth_notional": 2911620.0,
            "ask_depth_notional": 1904680.0,
            "mid_price": 6.25
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.0016012810248198217,
            "spread_ticks": 0.9999999999999787,
            "bid_depth_notional": 2539800.0,
            "ask_depth_notional": 3838040.0,
            "mid_price": 6.245
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.0048348106365832975,
            "spread_ticks": 2.999999999999936,
            "bid_depth_notional": 3667500.0,
            "ask_depth_notional": 3846960.0,
            "mid_price": 6.205
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.004819277108433775,
            "spread_ticks": 3.000000000000025,
            "bid_depth_notional": 3495640.0,
            "ask_depth_notional": 3127940.0,
            "mid_price": 6.225
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.0016090104585679463,
            "spread_ticks": 0.9999999999999787,
            "bid_depth_notional": 4086020.0,
            "ask_depth_notional": 4378640.0,
            "mid_price": 6.215
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.0016038492381715776,
            "spread_ticks": 0.9999999999999787,
            "bid_depth_notional": 4538940.0,
            "ask_depth_notional": 4485060.0,
            "mid_price": 6.235
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.0016064257028113535,
            "spread_ticks": 1.0000000000000675,
            "bid_depth_notional": 4486320.0,
            "ask_depth_notional": 4635320.0,
            "mid_price": 6.225
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.0032206119162640216,
            "spread_ticks": 1.9999999999999574,
            "bid_depth_notional": 4077520.0,
            "ask_depth_notional": 6622180.0,
            "mid_price": 6.21
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.0032414910858994447,
            "spread_ticks": 1.9999999999999574,
            "bid_depth_notional": 3994340.0,
            "ask_depth_notional": 6748360.0,
            "mid_price": 6.17
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.0016246953696181618,
            "spread_ticks": 0.9999999999999787,
            "bid_depth_notional": 2674620.0,
            "ask_depth_notional": 3947720.0,
            "mid_price": 6.155
          }
        ],
        "summary": {
          "median_spread_pct": 0.0031897926634769477,
          "median_spread_ticks": 1.9999999999999574,
          "median_bid_depth_notional": 3667500.0,
          "median_ask_depth_notional": 3947720.0,
          "tightest_bucket": "10:30",
          "widest_bucket": "11:00",
          "deepest_bid_bucket": "13:30",
          "thinnest_bid_bucket": "10:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 0.4,
      "peers": [
        {
          "ticker": "6969",
          "pct": 0.7
        },
        {
          "ticker": "1070",
          "pct": 1.6
        },
        {
          "ticker": "2285",
          "pct": 3.3
        },
        {
          "ticker": "2580",
          "pct": 3.6
        },
        {
          "ticker": "1999",
          "pct": 5.3
        },
        {
          "ticker": "921",
          "pct": 5.8
        },
        {
          "ticker": "1126",
          "pct": 12.6
        },
        {
          "ticker": "1691",
          "pct": 15.7
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 722,
          "n_runs": 155,
          "n_trade_days": 1,
          "first_trade_date": "2026-03-31",
          "last_trade_date": "2026-03-31",
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
            "retail_pct": 0.015235457063711912,
            "mixed_pct": 0.0,
            "instit_pct": 0.590027700831025,
            "ambiguous_pct": 0.2520775623268698,
            "unobservable_pct": 0.14265927977839335,
            "unclear_pct": 0.39473684210526316,
            "retail_qty_pct": 0.00823529411764706,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6952941176470588,
            "ambiguous_qty_pct": 0.18705882352941178,
            "unobservable_qty_pct": 0.10941176470588235,
            "unclear_qty_pct": 0.29647058823529415,
            "retail_notional_pct": 0.008181262106228973,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6952354791329203,
            "ambiguous_notional_pct": 0.18694377423605682,
            "unobservable_notional_pct": 0.10963948452479394,
            "unclear_notional_pct": 0.2965832587608508
          },
          "run_composition": {
            "retail_pct": 0.07096774193548387,
            "mixed_pct": 0.0,
            "instit_pct": 0.22580645161290322,
            "ambiguous_pct": 0.2838709677419355,
            "unobservable_pct": 0.41935483870967744,
            "unclear_pct": 0.7032258064516129,
            "retail_notional_pct": 0.008181262106228973,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6952354791329203,
            "unclear_notional_pct": 0.2965832587608508
          },
          "counts": {
            "trades": {
              "retail": 11,
              "mixed": 0,
              "institutional": 426,
              "ambiguous": 182,
              "unobservable": 103,
              "unclear": 285
            },
            "runs": {
              "retail": 11,
              "mixed": 0,
              "institutional": 35,
              "ambiguous": 44,
              "unobservable": 65,
              "unclear": 109
            }
          },
          "confidence": {
            "high": 0.06451612903225806,
            "medium": 0.2129032258064516,
            "low": 0.01935483870967742,
            "na": 0.7032258064516129
          },
          "confidence_counts": {
            "high": 10,
            "medium": 33,
            "low": 3,
            "na": 109
          },
          "trade_confidence": {
            "high": 0.10664819944598337,
            "medium": 0.4778393351800554,
            "low": 0.02077562326869806,
            "na": 0.39473684210526316
          },
          "trade_confidence_counts": {
            "high": 77,
            "medium": 345,
            "low": 15,
            "na": 285
          },
          "observability": {
            "avg_feature_coverage": 0.6748387096774194,
            "observable_run_pct": 0.5806451612903225,
            "ambiguous_run_pct": 0.2838709677419355,
            "unobservable_run_pct": 0.41935483870967744
          },
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "dominant_share": 0.41935483870967744,
          "dominance_gap": 0.13548387096774195,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 722
            },
            "d2_information": {
              "UNOBSERVABLE": 722
            },
            "d3_urgency": {
              "IMMEDIATE": 152,
              "ADAPTIVE": 3
            },
            "participant_confidence": {
              "NA": 109,
              "MEDIUM": 33,
              "HIGH": 10,
              "LOW": 3
            }
          },
          "trade_size": {
            "avg": 29345.484764542936,
            "median": 12500.0
          },
          "run_size": {
            "avg": 136693.16129032258,
            "median": 37380.0,
            "avg_length": 4.658064516129032
          },
          "recent_trades": [
            {
              "trade_id": "797",
              "timestamp": "2026-03-31T07:59:56.450173",
              "price": 6.15,
              "size": 2000.0,
              "notional": 12300.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 52512,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "796",
              "timestamp": "2026-03-31T07:59:44.582579",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 52511,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "795",
              "timestamp": "2026-03-31T07:59:38.276437",
              "price": 6.15,
              "size": 2000.0,
              "notional": 12300.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52510,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "794",
              "timestamp": "2026-03-31T07:59:37.244156",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52510,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "793",
              "timestamp": "2026-03-31T07:59:35.326910",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52510,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "792",
              "timestamp": "2026-03-31T07:59:32.995777",
              "price": 6.16,
              "size": 4000.0,
              "notional": 24640.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52510,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "791",
              "timestamp": "2026-03-31T07:59:31.760935",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52510,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "790",
              "timestamp": "2026-03-31T07:59:26.028532",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52509,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "789",
              "timestamp": "2026-03-31T07:59:22.175729",
              "price": 6.15,
              "size": 2000.0,
              "notional": 12300.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52509,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "788",
              "timestamp": "2026-03-31T07:59:21.144982",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52509,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "787",
              "timestamp": "2026-03-31T07:59:18.049999",
              "price": 6.16,
              "size": 4000.0,
              "notional": 24640.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52509,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "786",
              "timestamp": "2026-03-31T07:59:15.774808",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52509,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "785",
              "timestamp": "2026-03-31T07:59:08.891007",
              "price": 6.16,
              "size": 4000.0,
              "notional": 24640.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52508,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "784",
              "timestamp": "2026-03-31T07:59:07.732593",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52508,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "783",
              "timestamp": "2026-03-31T07:59:02.717430",
              "price": 6.15,
              "size": 2000.0,
              "notional": 12300.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52507,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "782",
              "timestamp": "2026-03-31T07:59:02.709339",
              "price": 6.15,
              "size": 4000.0,
              "notional": 24600.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52507,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "781",
              "timestamp": "2026-03-31T07:58:58.089724",
              "price": 6.15,
              "size": 2000.0,
              "notional": 12300.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52507,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "780",
              "timestamp": "2026-03-31T07:58:35.801449",
              "price": 6.16,
              "size": 18000.0,
              "notional": 110880.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 52506,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "779",
              "timestamp": "2026-03-31T07:58:35.801449",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 52506,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "778",
              "timestamp": "2026-03-31T07:54:38.369444",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 52505,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "777",
              "timestamp": "2026-03-31T07:52:58.430533",
              "price": 6.15,
              "size": 2000.0,
              "notional": 12300.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 52504,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "776",
              "timestamp": "2026-03-31T07:52:23.726160",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 52503,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "775",
              "timestamp": "2026-03-31T07:49:40.322236",
              "price": 6.15,
              "size": 2000.0,
              "notional": 12300.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 52502,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "773",
              "timestamp": "2026-03-31T07:45:46.414723",
              "price": 6.15,
              "size": 2000.0,
              "notional": 12300.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 52501,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "772",
              "timestamp": "2026-03-31T07:40:55.611527",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 52500,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "771",
              "timestamp": "2026-03-31T07:40:55.611527",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 52500,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "770",
              "timestamp": "2026-03-31T07:40:55.611527",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 52500,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "769",
              "timestamp": "2026-03-31T07:40:55.611527",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 52500,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "768",
              "timestamp": "2026-03-31T07:40:49.420375",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52499,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "767",
              "timestamp": "2026-03-31T07:40:49.420375",
              "price": 6.16,
              "size": 4000.0,
              "notional": 24640.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52499,
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
          "n_trades": 9322,
          "n_runs": 2684,
          "n_trade_days": 21,
          "first_trade_date": "2026-03-03",
          "last_trade_date": "2026-03-31",
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
            "retail_pct": 0.0435528856468569,
            "mixed_pct": 0.0,
            "instit_pct": 0.5848530358292212,
            "ambiguous_pct": 0.1783951941643424,
            "unobservable_pct": 0.1931988843595795,
            "unclear_pct": 0.3715940785239219,
            "retail_qty_pct": 0.023832295212607386,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7104666107685818,
            "ambiguous_qty_pct": 0.1253756240338443,
            "unobservable_qty_pct": 0.1403254699849666,
            "unclear_qty_pct": 0.2657010940188109,
            "retail_notional_pct": 0.023910081023824425,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7108077905061165,
            "ambiguous_notional_pct": 0.1250284383726071,
            "unobservable_notional_pct": 0.1402536900974519,
            "unclear_notional_pct": 0.265282128470059
          },
          "run_composition": {
            "retail_pct": 0.14567809239940388,
            "mixed_pct": 0.0,
            "instit_pct": 0.23137108792846497,
            "ambiguous_pct": 0.19858420268256333,
            "unobservable_pct": 0.4243666169895678,
            "unclear_pct": 0.6229508196721312,
            "retail_notional_pct": 0.023910081023824425,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7108077905061165,
            "unclear_notional_pct": 0.265282128470059
          },
          "counts": {
            "trades": {
              "retail": 406,
              "mixed": 0,
              "institutional": 5452,
              "ambiguous": 1663,
              "unobservable": 1801,
              "unclear": 3464
            },
            "runs": {
              "retail": 391,
              "mixed": 0,
              "institutional": 621,
              "ambiguous": 533,
              "unobservable": 1139,
              "unclear": 1672
            }
          },
          "confidence": {
            "high": 0.07377049180327869,
            "medium": 0.20640834575260805,
            "low": 0.09687034277198212,
            "na": 0.6229508196721312
          },
          "confidence_counts": {
            "high": 198,
            "medium": 554,
            "low": 260,
            "na": 1672
          },
          "trade_confidence": {
            "high": 0.1025531001930916,
            "medium": 0.38157047843810343,
            "low": 0.14428234284488306,
            "na": 0.3715940785239219
          },
          "trade_confidence_counts": {
            "high": 956,
            "medium": 3557,
            "low": 1345,
            "na": 3464
          },
          "observability": {
            "avg_feature_coverage": 0.6604880774962743,
            "observable_run_pct": 0.5756333830104322,
            "ambiguous_run_pct": 0.19858420268256333,
            "unobservable_run_pct": 0.4243666169895678
          },
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "dominant_share": 0.4243666169895678,
          "dominance_gap": 0.19299552906110282,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 9322
            },
            "d2_information": {
              "UNOBSERVABLE": 9322
            },
            "d3_urgency": {
              "IMMEDIATE": 2638,
              "ADAPTIVE": 46
            },
            "participant_confidence": {
              "NA": 1672,
              "MEDIUM": 554,
              "LOW": 260,
              "HIGH": 198
            }
          },
          "trade_size": {
            "avg": 31203.132582063936,
            "median": 14080.0
          },
          "run_size": {
            "avg": 108373.92024217585,
            "median": 28000.0,
            "avg_length": 3.4731743666169894
          },
          "recent_trades": [
            {
              "trade_id": "797",
              "timestamp": "2026-03-31T07:59:56.450173",
              "price": 6.15,
              "size": 2000.0,
              "notional": 12300.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 52512,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "796",
              "timestamp": "2026-03-31T07:59:44.582579",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 52511,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "795",
              "timestamp": "2026-03-31T07:59:38.276437",
              "price": 6.15,
              "size": 2000.0,
              "notional": 12300.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52510,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "794",
              "timestamp": "2026-03-31T07:59:37.244156",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52510,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "793",
              "timestamp": "2026-03-31T07:59:35.326910",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52510,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "792",
              "timestamp": "2026-03-31T07:59:32.995777",
              "price": 6.16,
              "size": 4000.0,
              "notional": 24640.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52510,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "791",
              "timestamp": "2026-03-31T07:59:31.760935",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52510,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "790",
              "timestamp": "2026-03-31T07:59:26.028532",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52509,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "789",
              "timestamp": "2026-03-31T07:59:22.175729",
              "price": 6.15,
              "size": 2000.0,
              "notional": 12300.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52509,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "788",
              "timestamp": "2026-03-31T07:59:21.144982",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52509,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "787",
              "timestamp": "2026-03-31T07:59:18.049999",
              "price": 6.16,
              "size": 4000.0,
              "notional": 24640.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52509,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "786",
              "timestamp": "2026-03-31T07:59:15.774808",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52509,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "785",
              "timestamp": "2026-03-31T07:59:08.891007",
              "price": 6.16,
              "size": 4000.0,
              "notional": 24640.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52508,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "784",
              "timestamp": "2026-03-31T07:59:07.732593",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52508,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "783",
              "timestamp": "2026-03-31T07:59:02.717430",
              "price": 6.15,
              "size": 2000.0,
              "notional": 12300.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52507,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "782",
              "timestamp": "2026-03-31T07:59:02.709339",
              "price": 6.15,
              "size": 4000.0,
              "notional": 24600.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52507,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "781",
              "timestamp": "2026-03-31T07:58:58.089724",
              "price": 6.15,
              "size": 2000.0,
              "notional": 12300.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52507,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "780",
              "timestamp": "2026-03-31T07:58:35.801449",
              "price": 6.16,
              "size": 18000.0,
              "notional": 110880.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 52506,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "779",
              "timestamp": "2026-03-31T07:58:35.801449",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 52506,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "778",
              "timestamp": "2026-03-31T07:54:38.369444",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 52505,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "777",
              "timestamp": "2026-03-31T07:52:58.430533",
              "price": 6.15,
              "size": 2000.0,
              "notional": 12300.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 52504,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "776",
              "timestamp": "2026-03-31T07:52:23.726160",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 52503,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "775",
              "timestamp": "2026-03-31T07:49:40.322236",
              "price": 6.15,
              "size": 2000.0,
              "notional": 12300.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 52502,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "773",
              "timestamp": "2026-03-31T07:45:46.414723",
              "price": 6.15,
              "size": 2000.0,
              "notional": 12300.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 52501,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "772",
              "timestamp": "2026-03-31T07:40:55.611527",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 52500,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "771",
              "timestamp": "2026-03-31T07:40:55.611527",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 52500,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "770",
              "timestamp": "2026-03-31T07:40:55.611527",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 52500,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "769",
              "timestamp": "2026-03-31T07:40:55.611527",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 52500,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "768",
              "timestamp": "2026-03-31T07:40:49.420375",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52499,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "767",
              "timestamp": "2026-03-31T07:40:49.420375",
              "price": 6.16,
              "size": 4000.0,
              "notional": 24640.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52499,
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
          "n_trades": 52076,
          "n_runs": 11898,
          "n_trade_days": 51,
          "first_trade_date": "2025-12-29",
          "last_trade_date": "2026-03-31",
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
            "retail_pct": 0.041669867117290114,
            "mixed_pct": 0.0,
            "instit_pct": 0.6324986558107382,
            "ambiguous_pct": 0.1954643213764498,
            "unobservable_pct": 0.13036715569552193,
            "unclear_pct": 0.32583147707197174,
            "retail_qty_pct": 0.01776995121109605,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7556729272647894,
            "ambiguous_qty_pct": 0.1419046683996155,
            "unobservable_qty_pct": 0.084652453124499,
            "unclear_qty_pct": 0.2265571215241145,
            "retail_notional_pct": 0.017603710438914295,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7598310592710489,
            "ambiguous_notional_pct": 0.13999309989326594,
            "unobservable_notional_pct": 0.0825721303967708,
            "unclear_notional_pct": 0.22256523029003675
          },
          "run_composition": {
            "retail_pct": 0.1664145234493192,
            "mixed_pct": 0.0,
            "instit_pct": 0.22465960665658094,
            "ambiguous_pct": 0.24390653891410322,
            "unobservable_pct": 0.3650193309799966,
            "unclear_pct": 0.6089258698940998,
            "retail_notional_pct": 0.017603710438914295,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7598310592710489,
            "unclear_notional_pct": 0.22256523029003675
          },
          "counts": {
            "trades": {
              "retail": 2170,
              "mixed": 0,
              "institutional": 32938,
              "ambiguous": 10179,
              "unobservable": 6789,
              "unclear": 16968
            },
            "runs": {
              "retail": 1980,
              "mixed": 0,
              "institutional": 2673,
              "ambiguous": 2902,
              "unobservable": 4343,
              "unclear": 7245
            }
          },
          "confidence": {
            "high": 0.049420070600100854,
            "medium": 0.21432173474533536,
            "low": 0.12733232476046394,
            "na": 0.6089258698940998
          },
          "confidence_counts": {
            "high": 588,
            "medium": 2550,
            "low": 1515,
            "na": 7245
          },
          "trade_confidence": {
            "high": 0.047814732314309855,
            "medium": 0.47824333666180197,
            "low": 0.14811045395191644,
            "na": 0.32583147707197174
          },
          "trade_confidence_counts": {
            "high": 2490,
            "medium": 24905,
            "low": 7713,
            "na": 16968
          },
          "observability": {
            "avg_feature_coverage": 0.6788956127080181,
            "observable_run_pct": 0.6349806690200034,
            "ambiguous_run_pct": 0.24390653891410322,
            "unobservable_run_pct": 0.3650193309799966
          },
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "dominant_share": 0.3650193309799966,
          "dominance_gap": 0.1211127920658934,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 52076
            },
            "d2_information": {
              "UNOBSERVABLE": 52076
            },
            "d3_urgency": {
              "IMMEDIATE": 11192,
              "ADAPTIVE": 699,
              "SCHEDULED": 7
            },
            "participant_confidence": {
              "NA": 7245,
              "MEDIUM": 2550,
              "LOW": 1515,
              "HIGH": 588
            }
          },
          "trade_size": {
            "avg": 38508.30380559182,
            "median": 14500.0
          },
          "run_size": {
            "avg": 168545.84207261726,
            "median": 28960.0,
            "avg_length": 4.376870062195327
          },
          "recent_trades": [
            {
              "trade_id": "797",
              "timestamp": "2026-03-31T07:59:56.450173",
              "price": 6.15,
              "size": 2000.0,
              "notional": 12300.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 52512,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "796",
              "timestamp": "2026-03-31T07:59:44.582579",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 52511,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "795",
              "timestamp": "2026-03-31T07:59:38.276437",
              "price": 6.15,
              "size": 2000.0,
              "notional": 12300.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52510,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "794",
              "timestamp": "2026-03-31T07:59:37.244156",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52510,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "793",
              "timestamp": "2026-03-31T07:59:35.326910",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52510,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "792",
              "timestamp": "2026-03-31T07:59:32.995777",
              "price": 6.16,
              "size": 4000.0,
              "notional": 24640.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52510,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "791",
              "timestamp": "2026-03-31T07:59:31.760935",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52510,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "790",
              "timestamp": "2026-03-31T07:59:26.028532",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52509,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "789",
              "timestamp": "2026-03-31T07:59:22.175729",
              "price": 6.15,
              "size": 2000.0,
              "notional": 12300.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52509,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "788",
              "timestamp": "2026-03-31T07:59:21.144982",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52509,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "787",
              "timestamp": "2026-03-31T07:59:18.049999",
              "price": 6.16,
              "size": 4000.0,
              "notional": 24640.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52509,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "786",
              "timestamp": "2026-03-31T07:59:15.774808",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52509,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "785",
              "timestamp": "2026-03-31T07:59:08.891007",
              "price": 6.16,
              "size": 4000.0,
              "notional": 24640.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52508,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "784",
              "timestamp": "2026-03-31T07:59:07.732593",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52508,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "783",
              "timestamp": "2026-03-31T07:59:02.717430",
              "price": 6.15,
              "size": 2000.0,
              "notional": 12300.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52507,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "782",
              "timestamp": "2026-03-31T07:59:02.709339",
              "price": 6.15,
              "size": 4000.0,
              "notional": 24600.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52507,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "781",
              "timestamp": "2026-03-31T07:58:58.089724",
              "price": 6.15,
              "size": 2000.0,
              "notional": 12300.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52507,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "780",
              "timestamp": "2026-03-31T07:58:35.801449",
              "price": 6.16,
              "size": 18000.0,
              "notional": 110880.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 52506,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "779",
              "timestamp": "2026-03-31T07:58:35.801449",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 52506,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "778",
              "timestamp": "2026-03-31T07:54:38.369444",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 52505,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "777",
              "timestamp": "2026-03-31T07:52:58.430533",
              "price": 6.15,
              "size": 2000.0,
              "notional": 12300.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 52504,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "776",
              "timestamp": "2026-03-31T07:52:23.726160",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 52503,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "775",
              "timestamp": "2026-03-31T07:49:40.322236",
              "price": 6.15,
              "size": 2000.0,
              "notional": 12300.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 52502,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "773",
              "timestamp": "2026-03-31T07:45:46.414723",
              "price": 6.15,
              "size": 2000.0,
              "notional": 12300.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 52501,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "772",
              "timestamp": "2026-03-31T07:40:55.611527",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 52500,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "771",
              "timestamp": "2026-03-31T07:40:55.611527",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 52500,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "770",
              "timestamp": "2026-03-31T07:40:55.611527",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 52500,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "769",
              "timestamp": "2026-03-31T07:40:55.611527",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 52500,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "768",
              "timestamp": "2026-03-31T07:40:49.420375",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52499,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "767",
              "timestamp": "2026-03-31T07:40:49.420375",
              "price": 6.16,
              "size": 4000.0,
              "notional": 24640.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52499,
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
          "n_trades": 138474,
          "n_runs": 33326,
          "n_trade_days": 114,
          "first_trade_date": "2025-09-16",
          "last_trade_date": "2026-03-31",
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
            "retail_pct": 0.043502751419038956,
            "mixed_pct": 0.0,
            "instit_pct": 0.5850051273163193,
            "ambiguous_pct": 0.21133209122290106,
            "unobservable_pct": 0.16016003004174068,
            "unclear_pct": 0.3714921212646417,
            "retail_qty_pct": 0.01924018688306505,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7048733445720958,
            "ambiguous_qty_pct": 0.1627438611928046,
            "unobservable_qty_pct": 0.11314260735203449,
            "unclear_qty_pct": 0.2758864685448391,
            "retail_notional_pct": 0.018779795581401127,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7150330917464038,
            "ambiguous_notional_pct": 0.15934812945823668,
            "unobservable_notional_pct": 0.10683898321395834,
            "unclear_notional_pct": 0.266187112672195
          },
          "run_composition": {
            "retail_pct": 0.1584048490667947,
            "mixed_pct": 0.0,
            "instit_pct": 0.21466722678989378,
            "ambiguous_pct": 0.2439536698073576,
            "unobservable_pct": 0.3829742543359539,
            "unclear_pct": 0.6269279241433114,
            "retail_notional_pct": 0.018779795581401127,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7150330917464038,
            "unclear_notional_pct": 0.266187112672195
          },
          "counts": {
            "trades": {
              "retail": 6024,
              "mixed": 0,
              "institutional": 81008,
              "ambiguous": 29264,
              "unobservable": 22178,
              "unclear": 51442
            },
            "runs": {
              "retail": 5279,
              "mixed": 0,
              "institutional": 7154,
              "ambiguous": 8130,
              "unobservable": 12763,
              "unclear": 20893
            }
          },
          "confidence": {
            "high": 0.04269939386665066,
            "medium": 0.20467502850627137,
            "low": 0.12569765348376644,
            "na": 0.6269279241433116
          },
          "confidence_counts": {
            "high": 1423,
            "medium": 6821,
            "low": 4189,
            "na": 20893
          },
          "trade_confidence": {
            "high": 0.04302612764851163,
            "medium": 0.4208371246587807,
            "low": 0.16464462642806593,
            "na": 0.37149212126464176
          },
          "trade_confidence_counts": {
            "high": 5958,
            "medium": 58275,
            "low": 22799,
            "na": 51442
          },
          "observability": {
            "avg_feature_coverage": 0.6750420092420333,
            "observable_run_pct": 0.6170257456640461,
            "ambiguous_run_pct": 0.2439536698073576,
            "unobservable_run_pct": 0.3829742543359539
          },
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "dominant_share": 0.3829742543359539,
          "dominance_gap": 0.13902058452859628,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 138474
            },
            "d2_information": {
              "UNOBSERVABLE": 138474
            },
            "d3_urgency": {
              "IMMEDIATE": 31382,
              "ADAPTIVE": 1923,
              "SCHEDULED": 21
            },
            "participant_confidence": {
              "NA": 20893,
              "MEDIUM": 6821,
              "LOW": 4189,
              "HIGH": 1423
            }
          },
          "trade_size": {
            "avg": 35630.811725378044,
            "median": 14840.0
          },
          "run_size": {
            "avg": 148050.8018622097,
            "median": 36980.0,
            "avg_length": 4.155134129508492
          },
          "recent_trades": [
            {
              "trade_id": "797",
              "timestamp": "2026-03-31T07:59:56.450173",
              "price": 6.15,
              "size": 2000.0,
              "notional": 12300.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 52512,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "796",
              "timestamp": "2026-03-31T07:59:44.582579",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 52511,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "795",
              "timestamp": "2026-03-31T07:59:38.276437",
              "price": 6.15,
              "size": 2000.0,
              "notional": 12300.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52510,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "794",
              "timestamp": "2026-03-31T07:59:37.244156",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52510,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "793",
              "timestamp": "2026-03-31T07:59:35.326910",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52510,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "792",
              "timestamp": "2026-03-31T07:59:32.995777",
              "price": 6.16,
              "size": 4000.0,
              "notional": 24640.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52510,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "791",
              "timestamp": "2026-03-31T07:59:31.760935",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52510,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "790",
              "timestamp": "2026-03-31T07:59:26.028532",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52509,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "789",
              "timestamp": "2026-03-31T07:59:22.175729",
              "price": 6.15,
              "size": 2000.0,
              "notional": 12300.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52509,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "788",
              "timestamp": "2026-03-31T07:59:21.144982",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52509,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "787",
              "timestamp": "2026-03-31T07:59:18.049999",
              "price": 6.16,
              "size": 4000.0,
              "notional": 24640.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52509,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "786",
              "timestamp": "2026-03-31T07:59:15.774808",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52509,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "785",
              "timestamp": "2026-03-31T07:59:08.891007",
              "price": 6.16,
              "size": 4000.0,
              "notional": 24640.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52508,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "784",
              "timestamp": "2026-03-31T07:59:07.732593",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52508,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "783",
              "timestamp": "2026-03-31T07:59:02.717430",
              "price": 6.15,
              "size": 2000.0,
              "notional": 12300.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52507,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "782",
              "timestamp": "2026-03-31T07:59:02.709339",
              "price": 6.15,
              "size": 4000.0,
              "notional": 24600.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52507,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "781",
              "timestamp": "2026-03-31T07:58:58.089724",
              "price": 6.15,
              "size": 2000.0,
              "notional": 12300.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52507,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "780",
              "timestamp": "2026-03-31T07:58:35.801449",
              "price": 6.16,
              "size": 18000.0,
              "notional": 110880.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 52506,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "779",
              "timestamp": "2026-03-31T07:58:35.801449",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 52506,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "778",
              "timestamp": "2026-03-31T07:54:38.369444",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 52505,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "777",
              "timestamp": "2026-03-31T07:52:58.430533",
              "price": 6.15,
              "size": 2000.0,
              "notional": 12300.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 52504,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "776",
              "timestamp": "2026-03-31T07:52:23.726160",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 52503,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "775",
              "timestamp": "2026-03-31T07:49:40.322236",
              "price": 6.15,
              "size": 2000.0,
              "notional": 12300.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 52502,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "773",
              "timestamp": "2026-03-31T07:45:46.414723",
              "price": 6.15,
              "size": 2000.0,
              "notional": 12300.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 52501,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "772",
              "timestamp": "2026-03-31T07:40:55.611527",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 52500,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "771",
              "timestamp": "2026-03-31T07:40:55.611527",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 52500,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "770",
              "timestamp": "2026-03-31T07:40:55.611527",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 52500,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "769",
              "timestamp": "2026-03-31T07:40:55.611527",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 52500,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "768",
              "timestamp": "2026-03-31T07:40:49.420375",
              "price": 6.16,
              "size": 2000.0,
              "notional": 12320.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52499,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "767",
              "timestamp": "2026-03-31T07:40:49.420375",
              "price": 6.16,
              "size": 4000.0,
              "notional": 24640.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 52499,
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
      "n_trades": 138474,
      "n_runs": 33326,
      "n_trade_days": 114,
      "first_trade_date": "2025-09-16",
      "last_trade_date": "2026-03-31",
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
        "retail_pct": 0.043502751419038956,
        "mixed_pct": 0.0,
        "instit_pct": 0.5850051273163193,
        "ambiguous_pct": 0.21133209122290106,
        "unobservable_pct": 0.16016003004174068,
        "unclear_pct": 0.3714921212646417,
        "retail_qty_pct": 0.01924018688306505,
        "mixed_qty_pct": 0.0,
        "instit_qty_pct": 0.7048733445720958,
        "ambiguous_qty_pct": 0.1627438611928046,
        "unobservable_qty_pct": 0.11314260735203449,
        "unclear_qty_pct": 0.2758864685448391,
        "retail_notional_pct": 0.018779795581401127,
        "mixed_notional_pct": 0.0,
        "instit_notional_pct": 0.7150330917464038,
        "ambiguous_notional_pct": 0.15934812945823668,
        "unobservable_notional_pct": 0.10683898321395834,
        "unclear_notional_pct": 0.266187112672195
      },
      "run_composition": {
        "retail_pct": 0.1584048490667947,
        "mixed_pct": 0.0,
        "instit_pct": 0.21466722678989378,
        "ambiguous_pct": 0.2439536698073576,
        "unobservable_pct": 0.3829742543359539,
        "unclear_pct": 0.6269279241433114
      },
      "trade_size": {
        "avg": 35630.811725378044,
        "median": 14840.0
      },
      "run_size": {
        "avg": 148050.8018622097,
        "median": 36980.0,
        "avg_length": 4.155134129508492
      },
      "confidence": {
        "high": 0.04269939386665066,
        "medium": 0.20467502850627137,
        "low": 0.12569765348376644,
        "na": 0.6269279241433116
      },
      "confidence_counts": {
        "high": 1423,
        "medium": 6821,
        "low": 4189,
        "na": 20893
      },
      "trade_confidence": {
        "high": 0.04302612764851163,
        "medium": 0.4208371246587807,
        "low": 0.16464462642806593,
        "na": 0.37149212126464176
      },
      "trade_confidence_counts": {
        "high": 5958,
        "medium": 58275,
        "low": 22799,
        "na": 51442
      },
      "counts": {
        "trades": {
          "retail": 6024,
          "mixed": 0,
          "institutional": 81008,
          "ambiguous": 29264,
          "unobservable": 22178,
          "unclear": 51442
        },
        "runs": {
          "retail": 5279,
          "mixed": 0,
          "institutional": 7154,
          "ambiguous": 8130,
          "unobservable": 12763,
          "unclear": 20893
        }
      },
      "observability": {
        "avg_feature_coverage": 0.6750420092420333,
        "observable_run_pct": 0.6170257456640461,
        "ambiguous_run_pct": 0.2439536698073576,
        "unobservable_run_pct": 0.3829742543359539
      },
      "dominant_bucket": "UNOBSERVABLE",
      "dominant_label": "Not Observable",
      "dominant_share": 0.3829742543359539,
      "dominance_gap": 0.13902058452859628,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2025-10",
            "n_trades": 24979,
            "n_runs": 7341,
            "retail_pct": 0.03843228311781897,
            "mixed_pct": 0.0,
            "instit_pct": 0.5314063813603427,
            "ambiguous_pct": 0.21369950758637254,
            "unobservable_pct": 0.21646182793546578,
            "unclear_pct": 0.43016133552183833,
            "avg_trade_size": 27926.11034629088,
            "avg_run_notional": 95023.33610407301,
            "retail_qty_pct": 0.017703607643204743,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6740001325269938,
            "ambiguous_qty_pct": 0.1534236808424083,
            "unobservable_qty_pct": 0.1548725789873932,
            "unclear_qty_pct": 0.30829625982980147,
            "retail_notional_pct": 0.01752898188853207,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6742368374567279,
            "ambiguous_notional_pct": 0.153418481761021,
            "unobservable_notional_pct": 0.15481569889371902,
            "unclear_notional_pct": 0.30823418065474,
            "run_retail_pct": 0.11687780956272988,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.21100667483994007,
            "run_ambiguous_pct": 0.21740907233346957,
            "run_unobservable_pct": 0.4547064432638605,
            "run_unclear_pct": 0.6721155155973301,
            "avg_feature_coverage": 0.656742950551696,
            "high_confidence_pct": 0.06429641738182809,
            "medium_confidence_pct": 0.19288925214548427,
            "low_confidence_pct": 0.07069881487535758,
            "na_confidence_pct": 0.6721155155973301,
            "total_quantity": null
          },
          {
            "month": "2025-11",
            "n_trades": 11693,
            "n_runs": 3582,
            "retail_pct": 0.0563585050885145,
            "mixed_pct": 0.0,
            "instit_pct": 0.4752415975369879,
            "ambiguous_pct": 0.1842982981270846,
            "unobservable_pct": 0.28410159924741296,
            "unclear_pct": 0.46839989737449755,
            "avg_trade_size": 23506.904505259557,
            "avg_run_notional": 76735.40881630374,
            "retail_qty_pct": 0.026389201448721127,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6025857687599132,
            "ambiguous_qty_pct": 0.13730145604961988,
            "unobservable_qty_pct": 0.23372357374174582,
            "unclear_qty_pct": 0.3710250297913657,
            "retail_notional_pct": 0.026352539468292913,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6024448680046708,
            "ambiguous_notional_pct": 0.1373205967082089,
            "unobservable_notional_pct": 0.23388199581882743,
            "unclear_notional_pct": 0.37120259252703636,
            "run_retail_pct": 0.17252931323283083,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.19095477386934673,
            "run_ambiguous_pct": 0.1903964265773311,
            "run_unobservable_pct": 0.44611948632049137,
            "run_unclear_pct": 0.6365159128978225,
            "avg_feature_coverage": 0.6537269681742043,
            "high_confidence_pct": 0.01423785594639866,
            "medium_confidence_pct": 0.18816303740926857,
            "low_confidence_pct": 0.16108319374651034,
            "na_confidence_pct": 0.6365159128978225,
            "total_quantity": null
          },
          {
            "month": "2025-12",
            "n_trades": 8091,
            "n_runs": 2575,
            "retail_pct": 0.059695958472376714,
            "mixed_pct": 0.0,
            "instit_pct": 0.48362377950809543,
            "ambiguous_pct": 0.21171672228401928,
            "unobservable_pct": 0.24496353973550858,
            "unclear_pct": 0.4566802620195278,
            "avg_trade_size": 30825.949547645534,
            "avg_run_notional": 96859.32341359222,
            "retail_qty_pct": 0.026602292442912033,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6281132543602674,
            "ambiguous_qty_pct": 0.16319680019042027,
            "unobservable_qty_pct": 0.18208765300640023,
            "unclear_qty_pct": 0.3452844531968205,
            "retail_notional_pct": 0.026236460628488206,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6295954165352481,
            "ambiguous_notional_pct": 0.1662560348453136,
            "unobservable_notional_pct": 0.17791208799095007,
            "unclear_notional_pct": 0.34416812283626363,
            "run_retail_pct": 0.1774757281553398,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.19650485436893203,
            "run_ambiguous_pct": 0.23106796116504855,
            "run_unobservable_pct": 0.3949514563106796,
            "run_unclear_pct": 0.6260194174757282,
            "avg_feature_coverage": 0.6684854368932039,
            "high_confidence_pct": 0.025631067961165047,
            "medium_confidence_pct": 0.18446601941747573,
            "low_confidence_pct": 0.16388349514563108,
            "na_confidence_pct": 0.6260194174757282,
            "total_quantity": null
          },
          {
            "month": "2026-01",
            "n_trades": 28471,
            "n_runs": 4761,
            "retail_pct": 0.029854940114502477,
            "mixed_pct": 0.0,
            "instit_pct": 0.6865582522566822,
            "ambiguous_pct": 0.19749920972217344,
            "unobservable_pct": 0.08608759790664185,
            "unclear_pct": 0.2835868076288153,
            "avg_trade_size": 43498.59183168838,
            "avg_run_notional": 260123.58917034237,
            "retail_qty_pct": 0.011661427143809407,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7920352382517474,
            "ambiguous_qty_pct": 0.14086454896388073,
            "unobservable_qty_pct": 0.05543878564056251,
            "unclear_qty_pct": 0.19630333460444324,
            "retail_notional_pct": 0.011664781032633383,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.792834567766901,
            "ambiguous_notional_pct": 0.1414464761493255,
            "unobservable_notional_pct": 0.05405417505114015,
            "unclear_notional_pct": 0.19550065120046567,
            "run_retail_pct": 0.14660785549254357,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.22852341944969545,
            "run_ambiguous_pct": 0.2848141146817895,
            "run_unobservable_pct": 0.34005461037597146,
            "run_unclear_pct": 0.6248687250577609,
            "avg_feature_coverage": 0.6916824196597353,
            "high_confidence_pct": 0.04095778197857593,
            "medium_confidence_pct": 0.2247427011132115,
            "low_confidence_pct": 0.10943079185045158,
            "na_confidence_pct": 0.6248687250577609,
            "total_quantity": null
          },
          {
            "month": "2026-02",
            "n_trades": 9752,
            "n_runs": 3272,
            "retail_pct": 0.07085726004922067,
            "mixed_pct": 0.0,
            "instit_pct": 0.5558859721082855,
            "ambiguous_pct": 0.18570549630844954,
            "unobservable_pct": 0.1875512715340443,
            "unclear_pct": 0.37325676784249384,
            "avg_trade_size": 30320.486786300244,
            "avg_run_notional": 90368.39460268948,
            "retail_qty_pct": 0.03460857023165872,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7102694618487746,
            "ambiguous_qty_pct": 0.12900927223571718,
            "unobservable_qty_pct": 0.1261126956838495,
            "unclear_qty_pct": 0.25512196791956665,
            "retail_notional_pct": 0.03460803342018006,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.710065078361789,
            "ambiguous_notional_pct": 0.12888014534163225,
            "unobservable_notional_pct": 0.12644674287639873,
            "unclear_notional_pct": 0.25532688821803096,
            "run_retail_pct": 0.20996332518337407,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.21638141809290953,
            "run_ambiguous_pct": 0.20293398533007334,
            "run_unobservable_pct": 0.370721271393643,
            "run_unclear_pct": 0.5736552567237163,
            "avg_feature_coverage": 0.6720354523227384,
            "high_confidence_pct": 0.044926650366748165,
            "medium_confidence_pct": 0.20812958435207823,
            "low_confidence_pct": 0.1732885085574572,
            "na_confidence_pct": 0.5736552567237164,
            "total_quantity": null
          },
          {
            "month": "2026-03",
            "n_trades": 10151,
            "n_runs": 2853,
            "retail_pct": 0.042163333661708206,
            "mixed_pct": 0.0,
            "instit_pct": 0.5935375825041868,
            "ambiguous_pct": 0.1732834203526746,
            "unobservable_pct": 0.1910156634814304,
            "unclear_pct": 0.36429908383410503,
            "avg_trade_size": 32463.79072406659,
            "avg_run_notional": 115506.46324570627,
            "retail_qty_pct": 0.02205914945680717,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7251533274835616,
            "ambiguous_qty_pct": 0.11835837599818365,
            "unobservable_qty_pct": 0.13442914706144748,
            "unclear_qty_pct": 0.25278752305963115,
            "retail_notional_pct": 0.022082837448929016,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7258131569159499,
            "ambiguous_notional_pct": 0.11789199910772917,
            "unobservable_notional_pct": 0.13421200652739187,
            "unclear_notional_pct": 0.25210400563512103,
            "run_retail_pct": 0.1444093936207501,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.23273746933052927,
            "run_ambiguous_pct": 0.19698562916228532,
            "run_unobservable_pct": 0.42586750788643535,
            "run_unclear_pct": 0.6228531370487207,
            "avg_feature_coverage": 0.6603575184016824,
            "high_confidence_pct": 0.07430774623203645,
            "medium_confidence_pct": 0.2092534174553102,
            "low_confidence_pct": 0.0935856992639327,
            "na_confidence_pct": 0.6228531370487207,
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
          "trade_id": "797",
          "timestamp": "2026-03-31T07:59:56.450173",
          "price": 6.15,
          "size": 2000.0,
          "notional": 12300.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 52512,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "796",
          "timestamp": "2026-03-31T07:59:44.582579",
          "price": 6.16,
          "size": 2000.0,
          "notional": 12320.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 52511,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "795",
          "timestamp": "2026-03-31T07:59:38.276437",
          "price": 6.15,
          "size": 2000.0,
          "notional": 12300.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 52510,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "794",
          "timestamp": "2026-03-31T07:59:37.244156",
          "price": 6.16,
          "size": 2000.0,
          "notional": 12320.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 52510,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "793",
          "timestamp": "2026-03-31T07:59:35.326910",
          "price": 6.16,
          "size": 2000.0,
          "notional": 12320.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 52510,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "792",
          "timestamp": "2026-03-31T07:59:32.995777",
          "price": 6.16,
          "size": 4000.0,
          "notional": 24640.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 52510,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "791",
          "timestamp": "2026-03-31T07:59:31.760935",
          "price": 6.16,
          "size": 2000.0,
          "notional": 12320.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 52510,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "790",
          "timestamp": "2026-03-31T07:59:26.028532",
          "price": 6.16,
          "size": 2000.0,
          "notional": 12320.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 52509,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "789",
          "timestamp": "2026-03-31T07:59:22.175729",
          "price": 6.15,
          "size": 2000.0,
          "notional": 12300.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 52509,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "788",
          "timestamp": "2026-03-31T07:59:21.144982",
          "price": 6.16,
          "size": 2000.0,
          "notional": 12320.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 52509,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "787",
          "timestamp": "2026-03-31T07:59:18.049999",
          "price": 6.16,
          "size": 4000.0,
          "notional": 24640.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 52509,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "786",
          "timestamp": "2026-03-31T07:59:15.774808",
          "price": 6.16,
          "size": 2000.0,
          "notional": 12320.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 52509,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "785",
          "timestamp": "2026-03-31T07:59:08.891007",
          "price": 6.16,
          "size": 4000.0,
          "notional": 24640.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 52508,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "784",
          "timestamp": "2026-03-31T07:59:07.732593",
          "price": 6.16,
          "size": 2000.0,
          "notional": 12320.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 52508,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "783",
          "timestamp": "2026-03-31T07:59:02.717430",
          "price": 6.15,
          "size": 2000.0,
          "notional": 12300.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 52507,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "782",
          "timestamp": "2026-03-31T07:59:02.709339",
          "price": 6.15,
          "size": 4000.0,
          "notional": 24600.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 52507,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "781",
          "timestamp": "2026-03-31T07:58:58.089724",
          "price": 6.15,
          "size": 2000.0,
          "notional": 12300.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 52507,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "780",
          "timestamp": "2026-03-31T07:58:35.801449",
          "price": 6.16,
          "size": 18000.0,
          "notional": 110880.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 52506,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "779",
          "timestamp": "2026-03-31T07:58:35.801449",
          "price": 6.16,
          "size": 2000.0,
          "notional": 12320.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 52506,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "778",
          "timestamp": "2026-03-31T07:54:38.369444",
          "price": 6.16,
          "size": 2000.0,
          "notional": 12320.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 52505,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "777",
          "timestamp": "2026-03-31T07:52:58.430533",
          "price": 6.15,
          "size": 2000.0,
          "notional": 12300.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 52504,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "776",
          "timestamp": "2026-03-31T07:52:23.726160",
          "price": 6.16,
          "size": 2000.0,
          "notional": 12320.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 52503,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "775",
          "timestamp": "2026-03-31T07:49:40.322236",
          "price": 6.15,
          "size": 2000.0,
          "notional": 12300.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 52502,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "773",
          "timestamp": "2026-03-31T07:45:46.414723",
          "price": 6.15,
          "size": 2000.0,
          "notional": 12300.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 52501,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "772",
          "timestamp": "2026-03-31T07:40:55.611527",
          "price": 6.16,
          "size": 2000.0,
          "notional": 12320.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 52500,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "771",
          "timestamp": "2026-03-31T07:40:55.611527",
          "price": 6.16,
          "size": 2000.0,
          "notional": 12320.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 52500,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "770",
          "timestamp": "2026-03-31T07:40:55.611527",
          "price": 6.16,
          "size": 2000.0,
          "notional": 12320.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 52500,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "769",
          "timestamp": "2026-03-31T07:40:55.611527",
          "price": 6.16,
          "size": 2000.0,
          "notional": 12320.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 52500,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "768",
          "timestamp": "2026-03-31T07:40:49.420375",
          "price": 6.16,
          "size": 2000.0,
          "notional": 12320.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 52499,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "767",
          "timestamp": "2026-03-31T07:40:49.420375",
          "price": 6.16,
          "size": 4000.0,
          "notional": 24640.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 52499,
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
      "total_trades": 138473,
      "price_moving_trades": 29603,
      "pct_price_moving": 21.378174806641006,
      "all_movers": {
        "count": 29603,
        "avg_size": 36277.381519778406,
        "median_size": 14640.0,
        "retail_count": 2638,
        "mixed_count": 0,
        "institutional_count": 15493,
        "ambiguous_count": 6590,
        "unobservable_count": 4882,
        "retail_pct": 8.911258994020876,
        "mixed_pct": 0.0,
        "instit_pct": 52.33591190082086,
        "unclear_pct": 38.75282910515826
      },
      "positive_movers": {
        "count": 14706,
        "avg_size": 34268.92464640283,
        "median_size": 14480.0,
        "retail_count": 265,
        "mixed_count": 0,
        "institutional_count": 7741,
        "ambiguous_count": 2787,
        "unobservable_count": 3913,
        "retail_pct": 1.801985584115327,
        "mixed_pct": 0.0,
        "instit_pct": 52.63837889296885,
        "unclear_pct": 45.55963552291582
      },
      "negative_movers": {
        "count": 14897,
        "avg_size": 38260.087217560584,
        "median_size": 15960.0,
        "retail_count": 2373,
        "mixed_count": 0,
        "institutional_count": 7752,
        "ambiguous_count": 3803,
        "unobservable_count": 969,
        "retail_pct": 15.929381754715715,
        "mixed_pct": 0.0,
        "instit_pct": 52.03732295092972,
        "unclear_pct": 32.033295294354566
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
          "opening": 0.0006634858207126605,
          "continuous": 0.9347164147457194,
          "closing": 0.03418534135165747,
          "auctions": 0.03484882717237013,
          "other": 0.03043475808191045
        },
        "1M": {
          "opening": 0.0006993733991388406,
          "continuous": 0.881888817564242,
          "closing": 0.10555309461524984,
          "auctions": 0.10625246801438867,
          "other": 0.01185871442136923
        },
        "3M": {
          "opening": 0.0048154376802799536,
          "continuous": 0.9507917661643234,
          "closing": 0.037532797038298475,
          "auctions": 0.04234823471857843,
          "other": 0.0068599991170981015
        },
        "6M": {
          "opening": 0.00419061094367481,
          "continuous": 0.9592358132589924,
          "closing": 0.031868901105666175,
          "auctions": 0.036059512049340985,
          "other": 0.004704674691666552
        }
      },
      "hhi": {
        "1D": 0.14745425470007692,
        "1M": 0.16534829401631235,
        "3M": 0.16280082375963326,
        "6M": 0.15083366379902596
      },
      "profile_buckets": [
        {
          "time": "09:00",
          "avg_share": 0.0021
        },
        {
          "time": "09:30",
          "avg_share": 0.1698
        },
        {
          "time": "10:00",
          "avg_share": 0.1156
        },
        {
          "time": "10:30",
          "avg_share": 0.0822
        },
        {
          "time": "11:00",
          "avg_share": 0.0737
        },
        {
          "time": "11:30",
          "avg_share": 0.0359
        },
        {
          "time": "12:00",
          "avg_share": 0.0585
        },
        {
          "time": "13:00",
          "avg_share": 0.0699
        },
        {
          "time": "13:30",
          "avg_share": 0.0642
        },
        {
          "time": "14:00",
          "avg_share": 0.0646
        },
        {
          "time": "14:30",
          "avg_share": 0.0541
        },
        {
          "time": "15:00",
          "avg_share": 0.0641
        },
        {
          "time": "15:30",
          "avg_share": 0.1043
        },
        {
          "time": "16:00",
          "avg_share": 0.0409
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "751",
          "auctions_pct": 3.431069384405959,
          "hhi": 0.15380442491386953,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400",
            "you": true
          }
        },
        {
          "ticker": "1070",
          "auctions_pct": 3.0106831272309997,
          "hhi": 0.1296043251963141,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "6969",
          "auctions_pct": 1.933735795908816,
          "hhi": 0.12716050278386754,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "921",
          "auctions_pct": 8.611559865187308,
          "hhi": 0.1354036337625207,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "1126",
          "auctions_pct": 3.5333925532005233,
          "hhi": 0.1727268975311296,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "1999",
          "auctions_pct": 5.149683366303751,
          "hhi": 0.13711895967730833,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "1691",
          "auctions_pct": 2.3266570324601865,
          "hhi": 0.1660181084874655,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "2580",
          "auctions_pct": 5.607042480995696,
          "hhi": 0.13200392161211102,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "2285",
          "auctions_pct": 1.708109476765295,
          "hhi": 0.14325875649828115,
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
