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
      "marketCap": 125453076.1,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "ITS",
      "name": "Info-Tech",
      "marketCap": 281220000.0,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "LVR",
      "name": "17LIVE GROUP",
      "marketCap": 149153790.69,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "U77",
      "name": "Sarine Tech",
      "marketCap": 74946750.34,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "NXR",
      "name": "iWOW Tech",
      "marketCap": 107080881.60000001,
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
      "ticker": "PCT",
      "name": "PC Partner",
      "marketCap": 477096911.64,
      "sector": "Computer Hardware",
      "industry": "Technology"
    },
    {
      "ticker": "MZH",
      "name": "Nanofilm",
      "marketCap": 423951808.8,
      "sector": "Electronic Components",
      "industry": "Technology"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XSES",
    "ticker": "TKU",
    "company": "Toku Ltd",
    "asof_date": "2026-02-16",
    "industry": "Technology",
    "sector": "Software - Application",
    "market_cap_display": "125.5M",
    "market_cap_category": "small",
    "universe_total": 558,
    "peers_count": 8,
    "page_title_template": "Liquidity Analysis Report — {market}/{ticker} — {asof}"
  },
  "q01": {
    "primary_liquidity_period": "max",
    "periods": {
      "1d": {
        "label": "1D",
        "window_days": 1,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 1,
          "score_pca": 79.39068100358423,
          "score_pca_percentile": 79.39068100358423,
          "rank_pca": 116,
          "total": 558,
          "adv_notional_sgd": 327600.0,
          "adv_volume_shares": 1310400.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0022979747405332852,
          "votes": 129.0,
          "trades": 129.0,
          "spread_pct": 0.02903384011770477,
          "spread_ticks": 1.4028436018957346,
          "amihud": 2.6543504804374354e-07,
          "volatility": null
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.6003012791898736,
          "loadings": {
            "log_adv": 0.5648126351664018,
            "log_trades": 0.5257481850990373,
            "log_turnover": 0.5272162035983171,
            "neg_spread": 0.35213150961782047,
            "neg_amihud": 0.051205542855315374,
            "neg_vol": -0.0
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
          "peer_median_adv": 531.0,
          "peer_median_score_pca": 40.14336917562724,
          "peer_median_trades": 1.0,
          "peer_median_volatility": null,
          "peer_median_spread_pct": 0.029904203913931195,
          "peer_median_spread_ticks": 1.6076675849403121,
          "peer_median_amihud": 4.630137229859257e-08,
          "peer_median_turnover_ratio": 4.659469167379919e-06,
          "target_vs_peer": {
            "score_pca_delta": 39.25,
            "adv_delta_pct": 61594.9,
            "trades_delta_pct": 12800.0,
            "volatility_delta_pct": null,
            "spread_pct_delta_pct": 2.91,
            "spread_ticks_delta_pct": -12.74,
            "amihud_delta_pct": -473.28,
            "turnover_ratio_delta_pct": 49218.38
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 79.39068100358423,
            "rank_pca": 116,
            "adv": 327600.0,
            "trades": 129.0,
            "volatility": null,
            "spread_pct": 0.02903384011770477,
            "spread_ticks": 1.4028436018957346,
            "amihud": 2.6543504804374354e-07,
            "turnover_ratio": 0.0022979747405332852,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 77.95698924731182,
            "rank_pca": 124,
            "adv": 222656.0,
            "trades": 79.0,
            "volatility": null,
            "spread_pct": 0.006274482000744437,
            "spread_ticks": 1.2291666666666667,
            "amihud": 4.630137229859257e-08,
            "turnover_ratio": 0.0033649986818447067,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 40.86021505376344,
            "rank_pca": 331,
            "adv": 837.0,
            "trades": 1.0,
            "volatility": null,
            "spread_pct": 0.017781213761113274,
            "spread_ticks": 3.2857142857142856,
            "amihud": 6.4580709741999404e-06,
            "turnover_ratio": 6.221764122179216e-06,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 39.42652329749104,
            "rank_pca": 339,
            "adv": 225.0,
            "trades": 1.0,
            "volatility": null,
            "spread_pct": 0.04202719406674912,
            "spread_ticks": 1.8888888888888888,
            "amihud": 0.00010101010101010092,
            "turnover_ratio": 3.0971742125806227e-06,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 21.32616487455197,
            "rank_pca": 440,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": null,
            "spread_pct": 0.08588957055214719,
            "spread_ticks": 7.0,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 2.4193548387096775,
            "rank_pca": 542,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": null,
            "spread_pct": 0.6666666666666666,
            "spread_ticks": 1.0,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "KUX",
            "score_pca": 5.734767025089606,
            "rank_pca": 527,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": null,
            "spread_pct": 0.409090909090909,
            "spread_ticks": 18.0,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "PCT",
            "score_pca": 84.76702508960572,
            "rank_pca": 86,
            "adv": 1078601.0,
            "trades": 171.0,
            "volatility": null,
            "spread_pct": 0.00950477459471463,
            "spread_ticks": 1.3264462809917354,
            "amihud": 2.6301472301843734e-08,
            "turnover_ratio": 0.0032986398651584066,
            "is_target": false
          },
          {
            "ticker": "MZH",
            "score_pca": 93.9068100358423,
            "rank_pca": 35,
            "adv": 1717500.0,
            "trades": 940.0,
            "volatility": null,
            "spread_pct": 0.008385533094393086,
            "spread_ticks": 1.0504662643993417,
            "amihud": 0.0,
            "turnover_ratio": 0.008646038816372388,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Software - Application",
          "sector_count": 8,
          "market_count": 558,
          "market": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 1594198.5448146889,
              "median": 6851.707325700345,
              "min": 0.0,
              "max": 125357115.0,
              "p5": 0.0,
              "p95": 6651097.699999993,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10352597330618063,
              "median": 0.025950803778251277,
              "min": 0.0002577297577749182,
              "max": 1.37219730941704,
              "p5": 0.0036238344124504837,
              "p95": 0.5354462051709759,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.007900144747333518,
              "median": 8.071501742828511e-05,
              "min": 0.0,
              "max": 3.351789598576231,
              "p5": 0.0,
              "p95": 0.00838561658264499,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.002476896211432127,
              "median": 2.0310738043474656e-08,
              "min": 0.0,
              "max": 0.4166666666666666,
              "p5": 0.0,
              "p95": 5.1422373222769005e-05,
              "count": 365
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 227.91397849462365,
              "median": 4.0,
              "min": 0.0,
              "max": 6017.0,
              "p5": 0.0,
              "p95": 1272.7999999999988,
              "count": 558
            }
          },
          "sector": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 3094785.5000000005,
              "median": 531.0,
              "min": 0.0,
              "max": 24206966.000000004,
              "p5": 0.0,
              "p95": 15849187.899999991,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15724860740048252,
              "median": 0.035530517092226946,
              "min": 0.0012249829478255764,
              "max": 0.6666666666666666,
              "p5": 0.0029923076163471778,
              "p95": 0.5765151515151513,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0026001625141191293,
              "median": 4.659469167379919e-06,
              "min": 0.0,
              "max": 0.015129007752240282,
              "p5": 0.0,
              "p95": 0.011011604577601825,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.1555990479740736e-05,
              "median": 2.6543504804374354e-07,
              "min": 4.399406048261145e-11,
              "max": 0.00010101010101010092,
              "p5": 9.295469708104604e-09,
              "p95": 8.209969500292071e-05,
              "count": 5
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 631.125,
              "median": 1.0,
              "min": 0.0,
              "max": 4839.0,
              "p5": 0.0,
              "p95": 3190.4999999999973,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 377477.375,
              "median": 531.0,
              "min": 0.0,
              "max": 1717500.0,
              "p5": 0.0,
              "p95": 1493885.3499999996,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 149.0,
              "median": 1.0,
              "min": 0.0,
              "max": 940.0,
              "p5": 0.0,
              "p95": 670.8499999999996,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15570254297842967,
              "median": 0.029904203913931195,
              "min": 0.006274482000744437,
              "max": 0.6666666666666666,
              "p5": 0.007013349883521465,
              "p95": 0.5765151515151513,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 4.347585298332615,
              "median": 1.6076675849403121,
              "min": 1.0,
              "max": 18.0,
              "p5": 1.0176631925397697,
              "p95": 14.149999999999995,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.1508154965780257e-05,
              "median": 4.630137229859257e-08,
              "min": 0.0,
              "max": 0.00010101010101010092,
              "p5": 5.260294460368747e-09,
              "p95": 8.209969500292071e-05,
              "count": 5
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0019148745377137826,
              "median": 4.659469167379919e-06,
              "min": 0.0,
              "max": 0.008646038816372388,
              "p5": 0.0,
              "p95": 0.006797674769287697,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.08695652173913038,
            "market": 0.00016207546783597593,
            "sector": 0.002702702702702675,
            "peers": 0.0,
            "vs_market": 0.0867944462712944,
            "vs_sector": 0.0842538190364277,
            "vs_peers": 0.08695652173913038
          }
        }
      },
      "1w": {
        "label": "1W",
        "window_days": 5,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 5,
          "score_pca": 77.41935483870968,
          "score_pca_percentile": 77.41935483870968,
          "rank_pca": 127,
          "total": 558,
          "adv_notional_sgd": 458344.0,
          "adv_volume_shares": 1992800.0,
          "free_float_shares": null,
          "turnover_ratio": 0.003494661220188287,
          "votes": 129.0,
          "trades": 129.0,
          "spread_pct": 0.027032612739222115,
          "spread_ticks": 1.1890909090909092,
          "amihud": 0.0,
          "volatility": 0.6209862290256802
        },
        "pca": {
          "valid": true,
          "window_days": 5,
          "variance_explained": 0.5126338631294719,
          "loadings": {
            "log_adv": 0.5536440898164087,
            "log_trades": 0.5086237575007,
            "log_turnover": 0.5119029850946776,
            "neg_spread": 0.3916935848694911,
            "neg_amihud": 0.10188325764642635,
            "neg_vol": 0.09450590643884668
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
          "peer_median_adv": 10508.5,
          "peer_median_score_pca": 43.99641577060932,
          "peer_median_trades": 6.0,
          "peer_median_volatility": 0.25888804111963615,
          "peer_median_spread_pct": 0.02376334532851639,
          "peer_median_spread_ticks": 1.4430868167202573,
          "peer_median_amihud": 2.5038683096138e-08,
          "peer_median_turnover_ratio": 7.966629219587379e-05,
          "target_vs_peer": {
            "score_pca_delta": 33.42,
            "adv_delta_pct": 4261.7,
            "trades_delta_pct": 2050.0,
            "volatility_delta_pct": -139.87,
            "spread_pct_delta_pct": -13.76,
            "spread_ticks_delta_pct": -17.6,
            "amihud_delta_pct": 100.0,
            "turnover_ratio_delta_pct": 4286.62
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 77.41935483870968,
            "rank_pca": 127,
            "adv": 458344.0,
            "trades": 129.0,
            "volatility": 0.6209862290256802,
            "spread_pct": 0.027032612739222115,
            "spread_ticks": 1.1890909090909092,
            "amihud": 0.0,
            "turnover_ratio": 0.003494661220188287,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 85.12544802867383,
            "rank_pca": 84,
            "adv": 1529981.0,
            "trades": 244.0,
            "volatility": 0.6233180163723433,
            "spread_pct": 0.006377033665329675,
            "spread_ticks": 1.2291666666666667,
            "amihud": 1.324463286811023e-08,
            "turnover_ratio": 0.02336097016229602,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 55.7347670250896,
            "rank_pca": 248,
            "adv": 20792.0,
            "trades": 11.0,
            "volatility": 0.18737771228029027,
            "spread_pct": 0.012592192840438938,
            "spread_ticks": 2.3333333333333335,
            "amihud": 4.738258595201016e-07,
            "turnover_ratio": 0.00015623541017916696,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 32.25806451612903,
            "rank_pca": 379,
            "adv": 225.0,
            "trades": 1.0,
            "volatility": 0.2962168543974959,
            "spread_pct": 0.03493449781659384,
            "spread_ticks": 1.6,
            "amihud": 1.683501683501686e-05,
            "turnover_ratio": 3.0971742125806227e-06,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 20.78853046594982,
            "rank_pca": 443,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.22155922784177642,
            "spread_pct": 0.07171314741035849,
            "spread_ticks": 5.823529411764706,
            "amihud": 9.578794388921054e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 2.5985663082437274,
            "rank_pca": 542,
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
            "score_pca": 7.168458781362006,
            "rank_pca": 519,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.38400000000000006,
            "spread_ticks": 18.0,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "PCT",
            "score_pca": 82.07885304659499,
            "rank_pca": 101,
            "adv": 1340346.0,
            "trades": 175.0,
            "volatility": 0.4774504328653521,
            "spread_pct": 0.008682251307764113,
            "spread_ticks": 1.2861736334405145,
            "amihud": 2.5038683096138e-08,
            "turnover_ratio": 0.003808121139898991,
            "is_target": false
          },
          {
            "ticker": "MZH",
            "score_pca": 92.47311827956989,
            "rank_pca": 43,
            "adv": 3982812.5,
            "trades": 1380.0,
            "volatility": 0.9610786867456671,
            "spread_pct": 0.008501908731933452,
            "spread_ticks": 1.0564411891426109,
            "amihud": 4.6631704546183205e-09,
            "turnover_ratio": 0.020049811629306056,
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
              "mean": 0.481452699486991,
              "median": 0.2626949904638768,
              "min": 0.0,
              "max": 8.694826047713663,
              "p5": 0.0,
              "p95": 1.5076774368955315,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3336425.1936539854,
              "median": 10863.45,
              "min": 0.0,
              "max": 379586250.0,
              "p5": 0.0,
              "p95": 10542979.249999978,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09787624927415865,
              "median": 0.025752807905304875,
              "min": 0.00022492393010911877,
              "max": 1.3644859813084111,
              "p5": 0.0033007425879408854,
              "p95": 0.5026150627615062,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00486166563983696,
              "median": 0.00021839689147845926,
              "min": 0.0,
              "max": 1.4501351262276712,
              "p5": 0.0,
              "p95": 0.011527775683847205,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0008229821302577662,
              "median": 1.0154739469960262e-07,
              "min": 0.0,
              "max": 0.2083333333333333,
              "p5": 0.0,
              "p95": 0.00018729189789123152,
              "count": 508
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 432.85125448028674,
              "median": 6.0,
              "min": 0.0,
              "max": 15905.0,
              "p5": 0.0,
              "p95": 2202.849999999999,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.27748787398810176,
              "median": 0.24600208991450218,
              "min": 0.0,
              "max": 0.6233180163723433,
              "p5": 0.0,
              "p95": 0.6225018908010113,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2954007.75,
              "median": 10508.5,
              "min": 0.0,
              "max": 21622720.0,
              "p5": 0.0,
              "p95": 14590261.34999999,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1505634086026409,
              "median": 0.030983555277907977,
              "min": 0.0011911176825175136,
              "max": 0.6666666666666666,
              "p5": 0.00300618827650177,
              "p95": 0.5677333333333332,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004985503706699486,
              "median": 7.966629219587379e-05,
              "min": 0.0,
              "max": 0.02336097016229602,
              "p5": 0.0,
              "p95": 0.019688803595844347,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.8430098234940074e-06,
              "median": 1.324463286811023e-08,
              "min": 0.0,
              "max": 1.683501683501686e-05,
              "p5": 0.0,
              "p95": 1.4658150101188114e-05,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 727.375,
              "median": 6.0,
              "min": 0.0,
              "max": 5434.0,
              "p5": 0.0,
              "p95": 3617.4999999999973,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 859269.5625,
              "median": 10508.5,
              "min": 0.0,
              "max": 3982812.5,
              "p5": 0.0,
              "p95": 3124321.4749999987,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 226.375,
              "median": 6.0,
              "min": 0.0,
              "max": 1380.0,
              "p5": 0.0,
              "p95": 982.3999999999994,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3458751163128656,
              "median": 0.25888804111963615,
              "min": 0.0,
              "max": 0.9610786867456671,
              "p5": 0.0,
              "p95": 0.8428624521150035,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.14918346230488566,
              "median": 0.02376334532851639,
              "min": 0.006377033665329675,
              "max": 0.6666666666666666,
              "p5": 0.007120739938640997,
              "p95": 0.5677333333333332,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 4.041080529293479,
              "median": 1.4430868167202573,
              "min": 1.0,
              "max": 18.0,
              "p5": 1.019754416199914,
              "p95": 13.73823529411764,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.847226224268126e-06,
              "median": 2.5038683096138e-08,
              "min": 0.0,
              "max": 1.683501683501686e-05,
              "p5": 1.3989511363854963e-09,
              "p95": 1.4658150101188114e-05,
              "count": 7
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005922279439486601,
              "median": 7.966629219587379e-05,
              "min": 0.0,
              "max": 0.02336097016229602,
              "p5": 0.0,
              "p95": 0.02220206467574953,
              "count": 8
            }
          },
          "returns": {
            "window_days": 5,
            "n_obs": 5,
            "stock": 0.13636363636363624,
            "market": -0.004485136489176034,
            "sector": 0.002702702702702675,
            "peers": 0.0,
            "vs_market": 0.14084877285281228,
            "vs_sector": 0.13366093366093357,
            "vs_peers": 0.13636363636363624
          }
        }
      },
      "2w": {
        "label": "2W",
        "window_days": 10,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 10,
          "score_pca": 78.67383512544804,
          "score_pca_percentile": 78.67383512544804,
          "rank_pca": 120,
          "total": 558,
          "adv_notional_sgd": 618568.5,
          "adv_volume_shares": 2579050.0,
          "free_float_shares": null,
          "turnover_ratio": 0.004522734855442895,
          "votes": 208.0,
          "trades": 208.0,
          "spread_pct": 0.024135476996288686,
          "spread_ticks": 1.1322836421970823,
          "amihud": 6.011053542939079e-08,
          "volatility": 0.7854967028212335
        },
        "pca": {
          "valid": true,
          "window_days": 10,
          "variance_explained": 0.5196660656589552,
          "loadings": {
            "log_adv": 0.5468771866175227,
            "log_trades": 0.4957467527636462,
            "log_turnover": 0.49846117527251066,
            "neg_spread": 0.41085930530623793,
            "neg_amihud": 0.08453893637319619,
            "neg_vol": 0.1753418264639517
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
          "peer_median_adv": 13842.5,
          "peer_median_score_pca": 47.043010752688176,
          "peer_median_trades": 6.25,
          "peer_median_volatility": 0.30382693988874,
          "peer_median_spread_pct": 0.0212466593395462,
          "peer_median_spread_ticks": 1.401643940765862,
          "peer_median_amihud": 2.4829481278200025e-08,
          "peer_median_turnover_ratio": 0.00010967220657941594,
          "target_vs_peer": {
            "score_pca_delta": 31.63,
            "adv_delta_pct": 4368.6,
            "trades_delta_pct": 3228.0,
            "volatility_delta_pct": -158.53,
            "spread_pct_delta_pct": -13.6,
            "spread_ticks_delta_pct": -19.22,
            "amihud_delta_pct": -142.09,
            "turnover_ratio_delta_pct": 4023.87
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 78.67383512544804,
            "rank_pca": 120,
            "adv": 618568.5,
            "trades": 208.0,
            "volatility": 0.7854967028212335,
            "spread_pct": 0.024135476996288686,
            "spread_ticks": 1.1322836421970823,
            "amihud": 6.011053542939079e-08,
            "turnover_ratio": 0.004522734855442895,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 83.33333333333334,
            "rank_pca": 94,
            "adv": 1265601.5,
            "trades": 159.0,
            "volatility": 0.5134016331364367,
            "spread_pct": 0.006674339908622957,
            "spread_ticks": 1.2074103375527425,
            "amihud": 1.208973716738934e-08,
            "turnover_ratio": 0.019444271652552036,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 57.34767025089605,
            "rank_pca": 239,
            "adv": 25852.0,
            "trades": 10.5,
            "volatility": 0.15841966656222764,
            "spread_pct": 0.010983214866526092,
            "spread_ticks": 2.0238095238095237,
            "amihud": 2.6938855782108283e-07,
            "turnover_ratio": 0.00019425730203692884,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 36.73835125448029,
            "rank_pca": 354,
            "adv": 1833.0,
            "trades": 2.0,
            "volatility": 0.4016674587970534,
            "spread_pct": 0.03151010381256631,
            "spread_ticks": 1.46875,
            "amihud": 6.804109682248073e-06,
            "turnover_ratio": 2.5087111121903043e-05,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 30.107526881720432,
            "rank_pca": 391,
            "adv": 200.0,
            "trades": 0.5,
            "volatility": 0.20598642098042655,
            "spread_pct": 0.04750609836308954,
            "spread_ticks": 3.8428571428571425,
            "amihud": 6.57570277823443e-07,
            "turnover_ratio": 8.899537323733985e-06,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 11.827956989247312,
            "rank_pca": 493,
            "adv": 10.0,
            "trades": 0.5,
            "volatility": 0.0,
            "spread_pct": 0.6666666666666666,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 1.0840585155330002e-06,
            "is_target": false
          },
          {
            "ticker": "KUX",
            "score_pca": 8.960573476702509,
            "rank_pca": 509,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.34692417739628045,
            "spread_ticks": 15.566666666666666,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "PCT",
            "score_pca": 80.28673835125448,
            "rank_pca": 111,
            "adv": 1221717.0,
            "trades": 181.0,
            "volatility": 0.7138352774547735,
            "spread_pct": 0.00976883588992345,
            "spread_ticks": 1.3345378815317241,
            "amihud": 2.4829481278200025e-08,
            "turnover_ratio": 0.003553380502528699,
            "is_target": false
          },
          {
            "ticker": "MZH",
            "score_pca": 87.63440860215054,
            "rank_pca": 70,
            "adv": 1674206.25,
            "trades": 825.0,
            "volatility": 0.6917333421674955,
            "spread_pct": 0.008949930346483143,
            "spread_ticks": 1.0521939165133962,
            "amihud": 1.0026030562461091e-08,
            "turnover_ratio": 0.009030674276816902,
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
              "mean": 0.5239340565676059,
              "median": 0.31213118797021994,
              "min": 0.0,
              "max": 7.529940238806681,
              "p5": 0.0,
              "p95": 1.5904632586199783,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3177462.43123383,
              "median": 11794.5,
              "min": 0.0,
              "max": 346390995.0,
              "p5": 0.0,
              "p95": 11653289.649999961,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0978045772832106,
              "median": 0.025074027019382925,
              "min": 0.0002574120120712652,
              "max": 1.329284123142999,
              "p5": 0.00328254575142319,
              "p95": 0.4748339483014498,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004506093801656071,
              "median": 0.0002717962992127802,
              "min": 0.0,
              "max": 1.3018258519543866,
              "p5": 0.0,
              "p95": 0.009959116223499799,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0018649776189575858,
              "median": 9.482778855594056e-08,
              "min": 0.0,
              "max": 0.6666666666666667,
              "p5": 0.0,
              "p95": 0.00012873909666342954,
              "count": 531
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 425.671146953405,
              "median": 7.0,
              "min": 0.0,
              "max": 13542.0,
              "p5": 0.0,
              "p95": 2111.45,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3014556219061825,
              "median": 0.27632975696625445,
              "min": 0.0,
              "max": 0.7854967028212335,
              "p5": 0.0,
              "p95": 0.6902634284315545,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2905165.75,
              "median": 13842.5,
              "min": 0.0,
              "max": 21329261.0,
              "p5": 3.5000000000000004,
              "p95": 14306980.17499999,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.14194954519753805,
              "median": 0.0278227904044275,
              "min": 0.0011962835702639056,
              "max": 0.6666666666666666,
              "p5": 0.0031136032886895735,
              "p95": 0.5547567954220313,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004616943599798972,
              "median": 0.00010967220657941594,
              "min": 0.0,
              "max": 0.019444271652552036,
              "p5": 3.7942048043655013e-07,
              "p95": 0.01709750157264838,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.114815164858842e-06,
              "median": 6.011053542939079e-08,
              "min": 0.0,
              "max": 6.804109682248073e-06,
              "p5": 1.3120905675413155e-10,
              "p95": 4.96014786092068e-06,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 649.375,
              "median": 6.25,
              "min": 0.0,
              "max": 4814.5,
              "p5": 0.17500000000000002,
              "p95": 3202.2249999999976,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 523677.46875,
              "median": 13842.5,
              "min": 0.0,
              "max": 1674206.25,
              "p5": 3.5000000000000004,
              "p95": 1531194.5875,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 147.3125,
              "median": 6.25,
              "min": 0.0,
              "max": 825.0,
              "p5": 0.17500000000000002,
              "p95": 599.5999999999997,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3356304748873017,
              "median": 0.30382693988874,
              "min": 0.0,
              "max": 0.7138352774547735,
              "p5": 0.0,
              "p95": 0.7060996001042261,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.14112292090626982,
              "median": 0.0212466593395462,
              "min": 0.006674339908622957,
              "max": 0.6666666666666666,
              "p5": 0.007470796561874022,
              "p95": 0.5547567954220313,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.437028183616399,
              "median": 1.401643940765862,
              "min": 1.0,
              "max": 15.566666666666666,
              "p5": 1.0182678707796886,
              "p95": 11.463333333333328,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.1111448238429497e-06,
              "median": 2.4829481278200025e-08,
              "min": 0.0,
              "max": 6.804109682248073e-06,
              "p5": 3.007809168738328e-09,
              "p95": 4.96014786092068e-06,
              "count": 7
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004032206805111967,
              "median": 0.00010967220657941594,
              "min": 0.0,
              "max": 0.019444271652552036,
              "p5": 3.7942048043655013e-07,
              "p95": 0.015799512571044734,
              "count": 8
            }
          },
          "returns": {
            "window_days": 10,
            "n_obs": 10,
            "stock": -0.019607843137255054,
            "market": 0.009465965371671992,
            "sector": -0.012660577243910676,
            "peers": 0.0029940119760478723,
            "vs_market": -0.029073808508927046,
            "vs_sector": -0.006947265893344379,
            "vs_peers": -0.022601855113302927
          }
        }
      },
      "max": {
        "label": "18D",
        "window_days": 18,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 18,
          "score_pca": 81.00358422939068,
          "score_pca_percentile": 81.00358422939068,
          "rank_pca": 107,
          "total": 558,
          "adv_notional_sgd": 746773.0,
          "adv_volume_shares": 3146000.0,
          "free_float_shares": null,
          "turnover_ratio": 0.005516963166756498,
          "votes": 293.5,
          "trades": 293.5,
          "spread_pct": 0.020280108086343007,
          "spread_ticks": 1.0468695810143516,
          "amihud": 2.1246738595747293e-08,
          "volatility": 0.7031274562654322
        },
        "pca": {
          "valid": true,
          "window_days": 18,
          "variance_explained": 0.5312809076969748,
          "loadings": {
            "log_adv": 0.535737512355793,
            "log_trades": 0.4839780854823612,
            "log_turnover": 0.4878303904986089,
            "neg_spread": 0.4237948308952607,
            "neg_amihud": 0.1046300561315702,
            "neg_vol": 0.22410384511201925
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
          "peer_median_adv": 17004.125,
          "peer_median_score_pca": 46.68458781362008,
          "peer_median_trades": 7.75,
          "peer_median_volatility": 0.3328672455213104,
          "peer_median_spread_pct": 0.019576245318108094,
          "peer_median_spread_ticks": 1.2789035069725592,
          "peer_median_amihud": 2.0878699884622888e-08,
          "peer_median_turnover_ratio": 0.00012851032572712523,
          "target_vs_peer": {
            "score_pca_delta": 34.32,
            "adv_delta_pct": 4291.7,
            "trades_delta_pct": 3687.1,
            "volatility_delta_pct": -111.23,
            "spread_pct_delta_pct": -3.6,
            "spread_ticks_delta_pct": -18.14,
            "amihud_delta_pct": -1.76,
            "turnover_ratio_delta_pct": 4193.01
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 81.00358422939068,
            "rank_pca": 107,
            "adv": 746773.0,
            "trades": 293.5,
            "volatility": 0.7031274562654322,
            "spread_pct": 0.020280108086343007,
            "spread_ticks": 1.0468695810143516,
            "amihud": 2.1246738595747293e-08,
            "turnover_ratio": 0.005516963166756498,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 82.79569892473118,
            "rank_pca": 97,
            "adv": 874823.5,
            "trades": 179.0,
            "volatility": 0.48230158875722307,
            "spread_pct": 0.00730634434524962,
            "spread_ticks": 1.2393290963791868,
            "amihud": 1.6534879284825635e-08,
            "turnover_ratio": 0.014284212054159891,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 56.451612903225815,
            "rank_pca": 244,
            "adv": 32175.25,
            "trades": 12.5,
            "volatility": 0.24449134213823442,
            "spread_pct": 0.012314150582706919,
            "spread_ticks": 2.0604395604395602,
            "amihud": 2.160635198494852e-07,
            "turnover_ratio": 0.00023193354033234742,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 36.91756272401434,
            "rank_pca": 353,
            "adv": 1833.0,
            "trades": 3.0,
            "volatility": 0.31684928958644976,
            "spread_pct": 0.02683834005350927,
            "spread_ticks": 1.207142857142857,
            "amihud": 6.450198021079242e-07,
            "turnover_ratio": 2.5087111121903043e-05,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 31.00358422939068,
            "rank_pca": 386,
            "adv": 551.0,
            "trades": 1.0,
            "volatility": 0.348885201456171,
            "spread_pct": 0.04700035132561588,
            "spread_ticks": 3.860483870967742,
            "amihud": 2.3681184850638975e-06,
            "turnover_ratio": 2.4918704506455155e-05,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 18.27956989247312,
            "rank_pca": 457,
            "adv": 35.1,
            "trades": 1.5,
            "volatility": 0.0,
            "spread_pct": 0.6666666666666666,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 3.805045389520831e-06,
            "is_target": false
          },
          {
            "ticker": "KUX",
            "score_pca": 9.31899641577061,
            "rank_pca": 507,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.3653848108729022,
            "spread_ticks": 16.775,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "PCT",
            "score_pca": 81.18279569892472,
            "rank_pca": 106,
            "adv": 1323728.0,
            "trades": 200.0,
            "volatility": 0.6319294099987597,
            "spread_pct": 0.009206549476487162,
            "spread_ticks": 1.3184779175659314,
            "amihud": 2.0878699884622888e-08,
            "turnover_ratio": 0.0038154533128496163,
            "is_target": false
          },
          {
            "ticker": "MZH",
            "score_pca": 86.73835125448028,
            "rank_pca": 75,
            "adv": 1559223.0,
            "trades": 684.0,
            "volatility": 0.5424729843928752,
            "spread_pct": 0.008949930346483143,
            "spread_ticks": 1.0379967502071474,
            "amihud": 7.560989485890075e-09,
            "turnover_ratio": 0.008595697979013597,
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
              "mean": 0.5890536174104172,
              "median": 0.3588461686925809,
              "min": 0.0,
              "max": 8.41567165541555,
              "p5": 0.05233709721148662,
              "p95": 1.5810807631890993,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2996123.997373086,
              "median": 15050.75,
              "min": 0.0,
              "max": 312394834.0,
              "p5": 0.0,
              "p95": 11965581.274999991,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09536144647085577,
              "median": 0.024735375870867146,
              "min": 0.0002598231365279911,
              "max": 1.3043478260869563,
              "p5": 0.0033043389810517667,
              "p95": 0.477665065832382,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003398060886301082,
              "median": 0.00029686383066256593,
              "min": 0.0,
              "max": 0.5784061696658098,
              "p5": 0.0,
              "p95": 0.01098427955455513,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00025257310819414643,
              "median": 1.0457703833617035e-07,
              "min": 0.0,
              "max": 0.10869565217391303,
              "p5": 0.0,
              "p95": 7.49937050484905e-05,
              "count": 546
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 401.7903225806452,
              "median": 8.25,
              "min": 0.0,
              "max": 11375.5,
              "p5": 0.0,
              "p95": 2118.9499999999994,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3099084626465809,
              "median": 0.3328672455213104,
              "min": 0.0,
              "max": 0.7031274562654322,
              "p5": 0.0,
              "p95": 0.6258384026375589,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2770892.79375,
              "median": 17004.125,
              "min": 0.0,
              "max": 20510951.5,
              "p5": 12.285000000000002,
              "p95": 13638306.69999999,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.14337142896591462,
              "median": 0.023559224069926138,
              "min": 0.0011806597943234277,
              "max": 0.6666666666666666,
              "p5": 0.003324649387147595,
              "p95": 0.5612180171388489,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004018921948158752,
              "median": 0.00012851032572712523,
              "min": 0.0,
              "max": 0.014284212054159891,
              "p5": 1.331765886332291e-06,
              "p95": 0.01350729742225512,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.6677954522352865e-07,
              "median": 2.1246738595747293e-08,
              "min": 0.0,
              "max": 2.3681184850638975e-06,
              "p5": 1.420174988462331e-10,
              "p95": 1.8511888801771043e-06,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 646.8125,
              "median": 7.75,
              "min": 0.0,
              "max": 4684.0,
              "p5": 0.35000000000000003,
              "p95": 3147.324999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 474046.10625,
              "median": 17004.125,
              "min": 0.0,
              "max": 1559223.0,
              "p5": 12.285000000000002,
              "p95": 1476799.7499999998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 135.125,
              "median": 7.75,
              "min": 0.0,
              "max": 684.0,
              "p5": 0.35000000000000003,
              "p95": 514.5999999999997,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.32086622704121415,
              "median": 0.3328672455213104,
              "min": 0.0,
              "max": 0.6319294099987597,
              "p5": 0.0,
              "p95": 0.6006196610367001,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1429583929587026,
              "median": 0.019576245318108094,
              "min": 0.00730634434524962,
              "max": 0.6666666666666666,
              "p5": 0.007881599445681352,
              "p95": 0.5612180171388489,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.5623587565878028,
              "median": 1.2789035069725592,
              "min": 1.0,
              "max": 16.775,
              "p5": 1.0132988625725017,
              "p95": 12.254919354838702,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.677394822395208e-07,
              "median": 2.0878699884622888e-08,
              "min": 0.0,
              "max": 2.3681184850638975e-06,
              "p5": 2.2682968457670227e-09,
              "p95": 1.8511888801771043e-06,
              "count": 7
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0033726384684216663,
              "median": 0.00012851032572712523,
              "min": 0.0,
              "max": 0.014284212054159891,
              "p5": 1.331765886332291e-06,
              "p95": 0.012293232127858685,
              "count": 8
            }
          },
          "returns": {
            "window_days": 18,
            "n_obs": 17,
            "stock": -0.12280701754385948,
            "market": 0.022836153759572486,
            "sector": -0.02456666015426512,
            "peers": -0.0054711785382624,
            "vs_market": -0.14564317130343196,
            "vs_sector": -0.09824035738959436,
            "vs_peers": -0.11733583900559708
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Volatility is unavailable for this latest snapshot. Notional ADV is S$327.6K, down 56.13% vs the max baseline (S$746.8K), and the spread is 2.90% (1.40 ticks), wider/worse by 43.16% vs baseline—so trading costs rose as activity slowed.",
        "market_comparison": "Despite the slowdown, today’s S$327.6K ADV is far above market median S$6.9K and peer median S$531 (+61,594.92% vs peers), with 129 trades vs market median 4. Spread is 2.90%: wider than market 2.60% but better than sector 3.55% and slightly better than peers."
      },
      "1w": {
        "liquidity": "Over the last week, notional ADV is S$458.3K, down 38.62% vs the max baseline, and spread is 2.70% (1.19 ticks), wider/worse by 33.30% vs baseline—indicating higher trading cost than the longer-run norm. Turnover is 0.3495% with 129 trades, showing.",
        "market_comparison": "ADV (S$458.3K) is well above market median S$10.9K and peer median S$10.5K (+4,261.65% vs peers), and trades (129) exceed market median 6. Spread is 2.70%: wider than market 2.58% and peers 2.38 (+13.76% worse), even though it sits near 1 tick (1.19 vs peers."
      },
      "2w": {
        "liquidity": "Over the last two weeks, notional ADV is S$618.6K, down 17.17% vs the max baseline, while spread is 2.41% (1.13 ticks), wider/worse by 19.01% vs baseline—liquidity is better than 1W/1D but still below the long-run level. Trades are 208 and turnover is.",
        "market_comparison": "ADV (S$618.6K) is far above market median S$11.8K and peer median S$13.8K (+4,368.62% vs peers), and trades (208) exceed market median 7. Spread is 2.41%: better than market 2.51% and secto%, but worse than peers 2.12% (+13.60% worse), while ticks remain low."
      },
      "max": {
        "liquidity": "Across the max window (baseline), notional ADV is S$746.8K with a 2.03% spread (1.05 ticks), 293.5 trades, and 0.5517% turnover—this is the strongest liquidity profile in the dataset. Recent windows show deterioration versus this baseline (lower ADV and wider.",
        "market_comparison": "Baseline ADV (S$746.8K) is far above market median S$15.1K and peer median S$17.0K (+4,291.72% vs peers), and trades (293.5) exceed market median 8.25. Spread is 2.03%: better than market 2.47% and secto%, but still worse than peers 1.96% (+3.60% worse)."
      }
    }
  },
  "q02": {
    "driver_model": {
      "valid": true,
      "model_method": "hybrid_markov_regression_pymc",
      "estimation_window_days": 16,
      "reporting_window_days": 16,
      "available_history_days": 16,
      "n_regimes": 2,
      "current_regime": 0,
      "current_regime_label": "Company-Led",
      "current_regime_probability": 1.0,
      "current_driver_mix": {
        "market_share": {
          "median": 0.4394773445706205,
          "low": 0.4394773445706205,
          "high": 0.4394773445706205
        },
        "sector_share": {
          "median": 0.2437596396345299,
          "low": 0.2437596396345299,
          "high": 0.2437596396345299
        },
        "company_share": {
          "median": 0.31676301579484956,
          "low": 0.31676301579484956,
          "high": 0.31676301579484956
        }
      },
      "current_sensitivities": {
        "beta_market": {
          "median": -0.037540868684595705,
          "low": -0.037540868684595705,
          "high": -0.037540868684595705
        },
        "beta_sector": {
          "median": 6.196511178954035,
          "low": 6.196511178954035,
          "high": 6.196511178954035
        },
        "beta_market_lag": {
          "median": 0.0,
          "low": 0.0,
          "high": 0.0
        },
        "beta_sector_lag": {
          "median": 0.0,
          "low": 0.0,
          "high": 0.0
        }
      },
      "rolling_windows": {
        "p1": {
          "valid": false,
          "n_obs": 0
        },
        "p2": {
          "valid": false,
          "n_obs": 0
        },
        "p3": {
          "valid": false,
          "n_obs": 0
        },
        "p4": {
          "valid": false,
          "n_obs": 0
        },
        "p5": {
          "valid": false,
          "n_obs": 0
        },
        "p6": {
          "valid": true,
          "n_obs": 16,
          "period_label": "2026-01-26 to 2026-02-16",
          "shares": {
            "share_market": 0.4394773445706205,
            "share_sector": 0.2437596396345299,
            "share_idio": 0.31676301579484956
          },
          "regression": {
            "r_squared": null
          }
        }
      },
      "regimes": [
        {
          "id": 0,
          "label": "Company-Led",
          "pct_time": 0.7526404186783565,
          "dominant_driver": "company",
          "dominant_driver_probability": 1.0,
          "expected_duration_days": 3.1685218904266397,
          "current_probability": 1.0,
          "n_days_effective": 12.042246698853704,
          "shares": {
            "market": {
              "median": 0.0067378997623640975,
              "low": 0.0067378997623640975,
              "high": 0.0067378997623640975
            },
            "sector": {
              "median": 0.4041804282714436,
              "low": 0.4041804282714436,
              "high": 0.4041804282714436
            },
            "company": {
              "median": 0.5890816719661922,
              "low": 0.5890816719661922,
              "high": 0.5890816719661922
            }
          },
          "sensitivities": {
            "beta_market": {
              "median": -0.037540868684595705,
              "low": -0.037540868684595705,
              "high": -0.037540868684595705
            },
            "beta_sector": {
              "median": 6.196511178954035,
              "low": 6.196511178954035,
              "high": 6.196511178954035
            },
            "beta_market_lag": {
              "median": 0.0,
              "low": 0.0,
              "high": 0.0
            },
            "beta_sector_lag": {
              "median": 0.0,
              "low": 0.0,
              "high": 0.0
            }
          },
          "volatility": {
            "median": 0.022657452137943738,
            "low": 0.022657452137943738,
            "high": 0.022657452137943738
          },
          "lead_signal": {
            "lead_factor": "none",
            "lead_confidence": null,
            "lead_horizon_days": null
          }
        },
        {
          "id": 1,
          "label": "Market-Led",
          "pct_time": 0.24735958132164348,
          "dominant_driver": "market",
          "dominant_driver_probability": 1.0,
          "expected_duration_days": 1.0000009982547313,
          "current_probability": 0.0,
          "n_days_effective": 3.9577533011462958,
          "shares": {
            "market": {
              "median": 0.8722167893788769,
              "low": 0.8722167893788769,
              "high": 0.8722167893788769
            },
            "sector": {
              "median": 0.08333885099761616,
              "low": 0.08333885099761616,
              "high": 0.08333885099761616
            },
            "company": {
              "median": 0.04444435962350695,
              "low": 0.04444435962350695,
              "high": 0.04444435962350695
            }
          },
          "sensitivities": {
            "beta_market": {
              "median": -3.7527467057944084,
              "low": -3.7527467057944084,
              "high": -3.7527467057944084
            },
            "beta_sector": {
              "median": 1.8540208313105528,
              "low": 1.8540208313105528,
              "high": 1.8540208313105528
            },
            "beta_market_lag": {
              "median": 0.0,
              "low": 0.0,
              "high": 0.0
            },
            "beta_sector_lag": {
              "median": 0.0,
              "low": 0.0,
              "high": 0.0
            }
          },
          "volatility": {
            "median": 0.00120649564934346,
            "low": 0.00120649564934346,
            "high": 0.00120649564934346
          },
          "lead_signal": {
            "lead_factor": "none",
            "lead_confidence": null,
            "lead_horizon_days": null
          }
        }
      ],
      "transitions": {
        "mean": [
          [
            0.6904183212971212,
            0.309581678702879
          ],
          [
            0.8530013357520337,
            0.14699866424796598
          ]
        ],
        "low": [
          [
            0.5364168743034121,
            0.1425659264899454
          ],
          [
            0.6622863199609931,
            0.022804894423926525
          ]
        ],
        "high": [
          [
            0.8574340735100546,
            0.4635831256965879
          ],
          [
            0.9771951055760735,
            0.3377136800390069
          ]
        ],
        "counts": [
          [
            8.0,
            3.0
          ],
          [
            4.0,
            0.0
          ]
        ]
      },
      "methodology": {
        "estimation_window_days": 16,
        "reporting_window_days": 16,
        "regime_inference": "hybrid_markov_bayesian_regression",
        "uncertainty_engine": "pymc_weighted_regime_regressions",
        "lead_horizon_days": 1,
        "distribution": "student_t",
        "history_limited": true
      }
    },
    "regime_switching": {
      "valid": true,
      "regime_method": "hybrid_markov_regression_pymc",
      "n_regimes": 2,
      "regimes": [
        {
          "id": 0,
          "label": "Company-Led",
          "pct_time": 0.7526404186783565,
          "dominant_driver": "company",
          "dominant_driver_probability": 1.0,
          "expected_duration_days": 3.1685218904266397,
          "current_probability": 1.0,
          "n_days_effective": 12.042246698853704,
          "shares": {
            "market": {
              "median": 0.0067378997623640975,
              "low": 0.0067378997623640975,
              "high": 0.0067378997623640975
            },
            "sector": {
              "median": 0.4041804282714436,
              "low": 0.4041804282714436,
              "high": 0.4041804282714436
            },
            "company": {
              "median": 0.5890816719661922,
              "low": 0.5890816719661922,
              "high": 0.5890816719661922
            }
          },
          "sensitivities": {
            "beta_market": {
              "median": -0.037540868684595705,
              "low": -0.037540868684595705,
              "high": -0.037540868684595705
            },
            "beta_sector": {
              "median": 6.196511178954035,
              "low": 6.196511178954035,
              "high": 6.196511178954035
            },
            "beta_market_lag": {
              "median": 0.0,
              "low": 0.0,
              "high": 0.0
            },
            "beta_sector_lag": {
              "median": 0.0,
              "low": 0.0,
              "high": 0.0
            }
          },
          "volatility": {
            "median": 0.022657452137943738,
            "low": 0.022657452137943738,
            "high": 0.022657452137943738
          },
          "lead_signal": {
            "lead_factor": "none",
            "lead_confidence": null,
            "lead_horizon_days": null
          }
        },
        {
          "id": 1,
          "label": "Market-Led",
          "pct_time": 0.24735958132164348,
          "dominant_driver": "market",
          "dominant_driver_probability": 1.0,
          "expected_duration_days": 1.0000009982547313,
          "current_probability": 0.0,
          "n_days_effective": 3.9577533011462958,
          "shares": {
            "market": {
              "median": 0.8722167893788769,
              "low": 0.8722167893788769,
              "high": 0.8722167893788769
            },
            "sector": {
              "median": 0.08333885099761616,
              "low": 0.08333885099761616,
              "high": 0.08333885099761616
            },
            "company": {
              "median": 0.04444435962350695,
              "low": 0.04444435962350695,
              "high": 0.04444435962350695
            }
          },
          "sensitivities": {
            "beta_market": {
              "median": -3.7527467057944084,
              "low": -3.7527467057944084,
              "high": -3.7527467057944084
            },
            "beta_sector": {
              "median": 1.8540208313105528,
              "low": 1.8540208313105528,
              "high": 1.8540208313105528
            },
            "beta_market_lag": {
              "median": 0.0,
              "low": 0.0,
              "high": 0.0
            },
            "beta_sector_lag": {
              "median": 0.0,
              "low": 0.0,
              "high": 0.0
            }
          },
          "volatility": {
            "median": 0.00120649564934346,
            "low": 0.00120649564934346,
            "high": 0.00120649564934346
          },
          "lead_signal": {
            "lead_factor": "none",
            "lead_confidence": null,
            "lead_horizon_days": null
          }
        }
      ],
      "transitions": [
        [
          0.6904183212971212,
          0.309581678702879
        ],
        [
          0.8530013357520337,
          0.14699866424796598
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.6904183212971212,
            0.309581678702879
          ],
          [
            0.8530013357520337,
            0.14699866424796598
          ]
        ],
        "low": [
          [
            0.5364168743034121,
            0.1425659264899454
          ],
          [
            0.6622863199609931,
            0.022804894423926525
          ]
        ],
        "high": [
          [
            0.8574340735100546,
            0.4635831256965879
          ],
          [
            0.9771951055760735,
            0.3377136800390069
          ]
        ],
        "counts": [
          [
            8.0,
            3.0
          ],
          [
            4.0,
            0.0
          ]
        ]
      },
      "current_regime": 0,
      "current_regime_label": "Company-Led",
      "current_regime_probability": 1.0
    }
  },
  "theme": {
    "badges": {
      "header_health": {
        "text": "Liquidity Health: Strong",
        "bg": "bg-emerald-500/20",
        "textColor": "text-emerald-400",
        "dot": "bg-emerald-400"
      },
      "liq_section": {
        "text": "Liquidity score: 81.0% — STRONG",
        "bg": "bg-emerald-500/20",
        "textColor": "text-emerald-400"
      },
      "drivers": {
        "text": "Moderate",
        "bg": "bg-amber-500/20",
        "textColor": "text-amber-400"
      },
      "exec_check": {
        "text": "Moderate",
        "bg": "bg-amber-500/20",
        "textColor": "text-amber-500"
      },
      "intraday": {
        "text": "Moderate",
        "bg": "bg-amber-500/20",
        "textColor": "text-amber-400"
      },
      "short": {
        "text": "Low",
        "bg": "bg-emerald-500/20",
        "textColor": "text-emerald-400"
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
      },
      "perf": {
        "text": "Context",
        "bg": "bg-slate-700/40",
        "textColor": "text-slate-300"
      }
    },
    "borders": {
      "action_plan": "border-emerald-500/30",
      "index": "border-slate-700"
    },
    "colors": {
      "interpretation_good": "interpretation-good",
      "interpretation_neutral": "interpretation-neutral",
      "interpretation_bad": "interpretation-bad"
    }
  },
  "labels": {
    "header_title": "Liquidity Analysis Report",
    "header_meta_line1_tokens": [
      "Toku Ltd",
      "•",
      "TKU",
      "•",
      "Sector: Software - Application",
      "•",
      "Market Cap: 125.5M (small cap)"
    ],
    "header_meta_line2_tokens": [
      "As of: 2026-02-16",
      "•",
      "Universe: 558",
      "•",
      "Peers: 8"
    ],
    "exec_title": "Executive Summary: What Matters for Trading",
    "exec_subtitle": "Top-quintile liquidity score supported by high notional volume, but recent trading costs widened versus its own baseline and peers.",
    "exec_takeaways_title": "Key Takeaways:",
    "metric_liquidity_score": "Liquidity Score",
    "metric_spread": "Trading Cost (Spread)",
    "metric_adv": "Average Traded Volume",
    "metric_drivers": "What Drives Price Changes",
    "footer": "Liquidity Analysis Report • Generated by Deltablock",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Current regime is Company-Led with 1.00 probability; company-specific effects dominate, based on 16 days of history.",
    "drivers_strip": [
      {
        "title": "Key Insight",
        "text": "Company-Led regime is active (prob=1.00) with company as the dominant driver (confidence=1.00)."
      },
      {
        "title": "Market Link",
        "text": "Market explains 43.9% of moves; market sensitivity is near zero (beta -0.04, range -0.04 to -0.04)."
      },
      {
        "title": "Sector Link",
        "text": "Sector explains 24.4% of moves; sector sensitivity is very high (beta 6.20, range 6.20 to 6.20)."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Market / Sector / Company)",
    "drivers_pie_note": "Mix is estimated from 16 available trading days (limited vs 252d target), so this read is directionally useful but not fully stable yet.",
    "lead_lag_title": "Who Tends to Lead?",
    "lead_lag_note": "No stable external lead signal in the current regime; best-fit lags in this sample are market=5 days and sector=0 days.",
    "rolling_title": "How the Driver Mix Evolved (Rolling Window)",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Only one rolling window is available in the provided history, so changes over time cannot be compared yet.",
    "drivers_bottom_line": "Even in a Company-Led regime, market (43.9%) and sector (24.4%) still account for most day-to-day variation; the distinguishing feature is that company effects are the largest single driver (31.7%).",
    "drivers_wtd_title": "Key Takeaways",
    "drivers_wtd_list": [
      "Current regime is Company-Led (prob=1.00), but the market share is still 43.9%, meaning broad tape can still meaningfully move TKU day-to-day.",
      "Sector exposure is strong in direction (beta 6.20) even though sector share is 24.4%, implying software-sector swings can transmit sharply when they matter.",
      "Regime persistence is moderate: stay probability is 0.69 with expected duration ~3.17 days, so the dominant driver can shift within a week."
    ],
    "regime_title": "Price Driver Regimes",
    "regime_subtitle": "Two regimes are observed: Company-Led and Market-Led; current state is Company-Led with full model probability.",
    "regime_badge_text": "Company-Led (prob=1.00)",
    "regime_pie_title": "Time Spent in Each Regime (Sample)",
    "transition_title": "Regime Stickiness (Stay / Switch)",
    "transition_cols": [
      "From \\ To",
      "Company-Led",
      "Market-Led"
    ],
    "transition_note_template": "Stay probabilities from the transition estimate: Company-Led stays 0.69 (switches 0.31); Market-Led stays 0.15 (switches 0.85). Based on 16 days of history.",
    "liq_title": "Liquidity Health & Peer Comparison",
    "liq_subtitle": "Small-cap (S$125.5M) with very high notional trading activity vs peers, but recent spreads have widened versus its own longer-run baseline.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Compares TKU’s trading size and cost vs XSES market median, Software - Application sector median, and 8-stock peer set.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "As of 2026-02-16 | TKU (XSES) | Small cap (125.5M) | Software - Application | 8 peers",
    "perf_insight": "Very strong 1W (+13.6%) but reversal over 2W (-2.0%); long-run max return is -12.3% vs market +2.3%, indicating market confidence remains uneven.",
    "exec_check_title": "Trading Costs & Market Depth",
    "exec_check_subtitle": "As of 2026-02-16 on XSES: spread is 2.06% at mid 0.2425, with top-10 displayed depth 817,638 (bid) vs 1,008,657 (ask).",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth figures reflect displayed top 10 levels per side only (not the full market). Current bid/ask depth ratio is 0.8106, meaning less visible buying than selling at the top 10 levels.",
    "peer_capacity_title": "Historical Capacity (Last-Year Trade Sizes)",
    "peer_capacity_note": "Stress test uses 365 calendar days but only 17 trading days (7,525 trades), so historical sizing is based on a limited window and may be less stable for a newer/less-active name.",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Modeled sell impact is ≈-1.03% across the tested sizes; crossing the spread is an additional cost not included in this impact estimate.",
    "exec_check_insight": "Current spread is 2.06% (2.5 ticks) and displayed buying depth is lighter than selling depth; larger sell sizes observed historically and intraday concentrate meaningful demand consumption into the top-10 bid.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Behavioral personas built from runs of trading (persona_v3_2b); mix shown by trades, notional, and run share.",
    "trader_retail_threshold": "Retail-like: smaller, bursty runs; often higher run share than notional share.",
    "trader_mixed_threshold": "Mixed: behavior not consistently retail-like or institution-like across runs.",
    "trader_instit_threshold": "Institution-like: run patterns consistent with systematic/large-firm style participation.",
    "peer_trader_title": "How You Compare vs Peers",
    "peer_trader_subtitle": "Peer set: 8 stocks; compares shares across trades, notional, and runs (not size buckets).",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Share of trades that change the last price; highlights which personas drive those moves.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Session split and concentration (HHI) show where liquidity clusters through the day.",
    "session_dist_title": "Trading by Session",
    "session_period_label": "Period:",
    "session_dist_note": "Auctions = opening + closing auction activity; Continuous = regular on-screen trading.",
    "hhi_title": "Trading Concentration (HHI)",
    "hhi_note_template": "HHI near 0 means activity is evenly spread across time; higher HHI means volume concentrates into fewer time intervals.",
    "intraday_intensity_title": "Trading Activity by Time of Day",
    "intraday_intensity_note": "Peak time highlights when the largest share of volume trades; concentrated peaks can coincide with higher short-term price sensitivity.",
    "peers_hhi_title": "Peer Comparison: Trading Concentration",
    "peers_hhi_cols": [
      "Ticker",
      "% Auctions",
      "HHI",
      "Interpretation"
    ],
    "peers_hhi_note": "Lower HHI suggests steadier intraday liquidity; higher HHI suggests activity is bunched into fewer windows.",
    "intraday_insight": "Trading is primarily in Continuous (92.0%) with Auctions at 8.0%, so most liquidity is in regular hours. Volume peaks at 09:00 (14.1%), which concentrates activity and can raise short-window price sensitivity.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Short activity is low; past shorting has moderately preceded price weakness.",
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
    "exec_metrics": [
      {
        "title": "Liquidity Score",
        "tooltip": {
          "title": "Composite Liquidity Score",
          "body": "Overall liquidity score (0–100) combining volume, trading cost (spread), activity (trades/day), and related quality signals versus the full universe."
        },
        "value": "81",
        "suffix": "/100",
        "bar_pct": 81,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500/20",
        "subtext": "Rank 107/558 • Top quintile liquidity",
        "interpretation": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Trading Cost (Spread)",
        "tooltip": {
          "title": "Spread (Estimated Trading Cost)",
          "body": "Average bid-ask spread; higher % and more ticks generally mean higher trading cost. Ticks are the minimum price step."
        },
        "value": "2.03",
        "suffix": "%",
        "bar_pct": 10,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500/20",
        "subtext": "Avg spread 2.03% = 1.05 ticks (1 tick = minimum price step). Wider than peers on % (2.03% vs 1.96%), though fewer ticks than peers (1.05 vs 1.28). Recent cost worsened vs baseline: +43.16% (1d, 1d data available), +33.30% (1w), +19.01% (2w).",
        "interpretation": {
          "text": "Moderate",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      },
      {
        "title": "Average Traded Volume",
        "tooltip": {
          "title": "Notional ADV",
          "body": "Average daily traded value in local currency. Higher notional ADV typically supports better liquidity."
        },
        "value": "S$746.8K",
        "suffix": "",
        "bar_pct": 75,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500/20",
        "subtext": "ADV S$746.8K vs peer median S$17.0K (+4291.7%). Recent slowdown vs baseline: -56.13% (1d, 1d data available), -38.62% (1w), -17.17% (2w).",
        "interpretation": {
          "text": "High",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "What Drives Price Changes",
        "tooltip": {
          "title": "Return Drivers Split",
          "body": "Share of price movement explained by broad market, sector, and company-specific factors; higher company share means moves are more stock-specific."
        },
        "value": "31.7",
        "suffix": "company-specific",
        "bar_pct": 32,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500/20",
        "subtext": "Drivers split: 43.9% market, 24.4% sector, 31.7% company-specific—moves are meaningfully influenced by the broader market, not just company news.",
        "interpretation": {
          "text": "Mixed",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Liquidity ranks top-quintile: score 81/100 (rank 107/558), supported by strong activity (293.5 trades/day) and turnover of 0.5517%—despite being a S$125.5M small cap.",
      "Depth is strong versus peers: ADV S$746.8K vs peer median S$17.0K (+4291.7%), but recent participation cooled materially (-56.13% ADV on 1d; -38.62% on 1w), reducing day-to-day liquidity.",
      "Trading cost is slightly worse than peers on percent spread: 2.03% vs 1.96% (+3.60%), and it widened versus baseline (+43.16% on 1d; +33.30% on 1w), indicating higher near-term slippage risk even though ticks are lower (1.05 vs 1.28)."
    ],
    "footer": "Liquidity Analysis Report • Generated by Deltablock",
    "perf_badge": "Context",
    "liq_tiles": [
      {
        "title": "Liquidity Score (max)",
        "value": "81.0% (Rank 107/558)",
        "sub": "Peers median score 46.7% (+34.32)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Notional ADV (max)",
        "value": "S$746.8K",
        "sub": "vs peers S$17.0K (+4,291.72%); 1D S$327.6K (−56.13% vs max)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread (max)",
        "value": "2.03% (1.05 ticks)",
        "sub": "vs peers 1.96% (1.28 ticks); 1D 2.90% (1.40 ticks) (+43.16% worse vs max)",
        "interp": {
          "text": "Moderate",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Long-run liquidity is strong for a small-cap: S$746.8K notional ADV and 293.5 trades with a ~1-tick spread (2.03%, 1.05 ticks). Recent periods show a clear pullback (1D ADV −56.13% vs baseline) alongside wider spreads (+43.16%), signalling higher trading cost.",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "0.2425",
        "note": "Small-cap (market cap 125.5M) with limited displayed liquidity coverage (top 10 levels per side).",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "2.06% (2.5 ticks)",
        "note": "A 2.06% spread is a visible entry/exit cost; intraday median spread is also ≈2.06%, indicating costs stayed elevated most of the day.",
        "color": "text-amber-400"
      },
      {
        "title": "Depth",
        "value": "Bid 817,638 vs Ask 1,008,657 (top-10)",
        "note": "Ask-side depth exceeds bid-side (ratio 0.8106), implying sell pressure may meet less displayed demand in the top-10 book.",
        "color": "text-amber-400"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-1.03% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-6.27% with 81.8% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-6.27% with 32.7% fill.",
        "cls": "warn"
      }
    ],
    "peers_hhi_header": [
      "Ticker",
      "% Auctions",
      "HHI",
      "Interpretation"
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
    "drivers": {
      "overall": "Current driver mix (median) is Market 43.9%, Secto%, Company 31.7%. The model labels this as Company-Led because company is the largest single component, even though external factors sum to 68.3%.",
      "beta": "Market beta is -0.04 (range -0.04 to -0.04), meaning TKU has near-zero directional linkage to the broad market in this sample. Sector beta is 6.20 (range 6.20 to 6.20), meaning when the software sector moves, TKU tends to move strongly in the same direction.",
      "rolling_change": "Latest rolling window (2026-01-26 to 2026-02-16) is Market 43.9%, Secto%, Company 31.7%; no earlier window is provided, so trend direction is unavailable.",
      "interpretation": "Moderate"
    },
    "regime": {
      "overall": "Two-regime structure: Company-Led occurred 75.3% of the time in-sample, while Market-Led occurred 24.7%. This is based on 16 days of history, so regime frequencies are preliminary.",
      "current": "Current regime is Company-Led with probability 1.00; estimated stay probability is 0.69 with expected duration ~3.17 days. No stable lead (market/sector) is detected within the current regime.",
      "transitions": "Company-Led looks moderately sticky (stay 0.69, switch 0.31). Market-Led looks fragile (stay 0.15, switch 0.85), so when the tape dominates it tends to revert quickly in this sample.",
      "trading_implications": "Regimes differ by who dominates price discovery: Company-Led is characterized by company share 0.589 (vs market 0.007), while Market-Led is characterized by market share 0.872 (vs company 0.044); this helps monitor whether moves are idiosyncratic or."
    },
    "liquidity": {
      "overall": "Liquidity is strong on a long-run basis (score 81.0%, rank 107/558), but has deteriorated in the most recent windows as notional ADV fell and spreads widened versus the max baseline.",
      "strengths": [
        "Scale of activity is a clear differentiator: max notional ADV is S$746.8K vs peer median S$17.0K (+4,291.72%), supporting better day-to-day access than typical peers.",
        "Quoting is near 1 tick across periods (max 1.05 ticks; 2W 1.13; 1W 1.19; 1D 1.40), which helps keep the minimum price step small even when percent spread moves."
      ],
      "concerns": [
        "Recent slowdown is material: 1D ADV S$327.6K (−56.13% vs max) and 1W ADV S$458.3K (−38.62%), reducing capacity for larger flows.",
        "Trading cost has worsened vs baseline: spread rose from 2.03% (1.05 ticks) to 2.90% (1.40 ticks) in 1D (+43.16% worse), increasing slippage risk for the same notional size.",
        "Volatility is elevated where available (1W 62.10%, 2W 78.55%, max 70.31%), which can amplify price moves during trading; 1D volatility is unavailable."
      ],
      "peer_context": "TKU is a liquidity leader on notional activity (thousands of percent higher ADV than peers) but a relative laggard on spread versus peers in most windows (1W +13.76% worse; 2W +13.60% worse; max +3.60% worse), meaning peers are generally cheaper to trade per."
    },
    "market_comparison": {
      "adv": "Across all windows, TKU’s notional ADV is far above market/sector/peers, even after the recent pullback (1D S$327.6K vs max S$746.8K). This supports stronger capacity than typical XSES names in its sector.",
      "spread": "Percent spread has widened materially versus TKU’s own baseline (2.03% max to 2.90% 1D), raising trading costs; ticks remain low (~1–1.4), so the minimum quote step is still small but the percent cost is higher.",
      "volatility": "Volatility is high relative to market, sector, and peers where reported, which can translate into larger price swings during trading; the 1D snapshot is unavailable so intraday risk cannot be confirmed for the latest day.",
      "trades": "Trade count is consistently far above market/sector/peers, indicating frequent prints and generally better immediacy (ability to find the other side quickly), even when ADV dips."
    },
    "performance": {
      "overall": "interpretation-neutral",
      "conclusion": "Mixed"
    },
    "execution": {
      "overall": "Trading quality is moderate: spread is 2.06% and visible top-10 bid depth (817,638) is below ask depth (1,008,657), so selling faces higher risk of moving into thinner displayed demand.",
      "concern": "Largest observed sell-side orders (69,000.0 notional) would take 8.44% of top-10 bid depth if crossed; extreme historical sizes (120,541.05) map to 14.74% of top-10 bid depth, implying meaningful depth drawdown risk even before considering spread cost.",
      "peer_context": "Peer/universe comparisons are unavailable in the provided data; interpretation relies on current L2 (top-10) and a 365-day lookback that includes only 17 trading days (7,525 trades), limiting confidence in year-long capacity estimates."
    },
    "trader_composition": {
      "overall": "On the primary window (max), institution-like flow dominates by trades (68.9%) and notional (75.8%), while retail-like is small by trades (5.8%) and notional (1.8%). Runs tell a different story: retail-like is 35.9% of runs vs 32.7% institution-like, meaning.",
      "retail_heavy": "Retail-like presence is run-heavy but cash-light: 35.9% of runs vs only 1.8% of notional (and 5.8% of trades). This points to frequent small participation that shapes message flow more than turnover, while price and liquidity are still set by institution-like.",
      "institutional_gap": "Institution-like share is consistently high across lenses (68.9% of trades; 75.8% of notional), but there is a meaningful unclear share (25.2% of trades; 22.4% of notional; 31.4% of runs). Model strength is mixed: observable runs are 91.9% with 0.0%.",
      "peer_comparison": "Versus peers, TKU sits mid-pack on retail-like trades (5.8% vs U77 2.9% and MZH 11.8%) and has higher retail-like run share (35.9%) than several institutional-tilt peers (e.g., U77 12.8%). Unclear notional (22.4%) is materially higher than U77 (12.5%) but."
    },
    "price_moving": {
      "overall": "10.5% of trades are price-moving (806 of 7,653), meaning most prints do not change the last price. This implies short-term price changes are driven by a minority of transactions, so marginal flow direction matters more than total trade count.",
      "interpretation": "Persona attribution for price-moving trades is not usable in this extract: the mover splits show impossible percentages (e.g., retail=3846.2%, instit=3349.9%), so the retail-like vs institution-like driver of moves is unavailable. Only the 10.5% mover rate.",
      "asymmetry": "Price-moving trades are balanced: 402 positive vs 404 negative movers, so there is no meaningful sign skew in the frequency of moves. Any directional pressure would have to come from size/notional of movers, which is not provided here."
    },
    "intraday": {
      "overall": "Activity is concentrated in Continuous trading (92.0%) with Auctions at 8.0% (Opening 4.3%, Closing 2.9%). Peak volume time is 09:00 with 14.1% of volume, indicating a meaningful early-day clustering of activity.",
      "hhi_interpretation": "HHI is 0.159 on the selected window (18D), labeled moderately concentrated—some time intervals dominate, but liquidity is not extremely bunched. The most recent day is more concentrated (1D HHI 0.301), suggesting day-to-day liquidity distribution can vary.",
      "best_times": "Volume concentration is highest around 09:00 (14.1% of volume), so early trading carries outsized influence on the day’s prints. With 92.0% in Continuous, most price discovery is happening during regular trading rather than auctions.",
      "peer_ranking": "TKU’s HHI (0.159) is the lowest among the listed peers (next is ITS at 0.257), indicating the most even intraday distribution in the peer set. Auction share for peers is not interpretable here because the peer % Auctions values appear corrupted (e.g."
    },
    "short_selling": {
      "overall": "Short ratio stayed low: 2W avg 0.31% (max 1.47%) and 18D avg 0.54% (max 2.74%), implying limited bearish positioning and little squeeze risk on current flow.",
      "level": "Low",
      "correlation": "Returns correlation is -0.296 (moderate negative), meaning higher shorting has tended to coincide with weaker near-term performance; this is a sentiment signal rather than a large positioning overhang.",
      "trend": "Short ratio rose from near zero (1W avg) to 0.31% (2W avg) to 0.54% (18D avg), indicating a mild build versus the most recent week, but still at low absolute levels."
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
        "LVR",
        "U77",
        "NXR",
        "532",
        "KUX",
        "PCT",
        "MZH"
      ],
      "scores": [
        81.00358422939068,
        82.79569892473118,
        56.451612903225815,
        36.91756272401434,
        31.00358422939068,
        18.27956989247312,
        9.31899641577061,
        81.18279569892472,
        86.73835125448028
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
        746773.0,
        874823.5,
        32175.25,
        1833.0,
        551.0,
        35.1,
        0.0,
        1323728.0,
        1559223.0
      ],
      "total": 558
    },
    "market_comparison": {
      "sector_name": "Software - Application",
      "sector_count": 8,
      "market_count": 558,
      "company": {
        "volatility": 0.7031274562654322,
        "adv": 746773.0,
        "spread_pct": 0.020280108086343007,
        "turnover_ratio": 0.005516963166756498,
        "amihud": 2.1246738595747293e-08,
        "trades": 293.5
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.5890536174104172,
          "median": 0.3588461686925809,
          "min": 0.0,
          "max": 8.41567165541555,
          "p5": 0.05233709721148662,
          "p95": 1.5810807631890993,
          "count": 558
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 2996123.997373086,
          "median": 15050.75,
          "min": 0.0,
          "max": 312394834.0,
          "p5": 0.0,
          "p95": 11965581.274999991,
          "count": 558
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.09536144647085577,
          "median": 0.024735375870867146,
          "min": 0.0002598231365279911,
          "max": 1.3043478260869563,
          "p5": 0.0033043389810517667,
          "p95": 0.477665065832382,
          "count": 556
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.003398060886301082,
          "median": 0.00029686383066256593,
          "min": 0.0,
          "max": 0.5784061696658098,
          "p5": 0.0,
          "p95": 0.01098427955455513,
          "count": 551
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 0.00025257310819414643,
          "median": 1.0457703833617035e-07,
          "min": 0.0,
          "max": 0.10869565217391303,
          "p5": 0.0,
          "p95": 7.49937050484905e-05,
          "count": 546
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 401.7903225806452,
          "median": 8.25,
          "min": 0.0,
          "max": 11375.5,
          "p5": 0.0,
          "p95": 2118.9499999999994,
          "count": 558
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.3099084626465809,
          "median": 0.3328672455213104,
          "min": 0.0,
          "max": 0.7031274562654322,
          "p5": 0.0,
          "p95": 0.6258384026375589,
          "count": 8
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 2770892.79375,
          "median": 17004.125,
          "min": 0.0,
          "max": 20510951.5,
          "p5": 12.285000000000002,
          "p95": 13638306.69999999,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.14337142896591462,
          "median": 0.023559224069926138,
          "min": 0.0011806597943234277,
          "max": 0.6666666666666666,
          "p5": 0.003324649387147595,
          "p95": 0.5612180171388489,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.004018921948158752,
          "median": 0.00012851032572712523,
          "min": 0.0,
          "max": 0.014284212054159891,
          "p5": 1.331765886332291e-06,
          "p95": 0.01350729742225512,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 4.6677954522352865e-07,
          "median": 2.1246738595747293e-08,
          "min": 0.0,
          "max": 2.3681184850638975e-06,
          "p5": 1.420174988462331e-10,
          "p95": 1.8511888801771043e-06,
          "count": 7
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 646.8125,
          "median": 7.75,
          "min": 0.0,
          "max": 4684.0,
          "p5": 0.35000000000000003,
          "p95": 3147.324999999998,
          "count": 8
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 474046.10625,
          "median": 17004.125,
          "min": 0.0,
          "max": 1559223.0,
          "p5": 12.285000000000002,
          "p95": 1476799.7499999998,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 135.125,
          "median": 7.75,
          "min": 0.0,
          "max": 684.0,
          "p5": 0.35000000000000003,
          "p95": 514.5999999999997,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.32086622704121415,
          "median": 0.3328672455213104,
          "min": 0.0,
          "max": 0.6319294099987597,
          "p5": 0.0,
          "p95": 0.6006196610367001,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.1429583929587026,
          "median": 0.019576245318108094,
          "min": 0.00730634434524962,
          "max": 0.6666666666666666,
          "p5": 0.007881599445681352,
          "p95": 0.5612180171388489,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 3.5623587565878028,
          "median": 1.2789035069725592,
          "min": 1.0,
          "max": 16.775,
          "p5": 1.0132988625725017,
          "p95": 12.254919354838702,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 4.677394822395208e-07,
          "median": 2.0878699884622888e-08,
          "min": 0.0,
          "max": 2.3681184850638975e-06,
          "p5": 2.2682968457670227e-09,
          "p95": 1.8511888801771043e-06,
          "count": 7
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0033726384684216663,
          "median": 0.00012851032572712523,
          "min": 0.0,
          "max": 0.014284212054159891,
          "p5": 1.331765886332291e-06,
          "p95": 0.012293232127858685,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1W",
        "stock": 0.13636363636363624,
        "market": -0.004485136489176034,
        "sector": 0.002702702702702675,
        "peers": 0.0
      },
      {
        "horizon": "2W",
        "stock": -0.019607843137255054,
        "market": 0.009465965371671992,
        "sector": -0.012660577243910676,
        "peers": 0.0029940119760478723
      },
      {
        "horizon": "MAX",
        "stock": -0.12280701754385948,
        "market": 0.022836153759572486,
        "sector": -0.02456666015426512,
        "peers": -0.0054711785382624
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
      "share_market": 0.4394773445706205,
      "share_sector": 0.2437596396345299,
      "share_idio": 0.31676301579484956,
      "beta_market": -0.037540868684595705,
      "beta_sector": 6.196511178954035,
      "r_squared": 0.2675952353264598,
      "driver_model": {
        "valid": true,
        "model_method": "hybrid_markov_regression_pymc",
        "estimation_window_days": 16,
        "reporting_window_days": 16,
        "available_history_days": 16,
        "n_regimes": 2,
        "current_regime": 0,
        "current_regime_label": "Company-Led",
        "current_regime_probability": 1.0,
        "current_driver_mix": {
          "market_share": {
            "median": 0.4394773445706205,
            "low": 0.4394773445706205,
            "high": 0.4394773445706205
          },
          "sector_share": {
            "median": 0.2437596396345299,
            "low": 0.2437596396345299,
            "high": 0.2437596396345299
          },
          "company_share": {
            "median": 0.31676301579484956,
            "low": 0.31676301579484956,
            "high": 0.31676301579484956
          }
        },
        "current_sensitivities": {
          "beta_market": {
            "median": -0.037540868684595705,
            "low": -0.037540868684595705,
            "high": -0.037540868684595705
          },
          "beta_sector": {
            "median": 6.196511178954035,
            "low": 6.196511178954035,
            "high": 6.196511178954035
          },
          "beta_market_lag": {
            "median": 0.0,
            "low": 0.0,
            "high": 0.0
          },
          "beta_sector_lag": {
            "median": 0.0,
            "low": 0.0,
            "high": 0.0
          }
        },
        "rolling_windows": {
          "p1": {
            "valid": false,
            "n_obs": 0
          },
          "p2": {
            "valid": false,
            "n_obs": 0
          },
          "p3": {
            "valid": false,
            "n_obs": 0
          },
          "p4": {
            "valid": false,
            "n_obs": 0
          },
          "p5": {
            "valid": false,
            "n_obs": 0
          },
          "p6": {
            "valid": true,
            "n_obs": 16,
            "period_label": "2026-01-26 to 2026-02-16",
            "shares": {
              "share_market": 0.4394773445706205,
              "share_sector": 0.2437596396345299,
              "share_idio": 0.31676301579484956
            },
            "regression": {
              "r_squared": null
            }
          }
        },
        "regimes": [
          {
            "id": 0,
            "label": "Company-Led",
            "pct_time": 0.7526404186783565,
            "dominant_driver": "company",
            "dominant_driver_probability": 1.0,
            "expected_duration_days": 3.1685218904266397,
            "current_probability": 1.0,
            "n_days_effective": 12.042246698853704,
            "shares": {
              "market": {
                "median": 0.0067378997623640975,
                "low": 0.0067378997623640975,
                "high": 0.0067378997623640975
              },
              "sector": {
                "median": 0.4041804282714436,
                "low": 0.4041804282714436,
                "high": 0.4041804282714436
              },
              "company": {
                "median": 0.5890816719661922,
                "low": 0.5890816719661922,
                "high": 0.5890816719661922
              }
            },
            "sensitivities": {
              "beta_market": {
                "median": -0.037540868684595705,
                "low": -0.037540868684595705,
                "high": -0.037540868684595705
              },
              "beta_sector": {
                "median": 6.196511178954035,
                "low": 6.196511178954035,
                "high": 6.196511178954035
              },
              "beta_market_lag": {
                "median": 0.0,
                "low": 0.0,
                "high": 0.0
              },
              "beta_sector_lag": {
                "median": 0.0,
                "low": 0.0,
                "high": 0.0
              }
            },
            "volatility": {
              "median": 0.022657452137943738,
              "low": 0.022657452137943738,
              "high": 0.022657452137943738
            },
            "lead_signal": {
              "lead_factor": "none",
              "lead_confidence": null,
              "lead_horizon_days": null
            }
          },
          {
            "id": 1,
            "label": "Market-Led",
            "pct_time": 0.24735958132164348,
            "dominant_driver": "market",
            "dominant_driver_probability": 1.0,
            "expected_duration_days": 1.0000009982547313,
            "current_probability": 0.0,
            "n_days_effective": 3.9577533011462958,
            "shares": {
              "market": {
                "median": 0.8722167893788769,
                "low": 0.8722167893788769,
                "high": 0.8722167893788769
              },
              "sector": {
                "median": 0.08333885099761616,
                "low": 0.08333885099761616,
                "high": 0.08333885099761616
              },
              "company": {
                "median": 0.04444435962350695,
                "low": 0.04444435962350695,
                "high": 0.04444435962350695
              }
            },
            "sensitivities": {
              "beta_market": {
                "median": -3.7527467057944084,
                "low": -3.7527467057944084,
                "high": -3.7527467057944084
              },
              "beta_sector": {
                "median": 1.8540208313105528,
                "low": 1.8540208313105528,
                "high": 1.8540208313105528
              },
              "beta_market_lag": {
                "median": 0.0,
                "low": 0.0,
                "high": 0.0
              },
              "beta_sector_lag": {
                "median": 0.0,
                "low": 0.0,
                "high": 0.0
              }
            },
            "volatility": {
              "median": 0.00120649564934346,
              "low": 0.00120649564934346,
              "high": 0.00120649564934346
            },
            "lead_signal": {
              "lead_factor": "none",
              "lead_confidence": null,
              "lead_horizon_days": null
            }
          }
        ],
        "transitions": {
          "mean": [
            [
              0.6904183212971212,
              0.309581678702879
            ],
            [
              0.8530013357520337,
              0.14699866424796598
            ]
          ],
          "low": [
            [
              0.5364168743034121,
              0.1425659264899454
            ],
            [
              0.6622863199609931,
              0.022804894423926525
            ]
          ],
          "high": [
            [
              0.8574340735100546,
              0.4635831256965879
            ],
            [
              0.9771951055760735,
              0.3377136800390069
            ]
          ],
          "counts": [
            [
              8.0,
              3.0
            ],
            [
              4.0,
              0.0
            ]
          ]
        },
        "methodology": {
          "estimation_window_days": 16,
          "reporting_window_days": 16,
          "regime_inference": "hybrid_markov_bayesian_regression",
          "uncertainty_engine": "pymc_weighted_regime_regressions",
          "lead_horizon_days": 1,
          "distribution": "student_t",
          "history_limited": true
        }
      },
      "lead_lag": {
        "lags": [
          -5,
          -4,
          -3,
          -2,
          -1,
          0,
          1,
          2,
          3,
          4,
          5
        ],
        "corr_market": [
          0.16503120142490824,
          0.24165256612706276,
          -0.19759622083532094,
          -0.17266975467942516,
          -0.11063361058182775,
          -0.0042922855280116985,
          -0.3979374564400219,
          0.16029509432115804,
          -0.1104569337424486,
          -0.3074207471961309,
          0.6589811473543409
        ],
        "corr_sector": [
          -0.47734003198134,
          0.07961963354698474,
          -0.10227145501028297,
          0.17385882179720952,
          -0.25474410902701095,
          0.47877898606165653,
          0.1830748857880929,
          0.1069454091621905,
          -0.22816889837283263,
          0.15133987831793586,
          0.28759361132018696
        ],
        "best": {
          "market": 5,
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
          "valid": true,
          "period_label": "2026-01-26 to 2026-02-16",
          "shares": {
            "share_market": 0.4394773445706205,
            "share_sector": 0.2437596396345299,
            "share_company": 0.31676301579484956
          },
          "regression": {
            "r_squared": null
          }
        }
      },
      "rolling": {
        "ordered": [
          "2026-01-26 to 2026-02-16"
        ],
        "market": [
          43.9
        ],
        "sector": [
          24.4
        ],
        "idio": [
          31.7
        ]
      },
      "regime": {
        "valid": true,
        "regime_method": "hybrid_markov_regression_pymc",
        "n_regimes": 2,
        "current_regime_label": "Company-Led",
        "current_regime_probability": 1.0,
        "labels": [
          "Company-Led",
          "Market-Led"
        ],
        "pct_time": [
          0.7526404186783565,
          0.24735958132164348
        ],
        "current_regime": 0,
        "regimes": [
          {
            "id": 0,
            "label": "Company-Led",
            "pct_time": 0.7526404186783565,
            "dominant_driver": "company",
            "dominant_driver_probability": 1.0,
            "expected_duration_days": 3.1685218904266397,
            "current_probability": 1.0,
            "n_days_effective": 12.042246698853704,
            "shares": {
              "market": {
                "median": 0.0067378997623640975,
                "low": 0.0067378997623640975,
                "high": 0.0067378997623640975
              },
              "sector": {
                "median": 0.4041804282714436,
                "low": 0.4041804282714436,
                "high": 0.4041804282714436
              },
              "company": {
                "median": 0.5890816719661922,
                "low": 0.5890816719661922,
                "high": 0.5890816719661922
              }
            },
            "sensitivities": {
              "beta_market": {
                "median": -0.037540868684595705,
                "low": -0.037540868684595705,
                "high": -0.037540868684595705
              },
              "beta_sector": {
                "median": 6.196511178954035,
                "low": 6.196511178954035,
                "high": 6.196511178954035
              },
              "beta_market_lag": {
                "median": 0.0,
                "low": 0.0,
                "high": 0.0
              },
              "beta_sector_lag": {
                "median": 0.0,
                "low": 0.0,
                "high": 0.0
              }
            },
            "volatility": {
              "median": 0.022657452137943738,
              "low": 0.022657452137943738,
              "high": 0.022657452137943738
            },
            "lead_signal": {
              "lead_factor": "none",
              "lead_confidence": null,
              "lead_horizon_days": null
            }
          },
          {
            "id": 1,
            "label": "Market-Led",
            "pct_time": 0.24735958132164348,
            "dominant_driver": "market",
            "dominant_driver_probability": 1.0,
            "expected_duration_days": 1.0000009982547313,
            "current_probability": 0.0,
            "n_days_effective": 3.9577533011462958,
            "shares": {
              "market": {
                "median": 0.8722167893788769,
                "low": 0.8722167893788769,
                "high": 0.8722167893788769
              },
              "sector": {
                "median": 0.08333885099761616,
                "low": 0.08333885099761616,
                "high": 0.08333885099761616
              },
              "company": {
                "median": 0.04444435962350695,
                "low": 0.04444435962350695,
                "high": 0.04444435962350695
              }
            },
            "sensitivities": {
              "beta_market": {
                "median": -3.7527467057944084,
                "low": -3.7527467057944084,
                "high": -3.7527467057944084
              },
              "beta_sector": {
                "median": 1.8540208313105528,
                "low": 1.8540208313105528,
                "high": 1.8540208313105528
              },
              "beta_market_lag": {
                "median": 0.0,
                "low": 0.0,
                "high": 0.0
              },
              "beta_sector_lag": {
                "median": 0.0,
                "low": 0.0,
                "high": 0.0
              }
            },
            "volatility": {
              "median": 0.00120649564934346,
              "low": 0.00120649564934346,
              "high": 0.00120649564934346
            },
            "lead_signal": {
              "lead_factor": "none",
              "lead_confidence": null,
              "lead_horizon_days": null
            }
          }
        ],
        "transitions": [
          [
            0.6904183212971212,
            0.309581678702879
          ],
          [
            0.8530013357520337,
            0.14699866424796598
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 0.24,
          "quantity": 990300.0,
          "value": 237672.0
        },
        {
          "level": 2,
          "price": 0.235,
          "quantity": 507000.0,
          "value": 119145.0
        },
        {
          "level": 3,
          "price": 0.23,
          "quantity": 305000.0,
          "value": 70150.0
        },
        {
          "level": 4,
          "price": 0.225,
          "quantity": 482800.0,
          "value": 108630.0
        },
        {
          "level": 5,
          "price": 0.22,
          "quantity": 742300.0,
          "value": 163306.0
        },
        {
          "level": 6,
          "price": 0.215,
          "quantity": 319000.0,
          "value": 68585.0
        },
        {
          "level": 7,
          "price": 0.21,
          "quantity": 101000.0,
          "value": 21210.0
        },
        {
          "level": 8,
          "price": 0.2,
          "quantity": 100000.0,
          "value": 20000.0
        },
        {
          "level": 9,
          "price": 0.18,
          "quantity": 20000.0,
          "value": 3600.0
        },
        {
          "level": 10,
          "price": 0.178,
          "quantity": 30000.0,
          "value": 5340.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.245,
          "quantity": 200000.0,
          "value": 49000.0
        },
        {
          "level": 2,
          "price": 0.25,
          "quantity": 1002400.0,
          "value": 250600.0
        },
        {
          "level": 3,
          "price": 0.255,
          "quantity": 170500.0,
          "value": 43477.5
        },
        {
          "level": 4,
          "price": 0.26,
          "quantity": 200600.0,
          "value": 52156.0
        },
        {
          "level": 5,
          "price": 0.265,
          "quantity": 545400.0,
          "value": 144531.0
        },
        {
          "level": 6,
          "price": 0.27,
          "quantity": 530500.0,
          "value": 143235.0
        },
        {
          "level": 7,
          "price": 0.275,
          "quantity": 236500.0,
          "value": 65037.50000000001
        },
        {
          "level": 8,
          "price": 0.28,
          "quantity": 569000.0,
          "value": 159320.00000000003
        },
        {
          "level": 9,
          "price": 0.285,
          "quantity": 69000.0,
          "value": 19665.0
        },
        {
          "level": 10,
          "price": 0.29,
          "quantity": 281500.0,
          "value": 81635.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-02-16 03:59:58.045100",
        "mid_price": 0.2425,
        "spread_pct": 0.020618556701030948,
        "spread_ticks": 2.5,
        "tick_size": 0.002,
        "bid_depth_notional_top10": 817638.0,
        "ask_depth_notional_top10": 1008657.0,
        "bid_ask_depth_ratio": 0.8106
      },
      "historical_trade_scenarios": {
        "valid": true,
        "lookback_calendar_days": 365,
        "trade_days_used": 17,
        "n_trades_used": 7525,
        "first_trade_date": "2026-01-22",
        "last_trade_date": "2026-02-13",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 10010.2,
            "impact_pct": -0.010308999999999999,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 1.22,
            "pct_of_adv": 1.34
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 14000.0,
            "impact_pct": -0.010308999999999999,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 1.71,
            "pct_of_adv": 1.87
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 120541.05,
            "impact_pct": -0.010308999999999999,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 14.74,
            "pct_of_adv": 16.14
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-02-16",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "8114052490481600512",
            "timestamp": "2026-02-16 01:42:48.072600000",
            "posted_price": 0.3,
            "size_shares": 230000.0,
            "notional": 69000.0,
            "impact_pct": -0.010308999999999999,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 8.44,
            "price_vs_mid_pct": 23.711,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "8107536509697760256",
            "timestamp": "2026-02-15 22:59:01.835200000",
            "posted_price": 0.32,
            "size_shares": 200000.0,
            "notional": 64000.0,
            "impact_pct": -0.010308999999999999,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 7.83,
            "price_vs_mid_pct": 31.959,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "8114052490482350080",
            "timestamp": "2026-02-16 03:36:33.809100000",
            "posted_price": 0.245,
            "size_shares": 250000.0,
            "notional": 61250.0,
            "impact_pct": -0.010308999999999999,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 7.49,
            "price_vs_mid_pct": 1.031,
            "executed_event_count": 0,
            "event_count": 1
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-02-16",
        "bucket_minutes": 30,
        "tick_size": 0.001,
        "rows": [
          {
            "bucket": "09:00",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 5.000000000000004,
            "bid_depth_notional": 559468.5,
            "ask_depth_notional": 940652.5,
            "mid_price": 0.2375
          },
          {
            "bucket": "09:30",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 5.000000000000004,
            "bid_depth_notional": 1068884.0,
            "ask_depth_notional": 936638.0,
            "mid_price": 0.2425
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.04081632653061228,
            "spread_ticks": 10.000000000000009,
            "bid_depth_notional": 1141949.0,
            "ask_depth_notional": 989668.5,
            "mid_price": 0.245
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 5.000000000000004,
            "bid_depth_notional": 1165783.0,
            "ask_depth_notional": 1010180.0,
            "mid_price": 0.2425
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 5.000000000000004,
            "bid_depth_notional": 842483.0,
            "ask_depth_notional": 1011380.0,
            "mid_price": 0.2425
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 5.000000000000004,
            "bid_depth_notional": 817638.0,
            "ask_depth_notional": 1008657.0,
            "mid_price": 0.2425
          }
        ],
        "summary": {
          "median_spread_pct": 0.020618556701030948,
          "median_spread_ticks": 5.000000000000004,
          "median_bid_depth_notional": 955683.5,
          "median_ask_depth_notional": 999162.75,
          "tightest_bucket": "09:30",
          "widest_bucket": "10:00",
          "deepest_bid_bucket": "10:30",
          "thinnest_bid_bucket": "09:00"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 6.7,
      "peers": [
        {
          "ticker": "MZH",
          "pct": 72.2
        },
        {
          "ticker": "PCT",
          "pct": 73.5
        },
        {
          "ticker": "ITS",
          "pct": 134.9
        },
        {
          "ticker": "LVR",
          "pct": 3215.4
        },
        {
          "ticker": "NXR",
          "pct": 53995.7
        },
        {
          "ticker": "U77",
          "pct": 54555.4
        },
        {
          "ticker": "532",
          "pct": 2849002.8
        },
        {
          "ticker": "KUX",
          "pct": null
        }
      ]
    },
    "trader_composition": {
      "primary_period": "max",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 129,
          "n_runs": 43,
          "n_trade_days": 1,
          "first_trade_date": "2026-02-16",
          "last_trade_date": "2026-02-16",
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
            "retail_pct": 0.11627906976744186,
            "mixed_pct": 0.0,
            "instit_pct": 0.7054263565891473,
            "ambiguous_pct": 0.06201550387596899,
            "unobservable_pct": 0.11627906976744186,
            "unclear_pct": 0.17829457364341084,
            "retail_qty_pct": 0.0011446886446886447,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.933531746031746,
            "ambiguous_qty_pct": 0.011752136752136752,
            "unobservable_qty_pct": 0.05357142857142857,
            "unclear_qty_pct": 0.06532356532356531,
            "retail_notional_pct": 0.001171977419691116,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.9336821887862926,
            "ambiguous_notional_pct": 0.011763999759918372,
            "unobservable_notional_pct": 0.05338183403409791,
            "unclear_notional_pct": 0.06514583379401628
          },
          "run_composition": {
            "retail_pct": 0.3488372093023256,
            "mixed_pct": 0.0,
            "instit_pct": 0.23255813953488372,
            "ambiguous_pct": 0.11627906976744186,
            "unobservable_pct": 0.3023255813953488,
            "unclear_pct": 0.41860465116279066,
            "retail_notional_pct": 0.0011738314681752457,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.935159258239759,
            "unclear_notional_pct": 0.06366691029206573
          },
          "confidence": {
            "high": 0.0,
            "medium": 0.23255813953488372,
            "low": 0.3488372093023256,
            "na": 0.4186046511627907
          },
          "observability": {
            "avg_feature_coverage": 0.6860465116279071,
            "observable_run_pct": 0.6976744186046512,
            "ambiguous_run_pct": 0.11627906976744186,
            "unobservable_run_pct": 0.3023255813953488
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Mixed (Retail Tilt)",
          "dominant_share": 0.3488372093023256,
          "dominance_gap": 0.04651162790697677,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 67,
              "MULTI_FILL_SINGLE_PRICE": 61,
              "UNOBSERVABLE": 1
            },
            "d2_information": {
              "UNOBSERVABLE": 129
            },
            "d3_urgency": {
              "IMMEDIATE": 43
            },
            "participant_confidence": {
              "NA": 18,
              "LOW": 15,
              "MEDIUM": 10
            }
          },
          "trade_size": {
            "avg": 2453.9457364341083,
            "median": 857.5
          },
          "run_size": {
            "avg": 7350.209302325581,
            "median": 49.0,
            "avg_length": 1.9534883720930232
          },
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.11627906976744186,
              "mixed_pct": 0.0,
              "instit_pct": 0.7054263565891473,
              "ambiguous_pct": 0.06201550387596899,
              "unobservable_pct": 0.11627906976744186,
              "unclear_pct": 0.17829457364341084,
              "retail_qty_pct": 0.0011446886446886447,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.933531746031746,
              "ambiguous_qty_pct": 0.011752136752136752,
              "unobservable_qty_pct": 0.05357142857142857,
              "unclear_qty_pct": 0.06532356532356531,
              "retail_notional_pct": 0.001171977419691116,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.9336821887862926,
              "ambiguous_notional_pct": 0.011763999759918372,
              "unobservable_notional_pct": 0.05338183403409791,
              "unclear_notional_pct": 0.06514583379401628,
              "run_retail_pct": 0.3488372093023256,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.23255813953488372,
              "run_unclear_pct": 0.41860465116279066,
              "avg_trade_size": 2453.9457364341083,
              "avg_run_notional": 7350.209302325581,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed (Retail Tilt)",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.23255813953488372,
              "low_confidence_pct": 0.3488372093023256,
              "avg_feature_coverage": 0.6860465116279071,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.02531645569620253,
              "mixed_pct": 0.0,
              "instit_pct": 0.7341772151898734,
              "ambiguous_pct": 0.13924050632911392,
              "unobservable_pct": 0.10126582278481013,
              "unclear_pct": 0.24050632911392406,
              "retail_qty_pct": 0.0022007042253521128,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.8371478873239436,
              "ambiguous_qty_pct": 0.0721830985915493,
              "unobservable_qty_pct": 0.08846830985915492,
              "unclear_qty_pct": 0.16065140845070422,
              "retail_notional_pct": 0.00219846287065411,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.837461807315946,
              "ambiguous_notional_pct": 0.07196152241310463,
              "unobservable_notional_pct": 0.08837820740029523,
              "unclear_notional_pct": 0.16033972981339986,
              "run_retail_pct": 0.16666666666666666,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.5,
              "run_unclear_pct": 0.3333333333333333,
              "avg_trade_size": 2821.3037974683543,
              "avg_run_notional": 16932.083333333332,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Institutional Tilt",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.6666666666666666,
              "avg_feature_coverage": 0.7791666666666667,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "MZH",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.13844515441959532,
              "mixed_pct": 0.0,
              "instit_pct": 0.45686900958466453,
              "ambiguous_pct": 0.33865814696485624,
              "unobservable_pct": 0.06602768903088392,
              "unclear_pct": 0.40468583599574015,
              "retail_qty_pct": 0.025871015567086732,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.7126019273535953,
              "ambiguous_qty_pct": 0.10455893254262416,
              "unobservable_qty_pct": 0.15696812453669384,
              "unclear_qty_pct": 0.261527057079318,
              "retail_notional_pct": 0.025880927520184324,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.7124698691090089,
              "ambiguous_notional_pct": 0.10462417483667152,
              "unobservable_notional_pct": 0.1570250285341353,
              "unclear_notional_pct": 0.2616492033708068,
              "run_retail_pct": 0.47685185185185186,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.16203703703703703,
              "run_unclear_pct": 0.3611111111111111,
              "avg_trade_size": 1796.6075612353568,
              "avg_run_notional": 6903.3287037037035,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail Tilt",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.375,
              "low_confidence_pct": 0.2638888888888889,
              "avg_feature_coverage": 0.7645833333333333,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "PCT",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.0935672514619883,
              "mixed_pct": 0.0,
              "instit_pct": 0.45614035087719296,
              "ambiguous_pct": 0.12280701754385964,
              "unobservable_pct": 0.32748538011695905,
              "unclear_pct": 0.4502923976608187,
              "retail_qty_pct": 0.019941572462847706,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.5094627206909691,
              "ambiguous_qty_pct": 0.1298107455861806,
              "unobservable_qty_pct": 0.3407849612600025,
              "unclear_qty_pct": 0.4705957068461831,
              "retail_notional_pct": 0.019980607568536694,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.5094913145690215,
              "ambiguous_notional_pct": 0.13037568262273488,
              "unobservable_notional_pct": 0.3401523952397069,
              "unclear_notional_pct": 0.4705280778624418,
              "run_retail_pct": 0.25,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.2708333333333333,
              "run_unclear_pct": 0.47916666666666663,
              "avg_trade_size": 6393.040935672515,
              "avg_run_notional": 21348.125,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed (Institutional Tilt)",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.20833333333333334,
              "low_confidence_pct": 0.3125,
              "avg_feature_coverage": 0.7229166666666668,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "LVR",
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
              "avg_trade_size": 837.0,
              "avg_run_notional": 837.0,
              "dominant_bucket": "UNOBSERVABLE",
              "dominant_label": "Not Observable",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.0,
              "avg_feature_coverage": 0.55,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "U77",
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
              "avg_trade_size": 225.0,
              "avg_run_notional": 225.0,
              "dominant_bucket": "UNOBSERVABLE",
              "dominant_label": "Not Observable",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.0,
              "avg_feature_coverage": 0.55,
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
          "n_trades": 790,
          "n_runs": 162,
          "n_trade_days": 5,
          "first_trade_date": "2026-02-10",
          "last_trade_date": "2026-02-16",
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
            "retail_pct": 0.06455696202531645,
            "mixed_pct": 0.0,
            "instit_pct": 0.6974683544303798,
            "ambiguous_pct": 0.11265822784810127,
            "unobservable_pct": 0.12531645569620253,
            "unclear_pct": 0.2379746835443038,
            "retail_qty_pct": 0.014178597026445887,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7408891257603881,
            "ambiguous_qty_pct": 0.07231727712127617,
            "unobservable_qty_pct": 0.1726150000918898,
            "unclear_qty_pct": 0.24493227721316596,
            "retail_notional_pct": 0.014188555560245869,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7428948660530795,
            "ambiguous_notional_pct": 0.07203667546403296,
            "unobservable_notional_pct": 0.17087990292264169,
            "unclear_notional_pct": 0.24291657838667463
          },
          "run_composition": {
            "retail_pct": 0.2962962962962963,
            "mixed_pct": 0.0,
            "instit_pct": 0.30246913580246915,
            "ambiguous_pct": 0.20987654320987653,
            "unobservable_pct": 0.19135802469135801,
            "unclear_pct": 0.4012345679012346,
            "retail_notional_pct": 0.014590391514065961,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7639344895595696,
            "unclear_notional_pct": 0.2214751189263645
          },
          "confidence": {
            "high": 0.0,
            "medium": 0.12345679012345678,
            "low": 0.47530864197530864,
            "na": 0.4012345679012346
          },
          "observability": {
            "avg_feature_coverage": 0.7277777777777779,
            "observable_run_pct": 0.808641975308642,
            "ambiguous_run_pct": 0.20987654320987653,
            "unobservable_run_pct": 0.19135802469135801
          },
          "dominant_bucket": "INSTITUTIONAL",
          "dominant_label": "Mixed (Institutional Tilt)",
          "dominant_share": 0.30246913580246915,
          "dominance_gap": 0.006172839506172867,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 468,
              "SINGLE_FILL": 293,
              "UNOBSERVABLE": 29
            },
            "d2_information": {
              "UNOBSERVABLE": 790
            },
            "d3_urgency": {
              "IMMEDIATE": 161,
              "ADAPTIVE": 1
            },
            "participant_confidence": {
              "LOW": 77,
              "NA": 65,
              "MEDIUM": 20
            }
          },
          "trade_size": {
            "avg": 3133.609493670886,
            "median": 1023.25
          },
          "run_size": {
            "avg": 14860.32098765432,
            "median": 3516.0,
            "avg_length": 2.3950617283950617
          },
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.06455696202531645,
              "mixed_pct": 0.0,
              "instit_pct": 0.6974683544303798,
              "ambiguous_pct": 0.11265822784810127,
              "unobservable_pct": 0.12531645569620253,
              "unclear_pct": 0.2379746835443038,
              "retail_qty_pct": 0.014178597026445887,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.7408891257603881,
              "ambiguous_qty_pct": 0.07231727712127617,
              "unobservable_qty_pct": 0.1726150000918898,
              "unclear_qty_pct": 0.24493227721316596,
              "retail_notional_pct": 0.014188555560245869,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.7428948660530795,
              "ambiguous_notional_pct": 0.07203667546403296,
              "unobservable_notional_pct": 0.17087990292264169,
              "unclear_notional_pct": 0.24291657838667463,
              "run_retail_pct": 0.2962962962962963,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.30246913580246915,
              "run_unclear_pct": 0.4012345679012346,
              "avg_trade_size": 3133.609493670886,
              "avg_run_notional": 14860.32098765432,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed (Institutional Tilt)",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.12345679012345678,
              "low_confidence_pct": 0.47530864197530864,
              "avg_feature_coverage": 0.7277777777777779,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "MZH",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.09358490566037736,
              "mixed_pct": 0.0,
              "instit_pct": 0.6279245283018868,
              "ambiguous_pct": 0.1939622641509434,
              "unobservable_pct": 0.08452830188679246,
              "unclear_pct": 0.27849056603773586,
              "retail_qty_pct": 0.02011451242859728,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.7759255825590825,
              "ambiguous_qty_pct": 0.07431467908148791,
              "unobservable_qty_pct": 0.12964522593083236,
              "unclear_qty_pct": 0.20395990501232025,
              "retail_notional_pct": 0.020297965022438486,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.7771457099784469,
              "ambiguous_notional_pct": 0.07451311571491358,
              "unobservable_notional_pct": 0.12804320928420104,
              "unclear_notional_pct": 0.20255632499911463,
              "run_retail_pct": 0.43920145190562615,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.23411978221415608,
              "run_unclear_pct": 0.32667876588021777,
              "avg_trade_size": 3521.535283018868,
              "avg_run_notional": 23772.526315789473,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail Tilt",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.2885662431941924,
              "low_confidence_pct": 0.38475499092558985,
              "avg_feature_coverage": 0.7617513611615245,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.07527703477264043,
              "mixed_pct": 0.0,
              "instit_pct": 0.623232709209018,
              "ambiguous_pct": 0.14329384791746275,
              "unobservable_pct": 0.15819640810087887,
              "unclear_pct": 0.3014902560183416,
              "retail_qty_pct": 0.02331325106079746,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.7295128429371943,
              "ambiguous_qty_pct": 0.07811842062643734,
              "unobservable_qty_pct": 0.16905548537557089,
              "unclear_qty_pct": 0.24717390600200823,
              "retail_notional_pct": 0.023875755429408604,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.7320485090612366,
              "ambiguous_notional_pct": 0.07866392206685205,
              "unobservable_notional_pct": 0.16541181344250278,
              "unclear_notional_pct": 0.24407573550935482,
              "run_retail_pct": 0.345,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.325,
              "run_unclear_pct": 0.32999999999999996,
              "avg_trade_size": 4312.615246465418,
              "avg_run_notional": 26581.34875,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed (Retail Tilt)",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.16,
              "low_confidence_pct": 0.51,
              "avg_feature_coverage": 0.7496250000000001,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "PCT",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.07128099173553719,
              "mixed_pct": 0.0,
              "instit_pct": 0.6115702479338843,
              "ambiguous_pct": 0.1487603305785124,
              "unobservable_pct": 0.1683884297520661,
              "unclear_pct": 0.3171487603305785,
              "retail_qty_pct": 0.014540987268259996,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.7060308242126424,
              "ambiguous_qty_pct": 0.11565780656689748,
              "unobservable_qty_pct": 0.16377038195220014,
              "unclear_qty_pct": 0.2794281885190976,
              "retail_notional_pct": 0.014450767495127324,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.7091543828508782,
              "ambiguous_notional_pct": 0.11530729582339291,
              "unobservable_notional_pct": 0.1610875538306016,
              "unclear_notional_pct": 0.2763948496539945,
              "run_retail_pct": 0.2079646017699115,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.336283185840708,
              "run_unclear_pct": 0.4557522123893806,
              "avg_trade_size": 6747.761363636364,
              "avg_run_notional": 28127.55309734513,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed (Institutional Tilt)",
              "high_confidence_pct": 0.02654867256637168,
              "medium_confidence_pct": 0.22123893805309736,
              "low_confidence_pct": 0.29646017699115046,
              "avg_feature_coverage": 0.732079646017699,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.18032786885245902,
              "mixed_pct": 0.0,
              "instit_pct": 0.47540983606557374,
              "ambiguous_pct": 0.13114754098360656,
              "unobservable_pct": 0.21311475409836064,
              "unclear_pct": 0.3442622950819672,
              "retail_qty_pct": 0.01486374896779521,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.6449215524360034,
              "ambiguous_qty_pct": 0.08505367464905036,
              "unobservable_qty_pct": 0.2551610239471511,
              "unclear_qty_pct": 0.34021469859620146,
              "retail_notional_pct": 0.01493876049996188,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.6446987805917203,
              "ambiguous_notional_pct": 0.08555142458639232,
              "unobservable_notional_pct": 0.2548110343219256,
              "unclear_notional_pct": 0.3403624589083179,
              "run_retail_pct": 0.30303030303030304,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.30303030303030304,
              "run_unclear_pct": 0.3939393939393939,
              "avg_trade_size": 1827.6803278688524,
              "avg_run_notional": 3375.6363636363635,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed (Retail Tilt)",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.6060606060606061,
              "avg_feature_coverage": 0.6893939393939394,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.2857142857142857,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.7142857142857143,
              "unclear_pct": 0.7142857142857143,
              "retail_qty_pct": 0.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.6226415094339622,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.37735849056603776,
              "unclear_qty_pct": 0.37735849056603776,
              "retail_notional_pct": 0.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.6252631578947369,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.37473684210526315,
              "unclear_notional_pct": 0.37473684210526315,
              "run_retail_pct": 0.0,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.5,
              "run_unclear_pct": 0.5,
              "avg_trade_size": 678.5714285714286,
              "avg_run_notional": 1597.5,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed (Institutional Tilt)",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5,
              "avg_feature_coverage": 0.7000000000000001,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "NXR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.14285714285714285,
              "mixed_pct": 0.0,
              "instit_pct": 0.42857142857142855,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.42857142857142855,
              "unclear_pct": 0.42857142857142855,
              "retail_qty_pct": 0.021611001964636542,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.5707269155206287,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.4076620825147348,
              "unclear_qty_pct": 0.4076620825147348,
              "retail_notional_pct": 0.021339850343906678,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.5708850872993878,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.4077750623567056,
              "unclear_notional_pct": 0.4077750623567056,
              "run_retail_pct": 0.25,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.5,
              "run_unclear_pct": 0.25,
              "avg_trade_size": 5670.142857142857,
              "avg_run_notional": 9922.75,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Institutional Tilt",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.75,
              "avg_feature_coverage": 0.6625000000000001,
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
              "instit_pct": 0.3333333333333333,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.6666666666666666,
              "unclear_pct": 0.6666666666666666,
              "retail_qty_pct": 0.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.5,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.5,
              "unclear_qty_pct": 0.5,
              "retail_notional_pct": 0.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.5,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.5,
              "unclear_notional_pct": 0.5,
              "run_retail_pct": 0.0,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 1.0,
              "run_unclear_pct": 0.0,
              "avg_trade_size": 40.0,
              "avg_run_notional": 60.0,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Institutional Tilt",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 1.0,
              "avg_feature_coverage": 0.7000000000000001,
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
          "n_trades": 2178,
          "n_runs": 304,
          "n_trade_days": 10,
          "first_trade_date": "2026-02-03",
          "last_trade_date": "2026-02-16",
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
            "retail_pct": 0.0472910927456382,
            "mixed_pct": 0.0,
            "instit_pct": 0.6974288337924701,
            "ambiguous_pct": 0.14830119375573922,
            "unobservable_pct": 0.10697887970615243,
            "unclear_pct": 0.25528007346189163,
            "retail_qty_pct": 0.01399008508314862,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7098313885584319,
            "ambiguous_qty_pct": 0.10865186781557243,
            "unobservable_qty_pct": 0.16752665854284712,
            "unclear_qty_pct": 0.27617852635841955,
            "retail_notional_pct": 0.014020653747575612,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7151024542531053,
            "ambiguous_notional_pct": 0.10767053999425284,
            "unobservable_notional_pct": 0.16320635200506628,
            "unclear_notional_pct": 0.27087689199931914
          },
          "run_composition": {
            "retail_pct": 0.2730263157894737,
            "mixed_pct": 0.0,
            "instit_pct": 0.33881578947368424,
            "ambiguous_pct": 0.24671052631578946,
            "unobservable_pct": 0.14144736842105263,
            "unclear_pct": 0.3881578947368421,
            "retail_notional_pct": 0.014746690082081489,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7521328505548367,
            "unclear_notional_pct": 0.2331204593630818
          },
          "confidence": {
            "high": 0.0,
            "medium": 0.125,
            "low": 0.4868421052631579,
            "na": 0.3881578947368421
          },
          "observability": {
            "avg_feature_coverage": 0.752467105263158,
            "observable_run_pct": 0.8585526315789473,
            "ambiguous_run_pct": 0.24671052631578946,
            "unobservable_run_pct": 0.14144736842105263
          },
          "dominant_bucket": "INSTITUTIONAL",
          "dominant_label": "Mixed (Institutional Tilt)",
          "dominant_share": 0.33881578947368424,
          "dominance_gap": 0.06578947368421056,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 1303,
              "SINGLE_FILL": 754,
              "UNOBSERVABLE": 109,
              "WALK_BOOK": 12
            },
            "d2_information": {
              "UNOBSERVABLE": 2178
            },
            "d3_urgency": {
              "IMMEDIATE": 301,
              "ADAPTIVE": 3
            },
            "participant_confidence": {
              "LOW": 148,
              "NA": 118,
              "MEDIUM": 38
            }
          },
          "trade_size": {
            "avg": 3010.2350780532597,
            "median": 955.0
          },
          "run_size": {
            "avg": 20504.935855263157,
            "median": 5162.75,
            "avg_length": 3.4473684210526314
          },
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.0472910927456382,
              "mixed_pct": 0.0,
              "instit_pct": 0.6974288337924701,
              "ambiguous_pct": 0.14830119375573922,
              "unobservable_pct": 0.10697887970615243,
              "unclear_pct": 0.25528007346189163,
              "retail_qty_pct": 0.01399008508314862,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.7098313885584319,
              "ambiguous_qty_pct": 0.10865186781557243,
              "unobservable_qty_pct": 0.16752665854284712,
              "unclear_qty_pct": 0.27617852635841955,
              "retail_notional_pct": 0.014020653747575612,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.7151024542531053,
              "ambiguous_notional_pct": 0.10767053999425284,
              "unobservable_notional_pct": 0.16320635200506628,
              "unclear_notional_pct": 0.27087689199931914,
              "run_retail_pct": 0.2730263157894737,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.33881578947368424,
              "run_unclear_pct": 0.3881578947368421,
              "avg_trade_size": 3010.2350780532597,
              "avg_run_notional": 20504.935855263157,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed (Institutional Tilt)",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.125,
              "low_confidence_pct": 0.4868421052631579,
              "avg_feature_coverage": 0.752467105263158,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.04819277108433735,
              "mixed_pct": 0.0,
              "instit_pct": 0.7710843373493976,
              "ambiguous_pct": 0.012048192771084338,
              "unobservable_pct": 0.1686746987951807,
              "unclear_pct": 0.18072289156626506,
              "retail_qty_pct": 0.015984748496847046,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.9203695556533216,
              "ambiguous_qty_pct": 0.002786332306789852,
              "unobservable_qty_pct": 0.0608593635430415,
              "unclear_qty_pct": 0.06364569584983135,
              "retail_notional_pct": 0.01631285615880769,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.9204615191934373,
              "ambiguous_notional_pct": 0.0027960423320182856,
              "unobservable_notional_pct": 0.06042958231573674,
              "unclear_notional_pct": 0.06322562464775502,
              "run_retail_pct": 0.21052631578947367,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.5263157894736842,
              "run_unclear_pct": 0.2631578947368421,
              "avg_trade_size": 1923.9759036144578,
              "avg_run_notional": 8225.236842105263,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Institutional Tilt",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.7368421052631579,
              "avg_feature_coverage": 0.7394736842105264,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.13513513513513514,
              "mixed_pct": 0.0,
              "instit_pct": 0.6036036036036037,
              "ambiguous_pct": 0.11711711711711711,
              "unobservable_pct": 0.14414414414414414,
              "unclear_pct": 0.26126126126126126,
              "retail_qty_pct": 0.009459992116673236,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.7875443437130469,
              "ambiguous_qty_pct": 0.07331493890421759,
              "unobservable_qty_pct": 0.12968072526606228,
              "unclear_qty_pct": 0.20299566417027987,
              "retail_notional_pct": 0.009516383001119195,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.7871036899076932,
              "ambiguous_notional_pct": 0.07346518786800799,
              "unobservable_notional_pct": 0.1299147392231796,
              "unclear_notional_pct": 0.20337992709118757,
              "run_retail_pct": 0.27450980392156865,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.37254901960784315,
              "run_unclear_pct": 0.3529411764705882,
              "avg_trade_size": 2096.9054054054054,
              "avg_run_notional": 4526.156862745098,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed (Institutional Tilt)",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.6470588235294118,
              "avg_feature_coverage": 0.7107843137254902,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "MZH",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.11190607228031554,
              "mixed_pct": 0.0,
              "instit_pct": 0.5778756191524491,
              "ambiguous_pct": 0.22573839662447256,
              "unobservable_pct": 0.08447991194276279,
              "unclear_pct": 0.31021830856723537,
              "retail_qty_pct": 0.023420662270653023,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.770020797397117,
              "ambiguous_qty_pct": 0.07684279658937786,
              "unobservable_qty_pct": 0.12971574374285208,
              "unclear_qty_pct": 0.20655854033222992,
              "retail_notional_pct": 0.02326436684226232,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.7715996071131687,
              "ambiguous_notional_pct": 0.07679567410092061,
              "unobservable_notional_pct": 0.1283403519436484,
              "unclear_notional_pct": 0.20513602604456901,
              "run_retail_pct": 0.48656061437191445,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.18650575973669775,
              "run_unclear_pct": 0.32693362589138786,
              "avg_trade_size": 2983.8074665199047,
              "avg_run_notional": 16636.851069665387,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail Tilt",
              "high_confidence_pct": 0.018102029621503018,
              "medium_confidence_pct": 0.3165112452002194,
              "low_confidence_pct": 0.33845309928688977,
              "avg_feature_coverage": 0.7624520021941853,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "PCT",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.08241252302025782,
              "mixed_pct": 0.0,
              "instit_pct": 0.6427255985267035,
              "ambiguous_pct": 0.13766114180478822,
              "unobservable_pct": 0.13720073664825047,
              "unclear_pct": 0.27486187845303867,
              "retail_qty_pct": 0.013087643093072712,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.7388692819329442,
              "ambiguous_qty_pct": 0.11531152436541332,
              "unobservable_qty_pct": 0.13273155060856975,
              "unclear_qty_pct": 0.2480430749739831,
              "retail_notional_pct": 0.013204030211467863,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.7393492258474477,
              "ambiguous_notional_pct": 0.11493594918647661,
              "unobservable_notional_pct": 0.1325107947546078,
              "unclear_notional_pct": 0.2474467439410844,
              "run_retail_pct": 0.26287744227353466,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.34458259325044405,
              "run_unclear_pct": 0.3925399644760213,
              "avg_trade_size": 5786.223756906077,
              "avg_run_notional": 21753.522202486678,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed (Institutional Tilt)",
              "high_confidence_pct": 0.010657193605683837,
              "medium_confidence_pct": 0.2877442273534636,
              "low_confidence_pct": 0.30905861456483125,
              "avg_feature_coverage": 0.7365008880994672,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.06650396583282489,
              "mixed_pct": 0.0,
              "instit_pct": 0.6412446613788896,
              "ambiguous_pct": 0.13697376449054302,
              "unobservable_pct": 0.15527760829774254,
              "unclear_pct": 0.29225137278828556,
              "retail_qty_pct": 0.0218324840728389,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.7204211880618239,
              "ambiguous_qty_pct": 0.10018452370875726,
              "unobservable_qty_pct": 0.15756180415657994,
              "unclear_qty_pct": 0.2577463278653372,
              "retail_notional_pct": 0.02233496248819775,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.7227297034275467,
              "ambiguous_notional_pct": 0.09936530236329207,
              "unobservable_notional_pct": 0.15557003172096354,
              "unclear_notional_pct": 0.2549353340842556,
              "run_retail_pct": 0.3132530120481928,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.3453815261044177,
              "run_unclear_pct": 0.3413654618473896,
              "avg_trade_size": 4822.000793166565,
              "avg_run_notional": 29927.104417670682,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed (Institutional Tilt)",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.14457831325301204,
              "low_confidence_pct": 0.5140562248995983,
              "avg_feature_coverage": 0.7470883534136545,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "NXR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.08333333333333333,
              "mixed_pct": 0.0,
              "instit_pct": 0.25,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.6666666666666666,
              "unclear_pct": 0.6666666666666666,
              "retail_qty_pct": 0.010456273764258554,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.2761406844106464,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.7134030418250951,
              "unclear_qty_pct": 0.7134030418250951,
              "retail_notional_pct": 0.010130003707557437,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.2709985289368878,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.7188714673555547,
              "unclear_notional_pct": 0.7188714673555547,
              "run_retail_pct": 0.16666666666666666,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.3333333333333333,
              "run_unclear_pct": 0.5,
              "avg_trade_size": 6967.75,
              "avg_run_notional": 13868.833333333334,
              "dominant_bucket": "UNOBSERVABLE",
              "dominant_label": "Not Observable",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5,
              "avg_feature_coverage": 0.6083333333333334,
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
              "instit_pct": 0.1,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.9,
              "unclear_pct": 0.9,
              "retail_qty_pct": 0.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.022727272727272728,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.9772727272727273,
              "unclear_qty_pct": 0.9772727272727273,
              "retail_notional_pct": 0.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.022727272727272728,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.9772727272727273,
              "unclear_notional_pct": 0.9772727272727273,
              "run_retail_pct": 0.0,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.5,
              "run_unclear_pct": 0.5,
              "avg_trade_size": 264.0,
              "avg_run_notional": 530.0,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed (Institutional Tilt)",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5,
              "avg_feature_coverage": 0.625,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            }
          ]
        },
        "max": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 7654,
          "n_runs": 986,
          "n_trade_days": 18,
          "first_trade_date": "2026-01-22",
          "last_trade_date": "2026-02-16",
          "period_days": 18,
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
            "retail_pct": 0.058400836164097206,
            "mixed_pct": 0.0,
            "instit_pct": 0.6894434282727986,
            "ambiguous_pct": 0.13692187091716748,
            "unobservable_pct": 0.11523386464593677,
            "unclear_pct": 0.2521557355631042,
            "retail_qty_pct": 0.01738154715134983,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.753455183609328,
            "ambiguous_qty_pct": 0.08083220909373934,
            "unobservable_qty_pct": 0.14833106014558284,
            "unclear_qty_pct": 0.22916326923932218,
            "retail_notional_pct": 0.01756101464476667,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7581657364664395,
            "ambiguous_notional_pct": 0.07969712379745206,
            "unobservable_notional_pct": 0.1445761250913418,
            "unclear_notional_pct": 0.22427324888879385
          },
          "run_composition": {
            "retail_pct": 0.359026369168357,
            "mixed_pct": 0.0,
            "instit_pct": 0.3265720081135903,
            "ambiguous_pct": 0.2332657200811359,
            "unobservable_pct": 0.08113590263691683,
            "unclear_pct": 0.3144016227180527,
            "retail_notional_pct": 0.019077717713063155,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.8236467079271971,
            "unclear_notional_pct": 0.15727557435973977
          },
          "confidence": {
            "high": 0.0,
            "medium": 0.1663286004056795,
            "low": 0.5192697768762677,
            "na": 0.3144016227180527
          },
          "observability": {
            "avg_feature_coverage": 0.7571501014198783,
            "observable_run_pct": 0.9188640973630832,
            "ambiguous_run_pct": 0.2332657200811359,
            "unobservable_run_pct": 0.08113590263691683
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Mixed (Retail Tilt)",
          "dominant_share": 0.359026369168357,
          "dominance_gap": 0.032454361054766734,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 4698,
              "SINGLE_FILL": 2372,
              "UNOBSERVABLE": 519,
              "WALK_BOOK": 65
            },
            "d2_information": {
              "UNOBSERVABLE": 7654
            },
            "d3_urgency": {
              "IMMEDIATE": 979,
              "ADAPTIVE": 7
            },
            "participant_confidence": {
              "LOW": 512,
              "NA": 310,
              "MEDIUM": 164
            }
          },
          "trade_size": {
            "avg": 3706.8563626861774,
            "median": 1200.5
          },
          "run_size": {
            "avg": 26487.470588235294,
            "median": 5714.25,
            "avg_length": 3.420892494929006
          },
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.058400836164097206,
              "mixed_pct": 0.0,
              "instit_pct": 0.6894434282727986,
              "ambiguous_pct": 0.13692187091716748,
              "unobservable_pct": 0.11523386464593677,
              "unclear_pct": 0.2521557355631042,
              "retail_qty_pct": 0.01738154715134983,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.753455183609328,
              "ambiguous_qty_pct": 0.08083220909373934,
              "unobservable_qty_pct": 0.14833106014558284,
              "unclear_qty_pct": 0.22916326923932218,
              "retail_notional_pct": 0.01756101464476667,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.7581657364664395,
              "ambiguous_notional_pct": 0.07969712379745206,
              "unobservable_notional_pct": 0.1445761250913418,
              "unclear_notional_pct": 0.22427324888879385,
              "run_retail_pct": 0.359026369168357,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.3265720081135903,
              "run_unclear_pct": 0.3144016227180527,
              "avg_trade_size": 3706.8563626861774,
              "avg_run_notional": 26487.470588235294,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed (Retail Tilt)",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.1663286004056795,
              "low_confidence_pct": 0.5192697768762677,
              "avg_feature_coverage": 0.7571501014198783,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.02857142857142857,
              "mixed_pct": 0.0,
              "instit_pct": 0.7485714285714286,
              "ambiguous_pct": 0.06857142857142857,
              "unobservable_pct": 0.15428571428571428,
              "unclear_pct": 0.22285714285714286,
              "retail_qty_pct": 0.009770311964346932,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.8632156324991429,
              "ambiguous_qty_pct": 0.053393897840246826,
              "unobservable_qty_pct": 0.07362015769626329,
              "unclear_qty_pct": 0.12701405553651013,
              "retail_notional_pct": 0.010132865566917967,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.8652627453907591,
              "ambiguous_notional_pct": 0.05141636187206091,
              "unobservable_notional_pct": 0.073188027170262,
              "unclear_notional_pct": 0.1246043890423229,
              "run_retail_pct": 0.1282051282051282,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.48717948717948717,
              "run_unclear_pct": 0.3846153846153846,
              "avg_trade_size": 1531.0857142857142,
              "avg_run_notional": 6738.0,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Institutional Tilt",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.6153846153846154,
              "avg_feature_coverage": 0.7346153846153848,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.07878787878787878,
              "mixed_pct": 0.0,
              "instit_pct": 0.6636363636363637,
              "ambiguous_pct": 0.13333333333333333,
              "unobservable_pct": 0.12424242424242424,
              "unclear_pct": 0.25757575757575757,
              "retail_qty_pct": 0.007165437302423604,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.8091675447839831,
              "ambiguous_qty_pct": 0.08661749209694415,
              "unobservable_qty_pct": 0.09704952581664911,
              "unclear_qty_pct": 0.18366701791359324,
              "retail_notional_pct": 0.007124003736281015,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.8105932033331849,
              "ambiguous_notional_pct": 0.08629511672029737,
              "unobservable_notional_pct": 0.09598767621023672,
              "unclear_notional_pct": 0.1822827929305341,
              "run_retail_pct": 0.20909090909090908,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.4090909090909091,
              "run_unclear_pct": 0.38181818181818183,
              "avg_trade_size": 2755.940909090909,
              "avg_run_notional": 8023.004545454545,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Institutional Tilt",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.6181818181818182,
              "avg_feature_coverage": 0.7277272727272727,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "MZH",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.11827276180828163,
              "mixed_pct": 0.0,
              "instit_pct": 0.5626820311510701,
              "ambiguous_pct": 0.2337596555654046,
              "unobservable_pct": 0.08528555147524376,
              "unclear_pct": 0.31904520704064837,
              "retail_qty_pct": 0.02345018691486927,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.7674435713273681,
              "ambiguous_qty_pct": 0.08017312785413011,
              "unobservable_qty_pct": 0.12893311390363257,
              "unclear_qty_pct": 0.20910624175776268,
              "retail_notional_pct": 0.023296634357249837,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.7690237883968689,
              "ambiguous_notional_pct": 0.0798936332551502,
              "unobservable_notional_pct": 0.12778594399073107,
              "unclear_notional_pct": 0.20767957724588126,
              "run_retail_pct": 0.5001810938065918,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.17819630568634554,
              "run_unclear_pct": 0.3216226005070627,
              "avg_trade_size": 2800.667975180448,
              "avg_run_notional": 14933.565193770373,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail Tilt",
              "high_confidence_pct": 0.03187250996015936,
              "medium_confidence_pct": 0.31908728721477725,
              "low_confidence_pct": 0.3274176023180007,
              "avg_feature_coverage": 0.7650670047084389,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "PCT",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.08918094344050692,
              "mixed_pct": 0.0,
              "instit_pct": 0.6503168270359071,
              "ambiguous_pct": 0.13236329500117344,
              "unobservable_pct": 0.12813893452241257,
              "unclear_pct": 0.26050222952358604,
              "retail_qty_pct": 0.014643078911685316,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.7639175780309463,
              "ambiguous_qty_pct": 0.10867306205725437,
              "unobservable_qty_pct": 0.11276628100011406,
              "unclear_qty_pct": 0.22143934305736843,
              "retail_notional_pct": 0.014760076839039004,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.7641499267068683,
              "ambiguous_notional_pct": 0.10841736544607183,
              "unobservable_notional_pct": 0.11267263100802082,
              "unclear_notional_pct": 0.22108999645409266,
              "run_retail_pct": 0.28884826325411334,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.3610603290676417,
              "run_unclear_pct": 0.350091407678245,
              "avg_trade_size": 5311.364703121333,
              "avg_run_notional": 20172.6718464351,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed (Institutional Tilt)",
              "high_confidence_pct": 0.005484460694698354,
              "medium_confidence_pct": 0.27879341864716634,
              "low_confidence_pct": 0.3656307129798903,
              "avg_feature_coverage": 0.7417733089579525,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.06536881585997499,
              "mixed_pct": 0.0,
              "instit_pct": 0.6810144668690837,
              "ambiguous_pct": 0.12145025897481693,
              "unobservable_pct": 0.1321664582961243,
              "unclear_pct": 0.25361671727094126,
              "retail_qty_pct": 0.025426995728075902,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.7267306012949516,
              "ambiguous_qty_pct": 0.09955235270515857,
              "unobservable_qty_pct": 0.14829005027181397,
              "unclear_qty_pct": 0.24784240297697252,
              "retail_notional_pct": 0.025613288125262732,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.727873250243136,
              "ambiguous_notional_pct": 0.09904318849913663,
              "unobservable_notional_pct": 0.14747027313246464,
              "unclear_notional_pct": 0.24651346163160126,
              "run_retail_pct": 0.30156815440289503,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.36670687575392036,
              "run_unclear_pct": 0.33172496984318456,
              "avg_trade_size": 3980.093963207716,
              "avg_run_notional": 25464.176115802173,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed (Institutional Tilt)",
              "high_confidence_pct": 0.0048250904704463205,
              "medium_confidence_pct": 0.16767189384800965,
              "low_confidence_pct": 0.4957780458383595,
              "avg_feature_coverage": 0.751568154402895,
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
              "instit_pct": 0.6216216216216216,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.3783783783783784,
              "unclear_pct": 0.3783783783783784,
              "retail_qty_pct": 0.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.6954379741846487,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.30456202581535124,
              "unclear_qty_pct": 0.30456202581535124,
              "retail_notional_pct": 0.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.6954379741846488,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.30456202581535124,
              "unclear_notional_pct": 0.30456202581535124,
              "run_retail_pct": 0.0,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.5833333333333334,
              "run_unclear_pct": 0.4166666666666667,
              "avg_trade_size": 301.727027027027,
              "avg_run_notional": 796.9916666666668,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Institutional Tilt",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5833333333333334,
              "avg_feature_coverage": 0.65,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "NXR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.08888888888888889,
              "mixed_pct": 0.0,
              "instit_pct": 0.4666666666666667,
              "ambiguous_pct": 0.15555555555555556,
              "unobservable_pct": 0.28888888888888886,
              "unclear_pct": 0.4444444444444444,
              "retail_qty_pct": 0.0064500124038700075,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.46067973207640783,
              "ambiguous_qty_pct": 0.051103944430662365,
              "unobservable_qty_pct": 0.48176631108905976,
              "unclear_qty_pct": 0.5328702555197221,
              "retail_notional_pct": 0.006174592559341133,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.4622149747611239,
              "ambiguous_notional_pct": 0.05155265657111622,
              "unobservable_notional_pct": 0.48005777610841877,
              "unclear_notional_pct": 0.531610432679535,
              "run_retail_pct": 0.19047619047619047,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.38095238095238093,
              "run_unclear_pct": 0.42857142857142855,
              "avg_trade_size": 3638.5666666666666,
              "avg_run_notional": 7773.928571428572,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Institutional Tilt",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5714285714285714,
              "avg_feature_coverage": 0.680952380952381,
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
      "n_trades": 7654,
      "n_runs": 986,
      "n_trade_days": 18,
      "first_trade_date": "2026-01-22",
      "last_trade_date": "2026-02-16",
      "period_days": 18,
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
        "retail_pct": 0.058400836164097206,
        "mixed_pct": 0.0,
        "instit_pct": 0.6894434282727986,
        "ambiguous_pct": 0.13692187091716748,
        "unobservable_pct": 0.11523386464593677,
        "unclear_pct": 0.2521557355631042,
        "retail_qty_pct": 0.01738154715134983,
        "mixed_qty_pct": 0.0,
        "instit_qty_pct": 0.753455183609328,
        "ambiguous_qty_pct": 0.08083220909373934,
        "unobservable_qty_pct": 0.14833106014558284,
        "unclear_qty_pct": 0.22916326923932218,
        "retail_notional_pct": 0.01756101464476667,
        "mixed_notional_pct": 0.0,
        "instit_notional_pct": 0.7581657364664395,
        "ambiguous_notional_pct": 0.07969712379745206,
        "unobservable_notional_pct": 0.1445761250913418,
        "unclear_notional_pct": 0.22427324888879385
      },
      "run_composition": {
        "retail_pct": 0.359026369168357,
        "mixed_pct": 0.0,
        "instit_pct": 0.3265720081135903,
        "ambiguous_pct": 0.2332657200811359,
        "unobservable_pct": 0.08113590263691683,
        "unclear_pct": 0.3144016227180527
      },
      "trade_size": {
        "avg": 3706.8563626861774,
        "median": 1200.5
      },
      "run_size": {
        "avg": 26487.470588235294,
        "median": 5714.25,
        "avg_length": 3.420892494929006
      },
      "confidence": {
        "high": 0.0,
        "medium": 0.1663286004056795,
        "low": 0.5192697768762677,
        "na": 0.3144016227180527
      },
      "observability": {
        "avg_feature_coverage": 0.7571501014198783,
        "observable_run_pct": 0.9188640973630832,
        "ambiguous_run_pct": 0.2332657200811359,
        "unobservable_run_pct": 0.08113590263691683
      },
      "dominant_bucket": "RETAIL",
      "dominant_label": "Mixed (Retail Tilt)",
      "dominant_share": 0.359026369168357,
      "dominance_gap": 0.032454361054766734,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2026-01",
            "n_trades": 4931,
            "n_runs": 629,
            "retail_pct": 0.06408436422632326,
            "mixed_pct": 0.0,
            "instit_pct": 0.6738998174812412,
            "ambiguous_pct": 0.13932265260596227,
            "unobservable_pct": 0.12269316568647333,
            "unclear_pct": 0.2620158182924356,
            "avg_trade_size": 3975.5120867978103,
            "avg_run_notional": 28457.846581875994,
            "retail_qty_pct": 0.018214936247723135,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7740539591355501,
            "ambiguous_qty_pct": 0.07086265213373973,
            "unobservable_qty_pct": 0.13686845248298707,
            "unclear_qty_pct": 0.20773110461672678,
            "retail_notional_pct": 0.018358945489350256,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7766938350697264,
            "ambiguous_notional_pct": 0.07076614810928723,
            "unobservable_notional_pct": 0.13418107133163595,
            "unclear_notional_pct": 0.2049472194409232,
            "run_retail_pct": 0.40381558028616854,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.32114467408585057,
            "run_ambiguous_pct": 0.2273449920508744,
            "run_unobservable_pct": 0.04769475357710652,
            "run_unclear_pct": 0.27503974562798095,
            "avg_feature_coverage": 0.7611287758346583,
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.18124006359300476,
            "low_confidence_pct": 0.5437201907790143,
            "total_quantity": null
          },
          {
            "month": "2026-02",
            "n_trades": 2723,
            "n_runs": 357,
            "retail_pct": 0.04810870363569592,
            "mixed_pct": 0.0,
            "instit_pct": 0.7175908923980904,
            "ambiguous_pct": 0.13257436650752846,
            "unobservable_pct": 0.10172603745868528,
            "unclear_pct": 0.23430040396621374,
            "avg_trade_size": 3220.355673889093,
            "avg_run_notional": 23015.855742296917,
            "retail_qty_pct": 0.015728286863604318,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7125917529478443,
            "ambiguous_qty_pct": 0.10060961280601595,
            "unobservable_qty_pct": 0.1710703473825355,
            "unclear_qty_pct": 0.27167996018855145,
            "retail_notional_pct": 0.015777232335372156,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7167459884524267,
            "ambiguous_notional_pct": 0.09966240844125435,
            "unobservable_notional_pct": 0.16781437077094685,
            "unclear_notional_pct": 0.2674767792122012,
            "run_retail_pct": 0.2801120448179272,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.33613445378151263,
            "run_ambiguous_pct": 0.24369747899159663,
            "run_unobservable_pct": 0.1400560224089636,
            "run_unclear_pct": 0.3837535014005602,
            "avg_feature_coverage": 0.750140056022409,
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.1400560224089636,
            "low_confidence_pct": 0.47619047619047616,
            "total_quantity": null
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "TKU",
          "currency": "SGD",
          "is_target": true,
          "retail_pct": 0.058400836164097206,
          "mixed_pct": 0.0,
          "instit_pct": 0.6894434282727986,
          "ambiguous_pct": 0.13692187091716748,
          "unobservable_pct": 0.11523386464593677,
          "unclear_pct": 0.2521557355631042,
          "retail_qty_pct": 0.01738154715134983,
          "mixed_qty_pct": 0.0,
          "instit_qty_pct": 0.753455183609328,
          "ambiguous_qty_pct": 0.08083220909373934,
          "unobservable_qty_pct": 0.14833106014558284,
          "unclear_qty_pct": 0.22916326923932218,
          "retail_notional_pct": 0.01756101464476667,
          "mixed_notional_pct": 0.0,
          "instit_notional_pct": 0.7581657364664395,
          "ambiguous_notional_pct": 0.07969712379745206,
          "unobservable_notional_pct": 0.1445761250913418,
          "unclear_notional_pct": 0.22427324888879385,
          "run_retail_pct": 0.359026369168357,
          "run_mixed_pct": 0.0,
          "run_instit_pct": 0.3265720081135903,
          "run_unclear_pct": 0.3144016227180527,
          "avg_trade_size": 3706.8563626861774,
          "avg_run_notional": 26487.470588235294,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Mixed (Retail Tilt)",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.1663286004056795,
          "low_confidence_pct": 0.5192697768762677,
          "avg_feature_coverage": 0.7571501014198783,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "U77",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.02857142857142857,
          "mixed_pct": 0.0,
          "instit_pct": 0.7485714285714286,
          "ambiguous_pct": 0.06857142857142857,
          "unobservable_pct": 0.15428571428571428,
          "unclear_pct": 0.22285714285714286,
          "retail_qty_pct": 0.009770311964346932,
          "mixed_qty_pct": 0.0,
          "instit_qty_pct": 0.8632156324991429,
          "ambiguous_qty_pct": 0.053393897840246826,
          "unobservable_qty_pct": 0.07362015769626329,
          "unclear_qty_pct": 0.12701405553651013,
          "retail_notional_pct": 0.010132865566917967,
          "mixed_notional_pct": 0.0,
          "instit_notional_pct": 0.8652627453907591,
          "ambiguous_notional_pct": 0.05141636187206091,
          "unobservable_notional_pct": 0.073188027170262,
          "unclear_notional_pct": 0.1246043890423229,
          "run_retail_pct": 0.1282051282051282,
          "run_mixed_pct": 0.0,
          "run_instit_pct": 0.48717948717948717,
          "run_unclear_pct": 0.3846153846153846,
          "avg_trade_size": 1531.0857142857142,
          "avg_run_notional": 6738.0,
          "dominant_bucket": "INSTITUTIONAL",
          "dominant_label": "Institutional Tilt",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.6153846153846154,
          "avg_feature_coverage": 0.7346153846153848,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "LVR",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.07878787878787878,
          "mixed_pct": 0.0,
          "instit_pct": 0.6636363636363637,
          "ambiguous_pct": 0.13333333333333333,
          "unobservable_pct": 0.12424242424242424,
          "unclear_pct": 0.25757575757575757,
          "retail_qty_pct": 0.007165437302423604,
          "mixed_qty_pct": 0.0,
          "instit_qty_pct": 0.8091675447839831,
          "ambiguous_qty_pct": 0.08661749209694415,
          "unobservable_qty_pct": 0.09704952581664911,
          "unclear_qty_pct": 0.18366701791359324,
          "retail_notional_pct": 0.007124003736281015,
          "mixed_notional_pct": 0.0,
          "instit_notional_pct": 0.8105932033331849,
          "ambiguous_notional_pct": 0.08629511672029737,
          "unobservable_notional_pct": 0.09598767621023672,
          "unclear_notional_pct": 0.1822827929305341,
          "run_retail_pct": 0.20909090909090908,
          "run_mixed_pct": 0.0,
          "run_instit_pct": 0.4090909090909091,
          "run_unclear_pct": 0.38181818181818183,
          "avg_trade_size": 2755.940909090909,
          "avg_run_notional": 8023.004545454545,
          "dominant_bucket": "INSTITUTIONAL",
          "dominant_label": "Institutional Tilt",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.6181818181818182,
          "avg_feature_coverage": 0.7277272727272727,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "MZH",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.11827276180828163,
          "mixed_pct": 0.0,
          "instit_pct": 0.5626820311510701,
          "ambiguous_pct": 0.2337596555654046,
          "unobservable_pct": 0.08528555147524376,
          "unclear_pct": 0.31904520704064837,
          "retail_qty_pct": 0.02345018691486927,
          "mixed_qty_pct": 0.0,
          "instit_qty_pct": 0.7674435713273681,
          "ambiguous_qty_pct": 0.08017312785413011,
          "unobservable_qty_pct": 0.12893311390363257,
          "unclear_qty_pct": 0.20910624175776268,
          "retail_notional_pct": 0.023296634357249837,
          "mixed_notional_pct": 0.0,
          "instit_notional_pct": 0.7690237883968689,
          "ambiguous_notional_pct": 0.0798936332551502,
          "unobservable_notional_pct": 0.12778594399073107,
          "unclear_notional_pct": 0.20767957724588126,
          "run_retail_pct": 0.5001810938065918,
          "run_mixed_pct": 0.0,
          "run_instit_pct": 0.17819630568634554,
          "run_unclear_pct": 0.3216226005070627,
          "avg_trade_size": 2800.667975180448,
          "avg_run_notional": 14933.565193770373,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail Tilt",
          "high_confidence_pct": 0.03187250996015936,
          "medium_confidence_pct": 0.31908728721477725,
          "low_confidence_pct": 0.3274176023180007,
          "avg_feature_coverage": 0.7650670047084389,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "PCT",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.08918094344050692,
          "mixed_pct": 0.0,
          "instit_pct": 0.6503168270359071,
          "ambiguous_pct": 0.13236329500117344,
          "unobservable_pct": 0.12813893452241257,
          "unclear_pct": 0.26050222952358604,
          "retail_qty_pct": 0.014643078911685316,
          "mixed_qty_pct": 0.0,
          "instit_qty_pct": 0.7639175780309463,
          "ambiguous_qty_pct": 0.10867306205725437,
          "unobservable_qty_pct": 0.11276628100011406,
          "unclear_qty_pct": 0.22143934305736843,
          "retail_notional_pct": 0.014760076839039004,
          "mixed_notional_pct": 0.0,
          "instit_notional_pct": 0.7641499267068683,
          "ambiguous_notional_pct": 0.10841736544607183,
          "unobservable_notional_pct": 0.11267263100802082,
          "unclear_notional_pct": 0.22108999645409266,
          "run_retail_pct": 0.28884826325411334,
          "run_mixed_pct": 0.0,
          "run_instit_pct": 0.3610603290676417,
          "run_unclear_pct": 0.350091407678245,
          "avg_trade_size": 5311.364703121333,
          "avg_run_notional": 20172.6718464351,
          "dominant_bucket": "INSTITUTIONAL",
          "dominant_label": "Mixed (Institutional Tilt)",
          "high_confidence_pct": 0.005484460694698354,
          "medium_confidence_pct": 0.27879341864716634,
          "low_confidence_pct": 0.3656307129798903,
          "avg_feature_coverage": 0.7417733089579525,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "ITS",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.06536881585997499,
          "mixed_pct": 0.0,
          "instit_pct": 0.6810144668690837,
          "ambiguous_pct": 0.12145025897481693,
          "unobservable_pct": 0.1321664582961243,
          "unclear_pct": 0.25361671727094126,
          "retail_qty_pct": 0.025426995728075902,
          "mixed_qty_pct": 0.0,
          "instit_qty_pct": 0.7267306012949516,
          "ambiguous_qty_pct": 0.09955235270515857,
          "unobservable_qty_pct": 0.14829005027181397,
          "unclear_qty_pct": 0.24784240297697252,
          "retail_notional_pct": 0.025613288125262732,
          "mixed_notional_pct": 0.0,
          "instit_notional_pct": 0.727873250243136,
          "ambiguous_notional_pct": 0.09904318849913663,
          "unobservable_notional_pct": 0.14747027313246464,
          "unclear_notional_pct": 0.24651346163160126,
          "run_retail_pct": 0.30156815440289503,
          "run_mixed_pct": 0.0,
          "run_instit_pct": 0.36670687575392036,
          "run_unclear_pct": 0.33172496984318456,
          "avg_trade_size": 3980.093963207716,
          "avg_run_notional": 25464.176115802173,
          "dominant_bucket": "INSTITUTIONAL",
          "dominant_label": "Mixed (Institutional Tilt)",
          "high_confidence_pct": 0.0048250904704463205,
          "medium_confidence_pct": 0.16767189384800965,
          "low_confidence_pct": 0.4957780458383595,
          "avg_feature_coverage": 0.751568154402895,
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
          "instit_pct": 0.6216216216216216,
          "ambiguous_pct": 0.0,
          "unobservable_pct": 0.3783783783783784,
          "unclear_pct": 0.3783783783783784,
          "retail_qty_pct": 0.0,
          "mixed_qty_pct": 0.0,
          "instit_qty_pct": 0.6954379741846487,
          "ambiguous_qty_pct": 0.0,
          "unobservable_qty_pct": 0.30456202581535124,
          "unclear_qty_pct": 0.30456202581535124,
          "retail_notional_pct": 0.0,
          "mixed_notional_pct": 0.0,
          "instit_notional_pct": 0.6954379741846488,
          "ambiguous_notional_pct": 0.0,
          "unobservable_notional_pct": 0.30456202581535124,
          "unclear_notional_pct": 0.30456202581535124,
          "run_retail_pct": 0.0,
          "run_mixed_pct": 0.0,
          "run_instit_pct": 0.5833333333333334,
          "run_unclear_pct": 0.4166666666666667,
          "avg_trade_size": 301.727027027027,
          "avg_run_notional": 796.9916666666668,
          "dominant_bucket": "INSTITUTIONAL",
          "dominant_label": "Institutional Tilt",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.5833333333333334,
          "avg_feature_coverage": 0.65,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "NXR",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.08888888888888889,
          "mixed_pct": 0.0,
          "instit_pct": 0.4666666666666667,
          "ambiguous_pct": 0.15555555555555556,
          "unobservable_pct": 0.28888888888888886,
          "unclear_pct": 0.4444444444444444,
          "retail_qty_pct": 0.0064500124038700075,
          "mixed_qty_pct": 0.0,
          "instit_qty_pct": 0.46067973207640783,
          "ambiguous_qty_pct": 0.051103944430662365,
          "unobservable_qty_pct": 0.48176631108905976,
          "unclear_qty_pct": 0.5328702555197221,
          "retail_notional_pct": 0.006174592559341133,
          "mixed_notional_pct": 0.0,
          "instit_notional_pct": 0.4622149747611239,
          "ambiguous_notional_pct": 0.05155265657111622,
          "unobservable_notional_pct": 0.48005777610841877,
          "unclear_notional_pct": 0.531610432679535,
          "run_retail_pct": 0.19047619047619047,
          "run_mixed_pct": 0.0,
          "run_instit_pct": 0.38095238095238093,
          "run_unclear_pct": 0.42857142857142855,
          "avg_trade_size": 3638.5666666666666,
          "avg_run_notional": 7773.928571428572,
          "dominant_bucket": "INSTITUTIONAL",
          "dominant_label": "Institutional Tilt",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.5714285714285714,
          "avg_feature_coverage": 0.680952380952381,
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
            "retail_pct": 0.11627906976744186,
            "mixed_pct": 0.0,
            "instit_pct": 0.7054263565891473,
            "ambiguous_pct": 0.06201550387596899,
            "unobservable_pct": 0.11627906976744186,
            "unclear_pct": 0.17829457364341084,
            "retail_qty_pct": 0.0011446886446886447,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.933531746031746,
            "ambiguous_qty_pct": 0.011752136752136752,
            "unobservable_qty_pct": 0.05357142857142857,
            "unclear_qty_pct": 0.06532356532356531,
            "retail_notional_pct": 0.001171977419691116,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.9336821887862926,
            "ambiguous_notional_pct": 0.011763999759918372,
            "unobservable_notional_pct": 0.05338183403409791,
            "unclear_notional_pct": 0.06514583379401628,
            "run_retail_pct": 0.3488372093023256,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.23255813953488372,
            "run_unclear_pct": 0.41860465116279066,
            "avg_trade_size": 2453.9457364341083,
            "avg_run_notional": 7350.209302325581,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed (Retail Tilt)",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.23255813953488372,
            "low_confidence_pct": 0.3488372093023256,
            "avg_feature_coverage": 0.6860465116279071,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.02531645569620253,
            "mixed_pct": 0.0,
            "instit_pct": 0.7341772151898734,
            "ambiguous_pct": 0.13924050632911392,
            "unobservable_pct": 0.10126582278481013,
            "unclear_pct": 0.24050632911392406,
            "retail_qty_pct": 0.0022007042253521128,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.8371478873239436,
            "ambiguous_qty_pct": 0.0721830985915493,
            "unobservable_qty_pct": 0.08846830985915492,
            "unclear_qty_pct": 0.16065140845070422,
            "retail_notional_pct": 0.00219846287065411,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.837461807315946,
            "ambiguous_notional_pct": 0.07196152241310463,
            "unobservable_notional_pct": 0.08837820740029523,
            "unclear_notional_pct": 0.16033972981339986,
            "run_retail_pct": 0.16666666666666666,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.5,
            "run_unclear_pct": 0.3333333333333333,
            "avg_trade_size": 2821.3037974683543,
            "avg_run_notional": 16932.083333333332,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Institutional Tilt",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.6666666666666666,
            "avg_feature_coverage": 0.7791666666666667,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "MZH",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.13844515441959532,
            "mixed_pct": 0.0,
            "instit_pct": 0.45686900958466453,
            "ambiguous_pct": 0.33865814696485624,
            "unobservable_pct": 0.06602768903088392,
            "unclear_pct": 0.40468583599574015,
            "retail_qty_pct": 0.025871015567086732,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7126019273535953,
            "ambiguous_qty_pct": 0.10455893254262416,
            "unobservable_qty_pct": 0.15696812453669384,
            "unclear_qty_pct": 0.261527057079318,
            "retail_notional_pct": 0.025880927520184324,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7124698691090089,
            "ambiguous_notional_pct": 0.10462417483667152,
            "unobservable_notional_pct": 0.1570250285341353,
            "unclear_notional_pct": 0.2616492033708068,
            "run_retail_pct": 0.47685185185185186,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.16203703703703703,
            "run_unclear_pct": 0.3611111111111111,
            "avg_trade_size": 1796.6075612353568,
            "avg_run_notional": 6903.3287037037035,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail Tilt",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.375,
            "low_confidence_pct": 0.2638888888888889,
            "avg_feature_coverage": 0.7645833333333333,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "PCT",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.0935672514619883,
            "mixed_pct": 0.0,
            "instit_pct": 0.45614035087719296,
            "ambiguous_pct": 0.12280701754385964,
            "unobservable_pct": 0.32748538011695905,
            "unclear_pct": 0.4502923976608187,
            "retail_qty_pct": 0.019941572462847706,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.5094627206909691,
            "ambiguous_qty_pct": 0.1298107455861806,
            "unobservable_qty_pct": 0.3407849612600025,
            "unclear_qty_pct": 0.4705957068461831,
            "retail_notional_pct": 0.019980607568536694,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.5094913145690215,
            "ambiguous_notional_pct": 0.13037568262273488,
            "unobservable_notional_pct": 0.3401523952397069,
            "unclear_notional_pct": 0.4705280778624418,
            "run_retail_pct": 0.25,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.2708333333333333,
            "run_unclear_pct": 0.47916666666666663,
            "avg_trade_size": 6393.040935672515,
            "avg_run_notional": 21348.125,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed (Institutional Tilt)",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.20833333333333334,
            "low_confidence_pct": 0.3125,
            "avg_feature_coverage": 0.7229166666666668,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "LVR",
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
            "avg_trade_size": 837.0,
            "avg_run_notional": 837.0,
            "dominant_bucket": "UNOBSERVABLE",
            "dominant_label": "Not Observable",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.0,
            "avg_feature_coverage": 0.55,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "U77",
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
            "avg_trade_size": 225.0,
            "avg_run_notional": 225.0,
            "dominant_bucket": "UNOBSERVABLE",
            "dominant_label": "Not Observable",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.0,
            "avg_feature_coverage": 0.55,
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
            "retail_pct": 0.06455696202531645,
            "mixed_pct": 0.0,
            "instit_pct": 0.6974683544303798,
            "ambiguous_pct": 0.11265822784810127,
            "unobservable_pct": 0.12531645569620253,
            "unclear_pct": 0.2379746835443038,
            "retail_qty_pct": 0.014178597026445887,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7408891257603881,
            "ambiguous_qty_pct": 0.07231727712127617,
            "unobservable_qty_pct": 0.1726150000918898,
            "unclear_qty_pct": 0.24493227721316596,
            "retail_notional_pct": 0.014188555560245869,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7428948660530795,
            "ambiguous_notional_pct": 0.07203667546403296,
            "unobservable_notional_pct": 0.17087990292264169,
            "unclear_notional_pct": 0.24291657838667463,
            "run_retail_pct": 0.2962962962962963,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.30246913580246915,
            "run_unclear_pct": 0.4012345679012346,
            "avg_trade_size": 3133.609493670886,
            "avg_run_notional": 14860.32098765432,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed (Institutional Tilt)",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.12345679012345678,
            "low_confidence_pct": 0.47530864197530864,
            "avg_feature_coverage": 0.7277777777777779,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "MZH",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.09358490566037736,
            "mixed_pct": 0.0,
            "instit_pct": 0.6279245283018868,
            "ambiguous_pct": 0.1939622641509434,
            "unobservable_pct": 0.08452830188679246,
            "unclear_pct": 0.27849056603773586,
            "retail_qty_pct": 0.02011451242859728,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7759255825590825,
            "ambiguous_qty_pct": 0.07431467908148791,
            "unobservable_qty_pct": 0.12964522593083236,
            "unclear_qty_pct": 0.20395990501232025,
            "retail_notional_pct": 0.020297965022438486,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7771457099784469,
            "ambiguous_notional_pct": 0.07451311571491358,
            "unobservable_notional_pct": 0.12804320928420104,
            "unclear_notional_pct": 0.20255632499911463,
            "run_retail_pct": 0.43920145190562615,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.23411978221415608,
            "run_unclear_pct": 0.32667876588021777,
            "avg_trade_size": 3521.535283018868,
            "avg_run_notional": 23772.526315789473,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail Tilt",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.2885662431941924,
            "low_confidence_pct": 0.38475499092558985,
            "avg_feature_coverage": 0.7617513611615245,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.07527703477264043,
            "mixed_pct": 0.0,
            "instit_pct": 0.623232709209018,
            "ambiguous_pct": 0.14329384791746275,
            "unobservable_pct": 0.15819640810087887,
            "unclear_pct": 0.3014902560183416,
            "retail_qty_pct": 0.02331325106079746,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7295128429371943,
            "ambiguous_qty_pct": 0.07811842062643734,
            "unobservable_qty_pct": 0.16905548537557089,
            "unclear_qty_pct": 0.24717390600200823,
            "retail_notional_pct": 0.023875755429408604,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7320485090612366,
            "ambiguous_notional_pct": 0.07866392206685205,
            "unobservable_notional_pct": 0.16541181344250278,
            "unclear_notional_pct": 0.24407573550935482,
            "run_retail_pct": 0.345,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.325,
            "run_unclear_pct": 0.32999999999999996,
            "avg_trade_size": 4312.615246465418,
            "avg_run_notional": 26581.34875,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed (Retail Tilt)",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.16,
            "low_confidence_pct": 0.51,
            "avg_feature_coverage": 0.7496250000000001,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "PCT",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.07128099173553719,
            "mixed_pct": 0.0,
            "instit_pct": 0.6115702479338843,
            "ambiguous_pct": 0.1487603305785124,
            "unobservable_pct": 0.1683884297520661,
            "unclear_pct": 0.3171487603305785,
            "retail_qty_pct": 0.014540987268259996,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7060308242126424,
            "ambiguous_qty_pct": 0.11565780656689748,
            "unobservable_qty_pct": 0.16377038195220014,
            "unclear_qty_pct": 0.2794281885190976,
            "retail_notional_pct": 0.014450767495127324,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7091543828508782,
            "ambiguous_notional_pct": 0.11530729582339291,
            "unobservable_notional_pct": 0.1610875538306016,
            "unclear_notional_pct": 0.2763948496539945,
            "run_retail_pct": 0.2079646017699115,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.336283185840708,
            "run_unclear_pct": 0.4557522123893806,
            "avg_trade_size": 6747.761363636364,
            "avg_run_notional": 28127.55309734513,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed (Institutional Tilt)",
            "high_confidence_pct": 0.02654867256637168,
            "medium_confidence_pct": 0.22123893805309736,
            "low_confidence_pct": 0.29646017699115046,
            "avg_feature_coverage": 0.732079646017699,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.18032786885245902,
            "mixed_pct": 0.0,
            "instit_pct": 0.47540983606557374,
            "ambiguous_pct": 0.13114754098360656,
            "unobservable_pct": 0.21311475409836064,
            "unclear_pct": 0.3442622950819672,
            "retail_qty_pct": 0.01486374896779521,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6449215524360034,
            "ambiguous_qty_pct": 0.08505367464905036,
            "unobservable_qty_pct": 0.2551610239471511,
            "unclear_qty_pct": 0.34021469859620146,
            "retail_notional_pct": 0.01493876049996188,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6446987805917203,
            "ambiguous_notional_pct": 0.08555142458639232,
            "unobservable_notional_pct": 0.2548110343219256,
            "unclear_notional_pct": 0.3403624589083179,
            "run_retail_pct": 0.30303030303030304,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.30303030303030304,
            "run_unclear_pct": 0.3939393939393939,
            "avg_trade_size": 1827.6803278688524,
            "avg_run_notional": 3375.6363636363635,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed (Retail Tilt)",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.6060606060606061,
            "avg_feature_coverage": 0.6893939393939394,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.2857142857142857,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.7142857142857143,
            "unclear_pct": 0.7142857142857143,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6226415094339622,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.37735849056603776,
            "unclear_qty_pct": 0.37735849056603776,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6252631578947369,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.37473684210526315,
            "unclear_notional_pct": 0.37473684210526315,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.5,
            "run_unclear_pct": 0.5,
            "avg_trade_size": 678.5714285714286,
            "avg_run_notional": 1597.5,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed (Institutional Tilt)",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5,
            "avg_feature_coverage": 0.7000000000000001,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "NXR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.14285714285714285,
            "mixed_pct": 0.0,
            "instit_pct": 0.42857142857142855,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.42857142857142855,
            "unclear_pct": 0.42857142857142855,
            "retail_qty_pct": 0.021611001964636542,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.5707269155206287,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.4076620825147348,
            "unclear_qty_pct": 0.4076620825147348,
            "retail_notional_pct": 0.021339850343906678,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.5708850872993878,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.4077750623567056,
            "unclear_notional_pct": 0.4077750623567056,
            "run_retail_pct": 0.25,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.5,
            "run_unclear_pct": 0.25,
            "avg_trade_size": 5670.142857142857,
            "avg_run_notional": 9922.75,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Institutional Tilt",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.75,
            "avg_feature_coverage": 0.6625000000000001,
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
            "instit_pct": 0.3333333333333333,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.6666666666666666,
            "unclear_pct": 0.6666666666666666,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.5,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.5,
            "unclear_qty_pct": 0.5,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.5,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.5,
            "unclear_notional_pct": 0.5,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 1.0,
            "run_unclear_pct": 0.0,
            "avg_trade_size": 40.0,
            "avg_run_notional": 60.0,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Institutional Tilt",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 1.0,
            "avg_feature_coverage": 0.7000000000000001,
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
            "retail_pct": 0.0472910927456382,
            "mixed_pct": 0.0,
            "instit_pct": 0.6974288337924701,
            "ambiguous_pct": 0.14830119375573922,
            "unobservable_pct": 0.10697887970615243,
            "unclear_pct": 0.25528007346189163,
            "retail_qty_pct": 0.01399008508314862,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7098313885584319,
            "ambiguous_qty_pct": 0.10865186781557243,
            "unobservable_qty_pct": 0.16752665854284712,
            "unclear_qty_pct": 0.27617852635841955,
            "retail_notional_pct": 0.014020653747575612,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7151024542531053,
            "ambiguous_notional_pct": 0.10767053999425284,
            "unobservable_notional_pct": 0.16320635200506628,
            "unclear_notional_pct": 0.27087689199931914,
            "run_retail_pct": 0.2730263157894737,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.33881578947368424,
            "run_unclear_pct": 0.3881578947368421,
            "avg_trade_size": 3010.2350780532597,
            "avg_run_notional": 20504.935855263157,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed (Institutional Tilt)",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.125,
            "low_confidence_pct": 0.4868421052631579,
            "avg_feature_coverage": 0.752467105263158,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.04819277108433735,
            "mixed_pct": 0.0,
            "instit_pct": 0.7710843373493976,
            "ambiguous_pct": 0.012048192771084338,
            "unobservable_pct": 0.1686746987951807,
            "unclear_pct": 0.18072289156626506,
            "retail_qty_pct": 0.015984748496847046,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.9203695556533216,
            "ambiguous_qty_pct": 0.002786332306789852,
            "unobservable_qty_pct": 0.0608593635430415,
            "unclear_qty_pct": 0.06364569584983135,
            "retail_notional_pct": 0.01631285615880769,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.9204615191934373,
            "ambiguous_notional_pct": 0.0027960423320182856,
            "unobservable_notional_pct": 0.06042958231573674,
            "unclear_notional_pct": 0.06322562464775502,
            "run_retail_pct": 0.21052631578947367,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.5263157894736842,
            "run_unclear_pct": 0.2631578947368421,
            "avg_trade_size": 1923.9759036144578,
            "avg_run_notional": 8225.236842105263,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Institutional Tilt",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.7368421052631579,
            "avg_feature_coverage": 0.7394736842105264,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.13513513513513514,
            "mixed_pct": 0.0,
            "instit_pct": 0.6036036036036037,
            "ambiguous_pct": 0.11711711711711711,
            "unobservable_pct": 0.14414414414414414,
            "unclear_pct": 0.26126126126126126,
            "retail_qty_pct": 0.009459992116673236,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7875443437130469,
            "ambiguous_qty_pct": 0.07331493890421759,
            "unobservable_qty_pct": 0.12968072526606228,
            "unclear_qty_pct": 0.20299566417027987,
            "retail_notional_pct": 0.009516383001119195,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7871036899076932,
            "ambiguous_notional_pct": 0.07346518786800799,
            "unobservable_notional_pct": 0.1299147392231796,
            "unclear_notional_pct": 0.20337992709118757,
            "run_retail_pct": 0.27450980392156865,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.37254901960784315,
            "run_unclear_pct": 0.3529411764705882,
            "avg_trade_size": 2096.9054054054054,
            "avg_run_notional": 4526.156862745098,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed (Institutional Tilt)",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.6470588235294118,
            "avg_feature_coverage": 0.7107843137254902,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "MZH",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.11190607228031554,
            "mixed_pct": 0.0,
            "instit_pct": 0.5778756191524491,
            "ambiguous_pct": 0.22573839662447256,
            "unobservable_pct": 0.08447991194276279,
            "unclear_pct": 0.31021830856723537,
            "retail_qty_pct": 0.023420662270653023,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.770020797397117,
            "ambiguous_qty_pct": 0.07684279658937786,
            "unobservable_qty_pct": 0.12971574374285208,
            "unclear_qty_pct": 0.20655854033222992,
            "retail_notional_pct": 0.02326436684226232,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7715996071131687,
            "ambiguous_notional_pct": 0.07679567410092061,
            "unobservable_notional_pct": 0.1283403519436484,
            "unclear_notional_pct": 0.20513602604456901,
            "run_retail_pct": 0.48656061437191445,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.18650575973669775,
            "run_unclear_pct": 0.32693362589138786,
            "avg_trade_size": 2983.8074665199047,
            "avg_run_notional": 16636.851069665387,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail Tilt",
            "high_confidence_pct": 0.018102029621503018,
            "medium_confidence_pct": 0.3165112452002194,
            "low_confidence_pct": 0.33845309928688977,
            "avg_feature_coverage": 0.7624520021941853,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "PCT",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.08241252302025782,
            "mixed_pct": 0.0,
            "instit_pct": 0.6427255985267035,
            "ambiguous_pct": 0.13766114180478822,
            "unobservable_pct": 0.13720073664825047,
            "unclear_pct": 0.27486187845303867,
            "retail_qty_pct": 0.013087643093072712,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7388692819329442,
            "ambiguous_qty_pct": 0.11531152436541332,
            "unobservable_qty_pct": 0.13273155060856975,
            "unclear_qty_pct": 0.2480430749739831,
            "retail_notional_pct": 0.013204030211467863,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7393492258474477,
            "ambiguous_notional_pct": 0.11493594918647661,
            "unobservable_notional_pct": 0.1325107947546078,
            "unclear_notional_pct": 0.2474467439410844,
            "run_retail_pct": 0.26287744227353466,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.34458259325044405,
            "run_unclear_pct": 0.3925399644760213,
            "avg_trade_size": 5786.223756906077,
            "avg_run_notional": 21753.522202486678,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed (Institutional Tilt)",
            "high_confidence_pct": 0.010657193605683837,
            "medium_confidence_pct": 0.2877442273534636,
            "low_confidence_pct": 0.30905861456483125,
            "avg_feature_coverage": 0.7365008880994672,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.06650396583282489,
            "mixed_pct": 0.0,
            "instit_pct": 0.6412446613788896,
            "ambiguous_pct": 0.13697376449054302,
            "unobservable_pct": 0.15527760829774254,
            "unclear_pct": 0.29225137278828556,
            "retail_qty_pct": 0.0218324840728389,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7204211880618239,
            "ambiguous_qty_pct": 0.10018452370875726,
            "unobservable_qty_pct": 0.15756180415657994,
            "unclear_qty_pct": 0.2577463278653372,
            "retail_notional_pct": 0.02233496248819775,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7227297034275467,
            "ambiguous_notional_pct": 0.09936530236329207,
            "unobservable_notional_pct": 0.15557003172096354,
            "unclear_notional_pct": 0.2549353340842556,
            "run_retail_pct": 0.3132530120481928,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.3453815261044177,
            "run_unclear_pct": 0.3413654618473896,
            "avg_trade_size": 4822.000793166565,
            "avg_run_notional": 29927.104417670682,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed (Institutional Tilt)",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.14457831325301204,
            "low_confidence_pct": 0.5140562248995983,
            "avg_feature_coverage": 0.7470883534136545,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "NXR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.08333333333333333,
            "mixed_pct": 0.0,
            "instit_pct": 0.25,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.6666666666666666,
            "unclear_pct": 0.6666666666666666,
            "retail_qty_pct": 0.010456273764258554,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.2761406844106464,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.7134030418250951,
            "unclear_qty_pct": 0.7134030418250951,
            "retail_notional_pct": 0.010130003707557437,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.2709985289368878,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.7188714673555547,
            "unclear_notional_pct": 0.7188714673555547,
            "run_retail_pct": 0.16666666666666666,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.3333333333333333,
            "run_unclear_pct": 0.5,
            "avg_trade_size": 6967.75,
            "avg_run_notional": 13868.833333333334,
            "dominant_bucket": "UNOBSERVABLE",
            "dominant_label": "Not Observable",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5,
            "avg_feature_coverage": 0.6083333333333334,
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
            "instit_pct": 0.1,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.9,
            "unclear_pct": 0.9,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.022727272727272728,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.9772727272727273,
            "unclear_qty_pct": 0.9772727272727273,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.022727272727272728,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.9772727272727273,
            "unclear_notional_pct": 0.9772727272727273,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.5,
            "run_unclear_pct": 0.5,
            "avg_trade_size": 264.0,
            "avg_run_notional": 530.0,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed (Institutional Tilt)",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5,
            "avg_feature_coverage": 0.625,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ],
        "max": [
          {
            "ticker": "TKU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.058400836164097206,
            "mixed_pct": 0.0,
            "instit_pct": 0.6894434282727986,
            "ambiguous_pct": 0.13692187091716748,
            "unobservable_pct": 0.11523386464593677,
            "unclear_pct": 0.2521557355631042,
            "retail_qty_pct": 0.01738154715134983,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.753455183609328,
            "ambiguous_qty_pct": 0.08083220909373934,
            "unobservable_qty_pct": 0.14833106014558284,
            "unclear_qty_pct": 0.22916326923932218,
            "retail_notional_pct": 0.01756101464476667,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7581657364664395,
            "ambiguous_notional_pct": 0.07969712379745206,
            "unobservable_notional_pct": 0.1445761250913418,
            "unclear_notional_pct": 0.22427324888879385,
            "run_retail_pct": 0.359026369168357,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.3265720081135903,
            "run_unclear_pct": 0.3144016227180527,
            "avg_trade_size": 3706.8563626861774,
            "avg_run_notional": 26487.470588235294,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed (Retail Tilt)",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.1663286004056795,
            "low_confidence_pct": 0.5192697768762677,
            "avg_feature_coverage": 0.7571501014198783,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.02857142857142857,
            "mixed_pct": 0.0,
            "instit_pct": 0.7485714285714286,
            "ambiguous_pct": 0.06857142857142857,
            "unobservable_pct": 0.15428571428571428,
            "unclear_pct": 0.22285714285714286,
            "retail_qty_pct": 0.009770311964346932,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.8632156324991429,
            "ambiguous_qty_pct": 0.053393897840246826,
            "unobservable_qty_pct": 0.07362015769626329,
            "unclear_qty_pct": 0.12701405553651013,
            "retail_notional_pct": 0.010132865566917967,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.8652627453907591,
            "ambiguous_notional_pct": 0.05141636187206091,
            "unobservable_notional_pct": 0.073188027170262,
            "unclear_notional_pct": 0.1246043890423229,
            "run_retail_pct": 0.1282051282051282,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.48717948717948717,
            "run_unclear_pct": 0.3846153846153846,
            "avg_trade_size": 1531.0857142857142,
            "avg_run_notional": 6738.0,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Institutional Tilt",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.6153846153846154,
            "avg_feature_coverage": 0.7346153846153848,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.07878787878787878,
            "mixed_pct": 0.0,
            "instit_pct": 0.6636363636363637,
            "ambiguous_pct": 0.13333333333333333,
            "unobservable_pct": 0.12424242424242424,
            "unclear_pct": 0.25757575757575757,
            "retail_qty_pct": 0.007165437302423604,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.8091675447839831,
            "ambiguous_qty_pct": 0.08661749209694415,
            "unobservable_qty_pct": 0.09704952581664911,
            "unclear_qty_pct": 0.18366701791359324,
            "retail_notional_pct": 0.007124003736281015,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.8105932033331849,
            "ambiguous_notional_pct": 0.08629511672029737,
            "unobservable_notional_pct": 0.09598767621023672,
            "unclear_notional_pct": 0.1822827929305341,
            "run_retail_pct": 0.20909090909090908,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.4090909090909091,
            "run_unclear_pct": 0.38181818181818183,
            "avg_trade_size": 2755.940909090909,
            "avg_run_notional": 8023.004545454545,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Institutional Tilt",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.6181818181818182,
            "avg_feature_coverage": 0.7277272727272727,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "MZH",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.11827276180828163,
            "mixed_pct": 0.0,
            "instit_pct": 0.5626820311510701,
            "ambiguous_pct": 0.2337596555654046,
            "unobservable_pct": 0.08528555147524376,
            "unclear_pct": 0.31904520704064837,
            "retail_qty_pct": 0.02345018691486927,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7674435713273681,
            "ambiguous_qty_pct": 0.08017312785413011,
            "unobservable_qty_pct": 0.12893311390363257,
            "unclear_qty_pct": 0.20910624175776268,
            "retail_notional_pct": 0.023296634357249837,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7690237883968689,
            "ambiguous_notional_pct": 0.0798936332551502,
            "unobservable_notional_pct": 0.12778594399073107,
            "unclear_notional_pct": 0.20767957724588126,
            "run_retail_pct": 0.5001810938065918,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.17819630568634554,
            "run_unclear_pct": 0.3216226005070627,
            "avg_trade_size": 2800.667975180448,
            "avg_run_notional": 14933.565193770373,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail Tilt",
            "high_confidence_pct": 0.03187250996015936,
            "medium_confidence_pct": 0.31908728721477725,
            "low_confidence_pct": 0.3274176023180007,
            "avg_feature_coverage": 0.7650670047084389,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "PCT",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.08918094344050692,
            "mixed_pct": 0.0,
            "instit_pct": 0.6503168270359071,
            "ambiguous_pct": 0.13236329500117344,
            "unobservable_pct": 0.12813893452241257,
            "unclear_pct": 0.26050222952358604,
            "retail_qty_pct": 0.014643078911685316,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7639175780309463,
            "ambiguous_qty_pct": 0.10867306205725437,
            "unobservable_qty_pct": 0.11276628100011406,
            "unclear_qty_pct": 0.22143934305736843,
            "retail_notional_pct": 0.014760076839039004,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7641499267068683,
            "ambiguous_notional_pct": 0.10841736544607183,
            "unobservable_notional_pct": 0.11267263100802082,
            "unclear_notional_pct": 0.22108999645409266,
            "run_retail_pct": 0.28884826325411334,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.3610603290676417,
            "run_unclear_pct": 0.350091407678245,
            "avg_trade_size": 5311.364703121333,
            "avg_run_notional": 20172.6718464351,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed (Institutional Tilt)",
            "high_confidence_pct": 0.005484460694698354,
            "medium_confidence_pct": 0.27879341864716634,
            "low_confidence_pct": 0.3656307129798903,
            "avg_feature_coverage": 0.7417733089579525,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.06536881585997499,
            "mixed_pct": 0.0,
            "instit_pct": 0.6810144668690837,
            "ambiguous_pct": 0.12145025897481693,
            "unobservable_pct": 0.1321664582961243,
            "unclear_pct": 0.25361671727094126,
            "retail_qty_pct": 0.025426995728075902,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7267306012949516,
            "ambiguous_qty_pct": 0.09955235270515857,
            "unobservable_qty_pct": 0.14829005027181397,
            "unclear_qty_pct": 0.24784240297697252,
            "retail_notional_pct": 0.025613288125262732,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.727873250243136,
            "ambiguous_notional_pct": 0.09904318849913663,
            "unobservable_notional_pct": 0.14747027313246464,
            "unclear_notional_pct": 0.24651346163160126,
            "run_retail_pct": 0.30156815440289503,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.36670687575392036,
            "run_unclear_pct": 0.33172496984318456,
            "avg_trade_size": 3980.093963207716,
            "avg_run_notional": 25464.176115802173,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed (Institutional Tilt)",
            "high_confidence_pct": 0.0048250904704463205,
            "medium_confidence_pct": 0.16767189384800965,
            "low_confidence_pct": 0.4957780458383595,
            "avg_feature_coverage": 0.751568154402895,
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
            "instit_pct": 0.6216216216216216,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.3783783783783784,
            "unclear_pct": 0.3783783783783784,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6954379741846487,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.30456202581535124,
            "unclear_qty_pct": 0.30456202581535124,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6954379741846488,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.30456202581535124,
            "unclear_notional_pct": 0.30456202581535124,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.5833333333333334,
            "run_unclear_pct": 0.4166666666666667,
            "avg_trade_size": 301.727027027027,
            "avg_run_notional": 796.9916666666668,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Institutional Tilt",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5833333333333334,
            "avg_feature_coverage": 0.65,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "NXR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.08888888888888889,
            "mixed_pct": 0.0,
            "instit_pct": 0.4666666666666667,
            "ambiguous_pct": 0.15555555555555556,
            "unobservable_pct": 0.28888888888888886,
            "unclear_pct": 0.4444444444444444,
            "retail_qty_pct": 0.0064500124038700075,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.46067973207640783,
            "ambiguous_qty_pct": 0.051103944430662365,
            "unobservable_qty_pct": 0.48176631108905976,
            "unclear_qty_pct": 0.5328702555197221,
            "retail_notional_pct": 0.006174592559341133,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.4622149747611239,
            "ambiguous_notional_pct": 0.05155265657111622,
            "unobservable_notional_pct": 0.48005777610841877,
            "unclear_notional_pct": 0.531610432679535,
            "run_retail_pct": 0.19047619047619047,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.38095238095238093,
            "run_unclear_pct": 0.42857142857142855,
            "avg_trade_size": 3638.5666666666666,
            "avg_run_notional": 7773.928571428572,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Institutional Tilt",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5714285714285714,
            "avg_feature_coverage": 0.680952380952381,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ]
      },
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
        "unclear": "Ambiguous + unobservable"
      }
    },
    "price_moving_trades": {
      "total_trades": 7653,
      "price_moving_trades": 806,
      "pct_price_moving": 10.531817587874036,
      "all_movers": {
        "count": 806,
        "avg_size": 3364.9988833746897,
        "median_size": 561.0,
        "retail_count": 310,
        "mixed_count": 0,
        "institutional_count": 270,
        "ambiguous_count": 163,
        "unobservable_count": 63,
        "retail_pct": 38.46153846153847,
        "mixed_pct": 0.0,
        "instit_pct": 33.49875930521092,
        "unclear_pct": 28.03970223325062
      },
      "positive_movers": {
        "count": 402,
        "avg_size": 2964.787562189055,
        "median_size": 92.25,
        "retail_count": 183,
        "mixed_count": 0,
        "institutional_count": 134,
        "ambiguous_count": 70,
        "unobservable_count": 15,
        "retail_pct": 45.52238805970149,
        "mixed_pct": 0.0,
        "instit_pct": 33.33333333333333,
        "unclear_pct": 21.144278606965177
      },
      "negative_movers": {
        "count": 404,
        "avg_size": 3763.2289603960394,
        "median_size": 1100.0,
        "retail_count": 127,
        "mixed_count": 0,
        "institutional_count": 136,
        "ambiguous_count": 93,
        "unobservable_count": 48,
        "retail_pct": 31.435643564356436,
        "mixed_pct": 0.0,
        "instit_pct": 33.663366336633665,
        "unclear_pct": 34.900990099009896
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
        "n_days_short_data": 18,
        "window_days": 18
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
            "avg_short_ratio": 0.0031313361350504237,
            "max_short_ratio": 0.014653168944735494,
            "interpretation": "Low short interest"
          }
        },
        "18D": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.005440498424995105,
            "max_short_ratio": 0.027351428548504857,
            "interpretation": "Low short interest"
          }
        }
      },
      "correlation": {
        "valid": true,
        "correlation": -0.29588432247080354,
        "interpretation": "Moderate negative - shorts somewhat predict drops"
      },
      "peaks": [],
      "short_interest_change": {
        "valid": false,
        "monthly_data": [],
        "mom_change": [],
        "interpretation": ""
      },
      "short_series": {
        "valid": true,
        "rows": [
          {
            "date": "2026-02-16",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1310400,
            "close": 0.25,
            "return": 0.08695652173913038
          },
          {
            "date": "2026-02-13",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2619400,
            "close": 0.23,
            "return": 0.0
          },
          {
            "date": "2026-02-12",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1588200,
            "close": 0.23,
            "return": 0.0
          },
          {
            "date": "2026-02-11",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1992800,
            "close": 0.23,
            "return": 0.045454545454545414
          },
          {
            "date": "2026-02-10",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 3371800,
            "close": 0.22,
            "return": 0.0
          },
          {
            "date": "2026-02-09",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 4116600,
            "close": 0.22,
            "return": -0.06382978723404253
          },
          {
            "date": "2026-02-06",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 5132900,
            "close": 0.235,
            "return": -0.06000000000000005
          },
          {
            "date": "2026-02-05",
            "short_ratio": 0.009976720984369804,
            "short_vol": 30000,
            "total_vol": 3007000,
            "close": 0.25,
            "return": 0.0
          },
          {
            "date": "2026-02-04",
            "short_ratio": 0.014653168944735494,
            "short_vol": 37200,
            "total_vol": 2538700,
            "close": 0.25,
            "return": -0.05660377358490576
          },
          {
            "date": "2026-02-03",
            "short_ratio": 0.0029329962073324904,
            "short_vol": 5800,
            "total_vol": 1977500,
            "close": 0.265,
            "return": 0.03921568627450989
          },
          {
            "date": "2026-02-02",
            "short_ratio": 0.006881811349116873,
            "short_vol": 58600,
            "total_vol": 8515200,
            "close": 0.255,
            "return": -0.037735849056603765
          },
          {
            "date": "2026-01-30",
            "short_ratio": 0.0030064912880081993,
            "short_vol": 44000,
            "total_vol": 14635000,
            "close": 0.265,
            "return": 0.03921568627450989
          },
          {
            "date": "2026-01-29",
            "short_ratio": 0.012090950356951265,
            "short_vol": 29300,
            "total_vol": 2423300,
            "close": 0.255,
            "return": 0.020000000000000018
          },
          {
            "date": "2026-01-28",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2401500,
            "close": 0.25,
            "return": -0.03846153846153855
          },
          {
            "date": "2026-01-27",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 3285000,
            "close": 0.26,
            "return": 0.0
          },
          {
            "date": "2026-01-26",
            "short_ratio": 0.021019119182513736,
            "short_vol": 122800,
            "total_vol": 5842300,
            "close": 0.26,
            "return": -0.018867924528301883
          },
          {
            "date": "2026-01-23",
            "short_ratio": 0.027351428548504857,
            "short_vol": 340900,
            "total_vol": 12463700,
            "close": 0.265,
            "return": -0.07017543859649111
          },
          {
            "date": "2026-01-22",
            "short_ratio": 1.628478837917501e-05,
            "short_vol": 500,
            "total_vol": 30703500,
            "close": 0.285,
            "return": null
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "TKU",
          "avg_short_ratio": 0.0031313361350504237,
          "max_short_ratio": 0.014653168944735494,
          "is_target": true
        },
        {
          "ticker": "NXR",
          "avg_short_ratio": 8.635865413359019e-05,
          "max_short_ratio": 0.03229813664596273,
          "is_target": false
        },
        {
          "ticker": "U77",
          "avg_short_ratio": 0.0008335804748356801,
          "max_short_ratio": 0.12345679012345678,
          "is_target": false
        },
        {
          "ticker": "ITS",
          "avg_short_ratio": 0.004795398540977516,
          "max_short_ratio": 0.1385606874328679,
          "is_target": false
        },
        {
          "ticker": "MZH",
          "avg_short_ratio": 0.015528865904717548,
          "max_short_ratio": 0.1925319217425516,
          "is_target": false
        },
        {
          "ticker": "PCT",
          "avg_short_ratio": 0.020002662333461912,
          "max_short_ratio": 0.8042895442359249,
          "is_target": false
        }
      ]
    },
    "intraday": {
      "session_periods": [
        "1D",
        "1W",
        "2W",
        "18D"
      ],
      "session": {
        "1D": {
          "opening": 0.0,
          "continuous": 0.9984205156068853,
          "closing": 0.0015794843931147117,
          "auctions": 0.0015794843931147117,
          "other": 0.0
        },
        "1W": {
          "opening": 0.006574972887689943,
          "continuous": 0.9483827547277228,
          "closing": 0.0383676853444909,
          "auctions": 0.05161724527227722,
          "other": 0.0
        },
        "2W": {
          "opening": 0.013166167723140597,
          "continuous": 0.9370092137344519,
          "closing": 0.04232891933239811,
          "auctions": 0.06299078626554812,
          "other": 0.0
        },
        "18D": {
          "opening": 0.043441244793077705,
          "continuous": 0.9204987152494688,
          "closing": 0.02903432648514878,
          "auctions": 0.0795012847505311,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.3012918861723688,
        "1W": 0.17564035488181293,
        "2W": 0.17720460503975258,
        "18D": 0.1585437625141794
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.0068
        },
        {
          "time": "09:00",
          "avg_share": 0.1412
        },
        {
          "time": "09:30",
          "avg_share": 0.1112
        },
        {
          "time": "10:00",
          "avg_share": 0.0697
        },
        {
          "time": "10:30",
          "avg_share": 0.0344
        },
        {
          "time": "11:00",
          "avg_share": 0.0435
        },
        {
          "time": "11:30",
          "avg_share": 0.0572
        },
        {
          "time": "12:00",
          "avg_share": 0.0022
        },
        {
          "time": "12:30",
          "avg_share": 0.0111
        },
        {
          "time": "13:00",
          "avg_share": 0.1004
        },
        {
          "time": "13:30",
          "avg_share": 0.059
        },
        {
          "time": "14:00",
          "avg_share": 0.104
        },
        {
          "time": "14:30",
          "avg_share": 0.0423
        },
        {
          "time": "15:00",
          "avg_share": 0.0263
        },
        {
          "time": "15:30",
          "avg_share": 0.0241
        },
        {
          "time": "16:00",
          "avg_share": 0.0486
        },
        {
          "time": "16:30",
          "avg_share": 0.0828
        },
        {
          "time": "17:00",
          "avg_share": 0.0352
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "TKU",
          "auctions_pct": 7.95012847505311,
          "hhi": 0.1585437625141794,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400",
            "you": true
          }
        },
        {
          "ticker": "ITS",
          "auctions_pct": 6.6533888377380865,
          "hhi": 0.2569953331330306,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "LVR",
          "auctions_pct": 2.734792523880103,
          "hhi": 0.33821694480599157,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "U77",
          "auctions_pct": 8.228583332515424,
          "hhi": 0.5079581161032641,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "NXR",
          "auctions_pct": 2.7073226652941913,
          "hhi": 0.6479826819022936,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "532",
          "auctions_pct": 7.907663530673465,
          "hhi": 0.7848654548729174,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "KUX",
          "auctions_pct": 2.9515790808684454,
          "hhi": 0.8029486013609161,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "PCT",
          "auctions_pct": 2.8663733555544217,
          "hhi": 0.36586359899239185,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "MZH",
          "auctions_pct": 7.146148798086814,
          "hhi": 0.1632789066315306,
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
