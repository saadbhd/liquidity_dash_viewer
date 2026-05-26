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
      "ticker": "6993",
      "name": "BLUE MOON GROUP",
      "marketCap": 17935287695.92,
      "sector": "Non-durable Household Goods",
      "industry": "Consumer Staples - Consumer Staple Retailers"
    },
    {
      "ticker": "6808",
      "name": "SUNART RETAIL",
      "marketCap": 14119946956.0,
      "sector": "Supermarkets & Convenience Stores",
      "industry": "Consumer Staples - Consumer Staple Retailers"
    },
    {
      "ticker": "2698",
      "name": "SOFTCARE",
      "marketCap": 15891822080.0,
      "sector": "Personal Care",
      "industry": "Consumer Staples - Consumer Staple Retailers"
    },
    {
      "ticker": "1044",
      "name": "HENGAN INT'L",
      "marketCap": 30913737420.579998,
      "sector": "Personal Care",
      "industry": "Consumer Staples - Consumer Staple Retailers"
    },
    {
      "ticker": "6601",
      "name": "CHEERWIN GP",
      "marketCap": 3173333730.0,
      "sector": "Non-durable Household Goods",
      "industry": "Consumer Staples - Consumer Staple Retailers"
    },
    {
      "ticker": "399",
      "name": "STARCOIN GROUP",
      "marketCap": 239228878.744,
      "sector": "Personal Care",
      "industry": "Consumer Staples - Consumer Staple Retailers"
    },
    {
      "ticker": "2360",
      "name": "BEST MART 360",
      "marketCap": 1710000000.0,
      "sector": "Supermarkets & Convenience Stores",
      "industry": "Consumer Staples - Consumer Staple Retailers"
    },
    {
      "ticker": "2625",
      "name": "JIANGSU HORIZON",
      "marketCap": 822382081.85,
      "sector": "Supermarkets & Convenience Stores",
      "industry": "Consumer Staples - Consumer Staple Retailers"
    },
    {
      "ticker": "2569",
      "name": "SOFT INTL",
      "marketCap": 1110000000.0,
      "sector": "Personal Care",
      "industry": "Consumer Staples - Consumer Staple Retailers"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XHKG",
    "currency": "HKD",
    "ticker": "6993",
    "company": "BLUE MOON GROUP",
    "asof_date": "2026-05-13",
    "industry": "Consumer Staples - Consumer Staple Retailers",
    "sector": "Non-durable Household Goods",
    "market_cap_display": "17.9B",
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
          "score_pca": 63.788409179307656,
          "score_pca_percentile": 63.788409179307656,
          "rank_pca": 932,
          "total": 2571,
          "adv_notional_sgd": 1734550.0,
          "adv_volume_shares": 565000.0,
          "free_float_shares": 967814756.0,
          "turnover_ratio": 0.0005837894044260676,
          "votes": 320.0,
          "trades": 320.0,
          "spread_pct": 0.004494053483685979,
          "spread_ticks": 1.386954389406572,
          "amihud": 1.8718130043834283e-09,
          "volatility": 0.18572561831771617
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5415142553808814,
          "loadings": {
            "log_adv": 0.5397961500793665,
            "log_trades": 0.5007996995028573,
            "log_turnover": 0.5020931566954915,
            "neg_spread": 0.39733991656778095,
            "neg_amihud": 0.039135691976177084,
            "neg_vol": -0.2152013653589416
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
          "peer_median_adv": 2034705.0,
          "peer_median_score_pca": 62.66044340723454,
          "peer_median_trades": 138.5,
          "peer_median_volatility": 0.16051371013151416,
          "peer_median_spread_pct": 0.007720711857623609,
          "peer_median_spread_ticks": 1.6313571846173835,
          "peer_median_amihud": 2.3487313104697396e-09,
          "peer_median_turnover_ratio": 0.0017590480145397987,
          "target_vs_peer": {
            "score_pca_delta": 1.13,
            "adv_delta_pct": -14.8,
            "trades_delta_pct": 131.05,
            "volatility_delta_pct": -15.71,
            "spread_pct_delta_pct": 41.79,
            "spread_ticks_delta_pct": -14.98,
            "amihud_delta_pct": 20.31,
            "turnover_ratio_delta_pct": -66.81
          }
        },
        "peer_liquidity": [
          {
            "ticker": "6993",
            "score_pca": 63.788409179307656,
            "rank_pca": 932,
            "adv": 1734550.0,
            "trades": 320.0,
            "volatility": 0.18572561831771617,
            "spread_pct": 0.004494053483685979,
            "spread_ticks": 1.386954389406572,
            "amihud": 1.8718130043834283e-09,
            "turnover_ratio": 0.0005837894044260676,
            "is_target": true
          },
          {
            "ticker": "6808",
            "score_pca": 69.93387786853364,
            "rank_pca": 774,
            "adv": 6576779.6,
            "trades": 690.0,
            "volatility": 0.12971102897770162,
            "spread_pct": 0.007396371422407308,
            "spread_ticks": 1.0903090309030903,
            "amihud": 0.0,
            "turnover_ratio": 0.002234195479650347,
            "is_target": false
          },
          {
            "ticker": "2698",
            "score_pca": 87.59237650719565,
            "rank_pca": 320,
            "adv": 57142502.400000006,
            "trades": 5117.0,
            "volatility": 0.28613993076243327,
            "spread_pct": 0.003693103356243406,
            "spread_ticks": null,
            "amihud": 5.174406648872637e-10,
            "turnover_ratio": 0.009277544651837862,
            "is_target": false
          },
          {
            "ticker": "1044",
            "score_pca": 82.57487359004278,
            "rank_pca": 449,
            "adv": 70066474.38,
            "trades": 2163.0,
            "volatility": 0.1913163912853267,
            "spread_pct": 0.0011296272150197173,
            "spread_ticks": null,
            "amihud": 1.478980409991363e-10,
            "turnover_ratio": 0.004063133338895495,
            "is_target": false
          },
          {
            "ticker": "6601",
            "score_pca": 62.46596654998056,
            "rank_pca": 966,
            "adv": 1781430.0,
            "trades": 135.0,
            "volatility": 0.12042619363137286,
            "spread_pct": 0.006244330030514741,
            "spread_ticks": 1.4804469273743017,
            "amihud": 2.3487313104697396e-09,
            "turnover_ratio": 0.0021800960290795975,
            "is_target": false
          },
          {
            "ticker": "399",
            "score_pca": 13.029949436017112,
            "rank_pca": 2237,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.021892714628768333,
            "spread_ticks": 1.7822674418604652,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "2360",
            "score_pca": 62.85492026448852,
            "rank_pca": 956,
            "adv": 2287980.0,
            "trades": 142.0,
            "volatility": 0.22301867400010197,
            "spread_pct": 0.00804505229283991,
            "spread_ticks": 1.3768115942028984,
            "amihud": 2.5410857998636805e-09,
            "turnover_ratio": 0.001338,
            "is_target": false
          },
          {
            "ticker": "2625",
            "score_pca": 38.03967327887982,
            "rank_pca": 1594,
            "adv": 171010.0,
            "trades": 16.0,
            "volatility": 0.4447973346359448,
            "spread_pct": 0.04333367267297838,
            "spread_ticks": 14.848837209302326,
            "amihud": 1.3718736072267547e-07,
            "turnover_ratio": 0.00032670019917511,
            "is_target": false
          },
          {
            "ticker": "2569",
            "score_pca": 15.908206923376117,
            "rank_pca": 2163,
            "adv": 5550.000000000001,
            "trades": 1.0,
            "volatility": 0.0,
            "spread_pct": 0.0805258833196385,
            "spread_ticks": 8.647058823529411,
            "amihud": 6.2671367019192736e-06,
            "turnover_ratio": 2e-05,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Non-durable Household Goods",
          "sector_count": 7,
          "market_count": 2571,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5060275237141258,
              "median": 0.3232042928751561,
              "min": 0.0,
              "max": 10.473745016150396,
              "p5": 0.0,
              "p95": 1.6136677699860567,
              "count": 2571
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 76680533.29899609,
              "median": 315650.0,
              "min": 0.0,
              "max": 12307843080.0,
              "p5": 0.0,
              "p95": 303731318.55,
              "count": 2571
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04428403255950007,
              "median": 0.025075323160657016,
              "min": 0.0004705526210834868,
              "max": 1.0959752321981422,
              "p5": 0.0013279044262458311,
              "p95": 0.14550755907591303,
              "count": 2571
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.007293044804018578,
              "median": 0.001317109260391724,
              "min": 0.0,
              "max": 1.166388526205764,
              "p5": 0.0,
              "p95": 0.02673403916685832,
              "count": 2555
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.46863609521238e-06,
              "median": 6.149074472055994e-09,
              "min": 0.0,
              "max": 0.0034902020509696395,
              "p5": 0.0,
              "p95": 4.166733892878599e-06,
              "count": 2231
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1362.7183975106961,
              "median": 29.0,
              "min": 0.0,
              "max": 71810.0,
              "p5": 0.0,
              "p95": 7450.5,
              "count": 2571
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5318114389090192,
              "median": 0.35980170274396134,
              "min": 0.0,
              "max": 1.7381832667487567,
              "p5": 0.036127858089411866,
              "p95": 1.5029753921150004,
              "count": 7
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 580900.0,
              "median": 229680.0,
              "min": 0.0,
              "max": 1781430.0,
              "p5": 3840.0000000000005,
              "p95": 1767366.0,
              "count": 7
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.05247949754482056,
              "median": 0.04786428355043929,
              "min": 0.004494053483685979,
              "max": 0.12201591511936351,
              "p5": 0.005019136447734608,
              "p95": 0.1129989250968794,
              "count": 7
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.001342345421799823,
              "median": 0.0019150395751240004,
              "min": 0.0,
              "max": 0.0023272727272727273,
              "p5": 1.9904128447975588e-05,
              "p95": 0.002326252845651844,
              "count": 7
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.0471406184187445e-07,
              "median": 2.5945559997387453e-07,
              "min": 0.0,
              "max": 9.889240506329167e-07,
              "p5": 4.679532510958571e-10,
              "p95": 9.713373648412368e-07,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 75.71428571428571,
              "median": 23.0,
              "min": 0.0,
              "max": 320.0,
              "p5": 1.2000000000000002,
              "p95": 264.4999999999999,
              "count": 7
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 17253965.7975,
              "median": 2034705.0,
              "min": 0.0,
              "max": 70066474.38,
              "p5": 1942.5000000000005,
              "p95": 65543084.18699999,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1033.0,
              "median": 138.5,
              "min": 0.0,
              "max": 5117.0,
              "p5": 0.35000000000000003,
              "p95": 4083.0999999999985,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.17442619416161015,
              "median": 0.16051371013151416,
              "min": 0.0,
              "max": 0.4447973346359448,
              "p5": 0.0,
              "p95": 0.38926724328021567,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.02153259436730129,
              "median": 0.007720711857623609,
              "min": 0.0011296272150197173,
              "max": 0.0805258833196385,
              "p5": 0.0020268438644480084,
              "p95": 0.06750860959330744,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 4.8709551711954155,
              "median": 1.6313571846173835,
              "min": 1.0903090309030903,
              "max": 14.848837209302326,
              "p5": 1.1619346717280423,
              "p95": 13.298392612859097,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.156970312083098e-07,
              "median": 2.3487313104697396e-09,
              "min": 0.0,
              "max": 6.2671367019192736e-06,
              "p5": 4.4369412299740896e-11,
              "p95": 4.42815189956029e-06,
              "count": 7
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0024299587123298013,
              "median": 0.0017590480145397987,
              "min": 0.0,
              "max": 0.009277544651837862,
              "p5": 7.000000000000002e-06,
              "p95": 0.007452500692308031,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": -0.0032467532467532756,
            "market": 0.0029893238287395096,
            "sector": 0.0,
            "peers": -0.00499902695339105,
            "vs_market": -0.006236077075492785,
            "vs_sector": -0.0032467532467532756,
            "vs_peers": 0.0017522737066377747
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 73.12329832749903,
          "score_pca_percentile": 73.12329832749903,
          "rank_pca": 692,
          "total": 2571,
          "adv_notional_sgd": 4000550.0,
          "adv_volume_shares": 1290500.0,
          "free_float_shares": 967814756.0,
          "turnover_ratio": 0.0013334163299324607,
          "votes": 448.0,
          "trades": 448.0,
          "spread_pct": 0.004734530531956359,
          "spread_ticks": 1.4546862896979087,
          "amihud": 2.477159387257788e-09,
          "volatility": 0.29706255930275777
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5692280009263271,
          "loadings": {
            "log_adv": 0.5237382741395764,
            "log_trades": 0.4790159681142664,
            "log_turnover": 0.47520709516273235,
            "neg_spread": 0.45633952000592415,
            "neg_amihud": 0.2391825620318946,
            "neg_vol": 0.07047044558159868
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
          "peer_median_adv": 1689370.0,
          "peer_median_score_pca": 67.46402178140801,
          "peer_median_trades": 128.0,
          "peer_median_volatility": 0.42605073605022786,
          "peer_median_spread_pct": 0.007128987190664828,
          "peer_median_spread_ticks": 1.9602178682782245,
          "peer_median_amihud": 3.058633400495144e-09,
          "peer_median_turnover_ratio": 0.0021440936914914038,
          "target_vs_peer": {
            "score_pca_delta": 5.66,
            "adv_delta_pct": 136.8,
            "trades_delta_pct": 250.0,
            "volatility_delta_pct": 30.28,
            "spread_pct_delta_pct": 33.59,
            "spread_ticks_delta_pct": -25.79,
            "amihud_delta_pct": 19.01,
            "turnover_ratio_delta_pct": -37.81
          }
        },
        "peer_liquidity": [
          {
            "ticker": "6993",
            "score_pca": 73.12329832749903,
            "rank_pca": 692,
            "adv": 4000550.0,
            "trades": 448.0,
            "volatility": 0.29706255930275777,
            "spread_pct": 0.004734530531956359,
            "spread_ticks": 1.4546862896979087,
            "amihud": 2.477159387257788e-09,
            "turnover_ratio": 0.0013334163299324607,
            "is_target": true
          },
          {
            "ticker": "6808",
            "score_pca": 75.26254375729287,
            "rank_pca": 637,
            "adv": 5969787.2,
            "trades": 792.0,
            "volatility": 0.4469577835018653,
            "spread_pct": 0.007247097694132691,
            "spread_ticks": 1.052002583979328,
            "amihud": 2.3846310226312548e-09,
            "turnover_ratio": 0.002027994305406631,
            "is_target": false
          },
          {
            "ticker": "2698",
            "score_pca": 82.41929210423959,
            "rank_pca": 453,
            "adv": 26318979.36,
            "trades": 1563.0,
            "volatility": 0.4051436885985904,
            "spread_pct": 0.00404517239580616,
            "spread_ticks": null,
            "amihud": 7.691369188412306e-10,
            "turnover_ratio": 0.003429687590920502,
            "is_target": false
          },
          {
            "ticker": "1044",
            "score_pca": 86.8922598210813,
            "rank_pca": 338,
            "adv": 65167200.0,
            "trades": 2005.0,
            "volatility": 0.21178578016980987,
            "spread_pct": 0.0012081889609217328,
            "spread_ticks": null,
            "amihud": 9.862784085450481e-11,
            "turnover_ratio": 0.003786672051744507,
            "is_target": false
          },
          {
            "ticker": "6601",
            "score_pca": 70.12835472578763,
            "rank_pca": 769,
            "adv": 1916720.0000000002,
            "trades": 164.0,
            "volatility": 0.13327720213072672,
            "spread_pct": 0.006752635331918676,
            "spread_ticks": 1.6265060240963856,
            "amihud": 2.120831759676208e-09,
            "turnover_ratio": 0.002260193077576176,
            "is_target": false
          },
          {
            "ticker": "399",
            "score_pca": 60.83236094904706,
            "rank_pca": 1008,
            "adv": 547770.0,
            "trades": 92.0,
            "volatility": 1.926072691217397,
            "spread_pct": 0.02164455470463453,
            "spread_ticks": 2.2939297124600637,
            "amihud": 2.5598616172941172e-08,
            "turnover_ratio": 0.00245822441627764,
            "is_target": false
          },
          {
            "ticker": "2360",
            "score_pca": 64.79968883702838,
            "rank_pca": 906,
            "adv": 1462020.0,
            "trades": 63.0,
            "volatility": 0.14284054823666284,
            "spread_pct": 0.007010876687196966,
            "spread_ticks": 1.2159090909090908,
            "amihud": 3.7326357783590336e-09,
            "turnover_ratio": 0.000826,
            "is_target": false
          },
          {
            "ticker": "2625",
            "score_pca": 46.94671334111241,
            "rank_pca": 1365,
            "adv": 237690.0,
            "trades": 17.0,
            "volatility": 0.6227520216565242,
            "spread_pct": 0.03290891807580565,
            "spread_ticks": 13.808988764044944,
            "amihud": 9.256824049011084e-08,
            "turnover_ratio": 0.00038003900720369937,
            "is_target": false
          },
          {
            "ticker": "2569",
            "score_pca": 44.729677168416956,
            "rank_pca": 1422,
            "adv": 185250.0,
            "trades": 12.0,
            "volatility": 0.512669964471883,
            "spread_pct": 0.040554473593767876,
            "spread_ticks": 3.847826086956522,
            "amihud": 8.625181937431489e-08,
            "turnover_ratio": 0.00078,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Non-durable Household Goods",
          "sector_count": 7,
          "market_count": 2571,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6765907278531678,
              "median": 0.5026229041614776,
              "min": 0.0,
              "max": 28.006605574957277,
              "p5": 0.1599103149961085,
              "p95": 1.6866023855547383,
              "count": 2570
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 59007712.40690432,
              "median": 222580.0,
              "min": 0.0,
              "max": 11673799200.0,
              "p5": 0.0,
              "p95": 239961984.0,
              "count": 2571
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04391901617583294,
              "median": 0.028232636928289128,
              "min": 0.0004584442003279162,
              "max": 0.5912209998910793,
              "p5": 0.0014121504324399992,
              "p95": 0.13940532486882165,
              "count": 2571
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004224062730296432,
              "median": 0.0009200875717149073,
              "min": 0.0,
              "max": 0.2696492050568763,
              "p5": 0.0,
              "p95": 0.015764399573093096,
              "count": 2555
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.0595054115879974e-06,
              "median": 4.445297941649259e-08,
              "min": 0.0,
              "max": 0.0001747485275627021,
              "p5": 2.8137227212814984e-11,
              "p95": 4.352979149950278e-06,
              "count": 2563
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1055.5309218203033,
              "median": 21.0,
              "min": 0.0,
              "max": 65087.0,
              "p5": 0.0,
              "p95": 5850.0,
              "count": 2571
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7972663373650876,
              "median": 0.31655069945026465,
              "min": 0.13327720213072672,
              "max": 3.1155010474495883,
              "p5": 0.16246599618445082,
              "p95": 2.4287401460796856,
              "count": 7
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 875163.4285714285,
              "median": 51984.0,
              "min": 2970.0,
              "max": 4000550.0,
              "p5": 3135.0,
              "p95": 3375400.9999999986,
              "count": 7
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04277029807408524,
              "median": 0.04507405022537029,
              "min": 0.004734530531956359,
              "max": 0.08604407135362022,
              "p5": 0.005339961971945054,
              "p95": 0.08337625054100596,
              "count": 7
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0008739476580769269,
              "median": 0.001090909090909091,
              "min": 3.9099914007914574e-05,
              "max": 0.002260193077576176,
              "p5": 6.726659762062355e-05,
              "p95": 0.001982160053283061,
              "count": 7
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.19369946274522e-07,
              "median": 4.682527189452402e-07,
              "min": 2.120831759676208e-09,
              "max": 3.634091172123623e-06,
              "p5": 2.227730047950682e-09,
              "p95": 3.055843832786855e-06,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 91.71428571428571,
              "median": 8.0,
              "min": 1.0,
              "max": 448.0,
              "p5": 1.3,
              "p95": 362.7999999999998,
              "count": 7
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 12725677.07,
              "median": 1689370.0,
              "min": 185250.0,
              "max": 65167200.0,
              "p5": 203604.0,
              "p95": 51570322.77599998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 588.5,
              "median": 128.0,
              "min": 12.0,
              "max": 2005.0,
              "p5": 13.75,
              "p95": 1850.2999999999997,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5501874599979324,
              "median": 0.42605073605022786,
              "min": 0.13327720213072672,
              "max": 1.926072691217397,
              "p5": 0.13662437326780436,
              "p95": 1.469910456871091,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.015171489680523034,
              "median": 0.007128987190664828,
              "min": 0.0012081889609217328,
              "max": 0.040554473593767876,
              "p5": 0.0022011331631312824,
              "p95": 0.03787852916248109,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.974193710407723,
              "median": 1.9602178682782245,
              "min": 1.052002583979328,
              "max": 13.808988764044944,
              "p5": 1.0929792107117688,
              "p95": 11.318698094772838,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.6690567419716143e-08,
              "median": 3.058633400495144e-09,
              "min": 9.862784085450481e-11,
              "max": 9.256824049011084e-08,
              "p5": 3.3330601814985884e-10,
              "p95": 9.035749309958224e-08,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0019936013061411443,
              "median": 0.0021440936914914038,
              "min": 0.00038003900720369937,
              "max": 0.003786672051744507,
              "p5": 0.0005200253546824046,
              "p95": 0.003661727490456105,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.04421768707482965,
            "market": 0.05399728657881919,
            "sector": 0.024523141077001487,
            "peers": -0.03956400074698063,
            "vs_market": -0.009779599503989544,
            "vs_sector": 0.01969454599782816,
            "vs_peers": 0.08378168782181028
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 72.73434461299105,
          "score_pca_percentile": 72.73434461299105,
          "rank_pca": 702,
          "total": 2571,
          "adv_notional_sgd": 3410000.0,
          "adv_volume_shares": 1175500.0,
          "free_float_shares": 967814756.0,
          "turnover_ratio": 0.0012145919378811372,
          "votes": 417.0,
          "trades": 417.0,
          "spread_pct": 0.005066908228570597,
          "spread_ticks": 1.4663865546218486,
          "amihud": 3.917363990101581e-09,
          "volatility": 0.3556781167133583
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.6059105376330642,
          "loadings": {
            "log_adv": 0.5056993045906861,
            "log_trades": 0.4610971851041209,
            "log_turnover": 0.45752151764016297,
            "neg_spread": 0.4631578455840287,
            "neg_amihud": 0.3024829734005062,
            "neg_vol": 0.127751794502249
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
          "peer_median_adv": 2527927.5,
          "peer_median_score_pca": 66.82224815246985,
          "peer_median_trades": 264.5,
          "peer_median_volatility": 0.4215303312903619,
          "peer_median_spread_pct": 0.008142684922611,
          "peer_median_spread_ticks": 1.9708000420521448,
          "peer_median_amihud": 5.671299553084318e-09,
          "peer_median_turnover_ratio": 0.0024458171904275404,
          "target_vs_peer": {
            "score_pca_delta": 5.91,
            "adv_delta_pct": 34.9,
            "trades_delta_pct": 57.66,
            "volatility_delta_pct": 15.62,
            "spread_pct_delta_pct": 37.77,
            "spread_ticks_delta_pct": -25.59,
            "amihud_delta_pct": 30.93,
            "turnover_ratio_delta_pct": -50.34
          }
        },
        "peer_liquidity": [
          {
            "ticker": "6993",
            "score_pca": 72.73434461299105,
            "rank_pca": 702,
            "adv": 3410000.0,
            "trades": 417.0,
            "volatility": 0.3556781167133583,
            "spread_pct": 0.005066908228570597,
            "spread_ticks": 1.4663865546218486,
            "amihud": 3.917363990101581e-09,
            "turnover_ratio": 0.0012145919378811372,
            "is_target": true
          },
          {
            "ticker": "6808",
            "score_pca": 76.77946324387398,
            "rank_pca": 598,
            "adv": 7440286.0,
            "trades": 941.0,
            "volatility": 0.4013938050876606,
            "spread_pct": 0.006831609258507367,
            "spread_ticks": 1.078797874289903,
            "amihud": 1.7111518689421604e-09,
            "turnover_ratio": 0.00228483952978462,
            "is_target": false
          },
          {
            "ticker": "2698",
            "score_pca": 83.50836250486192,
            "rank_pca": 425,
            "adv": 30139560.0,
            "trades": 2029.0,
            "volatility": 0.5164714267991487,
            "spread_pct": 0.0036460129426975525,
            "spread_ticks": null,
            "amihud": 6.454552088643991e-10,
            "turnover_ratio": 0.004055578092294596,
            "is_target": false
          },
          {
            "ticker": "1044",
            "score_pca": 88.56476079346558,
            "rank_pca": 295,
            "adv": 71557630.0,
            "trades": 2200.0,
            "volatility": 0.18507509692532875,
            "spread_pct": 0.0011730937671029576,
            "spread_ticks": null,
            "amihud": 8.619303218869817e-11,
            "turnover_ratio": 0.004046229764391137,
            "is_target": false
          },
          {
            "ticker": "6601",
            "score_pca": 71.17852975495916,
            "rank_pca": 742,
            "adv": 2090325.0,
            "trades": 152.0,
            "volatility": 0.17780623399016737,
            "spread_pct": 0.007245994940978086,
            "spread_ticks": 1.7027863777089782,
            "amihud": 3.1468129204612748e-09,
            "turnover_ratio": 0.0026067948510704606,
            "is_target": false
          },
          {
            "ticker": "399",
            "score_pca": 62.07701283547258,
            "rank_pca": 976,
            "adv": 2965530.0,
            "trades": 377.0,
            "volatility": 3.678749543107034,
            "spread_pct": 0.018159304541942468,
            "spread_ticks": 2.2088414634146343,
            "amihud": 1.5874641133893978e-08,
            "turnover_ratio": 0.011823010668090793,
            "is_target": false
          },
          {
            "ticker": "2360",
            "score_pca": 62.46596654998056,
            "rank_pca": 966,
            "adv": 634340.0,
            "trades": 53.0,
            "volatility": 0.2243757636418398,
            "spread_pct": 0.009039374904243915,
            "spread_ticks": 1.7327586206896552,
            "amihud": 8.19578618570736e-09,
            "turnover_ratio": 0.000322,
            "is_target": false
          },
          {
            "ticker": "2625",
            "score_pca": 53.131077401789184,
            "rank_pca": 1206,
            "adv": 387200.00000000006,
            "trades": 24.0,
            "volatility": 0.5315079418095296,
            "spread_pct": 0.029082269439557315,
            "spread_ticks": 14.01123595505618,
            "amihud": 3.715775939867429e-08,
            "turnover_ratio": 0.0005867268883144833,
            "is_target": false
          },
          {
            "ticker": "2569",
            "score_pca": 51.925320886814475,
            "rank_pca": 1237,
            "adv": 246100.0,
            "trades": 15.0,
            "volatility": 0.44166685749306317,
            "spread_pct": 0.02744462452728257,
            "spread_ticks": 2.888888888888889,
            "amihud": 4.4376991417490054e-08,
            "turnover_ratio": 0.00092,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Non-durable Household Goods",
          "sector_count": 7,
          "market_count": 2571,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7148286914582817,
              "median": 0.5770274845083568,
              "min": 0.0,
              "max": 16.151536543674005,
              "p5": 0.21833075311833355,
              "p95": 1.6150731977291657,
              "count": 2570
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 58843340.62647402,
              "median": 219145.125,
              "min": 0.0,
              "max": 12576080000.0,
              "p5": 0.0,
              "p95": 231594937.53000003,
              "count": 2571
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0431485186857789,
              "median": 0.028615115771079076,
              "min": 0.0005715613899913342,
              "max": 0.586235634471959,
              "p5": 0.0014588781982334312,
              "p95": 0.13441364628991034,
              "count": 2571
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0038031252211868597,
              "median": 0.0008797395970792645,
              "min": 0.0,
              "max": 0.38612653752209847,
              "p5": 0.0,
              "p95": 0.014509309515262244,
              "count": 2555
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.120924232513407e-07,
              "median": 4.86139674810363e-08,
              "min": 0.0,
              "max": 6.966637265889136e-05,
              "p5": 4.683240293522914e-11,
              "p95": 3.6783420905338023e-06,
              "count": 2571
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1058.081096849475,
              "median": 20.0,
              "min": 0.0,
              "max": 68317.0,
              "p5": 0.0,
              "p95": 5797.0,
              "count": 2571
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.729752772019855,
              "median": 0.5643169528990616,
              "min": 0.17780623399016737,
              "max": 2.2417730795800175,
              "p5": 0.22998284180169282,
              "p95": 1.7965366098777227,
              "count": 7
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 801258.4285714285,
              "median": 23680.0,
              "min": 0.0,
              "max": 3410000.0,
              "p5": 696.0000000000001,
              "p95": 3014097.499999999,
              "count": 7
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.044419706918490474,
              "median": 0.04775549188156631,
              "min": 0.005066908228570597,
              "max": 0.09999999999999995,
              "p5": 0.005720634242292843,
              "p95": 0.09017301847089076,
              "count": 7
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0007058606210951962,
              "median": 0.00013269418965317057,
              "min": 0.0,
              "max": 0.0026067948510704606,
              "p5": 1.602671118530885e-05,
              "p95": 0.0021891339771136628,
              "count": 7
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.214675042511594e-07,
              "median": 3.8565963223497394e-07,
              "min": 3.1468129204612748e-09,
              "max": 2.5683172385453047e-06,
              "p5": 3.3779782413533667e-09,
              "p95": 2.117308162946816e-06,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 84.0,
              "median": 7.0,
              "min": 0.0,
              "max": 417.0,
              "p5": 0.30000000000000004,
              "p95": 337.49999999999983,
              "count": 7
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 14432621.375,
              "median": 2527927.5,
              "min": 246100.0,
              "max": 71557630.0,
              "p5": 295485.0,
              "p95": 57061305.49999998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 723.875,
              "median": 264.5,
              "min": 15.0,
              "max": 2200.0,
              "p5": 18.15,
              "p95": 2140.15,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7696308336067215,
              "median": 0.4215303312903619,
              "min": 0.17780623399016737,
              "max": 3.678749543107034,
              "p5": 0.18035033601747386,
              "p95": 2.5772149826529054,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.012827785540289028,
              "median": 0.008142684922611,
              "min": 0.0011730937671029576,
              "max": 0.029082269439557315,
              "p5": 0.002038615478561066,
              "p95": 0.028509093720261152,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.9372181966747064,
              "median": 1.9708000420521448,
              "min": 1.078797874289903,
              "max": 14.01123595505618,
              "p5": 1.2347950001446717,
              "p95": 11.230649188514356,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.3899348895777777e-08,
              "median": 5.671299553084318e-09,
              "min": 8.619303218869817e-11,
              "max": 4.4376991417490054e-08,
              "p5": 2.8193479402519353e-10,
              "p95": 4.185026021090453e-08,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003330647474243261,
              "median": 0.0024458171904275404,
              "min": 0.000322,
              "max": 0.011823010668090793,
              "p5": 0.0004146544109100692,
              "p95": 0.00910440926656212,
              "count": 8
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": 0.10035842293906905,
            "market": 0.06291748924226126,
            "sector": -0.027391894923735505,
            "peers": -0.10791965370464929,
            "vs_market": 0.03744093369680779,
            "vs_sector": 0.12775031786280455,
            "vs_peers": 0.20827807664371834
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 72.57876312718786,
          "score_pca_percentile": 72.57876312718786,
          "rank_pca": 706,
          "total": 2571,
          "adv_notional_sgd": 3421230.0,
          "adv_volume_shares": 1184993.5,
          "free_float_shares": 967814756.0,
          "turnover_ratio": 0.0012244011497588698,
          "votes": 429.0,
          "trades": 429.0,
          "spread_pct": 0.005031658046512035,
          "spread_ticks": 1.4160503036619485,
          "amihud": 3.3363194992812034e-09,
          "volatility": 0.32829450117894976
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.6314768492991323,
          "loadings": {
            "log_adv": 0.4953976587916947,
            "log_trades": 0.4487581704268956,
            "log_turnover": 0.448221160948588,
            "neg_spread": 0.45942078353123894,
            "neg_amihud": 0.35498807039446945,
            "neg_vol": 0.12333316080383888
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
          "peer_median_adv": 1742187.5,
          "peer_median_score_pca": 66.41384675223648,
          "peer_median_trades": 153.75,
          "peer_median_volatility": 0.37907884078396864,
          "peer_median_spread_pct": 0.007463219476523137,
          "peer_median_spread_ticks": 2.038890836839645,
          "peer_median_amihud": 5.36555906153222e-09,
          "peer_median_turnover_ratio": 0.0029990998519396996,
          "target_vs_peer": {
            "score_pca_delta": 6.16,
            "adv_delta_pct": 96.4,
            "trades_delta_pct": 179.02,
            "volatility_delta_pct": 13.4,
            "spread_pct_delta_pct": 32.58,
            "spread_ticks_delta_pct": -30.55,
            "amihud_delta_pct": 37.82,
            "turnover_ratio_delta_pct": -59.17
          }
        },
        "peer_liquidity": [
          {
            "ticker": "6993",
            "score_pca": 72.57876312718786,
            "rank_pca": 706,
            "adv": 3421230.0,
            "trades": 429.0,
            "volatility": 0.32829450117894976,
            "spread_pct": 0.005031658046512035,
            "spread_ticks": 1.4160503036619485,
            "amihud": 3.3363194992812034e-09,
            "turnover_ratio": 0.0012244011497588698,
            "is_target": true
          },
          {
            "ticker": "6808",
            "score_pca": 78.33527810190587,
            "rank_pca": 558,
            "adv": 11336992.075,
            "trades": 1129.5,
            "volatility": 0.37580112789275094,
            "spread_pct": 0.0066760682142980475,
            "spread_ticks": 1.0679054432982684,
            "amihud": 1.1717703665810443e-09,
            "turnover_ratio": 0.0034791027033101145,
            "is_target": false
          },
          {
            "ticker": "2698",
            "score_pca": 82.06923376118242,
            "rank_pca": 462,
            "adv": 25247392.000000004,
            "trades": 1720.0,
            "volatility": 0.4859955900062198,
            "spread_pct": 0.0034870751223179232,
            "spread_ticks": null,
            "amihud": 7.977899574833611e-10,
            "turnover_ratio": 0.003431495610046435,
            "is_target": false
          },
          {
            "ticker": "1044",
            "score_pca": 88.1369117075068,
            "rank_pca": 306,
            "adv": 69220772.19,
            "trades": 2222.0,
            "volatility": 0.17563981069293272,
            "spread_pct": 0.001126899104597489,
            "spread_ticks": null,
            "amihud": 8.879763141701902e-11,
            "turnover_ratio": 0.0038194185599898997,
            "is_target": false
          },
          {
            "ticker": "6601",
            "score_pca": 70.67288992609879,
            "rank_pca": 755,
            "adv": 2058640.0,
            "trades": 160.5,
            "volatility": 0.17819934502514126,
            "spread_pct": 0.006787425797493463,
            "spread_ticks": 1.5647512864493995,
            "amihud": 3.1378491418219048e-09,
            "turnover_ratio": 0.0025667040938329643,
            "is_target": false
          },
          {
            "ticker": "399",
            "score_pca": 61.61026837806302,
            "rank_pca": 988,
            "adv": 1425735.0,
            "trades": 147.0,
            "volatility": 3.007894424472189,
            "spread_pct": 0.022321251293440515,
            "spread_ticks": 2.5024193548387097,
            "amihud": 2.4130080350718635e-08,
            "turnover_ratio": 0.00615911836577867,
            "is_target": false
          },
          {
            "ticker": "2360",
            "score_pca": 62.15480357837417,
            "rank_pca": 974,
            "adv": 673850.0,
            "trades": 50.5,
            "volatility": 0.18822617545831297,
            "spread_pct": 0.00813901315555281,
            "spread_ticks": 1.5753623188405799,
            "amihud": 7.593268981242535e-09,
            "turnover_ratio": 0.00033,
            "is_target": false
          },
          {
            "ticker": "2625",
            "score_pca": 52.742123687281214,
            "rank_pca": 1216,
            "adv": 467445.0,
            "trades": 32.0,
            "volatility": 1.135412400455033,
            "spread_pct": 0.028787842873390673,
            "spread_ticks": 13.936703843420261,
            "amihud": 3.080329092749907e-08,
            "turnover_ratio": 0.0006800698023645147,
            "is_target": false
          },
          {
            "ticker": "2569",
            "score_pca": 54.57020614546869,
            "rank_pca": 1169,
            "adv": 333000.0,
            "trades": 18.0,
            "volatility": 0.38235655367518634,
            "spread_pct": 0.025147876558943523,
            "spread_ticks": 2.5672240802675583,
            "amihud": 3.0680022703217004e-08,
            "turnover_ratio": 0.00133,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Non-durable Household Goods",
          "sector_count": 7,
          "market_count": 2571,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7483395173581348,
              "median": 0.6010704658896161,
              "min": 0.0,
              "max": 33.691723975352446,
              "p5": 0.2240393935048951,
              "p95": 1.6180538366359474,
              "count": 2570
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 55800488.106529936,
              "median": 216062.5,
              "min": 0.0,
              "max": 11740043474.75,
              "p5": 0.0,
              "p95": 220612537.45999998,
              "count": 2571
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.042140920312480366,
              "median": 0.027532649823324016,
              "min": 0.0005759578485903171,
              "max": 0.586235634471959,
              "p5": 0.001410484441170142,
              "p95": 0.13379366933689363,
              "count": 2571
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003514195778375408,
              "median": 0.0008560319628529737,
              "min": 0.0,
              "max": 0.18138989186589122,
              "p5": 0.0,
              "p95": 0.01405517153536917,
              "count": 2555
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.197297529291873e-07,
              "median": 4.780297525718026e-08,
              "min": 0.0,
              "max": 1.9778481012658228e-05,
              "p5": 5.212610210840887e-11,
              "p95": 3.234072087966345e-06,
              "count": 2571
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1017.8096071567484,
              "median": 19.5,
              "min": 0.0,
              "max": 85041.0,
              "p5": 0.0,
              "p95": 5569.75,
              "count": 2571
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6321375112121181,
              "median": 0.5307442978026974,
              "min": 0.17819934502514126,
              "max": 1.6590372882123054,
              "p5": 0.2232278918712838,
              "p95": 1.391805597838473,
              "count": 7
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 798071.7714285714,
              "median": 12720.0,
              "min": 0.0,
              "max": 3421230.0,
              "p5": 0.0,
              "p95": 3012452.999999999,
              "count": 7
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.05543609701058836,
              "median": 0.04503582836783116,
              "min": 0.005031658046512035,
              "max": 0.16627130209347146,
              "p5": 0.005558388371806463,
              "p95": 0.13865510992318245,
              "count": 7
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0007026243021120308,
              "median": 0.00011546323091125078,
              "min": 0.0,
              "max": 0.0025667040938329643,
              "p5": 0.0,
              "p95": 0.002164013210610735,
              "count": 7
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.214404142040811e-07,
              "median": 4.878632668439462e-07,
              "min": 3.1378491418219048e-09,
              "max": 2.2417503586800493e-06,
              "p5": 3.1973902490596945e-09,
              "p95": 1.9876436382444198e-06,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 86.28571428571429,
              "median": 4.0,
              "min": 0.0,
              "max": 429.0,
              "p5": 0.0,
              "p95": 348.4499999999998,
              "count": 7
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 13845478.283125,
              "median": 1742187.5,
              "min": 333000.0,
              "max": 69220772.19,
              "p5": 380055.75,
              "p95": 53830089.123499975,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 684.9375,
              "median": 153.75,
              "min": 18.0,
              "max": 2222.0,
              "p5": 22.9,
              "p95": 2046.2999999999997,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7411906784597206,
              "median": 0.37907884078396864,
              "min": 0.17563981069293272,
              "max": 3.007894424472189,
              "p5": 0.1765356477092057,
              "p95": 2.352525716066183,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.012809181515004306,
              "median": 0.007463219476523137,
              "min": 0.001126899104597489,
              "max": 0.028787842873390673,
              "p5": 0.001952960710799641,
              "p95": 0.02751385466333417,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.869061054519129,
              "median": 2.038890836839645,
              "min": 1.0679054432982684,
              "max": 13.936703843420261,
              "p5": 1.1921169040860513,
              "p95": 11.094333902632085,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.2300358757497572e-08,
              "median": 5.36555906153222e-09,
              "min": 8.879763141701902e-11,
              "max": 3.080329092749907e-08,
              "p5": 3.3694494554023877e-10,
              "p95": 3.076014704900035e-08,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002724488641915325,
              "median": 0.0029990998519396996,
              "min": 0.00033,
              "max": 0.00615911836577867,
              "p5": 0.00045252443082758015,
              "p95": 0.0053402234337526,
              "count": 8
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": -0.016025641025640858,
            "market": 0.16364143082724758,
            "sector": -0.017855321974005856,
            "peers": -0.17998482399464255,
            "vs_market": -0.17966707185288844,
            "vs_sector": 0.0018296809483649978,
            "vs_peers": 0.1639591829690017
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "1D score 63.8 vs peer median 62.7 (+1.1 pts).",
        "market_comparison": "The stock still sits slightly above peers on the 1D liquidity score, at 63.8 compared with a peer median of 62.7. That matters because relative standing is holding up even as trading activity drops."
      },
      "30d": {
        "liquidity": "Liquidity is solid over the past month, with a 1M score of 73.1 compared with a peer median of 67.5. That points to generally workable access over a monthly horizon.",
        "market_comparison": "Return 4.4% vs peers -4.0%."
      },
      "3m": {
        "liquidity": "Liquidity has been steady over the past three months, with a 3M score of 72.7 compared with a peer median of 66.8. That indicates access has held at a modest premium to peers.",
        "market_comparison": "The stock materially outperformed peers over 3M, returning 10.0% compared with peers at -10.8%. That matters because the stronger tape supports relative tradability."
      },
      "6m": {
        "liquidity": "Liquidity is slightly above average over six months, with a score of 72.6 compared with a peer median of 66.4. That suggests the name is generally accessible for its size.",
        "market_comparison": "Primary average daily volume is HK$3.4M compared with a peer median of HK$1.7M. That matters because the stock has drawn more trading activity than the typical peer over time."
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
          "median": 0.3381335600478291,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "33.8%",
          "display_range": null,
          "display_text": "33.8%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 33.8,
          "plain_english": "Market explains about 33.8% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.417641698711052,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "41.8%",
          "display_range": null,
          "display_text": "41.8%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 41.8,
          "plain_english": "Sector explains about 41.8% of price moves in the current state."
        },
        "company_share": {
          "median": 0.24422474124111893,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "24.4%",
          "display_range": null,
          "display_text": "24.4%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 24.4,
          "plain_english": "Company-specific explains about 24.4% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": -1.0813201191756916,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-1.08",
          "display_range": null,
          "display_text": "-1.08",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Moderate",
          "plain_english": "Moderate market link: a 1% market move has lined up with about a 1.08% stock move in the opposite direction in this state.",
          "value_num": -1.08
        },
        "beta_stock_lag": {
          "median": -0.3844187581450516,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.38",
          "display_range": null,
          "display_text": "-0.38",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -0.38
        },
        "beta_sector": {
          "median": -1.8207325576189306,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-1.82",
          "display_range": null,
          "display_text": "-1.82",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "High",
          "plain_english": "High sector link: a 1% sector move has lined up with about a 1.82% stock move in the opposite direction in this state.",
          "value_num": -1.82
        },
        "beta_market_lag": {
          "median": 0.31165026100475446,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.31",
          "display_range": null,
          "display_text": "0.31",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 0.31
        },
        "beta_sector_lag": {
          "median": 0.09263496920489006,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.09",
          "display_range": null,
          "display_text": "0.09",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 0.09
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
          "period_label": "2025-04-28 to 2025-04-30",
          "n_obs": 3,
          "partial_month": true,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.9720991653671297,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "97.2%",
            "display_range": null,
            "display_text": "97.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
            "kind": "share_pct",
            "value_pct": 97.2,
            "plain_english": "Sector explains about 97.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.007584008502148327,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "0.8%",
              "display_range": null,
              "display_text": "0.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
              "kind": "share_pct",
              "value_pct": 0.8,
              "plain_english": "Market explains about 0.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.9720991653671297,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "97.2%",
              "display_range": null,
              "display_text": "97.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
              "kind": "share_pct",
              "value_pct": 97.2,
              "plain_english": "Sector explains about 97.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.020316826130721895,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "2.0%",
              "display_range": null,
              "display_text": "2.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
              "kind": "share_pct",
              "value_pct": 2.0,
              "plain_english": "Company-specific explains about 2.0% of price moves in the current state."
            }
          },
          "summary": "Apr: Still clearly sector-driven, though based on only 3 trading days."
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
            "median": 0.617807218847311,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "61.8%",
            "display_range": null,
            "display_text": "61.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 61.8,
            "plain_english": "Company-specific explains about 61.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2694049903604558,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.9%",
              "display_range": null,
              "display_text": "26.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 26.9,
              "plain_english": "Market explains about 26.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.11278779079223315,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "11.3%",
              "display_range": null,
              "display_text": "11.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 11.3,
              "plain_english": "Sector explains about 11.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.617807218847311,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.8%",
              "display_range": null,
              "display_text": "61.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 61.8,
              "plain_english": "Company-specific explains about 61.8% of price moves in the current state."
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
            "median": 0.4498793679070501,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "45.0%",
            "display_range": null,
            "display_text": "45.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 45.0,
            "plain_english": "Company-specific explains about 45.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3822795831426232,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "38.2%",
              "display_range": null,
              "display_text": "38.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 38.2,
              "plain_english": "Market explains about 38.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.16784104895032673,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "16.8%",
              "display_range": null,
              "display_text": "16.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 16.8,
              "plain_english": "Sector explains about 16.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4498793679070501,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.0%",
              "display_range": null,
              "display_text": "45.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 45.0,
              "plain_english": "Company-specific explains about 45.0% of price moves in the current state."
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
            "median": 0.7102687093498499,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "71.0%",
            "display_range": null,
            "display_text": "71.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 71.0,
            "plain_english": "Company-specific explains about 71.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.1212030697952315,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "12.1%",
              "display_range": null,
              "display_text": "12.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 12.1,
              "plain_english": "Market explains about 12.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.16852822085491853,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "16.9%",
              "display_range": null,
              "display_text": "16.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 16.9,
              "plain_english": "Sector explains about 16.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.7102687093498499,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "71.0%",
              "display_range": null,
              "display_text": "71.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 71.0,
              "plain_english": "Company-specific explains about 71.0% of price moves in the current state."
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
            "median": 0.4262803893637267,
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
            "plain_english": "Company-specific explains about 42.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2478467837162003,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "24.8%",
              "display_range": null,
              "display_text": "24.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 24.8,
              "plain_english": "Market explains about 24.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3258728269200731,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "32.6%",
              "display_range": null,
              "display_text": "32.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 32.6,
              "plain_english": "Sector explains about 32.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4262803893637267,
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
              "plain_english": "Company-specific explains about 42.6% of price moves in the current state."
            }
          },
          "summary": "Aug: More mixed, though company-driven still has the largest share."
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
            "median": 0.6294301664187244,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "62.9%",
            "display_range": null,
            "display_text": "62.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 62.9,
            "plain_english": "Company-specific explains about 62.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.33851116203985304,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "33.9%",
              "display_range": null,
              "display_text": "33.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 33.9,
              "plain_english": "Market explains about 33.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.03205867154142258,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "3.2%",
              "display_range": null,
              "display_text": "3.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 3.2,
              "plain_english": "Sector explains about 3.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6294301664187244,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "62.9%",
              "display_range": null,
              "display_text": "62.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 62.9,
              "plain_english": "Company-specific explains about 62.9% of price moves in the current state."
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
            "median": 0.5695667592439093,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "57.0%",
            "display_range": null,
            "display_text": "57.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 57.0,
            "plain_english": "Company-specific explains about 57.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3013328249613168,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "30.1%",
              "display_range": null,
              "display_text": "30.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 30.1,
              "plain_english": "Market explains about 30.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1291004157947739,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "12.9%",
              "display_range": null,
              "display_text": "12.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 12.9,
              "plain_english": "Sector explains about 12.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5695667592439093,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "57.0%",
              "display_range": null,
              "display_text": "57.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 57.0,
              "plain_english": "Company-specific explains about 57.0% of price moves in the current state."
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
            "median": 0.47338234030734605,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.3%",
            "display_range": null,
            "display_text": "47.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 47.3,
            "plain_english": "Market explains about 47.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.47338234030734605,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.3%",
              "display_range": null,
              "display_text": "47.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 47.3,
              "plain_english": "Market explains about 47.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2374275233995521,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "23.7%",
              "display_range": null,
              "display_text": "23.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 23.7,
              "plain_english": "Sector explains about 23.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.2891901362931018,
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
              "plain_english": "Company-specific explains about 28.9% of price moves in the current state."
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
            "median": 0.7122565223276884,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "71.2%",
            "display_range": null,
            "display_text": "71.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
            "kind": "share_pct",
            "value_pct": 71.2,
            "plain_english": "Company-specific explains about 71.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.15551666268059916,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "15.6%",
              "display_range": null,
              "display_text": "15.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 15.6,
              "plain_english": "Market explains about 15.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1322268149917124,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "13.2%",
              "display_range": null,
              "display_text": "13.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 13.2,
              "plain_english": "Sector explains about 13.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.7122565223276884,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "71.2%",
              "display_range": null,
              "display_text": "71.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 71.2,
              "plain_english": "Company-specific explains about 71.2% of price moves in the current state."
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
            "median": 0.6271088850703407,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "62.7%",
            "display_range": null,
            "display_text": "62.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 62.7,
            "plain_english": "Company-specific explains about 62.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.1932992268560023,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "19.3%",
              "display_range": null,
              "display_text": "19.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 19.3,
              "plain_english": "Market explains about 19.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.17959188807365697,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "18.0%",
              "display_range": null,
              "display_text": "18.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 18.0,
              "plain_english": "Sector explains about 18.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6271088850703407,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "62.7%",
              "display_range": null,
              "display_text": "62.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 62.7,
              "plain_english": "Company-specific explains about 62.7% of price moves in the current state."
            }
          },
          "summary": "Jan: Still clearly company-driven."
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
            "median": 0.6560181408342851,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "65.6%",
            "display_range": null,
            "display_text": "65.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
            "kind": "share_pct",
            "value_pct": 65.6,
            "plain_english": "Company-specific explains about 65.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.31705180074268197,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "31.7%",
              "display_range": null,
              "display_text": "31.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 31.7,
              "plain_english": "Market explains about 31.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.02693005842303299,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "2.7%",
              "display_range": null,
              "display_text": "2.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 2.7,
              "plain_english": "Sector explains about 2.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6560181408342851,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "65.6%",
              "display_range": null,
              "display_text": "65.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 65.6,
              "plain_english": "Company-specific explains about 65.6% of price moves in the current state."
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
            "median": 0.46916134278359917,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "46.9%",
            "display_range": null,
            "display_text": "46.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 46.9,
            "plain_english": "Market explains about 46.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.46916134278359917,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.9%",
              "display_range": null,
              "display_text": "46.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 46.9,
              "plain_english": "Market explains about 46.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2335582786674553,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "23.4%",
              "display_range": null,
              "display_text": "23.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 23.4,
              "plain_english": "Sector explains about 23.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.29728037854894557,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "29.7%",
              "display_range": null,
              "display_text": "29.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 29.7,
              "plain_english": "Company-specific explains about 29.7% of price moves in the current state."
            }
          },
          "summary": "Mar: Mostly market-driven."
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
            "median": 0.504947549621259,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "50.5%",
            "display_range": null,
            "display_text": "50.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
            "kind": "share_pct",
            "value_pct": 50.5,
            "plain_english": "Company-specific explains about 50.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2733662276624835,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.3%",
              "display_range": null,
              "display_text": "27.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 27.3,
              "plain_english": "Market explains about 27.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2216862227162575,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "22.2%",
              "display_range": null,
              "display_text": "22.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 22.2,
              "plain_english": "Sector explains about 22.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.504947549621259,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.5%",
              "display_range": null,
              "display_text": "50.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 50.5,
              "plain_english": "Company-specific explains about 50.5% of price moves in the current state."
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
            "median": 0.5701077485645919,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "57.0%",
            "display_range": null,
            "display_text": "57.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
            "kind": "share_pct",
            "value_pct": 57.0,
            "plain_english": "Company-specific explains about 57.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.23086050170689992,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "23.1%",
              "display_range": null,
              "display_text": "23.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
              "kind": "share_pct",
              "value_pct": 23.1,
              "plain_english": "Market explains about 23.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.19903174972850812,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "19.9%",
              "display_range": null,
              "display_text": "19.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
              "kind": "share_pct",
              "value_pct": 19.9,
              "plain_english": "Sector explains about 19.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5701077485645919,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "57.0%",
              "display_range": null,
              "display_text": "57.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
              "kind": "share_pct",
              "value_pct": 57.0,
              "plain_english": "Company-specific explains about 57.0% of price moves in the current state."
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
          "expected_duration_days": 8.928571428571429,
          "current_probability": 1.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.014616328936427121,
            "low": 0.014616328936427121,
            "high": 0.014616328936427121
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": null
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 9.538461538461538,
          "current_probability": 0.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.024774682286562814,
            "low": 0.024774682286562814,
            "high": 0.024774682286562814
          },
          "volatility_label": "High Volatility",
          "current_probability_display": 0.0
        }
      ],
      "transitions": {
        "mean": [
          [
            0.8951612903225806,
            0.10483870967741936
          ],
          [
            0.10483870967741936,
            0.8951612903225806
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            111.0,
            13.0
          ],
          [
            13.0,
            111.0
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
        "market_link_display": "-1.08",
        "sector_link_display": "-1.82",
        "market_link_explainer": "Moderate market link. A 1% market move has lined up with about a 1.08% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "High sector link. A 1% sector move has lined up with about a 1.82% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "-0.38",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "Low Volatility",
        "dominant_driver": "sector",
        "dominant_driver_label": "Sector",
        "driver_share_pct": 41.8,
        "driver_share_display": "41.8%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 251 trading days relative to the 252-day target.",
        "history_days": 251,
        "history_limited": true,
        "volatility_label": "Low Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.8951612903225806,
        "effective_days": 125.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 8.9 days.",
        "expected_duration_days": 8.9
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
          "expected_duration_days": 8.928571428571429,
          "current_probability": 1.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.014616328936427121,
            "low": 0.014616328936427121,
            "high": 0.014616328936427121
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 9.538461538461538,
          "current_probability": 0.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.024774682286562814,
            "low": 0.024774682286562814,
            "high": 0.024774682286562814
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.8951612903225806,
          0.10483870967741936
        ],
        [
          0.10483870967741936,
          0.8951612903225806
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.8951612903225806,
            0.10483870967741936
          ],
          [
            0.10483870967741936,
            0.8951612903225806
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            111.0,
            13.0
          ],
          [
            13.0,
            111.0
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
        "text": "Execution: thin buy-side",
        "bg": "bg-red-500/20",
        "textColor": "text-red-400"
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
    "liq_subtitle": "Longer-term liquidity sits modestly above peers, but the current book is less supportive on the buy side.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent returns are stronger than peers and the market, giving the tape a firmer backdrop.",
    "perf_insight": "Performance has been strong, with a 1M return of +4.4% compared with peers at -4.0% and the market at +5.4%. That matters because price momentum is supportive even as near-term trading conditions look thinner.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Sector moves are the main current driver, accounting for 41.8% of the tape.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly sector-driven, accounting for about 41.8% of price changes. Other influences are market 33.8%, and company-specific 24.4%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 33.8%, sector 41.8%, and company-specific 24.4%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has shifted from market-driven to company-driven over Mar to May."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 33.8%, sector 41.8%, and company-specific 24.4%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "That matters because broader sector direction is still shaping trading, so the stock is not moving on company factors alone.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: sector factors are the largest influence on recent price moves at 41.8%.",
      "Monthly change: the pattern has moved from mostly market-driven in March to mostly sector in April and May, so the current sector lead looks more temporary than entrenched."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "The market backdrop looks constructive, but immediate execution still depends on a thinner buy-side book.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on May 13, 2025 to May 13, 2026 (242 trading days • 161,273 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on the displayed order book.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is thin enough that downside execution may feel worse than the monthly liquidity score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The near-term execution picture is weaker than the broader liquidity profile, with displayed bid depth at 0.43x ask depth despite a 1 tick spread.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 15.8% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Trading stays usable through the day, and the observed flow mix currently leans institution-like.",
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
    "intraday_insight": "Buy-side support is notably thinner than sell-side depth, with displayed bid depth at 0.43x ask depth while the spread remains 1 tick. That matters because selling into the market may feel harder than the six-month liquidity score implies.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "The current trading picture is better explained by sector direction and book depth.",
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
    "exec_subtitle": "Liquidity is mixed for the stock’s size, and today’s book shows thinner buy-side support.",
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
        "value": "72.6/100",
        "sub": "Peer median 66.4 (+6.2 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "HK$3.4M",
        "sub": "Peer median HK$1.7M",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "0.50%",
        "sub": "1.42 ticks; peers 0.75%",
        "interp": {
          "text": "Tighter",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "6M liquidity is strong: score 72.6 vs peer median 66.4 (+6.2 pts). 1D average volume down -56.6% from 1M. Recent flow does not show a clear deterioration from the monthly baseline.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "3.075",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "0.33%",
        "note": "1.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.43x",
        "note": "Bid depth / ask depth on the displayed order book",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-0.16% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-1.08% with 100.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-1.72% with 58.8% fill.",
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
        "subtext": "Rank 706/2571",
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
        "value": "0.50",
        "suffix": "%",
        "bar_pct": 5,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "0.50% • 1.42 ticks vs peers 0.75%",
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
        "value": "3.4M",
        "value_prefix": "HK$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Peer median HK$1.7M",
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
        "value": "41.8",
        "suffix": "sector",
        "bar_pct": 42,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 33.8% • Company 24.4%",
        "interpretation": {
          "text": "Sector",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Liquidity is mixed for the stock’s size, with a 6M liquidity score of 72.6 compared with a peer median of 66.4. That matters because peer-relative access is slightly better than average, but not clearly strong.",
      "Recent returns are firm, with the stock up 4.4% over one month compared with peers down 4.0% and the market up 5.4%. That matters because the tape has a stronger price backdrop than the main comparison groups.",
      "The main near-term watchpoint is buy-side depth, with displayed bid depth at 0.43x ask depth while the spread remains 1"
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
      "overall": "6M liquidity is strong: score 72.6 vs peer median 66.4 (+6.2 pts). 1D average volume down -56.6% from 1M. Recent flow does not show a clear deterioration from the monthly baseline.",
      "strengths": [
        "6M score 72.6 vs peer median 66.4 (+6.2 pts)."
      ],
      "concerns": [
        "1D average volume down -56.6% from 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: +6.2 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is -1.6%, better than sector and peers, but worse than market, which shows price performance is mixed across comparison groups.",
        "vs_market": "Worse than market: -1.6% vs market 16.4%.",
        "vs_sector": "Better than sector: -1.6% vs sector -1.8%.",
        "vs_peers": "Better than peers: -1.6% vs peers -18.0%."
      },
      "adv": {
        "insight": "ADV is HK$3.4M, better than market, sector, and peers, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: HK$3.4M vs market HK$216.1K.",
        "vs_sector": "Better than sector: HK$3.4M vs sector HK$12.7K.",
        "vs_peers": "Better than peers: HK$3.4M vs peers HK$1.7M."
      },
      "spread": {
        "insight": "Spread is 0.50%, better than market, sector, and peers, which keeps trading costs more competitive than comparable names.",
        "vs_market": "Better than market: 0.50% vs market 2.75%.",
        "vs_sector": "Better than sector: 0.50% vs sector 4.50%.",
        "vs_peers": "Better than peers: 0.50% vs peers 0.75%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.12%, better than market and sector, but worse than peers, which shows turnover is mixed across comparison groups.",
        "vs_market": "Better than market: 0.12% vs market 0.09%.",
        "vs_sector": "Better than sector: 0.12% vs sector 0.01%.",
        "vs_peers": "Worse than peers: 0.12% vs peers 0.30%."
      },
      "volatility": {
        "insight": "Volatility is 32.83%, better than market, sector, and peers, which suggests day-to-day price swings are more contained than comparable names.",
        "vs_market": "Better than market: 32.83% vs market 60.11%.",
        "vs_sector": "Better than sector: 32.83% vs sector 53.07%.",
        "vs_peers": "Better than peers: 32.83% vs peers 37.91%."
      },
      "trades": {
        "insight": "Trades is 429, better than market, sector, and peers, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 429 vs market 20.",
        "vs_sector": "Better than sector: 429 vs sector 4.",
        "vs_peers": "Better than peers: 429 vs peers 154."
      },
      "amihud": {
        "insight": "Price impact is 3.34e-09, better than market, sector, and peers, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 3.34e-09 vs market 4.78e-08.",
        "vs_sector": "Better than sector: 3.34e-09 vs sector 4.88e-07.",
        "vs_peers": "Better than peers: 3.34e-09 vs peers 5.37e-09."
      }
    },
    "performance": {
      "overall": "Recent performance is strong relative to peers and the market, with the stock up 4.4% over one month compared with peers down 4.0% and the market up 5.4%. Liquidity gives a mixed read on that strength because the six-month liquidity score is 72.6 against a 66.4 peer median, but one-day average volume is 56.6% below the monthly average.",
      "conclusion": "The move looks mainly sector-linked, with strong relative returns but only mixed liquidity confirmation."
    },
    "drivers": {
      "overall": "Sector factors are the main force behind the stock right now, accounting for 41.8% of recent price moves. That matters because trading is being led more by the group backdrop than by company news, even as the stock has outperformed with a 4.4% 1M return compared with peers at -4.0% and the market at +5.4%.",
      "beta": "The current read looks mixed rather than fully established because recent average volume is 56.6% below the 1M average. That matters because thinner flow can make short-term sector-led moves look sharper and less durable.",
      "rolling_change": "The monthly pattern had shifted toward company-driven trading in April and May after being mostly market-driven in March. That matters because the current sector-led spell stands out against the recent monthly backdrop, pointing to a more temporary change in what is moving the stock now."
    },
    "regime": {
      "overall": "The market is in a calmer phase, and the roughly 8.9-day typical run length suggests this backdrop can hold long enough to shape trading conditions. That matters because steadier price action usually supports more predictable execution, even when liquidity signals are mixed.",
      "current": "Current market state is Low Volatility. The market has been in this state about 50.2% of the time. Based on 251 trading days relative to the 252-day target.",
      "transitions": "This state looks reasonably stable rather than fleeting, with a typical run length of about 8.9 days. Even so, the 1D average volume is 56.6% below the 1M average, so the backdrop can still change if participation stays light.",
      "trading_implications": "This state looks more persistent, with a typical run length of about 8.9 days."
    },
    "execution": {
      "overall": "Displayed liquidity is thin buy-side because bid depth is only 0.43x of ask depth even with a 1 tick spread. That matters because the top of book looks orderly, but visible support on the buy side is materially lighter than the sell side.",
      "concern": "The clearest stress point is the imbalance in displayed depth, with materially less buying interest than selling interest. With 1D average volume down 56.6% from the 1M average, that thinner bid side can matter more in the current session.",
      "peer_context": "The broader liquidity picture remains mixed to slightly better than peers, with a 6M score of 72.6 compared with a peer median of 66.4. Even so, the displayed book does not fully visible support that relative standing today because immediate buy-side depth is notably thinner than the ask side."
    },
    "trader_composition": {
      "overall": "By trade count and value, flow looks mainly institution-like.",
      "retail_heavy": "Institution-like trades account for 40.1% of trade count and 60.9% of trade value, compared with retail-like at 25.5% of count and 6.8% of value. That gap shows the heavier share of value is coming from institution-like activity rather than retail-like flow.",
      "institutional_gap": "The institution-like lead is clearer in value than in count, and 16.7% of trade count is still ambiguous or unclear. That leaves the overall read institution-like, but not unequivocal.",
      "peer_comparison": "Peer trader comparison is available in this report."
    },
    "price_moving": {
      "overall": "Price-moving trades account for 15.8% of total trades, so most activity is not immediately shifting the price. That points to a market that is trading through flow rather than reacting to every print. The signal is mixed because 16.7% of trade count is ambiguous or unclear, even though the overall count and value split leans institution-like. That matters because the direction of price-setting flow is not fully clean. The cleaner read is on who is trading rather than on one-sided price pressure.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity does not appear to be the main issue in the tape. The clearer signals are a 56.6% drop in 1D average volume from the 1M average and buy-side depth at 0.43x of ask depth, which matter more for near-term trading conditions.",
      "level": "N/A",
      "correlation": "N/A",
      "trend": "N/A",
      "peaks": "N/A"
    },
    "intraday": {
      "overall": "Session split is open 0.1%, continuous 93.1%, and close 6.4%. Current trading concentration score is 0.178.",
      "hhi_interpretation": "A concentration score of 0.178 suggests activity is reasonably distributed through the session rather than packed into a few moments. That supports a steadier intraday liquidity profile.",
      "best_times": "The continuous session is the clearest source of liquidity because it carries 93.1% of trading activity. That matters more than the open or close for judging where flow is most consistently available.",
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
        "6993",
        "6808",
        "2698",
        "1044",
        "6601",
        "399",
        "2360",
        "2625",
        "2569"
      ],
      "scores": [
        72.57876312718786,
        78.33527810190587,
        82.06923376118242,
        88.1369117075068,
        70.67288992609879,
        61.61026837806302,
        62.15480357837417,
        52.742123687281214,
        54.57020614546869
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
        3421230.0,
        11336992.075,
        25247392.000000004,
        69220772.19,
        2058640.0,
        1425735.0,
        673850.0,
        467445.0,
        333000.0
      ],
      "total": 2571
    },
    "market_comparison": {
      "sector_name": "Non-durable Household Goods",
      "sector_count": 7,
      "market_count": 2571,
      "company": {
        "volatility": 0.32829450117894976,
        "adv": 3421230.0,
        "spread_pct": 0.005031658046512035,
        "turnover_ratio": 0.0012244011497588698,
        "amihud": 3.3363194992812034e-09,
        "trades": 429.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.7483395173581348,
          "median": 0.6010704658896161,
          "min": 0.0,
          "max": 33.691723975352446,
          "p5": 0.2240393935048951,
          "p95": 1.6180538366359474,
          "count": 2570
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 55800488.106529936,
          "median": 216062.5,
          "min": 0.0,
          "max": 11740043474.75,
          "p5": 0.0,
          "p95": 220612537.45999998,
          "count": 2571
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.042140920312480366,
          "median": 0.027532649823324016,
          "min": 0.0005759578485903171,
          "max": 0.586235634471959,
          "p5": 0.001410484441170142,
          "p95": 0.13379366933689363,
          "count": 2571
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.003514195778375408,
          "median": 0.0008560319628529737,
          "min": 0.0,
          "max": 0.18138989186589122,
          "p5": 0.0,
          "p95": 0.01405517153536917,
          "count": 2555
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 6.197297529291873e-07,
          "median": 4.780297525718026e-08,
          "min": 0.0,
          "max": 1.9778481012658228e-05,
          "p5": 5.212610210840887e-11,
          "p95": 3.234072087966345e-06,
          "count": 2571
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1017.8096071567484,
          "median": 19.5,
          "min": 0.0,
          "max": 85041.0,
          "p5": 0.0,
          "p95": 5569.75,
          "count": 2571
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6321375112121181,
          "median": 0.5307442978026974,
          "min": 0.17819934502514126,
          "max": 1.6590372882123054,
          "p5": 0.2232278918712838,
          "p95": 1.391805597838473,
          "count": 7
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 798071.7714285714,
          "median": 12720.0,
          "min": 0.0,
          "max": 3421230.0,
          "p5": 0.0,
          "p95": 3012452.999999999,
          "count": 7
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.05543609701058836,
          "median": 0.04503582836783116,
          "min": 0.005031658046512035,
          "max": 0.16627130209347146,
          "p5": 0.005558388371806463,
          "p95": 0.13865510992318245,
          "count": 7
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0007026243021120308,
          "median": 0.00011546323091125078,
          "min": 0.0,
          "max": 0.0025667040938329643,
          "p5": 0.0,
          "p95": 0.002164013210610735,
          "count": 7
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 7.214404142040811e-07,
          "median": 4.878632668439462e-07,
          "min": 3.1378491418219048e-09,
          "max": 2.2417503586800493e-06,
          "p5": 3.1973902490596945e-09,
          "p95": 1.9876436382444198e-06,
          "count": 7
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 86.28571428571429,
          "median": 4.0,
          "min": 0.0,
          "max": 429.0,
          "p5": 0.0,
          "p95": 348.4499999999998,
          "count": 7
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 13845478.283125,
          "median": 1742187.5,
          "min": 333000.0,
          "max": 69220772.19,
          "p5": 380055.75,
          "p95": 53830089.123499975,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 684.9375,
          "median": 153.75,
          "min": 18.0,
          "max": 2222.0,
          "p5": 22.9,
          "p95": 2046.2999999999997,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.7411906784597206,
          "median": 0.37907884078396864,
          "min": 0.17563981069293272,
          "max": 3.007894424472189,
          "p5": 0.1765356477092057,
          "p95": 2.352525716066183,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.012809181515004306,
          "median": 0.007463219476523137,
          "min": 0.001126899104597489,
          "max": 0.028787842873390673,
          "p5": 0.001952960710799641,
          "p95": 0.02751385466333417,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 3.869061054519129,
          "median": 2.038890836839645,
          "min": 1.0679054432982684,
          "max": 13.936703843420261,
          "p5": 1.1921169040860513,
          "p95": 11.094333902632085,
          "count": 6
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.2300358757497572e-08,
          "median": 5.36555906153222e-09,
          "min": 8.879763141701902e-11,
          "max": 3.080329092749907e-08,
          "p5": 3.3694494554023877e-10,
          "p95": 3.076014704900035e-08,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.002724488641915325,
          "median": 0.0029990998519396996,
          "min": 0.00033,
          "max": 0.00615911836577867,
          "p5": 0.00045252443082758015,
          "p95": 0.0053402234337526,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": 0.04421768707482965,
        "market": 0.05399728657881919,
        "sector": 0.024523141077001487,
        "peers": -0.03956400074698063
      },
      {
        "horizon": "3M",
        "stock": 0.10035842293906905,
        "market": 0.06291748924226126,
        "sector": -0.027391894923735505,
        "peers": -0.10791965370464929
      },
      {
        "horizon": "6M",
        "stock": -0.016025641025640858,
        "market": 0.16364143082724758,
        "sector": -0.017855321974005856,
        "peers": -0.17998482399464255
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
      "share_market": 0.3381335600478291,
      "share_sector": 0.417641698711052,
      "share_idio": 0.24422474124111893,
      "beta_market": -1.0813201191756916,
      "beta_sector": -1.8207325576189306,
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
            "median": 0.3381335600478291,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "33.8%",
            "display_range": null,
            "display_text": "33.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 33.8,
            "plain_english": "Market explains about 33.8% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.417641698711052,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "41.8%",
            "display_range": null,
            "display_text": "41.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 41.8,
            "plain_english": "Sector explains about 41.8% of price moves in the current state."
          },
          "company_share": {
            "median": 0.24422474124111893,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "24.4%",
            "display_range": null,
            "display_text": "24.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 24.4,
            "plain_english": "Company-specific explains about 24.4% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": -1.0813201191756916,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-1.08",
            "display_range": null,
            "display_text": "-1.08",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Moderate",
            "plain_english": "Moderate market link: a 1% market move has lined up with about a 1.08% stock move in the opposite direction in this state.",
            "value_num": -1.08
          },
          "beta_stock_lag": {
            "median": -0.3844187581450516,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.38",
            "display_range": null,
            "display_text": "-0.38",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -0.38
          },
          "beta_sector": {
            "median": -1.8207325576189306,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-1.82",
            "display_range": null,
            "display_text": "-1.82",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "High",
            "plain_english": "High sector link: a 1% sector move has lined up with about a 1.82% stock move in the opposite direction in this state.",
            "value_num": -1.82
          },
          "beta_market_lag": {
            "median": 0.31165026100475446,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.31",
            "display_range": null,
            "display_text": "0.31",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 0.31
          },
          "beta_sector_lag": {
            "median": 0.09263496920489006,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.09",
            "display_range": null,
            "display_text": "0.09",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 0.09
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
            "period_label": "2025-04-28 to 2025-04-30",
            "n_obs": 3,
            "partial_month": true,
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.9720991653671297,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "97.2%",
              "display_range": null,
              "display_text": "97.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
              "kind": "share_pct",
              "value_pct": 97.2,
              "plain_english": "Sector explains about 97.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.007584008502148327,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "0.8%",
                "display_range": null,
                "display_text": "0.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
                "kind": "share_pct",
                "value_pct": 0.8,
                "plain_english": "Market explains about 0.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.9720991653671297,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "97.2%",
                "display_range": null,
                "display_text": "97.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
                "kind": "share_pct",
                "value_pct": 97.2,
                "plain_english": "Sector explains about 97.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.020316826130721895,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "2.0%",
                "display_range": null,
                "display_text": "2.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
                "kind": "share_pct",
                "value_pct": 2.0,
                "plain_english": "Company-specific explains about 2.0% of price moves in the current state."
              }
            },
            "summary": "Apr: Still clearly sector-driven, though based on only 3 trading days."
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
              "median": 0.617807218847311,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.8%",
              "display_range": null,
              "display_text": "61.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 61.8,
              "plain_english": "Company-specific explains about 61.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2694049903604558,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.9%",
                "display_range": null,
                "display_text": "26.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 26.9,
                "plain_english": "Market explains about 26.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.11278779079223315,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "11.3%",
                "display_range": null,
                "display_text": "11.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 11.3,
                "plain_english": "Sector explains about 11.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.617807218847311,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "61.8%",
                "display_range": null,
                "display_text": "61.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 61.8,
                "plain_english": "Company-specific explains about 61.8% of price moves in the current state."
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
              "median": 0.4498793679070501,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.0%",
              "display_range": null,
              "display_text": "45.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 45.0,
              "plain_english": "Company-specific explains about 45.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3822795831426232,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "38.2%",
                "display_range": null,
                "display_text": "38.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 38.2,
                "plain_english": "Market explains about 38.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.16784104895032673,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "16.8%",
                "display_range": null,
                "display_text": "16.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 16.8,
                "plain_english": "Sector explains about 16.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4498793679070501,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "45.0%",
                "display_range": null,
                "display_text": "45.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 45.0,
                "plain_english": "Company-specific explains about 45.0% of price moves in the current state."
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
              "median": 0.7102687093498499,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "71.0%",
              "display_range": null,
              "display_text": "71.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 71.0,
              "plain_english": "Company-specific explains about 71.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.1212030697952315,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "12.1%",
                "display_range": null,
                "display_text": "12.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 12.1,
                "plain_english": "Market explains about 12.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.16852822085491853,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "16.9%",
                "display_range": null,
                "display_text": "16.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 16.9,
                "plain_english": "Sector explains about 16.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.7102687093498499,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "71.0%",
                "display_range": null,
                "display_text": "71.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 71.0,
                "plain_english": "Company-specific explains about 71.0% of price moves in the current state."
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
              "median": 0.4262803893637267,
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
              "plain_english": "Company-specific explains about 42.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2478467837162003,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "24.8%",
                "display_range": null,
                "display_text": "24.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 24.8,
                "plain_english": "Market explains about 24.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3258728269200731,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "32.6%",
                "display_range": null,
                "display_text": "32.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 32.6,
                "plain_english": "Sector explains about 32.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4262803893637267,
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
                "plain_english": "Company-specific explains about 42.6% of price moves in the current state."
              }
            },
            "summary": "Aug: More mixed, though company-driven still has the largest share."
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
              "median": 0.6294301664187244,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "62.9%",
              "display_range": null,
              "display_text": "62.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 62.9,
              "plain_english": "Company-specific explains about 62.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.33851116203985304,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "33.9%",
                "display_range": null,
                "display_text": "33.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 33.9,
                "plain_english": "Market explains about 33.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.03205867154142258,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "3.2%",
                "display_range": null,
                "display_text": "3.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 3.2,
                "plain_english": "Sector explains about 3.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6294301664187244,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "62.9%",
                "display_range": null,
                "display_text": "62.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 62.9,
                "plain_english": "Company-specific explains about 62.9% of price moves in the current state."
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
              "median": 0.5695667592439093,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "57.0%",
              "display_range": null,
              "display_text": "57.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 57.0,
              "plain_english": "Company-specific explains about 57.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3013328249613168,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "30.1%",
                "display_range": null,
                "display_text": "30.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 30.1,
                "plain_english": "Market explains about 30.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1291004157947739,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "12.9%",
                "display_range": null,
                "display_text": "12.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 12.9,
                "plain_english": "Sector explains about 12.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5695667592439093,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "57.0%",
                "display_range": null,
                "display_text": "57.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 57.0,
                "plain_english": "Company-specific explains about 57.0% of price moves in the current state."
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
              "median": 0.47338234030734605,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.3%",
              "display_range": null,
              "display_text": "47.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 47.3,
              "plain_english": "Market explains about 47.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.47338234030734605,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "47.3%",
                "display_range": null,
                "display_text": "47.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 47.3,
                "plain_english": "Market explains about 47.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2374275233995521,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "23.7%",
                "display_range": null,
                "display_text": "23.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 23.7,
                "plain_english": "Sector explains about 23.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.2891901362931018,
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
                "plain_english": "Company-specific explains about 28.9% of price moves in the current state."
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
              "median": 0.7122565223276884,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "71.2%",
              "display_range": null,
              "display_text": "71.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 71.2,
              "plain_english": "Company-specific explains about 71.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.15551666268059916,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "15.6%",
                "display_range": null,
                "display_text": "15.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 15.6,
                "plain_english": "Market explains about 15.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1322268149917124,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "13.2%",
                "display_range": null,
                "display_text": "13.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 13.2,
                "plain_english": "Sector explains about 13.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.7122565223276884,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "71.2%",
                "display_range": null,
                "display_text": "71.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 71.2,
                "plain_english": "Company-specific explains about 71.2% of price moves in the current state."
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
              "median": 0.6271088850703407,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "62.7%",
              "display_range": null,
              "display_text": "62.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 62.7,
              "plain_english": "Company-specific explains about 62.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.1932992268560023,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "19.3%",
                "display_range": null,
                "display_text": "19.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 19.3,
                "plain_english": "Market explains about 19.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.17959188807365697,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "18.0%",
                "display_range": null,
                "display_text": "18.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 18.0,
                "plain_english": "Sector explains about 18.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6271088850703407,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "62.7%",
                "display_range": null,
                "display_text": "62.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 62.7,
                "plain_english": "Company-specific explains about 62.7% of price moves in the current state."
              }
            },
            "summary": "Jan: Still clearly company-driven."
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
              "median": 0.6560181408342851,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "65.6%",
              "display_range": null,
              "display_text": "65.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 65.6,
              "plain_english": "Company-specific explains about 65.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.31705180074268197,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "31.7%",
                "display_range": null,
                "display_text": "31.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 31.7,
                "plain_english": "Market explains about 31.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.02693005842303299,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "2.7%",
                "display_range": null,
                "display_text": "2.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 2.7,
                "plain_english": "Sector explains about 2.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6560181408342851,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "65.6%",
                "display_range": null,
                "display_text": "65.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 65.6,
                "plain_english": "Company-specific explains about 65.6% of price moves in the current state."
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
              "median": 0.46916134278359917,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.9%",
              "display_range": null,
              "display_text": "46.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 46.9,
              "plain_english": "Market explains about 46.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.46916134278359917,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "46.9%",
                "display_range": null,
                "display_text": "46.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 46.9,
                "plain_english": "Market explains about 46.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2335582786674553,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "23.4%",
                "display_range": null,
                "display_text": "23.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 23.4,
                "plain_english": "Sector explains about 23.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.29728037854894557,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "29.7%",
                "display_range": null,
                "display_text": "29.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 29.7,
                "plain_english": "Company-specific explains about 29.7% of price moves in the current state."
              }
            },
            "summary": "Mar: Mostly market-driven."
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
              "median": 0.504947549621259,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.5%",
              "display_range": null,
              "display_text": "50.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 50.5,
              "plain_english": "Company-specific explains about 50.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2733662276624835,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.3%",
                "display_range": null,
                "display_text": "27.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 27.3,
                "plain_english": "Market explains about 27.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2216862227162575,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "22.2%",
                "display_range": null,
                "display_text": "22.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 22.2,
                "plain_english": "Sector explains about 22.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.504947549621259,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "50.5%",
                "display_range": null,
                "display_text": "50.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 50.5,
                "plain_english": "Company-specific explains about 50.5% of price moves in the current state."
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
              "median": 0.5701077485645919,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "57.0%",
              "display_range": null,
              "display_text": "57.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
              "kind": "share_pct",
              "value_pct": 57.0,
              "plain_english": "Company-specific explains about 57.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.23086050170689992,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "23.1%",
                "display_range": null,
                "display_text": "23.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
                "kind": "share_pct",
                "value_pct": 23.1,
                "plain_english": "Market explains about 23.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.19903174972850812,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "19.9%",
                "display_range": null,
                "display_text": "19.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
                "kind": "share_pct",
                "value_pct": 19.9,
                "plain_english": "Sector explains about 19.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5701077485645919,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "57.0%",
                "display_range": null,
                "display_text": "57.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
                "kind": "share_pct",
                "value_pct": 57.0,
                "plain_english": "Company-specific explains about 57.0% of price moves in the current state."
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
            "expected_duration_days": 8.928571428571429,
            "current_probability": 1.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.014616328936427121,
              "low": 0.014616328936427121,
              "high": 0.014616328936427121
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": null
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 9.538461538461538,
            "current_probability": 0.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.024774682286562814,
              "low": 0.024774682286562814,
              "high": 0.024774682286562814
            },
            "volatility_label": "High Volatility",
            "current_probability_display": 0.0
          }
        ],
        "transitions": {
          "mean": [
            [
              0.8951612903225806,
              0.10483870967741936
            ],
            [
              0.10483870967741936,
              0.8951612903225806
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              111.0,
              13.0
            ],
            [
              13.0,
              111.0
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
          "market_link_display": "-1.08",
          "sector_link_display": "-1.82",
          "market_link_explainer": "Moderate market link. A 1% market move has lined up with about a 1.08% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "High sector link. A 1% sector move has lined up with about a 1.82% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "-0.38",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "Low Volatility",
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "driver_share_pct": 41.8,
          "driver_share_display": "41.8%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 251 trading days relative to the 252-day target.",
          "history_days": 251,
          "history_limited": true,
          "volatility_label": "Low Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.8951612903225806,
          "effective_days": 125.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 8.9 days.",
          "expected_duration_days": 8.9
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
          "period_label": "2025-04-28 to 2025-04-30",
          "n_obs": 3,
          "partial_month": true,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "Apr: Still clearly sector-driven, though based on only 3 trading days.",
          "share_market": 0.007584008502148327,
          "share_sector": 0.9720991653671297,
          "share_company": 0.020316826130721895,
          "share_market_display": "0.8%",
          "share_sector_display": "97.2%",
          "share_company_display": "2.0%",
          "dominant_share_display": "97.2%"
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
          "share_market": 0.2694049903604558,
          "share_sector": 0.11278779079223315,
          "share_company": 0.617807218847311,
          "share_market_display": "26.9%",
          "share_sector_display": "11.3%",
          "share_company_display": "61.8%",
          "dominant_share_display": "61.8%"
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
          "share_market": 0.3822795831426232,
          "share_sector": 0.16784104895032673,
          "share_company": 0.4498793679070501,
          "share_market_display": "38.2%",
          "share_sector_display": "16.8%",
          "share_company_display": "45.0%",
          "dominant_share_display": "45.0%"
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
          "summary": "Jul: Still clearly company-driven.",
          "share_market": 0.1212030697952315,
          "share_sector": 0.16852822085491853,
          "share_company": 0.7102687093498499,
          "share_market_display": "12.1%",
          "share_sector_display": "16.9%",
          "share_company_display": "71.0%",
          "dominant_share_display": "71.0%"
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
          "summary": "Aug: More mixed, though company-driven still has the largest share.",
          "share_market": 0.2478467837162003,
          "share_sector": 0.3258728269200731,
          "share_company": 0.4262803893637267,
          "share_market_display": "24.8%",
          "share_sector_display": "32.6%",
          "share_company_display": "42.6%",
          "dominant_share_display": "42.6%"
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
          "share_market": 0.33851116203985304,
          "share_sector": 0.03205867154142258,
          "share_company": 0.6294301664187244,
          "share_market_display": "33.9%",
          "share_sector_display": "3.2%",
          "share_company_display": "62.9%",
          "dominant_share_display": "62.9%"
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
          "share_market": 0.3013328249613168,
          "share_sector": 0.1291004157947739,
          "share_company": 0.5695667592439093,
          "share_market_display": "30.1%",
          "share_sector_display": "12.9%",
          "share_company_display": "57.0%",
          "dominant_share_display": "57.0%"
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
          "share_market": 0.47338234030734605,
          "share_sector": 0.2374275233995521,
          "share_company": 0.2891901362931018,
          "share_market_display": "47.3%",
          "share_sector_display": "23.7%",
          "share_company_display": "28.9%",
          "dominant_share_display": "47.3%"
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
          "share_market": 0.15551666268059916,
          "share_sector": 0.1322268149917124,
          "share_company": 0.7122565223276884,
          "share_market_display": "15.6%",
          "share_sector_display": "13.2%",
          "share_company_display": "71.2%",
          "dominant_share_display": "71.2%"
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
          "share_market": 0.1932992268560023,
          "share_sector": 0.17959188807365697,
          "share_company": 0.6271088850703407,
          "share_market_display": "19.3%",
          "share_sector_display": "18.0%",
          "share_company_display": "62.7%",
          "dominant_share_display": "62.7%"
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
          "share_market": 0.31705180074268197,
          "share_sector": 0.02693005842303299,
          "share_company": 0.6560181408342851,
          "share_market_display": "31.7%",
          "share_sector_display": "2.7%",
          "share_company_display": "65.6%",
          "dominant_share_display": "65.6%"
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
          "share_market": 0.46916134278359917,
          "share_sector": 0.2335582786674553,
          "share_company": 0.29728037854894557,
          "share_market_display": "46.9%",
          "share_sector_display": "23.4%",
          "share_company_display": "29.7%",
          "dominant_share_display": "46.9%"
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
          "share_market": 0.2733662276624835,
          "share_sector": 0.2216862227162575,
          "share_company": 0.504947549621259,
          "share_market_display": "27.3%",
          "share_sector_display": "22.2%",
          "share_company_display": "50.5%",
          "dominant_share_display": "50.5%"
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
          "summary": "May: Mostly company-driven.",
          "share_market": 0.23086050170689992,
          "share_sector": 0.19903174972850812,
          "share_company": 0.5701077485645919,
          "share_market_display": "23.1%",
          "share_sector_display": "19.9%",
          "share_company_display": "57.0%",
          "dominant_share_display": "57.0%"
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
            "expected_duration_days": 8.928571428571429,
            "current_probability": 1.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.014616328936427121,
              "low": 0.014616328936427121,
              "high": 0.014616328936427121
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 9.538461538461538,
            "current_probability": 0.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.024774682286562814,
              "low": 0.024774682286562814,
              "high": 0.024774682286562814
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.8951612903225806,
            0.10483870967741936
          ],
          [
            0.10483870967741936,
            0.8951612903225806
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 3.07,
          "quantity": 40500.0,
          "value": 124335.0
        },
        {
          "level": 2,
          "price": 3.06,
          "quantity": 56000.0,
          "value": 171360.0
        },
        {
          "level": 3,
          "price": 3.05,
          "quantity": 81000.0,
          "value": 247050.0
        },
        {
          "level": 4,
          "price": 3.04,
          "quantity": 38000.0,
          "value": 115520.0
        },
        {
          "level": 5,
          "price": 3.03,
          "quantity": 14000.0,
          "value": 42420.0
        },
        {
          "level": 6,
          "price": 3.02,
          "quantity": 72500.0,
          "value": 218950.0
        },
        {
          "level": 7,
          "price": 3.01,
          "quantity": 12500.0,
          "value": 37625.0
        },
        {
          "level": 8,
          "price": 3.0,
          "quantity": 131000.0,
          "value": 393000.0
        },
        {
          "level": 9,
          "price": 2.98,
          "quantity": 20000.0,
          "value": 59600.0
        },
        {
          "level": 10,
          "price": 2.92,
          "quantity": 7000.0,
          "value": 20440.0
        },
        {
          "level": 11,
          "price": 2.86,
          "quantity": 10000.0,
          "value": 28600.0
        },
        {
          "level": 12,
          "price": 2.85,
          "quantity": 4000.0,
          "value": 11400.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 3.08,
          "quantity": 131000.0,
          "value": 403480.0
        },
        {
          "level": 2,
          "price": 3.09,
          "quantity": 51000.0,
          "value": 157590.0
        },
        {
          "level": 3,
          "price": 3.1,
          "quantity": 29000.0,
          "value": 89900.0
        },
        {
          "level": 4,
          "price": 3.11,
          "quantity": 44000.0,
          "value": 136840.0
        },
        {
          "level": 5,
          "price": 3.12,
          "quantity": 13500.0,
          "value": 42120.0
        },
        {
          "level": 6,
          "price": 3.13,
          "quantity": 31500.0,
          "value": 98595.0
        },
        {
          "level": 7,
          "price": 3.14,
          "quantity": 16500.0,
          "value": 51810.0
        },
        {
          "level": 8,
          "price": 3.15,
          "quantity": 15500.0,
          "value": 48825.0
        },
        {
          "level": 9,
          "price": 3.16,
          "quantity": 4500.0,
          "value": 14220.0
        },
        {
          "level": 10,
          "price": 3.17,
          "quantity": 5500.0,
          "value": 17435.0
        },
        {
          "level": 11,
          "price": 3.18,
          "quantity": 35000.0,
          "value": 111300.0
        },
        {
          "level": 12,
          "price": 3.19,
          "quantity": 23500.0,
          "value": 74965.0
        },
        {
          "level": 13,
          "price": 3.2,
          "quantity": 212500.0,
          "value": 680000.0
        },
        {
          "level": 14,
          "price": 3.21,
          "quantity": 200000.0,
          "value": 642000.0
        },
        {
          "level": 15,
          "price": 3.22,
          "quantity": 4000.0,
          "value": 12880.0
        },
        {
          "level": 16,
          "price": 3.23,
          "quantity": 2000.0,
          "value": 6460.0
        },
        {
          "level": 17,
          "price": 3.25,
          "quantity": 46000.0,
          "value": 149500.0
        },
        {
          "level": 18,
          "price": 3.27,
          "quantity": 1000.0,
          "value": 3270.0
        },
        {
          "level": 19,
          "price": 3.28,
          "quantity": 60000.0,
          "value": 196800.0
        },
        {
          "level": 20,
          "price": 3.29,
          "quantity": 6000.0,
          "value": 19740.0
        },
        {
          "level": 21,
          "price": 3.3,
          "quantity": 42500.0,
          "value": 140250.0
        },
        {
          "level": 22,
          "price": 3.31,
          "quantity": 3000.0,
          "value": 9930.0
        },
        {
          "level": 23,
          "price": 3.32,
          "quantity": 1000.0,
          "value": 3320.0
        },
        {
          "level": 24,
          "price": 3.33,
          "quantity": 1000.0,
          "value": 3330.0
        },
        {
          "level": 25,
          "price": 3.37,
          "quantity": 10000.0,
          "value": 33700.0
        },
        {
          "level": 26,
          "price": 3.38,
          "quantity": 50000.0,
          "value": 169000.0
        },
        {
          "level": 27,
          "price": 3.39,
          "quantity": 1500.0,
          "value": 5085.0
        },
        {
          "level": 28,
          "price": 3.4,
          "quantity": 9500.0,
          "value": 32300.0
        },
        {
          "level": 29,
          "price": 3.48,
          "quantity": 4000.0,
          "value": 13920.0
        },
        {
          "level": 30,
          "price": 3.5,
          "quantity": 11000.0,
          "value": 38500.0
        },
        {
          "level": 31,
          "price": 3.51,
          "quantity": 1000.0,
          "value": 3510.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-05-13 07:59:58.373000000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XHKG",
        "mid_price": 3.075,
        "spread_pct": 0.0032520325203252783,
        "spread_ticks": 1.0,
        "tick_size": 0.01,
        "displayed_levels_per_side": 100,
        "bid_depth_notional_displayed": 1470300.0,
        "ask_depth_notional_displayed": 3410575.0,
        "bid_depth_notional_top10": 1470300.0,
        "ask_depth_notional_top10": 3410575.0,
        "bid_ask_depth_ratio": 0.4311
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 366,
        "history_limited": false,
        "trade_days_used": 242,
        "n_trades_used": 161273,
        "first_trade_date": "2025-05-13",
        "last_trade_date": "2026-05-13",
        "window_label": "May 13, 2025 to May 13, 2026",
        "window_short_label": "May 13, 2025 to May 13, 2026",
        "trade_days_label": "242 trading days",
        "trade_count_label": "161,273 trades",
        "window_detail_label": "242 trading days • 161,273 trades",
        "history_note": "Trade-size percentiles use May 13, 2025 to May 13, 2026 history (242 trading days • 161,273 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 30450.0,
            "impact_pct": -0.0016259999999999998,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 2.07,
            "pct_of_adv": 0.73
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 49500.0,
            "impact_pct": -0.0016259999999999998,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 3.37,
            "pct_of_adv": 1.18
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 1174833.22,
            "impact_pct": -0.012827999999999999,
            "filled_pct": 100.0,
            "levels_consumed": 8,
            "pct_of_bid_depth": 79.9,
            "pct_of_adv": 28.01
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
            "order_id": "94115587",
            "timestamp": "2026-05-13 01:31:07.589000000",
            "local_timestamp": "2026-05-13 09:31:07",
            "posted_price": 3.21,
            "size_shares": 100000.0,
            "notional": 321000.0,
            "impact_pct": -0.003879,
            "filled_pct": 100.0,
            "levels_consumed": 3,
            "pct_of_bid_depth": 21.83,
            "price_vs_mid_pct": 4.39,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "3627267",
            "timestamp": "2026-05-13 01:20:34.942000000",
            "local_timestamp": "2026-05-13 09:20:34",
            "posted_price": 3.21,
            "size_shares": 100000.0,
            "notional": 321000.0,
            "impact_pct": -0.003879,
            "filled_pct": 100.0,
            "levels_consumed": 3,
            "pct_of_bid_depth": 21.83,
            "price_vs_mid_pct": 4.39,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "2073602819",
            "timestamp": "2026-05-13 02:48:23.792000000",
            "local_timestamp": "2026-05-13 10:48:23",
            "posted_price": 3.17,
            "size_shares": 75000.0,
            "notional": 237750.0,
            "impact_pct": -0.00318,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 16.17,
            "price_vs_mid_pct": 3.089,
            "executed_event_count": 0,
            "event_count": 1
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-05-13",
        "bucket_minutes": 30,
        "displayed_levels_per_side": 100,
        "tick_size": 0.01,
        "timezone": "HKT (UTC+8)",
        "session_label": "HKEX continuous trading session",
        "bucket_label_basis": "bucket start time",
        "display_window_label": "HKEX continuous trading session",
        "bucket_note": "Buckets are shown in local market time and labeled by bucket start.",
        "reason": null,
        "rows": [
          {
            "bucket": "09:30",
            "spread_pct": 0.0032626427406198324,
            "spread_ticks": 0.9999999999999787,
            "bid_depth_notional": 874115.0,
            "ask_depth_notional": 2881975.0,
            "mid_price": 3.065
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.0032626427406198324,
            "spread_ticks": 0.9999999999999787,
            "bid_depth_notional": 1491735.0,
            "ask_depth_notional": 2917530.0,
            "mid_price": 3.065
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.0064516129032258125,
            "spread_ticks": 2.0000000000000018,
            "bid_depth_notional": 1816230.0,
            "ask_depth_notional": 3116050.0,
            "mid_price": 3.0999999999999996
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.0032206119162640216,
            "spread_ticks": 0.9999999999999787,
            "bid_depth_notional": 1835500.0,
            "ask_depth_notional": 3078665.0,
            "mid_price": 3.105
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.0032206119162640216,
            "spread_ticks": 0.9999999999999787,
            "bid_depth_notional": 1776995.0,
            "ask_depth_notional": 3162035.0,
            "mid_price": 3.105
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.006493506493506499,
            "spread_ticks": 2.0000000000000018,
            "bid_depth_notional": 1793865.0,
            "ask_depth_notional": 3066780.0,
            "mid_price": 3.08
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.006493506493506499,
            "spread_ticks": 2.0000000000000018,
            "bid_depth_notional": 1855185.0,
            "ask_depth_notional": 3237660.0,
            "mid_price": 3.08
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.0032414910858994447,
            "spread_ticks": 0.9999999999999787,
            "bid_depth_notional": 1881545.0,
            "ask_depth_notional": 3292655.0,
            "mid_price": 3.085
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.0032414910858994447,
            "spread_ticks": 0.9999999999999787,
            "bid_depth_notional": 1940035.0,
            "ask_depth_notional": 3507515.0,
            "mid_price": 3.085
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.0032414910858994447,
            "spread_ticks": 0.9999999999999787,
            "bid_depth_notional": 1970000.0,
            "ask_depth_notional": 3575415.0,
            "mid_price": 3.085
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.0032520325203252783,
            "spread_ticks": 1.000000000000023,
            "bid_depth_notional": 1470300.0,
            "ask_depth_notional": 3410575.0,
            "mid_price": 3.075
          }
        ],
        "summary": {
          "median_spread_pct": 0.0032520325203252783,
          "median_spread_ticks": 0.9999999999999787,
          "median_bid_depth_notional": 1816230.0,
          "median_ask_depth_notional": 3162035.0,
          "tightest_bucket": "11:00",
          "widest_bucket": "13:00",
          "deepest_bid_bucket": "15:00",
          "thinnest_bid_bucket": "09:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 1.2,
      "peers": [
        {
          "ticker": "1044",
          "pct": 1.6
        },
        {
          "ticker": "2698",
          "pct": 3.9
        },
        {
          "ticker": "6808",
          "pct": 16.6
        },
        {
          "ticker": "6601",
          "pct": 51.9
        },
        {
          "ticker": "2360",
          "pct": 68.2
        },
        {
          "ticker": "399",
          "pct": 214.1
        },
        {
          "ticker": "2625",
          "pct": 456.3
        },
        {
          "ticker": "2569",
          "pct": 507.7
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 292,
          "n_runs": 95,
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
            "retail_pct": 0.25,
            "mixed_pct": 0.20205479452054795,
            "instit_pct": 0.3698630136986301,
            "ambiguous_pct": 0.1780821917808219,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1780821917808219,
            "retail_qty_pct": 0.10097087378640776,
            "mixed_qty_pct": 0.141747572815534,
            "instit_qty_pct": 0.541747572815534,
            "ambiguous_qty_pct": 0.21553398058252426,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.21553398058252426,
            "retail_notional_pct": 0.10117776901852582,
            "mixed_notional_pct": 0.14205124162396532,
            "instit_notional_pct": 0.5414300354749705,
            "ambiguous_notional_pct": 0.21534095388253843,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.21534095388253843
          },
          "run_composition": {
            "retail_pct": 0.5368421052631579,
            "mixed_pct": 0.28421052631578947,
            "instit_pct": 0.042105263157894736,
            "ambiguous_pct": 0.1368421052631579,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1368421052631579,
            "retail_notional_pct": 0.11756279060671103,
            "mixed_notional_pct": 0.22025238474739522,
            "instit_notional_pct": 0.4171780040972185,
            "unclear_notional_pct": 0.24500682054867526
          },
          "counts": {
            "trades": {
              "retail": 73,
              "mixed": 59,
              "institutional": 108,
              "ambiguous": 52,
              "unobservable": 0,
              "unclear": 52
            },
            "runs": {
              "retail": 51,
              "mixed": 27,
              "institutional": 4,
              "ambiguous": 13,
              "unobservable": 0,
              "unclear": 13
            }
          },
          "confidence": {
            "high": 0.5789473684210527,
            "medium": 0.28421052631578947,
            "low": 0.1368421052631579,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 55,
            "medium": 27,
            "low": 13,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.3082191780821918,
            "medium": 0.20205479452054795,
            "low": 0.4897260273972603,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 90,
            "medium": 59,
            "low": 143,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8563157894736836,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.1368421052631579,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5368421052631579,
          "dominance_gap": 0.25263157894736843,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 139,
              "UNOBSERVABLE": 107,
              "WALK_BOOK": 46
            },
            "d2_information": {
              "UNOBSERVABLE": 292
            },
            "d3_urgency": {
              "UNOBSERVABLE": 95
            },
            "participant_confidence": {
              "HIGH": 55,
              "MEDIUM": 27,
              "LOW": 13
            }
          },
          "trade_size": {
            "avg": 5430.222602739726,
            "median": 3080.0
          },
          "run_size": {
            "avg": 10764.684210526315,
            "median": 3100.0,
            "avg_length": 1.0736842105263158
          },
          "recent_trades": [
            {
              "trade_id": "301",
              "timestamp": "2026-05-13T07:59:55.004661",
              "price": 3.08,
              "size": 500.0,
              "notional": 1540.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38526,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "300",
              "timestamp": "2026-05-13T07:59:35.931079",
              "price": 3.07,
              "size": 500.0,
              "notional": 1535.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38525,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "299",
              "timestamp": "2026-05-13T07:59:13.969124",
              "price": 3.08,
              "size": 1000.0,
              "notional": 3080.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38524,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "298",
              "timestamp": "2026-05-13T07:59:13.969124",
              "price": 3.08,
              "size": 500.0,
              "notional": 1540.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38524,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "297",
              "timestamp": "2026-05-13T07:59:00.197287",
              "price": 3.08,
              "size": 500.0,
              "notional": 1540.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38523,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "296",
              "timestamp": "2026-05-13T07:58:49.720529",
              "price": 3.08,
              "size": 500.0,
              "notional": 1540.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38522,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "295",
              "timestamp": "2026-05-13T07:58:49.720529",
              "price": 3.08,
              "size": 500.0,
              "notional": 1540.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38522,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "294",
              "timestamp": "2026-05-13T07:58:37.610425",
              "price": 3.08,
              "size": 1000.0,
              "notional": 3080.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38521,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "293",
              "timestamp": "2026-05-13T07:58:33.582643",
              "price": 3.07,
              "size": 1500.0,
              "notional": 4605.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38520,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "292",
              "timestamp": "2026-05-13T07:58:31.599532",
              "price": 3.08,
              "size": 1000.0,
              "notional": 3080.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38519,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "291",
              "timestamp": "2026-05-13T07:57:25.649742",
              "price": 3.08,
              "size": 1000.0,
              "notional": 3080.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38518,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "290",
              "timestamp": "2026-05-13T07:57:25.283016",
              "price": 3.07,
              "size": 500.0,
              "notional": 1535.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38517,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "289",
              "timestamp": "2026-05-13T07:56:17.841639",
              "price": 3.07,
              "size": 1000.0,
              "notional": 3070.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38516,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "288",
              "timestamp": "2026-05-13T07:56:01.838787",
              "price": 3.07,
              "size": 500.0,
              "notional": 1535.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38515,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "287",
              "timestamp": "2026-05-13T07:55:20.168205",
              "price": 3.08,
              "size": 3500.0,
              "notional": 10780.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 38514,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "286",
              "timestamp": "2026-05-13T07:54:07.243061",
              "price": 3.08,
              "size": 1000.0,
              "notional": 3080.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38513,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "285",
              "timestamp": "2026-05-13T07:54:02.167916",
              "price": 3.07,
              "size": 500.0,
              "notional": 1535.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "284",
              "timestamp": "2026-05-13T07:52:46.007185",
              "price": 3.07,
              "size": 3500.0,
              "notional": 10745.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 38512,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "283",
              "timestamp": "2026-05-13T07:52:30.946390",
              "price": 3.07,
              "size": 1500.0,
              "notional": 4605.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38511,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "282",
              "timestamp": "2026-05-13T07:52:17.153817",
              "price": 3.07,
              "size": 1000.0,
              "notional": 3070.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "281",
              "timestamp": "2026-05-13T07:51:18.279730",
              "price": 3.07,
              "size": 8000.0,
              "notional": 24560.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 38510,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "280",
              "timestamp": "2026-05-13T07:51:18.279730",
              "price": 3.07,
              "size": 1500.0,
              "notional": 4605.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 38510,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "279",
              "timestamp": "2026-05-13T07:51:14.997705",
              "price": 3.08,
              "size": 500.0,
              "notional": 1540.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "278",
              "timestamp": "2026-05-13T07:51:14.997705",
              "price": 3.08,
              "size": 1000.0,
              "notional": 3080.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "277",
              "timestamp": "2026-05-13T07:51:14.997705",
              "price": 3.08,
              "size": 1000.0,
              "notional": 3080.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "276",
              "timestamp": "2026-05-13T07:51:09.336598",
              "price": 3.08,
              "size": 500.0,
              "notional": 1540.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 38510,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "275",
              "timestamp": "2026-05-13T07:51:06.394565",
              "price": 3.08,
              "size": 500.0,
              "notional": 1540.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 38510,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "274",
              "timestamp": "2026-05-13T07:50:56.243822",
              "price": 3.08,
              "size": 500.0,
              "notional": 1540.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38509,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "273",
              "timestamp": "2026-05-13T07:50:32.165760",
              "price": 3.09,
              "size": 1500.0,
              "notional": 4635.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 38508,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "272",
              "timestamp": "2026-05-13T07:50:28.170998",
              "price": 3.08,
              "size": 500.0,
              "notional": 1540.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            }
          ],
          "peer_comparison": []
        },
        "30d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 9167,
          "n_runs": 2545,
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
            "retail_pct": 0.2115195811061416,
            "mixed_pct": 0.1985382349732737,
            "instit_pct": 0.43383876949929095,
            "ambiguous_pct": 0.15610341442129377,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.15610341442129377,
            "retail_qty_pct": 0.04242539038245721,
            "mixed_qty_pct": 0.13882722534313402,
            "instit_qty_pct": 0.666640273310031,
            "ambiguous_qty_pct": 0.15210711096437782,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.15210711096437782,
            "retail_notional_pct": 0.04246906817324259,
            "mixed_notional_pct": 0.13936092365866884,
            "instit_notional_pct": 0.665623790698248,
            "ambiguous_notional_pct": 0.15254621746984062,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.15254621746984062
          },
          "run_composition": {
            "retail_pct": 0.5477406679764244,
            "mixed_pct": 0.24479371316306484,
            "instit_pct": 0.09194499017681729,
            "ambiguous_pct": 0.11552062868369352,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.11552062868369352,
            "retail_notional_pct": 0.05326888608767041,
            "mixed_notional_pct": 0.22366641408618043,
            "instit_notional_pct": 0.567646285397115,
            "unclear_notional_pct": 0.15541841442903404
          },
          "counts": {
            "trades": {
              "retail": 1939,
              "mixed": 1820,
              "institutional": 3977,
              "ambiguous": 1431,
              "unobservable": 0,
              "unclear": 1431
            },
            "runs": {
              "retail": 1394,
              "mixed": 623,
              "institutional": 234,
              "ambiguous": 294,
              "unobservable": 0,
              "unclear": 294
            }
          },
          "confidence": {
            "high": 0.6396856581532416,
            "medium": 0.24479371316306484,
            "low": 0.11552062868369352,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 1628,
            "medium": 623,
            "low": 294,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.39402203556234316,
            "medium": 0.1985382349732737,
            "low": 0.4074397294643831,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 3612,
            "medium": 1820,
            "low": 3735,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8707465618860509,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.11552062868369352,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5477406679764244,
          "dominance_gap": 0.30294695481335954,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 4725,
              "UNOBSERVABLE": 2895,
              "WALK_BOOK": 1547
            },
            "d2_information": {
              "UNOBSERVABLE": 9167
            },
            "d3_urgency": {
              "UNOBSERVABLE": 2545
            },
            "participant_confidence": {
              "HIGH": 1628,
              "MEDIUM": 623,
              "LOW": 294
            }
          },
          "trade_size": {
            "avg": 13347.629637831351,
            "median": 3110.0
          },
          "run_size": {
            "avg": 29956.000789783888,
            "median": 4605.0,
            "avg_length": 1.4145383104125737
          },
          "recent_trades": [
            {
              "trade_id": "301",
              "timestamp": "2026-05-13T07:59:55.004661",
              "price": 3.08,
              "size": 500.0,
              "notional": 1540.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38526,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "300",
              "timestamp": "2026-05-13T07:59:35.931079",
              "price": 3.07,
              "size": 500.0,
              "notional": 1535.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38525,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "299",
              "timestamp": "2026-05-13T07:59:13.969124",
              "price": 3.08,
              "size": 1000.0,
              "notional": 3080.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38524,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "298",
              "timestamp": "2026-05-13T07:59:13.969124",
              "price": 3.08,
              "size": 500.0,
              "notional": 1540.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38524,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "297",
              "timestamp": "2026-05-13T07:59:00.197287",
              "price": 3.08,
              "size": 500.0,
              "notional": 1540.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38523,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "296",
              "timestamp": "2026-05-13T07:58:49.720529",
              "price": 3.08,
              "size": 500.0,
              "notional": 1540.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38522,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "295",
              "timestamp": "2026-05-13T07:58:49.720529",
              "price": 3.08,
              "size": 500.0,
              "notional": 1540.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38522,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "294",
              "timestamp": "2026-05-13T07:58:37.610425",
              "price": 3.08,
              "size": 1000.0,
              "notional": 3080.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38521,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "293",
              "timestamp": "2026-05-13T07:58:33.582643",
              "price": 3.07,
              "size": 1500.0,
              "notional": 4605.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38520,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "292",
              "timestamp": "2026-05-13T07:58:31.599532",
              "price": 3.08,
              "size": 1000.0,
              "notional": 3080.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38519,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "291",
              "timestamp": "2026-05-13T07:57:25.649742",
              "price": 3.08,
              "size": 1000.0,
              "notional": 3080.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38518,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "290",
              "timestamp": "2026-05-13T07:57:25.283016",
              "price": 3.07,
              "size": 500.0,
              "notional": 1535.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38517,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "289",
              "timestamp": "2026-05-13T07:56:17.841639",
              "price": 3.07,
              "size": 1000.0,
              "notional": 3070.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38516,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "288",
              "timestamp": "2026-05-13T07:56:01.838787",
              "price": 3.07,
              "size": 500.0,
              "notional": 1535.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38515,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "287",
              "timestamp": "2026-05-13T07:55:20.168205",
              "price": 3.08,
              "size": 3500.0,
              "notional": 10780.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 38514,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "286",
              "timestamp": "2026-05-13T07:54:07.243061",
              "price": 3.08,
              "size": 1000.0,
              "notional": 3080.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38513,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "285",
              "timestamp": "2026-05-13T07:54:02.167916",
              "price": 3.07,
              "size": 500.0,
              "notional": 1535.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "284",
              "timestamp": "2026-05-13T07:52:46.007185",
              "price": 3.07,
              "size": 3500.0,
              "notional": 10745.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 38512,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "283",
              "timestamp": "2026-05-13T07:52:30.946390",
              "price": 3.07,
              "size": 1500.0,
              "notional": 4605.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38511,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "282",
              "timestamp": "2026-05-13T07:52:17.153817",
              "price": 3.07,
              "size": 1000.0,
              "notional": 3070.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "281",
              "timestamp": "2026-05-13T07:51:18.279730",
              "price": 3.07,
              "size": 8000.0,
              "notional": 24560.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 38510,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "280",
              "timestamp": "2026-05-13T07:51:18.279730",
              "price": 3.07,
              "size": 1500.0,
              "notional": 4605.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 38510,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "279",
              "timestamp": "2026-05-13T07:51:14.997705",
              "price": 3.08,
              "size": 500.0,
              "notional": 1540.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "278",
              "timestamp": "2026-05-13T07:51:14.997705",
              "price": 3.08,
              "size": 1000.0,
              "notional": 3080.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "277",
              "timestamp": "2026-05-13T07:51:14.997705",
              "price": 3.08,
              "size": 1000.0,
              "notional": 3080.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "276",
              "timestamp": "2026-05-13T07:51:09.336598",
              "price": 3.08,
              "size": 500.0,
              "notional": 1540.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 38510,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "275",
              "timestamp": "2026-05-13T07:51:06.394565",
              "price": 3.08,
              "size": 500.0,
              "notional": 1540.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 38510,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "274",
              "timestamp": "2026-05-13T07:50:56.243822",
              "price": 3.08,
              "size": 500.0,
              "notional": 1540.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38509,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "273",
              "timestamp": "2026-05-13T07:50:32.165760",
              "price": 3.09,
              "size": 1500.0,
              "notional": 4635.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 38508,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "272",
              "timestamp": "2026-05-13T07:50:28.170998",
              "price": 3.08,
              "size": 500.0,
              "notional": 1540.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            }
          ],
          "peer_comparison": []
        },
        "3m": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 25692,
          "n_runs": 7436,
          "n_trade_days": 63,
          "first_trade_date": "2026-02-05",
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
            "retail_pct": 0.2303829985987856,
            "mixed_pct": 0.1755410244434065,
            "instit_pct": 0.4255021018215787,
            "ambiguous_pct": 0.16857387513622918,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.16857387513622918,
            "retail_qty_pct": 0.05915543449328503,
            "mixed_qty_pct": 0.14235570209603965,
            "instit_qty_pct": 0.6348107064977488,
            "ambiguous_qty_pct": 0.16367815691292648,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.16367815691292648,
            "retail_notional_pct": 0.05840255082140616,
            "mixed_notional_pct": 0.14258680496427034,
            "instit_notional_pct": 0.6358123275235738,
            "ambiguous_notional_pct": 0.16319831669074972,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.16319831669074972
          },
          "run_composition": {
            "retail_pct": 0.5535233996772458,
            "mixed_pct": 0.23144163528778913,
            "instit_pct": 0.0993813878429263,
            "ambiguous_pct": 0.11565357719203873,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.11565357719203873,
            "retail_notional_pct": 0.06995705513576994,
            "mixed_notional_pct": 0.22427344185558323,
            "instit_notional_pct": 0.5570550994332365,
            "unclear_notional_pct": 0.14871440357541038
          },
          "counts": {
            "trades": {
              "retail": 5919,
              "mixed": 4510,
              "institutional": 10932,
              "ambiguous": 4331,
              "unobservable": 0,
              "unclear": 4331
            },
            "runs": {
              "retail": 4116,
              "mixed": 1721,
              "institutional": 739,
              "ambiguous": 860,
              "unobservable": 0,
              "unclear": 860
            }
          },
          "confidence": {
            "high": 0.6527703066164605,
            "medium": 0.2315761161915008,
            "low": 0.11565357719203873,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 4854,
            "medium": 1722,
            "low": 860,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.4095827494940059,
            "medium": 0.1755799470652343,
            "low": 0.41483730344075975,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 10523,
            "medium": 4511,
            "low": 10658,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8704007530930605,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.11565357719203873,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5535233996772458,
          "dominance_gap": 0.3220817643894567,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 13119,
              "UNOBSERVABLE": 8153,
              "WALK_BOOK": 4420
            },
            "d2_information": {
              "UNOBSERVABLE": 25692
            },
            "d3_urgency": {
              "UNOBSERVABLE": 7436
            },
            "participant_confidence": {
              "HIGH": 4854,
              "MEDIUM": 1722,
              "LOW": 860
            }
          },
          "trade_size": {
            "avg": 10193.197473143391,
            "median": 3030.0
          },
          "run_size": {
            "avg": 22390.843766810114,
            "median": 4635.0,
            "avg_length": 1.2774341043571813
          },
          "recent_trades": [
            {
              "trade_id": "301",
              "timestamp": "2026-05-13T07:59:55.004661",
              "price": 3.08,
              "size": 500.0,
              "notional": 1540.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38526,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "300",
              "timestamp": "2026-05-13T07:59:35.931079",
              "price": 3.07,
              "size": 500.0,
              "notional": 1535.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38525,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "299",
              "timestamp": "2026-05-13T07:59:13.969124",
              "price": 3.08,
              "size": 1000.0,
              "notional": 3080.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38524,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "298",
              "timestamp": "2026-05-13T07:59:13.969124",
              "price": 3.08,
              "size": 500.0,
              "notional": 1540.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38524,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "297",
              "timestamp": "2026-05-13T07:59:00.197287",
              "price": 3.08,
              "size": 500.0,
              "notional": 1540.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38523,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "296",
              "timestamp": "2026-05-13T07:58:49.720529",
              "price": 3.08,
              "size": 500.0,
              "notional": 1540.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38522,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "295",
              "timestamp": "2026-05-13T07:58:49.720529",
              "price": 3.08,
              "size": 500.0,
              "notional": 1540.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38522,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "294",
              "timestamp": "2026-05-13T07:58:37.610425",
              "price": 3.08,
              "size": 1000.0,
              "notional": 3080.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38521,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "293",
              "timestamp": "2026-05-13T07:58:33.582643",
              "price": 3.07,
              "size": 1500.0,
              "notional": 4605.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38520,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "292",
              "timestamp": "2026-05-13T07:58:31.599532",
              "price": 3.08,
              "size": 1000.0,
              "notional": 3080.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38519,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "291",
              "timestamp": "2026-05-13T07:57:25.649742",
              "price": 3.08,
              "size": 1000.0,
              "notional": 3080.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38518,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "290",
              "timestamp": "2026-05-13T07:57:25.283016",
              "price": 3.07,
              "size": 500.0,
              "notional": 1535.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38517,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "289",
              "timestamp": "2026-05-13T07:56:17.841639",
              "price": 3.07,
              "size": 1000.0,
              "notional": 3070.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38516,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "288",
              "timestamp": "2026-05-13T07:56:01.838787",
              "price": 3.07,
              "size": 500.0,
              "notional": 1535.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38515,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "287",
              "timestamp": "2026-05-13T07:55:20.168205",
              "price": 3.08,
              "size": 3500.0,
              "notional": 10780.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 38514,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "286",
              "timestamp": "2026-05-13T07:54:07.243061",
              "price": 3.08,
              "size": 1000.0,
              "notional": 3080.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38513,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "285",
              "timestamp": "2026-05-13T07:54:02.167916",
              "price": 3.07,
              "size": 500.0,
              "notional": 1535.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "284",
              "timestamp": "2026-05-13T07:52:46.007185",
              "price": 3.07,
              "size": 3500.0,
              "notional": 10745.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 38512,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "283",
              "timestamp": "2026-05-13T07:52:30.946390",
              "price": 3.07,
              "size": 1500.0,
              "notional": 4605.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38511,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "282",
              "timestamp": "2026-05-13T07:52:17.153817",
              "price": 3.07,
              "size": 1000.0,
              "notional": 3070.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "281",
              "timestamp": "2026-05-13T07:51:18.279730",
              "price": 3.07,
              "size": 8000.0,
              "notional": 24560.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 38510,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "280",
              "timestamp": "2026-05-13T07:51:18.279730",
              "price": 3.07,
              "size": 1500.0,
              "notional": 4605.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 38510,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "279",
              "timestamp": "2026-05-13T07:51:14.997705",
              "price": 3.08,
              "size": 500.0,
              "notional": 1540.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "278",
              "timestamp": "2026-05-13T07:51:14.997705",
              "price": 3.08,
              "size": 1000.0,
              "notional": 3080.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "277",
              "timestamp": "2026-05-13T07:51:14.997705",
              "price": 3.08,
              "size": 1000.0,
              "notional": 3080.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "276",
              "timestamp": "2026-05-13T07:51:09.336598",
              "price": 3.08,
              "size": 500.0,
              "notional": 1540.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 38510,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "275",
              "timestamp": "2026-05-13T07:51:06.394565",
              "price": 3.08,
              "size": 500.0,
              "notional": 1540.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 38510,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "274",
              "timestamp": "2026-05-13T07:50:56.243822",
              "price": 3.08,
              "size": 500.0,
              "notional": 1540.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38509,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "273",
              "timestamp": "2026-05-13T07:50:32.165760",
              "price": 3.09,
              "size": 1500.0,
              "notional": 4635.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 38508,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "272",
              "timestamp": "2026-05-13T07:50:28.170998",
              "price": 3.08,
              "size": 500.0,
              "notional": 1540.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            }
          ],
          "peer_comparison": []
        },
        "6m": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 54503,
          "n_runs": 17259,
          "n_trade_days": 126,
          "first_trade_date": "2025-10-27",
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
            "retail_pct": 0.2553987853879603,
            "mixed_pct": 0.17630222189604242,
            "instit_pct": 0.40109718731079025,
            "ambiguous_pct": 0.16720180540520704,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.16720180540520704,
            "retail_qty_pct": 0.0680995047877834,
            "mixed_qty_pct": 0.14474866765970945,
            "instit_qty_pct": 0.6084767776513699,
            "ambiguous_qty_pct": 0.17867504990113728,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.17867504990113728,
            "retail_notional_pct": 0.0676742235341507,
            "mixed_notional_pct": 0.1450243635862908,
            "instit_notional_pct": 0.6090059331768164,
            "ambiguous_notional_pct": 0.17829547970274207,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.17829547970274207
          },
          "run_composition": {
            "retail_pct": 0.5607509125673562,
            "mixed_pct": 0.2356451706356104,
            "instit_pct": 0.09351642621241092,
            "ambiguous_pct": 0.11008749058462251,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.11008749058462251,
            "retail_notional_pct": 0.07785358380801104,
            "mixed_notional_pct": 0.2230105553523188,
            "instit_notional_pct": 0.5388338431524193,
            "unclear_notional_pct": 0.16030201768725083
          },
          "counts": {
            "trades": {
              "retail": 13920,
              "mixed": 9609,
              "institutional": 21861,
              "ambiguous": 9113,
              "unobservable": 0,
              "unclear": 9113
            },
            "runs": {
              "retail": 9678,
              "mixed": 4067,
              "institutional": 1614,
              "ambiguous": 1900,
              "unobservable": 0,
              "unclear": 1900
            }
          },
          "confidence": {
            "high": 0.6542093979952489,
            "medium": 0.23570311142012862,
            "low": 0.11008749058462251,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 11291,
            "medium": 4068,
            "low": 1900,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.4185457681228556,
            "medium": 0.17632056950993524,
            "low": 0.40513366236720916,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 22812,
            "medium": 9610,
            "low": 22081,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8706819630337794,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.11008749058462251,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5607509125673562,
          "dominance_gap": 0.3251057419317458,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 29215,
              "UNOBSERVABLE": 16671,
              "WALK_BOOK": 8617
            },
            "d2_information": {
              "UNOBSERVABLE": 54503
            },
            "d3_urgency": {
              "UNOBSERVABLE": 17259
            },
            "participant_confidence": {
              "HIGH": 11291,
              "MEDIUM": 4068,
              "LOW": 1900
            }
          },
          "trade_size": {
            "avg": 9664.514399023907,
            "median": 2990.0
          },
          "run_size": {
            "avg": 19847.2511593951,
            "median": 4245.0,
            "avg_length": 1.2366881047569385
          },
          "recent_trades": [
            {
              "trade_id": "301",
              "timestamp": "2026-05-13T07:59:55.004661",
              "price": 3.08,
              "size": 500.0,
              "notional": 1540.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38526,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "300",
              "timestamp": "2026-05-13T07:59:35.931079",
              "price": 3.07,
              "size": 500.0,
              "notional": 1535.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38525,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "299",
              "timestamp": "2026-05-13T07:59:13.969124",
              "price": 3.08,
              "size": 1000.0,
              "notional": 3080.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38524,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "298",
              "timestamp": "2026-05-13T07:59:13.969124",
              "price": 3.08,
              "size": 500.0,
              "notional": 1540.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38524,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "297",
              "timestamp": "2026-05-13T07:59:00.197287",
              "price": 3.08,
              "size": 500.0,
              "notional": 1540.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38523,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "296",
              "timestamp": "2026-05-13T07:58:49.720529",
              "price": 3.08,
              "size": 500.0,
              "notional": 1540.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38522,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "295",
              "timestamp": "2026-05-13T07:58:49.720529",
              "price": 3.08,
              "size": 500.0,
              "notional": 1540.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38522,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "294",
              "timestamp": "2026-05-13T07:58:37.610425",
              "price": 3.08,
              "size": 1000.0,
              "notional": 3080.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38521,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "293",
              "timestamp": "2026-05-13T07:58:33.582643",
              "price": 3.07,
              "size": 1500.0,
              "notional": 4605.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38520,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "292",
              "timestamp": "2026-05-13T07:58:31.599532",
              "price": 3.08,
              "size": 1000.0,
              "notional": 3080.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38519,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "291",
              "timestamp": "2026-05-13T07:57:25.649742",
              "price": 3.08,
              "size": 1000.0,
              "notional": 3080.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38518,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "290",
              "timestamp": "2026-05-13T07:57:25.283016",
              "price": 3.07,
              "size": 500.0,
              "notional": 1535.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38517,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "289",
              "timestamp": "2026-05-13T07:56:17.841639",
              "price": 3.07,
              "size": 1000.0,
              "notional": 3070.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38516,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "288",
              "timestamp": "2026-05-13T07:56:01.838787",
              "price": 3.07,
              "size": 500.0,
              "notional": 1535.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38515,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "287",
              "timestamp": "2026-05-13T07:55:20.168205",
              "price": 3.08,
              "size": 3500.0,
              "notional": 10780.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 38514,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "286",
              "timestamp": "2026-05-13T07:54:07.243061",
              "price": 3.08,
              "size": 1000.0,
              "notional": 3080.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38513,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "285",
              "timestamp": "2026-05-13T07:54:02.167916",
              "price": 3.07,
              "size": 500.0,
              "notional": 1535.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "284",
              "timestamp": "2026-05-13T07:52:46.007185",
              "price": 3.07,
              "size": 3500.0,
              "notional": 10745.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 38512,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "283",
              "timestamp": "2026-05-13T07:52:30.946390",
              "price": 3.07,
              "size": 1500.0,
              "notional": 4605.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38511,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "282",
              "timestamp": "2026-05-13T07:52:17.153817",
              "price": 3.07,
              "size": 1000.0,
              "notional": 3070.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "281",
              "timestamp": "2026-05-13T07:51:18.279730",
              "price": 3.07,
              "size": 8000.0,
              "notional": 24560.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 38510,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "280",
              "timestamp": "2026-05-13T07:51:18.279730",
              "price": 3.07,
              "size": 1500.0,
              "notional": 4605.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 38510,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "279",
              "timestamp": "2026-05-13T07:51:14.997705",
              "price": 3.08,
              "size": 500.0,
              "notional": 1540.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "278",
              "timestamp": "2026-05-13T07:51:14.997705",
              "price": 3.08,
              "size": 1000.0,
              "notional": 3080.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "277",
              "timestamp": "2026-05-13T07:51:14.997705",
              "price": 3.08,
              "size": 1000.0,
              "notional": 3080.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "276",
              "timestamp": "2026-05-13T07:51:09.336598",
              "price": 3.08,
              "size": 500.0,
              "notional": 1540.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 38510,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "275",
              "timestamp": "2026-05-13T07:51:06.394565",
              "price": 3.08,
              "size": 500.0,
              "notional": 1540.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 38510,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "274",
              "timestamp": "2026-05-13T07:50:56.243822",
              "price": 3.08,
              "size": 500.0,
              "notional": 1540.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38509,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "273",
              "timestamp": "2026-05-13T07:50:32.165760",
              "price": 3.09,
              "size": 1500.0,
              "notional": 4635.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 38508,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "272",
              "timestamp": "2026-05-13T07:50:28.170998",
              "price": 3.08,
              "size": 500.0,
              "notional": 1540.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            }
          ],
          "peer_comparison": []
        }
      },
      "valid": true,
      "currency": "HKD",
      "n_trades": 54503,
      "n_runs": 17259,
      "n_trade_days": 126,
      "first_trade_date": "2025-10-27",
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
        "retail_pct": 0.2553987853879603,
        "mixed_pct": 0.17630222189604242,
        "instit_pct": 0.40109718731079025,
        "ambiguous_pct": 0.16720180540520704,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.16720180540520704,
        "retail_qty_pct": 0.0680995047877834,
        "mixed_qty_pct": 0.14474866765970945,
        "instit_qty_pct": 0.6084767776513699,
        "ambiguous_qty_pct": 0.17867504990113728,
        "unobservable_qty_pct": 0.0,
        "unclear_qty_pct": 0.17867504990113728,
        "retail_notional_pct": 0.0676742235341507,
        "mixed_notional_pct": 0.1450243635862908,
        "instit_notional_pct": 0.6090059331768164,
        "ambiguous_notional_pct": 0.17829547970274207,
        "unobservable_notional_pct": 0.0,
        "unclear_notional_pct": 0.17829547970274207
      },
      "run_composition": {
        "retail_pct": 0.5607509125673562,
        "mixed_pct": 0.2356451706356104,
        "instit_pct": 0.09351642621241092,
        "ambiguous_pct": 0.11008749058462251,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.11008749058462251
      },
      "trade_size": {
        "avg": 9664.514399023907,
        "median": 2990.0
      },
      "run_size": {
        "avg": 19847.2511593951,
        "median": 4245.0,
        "avg_length": 1.2366881047569385
      },
      "confidence": {
        "high": 0.6542093979952489,
        "medium": 0.23570311142012862,
        "low": 0.11008749058462251,
        "na": 0.0
      },
      "confidence_counts": {
        "high": 11291,
        "medium": 4068,
        "low": 1900,
        "na": 0
      },
      "trade_confidence": {
        "high": 0.4185457681228556,
        "medium": 0.17632056950993524,
        "low": 0.40513366236720916,
        "na": 0.0
      },
      "trade_confidence_counts": {
        "high": 22812,
        "medium": 9610,
        "low": 22081,
        "na": 0
      },
      "counts": {
        "trades": {
          "retail": 13920,
          "mixed": 9609,
          "institutional": 21861,
          "ambiguous": 9113,
          "unobservable": 0,
          "unclear": 9113
        },
        "runs": {
          "retail": 9678,
          "mixed": 4067,
          "institutional": 1614,
          "ambiguous": 1900,
          "unobservable": 0,
          "unclear": 1900
        }
      },
      "observability": {
        "avg_feature_coverage": 0.8706819630337794,
        "observable_run_pct": 1.0,
        "ambiguous_run_pct": 0.11008749058462251,
        "unobservable_run_pct": 0.0
      },
      "dominant_bucket": "RETAIL",
      "dominant_label": "Retail-led",
      "dominant_share": 0.5607509125673562,
      "dominance_gap": 0.3251057419317458,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2025-12",
            "n_trades": 7517,
            "n_runs": 3155,
            "retail_pct": 0.34149261673539977,
            "mixed_pct": 0.18983637089264335,
            "instit_pct": 0.30504190501529865,
            "ambiguous_pct": 0.16362910735665825,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.16362910735665825,
            "avg_trade_size": 6250.436458693628,
            "avg_run_notional": 10417.71580348653,
            "retail_qty_pct": 0.10230140765617826,
            "mixed_qty_pct": 0.14963642757111015,
            "instit_qty_pct": 0.5068562817246323,
            "ambiguous_qty_pct": 0.24120588304807933,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.24120588304807933,
            "retail_notional_pct": 0.10259511528088504,
            "mixed_notional_pct": 0.1491474400559759,
            "instit_notional_pct": 0.5072768539717627,
            "ambiguous_notional_pct": 0.24098059069137634,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.24098059069137634,
            "run_retail_pct": 0.5822503961965134,
            "run_mixed_pct": 0.24944532488114105,
            "run_instit_pct": 0.07321711568938194,
            "run_ambiguous_pct": 0.09508716323296355,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.09508716323296355,
            "avg_feature_coverage": 0.8700158478605388,
            "high_confidence_pct": 0.6554675118858954,
            "medium_confidence_pct": 0.24944532488114105,
            "low_confidence_pct": 0.09508716323296355,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-01",
            "n_trades": 9150,
            "n_runs": 3076,
            "retail_pct": 0.28382513661202186,
            "mixed_pct": 0.1653551912568306,
            "instit_pct": 0.3895081967213115,
            "ambiguous_pct": 0.16131147540983606,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.16131147540983606,
            "avg_trade_size": 9233.666267759561,
            "avg_run_notional": 17687.17462613784,
            "retail_qty_pct": 0.07819431823101006,
            "mixed_qty_pct": 0.12989947933220608,
            "instit_qty_pct": 0.6044967407443741,
            "ambiguous_qty_pct": 0.18740946169240982,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.18740946169240982,
            "retail_notional_pct": 0.07898920780288583,
            "mixed_notional_pct": 0.13048236379299355,
            "instit_notional_pct": 0.6024830103081203,
            "ambiguous_notional_pct": 0.18804541809600028,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.18804541809600028,
            "run_retail_pct": 0.5640442132639792,
            "run_mixed_pct": 0.22854356306892068,
            "run_instit_pct": 0.09622886866059818,
            "run_ambiguous_pct": 0.11118335500650195,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.11118335500650195,
            "avg_feature_coverage": 0.8717490247074121,
            "high_confidence_pct": 0.6602730819245773,
            "medium_confidence_pct": 0.22854356306892068,
            "low_confidence_pct": 0.11118335500650195,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-02",
            "n_trades": 6351,
            "n_runs": 1874,
            "retail_pct": 0.242796410014171,
            "mixed_pct": 0.16359628404975593,
            "instit_pct": 0.4262320894347347,
            "ambiguous_pct": 0.16737521650133838,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.16737521650133838,
            "avg_trade_size": 6820.388387655487,
            "avg_run_notional": 14567.463527214513,
            "retail_qty_pct": 0.09423466676706141,
            "mixed_qty_pct": 0.14048659086203089,
            "instit_qty_pct": 0.5709951001421048,
            "ambiguous_qty_pct": 0.19428364222880293,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.19428364222880293,
            "retail_notional_pct": 0.09444165154447744,
            "mixed_notional_pct": 0.140536400296446,
            "instit_notional_pct": 0.569961021808872,
            "ambiguous_notional_pct": 0.19506092635020458,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.19506092635020458,
            "run_retail_pct": 0.564034151547492,
            "run_mixed_pct": 0.22305229455709713,
            "run_instit_pct": 0.10032017075773746,
            "run_ambiguous_pct": 0.11259338313767342,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.11259338313767342,
            "avg_feature_coverage": 0.8729188900747062,
            "high_confidence_pct": 0.663820704375667,
            "medium_confidence_pct": 0.22358591248665954,
            "low_confidence_pct": 0.11259338313767342,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-03",
            "n_trades": 8132,
            "n_runs": 2444,
            "retail_pct": 0.24520413182488932,
            "mixed_pct": 0.1603541564190851,
            "instit_pct": 0.42142154451549435,
            "ambiguous_pct": 0.17302016724053124,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.17302016724053124,
            "avg_trade_size": 7967.321503935071,
            "avg_run_notional": 17119.287426350245,
            "retail_qty_pct": 0.07445508432012385,
            "mixed_qty_pct": 0.14025662229484714,
            "instit_qty_pct": 0.6076891461915832,
            "ambiguous_qty_pct": 0.17759914719344577,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.17759914719344577,
            "retail_notional_pct": 0.07426469014979992,
            "mixed_notional_pct": 0.13990336223457267,
            "instit_notional_pct": 0.6085300619421962,
            "ambiguous_notional_pct": 0.17730188567343125,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.17730188567343125,
            "run_retail_pct": 0.5511456628477905,
            "run_mixed_pct": 0.22995090016366612,
            "run_instit_pct": 0.10229132569558101,
            "run_ambiguous_pct": 0.11661211129296235,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.11661211129296235,
            "avg_feature_coverage": 0.8689648117839606,
            "high_confidence_pct": 0.6534369885433715,
            "medium_confidence_pct": 0.22995090016366612,
            "low_confidence_pct": 0.11661211129296235,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-04",
            "n_trades": 9525,
            "n_runs": 2558,
            "retail_pct": 0.20923884514435695,
            "mixed_pct": 0.1942257217847769,
            "instit_pct": 0.43391076115485566,
            "ambiguous_pct": 0.1626246719160105,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1626246719160105,
            "avg_trade_size": 13669.139682939633,
            "avg_run_notional": 32123.85814308053,
            "retail_qty_pct": 0.042129769098524644,
            "mixed_qty_pct": 0.14136277860395924,
            "instit_qty_pct": 0.6716361439214629,
            "ambiguous_qty_pct": 0.1448713083760532,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.1448713083760532,
            "retail_notional_pct": 0.04199324992388157,
            "mixed_notional_pct": 0.14152676219845262,
            "instit_notional_pct": 0.6712468865557033,
            "ambiguous_notional_pct": 0.14523310132196252,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.14523310132196252,
            "run_retail_pct": 0.54573885848319,
            "run_mixed_pct": 0.23651290070367476,
            "run_instit_pct": 0.09695074276778734,
            "run_ambiguous_pct": 0.12079749804534792,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.12079749804534792,
            "avg_feature_coverage": 0.8713448006254885,
            "high_confidence_pct": 0.6426896012509773,
            "medium_confidence_pct": 0.23651290070367476,
            "low_confidence_pct": 0.12079749804534792,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-05",
            "n_trades": 2562,
            "n_runs": 816,
            "retail_pct": 0.24160811865729898,
            "mixed_pct": 0.18149882903981265,
            "instit_pct": 0.4168618266978923,
            "ambiguous_pct": 0.1600312256049961,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1600312256049961,
            "avg_trade_size": 11174.328212334114,
            "avg_run_notional": 22677.05269607843,
            "retail_qty_pct": 0.05580686130013484,
            "mixed_qty_pct": 0.16327251472991383,
            "instit_qty_pct": 0.6197169173626573,
            "ambiguous_qty_pct": 0.16120370660729405,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.16120370660729405,
            "retail_notional_pct": 0.055802580930309646,
            "mixed_notional_pct": 0.1634089784603055,
            "instit_notional_pct": 0.6194727338964339,
            "ambiguous_notional_pct": 0.16131570671295103,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.16131570671295103,
            "run_retail_pct": 0.5588235294117647,
            "run_mixed_pct": 0.24754901960784315,
            "run_instit_pct": 0.09803921568627451,
            "run_ambiguous_pct": 0.09558823529411764,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.09558823529411764,
            "avg_feature_coverage": 0.8670955882352939,
            "high_confidence_pct": 0.6568627450980392,
            "medium_confidence_pct": 0.24754901960784315,
            "low_confidence_pct": 0.09558823529411764,
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
          "trade_id": "301",
          "timestamp": "2026-05-13T07:59:55.004661",
          "price": 3.08,
          "size": 500.0,
          "notional": 1540.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 38526,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "300",
          "timestamp": "2026-05-13T07:59:35.931079",
          "price": 3.07,
          "size": 500.0,
          "notional": 1535.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 38525,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "299",
          "timestamp": "2026-05-13T07:59:13.969124",
          "price": 3.08,
          "size": 1000.0,
          "notional": 3080.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 38524,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "298",
          "timestamp": "2026-05-13T07:59:13.969124",
          "price": 3.08,
          "size": 500.0,
          "notional": 1540.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 38524,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "297",
          "timestamp": "2026-05-13T07:59:00.197287",
          "price": 3.08,
          "size": 500.0,
          "notional": 1540.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 38523,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "296",
          "timestamp": "2026-05-13T07:58:49.720529",
          "price": 3.08,
          "size": 500.0,
          "notional": 1540.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 38522,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "295",
          "timestamp": "2026-05-13T07:58:49.720529",
          "price": 3.08,
          "size": 500.0,
          "notional": 1540.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 38522,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "294",
          "timestamp": "2026-05-13T07:58:37.610425",
          "price": 3.08,
          "size": 1000.0,
          "notional": 3080.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 38521,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "293",
          "timestamp": "2026-05-13T07:58:33.582643",
          "price": 3.07,
          "size": 1500.0,
          "notional": 4605.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 38520,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "292",
          "timestamp": "2026-05-13T07:58:31.599532",
          "price": 3.08,
          "size": 1000.0,
          "notional": 3080.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 38519,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "291",
          "timestamp": "2026-05-13T07:57:25.649742",
          "price": 3.08,
          "size": 1000.0,
          "notional": 3080.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 38518,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "290",
          "timestamp": "2026-05-13T07:57:25.283016",
          "price": 3.07,
          "size": 500.0,
          "notional": 1535.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 38517,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "289",
          "timestamp": "2026-05-13T07:56:17.841639",
          "price": 3.07,
          "size": 1000.0,
          "notional": 3070.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 38516,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "288",
          "timestamp": "2026-05-13T07:56:01.838787",
          "price": 3.07,
          "size": 500.0,
          "notional": 1535.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 38515,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "287",
          "timestamp": "2026-05-13T07:55:20.168205",
          "price": 3.08,
          "size": 3500.0,
          "notional": 10780.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 38514,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "286",
          "timestamp": "2026-05-13T07:54:07.243061",
          "price": 3.08,
          "size": 1000.0,
          "notional": 3080.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 38513,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "285",
          "timestamp": "2026-05-13T07:54:02.167916",
          "price": 3.07,
          "size": 500.0,
          "notional": 1535.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "284",
          "timestamp": "2026-05-13T07:52:46.007185",
          "price": 3.07,
          "size": 3500.0,
          "notional": 10745.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 38512,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "283",
          "timestamp": "2026-05-13T07:52:30.946390",
          "price": 3.07,
          "size": 1500.0,
          "notional": 4605.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 38511,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "282",
          "timestamp": "2026-05-13T07:52:17.153817",
          "price": 3.07,
          "size": 1000.0,
          "notional": 3070.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "281",
          "timestamp": "2026-05-13T07:51:18.279730",
          "price": 3.07,
          "size": 8000.0,
          "notional": 24560.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 38510,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "280",
          "timestamp": "2026-05-13T07:51:18.279730",
          "price": 3.07,
          "size": 1500.0,
          "notional": 4605.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 38510,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "279",
          "timestamp": "2026-05-13T07:51:14.997705",
          "price": 3.08,
          "size": 500.0,
          "notional": 1540.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "278",
          "timestamp": "2026-05-13T07:51:14.997705",
          "price": 3.08,
          "size": 1000.0,
          "notional": 3080.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "277",
          "timestamp": "2026-05-13T07:51:14.997705",
          "price": 3.08,
          "size": 1000.0,
          "notional": 3080.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "276",
          "timestamp": "2026-05-13T07:51:09.336598",
          "price": 3.08,
          "size": 500.0,
          "notional": 1540.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 38510,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "275",
          "timestamp": "2026-05-13T07:51:06.394565",
          "price": 3.08,
          "size": 500.0,
          "notional": 1540.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 38510,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "274",
          "timestamp": "2026-05-13T07:50:56.243822",
          "price": 3.08,
          "size": 500.0,
          "notional": 1540.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 38509,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "273",
          "timestamp": "2026-05-13T07:50:32.165760",
          "price": 3.09,
          "size": 1500.0,
          "notional": 4635.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 38508,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "272",
          "timestamp": "2026-05-13T07:50:28.170998",
          "price": 3.08,
          "size": 500.0,
          "notional": 1540.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
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
      "total_trades": 54502,
      "price_moving_trades": 8614,
      "pct_price_moving": 15.804924589923305,
      "all_movers": {
        "count": 8614,
        "avg_size": 9492.037585326212,
        "median_size": 2910.0,
        "retail_count": 4249,
        "mixed_count": 2052,
        "institutional_count": 1239,
        "ambiguous_count": 1074,
        "unobservable_count": 0,
        "retail_pct": 49.32667750174135,
        "mixed_pct": 23.821685628047366,
        "instit_pct": 14.383561643835616,
        "unclear_pct": 12.468075226375667
      },
      "positive_movers": {
        "count": 4299,
        "avg_size": 8992.298057687834,
        "median_size": 2840.0,
        "retail_count": 2228,
        "mixed_count": 981,
        "institutional_count": 641,
        "ambiguous_count": 449,
        "unobservable_count": 0,
        "retail_pct": 51.82600604791811,
        "mixed_pct": 22.819260293091418,
        "instit_pct": 14.91044428936962,
        "unclear_pct": 10.444289369620842
      },
      "negative_movers": {
        "count": 4315,
        "avg_size": 9989.924081112398,
        "median_size": 3120.0,
        "retail_count": 2021,
        "mixed_count": 1071,
        "institutional_count": 598,
        "ambiguous_count": 625,
        "unobservable_count": 0,
        "retail_pct": 46.836616454229436,
        "mixed_pct": 24.82039397450753,
        "instit_pct": 13.858632676709155,
        "unclear_pct": 14.484356894553882
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
          "opening": 0.0014818514097554897,
          "continuous": 0.9633982701790395,
          "closing": 0.03274218046737016,
          "auctions": 0.03422403187712565,
          "other": 0.002377697943834945
        },
        "1M": {
          "opening": 0.00017448903177214072,
          "continuous": 0.969051843966994,
          "closing": 0.030445631891217618,
          "auctions": 0.030620120922989758,
          "other": 0.0003280351100163283
        },
        "3M": {
          "opening": 0.00040903239065118944,
          "continuous": 0.9397487803925884,
          "closing": 0.05398174590835842,
          "auctions": 0.05439077829900961,
          "other": 0.005860441308401947
        },
        "6M": {
          "opening": 0.0008519418880544754,
          "continuous": 0.931136554208983,
          "closing": 0.06403366048303967,
          "auctions": 0.06488560237109414,
          "other": 0.003977843419922899
        }
      },
      "hhi": {
        "1D": 0.21097949698421456,
        "1M": 0.23203264201642904,
        "3M": 0.18995901294803164,
        "6M": 0.17778001392433365
      },
      "profile_buckets": [
        {
          "time": "09:00",
          "avg_share": 0.0016
        },
        {
          "time": "09:30",
          "avg_share": 0.114
        },
        {
          "time": "10:00",
          "avg_share": 0.0827
        },
        {
          "time": "10:30",
          "avg_share": 0.0656
        },
        {
          "time": "11:00",
          "avg_share": 0.0428
        },
        {
          "time": "11:30",
          "avg_share": 0.0348
        },
        {
          "time": "12:00",
          "avg_share": 0.0474
        },
        {
          "time": "13:00",
          "avg_share": 0.0744
        },
        {
          "time": "13:30",
          "avg_share": 0.0477
        },
        {
          "time": "14:00",
          "avg_share": 0.0659
        },
        {
          "time": "14:30",
          "avg_share": 0.0719
        },
        {
          "time": "15:00",
          "avg_share": 0.088
        },
        {
          "time": "15:30",
          "avg_share": 0.2162
        },
        {
          "time": "16:00",
          "avg_share": 0.0467
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "6993",
          "auctions_pct": 3.865488102596628,
          "hhi": 0.16992633300850055,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400",
            "you": true
          }
        },
        {
          "ticker": "6808",
          "auctions_pct": 7.026885434742295,
          "hhi": 0.15747177831362982,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "2698",
          "auctions_pct": 2.6932348235411983,
          "hhi": 0.14035616143163865,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "1044",
          "auctions_pct": 15.788506077036793,
          "hhi": 0.12704389369867955,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "6601",
          "auctions_pct": 9.551007139521937,
          "hhi": 0.21759308366067676,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "399",
          "auctions_pct": 0.7416713463714972,
          "hhi": 0.20302154861240349,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "2360",
          "auctions_pct": 1.6469191366665814,
          "hhi": 0.2634362808564487,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "2625",
          "auctions_pct": 0.454720417807411,
          "hhi": 0.3899063110427073,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "2569",
          "auctions_pct": 1.0015631619942815,
          "hhi": 0.3383079400766163,
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
