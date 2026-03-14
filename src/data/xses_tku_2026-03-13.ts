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
      "marketCap": 142560313.75,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "ITS",
      "name": "Info-Tech",
      "marketCap": 268320000.0,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "LVR",
      "name": "17LIVE GROUP",
      "marketCap": 143048079.95999998,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "NXR",
      "name": "iWOW Tech",
      "marketCap": 105690220.8,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "U77",
      "name": "Sarine Tech",
      "marketCap": 69825469.63499999,
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
      "ticker": "9MT",
      "name": "METAOPTICS LTD",
      "marketCap": 186839160.20000002,
      "sector": "Computer Hardware",
      "industry": "Technology"
    },
    {
      "ticker": "QS9",
      "name": "G Invacom",
      "marketCap": 15213084.712000001,
      "sector": "Communication Equipment",
      "industry": "Technology"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XSES",
    "ticker": "TKU",
    "company": "Toku Ltd",
    "asof_date": "2026-03-13",
    "industry": "Technology",
    "sector": "Software - Application",
    "market_cap_display": "142.6M",
    "market_cap_category": "small",
    "universe_total": 558,
    "peers_count": 8,
    "page_title_template": "Liquidity Analysis Report — {market}/{ticker} — {asof}"
  },
  "q01": {
    "primary_liquidity_period": "30d",
    "periods": {
      "1d": {
        "label": "1D",
        "window_days": 1,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 1,
          "score_pca": 71.86379928315412,
          "score_pca_percentile": 71.86379928315412,
          "rank_pca": 158,
          "total": 558,
          "adv_notional_sgd": 228475.0,
          "adv_volume_shares": 913900.0,
          "free_float_shares": null,
          "turnover_ratio": 0.001602655002574305,
          "votes": 39.0,
          "trades": 39.0,
          "spread_pct": 0.023792577529232358,
          "spread_ticks": 1.17,
          "amihud": 0.0,
          "volatility": 0.3891811206428322
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5268987612651072,
          "loadings": {
            "log_adv": 0.5482304682117487,
            "log_trades": 0.5059521468500701,
            "log_turnover": 0.5170798018078988,
            "neg_spread": 0.36965399704261037,
            "neg_amihud": 0.03428592950142355,
            "neg_vol": -0.19561353453450506
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
          "peer_median_adv": 17344.25,
          "peer_median_score_pca": 54.749103942652326,
          "peer_median_trades": 11.0,
          "peer_median_volatility": 0.27314706720032644,
          "peer_median_spread_pct": 0.024226994561816775,
          "peer_median_spread_ticks": 2.118099909808758,
          "peer_median_amihud": 3.4801867746638283e-07,
          "peer_median_turnover_ratio": 0.00019752747883307548,
          "target_vs_peer": {
            "score_pca_delta": 17.11,
            "adv_delta_pct": 1217.3,
            "trades_delta_pct": 254.55,
            "volatility_delta_pct": -42.48,
            "spread_pct_delta_pct": 1.79,
            "spread_ticks_delta_pct": -44.76,
            "amihud_delta_pct": 100.0,
            "turnover_ratio_delta_pct": 711.36
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 71.86379928315412,
            "rank_pca": 158,
            "adv": 228475.0,
            "trades": 39.0,
            "volatility": 0.3891811206428322,
            "spread_pct": 0.023792577529232358,
            "spread_ticks": 1.17,
            "amihud": 0.0,
            "turnover_ratio": 0.001602655002574305,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 81.00358422939068,
            "rank_pca": 107,
            "adv": 520608.0,
            "trades": 246.0,
            "volatility": 0.3702839617036409,
            "spread_pct": 0.016508845573958993,
            "spread_ticks": 1.6948775055679288,
            "amihud": 3.693905823723276e-08,
            "turnover_ratio": 0.007559398447242686,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 54.121863799283155,
            "rank_pca": 257,
            "adv": 18917.5,
            "trades": 12.0,
            "volatility": 0.17601017269701197,
            "spread_pct": 0.00702576112412176,
            "spread_ticks": 1.1428571428571428,
            "amihud": 9.66971477564645e-07,
            "turnover_ratio": 0.0001624571743013462,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 16.845878136200717,
            "rank_pca": 465,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.12978369384359406,
            "spread_ticks": 9.75,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 55.376344086021504,
            "rank_pca": 250,
            "adv": 15771.0,
            "trades": 10.0,
            "volatility": 0.4651465708855946,
            "spread_pct": 0.029612017723981348,
            "spread_ticks": 2.652173913043478,
            "amihud": 1.5465248812655536e-06,
            "turnover_ratio": 0.00023259778336480474,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 2.7777777777777777,
            "rank_pca": 540,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.6666666666666666,
            "spread_ticks": 1.0,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "KUX",
            "score_pca": 6.810035842293908,
            "rank_pca": 521,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.4183673469387756,
            "spread_ticks": 16.4,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "9MT",
            "score_pca": 78.13620071684588,
            "rank_pca": 123,
            "adv": 130609.5,
            "trades": 106.0,
            "volatility": 0.8078901249775654,
            "spread_pct": 0.016534258176392317,
            "spread_ticks": 2.541322314049587,
            "amihud": 3.4801867746638283e-07,
            "turnover_ratio": 0.0021541288006099346,
            "is_target": false
          },
          {
            "ticker": "QS9",
            "score_pca": 82.25806451612904,
            "rank_pca": 100,
            "adv": 348395.4,
            "trades": 169.0,
            "volatility": 0.6577513753850458,
            "spread_pct": 0.018841971399652206,
            "spread_ticks": 1.09009009009009,
            "amihud": 5.125539216976686e-08,
            "turnover_ratio": 0.026858378121318627,
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
              "mean": 0.22320202311753023,
              "median": 0.10760414128112343,
              "min": 0.0,
              "max": 6.608197362010048,
              "p5": 0.0,
              "p95": 0.8081163795519644,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2968428.7227674224,
              "median": 10424.0,
              "min": 0.0,
              "max": 253247897.0,
              "p5": 0.0,
              "p95": 12566088.899999954,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.11318567677149338,
              "median": 0.03139717425431714,
              "min": 0.0002433041298153404,
              "max": 1.4382566585956416,
              "p5": 0.0038628620026989933,
              "p95": 0.5174663552976861,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.009562553309578201,
              "median": 0.00021348010317063257,
              "min": 0.0,
              "max": 3.7275064267352187,
              "p5": 0.0,
              "p95": 0.011787366308130483,
              "count": 552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0007686537586643698,
              "median": 8.350140496123931e-09,
              "min": 0.0,
              "max": 0.25,
              "p5": 0.0,
              "p95": 5.8914480189715755e-05,
              "count": 395
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 474.8297491039427,
              "median": 7.0,
              "min": 0.0,
              "max": 12505.0,
              "p5": 0.0,
              "p95": 2897.199999999998,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.2040945073946077,
              "median": 0.20407220296239686,
              "min": 0.0,
              "max": 0.4651465708855946,
              "p5": 0.0,
              "p95": 0.4385586633006277,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1937999.0624999998,
              "median": 17344.25,
              "min": 0.0,
              "max": 14720220.999999998,
              "p5": 0.0,
              "p95": 9750356.449999992,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.161641264579694,
              "median": 0.026702297626606853,
              "min": 0.001373207237221099,
              "max": 0.6666666666666666,
              "p5": 0.0033516010976363305,
              "p95": 0.5797619047619046,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002459224161333785,
              "median": 0.00019752747883307548,
              "min": 0.0,
              "max": 0.01011668488318714,
              "p5": 0.0,
              "p95": 0.00922163463060658,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.103983492218677e-07,
              "median": 3.693905823723276e-08,
              "min": 0.0,
              "max": 1.5465248812655536e-06,
              "p5": 3.1126580838141036e-10,
              "p95": 1.4306142005253717e-06,
              "count": 5
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 477.25,
              "median": 11.0,
              "min": 0.0,
              "max": 3511.0,
              "p5": 0.0,
              "p95": 2368.249999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 129287.675,
              "median": 17344.25,
              "min": 0.0,
              "max": 520608.0,
              "p5": 0.0,
              "p95": 460333.5899999999,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 67.875,
              "median": 11.0,
              "min": 0.0,
              "max": 246.0,
              "p5": 0.0,
              "p95": 219.04999999999995,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3096352757061073,
              "median": 0.27314706720032644,
              "min": 0.0,
              "max": 0.8078901249775654,
              "p5": 0.0,
              "p95": 0.7553415626201835,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.16291757018089284,
              "median": 0.024226994561816775,
              "min": 0.00702576112412176,
              "max": 0.6666666666666666,
              "p5": 0.010344840681564792,
              "p95": 0.5797619047619046,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 4.533915120701028,
              "median": 2.118099909808758,
              "min": 1.0,
              "max": 16.4,
              "p5": 1.0315315315315314,
              "p95": 14.072499999999994,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.899418973407162e-07,
              "median": 3.4801867746638283e-07,
              "min": 3.693905823723276e-08,
              "max": 1.5465248812655536e-06,
              "p5": 3.980232502373958e-08,
              "p95": 1.4306142005253717e-06,
              "count": 5
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004620870040854675,
              "median": 0.00019752747883307548,
              "min": 0.0,
              "max": 0.026858378121318627,
              "p5": 0.0,
              "p95": 0.020103735235392037,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.0,
            "market": -0.0026898394926001545,
            "sector": 0.0,
            "peers": 0.0,
            "vs_market": 0.0026898394926001545,
            "vs_sector": 0.0,
            "vs_peers": 0.0
          }
        }
      },
      "1w": {
        "label": "1W",
        "window_days": 5,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 5,
          "score_pca": 73.47670250896059,
          "score_pca_percentile": 73.47670250896059,
          "rank_pca": 149,
          "total": 558,
          "adv_notional_sgd": 228475.0,
          "adv_volume_shares": 913900.0,
          "free_float_shares": null,
          "turnover_ratio": 0.001602655002574305,
          "votes": 85.0,
          "trades": 85.0,
          "spread_pct": 0.025316455696202552,
          "spread_ticks": 1.17,
          "amihud": 1.0373766818469451e-07,
          "volatility": 0.6283471208785856
        },
        "pca": {
          "valid": true,
          "window_days": 5,
          "variance_explained": 0.5215762851167354,
          "loadings": {
            "log_adv": 0.5522057846947955,
            "log_trades": 0.505093350152006,
            "log_turnover": 0.5154120556529314,
            "neg_spread": 0.4108775157574088,
            "neg_amihud": 0.07304574181869297,
            "neg_vol": 0.011994937124632144
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
          "peer_median_adv": 11381.0,
          "peer_median_score_pca": 51.25448028673834,
          "peer_median_trades": 7.5,
          "peer_median_volatility": 0.3016713399166431,
          "peer_median_spread_pct": 0.02427608462636146,
          "peer_median_spread_ticks": 1.7095254314259765,
          "peer_median_amihud": 5.760066724612961e-08,
          "peer_median_turnover_ratio": 0.00013537245011198184,
          "target_vs_peer": {
            "score_pca_delta": 22.22,
            "adv_delta_pct": 1907.5,
            "trades_delta_pct": 1033.33,
            "volatility_delta_pct": -108.29,
            "spread_pct_delta_pct": -4.29,
            "spread_ticks_delta_pct": -31.56,
            "amihud_delta_pct": -80.1,
            "turnover_ratio_delta_pct": 1083.89
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 73.47670250896059,
            "rank_pca": 149,
            "adv": 228475.0,
            "trades": 85.0,
            "volatility": 0.6283471208785856,
            "spread_pct": 0.025316455696202552,
            "spread_ticks": 1.17,
            "amihud": 1.0373766818469451e-07,
            "turnover_ratio": 0.001602655002574305,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 81.89964157706093,
            "rank_pca": 102,
            "adv": 510615.0,
            "trades": 326.0,
            "volatility": 0.5125013619814999,
            "spread_pct": 0.014894709809964062,
            "spread_ticks": 1.5440508628519527,
            "amihud": 5.760066724612961e-08,
            "turnover_ratio": 0.007202459766642081,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 49.283154121863795,
            "rank_pca": 284,
            "adv": 10790.0,
            "trades": 5.0,
            "volatility": 0.27838089432840074,
            "spread_pct": 0.011411182959300124,
            "spread_ticks": 1.875,
            "amihud": 9.66971477564645e-07,
            "turnover_ratio": 8.986992620925533e-05,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 31.36200716845878,
            "rank_pca": 384,
            "adv": 74.0,
            "trades": 1.0,
            "volatility": 0.37397343886501616,
            "spread_pct": 0.054257724189902067,
            "spread_ticks": 4.0,
            "amihud": 1.6983887951629893e-06,
            "turnover_ratio": 3.5598149294935937e-06,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 53.2258064516129,
            "rank_pca": 262,
            "adv": 11972.0,
            "trades": 10.0,
            "volatility": 0.2705323056364314,
            "spread_pct": 0.025982060006186133,
            "spread_ticks": 1.5,
            "amihud": 0.0,
            "turnover_ratio": 0.00018087497401470836,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 2.7777777777777777,
            "rank_pca": 540,
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
            "score_pca": 7.347670250896058,
            "rank_pca": 518,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.4235727440147329,
            "spread_ticks": 16.428571428571427,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "9MT",
            "score_pca": 78.31541218637993,
            "rank_pca": 122,
            "adv": 274525.0,
            "trades": 151.0,
            "volatility": 0.32496178550488547,
            "spread_pct": 0.016534258176392317,
            "spread_ticks": 2.713864306784661,
            "amihud": 1.9198524436318234e-07,
            "turnover_ratio": 0.004212491605019428,
            "is_target": false
          },
          {
            "ticker": "QS9",
            "score_pca": 80.64516129032258,
            "rank_pca": 109,
            "adv": 348395.4,
            "trades": 179.0,
            "volatility": 1.1382150881877067,
            "spread_pct": 0.02257010924653679,
            "spread_ticks": 1.2207357859531773,
            "amihud": 5.125539216976686e-08,
            "turnover_ratio": 0.026858378121318627,
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
              "mean": 0.5554882108373662,
              "median": 0.3275017823073737,
              "min": 0.0,
              "max": 9.513056291224183,
              "p5": 0.0,
              "p95": 1.641455035933441,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3576738.186689288,
              "median": 11284.75,
              "min": 0.0,
              "max": 253247897.0,
              "p5": 0.0,
              "p95": 15495136.14999997,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.11389405703833685,
              "median": 0.03713166411173568,
              "min": 0.00028468976419645744,
              "max": 1.4382566585956416,
              "p5": 0.0038941225965018274,
              "p95": 0.5255815906125594,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.010850757227881393,
              "median": 0.0002357334038219389,
              "min": 0.0,
              "max": 4.482235844703711,
              "p5": 0.0,
              "p95": 0.01034212097404971,
              "count": 552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00023511481096787044,
              "median": 8.338899157134085e-08,
              "min": 0.0,
              "max": 0.08334421733167896,
              "p5": 0.0,
              "p95": 7.309719266240982e-05,
              "count": 494
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 544.4731182795699,
              "median": 7.0,
              "min": 0.0,
              "max": 11866.0,
              "p5": 0.0,
              "p95": 3263.5999999999945,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.29812612699525676,
              "median": 0.2998273943002605,
              "min": 0.0,
              "max": 0.6283471208785856,
              "p5": 0.0,
              "p95": 0.5878011052646055,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1905733.625,
              "median": 11381.0,
              "min": 0.0,
              "max": 14483943.0,
              "p5": 0.0,
              "p95": 9593278.199999992,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.152943393619292,
              "median": 0.025649257851194342,
              "min": 0.0014456056113814426,
              "max": 0.6666666666666666,
              "p5": 0.004933557683152981,
              "p95": 0.5815837937384897,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002350708849588053,
              "median": 0.00013537245011198184,
              "min": 0.0,
              "max": 0.00972625131233458,
              "p5": 0.0,
              "p95": 0.008842924271342204,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.039916011922174e-07,
              "median": 5.760066724612961e-08,
              "min": 0.0,
              "max": 1.6983887951629893e-06,
              "p5": 0.0,
              "p95": 1.4789635998834856e-06,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 492.25,
              "median": 7.5,
              "min": 0.0,
              "max": 3511.0,
              "p5": 0.0,
              "p95": 2396.249999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 144546.425,
              "median": 11381.0,
              "min": 0.0,
              "max": 510615.0,
              "p5": 0.0,
              "p95": 453838.1399999999,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 84.0,
              "median": 7.5,
              "min": 0.0,
              "max": 326.0,
              "p5": 0.0,
              "p95": 274.5499999999999,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3623206093129925,
              "median": 0.3016713399166431,
              "min": 0.0,
              "max": 1.1382150881877067,
              "p5": 0.0,
              "p95": 0.919215284015534,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1544861818837101,
              "median": 0.02427608462636146,
              "min": 0.011411182959300124,
              "max": 0.6666666666666666,
              "p5": 0.012630417357032502,
              "p95": 0.5815837937384897,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.7852777980201524,
              "median": 1.7095254314259765,
              "min": 1.0,
              "max": 16.428571428571427,
              "p5": 1.077257525083612,
              "p95": 12.078571428571422,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.237430823581019e-07,
              "median": 5.760066724612961e-08,
              "min": 0.0,
              "max": 1.6983887951629893e-06,
              "p5": 0.0,
              "p95": 1.4789635998834856e-06,
              "count": 7
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0048184542760167,
              "median": 0.00013537245011198184,
              "min": 0.0,
              "max": 0.026858378121318627,
              "p5": 0.0,
              "p95": 0.019978806697181828,
              "count": 8
            }
          },
          "returns": {
            "window_days": 5,
            "n_obs": 5,
            "stock": 0.13636363636363624,
            "market": -0.0012334307159801439,
            "sector": -0.020526227998642232,
            "peers": -0.03712757830404889,
            "vs_market": 0.1375970670796164,
            "vs_sector": 0.15688986436227847,
            "vs_peers": 0.17349121466768513
          }
        }
      },
      "2w": {
        "label": "2W",
        "window_days": 10,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 10,
          "score_pca": 71.68458781362007,
          "score_pca_percentile": 71.68458781362007,
          "rank_pca": 159,
          "total": 558,
          "adv_notional_sgd": 243589.5,
          "adv_volume_shares": 1019350.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0017875767336405712,
          "votes": 87.0,
          "trades": 87.0,
          "spread_pct": 0.025959814424621055,
          "spread_ticks": 1.1748245941794329,
          "amihud": 1.0163175359127058e-07,
          "volatility": 0.7339145219106645
        },
        "pca": {
          "valid": true,
          "window_days": 10,
          "variance_explained": 0.5321987336102212,
          "loadings": {
            "log_adv": 0.54245902534606,
            "log_trades": 0.492140993139363,
            "log_turnover": 0.4991925635502926,
            "neg_spread": 0.418989286657581,
            "neg_amihud": 0.16327602108746744,
            "neg_vol": 0.11014150803629034
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
          "peer_median_adv": 14117.0,
          "peer_median_score_pca": 51.88172043010753,
          "peer_median_trades": 8.5,
          "peer_median_volatility": 0.40614397893204546,
          "peer_median_spread_pct": 0.025294705174279015,
          "peer_median_spread_ticks": 1.9338649706660869,
          "peer_median_amihud": 1.0579538306005458e-07,
          "peer_median_turnover_ratio": 0.0001623021217244092,
          "target_vs_peer": {
            "score_pca_delta": 19.8,
            "adv_delta_pct": 1625.5,
            "trades_delta_pct": 923.53,
            "volatility_delta_pct": -80.7,
            "spread_pct_delta_pct": -2.63,
            "spread_ticks_delta_pct": -39.25,
            "amihud_delta_pct": 3.94,
            "turnover_ratio_delta_pct": 1001.39
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 71.68458781362007,
            "rank_pca": 159,
            "adv": 243589.5,
            "trades": 87.0,
            "volatility": 0.7339145219106645,
            "spread_pct": 0.025959814424621055,
            "spread_ticks": 1.1748245941794329,
            "amihud": 1.0163175359127058e-07,
            "turnover_ratio": 0.0017875767336405712,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 81.18279569892472,
            "rank_pca": 106,
            "adv": 535474.5,
            "trades": 369.0,
            "volatility": 0.6954015294867617,
            "spread_pct": 0.013698646304612669,
            "spread_ticks": 1.4570549596740667,
            "amihud": 4.863661605618e-08,
            "turnover_ratio": 0.007518668929746766,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 50.89605734767025,
            "rank_pca": 275,
            "adv": 14362.5,
            "trades": 6.5,
            "volatility": 0.19475995668254922,
            "spread_pct": 0.014292752112242613,
            "spread_ticks": 2.410674981658107,
            "amihud": 8.530348888192798e-07,
            "turnover_ratio": 0.0001178678647590618,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 36.91756272401434,
            "rank_pca": 353,
            "adv": 1962.0,
            "trades": 1.0,
            "volatility": 0.3900977573342433,
            "spread_pct": 0.05135031538214829,
            "spread_ticks": 3.75,
            "amihud": 8.491943975814946e-07,
            "turnover_ratio": 9.077528070208664e-05,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 52.867383512544805,
            "rank_pca": 264,
            "adv": 13871.5,
            "trades": 10.5,
            "volatility": 0.4221902005298476,
            "spread_pct": 0.028089913712160523,
            "spread_ticks": 1.45,
            "amihud": 1.0342414093123116e-06,
            "turnover_ratio": 0.00020673637868975656,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 3.853046594982079,
            "rank_pca": 535,
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
            "score_pca": 7.526881720430108,
            "rank_pca": 517,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.4356494466474156,
            "spread_ticks": 16.916666666666664,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "9MT",
            "score_pca": 76.70250896057348,
            "rank_pca": 131,
            "adv": 296418.25,
            "trades": 160.0,
            "volatility": 0.5092370422060477,
            "spread_pct": 0.0164422908142216,
            "spread_ticks": 2.6961861498399324,
            "amihud": 1.0579538306005458e-07,
            "turnover_ratio": 0.004389476863820244,
            "is_target": false
          },
          {
            "ticker": "QS9",
            "score_pca": 79.03225806451613,
            "rank_pca": 118,
            "adv": 412716.2,
            "trades": 174.0,
            "volatility": 0.9594480804343005,
            "spread_pct": 0.022499496636397505,
            "spread_ticks": 1.2353678929765888,
            "amihud": 9.505322937702835e-08,
            "turnover_ratio": 0.032485621834246976,
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
              "mean": 0.6250614037415495,
              "median": 0.418330013267038,
              "min": 0.0,
              "max": 8.197560612767678,
              "p5": 0.0,
              "p95": 1.7178873761650133,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 4196300.888877952,
              "median": 14406.875,
              "min": 0.0,
              "max": 382575336.74,
              "p5": 0.0,
              "p95": 17982262.349999987,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1075538851878623,
              "median": 0.035940127271531286,
              "min": 0.0002850670233989363,
              "max": 1.3732127423558795,
              "p5": 0.0038886120989088994,
              "p95": 0.49654536458098986,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.011275657942242528,
              "median": 0.00030971155820258626,
              "min": 0.0,
              "max": 4.5530947201898355,
              "p5": 0.0,
              "p95": 0.011428966953838117,
              "count": 552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.565765784676467e-05,
              "median": 1.289441567384995e-07,
              "min": 0.0,
              "max": 0.012127022859756413,
              "p5": 0.0,
              "p95": 7.385955355042777e-05,
              "count": 532
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 594.4372759856631,
              "median": 7.5,
              "min": 0.0,
              "max": 16138.0,
              "p5": 0.0,
              "p95": 3561.4749999999976,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.33920174086735766,
              "median": 0.3336738591645192,
              "min": 0.0,
              "max": 0.7339145219106645,
              "p5": 0.0,
              "p95": 0.7204349745622985,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2197740.0625,
              "median": 14117.0,
              "min": 0.0,
              "max": 16772660.5,
              "p5": 0.0,
              "p95": 11089645.399999991,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1546446000554352,
              "median": 0.02702486406839079,
              "min": 0.0014492451936142002,
              "max": 0.6666666666666666,
              "p5": 0.005736535582463664,
              "p95": 0.5858106396599286,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0026126812664872792,
              "median": 0.0001623021217244092,
              "min": 0.0,
              "max": 0.011179824944359993,
              "p5": 0.0,
              "p95": 0.00989842033924536,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.125248142716543e-07,
              "median": 1.0163175359127058e-07,
              "min": 0.0,
              "max": 1.0342414093123116e-06,
              "p5": 2.8039036231310186e-10,
              "p95": 9.79879453164402e-07,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 557.9375,
              "median": 8.5,
              "min": 0.0,
              "max": 3989.5,
              "p5": 0.0,
              "p95": 2722.324999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 159350.61875,
              "median": 14117.0,
              "min": 0.0,
              "max": 535474.5,
              "p5": 0.0,
              "p95": 492509.0949999999,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 90.125,
              "median": 8.5,
              "min": 0.0,
              "max": 369.0,
              "p5": 0.0,
              "p95": 300.7499999999999,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.39639182083421876,
              "median": 0.40614397893204546,
              "min": 0.0,
              "max": 0.9594480804343005,
              "p5": 0.0,
              "p95": 0.8670317876026618,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15608619103448318,
              "median": 0.025294705174279015,
              "min": 0.013698646304612669,
              "max": 0.6666666666666666,
              "p5": 0.01390658333728315,
              "p95": 0.5858106396599286,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.86449383135192,
              "median": 1.9338649706660869,
              "min": 1.0,
              "max": 16.916666666666664,
              "p5": 1.082378762541806,
              "p95": 12.308333333333325,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.265651320294784e-07,
              "median": 1.0579538306005458e-07,
              "min": 0.0,
              "max": 1.0342414093123116e-06,
              "p5": 1.4590984816854002e-08,
              "p95": 9.79879453164402e-07,
              "count": 7
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005601143393995612,
              "median": 0.0001623021217244092,
              "min": 0.0,
              "max": 0.032485621834246976,
              "p5": 0.0,
              "p95": 0.02374718831767189,
              "count": 8
            }
          },
          "returns": {
            "window_days": 10,
            "n_obs": 10,
            "stock": -0.03846153846153855,
            "market": -0.03059012387507498,
            "sector": -0.06295550297099661,
            "peers": -0.08142233952984945,
            "vs_market": -0.007871414586463565,
            "vs_sector": 0.024493964509458066,
            "vs_peers": 0.042960801068310905
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 73.29749103942652,
          "score_pca_percentile": 73.29749103942652,
          "rank_pca": 150,
          "total": 558,
          "adv_notional_sgd": 369852.0,
          "adv_volume_shares": 1588200.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0027851369680364497,
          "votes": 101.0,
          "trades": 101.0,
          "spread_pct": 0.025405971712938697,
          "spread_ticks": 1.1776061776061777,
          "amihud": 7.83519022118116e-08,
          "volatility": 0.6588338132206712
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5339285821050496,
          "loadings": {
            "log_adv": 0.5388202044084173,
            "log_trades": 0.4892141660128967,
            "log_turnover": 0.49527662012338663,
            "neg_spread": 0.41308010069956685,
            "neg_amihud": 0.16183567389910997,
            "neg_vol": 0.1679803610913733
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
          "peer_median_adv": 10111.75,
          "peer_median_score_pca": 50.0,
          "peer_median_trades": 7.0,
          "peer_median_volatility": 0.3561339372813189,
          "peer_median_spread_pct": 0.026382461782158795,
          "peer_median_spread_ticks": 1.465873015873016,
          "peer_median_amihud": 2.2972878224214264e-07,
          "peer_median_turnover_ratio": 0.00015512004267593613,
          "target_vs_peer": {
            "score_pca_delta": 23.3,
            "adv_delta_pct": 3557.6,
            "trades_delta_pct": 1342.86,
            "volatility_delta_pct": -85.0,
            "spread_pct_delta_pct": 3.7,
            "spread_ticks_delta_pct": -19.67,
            "amihud_delta_pct": 65.89,
            "turnover_ratio_delta_pct": 1695.47
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 73.29749103942652,
            "rank_pca": 150,
            "adv": 369852.0,
            "trades": 101.0,
            "volatility": 0.6588338132206712,
            "spread_pct": 0.025405971712938697,
            "spread_ticks": 1.1776061776061777,
            "amihud": 7.83519022118116e-08,
            "turnover_ratio": 0.0027851369680364497,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 82.43727598566308,
            "rank_pca": 99,
            "adv": 976910.0,
            "trades": 326.0,
            "volatility": 0.7888574427070469,
            "spread_pct": 0.011631496413004568,
            "spread_ticks": 1.345703125,
            "amihud": 3.3963649419263206e-08,
            "turnover_ratio": 0.013726587932806664,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 51.4336917562724,
            "rank_pca": 272,
            "adv": 11470.0,
            "trades": 8.0,
            "volatility": 0.19361002576057082,
            "spread_pct": 0.012931310415466373,
            "spread_ticks": 2.3333333333333335,
            "amihud": 5.025304081149938e-07,
            "turnover_ratio": 8.986992620925533e-05,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 38.35125448028674,
            "rank_pca": 345,
            "adv": 3850.0,
            "trades": 1.0,
            "volatility": 0.33632406136110343,
            "spread_pct": 0.054257724189902067,
            "spread_ticks": 4.0,
            "amihud": 3.438232394432282e-07,
            "turnover_ratio": 0.00017799074647467967,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 48.5663082437276,
            "rank_pca": 288,
            "adv": 8753.5,
            "trades": 6.0,
            "volatility": 0.37594381320153436,
            "spread_pct": 0.031088082901554397,
            "spread_ticks": 1.5,
            "amihud": 1.5465248812655536e-06,
            "turnover_ratio": 0.00013224933887719258,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 4.032258064516129,
            "rank_pca": 535,
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
            "score_pca": 3.046594982078853,
            "rank_pca": 542,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.20784609690826467,
            "spread_pct": 0.4331210191082802,
            "spread_ticks": 18.0,
            "amihud": 0.0018867924528301833,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "9MT",
            "score_pca": 75.44802867383513,
            "rank_pca": 138,
            "adv": 276860.0,
            "trades": 151.0,
            "volatility": 0.5369341559641758,
            "spread_pct": 0.01241723480755252,
            "spread_ticks": 1.4317460317460318,
            "amihud": 1.0233110251529874e-07,
            "turnover_ratio": 0.003492428291816107,
            "is_target": false
          },
          {
            "ticker": "QS9",
            "score_pca": 77.06093189964157,
            "rank_pca": 129,
            "adv": 348395.4,
            "trades": 169.0,
            "volatility": 1.1074940176455774,
            "spread_pct": 0.021676840662763194,
            "spread_ticks": 1.226792009400705,
            "amihud": 1.1563432504105707e-07,
            "turnover_ratio": 0.026636030368800922,
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
              "mean": 0.6264388506293332,
              "median": 0.4344028396196831,
              "min": 0.0,
              "max": 7.784600182411427,
              "p5": 0.027576072067872867,
              "p95": 1.7933611590139857,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3732337.719279557,
              "median": 14096.25,
              "min": 0.0,
              "max": 331579444.0,
              "p5": 0.0,
              "p95": 15599784.749999937,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09804088968891381,
              "median": 0.02764749444581584,
              "min": 0.0002742695631217783,
              "max": 1.3777777777777778,
              "p5": 0.0037907610251629626,
              "p95": 0.4865165337777122,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.010670267886644635,
              "median": 0.00031977321801776457,
              "min": 0.0,
              "max": 4.482235844703711,
              "p5": 0.0,
              "p95": 0.011489440966607313,
              "count": 552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.08665752029391e-05,
              "median": 1.1289074346820647e-07,
              "min": 0.0,
              "max": 0.0059715821812596145,
              "p5": 0.0,
              "p95": 4.6174957693521825e-05,
              "count": 544
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 509.84767025089604,
              "median": 7.0,
              "min": 0.0,
              "max": 12958.0,
              "p5": 0.0,
              "p95": 2911.75,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.34971233352423353,
              "median": 0.28630373819789,
              "min": 0.0,
              "max": 0.7888574427070469,
              "p5": 0.06776350901619979,
              "p95": 0.7433491723868154,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2800829.6875,
              "median": 10111.75,
              "min": 0.0,
              "max": 21035802.0,
              "p5": 0.0,
              "p95": 14015189.79999999,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15455618535091395,
              "median": 0.02824702730724655,
              "min": 0.0013472113994984552,
              "max": 0.6666666666666666,
              "p5": 0.004946711154225595,
              "p95": 0.5849256900212313,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0036901497235602375,
              "median": 0.00015512004267593613,
              "min": 0.0,
              "max": 0.013726587932806664,
              "p5": 0.0,
              "p95": 0.013335559162951512,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00023616225677788766,
              "median": 2.110875708275199e-07,
              "min": 0.0,
              "max": 0.0018867924528301833,
              "p5": 1.4255936211704412e-10,
              "p95": 0.0012269563780480611,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 631.5,
              "median": 7.0,
              "min": 0.0,
              "max": 4610.0,
              "p5": 0.0,
              "p95": 3110.5999999999976,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 203279.8625,
              "median": 10111.75,
              "min": 0.0,
              "max": 976910.0,
              "p5": 0.0,
              "p95": 756929.8899999997,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 82.625,
              "median": 7.0,
              "min": 0.0,
              "max": 326.0,
              "p5": 0.0,
              "p95": 271.0499999999999,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4433762016935342,
              "median": 0.3561339372813189,
              "min": 0.0,
              "max": 1.1074940176455774,
              "p5": 0.06776350901619979,
              "p95": 0.9959712164170916,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15547379689564875,
              "median": 0.026382461782158795,
              "min": 0.011631496413004568,
              "max": 0.6666666666666666,
              "p5": 0.011906504851096351,
              "p95": 0.5849256900212313,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.8546968124350087,
              "median": 1.465873015873016,
              "min": 1.0,
              "max": 18.0,
              "p5": 1.0793772032902467,
              "p95": 13.099999999999993,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00023617965755449782,
              "median": 2.2972878224214264e-07,
              "min": 0.0,
              "max": 0.0018867924528301833,
              "p5": 1.1887277296742123e-08,
              "p95": 0.0012269563780480611,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005531894575623103,
              "median": 0.00015512004267593613,
              "min": 0.0,
              "max": 0.026636030368800922,
              "p5": 0.0,
              "p95": 0.022117725516202925,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.13636363636363624,
            "market": -0.024571683631716912,
            "sector": -0.061938397130716805,
            "peers": -0.06349456670865505,
            "vs_market": 0.16093531999535315,
            "vs_sector": 0.19830203349435305,
            "vs_peers": 0.1998582030722913
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Liquidity looks solid on the day, but this is only a snapshot, so near-term conditions may still feel uneven.",
        "market_comparison": "The stock was flat on the day, in line with peers, so the session does not change the broader liquidity read."
      },
      "1w": {
        "liquidity": "Liquidity is still strong over the week, but activity has dropped 38.2% compared with the 1M average, which makes current access less dependable than the monthly picture.",
        "market_comparison": "The stock rose 13.6% over the week compared with a 3.7% drop for peers, which supports attention but does not offset the lighter recent volume."
      },
      "2w": {
        "liquidity": "Liquidity appears healthy over two weeks, though the recent slowdown means conditions are not fully stable.",
        "market_comparison": "Return -3.8% vs peers -8.1%."
      },
      "30d": {
        "liquidity": "Liquidity is strong over the month, with a score of 73.3 compared with a peer median of 50.0, which indicates good accessibility for the stock’s size.",
        "market_comparison": "The stock gained 13.6% over the month compared with a 6.3% drop for peers and a 2.5% drop for the market, giving the name a firmer backdrop than its main comparison groups."
      }
    }
  },
  "q02": {
    "driver_model": {
      "valid": true,
      "model_method": "ols_with_volatility_regimes",
      "estimation_window_days": 33,
      "reporting_window_days": 33,
      "available_history_days": 33,
      "n_regimes": 2,
      "current_regime": 1,
      "current_regime_label": "High Volatility",
      "current_regime_probability": 1.0,
      "current_driver_mix": {
        "market_share": {
          "median": 0.35423183591016616,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "35.4%",
          "display_range": null,
          "display_text": "35.4%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 33 trading days.",
          "kind": "share_pct",
          "value_pct": 35.4,
          "plain_english": "Market explains about 35.4% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.6414485368938525,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "64.1%",
          "display_range": null,
          "display_text": "64.1%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 33 trading days.",
          "kind": "share_pct",
          "value_pct": 64.1,
          "plain_english": "Sector explains about 64.1% of price moves in the current state."
        },
        "company_share": {
          "median": 0.004319627195981361,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.4%",
          "display_range": null,
          "display_text": "0.4%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 33 trading days.",
          "kind": "share_pct",
          "value_pct": 0.4,
          "plain_english": "Company-specific explains about 0.4% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": -3.7759363149162124,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-3.78",
          "display_range": null,
          "display_text": "-3.78",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 33 trading days.",
          "kind": "beta",
          "strength_label": "Very high",
          "plain_english": "Very high market link: a 1% market move has lined up with about a 3.78% stock move in the opposite direction in this state.",
          "value_num": -3.78
        },
        "beta_stock_lag": {
          "median": -0.017776012599571383,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.02",
          "display_range": null,
          "display_text": "-0.02",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 33 trading days.",
          "kind": "lag_beta",
          "value_num": -0.02
        },
        "beta_sector": {
          "median": 4.65010782201354,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "4.65",
          "display_range": null,
          "display_text": "4.65",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 33 trading days.",
          "kind": "beta",
          "strength_label": "Very high",
          "plain_english": "Very high sector link: a 1% sector move has lined up with about a 4.65% stock move in the same direction in this state.",
          "value_num": 4.65
        },
        "beta_market_lag": {
          "median": -1.9833995083925076,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-1.98",
          "display_range": null,
          "display_text": "-1.98",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 33 trading days.",
          "kind": "lag_beta",
          "value_num": -1.98
        },
        "beta_sector_lag": {
          "median": 2.1731274536289003,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "2.17",
          "display_range": null,
          "display_text": "2.17",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 33 trading days.",
          "kind": "lag_beta",
          "value_num": 2.17
        },
        "posterior_source": null,
        "intervals_collapsed": false,
        "confidence_label": "High, limited history",
        "confidence_note": "Based on 33 trading days relative to the 252-day target."
      },
      "rolling_windows": {},
      "monthly_history": [
        {
          "month_key": "2026-01",
          "month_label": "January 2026",
          "month_short_label": "Jan",
          "period_label": "2026-01-26 to 2026-01-30",
          "n_obs": 5,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.47931948471963925,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.9%",
            "display_range": null,
            "display_text": "47.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
            "kind": "share_pct",
            "value_pct": 47.9,
            "plain_english": "Market explains about 47.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.47931948471963925,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.9%",
              "display_range": null,
              "display_text": "47.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 47.9,
              "plain_english": "Market explains about 47.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2984396411024003,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "29.8%",
              "display_range": null,
              "display_text": "29.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 29.8,
              "plain_english": "Sector explains about 29.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.22224087417796046,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "22.2%",
              "display_range": null,
              "display_text": "22.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 22.2,
              "plain_english": "Company-specific explains about 22.2% of price moves in the current state."
            }
          },
          "summary": "Jan: Mostly market-driven, though based on only 5 trading days."
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
            "median": 0.5656898926629687,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "56.6%",
            "display_range": null,
            "display_text": "56.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
            "kind": "share_pct",
            "value_pct": 56.6,
            "plain_english": "Company-specific explains about 56.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2647931795787311,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.5%",
              "display_range": null,
              "display_text": "26.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 26.5,
              "plain_english": "Market explains about 26.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1695169277583002,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "17.0%",
              "display_range": null,
              "display_text": "17.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 17.0,
              "plain_english": "Sector explains about 17.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5656898926629687,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.6%",
              "display_range": null,
              "display_text": "56.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 56.6,
              "plain_english": "Company-specific explains about 56.6% of price moves in the current state."
            }
          },
          "summary": "Feb: Mostly company-driven."
        },
        {
          "month_key": "2026-03",
          "month_label": "March 2026",
          "month_short_label": "Mar",
          "period_label": "2026-03-02 to 2026-03-13",
          "n_obs": 10,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4990360500939035,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "49.9%",
            "display_range": null,
            "display_text": "49.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
            "kind": "share_pct",
            "value_pct": 49.9,
            "plain_english": "Market explains about 49.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.4990360500939035,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "49.9%",
              "display_range": null,
              "display_text": "49.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
              "kind": "share_pct",
              "value_pct": 49.9,
              "plain_english": "Market explains about 49.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.16391747073784813,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "16.4%",
              "display_range": null,
              "display_text": "16.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
              "kind": "share_pct",
              "value_pct": 16.4,
              "plain_english": "Sector explains about 16.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3370464791682483,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "33.7%",
              "display_range": null,
              "display_text": "33.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
              "kind": "share_pct",
              "value_pct": 33.7,
              "plain_english": "Company-specific explains about 33.7% of price moves in the current state."
            }
          },
          "summary": "Mar: Mostly market-driven."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5483870967741935,
          "expected_duration_days": 4.25,
          "current_probability": 0.0,
          "n_days_effective": 17.0,
          "volatility": {
            "median": 0.03456292470189087,
            "low": 0.03456292470189087,
            "high": 0.03456292470189087
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": 0.0
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.45161290322580644,
          "expected_duration_days": 3.5,
          "current_probability": 1.0,
          "n_days_effective": 14.0,
          "volatility": {
            "median": 0.04535163781814382,
            "low": 0.04535163781814382,
            "high": 0.04535163781814382
          },
          "volatility_label": "High Volatility",
          "current_probability_display": null
        }
      ],
      "transitions": {
        "mean": [
          [
            0.7647058823529411,
            0.23529411764705882
          ],
          [
            0.23076923076923078,
            0.7692307692307693
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            13.0,
            4.0
          ],
          [
            3.0,
            10.0
          ]
        ]
      },
      "methodology": {
        "estimation_window_days": 33,
        "reporting_window_days": 33,
        "current_mix_method": "ols_last_5d",
        "monthly_history_method": "ols_per_month",
        "regime_inference": "volatility_kmeans",
        "distribution": "gaussian",
        "history_limited": true,
        "current_driver_mix_basis": "ols_recent_window",
        "sector_proxy_equals_market": false
      },
      "client_read": {
        "market_link_display": "-3.78",
        "sector_link_display": "4.65",
        "market_link_explainer": "Very high market link. A 1% market move has lined up with about a 3.78% stock move in the opposite direction in this state. This is a point estimate from 33 trading days.",
        "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 4.65% stock move in the same direction in this state. This is a point estimate from 33 trading days.",
        "stock_persistence_display": "-0.02",
        "point_estimate_note": "Point estimate only because the current state has 33 trading days.",
        "history_limited_note": "Read is based on 33 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "High Volatility",
        "dominant_driver": "sector",
        "dominant_driver_label": "Sector",
        "driver_share_pct": 64.1,
        "driver_share_display": "64.1%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 33 trading days relative to the 252-day target.",
        "history_days": 33,
        "history_limited": true,
        "volatility_label": "High Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.7692307692307693,
        "effective_days": 14.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 3.5 days.",
        "expected_duration_days": 3.5
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
          "pct_time": 0.5483870967741935,
          "expected_duration_days": 4.25,
          "current_probability": 0.0,
          "n_days_effective": 17.0,
          "volatility": {
            "median": 0.03456292470189087,
            "low": 0.03456292470189087,
            "high": 0.03456292470189087
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.45161290322580644,
          "expected_duration_days": 3.5,
          "current_probability": 1.0,
          "n_days_effective": 14.0,
          "volatility": {
            "median": 0.04535163781814382,
            "low": 0.04535163781814382,
            "high": 0.04535163781814382
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.7647058823529411,
          0.23529411764705882
        ],
        [
          0.23076923076923078,
          0.7692307692307693
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.7647058823529411,
            0.23529411764705882
          ],
          [
            0.23076923076923078,
            0.7692307692307693
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            13.0,
            4.0
          ],
          [
            3.0,
            10.0
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
        "text": "Liquidity score: 73.3 — Strong",
        "bg": "bg-emerald-500/20",
        "textColor": "text-emerald-400"
      },
      "perf": {
        "text": "Performance is mixed",
        "bg": "bg-amber-500/20",
        "textColor": "text-amber-400"
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
        "text": "Low short interest",
        "bg": "bg-emerald-500/20",
        "textColor": "text-emerald-400"
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
    "liq_subtitle": "Monthly liquidity remains strong for size, but recent volume has dropped, so near-term access looks weaker than the broader profile.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Returns are strong relative to peers and the market, with a firmer 1M price backdrop than the main comparison groups.",
    "perf_insight": "Performance is strong, with a 1M return of +13.6% compared with peers at -6.3% and the market at -2.5%. Sector explains 64.1% of the tape, which matters because the move is being driven meaningfully by the group backdrop.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Sector moves are the main driver now, so the stock is trading meaningfully with the group.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly sector-driven, accounting for about 64.1% of price changes. Other influences are market 35.4%, and company-specific 0.4%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 35.4%, sector 64.1%, and company-specific 0.4%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has been mostly market-driven across Jan to Mar, with some variation in the middle months."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 35.4%, sector 64.1%, and company-specific 0.4%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "Sector is the current driver at 64.1%. That matters because broader market moves are still shaping the tape while recent volume is below the monthly average.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: sector moves account for 64.1% of recent price action.",
      "Monthly change: the pattern has shifted, with February more company-driven and March back to a more market-led tape."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Near-term conditions look mixed, with strong monthly liquidity but weaker recent activity and thinner buy-side support.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on available history from Jan 22, 2026 to Mar 13, 2026 (35 trading days • 9,312 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on top 10 bid and top 10 ask levels.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is thin enough that downside execution may feel worse than the monthly liquidity score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The displayed book is thin on the buy side, with top-10 bid depth at 0.39x ask depth and a 1 tick spread.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 15.9% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "History is limited.",
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
    "intraday_insight": "Snapshot unavailable.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Snapshot unavailable.",
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
    "exec_subtitle": "Liquidity is strong for size, but recent trading has dropped and the near-term book is less supportive.",
    "exec_takeaways_title": "Key Takeaways:",
    "metric_liquidity_score": "Liquidity Score",
    "metric_spread": "Trading Cost (Spread)",
    "metric_adv": "Average Traded Volume",
    "metric_drivers": "What Drives Price Changes",
    "metric_period_note": "The metrics shown here are based on the last 1 month of trading data, except for price driver mix which uses the last 5 trading days.",
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
        "value": "73.3/100",
        "sub": "Peer median 50.0 (+23.3 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "S$369.9K",
        "sub": "Peer median S$10.1K",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "2.54%",
        "sub": "1.18 ticks; peers 2.64%",
        "interp": {
          "text": "Tighter",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity screens well for size, with a 1M score of 73.3 compared with a peer median of 50.0. Recent trading has dropped, with 1W average volume down 38.2% from 1M, which matters because near-term access may be weaker than the monthly score implies. The displayed book also looks thinner on the buy side, with top-10 bid depth at 0.39x ask depth despite a 1 tick spread.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "0.242",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "2.06%",
        "note": "1.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.39x",
        "note": "Bid depth / ask depth on displayed top-10 levels",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-1.23% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-6.73% with 32.2% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-6.73% with 12.9% fill.",
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
        "subtext": "Rank 150/558",
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
        "value": "2.54",
        "suffix": "%",
        "bar_pct": 25,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "2.54% • 1.18 ticks vs peers 2.64%",
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
        "value": "S$369.9K",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Peer median S$10.1K",
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
        "value": "64.1",
        "suffix": "sector",
        "bar_pct": 64,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 35.4% • Company 0.4%",
        "interpretation": {
          "text": "Sector",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity remains strong for size, with a 1M score of 73.3 compared with a peer median of 50.0. That keeps the stock looking accessible relative to peers.",
      "Recent trading has pulled back, with 1W average volume down 38.2% from 1M. That matters because immediate access may feel weaker than the monthly liquidity score suggests.",
      "The displayed book is thin on the buy side, with top-10 bid depth at 0.39x ask depth and a 1 tick"
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
      "overall": "1M liquidity is strong: score 73.3 vs peer median 50.0 (+23.3",
      "strengths": [
        "1M score 73.3 vs peer median 50.0 (+23.3 pts)."
      ],
      "concerns": [
        "1W average volume down -38.2% from 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: +23.3 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "1M return is 13.6%, better than market, sector, and peers, which suggests stronger price performance than comparable names.",
        "vs_market": "Better than market: 13.6% vs market -2.5%.",
        "vs_sector": "Better than sector: 13.6% vs sector -6.2%.",
        "vs_peers": "Better than peers: 13.6% vs peers -6.3%."
      },
      "adv": {
        "insight": "ADV is S$369.9K, better than market, sector, and peers, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: S$369.9K vs market S$14.1K.",
        "vs_sector": "Better than sector: S$369.9K vs sector S$10.1K.",
        "vs_peers": "Better than peers: S$369.9K vs peers S$10.1K."
      },
      "spread": {
        "insight": "Spread is 2.54%, better than sector, which keeps trading costs more competitive than comparable names.",
        "vs_market": "In line with market: 2.54% vs market 2.76%.",
        "vs_sector": "Better than sector: 2.54% vs secto%.",
        "vs_peers": "In line with peers: 2.54% vs peers 2.64%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.28%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.28% vs market 0.03%.",
        "vs_sector": "Better than sector: 0.28% vs sector 0.02%.",
        "vs_peers": "Better than peers: 0.28% vs peers 0.02%."
      },
      "volatility": {
        "insight": "Volatility is 65.88%, worse than market, sector, and peers, which suggests day-to-day price swings are heavier than comparable names.",
        "vs_market": "Worse than market: 65.88% vs market 43.44%.",
        "vs_sector": "Worse than sector: 65.88% vs secto%.",
        "vs_peers": "Worse than peers: 65.88% vs peers 35.61%."
      },
      "trades": {
        "insight": "Trades is 101, better than market, sector, and peers, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 101 vs market 7.",
        "vs_sector": "Better than sector: 101 vs sector 7.",
        "vs_peers": "Better than peers: 101 vs peers 7."
      },
      "amihud": {
        "insight": "Price impact is 7.84e-08, better than market, sector, and peers, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 7.84e-08 vs market 1.13e-07.",
        "vs_sector": "Better than sector: 7.84e-08 vs sectoe-07.",
        "vs_peers": "Better than peers: 7.84e-08 vs peers 2.30e-07."
      }
    },
    "performance": {
      "overall": "Recent returns are strong relative to peers and the market, with the stock up 13.6% over 1M while peers fell 6.3% and the market fell 2.5%. Liquidity only partly confirms that move because the 1M liquidity score is 73.3 compared with a peer median of 50.0, but 1W average volume is down 38.2% from the monthly average, which suggests thinner immediate trading support behind the rally.",
      "conclusion": "Performance is mixed relative to comparison groups."
    },
    "drivers": {
      "overall": "Sector moves are the main force right now, with 64.1% of recent price action linked to the sector. That matters because the stock is not trading mainly on company-specific news at the moment, so broader group moves are setting the tone. Evidence is mixed, but the read is directionally clear.",
      "beta": "The current pattern matters more because trading activity has pulled back, with 1W average volume down 38.2% from the 1M average. That can make sector-led moves feel sharper day to day even though the 1M liquidity score of 73.3 remains well above the peer median of 50.0.",
      "rolling_change": "Jan: Mostly market-driven, though based on only 5 trading days. | Feb: mostly sector. | Mar: Mostly market-driven."
    },
    "regime": {
      "overall": "Short expected duration points to a short-lived state rather than a durable market backdrop.",
      "current": "The stock is currently in a High Volatility state, while sector moves still explain 64.1% of the tape. That points to a market-led backdrop rather than a fully settled company-specific trading pattern.",
      "transitions": "The state looks more persistent than fleeting, with a typical run length of about 3.5 days, although the read is mixed. That suggests the current backdrop can last for several sessions but is not deeply entrenched.",
      "trading_implications": "Trading conditions look less stable in the near term because volatility is elevated while recent average volume has pulled back from the monthly average. With thinner activity, day-to-day execution can feel less steady even though the broader liquidity profile remains strong for size."
    },
    "execution": {
      "overall": "The current book reads as thin buy-side because bid visible support is materially lighter than sell-side depth, with top-10 bid depth at 0.39x ask depth. The 1 tick spread keeps the headline screen orderly, but the imbalance matters more for immediate execution quality.",
      "concern": "The clearest stress point is the lack of buy-side depth, as bids are less than half of ask depth. Recent activity also looks thinner, with 1W average volume down 38.2% from 1M, which makes that imbalance more relevant in the near term.",
      "peer_context": "The broader liquidity profile still looks strong for size, with a 1M score of 73.3 compared with a peer median of 50.0. Even so, the current book suggests that near-term execution may feel weaker than that monthly standing implies, and trade-size history is limited to 35 trading days."
    },
    "trader_composition": {
      "overall": "By trade count and value, flow looks mainly institution-like.",
      "retail_heavy": "Retail-like activity is present but not dominant in the observed mix. Retail-like trades make up 27.9% of count and 6.9% of value, which matters because smaller-value flow is active but does not set the overall tone.",
      "institutional_gap": "The institutional lead is clearer in value than in count. Institution-like trades exceed retail-like trades by 43.2 points in value and 10.6 points in count, which matters because higher-value flow is carrying more of the market activity.",
      "peer_comparison": "The mix looks institution-like on both count and value, while peer comparison is available in the report tables. That matters because the stock does not screen as unusually retail-driven on the observed flow."
    },
    "price_moving": {
      "overall": "Price-moving activity is present but not dominant, with 15.9% of total trades moving price. That matters because the signal from aggressive flow exists, but it is not broad enough to define the whole tape on its own. The read is mixed because 17.5% of trade count is ambiguous or unclear. That matters because the institution-like skew is visible, but it is not fully clean. Positive and negative price-moving trade asymmetry is available in the report data.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity looks low and is not a material driver of current trading conditions. The clearest signal is significant covering of about 93% month on month, which matters because the recent picture is more consistent with lower average volume than with short pressure.",
      "level": "Low short interest",
      "correlation": "Moderate negative - shorts somewhat predict drops",
      "trend": "The short trend is falling sharply, with significant covering month on month, but evidence is mixed. That points away from shorts as a source of stress, so the broader picture still sits more with strong recent share price performance and weaker 1W average volume.",
      "peaks": "0 notable peak days identified."
    },
    "intraday": {
      "overall": "Session split is open 1.3%, continuous 96.4%, and close 1.8%. Current trading concentration score is 0.211.",
      "hhi_interpretation": "Intraday activity looks fairly well distributed, with a concentration score of 0.211. That matters because liquidity does not appear confined to a very narrow part of the session.",
      "best_times": "The continuous session is the clearest window for liquidity because it carries 96.4% of activity. That matters because the open and close contribute only a small share of trading.",
      "peer_ranking": "Peer intraday concentration comparison is available in the report tables. The current pattern still points to liquidity being available through most of the trading day."
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
        "NXR",
        "U77",
        "532",
        "KUX",
        "9MT",
        "QS9"
      ],
      "scores": [
        73.29749103942652,
        82.43727598566308,
        51.4336917562724,
        38.35125448028674,
        48.5663082437276,
        4.032258064516129,
        3.046594982078853,
        75.44802867383513,
        77.06093189964157
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
        369852.0,
        976910.0,
        11470.0,
        3850.0,
        8753.5,
        0.0,
        0.0,
        276860.0,
        348395.4
      ],
      "total": 558
    },
    "market_comparison": {
      "sector_name": "Software - Application",
      "sector_count": 8,
      "market_count": 558,
      "company": {
        "volatility": 0.6588338132206712,
        "adv": 369852.0,
        "spread_pct": 0.025405971712938697,
        "turnover_ratio": 0.0027851369680364497,
        "amihud": 7.83519022118116e-08,
        "trades": 101.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6264388506293332,
          "median": 0.4344028396196831,
          "min": 0.0,
          "max": 7.784600182411427,
          "p5": 0.027576072067872867,
          "p95": 1.7933611590139857,
          "count": 558
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 3732337.719279557,
          "median": 14096.25,
          "min": 0.0,
          "max": 331579444.0,
          "p5": 0.0,
          "p95": 15599784.749999937,
          "count": 558
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.09804088968891381,
          "median": 0.02764749444581584,
          "min": 0.0002742695631217783,
          "max": 1.3777777777777778,
          "p5": 0.0037907610251629626,
          "p95": 0.4865165337777122,
          "count": 557
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.010670267886644635,
          "median": 0.00031977321801776457,
          "min": 0.0,
          "max": 4.482235844703711,
          "p5": 0.0,
          "p95": 0.011489440966607313,
          "count": 552
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 5.08665752029391e-05,
          "median": 1.1289074346820647e-07,
          "min": 0.0,
          "max": 0.0059715821812596145,
          "p5": 0.0,
          "p95": 4.6174957693521825e-05,
          "count": 544
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 509.84767025089604,
          "median": 7.0,
          "min": 0.0,
          "max": 12958.0,
          "p5": 0.0,
          "p95": 2911.75,
          "count": 558
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.34971233352423353,
          "median": 0.28630373819789,
          "min": 0.0,
          "max": 0.7888574427070469,
          "p5": 0.06776350901619979,
          "p95": 0.7433491723868154,
          "count": 8
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 2800829.6875,
          "median": 10111.75,
          "min": 0.0,
          "max": 21035802.0,
          "p5": 0.0,
          "p95": 14015189.79999999,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.15455618535091395,
          "median": 0.02824702730724655,
          "min": 0.0013472113994984552,
          "max": 0.6666666666666666,
          "p5": 0.004946711154225595,
          "p95": 0.5849256900212313,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0036901497235602375,
          "median": 0.00015512004267593613,
          "min": 0.0,
          "max": 0.013726587932806664,
          "p5": 0.0,
          "p95": 0.013335559162951512,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 0.00023616225677788766,
          "median": 2.110875708275199e-07,
          "min": 0.0,
          "max": 0.0018867924528301833,
          "p5": 1.4255936211704412e-10,
          "p95": 0.0012269563780480611,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 631.5,
          "median": 7.0,
          "min": 0.0,
          "max": 4610.0,
          "p5": 0.0,
          "p95": 3110.5999999999976,
          "count": 8
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 203279.8625,
          "median": 10111.75,
          "min": 0.0,
          "max": 976910.0,
          "p5": 0.0,
          "p95": 756929.8899999997,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 82.625,
          "median": 7.0,
          "min": 0.0,
          "max": 326.0,
          "p5": 0.0,
          "p95": 271.0499999999999,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.4433762016935342,
          "median": 0.3561339372813189,
          "min": 0.0,
          "max": 1.1074940176455774,
          "p5": 0.06776350901619979,
          "p95": 0.9959712164170916,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.15547379689564875,
          "median": 0.026382461782158795,
          "min": 0.011631496413004568,
          "max": 0.6666666666666666,
          "p5": 0.011906504851096351,
          "p95": 0.5849256900212313,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 3.8546968124350087,
          "median": 1.465873015873016,
          "min": 1.0,
          "max": 18.0,
          "p5": 1.0793772032902467,
          "p95": 13.099999999999993,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 0.00023617965755449782,
          "median": 2.2972878224214264e-07,
          "min": 0.0,
          "max": 0.0018867924528301833,
          "p5": 1.1887277296742123e-08,
          "p95": 0.0012269563780480611,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.005531894575623103,
          "median": 0.00015512004267593613,
          "min": 0.0,
          "max": 0.026636030368800922,
          "p5": 0.0,
          "p95": 0.022117725516202925,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1W",
        "stock": 0.13636363636363624,
        "market": -0.0012334307159801439,
        "sector": -0.020526227998642232,
        "peers": -0.03712757830404889
      },
      {
        "horizon": "2W",
        "stock": -0.03846153846153855,
        "market": -0.03059012387507498,
        "sector": -0.06295550297099661,
        "peers": -0.08142233952984945
      },
      {
        "horizon": "1M",
        "stock": 0.13636363636363624,
        "market": -0.024571683631716912,
        "sector": -0.061938397130716805,
        "peers": -0.06349456670865505
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
      "share_market": 0.35423183591016616,
      "share_sector": 0.6414485368938525,
      "share_idio": 0.004319627195981361,
      "beta_market": -3.7759363149162124,
      "beta_sector": 4.65010782201354,
      "driver_model": {
        "valid": true,
        "model_method": "ols_with_volatility_regimes",
        "estimation_window_days": 33,
        "reporting_window_days": 33,
        "available_history_days": 33,
        "n_regimes": 2,
        "current_regime": 1,
        "current_regime_label": "High Volatility",
        "current_regime_probability": 1.0,
        "current_driver_mix": {
          "market_share": {
            "median": 0.35423183591016616,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "35.4%",
            "display_range": null,
            "display_text": "35.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 33 trading days.",
            "kind": "share_pct",
            "value_pct": 35.4,
            "plain_english": "Market explains about 35.4% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.6414485368938525,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "64.1%",
            "display_range": null,
            "display_text": "64.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 33 trading days.",
            "kind": "share_pct",
            "value_pct": 64.1,
            "plain_english": "Sector explains about 64.1% of price moves in the current state."
          },
          "company_share": {
            "median": 0.004319627195981361,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.4%",
            "display_range": null,
            "display_text": "0.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 33 trading days.",
            "kind": "share_pct",
            "value_pct": 0.4,
            "plain_english": "Company-specific explains about 0.4% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": -3.7759363149162124,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-3.78",
            "display_range": null,
            "display_text": "-3.78",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 33 trading days.",
            "kind": "beta",
            "strength_label": "Very high",
            "plain_english": "Very high market link: a 1% market move has lined up with about a 3.78% stock move in the opposite direction in this state.",
            "value_num": -3.78
          },
          "beta_stock_lag": {
            "median": -0.017776012599571383,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.02",
            "display_range": null,
            "display_text": "-0.02",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 33 trading days.",
            "kind": "lag_beta",
            "value_num": -0.02
          },
          "beta_sector": {
            "median": 4.65010782201354,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "4.65",
            "display_range": null,
            "display_text": "4.65",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 33 trading days.",
            "kind": "beta",
            "strength_label": "Very high",
            "plain_english": "Very high sector link: a 1% sector move has lined up with about a 4.65% stock move in the same direction in this state.",
            "value_num": 4.65
          },
          "beta_market_lag": {
            "median": -1.9833995083925076,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-1.98",
            "display_range": null,
            "display_text": "-1.98",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 33 trading days.",
            "kind": "lag_beta",
            "value_num": -1.98
          },
          "beta_sector_lag": {
            "median": 2.1731274536289003,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "2.17",
            "display_range": null,
            "display_text": "2.17",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 33 trading days.",
            "kind": "lag_beta",
            "value_num": 2.17
          },
          "posterior_source": null,
          "intervals_collapsed": false,
          "confidence_label": "High, limited history",
          "confidence_note": "Based on 33 trading days relative to the 252-day target."
        },
        "rolling_windows": {},
        "monthly_history": [
          {
            "month_key": "2026-01",
            "month_label": "January 2026",
            "month_short_label": "Jan",
            "period_label": "2026-01-26 to 2026-01-30",
            "n_obs": 5,
            "partial_month": true,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.47931948471963925,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.9%",
              "display_range": null,
              "display_text": "47.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 47.9,
              "plain_english": "Market explains about 47.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.47931948471963925,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "47.9%",
                "display_range": null,
                "display_text": "47.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 47.9,
                "plain_english": "Market explains about 47.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2984396411024003,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "29.8%",
                "display_range": null,
                "display_text": "29.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 29.8,
                "plain_english": "Sector explains about 29.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.22224087417796046,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "22.2%",
                "display_range": null,
                "display_text": "22.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 22.2,
                "plain_english": "Company-specific explains about 22.2% of price moves in the current state."
              }
            },
            "summary": "Jan: Mostly market-driven, though based on only 5 trading days."
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
              "median": 0.5656898926629687,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.6%",
              "display_range": null,
              "display_text": "56.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 56.6,
              "plain_english": "Company-specific explains about 56.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2647931795787311,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.5%",
                "display_range": null,
                "display_text": "26.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 26.5,
                "plain_english": "Market explains about 26.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1695169277583002,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "17.0%",
                "display_range": null,
                "display_text": "17.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 17.0,
                "plain_english": "Sector explains about 17.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5656898926629687,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "56.6%",
                "display_range": null,
                "display_text": "56.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 56.6,
                "plain_english": "Company-specific explains about 56.6% of price moves in the current state."
              }
            },
            "summary": "Feb: Mostly company-driven."
          },
          {
            "month_key": "2026-03",
            "month_label": "March 2026",
            "month_short_label": "Mar",
            "period_label": "2026-03-02 to 2026-03-13",
            "n_obs": 10,
            "partial_month": false,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4990360500939035,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "49.9%",
              "display_range": null,
              "display_text": "49.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
              "kind": "share_pct",
              "value_pct": 49.9,
              "plain_english": "Market explains about 49.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.4990360500939035,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "49.9%",
                "display_range": null,
                "display_text": "49.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
                "kind": "share_pct",
                "value_pct": 49.9,
                "plain_english": "Market explains about 49.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.16391747073784813,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "16.4%",
                "display_range": null,
                "display_text": "16.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
                "kind": "share_pct",
                "value_pct": 16.4,
                "plain_english": "Sector explains about 16.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3370464791682483,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "33.7%",
                "display_range": null,
                "display_text": "33.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
                "kind": "share_pct",
                "value_pct": 33.7,
                "plain_english": "Company-specific explains about 33.7% of price moves in the current state."
              }
            },
            "summary": "Mar: Mostly market-driven."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5483870967741935,
            "expected_duration_days": 4.25,
            "current_probability": 0.0,
            "n_days_effective": 17.0,
            "volatility": {
              "median": 0.03456292470189087,
              "low": 0.03456292470189087,
              "high": 0.03456292470189087
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": 0.0
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.45161290322580644,
            "expected_duration_days": 3.5,
            "current_probability": 1.0,
            "n_days_effective": 14.0,
            "volatility": {
              "median": 0.04535163781814382,
              "low": 0.04535163781814382,
              "high": 0.04535163781814382
            },
            "volatility_label": "High Volatility",
            "current_probability_display": null
          }
        ],
        "transitions": {
          "mean": [
            [
              0.7647058823529411,
              0.23529411764705882
            ],
            [
              0.23076923076923078,
              0.7692307692307693
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              13.0,
              4.0
            ],
            [
              3.0,
              10.0
            ]
          ]
        },
        "methodology": {
          "estimation_window_days": 33,
          "reporting_window_days": 33,
          "current_mix_method": "ols_last_5d",
          "monthly_history_method": "ols_per_month",
          "regime_inference": "volatility_kmeans",
          "distribution": "gaussian",
          "history_limited": true,
          "current_driver_mix_basis": "ols_recent_window",
          "sector_proxy_equals_market": false
        },
        "client_read": {
          "market_link_display": "-3.78",
          "sector_link_display": "4.65",
          "market_link_explainer": "Very high market link. A 1% market move has lined up with about a 3.78% stock move in the opposite direction in this state. This is a point estimate from 33 trading days.",
          "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 4.65% stock move in the same direction in this state. This is a point estimate from 33 trading days.",
          "stock_persistence_display": "-0.02",
          "point_estimate_note": "Point estimate only because the current state has 33 trading days.",
          "history_limited_note": "Read is based on 33 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "High Volatility",
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "driver_share_pct": 64.1,
          "driver_share_display": "64.1%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 33 trading days relative to the 252-day target.",
          "history_days": 33,
          "history_limited": true,
          "volatility_label": "High Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.7692307692307693,
          "effective_days": 14.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 3.5 days.",
          "expected_duration_days": 3.5
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
          "month_key": "2026-01",
          "month_label": "January 2026",
          "month_short_label": "Jan",
          "period_label": "2026-01-26 to 2026-01-30",
          "n_obs": 5,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Jan: Mostly market-driven, though based on only 5 trading days.",
          "share_market": 0.47931948471963925,
          "share_sector": 0.2984396411024003,
          "share_company": 0.22224087417796046,
          "share_market_display": "47.9%",
          "share_sector_display": "29.8%",
          "share_company_display": "22.2%",
          "dominant_share_display": "47.9%"
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
          "summary": "Feb: Mostly company-driven.",
          "share_market": 0.2647931795787311,
          "share_sector": 0.1695169277583002,
          "share_company": 0.5656898926629687,
          "share_market_display": "26.5%",
          "share_sector_display": "17.0%",
          "share_company_display": "56.6%",
          "dominant_share_display": "56.6%"
        },
        {
          "month_key": "2026-03",
          "month_label": "March 2026",
          "month_short_label": "Mar",
          "period_label": "2026-03-02 to 2026-03-13",
          "n_obs": 10,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Mar: Mostly market-driven.",
          "share_market": 0.4990360500939035,
          "share_sector": 0.16391747073784813,
          "share_company": 0.3370464791682483,
          "share_market_display": "49.9%",
          "share_sector_display": "16.4%",
          "share_company_display": "33.7%",
          "dominant_share_display": "49.9%"
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
          0.5483870967741935,
          0.45161290322580644
        ],
        "current_regime": 1,
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5483870967741935,
            "expected_duration_days": 4.25,
            "current_probability": 0.0,
            "n_days_effective": 17.0,
            "volatility": {
              "median": 0.03456292470189087,
              "low": 0.03456292470189087,
              "high": 0.03456292470189087
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.45161290322580644,
            "expected_duration_days": 3.5,
            "current_probability": 1.0,
            "n_days_effective": 14.0,
            "volatility": {
              "median": 0.04535163781814382,
              "low": 0.04535163781814382,
              "high": 0.04535163781814382
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.7647058823529411,
            0.23529411764705882
          ],
          [
            0.23076923076923078,
            0.7692307692307693
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 0.24,
          "quantity": 377300.0,
          "value": 90552.0
        },
        {
          "level": 2,
          "price": 0.235,
          "quantity": 200000.0,
          "value": 47000.0
        },
        {
          "level": 3,
          "price": 0.23,
          "quantity": 160100.0,
          "value": 36823.0
        },
        {
          "level": 4,
          "price": 0.225,
          "quantity": 132000.0,
          "value": 29700.0
        },
        {
          "level": 5,
          "price": 0.22,
          "quantity": 275400.0,
          "value": 60588.0
        },
        {
          "level": 6,
          "price": 0.215,
          "quantity": 53000.0,
          "value": 11395.0
        },
        {
          "level": 7,
          "price": 0.21,
          "quantity": 82800.0,
          "value": 17388.0
        },
        {
          "level": 8,
          "price": 0.2,
          "quantity": 135000.0,
          "value": 27000.0
        },
        {
          "level": 9,
          "price": 0.199,
          "quantity": 10000.0,
          "value": 1990.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.245,
          "quantity": 43300.0,
          "value": 10608.5
        },
        {
          "level": 2,
          "price": 0.25,
          "quantity": 350300.0,
          "value": 87575.0
        },
        {
          "level": 3,
          "price": 0.255,
          "quantity": 521800.0,
          "value": 133059.0
        },
        {
          "level": 4,
          "price": 0.26,
          "quantity": 638500.0,
          "value": 166010.0
        },
        {
          "level": 5,
          "price": 0.265,
          "quantity": 574500.0,
          "value": 152242.5
        },
        {
          "level": 6,
          "price": 0.27,
          "quantity": 169000.0,
          "value": 45630.0
        },
        {
          "level": 7,
          "price": 0.275,
          "quantity": 273000.0,
          "value": 75075.0
        },
        {
          "level": 8,
          "price": 0.28,
          "quantity": 356000.0,
          "value": 99680.00000000001
        },
        {
          "level": 9,
          "price": 0.285,
          "quantity": 144000.0,
          "value": 41040.0
        },
        {
          "level": 10,
          "price": 0.29,
          "quantity": 71000.0,
          "value": 20590.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-03-13 08:59:58.787700",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 0.2425,
        "spread_pct": 0.020618556701030948,
        "spread_ticks": 1.0,
        "tick_size": 0.005,
        "bid_depth_notional_top10": 322436.0,
        "ask_depth_notional_top10": 831510.0,
        "bid_ask_depth_ratio": 0.3878
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 51,
        "history_limited": true,
        "trade_days_used": 35,
        "n_trades_used": 9312,
        "first_trade_date": "2026-01-22",
        "last_trade_date": "2026-03-13",
        "window_label": "Jan 22, 2026 to Mar 13, 2026",
        "window_short_label": "Jan 22-Mar 13",
        "trade_days_label": "35 trading days",
        "trade_count_label": "9,312 trades",
        "window_detail_label": "35 trading days • 9,312 trades",
        "history_note": "Trade-size percentiles use available history from Jan 22, 2026 to Mar 13, 2026 (35 trading days • 9,312 trades), not a full year.",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 9879.35,
            "impact_pct": -0.010308999999999999,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 3.06,
            "pct_of_adv": 2.69
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 13750.0,
            "impact_pct": -0.010308999999999999,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 4.26,
            "pct_of_adv": 3.74
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 108556.71,
            "impact_pct": -0.013789000000000001,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 33.67,
            "pct_of_adv": 29.53
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-03-13",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "8117432114348421120",
            "timestamp": "2026-03-12 22:59:01.927300000",
            "local_timestamp": "2026-03-13 06:59:01",
            "posted_price": 0.3,
            "size_shares": 200000.0,
            "notional": 60000.0,
            "impact_pct": -0.010308999999999999,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 18.61,
            "price_vs_mid_pct": 23.711,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "8119594029086503936",
            "timestamp": "2026-03-12 22:59:01.927300000",
            "local_timestamp": "2026-03-13 06:59:01",
            "posted_price": 0.28,
            "size_shares": 200000.0,
            "notional": 56000.0,
            "impact_pct": -0.010308999999999999,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 17.37,
            "price_vs_mid_pct": 15.464,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "8116823259784643584",
            "timestamp": "2026-03-12 22:59:01.927300000",
            "local_timestamp": "2026-03-13 06:59:01",
            "posted_price": 0.265,
            "size_shares": 200000.0,
            "notional": 53000.0,
            "impact_pct": -0.010308999999999999,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 16.44,
            "price_vs_mid_pct": 9.278,
            "executed_event_count": 0,
            "event_count": 1
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-03-13",
        "bucket_minutes": 30,
        "tick_size": 0.005,
        "timezone": "SGT (UTC+8)",
        "session_label": "SGX continuous trading session",
        "bucket_label_basis": "bucket start time",
        "display_window_label": "SGX continuous trading session",
        "bucket_note": "Buckets cover the SGX continuous trading session (auctions excluded).",
        "rows": [
          {
            "bucket": "09:00",
            "spread_pct": 0.02020202020202022,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 330772.0,
            "ask_depth_notional": 814084.0,
            "mid_price": 0.2475
          },
          {
            "bucket": "09:30",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 316413.0,
            "ask_depth_notional": 811145.5,
            "mid_price": 0.2425
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 335931.0,
            "ask_depth_notional": 822465.5,
            "mid_price": 0.2425
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 343131.0,
            "ask_depth_notional": 829869.0,
            "mid_price": 0.2425
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.02020202020202022,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 380962.0,
            "ask_depth_notional": 857905.5,
            "mid_price": 0.2475
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.02020202020202022,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 388802.0,
            "ask_depth_notional": 821655.5,
            "mid_price": 0.2475
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.02020202020202022,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 388802.0,
            "ask_depth_notional": 832743.0,
            "mid_price": 0.2475
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.02020202020202022,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 388802.0,
            "ask_depth_notional": 833698.0,
            "mid_price": 0.2475
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.02020202020202022,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 388802.0,
            "ask_depth_notional": 846298.0,
            "mid_price": 0.2475
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.02020202020202022,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 388802.0,
            "ask_depth_notional": 855648.0,
            "mid_price": 0.2475
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.02020202020202022,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 386452.0,
            "ask_depth_notional": 856793.0,
            "mid_price": 0.2475
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 350141.0,
            "ask_depth_notional": 859447.0,
            "mid_price": 0.2425
          },
          {
            "bucket": "16:00",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 345341.0,
            "ask_depth_notional": 861333.5,
            "mid_price": 0.2425
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 322436.0,
            "ask_depth_notional": 831510.0,
            "mid_price": 0.2425
          }
        ],
        "summary": {
          "median_spread_pct": 0.02020202020202022,
          "median_spread_ticks": 1.0000000000000009,
          "median_bid_depth_notional": 365551.5,
          "median_ask_depth_notional": 833220.5,
          "tightest_bucket": "09:00",
          "widest_bucket": "09:30",
          "deepest_bid_bucket": "11:30",
          "thinnest_bid_bucket": "09:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 13.6,
      "peers": [
        {
          "ticker": "ITS",
          "pct": 104.0
        },
        {
          "ticker": "QS9",
          "pct": 276.2
        },
        {
          "ticker": "9MT",
          "pct": 362.7
        },
        {
          "ticker": "LVR",
          "pct": 8984.7
        },
        {
          "ticker": "U77",
          "pct": 10089.0
        },
        {
          "ticker": "NXR",
          "pct": 43936.7
        },
        {
          "ticker": "532",
          "pct": null
        },
        {
          "ticker": "KUX",
          "pct": null
        }
      ]
    },
    "trader_composition": {
      "primary_period": "30d",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 32,
          "n_runs": 17,
          "n_trade_days": 1,
          "first_trade_date": "2026-03-13",
          "last_trade_date": "2026-03-13",
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
            "retail_pct": 0.15625,
            "mixed_pct": 0.125,
            "instit_pct": 0.40625,
            "ambiguous_pct": 0.3125,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.3125,
            "retail_qty_pct": 0.03682753640630641,
            "mixed_qty_pct": 0.10831628354796004,
            "instit_qty_pct": 0.37946804669635337,
            "ambiguous_qty_pct": 0.4753881333493802,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.4753881333493802,
            "retail_notional_pct": 0.03613986342379713,
            "mixed_notional_pct": 0.10969632339992565,
            "instit_notional_pct": 0.3797914180053613,
            "ambiguous_notional_pct": 0.4743723951709159,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.4743723951709159
          },
          "run_composition": {
            "retail_pct": 0.29411764705882354,
            "mixed_pct": 0.11764705882352941,
            "instit_pct": 0.23529411764705882,
            "ambiguous_pct": 0.35294117647058826,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.35294117647058826,
            "retail_notional_pct": 0.03613986342379713,
            "mixed_notional_pct": 0.10969632339992565,
            "instit_notional_pct": 0.3797914180053613,
            "unclear_notional_pct": 0.4743723951709159
          },
          "counts": {
            "trades": {
              "retail": 5,
              "mixed": 4,
              "institutional": 13,
              "ambiguous": 10,
              "unobservable": 0,
              "unclear": 10
            },
            "runs": {
              "retail": 5,
              "mixed": 2,
              "institutional": 4,
              "ambiguous": 6,
              "unobservable": 0,
              "unclear": 6
            }
          },
          "confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.5294117647058824,
            "na": 0.47058823529411764
          },
          "confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 9,
            "na": 8
          },
          "trade_confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.5625,
            "na": 0.4375
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 18,
            "na": 14
          },
          "observability": {
            "avg_feature_coverage": 0.8588235294117648,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.35294117647058826,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Mixed, mostly unclassified",
          "dominant_share": 0.35294117647058826,
          "dominance_gap": 0.05882352941176472,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 21,
              "SINGLE_FILL": 11
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 18,
              "PERSISTENT_POSITIVE_IMPACT": 11,
              "MOMENTUM_REACTIVE": 3
            },
            "d3_urgency": {
              "IMMEDIATE": 17
            },
            "participant_confidence": {
              "LOW": 9,
              "NA": 8
            }
          },
          "trade_size": {
            "avg": 6388.375,
            "median": 3765.0
          },
          "run_size": {
            "avg": 12025.176470588236,
            "median": 7050.0,
            "avg_length": 1.1176470588235294
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-35",
              "timestamp": "2026-03-13T08:57:47.074400",
              "price": 0.245,
              "size": 31000.0,
              "notional": 7595.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3708,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-34",
              "timestamp": "2026-03-13T08:57:47.074400",
              "price": 0.245,
              "size": 19000.0,
              "notional": 4655.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3708,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-33",
              "timestamp": "2026-03-13T08:07:46.156400",
              "price": 0.24,
              "size": 20000.0,
              "notional": 4800.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3707,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-32",
              "timestamp": "2026-03-13T07:32:35.114700",
              "price": 0.245,
              "size": 7000.0,
              "notional": 1715.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3706,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-31",
              "timestamp": "2026-03-13T07:32:35.114600",
              "price": 0.245,
              "size": 40000.0,
              "notional": 9800.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3706,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-30",
              "timestamp": "2026-03-13T07:32:35.114600",
              "price": 0.245,
              "size": 60000.0,
              "notional": 14700.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3706,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-29",
              "timestamp": "2026-03-13T07:32:35.114600",
              "price": 0.245,
              "size": 50000.0,
              "notional": 12250.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3706,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-28",
              "timestamp": "2026-03-13T05:34:01.271300",
              "price": 0.25,
              "size": 8200.0,
              "notional": 2050.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3705,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-27",
              "timestamp": "2026-03-13T05:34:01.241200",
              "price": 0.25,
              "size": 8500.0,
              "notional": 2125.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3705,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-26",
              "timestamp": "2026-03-13T05:34:01.241200",
              "price": 0.25,
              "size": 11500.0,
              "notional": 2875.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3705,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-25",
              "timestamp": "2026-03-13T05:18:07.529900",
              "price": 0.25,
              "size": 100.0,
              "notional": 25.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3704,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-24",
              "timestamp": "2026-03-13T05:18:07.529900",
              "price": 0.25,
              "size": 8400.0,
              "notional": 2100.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3704,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-23",
              "timestamp": "2026-03-13T05:18:07.529900",
              "price": 0.25,
              "size": 10000.0,
              "notional": 2500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3704,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-22",
              "timestamp": "2026-03-13T05:18:07.529900",
              "price": 0.25,
              "size": 5000.0,
              "notional": 1250.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3704,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-21",
              "timestamp": "2026-03-13T05:18:07.499800",
              "price": 0.25,
              "size": 26600.0,
              "notional": 6650.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3704,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-20",
              "timestamp": "2026-03-13T05:00:10.765300",
              "price": 0.25,
              "size": 1400.0,
              "notional": 350.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3703,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-17",
              "timestamp": "2026-03-13T03:38:02.443100",
              "price": 0.25,
              "size": 43400.0,
              "notional": 10850.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3702,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-16",
              "timestamp": "2026-03-13T03:38:02.443100",
              "price": 0.25,
              "size": 31600.0,
              "notional": 7900.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3702,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-15",
              "timestamp": "2026-03-13T03:23:49.311900",
              "price": 0.245,
              "size": 30000.0,
              "notional": 7350.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3701,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-14",
              "timestamp": "2026-03-13T03:23:49.311900",
              "price": 0.245,
              "size": 40000.0,
              "notional": 9800.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3701,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-13",
              "timestamp": "2026-03-13T03:23:49.311900",
              "price": 0.245,
              "size": 155000.0,
              "notional": 37975.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3701,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-12",
              "timestamp": "2026-03-13T02:04:56.634800",
              "price": 0.245,
              "size": 4000.0,
              "notional": 980.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3700,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-11",
              "timestamp": "2026-03-13T01:59:31.443800",
              "price": 0.24,
              "size": 3200.0,
              "notional": 768.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3699,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-10",
              "timestamp": "2026-03-13T01:57:51.752900",
              "price": 0.245,
              "size": 80000.0,
              "notional": 19600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3698,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-9",
              "timestamp": "2026-03-13T01:41:17.107200",
              "price": 0.245,
              "size": 2000.0,
              "notional": 490.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3697,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-8",
              "timestamp": "2026-03-13T01:38:46.929400",
              "price": 0.245,
              "size": 25000.0,
              "notional": 6125.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3696,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-7",
              "timestamp": "2026-03-13T01:38:46.929400",
              "price": 0.245,
              "size": 53000.0,
              "notional": 12985.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3696,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-6",
              "timestamp": "2026-03-13T01:38:36.451500",
              "price": 0.245,
              "size": 8000.0,
              "notional": 1960.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3695,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-5",
              "timestamp": "2026-03-13T01:38:36.451500",
              "price": 0.245,
              "size": 7000.0,
              "notional": 1715.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3695,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-4",
              "timestamp": "2026-03-13T01:28:39.500600",
              "price": 0.245,
              "size": 2000.0,
              "notional": 490.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3694,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.15625,
              "mixed_pct": 0.125,
              "instit_pct": 0.40625,
              "ambiguous_pct": 0.3125,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.3125,
              "retail_qty_pct": 0.03682753640630641,
              "mixed_qty_pct": 0.10831628354796004,
              "instit_qty_pct": 0.37946804669635337,
              "ambiguous_qty_pct": 0.4753881333493802,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.4753881333493802,
              "retail_notional_pct": 0.03613986342379713,
              "mixed_notional_pct": 0.10969632339992565,
              "instit_notional_pct": 0.3797914180053613,
              "ambiguous_notional_pct": 0.4743723951709159,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.4743723951709159,
              "run_retail_pct": 0.29411764705882354,
              "run_mixed_pct": 0.11764705882352941,
              "run_instit_pct": 0.23529411764705882,
              "run_unclear_pct": 0.35294117647058826,
              "avg_trade_size": 6388.375,
              "avg_run_notional": 12025.176470588236,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Mixed, mostly unclassified",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5294117647058824,
              "na_confidence_pct": 0.47058823529411764,
              "avg_feature_coverage": 0.8588235294117648,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.4375,
              "mixed_pct": 0.14166666666666666,
              "instit_pct": 0.2791666666666667,
              "ambiguous_pct": 0.14166666666666666,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.14166666666666666,
              "retail_qty_pct": 0.05611340815121087,
              "mixed_qty_pct": 0.08997834219334515,
              "instit_qty_pct": 0.6650915534554046,
              "ambiguous_qty_pct": 0.18881669620003938,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.18881669620003938,
              "retail_notional_pct": 0.05633295378574635,
              "mixed_notional_pct": 0.09029571958947208,
              "instit_notional_pct": 0.6641215785326343,
              "ambiguous_notional_pct": 0.18924974809214723,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.18924974809214723,
              "run_retail_pct": 0.7074829931972789,
              "run_mixed_pct": 0.12244897959183673,
              "run_instit_pct": 0.09523809523809523,
              "run_unclear_pct": 0.07482993197278912,
              "avg_trade_size": 2162.6625,
              "avg_run_notional": 3530.877551020408,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.5034013605442177,
              "medium_confidence_pct": 0.29931972789115646,
              "low_confidence_pct": 0.0,
              "na_confidence_pct": 0.19727891156462585,
              "avg_feature_coverage": 0.8510204081632653,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "9MT",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2,
              "mixed_pct": 0.01904761904761905,
              "instit_pct": 0.38095238095238093,
              "ambiguous_pct": 0.4,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.4,
              "retail_qty_pct": 0.06925675675675676,
              "mixed_qty_pct": 0.014076576576576577,
              "instit_qty_pct": 0.5647522522522522,
              "ambiguous_qty_pct": 0.3519144144144144,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.3519144144144144,
              "retail_notional_pct": 0.06982281081477677,
              "mixed_notional_pct": 0.013863311199970653,
              "instit_notional_pct": 0.5650757547965809,
              "ambiguous_notional_pct": 0.35123812318867165,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.35123812318867165,
              "run_retail_pct": 0.3508771929824561,
              "run_mixed_pct": 0.017543859649122806,
              "run_instit_pct": 0.19298245614035087,
              "run_unclear_pct": 0.43859649122807015,
              "avg_trade_size": 1298.047619047619,
              "avg_run_notional": 2391.1403508771928,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Mixed, mostly unclassified",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.2631578947368421,
              "low_confidence_pct": 0.2807017543859649,
              "na_confidence_pct": 0.45614035087719296,
              "avg_feature_coverage": 0.8421052631578947,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.08333333333333333,
              "mixed_pct": 0.16666666666666666,
              "instit_pct": 0.5,
              "ambiguous_pct": 0.25,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.25,
              "retail_qty_pct": 0.03404255319148936,
              "mixed_qty_pct": 0.0851063829787234,
              "instit_qty_pct": 0.4978723404255319,
              "ambiguous_qty_pct": 0.3829787234042553,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.3829787234042553,
              "retail_notional_pct": 0.03420327868852459,
              "mixed_notional_pct": 0.0860327868852459,
              "instit_notional_pct": 0.4996983606557377,
              "ambiguous_notional_pct": 0.3800655737704918,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.3800655737704918,
              "run_retail_pct": 0.16666666666666666,
              "run_mixed_pct": 0.16666666666666666,
              "run_instit_pct": 0.3333333333333333,
              "run_unclear_pct": 0.3333333333333333,
              "avg_trade_size": 1588.5416666666667,
              "avg_run_notional": 3177.0833333333335,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed, leaning institution-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5,
              "na_confidence_pct": 0.5,
              "avg_feature_coverage": 0.875,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "QS9",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.18292682926829268,
              "mixed_pct": 0.16463414634146342,
              "instit_pct": 0.3170731707317073,
              "ambiguous_pct": 0.3353658536585366,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.3353658536585366,
              "retail_qty_pct": 0.046754275903057516,
              "mixed_qty_pct": 0.14696559466420128,
              "instit_qty_pct": 0.43742983556758896,
              "ambiguous_qty_pct": 0.3688502938651522,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.3688502938651522,
              "retail_notional_pct": 0.04663530403433183,
              "mixed_notional_pct": 0.14718775718260285,
              "instit_notional_pct": 0.43896275497563797,
              "ambiguous_notional_pct": 0.3672141838074274,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.3672141838074274,
              "run_retail_pct": 0.4057971014492754,
              "run_mixed_pct": 0.15942028985507245,
              "run_instit_pct": 0.13043478260869565,
              "run_unclear_pct": 0.30434782608695654,
              "avg_trade_size": 2141.2256097560976,
              "avg_run_notional": 5089.289855072463,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.42028985507246375,
              "low_confidence_pct": 0.11594202898550725,
              "na_confidence_pct": 0.463768115942029,
              "avg_feature_coverage": 0.8456521739130436,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.125,
              "mixed_pct": 0.0,
              "instit_pct": 0.25,
              "ambiguous_pct": 0.625,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.625,
              "retail_qty_pct": 0.001447178002894356,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.27496382054992763,
              "ambiguous_qty_pct": 0.723589001447178,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.723589001447178,
              "retail_notional_pct": 0.0014270424545130217,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.277916518016411,
              "ambiguous_notional_pct": 0.720656439529076,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.720656439529076,
              "run_retail_pct": 0.14285714285714285,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.14285714285714285,
              "run_unclear_pct": 0.7142857142857143,
              "avg_trade_size": 1751.875,
              "avg_run_notional": 2002.142857142857,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.2857142857142857,
              "na_confidence_pct": 0.7142857142857143,
              "avg_feature_coverage": 0.8071428571428573,
              "observable_run_pct": 1.0,
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
          "n_trades": 443,
          "n_runs": 232,
          "n_trade_days": 5,
          "first_trade_date": "2026-03-09",
          "last_trade_date": "2026-03-13",
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
            "retail_pct": 0.27765237020316025,
            "mixed_pct": 0.18058690744920994,
            "instit_pct": 0.28442437923250563,
            "ambiguous_pct": 0.25733634311512416,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.25733634311512416,
            "retail_qty_pct": 0.0589441990504078,
            "mixed_qty_pct": 0.21532913130511025,
            "instit_qty_pct": 0.3577514185981107,
            "ambiguous_qty_pct": 0.3679752510463712,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3679752510463712,
            "retail_notional_pct": 0.05827037652551906,
            "mixed_notional_pct": 0.21728648385875066,
            "instit_notional_pct": 0.36299687123742985,
            "ambiguous_notional_pct": 0.36144626837830046,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.36144626837830046
          },
          "run_composition": {
            "retail_pct": 0.5172413793103449,
            "mixed_pct": 0.15948275862068967,
            "instit_pct": 0.13793103448275862,
            "ambiguous_pct": 0.1853448275862069,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1853448275862069,
            "retail_notional_pct": 0.05827037652551906,
            "mixed_notional_pct": 0.21728648385875066,
            "instit_notional_pct": 0.36299687123742985,
            "unclear_notional_pct": 0.36144626837830046
          },
          "counts": {
            "trades": {
              "retail": 123,
              "mixed": 80,
              "institutional": 126,
              "ambiguous": 114,
              "unobservable": 0,
              "unclear": 114
            },
            "runs": {
              "retail": 120,
              "mixed": 37,
              "institutional": 32,
              "ambiguous": 43,
              "unobservable": 0,
              "unclear": 43
            }
          },
          "confidence": {
            "high": 0.11637931034482758,
            "medium": 0.3017241379310345,
            "low": 0.23706896551724138,
            "na": 0.3448275862068966
          },
          "confidence_counts": {
            "high": 27,
            "medium": 70,
            "low": 55,
            "na": 80
          },
          "trade_confidence": {
            "high": 0.060948081264108354,
            "medium": 0.21218961625282168,
            "low": 0.28893905191873587,
            "na": 0.43792325056433407
          },
          "trade_confidence_counts": {
            "high": 27,
            "medium": 94,
            "low": 128,
            "na": 194
          },
          "observability": {
            "avg_feature_coverage": 0.8571120689655171,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.1853448275862069,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5172413793103449,
          "dominance_gap": 0.33189655172413796,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 232,
              "SINGLE_FILL": 211
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 327,
              "PERSISTENT_POSITIVE_IMPACT": 62,
              "MOMENTUM_REACTIVE": 54
            },
            "d3_urgency": {
              "IMMEDIATE": 230,
              "ADAPTIVE": 2
            },
            "participant_confidence": {
              "NA": 80,
              "MEDIUM": 70,
              "LOW": 55,
              "HIGH": 27
            }
          },
          "trade_size": {
            "avg": 3194.708803611738,
            "median": 1125.0
          },
          "run_size": {
            "avg": 6100.241379310345,
            "median": 1100.0,
            "avg_length": 1.2112068965517242
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-35",
              "timestamp": "2026-03-13T08:57:47.074400",
              "price": 0.245,
              "size": 31000.0,
              "notional": 7595.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3708,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-34",
              "timestamp": "2026-03-13T08:57:47.074400",
              "price": 0.245,
              "size": 19000.0,
              "notional": 4655.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3708,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-33",
              "timestamp": "2026-03-13T08:07:46.156400",
              "price": 0.24,
              "size": 20000.0,
              "notional": 4800.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3707,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-32",
              "timestamp": "2026-03-13T07:32:35.114700",
              "price": 0.245,
              "size": 7000.0,
              "notional": 1715.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3706,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-31",
              "timestamp": "2026-03-13T07:32:35.114600",
              "price": 0.245,
              "size": 40000.0,
              "notional": 9800.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3706,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-30",
              "timestamp": "2026-03-13T07:32:35.114600",
              "price": 0.245,
              "size": 60000.0,
              "notional": 14700.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3706,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-29",
              "timestamp": "2026-03-13T07:32:35.114600",
              "price": 0.245,
              "size": 50000.0,
              "notional": 12250.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3706,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-28",
              "timestamp": "2026-03-13T05:34:01.271300",
              "price": 0.25,
              "size": 8200.0,
              "notional": 2050.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3705,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-27",
              "timestamp": "2026-03-13T05:34:01.241200",
              "price": 0.25,
              "size": 8500.0,
              "notional": 2125.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3705,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-26",
              "timestamp": "2026-03-13T05:34:01.241200",
              "price": 0.25,
              "size": 11500.0,
              "notional": 2875.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3705,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-25",
              "timestamp": "2026-03-13T05:18:07.529900",
              "price": 0.25,
              "size": 100.0,
              "notional": 25.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3704,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-24",
              "timestamp": "2026-03-13T05:18:07.529900",
              "price": 0.25,
              "size": 8400.0,
              "notional": 2100.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3704,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-23",
              "timestamp": "2026-03-13T05:18:07.529900",
              "price": 0.25,
              "size": 10000.0,
              "notional": 2500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3704,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-22",
              "timestamp": "2026-03-13T05:18:07.529900",
              "price": 0.25,
              "size": 5000.0,
              "notional": 1250.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3704,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-21",
              "timestamp": "2026-03-13T05:18:07.499800",
              "price": 0.25,
              "size": 26600.0,
              "notional": 6650.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3704,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-20",
              "timestamp": "2026-03-13T05:00:10.765300",
              "price": 0.25,
              "size": 1400.0,
              "notional": 350.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3703,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-17",
              "timestamp": "2026-03-13T03:38:02.443100",
              "price": 0.25,
              "size": 43400.0,
              "notional": 10850.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3702,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-16",
              "timestamp": "2026-03-13T03:38:02.443100",
              "price": 0.25,
              "size": 31600.0,
              "notional": 7900.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3702,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-15",
              "timestamp": "2026-03-13T03:23:49.311900",
              "price": 0.245,
              "size": 30000.0,
              "notional": 7350.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3701,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-14",
              "timestamp": "2026-03-13T03:23:49.311900",
              "price": 0.245,
              "size": 40000.0,
              "notional": 9800.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3701,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-13",
              "timestamp": "2026-03-13T03:23:49.311900",
              "price": 0.245,
              "size": 155000.0,
              "notional": 37975.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3701,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-12",
              "timestamp": "2026-03-13T02:04:56.634800",
              "price": 0.245,
              "size": 4000.0,
              "notional": 980.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3700,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-11",
              "timestamp": "2026-03-13T01:59:31.443800",
              "price": 0.24,
              "size": 3200.0,
              "notional": 768.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3699,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-10",
              "timestamp": "2026-03-13T01:57:51.752900",
              "price": 0.245,
              "size": 80000.0,
              "notional": 19600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3698,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-9",
              "timestamp": "2026-03-13T01:41:17.107200",
              "price": 0.245,
              "size": 2000.0,
              "notional": 490.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3697,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-8",
              "timestamp": "2026-03-13T01:38:46.929400",
              "price": 0.245,
              "size": 25000.0,
              "notional": 6125.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3696,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-7",
              "timestamp": "2026-03-13T01:38:46.929400",
              "price": 0.245,
              "size": 53000.0,
              "notional": 12985.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3696,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-6",
              "timestamp": "2026-03-13T01:38:36.451500",
              "price": 0.245,
              "size": 8000.0,
              "notional": 1960.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3695,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-5",
              "timestamp": "2026-03-13T01:38:36.451500",
              "price": 0.245,
              "size": 7000.0,
              "notional": 1715.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3695,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-4",
              "timestamp": "2026-03-13T01:28:39.500600",
              "price": 0.245,
              "size": 2000.0,
              "notional": 490.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3694,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.27765237020316025,
              "mixed_pct": 0.18058690744920994,
              "instit_pct": 0.28442437923250563,
              "ambiguous_pct": 0.25733634311512416,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.25733634311512416,
              "retail_qty_pct": 0.0589441990504078,
              "mixed_qty_pct": 0.21532913130511025,
              "instit_qty_pct": 0.3577514185981107,
              "ambiguous_qty_pct": 0.3679752510463712,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.3679752510463712,
              "retail_notional_pct": 0.05827037652551906,
              "mixed_notional_pct": 0.21728648385875066,
              "instit_notional_pct": 0.36299687123742985,
              "ambiguous_notional_pct": 0.36144626837830046,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.36144626837830046,
              "run_retail_pct": 0.5172413793103449,
              "run_mixed_pct": 0.15948275862068967,
              "run_instit_pct": 0.13793103448275862,
              "run_unclear_pct": 0.1853448275862069,
              "avg_trade_size": 3194.708803611738,
              "avg_run_notional": 6100.241379310345,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.11637931034482758,
              "medium_confidence_pct": 0.3017241379310345,
              "low_confidence_pct": 0.23706896551724138,
              "na_confidence_pct": 0.3448275862068966,
              "avg_feature_coverage": 0.8571120689655171,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "NXR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.6923076923076923,
              "ambiguous_pct": 0.3076923076923077,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.3076923076923077,
              "retail_qty_pct": 0.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.8589306029579067,
              "ambiguous_qty_pct": 0.1410693970420933,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.1410693970420933,
              "retail_notional_pct": 0.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.859655562693096,
              "ambiguous_notional_pct": 0.14034443730690405,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.14034443730690405,
              "run_retail_pct": 0.0,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.5555555555555556,
              "run_unclear_pct": 0.4444444444444444,
              "avg_trade_size": 2514.6923076923076,
              "avg_run_notional": 3632.3333333333335,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Institution-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5555555555555556,
              "na_confidence_pct": 0.4444444444444444,
              "avg_feature_coverage": 0.8500000000000001,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.42525125628140703,
              "mixed_pct": 0.21545226130653267,
              "instit_pct": 0.24623115577889448,
              "ambiguous_pct": 0.10678391959798995,
              "unobservable_pct": 0.00628140703517588,
              "unclear_pct": 0.11306532663316583,
              "retail_qty_pct": 0.0751152490282925,
              "mixed_qty_pct": 0.16989062641236555,
              "instit_qty_pct": 0.5568561872909699,
              "ambiguous_qty_pct": 0.18195787761005153,
              "unobservable_qty_pct": 0.016180059658320527,
              "unclear_qty_pct": 0.19813793726837206,
              "retail_notional_pct": 0.07551172250136842,
              "mixed_notional_pct": 0.17087898821249198,
              "instit_notional_pct": 0.5552081250662357,
              "ambiguous_notional_pct": 0.18232977271709216,
              "unobservable_notional_pct": 0.016071391502811675,
              "unclear_notional_pct": 0.19840116421990384,
              "run_retail_pct": 0.7123287671232876,
              "run_mixed_pct": 0.1601685985247629,
              "run_instit_pct": 0.07586933614330875,
              "run_unclear_pct": 0.051633298208640675,
              "avg_trade_size": 1437.3288316582914,
              "avg_run_notional": 2411.198630136986,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.43730242360379346,
              "medium_confidence_pct": 0.3224446786090622,
              "low_confidence_pct": 0.02845100105374078,
              "na_confidence_pct": 0.21180189673340358,
              "avg_feature_coverage": 0.8698103266596415,
              "observable_run_pct": 0.9989462592202318,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "QS9",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.31322505800464034,
              "mixed_pct": 0.11832946635730858,
              "instit_pct": 0.3294663573085847,
              "ambiguous_pct": 0.23897911832946636,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.23897911832946636,
              "retail_qty_pct": 0.07841526897770672,
              "mixed_qty_pct": 0.09947506643641621,
              "instit_qty_pct": 0.5091106107778447,
              "ambiguous_qty_pct": 0.31299905380803233,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.31299905380803233,
              "retail_notional_pct": 0.07827980878032292,
              "mixed_notional_pct": 0.10015657758996431,
              "instit_notional_pct": 0.5083981079412516,
              "ambiguous_notional_pct": 0.31316550568846113,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.31316550568846113,
              "run_retail_pct": 0.5577342047930284,
              "run_mixed_pct": 0.10675381263616558,
              "run_instit_pct": 0.13725490196078433,
              "run_unclear_pct": 0.19825708061002179,
              "avg_trade_size": 2078.463689095128,
              "avg_run_notional": 3903.3457516339868,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.20261437908496732,
              "medium_confidence_pct": 0.3442265795206972,
              "low_confidence_pct": 0.14814814814814814,
              "na_confidence_pct": 0.30501089324618735,
              "avg_feature_coverage": 0.8428104575163397,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "9MT",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.25206611570247933,
              "mixed_pct": 0.07162534435261708,
              "instit_pct": 0.31955922865013775,
              "ambiguous_pct": 0.33884297520661155,
              "unobservable_pct": 0.01790633608815427,
              "unclear_pct": 0.35674931129476584,
              "retail_qty_pct": 0.06107187370170337,
              "mixed_qty_pct": 0.0626743426909609,
              "instit_qty_pct": 0.4623419787524482,
              "ambiguous_qty_pct": 0.37853878568461036,
              "unobservable_qty_pct": 0.035373019170277166,
              "unclear_qty_pct": 0.41391180485488754,
              "retail_notional_pct": 0.06133248357389097,
              "mixed_notional_pct": 0.06449629338517564,
              "instit_notional_pct": 0.4628031003767134,
              "ambiguous_notional_pct": 0.3747719322364164,
              "unobservable_notional_pct": 0.03659619042780357,
              "unclear_notional_pct": 0.41136812266421996,
              "run_retail_pct": 0.43434343434343436,
              "run_mixed_pct": 0.06565656565656566,
              "run_instit_pct": 0.16414141414141414,
              "run_unclear_pct": 0.33585858585858586,
              "avg_trade_size": 1843.5509641873277,
              "avg_run_notional": 3379.843434343434,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.31313131313131315,
              "low_confidence_pct": 0.28535353535353536,
              "na_confidence_pct": 0.4015151515151515,
              "avg_feature_coverage": 0.8344696969696968,
              "observable_run_pct": 0.9924242424242424,
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
              "mixed_pct": 0.08108108108108109,
              "instit_pct": 0.32432432432432434,
              "ambiguous_pct": 0.4594594594594595,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.4594594594594595,
              "retail_qty_pct": 0.08253588516746412,
              "mixed_qty_pct": 0.04784688995215311,
              "instit_qty_pct": 0.4270334928229665,
              "ambiguous_qty_pct": 0.44258373205741625,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.44258373205741625,
              "retail_notional_pct": 0.08256091873615483,
              "mixed_notional_pct": 0.048093739069604756,
              "instit_notional_pct": 0.4278302436749446,
              "ambiguous_notional_pct": 0.44151509851929577,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.44151509851929577,
              "run_retail_pct": 0.20833333333333334,
              "run_mixed_pct": 0.08333333333333333,
              "run_instit_pct": 0.25,
              "run_unclear_pct": 0.4583333333333333,
              "avg_trade_size": 1854.4864864864865,
              "avg_run_notional": 2859.0,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.4583333333333333,
              "na_confidence_pct": 0.5416666666666666,
              "avg_feature_coverage": 0.84375,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.7579908675799086,
              "mixed_pct": 0.1095890410958904,
              "instit_pct": 0.0593607305936073,
              "ambiguous_pct": 0.0730593607305936,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0730593607305936,
              "retail_qty_pct": 0.07464788732394366,
              "mixed_qty_pct": 0.03309859154929577,
              "instit_qty_pct": 0.36514084507042255,
              "ambiguous_qty_pct": 0.527112676056338,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.527112676056338,
              "retail_notional_pct": 0.07574264763582146,
              "mixed_notional_pct": 0.033603334176177724,
              "instit_notional_pct": 0.36419597004124127,
              "ambiguous_notional_pct": 0.5264580481467596,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.5264580481467596,
              "run_retail_pct": 0.7980769230769231,
              "run_mixed_pct": 0.10576923076923077,
              "run_instit_pct": 0.02403846153846154,
              "run_unclear_pct": 0.07211538461538461,
              "avg_trade_size": 261.851598173516,
              "avg_run_notional": 275.6995192307692,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.7980769230769231,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.02403846153846154,
              "na_confidence_pct": 0.1778846153846154,
              "avg_feature_coverage": 0.8471153846153843,
              "observable_run_pct": 1.0,
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
              "run_unclear_pct": 0.0,
              "avg_trade_size": 240.00000000000003,
              "avg_run_notional": null,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.0,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": null,
              "observable_run_pct": 1.0,
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
          "n_trades": 946,
          "n_runs": 477,
          "n_trade_days": 10,
          "first_trade_date": "2026-03-02",
          "last_trade_date": "2026-03-13",
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
            "retail_pct": 0.2653276955602537,
            "mixed_pct": 0.1638477801268499,
            "instit_pct": 0.37103594080338265,
            "ambiguous_pct": 0.19978858350951373,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.19978858350951373,
            "retail_qty_pct": 0.06404051232409859,
            "mixed_qty_pct": 0.18797750382003056,
            "instit_qty_pct": 0.5031960255682045,
            "ambiguous_qty_pct": 0.2447859582876663,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2447859582876663,
            "retail_notional_pct": 0.06330950771352353,
            "mixed_notional_pct": 0.18917781819872645,
            "instit_notional_pct": 0.5050429291563048,
            "ambiguous_notional_pct": 0.24246974493144524,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.24246974493144524
          },
          "run_composition": {
            "retail_pct": 0.5010482180293501,
            "mixed_pct": 0.1530398322851153,
            "instit_pct": 0.18448637316561844,
            "ambiguous_pct": 0.16142557651991615,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.16142557651991615,
            "retail_notional_pct": 0.06330950771352353,
            "mixed_notional_pct": 0.18917781819872645,
            "instit_notional_pct": 0.5050429291563048,
            "unclear_notional_pct": 0.24246974493144524
          },
          "counts": {
            "trades": {
              "retail": 251,
              "mixed": 155,
              "institutional": 351,
              "ambiguous": 189,
              "unobservable": 0,
              "unclear": 189
            },
            "runs": {
              "retail": 239,
              "mixed": 73,
              "institutional": 88,
              "ambiguous": 77,
              "unobservable": 0,
              "unclear": 77
            }
          },
          "confidence": {
            "high": 0.05660377358490566,
            "medium": 0.31446540880503143,
            "low": 0.31446540880503143,
            "na": 0.31446540880503143
          },
          "confidence_counts": {
            "high": 27,
            "medium": 150,
            "low": 150,
            "na": 150
          },
          "trade_confidence": {
            "high": 0.02854122621564482,
            "medium": 0.26744186046511625,
            "low": 0.3403805496828753,
            "na": 0.36363636363636365
          },
          "trade_confidence_counts": {
            "high": 27,
            "medium": 253,
            "low": 322,
            "na": 344
          },
          "observability": {
            "avg_feature_coverage": 0.8588050314465407,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.16142557651991615,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5010482180293501,
          "dominance_gap": 0.3165618448637316,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 515,
              "SINGLE_FILL": 421,
              "WALK_BOOK": 10
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 688,
              "PERSISTENT_POSITIVE_IMPACT": 175,
              "MOMENTUM_REACTIVE": 82,
              "UNOBSERVABLE": 1
            },
            "d3_urgency": {
              "IMMEDIATE": 475,
              "ADAPTIVE": 2
            },
            "participant_confidence": {
              "MEDIUM": 150,
              "NA": 150,
              "LOW": 150,
              "HIGH": 27
            }
          },
          "trade_size": {
            "avg": 3057.7320295983086,
            "median": 1259.25
          },
          "run_size": {
            "avg": 6064.181341719078,
            "median": 2112.0,
            "avg_length": 1.2327044025157232
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-35",
              "timestamp": "2026-03-13T08:57:47.074400",
              "price": 0.245,
              "size": 31000.0,
              "notional": 7595.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3708,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-34",
              "timestamp": "2026-03-13T08:57:47.074400",
              "price": 0.245,
              "size": 19000.0,
              "notional": 4655.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3708,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-33",
              "timestamp": "2026-03-13T08:07:46.156400",
              "price": 0.24,
              "size": 20000.0,
              "notional": 4800.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3707,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-32",
              "timestamp": "2026-03-13T07:32:35.114700",
              "price": 0.245,
              "size": 7000.0,
              "notional": 1715.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3706,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-31",
              "timestamp": "2026-03-13T07:32:35.114600",
              "price": 0.245,
              "size": 40000.0,
              "notional": 9800.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3706,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-30",
              "timestamp": "2026-03-13T07:32:35.114600",
              "price": 0.245,
              "size": 60000.0,
              "notional": 14700.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3706,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-29",
              "timestamp": "2026-03-13T07:32:35.114600",
              "price": 0.245,
              "size": 50000.0,
              "notional": 12250.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3706,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-28",
              "timestamp": "2026-03-13T05:34:01.271300",
              "price": 0.25,
              "size": 8200.0,
              "notional": 2050.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3705,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-27",
              "timestamp": "2026-03-13T05:34:01.241200",
              "price": 0.25,
              "size": 8500.0,
              "notional": 2125.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3705,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-26",
              "timestamp": "2026-03-13T05:34:01.241200",
              "price": 0.25,
              "size": 11500.0,
              "notional": 2875.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3705,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-25",
              "timestamp": "2026-03-13T05:18:07.529900",
              "price": 0.25,
              "size": 100.0,
              "notional": 25.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3704,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-24",
              "timestamp": "2026-03-13T05:18:07.529900",
              "price": 0.25,
              "size": 8400.0,
              "notional": 2100.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3704,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-23",
              "timestamp": "2026-03-13T05:18:07.529900",
              "price": 0.25,
              "size": 10000.0,
              "notional": 2500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3704,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-22",
              "timestamp": "2026-03-13T05:18:07.529900",
              "price": 0.25,
              "size": 5000.0,
              "notional": 1250.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3704,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-21",
              "timestamp": "2026-03-13T05:18:07.499800",
              "price": 0.25,
              "size": 26600.0,
              "notional": 6650.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3704,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-20",
              "timestamp": "2026-03-13T05:00:10.765300",
              "price": 0.25,
              "size": 1400.0,
              "notional": 350.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3703,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-17",
              "timestamp": "2026-03-13T03:38:02.443100",
              "price": 0.25,
              "size": 43400.0,
              "notional": 10850.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3702,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-16",
              "timestamp": "2026-03-13T03:38:02.443100",
              "price": 0.25,
              "size": 31600.0,
              "notional": 7900.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3702,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-15",
              "timestamp": "2026-03-13T03:23:49.311900",
              "price": 0.245,
              "size": 30000.0,
              "notional": 7350.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3701,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-14",
              "timestamp": "2026-03-13T03:23:49.311900",
              "price": 0.245,
              "size": 40000.0,
              "notional": 9800.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3701,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-13",
              "timestamp": "2026-03-13T03:23:49.311900",
              "price": 0.245,
              "size": 155000.0,
              "notional": 37975.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3701,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-12",
              "timestamp": "2026-03-13T02:04:56.634800",
              "price": 0.245,
              "size": 4000.0,
              "notional": 980.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3700,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-11",
              "timestamp": "2026-03-13T01:59:31.443800",
              "price": 0.24,
              "size": 3200.0,
              "notional": 768.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3699,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-10",
              "timestamp": "2026-03-13T01:57:51.752900",
              "price": 0.245,
              "size": 80000.0,
              "notional": 19600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3698,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-9",
              "timestamp": "2026-03-13T01:41:17.107200",
              "price": 0.245,
              "size": 2000.0,
              "notional": 490.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3697,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-8",
              "timestamp": "2026-03-13T01:38:46.929400",
              "price": 0.245,
              "size": 25000.0,
              "notional": 6125.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3696,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-7",
              "timestamp": "2026-03-13T01:38:46.929400",
              "price": 0.245,
              "size": 53000.0,
              "notional": 12985.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3696,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-6",
              "timestamp": "2026-03-13T01:38:36.451500",
              "price": 0.245,
              "size": 8000.0,
              "notional": 1960.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3695,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-5",
              "timestamp": "2026-03-13T01:38:36.451500",
              "price": 0.245,
              "size": 7000.0,
              "notional": 1715.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3695,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-4",
              "timestamp": "2026-03-13T01:28:39.500600",
              "price": 0.245,
              "size": 2000.0,
              "notional": 490.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3694,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.2653276955602537,
              "mixed_pct": 0.1638477801268499,
              "instit_pct": 0.37103594080338265,
              "ambiguous_pct": 0.19978858350951373,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.19978858350951373,
              "retail_qty_pct": 0.06404051232409859,
              "mixed_qty_pct": 0.18797750382003056,
              "instit_qty_pct": 0.5031960255682045,
              "ambiguous_qty_pct": 0.2447859582876663,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.2447859582876663,
              "retail_notional_pct": 0.06330950771352353,
              "mixed_notional_pct": 0.18917781819872645,
              "instit_notional_pct": 0.5050429291563048,
              "ambiguous_notional_pct": 0.24246974493144524,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.24246974493144524,
              "run_retail_pct": 0.5010482180293501,
              "run_mixed_pct": 0.1530398322851153,
              "run_instit_pct": 0.18448637316561844,
              "run_unclear_pct": 0.16142557651991615,
              "avg_trade_size": 3057.7320295983086,
              "avg_run_notional": 6064.181341719078,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.05660377358490566,
              "medium_confidence_pct": 0.31446540880503143,
              "low_confidence_pct": 0.31446540880503143,
              "na_confidence_pct": 0.31446540880503143,
              "avg_feature_coverage": 0.8588050314465407,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.16831683168316833,
              "mixed_pct": 0.039603960396039604,
              "instit_pct": 0.3564356435643564,
              "ambiguous_pct": 0.38613861386138615,
              "unobservable_pct": 0.04950495049504951,
              "unclear_pct": 0.43564356435643564,
              "retail_qty_pct": 0.05090168702734148,
              "mixed_qty_pct": 0.02326934264107039,
              "instit_qty_pct": 0.598022105875509,
              "ambiguous_qty_pct": 0.3010471204188482,
              "unobservable_qty_pct": 0.02675974403723095,
              "unclear_qty_pct": 0.32780686445607915,
              "retail_notional_pct": 0.050795270002865836,
              "mixed_notional_pct": 0.022585531612920835,
              "instit_notional_pct": 0.6018225364029641,
              "ambiguous_notional_pct": 0.29781684566780847,
              "unobservable_notional_pct": 0.02697981631344078,
              "unclear_notional_pct": 0.32479666198124924,
              "run_retail_pct": 0.265625,
              "run_mixed_pct": 0.046875,
              "run_instit_pct": 0.21875,
              "run_unclear_pct": 0.46875,
              "avg_trade_size": 2902.059405940594,
              "avg_run_notional": 4579.8125,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.484375,
              "na_confidence_pct": 0.515625,
              "avg_feature_coverage": 0.8257812499999999,
              "observable_run_pct": 0.96875,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "NXR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.038461538461538464,
              "mixed_pct": 0.07692307692307693,
              "instit_pct": 0.46153846153846156,
              "ambiguous_pct": 0.34615384615384615,
              "unobservable_pct": 0.07692307692307693,
              "unclear_pct": 0.4230769230769231,
              "retail_qty_pct": 0.0189086980010805,
              "mixed_qty_pct": 0.05402485143165856,
              "instit_qty_pct": 0.5780659103187467,
              "ambiguous_qty_pct": 0.29497568881685576,
              "unobservable_qty_pct": 0.05402485143165856,
              "unclear_qty_pct": 0.34900054024851435,
              "retail_notional_pct": 0.019197754681901397,
              "mixed_notional_pct": 0.054708258240075226,
              "instit_notional_pct": 0.5731616101894131,
              "ambiguous_notional_pct": 0.2959303609462819,
              "unobservable_notional_pct": 0.05700201594232838,
              "unclear_notional_pct": 0.3529323768886103,
              "run_retail_pct": 0.05555555555555555,
              "run_mixed_pct": 0.05555555555555555,
              "run_instit_pct": 0.3888888888888889,
              "run_unclear_pct": 0.5,
              "avg_trade_size": 2699.6346153846152,
              "avg_run_notional": 3899.472222222222,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Mixed, mostly unclassified",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.4444444444444444,
              "na_confidence_pct": 0.5555555555555556,
              "avg_feature_coverage": 0.8194444444444444,
              "observable_run_pct": 0.9444444444444444,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.32639865054821476,
              "mixed_pct": 0.18836097835254428,
              "instit_pct": 0.3086870958673039,
              "ambiguous_pct": 0.17374191734607816,
              "unobservable_pct": 0.0028113578858588698,
              "unclear_pct": 0.17655327523193703,
              "retail_qty_pct": 0.09454482679249626,
              "mixed_qty_pct": 0.14722637817930717,
              "instit_qty_pct": 0.5356772931292438,
              "ambiguous_qty_pct": 0.21740131200368282,
              "unobservable_qty_pct": 0.005150189895269881,
              "unclear_qty_pct": 0.2225515018989527,
              "retail_notional_pct": 0.0947950067855818,
              "mixed_notional_pct": 0.14694757239267603,
              "instit_notional_pct": 0.5347327801768821,
              "ambiguous_notional_pct": 0.21863242340753342,
              "unobservable_notional_pct": 0.00489221723732668,
              "unclear_notional_pct": 0.2235246406448601,
              "run_retail_pct": 0.6346483704974271,
              "run_mixed_pct": 0.15723270440251572,
              "run_instit_pct": 0.11034877072612921,
              "run_unclear_pct": 0.09777015437392796,
              "avg_trade_size": 2113.309389935339,
              "avg_run_notional": 4297.908233276158,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.3018867924528302,
              "medium_confidence_pct": 0.3270440251572327,
              "low_confidence_pct": 0.11606632361349342,
              "na_confidence_pct": 0.2550028587764437,
              "avg_feature_coverage": 0.8668381932532876,
              "observable_run_pct": 0.9994282447112636,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "9MT",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2760072158749248,
              "mixed_pct": 0.07276007215874924,
              "instit_pct": 0.3199037883343355,
              "ambiguous_pct": 0.31449188214070956,
              "unobservable_pct": 0.01683704149128082,
              "unclear_pct": 0.3313289236319904,
              "retail_qty_pct": 0.05515250799594352,
              "mixed_qty_pct": 0.05174610604051278,
              "instit_qty_pct": 0.5159268793717658,
              "ambiguous_qty_pct": 0.3535117143822971,
              "unobservable_qty_pct": 0.02366279220948072,
              "unclear_qty_pct": 0.3771745065917778,
              "retail_notional_pct": 0.05468162283676297,
              "mixed_notional_pct": 0.0522961789684076,
              "instit_notional_pct": 0.5224416044693302,
              "ambiguous_notional_pct": 0.3475438409276847,
              "unobservable_notional_pct": 0.02303675279781449,
              "unclear_notional_pct": 0.3705805937254992,
              "run_retail_pct": 0.47198275862068967,
              "run_mixed_pct": 0.0625,
              "run_instit_pct": 0.16379310344827586,
              "run_unclear_pct": 0.3017241379310345,
              "avg_trade_size": 2045.5039085989176,
              "avg_run_notional": 3665.595905172414,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0010775862068965517,
              "medium_confidence_pct": 0.3448275862068966,
              "low_confidence_pct": 0.28987068965517243,
              "na_confidence_pct": 0.3642241379310345,
              "avg_feature_coverage": 0.8350754310344826,
              "observable_run_pct": 0.9924568965517241,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "QS9",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.26346153846153847,
              "mixed_pct": 0.10576923076923077,
              "instit_pct": 0.32371794871794873,
              "ambiguous_pct": 0.30705128205128207,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.30705128205128207,
              "retail_qty_pct": 0.07622553829265033,
              "mixed_qty_pct": 0.07985444555359321,
              "instit_qty_pct": 0.45387647495456757,
              "ambiguous_qty_pct": 0.3900435411991889,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.3900435411991889,
              "retail_notional_pct": 0.07643576861853744,
              "mixed_notional_pct": 0.08014149182820728,
              "instit_notional_pct": 0.45166126950683777,
              "ambiguous_notional_pct": 0.39176147004641754,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.39176147004641754,
              "run_retail_pct": 0.4768637532133676,
              "run_mixed_pct": 0.09640102827763496,
              "run_instit_pct": 0.14910025706940874,
              "run_unclear_pct": 0.2776349614395887,
              "avg_trade_size": 2619.631217948718,
              "avg_run_notional": 5252.730976863753,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.13110539845758354,
              "medium_confidence_pct": 0.3277634961439589,
              "low_confidence_pct": 0.16709511568123395,
              "na_confidence_pct": 0.3740359897172236,
              "avg_feature_coverage": 0.8380462724935731,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.6452442159383034,
              "mixed_pct": 0.13881748071979436,
              "instit_pct": 0.09254498714652956,
              "ambiguous_pct": 0.12339331619537275,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.12339331619537275,
              "retail_qty_pct": 0.07845652817526892,
              "mixed_qty_pct": 0.060890160860554626,
              "instit_qty_pct": 0.4124148820684891,
              "ambiguous_qty_pct": 0.4482384288956874,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.4482384288956874,
              "retail_notional_pct": 0.07846437387497075,
              "mixed_notional_pct": 0.06146658454251596,
              "instit_notional_pct": 0.4126786319644383,
              "ambiguous_notional_pct": 0.44739040961807497,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.44739040961807497,
              "run_retail_pct": 0.7209302325581395,
              "run_mixed_pct": 0.13372093023255813,
              "run_instit_pct": 0.0377906976744186,
              "run_unclear_pct": 0.10755813953488372,
              "avg_trade_size": 538.4035989717223,
              "avg_run_notional": 608.8343023255813,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.5726744186046512,
              "medium_confidence_pct": 0.13662790697674418,
              "low_confidence_pct": 0.04941860465116279,
              "na_confidence_pct": 0.24127906976744187,
              "avg_feature_coverage": 0.8469476744186045,
              "observable_run_pct": 1.0,
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
              "avg_trade_size": 300.0,
              "avg_run_notional": 300.0,
              "dominant_bucket": "UNOBSERVABLE",
              "dominant_label": "Not Observable",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.0,
              "na_confidence_pct": 1.0,
              "avg_feature_coverage": 0.55,
              "observable_run_pct": 0.0,
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
          "n_trades": 2175,
          "n_runs": 1086,
          "n_trade_days": 21,
          "first_trade_date": "2026-02-11",
          "last_trade_date": "2026-03-13",
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
            "retail_pct": 0.2786206896551724,
            "mixed_pct": 0.16091954022988506,
            "instit_pct": 0.3852873563218391,
            "ambiguous_pct": 0.17517241379310344,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.17517241379310344,
            "retail_qty_pct": 0.06967722058217875,
            "mixed_qty_pct": 0.19469883457358345,
            "instit_qty_pct": 0.5006209110258079,
            "ambiguous_qty_pct": 0.2350030338184299,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2350030338184299,
            "retail_notional_pct": 0.06949617667856145,
            "mixed_notional_pct": 0.19539806942822843,
            "instit_notional_pct": 0.5012864119978293,
            "ambiguous_notional_pct": 0.23381934189538078,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.23381934189538078
          },
          "run_composition": {
            "retail_pct": 0.5368324125230203,
            "mixed_pct": 0.1464088397790055,
            "instit_pct": 0.16206261510128914,
            "ambiguous_pct": 0.15469613259668508,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.15469613259668508,
            "retail_notional_pct": 0.06949617667856145,
            "mixed_notional_pct": 0.19539806942822843,
            "instit_notional_pct": 0.5012864119978293,
            "unclear_notional_pct": 0.23381934189538078
          },
          "counts": {
            "trades": {
              "retail": 606,
              "mixed": 350,
              "institutional": 838,
              "ambiguous": 381,
              "unobservable": 0,
              "unclear": 381
            },
            "runs": {
              "retail": 583,
              "mixed": 159,
              "institutional": 176,
              "ambiguous": 168,
              "unobservable": 0,
              "unclear": 168
            }
          },
          "confidence": {
            "high": 0.06906077348066299,
            "medium": 0.3710865561694291,
            "low": 0.2587476979742173,
            "na": 0.3011049723756906
          },
          "confidence_counts": {
            "high": 75,
            "medium": 403,
            "low": 281,
            "na": 327
          },
          "trade_confidence": {
            "high": 0.03816091954022988,
            "medium": 0.3793103448275862,
            "low": 0.2464367816091954,
            "na": 0.3360919540229885
          },
          "trade_confidence_counts": {
            "high": 83,
            "medium": 825,
            "low": 536,
            "na": 731
          },
          "observability": {
            "avg_feature_coverage": 0.8519337016574585,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.15469613259668508,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5368324125230203,
          "dominance_gap": 0.3747697974217311,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 1207,
              "SINGLE_FILL": 958,
              "WALK_BOOK": 10
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 1660,
              "PERSISTENT_POSITIVE_IMPACT": 360,
              "MOMENTUM_REACTIVE": 149,
              "SHORT_HORIZON_POSITIVE_IMPACT": 4,
              "UNOBSERVABLE": 2
            },
            "d3_urgency": {
              "IMMEDIATE": 1079,
              "ADAPTIVE": 7
            },
            "participant_confidence": {
              "MEDIUM": 403,
              "NA": 327,
              "LOW": 281,
              "HIGH": 75
            }
          },
          "trade_size": {
            "avg": 3494.885057471264,
            "median": 1380.0
          },
          "run_size": {
            "avg": 6999.4244935543275,
            "median": 2032.5,
            "avg_length": 1.1998158379373849
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-35",
              "timestamp": "2026-03-13T08:57:47.074400",
              "price": 0.245,
              "size": 31000.0,
              "notional": 7595.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3708,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-34",
              "timestamp": "2026-03-13T08:57:47.074400",
              "price": 0.245,
              "size": 19000.0,
              "notional": 4655.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3708,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-33",
              "timestamp": "2026-03-13T08:07:46.156400",
              "price": 0.24,
              "size": 20000.0,
              "notional": 4800.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3707,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-32",
              "timestamp": "2026-03-13T07:32:35.114700",
              "price": 0.245,
              "size": 7000.0,
              "notional": 1715.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3706,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-31",
              "timestamp": "2026-03-13T07:32:35.114600",
              "price": 0.245,
              "size": 40000.0,
              "notional": 9800.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3706,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-30",
              "timestamp": "2026-03-13T07:32:35.114600",
              "price": 0.245,
              "size": 60000.0,
              "notional": 14700.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3706,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-29",
              "timestamp": "2026-03-13T07:32:35.114600",
              "price": 0.245,
              "size": 50000.0,
              "notional": 12250.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3706,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-28",
              "timestamp": "2026-03-13T05:34:01.271300",
              "price": 0.25,
              "size": 8200.0,
              "notional": 2050.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3705,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-27",
              "timestamp": "2026-03-13T05:34:01.241200",
              "price": 0.25,
              "size": 8500.0,
              "notional": 2125.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3705,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-26",
              "timestamp": "2026-03-13T05:34:01.241200",
              "price": 0.25,
              "size": 11500.0,
              "notional": 2875.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3705,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-25",
              "timestamp": "2026-03-13T05:18:07.529900",
              "price": 0.25,
              "size": 100.0,
              "notional": 25.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3704,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-24",
              "timestamp": "2026-03-13T05:18:07.529900",
              "price": 0.25,
              "size": 8400.0,
              "notional": 2100.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3704,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-23",
              "timestamp": "2026-03-13T05:18:07.529900",
              "price": 0.25,
              "size": 10000.0,
              "notional": 2500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3704,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-22",
              "timestamp": "2026-03-13T05:18:07.529900",
              "price": 0.25,
              "size": 5000.0,
              "notional": 1250.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3704,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-21",
              "timestamp": "2026-03-13T05:18:07.499800",
              "price": 0.25,
              "size": 26600.0,
              "notional": 6650.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3704,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-20",
              "timestamp": "2026-03-13T05:00:10.765300",
              "price": 0.25,
              "size": 1400.0,
              "notional": 350.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3703,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-17",
              "timestamp": "2026-03-13T03:38:02.443100",
              "price": 0.25,
              "size": 43400.0,
              "notional": 10850.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3702,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-16",
              "timestamp": "2026-03-13T03:38:02.443100",
              "price": 0.25,
              "size": 31600.0,
              "notional": 7900.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3702,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-15",
              "timestamp": "2026-03-13T03:23:49.311900",
              "price": 0.245,
              "size": 30000.0,
              "notional": 7350.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3701,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-14",
              "timestamp": "2026-03-13T03:23:49.311900",
              "price": 0.245,
              "size": 40000.0,
              "notional": 9800.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3701,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-13",
              "timestamp": "2026-03-13T03:23:49.311900",
              "price": 0.245,
              "size": 155000.0,
              "notional": 37975.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3701,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-12",
              "timestamp": "2026-03-13T02:04:56.634800",
              "price": 0.245,
              "size": 4000.0,
              "notional": 980.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3700,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-11",
              "timestamp": "2026-03-13T01:59:31.443800",
              "price": 0.24,
              "size": 3200.0,
              "notional": 768.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3699,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-10",
              "timestamp": "2026-03-13T01:57:51.752900",
              "price": 0.245,
              "size": 80000.0,
              "notional": 19600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3698,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-9",
              "timestamp": "2026-03-13T01:41:17.107200",
              "price": 0.245,
              "size": 2000.0,
              "notional": 490.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3697,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-8",
              "timestamp": "2026-03-13T01:38:46.929400",
              "price": 0.245,
              "size": 25000.0,
              "notional": 6125.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3696,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-7",
              "timestamp": "2026-03-13T01:38:46.929400",
              "price": 0.245,
              "size": 53000.0,
              "notional": 12985.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3696,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-6",
              "timestamp": "2026-03-13T01:38:36.451500",
              "price": 0.245,
              "size": 8000.0,
              "notional": 1960.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3695,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-5",
              "timestamp": "2026-03-13T01:38:36.451500",
              "price": 0.245,
              "size": 7000.0,
              "notional": 1715.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3695,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-4",
              "timestamp": "2026-03-13T01:28:39.500600",
              "price": 0.245,
              "size": 2000.0,
              "notional": 490.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3694,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.2786206896551724,
              "mixed_pct": 0.16091954022988506,
              "instit_pct": 0.3852873563218391,
              "ambiguous_pct": 0.17517241379310344,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.17517241379310344,
              "retail_qty_pct": 0.06967722058217875,
              "mixed_qty_pct": 0.19469883457358345,
              "instit_qty_pct": 0.5006209110258079,
              "ambiguous_qty_pct": 0.2350030338184299,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.2350030338184299,
              "retail_notional_pct": 0.06949617667856145,
              "mixed_notional_pct": 0.19539806942822843,
              "instit_notional_pct": 0.5012864119978293,
              "ambiguous_notional_pct": 0.23381934189538078,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.23381934189538078,
              "run_retail_pct": 0.5368324125230203,
              "run_mixed_pct": 0.1464088397790055,
              "run_instit_pct": 0.16206261510128914,
              "run_unclear_pct": 0.15469613259668508,
              "avg_trade_size": 3494.885057471264,
              "avg_run_notional": 6999.4244935543275,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.06906077348066299,
              "medium_confidence_pct": 0.3710865561694291,
              "low_confidence_pct": 0.2587476979742173,
              "na_confidence_pct": 0.3011049723756906,
              "avg_feature_coverage": 0.8519337016574585,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2073170731707317,
              "mixed_pct": 0.04065040650406504,
              "instit_pct": 0.3252032520325203,
              "ambiguous_pct": 0.3983739837398374,
              "unobservable_pct": 0.028455284552845527,
              "unclear_pct": 0.4268292682926829,
              "retail_qty_pct": 0.06311537490532694,
              "mixed_qty_pct": 0.015905074476142388,
              "instit_qty_pct": 0.5145165362282252,
              "ambiguous_qty_pct": 0.3934612471598081,
              "unobservable_qty_pct": 0.01300176723049735,
              "unclear_qty_pct": 0.40646301439030547,
              "retail_notional_pct": 0.06372122791312926,
              "mixed_notional_pct": 0.015524953388791644,
              "instit_notional_pct": 0.5135671400959022,
              "ambiguous_notional_pct": 0.39447122648771005,
              "unobservable_notional_pct": 0.012715452114466865,
              "unclear_notional_pct": 0.4071866786021769,
              "run_retail_pct": 0.3105590062111801,
              "run_mixed_pct": 0.043478260869565216,
              "run_instit_pct": 0.19254658385093168,
              "run_unclear_pct": 0.45341614906832295,
              "avg_trade_size": 2851.8211382113823,
              "avg_run_notional": 4357.4409937888195,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5031055900621118,
              "na_confidence_pct": 0.4968944099378882,
              "avg_feature_coverage": 0.819254658385093,
              "observable_run_pct": 0.9813664596273292,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "QS9",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.22609340252038548,
              "mixed_pct": 0.1003212255992093,
              "instit_pct": 0.3807758833703978,
              "ambiguous_pct": 0.29231529528045463,
              "unobservable_pct": 0.0004941932295527551,
              "unclear_pct": 0.2928094885100074,
              "retail_qty_pct": 0.06196749271935373,
              "mixed_qty_pct": 0.09504591065101826,
              "instit_qty_pct": 0.5001411292870654,
              "ambiguous_qty_pct": 0.3428442636812657,
              "unobservable_qty_pct": 1.2036612969330108e-06,
              "unclear_qty_pct": 0.3428454673425626,
              "retail_notional_pct": 0.06073264925624184,
              "mixed_notional_pct": 0.09454310313231748,
              "instit_notional_pct": 0.5020496875133982,
              "ambiguous_notional_pct": 0.3426732973095817,
              "unobservable_notional_pct": 1.2627884607885594e-06,
              "unclear_notional_pct": 0.3426745600980425,
              "run_retail_pct": 0.45418552036199095,
              "run_mixed_pct": 0.10463800904977376,
              "run_instit_pct": 0.16911764705882354,
              "run_unclear_pct": 0.27205882352941174,
              "avg_trade_size": 2445.9422782307884,
              "avg_run_notional": 5598.828280542985,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.05938914027149321,
              "medium_confidence_pct": 0.3161764705882353,
              "low_confidence_pct": 0.24773755656108598,
              "na_confidence_pct": 0.3766968325791855,
              "avg_feature_coverage": 0.8449943438914026,
              "observable_run_pct": 0.9994343891402715,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "9MT",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2684694730972958,
              "mixed_pct": 0.10036241984945637,
              "instit_pct": 0.3127962085308057,
              "ambiguous_pct": 0.3105659325341511,
              "unobservable_pct": 0.007805965988291051,
              "unclear_pct": 0.31837189852244213,
              "retail_qty_pct": 0.05506988215949575,
              "mixed_qty_pct": 0.07969306659358728,
              "instit_qty_pct": 0.4985612496574404,
              "ambiguous_qty_pct": 0.35420663195396,
              "unobservable_qty_pct": 0.012469169635516579,
              "unclear_qty_pct": 0.3666758015894766,
              "retail_notional_pct": 0.05499523145258097,
              "mixed_notional_pct": 0.08408545333716358,
              "instit_notional_pct": 0.4980559670799587,
              "ambiguous_notional_pct": 0.3523341831353313,
              "unobservable_notional_pct": 0.010529164994965413,
              "unclear_notional_pct": 0.36286334813029675,
              "run_retail_pct": 0.4929881337648328,
              "run_mixed_pct": 0.08737864077669903,
              "run_instit_pct": 0.14509169363538296,
              "run_unclear_pct": 0.2745415318230852,
              "avg_trade_size": 2074.858656258712,
              "avg_run_notional": 4014.3031283710893,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.010248112189859764,
              "medium_confidence_pct": 0.38349514563106796,
              "low_confidence_pct": 0.24433656957928804,
              "na_confidence_pct": 0.36192017259978426,
              "avg_feature_coverage": 0.8447141316073353,
              "observable_run_pct": 0.9962243797195254,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.28224165988608624,
              "mixed_pct": 0.15683482506102522,
              "instit_pct": 0.32363710333604556,
              "ambiguous_pct": 0.2362693246541904,
              "unobservable_pct": 0.0010170870626525631,
              "unclear_pct": 0.23728641171684295,
              "retail_qty_pct": 0.08496675113127425,
              "mixed_qty_pct": 0.12074955808465618,
              "instit_qty_pct": 0.48962188300926207,
              "ambiguous_qty_pct": 0.3036226899220081,
              "unobservable_qty_pct": 0.0010391178527993778,
              "unclear_qty_pct": 0.30466180777480745,
              "retail_notional_pct": 0.08532896729891551,
              "mixed_notional_pct": 0.12203756496757721,
              "instit_notional_pct": 0.4902205891106954,
              "ambiguous_notional_pct": 0.3013691999687308,
              "unobservable_notional_pct": 0.0010436786540810893,
              "unclear_notional_pct": 0.3024128786228119,
              "run_retail_pct": 0.5824461793233973,
              "run_mixed_pct": 0.14431038561627632,
              "run_instit_pct": 0.12278211497515969,
              "run_unclear_pct": 0.15046132008516677,
              "avg_trade_size": 3583.8020240032547,
              "avg_run_notional": 8335.921812159924,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.17459190915542938,
              "medium_confidence_pct": 0.3624319848592382,
              "low_confidence_pct": 0.16820440028388928,
              "na_confidence_pct": 0.2947717057014431,
              "avg_feature_coverage": 0.8664655784244144,
              "observable_run_pct": 0.9997634255973503,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.6080760095011877,
              "mixed_pct": 0.1377672209026128,
              "instit_pct": 0.10688836104513064,
              "ambiguous_pct": 0.14726840855106887,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.14726840855106887,
              "retail_qty_pct": 0.07280428354511308,
              "mixed_qty_pct": 0.057300407576120836,
              "instit_qty_pct": 0.39758651002956924,
              "ambiguous_qty_pct": 0.47230879884919685,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.47230879884919685,
              "retail_notional_pct": 0.07250999363997686,
              "mixed_notional_pct": 0.05750186694373194,
              "instit_notional_pct": 0.39683297586056077,
              "ambiguous_notional_pct": 0.4731551635557304,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.4731551635557304,
              "run_retail_pct": 0.6893732970027248,
              "run_mixed_pct": 0.1335149863760218,
              "run_instit_pct": 0.04632152588555858,
              "run_unclear_pct": 0.1307901907356948,
              "avg_trade_size": 621.832541567696,
              "avg_run_notional": 713.3283378746594,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.5367847411444142,
              "medium_confidence_pct": 0.12806539509536785,
              "low_confidence_pct": 0.07084468664850137,
              "na_confidence_pct": 0.26430517711171664,
              "avg_feature_coverage": 0.8438692098092642,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "NXR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.08695652173913043,
              "mixed_pct": 0.10869565217391304,
              "instit_pct": 0.43478260869565216,
              "ambiguous_pct": 0.30434782608695654,
              "unobservable_pct": 0.06521739130434782,
              "unclear_pct": 0.3695652173913044,
              "retail_qty_pct": 0.01654385204450224,
              "mixed_qty_pct": 0.01509897413668545,
              "instit_qty_pct": 0.1540962288686606,
              "ambiguous_qty_pct": 0.08459760150267302,
              "unobservable_qty_pct": 0.7296633434474787,
              "unclear_qty_pct": 0.8142609449501518,
              "retail_notional_pct": 0.016532200397705588,
              "mixed_notional_pct": 0.014908038553575934,
              "instit_notional_pct": 0.14989747649155535,
              "ambiguous_notional_pct": 0.08264096185360317,
              "unobservable_notional_pct": 0.7360213227035599,
              "unclear_notional_pct": 0.8186622845571631,
              "run_retail_pct": 0.12121212121212122,
              "run_mixed_pct": 0.12121212121212122,
              "run_instit_pct": 0.36363636363636365,
              "run_unclear_pct": 0.3939393939393939,
              "avg_trade_size": 11932.576086956522,
              "avg_run_notional": 16633.28787878788,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed, leaning institution-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.48484848484848486,
              "na_confidence_pct": 0.5151515151515151,
              "avg_feature_coverage": 0.8015151515151516,
              "observable_run_pct": 0.9393939393939394,
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
              "instit_qty_pct": 0.09090909090909091,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.9090909090909091,
              "unclear_qty_pct": 0.9090909090909091,
              "retail_notional_pct": 0.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.09090909090909091,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.9090909090909091,
              "unclear_notional_pct": 0.9090909090909091,
              "run_retail_pct": 0.0,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.3333333333333333,
              "run_unclear_pct": 0.6666666666666666,
              "avg_trade_size": 220.0,
              "avg_run_notional": 220.0,
              "dominant_bucket": "UNOBSERVABLE",
              "dominant_label": "Not Observable",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.3333333333333333,
              "na_confidence_pct": 0.6666666666666666,
              "avg_feature_coverage": 0.6,
              "observable_run_pct": 0.33333333333333337,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "KUX",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.5,
              "mixed_pct": 0.5,
              "instit_pct": 0.0,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0,
              "retail_qty_pct": 0.16666666666666666,
              "mixed_qty_pct": 0.8333333333333334,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0,
              "retail_notional_pct": 0.20895522388059704,
              "mixed_notional_pct": 0.7910447761194029,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0,
              "run_retail_pct": 0.5,
              "run_mixed_pct": 0.5,
              "run_instit_pct": 0.0,
              "run_unclear_pct": 0.0,
              "avg_trade_size": 16.75,
              "avg_run_notional": 16.75,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5,
              "na_confidence_pct": 0.5,
              "avg_feature_coverage": 0.8500000000000001,
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
      "n_trades": 2175,
      "n_runs": 1086,
      "n_trade_days": 21,
      "first_trade_date": "2026-02-11",
      "last_trade_date": "2026-03-13",
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
        "retail_pct": 0.2786206896551724,
        "mixed_pct": 0.16091954022988506,
        "instit_pct": 0.3852873563218391,
        "ambiguous_pct": 0.17517241379310344,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.17517241379310344,
        "retail_qty_pct": 0.06967722058217875,
        "mixed_qty_pct": 0.19469883457358345,
        "instit_qty_pct": 0.5006209110258079,
        "ambiguous_qty_pct": 0.2350030338184299,
        "unobservable_qty_pct": 0.0,
        "unclear_qty_pct": 0.2350030338184299,
        "retail_notional_pct": 0.06949617667856145,
        "mixed_notional_pct": 0.19539806942822843,
        "instit_notional_pct": 0.5012864119978293,
        "ambiguous_notional_pct": 0.23381934189538078,
        "unobservable_notional_pct": 0.0,
        "unclear_notional_pct": 0.23381934189538078
      },
      "run_composition": {
        "retail_pct": 0.5368324125230203,
        "mixed_pct": 0.1464088397790055,
        "instit_pct": 0.16206261510128914,
        "ambiguous_pct": 0.15469613259668508,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.15469613259668508
      },
      "trade_size": {
        "avg": 3494.885057471264,
        "median": 1380.0
      },
      "run_size": {
        "avg": 6999.4244935543275,
        "median": 2032.5,
        "avg_length": 1.1998158379373849
      },
      "confidence": {
        "high": 0.06906077348066299,
        "medium": 0.3710865561694291,
        "low": 0.2587476979742173,
        "na": 0.3011049723756906
      },
      "confidence_counts": {
        "high": 75,
        "medium": 403,
        "low": 281,
        "na": 327
      },
      "trade_confidence": {
        "high": 0.03816091954022988,
        "medium": 0.3793103448275862,
        "low": 0.2464367816091954,
        "na": 0.3360919540229885
      },
      "trade_confidence_counts": {
        "high": 83,
        "medium": 825,
        "low": 536,
        "na": 731
      },
      "counts": {
        "trades": {
          "retail": 606,
          "mixed": 350,
          "institutional": 838,
          "ambiguous": 381,
          "unobservable": 0,
          "unclear": 381
        },
        "runs": {
          "retail": 583,
          "mixed": 159,
          "institutional": 176,
          "ambiguous": 168,
          "unobservable": 0,
          "unclear": 168
        }
      },
      "observability": {
        "avg_feature_coverage": 0.8519337016574585,
        "observable_run_pct": 1.0,
        "ambiguous_run_pct": 0.15469613259668508,
        "unobservable_run_pct": 0.0
      },
      "dominant_bucket": "RETAIL",
      "dominant_label": "Retail-led",
      "dominant_share": 0.5368324125230203,
      "dominance_gap": 0.3747697974217311,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2026-01",
            "n_trades": 4547,
            "n_runs": 1810,
            "retail_pct": 0.27996481196393225,
            "mixed_pct": 0.15350780734550254,
            "instit_pct": 0.3597976687926105,
            "ambiguous_pct": 0.2067297118979547,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.2067297118979547,
            "avg_trade_size": 3936.658346162305,
            "avg_run_notional": 9889.494751381215,
            "retail_qty_pct": 0.07277836792045625,
            "mixed_qty_pct": 0.15789513963932247,
            "instit_qty_pct": 0.5176925455285722,
            "ambiguous_qty_pct": 0.25163394691164903,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.25163394691164903,
            "retail_notional_pct": 0.07160620325642163,
            "mixed_notional_pct": 0.15785828429861018,
            "instit_notional_pct": 0.5175693857405639,
            "ambiguous_notional_pct": 0.2529661267044043,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2529661267044043,
            "run_retail_pct": 0.6430939226519337,
            "run_mixed_pct": 0.13425414364640884,
            "run_instit_pct": 0.1011049723756906,
            "run_ambiguous_pct": 0.12154696132596685,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.12154696132596685,
            "avg_feature_coverage": 0.8573204419889502,
            "high_confidence_pct": 0.14585635359116023,
            "medium_confidence_pct": 0.46243093922651934,
            "low_confidence_pct": 0.13591160220994475,
            "na_confidence_pct": 0.2558011049723757,
            "total_quantity": null
          },
          {
            "month": "2026-02",
            "n_trades": 3236,
            "n_runs": 1422,
            "retail_pct": 0.2778121137206428,
            "mixed_pct": 0.16718170580964153,
            "instit_pct": 0.32169344870210137,
            "ambiguous_pct": 0.23331273176761433,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.23331273176761433,
            "avg_trade_size": 3472.6229913473426,
            "avg_run_notional": 7902.537271448664,
            "retail_qty_pct": 0.0936751369857047,
            "mixed_qty_pct": 0.18777930710060717,
            "instit_qty_pct": 0.44697847429721327,
            "ambiguous_qty_pct": 0.27156708161647486,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.27156708161647486,
            "retail_notional_pct": 0.09379533963704086,
            "mixed_notional_pct": 0.18970958427423834,
            "instit_notional_pct": 0.44554998803994655,
            "ambiguous_notional_pct": 0.27094508804877426,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.27094508804877426,
            "run_retail_pct": 0.5759493670886076,
            "run_mixed_pct": 0.14627285513361463,
            "run_instit_pct": 0.12447257383966245,
            "run_ambiguous_pct": 0.15330520393811534,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.15330520393811534,
            "avg_feature_coverage": 0.85210970464135,
            "high_confidence_pct": 0.053445850914205346,
            "medium_confidence_pct": 0.4310829817158931,
            "low_confidence_pct": 0.2158931082981716,
            "na_confidence_pct": 0.29957805907172996,
            "total_quantity": null
          },
          {
            "month": "2026-03",
            "n_trades": 946,
            "n_runs": 477,
            "retail_pct": 0.2653276955602537,
            "mixed_pct": 0.1638477801268499,
            "instit_pct": 0.37103594080338265,
            "ambiguous_pct": 0.19978858350951373,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.19978858350951373,
            "avg_trade_size": 3057.7320295983086,
            "avg_run_notional": 6064.181341719078,
            "retail_qty_pct": 0.06404051232409859,
            "mixed_qty_pct": 0.18797750382003056,
            "instit_qty_pct": 0.5031960255682045,
            "ambiguous_qty_pct": 0.2447859582876663,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2447859582876663,
            "retail_notional_pct": 0.06330950771352353,
            "mixed_notional_pct": 0.18917781819872645,
            "instit_notional_pct": 0.5050429291563048,
            "ambiguous_notional_pct": 0.24246974493144524,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.24246974493144524,
            "run_retail_pct": 0.5010482180293501,
            "run_mixed_pct": 0.1530398322851153,
            "run_instit_pct": 0.18448637316561844,
            "run_ambiguous_pct": 0.16142557651991615,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.16142557651991615,
            "avg_feature_coverage": 0.8588050314465407,
            "high_confidence_pct": 0.05660377358490566,
            "medium_confidence_pct": 0.31446540880503143,
            "low_confidence_pct": 0.31446540880503143,
            "na_confidence_pct": 0.31446540880503143,
            "total_quantity": null
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "TKU",
          "currency": "SGD",
          "is_target": true,
          "retail_pct": 0.2786206896551724,
          "mixed_pct": 0.16091954022988506,
          "instit_pct": 0.3852873563218391,
          "ambiguous_pct": 0.17517241379310344,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.17517241379310344,
          "retail_qty_pct": 0.06967722058217875,
          "mixed_qty_pct": 0.19469883457358345,
          "instit_qty_pct": 0.5006209110258079,
          "ambiguous_qty_pct": 0.2350030338184299,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.2350030338184299,
          "retail_notional_pct": 0.06949617667856145,
          "mixed_notional_pct": 0.19539806942822843,
          "instit_notional_pct": 0.5012864119978293,
          "ambiguous_notional_pct": 0.23381934189538078,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.23381934189538078,
          "run_retail_pct": 0.5368324125230203,
          "run_mixed_pct": 0.1464088397790055,
          "run_instit_pct": 0.16206261510128914,
          "run_unclear_pct": 0.15469613259668508,
          "avg_trade_size": 3494.885057471264,
          "avg_run_notional": 6999.4244935543275,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.06906077348066299,
          "medium_confidence_pct": 0.3710865561694291,
          "low_confidence_pct": 0.2587476979742173,
          "na_confidence_pct": 0.3011049723756906,
          "avg_feature_coverage": 0.8519337016574585,
          "observable_run_pct": 1.0,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "LVR",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.2073170731707317,
          "mixed_pct": 0.04065040650406504,
          "instit_pct": 0.3252032520325203,
          "ambiguous_pct": 0.3983739837398374,
          "unobservable_pct": 0.028455284552845527,
          "unclear_pct": 0.4268292682926829,
          "retail_qty_pct": 0.06311537490532694,
          "mixed_qty_pct": 0.015905074476142388,
          "instit_qty_pct": 0.5145165362282252,
          "ambiguous_qty_pct": 0.3934612471598081,
          "unobservable_qty_pct": 0.01300176723049735,
          "unclear_qty_pct": 0.40646301439030547,
          "retail_notional_pct": 0.06372122791312926,
          "mixed_notional_pct": 0.015524953388791644,
          "instit_notional_pct": 0.5135671400959022,
          "ambiguous_notional_pct": 0.39447122648771005,
          "unobservable_notional_pct": 0.012715452114466865,
          "unclear_notional_pct": 0.4071866786021769,
          "run_retail_pct": 0.3105590062111801,
          "run_mixed_pct": 0.043478260869565216,
          "run_instit_pct": 0.19254658385093168,
          "run_unclear_pct": 0.45341614906832295,
          "avg_trade_size": 2851.8211382113823,
          "avg_run_notional": 4357.4409937888195,
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Unclassified Flow",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.5031055900621118,
          "na_confidence_pct": 0.4968944099378882,
          "avg_feature_coverage": 0.819254658385093,
          "observable_run_pct": 0.9813664596273292,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "QS9",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.22609340252038548,
          "mixed_pct": 0.1003212255992093,
          "instit_pct": 0.3807758833703978,
          "ambiguous_pct": 0.29231529528045463,
          "unobservable_pct": 0.0004941932295527551,
          "unclear_pct": 0.2928094885100074,
          "retail_qty_pct": 0.06196749271935373,
          "mixed_qty_pct": 0.09504591065101826,
          "instit_qty_pct": 0.5001411292870654,
          "ambiguous_qty_pct": 0.3428442636812657,
          "unobservable_qty_pct": 1.2036612969330108e-06,
          "unclear_qty_pct": 0.3428454673425626,
          "retail_notional_pct": 0.06073264925624184,
          "mixed_notional_pct": 0.09454310313231748,
          "instit_notional_pct": 0.5020496875133982,
          "ambiguous_notional_pct": 0.3426732973095817,
          "unobservable_notional_pct": 1.2627884607885594e-06,
          "unclear_notional_pct": 0.3426745600980425,
          "run_retail_pct": 0.45418552036199095,
          "run_mixed_pct": 0.10463800904977376,
          "run_instit_pct": 0.16911764705882354,
          "run_unclear_pct": 0.27205882352941174,
          "avg_trade_size": 2445.9422782307884,
          "avg_run_notional": 5598.828280542985,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.05938914027149321,
          "medium_confidence_pct": 0.3161764705882353,
          "low_confidence_pct": 0.24773755656108598,
          "na_confidence_pct": 0.3766968325791855,
          "avg_feature_coverage": 0.8449943438914026,
          "observable_run_pct": 0.9994343891402715,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "9MT",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.2684694730972958,
          "mixed_pct": 0.10036241984945637,
          "instit_pct": 0.3127962085308057,
          "ambiguous_pct": 0.3105659325341511,
          "unobservable_pct": 0.007805965988291051,
          "unclear_pct": 0.31837189852244213,
          "retail_qty_pct": 0.05506988215949575,
          "mixed_qty_pct": 0.07969306659358728,
          "instit_qty_pct": 0.4985612496574404,
          "ambiguous_qty_pct": 0.35420663195396,
          "unobservable_qty_pct": 0.012469169635516579,
          "unclear_qty_pct": 0.3666758015894766,
          "retail_notional_pct": 0.05499523145258097,
          "mixed_notional_pct": 0.08408545333716358,
          "instit_notional_pct": 0.4980559670799587,
          "ambiguous_notional_pct": 0.3523341831353313,
          "unobservable_notional_pct": 0.010529164994965413,
          "unclear_notional_pct": 0.36286334813029675,
          "run_retail_pct": 0.4929881337648328,
          "run_mixed_pct": 0.08737864077669903,
          "run_instit_pct": 0.14509169363538296,
          "run_unclear_pct": 0.2745415318230852,
          "avg_trade_size": 2074.858656258712,
          "avg_run_notional": 4014.3031283710893,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.010248112189859764,
          "medium_confidence_pct": 0.38349514563106796,
          "low_confidence_pct": 0.24433656957928804,
          "na_confidence_pct": 0.36192017259978426,
          "avg_feature_coverage": 0.8447141316073353,
          "observable_run_pct": 0.9962243797195254,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "ITS",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.28224165988608624,
          "mixed_pct": 0.15683482506102522,
          "instit_pct": 0.32363710333604556,
          "ambiguous_pct": 0.2362693246541904,
          "unobservable_pct": 0.0010170870626525631,
          "unclear_pct": 0.23728641171684295,
          "retail_qty_pct": 0.08496675113127425,
          "mixed_qty_pct": 0.12074955808465618,
          "instit_qty_pct": 0.48962188300926207,
          "ambiguous_qty_pct": 0.3036226899220081,
          "unobservable_qty_pct": 0.0010391178527993778,
          "unclear_qty_pct": 0.30466180777480745,
          "retail_notional_pct": 0.08532896729891551,
          "mixed_notional_pct": 0.12203756496757721,
          "instit_notional_pct": 0.4902205891106954,
          "ambiguous_notional_pct": 0.3013691999687308,
          "unobservable_notional_pct": 0.0010436786540810893,
          "unclear_notional_pct": 0.3024128786228119,
          "run_retail_pct": 0.5824461793233973,
          "run_mixed_pct": 0.14431038561627632,
          "run_instit_pct": 0.12278211497515969,
          "run_unclear_pct": 0.15046132008516677,
          "avg_trade_size": 3583.8020240032547,
          "avg_run_notional": 8335.921812159924,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.17459190915542938,
          "medium_confidence_pct": 0.3624319848592382,
          "low_confidence_pct": 0.16820440028388928,
          "na_confidence_pct": 0.2947717057014431,
          "avg_feature_coverage": 0.8664655784244144,
          "observable_run_pct": 0.9997634255973503,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "U77",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.6080760095011877,
          "mixed_pct": 0.1377672209026128,
          "instit_pct": 0.10688836104513064,
          "ambiguous_pct": 0.14726840855106887,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.14726840855106887,
          "retail_qty_pct": 0.07280428354511308,
          "mixed_qty_pct": 0.057300407576120836,
          "instit_qty_pct": 0.39758651002956924,
          "ambiguous_qty_pct": 0.47230879884919685,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.47230879884919685,
          "retail_notional_pct": 0.07250999363997686,
          "mixed_notional_pct": 0.05750186694373194,
          "instit_notional_pct": 0.39683297586056077,
          "ambiguous_notional_pct": 0.4731551635557304,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.4731551635557304,
          "run_retail_pct": 0.6893732970027248,
          "run_mixed_pct": 0.1335149863760218,
          "run_instit_pct": 0.04632152588555858,
          "run_unclear_pct": 0.1307901907356948,
          "avg_trade_size": 621.832541567696,
          "avg_run_notional": 713.3283378746594,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.5367847411444142,
          "medium_confidence_pct": 0.12806539509536785,
          "low_confidence_pct": 0.07084468664850137,
          "na_confidence_pct": 0.26430517711171664,
          "avg_feature_coverage": 0.8438692098092642,
          "observable_run_pct": 1.0,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "NXR",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.08695652173913043,
          "mixed_pct": 0.10869565217391304,
          "instit_pct": 0.43478260869565216,
          "ambiguous_pct": 0.30434782608695654,
          "unobservable_pct": 0.06521739130434782,
          "unclear_pct": 0.3695652173913044,
          "retail_qty_pct": 0.01654385204450224,
          "mixed_qty_pct": 0.01509897413668545,
          "instit_qty_pct": 0.1540962288686606,
          "ambiguous_qty_pct": 0.08459760150267302,
          "unobservable_qty_pct": 0.7296633434474787,
          "unclear_qty_pct": 0.8142609449501518,
          "retail_notional_pct": 0.016532200397705588,
          "mixed_notional_pct": 0.014908038553575934,
          "instit_notional_pct": 0.14989747649155535,
          "ambiguous_notional_pct": 0.08264096185360317,
          "unobservable_notional_pct": 0.7360213227035599,
          "unclear_notional_pct": 0.8186622845571631,
          "run_retail_pct": 0.12121212121212122,
          "run_mixed_pct": 0.12121212121212122,
          "run_instit_pct": 0.36363636363636365,
          "run_unclear_pct": 0.3939393939393939,
          "avg_trade_size": 11932.576086956522,
          "avg_run_notional": 16633.28787878788,
          "dominant_bucket": "INSTITUTIONAL",
          "dominant_label": "Mixed, leaning institution-like",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.48484848484848486,
          "na_confidence_pct": 0.5151515151515151,
          "avg_feature_coverage": 0.8015151515151516,
          "observable_run_pct": 0.9393939393939394,
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
          "instit_qty_pct": 0.09090909090909091,
          "ambiguous_qty_pct": 0.0,
          "unobservable_qty_pct": 0.9090909090909091,
          "unclear_qty_pct": 0.9090909090909091,
          "retail_notional_pct": 0.0,
          "mixed_notional_pct": 0.0,
          "instit_notional_pct": 0.09090909090909091,
          "ambiguous_notional_pct": 0.0,
          "unobservable_notional_pct": 0.9090909090909091,
          "unclear_notional_pct": 0.9090909090909091,
          "run_retail_pct": 0.0,
          "run_mixed_pct": 0.0,
          "run_instit_pct": 0.3333333333333333,
          "run_unclear_pct": 0.6666666666666666,
          "avg_trade_size": 220.0,
          "avg_run_notional": 220.0,
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.3333333333333333,
          "na_confidence_pct": 0.6666666666666666,
          "avg_feature_coverage": 0.6,
          "observable_run_pct": 0.33333333333333337,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "KUX",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.5,
          "mixed_pct": 0.5,
          "instit_pct": 0.0,
          "ambiguous_pct": 0.0,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.0,
          "retail_qty_pct": 0.16666666666666666,
          "mixed_qty_pct": 0.8333333333333334,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": 0.0,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.0,
          "retail_notional_pct": 0.20895522388059704,
          "mixed_notional_pct": 0.7910447761194029,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": 0.0,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.0,
          "run_retail_pct": 0.5,
          "run_mixed_pct": 0.5,
          "run_instit_pct": 0.0,
          "run_unclear_pct": 0.0,
          "avg_trade_size": 16.75,
          "avg_run_notional": 16.75,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Mixed, leaning retail-like",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.5,
          "na_confidence_pct": 0.5,
          "avg_feature_coverage": 0.8500000000000001,
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
            "ticker": "TKU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.15625,
            "mixed_pct": 0.125,
            "instit_pct": 0.40625,
            "ambiguous_pct": 0.3125,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.3125,
            "retail_qty_pct": 0.03682753640630641,
            "mixed_qty_pct": 0.10831628354796004,
            "instit_qty_pct": 0.37946804669635337,
            "ambiguous_qty_pct": 0.4753881333493802,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.4753881333493802,
            "retail_notional_pct": 0.03613986342379713,
            "mixed_notional_pct": 0.10969632339992565,
            "instit_notional_pct": 0.3797914180053613,
            "ambiguous_notional_pct": 0.4743723951709159,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.4743723951709159,
            "run_retail_pct": 0.29411764705882354,
            "run_mixed_pct": 0.11764705882352941,
            "run_instit_pct": 0.23529411764705882,
            "run_unclear_pct": 0.35294117647058826,
            "avg_trade_size": 6388.375,
            "avg_run_notional": 12025.176470588236,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Mixed, mostly unclassified",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5294117647058824,
            "na_confidence_pct": 0.47058823529411764,
            "avg_feature_coverage": 0.8588235294117648,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.4375,
            "mixed_pct": 0.14166666666666666,
            "instit_pct": 0.2791666666666667,
            "ambiguous_pct": 0.14166666666666666,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.14166666666666666,
            "retail_qty_pct": 0.05611340815121087,
            "mixed_qty_pct": 0.08997834219334515,
            "instit_qty_pct": 0.6650915534554046,
            "ambiguous_qty_pct": 0.18881669620003938,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.18881669620003938,
            "retail_notional_pct": 0.05633295378574635,
            "mixed_notional_pct": 0.09029571958947208,
            "instit_notional_pct": 0.6641215785326343,
            "ambiguous_notional_pct": 0.18924974809214723,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.18924974809214723,
            "run_retail_pct": 0.7074829931972789,
            "run_mixed_pct": 0.12244897959183673,
            "run_instit_pct": 0.09523809523809523,
            "run_unclear_pct": 0.07482993197278912,
            "avg_trade_size": 2162.6625,
            "avg_run_notional": 3530.877551020408,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.5034013605442177,
            "medium_confidence_pct": 0.29931972789115646,
            "low_confidence_pct": 0.0,
            "na_confidence_pct": 0.19727891156462585,
            "avg_feature_coverage": 0.8510204081632653,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "9MT",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2,
            "mixed_pct": 0.01904761904761905,
            "instit_pct": 0.38095238095238093,
            "ambiguous_pct": 0.4,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.4,
            "retail_qty_pct": 0.06925675675675676,
            "mixed_qty_pct": 0.014076576576576577,
            "instit_qty_pct": 0.5647522522522522,
            "ambiguous_qty_pct": 0.3519144144144144,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3519144144144144,
            "retail_notional_pct": 0.06982281081477677,
            "mixed_notional_pct": 0.013863311199970653,
            "instit_notional_pct": 0.5650757547965809,
            "ambiguous_notional_pct": 0.35123812318867165,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.35123812318867165,
            "run_retail_pct": 0.3508771929824561,
            "run_mixed_pct": 0.017543859649122806,
            "run_instit_pct": 0.19298245614035087,
            "run_unclear_pct": 0.43859649122807015,
            "avg_trade_size": 1298.047619047619,
            "avg_run_notional": 2391.1403508771928,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Mixed, mostly unclassified",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.2631578947368421,
            "low_confidence_pct": 0.2807017543859649,
            "na_confidence_pct": 0.45614035087719296,
            "avg_feature_coverage": 0.8421052631578947,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.08333333333333333,
            "mixed_pct": 0.16666666666666666,
            "instit_pct": 0.5,
            "ambiguous_pct": 0.25,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.25,
            "retail_qty_pct": 0.03404255319148936,
            "mixed_qty_pct": 0.0851063829787234,
            "instit_qty_pct": 0.4978723404255319,
            "ambiguous_qty_pct": 0.3829787234042553,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3829787234042553,
            "retail_notional_pct": 0.03420327868852459,
            "mixed_notional_pct": 0.0860327868852459,
            "instit_notional_pct": 0.4996983606557377,
            "ambiguous_notional_pct": 0.3800655737704918,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.3800655737704918,
            "run_retail_pct": 0.16666666666666666,
            "run_mixed_pct": 0.16666666666666666,
            "run_instit_pct": 0.3333333333333333,
            "run_unclear_pct": 0.3333333333333333,
            "avg_trade_size": 1588.5416666666667,
            "avg_run_notional": 3177.0833333333335,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed, leaning institution-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5,
            "na_confidence_pct": 0.5,
            "avg_feature_coverage": 0.875,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "QS9",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.18292682926829268,
            "mixed_pct": 0.16463414634146342,
            "instit_pct": 0.3170731707317073,
            "ambiguous_pct": 0.3353658536585366,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.3353658536585366,
            "retail_qty_pct": 0.046754275903057516,
            "mixed_qty_pct": 0.14696559466420128,
            "instit_qty_pct": 0.43742983556758896,
            "ambiguous_qty_pct": 0.3688502938651522,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3688502938651522,
            "retail_notional_pct": 0.04663530403433183,
            "mixed_notional_pct": 0.14718775718260285,
            "instit_notional_pct": 0.43896275497563797,
            "ambiguous_notional_pct": 0.3672141838074274,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.3672141838074274,
            "run_retail_pct": 0.4057971014492754,
            "run_mixed_pct": 0.15942028985507245,
            "run_instit_pct": 0.13043478260869565,
            "run_unclear_pct": 0.30434782608695654,
            "avg_trade_size": 2141.2256097560976,
            "avg_run_notional": 5089.289855072463,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.42028985507246375,
            "low_confidence_pct": 0.11594202898550725,
            "na_confidence_pct": 0.463768115942029,
            "avg_feature_coverage": 0.8456521739130436,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.125,
            "mixed_pct": 0.0,
            "instit_pct": 0.25,
            "ambiguous_pct": 0.625,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.625,
            "retail_qty_pct": 0.001447178002894356,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.27496382054992763,
            "ambiguous_qty_pct": 0.723589001447178,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.723589001447178,
            "retail_notional_pct": 0.0014270424545130217,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.277916518016411,
            "ambiguous_notional_pct": 0.720656439529076,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.720656439529076,
            "run_retail_pct": 0.14285714285714285,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.14285714285714285,
            "run_unclear_pct": 0.7142857142857143,
            "avg_trade_size": 1751.875,
            "avg_run_notional": 2002.142857142857,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.2857142857142857,
            "na_confidence_pct": 0.7142857142857143,
            "avg_feature_coverage": 0.8071428571428573,
            "observable_run_pct": 1.0,
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
            "retail_pct": 0.27765237020316025,
            "mixed_pct": 0.18058690744920994,
            "instit_pct": 0.28442437923250563,
            "ambiguous_pct": 0.25733634311512416,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.25733634311512416,
            "retail_qty_pct": 0.0589441990504078,
            "mixed_qty_pct": 0.21532913130511025,
            "instit_qty_pct": 0.3577514185981107,
            "ambiguous_qty_pct": 0.3679752510463712,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3679752510463712,
            "retail_notional_pct": 0.05827037652551906,
            "mixed_notional_pct": 0.21728648385875066,
            "instit_notional_pct": 0.36299687123742985,
            "ambiguous_notional_pct": 0.36144626837830046,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.36144626837830046,
            "run_retail_pct": 0.5172413793103449,
            "run_mixed_pct": 0.15948275862068967,
            "run_instit_pct": 0.13793103448275862,
            "run_unclear_pct": 0.1853448275862069,
            "avg_trade_size": 3194.708803611738,
            "avg_run_notional": 6100.241379310345,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.11637931034482758,
            "medium_confidence_pct": 0.3017241379310345,
            "low_confidence_pct": 0.23706896551724138,
            "na_confidence_pct": 0.3448275862068966,
            "avg_feature_coverage": 0.8571120689655171,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "NXR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.6923076923076923,
            "ambiguous_pct": 0.3076923076923077,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.3076923076923077,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.8589306029579067,
            "ambiguous_qty_pct": 0.1410693970420933,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.1410693970420933,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.859655562693096,
            "ambiguous_notional_pct": 0.14034443730690405,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.14034443730690405,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.5555555555555556,
            "run_unclear_pct": 0.4444444444444444,
            "avg_trade_size": 2514.6923076923076,
            "avg_run_notional": 3632.3333333333335,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Institution-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5555555555555556,
            "na_confidence_pct": 0.4444444444444444,
            "avg_feature_coverage": 0.8500000000000001,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.42525125628140703,
            "mixed_pct": 0.21545226130653267,
            "instit_pct": 0.24623115577889448,
            "ambiguous_pct": 0.10678391959798995,
            "unobservable_pct": 0.00628140703517588,
            "unclear_pct": 0.11306532663316583,
            "retail_qty_pct": 0.0751152490282925,
            "mixed_qty_pct": 0.16989062641236555,
            "instit_qty_pct": 0.5568561872909699,
            "ambiguous_qty_pct": 0.18195787761005153,
            "unobservable_qty_pct": 0.016180059658320527,
            "unclear_qty_pct": 0.19813793726837206,
            "retail_notional_pct": 0.07551172250136842,
            "mixed_notional_pct": 0.17087898821249198,
            "instit_notional_pct": 0.5552081250662357,
            "ambiguous_notional_pct": 0.18232977271709216,
            "unobservable_notional_pct": 0.016071391502811675,
            "unclear_notional_pct": 0.19840116421990384,
            "run_retail_pct": 0.7123287671232876,
            "run_mixed_pct": 0.1601685985247629,
            "run_instit_pct": 0.07586933614330875,
            "run_unclear_pct": 0.051633298208640675,
            "avg_trade_size": 1437.3288316582914,
            "avg_run_notional": 2411.198630136986,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.43730242360379346,
            "medium_confidence_pct": 0.3224446786090622,
            "low_confidence_pct": 0.02845100105374078,
            "na_confidence_pct": 0.21180189673340358,
            "avg_feature_coverage": 0.8698103266596415,
            "observable_run_pct": 0.9989462592202318,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "QS9",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.31322505800464034,
            "mixed_pct": 0.11832946635730858,
            "instit_pct": 0.3294663573085847,
            "ambiguous_pct": 0.23897911832946636,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.23897911832946636,
            "retail_qty_pct": 0.07841526897770672,
            "mixed_qty_pct": 0.09947506643641621,
            "instit_qty_pct": 0.5091106107778447,
            "ambiguous_qty_pct": 0.31299905380803233,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.31299905380803233,
            "retail_notional_pct": 0.07827980878032292,
            "mixed_notional_pct": 0.10015657758996431,
            "instit_notional_pct": 0.5083981079412516,
            "ambiguous_notional_pct": 0.31316550568846113,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.31316550568846113,
            "run_retail_pct": 0.5577342047930284,
            "run_mixed_pct": 0.10675381263616558,
            "run_instit_pct": 0.13725490196078433,
            "run_unclear_pct": 0.19825708061002179,
            "avg_trade_size": 2078.463689095128,
            "avg_run_notional": 3903.3457516339868,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.20261437908496732,
            "medium_confidence_pct": 0.3442265795206972,
            "low_confidence_pct": 0.14814814814814814,
            "na_confidence_pct": 0.30501089324618735,
            "avg_feature_coverage": 0.8428104575163397,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "9MT",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.25206611570247933,
            "mixed_pct": 0.07162534435261708,
            "instit_pct": 0.31955922865013775,
            "ambiguous_pct": 0.33884297520661155,
            "unobservable_pct": 0.01790633608815427,
            "unclear_pct": 0.35674931129476584,
            "retail_qty_pct": 0.06107187370170337,
            "mixed_qty_pct": 0.0626743426909609,
            "instit_qty_pct": 0.4623419787524482,
            "ambiguous_qty_pct": 0.37853878568461036,
            "unobservable_qty_pct": 0.035373019170277166,
            "unclear_qty_pct": 0.41391180485488754,
            "retail_notional_pct": 0.06133248357389097,
            "mixed_notional_pct": 0.06449629338517564,
            "instit_notional_pct": 0.4628031003767134,
            "ambiguous_notional_pct": 0.3747719322364164,
            "unobservable_notional_pct": 0.03659619042780357,
            "unclear_notional_pct": 0.41136812266421996,
            "run_retail_pct": 0.43434343434343436,
            "run_mixed_pct": 0.06565656565656566,
            "run_instit_pct": 0.16414141414141414,
            "run_unclear_pct": 0.33585858585858586,
            "avg_trade_size": 1843.5509641873277,
            "avg_run_notional": 3379.843434343434,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.31313131313131315,
            "low_confidence_pct": 0.28535353535353536,
            "na_confidence_pct": 0.4015151515151515,
            "avg_feature_coverage": 0.8344696969696968,
            "observable_run_pct": 0.9924242424242424,
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
            "mixed_pct": 0.08108108108108109,
            "instit_pct": 0.32432432432432434,
            "ambiguous_pct": 0.4594594594594595,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.4594594594594595,
            "retail_qty_pct": 0.08253588516746412,
            "mixed_qty_pct": 0.04784688995215311,
            "instit_qty_pct": 0.4270334928229665,
            "ambiguous_qty_pct": 0.44258373205741625,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.44258373205741625,
            "retail_notional_pct": 0.08256091873615483,
            "mixed_notional_pct": 0.048093739069604756,
            "instit_notional_pct": 0.4278302436749446,
            "ambiguous_notional_pct": 0.44151509851929577,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.44151509851929577,
            "run_retail_pct": 0.20833333333333334,
            "run_mixed_pct": 0.08333333333333333,
            "run_instit_pct": 0.25,
            "run_unclear_pct": 0.4583333333333333,
            "avg_trade_size": 1854.4864864864865,
            "avg_run_notional": 2859.0,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.4583333333333333,
            "na_confidence_pct": 0.5416666666666666,
            "avg_feature_coverage": 0.84375,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.7579908675799086,
            "mixed_pct": 0.1095890410958904,
            "instit_pct": 0.0593607305936073,
            "ambiguous_pct": 0.0730593607305936,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0730593607305936,
            "retail_qty_pct": 0.07464788732394366,
            "mixed_qty_pct": 0.03309859154929577,
            "instit_qty_pct": 0.36514084507042255,
            "ambiguous_qty_pct": 0.527112676056338,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.527112676056338,
            "retail_notional_pct": 0.07574264763582146,
            "mixed_notional_pct": 0.033603334176177724,
            "instit_notional_pct": 0.36419597004124127,
            "ambiguous_notional_pct": 0.5264580481467596,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.5264580481467596,
            "run_retail_pct": 0.7980769230769231,
            "run_mixed_pct": 0.10576923076923077,
            "run_instit_pct": 0.02403846153846154,
            "run_unclear_pct": 0.07211538461538461,
            "avg_trade_size": 261.851598173516,
            "avg_run_notional": 275.6995192307692,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.7980769230769231,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.02403846153846154,
            "na_confidence_pct": 0.1778846153846154,
            "avg_feature_coverage": 0.8471153846153843,
            "observable_run_pct": 1.0,
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
            "run_unclear_pct": 0.0,
            "avg_trade_size": 240.00000000000003,
            "avg_run_notional": null,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.0,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": null,
            "observable_run_pct": 1.0,
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
            "retail_pct": 0.2653276955602537,
            "mixed_pct": 0.1638477801268499,
            "instit_pct": 0.37103594080338265,
            "ambiguous_pct": 0.19978858350951373,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.19978858350951373,
            "retail_qty_pct": 0.06404051232409859,
            "mixed_qty_pct": 0.18797750382003056,
            "instit_qty_pct": 0.5031960255682045,
            "ambiguous_qty_pct": 0.2447859582876663,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2447859582876663,
            "retail_notional_pct": 0.06330950771352353,
            "mixed_notional_pct": 0.18917781819872645,
            "instit_notional_pct": 0.5050429291563048,
            "ambiguous_notional_pct": 0.24246974493144524,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.24246974493144524,
            "run_retail_pct": 0.5010482180293501,
            "run_mixed_pct": 0.1530398322851153,
            "run_instit_pct": 0.18448637316561844,
            "run_unclear_pct": 0.16142557651991615,
            "avg_trade_size": 3057.7320295983086,
            "avg_run_notional": 6064.181341719078,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.05660377358490566,
            "medium_confidence_pct": 0.31446540880503143,
            "low_confidence_pct": 0.31446540880503143,
            "na_confidence_pct": 0.31446540880503143,
            "avg_feature_coverage": 0.8588050314465407,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.16831683168316833,
            "mixed_pct": 0.039603960396039604,
            "instit_pct": 0.3564356435643564,
            "ambiguous_pct": 0.38613861386138615,
            "unobservable_pct": 0.04950495049504951,
            "unclear_pct": 0.43564356435643564,
            "retail_qty_pct": 0.05090168702734148,
            "mixed_qty_pct": 0.02326934264107039,
            "instit_qty_pct": 0.598022105875509,
            "ambiguous_qty_pct": 0.3010471204188482,
            "unobservable_qty_pct": 0.02675974403723095,
            "unclear_qty_pct": 0.32780686445607915,
            "retail_notional_pct": 0.050795270002865836,
            "mixed_notional_pct": 0.022585531612920835,
            "instit_notional_pct": 0.6018225364029641,
            "ambiguous_notional_pct": 0.29781684566780847,
            "unobservable_notional_pct": 0.02697981631344078,
            "unclear_notional_pct": 0.32479666198124924,
            "run_retail_pct": 0.265625,
            "run_mixed_pct": 0.046875,
            "run_instit_pct": 0.21875,
            "run_unclear_pct": 0.46875,
            "avg_trade_size": 2902.059405940594,
            "avg_run_notional": 4579.8125,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.484375,
            "na_confidence_pct": 0.515625,
            "avg_feature_coverage": 0.8257812499999999,
            "observable_run_pct": 0.96875,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "NXR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.038461538461538464,
            "mixed_pct": 0.07692307692307693,
            "instit_pct": 0.46153846153846156,
            "ambiguous_pct": 0.34615384615384615,
            "unobservable_pct": 0.07692307692307693,
            "unclear_pct": 0.4230769230769231,
            "retail_qty_pct": 0.0189086980010805,
            "mixed_qty_pct": 0.05402485143165856,
            "instit_qty_pct": 0.5780659103187467,
            "ambiguous_qty_pct": 0.29497568881685576,
            "unobservable_qty_pct": 0.05402485143165856,
            "unclear_qty_pct": 0.34900054024851435,
            "retail_notional_pct": 0.019197754681901397,
            "mixed_notional_pct": 0.054708258240075226,
            "instit_notional_pct": 0.5731616101894131,
            "ambiguous_notional_pct": 0.2959303609462819,
            "unobservable_notional_pct": 0.05700201594232838,
            "unclear_notional_pct": 0.3529323768886103,
            "run_retail_pct": 0.05555555555555555,
            "run_mixed_pct": 0.05555555555555555,
            "run_instit_pct": 0.3888888888888889,
            "run_unclear_pct": 0.5,
            "avg_trade_size": 2699.6346153846152,
            "avg_run_notional": 3899.472222222222,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Mixed, mostly unclassified",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.4444444444444444,
            "na_confidence_pct": 0.5555555555555556,
            "avg_feature_coverage": 0.8194444444444444,
            "observable_run_pct": 0.9444444444444444,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.32639865054821476,
            "mixed_pct": 0.18836097835254428,
            "instit_pct": 0.3086870958673039,
            "ambiguous_pct": 0.17374191734607816,
            "unobservable_pct": 0.0028113578858588698,
            "unclear_pct": 0.17655327523193703,
            "retail_qty_pct": 0.09454482679249626,
            "mixed_qty_pct": 0.14722637817930717,
            "instit_qty_pct": 0.5356772931292438,
            "ambiguous_qty_pct": 0.21740131200368282,
            "unobservable_qty_pct": 0.005150189895269881,
            "unclear_qty_pct": 0.2225515018989527,
            "retail_notional_pct": 0.0947950067855818,
            "mixed_notional_pct": 0.14694757239267603,
            "instit_notional_pct": 0.5347327801768821,
            "ambiguous_notional_pct": 0.21863242340753342,
            "unobservable_notional_pct": 0.00489221723732668,
            "unclear_notional_pct": 0.2235246406448601,
            "run_retail_pct": 0.6346483704974271,
            "run_mixed_pct": 0.15723270440251572,
            "run_instit_pct": 0.11034877072612921,
            "run_unclear_pct": 0.09777015437392796,
            "avg_trade_size": 2113.309389935339,
            "avg_run_notional": 4297.908233276158,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.3018867924528302,
            "medium_confidence_pct": 0.3270440251572327,
            "low_confidence_pct": 0.11606632361349342,
            "na_confidence_pct": 0.2550028587764437,
            "avg_feature_coverage": 0.8668381932532876,
            "observable_run_pct": 0.9994282447112636,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "9MT",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2760072158749248,
            "mixed_pct": 0.07276007215874924,
            "instit_pct": 0.3199037883343355,
            "ambiguous_pct": 0.31449188214070956,
            "unobservable_pct": 0.01683704149128082,
            "unclear_pct": 0.3313289236319904,
            "retail_qty_pct": 0.05515250799594352,
            "mixed_qty_pct": 0.05174610604051278,
            "instit_qty_pct": 0.5159268793717658,
            "ambiguous_qty_pct": 0.3535117143822971,
            "unobservable_qty_pct": 0.02366279220948072,
            "unclear_qty_pct": 0.3771745065917778,
            "retail_notional_pct": 0.05468162283676297,
            "mixed_notional_pct": 0.0522961789684076,
            "instit_notional_pct": 0.5224416044693302,
            "ambiguous_notional_pct": 0.3475438409276847,
            "unobservable_notional_pct": 0.02303675279781449,
            "unclear_notional_pct": 0.3705805937254992,
            "run_retail_pct": 0.47198275862068967,
            "run_mixed_pct": 0.0625,
            "run_instit_pct": 0.16379310344827586,
            "run_unclear_pct": 0.3017241379310345,
            "avg_trade_size": 2045.5039085989176,
            "avg_run_notional": 3665.595905172414,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0010775862068965517,
            "medium_confidence_pct": 0.3448275862068966,
            "low_confidence_pct": 0.28987068965517243,
            "na_confidence_pct": 0.3642241379310345,
            "avg_feature_coverage": 0.8350754310344826,
            "observable_run_pct": 0.9924568965517241,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "QS9",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.26346153846153847,
            "mixed_pct": 0.10576923076923077,
            "instit_pct": 0.32371794871794873,
            "ambiguous_pct": 0.30705128205128207,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.30705128205128207,
            "retail_qty_pct": 0.07622553829265033,
            "mixed_qty_pct": 0.07985444555359321,
            "instit_qty_pct": 0.45387647495456757,
            "ambiguous_qty_pct": 0.3900435411991889,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3900435411991889,
            "retail_notional_pct": 0.07643576861853744,
            "mixed_notional_pct": 0.08014149182820728,
            "instit_notional_pct": 0.45166126950683777,
            "ambiguous_notional_pct": 0.39176147004641754,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.39176147004641754,
            "run_retail_pct": 0.4768637532133676,
            "run_mixed_pct": 0.09640102827763496,
            "run_instit_pct": 0.14910025706940874,
            "run_unclear_pct": 0.2776349614395887,
            "avg_trade_size": 2619.631217948718,
            "avg_run_notional": 5252.730976863753,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.13110539845758354,
            "medium_confidence_pct": 0.3277634961439589,
            "low_confidence_pct": 0.16709511568123395,
            "na_confidence_pct": 0.3740359897172236,
            "avg_feature_coverage": 0.8380462724935731,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.6452442159383034,
            "mixed_pct": 0.13881748071979436,
            "instit_pct": 0.09254498714652956,
            "ambiguous_pct": 0.12339331619537275,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.12339331619537275,
            "retail_qty_pct": 0.07845652817526892,
            "mixed_qty_pct": 0.060890160860554626,
            "instit_qty_pct": 0.4124148820684891,
            "ambiguous_qty_pct": 0.4482384288956874,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.4482384288956874,
            "retail_notional_pct": 0.07846437387497075,
            "mixed_notional_pct": 0.06146658454251596,
            "instit_notional_pct": 0.4126786319644383,
            "ambiguous_notional_pct": 0.44739040961807497,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.44739040961807497,
            "run_retail_pct": 0.7209302325581395,
            "run_mixed_pct": 0.13372093023255813,
            "run_instit_pct": 0.0377906976744186,
            "run_unclear_pct": 0.10755813953488372,
            "avg_trade_size": 538.4035989717223,
            "avg_run_notional": 608.8343023255813,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.5726744186046512,
            "medium_confidence_pct": 0.13662790697674418,
            "low_confidence_pct": 0.04941860465116279,
            "na_confidence_pct": 0.24127906976744187,
            "avg_feature_coverage": 0.8469476744186045,
            "observable_run_pct": 1.0,
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
            "avg_trade_size": 300.0,
            "avg_run_notional": 300.0,
            "dominant_bucket": "UNOBSERVABLE",
            "dominant_label": "Not Observable",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.0,
            "na_confidence_pct": 1.0,
            "avg_feature_coverage": 0.55,
            "observable_run_pct": 0.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ],
        "30d": [
          {
            "ticker": "TKU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.2786206896551724,
            "mixed_pct": 0.16091954022988506,
            "instit_pct": 0.3852873563218391,
            "ambiguous_pct": 0.17517241379310344,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.17517241379310344,
            "retail_qty_pct": 0.06967722058217875,
            "mixed_qty_pct": 0.19469883457358345,
            "instit_qty_pct": 0.5006209110258079,
            "ambiguous_qty_pct": 0.2350030338184299,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2350030338184299,
            "retail_notional_pct": 0.06949617667856145,
            "mixed_notional_pct": 0.19539806942822843,
            "instit_notional_pct": 0.5012864119978293,
            "ambiguous_notional_pct": 0.23381934189538078,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.23381934189538078,
            "run_retail_pct": 0.5368324125230203,
            "run_mixed_pct": 0.1464088397790055,
            "run_instit_pct": 0.16206261510128914,
            "run_unclear_pct": 0.15469613259668508,
            "avg_trade_size": 3494.885057471264,
            "avg_run_notional": 6999.4244935543275,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.06906077348066299,
            "medium_confidence_pct": 0.3710865561694291,
            "low_confidence_pct": 0.2587476979742173,
            "na_confidence_pct": 0.3011049723756906,
            "avg_feature_coverage": 0.8519337016574585,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2073170731707317,
            "mixed_pct": 0.04065040650406504,
            "instit_pct": 0.3252032520325203,
            "ambiguous_pct": 0.3983739837398374,
            "unobservable_pct": 0.028455284552845527,
            "unclear_pct": 0.4268292682926829,
            "retail_qty_pct": 0.06311537490532694,
            "mixed_qty_pct": 0.015905074476142388,
            "instit_qty_pct": 0.5145165362282252,
            "ambiguous_qty_pct": 0.3934612471598081,
            "unobservable_qty_pct": 0.01300176723049735,
            "unclear_qty_pct": 0.40646301439030547,
            "retail_notional_pct": 0.06372122791312926,
            "mixed_notional_pct": 0.015524953388791644,
            "instit_notional_pct": 0.5135671400959022,
            "ambiguous_notional_pct": 0.39447122648771005,
            "unobservable_notional_pct": 0.012715452114466865,
            "unclear_notional_pct": 0.4071866786021769,
            "run_retail_pct": 0.3105590062111801,
            "run_mixed_pct": 0.043478260869565216,
            "run_instit_pct": 0.19254658385093168,
            "run_unclear_pct": 0.45341614906832295,
            "avg_trade_size": 2851.8211382113823,
            "avg_run_notional": 4357.4409937888195,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5031055900621118,
            "na_confidence_pct": 0.4968944099378882,
            "avg_feature_coverage": 0.819254658385093,
            "observable_run_pct": 0.9813664596273292,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "QS9",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.22609340252038548,
            "mixed_pct": 0.1003212255992093,
            "instit_pct": 0.3807758833703978,
            "ambiguous_pct": 0.29231529528045463,
            "unobservable_pct": 0.0004941932295527551,
            "unclear_pct": 0.2928094885100074,
            "retail_qty_pct": 0.06196749271935373,
            "mixed_qty_pct": 0.09504591065101826,
            "instit_qty_pct": 0.5001411292870654,
            "ambiguous_qty_pct": 0.3428442636812657,
            "unobservable_qty_pct": 1.2036612969330108e-06,
            "unclear_qty_pct": 0.3428454673425626,
            "retail_notional_pct": 0.06073264925624184,
            "mixed_notional_pct": 0.09454310313231748,
            "instit_notional_pct": 0.5020496875133982,
            "ambiguous_notional_pct": 0.3426732973095817,
            "unobservable_notional_pct": 1.2627884607885594e-06,
            "unclear_notional_pct": 0.3426745600980425,
            "run_retail_pct": 0.45418552036199095,
            "run_mixed_pct": 0.10463800904977376,
            "run_instit_pct": 0.16911764705882354,
            "run_unclear_pct": 0.27205882352941174,
            "avg_trade_size": 2445.9422782307884,
            "avg_run_notional": 5598.828280542985,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.05938914027149321,
            "medium_confidence_pct": 0.3161764705882353,
            "low_confidence_pct": 0.24773755656108598,
            "na_confidence_pct": 0.3766968325791855,
            "avg_feature_coverage": 0.8449943438914026,
            "observable_run_pct": 0.9994343891402715,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "9MT",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2684694730972958,
            "mixed_pct": 0.10036241984945637,
            "instit_pct": 0.3127962085308057,
            "ambiguous_pct": 0.3105659325341511,
            "unobservable_pct": 0.007805965988291051,
            "unclear_pct": 0.31837189852244213,
            "retail_qty_pct": 0.05506988215949575,
            "mixed_qty_pct": 0.07969306659358728,
            "instit_qty_pct": 0.4985612496574404,
            "ambiguous_qty_pct": 0.35420663195396,
            "unobservable_qty_pct": 0.012469169635516579,
            "unclear_qty_pct": 0.3666758015894766,
            "retail_notional_pct": 0.05499523145258097,
            "mixed_notional_pct": 0.08408545333716358,
            "instit_notional_pct": 0.4980559670799587,
            "ambiguous_notional_pct": 0.3523341831353313,
            "unobservable_notional_pct": 0.010529164994965413,
            "unclear_notional_pct": 0.36286334813029675,
            "run_retail_pct": 0.4929881337648328,
            "run_mixed_pct": 0.08737864077669903,
            "run_instit_pct": 0.14509169363538296,
            "run_unclear_pct": 0.2745415318230852,
            "avg_trade_size": 2074.858656258712,
            "avg_run_notional": 4014.3031283710893,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.010248112189859764,
            "medium_confidence_pct": 0.38349514563106796,
            "low_confidence_pct": 0.24433656957928804,
            "na_confidence_pct": 0.36192017259978426,
            "avg_feature_coverage": 0.8447141316073353,
            "observable_run_pct": 0.9962243797195254,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.28224165988608624,
            "mixed_pct": 0.15683482506102522,
            "instit_pct": 0.32363710333604556,
            "ambiguous_pct": 0.2362693246541904,
            "unobservable_pct": 0.0010170870626525631,
            "unclear_pct": 0.23728641171684295,
            "retail_qty_pct": 0.08496675113127425,
            "mixed_qty_pct": 0.12074955808465618,
            "instit_qty_pct": 0.48962188300926207,
            "ambiguous_qty_pct": 0.3036226899220081,
            "unobservable_qty_pct": 0.0010391178527993778,
            "unclear_qty_pct": 0.30466180777480745,
            "retail_notional_pct": 0.08532896729891551,
            "mixed_notional_pct": 0.12203756496757721,
            "instit_notional_pct": 0.4902205891106954,
            "ambiguous_notional_pct": 0.3013691999687308,
            "unobservable_notional_pct": 0.0010436786540810893,
            "unclear_notional_pct": 0.3024128786228119,
            "run_retail_pct": 0.5824461793233973,
            "run_mixed_pct": 0.14431038561627632,
            "run_instit_pct": 0.12278211497515969,
            "run_unclear_pct": 0.15046132008516677,
            "avg_trade_size": 3583.8020240032547,
            "avg_run_notional": 8335.921812159924,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.17459190915542938,
            "medium_confidence_pct": 0.3624319848592382,
            "low_confidence_pct": 0.16820440028388928,
            "na_confidence_pct": 0.2947717057014431,
            "avg_feature_coverage": 0.8664655784244144,
            "observable_run_pct": 0.9997634255973503,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.6080760095011877,
            "mixed_pct": 0.1377672209026128,
            "instit_pct": 0.10688836104513064,
            "ambiguous_pct": 0.14726840855106887,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.14726840855106887,
            "retail_qty_pct": 0.07280428354511308,
            "mixed_qty_pct": 0.057300407576120836,
            "instit_qty_pct": 0.39758651002956924,
            "ambiguous_qty_pct": 0.47230879884919685,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.47230879884919685,
            "retail_notional_pct": 0.07250999363997686,
            "mixed_notional_pct": 0.05750186694373194,
            "instit_notional_pct": 0.39683297586056077,
            "ambiguous_notional_pct": 0.4731551635557304,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.4731551635557304,
            "run_retail_pct": 0.6893732970027248,
            "run_mixed_pct": 0.1335149863760218,
            "run_instit_pct": 0.04632152588555858,
            "run_unclear_pct": 0.1307901907356948,
            "avg_trade_size": 621.832541567696,
            "avg_run_notional": 713.3283378746594,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.5367847411444142,
            "medium_confidence_pct": 0.12806539509536785,
            "low_confidence_pct": 0.07084468664850137,
            "na_confidence_pct": 0.26430517711171664,
            "avg_feature_coverage": 0.8438692098092642,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "NXR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.08695652173913043,
            "mixed_pct": 0.10869565217391304,
            "instit_pct": 0.43478260869565216,
            "ambiguous_pct": 0.30434782608695654,
            "unobservable_pct": 0.06521739130434782,
            "unclear_pct": 0.3695652173913044,
            "retail_qty_pct": 0.01654385204450224,
            "mixed_qty_pct": 0.01509897413668545,
            "instit_qty_pct": 0.1540962288686606,
            "ambiguous_qty_pct": 0.08459760150267302,
            "unobservable_qty_pct": 0.7296633434474787,
            "unclear_qty_pct": 0.8142609449501518,
            "retail_notional_pct": 0.016532200397705588,
            "mixed_notional_pct": 0.014908038553575934,
            "instit_notional_pct": 0.14989747649155535,
            "ambiguous_notional_pct": 0.08264096185360317,
            "unobservable_notional_pct": 0.7360213227035599,
            "unclear_notional_pct": 0.8186622845571631,
            "run_retail_pct": 0.12121212121212122,
            "run_mixed_pct": 0.12121212121212122,
            "run_instit_pct": 0.36363636363636365,
            "run_unclear_pct": 0.3939393939393939,
            "avg_trade_size": 11932.576086956522,
            "avg_run_notional": 16633.28787878788,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed, leaning institution-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.48484848484848486,
            "na_confidence_pct": 0.5151515151515151,
            "avg_feature_coverage": 0.8015151515151516,
            "observable_run_pct": 0.9393939393939394,
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
            "instit_qty_pct": 0.09090909090909091,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.9090909090909091,
            "unclear_qty_pct": 0.9090909090909091,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.09090909090909091,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.9090909090909091,
            "unclear_notional_pct": 0.9090909090909091,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.3333333333333333,
            "run_unclear_pct": 0.6666666666666666,
            "avg_trade_size": 220.0,
            "avg_run_notional": 220.0,
            "dominant_bucket": "UNOBSERVABLE",
            "dominant_label": "Not Observable",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.3333333333333333,
            "na_confidence_pct": 0.6666666666666666,
            "avg_feature_coverage": 0.6,
            "observable_run_pct": 0.33333333333333337,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "KUX",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.5,
            "mixed_pct": 0.5,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0,
            "retail_qty_pct": 0.16666666666666666,
            "mixed_qty_pct": 0.8333333333333334,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0,
            "retail_notional_pct": 0.20895522388059704,
            "mixed_notional_pct": 0.7910447761194029,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0,
            "run_retail_pct": 0.5,
            "run_mixed_pct": 0.5,
            "run_instit_pct": 0.0,
            "run_unclear_pct": 0.0,
            "avg_trade_size": 16.75,
            "avg_run_notional": 16.75,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5,
            "na_confidence_pct": 0.5,
            "avg_feature_coverage": 0.8500000000000001,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ]
      },
      "recent_trades": [
        {
          "trade_id": "BMLL-35",
          "timestamp": "2026-03-13T08:57:47.074400",
          "price": 0.245,
          "size": 31000.0,
          "notional": 7595.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 3708,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-34",
          "timestamp": "2026-03-13T08:57:47.074400",
          "price": 0.245,
          "size": 19000.0,
          "notional": 4655.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 3708,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-33",
          "timestamp": "2026-03-13T08:07:46.156400",
          "price": 0.24,
          "size": 20000.0,
          "notional": 4800.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 3707,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-32",
          "timestamp": "2026-03-13T07:32:35.114700",
          "price": 0.245,
          "size": 7000.0,
          "notional": 1715.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 3706,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-31",
          "timestamp": "2026-03-13T07:32:35.114600",
          "price": 0.245,
          "size": 40000.0,
          "notional": 9800.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 3706,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-30",
          "timestamp": "2026-03-13T07:32:35.114600",
          "price": 0.245,
          "size": 60000.0,
          "notional": 14700.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 3706,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-29",
          "timestamp": "2026-03-13T07:32:35.114600",
          "price": 0.245,
          "size": 50000.0,
          "notional": 12250.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 3706,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-28",
          "timestamp": "2026-03-13T05:34:01.271300",
          "price": 0.25,
          "size": 8200.0,
          "notional": 2050.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 3705,
          "d1": "SINGLE_FILL",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-27",
          "timestamp": "2026-03-13T05:34:01.241200",
          "price": 0.25,
          "size": 8500.0,
          "notional": 2125.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 3705,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-26",
          "timestamp": "2026-03-13T05:34:01.241200",
          "price": 0.25,
          "size": 11500.0,
          "notional": 2875.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 3705,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-25",
          "timestamp": "2026-03-13T05:18:07.529900",
          "price": 0.25,
          "size": 100.0,
          "notional": 25.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 3704,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-24",
          "timestamp": "2026-03-13T05:18:07.529900",
          "price": 0.25,
          "size": 8400.0,
          "notional": 2100.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 3704,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-23",
          "timestamp": "2026-03-13T05:18:07.529900",
          "price": 0.25,
          "size": 10000.0,
          "notional": 2500.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 3704,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-22",
          "timestamp": "2026-03-13T05:18:07.529900",
          "price": 0.25,
          "size": 5000.0,
          "notional": 1250.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 3704,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-21",
          "timestamp": "2026-03-13T05:18:07.499800",
          "price": 0.25,
          "size": 26600.0,
          "notional": 6650.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 3704,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-20",
          "timestamp": "2026-03-13T05:00:10.765300",
          "price": 0.25,
          "size": 1400.0,
          "notional": 350.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 3703,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-17",
          "timestamp": "2026-03-13T03:38:02.443100",
          "price": 0.25,
          "size": 43400.0,
          "notional": 10850.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 3702,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-16",
          "timestamp": "2026-03-13T03:38:02.443100",
          "price": 0.25,
          "size": 31600.0,
          "notional": 7900.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 3702,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-15",
          "timestamp": "2026-03-13T03:23:49.311900",
          "price": 0.245,
          "size": 30000.0,
          "notional": 7350.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 3701,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "MOMENTUM_REACTIVE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-14",
          "timestamp": "2026-03-13T03:23:49.311900",
          "price": 0.245,
          "size": 40000.0,
          "notional": 9800.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 3701,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "MOMENTUM_REACTIVE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-13",
          "timestamp": "2026-03-13T03:23:49.311900",
          "price": 0.245,
          "size": 155000.0,
          "notional": 37975.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 3701,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "MOMENTUM_REACTIVE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-12",
          "timestamp": "2026-03-13T02:04:56.634800",
          "price": 0.245,
          "size": 4000.0,
          "notional": 980.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 3700,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-11",
          "timestamp": "2026-03-13T01:59:31.443800",
          "price": 0.24,
          "size": 3200.0,
          "notional": 768.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 3699,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-10",
          "timestamp": "2026-03-13T01:57:51.752900",
          "price": 0.245,
          "size": 80000.0,
          "notional": 19600.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 3698,
          "d1": "SINGLE_FILL",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-9",
          "timestamp": "2026-03-13T01:41:17.107200",
          "price": 0.245,
          "size": 2000.0,
          "notional": 490.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 3697,
          "d1": "SINGLE_FILL",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-8",
          "timestamp": "2026-03-13T01:38:46.929400",
          "price": 0.245,
          "size": 25000.0,
          "notional": 6125.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 3696,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-7",
          "timestamp": "2026-03-13T01:38:46.929400",
          "price": 0.245,
          "size": 53000.0,
          "notional": 12985.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 3696,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-6",
          "timestamp": "2026-03-13T01:38:36.451500",
          "price": 0.245,
          "size": 8000.0,
          "notional": 1960.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 3695,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-5",
          "timestamp": "2026-03-13T01:38:36.451500",
          "price": 0.245,
          "size": 7000.0,
          "notional": 1715.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 3695,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-4",
          "timestamp": "2026-03-13T01:28:39.500600",
          "price": 0.245,
          "size": 2000.0,
          "notional": 490.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 3694,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
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
      "total_trades": 2174,
      "price_moving_trades": 345,
      "pct_price_moving": 15.869365225390986,
      "all_movers": {
        "count": 345,
        "avg_size": 2897.3391304347824,
        "median_size": 235.0,
        "retail_count": 208,
        "mixed_count": 48,
        "institutional_count": 52,
        "ambiguous_count": 37,
        "unobservable_count": 0,
        "retail_pct": 60.28985507246377,
        "mixed_pct": 13.91304347826087,
        "instit_pct": 15.072463768115943,
        "unclear_pct": 10.72463768115942
      },
      "positive_movers": {
        "count": 178,
        "avg_size": 1205.6320224719102,
        "median_size": 25.5,
        "retail_count": 136,
        "mixed_count": 21,
        "institutional_count": 15,
        "ambiguous_count": 6,
        "unobservable_count": 0,
        "retail_pct": 76.40449438202246,
        "mixed_pct": 11.797752808988763,
        "instit_pct": 8.426966292134832,
        "unclear_pct": 3.3707865168539324
      },
      "negative_movers": {
        "count": 167,
        "avg_size": 4700.476047904192,
        "median_size": 2200.0,
        "retail_count": 72,
        "mixed_count": 27,
        "institutional_count": 37,
        "ambiguous_count": 31,
        "unobservable_count": 0,
        "retail_pct": 43.11377245508982,
        "mixed_pct": 16.16766467065868,
        "instit_pct": 22.15568862275449,
        "unclear_pct": 18.562874251497004
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
        "n_days_short_data": 23,
        "window_days": 21
      },
      "periods": {
        "1W": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.00028751123090745733,
            "max_short_ratio": 0.002012578616352201,
            "interpretation": "Low short interest"
          }
        },
        "2W": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.000872755928156761,
            "max_short_ratio": 0.008460492521528931,
            "interpretation": "Low short interest"
          }
        },
        "1M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.007213767988772777,
            "max_short_ratio": 0.0924792304328815,
            "interpretation": "Low short interest"
          }
        }
      },
      "correlation": {
        "valid": true,
        "correlation": -0.20531643273392206,
        "interpretation": "Moderate negative - shorts somewhat predict drops"
      },
      "peaks": [],
      "short_interest_change": {
        "valid": true,
        "monthly_data": [
          {
            "month": "2026-03",
            "avg_short_ratio": 0.0010473071137881132
          },
          {
            "month": "2026-02",
            "avg_short_ratio": 0.014753167520636205
          },
          {
            "month": "2026-01",
            "avg_short_ratio": 0.009069182023479604
          }
        ],
        "mom_change": [
          {
            "month": "2026-03",
            "avg_short_ratio": 0.0010473071137881132,
            "change_pct": null
          },
          {
            "month": "2026-02",
            "avg_short_ratio": 0.014753167520636205,
            "change_pct": 1308.6763401495432
          },
          {
            "month": "2026-01",
            "avg_short_ratio": 0.009069182023479604,
            "change_pct": -38.527221284554955
          }
        ],
        "interpretation": "Shorts covering significantly (-93% MoM)"
      },
      "short_series": {
        "valid": true,
        "rows": [
          {
            "date": "2026-03-13",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 913900,
            "close": 0.25,
            "return": 0.0
          },
          {
            "date": "2026-03-12",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2461200,
            "close": 0.25,
            "return": 0.06382978723404253
          },
          {
            "date": "2026-03-11",
            "short_ratio": 0.002012578616352201,
            "short_vol": 1600,
            "total_vol": 795000,
            "close": 0.235,
            "return": 0.06818181818181812
          },
          {
            "date": "2026-03-10",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 732800,
            "close": 0.22,
            "return": 0.023255813953488413
          },
          {
            "date": "2026-03-09",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1332500,
            "close": 0.215,
            "return": -0.022727272727272707
          },
          {
            "date": "2026-03-06",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 682900,
            "close": 0.22,
            "return": 0.0
          },
          {
            "date": "2026-03-05",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 791200,
            "close": 0.22,
            "return": 0.0
          },
          {
            "date": "2026-03-04",
            "short_ratio": 0.008460492521528931,
            "short_vol": 16800,
            "total_vol": 1985700,
            "close": 0.22,
            "return": -0.0434782608695653
          },
          {
            "date": "2026-03-03",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1124800,
            "close": 0.23,
            "return": -0.04166666666666663
          },
          {
            "date": "2026-03-02",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1989800,
            "close": 0.24,
            "return": -0.07692307692307698
          },
          {
            "date": "2026-02-27",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1797700,
            "close": 0.26,
            "return": 0.040000000000000036
          },
          {
            "date": "2026-02-26",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1722300,
            "close": 0.25,
            "return": 0.0
          },
          {
            "date": "2026-02-25",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1623700,
            "close": 0.25,
            "return": -0.019607843137254943
          },
          {
            "date": "2026-02-24",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1450400,
            "close": 0.255,
            "return": -0.019230769230769273
          },
          {
            "date": "2026-02-23",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 3005400,
            "close": 0.26,
            "return": 0.061224489795918435
          },
          {
            "date": "2026-02-20",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 655800,
            "close": 0.245,
            "return": 0.0
          },
          {
            "date": "2026-02-19",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2119900,
            "close": 0.245,
            "return": -0.020000000000000018
          },
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
            "short_ratio": 0.0629643621710112,
            "short_vol": 100000,
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
            "short_ratio": 0.0924792304328815,
            "short_vol": 380700,
            "total_vol": 4116600,
            "close": 0.22,
            "return": null
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "TKU",
          "avg_short_ratio": 0.000872755928156761,
          "max_short_ratio": 0.008460492521528931,
          "is_target": true
        },
        {
          "ticker": "NXR",
          "avg_short_ratio": 8.65901786755033e-05,
          "max_short_ratio": 0.03229813664596273,
          "is_target": false
        },
        {
          "ticker": "QS9",
          "avg_short_ratio": 0.0004945944075723653,
          "max_short_ratio": 0.036503810997868175,
          "is_target": false
        },
        {
          "ticker": "ITS",
          "avg_short_ratio": 0.003397452083960592,
          "max_short_ratio": 0.1385606874328679,
          "is_target": false
        },
        {
          "ticker": "U77",
          "avg_short_ratio": 0.0035167804224893948,
          "max_short_ratio": 1.0,
          "is_target": false
        },
        {
          "ticker": "9MT",
          "avg_short_ratio": 0.012448627966694546,
          "max_short_ratio": 0.14153787262548448,
          "is_target": false
        }
      ]
    },
    "intraday": {
      "session_periods": [
        "1D",
        "1W",
        "2W",
        "1M"
      ],
      "session": {
        "1D": {
          "opening": 0.0009746212582212024,
          "continuous": 0.9715544170132262,
          "closing": 0.01971604384905145,
          "auctions": 0.028445582986773844,
          "other": 0.0
        },
        "1W": {
          "opening": 0.00714488873059739,
          "continuous": 0.9716836543155569,
          "closing": 0.014451666494078072,
          "auctions": 0.028316345684443106,
          "other": 0.0
        },
        "2W": {
          "opening": 0.008414718490112596,
          "continuous": 0.9769016897186876,
          "closing": 0.007678667034390132,
          "auctions": 0.02309831028131234,
          "other": 0.0
        },
        "1M": {
          "opening": 0.012573546249187353,
          "continuous": 0.9638711766083842,
          "closing": 0.017764488815074315,
          "auctions": 0.03612882339161585,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.16957797660327592,
        "1W": 0.18233265983810384,
        "2W": 0.1940924483600629,
        "1M": 0.21063447168251712
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.0137
        },
        {
          "time": "09:00",
          "avg_share": 0.0938
        },
        {
          "time": "09:30",
          "avg_share": 0.0941
        },
        {
          "time": "10:00",
          "avg_share": 0.0483
        },
        {
          "time": "10:30",
          "avg_share": 0.0589
        },
        {
          "time": "11:00",
          "avg_share": 0.0294
        },
        {
          "time": "11:30",
          "avg_share": 0.0521
        },
        {
          "time": "12:00",
          "avg_share": 0.0023
        },
        {
          "time": "12:30",
          "avg_share": 0.0439
        },
        {
          "time": "13:00",
          "avg_share": 0.0605
        },
        {
          "time": "13:30",
          "avg_share": 0.0497
        },
        {
          "time": "14:00",
          "avg_share": 0.0555
        },
        {
          "time": "14:30",
          "avg_share": 0.0652
        },
        {
          "time": "15:00",
          "avg_share": 0.065
        },
        {
          "time": "15:30",
          "avg_share": 0.1166
        },
        {
          "time": "16:00",
          "avg_share": 0.0525
        },
        {
          "time": "16:30",
          "avg_share": 0.0725
        },
        {
          "time": "17:00",
          "avg_share": 0.0259
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "TKU",
          "auctions_pct": 7.031031478170298,
          "hhi": 0.18984395556177844,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400",
            "you": true
          }
        },
        {
          "ticker": "ITS",
          "auctions_pct": 5.740952196868145,
          "hhi": 0.24614084929019242,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "LVR",
          "auctions_pct": 2.6235387162747257,
          "hhi": 0.348367942045685,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "NXR",
          "auctions_pct": 2.506359325400034,
          "hhi": 0.6537963941408717,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "U77",
          "auctions_pct": 8.31320633496917,
          "hhi": 0.5065678344433309,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "532",
          "auctions_pct": 7.8002262430566764,
          "hhi": 0.7818623143334301,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "KUX",
          "auctions_pct": 2.79465970455815,
          "hhi": 0.8104933195309614,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "9MT",
          "auctions_pct": 4.744536809595893,
          "hhi": 0.1721765934306247,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "QS9",
          "auctions_pct": 5.935534869626893,
          "hhi": 0.45276712301568994,
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
