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
      "ticker": "1328",
      "name": "GOLDSTREAM INV",
      "marketCap": 1235327170.0800002,
      "sector": "Other Support Services",
      "industry": "Consumer Discretionary - Support Services"
    },
    {
      "ticker": "1483",
      "name": "NET-A-GO TECH",
      "marketCap": 1073479500.0,
      "sector": "Other Support Services",
      "industry": "Consumer Discretionary - Support Services"
    },
    {
      "ticker": "2443",
      "name": "AUTOSTREETS",
      "marketCap": 1373893006.1999998,
      "sector": "Other Support Services",
      "industry": "Consumer Discretionary - Support Services"
    },
    {
      "ticker": "6100",
      "name": "TONGDAO LIEPIN",
      "marketCap": 1242066728.04,
      "sector": "Other Support Services",
      "industry": "Consumer Discretionary - Support Services"
    },
    {
      "ticker": "331",
      "name": "FSE LIFESTYLE",
      "marketCap": 2452500000.0,
      "sector": "Other Support Services",
      "industry": "Consumer Discretionary - Support Services"
    },
    {
      "ticker": "2521",
      "name": "SHENGHUI CLEAN",
      "marketCap": 2203200550.0,
      "sector": "Other Support Services",
      "industry": "Consumer Discretionary - Support Services"
    },
    {
      "ticker": "6959",
      "name": "CHANGJIU HLDGS",
      "marketCap": 707560000.0,
      "sector": "Other Support Services",
      "industry": "Consumer Discretionary - Support Services"
    },
    {
      "ticker": "2508",
      "name": "SAINT BELLA GP",
      "marketCap": 2476342070.0,
      "sector": "Other Support Services",
      "industry": "Consumer Discretionary - Support Services"
    },
    {
      "ticker": "1463",
      "name": "C-LINK SQ",
      "marketCap": 862275449.1,
      "sector": "Other Support Services",
      "industry": "Consumer Discretionary - Support Services"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XHKG",
    "currency": "HKD",
    "ticker": "1328",
    "company": "GOLDSTREAM INV",
    "asof_date": "2026-05-22",
    "industry": "Consumer Discretionary - Support Services",
    "sector": "Other Support Services",
    "market_cap_display": "1.2B",
    "market_cap_category": "mid",
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
          "score_pca": 55.348113574484636,
          "score_pca_percentile": 55.348113574484636,
          "rank_pca": 1149,
          "total": 2571,
          "adv_notional_sgd": 428980.0,
          "adv_volume_shares": 89000.0,
          "free_float_shares": 54805787.0,
          "turnover_ratio": 0.0016239161021444689,
          "votes": 39.0,
          "trades": 39.0,
          "spread_pct": 0.01384444414690644,
          "spread_ticks": 6.628205128205129,
          "amihud": 9.712962531276222e-09,
          "volatility": 0.15956211060822095
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5406950924849878,
          "loadings": {
            "log_adv": 0.5407106927256478,
            "log_trades": 0.5025330997168653,
            "log_turnover": 0.4998195368949817,
            "neg_spread": 0.4078469085248736,
            "neg_amihud": 0.042099515265869664,
            "neg_vol": -0.19277290011896897
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
          "peer_median_adv": 547900.0,
          "peer_median_score_pca": 54.84247374562427,
          "peer_median_trades": 37.5,
          "peer_median_volatility": 0.359712770087252,
          "peer_median_spread_pct": 0.02101757686422743,
          "peer_median_spread_ticks": 3.568798798798799,
          "peer_median_amihud": 1.6856656106146992e-08,
          "peer_median_turnover_ratio": 0.0006590592979998633,
          "target_vs_peer": {
            "score_pca_delta": 0.51,
            "adv_delta_pct": -21.7,
            "trades_delta_pct": 4.0,
            "volatility_delta_pct": 55.64,
            "spread_pct_delta_pct": 34.13,
            "spread_ticks_delta_pct": 85.73,
            "amihud_delta_pct": 42.38,
            "turnover_ratio_delta_pct": 146.4
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1328",
            "score_pca": 55.348113574484636,
            "rank_pca": 1149,
            "adv": 428980.0,
            "trades": 39.0,
            "volatility": 0.15956211060822095,
            "spread_pct": 0.01384444414690644,
            "spread_ticks": 6.628205128205129,
            "amihud": 9.712962531276222e-09,
            "turnover_ratio": 0.0016239161021444689,
            "is_target": true
          },
          {
            "ticker": "1483",
            "score_pca": 42.35705950991832,
            "rank_pca": 1483,
            "adv": 272480.0,
            "trades": 7.0,
            "volatility": 0.2956396136127273,
            "spread_pct": 0.02660814703058568,
            "spread_ticks": 3.4642857142857144,
            "amihud": 0.0,
            "turnover_ratio": 0.0004818540260293838,
            "is_target": false
          },
          {
            "ticker": "2443",
            "score_pca": 59.00427849085958,
            "rank_pca": 1055,
            "adv": 341880.0,
            "trades": 121.0,
            "volatility": 0.6772276100715764,
            "spread_pct": 0.022707617252467022,
            "spread_ticks": 3.764705882352941,
            "amihud": 8.60294977942037e-08,
            "turnover_ratio": 0.0003871721727071617,
            "is_target": false
          },
          {
            "ticker": "6100",
            "score_pca": 64.41073512252042,
            "rank_pca": 916,
            "adv": 1002696.0,
            "trades": 228.0,
            "volatility": 0.19260480449945006,
            "spread_pct": 0.009735849328543489,
            "spread_ticks": 2.4168157423971377,
            "amihud": 1.5956979981968626e-08,
            "turnover_ratio": 0.0015017996135511461,
            "is_target": false
          },
          {
            "ticker": "331",
            "score_pca": 52.31427460132244,
            "rank_pca": 1227,
            "adv": 752100.0,
            "trades": 24.0,
            "volatility": 0.12167037508517366,
            "spread_pct": 0.006472965312951367,
            "spread_ticks": 3.54,
            "amihud": 2.435183927006814e-09,
            "turnover_ratio": 0.0003066666666666667,
            "is_target": false
          },
          {
            "ticker": "2521",
            "score_pca": 57.3706728899261,
            "rank_pca": 1097,
            "adv": 822074.9999999999,
            "trades": 51.0,
            "volatility": 0.42378592656177666,
            "spread_pct": 0.019327536475987835,
            "spread_ticks": 2.1857142857142855,
            "amihud": 1.0670473891751278e-08,
            "turnover_ratio": 0.0008362645699703428,
            "is_target": false
          },
          {
            "ticker": "6959",
            "score_pca": 34.18903150525088,
            "rank_pca": 1693,
            "adv": 343700.0,
            "trades": 7.0,
            "volatility": 0.4989657392459537,
            "spread_pct": 0.09412002833721284,
            "spread_ticks": 31.0,
            "amihud": 8.55739444453956e-08,
            "turnover_ratio": 0.0015797940797940798,
            "is_target": false
          },
          {
            "ticker": "2508",
            "score_pca": 69.42823803967327,
            "rank_pca": 787,
            "adv": 2053258.1199999999,
            "trades": 252.0,
            "volatility": 0.6760836507999493,
            "spread_pct": 0.00909736381481775,
            "spread_ticks": 3.5975975975975976,
            "amihud": 1.775633223032536e-08,
            "turnover_ratio": 0.002415742451419435,
            "is_target": false
          },
          {
            "ticker": "1463",
            "score_pca": 12.679891092959938,
            "rank_pca": 2246,
            "adv": 600.0,
            "trades": 1.0,
            "volatility": 0.0,
            "spread_pct": 0.1593703885882931,
            "spread_ticks": 9.529411764705882,
            "amihud": 0.00010416666666666667,
            "turnover_ratio": 1.6631574045430808e-06,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Other Support Services",
          "sector_count": 42,
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
              "mean": 75462401.02496581,
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
              "mean": 1.0478534045941613e-05,
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
              "mean": 0.5766994088063346,
              "median": 0.359712770087252,
              "min": 0.0,
              "max": 2.8457168042734966,
              "p5": 0.0,
              "p95": 1.9178816622633665,
              "count": 42
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 338012.73933333333,
              "median": 76980.0,
              "min": 0.0,
              "max": 2377455.0,
              "p5": 0.0,
              "p95": 2025551.6139999975,
              "count": 42
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.06563991733903868,
              "median": 0.05289193915334646,
              "min": 0.004497213021541232,
              "max": 0.21432882145012505,
              "p5": 0.00742332674675061,
              "p95": 0.15866516358170588,
              "count": 42
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0014226686787332254,
              "median": 0.0005202920923797713,
              "min": 0.0,
              "max": 0.019434246111691932,
              "p5": 0.0,
              "p95": 0.00413272998009762,
              "count": 42
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.6858789809301094e-05,
              "median": 1.4294300667921262e-07,
              "min": 0.0,
              "max": 0.0003232758620689659,
              "p5": 0.0,
              "p95": 9.142394822006465e-05,
              "count": 35
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 36.57142857142857,
              "median": 9.0,
              "min": 0.0,
              "max": 321.0,
              "p5": 0.0,
              "p95": 223.09999999999957,
              "count": 42
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 698598.64,
              "median": 547900.0,
              "min": 600.0,
              "max": 2053258.1199999999,
              "p5": 95758.00000000001,
              "p95": 1685561.3779999993,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 86.375,
              "median": 37.5,
              "min": 1.0,
              "max": 252.0,
              "p5": 3.1,
              "p95": 243.6,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.36074721498457585,
              "median": 0.359712770087252,
              "min": 0.0,
              "max": 0.6772276100715764,
              "p5": 0.04258463127981078,
              "p95": 0.6768272243265069,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.043429987017607384,
              "median": 0.02101757686422743,
              "min": 0.006472965312951367,
              "max": 0.1593703885882931,
              "p5": 0.007391504788604601,
              "p95": 0.136532762500415,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 7.4373163733816945,
              "median": 3.568798798798799,
              "min": 2.1857142857142855,
              "max": 31.0,
              "p5": 2.266599795553284,
              "p95": 23.485294117647047,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.3048136134867166e-05,
              "median": 1.6856656106146992e-08,
              "min": 0.0,
              "max": 0.00010416666666666667,
              "p5": 8.52314374452385e-10,
              "p95": 6.773844365756126e-05,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0009388695921928448,
              "median": 0.0006590592979998633,
              "min": 1.6631574045430808e-06,
              "max": 0.002415742451419435,
              "p5": 0.00010841438564628636,
              "p95": 0.00212316052135056,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.004166666666666874,
            "market": 0.006898577571811337,
            "sector": 0.0,
            "peers": -0.005301715828031628,
            "vs_market": -0.0027319109051444634,
            "vs_sector": 0.004166666666666874,
            "vs_peers": 0.009468382494698502
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 61.45468689225982,
          "score_pca_percentile": 61.45468689225982,
          "rank_pca": 992,
          "total": 2571,
          "adv_notional_sgd": 656310.0,
          "adv_volume_shares": 148000.0,
          "free_float_shares": 54805787.0,
          "turnover_ratio": 0.0027004447541278806,
          "votes": 59.0,
          "trades": 59.0,
          "spread_pct": 0.019457913842225193,
          "spread_ticks": 10.193236714975846,
          "amihud": 4.9972130926983415e-08,
          "volatility": 1.548130934697812
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5686845538813642,
          "loadings": {
            "log_adv": 0.5240483790406769,
            "log_trades": 0.48042268177500247,
            "log_turnover": 0.47418267792935365,
            "neg_spread": 0.4523769029779198,
            "neg_amihud": 0.2505862265091264,
            "neg_vol": 0.047747376354337956
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
          "peer_median_adv": 787050.0,
          "peer_median_score_pca": 60.11279657720732,
          "peer_median_trades": 40.5,
          "peer_median_volatility": 0.4317692493085582,
          "peer_median_spread_pct": 0.016479195360711883,
          "peer_median_spread_ticks": 3.044614698380389,
          "peer_median_amihud": 1.2531777621927004e-08,
          "peer_median_turnover_ratio": 0.001051360230314074,
          "target_vs_peer": {
            "score_pca_delta": 1.34,
            "adv_delta_pct": -16.6,
            "trades_delta_pct": 45.68,
            "volatility_delta_pct": -258.56,
            "spread_pct_delta_pct": -18.08,
            "spread_ticks_delta_pct": 234.8,
            "amihud_delta_pct": -298.76,
            "turnover_ratio_delta_pct": 156.85
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1328",
            "score_pca": 61.45468689225982,
            "rank_pca": 992,
            "adv": 656310.0,
            "trades": 59.0,
            "volatility": 1.548130934697812,
            "spread_pct": 0.019457913842225193,
            "spread_ticks": 10.193236714975846,
            "amihud": 4.9972130926983415e-08,
            "turnover_ratio": 0.0027004447541278806,
            "is_target": true
          },
          {
            "ticker": "1483",
            "score_pca": 49.941656942823805,
            "rank_pca": 1288,
            "adv": 567500.0,
            "trades": 17.0,
            "volatility": 0.46965825737858824,
            "spread_pct": 0.04147250698974841,
            "spread_ticks": 5.235294117647059,
            "amihud": 3.4809245335561174e-08,
            "turnover_ratio": 0.0009961405345799762,
            "is_target": false
          },
          {
            "ticker": "2443",
            "score_pca": 65.11085180863478,
            "rank_pca": 898,
            "adv": 1006600.0,
            "trades": 121.0,
            "volatility": 0.29435131687411065,
            "spread_pct": 0.013060732405686434,
            "spread_ticks": 2.49163179916318,
            "amihud": 1.401681569345107e-08,
            "turnover_ratio": 0.0011065799260481716,
            "is_target": false
          },
          {
            "ticker": "6100",
            "score_pca": 69.03928432516531,
            "rank_pca": 797,
            "adv": 1048000.0,
            "trades": 284.0,
            "volatility": 0.286406627885884,
            "spread_pct": 0.00776644918185727,
            "spread_ticks": 1.9162929745889388,
            "amihud": 1.1046739550402936e-08,
            "turnover_ratio": 0.00154453973994269,
            "is_target": false
          },
          {
            "ticker": "331",
            "score_pca": 55.73706728899261,
            "rank_pca": 1139,
            "adv": 546518.84,
            "trades": 18.0,
            "volatility": 0.06783367659250693,
            "spread_pct": 0.003937426838352712,
            "spread_ticks": 2.176470588235294,
            "amihud": 3.6132879966862332e-09,
            "turnover_ratio": 0.00021961777777777778,
            "is_target": false
          },
          {
            "ticker": "2521",
            "score_pca": 64.48852586542202,
            "rank_pca": 914,
            "adv": 2371875.0,
            "trades": 63.0,
            "volatility": 0.39586472637437287,
            "spread_pct": 0.01989765831573733,
            "spread_ticks": 2.192622950819672,
            "amihud": 5.71368169650641e-09,
            "turnover_ratio": 0.0022932616042485687,
            "is_target": false
          },
          {
            "ticker": "6959",
            "score_pca": 26.837806301050176,
            "rank_pca": 1882,
            "adv": 22040.0,
            "trades": 3.0,
            "volatility": 0.5990309838223243,
            "spread_pct": 0.048491822141859174,
            "spread_ticks": 19.032258064516128,
            "amihud": 1.606374092398662e-07,
            "turnover_ratio": 9.33075933075933e-05,
            "is_target": false
          },
          {
            "ticker": "2508",
            "score_pca": 73.16219369894984,
            "rank_pca": 691,
            "adv": 3577348.4999999995,
            "trades": 427.0,
            "volatility": 0.4676737722427436,
            "spread_pct": 0.00909736381481775,
            "spread_ticks": 3.5975975975975976,
            "amihud": 2.7787114248165213e-09,
            "turnover_ratio": 0.00400751469000616,
            "is_target": false
          },
          {
            "ticker": "1463",
            "score_pca": 8.323609490470634,
            "rank_pca": 2358,
            "adv": 530.0,
            "trades": 1.0,
            "volatility": 1.4594944309566489,
            "spread_pct": 0.199421965317919,
            "spread_ticks": 11.5,
            "amihud": 7.541478129713441e-06,
            "turnover_ratio": 1.6631574045430808e-06,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Other Support Services",
          "sector_count": 42,
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
              "mean": 62902663.762150005,
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
              "mean": 9.231952308534669e-07,
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
              "mean": 0.780348017469834,
              "median": 0.5991964478095828,
              "min": 0.06783367659250693,
              "max": 2.134711618957314,
              "p5": 0.16934972608786855,
              "p95": 1.9567296435422088,
              "count": 42
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 423273.8233333333,
              "median": 43313.0,
              "min": 0.0,
              "max": 3577348.4999999995,
              "p5": 0.0,
              "p95": 2633129.7499999986,
              "count": 42
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.06452640035535913,
              "median": 0.047818759693479984,
              "min": 0.003937426838352712,
              "max": 0.2119205298013244,
              "p5": 0.007832994913505293,
              "p95": 0.182766081333701,
              "count": 42
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0014672549464941572,
              "median": 0.00032714045214418664,
              "min": 0.0,
              "max": 0.02344367664984651,
              "p5": 0.0,
              "p95": 0.003942161193212241,
              "count": 42
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.5181690296795373e-06,
              "median": 3.195009263993549e-07,
              "min": 2.7787114248165213e-09,
              "max": 5.952827189962694e-05,
              "p5": 3.7183076816772424e-09,
              "p95": 7.527557630335078e-06,
              "count": 42
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 40.88095238095238,
              "median": 6.5,
              "min": 0.0,
              "max": 427.0,
              "p5": 0.0,
              "p95": 278.2999999999995,
              "count": 42
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 1142551.5425,
              "median": 787050.0,
              "min": 530.0,
              "max": 3577348.4999999995,
              "p5": 8058.500000000001,
              "p95": 3155432.774999999,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 116.75,
              "median": 40.5,
              "min": 1.0,
              "max": 427.0,
              "p5": 1.7000000000000002,
              "p95": 376.94999999999993,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5050392240158974,
              "median": 0.4317692493085582,
              "min": 0.06783367659250693,
              "max": 1.4594944309566489,
              "p5": 0.1443342095451889,
              "p95": 1.1583322244596348,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04289324062574726,
              "median": 0.016479195360711883,
              "min": 0.003937426838352712,
              "max": 0.199421965317919,
              "p5": 0.0052775846585793075,
              "p95": 0.146596415206298,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 6.017771011570984,
              "median": 3.044614698380389,
              "min": 1.9162929745889388,
              "max": 19.032258064516128,
              "p5": 2.007355139365163,
              "p95": 16.39596774193548,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.717617525813413e-07,
              "median": 1.2531777621927004e-08,
              "min": 2.7787114248165213e-09,
              "max": 7.541478129713441e-06,
              "p5": 3.0708132249709203e-09,
              "p95": 4.9581838775476865e-06,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.001282828127914435,
              "median": 0.001051360230314074,
              "min": 1.6631574045430808e-06,
              "max": 0.00400751469000616,
              "p5": 3.3738709970610664e-05,
              "p95": 0.003407526109991002,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.4302670623145397,
            "market": 0.02086654266861232,
            "sector": -0.0018069339253068417,
            "peers": -0.05507885709993843,
            "vs_market": 0.4094005196459274,
            "vs_sector": 0.43207399623984655,
            "vs_peers": 0.48534591941447813
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 53.83119408790355,
          "score_pca_percentile": 53.83119408790355,
          "rank_pca": 1188,
          "total": 2571,
          "adv_notional_sgd": 303400.0,
          "adv_volume_shares": 88000.0,
          "free_float_shares": 54805787.0,
          "turnover_ratio": 0.0016056698538057669,
          "votes": 29.0,
          "trades": 29.0,
          "spread_pct": 0.0283265753977513,
          "spread_ticks": 9.723880597014926,
          "amihud": 7.547215379413639e-08,
          "volatility": 1.186758917444376
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.6077993235033304,
          "loadings": {
            "log_adv": 0.5062607957652699,
            "log_trades": 0.4599417802222704,
            "log_turnover": 0.45898362601027726,
            "neg_spread": 0.46084434478792224,
            "neg_amihud": 0.31902494237987644,
            "neg_vol": 0.08563394506881579
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
          "peer_median_adv": 995240.0,
          "peer_median_score_pca": 63.1855309218203,
          "peer_median_trades": 66.0,
          "peer_median_volatility": 0.6085015554521558,
          "peer_median_spread_pct": 0.015233185723392852,
          "peer_median_spread_ticks": 3.491176139323375,
          "peer_median_amihud": 8.427940233215183e-09,
          "peer_median_turnover_ratio": 0.0010119754748891866,
          "target_vs_peer": {
            "score_pca_delta": -9.35,
            "adv_delta_pct": -69.5,
            "trades_delta_pct": -56.06,
            "volatility_delta_pct": -95.03,
            "spread_pct_delta_pct": -85.95,
            "spread_ticks_delta_pct": 178.53,
            "amihud_delta_pct": -795.5,
            "turnover_ratio_delta_pct": 58.67
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1328",
            "score_pca": 53.83119408790355,
            "rank_pca": 1188,
            "adv": 303400.0,
            "trades": 29.0,
            "volatility": 1.186758917444376,
            "spread_pct": 0.0283265753977513,
            "spread_ticks": 9.723880597014926,
            "amihud": 7.547215379413639e-08,
            "turnover_ratio": 0.0016056698538057669,
            "is_target": true
          },
          {
            "ticker": "1483",
            "score_pca": 44.224037339556595,
            "rank_pca": 1435,
            "adv": 283800.0,
            "trades": 15.0,
            "volatility": 0.9751196311860505,
            "spread_pct": 0.04518072289156618,
            "spread_ticks": 5.571428571428571,
            "amihud": 3.630227891186113e-08,
            "turnover_ratio": 0.000555985414649289,
            "is_target": false
          },
          {
            "ticker": "2443",
            "score_pca": 68.10579541034618,
            "rank_pca": 821,
            "adv": 1428480.0,
            "trades": 178.0,
            "volatility": 0.5911009569706565,
            "spread_pct": 0.010248106082052774,
            "spread_ticks": 1.9752650176678446,
            "amihud": 8.001433856947217e-09,
            "turnover_ratio": 0.0014679655351290842,
            "is_target": false
          },
          {
            "ticker": "6100",
            "score_pca": 72.30649552703228,
            "rank_pca": 713,
            "adv": 1712000.0,
            "trades": 494.0,
            "volatility": 0.46274714777089565,
            "spread_pct": 0.006510427389440956,
            "spread_ticks": 1.8565573770491803,
            "amihud": 8.854446609483149e-09,
            "turnover_ratio": 0.0021053196741489815,
            "is_target": false
          },
          {
            "ticker": "331",
            "score_pca": 58.38195254764683,
            "rank_pca": 1071,
            "adv": 562000.0,
            "trades": 21.0,
            "volatility": 0.1048583285870034,
            "spread_pct": 0.005393702282827475,
            "spread_ticks": 3.0136986301369864,
            "amihud": 6.159828293527565e-09,
            "turnover_ratio": 0.00022,
            "is_target": false
          },
          {
            "ticker": "2521",
            "score_pca": 67.98910929599377,
            "rank_pca": 824,
            "adv": 3360149.9999999995,
            "trades": 111.0,
            "volatility": 0.63703030009309,
            "spread_pct": 0.02021826536473293,
            "spread_ticks": 2.174484052532833,
            "amihud": 6.050320515729319e-09,
            "turnover_ratio": 0.0038106076281122837,
            "is_target": false
          },
          {
            "ticker": "6959",
            "score_pca": 35.00583430571762,
            "rank_pca": 1672,
            "adv": 43068.0,
            "trades": 6.0,
            "volatility": 0.6259021539336551,
            "spread_pct": 0.04241052719805547,
            "spread_ticks": 19.032258064516128,
            "amihud": 1.4351546881480435e-07,
            "turnover_ratio": 0.00016891891891891893,
            "is_target": false
          },
          {
            "ticker": "2508",
            "score_pca": 76.15713730066122,
            "rank_pca": 614,
            "adv": 7419734.999999999,
            "trades": 535.0,
            "volatility": 0.4664273952808294,
            "spread_pct": 0.008744785308266783,
            "spread_ticks": 3.9686536485097634,
            "amihud": 2.3100878688122866e-09,
            "turnover_ratio": 0.007283836181818225,
            "is_target": false
          },
          {
            "ticker": "1463",
            "score_pca": 4.356281602489304,
            "rank_pca": 2460,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 1.0688752726228048,
            "spread_pct": 0.16371681415929196,
            "spread_ticks": 9.727941176470589,
            "amihud": 3.6840554081933367e-07,
            "turnover_ratio": 0.0,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Other Support Services",
          "sector_count": 42,
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
              "mean": 58964694.22276373,
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
              "mean": 6.992797661725259e-07,
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
              "mean": 0.806377086652539,
              "median": 0.6907745319475527,
              "min": 0.1048583285870034,
              "max": 1.6926976055214658,
              "p5": 0.2611577322989486,
              "p95": 1.3730942931759111,
              "count": 42
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 545417.4030952381,
              "median": 40254.0,
              "min": 0.0,
              "max": 7419734.999999999,
              "p5": 0.0,
              "p95": 3277742.4999999925,
              "count": 42
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.06436603087905132,
              "median": 0.04883692486044031,
              "min": 0.005384108853786814,
              "max": 0.20953537807470388,
              "p5": 0.006622145285382248,
              "p95": 0.16272011260590918,
              "count": 42
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0012283371401910323,
              "median": 0.0003106130738751206,
              "min": 0.0,
              "max": 0.010247494375127838,
              "p5": 0.0,
              "p95": 0.007110174754132913,
              "count": 42
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.322326018182502e-06,
              "median": 2.883440860526956e-07,
              "min": 2.3100878688122866e-09,
              "max": 1.0964912280701742e-05,
              "p5": 6.055795904619231e-09,
              "p95": 6.2199016076021345e-06,
              "count": 42
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 49.80952380952381,
              "median": 8.5,
              "min": 0.0,
              "max": 535.0,
              "p5": 0.0,
              "p95": 373.69999999999914,
              "count": 42
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 1851154.1249999998,
              "median": 995240.0,
              "min": 0.0,
              "max": 7419734.999999999,
              "p5": 15073.800000000001,
              "p95": 5998880.249999997,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 170.0,
              "median": 66.0,
              "min": 0.0,
              "max": 535.0,
              "p5": 2.1,
              "p95": 520.65,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6165076483056232,
              "median": 0.6085015554521558,
              "min": 0.1048583285870034,
              "max": 1.0688752726228048,
              "p5": 0.2301194153013657,
              "p95": 1.0360607981199408,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03780291883452932,
              "median": 0.015233185723392852,
              "min": 0.005393702282827475,
              "max": 0.16371681415929196,
              "p5": 0.005784556070142194,
              "p95": 0.12222918221558787,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 5.915035817288986,
              "median": 3.491176139323375,
              "min": 1.8565573770491803,
              "max": 19.032258064516128,
              "p5": 1.8981050512657127,
              "p95": 15.775747153700184,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.244992571131234e-08,
              "median": 8.427940233215183e-09,
              "min": 2.3100878688122866e-09,
              "max": 3.6840554081933367e-07,
              "p5": 3.6191692952332483e-09,
              "p95": 2.896940156177483e-07,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0019515791690970978,
              "median": 0.0010119754748891866,
              "min": 0.0,
              "max": 0.007283836181818225,
              "p5": 5.912162162162163e-05,
              "p95": 0.006068206188021143,
              "count": 8
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": 0.832699619771863,
            "market": 0.029271276062160734,
            "sector": -0.023664524847017865,
            "peers": -0.15913887020806683,
            "vs_market": 0.8034283437097023,
            "vs_sector": 0.8563641446188809,
            "vs_peers": 0.9918384899799298
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 51.96421625826526,
          "score_pca_percentile": 51.96421625826526,
          "rank_pca": 1236,
          "total": 2571,
          "adv_notional_sgd": 237320.0,
          "adv_volume_shares": 70000.0,
          "free_float_shares": 54805787.0,
          "turnover_ratio": 0.0012772373837091327,
          "votes": 25.0,
          "trades": 25.0,
          "spread_pct": 0.02767971574641715,
          "spread_ticks": 9.062417824526491,
          "amihud": 1.0478772866594071e-07,
          "volatility": 1.0558416899206184
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.6278927199589147,
          "loadings": {
            "log_adv": 0.4972403840150321,
            "log_trades": 0.4502865233050781,
            "log_turnover": 0.44993870563624955,
            "neg_spread": 0.4601433037469579,
            "neg_amihud": 0.3517472351122976,
            "neg_vol": 0.10996013465103757
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
          "peer_median_adv": 1824169.92,
          "peer_median_score_pca": 62.17425126409957,
          "peer_median_trades": 70.25,
          "peer_median_volatility": 0.5597570970683761,
          "peer_median_spread_pct": 0.01617624766395398,
          "peer_median_spread_ticks": 3.654110192870973,
          "peer_median_amihud": 6.9056226297512295e-09,
          "peer_median_turnover_ratio": 0.0018908142217976191,
          "target_vs_peer": {
            "score_pca_delta": -10.21,
            "adv_delta_pct": -87.0,
            "trades_delta_pct": -64.41,
            "volatility_delta_pct": -88.62,
            "spread_pct_delta_pct": -71.11,
            "spread_ticks_delta_pct": 148.01,
            "amihud_delta_pct": -1417.43,
            "turnover_ratio_delta_pct": -32.45
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1328",
            "score_pca": 51.96421625826526,
            "rank_pca": 1236,
            "adv": 237320.0,
            "trades": 25.0,
            "volatility": 1.0558416899206184,
            "spread_pct": 0.02767971574641715,
            "spread_ticks": 9.062417824526491,
            "amihud": 1.0478772866594071e-07,
            "turnover_ratio": 0.0012772373837091327,
            "is_target": true
          },
          {
            "ticker": "1483",
            "score_pca": 34.61688059120965,
            "rank_pca": 1682,
            "adv": 137470.0,
            "trades": 7.0,
            "volatility": 0.7813258476197396,
            "spread_pct": 0.06168449106502203,
            "spread_ticks": 7.101923076923077,
            "amihud": 5.939568454714328e-08,
            "turnover_ratio": 0.0002710428896415284,
            "is_target": false
          },
          {
            "ticker": "2443",
            "score_pca": 74.60132244262932,
            "rank_pca": 654,
            "adv": 5595703.0,
            "trades": 485.5,
            "volatility": 0.5884353647301165,
            "spread_pct": 0.005919979454707898,
            "spread_ticks": 1.5569523657623072,
            "amihud": 2.5407026232498196e-09,
            "turnover_ratio": 0.00395151058698762,
            "is_target": false
          },
          {
            "ticker": "6100",
            "score_pca": 74.52353169972773,
            "rank_pca": 656,
            "adv": 3147789.84,
            "trades": 640.0,
            "volatility": 0.47847753639694524,
            "spread_pct": 0.005396325827646318,
            "spread_ticks": 1.8012363892589371,
            "amihud": 5.730492787319929e-09,
            "turnover_ratio": 0.00351058555395371,
            "is_target": false
          },
          {
            "ticker": "331",
            "score_pca": 56.86503306106573,
            "rank_pca": 1110,
            "adv": 500550.0,
            "trades": 18.0,
            "volatility": 0.1007885584572137,
            "spread_pct": 0.005339545696086024,
            "spread_ticks": 3.0346270928462706,
            "amihud": 6.9567862986557384e-09,
            "turnover_ratio": 0.00019777777777777778,
            "is_target": false
          },
          {
            "ticker": "2521",
            "score_pca": 67.4834694671334,
            "rank_pca": 837,
            "adv": 3945112.5,
            "trades": 122.5,
            "volatility": 0.9972629715204712,
            "spread_pct": 0.02285435198787757,
            "spread_ticks": 2.015431260747579,
            "amihud": 6.85445896084672e-09,
            "turnover_ratio": 0.005034829988275053,
            "is_target": false
          },
          {
            "ticker": "6959",
            "score_pca": 37.222870478413064,
            "rank_pca": 1615,
            "adv": 49457.5,
            "trades": 7.0,
            "volatility": 0.5219383944874301,
            "spread_pct": 0.04065775190791142,
            "spread_ticks": 20.88622291021672,
            "amihud": 1.5541667859212978e-07,
            "turnover_ratio": 0.0001616795366795367,
            "is_target": false
          },
          {
            "ticker": "2508",
            "score_pca": 75.69039284325166,
            "rank_pca": 626,
            "adv": 7226430.0,
            "trades": 560.0,
            "volatility": 0.5310788294066358,
            "spread_pct": 0.009498143340030393,
            "spread_ticks": 4.273593292895676,
            "amihud": 2.2634295913480702e-09,
            "turnover_ratio": 0.007183159564711768,
            "is_target": false
          },
          {
            "ticker": "1463",
            "score_pca": 7.040062232594321,
            "rank_pca": 2391,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.8508821425385451,
            "spread_pct": 0.10199503994789143,
            "spread_ticks": 6.272108843537415,
            "amihud": 3.424266128440356e-07,
            "turnover_ratio": 0.0,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Other Support Services",
          "sector_count": 42,
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
              "mean": 55728699.61312614,
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
              "mean": 6.11410409475225e-07,
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
              "mean": 0.8675580448288118,
              "median": 0.783645890405926,
              "min": 0.1007885584572137,
              "max": 1.9582271008293164,
              "p5": 0.24742089461736155,
              "p95": 1.8454040221342658,
              "count": 42
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 736322.7019642858,
              "median": 36833.901249999995,
              "min": 0.0,
              "max": 7226430.0,
              "p5": 0.0,
              "p95": 5114161.124999994,
              "count": 42
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.06154301463925292,
              "median": 0.05457228946265362,
              "min": 0.004669282534214528,
              "max": 0.21009110060003078,
              "p5": 0.005422508508999398,
              "p95": 0.12878210017936845,
              "count": 42
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0015494459568027264,
              "median": 0.00024913986585666,
              "min": 0.0,
              "max": 0.015150284501657344,
              "p5": 0.0,
              "p95": 0.0070757430858899234,
              "count": 42
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.117788752833457e-06,
              "median": 2.8804275875918094e-07,
              "min": 2.2634295913480702e-09,
              "max": 1.5318627450980392e-05,
              "p5": 3.343159239740306e-09,
              "p95": 3.24343766883061e-06,
              "count": 42
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 65.53571428571429,
              "median": 7.0,
              "min": 0.0,
              "max": 640.0,
              "p5": 0.0,
              "p95": 481.37499999999966,
              "count": 42
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 2575314.105,
              "median": 1824169.92,
              "min": 0.0,
              "max": 7226430.0,
              "p5": 17310.125,
              "p95": 6655675.549999999,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 230.0,
              "median": 70.25,
              "min": 0.0,
              "max": 640.0,
              "p5": 2.45,
              "p95": 612.0,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.606273705644637,
              "median": 0.5597570970683761,
              "min": 0.1007885584572137,
              "max": 0.9972629715204712,
              "p5": 0.23297970073611973,
              "p95": 0.946029681376797,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.031668203653396634,
              "median": 0.01617624766395398,
              "min": 0.005339545696086024,
              "max": 0.10199503994789143,
              "p5": 0.005359418742132127,
              "p95": 0.08788634783888712,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 5.867761904023498,
              "median": 3.654110192870973,
              "min": 1.5569523657623072,
              "max": 20.88622291021672,
              "p5": 1.6424517739861277,
              "p95": 16.061717968563936,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.269810578059112e-08,
              "median": 6.9056226297512295e-09,
              "min": 2.2634295913480702e-09,
              "max": 3.424266128440356e-07,
              "p5": 2.3604751525136826e-09,
              "p95": 2.7697313585586847e-07,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002538823237253374,
              "median": 0.0018908142217976191,
              "min": 0.0,
              "max": 0.007183159564711768,
              "p5": 5.6587837837837844e-05,
              "p95": 0.006431244212958917,
              "count": 8
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": 0.164251207729468,
            "market": 0.15043005670937237,
            "sector": -0.023664524847017865,
            "peers": -0.17857342895741457,
            "vs_market": 0.013821151020095623,
            "vs_sector": 0.18791573257648586,
            "vs_peers": 0.34282463668688257
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Near-term tradability is mixed, with average volume down 34.6% from the 1M average even as displayed bid depth is 1.62x ask depth.",
        "market_comparison": "The tape is being driven mainly by the market at 88.6%, which matters because trading conditions are still being shaped more by broader moves than by stock-specific demand."
      },
      "30d": {
        "liquidity": "Monthly tradability is still weak for the company’s size because primary average daily volume is HK$237.3K compared with a peer median of HK$1.8M.",
        "market_comparison": "The stock returned 43.0% over 1M, compared with peers at -5.5% and the market at +2.1%, which matters because price momentum is stronger than the liquidity profile."
      },
      "3m": {
        "liquidity": "Tradability looks weak over the medium term, with the longer liquidity profile already screening below peers for the company’s size.",
        "market_comparison": "Recent price performance has been much stronger than peers, which matters because the return backdrop is firmer than the stock’s underlying accessibility."
      },
      "6m": {
        "liquidity": "Tradability is weak on the clearest structural view, with a 6M liquidity score of 52.0 compared with a peer median of 62.2.",
        "market_comparison": "The stock has outperformed peers on returns over recent periods, which matters because stronger performance has not translated into peer-level access to liquidity."
      }
    }
  },
  "q02": {
    "driver_model": {
      "valid": true,
      "model_method": "ols_with_hmm_jump_regimes",
      "regime_method": "hmm_jump_aware",
      "estimation_window_days": 246,
      "reporting_window_days": 63,
      "available_history_days": 246,
      "n_regimes": 4,
      "current_regime": 2,
      "current_regime_label": "Stressed / Illiquid",
      "current_regime_probability": 0.9999999986283497,
      "current_regime_probability_display": ">99.9%",
      "current_probability_basis": "filtered",
      "historical_probability_basis": "smoothed",
      "current_driver_mix": {
        "market_share": {
          "median": 0.8857816275603847,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "88.6%",
          "display_range": null,
          "display_text": "88.6%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 246 trading days.",
          "kind": "share_pct",
          "value_pct": 88.6,
          "plain_english": "Market explains about 88.6% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.08904880273196654,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "8.9%",
          "display_range": null,
          "display_text": "8.9%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 246 trading days.",
          "kind": "share_pct",
          "value_pct": 8.9,
          "plain_english": "Sector explains about 8.9% of price moves in the current state."
        },
        "company_share": {
          "median": 0.02516956970764884,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "2.5%",
          "display_range": null,
          "display_text": "2.5%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 246 trading days.",
          "kind": "share_pct",
          "value_pct": 2.5,
          "plain_english": "Company-specific explains about 2.5% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 3.6473539981423055,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "3.65",
          "display_range": null,
          "display_text": "3.65",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 246 trading days.",
          "kind": "beta",
          "strength_label": "Very high",
          "plain_english": "Very high market link: a 1% market move has lined up with about a 3.65% stock move in the same direction in this state.",
          "value_num": 3.65
        },
        "beta_stock_lag": {
          "median": 0.045133224399023106,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.05",
          "display_range": null,
          "display_text": "0.05",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 246 trading days.",
          "kind": "lag_beta",
          "value_num": 0.05
        },
        "beta_sector": {
          "median": 0.8256992809397204,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.83",
          "display_range": null,
          "display_text": "0.83",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 246 trading days.",
          "kind": "beta",
          "strength_label": "Moderate",
          "plain_english": "Moderate sector link: a 1% sector move has lined up with about a 0.83% stock move in the same direction in this state.",
          "value_num": 0.83
        },
        "beta_market_lag": {
          "median": 4.757290469711121,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "4.76",
          "display_range": null,
          "display_text": "4.76",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 246 trading days.",
          "kind": "lag_beta",
          "value_num": 4.76
        },
        "beta_sector_lag": {
          "median": 0.5726245223043354,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.57",
          "display_range": null,
          "display_text": "0.57",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 246 trading days.",
          "kind": "lag_beta",
          "value_num": 0.57
        },
        "posterior_source": null,
        "intervals_collapsed": false,
        "confidence_label": "High, limited history",
        "confidence_note": "Based on 246 trading days relative to the 252-day target."
      },
      "rolling_windows": {},
      "monthly_history": [
        {
          "month_key": "2025-05",
          "month_label": "May 2025",
          "month_short_label": "May",
          "period_label": "2025-05-16 to 2025-05-30",
          "n_obs": 11,
          "partial_month": true,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.3801648021022533,
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
              "median": 0.24131770890702453,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "24.1%",
              "display_range": null,
              "display_text": "24.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
              "kind": "share_pct",
              "value_pct": 24.1,
              "plain_english": "Market explains about 24.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3801648021022533,
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
              "median": 0.37851748899072224,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.9%",
              "display_range": null,
              "display_text": "37.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
              "kind": "share_pct",
              "value_pct": 37.9,
              "plain_english": "Company-specific explains about 37.9% of price moves in the current state."
            }
          },
          "summary": "May: More mixed, though sector-driven still has the largest share."
        },
        {
          "month_key": "2025-06",
          "month_label": "June 2025",
          "month_short_label": "Jun",
          "period_label": "2025-06-02 to 2025-06-30",
          "n_obs": 21,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4740493382675521,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.4%",
            "display_range": null,
            "display_text": "47.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 47.4,
            "plain_english": "Market explains about 47.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.4740493382675521,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.4%",
              "display_range": null,
              "display_text": "47.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 47.4,
              "plain_english": "Market explains about 47.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.07525299987843069,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "7.5%",
              "display_range": null,
              "display_text": "7.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 7.5,
              "plain_english": "Sector explains about 7.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4506976618540172,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.1%",
              "display_range": null,
              "display_text": "45.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 45.1,
              "plain_english": "Company-specific explains about 45.1% of price moves in the current state."
            }
          },
          "summary": "Jun: Mostly market-driven."
        },
        {
          "month_key": "2025-07",
          "month_label": "July 2025",
          "month_short_label": "Jul",
          "period_label": "2025-07-02 to 2025-07-31",
          "n_obs": 22,
          "partial_month": true,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.37565705268732313,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "37.6%",
            "display_range": null,
            "display_text": "37.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 37.6,
            "plain_english": "Sector explains about 37.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.25025651939505067,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "25.0%",
              "display_range": null,
              "display_text": "25.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 25.0,
              "plain_english": "Market explains about 25.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.37565705268732313,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.6%",
              "display_range": null,
              "display_text": "37.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 37.6,
              "plain_english": "Sector explains about 37.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3740864279176261,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.4%",
              "display_range": null,
              "display_text": "37.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 37.4,
              "plain_english": "Company-specific explains about 37.4% of price moves in the current state."
            }
          },
          "summary": "Jul: More mixed, though sector-driven still has the largest share."
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
            "median": 0.5394786286885116,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "53.9%",
            "display_range": null,
            "display_text": "53.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 53.9,
            "plain_english": "Company-specific explains about 53.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2813831789674975,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "28.1%",
              "display_range": null,
              "display_text": "28.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 28.1,
              "plain_english": "Market explains about 28.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.17913819234399087,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "17.9%",
              "display_range": null,
              "display_text": "17.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 17.9,
              "plain_english": "Sector explains about 17.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5394786286885116,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "53.9%",
              "display_range": null,
              "display_text": "53.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 53.9,
              "plain_english": "Company-specific explains about 53.9% of price moves in the current state."
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
            "median": 0.5468255116951664,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "54.7%",
            "display_range": null,
            "display_text": "54.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 54.7,
            "plain_english": "Company-specific explains about 54.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.24124717234987955,
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
              "plain_english": "Market explains about 24.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.21192731595495412,
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
              "median": 0.5468255116951664,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "54.7%",
              "display_range": null,
              "display_text": "54.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 54.7,
              "plain_english": "Company-specific explains about 54.7% of price moves in the current state."
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
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.569571750352712,
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
              "median": 0.2944446657879194,
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
              "plain_english": "Market explains about 29.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1359835838593687,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "13.6%",
              "display_range": null,
              "display_text": "13.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 13.6,
              "plain_english": "Sector explains about 13.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.569571750352712,
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
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.6806818064468338,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "68.1%",
            "display_range": null,
            "display_text": "68.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 68.1,
            "plain_english": "Company-specific explains about 68.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.062143417455170324,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "6.2%",
              "display_range": null,
              "display_text": "6.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 6.2,
              "plain_english": "Market explains about 6.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2571747760979958,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "25.7%",
              "display_range": null,
              "display_text": "25.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 25.7,
              "plain_english": "Sector explains about 25.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6806818064468338,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "68.1%",
              "display_range": null,
              "display_text": "68.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 68.1,
              "plain_english": "Company-specific explains about 68.1% of price moves in the current state."
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
            "median": 0.5796557209840756,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "58.0%",
            "display_range": null,
            "display_text": "58.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
            "kind": "share_pct",
            "value_pct": 58.0,
            "plain_english": "Company-specific explains about 58.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2372069611644084,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "23.7%",
              "display_range": null,
              "display_text": "23.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 23.7,
              "plain_english": "Market explains about 23.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.18313731785151602,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "18.3%",
              "display_range": null,
              "display_text": "18.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 18.3,
              "plain_english": "Sector explains about 18.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5796557209840756,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "58.0%",
              "display_range": null,
              "display_text": "58.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 58.0,
              "plain_english": "Company-specific explains about 58.0% of price moves in the current state."
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
            "median": 0.8247359570587904,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "82.5%",
            "display_range": null,
            "display_text": "82.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 82.5,
            "plain_english": "Company-specific explains about 82.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.04442937977107456,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "4.4%",
              "display_range": null,
              "display_text": "4.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 4.4,
              "plain_english": "Market explains about 4.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.130834663170135,
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
              "plain_english": "Sector explains about 13.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.8247359570587904,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "82.5%",
              "display_range": null,
              "display_text": "82.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 82.5,
              "plain_english": "Company-specific explains about 82.5% of price moves in the current state."
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
            "median": 0.6110674202234981,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "61.1%",
            "display_range": null,
            "display_text": "61.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
            "kind": "share_pct",
            "value_pct": 61.1,
            "plain_english": "Company-specific explains about 61.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2116083294925706,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "21.2%",
              "display_range": null,
              "display_text": "21.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 21.2,
              "plain_english": "Market explains about 21.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.17732425028393134,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "17.7%",
              "display_range": null,
              "display_text": "17.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 17.7,
              "plain_english": "Sector explains about 17.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6110674202234981,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.1%",
              "display_range": null,
              "display_text": "61.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 61.1,
              "plain_english": "Company-specific explains about 61.1% of price moves in the current state."
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
            "median": 0.4201888492043086,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "42.0%",
            "display_range": null,
            "display_text": "42.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 42.0,
            "plain_english": "Company-specific explains about 42.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.16273422977406002,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "16.3%",
              "display_range": null,
              "display_text": "16.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 16.3,
              "plain_english": "Market explains about 16.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.4170769210216313,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "41.7%",
              "display_range": null,
              "display_text": "41.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 41.7,
              "plain_english": "Sector explains about 41.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4201888492043086,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.0%",
              "display_range": null,
              "display_text": "42.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 42.0,
              "plain_english": "Company-specific explains about 42.0% of price moves in the current state."
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
            "median": 0.4680672298535462,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "46.8%",
            "display_range": null,
            "display_text": "46.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
            "kind": "share_pct",
            "value_pct": 46.8,
            "plain_english": "Company-specific explains about 46.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.36418606369038975,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.4%",
              "display_range": null,
              "display_text": "36.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 36.4,
              "plain_english": "Market explains about 36.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.16774670645606415,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "16.8%",
              "display_range": null,
              "display_text": "16.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 16.8,
              "plain_english": "Sector explains about 16.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4680672298535462,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.8%",
              "display_range": null,
              "display_text": "46.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 46.8,
              "plain_english": "Company-specific explains about 46.8% of price moves in the current state."
            }
          },
          "summary": "Apr: Mostly company-driven."
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
            "median": 0.590158683770613,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "59.0%",
            "display_range": null,
            "display_text": "59.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
            "kind": "share_pct",
            "value_pct": 59.0,
            "plain_english": "Company-specific explains about 59.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2558489224513697,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "25.6%",
              "display_range": null,
              "display_text": "25.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 25.6,
              "plain_english": "Market explains about 25.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1539923937780173,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "15.4%",
              "display_range": null,
              "display_text": "15.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 15.4,
              "plain_english": "Sector explains about 15.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.590158683770613,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "59.0%",
              "display_range": null,
              "display_text": "59.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 59.0,
              "plain_english": "Company-specific explains about 59.0% of price moves in the current state."
            }
          },
          "summary": "May: Mostly company-driven."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Calm / Liquid",
          "pct_time": 0.48407293086712394,
          "expected_duration_days": 23.753653631000173,
          "current_probability": 1.9287809059139227e-13,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 119.08194099331249,
          "volatility": {
            "median": 0.035990598543515696,
            "low": 0.035990598543515696,
            "high": 0.035990598543515696
          },
          "volatility_label": "Calm / Liquid",
          "jump_probability": 0.22792206736525575,
          "jump_rate": 0.026368462306259454,
          "risk_score": 0.12243096926282199,
          "metrics": {
            "rolling_vol_10d": 0.03821020886258498,
            "downside_vol_10d": 0.022790359939551127,
            "drawdown_21d": 0.17654070355341972,
            "amihud_stress": 1.7428867860112742,
            "spread_rel": 255.95968776548554,
            "spread_ticks": 11.42819173687859,
            "log_notional": 13.086212340190853,
            "log_trade_count": 3.7082136166923636
          }
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "pct_time": 0.10569004421287995,
          "expected_duration_days": 2.894726658400886,
          "current_probability": 4.387752134204221e-15,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 25.999750876368466,
          "volatility": {
            "median": 0.0024840947597445937,
            "low": 0.0024840947597445937,
            "high": 0.0024840947597445937
          },
          "volatility_label": "Normal / Active",
          "jump_probability": 0.1726938569807843,
          "jump_rate": 0.07692128930771858,
          "risk_score": 0.1661798298037929,
          "metrics": {
            "rolling_vol_10d": 0.058358586195393115,
            "downside_vol_10d": 0.01753637043520043,
            "drawdown_21d": 0.07466729137860074,
            "amihud_stress": 0.6580383137026848,
            "spread_rel": 925.8591510438757,
            "spread_ticks": 17.08687884104104,
            "log_notional": 2.399047046069076,
            "log_trade_count": 0.29529040341517104
          }
        },
        {
          "id": 2,
          "label": "Stressed / Illiquid",
          "pct_time": 0.23338784944466598,
          "expected_duration_days": 8.163099510912845,
          "current_probability": 0.9999999986283497,
          "current_probability_display": ">99.9%",
          "current_probability_basis": "filtered",
          "n_days_effective": 57.41341096338783,
          "volatility": {
            "median": 0.04636829159228757,
            "low": 0.04636829159228757,
            "high": 0.04636829159228757
          },
          "volatility_label": "Stressed / Illiquid",
          "jump_probability": 0.26125102776343556,
          "jump_rate": 0.11255988505644106,
          "risk_score": 0.24368089365295637,
          "metrics": {
            "rolling_vol_10d": 0.07727142031407651,
            "downside_vol_10d": 0.03242030452369325,
            "drawdown_21d": 0.1921107762082291,
            "amihud_stress": 2.189902684418173,
            "spread_rel": 263.79592043180264,
            "spread_ticks": 9.727206032922961,
            "log_notional": 12.540097720008758,
            "log_trade_count": 3.4288070736103444
          }
        },
        {
          "id": 3,
          "label": "Jump / Tail Shock",
          "pct_time": 0.17684917547533016,
          "expected_duration_days": 2.735458754610884,
          "current_probability": 1.3714530522533308e-09,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 43.50489716693122,
          "volatility": {
            "median": 0.8067517712972317,
            "low": 0.8067517712972317,
            "high": 0.8067517712972317
          },
          "volatility_label": "Jump / Tail Shock",
          "jump_probability": 0.44146686652101014,
          "jump_rate": 0.37691414294845915,
          "risk_score": 0.8387251028352759,
          "metrics": {
            "rolling_vol_10d": 0.4740573192462627,
            "downside_vol_10d": 0.055486329430672485,
            "drawdown_21d": 0.13224225976783352,
            "amihud_stress": 2.2076353855943798,
            "spread_rel": 323.1242703561548,
            "spread_ticks": 8.839379327404018,
            "log_notional": 14.665028203958418,
            "log_trade_count": 5.315163025095219
          }
        }
      ],
      "transitions": {
        "mean": [
          [
            0.9579012131971593,
            8.40162872827818e-05,
            8.387776068880543e-05,
            0.04193089275486915
          ],
          [
            0.00038443698421059685,
            0.6545442392296815,
            0.03863847091507533,
            0.3064328528710327
          ],
          [
            0.05255519715829835,
            0.017859652857819694,
            0.8774975119851045,
            0.05208763799877731
          ],
          [
            0.04666962495685479,
            0.1606192153509346,
            0.15828055397183619,
            0.6344306057203744
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            114.0,
            0.0,
            0.0,
            5.0
          ],
          [
            0.0,
            17.0,
            1.0,
            8.0
          ],
          [
            3.0,
            1.0,
            49.0,
            3.0
          ],
          [
            2.0,
            7.0,
            7.0,
            28.0
          ]
        ]
      },
      "current_state_is_transition": false,
      "state_probabilities": [
        {
          "id": 0,
          "label": "Calm / Liquid",
          "probability": 1.9287809059139227e-13,
          "probability_display": "<0.1%",
          "basis": "filtered"
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "probability": 4.387752134204221e-15,
          "probability_display": "<0.1%",
          "basis": "filtered"
        },
        {
          "id": 2,
          "label": "Stressed / Illiquid",
          "probability": 0.9999999986283497,
          "probability_display": ">99.9%",
          "basis": "filtered"
        },
        {
          "id": 3,
          "label": "Jump / Tail Shock",
          "probability": 1.3714530522533308e-09,
          "probability_display": "<0.1%",
          "basis": "filtered"
        }
      ],
      "jump_risk": {
        "current_probability": 0.2612510280105863,
        "current_score": 0.213489397277213,
        "current_flag": false,
        "jump_threshold_score": 2.5,
        "method": "robust_residual_and_return_jump_overlay",
        "model_definition": "jump_score_feature_overlay"
      },
      "model_selection": {
        "chosen": 4,
        "criterion": "bic_with_min_state_support",
        "bic": 12876.074162285127,
        "loglik": -5912.277919461023,
        "n_params": 191,
        "bic_delta_vs_next_best": 804.6961222144782,
        "candidates": [
          {
            "k": 2,
            "valid": true,
            "reason": "ok",
            "bic": 14408.998696925815,
            "loglik": -6954.006763577985,
            "n_params": 91,
            "converged": true,
            "iterations": 20,
            "best_seed": 1337,
            "seed_runs": [
              {
                "seed": 42,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 14408.998711830636,
                "loglik": -6954.006771030396,
                "n_params": 91,
                "converged": true,
                "iterations": 19
              },
              {
                "seed": 1337,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 14408.998696925815,
                "loglik": -6954.006763577985,
                "n_params": 91,
                "converged": true,
                "iterations": 20
              },
              {
                "seed": 2027,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 14408.998704912678,
                "loglik": -6954.006767571416,
                "n_params": 91,
                "converged": true,
                "iterations": 19
              }
            ]
          },
          {
            "k": 3,
            "valid": true,
            "reason": "ok",
            "bic": 13680.770284499606,
            "loglik": -6455.011934734537,
            "n_params": 140,
            "converged": true,
            "iterations": 23,
            "best_seed": 2027,
            "seed_runs": [
              {
                "seed": 42,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 13680.770288783,
                "loglik": -6455.011936876234,
                "n_params": 140,
                "converged": true,
                "iterations": 24
              },
              {
                "seed": 1337,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 13712.902239223306,
                "loglik": -6471.077912096387,
                "n_params": 140,
                "converged": true,
                "iterations": 19
              },
              {
                "seed": 2027,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 13680.770284499606,
                "loglik": -6455.011934734537,
                "n_params": 140,
                "converged": true,
                "iterations": 23
              }
            ]
          },
          {
            "k": 4,
            "valid": true,
            "reason": "ok",
            "bic": 12876.074162285127,
            "loglik": -5912.277919461023,
            "n_params": 191,
            "converged": true,
            "iterations": 28,
            "best_seed": 2027,
            "seed_runs": [
              {
                "seed": 42,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 12876.074163560223,
                "loglik": -5912.277920098571,
                "n_params": 191,
                "converged": true,
                "iterations": 31
              },
              {
                "seed": 1337,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 12876.07416359952,
                "loglik": -5912.277920118219,
                "n_params": 191,
                "converged": true,
                "iterations": 28
              },
              {
                "seed": 2027,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 12876.074162285127,
                "loglik": -5912.277919461023,
                "n_params": 191,
                "converged": true,
                "iterations": 28
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
              "bic": 12876.074163560223,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 4,
              "bic": 12876.07416359952,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 4,
              "bic": 12876.074162285127,
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
                "2": 5999.107622143785,
                "3": 5590.810474451012,
                "4": 5432.208973700491
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
                "2": 8774.895780071141,
                "3": 8705.328371986256,
                "4": 8083.975038005207
              },
              "valid": true
            },
            {
              "window_days": 246,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 4,
              "bic_by_state": {
                "2": 14408.998711830636,
                "3": 13680.770288783,
                "4": 12876.074169623913
              },
              "valid": true
            }
          ],
          "stable": true
        }
      },
      "robustness_diagnostics": {
        "history_used_days": 246,
        "n_features": 22,
        "candidate_states": [
          2,
          3,
          4
        ],
        "selected_states": 4,
        "bic_delta_vs_next_best": 804.6961222144782,
        "state_count_interpretation": "246 observations allowed the current rule to test up to 4 states; BIC preferred 4 with a 804.70 improvement versus the next best valid state count.",
        "parameter_count": {
          "formula": "k^2 - 1 + 2*k*d",
          "n_parameters": 191,
          "observations_per_parameter": 1.287958115183246,
          "parameter_pressure_label": "parameter_heavy"
        },
        "state_occupancy": {
          "min_effective_days_required": 7.38,
          "min_effective_days_observed": 25.999750876368466,
          "passes": true,
          "states": [
            {
              "id": 0,
              "label": "Calm / Liquid",
              "effective_days": 119.08194099331249,
              "pct_time": 0.48407293086712394,
              "passes_min_support": true
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "effective_days": 25.999750876368466,
              "pct_time": 0.10569004421287995,
              "passes_min_support": true
            },
            {
              "id": 2,
              "label": "Stressed / Illiquid",
              "effective_days": 57.41341096338783,
              "pct_time": 0.23338784944466598,
              "passes_min_support": true
            },
            {
              "id": 3,
              "label": "Jump / Tail Shock",
              "effective_days": 43.50489716693122,
              "pct_time": 0.17684917547533016,
              "passes_min_support": true
            }
          ]
        },
        "transition_diagnostics": {
          "self_transition_probabilities": [
            0.9579012131971593,
            0.6545442392296815,
            0.8774975119851045,
            0.6344306057203744
          ],
          "expected_duration_days": [
            23.753653631000173,
            2.894726658400886,
            8.163099510912845,
            2.735458754610884
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
              "bic": 12876.074163560223,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 4,
              "bic": 12876.07416359952,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 4,
              "bic": 12876.074162285127,
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
                "2": 5999.107622143785,
                "3": 5590.810474451012,
                "4": 5432.208973700491
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
                "2": 8774.895780071141,
                "3": 8705.328371986256,
                "4": 8083.975038005207
              },
              "valid": true
            },
            {
              "window_days": 246,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 4,
              "bic_by_state": {
                "2": 14408.998711830636,
                "3": 13680.770288783,
                "4": 12876.074169623913
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
            "risk_score": 0.12243096926282199,
            "jump_probability": 0.22792206736525575,
            "jump_rate": 0.026368462306259454,
            "rolling_vol_10d": 0.03821020886258498,
            "downside_vol_10d": 0.022790359939551127,
            "drawdown_21d": 0.17654070355341972,
            "amihud_stress": 1.7428867860112742,
            "spread_rel": 255.95968776548554,
            "spread_ticks": 11.42819173687859,
            "log_notional": 13.086212340190853,
            "log_trade_count": 3.7082136166923636
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "risk_score": 0.1661798298037929,
            "jump_probability": 0.1726938569807843,
            "jump_rate": 0.07692128930771858,
            "rolling_vol_10d": 0.058358586195393115,
            "downside_vol_10d": 0.01753637043520043,
            "drawdown_21d": 0.07466729137860074,
            "amihud_stress": 0.6580383137026848,
            "spread_rel": 925.8591510438757,
            "spread_ticks": 17.08687884104104,
            "log_notional": 2.399047046069076,
            "log_trade_count": 0.29529040341517104
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "risk_score": 0.24368089365295637,
            "jump_probability": 0.26125102776343556,
            "jump_rate": 0.11255988505644106,
            "rolling_vol_10d": 0.07727142031407651,
            "downside_vol_10d": 0.03242030452369325,
            "drawdown_21d": 0.1921107762082291,
            "amihud_stress": 2.189902684418173,
            "spread_rel": 263.79592043180264,
            "spread_ticks": 9.727206032922961,
            "log_notional": 12.540097720008758,
            "log_trade_count": 3.4288070736103444
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "risk_score": 0.8387251028352759,
            "jump_probability": 0.44146686652101014,
            "jump_rate": 0.37691414294845915,
            "rolling_vol_10d": 0.4740573192462627,
            "downside_vol_10d": 0.055486329430672485,
            "drawdown_21d": 0.13224225976783352,
            "amihud_stress": 2.2076353855943798,
            "spread_rel": 323.1242703561548,
            "spread_ticks": 8.839379327404018,
            "log_notional": 14.665028203958418,
            "log_trade_count": 5.315163025095219
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
          "state": 3,
          "probabilities": [
            8.352721065547954e-28,
            0.0,
            2.1683488417992664e-05,
            0.999978316511582
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            1.5761586509162228e-24,
            0.0,
            3.911277863812761e-06,
            0.9999960887221362
          ],
          "jump_probability": 0.8867497114576637,
          "jump_score": 4.039532570491718
        },
        {
          "trade_date": "2026-05-12",
          "state": 2,
          "probabilities": [
            7.462881056949732e-16,
            6.182997202465071e-21,
            0.9999996928881109,
            3.0711188835236536e-07
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            7.80726894793351e-12,
            1.404184951689479e-19,
            0.9999982973856092,
            1.7026065834753583e-06
          ],
          "jump_probability": 0.14041641997052168,
          "jump_score": 0.6744907594765952
        },
        {
          "trade_date": "2026-05-13",
          "state": 2,
          "probabilities": [
            1.872199451283777e-15,
            1.3027633701092548e-26,
            0.9999999984031407,
            1.5968574629735464e-09
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            1.9586235440132388e-11,
            2.958635712138751e-25,
            0.9999999911275357,
            8.852878007719015e-09
          ],
          "jump_probability": 0.16638941052466089,
          "jump_score": 0.8487517508386118
        },
        {
          "trade_date": "2026-05-14",
          "state": 2,
          "probabilities": [
            4.458465937540132e-17,
            9.463442857901016e-84,
            0.9999999999436577,
            5.634220163143114e-11
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            4.664184918630213e-13,
            2.1491908780062488e-82,
            0.999999999687176,
            3.1235759934206975e-10
          ],
          "jump_probability": 0.25001700038027785,
          "jump_score": 1.2947638069318357
        },
        {
          "trade_date": "2026-05-15",
          "state": 2,
          "probabilities": [
            2.9779271503115947e-22,
            0.0,
            0.9999999976049185,
            2.3950814057186685e-09
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            2.8923358230222057e-18,
            0.0,
            0.9999999867299034,
            1.3270096550931555e-08
          ],
          "jump_probability": 0.5490038310378872,
          "jump_score": 2.420997021539514
        },
        {
          "trade_date": "2026-05-18",
          "state": 2,
          "probabilities": [
            5.85649358474748e-20,
            0.0,
            0.9999908414930201,
            9.158506979928404e-06
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            6.126517376463584e-16,
            0.0,
            0.9999492279264687,
            5.0772073530728206e-05
          ],
          "jump_probability": 0.3025449863144955,
          "jump_score": 1.523732144692044
        },
        {
          "trade_date": "2026-05-19",
          "state": 2,
          "probabilities": [
            3.0649047778049916e-16,
            2.092706195686861e-13,
            0.9999999986329697,
            1.366820754601734e-09
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            3.2063758435531134e-12,
            4.75263207142607e-12,
            0.9999999924144725,
            7.577568681379147e-09
          ],
          "jump_probability": 0.0943851847715875,
          "jump_score": 0.2837130895381499
        },
        {
          "trade_date": "2026-05-20",
          "state": 2,
          "probabilities": [
            3.2640658544103615e-18,
            2.8152533136898877e-119,
            0.9999999995565202,
            4.434797847402629e-10
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            3.414738229208201e-14,
            6.393570098986109e-118,
            0.9999999975413416,
            2.4586242163287252e-09
          ],
          "jump_probability": 0.20607427045926166,
          "jump_score": 1.0771710632793312
        },
        {
          "trade_date": "2026-05-21",
          "state": 2,
          "probabilities": [
            5.179337335118924e-17,
            1.9395555529550826e-116,
            0.9999999998465764,
            1.5342359519981748e-10
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            5.418364691330852e-13,
            4.4048193964474785e-115,
            0.9999999991488875,
            8.505707575068843e-10
          ],
          "jump_probability": 0.14041641997052168,
          "jump_score": 0.6744907594765952
        },
        {
          "trade_date": "2026-05-22",
          "state": 2,
          "probabilities": [
            1.9287809059139227e-13,
            4.387752134204221e-15,
            0.9999999986283497,
            1.3714530522533308e-09
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            1.9287809059139227e-13,
            4.387752134204221e-15,
            0.9999999986283497,
            1.3714530522533308e-09
          ],
          "jump_probability": 0.08770478390607545,
          "jump_score": 0.213489397277213
        }
      ],
      "methodology": {
        "estimation_window_days": 246,
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
        "market_link_display": "3.65",
        "sector_link_display": "0.83",
        "market_link_explainer": "Very high market link. A 1% market move has lined up with about a 3.65% stock move in the same direction in this state. This is a point estimate from 246 trading days.",
        "sector_link_explainer": "Moderate sector link. A 1% sector move has lined up with about a 0.83% stock move in the same direction in this state. This is a point estimate from 246 trading days.",
        "stock_persistence_display": "0.05",
        "point_estimate_note": "Point estimate only because the current state has 246 trading days.",
        "history_limited_note": "Read is based on 246 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "Stressed / Illiquid",
        "dominant_driver": "market",
        "dominant_driver_label": "Market",
        "driver_share_pct": 88.6,
        "driver_share_display": "88.6%",
        "confidence_label": "High, limited history",
        "confidence_pct": 99.9,
        "confidence_display": ">99.9%",
        "probability_basis": "filtered",
        "display_confidence_pct": null,
        "confidence_note": "Based on 246 trading days relative to the 252-day target.",
        "history_days": 246,
        "history_limited": true,
        "volatility_label": "Stressed / Illiquid",
        "jump_risk_label": "Contained",
        "jump_risk_probability": 26.1,
        "jump_risk_score": 0.21,
        "jump_risk_note": "Jump risk is contained based on recent residual and return shocks.",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.8774975119851045,
        "effective_days": 57.4,
        "persistence_note": "This state looks more persistent, with a typical run length of about 8.2 days.",
        "expected_duration_days": 8.2
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
          "pct_time": 0.48407293086712394,
          "expected_duration_days": 23.753653631000173,
          "current_probability": 1.9287809059139227e-13,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 119.08194099331249,
          "volatility": {
            "median": 0.035990598543515696,
            "low": 0.035990598543515696,
            "high": 0.035990598543515696
          },
          "volatility_label": "Calm / Liquid",
          "jump_probability": 0.22792206736525575,
          "jump_rate": 0.026368462306259454,
          "risk_score": 0.12243096926282199,
          "metrics": {
            "rolling_vol_10d": 0.03821020886258498,
            "downside_vol_10d": 0.022790359939551127,
            "drawdown_21d": 0.17654070355341972,
            "amihud_stress": 1.7428867860112742,
            "spread_rel": 255.95968776548554,
            "spread_ticks": 11.42819173687859,
            "log_notional": 13.086212340190853,
            "log_trade_count": 3.7082136166923636
          }
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "pct_time": 0.10569004421287995,
          "expected_duration_days": 2.894726658400886,
          "current_probability": 4.387752134204221e-15,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 25.999750876368466,
          "volatility": {
            "median": 0.0024840947597445937,
            "low": 0.0024840947597445937,
            "high": 0.0024840947597445937
          },
          "volatility_label": "Normal / Active",
          "jump_probability": 0.1726938569807843,
          "jump_rate": 0.07692128930771858,
          "risk_score": 0.1661798298037929,
          "metrics": {
            "rolling_vol_10d": 0.058358586195393115,
            "downside_vol_10d": 0.01753637043520043,
            "drawdown_21d": 0.07466729137860074,
            "amihud_stress": 0.6580383137026848,
            "spread_rel": 925.8591510438757,
            "spread_ticks": 17.08687884104104,
            "log_notional": 2.399047046069076,
            "log_trade_count": 0.29529040341517104
          }
        },
        {
          "id": 2,
          "label": "Stressed / Illiquid",
          "pct_time": 0.23338784944466598,
          "expected_duration_days": 8.163099510912845,
          "current_probability": 0.9999999986283497,
          "current_probability_display": ">99.9%",
          "current_probability_basis": "filtered",
          "n_days_effective": 57.41341096338783,
          "volatility": {
            "median": 0.04636829159228757,
            "low": 0.04636829159228757,
            "high": 0.04636829159228757
          },
          "volatility_label": "Stressed / Illiquid",
          "jump_probability": 0.26125102776343556,
          "jump_rate": 0.11255988505644106,
          "risk_score": 0.24368089365295637,
          "metrics": {
            "rolling_vol_10d": 0.07727142031407651,
            "downside_vol_10d": 0.03242030452369325,
            "drawdown_21d": 0.1921107762082291,
            "amihud_stress": 2.189902684418173,
            "spread_rel": 263.79592043180264,
            "spread_ticks": 9.727206032922961,
            "log_notional": 12.540097720008758,
            "log_trade_count": 3.4288070736103444
          }
        },
        {
          "id": 3,
          "label": "Jump / Tail Shock",
          "pct_time": 0.17684917547533016,
          "expected_duration_days": 2.735458754610884,
          "current_probability": 1.3714530522533308e-09,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 43.50489716693122,
          "volatility": {
            "median": 0.8067517712972317,
            "low": 0.8067517712972317,
            "high": 0.8067517712972317
          },
          "volatility_label": "Jump / Tail Shock",
          "jump_probability": 0.44146686652101014,
          "jump_rate": 0.37691414294845915,
          "risk_score": 0.8387251028352759,
          "metrics": {
            "rolling_vol_10d": 0.4740573192462627,
            "downside_vol_10d": 0.055486329430672485,
            "drawdown_21d": 0.13224225976783352,
            "amihud_stress": 2.2076353855943798,
            "spread_rel": 323.1242703561548,
            "spread_ticks": 8.839379327404018,
            "log_notional": 14.665028203958418,
            "log_trade_count": 5.315163025095219
          }
        }
      ],
      "transitions": [
        [
          0.9579012131971593,
          8.40162872827818e-05,
          8.387776068880543e-05,
          0.04193089275486915
        ],
        [
          0.00038443698421059685,
          0.6545442392296815,
          0.03863847091507533,
          0.3064328528710327
        ],
        [
          0.05255519715829835,
          0.017859652857819694,
          0.8774975119851045,
          0.05208763799877731
        ],
        [
          0.04666962495685479,
          0.1606192153509346,
          0.15828055397183619,
          0.6344306057203744
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.9579012131971593,
            8.40162872827818e-05,
            8.387776068880543e-05,
            0.04193089275486915
          ],
          [
            0.00038443698421059685,
            0.6545442392296815,
            0.03863847091507533,
            0.3064328528710327
          ],
          [
            0.05255519715829835,
            0.017859652857819694,
            0.8774975119851045,
            0.05208763799877731
          ],
          [
            0.04666962495685479,
            0.1606192153509346,
            0.15828055397183619,
            0.6344306057203744
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            114.0,
            0.0,
            0.0,
            5.0
          ],
          [
            0.0,
            17.0,
            1.0,
            8.0
          ],
          [
            3.0,
            1.0,
            49.0,
            3.0
          ],
          [
            2.0,
            7.0,
            7.0,
            28.0
          ]
        ]
      },
      "current_regime": 2,
      "current_regime_label": "Stressed / Illiquid",
      "current_regime_probability": 0.9999999986283497,
      "current_regime_probability_display": ">99.9%",
      "current_probability_basis": "filtered",
      "historical_probability_basis": "smoothed",
      "current_state_is_transition": false,
      "state_probabilities": [
        {
          "id": 0,
          "label": "Calm / Liquid",
          "probability": 1.9287809059139227e-13,
          "probability_display": "<0.1%",
          "basis": "filtered"
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "probability": 4.387752134204221e-15,
          "probability_display": "<0.1%",
          "basis": "filtered"
        },
        {
          "id": 2,
          "label": "Stressed / Illiquid",
          "probability": 0.9999999986283497,
          "probability_display": ">99.9%",
          "basis": "filtered"
        },
        {
          "id": 3,
          "label": "Jump / Tail Shock",
          "probability": 1.3714530522533308e-09,
          "probability_display": "<0.1%",
          "basis": "filtered"
        }
      ],
      "jump_risk": {
        "current_probability": 0.2612510280105863,
        "current_score": 0.213489397277213,
        "current_flag": false,
        "jump_threshold_score": 2.5,
        "method": "robust_residual_and_return_jump_overlay",
        "model_definition": "jump_score_feature_overlay"
      },
      "model_selection": {
        "chosen": 4,
        "criterion": "bic_with_min_state_support",
        "bic": 12876.074162285127,
        "loglik": -5912.277919461023,
        "n_params": 191,
        "bic_delta_vs_next_best": 804.6961222144782,
        "candidates": [
          {
            "k": 2,
            "valid": true,
            "reason": "ok",
            "bic": 14408.998696925815,
            "loglik": -6954.006763577985,
            "n_params": 91,
            "converged": true,
            "iterations": 20,
            "best_seed": 1337,
            "seed_runs": [
              {
                "seed": 42,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 14408.998711830636,
                "loglik": -6954.006771030396,
                "n_params": 91,
                "converged": true,
                "iterations": 19
              },
              {
                "seed": 1337,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 14408.998696925815,
                "loglik": -6954.006763577985,
                "n_params": 91,
                "converged": true,
                "iterations": 20
              },
              {
                "seed": 2027,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 14408.998704912678,
                "loglik": -6954.006767571416,
                "n_params": 91,
                "converged": true,
                "iterations": 19
              }
            ]
          },
          {
            "k": 3,
            "valid": true,
            "reason": "ok",
            "bic": 13680.770284499606,
            "loglik": -6455.011934734537,
            "n_params": 140,
            "converged": true,
            "iterations": 23,
            "best_seed": 2027,
            "seed_runs": [
              {
                "seed": 42,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 13680.770288783,
                "loglik": -6455.011936876234,
                "n_params": 140,
                "converged": true,
                "iterations": 24
              },
              {
                "seed": 1337,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 13712.902239223306,
                "loglik": -6471.077912096387,
                "n_params": 140,
                "converged": true,
                "iterations": 19
              },
              {
                "seed": 2027,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 13680.770284499606,
                "loglik": -6455.011934734537,
                "n_params": 140,
                "converged": true,
                "iterations": 23
              }
            ]
          },
          {
            "k": 4,
            "valid": true,
            "reason": "ok",
            "bic": 12876.074162285127,
            "loglik": -5912.277919461023,
            "n_params": 191,
            "converged": true,
            "iterations": 28,
            "best_seed": 2027,
            "seed_runs": [
              {
                "seed": 42,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 12876.074163560223,
                "loglik": -5912.277920098571,
                "n_params": 191,
                "converged": true,
                "iterations": 31
              },
              {
                "seed": 1337,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 12876.07416359952,
                "loglik": -5912.277920118219,
                "n_params": 191,
                "converged": true,
                "iterations": 28
              },
              {
                "seed": 2027,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 12876.074162285127,
                "loglik": -5912.277919461023,
                "n_params": 191,
                "converged": true,
                "iterations": 28
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
              "bic": 12876.074163560223,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 4,
              "bic": 12876.07416359952,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 4,
              "bic": 12876.074162285127,
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
                "2": 5999.107622143785,
                "3": 5590.810474451012,
                "4": 5432.208973700491
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
                "2": 8774.895780071141,
                "3": 8705.328371986256,
                "4": 8083.975038005207
              },
              "valid": true
            },
            {
              "window_days": 246,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 4,
              "bic_by_state": {
                "2": 14408.998711830636,
                "3": 13680.770288783,
                "4": 12876.074169623913
              },
              "valid": true
            }
          ],
          "stable": true
        }
      },
      "robustness_diagnostics": {
        "history_used_days": 246,
        "n_features": 22,
        "candidate_states": [
          2,
          3,
          4
        ],
        "selected_states": 4,
        "bic_delta_vs_next_best": 804.6961222144782,
        "state_count_interpretation": "246 observations allowed the current rule to test up to 4 states; BIC preferred 4 with a 804.70 improvement versus the next best valid state count.",
        "parameter_count": {
          "formula": "k^2 - 1 + 2*k*d",
          "n_parameters": 191,
          "observations_per_parameter": 1.287958115183246,
          "parameter_pressure_label": "parameter_heavy"
        },
        "state_occupancy": {
          "min_effective_days_required": 7.38,
          "min_effective_days_observed": 25.999750876368466,
          "passes": true,
          "states": [
            {
              "id": 0,
              "label": "Calm / Liquid",
              "effective_days": 119.08194099331249,
              "pct_time": 0.48407293086712394,
              "passes_min_support": true
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "effective_days": 25.999750876368466,
              "pct_time": 0.10569004421287995,
              "passes_min_support": true
            },
            {
              "id": 2,
              "label": "Stressed / Illiquid",
              "effective_days": 57.41341096338783,
              "pct_time": 0.23338784944466598,
              "passes_min_support": true
            },
            {
              "id": 3,
              "label": "Jump / Tail Shock",
              "effective_days": 43.50489716693122,
              "pct_time": 0.17684917547533016,
              "passes_min_support": true
            }
          ]
        },
        "transition_diagnostics": {
          "self_transition_probabilities": [
            0.9579012131971593,
            0.6545442392296815,
            0.8774975119851045,
            0.6344306057203744
          ],
          "expected_duration_days": [
            23.753653631000173,
            2.894726658400886,
            8.163099510912845,
            2.735458754610884
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
              "bic": 12876.074163560223,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 4,
              "bic": 12876.07416359952,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 4,
              "bic": 12876.074162285127,
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
                "2": 5999.107622143785,
                "3": 5590.810474451012,
                "4": 5432.208973700491
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
                "2": 8774.895780071141,
                "3": 8705.328371986256,
                "4": 8083.975038005207
              },
              "valid": true
            },
            {
              "window_days": 246,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 4,
              "bic_by_state": {
                "2": 14408.998711830636,
                "3": 13680.770288783,
                "4": 12876.074169623913
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
            "risk_score": 0.12243096926282199,
            "jump_probability": 0.22792206736525575,
            "jump_rate": 0.026368462306259454,
            "rolling_vol_10d": 0.03821020886258498,
            "downside_vol_10d": 0.022790359939551127,
            "drawdown_21d": 0.17654070355341972,
            "amihud_stress": 1.7428867860112742,
            "spread_rel": 255.95968776548554,
            "spread_ticks": 11.42819173687859,
            "log_notional": 13.086212340190853,
            "log_trade_count": 3.7082136166923636
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "risk_score": 0.1661798298037929,
            "jump_probability": 0.1726938569807843,
            "jump_rate": 0.07692128930771858,
            "rolling_vol_10d": 0.058358586195393115,
            "downside_vol_10d": 0.01753637043520043,
            "drawdown_21d": 0.07466729137860074,
            "amihud_stress": 0.6580383137026848,
            "spread_rel": 925.8591510438757,
            "spread_ticks": 17.08687884104104,
            "log_notional": 2.399047046069076,
            "log_trade_count": 0.29529040341517104
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "risk_score": 0.24368089365295637,
            "jump_probability": 0.26125102776343556,
            "jump_rate": 0.11255988505644106,
            "rolling_vol_10d": 0.07727142031407651,
            "downside_vol_10d": 0.03242030452369325,
            "drawdown_21d": 0.1921107762082291,
            "amihud_stress": 2.189902684418173,
            "spread_rel": 263.79592043180264,
            "spread_ticks": 9.727206032922961,
            "log_notional": 12.540097720008758,
            "log_trade_count": 3.4288070736103444
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "risk_score": 0.8387251028352759,
            "jump_probability": 0.44146686652101014,
            "jump_rate": 0.37691414294845915,
            "rolling_vol_10d": 0.4740573192462627,
            "downside_vol_10d": 0.055486329430672485,
            "drawdown_21d": 0.13224225976783352,
            "amihud_stress": 2.2076353855943798,
            "spread_rel": 323.1242703561548,
            "spread_ticks": 8.839379327404018,
            "log_notional": 14.665028203958418,
            "log_trade_count": 5.315163025095219
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
          "state": 3,
          "probabilities": [
            8.352721065547954e-28,
            0.0,
            2.1683488417992664e-05,
            0.999978316511582
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            1.5761586509162228e-24,
            0.0,
            3.911277863812761e-06,
            0.9999960887221362
          ],
          "jump_probability": 0.8867497114576637,
          "jump_score": 4.039532570491718
        },
        {
          "trade_date": "2026-05-12",
          "state": 2,
          "probabilities": [
            7.462881056949732e-16,
            6.182997202465071e-21,
            0.9999996928881109,
            3.0711188835236536e-07
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            7.80726894793351e-12,
            1.404184951689479e-19,
            0.9999982973856092,
            1.7026065834753583e-06
          ],
          "jump_probability": 0.14041641997052168,
          "jump_score": 0.6744907594765952
        },
        {
          "trade_date": "2026-05-13",
          "state": 2,
          "probabilities": [
            1.872199451283777e-15,
            1.3027633701092548e-26,
            0.9999999984031407,
            1.5968574629735464e-09
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            1.9586235440132388e-11,
            2.958635712138751e-25,
            0.9999999911275357,
            8.852878007719015e-09
          ],
          "jump_probability": 0.16638941052466089,
          "jump_score": 0.8487517508386118
        },
        {
          "trade_date": "2026-05-14",
          "state": 2,
          "probabilities": [
            4.458465937540132e-17,
            9.463442857901016e-84,
            0.9999999999436577,
            5.634220163143114e-11
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            4.664184918630213e-13,
            2.1491908780062488e-82,
            0.999999999687176,
            3.1235759934206975e-10
          ],
          "jump_probability": 0.25001700038027785,
          "jump_score": 1.2947638069318357
        },
        {
          "trade_date": "2026-05-15",
          "state": 2,
          "probabilities": [
            2.9779271503115947e-22,
            0.0,
            0.9999999976049185,
            2.3950814057186685e-09
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            2.8923358230222057e-18,
            0.0,
            0.9999999867299034,
            1.3270096550931555e-08
          ],
          "jump_probability": 0.5490038310378872,
          "jump_score": 2.420997021539514
        },
        {
          "trade_date": "2026-05-18",
          "state": 2,
          "probabilities": [
            5.85649358474748e-20,
            0.0,
            0.9999908414930201,
            9.158506979928404e-06
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            6.126517376463584e-16,
            0.0,
            0.9999492279264687,
            5.0772073530728206e-05
          ],
          "jump_probability": 0.3025449863144955,
          "jump_score": 1.523732144692044
        },
        {
          "trade_date": "2026-05-19",
          "state": 2,
          "probabilities": [
            3.0649047778049916e-16,
            2.092706195686861e-13,
            0.9999999986329697,
            1.366820754601734e-09
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            3.2063758435531134e-12,
            4.75263207142607e-12,
            0.9999999924144725,
            7.577568681379147e-09
          ],
          "jump_probability": 0.0943851847715875,
          "jump_score": 0.2837130895381499
        },
        {
          "trade_date": "2026-05-20",
          "state": 2,
          "probabilities": [
            3.2640658544103615e-18,
            2.8152533136898877e-119,
            0.9999999995565202,
            4.434797847402629e-10
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            3.414738229208201e-14,
            6.393570098986109e-118,
            0.9999999975413416,
            2.4586242163287252e-09
          ],
          "jump_probability": 0.20607427045926166,
          "jump_score": 1.0771710632793312
        },
        {
          "trade_date": "2026-05-21",
          "state": 2,
          "probabilities": [
            5.179337335118924e-17,
            1.9395555529550826e-116,
            0.9999999998465764,
            1.5342359519981748e-10
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            5.418364691330852e-13,
            4.4048193964474785e-115,
            0.9999999991488875,
            8.505707575068843e-10
          ],
          "jump_probability": 0.14041641997052168,
          "jump_score": 0.6744907594765952
        },
        {
          "trade_date": "2026-05-22",
          "state": 2,
          "probabilities": [
            1.9287809059139227e-13,
            4.387752134204221e-15,
            0.9999999986283497,
            1.3714530522533308e-09
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            1.9287809059139227e-13,
            4.387752134204221e-15,
            0.9999999986283497,
            1.3714530522533308e-09
          ],
          "jump_probability": 0.08770478390607545,
          "jump_score": 0.213489397277213
        }
      ]
    }
  },
  "theme": {
    "badges": {
      "liq_section": {
        "text": "Liquidity score: 52.0 — Weak",
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
    "liq_subtitle": "Liquidity remains weak for the company’s size, with peer standing still the clearest constraint on access.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Returns have materially outperformed, with 1M performance at +43.0% compared with peers at -5.5% and ahead of the market at +2.1%, leaving the stock on a much stronger tape than its main comparison groups.",
    "perf_insight": "The stronger price backdrop is not matched by stronger liquidity, as the 6M liquidity score of 52.0 sits 10.2 points below the peer median and market factors still explain 88.6% of trading. That matters because recent performance looks more market-led than liquidity-led.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Trading is being driven mainly by the broader market, with market factors accounting for 88.6% of the tape.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly market-driven, accounting for about 88.6% of price changes. Other influences are sector 8.9%, and company-specific 2.5%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 88.6%, sector 8.9%, and company-specific 2.5%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has been consistently company-driven across Mar to May."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 88.6%, sector 8.9%, and company-specific 2.5%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "That matters because current trading is being shaped more by external moves than by a clear improvement in underlying liquidity.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now is the market, accounting for 88.6% of recent price moves.",
      "The monthly pattern was more company-driven from March through May, so the current read is more market-led than it was recently."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "The stock remains in a weak liquidity regime for its size, even as the immediate order book looks steadier than the longer-term standing.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on May 23, 2025 to May 22, 2026 (224 trading days • 68,849 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on the displayed order book.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate displayed depth broadly matches the stronger monthly liquidity read.",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The current book is more balanced than the six-month liquidity profile, with displayed bid depth at 1.62x ask depth alongside an 8-tick spread. That matters because immediate trading access is holding up better than the broader peer-relative picture.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 52.6% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Immediate execution looks steadier than the structural liquidity profile.",
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
    "intraday_insight": "Session split is open 0.0%, continuous 99.3%, and close 0.7%. Current trading concentration score is 0.327.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Short activity is not a defining feature of the current trading picture.",
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
    "exec_subtitle": "Trading access screens below peers for the company’s size, even with strong recent share-price performance.",
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
        "value": "52.0/100",
        "sub": "Peer median 62.2 (-10.2 pts)",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "HK$237.3K",
        "sub": "Peer median HK$1.8M",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "2.77%",
        "sub": "9.06 ticks; peers 1.62%",
        "interp": {
          "text": "Wider",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity is weak for the company’s size, and peer standing remains the clearest signal. The 6M liquidity score is 52.0, which sits 10.2 points below the peer median of 62.2, and that matters because access already screens below peers before current conditions are considered. Recent activity is quieter, with 1D average volume down 34.6% from the 1M average, which leaves the near-term trading backdrop less supportive.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "4.800",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "1.67%",
        "note": "8.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "1.62x",
        "note": "Bid depth / ask depth on the displayed order book",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-1.12% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-2.03% with 33.9% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-2.03% with 13.5% fill.",
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
        "value": "52",
        "suffix": "/100",
        "bar_pct": 52,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Rank 1236/2571",
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
        "value": "2.77",
        "suffix": "%",
        "bar_pct": 28,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "2.77% • 9.06 ticks vs peers 1.62%",
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
        "value": "237.3K",
        "value_prefix": "HK$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-red-400",
        "color_bar": "bg-red-500",
        "subtext": "Peer median HK$1.8M",
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
        "value": "88.6",
        "suffix": "market",
        "bar_pct": 89,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Sector 8.9% • Company 2.5%",
        "interpretation": {
          "text": "Market",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is weak relative to peers, with a 6M liquidity score of 52.0 compared with a peer median of 62.2. That leaves the stock starting from a lower base of trading access before day-to-day conditions are considered.",
      "Recent flow is quieter than the monthly average, with 1D average volume down 34.6% from 1M. That points to a less active latest session rather than a stronger liquidity backdrop.",
      "The tape is being driven mainly by broader market moves, with market factors explaining 88.6% of trading, while the stock is up 43.0% over 1M. Immediate depth is more supportive, with displayed bid depth at 1.62x ask depth despite an 8-tick spread."
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
      "overall": "6M liquidity is weak: score 52.0 vs peer median 62.2 (-10.2 pts). 1D average volume down -34.6% from 1M. Recent flow does not show a clear deterioration from the monthly baseline.",
      "strengths": [
        "6M score 52.0 vs peer median 62.2 (-10.2 pts)."
      ],
      "concerns": [
        "1D average volume down -34.6% from 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: -10.2 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is 16.4%, better than sector and peers, which suggests stronger price performance than comparable names.",
        "vs_market": "In line with market: 16.4% vs market 15.0%.",
        "vs_sector": "Better than sector: 16.4% vs sector -2.4%.",
        "vs_peers": "Better than peers: 16.4% vs peers -17.9%."
      },
      "adv": {
        "insight": "ADV is HK$237.3K, better than market and sector, but worse than peers, which shows trading size is uneven across comparison groups.",
        "vs_market": "Better than market: HK$237.3K vs market HK$211.0K.",
        "vs_sector": "Better than sector: HK$237.3K vs sector HK$36.8K.",
        "vs_peers": "Worse than peers: HK$237.3K vs peers HK$1.8M."
      },
      "spread": {
        "insight": "Spread is 2.77%, better than sector, but worse than peers, which shows execution cost is mixed across comparison groups.",
        "vs_market": "In line with market: 2.77% vs market 2.77%.",
        "vs_sector": "Better than sector: 2.77% vs sector 5.46%.",
        "vs_peers": "Worse than peers: 2.77% vs peers 1.62%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.13%, better than market and sector, but worse than peers, which shows turnover is mixed across comparison groups.",
        "vs_market": "Better than market: 0.13% vs market 0.08%.",
        "vs_sector": "Better than sector: 0.13% vs sector 0.02%.",
        "vs_peers": "Worse than peers: 0.13% vs peers 0.19%."
      },
      "volatility": {
        "insight": "Volatility is 105.58%, worse than market, sector, and peers, which suggests day-to-day price swings are heavier than comparable names.",
        "vs_market": "Worse than market: 105.58% vs market 60.32%.",
        "vs_sector": "Worse than sector: 105.58% vs sector 78.36%.",
        "vs_peers": "Worse than peers: 105.58% vs peers 55.98%."
      },
      "trades": {
        "insight": "Trades is 25, better than market and sector, but worse than peers, which shows trading frequency is mixed across comparison groups.",
        "vs_market": "Better than market: 25 vs market 19.",
        "vs_sector": "Better than sector: 25 vs sector 7.",
        "vs_peers": "Worse than peers: 25 vs peers 70."
      },
      "amihud": {
        "insight": "Price impact is 1.05e-07, better than sector, but worse than market and peers, which shows price impact is mixed across comparison groups.",
        "vs_market": "Worse than market: 1.05e-07 vs market 4.76e-08.",
        "vs_sector": "Better than sector: 1.05e-07 vs sectoe-07.",
        "vs_peers": "Worse than peers: 1.05e-07 vs peers 6.91e-09."
      }
    },
    "performance": {
      "overall": "Performance is strong relative to comparison groups. Recent price performance is stronger than the main comparison groups, so the tape has a firmer return backdrop than peers. Recent flow does not show a clear deterioration from the monthly baseline.",
      "conclusion": "The move looks mainly broad-market rather than company-specific, and the liquidity backdrop does not fully confirm the strength of the recent return."
    },
    "drivers": {
      "overall": "The stock is being driven mainly by the broader market now, with market factors explaining 88.6% of recent price moves. That matters because near-term price action is being shaped more by external conditions than by company-specific developments.",
      "beta": "The current pattern looks real but not especially broad, because 1D average volume is down 34.6% from the 1M average. That matters because market-led moves can still dominate the tape even as participation pulls back.",
      "rolling_change": "This is a change from the recent monthly pattern, which was more mixed in March and then mostly market in April and May. That matters because the stock has shifted from trading on its own story to trading more in line with the wider market."
    },
    "regime": {
      "overall": "The active backdrop is stressed and illiquid, and its typical duration of about 8.2 days suggests this is more than a one-day disturbance. That matters because weaker liquidity can persist long enough to shape execution quality rather than just create a brief interruption.",
      "current": "The stock is currently in a stressed, illiquid state, while 1D average volume is 34.6% below the 1M average. That points to a thinner market today, even with a strong recent price backdrop.",
      "transitions": "This state looks relatively persistent, with a typical run length of about 8.2 days, although the signals are mixed. That suggests the backdrop is more settled than fleeting, but still changeable.",
      "trading_implications": "This state looks more persistent, with a typical run length of about 8.2 days."
    },
    "execution": {
      "overall": "Displayed liquidity looks balanced at the screen, with bid depth 1.62x the ask side and an 8-tick spread. That matters because the book is showing usable two-way depth even as recent trading activity has pulled back.",
      "concern": "The main watchpoint is thinner recent activity, with 1D average volume down 34.6% from the 1M average. That matters because a balanced book can still prove less durable if turnover stays below the recent average.",
      "peer_context": "The displayed book is firmer than the broader liquidity ranking implies, as current depth looks orderly even though the six-month liquidity score of 52.0 sits 10.2 points below the peer median of 62.2. That matters because the screen is not currently reinforcing the weaker peer standing."
    },
    "trader_composition": {
      "overall": "By trade count and value, flow looks mainly retail-like.",
      "retail_heavy": "Retail-like trades account for 97.9% of trade count and 83.2% of trade value, while institution-like trades are 0.0% on both measures. That alignment across count and value makes the retail read clear rather than mixed.",
      "institutional_gap": "The absence of institution-like trades in both count and value leaves little sign of a meaningful institutional offset in the current flow mix.",
      "peer_comparison": "The current mix looks unusually retail-heavy relative to a typical peer set, which matters because peer liquidity is usually supported by a broader buyer base."
    },
    "price_moving": {
      "overall": "Price-moving activity is present, but the cleaner signal is that the tape is being set by a retail-leaning flow mix rather than by institutional participation. Retail-like trades dominate both count and value, while market factors explain 88.6% of current trading. That suggests price formation is being driven more by broad market direction than by company-specific institutional conviction. Positive and negative price-moving trade asymmetry is available in the report data.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short-selling data is unavailable for this report.",
      "level": "N/A",
      "correlation": "N/A",
      "trend": "There is no clear sign that short activity is becoming a separate driver of trading conditions. Recent average volume is down 34.6% from the 1M average, but the stronger read is still the stock’s 43.0% 1M return compared with peers at -5.5%, so short activity does not look like it is changing the broader picture.",
      "peaks": "N/A"
    },
    "intraday": {
      "overall": "Liquidity appears during the continuous session rather than at the open or close, with 99.3% of activity in continuous trading. That makes access look steadier through the day even with weaker structural liquidity.",
      "hhi_interpretation": "A concentration score of 0.327 indicates trading is not heavily confined to a few points in the session. That matters because liquidity that is spread through the day is typically easier to access consistently.",
      "best_times": "Peak buckets show where activity clusters through the day.",
      "peer_ranking": "Peer comparison on intraday concentration indicates this name’s liquidity profile may be judged against a market where stronger names often pair steadier intraday access with a broader trader base."
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
        "1328",
        "1483",
        "2443",
        "6100",
        "331",
        "2521",
        "6959",
        "2508",
        "1463"
      ],
      "scores": [
        51.96421625826526,
        34.61688059120965,
        74.60132244262932,
        74.52353169972773,
        56.86503306106573,
        67.4834694671334,
        37.222870478413064,
        75.69039284325166,
        7.040062232594321
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
        237320.0,
        137470.0,
        5595703.0,
        3147789.84,
        500550.0,
        3945112.5,
        49457.5,
        7226430.0,
        0.0
      ],
      "total": 2571
    },
    "market_comparison": {
      "sector_name": "Other Support Services",
      "sector_count": 42,
      "market_count": 2571,
      "company": {
        "volatility": 1.0558416899206184,
        "adv": 237320.0,
        "spread_pct": 0.02767971574641715,
        "turnover_ratio": 0.0012772373837091327,
        "amihud": 1.0478772866594071e-07,
        "trades": 25.0
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
          "mean": 55728699.61312614,
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
          "mean": 6.11410409475225e-07,
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
          "mean": 0.8675580448288118,
          "median": 0.783645890405926,
          "min": 0.1007885584572137,
          "max": 1.9582271008293164,
          "p5": 0.24742089461736155,
          "p95": 1.8454040221342658,
          "count": 42
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 736322.7019642858,
          "median": 36833.901249999995,
          "min": 0.0,
          "max": 7226430.0,
          "p5": 0.0,
          "p95": 5114161.124999994,
          "count": 42
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.06154301463925292,
          "median": 0.05457228946265362,
          "min": 0.004669282534214528,
          "max": 0.21009110060003078,
          "p5": 0.005422508508999398,
          "p95": 0.12878210017936845,
          "count": 42
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0015494459568027264,
          "median": 0.00024913986585666,
          "min": 0.0,
          "max": 0.015150284501657344,
          "p5": 0.0,
          "p95": 0.0070757430858899234,
          "count": 42
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.117788752833457e-06,
          "median": 2.8804275875918094e-07,
          "min": 2.2634295913480702e-09,
          "max": 1.5318627450980392e-05,
          "p5": 3.343159239740306e-09,
          "p95": 3.24343766883061e-06,
          "count": 42
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 65.53571428571429,
          "median": 7.0,
          "min": 0.0,
          "max": 640.0,
          "p5": 0.0,
          "p95": 481.37499999999966,
          "count": 42
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 2575314.105,
          "median": 1824169.92,
          "min": 0.0,
          "max": 7226430.0,
          "p5": 17310.125,
          "p95": 6655675.549999999,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 230.0,
          "median": 70.25,
          "min": 0.0,
          "max": 640.0,
          "p5": 2.45,
          "p95": 612.0,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.606273705644637,
          "median": 0.5597570970683761,
          "min": 0.1007885584572137,
          "max": 0.9972629715204712,
          "p5": 0.23297970073611973,
          "p95": 0.946029681376797,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.031668203653396634,
          "median": 0.01617624766395398,
          "min": 0.005339545696086024,
          "max": 0.10199503994789143,
          "p5": 0.005359418742132127,
          "p95": 0.08788634783888712,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 5.867761904023498,
          "median": 3.654110192870973,
          "min": 1.5569523657623072,
          "max": 20.88622291021672,
          "p5": 1.6424517739861277,
          "p95": 16.061717968563936,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 7.269810578059112e-08,
          "median": 6.9056226297512295e-09,
          "min": 2.2634295913480702e-09,
          "max": 3.424266128440356e-07,
          "p5": 2.3604751525136826e-09,
          "p95": 2.7697313585586847e-07,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.002538823237253374,
          "median": 0.0018908142217976191,
          "min": 0.0,
          "max": 0.007183159564711768,
          "p5": 5.6587837837837844e-05,
          "p95": 0.006431244212958917,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": 0.4302670623145397,
        "market": 0.02086654266861232,
        "sector": -0.0018069339253068417,
        "peers": -0.05507885709993843
      },
      {
        "horizon": "3M",
        "stock": 0.832699619771863,
        "market": 0.029271276062160734,
        "sector": -0.023664524847017865,
        "peers": -0.15913887020806683
      },
      {
        "horizon": "6M",
        "stock": 0.164251207729468,
        "market": 0.15043005670937237,
        "sector": -0.023664524847017865,
        "peers": -0.17857342895741457
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
      "share_market": 0.8857816275603847,
      "share_sector": 0.08904880273196654,
      "share_idio": 0.02516956970764884,
      "beta_market": 3.6473539981423055,
      "beta_sector": 0.8256992809397204,
      "driver_model": {
        "valid": true,
        "model_method": "ols_with_hmm_jump_regimes",
        "regime_method": "hmm_jump_aware",
        "estimation_window_days": 246,
        "reporting_window_days": 63,
        "available_history_days": 246,
        "n_regimes": 4,
        "current_regime": 2,
        "current_regime_label": "Stressed / Illiquid",
        "current_regime_probability": 0.9999999986283497,
        "current_regime_probability_display": ">99.9%",
        "current_probability_basis": "filtered",
        "historical_probability_basis": "smoothed",
        "current_driver_mix": {
          "market_share": {
            "median": 0.8857816275603847,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "88.6%",
            "display_range": null,
            "display_text": "88.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 246 trading days.",
            "kind": "share_pct",
            "value_pct": 88.6,
            "plain_english": "Market explains about 88.6% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.08904880273196654,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "8.9%",
            "display_range": null,
            "display_text": "8.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 246 trading days.",
            "kind": "share_pct",
            "value_pct": 8.9,
            "plain_english": "Sector explains about 8.9% of price moves in the current state."
          },
          "company_share": {
            "median": 0.02516956970764884,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "2.5%",
            "display_range": null,
            "display_text": "2.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 246 trading days.",
            "kind": "share_pct",
            "value_pct": 2.5,
            "plain_english": "Company-specific explains about 2.5% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 3.6473539981423055,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "3.65",
            "display_range": null,
            "display_text": "3.65",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 246 trading days.",
            "kind": "beta",
            "strength_label": "Very high",
            "plain_english": "Very high market link: a 1% market move has lined up with about a 3.65% stock move in the same direction in this state.",
            "value_num": 3.65
          },
          "beta_stock_lag": {
            "median": 0.045133224399023106,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.05",
            "display_range": null,
            "display_text": "0.05",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 246 trading days.",
            "kind": "lag_beta",
            "value_num": 0.05
          },
          "beta_sector": {
            "median": 0.8256992809397204,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.83",
            "display_range": null,
            "display_text": "0.83",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 246 trading days.",
            "kind": "beta",
            "strength_label": "Moderate",
            "plain_english": "Moderate sector link: a 1% sector move has lined up with about a 0.83% stock move in the same direction in this state.",
            "value_num": 0.83
          },
          "beta_market_lag": {
            "median": 4.757290469711121,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "4.76",
            "display_range": null,
            "display_text": "4.76",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 246 trading days.",
            "kind": "lag_beta",
            "value_num": 4.76
          },
          "beta_sector_lag": {
            "median": 0.5726245223043354,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.57",
            "display_range": null,
            "display_text": "0.57",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 246 trading days.",
            "kind": "lag_beta",
            "value_num": 0.57
          },
          "posterior_source": null,
          "intervals_collapsed": false,
          "confidence_label": "High, limited history",
          "confidence_note": "Based on 246 trading days relative to the 252-day target."
        },
        "rolling_windows": {},
        "monthly_history": [
          {
            "month_key": "2025-05",
            "month_label": "May 2025",
            "month_short_label": "May",
            "period_label": "2025-05-16 to 2025-05-30",
            "n_obs": 11,
            "partial_month": true,
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.3801648021022533,
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
                "median": 0.24131770890702453,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "24.1%",
                "display_range": null,
                "display_text": "24.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
                "kind": "share_pct",
                "value_pct": 24.1,
                "plain_english": "Market explains about 24.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3801648021022533,
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
                "median": 0.37851748899072224,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "37.9%",
                "display_range": null,
                "display_text": "37.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
                "kind": "share_pct",
                "value_pct": 37.9,
                "plain_english": "Company-specific explains about 37.9% of price moves in the current state."
              }
            },
            "summary": "May: More mixed, though sector-driven still has the largest share."
          },
          {
            "month_key": "2025-06",
            "month_label": "June 2025",
            "month_short_label": "Jun",
            "period_label": "2025-06-02 to 2025-06-30",
            "n_obs": 21,
            "partial_month": false,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4740493382675521,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.4%",
              "display_range": null,
              "display_text": "47.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 47.4,
              "plain_english": "Market explains about 47.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.4740493382675521,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "47.4%",
                "display_range": null,
                "display_text": "47.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 47.4,
                "plain_english": "Market explains about 47.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.07525299987843069,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "7.5%",
                "display_range": null,
                "display_text": "7.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 7.5,
                "plain_english": "Sector explains about 7.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4506976618540172,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "45.1%",
                "display_range": null,
                "display_text": "45.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 45.1,
                "plain_english": "Company-specific explains about 45.1% of price moves in the current state."
              }
            },
            "summary": "Jun: Mostly market-driven."
          },
          {
            "month_key": "2025-07",
            "month_label": "July 2025",
            "month_short_label": "Jul",
            "period_label": "2025-07-02 to 2025-07-31",
            "n_obs": 22,
            "partial_month": true,
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.37565705268732313,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.6%",
              "display_range": null,
              "display_text": "37.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 37.6,
              "plain_english": "Sector explains about 37.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.25025651939505067,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "25.0%",
                "display_range": null,
                "display_text": "25.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 25.0,
                "plain_english": "Market explains about 25.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.37565705268732313,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "37.6%",
                "display_range": null,
                "display_text": "37.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 37.6,
                "plain_english": "Sector explains about 37.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3740864279176261,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "37.4%",
                "display_range": null,
                "display_text": "37.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 37.4,
                "plain_english": "Company-specific explains about 37.4% of price moves in the current state."
              }
            },
            "summary": "Jul: More mixed, though sector-driven still has the largest share."
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
              "median": 0.5394786286885116,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "53.9%",
              "display_range": null,
              "display_text": "53.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 53.9,
              "plain_english": "Company-specific explains about 53.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2813831789674975,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "28.1%",
                "display_range": null,
                "display_text": "28.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 28.1,
                "plain_english": "Market explains about 28.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.17913819234399087,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "17.9%",
                "display_range": null,
                "display_text": "17.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 17.9,
                "plain_english": "Sector explains about 17.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5394786286885116,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "53.9%",
                "display_range": null,
                "display_text": "53.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 53.9,
                "plain_english": "Company-specific explains about 53.9% of price moves in the current state."
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
              "median": 0.5468255116951664,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "54.7%",
              "display_range": null,
              "display_text": "54.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 54.7,
              "plain_english": "Company-specific explains about 54.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.24124717234987955,
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
                "plain_english": "Market explains about 24.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.21192731595495412,
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
                "median": 0.5468255116951664,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "54.7%",
                "display_range": null,
                "display_text": "54.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 54.7,
                "plain_english": "Company-specific explains about 54.7% of price moves in the current state."
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
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.569571750352712,
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
                "median": 0.2944446657879194,
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
                "plain_english": "Market explains about 29.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1359835838593687,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "13.6%",
                "display_range": null,
                "display_text": "13.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 13.6,
                "plain_english": "Sector explains about 13.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.569571750352712,
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
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.6806818064468338,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "68.1%",
              "display_range": null,
              "display_text": "68.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 68.1,
              "plain_english": "Company-specific explains about 68.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.062143417455170324,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "6.2%",
                "display_range": null,
                "display_text": "6.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 6.2,
                "plain_english": "Market explains about 6.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2571747760979958,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "25.7%",
                "display_range": null,
                "display_text": "25.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 25.7,
                "plain_english": "Sector explains about 25.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6806818064468338,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "68.1%",
                "display_range": null,
                "display_text": "68.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 68.1,
                "plain_english": "Company-specific explains about 68.1% of price moves in the current state."
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
              "median": 0.5796557209840756,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "58.0%",
              "display_range": null,
              "display_text": "58.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 58.0,
              "plain_english": "Company-specific explains about 58.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2372069611644084,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "23.7%",
                "display_range": null,
                "display_text": "23.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 23.7,
                "plain_english": "Market explains about 23.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.18313731785151602,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "18.3%",
                "display_range": null,
                "display_text": "18.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 18.3,
                "plain_english": "Sector explains about 18.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5796557209840756,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "58.0%",
                "display_range": null,
                "display_text": "58.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 58.0,
                "plain_english": "Company-specific explains about 58.0% of price moves in the current state."
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
              "median": 0.8247359570587904,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "82.5%",
              "display_range": null,
              "display_text": "82.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 82.5,
              "plain_english": "Company-specific explains about 82.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.04442937977107456,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "4.4%",
                "display_range": null,
                "display_text": "4.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 4.4,
                "plain_english": "Market explains about 4.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.130834663170135,
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
                "plain_english": "Sector explains about 13.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.8247359570587904,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "82.5%",
                "display_range": null,
                "display_text": "82.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 82.5,
                "plain_english": "Company-specific explains about 82.5% of price moves in the current state."
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
              "median": 0.6110674202234981,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.1%",
              "display_range": null,
              "display_text": "61.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 61.1,
              "plain_english": "Company-specific explains about 61.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2116083294925706,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "21.2%",
                "display_range": null,
                "display_text": "21.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 21.2,
                "plain_english": "Market explains about 21.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.17732425028393134,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "17.7%",
                "display_range": null,
                "display_text": "17.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 17.7,
                "plain_english": "Sector explains about 17.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6110674202234981,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "61.1%",
                "display_range": null,
                "display_text": "61.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 61.1,
                "plain_english": "Company-specific explains about 61.1% of price moves in the current state."
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
              "median": 0.4201888492043086,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.0%",
              "display_range": null,
              "display_text": "42.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 42.0,
              "plain_english": "Company-specific explains about 42.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.16273422977406002,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "16.3%",
                "display_range": null,
                "display_text": "16.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 16.3,
                "plain_english": "Market explains about 16.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.4170769210216313,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "41.7%",
                "display_range": null,
                "display_text": "41.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 41.7,
                "plain_english": "Sector explains about 41.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4201888492043086,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "42.0%",
                "display_range": null,
                "display_text": "42.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 42.0,
                "plain_english": "Company-specific explains about 42.0% of price moves in the current state."
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
              "median": 0.4680672298535462,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.8%",
              "display_range": null,
              "display_text": "46.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 46.8,
              "plain_english": "Company-specific explains about 46.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.36418606369038975,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "36.4%",
                "display_range": null,
                "display_text": "36.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 36.4,
                "plain_english": "Market explains about 36.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.16774670645606415,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "16.8%",
                "display_range": null,
                "display_text": "16.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 16.8,
                "plain_english": "Sector explains about 16.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4680672298535462,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "46.8%",
                "display_range": null,
                "display_text": "46.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 46.8,
                "plain_english": "Company-specific explains about 46.8% of price moves in the current state."
              }
            },
            "summary": "Apr: Mostly company-driven."
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
              "median": 0.590158683770613,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "59.0%",
              "display_range": null,
              "display_text": "59.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 59.0,
              "plain_english": "Company-specific explains about 59.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2558489224513697,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "25.6%",
                "display_range": null,
                "display_text": "25.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 25.6,
                "plain_english": "Market explains about 25.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1539923937780173,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "15.4%",
                "display_range": null,
                "display_text": "15.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 15.4,
                "plain_english": "Sector explains about 15.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.590158683770613,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "59.0%",
                "display_range": null,
                "display_text": "59.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 59.0,
                "plain_english": "Company-specific explains about 59.0% of price moves in the current state."
              }
            },
            "summary": "May: Mostly company-driven."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "pct_time": 0.48407293086712394,
            "expected_duration_days": 23.753653631000173,
            "current_probability": 1.9287809059139227e-13,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 119.08194099331249,
            "volatility": {
              "median": 0.035990598543515696,
              "low": 0.035990598543515696,
              "high": 0.035990598543515696
            },
            "volatility_label": "Calm / Liquid",
            "jump_probability": 0.22792206736525575,
            "jump_rate": 0.026368462306259454,
            "risk_score": 0.12243096926282199,
            "metrics": {
              "rolling_vol_10d": 0.03821020886258498,
              "downside_vol_10d": 0.022790359939551127,
              "drawdown_21d": 0.17654070355341972,
              "amihud_stress": 1.7428867860112742,
              "spread_rel": 255.95968776548554,
              "spread_ticks": 11.42819173687859,
              "log_notional": 13.086212340190853,
              "log_trade_count": 3.7082136166923636
            }
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "pct_time": 0.10569004421287995,
            "expected_duration_days": 2.894726658400886,
            "current_probability": 4.387752134204221e-15,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 25.999750876368466,
            "volatility": {
              "median": 0.0024840947597445937,
              "low": 0.0024840947597445937,
              "high": 0.0024840947597445937
            },
            "volatility_label": "Normal / Active",
            "jump_probability": 0.1726938569807843,
            "jump_rate": 0.07692128930771858,
            "risk_score": 0.1661798298037929,
            "metrics": {
              "rolling_vol_10d": 0.058358586195393115,
              "downside_vol_10d": 0.01753637043520043,
              "drawdown_21d": 0.07466729137860074,
              "amihud_stress": 0.6580383137026848,
              "spread_rel": 925.8591510438757,
              "spread_ticks": 17.08687884104104,
              "log_notional": 2.399047046069076,
              "log_trade_count": 0.29529040341517104
            }
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "pct_time": 0.23338784944466598,
            "expected_duration_days": 8.163099510912845,
            "current_probability": 0.9999999986283497,
            "current_probability_display": ">99.9%",
            "current_probability_basis": "filtered",
            "n_days_effective": 57.41341096338783,
            "volatility": {
              "median": 0.04636829159228757,
              "low": 0.04636829159228757,
              "high": 0.04636829159228757
            },
            "volatility_label": "Stressed / Illiquid",
            "jump_probability": 0.26125102776343556,
            "jump_rate": 0.11255988505644106,
            "risk_score": 0.24368089365295637,
            "metrics": {
              "rolling_vol_10d": 0.07727142031407651,
              "downside_vol_10d": 0.03242030452369325,
              "drawdown_21d": 0.1921107762082291,
              "amihud_stress": 2.189902684418173,
              "spread_rel": 263.79592043180264,
              "spread_ticks": 9.727206032922961,
              "log_notional": 12.540097720008758,
              "log_trade_count": 3.4288070736103444
            }
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "pct_time": 0.17684917547533016,
            "expected_duration_days": 2.735458754610884,
            "current_probability": 1.3714530522533308e-09,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 43.50489716693122,
            "volatility": {
              "median": 0.8067517712972317,
              "low": 0.8067517712972317,
              "high": 0.8067517712972317
            },
            "volatility_label": "Jump / Tail Shock",
            "jump_probability": 0.44146686652101014,
            "jump_rate": 0.37691414294845915,
            "risk_score": 0.8387251028352759,
            "metrics": {
              "rolling_vol_10d": 0.4740573192462627,
              "downside_vol_10d": 0.055486329430672485,
              "drawdown_21d": 0.13224225976783352,
              "amihud_stress": 2.2076353855943798,
              "spread_rel": 323.1242703561548,
              "spread_ticks": 8.839379327404018,
              "log_notional": 14.665028203958418,
              "log_trade_count": 5.315163025095219
            }
          }
        ],
        "transitions": {
          "mean": [
            [
              0.9579012131971593,
              8.40162872827818e-05,
              8.387776068880543e-05,
              0.04193089275486915
            ],
            [
              0.00038443698421059685,
              0.6545442392296815,
              0.03863847091507533,
              0.3064328528710327
            ],
            [
              0.05255519715829835,
              0.017859652857819694,
              0.8774975119851045,
              0.05208763799877731
            ],
            [
              0.04666962495685479,
              0.1606192153509346,
              0.15828055397183619,
              0.6344306057203744
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              114.0,
              0.0,
              0.0,
              5.0
            ],
            [
              0.0,
              17.0,
              1.0,
              8.0
            ],
            [
              3.0,
              1.0,
              49.0,
              3.0
            ],
            [
              2.0,
              7.0,
              7.0,
              28.0
            ]
          ]
        },
        "current_state_is_transition": false,
        "state_probabilities": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "probability": 1.9287809059139227e-13,
            "probability_display": "<0.1%",
            "basis": "filtered"
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "probability": 4.387752134204221e-15,
            "probability_display": "<0.1%",
            "basis": "filtered"
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "probability": 0.9999999986283497,
            "probability_display": ">99.9%",
            "basis": "filtered"
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "probability": 1.3714530522533308e-09,
            "probability_display": "<0.1%",
            "basis": "filtered"
          }
        ],
        "jump_risk": {
          "current_probability": 0.2612510280105863,
          "current_score": 0.213489397277213,
          "current_flag": false,
          "jump_threshold_score": 2.5,
          "method": "robust_residual_and_return_jump_overlay",
          "model_definition": "jump_score_feature_overlay"
        },
        "model_selection": {
          "chosen": 4,
          "criterion": "bic_with_min_state_support",
          "bic": 12876.074162285127,
          "loglik": -5912.277919461023,
          "n_params": 191,
          "bic_delta_vs_next_best": 804.6961222144782,
          "candidates": [
            {
              "k": 2,
              "valid": true,
              "reason": "ok",
              "bic": 14408.998696925815,
              "loglik": -6954.006763577985,
              "n_params": 91,
              "converged": true,
              "iterations": 20,
              "best_seed": 1337,
              "seed_runs": [
                {
                  "seed": 42,
                  "k": 2,
                  "valid": true,
                  "reason": "ok",
                  "bic": 14408.998711830636,
                  "loglik": -6954.006771030396,
                  "n_params": 91,
                  "converged": true,
                  "iterations": 19
                },
                {
                  "seed": 1337,
                  "k": 2,
                  "valid": true,
                  "reason": "ok",
                  "bic": 14408.998696925815,
                  "loglik": -6954.006763577985,
                  "n_params": 91,
                  "converged": true,
                  "iterations": 20
                },
                {
                  "seed": 2027,
                  "k": 2,
                  "valid": true,
                  "reason": "ok",
                  "bic": 14408.998704912678,
                  "loglik": -6954.006767571416,
                  "n_params": 91,
                  "converged": true,
                  "iterations": 19
                }
              ]
            },
            {
              "k": 3,
              "valid": true,
              "reason": "ok",
              "bic": 13680.770284499606,
              "loglik": -6455.011934734537,
              "n_params": 140,
              "converged": true,
              "iterations": 23,
              "best_seed": 2027,
              "seed_runs": [
                {
                  "seed": 42,
                  "k": 3,
                  "valid": true,
                  "reason": "ok",
                  "bic": 13680.770288783,
                  "loglik": -6455.011936876234,
                  "n_params": 140,
                  "converged": true,
                  "iterations": 24
                },
                {
                  "seed": 1337,
                  "k": 3,
                  "valid": true,
                  "reason": "ok",
                  "bic": 13712.902239223306,
                  "loglik": -6471.077912096387,
                  "n_params": 140,
                  "converged": true,
                  "iterations": 19
                },
                {
                  "seed": 2027,
                  "k": 3,
                  "valid": true,
                  "reason": "ok",
                  "bic": 13680.770284499606,
                  "loglik": -6455.011934734537,
                  "n_params": 140,
                  "converged": true,
                  "iterations": 23
                }
              ]
            },
            {
              "k": 4,
              "valid": true,
              "reason": "ok",
              "bic": 12876.074162285127,
              "loglik": -5912.277919461023,
              "n_params": 191,
              "converged": true,
              "iterations": 28,
              "best_seed": 2027,
              "seed_runs": [
                {
                  "seed": 42,
                  "k": 4,
                  "valid": true,
                  "reason": "ok",
                  "bic": 12876.074163560223,
                  "loglik": -5912.277920098571,
                  "n_params": 191,
                  "converged": true,
                  "iterations": 31
                },
                {
                  "seed": 1337,
                  "k": 4,
                  "valid": true,
                  "reason": "ok",
                  "bic": 12876.07416359952,
                  "loglik": -5912.277920118219,
                  "n_params": 191,
                  "converged": true,
                  "iterations": 28
                },
                {
                  "seed": 2027,
                  "k": 4,
                  "valid": true,
                  "reason": "ok",
                  "bic": 12876.074162285127,
                  "loglik": -5912.277919461023,
                  "n_params": 191,
                  "converged": true,
                  "iterations": 28
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
                "bic": 12876.074163560223,
                "valid": true,
                "reason": null
              },
              {
                "seed": 1337,
                "selected_states": 4,
                "bic": 12876.07416359952,
                "valid": true,
                "reason": null
              },
              {
                "seed": 2027,
                "selected_states": 4,
                "bic": 12876.074162285127,
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
                  "2": 5999.107622143785,
                  "3": 5590.810474451012,
                  "4": 5432.208973700491
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
                  "2": 8774.895780071141,
                  "3": 8705.328371986256,
                  "4": 8083.975038005207
                },
                "valid": true
              },
              {
                "window_days": 246,
                "candidate_states": [
                  2,
                  3,
                  4
                ],
                "selected_states": 4,
                "bic_by_state": {
                  "2": 14408.998711830636,
                  "3": 13680.770288783,
                  "4": 12876.074169623913
                },
                "valid": true
              }
            ],
            "stable": true
          }
        },
        "robustness_diagnostics": {
          "history_used_days": 246,
          "n_features": 22,
          "candidate_states": [
            2,
            3,
            4
          ],
          "selected_states": 4,
          "bic_delta_vs_next_best": 804.6961222144782,
          "state_count_interpretation": "246 observations allowed the current rule to test up to 4 states; BIC preferred 4 with a 804.70 improvement versus the next best valid state count.",
          "parameter_count": {
            "formula": "k^2 - 1 + 2*k*d",
            "n_parameters": 191,
            "observations_per_parameter": 1.287958115183246,
            "parameter_pressure_label": "parameter_heavy"
          },
          "state_occupancy": {
            "min_effective_days_required": 7.38,
            "min_effective_days_observed": 25.999750876368466,
            "passes": true,
            "states": [
              {
                "id": 0,
                "label": "Calm / Liquid",
                "effective_days": 119.08194099331249,
                "pct_time": 0.48407293086712394,
                "passes_min_support": true
              },
              {
                "id": 1,
                "label": "Normal / Active",
                "effective_days": 25.999750876368466,
                "pct_time": 0.10569004421287995,
                "passes_min_support": true
              },
              {
                "id": 2,
                "label": "Stressed / Illiquid",
                "effective_days": 57.41341096338783,
                "pct_time": 0.23338784944466598,
                "passes_min_support": true
              },
              {
                "id": 3,
                "label": "Jump / Tail Shock",
                "effective_days": 43.50489716693122,
                "pct_time": 0.17684917547533016,
                "passes_min_support": true
              }
            ]
          },
          "transition_diagnostics": {
            "self_transition_probabilities": [
              0.9579012131971593,
              0.6545442392296815,
              0.8774975119851045,
              0.6344306057203744
            ],
            "expected_duration_days": [
              23.753653631000173,
              2.894726658400886,
              8.163099510912845,
              2.735458754610884
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
                "bic": 12876.074163560223,
                "valid": true,
                "reason": null
              },
              {
                "seed": 1337,
                "selected_states": 4,
                "bic": 12876.07416359952,
                "valid": true,
                "reason": null
              },
              {
                "seed": 2027,
                "selected_states": 4,
                "bic": 12876.074162285127,
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
                  "2": 5999.107622143785,
                  "3": 5590.810474451012,
                  "4": 5432.208973700491
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
                  "2": 8774.895780071141,
                  "3": 8705.328371986256,
                  "4": 8083.975038005207
                },
                "valid": true
              },
              {
                "window_days": 246,
                "candidate_states": [
                  2,
                  3,
                  4
                ],
                "selected_states": 4,
                "bic_by_state": {
                  "2": 14408.998711830636,
                  "3": 13680.770288783,
                  "4": 12876.074169623913
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
              "risk_score": 0.12243096926282199,
              "jump_probability": 0.22792206736525575,
              "jump_rate": 0.026368462306259454,
              "rolling_vol_10d": 0.03821020886258498,
              "downside_vol_10d": 0.022790359939551127,
              "drawdown_21d": 0.17654070355341972,
              "amihud_stress": 1.7428867860112742,
              "spread_rel": 255.95968776548554,
              "spread_ticks": 11.42819173687859,
              "log_notional": 13.086212340190853,
              "log_trade_count": 3.7082136166923636
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "risk_score": 0.1661798298037929,
              "jump_probability": 0.1726938569807843,
              "jump_rate": 0.07692128930771858,
              "rolling_vol_10d": 0.058358586195393115,
              "downside_vol_10d": 0.01753637043520043,
              "drawdown_21d": 0.07466729137860074,
              "amihud_stress": 0.6580383137026848,
              "spread_rel": 925.8591510438757,
              "spread_ticks": 17.08687884104104,
              "log_notional": 2.399047046069076,
              "log_trade_count": 0.29529040341517104
            },
            {
              "id": 2,
              "label": "Stressed / Illiquid",
              "risk_score": 0.24368089365295637,
              "jump_probability": 0.26125102776343556,
              "jump_rate": 0.11255988505644106,
              "rolling_vol_10d": 0.07727142031407651,
              "downside_vol_10d": 0.03242030452369325,
              "drawdown_21d": 0.1921107762082291,
              "amihud_stress": 2.189902684418173,
              "spread_rel": 263.79592043180264,
              "spread_ticks": 9.727206032922961,
              "log_notional": 12.540097720008758,
              "log_trade_count": 3.4288070736103444
            },
            {
              "id": 3,
              "label": "Jump / Tail Shock",
              "risk_score": 0.8387251028352759,
              "jump_probability": 0.44146686652101014,
              "jump_rate": 0.37691414294845915,
              "rolling_vol_10d": 0.4740573192462627,
              "downside_vol_10d": 0.055486329430672485,
              "drawdown_21d": 0.13224225976783352,
              "amihud_stress": 2.2076353855943798,
              "spread_rel": 323.1242703561548,
              "spread_ticks": 8.839379327404018,
              "log_notional": 14.665028203958418,
              "log_trade_count": 5.315163025095219
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
            "state": 3,
            "probabilities": [
              8.352721065547954e-28,
              0.0,
              2.1683488417992664e-05,
              0.999978316511582
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              1.5761586509162228e-24,
              0.0,
              3.911277863812761e-06,
              0.9999960887221362
            ],
            "jump_probability": 0.8867497114576637,
            "jump_score": 4.039532570491718
          },
          {
            "trade_date": "2026-05-12",
            "state": 2,
            "probabilities": [
              7.462881056949732e-16,
              6.182997202465071e-21,
              0.9999996928881109,
              3.0711188835236536e-07
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              7.80726894793351e-12,
              1.404184951689479e-19,
              0.9999982973856092,
              1.7026065834753583e-06
            ],
            "jump_probability": 0.14041641997052168,
            "jump_score": 0.6744907594765952
          },
          {
            "trade_date": "2026-05-13",
            "state": 2,
            "probabilities": [
              1.872199451283777e-15,
              1.3027633701092548e-26,
              0.9999999984031407,
              1.5968574629735464e-09
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              1.9586235440132388e-11,
              2.958635712138751e-25,
              0.9999999911275357,
              8.852878007719015e-09
            ],
            "jump_probability": 0.16638941052466089,
            "jump_score": 0.8487517508386118
          },
          {
            "trade_date": "2026-05-14",
            "state": 2,
            "probabilities": [
              4.458465937540132e-17,
              9.463442857901016e-84,
              0.9999999999436577,
              5.634220163143114e-11
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              4.664184918630213e-13,
              2.1491908780062488e-82,
              0.999999999687176,
              3.1235759934206975e-10
            ],
            "jump_probability": 0.25001700038027785,
            "jump_score": 1.2947638069318357
          },
          {
            "trade_date": "2026-05-15",
            "state": 2,
            "probabilities": [
              2.9779271503115947e-22,
              0.0,
              0.9999999976049185,
              2.3950814057186685e-09
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              2.8923358230222057e-18,
              0.0,
              0.9999999867299034,
              1.3270096550931555e-08
            ],
            "jump_probability": 0.5490038310378872,
            "jump_score": 2.420997021539514
          },
          {
            "trade_date": "2026-05-18",
            "state": 2,
            "probabilities": [
              5.85649358474748e-20,
              0.0,
              0.9999908414930201,
              9.158506979928404e-06
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              6.126517376463584e-16,
              0.0,
              0.9999492279264687,
              5.0772073530728206e-05
            ],
            "jump_probability": 0.3025449863144955,
            "jump_score": 1.523732144692044
          },
          {
            "trade_date": "2026-05-19",
            "state": 2,
            "probabilities": [
              3.0649047778049916e-16,
              2.092706195686861e-13,
              0.9999999986329697,
              1.366820754601734e-09
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              3.2063758435531134e-12,
              4.75263207142607e-12,
              0.9999999924144725,
              7.577568681379147e-09
            ],
            "jump_probability": 0.0943851847715875,
            "jump_score": 0.2837130895381499
          },
          {
            "trade_date": "2026-05-20",
            "state": 2,
            "probabilities": [
              3.2640658544103615e-18,
              2.8152533136898877e-119,
              0.9999999995565202,
              4.434797847402629e-10
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              3.414738229208201e-14,
              6.393570098986109e-118,
              0.9999999975413416,
              2.4586242163287252e-09
            ],
            "jump_probability": 0.20607427045926166,
            "jump_score": 1.0771710632793312
          },
          {
            "trade_date": "2026-05-21",
            "state": 2,
            "probabilities": [
              5.179337335118924e-17,
              1.9395555529550826e-116,
              0.9999999998465764,
              1.5342359519981748e-10
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              5.418364691330852e-13,
              4.4048193964474785e-115,
              0.9999999991488875,
              8.505707575068843e-10
            ],
            "jump_probability": 0.14041641997052168,
            "jump_score": 0.6744907594765952
          },
          {
            "trade_date": "2026-05-22",
            "state": 2,
            "probabilities": [
              1.9287809059139227e-13,
              4.387752134204221e-15,
              0.9999999986283497,
              1.3714530522533308e-09
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              1.9287809059139227e-13,
              4.387752134204221e-15,
              0.9999999986283497,
              1.3714530522533308e-09
            ],
            "jump_probability": 0.08770478390607545,
            "jump_score": 0.213489397277213
          }
        ],
        "methodology": {
          "estimation_window_days": 246,
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
          "market_link_display": "3.65",
          "sector_link_display": "0.83",
          "market_link_explainer": "Very high market link. A 1% market move has lined up with about a 3.65% stock move in the same direction in this state. This is a point estimate from 246 trading days.",
          "sector_link_explainer": "Moderate sector link. A 1% sector move has lined up with about a 0.83% stock move in the same direction in this state. This is a point estimate from 246 trading days.",
          "stock_persistence_display": "0.05",
          "point_estimate_note": "Point estimate only because the current state has 246 trading days.",
          "history_limited_note": "Read is based on 246 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "Stressed / Illiquid",
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "driver_share_pct": 88.6,
          "driver_share_display": "88.6%",
          "confidence_label": "High, limited history",
          "confidence_pct": 99.9,
          "confidence_display": ">99.9%",
          "probability_basis": "filtered",
          "display_confidence_pct": null,
          "confidence_note": "Based on 246 trading days relative to the 252-day target.",
          "history_days": 246,
          "history_limited": true,
          "volatility_label": "Stressed / Illiquid",
          "jump_risk_label": "Contained",
          "jump_risk_probability": 26.1,
          "jump_risk_score": 0.21,
          "jump_risk_note": "Jump risk is contained based on recent residual and return shocks.",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.8774975119851045,
          "effective_days": 57.4,
          "persistence_note": "This state looks more persistent, with a typical run length of about 8.2 days.",
          "expected_duration_days": 8.2
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
          "period_label": "2025-05-16 to 2025-05-30",
          "n_obs": 11,
          "partial_month": true,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "May: More mixed, though sector-driven still has the largest share.",
          "share_market": 0.24131770890702453,
          "share_sector": 0.3801648021022533,
          "share_company": 0.37851748899072224,
          "share_market_display": "24.1%",
          "share_sector_display": "38.0%",
          "share_company_display": "37.9%",
          "dominant_share_display": "38.0%"
        },
        {
          "month_key": "2025-06",
          "month_label": "June 2025",
          "month_short_label": "Jun",
          "period_label": "2025-06-02 to 2025-06-30",
          "n_obs": 21,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Jun: Mostly market-driven.",
          "share_market": 0.4740493382675521,
          "share_sector": 0.07525299987843069,
          "share_company": 0.4506976618540172,
          "share_market_display": "47.4%",
          "share_sector_display": "7.5%",
          "share_company_display": "45.1%",
          "dominant_share_display": "47.4%"
        },
        {
          "month_key": "2025-07",
          "month_label": "July 2025",
          "month_short_label": "Jul",
          "period_label": "2025-07-02 to 2025-07-31",
          "n_obs": 22,
          "partial_month": true,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "Jul: More mixed, though sector-driven still has the largest share.",
          "share_market": 0.25025651939505067,
          "share_sector": 0.37565705268732313,
          "share_company": 0.3740864279176261,
          "share_market_display": "25.0%",
          "share_sector_display": "37.6%",
          "share_company_display": "37.4%",
          "dominant_share_display": "37.6%"
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
          "share_market": 0.2813831789674975,
          "share_sector": 0.17913819234399087,
          "share_company": 0.5394786286885116,
          "share_market_display": "28.1%",
          "share_sector_display": "17.9%",
          "share_company_display": "53.9%",
          "dominant_share_display": "53.9%"
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
          "share_market": 0.24124717234987955,
          "share_sector": 0.21192731595495412,
          "share_company": 0.5468255116951664,
          "share_market_display": "24.1%",
          "share_sector_display": "21.2%",
          "share_company_display": "54.7%",
          "dominant_share_display": "54.7%"
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
          "share_market": 0.2944446657879194,
          "share_sector": 0.1359835838593687,
          "share_company": 0.569571750352712,
          "share_market_display": "29.4%",
          "share_sector_display": "13.6%",
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
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Nov: Still clearly company-driven.",
          "share_market": 0.062143417455170324,
          "share_sector": 0.2571747760979958,
          "share_company": 0.6806818064468338,
          "share_market_display": "6.2%",
          "share_sector_display": "25.7%",
          "share_company_display": "68.1%",
          "dominant_share_display": "68.1%"
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
          "share_market": 0.2372069611644084,
          "share_sector": 0.18313731785151602,
          "share_company": 0.5796557209840756,
          "share_market_display": "23.7%",
          "share_sector_display": "18.3%",
          "share_company_display": "58.0%",
          "dominant_share_display": "58.0%"
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
          "share_market": 0.04442937977107456,
          "share_sector": 0.130834663170135,
          "share_company": 0.8247359570587904,
          "share_market_display": "4.4%",
          "share_sector_display": "13.1%",
          "share_company_display": "82.5%",
          "dominant_share_display": "82.5%"
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
          "share_market": 0.2116083294925706,
          "share_sector": 0.17732425028393134,
          "share_company": 0.6110674202234981,
          "share_market_display": "21.2%",
          "share_sector_display": "17.7%",
          "share_company_display": "61.1%",
          "dominant_share_display": "61.1%"
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
          "share_market": 0.16273422977406002,
          "share_sector": 0.4170769210216313,
          "share_company": 0.4201888492043086,
          "share_market_display": "16.3%",
          "share_sector_display": "41.7%",
          "share_company_display": "42.0%",
          "dominant_share_display": "42.0%"
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
          "share_market": 0.36418606369038975,
          "share_sector": 0.16774670645606415,
          "share_company": 0.4680672298535462,
          "share_market_display": "36.4%",
          "share_sector_display": "16.8%",
          "share_company_display": "46.8%",
          "dominant_share_display": "46.8%"
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
          "summary": "May: Mostly company-driven.",
          "share_market": 0.2558489224513697,
          "share_sector": 0.1539923937780173,
          "share_company": 0.590158683770613,
          "share_market_display": "25.6%",
          "share_sector_display": "15.4%",
          "share_company_display": "59.0%",
          "dominant_share_display": "59.0%"
        }
      ],
      "regime": {
        "valid": true,
        "regime_method": "hmm_jump_aware",
        "n_regimes": 4,
        "current_regime_label": "Stressed / Illiquid",
        "current_regime_probability": 0.9999999986283497,
        "labels": [
          "Calm / Liquid",
          "Normal / Active",
          "Stressed / Illiquid",
          "Jump / Tail Shock"
        ],
        "pct_time": [
          0.48407293086712394,
          0.10569004421287995,
          0.23338784944466598,
          0.17684917547533016
        ],
        "current_regime": 2,
        "regimes": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "pct_time": 0.48407293086712394,
            "expected_duration_days": 23.753653631000173,
            "current_probability": 1.9287809059139227e-13,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 119.08194099331249,
            "volatility": {
              "median": 0.035990598543515696,
              "low": 0.035990598543515696,
              "high": 0.035990598543515696
            },
            "volatility_label": "Calm / Liquid",
            "jump_probability": 0.22792206736525575,
            "jump_rate": 0.026368462306259454,
            "risk_score": 0.12243096926282199,
            "metrics": {
              "rolling_vol_10d": 0.03821020886258498,
              "downside_vol_10d": 0.022790359939551127,
              "drawdown_21d": 0.17654070355341972,
              "amihud_stress": 1.7428867860112742,
              "spread_rel": 255.95968776548554,
              "spread_ticks": 11.42819173687859,
              "log_notional": 13.086212340190853,
              "log_trade_count": 3.7082136166923636
            }
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "pct_time": 0.10569004421287995,
            "expected_duration_days": 2.894726658400886,
            "current_probability": 4.387752134204221e-15,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 25.999750876368466,
            "volatility": {
              "median": 0.0024840947597445937,
              "low": 0.0024840947597445937,
              "high": 0.0024840947597445937
            },
            "volatility_label": "Normal / Active",
            "jump_probability": 0.1726938569807843,
            "jump_rate": 0.07692128930771858,
            "risk_score": 0.1661798298037929,
            "metrics": {
              "rolling_vol_10d": 0.058358586195393115,
              "downside_vol_10d": 0.01753637043520043,
              "drawdown_21d": 0.07466729137860074,
              "amihud_stress": 0.6580383137026848,
              "spread_rel": 925.8591510438757,
              "spread_ticks": 17.08687884104104,
              "log_notional": 2.399047046069076,
              "log_trade_count": 0.29529040341517104
            }
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "pct_time": 0.23338784944466598,
            "expected_duration_days": 8.163099510912845,
            "current_probability": 0.9999999986283497,
            "current_probability_display": ">99.9%",
            "current_probability_basis": "filtered",
            "n_days_effective": 57.41341096338783,
            "volatility": {
              "median": 0.04636829159228757,
              "low": 0.04636829159228757,
              "high": 0.04636829159228757
            },
            "volatility_label": "Stressed / Illiquid",
            "jump_probability": 0.26125102776343556,
            "jump_rate": 0.11255988505644106,
            "risk_score": 0.24368089365295637,
            "metrics": {
              "rolling_vol_10d": 0.07727142031407651,
              "downside_vol_10d": 0.03242030452369325,
              "drawdown_21d": 0.1921107762082291,
              "amihud_stress": 2.189902684418173,
              "spread_rel": 263.79592043180264,
              "spread_ticks": 9.727206032922961,
              "log_notional": 12.540097720008758,
              "log_trade_count": 3.4288070736103444
            }
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "pct_time": 0.17684917547533016,
            "expected_duration_days": 2.735458754610884,
            "current_probability": 1.3714530522533308e-09,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 43.50489716693122,
            "volatility": {
              "median": 0.8067517712972317,
              "low": 0.8067517712972317,
              "high": 0.8067517712972317
            },
            "volatility_label": "Jump / Tail Shock",
            "jump_probability": 0.44146686652101014,
            "jump_rate": 0.37691414294845915,
            "risk_score": 0.8387251028352759,
            "metrics": {
              "rolling_vol_10d": 0.4740573192462627,
              "downside_vol_10d": 0.055486329430672485,
              "drawdown_21d": 0.13224225976783352,
              "amihud_stress": 2.2076353855943798,
              "spread_rel": 323.1242703561548,
              "spread_ticks": 8.839379327404018,
              "log_notional": 14.665028203958418,
              "log_trade_count": 5.315163025095219
            }
          }
        ],
        "transitions": [
          [
            0.9579012131971593,
            8.40162872827818e-05,
            8.387776068880543e-05,
            0.04193089275486915
          ],
          [
            0.00038443698421059685,
            0.6545442392296815,
            0.03863847091507533,
            0.3064328528710327
          ],
          [
            0.05255519715829835,
            0.017859652857819694,
            0.8774975119851045,
            0.05208763799877731
          ],
          [
            0.04666962495685479,
            0.1606192153509346,
            0.15828055397183619,
            0.6344306057203744
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 4.76,
          "quantity": 1000.0,
          "value": 4760.0
        },
        {
          "level": 2,
          "price": 4.75,
          "quantity": 11000.0,
          "value": 52250.0
        },
        {
          "level": 3,
          "price": 4.74,
          "quantity": 15000.0,
          "value": 71100.0
        },
        {
          "level": 4,
          "price": 4.72,
          "quantity": 5000.0,
          "value": 23600.0
        },
        {
          "level": 5,
          "price": 4.71,
          "quantity": 1000.0,
          "value": 4710.0
        },
        {
          "level": 6,
          "price": 4.7,
          "quantity": 15000.0,
          "value": 70500.0
        },
        {
          "level": 7,
          "price": 4.68,
          "quantity": 1000.0,
          "value": 4680.0
        },
        {
          "level": 8,
          "price": 4.66,
          "quantity": 10000.0,
          "value": 46600.0
        },
        {
          "level": 9,
          "price": 4.65,
          "quantity": 11000.0,
          "value": 51150.00000000001
        },
        {
          "level": 10,
          "price": 4.61,
          "quantity": 2000.0,
          "value": 9220.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 4.84,
          "quantity": 2000.0,
          "value": 9680.0
        },
        {
          "level": 2,
          "price": 4.85,
          "quantity": 1000.0,
          "value": 4850.0
        },
        {
          "level": 3,
          "price": 4.86,
          "quantity": 3000.0,
          "value": 14580.000000000002
        },
        {
          "level": 4,
          "price": 4.87,
          "quantity": 1000.0,
          "value": 4870.0
        },
        {
          "level": 5,
          "price": 4.9,
          "quantity": 2000.0,
          "value": 9800.0
        },
        {
          "level": 6,
          "price": 4.93,
          "quantity": 1000.0,
          "value": 4930.0
        },
        {
          "level": 7,
          "price": 4.95,
          "quantity": 2000.0,
          "value": 9900.0
        },
        {
          "level": 8,
          "price": 4.98,
          "quantity": 2000.0,
          "value": 9960.0
        },
        {
          "level": 9,
          "price": 5.09,
          "quantity": 1000.0,
          "value": 5090.0
        },
        {
          "level": 10,
          "price": 5.1,
          "quantity": 1000.0,
          "value": 5100.0
        },
        {
          "level": 11,
          "price": 5.17,
          "quantity": 19000.0,
          "value": 98230.0
        },
        {
          "level": 12,
          "price": 5.18,
          "quantity": 1000.0,
          "value": 5180.0
        },
        {
          "level": 13,
          "price": 5.2,
          "quantity": 1000.0,
          "value": 5200.0
        },
        {
          "level": 14,
          "price": 5.3,
          "quantity": 1000.0,
          "value": 5300.0
        },
        {
          "level": 15,
          "price": 5.35,
          "quantity": 1000.0,
          "value": 5350.0
        },
        {
          "level": 16,
          "price": 5.4,
          "quantity": 1000.0,
          "value": 5400.0
        },
        {
          "level": 17,
          "price": 5.5,
          "quantity": 1000.0,
          "value": 5500.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-05-22 07:59:37.011000000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XHKG",
        "mid_price": 4.8,
        "spread_pct": 0.016666666666666684,
        "spread_ticks": 8.0,
        "tick_size": 0.01,
        "displayed_levels_per_side": 100,
        "bid_depth_notional_displayed": 338570.0,
        "ask_depth_notional_displayed": 208920.0,
        "bid_depth_notional_top10": 338570.0,
        "ask_depth_notional_top10": 208920.0,
        "bid_ask_depth_ratio": 1.6206
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 365,
        "history_limited": false,
        "trade_days_used": 224,
        "n_trades_used": 68849,
        "first_trade_date": "2025-05-23",
        "last_trade_date": "2026-05-22",
        "window_label": "May 23, 2025 to May 22, 2026",
        "window_short_label": "May 23, 2025 to May 22, 2026",
        "trade_days_label": "224 trading days",
        "trade_count_label": "68,849 trades",
        "window_detail_label": "224 trading days • 68,849 trades",
        "history_note": "Trade-size percentiles use May 23, 2025 to May 22, 2026 history (224 trading days • 68,849 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 49360.0,
            "impact_pct": -0.010216000000000001,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 14.58,
            "pct_of_adv": 7.56
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 74900.0,
            "impact_pct": -0.010783000000000001,
            "filled_pct": 100.0,
            "levels_consumed": 3,
            "pct_of_bid_depth": 22.12,
            "pct_of_adv": 11.48
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 1012070.98,
            "impact_pct": -0.020341,
            "filled_pct": 33.5,
            "levels_consumed": 10,
            "pct_of_bid_depth": 298.93,
            "pct_of_adv": 155.09
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
            "order_id": "12588545",
            "timestamp": "2026-05-22 01:20:28.745000000",
            "local_timestamp": "2026-05-22 09:20:28",
            "posted_price": 5.17,
            "size_shares": 19000.0,
            "notional": 98230.0,
            "impact_pct": -0.011191,
            "filled_pct": 100.0,
            "levels_consumed": 3,
            "pct_of_bid_depth": 29.01,
            "price_vs_mid_pct": 7.708,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "5083767553",
            "timestamp": "2026-05-22 07:58:52.439000000",
            "local_timestamp": "2026-05-22 15:58:52",
            "posted_price": 4.88,
            "size_shares": 5000.0,
            "notional": 24400.0,
            "impact_pct": -0.010011,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 7.21,
            "price_vs_mid_pct": 1.667,
            "executed_event_count": 0,
            "event_count": 2
          },
          {
            "rank": 3,
            "order_id": "1031681025",
            "timestamp": "2026-05-22 02:00:22.206000000",
            "local_timestamp": "2026-05-22 10:00:22",
            "posted_price": 4.89,
            "size_shares": 4000.0,
            "notional": 19560.0,
            "impact_pct": -0.00991,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 5.78,
            "price_vs_mid_pct": 1.875,
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
            "spread_pct": 0.020920502092050135,
            "spread_ticks": 9.999999999999964,
            "bid_depth_notional": 325390.0,
            "ask_depth_notional": 203930.0,
            "mid_price": 4.78
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.0021030494216613643,
            "spread_ticks": 0.9999999999999787,
            "bid_depth_notional": 381430.0,
            "ask_depth_notional": 217940.0,
            "mid_price": 4.755
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.014568158168574461,
            "spread_ticks": 7.000000000000028,
            "bid_depth_notional": 433830.0,
            "ask_depth_notional": 194340.0,
            "mid_price": 4.805
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.01670146137787058,
            "spread_ticks": 8.000000000000007,
            "bid_depth_notional": 462150.0,
            "ask_depth_notional": 208850.0,
            "mid_price": 4.79
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.01670146137787058,
            "spread_ticks": 8.000000000000007,
            "bid_depth_notional": 466860.0,
            "ask_depth_notional": 208850.0,
            "mid_price": 4.79
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.012526096033403027,
            "spread_ticks": 6.00000000000005,
            "bid_depth_notional": 524760.0,
            "ask_depth_notional": 204010.0,
            "mid_price": 4.79
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.014629049111807792,
            "spread_ticks": 7.000000000000028,
            "bid_depth_notional": 481900.0,
            "ask_depth_notional": 213740.0,
            "mid_price": 4.785
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.010471204188481638,
            "spread_ticks": 4.999999999999982,
            "bid_depth_notional": 557580.0,
            "ask_depth_notional": 213720.0,
            "mid_price": 4.775
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.010471204188481638,
            "spread_ticks": 4.999999999999982,
            "bid_depth_notional": 562330.0,
            "ask_depth_notional": 218520.0,
            "mid_price": 4.775
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.004158004158004254,
            "spread_ticks": 2.000000000000046,
            "bid_depth_notional": 562880.0,
            "ask_depth_notional": 213740.0,
            "mid_price": 4.8100000000000005
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.016666666666666684,
            "spread_ticks": 8.000000000000007,
            "bid_depth_notional": 338570.0,
            "ask_depth_notional": 208920.0,
            "mid_price": 4.8
          }
        ],
        "summary": {
          "median_spread_pct": 0.014568158168574461,
          "median_spread_ticks": 7.000000000000028,
          "median_bid_depth_notional": 466860.0,
          "median_ask_depth_notional": 208920.0,
          "tightest_bucket": "10:00",
          "widest_bucket": "09:30",
          "deepest_bid_bucket": "15:00",
          "thinnest_bid_bucket": "09:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 7.7,
      "peers": [
        {
          "ticker": "2508",
          "pct": 29.2
        },
        {
          "ticker": "2521",
          "pct": 47.8
        },
        {
          "ticker": "6100",
          "pct": 97.5
        },
        {
          "ticker": "2443",
          "pct": 99.9
        },
        {
          "ticker": "331",
          "pct": 163.9
        },
        {
          "ticker": "1483",
          "pct": 173.3
        },
        {
          "ticker": "6959",
          "pct": 3734.1
        },
        {
          "ticker": "1463",
          "pct": 176991.2
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 25,
          "n_runs": 0,
          "n_trade_days": 1,
          "first_trade_date": "2026-05-22",
          "last_trade_date": "2026-05-22",
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
              "retail": 25,
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
            "avg": 16962.8,
            "median": 14250.0
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
          "n_trades": 1692,
          "n_runs": 0,
          "n_trade_days": 21,
          "first_trade_date": "2026-04-23",
          "last_trade_date": "2026-05-22",
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
            "retail_pct": 0.9710401891252955,
            "mixed_pct": 0.028959810874704492,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.8065095708658697,
            "mixed_qty_pct": 0.19349042913413034,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.8074146155049804,
            "mixed_notional_pct": 0.19258538449501966,
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
              "retail": 1643,
              "mixed": 49,
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
            "avg": 16740.01891252955,
            "median": 8740.0
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
          "n_trades": 2594,
          "n_runs": 0,
          "n_trade_days": 63,
          "first_trade_date": "2026-02-16",
          "last_trade_date": "2026-05-22",
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
            "retail_pct": 0.9753276792598303,
            "mixed_pct": 0.02467232074016962,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.8169509551274184,
            "mixed_qty_pct": 0.1830490448725815,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.8159334113148426,
            "mixed_notional_pct": 0.18406658868515732,
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
              "retail": 2530,
              "mixed": 64,
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
            "avg": 15644.668465690054,
            "median": 7540.0
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
          "n_trades": 4516,
          "n_runs": 0,
          "n_trade_days": 125,
          "first_trade_date": "2025-11-06",
          "last_trade_date": "2026-05-22",
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
            "retail_pct": 0.979406554472985,
            "mixed_pct": 0.02059344552701506,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.8313725443626773,
            "mixed_qty_pct": 0.16862745563732273,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.8319630395243831,
            "mixed_notional_pct": 0.16803696047561692,
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
              "retail": 4423,
              "mixed": 93,
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
            "avg": 14803.42263064659,
            "median": 6820.0
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
      "n_trades": 4516,
      "n_runs": 0,
      "n_trade_days": 125,
      "first_trade_date": "2025-11-06",
      "last_trade_date": "2026-05-22",
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
        "retail_pct": 0.979406554472985,
        "mixed_pct": 0.02059344552701506,
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
        "retail_notional_pct": 0.8319630395243831,
        "mixed_notional_pct": 0.16803696047561692,
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
        "avg": 14803.42263064659,
        "median": 6820.0
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
            "n_trades": 967,
            "n_runs": 0,
            "retail_pct": 0.96794208893485,
            "mixed_pct": 0.03205791106514995,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 17284.52740434333,
            "avg_run_notional": null,
            "retail_qty_pct": 0.7922286448298009,
            "mixed_qty_pct": 0.2077713551701991,
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
            "total_quantity": 3114000.0
          },
          {
            "month": "2026-04",
            "n_trades": 1035,
            "n_runs": 0,
            "retail_pct": 0.9748792270531401,
            "mixed_pct": 0.025120772946859903,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 15822.313043478262,
            "avg_run_notional": null,
            "retail_qty_pct": 0.800056322162771,
            "mixed_qty_pct": 0.19994367783722894,
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
            "total_quantity": 4261200.0
          },
          {
            "month": "2026-03",
            "n_trades": 327,
            "n_runs": 0,
            "retail_pct": 0.9938837920489296,
            "mixed_pct": 0.0061162079510703364,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 11479.25993883792,
            "avg_run_notional": null,
            "retail_qty_pct": 0.9391036050665801,
            "mixed_qty_pct": 0.06089639493341994,
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
            "total_quantity": 1231600.0
          },
          {
            "month": "2026-02",
            "n_trades": 388,
            "n_runs": 0,
            "retail_pct": 0.979381443298969,
            "mixed_pct": 0.020618556701030927,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 13532.88144329897,
            "avg_run_notional": null,
            "retail_qty_pct": 0.7743682310469314,
            "mixed_qty_pct": 0.22563176895306858,
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
            "total_quantity": 1772800.0
          },
          {
            "month": "2026-01",
            "n_trades": 431,
            "n_runs": 0,
            "retail_pct": 0.9791183294663574,
            "mixed_pct": 0.02088167053364269,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 13832.802784222738,
            "avg_run_notional": null,
            "retail_qty_pct": 0.828644786782764,
            "mixed_qty_pct": 0.17135521321723599,
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
            "total_quantity": 1791600.0
          },
          {
            "month": "2025-12",
            "n_trades": 238,
            "n_runs": 0,
            "retail_pct": 0.9915966386554622,
            "mixed_pct": 0.008403361344537815,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 10804.655462184874,
            "avg_run_notional": null,
            "retail_qty_pct": 0.8952448210922788,
            "mixed_qty_pct": 0.10475517890772128,
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
            "total_quantity": 849600.0
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
      "total_trades": 3525,
      "price_moving_trades": 1853,
      "pct_price_moving": 52.56737588652483,
      "all_movers": {
        "count": 1853,
        "avg_size": 14996.690016189963,
        "median_size": 6560.0,
        "retail_count": 1805,
        "mixed_count": 48,
        "institutional_count": 0,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 97.40960604425256,
        "mixed_pct": 2.5903939557474365,
        "instit_pct": 0.0,
        "unclear_pct": null
      },
      "positive_movers": {
        "count": 924,
        "avg_size": 14980.192857142856,
        "median_size": 6800.0,
        "retail_count": 902,
        "mixed_count": 22,
        "institutional_count": 0,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 97.61904761904762,
        "mixed_pct": 2.380952380952381,
        "instit_pct": 0.0,
        "unclear_pct": null
      },
      "negative_movers": {
        "count": 929,
        "avg_size": 15013.098385360603,
        "median_size": 6320.0,
        "retail_count": 903,
        "mixed_count": 26,
        "institutional_count": 0,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 97.20129171151775,
        "mixed_pct": 2.798708288482239,
        "instit_pct": 0.0,
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
          "opening": 0.0,
          "continuous": 0.99254847977017,
          "closing": 0.007451520229830022,
          "auctions": 0.007451520229830022,
          "other": 0.0
        },
        "1M": {
          "opening": 0.00029836064201997425,
          "continuous": 0.9965757114821041,
          "closing": 0.003125927875875937,
          "auctions": 0.003424288517895911,
          "other": 0.0
        },
        "3M": {
          "opening": 0.0003641209058188878,
          "continuous": 0.9964162449485283,
          "closing": 0.003219634145652782,
          "auctions": 0.0035837550514716695,
          "other": 0.0
        },
        "6M": {
          "opening": 0.0003150781862125566,
          "continuous": 0.993162964753819,
          "closing": 0.006521957059968395,
          "auctions": 0.0068370352461809515,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.20209091833072013,
        "1M": 0.23051593547873592,
        "3M": 0.3031275279543183,
        "6M": 0.32672643605134777
      },
      "profile_buckets": [
        {
          "time": "09:00",
          "avg_share": 0.0067
        },
        {
          "time": "09:30",
          "avg_share": 0.1057
        },
        {
          "time": "10:00",
          "avg_share": 0.1007
        },
        {
          "time": "10:30",
          "avg_share": 0.0972
        },
        {
          "time": "11:00",
          "avg_share": 0.0739
        },
        {
          "time": "11:30",
          "avg_share": 0.0585
        },
        {
          "time": "13:00",
          "avg_share": 0.0817
        },
        {
          "time": "13:30",
          "avg_share": 0.1164
        },
        {
          "time": "14:00",
          "avg_share": 0.0563
        },
        {
          "time": "14:30",
          "avg_share": 0.0794
        },
        {
          "time": "15:00",
          "avg_share": 0.0771
        },
        {
          "time": "15:30",
          "avg_share": 0.1323
        },
        {
          "time": "16:00",
          "avg_share": 0.0141
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "1328",
          "auctions_pct": 0.4754884297982884,
          "hhi": 0.29074855634187463,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400",
            "you": true
          }
        },
        {
          "ticker": "1483",
          "auctions_pct": 1.6657286745990536,
          "hhi": 0.6024820996318263,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "2443",
          "auctions_pct": 1.3785996866997146,
          "hhi": 0.18315395593096817,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "6100",
          "auctions_pct": 0.9680461179238496,
          "hhi": 0.16610839508065933,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "331",
          "auctions_pct": 1.0073316103418601,
          "hhi": 0.31131683467220134,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "2521",
          "auctions_pct": 0.497284833763758,
          "hhi": 0.3062641658775862,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "6959",
          "auctions_pct": 1.0137083351157068,
          "hhi": 0.49982333117305433,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "2508",
          "auctions_pct": 3.6377819814185197,
          "hhi": 0.19198419973457795,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "1463",
          "auctions_pct": 0.07921395224266231,
          "hhi": 0.735826568287032,
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
